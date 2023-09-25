"use strict";(self.webpackChunkfeel_scala=self.webpackChunkfeel_scala||[]).push([[461],{4863:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(7462),l=n(7294),s=n(5671),r=n(3746);const o=e=>{let{children:t,onChange:n,language:o}=e;const i=(0,l.useRef)(null),[u,c]=(0,l.useState)(t),p=(0,l.useCallback)((e=>{const t=e.slice(0,-1);c(t),n(t)}),[]);return(0,s.Y)(i,p,{indentation:2}),l.createElement(r.ZP,(0,a.Z)({},r.lG,{code:u,language:o}),(e=>{let{className:t,style:n,tokens:a,getTokenProps:s}=e;return l.createElement("pre",{className:t,style:n,ref:i},a.map(((e,t)=>l.createElement(l.Fragment,{key:t},e.filter((e=>!e.empty)).map(((e,t)=>l.createElement("span",s({token:e,key:t})))),"\n"))))}))}},4294:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(7294),l=n(9669),s=n.n(l),r=n(4863),o=n(9537);const i=e=>{let{defaultExpression:t,feelContext:n,metadata:l,onResultCallback:i,onErrorCallback:u}=e;n&&(n=JSON.stringify(JSON.parse(n),null,2));const[c,p]=a.useState(t),[d,m]=a.useState(n),[g,h]=a.useState("<click 'Evaluate' to see the result of the expression>"),[f,v]=a.useState(null),[k,E]=a.useState(null),b=/^.+(?<line>\d+):(?<position>\d+).+$/gm,y=/^.+at position (?<position>\d+)$/gm;function x(e,t){h(null),v(e),E(t),u&&u(e)}return a.createElement("div",null,a.createElement("h2",null,"Expression"),a.createElement(r.Z,{onChange:p,language:"js"},c),n&&a.createElement("div",null,a.createElement("h2",null,"Context"),a.createElement("i",null,"A JSON document that is used to resolve ",a.createElement("strong",null,"variables")," ","in the expression."),a.createElement(r.Z,{onChange:m,language:"json"},d)),a.createElement("button",{onClick:function(){try{h("<evaluating the expression...>"),E(null);!function(e){s().post("https://feel.upgradingdave.com/api/v1/feel/evaluate",{expression:c,context:e,metadata:{...l}},{headers:{accept:"*/*","content-type":"application/json"}}).then((e=>{var t;if(null!=e&&null!=(t=e.data)&&t.error){var n,a;const t=e.data.error,l=b.exec(t);x({message:t,line:null==l||null==(n=l.groups)?void 0:n.line,position:null==l||null==(a=l.groups)?void 0:a.position},e.data.warnings)}else!function(e){v(null);const t=JSON.stringify(e.result);h(t),e.warnings.length>=1&&E(e.warnings);i&&i(t)}(e.data)}))}(n?JSON.parse(d):{})}catch(t){var e;const n=y.exec(t.message);x({message:"failed to parse context: "+t.message,position:null==n||null==(e=n.groups)?void 0:e.position})}},className:"button button--primary button--lg"},"Evaluate"),a.createElement("br",null),a.createElement("br",null),a.createElement("h2",null,"Result"),a.createElement(o.Z,{title:(()=>{const e=null!=f&&f.line?" on line "+f.line:"",t=null!=f&&f.position?" at position "+f.position:"";return f&&"Error"+e+t})(),language:"json"},g||(null==f?void 0:f.message)),a.createElement("br",null),a.createElement("h2",null,"Warnings"),a.createElement(o.Z,null,(null==k?void 0:k.map(((e,t)=>a.createElement("li",{key:t},"[",e.type,"] ",e.message))))||"<none>"))}},3235:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>p,default:()=>f,frontMatter:()=>c,metadata:()=>d,toc:()=>g});var a,l=n(7462),s=n(1880),r=(n(7294),n(3905)),o=n(4294),i=n(6518),u=n.n(i);const c={id:"chapter-1",title:"Chapter 1"},p=void 0,d={unversionedId:"learn/challenge/chapter-1",id:"version-1.17/learn/challenge/chapter-1",title:"Chapter 1",description:"Let's start our quest. FEEL allows you to use basic",source:"@site/versioned_docs/version-1.17/learn/challenge/chapter-1.mdx",sourceDirName:"learn/challenge",slug:"/learn/challenge/chapter-1",permalink:"/feel-scala/docs/learn/challenge/chapter-1",draft:!1,editUrl:"https://github.com/camunda/feel-scala/edit/main/docs/versioned_docs/version-1.17/learn/challenge/chapter-1.mdx",tags:[],version:"1.17",frontMatter:{id:"chapter-1",title:"Chapter 1"},sidebar:"Learn",previous:{title:"The quest begins",permalink:"/feel-scala/docs/learn/challenge/"},next:{title:"Chapter 2",permalink:"/feel-scala/docs/learn/challenge/chapter-2"}},m={},g=[],h={toc:g};function f(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,l.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Let's start our quest. \ud83d\udea9 FEEL allows you to use basic\n",(0,r.kt)("a",{parentName:"p",href:"/feel-scala/docs/next/reference/language-guide/feel-numeric-expressions"},"numeric calculations")," like addition,\nsubtraction and multiplication to name a few. Our friend arrived in Spain by boat, specifically\nCadiz. The goal is to reach Pamplona (which is 1,030.8 kms away)."),(0,r.kt)("p",null,"As part of the quest, Zee received magical items \u2728 and decided to use The Boots of Hermes\n\ud83d\udc5e, which give its wearer a speed of 48.2 kms/hour."),(0,r.kt)("p",null,"Using numeric operators, how many hours would it take to get there? Consider resting for 30 minutes\nevery 5 hours. Let's also round up the number for total resting time by using a\n",(0,r.kt)("a",{parentName:"p",href:"/feel-scala/docs/next/reference/builtin-functions/feel-built-in-functions-numeric"},"numeric function"),"."),(0,r.kt)(o.Z,{defaultExpression:u()(a||(a=(0,s.Z)(["\n      // change formula considering resting time plus total time\n      round up(distance / speed, 0)"]))),feelContext:'{"distance": 1030.8, "speed": 48.2, "restInHrs": 0.5, "restInterval": 5}',metadata:{page:"challenge-1"},mdxType:"LiveFeel"}),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Solution"),(0,r.kt)("div",null,(0,r.kt)("div",null,"It would take Zee 24 hours to complete the trip."),(0,r.kt)("br",null),(0,r.kt)("pre",{title:"Expression"},"round up(restInHrs * (distance / speed) / restInterval + distance / speed, 0)"))))}f.isMDXComponent=!0}}]);