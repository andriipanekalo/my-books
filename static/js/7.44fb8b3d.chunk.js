(this.webpackJsonpnewspaper=this.webpackJsonpnewspaper||[]).push([[7],{156:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return o}));var i=n(0),c=n(185),a=n(10),r=function(){return new URLSearchParams(Object(a.g)().search)};function o(e){var t=Object(i.useRef)(null);return Object(c.isEqual)(t.current,e)||(t.current=e),t.current}},159:function(e,t,n){"use strict";n.d(t,"d",(function(){return c})),n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return r})),n.d(t,"c",(function(){return o}));var i=n(194),c=Object(i.a)((function(e){return e.articles.sections.list}),(function(e){return null===e||void 0===e?void 0:e.slice(0,7)})),a=Object(i.a)((function(e){return e.articles.most_popular.list}),(function(e){return null===e||void 0===e?void 0:e.filter((function(e){return e.media.length})).slice(0,8)})),r=Object(i.a)((function(e){return e.articles.movie_reviews.list}),(function(e){return null===e||void 0===e?void 0:e.slice(0,4)})),o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:10;return Object(i.a)((function(e){return e.articles.top_stories.list}),(function(t){return null===t||void 0===t?void 0:t.slice(0,e)}))}},164:function(e,t,n){"use strict";var i=n(4),c=n(193),a=n(356),r=n(144),o=n(5),s=["title"],l=Object(r.a)({headerWrap:{marginBottom:30},pageHeader:{textDecoration:"underline",textTransform:"capitalize"}});t.a=function(e){var t=e.title,n=Object(c.a)(e,s),r=l();return Object(o.jsx)("div",{className:r.headerWrap,children:Object(o.jsx)(a.a,Object(i.a)(Object(i.a)({className:r.pageHeader,variant:"h5",component:"h2"},n),{},{children:t}))})}},168:function(e,t,n){"use strict";n.d(t,"a",(function(){return D}));var i=n(357),c=n(150),a=n(60),r=n(351),o=n(144),s=n(32),l=n(192),j=n(347),d=n(362),u=n(187),b=n.n(u),h=n(10),m=n(156),p=n(5),O=Object(c.a)(j.a)({"& .MuiInput-root":{"&::before, &::after":{display:"none"}},"& .MuiInput-input":{padding:"13px 20px",borderRadius:30,border:"none",background:"#fff",borderBottom:"1px solid #ccc","&::placeholder":{opacity:.9,color:"#808080"}}}),f=Object(c.a)(d.a)((function(e){return{color:"#ffffff",padding:"12px 20px",borderRadius:30,backgroundColor:"#000000","&:hover":{background:e.theme.palette.primary.main}}})),x=Object(c.a)("form")({display:"grid",gridTemplateColumns:"1fr auto",gridGap:10}),g=function(){var e=Object(m.b)(),t=Object(h.f)(),n=Object(l.a)({initialValues:{search:""},onSubmit:function(n){var i=n.search;e.set("query",i),t.push({pathname:s.a.search,search:e.toString()})}}),i=n.handleSubmit,c=n.handleChange;return Object(p.jsxs)(x,{onSubmit:i,children:[Object(p.jsx)(O,{name:"search",variant:"standard",placeholder:"Search...",onChange:c}),Object(p.jsx)(f,{type:"submit",children:Object(p.jsx)(b.a,{})})]})},v=Object(o.a)({root:{padding:"30px 0"},logo:{fontSize:"2rem",lineHeight:1.75,textDecoration:"none",color:"inherit"}});function y(){var e=v();return Object(p.jsx)("header",{className:e.root,children:Object(p.jsx)(i.a,{children:Object(p.jsxs)(r.a,{container:!0,justifyContent:"space-between",children:[Object(p.jsx)(r.a,{item:!0,children:Object(p.jsx)(a.b,{to:s.a.home,className:e.logo,children:"NewsPaper"})}),Object(p.jsx)(r.a,{item:!0,children:Object(p.jsx)(g,{})})]})})})}var w=n(363),k=n(356);function S(){return Object(p.jsx)(w.a,{py:4,backgroundColor:"#f8f9fa",component:"footer",children:Object(p.jsx)(i.a,{children:Object(p.jsx)(k.a,{align:"center",variant:"body2",children:"Copyright \xa92021 All rights reserved"})})})}var N=n(35),C=n(332),M=n(352),B=n(188),I=n.n(B),L=n(159),_=Object(c.a)("div")({position:"sticky",top:0,paddingTop:10,paddingBottom:10,backgroundColor:"#ffffff",borderBottom:"1px solid #efefef",zIndex:100}),H=Object(c.a)("nav")({display:"flex",alignItems:"center",margin:"0 -1rem"}),z=Object(c.a)(a.c)((function(e){return{fontSize:".8rem",letterSpacing:".05rem",textDecoration:"none",textTransform:"uppercase",padding:"0.5rem 1rem",color:"inherit","&.active":{color:e.theme.palette.primary.main}}}));function T(){var e=Object(N.c)(L.d);return Object(p.jsx)(_,{children:Object(p.jsx)(i.a,{children:e?Object(p.jsxs)(H,{children:[Object(p.jsx)(z,{to:s.a.articles("all"),children:"All"}),e.map((function(e){return Object(p.jsx)(z,{to:s.a.articles(e.section),children:e.display_name},e.section)})),Object(p.jsx)(d.a,{size:"small",component:a.b,to:s.a.categories,children:Object(p.jsx)(I.a,{})})]}):Object(p.jsxs)(C.a,{direction:"row",spacing:2,children:[Object(p.jsx)(M.a,{variant:"rectangular",width:100,height:20}),Object(p.jsx)(M.a,{variant:"rectangular",width:100,height:20}),Object(p.jsx)(M.a,{variant:"rectangular",width:100,height:20}),Object(p.jsx)(M.a,{variant:"rectangular",width:100,height:20})]})})})}var W=Object(c.a)("main")({padding:"30px 0",flexGrow:1});function D(e){var t=e.children;return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(y,{}),Object(p.jsx)(T,{}),Object(p.jsx)(W,{children:Object(p.jsx)(i.a,{children:t})}),Object(p.jsx)(S,{})]})}},181:function(e,t,n){"use strict";n.d(t,"a",(function(){return m}));var i=n(60),c=n(353),a=n(351),r=n(356),o=n(167),s=n.n(o),l=n(144),j=n(204),d=n.n(j),u=n(32),b=n(5),h=Object(l.a)({articleItem:{"& + $articleItem":{marginTop:30},"& $sectionLink":{marginLeft:10}},imageWrap:{display:"flex",alignItems:"center",justifyContent:"center",width:210,minHeight:140,backgroundColor:"#f3f2f2","& .MuiSvgIcon-root":{width:100,height:100,color:"#808080"}},title:{display:"box",overflow:"hidden",maxHeight:"3.25em",lineClamp:2,whiteSpace:"normal",textOverflow:"ellipsis","-webkit-box-orient":"vertical"},description:{display:"box",overflow:"hidden",maxHeight:"4.5em",lineClamp:3,whiteSpace:"normal",textOverflow:"ellipsis","-webkit-box-orient":"vertical"},sectionLink:{marginLeft:10}});function m(e){var t=e.title,n=e.description,o=e.image,l=e.published_date,j=e.section,m=h();return Object(b.jsx)("div",{className:m.articleItem,children:Object(b.jsxs)(a.a,{container:!0,spacing:2,children:[Object(b.jsxs)(a.a,{item:!0,xs:8,md:!0,children:[Object(b.jsx)(r.a,{className:m.title,variant:"h6",gutterBottom:!0,children:t}),Object(b.jsx)(r.a,{variant:"body2",color:"text.secondary",className:m.description,gutterBottom:!0,children:n}),Object(b.jsxs)(r.a,{variant:"body2",color:"text.secondary",children:[Object(b.jsx)("small",{children:Object(b.jsx)(s.a,{format:"MMMM D, Y",children:l})}),j&&Object(b.jsx)(c.a,{clickable:!0,color:"secondary",size:"small",variant:"outlined",label:j,className:m.sectionLink,component:i.b,to:u.a.articles(j.toLowerCase())})]})]}),Object(b.jsx)(a.a,{item:!0,xs:4,md:"auto",children:Object(b.jsx)("div",{className:m.imageWrap,children:o?Object(b.jsx)("img",{src:o,alt:t,width:210}):Object(b.jsx)(d.a,{})})})]})})}},182:function(e,t,n){"use strict";var i=n(59),c=n(0),a=n(10),r=n(344),o=n(332),s=n(156),l=n(144),j=n(5),d=Object(l.a)({paginationWrap:{display:"flex",justifyContent:"center",marginTop:20}}),u=function(e){var t=e.count,n=void 0===t?0:t,l=e.pathname,u=d(),b=Object(s.b)(),h=Object(a.f)(),m=Object(c.useState)(1),p=Object(i.a)(m,2),O=p[0],f=p[1];return Object(c.useEffect)((function(){var e=b.get("page");e&&f(+e)}),[b]),n>0&&Object(j.jsx)("div",{className:u.paginationWrap,children:Object(j.jsx)(o.a,{spacing:2,children:Object(j.jsx)(r.a,{count:n,page:O,shape:"rounded",hideNextButton:!0,hidePrevButton:!0,onChange:function(e,t){b.set("page",t),h.push({pathname:l,search:b.toString()}),f(t)}})})})};t.a=Object(c.memo)(u)},205:function(e,t,n){"use strict";var i=n(0),c=n(167),a=n.n(c),r=n(35),o=n(351),s=n(356),l=n(144),j=n(22),d=n(159),u=n(164),b=n(5),h=Object(l.a)({stickyAside:{position:"sticky",top:0,display:"flex",flexDirection:"column",maxHeight:"95vh",paddingTop:"30px"},asideList:{overflow:"auto",flexGrow:1,paddingRight:10},topStory:{marginBottom:25},number:{flex:"0 0 50px",fontSize:30,lineHeight:1.25,minWidth:40,color:"#ccc"}});t.a=function(e){var t=e.count,n=Object(r.b)(),c=h(),l=Object(r.c)(Object(d.c)(t));return Object(i.useEffect)((function(){return n(Object(j.p)({type:"home"})),function(){n(Object(j.o)())}}),[]),Object(b.jsxs)("aside",{className:c.stickyAside,children:[Object(b.jsx)(u.a,{title:"Popular Posts"}),Object(b.jsx)("div",{className:c.asideList,children:null===l||void 0===l?void 0:l.map((function(e,t){return Object(b.jsxs)(o.a,{container:!0,spacing:1,className:c.topStory,children:[Object(b.jsx)(o.a,{item:!0,xs:"auto",children:Object(b.jsx)("div",{className:c.number,children:"".concat(t<9?"0":"").concat(t+1)})}),Object(b.jsxs)(o.a,{item:!0,xs:!0,children:[Object(b.jsx)(s.a,{gutterBottom:!0,variant:"h6",component:"h4",children:e.title}),Object(b.jsxs)(o.a,{container:!0,spacing:1,children:[Object(b.jsx)(o.a,{item:!0,xs:8,children:Object(b.jsx)(s.a,{variant:"body1",children:e.byline})}),Object(b.jsx)(o.a,{item:!0,xs:4,children:Object(b.jsx)(s.a,{variant:"body2",component:a.a,format:"MMM D",children:e.published_date})})]})]})]},e.url)}))})]})}},212:function(e,t,n){"use strict";var i=n(59),c=n(0),a=n(144),r=n(35),o=n(22),s=n(181),l=n(363),j=n(351),d=n(332),u=n(352),b=n(5);function h(){return Object(b.jsx)(l.a,{mb:2,children:Object(b.jsxs)(j.a,{container:!0,spacing:3,children:[Object(b.jsx)(j.a,{item:!0,xs:8,md:!0,children:Object(b.jsxs)(d.a,{spacing:1,children:[Object(b.jsx)(u.a,{variant:"text"}),Object(b.jsx)(u.a,{variant:"text",height:20}),Object(b.jsx)(u.a,{variant:"text",width:200})]})}),Object(b.jsx)(j.a,{item:!0,xs:4,md:"auto",children:Object(b.jsx)(u.a,{variant:"rectangular",width:190,height:107})})]})})}var m=function(e){var t=e.list,n=e.fetching;return t&&!n?t.map((function(e,t){var n,i;return Object(b.jsx)(s.a,{title:e.title,section:e.section,description:e.abstract,published_date:e.published_date,image:null===(n=e.multimedia)||void 0===n||null===(i=n[1])||void 0===i?void 0:i.url},t)})):[1,2,3].map((function(e){return Object(b.jsx)(h,{},e)}))},p=Object(c.memo)(m),O=n(164),f=n(156),x=n(32),g=n(182),v=Object(a.a)({wrap:{padding:"30px 0"}}),y=function(e){var t=e.type,n=e.pagination,a=void 0===n||n,s=Object(f.b)(),l=v(),j=Object(r.b)(),d=Object(c.useState)(0),u=Object(i.a)(d,2),h=u[0],m=u[1],y=Object(f.a)({offset:s.get("page"),limit:a?20:5}),w=Object(r.c)((function(e){var n=e.articles;return{fetching:e.common.fetching,articles:n.articles[t]}})),k=w.articles,S=w.fetching;return Object(c.useEffect)((function(){return m(Math.round((null===k||void 0===k?void 0:k.count)/20))}),[null===k||void 0===k?void 0:k.count]),Object(c.useEffect)((function(){return j(Object(o.b)({type:t,config:{params:y}})),function(){j(Object(o.a)())}}),[j,t,y]),Object(b.jsxs)("div",{className:l.wrap,children:[Object(b.jsx)(O.a,{title:t}),Object(b.jsx)(p,{fetching:S,list:null===k||void 0===k?void 0:k.list}),a&&Object(b.jsx)(g.a,{count:h,queryPage:y.offset,pathname:x.a.articles(t)})]})};t.a=Object(c.memo)(y)},336:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return s}));var i=n(351),c=n(168),a=n(205),r=n(212),o=n(5);function s(e){var t=e.match.params.slug_name;return Object(o.jsx)(c.a,{children:Object(o.jsxs)(i.a,{container:!0,spacing:5,children:[Object(o.jsx)(i.a,{item:!0,xs:12,md:8,children:Object(o.jsx)(r.a,{type:t})}),Object(o.jsx)(i.a,{item:!0,xs:12,md:4,children:Object(o.jsx)(a.a,{})})]})})}}}]);
//# sourceMappingURL=7.44fb8b3d.chunk.js.map