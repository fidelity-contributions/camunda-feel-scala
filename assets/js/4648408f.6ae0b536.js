"use strict";(self.webpackChunkfeel_scala=self.webpackChunkfeel_scala||[]).push([[9332],{4863:(e,t,n)=>{n.d(t,{Z:()=>r});var l=n(7462),a=n(7294),s=n(5671),o=n(3746);const r=e=>{let{children:t,onChange:n,language:r}=e;const i=(0,a.useRef)(null),[c,u]=(0,a.useState)(t),p=(0,a.useCallback)((e=>{const t=e.slice(0,-1);u(t),n(t)}),[]);return(0,s.Y)(i,p,{indentation:2}),a.createElement(o.ZP,(0,l.Z)({},o.lG,{code:c,language:r}),(e=>{let{className:t,style:n,tokens:l,getTokenProps:s}=e;return a.createElement("pre",{className:t,style:n,ref:i},l.map(((e,t)=>a.createElement(a.Fragment,{key:t},e.filter((e=>!e.empty)).map(((e,t)=>a.createElement("span",s({token:e,key:t})))),"\n"))))}))}},4294:(e,t,n)=>{n.d(t,{Z:()=>i});var l=n(7294),a=n(9669),s=n.n(a),o=n(4863),r=n(9537);const i=e=>{let{defaultExpression:t,feelContext:n,metadata:a,onResultCallback:i,onErrorCallback:c}=e;n&&(n=JSON.stringify(JSON.parse(n),null,2));const[u,p]=l.useState(t),[d,m]=l.useState(n),[g,h]=l.useState("<click 'Evaluate' to see the result of the expression>"),[f,k]=l.useState(null),[v,E]=l.useState(null),x=/^.+(?<line>\d+):(?<position>\d+).+$/gm,b=/^.+at position (?<position>\d+)$/gm;function y(e,t){h(null),k(e),E(t),c&&c(e)}return l.createElement("div",null,l.createElement("h2",null,"Expression"),l.createElement(o.Z,{onChange:p,language:"js"},u),n&&l.createElement("div",null,l.createElement("h2",null,"Context"),l.createElement("i",null,"A JSON document that is used to resolve ",l.createElement("strong",null,"variables")," ","in the expression."),l.createElement(o.Z,{onChange:m,language:"json"},d)),l.createElement("button",{onClick:function(){try{h("<evaluating the expression...>"),E(null);!function(e){s().post("https://feel.upgradingdave.com/api/v1/feel/evaluate",{expression:u,context:e,metadata:{...a}},{headers:{accept:"*/*","content-type":"application/json"}}).then((e=>{var t;if(null!=e&&null!=(t=e.data)&&t.error){var n,l;const t=e.data.error,a=x.exec(t);y({message:t,line:null==a||null==(n=a.groups)?void 0:n.line,position:null==a||null==(l=a.groups)?void 0:l.position},e.data.warnings)}else!function(e){k(null);const t=JSON.stringify(e.result);h(t),e.warnings.length>=1&&E(e.warnings);i&&i(t)}(e.data)}))}(n?JSON.parse(d):{})}catch(t){var e;const n=b.exec(t.message);y({message:"failed to parse context: "+t.message,position:null==n||null==(e=n.groups)?void 0:e.position})}},className:"button button--primary button--lg"},"Evaluate"),l.createElement("br",null),l.createElement("br",null),l.createElement("h2",null,"Result"),l.createElement(r.Z,{title:(()=>{const e=null!=f&&f.line?" on line "+f.line:"",t=null!=f&&f.position?" at position "+f.position:"";return f&&"Error"+e+t})(),language:"json"},g||(null==f?void 0:f.message)),l.createElement("br",null),l.createElement("h2",null,"Warnings"),l.createElement(r.Z,null,(null==v?void 0:v.map(((e,t)=>l.createElement("li",{key:t},"[",e.type,"] ",e.message))))||"<none>"))}},2221:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>p,default:()=>f,frontMatter:()=>u,metadata:()=>d,toc:()=>g});var l,a=n(7462),s=n(1880),o=(n(7294),n(3905)),r=n(4294),i=n(6518),c=n.n(i);const u={id:"challenge",title:"The quest begins"},p=void 0,d={unversionedId:"learn/challenge/challenge",id:"version-1.17/learn/challenge/challenge",title:"The quest begins",description:"Welcome to our challenge.",source:"@site/versioned_docs/version-1.17/learn/challenge/challenge.mdx",sourceDirName:"learn/challenge",slug:"/learn/challenge/",permalink:"/feel-scala/docs/learn/challenge/",draft:!1,editUrl:"https://github.com/camunda/feel-scala/edit/main/docs/versioned_docs/version-1.17/learn/challenge/challenge.mdx",tags:[],version:"1.17",frontMatter:{id:"challenge",title:"The quest begins"},sidebar:"Learn",previous:{title:"Context expressions",permalink:"/feel-scala/docs/learn/samples/context-samples"},next:{title:"Chapter 1",permalink:"/feel-scala/docs/learn/challenge/chapter-1"}},m={},g=[],h={toc:g};function f(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,a.Z)({},h,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Welcome to our challenge. \ud83d\udc4b"),(0,o.kt)("p",null,"We'll do our best to guide you through the different capabilities\nof ",(0,o.kt)("a",{parentName:"p",href:"/feel-scala/docs/next/reference/what-is-feel"},"FEEL")," and hopefully make the\nprocess fun. \ud83c\udf89"),(0,o.kt)("p",null,'We are enlisting you to help us guide our friend "Zee" to complete a quest from Spain \ud83c\uddea\ud83c\uddf8 to Berlin\n\ud83c\udde9\ud83c\uddea in time for CamundaCon (2022). With the use of FEEL we\'ll be able to help in the journey.'),(0,o.kt)("p",null,'Before we start, let\'s say "Hi" to Zee:'),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Zee",src:n(5710).Z,width:"262",height:"393"})),(0,o.kt)("p",null,"Use the interactive editor below to evaluate the\n",(0,o.kt)("a",{parentName:"p",href:"/feel-scala/docs/next/reference/language-guide/feel-expressions-introduction"},"FEEL expression")," and greet Zee."),(0,o.kt)(r.Z,{defaultExpression:c()(l||(l=(0,s.Z)(['\n    "Hello Zee"\n    ']))),metadata:{page:"challenge-0"},mdxType:"LiveFeel"}),(0,o.kt)("p",null,"Zee is happy to have you on board. So, let the journey begin. \ud83d\ude80"),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"This challenge is an experiment. It was created as part of our Camunda Summer Hack Days 2022.")))}f.isMDXComponent=!0},5710:(e,t,n)=>{n.d(t,{Z:()=>l});const l=n.p+"assets/images/zee-44d8dee753af98307526e73c84032a2d.png"}}]);