"use strict";(self.webpackChunkfeel_scala=self.webpackChunkfeel_scala||[]).push([[5e3],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),f=s(n),d=o,m=f["".concat(c,".").concat(d)]||f[d]||u[d]||a;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},9879:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var r=n(7462),o=(n(7294),n(3905));const a={id:"get-started",title:"Get Started",slug:"/reference/"},i=void 0,l={unversionedId:"reference/get-started",id:"version-1.12/reference/get-started",title:"Get Started",description:"Welcome to the documentation of the FEEL-Scala engine!",source:"@site/versioned_docs/version-1.12/reference/get-started.md",sourceDirName:"reference",slug:"/reference/",permalink:"/feel-scala/docs/1.12/reference/",draft:!1,editUrl:"https://github.com/camunda/feel-scala/edit/main/docs/versioned_docs/version-1.12/reference/get-started.md",tags:[],version:"1.12",frontMatter:{id:"get-started",title:"Get Started",slug:"/reference/"},sidebar:"version-1.12/Reference",next:{title:"Function Provider SPI",permalink:"/feel-scala/docs/1.12/reference/developer-guide/function-provider-spi"}},c={},s=[],p={toc:s};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Welcome to the documentation of the FEEL-Scala engine!"),(0,o.kt)("p",null,"If you're ",(0,o.kt)("strong",{parentName:"p"},"new")," and don't know anything about FEEL then have a look\nat ",(0,o.kt)("a",{parentName:"p",href:"https://docs.camunda.io/docs/components/modeler/feel/what-is-feel/"},"What is FEEL")," first."),(0,o.kt)("p",null,"If you want to know how to ",(0,o.kt)("strong",{parentName:"p"},"write")," FEEL expressions then have a look at\nthe following pages of the language guide:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.camunda.io/docs/components/modeler/feel/language-guide/feel-data-types/"},"Data types")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.camunda.io/docs/components/modeler/feel/language-guide/feel-expressions-introduction/"},"Expressions")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.camunda.io/docs/components/modeler/feel/language-guide/feel-unary-tests/"},"Unary-tests")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.camunda.io/docs/components/modeler/feel/builtin-functions/feel-built-in-functions-introduction/"},"Built-in functions"))),(0,o.kt)("p",null,"If you want to ",(0,o.kt)("strong",{parentName:"p"},"integrate")," the FEEL engine in your application then have a look at\nthe ",(0,o.kt)("a",{parentName:"p",href:"/feel-scala/docs/1.12/reference/developer-guide/function-provider-spi"},"Developer Guide"),"."),(0,o.kt)("p",null,"If you want to ",(0,o.kt)("strong",{parentName:"p"},"try out")," your FEEL expressions in development then check out the\n",(0,o.kt)("a",{parentName:"p",href:"/docs/playground"},"Playground")," (online or local)."))}u.isMDXComponent=!0}}]);