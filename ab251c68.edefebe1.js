(window.webpackJsonp=window.webpackJsonp||[]).push([[84],{153:function(t,e,n){"use strict";n.r(e),n.d(e,"frontMatter",(function(){return u})),n.d(e,"metadata",(function(){return a})),n.d(e,"toc",(function(){return d})),n.d(e,"default",(function(){return c}));var l=n(3),b=n(7),r=(n(0),n(216)),u={id:"feel-temporal-expressions",title:"Temporal expressions",description:"This document outlines temporal expressions and examples."},a={unversionedId:"reference/language-guide/feel-temporal-expressions",id:"reference/language-guide/feel-temporal-expressions",isDocsHomePage:!1,title:"Temporal expressions",description:"This document outlines temporal expressions and examples.",source:"@site/docs/reference/language-guide/feel-temporal-expressions.md",slug:"/reference/language-guide/feel-temporal-expressions",permalink:"/feel-scala/docs/reference/language-guide/feel-temporal-expressions",editUrl:"https://github.com/camunda/feel-scala/edit/master/docs/docs/reference/language-guide/feel-temporal-expressions.md",version:"current",sidebar:"Reference",previous:{title:"Context expressions",permalink:"/feel-scala/docs/reference/language-guide/feel-context-expressions"},next:{title:"Variables",permalink:"/feel-scala/docs/reference/language-guide/feel-variables"}},d=[{value:"Literal",id:"literal",children:[]},{value:"Addition",id:"addition",children:[]},{value:"Subtraction",id:"subtraction",children:[]},{value:"Multiplication",id:"multiplication",children:[]},{value:"Division",id:"division",children:[]},{value:"Properties",id:"properties",children:[]}],i={toc:d};function c(t){var e=t.components,n=Object(b.a)(t,["components"]);return Object(r.b)("wrapper",Object(l.a)({},i,n,{components:e,mdxType:"MDXLayout"}),Object(r.b)("h3",{id:"literal"},"Literal"),Object(r.b)("p",null,"Creates a new temporal value. A value can be written in one of the following ways:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"using a temporal function (e.g. ",Object(r.b)("inlineCode",{parentName:"li"},'date("2020-04-06")'),")"),Object(r.b)("li",{parentName:"ul"},"using the ",Object(r.b)("inlineCode",{parentName:"li"},"@")," - notation (e.g. ",Object(r.b)("inlineCode",{parentName:"li"},'@"2020-04-06"'),")")),Object(r.b)("pre",null,Object(r.b)("code",Object(l.a)({parentName:"pre"},{className:"language-js"}),'date("2020-04-06")\n@"2020-04-06"\n\ntime("08:00:00")\ntime("08:00:00+02:00")\ntime("08:00:00@Europe/Berlin")\n@"08:00:00"\n@"08:00:00+02:00"\n@"08:00:00@Europe/Berlin"\n\ndate and time("2020-04-06T08:00:00")\ndate and time("2020-04-06T08:00:00+02:00")\ndate and time("2020-04-06T08:00:00@Europe/Berlin")\n@"2020-04-06T08:00:00"\n@"2020-04-06T08:00:00+02:00"\n@"2020-04-06T08:00:00@Europe/Berlin"\n\nduration("P5D")\nduration("PT6H")\n@"P5D"\n@"PT6H"\n\nduration("P1Y6M")\nduration("P3M")\n@"P1Y6M"\n@"P3M"\n')),Object(r.b)("h3",{id:"addition"},"Addition"),Object(r.b)("table",null,Object(r.b)("tr",null,Object(r.b)("th",null,"First argument"),Object(r.b)("th",null,"Second argument"),Object(r.b)("th",null,"Result")),Object(r.b)("tr",null,Object(r.b)("td",null,"date"),Object(r.b)("td",null,"duration"),Object(r.b)("td",null,"date")),Object(r.b)("tr",null,Object(r.b)("td",null,"time"),Object(r.b)("td",null,"days-time-duration"),Object(r.b)("td",null,"time")),Object(r.b)("tr",null,Object(r.b)("td",null,"date-time"),Object(r.b)("td",null,"duration"),Object(r.b)("td",null,"date-time")),Object(r.b)("tr",null,Object(r.b)("td",null,"duration"),Object(r.b)("td",null,"date"),Object(r.b)("td",null,"date")),Object(r.b)("tr",null,Object(r.b)("td",null,"duration"),Object(r.b)("td",null,"time"),Object(r.b)("td",null,"time")),Object(r.b)("tr",null,Object(r.b)("td",null,"duration"),Object(r.b)("td",null,"date-time"),Object(r.b)("td",null,"date-time")),Object(r.b)("tr",null,Object(r.b)("td",null,"duration"),Object(r.b)("td",null,"duration"),Object(r.b)("td",null,"duration"))),Object(r.b)("pre",null,Object(r.b)("code",Object(l.a)({parentName:"pre"},{className:"language-js"}),'date("2020-04-06") + duration("P1D")\n// date("2020-04-07")\n\ntime("08:00:00") + duration("PT1H")\n// time("09:00:00")\n\ndate and time("2020-04-06T08:00:00") + duration("P7D")\n// date and time("2020-04-13T08:00:00")\n\nduration("P2D") + duration("P5D")\n// duration("P7D")\n')),Object(r.b)("h3",{id:"subtraction"},"Subtraction"),Object(r.b)("table",null,Object(r.b)("tr",null,Object(r.b)("th",null,"First argument"),Object(r.b)("th",null,"Second argument"),Object(r.b)("th",null,"Result")),Object(r.b)("tr",null,Object(r.b)("td",null,"date"),Object(r.b)("td",null,"date"),Object(r.b)("td",null,"days-time-duration")),Object(r.b)("tr",null,Object(r.b)("td",null,"date"),Object(r.b)("td",null,"duration"),Object(r.b)("td",null,"date")),Object(r.b)("tr",null,Object(r.b)("td",null,"time"),Object(r.b)("td",null,"time"),Object(r.b)("td",null,"days-time-duration")),Object(r.b)("tr",null,Object(r.b)("td",null,"time"),Object(r.b)("td",null,"days-time-duration"),Object(r.b)("td",null,"time")),Object(r.b)("tr",null,Object(r.b)("td",null,"date-time"),Object(r.b)("td",null,"date-time"),Object(r.b)("td",null,"days-time-duration")),Object(r.b)("tr",null,Object(r.b)("td",null,"date-time"),Object(r.b)("td",null,"duration"),Object(r.b)("td",null,"date-time")),Object(r.b)("tr",null,Object(r.b)("td",null,"days-time-duration"),Object(r.b)("td",null,"days-time-duration"),Object(r.b)("td",null,"days-time-duration")),Object(r.b)("tr",null,Object(r.b)("td",null,"years-months-duration"),Object(r.b)("td",null,"years-months-duration"),Object(r.b)("td",null,"years-months-duration"))),Object(r.b)("pre",null,Object(r.b)("code",Object(l.a)({parentName:"pre"},{className:"language-js"}),'date("2020-04-06") - date("2020-04-01")\n// duration("P5D")\n\ndate("2020-04-06") - duration("P5D")\n// date("2020-04-01")\n\ntime("08:00:00") - time("06:00:00")\n// duration("PT2H")\n\ntime("08:00:00") - duration("PT2H")\n// time("06:00:00")\n\nduration("P7D") - duration("P2D")\n// duration("P5D")\n\nduration("P1Y") - duration("P3M")\n// duration("P9M")\n')),Object(r.b)("h3",{id:"multiplication"},"Multiplication"),Object(r.b)("table",null,Object(r.b)("tr",null,Object(r.b)("th",null,"First argument"),Object(r.b)("th",null,"Second argument"),Object(r.b)("th",null,"Result")),Object(r.b)("tr",null,Object(r.b)("td",null,"days-time-duration"),Object(r.b)("td",null,"number"),Object(r.b)("td",null,"days-time-duration")),Object(r.b)("tr",null,Object(r.b)("td",null,"number"),Object(r.b)("td",null,"days-time-duration"),Object(r.b)("td",null,"days-time-duration")),Object(r.b)("tr",null,Object(r.b)("td",null,"years-months-duration"),Object(r.b)("td",null,"number"),Object(r.b)("td",null,"years-months-duration")),Object(r.b)("tr",null,Object(r.b)("td",null,"number"),Object(r.b)("td",null,"years-months-duration"),Object(r.b)("td",null,"years-months-duration"))),Object(r.b)("pre",null,Object(r.b)("code",Object(l.a)({parentName:"pre"},{className:"language-js"}),'duration("P1D") * 5\n// duration("P5D")\n\nduration("P1M") * 6\n// duration("P6M")\n')),Object(r.b)("h3",{id:"division"},"Division"),Object(r.b)("table",null,Object(r.b)("tr",null,Object(r.b)("th",null,"First argument"),Object(r.b)("th",null,"Second argument"),Object(r.b)("th",null,"Result")),Object(r.b)("tr",null,Object(r.b)("td",null,"days-time-duration"),Object(r.b)("td",null,"days-time-duration"),Object(r.b)("td",null,"number")),Object(r.b)("tr",null,Object(r.b)("td",null,"days-time-duration"),Object(r.b)("td",null,"number"),Object(r.b)("td",null,"days-time-duration")),Object(r.b)("tr",null,Object(r.b)("td",null,"years-months-duration"),Object(r.b)("td",null,"years-months-duration"),Object(r.b)("td",null,"number")),Object(r.b)("tr",null,Object(r.b)("td",null,"years-months-duration"),Object(r.b)("td",null,"number"),Object(r.b)("td",null,"years-months-duration"))),Object(r.b)("pre",null,Object(r.b)("code",Object(l.a)({parentName:"pre"},{className:"language-js"}),'duration("P5D") / duration("P1D")  \n// 5\n\nduration("P5D") / 5\n// duration("P1D")\n\nduration("P1Y") / duration("P1M")\n// 12\n\nduration("P1Y") / 12\n// duration("P1M")\n')),Object(r.b)("h3",{id:"properties"},"Properties"),Object(r.b)("p",null,"A temporal value has multiple properties for its components. The following properties are available\nfor the given types:"),Object(r.b)("table",null,Object(r.b)("tr",null,Object(r.b)("th",null,"Property"),Object(r.b)("th",null,"Available for"),Object(r.b)("th",null,"Description")),Object(r.b)("tr",null,Object(r.b)("td",null,"year"),Object(r.b)("td",null,"date, date-time"),Object(r.b)("td",null,"the year as number")),Object(r.b)("tr",null,Object(r.b)("td",null,"month"),Object(r.b)("td",null,"date, date-time"),Object(r.b)("td",null,"the month as number [1..12], where 1 is January")),Object(r.b)("tr",null,Object(r.b)("td",null,"day"),Object(r.b)("td",null,"date, date-time"),Object(r.b)("td",null,"the day of the month as number [1..31]")),Object(r.b)("tr",null,Object(r.b)("td",null,"weekday"),Object(r.b)("td",null,"date, date-time"),Object(r.b)("td",null,"the day of the week as number [1..7], where 1 is Monday")),Object(r.b)("tr",null,Object(r.b)("td",null,"hour"),Object(r.b)("td",null,"time, date-time"),Object(r.b)("td",null,"the hour of the day as number [0..23]")),Object(r.b)("tr",null,Object(r.b)("td",null,"minute"),Object(r.b)("td",null,"time, date-time"),Object(r.b)("td",null,"the minute of the hour as number [0..59]")),Object(r.b)("tr",null,Object(r.b)("td",null,"second"),Object(r.b)("td",null,"time, date-time"),Object(r.b)("td",null,"the second of the minute as number [0..59]")),Object(r.b)("tr",null,Object(r.b)("td",null,"time offset"),Object(r.b)("td",null,"time, date-time"),Object(r.b)("td",null,"the duration offset corresponding to the timezone or null")),Object(r.b)("tr",null,Object(r.b)("td",null,"timezone"),Object(r.b)("td",null,"time, date-time"),Object(r.b)("td",null,"the timezone identifier or null")),Object(r.b)("tr",null,Object(r.b)("td",null,"days"),Object(r.b)("td",null,"days-time-duration"),Object(r.b)("td",null,"the normalized days component as number")),Object(r.b)("tr",null,Object(r.b)("td",null,"hours"),Object(r.b)("td",null,"days-time-duration"),Object(r.b)("td",null,"the normalized hours component as number [0..23]")),Object(r.b)("tr",null,Object(r.b)("td",null,"minutes"),Object(r.b)("td",null,"days-time-duration"),Object(r.b)("td",null,"the normalized minutes component as number [0..59]")),Object(r.b)("tr",null,Object(r.b)("td",null,"seconds"),Object(r.b)("td",null,"days-time-duration"),Object(r.b)("td",null,"the normalized seconds component as number [0..59]")),Object(r.b)("tr",null,Object(r.b)("td",null,"years"),Object(r.b)("td",null,"years-months-duration"),Object(r.b)("td",null,"the normalized years component as number")),Object(r.b)("tr",null,Object(r.b)("td",null,"months"),Object(r.b)("td",null,"years-months-duration"),Object(r.b)("td",null,"the normalized months component as number [0..11]"))),Object(r.b)("pre",null,Object(r.b)("code",Object(l.a)({parentName:"pre"},{className:"language-js"}),'date("2020-04-06").year\n// 2020\n\ndate("2020-04-06").month\n// 4\n\ndate("2020-04-06").weekday\n// 1\n\ntime("08:00:00").hour\n// 8\n\ndate and time("2020-04-06T08:00:00+02:00").time offset\n// duration("PT2H")\n\ndate and time("2020-04-06T08:00:00@Europe/Berlin").timezone\n// "Europe/Berlin"\n\nduration("PT2H30M").hours\n// 2\n\nduration("PT2H30M").minutes\n// 30\n\nduration("P6M").months\n// 6\n')))}c.isMDXComponent=!0},216:function(t,e,n){"use strict";n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return j}));var l=n(0),b=n.n(l);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function u(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);e&&(l=l.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,l)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?u(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function d(t,e){if(null==t)return{};var n,l,b=function(t,e){if(null==t)return{};var n,l,b={},r=Object.keys(t);for(l=0;l<r.length;l++)n=r[l],e.indexOf(n)>=0||(b[n]=t[n]);return b}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(l=0;l<r.length;l++)n=r[l],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(b[n]=t[n])}return b}var i=b.a.createContext({}),c=function(t){var e=b.a.useContext(i),n=e;return t&&(n="function"==typeof t?t(e):a(a({},e),t)),n},o=function(t){var e=c(t.components);return b.a.createElement(i.Provider,{value:e},t.children)},O={inlineCode:"code",wrapper:function(t){var e=t.children;return b.a.createElement(b.a.Fragment,{},e)}},s=b.a.forwardRef((function(t,e){var n=t.components,l=t.mdxType,r=t.originalType,u=t.parentName,i=d(t,["components","mdxType","originalType","parentName"]),o=c(n),s=l,j=o["".concat(u,".").concat(s)]||o[s]||O[s]||r;return n?b.a.createElement(j,a(a({ref:e},i),{},{components:n})):b.a.createElement(j,a({ref:e},i))}));function j(t,e){var n=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var r=n.length,u=new Array(r);u[0]=s;var a={};for(var d in e)hasOwnProperty.call(e,d)&&(a[d]=e[d]);a.originalType=t,a.mdxType="string"==typeof t?t:l,u[1]=a;for(var i=2;i<r;i++)u[i]=n[i];return b.a.createElement.apply(null,u)}return b.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"}}]);