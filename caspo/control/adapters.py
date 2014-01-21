# Copyright (c) 2014, Santiago Videla
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
from zope import component
from pyzcasp import asp, potassco
from caspo import core

from interfaces import *
from impl import *

class ScenariosReaders2MultiScenario(object):
    component.adapts(IConstraintsReader, IGoalsReader)
    interface.implements(IMultiScenario)
    
    def __init__(self, constraints, goals):
        super(ScenariosReaders2MultiScenario, self).__init__()
        
        self.scenarios = set()
        self.__scenarios = dict()
        self.exclude = set()
        for c,g in zip(constraints, goals):
            scenario = Scenario(c, g)
            self.exclude = self.exclude.union(set(map(lambda (v,s): v, c)))
            self.exclude = self.exclude.union(set(map(lambda (v,s): v, g)))
            
            if scenario not in self.scenarios:
                scenario_name = len(self.scenarios)
                self.__scenarios[scenario] = scenario_name
                self.scenarios.add(scenario)
                
    def get_scenario_name(self, scenario):
        return self.__scenarios[scenario]

class ScenarioInMultiScenario2TermSet(asp.TermSetAdapter):
    component.adapts(IScenario, IMultiScenario)
    
    def __init__(self, scenario, multiscenario):
        super(ScenarioInMultiScenario2TermSet, self).__init__()
        
        scenario_name = multiscenario.get_scenario_name(scenario)
        constraints, goals = scenario
        for v,s in constraints:
            self.termset.add(asp.Term('constrained', [scenario_name, v, s]))
            
        for v,s in goals:
            self.termset.add(asp.Term('goal', [scenario_name, v, s]))

class MultiScenario2TermSet(asp.TermSetAdapter):
    component.adapts(IMultiScenario)
    
    def __init__(self, multiscenario):
        super(MultiScenario2TermSet, self).__init__()
        
        for scenario in multiscenario.scenarios:
            self.termset.add(asp.Term('scenario', [multiscenario.get_scenario_name(scenario)]))
            self.termset = self.termset.union(component.getMultiAdapter((scenario, multiscenario), asp.ITermSet))

class NetworksMultiScenario2TermSet(asp.TermSetAdapter):
    component.adapts(core.ILogicalNetworkSet, IMultiScenario)
    
    def __init__(self, networks, multiscenario):
        super(NetworksMultiScenario2TermSet, self).__init__()
        
        names = component.getUtility(core.ILogicalNames)
        for var in names.variables:
            if var not in multiscenario.exclude:
                self.termset.add(asp.Term('candidate', [var]))
            
        self.termset = self.termset.union(asp.interfaces.ITermSet(networks))
        self.termset = self.termset.union(asp.ITermSet(multiscenario))    

class PotasscoDisjunctiveController(object):
    component.adapts(asp.ITermSet, potassco.IGringoGrounder, potassco.IClaspDSolver)
    interface.implements(IController)
    
    def __init__(self, termset, gringo, clasp):
        super(PotasscoDisjunctiveController, self).__init__()
        self.termset = termset
        self.gringo = gringo
        self.clasp = clasp
        self.grover = component.getMultiAdapter((gringo, clasp), potassco.IMetaGrounderSolver)
            
    @asp.cleanrun        
    def control(self, size=0):
        reg = component.getUtility(asp.IEncodingRegistry, 'caspo')
        
        programs = [self.termset.to_file(), reg.get_encoding('control.full')]
        
        self.grover.optimize = asp.TermSet([asp.Term('optimize',[1,1,'incl'], False)])
        stdin="""
        #hide.
        #show hold(atom(intervention(_,_))).
        """
        self.grover.run(stdin, grounder_args=programs + ['-c maxsize=%s' % size], solver_args=["0"])
        
    def __iter__(self):
        for termset in self.grover:
            yield IStrategy(termset)

class PotasscoHeuristicController(object):
    component.adapts(asp.ITermSet, potassco.IGringoGrounder, potassco.IClaspHSolver)
    interface.implements(IController)
        
    def __init__(self, termset, gringo, clasp):
        super(PotasscoHeuristicController, self).__init__()
        self.termset = termset
        self.gringo = gringo
        self.clasp = clasp
        self.grover = component.getMultiAdapter((gringo, clasp), asp.IGrounderSolver)

    @asp.cleanrun            
    def control(self, size=0):
        reg = component.getUtility(asp.IEncodingRegistry, 'caspo')

        programs = [self.termset.to_file(), reg.get_encoding('control.full'), reg.get_encoding('control.heuristic')]
        stdin = """
        #hide.
        #show intervention/2.
        """     
        self.grover.run(stdin, grounder_args=programs + ['-c maxsize=%s' % size], solver_args=['0', '-e record', '--opt-ignore'])

    def __iter__(self):
        for ts in self.grover:
            yield IStrategy(asp.TermSet(filter(lambda t: len(t.args) == 2, ts)))

class TermSet2Strategy(object):
    component.adapts(asp.ITermSet)
    interface.implements(IStrategy)
    
    def __init__(self, termset):
        self.strategy = Strategy(map(lambda term: core.Literal(term.arg(0),term.arg(1)), termset))
        
    def __iter__(self):
        return iter(self.strategy)
        
    def __str__(self):
        return str(self.strategy)