# Copyright (c) 2014-2016, Santiago Videla
#
# This file is part of caspo.
#
# caspo is free software: you can redistribute it and/or modify
# it under the terms of the GNU General Public License as published by
# the Free Software Foundation, either version 3 of the License, or
# (at your option) any later version.
#
# caspo is distributed in the hope that it will be useful,
# but WITHOUT ANY WARRANTY; without even the implied warranty of
# MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
# GNU General Public License for more details.
#
# You should have received a copy of the GNU General Public License
# along with caspo.  If not, see <http://www.gnu.org/licenses/>.import random
# -*- coding: utf-8 -*-

import os, logging

import itertools as it
import pandas as pd

import gringo

from caspo import core

class Controller(object):
    """
    Controller of logical networks
    
    Parameters
    ----------
    networks : :class:`caspo.core.logicalnetwork.LogicalNetworkList`
        List of logical networks
    
    scenarios : :class:`caspo.control.scenario.ScenarioList`
        List of intervention scenarios
    
    Attributes
    ----------
        networks : :class:`caspo.core.logicalnetwork.LogicalNetworkList`
        scenarios : :class:`caspo.control.scenario.ScenarioList`
        strategies : :class:`caspo.core.clamping.ClampingList`
        instance : str
        encodings : dict
        logger : Logger
    """
    def __init__(self, networks, scenarios):
        self.networks = networks
        self.scenarios = scenarios
        self.strategies = core.ClampingList()

        fs = networks.to_funset().union(scenarios.to_funset())
        for v in it.ifilter(lambda n: n not in scenarios.exclude, networks.hg.nodes):
            fs.add(gringo.Fun("candidate",[v]))

        self.instance = ". ".join(map(str, fs)) + ". #show intervention/2."

        root = os.path.dirname(__file__)
        self.encodings = {
            'control':    os.path.join(root, 'encodings/encoding.lp')
        }

        self.logger = logging.getLogger("caspo")

    def __save__(self,model):
        tuples = (f.args() for f in model.atoms())
        self._strategies.append(core.Clamping.from_tuples(tuples))

    def control(self, size=0, configure=None):
        """
        Finds all inclusion-minimal intervention strategies up to the given size.
        Each intervention strategy is saved as a :class:`caspo.core.clamping.Clamping` 
        in the :attr:`strategies` attribute.
        
        Parameters
        ----------
        size : int
            Maximum size for intervention sets
        
        configure : callable
            Callable object responsible of setting clingo configuration
        """
        self._strategies = []

        clingo = gringo.Control(['-c maxsize=%s' % size])

        clingo.conf.solve.models = '0'
        if configure:
            def overwrite(args, proxy):
                for i in xrange(args.threads):
                    proxy.solver[i].heuristic = 'domain'
                    proxy.solver[i].dom_mod = '5,16'

            configure(clingo.conf, overwrite)
        else:
            clingo.conf.solver.heuristic = 'domain'
            clingo.conf.solver.dom_mod = '5,16'

        clingo.conf.solve.enum_mode = 'domRec'

        clingo.add("base", [], self.instance)
        clingo.load(self.encodings['control'])

        clingo.ground([("base", [])])
        clingo.solve(on_model=self.__save__)

        n,t = len(self._strategies), clingo.stats['time_total']
        self.logger.info("%s optimal intervention strategies found in %.4fs" % (n,t))

        self.strategies = core.ClampingList(self._strategies)
