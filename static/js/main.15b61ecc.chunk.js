(this.webpackJsonplife=this.webpackJsonplife||[]).push([[0],{63:function(e,t,a){},72:function(e,t,a){},93:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),r=a(20),o=a.n(r),i=(a(63),a(23)),s=a(110),l=a(108),j=a(55),u=a(26),d="DATA_REQUEST",b="DATA_SUCCESS",h="DATA_FAILER",p=a(4);var O=function(e){var t=e.data,a=t.server,c=t.secret,n=t.id,r="".concat("https://live.staticflickr.com","/").concat(a,"/").concat(n,"_").concat(c,"_w.jpg");return Object(p.jsx)(l.a,{item:!0,children:Object(p.jsx)("img",{src:r})})},f=Object(s.a)({root:{}});var x=function(){var e=Object(u.b)(),t=Object(c.useState)(!1),a=Object(j.a)(t,2),n=a[0],r=a[1];Object(c.useEffect)((function(){e({type:d}),r(!0)}),[]);var o=Object(u.c)((function(e){return e}));return console.log(o),f(),Object(p.jsx)(p.Fragment,{children:Object(p.jsx)(l.a,{container:!0,spacing:5,children:function(){if(!o.data.loading&&n)return o.data.data.photos.photo.map((function(e,t){return Object(p.jsx)(O,{data:e},t)}))}()})})},g=a(111),v=a(112),m=a(113),w=a(50),y=a.n(w),k=Object(s.a)({root:{width:"100%",height:"100px",backgroundColor:"black"},heading:{color:"white",margin:"5px 0px"},feild:{display:"flex",alignItems:"center",width:"450px",backgroundColor:"white",margin:"5px 0px"},icon:{padding:"0px 5px"},input:{}});var S=function(){var e=k();return Object(p.jsx)(p.Fragment,{children:Object(p.jsx)(l.a,{item:!0,xs:12,className:e.root,children:Object(p.jsxs)(l.a,{container:!0,direction:"column",justifyContent:"center",alignItems:"center",children:[Object(p.jsx)(l.a,{item:!0,children:Object(p.jsx)(g.a,{variant:"h4",align:"center",className:e.heading,children:"Search Photos"})}),Object(p.jsx)(l.a,{item:!0,children:Object(p.jsxs)(v.a,{elevation:0,className:e.feild,children:[Object(p.jsx)(y.a,{className:e.icon}),Object(p.jsx)(m.a,{className:e.input,type:"search",placeholder:"Search Here...",id:"serach",name:"search",fullWidth:!0})]})})]})})})};var C=function(){return Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)(l.a,{children:[Object(p.jsx)(S,{}),Object(p.jsx)(x,{})]})})},A=(a(72),Object(s.a)({root:{width:"100%",height:"100vh",backgroundColor:"#eaeef3"}}));var F=function(){var e,t=A();return Object(p.jsx)(l.a,(e={className:"App"},Object(i.a)(e,"className",t.root),Object(i.a)(e,"children",Object(p.jsx)(C,{})),e))},N=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,115)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,r=t.getLCP,o=t.getTTFB;a(e),c(e),n(e),r(e),o(e)}))},T=a(16),E=a(56),_=a(51),D=a(52),I=a.n(D),R=a(19),L={loading:!1,data:[],error:null},P=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case d:return Object(R.a)(Object(R.a)({},e),{},{loading:!0});case b:return Object(R.a)(Object(R.a)({},e),{},{loading:!1,data:t.payload});case h:return Object(R.a)(Object(R.a)({},e),{},{loading:!1,error:t.payload});default:return e}},B=Object(T.combineReducers)({data:P}),J=a(14),M=a.n(J),U=a(17),W=a(53),H=a(54),Q=a.n(H),q=function(){var e=Object(W.a)(M.a.mark((function e(){var t;return M.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("data"),t="",e.next=4,Q.a.get("https://www.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=0eed32e991e00d3e63a93dfece2f02cf&format=json&nojsoncallback=1").then((function(e){t=e.data})).catch((function(e){console.log(e)}));case 4:return e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),z=M.a.mark(G);function G(){var e;return M.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(U.b)(q);case 3:return e=t.sent,t.next=6,Object(U.c)({type:b,payload:e});case 6:t.next=12;break;case 8:return t.prev=8,t.t0=t.catch(0),t.next=12,Object(U.c)((a=t.t0,{type:h,payload:a}));case 12:case"end":return t.stop()}var a}),z,null,[[0,8]])}var K=Object(U.a)([Object(U.d)(d,G)]),V=M.a.mark(X);function X(){return M.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(U.a)([K]);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),V)}var Y=Object(E.a)(),Z=[I.a,Y],$=Object(T.createStore)(B,Object(_.composeWithDevTools)(T.applyMiddleware.apply(void 0,Z)));Y.run(X);var ee=$;o.a.render(Object(p.jsx)(n.a.StrictMode,{children:Object(p.jsx)(u.a,{store:ee,children:Object(p.jsx)(F,{})})}),document.getElementById("root")),N()}},[[93,1,2]]]);
//# sourceMappingURL=main.15b61ecc.chunk.js.map