(window.webpackJsonp=window.webpackJsonp||[]).push([[88],{157:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return o})),t.d(n,"toc",(function(){return l})),t.d(n,"default",(function(){return u}));var a=t(3),r=t(7),i=(t(0),t(251)),c={id:"feel-functions",title:"Functions",description:"This document outlines various functions and examples."},o={unversionedId:"reference/language-guide/feel-functions",id:"version-1.15/reference/language-guide/feel-functions",isDocsHomePage:!1,title:"Functions",description:"This document outlines various functions and examples.",source:"@site/versioned_docs/version-1.15/reference/language-guide/feel-functions.md",slug:"/reference/language-guide/feel-functions",permalink:"/feel-scala/docs/1.15/reference/language-guide/feel-functions",editUrl:"https://github.com/camunda/feel-scala/edit/master/docs/versioned_docs/version-1.15/reference/language-guide/feel-functions.md",version:"1.15",sidebar:"version-1.15/Reference",previous:{title:"Control flow",permalink:"/feel-scala/docs/1.15/reference/language-guide/feel-control-flow"},next:{title:"Introduction",permalink:"/feel-scala/docs/1.15/reference/builtin-functions/feel-built-in-functions-introduction"}},l=[{value:"Invocation",id:"invocation",children:[]},{value:"User-defined",id:"user-defined",children:[]},{value:"External",id:"external",children:[]}],s={toc:l};function u(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("h3",{id:"invocation"},"Invocation"),Object(i.b)("p",null,"Invokes a built-in function (\ne.g. ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"../builtin-functions/feel-built-in-functions-string#contains"}),"contains()"),") or user-defined\nfunction by its name. The arguments of the function can be passed positional or named."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Positional: Only the values, in the same order as defined by the function (e.g. ",Object(i.b)("inlineCode",{parentName:"li"},"f(1,2)"),")."),Object(i.b)("li",{parentName:"ul"},"Named: The values with the argument name as prefix, in any order (e.g. ",Object(i.b)("inlineCode",{parentName:"li"},"f(a: 1, b: 2)"),").")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'contains("me@camunda.com", ".com")\n// true\n\ncontains(string: "me@camunda.com", match: ".de")\n// false\n')),Object(i.b)("h3",{id:"user-defined"},"User-defined"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"function(a,b) e\n")),Object(i.b)("p",null,"Defines a function with a list of argument names, and an expression (i.e. the function body). When\nthe function is invoked, it assigns the values to the arguments and evaluates the expression."),Object(i.b)("p",null,"Within an expression, a function can be defined and invoked in a context."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"{\n  age: function(birthday) (today() - birthday).years\n}\n")),Object(i.b)("h3",{id:"external"},"External"),Object(i.b)("p",null,"Defines a function that calls a static Java method. The definition must include the full qualified\nclass name and the method signature."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'function(x,y) external { \n    java: { \n        class: "java.lang.Math", \n        method signature: "max(int, int)" \n    } \n}\n')),Object(i.b)("div",{className:"admonition admonition-danger alert alert--danger"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})))),"Security ")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"External functions are disabled by default. They would allow calling arbitrary\ncode or accessing sensitive data. It is recommended to use the\n",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/feel-scala/docs/1.15/reference/developer-guide/function-provider-spi"}),"FunctionProvider API")," instead."))))}u.isMDXComponent=!0},251:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return p}));var a=t(0),r=t.n(a);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=r.a.createContext({}),u=function(e){var n=r.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=u(e.components);return r.a.createElement(s.Provider,{value:n},e.children)},f={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},b=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(t),b=a,p=d["".concat(c,".").concat(b)]||d[b]||f[b]||i;return t?r.a.createElement(p,o(o({ref:n},s),{},{components:t})):r.a.createElement(p,o({ref:n},s))}));function p(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,c=new Array(i);c[0]=b;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,c[1]=o;for(var s=2;s<i;s++)c[s]=t[s];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);