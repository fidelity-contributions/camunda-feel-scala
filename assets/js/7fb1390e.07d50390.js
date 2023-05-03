"use strict";(self.webpackChunkfeel_scala=self.webpackChunkfeel_scala||[]).push([[431],{5478:(e,t,n)=>{n.d(t,{Z:()=>p});var a=n(7294),l=n(9669),s=n.n(l),r=n(7462),o=n(5671),i=n(3746);const c=e=>{let{children:t,onChange:n,language:l}=e;const s=(0,a.useRef)(null),[c,u]=(0,a.useState)(t),p=(0,a.useCallback)((e=>{const t=e.slice(0,-1);u(t),n(t)}),[]);return(0,o.Y)(s,p,{indentation:2}),a.createElement(i.ZP,(0,r.Z)({},i.lG,{code:c,language:l}),(e=>{let{className:t,style:n,tokens:l,getTokenProps:r}=e;return a.createElement("pre",{className:t,style:n,ref:s},l.map(((e,t)=>a.createElement(a.Fragment,{key:t},e.filter((e=>!e.empty)).map(((e,t)=>a.createElement("span",r({token:e,key:t})))),"\n"))))}))};var u=n(9537);const p=e=>{let{defaultExpression:t,feelContext:n,metadata:l,onResultCallback:r,onErrorCallback:o}=e;n&&(n=JSON.stringify(JSON.parse(n),null,2));const[i,p]=a.useState(t),[d,h]=a.useState(n),[m,g]=a.useState("<click 'Evaluate' to see the result of the expression>"),[f,v]=a.useState(null),k=/^.+(?<line>\d+):(?<position>\d+).+$/gm,E=/^.+at position (?<position>\d+)$/gm;function x(e){g(null),v(e),o&&o(e)}return a.createElement("div",null,a.createElement("h2",null,"Expression"),a.createElement(c,{onChange:p,language:"js"},i),n&&a.createElement("div",null,a.createElement("h2",null,"Context"),a.createElement("i",null,"A JSON document that is used to resolve ",a.createElement("strong",null,"variables")," ","in the expression."),a.createElement(c,{onChange:h,language:"json"},d)),a.createElement("button",{onClick:function(){try{g("<evaluating the expression...>");!function(e){s().post("https://feel-service.camunda.com/process/start",{expression:i,context:e,metadata:{...l}},{headers:{accept:"*/*","content-type":"application/json"}}).then((e=>{var t;if(null!=e&&null!=(t=e.data)&&t.error){var n,a;const t=e.data.error,l=k.exec(t);x({message:t,line:null==l||null==(n=l.groups)?void 0:n.line,position:null==l||null==(a=l.groups)?void 0:a.position})}else!function(e){v(null),g(e),r&&r(e)}(JSON.stringify(e.data.result))}))}(n?JSON.parse(d):{})}catch(t){var e;const n=E.exec(t.message);x({message:"failed to parse context: "+t.message,position:null==n||null==(e=n.groups)?void 0:e.position})}},className:"button button--primary button--lg"},"Evaluate"),a.createElement("br",null),a.createElement("br",null),a.createElement("h2",null,"Result"),a.createElement(u.Z,{title:(()=>{const e=null!=f&&f.line?" on line "+f.line:"",t=null!=f&&f.position?" at position "+f.position:"";return f&&"Error"+e+t})(),language:"json"},m||(null==f?void 0:f.message)))}},4768:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>p,default:()=>f,frontMatter:()=>u,metadata:()=>d,toc:()=>m});var a,l=n(7462),s=n(1880),r=(n(7294),n(3905)),o=n(5478),i=n(6518),c=n.n(i);const u={id:"chapter-5",title:"Chapter 5"},p=void 0,d={unversionedId:"challenge/chapter-5",id:"version-1.16/challenge/chapter-5",title:"Chapter 5",description:"The next stop would put Zee in Cologne, as the journey continued there was an important",source:"@site/versioned_docs/version-1.16/challenge/chapter-5.mdx",sourceDirName:"challenge",slug:"/challenge/chapter-5",permalink:"/feel-scala/docs/challenge/chapter-5",draft:!1,editUrl:"https://github.com/camunda/feel-scala/edit/main/docs/versioned_docs/version-1.16/challenge/chapter-5.mdx",tags:[],version:"1.16",frontMatter:{id:"chapter-5",title:"Chapter 5"},sidebar:"Challenge",previous:{title:"Chapter 4",permalink:"/feel-scala/docs/challenge/chapter-4"},next:{title:"Chapter 6",permalink:"/feel-scala/docs/challenge/chapter-6"}},h={},m=[],g={toc:m};function f(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,l.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The next stop would put Zee in Cologne \ud83c\udde9\ud83c\uddea, as the journey continued there was an important\nquestion to answer: would Zee get in time for the conference? \u231a"),(0,r.kt)("p",null,"The trip started on September 15th, 2022, and since the journey began, around 200 hours had passed.\nCamundaCon will start on October 5th, 2022."),(0,r.kt)("p",null,"Let's use ",(0,r.kt)("a",{parentName:"p",href:"/feel-scala/docs/next/reference/language-guide/feel-temporal-expressions"},"temporal operators")," to check\nhow many days Zee has left:"),(0,r.kt)(o.Z,{defaultExpression:c()(a||(a=(0,s.Z)(['\n    // use temporal math to calculate the remaining days\n    date(startingDate) + duration("PT200H")']))),feelContext:'{"startingDate": "2022-09-15", "targetDate": "2022-10-05"}',metadata:{page:"challenge-5"},mdxType:"LiveFeel"}),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Solution"),(0,r.kt)("div",null,(0,r.kt)("div",null,"Zee has 11 days to arrive in Berlin."),(0,r.kt)("br",null),(0,r.kt)("pre",{title:"Expression"},'(date(targetDate) - date(startingDate) - duration("PT200H")) / duration("P1D")'))))}f.isMDXComponent=!0}}]);