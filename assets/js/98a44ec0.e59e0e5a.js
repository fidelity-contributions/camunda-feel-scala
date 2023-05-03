"use strict";(self.webpackChunkfeel_scala=self.webpackChunkfeel_scala||[]).push([[7958],{5478:(e,t,n)=>{n.d(t,{Z:()=>p});var l=n(7294),a=n(9669),s=n.n(a),o=n(7462),r=n(5671),i=n(3746);const c=e=>{let{children:t,onChange:n,language:a}=e;const s=(0,l.useRef)(null),[c,u]=(0,l.useState)(t),p=(0,l.useCallback)((e=>{const t=e.slice(0,-1);u(t),n(t)}),[]);return(0,r.Y)(s,p,{indentation:2}),l.createElement(i.ZP,(0,o.Z)({},i.lG,{code:c,language:a}),(e=>{let{className:t,style:n,tokens:a,getTokenProps:o}=e;return l.createElement("pre",{className:t,style:n,ref:s},a.map(((e,t)=>l.createElement(l.Fragment,{key:t},e.filter((e=>!e.empty)).map(((e,t)=>l.createElement("span",o({token:e,key:t})))),"\n"))))}))};var u=n(9537);const p=e=>{let{defaultExpression:t,feelContext:n,metadata:a,onResultCallback:o,onErrorCallback:r}=e;n&&(n=JSON.stringify(JSON.parse(n),null,2));const[i,p]=l.useState(t),[d,m]=l.useState(n),[g,h]=l.useState("<click 'Evaluate' to see the result of the expression>"),[f,k]=l.useState(null),v=/^.+(?<line>\d+):(?<position>\d+).+$/gm,E=/^.+at position (?<position>\d+)$/gm;function x(e){h(null),k(e),r&&r(e)}return l.createElement("div",null,l.createElement("h2",null,"Expression"),l.createElement(c,{onChange:p,language:"js"},i),n&&l.createElement("div",null,l.createElement("h2",null,"Context"),l.createElement("i",null,"A JSON document that is used to resolve ",l.createElement("strong",null,"variables")," ","in the expression."),l.createElement(c,{onChange:m,language:"json"},d)),l.createElement("button",{onClick:function(){try{h("<evaluating the expression...>");!function(e){s().post("https://feel-service.camunda.com/process/start",{expression:i,context:e,metadata:{...a}},{headers:{accept:"*/*","content-type":"application/json"}}).then((e=>{var t;if(null!=e&&null!=(t=e.data)&&t.error){var n,l;const t=e.data.error,a=v.exec(t);x({message:t,line:null==a||null==(n=a.groups)?void 0:n.line,position:null==a||null==(l=a.groups)?void 0:l.position})}else!function(e){k(null),h(e),o&&o(e)}(JSON.stringify(e.data.result))}))}(n?JSON.parse(d):{})}catch(t){var e;const n=E.exec(t.message);x({message:"failed to parse context: "+t.message,position:null==n||null==(e=n.groups)?void 0:e.position})}},className:"button button--primary button--lg"},"Evaluate"),l.createElement("br",null),l.createElement("br",null),l.createElement("h2",null,"Result"),l.createElement(u.Z,{title:(()=>{const e=null!=f&&f.line?" on line "+f.line:"",t=null!=f&&f.position?" at position "+f.position:"";return f&&"Error"+e+t})(),language:"json"},g||(null==f?void 0:f.message)))}},7158:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>p,default:()=>f,frontMatter:()=>u,metadata:()=>d,toc:()=>g});var l,a=n(7462),s=n(1880),o=(n(7294),n(3905)),r=n(5478),i=n(6518),c=n.n(i);const u={id:"challenge",title:"The quest begins"},p=void 0,d={unversionedId:"learn/challenge/challenge",id:"version-1.16/learn/challenge/challenge",title:"The quest begins",description:"Welcome to our challenge.",source:"@site/versioned_docs/version-1.16/learn/challenge/challenge.mdx",sourceDirName:"learn/challenge",slug:"/learn/challenge/",permalink:"/feel-scala/docs/learn/challenge/",draft:!1,editUrl:"https://github.com/camunda/feel-scala/edit/main/docs/versioned_docs/version-1.16/learn/challenge/challenge.mdx",tags:[],version:"1.16",frontMatter:{id:"challenge",title:"The quest begins"},sidebar:"Learn",previous:{title:"Context expressions",permalink:"/feel-scala/docs/learn/samples/context-samples"},next:{title:"Chapter 1",permalink:"/feel-scala/docs/learn/challenge/chapter-1"}},m={},g=[],h={toc:g};function f(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,a.Z)({},h,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Welcome to our challenge. \ud83d\udc4b"),(0,o.kt)("p",null,"We'll do our best to guide you through the different capabilities\nof ",(0,o.kt)("a",{parentName:"p",href:"/feel-scala/docs/next/reference/what-is-feel"},"FEEL")," and hopefully make the\nprocess fun. \ud83c\udf89"),(0,o.kt)("p",null,'We are enlisting you to help us guide our friend "Zee" to complete a quest from Spain \ud83c\uddea\ud83c\uddf8 to Berlin\n\ud83c\udde9\ud83c\uddea in time for CamundaCon (2022). With the use of FEEL we\'ll be able to help in the journey.'),(0,o.kt)("p",null,'Before we start, let\'s say "Hi" to Zee:'),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Zee",src:n(5710).Z,width:"262",height:"393"})),(0,o.kt)("p",null,"Use the interactive editor below to evaluate the\n",(0,o.kt)("a",{parentName:"p",href:"/feel-scala/docs/next/reference/language-guide/feel-expressions-introduction"},"FEEL expression")," and greet Zee."),(0,o.kt)(r.Z,{defaultExpression:c()(l||(l=(0,s.Z)(['\n    "Hello Zee"\n    ']))),metadata:{page:"challenge-0"},mdxType:"LiveFeel"}),(0,o.kt)("p",null,"Zee is happy to have you on board. So, let the journey begin. \ud83d\ude80"),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"This challenge is an experiment. It was created as part of our Camunda Summer Hack Days 2022.")))}f.isMDXComponent=!0},5710:(e,t,n)=>{n.d(t,{Z:()=>l});const l=n.p+"assets/images/zee-44d8dee753af98307526e73c84032a2d.png"}}]);