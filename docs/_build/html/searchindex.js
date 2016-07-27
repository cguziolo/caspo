Search.setIndex({envversion:46,filenames:["api","classify","control","core","design","index","install","learn","usage","visualize"],objects:{"caspo.classify":{classifier:[1,0,0,"-"]},"caspo.classify.classifier":{Classifier:[1,3,1,""]},"caspo.classify.classifier.Classifier":{classify:[1,1,1,""],networks:[1,2,1,""],setup:[1,2,1,""]},"caspo.control":{controller:[2,0,0,"-"],scenario:[2,0,0,"-"]},"caspo.control.controller":{Controller:[2,3,1,""]},"caspo.control.controller.Controller":{control:[2,1,1,""],encodings:[2,2,1,""],instance:[2,2,1,""],logger:[2,2,1,""],networks:[2,2,1,""],scenarios:[2,2,1,""],strategies:[2,2,1,""]},"caspo.control.scenario":{ScenarioList:[2,3,1,""]},"caspo.control.scenario.ScenarioList":{constraints:[2,2,1,""],goals:[2,2,1,""],to_funset:[2,1,1,""]},"caspo.core":{clamping:[3,0,0,"-"],clause:[3,0,0,"-"],dataset:[3,0,0,"-"],graph:[3,0,0,"-"],hypergraph:[3,0,0,"-"],literal:[3,0,0,"-"],logicalnetwork:[3,0,0,"-"],mapping:[3,0,0,"-"],setup:[3,0,0,"-"]},"caspo.core.clamping":{Clamping:[3,3,1,""],ClampingList:[3,3,1,""]},"caspo.core.clamping.Clamping":{bool:[3,1,1,""],drop_literals:[3,1,1,""],from_tuples:[3,5,1,""],has_variable:[3,1,1,""],to_array:[3,1,1,""],to_funset:[3,1,1,""]},"caspo.core.clamping.ClampingList":{combinatorics:[3,1,1,""],differences:[3,1,1,""],drop_literals:[3,1,1,""],frequencies_iter:[3,1,1,""],frequency:[3,1,1,""],from_csv:[3,5,1,""],from_dataframe:[3,5,1,""],to_csv:[3,1,1,""],to_dataframe:[3,1,1,""],to_funset:[3,1,1,""]},"caspo.core.clause":{Clause:[3,3,1,""]},"caspo.core.clause.Clause":{"__str__":[3,1,1,""],bool:[3,1,1,""],from_str:[3,5,1,""]},"caspo.core.dataset":{Dataset:[3,3,1,""]},"caspo.core.dataset.Dataset":{clampings:[3,2,1,""],is_inhibitor:[3,1,1,""],is_readout:[3,1,1,""],is_stimulus:[3,1,1,""],readouts:[3,2,1,""],setup:[3,2,1,""],to_funset:[3,1,1,""]},"caspo.core.graph":{Graph:[3,3,1,""]},"caspo.core.graph.Graph":{"__plot__":[3,1,1,""],compress:[3,1,1,""],from_tuples:[3,5,1,""],predecessors:[3,1,1,""],read_sif:[3,5,1,""],successors:[3,1,1,""]},"caspo.core.hypergraph":{HyperGraph:[3,3,1,""]},"caspo.core.hypergraph.HyperGraph":{clauses:[3,2,1,""],clauses_idx:[3,2,1,""],edges:[3,2,1,""],from_graph:[3,5,1,""],hyper:[3,2,1,""],mappings:[3,2,1,""],nodes:[3,2,1,""],to_funset:[3,1,1,""],variable:[3,1,1,""]},"caspo.core.literal":{Literal:[3,3,1,""]},"caspo.core.literal.Literal":{"__str__":[3,1,1,""],from_str:[3,5,1,""],signature:[3,2,1,""],variable:[3,2,1,""]},"caspo.core.logicalnetwork":{LogicalNetwork:[3,3,1,""],LogicalNetworkList:[3,3,1,""]},"caspo.core.logicalnetwork.LogicalNetwork":{"__plot__":[3,1,1,""],fixpoint:[3,1,1,""],formulas_iter:[3,1,1,""],from_hypertuples:[3,5,1,""],known_eq:[3,2,1,""],predictions:[3,1,1,""],size:[3,2,1,""],step:[3,1,1,""],to_array:[3,1,1,""],to_graph:[3,1,1,""],variables:[3,1,1,""]},"caspo.core.logicalnetwork.LogicalNetworkList":{"__iter__":[3,1,1,""],"__len__":[3,1,1,""],"__plot__":[3,1,1,""],append:[3,1,1,""],combinatorics:[3,1,1,""],concat:[3,1,1,""],frequencies_iter:[3,1,1,""],frequency:[3,1,1,""],from_csv:[3,5,1,""],from_hypergraph:[3,5,1,""],hg:[3,2,1,""],known_eq:[3,2,1,""],matrix:[3,2,1,""],predictions:[3,1,1,""],reset:[3,1,1,""],split:[3,1,1,""],to_csv:[3,1,1,""],to_dataframe:[3,1,1,""],to_funset:[3,1,1,""],weighted_mse:[3,1,1,""]},"caspo.core.mapping":{Mapping:[3,3,1,""],MappingList:[3,3,1,""]},"caspo.core.mapping.Mapping":{"__str__":[3,1,1,""],clause:[3,2,1,""],from_str:[3,5,1,""],target:[3,2,1,""]},"caspo.core.mapping.MappingList":{"__getitem__":[3,1,1,""],"__iter__":[3,1,1,""],"__len__":[3,1,1,""],iteritems:[3,1,1,""]},"caspo.core.setup":{Setup:[3,3,1,""]},"caspo.core.setup.Setup":{"__len__":[3,1,1,""],clampings_iter:[3,1,1,""],cues:[3,1,1,""],filter:[3,1,1,""],from_json:[3,5,1,""],inhibitors:[3,2,1,""],nodes:[3,2,1,""],readouts:[3,2,1,""],stimuli:[3,2,1,""],to_funset:[3,1,1,""],to_json:[3,1,1,""]},"caspo.design":{designer:[4,0,0,"-"]},"caspo.design.designer":{Designer:[4,3,1,""]},"caspo.design.designer.Designer":{candidates:[4,2,1,""],design:[4,1,1,""],designs:[4,2,1,""],encodings:[4,2,1,""],instance:[4,2,1,""],logger:[4,2,1,""],networks:[4,2,1,""],setup:[4,2,1,""]},"caspo.learn":{learner:[7,0,0,"-"]},"caspo.learn.learner":{Learner:[7,3,1,""]},"caspo.learn.learner.Learner":{ceil:[7,1,1,""],dataset:[7,2,1,""],discrete:[7,2,1,""],encodings:[7,2,1,""],factor:[7,2,1,""],floor:[7,1,1,""],graph:[7,2,1,""],hypergraph:[7,2,1,""],instance:[7,2,1,""],learn:[7,1,1,""],length:[7,2,1,""],logger:[7,2,1,""],networks:[7,2,1,""],optimum:[7,2,1,""],random:[7,1,1,""],round:[7,1,1,""]},"caspo.visualize":{network:[9,0,0,"-"]},"caspo.visualize.network":{coloured_network:[9,4,1,""]}},objnames:{"0":["py","module","Python module"],"1":["py","method","Python method"],"2":["py","attribute","Python attribute"],"3":["py","class","Python class"],"4":["py","function","Python function"],"5":["py","classmethod","Python class method"]},objtypes:{"0":"py:module","1":"py:method","2":"py:attribute","3":"py:class","4":"py:function","5":"py:classmethod"},terms:{"__getitem__":3,"__iter__":3,"__len__":3,"__plot__":[3,9],"__str__":3,"__version__":6,"boolean":[2,3,4],"case":[3,6],"class":[1,2,3,4,7],"default":[1,3,6,8],"final":6,"float":[3,7],"function":[3,6,7,8],"import":6,"int":[1,2,3,4,7],"new":3,"return":[1,2,3,7,9],"true":[3,4],"var":8,"while":3,abl:6,about:6,absolut:[2,3],accord:3,acquisit:3,activ:[3,6],addit:8,after:6,again:[],alia:6,all:[1,2,3,4,6,7,8],allow:[2,8],allow_constraint:2,allow_go:2,also:[6,8],altern:6,among:[4,8],anaconda:[],analyt:6,analyz:[],ani:[3,6],anoth:3,answer:6,anyth:[6,8],append:3,argument:[6,8],arrai:3,ask:[6,8],asp:[6,8],assum:[3,6],attr:3,attribut:[2,3,4],avail:[1,3],averag:[3,8],avg:8,base:3,behavior:[1,6,8],between:3,bin:6,binari:3,bioasp:6,bool:3,both:3,build:6,callabl:[1,2,3,4,7],can:[3,6],candid:4,cannot:8,ceil:[6,7,8],celllin:8,chmod:6,clamp:2,clampign:3,clampinglist:[2,3,4],clampings_it:3,classfi:[],classifi:[],classmethod:3,claus:[],clauses_idx:3,clingo:[1,2,4,6,7],closest:7,cmd:[6,8],cname:3,colour:9,coloured_network:9,column:[3,8],com:6,combin:8,combinator:3,comma:8,command:6,compil:6,compress:3,comput:[1,3,6,8],concat:3,concaten:3,conda:6,condit:8,conf:[6,8],configur:[1,2,4,6,7,8],conjunct:[3,6,7,8],constraint:[2,8],consum:[6,8],contain:6,content:[5,6],continuum:6,control:[],convert:[2,3],copi:[3,6],copyright:6,core:[1,2],correspond:[3,8],could:8,creat:[3,6],credit:6,csv:[2,3,6,8],cue:3,current:[3,6],cytoscap:3,data:3,datafram:3,dataset:[],decid:6,depend:[6,8],describ:[3,6,8],design:[],detail:[3,6,8],dict:[2,3,4,7],dictionari:3,differ:[3,8],digraph:3,direct:3,directori:[6,8],discret:[3,6,7,8],discrimin:[4,8],distribut:[],docker:[],don:6,done:[],dot:9,download:6,drop:3,drop_liter:3,dtype:3,each:[1,2,3,4,6,8],earli:3,edg:[3,8],either:[2,3,8,9],empti:[3,6],encod:[2,4,7],end:[3,6],enhanc:6,entri:3,enumer:7,env:6,environ:6,equal:[4,8],equival:3,essenti:6,evalu:3,everi:6,everyth:6,exampl:6,except:8,exclud:3,exclude_compress:3,exclus:[3,8],execut:6,exhibit:8,exit:[6,8],expand:3,expect:6,experi:[4,8],experiment:[1,3,6,7],extend:3,extra:6,factor:[6,7,8],fals:[2,3,4,8],famili:8,fastpath:3,featur:6,file:[2,3,6],filenam:[2,3,9],filter:3,find:[2,4,6],first:[3,6,7],fit:[6,7,8],fix:4,fixpoint:3,floor:[6,7,8],follow:[3,6,8],form:3,format:[6,8],formulas_it:3,found:[3,6,7,8],frequenc:[3,8],frequencies_it:3,from:[3,6],from_csv:3,from_datafram:3,from_graph:3,from_hypergraph:3,from_hypertupl:3,from_json:3,from_str:3,from_tupl:3,frozenset:3,full:[4,6,8],fun:[2,3],further:8,gate:7,gener:[6,7],get:3,give:[7,8],given:[1,2,3,4,6,7,8],goal:[2,8],graph:[],greater:3,gringo:[2,3,6],has_vari:3,have:[3,6,8],header:8,help:[6,8],http:6,hypegraph:3,hyper:[3,9],hyper_idx:3,hyperedg:[3,6,8],hypergraph:[],ignor:8,imag:6,implement:[3,9],inc:6,includ:[3,8],inclus:[2,3,8],index:[3,5],indic:3,individu:3,inform:6,inhibitor:[3,4,8],initialis:3,input:[1,6,7],instal:[],instanc:[2,3,4,7,9],instead:3,instruct:6,integ:[3,7],interact:[3,6,8],interfac:[],interpret:[3,8],intervent:[2,6],introduct:6,ipython:6,is_inhibitor:3,is_readout:3,is_stimulu:3,iter:3,iteritem:3,job:[1,3],joblib:6,json:[3,6,8],just:6,kei:3,klass:3,knowledg:[3,6,7],known:3,known_eq:3,learn:[3,6],learner:[],length:[3,6,7,8],licens:6,like:[3,6],limit:8,line:[],link:[3,6],list:[1,2,3,4,8],liter:[],lname:3,load:3,logger:[2,4,7],logic:[1,2,3,6,7],logicalnetwork:[1,2],logicalnetworklist:[1,2,3,4,7,9],made:3,mai:6,make:6,mani:[6,8],map:[],mappinglist:3,match:3,matrix:3,max:[6,8],max_experi:4,max_inhibitor:4,max_stimuli:4,maximum:[2,3,4,7,8],maxin:7,mean:[],messag:[6,8],method:[3,9],mida:[3,6],minim:2,minimum:7,mkdir:6,modul:[5,6],more:[6,8],most:6,mostli:8,mount:6,mse:[3,6,8],multidigraph:[3,9],must:[1,3,8,9],mutual:[3,8],n_job:[1,3],name:[3,6,8],nand:7,nclamp:3,ndarrai:3,nearli:[6,7,8],need:6,negat:3,network:[1,2,3,6,7],networks_distribut:[],networkx:[3,6,9],nexp:8,next:[3,6,8],node:[3,8],none:[1,2,3,4,7],nonetheless:6,note:6,now:6,number:[1,3,4,6,7,8],numpi:3,object:[1,2,3,4,6,7,9],oct:6,onc:6,onli:3,optim:[4,6,7,8],optimum:[6,7,8],option:[3,4,6,8],order:[3,6],org:6,other:[3,6],otherwis:3,out:[6,8],output:[1,6],over:[2,3,6,8],overview:6,own:6,packag:6,page:[5,6],pair:[3,8],pairwis:[3,4,8],panda:[3,6],parallel:[1,3,6,8],paramet:[1,2,3,4,7,9],pars:8,pass:3,path:[2,3,6,8],per:[4,8],perform:3,perturb:8,phospho:[3,6],phosphoproteom:8,pip:6,pkn:[6,8],platform:6,plot:3,png:[],point:[3,6,8],popular:6,posit:[3,6,8],possibl:[3,6,8],predecessor:3,predic:3,predict:[3,6],present:[3,8],print:[6,8],prior:[3,6,7],produc:8,program:[6,8],proteom:[3,6],provid:[3,8],pull:6,pwd:6,python:6,quick:6,quickref:6,quiet:[6,8],rais:3,random:7,rang:7,read:6,read_csv:3,read_sif:3,readi:3,readout:[3,8],reason:[6,8],recommend:6,refer:6,relat:8,relax:[4,8],remov:3,renam:3,rename_inhibitor:3,repres:[1,8],represent:[2,3],reset:3,respect:[1,3,7],respons:[1,2,3,4,6,7,8],restrict:3,result:3,revers:3,round:[6,7,8],row:[3,8],run:[1,3,6,8],safeti:6,same:[3,8],sampl:3,save:[2,4,7],scenario:[],scenariolist:2,scientif:6,scikit:6,scipi:6,script:6,seaborn:6,search:[5,6,8],second:3,see:[6,8],self:3,separ:8,seri:3,set:[1,2,3,4,6,7],setup:1,shell:6,shortcut:6,should:6,show:[6,8],shown:6,side:8,sif:[3,6,8],sign:[3,8],signal:[6,7,8],signatur:3,simpl:8,simul:3,singl:3,size:[2,3,6,7,8],solver:6,some:6,sort:3,sourc:[3,6,8],sourceforg:6,speci:3,special:3,specif:[6,8],specifi:[2,8],split:3,standard:[6,8],start:[3,8],state:3,statist:8,step:3,stimuli:[3,4,8],stimulu:3,str:[2,3,4,7],strategi:[2,6],string:3,subcommand:[6,8],successor:3,sum:3,sure:6,system:6,target:[3,8],test:[6,8],than:3,thi:[3,6,8],thread:[6,8],three:8,through:3,time:[3,6,8],to_arrai:3,to_csv:3,to_datafram:3,to_funset:[2,3],to_graph:3,to_json:3,togeth:8,toi:6,toler:[6,7,8],total:3,toward:6,translat:3,tupl:3,two:[6,8],type:[1,2,3,6,7],typic:9,unbound:[6,8],underli:3,union:[],uniqu:3,unix:6,unless:6,unpack:6,usag:6,usual:6,valu:[3,7,8],valueerror:3,variabl:3,varianc:[3,6],verifi:6,version:[6,8],visual:6,wai:6,want:6,weight:[3,6,8],weighted_ms:3,what:6,when:8,where:3,whether:[3,4,8],which:[3,6,8,9],wikipedia:3,without:3,work:6,write:[3,6,9],www:6,yield:3,you:6,your:6,zero:3},titles:["caspo&#8217;s API","Classify","Control","Core","Design","Welcome to caspo&#8217;s documentation!","Install","Learn","Usage","Visualize"],titleterms:{again:[],anaconda:6,analyz:[],api:0,basic:[],caspo:[0,1,2,3,4,5,7,9],clamp:3,classifi:[1,8],claus:3,command:8,control:[2,8],core:3,dataset:[3,8],design:[4,8],docker:6,document:5,experiment:8,file:8,graph:3,hypergraph:3,indic:5,input:8,instal:6,interfac:8,intervent:8,introduct:[],knowledg:8,learn:[7,8],learner:7,line:8,liter:3,logic:8,logicalnetwork:3,map:3,mida:[],network:[8,9],output:8,predict:8,prior:8,scenario:[2,8],setup:[3,8],stat:8,strategi:8,tabl:5,toi:8,usag:8,varianc:[],visual:[8,9],welcom:5}})