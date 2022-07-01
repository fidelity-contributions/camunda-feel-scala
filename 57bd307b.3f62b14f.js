(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{122:function(e,a,n){"use strict";n.r(a),n.d(a,"frontMatter",(function(){return c})),n.d(a,"metadata",(function(){return u})),n.d(a,"toc",(function(){return p})),n.d(a,"default",(function(){return m}));var t=n(3),r=n(7),o=(n(0),n(251)),l=n(255),i=n(256),c={id:"value-mapper-spi",title:"Value Mapper SPI"},u={unversionedId:"reference/developer-guide/value-mapper-spi",id:"version-1.15/reference/developer-guide/value-mapper-spi",isDocsHomePage:!1,title:"Value Mapper SPI",description:"The value mapper is used while evaluating expressions and unary tests to",source:"@site/versioned_docs/version-1.15/reference/developer-guide/value-mapper-spi.md",slug:"/reference/developer-guide/value-mapper-spi",permalink:"/feel-scala/docs/1.15/reference/developer-guide/value-mapper-spi",editUrl:"https://github.com/camunda/feel-scala/edit/master/docs/versioned_docs/version-1.15/reference/developer-guide/value-mapper-spi.md",version:"1.15",sidebar:"version-1.15/Reference",previous:{title:"Function Provider SPI",permalink:"/feel-scala/docs/1.15/reference/developer-guide/function-provider-spi"},next:{title:"Clock SPI",permalink:"/feel-scala/docs/1.15/reference/developer-guide/clock-spi"}},p=[{value:"Register the Value Mapper",id:"register-the-value-mapper",children:[]}],s={toc:p};function m(e){var a=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(t.a)({},s,n,{components:a,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The value mapper is used while evaluating expressions and unary tests to"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"transform a variable into a FEEL data type (e.g. when it is referenced in an expression ",Object(o.b)("inlineCode",{parentName:"li"},"x + 1"),")"),Object(o.b)("li",{parentName:"ul"},"transform the result of the expression or unary tests from a FEEL data type into a common data type (e.g. to String or BigDecimal/Long)")),Object(o.b)("p",null,"Using the SPI, the transformation can be customized to support more/custom data types, or changing the data type of the result."),Object(o.b)(l.a,{defaultValue:"scala",values:[{label:"Scala",value:"scala"},{label:"Java",value:"java"}],mdxType:"Tabs"},Object(o.b)(i.a,{value:"scala",mdxType:"TabItem"},Object(o.b)("p",null,"Create a sub-class of ",Object(o.b)("inlineCode",{parentName:"p"},"org.camunda.feel.valuemapper.CustomValueMapper"),". Implement the method ",Object(o.b)("inlineCode",{parentName:"p"},"toVal()")," and ",Object(o.b)("inlineCode",{parentName:"p"},"unpackVal()")," to transform the object. Set the ",Object(o.b)("inlineCode",{parentName:"p"},"priority")," of the value mapper to define the precedence compared to the other mappers. "),Object(o.b)("pre",null,Object(o.b)("code",Object(t.a)({parentName:"pre"},{className:"language-scala"}),"class MyValueMapper extends CustomValueMapper {\n\n  override def toVal(x: Any, innerValueMapper: Any => Val): Option[Val] = x match {\n    case c: Custom => Some(ValString(c.getName))\n    case _ => None\n  }\n\n  override def unpackVal(value: Val, innerValueMapper: Val => Any): Option[Any] = value match {\n    case ValNumber(number) => Some(number.doubleValue) // map BigDecimal to Double\n    case _ => None\n  }\n    \n  override val priority: Int = 1\n\n}\n"))),Object(o.b)(i.a,{value:"java",mdxType:"TabItem"},Object(o.b)("p",null,"Using Java, create a sub-class of ",Object(o.b)("inlineCode",{parentName:"p"},"org.camunda.feel.valuemapper.JavaCustomValueMapper"),". It is basically equal to the Scala one but with Java instead of Scala types."),Object(o.b)("pre",null,Object(o.b)("code",Object(t.a)({parentName:"pre"},{className:"language-java"}),"public class CustomJavaValueMapper extends JavaCustomValueMapper {\n\n  @Override\n  public Optional<Val> toValue(Object x, Function<Object, Val> innerValueMapper) {\n    if (x instanceof Custom) {\n      final Custom c = (Custom) x;\n      return Optional.of(new ValString(c.getName()));\n\n    } else {\n      return Optional.empty();\n    }\n  }\n\n  @Override\n  public Optional<Object> unpackValue(Val value, Function<Val, Object> innerValueMapper) {\n    if (value instanceof ValNumber) {\n      final ValNumber number = (ValNumber) value;\n      return Optional.of(number.value().doubleValue()); // map BigDecimal to Double\n\n    } else {\n      return Optional.empty();\n    }\n  }\n\n  @Override\n  public int priority() {\n    return 1;\n  }\n}\n")))),Object(o.b)("h2",{id:"register-the-value-mapper"},"Register the Value Mapper"),Object(o.b)("p",null,"Depending how the FEEL engine is used, the value mapper can be passed directly on creation, or is loaded via Java ServiceLoader mechanism. "),Object(o.b)("p",null,"In the second case, create a new file ",Object(o.b)("inlineCode",{parentName:"p"},"org.camunda.feel.valuemapper.CustomValueMapper")," in the folder ",Object(o.b)("inlineCode",{parentName:"p"},"META-INF/services/"),". It must contain the full qualified name of the value mapper."),Object(o.b)("pre",null,Object(o.b)("code",Object(t.a)({parentName:"pre"},{}),"org.camunda.feel.example.valuemapper.MyValueMapper\n")))}m.isMDXComponent=!0},251:function(e,a,n){"use strict";n.d(a,"a",(function(){return s})),n.d(a,"b",(function(){return d}));var t=n(0),r=n.n(t);function o(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function l(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?l(Object(n),!0).forEach((function(a){o(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function c(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=r.a.createContext({}),p=function(e){var a=r.a.useContext(u),n=a;return e&&(n="function"==typeof e?e(a):i(i({},a),e)),n},s=function(e){var a=p(e.components);return r.a.createElement(u.Provider,{value:a},e.children)},m={inlineCode:"code",wrapper:function(e){var a=e.children;return r.a.createElement(r.a.Fragment,{},a)}},b=r.a.forwardRef((function(e,a){var n=e.components,t=e.mdxType,o=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),s=p(n),b=t,d=s["".concat(l,".").concat(b)]||s[b]||m[b]||o;return n?r.a.createElement(d,i(i({ref:a},u),{},{components:n})):r.a.createElement(d,i({ref:a},u))}));function d(e,a){var n=arguments,t=a&&a.mdxType;if("string"==typeof e||t){var o=n.length,l=new Array(o);l[0]=b;var i={};for(var c in a)hasOwnProperty.call(a,c)&&(i[c]=a[c]);i.originalType=e,i.mdxType="string"==typeof e?e:t,l[1]=i;for(var u=2;u<o;u++)l[u]=n[u];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},252:function(e,a,n){"use strict";function t(e){var a,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(a=0;a<e.length;a++)e[a]&&(n=t(e[a]))&&(r&&(r+=" "),r+=n);else for(a in e)e[a]&&(r&&(r+=" "),r+=a);return r}a.a=function(){for(var e,a,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(a=t(e))&&(r&&(r+=" "),r+=a);return r}},253:function(e,a,n){"use strict";var t=n(0),r=n(254);a.a=function(){var e=Object(t.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},254:function(e,a,n){"use strict";var t=n(0),r=Object(t.createContext)(void 0);a.a=r},255:function(e,a,n){"use strict";var t=n(0),r=n.n(t),o=n(253),l=n(252),i=n(54),c=n.n(i),u=37,p=39;a.a=function(e){var a=e.lazy,n=e.block,i=e.defaultValue,s=e.values,m=e.groupId,b=e.className,d=Object(o.a)(),f=d.tabGroupChoices,v=d.setTabGroupChoices,O=Object(t.useState)(i),y=O[0],g=O[1],j=t.Children.toArray(e.children);if(null!=m){var h=f[m];null!=h&&h!==y&&s.some((function(e){return e.value===h}))&&g(h)}var V=function(e){g(e),null!=m&&v(m,e)},C=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(l.a)("tabs",{"tabs--block":n},b)},s.map((function(e){var a=e.value,n=e.label;return r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":y===a,className:Object(l.a)("tabs__item",c.a.tabItem,{"tabs__item--active":y===a}),key:a,ref:function(e){return C.push(e)},onKeyDown:function(e){!function(e,a,n){switch(n.keyCode){case p:!function(e,a){var n=e.indexOf(a)+1;e[n]?e[n].focus():e[0].focus()}(e,a);break;case u:!function(e,a){var n=e.indexOf(a)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,a)}}(C,e.target,e)},onFocus:function(){return V(a)},onClick:function(){V(a)}},n)}))),a?Object(t.cloneElement)(j.filter((function(e){return e.props.value===y}))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},j.map((function(e,a){return Object(t.cloneElement)(e,{key:a,hidden:e.props.value!==y})}))))}},256:function(e,a,n){"use strict";var t=n(3),r=n(0),o=n.n(r);a.a=function(e){var a=e.children,n=e.hidden,r=e.className;return o.a.createElement("div",Object(t.a)({role:"tabpanel"},{hidden:n,className:r}),a)}}}]);