(this.webpackJsonpreactcasino=this.webpackJsonpreactcasino||[]).push([[0],{126:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n(22),i=n.n(s),c=(n(92),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,141)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,i=t.getLCP,c=t.getTTFB;n(e),a(e),s(e),i(e),c(e)}))}),r=n(13),l=n(14),o=n(16),d=n(15),u=n(39),j=n(10),h=(n(93),n(132)),b=n(139),m=n(133),p=n(134),x=n(82),v=n(140),O=n(131),f=n(21),g=n.n(f),C=n(34),N=n(80),y=n.n(N),k=function(){var e=Object(C.a)(g.a.mark((function e(){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e,t){y.a.get("http://localhost:4000/data").then((function(t){console.log("tracking results"),e(t.data)})).catch((function(e){t("something went rwong")}))})));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),w=n(136),S=n(2),F=function(e){var t=[2,4,6,8,10,11,13,15,17,20,22,24,26,28,29,31,33,35],n=[1,3,5,7,9,12,14,16,18,19,21,23,25,27,30,32,34,36];return Object(S.jsxs)(w.a,{show:e.show,onHide:e.onHide,size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0,children:[Object(S.jsx)(w.a.Header,{closeButton:!0,className:"bg-first text-white",children:Object(S.jsx)(w.a.Title,{id:"contained-modal-title-vcenter",children:e.casino})}),Object(S.jsxs)(w.a.Body,{className:"bg-second",children:[Object(S.jsx)("h5",{className:"text-white",children:e.table}),Object(S.jsx)("p",{className:"text-white",children:"Tracking Result:"}),Object(S.jsx)("div",{className:"clearfix",children:e.result.split(",").map((function(e){return Object(S.jsx)(O.a,{className:t.includes(Number(e))?"badge-black m-1":n.includes(Number(e))?"badge-red m-1":0===Number(e)?"badge-green m-1":"m-1",children:e})}))})]}),Object(S.jsx)(w.a.Footer,{className:"bg-second",children:Object(S.jsx)("a",{style:{float:"right"},href:"/#",className:"btn cs-btn",children:"Visit Casino"})})]})},L=n(41),B=function(e){Object(o.a)(n,e);var t=Object(d.a)(n);function n(){var e;return Object(r.a)(this,n),(e=t.call(this)).setModalShow=function(t){e.setState({modalShow:!0,selectedCasino:"William Hill Casino",selectedTable:t.name,selectedResult:t.results.join()})},e.setModalHide=function(){e.setState({modalShow:!1})},e.state={CurrentResults:[],modalShow:!1,selectedCasino:" ",selectedTable:" ",selectedResult:" ",blackNumbers:[2,4,6,8,10,11,13,15,17,20,22,24,26,28,29,31,33,35],redNumbers:[1,3,5,7,9,12,14,16,18,19,21,23,25,27,30,32,34,36]},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this;k().then((function(t){console.log("results",t),e.setState({CurrentResults:t})}))}},{key:"render",value:function(){var e=this;return Object(S.jsxs)(h.a,{className:"result-list",children:[JSON.stringify(this.props.casinos),Object(S.jsxs)(b.a,{defaultActiveKey:"william-hill",id:"casino-tabs",children:[Object(S.jsx)(m.a,{eventKey:"william-hill",title:"William Hill",children:Object(S.jsxs)(p.a,{children:[this.state.CurrentResults.map((function(t){return Object(S.jsx)(x.a,{lg:"3",onClick:function(n){return e.setModalShow(t)},children:Object(S.jsxs)(v.a,{className:"mb-3 shadow",children:[Object(S.jsx)(v.a.Img,{variant:"top",src:"https://cmscdn.staticcache.org/assets/image/0010/1482715/WHC_40604_GT_EvolutionRouletteLobby_372x372.jpg"}),Object(S.jsxs)(v.a.Body,{children:[Object(S.jsx)(v.a.Title,{className:"text-white",children:t.name}),Object(S.jsx)(v.a.Text,{className:"clearfix mb-1",children:t.results.filter((function(e,t){return t<5})).map((function(t){return Object(S.jsx)(O.a,{className:e.state.blackNumbers.includes(Number(t))?"badge-black mx-1":e.state.redNumbers.includes(Number(t))?"badge-red mx-1":0===Number(t)?"badge-green mx-1":"mx-1",children:t})}))}),Object(S.jsx)(v.a.Text,{className:"clearfix mb-1",children:t.results.filter((function(e,t){return t>5&&t<11})).map((function(t){return Object(S.jsx)(O.a,{className:e.state.blackNumbers.includes(Number(t))?"badge-black mx-1":e.state.redNumbers.includes(Number(t))?"badge-red mx-1":0===Number(t)?"badge-green mx-1":"mx-1",children:t})}))})]})]},t.id)})})),Object(S.jsx)(F,{casino:this.state.selectedCasino,table:this.state.selectedTable,result:this.state.selectedResult,show:this.state.modalShow,onHide:function(){return e.setModalHide(!1)}})]})}),Object(S.jsx)(m.a,{eventKey:"bet365",title:"Bet365"}),Object(S.jsx)(m.a,{eventKey:"roobet",title:"RooBet"})]})]})}}]),n}(a.Component);var T=Object(L.b)((function(e){return{filters:e.activeFilter,casinos:e.selectedCasino}}))(B),E=function(e){Object(o.a)(n,e);var t=Object(d.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(S.jsx)("div",{className:"py-5",children:Object(S.jsx)(T,{})})}}]),n}(a.Component),I=n(87);function R(){return Object(S.jsx)("footer",{id:"site-footer",children:Object(S.jsxs)(I.a,{className:"footer-nav",children:[Object(S.jsx)(I.a.Item,{children:Object(S.jsx)(I.a.Link,{as:u.b,to:"tracking-options",children:"Tracking"})}),Object(S.jsx)(I.a.Item,{children:Object(S.jsx)(I.a.Link,{children:"Options"})}),Object(S.jsx)(I.a.Item,{children:Object(S.jsx)(I.a.Link,{children:"Home"})}),Object(S.jsx)(I.a.Item,{children:Object(S.jsx)(I.a.Link,{children:"Help"})})]})})}var z=n(138);function A(){return Object(S.jsx)("div",{children:Object(S.jsx)("header",{id:"site-header",children:Object(S.jsx)(z.a,{collapseOnSelect:!0,expand:"lg",className:"main-nav",variant:"dark",children:Object(S.jsxs)(h.a,{children:[Object(S.jsx)(z.a.Brand,{as:u.b,to:"/",children:"Casino"}),Object(S.jsx)(z.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(S.jsx)(z.a.Collapse,{id:"responsive-navbar-nav",children:Object(S.jsxs)(I.a,{className:"ml-auto",children:[Object(S.jsx)(I.a.Link,{href:"#features",children:"Products"}),Object(S.jsx)(I.a.Link,{href:"#pricing",children:"Blogs"}),Object(S.jsx)(I.a.Link,{href:"#features",children:"Support"}),Object(S.jsx)(I.a.Link,{href:"#pricing",children:"Login"})]})})]})})})})}var D=function(e){Object(o.a)(n,e);var t=Object(d.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(S.jsxs)("div",{id:"page",children:[Object(S.jsx)(A,{}),this.props.children,Object(S.jsx)(R,{})]})}}]),n}(a.Component),P=n(69),H=n(137),M=n(83),J=n(85),_=n(84),K=n(86),W=n(135),G=[{split:"1 and 2"},{split:"1 and 4"},{split:"2 and 3"},{split:"2 and 5"},{split:"3 and 6"},{split:"4 and 5"},{split:"4 and 7"},{split:"5 and 6"},{split:"5 and 8"},{split:"6 and 9"},{split:"7 and 8"},{split:"7 and 10"},{split:"8 and 9"},{split:"8 and 11"},{split:"9 and 12"},{split:"10 and 11"},{split:"10 and 13"},{split:"11 and 12"},{split:"11 and 14"},{split:"13 and 14"},{split:"13 and 16"},{split:"14 and 15"},{split:"14 and 17"},{split:"15 and 18"},{split:"16 and 17"},{split:"16 and 19"},{split:"17 and 18"},{split:"17 and 20"},{split:"18 and 21"},{split:"19 and 20"},{split:"19 and 22"},{split:"20 and 21"},{split:"20 and 23"},{split:"21 and 24"},{split:"22 and 23"},{split:"22 and 25"},{split:"23 and 24"},{split:"23 and 26"},{split:"24 and 27"},{split:"25 and 28"},{split:"26 and 27"},{split:"26 and 29"},{split:"27 and 30"},{split:"28 and 29"},{split:"28 and 31"},{split:"29 and 30"},{split:"29 and 32"},{split:"30 and 33"},{split:"31 and 32"},{split:"31 and 34"},{split:"32 and 33"},{split:"32 and 35"},{split:"33 and 36"},{split:"34 and 35"},{split:"35 and 36"}],U=[{value:"1-2-3"},{value:"4-5-6"},{value:"7-8-9"},{value:"10-11-12"},{value:"13-14-15"},{value:"16-17-18"},{value:"19-20-21"},{value:"22-23-24"},{value:"25-26-27"},{value:"28-29-30"},{value:"31-32-33"},{value:"34-35-36"}],V=[{value:"1-2-4-5"},{value:"2-3-5-6"},{value:"4-5-7-8"},{value:"5-6-8-9"},{value:"7-8-10-11"},{value:"8-9-11-12"},{value:"10-11-13-14"},{value:"11-12-14-15"},{value:"13-14-16-17"},{value:"14-15-17-18"},{value:"16-17-19-20"},{value:"17-18-20-21"},{value:"19-20-22-23"},{value:"20-21-23-24"},{value:"22-23-25-26"},{value:"23-24-26-27"},{value:"26-27-29-30"},{value:"28-29-31-32"},{value:"29-30-32-33"},{value:"31-32-34-35"},{value:"32-33-35-36"}],q=[{value:"1-2-3-4-5-6"},{value:"4-5-6-7-8-9"},{value:"7-8-9-10-11-12"},{value:"10-11-12-13-14-15"},{value:"13-14-15-16-17-18"},{value:"16-17-18-19-20-21"},{value:"19-20-21-22-23-24"},{value:"22-23-24-25-26-27"},{value:"25-26-27-28-29-30"},{value:"28-29-30-31-32-33"},{value:"31-32-33-34-35-36"}],Q=n.p+"static/media/delete.85b48406.png",X=function(e){Object(o.a)(n,e);var t=Object(d.a)(n);function n(){var e;return Object(r.a)(this,n),(e=t.call(this)).removeFilter=function(t){e.props.removeit(t)},e.state={sfilters:""},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this,t=[],n=JSON.parse(this.props.filters);for(var a in n)t.push(n[a]);return console.log("filters",Array.isArray(t[1])),Object(S.jsxs)("div",{className:"selected-filters",children:[Object(S.jsx)("h3",{className:"text-white",children:"Selected Options"}),t.map((function(t,n){return Array.isArray(t)?t.map((function(t,n){return Object(S.jsx)(v.a,{className:"d-inline-block filter-card",children:Object(S.jsxs)(v.a.Body,{className:"text-white filter-body clearfix",children:[Object(S.jsx)("div",{className:"float-left",children:t},t),Object(S.jsx)("div",{className:"float-right ml-3 removef",onClick:function(n){return e.removeFilter(t)},children:Object(S.jsx)("img",{src:Q,alt:"del",width:"12px"})})]})})})):Object(S.jsx)(v.a,{className:"d-inline-block filter-card",children:Object(S.jsxs)(v.a.Body,{className:"text-white filter-body clearfix",children:[Object(S.jsx)("div",{className:"float-left",children:t},t),Object(S.jsx)("div",{className:"float-right ml-3 removef",onClick:function(n){return e.removeFilter(t)},children:Object(S.jsx)("img",{src:Q,alt:"delete",width:"12px"})})]})})}))]})}}]),n}(a.Component),Y=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36],Z=["10bet","12bet","888 casino","Bwin","Betvictor","Betfair","Bet365","Betfed","Pokerstars","Betway","BoyleSports","Coral","Gentingbet","Ladbrokes","Marathon Bet","PaddyPower","Skybet","Unitbet","Leovegas","Play.ee"],$=function(e){Object(o.a)(n,e);var t=Object(d.a)(n);function n(){var e;return Object(r.a)(this,n),(e=t.call(this)).removeCasino=function(t){e.props.removeit(t)},e.state={scasinos:[]},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this.props.casinos;e=e.split(","),this.setState({scasinos:e})}},{key:"render",value:function(){var e=this;return Object(S.jsxs)("div",{className:"selected-casino",children:[Object(S.jsx)("h3",{className:"text-white",children:"Selected Casinos"}),""!==this.props.casinos?this.props.casinos.split(",").map((function(t,n){return Object(S.jsx)(v.a,{className:"d-inline-block casino-card",children:Object(S.jsxs)(v.a.Body,{className:"text-white casino-body clearfix",children:[Object(S.jsx)("div",{className:"float-left",children:t},t),Object(S.jsx)("div",{className:"float-right ml-3 removef",onClick:function(n){return e.removeCasino(t)},children:Object(S.jsx)("img",{src:Q,alt:"del",width:"12px"})})]})})})):""]})}}]),n}(a.Component),ee=n(42),te=function(e){return console.log("selected filters"),{type:"SELECTED_FILTERS",payload:e}},ne=function(e){return console.log("selected filters"),{type:"SELECTED_CASINO",payload:e}},ae=function(e){Object(o.a)(n,e);var t=Object(d.a)(n);function n(){var e;return Object(r.a)(this,n),(e=t.call(this)).removeCasino=function(){var t=Object(C.a)(g.a.mark((function t(n){var a,s;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!(a=e.state.casinoList).includes(n)){t.next=7;break}return s=a.findIndex((function(e){return e===n})),a.splice(s,1),0===a.length&&(a=[]),t.next=7,e.setState({currentFilters:a});case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.removeFilter=function(){var t=Object(C.a)(g.a.mark((function t(n){var a,s,i;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:a=e.state.currentFilters,t.t0=g.a.keys(a);case 2:if((t.t1=t.t0()).done){t.next=16;break}if(s=t.t1.value,!Array.isArray(a[s])||!a[s].includes(n)){t.next=10;break}return i=a[s].findIndex((function(e){return e===n})),a[s].splice(i,1),0===a[s].length&&(a[s]=void 0),t.next=10,e.setState({currentFilters:a});case 10:if(a[s]!==n){t.next=14;break}return a[s]=void 0,t.next=14,e.setState({currentFilters:a});case 14:t.next=2;break;case 16:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.addCasino=function(){var t=Object(C.a)(g.a.mark((function t(n){var a;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if((a=e.state.casinoList).includes(n.target.getAttribute("data-casino"))){t.next=7;break}return a.push(n.target.getAttribute("data-casino")),t.next=5,e.setState({casinoList:a});case 5:console.log(JSON.stringify(e.state.casinoList)),e.props.saveCasino(e.state.casinoList);case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.handleChange=function(){var t=Object(C.a)(g.a.mark((function t(n){var a;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if("singles"!==n.target.name&&"streets"!==n.target.name&&"corners"!==n.target.name&&"lines"!==n.target.name&&"corners"!==n.target.name&&"splits"!==n.target.name){t.next=10;break}return console.log(n.target.value),(a=Object(P.a)({},e.state.currentFilters))[n.target.name]||(a[n.target.name]=[]),a[n.target.name].push(n.target.value),t.next=7,e.setState({currentFilters:a});case 7:console.log(JSON.stringify(e.state.currentFilters)),t.next=15;break;case 10:return(a=Object(P.a)({},e.state.currentFilters))[n.target.name]=n.target.value,t.next=14,e.setState({currentFilters:a});case 14:console.log(JSON.stringify(e.state.currentFilters));case 15:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.state={currentFilters:"",casinoList:[]},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this;return Object(S.jsx)(h.a,{className:"tracking-page py-5",children:Object(S.jsxs)(b.a,{defaultActiveKey:"options",id:"casino-tabs",className:"justify-content-center",children:[Object(S.jsxs)(m.a,{eventKey:"options",title:"Options",children:[Object(S.jsx)(X,{filters:JSON.stringify(this.state.currentFilters),removeit:this.removeFilter}),Object(S.jsxs)(H.a,{children:[Object(S.jsxs)(M.a,{children:[Object(S.jsx)(H.a.Check,{custom:!0,inline:!0,type:"radio",id:"even",label:"Even",value:"Even",name:"evenodd",className:"text-white",onChange:function(t){return e.handleChange(t)}}),Object(S.jsx)(H.a.Check,{custom:!0,inline:!0,type:"radio",id:"odd",label:"Odd",name:"evenodd",value:"odd",className:"text-white",onChange:function(t){return e.handleChange(t)}})]}),Object(S.jsxs)(M.a,{children:[Object(S.jsx)(H.a.Check,{custom:!0,inline:!0,type:"radio",id:"red",label:"Red",name:"redblack",value:"Red",className:"text-white",onChange:function(t){return e.handleChange(t)}}),Object(S.jsx)(H.a.Check,{custom:!0,inline:!0,type:"radio",id:"black",label:"Black",name:"redblack",value:"Black",className:"text-white",onChange:function(t){return e.handleChange(t)}})]}),Object(S.jsxs)(M.a,{children:[Object(S.jsx)(H.a.Check,{custom:!0,inline:!0,type:"radio",id:"1stdozen",label:"1st Dozen",name:"dozens",value:"1st Dozen",className:"text-white",onChange:function(t){return e.handleChange(t)}}),Object(S.jsx)(H.a.Check,{custom:!0,inline:!0,type:"radio",id:"2nddozen",label:"2nd Dozen",name:"dozens",value:"2nd Dozen",className:"text-white",onChange:function(t){return e.handleChange(t)}}),Object(S.jsx)(H.a.Check,{custom:!0,inline:!0,type:"radio",id:"3rddozen",label:"3rd Dozen",value:"3rd Dozen",name:"dozens",className:"text-white",onChange:function(t){return e.handleChange(t)}})]}),Object(S.jsxs)(M.a,{children:[Object(S.jsx)(H.a.Check,{custom:!0,inline:!0,type:"radio",id:"1stcolumn",label:"1st Column",value:"1st Column",name:"columns",className:"text-white",onChange:function(t){return e.handleChange(t)}}),Object(S.jsx)(H.a.Check,{custom:!0,inline:!0,type:"radio",id:"2ndcolumn",label:"2nd Column",value:"2nd Column",name:"columns",className:"text-white",onChange:function(t){return e.handleChange(t)}}),Object(S.jsx)(H.a.Check,{custom:!0,inline:!0,type:"radio",id:"3rdcolumn",label:"3rd Column",value:"3rd Column",name:"columns",className:"text-white",onChange:function(t){return e.handleChange(t)}})]}),Object(S.jsx)(M.a,{children:Object(S.jsxs)(p.a,{children:[Object(S.jsxs)(x.a,{children:[Object(S.jsx)(H.a.Label,{inline:!0,className:"my-1 mr-2 text-white",htmlFor:"inlineFormCustomSelectPref",children:"Singles"}),Object(S.jsx)(H.a.Control,{as:"select",className:"my-1 mr-sm-2",id:"singles",onChange:function(t){return e.handleChange(t)},name:"singles",custom:!0,inline:!0,children:Y.map((function(e){return Object(S.jsx)("option",{value:e,children:e},e)}))})]}),Object(S.jsxs)(x.a,{children:[Object(S.jsx)(H.a.Label,{inline:!0,className:"my-1 mr-2 text-white",htmlFor:"inlineFormCustomSelectPref",children:"Splits"}),Object(S.jsx)(H.a.Control,{as:"select",className:"my-1 mr-sm-2",id:"splits",onChange:function(t){return e.handleChange(t)},name:"splits",custom:!0,inline:!0,children:G.map((function(e){return Object(S.jsx)("option",{vslue:e.split,children:e.split},e.split)}))})]}),Object(S.jsxs)(x.a,{children:[Object(S.jsx)(H.a.Label,{inline:!0,className:"my-1 mr-2 text-white",htmlFor:"inlineFormCustomSelectPref",children:"streets"}),Object(S.jsx)(H.a.Control,{as:"select",className:"my-1 mr-sm-2",id:"streets",onChange:function(t){return e.handleChange(t)},name:"streets",custom:!0,inline:!0,children:U.map((function(e){return Object(S.jsx)("option",{value:e.value,children:e.value},e.value)}))})]}),Object(S.jsxs)(x.a,{children:[Object(S.jsx)(H.a.Label,{inline:!0,className:"my-1 mr-2 text-white",htmlFor:"inlineFormCustomSelectPref",children:"Corners"}),Object(S.jsx)(H.a.Control,{as:"select",className:"my-1 mr-sm-2",id:"corners",onChange:function(t){return e.handleChange(t)},name:"corners",custom:!0,inline:!0,children:V.map((function(e){return Object(S.jsx)("option",{value:e.value,children:e.value},e.value)}))})]}),Object(S.jsxs)(x.a,{children:[Object(S.jsx)(H.a.Label,{inline:!0,className:"my-1 mr-2 text-white",htmlFor:"inlineFormCustomSelectPref",children:"Lines"}),Object(S.jsx)(H.a.Control,{as:"select",className:"my-1 mr-sm-2",id:"lines",onChange:function(t){return e.handleChange(t)},name:"lines",custom:!0,inline:!0,children:q.map((function(e){return Object(S.jsx)("option",{value:e.value,children:e.value},e.value)}))})]})]})}),Object(S.jsxs)(M.a,{children:[Object(S.jsx)(J.a,{className:"text-white",children:"Notifications"}),Object(S.jsxs)("div",{className:"clearfix",children:[Object(S.jsx)(J.a,{className:"text-white inline-block",children:"Number of times in a row"}),Object(S.jsx)(_.a,{type:"text",className:"inline-block mx-3 linput",placeholder:"10",name:"numof"})]}),Object(S.jsx)(H.a.Check,{custom:!0,inline:!0,type:"checkbox",id:"sound",label:"Sounds",name:"sound",className:"text-white"})]}),Object(S.jsx)(K.a,{onClick:function(){return e.props.saveFilters(e.state.currentFilters)},className:"btn cs-btn mx-auto",children:"Save"})]})]}),Object(S.jsxs)(m.a,{eventKey:"filters",title:"Filters",children:[Object(S.jsx)($,{casinos:this.state.casinoList.join(),removeit:this.removeCasino}),Object(S.jsxs)("div",{className:"casino-select",children:[Object(S.jsxs)(W.a,{className:"d-inline-block mr-3 font-18",children:[Object(S.jsx)(W.a.Toggle,{variant:"success",className:"bg-btn font-18",id:"dropdown-basic",children:"Add Casino"}),Object(S.jsx)(W.a.Menu,{children:Z.map((function(t){return Object(S.jsx)(W.a.Item,{onClick:function(t){return e.addCasino(t)},"data-casino":t,children:t},t)}))})]}),Object(S.jsxs)(W.a,{className:"d-inline-block mr-3 font-18",children:[Object(S.jsx)(W.a.Toggle,{variant:"success",className:"bg-btn",id:"dropdown-basic",children:"Links to Register"}),Object(S.jsx)(W.a.Menu,{children:Z.map((function(e){return Object(S.jsx)(W.a.Item,{"data-link":e,children:e},e)}))})]})]})]})]})})}}]),n}(a.Component);var se=Object(L.b)(null,(function(e){return Object(ee.a)({saveFilters:te,saveCasino:ne},e)}))(ae),ie=function(e){Object(o.a)(n,e);var t=Object(d.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(S.jsx)(u.a,{children:Object(S.jsx)(j.c,{children:Object(S.jsxs)(D,{children:[Object(S.jsx)(j.a,{exact:!0,path:"/",component:E}),Object(S.jsx)(j.a,{exact:!0,path:"/tracking-options",component:se})]})})})}}]),n}(a.Component),ce=(n(123),n(124),Object(ee.b)({activeFilter:function(){var e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"SELECTED_FILTERS":return e.payload;default:return!1}},selectedCasino:function(){var e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"SELECTED_CASINO":return e.payload;default:return!1}}})),re=Object(ee.c)(ce);i.a.render(Object(S.jsx)(L.a,{store:re,children:Object(S.jsx)(ie,{})}),document.getElementById("root")),c()},92:function(e,t,n){},93:function(e,t,n){}},[[126,1,2]]]);
//# sourceMappingURL=main.12d4176f.chunk.js.map