webpackJsonp([2],{"5LsI":function(t,e){},NHnr:function(t,e,i){"use strict";function n(t){i("NnM3")}function s(t){i("5LsI")}Object.defineProperty(e,"__esModule",{value:!0});var a=i("7+uW"),l={name:"app"},o=function(){var t=this,e=t.$createElement;return(t._self._c||e)("router-view")},r=[],c={render:o,staticRenderFns:r},v=c,u=i("VU/8"),d=n,p=u(l,v,!1,d,null,null),x=p.exports,b=i("/ocq"),_=i("DAYN"),f=i.n(_),m=i("mvHQ"),h=i.n(m),w={fetch:function(){return JSON.parse(window.localStorage.getItem("todos-vueje")||"[]")},save:function(t){window.localStorage.setItem("todos-vueje",h()(t))}},g={components:{draggable:f.a},name:"main",data:function(){return{valid:!1,active:!1,drawer:!1,inputBox:!1,inputBoxExtend:!1,todoTitle:"日程清单",input:"",lists:null==w.fetch()?[]:w.fetch(),inputRules:[function(t){return!!t||"请输入待办事项"},function(t){return t&&t.length<=20||"不要超过20个字"}]}},watch:{lists:{handler:function(t,e){w.save(this.lists)},deep:!0}},methods:{addNew:function(){this.lists.push({title:this.input,isFinished:!1,priority:4}),this.inputBox=!this.inputBox,this.input=""}}},k=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-app",{staticClass:"grey lighten-4"},[i("v-navigation-drawer",{attrs:{app:"",fixed:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}}),t._v(" "),i("v-toolbar",{attrs:{app:"",fixed:"",color:"blue darken-2"}},[i("v-toolbar-side-icon",{on:{click:function(e){t.drawer=!t.drawer}}},[i("v-icon",{attrs:{color:"white"}},[t._v("menu")])],1),t._v(" "),i("v-toolbar-title",{staticClass:"white--text"},[t._v(t._s(t.todoTitle))]),t._v(" "),i("v-spacer"),t._v(" "),i("v-toolbar-side-icon",[i("v-icon",{attrs:{color:"white"}},[t._v("book")])],1)],1),t._v(" "),i("v-content",[i("v-tabs",{attrs:{grow:""},model:{value:t.active,callback:function(e){t.active=e},expression:"active"}},[i("v-tabs-bar",{staticClass:"white navTab"},[i("v-tabs-item",{staticClass:"blue--text",attrs:{href:"#tab-1",ripple:""}},[t._v("\n          未完成\n        ")]),t._v(" "),i("v-tabs-item",{staticClass:"blue--text",attrs:{href:"#tab-2",ripple:""}},[t._v("\n          已完成\n        ")]),t._v(" "),i("v-tabs-slider",{attrs:{color:"blue"}})],1)],1),t._v(" "),i("v-tabs",{staticStyle:{"margin-top":"50px"},model:{value:t.active,callback:function(e){t.active=e},expression:"active"}},[i("v-tabs-items",[i("v-container",{attrs:{fluid:"","grid-list-md":""}},[i("v-tabs-content",{attrs:{id:"tab-1"}},[i("v-layout",{attrs:{row:"",wrap:""}},[i("draggable",{staticClass:"draggableItem",model:{value:t.lists,callback:function(e){t.lists=e},expression:"lists"}},t._l(t.lists,function(e){return i("v-flex",{key:e,attrs:{xs12:""}},[i("v-card",{directives:[{name:"show",rawName:"v-show",value:0==e.isFinished,expression:"list.isFinished == false"}],staticClass:"list-content",attrs:{ripple:""}},[i("v-layout",{staticClass:"list-content-row",attrs:{row:""}},[i("v-flex",{staticClass:"list-content-item",attrs:{xs1:""}},[i("div",{staticClass:"priority-box",class:[{green:4==e.priority},{blue:3==e.priority},{amber:2==e.priority},{red:1==e.priority}]})]),t._v(" "),i("v-flex",{staticClass:"list-content-item",staticStyle:{"margin-left":"-5%"},attrs:{xs10:""}},[i("span",[0==e.isFinished?i("v-icon",{staticClass:"list-content-item",attrs:{color:"blue",lg:"",xs1:""},on:{click:function(t){e.isFinished=!e.isFinished}}},[t._v("\n                            check_box_outline_blank\n                          ")]):t._e(),t._v(" "),1==e.isFinished?i("v-icon",{staticClass:"list-content-item",attrs:{color:"blue",lg:"",xs1:""},on:{click:function(t){e.isFinished=!e.isFinished}}},[t._v("\n                            check_box\n                          ")]):t._e()],1),t._v(" "),i("span",[t._v("\n                          "+t._s(e.title)+"\n                        ")])]),t._v(" "),i("v-flex",{staticStyle:{"margin-left":"5%"},attrs:{xs1:""}},[i("v-icon",{staticClass:"list-content-item list-content-arrow",attrs:{color:"blue",lg:""}},[t._v("\n                          keyboard_arrow_right\n                          ")])],1)],1)],1)],1)}))],1)],1),t._v(" "),i("v-tabs-content",{attrs:{id:"tab-2"}},[i("v-layout",{attrs:{row:"",wrap:""}},[i("draggable",{staticClass:"draggableItem",model:{value:t.lists,callback:function(e){t.lists=e},expression:"lists"}},t._l(t.lists,function(e){return i("v-flex",{key:e,attrs:{xs12:""}},[i("v-card",{directives:[{name:"show",rawName:"v-show",value:1==e.isFinished,expression:"list.isFinished == true"}],staticClass:"list-content",attrs:{ripple:""}},[i("v-layout",{staticClass:"list-content-row",attrs:{row:""}},[i("v-flex",{staticClass:"list-content-item",attrs:{xs1:""}},[i("div",{staticClass:"priority-box",class:[{green:4==e.priority},{blue:3==e.priority},{amber:2==e.priority},{red:1==e.priority}]})]),t._v(" "),i("v-flex",{staticClass:"list-content-item",staticStyle:{"margin-left":"-5%"},attrs:{xs10:""}},[i("span",[0==e.isFinished?i("v-icon",{staticClass:"list-content-item",attrs:{color:"blue",lg:"",xs1:""},on:{click:function(t){e.isFinished=!e.isFinished}}},[t._v("\n                            check_box_outline_blank\n                          ")]):t._e(),t._v(" "),1==e.isFinished?i("v-icon",{staticClass:"list-content-item",attrs:{color:"blue",lg:"",xs1:""},on:{click:function(t){e.isFinished=!e.isFinished}}},[t._v("\n                            check_box\n                          ")]):t._e()],1),t._v(" "),i("span",[t._v("\n                          "+t._s(e.title)+"\n                        ")])]),t._v(" "),i("v-flex",{staticStyle:{"margin-left":"5%"},attrs:{xs1:""}},[i("v-icon",{staticClass:"list-content-item list-content-arrow",attrs:{color:"blue",lg:""}},[t._v("\n                          keyboard_arrow_right\n                        ")])],1)],1)],1)],1)}))],1)],1)],1)],1)],1)],1),t._v(" "),i("v-btn",{staticClass:"elevation-12",attrs:{fab:"",bottom:"",right:"",color:"blue darken-2 white--text",fixed:""},on:{click:function(e){t.inputBox=!t.inputBox}}},[i("v-icon",[t._v("add")])],1),t._v(" "),i("v-dialog",{attrs:{"max-width":"500px"},model:{value:t.inputBox,callback:function(e){t.inputBox=e},expression:"inputBox"}},[i("v-card",[i("v-card-title",[i("v-flex",{attrs:{xs11:""}},[t._v(" 添加待办事项")]),t._v(" "),i("v-flex",{attrs:{xs1:""}},[i("v-icon",{on:{click:function(e){t.inputBoxExtend=!t.inputBoxExtend}}},[t._v("open_in_new")])],1)],1),t._v(" "),i("v-card-text",[i("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[i("v-text-field",{attrs:{label:"待办事项",counter:20,rules:t.inputRules,required:""},on:{enter:t.addNew},model:{value:t.input,callback:function(e){t.input=e},expression:"input"}})],1)],1),t._v(" "),i("v-card-actions",[i("v-spacer"),t._v(" "),i("v-btn",{attrs:{color:"grey darken-1",flat:""},on:{click:function(e){t.inputBox=!t.inputBox}}},[t._v("取消")]),t._v(" "),i("v-btn",{attrs:{color:"blue darken-2 white--text",disabled:!t.valid},on:{click:t.addNew}},[t._v("添加")])],1)],1)],1),t._v(" "),i("v-dialog",{attrs:{fullscreen:"",transition:"dialog-bottom-transition"},model:{value:t.inputBoxExtend,callback:function(e){t.inputBoxExtend=e},expression:"inputBoxExtend"}},[i("v-card",[i("v-card-text",[i("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[i("v-text-field",{attrs:{label:"待办事项",counter:20,rules:t.inputRules,required:""},on:{enter:t.addNew},model:{value:t.input,callback:function(e){t.input=e},expression:"input"}})],1)],1),t._v(" "),i("v-card-actions",[i("v-spacer"),t._v(" "),i("v-btn",{attrs:{color:"grey darken-1",flat:""},on:{click:function(e){t.inputBoxExtend=!t.inputBoxExtend}}},[t._v("取消")]),t._v(" "),i("v-btn",{attrs:{color:"blue darken-2 white--text",disabled:!t.valid},on:{click:t.addNew}},[t._v("添加")])],1)],1)],1)],1)},y=[],C={render:k,staticRenderFns:y},F=C,B=i("VU/8"),N=s,E=B(g,F,!1,N,"data-v-7717ab18",null),S=E.exports;a.a.use(b.a);var I=new b.a({routes:[{path:"/",name:"Main",component:S}]}),R=i("3EgV"),M=i.n(R);i.e(0).then(i.bind(null,"7zck")),a.a.use(M.a),a.a.config.productionTip=!1,new a.a({el:"#app",router:I,template:"<App/>",components:{App:x}})},NnM3:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.84a8fcfa942f8bc282b6.js.map