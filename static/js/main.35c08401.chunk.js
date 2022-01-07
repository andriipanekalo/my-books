(this.webpackJsonpnewspaper=this.webpackJsonpnewspaper||[]).push([[2],{118:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n.n(r),a=n(36),o=n.n(a),s=n(33),u=n(141),i=n(144),l=n(81),f=Object(l.a)({palette:{primary:{light:"hsl(90, 50%, 65%)",main:"hsl(90, 50%, 53%)",dark:"hsl(90, 50%, 35%)"},background:{light:"#f8f9fa"}},typography:{fontFamily:"Cabin, sans-serif",body2:{color:"#808080"},h6:{fontSize:"1rem"}},components:{MuiCssBaseline:{styleOverrides:{"#root":{minHeight:"100vh",display:"flex",flexDirection:"column"},"::-webkit-scrollbar":{width:10},"::-webkit-scrollbar-track":{background:"#f1f1f1"},"::-webkit-scrollbar-thumb":{background:"#888"},body:{color:"#000000"},header:{flexShrink:0},footer:{flexShrink:0},main:{flexGrow:1}}}},breakpoints:{values:{xs:0,sm:600,md:900,lg:1170,xl:1536}}}),b=n(58),p=n(10),j=n(23),O=n(30),d=n(142),h=n(4),m=Object(d.a)({defaultWrap:{display:"flex",alignItems:"center",height:"100vh",justifyContent:"center"},defaultItem:{"--delay":0,fontSize:30,animation:"$arrows 1s var(--delay) infinite ease-in"},"@keyframes arrows":{"0%, 100%":{color:"black",transform:"translateY(0)"},"50%":{color:"#3AB493",transform:"translateY(20px)"}}});function E(){var e=m();return Object(h.jsx)("div",{className:e.defaultWrap,children:[0,1,2,3,4,5].map((function(t){return Object(h.jsx)("span",{style:{"--delay":"0.".concat(t,"s")},className:e.defaultItem,children:"\u2193"},t)}))})}var v=n(64),g=n(65),x=n(75),_=n(74),y=function(e){Object(x.a)(n,e);var t=Object(_.a)(n);function n(e){var r;return Object(v.a)(this,n),(r=t.call(this,e)).state={hasError:!1},r}return Object(g.a)(n,[{key:"componentDidCatch",value:function(e,t){console.log(e,t)}},{key:"render",value:function(){return this.state.hasError?Object(h.jsx)("h1",{children:"Something went wrong."}):this.props.children}}],[{key:"getDerivedStateFromError",value:function(e){return{hasError:!0}}}]),n}(r.Component),S=Object(r.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(6),n.e(8)]).then(n.bind(null,341))})),w=Object(r.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(5),n.e(9)]).then(n.bind(null,344))})),k=Object(r.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(7)]).then(n.bind(null,350))})),C=Object(r.lazy)((function(){return Promise.all([n.e(0),n.e(10)]).then(n.bind(null,339))})),R=Object(r.lazy)((function(){return n.e(11).then(n.bind(null,331))}));function T(){var e=Object(s.b)();return Object(r.useEffect)((function(){e(Object(j.d)())}),[e]),Object(h.jsx)(y,{children:Object(h.jsx)(b.a,{children:Object(h.jsx)(r.Suspense,{fallback:Object(h.jsx)(E,{}),children:Object(h.jsxs)(p.c,{children:[Object(h.jsx)(p.a,{exact:!0,path:O.a.home,component:S}),Object(h.jsx)(p.a,{exact:!0,path:O.a.search,component:w}),Object(h.jsx)(p.a,{exact:!0,path:O.a.categories,component:C}),Object(h.jsx)(p.a,{exact:!0,path:O.a.articles(":slug_name"),component:k}),Object(h.jsx)(p.a,{path:"*",component:R})]})})})})}var I=function(e){e&&e instanceof Function&&n.e(12).then(n.bind(null,332)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,o=t.getTTFB;n(e),r(e),c(e),a(e),o(e)}))},A=n(25),P=n(82),L=n(5),F="common/FETCHING_START",N="common/FETCHING_FINISHED",D="common/IN_PROGRESS_START",H="common/IN_PROGRESS_FINISHED",M={fetching:!1,inProgress:!1};var z=n(20),U=n(7),V=function(e){return Math.round(e/20)>200?200:Math.round(e/20)},B={articles:{list:null,count:0},sections:{list:null,count:0},top_stories:{list:null,count:0},most_popular:{list:null,count:0},search:{list:null,count:0}};var G=Object(A.b)({common:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M,t=arguments.length>1?arguments[1]:void 0,n=t.type;switch(n){case F:return Object(L.a)(Object(L.a)({},e),{},{fetching:!0});case N:return Object(L.a)(Object(L.a)({},e),{},{fetching:!1});case D:return Object(L.a)(Object(L.a)({},e),{},{inProgress:!0});case H:return Object(L.a)(Object(L.a)({},e),{},{inProgress:!1});default:return e}},articles:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:B,t=arguments.length>1?arguments[1]:void 0,n=t.type,r=t.data;switch(n){case U.c:return Object(L.a)(Object(L.a)({},e),{},{articles:Object(L.a)(Object(L.a)({},e.articles),{},Object(z.a)({},r.type,Object(L.a)(Object(L.a)({},e.articles[r.type]),{},{list:r.results,count:r.num_results})))});case U.a:return Object(L.a)(Object(L.a)({},e),{},{articles:{list:null,count:0}});case U.f:return Object(L.a)(Object(L.a)({},e),{},{sections:{list:r.results,count:r.num_results}});case U.d:return Object(L.a)(Object(L.a)({},e),{},{sections:{list:null}});case U.o:return Object(L.a)(Object(L.a)({},e),{},{top_stories:{list:r.results,count:r.num_results}});case U.m:return Object(L.a)(Object(L.a)({},e),{},{top_stories:{list:null,count:0}});case U.i:return Object(L.a)(Object(L.a)({},e),{},{most_popular:{list:r.results,count:r.num_results}});case U.g:return Object(L.a)(Object(L.a)({},e),{},{most_popular:{list:null,count:0}});case U.l:return Object(L.a)(Object(L.a)({},e),{},{search:{list:r.docs,count:r.meta.hits,pages:V(r.meta.hits)}});case U.j:return Object(L.a)(Object(L.a)({},e),{},{search:{list:null,count:0}});default:return e}}}),X=G,W=n(14),q=n.n(W),J=n(8),Y=n(28),K=n.n(Y);K.a.interceptors.response.use(null,(function(e){if(!(e.response&&e.response.status>=400&&e.response.status<500)){var t=e.message&&"Network Error"===e.message?e.message:"An unexpected error occurred!";return console.log(t),Promise.reject(e)}var n=function(t){return e.response.data.message||t};switch(e.response.status){case 400:console.log("Bad Request","error");break;case 401:localStorage.removeItem("auth"),console.log(n("Authorize please"),"error");break;case 403:console.log(n("Forbidden"),"error");break;case 404:console.log("Not found","error");break;case 409:console.log(n("Conflict with the current state."),"error")}return Promise.reject(e)})),K.a.interceptors.request.use((function(e){return e.baseURL="https://api.nytimes.com/svc",e.params=Object(L.a)(Object(L.a)({},e.params),{},{"api-key":"6j3kXWFWmpK8ycpgFoL9IFMhUnfgOQOF"}),e}));var Q={get:function(e,t){return K.a.get(e,t).then((function(e){return e.data}))},post:function(e,t,n){return K.a.post(e,t,n).then((function(e){return e.data}))},put:function(e,t,n){return K.a.put(e,t,n).then((function(e){return e.data}))},delete:function(e,t){return K.a.delete(e,t).then((function(e){return e.data}))}},$=function(e){return Q.get("/news/v3/content/section-list.json",e)},Z=function(e,t){return Q.get("/news/v3/content/all/".concat(e,".json"),t)},ee=function(e,t){return Q.get("/topstories/v2/".concat(e,".json"),t)},te=function(e){return Q.get("/mostpopular/v2/viewed/7.json",e)},ne=function(e){return Q.get("/search/v2/articlesearch.json",e)},re=function(){return{type:N}},ce=q.a.mark(le),ae=q.a.mark(fe),oe=q.a.mark(be),se=q.a.mark(pe),ue=q.a.mark(je),ie=q.a.mark(Oe);function le(e){var t,n,r,c;return q.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return t=e.params,a.prev=1,n=t.type,r=t.config,a.next=5,Object(J.d)({type:F});case 5:return a.next=7,Object(J.b)(Z,n,r);case 7:return c=a.sent,a.next=10,Object(J.d)(Object(j.c)(Object(L.a)({type:n},c)));case 10:return a.next=12,Object(J.d)(re());case 12:a.next=19;break;case 14:return a.prev=14,a.t0=a.catch(1),console.error(a.t0),a.next=19,Object(J.d)(re());case 19:case"end":return a.stop()}}),ce,null,[[1,14]])}function fe(e){var t,n,r,c;return q.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return t=e.params,a.prev=1,n=t.type,r=t.config,a.next=5,Object(J.b)(ee,n,r);case 5:return c=a.sent,a.next=8,Object(J.d)(Object(j.n)(c));case 8:a.next=13;break;case 10:a.prev=10,a.t0=a.catch(1),console.error(a.t0);case 13:case"end":return a.stop()}}),ae,null,[[1,10]])}function be(e){var t,n;return q.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,t=e.config,r.next=4,Object(J.b)($,t);case 4:return n=r.sent,r.next=7,Object(J.d)(Object(j.e)(n));case 7:r.next=12;break;case 9:r.prev=9,r.t0=r.catch(0),console.error(r.t0);case 12:case"end":return r.stop()}}),oe,null,[[0,9]])}function pe(){var e;return q.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(J.b)(te);case 3:return e=t.sent,t.next=6,Object(J.d)(Object(j.h)(e));case 6:t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.error(t.t0);case 11:case"end":return t.stop()}}),se,null,[[0,8]])}function je(e){var t,n,r;return q.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return t=e.params,c.prev=1,n=t.config,c.next=5,Object(J.b)(ne,n);case 5:return r=c.sent,c.next=8,Object(J.d)(Object(j.k)(r.response));case 8:c.next=13;break;case 10:c.prev=10,c.t0=c.catch(1),console.error(c.t0);case 13:case"end":return c.stop()}}),ue,null,[[1,10]])}function Oe(){return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(J.a)([Object(J.e)(U.b,le),Object(J.f)(U.n,fe),Object(J.f)(U.e,be),Object(J.f)(U.h,pe),Object(J.f)(U.k,je)]);case 2:case"end":return e.stop()}}),ie)}var de=Oe,he=q.a.mark(me);function me(){return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(J.a)([Object(J.c)(de)]);case 2:case"end":return e.stop()}}),he)}var Ee=Object(P.a)(),ve="object"===typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):A.c,ge=Object(A.d)(X,ve(Object(A.a)(Ee)));Ee.run(me);var xe=ge;o.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(s.a,{store:xe,children:Object(h.jsxs)(i.a,{theme:f,children:[Object(h.jsx)(u.a,{}),Object(h.jsx)(T,{})]})})}),document.getElementById("root")),I()},23:function(e,t,n){"use strict";n.d(t,"d",(function(){return c})),n.d(t,"e",(function(){return a})),n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return s})),n.d(t,"a",(function(){return u})),n.d(t,"m",(function(){return i})),n.d(t,"n",(function(){return l})),n.d(t,"l",(function(){return f})),n.d(t,"g",(function(){return b})),n.d(t,"h",(function(){return p})),n.d(t,"f",(function(){return j})),n.d(t,"j",(function(){return O})),n.d(t,"k",(function(){return d})),n.d(t,"i",(function(){return h}));var r=n(7),c=function(e){return{type:r.e,params:e}},a=function(e){return{type:r.f,data:e}},o=function(e){return{type:r.b,params:e}},s=function(e){return{type:r.c,data:e}},u=function(){return{type:r.a}},i=function(e){return{type:r.n,params:e}},l=function(e){return{type:r.o,data:e}},f=function(){return{type:r.m}},b=function(e){return{type:r.h,params:e}},p=function(e){return{type:r.i,data:e}},j=function(){return{type:r.g}},O=function(e){return{type:r.k,params:e}},d=function(e){return{type:r.l,data:e}},h=function(){return{type:r.j}}},30:function(e,t,n){"use strict";t.a={home:"/newspaper",search:"/newspaper/search",articles:function(e){return"/newspaper/articles/".concat(e)},categories:"/newspaper/categories"}},7:function(e,t,n){"use strict";n.d(t,"e",(function(){return c})),n.d(t,"f",(function(){return a})),n.d(t,"d",(function(){return o})),n.d(t,"b",(function(){return s})),n.d(t,"c",(function(){return u})),n.d(t,"a",(function(){return i})),n.d(t,"n",(function(){return l})),n.d(t,"o",(function(){return f})),n.d(t,"m",(function(){return b})),n.d(t,"h",(function(){return p})),n.d(t,"i",(function(){return j})),n.d(t,"g",(function(){return O})),n.d(t,"k",(function(){return d})),n.d(t,"l",(function(){return h})),n.d(t,"j",(function(){return m}));var r="articles/",c=r+"ARTICLES_SECTIONS_FETCH",a=r+"ARTICLES_SECTIONS_RECEIVED",o=r+"ARTICLES_SECTIONS_CLEAR",s=r+"ARTICLES_FETCH",u=r+"ARTICLES_RECEIVED",i=r+"ARTICLES_CLEAR",l=r+"TOP_STORIES_FETCH",f=r+"TOP_STORIES_RECEIVED",b=r+"TOP_STORIES_CLEAR",p=r+"MOST_POPULAR_FETCH",j=r+"MOST_POPULAR_RECEIVED",O=r+"MOST_POPULAR_CLEAR",d=r+"SEARCH_ARTICLES_FETCH",h=r+"SEARCH_ARTICLES_RECEIVED",m=r+"SEARCH_ARTICLES_CLEAR"}},[[118,3,4]]]);
//# sourceMappingURL=main.35c08401.chunk.js.map