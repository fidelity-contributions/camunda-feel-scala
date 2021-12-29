(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{215:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return j}));var a=t(0),r=t.n(a);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function b(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var u=r.a.createContext({}),o=function(e){var n=r.a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):b(b({},n),e)),t},s=function(e){var n=o(e.components);return r.a.createElement(u.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},m=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),s=o(t),m=a,j=s["".concat(i,".").concat(m)]||s[m]||p[m]||l;return t?r.a.createElement(j,b(b({ref:n},u),{},{components:t})):r.a.createElement(j,b({ref:n},u))}));function j(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,i=new Array(l);i[0]=m;var b={};for(var c in n)hasOwnProperty.call(n,c)&&(b[c]=n[c]);b.originalType=e,b.mdxType="string"==typeof e?e:a,i[1]=b;for(var u=2;u<l;u++)i[u]=t[u];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},276:function(e,n,t){"use strict";t.r(n),n.default=t.p+"assets/images/feel-built-in-functions-range-overview-67e1cfede7fd9ff925452548f6a72052.png"},99:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return b})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return o}));var a=t(3),r=t(7),l=(t(0),t(215)),i={id:"feel-built-in-functions-range",title:"Range Functions"},b={unversionedId:"reference/builtin-functions/feel-built-in-functions-range",id:"reference/builtin-functions/feel-built-in-functions-range",isDocsHomePage:!1,title:"Range Functions",description:"A set of functions establish relationships between single scalar values and ranges of such values.",source:"@site/docs/reference/builtin-functions/feel-built-in-functions-range.md",slug:"/reference/builtin-functions/feel-built-in-functions-range",permalink:"/feel-scala/docs/reference/builtin-functions/feel-built-in-functions-range",editUrl:"https://github.com/camunda/feel-scala/edit/master/docs/docs/reference/builtin-functions/feel-built-in-functions-range.md",version:"current",sidebar:"Reference",previous:{title:"Temporal Functions",permalink:"/feel-scala/docs/reference/builtin-functions/feel-built-in-functions-temporal"},next:{title:"Introduction",permalink:"/feel-scala/docs/reference/developer-guide/developer-guide-introduction"}},c=[{value:"before()",id:"before",children:[]},{value:"after()",id:"after",children:[]},{value:"meets()",id:"meets",children:[]},{value:"met by()",id:"met-by",children:[]},{value:"overlaps()",id:"overlaps",children:[]},{value:"overlaps before()",id:"overlaps-before",children:[]},{value:"overlaps after()",id:"overlaps-after",children:[]},{value:"finishes()",id:"finishes",children:[]},{value:"finished by()",id:"finished-by",children:[]},{value:"includes()",id:"includes",children:[]},{value:"during()",id:"during",children:[]},{value:"starts()",id:"starts",children:[]},{value:"started by()",id:"started-by",children:[]},{value:"coincides()",id:"coincides",children:[]}],u={toc:c};function o(e){var n=e.components,i=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},u,i,{components:n,mdxType:"MDXLayout"}),Object(l.b)("p",null,"A set of functions establish relationships between single scalar values and ranges of such values.\nAll functions take two arguments and return ",Object(l.b)("inlineCode",{parentName:"p"},"true")," if the relationship between the argument holds,\nor ",Object(l.b)("inlineCode",{parentName:"p"},"false")," otherwise."),Object(l.b)("p",null,"A scalar value must be of the following type: "),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"number"),Object(l.b)("li",{parentName:"ul"},"date"),Object(l.b)("li",{parentName:"ul"},"time"),Object(l.b)("li",{parentName:"ul"},"date-time"),Object(l.b)("li",{parentName:"ul"},"days-time-duration"),Object(l.b)("li",{parentName:"ul"},"years-months-duration")),Object(l.b)("p",null,Object(l.b)("img",{alt:"range functions overview",src:t(276).default})),Object(l.b)("h2",{id:"before"},"before()"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"parameters:",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"point1"),", ",Object(l.b)("inlineCode",{parentName:"li"},"point2"),": any"),Object(l.b)("li",{parentName:"ul"},"or ",Object(l.b)("inlineCode",{parentName:"li"},"range"),": range, ",Object(l.b)("inlineCode",{parentName:"li"},"point"),": any"),Object(l.b)("li",{parentName:"ul"},"or ",Object(l.b)("inlineCode",{parentName:"li"},"point"),": any, ",Object(l.b)("inlineCode",{parentName:"li"},"range"),": range"),Object(l.b)("li",{parentName:"ul"},"or ",Object(l.b)("inlineCode",{parentName:"li"},"range1"),", ",Object(l.b)("inlineCode",{parentName:"li"},"range2"),": range"))),Object(l.b)("li",{parentName:"ul"},"result: boolean")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"before(1, 10)\n// true\n\nbefore(10, 1)\n// false\n\nbefore(1, [2..5])\n// true\n\nbefore([1..5], 10)\n// true\n\nbefore([1..5], [6..10])\n// true\n\nbefore([1..5),[5..10])\n// true\n")),Object(l.b)("h2",{id:"after"},"after()"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"parameters:",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"point1"),", ",Object(l.b)("inlineCode",{parentName:"li"},"point2"),": any"),Object(l.b)("li",{parentName:"ul"},"or ",Object(l.b)("inlineCode",{parentName:"li"},"range"),": range, ",Object(l.b)("inlineCode",{parentName:"li"},"point"),": any"),Object(l.b)("li",{parentName:"ul"},"or ",Object(l.b)("inlineCode",{parentName:"li"},"point"),": any, ",Object(l.b)("inlineCode",{parentName:"li"},"range"),": range"),Object(l.b)("li",{parentName:"ul"},"or ",Object(l.b)("inlineCode",{parentName:"li"},"range1"),", ",Object(l.b)("inlineCode",{parentName:"li"},"range2"),": range"))),Object(l.b)("li",{parentName:"ul"},"result: boolean")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"after(10, 1)\n// true\n\nafter(1, 10)\n// false\n\nafter(12, [2..5])\n// true\n\n([1..5], 10)\n// false\n\nbefore([6..10], [1..5])\n// true\n\nbefore([5..10], [1..5))\n// true\n")),Object(l.b)("h2",{id:"meets"},"meets()"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"parameters:",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"range1"),": range"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"range2"),": range"))),Object(l.b)("li",{parentName:"ul"},"result: boolean")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"meets([1..5], [5..10])\n// true\n\nmeets([1..3], [4..6])\n// false\n\nmeets([1..3], [3..5])\n// true\n\nmeets([1..5], (5..8])\n// false\n\n")),Object(l.b)("h2",{id:"met-by"},"met by()"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"parameters:",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"range1"),": range"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"range2"),": range"))),Object(l.b)("li",{parentName:"ul"},"result: boolean")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"met by([5..10], [1..5])\n// true\n\nmet by([3..4], [1..2])\n// false\n\nmet by([3..5], [1..3])\n// true\n\nmet by((5..8], [1..5))\n// false\n\nmet by([5..10], [1..5))\n// false\n")),Object(l.b)("h2",{id:"overlaps"},"overlaps()"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"parameters:",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"range1"),": range"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"range2"),": range"))),Object(l.b)("li",{parentName:"ul"},"result: boolean")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"overlaps([5..10], [1..6])\n// true\n\noverlaps((3..7], [1..4])\n// true\n\noverlaps([1..3], (3..6])\n// false\n\noverlaps((5..8], [1..5))\n// false\n\noverlaps([4..10], [1..5))\n// treu\n")),Object(l.b)("h2",{id:"overlaps-before"},"overlaps before()"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"parameters:",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"range1"),": range"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"range2"),": range"))),Object(l.b)("li",{parentName:"ul"},"result: boolean")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"overlaps before([1..5], [4..10])\n// true\n\noverlaps before([3..4], [1..2])\n// false\n\noverlaps before([1..3], (3..5])\n// false\n\noverlaps before([1..5), (3..8])\n// true\n\noverlaps before([1..5), [5..10])\n// false\n")),Object(l.b)("h2",{id:"overlaps-after"},"overlaps after()"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"parameters:",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"range1"),": range"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"range2"),": range"))),Object(l.b)("li",{parentName:"ul"},"result: boolean")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"overlaps after([4..10], [1..5])\n// true\n\noverlaps after([3..4], [1..2])\n// false\n\noverlaps after([3..5], [1..3))\n// false\n\noverlaps after((5..8], [1..5))\n// false\n\noverlaps after([4..10], [1..5))\n// true\n")),Object(l.b)("h2",{id:"finishes"},"finishes()"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"parameters:",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"point"),": any, ",Object(l.b)("inlineCode",{parentName:"li"},"range"),": range"),Object(l.b)("li",{parentName:"ul"},"or ",Object(l.b)("inlineCode",{parentName:"li"},"range1"),", ",Object(l.b)("inlineCode",{parentName:"li"},"range2"),": range"))),Object(l.b)("li",{parentName:"ul"},"result: boolean")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"finishes(5, [1..5])\n// true\n\nfinishes(10, [1..7])\n// false\n\nfinishes([3..5], [1..5])\n// true\n\nfinishes((1..5], [1..5))\n// false\n\nfinishes([5..10], [1..10))\n// false\n")),Object(l.b)("h2",{id:"finished-by"},"finished by()"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"parameters:",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"range"),": range, ",Object(l.b)("inlineCode",{parentName:"li"},"point"),": any"),Object(l.b)("li",{parentName:"ul"},"or ",Object(l.b)("inlineCode",{parentName:"li"},"range1"),", ",Object(l.b)("inlineCode",{parentName:"li"},"range2"),": range"))),Object(l.b)("li",{parentName:"ul"},"result: boolean")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"finishes by([5..10], 10)\n// true\n\nfinishes by([3..4], 2)\n// false\n\nfinishes by([3..5], [1..5])\n// true\n\nfinishes by((5..8], [1..5))\n// false\n\nfinishes by([5..10], (1..10))\n// true\n")),Object(l.b)("h2",{id:"includes"},"includes()"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"parameters:",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"range"),": range, ",Object(l.b)("inlineCode",{parentName:"li"},"point"),": any"),Object(l.b)("li",{parentName:"ul"},"or ",Object(l.b)("inlineCode",{parentName:"li"},"range1"),", ",Object(l.b)("inlineCode",{parentName:"li"},"range2"),": range"))),Object(l.b)("li",{parentName:"ul"},"result: boolean")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"includes([5..10], 6)\n// true\n\nincludes([3..4], 5)\n// false\n\nincludes([1..10], [4..6])\n// true\n\nincludes((5..8], [1..5))\n// false\n\nincludes([1..10], [1..5))\n// true\n")),Object(l.b)("h2",{id:"during"},"during()"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"parameters:",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"point"),": any, ",Object(l.b)("inlineCode",{parentName:"li"},"range"),": range"),Object(l.b)("li",{parentName:"ul"},"or ",Object(l.b)("inlineCode",{parentName:"li"},"range1"),", ",Object(l.b)("inlineCode",{parentName:"li"},"range2"),": range"))),Object(l.b)("li",{parentName:"ul"},"result: boolean")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"during(5, [1..10])\n// true\n\nduring(12, [1..10])\n// false\n\nduring(1, (1..10])\n// false\n\nduring([4..6], [1..10))\n// true\n\nduring((1..5], (1..10])\n// true\n")),Object(l.b)("h2",{id:"starts"},"starts()"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"parameters:",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"point"),": any, ",Object(l.b)("inlineCode",{parentName:"li"},"range"),": range"),Object(l.b)("li",{parentName:"ul"},"or ",Object(l.b)("inlineCode",{parentName:"li"},"range1"),", ",Object(l.b)("inlineCode",{parentName:"li"},"range2"),": range"))),Object(l.b)("li",{parentName:"ul"},"result: boolean")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"starts(1, [1..5])\n// true\n\nstarts(1, (1..8])\n// false\n\nstarts((1..5], [1..5])\n// false\n\nstarts([1..10], [1..10])\n// true\n\nstarts((1..10), (1..10))\n// true\n")),Object(l.b)("h2",{id:"started-by"},"started by()"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"parameters:",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"range"),": range, ",Object(l.b)("inlineCode",{parentName:"li"},"point"),": any"),Object(l.b)("li",{parentName:"ul"},"or ",Object(l.b)("inlineCode",{parentName:"li"},"range1"),", ",Object(l.b)("inlineCode",{parentName:"li"},"range2"),": range"))),Object(l.b)("li",{parentName:"ul"},"result: boolean")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"started by([1..10], 1)\n// true\n\nstarted by((1..10], 1)\n// false\n\nstarted by([1..10], [1..5])\n// true\n\nstarted by((1..10], [1..5))\n// false\n\nstarted by([1..10], [1..10))\n// true\n")),Object(l.b)("h2",{id:"coincides"},"coincides()"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"parameters:",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"point1"),", ",Object(l.b)("inlineCode",{parentName:"li"},"point2"),": any"),Object(l.b)("li",{parentName:"ul"},"or ",Object(l.b)("inlineCode",{parentName:"li"},"range1"),", ",Object(l.b)("inlineCode",{parentName:"li"},"range2"),": range"))),Object(l.b)("li",{parentName:"ul"},"result: boolean")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"coincides(5, 5)\n// true\n\ncoincides(3, 4)\n// false\n\ncoincides([1..5], [1..5])\n// true\n\ncoincides((1..5], [1..5))\n// false\n\ncoincides([1..5], [2..6])\n// false\n")))}o.isMDXComponent=!0}}]);