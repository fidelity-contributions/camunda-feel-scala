"use strict";(self.webpackChunkfeel_scala=self.webpackChunkfeel_scala||[]).push([[6314],{4863:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(7462),l=n(7294),r=n(5671),s=n(3746);const o=e=>{let{children:t,onChange:n,language:o}=e;const i=(0,l.useRef)(null),[c,u]=(0,l.useState)(t),p=(0,l.useCallback)((e=>{const t=e.slice(0,-1);u(t),n(t)}),[]);return(0,r.Y)(i,p,{indentation:2}),l.createElement(s.ZP,(0,a.Z)({},s.lG,{code:c,language:o}),(e=>{let{className:t,style:n,tokens:a,getTokenProps:r}=e;return l.createElement("pre",{className:t,style:n,ref:i},a.map(((e,t)=>l.createElement(l.Fragment,{key:t},e.filter((e=>!e.empty)).map(((e,t)=>l.createElement("span",r({token:e,key:t})))),"\n"))))}))}},4294:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(7294),l=n(9669),r=n.n(l),s=n(4863),o=n(9537);const i=e=>{let{defaultExpression:t,feelContext:n,metadata:l,onResultCallback:i,onErrorCallback:c}=e;n&&(n=JSON.stringify(JSON.parse(n),null,2));const[u,p]=a.useState(t),[d,h]=a.useState(n),[m,g]=a.useState("<click 'Evaluate' to see the result of the expression>"),[f,v]=a.useState(null),[k,E]=a.useState(null),x=/^.+(?<line>\d+):(?<position>\d+).+$/gm,y=/^.+at position (?<position>\d+)$/gm;function b(e,t){g(null),v(e),E(t),c&&c(e)}return a.createElement("div",null,a.createElement("h2",null,"Expression"),a.createElement(s.Z,{onChange:p,language:"js"},u),n&&a.createElement("div",null,a.createElement("h2",null,"Context"),a.createElement("i",null,"A JSON document that is used to resolve ",a.createElement("strong",null,"variables")," ","in the expression."),a.createElement(s.Z,{onChange:h,language:"json"},d)),a.createElement("button",{onClick:function(){try{g("<evaluating the expression...>"),E(null);!function(e){r().post("https://feel.upgradingdave.com/api/v1/feel/evaluate",{expression:u,context:e,metadata:{...l}},{headers:{accept:"*/*","content-type":"application/json"}}).then((e=>{var t;if(null!=e&&null!=(t=e.data)&&t.error){var n,a;const t=e.data.error,l=x.exec(t);b({message:t,line:null==l||null==(n=l.groups)?void 0:n.line,position:null==l||null==(a=l.groups)?void 0:a.position},e.data.warnings)}else!function(e){v(null);const t=JSON.stringify(e.result);g(t),e.warnings.length>=1&&E(e.warnings);i&&i(t)}(e.data)}))}(n?JSON.parse(d):{})}catch(t){var e;const n=y.exec(t.message);b({message:"failed to parse context: "+t.message,position:null==n||null==(e=n.groups)?void 0:e.position})}},className:"button button--primary button--lg"},"Evaluate"),a.createElement("br",null),a.createElement("br",null),a.createElement("h2",null,"Result"),a.createElement(o.Z,{title:(()=>{const e=null!=f&&f.line?" on line "+f.line:"",t=null!=f&&f.position?" at position "+f.position:"";return f&&"Error"+e+t})(),language:"json"},m||(null==f?void 0:f.message)),a.createElement("br",null),a.createElement("h2",null,"Warnings"),a.createElement(o.Z,null,(null==k?void 0:k.map(((e,t)=>a.createElement("li",{key:t},"[",e.type,"] ",e.message))))||"<none>"))}},6275:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>p,default:()=>f,frontMatter:()=>u,metadata:()=>d,toc:()=>m});var a,l=n(7462),r=n(1880),s=(n(7294),n(3905)),o=n(4294),i=n(6518),c=n.n(i);const u={id:"chapter-2",title:"Chapter 2"},p=void 0,d={unversionedId:"learn/challenge/chapter-2",id:"version-1.17/learn/challenge/chapter-2",title:"Chapter 2",description:"Once Zee arrived to Pamplona, a mystical creature appearedsnake: The Hydra was a",source:"@site/versioned_docs/version-1.17/learn/challenge/chapter-2.mdx",sourceDirName:"learn/challenge",slug:"/learn/challenge/chapter-2",permalink:"/feel-scala/docs/learn/challenge/chapter-2",draft:!1,editUrl:"https://github.com/camunda/feel-scala/edit/main/docs/versioned_docs/version-1.17/learn/challenge/chapter-2.mdx",tags:[],version:"1.17",frontMatter:{id:"chapter-2",title:"Chapter 2"},sidebar:"Learn",previous:{title:"Chapter 1",permalink:"/feel-scala/docs/learn/challenge/chapter-1"},next:{title:"Chapter 3",permalink:"/feel-scala/docs/learn/challenge/chapter-3"}},h={},m=[],g={toc:m};function f(e){let{components:t,...n}=e;return(0,s.kt)("wrapper",(0,l.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Once Zee arrived to Pamplona, a mystical creature appeared: Lerna's Hydra. \ud83d\udc0d The Hydra was a\none-headed monster that when it's head was cut off, 2 more heads would grew in its place."),(0,s.kt)("p",null,"Zee reached for a sword \ud83d\udde1\ufe0f and cut off the head of the beast. As a result 2 more\nappeared. \ud83d\ude31 Zee cut both heads off again, which doubled to 4. How many heads would the beast\nhave after cutting them for 5 times?"),(0,s.kt)("p",null,"We could try to represent this in a multiplication like this: ",(0,s.kt)("inlineCode",{parentName:"p"},"2*2*2*2*2"),", but we can leverage\n",(0,s.kt)("a",{parentName:"p",href:"/feel-scala/docs/next/reference/language-guide/feel-numeric-expressions#exponentiation"},"exponentiation")," and\nrepresent it like the following expression:"),(0,s.kt)(o.Z,{defaultExpression:c()(a||(a=(0,r.Z)(["\n    // use exponentiation to represent the multiplications\n    2*2*2*2*2"]))),feelContext:'{"base": 2, "exponent": 5}',metadata:{page:"challenge-2"},mdxType:"LiveFeel"}),(0,s.kt)("details",null,(0,s.kt)("summary",null,"Solution"),(0,s.kt)("div",null,(0,s.kt)("div",null,"By the 5th time, there were 32 heads and no apparent way out, thankfully the heads started fighting with each other and Zee was able to escape."),(0,s.kt)("br",null),(0,s.kt)("pre",{title:"Expression"},"base ** exponent"))))}f.isMDXComponent=!0}}]);