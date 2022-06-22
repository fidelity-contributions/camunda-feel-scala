(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{109:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return l})),t.d(n,"metadata",(function(){return s})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return b}));var a=t(3),r=t(7),i=(t(0),t(216)),l={id:"feel-list-expressions",title:"List expressions",description:"This document outlines list expressions and examples."},s={unversionedId:"reference/language-guide/feel-list-expressions",id:"reference/language-guide/feel-list-expressions",isDocsHomePage:!1,title:"List expressions",description:"This document outlines list expressions and examples.",source:"@site/docs/reference/language-guide/feel-list-expressions.md",slug:"/reference/language-guide/feel-list-expressions",permalink:"/feel-scala/docs/reference/language-guide/feel-list-expressions",editUrl:"https://github.com/camunda/feel-scala/edit/master/docs/docs/reference/language-guide/feel-list-expressions.md",version:"current",sidebar:"Reference",previous:{title:"Numeric expressions",permalink:"/feel-scala/docs/reference/language-guide/feel-numeric-expressions"},next:{title:"Context expressions",permalink:"/feel-scala/docs/reference/language-guide/feel-context-expressions"}},c=[{value:"Literal",id:"literal",children:[]},{value:"Get element",id:"get-element",children:[]},{value:"Filter",id:"filter",children:[]},{value:"Some",id:"some",children:[]},{value:"Every",id:"every",children:[]}],o={toc:c};function b(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},o,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("h3",{id:"literal"},"Literal"),Object(i.b)("p",null,"Creates a new list of the given elements. The elements can be of any type."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"[1,2,3,4]\n")),Object(i.b)("p",null,"A list value can embed other list values."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"[[1,2], [3,4], [5,6]]\n")),Object(i.b)("h3",{id:"get-element"},"Get element"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"a[i]\n")),Object(i.b)("p",null,"Accesses an element of the list ",Object(i.b)("inlineCode",{parentName:"p"},"a")," at index ",Object(i.b)("inlineCode",{parentName:"p"},"i"),". The index starts at ",Object(i.b)("inlineCode",{parentName:"p"},"1"),"."),Object(i.b)("p",null,"If the index is out of the range of the list, it returns ",Object(i.b)("inlineCode",{parentName:"p"},"null"),"."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"[1,2,3,4][1]           \n// 1\n\n[1,2,3,4][2]\n// 2    \n\n[1,2,3,4][4]                                   \n// 4\n\n[1,2,3,4][5]\n// null\n    \n[1,2,3,4][0]                                   \n// null\n")),Object(i.b)("p",null,"If the index is negative, it starts counting the elements from the end of the list. The last\nelement of the list is at index ",Object(i.b)("inlineCode",{parentName:"p"},"-1"),"."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"[1,2,3,4][-1]                                  \n// 4\n\n[1,2,3,4][-2]                                  \n// 3\n\n[1,2,3,4][-5]                                   \n// null\n")),Object(i.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"be careful!")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"The index of a list starts at ",Object(i.b)("inlineCode",{parentName:"p"},"1"),". In other languages, the index starts at ",Object(i.b)("inlineCode",{parentName:"p"},"0"),"."))),Object(i.b)("h3",{id:"filter"},"Filter"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"a[c]\n")),Object(i.b)("p",null,"Filters the list ",Object(i.b)("inlineCode",{parentName:"p"},"a")," by the condition ",Object(i.b)("inlineCode",{parentName:"p"},"c"),". The result of the expression is a list that contains all elements where the condition ",Object(i.b)("inlineCode",{parentName:"p"},"c")," evaluates to ",Object(i.b)("inlineCode",{parentName:"p"},"true"),"."),Object(i.b)("p",null,"While filtering, the current element is assigned to the variable ",Object(i.b)("inlineCode",{parentName:"p"},"item"),"."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"[1,2,3,4][item > 2]   \n// [3,4]\n\n[1,2,3,4][item > 10]\n// []\n\n[1,2,3,4][even(item)]\n// [2,4]\n")),Object(i.b)("h3",{id:"some"},"Some"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"some a in b satisfies c\n")),Object(i.b)("p",null,"Iterates over the list ",Object(i.b)("inlineCode",{parentName:"p"},"b")," and evaluate the condition ",Object(i.b)("inlineCode",{parentName:"p"},"c")," for each element in the list. The current\nelement is assigned to the variable ",Object(i.b)("inlineCode",{parentName:"p"},"a"),"."),Object(i.b)("p",null,"It returns ",Object(i.b)("inlineCode",{parentName:"p"},"true")," if ",Object(i.b)("inlineCode",{parentName:"p"},"c")," evaluates to ",Object(i.b)("inlineCode",{parentName:"p"},"true")," for ",Object(i.b)("strong",{parentName:"p"},"one or more")," elements of ",Object(i.b)("inlineCode",{parentName:"p"},"b"),". Otherwise, it\nreturns ",Object(i.b)("inlineCode",{parentName:"p"},"false"),"."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"some x in [1,2,3] satisfies x > 2         \n// true\n\nsome x in [1,2,3] satisfies x > 5   \n// false\n\nsome x in [1,2,3] satisfies even(x)\n// true\n\nsome x in [1,2], y in [2,3] satisfies x < y  \n// true\n")),Object(i.b)("h3",{id:"every"},"Every"),Object(i.b)("p",null,"Iterates over the list ",Object(i.b)("inlineCode",{parentName:"p"},"b")," and evaluate the condition ",Object(i.b)("inlineCode",{parentName:"p"},"c")," for each element in the list. The current\nelement is assigned to the variable ",Object(i.b)("inlineCode",{parentName:"p"},"a"),"."),Object(i.b)("p",null,"It returns ",Object(i.b)("inlineCode",{parentName:"p"},"true")," if ",Object(i.b)("inlineCode",{parentName:"p"},"c")," evaluates to ",Object(i.b)("inlineCode",{parentName:"p"},"true")," for ",Object(i.b)("strong",{parentName:"p"},"all")," elements of ",Object(i.b)("inlineCode",{parentName:"p"},"b"),". Otherwise, it\nreturns ",Object(i.b)("inlineCode",{parentName:"p"},"false"),"."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"every x in [1,2,3] satisfies x >= 1   \n// true\n\nevery x in [1,2,3] satisfies x >= 2     \n// false\n\nevery x in [1,2,3] satisfies even(x)\n// false\n\nevery x in [1,2], y in [2,3] satisfies x < y \n// false\n")))}b.isMDXComponent=!0},216:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return d}));var a=t(0),r=t.n(a);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=r.a.createContext({}),b=function(e){var n=r.a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=b(e.components);return r.a.createElement(o.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},m=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,o=c(e,["components","mdxType","originalType","parentName"]),p=b(t),m=a,d=p["".concat(l,".").concat(m)]||p[m]||u[m]||i;return t?r.a.createElement(d,s(s({ref:n},o),{},{components:t})):r.a.createElement(d,s({ref:n},o))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,l=new Array(i);l[0]=m;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var o=2;o<i;o++)l[o]=t[o];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);