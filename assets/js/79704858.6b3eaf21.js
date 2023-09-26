"use strict";(self.webpackChunkfeel_scala=self.webpackChunkfeel_scala||[]).push([[2910],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>c});var l=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);n&&(l=l.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,l)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,l,a=function(e,n){if(null==e)return{};var t,l,a={},r=Object.keys(e);for(l=0;l<r.length;l++)t=r[l],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)t=r[l],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=l.createContext({}),s=function(e){var n=l.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=s(e.components);return l.createElement(u.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return l.createElement(l.Fragment,{},n)}},m=l.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=s(t),c=a,k=m["".concat(u,".").concat(c)]||m[c]||d[c]||r;return t?l.createElement(k,i(i({ref:n},p),{},{components:t})):l.createElement(k,i({ref:n},p))}));function c(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,i=new Array(r);i[0]=m;var o={};for(var u in n)hasOwnProperty.call(n,u)&&(o[u]=n[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var s=2;s<r;s++)i[s]=t[s];return l.createElement.apply(null,i)}return l.createElement.apply(null,t)}m.displayName="MDXCreateElement"},9561:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>s});var l=t(7462),a=(t(7294),t(3905));const r={id:"feel-boolean-expressions",title:"Boolean expressions",description:"This document outlines boolean expressions and examples."},i=void 0,o={unversionedId:"reference/language-guide/feel-boolean-expressions",id:"version-1.17/reference/language-guide/feel-boolean-expressions",title:"Boolean expressions",description:"This document outlines boolean expressions and examples.",source:"@site/versioned_docs/version-1.17/reference/language-guide/feel-boolean-expressions.md",sourceDirName:"reference/language-guide",slug:"/reference/language-guide/feel-boolean-expressions",permalink:"/feel-scala/docs/reference/language-guide/feel-boolean-expressions",draft:!1,editUrl:"https://github.com/camunda/feel-scala/edit/main/docs/versioned_docs/version-1.17/reference/language-guide/feel-boolean-expressions.md",tags:[],version:"1.17",frontMatter:{id:"feel-boolean-expressions",title:"Boolean expressions",description:"This document outlines boolean expressions and examples."},sidebar:"Reference",previous:{title:"Introduction",permalink:"/feel-scala/docs/reference/language-guide/feel-expressions-introduction"},next:{title:"String expressions",permalink:"/feel-scala/docs/reference/language-guide/feel-string-expressions"}},u={},s=[{value:"Literal",id:"literal",level:3},{value:"Comparison",id:"comparison",level:3},{value:"Null check",id:"null-check",level:3},{value:"Conjunction/and",id:"conjunctionand",level:3},{value:"Disjunction/or",id:"disjunctionor",level:3},{value:"Instance of",id:"instance-of",level:3},{value:"Unary-tests/in",id:"unary-testsin",level:3}],p={toc:s};function d(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,l.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"literal"},"Literal"),(0,a.kt)("p",null,"Creates a new boolean value."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"true\n\nfalse\n")),(0,a.kt)("h3",{id:"comparison"},"Comparison"),(0,a.kt)("p",null,"Compares two values with one of the following operators."),(0,a.kt)("p",null,"Both values must be of the same type. Otherwise, the result is ",(0,a.kt)("inlineCode",{parentName:"p"},"null"),"."),(0,a.kt)("table",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Operator"),(0,a.kt)("th",null,"Description"),(0,a.kt)("th",null,"Supported types")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"="),(0,a.kt)("td",null,"equal to"),(0,a.kt)("td",null,"any")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"!="),(0,a.kt)("td",null,"not equal to"),(0,a.kt)("td",null,"any")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"<"),(0,a.kt)("td",null,"less than"),(0,a.kt)("td",null,"number, date, time, date-time, duration")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"<="),(0,a.kt)("td",null,"less than or equal to"),(0,a.kt)("td",null,"number, date, time, date-time, duration")),(0,a.kt)("tr",null,(0,a.kt)("td",null,">"),(0,a.kt)("td",null,"greater than"),(0,a.kt)("td",null,"number, date, time, date-time, duration")),(0,a.kt)("tr",null,(0,a.kt)("td",null,">="),(0,a.kt)("td",null,"greater than or equal"),(0,a.kt)("td",null,"number, date, time, date-time, duration")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"between [x] and [y]"),(0,a.kt)("td",null,"same as (_ >= x and _ <= y)"),(0,a.kt)("td",null,"number, date, time, date-time, duration"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'5 = 5\n// true\n\n5 != 5\n// false\n\ndate("2020-04-05") < date("2020-04-06")\n// true\n\ntime("08:00:00") <= time("08:00:00")\n// true\n\nduration("P1D") > duration("P5D")\n// false\n\nduration("P1Y") >= duration("P6M")\n// true\n\n5 between 3 and 7\n// true\n\ndate("2020-04-06") between date("2020-04-05") and date("2020-04-09")\n// true\n')),(0,a.kt)("admonition",{title:"Be Careful!",type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"The equals operator has only ",(0,a.kt)("strong",{parentName:"p"},"one")," equals sign (e.g. ",(0,a.kt)("inlineCode",{parentName:"p"},"x = y"),"). In other languages, the operator has two equals signs (e.g. ",(0,a.kt)("inlineCode",{parentName:"p"},"x == y"),").")),(0,a.kt)("h3",{id:"null-check"},"Null check"),(0,a.kt)("p",null,"Any value or variable can be compared with ",(0,a.kt)("inlineCode",{parentName:"p"},"null")," to check if it is equal to ",(0,a.kt)("inlineCode",{parentName:"p"},"null"),", or if it exists."),(0,a.kt)("p",null,"Comparing ",(0,a.kt)("inlineCode",{parentName:"p"},"null")," to a value different from ",(0,a.kt)("inlineCode",{parentName:"p"},"null")," results in ",(0,a.kt)("inlineCode",{parentName:"p"},"false"),". It returns ",(0,a.kt)("inlineCode",{parentName:"p"},"true")," if the\nvalue is ",(0,a.kt)("inlineCode",{parentName:"p"},"null")," or the variable doesn't exist."),(0,a.kt)("p",null,"Comparing a context entry with ",(0,a.kt)("inlineCode",{parentName:"p"},"null")," results in ",(0,a.kt)("inlineCode",{parentName:"p"},"true")," if the value of the entry is ",(0,a.kt)("inlineCode",{parentName:"p"},"null")," or if\nthe context doesn't contain an entry with this key."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'null = null\n// true\n\n"foo" = null\n// false\n\n{x: null}.x = null\n// true\n\n{}.y = null\n// true\n')),(0,a.kt)("h3",{id:"conjunctionand"},"Conjunction/and"),(0,a.kt)("p",null,"Combines multiple boolean values following the ternary logic."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The result is ",(0,a.kt)("inlineCode",{parentName:"li"},"true")," if all values are ",(0,a.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,a.kt)("li",{parentName:"ul"},"The result is ",(0,a.kt)("inlineCode",{parentName:"li"},"false")," if one value is ",(0,a.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,a.kt)("li",{parentName:"ul"},"Otherwise, the result is ",(0,a.kt)("inlineCode",{parentName:"li"},"null")," (i.e. if a value is not a boolean.)")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'true and true\n// true\n\ntrue and false\n// false\n\ntrue and null\n// null\n\ntrue and "otherwise"\n// null\n\nfalse and null\n// false\n\nfalse and "otherwise"\n// false\n')),(0,a.kt)("h3",{id:"disjunctionor"},"Disjunction/or"),(0,a.kt)("p",null,"Combines multiple boolean values following the ternary logic."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The result is ",(0,a.kt)("inlineCode",{parentName:"li"},"true")," if at least one value is ",(0,a.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,a.kt)("li",{parentName:"ul"},"The result is ",(0,a.kt)("inlineCode",{parentName:"li"},"false")," if all values are ",(0,a.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,a.kt)("li",{parentName:"ul"},"Otherwise, the result is ",(0,a.kt)("inlineCode",{parentName:"li"},"null")," (i.e. if a value is not a boolean.)")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'true or false\n// true\n\nfalse or false\n// false\n\ntrue or null\n// true\n\ntrue or "otherwise"\n// true\n\nfalse or null\n// null\n\nfalse or "otherwise"\n// null\n')),(0,a.kt)("h3",{id:"instance-of"},"Instance of"),(0,a.kt)("p",null,"Checks if the value is of the given type. Available type names:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"boolean")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"number")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"string")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"date")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"time")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"date and time")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"days and time duration")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"years and months duration")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"list")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"context")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"function")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Any"))),(0,a.kt)("p",null,"Use the type ",(0,a.kt)("inlineCode",{parentName:"p"},"Any")," to check if the value is not ",(0,a.kt)("inlineCode",{parentName:"p"},"null"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'1 instance of number\n// true\n\n1 instance of string\n// false\n\n1 instance of Any\n// true\n\nnull instance of Any\n// false\n\nduration("P3M") instance of years and months duration\n// true\n\nduration("PT4H") instance of days and time duration\n// true\n')),(0,a.kt)("h3",{id:"unary-testsin"},"Unary-tests/in"),(0,a.kt)("p",null,"Evaluates a ",(0,a.kt)("a",{parentName:"p",href:"feel-unary-tests"},"unary-tests")," with the given value. The keyword ",(0,a.kt)("inlineCode",{parentName:"p"},"in")," separates the value from the unary-tests."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'5 in (3..7)\n// true\n\ndate("2021-06-04") in [date("2021-05-01")..date("2021-05-31")]\n// false\n\n5 in (3,5,7)\n// true\n\n5 in [2,4,6,8]\n// false\n')))}d.isMDXComponent=!0}}]);