(this.webpackJsonplife=this.webpackJsonplife||[]).push([[0],{106:function(e,t,a){"use strict";a.r(t);var c=a(0),r=a.n(c),n=a(12),o=a.n(n),s=(a(76),a(26)),i=a(127),d=a(129),l=a(19),u=a(17),b="DATA_REQUEST",j="DATA_SUCCESS",p="DATA_FAILER",h="DATA_ADDON_REQUEST",O="DATA_ADDON_SUCCESS",f="DATA_ADDON_FAILER",g="ADD_ALL_DATA",x=function(e){return{type:b,page:e}},v=function(e){return{type:p,payload:e}},m=function(e,t){return{type:O,payload:e,page:t}},y=function(e){return{type:f,payload:e}},w=a(136),k=a(131),A=a(110),S=a(3),C=Object(i.a)((function(e){return{modal:{display:"flex",alignItems:"center",justifyContent:"center",border:"none"},img:{maxWidth:"80%",maxHeight:"90vh"}}}));var D=function(e){var t=e.data,a=C(),r=Object(c.useState)(!1),n=Object(l.a)(r,2),o=n[0],s=n[1],i="https://live.staticflickr.com",u=t.server,b=t.secret,j=t.id,p="".concat(i,"/").concat(u,"/").concat(j,"_").concat(b,"_w.jpg"),h="".concat(i,"/").concat(u,"/").concat(j,"_").concat(b,"_b.jpg");return Object(S.jsxs)(d.a,{item:!0,children:[Object(S.jsx)("img",{src:p,loading:"lazy",onClick:function(){s(!0)}}),Object(S.jsx)(w.a,{className:a.modal,open:o,onClose:function(){s(!1)},closeAfterTransition:!0,BackdropComponent:k.a,BackdropProps:{timeout:500},children:Object(S.jsx)(A.a,{in:o,children:Object(S.jsx)("img",{src:h,loading:"lazy",className:a.img})})})]})};Object(i.a)({root:{padding:"25px 0px",width:"100%",height:"100%",margin:"0px",overflowX:"hidden",overflowY:"scroll","&::-webkit-scrollbar":{width:"8px"},"&::-webkit-scrollbar-track":{backgroundColor:"#eaeef3",margin:"8px 0px"},"&::-webkit-scrollbar-thumb":{border:"4px solid grey",borderRadius:"10px"}}});var E=a(7),_=a(132),L=a(133),T=a(137),R=a(67),N=a.n(R),H="SEARCH_DATA_REQUEST",P="SEARCH_DATA_SUCCESS",I="SEARCH_DATA_FAILER",F="SEARCH_ADDON_REQUEST",U="SEARCH_ADDON_SUCCESS",B="SEARCH_ADDON_FAILER",W="SET_SEARCH",Q="ADD_ALL_SEARCH",z=function(e,t,a){return{type:P,result:e,total:t,page:a}},M=function(e){return{type:I,payload:e}},X=function(e,t,a){return{type:U,payload:e,total:t,page:a}},Y=function(e){return{type:B,payload:e}},J=Object(i.a)({root:{width:"100%",height:"110px",backgroundColor:"black",position:"fixed",zIndex:100},heading:{color:"white",margin:"5px 0px"},feild:{display:"flex",alignItems:"center",width:"450px",backgroundColor:"white",margin:"10px 0px"},icon:{padding:"0px 5px",cursor:"text"},input:{}}),q={search:""};var G=function(){var e=J(),t=Object(c.useState)(q),a=Object(l.a)(t,2),r=a[0],n=a[1],o=Object(u.b)();return Object(c.useEffect)((function(){var e;o((e=r.search,{type:W,data:e}))}),[r]),Object(S.jsx)(S.Fragment,{children:Object(S.jsx)(d.a,{item:!0,xs:12,className:e.root,children:Object(S.jsxs)(d.a,{container:!0,direction:"column",justifyContent:"center",alignItems:"center",style:{height:"100%"},children:[Object(S.jsx)(d.a,{item:!0,children:Object(S.jsx)(_.a,{variant:"h4",align:"center",className:e.heading,children:"Search Photos"})}),Object(S.jsx)(d.a,{item:!0,children:Object(S.jsxs)(L.a,{elevation:0,className:e.feild,children:[Object(S.jsx)(N.a,{className:e.icon,onClick:function(){document.getElementById("serach").focus()}}),Object(S.jsx)(T.a,{className:e.input,type:"search",placeholder:"Search Here...",id:"serach",name:"search",fullWidth:!0,value:r.search,onChange:function(e){return function(e){var t=e.target,a=t.name,c=t.value;n(Object(E.a)(Object(E.a)({},r),{},Object(s.a)({},a,c)))}(e)}})]})})]})})})},K=a(32),V=a(134),Z=a(135),$=Object(i.a)({root:{display:"flex",padding:"25px 15px",paddingTop:"135px",flexWrap:"wrap",justifyContent:"space-around",width:"calc(100% - 30px )",height:"100%",margin:"0px",overflowX:"hidden"}});var ee=function(){var e=Object(u.b)(),t=Object(c.useState)(!1),a=Object(l.a)(t,2),r=a[0],n=a[1],o=Object(c.useState)(!1),s=Object(l.a)(o,2),i=s[0],b=s[1],j=Object(u.c)((function(e){return e})),p=$();return Object(c.useEffect)((function(){e(x(j.data.lastPage)),n(!0)}),[]),Object(c.useEffect)((function(){if(r&&i&&!j.data.addLoading){var t=j.data.data,a=j.data.addonData,c=[].concat(Object(K.a)(t),Object(K.a)(a));e({type:g,payload:c})}}),[j.data.addonData]),""!==j.search.search&&" "!==j.search.search||(window.onscroll=function(){var t=document.body.offsetHeight;if(window.innerHeight+window.scrollY>=t-4e3&&!j.data.addLoading&&!j.data.loading){var a=parseInt(j.data.lastPage);(a+=1)>100&&(a=1),console.log(a),e(function(e){return{type:h,page:e}}(a)),b(!0)}}),Object(S.jsx)(S.Fragment,{children:Object(S.jsx)(d.a,{className:p.root,children:Object(S.jsx)(Z.a,{cols:5,gap:10,style:{width:"100%"},children:function(){if(!j.data.loading&&r)return j.data.data.map((function(e,t){return Object(S.jsx)(V.a,{rows:2,children:Object(S.jsx)(D,{data:e})},t)}))}()})})})},te=Object(i.a)({root:{display:"flex",padding:"10px 15px",paddingTop:"115px",flexWrap:"wrap",justifyContent:"space-around",width:"calc(100% - 30px )",height:"100%",margin:"0px",overflowX:"hidden"}});var ae=function(){var e=Object(u.b)(),t=Object(c.useState)(!1),a=Object(l.a)(t,2),r=a[0],n=a[1],o=Object(c.useState)(!1),s=Object(l.a)(o,2),i=s[0],b=s[1],j=Object(u.c)((function(e){return e})),p=te();return Object(c.useEffect)((function(){var t,a;e((t=j.search.search,a=j.search.lastPage,{type:H,search:t,page:a})),n(!0)}),[j.search.search]),Object(c.useEffect)((function(){if(r&&i&&!j.search.addLoading){var t=j.search.result,a=j.search.addonSearch,c=[].concat(Object(K.a)(t),Object(K.a)(a));e({type:Q,payload:c})}}),[j.search.addonSearch]),""===j.search.search&&" "===j.search.search||(window.onscroll=function(){var t=document.body.offsetHeight;if(window.innerHeight+window.scrollY>=t-4e3&&!j.search.addLoading&&!j.search.loading){var a=parseInt(j.search.lastPage);(a+=1)>100&&(a=1),console.log(a),e(function(e,t){return{type:F,search:e,page:t}}(j.search.search,a)),b(!0)}}),Object(S.jsx)(S.Fragment,{children:Object(S.jsxs)(d.a,{className:p.root,children:[j.search.total>0?Object(S.jsxs)(_.a,{color:"textPrimary",align:"center",variant:"h6",children:["More than ",j.search.total," results"]}):Object(S.jsx)(_.a,{color:"error",align:"center",variant:"h6",children:"0 results"}),Object(S.jsx)(Z.a,{cols:5,gap:10,style:{width:"100%"},children:function(){if(!j.search.loading&&r)return j.search.result.map((function(e,t){return Object(S.jsx)(V.a,{rows:2,children:Object(S.jsx)(D,{data:e})},t)}))}()})]})})};var ce=function(){var e=Object(u.c)((function(e){return e}));return Object(S.jsx)(S.Fragment,{children:Object(S.jsxs)(d.a,{style:{width:"100%",height:"100%"},children:[Object(S.jsx)(G,{}),""===e.search.search||" "===e.search.search?(console.log(e.search.search),Object(S.jsx)(ee,{})):(console.log(e.search.search),Object(S.jsx)(ae,{}))]})})},re=(a(85),Object(i.a)({root:{width:"100%",height:"100%",minHeight:"101vh",backgroundColor:"#eaeef3"}}));var ne=function(){var e,t=re();return Object(S.jsx)(d.a,(e={className:"App"},Object(s.a)(e,"className",t.root),Object(s.a)(e,"children",Object(S.jsx)(ce,{})),e))},oe=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,139)).then((function(t){var a=t.getCLS,c=t.getFID,r=t.getFCP,n=t.getLCP,o=t.getTTFB;a(e),c(e),r(e),n(e),o(e)}))},se=a(24),ie=a(70),de=a(68),le=a(69),ue=a.n(le),be={loading:!1,addLoading:!1,addonData:[],lastPage:1,data:[],error:null},je=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:be,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b:return Object(E.a)(Object(E.a)({},e),{},{loading:!0});case j:return Object(E.a)(Object(E.a)({},e),{},{loading:!1,data:t.payload});case p:return Object(E.a)(Object(E.a)({},e),{},{loading:!1,error:t.payload});case h:return Object(E.a)(Object(E.a)({},e),{},{addLoading:!0});case O:return Object(E.a)(Object(E.a)({},e),{},{addLoading:!1,addonData:t.payload,lastPage:t.page});case f:return Object(E.a)(Object(E.a)({},e),{},{addLoading:!1,error:t.payload});case g:return Object(E.a)(Object(E.a)({},e),{},{data:t.payload});default:return e}},pe={loading:!1,result:[],total:"",search:"",error:"",addLoading:!1,addonSearch:[],lastPage:1},he=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:pe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case H:return Object(E.a)(Object(E.a)({},e),{},{loading:!0});case P:return Object(E.a)(Object(E.a)({},e),{},{loading:!1,result:t.result,total:t.total,lastPage:t.page});case I:return Object(E.a)(Object(E.a)({},e),{},{loading:!1,error:t.payload});case F:return Object(E.a)(Object(E.a)({},e),{},{addLoading:!0});case U:return Object(E.a)(Object(E.a)({},e),{},{addLoading:!1,addonSearch:t.payload,total:t.total,lastPage:t.page});case B:return Object(E.a)(Object(E.a)({},e),{},{addLoading:!1,error:t.payload});case W:return Object(E.a)(Object(E.a)({},e),{},{search:t.data});case Q:return Object(E.a)(Object(E.a)({},e),{},{result:t.payload});default:return e}},Oe=Object(se.combineReducers)({data:je,search:he}),fe=a(10),ge=a.n(fe),xe=a(8),ve=a(48),me=a(49),ye=a.n(me),we=function(){var e=Object(ve.a)(ge.a.mark((function e(t){var a;return ge.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("data",t),a="",e.next=4,ye.a.get("https://www.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=0eed32e991e00d3e63a93dfece2f02cf&page=".concat(t,"&format=json&nojsoncallback=1")).then((function(e){a=e.data})).catch((function(e){console.log(e)}));case 4:return e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ke=ge.a.mark(Se),Ae=ge.a.mark(Ce);function Se(e){var t,a;return ge.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return t=e.page,c.prev=1,c.next=4,Object(xe.b)(we,t);case 4:if("ok"!==(a=c.sent).stat){c.next=10;break}return c.next=8,Object(xe.c)((r=a.photos.photo,{type:j,payload:r}));case 8:c.next=12;break;case 10:return c.next=12,Object(xe.c)(v(a));case 12:c.next=18;break;case 14:return c.prev=14,c.t0=c.catch(1),c.next=18,Object(xe.c)(v(c.t0));case 18:case"end":return c.stop()}var r}),ke,null,[[1,14]])}function Ce(e){var t,a;return ge.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return t=e.page,c.prev=1,c.next=4,Object(xe.b)(we,t);case 4:if("ok"!==(a=c.sent).stat){c.next=10;break}return c.next=8,Object(xe.c)(m(a.photos.photo,t));case 8:c.next=12;break;case 10:return c.next=12,Object(xe.c)(y(a));case 12:c.next=18;break;case 14:return c.prev=14,c.t0=c.catch(1),c.next=18,Object(xe.c)(y(c.t0));case 18:case"end":return c.stop()}}),Ae,null,[[1,14]])}var De=Object(xe.a)([Object(xe.d)(b,Se),Object(xe.d)(h,Ce)]),Ee=function(){var e=Object(ve.a)(ge.a.mark((function e(t,a){var c;return ge.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c="",e.next=3,ye.a.get("https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=a78c553d43b32405745eb0eef77e6065&tags=".concat(t,"&page=").concat(a,"&format=json&nojsoncallback=1")).then((function(e){c=e.data})).catch((function(e){console.log(e)}));case 3:return e.abrupt("return",c);case 4:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),_e=ge.a.mark(Te),Le=ge.a.mark(Re);function Te(e){var t,a,c;return ge.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t=e.search,a=e.page,r.prev=1,console.log(a),r.next=5,Object(xe.b)(Ee,t,a);case 5:if("ok"!==(c=r.sent).stat){r.next=11;break}return r.next=9,Object(xe.c)(z(c.photos.photo,c.photos.total,a));case 9:r.next=13;break;case 11:return r.next=13,Object(xe.c)(M(c));case 13:r.next=19;break;case 15:return r.prev=15,r.t0=r.catch(1),r.next=19,Object(xe.c)(M(r.t0));case 19:case"end":return r.stop()}}),_e,null,[[1,15]])}function Re(e){var t,a,c;return ge.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t=e.search,a=e.page,r.prev=1,r.next=4,Object(xe.b)(Ee,t,a);case 4:if("ok"!==(c=r.sent).stat){r.next=10;break}return r.next=8,Object(xe.c)(X(c.photos.photo,c.photos.total,a));case 8:r.next=12;break;case 10:return r.next=12,Object(xe.c)(Y(c));case 12:r.next=18;break;case 14:return r.prev=14,r.t0=r.catch(1),r.next=18,Object(xe.c)(Y(r.t0));case 18:case"end":return r.stop()}}),Le,null,[[1,14]])}var Ne=Object(xe.a)([Object(xe.d)(H,Te),Object(xe.d)(F,Re)]),He=ge.a.mark(Pe);function Pe(){return ge.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(xe.a)([De,Ne]);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),He)}var Ie=Object(ie.a)(),Fe=[ue.a,Ie],Ue=Object(se.createStore)(Oe,Object(de.composeWithDevTools)(se.applyMiddleware.apply(void 0,Fe)));Ie.run(Pe);var Be=Ue;o.a.render(Object(S.jsx)(r.a.StrictMode,{children:Object(S.jsx)(u.a,{store:Be,children:Object(S.jsx)(ne,{})})}),document.getElementById("root")),oe()},76:function(e,t,a){},85:function(e,t,a){}},[[106,1,2]]]);
//# sourceMappingURL=main.4718e733.chunk.js.map