(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{1118:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(6321)}])},6691:function(e,t){"use strict";var n,r,i,o;Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{ACTION_FAST_REFRESH:function(){return f},ACTION_NAVIGATE:function(){return s},ACTION_PREFETCH:function(){return u},ACTION_REFRESH:function(){return l},ACTION_RESTORE:function(){return a},ACTION_SERVER_ACTION:function(){return d},ACTION_SERVER_PATCH:function(){return c},PrefetchCacheEntryStatus:function(){return r},PrefetchKind:function(){return n},isThenable:function(){return h}});let l="refresh",s="navigate",a="restore",c="server-patch",u="prefetch",f="fast-refresh",d="server-action";function h(e){return e&&("object"==typeof e||"function"==typeof e)&&"function"==typeof e.then}(i=n||(n={})).AUTO="auto",i.FULL="full",i.TEMPORARY="temporary",(o=r||(r={})).fresh="fresh",o.reusable="reusable",o.expired="expired",o.stale="stale",("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},4318:function(e,t,n){"use strict";function r(e,t,n,r){return!1}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getDomainLocale",{enumerable:!0,get:function(){return r}}),n(8364),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9577:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return b}});let r=n(8754),i=n(5893),o=r._(n(7294)),l=n(1401),s=n(2045),a=n(7420),c=n(7201),u=n(1443),f=n(9953),d=n(5320),h=n(2905),p=n(4318),x=n(953),j=n(6691),g=new Set;function m(e,t,n,r,i,o){if(o||(0,s.isLocalURL)(t)){if(!r.bypassPrefetchedCheck){let i=t+"%"+n+"%"+(void 0!==r.locale?r.locale:"locale"in e?e.locale:void 0);if(g.has(i))return;g.add(i)}(async()=>o?e.prefetch(t,i):e.prefetch(t,n,r))().catch(e=>{})}}function v(e){return"string"==typeof e?e:(0,a.formatUrl)(e)}let b=o.default.forwardRef(function(e,t){let n,r;let{href:a,as:g,children:b,prefetch:y=null,passHref:w,replace:_,shallow:k,scroll:C,locale:P,onClick:N,onMouseEnter:A,onTouchStart:O,legacyBehavior:E=!1,...M}=e;n=b,E&&("string"==typeof n||"number"==typeof n)&&(n=(0,i.jsx)("a",{children:n}));let T=o.default.useContext(f.RouterContext),S=o.default.useContext(d.AppRouterContext),L=null!=T?T:S,R=!T,I=!1!==y,H=null===y?j.PrefetchKind.AUTO:j.PrefetchKind.FULL,{href:U,as:B}=o.default.useMemo(()=>{if(!T){let e=v(a);return{href:e,as:g?v(g):e}}let[e,t]=(0,l.resolveHref)(T,a,!0);return{href:e,as:g?(0,l.resolveHref)(T,g):t||e}},[T,a,g]),Z=o.default.useRef(U),D=o.default.useRef(B);E&&(r=o.default.Children.only(n));let F=E?r&&"object"==typeof r&&r.ref:t,[z,G,K]=(0,h.useIntersection)({rootMargin:"200px"}),V=o.default.useCallback(e=>{(D.current!==B||Z.current!==U)&&(K(),D.current=B,Z.current=U),z(e),F&&("function"==typeof F?F(e):"object"==typeof F&&(F.current=e))},[B,F,U,K,z]);o.default.useEffect(()=>{L&&G&&I&&m(L,U,B,{locale:P},{kind:H},R)},[B,U,G,P,I,null==T?void 0:T.locale,L,R,H]);let q={ref:V,onClick(e){E||"function"!=typeof N||N(e),E&&r.props&&"function"==typeof r.props.onClick&&r.props.onClick(e),L&&!e.defaultPrevented&&function(e,t,n,r,i,l,a,c,u){let{nodeName:f}=e.currentTarget;if("A"===f.toUpperCase()&&(function(e){let t=e.currentTarget.getAttribute("target");return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!u&&!(0,s.isLocalURL)(n)))return;e.preventDefault();let d=()=>{let e=null==a||a;"beforePopState"in t?t[i?"replace":"push"](n,r,{shallow:l,locale:c,scroll:e}):t[i?"replace":"push"](r||n,{scroll:e})};u?o.default.startTransition(d):d()}(e,L,U,B,_,k,C,P,R)},onMouseEnter(e){E||"function"!=typeof A||A(e),E&&r.props&&"function"==typeof r.props.onMouseEnter&&r.props.onMouseEnter(e),L&&(I||!R)&&m(L,U,B,{locale:P,priority:!0,bypassPrefetchedCheck:!0},{kind:H},R)},onTouchStart:function(e){E||"function"!=typeof O||O(e),E&&r.props&&"function"==typeof r.props.onTouchStart&&r.props.onTouchStart(e),L&&(I||!R)&&m(L,U,B,{locale:P,priority:!0,bypassPrefetchedCheck:!0},{kind:H},R)}};if((0,c.isAbsoluteUrl)(B))q.href=B;else if(!E||w||"a"===r.type&&!("href"in r.props)){let e=void 0!==P?P:null==T?void 0:T.locale,t=(null==T?void 0:T.isLocaleDomain)&&(0,p.getDomainLocale)(B,e,null==T?void 0:T.locales,null==T?void 0:T.domainLocales);q.href=t||(0,x.addBasePath)((0,u.addLocale)(B,e,null==T?void 0:T.defaultLocale))}return E?o.default.cloneElement(r,q):(0,i.jsx)("a",{...M,...q,children:n})});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2905:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useIntersection",{enumerable:!0,get:function(){return a}});let r=n(7294),i=n(3815),o="function"==typeof IntersectionObserver,l=new Map,s=[];function a(e){let{rootRef:t,rootMargin:n,disabled:a}=e,c=a||!o,[u,f]=(0,r.useState)(!1),d=(0,r.useRef)(null),h=(0,r.useCallback)(e=>{d.current=e},[]);return(0,r.useEffect)(()=>{if(o){if(c||u)return;let e=d.current;if(e&&e.tagName)return function(e,t,n){let{id:r,observer:i,elements:o}=function(e){let t;let n={root:e.root||null,margin:e.rootMargin||""},r=s.find(e=>e.root===n.root&&e.margin===n.margin);if(r&&(t=l.get(r)))return t;let i=new Map;return t={id:n,observer:new IntersectionObserver(e=>{e.forEach(e=>{let t=i.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)})},e),elements:i},s.push(n),l.set(n,t),t}(n);return o.set(e,t),i.observe(e),function(){if(o.delete(e),i.unobserve(e),0===o.size){i.disconnect(),l.delete(r);let e=s.findIndex(e=>e.root===r.root&&e.margin===r.margin);e>-1&&s.splice(e,1)}}}(e,e=>e&&f(e),{root:null==t?void 0:t.current,rootMargin:n})}else if(!u){let e=(0,i.requestIdleCallback)(()=>f(!0));return()=>(0,i.cancelIdleCallback)(e)}},[c,n,t,u,d.current]),[h,u,(0,r.useCallback)(()=>{f(!1)},[])]}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5712:function(){},9672:function(){},881:function(){},4588:function(){},7381:function(){},9008:function(e,t,n){e.exports=n(7828)},1664:function(e,t,n){e.exports=n(9577)},5213:function(e,t,n){"use strict";n.d(t,{_y:function(){return o},zt:function(){return i}});let r=(0,n(7294).createContext)([{},()=>{}]),i=r.Provider;r.Consumer;let o=r},2920:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var r=JSON.parse('{"author":{"name":"Brian Holt","company":"Neon"},"title":"Complete Intro to SQLite","subtitle":"A quick and complete intro to building on SQLite","frontendMastersLink":"https://frontendmasters.com/workshops/sqlite/","social":{"linkedin":"btholt","github":"btholt","twitter":"holtbt"},"description":"Learn how to build on SQLite with this quick and complete course with Brian Holt. SQLite is a powerful database that is easy to get started with and is a great tool for building both small and large applications.","keywords":["SQL","SQLite","Databases","Web Development","Node.js","JavaScript","Brian Holt","Frontend Masters"],"csvPath":"./out/lessons.csv"}');let i={author:{name:"An Author",company:"An Author's Company"},title:"A Superb Course",subtitle:"That Teaches Nice Things",frontendMastersLink:"",description:"A nice course for nice people.",keywords:["a nice course","for people","to learn","nice things"],social:{linkedin:"btholt",github:"btholt",twitter:"holtbt"},productionBaseUrl:"/"};function o(){return Object.assign({},i,r)}},6321:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return m}});var r=n(5893),i=n(9008);n(5712),n(9672),n(7381),n(4588),n(881);var o=n(7294);function l(){return(0,r.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",width:"32",height:"32",viewBox:"0 0 32 32",children:[(0,r.jsx)("defs",{children:(0,r.jsx)("clipPath",{id:"clip-github-social",children:(0,r.jsx)("rect",{width:"32",height:"32"})})}),(0,r.jsx)("g",{id:"github-social",clipPath:"url(#clip-github-social)",children:(0,r.jsxs)("g",{id:"Group_272","data-name":"Group 272",transform:"translate(13522.5 -6994)",children:[(0,r.jsx)("path",{id:"Subtraction_33","data-name":"Subtraction 33",d:"M-24967.5,8041a15.9,15.9,0,0,1-11.312-4.688A15.893,15.893,0,0,1-24983.5,8025a15.893,15.893,0,0,1,4.689-11.315A15.894,15.894,0,0,1-24967.5,8009a15.894,15.894,0,0,1,11.313,4.686A15.893,15.893,0,0,1-24951.5,8025a15.893,15.893,0,0,1-4.689,11.313A15.9,15.9,0,0,1-24967.5,8041Zm-3.781-4.571h0v3.918h7.895v-6.665a1.836,1.836,0,0,0-1.2-1.718c5.1-.617,7.467-2.975,7.467-7.424a7.176,7.176,0,0,0-1.637-4.728,6.74,6.74,0,0,0,.275-1.812,4.34,4.34,0,0,0-.52-2.452.574.574,0,0,0-.359-.1c-1.061,0-3.465,1.411-3.936,1.694a16.644,16.644,0,0,0-4.2-.489,16.379,16.379,0,0,0-3.969.445c-.846-.5-2.91-1.649-3.859-1.649a.566.566,0,0,0-.354.095,4.3,4.3,0,0,0-.521,2.452,6.7,6.7,0,0,0,.244,1.718,7.346,7.346,0,0,0-1.6,4.822,7.263,7.263,0,0,0,1.533,4.985c1.193,1.359,3.115,2.165,5.871,2.464a1.826,1.826,0,0,0-1.129,1.693v.5h0l-.006,0a7.121,7.121,0,0,1-2.033.363,2.608,2.608,0,0,1-.965-.158,4.438,4.438,0,0,1-1.836-1.881,2.361,2.361,0,0,0-1.248-1.091,3.472,3.472,0,0,0-1.217-.3.584.584,0,0,0-.545.224.282.282,0,0,0,.027.367,1.875,1.875,0,0,0,.447.307,4.732,4.732,0,0,1,.561.355,10.726,10.726,0,0,1,1.682,2.755c.043.092.078.163.105.217a3.876,3.876,0,0,0,2.42,1.185,6.036,6.036,0,0,0,.607.025c.875,0,1.988-.124,2-.125Z",transform:"translate(11461 -1015)",fill:"var(--footer-icons)"}),(0,r.jsxs)("g",{id:"Ellipse_670","data-name":"Ellipse 670",transform:"translate(-13522.5 6994)",fill:"none",stroke:"var(--footer-icons)",strokeWidth:"1",children:[(0,r.jsx)("circle",{cx:"16",cy:"16",r:"16",stroke:"none"}),(0,r.jsx)("circle",{cx:"16",cy:"16",r:"15.5",fill:"none"})]})]})})]})}function s(){return(0,r.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",width:"40",height:"32",viewBox:"0 0 40 32",children:[(0,r.jsx)("defs",{children:(0,r.jsx)("clipPath",{id:"clip-twitter-social",children:(0,r.jsx)("rect",{width:"40",height:"32"})})}),(0,r.jsx)("g",{id:"twitter-social",clipPath:"url(#clip-twitter-social)",children:(0,r.jsx)("g",{id:"Group_269","data-name":"Group 269",transform:"translate(-230.23 -1140.849)",children:(0,r.jsx)("path",{id:"Path_419","data-name":"Path 419",d:"M266.12,1148.861v1.035a23.092,23.092,0,0,1-1.507,8.1,24.08,24.08,0,0,1-4.475,7.381,22.175,22.175,0,0,1-7.306,5.4,24.129,24.129,0,0,1-10,2.07,23.7,23.7,0,0,1-6.667-.945,22.83,22.83,0,0,1-5.936-2.655q.959.091,1.963.09a16.518,16.518,0,0,0,5.434-.9,17.111,17.111,0,0,0,4.749-2.52,8.275,8.275,0,0,1-4.749-1.643,7.8,7.8,0,0,1-2.877-3.983,8.268,8.268,0,0,0,1.507.135,8.58,8.58,0,0,0,2.146-.27,8.16,8.16,0,0,1-5.685-4.344,8.326,8.326,0,0,1-.89-3.578v-.135a7.775,7.775,0,0,0,3.744,1.035,8.183,8.183,0,0,1-2.671-2.9,7.817,7.817,0,0,1-.982-3.848,7.948,7.948,0,0,1,1.1-4.05,23.53,23.53,0,0,0,16.895,8.46,9.221,9.221,0,0,1-.183-1.845,7.787,7.787,0,0,1,1.1-4.05,8.216,8.216,0,0,1,2.991-2.948,7.991,7.991,0,0,1,4.087-1.1,8.184,8.184,0,0,1,5.982,2.566,16.087,16.087,0,0,0,5.205-1.98,7.784,7.784,0,0,1-1.393,2.588,8.4,8.4,0,0,1-2.215,1.913,16.856,16.856,0,0,0,4.749-1.305A17.032,17.032,0,0,1,266.12,1148.861Z",fill:"var(--footer-icons)"})})})]})}function a(){return(0,r.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",width:"32",height:"32",viewBox:"0 0 32 32",children:[(0,r.jsx)("defs",{children:(0,r.jsx)("clipPath",{id:"clip-linkedin-social",children:(0,r.jsx)("rect",{width:"32",height:"32"})})}),(0,r.jsx)("g",{id:"linkedin-social",clipPath:"url(#clip-linkedin-social)",children:(0,r.jsx)("g",{id:"Group_270","data-name":"Group 270",transform:"translate(-86.349 -633.073)",children:(0,r.jsx)("path",{id:"Path_375","data-name":"Path 375",d:"M115.789,633.073a2.324,2.324,0,0,1,1.682.676,2.194,2.194,0,0,1,.695,1.627V662.8a2.131,2.131,0,0,1-.695,1.609,2.314,2.314,0,0,1-1.646.659H88.69a2.307,2.307,0,0,1-1.646-.659,2.128,2.128,0,0,1-.695-1.609V635.376a2.19,2.19,0,0,1,.695-1.627,2.322,2.322,0,0,1,1.682-.676h27.063Zm-20.224,9.672a2.561,2.561,0,0,0,0-3.584,2.658,2.658,0,0,0-1.938-.712,2.724,2.724,0,0,0-1.957.712,2.371,2.371,0,0,0-.75,1.792,2.4,2.4,0,0,0,.731,1.792,2.605,2.605,0,0,0,1.9.713h.037A2.7,2.7,0,0,0,95.565,642.745ZM96,645.434H91.213V659.88H96Zm17.3,6.144a7.007,7.007,0,0,0-1.573-4.9,5.68,5.68,0,0,0-6.839-.769,5.663,5.663,0,0,0-1.426,1.573v-2.048H98.674q.036.841,0,7.717v6.728h4.791V651.8a3.592,3.592,0,0,1,.146-1.17,2.913,2.913,0,0,1,.878-1.206,2.429,2.429,0,0,1,1.609-.549,2.108,2.108,0,0,1,1.865.914,4.265,4.265,0,0,1,.549,2.341v7.752H113.3Z",fill:"var(--footer-icons)"})})})]})}function c(e){let{twitter:t,linkedin:n,github:i}=e;return(0,r.jsx)("footer",{className:"footer",children:(0,r.jsxs)("ul",{className:"socials",children:[t?(0,r.jsx)("li",{className:"social",children:(0,r.jsx)("a",{href:"https://twitter.com/".concat(t),children:(0,r.jsx)(s,{})})}):null,i?(0,r.jsx)("li",{className:"social",children:(0,r.jsx)("a",{href:"https://github.com/".concat(i),children:(0,r.jsx)(l,{})})}):null,n?(0,r.jsx)("li",{className:"social",children:(0,r.jsx)("a",{href:"https://linkedin.com/in/".concat(n),children:(0,r.jsx)(a,{})})}):null,(0,r.jsx)("li",{className:"social",children:(0,r.jsxs)("div",{className:"terms",children:[(0,r.jsx)("p",{children:"Content Licensed Under CC-BY-NC-4.0"}),(0,r.jsx)("p",{children:"Code Samples and Excercises Licensed Under Apache 2.0"}),(0,r.jsxs)("p",{children:["Site Designed by"," ",(0,r.jsx)("a",{href:"https://www.alexdanielson.com/",children:"Alex Danielson"})]})]})})]})})}var u=n(1664),f=n(5213);let d=(0,o.createContext)([{},()=>{}]),h=d.Provider;function p(e){let[{section:t,title:n,icon:i}]=(0,o.useContext)(f._y),{frontendMastersLink:l}=(0,o.useContext)(d);return(0,r.jsxs)("header",{className:"navbar",children:[(0,r.jsx)("h1",{className:"navbar-brand",children:(0,r.jsx)(u,{href:"/",children:e.title})}),(0,r.jsxs)("div",{className:"navbar-info",children:[l?(0,r.jsx)("a",{href:l,className:"cta-btn",children:"Watch on Frontend Masters"}):null,t?(0,r.jsxs)("h2",{children:[t," ",(0,r.jsx)("i",{className:"fas fa-".concat(i)})," ",n]}):null]})]})}d.Consumer;var x=n(2920);function j(e){let{children:t}=e,n=(0,x.Z)(),i=(0,o.useState)({});return(0,r.jsx)(h,{value:n,children:(0,r.jsx)(f.zt,{value:i,children:(0,r.jsxs)("div",{className:"remix-app",children:[(0,r.jsx)(p,{title:n.title}),(0,r.jsx)("div",{className:"content-container",children:(0,r.jsx)("div",{className:"main",children:t})}),(0,r.jsx)("script",{async:!0,defer:!0,src:"https://a.holt.courses/latest.js"}),(0,r.jsx)("noscript",{children:(0,r.jsx)("img",{src:"https://a.holt.courses/noscript.gif",alt:"",referrerPolicy:"no-referrer-when-downgrade"})}),(0,r.jsx)(c,{twitter:n.social.twitter,github:n.social.github,linkedin:n.social.linkedin})]})})})}function g(e){let{children:t}=e;return(0,r.jsx)(j,{children:t})}function m(e){let{Component:t,pageProps:n}=e;return(0,r.jsxs)(g,{children:[(0,r.jsxs)(i,{children:[(0,r.jsx)("link",{rel:"apple-touch-icon",sizes:"180x180",href:"/images/apple-touch-icon.png"}),(0,r.jsx)("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"/images/favicon-32x32.png"}),(0,r.jsx)("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"/images/favicon-16x16.png"}),(0,r.jsx)("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"/images/favicon-16x16.png"}),(0,r.jsx)("link",{rel:"icon",type:"image/x-icon",href:"/images/favicon.ico"})]}),(0,r.jsx)(t,{...n})]})}}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],function(){return t(1118),t(9090)}),_N_E=e.O()}]);