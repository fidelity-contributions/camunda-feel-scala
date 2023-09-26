"use strict";(self.webpackChunkfeel_scala=self.webpackChunkfeel_scala||[]).push([[9251],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),o=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=o(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),c=o(n),m=r,f=c["".concat(s,".").concat(m)]||c[m]||d[m]||l;return n?a.createElement(f,i(i({ref:t},p),{},{components:n})):a.createElement(f,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=c;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u.mdxType="string"==typeof e?e:r,i[1]=u;for(var o=2;o<l;o++)i[o]=n[o];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},6300:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>u,toc:()=>o});var a=n(7462),r=(n(7294),n(3905));const l={id:"feel-unary-tests",title:"Unary-tests",description:"This document outlines unary-tests and examples."},i=void 0,u={unversionedId:"reference/language-guide/feel-unary-tests",id:"reference/language-guide/feel-unary-tests",title:"Unary-tests",description:"This document outlines unary-tests and examples.",source:"@site/docs/reference/language-guide/feel-unary-tests.md",sourceDirName:"reference/language-guide",slug:"/reference/language-guide/feel-unary-tests",permalink:"/feel-scala/docs/next/reference/language-guide/feel-unary-tests",draft:!1,editUrl:"https://github.com/camunda/feel-scala/edit/main/docs/docs/reference/language-guide/feel-unary-tests.md",tags:[],version:"current",frontMatter:{id:"feel-unary-tests",title:"Unary-tests",description:"This document outlines unary-tests and examples."},sidebar:"Reference",previous:{title:"Data types",permalink:"/feel-scala/docs/next/reference/language-guide/feel-data-types"},next:{title:"Introduction",permalink:"/feel-scala/docs/next/reference/language-guide/feel-expressions-introduction"}},s={},o=[{value:"Comparison",id:"comparison",level:3},{value:"Interval",id:"interval",level:3},{value:"Disjunction/or",id:"disjunctionor",level:3},{value:"Negation/not",id:"negationnot",level:3},{value:"Expressions",id:"expressions",level:3}],p={toc:o};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"A unary-tests expression is a special kind of boolean expression. Unary-tests expressions should be used for the input\nentries of a decision table (i.e. the conditions of a rule)."),(0,r.kt)("p",null,"A unary-tests expression returns ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," if one of the following conditions is fulfilled:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The expression evaluates to ",(0,r.kt)("inlineCode",{parentName:"li"},"true")," when the input value is applied to it."),(0,r.kt)("li",{parentName:"ul"},"The expression evaluates to a list, and the input value is equal to at least one of the values in\nthat list."),(0,r.kt)("li",{parentName:"ul"},"The expression evaluates to a value, and the input value is equal to that value."),(0,r.kt)("li",{parentName:"ul"},"The expression is equal to ",(0,r.kt)("inlineCode",{parentName:"li"},"-")," (a dash).")),(0,r.kt)("h3",{id:"comparison"},"Comparison"),(0,r.kt)("p",null,"Compares the input value with a given value. The input value is passed implicitly as the first\nargument of the operator."),(0,r.kt)("p",null,"Both values must be of the same type. Otherwise, the result is ",(0,r.kt)("inlineCode",{parentName:"p"},"null"),"."),(0,r.kt)("table",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Operator"),(0,r.kt)("th",null,"Description"),(0,r.kt)("th",null,"Supported types")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"(none)"),(0,r.kt)("td",null,"equal to"),(0,r.kt)("td",null,"any")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"<"),(0,r.kt)("td",null,"less than"),(0,r.kt)("td",null,"number, date, time, date-time, duration")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"<="),(0,r.kt)("td",null,"less than or equal to"),(0,r.kt)("td",null,"number, date, time, date-time, duration")),(0,r.kt)("tr",null,(0,r.kt)("td",null,">"),(0,r.kt)("td",null,"greater than"),(0,r.kt)("td",null,"number, date, time, date-time, duration")),(0,r.kt)("tr",null,(0,r.kt)("td",null,">="),(0,r.kt)("td",null,"greater than or equal"),(0,r.kt)("td",null,"number, date, time, date-time, duration"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'"valid"\n\n< 10\n\n<= date("2020-04-06")\n\n> time("08:00:00")\n\n>= duration("P5D")\n')),(0,r.kt)("h3",{id:"interval"},"Interval"),(0,r.kt)("p",null,"Checks if the input value is within a given interval between ",(0,r.kt)("inlineCode",{parentName:"p"},"x")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"y"),"."),(0,r.kt)("p",null,"An interval has two boundaries that can be open ",(0,r.kt)("inlineCode",{parentName:"p"},"(x..y)")," / ",(0,r.kt)("inlineCode",{parentName:"p"},"]x..y[")," or closed ",(0,r.kt)("inlineCode",{parentName:"p"},"[x..y]"),". If a\nboundary is closed, it includes the given value (i.e. less/greater than or equal). Otherwise, it\nexcludes the value (i.e. less/greater than)."),(0,r.kt)("p",null,"The input value is passed implicitly to the operator."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"(2..5)\n// input > 2 and input < 5\n\n]2..5[\n// input > 2 and input < 5\n\n[2..5]\n// input >= 2 and input <= 5\n\n(2..5]\n// input > 2 and input <= 5\n")),(0,r.kt)("h3",{id:"disjunctionor"},"Disjunction/or"),(0,r.kt)("p",null,"Combines multiple unary-test expressions following the ternary logic."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Returns ",(0,r.kt)("inlineCode",{parentName:"li"},"true")," if at least one unary-test evaluates to ",(0,r.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,r.kt)("li",{parentName:"ul"},"Otherwise, it returns ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),".")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"2, 3, 4\n// input = 2 or input = 3 or input = 4\n\n< 10, > 50\n// input < 10 or input > 50\n")),(0,r.kt)("h3",{id:"negationnot"},"Negation/not"),(0,r.kt)("p",null,"Negates a given unary-test expression. The expression can be a comparison, an interval, or a\ndisjunction."),(0,r.kt)("p",null,"It returns ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," if the given unary-test evaluates to ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'not("valid")\n// input != "valid"\n\nnot(2, 3)             \n// input != 2 and input != 3 \n')),(0,r.kt)("h3",{id:"expressions"},"Expressions"),(0,r.kt)("p",null,"Evaluates an expression that returns a boolean value. For example, ",(0,r.kt)("a",{parentName:"p",href:"feel-functions#invocation"},"invoking a function"),"."),(0,r.kt)("p",null,"The input value can be accessed in the expression by using the symbol ",(0,r.kt)("inlineCode",{parentName:"p"},"?")," (a question mark)."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'contains(?, "good")\n// check if the input value (string) contains "good"\n\nends with(?, "@camunda.com")\n// checks if the input value (string) ends with "@camunda.com"\n')))}d.isMDXComponent=!0}}]);