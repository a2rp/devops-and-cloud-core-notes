(function(){const d=document.createElement("link").relList;if(d&&d.supports&&d.supports("modulepreload"))return;for(const x of document.querySelectorAll('link[rel="modulepreload"]'))p(x);new MutationObserver(x=>{for(const k of x)if(k.type==="childList")for(const h of k.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&p(h)}).observe(document,{childList:!0,subtree:!0});function c(x){const k={};return x.integrity&&(k.integrity=x.integrity),x.referrerPolicy&&(k.referrerPolicy=x.referrerPolicy),x.crossOrigin==="use-credentials"?k.credentials="include":x.crossOrigin==="anonymous"?k.credentials="omit":k.credentials="same-origin",k}function p(x){if(x.ep)return;x.ep=!0;const k=c(x);fetch(x.href,k)}})();function zf(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var ra={exports:{}},To={},ta={exports:{}},be={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Su;function Nf(){if(Su)return be;Su=1;var s=Symbol.for("react.element"),d=Symbol.for("react.portal"),c=Symbol.for("react.fragment"),p=Symbol.for("react.strict_mode"),x=Symbol.for("react.profiler"),k=Symbol.for("react.provider"),h=Symbol.for("react.context"),y=Symbol.for("react.forward_ref"),S=Symbol.for("react.suspense"),le=Symbol.for("react.memo"),ae=Symbol.for("react.lazy"),q=Symbol.iterator;function me(v){return v===null||typeof v!="object"?null:(v=q&&v[q]||v["@@iterator"],typeof v=="function"?v:null)}var Te={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},he=Object.assign,X={};function ce(v,C,ge){this.props=v,this.context=C,this.refs=X,this.updater=ge||Te}ce.prototype.isReactComponent={},ce.prototype.setState=function(v,C){if(typeof v!="object"&&typeof v!="function"&&v!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,v,C,"setState")},ce.prototype.forceUpdate=function(v){this.updater.enqueueForceUpdate(this,v,"forceUpdate")};function _e(){}_e.prototype=ce.prototype;function Pe(v,C,ge){this.props=v,this.context=C,this.refs=X,this.updater=ge||Te}var je=Pe.prototype=new _e;je.constructor=Pe,he(je,ce.prototype),je.isPureReactComponent=!0;var I=Array.isArray,fe=Object.prototype.hasOwnProperty,Z={current:null},L={key:!0,ref:!0,__self:!0,__source:!0};function G(v,C,ge){var ve,Ce={},ke=null,ze=null;if(C!=null)for(ve in C.ref!==void 0&&(ze=C.ref),C.key!==void 0&&(ke=""+C.key),C)fe.call(C,ve)&&!L.hasOwnProperty(ve)&&(Ce[ve]=C[ve]);var Ee=arguments.length-2;if(Ee===1)Ce.children=ge;else if(1<Ee){for(var Be=Array(Ee),Ge=0;Ge<Ee;Ge++)Be[Ge]=arguments[Ge+2];Ce.children=Be}if(v&&v.defaultProps)for(ve in Ee=v.defaultProps,Ee)Ce[ve]===void 0&&(Ce[ve]=Ee[ve]);return{$$typeof:s,type:v,key:ke,ref:ze,props:Ce,_owner:Z.current}}function He(v,C){return{$$typeof:s,type:v.type,key:C,ref:v.ref,props:v.props,_owner:v._owner}}function qe(v){return typeof v=="object"&&v!==null&&v.$$typeof===s}function Se(v){var C={"=":"=0",":":"=2"};return"$"+v.replace(/[=:]/g,function(ge){return C[ge]})}var Ve=/\/+/g;function Fe(v,C){return typeof v=="object"&&v!==null&&v.key!=null?Se(""+v.key):C.toString(36)}function hr(v,C,ge,ve,Ce){var ke=typeof v;(ke==="undefined"||ke==="boolean")&&(v=null);var ze=!1;if(v===null)ze=!0;else switch(ke){case"string":case"number":ze=!0;break;case"object":switch(v.$$typeof){case s:case d:ze=!0}}if(ze)return ze=v,Ce=Ce(ze),v=ve===""?"."+Fe(ze,0):ve,I(Ce)?(ge="",v!=null&&(ge=v.replace(Ve,"$&/")+"/"),hr(Ce,C,ge,"",function(Ge){return Ge})):Ce!=null&&(qe(Ce)&&(Ce=He(Ce,ge+(!Ce.key||ze&&ze.key===Ce.key?"":(""+Ce.key).replace(Ve,"$&/")+"/")+v)),C.push(Ce)),1;if(ze=0,ve=ve===""?".":ve+":",I(v))for(var Ee=0;Ee<v.length;Ee++){ke=v[Ee];var Be=ve+Fe(ke,Ee);ze+=hr(ke,C,ge,Be,Ce)}else if(Be=me(v),typeof Be=="function")for(v=Be.call(v),Ee=0;!(ke=v.next()).done;)ke=ke.value,Be=ve+Fe(ke,Ee++),ze+=hr(ke,C,ge,Be,Ce);else if(ke==="object")throw C=String(v),Error("Objects are not valid as a React child (found: "+(C==="[object Object]"?"object with keys {"+Object.keys(v).join(", ")+"}":C)+"). If you meant to render a collection of children, use an array instead.");return ze}function jr(v,C,ge){if(v==null)return v;var ve=[],Ce=0;return hr(v,ve,"","",function(ke){return C.call(ge,ke,Ce++)}),ve}function fr(v){if(v._status===-1){var C=v._result;C=C(),C.then(function(ge){(v._status===0||v._status===-1)&&(v._status=1,v._result=ge)},function(ge){(v._status===0||v._status===-1)&&(v._status=2,v._result=ge)}),v._status===-1&&(v._status=0,v._result=C)}if(v._status===1)return v._result.default;throw v._result}var We={current:null},N={transition:null},V={ReactCurrentDispatcher:We,ReactCurrentBatchConfig:N,ReactCurrentOwner:Z};function _(){throw Error("act(...) is not supported in production builds of React.")}return be.Children={map:jr,forEach:function(v,C,ge){jr(v,function(){C.apply(this,arguments)},ge)},count:function(v){var C=0;return jr(v,function(){C++}),C},toArray:function(v){return jr(v,function(C){return C})||[]},only:function(v){if(!qe(v))throw Error("React.Children.only expected to receive a single React element child.");return v}},be.Component=ce,be.Fragment=c,be.Profiler=x,be.PureComponent=Pe,be.StrictMode=p,be.Suspense=S,be.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=V,be.act=_,be.cloneElement=function(v,C,ge){if(v==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+v+".");var ve=he({},v.props),Ce=v.key,ke=v.ref,ze=v._owner;if(C!=null){if(C.ref!==void 0&&(ke=C.ref,ze=Z.current),C.key!==void 0&&(Ce=""+C.key),v.type&&v.type.defaultProps)var Ee=v.type.defaultProps;for(Be in C)fe.call(C,Be)&&!L.hasOwnProperty(Be)&&(ve[Be]=C[Be]===void 0&&Ee!==void 0?Ee[Be]:C[Be])}var Be=arguments.length-2;if(Be===1)ve.children=ge;else if(1<Be){Ee=Array(Be);for(var Ge=0;Ge<Be;Ge++)Ee[Ge]=arguments[Ge+2];ve.children=Ee}return{$$typeof:s,type:v.type,key:Ce,ref:ke,props:ve,_owner:ze}},be.createContext=function(v){return v={$$typeof:h,_currentValue:v,_currentValue2:v,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},v.Provider={$$typeof:k,_context:v},v.Consumer=v},be.createElement=G,be.createFactory=function(v){var C=G.bind(null,v);return C.type=v,C},be.createRef=function(){return{current:null}},be.forwardRef=function(v){return{$$typeof:y,render:v}},be.isValidElement=qe,be.lazy=function(v){return{$$typeof:ae,_payload:{_status:-1,_result:v},_init:fr}},be.memo=function(v,C){return{$$typeof:le,type:v,compare:C===void 0?null:C}},be.startTransition=function(v){var C=N.transition;N.transition={};try{v()}finally{N.transition=C}},be.unstable_act=_,be.useCallback=function(v,C){return We.current.useCallback(v,C)},be.useContext=function(v){return We.current.useContext(v)},be.useDebugValue=function(){},be.useDeferredValue=function(v){return We.current.useDeferredValue(v)},be.useEffect=function(v,C){return We.current.useEffect(v,C)},be.useId=function(){return We.current.useId()},be.useImperativeHandle=function(v,C,ge){return We.current.useImperativeHandle(v,C,ge)},be.useInsertionEffect=function(v,C){return We.current.useInsertionEffect(v,C)},be.useLayoutEffect=function(v,C){return We.current.useLayoutEffect(v,C)},be.useMemo=function(v,C){return We.current.useMemo(v,C)},be.useReducer=function(v,C,ge){return We.current.useReducer(v,C,ge)},be.useRef=function(v){return We.current.useRef(v)},be.useState=function(v){return We.current.useState(v)},be.useSyncExternalStore=function(v,C,ge){return We.current.useSyncExternalStore(v,C,ge)},be.useTransition=function(){return We.current.useTransition()},be.version="18.3.1",be}var Cu;function ya(){return Cu||(Cu=1,ta.exports=Nf()),ta.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Tu;function Lf(){if(Tu)return To;Tu=1;var s=ya(),d=Symbol.for("react.element"),c=Symbol.for("react.fragment"),p=Object.prototype.hasOwnProperty,x=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,k={key:!0,ref:!0,__self:!0,__source:!0};function h(y,S,le){var ae,q={},me=null,Te=null;le!==void 0&&(me=""+le),S.key!==void 0&&(me=""+S.key),S.ref!==void 0&&(Te=S.ref);for(ae in S)p.call(S,ae)&&!k.hasOwnProperty(ae)&&(q[ae]=S[ae]);if(y&&y.defaultProps)for(ae in S=y.defaultProps,S)q[ae]===void 0&&(q[ae]=S[ae]);return{$$typeof:d,type:y,key:me,ref:Te,props:q,_owner:x.current}}return To.Fragment=c,To.jsx=h,To.jsxs=h,To}var Eu;function If(){return Eu||(Eu=1,ra.exports=Lf()),ra.exports}var t=If(),Gi={},na={exports:{}},Pr={},oa={exports:{}},ia={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pu;function _f(){return Pu||(Pu=1,(function(s){function d(N,V){var _=N.length;N.push(V);e:for(;0<_;){var v=_-1>>>1,C=N[v];if(0<x(C,V))N[v]=V,N[_]=C,_=v;else break e}}function c(N){return N.length===0?null:N[0]}function p(N){if(N.length===0)return null;var V=N[0],_=N.pop();if(_!==V){N[0]=_;e:for(var v=0,C=N.length,ge=C>>>1;v<ge;){var ve=2*(v+1)-1,Ce=N[ve],ke=ve+1,ze=N[ke];if(0>x(Ce,_))ke<C&&0>x(ze,Ce)?(N[v]=ze,N[ke]=_,v=ke):(N[v]=Ce,N[ve]=_,v=ve);else if(ke<C&&0>x(ze,_))N[v]=ze,N[ke]=_,v=ke;else break e}}return V}function x(N,V){var _=N.sortIndex-V.sortIndex;return _!==0?_:N.id-V.id}if(typeof performance=="object"&&typeof performance.now=="function"){var k=performance;s.unstable_now=function(){return k.now()}}else{var h=Date,y=h.now();s.unstable_now=function(){return h.now()-y}}var S=[],le=[],ae=1,q=null,me=3,Te=!1,he=!1,X=!1,ce=typeof setTimeout=="function"?setTimeout:null,_e=typeof clearTimeout=="function"?clearTimeout:null,Pe=typeof setImmediate!="undefined"?setImmediate:null;typeof navigator!="undefined"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function je(N){for(var V=c(le);V!==null;){if(V.callback===null)p(le);else if(V.startTime<=N)p(le),V.sortIndex=V.expirationTime,d(S,V);else break;V=c(le)}}function I(N){if(X=!1,je(N),!he)if(c(S)!==null)he=!0,fr(fe);else{var V=c(le);V!==null&&We(I,V.startTime-N)}}function fe(N,V){he=!1,X&&(X=!1,_e(G),G=-1),Te=!0;var _=me;try{for(je(V),q=c(S);q!==null&&(!(q.expirationTime>V)||N&&!Se());){var v=q.callback;if(typeof v=="function"){q.callback=null,me=q.priorityLevel;var C=v(q.expirationTime<=V);V=s.unstable_now(),typeof C=="function"?q.callback=C:q===c(S)&&p(S),je(V)}else p(S);q=c(S)}if(q!==null)var ge=!0;else{var ve=c(le);ve!==null&&We(I,ve.startTime-V),ge=!1}return ge}finally{q=null,me=_,Te=!1}}var Z=!1,L=null,G=-1,He=5,qe=-1;function Se(){return!(s.unstable_now()-qe<He)}function Ve(){if(L!==null){var N=s.unstable_now();qe=N;var V=!0;try{V=L(!0,N)}finally{V?Fe():(Z=!1,L=null)}}else Z=!1}var Fe;if(typeof Pe=="function")Fe=function(){Pe(Ve)};else if(typeof MessageChannel!="undefined"){var hr=new MessageChannel,jr=hr.port2;hr.port1.onmessage=Ve,Fe=function(){jr.postMessage(null)}}else Fe=function(){ce(Ve,0)};function fr(N){L=N,Z||(Z=!0,Fe())}function We(N,V){G=ce(function(){N(s.unstable_now())},V)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(N){N.callback=null},s.unstable_continueExecution=function(){he||Te||(he=!0,fr(fe))},s.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):He=0<N?Math.floor(1e3/N):5},s.unstable_getCurrentPriorityLevel=function(){return me},s.unstable_getFirstCallbackNode=function(){return c(S)},s.unstable_next=function(N){switch(me){case 1:case 2:case 3:var V=3;break;default:V=me}var _=me;me=V;try{return N()}finally{me=_}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(N,V){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var _=me;me=N;try{return V()}finally{me=_}},s.unstable_scheduleCallback=function(N,V,_){var v=s.unstable_now();switch(typeof _=="object"&&_!==null?(_=_.delay,_=typeof _=="number"&&0<_?v+_:v):_=v,N){case 1:var C=-1;break;case 2:C=250;break;case 5:C=1073741823;break;case 4:C=1e4;break;default:C=5e3}return C=_+C,N={id:ae++,callback:V,priorityLevel:N,startTime:_,expirationTime:C,sortIndex:-1},_>v?(N.sortIndex=_,d(le,N),c(S)===null&&N===c(le)&&(X?(_e(G),G=-1):X=!0,We(I,_-v))):(N.sortIndex=C,d(S,N),he||Te||(he=!0,fr(fe))),N},s.unstable_shouldYield=Se,s.unstable_wrapCallback=function(N){var V=me;return function(){var _=me;me=V;try{return N.apply(this,arguments)}finally{me=_}}}})(ia)),ia}var zu;function Bf(){return zu||(zu=1,oa.exports=_f()),oa.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Nu;function Rf(){if(Nu)return Pr;Nu=1;var s=ya(),d=Bf();function c(e){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)r+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var p=new Set,x={};function k(e,r){h(e,r),h(e+"Capture",r)}function h(e,r){for(x[e]=r,e=0;e<r.length;e++)p.add(r[e])}var y=!(typeof window=="undefined"||typeof window.document=="undefined"||typeof window.document.createElement=="undefined"),S=Object.prototype.hasOwnProperty,le=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ae={},q={};function me(e){return S.call(q,e)?!0:S.call(ae,e)?!1:le.test(e)?q[e]=!0:(ae[e]=!0,!1)}function Te(e,r,n,o){if(n!==null&&n.type===0)return!1;switch(typeof r){case"function":case"symbol":return!0;case"boolean":return o?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function he(e,r,n,o){if(r===null||typeof r=="undefined"||Te(e,r,n,o))return!0;if(o)return!1;if(n!==null)switch(n.type){case 3:return!r;case 4:return r===!1;case 5:return isNaN(r);case 6:return isNaN(r)||1>r}return!1}function X(e,r,n,o,i,l,u){this.acceptsBooleans=r===2||r===3||r===4,this.attributeName=o,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=r,this.sanitizeURL=l,this.removeEmptyString=u}var ce={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ce[e]=new X(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var r=e[0];ce[r]=new X(r,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){ce[e]=new X(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ce[e]=new X(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ce[e]=new X(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){ce[e]=new X(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){ce[e]=new X(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){ce[e]=new X(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){ce[e]=new X(e,5,!1,e.toLowerCase(),null,!1,!1)});var _e=/[\-:]([a-z])/g;function Pe(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var r=e.replace(_e,Pe);ce[r]=new X(r,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var r=e.replace(_e,Pe);ce[r]=new X(r,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var r=e.replace(_e,Pe);ce[r]=new X(r,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){ce[e]=new X(e,1,!1,e.toLowerCase(),null,!1,!1)}),ce.xlinkHref=new X("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){ce[e]=new X(e,1,!1,e.toLowerCase(),null,!0,!0)});function je(e,r,n,o){var i=ce.hasOwnProperty(r)?ce[r]:null;(i!==null?i.type!==0:o||!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(he(r,n,i,o)&&(n=null),o||i===null?me(r)&&(n===null?e.removeAttribute(r):e.setAttribute(r,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(r=i.attributeName,o=i.attributeNamespace,n===null?e.removeAttribute(r):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,o?e.setAttributeNS(o,r,n):e.setAttribute(r,n))))}var I=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,fe=Symbol.for("react.element"),Z=Symbol.for("react.portal"),L=Symbol.for("react.fragment"),G=Symbol.for("react.strict_mode"),He=Symbol.for("react.profiler"),qe=Symbol.for("react.provider"),Se=Symbol.for("react.context"),Ve=Symbol.for("react.forward_ref"),Fe=Symbol.for("react.suspense"),hr=Symbol.for("react.suspense_list"),jr=Symbol.for("react.memo"),fr=Symbol.for("react.lazy"),We=Symbol.for("react.offscreen"),N=Symbol.iterator;function V(e){return e===null||typeof e!="object"?null:(e=N&&e[N]||e["@@iterator"],typeof e=="function"?e:null)}var _=Object.assign,v;function C(e){if(v===void 0)try{throw Error()}catch(n){var r=n.stack.trim().match(/\n( *(at )?)/);v=r&&r[1]||""}return`
`+v+e}var ge=!1;function ve(e,r){if(!e||ge)return"";ge=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(r)if(r=function(){throw Error()},Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(r,[])}catch(w){var o=w}Reflect.construct(e,[],r)}else{try{r.call()}catch(w){o=w}e.call(r.prototype)}else{try{throw Error()}catch(w){o=w}e()}}catch(w){if(w&&o&&typeof w.stack=="string"){for(var i=w.stack.split(`
`),l=o.stack.split(`
`),u=i.length-1,f=l.length-1;1<=u&&0<=f&&i[u]!==l[f];)f--;for(;1<=u&&0<=f;u--,f--)if(i[u]!==l[f]){if(u!==1||f!==1)do if(u--,f--,0>f||i[u]!==l[f]){var m=`
`+i[u].replace(" at new "," at ");return e.displayName&&m.includes("<anonymous>")&&(m=m.replace("<anonymous>",e.displayName)),m}while(1<=u&&0<=f);break}}}finally{ge=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?C(e):""}function Ce(e){switch(e.tag){case 5:return C(e.type);case 16:return C("Lazy");case 13:return C("Suspense");case 19:return C("SuspenseList");case 0:case 2:case 15:return e=ve(e.type,!1),e;case 11:return e=ve(e.type.render,!1),e;case 1:return e=ve(e.type,!0),e;default:return""}}function ke(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case L:return"Fragment";case Z:return"Portal";case He:return"Profiler";case G:return"StrictMode";case Fe:return"Suspense";case hr:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Se:return(e.displayName||"Context")+".Consumer";case qe:return(e._context.displayName||"Context")+".Provider";case Ve:var r=e.render;return e=e.displayName,e||(e=r.displayName||r.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case jr:return r=e.displayName||null,r!==null?r:ke(e.type)||"Memo";case fr:r=e._payload,e=e._init;try{return ke(e(r))}catch{}}return null}function ze(e){var r=e.type;switch(e.tag){case 24:return"Cache";case 9:return(r.displayName||"Context")+".Consumer";case 10:return(r._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=r.render,e=e.displayName||e.name||"",r.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return r;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ke(r);case 8:return r===G?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r}return null}function Ee(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Be(e){var r=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function Ge(e){var r=Be(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,r),o=""+e[r];if(!e.hasOwnProperty(r)&&typeof n!="undefined"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,l=n.set;return Object.defineProperty(e,r,{configurable:!0,get:function(){return i.call(this)},set:function(u){o=""+u,l.call(this,u)}}),Object.defineProperty(e,r,{enumerable:n.enumerable}),{getValue:function(){return o},setValue:function(u){o=""+u},stopTracking:function(){e._valueTracker=null,delete e[r]}}}}function gt(e){e._valueTracker||(e._valueTracker=Ge(e))}function Dt(e){if(!e)return!1;var r=e._valueTracker;if(!r)return!0;var n=r.getValue(),o="";return e&&(o=Be(e)?e.checked?"true":"false":e.value),e=o,e!==n?(r.setValue(e),!0):!1}function Yr(e){if(e=e||(typeof document!="undefined"?document:void 0),typeof e=="undefined")return null;try{return e.activeElement||e.body}catch{return e.body}}function as(e,r){var n=r.checked;return _({},r,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n!=null?n:e._wrapperState.initialChecked})}function La(e,r){var n=r.defaultValue==null?"":r.defaultValue,o=r.checked!=null?r.checked:r.defaultChecked;n=Ee(r.value!=null?r.value:n),e._wrapperState={initialChecked:o,initialValue:n,controlled:r.type==="checkbox"||r.type==="radio"?r.checked!=null:r.value!=null}}function Ia(e,r){r=r.checked,r!=null&&je(e,"checked",r,!1)}function cs(e,r){Ia(e,r);var n=Ee(r.value),o=r.type;if(n!=null)o==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(o==="submit"||o==="reset"){e.removeAttribute("value");return}r.hasOwnProperty("value")?ds(e,r.type,n):r.hasOwnProperty("defaultValue")&&ds(e,r.type,Ee(r.defaultValue)),r.checked==null&&r.defaultChecked!=null&&(e.defaultChecked=!!r.defaultChecked)}function _a(e,r,n){if(r.hasOwnProperty("value")||r.hasOwnProperty("defaultValue")){var o=r.type;if(!(o!=="submit"&&o!=="reset"||r.value!==void 0&&r.value!==null))return;r=""+e._wrapperState.initialValue,n||r===e.value||(e.value=r),e.defaultValue=r}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function ds(e,r,n){(r!=="number"||Yr(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Dn=Array.isArray;function an(e,r,n,o){if(e=e.options,r){r={};for(var i=0;i<n.length;i++)r["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=r.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&o&&(e[n].defaultSelected=!0)}else{for(n=""+Ee(n),r=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,o&&(e[i].defaultSelected=!0);return}r!==null||e[i].disabled||(r=e[i])}r!==null&&(r.selected=!0)}}function us(e,r){if(r.dangerouslySetInnerHTML!=null)throw Error(c(91));return _({},r,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Ba(e,r){var n=r.value;if(n==null){if(n=r.children,r=r.defaultValue,n!=null){if(r!=null)throw Error(c(92));if(Dn(n)){if(1<n.length)throw Error(c(93));n=n[0]}r=n}r==null&&(r=""),n=r}e._wrapperState={initialValue:Ee(n)}}function Ra(e,r){var n=Ee(r.value),o=Ee(r.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),r.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),o!=null&&(e.defaultValue=""+o)}function Ha(e){var r=e.textContent;r===e._wrapperState.initialValue&&r!==""&&r!==null&&(e.value=r)}function Wa(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ps(e,r){return e==null||e==="http://www.w3.org/1999/xhtml"?Wa(r):e==="http://www.w3.org/2000/svg"&&r==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Ho,Aa=(function(e){return typeof MSApp!="undefined"&&MSApp.execUnsafeLocalFunction?function(r,n,o,i){MSApp.execUnsafeLocalFunction(function(){return e(r,n,o,i)})}:e})(function(e,r){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=r;else{for(Ho=Ho||document.createElement("div"),Ho.innerHTML="<svg>"+r.valueOf().toString()+"</svg>",r=Ho.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;r.firstChild;)e.appendChild(r.firstChild)}});function On(e,r){if(r){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=r;return}}e.textContent=r}var Fn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ip=["Webkit","ms","Moz","O"];Object.keys(Fn).forEach(function(e){Ip.forEach(function(r){r=r+e.charAt(0).toUpperCase()+e.substring(1),Fn[r]=Fn[e]})});function Ma(e,r,n){return r==null||typeof r=="boolean"||r===""?"":n||typeof r!="number"||r===0||Fn.hasOwnProperty(e)&&Fn[e]?(""+r).trim():r+"px"}function Da(e,r){e=e.style;for(var n in r)if(r.hasOwnProperty(n)){var o=n.indexOf("--")===0,i=Ma(n,r[n],o);n==="float"&&(n="cssFloat"),o?e.setProperty(n,i):e[n]=i}}var _p=_({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function hs(e,r){if(r){if(_p[e]&&(r.children!=null||r.dangerouslySetInnerHTML!=null))throw Error(c(137,e));if(r.dangerouslySetInnerHTML!=null){if(r.children!=null)throw Error(c(60));if(typeof r.dangerouslySetInnerHTML!="object"||!("__html"in r.dangerouslySetInnerHTML))throw Error(c(61))}if(r.style!=null&&typeof r.style!="object")throw Error(c(62))}}function fs(e,r){if(e.indexOf("-")===-1)return typeof r.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var xs=null;function ms(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var gs=null,cn=null,dn=null;function Oa(e){if(e=uo(e)){if(typeof gs!="function")throw Error(c(280));var r=e.stateNode;r&&(r=ii(r),gs(e.stateNode,e.type,r))}}function Fa(e){cn?dn?dn.push(e):dn=[e]:cn=e}function Ua(){if(cn){var e=cn,r=dn;if(dn=cn=null,Oa(e),r)for(e=0;e<r.length;e++)Oa(r[e])}}function Ga(e,r){return e(r)}function $a(){}var vs=!1;function Ya(e,r,n){if(vs)return e(r,n);vs=!0;try{return Ga(e,r,n)}finally{vs=!1,(cn!==null||dn!==null)&&($a(),Ua())}}function Un(e,r){var n=e.stateNode;if(n===null)return null;var o=ii(n);if(o===null)return null;n=o[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(c(231,r,typeof n));return n}var ys=!1;if(y)try{var Gn={};Object.defineProperty(Gn,"passive",{get:function(){ys=!0}}),window.addEventListener("test",Gn,Gn),window.removeEventListener("test",Gn,Gn)}catch{ys=!1}function Bp(e,r,n,o,i,l,u,f,m){var w=Array.prototype.slice.call(arguments,3);try{r.apply(n,w)}catch(E){this.onError(E)}}var $n=!1,Wo=null,Ao=!1,js=null,Rp={onError:function(e){$n=!0,Wo=e}};function Hp(e,r,n,o,i,l,u,f,m){$n=!1,Wo=null,Bp.apply(Rp,arguments)}function Wp(e,r,n,o,i,l,u,f,m){if(Hp.apply(this,arguments),$n){if($n){var w=Wo;$n=!1,Wo=null}else throw Error(c(198));Ao||(Ao=!0,js=w)}}function Ot(e){var r=e,n=e;if(e.alternate)for(;r.return;)r=r.return;else{e=r;do r=e,(r.flags&4098)!==0&&(n=r.return),e=r.return;while(e)}return r.tag===3?n:null}function Va(e){if(e.tag===13){var r=e.memoizedState;if(r===null&&(e=e.alternate,e!==null&&(r=e.memoizedState)),r!==null)return r.dehydrated}return null}function Ka(e){if(Ot(e)!==e)throw Error(c(188))}function Ap(e){var r=e.alternate;if(!r){if(r=Ot(e),r===null)throw Error(c(188));return r!==e?null:e}for(var n=e,o=r;;){var i=n.return;if(i===null)break;var l=i.alternate;if(l===null){if(o=i.return,o!==null){n=o;continue}break}if(i.child===l.child){for(l=i.child;l;){if(l===n)return Ka(i),e;if(l===o)return Ka(i),r;l=l.sibling}throw Error(c(188))}if(n.return!==o.return)n=i,o=l;else{for(var u=!1,f=i.child;f;){if(f===n){u=!0,n=i,o=l;break}if(f===o){u=!0,o=i,n=l;break}f=f.sibling}if(!u){for(f=l.child;f;){if(f===n){u=!0,n=l,o=i;break}if(f===o){u=!0,o=l,n=i;break}f=f.sibling}if(!u)throw Error(c(189))}}if(n.alternate!==o)throw Error(c(190))}if(n.tag!==3)throw Error(c(188));return n.stateNode.current===n?e:r}function Qa(e){return e=Ap(e),e!==null?qa(e):null}function qa(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var r=qa(e);if(r!==null)return r;e=e.sibling}return null}var Xa=d.unstable_scheduleCallback,Za=d.unstable_cancelCallback,Mp=d.unstable_shouldYield,Dp=d.unstable_requestPaint,Xe=d.unstable_now,Op=d.unstable_getCurrentPriorityLevel,bs=d.unstable_ImmediatePriority,Ja=d.unstable_UserBlockingPriority,Mo=d.unstable_NormalPriority,Fp=d.unstable_LowPriority,ec=d.unstable_IdlePriority,Do=null,tt=null;function Up(e){if(tt&&typeof tt.onCommitFiberRoot=="function")try{tt.onCommitFiberRoot(Do,e,void 0,(e.current.flags&128)===128)}catch{}}var Vr=Math.clz32?Math.clz32:Yp,Gp=Math.log,$p=Math.LN2;function Yp(e){return e>>>=0,e===0?32:31-(Gp(e)/$p|0)|0}var Oo=64,Fo=4194304;function Yn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Uo(e,r){var n=e.pendingLanes;if(n===0)return 0;var o=0,i=e.suspendedLanes,l=e.pingedLanes,u=n&268435455;if(u!==0){var f=u&~i;f!==0?o=Yn(f):(l&=u,l!==0&&(o=Yn(l)))}else u=n&~i,u!==0?o=Yn(u):l!==0&&(o=Yn(l));if(o===0)return 0;if(r!==0&&r!==o&&(r&i)===0&&(i=o&-o,l=r&-r,i>=l||i===16&&(l&4194240)!==0))return r;if((o&4)!==0&&(o|=n&16),r=e.entangledLanes,r!==0)for(e=e.entanglements,r&=o;0<r;)n=31-Vr(r),i=1<<n,o|=e[n],r&=~i;return o}function Vp(e,r){switch(e){case 1:case 2:case 4:return r+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Kp(e,r){for(var n=e.suspendedLanes,o=e.pingedLanes,i=e.expirationTimes,l=e.pendingLanes;0<l;){var u=31-Vr(l),f=1<<u,m=i[u];m===-1?((f&n)===0||(f&o)!==0)&&(i[u]=Vp(f,r)):m<=r&&(e.expiredLanes|=f),l&=~f}}function ks(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function rc(){var e=Oo;return Oo<<=1,(Oo&4194240)===0&&(Oo=64),e}function ws(e){for(var r=[],n=0;31>n;n++)r.push(e);return r}function Vn(e,r,n){e.pendingLanes|=r,r!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,r=31-Vr(r),e[r]=n}function Qp(e,r){var n=e.pendingLanes&~r;e.pendingLanes=r,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=r,e.mutableReadLanes&=r,e.entangledLanes&=r,r=e.entanglements;var o=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Vr(n),l=1<<i;r[i]=0,o[i]=-1,e[i]=-1,n&=~l}}function Ss(e,r){var n=e.entangledLanes|=r;for(e=e.entanglements;n;){var o=31-Vr(n),i=1<<o;i&r|e[o]&r&&(e[o]|=r),n&=~i}}var Re=0;function tc(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var nc,Cs,oc,ic,sc,Ts=!1,Go=[],vt=null,yt=null,jt=null,Kn=new Map,Qn=new Map,bt=[],qp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function lc(e,r){switch(e){case"focusin":case"focusout":vt=null;break;case"dragenter":case"dragleave":yt=null;break;case"mouseover":case"mouseout":jt=null;break;case"pointerover":case"pointerout":Kn.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":Qn.delete(r.pointerId)}}function qn(e,r,n,o,i,l){return e===null||e.nativeEvent!==l?(e={blockedOn:r,domEventName:n,eventSystemFlags:o,nativeEvent:l,targetContainers:[i]},r!==null&&(r=uo(r),r!==null&&Cs(r)),e):(e.eventSystemFlags|=o,r=e.targetContainers,i!==null&&r.indexOf(i)===-1&&r.push(i),e)}function Xp(e,r,n,o,i){switch(r){case"focusin":return vt=qn(vt,e,r,n,o,i),!0;case"dragenter":return yt=qn(yt,e,r,n,o,i),!0;case"mouseover":return jt=qn(jt,e,r,n,o,i),!0;case"pointerover":var l=i.pointerId;return Kn.set(l,qn(Kn.get(l)||null,e,r,n,o,i)),!0;case"gotpointercapture":return l=i.pointerId,Qn.set(l,qn(Qn.get(l)||null,e,r,n,o,i)),!0}return!1}function ac(e){var r=Ft(e.target);if(r!==null){var n=Ot(r);if(n!==null){if(r=n.tag,r===13){if(r=Va(n),r!==null){e.blockedOn=r,sc(e.priority,function(){oc(n)});return}}else if(r===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function $o(e){if(e.blockedOn!==null)return!1;for(var r=e.targetContainers;0<r.length;){var n=Ps(e.domEventName,e.eventSystemFlags,r[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var o=new n.constructor(n.type,n);xs=o,n.target.dispatchEvent(o),xs=null}else return r=uo(n),r!==null&&Cs(r),e.blockedOn=n,!1;r.shift()}return!0}function cc(e,r,n){$o(e)&&n.delete(r)}function Zp(){Ts=!1,vt!==null&&$o(vt)&&(vt=null),yt!==null&&$o(yt)&&(yt=null),jt!==null&&$o(jt)&&(jt=null),Kn.forEach(cc),Qn.forEach(cc)}function Xn(e,r){e.blockedOn===r&&(e.blockedOn=null,Ts||(Ts=!0,d.unstable_scheduleCallback(d.unstable_NormalPriority,Zp)))}function Zn(e){function r(i){return Xn(i,e)}if(0<Go.length){Xn(Go[0],e);for(var n=1;n<Go.length;n++){var o=Go[n];o.blockedOn===e&&(o.blockedOn=null)}}for(vt!==null&&Xn(vt,e),yt!==null&&Xn(yt,e),jt!==null&&Xn(jt,e),Kn.forEach(r),Qn.forEach(r),n=0;n<bt.length;n++)o=bt[n],o.blockedOn===e&&(o.blockedOn=null);for(;0<bt.length&&(n=bt[0],n.blockedOn===null);)ac(n),n.blockedOn===null&&bt.shift()}var un=I.ReactCurrentBatchConfig,Yo=!0;function Jp(e,r,n,o){var i=Re,l=un.transition;un.transition=null;try{Re=1,Es(e,r,n,o)}finally{Re=i,un.transition=l}}function eh(e,r,n,o){var i=Re,l=un.transition;un.transition=null;try{Re=4,Es(e,r,n,o)}finally{Re=i,un.transition=l}}function Es(e,r,n,o){if(Yo){var i=Ps(e,r,n,o);if(i===null)$s(e,r,o,Vo,n),lc(e,o);else if(Xp(i,e,r,n,o))o.stopPropagation();else if(lc(e,o),r&4&&-1<qp.indexOf(e)){for(;i!==null;){var l=uo(i);if(l!==null&&nc(l),l=Ps(e,r,n,o),l===null&&$s(e,r,o,Vo,n),l===i)break;i=l}i!==null&&o.stopPropagation()}else $s(e,r,o,null,n)}}var Vo=null;function Ps(e,r,n,o){if(Vo=null,e=ms(o),e=Ft(e),e!==null)if(r=Ot(e),r===null)e=null;else if(n=r.tag,n===13){if(e=Va(r),e!==null)return e;e=null}else if(n===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;e=null}else r!==e&&(e=null);return Vo=e,null}function dc(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Op()){case bs:return 1;case Ja:return 4;case Mo:case Fp:return 16;case ec:return 536870912;default:return 16}default:return 16}}var kt=null,zs=null,Ko=null;function uc(){if(Ko)return Ko;var e,r=zs,n=r.length,o,i="value"in kt?kt.value:kt.textContent,l=i.length;for(e=0;e<n&&r[e]===i[e];e++);var u=n-e;for(o=1;o<=u&&r[n-o]===i[l-o];o++);return Ko=i.slice(e,1<o?1-o:void 0)}function Qo(e){var r=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&r===13&&(e=13)):e=r,e===10&&(e=13),32<=e||e===13?e:0}function qo(){return!0}function pc(){return!1}function Lr(e){function r(n,o,i,l,u){this._reactName=n,this._targetInst=i,this.type=o,this.nativeEvent=l,this.target=u,this.currentTarget=null;for(var f in e)e.hasOwnProperty(f)&&(n=e[f],this[f]=n?n(l):l[f]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?qo:pc,this.isPropagationStopped=pc,this}return _(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=qo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=qo)},persist:function(){},isPersistent:qo}),r}var pn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ns=Lr(pn),Jn=_({},pn,{view:0,detail:0}),rh=Lr(Jn),Ls,Is,eo,Xo=_({},Jn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Bs,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==eo&&(eo&&e.type==="mousemove"?(Ls=e.screenX-eo.screenX,Is=e.screenY-eo.screenY):Is=Ls=0,eo=e),Ls)},movementY:function(e){return"movementY"in e?e.movementY:Is}}),hc=Lr(Xo),th=_({},Xo,{dataTransfer:0}),nh=Lr(th),oh=_({},Jn,{relatedTarget:0}),_s=Lr(oh),ih=_({},pn,{animationName:0,elapsedTime:0,pseudoElement:0}),sh=Lr(ih),lh=_({},pn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),ah=Lr(lh),ch=_({},pn,{data:0}),fc=Lr(ch),dh={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},uh={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ph={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function hh(e){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(e):(e=ph[e])?!!r[e]:!1}function Bs(){return hh}var fh=_({},Jn,{key:function(e){if(e.key){var r=dh[e.key]||e.key;if(r!=="Unidentified")return r}return e.type==="keypress"?(e=Qo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?uh[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Bs,charCode:function(e){return e.type==="keypress"?Qo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Qo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),xh=Lr(fh),mh=_({},Xo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),xc=Lr(mh),gh=_({},Jn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Bs}),vh=Lr(gh),yh=_({},pn,{propertyName:0,elapsedTime:0,pseudoElement:0}),jh=Lr(yh),bh=_({},Xo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),kh=Lr(bh),wh=[9,13,27,32],Rs=y&&"CompositionEvent"in window,ro=null;y&&"documentMode"in document&&(ro=document.documentMode);var Sh=y&&"TextEvent"in window&&!ro,mc=y&&(!Rs||ro&&8<ro&&11>=ro),gc=" ",vc=!1;function yc(e,r){switch(e){case"keyup":return wh.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function jc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var hn=!1;function Ch(e,r){switch(e){case"compositionend":return jc(r);case"keypress":return r.which!==32?null:(vc=!0,gc);case"textInput":return e=r.data,e===gc&&vc?null:e;default:return null}}function Th(e,r){if(hn)return e==="compositionend"||!Rs&&yc(e,r)?(e=uc(),Ko=zs=kt=null,hn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return mc&&r.locale!=="ko"?null:r.data;default:return null}}var Eh={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function bc(e){var r=e&&e.nodeName&&e.nodeName.toLowerCase();return r==="input"?!!Eh[e.type]:r==="textarea"}function kc(e,r,n,o){Fa(o),r=ti(r,"onChange"),0<r.length&&(n=new Ns("onChange","change",null,n,o),e.push({event:n,listeners:r}))}var to=null,no=null;function Ph(e){Dc(e,0)}function Zo(e){var r=vn(e);if(Dt(r))return e}function zh(e,r){if(e==="change")return r}var wc=!1;if(y){var Hs;if(y){var Ws="oninput"in document;if(!Ws){var Sc=document.createElement("div");Sc.setAttribute("oninput","return;"),Ws=typeof Sc.oninput=="function"}Hs=Ws}else Hs=!1;wc=Hs&&(!document.documentMode||9<document.documentMode)}function Cc(){to&&(to.detachEvent("onpropertychange",Tc),no=to=null)}function Tc(e){if(e.propertyName==="value"&&Zo(no)){var r=[];kc(r,no,e,ms(e)),Ya(Ph,r)}}function Nh(e,r,n){e==="focusin"?(Cc(),to=r,no=n,to.attachEvent("onpropertychange",Tc)):e==="focusout"&&Cc()}function Lh(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Zo(no)}function Ih(e,r){if(e==="click")return Zo(r)}function _h(e,r){if(e==="input"||e==="change")return Zo(r)}function Bh(e,r){return e===r&&(e!==0||1/e===1/r)||e!==e&&r!==r}var Kr=typeof Object.is=="function"?Object.is:Bh;function oo(e,r){if(Kr(e,r))return!0;if(typeof e!="object"||e===null||typeof r!="object"||r===null)return!1;var n=Object.keys(e),o=Object.keys(r);if(n.length!==o.length)return!1;for(o=0;o<n.length;o++){var i=n[o];if(!S.call(r,i)||!Kr(e[i],r[i]))return!1}return!0}function Ec(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Pc(e,r){var n=Ec(e);e=0;for(var o;n;){if(n.nodeType===3){if(o=e+n.textContent.length,e<=r&&o>=r)return{node:n,offset:r-e};e=o}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Ec(n)}}function zc(e,r){return e&&r?e===r?!0:e&&e.nodeType===3?!1:r&&r.nodeType===3?zc(e,r.parentNode):"contains"in e?e.contains(r):e.compareDocumentPosition?!!(e.compareDocumentPosition(r)&16):!1:!1}function Nc(){for(var e=window,r=Yr();r instanceof e.HTMLIFrameElement;){try{var n=typeof r.contentWindow.location.href=="string"}catch{n=!1}if(n)e=r.contentWindow;else break;r=Yr(e.document)}return r}function As(e){var r=e&&e.nodeName&&e.nodeName.toLowerCase();return r&&(r==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||r==="textarea"||e.contentEditable==="true")}function Rh(e){var r=Nc(),n=e.focusedElem,o=e.selectionRange;if(r!==n&&n&&n.ownerDocument&&zc(n.ownerDocument.documentElement,n)){if(o!==null&&As(n)){if(r=o.start,e=o.end,e===void 0&&(e=r),"selectionStart"in n)n.selectionStart=r,n.selectionEnd=Math.min(e,n.value.length);else if(e=(r=n.ownerDocument||document)&&r.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,l=Math.min(o.start,i);o=o.end===void 0?l:Math.min(o.end,i),!e.extend&&l>o&&(i=o,o=l,l=i),i=Pc(n,l);var u=Pc(n,o);i&&u&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==u.node||e.focusOffset!==u.offset)&&(r=r.createRange(),r.setStart(i.node,i.offset),e.removeAllRanges(),l>o?(e.addRange(r),e.extend(u.node,u.offset)):(r.setEnd(u.node,u.offset),e.addRange(r)))}}for(r=[],e=n;e=e.parentNode;)e.nodeType===1&&r.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<r.length;n++)e=r[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Hh=y&&"documentMode"in document&&11>=document.documentMode,fn=null,Ms=null,io=null,Ds=!1;function Lc(e,r,n){var o=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ds||fn==null||fn!==Yr(o)||(o=fn,"selectionStart"in o&&As(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),io&&oo(io,o)||(io=o,o=ti(Ms,"onSelect"),0<o.length&&(r=new Ns("onSelect","select",null,r,n),e.push({event:r,listeners:o}),r.target=fn)))}function Jo(e,r){var n={};return n[e.toLowerCase()]=r.toLowerCase(),n["Webkit"+e]="webkit"+r,n["Moz"+e]="moz"+r,n}var xn={animationend:Jo("Animation","AnimationEnd"),animationiteration:Jo("Animation","AnimationIteration"),animationstart:Jo("Animation","AnimationStart"),transitionend:Jo("Transition","TransitionEnd")},Os={},Ic={};y&&(Ic=document.createElement("div").style,"AnimationEvent"in window||(delete xn.animationend.animation,delete xn.animationiteration.animation,delete xn.animationstart.animation),"TransitionEvent"in window||delete xn.transitionend.transition);function ei(e){if(Os[e])return Os[e];if(!xn[e])return e;var r=xn[e],n;for(n in r)if(r.hasOwnProperty(n)&&n in Ic)return Os[e]=r[n];return e}var _c=ei("animationend"),Bc=ei("animationiteration"),Rc=ei("animationstart"),Hc=ei("transitionend"),Wc=new Map,Ac="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function wt(e,r){Wc.set(e,r),k(r,[e])}for(var Fs=0;Fs<Ac.length;Fs++){var Us=Ac[Fs],Wh=Us.toLowerCase(),Ah=Us[0].toUpperCase()+Us.slice(1);wt(Wh,"on"+Ah)}wt(_c,"onAnimationEnd"),wt(Bc,"onAnimationIteration"),wt(Rc,"onAnimationStart"),wt("dblclick","onDoubleClick"),wt("focusin","onFocus"),wt("focusout","onBlur"),wt(Hc,"onTransitionEnd"),h("onMouseEnter",["mouseout","mouseover"]),h("onMouseLeave",["mouseout","mouseover"]),h("onPointerEnter",["pointerout","pointerover"]),h("onPointerLeave",["pointerout","pointerover"]),k("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),k("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),k("onBeforeInput",["compositionend","keypress","textInput","paste"]),k("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),k("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),k("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var so="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Mh=new Set("cancel close invalid load scroll toggle".split(" ").concat(so));function Mc(e,r,n){var o=e.type||"unknown-event";e.currentTarget=n,Wp(o,r,void 0,e),e.currentTarget=null}function Dc(e,r){r=(r&4)!==0;for(var n=0;n<e.length;n++){var o=e[n],i=o.event;o=o.listeners;e:{var l=void 0;if(r)for(var u=o.length-1;0<=u;u--){var f=o[u],m=f.instance,w=f.currentTarget;if(f=f.listener,m!==l&&i.isPropagationStopped())break e;Mc(i,f,w),l=m}else for(u=0;u<o.length;u++){if(f=o[u],m=f.instance,w=f.currentTarget,f=f.listener,m!==l&&i.isPropagationStopped())break e;Mc(i,f,w),l=m}}}if(Ao)throw e=js,Ao=!1,js=null,e}function Me(e,r){var n=r[Xs];n===void 0&&(n=r[Xs]=new Set);var o=e+"__bubble";n.has(o)||(Oc(r,e,2,!1),n.add(o))}function Gs(e,r,n){var o=0;r&&(o|=4),Oc(n,e,o,r)}var ri="_reactListening"+Math.random().toString(36).slice(2);function lo(e){if(!e[ri]){e[ri]=!0,p.forEach(function(n){n!=="selectionchange"&&(Mh.has(n)||Gs(n,!1,e),Gs(n,!0,e))});var r=e.nodeType===9?e:e.ownerDocument;r===null||r[ri]||(r[ri]=!0,Gs("selectionchange",!1,r))}}function Oc(e,r,n,o){switch(dc(r)){case 1:var i=Jp;break;case 4:i=eh;break;default:i=Es}n=i.bind(null,r,n,e),i=void 0,!ys||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(i=!0),o?i!==void 0?e.addEventListener(r,n,{capture:!0,passive:i}):e.addEventListener(r,n,!0):i!==void 0?e.addEventListener(r,n,{passive:i}):e.addEventListener(r,n,!1)}function $s(e,r,n,o,i){var l=o;if((r&1)===0&&(r&2)===0&&o!==null)e:for(;;){if(o===null)return;var u=o.tag;if(u===3||u===4){var f=o.stateNode.containerInfo;if(f===i||f.nodeType===8&&f.parentNode===i)break;if(u===4)for(u=o.return;u!==null;){var m=u.tag;if((m===3||m===4)&&(m=u.stateNode.containerInfo,m===i||m.nodeType===8&&m.parentNode===i))return;u=u.return}for(;f!==null;){if(u=Ft(f),u===null)return;if(m=u.tag,m===5||m===6){o=l=u;continue e}f=f.parentNode}}o=o.return}Ya(function(){var w=l,E=ms(n),P=[];e:{var T=Wc.get(e);if(T!==void 0){var B=Ns,M=e;switch(e){case"keypress":if(Qo(n)===0)break e;case"keydown":case"keyup":B=xh;break;case"focusin":M="focus",B=_s;break;case"focusout":M="blur",B=_s;break;case"beforeblur":case"afterblur":B=_s;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":B=hc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":B=nh;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":B=vh;break;case _c:case Bc:case Rc:B=sh;break;case Hc:B=jh;break;case"scroll":B=rh;break;case"wheel":B=kh;break;case"copy":case"cut":case"paste":B=ah;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":B=xc}var O=(r&4)!==0,Ze=!O&&e==="scroll",j=O?T!==null?T+"Capture":null:T;O=[];for(var g=w,b;g!==null;){b=g;var z=b.stateNode;if(b.tag===5&&z!==null&&(b=z,j!==null&&(z=Un(g,j),z!=null&&O.push(ao(g,z,b)))),Ze)break;g=g.return}0<O.length&&(T=new B(T,M,null,n,E),P.push({event:T,listeners:O}))}}if((r&7)===0){e:{if(T=e==="mouseover"||e==="pointerover",B=e==="mouseout"||e==="pointerout",T&&n!==xs&&(M=n.relatedTarget||n.fromElement)&&(Ft(M)||M[lt]))break e;if((B||T)&&(T=E.window===E?E:(T=E.ownerDocument)?T.defaultView||T.parentWindow:window,B?(M=n.relatedTarget||n.toElement,B=w,M=M?Ft(M):null,M!==null&&(Ze=Ot(M),M!==Ze||M.tag!==5&&M.tag!==6)&&(M=null)):(B=null,M=w),B!==M)){if(O=hc,z="onMouseLeave",j="onMouseEnter",g="mouse",(e==="pointerout"||e==="pointerover")&&(O=xc,z="onPointerLeave",j="onPointerEnter",g="pointer"),Ze=B==null?T:vn(B),b=M==null?T:vn(M),T=new O(z,g+"leave",B,n,E),T.target=Ze,T.relatedTarget=b,z=null,Ft(E)===w&&(O=new O(j,g+"enter",M,n,E),O.target=b,O.relatedTarget=Ze,z=O),Ze=z,B&&M)r:{for(O=B,j=M,g=0,b=O;b;b=mn(b))g++;for(b=0,z=j;z;z=mn(z))b++;for(;0<g-b;)O=mn(O),g--;for(;0<b-g;)j=mn(j),b--;for(;g--;){if(O===j||j!==null&&O===j.alternate)break r;O=mn(O),j=mn(j)}O=null}else O=null;B!==null&&Fc(P,T,B,O,!1),M!==null&&Ze!==null&&Fc(P,Ze,M,O,!0)}}e:{if(T=w?vn(w):window,B=T.nodeName&&T.nodeName.toLowerCase(),B==="select"||B==="input"&&T.type==="file")var $=zh;else if(bc(T))if(wc)$=_h;else{$=Lh;var ee=Nh}else(B=T.nodeName)&&B.toLowerCase()==="input"&&(T.type==="checkbox"||T.type==="radio")&&($=Ih);if($&&($=$(e,w))){kc(P,$,n,E);break e}ee&&ee(e,T,w),e==="focusout"&&(ee=T._wrapperState)&&ee.controlled&&T.type==="number"&&ds(T,"number",T.value)}switch(ee=w?vn(w):window,e){case"focusin":(bc(ee)||ee.contentEditable==="true")&&(fn=ee,Ms=w,io=null);break;case"focusout":io=Ms=fn=null;break;case"mousedown":Ds=!0;break;case"contextmenu":case"mouseup":case"dragend":Ds=!1,Lc(P,n,E);break;case"selectionchange":if(Hh)break;case"keydown":case"keyup":Lc(P,n,E)}var re;if(Rs)e:{switch(e){case"compositionstart":var de="onCompositionStart";break e;case"compositionend":de="onCompositionEnd";break e;case"compositionupdate":de="onCompositionUpdate";break e}de=void 0}else hn?yc(e,n)&&(de="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(de="onCompositionStart");de&&(mc&&n.locale!=="ko"&&(hn||de!=="onCompositionStart"?de==="onCompositionEnd"&&hn&&(re=uc()):(kt=E,zs="value"in kt?kt.value:kt.textContent,hn=!0)),ee=ti(w,de),0<ee.length&&(de=new fc(de,e,null,n,E),P.push({event:de,listeners:ee}),re?de.data=re:(re=jc(n),re!==null&&(de.data=re)))),(re=Sh?Ch(e,n):Th(e,n))&&(w=ti(w,"onBeforeInput"),0<w.length&&(E=new fc("onBeforeInput","beforeinput",null,n,E),P.push({event:E,listeners:w}),E.data=re))}Dc(P,r)})}function ao(e,r,n){return{instance:e,listener:r,currentTarget:n}}function ti(e,r){for(var n=r+"Capture",o=[];e!==null;){var i=e,l=i.stateNode;i.tag===5&&l!==null&&(i=l,l=Un(e,n),l!=null&&o.unshift(ao(e,l,i)),l=Un(e,r),l!=null&&o.push(ao(e,l,i))),e=e.return}return o}function mn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Fc(e,r,n,o,i){for(var l=r._reactName,u=[];n!==null&&n!==o;){var f=n,m=f.alternate,w=f.stateNode;if(m!==null&&m===o)break;f.tag===5&&w!==null&&(f=w,i?(m=Un(n,l),m!=null&&u.unshift(ao(n,m,f))):i||(m=Un(n,l),m!=null&&u.push(ao(n,m,f)))),n=n.return}u.length!==0&&e.push({event:r,listeners:u})}var Dh=/\r\n?/g,Oh=/\u0000|\uFFFD/g;function Uc(e){return(typeof e=="string"?e:""+e).replace(Dh,`
`).replace(Oh,"")}function ni(e,r,n){if(r=Uc(r),Uc(e)!==r&&n)throw Error(c(425))}function oi(){}var Ys=null,Vs=null;function Ks(e,r){return e==="textarea"||e==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var Qs=typeof setTimeout=="function"?setTimeout:void 0,Fh=typeof clearTimeout=="function"?clearTimeout:void 0,Gc=typeof Promise=="function"?Promise:void 0,Uh=typeof queueMicrotask=="function"?queueMicrotask:typeof Gc!="undefined"?function(e){return Gc.resolve(null).then(e).catch(Gh)}:Qs;function Gh(e){setTimeout(function(){throw e})}function qs(e,r){var n=r,o=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(o===0){e.removeChild(i),Zn(r);return}o--}else n!=="$"&&n!=="$?"&&n!=="$!"||o++;n=i}while(n);Zn(r)}function St(e){for(;e!=null;e=e.nextSibling){var r=e.nodeType;if(r===1||r===3)break;if(r===8){if(r=e.data,r==="$"||r==="$!"||r==="$?")break;if(r==="/$")return null}}return e}function $c(e){e=e.previousSibling;for(var r=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(r===0)return e;r--}else n==="/$"&&r++}e=e.previousSibling}return null}var gn=Math.random().toString(36).slice(2),nt="__reactFiber$"+gn,co="__reactProps$"+gn,lt="__reactContainer$"+gn,Xs="__reactEvents$"+gn,$h="__reactListeners$"+gn,Yh="__reactHandles$"+gn;function Ft(e){var r=e[nt];if(r)return r;for(var n=e.parentNode;n;){if(r=n[lt]||n[nt]){if(n=r.alternate,r.child!==null||n!==null&&n.child!==null)for(e=$c(e);e!==null;){if(n=e[nt])return n;e=$c(e)}return r}e=n,n=e.parentNode}return null}function uo(e){return e=e[nt]||e[lt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function vn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(c(33))}function ii(e){return e[co]||null}var Zs=[],yn=-1;function Ct(e){return{current:e}}function De(e){0>yn||(e.current=Zs[yn],Zs[yn]=null,yn--)}function Ae(e,r){yn++,Zs[yn]=e.current,e.current=r}var Tt={},xr=Ct(Tt),wr=Ct(!1),Ut=Tt;function jn(e,r){var n=e.type.contextTypes;if(!n)return Tt;var o=e.stateNode;if(o&&o.__reactInternalMemoizedUnmaskedChildContext===r)return o.__reactInternalMemoizedMaskedChildContext;var i={},l;for(l in n)i[l]=r[l];return o&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=r,e.__reactInternalMemoizedMaskedChildContext=i),i}function Sr(e){return e=e.childContextTypes,e!=null}function si(){De(wr),De(xr)}function Yc(e,r,n){if(xr.current!==Tt)throw Error(c(168));Ae(xr,r),Ae(wr,n)}function Vc(e,r,n){var o=e.stateNode;if(r=r.childContextTypes,typeof o.getChildContext!="function")return n;o=o.getChildContext();for(var i in o)if(!(i in r))throw Error(c(108,ze(e)||"Unknown",i));return _({},n,o)}function li(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Tt,Ut=xr.current,Ae(xr,e),Ae(wr,wr.current),!0}function Kc(e,r,n){var o=e.stateNode;if(!o)throw Error(c(169));n?(e=Vc(e,r,Ut),o.__reactInternalMemoizedMergedChildContext=e,De(wr),De(xr),Ae(xr,e)):De(wr),Ae(wr,n)}var at=null,ai=!1,Js=!1;function Qc(e){at===null?at=[e]:at.push(e)}function Vh(e){ai=!0,Qc(e)}function Et(){if(!Js&&at!==null){Js=!0;var e=0,r=Re;try{var n=at;for(Re=1;e<n.length;e++){var o=n[e];do o=o(!0);while(o!==null)}at=null,ai=!1}catch(i){throw at!==null&&(at=at.slice(e+1)),Xa(bs,Et),i}finally{Re=r,Js=!1}}return null}var bn=[],kn=0,ci=null,di=0,Ar=[],Mr=0,Gt=null,ct=1,dt="";function $t(e,r){bn[kn++]=di,bn[kn++]=ci,ci=e,di=r}function qc(e,r,n){Ar[Mr++]=ct,Ar[Mr++]=dt,Ar[Mr++]=Gt,Gt=e;var o=ct;e=dt;var i=32-Vr(o)-1;o&=~(1<<i),n+=1;var l=32-Vr(r)+i;if(30<l){var u=i-i%5;l=(o&(1<<u)-1).toString(32),o>>=u,i-=u,ct=1<<32-Vr(r)+i|n<<i|o,dt=l+e}else ct=1<<l|n<<i|o,dt=e}function el(e){e.return!==null&&($t(e,1),qc(e,1,0))}function rl(e){for(;e===ci;)ci=bn[--kn],bn[kn]=null,di=bn[--kn],bn[kn]=null;for(;e===Gt;)Gt=Ar[--Mr],Ar[Mr]=null,dt=Ar[--Mr],Ar[Mr]=null,ct=Ar[--Mr],Ar[Mr]=null}var Ir=null,_r=null,Ue=!1,Qr=null;function Xc(e,r){var n=Ur(5,null,null,0);n.elementType="DELETED",n.stateNode=r,n.return=e,r=e.deletions,r===null?(e.deletions=[n],e.flags|=16):r.push(n)}function Zc(e,r){switch(e.tag){case 5:var n=e.type;return r=r.nodeType!==1||n.toLowerCase()!==r.nodeName.toLowerCase()?null:r,r!==null?(e.stateNode=r,Ir=e,_r=St(r.firstChild),!0):!1;case 6:return r=e.pendingProps===""||r.nodeType!==3?null:r,r!==null?(e.stateNode=r,Ir=e,_r=null,!0):!1;case 13:return r=r.nodeType!==8?null:r,r!==null?(n=Gt!==null?{id:ct,overflow:dt}:null,e.memoizedState={dehydrated:r,treeContext:n,retryLane:1073741824},n=Ur(18,null,null,0),n.stateNode=r,n.return=e,e.child=n,Ir=e,_r=null,!0):!1;default:return!1}}function tl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function nl(e){if(Ue){var r=_r;if(r){var n=r;if(!Zc(e,r)){if(tl(e))throw Error(c(418));r=St(n.nextSibling);var o=Ir;r&&Zc(e,r)?Xc(o,n):(e.flags=e.flags&-4097|2,Ue=!1,Ir=e)}}else{if(tl(e))throw Error(c(418));e.flags=e.flags&-4097|2,Ue=!1,Ir=e}}}function Jc(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ir=e}function ui(e){if(e!==Ir)return!1;if(!Ue)return Jc(e),Ue=!0,!1;var r;if((r=e.tag!==3)&&!(r=e.tag!==5)&&(r=e.type,r=r!=="head"&&r!=="body"&&!Ks(e.type,e.memoizedProps)),r&&(r=_r)){if(tl(e))throw ed(),Error(c(418));for(;r;)Xc(e,r),r=St(r.nextSibling)}if(Jc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(317));e:{for(e=e.nextSibling,r=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(r===0){_r=St(e.nextSibling);break e}r--}else n!=="$"&&n!=="$!"&&n!=="$?"||r++}e=e.nextSibling}_r=null}}else _r=Ir?St(e.stateNode.nextSibling):null;return!0}function ed(){for(var e=_r;e;)e=St(e.nextSibling)}function wn(){_r=Ir=null,Ue=!1}function ol(e){Qr===null?Qr=[e]:Qr.push(e)}var Kh=I.ReactCurrentBatchConfig;function po(e,r,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(c(309));var o=n.stateNode}if(!o)throw Error(c(147,e));var i=o,l=""+e;return r!==null&&r.ref!==null&&typeof r.ref=="function"&&r.ref._stringRef===l?r.ref:(r=function(u){var f=i.refs;u===null?delete f[l]:f[l]=u},r._stringRef=l,r)}if(typeof e!="string")throw Error(c(284));if(!n._owner)throw Error(c(290,e))}return e}function pi(e,r){throw e=Object.prototype.toString.call(r),Error(c(31,e==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":e))}function rd(e){var r=e._init;return r(e._payload)}function td(e){function r(j,g){if(e){var b=j.deletions;b===null?(j.deletions=[g],j.flags|=16):b.push(g)}}function n(j,g){if(!e)return null;for(;g!==null;)r(j,g),g=g.sibling;return null}function o(j,g){for(j=new Map;g!==null;)g.key!==null?j.set(g.key,g):j.set(g.index,g),g=g.sibling;return j}function i(j,g){return j=Rt(j,g),j.index=0,j.sibling=null,j}function l(j,g,b){return j.index=b,e?(b=j.alternate,b!==null?(b=b.index,b<g?(j.flags|=2,g):b):(j.flags|=2,g)):(j.flags|=1048576,g)}function u(j){return e&&j.alternate===null&&(j.flags|=2),j}function f(j,g,b,z){return g===null||g.tag!==6?(g=Ql(b,j.mode,z),g.return=j,g):(g=i(g,b),g.return=j,g)}function m(j,g,b,z){var $=b.type;return $===L?E(j,g,b.props.children,z,b.key):g!==null&&(g.elementType===$||typeof $=="object"&&$!==null&&$.$$typeof===fr&&rd($)===g.type)?(z=i(g,b.props),z.ref=po(j,g,b),z.return=j,z):(z=Hi(b.type,b.key,b.props,null,j.mode,z),z.ref=po(j,g,b),z.return=j,z)}function w(j,g,b,z){return g===null||g.tag!==4||g.stateNode.containerInfo!==b.containerInfo||g.stateNode.implementation!==b.implementation?(g=ql(b,j.mode,z),g.return=j,g):(g=i(g,b.children||[]),g.return=j,g)}function E(j,g,b,z,$){return g===null||g.tag!==7?(g=Jt(b,j.mode,z,$),g.return=j,g):(g=i(g,b),g.return=j,g)}function P(j,g,b){if(typeof g=="string"&&g!==""||typeof g=="number")return g=Ql(""+g,j.mode,b),g.return=j,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case fe:return b=Hi(g.type,g.key,g.props,null,j.mode,b),b.ref=po(j,null,g),b.return=j,b;case Z:return g=ql(g,j.mode,b),g.return=j,g;case fr:var z=g._init;return P(j,z(g._payload),b)}if(Dn(g)||V(g))return g=Jt(g,j.mode,b,null),g.return=j,g;pi(j,g)}return null}function T(j,g,b,z){var $=g!==null?g.key:null;if(typeof b=="string"&&b!==""||typeof b=="number")return $!==null?null:f(j,g,""+b,z);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case fe:return b.key===$?m(j,g,b,z):null;case Z:return b.key===$?w(j,g,b,z):null;case fr:return $=b._init,T(j,g,$(b._payload),z)}if(Dn(b)||V(b))return $!==null?null:E(j,g,b,z,null);pi(j,b)}return null}function B(j,g,b,z,$){if(typeof z=="string"&&z!==""||typeof z=="number")return j=j.get(b)||null,f(g,j,""+z,$);if(typeof z=="object"&&z!==null){switch(z.$$typeof){case fe:return j=j.get(z.key===null?b:z.key)||null,m(g,j,z,$);case Z:return j=j.get(z.key===null?b:z.key)||null,w(g,j,z,$);case fr:var ee=z._init;return B(j,g,b,ee(z._payload),$)}if(Dn(z)||V(z))return j=j.get(b)||null,E(g,j,z,$,null);pi(g,z)}return null}function M(j,g,b,z){for(var $=null,ee=null,re=g,de=g=0,lr=null;re!==null&&de<b.length;de++){re.index>de?(lr=re,re=null):lr=re.sibling;var Le=T(j,re,b[de],z);if(Le===null){re===null&&(re=lr);break}e&&re&&Le.alternate===null&&r(j,re),g=l(Le,g,de),ee===null?$=Le:ee.sibling=Le,ee=Le,re=lr}if(de===b.length)return n(j,re),Ue&&$t(j,de),$;if(re===null){for(;de<b.length;de++)re=P(j,b[de],z),re!==null&&(g=l(re,g,de),ee===null?$=re:ee.sibling=re,ee=re);return Ue&&$t(j,de),$}for(re=o(j,re);de<b.length;de++)lr=B(re,j,de,b[de],z),lr!==null&&(e&&lr.alternate!==null&&re.delete(lr.key===null?de:lr.key),g=l(lr,g,de),ee===null?$=lr:ee.sibling=lr,ee=lr);return e&&re.forEach(function(Ht){return r(j,Ht)}),Ue&&$t(j,de),$}function O(j,g,b,z){var $=V(b);if(typeof $!="function")throw Error(c(150));if(b=$.call(b),b==null)throw Error(c(151));for(var ee=$=null,re=g,de=g=0,lr=null,Le=b.next();re!==null&&!Le.done;de++,Le=b.next()){re.index>de?(lr=re,re=null):lr=re.sibling;var Ht=T(j,re,Le.value,z);if(Ht===null){re===null&&(re=lr);break}e&&re&&Ht.alternate===null&&r(j,re),g=l(Ht,g,de),ee===null?$=Ht:ee.sibling=Ht,ee=Ht,re=lr}if(Le.done)return n(j,re),Ue&&$t(j,de),$;if(re===null){for(;!Le.done;de++,Le=b.next())Le=P(j,Le.value,z),Le!==null&&(g=l(Le,g,de),ee===null?$=Le:ee.sibling=Le,ee=Le);return Ue&&$t(j,de),$}for(re=o(j,re);!Le.done;de++,Le=b.next())Le=B(re,j,de,Le.value,z),Le!==null&&(e&&Le.alternate!==null&&re.delete(Le.key===null?de:Le.key),g=l(Le,g,de),ee===null?$=Le:ee.sibling=Le,ee=Le);return e&&re.forEach(function(Pf){return r(j,Pf)}),Ue&&$t(j,de),$}function Ze(j,g,b,z){if(typeof b=="object"&&b!==null&&b.type===L&&b.key===null&&(b=b.props.children),typeof b=="object"&&b!==null){switch(b.$$typeof){case fe:e:{for(var $=b.key,ee=g;ee!==null;){if(ee.key===$){if($=b.type,$===L){if(ee.tag===7){n(j,ee.sibling),g=i(ee,b.props.children),g.return=j,j=g;break e}}else if(ee.elementType===$||typeof $=="object"&&$!==null&&$.$$typeof===fr&&rd($)===ee.type){n(j,ee.sibling),g=i(ee,b.props),g.ref=po(j,ee,b),g.return=j,j=g;break e}n(j,ee);break}else r(j,ee);ee=ee.sibling}b.type===L?(g=Jt(b.props.children,j.mode,z,b.key),g.return=j,j=g):(z=Hi(b.type,b.key,b.props,null,j.mode,z),z.ref=po(j,g,b),z.return=j,j=z)}return u(j);case Z:e:{for(ee=b.key;g!==null;){if(g.key===ee)if(g.tag===4&&g.stateNode.containerInfo===b.containerInfo&&g.stateNode.implementation===b.implementation){n(j,g.sibling),g=i(g,b.children||[]),g.return=j,j=g;break e}else{n(j,g);break}else r(j,g);g=g.sibling}g=ql(b,j.mode,z),g.return=j,j=g}return u(j);case fr:return ee=b._init,Ze(j,g,ee(b._payload),z)}if(Dn(b))return M(j,g,b,z);if(V(b))return O(j,g,b,z);pi(j,b)}return typeof b=="string"&&b!==""||typeof b=="number"?(b=""+b,g!==null&&g.tag===6?(n(j,g.sibling),g=i(g,b),g.return=j,j=g):(n(j,g),g=Ql(b,j.mode,z),g.return=j,j=g),u(j)):n(j,g)}return Ze}var Sn=td(!0),nd=td(!1),hi=Ct(null),fi=null,Cn=null,il=null;function sl(){il=Cn=fi=null}function ll(e){var r=hi.current;De(hi),e._currentValue=r}function al(e,r,n){for(;e!==null;){var o=e.alternate;if((e.childLanes&r)!==r?(e.childLanes|=r,o!==null&&(o.childLanes|=r)):o!==null&&(o.childLanes&r)!==r&&(o.childLanes|=r),e===n)break;e=e.return}}function Tn(e,r){fi=e,il=Cn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&r)!==0&&(Cr=!0),e.firstContext=null)}function Dr(e){var r=e._currentValue;if(il!==e)if(e={context:e,memoizedValue:r,next:null},Cn===null){if(fi===null)throw Error(c(308));Cn=e,fi.dependencies={lanes:0,firstContext:e}}else Cn=Cn.next=e;return r}var Yt=null;function cl(e){Yt===null?Yt=[e]:Yt.push(e)}function od(e,r,n,o){var i=r.interleaved;return i===null?(n.next=n,cl(r)):(n.next=i.next,i.next=n),r.interleaved=n,ut(e,o)}function ut(e,r){e.lanes|=r;var n=e.alternate;for(n!==null&&(n.lanes|=r),n=e,e=e.return;e!==null;)e.childLanes|=r,n=e.alternate,n!==null&&(n.childLanes|=r),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Pt=!1;function dl(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function id(e,r){e=e.updateQueue,r.updateQueue===e&&(r.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function pt(e,r){return{eventTime:e,lane:r,tag:0,payload:null,callback:null,next:null}}function zt(e,r,n){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(Ne&2)!==0){var i=o.pending;return i===null?r.next=r:(r.next=i.next,i.next=r),o.pending=r,ut(e,n)}return i=o.interleaved,i===null?(r.next=r,cl(o)):(r.next=i.next,i.next=r),o.interleaved=r,ut(e,n)}function xi(e,r,n){if(r=r.updateQueue,r!==null&&(r=r.shared,(n&4194240)!==0)){var o=r.lanes;o&=e.pendingLanes,n|=o,r.lanes=n,Ss(e,n)}}function sd(e,r){var n=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,n===o)){var i=null,l=null;if(n=n.firstBaseUpdate,n!==null){do{var u={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};l===null?i=l=u:l=l.next=u,n=n.next}while(n!==null);l===null?i=l=r:l=l.next=r}else i=l=r;n={baseState:o.baseState,firstBaseUpdate:i,lastBaseUpdate:l,shared:o.shared,effects:o.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=r:e.next=r,n.lastBaseUpdate=r}function mi(e,r,n,o){var i=e.updateQueue;Pt=!1;var l=i.firstBaseUpdate,u=i.lastBaseUpdate,f=i.shared.pending;if(f!==null){i.shared.pending=null;var m=f,w=m.next;m.next=null,u===null?l=w:u.next=w,u=m;var E=e.alternate;E!==null&&(E=E.updateQueue,f=E.lastBaseUpdate,f!==u&&(f===null?E.firstBaseUpdate=w:f.next=w,E.lastBaseUpdate=m))}if(l!==null){var P=i.baseState;u=0,E=w=m=null,f=l;do{var T=f.lane,B=f.eventTime;if((o&T)===T){E!==null&&(E=E.next={eventTime:B,lane:0,tag:f.tag,payload:f.payload,callback:f.callback,next:null});e:{var M=e,O=f;switch(T=r,B=n,O.tag){case 1:if(M=O.payload,typeof M=="function"){P=M.call(B,P,T);break e}P=M;break e;case 3:M.flags=M.flags&-65537|128;case 0:if(M=O.payload,T=typeof M=="function"?M.call(B,P,T):M,T==null)break e;P=_({},P,T);break e;case 2:Pt=!0}}f.callback!==null&&f.lane!==0&&(e.flags|=64,T=i.effects,T===null?i.effects=[f]:T.push(f))}else B={eventTime:B,lane:T,tag:f.tag,payload:f.payload,callback:f.callback,next:null},E===null?(w=E=B,m=P):E=E.next=B,u|=T;if(f=f.next,f===null){if(f=i.shared.pending,f===null)break;T=f,f=T.next,T.next=null,i.lastBaseUpdate=T,i.shared.pending=null}}while(!0);if(E===null&&(m=P),i.baseState=m,i.firstBaseUpdate=w,i.lastBaseUpdate=E,r=i.shared.interleaved,r!==null){i=r;do u|=i.lane,i=i.next;while(i!==r)}else l===null&&(i.shared.lanes=0);Qt|=u,e.lanes=u,e.memoizedState=P}}function ld(e,r,n){if(e=r.effects,r.effects=null,e!==null)for(r=0;r<e.length;r++){var o=e[r],i=o.callback;if(i!==null){if(o.callback=null,o=n,typeof i!="function")throw Error(c(191,i));i.call(o)}}}var ho={},ot=Ct(ho),fo=Ct(ho),xo=Ct(ho);function Vt(e){if(e===ho)throw Error(c(174));return e}function ul(e,r){switch(Ae(xo,r),Ae(fo,e),Ae(ot,ho),e=r.nodeType,e){case 9:case 11:r=(r=r.documentElement)?r.namespaceURI:ps(null,"");break;default:e=e===8?r.parentNode:r,r=e.namespaceURI||null,e=e.tagName,r=ps(r,e)}De(ot),Ae(ot,r)}function En(){De(ot),De(fo),De(xo)}function ad(e){Vt(xo.current);var r=Vt(ot.current),n=ps(r,e.type);r!==n&&(Ae(fo,e),Ae(ot,n))}function pl(e){fo.current===e&&(De(ot),De(fo))}var $e=Ct(0);function gi(e){for(var r=e;r!==null;){if(r.tag===13){var n=r.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===e)break;for(;r.sibling===null;){if(r.return===null||r.return===e)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var hl=[];function fl(){for(var e=0;e<hl.length;e++)hl[e]._workInProgressVersionPrimary=null;hl.length=0}var vi=I.ReactCurrentDispatcher,xl=I.ReactCurrentBatchConfig,Kt=0,Ye=null,tr=null,ir=null,yi=!1,mo=!1,go=0,Qh=0;function mr(){throw Error(c(321))}function ml(e,r){if(r===null)return!1;for(var n=0;n<r.length&&n<e.length;n++)if(!Kr(e[n],r[n]))return!1;return!0}function gl(e,r,n,o,i,l){if(Kt=l,Ye=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,vi.current=e===null||e.memoizedState===null?Jh:ef,e=n(o,i),mo){l=0;do{if(mo=!1,go=0,25<=l)throw Error(c(301));l+=1,ir=tr=null,r.updateQueue=null,vi.current=rf,e=n(o,i)}while(mo)}if(vi.current=ki,r=tr!==null&&tr.next!==null,Kt=0,ir=tr=Ye=null,yi=!1,r)throw Error(c(300));return e}function vl(){var e=go!==0;return go=0,e}function it(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ir===null?Ye.memoizedState=ir=e:ir=ir.next=e,ir}function Or(){if(tr===null){var e=Ye.alternate;e=e!==null?e.memoizedState:null}else e=tr.next;var r=ir===null?Ye.memoizedState:ir.next;if(r!==null)ir=r,tr=e;else{if(e===null)throw Error(c(310));tr=e,e={memoizedState:tr.memoizedState,baseState:tr.baseState,baseQueue:tr.baseQueue,queue:tr.queue,next:null},ir===null?Ye.memoizedState=ir=e:ir=ir.next=e}return ir}function vo(e,r){return typeof r=="function"?r(e):r}function yl(e){var r=Or(),n=r.queue;if(n===null)throw Error(c(311));n.lastRenderedReducer=e;var o=tr,i=o.baseQueue,l=n.pending;if(l!==null){if(i!==null){var u=i.next;i.next=l.next,l.next=u}o.baseQueue=i=l,n.pending=null}if(i!==null){l=i.next,o=o.baseState;var f=u=null,m=null,w=l;do{var E=w.lane;if((Kt&E)===E)m!==null&&(m=m.next={lane:0,action:w.action,hasEagerState:w.hasEagerState,eagerState:w.eagerState,next:null}),o=w.hasEagerState?w.eagerState:e(o,w.action);else{var P={lane:E,action:w.action,hasEagerState:w.hasEagerState,eagerState:w.eagerState,next:null};m===null?(f=m=P,u=o):m=m.next=P,Ye.lanes|=E,Qt|=E}w=w.next}while(w!==null&&w!==l);m===null?u=o:m.next=f,Kr(o,r.memoizedState)||(Cr=!0),r.memoizedState=o,r.baseState=u,r.baseQueue=m,n.lastRenderedState=o}if(e=n.interleaved,e!==null){i=e;do l=i.lane,Ye.lanes|=l,Qt|=l,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[r.memoizedState,n.dispatch]}function jl(e){var r=Or(),n=r.queue;if(n===null)throw Error(c(311));n.lastRenderedReducer=e;var o=n.dispatch,i=n.pending,l=r.memoizedState;if(i!==null){n.pending=null;var u=i=i.next;do l=e(l,u.action),u=u.next;while(u!==i);Kr(l,r.memoizedState)||(Cr=!0),r.memoizedState=l,r.baseQueue===null&&(r.baseState=l),n.lastRenderedState=l}return[l,o]}function cd(){}function dd(e,r){var n=Ye,o=Or(),i=r(),l=!Kr(o.memoizedState,i);if(l&&(o.memoizedState=i,Cr=!0),o=o.queue,bl(hd.bind(null,n,o,e),[e]),o.getSnapshot!==r||l||ir!==null&&ir.memoizedState.tag&1){if(n.flags|=2048,yo(9,pd.bind(null,n,o,i,r),void 0,null),sr===null)throw Error(c(349));(Kt&30)!==0||ud(n,r,i)}return i}function ud(e,r,n){e.flags|=16384,e={getSnapshot:r,value:n},r=Ye.updateQueue,r===null?(r={lastEffect:null,stores:null},Ye.updateQueue=r,r.stores=[e]):(n=r.stores,n===null?r.stores=[e]:n.push(e))}function pd(e,r,n,o){r.value=n,r.getSnapshot=o,fd(r)&&xd(e)}function hd(e,r,n){return n(function(){fd(r)&&xd(e)})}function fd(e){var r=e.getSnapshot;e=e.value;try{var n=r();return!Kr(e,n)}catch{return!0}}function xd(e){var r=ut(e,1);r!==null&&Jr(r,e,1,-1)}function md(e){var r=it();return typeof e=="function"&&(e=e()),r.memoizedState=r.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:vo,lastRenderedState:e},r.queue=e,e=e.dispatch=Zh.bind(null,Ye,e),[r.memoizedState,e]}function yo(e,r,n,o){return e={tag:e,create:r,destroy:n,deps:o,next:null},r=Ye.updateQueue,r===null?(r={lastEffect:null,stores:null},Ye.updateQueue=r,r.lastEffect=e.next=e):(n=r.lastEffect,n===null?r.lastEffect=e.next=e:(o=n.next,n.next=e,e.next=o,r.lastEffect=e)),e}function gd(){return Or().memoizedState}function ji(e,r,n,o){var i=it();Ye.flags|=e,i.memoizedState=yo(1|r,n,void 0,o===void 0?null:o)}function bi(e,r,n,o){var i=Or();o=o===void 0?null:o;var l=void 0;if(tr!==null){var u=tr.memoizedState;if(l=u.destroy,o!==null&&ml(o,u.deps)){i.memoizedState=yo(r,n,l,o);return}}Ye.flags|=e,i.memoizedState=yo(1|r,n,l,o)}function vd(e,r){return ji(8390656,8,e,r)}function bl(e,r){return bi(2048,8,e,r)}function yd(e,r){return bi(4,2,e,r)}function jd(e,r){return bi(4,4,e,r)}function bd(e,r){if(typeof r=="function")return e=e(),r(e),function(){r(null)};if(r!=null)return e=e(),r.current=e,function(){r.current=null}}function kd(e,r,n){return n=n!=null?n.concat([e]):null,bi(4,4,bd.bind(null,r,e),n)}function kl(){}function wd(e,r){var n=Or();r=r===void 0?null:r;var o=n.memoizedState;return o!==null&&r!==null&&ml(r,o[1])?o[0]:(n.memoizedState=[e,r],e)}function Sd(e,r){var n=Or();r=r===void 0?null:r;var o=n.memoizedState;return o!==null&&r!==null&&ml(r,o[1])?o[0]:(e=e(),n.memoizedState=[e,r],e)}function Cd(e,r,n){return(Kt&21)===0?(e.baseState&&(e.baseState=!1,Cr=!0),e.memoizedState=n):(Kr(n,r)||(n=rc(),Ye.lanes|=n,Qt|=n,e.baseState=!0),r)}function qh(e,r){var n=Re;Re=n!==0&&4>n?n:4,e(!0);var o=xl.transition;xl.transition={};try{e(!1),r()}finally{Re=n,xl.transition=o}}function Td(){return Or().memoizedState}function Xh(e,r,n){var o=_t(e);if(n={lane:o,action:n,hasEagerState:!1,eagerState:null,next:null},Ed(e))Pd(r,n);else if(n=od(e,r,n,o),n!==null){var i=kr();Jr(n,e,o,i),zd(n,r,o)}}function Zh(e,r,n){var o=_t(e),i={lane:o,action:n,hasEagerState:!1,eagerState:null,next:null};if(Ed(e))Pd(r,i);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=r.lastRenderedReducer,l!==null))try{var u=r.lastRenderedState,f=l(u,n);if(i.hasEagerState=!0,i.eagerState=f,Kr(f,u)){var m=r.interleaved;m===null?(i.next=i,cl(r)):(i.next=m.next,m.next=i),r.interleaved=i;return}}catch{}finally{}n=od(e,r,i,o),n!==null&&(i=kr(),Jr(n,e,o,i),zd(n,r,o))}}function Ed(e){var r=e.alternate;return e===Ye||r!==null&&r===Ye}function Pd(e,r){mo=yi=!0;var n=e.pending;n===null?r.next=r:(r.next=n.next,n.next=r),e.pending=r}function zd(e,r,n){if((n&4194240)!==0){var o=r.lanes;o&=e.pendingLanes,n|=o,r.lanes=n,Ss(e,n)}}var ki={readContext:Dr,useCallback:mr,useContext:mr,useEffect:mr,useImperativeHandle:mr,useInsertionEffect:mr,useLayoutEffect:mr,useMemo:mr,useReducer:mr,useRef:mr,useState:mr,useDebugValue:mr,useDeferredValue:mr,useTransition:mr,useMutableSource:mr,useSyncExternalStore:mr,useId:mr,unstable_isNewReconciler:!1},Jh={readContext:Dr,useCallback:function(e,r){return it().memoizedState=[e,r===void 0?null:r],e},useContext:Dr,useEffect:vd,useImperativeHandle:function(e,r,n){return n=n!=null?n.concat([e]):null,ji(4194308,4,bd.bind(null,r,e),n)},useLayoutEffect:function(e,r){return ji(4194308,4,e,r)},useInsertionEffect:function(e,r){return ji(4,2,e,r)},useMemo:function(e,r){var n=it();return r=r===void 0?null:r,e=e(),n.memoizedState=[e,r],e},useReducer:function(e,r,n){var o=it();return r=n!==void 0?n(r):r,o.memoizedState=o.baseState=r,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:r},o.queue=e,e=e.dispatch=Xh.bind(null,Ye,e),[o.memoizedState,e]},useRef:function(e){var r=it();return e={current:e},r.memoizedState=e},useState:md,useDebugValue:kl,useDeferredValue:function(e){return it().memoizedState=e},useTransition:function(){var e=md(!1),r=e[0];return e=qh.bind(null,e[1]),it().memoizedState=e,[r,e]},useMutableSource:function(){},useSyncExternalStore:function(e,r,n){var o=Ye,i=it();if(Ue){if(n===void 0)throw Error(c(407));n=n()}else{if(n=r(),sr===null)throw Error(c(349));(Kt&30)!==0||ud(o,r,n)}i.memoizedState=n;var l={value:n,getSnapshot:r};return i.queue=l,vd(hd.bind(null,o,l,e),[e]),o.flags|=2048,yo(9,pd.bind(null,o,l,n,r),void 0,null),n},useId:function(){var e=it(),r=sr.identifierPrefix;if(Ue){var n=dt,o=ct;n=(o&~(1<<32-Vr(o)-1)).toString(32)+n,r=":"+r+"R"+n,n=go++,0<n&&(r+="H"+n.toString(32)),r+=":"}else n=Qh++,r=":"+r+"r"+n.toString(32)+":";return e.memoizedState=r},unstable_isNewReconciler:!1},ef={readContext:Dr,useCallback:wd,useContext:Dr,useEffect:bl,useImperativeHandle:kd,useInsertionEffect:yd,useLayoutEffect:jd,useMemo:Sd,useReducer:yl,useRef:gd,useState:function(){return yl(vo)},useDebugValue:kl,useDeferredValue:function(e){var r=Or();return Cd(r,tr.memoizedState,e)},useTransition:function(){var e=yl(vo)[0],r=Or().memoizedState;return[e,r]},useMutableSource:cd,useSyncExternalStore:dd,useId:Td,unstable_isNewReconciler:!1},rf={readContext:Dr,useCallback:wd,useContext:Dr,useEffect:bl,useImperativeHandle:kd,useInsertionEffect:yd,useLayoutEffect:jd,useMemo:Sd,useReducer:jl,useRef:gd,useState:function(){return jl(vo)},useDebugValue:kl,useDeferredValue:function(e){var r=Or();return tr===null?r.memoizedState=e:Cd(r,tr.memoizedState,e)},useTransition:function(){var e=jl(vo)[0],r=Or().memoizedState;return[e,r]},useMutableSource:cd,useSyncExternalStore:dd,useId:Td,unstable_isNewReconciler:!1};function qr(e,r){if(e&&e.defaultProps){r=_({},r),e=e.defaultProps;for(var n in e)r[n]===void 0&&(r[n]=e[n]);return r}return r}function wl(e,r,n,o){r=e.memoizedState,n=n(o,r),n=n==null?r:_({},r,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var wi={isMounted:function(e){return(e=e._reactInternals)?Ot(e)===e:!1},enqueueSetState:function(e,r,n){e=e._reactInternals;var o=kr(),i=_t(e),l=pt(o,i);l.payload=r,n!=null&&(l.callback=n),r=zt(e,l,i),r!==null&&(Jr(r,e,i,o),xi(r,e,i))},enqueueReplaceState:function(e,r,n){e=e._reactInternals;var o=kr(),i=_t(e),l=pt(o,i);l.tag=1,l.payload=r,n!=null&&(l.callback=n),r=zt(e,l,i),r!==null&&(Jr(r,e,i,o),xi(r,e,i))},enqueueForceUpdate:function(e,r){e=e._reactInternals;var n=kr(),o=_t(e),i=pt(n,o);i.tag=2,r!=null&&(i.callback=r),r=zt(e,i,o),r!==null&&(Jr(r,e,o,n),xi(r,e,o))}};function Nd(e,r,n,o,i,l,u){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,l,u):r.prototype&&r.prototype.isPureReactComponent?!oo(n,o)||!oo(i,l):!0}function Ld(e,r,n){var o=!1,i=Tt,l=r.contextType;return typeof l=="object"&&l!==null?l=Dr(l):(i=Sr(r)?Ut:xr.current,o=r.contextTypes,l=(o=o!=null)?jn(e,i):Tt),r=new r(n,l),e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=wi,e.stateNode=r,r._reactInternals=e,o&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=l),r}function Id(e,r,n,o){e=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(n,o),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(n,o),r.state!==e&&wi.enqueueReplaceState(r,r.state,null)}function Sl(e,r,n,o){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},dl(e);var l=r.contextType;typeof l=="object"&&l!==null?i.context=Dr(l):(l=Sr(r)?Ut:xr.current,i.context=jn(e,l)),i.state=e.memoizedState,l=r.getDerivedStateFromProps,typeof l=="function"&&(wl(e,r,l,n),i.state=e.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(r=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),r!==i.state&&wi.enqueueReplaceState(i,i.state,null),mi(e,n,i,o),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Pn(e,r){try{var n="",o=r;do n+=Ce(o),o=o.return;while(o);var i=n}catch(l){i=`
Error generating stack: `+l.message+`
`+l.stack}return{value:e,source:r,stack:i,digest:null}}function Cl(e,r,n){return{value:e,source:null,stack:n!=null?n:null,digest:r!=null?r:null}}function Tl(e,r){try{console.error(r.value)}catch(n){setTimeout(function(){throw n})}}var tf=typeof WeakMap=="function"?WeakMap:Map;function _d(e,r,n){n=pt(-1,n),n.tag=3,n.payload={element:null};var o=r.value;return n.callback=function(){Ni||(Ni=!0,Ol=o),Tl(e,r)},n}function Bd(e,r,n){n=pt(-1,n),n.tag=3;var o=e.type.getDerivedStateFromError;if(typeof o=="function"){var i=r.value;n.payload=function(){return o(i)},n.callback=function(){Tl(e,r)}}var l=e.stateNode;return l!==null&&typeof l.componentDidCatch=="function"&&(n.callback=function(){Tl(e,r),typeof o!="function"&&(Lt===null?Lt=new Set([this]):Lt.add(this));var u=r.stack;this.componentDidCatch(r.value,{componentStack:u!==null?u:""})}),n}function Rd(e,r,n){var o=e.pingCache;if(o===null){o=e.pingCache=new tf;var i=new Set;o.set(r,i)}else i=o.get(r),i===void 0&&(i=new Set,o.set(r,i));i.has(n)||(i.add(n),e=gf.bind(null,e,r,n),r.then(e,e))}function Hd(e){do{var r;if((r=e.tag===13)&&(r=e.memoizedState,r=r!==null?r.dehydrated!==null:!0),r)return e;e=e.return}while(e!==null);return null}function Wd(e,r,n,o,i){return(e.mode&1)===0?(e===r?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(r=pt(-1,1),r.tag=2,zt(n,r,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=i,e)}var nf=I.ReactCurrentOwner,Cr=!1;function br(e,r,n,o){r.child=e===null?nd(r,null,n,o):Sn(r,e.child,n,o)}function Ad(e,r,n,o,i){n=n.render;var l=r.ref;return Tn(r,i),o=gl(e,r,n,o,l,i),n=vl(),e!==null&&!Cr?(r.updateQueue=e.updateQueue,r.flags&=-2053,e.lanes&=~i,ht(e,r,i)):(Ue&&n&&el(r),r.flags|=1,br(e,r,o,i),r.child)}function Md(e,r,n,o,i){if(e===null){var l=n.type;return typeof l=="function"&&!Kl(l)&&l.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(r.tag=15,r.type=l,Dd(e,r,l,o,i)):(e=Hi(n.type,null,o,r,r.mode,i),e.ref=r.ref,e.return=r,r.child=e)}if(l=e.child,(e.lanes&i)===0){var u=l.memoizedProps;if(n=n.compare,n=n!==null?n:oo,n(u,o)&&e.ref===r.ref)return ht(e,r,i)}return r.flags|=1,e=Rt(l,o),e.ref=r.ref,e.return=r,r.child=e}function Dd(e,r,n,o,i){if(e!==null){var l=e.memoizedProps;if(oo(l,o)&&e.ref===r.ref)if(Cr=!1,r.pendingProps=o=l,(e.lanes&i)!==0)(e.flags&131072)!==0&&(Cr=!0);else return r.lanes=e.lanes,ht(e,r,i)}return El(e,r,n,o,i)}function Od(e,r,n){var o=r.pendingProps,i=o.children,l=e!==null?e.memoizedState:null;if(o.mode==="hidden")if((r.mode&1)===0)r.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ae(Nn,Br),Br|=n;else{if((n&1073741824)===0)return e=l!==null?l.baseLanes|n:n,r.lanes=r.childLanes=1073741824,r.memoizedState={baseLanes:e,cachePool:null,transitions:null},r.updateQueue=null,Ae(Nn,Br),Br|=e,null;r.memoizedState={baseLanes:0,cachePool:null,transitions:null},o=l!==null?l.baseLanes:n,Ae(Nn,Br),Br|=o}else l!==null?(o=l.baseLanes|n,r.memoizedState=null):o=n,Ae(Nn,Br),Br|=o;return br(e,r,i,n),r.child}function Fd(e,r){var n=r.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(r.flags|=512,r.flags|=2097152)}function El(e,r,n,o,i){var l=Sr(n)?Ut:xr.current;return l=jn(r,l),Tn(r,i),n=gl(e,r,n,o,l,i),o=vl(),e!==null&&!Cr?(r.updateQueue=e.updateQueue,r.flags&=-2053,e.lanes&=~i,ht(e,r,i)):(Ue&&o&&el(r),r.flags|=1,br(e,r,n,i),r.child)}function Ud(e,r,n,o,i){if(Sr(n)){var l=!0;li(r)}else l=!1;if(Tn(r,i),r.stateNode===null)Ci(e,r),Ld(r,n,o),Sl(r,n,o,i),o=!0;else if(e===null){var u=r.stateNode,f=r.memoizedProps;u.props=f;var m=u.context,w=n.contextType;typeof w=="object"&&w!==null?w=Dr(w):(w=Sr(n)?Ut:xr.current,w=jn(r,w));var E=n.getDerivedStateFromProps,P=typeof E=="function"||typeof u.getSnapshotBeforeUpdate=="function";P||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(f!==o||m!==w)&&Id(r,u,o,w),Pt=!1;var T=r.memoizedState;u.state=T,mi(r,o,u,i),m=r.memoizedState,f!==o||T!==m||wr.current||Pt?(typeof E=="function"&&(wl(r,n,E,o),m=r.memoizedState),(f=Pt||Nd(r,n,f,o,T,m,w))?(P||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount()),typeof u.componentDidMount=="function"&&(r.flags|=4194308)):(typeof u.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=o,r.memoizedState=m),u.props=o,u.state=m,u.context=w,o=f):(typeof u.componentDidMount=="function"&&(r.flags|=4194308),o=!1)}else{u=r.stateNode,id(e,r),f=r.memoizedProps,w=r.type===r.elementType?f:qr(r.type,f),u.props=w,P=r.pendingProps,T=u.context,m=n.contextType,typeof m=="object"&&m!==null?m=Dr(m):(m=Sr(n)?Ut:xr.current,m=jn(r,m));var B=n.getDerivedStateFromProps;(E=typeof B=="function"||typeof u.getSnapshotBeforeUpdate=="function")||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(f!==P||T!==m)&&Id(r,u,o,m),Pt=!1,T=r.memoizedState,u.state=T,mi(r,o,u,i);var M=r.memoizedState;f!==P||T!==M||wr.current||Pt?(typeof B=="function"&&(wl(r,n,B,o),M=r.memoizedState),(w=Pt||Nd(r,n,w,o,T,M,m)||!1)?(E||typeof u.UNSAFE_componentWillUpdate!="function"&&typeof u.componentWillUpdate!="function"||(typeof u.componentWillUpdate=="function"&&u.componentWillUpdate(o,M,m),typeof u.UNSAFE_componentWillUpdate=="function"&&u.UNSAFE_componentWillUpdate(o,M,m)),typeof u.componentDidUpdate=="function"&&(r.flags|=4),typeof u.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof u.componentDidUpdate!="function"||f===e.memoizedProps&&T===e.memoizedState||(r.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||f===e.memoizedProps&&T===e.memoizedState||(r.flags|=1024),r.memoizedProps=o,r.memoizedState=M),u.props=o,u.state=M,u.context=m,o=w):(typeof u.componentDidUpdate!="function"||f===e.memoizedProps&&T===e.memoizedState||(r.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||f===e.memoizedProps&&T===e.memoizedState||(r.flags|=1024),o=!1)}return Pl(e,r,n,o,l,i)}function Pl(e,r,n,o,i,l){Fd(e,r);var u=(r.flags&128)!==0;if(!o&&!u)return i&&Kc(r,n,!1),ht(e,r,l);o=r.stateNode,nf.current=r;var f=u&&typeof n.getDerivedStateFromError!="function"?null:o.render();return r.flags|=1,e!==null&&u?(r.child=Sn(r,e.child,null,l),r.child=Sn(r,null,f,l)):br(e,r,f,l),r.memoizedState=o.state,i&&Kc(r,n,!0),r.child}function Gd(e){var r=e.stateNode;r.pendingContext?Yc(e,r.pendingContext,r.pendingContext!==r.context):r.context&&Yc(e,r.context,!1),ul(e,r.containerInfo)}function $d(e,r,n,o,i){return wn(),ol(i),r.flags|=256,br(e,r,n,o),r.child}var zl={dehydrated:null,treeContext:null,retryLane:0};function Nl(e){return{baseLanes:e,cachePool:null,transitions:null}}function Yd(e,r,n){var o=r.pendingProps,i=$e.current,l=!1,u=(r.flags&128)!==0,f;if((f=u)||(f=e!==null&&e.memoizedState===null?!1:(i&2)!==0),f?(l=!0,r.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),Ae($e,i&1),e===null)return nl(r),e=r.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((r.mode&1)===0?r.lanes=1:e.data==="$!"?r.lanes=8:r.lanes=1073741824,null):(u=o.children,e=o.fallback,l?(o=r.mode,l=r.child,u={mode:"hidden",children:u},(o&1)===0&&l!==null?(l.childLanes=0,l.pendingProps=u):l=Wi(u,o,0,null),e=Jt(e,o,n,null),l.return=r,e.return=r,l.sibling=e,r.child=l,r.child.memoizedState=Nl(n),r.memoizedState=zl,e):Ll(r,u));if(i=e.memoizedState,i!==null&&(f=i.dehydrated,f!==null))return of(e,r,u,o,f,i,n);if(l){l=o.fallback,u=r.mode,i=e.child,f=i.sibling;var m={mode:"hidden",children:o.children};return(u&1)===0&&r.child!==i?(o=r.child,o.childLanes=0,o.pendingProps=m,r.deletions=null):(o=Rt(i,m),o.subtreeFlags=i.subtreeFlags&14680064),f!==null?l=Rt(f,l):(l=Jt(l,u,n,null),l.flags|=2),l.return=r,o.return=r,o.sibling=l,r.child=o,o=l,l=r.child,u=e.child.memoizedState,u=u===null?Nl(n):{baseLanes:u.baseLanes|n,cachePool:null,transitions:u.transitions},l.memoizedState=u,l.childLanes=e.childLanes&~n,r.memoizedState=zl,o}return l=e.child,e=l.sibling,o=Rt(l,{mode:"visible",children:o.children}),(r.mode&1)===0&&(o.lanes=n),o.return=r,o.sibling=null,e!==null&&(n=r.deletions,n===null?(r.deletions=[e],r.flags|=16):n.push(e)),r.child=o,r.memoizedState=null,o}function Ll(e,r){return r=Wi({mode:"visible",children:r},e.mode,0,null),r.return=e,e.child=r}function Si(e,r,n,o){return o!==null&&ol(o),Sn(r,e.child,null,n),e=Ll(r,r.pendingProps.children),e.flags|=2,r.memoizedState=null,e}function of(e,r,n,o,i,l,u){if(n)return r.flags&256?(r.flags&=-257,o=Cl(Error(c(422))),Si(e,r,u,o)):r.memoizedState!==null?(r.child=e.child,r.flags|=128,null):(l=o.fallback,i=r.mode,o=Wi({mode:"visible",children:o.children},i,0,null),l=Jt(l,i,u,null),l.flags|=2,o.return=r,l.return=r,o.sibling=l,r.child=o,(r.mode&1)!==0&&Sn(r,e.child,null,u),r.child.memoizedState=Nl(u),r.memoizedState=zl,l);if((r.mode&1)===0)return Si(e,r,u,null);if(i.data==="$!"){if(o=i.nextSibling&&i.nextSibling.dataset,o)var f=o.dgst;return o=f,l=Error(c(419)),o=Cl(l,o,void 0),Si(e,r,u,o)}if(f=(u&e.childLanes)!==0,Cr||f){if(o=sr,o!==null){switch(u&-u){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=(i&(o.suspendedLanes|u))!==0?0:i,i!==0&&i!==l.retryLane&&(l.retryLane=i,ut(e,i),Jr(o,e,i,-1))}return Vl(),o=Cl(Error(c(421))),Si(e,r,u,o)}return i.data==="$?"?(r.flags|=128,r.child=e.child,r=vf.bind(null,e),i._reactRetry=r,null):(e=l.treeContext,_r=St(i.nextSibling),Ir=r,Ue=!0,Qr=null,e!==null&&(Ar[Mr++]=ct,Ar[Mr++]=dt,Ar[Mr++]=Gt,ct=e.id,dt=e.overflow,Gt=r),r=Ll(r,o.children),r.flags|=4096,r)}function Vd(e,r,n){e.lanes|=r;var o=e.alternate;o!==null&&(o.lanes|=r),al(e.return,r,n)}function Il(e,r,n,o,i){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:o,tail:n,tailMode:i}:(l.isBackwards=r,l.rendering=null,l.renderingStartTime=0,l.last=o,l.tail=n,l.tailMode=i)}function Kd(e,r,n){var o=r.pendingProps,i=o.revealOrder,l=o.tail;if(br(e,r,o.children,n),o=$e.current,(o&2)!==0)o=o&1|2,r.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=r.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Vd(e,n,r);else if(e.tag===19)Vd(e,n,r);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===r)break e;for(;e.sibling===null;){if(e.return===null||e.return===r)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}o&=1}if(Ae($e,o),(r.mode&1)===0)r.memoizedState=null;else switch(i){case"forwards":for(n=r.child,i=null;n!==null;)e=n.alternate,e!==null&&gi(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=r.child,r.child=null):(i=n.sibling,n.sibling=null),Il(r,!1,i,n,l);break;case"backwards":for(n=null,i=r.child,r.child=null;i!==null;){if(e=i.alternate,e!==null&&gi(e)===null){r.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Il(r,!0,n,null,l);break;case"together":Il(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function Ci(e,r){(r.mode&1)===0&&e!==null&&(e.alternate=null,r.alternate=null,r.flags|=2)}function ht(e,r,n){if(e!==null&&(r.dependencies=e.dependencies),Qt|=r.lanes,(n&r.childLanes)===0)return null;if(e!==null&&r.child!==e.child)throw Error(c(153));if(r.child!==null){for(e=r.child,n=Rt(e,e.pendingProps),r.child=n,n.return=r;e.sibling!==null;)e=e.sibling,n=n.sibling=Rt(e,e.pendingProps),n.return=r;n.sibling=null}return r.child}function sf(e,r,n){switch(r.tag){case 3:Gd(r),wn();break;case 5:ad(r);break;case 1:Sr(r.type)&&li(r);break;case 4:ul(r,r.stateNode.containerInfo);break;case 10:var o=r.type._context,i=r.memoizedProps.value;Ae(hi,o._currentValue),o._currentValue=i;break;case 13:if(o=r.memoizedState,o!==null)return o.dehydrated!==null?(Ae($e,$e.current&1),r.flags|=128,null):(n&r.child.childLanes)!==0?Yd(e,r,n):(Ae($e,$e.current&1),e=ht(e,r,n),e!==null?e.sibling:null);Ae($e,$e.current&1);break;case 19:if(o=(n&r.childLanes)!==0,(e.flags&128)!==0){if(o)return Kd(e,r,n);r.flags|=128}if(i=r.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Ae($e,$e.current),o)break;return null;case 22:case 23:return r.lanes=0,Od(e,r,n)}return ht(e,r,n)}var Qd,_l,qd,Xd;Qd=function(e,r){for(var n=r.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===r)break;for(;n.sibling===null;){if(n.return===null||n.return===r)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},_l=function(){},qd=function(e,r,n,o){var i=e.memoizedProps;if(i!==o){e=r.stateNode,Vt(ot.current);var l=null;switch(n){case"input":i=as(e,i),o=as(e,o),l=[];break;case"select":i=_({},i,{value:void 0}),o=_({},o,{value:void 0}),l=[];break;case"textarea":i=us(e,i),o=us(e,o),l=[];break;default:typeof i.onClick!="function"&&typeof o.onClick=="function"&&(e.onclick=oi)}hs(n,o);var u;n=null;for(w in i)if(!o.hasOwnProperty(w)&&i.hasOwnProperty(w)&&i[w]!=null)if(w==="style"){var f=i[w];for(u in f)f.hasOwnProperty(u)&&(n||(n={}),n[u]="")}else w!=="dangerouslySetInnerHTML"&&w!=="children"&&w!=="suppressContentEditableWarning"&&w!=="suppressHydrationWarning"&&w!=="autoFocus"&&(x.hasOwnProperty(w)?l||(l=[]):(l=l||[]).push(w,null));for(w in o){var m=o[w];if(f=i!=null?i[w]:void 0,o.hasOwnProperty(w)&&m!==f&&(m!=null||f!=null))if(w==="style")if(f){for(u in f)!f.hasOwnProperty(u)||m&&m.hasOwnProperty(u)||(n||(n={}),n[u]="");for(u in m)m.hasOwnProperty(u)&&f[u]!==m[u]&&(n||(n={}),n[u]=m[u])}else n||(l||(l=[]),l.push(w,n)),n=m;else w==="dangerouslySetInnerHTML"?(m=m?m.__html:void 0,f=f?f.__html:void 0,m!=null&&f!==m&&(l=l||[]).push(w,m)):w==="children"?typeof m!="string"&&typeof m!="number"||(l=l||[]).push(w,""+m):w!=="suppressContentEditableWarning"&&w!=="suppressHydrationWarning"&&(x.hasOwnProperty(w)?(m!=null&&w==="onScroll"&&Me("scroll",e),l||f===m||(l=[])):(l=l||[]).push(w,m))}n&&(l=l||[]).push("style",n);var w=l;(r.updateQueue=w)&&(r.flags|=4)}},Xd=function(e,r,n,o){n!==o&&(r.flags|=4)};function jo(e,r){if(!Ue)switch(e.tailMode){case"hidden":r=e.tail;for(var n=null;r!==null;)r.alternate!==null&&(n=r),r=r.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var o=null;n!==null;)n.alternate!==null&&(o=n),n=n.sibling;o===null?r||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function gr(e){var r=e.alternate!==null&&e.alternate.child===e.child,n=0,o=0;if(r)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,o|=i.subtreeFlags&14680064,o|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,o|=i.subtreeFlags,o|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=o,e.childLanes=n,r}function lf(e,r,n){var o=r.pendingProps;switch(rl(r),r.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return gr(r),null;case 1:return Sr(r.type)&&si(),gr(r),null;case 3:return o=r.stateNode,En(),De(wr),De(xr),fl(),o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),(e===null||e.child===null)&&(ui(r)?r.flags|=4:e===null||e.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,Qr!==null&&(Gl(Qr),Qr=null))),_l(e,r),gr(r),null;case 5:pl(r);var i=Vt(xo.current);if(n=r.type,e!==null&&r.stateNode!=null)qd(e,r,n,o,i),e.ref!==r.ref&&(r.flags|=512,r.flags|=2097152);else{if(!o){if(r.stateNode===null)throw Error(c(166));return gr(r),null}if(e=Vt(ot.current),ui(r)){o=r.stateNode,n=r.type;var l=r.memoizedProps;switch(o[nt]=r,o[co]=l,e=(r.mode&1)!==0,n){case"dialog":Me("cancel",o),Me("close",o);break;case"iframe":case"object":case"embed":Me("load",o);break;case"video":case"audio":for(i=0;i<so.length;i++)Me(so[i],o);break;case"source":Me("error",o);break;case"img":case"image":case"link":Me("error",o),Me("load",o);break;case"details":Me("toggle",o);break;case"input":La(o,l),Me("invalid",o);break;case"select":o._wrapperState={wasMultiple:!!l.multiple},Me("invalid",o);break;case"textarea":Ba(o,l),Me("invalid",o)}hs(n,l),i=null;for(var u in l)if(l.hasOwnProperty(u)){var f=l[u];u==="children"?typeof f=="string"?o.textContent!==f&&(l.suppressHydrationWarning!==!0&&ni(o.textContent,f,e),i=["children",f]):typeof f=="number"&&o.textContent!==""+f&&(l.suppressHydrationWarning!==!0&&ni(o.textContent,f,e),i=["children",""+f]):x.hasOwnProperty(u)&&f!=null&&u==="onScroll"&&Me("scroll",o)}switch(n){case"input":gt(o),_a(o,l,!0);break;case"textarea":gt(o),Ha(o);break;case"select":case"option":break;default:typeof l.onClick=="function"&&(o.onclick=oi)}o=i,r.updateQueue=o,o!==null&&(r.flags|=4)}else{u=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Wa(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=u.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof o.is=="string"?e=u.createElement(n,{is:o.is}):(e=u.createElement(n),n==="select"&&(u=e,o.multiple?u.multiple=!0:o.size&&(u.size=o.size))):e=u.createElementNS(e,n),e[nt]=r,e[co]=o,Qd(e,r,!1,!1),r.stateNode=e;e:{switch(u=fs(n,o),n){case"dialog":Me("cancel",e),Me("close",e),i=o;break;case"iframe":case"object":case"embed":Me("load",e),i=o;break;case"video":case"audio":for(i=0;i<so.length;i++)Me(so[i],e);i=o;break;case"source":Me("error",e),i=o;break;case"img":case"image":case"link":Me("error",e),Me("load",e),i=o;break;case"details":Me("toggle",e),i=o;break;case"input":La(e,o),i=as(e,o),Me("invalid",e);break;case"option":i=o;break;case"select":e._wrapperState={wasMultiple:!!o.multiple},i=_({},o,{value:void 0}),Me("invalid",e);break;case"textarea":Ba(e,o),i=us(e,o),Me("invalid",e);break;default:i=o}hs(n,i),f=i;for(l in f)if(f.hasOwnProperty(l)){var m=f[l];l==="style"?Da(e,m):l==="dangerouslySetInnerHTML"?(m=m?m.__html:void 0,m!=null&&Aa(e,m)):l==="children"?typeof m=="string"?(n!=="textarea"||m!=="")&&On(e,m):typeof m=="number"&&On(e,""+m):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(x.hasOwnProperty(l)?m!=null&&l==="onScroll"&&Me("scroll",e):m!=null&&je(e,l,m,u))}switch(n){case"input":gt(e),_a(e,o,!1);break;case"textarea":gt(e),Ha(e);break;case"option":o.value!=null&&e.setAttribute("value",""+Ee(o.value));break;case"select":e.multiple=!!o.multiple,l=o.value,l!=null?an(e,!!o.multiple,l,!1):o.defaultValue!=null&&an(e,!!o.multiple,o.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=oi)}switch(n){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}}o&&(r.flags|=4)}r.ref!==null&&(r.flags|=512,r.flags|=2097152)}return gr(r),null;case 6:if(e&&r.stateNode!=null)Xd(e,r,e.memoizedProps,o);else{if(typeof o!="string"&&r.stateNode===null)throw Error(c(166));if(n=Vt(xo.current),Vt(ot.current),ui(r)){if(o=r.stateNode,n=r.memoizedProps,o[nt]=r,(l=o.nodeValue!==n)&&(e=Ir,e!==null))switch(e.tag){case 3:ni(o.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&ni(o.nodeValue,n,(e.mode&1)!==0)}l&&(r.flags|=4)}else o=(n.nodeType===9?n:n.ownerDocument).createTextNode(o),o[nt]=r,r.stateNode=o}return gr(r),null;case 13:if(De($e),o=r.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Ue&&_r!==null&&(r.mode&1)!==0&&(r.flags&128)===0)ed(),wn(),r.flags|=98560,l=!1;else if(l=ui(r),o!==null&&o.dehydrated!==null){if(e===null){if(!l)throw Error(c(318));if(l=r.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(c(317));l[nt]=r}else wn(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;gr(r),l=!1}else Qr!==null&&(Gl(Qr),Qr=null),l=!0;if(!l)return r.flags&65536?r:null}return(r.flags&128)!==0?(r.lanes=n,r):(o=o!==null,o!==(e!==null&&e.memoizedState!==null)&&o&&(r.child.flags|=8192,(r.mode&1)!==0&&(e===null||($e.current&1)!==0?nr===0&&(nr=3):Vl())),r.updateQueue!==null&&(r.flags|=4),gr(r),null);case 4:return En(),_l(e,r),e===null&&lo(r.stateNode.containerInfo),gr(r),null;case 10:return ll(r.type._context),gr(r),null;case 17:return Sr(r.type)&&si(),gr(r),null;case 19:if(De($e),l=r.memoizedState,l===null)return gr(r),null;if(o=(r.flags&128)!==0,u=l.rendering,u===null)if(o)jo(l,!1);else{if(nr!==0||e!==null&&(e.flags&128)!==0)for(e=r.child;e!==null;){if(u=gi(e),u!==null){for(r.flags|=128,jo(l,!1),o=u.updateQueue,o!==null&&(r.updateQueue=o,r.flags|=4),r.subtreeFlags=0,o=n,n=r.child;n!==null;)l=n,e=o,l.flags&=14680066,u=l.alternate,u===null?(l.childLanes=0,l.lanes=e,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=u.childLanes,l.lanes=u.lanes,l.child=u.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=u.memoizedProps,l.memoizedState=u.memoizedState,l.updateQueue=u.updateQueue,l.type=u.type,e=u.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Ae($e,$e.current&1|2),r.child}e=e.sibling}l.tail!==null&&Xe()>Ln&&(r.flags|=128,o=!0,jo(l,!1),r.lanes=4194304)}else{if(!o)if(e=gi(u),e!==null){if(r.flags|=128,o=!0,n=e.updateQueue,n!==null&&(r.updateQueue=n,r.flags|=4),jo(l,!0),l.tail===null&&l.tailMode==="hidden"&&!u.alternate&&!Ue)return gr(r),null}else 2*Xe()-l.renderingStartTime>Ln&&n!==1073741824&&(r.flags|=128,o=!0,jo(l,!1),r.lanes=4194304);l.isBackwards?(u.sibling=r.child,r.child=u):(n=l.last,n!==null?n.sibling=u:r.child=u,l.last=u)}return l.tail!==null?(r=l.tail,l.rendering=r,l.tail=r.sibling,l.renderingStartTime=Xe(),r.sibling=null,n=$e.current,Ae($e,o?n&1|2:n&1),r):(gr(r),null);case 22:case 23:return Yl(),o=r.memoizedState!==null,e!==null&&e.memoizedState!==null!==o&&(r.flags|=8192),o&&(r.mode&1)!==0?(Br&1073741824)!==0&&(gr(r),r.subtreeFlags&6&&(r.flags|=8192)):gr(r),null;case 24:return null;case 25:return null}throw Error(c(156,r.tag))}function af(e,r){switch(rl(r),r.tag){case 1:return Sr(r.type)&&si(),e=r.flags,e&65536?(r.flags=e&-65537|128,r):null;case 3:return En(),De(wr),De(xr),fl(),e=r.flags,(e&65536)!==0&&(e&128)===0?(r.flags=e&-65537|128,r):null;case 5:return pl(r),null;case 13:if(De($e),e=r.memoizedState,e!==null&&e.dehydrated!==null){if(r.alternate===null)throw Error(c(340));wn()}return e=r.flags,e&65536?(r.flags=e&-65537|128,r):null;case 19:return De($e),null;case 4:return En(),null;case 10:return ll(r.type._context),null;case 22:case 23:return Yl(),null;case 24:return null;default:return null}}var Ti=!1,vr=!1,cf=typeof WeakSet=="function"?WeakSet:Set,A=null;function zn(e,r){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(o){Ke(e,r,o)}else n.current=null}function Bl(e,r,n){try{n()}catch(o){Ke(e,r,o)}}var Zd=!1;function df(e,r){if(Ys=Yo,e=Nc(),As(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var o=n.getSelection&&n.getSelection();if(o&&o.rangeCount!==0){n=o.anchorNode;var i=o.anchorOffset,l=o.focusNode;o=o.focusOffset;try{n.nodeType,l.nodeType}catch{n=null;break e}var u=0,f=-1,m=-1,w=0,E=0,P=e,T=null;r:for(;;){for(var B;P!==n||i!==0&&P.nodeType!==3||(f=u+i),P!==l||o!==0&&P.nodeType!==3||(m=u+o),P.nodeType===3&&(u+=P.nodeValue.length),(B=P.firstChild)!==null;)T=P,P=B;for(;;){if(P===e)break r;if(T===n&&++w===i&&(f=u),T===l&&++E===o&&(m=u),(B=P.nextSibling)!==null)break;P=T,T=P.parentNode}P=B}n=f===-1||m===-1?null:{start:f,end:m}}else n=null}n=n||{start:0,end:0}}else n=null;for(Vs={focusedElem:e,selectionRange:n},Yo=!1,A=r;A!==null;)if(r=A,e=r.child,(r.subtreeFlags&1028)!==0&&e!==null)e.return=r,A=e;else for(;A!==null;){r=A;try{var M=r.alternate;if((r.flags&1024)!==0)switch(r.tag){case 0:case 11:case 15:break;case 1:if(M!==null){var O=M.memoizedProps,Ze=M.memoizedState,j=r.stateNode,g=j.getSnapshotBeforeUpdate(r.elementType===r.type?O:qr(r.type,O),Ze);j.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var b=r.stateNode.containerInfo;b.nodeType===1?b.textContent="":b.nodeType===9&&b.documentElement&&b.removeChild(b.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(c(163))}}catch(z){Ke(r,r.return,z)}if(e=r.sibling,e!==null){e.return=r.return,A=e;break}A=r.return}return M=Zd,Zd=!1,M}function bo(e,r,n){var o=r.updateQueue;if(o=o!==null?o.lastEffect:null,o!==null){var i=o=o.next;do{if((i.tag&e)===e){var l=i.destroy;i.destroy=void 0,l!==void 0&&Bl(r,n,l)}i=i.next}while(i!==o)}}function Ei(e,r){if(r=r.updateQueue,r=r!==null?r.lastEffect:null,r!==null){var n=r=r.next;do{if((n.tag&e)===e){var o=n.create;n.destroy=o()}n=n.next}while(n!==r)}}function Rl(e){var r=e.ref;if(r!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof r=="function"?r(e):r.current=e}}function Jd(e){var r=e.alternate;r!==null&&(e.alternate=null,Jd(r)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(r=e.stateNode,r!==null&&(delete r[nt],delete r[co],delete r[Xs],delete r[$h],delete r[Yh])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function eu(e){return e.tag===5||e.tag===3||e.tag===4}function ru(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||eu(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Hl(e,r,n){var o=e.tag;if(o===5||o===6)e=e.stateNode,r?n.nodeType===8?n.parentNode.insertBefore(e,r):n.insertBefore(e,r):(n.nodeType===8?(r=n.parentNode,r.insertBefore(e,n)):(r=n,r.appendChild(e)),n=n._reactRootContainer,n!=null||r.onclick!==null||(r.onclick=oi));else if(o!==4&&(e=e.child,e!==null))for(Hl(e,r,n),e=e.sibling;e!==null;)Hl(e,r,n),e=e.sibling}function Wl(e,r,n){var o=e.tag;if(o===5||o===6)e=e.stateNode,r?n.insertBefore(e,r):n.appendChild(e);else if(o!==4&&(e=e.child,e!==null))for(Wl(e,r,n),e=e.sibling;e!==null;)Wl(e,r,n),e=e.sibling}var ar=null,Xr=!1;function Nt(e,r,n){for(n=n.child;n!==null;)tu(e,r,n),n=n.sibling}function tu(e,r,n){if(tt&&typeof tt.onCommitFiberUnmount=="function")try{tt.onCommitFiberUnmount(Do,n)}catch{}switch(n.tag){case 5:vr||zn(n,r);case 6:var o=ar,i=Xr;ar=null,Nt(e,r,n),ar=o,Xr=i,ar!==null&&(Xr?(e=ar,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ar.removeChild(n.stateNode));break;case 18:ar!==null&&(Xr?(e=ar,n=n.stateNode,e.nodeType===8?qs(e.parentNode,n):e.nodeType===1&&qs(e,n),Zn(e)):qs(ar,n.stateNode));break;case 4:o=ar,i=Xr,ar=n.stateNode.containerInfo,Xr=!0,Nt(e,r,n),ar=o,Xr=i;break;case 0:case 11:case 14:case 15:if(!vr&&(o=n.updateQueue,o!==null&&(o=o.lastEffect,o!==null))){i=o=o.next;do{var l=i,u=l.destroy;l=l.tag,u!==void 0&&((l&2)!==0||(l&4)!==0)&&Bl(n,r,u),i=i.next}while(i!==o)}Nt(e,r,n);break;case 1:if(!vr&&(zn(n,r),o=n.stateNode,typeof o.componentWillUnmount=="function"))try{o.props=n.memoizedProps,o.state=n.memoizedState,o.componentWillUnmount()}catch(f){Ke(n,r,f)}Nt(e,r,n);break;case 21:Nt(e,r,n);break;case 22:n.mode&1?(vr=(o=vr)||n.memoizedState!==null,Nt(e,r,n),vr=o):Nt(e,r,n);break;default:Nt(e,r,n)}}function nu(e){var r=e.updateQueue;if(r!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new cf),r.forEach(function(o){var i=yf.bind(null,e,o);n.has(o)||(n.add(o),o.then(i,i))})}}function Zr(e,r){var n=r.deletions;if(n!==null)for(var o=0;o<n.length;o++){var i=n[o];try{var l=e,u=r,f=u;e:for(;f!==null;){switch(f.tag){case 5:ar=f.stateNode,Xr=!1;break e;case 3:ar=f.stateNode.containerInfo,Xr=!0;break e;case 4:ar=f.stateNode.containerInfo,Xr=!0;break e}f=f.return}if(ar===null)throw Error(c(160));tu(l,u,i),ar=null,Xr=!1;var m=i.alternate;m!==null&&(m.return=null),i.return=null}catch(w){Ke(i,r,w)}}if(r.subtreeFlags&12854)for(r=r.child;r!==null;)ou(r,e),r=r.sibling}function ou(e,r){var n=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Zr(r,e),st(e),o&4){try{bo(3,e,e.return),Ei(3,e)}catch(O){Ke(e,e.return,O)}try{bo(5,e,e.return)}catch(O){Ke(e,e.return,O)}}break;case 1:Zr(r,e),st(e),o&512&&n!==null&&zn(n,n.return);break;case 5:if(Zr(r,e),st(e),o&512&&n!==null&&zn(n,n.return),e.flags&32){var i=e.stateNode;try{On(i,"")}catch(O){Ke(e,e.return,O)}}if(o&4&&(i=e.stateNode,i!=null)){var l=e.memoizedProps,u=n!==null?n.memoizedProps:l,f=e.type,m=e.updateQueue;if(e.updateQueue=null,m!==null)try{f==="input"&&l.type==="radio"&&l.name!=null&&Ia(i,l),fs(f,u);var w=fs(f,l);for(u=0;u<m.length;u+=2){var E=m[u],P=m[u+1];E==="style"?Da(i,P):E==="dangerouslySetInnerHTML"?Aa(i,P):E==="children"?On(i,P):je(i,E,P,w)}switch(f){case"input":cs(i,l);break;case"textarea":Ra(i,l);break;case"select":var T=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!l.multiple;var B=l.value;B!=null?an(i,!!l.multiple,B,!1):T!==!!l.multiple&&(l.defaultValue!=null?an(i,!!l.multiple,l.defaultValue,!0):an(i,!!l.multiple,l.multiple?[]:"",!1))}i[co]=l}catch(O){Ke(e,e.return,O)}}break;case 6:if(Zr(r,e),st(e),o&4){if(e.stateNode===null)throw Error(c(162));i=e.stateNode,l=e.memoizedProps;try{i.nodeValue=l}catch(O){Ke(e,e.return,O)}}break;case 3:if(Zr(r,e),st(e),o&4&&n!==null&&n.memoizedState.isDehydrated)try{Zn(r.containerInfo)}catch(O){Ke(e,e.return,O)}break;case 4:Zr(r,e),st(e);break;case 13:Zr(r,e),st(e),i=e.child,i.flags&8192&&(l=i.memoizedState!==null,i.stateNode.isHidden=l,!l||i.alternate!==null&&i.alternate.memoizedState!==null||(Dl=Xe())),o&4&&nu(e);break;case 22:if(E=n!==null&&n.memoizedState!==null,e.mode&1?(vr=(w=vr)||E,Zr(r,e),vr=w):Zr(r,e),st(e),o&8192){if(w=e.memoizedState!==null,(e.stateNode.isHidden=w)&&!E&&(e.mode&1)!==0)for(A=e,E=e.child;E!==null;){for(P=A=E;A!==null;){switch(T=A,B=T.child,T.tag){case 0:case 11:case 14:case 15:bo(4,T,T.return);break;case 1:zn(T,T.return);var M=T.stateNode;if(typeof M.componentWillUnmount=="function"){o=T,n=T.return;try{r=o,M.props=r.memoizedProps,M.state=r.memoizedState,M.componentWillUnmount()}catch(O){Ke(o,n,O)}}break;case 5:zn(T,T.return);break;case 22:if(T.memoizedState!==null){lu(P);continue}}B!==null?(B.return=T,A=B):lu(P)}E=E.sibling}e:for(E=null,P=e;;){if(P.tag===5){if(E===null){E=P;try{i=P.stateNode,w?(l=i.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"):(f=P.stateNode,m=P.memoizedProps.style,u=m!=null&&m.hasOwnProperty("display")?m.display:null,f.style.display=Ma("display",u))}catch(O){Ke(e,e.return,O)}}}else if(P.tag===6){if(E===null)try{P.stateNode.nodeValue=w?"":P.memoizedProps}catch(O){Ke(e,e.return,O)}}else if((P.tag!==22&&P.tag!==23||P.memoizedState===null||P===e)&&P.child!==null){P.child.return=P,P=P.child;continue}if(P===e)break e;for(;P.sibling===null;){if(P.return===null||P.return===e)break e;E===P&&(E=null),P=P.return}E===P&&(E=null),P.sibling.return=P.return,P=P.sibling}}break;case 19:Zr(r,e),st(e),o&4&&nu(e);break;case 21:break;default:Zr(r,e),st(e)}}function st(e){var r=e.flags;if(r&2){try{e:{for(var n=e.return;n!==null;){if(eu(n)){var o=n;break e}n=n.return}throw Error(c(160))}switch(o.tag){case 5:var i=o.stateNode;o.flags&32&&(On(i,""),o.flags&=-33);var l=ru(e);Wl(e,l,i);break;case 3:case 4:var u=o.stateNode.containerInfo,f=ru(e);Hl(e,f,u);break;default:throw Error(c(161))}}catch(m){Ke(e,e.return,m)}e.flags&=-3}r&4096&&(e.flags&=-4097)}function uf(e,r,n){A=e,iu(e)}function iu(e,r,n){for(var o=(e.mode&1)!==0;A!==null;){var i=A,l=i.child;if(i.tag===22&&o){var u=i.memoizedState!==null||Ti;if(!u){var f=i.alternate,m=f!==null&&f.memoizedState!==null||vr;f=Ti;var w=vr;if(Ti=u,(vr=m)&&!w)for(A=i;A!==null;)u=A,m=u.child,u.tag===22&&u.memoizedState!==null?au(i):m!==null?(m.return=u,A=m):au(i);for(;l!==null;)A=l,iu(l),l=l.sibling;A=i,Ti=f,vr=w}su(e)}else(i.subtreeFlags&8772)!==0&&l!==null?(l.return=i,A=l):su(e)}}function su(e){for(;A!==null;){var r=A;if((r.flags&8772)!==0){var n=r.alternate;try{if((r.flags&8772)!==0)switch(r.tag){case 0:case 11:case 15:vr||Ei(5,r);break;case 1:var o=r.stateNode;if(r.flags&4&&!vr)if(n===null)o.componentDidMount();else{var i=r.elementType===r.type?n.memoizedProps:qr(r.type,n.memoizedProps);o.componentDidUpdate(i,n.memoizedState,o.__reactInternalSnapshotBeforeUpdate)}var l=r.updateQueue;l!==null&&ld(r,l,o);break;case 3:var u=r.updateQueue;if(u!==null){if(n=null,r.child!==null)switch(r.child.tag){case 5:n=r.child.stateNode;break;case 1:n=r.child.stateNode}ld(r,u,n)}break;case 5:var f=r.stateNode;if(n===null&&r.flags&4){n=f;var m=r.memoizedProps;switch(r.type){case"button":case"input":case"select":case"textarea":m.autoFocus&&n.focus();break;case"img":m.src&&(n.src=m.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(r.memoizedState===null){var w=r.alternate;if(w!==null){var E=w.memoizedState;if(E!==null){var P=E.dehydrated;P!==null&&Zn(P)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(c(163))}vr||r.flags&512&&Rl(r)}catch(T){Ke(r,r.return,T)}}if(r===e){A=null;break}if(n=r.sibling,n!==null){n.return=r.return,A=n;break}A=r.return}}function lu(e){for(;A!==null;){var r=A;if(r===e){A=null;break}var n=r.sibling;if(n!==null){n.return=r.return,A=n;break}A=r.return}}function au(e){for(;A!==null;){var r=A;try{switch(r.tag){case 0:case 11:case 15:var n=r.return;try{Ei(4,r)}catch(m){Ke(r,n,m)}break;case 1:var o=r.stateNode;if(typeof o.componentDidMount=="function"){var i=r.return;try{o.componentDidMount()}catch(m){Ke(r,i,m)}}var l=r.return;try{Rl(r)}catch(m){Ke(r,l,m)}break;case 5:var u=r.return;try{Rl(r)}catch(m){Ke(r,u,m)}}}catch(m){Ke(r,r.return,m)}if(r===e){A=null;break}var f=r.sibling;if(f!==null){f.return=r.return,A=f;break}A=r.return}}var pf=Math.ceil,Pi=I.ReactCurrentDispatcher,Al=I.ReactCurrentOwner,Fr=I.ReactCurrentBatchConfig,Ne=0,sr=null,er=null,cr=0,Br=0,Nn=Ct(0),nr=0,ko=null,Qt=0,zi=0,Ml=0,wo=null,Tr=null,Dl=0,Ln=1/0,ft=null,Ni=!1,Ol=null,Lt=null,Li=!1,It=null,Ii=0,So=0,Fl=null,_i=-1,Bi=0;function kr(){return(Ne&6)!==0?Xe():_i!==-1?_i:_i=Xe()}function _t(e){return(e.mode&1)===0?1:(Ne&2)!==0&&cr!==0?cr&-cr:Kh.transition!==null?(Bi===0&&(Bi=rc()),Bi):(e=Re,e!==0||(e=window.event,e=e===void 0?16:dc(e.type)),e)}function Jr(e,r,n,o){if(50<So)throw So=0,Fl=null,Error(c(185));Vn(e,n,o),((Ne&2)===0||e!==sr)&&(e===sr&&((Ne&2)===0&&(zi|=n),nr===4&&Bt(e,cr)),Er(e,o),n===1&&Ne===0&&(r.mode&1)===0&&(Ln=Xe()+500,ai&&Et()))}function Er(e,r){var n=e.callbackNode;Kp(e,r);var o=Uo(e,e===sr?cr:0);if(o===0)n!==null&&Za(n),e.callbackNode=null,e.callbackPriority=0;else if(r=o&-o,e.callbackPriority!==r){if(n!=null&&Za(n),r===1)e.tag===0?Vh(du.bind(null,e)):Qc(du.bind(null,e)),Uh(function(){(Ne&6)===0&&Et()}),n=null;else{switch(tc(o)){case 1:n=bs;break;case 4:n=Ja;break;case 16:n=Mo;break;case 536870912:n=ec;break;default:n=Mo}n=vu(n,cu.bind(null,e))}e.callbackPriority=r,e.callbackNode=n}}function cu(e,r){if(_i=-1,Bi=0,(Ne&6)!==0)throw Error(c(327));var n=e.callbackNode;if(In()&&e.callbackNode!==n)return null;var o=Uo(e,e===sr?cr:0);if(o===0)return null;if((o&30)!==0||(o&e.expiredLanes)!==0||r)r=Ri(e,o);else{r=o;var i=Ne;Ne|=2;var l=pu();(sr!==e||cr!==r)&&(ft=null,Ln=Xe()+500,Xt(e,r));do try{xf();break}catch(f){uu(e,f)}while(!0);sl(),Pi.current=l,Ne=i,er!==null?r=0:(sr=null,cr=0,r=nr)}if(r!==0){if(r===2&&(i=ks(e),i!==0&&(o=i,r=Ul(e,i))),r===1)throw n=ko,Xt(e,0),Bt(e,o),Er(e,Xe()),n;if(r===6)Bt(e,o);else{if(i=e.current.alternate,(o&30)===0&&!hf(i)&&(r=Ri(e,o),r===2&&(l=ks(e),l!==0&&(o=l,r=Ul(e,l))),r===1))throw n=ko,Xt(e,0),Bt(e,o),Er(e,Xe()),n;switch(e.finishedWork=i,e.finishedLanes=o,r){case 0:case 1:throw Error(c(345));case 2:Zt(e,Tr,ft);break;case 3:if(Bt(e,o),(o&130023424)===o&&(r=Dl+500-Xe(),10<r)){if(Uo(e,0)!==0)break;if(i=e.suspendedLanes,(i&o)!==o){kr(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Qs(Zt.bind(null,e,Tr,ft),r);break}Zt(e,Tr,ft);break;case 4:if(Bt(e,o),(o&4194240)===o)break;for(r=e.eventTimes,i=-1;0<o;){var u=31-Vr(o);l=1<<u,u=r[u],u>i&&(i=u),o&=~l}if(o=i,o=Xe()-o,o=(120>o?120:480>o?480:1080>o?1080:1920>o?1920:3e3>o?3e3:4320>o?4320:1960*pf(o/1960))-o,10<o){e.timeoutHandle=Qs(Zt.bind(null,e,Tr,ft),o);break}Zt(e,Tr,ft);break;case 5:Zt(e,Tr,ft);break;default:throw Error(c(329))}}}return Er(e,Xe()),e.callbackNode===n?cu.bind(null,e):null}function Ul(e,r){var n=wo;return e.current.memoizedState.isDehydrated&&(Xt(e,r).flags|=256),e=Ri(e,r),e!==2&&(r=Tr,Tr=n,r!==null&&Gl(r)),e}function Gl(e){Tr===null?Tr=e:Tr.push.apply(Tr,e)}function hf(e){for(var r=e;;){if(r.flags&16384){var n=r.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var o=0;o<n.length;o++){var i=n[o],l=i.getSnapshot;i=i.value;try{if(!Kr(l(),i))return!1}catch{return!1}}}if(n=r.child,r.subtreeFlags&16384&&n!==null)n.return=r,r=n;else{if(r===e)break;for(;r.sibling===null;){if(r.return===null||r.return===e)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function Bt(e,r){for(r&=~Ml,r&=~zi,e.suspendedLanes|=r,e.pingedLanes&=~r,e=e.expirationTimes;0<r;){var n=31-Vr(r),o=1<<n;e[n]=-1,r&=~o}}function du(e){if((Ne&6)!==0)throw Error(c(327));In();var r=Uo(e,0);if((r&1)===0)return Er(e,Xe()),null;var n=Ri(e,r);if(e.tag!==0&&n===2){var o=ks(e);o!==0&&(r=o,n=Ul(e,o))}if(n===1)throw n=ko,Xt(e,0),Bt(e,r),Er(e,Xe()),n;if(n===6)throw Error(c(345));return e.finishedWork=e.current.alternate,e.finishedLanes=r,Zt(e,Tr,ft),Er(e,Xe()),null}function $l(e,r){var n=Ne;Ne|=1;try{return e(r)}finally{Ne=n,Ne===0&&(Ln=Xe()+500,ai&&Et())}}function qt(e){It!==null&&It.tag===0&&(Ne&6)===0&&In();var r=Ne;Ne|=1;var n=Fr.transition,o=Re;try{if(Fr.transition=null,Re=1,e)return e()}finally{Re=o,Fr.transition=n,Ne=r,(Ne&6)===0&&Et()}}function Yl(){Br=Nn.current,De(Nn)}function Xt(e,r){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Fh(n)),er!==null)for(n=er.return;n!==null;){var o=n;switch(rl(o),o.tag){case 1:o=o.type.childContextTypes,o!=null&&si();break;case 3:En(),De(wr),De(xr),fl();break;case 5:pl(o);break;case 4:En();break;case 13:De($e);break;case 19:De($e);break;case 10:ll(o.type._context);break;case 22:case 23:Yl()}n=n.return}if(sr=e,er=e=Rt(e.current,null),cr=Br=r,nr=0,ko=null,Ml=zi=Qt=0,Tr=wo=null,Yt!==null){for(r=0;r<Yt.length;r++)if(n=Yt[r],o=n.interleaved,o!==null){n.interleaved=null;var i=o.next,l=n.pending;if(l!==null){var u=l.next;l.next=i,o.next=u}n.pending=o}Yt=null}return e}function uu(e,r){do{var n=er;try{if(sl(),vi.current=ki,yi){for(var o=Ye.memoizedState;o!==null;){var i=o.queue;i!==null&&(i.pending=null),o=o.next}yi=!1}if(Kt=0,ir=tr=Ye=null,mo=!1,go=0,Al.current=null,n===null||n.return===null){nr=1,ko=r,er=null;break}e:{var l=e,u=n.return,f=n,m=r;if(r=cr,f.flags|=32768,m!==null&&typeof m=="object"&&typeof m.then=="function"){var w=m,E=f,P=E.tag;if((E.mode&1)===0&&(P===0||P===11||P===15)){var T=E.alternate;T?(E.updateQueue=T.updateQueue,E.memoizedState=T.memoizedState,E.lanes=T.lanes):(E.updateQueue=null,E.memoizedState=null)}var B=Hd(u);if(B!==null){B.flags&=-257,Wd(B,u,f,l,r),B.mode&1&&Rd(l,w,r),r=B,m=w;var M=r.updateQueue;if(M===null){var O=new Set;O.add(m),r.updateQueue=O}else M.add(m);break e}else{if((r&1)===0){Rd(l,w,r),Vl();break e}m=Error(c(426))}}else if(Ue&&f.mode&1){var Ze=Hd(u);if(Ze!==null){(Ze.flags&65536)===0&&(Ze.flags|=256),Wd(Ze,u,f,l,r),ol(Pn(m,f));break e}}l=m=Pn(m,f),nr!==4&&(nr=2),wo===null?wo=[l]:wo.push(l),l=u;do{switch(l.tag){case 3:l.flags|=65536,r&=-r,l.lanes|=r;var j=_d(l,m,r);sd(l,j);break e;case 1:f=m;var g=l.type,b=l.stateNode;if((l.flags&128)===0&&(typeof g.getDerivedStateFromError=="function"||b!==null&&typeof b.componentDidCatch=="function"&&(Lt===null||!Lt.has(b)))){l.flags|=65536,r&=-r,l.lanes|=r;var z=Bd(l,f,r);sd(l,z);break e}}l=l.return}while(l!==null)}fu(n)}catch($){r=$,er===n&&n!==null&&(er=n=n.return);continue}break}while(!0)}function pu(){var e=Pi.current;return Pi.current=ki,e===null?ki:e}function Vl(){(nr===0||nr===3||nr===2)&&(nr=4),sr===null||(Qt&268435455)===0&&(zi&268435455)===0||Bt(sr,cr)}function Ri(e,r){var n=Ne;Ne|=2;var o=pu();(sr!==e||cr!==r)&&(ft=null,Xt(e,r));do try{ff();break}catch(i){uu(e,i)}while(!0);if(sl(),Ne=n,Pi.current=o,er!==null)throw Error(c(261));return sr=null,cr=0,nr}function ff(){for(;er!==null;)hu(er)}function xf(){for(;er!==null&&!Mp();)hu(er)}function hu(e){var r=gu(e.alternate,e,Br);e.memoizedProps=e.pendingProps,r===null?fu(e):er=r,Al.current=null}function fu(e){var r=e;do{var n=r.alternate;if(e=r.return,(r.flags&32768)===0){if(n=lf(n,r,Br),n!==null){er=n;return}}else{if(n=af(n,r),n!==null){n.flags&=32767,er=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{nr=6,er=null;return}}if(r=r.sibling,r!==null){er=r;return}er=r=e}while(r!==null);nr===0&&(nr=5)}function Zt(e,r,n){var o=Re,i=Fr.transition;try{Fr.transition=null,Re=1,mf(e,r,n,o)}finally{Fr.transition=i,Re=o}return null}function mf(e,r,n,o){do In();while(It!==null);if((Ne&6)!==0)throw Error(c(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(c(177));e.callbackNode=null,e.callbackPriority=0;var l=n.lanes|n.childLanes;if(Qp(e,l),e===sr&&(er=sr=null,cr=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||Li||(Li=!0,vu(Mo,function(){return In(),null})),l=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||l){l=Fr.transition,Fr.transition=null;var u=Re;Re=1;var f=Ne;Ne|=4,Al.current=null,df(e,n),ou(n,e),Rh(Vs),Yo=!!Ys,Vs=Ys=null,e.current=n,uf(n),Dp(),Ne=f,Re=u,Fr.transition=l}else e.current=n;if(Li&&(Li=!1,It=e,Ii=i),l=e.pendingLanes,l===0&&(Lt=null),Up(n.stateNode),Er(e,Xe()),r!==null)for(o=e.onRecoverableError,n=0;n<r.length;n++)i=r[n],o(i.value,{componentStack:i.stack,digest:i.digest});if(Ni)throw Ni=!1,e=Ol,Ol=null,e;return(Ii&1)!==0&&e.tag!==0&&In(),l=e.pendingLanes,(l&1)!==0?e===Fl?So++:(So=0,Fl=e):So=0,Et(),null}function In(){if(It!==null){var e=tc(Ii),r=Fr.transition,n=Re;try{if(Fr.transition=null,Re=16>e?16:e,It===null)var o=!1;else{if(e=It,It=null,Ii=0,(Ne&6)!==0)throw Error(c(331));var i=Ne;for(Ne|=4,A=e.current;A!==null;){var l=A,u=l.child;if((A.flags&16)!==0){var f=l.deletions;if(f!==null){for(var m=0;m<f.length;m++){var w=f[m];for(A=w;A!==null;){var E=A;switch(E.tag){case 0:case 11:case 15:bo(8,E,l)}var P=E.child;if(P!==null)P.return=E,A=P;else for(;A!==null;){E=A;var T=E.sibling,B=E.return;if(Jd(E),E===w){A=null;break}if(T!==null){T.return=B,A=T;break}A=B}}}var M=l.alternate;if(M!==null){var O=M.child;if(O!==null){M.child=null;do{var Ze=O.sibling;O.sibling=null,O=Ze}while(O!==null)}}A=l}}if((l.subtreeFlags&2064)!==0&&u!==null)u.return=l,A=u;else e:for(;A!==null;){if(l=A,(l.flags&2048)!==0)switch(l.tag){case 0:case 11:case 15:bo(9,l,l.return)}var j=l.sibling;if(j!==null){j.return=l.return,A=j;break e}A=l.return}}var g=e.current;for(A=g;A!==null;){u=A;var b=u.child;if((u.subtreeFlags&2064)!==0&&b!==null)b.return=u,A=b;else e:for(u=g;A!==null;){if(f=A,(f.flags&2048)!==0)try{switch(f.tag){case 0:case 11:case 15:Ei(9,f)}}catch($){Ke(f,f.return,$)}if(f===u){A=null;break e}var z=f.sibling;if(z!==null){z.return=f.return,A=z;break e}A=f.return}}if(Ne=i,Et(),tt&&typeof tt.onPostCommitFiberRoot=="function")try{tt.onPostCommitFiberRoot(Do,e)}catch{}o=!0}return o}finally{Re=n,Fr.transition=r}}return!1}function xu(e,r,n){r=Pn(n,r),r=_d(e,r,1),e=zt(e,r,1),r=kr(),e!==null&&(Vn(e,1,r),Er(e,r))}function Ke(e,r,n){if(e.tag===3)xu(e,e,n);else for(;r!==null;){if(r.tag===3){xu(r,e,n);break}else if(r.tag===1){var o=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Lt===null||!Lt.has(o))){e=Pn(n,e),e=Bd(r,e,1),r=zt(r,e,1),e=kr(),r!==null&&(Vn(r,1,e),Er(r,e));break}}r=r.return}}function gf(e,r,n){var o=e.pingCache;o!==null&&o.delete(r),r=kr(),e.pingedLanes|=e.suspendedLanes&n,sr===e&&(cr&n)===n&&(nr===4||nr===3&&(cr&130023424)===cr&&500>Xe()-Dl?Xt(e,0):Ml|=n),Er(e,r)}function mu(e,r){r===0&&((e.mode&1)===0?r=1:(r=Fo,Fo<<=1,(Fo&130023424)===0&&(Fo=4194304)));var n=kr();e=ut(e,r),e!==null&&(Vn(e,r,n),Er(e,n))}function vf(e){var r=e.memoizedState,n=0;r!==null&&(n=r.retryLane),mu(e,n)}function yf(e,r){var n=0;switch(e.tag){case 13:var o=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:o=e.stateNode;break;default:throw Error(c(314))}o!==null&&o.delete(r),mu(e,n)}var gu;gu=function(e,r,n){if(e!==null)if(e.memoizedProps!==r.pendingProps||wr.current)Cr=!0;else{if((e.lanes&n)===0&&(r.flags&128)===0)return Cr=!1,sf(e,r,n);Cr=(e.flags&131072)!==0}else Cr=!1,Ue&&(r.flags&1048576)!==0&&qc(r,di,r.index);switch(r.lanes=0,r.tag){case 2:var o=r.type;Ci(e,r),e=r.pendingProps;var i=jn(r,xr.current);Tn(r,n),i=gl(null,r,o,e,i,n);var l=vl();return r.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(r.tag=1,r.memoizedState=null,r.updateQueue=null,Sr(o)?(l=!0,li(r)):l=!1,r.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,dl(r),i.updater=wi,r.stateNode=i,i._reactInternals=r,Sl(r,o,e,n),r=Pl(null,r,o,!0,l,n)):(r.tag=0,Ue&&l&&el(r),br(null,r,i,n),r=r.child),r;case 16:o=r.elementType;e:{switch(Ci(e,r),e=r.pendingProps,i=o._init,o=i(o._payload),r.type=o,i=r.tag=bf(o),e=qr(o,e),i){case 0:r=El(null,r,o,e,n);break e;case 1:r=Ud(null,r,o,e,n);break e;case 11:r=Ad(null,r,o,e,n);break e;case 14:r=Md(null,r,o,qr(o.type,e),n);break e}throw Error(c(306,o,""))}return r;case 0:return o=r.type,i=r.pendingProps,i=r.elementType===o?i:qr(o,i),El(e,r,o,i,n);case 1:return o=r.type,i=r.pendingProps,i=r.elementType===o?i:qr(o,i),Ud(e,r,o,i,n);case 3:e:{if(Gd(r),e===null)throw Error(c(387));o=r.pendingProps,l=r.memoizedState,i=l.element,id(e,r),mi(r,o,null,n);var u=r.memoizedState;if(o=u.element,l.isDehydrated)if(l={element:o,isDehydrated:!1,cache:u.cache,pendingSuspenseBoundaries:u.pendingSuspenseBoundaries,transitions:u.transitions},r.updateQueue.baseState=l,r.memoizedState=l,r.flags&256){i=Pn(Error(c(423)),r),r=$d(e,r,o,n,i);break e}else if(o!==i){i=Pn(Error(c(424)),r),r=$d(e,r,o,n,i);break e}else for(_r=St(r.stateNode.containerInfo.firstChild),Ir=r,Ue=!0,Qr=null,n=nd(r,null,o,n),r.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(wn(),o===i){r=ht(e,r,n);break e}br(e,r,o,n)}r=r.child}return r;case 5:return ad(r),e===null&&nl(r),o=r.type,i=r.pendingProps,l=e!==null?e.memoizedProps:null,u=i.children,Ks(o,i)?u=null:l!==null&&Ks(o,l)&&(r.flags|=32),Fd(e,r),br(e,r,u,n),r.child;case 6:return e===null&&nl(r),null;case 13:return Yd(e,r,n);case 4:return ul(r,r.stateNode.containerInfo),o=r.pendingProps,e===null?r.child=Sn(r,null,o,n):br(e,r,o,n),r.child;case 11:return o=r.type,i=r.pendingProps,i=r.elementType===o?i:qr(o,i),Ad(e,r,o,i,n);case 7:return br(e,r,r.pendingProps,n),r.child;case 8:return br(e,r,r.pendingProps.children,n),r.child;case 12:return br(e,r,r.pendingProps.children,n),r.child;case 10:e:{if(o=r.type._context,i=r.pendingProps,l=r.memoizedProps,u=i.value,Ae(hi,o._currentValue),o._currentValue=u,l!==null)if(Kr(l.value,u)){if(l.children===i.children&&!wr.current){r=ht(e,r,n);break e}}else for(l=r.child,l!==null&&(l.return=r);l!==null;){var f=l.dependencies;if(f!==null){u=l.child;for(var m=f.firstContext;m!==null;){if(m.context===o){if(l.tag===1){m=pt(-1,n&-n),m.tag=2;var w=l.updateQueue;if(w!==null){w=w.shared;var E=w.pending;E===null?m.next=m:(m.next=E.next,E.next=m),w.pending=m}}l.lanes|=n,m=l.alternate,m!==null&&(m.lanes|=n),al(l.return,n,r),f.lanes|=n;break}m=m.next}}else if(l.tag===10)u=l.type===r.type?null:l.child;else if(l.tag===18){if(u=l.return,u===null)throw Error(c(341));u.lanes|=n,f=u.alternate,f!==null&&(f.lanes|=n),al(u,n,r),u=l.sibling}else u=l.child;if(u!==null)u.return=l;else for(u=l;u!==null;){if(u===r){u=null;break}if(l=u.sibling,l!==null){l.return=u.return,u=l;break}u=u.return}l=u}br(e,r,i.children,n),r=r.child}return r;case 9:return i=r.type,o=r.pendingProps.children,Tn(r,n),i=Dr(i),o=o(i),r.flags|=1,br(e,r,o,n),r.child;case 14:return o=r.type,i=qr(o,r.pendingProps),i=qr(o.type,i),Md(e,r,o,i,n);case 15:return Dd(e,r,r.type,r.pendingProps,n);case 17:return o=r.type,i=r.pendingProps,i=r.elementType===o?i:qr(o,i),Ci(e,r),r.tag=1,Sr(o)?(e=!0,li(r)):e=!1,Tn(r,n),Ld(r,o,i),Sl(r,o,i,n),Pl(null,r,o,!0,e,n);case 19:return Kd(e,r,n);case 22:return Od(e,r,n)}throw Error(c(156,r.tag))};function vu(e,r){return Xa(e,r)}function jf(e,r,n,o){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ur(e,r,n,o){return new jf(e,r,n,o)}function Kl(e){return e=e.prototype,!(!e||!e.isReactComponent)}function bf(e){if(typeof e=="function")return Kl(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Ve)return 11;if(e===jr)return 14}return 2}function Rt(e,r){var n=e.alternate;return n===null?(n=Ur(e.tag,r,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=r,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,r=e.dependencies,n.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Hi(e,r,n,o,i,l){var u=2;if(o=e,typeof e=="function")Kl(e)&&(u=1);else if(typeof e=="string")u=5;else e:switch(e){case L:return Jt(n.children,i,l,r);case G:u=8,i|=8;break;case He:return e=Ur(12,n,r,i|2),e.elementType=He,e.lanes=l,e;case Fe:return e=Ur(13,n,r,i),e.elementType=Fe,e.lanes=l,e;case hr:return e=Ur(19,n,r,i),e.elementType=hr,e.lanes=l,e;case We:return Wi(n,i,l,r);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case qe:u=10;break e;case Se:u=9;break e;case Ve:u=11;break e;case jr:u=14;break e;case fr:u=16,o=null;break e}throw Error(c(130,e==null?e:typeof e,""))}return r=Ur(u,n,r,i),r.elementType=e,r.type=o,r.lanes=l,r}function Jt(e,r,n,o){return e=Ur(7,e,o,r),e.lanes=n,e}function Wi(e,r,n,o){return e=Ur(22,e,o,r),e.elementType=We,e.lanes=n,e.stateNode={isHidden:!1},e}function Ql(e,r,n){return e=Ur(6,e,null,r),e.lanes=n,e}function ql(e,r,n){return r=Ur(4,e.children!==null?e.children:[],e.key,r),r.lanes=n,r.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},r}function kf(e,r,n,o,i){this.tag=r,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ws(0),this.expirationTimes=ws(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ws(0),this.identifierPrefix=o,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Xl(e,r,n,o,i,l,u,f,m){return e=new kf(e,r,n,f,m),r===1?(r=1,l===!0&&(r|=8)):r=0,l=Ur(3,null,null,r),e.current=l,l.stateNode=e,l.memoizedState={element:o,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},dl(l),e}function wf(e,r,n){var o=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Z,key:o==null?null:""+o,children:e,containerInfo:r,implementation:n}}function yu(e){if(!e)return Tt;e=e._reactInternals;e:{if(Ot(e)!==e||e.tag!==1)throw Error(c(170));var r=e;do{switch(r.tag){case 3:r=r.stateNode.context;break e;case 1:if(Sr(r.type)){r=r.stateNode.__reactInternalMemoizedMergedChildContext;break e}}r=r.return}while(r!==null);throw Error(c(171))}if(e.tag===1){var n=e.type;if(Sr(n))return Vc(e,n,r)}return r}function ju(e,r,n,o,i,l,u,f,m){return e=Xl(n,o,!0,e,i,l,u,f,m),e.context=yu(null),n=e.current,o=kr(),i=_t(n),l=pt(o,i),l.callback=r!=null?r:null,zt(n,l,i),e.current.lanes=i,Vn(e,i,o),Er(e,o),e}function Ai(e,r,n,o){var i=r.current,l=kr(),u=_t(i);return n=yu(n),r.context===null?r.context=n:r.pendingContext=n,r=pt(l,u),r.payload={element:e},o=o===void 0?null:o,o!==null&&(r.callback=o),e=zt(i,r,u),e!==null&&(Jr(e,i,u,l),xi(e,i,u)),u}function Mi(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function bu(e,r){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<r?n:r}}function Zl(e,r){bu(e,r),(e=e.alternate)&&bu(e,r)}function Sf(){return null}var ku=typeof reportError=="function"?reportError:function(e){console.error(e)};function Jl(e){this._internalRoot=e}Di.prototype.render=Jl.prototype.render=function(e){var r=this._internalRoot;if(r===null)throw Error(c(409));Ai(e,r,null,null)},Di.prototype.unmount=Jl.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var r=e.containerInfo;qt(function(){Ai(null,e,null,null)}),r[lt]=null}};function Di(e){this._internalRoot=e}Di.prototype.unstable_scheduleHydration=function(e){if(e){var r=ic();e={blockedOn:null,target:e,priority:r};for(var n=0;n<bt.length&&r!==0&&r<bt[n].priority;n++);bt.splice(n,0,e),n===0&&ac(e)}};function ea(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Oi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function wu(){}function Cf(e,r,n,o,i){if(i){if(typeof o=="function"){var l=o;o=function(){var w=Mi(u);l.call(w)}}var u=ju(r,o,e,0,null,!1,!1,"",wu);return e._reactRootContainer=u,e[lt]=u.current,lo(e.nodeType===8?e.parentNode:e),qt(),u}for(;i=e.lastChild;)e.removeChild(i);if(typeof o=="function"){var f=o;o=function(){var w=Mi(m);f.call(w)}}var m=Xl(e,0,!1,null,null,!1,!1,"",wu);return e._reactRootContainer=m,e[lt]=m.current,lo(e.nodeType===8?e.parentNode:e),qt(function(){Ai(r,m,n,o)}),m}function Fi(e,r,n,o,i){var l=n._reactRootContainer;if(l){var u=l;if(typeof i=="function"){var f=i;i=function(){var m=Mi(u);f.call(m)}}Ai(r,u,e,i)}else u=Cf(n,r,e,i,o);return Mi(u)}nc=function(e){switch(e.tag){case 3:var r=e.stateNode;if(r.current.memoizedState.isDehydrated){var n=Yn(r.pendingLanes);n!==0&&(Ss(r,n|1),Er(r,Xe()),(Ne&6)===0&&(Ln=Xe()+500,Et()))}break;case 13:qt(function(){var o=ut(e,1);if(o!==null){var i=kr();Jr(o,e,1,i)}}),Zl(e,1)}},Cs=function(e){if(e.tag===13){var r=ut(e,134217728);if(r!==null){var n=kr();Jr(r,e,134217728,n)}Zl(e,134217728)}},oc=function(e){if(e.tag===13){var r=_t(e),n=ut(e,r);if(n!==null){var o=kr();Jr(n,e,r,o)}Zl(e,r)}},ic=function(){return Re},sc=function(e,r){var n=Re;try{return Re=e,r()}finally{Re=n}},gs=function(e,r,n){switch(r){case"input":if(cs(e,n),r=n.name,n.type==="radio"&&r!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+r)+'][type="radio"]'),r=0;r<n.length;r++){var o=n[r];if(o!==e&&o.form===e.form){var i=ii(o);if(!i)throw Error(c(90));Dt(o),cs(o,i)}}}break;case"textarea":Ra(e,n);break;case"select":r=n.value,r!=null&&an(e,!!n.multiple,r,!1)}},Ga=$l,$a=qt;var Tf={usingClientEntryPoint:!1,Events:[uo,vn,ii,Fa,Ua,$l]},Co={findFiberByHostInstance:Ft,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Ef={bundleType:Co.bundleType,version:Co.version,rendererPackageName:Co.rendererPackageName,rendererConfig:Co.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:I.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Qa(e),e===null?null:e.stateNode},findFiberByHostInstance:Co.findFiberByHostInstance||Sf,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__!="undefined"){var Ui=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ui.isDisabled&&Ui.supportsFiber)try{Do=Ui.inject(Ef),tt=Ui}catch{}}return Pr.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Tf,Pr.createPortal=function(e,r){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ea(r))throw Error(c(200));return wf(e,r,null,n)},Pr.createRoot=function(e,r){if(!ea(e))throw Error(c(299));var n=!1,o="",i=ku;return r!=null&&(r.unstable_strictMode===!0&&(n=!0),r.identifierPrefix!==void 0&&(o=r.identifierPrefix),r.onRecoverableError!==void 0&&(i=r.onRecoverableError)),r=Xl(e,1,!1,null,null,n,!1,o,i),e[lt]=r.current,lo(e.nodeType===8?e.parentNode:e),new Jl(r)},Pr.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var r=e._reactInternals;if(r===void 0)throw typeof e.render=="function"?Error(c(188)):(e=Object.keys(e).join(","),Error(c(268,e)));return e=Qa(r),e=e===null?null:e.stateNode,e},Pr.flushSync=function(e){return qt(e)},Pr.hydrate=function(e,r,n){if(!Oi(r))throw Error(c(200));return Fi(null,e,r,!0,n)},Pr.hydrateRoot=function(e,r,n){if(!ea(e))throw Error(c(405));var o=n!=null&&n.hydratedSources||null,i=!1,l="",u=ku;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onRecoverableError!==void 0&&(u=n.onRecoverableError)),r=ju(r,null,e,1,n!=null?n:null,i,!1,l,u),e[lt]=r.current,lo(e),o)for(e=0;e<o.length;e++)n=o[e],i=n._getVersion,i=i(n._source),r.mutableSourceEagerHydrationData==null?r.mutableSourceEagerHydrationData=[n,i]:r.mutableSourceEagerHydrationData.push(n,i);return new Di(r)},Pr.render=function(e,r,n){if(!Oi(r))throw Error(c(200));return Fi(null,e,r,!1,n)},Pr.unmountComponentAtNode=function(e){if(!Oi(e))throw Error(c(40));return e._reactRootContainer?(qt(function(){Fi(null,null,e,!1,function(){e._reactRootContainer=null,e[lt]=null})}),!0):!1},Pr.unstable_batchedUpdates=$l,Pr.unstable_renderSubtreeIntoContainer=function(e,r,n,o){if(!Oi(n))throw Error(c(200));if(e==null||e._reactInternals===void 0)throw Error(c(38));return Fi(e,r,n,!1,o)},Pr.version="18.3.1-next-f1338f8080-20240426",Pr}var Lu;function Hf(){if(Lu)return na.exports;Lu=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__=="undefined"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(d){console.error(d)}}return s(),na.exports=Rf(),na.exports}var Iu;function Wf(){if(Iu)return Gi;Iu=1;var s=Hf();return Gi.createRoot=s.createRoot,Gi.hydrateRoot=s.hydrateRoot,Gi}var Af=Wf(),Y=ya();const Hr=zf(Y);var zr=function(){return zr=Object.assign||function(d){for(var c,p=1,x=arguments.length;p<x;p++){c=arguments[p];for(var k in c)Object.prototype.hasOwnProperty.call(c,k)&&(d[k]=c[k])}return d},zr.apply(this,arguments)};function qi(s,d,c){if(c||arguments.length===2)for(var p=0,x=d.length,k;p<x;p++)(k||!(p in d))&&(k||(k=Array.prototype.slice.call(d,0,p)),k[p]=d[p]);return s.concat(k||Array.prototype.slice.call(d))}var Oe="-ms-",zo="-moz-",Ie="-webkit-",Ju="comm",rs="rule",ja="decl",Mf="@import",Df="@namespace",ep="@keyframes",Of="@layer",rp=Math.abs,ba=String.fromCharCode,pa=Object.assign;function Ff(s,d){return or(s,0)^45?(((d<<2^or(s,0))<<2^or(s,1))<<2^or(s,2))<<2^or(s,3):0}function tp(s){return s.trim()}function xt(s,d){return(s=d.exec(s))?s[0]:s}function ye(s,d,c){return s.replace(d,c)}function $i(s,d,c){return s.indexOf(d,c)}function or(s,d){return s.charCodeAt(d)|0}function on(s,d,c){return s.slice(d,c)}function et(s){return s.length}function np(s){return s.length}function Eo(s,d){return d.push(s),s}function Uf(s,d){return s.map(d).join("")}function _u(s,d){return s.filter(function(c){return!xt(c,d)})}var ts=1,Bn=1,op=0,Gr=0,rr=0,Mn="";function ns(s,d,c,p,x,k,h,y){return{value:s,root:d,parent:c,type:p,props:x,children:k,line:ts,column:Bn,length:h,return:"",siblings:y}}function Wt(s,d){return pa(ns("",null,null,"",null,null,0,s.siblings),s,{length:-s.length},d)}function _n(s){for(;s.root;)s=Wt(s.root,{children:[s]});Eo(s,s.siblings)}function Gf(){return rr}function $f(){return rr=Gr>0?or(Mn,--Gr):0,Bn--,rr===10&&(Bn=1,ts--),rr}function rt(){return rr=Gr<op?or(Mn,Gr++):0,Bn++,rr===10&&(Bn=1,ts++),rr}function At(){return or(Mn,Gr)}function Yi(){return Gr}function os(s,d){return on(Mn,s,d)}function Lo(s){switch(s){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Yf(s){return ts=Bn=1,op=et(Mn=s),Gr=0,[]}function Vf(s){return Mn="",s}function sa(s){return tp(os(Gr-1,ha(s===91?s+2:s===40?s+1:s)))}function Kf(s){for(;(rr=At())&&rr<33;)rt();return Lo(s)>2||Lo(rr)>3?"":" "}function Qf(s,d){for(;--d&&rt()&&!(rr<48||rr>102||rr>57&&rr<65||rr>70&&rr<97););return os(s,Yi()+(d<6&&At()==32&&rt()==32))}function ha(s){for(;rt();)switch(rr){case s:return Gr;case 34:case 39:s!==34&&s!==39&&ha(rr);break;case 40:s===41&&ha(s);break;case 92:rt();break}return Gr}function qf(s,d){for(;rt()&&s+rr!==57;)if(s+rr===84&&At()===47)break;return"/*"+os(d,Gr-1)+"*"+ba(s===47?s:rt())}function Xf(s){for(;!Lo(At());)rt();return os(s,Gr)}function Zf(s){return Vf(Vi("",null,null,null,[""],s=Yf(s),0,[0],s))}function Vi(s,d,c,p,x,k,h,y,S){for(var le=0,ae=0,q=h,me=0,Te=0,he=0,X=1,ce=1,_e=1,Pe=0,je="",I=x,fe=k,Z=p,L=je;ce;)switch(he=Pe,Pe=rt()){case 40:if(he!=108&&or(L,q-1)==58){$i(L+=ye(sa(Pe),"&","&\f"),"&\f",rp(le?y[le-1]:0))!=-1&&(_e=-1);break}case 34:case 39:case 91:L+=sa(Pe);break;case 9:case 10:case 13:case 32:L+=Kf(he);break;case 92:L+=Qf(Yi()-1,7);continue;case 47:switch(At()){case 42:case 47:Eo(Jf(qf(rt(),Yi()),d,c,S),S),(Lo(he||1)==5||Lo(At()||1)==5)&&et(L)&&on(L,-1,void 0)!==" "&&(L+=" ");break;default:L+="/"}break;case 123*X:y[le++]=et(L)*_e;case 125*X:case 59:case 0:switch(Pe){case 0:case 125:ce=0;case 59+ae:_e==-1&&(L=ye(L,/\f/g,"")),Te>0&&(et(L)-q||X===0&&he===47)&&Eo(Te>32?Ru(L+";",p,c,q-1,S):Ru(ye(L," ","")+";",p,c,q-2,S),S);break;case 59:L+=";";default:if(Eo(Z=Bu(L,d,c,le,ae,x,y,je,I=[],fe=[],q,k),k),Pe===123)if(ae===0)Vi(L,d,Z,Z,I,k,q,y,fe);else{switch(me){case 99:if(or(L,3)===110)break;case 108:if(or(L,2)===97)break;default:ae=0;case 100:case 109:case 115:}ae?Vi(s,Z,Z,p&&Eo(Bu(s,Z,Z,0,0,x,y,je,x,I=[],q,fe),fe),x,fe,q,y,p?I:fe):Vi(L,Z,Z,Z,[""],fe,0,y,fe)}}le=ae=Te=0,X=_e=1,je=L="",q=h;break;case 58:q=1+et(L),Te=he;default:if(X<1){if(Pe==123)--X;else if(Pe==125&&X++==0&&$f()==125)continue}switch(L+=ba(Pe),Pe*X){case 38:_e=ae>0?1:(L+="\f",-1);break;case 44:y[le++]=(et(L)-1)*_e,_e=1;break;case 64:At()===45&&(L+=sa(rt())),me=At(),ae=q=et(je=L+=Xf(Yi())),Pe++;break;case 45:he===45&&et(L)==2&&(X=0)}}return k}function Bu(s,d,c,p,x,k,h,y,S,le,ae,q){for(var me=x-1,Te=x===0?k:[""],he=np(Te),X=0,ce=0,_e=0;X<p;++X)for(var Pe=0,je=on(s,me+1,me=rp(ce=h[X])),I=s;Pe<he;++Pe)(I=tp(ce>0?Te[Pe]+" "+je:ye(je,/&\f/g,Te[Pe])))&&(S[_e++]=I);return ns(s,d,c,x===0?rs:y,S,le,ae,q)}function Jf(s,d,c,p){return ns(s,d,c,Ju,ba(Gf()),on(s,2,-2),0,p)}function Ru(s,d,c,p,x){return ns(s,d,c,ja,on(s,0,p),on(s,p+1,-1),p,x)}function ip(s,d,c){switch(Ff(s,d)){case 5103:return Ie+"print-"+s+s;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:case 6391:case 5879:case 5623:case 6135:case 4599:return Ie+s+s;case 4855:return Ie+s.replace("add","source-over").replace("substract","source-out").replace("intersect","source-in").replace("exclude","xor")+s;case 4789:return zo+s+s;case 5349:case 4246:case 4810:case 6968:case 2756:return Ie+s+zo+s+Oe+s+s;case 5936:switch(or(s,d+11)){case 114:return Ie+s+Oe+ye(s,/[svh]\w+-[tblr]{2}/,"tb")+s;case 108:return Ie+s+Oe+ye(s,/[svh]\w+-[tblr]{2}/,"tb-rl")+s;case 45:return Ie+s+Oe+ye(s,/[svh]\w+-[tblr]{2}/,"lr")+s}case 6828:case 4268:case 2903:return Ie+s+Oe+s+s;case 6165:return Ie+s+Oe+"flex-"+s+s;case 5187:return Ie+s+ye(s,/(\w+).+(:[^]+)/,Ie+"box-$1$2"+Oe+"flex-$1$2")+s;case 5443:return Ie+s+Oe+"flex-item-"+ye(s,/flex-|-self/g,"")+(xt(s,/flex-|baseline/)?"":Oe+"grid-row-"+ye(s,/flex-|-self/g,""))+s;case 4675:return Ie+s+Oe+"flex-line-pack"+ye(s,/align-content|flex-|-self/g,"")+s;case 5548:return Ie+s+Oe+ye(s,"shrink","negative")+s;case 5292:return Ie+s+Oe+ye(s,"basis","preferred-size")+s;case 6060:return Ie+"box-"+ye(s,"-grow","")+Ie+s+Oe+ye(s,"grow","positive")+s;case 4554:return Ie+ye(s,/([^-])(transform)/g,"$1"+Ie+"$2")+s;case 6187:return ye(ye(ye(s,/(zoom-|grab)/,Ie+"$1"),/(image-set)/,Ie+"$1"),s,"")+s;case 5495:case 3959:return ye(s,/(image-set\([^]*)/,Ie+"$1$`$1");case 4968:return ye(ye(s,/(.+:)(flex-)?(.*)/,Ie+"box-pack:$3"+Oe+"flex-pack:$3"),/space-between/,"justify")+Ie+s+s;case 4200:if(!xt(s,/flex-|baseline/))return Oe+"grid-column-align"+on(s,d)+s;break;case 2592:case 3360:return Oe+ye(s,"template-","")+s;case 4384:case 3616:return c&&c.some(function(p,x){return d=x,xt(p.props,/grid-\w+-end/)})?~$i(s+(c=c[d].value),"span",0)?s:Oe+ye(s,"-start","")+s+Oe+"grid-row-span:"+(~$i(c,"span",0)?xt(c,/\d+/):+xt(c,/\d+/)-+xt(s,/\d+/))+";":Oe+ye(s,"-start","")+s;case 4896:case 4128:return c&&c.some(function(p){return xt(p.props,/grid-\w+-start/)})?s:Oe+ye(ye(s,"-end","-span"),"span ","")+s;case 4095:case 3583:case 4068:case 2532:return ye(s,/(.+)-inline(.+)/,Ie+"$1$2")+s;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(et(s)-1-d>6)switch(or(s,d+1)){case 109:if(or(s,d+4)!==45)break;case 102:return ye(s,/(.+:)(.+)-([^]+)/,"$1"+Ie+"$2-$3$1"+zo+(or(s,d+3)==108?"$3":"$2-$3"))+s;case 115:return~$i(s,"stretch",0)?ip(ye(s,"stretch","fill-available"),d,c)+s:s}break;case 5152:case 5920:return ye(s,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(p,x,k,h,y,S,le){return Oe+x+":"+k+le+(h?Oe+x+"-span:"+(y?S:+S-+k)+le:"")+s});case 4949:if(or(s,d+6)===121)return ye(s,":",":"+Ie)+s;break;case 6444:switch(or(s,or(s,14)===45?18:11)){case 120:return ye(s,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+Ie+(or(s,14)===45?"inline-":"")+"box$3$1"+Ie+"$2$3$1"+Oe+"$2box$3")+s;case 100:return ye(s,":",":"+Oe)+s}break;case 5719:case 2647:case 2135:case 3927:case 2391:return ye(s,"scroll-","scroll-snap-")+s}return s}function Xi(s,d){for(var c="",p=0;p<s.length;p++)c+=d(s[p],p,s,d)||"";return c}function ex(s,d,c,p){switch(s.type){case Of:if(s.children.length)break;case Mf:case Df:case ja:return s.return=s.return||s.value;case Ju:return"";case ep:return s.return=s.value+"{"+Xi(s.children,p)+"}";case rs:if(!et(s.value=s.props.join(",")))return""}return et(c=Xi(s.children,p))?s.return=s.value+"{"+c+"}":""}function rx(s){var d=np(s);return function(c,p,x,k){for(var h="",y=0;y<d;y++)h+=s[y](c,p,x,k)||"";return h}}function tx(s){return function(d){d.root||(d=d.return)&&s(d)}}function nx(s,d,c,p){if(s.length>-1&&!s.return)switch(s.type){case ja:s.return=ip(s.value,s.length,c);return;case ep:return Xi([Wt(s,{value:ye(s.value,"@","@"+Ie)})],p);case rs:if(s.length)return Uf(c=s.props,function(x){switch(xt(x,p=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":_n(Wt(s,{props:[ye(x,/:(read-\w+)/,":"+zo+"$1")]})),_n(Wt(s,{props:[x]})),pa(s,{props:_u(c,p)});break;case"::placeholder":_n(Wt(s,{props:[ye(x,/:(plac\w+)/,":"+Ie+"input-$1")]})),_n(Wt(s,{props:[ye(x,/:(plac\w+)/,":"+zo+"$1")]})),_n(Wt(s,{props:[ye(x,/:(plac\w+)/,Oe+"input-$1")]})),_n(Wt(s,{props:[x]})),pa(s,{props:_u(c,p)});break}return""})}}var ox={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Rr={},Rn=typeof process!="undefined"&&Rr!==void 0&&(Rr.REACT_APP_SC_ATTR||Rr.SC_ATTR)||"data-styled",sp="active",lp="data-styled-version",is="6.3.10",ka=`/*!sc*/
`,No=typeof window!="undefined"&&typeof document!="undefined",ix=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process!="undefined"&&Rr!==void 0&&Rr.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Rr.REACT_APP_SC_DISABLE_SPEEDY!==""?Rr.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Rr.REACT_APP_SC_DISABLE_SPEEDY:typeof process!="undefined"&&Rr!==void 0&&Rr.SC_DISABLE_SPEEDY!==void 0&&Rr.SC_DISABLE_SPEEDY!==""&&Rr.SC_DISABLE_SPEEDY!=="false"&&Rr.SC_DISABLE_SPEEDY);function _o(s){for(var d=[],c=1;c<arguments.length;c++)d[c-1]=arguments[c];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(s," for more information.").concat(d.length>0?" Args: ".concat(d.join(", ")):""))}var Ki=new Map,Zi=new Map,Qi=1,Po=function(s){if(Ki.has(s))return Ki.get(s);for(;Zi.has(Qi);)Qi++;var d=Qi++;return Ki.set(s,d),Zi.set(d,s),d},sx=function(s,d){Qi=d+1,Ki.set(s,d),Zi.set(d,s)},wa=Object.freeze([]),Hn=Object.freeze({});function lx(s,d,c){return c===void 0&&(c=Hn),s.theme!==c.theme&&s.theme||d||c.theme}var ap=new Set(["a","abbr","address","area","article","aside","audio","b","bdi","bdo","blockquote","body","button","br","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","label","legend","li","main","map","mark","menu","meter","nav","object","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","slot","small","span","strong","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","switch","symbol","text","textPath","tspan","use"]),ax=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,cx=/(^-|-$)/g;function Hu(s){return s.replace(ax,"-").replace(cx,"")}var dx=/(a)(d)/gi,Wu=function(s){return String.fromCharCode(s+(s>25?39:97))};function fa(s){var d,c="";for(d=Math.abs(s);d>52;d=d/52|0)c=Wu(d%52)+c;return(Wu(d%52)+c).replace(dx,"$1-$2")}var la,en=function(s,d){for(var c=d.length;c;)s=33*s^d.charCodeAt(--c);return s},cp=function(s){return en(5381,s)};function ux(s){return fa(cp(s)>>>0)}function px(s){return s.displayName||s.name||"Component"}function aa(s){return typeof s=="string"&&!0}var dp=typeof Symbol=="function"&&Symbol.for,up=dp?Symbol.for("react.memo"):60115,hx=dp?Symbol.for("react.forward_ref"):60112,fx={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},xx={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},pp={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},mx=((la={})[hx]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},la[up]=pp,la);function Au(s){return("type"in(d=s)&&d.type.$$typeof)===up?pp:"$$typeof"in s?mx[s.$$typeof]:fx;var d}var gx=Object.defineProperty,vx=Object.getOwnPropertyNames,Mu=Object.getOwnPropertySymbols,yx=Object.getOwnPropertyDescriptor,jx=Object.getPrototypeOf,Du=Object.prototype;function hp(s,d,c){if(typeof d!="string"){if(Du){var p=jx(d);p&&p!==Du&&hp(s,p,c)}var x=vx(d);Mu&&(x=x.concat(Mu(d)));for(var k=Au(s),h=Au(d),y=0;y<x.length;++y){var S=x[y];if(!(S in xx||c&&c[S]||h&&S in h||k&&S in k)){var le=yx(d,S);try{gx(s,S,le)}catch{}}}}return s}function Wn(s){return typeof s=="function"}function Sa(s){return typeof s=="object"&&"styledComponentId"in s}function tn(s,d){return s&&d?"".concat(s," ").concat(d):s||d||""}function Ou(s,d){return s.join("")}function Io(s){return s!==null&&typeof s=="object"&&s.constructor.name===Object.name&&!("props"in s&&s.$$typeof)}function xa(s,d,c){if(c===void 0&&(c=!1),!c&&!Io(s)&&!Array.isArray(s))return d;if(Array.isArray(d))for(var p=0;p<d.length;p++)s[p]=xa(s[p],d[p]);else if(Io(d))for(var p in d)s[p]=xa(s[p],d[p]);return s}function Ca(s,d){Object.defineProperty(s,"toString",{value:d})}var bx=(function(){function s(d){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=d,this._cGroup=0,this._cIndex=0}return s.prototype.indexOfGroup=function(d){if(d===this._cGroup)return this._cIndex;var c=this._cIndex;if(d>this._cGroup)for(var p=this._cGroup;p<d;p++)c+=this.groupSizes[p];else for(p=this._cGroup-1;p>=d;p--)c-=this.groupSizes[p];return this._cGroup=d,this._cIndex=c,c},s.prototype.insertRules=function(d,c){if(d>=this.groupSizes.length){for(var p=this.groupSizes,x=p.length,k=x;d>=k;)if((k<<=1)<0)throw _o(16,"".concat(d));this.groupSizes=new Uint32Array(k),this.groupSizes.set(p),this.length=k;for(var h=x;h<k;h++)this.groupSizes[h]=0}for(var y=this.indexOfGroup(d+1),S=0,le=(h=0,c.length);h<le;h++)this.tag.insertRule(y,c[h])&&(this.groupSizes[d]++,y++,S++);S>0&&this._cGroup>d&&(this._cIndex+=S)},s.prototype.clearGroup=function(d){if(d<this.length){var c=this.groupSizes[d],p=this.indexOfGroup(d),x=p+c;this.groupSizes[d]=0;for(var k=p;k<x;k++)this.tag.deleteRule(p);c>0&&this._cGroup>d&&(this._cIndex-=c)}},s.prototype.getGroup=function(d){var c="";if(d>=this.length||this.groupSizes[d]===0)return c;for(var p=this.groupSizes[d],x=this.indexOfGroup(d),k=x+p,h=x;h<k;h++)c+=this.tag.getRule(h)+ka;return c},s})(),kx="style[".concat(Rn,"][").concat(lp,'="').concat(is,'"]'),wx=new RegExp("^".concat(Rn,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Fu=function(s){return typeof ShadowRoot!="undefined"&&s instanceof ShadowRoot||"host"in s&&s.nodeType===11},ma=function(s){if(!s)return document;if(Fu(s))return s;if("getRootNode"in s){var d=s.getRootNode();if(Fu(d))return d}return document},Sx=function(s,d,c){for(var p,x=c.split(","),k=0,h=x.length;k<h;k++)(p=x[k])&&s.registerName(d,p)},Cx=function(s,d){for(var c,p=((c=d.textContent)!==null&&c!==void 0?c:"").split(ka),x=[],k=0,h=p.length;k<h;k++){var y=p[k].trim();if(y){var S=y.match(wx);if(S){var le=0|parseInt(S[1],10),ae=S[2];le!==0&&(sx(ae,le),Sx(s,ae,S[3]),s.getTag().insertRules(le,x)),x.length=0}else x.push(y)}}},ca=function(s){for(var d=ma(s.options.target).querySelectorAll(kx),c=0,p=d.length;c<p;c++){var x=d[c];x&&x.getAttribute(Rn)!==sp&&(Cx(s,x),x.parentNode&&x.parentNode.removeChild(x))}};function Tx(){return typeof __webpack_nonce__!="undefined"?__webpack_nonce__:null}var fp=function(s){var d=document.head,c=s||d,p=document.createElement("style"),x=(function(y){var S=Array.from(y.querySelectorAll("style[".concat(Rn,"]")));return S[S.length-1]})(c),k=x!==void 0?x.nextSibling:null;p.setAttribute(Rn,sp),p.setAttribute(lp,is);var h=Tx();return h&&p.setAttribute("nonce",h),c.insertBefore(p,k),p},Ex=(function(){function s(d){this.element=fp(d),this.element.appendChild(document.createTextNode("")),this.sheet=(function(c){var p;if(c.sheet)return c.sheet;for(var x=(p=c.getRootNode().styleSheets)!==null&&p!==void 0?p:document.styleSheets,k=0,h=x.length;k<h;k++){var y=x[k];if(y.ownerNode===c)return y}throw _o(17)})(this.element),this.length=0}return s.prototype.insertRule=function(d,c){try{return this.sheet.insertRule(c,d),this.length++,!0}catch{return!1}},s.prototype.deleteRule=function(d){this.sheet.deleteRule(d),this.length--},s.prototype.getRule=function(d){var c=this.sheet.cssRules[d];return c&&c.cssText?c.cssText:""},s})(),Px=(function(){function s(d){this.element=fp(d),this.nodes=this.element.childNodes,this.length=0}return s.prototype.insertRule=function(d,c){if(d<=this.length&&d>=0){var p=document.createTextNode(c);return this.element.insertBefore(p,this.nodes[d]||null),this.length++,!0}return!1},s.prototype.deleteRule=function(d){this.element.removeChild(this.nodes[d]),this.length--},s.prototype.getRule=function(d){return d<this.length?this.nodes[d].textContent:""},s})(),zx=(function(){function s(d){this.rules=[],this.length=0}return s.prototype.insertRule=function(d,c){return d<=this.length&&(d===this.length?this.rules.push(c):this.rules.splice(d,0,c),this.length++,!0)},s.prototype.deleteRule=function(d){this.rules.splice(d,1),this.length--},s.prototype.getRule=function(d){return d<this.length?this.rules[d]:""},s})(),Uu=No,Nx={isServer:!No,useCSSOMInjection:!ix},xp=(function(){function s(d,c,p){d===void 0&&(d=Hn),c===void 0&&(c={});var x=this;this.options=zr(zr({},Nx),d),this.gs=c,this.names=new Map(p),this.server=!!d.isServer,!this.server&&No&&Uu&&(Uu=!1,ca(this)),Ca(this,function(){return(function(k){for(var h=k.getTag(),y=h.length,S="",le=function(q){var me=(function(_e){return Zi.get(_e)})(q);if(me===void 0)return"continue";var Te=k.names.get(me);if(Te===void 0||!Te.size)return"continue";var he=h.getGroup(q);if(he.length===0)return"continue";var X=Rn+".g"+q+'[id="'+me+'"]',ce="";Te.forEach(function(_e){_e.length>0&&(ce+=_e+",")}),S+=he+X+'{content:"'+ce+'"}'+ka},ae=0;ae<y;ae++)le(ae);return S})(x)})}return s.registerId=function(d){return Po(d)},s.prototype.rehydrate=function(){!this.server&&No&&ca(this)},s.prototype.reconstructWithOptions=function(d,c){c===void 0&&(c=!0);var p=new s(zr(zr({},this.options),d),this.gs,c&&this.names||void 0);return!this.server&&No&&d.target!==this.options.target&&ma(this.options.target)!==ma(d.target)&&ca(p),p},s.prototype.allocateGSInstance=function(d){return this.gs[d]=(this.gs[d]||0)+1},s.prototype.getTag=function(){return this.tag||(this.tag=(d=(function(c){var p=c.useCSSOMInjection,x=c.target;return c.isServer?new zx(x):p?new Ex(x):new Px(x)})(this.options),new bx(d)));var d},s.prototype.hasNameForId=function(d,c){var p,x;return(x=(p=this.names.get(d))===null||p===void 0?void 0:p.has(c))!==null&&x!==void 0&&x},s.prototype.registerName=function(d,c){Po(d);var p=this.names.get(d);p?p.add(c):this.names.set(d,new Set([c]))},s.prototype.insertRules=function(d,c,p){this.registerName(d,c),this.getTag().insertRules(Po(d),p)},s.prototype.clearNames=function(d){this.names.has(d)&&this.names.get(d).clear()},s.prototype.clearRules=function(d){this.getTag().clearGroup(Po(d)),this.clearNames(d)},s.prototype.clearTag=function(){this.tag=void 0},s})(),Lx=/&/g,mt=47,rn=42;function Gu(s){if(s.indexOf("}")===-1)return!1;for(var d=s.length,c=0,p=0,x=!1,k=0;k<d;k++){var h=s.charCodeAt(k);if(p!==0||x||h!==mt||s.charCodeAt(k+1)!==rn)if(x)h===rn&&s.charCodeAt(k+1)===mt&&(x=!1,k++);else if(h!==34&&h!==39||k!==0&&s.charCodeAt(k-1)===92){if(p===0){if(h===123)c++;else if(h===125&&--c<0)return!0}}else p===0?p=h:p===h&&(p=0);else x=!0,k++}return c!==0||p!==0}function mp(s,d){return s.map(function(c){return c.type==="rule"&&(c.value="".concat(d," ").concat(c.value),c.value=c.value.replaceAll(",",",".concat(d," ")),c.props=c.props.map(function(p){return"".concat(d," ").concat(p)})),Array.isArray(c.children)&&c.type!=="@keyframes"&&(c.children=mp(c.children,d)),c})}function Ix(s){var d,c,p,x=Hn,k=x.options,h=k===void 0?Hn:k,y=x.plugins,S=y===void 0?wa:y,le=function(he,X,ce){return ce.startsWith(c)&&ce.endsWith(c)&&ce.replaceAll(c,"").length>0?".".concat(d):he},ae=S.slice();ae.push(function(he){he.type===rs&&he.value.includes("&")&&(p||(p=new RegExp("\\".concat(c,"\\b"),"g")),he.props[0]=he.props[0].replace(Lx,c).replace(p,le))}),h.prefix&&ae.push(nx),ae.push(ex);var q=[],me=rx(ae.concat(tx(function(he){return q.push(he)}))),Te=function(he,X,ce,_e){X===void 0&&(X=""),ce===void 0&&(ce=""),_e===void 0&&(_e="&"),d=_e,c=X,p=void 0;var Pe=(function(I){if(!Gu(I))return I;for(var fe=I.length,Z="",L=0,G=0,He=0,qe=!1,Se=0;Se<fe;Se++){var Ve=I.charCodeAt(Se);if(He!==0||qe||Ve!==mt||I.charCodeAt(Se+1)!==rn)if(qe)Ve===rn&&I.charCodeAt(Se+1)===mt&&(qe=!1,Se++);else if(Ve!==34&&Ve!==39||Se!==0&&I.charCodeAt(Se-1)===92){if(He===0)if(Ve===123)G++;else if(Ve===125){if(--G<0){for(var Fe=Se+1;Fe<fe;){var hr=I.charCodeAt(Fe);if(hr===59||hr===10)break;Fe++}Fe<fe&&I.charCodeAt(Fe)===59&&Fe++,G=0,Se=Fe-1,L=Fe;continue}G===0&&(Z+=I.substring(L,Se+1),L=Se+1)}else Ve===59&&G===0&&(Z+=I.substring(L,Se+1),L=Se+1)}else He===0?He=Ve:He===Ve&&(He=0);else qe=!0,Se++}if(L<fe){var jr=I.substring(L);Gu(jr)||(Z+=jr)}return Z})((function(I){if(I.indexOf("//")===-1)return I;for(var fe=I.length,Z=[],L=0,G=0,He=0,qe=0;G<fe;){var Se=I.charCodeAt(G);if(Se!==34&&Se!==39||G!==0&&I.charCodeAt(G-1)===92)if(He===0)if(Se===mt&&G+1<fe&&I.charCodeAt(G+1)===rn){for(G+=2;G+1<fe&&(I.charCodeAt(G)!==rn||I.charCodeAt(G+1)!==mt);)G++;G+=2}else if(Se===40&&G>=3&&(32|I.charCodeAt(G-1))==108&&(32|I.charCodeAt(G-2))==114&&(32|I.charCodeAt(G-3))==117)qe=1,G++;else if(qe>0)Se===41?qe--:Se===40&&qe++,G++;else if(Se===rn&&G+1<fe&&I.charCodeAt(G+1)===mt)G>L&&Z.push(I.substring(L,G)),L=G+=2;else if(Se===mt&&G+1<fe&&I.charCodeAt(G+1)===mt){for(G>L&&Z.push(I.substring(L,G));G<fe&&I.charCodeAt(G)!==10;)G++;L=G}else G++;else G++;else He===0?He=Se:He===Se&&(He=0),G++}return L===0?I:(L<fe&&Z.push(I.substring(L)),Z.join(""))})(he)),je=Zf(ce||X?"".concat(ce," ").concat(X," { ").concat(Pe," }"):Pe);return h.namespace&&(je=mp(je,h.namespace)),q=[],Xi(je,me),q};return Te.hash=S.length?S.reduce(function(he,X){return X.name||_o(15),en(he,X.name)},5381).toString():"",Te}var _x=new xp,ga=Ix(),gp=Hr.createContext({shouldForwardProp:void 0,styleSheet:_x,stylis:ga});gp.Consumer;Hr.createContext(void 0);function $u(){return Hr.useContext(gp)}var Bx=(function(){function s(d,c){var p=this;this.inject=function(x,k){k===void 0&&(k=ga);var h=p.name+k.hash;x.hasNameForId(p.id,h)||x.insertRules(p.id,h,k(p.rules,h,"@keyframes"))},this.name=d,this.id="sc-keyframes-".concat(d),this.rules=c,Ca(this,function(){throw _o(12,String(p.name))})}return s.prototype.getName=function(d){return d===void 0&&(d=ga),this.name+d.hash},s})();function Rx(s,d){return d==null||typeof d=="boolean"||d===""?"":typeof d!="number"||d===0||s in ox||s.startsWith("--")?String(d).trim():"".concat(d,"px")}var Hx=function(s){return s>="A"&&s<="Z"};function Yu(s){for(var d="",c=0;c<s.length;c++){var p=s[c];if(c===1&&p==="-"&&s[0]==="-")return s;Hx(p)?d+="-"+p.toLowerCase():d+=p}return d.startsWith("ms-")?"-"+d:d}var vp=function(s){return s==null||s===!1||s===""},yp=function(s){var d=[];for(var c in s){var p=s[c];s.hasOwnProperty(c)&&!vp(p)&&(Array.isArray(p)&&p.isCss||Wn(p)?d.push("".concat(Yu(c),":"),p,";"):Io(p)?d.push.apply(d,qi(qi(["".concat(c," {")],yp(p),!1),["}"],!1)):d.push("".concat(Yu(c),": ").concat(Rx(c,p),";")))}return d};function nn(s,d,c,p,x){if(x===void 0&&(x=[]),typeof s=="string")return s&&x.push(s),x;if(vp(s))return x;if(Sa(s))return x.push(".".concat(s.styledComponentId)),x;if(Wn(s)){if(!Wn(h=s)||h.prototype&&h.prototype.isReactComponent||!d)return x.push(s),x;var k=s(d);return nn(k,d,c,p,x)}var h;if(s instanceof Bx)return c?(s.inject(c,p),x.push(s.getName(p))):x.push(s),x;if(Io(s)){for(var y=yp(s),S=0;S<y.length;S++)x.push(y[S]);return x}if(!Array.isArray(s))return x.push(s.toString()),x;for(S=0;S<s.length;S++)nn(s[S],d,c,p,x);return x}function Wx(s){for(var d=0;d<s.length;d+=1){var c=s[d];if(Wn(c)&&!Sa(c))return!1}return!0}var Ax=cp(is),Mx=(function(){function s(d,c,p){this.rules=d,this.staticRulesId="",this.isStatic=(p===void 0||p.isStatic)&&Wx(d),this.componentId=c,this.baseHash=en(Ax,c),this.baseStyle=p,xp.registerId(c)}return s.prototype.generateAndInjectStyles=function(d,c,p){var x=this.baseStyle?this.baseStyle.generateAndInjectStyles(d,c,p).className:"";if(this.isStatic&&!p.hash)if(this.staticRulesId&&c.hasNameForId(this.componentId,this.staticRulesId))x=tn(x,this.staticRulesId);else{var k=Ou(nn(this.rules,d,c,p)),h=fa(en(this.baseHash,k)>>>0);if(!c.hasNameForId(this.componentId,h)){var y=p(k,".".concat(h),void 0,this.componentId);c.insertRules(this.componentId,h,y)}x=tn(x,h),this.staticRulesId=h}else{for(var S=en(this.baseHash,p.hash),le="",ae=0;ae<this.rules.length;ae++){var q=this.rules[ae];if(typeof q=="string")le+=q;else if(q){var me=Ou(nn(q,d,c,p));S=en(en(S,String(ae)),me),le+=me}}if(le){var Te=fa(S>>>0);if(!c.hasNameForId(this.componentId,Te)){var he=p(le,".".concat(Te),void 0,this.componentId);c.insertRules(this.componentId,Te,he)}x=tn(x,Te)}}return{className:x,css:typeof window=="undefined"?c.getTag().getGroup(Po(this.componentId)):""}},s})(),jp=Hr.createContext(void 0);jp.Consumer;var da={};function Dx(s,d,c){var p=Sa(s),x=s,k=!aa(s),h=d.attrs,y=h===void 0?wa:h,S=d.componentId,le=S===void 0?(function(I,fe){var Z=typeof I!="string"?"sc":Hu(I);da[Z]=(da[Z]||0)+1;var L="".concat(Z,"-").concat(ux(is+Z+da[Z]));return fe?"".concat(fe,"-").concat(L):L})(d.displayName,d.parentComponentId):S,ae=d.displayName,q=ae===void 0?(function(I){return aa(I)?"styled.".concat(I):"Styled(".concat(px(I),")")})(s):ae,me=d.displayName&&d.componentId?"".concat(Hu(d.displayName),"-").concat(d.componentId):d.componentId||le,Te=p&&x.attrs?x.attrs.concat(y).filter(Boolean):y,he=d.shouldForwardProp;if(p&&x.shouldForwardProp){var X=x.shouldForwardProp;if(d.shouldForwardProp){var ce=d.shouldForwardProp;he=function(I,fe){return X(I,fe)&&ce(I,fe)}}else he=X}var _e=new Mx(c,me,p?x.componentStyle:void 0);function Pe(I,fe){return(function(Z,L,G){var He=Z.attrs,qe=Z.componentStyle,Se=Z.defaultProps,Ve=Z.foldedComponentIds,Fe=Z.styledComponentId,hr=Z.target,jr=Hr.useContext(jp),fr=$u(),We=Z.shouldForwardProp||fr.shouldForwardProp,N=lx(L,jr,Se)||Hn,V=(function(ke,ze,Ee){for(var Be,Ge=zr(zr({},ze),{className:void 0,theme:Ee}),gt=0;gt<ke.length;gt+=1){var Dt=Wn(Be=ke[gt])?Be(Ge):Be;for(var Yr in Dt)Yr==="className"?Ge.className=tn(Ge.className,Dt[Yr]):Yr==="style"?Ge.style=zr(zr({},Ge.style),Dt[Yr]):Ge[Yr]=Dt[Yr]}return"className"in ze&&typeof ze.className=="string"&&(Ge.className=tn(Ge.className,ze.className)),Ge})(He,L,N),_=V.as||hr,v={};for(var C in V)V[C]===void 0||C[0]==="$"||C==="as"||C==="theme"&&V.theme===N||(C==="forwardedAs"?v.as=V.forwardedAs:We&&!We(C,_)||(v[C]=V[C]));var ge=(function(ke,ze){var Ee=$u(),Be=ke.generateAndInjectStyles(ze,Ee.styleSheet,Ee.stylis);return Be})(qe,V),ve=ge.className,Ce=tn(Ve,Fe);return ve&&(Ce+=" "+ve),V.className&&(Ce+=" "+V.className),v[aa(_)&&!ap.has(_)?"class":"className"]=Ce,G&&(v.ref=G),Y.createElement(_,v)})(je,I,fe)}Pe.displayName=q;var je=Hr.forwardRef(Pe);return je.attrs=Te,je.componentStyle=_e,je.displayName=q,je.shouldForwardProp=he,je.foldedComponentIds=p?tn(x.foldedComponentIds,x.styledComponentId):"",je.styledComponentId=me,je.target=p?x.target:s,Object.defineProperty(je,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(I){this._foldedDefaultProps=p?(function(fe){for(var Z=[],L=1;L<arguments.length;L++)Z[L-1]=arguments[L];for(var G=0,He=Z;G<He.length;G++)xa(fe,He[G],!0);return fe})({},x.defaultProps,I):I}}),Ca(je,function(){return".".concat(je.styledComponentId)}),k&&hp(je,s,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),je}function Vu(s,d){for(var c=[s[0]],p=0,x=d.length;p<x;p+=1)c.push(d[p],s[p+1]);return c}var Ku=function(s){return Object.assign(s,{isCss:!0})};function Ox(s){for(var d=[],c=1;c<arguments.length;c++)d[c-1]=arguments[c];if(Wn(s)||Io(s))return Ku(nn(Vu(wa,qi([s],d,!0))));var p=s;return d.length===0&&p.length===1&&typeof p[0]=="string"?nn(p):Ku(nn(Vu(p,d)))}function va(s,d,c){if(c===void 0&&(c=Hn),!d)throw _o(1,d);var p=function(x){for(var k=[],h=1;h<arguments.length;h++)k[h-1]=arguments[h];return s(d,c,Ox.apply(void 0,qi([x],k,!1)))};return p.attrs=function(x){return va(s,d,zr(zr({},c),{attrs:Array.prototype.concat(c.attrs,x).filter(Boolean)}))},p.withConfig=function(x){return va(s,d,zr(zr({},c),x))},p}var bp=function(s){return va(Dx,s)},a=bp;ap.forEach(function(s){a[s]=bp(s)});const ua={Wrapper:a.div`
        height: 100vh;
        overflow: hidden;
        display: flex;
        flex-direction: column;
    `,Header:a.header`
        height: 60px;
        flex-shrink: 0;
    `,Main:a.main`
        flex: 1;
        overflow-y: auto;
        position: relative;

        .contentWrapper {
            min-height: 100%;
            max-width: 1440px;
            margin: auto;
            display: flex;
            flex-direction: column;
            padding: 15px;

            .category {
                margin: 30px 0 15px 0;
            }
        }

        .footerWrapper {
            flex-shrink: 0;
        }

        /* Topic wrappers - used for same-page scroll targeting */
        .topicWrapper {
            scroll-margin-top: 84px;
        }

        /* Optional - tiny spacing consistency */
        .topicWrapper + .topicWrapper {
            margin-top: 6px;
        }

        /* Pulse highlight when About scrolls here */
        .topicWrapper.a2rpFocusPulse {
            animation: a2rpFocusPulse 900ms ease;
        }

        @keyframes a2rpFocusPulse {
            0% {
                box-shadow: 0 0 0 0px
                    color-mix(in srgb, var(--color-primary) 28%, transparent);
                border-radius: 18px;
            }
            50% {
                box-shadow: 0 0 0 8px
                    color-mix(in srgb, var(--color-primary) 18%, transparent);
                border-radius: 18px;
            }
            100% {
                box-shadow: 0 0 0 0px
                    color-mix(in srgb, var(--color-primary) 0%, transparent);
                border-radius: 18px;
            }
        }
    `},Qu={Wrapper:a.header`
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0 16px;

        border-bottom: 1px solid var(--color-border);

        background: color-mix(
            in srgb,
            var(--color-bg) 92%,
            var(--color-surface)
        );

        position: sticky;
        top: 0;
        z-index: 50;
        height: 64px;

        box-shadow: 0 10px 28px var(--color-shadow);
        overflow: hidden;

        /* Database vibe - calm query glow + index lines */
        &::before {
            content: "";
            position: absolute;
            inset: 0;
            pointer-events: none;

            background-image:
                radial-gradient(
                    760px 220px at 16% 0%,
                    color-mix(in srgb, var(--color-primary) 12%, transparent),
                    transparent 66%
                ),
                radial-gradient(
                    620px 200px at 86% 10%,
                    color-mix(in srgb, var(--color-accent) 10%, transparent),
                    transparent 70%
                ),
                repeating-linear-gradient(
                    90deg,
                    color-mix(in srgb, var(--color-border) 18%, transparent) 0px,
                    color-mix(in srgb, var(--color-border) 18%, transparent) 1px,
                    transparent 1px,
                    transparent 30px
                );

            opacity: 0.62;

            mask-image: linear-gradient(
                180deg,
                rgba(0, 0, 0, 0.9),
                rgba(0, 0, 0, 0)
            );
        }

        &::after {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 2px;
            pointer-events: none;
            background: linear-gradient(
                90deg,
                transparent,
                var(--color-primary),
                color-mix(
                    in srgb,
                    var(--color-primary) 55%,
                    var(--color-accent)
                ),
                transparent
            );
            opacity: 0.92;
        }
    `,Main:a.div`
        width: 100%;
        max-width: 1440px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 14px;
        position: relative;
        z-index: 1;

        .leftSide {
            display: flex;
            align-items: center;
            gap: 12px;
            min-width: 0;
        }

        .logoNameWrapper {
            display: flex;
            align-items: center;
            gap: 12px;
            min-width: 0;
        }

        .logoWrapper {
            height: 50px;
            width: 50px;
            border-radius: 14px;
            position: relative;
            overflow: hidden;
            flex: 0 0 auto;
            padding: 6px;

            background: linear-gradient(
                180deg,
                var(--color-surface),
                var(--color-surface-2)
            );
            border: 1px solid var(--color-border);

            box-shadow:
                0 0 0 1px
                    color-mix(in srgb, var(--color-primary) 10%, transparent),
                0 12px 24px var(--color-shadow);

            img {
                height: 100%;
                width: 100%;
                object-fit: contain;
                display: block;
                transition: opacity 180ms ease;
                filter: saturate(1.06) contrast(1.03);
            }

            .logoSkeleton {
                position: absolute;
                inset: 0;
                background:
                    radial-gradient(
                        120px 90px at 20% 20%,
                        color-mix(
                            in srgb,
                            var(--color-primary) 18%,
                            transparent
                        ),
                        transparent 62%
                    ),
                    radial-gradient(
                        120px 90px at 85% 80%,
                        color-mix(
                            in srgb,
                            var(--color-accent) 14%,
                            transparent
                        ),
                        transparent 62%
                    ),
                    var(--color-surface-2);
                opacity: 0.85;
            }
        }

        .nameWrapper {
            display: flex;
            flex-direction: column;
            gap: 2px;
            min-width: 0;

            .title {
                color: var(--color-text-primary);
                font-weight: 900;
                letter-spacing: 0.2px;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }

            .subTitle {
                color: var(--color-text-muted);
                font-size: 12px;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }

            @media (width < 560px) {
                .subTitle {
                    display: none;
                }
            }

            @media (width < 420px) {
                display: none;
            }
        }

        .pillRow {
            display: flex;
            align-items: center;
            gap: 8px;

            @media (width < 760px) {
                display: none;
            }
        }

        .stat {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            padding: 7px 10px;
            border-radius: 999px;

            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 82%,
                transparent
            );

            color: var(--color-text-secondary);
            font-size: 12.5px;
            font-weight: 800;

            box-shadow: 0 10px 22px var(--color-shadow);

            .sIcon {
                color: color-mix(
                    in srgb,
                    var(--color-primary) 86%,
                    var(--color-text-primary)
                );
                display: inline-flex;
            }

            .sIcon svg {
                width: 14px;
                height: 14px;
            }
        }

        .rightSide {
            display: flex;
            align-items: center;
            gap: 10px;
            flex: 0 0 auto;
        }

        .themeToggleBtn {
            display: inline-flex;
            align-items: center;
            gap: 10px;
            padding: 10px 12px;
            border-radius: 14px;

            background: linear-gradient(
                180deg,
                var(--color-surface),
                var(--color-surface-2)
            );

            border: 1px solid var(--color-border);
            color: var(--color-text-primary);

            box-shadow: 0 10px 22px var(--color-shadow);

            .icon {
                font-size: 18px;
                color: color-mix(
                    in srgb,
                    var(--color-primary) 86%,
                    var(--color-text-primary)
                );
                display: inline-flex;
                align-items: center;
                justify-content: center;
            }

            .label {
                font-size: 13px;
                font-weight: 800;
                color: var(--color-text-secondary);
            }

            &:hover {
                border-color: var(--color-border-light);
            }

            &:active {
                transform: translateY(1px);
            }

            &:focus-visible {
                outline: 2px solid var(--color-primary);
                outline-offset: 3px;
                box-shadow:
                    0 0 0 4px
                        color-mix(
                            in srgb,
                            var(--color-primary) 18%,
                            transparent
                        ),
                    0 10px 22px var(--color-shadow);
            }

            @media (width < 420px) {
                .label {
                    display: none;
                }
            }
        }
    `},Fx="/devops-and-cloud-core-notes/images/transparentLogo.png";var kp={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},qu=Hr.createContext&&Hr.createContext(kp),Ux=["attr","size","title"];function Gx(s,d){if(s==null)return{};var c=$x(s,d),p,x;if(Object.getOwnPropertySymbols){var k=Object.getOwnPropertySymbols(s);for(x=0;x<k.length;x++)p=k[x],!(d.indexOf(p)>=0)&&Object.prototype.propertyIsEnumerable.call(s,p)&&(c[p]=s[p])}return c}function $x(s,d){if(s==null)return{};var c={};for(var p in s)if(Object.prototype.hasOwnProperty.call(s,p)){if(d.indexOf(p)>=0)continue;c[p]=s[p]}return c}function Ji(){return Ji=Object.assign?Object.assign.bind():function(s){for(var d=1;d<arguments.length;d++){var c=arguments[d];for(var p in c)Object.prototype.hasOwnProperty.call(c,p)&&(s[p]=c[p])}return s},Ji.apply(this,arguments)}function Xu(s,d){var c=Object.keys(s);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(s);d&&(p=p.filter(function(x){return Object.getOwnPropertyDescriptor(s,x).enumerable})),c.push.apply(c,p)}return c}function es(s){for(var d=1;d<arguments.length;d++){var c=arguments[d]!=null?arguments[d]:{};d%2?Xu(Object(c),!0).forEach(function(p){Yx(s,p,c[p])}):Object.getOwnPropertyDescriptors?Object.defineProperties(s,Object.getOwnPropertyDescriptors(c)):Xu(Object(c)).forEach(function(p){Object.defineProperty(s,p,Object.getOwnPropertyDescriptor(c,p))})}return s}function Yx(s,d,c){return d=Vx(d),d in s?Object.defineProperty(s,d,{value:c,enumerable:!0,configurable:!0,writable:!0}):s[d]=c,s}function Vx(s){var d=Kx(s,"string");return typeof d=="symbol"?d:d+""}function Kx(s,d){if(typeof s!="object"||!s)return s;var c=s[Symbol.toPrimitive];if(c!==void 0){var p=c.call(s,d);if(typeof p!="object")return p;throw new TypeError("@@toPrimitive must return a primitive value.")}return(d==="string"?String:Number)(s)}function wp(s){return s&&s.map((d,c)=>Hr.createElement(d.tag,es({key:c},d.attr),wp(d.child)))}function ue(s){return d=>Hr.createElement(Qx,Ji({attr:es({},s.attr)},d),wp(s.child))}function Qx(s){var d=c=>{var{attr:p,size:x,title:k}=s,h=Gx(s,Ux),y=x||c.size||"1em",S;return c.className&&(S=c.className),s.className&&(S=(S?S+" ":"")+s.className),Hr.createElement("svg",Ji({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},c.attr,p,h,{className:S,style:es(es({color:s.color||c.color},c.style),s.style),height:y,width:y,xmlns:"http://www.w3.org/2000/svg"}),k&&Hr.createElement("title",null,k),s.children)};return qu!==void 0?Hr.createElement(qu.Consumer,null,c=>d(c)):d(kp)}function sn(s){return ue({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"22 12 18 12 15 21 9 3 6 12 2 12"},child:[]}]})(s)}function Qe(s){return ue({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"},child:[]},{tag:"line",attr:{x1:"12",y1:"9",x2:"12",y2:"13"},child:[]},{tag:"line",attr:{x1:"12",y1:"17",x2:"12.01",y2:"17"},child:[]}]})(s)}function qx(s){return ue({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"12",y1:"19",x2:"12",y2:"5"},child:[]},{tag:"polyline",attr:{points:"5 12 12 5 19 12"},child:[]}]})(s)}function Xx(s){return ue({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"},child:[]},{tag:"path",attr:{d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"},child:[]}]})(s)}function ss(s){return ue({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"},child:[]},{tag:"polyline",attr:{points:"3.27 6.96 12 12.01 20.73 6.96"},child:[]},{tag:"line",attr:{x1:"12",y1:"22.08",x2:"12",y2:"12"},child:[]}]})(s)}function we(s){return ue({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14"},child:[]},{tag:"polyline",attr:{points:"22 4 12 14.01 9 11.01"},child:[]}]})(s)}function ur(s){return ue({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"6 9 12 15 18 9"},child:[]}]})(s)}function pr(s){return ue({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"18 15 12 9 6 15"},child:[]}]})(s)}function ls(s){return ue({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"polyline",attr:{points:"12 6 12 12 16 14"},child:[]}]})(s)}function Sp(s){return ue({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"},child:[]}]})(s)}function dr(s){return ue({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"9",y:"9",width:"13",height:"13",rx:"2",ry:"2"},child:[]},{tag:"path",attr:{d:"M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"},child:[]}]})(s)}function Zx(s){return ue({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"15 14 20 9 15 4"},child:[]},{tag:"path",attr:{d:"M4 20v-7a4 4 0 0 1 4-4h12"},child:[]}]})(s)}function Ta(s){return ue({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"4",y:"4",width:"16",height:"16",rx:"2",ry:"2"},child:[]},{tag:"rect",attr:{x:"9",y:"9",width:"6",height:"6"},child:[]},{tag:"line",attr:{x1:"9",y1:"1",x2:"9",y2:"4"},child:[]},{tag:"line",attr:{x1:"15",y1:"1",x2:"15",y2:"4"},child:[]},{tag:"line",attr:{x1:"9",y1:"20",x2:"9",y2:"23"},child:[]},{tag:"line",attr:{x1:"15",y1:"20",x2:"15",y2:"23"},child:[]},{tag:"line",attr:{x1:"20",y1:"9",x2:"23",y2:"9"},child:[]},{tag:"line",attr:{x1:"20",y1:"14",x2:"23",y2:"14"},child:[]},{tag:"line",attr:{x1:"1",y1:"9",x2:"4",y2:"9"},child:[]},{tag:"line",attr:{x1:"1",y1:"14",x2:"4",y2:"14"},child:[]}]})(s)}function Cp(s){return ue({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"ellipse",attr:{cx:"12",cy:"5",rx:"9",ry:"3"},child:[]},{tag:"path",attr:{d:"M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"},child:[]},{tag:"path",attr:{d:"M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"},child:[]}]})(s)}function Jx(s){return ue({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"12",y1:"1",x2:"12",y2:"23"},child:[]},{tag:"path",attr:{d:"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"},child:[]}]})(s)}function Bo(s){return ue({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"},child:[]},{tag:"polyline",attr:{points:"14 2 14 8 20 8"},child:[]},{tag:"line",attr:{x1:"16",y1:"13",x2:"8",y2:"13"},child:[]},{tag:"line",attr:{x1:"16",y1:"17",x2:"8",y2:"17"},child:[]},{tag:"polyline",attr:{points:"10 9 9 9 8 9"},child:[]}]})(s)}function em(s){return ue({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"},child:[]}]})(s)}function Ro(s){return ue({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"6",y1:"3",x2:"6",y2:"15"},child:[]},{tag:"circle",attr:{cx:"18",cy:"6",r:"3"},child:[]},{tag:"circle",attr:{cx:"6",cy:"18",r:"3"},child:[]},{tag:"path",attr:{d:"M18 9a9 9 0 0 1-9 9"},child:[]}]})(s)}function rm(s){return ue({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"4"},child:[]},{tag:"line",attr:{x1:"1.05",y1:"12",x2:"7",y2:"12"},child:[]},{tag:"line",attr:{x1:"17.01",y1:"12",x2:"22.96",y2:"12"},child:[]}]})(s)}function tm(s){return ue({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"18",cy:"18",r:"3"},child:[]},{tag:"circle",attr:{cx:"6",cy:"6",r:"3"},child:[]},{tag:"path",attr:{d:"M6 21V9a9 9 0 0 0 9 9"},child:[]}]})(s)}function Mt(s){return ue({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"line",attr:{x1:"2",y1:"12",x2:"22",y2:"12"},child:[]},{tag:"path",attr:{d:"M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"},child:[]}]})(s)}function Tp(s){return ue({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"22",y1:"12",x2:"2",y2:"12"},child:[]},{tag:"path",attr:{d:"M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"},child:[]},{tag:"line",attr:{x1:"6",y1:"16",x2:"6.01",y2:"16"},child:[]},{tag:"line",attr:{x1:"10",y1:"16",x2:"10.01",y2:"16"},child:[]}]})(s)}function Ep(s){return ue({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"4",y1:"9",x2:"20",y2:"9"},child:[]},{tag:"line",attr:{x1:"4",y1:"15",x2:"20",y2:"15"},child:[]},{tag:"line",attr:{x1:"10",y1:"3",x2:"8",y2:"21"},child:[]},{tag:"line",attr:{x1:"16",y1:"3",x2:"14",y2:"21"},child:[]}]})(s)}function nm(s){return ue({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"},child:[]}]})(s)}function Pp(s){return ue({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"},child:[]}]})(s)}function Wr(s){return ue({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{points:"12 2 2 7 12 12 22 7 12 2"},child:[]},{tag:"polyline",attr:{points:"2 17 12 22 22 17"},child:[]},{tag:"polyline",attr:{points:"2 12 12 17 22 12"},child:[]}]})(s)}function zp(s){return ue({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"},child:[]},{tag:"path",attr:{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"},child:[]}]})(s)}function Ea(s){return ue({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"3",y:"11",width:"18",height:"11",rx:"2",ry:"2"},child:[]},{tag:"path",attr:{d:"M7 11V7a5 5 0 0 1 10 0v4"},child:[]}]})(s)}function om(s){return ue({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"},child:[]},{tag:"circle",attr:{cx:"12",cy:"10",r:"3"},child:[]}]})(s)}function im(s){return ue({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{points:"1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"},child:[]},{tag:"line",attr:{x1:"8",y1:"2",x2:"8",y2:"18"},child:[]},{tag:"line",attr:{x1:"16",y1:"6",x2:"16",y2:"22"},child:[]}]})(s)}function sm(s){return ue({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"},child:[]}]})(s)}function Np(s){return ue({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"16.5",y1:"9.4",x2:"7.5",y2:"4.21"},child:[]},{tag:"path",attr:{d:"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"},child:[]},{tag:"polyline",attr:{points:"3.27 6.96 12 12.01 20.73 6.96"},child:[]},{tag:"line",attr:{x1:"12",y1:"22.08",x2:"12",y2:"12"},child:[]}]})(s)}function lm(s){return ue({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"polygon",attr:{points:"10 8 16 12 10 16 10 8"},child:[]}]})(s)}function Lp(s){return ue({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"1 4 1 10 7 10"},child:[]},{tag:"polyline",attr:{points:"23 20 23 14 17 14"},child:[]},{tag:"path",attr:{d:"M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15"},child:[]}]})(s)}function Pa(s){return ue({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"17 1 21 5 17 9"},child:[]},{tag:"path",attr:{d:"M3 11V9a4 4 0 0 1 4-4h14"},child:[]},{tag:"polyline",attr:{points:"7 23 3 19 7 15"},child:[]},{tag:"path",attr:{d:"M21 13v2a4 4 0 0 1-4 4H3"},child:[]}]})(s)}function An(s){return ue({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"2",y:"2",width:"20",height:"8",rx:"2",ry:"2"},child:[]},{tag:"rect",attr:{x:"2",y:"14",width:"20",height:"8",rx:"2",ry:"2"},child:[]},{tag:"line",attr:{x1:"6",y1:"6",x2:"6.01",y2:"6"},child:[]},{tag:"line",attr:{x1:"6",y1:"18",x2:"6.01",y2:"18"},child:[]}]})(s)}function am(s){return ue({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"3"},child:[]},{tag:"path",attr:{d:"M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"},child:[]}]})(s)}function $r(s){return ue({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"},child:[]}]})(s)}function za(s){return ue({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"16 3 21 3 21 8"},child:[]},{tag:"line",attr:{x1:"4",y1:"20",x2:"21",y2:"3"},child:[]},{tag:"polyline",attr:{points:"21 16 21 21 16 21"},child:[]},{tag:"line",attr:{x1:"15",y1:"15",x2:"21",y2:"21"},child:[]},{tag:"line",attr:{x1:"4",y1:"4",x2:"9",y2:"9"},child:[]}]})(s)}function cm(s){return ue({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"5"},child:[]},{tag:"line",attr:{x1:"12",y1:"1",x2:"12",y2:"3"},child:[]},{tag:"line",attr:{x1:"12",y1:"21",x2:"12",y2:"23"},child:[]},{tag:"line",attr:{x1:"4.22",y1:"4.22",x2:"5.64",y2:"5.64"},child:[]},{tag:"line",attr:{x1:"18.36",y1:"18.36",x2:"19.78",y2:"19.78"},child:[]},{tag:"line",attr:{x1:"1",y1:"12",x2:"3",y2:"12"},child:[]},{tag:"line",attr:{x1:"21",y1:"12",x2:"23",y2:"12"},child:[]},{tag:"line",attr:{x1:"4.22",y1:"19.78",x2:"5.64",y2:"18.36"},child:[]},{tag:"line",attr:{x1:"18.36",y1:"5.64",x2:"19.78",y2:"4.22"},child:[]}]})(s)}function Nr(s){return ue({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"4 17 10 11 4 5"},child:[]},{tag:"line",attr:{x1:"12",y1:"19",x2:"20",y2:"19"},child:[]}]})(s)}function Je(s){return ue({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"},child:[]}]})(s)}function dm(s){return ue({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"},child:[]},{tag:"circle",attr:{cx:"12",cy:"7",r:"4"},child:[]}]})(s)}function um(s){return ue({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"},child:[]},{tag:"circle",attr:{cx:"9",cy:"7",r:"4"},child:[]},{tag:"path",attr:{d:"M23 21v-2a4 4 0 0 0-3-3.87"},child:[]},{tag:"path",attr:{d:"M16 3.13a4 4 0 0 1 0 7.75"},child:[]}]})(s)}function Na(s){return ue({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M5 12.55a11 11 0 0 1 14.08 0"},child:[]},{tag:"path",attr:{d:"M1.42 9a16 16 0 0 1 21.16 0"},child:[]},{tag:"path",attr:{d:"M8.53 16.11a6 6 0 0 1 6.95 0"},child:[]},{tag:"line",attr:{x1:"12",y1:"20",x2:"12.01",y2:"20"},child:[]}]})(s)}function pm(s){return ue({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2"},child:[]}]})(s)}function ln(s){return ue({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2"},child:[]}]})(s)}const Zu="databases-deep-dive-core-notes-theme",hm=()=>{const[s,d]=Y.useState(!1),[c,p]=Y.useState("dark");Y.useEffect(()=>{const y=localStorage.getItem(Zu)||"dark";p(y),y==="light"?document.documentElement.setAttribute("data-theme","light"):document.documentElement.removeAttribute("data-theme")},[]),Y.useEffect(()=>{c==="light"?document.documentElement.setAttribute("data-theme","light"):document.documentElement.removeAttribute("data-theme"),localStorage.setItem(Zu,c)},[c]);const x=Y.useMemo(()=>c==="light"?"dark":"light",[c]),k=()=>{p(x)};return t.jsx(Qu.Wrapper,{children:t.jsxs(Qu.Main,{children:[t.jsx("div",{className:"leftSide",children:t.jsxs("div",{className:"logoNameWrapper",children:[t.jsxs("div",{className:"logoWrapper",children:[!s&&t.jsx("div",{className:"logoSkeleton"}),t.jsx("img",{src:Fx,alt:"databases-deep-dive-core-notes",onLoad:()=>d(!0),style:{opacity:s?1:0},loading:"lazy"})]}),t.jsxs("div",{className:"nameWrapper",children:[t.jsx("div",{className:"title",children:"database-deep-dive-core-notes"}),t.jsx("div",{className:"subTitle",children:"MongoDB, SQL, indexes, transactions, replication, sharding"})]}),t.jsxs("div",{className:"pillRow",children:[t.jsxs("div",{className:"stat",children:[t.jsx("span",{className:"sIcon",children:t.jsx(Cp,{})}),t.jsx("span",{children:"DB"})]}),t.jsxs("div",{className:"stat",children:[t.jsx("span",{className:"sIcon",children:t.jsx(Wr,{})}),t.jsx("span",{children:"Deep Dive"})]})]})]})}),t.jsx("div",{className:"rightSide",children:t.jsxs("button",{type:"button",className:"themeToggleBtn",onClick:k,"aria-label":`Switch to ${x} theme`,title:`Switch to ${x}`,children:[t.jsx("span",{className:"icon",children:c==="light"?t.jsx(sm,{}):t.jsx(cm,{})}),t.jsx("span",{className:"label",children:c==="light"?"Light":"Dark"})]})})]})})},fm={Wrapper:a.footer`
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 12px;
        padding: 15px;
        border-top: 1px solid var(--color-border);

        font-size: 12px;
        color: var(--color-text-muted);

        .right a {
            color: var(--color-text-secondary);
            font-weight: 600;
        }

        .right a:hover {
            color: var(--color-text-primary);
        }

        a {
            color: var(--color-text-secondary);
            font-weight: 600;
        }

        a:hover {
            color: var(--color-text-primary);
        }

        @media (width < 600px) {
            flex-direction: column;
            align-items: flex-start;
            gap: 6px;
        }
    `},xm=()=>t.jsxs(fm.Wrapper,{children:[t.jsxs("div",{className:"left",children:["© ",new Date().getFullYear()," | All rights reserved"]}),t.jsxs("div",{className:"right",children:["By ",t.jsx("a",{href:"https://www.ashishranjan.net",target:"_blank",rel:"noopener noreferrer",children:"Ashish Ranjan"})]})]}),yr={Wrapper:a.div`
        margin-bottom: 10px;
        border: 1px solid var(--color-border);
        border-radius: 14px;
        background: var(--color-surface);
        overflow: hidden;
    `,Header:a.div`
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 16px 20px;
        cursor: pointer;
        user-select: none;
        transition: background 120ms ease;

        &:hover {
            background: var(--color-surface-2);
        }
    `,Title:a.div`
        display: flex;
        align-items: center;
        gap: 10px;
        font-weight: 900;
        font-size: 18px;
        color: var(--color-text-primary);

        svg {
            font-size: 20px;
            color: var(--color-primary);
        }
    `,Toggle:a.div`
        font-size: 20px;
        color: var(--color-text-muted);
    `,Content:a.div`
        padding: 22px;
        border-top: 1px solid var(--color-border);
        background: var(--color-surface-2);
    `,Section:a.div`
        margin-bottom: 20px;
    `,Paragraph:a.p`
        margin-bottom: 10px;
        color: var(--color-text-secondary);
    `,Grid:a.div`
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 16px;
        margin-bottom: 20px;
    `,Card:a.div`
        border: 1px solid var(--color-border);
        border-radius: 12px;
        padding: 16px;
        background: var(--color-surface);
        transition:
            transform 120ms ease,
            border-color 120ms ease;

        svg {
            font-size: 20px;
            color: var(--color-accent);
            margin-bottom: 8px;
        }

        h3 {
            font-size: 15px;
            margin-bottom: 6px;
        }

        p {
            font-size: 14px;
            color: var(--color-text-secondary);
        }

        &:hover {
            transform: translateY(-2px);
            border-color: var(--color-primary);
        }
    `},mm=()=>{const[s,d]=Y.useState(!0);return t.jsxs(yr.Wrapper,{children:[t.jsxs(yr.Header,{onClick:()=>d(!s),children:[t.jsxs(yr.Title,{children:[t.jsx(Sp,{}),"DevOps and Cloud Core Notes"]}),t.jsx(yr.Toggle,{children:s?t.jsx(pr,{}):t.jsx(ur,{})})]}),s&&t.jsxs(yr.Content,{children:[t.jsxs(yr.Section,{children:[t.jsx(yr.Paragraph,{children:"Modern software is not only about writing code. It is about building systems that can run reliably on servers, scale for millions of users, and recover from failures."}),t.jsx(yr.Paragraph,{children:"DevOps combines development and operations so that applications move smoothly from a developer's laptop to real production infrastructure."})]}),t.jsxs(yr.Grid,{children:[t.jsxs(yr.Card,{children:[t.jsx(Ro,{}),t.jsx("h3",{children:"Version Control"}),t.jsx("p",{children:"Git workflows, branching strategies, rebasing, and merging that power collaborative development."})]}),t.jsxs(yr.Card,{children:[t.jsx(ss,{}),t.jsx("h3",{children:"Containers"}),t.jsx("p",{children:"Docker containers package applications with their dependencies so they run the same everywhere."})]}),t.jsxs(yr.Card,{children:[t.jsx(sn,{}),t.jsx("h3",{children:"CI and CD"}),t.jsx("p",{children:"Automated pipelines that test, build, and deploy applications continuously."})]}),t.jsxs(yr.Card,{children:[t.jsx(An,{}),t.jsx("h3",{children:"Cloud Infrastructure"}),t.jsx("p",{children:"Cloud platforms like AWS provide scalable compute, storage, and networking for modern systems."})]})]}),t.jsxs(yr.Section,{children:[t.jsx(yr.Paragraph,{children:"This repository explains how real production systems are built. From Git internals to container orchestration and cloud architecture, the goal is to understand how software actually runs on the internet."}),t.jsx(yr.Paragraph,{children:"The focus is practical understanding. Concepts are explained clearly with examples so developers can reason about real infrastructure and deployment workflows."})]})]})]})},gm={Button:a.button`
        position: fixed;
        right: 18px;
        bottom: 18px;
        z-index: 9999;

        width: 48px;
        height: 48px;

        display: grid;
        place-items: center;

        border-radius: 14px;
        border: 1px solid var(--color-border);

        background: color-mix(in srgb, var(--color-primary) 26%, transparent);
        color: var(--color-text-primary);

        box-shadow: 0 16px 44px var(--color-shadow);

        cursor: pointer;

        transition:
            transform 140ms ease,
            opacity 160ms ease,
            border-color 140ms ease,
            background-color 140ms ease;

        svg {
            width: 20px;
            height: 20px;
        }

        &.hide {
            opacity: 0;
            pointer-events: none;
            transform: translateY(10px) scale(0.98);
        }

        &.show {
            opacity: 1;
            pointer-events: auto;
            transform: translateY(0px) scale(1);
        }

        &:hover {
            transform: translateY(-2px) scale(1.02);
            border-color: var(--color-border-light);
            background: color-mix(
                in srgb,
                var(--color-primary) 34%,
                transparent
            );
        }

        &:active {
            transform: translateY(0px) scale(1);
        }
    `},vm=({scrollerRef:s})=>{const[d,c]=Y.useState(!1);Y.useEffect(()=>{const x=s==null?void 0:s.current;if(!x)return;const k=()=>{const h=x.scrollTop||0;c(h>350)};return k(),x.addEventListener("scroll",k),()=>x.removeEventListener("scroll",k)},[s]);const p=()=>{const x=s==null?void 0:s.current;x&&x.scrollTo({top:0,behavior:"smooth"})};return t.jsx(gm.Button,{type:"button",onClick:p,className:d?"show":"hide","aria-label":"Go to top",title:"Go to top",children:t.jsx(qx,{})})},W={Wrapper:a.div`
        margin-bottom: 10px;
        border: 1px solid var(--color-border);
        border-radius: 14px;
        background: var(--color-surface);
        overflow: hidden;
    `,Header:a.div`
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 12px;
        padding: 16px 18px;
        cursor: pointer;
        user-select: none;
        transition:
            background 140ms ease,
            border-color 140ms ease;

        &:hover {
            background: var(--color-surface-2);
        }

        &:focus-visible {
            outline: 2px solid var(--color-primary);
            outline-offset: 3px;
        }
    `,Title:a.div`
        display: flex;
        align-items: center;
        gap: 10px;
        font-weight: 900;
        font-size: 18px;
        color: var(--color-text-primary);

        svg {
            font-size: 20px;
            color: var(--color-primary);
        }
    `,Badge:a.span`
        margin-left: 10px;
        font-size: 12px;
        font-weight: 800;
        color: var(--color-text-secondary);
        background: color-mix(in srgb, var(--color-surface-2) 85%, transparent);
        border: 1px solid var(--color-border);
        padding: 4px 10px;
        border-radius: 999px;
    `,Toggle:a.div`
        font-size: 20px;
        color: var(--color-text-muted);
        flex: 0 0 auto;
    `,Preview:a.div`
        padding: 14px 18px 18px 18px;
        border-top: 1px solid var(--color-border);
        background: color-mix(in srgb, var(--color-surface-2) 55%, transparent);
    `,PreviewLine:a.div`
        color: var(--color-text-secondary);
        font-size: 14px;
        line-height: 1.5;

        & + & {
            margin-top: 6px;
        }
    `,Content:a.div`
        padding: 18px;
        border-top: 1px solid var(--color-border);
        background: var(--color-surface-2);
    `,Section:a.div`
        & + & {
            margin-top: 16px;
        }
    `,SectionHead:a.div`
        display: flex;
        align-items: center;
        gap: 10px;
        margin-bottom: 8px;

        svg {
            color: var(--color-accent);
            font-size: 18px;
        }

        h3 {
            font-size: 16px;
            font-weight: 900;
            color: var(--color-text-primary);
        }
    `,Para:a.p`
        margin-bottom: 10px;
        color: var(--color-text-secondary);
        font-size: 14px;
        line-height: 1.6;
    `,Bullets:a.ul`
        padding-left: 0;
        margin: 0;

        li {
            color: var(--color-text-secondary);
            font-size: 14px;
            line-height: 1.6;
            padding-left: 14px;
            position: relative;
            margin: 8px 0;
        }

        li::before {
            content: "-";
            position: absolute;
            left: 0;
            top: 0;
            color: var(--color-text-muted);
            font-weight: 900;
        }

        b {
            color: var(--color-text-primary);
            font-weight: 900;
        }
    `,Example:a.div`
        margin-top: 10px;
        border: 1px solid var(--color-border);
        background: color-mix(in srgb, var(--color-surface) 75%, transparent);
        border-radius: 12px;
        padding: 12px;
    `,ExampleTitle:a.div`
        font-weight: 900;
        font-size: 13px;
        color: var(--color-text-primary);
        margin-bottom: 8px;
    `,CodeBlock:a.div`
        background: var(--color-code-bg);
        border: 1px solid var(--color-code-border);
        border-radius: 12px;
        padding: 12px;
        overflow: auto;

        pre {
            margin: 0;
            white-space: pre;
            font-size: 12.5px;
            line-height: 1.55;
            color: var(--color-text-primary);
        }
    `,Note:a.div`
        display: flex;
        gap: 10px;
        align-items: flex-start;
        margin-top: 10px;
        border: 1px solid var(--color-border);
        background: color-mix(
            in srgb,
            var(--color-primary) 8%,
            var(--color-surface)
        );
        border-radius: 12px;
        padding: 12px;

        svg {
            margin-top: 2px;
            color: var(--color-primary);
            font-size: 18px;
            flex: 0 0 auto;
        }
    `,NoteTitle:a.div`
        font-weight: 900;
        color: var(--color-text-primary);
        font-size: 13px;
        margin-bottom: 2px;
    `,NoteText:a.div`
        color: var(--color-text-secondary);
        font-size: 13px;
        line-height: 1.55;
    `,Warn:a.div`
        display: flex;
        gap: 10px;
        align-items: flex-start;
        margin-top: 10px;
        border: 1px solid var(--color-border);
        background: color-mix(
            in srgb,
            var(--color-warning) 10%,
            var(--color-surface)
        );
        border-radius: 12px;
        padding: 12px;

        svg {
            margin-top: 2px;
            color: var(--color-warning);
            font-size: 18px;
            flex: 0 0 auto;
        }
    `,WarnTitle:a.div`
        font-weight: 900;
        color: var(--color-text-primary);
        font-size: 13px;
        margin-bottom: 2px;
    `,WarnText:a.div`
        color: var(--color-text-secondary);
        font-size: 13px;
        line-height: 1.55;
    `,SnippetGrid:a.div`
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
        gap: 12px;
        margin-top: 10px;
    `,SnippetCard:a.div`
        border: 1px solid var(--color-border);
        background: var(--color-surface);
        border-radius: 12px;
        overflow: hidden;
        transition:
            transform 140ms ease,
            border-color 140ms ease;

        &:hover {
            transform: translateY(-2px);
            border-color: var(--color-border-light);
        }
    `,SnippetTop:a.div`
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        gap: 12px;
        padding: 12px;
        border-bottom: 1px solid var(--color-border);
        background: color-mix(in srgb, var(--color-surface-2) 55%, transparent);
    `,SnippetTitle:a.div`
        font-weight: 900;
        color: var(--color-text-primary);
        font-size: 13px;
        line-height: 1.3;
        margin-bottom: 4px;
    `,SnippetHint:a.div`
        color: var(--color-text-muted);
        font-size: 12px;
    `,CopyBtn:a.button`
        display: inline-flex;
        align-items: center;
        gap: 8px;
        padding: 8px 10px;
        border-radius: 10px;
        border: 1px solid var(--color-border);
        background: color-mix(in srgb, var(--color-surface) 70%, transparent);
        color: var(--color-text-primary);
        font-weight: 900;
        font-size: 12px;
        transition:
            transform 140ms ease,
            border-color 140ms ease,
            background 140ms ease;

        svg {
            font-size: 14px;
            color: var(--color-accent);
        }

        &:hover {
            border-color: var(--color-border-light);
            transform: translateY(-1px);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 70%,
                transparent
            );
        }

        &:active {
            transform: translateY(0px);
        }
    `,FooterNote:a.div`
        margin-top: 14px;
        padding: 12px;
        border: 1px solid var(--color-border);
        border-radius: 12px;
        background: color-mix(in srgb, var(--color-surface) 70%, transparent);
        color: var(--color-text-secondary);
        font-size: 13px;
        line-height: 1.55;
    `},ym=()=>{const[s,d]=Y.useState(!1),[c,p]=Y.useState(""),x=Y.useMemo(()=>[{key:"objects",title:"Git objects - blob, tree, commit",hint:"Core internals",code:`# See raw object type + content
git cat-file -t <hash>
git cat-file -p <hash>

# Find objects reachable from refs
git rev-list --objects --all | head`},{key:"head",title:"HEAD, refs, and branches",hint:"What you are pointing at",code:`# What HEAD points to
cat .git/HEAD

# Show refs (branches and tags)
git show-ref --heads --tags

# Resolve a name to a hash
git rev-parse HEAD
git rev-parse main`},{key:"staging",title:"Working tree vs staging area vs commit",hint:"The 3 states",code:`# What changed but not staged
git diff

# What is staged
git diff --staged

# Stage a file and inspect staged diff
git add file.txt
git diff --staged`},{key:"reflog",title:"Reflog - undo almost anything",hint:"Your safety net",code:`# Show recent HEAD movements
git reflog

# Recover a lost commit by checking out or resetting
git checkout <hash>
git reset --hard <hash>`},{key:"resetRevert",title:"reset vs revert",hint:"Local rewrite vs safe history",code:`# Move HEAD and branch pointer (can rewrite history)
git reset --soft HEAD~1
git reset --mixed HEAD~1
git reset --hard HEAD~1

# Create a new commit that undoes changes (safe for shared branches)
git revert <commit-hash>`},{key:"stashCherry",title:"stash and cherry-pick",hint:"Park work and pick commits",code:`# Stash work in progress
git stash push -m "wip - debugging"
git stash list
git stash pop

# Copy a commit onto current branch
git cherry-pick <commit-hash>`}],[]),k=async(h,y)=>{try{await navigator.clipboard.writeText(h),p(y),window.setTimeout(()=>p(""),900)}catch{p("")}};return t.jsxs(W.Wrapper,{children:[t.jsxs(W.Header,{onClick:()=>d(h=>!h),role:"button",tabIndex:0,children:[t.jsxs(W.Title,{children:[t.jsx(Ro,{}),"Git Deep",t.jsx(W.Badge,{children:"Internals + real workflows"})]}),t.jsx(W.Toggle,{"aria-hidden":"true",children:s?t.jsx(pr,{}):t.jsx(ur,{})})]}),!s&&t.jsxs(W.Preview,{children:[t.jsx(W.PreviewLine,{children:'Git is a content-addressed database with a nice UI called "git".'}),t.jsx(W.PreviewLine,{children:'Understand objects, refs, HEAD, index, reflog, and the common "save me" commands.'})]}),s&&t.jsxs(W.Content,{children:[t.jsxs(W.Section,{children:[t.jsxs(W.SectionHead,{children:[t.jsx(Xx,{}),t.jsx("h3",{children:"What is Git, really"})]}),t.jsx(W.Para,{children:'Git is not a "file diff tool". Git stores snapshots of your project. Internally it behaves like a database where content is saved and referenced by hashes.'}),t.jsxs(W.Note,{children:[t.jsx(we,{}),t.jsxs("div",{children:[t.jsx(W.NoteTitle,{children:"Beginner mental model"}),t.jsx(W.NoteText,{children:"A branch is just a name that points to a commit. A commit points to a snapshot (a tree). Trees point to folders. Blobs point to file content."})]})]})]}),t.jsxs(W.Section,{children:[t.jsxs(W.SectionHead,{children:[t.jsx(Wr,{}),t.jsx("h3",{children:"Git objects - blob, tree, commit"})]}),t.jsxs(W.Bullets,{children:[t.jsxs("li",{children:[t.jsx("b",{children:"blob"})," - file content (only bytes of the file, not file name)"]}),t.jsxs("li",{children:[t.jsx("b",{children:"tree"})," - folder listing (names + permissions + pointers to blobs or other trees)"]}),t.jsxs("li",{children:[t.jsx("b",{children:"commit"})," - points to a tree + includes parent commit(s) + author info + message"]})]}),t.jsxs(W.Example,{children:[t.jsx(W.ExampleTitle,{children:"Example"}),t.jsx(W.Para,{children:"When you commit, Git creates a new commit object. That commit points to a tree. That tree points to blobs. If a file did not change, Git reuses the same blob hash. This is why Git is fast and efficient."})]})]}),t.jsxs(W.Section,{children:[t.jsxs(W.SectionHead,{children:[t.jsx(im,{}),t.jsx("h3",{children:"Refs, branches, and HEAD"})]}),t.jsxs(W.Bullets,{children:[t.jsxs("li",{children:[t.jsx("b",{children:"ref"})," - a name that points to a commit hash (example: refs/heads/main)"]}),t.jsxs("li",{children:[t.jsx("b",{children:"branch"})," - just a ref (a movable pointer)"]}),t.jsxs("li",{children:[t.jsx("b",{children:"HEAD"})," - tells Git what you currently have checked out"]})]}),t.jsxs(W.Example,{children:[t.jsx(W.ExampleTitle,{children:"Two common HEAD states"}),t.jsxs(W.Bullets,{children:[t.jsxs("li",{children:[t.jsx("b",{children:"Normal"})," - HEAD points to a branch name (example: main)"]}),t.jsxs("li",{children:[t.jsx("b",{children:"Detached HEAD"})," - HEAD points directly to a commit hash (easy to forget work here)"]})]})]}),t.jsxs(W.Warn,{children:[t.jsx(Qe,{}),t.jsxs("div",{children:[t.jsx(W.WarnTitle,{children:"Detached HEAD beginner trap"}),t.jsx(W.WarnText,{children:"If you checkout a commit hash and start committing, you might lose the branch pointer. Fix: create a branch from that point: git checkout -b rescue-branch"})]})]})]}),t.jsxs(W.Section,{children:[t.jsxs(W.SectionHead,{children:[t.jsx(Ep,{}),t.jsx("h3",{children:"The 3 states - working tree, staging area, commit"})]}),t.jsxs(W.Bullets,{children:[t.jsxs("li",{children:[t.jsx("b",{children:"Working tree"})," - your actual files on disk"]}),t.jsxs("li",{children:[t.jsx("b",{children:"Staging area (index)"})," - what will go into the next commit"]}),t.jsxs("li",{children:[t.jsx("b",{children:"Commit"})," - saved snapshot in Git history"]})]}),t.jsxs(W.Example,{children:[t.jsx(W.ExampleTitle,{children:"Example flow"}),t.jsx(W.CodeBlock,{children:t.jsx("pre",{children:`# Edit file.txt

# See changes in working tree
git diff

# Stage changes
git add file.txt

# See staged snapshot difference
git diff --staged

# Create commit snapshot
git commit -m "Update file.txt"`})})]})]}),t.jsxs(W.Section,{children:[t.jsxs(W.SectionHead,{children:[t.jsx(ls,{}),t.jsx("h3",{children:"Reflog - the secret undo history"})]}),t.jsx(W.Para,{children:'Reflog records where HEAD and branch refs have been. Even if you reset and "lose" commits, reflog can help you recover them.'}),t.jsxs(W.Example,{children:[t.jsx(W.ExampleTitle,{children:"Typical rescue"}),t.jsx(W.CodeBlock,{children:t.jsx("pre",{children:`# Find the previous state
git reflog

# Reset back to a good state
git reset --hard HEAD@{3}`})})]}),t.jsxs(W.Note,{children:[t.jsx(Je,{}),t.jsxs("div",{children:[t.jsx(W.NoteTitle,{children:"Rule of thumb"}),t.jsx(W.NoteText,{children:'If you think "I lost my commit", check reflog first.'})]})]})]}),t.jsxs(W.Section,{children:[t.jsxs(W.SectionHead,{children:[t.jsx(Je,{}),t.jsx("h3",{children:"reset vs revert"})]}),t.jsxs(W.Bullets,{children:[t.jsxs("li",{children:[t.jsx("b",{children:"reset"})," - moves branch pointer and optionally changes files (can rewrite history)"]}),t.jsxs("li",{children:[t.jsx("b",{children:"revert"})," - creates a new commit that undoes an old commit (safe on shared branches)"]})]}),t.jsxs(W.Example,{children:[t.jsx(W.ExampleTitle,{children:"When to use what"}),t.jsxs(W.Bullets,{children:[t.jsxs("li",{children:["Use ",t.jsx("b",{children:"reset"})," when the branch is local and not shared yet"]}),t.jsxs("li",{children:["Use ",t.jsx("b",{children:"revert"})," when the branch is already pushed and others may have pulled it"]})]})]})]}),t.jsxs(W.Section,{children:[t.jsxs(W.SectionHead,{children:[t.jsx(Je,{}),t.jsx("h3",{children:"stash and cherry-pick"})]}),t.jsxs(W.Bullets,{children:[t.jsxs("li",{children:[t.jsx("b",{children:"stash"})," - park unfinished work temporarily (clean working tree fast)"]}),t.jsxs("li",{children:[t.jsx("b",{children:"cherry-pick"})," - copy a specific commit onto your current branch"]})]}),t.jsxs(W.Example,{children:[t.jsx(W.ExampleTitle,{children:"Beginner friendly example"}),t.jsx(W.Para,{children:"You are fixing a bug but suddenly need to switch branches. Use stash to save your work without committing, switch branches, then pop it later."})]})]}),t.jsxs(W.Section,{children:[t.jsxs(W.SectionHead,{children:[t.jsx(Je,{}),t.jsx("h3",{children:"Command playground"})]}),t.jsx(W.SnippetGrid,{children:x.map(h=>{const y=c===h.key;return t.jsxs(W.SnippetCard,{children:[t.jsxs(W.SnippetTop,{children:[t.jsxs("div",{children:[t.jsx(W.SnippetTitle,{children:h.title}),t.jsx(W.SnippetHint,{children:h.hint})]}),t.jsxs(W.CopyBtn,{type:"button",onClick:()=>k(h.code,h.key),title:y?"Copied":"Copy",children:[y?t.jsx(we,{}):t.jsx(dr,{}),y?"Copied":"Copy"]})]}),t.jsx(W.CodeBlock,{children:t.jsx("pre",{children:h.code})})]},h.key)})})]}),t.jsx(W.FooterNote,{children:"Git feels scary until you realize it is just pointers and snapshots. Once you get objects, refs, and reflog, you stop fearing mistakes."})]})]})},ie={Wrapper:a.div`
        margin-bottom: 10px;
        border: 1px solid var(--color-border);
        border-radius: 14px;
        background: var(--color-surface);
        overflow: hidden;
    `,Header:a.div`
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 12px;
        padding: 16px 18px;
        cursor: pointer;
        user-select: none;
        transition: background 140ms ease;

        &:hover {
            background: var(--color-surface-2);
        }

        &:focus-visible {
            outline: 2px solid var(--color-primary);
            outline-offset: 3px;
        }
    `,Title:a.div`
        display: flex;
        align-items: center;
        gap: 10px;
        font-weight: 900;
        font-size: 18px;
        color: var(--color-text-primary);

        svg {
            font-size: 20px;
            color: var(--color-primary);
        }
    `,Badge:a.span`
        margin-left: 10px;
        font-size: 12px;
        font-weight: 800;
        color: var(--color-text-secondary);
        background: color-mix(in srgb, var(--color-surface-2) 85%, transparent);
        border: 1px solid var(--color-border);
        padding: 4px 10px;
        border-radius: 999px;
    `,Toggle:a.div`
        font-size: 20px;
        color: var(--color-text-muted);
        flex: 0 0 auto;
    `,Preview:a.div`
        padding: 14px 18px 18px 18px;
        border-top: 1px solid var(--color-border);
        background: color-mix(in srgb, var(--color-surface-2) 55%, transparent);
    `,PreviewLine:a.div`
        color: var(--color-text-secondary);
        font-size: 14px;
        line-height: 1.5;

        & + & {
            margin-top: 6px;
        }
    `,Content:a.div`
        padding: 18px;
        border-top: 1px solid var(--color-border);
        background: var(--color-surface-2);
    `,Section:a.div`
        & + & {
            margin-top: 16px;
        }
    `,SectionHead:a.div`
        display: flex;
        align-items: center;
        gap: 10px;
        margin-bottom: 8px;

        svg {
            color: var(--color-accent);
            font-size: 18px;
        }

        h3 {
            font-size: 16px;
            font-weight: 900;
            color: var(--color-text-primary);
        }
    `,Para:a.p`
        margin-bottom: 10px;
        color: var(--color-text-secondary);
        font-size: 14px;
        line-height: 1.6;
    `,Bullets:a.ul`
        padding-left: 0;
        margin: 0;

        li {
            color: var(--color-text-secondary);
            font-size: 14px;
            line-height: 1.6;
            padding-left: 14px;
            position: relative;
            margin: 8px 0;
        }

        li::before {
            content: "-";
            position: absolute;
            left: 0;
            top: 0;
            color: var(--color-text-muted);
            font-weight: 900;
        }

        b {
            color: var(--color-text-primary);
            font-weight: 900;
        }
    `,Example:a.div`
        margin-top: 10px;
        border: 1px solid var(--color-border);
        background: color-mix(in srgb, var(--color-surface) 75%, transparent);
        border-radius: 12px;
        padding: 12px;
    `,ExampleTitle:a.div`
        font-weight: 900;
        font-size: 13px;
        color: var(--color-text-primary);
        margin-bottom: 8px;
    `,CodeBlock:a.div`
        background: var(--color-code-bg);
        border: 1px solid var(--color-code-border);
        border-radius: 12px;
        padding: 12px;
        overflow: auto;

        pre {
            margin: 0;
            white-space: pre;
            font-size: 12.5px;
            line-height: 1.55;
            color: var(--color-text-primary);
        }
    `,Note:a.div`
        display: flex;
        gap: 10px;
        align-items: flex-start;
        margin-top: 10px;
        border: 1px solid var(--color-border);
        background: color-mix(
            in srgb,
            var(--color-primary) 8%,
            var(--color-surface)
        );
        border-radius: 12px;
        padding: 12px;

        svg {
            margin-top: 2px;
            color: var(--color-primary);
            font-size: 18px;
            flex: 0 0 auto;
        }
    `,NoteTitle:a.div`
        font-weight: 900;
        color: var(--color-text-primary);
        font-size: 13px;
        margin-bottom: 2px;
    `,NoteText:a.div`
        color: var(--color-text-secondary);
        font-size: 13px;
        line-height: 1.55;
    `,Warn:a.div`
        display: flex;
        gap: 10px;
        align-items: flex-start;
        margin-top: 10px;
        border: 1px solid var(--color-border);
        background: color-mix(
            in srgb,
            var(--color-warning) 10%,
            var(--color-surface)
        );
        border-radius: 12px;
        padding: 12px;

        svg {
            margin-top: 2px;
            color: var(--color-warning);
            font-size: 18px;
            flex: 0 0 auto;
        }
    `,WarnTitle:a.div`
        font-weight: 900;
        color: var(--color-text-primary);
        font-size: 13px;
        margin-bottom: 2px;
    `,WarnText:a.div`
        color: var(--color-text-secondary);
        font-size: 13px;
        line-height: 1.55;
    `,SnippetGrid:a.div`
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
        gap: 12px;
        margin-top: 10px;
    `,SnippetCard:a.div`
        border: 1px solid var(--color-border);
        background: var(--color-surface);
        border-radius: 12px;
        overflow: hidden;
        transition:
            transform 140ms ease,
            border-color 140ms ease;

        &:hover {
            transform: translateY(-2px);
            border-color: var(--color-border-light);
        }
    `,SnippetTop:a.div`
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        gap: 12px;
        padding: 12px;
        border-bottom: 1px solid var(--color-border);
        background: color-mix(in srgb, var(--color-surface-2) 55%, transparent);
    `,SnippetTitle:a.div`
        font-weight: 900;
        color: var(--color-text-primary);
        font-size: 13px;
        line-height: 1.3;
        margin-bottom: 4px;
    `,SnippetHint:a.div`
        color: var(--color-text-muted);
        font-size: 12px;
    `,CopyBtn:a.button`
        display: inline-flex;
        align-items: center;
        gap: 8px;
        padding: 8px 10px;
        border-radius: 10px;
        border: 1px solid var(--color-border);
        background: color-mix(in srgb, var(--color-surface) 70%, transparent);
        color: var(--color-text-primary);
        font-weight: 900;
        font-size: 12px;
        transition:
            transform 140ms ease,
            border-color 140ms ease,
            background 140ms ease;

        svg {
            font-size: 14px;
            color: var(--color-accent);
        }

        &:hover {
            border-color: var(--color-border-light);
            transform: translateY(-1px);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 70%,
                transparent
            );
        }

        &:active {
            transform: translateY(0px);
        }
    `,FooterNote:a.div`
        margin-top: 14px;
        padding: 12px;
        border: 1px solid var(--color-border);
        border-radius: 12px;
        background: color-mix(in srgb, var(--color-surface) 70%, transparent);
        color: var(--color-text-secondary);
        font-size: 13px;
        line-height: 1.55;
    `},jm=()=>{const[s,d]=Y.useState(!1),[c,p]=Y.useState(""),x=Y.useMemo(()=>[{key:"basic",title:"Basic rebase",hint:"Move your commits onto a new base",code:`# You are on feature branch
git checkout feature/login

# Update your feature branch with latest main using rebase
git fetch origin
git rebase origin/main

# Push after rebase (history changed)
git push --force-with-lease`},{key:"interactive",title:"Interactive rebase",hint:"Clean up commit history before PR",code:`# Rebase last 5 commits interactively
git rebase -i HEAD~5

# In editor:
# pick   keep commit
# reword change commit message
# squash combine with previous commit
# fixup  combine and drop message`},{key:"conflicts",title:"Rebase conflict flow",hint:"Resolve conflicts safely",code:`# During rebase, if conflict happens:
git status

# Fix conflicts in files, then:
git add .

# Continue rebase
git rebase --continue

# If you want to stop and go back:
git rebase --abort`},{key:"onto",title:"Rebase onto",hint:"Move a branch to a different base",code:`# Move feature commits from old-base to new-base
git rebase --onto new-base old-base feature/login

# Example idea:
# feature/login was based on main-old
# now you want it based on main-new`},{key:"autosquash",title:"Fixup commits with autosquash",hint:"Great for review feedback",code:`# Create a fixup commit for an earlier commit
git commit --fixup <commit-hash>

# Auto squash fixups during interactive rebase
git rebase -i --autosquash origin/main`},{key:"recover",title:"Recover after bad rebase",hint:"Reflog rescue",code:`# Find previous HEAD before rebase
git reflog

# Reset back to safe point
git reset --hard HEAD@{3}`}],[]),k=async(h,y)=>{try{await navigator.clipboard.writeText(h),p(y),window.setTimeout(()=>p(""),900)}catch{p("")}};return t.jsxs(ie.Wrapper,{children:[t.jsxs(ie.Header,{onClick:()=>d(h=>!h),role:"button",tabIndex:0,children:[t.jsxs(ie.Title,{children:[t.jsx(za,{}),"Rebase",t.jsx(ie.Badge,{children:"Clean history - same code"})]}),t.jsx(ie.Toggle,{"aria-hidden":"true",children:s?t.jsx(pr,{}):t.jsx(ur,{})})]}),!s&&t.jsxs(ie.Preview,{children:[t.jsx(ie.PreviewLine,{children:"Rebase takes your commits and replays them on top of another commit."}),t.jsx(ie.PreviewLine,{children:"It is amazing for clean PRs, but dangerous on shared branches."})]}),s&&t.jsxs(ie.Content,{children:[t.jsxs(ie.Section,{children:[t.jsxs(ie.SectionHead,{children:[t.jsx(Ro,{}),t.jsx("h3",{children:"What rebase does"})]}),t.jsx(ie.Para,{children:"Rebase changes the base of your branch. It takes the commits from your branch and applies them again on top of a new base commit. The code ends up similar, but the commit hashes change because history is rewritten."}),t.jsxs(ie.Note,{children:[t.jsx(we,{}),t.jsxs("div",{children:[t.jsx(ie.NoteTitle,{children:"Beginner mental model"}),t.jsx(ie.NoteText,{children:"Imagine you wrote 3 commits on feature branch. Main branch moved ahead. Rebase copies your 3 commits and attaches them to the new tip of main."})]})]})]}),t.jsxs(ie.Section,{children:[t.jsxs(ie.SectionHead,{children:[t.jsx(Wr,{}),t.jsx("h3",{children:"Merge vs rebase"})]}),t.jsxs(ie.Bullets,{children:[t.jsxs("li",{children:[t.jsx("b",{children:"merge"})," - keeps history as it happened, creates a merge commit (or fast-forward)"]}),t.jsxs("li",{children:[t.jsx("b",{children:"rebase"})," - rewrites your branch history into a straight line, no merge commit"]})]}),t.jsxs(ie.Example,{children:[t.jsx(ie.ExampleTitle,{children:"When rebase is preferred"}),t.jsxs(ie.Bullets,{children:[t.jsx("li",{children:"Before creating a PR - clean linear commits"}),t.jsx("li",{children:"While working alone on a feature branch - no one else depends on your history"})]})]})]}),t.jsxs(ie.Section,{children:[t.jsxs(ie.SectionHead,{children:[t.jsx(Qe,{}),t.jsx("h3",{children:"The golden rule"})]}),t.jsxs(ie.Warn,{children:[t.jsx(Qe,{}),t.jsxs("div",{children:[t.jsx(ie.WarnTitle,{children:"Do not rebase shared branches"}),t.jsx(ie.WarnText,{children:"If others pulled your branch, rebasing changes commit hashes and makes their history messy. Use merge or coordinate carefully."})]})]}),t.jsxs(ie.Note,{children:[t.jsx(Je,{}),t.jsxs("div",{children:[t.jsx(ie.NoteTitle,{children:"Safe push after rebase"}),t.jsx(ie.NoteText,{children:'Use "git push --force-with-lease" instead of "git push --force". It refuses to overwrite if remote changed unexpectedly.'})]})]})]}),t.jsxs(ie.Section,{children:[t.jsxs(ie.SectionHead,{children:[t.jsx(ln,{}),t.jsx("h3",{children:"Interactive rebase - clean commits"})]}),t.jsx(ie.Para,{children:"Interactive rebase lets you edit your last N commits. You can squash small commits, fix messages, and reorder commits. This is perfect before opening a PR."}),t.jsxs(ie.Example,{children:[t.jsx(ie.ExampleTitle,{children:"Common actions in rebase editor"}),t.jsxs(ie.Bullets,{children:[t.jsxs("li",{children:[t.jsx("b",{children:"pick"})," - keep commit"]}),t.jsxs("li",{children:[t.jsx("b",{children:"reword"})," - change commit message"]}),t.jsxs("li",{children:[t.jsx("b",{children:"squash"})," - merge commit into previous and keep message"]}),t.jsxs("li",{children:[t.jsx("b",{children:"fixup"})," - merge commit into previous and drop message"]})]})]})]}),t.jsxs(ie.Section,{children:[t.jsxs(ie.SectionHead,{children:[t.jsx(ls,{}),t.jsx("h3",{children:"Conflict handling flow"})]}),t.jsxs(ie.Bullets,{children:[t.jsx("li",{children:"Rebase stops at the commit that caused conflict"}),t.jsx("li",{children:"You fix files, stage them, then continue"}),t.jsx("li",{children:"If things go wrong, abort and you are back to previous state"})]}),t.jsxs(ie.Example,{children:[t.jsx(ie.ExampleTitle,{children:"Commands during conflict"}),t.jsx(ie.CodeBlock,{children:t.jsx("pre",{children:`git status
# fix conflicts in files
git add .
git rebase --continue

# to cancel
git rebase --abort`})})]})]}),t.jsxs(ie.Section,{children:[t.jsxs(ie.SectionHead,{children:[t.jsx(Je,{}),t.jsx("h3",{children:"Command playground"})]}),t.jsx(ie.SnippetGrid,{children:x.map(h=>{const y=c===h.key;return t.jsxs(ie.SnippetCard,{children:[t.jsxs(ie.SnippetTop,{children:[t.jsxs("div",{children:[t.jsx(ie.SnippetTitle,{children:h.title}),t.jsx(ie.SnippetHint,{children:h.hint})]}),t.jsxs(ie.CopyBtn,{type:"button",onClick:()=>k(h.code,h.key),title:y?"Copied":"Copy",children:[y?t.jsx(we,{}):t.jsx(dr,{}),y?"Copied":"Copy"]})]}),t.jsx(ie.CodeBlock,{children:t.jsx("pre",{children:h.code})})]},h.key)})})]}),t.jsx(ie.FooterNote,{children:"Rebase is like editing the story of your branch. It makes history clean, but you must use it responsibly."})]})]})},te={Wrapper:a.div`
        margin-bottom: 10px;
        border: 1px solid var(--color-border);
        border-radius: 14px;
        background: var(--color-surface);
        overflow: hidden;
    `,Header:a.div`
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 12px;
        padding: 16px 18px;
        cursor: pointer;
        user-select: none;
        transition: background 140ms ease;

        &:hover {
            background: var(--color-surface-2);
        }

        &:focus-visible {
            outline: 2px solid var(--color-primary);
            outline-offset: 3px;
        }
    `,Title:a.div`
        display: flex;
        align-items: center;
        gap: 10px;
        font-weight: 900;
        font-size: 18px;
        color: var(--color-text-primary);

        svg {
            font-size: 20px;
            color: var(--color-primary);
        }
    `,Badge:a.span`
        margin-left: 10px;
        font-size: 12px;
        font-weight: 800;
        color: var(--color-text-secondary);
        background: color-mix(in srgb, var(--color-surface-2) 85%, transparent);
        border: 1px solid var(--color-border);
        padding: 4px 10px;
        border-radius: 999px;
    `,Toggle:a.div`
        font-size: 20px;
        color: var(--color-text-muted);
        flex: 0 0 auto;
    `,Preview:a.div`
        padding: 14px 18px 18px 18px;
        border-top: 1px solid var(--color-border);
        background: color-mix(in srgb, var(--color-surface-2) 55%, transparent);
    `,PreviewLine:a.div`
        color: var(--color-text-secondary);
        font-size: 14px;
        line-height: 1.5;

        & + & {
            margin-top: 6px;
        }
    `,Content:a.div`
        padding: 18px;
        border-top: 1px solid var(--color-border);
        background: var(--color-surface-2);
    `,Section:a.div`
        & + & {
            margin-top: 16px;
        }
    `,SectionHead:a.div`
        display: flex;
        align-items: center;
        gap: 10px;
        margin-bottom: 8px;

        svg {
            color: var(--color-accent);
            font-size: 18px;
        }

        h3 {
            font-size: 16px;
            font-weight: 900;
            color: var(--color-text-primary);
        }
    `,Para:a.p`
        margin-bottom: 10px;
        color: var(--color-text-secondary);
        font-size: 14px;
        line-height: 1.6;
    `,Bullets:a.ul`
        padding-left: 0;
        margin: 0;

        li {
            color: var(--color-text-secondary);
            font-size: 14px;
            line-height: 1.6;
            padding-left: 14px;
            position: relative;
            margin: 8px 0;
        }

        li::before {
            content: "-";
            position: absolute;
            left: 0;
            top: 0;
            color: var(--color-text-muted);
            font-weight: 900;
        }

        b {
            color: var(--color-text-primary);
            font-weight: 900;
        }
    `,Example:a.div`
        margin-top: 10px;
        border: 1px solid var(--color-border);
        background: color-mix(in srgb, var(--color-surface) 75%, transparent);
        border-radius: 12px;
        padding: 12px;
    `,ExampleTitle:a.div`
        font-weight: 900;
        font-size: 13px;
        color: var(--color-text-primary);
        margin-bottom: 8px;
    `,CodeBlock:a.div`
        background: var(--color-code-bg);
        border: 1px solid var(--color-code-border);
        border-radius: 12px;
        padding: 12px;
        overflow: auto;

        pre {
            margin: 0;
            white-space: pre;
            font-size: 12.5px;
            line-height: 1.55;
            color: var(--color-text-primary);
        }
    `,Note:a.div`
        display: flex;
        gap: 10px;
        align-items: flex-start;
        margin-top: 10px;
        border: 1px solid var(--color-border);
        background: color-mix(
            in srgb,
            var(--color-primary) 8%,
            var(--color-surface)
        );
        border-radius: 12px;
        padding: 12px;

        svg {
            margin-top: 2px;
            color: var(--color-primary);
            font-size: 18px;
            flex: 0 0 auto;
        }
    `,NoteTitle:a.div`
        font-weight: 900;
        color: var(--color-text-primary);
        font-size: 13px;
        margin-bottom: 2px;
    `,NoteText:a.div`
        color: var(--color-text-secondary);
        font-size: 13px;
        line-height: 1.55;
    `,Warn:a.div`
        display: flex;
        gap: 10px;
        align-items: flex-start;
        margin-top: 10px;
        border: 1px solid var(--color-border);
        background: color-mix(
            in srgb,
            var(--color-warning) 10%,
            var(--color-surface)
        );
        border-radius: 12px;
        padding: 12px;

        svg {
            margin-top: 2px;
            color: var(--color-warning);
            font-size: 18px;
            flex: 0 0 auto;
        }
    `,WarnTitle:a.div`
        font-weight: 900;
        color: var(--color-text-primary);
        font-size: 13px;
        margin-bottom: 2px;
    `,WarnText:a.div`
        color: var(--color-text-secondary);
        font-size: 13px;
        line-height: 1.55;
    `,SnippetGrid:a.div`
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
        gap: 12px;
        margin-top: 10px;
    `,SnippetCard:a.div`
        border: 1px solid var(--color-border);
        background: var(--color-surface);
        border-radius: 12px;
        overflow: hidden;
        transition:
            transform 140ms ease,
            border-color 140ms ease;

        &:hover {
            transform: translateY(-2px);
            border-color: var(--color-border-light);
        }
    `,SnippetTop:a.div`
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        gap: 12px;
        padding: 12px;
        border-bottom: 1px solid var(--color-border);
        background: color-mix(in srgb, var(--color-surface-2) 55%, transparent);
    `,SnippetTitle:a.div`
        font-weight: 900;
        color: var(--color-text-primary);
        font-size: 13px;
        line-height: 1.3;
        margin-bottom: 4px;
    `,SnippetHint:a.div`
        color: var(--color-text-muted);
        font-size: 12px;
    `,CopyBtn:a.button`
        display: inline-flex;
        align-items: center;
        gap: 8px;
        padding: 8px 10px;
        border-radius: 10px;
        border: 1px solid var(--color-border);
        background: color-mix(in srgb, var(--color-surface) 70%, transparent);
        color: var(--color-text-primary);
        font-weight: 900;
        font-size: 12px;
        transition:
            transform 140ms ease,
            border-color 140ms ease,
            background 140ms ease;

        svg {
            font-size: 14px;
            color: var(--color-accent);
        }

        &:hover {
            border-color: var(--color-border-light);
            transform: translateY(-1px);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 70%,
                transparent
            );
        }

        &:active {
            transform: translateY(0px);
        }
    `,FooterNote:a.div`
        margin-top: 14px;
        padding: 12px;
        border: 1px solid var(--color-border);
        border-radius: 12px;
        background: color-mix(in srgb, var(--color-surface) 70%, transparent);
        color: var(--color-text-secondary);
        font-size: 13px;
        line-height: 1.55;
    `},bm=()=>{const[s,d]=Y.useState(!1),[c,p]=Y.useState(""),x=Y.useMemo(()=>[{key:"ff",title:"Fast-forward merge",hint:"No merge commit - just move pointer",code:`# If main has not moved, Git can fast-forward
git checkout main
git merge feature/login

# Result: main now points to the same commit as feature/login`},{key:"noff",title:"Merge commit",hint:"Keep branch history visible",code:`# Force a merge commit even if fast-forward is possible
git checkout main
git merge --no-ff feature/login

# Result: a new merge commit with 2 parents`},{key:"conflicts",title:"Merge conflict flow",hint:"Resolve and finish merge",code:`git checkout main
git merge feature/login

# If conflict happens
git status
# fix files manually

git add .
git commit

# If you want to cancel merge
git merge --abort`},{key:"squash",title:"Squash merge",hint:"Make one commit out of many",code:`# Combine feature branch changes into 1 commit on main
git checkout main
git merge --squash feature/login
git commit -m "Login feature"

# Note: This is not a real merge commit`},{key:"prMethods",title:"PR merge methods concept",hint:"GitHub merge options",code:`# Merge commit - keeps all commits, adds merge commit
# Squash and merge - makes 1 commit on main
# Rebase and merge - replays commits, no merge commit`},{key:"recover",title:"Undo a bad merge",hint:"Two common ways",code:`# If merge not pushed and you want to discard it
git reset --hard ORIG_HEAD

# If merge was pushed, use revert (safe)
git revert -m 1 <merge-commit-hash>`}],[]),k=async(h,y)=>{try{await navigator.clipboard.writeText(h),p(y),window.setTimeout(()=>p(""),900)}catch{p("")}};return t.jsxs(te.Wrapper,{children:[t.jsxs(te.Header,{onClick:()=>d(h=>!h),role:"button",tabIndex:0,children:[t.jsxs(te.Title,{children:[t.jsx(tm,{}),"Merge",t.jsx(te.Badge,{children:"Combine branches safely"})]}),t.jsx(te.Toggle,{"aria-hidden":"true",children:s?t.jsx(pr,{}):t.jsx(ur,{})})]}),!s&&t.jsxs(te.Preview,{children:[t.jsx(te.PreviewLine,{children:"Merge combines histories. It keeps the story of how branches actually happened."}),t.jsx(te.PreviewLine,{children:"Learn fast-forward, merge commits, squash merge, conflicts, and safe undo."})]}),s&&t.jsxs(te.Content,{children:[t.jsxs(te.Section,{children:[t.jsxs(te.SectionHead,{children:[t.jsx(Ro,{}),t.jsx("h3",{children:"What merge does"})]}),t.jsx(te.Para,{children:"Merge combines changes from one branch into another. You usually merge a feature branch into main. Git tries to bring both histories together without losing commits."}),t.jsxs(te.Note,{children:[t.jsx(we,{}),t.jsxs("div",{children:[t.jsx(te.NoteTitle,{children:"Beginner mental model"}),t.jsx(te.NoteText,{children:'Merge is like saying "take everything from feature branch and add it into main". Sometimes it just moves the pointer, sometimes it creates a special merge commit.'})]})]})]}),t.jsxs(te.Section,{children:[t.jsxs(te.SectionHead,{children:[t.jsx(Zx,{}),t.jsx("h3",{children:"Fast-forward vs merge commit"})]}),t.jsxs(te.Bullets,{children:[t.jsxs("li",{children:[t.jsx("b",{children:"Fast-forward merge"})," - main did not move, so Git just moves main pointer forward"]}),t.jsxs("li",{children:[t.jsx("b",{children:"Merge commit"})," - both branches moved, so Git creates a new commit that has two parents"]})]}),t.jsxs(te.Example,{children:[t.jsx(te.ExampleTitle,{children:"Simple example"}),t.jsxs(te.Bullets,{children:[t.jsx("li",{children:"Main is at commit A"}),t.jsx("li",{children:"Feature branch adds commits B and C"}),t.jsx("li",{children:"If main stayed at A, merge can fast-forward to C"}),t.jsx("li",{children:"If main also got commits, Git creates a merge commit"})]})]})]}),t.jsxs(te.Section,{children:[t.jsxs(te.SectionHead,{children:[t.jsx(Wr,{}),t.jsx("h3",{children:"Merge strategies you will see"})]}),t.jsxs(te.Bullets,{children:[t.jsxs("li",{children:[t.jsx("b",{children:"Default merge"})," - Git decides fast-forward or merge commit based on history"]}),t.jsxs("li",{children:[t.jsx("b",{children:"--no-ff"})," - always create a merge commit (makes branch boundaries visible)"]}),t.jsxs("li",{children:[t.jsx("b",{children:"--squash"})," - combine all feature commits into one commit on main (not a real merge commit)"]})]}),t.jsxs(te.Warn,{children:[t.jsx(Qe,{}),t.jsxs("div",{children:[t.jsx(te.WarnTitle,{children:"Squash merge note"}),t.jsx(te.WarnText,{children:"Squash makes history clean, but it loses individual commit history from the feature branch on main. Great for small features. Not great if you need detailed commit trail."})]})]})]}),t.jsxs(te.Section,{children:[t.jsxs(te.SectionHead,{children:[t.jsx(za,{}),t.jsx("h3",{children:"GitHub PR merge methods"})]}),t.jsxs(te.Bullets,{children:[t.jsxs("li",{children:[t.jsx("b",{children:"Merge commit"})," - keeps all commits and adds a merge commit"]}),t.jsxs("li",{children:[t.jsx("b",{children:"Squash and merge"})," - makes one commit on main"]}),t.jsxs("li",{children:[t.jsx("b",{children:"Rebase and merge"})," - replays commits, no merge commit, history is linear"]})]}),t.jsxs(te.Example,{children:[t.jsx(te.ExampleTitle,{children:"Quick selection rule"}),t.jsxs(te.Bullets,{children:[t.jsx("li",{children:"Use merge commit when you want to preserve branch context"}),t.jsx("li",{children:"Use squash when you want one clean commit per PR"}),t.jsx("li",{children:"Use rebase and merge when team prefers linear history"})]})]})]}),t.jsxs(te.Section,{children:[t.jsxs(te.SectionHead,{children:[t.jsx(Je,{}),t.jsx("h3",{children:"Merge conflicts - what and why"})]}),t.jsx(te.Para,{children:"A merge conflict happens when Git cannot automatically combine changes. Usually both branches edited the same lines in the same file. Git stops and asks you to decide the final content."}),t.jsxs(te.Example,{children:[t.jsx(te.ExampleTitle,{children:"Conflict handling flow"}),t.jsxs(te.Bullets,{children:[t.jsx("li",{children:"Run merge"}),t.jsx("li",{children:"Git shows conflicted files"}),t.jsx("li",{children:"Edit files to correct final version"}),t.jsx("li",{children:"git add ."}),t.jsx("li",{children:"git commit to finish merge"})]})]}),t.jsxs(te.Note,{children:[t.jsx(we,{}),t.jsxs("div",{children:[t.jsx(te.NoteTitle,{children:"Helpful tip"}),t.jsx(te.NoteText,{children:"Use git status to see exactly which files are conflicted. Solve one file at a time. Keep changes small."})]})]})]}),t.jsxs(te.Section,{children:[t.jsxs(te.SectionHead,{children:[t.jsx(Je,{}),t.jsx("h3",{children:"Command playground"})]}),t.jsx(te.SnippetGrid,{children:x.map(h=>{const y=c===h.key;return t.jsxs(te.SnippetCard,{children:[t.jsxs(te.SnippetTop,{children:[t.jsxs("div",{children:[t.jsx(te.SnippetTitle,{children:h.title}),t.jsx(te.SnippetHint,{children:h.hint})]}),t.jsxs(te.CopyBtn,{type:"button",onClick:()=>k(h.code,h.key),title:y?"Copied":"Copy",children:[y?t.jsx(we,{}):t.jsx(dr,{}),y?"Copied":"Copy"]})]}),t.jsx(te.CodeBlock,{children:t.jsx("pre",{children:h.code})})]},h.key)})})]}),t.jsx(te.FooterNote,{children:"Merge is the safest default for teams because it does not rewrite history. Rebase is cleaner, but merge is honest."})]})]})},xe={Wrapper:a.div`
        margin-bottom: 10px;
        border: 1px solid var(--color-border);
        border-radius: 14px;
        background: var(--color-surface);
        overflow: hidden;
    `,Header:a.div`
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 12px;
        padding: 16px 18px;
        cursor: pointer;
        user-select: none;
        transition: background 140ms ease;

        &:hover {
            background: var(--color-surface-2);
        }

        &:focus-visible {
            outline: 2px solid var(--color-primary);
            outline-offset: 3px;
        }
    `,Title:a.div`
        display: flex;
        align-items: center;
        gap: 10px;
        font-weight: 900;
        font-size: 18px;
        color: var(--color-text-primary);

        svg {
            font-size: 20px;
            color: var(--color-primary);
        }
    `,Badge:a.span`
        margin-left: 10px;
        font-size: 12px;
        font-weight: 800;
        color: var(--color-text-secondary);
        background: color-mix(in srgb, var(--color-surface-2) 85%, transparent);
        border: 1px solid var(--color-border);
        padding: 4px 10px;
        border-radius: 999px;
    `,Toggle:a.div`
        font-size: 20px;
        color: var(--color-text-muted);
        flex: 0 0 auto;
    `,Preview:a.div`
        padding: 14px 18px 18px 18px;
        border-top: 1px solid var(--color-border);
        background: color-mix(in srgb, var(--color-surface-2) 55%, transparent);
    `,PreviewLine:a.div`
        color: var(--color-text-secondary);
        font-size: 14px;
        line-height: 1.5;

        & + & {
            margin-top: 6px;
        }
    `,Content:a.div`
        padding: 18px;
        border-top: 1px solid var(--color-border);
        background: var(--color-surface-2);
    `,Section:a.div`
        & + & {
            margin-top: 16px;
        }
    `,SectionHead:a.div`
        display: flex;
        align-items: center;
        gap: 10px;
        margin-bottom: 8px;

        svg {
            color: var(--color-accent);
            font-size: 18px;
        }

        h3 {
            font-size: 16px;
            font-weight: 900;
            color: var(--color-text-primary);
        }
    `,Para:a.p`
        margin-bottom: 10px;
        color: var(--color-text-secondary);
        font-size: 14px;
        line-height: 1.6;
    `,Bullets:a.ul`
        padding-left: 0;
        margin: 0;

        li {
            color: var(--color-text-secondary);
            font-size: 14px;
            line-height: 1.6;
            padding-left: 14px;
            position: relative;
            margin: 8px 0;
        }

        li::before {
            content: "-";
            position: absolute;
            left: 0;
            top: 0;
            color: var(--color-text-muted);
            font-weight: 900;
        }

        b {
            color: var(--color-text-primary);
            font-weight: 900;
        }
    `,Example:a.div`
        margin-top: 10px;
        border: 1px solid var(--color-border);
        background: color-mix(in srgb, var(--color-surface) 75%, transparent);
        border-radius: 12px;
        padding: 12px;
    `,ExampleTitle:a.div`
        font-weight: 900;
        font-size: 13px;
        color: var(--color-text-primary);
        margin-bottom: 8px;
    `,CodeBlock:a.div`
        background: var(--color-code-bg);
        border: 1px solid var(--color-code-border);
        border-radius: 12px;
        padding: 12px;
        overflow: auto;

        pre {
            margin: 0;
            white-space: pre;
            font-size: 12.5px;
            line-height: 1.55;
            color: var(--color-text-primary);
        }
    `,Note:a.div`
        display: flex;
        gap: 10px;
        align-items: flex-start;
        margin-top: 10px;
        border: 1px solid var(--color-border);
        background: color-mix(
            in srgb,
            var(--color-primary) 8%,
            var(--color-surface)
        );
        border-radius: 12px;
        padding: 12px;

        svg {
            margin-top: 2px;
            color: var(--color-primary);
            font-size: 18px;
            flex: 0 0 auto;
        }
    `,NoteTitle:a.div`
        font-weight: 900;
        color: var(--color-text-primary);
        font-size: 13px;
        margin-bottom: 2px;
    `,NoteText:a.div`
        color: var(--color-text-secondary);
        font-size: 13px;
        line-height: 1.55;
    `,Warn:a.div`
        display: flex;
        gap: 10px;
        align-items: flex-start;
        margin-top: 10px;
        border: 1px solid var(--color-border);
        background: color-mix(
            in srgb,
            var(--color-warning) 10%,
            var(--color-surface)
        );
        border-radius: 12px;
        padding: 12px;

        svg {
            margin-top: 2px;
            color: var(--color-warning);
            font-size: 18px;
            flex: 0 0 auto;
        }
    `,WarnTitle:a.div`
        font-weight: 900;
        color: var(--color-text-primary);
        font-size: 13px;
        margin-bottom: 2px;
    `,WarnText:a.div`
        color: var(--color-text-secondary);
        font-size: 13px;
        line-height: 1.55;
    `,SnippetGrid:a.div`
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
        gap: 12px;
        margin-top: 10px;
    `,SnippetCard:a.div`
        border: 1px solid var(--color-border);
        background: var(--color-surface);
        border-radius: 12px;
        overflow: hidden;
        transition:
            transform 140ms ease,
            border-color 140ms ease;

        &:hover {
            transform: translateY(-2px);
            border-color: var(--color-border-light);
        }
    `,SnippetTop:a.div`
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        gap: 12px;
        padding: 12px;
        border-bottom: 1px solid var(--color-border);
        background: color-mix(in srgb, var(--color-surface-2) 55%, transparent);
    `,SnippetTitle:a.div`
        font-weight: 900;
        color: var(--color-text-primary);
        font-size: 13px;
        line-height: 1.3;
        margin-bottom: 4px;
    `,SnippetHint:a.div`
        color: var(--color-text-muted);
        font-size: 12px;
    `,CopyBtn:a.button`
        display: inline-flex;
        align-items: center;
        gap: 8px;
        padding: 8px 10px;
        border-radius: 10px;
        border: 1px solid var(--color-border);
        background: color-mix(in srgb, var(--color-surface) 70%, transparent);
        color: var(--color-text-primary);
        font-weight: 900;
        font-size: 12px;
        transition:
            transform 140ms ease,
            border-color 140ms ease,
            background 140ms ease;

        svg {
            font-size: 14px;
            color: var(--color-accent);
        }

        &:hover {
            border-color: var(--color-border-light);
            transform: translateY(-1px);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 70%,
                transparent
            );
        }

        &:active {
            transform: translateY(0px);
        }
    `,FooterNote:a.div`
        margin-top: 14px;
        padding: 12px;
        border: 1px solid var(--color-border);
        border-radius: 12px;
        background: color-mix(in srgb, var(--color-surface) 70%, transparent);
        color: var(--color-text-secondary);
        font-size: 13px;
        line-height: 1.55;
    `},km=()=>{const[s,d]=Y.useState(!1),[c,p]=Y.useState(""),x=Y.useMemo(()=>[{key:"where",title:"Where hooks live",hint:".git folder local hooks",code:`# Git hooks exist inside your repo folder
# Path:
.git/hooks

# List sample hooks
ls .git/hooks`},{key:"precommitSimple",title:"Simple pre-commit hook",hint:"Block commits if checks fail",code:`# Create file:
# .git/hooks/pre-commit

#!/bin/sh
echo "Running pre-commit checks"

npm run lint
if [ $? -ne 0 ]; then
  echo "Lint failed - commit blocked"
  exit 1
fi

npm test
if [ $? -ne 0 ]; then
  echo "Tests failed - commit blocked"
  exit 1
fi

exit 0`},{key:"chmod",title:"Make hook executable",hint:"Important step",code:"chmod +x .git/hooks/pre-commit"},{key:"prepush",title:"Simple pre-push hook",hint:"Run tests before pushing",code:`# Create file:
# .git/hooks/pre-push

#!/bin/sh
echo "Running pre-push checks"

npm test
if [ $? -ne 0 ]; then
  echo "Tests failed - push blocked"
  exit 1
fi

exit 0`},{key:"commitmsg",title:"commit-msg hook",hint:"Enforce message format",code:`# Create file:
# .git/hooks/commit-msg

#!/bin/sh
MSG_FILE="$1"
MSG="$(cat "$MSG_FILE")"

# Example rule: minimum 10 chars
if [ "$(printf "%s" "$MSG" | wc -c)" -lt 10 ]; then
  echo "Commit message too short - add more detail"
  exit 1
fi

exit 0`},{key:"security",title:"Basic secret check idea",hint:"Block accidental key commits",code:`# Very simple check idea (not perfect)
# Look for common key patterns before commit

git diff --cached | grep -E "AKIA|BEGIN PRIVATE KEY|SECRET_KEY" >/dev/null
if [ $? -eq 0 ]; then
  echo "Possible secret detected in staged changes - commit blocked"
  exit 1
fi

exit 0`},{key:"share",title:"Sharing hooks with team",hint:".git/hooks not versioned",code:`# .git/hooks is not committed to git
# Team friendly approach:
# 1) keep hooks in a folder, example:
#    scripts/hooks/pre-commit
# 2) copy/install them during setup

# Example install script idea:
cp scripts/hooks/pre-commit .git/hooks/pre-commit
chmod +x .git/hooks/pre-commit`}],[]),k=async(h,y)=>{try{await navigator.clipboard.writeText(h),p(y),window.setTimeout(()=>p(""),900)}catch{p("")}};return t.jsxs(xe.Wrapper,{children:[t.jsxs(xe.Header,{onClick:()=>d(h=>!h),role:"button",tabIndex:0,children:[t.jsxs(xe.Title,{children:[t.jsx(Je,{}),"Hooks",t.jsx(xe.Badge,{children:"Automate checks in Git flow"})]}),t.jsx(xe.Toggle,{"aria-hidden":"true",children:s?t.jsx(pr,{}):t.jsx(ur,{})})]}),!s&&t.jsxs(xe.Preview,{children:[t.jsx(xe.PreviewLine,{children:"Git hooks are scripts that run automatically on events like commit and push."}),t.jsx(xe.PreviewLine,{children:"Use them to stop bad commits early - lint, tests, formatting, secret checks."})]}),s&&t.jsxs(xe.Content,{children:[t.jsxs(xe.Section,{children:[t.jsxs(xe.SectionHead,{children:[t.jsx(ln,{}),t.jsx("h3",{children:"What are Git hooks"})]}),t.jsx(xe.Para,{children:"A Git hook is a script that Git runs automatically when a specific action happens. Example actions: before commit, after commit, before push, commit message validation."}),t.jsxs(xe.Note,{children:[t.jsx(we,{}),t.jsxs("div",{children:[t.jsx(xe.NoteTitle,{children:"Beginner mental model"}),t.jsx(xe.NoteText,{children:'Hooks are like "automatic gatekeepers". If rules fail, they block the action. This prevents broken code from entering history.'})]})]})]}),t.jsxs(xe.Section,{children:[t.jsxs(xe.SectionHead,{children:[t.jsx(rm,{}),t.jsx("h3",{children:"Common hooks you will use"})]}),t.jsxs(xe.Bullets,{children:[t.jsxs("li",{children:[t.jsx("b",{children:"pre-commit"})," - run checks before commit is created"]}),t.jsxs("li",{children:[t.jsx("b",{children:"commit-msg"})," - validate commit message rules"]}),t.jsxs("li",{children:[t.jsx("b",{children:"pre-push"})," - run checks before pushing to remote"]})]}),t.jsxs(xe.Example,{children:[t.jsx(xe.ExampleTitle,{children:"Why hooks matter"}),t.jsxs(xe.Bullets,{children:[t.jsx("li",{children:"Catch lint and formatting issues early"}),t.jsx("li",{children:"Stop commits that break tests"}),t.jsx("li",{children:"Prevent accidental secrets like API keys"}),t.jsx("li",{children:"Keep team standards consistent"})]})]})]}),t.jsxs(xe.Section,{children:[t.jsxs(xe.SectionHead,{children:[t.jsx(Nr,{}),t.jsx("h3",{children:"Where hooks live"})]}),t.jsx(xe.Para,{children:'Git hooks live inside your repo at ".git/hooks". These files are local to your machine. That means hooks are not shared automatically when you push code to GitHub.'}),t.jsxs(xe.Warn,{children:[t.jsx(Qe,{}),t.jsxs("div",{children:[t.jsx(xe.WarnTitle,{children:"Important limitation"}),t.jsx(xe.WarnText,{children:'".git/hooks" is not versioned. If you want the whole team to use hooks, keep hook scripts in a tracked folder and install them with a setup script.'})]})]})]}),t.jsxs(xe.Section,{children:[t.jsxs(xe.SectionHead,{children:[t.jsx($r,{}),t.jsx("h3",{children:"Practical hook rules (real world)"})]}),t.jsxs(xe.Bullets,{children:[t.jsx("li",{children:"pre-commit - run lint, formatting, type checks"}),t.jsx("li",{children:"pre-push - run full test suite or critical tests"}),t.jsx("li",{children:"commit-msg - enforce message format, ticket id, minimum length"}),t.jsx("li",{children:"security - block common secret patterns"})]}),t.jsxs(xe.Example,{children:[t.jsx(xe.ExampleTitle,{children:"Performance tip"}),t.jsx(xe.Para,{children:"Keep pre-commit fast. People commit often. Run light checks here. Keep heavy checks in pre-push or CI."})]})]}),t.jsxs(xe.Section,{children:[t.jsxs(xe.SectionHead,{children:[t.jsx(Bo,{}),t.jsx("h3",{children:"Command playground"})]}),t.jsx(xe.SnippetGrid,{children:x.map(h=>{const y=c===h.key;return t.jsxs(xe.SnippetCard,{children:[t.jsxs(xe.SnippetTop,{children:[t.jsxs("div",{children:[t.jsx(xe.SnippetTitle,{children:h.title}),t.jsx(xe.SnippetHint,{children:h.hint})]}),t.jsxs(xe.CopyBtn,{type:"button",onClick:()=>k(h.code,h.key),title:y?"Copied":"Copy",children:[y?t.jsx(we,{}):t.jsx(dr,{}),y?"Copied":"Copy"]})]}),t.jsx(xe.CodeBlock,{children:t.jsx("pre",{children:h.code})})]},h.key)})})]}),t.jsx(xe.FooterNote,{children:"Hooks catch problems early, but CI is still the final guard. Use hooks for fast feedback and CI for full reliability."})]})]})},se={Wrapper:a.div`
        margin-bottom: 10px;
        border: 1px solid var(--color-border);
        border-radius: 14px;
        background: var(--color-surface);
        overflow: hidden;
    `,Header:a.div`
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 12px;
        padding: 16px 18px;
        cursor: pointer;
        user-select: none;
        transition: background 140ms ease;

        &:hover {
            background: var(--color-surface-2);
        }

        &:focus-visible {
            outline: 2px solid var(--color-primary);
            outline-offset: 3px;
        }
    `,Title:a.div`
        display: flex;
        align-items: center;
        gap: 10px;
        font-weight: 900;
        font-size: 18px;
        color: var(--color-text-primary);

        svg {
            font-size: 20px;
            color: var(--color-primary);
        }
    `,Badge:a.span`
        margin-left: 10px;
        font-size: 12px;
        font-weight: 800;
        color: var(--color-text-secondary);
        background: color-mix(in srgb, var(--color-surface-2) 85%, transparent);
        border: 1px solid var(--color-border);
        padding: 4px 10px;
        border-radius: 999px;
    `,Toggle:a.div`
        font-size: 20px;
        color: var(--color-text-muted);
        flex: 0 0 auto;
    `,Preview:a.div`
        padding: 14px 18px 18px 18px;
        border-top: 1px solid var(--color-border);
        background: color-mix(in srgb, var(--color-surface-2) 55%, transparent);
    `,PreviewLine:a.div`
        color: var(--color-text-secondary);
        font-size: 14px;
        line-height: 1.5;

        & + & {
            margin-top: 6px;
        }
    `,Content:a.div`
        padding: 18px;
        border-top: 1px solid var(--color-border);
        background: var(--color-surface-2);
    `,Section:a.div`
        & + & {
            margin-top: 16px;
        }
    `,SectionHead:a.div`
        display: flex;
        align-items: center;
        gap: 10px;
        margin-bottom: 8px;

        svg {
            color: var(--color-accent);
            font-size: 18px;
        }

        h3 {
            font-size: 16px;
            font-weight: 900;
            color: var(--color-text-primary);
        }
    `,Para:a.p`
        margin-bottom: 10px;
        color: var(--color-text-secondary);
        font-size: 14px;
        line-height: 1.6;
    `,Bullets:a.ul`
        padding-left: 0;
        margin: 0;

        li {
            color: var(--color-text-secondary);
            font-size: 14px;
            line-height: 1.6;
            padding-left: 14px;
            position: relative;
            margin: 8px 0;
        }

        li::before {
            content: "-";
            position: absolute;
            left: 0;
            top: 0;
            color: var(--color-text-muted);
            font-weight: 900;
        }

        b {
            color: var(--color-text-primary);
            font-weight: 900;
        }
    `,Example:a.div`
        margin-top: 10px;
        border: 1px solid var(--color-border);
        background: color-mix(in srgb, var(--color-surface) 75%, transparent);
        border-radius: 12px;
        padding: 12px;
    `,ExampleTitle:a.div`
        font-weight: 900;
        font-size: 13px;
        color: var(--color-text-primary);
        margin-bottom: 8px;
    `,CodeBlock:a.div`
        background: var(--color-code-bg);
        border: 1px solid var(--color-code-border);
        border-radius: 12px;
        padding: 12px;
        overflow: auto;

        pre {
            margin: 0;
            white-space: pre;
            font-size: 12.5px;
            line-height: 1.55;
            color: var(--color-text-primary);
        }
    `,Note:a.div`
        display: flex;
        gap: 10px;
        align-items: flex-start;
        margin-top: 10px;
        border: 1px solid var(--color-border);
        background: color-mix(
            in srgb,
            var(--color-primary) 8%,
            var(--color-surface)
        );
        border-radius: 12px;
        padding: 12px;

        svg {
            margin-top: 2px;
            color: var(--color-primary);
            font-size: 18px;
            flex: 0 0 auto;
        }
    `,NoteTitle:a.div`
        font-weight: 900;
        color: var(--color-text-primary);
        font-size: 13px;
        margin-bottom: 2px;
    `,NoteText:a.div`
        color: var(--color-text-secondary);
        font-size: 13px;
        line-height: 1.55;
    `,Warn:a.div`
        display: flex;
        gap: 10px;
        align-items: flex-start;
        margin-top: 10px;
        border: 1px solid var(--color-border);
        background: color-mix(
            in srgb,
            var(--color-warning) 10%,
            var(--color-surface)
        );
        border-radius: 12px;
        padding: 12px;

        svg {
            margin-top: 2px;
            color: var(--color-warning);
            font-size: 18px;
            flex: 0 0 auto;
        }
    `,WarnTitle:a.div`
        font-weight: 900;
        color: var(--color-text-primary);
        font-size: 13px;
        margin-bottom: 2px;
    `,WarnText:a.div`
        color: var(--color-text-secondary);
        font-size: 13px;
        line-height: 1.55;
    `,SnippetGrid:a.div`
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
        gap: 12px;
        margin-top: 10px;
    `,SnippetCard:a.div`
        border: 1px solid var(--color-border);
        background: var(--color-surface);
        border-radius: 12px;
        overflow: hidden;
        transition:
            transform 140ms ease,
            border-color 140ms ease;

        &:hover {
            transform: translateY(-2px);
            border-color: var(--color-border-light);
        }
    `,SnippetTop:a.div`
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        gap: 12px;
        padding: 12px;
        border-bottom: 1px solid var(--color-border);
        background: color-mix(in srgb, var(--color-surface-2) 55%, transparent);
    `,SnippetTitle:a.div`
        font-weight: 900;
        color: var(--color-text-primary);
        font-size: 13px;
        line-height: 1.3;
        margin-bottom: 4px;
    `,SnippetHint:a.div`
        color: var(--color-text-muted);
        font-size: 12px;
    `,CopyBtn:a.button`
        display: inline-flex;
        align-items: center;
        gap: 8px;
        padding: 8px 10px;
        border-radius: 10px;
        border: 1px solid var(--color-border);
        background: color-mix(in srgb, var(--color-surface) 70%, transparent);
        color: var(--color-text-primary);
        font-weight: 900;
        font-size: 12px;
        transition:
            transform 140ms ease,
            border-color 140ms ease,
            background 140ms ease;

        svg {
            font-size: 14px;
            color: var(--color-accent);
        }

        &:hover {
            border-color: var(--color-border-light);
            transform: translateY(-1px);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 70%,
                transparent
            );
        }

        &:active {
            transform: translateY(0px);
        }
    `,FooterNote:a.div`
        margin-top: 14px;
        padding: 12px;
        border: 1px solid var(--color-border);
        border-radius: 12px;
        background: color-mix(in srgb, var(--color-surface) 70%, transparent);
        color: var(--color-text-secondary);
        font-size: 13px;
        line-height: 1.55;
    `},wm=()=>{const[s,d]=Y.useState(!1),[c,p]=Y.useState(""),x=Y.useMemo(()=>[{key:"whatIs",title:"What is a container",hint:"Process with isolation",code:`# A container is not a VM
# It is a process running on your host OS
# With isolation and limits

# View running containers
docker ps`},{key:"lifecycle",title:"Container lifecycle",hint:"run, stop, start, rm",code:`# Run a container
docker run --name demo-nginx -p 8080:80 nginx

# Stop and start
docker stop demo-nginx
docker start demo-nginx

# Remove (container must be stopped)
docker rm demo-nginx`},{key:"execLogs",title:"Inspect, logs, exec",hint:"Debug like a pro",code:`# See logs
docker logs demo-nginx

# Enter container shell
docker exec -it demo-nginx sh

# Inspect config
docker inspect demo-nginx | head`},{key:"resources",title:"Resource limits",hint:"CPU and memory limits",code:`# Limit CPU and memory
docker run --name limited   --cpus="0.5"   --memory="256m"   -p 8081:80 nginx`},{key:"volumes",title:"Volumes",hint:"Persist data outside container",code:`# Named volume
docker volume create app-data

docker run --name demo-db   -v app-data:/var/lib/data   alpine sh -c "echo hello > /var/lib/data/file.txt && sleep 9999"

# Data stays even if container is removed`},{key:"networks",title:"Networking basics",hint:"Container to container communication",code:`# Create a user network
docker network create app-net

# Run two containers on same network
docker run -d --name api --network app-net nginx
docker run -it --rm --network app-net alpine sh

# From alpine shell you can hit:
# wget -qO- http://api`},{key:"cleanup",title:"Cleanup commands",hint:"Remove unused stuff safely",code:`# Remove stopped containers
docker container prune

# Remove unused images
docker image prune

# Remove unused networks
docker network prune`}],[]),k=async(h,y)=>{try{await navigator.clipboard.writeText(h),p(y),window.setTimeout(()=>p(""),900)}catch{p("")}};return t.jsxs(se.Wrapper,{children:[t.jsxs(se.Header,{onClick:()=>d(h=>!h),role:"button",tabIndex:0,children:[t.jsxs(se.Title,{children:[t.jsx(ss,{}),"Containers",t.jsx(se.Badge,{children:"Isolation without a VM"})]}),t.jsx(se.Toggle,{"aria-hidden":"true",children:s?t.jsx(pr,{}):t.jsx(ur,{})})]}),!s&&t.jsxs(se.Preview,{children:[t.jsx(se.PreviewLine,{children:"Containers are lightweight isolated environments for running apps."}),t.jsx(se.PreviewLine,{children:"They are processes with isolation and resource limits, not full virtual machines."})]}),s&&t.jsxs(se.Content,{children:[t.jsxs(se.Section,{children:[t.jsxs(se.SectionHead,{children:[t.jsx(Wr,{}),t.jsx("h3",{children:"What is a container"})]}),t.jsx(se.Para,{children:"A container is a process running on your host operating system, but it feels like its own small machine. It gets isolation for filesystem, network, and process view. It can also have CPU and memory limits."}),t.jsxs(se.Note,{children:[t.jsx(we,{}),t.jsxs("div",{children:[t.jsx(se.NoteTitle,{children:"Beginner mental model"}),t.jsx(se.NoteText,{children:"A container is like a sandbox for an app. Same host kernel, but separated view and controlled resources."})]})]})]}),t.jsxs(se.Section,{children:[t.jsxs(se.SectionHead,{children:[t.jsx(Ta,{}),t.jsx("h3",{children:"Why containers are fast"})]}),t.jsxs(se.Bullets,{children:[t.jsxs("li",{children:[t.jsx("b",{children:"No full OS per app"})," - containers share the host kernel"]}),t.jsxs("li",{children:[t.jsx("b",{children:"Small images"})," - ship only what app needs"]}),t.jsxs("li",{children:[t.jsx("b",{children:"Quick start"})," - starting a process is faster than booting a VM"]})]}),t.jsxs(se.Example,{children:[t.jsx(se.ExampleTitle,{children:"VM vs container (simple)"}),t.jsxs(se.Bullets,{children:[t.jsx("li",{children:"VM - includes full guest OS, slower boot, heavier"}),t.jsx("li",{children:"Container - uses host OS kernel, fast start, lighter"})]})]})]}),t.jsxs(se.Section,{children:[t.jsxs(se.SectionHead,{children:[t.jsx($r,{}),t.jsx("h3",{children:"Isolation basics"})]}),t.jsxs(se.Bullets,{children:[t.jsxs("li",{children:[t.jsx("b",{children:"Process isolation"})," - container sees its own processes"]}),t.jsxs("li",{children:[t.jsx("b",{children:"Filesystem isolation"})," - container gets its own file tree"]}),t.jsxs("li",{children:[t.jsx("b",{children:"Network isolation"})," - container has its own network namespace"]}),t.jsxs("li",{children:[t.jsx("b",{children:"Resource limits"})," - container can be limited to specific CPU and RAM"]})]}),t.jsxs(se.Warn,{children:[t.jsx(Qe,{}),t.jsxs("div",{children:[t.jsx(se.WarnTitle,{children:"Security note"}),t.jsx(se.WarnText,{children:"Containers are not perfect security boundaries like VMs. Use least privilege, avoid running as root, and keep images minimal."})]})]})]}),t.jsxs(se.Section,{children:[t.jsxs(se.SectionHead,{children:[t.jsx(Tp,{}),t.jsx("h3",{children:"Data persistence - volumes"})]}),t.jsx(se.Para,{children:"Containers are designed to be disposable. If you remove a container, its internal writable layer is gone. For data you want to keep, use volumes."}),t.jsxs(se.Example,{children:[t.jsx(se.ExampleTitle,{children:"Volume concept"}),t.jsxs(se.Bullets,{children:[t.jsx("li",{children:"Without volume - data disappears when container is deleted"}),t.jsx("li",{children:"With volume - data stays on host-managed storage"})]})]})]}),t.jsxs(se.Section,{children:[t.jsxs(se.SectionHead,{children:[t.jsx(Na,{}),t.jsx("h3",{children:"Networking - how containers talk"})]}),t.jsxs(se.Bullets,{children:[t.jsxs("li",{children:[t.jsx("b",{children:"Port mapping"})," - expose container port to host, example -p 8080:80"]}),t.jsxs("li",{children:[t.jsx("b",{children:"User networks"})," - containers can resolve each other by name"]}),t.jsxs("li",{children:[t.jsx("b",{children:"DNS inside Docker"})," - container name becomes hostname on the same network"]})]}),t.jsxs(se.Note,{children:[t.jsx(Je,{}),t.jsxs("div",{children:[t.jsx(se.NoteTitle,{children:"Common beginner confusion"}),t.jsx(se.NoteText,{children:'"localhost" inside a container means the container itself, not your host machine.'})]})]})]}),t.jsxs(se.Section,{children:[t.jsxs(se.SectionHead,{children:[t.jsx(Nr,{}),t.jsx("h3",{children:"Command playground"})]}),t.jsx(se.SnippetGrid,{children:x.map(h=>{const y=c===h.key;return t.jsxs(se.SnippetCard,{children:[t.jsxs(se.SnippetTop,{children:[t.jsxs("div",{children:[t.jsx(se.SnippetTitle,{children:h.title}),t.jsx(se.SnippetHint,{children:h.hint})]}),t.jsxs(se.CopyBtn,{type:"button",onClick:()=>k(h.code,h.key),title:y?"Copied":"Copy",children:[y?t.jsx(we,{}):t.jsx(dr,{}),y?"Copied":"Copy"]})]}),t.jsx(se.CodeBlock,{children:t.jsx("pre",{children:h.code})})]},h.key)})})]}),t.jsx(se.FooterNote,{children:"Think of containers as a repeatable runtime package. If your app runs in a container, it becomes much easier to deploy the same way everywhere."})]})]})},pe={Wrapper:a.div`
        margin-bottom: 10px;
        border: 1px solid var(--color-border);
        border-radius: 14px;
        background: var(--color-surface);
        overflow: hidden;
    `,Header:a.div`
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 12px;
        padding: 16px 18px;
        cursor: pointer;
        user-select: none;
        transition: background 140ms ease;

        &:hover {
            background: var(--color-surface-2);
        }

        &:focus-visible {
            outline: 2px solid var(--color-primary);
            outline-offset: 3px;
        }
    `,Title:a.div`
        display: flex;
        align-items: center;
        gap: 10px;
        font-weight: 900;
        font-size: 18px;
        color: var(--color-text-primary);

        svg {
            font-size: 20px;
            color: var(--color-primary);
        }
    `,Badge:a.span`
        margin-left: 10px;
        font-size: 12px;
        font-weight: 800;
        color: var(--color-text-secondary);
        background: color-mix(in srgb, var(--color-surface-2) 85%, transparent);
        border: 1px solid var(--color-border);
        padding: 4px 10px;
        border-radius: 999px;
    `,Toggle:a.div`
        font-size: 20px;
        color: var(--color-text-muted);
        flex: 0 0 auto;
    `,Preview:a.div`
        padding: 14px 18px 18px 18px;
        border-top: 1px solid var(--color-border);
        background: color-mix(in srgb, var(--color-surface-2) 55%, transparent);
    `,PreviewLine:a.div`
        color: var(--color-text-secondary);
        font-size: 14px;
        line-height: 1.5;

        & + & {
            margin-top: 6px;
        }
    `,Content:a.div`
        padding: 18px;
        border-top: 1px solid var(--color-border);
        background: var(--color-surface-2);
    `,Section:a.div`
        & + & {
            margin-top: 16px;
        }
    `,SectionHead:a.div`
        display: flex;
        align-items: center;
        gap: 10px;
        margin-bottom: 8px;

        svg {
            color: var(--color-accent);
            font-size: 18px;
        }

        h3 {
            font-size: 16px;
            font-weight: 900;
            color: var(--color-text-primary);
        }
    `,Para:a.p`
        margin-bottom: 10px;
        color: var(--color-text-secondary);
        font-size: 14px;
        line-height: 1.6;
    `,Bullets:a.ul`
        padding-left: 0;
        margin: 0;

        li {
            color: var(--color-text-secondary);
            font-size: 14px;
            line-height: 1.6;
            padding-left: 14px;
            position: relative;
            margin: 8px 0;
        }

        li::before {
            content: "-";
            position: absolute;
            left: 0;
            top: 0;
            color: var(--color-text-muted);
            font-weight: 900;
        }

        b {
            color: var(--color-text-primary);
            font-weight: 900;
        }
    `,Example:a.div`
        margin-top: 10px;
        border: 1px solid var(--color-border);
        background: color-mix(in srgb, var(--color-surface) 75%, transparent);
        border-radius: 12px;
        padding: 12px;
    `,ExampleTitle:a.div`
        font-weight: 900;
        font-size: 13px;
        color: var(--color-text-primary);
        margin-bottom: 8px;
    `,CodeBlock:a.div`
        background: var(--color-code-bg);
        border: 1px solid var(--color-code-border);
        border-radius: 12px;
        padding: 12px;
        overflow: auto;

        pre {
            margin: 0;
            white-space: pre;
            font-size: 12.5px;
            line-height: 1.55;
            color: var(--color-text-primary);
        }
    `,Note:a.div`
        display: flex;
        gap: 10px;
        align-items: flex-start;
        margin-top: 10px;
        border: 1px solid var(--color-border);
        background: color-mix(
            in srgb,
            var(--color-primary) 8%,
            var(--color-surface)
        );
        border-radius: 12px;
        padding: 12px;

        svg {
            margin-top: 2px;
            color: var(--color-primary);
            font-size: 18px;
            flex: 0 0 auto;
        }
    `,NoteTitle:a.div`
        font-weight: 900;
        color: var(--color-text-primary);
        font-size: 13px;
        margin-bottom: 2px;
    `,NoteText:a.div`
        color: var(--color-text-secondary);
        font-size: 13px;
        line-height: 1.55;
    `,Warn:a.div`
        display: flex;
        gap: 10px;
        align-items: flex-start;
        margin-top: 10px;
        border: 1px solid var(--color-border);
        background: color-mix(
            in srgb,
            var(--color-warning) 10%,
            var(--color-surface)
        );
        border-radius: 12px;
        padding: 12px;

        svg {
            margin-top: 2px;
            color: var(--color-warning);
            font-size: 18px;
            flex: 0 0 auto;
        }
    `,WarnTitle:a.div`
        font-weight: 900;
        color: var(--color-text-primary);
        font-size: 13px;
        margin-bottom: 2px;
    `,WarnText:a.div`
        color: var(--color-text-secondary);
        font-size: 13px;
        line-height: 1.55;
    `,SnippetGrid:a.div`
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
        gap: 12px;
        margin-top: 10px;
    `,SnippetCard:a.div`
        border: 1px solid var(--color-border);
        background: var(--color-surface);
        border-radius: 12px;
        overflow: hidden;
        transition:
            transform 140ms ease,
            border-color 140ms ease;

        &:hover {
            transform: translateY(-2px);
            border-color: var(--color-border-light);
        }
    `,SnippetTop:a.div`
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        gap: 12px;
        padding: 12px;
        border-bottom: 1px solid var(--color-border);
        background: color-mix(in srgb, var(--color-surface-2) 55%, transparent);
    `,SnippetTitle:a.div`
        font-weight: 900;
        color: var(--color-text-primary);
        font-size: 13px;
        line-height: 1.3;
        margin-bottom: 4px;
    `,SnippetHint:a.div`
        color: var(--color-text-muted);
        font-size: 12px;
    `,CopyBtn:a.button`
        display: inline-flex;
        align-items: center;
        gap: 8px;
        padding: 8px 10px;
        border-radius: 10px;
        border: 1px solid var(--color-border);
        background: color-mix(in srgb, var(--color-surface) 70%, transparent);
        color: var(--color-text-primary);
        font-weight: 900;
        font-size: 12px;
        transition:
            transform 140ms ease,
            border-color 140ms ease,
            background 140ms ease;

        svg {
            font-size: 14px;
            color: var(--color-accent);
        }

        &:hover {
            border-color: var(--color-border-light);
            transform: translateY(-1px);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 70%,
                transparent
            );
        }

        &:active {
            transform: translateY(0px);
        }
    `,FooterNote:a.div`
        margin-top: 14px;
        padding: 12px;
        border: 1px solid var(--color-border);
        border-radius: 12px;
        background: color-mix(in srgb, var(--color-surface) 70%, transparent);
        color: var(--color-text-secondary);
        font-size: 13px;
        line-height: 1.55;
    `},Sm=()=>{const[s,d]=Y.useState(!1),[c,p]=Y.useState(""),x=Y.useMemo(()=>[{key:"simpleNode",title:"Simple Node app Dockerfile",hint:"Good beginner start",code:`# Dockerfile

FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .

EXPOSE 5173

CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]`},{key:"prodNode",title:"Production Node build",hint:"Build once, run light",code:`# Dockerfile (production style)

FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]`},{key:"dockerIgnore",title:".dockerignore example",hint:"Smaller builds, faster",code:`# .dockerignore

node_modules
dist
.git
.vscode
.env
npm-debug.log`},{key:"buildRun",title:"Build and run commands",hint:"Use these every time",code:`# Build image
docker build -t my-app:1.0 .

# Run container
docker run --name my-app -p 8080:80 my-app:1.0

# See logs
docker logs my-app`},{key:"cmdEntry",title:"CMD vs ENTRYPOINT",hint:"Common interview question",code:`# CMD sets default command
CMD ["node", "server.js"]

# ENTRYPOINT makes container behave like a fixed executable
ENTRYPOINT ["node", "server.js"]

# If you use both, ENTRYPOINT is fixed and CMD becomes default args`},{key:"env",title:"ENV and ARG",hint:"Build time vs runtime",code:`# Build time variable
ARG NODE_ENV=production

# Runtime variable
ENV NODE_ENV=$NODE_ENV

# Use:
# docker build --build-arg NODE_ENV=production -t app .`}],[]),k=async(h,y)=>{try{await navigator.clipboard.writeText(h),p(y),window.setTimeout(()=>p(""),900)}catch{p("")}};return t.jsxs(pe.Wrapper,{children:[t.jsxs(pe.Header,{onClick:()=>d(h=>!h),role:"button",tabIndex:0,children:[t.jsxs(pe.Title,{children:[t.jsx(Bo,{}),"Dockerfile",t.jsx(pe.Badge,{children:"Build images the right way"})]}),t.jsx(pe.Toggle,{"aria-hidden":"true",children:s?t.jsx(pr,{}):t.jsx(ur,{})})]}),!s&&t.jsxs(pe.Preview,{children:[t.jsx(pe.PreviewLine,{children:"A Dockerfile is a step-by-step recipe to build a Docker image."}),t.jsx(pe.PreviewLine,{children:"Learn layers, caching, COPY vs ADD, CMD vs ENTRYPOINT, and multi-stage builds."})]}),s&&t.jsxs(pe.Content,{children:[t.jsxs(pe.Section,{children:[t.jsxs(pe.SectionHead,{children:[t.jsx(ss,{}),t.jsx("h3",{children:"What is a Dockerfile"})]}),t.jsx(pe.Para,{children:"A Dockerfile is a text file that contains instructions to build a Docker image. Each instruction creates a layer. Docker caches layers, so rebuilds can be fast when written correctly."}),t.jsxs(pe.Note,{children:[t.jsx(we,{}),t.jsxs("div",{children:[t.jsx(pe.NoteTitle,{children:"Beginner mental model"}),t.jsx(pe.NoteText,{children:"Dockerfile is like a cooking recipe. Image is the prepared dish. Container is the dish being served and running."})]})]})]}),t.jsxs(pe.Section,{children:[t.jsxs(pe.SectionHead,{children:[t.jsx(Wr,{}),t.jsx("h3",{children:"Layers and caching"})]}),t.jsxs(pe.Bullets,{children:[t.jsxs("li",{children:[t.jsx("b",{children:"Each line"})," in Dockerfile becomes a layer"]}),t.jsxs("li",{children:[t.jsx("b",{children:"Docker caches"})," layers if inputs did not change"]}),t.jsxs("li",{children:["Put ",t.jsx("b",{children:"stable steps first"})," to reuse cache"]})]}),t.jsxs(pe.Example,{children:[t.jsx(pe.ExampleTitle,{children:"Best practice example"}),t.jsxs(pe.Bullets,{children:[t.jsx("li",{children:"Copy package.json first"}),t.jsx("li",{children:"Install dependencies"}),t.jsx("li",{children:"Copy remaining files"})]})]}),t.jsxs(pe.Warn,{children:[t.jsx(Qe,{}),t.jsxs("div",{children:[t.jsx(pe.WarnTitle,{children:"Common beginner mistake"}),t.jsx(pe.WarnText,{children:"If you copy the full project before installing dependencies, any file change breaks cache and makes builds slow."})]})]})]}),t.jsxs(pe.Section,{children:[t.jsxs(pe.SectionHead,{children:[t.jsx(Je,{}),t.jsx("h3",{children:"Important instructions"})]}),t.jsxs(pe.Bullets,{children:[t.jsxs("li",{children:[t.jsx("b",{children:"FROM"})," - base image, example node:20-alpine"]}),t.jsxs("li",{children:[t.jsx("b",{children:"WORKDIR"})," - sets working directory inside image"]}),t.jsxs("li",{children:[t.jsx("b",{children:"COPY"})," - copies files into image (use this most of the time)"]}),t.jsxs("li",{children:[t.jsx("b",{children:"RUN"})," - runs commands during build time"]}),t.jsxs("li",{children:[t.jsx("b",{children:"EXPOSE"})," - documents the port (does not publish port by itself)"]}),t.jsxs("li",{children:[t.jsx("b",{children:"CMD"})," - default command to run when container starts"]}),t.jsxs("li",{children:[t.jsx("b",{children:"ENTRYPOINT"})," - fixed executable behavior"]})]}),t.jsxs(pe.Note,{children:[t.jsx(ln,{}),t.jsxs("div",{children:[t.jsx(pe.NoteTitle,{children:"COPY vs ADD"}),t.jsx(pe.NoteText,{children:"Use COPY. ADD has extra features (like auto extracting archives) and is rarely needed."})]})]})]}),t.jsxs(pe.Section,{children:[t.jsxs(pe.SectionHead,{children:[t.jsx(am,{}),t.jsx("h3",{children:"Multi-stage builds"})]}),t.jsx(pe.Para,{children:"Multi-stage builds let you build your app in one stage and copy only the final output into a smaller runtime image. This keeps production images small and safer."}),t.jsxs(pe.Example,{children:[t.jsx(pe.ExampleTitle,{children:"Why it matters"}),t.jsxs(pe.Bullets,{children:[t.jsx("li",{children:"Smaller image size"}),t.jsx("li",{children:"Faster deploy and pull"}),t.jsx("li",{children:"Less attack surface"})]})]})]}),t.jsxs(pe.Section,{children:[t.jsxs(pe.SectionHead,{children:[t.jsx(Nr,{}),t.jsx("h3",{children:"Command playground"})]}),t.jsx(pe.SnippetGrid,{children:x.map(h=>{const y=c===h.key;return t.jsxs(pe.SnippetCard,{children:[t.jsxs(pe.SnippetTop,{children:[t.jsxs("div",{children:[t.jsx(pe.SnippetTitle,{children:h.title}),t.jsx(pe.SnippetHint,{children:h.hint})]}),t.jsxs(pe.CopyBtn,{type:"button",onClick:()=>k(h.code,h.key),title:y?"Copied":"Copy",children:[y?t.jsx(we,{}):t.jsx(dr,{}),y?"Copied":"Copy"]})]}),t.jsx(pe.CodeBlock,{children:t.jsx("pre",{children:h.code})})]},h.key)})})]}),t.jsx(pe.FooterNote,{children:"Write Dockerfiles like you write clean code. Good ordering gives fast builds. Multi-stage gives small and secure production images."})]})]})},ne={Wrapper:a.div`
        margin-bottom: 10px;
        border: 1px solid var(--color-border);
        border-radius: 14px;
        background: var(--color-surface);
        overflow: hidden;
    `,Header:a.div`
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 12px;
        padding: 16px 18px;
        cursor: pointer;
        user-select: none;
        transition: background 140ms ease;

        &:hover {
            background: var(--color-surface-2);
        }

        &:focus-visible {
            outline: 2px solid var(--color-primary);
            outline-offset: 3px;
        }
    `,Title:a.div`
        display: flex;
        align-items: center;
        gap: 10px;
        font-weight: 900;
        font-size: 18px;
        color: var(--color-text-primary);

        svg {
            font-size: 20px;
            color: var(--color-primary);
        }
    `,Badge:a.span`
        margin-left: 10px;
        font-size: 12px;
        font-weight: 800;
        color: var(--color-text-secondary);
        background: color-mix(in srgb, var(--color-surface-2) 85%, transparent);
        border: 1px solid var(--color-border);
        padding: 4px 10px;
        border-radius: 999px;
    `,Toggle:a.div`
        font-size: 20px;
        color: var(--color-text-muted);
        flex: 0 0 auto;
    `,Preview:a.div`
        padding: 14px 18px 18px 18px;
        border-top: 1px solid var(--color-border);
        background: color-mix(in srgb, var(--color-surface-2) 55%, transparent);
    `,PreviewLine:a.div`
        color: var(--color-text-secondary);
        font-size: 14px;
        line-height: 1.5;

        & + & {
            margin-top: 6px;
        }
    `,Content:a.div`
        padding: 18px;
        border-top: 1px solid var(--color-border);
        background: var(--color-surface-2);
    `,Section:a.div`
        & + & {
            margin-top: 16px;
        }
    `,SectionHead:a.div`
        display: flex;
        align-items: center;
        gap: 10px;
        margin-bottom: 8px;

        svg {
            color: var(--color-accent);
            font-size: 18px;
        }

        h3 {
            font-size: 16px;
            font-weight: 900;
            color: var(--color-text-primary);
        }
    `,Para:a.p`
        margin-bottom: 10px;
        color: var(--color-text-secondary);
        font-size: 14px;
        line-height: 1.6;
    `,Bullets:a.ul`
        padding-left: 0;
        margin: 0;

        li {
            color: var(--color-text-secondary);
            font-size: 14px;
            line-height: 1.6;
            padding-left: 14px;
            position: relative;
            margin: 8px 0;
        }

        li::before {
            content: "-";
            position: absolute;
            left: 0;
            top: 0;
            color: var(--color-text-muted);
            font-weight: 900;
        }

        b {
            color: var(--color-text-primary);
            font-weight: 900;
        }
    `,Example:a.div`
        margin-top: 10px;
        border: 1px solid var(--color-border);
        background: color-mix(in srgb, var(--color-surface) 75%, transparent);
        border-radius: 12px;
        padding: 12px;
    `,ExampleTitle:a.div`
        font-weight: 900;
        font-size: 13px;
        color: var(--color-text-primary);
        margin-bottom: 8px;
    `,CodeBlock:a.div`
        background: var(--color-code-bg);
        border: 1px solid var(--color-code-border);
        border-radius: 12px;
        padding: 12px;
        overflow: auto;

        pre {
            margin: 0;
            white-space: pre;
            font-size: 12.5px;
            line-height: 1.55;
            color: var(--color-text-primary);
        }
    `,Note:a.div`
        display: flex;
        gap: 10px;
        align-items: flex-start;
        margin-top: 10px;
        border: 1px solid var(--color-border);
        background: color-mix(
            in srgb,
            var(--color-primary) 8%,
            var(--color-surface)
        );
        border-radius: 12px;
        padding: 12px;

        svg {
            margin-top: 2px;
            color: var(--color-primary);
            font-size: 18px;
            flex: 0 0 auto;
        }
    `,NoteTitle:a.div`
        font-weight: 900;
        color: var(--color-text-primary);
        font-size: 13px;
        margin-bottom: 2px;
    `,NoteText:a.div`
        color: var(--color-text-secondary);
        font-size: 13px;
        line-height: 1.55;
    `,Warn:a.div`
        display: flex;
        gap: 10px;
        align-items: flex-start;
        margin-top: 10px;
        border: 1px solid var(--color-border);
        background: color-mix(
            in srgb,
            var(--color-warning) 10%,
            var(--color-surface)
        );
        border-radius: 12px;
        padding: 12px;

        svg {
            margin-top: 2px;
            color: var(--color-warning);
            font-size: 18px;
            flex: 0 0 auto;
        }
    `,WarnTitle:a.div`
        font-weight: 900;
        color: var(--color-text-primary);
        font-size: 13px;
        margin-bottom: 2px;
    `,WarnText:a.div`
        color: var(--color-text-secondary);
        font-size: 13px;
        line-height: 1.55;
    `,SnippetGrid:a.div`
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
        gap: 12px;
        margin-top: 10px;
    `,SnippetCard:a.div`
        border: 1px solid var(--color-border);
        background: var(--color-surface);
        border-radius: 12px;
        overflow: hidden;
        transition:
            transform 140ms ease,
            border-color 140ms ease;

        &:hover {
            transform: translateY(-2px);
            border-color: var(--color-border-light);
        }
    `,SnippetTop:a.div`
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        gap: 12px;
        padding: 12px;
        border-bottom: 1px solid var(--color-border);
        background: color-mix(in srgb, var(--color-surface-2) 55%, transparent);
    `,SnippetTitle:a.div`
        font-weight: 900;
        color: var(--color-text-primary);
        font-size: 13px;
        line-height: 1.3;
        margin-bottom: 4px;
    `,SnippetHint:a.div`
        color: var(--color-text-muted);
        font-size: 12px;
    `,CopyBtn:a.button`
        display: inline-flex;
        align-items: center;
        gap: 8px;
        padding: 8px 10px;
        border-radius: 10px;
        border: 1px solid var(--color-border);
        background: color-mix(in srgb, var(--color-surface) 70%, transparent);
        color: var(--color-text-primary);
        font-weight: 900;
        font-size: 12px;
        transition:
            transform 140ms ease,
            border-color 140ms ease,
            background 140ms ease;

        svg {
            font-size: 14px;
            color: var(--color-accent);
        }

        &:hover {
            border-color: var(--color-border-light);
            transform: translateY(-1px);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 70%,
                transparent
            );
        }

        &:active {
            transform: translateY(0px);
        }
    `,FooterNote:a.div`
        margin-top: 14px;
        padding: 12px;
        border: 1px solid var(--color-border);
        border-radius: 12px;
        background: color-mix(in srgb, var(--color-surface) 70%, transparent);
        color: var(--color-text-secondary);
        font-size: 13px;
        line-height: 1.55;
    `},Cm=()=>{const[s,d]=Y.useState(!1),[c,p]=Y.useState(""),x=Y.useMemo(()=>[{key:"ports",title:"Ports and port mapping",hint:"Host port to container port",code:`# Run nginx in container and expose to host
docker run --name web -p 8080:80 nginx

# Now open in browser
# http://localhost:8080

# Format:
# -p <hostPort>:<containerPort>`},{key:"bridge",title:"Bridge network",hint:"Default Docker network type",code:`# See Docker networks
docker network ls

# Inspect default bridge
docker network inspect bridge | head`},{key:"userNet",title:"User defined network",hint:"Best for multi containers",code:`docker network create app-net

docker run -d --name api --network app-net nginx
docker run -d --name web --network app-net nginx

# Containers on same user network can reach by name:
# http://api
# http://web`},{key:"dns",title:"DNS inside containers",hint:"Name becomes hostname",code:`# Start a shell container on the same network
docker run -it --rm --network app-net alpine sh

# Inside shell, resolve name:
# ping api
# wget -qO- http://api`},{key:"localhostTrap",title:"The localhost confusion",hint:"Inside container, localhost is the container",code:`# Inside container:
# localhost means the container itself, not your host

# To reach host from container (Docker Desktop):
# host.docker.internal

# Example inside container:
# curl http://host.docker.internal:5173`},{key:"inspect",title:"Inspect IP and networks",hint:"Find container IP quickly",code:`# Container IP address
docker inspect -f '{{range .NetworkSettings.Networks}}{{.IPAddress}}{{end}}' api

# View all networks attached
docker inspect api | head`},{key:"curlTools",title:"Useful network tools",hint:"Quick debugging commands",code:`# Host machine tools
curl -I http://localhost:8080
ping 8.8.8.8
nslookup google.com

# In linux containers you may need:
# apk add curl bind-tools iputils`}],[]),k=async(h,y)=>{try{await navigator.clipboard.writeText(h),p(y),window.setTimeout(()=>p(""),900)}catch{p("")}};return t.jsxs(ne.Wrapper,{children:[t.jsxs(ne.Header,{onClick:()=>d(h=>!h),role:"button",tabIndex:0,children:[t.jsxs(ne.Title,{children:[t.jsx(Na,{}),"Networking",t.jsx(ne.Badge,{children:"Ports - DNS - container links"})]}),t.jsx(ne.Toggle,{"aria-hidden":"true",children:s?t.jsx(pr,{}):t.jsx(ur,{})})]}),!s&&t.jsxs(ne.Preview,{children:[t.jsx(ne.PreviewLine,{children:"Networking is where most Docker confusion happens."}),t.jsx(ne.PreviewLine,{children:"Learn ports, bridge networks, container to container communication, and DNS."})]}),s&&t.jsxs(ne.Content,{children:[t.jsxs(ne.Section,{children:[t.jsxs(ne.SectionHead,{children:[t.jsx(Mt,{}),t.jsx("h3",{children:"Networking basics in containers"})]}),t.jsx(ne.Para,{children:"Containers have their own network namespace. That means they get their own IP address, routing table, and ports. Docker then connects containers using networks (bridge, host, overlay)."}),t.jsxs(ne.Note,{children:[t.jsx(we,{}),t.jsxs("div",{children:[t.jsx(ne.NoteTitle,{children:"Beginner mental model"}),t.jsx(ne.NoteText,{children:"Each container is like a small computer on a private network. Docker is the router that connects them."})]})]})]}),t.jsxs(ne.Section,{children:[t.jsxs(ne.SectionHead,{children:[t.jsx(Ep,{}),t.jsx("h3",{children:"Ports and port mapping"})]}),t.jsxs(ne.Bullets,{children:[t.jsxs("li",{children:[t.jsx("b",{children:"Container port"})," - port used inside container"]}),t.jsxs("li",{children:[t.jsx("b",{children:"Host port"})," - port on your laptop or server"]}),t.jsxs("li",{children:[t.jsx("b",{children:"Port mapping"})," - connects host port to container port"]})]}),t.jsxs(ne.Example,{children:[t.jsx(ne.ExampleTitle,{children:"Example"}),t.jsx(ne.Para,{children:'If nginx listens on port 80 inside container, and you want to access it from host on 8080, you do "-p 8080:80".'})]}),t.jsxs(ne.Warn,{children:[t.jsx(Qe,{}),t.jsxs("div",{children:[t.jsx(ne.WarnTitle,{children:"Common beginner mistake"}),t.jsx(ne.WarnText,{children:'EXPOSE in Dockerfile does not publish ports. It is only documentation. You still need "-p" while running.'})]})]})]}),t.jsxs(ne.Section,{children:[t.jsxs(ne.SectionHead,{children:[t.jsx(ss,{}),t.jsx("h3",{children:"Bridge network vs user defined network"})]}),t.jsxs(ne.Bullets,{children:[t.jsxs("li",{children:[t.jsx("b",{children:"bridge"})," - default network, basic isolation"]}),t.jsxs("li",{children:[t.jsx("b",{children:"user defined network"})," - recommended for multi-container apps"]}),t.jsx("li",{children:"user networks provide automatic DNS resolution by container name"})]}),t.jsxs(ne.Example,{children:[t.jsx(ne.ExampleTitle,{children:"Why user network is better"}),t.jsxs(ne.Bullets,{children:[t.jsx("li",{children:'Containers can reach each other by name like "api"'}),t.jsx("li",{children:"More predictable networking for microservices"}),t.jsx("li",{children:"Easier debugging and separation"})]})]})]}),t.jsxs(ne.Section,{children:[t.jsxs(ne.SectionHead,{children:[t.jsx(zp,{}),t.jsx("h3",{children:"Container to container communication"})]}),t.jsx(ne.Para,{children:'If two containers are on the same Docker network, they can talk to each other using container name as hostname. Example: web container can call api container using "http://api".'}),t.jsxs(ne.Note,{children:[t.jsx(Je,{}),t.jsxs("div",{children:[t.jsx(ne.NoteTitle,{children:"Port mapping not needed internally"}),t.jsx(ne.NoteText,{children:"Containers talking to each other on the same network use container ports directly. Port mapping is mainly for host to container access."})]})]})]}),t.jsxs(ne.Section,{children:[t.jsxs(ne.SectionHead,{children:[t.jsx($r,{}),t.jsx("h3",{children:"The localhost confusion"})]}),t.jsxs(ne.Bullets,{children:[t.jsx("li",{children:'Inside a container, "localhost" means the container itself'}),t.jsx("li",{children:"Your host machine is a different network namespace"}),t.jsx("li",{children:'On Docker Desktop, use "host.docker.internal" to reach host'})]}),t.jsxs(ne.Warn,{children:[t.jsx(Qe,{}),t.jsxs("div",{children:[t.jsx(ne.WarnTitle,{children:"Typical bug"}),t.jsx(ne.WarnText,{children:'App inside container tries to call "http://localhost:5000" but backend is running on host. Fix: use "http://host.docker.internal:5000" (Docker Desktop) or run both containers on same network.'})]})]})]}),t.jsxs(ne.Section,{children:[t.jsxs(ne.SectionHead,{children:[t.jsx(Nr,{}),t.jsx("h3",{children:"Command playground"})]}),t.jsx(ne.SnippetGrid,{children:x.map(h=>{const y=c===h.key;return t.jsxs(ne.SnippetCard,{children:[t.jsxs(ne.SnippetTop,{children:[t.jsxs("div",{children:[t.jsx(ne.SnippetTitle,{children:h.title}),t.jsx(ne.SnippetHint,{children:h.hint})]}),t.jsxs(ne.CopyBtn,{type:"button",onClick:()=>k(h.code,h.key),title:y?"Copied":"Copy",children:[y?t.jsx(we,{}):t.jsx(dr,{}),y?"Copied":"Copy"]})]}),t.jsx(ne.CodeBlock,{children:t.jsx("pre",{children:h.code})})]},h.key)})})]}),t.jsx(ne.FooterNote,{children:"In container networking, always ask two questions: where is the process running and which network namespace is calling it. Once you answer that, ports and hostnames become obvious."})]})]})},Q={Wrapper:a.div`
        margin-bottom: 10px;
        border: 1px solid var(--color-border);
        border-radius: 14px;
        background: var(--color-surface);
        overflow: hidden;
    `,Header:a.div`
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 12px;
        padding: 16px 18px;
        cursor: pointer;
        user-select: none;
        transition: background 140ms ease;

        &:hover {
            background: var(--color-surface-2);
        }

        &:focus-visible {
            outline: 2px solid var(--color-primary);
            outline-offset: 3px;
        }
    `,Title:a.div`
        display: flex;
        align-items: center;
        gap: 10px;
        font-weight: 900;
        font-size: 18px;
        color: var(--color-text-primary);

        svg {
            font-size: 20px;
            color: var(--color-primary);
        }
    `,Badge:a.span`
        margin-left: 10px;
        font-size: 12px;
        font-weight: 800;
        color: var(--color-text-secondary);
        background: color-mix(in srgb, var(--color-surface-2) 85%, transparent);
        border: 1px solid var(--color-border);
        padding: 4px 10px;
        border-radius: 999px;
    `,Toggle:a.div`
        font-size: 20px;
        color: var(--color-text-muted);
        flex: 0 0 auto;
    `,Preview:a.div`
        padding: 14px 18px 18px 18px;
        border-top: 1px solid var(--color-border);
        background: color-mix(in srgb, var(--color-surface-2) 55%, transparent);
    `,PreviewLine:a.div`
        color: var(--color-text-secondary);
        font-size: 14px;
        line-height: 1.5;

        & + & {
            margin-top: 6px;
        }
    `,Content:a.div`
        padding: 18px;
        border-top: 1px solid var(--color-border);
        background: var(--color-surface-2);
    `,Section:a.div`
        & + & {
            margin-top: 16px;
        }
    `,SectionHead:a.div`
        display: flex;
        align-items: center;
        gap: 10px;
        margin-bottom: 8px;

        svg {
            color: var(--color-accent);
            font-size: 18px;
        }

        h3 {
            font-size: 16px;
            font-weight: 900;
            color: var(--color-text-primary);
        }
    `,Para:a.p`
        margin-bottom: 10px;
        color: var(--color-text-secondary);
        font-size: 14px;
        line-height: 1.6;
    `,Bullets:a.ul`
        padding-left: 0;
        margin: 0;

        li {
            color: var(--color-text-secondary);
            font-size: 14px;
            line-height: 1.6;
            padding-left: 14px;
            position: relative;
            margin: 8px 0;
        }

        li::before {
            content: "-";
            position: absolute;
            left: 0;
            top: 0;
            color: var(--color-text-muted);
            font-weight: 900;
        }

        b {
            color: var(--color-text-primary);
            font-weight: 900;
        }
    `,Example:a.div`
        margin-top: 10px;
        border: 1px solid var(--color-border);
        background: color-mix(in srgb, var(--color-surface) 75%, transparent);
        border-radius: 12px;
        padding: 12px;
    `,ExampleTitle:a.div`
        font-weight: 900;
        font-size: 13px;
        color: var(--color-text-primary);
        margin-bottom: 8px;
    `,CodeBlock:a.div`
        background: var(--color-code-bg);
        border: 1px solid var(--color-code-border);
        border-radius: 12px;
        padding: 12px;
        overflow: auto;

        pre {
            margin: 0;
            white-space: pre;
            font-size: 12.5px;
            line-height: 1.55;
            color: var(--color-text-primary);
        }
    `,Note:a.div`
        display: flex;
        gap: 10px;
        align-items: flex-start;
        margin-top: 10px;
        border: 1px solid var(--color-border);
        background: color-mix(
            in srgb,
            var(--color-primary) 8%,
            var(--color-surface)
        );
        border-radius: 12px;
        padding: 12px;

        svg {
            margin-top: 2px;
            color: var(--color-primary);
            font-size: 18px;
            flex: 0 0 auto;
        }
    `,NoteTitle:a.div`
        font-weight: 900;
        color: var(--color-text-primary);
        font-size: 13px;
        margin-bottom: 2px;
    `,NoteText:a.div`
        color: var(--color-text-secondary);
        font-size: 13px;
        line-height: 1.55;
    `,Warn:a.div`
        display: flex;
        gap: 10px;
        align-items: flex-start;
        margin-top: 10px;
        border: 1px solid var(--color-border);
        background: color-mix(
            in srgb,
            var(--color-warning) 10%,
            var(--color-surface)
        );
        border-radius: 12px;
        padding: 12px;

        svg {
            margin-top: 2px;
            color: var(--color-warning);
            font-size: 18px;
            flex: 0 0 auto;
        }
    `,WarnTitle:a.div`
        font-weight: 900;
        color: var(--color-text-primary);
        font-size: 13px;
        margin-bottom: 2px;
    `,WarnText:a.div`
        color: var(--color-text-secondary);
        font-size: 13px;
        line-height: 1.55;
    `,SnippetGrid:a.div`
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
        gap: 12px;
        margin-top: 10px;
    `,SnippetCard:a.div`
        border: 1px solid var(--color-border);
        background: var(--color-surface);
        border-radius: 12px;
        overflow: hidden;
        transition:
            transform 140ms ease,
            border-color 140ms ease;

        &:hover {
            transform: translateY(-2px);
            border-color: var(--color-border-light);
        }
    `,SnippetTop:a.div`
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        gap: 12px;
        padding: 12px;
        border-bottom: 1px solid var(--color-border);
        background: color-mix(in srgb, var(--color-surface-2) 55%, transparent);
    `,SnippetTitle:a.div`
        font-weight: 900;
        color: var(--color-text-primary);
        font-size: 13px;
        line-height: 1.3;
        margin-bottom: 4px;
    `,SnippetHint:a.div`
        color: var(--color-text-muted);
        font-size: 12px;
    `,CopyBtn:a.button`
        display: inline-flex;
        align-items: center;
        gap: 8px;
        padding: 8px 10px;
        border-radius: 10px;
        border: 1px solid var(--color-border);
        background: color-mix(in srgb, var(--color-surface) 70%, transparent);
        color: var(--color-text-primary);
        font-weight: 900;
        font-size: 12px;
        transition:
            transform 140ms ease,
            border-color 140ms ease,
            background 140ms ease;

        svg {
            font-size: 14px;
            color: var(--color-accent);
        }

        &:hover {
            border-color: var(--color-border-light);
            transform: translateY(-1px);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 70%,
                transparent
            );
        }

        &:active {
            transform: translateY(0px);
        }
    `,FooterNote:a.div`
        margin-top: 14px;
        padding: 12px;
        border: 1px solid var(--color-border);
        border-radius: 12px;
        background: color-mix(in srgb, var(--color-surface) 70%, transparent);
        color: var(--color-text-secondary);
        font-size: 13px;
        line-height: 1.55;
    `},Tm=()=>{const[s,d]=Y.useState(!1),[c,p]=Y.useState(""),x=Y.useMemo(()=>[{key:"pipelineStages",title:"Typical pipeline stages",hint:"Concept only",code:`# CI and CD pipeline usually looks like:

# 1) Checkout code
# 2) Install dependencies
# 3) Lint and typecheck
# 4) Run tests
# 5) Build artifacts
# 6) Security scans (optional but common)
# 7) Deploy to staging
# 8) Smoke tests
# 9) Deploy to production`},{key:"buildArtifact",title:"Build artifacts idea",hint:"What CD deploys",code:`# Artifact is the output of build stage
# Examples:
# - dist folder for React apps
# - Docker image tag like myapp:1.2.0
# - compiled binary for Go or Rust
# - zip package for serverless functions`},{key:"rollback",title:"Rollback idea",hint:"Production safety",code:`# A good CD setup supports rollback
# Examples:
# - deploy previous Docker image tag
# - switch load balancer traffic to old version
# - revert release in Kubernetes
# - redeploy previous build artifact`},{key:"envs",title:"Environments",hint:"dev, staging, prod",code:`# Common flow:
# dev - local machine
# staging - production like testing environment
# prod - real users

# Good practice:
# same build artifact should go through staging then prod`},{key:"secrets",title:"Secrets handling",hint:"Never hardcode",code:`# Secrets belong in CI secret store
# Examples:
# - API keys
# - deploy tokens
# - cloud credentials

# Never commit secrets in code or .env in repo`},{key:"qualityGates",title:"Quality gates",hint:"Block bad builds",code:`# Quality gates are rules that must pass
# Examples:
# - lint must pass
# - tests must pass
# - coverage minimum
# - security scan no high vulnerabilities
# - formatting check`}],[]),k=async(h,y)=>{try{await navigator.clipboard.writeText(h),p(y),window.setTimeout(()=>p(""),900)}catch{p("")}};return t.jsxs(Q.Wrapper,{children:[t.jsxs(Q.Header,{onClick:()=>d(h=>!h),role:"button",tabIndex:0,children:[t.jsxs(Q.Title,{children:[t.jsx(Pa,{}),"CI CD",t.jsx(Q.Badge,{children:"Automation from commit to deploy"})]}),t.jsx(Q.Toggle,{"aria-hidden":"true",children:s?t.jsx(pr,{}):t.jsx(ur,{})})]}),!s&&t.jsxs(Q.Preview,{children:[t.jsx(Q.PreviewLine,{children:"CI builds and tests your code automatically. CD deploys it automatically."}),t.jsx(Q.PreviewLine,{children:"Learn pipeline stages, artifacts, environments, and safe deployment habits."})]}),s&&t.jsxs(Q.Content,{children:[t.jsxs(Q.Section,{children:[t.jsxs(Q.SectionHead,{children:[t.jsx(ln,{}),t.jsx("h3",{children:"What is CI"})]}),t.jsx(Q.Para,{children:"CI means Continuous Integration. Every time code is pushed, an automated pipeline runs to make sure the code is healthy. Typical CI jobs are linting, tests, type checks, and build."}),t.jsxs(Q.Note,{children:[t.jsx(we,{}),t.jsxs("div",{children:[t.jsx(Q.NoteTitle,{children:"Beginner mental model"}),t.jsx(Q.NoteText,{children:"CI is like an automatic reviewer. It runs the same checks every time so humans do not miss mistakes."})]})]})]}),t.jsxs(Q.Section,{children:[t.jsxs(Q.SectionHead,{children:[t.jsx(Np,{}),t.jsx("h3",{children:"What is CD"})]}),t.jsx(Q.Para,{children:"CD usually means Continuous Delivery or Continuous Deployment. Both automate the deployment steps, but the difference is who clicks the final button."}),t.jsxs(Q.Bullets,{children:[t.jsxs("li",{children:[t.jsx("b",{children:"Continuous Delivery"})," - deployment is always ready, but production release may need manual approval"]}),t.jsxs("li",{children:[t.jsx("b",{children:"Continuous Deployment"})," - every successful pipeline automatically goes to production"]})]}),t.jsxs(Q.Warn,{children:[t.jsx(Qe,{}),t.jsxs("div",{children:[t.jsx(Q.WarnTitle,{children:"Real world note"}),t.jsx(Q.WarnText,{children:"Many teams start with Continuous Delivery and add approvals for production. Fully automatic production is possible, but requires strong testing and monitoring."})]})]})]}),t.jsxs(Q.Section,{children:[t.jsxs(Q.SectionHead,{children:[t.jsx(Wr,{}),t.jsx("h3",{children:"Pipeline stages (typical)"})]}),t.jsxs(Q.Bullets,{children:[t.jsx("li",{children:"Checkout code"}),t.jsx("li",{children:"Install dependencies"}),t.jsx("li",{children:"Lint and formatting checks"}),t.jsx("li",{children:"Run tests"}),t.jsx("li",{children:"Build artifacts"}),t.jsx("li",{children:"Deploy to staging"}),t.jsx("li",{children:"Smoke test"}),t.jsx("li",{children:"Deploy to production"})]}),t.jsxs(Q.Example,{children:[t.jsx(Q.ExampleTitle,{children:"Smoke test meaning"}),t.jsx(Q.Para,{children:"A smoke test is a quick check to ensure the deployment is not totally broken. Example: call health endpoint and check status 200."})]})]}),t.jsxs(Q.Section,{children:[t.jsxs(Q.SectionHead,{children:[t.jsx(Ro,{}),t.jsx("h3",{children:"Branch strategy example"})]}),t.jsxs(Q.Bullets,{children:[t.jsx("li",{children:"PR to main triggers CI only"}),t.jsx("li",{children:"Merge to main triggers CI and deploy to staging"}),t.jsx("li",{children:"Tag a release triggers production deployment"})]}),t.jsxs(Q.Note,{children:[t.jsx(Je,{}),t.jsxs("div",{children:[t.jsx(Q.NoteTitle,{children:"Why tags are useful"}),t.jsx(Q.NoteText,{children:"A tag is a stable point in history. Production deployments often use tags so you can identify exactly what version is running."})]})]})]}),t.jsxs(Q.Section,{children:[t.jsxs(Q.SectionHead,{children:[t.jsx($r,{}),t.jsx("h3",{children:"Secrets and configuration"})]}),t.jsxs(Q.Bullets,{children:[t.jsx("li",{children:"Secrets should be stored in CI secret manager"}),t.jsx("li",{children:"Never commit credentials in repository"}),t.jsx("li",{children:"Use environment based configuration - staging and production"})]}),t.jsxs(Q.Example,{children:[t.jsx(Q.ExampleTitle,{children:"Common secrets"}),t.jsxs(Q.Bullets,{children:[t.jsx("li",{children:"AWS access keys"}),t.jsx("li",{children:"GitHub deploy tokens"}),t.jsx("li",{children:"Docker registry credentials"}),t.jsx("li",{children:"Database connection strings"})]})]})]}),t.jsxs(Q.Section,{children:[t.jsxs(Q.SectionHead,{children:[t.jsx(sn,{}),t.jsx("h3",{children:"Monitoring and rollback"})]}),t.jsx(Q.Para,{children:"CD without monitoring is risky. After deployment, you should track errors, latency, and traffic. Rollback should be fast and predictable."}),t.jsxs(Q.Bullets,{children:[t.jsx("li",{children:"Keep previous artifacts available"}),t.jsx("li",{children:"Use health checks"}),t.jsx("li",{children:"Enable fast rollback path"}),t.jsx("li",{children:"Prefer gradual rollout for big changes"})]})]}),t.jsxs(Q.Section,{children:[t.jsxs(Q.SectionHead,{children:[t.jsx(Nr,{}),t.jsx("h3",{children:"Cheat sheet playground"})]}),t.jsx(Q.SnippetGrid,{children:x.map(h=>{const y=c===h.key;return t.jsxs(Q.SnippetCard,{children:[t.jsxs(Q.SnippetTop,{children:[t.jsxs("div",{children:[t.jsx(Q.SnippetTitle,{children:h.title}),t.jsx(Q.SnippetHint,{children:h.hint})]}),t.jsxs(Q.CopyBtn,{type:"button",onClick:()=>k(h.code,h.key),title:y?"Copied":"Copy",children:[y?t.jsx(we,{}):t.jsx(dr,{}),y?"Copied":"Copy"]})]}),t.jsx(Q.CodeBlock,{children:t.jsx("pre",{children:h.code})})]},h.key)})})]}),t.jsx(Q.FooterNote,{children:"CI catches mistakes early. CD makes releases repeatable. Together they reduce manual work and increase reliability."})]})]})},oe={Wrapper:a.div`
        margin-bottom: 10px;
        border: 1px solid var(--color-border);
        border-radius: 14px;
        background: var(--color-surface);
        overflow: hidden;
    `,Header:a.div`
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 12px;
        padding: 16px 18px;
        cursor: pointer;
        user-select: none;
        transition: background 140ms ease;

        &:hover {
            background: var(--color-surface-2);
        }

        &:focus-visible {
            outline: 2px solid var(--color-primary);
            outline-offset: 3px;
        }
    `,Title:a.div`
        display: flex;
        align-items: center;
        gap: 10px;
        font-weight: 900;
        font-size: 18px;
        color: var(--color-text-primary);

        svg {
            font-size: 20px;
            color: var(--color-primary);
        }
    `,Badge:a.span`
        margin-left: 10px;
        font-size: 12px;
        font-weight: 800;
        color: var(--color-text-secondary);
        background: color-mix(in srgb, var(--color-surface-2) 85%, transparent);
        border: 1px solid var(--color-border);
        padding: 4px 10px;
        border-radius: 999px;
    `,Toggle:a.div`
        font-size: 20px;
        color: var(--color-text-muted);
        flex: 0 0 auto;
    `,Preview:a.div`
        padding: 14px 18px 18px 18px;
        border-top: 1px solid var(--color-border);
        background: color-mix(in srgb, var(--color-surface-2) 55%, transparent);
    `,PreviewLine:a.div`
        color: var(--color-text-secondary);
        font-size: 14px;
        line-height: 1.5;

        & + & {
            margin-top: 6px;
        }
    `,Content:a.div`
        padding: 18px;
        border-top: 1px solid var(--color-border);
        background: var(--color-surface-2);
    `,Section:a.div`
        & + & {
            margin-top: 16px;
        }
    `,SectionHead:a.div`
        display: flex;
        align-items: center;
        gap: 10px;
        margin-bottom: 8px;

        svg {
            color: var(--color-accent);
            font-size: 18px;
        }

        h3 {
            font-size: 16px;
            font-weight: 900;
            color: var(--color-text-primary);
        }
    `,Para:a.p`
        margin-bottom: 10px;
        color: var(--color-text-secondary);
        font-size: 14px;
        line-height: 1.6;
    `,Bullets:a.ul`
        padding-left: 0;
        margin: 0;

        li {
            color: var(--color-text-secondary);
            font-size: 14px;
            line-height: 1.6;
            padding-left: 14px;
            position: relative;
            margin: 8px 0;
        }

        li::before {
            content: "-";
            position: absolute;
            left: 0;
            top: 0;
            color: var(--color-text-muted);
            font-weight: 900;
        }

        b {
            color: var(--color-text-primary);
            font-weight: 900;
        }
    `,Example:a.div`
        margin-top: 10px;
        border: 1px solid var(--color-border);
        background: color-mix(in srgb, var(--color-surface) 75%, transparent);
        border-radius: 12px;
        padding: 12px;
    `,ExampleTitle:a.div`
        font-weight: 900;
        font-size: 13px;
        color: var(--color-text-primary);
        margin-bottom: 8px;
    `,CodeBlock:a.div`
        background: var(--color-code-bg);
        border: 1px solid var(--color-code-border);
        border-radius: 12px;
        padding: 12px;
        overflow: auto;

        pre {
            margin: 0;
            white-space: pre;
            font-size: 12.5px;
            line-height: 1.55;
            color: var(--color-text-primary);
        }
    `,Note:a.div`
        display: flex;
        gap: 10px;
        align-items: flex-start;
        margin-top: 10px;
        border: 1px solid var(--color-border);
        background: color-mix(
            in srgb,
            var(--color-primary) 8%,
            var(--color-surface)
        );
        border-radius: 12px;
        padding: 12px;

        svg {
            margin-top: 2px;
            color: var(--color-primary);
            font-size: 18px;
            flex: 0 0 auto;
        }
    `,NoteTitle:a.div`
        font-weight: 900;
        color: var(--color-text-primary);
        font-size: 13px;
        margin-bottom: 2px;
    `,NoteText:a.div`
        color: var(--color-text-secondary);
        font-size: 13px;
        line-height: 1.55;
    `,Warn:a.div`
        display: flex;
        gap: 10px;
        align-items: flex-start;
        margin-top: 10px;
        border: 1px solid var(--color-border);
        background: color-mix(
            in srgb,
            var(--color-warning) 10%,
            var(--color-surface)
        );
        border-radius: 12px;
        padding: 12px;

        svg {
            margin-top: 2px;
            color: var(--color-warning);
            font-size: 18px;
            flex: 0 0 auto;
        }
    `,WarnTitle:a.div`
        font-weight: 900;
        color: var(--color-text-primary);
        font-size: 13px;
        margin-bottom: 2px;
    `,WarnText:a.div`
        color: var(--color-text-secondary);
        font-size: 13px;
        line-height: 1.55;
    `,SnippetGrid:a.div`
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
        gap: 12px;
        margin-top: 10px;
    `,SnippetCard:a.div`
        border: 1px solid var(--color-border);
        background: var(--color-surface);
        border-radius: 12px;
        overflow: hidden;
        transition:
            transform 140ms ease,
            border-color 140ms ease;

        &:hover {
            transform: translateY(-2px);
            border-color: var(--color-border-light);
        }
    `,SnippetTop:a.div`
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        gap: 12px;
        padding: 12px;
        border-bottom: 1px solid var(--color-border);
        background: color-mix(in srgb, var(--color-surface-2) 55%, transparent);
    `,SnippetTitle:a.div`
        font-weight: 900;
        color: var(--color-text-primary);
        font-size: 13px;
        line-height: 1.3;
        margin-bottom: 4px;
    `,SnippetHint:a.div`
        color: var(--color-text-muted);
        font-size: 12px;
    `,CopyBtn:a.button`
        display: inline-flex;
        align-items: center;
        gap: 8px;
        padding: 8px 10px;
        border-radius: 10px;
        border: 1px solid var(--color-border);
        background: color-mix(in srgb, var(--color-surface) 70%, transparent);
        color: var(--color-text-primary);
        font-weight: 900;
        font-size: 12px;
        transition:
            transform 140ms ease,
            border-color 140ms ease,
            background 140ms ease;

        svg {
            font-size: 14px;
            color: var(--color-accent);
        }

        &:hover {
            border-color: var(--color-border-light);
            transform: translateY(-1px);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 70%,
                transparent
            );
        }

        &:active {
            transform: translateY(0px);
        }
    `,FooterNote:a.div`
        margin-top: 14px;
        padding: 12px;
        border: 1px solid var(--color-border);
        border-radius: 12px;
        background: color-mix(in srgb, var(--color-surface) 70%, transparent);
        color: var(--color-text-secondary);
        font-size: 13px;
        line-height: 1.55;
    `},Em=()=>{const[s,d]=Y.useState(!1),[c,p]=Y.useState(""),x=Y.useMemo(()=>[{key:"viteCi",title:"CI for Vite React",hint:"Lint and build on PR and push",code:`# .github/workflows/ci.yml
name: CI

on:
  push:
    branches: ["main"]
  pull_request:

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Use Node
        uses: actions/setup-node@v4
        with:
          node-version: "20"
          cache: "npm"

      - name: Install
        run: npm ci

      - name: Lint
        run: npm run lint --if-present

      - name: Build
        run: npm run build`},{key:"deployPages",title:"Deploy to GitHub Pages",hint:"Build and publish dist",code:`# .github/workflows/pages.yml
name: Deploy Pages

on:
  push:
    branches: ["main"]

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: true

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Use Node
        uses: actions/setup-node@v4
        with:
          node-version: "20"
          cache: "npm"

      - name: Install
        run: npm ci

      - name: Build
        run: npm run build

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: dist

  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: \${{ steps.deployment.outputs.page_url }}
    steps:
      - name: Deploy
        id: deployment
        uses: actions/deploy-pages@v4`},{key:"matrix",title:"Matrix strategy",hint:"Test multiple Node versions",code:`# Example snippet inside a job
strategy:
  matrix:
    node: ["18", "20", "22"]

steps:
  - uses: actions/setup-node@v4
    with:
      node-version: \${{ matrix.node }}`},{key:"cache",title:"Caching dependencies",hint:"Speed up builds",code:`# setup-node cache handles npm cache automatically
- uses: actions/setup-node@v4
  with:
    node-version: "20"
    cache: "npm"

# For pnpm or yarn, change cache value accordingly`},{key:"secrets",title:"Secrets usage",hint:"Do not hardcode tokens",code:`# Use secrets in workflow
env:
  MY_TOKEN: \${{ secrets.MY_TOKEN }}

# Then in a step:
- run: echo "Token exists"
# Never print secrets in logs`},{key:"schedule",title:"Scheduled workflow",hint:"Nightly checks",code:`on:
  schedule:
    - cron: "0 2 * * *"  # daily at 02:00 UTC`},{key:"artifacts",title:"Upload artifacts",hint:"Store build output or reports",code:`- name: Upload test report
  uses: actions/upload-artifact@v4
  with:
    name: test-report
    path: reports/`}],[]),k=async(h,y)=>{try{await navigator.clipboard.writeText(h),p(y),window.setTimeout(()=>p(""),900)}catch{p("")}};return t.jsxs(oe.Wrapper,{children:[t.jsxs(oe.Header,{onClick:()=>d(h=>!h),role:"button",tabIndex:0,children:[t.jsxs(oe.Title,{children:[t.jsx(lm,{}),"GitHub Actions",t.jsx(oe.Badge,{children:"CI and automation inside GitHub"})]}),t.jsx(oe.Toggle,{"aria-hidden":"true",children:s?t.jsx(pr,{}):t.jsx(ur,{})})]}),!s&&t.jsxs(oe.Preview,{children:[t.jsx(oe.PreviewLine,{children:"GitHub Actions runs workflows when events happen like push, PR, schedule, release."}),t.jsx(oe.PreviewLine,{children:"Learn workflows, jobs, steps, runners, caching, secrets, artifacts, and Pages deploy."})]}),s&&t.jsxs(oe.Content,{children:[t.jsxs(oe.Section,{children:[t.jsxs(oe.SectionHead,{children:[t.jsx(ln,{}),t.jsx("h3",{children:"What is GitHub Actions"})]}),t.jsx(oe.Para,{children:`GitHub Actions is GitHub's built-in automation system. You write workflow YAML files inside ".github/workflows". GitHub then runs them on a runner (a machine) when triggers happen.`}),t.jsxs(oe.Note,{children:[t.jsx(we,{}),t.jsxs("div",{children:[t.jsx(oe.NoteTitle,{children:"Beginner mental model"}),t.jsx(oe.NoteText,{children:"Workflow is the full pipeline. Job is a machine doing work. Step is a single command or action."})]})]})]}),t.jsxs(oe.Section,{children:[t.jsxs(oe.SectionHead,{children:[t.jsx(Wr,{}),t.jsx("h3",{children:"Core building blocks"})]}),t.jsxs(oe.Bullets,{children:[t.jsxs("li",{children:[t.jsx("b",{children:"workflow"})," - YAML file that defines automation"]}),t.jsxs("li",{children:[t.jsx("b",{children:"trigger"})," - when it runs, example push, pull_request, schedule"]}),t.jsxs("li",{children:[t.jsx("b",{children:"job"})," - runs on a runner, can have multiple steps"]}),t.jsxs("li",{children:[t.jsx("b",{children:"step"})," - a command or a reusable action"]}),t.jsxs("li",{children:[t.jsx("b",{children:"runner"})," - machine that executes jobs, example ubuntu-latest"]})]}),t.jsxs(oe.Example,{children:[t.jsx(oe.ExampleTitle,{children:"Common triggers"}),t.jsxs(oe.Bullets,{children:[t.jsx("li",{children:"push - run CI when code is pushed"}),t.jsx("li",{children:"pull_request - run checks for PR"}),t.jsx("li",{children:"workflow_dispatch - manual run button"}),t.jsx("li",{children:"schedule - nightly builds"})]})]})]}),t.jsxs(oe.Section,{children:[t.jsxs(oe.SectionHead,{children:[t.jsx(Lp,{}),t.jsx("h3",{children:"Caching and speed"})]}),t.jsx(oe.Para,{children:'CI becomes slow when it installs dependencies from scratch every time. Caching saves time. For Node projects, "actions/setup-node" can cache npm automatically.'}),t.jsxs(oe.Note,{children:[t.jsx(Je,{}),t.jsxs("div",{children:[t.jsx(oe.NoteTitle,{children:"Practical advice"}),t.jsx(oe.NoteText,{children:'Use "npm ci" in CI. It is faster and uses lockfile strictly, which makes builds repeatable.'})]})]})]}),t.jsxs(oe.Section,{children:[t.jsxs(oe.SectionHead,{children:[t.jsx($r,{}),t.jsx("h3",{children:"Secrets management"})]}),t.jsxs(oe.Bullets,{children:[t.jsx("li",{children:"Secrets are stored in GitHub repo settings"}),t.jsxs("li",{children:['Use "\\$',"{ secrets.NAME }",'" in workflow']}),t.jsx("li",{children:"Do not print secrets in logs"})]}),t.jsxs(oe.Warn,{children:[t.jsx(Qe,{}),t.jsxs("div",{children:[t.jsx(oe.WarnTitle,{children:"Security warning"}),t.jsx(oe.WarnText,{children:"Never hardcode tokens in workflow files. Anyone with read access to repo can see them."})]})]})]}),t.jsxs(oe.Section,{children:[t.jsxs(oe.SectionHead,{children:[t.jsx(Np,{}),t.jsx("h3",{children:"Artifacts and deployments"})]}),t.jsxs(oe.Bullets,{children:[t.jsxs("li",{children:[t.jsx("b",{children:"Artifact"})," - file output saved from workflow, example dist, reports, logs"]}),t.jsx("li",{children:"Artifacts help debugging and also power deployments like GitHub Pages"})]}),t.jsxs(oe.Example,{children:[t.jsx(oe.ExampleTitle,{children:"GitHub Pages flow"}),t.jsxs(oe.Bullets,{children:[t.jsx("li",{children:"build job produces dist"}),t.jsx("li",{children:"upload pages artifact"}),t.jsx("li",{children:"deploy job publishes it"})]})]})]}),t.jsxs(oe.Section,{children:[t.jsxs(oe.SectionHead,{children:[t.jsx(ls,{}),t.jsx("h3",{children:"When Actions is not enough"})]}),t.jsx(oe.Para,{children:"Actions is great for CI and simple deploys. For advanced production workflows, you might add environment approvals, separate deploy repos, infra as code, and monitoring."})]}),t.jsxs(oe.Section,{children:[t.jsxs(oe.SectionHead,{children:[t.jsx(Nr,{}),t.jsx("h3",{children:"Workflow playground"})]}),t.jsx(oe.SnippetGrid,{children:x.map(h=>{const y=c===h.key;return t.jsxs(oe.SnippetCard,{children:[t.jsxs(oe.SnippetTop,{children:[t.jsxs("div",{children:[t.jsx(oe.SnippetTitle,{children:h.title}),t.jsx(oe.SnippetHint,{children:h.hint})]}),t.jsxs(oe.CopyBtn,{type:"button",onClick:()=>k(h.code,h.key),title:y?"Copied":"Copy",children:[y?t.jsx(we,{}):t.jsx(dr,{}),y?"Copied":"Copy"]})]}),t.jsx(oe.CodeBlock,{children:t.jsx("pre",{children:h.code})})]},h.key)})})]}),t.jsx(oe.FooterNote,{children:"GitHub Actions is your automation robot living next to your repo. Keep workflows simple, fast, and safe with caching and secrets."})]})]})},J={Wrapper:a.div`
        margin-bottom: 10px;
        border: 1px solid var(--color-border);
        border-radius: 14px;
        background: var(--color-surface);
        overflow: hidden;
    `,Header:a.div`
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 12px;
        padding: 16px 18px;
        cursor: pointer;
        user-select: none;
        transition: background 140ms ease;

        &:hover {
            background: var(--color-surface-2);
        }

        &:focus-visible {
            outline: 2px solid var(--color-primary);
            outline-offset: 3px;
        }
    `,Title:a.div`
        display: flex;
        align-items: center;
        gap: 10px;
        font-weight: 900;
        font-size: 18px;
        color: var(--color-text-primary);

        svg {
            font-size: 20px;
            color: var(--color-primary);
        }
    `,Badge:a.span`
        margin-left: 10px;
        font-size: 12px;
        font-weight: 800;
        color: var(--color-text-secondary);
        background: color-mix(in srgb, var(--color-surface-2) 85%, transparent);
        border: 1px solid var(--color-border);
        padding: 4px 10px;
        border-radius: 999px;
    `,Toggle:a.div`
        font-size: 20px;
        color: var(--color-text-muted);
        flex: 0 0 auto;
    `,Preview:a.div`
        padding: 14px 18px 18px 18px;
        border-top: 1px solid var(--color-border);
        background: color-mix(in srgb, var(--color-surface-2) 55%, transparent);
    `,PreviewLine:a.div`
        color: var(--color-text-secondary);
        font-size: 14px;
        line-height: 1.5;

        & + & {
            margin-top: 6px;
        }
    `,Content:a.div`
        padding: 18px;
        border-top: 1px solid var(--color-border);
        background: var(--color-surface-2);
    `,Section:a.div`
        & + & {
            margin-top: 16px;
        }
    `,SectionHead:a.div`
        display: flex;
        align-items: center;
        gap: 10px;
        margin-bottom: 8px;

        svg {
            color: var(--color-accent);
            font-size: 18px;
        }

        h3 {
            font-size: 16px;
            font-weight: 900;
            color: var(--color-text-primary);
        }
    `,Para:a.p`
        margin-bottom: 10px;
        color: var(--color-text-secondary);
        font-size: 14px;
        line-height: 1.6;
    `,Bullets:a.ul`
        padding-left: 0;
        margin: 0;

        li {
            color: var(--color-text-secondary);
            font-size: 14px;
            line-height: 1.6;
            padding-left: 14px;
            position: relative;
            margin: 8px 0;
        }

        li::before {
            content: "-";
            position: absolute;
            left: 0;
            top: 0;
            color: var(--color-text-muted);
            font-weight: 900;
        }

        b {
            color: var(--color-text-primary);
            font-weight: 900;
        }
    `,Example:a.div`
        margin-top: 10px;
        border: 1px solid var(--color-border);
        background: color-mix(in srgb, var(--color-surface) 75%, transparent);
        border-radius: 12px;
        padding: 12px;
    `,ExampleTitle:a.div`
        font-weight: 900;
        font-size: 13px;
        color: var(--color-text-primary);
        margin-bottom: 8px;
    `,CodeBlock:a.div`
        background: var(--color-code-bg);
        border: 1px solid var(--color-code-border);
        border-radius: 12px;
        padding: 12px;
        overflow: auto;

        pre {
            margin: 0;
            white-space: pre;
            font-size: 12.5px;
            line-height: 1.55;
            color: var(--color-text-primary);
        }
    `,Note:a.div`
        display: flex;
        gap: 10px;
        align-items: flex-start;
        margin-top: 10px;
        border: 1px solid var(--color-border);
        background: color-mix(
            in srgb,
            var(--color-primary) 8%,
            var(--color-surface)
        );
        border-radius: 12px;
        padding: 12px;

        svg {
            margin-top: 2px;
            color: var(--color-primary);
            font-size: 18px;
            flex: 0 0 auto;
        }
    `,NoteTitle:a.div`
        font-weight: 900;
        color: var(--color-text-primary);
        font-size: 13px;
        margin-bottom: 2px;
    `,NoteText:a.div`
        color: var(--color-text-secondary);
        font-size: 13px;
        line-height: 1.55;
    `,Warn:a.div`
        display: flex;
        gap: 10px;
        align-items: flex-start;
        margin-top: 10px;
        border: 1px solid var(--color-border);
        background: color-mix(
            in srgb,
            var(--color-warning) 10%,
            var(--color-surface)
        );
        border-radius: 12px;
        padding: 12px;

        svg {
            margin-top: 2px;
            color: var(--color-warning);
            font-size: 18px;
            flex: 0 0 auto;
        }
    `,WarnTitle:a.div`
        font-weight: 900;
        color: var(--color-text-primary);
        font-size: 13px;
        margin-bottom: 2px;
    `,WarnText:a.div`
        color: var(--color-text-secondary);
        font-size: 13px;
        line-height: 1.55;
    `,SnippetGrid:a.div`
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
        gap: 12px;
        margin-top: 10px;
    `,SnippetCard:a.div`
        border: 1px solid var(--color-border);
        background: var(--color-surface);
        border-radius: 12px;
        overflow: hidden;
        transition:
            transform 140ms ease,
            border-color 140ms ease;

        &:hover {
            transform: translateY(-2px);
            border-color: var(--color-border-light);
        }
    `,SnippetTop:a.div`
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        gap: 12px;
        padding: 12px;
        border-bottom: 1px solid var(--color-border);
        background: color-mix(in srgb, var(--color-surface-2) 55%, transparent);
    `,SnippetTitle:a.div`
        font-weight: 900;
        color: var(--color-text-primary);
        font-size: 13px;
        line-height: 1.3;
        margin-bottom: 4px;
    `,SnippetHint:a.div`
        color: var(--color-text-muted);
        font-size: 12px;
    `,CopyBtn:a.button`
        display: inline-flex;
        align-items: center;
        gap: 8px;
        padding: 8px 10px;
        border-radius: 10px;
        border: 1px solid var(--color-border);
        background: color-mix(in srgb, var(--color-surface) 70%, transparent);
        color: var(--color-text-primary);
        font-weight: 900;
        font-size: 12px;
        transition:
            transform 140ms ease,
            border-color 140ms ease,
            background 140ms ease;

        svg {
            font-size: 14px;
            color: var(--color-accent);
        }

        &:hover {
            border-color: var(--color-border-light);
            transform: translateY(-1px);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 70%,
                transparent
            );
        }

        &:active {
            transform: translateY(0px);
        }
    `,FooterNote:a.div`
        margin-top: 14px;
        padding: 12px;
        border: 1px solid var(--color-border);
        border-radius: 12px;
        background: color-mix(in srgb, var(--color-surface) 70%, transparent);
        color: var(--color-text-secondary);
        font-size: 13px;
        line-height: 1.55;
    `},Pm=()=>{const[s,d]=Y.useState(!1),[c,p]=Y.useState(""),x=Y.useMemo(()=>[{key:"sharedResponsibility",title:"Shared responsibility model",hint:"Who secures what",code:`# Cloud provider responsibilities:
# - physical data centers
# - hardware and networking
# - base infrastructure availability

# Your responsibilities:
# - your app code
# - your data
# - access control (IAM)
# - OS patching (for VMs)
# - configuration and secrets`},{key:"regionsAz",title:"Regions and availability zones",hint:"High availability idea",code:`# Region - a geographic area, example ap-south-1
# Availability Zone (AZ) - separate data centers inside a region

# High availability idea:
# run servers in 2+ AZs so one AZ failure does not kill your app`},{key:"computeStorageNetwork",title:"Compute vs storage vs networking",hint:"The 3 big building blocks",code:`# Compute - run code
# Example: virtual machines, containers, serverless

# Storage - store data
# Example: object storage, block storage, managed databases

# Networking - move data
# Example: VPC, subnets, routing, load balancers, DNS`},{key:"pricing",title:"Pay as you go pricing",hint:"Costs come from usage",code:`# Common cost drivers:
# - compute time (per second or per hour)
# - storage size (GB per month)
# - requests (API calls)
# - data transfer out (egress)
# - managed services premium`},{key:"iam",title:"Identity and access",hint:"Least privilege",code:`# Good practice:
# - create roles, not shared root credentials
# - give minimum permissions needed
# - rotate keys
# - enable MFA where possible`},{key:"envs",title:"Dev, staging, prod",hint:"Keep environments separate",code:`# Common approach:
# - dev for experiments
# - staging for production-like testing
# - prod for users

# Good rule:
# never test directly in prod`}],[]),k=async(h,y)=>{try{await navigator.clipboard.writeText(h),p(y),window.setTimeout(()=>p(""),900)}catch{p("")}};return t.jsxs(J.Wrapper,{children:[t.jsxs(J.Header,{onClick:()=>d(h=>!h),role:"button",tabIndex:0,children:[t.jsxs(J.Title,{children:[t.jsx(Sp,{}),"Cloud basics",t.jsx(J.Badge,{children:"Regions, AZ, pricing, responsibility"})]}),t.jsx(J.Toggle,{"aria-hidden":"true",children:s?t.jsx(pr,{}):t.jsx(ur,{})})]}),!s&&t.jsxs(J.Preview,{children:[t.jsx(J.PreviewLine,{children:"Cloud is renting compute, storage, and networking from a provider."}),t.jsx(J.PreviewLine,{children:"Learn regions, availability zones, shared responsibility, and how pricing works."})]}),s&&t.jsxs(J.Content,{children:[t.jsxs(J.Section,{children:[t.jsxs(J.SectionHead,{children:[t.jsx(Mt,{}),t.jsx("h3",{children:"What is cloud"})]}),t.jsx(J.Para,{children:"Cloud means you do not buy physical servers. You rent infrastructure from a provider and spin it up on demand. The provider runs data centers. You focus on building and operating your application."}),t.jsxs(J.Note,{children:[t.jsx(we,{}),t.jsxs("div",{children:[t.jsx(J.NoteTitle,{children:"Beginner mental model"}),t.jsx(J.NoteText,{children:"Cloud is like renting a fully managed building. You choose rooms, power, and security rules. The landlord handles the building itself."})]})]})]}),t.jsxs(J.Section,{children:[t.jsxs(J.SectionHead,{children:[t.jsx(om,{}),t.jsx("h3",{children:"Regions and availability zones"})]}),t.jsxs(J.Bullets,{children:[t.jsxs("li",{children:[t.jsx("b",{children:"Region"})," - a large geographic area with multiple data centers"]}),t.jsxs("li",{children:[t.jsx("b",{children:"Availability Zone"})," - separate data center group inside a region"]}),t.jsxs("li",{children:[t.jsx("b",{children:"High availability"})," - deploy across 2 or more AZs"]})]}),t.jsxs(J.Example,{children:[t.jsx(J.ExampleTitle,{children:"Why AZ matters"}),t.jsxs(J.Bullets,{children:[t.jsx("li",{children:"If one data center has an outage, your app stays alive in another AZ"}),t.jsx("li",{children:"Load balancer can send traffic to healthy AZ"})]})]})]}),t.jsxs(J.Section,{children:[t.jsxs(J.SectionHead,{children:[t.jsx(Wr,{}),t.jsx("h3",{children:"Compute, storage, networking"})]}),t.jsxs(J.Bullets,{children:[t.jsxs("li",{children:[t.jsx("b",{children:"Compute"})," - where code runs, example VMs, containers, serverless functions"]}),t.jsxs("li",{children:[t.jsx("b",{children:"Storage"})," - where data lives, example object storage, block disks, databases"]}),t.jsxs("li",{children:[t.jsx("b",{children:"Networking"})," - how traffic moves, example VPC, subnets, routing, load balancers"]})]}),t.jsxs(J.Example,{children:[t.jsx(J.ExampleTitle,{children:"Simple web app mapping"}),t.jsxs(J.Bullets,{children:[t.jsx("li",{children:"Compute - your backend servers"}),t.jsx("li",{children:"Storage - images and database"}),t.jsx("li",{children:"Networking - DNS, load balancer, private network"})]})]})]}),t.jsxs(J.Section,{children:[t.jsxs(J.SectionHead,{children:[t.jsx($r,{}),t.jsx("h3",{children:"Shared responsibility model"})]}),t.jsx(J.Para,{children:"Cloud security is shared. Provider secures the underlying infrastructure. You secure your configuration, identities, data, and application."}),t.jsxs(J.Bullets,{children:[t.jsxs("li",{children:[t.jsx("b",{children:"Provider handles"})," - data center security, hardware, base networking, service availability"]}),t.jsxs("li",{children:[t.jsx("b",{children:"You handle"})," - IAM permissions, secrets, application security, data access rules"]})]}),t.jsxs(J.Warn,{children:[t.jsx(Qe,{}),t.jsxs("div",{children:[t.jsx(J.WarnTitle,{children:"Biggest real world mistake"}),t.jsx(J.WarnText,{children:"People assume cloud is secure by default. Wrong. Misconfigured permissions and public buckets cause most incidents."})]})]})]}),t.jsxs(J.Section,{children:[t.jsxs(J.SectionHead,{children:[t.jsx(Jx,{}),t.jsx("h3",{children:"Pricing basics"})]}),t.jsxs(J.Bullets,{children:[t.jsxs("li",{children:[t.jsx("b",{children:"Pay as you go"})," - you pay for usage, not ownership"]}),t.jsxs("li",{children:[t.jsx("b",{children:"Compute time"})," - cost per hour or per second"]}),t.jsxs("li",{children:[t.jsx("b",{children:"Storage size"})," - cost per GB per month"]}),t.jsxs("li",{children:[t.jsx("b",{children:"Requests"})," - API calls, function invocations"]}),t.jsxs("li",{children:[t.jsx("b",{children:"Data transfer"})," - outgoing internet traffic can cost a lot"]})]}),t.jsxs(J.Note,{children:[t.jsx(sn,{}),t.jsxs("div",{children:[t.jsx(J.NoteTitle,{children:"Cost control habit"}),t.jsx(J.NoteText,{children:"Always set budgets and alerts. Clean up unused resources. Egress charges can surprise you."})]})]})]}),t.jsxs(J.Section,{children:[t.jsxs(J.SectionHead,{children:[t.jsx(Je,{}),t.jsx("h3",{children:"Core good practices"})]}),t.jsxs(J.Bullets,{children:[t.jsxs("li",{children:[t.jsx("b",{children:"Least privilege"})," in IAM - grant minimum permissions"]}),t.jsx("li",{children:"Separate dev, staging, production"}),t.jsx("li",{children:"Use encryption for sensitive data"}),t.jsx("li",{children:"Backups and disaster recovery plan"}),t.jsx("li",{children:"Monitoring and logs for everything important"})]})]}),t.jsxs(J.Section,{children:[t.jsxs(J.SectionHead,{children:[t.jsx(Nr,{}),t.jsx("h3",{children:"Cheat sheet playground"})]}),t.jsx(J.SnippetGrid,{children:x.map(h=>{const y=c===h.key;return t.jsxs(J.SnippetCard,{children:[t.jsxs(J.SnippetTop,{children:[t.jsxs("div",{children:[t.jsx(J.SnippetTitle,{children:h.title}),t.jsx(J.SnippetHint,{children:h.hint})]}),t.jsxs(J.CopyBtn,{type:"button",onClick:()=>k(h.code,h.key),title:y?"Copied":"Copy",children:[y?t.jsx(we,{}):t.jsx(dr,{}),y?"Copied":"Copy"]})]}),t.jsx(J.CodeBlock,{children:t.jsx("pre",{children:h.code})})]},h.key)})})]}),t.jsx(J.FooterNote,{children:"Cloud is powerful because everything is programmable. Treat infrastructure like code, keep permissions tight, and always watch costs."})]})]})},F={Wrapper:a.div`
        margin-bottom: 10px;
        border: 1px solid var(--color-border);
        border-radius: 14px;
        background: var(--color-surface);
        overflow: hidden;
    `,Header:a.div`
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 12px;
        padding: 16px 18px;
        cursor: pointer;
        user-select: none;
        transition: background 140ms ease;

        &:hover {
            background: var(--color-surface-2);
        }

        &:focus-visible {
            outline: 2px solid var(--color-primary);
            outline-offset: 3px;
        }
    `,Title:a.div`
        display: flex;
        align-items: center;
        gap: 10px;
        font-weight: 900;
        font-size: 18px;
        color: var(--color-text-primary);

        svg {
            font-size: 20px;
            color: var(--color-primary);
        }
    `,Badge:a.span`
        margin-left: 10px;
        font-size: 12px;
        font-weight: 800;
        color: var(--color-text-secondary);
        background: color-mix(in srgb, var(--color-surface-2) 85%, transparent);
        border: 1px solid var(--color-border);
        padding: 4px 10px;
        border-radius: 999px;
    `,Toggle:a.div`
        font-size: 20px;
        color: var(--color-text-muted);
        flex: 0 0 auto;
    `,Preview:a.div`
        padding: 14px 18px 18px 18px;
        border-top: 1px solid var(--color-border);
        background: color-mix(in srgb, var(--color-surface-2) 55%, transparent);
    `,PreviewLine:a.div`
        color: var(--color-text-secondary);
        font-size: 14px;
        line-height: 1.5;

        & + & {
            margin-top: 6px;
        }
    `,Content:a.div`
        padding: 18px;
        border-top: 1px solid var(--color-border);
        background: var(--color-surface-2);
    `,Section:a.div`
        & + & {
            margin-top: 16px;
        }
    `,SectionHead:a.div`
        display: flex;
        align-items: center;
        gap: 10px;
        margin-bottom: 8px;

        svg {
            color: var(--color-accent);
            font-size: 18px;
        }

        h3 {
            font-size: 16px;
            font-weight: 900;
            color: var(--color-text-primary);
        }
    `,Para:a.p`
        margin-bottom: 10px;
        color: var(--color-text-secondary);
        font-size: 14px;
        line-height: 1.6;
    `,Bullets:a.ul`
        padding-left: 0;
        margin: 0;

        li {
            color: var(--color-text-secondary);
            font-size: 14px;
            line-height: 1.6;
            padding-left: 14px;
            position: relative;
            margin: 8px 0;
        }

        li::before {
            content: "-";
            position: absolute;
            left: 0;
            top: 0;
            color: var(--color-text-muted);
            font-weight: 900;
        }

        b {
            color: var(--color-text-primary);
            font-weight: 900;
        }
    `,Example:a.div`
        margin-top: 10px;
        border: 1px solid var(--color-border);
        background: color-mix(in srgb, var(--color-surface) 75%, transparent);
        border-radius: 12px;
        padding: 12px;
    `,ExampleTitle:a.div`
        font-weight: 900;
        font-size: 13px;
        color: var(--color-text-primary);
        margin-bottom: 8px;
    `,CodeBlock:a.div`
        background: var(--color-code-bg);
        border: 1px solid var(--color-code-border);
        border-radius: 12px;
        padding: 12px;
        overflow: auto;

        pre {
            margin: 0;
            white-space: pre;
            font-size: 12.5px;
            line-height: 1.55;
            color: var(--color-text-primary);
        }
    `,Note:a.div`
        display: flex;
        gap: 10px;
        align-items: flex-start;
        margin-top: 10px;
        border: 1px solid var(--color-border);
        background: color-mix(
            in srgb,
            var(--color-primary) 8%,
            var(--color-surface)
        );
        border-radius: 12px;
        padding: 12px;

        svg {
            margin-top: 2px;
            color: var(--color-primary);
            font-size: 18px;
            flex: 0 0 auto;
        }
    `,NoteTitle:a.div`
        font-weight: 900;
        color: var(--color-text-primary);
        font-size: 13px;
        margin-bottom: 2px;
    `,NoteText:a.div`
        color: var(--color-text-secondary);
        font-size: 13px;
        line-height: 1.55;
    `,Warn:a.div`
        display: flex;
        gap: 10px;
        align-items: flex-start;
        margin-top: 10px;
        border: 1px solid var(--color-border);
        background: color-mix(
            in srgb,
            var(--color-warning) 10%,
            var(--color-surface)
        );
        border-radius: 12px;
        padding: 12px;

        svg {
            margin-top: 2px;
            color: var(--color-warning);
            font-size: 18px;
            flex: 0 0 auto;
        }
    `,WarnTitle:a.div`
        font-weight: 900;
        color: var(--color-text-primary);
        font-size: 13px;
        margin-bottom: 2px;
    `,WarnText:a.div`
        color: var(--color-text-secondary);
        font-size: 13px;
        line-height: 1.55;
    `,SnippetGrid:a.div`
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
        gap: 12px;
        margin-top: 10px;
    `,SnippetCard:a.div`
        border: 1px solid var(--color-border);
        background: var(--color-surface);
        border-radius: 12px;
        overflow: hidden;
        transition:
            transform 140ms ease,
            border-color 140ms ease;

        &:hover {
            transform: translateY(-2px);
            border-color: var(--color-border-light);
        }
    `,SnippetTop:a.div`
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        gap: 12px;
        padding: 12px;
        border-bottom: 1px solid var(--color-border);
        background: color-mix(in srgb, var(--color-surface-2) 55%, transparent);
    `,SnippetTitle:a.div`
        font-weight: 900;
        color: var(--color-text-primary);
        font-size: 13px;
        line-height: 1.3;
        margin-bottom: 4px;
    `,SnippetHint:a.div`
        color: var(--color-text-muted);
        font-size: 12px;
    `,CopyBtn:a.button`
        display: inline-flex;
        align-items: center;
        gap: 8px;
        padding: 8px 10px;
        border-radius: 10px;
        border: 1px solid var(--color-border);
        background: color-mix(in srgb, var(--color-surface) 70%, transparent);
        color: var(--color-text-primary);
        font-weight: 900;
        font-size: 12px;
        transition:
            transform 140ms ease,
            border-color 140ms ease,
            background 140ms ease;

        svg {
            font-size: 14px;
            color: var(--color-accent);
        }

        &:hover {
            border-color: var(--color-border-light);
            transform: translateY(-1px);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 70%,
                transparent
            );
        }

        &:active {
            transform: translateY(0px);
        }
    `,FooterNote:a.div`
        margin-top: 14px;
        padding: 12px;
        border: 1px solid var(--color-border);
        border-radius: 12px;
        background: color-mix(in srgb, var(--color-surface) 70%, transparent);
        color: var(--color-text-secondary);
        font-size: 13px;
        line-height: 1.55;
    `},zm=()=>{const[s,d]=Y.useState(!1),[c,p]=Y.useState(""),x=Y.useMemo(()=>[{key:"launchChecklist",title:"EC2 launch checklist",hint:"What you choose during create",code:`# When creating an EC2 instance you choose:
# - AMI (OS image) - Ubuntu, Amazon Linux, etc
# - Instance type - t3.micro, t3.small, etc
# - Key pair - for SSH login
# - Network - VPC and subnet
# - Security group - firewall rules
# - Storage - EBS volume size
# - User data - startup script (optional)`},{key:"ssh",title:"SSH into EC2",hint:"Most common access method",code:`# Make key file readable only by you
chmod 400 my-key.pem

# SSH (Ubuntu AMI usually uses user "ubuntu")
ssh -i my-key.pem ubuntu@<public-ip>

# Amazon Linux often uses user "ec2-user"
ssh -i my-key.pem ec2-user@<public-ip>`},{key:"securityGroup",title:"Security group rules",hint:"Firewall basics",code:`# Typical inbound rules:
# - SSH 22 from your IP only
# - HTTP 80 from anywhere (0.0.0.0/0)
# - HTTPS 443 from anywhere (0.0.0.0/0)

# Bad practice:
# - SSH 22 open to world 0.0.0.0/0`},{key:"installNginx",title:"Install nginx on Ubuntu",hint:"Quick web server test",code:`sudo apt update
sudo apt install -y nginx
sudo systemctl enable nginx
sudo systemctl start nginx

# Check
curl -I http://localhost`},{key:"userData",title:"User data script example",hint:"Auto setup at boot",code:`#!/bin/bash
apt update
apt install -y nginx
systemctl enable nginx
systemctl start nginx

echo "<h1>Hello from EC2</h1>" > /var/www/html/index.html`},{key:"privatePublic",title:"Public vs private IP",hint:"Understand routing",code:`# Private IP
# - used inside VPC
# - does not work directly from internet

# Public IP
# - internet reachable if security group allows
# - may change if you stop and start (unless Elastic IP)`},{key:"health",title:"Health check idea",hint:"How LBs and monitoring see it",code:`# A simple health endpoint idea:
# - return 200 OK
# - lightweight
# - no heavy DB work

# Example:
# GET /health -> 200 OK`}],[]),k=async(h,y)=>{try{await navigator.clipboard.writeText(h),p(y),window.setTimeout(()=>p(""),900)}catch{p("")}};return t.jsxs(F.Wrapper,{children:[t.jsxs(F.Header,{onClick:()=>d(h=>!h),role:"button",tabIndex:0,children:[t.jsxs(F.Title,{children:[t.jsx(An,{}),"AWS EC2",t.jsx(F.Badge,{children:"Virtual machines in AWS"})]}),t.jsx(F.Toggle,{"aria-hidden":"true",children:s?t.jsx(pr,{}):t.jsx(ur,{})})]}),!s&&t.jsxs(F.Preview,{children:[t.jsx(F.PreviewLine,{children:"EC2 is AWS service for running virtual machines (servers) in the cloud."}),t.jsx(F.PreviewLine,{children:"Learn AMI, instance types, SSH, security groups, storage, and user data scripts."})]}),s&&t.jsxs(F.Content,{children:[t.jsxs(F.Section,{children:[t.jsxs(F.SectionHead,{children:[t.jsx(Mt,{}),t.jsx("h3",{children:"What is EC2"})]}),t.jsx(F.Para,{children:"EC2 stands for Elastic Compute Cloud. It lets you rent virtual machines inside AWS. You select an OS image, CPU and RAM size, networking, and firewall rules."}),t.jsxs(F.Note,{children:[t.jsx(we,{}),t.jsxs("div",{children:[t.jsx(F.NoteTitle,{children:"Beginner mental model"}),t.jsx(F.NoteText,{children:"EC2 is like renting a computer in AWS data center. You can install software, run servers, and expose ports to internet."})]})]})]}),t.jsxs(F.Section,{children:[t.jsxs(F.SectionHead,{children:[t.jsx(Wr,{}),t.jsx("h3",{children:"Core parts you should know"})]}),t.jsxs(F.Bullets,{children:[t.jsxs("li",{children:[t.jsx("b",{children:"AMI"})," - the OS image, example Ubuntu, Amazon Linux"]}),t.jsxs("li",{children:[t.jsx("b",{children:"Instance type"})," - CPU and RAM size, example t3.micro"]}),t.jsxs("li",{children:[t.jsx("b",{children:"EBS"})," - storage disk attached to instance"]}),t.jsxs("li",{children:[t.jsx("b",{children:"Security group"})," - firewall rules for inbound and outbound"]}),t.jsxs("li",{children:[t.jsx("b",{children:"Key pair"})," - private key used for SSH login"]}),t.jsxs("li",{children:[t.jsx("b",{children:"VPC and subnet"})," - the private network where instance lives"]})]})]}),t.jsxs(F.Section,{children:[t.jsxs(F.SectionHead,{children:[t.jsx(Pp,{}),t.jsx("h3",{children:"Access - SSH"})]}),t.jsx(F.Para,{children:"SSH is the most common way to login to EC2 instances. You need the private key file and the correct username for the AMI."}),t.jsxs(F.Example,{children:[t.jsx(F.ExampleTitle,{children:"Typical usernames"}),t.jsxs(F.Bullets,{children:[t.jsx("li",{children:'Ubuntu AMI - user "ubuntu"'}),t.jsx("li",{children:'Amazon Linux - user "ec2-user"'})]})]}),t.jsxs(F.Warn,{children:[t.jsx(Qe,{}),t.jsxs("div",{children:[t.jsx(F.WarnTitle,{children:"Security warning"}),t.jsx(F.WarnText,{children:"Never share your private key. Store it safely. Also do not open SSH to the whole internet."})]})]})]}),t.jsxs(F.Section,{children:[t.jsxs(F.SectionHead,{children:[t.jsx($r,{}),t.jsx("h3",{children:"Security groups"})]}),t.jsx(F.Para,{children:"Security group is a stateful firewall. If inbound traffic is allowed, return traffic is allowed automatically."}),t.jsxs(F.Bullets,{children:[t.jsx("li",{children:"Allow only needed ports"}),t.jsx("li",{children:"Restrict SSH to your IP"}),t.jsx("li",{children:"Open HTTP and HTTPS if hosting website"})]}),t.jsxs(F.Note,{children:[t.jsx(Je,{}),t.jsxs("div",{children:[t.jsx(F.NoteTitle,{children:"Golden rule"}),t.jsx(F.NoteText,{children:"Start with minimum access. Add rules only when required."})]})]})]}),t.jsxs(F.Section,{children:[t.jsxs(F.SectionHead,{children:[t.jsx(Tp,{}),t.jsx("h3",{children:"Storage - EBS"})]}),t.jsxs(F.Bullets,{children:[t.jsx("li",{children:"EBS is like a virtual hard disk attached to your instance"}),t.jsx("li",{children:"You can resize volume later"}),t.jsx("li",{children:"Snapshots can be used for backup"})]}),t.jsxs(F.Example,{children:[t.jsx(F.ExampleTitle,{children:"Common setup"}),t.jsxs(F.Bullets,{children:[t.jsx("li",{children:"1 root EBS volume for OS"}),t.jsx("li",{children:"optional extra EBS volume for application data"})]})]})]}),t.jsxs(F.Section,{children:[t.jsxs(F.SectionHead,{children:[t.jsx(Na,{}),t.jsx("h3",{children:"Public IP, private IP, Elastic IP"})]}),t.jsxs(F.Bullets,{children:[t.jsxs("li",{children:[t.jsx("b",{children:"Private IP"})," - used inside VPC, not reachable from internet directly"]}),t.jsxs("li",{children:[t.jsx("b",{children:"Public IP"})," - internet reachable if allowed by security group"]}),t.jsxs("li",{children:[t.jsx("b",{children:"Elastic IP"})," - static public IP that you own until you release it"]})]}),t.jsxs(F.Warn,{children:[t.jsx(Qe,{}),t.jsxs("div",{children:[t.jsx(F.WarnTitle,{children:"Common surprise"}),t.jsx(F.WarnText,{children:"Default public IP can change when instance stops and starts. Use Elastic IP if you need fixed address."})]})]})]}),t.jsxs(F.Section,{children:[t.jsxs(F.SectionHead,{children:[t.jsx(Ta,{}),t.jsx("h3",{children:"User data scripts"})]}),t.jsx(F.Para,{children:"User data is a startup script that runs when the instance boots. It is used to auto install packages and configure services. This is a basic form of automation."}),t.jsxs(F.Note,{children:[t.jsx(sn,{}),t.jsxs("div",{children:[t.jsx(F.NoteTitle,{children:"Real use case"}),t.jsx(F.NoteText,{children:"Use user data to install nginx, start your backend, pull latest code, or run Docker containers at boot."})]})]})]}),t.jsxs(F.Section,{children:[t.jsxs(F.SectionHead,{children:[t.jsx(Nr,{}),t.jsx("h3",{children:"Command playground"})]}),t.jsx(F.SnippetGrid,{children:x.map(h=>{const y=c===h.key;return t.jsxs(F.SnippetCard,{children:[t.jsxs(F.SnippetTop,{children:[t.jsxs("div",{children:[t.jsx(F.SnippetTitle,{children:h.title}),t.jsx(F.SnippetHint,{children:h.hint})]}),t.jsxs(F.CopyBtn,{type:"button",onClick:()=>k(h.code,h.key),title:y?"Copied":"Copy",children:[y?t.jsx(we,{}):t.jsx(dr,{}),y?"Copied":"Copy"]})]}),t.jsx(F.CodeBlock,{children:t.jsx("pre",{children:h.code})})]},h.key)})})]}),t.jsx(F.FooterNote,{children:"EC2 is the simplest cloud compute starting point. Master security groups, SSH, and automation with user data and you will feel confident quickly."})]})]})},R={Wrapper:a.div`
        margin-bottom: 10px;
        border: 1px solid var(--color-border);
        border-radius: 14px;
        background: var(--color-surface);
        overflow: hidden;
    `,Header:a.div`
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 12px;
        padding: 16px 18px;
        cursor: pointer;
        user-select: none;
        transition: background 140ms ease;

        &:hover {
            background: var(--color-surface-2);
        }

        &:focus-visible {
            outline: 2px solid var(--color-primary);
            outline-offset: 3px;
        }
    `,Title:a.div`
        display: flex;
        align-items: center;
        gap: 10px;
        font-weight: 900;
        font-size: 18px;
        color: var(--color-text-primary);

        svg {
            font-size: 20px;
            color: var(--color-primary);
        }
    `,Badge:a.span`
        margin-left: 10px;
        font-size: 12px;
        font-weight: 800;
        color: var(--color-text-secondary);
        background: color-mix(in srgb, var(--color-surface-2) 85%, transparent);
        border: 1px solid var(--color-border);
        padding: 4px 10px;
        border-radius: 999px;
    `,Toggle:a.div`
        font-size: 20px;
        color: var(--color-text-muted);
        flex: 0 0 auto;
    `,Preview:a.div`
        padding: 14px 18px 18px 18px;
        border-top: 1px solid var(--color-border);
        background: color-mix(in srgb, var(--color-surface-2) 55%, transparent);
    `,PreviewLine:a.div`
        color: var(--color-text-secondary);
        font-size: 14px;
        line-height: 1.5;

        & + & {
            margin-top: 6px;
        }
    `,Content:a.div`
        padding: 18px;
        border-top: 1px solid var(--color-border);
        background: var(--color-surface-2);
    `,Section:a.div`
        & + & {
            margin-top: 16px;
        }
    `,SectionHead:a.div`
        display: flex;
        align-items: center;
        gap: 10px;
        margin-bottom: 8px;

        svg {
            color: var(--color-accent);
            font-size: 18px;
        }

        h3 {
            font-size: 16px;
            font-weight: 900;
            color: var(--color-text-primary);
        }
    `,Para:a.p`
        margin-bottom: 10px;
        color: var(--color-text-secondary);
        font-size: 14px;
        line-height: 1.6;
    `,Bullets:a.ul`
        padding-left: 0;
        margin: 0;

        li {
            color: var(--color-text-secondary);
            font-size: 14px;
            line-height: 1.6;
            padding-left: 14px;
            position: relative;
            margin: 8px 0;
        }

        li::before {
            content: "-";
            position: absolute;
            left: 0;
            top: 0;
            color: var(--color-text-muted);
            font-weight: 900;
        }

        b {
            color: var(--color-text-primary);
            font-weight: 900;
        }
    `,Example:a.div`
        margin-top: 10px;
        border: 1px solid var(--color-border);
        background: color-mix(in srgb, var(--color-surface) 75%, transparent);
        border-radius: 12px;
        padding: 12px;
    `,ExampleTitle:a.div`
        font-weight: 900;
        font-size: 13px;
        color: var(--color-text-primary);
        margin-bottom: 8px;
    `,CodeBlock:a.div`
        background: var(--color-code-bg);
        border: 1px solid var(--color-code-border);
        border-radius: 12px;
        padding: 12px;
        overflow: auto;

        pre {
            margin: 0;
            white-space: pre;
            font-size: 12.5px;
            line-height: 1.55;
            color: var(--color-text-primary);
        }
    `,Note:a.div`
        display: flex;
        gap: 10px;
        align-items: flex-start;
        margin-top: 10px;
        border: 1px solid var(--color-border);
        background: color-mix(
            in srgb,
            var(--color-primary) 8%,
            var(--color-surface)
        );
        border-radius: 12px;
        padding: 12px;

        svg {
            margin-top: 2px;
            color: var(--color-primary);
            font-size: 18px;
            flex: 0 0 auto;
        }
    `,NoteTitle:a.div`
        font-weight: 900;
        color: var(--color-text-primary);
        font-size: 13px;
        margin-bottom: 2px;
    `,NoteText:a.div`
        color: var(--color-text-secondary);
        font-size: 13px;
        line-height: 1.55;
    `,Warn:a.div`
        display: flex;
        gap: 10px;
        align-items: flex-start;
        margin-top: 10px;
        border: 1px solid var(--color-border);
        background: color-mix(
            in srgb,
            var(--color-warning) 10%,
            var(--color-surface)
        );
        border-radius: 12px;
        padding: 12px;

        svg {
            margin-top: 2px;
            color: var(--color-warning);
            font-size: 18px;
            flex: 0 0 auto;
        }
    `,WarnTitle:a.div`
        font-weight: 900;
        color: var(--color-text-primary);
        font-size: 13px;
        margin-bottom: 2px;
    `,WarnText:a.div`
        color: var(--color-text-secondary);
        font-size: 13px;
        line-height: 1.55;
    `,SnippetGrid:a.div`
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
        gap: 12px;
        margin-top: 10px;
    `,SnippetCard:a.div`
        border: 1px solid var(--color-border);
        background: var(--color-surface);
        border-radius: 12px;
        overflow: hidden;
        transition:
            transform 140ms ease,
            border-color 140ms ease;

        &:hover {
            transform: translateY(-2px);
            border-color: var(--color-border-light);
        }
    `,SnippetTop:a.div`
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        gap: 12px;
        padding: 12px;
        border-bottom: 1px solid var(--color-border);
        background: color-mix(in srgb, var(--color-surface-2) 55%, transparent);
    `,SnippetTitle:a.div`
        font-weight: 900;
        color: var(--color-text-primary);
        font-size: 13px;
        line-height: 1.3;
        margin-bottom: 4px;
    `,SnippetHint:a.div`
        color: var(--color-text-muted);
        font-size: 12px;
    `,CopyBtn:a.button`
        display: inline-flex;
        align-items: center;
        gap: 8px;
        padding: 8px 10px;
        border-radius: 10px;
        border: 1px solid var(--color-border);
        background: color-mix(in srgb, var(--color-surface) 70%, transparent);
        color: var(--color-text-primary);
        font-weight: 900;
        font-size: 12px;
        transition:
            transform 140ms ease,
            border-color 140ms ease,
            background 140ms ease;

        svg {
            font-size: 14px;
            color: var(--color-accent);
        }

        &:hover {
            border-color: var(--color-border-light);
            transform: translateY(-1px);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 70%,
                transparent
            );
        }

        &:active {
            transform: translateY(0px);
        }
    `,FooterNote:a.div`
        margin-top: 14px;
        padding: 12px;
        border: 1px solid var(--color-border);
        border-radius: 12px;
        background: color-mix(in srgb, var(--color-surface) 70%, transparent);
        color: var(--color-text-secondary);
        font-size: 13px;
        line-height: 1.55;
    `},Nm=()=>{const[s,d]=Y.useState(!1),[c,p]=Y.useState(""),x=Y.useMemo(()=>[{key:"concepts",title:"S3 core concepts",hint:"Bucket, object, key",code:`# S3 basics:
# - Bucket: top level container (must be globally unique name)
# - Object: the file you store
# - Key: object path/name inside bucket, example images/logo.png
# - Prefix: folder-like part of key, example images/
# - Metadata: extra info stored with object`},{key:"publicPrivate",title:"Public vs private",hint:"Default should be private",code:`# Private bucket:
# - only accessible using AWS auth (IAM)
# - best for app uploads and sensitive files

# Public bucket:
# - accessible over internet
# - used for public assets (with strict control)

# Biggest mistake:
# making bucket public accidentally`},{key:"staticWebsite",title:"Static website hosting idea",hint:"Serve HTML, CSS, JS",code:`# S3 can host static websites:
# - upload index.html, assets
# - enable static website hosting
# - set index and error document
# - allow public read or use CloudFront

# Good practice:
# use CloudFront in front for HTTPS and caching`},{key:"lifecycle",title:"Lifecycle policies",hint:"Auto move or delete old files",code:`# Lifecycle policy examples:
# - move logs to cheaper storage after 30 days
# - delete temporary uploads after 7 days
# - expire old backups after 180 days`},{key:"versioning",title:"Versioning",hint:"Protect against accidental deletes",code:`# Versioning keeps multiple versions of same key:
# - helps recover overwritten files
# - helps recover deleted files (delete marker)

# Cost note:
# more versions means more storage cost`},{key:"encryption",title:"Encryption",hint:"Data protection",code:`# Encryption options:
# - SSE-S3: AWS managed keys
# - SSE-KMS: KMS managed keys, more control and audit
# - client side encryption: you encrypt before upload

# Simple default:
# enable SSE-S3 or SSE-KMS`},{key:"presignedUrl",title:"Pre-signed URL concept",hint:"Temporary upload or download link",code:`# Pre-signed URL:
# - a temporary URL with signature
# - allows upload/download without making bucket public
# - expires after set time

# Common use:
# user uploads file directly to S3 from frontend`}],[]),k=async(h,y)=>{try{await navigator.clipboard.writeText(h),p(y),window.setTimeout(()=>p(""),900)}catch{p("")}};return t.jsxs(R.Wrapper,{children:[t.jsxs(R.Header,{onClick:()=>d(h=>!h),role:"button",tabIndex:0,children:[t.jsxs(R.Title,{children:[t.jsx(Cp,{}),"S3",t.jsx(R.Badge,{children:"Object storage in AWS"})]}),t.jsx(R.Toggle,{"aria-hidden":"true",children:s?t.jsx(pr,{}):t.jsx(ur,{})})]}),!s&&t.jsxs(R.Preview,{children:[t.jsx(R.PreviewLine,{children:"S3 is object storage. You store files as objects inside buckets."}),t.jsx(R.PreviewLine,{children:"Learn buckets, objects, permissions, static hosting, versioning, lifecycle, and pre-signed URLs."})]}),s&&t.jsxs(R.Content,{children:[t.jsxs(R.Section,{children:[t.jsxs(R.SectionHead,{children:[t.jsx(em,{}),t.jsx("h3",{children:"What is S3"})]}),t.jsx(R.Para,{children:"S3 stands for Simple Storage Service. It is object storage used to store files like images, videos, backups, logs, and even static websites. You store objects inside buckets."}),t.jsxs(R.Note,{children:[t.jsx(we,{}),t.jsxs("div",{children:[t.jsx(R.NoteTitle,{children:"Beginner mental model"}),t.jsx(R.NoteText,{children:"Bucket is like a big hard drive folder in the cloud. Object is a file. Key is the file path name."})]})]})]}),t.jsxs(R.Section,{children:[t.jsxs(R.SectionHead,{children:[t.jsx(Bo,{}),t.jsx("h3",{children:"Bucket, object, key, prefix"})]}),t.jsxs(R.Bullets,{children:[t.jsxs("li",{children:[t.jsx("b",{children:"Bucket"})," - top level container, name must be globally unique"]}),t.jsxs("li",{children:[t.jsx("b",{children:"Object"})," - actual file content plus metadata"]}),t.jsxs("li",{children:[t.jsx("b",{children:"Key"}),' - object name path, example "images/logo.png"']}),t.jsxs("li",{children:[t.jsx("b",{children:"Prefix"}),' - folder-like part, example "images/"']})]}),t.jsxs(R.Example,{children:[t.jsx(R.ExampleTitle,{children:"Example mapping"}),t.jsxs(R.Bullets,{children:[t.jsx("li",{children:'Bucket: "my-app-assets"'}),t.jsx("li",{children:'Key: "avatars/user123.png"'}),t.jsx("li",{children:"Object: the png file stored at that key"})]})]})]}),t.jsxs(R.Section,{children:[t.jsxs(R.SectionHead,{children:[t.jsx($r,{}),t.jsx("h3",{children:"Permissions - public vs private"})]}),t.jsx(R.Para,{children:"S3 security is mostly about access. Most production buckets should be private and accessed via IAM roles or pre-signed URLs."}),t.jsxs(R.Bullets,{children:[t.jsxs("li",{children:[t.jsx("b",{children:"Private"})," - only accessible with AWS auth, safest default"]}),t.jsxs("li",{children:[t.jsx("b",{children:"Public"})," - accessible from internet, used only for public assets"]})]}),t.jsxs(R.Warn,{children:[t.jsx(Qe,{}),t.jsxs("div",{children:[t.jsx(R.WarnTitle,{children:"Most famous S3 incident"}),t.jsx(R.WarnText,{children:"Misconfigured buckets accidentally made public. Always double check public access block settings and policies."})]})]}),t.jsxs(R.Note,{children:[t.jsx(Ea,{}),t.jsxs("div",{children:[t.jsx(R.NoteTitle,{children:"Safer pattern for public content"}),t.jsx(R.NoteText,{children:"Keep bucket private and put CloudFront in front. Then control access and caching at CDN layer."})]})]})]}),t.jsxs(R.Section,{children:[t.jsxs(R.SectionHead,{children:[t.jsx(Mt,{}),t.jsx("h3",{children:"Static website hosting"})]}),t.jsx(R.Para,{children:"S3 can serve static files like HTML, CSS, JS. That means you can host a simple website without servers. For HTTPS and better performance, use CloudFront."}),t.jsxs(R.Example,{children:[t.jsx(R.ExampleTitle,{children:"What works in S3 hosting"}),t.jsxs(R.Bullets,{children:[t.jsx("li",{children:"Portfolio sites"}),t.jsx("li",{children:"Docs websites"}),t.jsx("li",{children:"Single page apps"})]})]})]}),t.jsxs(R.Section,{children:[t.jsxs(R.SectionHead,{children:[t.jsx(Lp,{}),t.jsx("h3",{children:"Versioning"})]}),t.jsxs(R.Bullets,{children:[t.jsx("li",{children:"Stores multiple versions of the same key"}),t.jsx("li",{children:"Helps recover overwritten files"}),t.jsx("li",{children:"Delete creates a delete marker instead of permanent removal"})]}),t.jsxs(R.Note,{children:[t.jsx(Je,{}),t.jsxs("div",{children:[t.jsx(R.NoteTitle,{children:"When to enable"}),t.jsx(R.NoteText,{children:"Enable versioning for important buckets like backups and critical assets. Remember it increases storage usage."})]})]})]}),t.jsxs(R.Section,{children:[t.jsxs(R.SectionHead,{children:[t.jsx(ls,{}),t.jsx("h3",{children:"Lifecycle policies"})]}),t.jsx(R.Para,{children:"Lifecycle rules automatically transition objects to cheaper storage classes or delete them after a time. This keeps storage costs controlled."}),t.jsxs(R.Bullets,{children:[t.jsx("li",{children:"Move logs to cheaper tier after 30 days"}),t.jsx("li",{children:"Delete temporary uploads after 7 days"}),t.jsx("li",{children:"Expire older backup versions after 180 days"})]})]}),t.jsxs(R.Section,{children:[t.jsxs(R.SectionHead,{children:[t.jsx(sn,{}),t.jsx("h3",{children:"Encryption"})]}),t.jsxs(R.Bullets,{children:[t.jsxs("li",{children:[t.jsx("b",{children:"SSE-S3"})," - AWS managed keys, simple and common"]}),t.jsxs("li",{children:[t.jsx("b",{children:"SSE-KMS"})," - KMS managed keys, better audit and control"]}),t.jsxs("li",{children:[t.jsx("b",{children:"Client side"})," - you encrypt before upload"]})]}),t.jsxs(R.Note,{children:[t.jsx(we,{}),t.jsxs("div",{children:[t.jsx(R.NoteTitle,{children:"Safe default"}),t.jsx(R.NoteText,{children:"Enable server-side encryption and block public access unless you have a specific reason."})]})]})]}),t.jsxs(R.Section,{children:[t.jsxs(R.SectionHead,{children:[t.jsx(zp,{}),t.jsx("h3",{children:"Pre-signed URLs"})]}),t.jsx(R.Para,{children:"Pre-signed URL is a time-limited signed link. It allows a user to upload or download an object without exposing the bucket publicly. This is a standard pattern for file uploads from frontend."}),t.jsxs(R.Example,{children:[t.jsx(R.ExampleTitle,{children:"Real use case"}),t.jsxs(R.Bullets,{children:[t.jsx("li",{children:"User requests upload URL from backend"}),t.jsx("li",{children:"Backend returns a pre-signed URL valid for 1 to 5 minutes"}),t.jsx("li",{children:"Frontend uploads file directly to S3"})]})]})]}),t.jsxs(R.Section,{children:[t.jsxs(R.SectionHead,{children:[t.jsx(Nr,{}),t.jsx("h3",{children:"Cheat sheet playground"})]}),t.jsx(R.SnippetGrid,{children:x.map(h=>{const y=c===h.key;return t.jsxs(R.SnippetCard,{children:[t.jsxs(R.SnippetTop,{children:[t.jsxs("div",{children:[t.jsx(R.SnippetTitle,{children:h.title}),t.jsx(R.SnippetHint,{children:h.hint})]}),t.jsxs(R.CopyBtn,{type:"button",onClick:()=>k(h.code,h.key),title:y?"Copied":"Copy",children:[y?t.jsx(we,{}):t.jsx(dr,{}),y?"Copied":"Copy"]})]}),t.jsx(R.CodeBlock,{children:t.jsx("pre",{children:h.code})})]},h.key)})})]}),t.jsx(R.FooterNote,{children:"Treat S3 like a secure vault by default. Private buckets, least privilege access, encryption on, lifecycle rules for cost control."})]})]})},K={Wrapper:a.div`
        margin-bottom: 10px;
        border: 1px solid var(--color-border);
        border-radius: 14px;
        background: var(--color-surface);
        overflow: hidden;
    `,Header:a.div`
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 12px;
        padding: 16px 18px;
        cursor: pointer;
        user-select: none;
        transition: background 140ms ease;

        &:hover {
            background: var(--color-surface-2);
        }

        &:focus-visible {
            outline: 2px solid var(--color-primary);
            outline-offset: 3px;
        }
    `,Title:a.div`
        display: flex;
        align-items: center;
        gap: 10px;
        font-weight: 900;
        font-size: 18px;
        color: var(--color-text-primary);

        svg {
            font-size: 20px;
            color: var(--color-primary);
        }
    `,Badge:a.span`
        margin-left: 10px;
        font-size: 12px;
        font-weight: 800;
        color: var(--color-text-secondary);
        background: color-mix(in srgb, var(--color-surface-2) 85%, transparent);
        border: 1px solid var(--color-border);
        padding: 4px 10px;
        border-radius: 999px;
    `,Toggle:a.div`
        font-size: 20px;
        color: var(--color-text-muted);
        flex: 0 0 auto;
    `,Preview:a.div`
        padding: 14px 18px 18px 18px;
        border-top: 1px solid var(--color-border);
        background: color-mix(in srgb, var(--color-surface-2) 55%, transparent);
    `,PreviewLine:a.div`
        color: var(--color-text-secondary);
        font-size: 14px;
        line-height: 1.5;

        & + & {
            margin-top: 6px;
        }
    `,Content:a.div`
        padding: 18px;
        border-top: 1px solid var(--color-border);
        background: var(--color-surface-2);
    `,Section:a.div`
        & + & {
            margin-top: 16px;
        }
    `,SectionHead:a.div`
        display: flex;
        align-items: center;
        gap: 10px;
        margin-bottom: 8px;

        svg {
            color: var(--color-accent);
            font-size: 18px;
        }

        h3 {
            font-size: 16px;
            font-weight: 900;
            color: var(--color-text-primary);
        }
    `,Para:a.p`
        margin-bottom: 10px;
        color: var(--color-text-secondary);
        font-size: 14px;
        line-height: 1.6;
    `,Bullets:a.ul`
        padding-left: 0;
        margin: 0;

        li {
            color: var(--color-text-secondary);
            font-size: 14px;
            line-height: 1.6;
            padding-left: 14px;
            position: relative;
            margin: 8px 0;
        }

        li::before {
            content: "-";
            position: absolute;
            left: 0;
            top: 0;
            color: var(--color-text-muted);
            font-weight: 900;
        }

        b {
            color: var(--color-text-primary);
            font-weight: 900;
        }
    `,Example:a.div`
        margin-top: 10px;
        border: 1px solid var(--color-border);
        background: color-mix(in srgb, var(--color-surface) 75%, transparent);
        border-radius: 12px;
        padding: 12px;
    `,ExampleTitle:a.div`
        font-weight: 900;
        font-size: 13px;
        color: var(--color-text-primary);
        margin-bottom: 8px;
    `,CodeBlock:a.div`
        background: var(--color-code-bg);
        border: 1px solid var(--color-code-border);
        border-radius: 12px;
        padding: 12px;
        overflow: auto;

        pre {
            margin: 0;
            white-space: pre;
            font-size: 12.5px;
            line-height: 1.55;
            color: var(--color-text-primary);
        }
    `,Note:a.div`
        display: flex;
        gap: 10px;
        align-items: flex-start;
        margin-top: 10px;
        border: 1px solid var(--color-border);
        background: color-mix(
            in srgb,
            var(--color-primary) 8%,
            var(--color-surface)
        );
        border-radius: 12px;
        padding: 12px;

        svg {
            margin-top: 2px;
            color: var(--color-primary);
            font-size: 18px;
            flex: 0 0 auto;
        }
    `,NoteTitle:a.div`
        font-weight: 900;
        color: var(--color-text-primary);
        font-size: 13px;
        margin-bottom: 2px;
    `,NoteText:a.div`
        color: var(--color-text-secondary);
        font-size: 13px;
        line-height: 1.55;
    `,Warn:a.div`
        display: flex;
        gap: 10px;
        align-items: flex-start;
        margin-top: 10px;
        border: 1px solid var(--color-border);
        background: color-mix(
            in srgb,
            var(--color-warning) 10%,
            var(--color-surface)
        );
        border-radius: 12px;
        padding: 12px;

        svg {
            margin-top: 2px;
            color: var(--color-warning);
            font-size: 18px;
            flex: 0 0 auto;
        }
    `,WarnTitle:a.div`
        font-weight: 900;
        color: var(--color-text-primary);
        font-size: 13px;
        margin-bottom: 2px;
    `,WarnText:a.div`
        color: var(--color-text-secondary);
        font-size: 13px;
        line-height: 1.55;
    `,SnippetGrid:a.div`
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
        gap: 12px;
        margin-top: 10px;
    `,SnippetCard:a.div`
        border: 1px solid var(--color-border);
        background: var(--color-surface);
        border-radius: 12px;
        overflow: hidden;
        transition:
            transform 140ms ease,
            border-color 140ms ease;

        &:hover {
            transform: translateY(-2px);
            border-color: var(--color-border-light);
        }
    `,SnippetTop:a.div`
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        gap: 12px;
        padding: 12px;
        border-bottom: 1px solid var(--color-border);
        background: color-mix(in srgb, var(--color-surface-2) 55%, transparent);
    `,SnippetTitle:a.div`
        font-weight: 900;
        color: var(--color-text-primary);
        font-size: 13px;
        line-height: 1.3;
        margin-bottom: 4px;
    `,SnippetHint:a.div`
        color: var(--color-text-muted);
        font-size: 12px;
    `,CopyBtn:a.button`
        display: inline-flex;
        align-items: center;
        gap: 8px;
        padding: 8px 10px;
        border-radius: 10px;
        border: 1px solid var(--color-border);
        background: color-mix(in srgb, var(--color-surface) 70%, transparent);
        color: var(--color-text-primary);
        font-weight: 900;
        font-size: 12px;
        transition:
            transform 140ms ease,
            border-color 140ms ease,
            background 140ms ease;

        svg {
            font-size: 14px;
            color: var(--color-accent);
        }

        &:hover {
            border-color: var(--color-border-light);
            transform: translateY(-1px);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 70%,
                transparent
            );
        }

        &:active {
            transform: translateY(0px);
        }
    `,FooterNote:a.div`
        margin-top: 14px;
        padding: 12px;
        border: 1px solid var(--color-border);
        border-radius: 12px;
        background: color-mix(in srgb, var(--color-surface) 70%, transparent);
        color: var(--color-text-secondary);
        font-size: 13px;
        line-height: 1.55;
    `},Lm=()=>{const[s,d]=Y.useState(!1),[c,p]=Y.useState(""),x=Y.useMemo(()=>[{key:"iamParts",title:"IAM building blocks",hint:"User, group, role, policy",code:`# IAM basics:
# - User: a person or app identity (long lived)
# - Group: a collection of users
# - Role: a temporary identity that can be assumed
# - Policy: permissions written in JSON
# - Permission boundary: max allowed permissions
# - MFA: extra login security`},{key:"leastPrivilege",title:"Least privilege rule",hint:"Give minimum access",code:`# Least privilege means:
# - allow only actions required
# - allow only specific resources
# - deny everything else by default

# Bad:
# Action: "*"
# Resource: "*"`},{key:"policyExample",title:"Policy example idea",hint:"Read only S3 bucket",code:`# Example policy intent:
# - allow listing bucket
# - allow reading objects
# - only for one bucket

# In real JSON this looks like:
# Effect: Allow
# Action: s3:ListBucket, s3:GetObject
# Resource: arn:aws:s3:::my-bucket and arn:aws:s3:::my-bucket/*`},{key:"roles",title:"Why roles are powerful",hint:"Temporary credentials",code:`# Roles are assumed:
# - by services (EC2, Lambda)
# - by users (switch role)
# - by external identity (OIDC, SSO)

# Benefit:
# - no hardcoded long lived keys in servers`},{key:"mfa",title:"MFA and root account",hint:"Protect the crown jewels",code:`# Best practice:
# - enable MFA on root account
# - never use root for daily work
# - create admin role/user for operations
# - store root credentials safely`},{key:"accessKeys",title:"Access keys basics",hint:"Programmatic access",code:`# Access keys:
# - used by CLI and SDK
# - should be rotated
# - should not be stored in code
# - should be limited by policy

# Better:
# use roles and instance profiles where possible`},{key:"commonMistakes",title:"Common mistakes",hint:"How incidents happen",code:`# Common IAM mistakes:
# - too broad permissions
# - sharing one IAM user among team
# - leaving unused keys active
# - no MFA
# - public S3 policies
# - hardcoding keys in repo`}],[]),k=async(h,y)=>{try{await navigator.clipboard.writeText(h),p(y),window.setTimeout(()=>p(""),900)}catch{p("")}};return t.jsxs(K.Wrapper,{children:[t.jsxs(K.Header,{onClick:()=>d(h=>!h),role:"button",tabIndex:0,children:[t.jsxs(K.Title,{children:[t.jsx(dm,{}),"IAM",t.jsx(K.Badge,{children:"Identity and access control"})]}),t.jsx(K.Toggle,{"aria-hidden":"true",children:s?t.jsx(pr,{}):t.jsx(ur,{})})]}),!s&&t.jsxs(K.Preview,{children:[t.jsx(K.PreviewLine,{children:"IAM controls who can do what in AWS. It is the security foundation."}),t.jsx(K.PreviewLine,{children:"Learn users, groups, roles, policies, least privilege, and common mistakes."})]}),s&&t.jsxs(K.Content,{children:[t.jsxs(K.Section,{children:[t.jsxs(K.SectionHead,{children:[t.jsx(Mt,{}),t.jsx("h3",{children:"What is IAM"})]}),t.jsx(K.Para,{children:"IAM stands for Identity and Access Management. It controls permissions in AWS. It answers two questions: who are you and what are you allowed to do."}),t.jsxs(K.Note,{children:[t.jsx(we,{}),t.jsxs("div",{children:[t.jsx(K.NoteTitle,{children:"Beginner mental model"}),t.jsx(K.NoteText,{children:"IAM is the security gatekeeper. Every AWS action checks IAM before it runs."})]})]})]}),t.jsxs(K.Section,{children:[t.jsxs(K.SectionHead,{children:[t.jsx(Wr,{}),t.jsx("h3",{children:"Core building blocks"})]}),t.jsxs(K.Bullets,{children:[t.jsxs("li",{children:[t.jsx("b",{children:"User"})," - identity for a person or app"]}),t.jsxs("li",{children:[t.jsx("b",{children:"Group"})," - collection of users to attach permissions easily"]}),t.jsxs("li",{children:[t.jsx("b",{children:"Role"})," - temporary identity that can be assumed"]}),t.jsxs("li",{children:[t.jsx("b",{children:"Policy"})," - JSON document defining allowed or denied actions"]})]}),t.jsxs(K.Example,{children:[t.jsx(K.ExampleTitle,{children:"Simple example"}),t.jsxs(K.Bullets,{children:[t.jsx("li",{children:'Create group "developers"'}),t.jsx("li",{children:"Attach policy that allows read access to logs"}),t.jsx("li",{children:'Add users to "developers"'})]})]})]}),t.jsxs(K.Section,{children:[t.jsxs(K.SectionHead,{children:[t.jsx($r,{}),t.jsx("h3",{children:"Least privilege principle"})]}),t.jsx(K.Para,{children:"Least privilege means you should grant the minimum permissions required to do the job. This reduces blast radius if a credential is leaked."}),t.jsxs(K.Bullets,{children:[t.jsx("li",{children:'Restrict actions - do not use "*" unless truly needed'}),t.jsx("li",{children:"Restrict resources - allow only specific buckets, instances, tables"}),t.jsx("li",{children:"Prefer roles with temporary credentials"})]}),t.jsxs(K.Warn,{children:[t.jsx(Qe,{}),t.jsxs("div",{children:[t.jsx(K.WarnTitle,{children:"Danger pattern"}),t.jsx(K.WarnText,{children:"AdministratorAccess everywhere is easy but unsafe. It is common in early projects, but it should not stay."})]})]})]}),t.jsxs(K.Section,{children:[t.jsxs(K.SectionHead,{children:[t.jsx(Ea,{}),t.jsx("h3",{children:"Policies - how permissions are written"})]}),t.jsx(K.Para,{children:"Policies are JSON documents. They contain statements with an effect (Allow or Deny), actions (like s3:GetObject), and resources (like a bucket ARN)."}),t.jsxs(K.Example,{children:[t.jsx(K.ExampleTitle,{children:"Policy statement fields"}),t.jsxs(K.Bullets,{children:[t.jsxs("li",{children:[t.jsx("b",{children:"Effect"})," - Allow or Deny"]}),t.jsxs("li",{children:[t.jsx("b",{children:"Action"}),' - what operation is allowed, example "s3:GetObject"']}),t.jsxs("li",{children:[t.jsx("b",{children:"Resource"})," - what object it applies to, example one bucket"]}),t.jsxs("li",{children:[t.jsx("b",{children:"Condition"})," - optional rules, example allow only from certain IP"]})]})]})]}),t.jsxs(K.Section,{children:[t.jsxs(K.SectionHead,{children:[t.jsx(Pp,{}),t.jsx("h3",{children:"Roles - why they matter"})]}),t.jsx(K.Para,{children:"Roles are the best way to avoid hardcoding keys. Services like EC2 can assume a role using an instance profile, and then call AWS APIs with temporary credentials."}),t.jsxs(K.Note,{children:[t.jsx(Je,{}),t.jsxs("div",{children:[t.jsx(K.NoteTitle,{children:"Real world pattern"}),t.jsx(K.NoteText,{children:"EC2 instance needs S3 access. Attach an IAM role to EC2. No access keys stored on disk."})]})]})]}),t.jsxs(K.Section,{children:[t.jsxs(K.SectionHead,{children:[t.jsx(um,{}),t.jsx("h3",{children:"Users and groups in teams"})]}),t.jsxs(K.Bullets,{children:[t.jsx("li",{children:"Each developer should have their own identity"}),t.jsx("li",{children:"Use groups for shared permissions"}),t.jsx("li",{children:"Enable MFA for human users"}),t.jsx("li",{children:"Remove access quickly when someone leaves"})]}),t.jsxs(K.Warn,{children:[t.jsx(Qe,{}),t.jsxs("div",{children:[t.jsx(K.WarnTitle,{children:"Team mistake"}),t.jsx(K.WarnText,{children:"Sharing one IAM user across the whole team kills accountability and makes incidents harder to investigate."})]})]})]}),t.jsxs(K.Section,{children:[t.jsxs(K.SectionHead,{children:[t.jsx(Bo,{}),t.jsx("h3",{children:"Root account rules"})]}),t.jsxs(K.Bullets,{children:[t.jsx("li",{children:"Do not use root for daily work"}),t.jsx("li",{children:"Enable MFA on root immediately"}),t.jsx("li",{children:"Create admin role or admin user for operations"}),t.jsx("li",{children:"Store root credentials safely"})]})]}),t.jsxs(K.Section,{children:[t.jsxs(K.SectionHead,{children:[t.jsx(Nr,{}),t.jsx("h3",{children:"Cheat sheet playground"})]}),t.jsx(K.SnippetGrid,{children:x.map(h=>{const y=c===h.key;return t.jsxs(K.SnippetCard,{children:[t.jsxs(K.SnippetTop,{children:[t.jsxs("div",{children:[t.jsx(K.SnippetTitle,{children:h.title}),t.jsx(K.SnippetHint,{children:h.hint})]}),t.jsxs(K.CopyBtn,{type:"button",onClick:()=>k(h.code,h.key),title:y?"Copied":"Copy",children:[y?t.jsx(we,{}):t.jsx(dr,{}),y?"Copied":"Copy"]})]}),t.jsx(K.CodeBlock,{children:t.jsx("pre",{children:h.code})})]},h.key)})})]}),t.jsx(K.FooterNote,{children:"IAM is the difference between safe cloud and chaos cloud. Keep permissions small, prefer roles, enable MFA, and never hardcode keys."})]})]})},H={Wrapper:a.div`
        margin-bottom: 10px;
        border: 1px solid var(--color-border);
        border-radius: 14px;
        background: var(--color-surface);
        overflow: hidden;
    `,Header:a.div`
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 12px;
        padding: 16px 18px;
        cursor: pointer;
        user-select: none;
        transition: background 140ms ease;

        &:hover {
            background: var(--color-surface-2);
        }

        &:focus-visible {
            outline: 2px solid var(--color-primary);
            outline-offset: 3px;
        }
    `,Title:a.div`
        display: flex;
        align-items: center;
        gap: 10px;
        font-weight: 900;
        font-size: 18px;
        color: var(--color-text-primary);

        svg {
            font-size: 20px;
            color: var(--color-primary);
        }
    `,Badge:a.span`
        margin-left: 10px;
        font-size: 12px;
        font-weight: 800;
        color: var(--color-text-secondary);
        background: color-mix(in srgb, var(--color-surface-2) 85%, transparent);
        border: 1px solid var(--color-border);
        padding: 4px 10px;
        border-radius: 999px;
    `,Toggle:a.div`
        font-size: 20px;
        color: var(--color-text-muted);
        flex: 0 0 auto;
    `,Preview:a.div`
        padding: 14px 18px 18px 18px;
        border-top: 1px solid var(--color-border);
        background: color-mix(in srgb, var(--color-surface-2) 55%, transparent);
    `,PreviewLine:a.div`
        color: var(--color-text-secondary);
        font-size: 14px;
        line-height: 1.5;

        & + & {
            margin-top: 6px;
        }
    `,Content:a.div`
        padding: 18px;
        border-top: 1px solid var(--color-border);
        background: var(--color-surface-2);
    `,Section:a.div`
        & + & {
            margin-top: 16px;
        }
    `,SectionHead:a.div`
        display: flex;
        align-items: center;
        gap: 10px;
        margin-bottom: 8px;

        svg {
            color: var(--color-accent);
            font-size: 18px;
        }

        h3 {
            font-size: 16px;
            font-weight: 900;
            color: var(--color-text-primary);
        }
    `,Para:a.p`
        margin-bottom: 10px;
        color: var(--color-text-secondary);
        font-size: 14px;
        line-height: 1.6;
    `,Bullets:a.ul`
        padding-left: 0;
        margin: 0;

        li {
            color: var(--color-text-secondary);
            font-size: 14px;
            line-height: 1.6;
            padding-left: 14px;
            position: relative;
            margin: 8px 0;
        }

        li::before {
            content: "-";
            position: absolute;
            left: 0;
            top: 0;
            color: var(--color-text-muted);
            font-weight: 900;
        }

        b {
            color: var(--color-text-primary);
            font-weight: 900;
        }
    `,Example:a.div`
        margin-top: 10px;
        border: 1px solid var(--color-border);
        background: color-mix(in srgb, var(--color-surface) 75%, transparent);
        border-radius: 12px;
        padding: 12px;
    `,ExampleTitle:a.div`
        font-weight: 900;
        font-size: 13px;
        color: var(--color-text-primary);
        margin-bottom: 8px;
    `,CodeBlock:a.div`
        background: var(--color-code-bg);
        border: 1px solid var(--color-code-border);
        border-radius: 12px;
        padding: 12px;
        overflow: auto;

        pre {
            margin: 0;
            white-space: pre;
            font-size: 12.5px;
            line-height: 1.55;
            color: var(--color-text-primary);
        }
    `,Note:a.div`
        display: flex;
        gap: 10px;
        align-items: flex-start;
        margin-top: 10px;
        border: 1px solid var(--color-border);
        background: color-mix(
            in srgb,
            var(--color-primary) 8%,
            var(--color-surface)
        );
        border-radius: 12px;
        padding: 12px;

        svg {
            margin-top: 2px;
            color: var(--color-primary);
            font-size: 18px;
            flex: 0 0 auto;
        }
    `,NoteTitle:a.div`
        font-weight: 900;
        color: var(--color-text-primary);
        font-size: 13px;
        margin-bottom: 2px;
    `,NoteText:a.div`
        color: var(--color-text-secondary);
        font-size: 13px;
        line-height: 1.55;
    `,Warn:a.div`
        display: flex;
        gap: 10px;
        align-items: flex-start;
        margin-top: 10px;
        border: 1px solid var(--color-border);
        background: color-mix(
            in srgb,
            var(--color-warning) 10%,
            var(--color-surface)
        );
        border-radius: 12px;
        padding: 12px;

        svg {
            margin-top: 2px;
            color: var(--color-warning);
            font-size: 18px;
            flex: 0 0 auto;
        }
    `,WarnTitle:a.div`
        font-weight: 900;
        color: var(--color-text-primary);
        font-size: 13px;
        margin-bottom: 2px;
    `,WarnText:a.div`
        color: var(--color-text-secondary);
        font-size: 13px;
        line-height: 1.55;
    `,SnippetGrid:a.div`
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
        gap: 12px;
        margin-top: 10px;
    `,SnippetCard:a.div`
        border: 1px solid var(--color-border);
        background: var(--color-surface);
        border-radius: 12px;
        overflow: hidden;
        transition:
            transform 140ms ease,
            border-color 140ms ease;

        &:hover {
            transform: translateY(-2px);
            border-color: var(--color-border-light);
        }
    `,SnippetTop:a.div`
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        gap: 12px;
        padding: 12px;
        border-bottom: 1px solid var(--color-border);
        background: color-mix(in srgb, var(--color-surface-2) 55%, transparent);
    `,SnippetTitle:a.div`
        font-weight: 900;
        color: var(--color-text-primary);
        font-size: 13px;
        line-height: 1.3;
        margin-bottom: 4px;
    `,SnippetHint:a.div`
        color: var(--color-text-muted);
        font-size: 12px;
    `,CopyBtn:a.button`
        display: inline-flex;
        align-items: center;
        gap: 8px;
        padding: 8px 10px;
        border-radius: 10px;
        border: 1px solid var(--color-border);
        background: color-mix(in srgb, var(--color-surface) 70%, transparent);
        color: var(--color-text-primary);
        font-weight: 900;
        font-size: 12px;
        transition:
            transform 140ms ease,
            border-color 140ms ease,
            background 140ms ease;

        svg {
            font-size: 14px;
            color: var(--color-accent);
        }

        &:hover {
            border-color: var(--color-border-light);
            transform: translateY(-1px);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 70%,
                transparent
            );
        }

        &:active {
            transform: translateY(0px);
        }
    `,FooterNote:a.div`
        margin-top: 14px;
        padding: 12px;
        border: 1px solid var(--color-border);
        border-radius: 12px;
        background: color-mix(in srgb, var(--color-surface) 70%, transparent);
        color: var(--color-text-secondary);
        font-size: 13px;
        line-height: 1.55;
    `},Im=()=>{const[s,d]=Y.useState(!1),[c,p]=Y.useState(""),x=Y.useMemo(()=>[{key:"whyLb",title:"Why load balancing exists",hint:"Core problems it solves",code:`# Load balancer helps with:
# - scale: distribute traffic across multiple servers
# - reliability: remove unhealthy servers automatically
# - performance: avoid one server becoming hotspot
# - upgrades: deploy new versions without downtime`},{key:"l4l7",title:"Layer 4 vs Layer 7",hint:"TCP vs HTTP understanding",code:`# Layer 4 load balancer (L4)
# - works at TCP or UDP level
# - routes based on IP and port
# - fast, simple, protocol agnostic

# Layer 7 load balancer (L7)
# - works at HTTP level
# - can route based on host, path, headers, cookies
# - can do TLS termination and redirects`},{key:"healthChecks",title:"Health checks",hint:"How LB detects broken servers",code:`# Health check:
# - LB sends periodic request to backend
# - if fails N times, backend removed from rotation
# - when it recovers, backend re-added

# Example:
# GET /health -> 200 OK`},{key:"algorithms",title:"Common balancing algorithms",hint:"How traffic is distributed",code:`# Common algorithms:
# - round robin: cycle through servers
# - least connections: choose server with fewest active connections
# - ip hash: same client IP goes to same backend (sticky-ish)`},{key:"stickySessions",title:"Sticky sessions",hint:"When you need same server",code:`# Sticky sessions:
# - keep a user on same backend
# - done using cookies or hashing

# Better practice:
# keep app stateless and store sessions in shared store (redis, db)`},{key:"ha",title:"High availability setup",hint:"Avoid single point of failure",code:`# Good HA pattern:
# - multiple backend servers
# - deploy across multiple AZs
# - load balancer across AZs
# - autoscaling group for backends`},{key:"tlsTermination",title:"TLS termination",hint:"HTTPS handling",code:`# TLS termination:
# - client uses HTTPS to load balancer
# - load balancer decrypts traffic
# - forwards to backend via HTTP or HTTPS

# Benefit:
# - simpler cert management
# - offload CPU from backend`}],[]),k=async(h,y)=>{try{await navigator.clipboard.writeText(h),p(y),window.setTimeout(()=>p(""),900)}catch{p("")}};return t.jsxs(H.Wrapper,{children:[t.jsxs(H.Header,{onClick:()=>d(h=>!h),role:"button",tabIndex:0,children:[t.jsxs(H.Title,{children:[t.jsx(za,{}),"Load balancer",t.jsx(H.Badge,{children:"Distribute traffic and add reliability"})]}),t.jsx(H.Toggle,{"aria-hidden":"true",children:s?t.jsx(pr,{}):t.jsx(ur,{})})]}),!s&&t.jsxs(H.Preview,{children:[t.jsx(H.PreviewLine,{children:"Load balancer sits in front of servers and spreads traffic across them."}),t.jsx(H.PreviewLine,{children:"Learn L4 vs L7, health checks, routing, TLS termination, and high availability patterns."})]}),s&&t.jsxs(H.Content,{children:[t.jsxs(H.Section,{children:[t.jsxs(H.SectionHead,{children:[t.jsx(Mt,{}),t.jsx("h3",{children:"What is a load balancer"})]}),t.jsx(H.Para,{children:"A load balancer is a system that receives incoming traffic and forwards it to one of multiple backend servers. It helps your app scale and stay online when some servers fail."}),t.jsxs(H.Note,{children:[t.jsx(we,{}),t.jsxs("div",{children:[t.jsx(H.NoteTitle,{children:"Beginner mental model"}),t.jsx(H.NoteText,{children:"Load balancer is like a traffic police officer. It directs each incoming request to a healthy server."})]})]})]}),t.jsxs(H.Section,{children:[t.jsxs(H.SectionHead,{children:[t.jsx(An,{}),t.jsx("h3",{children:"Why load balancing is needed"})]}),t.jsxs(H.Bullets,{children:[t.jsx("li",{children:"One server cannot handle infinite traffic"}),t.jsx("li",{children:"If one server crashes, your app should still work"}),t.jsx("li",{children:"You want to deploy updates without downtime"}),t.jsx("li",{children:"You want better latency by spreading load"})]}),t.jsxs(H.Example,{children:[t.jsx(H.ExampleTitle,{children:"Simple example"}),t.jsx(H.Para,{children:"Without load balancer, all users hit one server. If it dies, website is down. With load balancer, users are routed to many servers."})]})]}),t.jsxs(H.Section,{children:[t.jsxs(H.SectionHead,{children:[t.jsx(Wr,{}),t.jsx("h3",{children:"Layer 4 vs Layer 7"})]}),t.jsxs(H.Bullets,{children:[t.jsxs("li",{children:[t.jsx("b",{children:"Layer 4"})," - routes based on TCP or UDP info like IP and port"]}),t.jsxs("li",{children:[t.jsx("b",{children:"Layer 7"})," - understands HTTP and can route by host, path, headers"]})]}),t.jsxs(H.Example,{children:[t.jsx(H.ExampleTitle,{children:"Routing examples"}),t.jsxs(H.Bullets,{children:[t.jsx("li",{children:'L7 - "/api" goes to backend service, "/images" goes to static service'}),t.jsx("li",{children:'L7 - "admin.example.com" goes to admin servers'}),t.jsx("li",{children:"L4 - any TCP connection on port 443 gets forwarded to a backend"})]})]})]}),t.jsxs(H.Section,{children:[t.jsxs(H.SectionHead,{children:[t.jsx(nm,{}),t.jsx("h3",{children:"Health checks"})]}),t.jsx(H.Para,{children:"Health checks are periodic checks done by the load balancer to confirm a backend server is alive. Unhealthy servers are removed from traffic automatically."}),t.jsxs(H.Bullets,{children:[t.jsx("li",{children:"Health endpoint should be fast and stable"}),t.jsx("li",{children:"Return 200 when healthy"}),t.jsx("li",{children:"Do not run heavy DB queries inside health check"})]}),t.jsxs(H.Note,{children:[t.jsx(sn,{}),t.jsxs("div",{children:[t.jsx(H.NoteTitle,{children:"Production habit"}),t.jsx(H.NoteText,{children:'Use "readiness" checks for traffic readiness and "liveness" checks for process alive. Keep them separate when possible.'})]})]})]}),t.jsxs(H.Section,{children:[t.jsxs(H.SectionHead,{children:[t.jsx(Je,{}),t.jsx("h3",{children:"Balancing algorithms"})]}),t.jsxs(H.Bullets,{children:[t.jsxs("li",{children:[t.jsx("b",{children:"Round robin"})," - request goes to next server in order"]}),t.jsxs("li",{children:[t.jsx("b",{children:"Least connections"})," - choose server with fewer active connections"]}),t.jsxs("li",{children:[t.jsx("b",{children:"IP hash"})," - consistent mapping based on client IP"]})]}),t.jsxs(H.Example,{children:[t.jsx(H.ExampleTitle,{children:"When least connections helps"}),t.jsx(H.Para,{children:"If some requests are slow, least connections avoids sending more traffic to already busy servers."})]})]}),t.jsxs(H.Section,{children:[t.jsxs(H.SectionHead,{children:[t.jsx(Ta,{}),t.jsx("h3",{children:"Sticky sessions"})]}),t.jsx(H.Para,{children:"Sticky sessions means the same user is sent to the same backend server repeatedly. It helps when your app stores session in memory, but it reduces flexibility."}),t.jsxs(H.Bullets,{children:[t.jsx("li",{children:"Works using cookies or hashing"}),t.jsx("li",{children:"Can cause uneven load if some users are heavy"}),t.jsx("li",{children:"Better approach is stateless app and shared session store"})]}),t.jsxs(H.Warn,{children:[t.jsx(Qe,{}),t.jsxs("div",{children:[t.jsx(H.WarnTitle,{children:"Scaling trap"}),t.jsx(H.WarnText,{children:"If your app depends on sticky sessions, autoscaling and rolling deploys become harder. Prefer stateless design."})]})]})]}),t.jsxs(H.Section,{children:[t.jsxs(H.SectionHead,{children:[t.jsx($r,{}),t.jsx("h3",{children:"TLS termination and security"})]}),t.jsxs(H.Bullets,{children:[t.jsx("li",{children:"Load balancer can handle HTTPS certificates"}),t.jsx("li",{children:"Backends can run plain HTTP inside private network"}),t.jsx("li",{children:"Centralized TLS makes cert rotation easier"})]}),t.jsxs(H.Example,{children:[t.jsx(H.ExampleTitle,{children:"Security note"}),t.jsx(H.Para,{children:"Even if you use HTTP from load balancer to backend, keep it inside private network only. For sensitive systems, use HTTPS all the way."})]})]}),t.jsxs(H.Section,{children:[t.jsxs(H.SectionHead,{children:[t.jsx(An,{}),t.jsx("h3",{children:"High availability pattern"})]}),t.jsxs(H.Bullets,{children:[t.jsx("li",{children:"Run multiple backend servers"}),t.jsx("li",{children:"Spread backends across multiple AZs"}),t.jsx("li",{children:"Use autoscaling group to replace unhealthy servers"}),t.jsx("li",{children:"Use load balancer to route only healthy targets"})]}),t.jsxs(H.Note,{children:[t.jsx(we,{}),t.jsxs("div",{children:[t.jsx(H.NoteTitle,{children:"Key idea"}),t.jsx(H.NoteText,{children:"Load balancer removes single server as a single point of failure."})]})]})]}),t.jsxs(H.Section,{children:[t.jsxs(H.SectionHead,{children:[t.jsx(Nr,{}),t.jsx("h3",{children:"Cheat sheet playground"})]}),t.jsx(H.SnippetGrid,{children:x.map(h=>{const y=c===h.key;return t.jsxs(H.SnippetCard,{children:[t.jsxs(H.SnippetTop,{children:[t.jsxs("div",{children:[t.jsx(H.SnippetTitle,{children:h.title}),t.jsx(H.SnippetHint,{children:h.hint})]}),t.jsxs(H.CopyBtn,{type:"button",onClick:()=>k(h.code,h.key),title:y?"Copied":"Copy",children:[y?t.jsx(we,{}):t.jsx(dr,{}),y?"Copied":"Copy"]})]}),t.jsx(H.CodeBlock,{children:t.jsx("pre",{children:h.code})})]},h.key)})})]}),t.jsx(H.FooterNote,{children:"Load balancer is your reliability and scaling gate. If your app is stateless and health checks are solid, scaling becomes easy."})]})]})},D={Wrapper:a.div`
        margin-bottom: 10px;
        border: 1px solid var(--color-border);
        border-radius: 14px;
        background: var(--color-surface);
        overflow: hidden;
    `,Header:a.div`
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 12px;
        padding: 16px 18px;
        cursor: pointer;
        user-select: none;
        transition: background 140ms ease;

        &:hover {
            background: var(--color-surface-2);
        }

        &:focus-visible {
            outline: 2px solid var(--color-primary);
            outline-offset: 3px;
        }
    `,Title:a.div`
        display: flex;
        align-items: center;
        gap: 10px;
        font-weight: 900;
        font-size: 18px;
        color: var(--color-text-primary);

        svg {
            font-size: 20px;
            color: var(--color-primary);
        }
    `,Badge:a.span`
        margin-left: 10px;
        font-size: 12px;
        font-weight: 800;
        color: var(--color-text-secondary);
        background: color-mix(in srgb, var(--color-surface-2) 85%, transparent);
        border: 1px solid var(--color-border);
        padding: 4px 10px;
        border-radius: 999px;
    `,Toggle:a.div`
        font-size: 20px;
        color: var(--color-text-muted);
        flex: 0 0 auto;
    `,Preview:a.div`
        padding: 14px 18px 18px 18px;
        border-top: 1px solid var(--color-border);
        background: color-mix(in srgb, var(--color-surface-2) 55%, transparent);
    `,PreviewLine:a.div`
        color: var(--color-text-secondary);
        font-size: 14px;
        line-height: 1.5;

        & + & {
            margin-top: 6px;
        }
    `,Content:a.div`
        padding: 18px;
        border-top: 1px solid var(--color-border);
        background: var(--color-surface-2);
    `,Section:a.div`
        & + & {
            margin-top: 16px;
        }
    `,SectionHead:a.div`
        display: flex;
        align-items: center;
        gap: 10px;
        margin-bottom: 8px;

        svg {
            color: var(--color-accent);
            font-size: 18px;
        }

        h3 {
            font-size: 16px;
            font-weight: 900;
            color: var(--color-text-primary);
        }
    `,Para:a.p`
        margin-bottom: 10px;
        color: var(--color-text-secondary);
        font-size: 14px;
        line-height: 1.6;
    `,Bullets:a.ul`
        padding-left: 0;
        margin: 0;

        li {
            color: var(--color-text-secondary);
            font-size: 14px;
            line-height: 1.6;
            padding-left: 14px;
            position: relative;
            margin: 8px 0;
        }

        li::before {
            content: "-";
            position: absolute;
            left: 0;
            top: 0;
            color: var(--color-text-muted);
            font-weight: 900;
        }

        b {
            color: var(--color-text-primary);
            font-weight: 900;
        }
    `,Example:a.div`
        margin-top: 10px;
        border: 1px solid var(--color-border);
        background: color-mix(in srgb, var(--color-surface) 75%, transparent);
        border-radius: 12px;
        padding: 12px;
    `,ExampleTitle:a.div`
        font-weight: 900;
        font-size: 13px;
        color: var(--color-text-primary);
        margin-bottom: 8px;
    `,CodeBlock:a.div`
        background: var(--color-code-bg);
        border: 1px solid var(--color-code-border);
        border-radius: 12px;
        padding: 12px;
        overflow: auto;

        pre {
            margin: 0;
            white-space: pre;
            font-size: 12.5px;
            line-height: 1.55;
            color: var(--color-text-primary);
        }
    `,Note:a.div`
        display: flex;
        gap: 10px;
        align-items: flex-start;
        margin-top: 10px;
        border: 1px solid var(--color-border);
        background: color-mix(
            in srgb,
            var(--color-primary) 8%,
            var(--color-surface)
        );
        border-radius: 12px;
        padding: 12px;

        svg {
            margin-top: 2px;
            color: var(--color-primary);
            font-size: 18px;
            flex: 0 0 auto;
        }
    `,NoteTitle:a.div`
        font-weight: 900;
        color: var(--color-text-primary);
        font-size: 13px;
        margin-bottom: 2px;
    `,NoteText:a.div`
        color: var(--color-text-secondary);
        font-size: 13px;
        line-height: 1.55;
    `,Warn:a.div`
        display: flex;
        gap: 10px;
        align-items: flex-start;
        margin-top: 10px;
        border: 1px solid var(--color-border);
        background: color-mix(
            in srgb,
            var(--color-warning) 10%,
            var(--color-surface)
        );
        border-radius: 12px;
        padding: 12px;

        svg {
            margin-top: 2px;
            color: var(--color-warning);
            font-size: 18px;
            flex: 0 0 auto;
        }
    `,WarnTitle:a.div`
        font-weight: 900;
        color: var(--color-text-primary);
        font-size: 13px;
        margin-bottom: 2px;
    `,WarnText:a.div`
        color: var(--color-text-secondary);
        font-size: 13px;
        line-height: 1.55;
    `,SnippetGrid:a.div`
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
        gap: 12px;
        margin-top: 10px;
    `,SnippetCard:a.div`
        border: 1px solid var(--color-border);
        background: var(--color-surface);
        border-radius: 12px;
        overflow: hidden;
        transition:
            transform 140ms ease,
            border-color 140ms ease;

        &:hover {
            transform: translateY(-2px);
            border-color: var(--color-border-light);
        }
    `,SnippetTop:a.div`
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        gap: 12px;
        padding: 12px;
        border-bottom: 1px solid var(--color-border);
        background: color-mix(in srgb, var(--color-surface-2) 55%, transparent);
    `,SnippetTitle:a.div`
        font-weight: 900;
        color: var(--color-text-primary);
        font-size: 13px;
        line-height: 1.3;
        margin-bottom: 4px;
    `,SnippetHint:a.div`
        color: var(--color-text-muted);
        font-size: 12px;
    `,CopyBtn:a.button`
        display: inline-flex;
        align-items: center;
        gap: 8px;
        padding: 8px 10px;
        border-radius: 10px;
        border: 1px solid var(--color-border);
        background: color-mix(in srgb, var(--color-surface) 70%, transparent);
        color: var(--color-text-primary);
        font-weight: 900;
        font-size: 12px;
        transition:
            transform 140ms ease,
            border-color 140ms ease,
            background 140ms ease;

        svg {
            font-size: 14px;
            color: var(--color-accent);
        }

        &:hover {
            border-color: var(--color-border-light);
            transform: translateY(-1px);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 70%,
                transparent
            );
        }

        &:active {
            transform: translateY(0px);
        }
    `,FooterNote:a.div`
        margin-top: 14px;
        padding: 12px;
        border: 1px solid var(--color-border);
        border-radius: 12px;
        background: color-mix(in srgb, var(--color-surface) 70%, transparent);
        color: var(--color-text-secondary);
        font-size: 13px;
        line-height: 1.55;
    `},_m=()=>{const[s,d]=Y.useState(!1),[c,p]=Y.useState(""),x=Y.useMemo(()=>[{key:"reverseVsForward",title:"Reverse proxy vs forward proxy",hint:"Direction matters",code:`# Reverse proxy:
# - sits in front of servers
# - clients talk to proxy
# - proxy forwards to backend servers

# Forward proxy:
# - sits in front of clients
# - clients talk to proxy to reach internet
# - used in offices, VPN, filtering`},{key:"routing",title:"Request routing",hint:"Path based routing idea",code:`# Reverse proxy can route requests like:
# - /api -> backend service
# - /admin -> admin service
# - / -> frontend static app`},{key:"tlsTermination",title:"TLS termination",hint:"HTTPS handled at proxy",code:`# TLS termination:
# - browser uses HTTPS with proxy
# - proxy decrypts traffic
# - forwards to backend on private network
# Benefit:
# - single place to manage certificates`},{key:"headers",title:"Important proxy headers",hint:"Real client IP and protocol",code:`# Common headers a reverse proxy sets:
# - X-Forwarded-For: original client IP
# - X-Forwarded-Proto: http or https
# - Host: original host

# Backend should trust these only if proxy is trusted`},{key:"caching",title:"Caching concept",hint:"Speed up repeated content",code:`# Reverse proxy can cache responses:
# - static files
# - images
# - GET API responses (careful)

# Benefit:
# - reduces backend load
# - improves latency`},{key:"rateLimit",title:"Rate limiting",hint:"Protect from abuse",code:`# Reverse proxy can limit requests:
# - requests per IP per minute
# - burst control

# Benefit:
# - helps against basic abuse and DDoS patterns`},{key:"compression",title:"Compression",hint:"Reduce bandwidth",code:`# Proxy can enable gzip or brotli:
# - compress HTML, CSS, JS, JSON
# - not useful for already compressed images
# Benefit:
# - faster page loads`}],[]),k=async(h,y)=>{try{await navigator.clipboard.writeText(h),p(y),window.setTimeout(()=>p(""),900)}catch{p("")}};return t.jsxs(D.Wrapper,{children:[t.jsxs(D.Header,{onClick:()=>d(h=>!h),role:"button",tabIndex:0,children:[t.jsxs(D.Title,{children:[t.jsx(Pa,{}),"Reverse proxy",t.jsx(D.Badge,{children:"Routing, TLS, caching, protection"})]}),t.jsx(D.Toggle,{"aria-hidden":"true",children:s?t.jsx(pr,{}):t.jsx(ur,{})})]}),!s&&t.jsxs(D.Preview,{children:[t.jsx(D.PreviewLine,{children:"Reverse proxy sits in front of your backend services and forwards requests."}),t.jsx(D.PreviewLine,{children:"It helps with routing, HTTPS, caching, rate limiting, and hiding internal servers."})]}),s&&t.jsxs(D.Content,{children:[t.jsxs(D.Section,{children:[t.jsxs(D.SectionHead,{children:[t.jsx(Mt,{}),t.jsx("h3",{children:"What is a reverse proxy"})]}),t.jsx(D.Para,{children:"A reverse proxy is a server that accepts requests from clients and then forwards them to one or more backend servers. The client thinks it is talking to one server, but the proxy decides where to send the request."}),t.jsxs(D.Note,{children:[t.jsx(we,{}),t.jsxs("div",{children:[t.jsx(D.NoteTitle,{children:"Beginner mental model"}),t.jsx(D.NoteText,{children:"Reverse proxy is a front desk. Users talk to the front desk, and the front desk sends them to the correct room."})]})]})]}),t.jsxs(D.Section,{children:[t.jsxs(D.SectionHead,{children:[t.jsx(Wr,{}),t.jsx("h3",{children:"Reverse proxy vs load balancer"})]}),t.jsx(D.Para,{children:"These often overlap. A reverse proxy can also load balance. A load balancer can also behave like a reverse proxy. The key idea is what features you enable."}),t.jsxs(D.Bullets,{children:[t.jsxs("li",{children:[t.jsx("b",{children:"Reverse proxy focus"})," - routing, headers, TLS termination, caching, rate limiting"]}),t.jsxs("li",{children:[t.jsx("b",{children:"Load balancer focus"})," - distribute traffic, health checks, high availability"]})]}),t.jsxs(D.Example,{children:[t.jsx(D.ExampleTitle,{children:"Common production setup"}),t.jsxs(D.Bullets,{children:[t.jsx("li",{children:"Cloud load balancer at edge"}),t.jsx("li",{children:"Nginx reverse proxy inside VPC"}),t.jsx("li",{children:"Multiple backend services behind it"})]})]})]}),t.jsxs(D.Section,{children:[t.jsxs(D.SectionHead,{children:[t.jsx(An,{}),t.jsx("h3",{children:"Routing requests"})]}),t.jsx(D.Para,{children:"Reverse proxy can route based on host and path. This allows multiple services to run behind one public domain."}),t.jsxs(D.Bullets,{children:[t.jsx("li",{children:"Host based routing - api.example.com goes to API service"}),t.jsx("li",{children:"Path based routing - /api goes to backend, / goes to frontend"})]}),t.jsxs(D.Note,{children:[t.jsx(Je,{}),t.jsxs("div",{children:[t.jsx(D.NoteTitle,{children:"Why this is useful"}),t.jsx(D.NoteText,{children:"It hides internal services and gives a clean public entry point."})]})]})]}),t.jsxs(D.Section,{children:[t.jsxs(D.SectionHead,{children:[t.jsx(Ea,{}),t.jsx("h3",{children:"TLS termination and SSL"})]}),t.jsx(D.Para,{children:"TLS termination means HTTPS is handled at the proxy. The proxy decrypts traffic and forwards it to backends. This makes certificate management easier."}),t.jsxs(D.Bullets,{children:[t.jsx("li",{children:"One place to manage certificates"}),t.jsx("li",{children:"Backends can run HTTP inside private network"}),t.jsx("li",{children:"Proxy can enforce HTTPS redirects"})]}),t.jsxs(D.Warn,{children:[t.jsx(Qe,{}),t.jsxs("div",{children:[t.jsx(D.WarnTitle,{children:"Security note"}),t.jsx(D.WarnText,{children:"Trust forwarded headers only from your trusted proxy. Do not accept X-Forwarded-For from random clients."})]})]})]}),t.jsxs(D.Section,{children:[t.jsxs(D.SectionHead,{children:[t.jsx(sn,{}),t.jsx("h3",{children:"Headers and real client IP"})]}),t.jsx(D.Para,{children:"Because proxy sits between client and backend, backend needs headers to know original client IP and protocol. Common headers are X-Forwarded-For and X-Forwarded-Proto."}),t.jsxs(D.Example,{children:[t.jsx(D.ExampleTitle,{children:"Typical use"}),t.jsxs(D.Bullets,{children:[t.jsx("li",{children:"Logging real client IP"}),t.jsx("li",{children:"Generating correct redirects based on https"}),t.jsx("li",{children:"Security checks and rate limiting"})]})]})]}),t.jsxs(D.Section,{children:[t.jsxs(D.SectionHead,{children:[t.jsx(ln,{}),t.jsx("h3",{children:"Caching and compression"})]}),t.jsxs(D.Bullets,{children:[t.jsx("li",{children:"Caching - store responses so backend is not hit every time"}),t.jsx("li",{children:"Compression - gzip or brotli to reduce payload size"}),t.jsx("li",{children:"Best for static assets and GET responses"})]}),t.jsxs(D.Note,{children:[t.jsx(we,{}),t.jsxs("div",{children:[t.jsx(D.NoteTitle,{children:"Good practice"}),t.jsx(D.NoteText,{children:"Cache public static content aggressively, but be careful caching personalized API responses."})]})]})]}),t.jsxs(D.Section,{children:[t.jsxs(D.SectionHead,{children:[t.jsx($r,{}),t.jsx("h3",{children:"Protection features"})]}),t.jsxs(D.Bullets,{children:[t.jsx("li",{children:"Rate limiting - stop abuse by limiting requests per IP"}),t.jsx("li",{children:"Request size limits - block huge payload attacks"}),t.jsx("li",{children:"Basic WAF style rules - block suspicious patterns"})]}),t.jsxs(D.Warn,{children:[t.jsx(Qe,{}),t.jsxs("div",{children:[t.jsx(D.WarnTitle,{children:"Reality check"}),t.jsx(D.WarnText,{children:"Reverse proxy helps, but serious DDoS protection is usually handled by CDN or cloud edge services."})]})]})]}),t.jsxs(D.Section,{children:[t.jsxs(D.SectionHead,{children:[t.jsx(Nr,{}),t.jsx("h3",{children:"Cheat sheet playground"})]}),t.jsx(D.SnippetGrid,{children:x.map(h=>{const y=c===h.key;return t.jsxs(D.SnippetCard,{children:[t.jsxs(D.SnippetTop,{children:[t.jsxs("div",{children:[t.jsx(D.SnippetTitle,{children:h.title}),t.jsx(D.SnippetHint,{children:h.hint})]}),t.jsxs(D.CopyBtn,{type:"button",onClick:()=>k(h.code,h.key),title:y?"Copied":"Copy",children:[y?t.jsx(we,{}):t.jsx(dr,{}),y?"Copied":"Copy"]})]}),t.jsx(D.CodeBlock,{children:t.jsx("pre",{children:h.code})})]},h.key)})})]}),t.jsx(D.FooterNote,{children:"Reverse proxy is your control layer between internet and your services. It makes routing clean, security tighter, and operations simpler."})]})]})},U={Wrapper:a.div`
        margin-bottom: 10px;
        border: 1px solid var(--color-border);
        border-radius: 14px;
        background: var(--color-surface);
        overflow: hidden;
    `,Header:a.div`
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 12px;
        padding: 16px 18px;
        cursor: pointer;
        user-select: none;
        transition: background 140ms ease;

        &:hover {
            background: var(--color-surface-2);
        }

        &:focus-visible {
            outline: 2px solid var(--color-primary);
            outline-offset: 3px;
        }
    `,Title:a.div`
        display: flex;
        align-items: center;
        gap: 10px;
        font-weight: 900;
        font-size: 18px;
        color: var(--color-text-primary);

        svg {
            font-size: 20px;
            color: var(--color-primary);
        }
    `,Badge:a.span`
        margin-left: 10px;
        font-size: 12px;
        font-weight: 800;
        color: var(--color-text-secondary);
        background: color-mix(in srgb, var(--color-surface-2) 85%, transparent);
        border: 1px solid var(--color-border);
        padding: 4px 10px;
        border-radius: 999px;
    `,Toggle:a.div`
        font-size: 20px;
        color: var(--color-text-muted);
        flex: 0 0 auto;
    `,Preview:a.div`
        padding: 14px 18px 18px 18px;
        border-top: 1px solid var(--color-border);
        background: color-mix(in srgb, var(--color-surface-2) 55%, transparent);
    `,PreviewLine:a.div`
        color: var(--color-text-secondary);
        font-size: 14px;
        line-height: 1.5;

        & + & {
            margin-top: 6px;
        }
    `,Content:a.div`
        padding: 18px;
        border-top: 1px solid var(--color-border);
        background: var(--color-surface-2);
    `,Section:a.div`
        & + & {
            margin-top: 16px;
        }
    `,SectionHead:a.div`
        display: flex;
        align-items: center;
        gap: 10px;
        margin-bottom: 8px;

        svg {
            color: var(--color-accent);
            font-size: 18px;
        }

        h3 {
            font-size: 16px;
            font-weight: 900;
            color: var(--color-text-primary);
        }
    `,Para:a.p`
        margin-bottom: 10px;
        color: var(--color-text-secondary);
        font-size: 14px;
        line-height: 1.6;
    `,Bullets:a.ul`
        padding-left: 0;
        margin: 0;

        li {
            color: var(--color-text-secondary);
            font-size: 14px;
            line-height: 1.6;
            padding-left: 14px;
            position: relative;
            margin: 8px 0;
        }

        li::before {
            content: "-";
            position: absolute;
            left: 0;
            top: 0;
            color: var(--color-text-muted);
            font-weight: 900;
        }

        b {
            color: var(--color-text-primary);
            font-weight: 900;
        }
    `,CodeBlock:a.div`
        background: var(--color-code-bg);
        border: 1px solid var(--color-code-border);
        border-radius: 12px;
        padding: 12px;
        overflow: auto;

        pre {
            margin: 0;
            white-space: pre;
            font-size: 12.5px;
            line-height: 1.55;
            color: var(--color-text-primary);
        }
    `,Example:a.div`
        margin-top: 10px;
        border: 1px solid var(--color-border);
        background: color-mix(in srgb, var(--color-surface) 75%, transparent);
        border-radius: 12px;
        padding: 12px;
    `,ExampleTitle:a.div`
        font-weight: 900;
        font-size: 13px;
        color: var(--color-text-primary);
        margin-bottom: 8px;
    `,Note:a.div`
        display: flex;
        gap: 10px;
        align-items: flex-start;
        margin-top: 10px;
        border: 1px solid var(--color-border);
        background: color-mix(
            in srgb,
            var(--color-primary) 8%,
            var(--color-surface)
        );
        border-radius: 12px;
        padding: 12px;

        svg {
            margin-top: 2px;
            color: var(--color-primary);
            font-size: 18px;
            flex: 0 0 auto;
        }
    `,NoteTitle:a.div`
        font-weight: 900;
        color: var(--color-text-primary);
        font-size: 13px;
        margin-bottom: 2px;
    `,NoteText:a.div`
        color: var(--color-text-secondary);
        font-size: 13px;
        line-height: 1.55;
    `,Warn:a.div`
        display: flex;
        gap: 10px;
        align-items: flex-start;
        margin-top: 10px;
        border: 1px solid var(--color-border);
        background: color-mix(
            in srgb,
            var(--color-warning) 10%,
            var(--color-surface)
        );
        border-radius: 12px;
        padding: 12px;

        svg {
            margin-top: 2px;
            color: var(--color-warning);
            font-size: 18px;
            flex: 0 0 auto;
        }
    `,WarnTitle:a.div`
        font-weight: 900;
        color: var(--color-text-primary);
        font-size: 13px;
        margin-bottom: 2px;
    `,WarnText:a.div`
        color: var(--color-text-secondary);
        font-size: 13px;
        line-height: 1.55;
    `,SnippetGrid:a.div`
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
        gap: 12px;
        margin-top: 10px;
    `,SnippetCard:a.div`
        border: 1px solid var(--color-border);
        background: var(--color-surface);
        border-radius: 12px;
        overflow: hidden;
        transition:
            transform 140ms ease,
            border-color 140ms ease;

        &:hover {
            transform: translateY(-2px);
            border-color: var(--color-border-light);
        }
    `,SnippetTop:a.div`
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        gap: 12px;
        padding: 12px;
        border-bottom: 1px solid var(--color-border);
        background: color-mix(in srgb, var(--color-surface-2) 55%, transparent);
    `,SnippetTitle:a.div`
        font-weight: 900;
        color: var(--color-text-primary);
        font-size: 13px;
        line-height: 1.3;
        margin-bottom: 4px;
    `,SnippetHint:a.div`
        color: var(--color-text-muted);
        font-size: 12px;
    `,CopyBtn:a.button`
        display: inline-flex;
        align-items: center;
        gap: 8px;
        padding: 8px 10px;
        border-radius: 10px;
        border: 1px solid var(--color-border);
        background: color-mix(in srgb, var(--color-surface) 70%, transparent);
        color: var(--color-text-primary);
        font-weight: 900;
        font-size: 12px;
        transition:
            transform 140ms ease,
            border-color 140ms ease,
            background 140ms ease;

        svg {
            font-size: 14px;
            color: var(--color-accent);
        }

        &:hover {
            border-color: var(--color-border-light);
            transform: translateY(-1px);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 70%,
                transparent
            );
        }

        &:active {
            transform: translateY(0px);
        }
    `,CmdGrid:a.div`
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
        gap: 12px;
        margin-top: 10px;
    `,CmdCard:a.div`
        border: 1px solid var(--color-border);
        background: var(--color-surface);
        border-radius: 12px;
        overflow: hidden;
    `,CmdTop:a.div`
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 12px;
        padding: 12px;
        border-bottom: 1px solid var(--color-border);
        background: color-mix(in srgb, var(--color-surface-2) 55%, transparent);
    `,CmdTitle:a.div`
        font-weight: 900;
        color: var(--color-text-primary);
        font-size: 13px;
        line-height: 1.3;
    `,FooterNote:a.div`
        margin-top: 14px;
        padding: 12px;
        border: 1px solid var(--color-border);
        border-radius: 12px;
        background: color-mix(in srgb, var(--color-surface) 70%, transparent);
        color: var(--color-text-secondary);
        font-size: 13px;
        line-height: 1.55;
    `},Bm=()=>{const[s,d]=Y.useState(!1),[c,p]=Y.useState(""),x=Y.useMemo(()=>[{key:"static",title:"Serve static files",hint:"Basic web server",code:`# Example concept:
# - Nginx listens on port 80
# - serves files from a folder

server {
  listen 80;
  server_name example.com;

  root /var/www/site;
  index index.html;
}`},{key:"reverseProxy",title:"Reverse proxy to Node app",hint:"proxy_pass basics",code:`# Proxy incoming traffic to backend running on 3000

server {
  listen 80;
  server_name api.example.com;

  location / {
    proxy_pass http://127.0.0.1:3000;
  }
}`},{key:"forwardHeaders",title:"Forward important headers",hint:"Real IP and protocol",code:`# Common proxy headers for backend apps

location / {
  proxy_set_header Host $host;
  proxy_set_header X-Real-IP $remote_addr;
  proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
  proxy_set_header X-Forwarded-Proto $scheme;

  proxy_pass http://127.0.0.1:3000;
}`},{key:"loadBalance",title:"Load balancing",hint:"Multiple backends",code:`# Upstream group of servers
upstream app_backend {
  server 10.0.1.10:3000;
  server 10.0.1.11:3000;
  server 10.0.1.12:3000;
}

server {
  listen 80;

  location / {
    proxy_pass http://app_backend;
  }
}`},{key:"gzip",title:"Gzip compression",hint:"Reduce payload size",code:`# Enable gzip for text responses

gzip on;
gzip_types text/plain text/css application/json application/javascript text/xml application/xml;
gzip_min_length 1024;`},{key:"rateLimit",title:"Rate limiting",hint:"Basic abuse protection",code:`# Limit requests per IP

limit_req_zone $binary_remote_addr zone=perip:10m rate=10r/s;

server {
  location / {
    limit_req zone=perip burst=20 nodelay;
    proxy_pass http://127.0.0.1:3000;
  }
}`},{key:"health",title:"Health check endpoint",hint:"Simple monitoring",code:`# Serve a health response without touching backend

location = /health {
  add_header Content-Type text/plain;
  return 200 "ok";
}`}],[]),k=Y.useMemo(()=>[{key:"installUbuntu",title:"Install on Ubuntu",code:`sudo apt update
sudo apt install -y nginx
sudo systemctl enable nginx
sudo systemctl start nginx`},{key:"status",title:"Check status",code:"sudo systemctl status nginx"},{key:"testConfig",title:"Test config",code:"sudo nginx -t"},{key:"reload",title:"Reload safely",code:"sudo systemctl reload nginx"},{key:"logs",title:"View logs",code:`# access log
sudo tail -f /var/log/nginx/access.log

# error log
sudo tail -f /var/log/nginx/error.log`}],[]),h=async(S,le)=>{try{await navigator.clipboard.writeText(S),p(le),window.setTimeout(()=>p(""),900)}catch{p("")}},y=S=>c===S;return t.jsxs(U.Wrapper,{children:[t.jsxs(U.Header,{onClick:()=>d(S=>!S),role:"button",tabIndex:0,children:[t.jsxs(U.Title,{children:[t.jsx(pm,{}),"Nginx",t.jsx(U.Badge,{children:"Web server and reverse proxy"})]}),t.jsx(U.Toggle,{"aria-hidden":"true",children:s?t.jsx(pr,{}):t.jsx(ur,{})})]}),!s&&t.jsxs(U.Preview,{children:[t.jsx(U.PreviewLine,{children:"Nginx is a high performance web server used for static hosting, reverse proxy, and load balancing."}),t.jsx(U.PreviewLine,{children:"Learn server blocks, proxy_pass, headers, gzip, rate limiting, and safe reload workflow."})]}),s&&t.jsxs(U.Content,{children:[t.jsxs(U.Section,{children:[t.jsxs(U.SectionHead,{children:[t.jsx(Mt,{}),t.jsx("h3",{children:"What is Nginx"})]}),t.jsx(U.Para,{children:"Nginx is a web server and reverse proxy. It can serve static files, forward requests to backend apps, load balance across servers, and act as a control layer between internet and your services."}),t.jsxs(U.Note,{children:[t.jsx(we,{}),t.jsxs("div",{children:[t.jsx(U.NoteTitle,{children:"Beginner mental model"}),t.jsx(U.NoteText,{children:"Nginx is the gatekeeper at the edge. It receives requests, then either serves files or forwards traffic to your app."})]})]})]}),t.jsxs(U.Section,{children:[t.jsxs(U.SectionHead,{children:[t.jsx(Bo,{}),t.jsx("h3",{children:"Key terms"})]}),t.jsxs(U.Bullets,{children:[t.jsxs("li",{children:[t.jsx("b",{children:"server block"})," - a virtual host config for a domain or port"]}),t.jsxs("li",{children:[t.jsx("b",{children:"location"})," - routing rules inside a server block"]}),t.jsxs("li",{children:[t.jsx("b",{children:"root"})," - folder path used for static files"]}),t.jsxs("li",{children:[t.jsx("b",{children:"proxy_pass"})," - forwards request to backend"]}),t.jsxs("li",{children:[t.jsx("b",{children:"upstream"})," - group of backend servers for load balancing"]})]})]}),t.jsxs(U.Section,{children:[t.jsxs(U.SectionHead,{children:[t.jsx(An,{}),t.jsx("h3",{children:"Serve static files"})]}),t.jsx(U.Para,{children:"Static hosting means Nginx directly serves files from disk. This is very fast for HTML, CSS, JS, images."}),t.jsxs(U.Example,{children:[t.jsx(U.ExampleTitle,{children:"Typical use cases"}),t.jsxs(U.Bullets,{children:[t.jsx("li",{children:"Documentation sites"}),t.jsx("li",{children:"Frontend build output, example Vite dist folder"}),t.jsx("li",{children:"Serving images and downloads"})]})]})]}),t.jsxs(U.Section,{children:[t.jsxs(U.SectionHead,{children:[t.jsx(Pa,{}),t.jsx("h3",{children:"Reverse proxy to backend"})]}),t.jsx(U.Para,{children:"Reverse proxy means Nginx forwards the request to your backend app running on another port or another server. This allows you to keep backend private and expose only Nginx to internet."}),t.jsxs(U.Bullets,{children:[t.jsx("li",{children:"Backend can run on 127.0.0.1:3000"}),t.jsx("li",{children:"Nginx listens on 80 and 443"}),t.jsx("li",{children:"Nginx adds headers and manages TLS"})]}),t.jsxs(U.Warn,{children:[t.jsx(Qe,{}),t.jsxs("div",{children:[t.jsx(U.WarnTitle,{children:"Common bug"}),t.jsx(U.WarnText,{children:"If you do not set forwarded headers, backend may not know the real client IP or that request was https."})]})]})]}),t.jsxs(U.Section,{children:[t.jsxs(U.SectionHead,{children:[t.jsx(ln,{}),t.jsx("h3",{children:"Compression and caching"})]}),t.jsxs(U.Bullets,{children:[t.jsx("li",{children:"Gzip compresses text content like HTML, JS, JSON"}),t.jsx("li",{children:"Improves load times and reduces bandwidth"}),t.jsx("li",{children:"Caching can reduce backend load for repeat content"})]}),t.jsxs(U.Note,{children:[t.jsx(Je,{}),t.jsxs("div",{children:[t.jsx(U.NoteTitle,{children:"Quick rule"}),t.jsx(U.NoteText,{children:"Compress text. Do not compress already compressed files like jpg, png, mp4."})]})]})]}),t.jsxs(U.Section,{children:[t.jsxs(U.SectionHead,{children:[t.jsx($r,{}),t.jsx("h3",{children:"Rate limiting and safety"})]}),t.jsx(U.Para,{children:"Nginx can throttle abusive traffic. This is not full DDoS protection, but it helps for basic patterns."}),t.jsxs(U.Bullets,{children:[t.jsx("li",{children:"Limit requests per IP"}),t.jsx("li",{children:"Block huge payload sizes"}),t.jsx("li",{children:"Return fast response for health checks"})]})]}),t.jsxs(U.Section,{children:[t.jsxs(U.SectionHead,{children:[t.jsx(Nr,{}),t.jsx("h3",{children:"Commands you will use daily"})]}),t.jsx(U.CmdGrid,{children:k.map(S=>t.jsxs(U.CmdCard,{children:[t.jsxs(U.CmdTop,{children:[t.jsx(U.CmdTitle,{children:S.title}),t.jsxs(U.CopyBtn,{type:"button",onClick:()=>h(S.code,S.key),title:y(S.key)?"Copied":"Copy",children:[y(S.key)?t.jsx(we,{}):t.jsx(dr,{}),y(S.key)?"Copied":"Copy"]})]}),t.jsx(U.CodeBlock,{children:t.jsx("pre",{children:S.code})})]},S.key))})]}),t.jsxs(U.Section,{children:[t.jsxs(U.SectionHead,{children:[t.jsx(Nr,{}),t.jsx("h3",{children:"Config cheat sheet"})]}),t.jsx(U.SnippetGrid,{children:x.map(S=>t.jsxs(U.SnippetCard,{children:[t.jsxs(U.SnippetTop,{children:[t.jsxs("div",{children:[t.jsx(U.SnippetTitle,{children:S.title}),t.jsx(U.SnippetHint,{children:S.hint})]}),t.jsxs(U.CopyBtn,{type:"button",onClick:()=>h(S.code,S.key),title:y(S.key)?"Copied":"Copy",children:[y(S.key)?t.jsx(we,{}):t.jsx(dr,{}),y(S.key)?"Copied":"Copy"]})]}),t.jsx(U.CodeBlock,{children:t.jsx("pre",{children:S.code})})]},S.key))}),t.jsxs(U.Warn,{style:{marginTop:12},children:[t.jsx(Qe,{}),t.jsxs("div",{children:[t.jsx(U.WarnTitle,{children:"Always test config before reload"}),t.jsx(U.WarnText,{children:'Run "nginx -t" first. Reload only if test passes. This prevents accidental downtime.'})]})]})]}),t.jsx(U.FooterNote,{children:"Nginx is popular because it is fast and stable. Learn server blocks, proxy headers, and safe reload workflow and you can run real production setups."})]})]})},Rm=()=>{const s=Y.useRef(null);return t.jsxs(ua.Wrapper,{children:[t.jsx(ua.Header,{children:t.jsx(hm,{})}),t.jsxs(ua.Main,{ref:s,children:[t.jsxs("div",{className:"contentWrapper",children:[t.jsx(mm,{}),t.jsx(ym,{}),t.jsx(jm,{}),t.jsx(bm,{}),t.jsx(km,{}),t.jsx(wm,{}),t.jsx(Sm,{}),t.jsx(Cm,{}),t.jsx(Tm,{}),t.jsx(Em,{}),t.jsx(Pm,{}),t.jsx(zm,{}),t.jsx(Nm,{}),t.jsx(Lm,{}),t.jsx(Im,{}),t.jsx(_m,{}),t.jsx(Bm,{})]}),t.jsx("div",{className:"footerWrapper",children:t.jsx(xm,{})})]}),t.jsx(vm,{scrollerRef:s})]})};Af.createRoot(document.getElementById("root")).render(t.jsx(t.Fragment,{children:t.jsx(Rm,{})}));
