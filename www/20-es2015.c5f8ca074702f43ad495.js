(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{L6id:function(l,n,u){"use strict";u.r(n);var o=u("8Y7J");class e{}var t=u("pMnS"),i=u("MKJQ"),r=u("sZkV");class a{constructor(l,n){this.storage=l,this.router=n,l.get("user.name").then(l=>{this.username=l})}logout(){this.storage.set("force-login",!1),this.router.navigate(["/login"])}createQc(){console.log("createQC"),this.router.navigate(["/controle-qualite"])}seeQc(){this.router.navigate(["/display-qc"])}modifyTempaltes(){this.router.navigate(["/templates"])}modifyControles(){this.router.navigate(["/gerer-controle-qualite"])}}var c=u("xgBC"),b=u("iInd"),s=o.nb({encapsulation:0,styles:[["#container[_ngcontent-%COMP%]{text-align:center;position:absolute;left:0;right:0;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}#container[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-size:20px;line-height:26px}#container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:16px;line-height:22px;color:#8c8c8c;margin:0}#container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none}ion-content[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]{--background:translucent}#logo[_ngcontent-%COMP%]{width:50px;margin-left:10px}#logoBig[_ngcontent-%COMP%]{width:40vw;margin:5vh 30vw 0}h2[_ngcontent-%COMP%]{text-align:center}"]],data:{}});function m(l){return o.Gb(0,[(l()(),o.pb(0,0,null,null,10,"ion-header",[],null,null,null,i.R,i.n)),o.ob(1,49152,null,0,r.B,[o.h,o.k,o.x],null,null),(l()(),o.pb(2,0,null,0,8,"ion-toolbar",[],null,null,null,i.hb,i.D)),o.ob(3,49152,null,0,r.zb,[o.h,o.k,o.x],null,null),(l()(),o.pb(4,0,null,0,0,"img",[["id","logo"],["slot","start"],["src","../../assets/logo_QCSCM.png"]],null,null,null,null,null)),(l()(),o.pb(5,0,null,0,2,"ion-title",[],null,null,null,i.fb,i.B)),o.ob(6,49152,null,0,r.xb,[o.h,o.k,o.x],null,null),(l()(),o.Fb(-1,0,[" QC-SCM "])),(l()(),o.pb(8,0,null,0,1,"ion-icon",[["name","log-out-outline"],["size","large"],["slot","end"]],null,[[null,"click"]],(function(l,n,u){var o=!0;return"click"===n&&(o=!1!==l.component.logout()&&o),o}),i.S,i.o)),o.ob(9,49152,null,0,r.C,[o.h,o.k,o.x],{name:[0,"name"],size:[1,"size"]},null),(l()(),o.Fb(-1,0,["\xa0 "])),(l()(),o.pb(11,0,null,null,42,"ion-content",[],null,null,null,i.Q,i.m)),o.ob(12,49152,null,0,r.u,[o.h,o.k,o.x],{fullscreen:[0,"fullscreen"]},null),(l()(),o.pb(13,0,null,0,1,"h2",[],null,null,null,null,null)),(l()(),o.Fb(14,null,[" Bienvenue ",""])),(l()(),o.pb(15,0,null,0,0,"img",[["id","logoBig"],["src","../../assets/logo_QCSCM.png"]],null,null,null,null,null)),(l()(),o.pb(16,0,null,0,37,"ion-list",[],null,null,null,i.Z,i.v)),o.ob(17,49152,null,0,r.O,[o.h,o.k,o.x],null,null),(l()(),o.pb(18,0,null,0,8,"ion-item",[],null,[[null,"click"]],(function(l,n,u){var o=!0;return"click"===n&&(o=!1!==l.component.createQc()&&o),o}),i.X,i.q)),o.ob(19,49152,null,0,r.H,[o.h,o.k,o.x],null,null),(l()(),o.pb(20,0,null,0,1,"ion-icon",[["name","document-outline"],["slot","start"]],null,null,null,i.S,i.o)),o.ob(21,49152,null,0,r.C,[o.h,o.k,o.x],{name:[0,"name"]},null),(l()(),o.pb(22,0,null,0,2,"ion-label",[],null,null,null,i.Y,i.u)),o.ob(23,49152,null,0,r.N,[o.h,o.k,o.x],null,null),(l()(),o.Fb(-1,0,["Cr\xe9e un QC"])),(l()(),o.pb(25,0,null,0,1,"ion-icon",[["name","chevron-forward-outline"],["slot","end"]],null,null,null,i.S,i.o)),o.ob(26,49152,null,0,r.C,[o.h,o.k,o.x],{name:[0,"name"]},null),(l()(),o.pb(27,0,null,0,8,"ion-item",[],null,[[null,"click"]],(function(l,n,u){var o=!0;return"click"===n&&(o=!1!==l.component.seeQc()&&o),o}),i.X,i.q)),o.ob(28,49152,null,0,r.H,[o.h,o.k,o.x],null,null),(l()(),o.pb(29,0,null,0,1,"ion-icon",[["name","library-outline"],["slot","start"]],null,null,null,i.S,i.o)),o.ob(30,49152,null,0,r.C,[o.h,o.k,o.x],{name:[0,"name"]},null),(l()(),o.pb(31,0,null,0,2,"ion-label",[],null,null,null,i.Y,i.u)),o.ob(32,49152,null,0,r.N,[o.h,o.k,o.x],null,null),(l()(),o.Fb(-1,0,["Voir un QC"])),(l()(),o.pb(34,0,null,0,1,"ion-icon",[["name","chevron-forward-outline"],["slot","end"]],null,null,null,i.S,i.o)),o.ob(35,49152,null,0,r.C,[o.h,o.k,o.x],{name:[0,"name"]},null),(l()(),o.pb(36,0,null,0,8,"ion-item",[],null,[[null,"click"]],(function(l,n,u){var o=!0;return"click"===n&&(o=!1!==l.component.modifyTempaltes()&&o),o}),i.X,i.q)),o.ob(37,49152,null,0,r.H,[o.h,o.k,o.x],null,null),(l()(),o.pb(38,0,null,0,1,"ion-icon",[["name","file-tray-full-outline"],["slot","start"]],null,null,null,i.S,i.o)),o.ob(39,49152,null,0,r.C,[o.h,o.k,o.x],{name:[0,"name"]},null),(l()(),o.pb(40,0,null,0,2,"ion-label",[],null,null,null,i.Y,i.u)),o.ob(41,49152,null,0,r.N,[o.h,o.k,o.x],null,null),(l()(),o.Fb(-1,0,["Gestion des templates"])),(l()(),o.pb(43,0,null,0,1,"ion-icon",[["name","chevron-forward-outline"],["slot","end"]],null,null,null,i.S,i.o)),o.ob(44,49152,null,0,r.C,[o.h,o.k,o.x],{name:[0,"name"]},null),(l()(),o.pb(45,0,null,0,8,"ion-item",[],null,[[null,"click"]],(function(l,n,u){var o=!0;return"click"===n&&(o=!1!==l.component.modifyControles()&&o),o}),i.X,i.q)),o.ob(46,49152,null,0,r.H,[o.h,o.k,o.x],null,null),(l()(),o.pb(47,0,null,0,1,"ion-icon",[["name","eye-outline"],["slot","start"]],null,null,null,i.S,i.o)),o.ob(48,49152,null,0,r.C,[o.h,o.k,o.x],{name:[0,"name"]},null),(l()(),o.pb(49,0,null,0,2,"ion-label",[],null,null,null,i.Y,i.u)),o.ob(50,49152,null,0,r.N,[o.h,o.k,o.x],null,null),(l()(),o.Fb(-1,0,["Gestion des controles"])),(l()(),o.pb(52,0,null,0,1,"ion-icon",[["name","chevron-forward-outline"],["slot","end"]],null,null,null,i.S,i.o)),o.ob(53,49152,null,0,r.C,[o.h,o.k,o.x],{name:[0,"name"]},null)],(function(l,n){l(n,9,0,"log-out-outline","large"),l(n,12,0,!0),l(n,21,0,"document-outline"),l(n,26,0,"chevron-forward-outline"),l(n,30,0,"library-outline"),l(n,35,0,"chevron-forward-outline"),l(n,39,0,"file-tray-full-outline"),l(n,44,0,"chevron-forward-outline"),l(n,48,0,"eye-outline"),l(n,53,0,"chevron-forward-outline")}),(function(l,n){l(n,14,0,n.component.username)}))}function p(l){return o.Gb(0,[(l()(),o.pb(0,0,null,null,1,"app-home",[],null,null,null,m,s)),o.ob(1,49152,null,0,a,[c.b,b.m],null,null)],null,null)}var g=o.lb("app-home",a,p,{},{},[]),h=u("SVse"),f=u("s7LF");u.d(n,"HomePageModuleNgFactory",(function(){return k}));var k=o.mb(e,[],(function(l){return o.yb([o.zb(512,o.j,o.X,[[8,[t.a,g]],[3,o.j],o.v]),o.zb(4608,h.k,h.j,[o.s,[2,h.r]]),o.zb(4608,f.g,f.g,[]),o.zb(4608,r.b,r.b,[o.x,o.g]),o.zb(4608,r.Db,r.Db,[r.b,o.j,o.p]),o.zb(4608,r.Hb,r.Hb,[r.b,o.j,o.p]),o.zb(1073742336,h.b,h.b,[]),o.zb(1073742336,f.f,f.f,[]),o.zb(1073742336,f.a,f.a,[]),o.zb(1073742336,r.Bb,r.Bb,[]),o.zb(1073742336,b.o,b.o,[[2,b.t],[2,b.m]]),o.zb(1073742336,e,e,[]),o.zb(1024,b.k,(function(){return[[{path:"",component:a}]]}),[])])}))}}]);