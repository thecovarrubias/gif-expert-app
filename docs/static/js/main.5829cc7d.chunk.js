(this["webpackJsonp04-gif-expert-app"]=this["webpackJsonp04-gif-expert-app"]||[]).push([[0],{19:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a(5),r=a.n(c),s=(a(16),a(2)),i=a(3),o=a(10),l=a(0),u=function(e){var t=e.setCategories,a=Object(n.useState)(""),c=Object(s.a)(a,2),r=c[0],i=c[1];return Object(l.jsxs)("form",{onSubmit:function(e){e.preventDefault(),r.trim().length>2&&(t((function(e){return[r].concat(Object(o.a)(e))})),i(""))},children:[Object(l.jsx)("label",{htmlFor:"GIF",className:"form-label",children:"\xa1Empieza aqu\xed!"}),Object(l.jsx)("input",{id:"GIF",className:"form-control",type:"text",placeholder:"B\xfasqueda de GIFs",value:r,onChange:function(e){i(e.target.value)}})]})},d=a(11),j=a(8),m=a.n(j),p=a(9),b=function(){var e=Object(p.a)(m.a.mark((function e(t){var a,n,c,r,s;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"rCun9WJciE0EClufBg6sI5RZjrQIpabO",10,a="https://api.giphy.com/v1/gifs/search?api_key=".concat("rCun9WJciE0EClufBg6sI5RZjrQIpabO","&q=").concat(encodeURI(t),"&limit=").concat(10),e.next=4,fetch(a);case 4:return n=e.sent,e.next=7,n.json();case 7:return c=e.sent,r=c.data,s=r.map((function(e){return{id:e.id,title:e.title,url:e.images.downsized_medium.url}})),e.abrupt("return",s);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=function(e){var t=e.title,a=e.url;return Object(l.jsxs)("div",{className:"card animate__animated animate__fadeIn",children:[Object(l.jsx)("img",{className:"card-img-top",src:a,alt:t}),Object(l.jsx)("div",{className:"card-footer text-muted",children:t})]})},x=function(e){var t=e.category,a=function(e){var t=Object(n.useState)({data:[],loading:!0}),a=Object(s.a)(t,2),c=a[0],r=a[1];return Object(n.useEffect)((function(){b(e).then((function(e){r({data:e,loading:!1})}))}),[e]),c}(t),c=a.data,r=a.loading;return Object(l.jsxs)("section",{className:"container",children:[Object(l.jsx)("h2",{className:"animate__animated animate__fadeIn lead mb-4",children:t.toUpperCase()}),r&&Object(l.jsx)("div",{className:"spinner-grow text-secondary animate__animated animate__flash",role:"status",children:Object(l.jsx)("span",{className:"sr-only",children:"Cargando..."})}),Object(l.jsx)("div",{className:"card-columns mb-5",children:c.map((function(e){return Object(l.jsx)(h,Object(d.a)({},e),e.id)}))})]})},f=function(e){var t=e.defaultCategories,a=void 0===t?[]:t,c=Object(n.useState)(a),r=Object(s.a)(c,2),o=r[0],d=r[1];return Object(l.jsxs)(i.a,{children:[Object(l.jsx)(i.d,{children:"GIF Expert App"}),Object(l.jsx)(i.c,{name:"description",content:"Una peque\xf1a aplicaci\xf3n hecha en React con Hooks para buscar y mostrar GIFs animados."}),Object(l.jsx)(i.c,{name:"author",content:"Jose Covarrubias"}),Object(l.jsx)(i.b,{rel:"icon",href:"data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>\ud83d\uddbc\ufe0f</text></svg>"}),Object(l.jsx)("main",{className:"jumbotron rounded-0",children:Object(l.jsxs)("div",{className:"container text-center",children:[Object(l.jsx)("h1",{className:"display-4",children:"GIF Expert App"}),Object(l.jsx)("p",{className:"lead",children:"Una peque\xf1a aplicaci\xf3n hecha en React con Hooks para buscar y mostrar GIFs animados."}),Object(l.jsx)("hr",{className:"my-4 bg-white"}),Object(l.jsx)(u,{setCategories:d})]})}),o.map((function(e){return Object(l.jsx)(x,{category:e},e)}))]})};r.a.render(Object(l.jsx)(f,{}),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.5829cc7d.chunk.js.map