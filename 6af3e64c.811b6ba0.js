(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{120:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return l})),t.d(n,"default",(function(){return p}));var r=t(3),a=t(7),o=(t(0),t(215)),i={id:"feel-control-flow",title:"Control Flow"},c={unversionedId:"reference/language-guide/feel-control-flow",id:"reference/language-guide/feel-control-flow",isDocsHomePage:!1,title:"Control Flow",description:"If Conditions",source:"@site/docs/reference/language-guide/feel-control-flow.md",slug:"/reference/language-guide/feel-control-flow",permalink:"/feel-scala/docs/reference/language-guide/feel-control-flow",editUrl:"https://github.com/camunda/feel-scala/edit/master/docs/docs/reference/language-guide/feel-control-flow.md",version:"current",sidebar:"Reference",previous:{title:"Variables",permalink:"/feel-scala/docs/reference/language-guide/feel-variables"},next:{title:"Functions",permalink:"/feel-scala/docs/reference/language-guide/feel-functions"}},l=[{value:"If Conditions",id:"if-conditions",children:[]},{value:"For Loops",id:"for-loops",children:[]}],s={toc:l};function p(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("h3",{id:"if-conditions"},"If Conditions"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"if c then a else b\n")),Object(o.b)("p",null,"Executes the expression ",Object(o.b)("inlineCode",{parentName:"p"},"a")," if the condition ",Object(o.b)("inlineCode",{parentName:"p"},"c")," evaluates to ",Object(o.b)("inlineCode",{parentName:"p"},"true"),". Otherwise, it executes the\nexpression ",Object(o.b)("inlineCode",{parentName:"p"},"b"),"."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),'if 5 < 10  then "low" else "high"\n// "low"\n\nif 12 < 10 then "low" else "high"\n// "high"\n')),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"good to know ")),Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"If the condition ",Object(o.b)("inlineCode",{parentName:"p"},"c")," doesn't evaluate to a boolean value (e.g. ",Object(o.b)("inlineCode",{parentName:"p"},"null"),") then it\nexecutes the expression ",Object(o.b)("inlineCode",{parentName:"p"},"b"),"."),Object(o.b)("pre",{parentName:"div"},Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),'if null then "low" else "high"\n// "high"\n')))),Object(o.b)("h3",{id:"for-loops"},"For Loops"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"for a in b return c\n")),Object(o.b)("p",null,"Iterates over the list ",Object(o.b)("inlineCode",{parentName:"p"},"b")," and executes the expression ",Object(o.b)("inlineCode",{parentName:"p"},"c")," for each element in the list. The current\nelement is assigned to the variable ",Object(o.b)("inlineCode",{parentName:"p"},"a"),". The result of the expression is a list."),Object(o.b)("p",null,"If multiple lists are passed to the ",Object(o.b)("inlineCode",{parentName:"p"},"for")," loop then it iterates over the cross-product of the\nelements in the given lists."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"for x in [1,2,3] return x * 2\n// [2,4,6]\n\nfor x in [1,2], y in [3,4] return x * y\n// [3, 4, 6, 8]\n")),Object(o.b)("p",null,"While iterating over the list, the previous elements are assigned to the variable ",Object(o.b)("inlineCode",{parentName:"p"},"partial"),"."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"for i in 1..10 return if (i <= 2) then 1 else partial[-1] + partial[-2]\n// [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]\n")),Object(o.b)("p",null,"Instead of a list, the ",Object(o.b)("inlineCode",{parentName:"p"},"for")," loop can also iterate over a given range. "),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"for x in 0..8 return 2 ** x\n// [1, 2, 4, 8, 16, 32, 64, 128, 256]\n\nfor x in 3..1 return 2 * x\n// [6,4,2]\n")))}p.isMDXComponent=!0},215:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return f}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=a.a.createContext({}),p=function(e){var n=a.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},b=function(e){var n=p(e.components);return a.a.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},d=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),b=p(t),d=r,f=b["".concat(i,".").concat(d)]||b[d]||u[d]||o;return t?a.a.createElement(f,c(c({ref:n},s),{},{components:t})):a.a.createElement(f,c({ref:n},s))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=d;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<o;s++)i[s]=t[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);