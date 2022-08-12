"use strict";(self.webpackChunkfeel_scala=self.webpackChunkfeel_scala||[]).push([[9614],{4863:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(7462),l=n(7294),r=n(5671),o=n(3746);const s=e=>{let{children:t,onChange:n,language:s}=e;const i=(0,l.useRef)(null),[u,c]=(0,l.useState)(t),d=(0,l.useCallback)((e=>{const t=e.slice(0,-1);c(t),n(t)}),[]);return(0,r.Y)(i,d,{indentation:2}),l.createElement(o.ZP,(0,a.Z)({},o.lG,{code:u,language:s}),(e=>{let{className:t,style:n,tokens:a,getTokenProps:r}=e;return l.createElement("pre",{className:t,style:n,ref:i},a.map(((e,t)=>l.createElement(l.Fragment,{key:t},e.filter((e=>!e.empty)).map(((e,t)=>l.createElement("span",r({token:e,key:t})))),"\n"))))}))}},4294:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(7294),l=n(9669),r=n.n(l),o=n(4863),s=n(9537);const i=e=>{let{defaultExpression:t,feelContext:n,metadata:l}=e;n&&(n=JSON.stringify(JSON.parse(n),null,2));const[i,u]=a.useState(t),[c,d]=a.useState(n),[m,p]=a.useState("<click 'Evaluate' to see the result of the expression>"),[g,h]=a.useState(null);return a.createElement("div",null,a.createElement("h2",null,"Expression"),a.createElement(o.Z,{onChange:u,language:"js"},i),n&&a.createElement("div",null,a.createElement("h2",null,"Context"),a.createElement("i",null,"A JSON document that is used to resolve ",a.createElement("strong",null,"variables")," in the expression."),a.createElement(o.Z,{onChange:d,language:"json"},c)),a.createElement("button",{onClick:function(){const e=n?JSON.parse(c):{};r().post("https://feel.upgradingdave.com/process/start",{expression:i,context:e,metadata:{...l}},{headers:{accept:"*/*","content-type":"application/json"}}).then((e=>{if(e.data)if(e.data.result)h(null),p(JSON.stringify(e.data.result));else if(e.data.error){var t,n;const a=JSON.stringify(e.data.error),l=/^.+(?<line>\d+):(?<position>\d+).+$/gm.exec(a);p(null),h({message:a,line:null==l||null==(t=l.groups)?void 0:t.line,position:null==l||null==(n=l.groups)?void 0:n.position})}}))},className:"button button--primary button--lg"},"Evaluate"),a.createElement("br",null),a.createElement("br",null),a.createElement("h2",null,"Result"),a.createElement(s.Z,{title:g&&"Error on line "+g.line+" at position "+g.position,language:"json"},m||(null==g?void 0:g.message)))}},2265:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>d,default:()=>f,frontMatter:()=>c,metadata:()=>m,toc:()=>g});var a,l=n(7462),r=n(1880),o=(n(7294),n(3905)),s=n(4294),i=n(6518),u=n.n(i);const c={id:"tutorial-1-3",title:"1.3 Even more numeric expressions"},d=void 0,m={unversionedId:"tutorial/tutorial-1-3",id:"tutorial/tutorial-1-3",title:"1.3 Even more numeric expressions",description:"Zee is now entering France and during the battle with Hydra lost the Boots of Hermes. It is",source:"@site/docs/tutorial/tutorial-1-3.mdx",sourceDirName:"tutorial",slug:"/tutorial/tutorial-1-3",permalink:"/feel-scala/docs/tutorial/tutorial-1-3",draft:!1,editUrl:"https://github.com/camunda/feel-scala/edit/master/docs/docs/tutorial/tutorial-1-3.mdx",tags:[],version:"current",frontMatter:{id:"tutorial-1-3",title:"1.3 Even more numeric expressions"},sidebar:"Tutorial",previous:{title:"1.2 More numeric expressions",permalink:"/feel-scala/docs/tutorial/tutorial-1-2"},next:{title:"2.1 Fourth Stop: String expressions",permalink:"/feel-scala/docs/tutorial/tutorial-2-1"}},p={},g=[],h={toc:g};function f(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,l.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Zee is now entering France \ud83c\uddeb\ud83c\uddf7 and during the battle with Hydra lost the Boots of Hermes. It is\n7:00 AM and our friend has to continue by foot \ud83d\udeb6\u200d\u2642\ufe0f The goal is to walk to Lyon which is\n729.1 kms distance."),(0,o.kt)("p",null,"Considering average walking speed is 5 km/h how many days would Zee need to walk without taking many\nrest?, and at what time would Zee reach Lyon?"),(0,o.kt)("p",null,"First determine the number of days using expressions were already used ",(0,o.kt)("inlineCode",{parentName:"p"},"distance / speed"),".\nIn this case: ",(0,o.kt)("inlineCode",{parentName:"p"},"729.1 / 5 = 145 hrs"),". To determine arrival time, we can leverage modular clock\n(24 hours) arithmetics using the function ",(0,o.kt)("a",{parentName:"p",href:"/feel-scala/docs/reference/builtin-functions/feel-built-in-functions-numeric#modulo"},"modulo()"),"."),(0,o.kt)(s.Z,{defaultExpression:u()(a||(a=(0,r.Z)(["\n    // using a 24 hour clock\n    modulo((hours + startingHour), modulus)"]))),feelContext:'{"startingHour": 7, "hours": 145, "modulus": 24}',metadata:{page:"tutorial-1-2"},mdxType:"LiveFeel"}),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Solution"),(0,o.kt)("div",null,(0,o.kt)("div",null,"Zee would take 6 days to arrive and would be there at 8:00 AM."))))}f.isMDXComponent=!0},6518:e=>{e.exports=function(e){var t=void 0;t="string"==typeof e?[e]:e.raw;for(var n="",a=0;a<t.length;a++)n+=t[a].replace(/\\\n[ \t]*/g,"").replace(/\\`/g,"`"),a<(arguments.length<=1?0:arguments.length-1)&&(n+=arguments.length<=a+1?void 0:arguments[a+1]);var l=n.split("\n"),r=null;return l.forEach((function(e){var t=e.match(/^(\s+)\S+/);if(t){var n=t[1].length;r=r?Math.min(r,n):n}})),null!==r&&(n=l.map((function(e){return" "===e[0]?e.slice(r):e})).join("\n")),(n=n.trim()).replace(/\\n/g,"\n")}},1880:(e,t,n)=>{function a(e,t){return t||(t=e.slice(0)),e.raw=t,e}n.d(t,{Z:()=>a})}}]);