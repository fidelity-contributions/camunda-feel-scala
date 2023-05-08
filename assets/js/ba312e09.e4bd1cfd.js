"use strict";(self.webpackChunkfeel_scala=self.webpackChunkfeel_scala||[]).push([[5490],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),c=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(a),m=r,f=d["".concat(i,".").concat(m)]||d[m]||u[m]||l;return a?n.createElement(f,o(o({ref:t},p),{},{components:a})):n.createElement(f,o({ref:t},p))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<l;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},6042:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var n=a(7462),r=(a(7294),a(3905));const l={id:"temporal-samples",title:"Temporal Samples"},o=void 0,s={unversionedId:"samples/temporal-samples",id:"version-1.13/samples/temporal-samples",title:"Temporal Samples",description:"Compare a Date with Offset",source:"@site/versioned_docs/version-1.13/samples/temporal-samples.md",sourceDirName:"samples",slug:"/samples/temporal-samples",permalink:"/feel-scala/docs/1.13/samples/temporal-samples",draft:!1,editUrl:"https://github.com/camunda/feel-scala/edit/main/docs/versioned_docs/version-1.13/samples/temporal-samples.md",tags:[],version:"1.13",frontMatter:{id:"temporal-samples",title:"Temporal Samples"},sidebar:"version-1.13/Samples",previous:{title:"Samples",permalink:"/feel-scala/docs/1.13/samples/"},next:{title:"List Samples",permalink:"/feel-scala/docs/1.13/samples/list-samples"}},i={},c=[{value:"Compare a Date with Offset",id:"compare-a-date-with-offset",level:2},{value:"Calculate the Age",id:"calculate-the-age",level:2},{value:"Check for Weekend",id:"check-for-weekend",level:2},{value:"Calculate the Duration between Dates",id:"calculate-the-duration-between-dates",level:2},{value:"Calculate the Next Weekday",id:"calculate-the-next-weekday",level:2}],p={toc:c};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"compare-a-date-with-offset"},"Compare a Date with Offset"),(0,r.kt)("p",null,"Check if a date is at least 6 months before another."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'date1 < date2 + duration("P6M")\n')),(0,r.kt)("h2",{id:"calculate-the-age"},"Calculate the Age"),(0,r.kt)("p",null,"Return the current age of a person based on a given birthday."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"years and months duration(date(birthday), today()).years\n")),(0,r.kt)("h2",{id:"check-for-weekend"},"Check for Weekend"),(0,r.kt)("p",null,"Check if the current day is on weekend or not."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'day of week(today()) in ("Saturday","Sunday")\n')),(0,r.kt)("h2",{id:"calculate-the-duration-between-dates"},"Calculate the Duration between Dates"),(0,r.kt)("p",null,"Return the duration between now and the next Tuesday at 08:00."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'(for x in 1..7 \n  return date and time(today(),time("08:00:00Z")) \n    + duration("P"+string(x)+"D")\n)[day of week(item) = "Tuesday"][1] - now()\n')),(0,r.kt)("h2",{id:"calculate-the-next-weekday"},"Calculate the Next Weekday"),(0,r.kt)("p",null,"Return the next day that is not a weekend at 00:00."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'(for x in 1..3 \n  return date and time(today(),time("00:00:00Z")) \n    + duration("P"+string(x)+"D")\n)[not(day of week(item) in ("Saturday","Sunday"))][1]\n')))}u.isMDXComponent=!0}}]);