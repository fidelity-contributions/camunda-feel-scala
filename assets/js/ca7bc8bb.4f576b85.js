"use strict";(self.webpackChunkfeel_scala=self.webpackChunkfeel_scala||[]).push([[2941],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=p(n),d=r,f=m["".concat(s,".").concat(d)]||m[d]||c[d]||l;return n?a.createElement(f,o(o({ref:t},u),{},{components:n})):a.createElement(f,o({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},516:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const l={id:"repl",title:"FEEL REPL (local)"},o="FEEL REPL",i={unversionedId:"playground/repl",id:"version-1.16/playground/repl",title:"FEEL REPL (local)",description:"The easiest way to try out your FEEL expressions in development locally is to use the REPL",source:"@site/versioned_docs/version-1.16/playground/repl.md",sourceDirName:"playground",slug:"/playground/repl",permalink:"/feel-scala/docs/playground/repl",draft:!1,editUrl:"https://github.com/camunda/feel-scala/edit/main/docs/versioned_docs/version-1.16/playground/repl.md",tags:[],version:"1.16",frontMatter:{id:"repl",title:"FEEL REPL (local)"},sidebar:"Playground",previous:{title:"FEEL Playground (online)",permalink:"/feel-scala/docs/playground/"}},s={},p=[{value:"Install",id:"install",level:2},{value:"Usage",id:"usage",level:2}],u={toc:p};function c(e){let{components:t,...l}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"feel-repl"},"FEEL REPL"),(0,r.kt)("p",null,"The easiest way to try out your FEEL expressions in development locally is to use the REPL\n(Read-Eval-Print-Loop) of the FEEL engine. It is a simple script based\non ",(0,r.kt)("a",{parentName:"p",href:"http://ammonite.io/"},"Ammonite")," (aka Scala Scripting) that downloads the dependency to the FEEL\nengine and initialize it for you."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"the-feel-repl",src:n(4196).Z,width:"589",height:"307"})),(0,r.kt)("h2",{id:"install"},"Install"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Download Ammonite: ",(0,r.kt)("a",{parentName:"li",href:"http://ammonite.io/#Ammonite-REPL"},"http://ammonite.io/#Ammonite-REPL"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"On Linux:")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"sudo sh -c '(echo \"#!/usr/bin/env sh\" && curl -L https://github.com/com-lihaoyi/Ammonite/releases/download/2.4.0/2.13-2.4.0) > /usr/local/bin/amm && chmod +x /usr/local/bin/amm' && amm\n")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"On Mac:  ")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"brew install ammonite-repl\n"))),(0,r.kt)("li",{parentName:"ul"},"Download the script ",(0,r.kt)("a",{parentName:"li",href:"https://raw.githubusercontent.com/camunda/feel-scala/master/feel-repl.sc"},"feel-repl.sc")," or clone the ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/camunda/feel-scala"},"Git repository"))),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("p",null,"Run the following script to start the REPL:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"amm --predef feel-repl.sc\n")),(0,r.kt)("p",null,"In the REPL, use one of the following functions to evaluate a FEEL expression:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'feel("1 + 3")\n// evaluate an expression without any context\n\nval context = Map("x" -> 3)\nfeel("1 + x", context)\n// evaluate an expression with a map-based context\n\nfeel("1 + x", "{ \\"x\\": 3}")\n// evaluate an expression with a JSON context\n\nfeel(""" date("2020-04-06") + duration("P3D") """)\n// evaluate an expression ignoring any quotes in the expression\n\n//----------------------------------------------------------------------\n\nunaryTests("> 3", 5)\n// evaluate a unary-tests with a given input value\n\nunaryTests("> 3", 5)\n// evaluate a unary-tests with a given input value\n\nval context = Map("x" -> 3)\nunaryTests("> x", 5, context)\n// evaluate a unary-tests with a given input value and map-based context\n\nunaryTests("> x", "5", "{ \\"x\\": 3}")\n// evaluate a unary-tests with a given JSON input value and JSON context\n')))}c.isMDXComponent=!0},4196:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/feel-repl-8f8d9004c2e798dacb057de84482d1f6.png"}}]);