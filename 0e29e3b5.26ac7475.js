(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{216:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return d}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=a.a.createContext({}),u=function(e){var n=a.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=u(e.components);return a.a.createElement(l.Provider,{value:n},e.children)},f={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},b=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),p=u(t),b=r,d=p["".concat(c,".").concat(b)]||p[b]||f[b]||o;return t?a.a.createElement(d,s(s({ref:n},l),{},{components:t})):a.a.createElement(d,s({ref:n},l))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,c=new Array(o);c[0]=b;var s={};for(var i in n)hasOwnProperty.call(n,i)&&(s[i]=n[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,c[1]=s;for(var l=2;l<o;l++)c[l]=t[l];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"},69:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return s})),t.d(n,"toc",(function(){return i})),t.d(n,"default",(function(){return u}));var r=t(3),a=t(7),o=(t(0),t(216)),c={id:"feel-expressions-introduction",title:"Introduction",description:"FEEL expressions are powerful and can be used for various cases."},s={unversionedId:"reference/language-guide/feel-expressions-introduction",id:"reference/language-guide/feel-expressions-introduction",isDocsHomePage:!1,title:"Introduction",description:"FEEL expressions are powerful and can be used for various cases.",source:"@site/docs/reference/language-guide/feel-expressions-introduction.md",slug:"/reference/language-guide/feel-expressions-introduction",permalink:"/feel-scala/docs/reference/language-guide/feel-expressions-introduction",editUrl:"https://github.com/camunda/feel-scala/edit/master/docs/docs/reference/language-guide/feel-expressions-introduction.md",version:"current",sidebar:"Reference",previous:{title:"Unary-tests",permalink:"/feel-scala/docs/reference/language-guide/feel-unary-tests"},next:{title:"Boolean expressions",permalink:"/feel-scala/docs/reference/language-guide/feel-boolean-expressions"}},i=[{value:"Comments",id:"comments",children:[]},{value:"Parentheses",id:"parentheses",children:[]}],l={toc:i};function u(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"FEEL expressions are powerful and can be used for various cases."),Object(o.b)("p",null,"This section is split into expressions based on their operational data type:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"/feel-scala/docs/reference/language-guide/feel-boolean-expressions"}),"Boolean")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"/feel-scala/docs/reference/language-guide/feel-string-expressions"}),"String")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"/feel-scala/docs/reference/language-guide/feel-numeric-expressions"}),"Numeric")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"/feel-scala/docs/reference/language-guide/feel-list-expressions"}),"List")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"/feel-scala/docs/reference/language-guide/feel-context-expressions"}),"Context")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"/feel-scala/docs/reference/language-guide/feel-temporal-expressions"}),"Temporal"))),Object(o.b)("p",null,"The following sections cover more general areas that are not restricted to one data type:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"/feel-scala/docs/reference/language-guide/feel-variables"}),"Variables")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"/feel-scala/docs/reference/language-guide/feel-control-flow"}),"Control Flow")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"/feel-scala/docs/reference/language-guide/feel-functions"}),"Functions"))),Object(o.b)("h3",{id:"comments"},"Comments"),Object(o.b)("p",null,"An expression can contain comments to explain it and give it more context. This can be done using\nJava-style comments: ",Object(o.b)("inlineCode",{parentName:"p"},"//")," to the end of line, or ",Object(o.b)("inlineCode",{parentName:"p"},"/*.... */")," for blocks."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"// returns the last item       \n[1,2,3,4][-1]                             \n    \n/* returns the last item */\n[1,2,3,4][-1]\n\n/* \n * returns the last item \n */\n[1,2,3,4][-1]   \n")),Object(o.b)("h3",{id:"parentheses"},"Parentheses"),Object(o.b)("p",null,"Parentheses ",Object(o.b)("inlineCode",{parentName:"p"},"( .. )")," can be used in expressions to separate different parts of an\nexpression or to influence the precedence of the operators."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),'(5 - 3) * (4 / 2)\n\nx < 5 and (y > 10 or z > 20)\n\nif (5 < 10) then "low" else "high"\n')))}u.isMDXComponent=!0}}]);