(this.webpackJsonpnewspaper=this.webpackJsonpnewspaper||[]).push([[6],{135:function(e,t,n){"use strict";n.d(t,"a",(function(){return h}));var a=n(222),i=n(110),r=n(226),c=n(219),o=n(213),s=n(39),l=n(5),d=Object(o.a)({nav:{margin:"2rem -1rem 0",padding:".5rem 0"},link:{fontSize:".8rem",letterSpacing:".05rem",textDecoration:"none",textTransform:"uppercase",padding:"0.5rem 1rem",color:"inherit"}});function j(){var e=d();return Object(l.jsxs)("nav",{className:e.nav,children:[Object(l.jsx)(i.a,{className:e.link,to:s.a.home,children:"Home"}),Object(l.jsx)(i.a,{className:e.link,to:s.a.articles("all"),children:"Articles"})]})}var u=Object(o.a)((function(e){return{root:{padding:"30px 0"},logo:{fontSize:"2rem",textDecoration:"none",color:"inherit","&:hover":{color:e.palette.primary.main}}}}));function b(){var e=u();return Object(l.jsxs)("header",{className:e.root,children:[Object(l.jsxs)(a.a,{children:[Object(l.jsxs)(c.a,{container:!0,justifyContent:"space-between",children:[Object(l.jsx)(c.a,{item:!0,children:Object(l.jsx)(i.a,{to:s.a.home,className:e.logo,children:"NewsPaper"})}),Object(l.jsx)(c.a,{item:!0,children:"Some content"})]}),Object(l.jsx)(j,{})]}),Object(l.jsx)(r.a,{})]})}function m(){return Object(l.jsx)("footer",{children:Object(l.jsx)(a.a,{children:"footer"})})}function h(e){var t=e.children;return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(b,{}),Object(l.jsx)("main",{children:Object(l.jsx)(a.a,{children:t})}),Object(l.jsx)(m,{})]})}},175:function(e,t,n){},218:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return S}));var a=n(135),i=n(122),r=n(0),c=n(214),o=n(208),s=n(136),l=n(145),d=n(146),j=n(53),u=n(133),b=n.n(u),m=n(224),h=n(219),p=n(225),x=n(223),O=n(178),v=n.n(O),f=n(179),g=n.n(f),N=(n(174),n(24)),B=(n(175),n(213)),w=Object(B.a)((function(e){return{image:{width:"100%",height:"auto"},slideContent:{padding:40,height:"100%",backgroundColor:e.palette.background.light},imageWrap:{display:"flex"},caption:{fontSize:14,color:"#808080"},buttonWrap:{position:"absolute",top:0,left:"50%",width:"90vw",height:"100%",transform:"translateX(-50%)","& $sliderButton":{position:"absolute",top:"50%",transform:"translateY(-50%)"},"& $sliderButtonPrev":{left:-30},"& $sliderButtonNext":{right:-30}},sliderButton:{},sliderButtonPrev:{},sliderButtonNext:{},homeSliderContainer:{position:"relative"}}})),k=n(5);function y(){var e=w(),t=Object(r.useRef)(null),n=Object(r.useRef)(null),a=Object(j.b)(),s=Object(j.c)((function(e){return{most_popular:e.articles.most_popular}})).most_popular;return Object(r.useEffect)((function(){return a(Object(N.f)()),function(){return a(Object(N.e)())}}),[a]),Object(k.jsxs)("div",{className:e.homeSliderContainer,children:[s.list&&Object(k.jsx)(c.a,{spaceBetween:0,slidesPerView:1,navigation:{prevEl:t.current,nextEl:n.current},onBeforeInit:function(e){e.params.navigation.prevEl=t.current,e.params.navigation.nextEl=n.current},pagination:{clickable:!0},children:s.list.filter((function(e){return e.media.length})).map((function(t){var n,a,i,r,c,s,l,d,j,u;return Object(k.jsx)(o.a,{children:Object(k.jsxs)(h.a,{container:!0,children:[Object(k.jsx)(h.a,{item:!0,xs:6,children:Object(k.jsx)("div",{className:e.imageWrap,children:Object(k.jsx)("img",{className:e.image,src:null===(n=t.media[0])||void 0===n||null===(a=n["media-metadata"])||void 0===a||null===(i=a[2])||void 0===i?void 0:i.url,height:null===(r=t.media[0])||void 0===r||null===(c=r["media-metadata"])||void 0===c||null===(s=c[2])||void 0===s?void 0:s.height,width:null===(l=t.media[0])||void 0===l||null===(d=l["media-metadata"])||void 0===d||null===(j=d[2])||void 0===j?void 0:j.width,alt:null===t||void 0===t||null===(u=t.media[0])||void 0===u?void 0:u.caption})})}),Object(k.jsx)(h.a,{item:!0,xs:6,children:Object(k.jsxs)("div",{className:e.slideContent,children:[Object(k.jsx)(x.a,{gutterBottom:!0,component:"span",className:e.caption,children:t.section}),Object(k.jsx)(x.a,{gutterBottom:!0,variant:"h5",component:"h2",children:t.title}),Object(k.jsxs)(x.a,{gutterBottom:!0,variant:"body2",children:[t.abstract," ",Object(k.jsx)("a",{href:t.url,target:"_blank",children:"read more"})]}),Object(k.jsxs)(m.a,{mt:2,children:[Object(k.jsx)(x.a,{variant:"body1",children:t.byline}),Object(k.jsx)(x.a,{variant:"body2",component:b.a,format:"MMM D",children:t.published_date})]})]})})]})},t.id)}))}),Object(k.jsxs)("div",{className:e.buttonWrap,children:[Object(k.jsx)(p.a,{className:Object(i.a)(e.sliderButton,e.sliderButtonPrev),ref:t,children:Object(k.jsx)(v.a,{})}),Object(k.jsx)(p.a,{className:Object(i.a)(e.sliderButton,e.sliderButtonNext),ref:n,children:Object(k.jsx)(g.a,{})})]})]})}function S(){return Object(k.jsx)(a.a,{children:Object(k.jsx)(y,{})})}s.a.use([l.a,d.a])}}]);
//# sourceMappingURL=6.d09a3f88.chunk.js.map