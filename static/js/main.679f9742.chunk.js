(this["webpackJsonpchrisr-xyz"]=this["webpackJsonpchrisr-xyz"]||[]).push([[0],{48:function(t,e,n){},49:function(t,e,n){},66:function(t,e,n){"use strict";n.r(e);var c=n(1),i=n.n(c),r=n(25),a=n.n(r),o=(n(48),n(49),n(30)),s=n(31),l=n(4),h=Object(o.a)({sectionStyle:{width:"100%",minHeight:"100vh",background:"whitesmoke",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},name:{color:"cornflowerblue"},heroText:{fontSize:"calc(3vw + 3vh)","@media(max-width:600px)":{fontSize:"calc(5vw + 3vh)"}},subText:{fontSize:"calc(1.5vw + 1.5vh)","@media(max-width:600px)":{fontSize:"calc(3vw + 2vh)"}},content:{maxWidth:"80vw"},portrait:{borderRadius:"100%",width:"20vw",maxWidth:1e3,minWidth:300,"@media(max-width:600px)":{width:"100%",maxWidth:"unset"}}}),u=function(){var t=h(),e=["",Object(l.jsx)("img",{src:"https://github.com/mrmcpowned.png",className:t.portrait,alt:"Portrait of Chris"}),Object(l.jsxs)("h1",{className:t.heroText,children:["Hey there, I'm ",Object(l.jsx)("span",{className:t.name,children:"Chris"}),"!"]}),Object(l.jsx)("h2",{className:t.subText,children:"I write software and stuff."})],n=Object(s.useTransition)(e,{config:s.config.slow,keys:e.map((function(t,e){return e})),from:{y:100,opacity:0},enter:{y:0,opacity:1},trail:750});return Object(l.jsx)("div",{className:t.sectionStyle,children:Object(l.jsx)("div",{className:t.content,children:n((function(t,e){return Object(l.jsx)(s.animated.div,{style:t,children:e})}))})})},d=n(5),j=n(15),m=n(24),x=n(42),b=Object(o.a)({sectionStyle:{width:"100%",height:"100vh",background:"#ce0909",display:"flex",justifyContent:"center",alignItems:"center","& ul":{listStyle:"none",paddingInline:"unset"},"& ul li":{marginBottom:"calc(.5vw + .5vh)"}},link:{"&:hover":{textDecoration:"underline"},"&:visited":{color:"black"},textDecoration:"none",color:"whitesmoke",fontSize:"calc(1.5vw + 1.5vh)","@media(max-width:600px)":{fontSize:"calc(3vw + 2vh)"},fontWeight:"bold"}}),f=function(){var t=b(),e=Object(c.useState)(!1),n=Object(d.a)(e,2),i=n[0],r=n[1],a=i?[{text:"LinkedIn",link:"https://linkedin.com/in/chrisrxyz"},{text:"GitHub",link:"https://github.com/mrmcpowned"},{text:"Instagram",link:"https://instagram.com/chrisr.xyz"}]:[],o=Object(j.useTransition)(a,{keys:a.map((function(t){return t.text})),from:{opacity:0,y:100},enter:{y:0,opacity:1},trail:400,config:j.config.gentle});return Object(l.jsx)("div",{className:t.sectionStyle,children:Object(l.jsx)(x.a,{onChange:function(t){r(t),console.log(t)},children:Object(l.jsx)("ul",{children:o((function(e,n){return Object(l.jsx)(m.animated.li,{style:e,children:Object(l.jsx)("a",{href:n.link,className:t.link,target:"_blank",rel:"noreferrer",children:n.text})})}))})})})};var v=function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(u,{}),Object(l.jsx)(f,{})]})},O=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,67)).then((function(e){var n=e.getCLS,c=e.getFID,i=e.getFCP,r=e.getLCP,a=e.getTTFB;n(t),c(t),i(t),r(t),a(t)}))},g=n(29),p=n(2),y=n(43),w=n.n(y);var k=function(){var t,e=Object(g.b)(),n=Object(d.a)(e,1)[0],i=Object(c.useState)(null!==(t=n.get("data"))&&void 0!==t?t:""),r=Object(d.a)(i,2),a=r[0],o=r[1],s=Object(c.useState)(!1),h=Object(d.a)(s,2),u=h[0],j=h[1],m=n.get("code");return Object(c.useEffect)((function(){m&&!u&&fetch("https://chrisr-xyz-gatekeeper.herokuapp.com/authenticate/".concat(m)).then((function(t){return t.json()})).then((function(t){return function(t){if(t){var e="Bearer ".concat(t);o(e)}}(null===t||void 0===t?void 0:t.token)})).catch((function(t){return console.log(t)})).finally((function(){return j(!0)}))})),a&&Object(l.jsx)(w.a,{value:a})};a.a.render(Object(l.jsx)(i.a.StrictMode,{children:Object(l.jsx)(g.a,{children:Object(l.jsxs)(p.c,{children:[Object(l.jsx)(p.a,{path:"/",element:Object(l.jsx)(v,{})}),Object(l.jsx)(p.a,{path:"/qrcode",element:Object(l.jsx)(k,{})})]})})}),document.getElementById("root")),O()}},[[66,1,2]]]);
//# sourceMappingURL=main.679f9742.chunk.js.map