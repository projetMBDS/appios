(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{aCku:function(l,n,e){"use strict";e.r(n);var t=e("8Y7J");class o{}var u=e("pMnS"),i=e("MKJQ"),s=e("sZkV");class a{constructor(l,n){this.storage=l,this.router=n,this.idToModify=new t.m,this.idToDelete=new t.m,this.templates=[]}ngOnInit(){}AddControle(l){console.log("add stuff ? "),this.idToModify.emit("test"),l.close()}deleteTemplate(l,n){n.close(),this.idToDelete.emit(l)}}var r=e("xgBC"),c=e("iInd"),d=t.nb({encapsulation:0,styles:[[""]],data:{}});function b(l){return t.Gb(0,[(l()(),t.pb(0,0,null,null,16,"ion-item-sliding",[],null,null,null,i.W,i.t)),t.ob(1,49152,[["slidingItem",4]],0,s.M,[t.h,t.k,t.x],null,null),(l()(),t.pb(2,0,null,0,4,"ion-item-options",[["side","start"]],null,null,null,i.V,i.s)),t.ob(3,49152,null,0,s.L,[t.h,t.k,t.x],{side:[0,"side"]},null),(l()(),t.pb(4,0,null,0,2,"ion-item-option",[["color","danger"],["expandable",""]],null,[[null,"click"]],(function(l,n,e){var o=!0,u=l.component;return"click"===n&&(o=!1!==u.deleteTemplate(u.id,t.Bb(l,1))&&o),o}),i.U,i.r)),t.ob(5,49152,null,0,s.K,[t.h,t.k,t.x],{color:[0,"color"],expandable:[1,"expandable"]},null),(l()(),t.Fb(-1,0,[" Supprimer "])),(l()(),t.pb(7,0,null,0,4,"ion-item",[],null,null,null,i.X,i.q)),t.ob(8,49152,null,0,s.H,[t.h,t.k,t.x],null,null),(l()(),t.pb(9,0,null,0,2,"ion-label",[],null,null,null,i.Y,i.u)),t.ob(10,49152,null,0,s.N,[t.h,t.k,t.x],null,null),(l()(),t.Fb(11,0,[""," - ",""])),(l()(),t.pb(12,0,null,0,4,"ion-item-options",[["side","end"]],null,null,null,i.V,i.s)),t.ob(13,49152,null,0,s.L,[t.h,t.k,t.x],{side:[0,"side"]},null),(l()(),t.pb(14,0,null,0,2,"ion-item-option",[["color","secondary"],["expandable",""]],null,[[null,"click"]],(function(l,n,e){var o=!0;return"click"===n&&(o=!1!==l.component.AddControle(t.Bb(l,1))&&o),o}),i.U,i.r)),t.ob(15,49152,null,0,s.K,[t.h,t.k,t.x],{color:[0,"color"],expandable:[1,"expandable"]},null),(l()(),t.Fb(-1,0,[" Ajouter des controles "]))],(function(l,n){l(n,3,0,"start"),l(n,5,0,"danger",""),l(n,13,0,"end"),l(n,15,0,"secondary","")}),(function(l,n){var e=n.component;l(n,11,0,e.id,e.name)}))}function p(l){return t.Gb(0,[(l()(),t.pb(0,0,null,null,1,"app-template",[],null,null,null,b,d)),t.ob(1,114688,null,0,a,[r.b,c.m],null,null)],(function(l,n){l(n,1,0)}),null)}var m=t.lb("app-template",a,p,{name:"name",id:"id"},{idToModify:"idToModify",idToDelete:"idToDelete"},[]),h=e("SVse"),g=e("s7LF"),f=e("mrSG");class x{constructor(l,n,e,t){this.navParams=l,this.modalController=n,this.storage=e,this.router=t,this.controlesExisting=[],this.templates=[],this.controlesOfTemplate=["1"],this.controleState=[{id:0,name:"none",description:"none",state:!1}],this.loadData()}display(){}loadData(){return f.a(this,void 0,void 0,(function*(){this.storage.get("templates").then(l=>{console.log("templates is : ",l),null!=l&&(this.templates=l),this.templates.forEach(l=>{l.idTemplate==this.id&&(this.name=l.idTemplate,this.index=(l.idTemplate-1).toString(),console.log("controle of template "+this.id+" index is : "+this.index),this.controlesOfTemplate=l.controles)})}),this.storage.get("controles").then(l=>{console.log("controles existing : ",l),this.controlesExisting=l,this.controleState=[],this.controlesExisting.forEach(l=>{this.controlesOfTemplate.includes(l.idControle)?(console.log("the template have test: "+l.nomControle),this.controleState.push({id:l.idControle,name:l.nomControle,description:l.description,state:!0})):(console.log("the template DO NOT HAVE test: "+l.nomControle),this.controleState.push({id:l.idControle,name:l.nomControle,description:l.description,state:!1}))})})}))}save(){this.controlesOfTemplate=[],this.controleState.forEach(l=>{l.state&&(console.log("the template have now :  "+l.name),this.controlesOfTemplate.push(l.id.toString())),console.log("VALUE : "+this.controlesOfTemplate),console.log("template to modify : "+this.templates[this.index].idTemplate),this.templates[this.index].controles=this.controlesOfTemplate,console.log("templates is now : ",this.templates[this.index]),this.storage.set("templates",this.templates),this.dismiss()})}ngOnInit(){}dismiss(){this.modalController.dismiss()}}class k{constructor(l,n,e){this.storage=l,this.router=n,this.modalController=e,this.templates=[{idTemplate:"1",nomTemplate:"",controles:[]}],this.loadData()}doRefresh(l){console.log("Begin async operation"),this.loadData(),setTimeout(()=>{console.log("Async operation has ended"),l.target.complete()},2e3)}loadData(){this.storage.get("templates").then(l=>{console.log("templates is : ",l),null!=l&&(this.templates=l)})}presentModal(l){return f.a(this,void 0,void 0,(function*(){const n=yield this.modalController.create({component:x,componentProps:{id:l}});return yield n.present()}))}ngOnInit(){}test(l){console.log("emit recived from child : "+l),this.presentModal(l)}delete(l){let n=[];console.log("delete the id: "+l),this.templates.forEach(e=>{e.idTemplate!=l&&n.push({idTemplate:e.idTemplate,nomTemplate:e.nomTemplate,controles:e.controles})}),console.log("test : "+n),this.templates=n}addTemplate(){let l;l=null==this.templates?1..toString():(this.templates.length+1).toString(),this.templates.push({idTemplate:l,nomTemplate:this.nomTemplate,controles:[]}),this.nomTemplate="",this.storage.set("templates",this.templates),console.log(this.templates)}}var T=t.nb({encapsulation:0,styles:[[""]],data:{}});function C(l){return t.Gb(0,[(l()(),t.pb(0,0,null,null,1,"app-template",[],null,[[null,"idToModify"],[null,"idToDelete"]],(function(l,n,e){var t=!0,o=l.component;return"idToModify"===n&&(t=!1!==o.test(l.context.$implicit.idTemplate)&&t),"idToDelete"===n&&(t=!1!==o.delete(l.context.$implicit.idTemplate)&&t),t}),b,d)),t.ob(1,114688,null,0,a,[r.b,c.m],{name:[0,"name"],id:[1,"id"]},{idToModify:"idToModify",idToDelete:"idToDelete"})],(function(l,n){l(n,1,0,t.tb(1,"",n.context.$implicit.nomTemplate,""),t.tb(1,"",n.context.$implicit.idTemplate,""))}),null)}function v(l){return t.Gb(0,[(l()(),t.pb(0,0,null,null,10,"ion-header",[],null,null,null,i.R,i.n)),t.ob(1,49152,null,0,s.B,[t.h,t.k,t.x],null,null),(l()(),t.pb(2,0,null,0,8,"ion-toolbar",[],null,null,null,i.hb,i.D)),t.ob(3,49152,null,0,s.zb,[t.h,t.k,t.x],null,null),(l()(),t.pb(4,0,null,0,3,"ion-back-button",[["defaultHref","/home"],["slot","start"],["text","home"]],null,[[null,"click"]],(function(l,n,e){var o=!0;return"click"===n&&(o=!1!==t.Bb(l,6).onClick(e)&&o),o}),i.F,i.b)),t.ob(5,49152,null,0,s.g,[t.h,t.k,t.x],{defaultHref:[0,"defaultHref"],text:[1,"text"]},null),t.ob(6,16384,null,0,s.h,[[2,s.fb],s.Eb],{defaultHref:[0,"defaultHref"]},null),(l()(),t.Fb(-1,0,["cr\xe9ation QC"])),(l()(),t.pb(8,0,null,0,2,"ion-title",[],null,null,null,i.fb,i.B)),t.ob(9,49152,null,0,s.xb,[t.h,t.k,t.x],null,null),(l()(),t.Fb(-1,0,["Gestion des templates"])),(l()(),t.pb(11,0,null,null,21,"ion-content",[],null,null,null,i.Q,i.m)),t.ob(12,49152,null,0,s.u,[t.h,t.k,t.x],{fullscreen:[0,"fullscreen"]},null),(l()(),t.pb(13,0,null,0,3,"ion-refresher",[["slot","fixed"]],null,[[null,"ionRefresh"]],(function(l,n,e){var t=!0;return"ionRefresh"===n&&(t=!1!==l.component.doRefresh(e)&&t),t}),i.bb,i.w)),t.ob(14,49152,null,0,s.ab,[t.h,t.k,t.x],null,null),(l()(),t.pb(15,0,null,0,1,"ion-refresher-content",[],null,null,null,i.ab,i.x)),t.ob(16,49152,null,0,s.bb,[t.h,t.k,t.x],null,null),(l()(),t.eb(16777216,null,0,1,null,C)),t.ob(18,278528,null,0,h.h,[t.M,t.J,t.q],{ngForOf:[0,"ngForOf"]},null),(l()(),t.pb(19,0,null,0,13,"ion-item",[],null,null,null,i.X,i.q)),t.ob(20,49152,null,0,s.H,[t.h,t.k,t.x],null,null),(l()(),t.pb(21,0,null,0,6,"ion-input",[["placeholder","nom du controle"],["type","text"],["value",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],(function(l,n,e){var o=!0,u=l.component;return"ionBlur"===n&&(o=!1!==t.Bb(l,22)._handleBlurEvent(e.target)&&o),"ionChange"===n&&(o=!1!==t.Bb(l,22)._handleInputEvent(e.target)&&o),"ngModelChange"===n&&(o=!1!==(u.nomTemplate=e)&&o),o}),i.T,i.p)),t.ob(22,16384,null,0,s.Kb,[t.k],null,null),t.Cb(1024,null,g.b,(function(l){return[l]}),[s.Kb]),t.ob(24,671744,null,0,g.e,[[8,null],[8,null],[8,null],[6,g.b]],{model:[0,"model"]},{update:"ngModelChange"}),t.Cb(2048,null,g.c,null,[g.e]),t.ob(26,16384,null,0,g.d,[[4,g.c]],null,null),t.ob(27,49152,null,0,s.G,[t.h,t.k,t.x],{placeholder:[0,"placeholder"],type:[1,"type"],value:[2,"value"]},null),(l()(),t.pb(28,0,null,0,4,"ion-button",[],null,[[null,"click"]],(function(l,n,e){var t=!0;return"click"===n&&(t=!1!==l.component.addTemplate()&&t),t}),i.H,i.d)),t.ob(29,49152,null,0,s.k,[t.h,t.k,t.x],null,null),(l()(),t.pb(30,0,null,0,1,"ion-icon",[["name","add-outline"],["slot","start"]],null,null,null,i.S,i.o)),t.ob(31,49152,null,0,s.C,[t.h,t.k,t.x],{name:[0,"name"]},null),(l()(),t.Fb(-1,0,[" Ajouter\n"]))],(function(l,n){var e=n.component;l(n,5,0,"/home","home"),l(n,6,0,"/home"),l(n,12,0,!0),l(n,18,0,e.templates),l(n,24,0,e.nomTemplate),l(n,27,0,"nom du controle","text",""),l(n,31,0,"add-outline")}),(function(l,n){l(n,21,0,t.Bb(n,26).ngClassUntouched,t.Bb(n,26).ngClassTouched,t.Bb(n,26).ngClassPristine,t.Bb(n,26).ngClassDirty,t.Bb(n,26).ngClassValid,t.Bb(n,26).ngClassInvalid,t.Bb(n,26).ngClassPending)}))}function B(l){return t.Gb(0,[(l()(),t.pb(0,0,null,null,1,"app-templates",[],null,null,null,v,T)),t.ob(1,114688,null,0,k,[r.b,c.m,s.Db],null,null)],(function(l,n){l(n,1,0)}),null)}var y=t.lb("app-templates",k,B,{},{},[]),M=t.nb({encapsulation:0,styles:[[""]],data:{}});function D(l){return t.Gb(0,[(l()(),t.pb(0,0,null,null,13,"ion-item",[],null,null,null,i.X,i.q)),t.ob(1,49152,null,0,s.H,[t.h,t.k,t.x],null,null),(l()(),t.pb(2,0,null,0,4,"ion-label",[],null,null,null,i.Y,i.u)),t.ob(3,49152,null,0,s.N,[t.h,t.k,t.x],null,null),(l()(),t.Fb(4,0,[""," "])),(l()(),t.pb(5,0,null,0,1,"small",[],null,null,null,null,null)),(l()(),t.Fb(6,null,["",""])),(l()(),t.pb(7,0,null,0,6,"ion-checkbox",[["slot","end"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],(function(l,n,e){var o=!0;return"ionBlur"===n&&(o=!1!==t.Bb(l,8)._handleBlurEvent(e.target)&&o),"ionChange"===n&&(o=!1!==t.Bb(l,8)._handleIonChange(e.target)&&o),"ngModelChange"===n&&(o=!1!==(l.context.$implicit.state=e)&&o),o}),i.O,i.k)),t.ob(8,16384,null,0,s.c,[t.k],null,null),t.Cb(1024,null,g.b,(function(l){return[l]}),[s.c]),t.ob(10,671744,null,0,g.e,[[8,null],[8,null],[8,null],[6,g.b]],{model:[0,"model"]},{update:"ngModelChange"}),t.Cb(2048,null,g.c,null,[g.e]),t.ob(12,16384,null,0,g.d,[[4,g.c]],null,null),t.ob(13,49152,null,0,s.r,[t.h,t.k,t.x],null,null)],(function(l,n){l(n,10,0,n.context.$implicit.state)}),(function(l,n){l(n,4,0,n.context.$implicit.name),l(n,6,0,n.context.$implicit.description),l(n,7,0,t.Bb(n,12).ngClassUntouched,t.Bb(n,12).ngClassTouched,t.Bb(n,12).ngClassPristine,t.Bb(n,12).ngClassDirty,t.Bb(n,12).ngClassValid,t.Bb(n,12).ngClassInvalid,t.Bb(n,12).ngClassPending)}))}function z(l){return t.Gb(0,[(l()(),t.pb(0,0,null,null,8,"ion-header",[],null,null,null,i.R,i.n)),t.ob(1,49152,null,0,s.B,[t.h,t.k,t.x],null,null),(l()(),t.pb(2,0,null,0,6,"ion-toolbar",[],null,null,null,i.hb,i.D)),t.ob(3,49152,null,0,s.zb,[t.h,t.k,t.x],null,null),(l()(),t.pb(4,0,null,0,1,"ion-icon",[["name","close-outline"],["size","large"],["slot","end"]],null,[[null,"click"]],(function(l,n,e){var t=!0;return"click"===n&&(t=!1!==l.component.dismiss()&&t),t}),i.S,i.o)),t.ob(5,49152,null,0,s.C,[t.h,t.k,t.x],{name:[0,"name"],size:[1,"size"]},null),(l()(),t.pb(6,0,null,0,2,"ion-title",[],null,null,null,i.fb,i.B)),t.ob(7,49152,null,0,s.xb,[t.h,t.k,t.x],null,null),(l()(),t.Fb(-1,0,["Ajouter des controles"])),(l()(),t.pb(9,0,null,null,13,"ion-content",[],null,null,null,i.Q,i.m)),t.ob(10,49152,null,0,s.u,[t.h,t.k,t.x],null,null),(l()(),t.pb(11,0,null,0,4,"ion-card-header",[],null,null,null,i.K,i.h)),t.ob(12,49152,null,0,s.o,[t.h,t.k,t.x],null,null),(l()(),t.pb(13,0,null,0,2,"ion-card-title",[],null,null,null,i.M,i.j)),t.ob(14,49152,null,0,s.q,[t.h,t.k,t.x],null,null),(l()(),t.Fb(15,0,[""," controles disponibles"])),(l()(),t.pb(16,0,null,0,3,"ion-list",[],null,null,null,i.Z,i.v)),t.ob(17,49152,null,0,s.O,[t.h,t.k,t.x],null,null),(l()(),t.eb(16777216,null,0,1,null,D)),t.ob(19,278528,null,0,h.h,[t.M,t.J,t.q],{ngForOf:[0,"ngForOf"]},null),(l()(),t.pb(20,0,null,0,2,"ion-button",[["expand","full"]],null,[[null,"click"]],(function(l,n,e){var t=!0;return"click"===n&&(t=!1!==l.component.save()&&t),t}),i.H,i.d)),t.ob(21,49152,null,0,s.k,[t.h,t.k,t.x],{expand:[0,"expand"]},null),(l()(),t.Fb(-1,0,["Sauvegarder"]))],(function(l,n){var e=n.component;l(n,5,0,"close-outline","large"),l(n,19,0,e.controleState),l(n,21,0,"full")}),(function(l,n){l(n,15,0,n.component.controleState.length)}))}function F(l){return t.Gb(0,[(l()(),t.pb(0,0,null,null,1,"app-modal-page",[],null,null,null,z,M)),t.ob(1,114688,null,0,x,[s.Fb,s.Db,r.b,c.m],null,null)],(function(l,n){l(n,1,0)}),null)}var O=t.lb("app-modal-page",x,F,{id:"id"},{},[]);class S{}e.d(n,"TemplatesPageModuleNgFactory",(function(){return E}));var E=t.mb(o,[],(function(l){return t.yb([t.zb(512,t.j,t.X,[[8,[u.a,y,m,O]],[3,t.j],t.v]),t.zb(4608,h.k,h.j,[t.s,[2,h.r]]),t.zb(4608,g.g,g.g,[]),t.zb(4608,s.b,s.b,[t.x,t.g]),t.zb(4608,s.Db,s.Db,[s.b,t.j,t.p]),t.zb(4608,s.Hb,s.Hb,[s.b,t.j,t.p]),t.zb(1073742336,h.b,h.b,[]),t.zb(1073742336,g.f,g.f,[]),t.zb(1073742336,g.a,g.a,[]),t.zb(1073742336,s.Bb,s.Bb,[]),t.zb(1073742336,c.o,c.o,[[2,c.t],[2,c.m]]),t.zb(1073742336,S,S,[]),t.zb(1073742336,o,o,[]),t.zb(1024,c.k,(function(){return[[{path:"",component:k}]]}),[])])}))}}]);