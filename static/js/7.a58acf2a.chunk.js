(this.webpackJsonpnewspaper=this.webpackJsonpnewspaper||[]).push([[7],{148:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return o}));var a=n(0),i=n(175),c=n(10),r=function(){return new URLSearchParams(Object(c.g)().search)};function o(e){var t=Object(a.useRef)(null);return Object(i.isEqual)(t.current,e)||(t.current=e),t.current}},154:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return c}));var a=n(179),i=Object(a.a)((function(e){return e.articles.sections.list}),(function(e){return null===e||void 0===e?void 0:e.slice(0,7)})),c=Object(a.a)((function(e){return e.articles.most_popular}),(function(e){var t;return null===e||void 0===e||null===(t=e.list)||void 0===t?void 0:t.filter((function(e){return e.media.length}))}))},156:function(e,t,n){"use strict";n.d(t,"a",(function(){return D}));var a=n(312),i=n(144),c=n(57),r=n(305),o=n(141),s=n(30),l=n(178),j=n(301),d=n(311),u=n(176),b=n.n(u),h=n(10),m=n(148),p=n(4),x=Object(i.a)(j.a)({"& .MuiInput-root":{"&::before, &::after":{display:"none"}},"& .MuiInput-input":{padding:"10px 24px",borderRadius:30,border:"none",background:"#fff",borderBottom:"1px solid #ccc","&::placeholder":{opacity:.9,color:"#808080"}}}),O=Object(i.a)(d.a)((function(e){return{color:"#ffffff",padding:"10px 16px",borderRadius:30,backgroundColor:"#000000","&:hover":{background:e.theme.palette.primary.main}}})),f=Object(i.a)("form")({display:"grid",gridTemplateColumns:"1fr auto",gridGap:20}),g=function(){var e=Object(m.b)(),t=Object(h.f)(),n=Object(l.a)({initialValues:{search:""},onSubmit:function(n){var a=n.search;e.set("query",a),t.push({pathname:s.a.search,search:e.toString()})}}),a=n.handleSubmit,i=n.handleChange;return Object(p.jsxs)(f,{onSubmit:a,children:[Object(p.jsx)(x,{name:"search",variant:"standard",placeholder:"Search...",onChange:i}),Object(p.jsx)(O,{type:"submit",children:Object(p.jsx)(b.a,{})})]})},v=Object(o.a)({root:{padding:"30px 0"},logo:{fontSize:"2rem",textDecoration:"none",color:"inherit"}});function y(){var e=v();return Object(p.jsx)("header",{className:e.root,children:Object(p.jsx)(a.a,{children:Object(p.jsxs)(r.a,{container:!0,justifyContent:"space-between",children:[Object(p.jsx)(r.a,{item:!0,children:Object(p.jsx)(c.b,{to:s.a.home,className:e.logo,children:"NewsPaper"})}),Object(p.jsx)(r.a,{item:!0,children:Object(p.jsx)(g,{})})]})})})}var w=n(316),S=n(310);function k(){return Object(p.jsx)(w.a,{py:4,mt:4,backgroundColor:"#f8f9fa",component:"footer",children:Object(p.jsx)(a.a,{children:Object(p.jsx)(S.a,{align:"center",variant:"body2",children:"Copyright \xa92021 All rights reserved"})})})}var N=n(33),C=n(293),B=n(306),M=n(177),I=n.n(M),L=n(154),z=Object(i.a)("div")({position:"sticky",top:0,paddingTop:10,paddingBottom:10,backgroundColor:"#ffffff",borderBottom:"1px solid #efefef",zIndex:100}),_=Object(i.a)("nav")({display:"flex",alignItems:"center",margin:"0 -1rem"}),H=Object(i.a)(c.c)((function(e){return{fontSize:".8rem",letterSpacing:".05rem",textDecoration:"none",textTransform:"uppercase",padding:"0.5rem 1rem",color:"inherit","&.active":{color:e.theme.palette.primary.main}}}));function T(){var e=Object(N.c)(L.b);return Object(p.jsx)(z,{children:Object(p.jsx)(a.a,{children:e?Object(p.jsxs)(_,{children:[Object(p.jsx)(H,{to:s.a.articles("all"),children:"All"}),e.map((function(e){return Object(p.jsx)(H,{to:s.a.articles(e.section),children:e.display_name},e.section)})),Object(p.jsx)(d.a,{size:"small",component:c.b,to:s.a.categories,children:Object(p.jsx)(I.a,{})})]}):Object(p.jsxs)(C.a,{direction:"row",spacing:2,children:[Object(p.jsx)(B.a,{variant:"rectangular",width:100,height:20}),Object(p.jsx)(B.a,{variant:"rectangular",width:100,height:20}),Object(p.jsx)(B.a,{variant:"rectangular",width:100,height:20}),Object(p.jsx)(B.a,{variant:"rectangular",width:100,height:20})]})})})}var W=Object(i.a)("div")({padding:"30px 0"});function D(e){var t=e.children;return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(y,{}),Object(p.jsx)(T,{}),Object(p.jsx)(W,{children:Object(p.jsx)(a.a,{children:t})}),Object(p.jsx)(k,{})]})}},169:function(e,t,n){"use strict";n.d(t,"a",(function(){return m}));var a=n(57),i=n(307),c=n(305),r=n(310),o=n(167),s=n.n(o),l=n(141),j=n(190),d=n.n(j),u=n(30),b=n(4),h=Object(l.a)({articleItem:{"& + $articleItem":{marginTop:30},"& $sectionLink":{marginLeft:10}},imageWrap:{display:"flex",alignItems:"center",justifyContent:"center",width:210,minHeight:140,backgroundColor:"#f3f2f2","& .MuiSvgIcon-root":{width:100,height:100,color:"#808080"}},title:{display:"box",overflow:"hidden",maxHeight:"3.25em",lineClamp:2,whiteSpace:"normal",textOverflow:"ellipsis","-webkit-box-orient":"vertical"},description:{display:"box",overflow:"hidden",maxHeight:"4.5em",lineClamp:3,whiteSpace:"normal",textOverflow:"ellipsis","-webkit-box-orient":"vertical"},sectionLink:{marginLeft:10}});function m(e){var t=e.title,n=e.description,o=e.image,l=e.published_date,j=e.section,m=h();return Object(b.jsx)("div",{className:m.articleItem,children:Object(b.jsxs)(c.a,{container:!0,spacing:2,children:[Object(b.jsxs)(c.a,{item:!0,xs:8,md:!0,children:[Object(b.jsx)(r.a,{className:m.title,variant:"h6",gutterBottom:!0,children:t}),Object(b.jsx)(r.a,{variant:"body2",color:"text.secondary",className:m.description,gutterBottom:!0,children:n}),Object(b.jsxs)(r.a,{variant:"body2",color:"text.secondary",children:[Object(b.jsx)("small",{children:Object(b.jsx)(s.a,{format:"MMMM D, Y",children:l})}),j&&Object(b.jsx)(i.a,{clickable:!0,color:"secondary",size:"small",variant:"outlined",label:j,className:m.sectionLink,component:a.b,to:u.a.articles(j.toLowerCase())})]})]}),Object(b.jsx)(c.a,{item:!0,xs:4,md:"auto",children:Object(b.jsx)("div",{className:m.imageWrap,children:o?Object(b.jsx)("img",{src:o,alt:t,width:210}):Object(b.jsx)(d.a,{})})})]})})}},170:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n(310),i=n(141),c=n(4),r=Object(i.a)({headerWrap:{marginBottom:30},pageHeader:{textDecoration:"underline",textTransform:"capitalize"}});function o(e){var t=e.title,n=r();return Object(c.jsx)("div",{className:n.headerWrap,children:Object(c.jsx)(a.a,{className:n.pageHeader,variant:"h5",component:"h2",children:t})})}},171:function(e,t,n){"use strict";var a=n(58),i=n(0),c=n(10),r=n(299),o=n(293),s=n(148),l=n(141),j=n(4),d=Object(l.a)({paginationWrap:{display:"flex",justifyContent:"center",marginTop:20}}),u=function(e){var t=e.count,n=void 0===t?0:t,l=e.pathname,u=d(),b=Object(s.b)(),h=Object(c.f)(),m=Object(i.useState)(1),p=Object(a.a)(m,2),x=p[0],O=p[1];return Object(i.useEffect)((function(){var e=b.get("page");e&&O(+e)}),[b]),n>0&&Object(j.jsx)("div",{className:u.paginationWrap,children:Object(j.jsx)(o.a,{spacing:2,children:Object(j.jsx)(r.a,{count:n,page:x,shape:"rounded",hideNextButton:!0,hidePrevButton:!0,onChange:function(e,t){b.set("page",t),h.push({pathname:l,search:b.toString()}),O(t)}})})})};t.a=Object(i.memo)(u)},193:function(e,t,n){"use strict";var a=n(58),i=n(0),c=n(141),r=n(33),o=n(23),s=n(169),l=n(316),j=n(305),d=n(293),u=n(306),b=n(4);function h(){return Object(b.jsx)(l.a,{mb:2,children:Object(b.jsxs)(j.a,{container:!0,spacing:3,children:[Object(b.jsx)(j.a,{item:!0,xs:8,md:!0,children:Object(b.jsxs)(d.a,{spacing:1,children:[Object(b.jsx)(u.a,{variant:"text"}),Object(b.jsx)(u.a,{variant:"text",height:20}),Object(b.jsx)(u.a,{variant:"text",width:200})]})}),Object(b.jsx)(j.a,{item:!0,xs:4,md:"auto",children:Object(b.jsx)(u.a,{variant:"rectangular",width:190,height:107})})]})})}var m=function(e){var t=e.list,n=e.fetching;return t&&!n?t.map((function(e,t){var n,a;return Object(b.jsx)(s.a,{title:e.title,section:e.section,description:e.abstract,published_date:e.published_date,image:null===(n=e.multimedia)||void 0===n||null===(a=n[1])||void 0===a?void 0:a.url},t)})):[1,2,3].map((function(e){return Object(b.jsx)(h,{},e)}))},p=Object(i.memo)(m),x=n(170),O=n(148),f=n(30),g=n(171),v=Object(c.a)({wrap:{padding:"30px 0"}}),y=function(e){var t=e.type,n=e.pagination,c=void 0===n||n,s=Object(O.b)(),l=v(),j=Object(r.b)(),d=Object(i.useState)(0),u=Object(a.a)(d,2),h=u[0],m=u[1],y=Object(O.a)({offset:s.get("page"),limit:c?20:5}),w=Object(r.c)((function(e){var n=e.articles;return{fetching:e.common.fetching,articles:n.articles[t]}})),S=w.articles,k=w.fetching;return Object(i.useEffect)((function(){return m(Math.round((null===S||void 0===S?void 0:S.count)/20))}),[null===S||void 0===S?void 0:S.count]),Object(i.useEffect)((function(){return j(Object(o.b)({type:t,config:{params:y}})),function(){j(Object(o.a)())}}),[j,t,y]),Object(b.jsxs)("div",{className:l.wrap,children:[Object(b.jsx)(x.a,{title:t}),Object(b.jsx)(p,{fetching:k,list:null===S||void 0===S?void 0:S.list}),c&&Object(b.jsx)(g.a,{count:h,queryPage:y.offset,pathname:f.a.articles(t)})]})};t.a=Object(i.memo)(y)},309:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return p}));var a=n(305),i=n(156),c=n(0),r=n(33),o=n(310),s=n(141),l=n(167),j=n.n(l),d=n(23),u=n(4),b=Object(s.a)({stickyAside:{position:"sticky",top:0,display:"flex",flexDirection:"column",maxHeight:"95vh",paddingTop:"30px"},header:{marginBottom:"30px !important",fontSize:"20px !important"},asideList:{overflow:"auto",flexGrow:1,paddingRight:10},topStory:{marginBottom:25},number:{flex:"0 0 50px",fontSize:30,lineHeight:1.25,minWidth:40,color:"#ccc"}}),h=function(){var e,t=Object(r.b)(),n=b(),i=Object(r.c)((function(e){return e.articles.top_stories}));return Object(c.useEffect)((function(){return t(Object(d.m)({type:"home"})),function(){t(Object(d.l)())}}),[t]),Object(u.jsxs)("aside",{className:n.stickyAside,children:[Object(u.jsx)(o.a,{variant:"h6",className:n.header,component:"h4",children:"Popular Posts"}),Object(u.jsx)("div",{className:n.asideList,children:i&&(null===(e=i.list)||void 0===e?void 0:e.map((function(e,t){return Object(u.jsxs)(a.a,{container:!0,spacing:1,className:n.topStory,children:[Object(u.jsx)(a.a,{item:!0,xs:"auto",children:Object(u.jsx)("div",{className:n.number,children:"".concat(t<9?"0":"").concat(t+1)})}),Object(u.jsxs)(a.a,{item:!0,xs:!0,children:[Object(u.jsx)(o.a,{gutterBottom:!0,variant:"h6",component:"h4",children:e.title}),Object(u.jsxs)(a.a,{container:!0,spacing:1,children:[Object(u.jsx)(a.a,{item:!0,xs:8,children:Object(u.jsx)(o.a,{variant:"body1",children:e.byline})}),Object(u.jsx)(a.a,{item:!0,xs:4,children:Object(u.jsx)(o.a,{variant:"body2",component:j.a,format:"MMM D",children:e.published_date})})]})]})]},e.url)})))})]})},m=n(193);function p(e){var t=e.match.params.slug_name;return Object(u.jsx)(i.a,{children:Object(u.jsxs)(a.a,{container:!0,spacing:5,children:[Object(u.jsx)(a.a,{item:!0,xs:12,md:8,children:Object(u.jsx)(m.a,{type:t})}),Object(u.jsx)(a.a,{item:!0,xs:12,md:4,children:Object(u.jsx)(h,{})})]})})}}}]);
//# sourceMappingURL=7.a58acf2a.chunk.js.map