"use strict";(self.webpackChunkfeel_scala=self.webpackChunkfeel_scala||[]).push([[4437],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(n),f=r,m=d["".concat(s,".").concat(f)]||d[f]||u[f]||o;return n?a.createElement(m,l(l({ref:t},p),{},{components:n})):a.createElement(m,l({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4808:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const o={id:"get-started",title:"Get Started",slug:"/reference/"},l=void 0,i={unversionedId:"reference/get-started",id:"version-1.15/reference/get-started",title:"Get Started",description:"Welcome to the documentation of the FEEL-Scala engine!",source:"@site/versioned_docs/version-1.15/reference/get-started.md",sourceDirName:"reference",slug:"/reference/",permalink:"/feel-scala/docs/1.15/reference/",draft:!1,editUrl:"https://github.com/camunda/feel-scala/edit/main/docs/versioned_docs/version-1.15/reference/get-started.md",tags:[],version:"1.15",frontMatter:{id:"get-started",title:"Get Started",slug:"/reference/"},sidebar:"version-1.15/Reference",next:{title:"What is FEEL?",permalink:"/feel-scala/docs/1.15/reference/what-is-feel"}},s={},c=[{value:"FEEL REPL",id:"feel-repl",level:2},{value:"Install",id:"install",level:3},{value:"Usage",id:"usage",level:3}],p={toc:c};function u(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Welcome to the documentation of the FEEL-Scala engine!"),(0,r.kt)("p",null,"If you're ",(0,r.kt)("strong",{parentName:"p"},"new")," and don't know anything about FEEL then have a look\nat ",(0,r.kt)("a",{parentName:"p",href:"/feel-scala/docs/1.15/reference/what-is-feel"},"What is FEEL")," first."),(0,r.kt)("p",null,"If you want to know how to ",(0,r.kt)("strong",{parentName:"p"},"write")," FEEL expressions then have a look at\nthe ",(0,r.kt)("a",{parentName:"p",href:"/feel-scala/docs/1.15/reference/language-guide/language-guide-introduction"},"Language Guide"),"."),(0,r.kt)("p",null,"If you want to ",(0,r.kt)("strong",{parentName:"p"},"integrate")," the FEEL engine in your application then have a look at\nthe ",(0,r.kt)("a",{parentName:"p",href:"/feel-scala/docs/1.15/reference/developer-guide/developer-guide-introduction"},"Developer Guide"),"."),(0,r.kt)("h2",{id:"feel-repl"},"FEEL REPL"),(0,r.kt)("p",null,"The easiest way to try out your FEEL expressions in development is to use the REPL\n(Read-Eval-Print-Loop) of the FEEL engine. It is a simple script based\non ",(0,r.kt)("a",{parentName:"p",href:"http://ammonite.io/"},"Ammonite")," (aka Scala Scripting) that downloads the dependency to the FEEL\nengine and initialize it for you."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"the-feel-repl",src:n(5249).Z,width:"589",height:"307"})),(0,r.kt)("h3",{id:"install"},"Install"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Download Ammonite: ",(0,r.kt)("a",{parentName:"li",href:"http://ammonite.io/#Ammonite-REPL"},"http://ammonite.io/#Ammonite-REPL"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"On Linux:")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"sudo sh -c '(echo \"#!/usr/bin/env sh\" && curl -L https://github.com/com-lihaoyi/Ammonite/releases/download/2.4.0/2.13-2.4.0) > /usr/local/bin/amm && chmod +x /usr/local/bin/amm' && amm\n")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"On Mac:  ")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"brew install ammonite-repl\n"))),(0,r.kt)("li",{parentName:"ul"},"Download the script ",(0,r.kt)("a",{parentName:"li",href:"https://raw.githubusercontent.com/camunda/feel-scala/master/feel-repl.sc"},"feel-repl.sc")," or clone the ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/camunda/feel-scala"},"Git repository"))),(0,r.kt)("h3",{id:"usage"},"Usage"),(0,r.kt)("p",null,"Run the following script to start the REPL:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"amm --predef feel-repl.sc\n")),(0,r.kt)("p",null,"In the REPL, use one of the following functions to evaluate a FEEL expression:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'feel("1 + 3")\n// evaluate an expression without any context\n\nval context = Map("x" -> 3)\nfeel("1 + x", context)\n// evaluate an expression with a map-based context\n\nfeel("1 + x", "{ \\"x\\": 3}")\n// evaluate an expression with a JSON context\n\nfeel(""" date("2020-04-06") + duration("P3D") """)\n// evaluate an expression ignoring any quotes in the expression\n\n//----------------------------------------------------------------------\n\nunaryTests("> 3", 5)\n// evaluate a unary-tests with a given input value\n\nunaryTests("> 3", 5)\n// evaluate a unary-tests with a given input value\n\nval context = Map("x" -> 3)\nunaryTests("> x", 5, context)\n// evaluate a unary-tests with a given input value and map-based context\n\nunaryTests("> x", "5", "{ \\"x\\": 3}")\n// evaluate a unary-tests with a given JSON input value and JSON context\n')))}u.isMDXComponent=!0},5249:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/feel-repl-8f8d9004c2e798dacb057de84482d1f6.png"}}]);