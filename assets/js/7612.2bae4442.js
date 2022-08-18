(self.webpackChunkfeel_scala=self.webpackChunkfeel_scala||[]).push([[7612],{9669:(e,t,n)=>{e.exports=n(1609)},5448:(e,t,n)=>{"use strict";var r=n(4867),o=n(6026),i=n(4372),s=n(5327),a=n(4097),u=n(4109),c=n(7985),f=n(7874),l=n(2648),p=n(644),d=n(205);e.exports=function(e){return new Promise((function(t,n){var h,v=e.data,m=e.headers,g=e.responseType;function y(){e.cancelToken&&e.cancelToken.unsubscribe(h),e.signal&&e.signal.removeEventListener("abort",h)}r.isFormData(v)&&r.isStandardBrowserEnv()&&delete m["Content-Type"];var E=new XMLHttpRequest;if(e.auth){var b=e.auth.username||"",w=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";m.Authorization="Basic "+btoa(b+":"+w)}var x=a(e.baseURL,e.url);function O(){if(E){var r="getAllResponseHeaders"in E?u(E.getAllResponseHeaders()):null,i={data:g&&"text"!==g&&"json"!==g?E.response:E.responseText,status:E.status,statusText:E.statusText,headers:r,config:e,request:E};o((function(e){t(e),y()}),(function(e){n(e),y()}),i),E=null}}if(E.open(e.method.toUpperCase(),s(x,e.params,e.paramsSerializer),!0),E.timeout=e.timeout,"onloadend"in E?E.onloadend=O:E.onreadystatechange=function(){E&&4===E.readyState&&(0!==E.status||E.responseURL&&0===E.responseURL.indexOf("file:"))&&setTimeout(O)},E.onabort=function(){E&&(n(new l("Request aborted",l.ECONNABORTED,e,E)),E=null)},E.onerror=function(){n(new l("Network Error",l.ERR_NETWORK,e,E,E)),E=null},E.ontimeout=function(){var t=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded",r=e.transitional||f;e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),n(new l(t,r.clarifyTimeoutError?l.ETIMEDOUT:l.ECONNABORTED,e,E)),E=null},r.isStandardBrowserEnv()){var R=(e.withCredentials||c(x))&&e.xsrfCookieName?i.read(e.xsrfCookieName):void 0;R&&(m[e.xsrfHeaderName]=R)}"setRequestHeader"in E&&r.forEach(m,(function(e,t){void 0===v&&"content-type"===t.toLowerCase()?delete m[t]:E.setRequestHeader(t,e)})),r.isUndefined(e.withCredentials)||(E.withCredentials=!!e.withCredentials),g&&"json"!==g&&(E.responseType=e.responseType),"function"==typeof e.onDownloadProgress&&E.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&E.upload&&E.upload.addEventListener("progress",e.onUploadProgress),(e.cancelToken||e.signal)&&(h=function(e){E&&(n(!e||e&&e.type?new p:e),E.abort(),E=null)},e.cancelToken&&e.cancelToken.subscribe(h),e.signal&&(e.signal.aborted?h():e.signal.addEventListener("abort",h))),v||(v=null);var S=d(x);S&&-1===["http","https","file"].indexOf(S)?n(new l("Unsupported protocol "+S+":",l.ERR_BAD_REQUEST,e)):E.send(v)}))}},1609:(e,t,n)=>{"use strict";var r=n(4867),o=n(1849),i=n(321),s=n(7185);var a=function e(t){var n=new i(t),a=o(i.prototype.request,n);return r.extend(a,i.prototype,n),r.extend(a,n),a.create=function(n){return e(s(t,n))},a}(n(5546));a.Axios=i,a.CanceledError=n(644),a.CancelToken=n(4903),a.isCancel=n(6502),a.VERSION=n(7288).version,a.toFormData=n(7675),a.AxiosError=n(2648),a.Cancel=a.CanceledError,a.all=function(e){return Promise.all(e)},a.spread=n(8713),a.isAxiosError=n(6268),e.exports=a,e.exports.default=a},4903:(e,t,n)=>{"use strict";var r=n(644);function o(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise((function(e){t=e}));var n=this;this.promise.then((function(e){if(n._listeners){var t,r=n._listeners.length;for(t=0;t<r;t++)n._listeners[t](e);n._listeners=null}})),this.promise.then=function(e){var t,r=new Promise((function(e){n.subscribe(e),t=e})).then(e);return r.cancel=function(){n.unsubscribe(t)},r},e((function(e){n.reason||(n.reason=new r(e),t(n.reason))}))}o.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},o.prototype.subscribe=function(e){this.reason?e(this.reason):this._listeners?this._listeners.push(e):this._listeners=[e]},o.prototype.unsubscribe=function(e){if(this._listeners){var t=this._listeners.indexOf(e);-1!==t&&this._listeners.splice(t,1)}},o.source=function(){var e;return{token:new o((function(t){e=t})),cancel:e}},e.exports=o},644:(e,t,n)=>{"use strict";var r=n(2648);function o(e){r.call(this,null==e?"canceled":e,r.ERR_CANCELED),this.name="CanceledError"}n(4867).inherits(o,r,{__CANCEL__:!0}),e.exports=o},6502:e=>{"use strict";e.exports=function(e){return!(!e||!e.__CANCEL__)}},321:(e,t,n)=>{"use strict";var r=n(4867),o=n(5327),i=n(782),s=n(3572),a=n(7185),u=n(4097),c=n(4875),f=c.validators;function l(e){this.defaults=e,this.interceptors={request:new i,response:new i}}l.prototype.request=function(e,t){"string"==typeof e?(t=t||{}).url=e:t=e||{},(t=a(this.defaults,t)).method?t.method=t.method.toLowerCase():this.defaults.method?t.method=this.defaults.method.toLowerCase():t.method="get";var n=t.transitional;void 0!==n&&c.assertOptions(n,{silentJSONParsing:f.transitional(f.boolean),forcedJSONParsing:f.transitional(f.boolean),clarifyTimeoutError:f.transitional(f.boolean)},!1);var r=[],o=!0;this.interceptors.request.forEach((function(e){"function"==typeof e.runWhen&&!1===e.runWhen(t)||(o=o&&e.synchronous,r.unshift(e.fulfilled,e.rejected))}));var i,u=[];if(this.interceptors.response.forEach((function(e){u.push(e.fulfilled,e.rejected)})),!o){var l=[s,void 0];for(Array.prototype.unshift.apply(l,r),l=l.concat(u),i=Promise.resolve(t);l.length;)i=i.then(l.shift(),l.shift());return i}for(var p=t;r.length;){var d=r.shift(),h=r.shift();try{p=d(p)}catch(v){h(v);break}}try{i=s(p)}catch(v){return Promise.reject(v)}for(;u.length;)i=i.then(u.shift(),u.shift());return i},l.prototype.getUri=function(e){e=a(this.defaults,e);var t=u(e.baseURL,e.url);return o(t,e.params,e.paramsSerializer)},r.forEach(["delete","get","head","options"],(function(e){l.prototype[e]=function(t,n){return this.request(a(n||{},{method:e,url:t,data:(n||{}).data}))}})),r.forEach(["post","put","patch"],(function(e){function t(t){return function(n,r,o){return this.request(a(o||{},{method:e,headers:t?{"Content-Type":"multipart/form-data"}:{},url:n,data:r}))}}l.prototype[e]=t(),l.prototype[e+"Form"]=t(!0)})),e.exports=l},2648:(e,t,n)=>{"use strict";var r=n(4867);function o(e,t,n,r,o){Error.call(this),this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),o&&(this.response=o)}r.inherits(o,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code,status:this.response&&this.response.status?this.response.status:null}}});var i=o.prototype,s={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED"].forEach((function(e){s[e]={value:e}})),Object.defineProperties(o,s),Object.defineProperty(i,"isAxiosError",{value:!0}),o.from=function(e,t,n,s,a,u){var c=Object.create(i);return r.toFlatObject(e,c,(function(e){return e!==Error.prototype})),o.call(c,e.message,t,n,s,a),c.name=e.name,u&&Object.assign(c,u),c},e.exports=o},782:(e,t,n)=>{"use strict";var r=n(4867);function o(){this.handlers=[]}o.prototype.use=function(e,t,n){return this.handlers.push({fulfilled:e,rejected:t,synchronous:!!n&&n.synchronous,runWhen:n?n.runWhen:null}),this.handlers.length-1},o.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},o.prototype.forEach=function(e){r.forEach(this.handlers,(function(t){null!==t&&e(t)}))},e.exports=o},4097:(e,t,n)=>{"use strict";var r=n(1793),o=n(7303);e.exports=function(e,t){return e&&!r(t)?o(e,t):t}},3572:(e,t,n)=>{"use strict";var r=n(4867),o=n(8527),i=n(6502),s=n(5546),a=n(644);function u(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new a}e.exports=function(e){return u(e),e.headers=e.headers||{},e.data=o.call(e,e.data,e.headers,e.transformRequest),e.headers=r.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),r.forEach(["delete","get","head","post","put","patch","common"],(function(t){delete e.headers[t]})),(e.adapter||s.adapter)(e).then((function(t){return u(e),t.data=o.call(e,t.data,t.headers,e.transformResponse),t}),(function(t){return i(t)||(u(e),t&&t.response&&(t.response.data=o.call(e,t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)}))}},7185:(e,t,n)=>{"use strict";var r=n(4867);e.exports=function(e,t){t=t||{};var n={};function o(e,t){return r.isPlainObject(e)&&r.isPlainObject(t)?r.merge(e,t):r.isPlainObject(t)?r.merge({},t):r.isArray(t)?t.slice():t}function i(n){return r.isUndefined(t[n])?r.isUndefined(e[n])?void 0:o(void 0,e[n]):o(e[n],t[n])}function s(e){if(!r.isUndefined(t[e]))return o(void 0,t[e])}function a(n){return r.isUndefined(t[n])?r.isUndefined(e[n])?void 0:o(void 0,e[n]):o(void 0,t[n])}function u(n){return n in t?o(e[n],t[n]):n in e?o(void 0,e[n]):void 0}var c={url:s,method:s,data:s,baseURL:a,transformRequest:a,transformResponse:a,paramsSerializer:a,timeout:a,timeoutMessage:a,withCredentials:a,adapter:a,responseType:a,xsrfCookieName:a,xsrfHeaderName:a,onUploadProgress:a,onDownloadProgress:a,decompress:a,maxContentLength:a,maxBodyLength:a,beforeRedirect:a,transport:a,httpAgent:a,httpsAgent:a,cancelToken:a,socketPath:a,responseEncoding:a,validateStatus:u};return r.forEach(Object.keys(e).concat(Object.keys(t)),(function(e){var t=c[e]||i,o=t(e);r.isUndefined(o)&&t!==u||(n[e]=o)})),n}},6026:(e,t,n)=>{"use strict";var r=n(2648);e.exports=function(e,t,n){var o=n.config.validateStatus;n.status&&o&&!o(n.status)?t(new r("Request failed with status code "+n.status,[r.ERR_BAD_REQUEST,r.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n)):e(n)}},8527:(e,t,n)=>{"use strict";var r=n(4867),o=n(5546);e.exports=function(e,t,n){var i=this||o;return r.forEach(n,(function(n){e=n.call(i,e,t)})),e}},5546:(e,t,n)=>{"use strict";var r=n(4867),o=n(6016),i=n(2648),s=n(7874),a=n(7675),u={"Content-Type":"application/x-www-form-urlencoded"};function c(e,t){!r.isUndefined(e)&&r.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var f,l={transitional:s,adapter:(("undefined"!=typeof XMLHttpRequest||"undefined"!=typeof process&&"[object process]"===Object.prototype.toString.call(process))&&(f=n(5448)),f),transformRequest:[function(e,t){if(o(t,"Accept"),o(t,"Content-Type"),r.isFormData(e)||r.isArrayBuffer(e)||r.isBuffer(e)||r.isStream(e)||r.isFile(e)||r.isBlob(e))return e;if(r.isArrayBufferView(e))return e.buffer;if(r.isURLSearchParams(e))return c(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString();var n,i=r.isObject(e),s=t&&t["Content-Type"];if((n=r.isFileList(e))||i&&"multipart/form-data"===s){var u=this.env&&this.env.FormData;return a(n?{"files[]":e}:e,u&&new u)}return i||"application/json"===s?(c(t,"application/json"),function(e,t,n){if(r.isString(e))try{return(t||JSON.parse)(e),r.trim(e)}catch(o){if("SyntaxError"!==o.name)throw o}return(n||JSON.stringify)(e)}(e)):e}],transformResponse:[function(e){var t=this.transitional||l.transitional,n=t&&t.silentJSONParsing,o=t&&t.forcedJSONParsing,s=!n&&"json"===this.responseType;if(s||o&&r.isString(e)&&e.length)try{return JSON.parse(e)}catch(a){if(s){if("SyntaxError"===a.name)throw i.from(a,i.ERR_BAD_RESPONSE,this,null,this.response);throw a}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:n(1623)},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};r.forEach(["delete","get","head"],(function(e){l.headers[e]={}})),r.forEach(["post","put","patch"],(function(e){l.headers[e]=r.merge(u)})),e.exports=l},7874:e=>{"use strict";e.exports={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1}},7288:e=>{e.exports={version:"0.27.2"}},1849:e=>{"use strict";e.exports=function(e,t){return function(){for(var n=new Array(arguments.length),r=0;r<n.length;r++)n[r]=arguments[r];return e.apply(t,n)}}},5327:(e,t,n)=>{"use strict";var r=n(4867);function o(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}e.exports=function(e,t,n){if(!t)return e;var i;if(n)i=n(t);else if(r.isURLSearchParams(t))i=t.toString();else{var s=[];r.forEach(t,(function(e,t){null!=e&&(r.isArray(e)?t+="[]":e=[e],r.forEach(e,(function(e){r.isDate(e)?e=e.toISOString():r.isObject(e)&&(e=JSON.stringify(e)),s.push(o(t)+"="+o(e))})))})),i=s.join("&")}if(i){var a=e.indexOf("#");-1!==a&&(e=e.slice(0,a)),e+=(-1===e.indexOf("?")?"?":"&")+i}return e}},7303:e=>{"use strict";e.exports=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}},4372:(e,t,n)=>{"use strict";var r=n(4867);e.exports=r.isStandardBrowserEnv()?{write:function(e,t,n,o,i,s){var a=[];a.push(e+"="+encodeURIComponent(t)),r.isNumber(n)&&a.push("expires="+new Date(n).toGMTString()),r.isString(o)&&a.push("path="+o),r.isString(i)&&a.push("domain="+i),!0===s&&a.push("secure"),document.cookie=a.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}}},1793:e=>{"use strict";e.exports=function(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}},6268:(e,t,n)=>{"use strict";var r=n(4867);e.exports=function(e){return r.isObject(e)&&!0===e.isAxiosError}},7985:(e,t,n)=>{"use strict";var r=n(4867);e.exports=r.isStandardBrowserEnv()?function(){var e,t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");function o(e){var r=e;return t&&(n.setAttribute("href",r),r=n.href),n.setAttribute("href",r),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:"/"===n.pathname.charAt(0)?n.pathname:"/"+n.pathname}}return e=o(window.location.href),function(t){var n=r.isString(t)?o(t):t;return n.protocol===e.protocol&&n.host===e.host}}():function(){return!0}},6016:(e,t,n)=>{"use strict";var r=n(4867);e.exports=function(e,t){r.forEach(e,(function(n,r){r!==t&&r.toUpperCase()===t.toUpperCase()&&(e[t]=n,delete e[r])}))}},1623:e=>{e.exports=null},4109:(e,t,n)=>{"use strict";var r=n(4867),o=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];e.exports=function(e){var t,n,i,s={};return e?(r.forEach(e.split("\n"),(function(e){if(i=e.indexOf(":"),t=r.trim(e.substr(0,i)).toLowerCase(),n=r.trim(e.substr(i+1)),t){if(s[t]&&o.indexOf(t)>=0)return;s[t]="set-cookie"===t?(s[t]?s[t]:[]).concat([n]):s[t]?s[t]+", "+n:n}})),s):s}},205:e=>{"use strict";e.exports=function(e){var t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}},8713:e=>{"use strict";e.exports=function(e){return function(t){return e.apply(null,t)}}},7675:(e,t,n)=>{"use strict";var r=n(4867);e.exports=function(e,t){t=t||new FormData;var n=[];function o(e){return null===e?"":r.isDate(e)?e.toISOString():r.isArrayBuffer(e)||r.isTypedArray(e)?"function"==typeof Blob?new Blob([e]):Buffer.from(e):e}return function e(i,s){if(r.isPlainObject(i)||r.isArray(i)){if(-1!==n.indexOf(i))throw Error("Circular reference detected in "+s);n.push(i),r.forEach(i,(function(n,i){if(!r.isUndefined(n)){var a,u=s?s+"."+i:i;if(n&&!s&&"object"==typeof n)if(r.endsWith(i,"{}"))n=JSON.stringify(n);else if(r.endsWith(i,"[]")&&(a=r.toArray(n)))return void a.forEach((function(e){!r.isUndefined(e)&&t.append(u,o(e))}));e(n,u)}})),n.pop()}else t.append(s,o(i))}(e),t}},4875:(e,t,n)=>{"use strict";var r=n(7288).version,o=n(2648),i={};["object","boolean","number","function","string","symbol"].forEach((function(e,t){i[e]=function(n){return typeof n===e||"a"+(t<1?"n ":" ")+e}}));var s={};i.transitional=function(e,t,n){function i(e,t){return"[Axios v"+r+"] Transitional option '"+e+"'"+t+(n?". "+n:"")}return function(n,r,a){if(!1===e)throw new o(i(r," has been removed"+(t?" in "+t:"")),o.ERR_DEPRECATED);return t&&!s[r]&&(s[r]=!0,console.warn(i(r," has been deprecated since v"+t+" and will be removed in the near future"))),!e||e(n,r,a)}},e.exports={assertOptions:function(e,t,n){if("object"!=typeof e)throw new o("options must be an object",o.ERR_BAD_OPTION_VALUE);for(var r=Object.keys(e),i=r.length;i-- >0;){var s=r[i],a=t[s];if(a){var u=e[s],c=void 0===u||a(u,s,e);if(!0!==c)throw new o("option "+s+" must be "+c,o.ERR_BAD_OPTION_VALUE)}else if(!0!==n)throw new o("Unknown option "+s,o.ERR_BAD_OPTION)}},validators:i}},4867:(e,t,n)=>{"use strict";var r,o=n(1849),i=Object.prototype.toString,s=(r=Object.create(null),function(e){var t=i.call(e);return r[t]||(r[t]=t.slice(8,-1).toLowerCase())});function a(e){return e=e.toLowerCase(),function(t){return s(t)===e}}function u(e){return Array.isArray(e)}function c(e){return void 0===e}var f=a("ArrayBuffer");function l(e){return null!==e&&"object"==typeof e}function p(e){if("object"!==s(e))return!1;var t=Object.getPrototypeOf(e);return null===t||t===Object.prototype}var d=a("Date"),h=a("File"),v=a("Blob"),m=a("FileList");function g(e){return"[object Function]"===i.call(e)}var y=a("URLSearchParams");function E(e,t){if(null!=e)if("object"!=typeof e&&(e=[e]),u(e))for(var n=0,r=e.length;n<r;n++)t.call(null,e[n],n,e);else for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.call(null,e[o],o,e)}var b,w=(b="undefined"!=typeof Uint8Array&&Object.getPrototypeOf(Uint8Array),function(e){return b&&e instanceof b});e.exports={isArray:u,isArrayBuffer:f,isBuffer:function(e){return null!==e&&!c(e)&&null!==e.constructor&&!c(e.constructor)&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)},isFormData:function(e){var t="[object FormData]";return e&&("function"==typeof FormData&&e instanceof FormData||i.call(e)===t||g(e.toString)&&e.toString()===t)},isArrayBufferView:function(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&f(e.buffer)},isString:function(e){return"string"==typeof e},isNumber:function(e){return"number"==typeof e},isObject:l,isPlainObject:p,isUndefined:c,isDate:d,isFile:h,isBlob:v,isFunction:g,isStream:function(e){return l(e)&&g(e.pipe)},isURLSearchParams:y,isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&("undefined"!=typeof window&&"undefined"!=typeof document)},forEach:E,merge:function e(){var t={};function n(n,r){p(t[r])&&p(n)?t[r]=e(t[r],n):p(n)?t[r]=e({},n):u(n)?t[r]=n.slice():t[r]=n}for(var r=0,o=arguments.length;r<o;r++)E(arguments[r],n);return t},extend:function(e,t,n){return E(t,(function(t,r){e[r]=n&&"function"==typeof t?o(t,n):t})),e},trim:function(e){return e.trim?e.trim():e.replace(/^\s+|\s+$/g,"")},stripBOM:function(e){return 65279===e.charCodeAt(0)&&(e=e.slice(1)),e},inherits:function(e,t,n,r){e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,n&&Object.assign(e.prototype,n)},toFlatObject:function(e,t,n){var r,o,i,s={};t=t||{};do{for(o=(r=Object.getOwnPropertyNames(e)).length;o-- >0;)s[i=r[o]]||(t[i]=e[i],s[i]=!0);e=Object.getPrototypeOf(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},kindOf:s,kindOfTest:a,endsWith:function(e,t,n){e=String(e),(void 0===n||n>e.length)&&(n=e.length),n-=t.length;var r=e.indexOf(t,n);return-1!==r&&r===n},toArray:function(e){if(!e)return null;var t=e.length;if(c(t))return null;for(var n=new Array(t);t-- >0;)n[t]=e[t];return n},isTypedArray:w,isFileList:m}},6518:e=>{"use strict";e.exports=function(e){var t=void 0;t="string"==typeof e?[e]:e.raw;for(var n="",r=0;r<t.length;r++)n+=t[r].replace(/\\\n[ \t]*/g,"").replace(/\\`/g,"`"),r<(arguments.length<=1?0:arguments.length-1)&&(n+=arguments.length<=r+1?void 0:arguments[r+1]);var o=n.split("\n"),i=null;return o.forEach((function(e){var t=e.match(/^(\s+)\S+/);if(t){var n=t[1].length;i=i?Math.min(i,n):n}})),null!==i&&(n=o.map((function(e){return" "===e[0]?e.slice(i):e})).join("\n")),(n=n.trim()).replace(/\\n/g,"\n")}},5671:(e,t,n)=>{"use strict";n.d(t,{Y:()=>f});var r=n(7294),o={characterData:!0,characterDataOldValue:!0,childList:!0,subtree:!0};function i(e){var t=window.getSelection();t.empty(),t.addRange(e)}function s(e){return(e.metaKey||e.ctrlKey)&&!e.altKey&&"KeyZ"===e.code}function a(e){e=[e.firstChild];for(var t,n="";t=e.pop();)t.nodeType===Node.TEXT_NODE?n+=t.textContent:t.nodeType===Node.ELEMENT_NODE&&"BR"===t.nodeName&&(n+="\n"),t.nextSibling&&e.push(t.nextSibling),t.firstChild&&e.push(t.firstChild);return"\n"!==n[n.length-1]&&(n+="\n"),n}function u(e){var t=window.getSelection().getRangeAt(0),n=t.collapsed?0:t.toString().length,r=document.createRange();return r.setStart(e,0),r.setEnd(t.startContainer,t.startOffset),{position:e=(r=r.toString()).length,extent:n,content:r=(r=r.split("\n"))[t=r.length-1],line:t}}function c(e,t,n){0>=t&&(t=0),(!n||0>n)&&(n=t);var r=document.createRange();e=[e.firstChild];for(var o,i=0,s=t;o=e[e.length-1];){if(o.nodeType===Node.TEXT_NODE){if(i+o.textContent.length>=s){var a=s-i;if(s===t){if(s=r,a<o.textContent.length?s.setStart(o,a):s.setStartAfter(o),n!==t){s=n;continue}break}t=r,a<(n=o).textContent.length?t.setEnd(n,a):t.setEndAfter(n);break}i+=o.textContent.length}else if(o.nodeType===Node.ELEMENT_NODE&&"BR"===o.nodeName){if(i+1>=s){if(s===t){if(a=r,0<o.textContent.length?a.setStart(o,0):a.setStartAfter(o),n!==t){s=n;continue}break}t=r,0<(n=o).textContent.length?t.setEnd(n,0):t.setEndAfter(n);break}i++}e.pop(),o.nextSibling&&e.push(o.nextSibling),o.firstChild&&e.push(o.firstChild)}return r}function f(e,t,n){function f(t){var n=e.current;if(n){var r=u(n);n=a(n),r.position+=t.length-n.length,m.position=r,m.onChange(t,r)}}function l(t,n){var r=e.current;if(r){var o=window.getSelection().getRangeAt(0);o.deleteContents(),o.collapse();var s=n||0;(o=c(r,n=(o=u(r)).position+(0>s?s:0),o.position+(0<s?s:0))).deleteContents(),t&&o.insertNode(document.createTextNode(t)),i(c(r,n+t.length))}}function p(t){var n=e.current;if(n){n.focus();var r=0;if("number"==typeof t)r=t;else{var o=a(n).split("\n").slice(0,t.row);t.row&&(r+=o.join("\n").length+1),r+=t.column}i(c(n,r))}}function d(){var t=e.current;return{text:a(t),position:t=u(t)}}function h(){m.observer.disconnect()}n||(n={});var v=(0,r.useState)([])[1],m=(0,r.useState)((function(){var e={observer:null,disconnected:!1,onChange:t,queue:[],history:[],historyAt:-1,position:null};return"undefined"!=typeof MutationObserver&&(e.observer=new MutationObserver((function(t){var n;(n=e.queue).push.apply(n,t)}))),e}))[0],g=(0,r.useMemo)((function(){return{update:f,insert:l,move:p,getState:d}}),[]);return"object"!=typeof navigator||((0,r.useLayoutEffect)((function(){if(m.onChange=t,e.current&&!n.disabled){if(m.disconnected=!1,m.observer.observe(e.current,o),m.position){var r=m.position,s=r.position;i(c(e.current,s,s+r.extent))}return h}})),(0,r.useLayoutEffect)((function(){if(e.current&&!n.disabled){var t=e.current;if(m.position){t.focus();var r=m.position,o=r.position;i(c(t,o,o+r.extent))}var f=t.style.whiteSpace,l=t.contentEditable,p=!0;try{t.contentEditable="plaintext-only"}catch(S){t.contentEditable="true",p=!1}"pre"!==f&&(t.style.whiteSpace="pre-wrap"),n.indentation&&(t.style.tabSize=t.style.MozTabSize=""+n.indentation),r=""+" ".repeat(n.indentation||0);var d,h=new RegExp("^(?:"+r+")"),y=new RegExp("^(?:"+r+")*("+r+")$"),E=function(n){if(e.current&&m.position){var r=a(t),o=u(t),i=(new Date).valueOf(),s=m.history[m.historyAt];!n&&500>i-d||s&&s[1]===r?d=i:(n=++m.historyAt,m.history[n]=[o,r],m.history.splice(n+1),500<n&&(m.historyAt--,m.history.shift()))}},b=function(){var e;if((e=m.queue).push.apply(e,m.observer.takeRecords()),e=u(t),m.queue.length){m.observer.disconnect(),m.disconnected=!0;var n,r,o=a(t);for(m.position=e;n=m.queue.pop();){for(null!==n.oldValue&&(n.target.textContent=n.oldValue),r=n.removedNodes.length-1;0<=r;r--)n.target.insertBefore(n.removedNodes[r],n.nextSibling);for(r=n.addedNodes.length-1;0<=r;r--)n.addedNodes[r].parentNode&&n.target.removeChild(n.addedNodes[r])}m.onChange(o,e)}},w=function(e){if(!e.defaultPrevented&&e.target===t){if(m.disconnected)return e.preventDefault(),v([]);if(s(e))e.preventDefault(),e.shiftKey?(e=++m.historyAt,(e=m.history[e])||(m.historyAt=m.history.length-1)):(e=--m.historyAt,(e=m.history[e])||(m.historyAt=0)),e&&(m.observer.disconnect(),m.disconnected=!0,m.position=e[0],m.onChange(e[1],e[0]));else{if(E(),"Enter"===e.key){e.preventDefault();var r=u(t),o=/\S/g.exec(r.content);r="\n"+r.content.slice(0,o?o.index:r.content.length),g.insert(r)}else if(p&&!n.indentation||"Backspace"!==e.key){if(n.indentation&&"Tab"===e.key){e.preventDefault(),o=(r=u(t)).position-r.content.length;var i=a(t);r=e.shiftKey?i.slice(0,o)+r.content.replace(h,"")+i.slice(o+r.content.length):i.slice(0,o)+(n.indentation?" ".repeat(n.indentation):"\t")+i.slice(o),g.update(r)}}else e.preventDefault(),window.getSelection().getRangeAt(0).collapsed?(r=u(t),r=y.exec(r.content),g.insert("",r?-r[1].length:-1)):g.insert("",0);e.repeat&&b()}}},x=function(e){e.defaultPrevented||e.isComposing||(s(e)||E(),b(),t.focus())},O=function(e){m.position=window.getSelection().rangeCount&&e.target===t?u(t):null},R=function(e){e.preventDefault(),E(!0),g.insert(e.clipboardData.getData("text/plain")),E(!0),b()};return document.addEventListener("selectstart",O),window.addEventListener("keydown",w),t.addEventListener("paste",R),t.addEventListener("keyup",x),function(){document.removeEventListener("selectstart",O),window.removeEventListener("keydown",w),t.removeEventListener("paste",R),t.removeEventListener("keyup",x),t.style.whiteSpace=f,t.contentEditable=l}}m.history.length=0,m.historyAt=-1}),[e.current,n.disabled,n.indentation])),g}},1880:(e,t,n)=>{"use strict";function r(e,t){return t||(t=e.slice(0)),e.raw=t,e}n.d(t,{Z:()=>r})}}]);