function F0(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function U0(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var j0={exports:{}},od={},z0={exports:{}},Ee={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ol=Symbol.for("react.element"),ZS=Symbol.for("react.portal"),eC=Symbol.for("react.fragment"),tC=Symbol.for("react.strict_mode"),nC=Symbol.for("react.profiler"),rC=Symbol.for("react.provider"),iC=Symbol.for("react.context"),sC=Symbol.for("react.forward_ref"),oC=Symbol.for("react.suspense"),aC=Symbol.for("react.memo"),lC=Symbol.for("react.lazy"),ey=Symbol.iterator;function uC(t){return t===null||typeof t!="object"?null:(t=ey&&t[ey]||t["@@iterator"],typeof t=="function"?t:null)}var B0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},$0=Object.assign,H0={};function Ko(t,e,n){this.props=t,this.context=e,this.refs=H0,this.updater=n||B0}Ko.prototype.isReactComponent={};Ko.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Ko.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function G0(){}G0.prototype=Ko.prototype;function Ip(t,e,n){this.props=t,this.context=e,this.refs=H0,this.updater=n||B0}var Sp=Ip.prototype=new G0;Sp.constructor=Ip;$0(Sp,Ko.prototype);Sp.isPureReactComponent=!0;var ty=Array.isArray,W0=Object.prototype.hasOwnProperty,Cp={current:null},q0={key:!0,ref:!0,__self:!0,__source:!0};function K0(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)W0.call(e,r)&&!q0.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var u=Array(a),c=0;c<a;c++)u[c]=arguments[c+2];i.children=u}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Ol,type:t,key:s,ref:o,props:i,_owner:Cp.current}}function cC(t,e){return{$$typeof:Ol,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Rp(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ol}function dC(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var ny=/\/+/g;function eh(t,e){return typeof t=="object"&&t!==null&&t.key!=null?dC(""+t.key):e.toString(36)}function Vu(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Ol:case ZS:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+eh(o,0):r,ty(i)?(n="",t!=null&&(n=t.replace(ny,"$&/")+"/"),Vu(i,e,n,"",function(c){return c})):i!=null&&(Rp(i)&&(i=cC(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(ny,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",ty(t))for(var a=0;a<t.length;a++){s=t[a];var u=r+eh(s,a);o+=Vu(s,e,n,u,i)}else if(u=uC(t),typeof u=="function")for(t=u.call(t),a=0;!(s=t.next()).done;)s=s.value,u=r+eh(s,a++),o+=Vu(s,e,n,u,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function hu(t,e,n){if(t==null)return t;var r=[],i=0;return Vu(t,r,"","",function(s){return e.call(n,s,i++)}),r}function hC(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Xt={current:null},Fu={transition:null},fC={ReactCurrentDispatcher:Xt,ReactCurrentBatchConfig:Fu,ReactCurrentOwner:Cp};function Q0(){throw Error("act(...) is not supported in production builds of React.")}Ee.Children={map:hu,forEach:function(t,e,n){hu(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return hu(t,function(){e++}),e},toArray:function(t){return hu(t,function(e){return e})||[]},only:function(t){if(!Rp(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Ee.Component=Ko;Ee.Fragment=eC;Ee.Profiler=nC;Ee.PureComponent=Ip;Ee.StrictMode=tC;Ee.Suspense=oC;Ee.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=fC;Ee.act=Q0;Ee.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=$0({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Cp.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(u in e)W0.call(e,u)&&!q0.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&a!==void 0?a[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){a=Array(u);for(var c=0;c<u;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:Ol,type:t.type,key:i,ref:s,props:r,_owner:o}};Ee.createContext=function(t){return t={$$typeof:iC,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:rC,_context:t},t.Consumer=t};Ee.createElement=K0;Ee.createFactory=function(t){var e=K0.bind(null,t);return e.type=t,e};Ee.createRef=function(){return{current:null}};Ee.forwardRef=function(t){return{$$typeof:sC,render:t}};Ee.isValidElement=Rp;Ee.lazy=function(t){return{$$typeof:lC,_payload:{_status:-1,_result:t},_init:hC}};Ee.memo=function(t,e){return{$$typeof:aC,type:t,compare:e===void 0?null:e}};Ee.startTransition=function(t){var e=Fu.transition;Fu.transition={};try{t()}finally{Fu.transition=e}};Ee.unstable_act=Q0;Ee.useCallback=function(t,e){return Xt.current.useCallback(t,e)};Ee.useContext=function(t){return Xt.current.useContext(t)};Ee.useDebugValue=function(){};Ee.useDeferredValue=function(t){return Xt.current.useDeferredValue(t)};Ee.useEffect=function(t,e){return Xt.current.useEffect(t,e)};Ee.useId=function(){return Xt.current.useId()};Ee.useImperativeHandle=function(t,e,n){return Xt.current.useImperativeHandle(t,e,n)};Ee.useInsertionEffect=function(t,e){return Xt.current.useInsertionEffect(t,e)};Ee.useLayoutEffect=function(t,e){return Xt.current.useLayoutEffect(t,e)};Ee.useMemo=function(t,e){return Xt.current.useMemo(t,e)};Ee.useReducer=function(t,e,n){return Xt.current.useReducer(t,e,n)};Ee.useRef=function(t){return Xt.current.useRef(t)};Ee.useState=function(t){return Xt.current.useState(t)};Ee.useSyncExternalStore=function(t,e,n){return Xt.current.useSyncExternalStore(t,e,n)};Ee.useTransition=function(){return Xt.current.useTransition()};Ee.version="18.3.1";z0.exports=Ee;var U=z0.exports;const W=U0(U),qh=F0({__proto__:null,default:W},[U]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pC=U,mC=Symbol.for("react.element"),gC=Symbol.for("react.fragment"),yC=Object.prototype.hasOwnProperty,vC=pC.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,_C={key:!0,ref:!0,__self:!0,__source:!0};function Y0(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)yC.call(e,r)&&!_C.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:mC,type:t,key:s,ref:o,props:i,_owner:vC.current}}od.Fragment=gC;od.jsx=Y0;od.jsxs=Y0;j0.exports=od;var V=j0.exports,X0={exports:{}},Sn={},J0={exports:{}},Z0={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(q,G){var Z=q.length;q.push(G);e:for(;0<Z;){var de=Z-1>>>1,ne=q[de];if(0<i(ne,G))q[de]=G,q[Z]=ne,Z=de;else break e}}function n(q){return q.length===0?null:q[0]}function r(q){if(q.length===0)return null;var G=q[0],Z=q.pop();if(Z!==G){q[0]=Z;e:for(var de=0,ne=q.length,re=ne>>>1;de<re;){var pe=2*(de+1)-1,Ne=q[pe],Ge=pe+1,Re=q[Ge];if(0>i(Ne,Z))Ge<ne&&0>i(Re,Ne)?(q[de]=Re,q[Ge]=Z,de=Ge):(q[de]=Ne,q[pe]=Z,de=pe);else if(Ge<ne&&0>i(Re,Z))q[de]=Re,q[Ge]=Z,de=Ge;else break e}}return G}function i(q,G){var Z=q.sortIndex-G.sortIndex;return Z!==0?Z:q.id-G.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var u=[],c=[],h=1,f=null,g=3,m=!1,E=!1,A=!1,N=typeof setTimeout=="function"?setTimeout:null,T=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function S(q){for(var G=n(c);G!==null;){if(G.callback===null)r(c);else if(G.startTime<=q)r(c),G.sortIndex=G.expirationTime,e(u,G);else break;G=n(c)}}function D(q){if(A=!1,S(q),!E)if(n(u)!==null)E=!0,et(j);else{var G=n(c);G!==null&&ve(D,G.startTime-q)}}function j(q,G){E=!1,A&&(A=!1,T(y),y=-1),m=!0;var Z=g;try{for(S(G),f=n(u);f!==null&&(!(f.expirationTime>G)||q&&!k());){var de=f.callback;if(typeof de=="function"){f.callback=null,g=f.priorityLevel;var ne=de(f.expirationTime<=G);G=t.unstable_now(),typeof ne=="function"?f.callback=ne:f===n(u)&&r(u),S(G)}else r(u);f=n(u)}if(f!==null)var re=!0;else{var pe=n(c);pe!==null&&ve(D,pe.startTime-G),re=!1}return re}finally{f=null,g=Z,m=!1}}var b=!1,I=null,y=-1,w=5,C=-1;function k(){return!(t.unstable_now()-C<w)}function x(){if(I!==null){var q=t.unstable_now();C=q;var G=!0;try{G=I(!0,q)}finally{G?R():(b=!1,I=null)}}else b=!1}var R;if(typeof _=="function")R=function(){_(x)};else if(typeof MessageChannel<"u"){var ge=new MessageChannel,ct=ge.port2;ge.port1.onmessage=x,R=function(){ct.postMessage(null)}}else R=function(){N(x,0)};function et(q){I=q,b||(b=!0,R())}function ve(q,G){y=N(function(){q(t.unstable_now())},G)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(q){q.callback=null},t.unstable_continueExecution=function(){E||m||(E=!0,et(j))},t.unstable_forceFrameRate=function(q){0>q||125<q?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):w=0<q?Math.floor(1e3/q):5},t.unstable_getCurrentPriorityLevel=function(){return g},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(q){switch(g){case 1:case 2:case 3:var G=3;break;default:G=g}var Z=g;g=G;try{return q()}finally{g=Z}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(q,G){switch(q){case 1:case 2:case 3:case 4:case 5:break;default:q=3}var Z=g;g=q;try{return G()}finally{g=Z}},t.unstable_scheduleCallback=function(q,G,Z){var de=t.unstable_now();switch(typeof Z=="object"&&Z!==null?(Z=Z.delay,Z=typeof Z=="number"&&0<Z?de+Z:de):Z=de,q){case 1:var ne=-1;break;case 2:ne=250;break;case 5:ne=1073741823;break;case 4:ne=1e4;break;default:ne=5e3}return ne=Z+ne,q={id:h++,callback:G,priorityLevel:q,startTime:Z,expirationTime:ne,sortIndex:-1},Z>de?(q.sortIndex=Z,e(c,q),n(u)===null&&q===n(c)&&(A?(T(y),y=-1):A=!0,ve(D,Z-de))):(q.sortIndex=ne,e(u,q),E||m||(E=!0,et(j))),q},t.unstable_shouldYield=k,t.unstable_wrapCallback=function(q){var G=g;return function(){var Z=g;g=G;try{return q.apply(this,arguments)}finally{g=Z}}}})(Z0);J0.exports=Z0;var wC=J0.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var EC=U,En=wC;function H(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var ew=new Set,el={};function Ns(t,e){ko(t,e),ko(t+"Capture",e)}function ko(t,e){for(el[t]=e,t=0;t<e.length;t++)ew.add(e[t])}var jr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Kh=Object.prototype.hasOwnProperty,TC=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ry={},iy={};function IC(t){return Kh.call(iy,t)?!0:Kh.call(ry,t)?!1:TC.test(t)?iy[t]=!0:(ry[t]=!0,!1)}function SC(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function CC(t,e,n,r){if(e===null||typeof e>"u"||SC(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Jt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Nt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Nt[t]=new Jt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Nt[e]=new Jt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Nt[t]=new Jt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Nt[t]=new Jt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Nt[t]=new Jt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Nt[t]=new Jt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Nt[t]=new Jt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Nt[t]=new Jt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Nt[t]=new Jt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Ap=/[\-:]([a-z])/g;function Pp(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Ap,Pp);Nt[e]=new Jt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Ap,Pp);Nt[e]=new Jt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Ap,Pp);Nt[e]=new Jt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Nt[t]=new Jt(t,1,!1,t.toLowerCase(),null,!1,!1)});Nt.xlinkHref=new Jt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Nt[t]=new Jt(t,1,!1,t.toLowerCase(),null,!0,!0)});function bp(t,e,n,r){var i=Nt.hasOwnProperty(e)?Nt[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(CC(e,n,i,r)&&(n=null),r||i===null?IC(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Qr=EC.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,fu=Symbol.for("react.element"),oo=Symbol.for("react.portal"),ao=Symbol.for("react.fragment"),xp=Symbol.for("react.strict_mode"),Qh=Symbol.for("react.profiler"),tw=Symbol.for("react.provider"),nw=Symbol.for("react.context"),kp=Symbol.for("react.forward_ref"),Yh=Symbol.for("react.suspense"),Xh=Symbol.for("react.suspense_list"),Np=Symbol.for("react.memo"),ui=Symbol.for("react.lazy"),rw=Symbol.for("react.offscreen"),sy=Symbol.iterator;function fa(t){return t===null||typeof t!="object"?null:(t=sy&&t[sy]||t["@@iterator"],typeof t=="function"?t:null)}var it=Object.assign,th;function Ra(t){if(th===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);th=e&&e[1]||""}return`
`+th+t}var nh=!1;function rh(t,e){if(!t||nh)return"";nh=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var u=`
`+i[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=a);break}}}finally{nh=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Ra(t):""}function RC(t){switch(t.tag){case 5:return Ra(t.type);case 16:return Ra("Lazy");case 13:return Ra("Suspense");case 19:return Ra("SuspenseList");case 0:case 2:case 15:return t=rh(t.type,!1),t;case 11:return t=rh(t.type.render,!1),t;case 1:return t=rh(t.type,!0),t;default:return""}}function Jh(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case ao:return"Fragment";case oo:return"Portal";case Qh:return"Profiler";case xp:return"StrictMode";case Yh:return"Suspense";case Xh:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case nw:return(t.displayName||"Context")+".Consumer";case tw:return(t._context.displayName||"Context")+".Provider";case kp:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Np:return e=t.displayName||null,e!==null?e:Jh(t.type)||"Memo";case ui:e=t._payload,t=t._init;try{return Jh(t(e))}catch{}}return null}function AC(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Jh(e);case 8:return e===xp?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Oi(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function iw(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function PC(t){var e=iw(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function pu(t){t._valueTracker||(t._valueTracker=PC(t))}function sw(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=iw(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function oc(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Zh(t,e){var n=e.checked;return it({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function oy(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Oi(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function ow(t,e){e=e.checked,e!=null&&bp(t,"checked",e,!1)}function ef(t,e){ow(t,e);var n=Oi(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?tf(t,e.type,n):e.hasOwnProperty("defaultValue")&&tf(t,e.type,Oi(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function ay(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function tf(t,e,n){(e!=="number"||oc(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Aa=Array.isArray;function wo(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Oi(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function nf(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(H(91));return it({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function ly(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(H(92));if(Aa(n)){if(1<n.length)throw Error(H(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Oi(n)}}function aw(t,e){var n=Oi(e.value),r=Oi(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function uy(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function lw(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function rf(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?lw(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var mu,uw=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(mu=mu||document.createElement("div"),mu.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=mu.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function tl(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Va={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},bC=["Webkit","ms","Moz","O"];Object.keys(Va).forEach(function(t){bC.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Va[e]=Va[t]})});function cw(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Va.hasOwnProperty(t)&&Va[t]?(""+e).trim():e+"px"}function dw(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=cw(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var xC=it({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function sf(t,e){if(e){if(xC[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(H(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(H(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(H(61))}if(e.style!=null&&typeof e.style!="object")throw Error(H(62))}}function of(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var af=null;function Dp(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var lf=null,Eo=null,To=null;function cy(t){if(t=Vl(t)){if(typeof lf!="function")throw Error(H(280));var e=t.stateNode;e&&(e=dd(e),lf(t.stateNode,t.type,e))}}function hw(t){Eo?To?To.push(t):To=[t]:Eo=t}function fw(){if(Eo){var t=Eo,e=To;if(To=Eo=null,cy(t),e)for(t=0;t<e.length;t++)cy(e[t])}}function pw(t,e){return t(e)}function mw(){}var ih=!1;function gw(t,e,n){if(ih)return t(e,n);ih=!0;try{return pw(t,e,n)}finally{ih=!1,(Eo!==null||To!==null)&&(mw(),fw())}}function nl(t,e){var n=t.stateNode;if(n===null)return null;var r=dd(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(H(231,e,typeof n));return n}var uf=!1;if(jr)try{var pa={};Object.defineProperty(pa,"passive",{get:function(){uf=!0}}),window.addEventListener("test",pa,pa),window.removeEventListener("test",pa,pa)}catch{uf=!1}function kC(t,e,n,r,i,s,o,a,u){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(h){this.onError(h)}}var Fa=!1,ac=null,lc=!1,cf=null,NC={onError:function(t){Fa=!0,ac=t}};function DC(t,e,n,r,i,s,o,a,u){Fa=!1,ac=null,kC.apply(NC,arguments)}function OC(t,e,n,r,i,s,o,a,u){if(DC.apply(this,arguments),Fa){if(Fa){var c=ac;Fa=!1,ac=null}else throw Error(H(198));lc||(lc=!0,cf=c)}}function Ds(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function yw(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function dy(t){if(Ds(t)!==t)throw Error(H(188))}function MC(t){var e=t.alternate;if(!e){if(e=Ds(t),e===null)throw Error(H(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return dy(i),t;if(s===r)return dy(i),e;s=s.sibling}throw Error(H(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(H(189))}}if(n.alternate!==r)throw Error(H(190))}if(n.tag!==3)throw Error(H(188));return n.stateNode.current===n?t:e}function vw(t){return t=MC(t),t!==null?_w(t):null}function _w(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=_w(t);if(e!==null)return e;t=t.sibling}return null}var ww=En.unstable_scheduleCallback,hy=En.unstable_cancelCallback,LC=En.unstable_shouldYield,VC=En.unstable_requestPaint,ft=En.unstable_now,FC=En.unstable_getCurrentPriorityLevel,Op=En.unstable_ImmediatePriority,Ew=En.unstable_UserBlockingPriority,uc=En.unstable_NormalPriority,UC=En.unstable_LowPriority,Tw=En.unstable_IdlePriority,ad=null,ur=null;function jC(t){if(ur&&typeof ur.onCommitFiberRoot=="function")try{ur.onCommitFiberRoot(ad,t,void 0,(t.current.flags&128)===128)}catch{}}var Yn=Math.clz32?Math.clz32:$C,zC=Math.log,BC=Math.LN2;function $C(t){return t>>>=0,t===0?32:31-(zC(t)/BC|0)|0}var gu=64,yu=4194304;function Pa(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function cc(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=Pa(a):(s&=o,s!==0&&(r=Pa(s)))}else o=n&~i,o!==0?r=Pa(o):s!==0&&(r=Pa(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Yn(e),i=1<<n,r|=t[n],e&=~i;return r}function HC(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function GC(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Yn(s),a=1<<o,u=i[o];u===-1?(!(a&n)||a&r)&&(i[o]=HC(a,e)):u<=e&&(t.expiredLanes|=a),s&=~a}}function df(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Iw(){var t=gu;return gu<<=1,!(gu&4194240)&&(gu=64),t}function sh(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Ml(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Yn(e),t[e]=n}function WC(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Yn(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Mp(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Yn(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var Fe=0;function Sw(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Cw,Lp,Rw,Aw,Pw,hf=!1,vu=[],Ti=null,Ii=null,Si=null,rl=new Map,il=new Map,hi=[],qC="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function fy(t,e){switch(t){case"focusin":case"focusout":Ti=null;break;case"dragenter":case"dragleave":Ii=null;break;case"mouseover":case"mouseout":Si=null;break;case"pointerover":case"pointerout":rl.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":il.delete(e.pointerId)}}function ma(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Vl(e),e!==null&&Lp(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function KC(t,e,n,r,i){switch(e){case"focusin":return Ti=ma(Ti,t,e,n,r,i),!0;case"dragenter":return Ii=ma(Ii,t,e,n,r,i),!0;case"mouseover":return Si=ma(Si,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return rl.set(s,ma(rl.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,il.set(s,ma(il.get(s)||null,t,e,n,r,i)),!0}return!1}function bw(t){var e=us(t.target);if(e!==null){var n=Ds(e);if(n!==null){if(e=n.tag,e===13){if(e=yw(n),e!==null){t.blockedOn=e,Pw(t.priority,function(){Rw(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Uu(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=ff(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);af=r,n.target.dispatchEvent(r),af=null}else return e=Vl(n),e!==null&&Lp(e),t.blockedOn=n,!1;e.shift()}return!0}function py(t,e,n){Uu(t)&&n.delete(e)}function QC(){hf=!1,Ti!==null&&Uu(Ti)&&(Ti=null),Ii!==null&&Uu(Ii)&&(Ii=null),Si!==null&&Uu(Si)&&(Si=null),rl.forEach(py),il.forEach(py)}function ga(t,e){t.blockedOn===e&&(t.blockedOn=null,hf||(hf=!0,En.unstable_scheduleCallback(En.unstable_NormalPriority,QC)))}function sl(t){function e(i){return ga(i,t)}if(0<vu.length){ga(vu[0],t);for(var n=1;n<vu.length;n++){var r=vu[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Ti!==null&&ga(Ti,t),Ii!==null&&ga(Ii,t),Si!==null&&ga(Si,t),rl.forEach(e),il.forEach(e),n=0;n<hi.length;n++)r=hi[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<hi.length&&(n=hi[0],n.blockedOn===null);)bw(n),n.blockedOn===null&&hi.shift()}var Io=Qr.ReactCurrentBatchConfig,dc=!0;function YC(t,e,n,r){var i=Fe,s=Io.transition;Io.transition=null;try{Fe=1,Vp(t,e,n,r)}finally{Fe=i,Io.transition=s}}function XC(t,e,n,r){var i=Fe,s=Io.transition;Io.transition=null;try{Fe=4,Vp(t,e,n,r)}finally{Fe=i,Io.transition=s}}function Vp(t,e,n,r){if(dc){var i=ff(t,e,n,r);if(i===null)mh(t,e,r,hc,n),fy(t,r);else if(KC(i,t,e,n,r))r.stopPropagation();else if(fy(t,r),e&4&&-1<qC.indexOf(t)){for(;i!==null;){var s=Vl(i);if(s!==null&&Cw(s),s=ff(t,e,n,r),s===null&&mh(t,e,r,hc,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else mh(t,e,r,null,n)}}var hc=null;function ff(t,e,n,r){if(hc=null,t=Dp(r),t=us(t),t!==null)if(e=Ds(t),e===null)t=null;else if(n=e.tag,n===13){if(t=yw(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return hc=t,null}function xw(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(FC()){case Op:return 1;case Ew:return 4;case uc:case UC:return 16;case Tw:return 536870912;default:return 16}default:return 16}}var vi=null,Fp=null,ju=null;function kw(){if(ju)return ju;var t,e=Fp,n=e.length,r,i="value"in vi?vi.value:vi.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return ju=i.slice(t,1<r?1-r:void 0)}function zu(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function _u(){return!0}function my(){return!1}function Cn(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?_u:my,this.isPropagationStopped=my,this}return it(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=_u)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=_u)},persist:function(){},isPersistent:_u}),e}var Qo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Up=Cn(Qo),Ll=it({},Qo,{view:0,detail:0}),JC=Cn(Ll),oh,ah,ya,ld=it({},Ll,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:jp,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ya&&(ya&&t.type==="mousemove"?(oh=t.screenX-ya.screenX,ah=t.screenY-ya.screenY):ah=oh=0,ya=t),oh)},movementY:function(t){return"movementY"in t?t.movementY:ah}}),gy=Cn(ld),ZC=it({},ld,{dataTransfer:0}),eR=Cn(ZC),tR=it({},Ll,{relatedTarget:0}),lh=Cn(tR),nR=it({},Qo,{animationName:0,elapsedTime:0,pseudoElement:0}),rR=Cn(nR),iR=it({},Qo,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),sR=Cn(iR),oR=it({},Qo,{data:0}),yy=Cn(oR),aR={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},lR={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},uR={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function cR(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=uR[t])?!!e[t]:!1}function jp(){return cR}var dR=it({},Ll,{key:function(t){if(t.key){var e=aR[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=zu(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?lR[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:jp,charCode:function(t){return t.type==="keypress"?zu(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?zu(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),hR=Cn(dR),fR=it({},ld,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),vy=Cn(fR),pR=it({},Ll,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:jp}),mR=Cn(pR),gR=it({},Qo,{propertyName:0,elapsedTime:0,pseudoElement:0}),yR=Cn(gR),vR=it({},ld,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),_R=Cn(vR),wR=[9,13,27,32],zp=jr&&"CompositionEvent"in window,Ua=null;jr&&"documentMode"in document&&(Ua=document.documentMode);var ER=jr&&"TextEvent"in window&&!Ua,Nw=jr&&(!zp||Ua&&8<Ua&&11>=Ua),_y=" ",wy=!1;function Dw(t,e){switch(t){case"keyup":return wR.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ow(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var lo=!1;function TR(t,e){switch(t){case"compositionend":return Ow(e);case"keypress":return e.which!==32?null:(wy=!0,_y);case"textInput":return t=e.data,t===_y&&wy?null:t;default:return null}}function IR(t,e){if(lo)return t==="compositionend"||!zp&&Dw(t,e)?(t=kw(),ju=Fp=vi=null,lo=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Nw&&e.locale!=="ko"?null:e.data;default:return null}}var SR={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ey(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!SR[t.type]:e==="textarea"}function Mw(t,e,n,r){hw(r),e=fc(e,"onChange"),0<e.length&&(n=new Up("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var ja=null,ol=null;function CR(t){Ww(t,0)}function ud(t){var e=ho(t);if(sw(e))return t}function RR(t,e){if(t==="change")return e}var Lw=!1;if(jr){var uh;if(jr){var ch="oninput"in document;if(!ch){var Ty=document.createElement("div");Ty.setAttribute("oninput","return;"),ch=typeof Ty.oninput=="function"}uh=ch}else uh=!1;Lw=uh&&(!document.documentMode||9<document.documentMode)}function Iy(){ja&&(ja.detachEvent("onpropertychange",Vw),ol=ja=null)}function Vw(t){if(t.propertyName==="value"&&ud(ol)){var e=[];Mw(e,ol,t,Dp(t)),gw(CR,e)}}function AR(t,e,n){t==="focusin"?(Iy(),ja=e,ol=n,ja.attachEvent("onpropertychange",Vw)):t==="focusout"&&Iy()}function PR(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ud(ol)}function bR(t,e){if(t==="click")return ud(e)}function xR(t,e){if(t==="input"||t==="change")return ud(e)}function kR(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Jn=typeof Object.is=="function"?Object.is:kR;function al(t,e){if(Jn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Kh.call(e,i)||!Jn(t[i],e[i]))return!1}return!0}function Sy(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Cy(t,e){var n=Sy(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Sy(n)}}function Fw(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Fw(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Uw(){for(var t=window,e=oc();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=oc(t.document)}return e}function Bp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function NR(t){var e=Uw(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Fw(n.ownerDocument.documentElement,n)){if(r!==null&&Bp(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Cy(n,s);var o=Cy(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var DR=jr&&"documentMode"in document&&11>=document.documentMode,uo=null,pf=null,za=null,mf=!1;function Ry(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;mf||uo==null||uo!==oc(r)||(r=uo,"selectionStart"in r&&Bp(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),za&&al(za,r)||(za=r,r=fc(pf,"onSelect"),0<r.length&&(e=new Up("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=uo)))}function wu(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var co={animationend:wu("Animation","AnimationEnd"),animationiteration:wu("Animation","AnimationIteration"),animationstart:wu("Animation","AnimationStart"),transitionend:wu("Transition","TransitionEnd")},dh={},jw={};jr&&(jw=document.createElement("div").style,"AnimationEvent"in window||(delete co.animationend.animation,delete co.animationiteration.animation,delete co.animationstart.animation),"TransitionEvent"in window||delete co.transitionend.transition);function cd(t){if(dh[t])return dh[t];if(!co[t])return t;var e=co[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in jw)return dh[t]=e[n];return t}var zw=cd("animationend"),Bw=cd("animationiteration"),$w=cd("animationstart"),Hw=cd("transitionend"),Gw=new Map,Ay="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Bi(t,e){Gw.set(t,e),Ns(e,[t])}for(var hh=0;hh<Ay.length;hh++){var fh=Ay[hh],OR=fh.toLowerCase(),MR=fh[0].toUpperCase()+fh.slice(1);Bi(OR,"on"+MR)}Bi(zw,"onAnimationEnd");Bi(Bw,"onAnimationIteration");Bi($w,"onAnimationStart");Bi("dblclick","onDoubleClick");Bi("focusin","onFocus");Bi("focusout","onBlur");Bi(Hw,"onTransitionEnd");ko("onMouseEnter",["mouseout","mouseover"]);ko("onMouseLeave",["mouseout","mouseover"]);ko("onPointerEnter",["pointerout","pointerover"]);ko("onPointerLeave",["pointerout","pointerover"]);Ns("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ns("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ns("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ns("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ns("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ns("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ba="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),LR=new Set("cancel close invalid load scroll toggle".split(" ").concat(ba));function Py(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,OC(r,e,void 0,t),t.currentTarget=null}function Ww(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],u=a.instance,c=a.currentTarget;if(a=a.listener,u!==s&&i.isPropagationStopped())break e;Py(i,a,c),s=u}else for(o=0;o<r.length;o++){if(a=r[o],u=a.instance,c=a.currentTarget,a=a.listener,u!==s&&i.isPropagationStopped())break e;Py(i,a,c),s=u}}}if(lc)throw t=cf,lc=!1,cf=null,t}function Ke(t,e){var n=e[wf];n===void 0&&(n=e[wf]=new Set);var r=t+"__bubble";n.has(r)||(qw(e,t,2,!1),n.add(r))}function ph(t,e,n){var r=0;e&&(r|=4),qw(n,t,r,e)}var Eu="_reactListening"+Math.random().toString(36).slice(2);function ll(t){if(!t[Eu]){t[Eu]=!0,ew.forEach(function(n){n!=="selectionchange"&&(LR.has(n)||ph(n,!1,t),ph(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Eu]||(e[Eu]=!0,ph("selectionchange",!1,e))}}function qw(t,e,n,r){switch(xw(e)){case 1:var i=YC;break;case 4:i=XC;break;default:i=Vp}n=i.bind(null,e,n,t),i=void 0,!uf||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function mh(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;a!==null;){if(o=us(a),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}a=a.parentNode}}r=r.return}gw(function(){var c=s,h=Dp(n),f=[];e:{var g=Gw.get(t);if(g!==void 0){var m=Up,E=t;switch(t){case"keypress":if(zu(n)===0)break e;case"keydown":case"keyup":m=hR;break;case"focusin":E="focus",m=lh;break;case"focusout":E="blur",m=lh;break;case"beforeblur":case"afterblur":m=lh;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=gy;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=eR;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=mR;break;case zw:case Bw:case $w:m=rR;break;case Hw:m=yR;break;case"scroll":m=JC;break;case"wheel":m=_R;break;case"copy":case"cut":case"paste":m=sR;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=vy}var A=(e&4)!==0,N=!A&&t==="scroll",T=A?g!==null?g+"Capture":null:g;A=[];for(var _=c,S;_!==null;){S=_;var D=S.stateNode;if(S.tag===5&&D!==null&&(S=D,T!==null&&(D=nl(_,T),D!=null&&A.push(ul(_,D,S)))),N)break;_=_.return}0<A.length&&(g=new m(g,E,null,n,h),f.push({event:g,listeners:A}))}}if(!(e&7)){e:{if(g=t==="mouseover"||t==="pointerover",m=t==="mouseout"||t==="pointerout",g&&n!==af&&(E=n.relatedTarget||n.fromElement)&&(us(E)||E[zr]))break e;if((m||g)&&(g=h.window===h?h:(g=h.ownerDocument)?g.defaultView||g.parentWindow:window,m?(E=n.relatedTarget||n.toElement,m=c,E=E?us(E):null,E!==null&&(N=Ds(E),E!==N||E.tag!==5&&E.tag!==6)&&(E=null)):(m=null,E=c),m!==E)){if(A=gy,D="onMouseLeave",T="onMouseEnter",_="mouse",(t==="pointerout"||t==="pointerover")&&(A=vy,D="onPointerLeave",T="onPointerEnter",_="pointer"),N=m==null?g:ho(m),S=E==null?g:ho(E),g=new A(D,_+"leave",m,n,h),g.target=N,g.relatedTarget=S,D=null,us(h)===c&&(A=new A(T,_+"enter",E,n,h),A.target=S,A.relatedTarget=N,D=A),N=D,m&&E)t:{for(A=m,T=E,_=0,S=A;S;S=Js(S))_++;for(S=0,D=T;D;D=Js(D))S++;for(;0<_-S;)A=Js(A),_--;for(;0<S-_;)T=Js(T),S--;for(;_--;){if(A===T||T!==null&&A===T.alternate)break t;A=Js(A),T=Js(T)}A=null}else A=null;m!==null&&by(f,g,m,A,!1),E!==null&&N!==null&&by(f,N,E,A,!0)}}e:{if(g=c?ho(c):window,m=g.nodeName&&g.nodeName.toLowerCase(),m==="select"||m==="input"&&g.type==="file")var j=RR;else if(Ey(g))if(Lw)j=xR;else{j=PR;var b=AR}else(m=g.nodeName)&&m.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(j=bR);if(j&&(j=j(t,c))){Mw(f,j,n,h);break e}b&&b(t,g,c),t==="focusout"&&(b=g._wrapperState)&&b.controlled&&g.type==="number"&&tf(g,"number",g.value)}switch(b=c?ho(c):window,t){case"focusin":(Ey(b)||b.contentEditable==="true")&&(uo=b,pf=c,za=null);break;case"focusout":za=pf=uo=null;break;case"mousedown":mf=!0;break;case"contextmenu":case"mouseup":case"dragend":mf=!1,Ry(f,n,h);break;case"selectionchange":if(DR)break;case"keydown":case"keyup":Ry(f,n,h)}var I;if(zp)e:{switch(t){case"compositionstart":var y="onCompositionStart";break e;case"compositionend":y="onCompositionEnd";break e;case"compositionupdate":y="onCompositionUpdate";break e}y=void 0}else lo?Dw(t,n)&&(y="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(y="onCompositionStart");y&&(Nw&&n.locale!=="ko"&&(lo||y!=="onCompositionStart"?y==="onCompositionEnd"&&lo&&(I=kw()):(vi=h,Fp="value"in vi?vi.value:vi.textContent,lo=!0)),b=fc(c,y),0<b.length&&(y=new yy(y,t,null,n,h),f.push({event:y,listeners:b}),I?y.data=I:(I=Ow(n),I!==null&&(y.data=I)))),(I=ER?TR(t,n):IR(t,n))&&(c=fc(c,"onBeforeInput"),0<c.length&&(h=new yy("onBeforeInput","beforeinput",null,n,h),f.push({event:h,listeners:c}),h.data=I))}Ww(f,e)})}function ul(t,e,n){return{instance:t,listener:e,currentTarget:n}}function fc(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=nl(t,n),s!=null&&r.unshift(ul(t,s,i)),s=nl(t,e),s!=null&&r.push(ul(t,s,i))),t=t.return}return r}function Js(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function by(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,u=a.alternate,c=a.stateNode;if(u!==null&&u===r)break;a.tag===5&&c!==null&&(a=c,i?(u=nl(n,s),u!=null&&o.unshift(ul(n,u,a))):i||(u=nl(n,s),u!=null&&o.push(ul(n,u,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var VR=/\r\n?/g,FR=/\u0000|\uFFFD/g;function xy(t){return(typeof t=="string"?t:""+t).replace(VR,`
`).replace(FR,"")}function Tu(t,e,n){if(e=xy(e),xy(t)!==e&&n)throw Error(H(425))}function pc(){}var gf=null,yf=null;function vf(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var _f=typeof setTimeout=="function"?setTimeout:void 0,UR=typeof clearTimeout=="function"?clearTimeout:void 0,ky=typeof Promise=="function"?Promise:void 0,jR=typeof queueMicrotask=="function"?queueMicrotask:typeof ky<"u"?function(t){return ky.resolve(null).then(t).catch(zR)}:_f;function zR(t){setTimeout(function(){throw t})}function gh(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),sl(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);sl(e)}function Ci(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Ny(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Yo=Math.random().toString(36).slice(2),ar="__reactFiber$"+Yo,cl="__reactProps$"+Yo,zr="__reactContainer$"+Yo,wf="__reactEvents$"+Yo,BR="__reactListeners$"+Yo,$R="__reactHandles$"+Yo;function us(t){var e=t[ar];if(e)return e;for(var n=t.parentNode;n;){if(e=n[zr]||n[ar]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Ny(t);t!==null;){if(n=t[ar])return n;t=Ny(t)}return e}t=n,n=t.parentNode}return null}function Vl(t){return t=t[ar]||t[zr],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ho(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(H(33))}function dd(t){return t[cl]||null}var Ef=[],fo=-1;function $i(t){return{current:t}}function Qe(t){0>fo||(t.current=Ef[fo],Ef[fo]=null,fo--)}function He(t,e){fo++,Ef[fo]=t.current,t.current=e}var Mi={},Gt=$i(Mi),an=$i(!1),vs=Mi;function No(t,e){var n=t.type.contextTypes;if(!n)return Mi;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function ln(t){return t=t.childContextTypes,t!=null}function mc(){Qe(an),Qe(Gt)}function Dy(t,e,n){if(Gt.current!==Mi)throw Error(H(168));He(Gt,e),He(an,n)}function Kw(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(H(108,AC(t)||"Unknown",i));return it({},n,r)}function gc(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Mi,vs=Gt.current,He(Gt,t),He(an,an.current),!0}function Oy(t,e,n){var r=t.stateNode;if(!r)throw Error(H(169));n?(t=Kw(t,e,vs),r.__reactInternalMemoizedMergedChildContext=t,Qe(an),Qe(Gt),He(Gt,t)):Qe(an),He(an,n)}var xr=null,hd=!1,yh=!1;function Qw(t){xr===null?xr=[t]:xr.push(t)}function HR(t){hd=!0,Qw(t)}function Hi(){if(!yh&&xr!==null){yh=!0;var t=0,e=Fe;try{var n=xr;for(Fe=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}xr=null,hd=!1}catch(i){throw xr!==null&&(xr=xr.slice(t+1)),ww(Op,Hi),i}finally{Fe=e,yh=!1}}return null}var po=[],mo=0,yc=null,vc=0,Nn=[],Dn=0,_s=null,kr=1,Nr="";function rs(t,e){po[mo++]=vc,po[mo++]=yc,yc=t,vc=e}function Yw(t,e,n){Nn[Dn++]=kr,Nn[Dn++]=Nr,Nn[Dn++]=_s,_s=t;var r=kr;t=Nr;var i=32-Yn(r)-1;r&=~(1<<i),n+=1;var s=32-Yn(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,kr=1<<32-Yn(e)+i|n<<i|r,Nr=s+t}else kr=1<<s|n<<i|r,Nr=t}function $p(t){t.return!==null&&(rs(t,1),Yw(t,1,0))}function Hp(t){for(;t===yc;)yc=po[--mo],po[mo]=null,vc=po[--mo],po[mo]=null;for(;t===_s;)_s=Nn[--Dn],Nn[Dn]=null,Nr=Nn[--Dn],Nn[Dn]=null,kr=Nn[--Dn],Nn[Dn]=null}var _n=null,yn=null,Ze=!1,qn=null;function Xw(t,e){var n=Mn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function My(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,_n=t,yn=Ci(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,_n=t,yn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=_s!==null?{id:kr,overflow:Nr}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Mn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,_n=t,yn=null,!0):!1;default:return!1}}function Tf(t){return(t.mode&1)!==0&&(t.flags&128)===0}function If(t){if(Ze){var e=yn;if(e){var n=e;if(!My(t,e)){if(Tf(t))throw Error(H(418));e=Ci(n.nextSibling);var r=_n;e&&My(t,e)?Xw(r,n):(t.flags=t.flags&-4097|2,Ze=!1,_n=t)}}else{if(Tf(t))throw Error(H(418));t.flags=t.flags&-4097|2,Ze=!1,_n=t}}}function Ly(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;_n=t}function Iu(t){if(t!==_n)return!1;if(!Ze)return Ly(t),Ze=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!vf(t.type,t.memoizedProps)),e&&(e=yn)){if(Tf(t))throw Jw(),Error(H(418));for(;e;)Xw(t,e),e=Ci(e.nextSibling)}if(Ly(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(H(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){yn=Ci(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}yn=null}}else yn=_n?Ci(t.stateNode.nextSibling):null;return!0}function Jw(){for(var t=yn;t;)t=Ci(t.nextSibling)}function Do(){yn=_n=null,Ze=!1}function Gp(t){qn===null?qn=[t]:qn.push(t)}var GR=Qr.ReactCurrentBatchConfig;function va(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(H(309));var r=n.stateNode}if(!r)throw Error(H(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(H(284));if(!n._owner)throw Error(H(290,t))}return t}function Su(t,e){throw t=Object.prototype.toString.call(e),Error(H(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Vy(t){var e=t._init;return e(t._payload)}function Zw(t){function e(T,_){if(t){var S=T.deletions;S===null?(T.deletions=[_],T.flags|=16):S.push(_)}}function n(T,_){if(!t)return null;for(;_!==null;)e(T,_),_=_.sibling;return null}function r(T,_){for(T=new Map;_!==null;)_.key!==null?T.set(_.key,_):T.set(_.index,_),_=_.sibling;return T}function i(T,_){return T=bi(T,_),T.index=0,T.sibling=null,T}function s(T,_,S){return T.index=S,t?(S=T.alternate,S!==null?(S=S.index,S<_?(T.flags|=2,_):S):(T.flags|=2,_)):(T.flags|=1048576,_)}function o(T){return t&&T.alternate===null&&(T.flags|=2),T}function a(T,_,S,D){return _===null||_.tag!==6?(_=Sh(S,T.mode,D),_.return=T,_):(_=i(_,S),_.return=T,_)}function u(T,_,S,D){var j=S.type;return j===ao?h(T,_,S.props.children,D,S.key):_!==null&&(_.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===ui&&Vy(j)===_.type)?(D=i(_,S.props),D.ref=va(T,_,S),D.return=T,D):(D=Ku(S.type,S.key,S.props,null,T.mode,D),D.ref=va(T,_,S),D.return=T,D)}function c(T,_,S,D){return _===null||_.tag!==4||_.stateNode.containerInfo!==S.containerInfo||_.stateNode.implementation!==S.implementation?(_=Ch(S,T.mode,D),_.return=T,_):(_=i(_,S.children||[]),_.return=T,_)}function h(T,_,S,D,j){return _===null||_.tag!==7?(_=gs(S,T.mode,D,j),_.return=T,_):(_=i(_,S),_.return=T,_)}function f(T,_,S){if(typeof _=="string"&&_!==""||typeof _=="number")return _=Sh(""+_,T.mode,S),_.return=T,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case fu:return S=Ku(_.type,_.key,_.props,null,T.mode,S),S.ref=va(T,null,_),S.return=T,S;case oo:return _=Ch(_,T.mode,S),_.return=T,_;case ui:var D=_._init;return f(T,D(_._payload),S)}if(Aa(_)||fa(_))return _=gs(_,T.mode,S,null),_.return=T,_;Su(T,_)}return null}function g(T,_,S,D){var j=_!==null?_.key:null;if(typeof S=="string"&&S!==""||typeof S=="number")return j!==null?null:a(T,_,""+S,D);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case fu:return S.key===j?u(T,_,S,D):null;case oo:return S.key===j?c(T,_,S,D):null;case ui:return j=S._init,g(T,_,j(S._payload),D)}if(Aa(S)||fa(S))return j!==null?null:h(T,_,S,D,null);Su(T,S)}return null}function m(T,_,S,D,j){if(typeof D=="string"&&D!==""||typeof D=="number")return T=T.get(S)||null,a(_,T,""+D,j);if(typeof D=="object"&&D!==null){switch(D.$$typeof){case fu:return T=T.get(D.key===null?S:D.key)||null,u(_,T,D,j);case oo:return T=T.get(D.key===null?S:D.key)||null,c(_,T,D,j);case ui:var b=D._init;return m(T,_,S,b(D._payload),j)}if(Aa(D)||fa(D))return T=T.get(S)||null,h(_,T,D,j,null);Su(_,D)}return null}function E(T,_,S,D){for(var j=null,b=null,I=_,y=_=0,w=null;I!==null&&y<S.length;y++){I.index>y?(w=I,I=null):w=I.sibling;var C=g(T,I,S[y],D);if(C===null){I===null&&(I=w);break}t&&I&&C.alternate===null&&e(T,I),_=s(C,_,y),b===null?j=C:b.sibling=C,b=C,I=w}if(y===S.length)return n(T,I),Ze&&rs(T,y),j;if(I===null){for(;y<S.length;y++)I=f(T,S[y],D),I!==null&&(_=s(I,_,y),b===null?j=I:b.sibling=I,b=I);return Ze&&rs(T,y),j}for(I=r(T,I);y<S.length;y++)w=m(I,T,y,S[y],D),w!==null&&(t&&w.alternate!==null&&I.delete(w.key===null?y:w.key),_=s(w,_,y),b===null?j=w:b.sibling=w,b=w);return t&&I.forEach(function(k){return e(T,k)}),Ze&&rs(T,y),j}function A(T,_,S,D){var j=fa(S);if(typeof j!="function")throw Error(H(150));if(S=j.call(S),S==null)throw Error(H(151));for(var b=j=null,I=_,y=_=0,w=null,C=S.next();I!==null&&!C.done;y++,C=S.next()){I.index>y?(w=I,I=null):w=I.sibling;var k=g(T,I,C.value,D);if(k===null){I===null&&(I=w);break}t&&I&&k.alternate===null&&e(T,I),_=s(k,_,y),b===null?j=k:b.sibling=k,b=k,I=w}if(C.done)return n(T,I),Ze&&rs(T,y),j;if(I===null){for(;!C.done;y++,C=S.next())C=f(T,C.value,D),C!==null&&(_=s(C,_,y),b===null?j=C:b.sibling=C,b=C);return Ze&&rs(T,y),j}for(I=r(T,I);!C.done;y++,C=S.next())C=m(I,T,y,C.value,D),C!==null&&(t&&C.alternate!==null&&I.delete(C.key===null?y:C.key),_=s(C,_,y),b===null?j=C:b.sibling=C,b=C);return t&&I.forEach(function(x){return e(T,x)}),Ze&&rs(T,y),j}function N(T,_,S,D){if(typeof S=="object"&&S!==null&&S.type===ao&&S.key===null&&(S=S.props.children),typeof S=="object"&&S!==null){switch(S.$$typeof){case fu:e:{for(var j=S.key,b=_;b!==null;){if(b.key===j){if(j=S.type,j===ao){if(b.tag===7){n(T,b.sibling),_=i(b,S.props.children),_.return=T,T=_;break e}}else if(b.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===ui&&Vy(j)===b.type){n(T,b.sibling),_=i(b,S.props),_.ref=va(T,b,S),_.return=T,T=_;break e}n(T,b);break}else e(T,b);b=b.sibling}S.type===ao?(_=gs(S.props.children,T.mode,D,S.key),_.return=T,T=_):(D=Ku(S.type,S.key,S.props,null,T.mode,D),D.ref=va(T,_,S),D.return=T,T=D)}return o(T);case oo:e:{for(b=S.key;_!==null;){if(_.key===b)if(_.tag===4&&_.stateNode.containerInfo===S.containerInfo&&_.stateNode.implementation===S.implementation){n(T,_.sibling),_=i(_,S.children||[]),_.return=T,T=_;break e}else{n(T,_);break}else e(T,_);_=_.sibling}_=Ch(S,T.mode,D),_.return=T,T=_}return o(T);case ui:return b=S._init,N(T,_,b(S._payload),D)}if(Aa(S))return E(T,_,S,D);if(fa(S))return A(T,_,S,D);Su(T,S)}return typeof S=="string"&&S!==""||typeof S=="number"?(S=""+S,_!==null&&_.tag===6?(n(T,_.sibling),_=i(_,S),_.return=T,T=_):(n(T,_),_=Sh(S,T.mode,D),_.return=T,T=_),o(T)):n(T,_)}return N}var Oo=Zw(!0),eE=Zw(!1),_c=$i(null),wc=null,go=null,Wp=null;function qp(){Wp=go=wc=null}function Kp(t){var e=_c.current;Qe(_c),t._currentValue=e}function Sf(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function So(t,e){wc=t,Wp=go=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(on=!0),t.firstContext=null)}function Un(t){var e=t._currentValue;if(Wp!==t)if(t={context:t,memoizedValue:e,next:null},go===null){if(wc===null)throw Error(H(308));go=t,wc.dependencies={lanes:0,firstContext:t}}else go=go.next=t;return e}var cs=null;function Qp(t){cs===null?cs=[t]:cs.push(t)}function tE(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Qp(e)):(n.next=i.next,i.next=n),e.interleaved=n,Br(t,r)}function Br(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var ci=!1;function Yp(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function nE(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Lr(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Ri(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,ke&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Br(t,n)}return i=r.interleaved,i===null?(e.next=e,Qp(r)):(e.next=i.next,i.next=e),r.interleaved=e,Br(t,n)}function Bu(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Mp(t,n)}}function Fy(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Ec(t,e,n,r){var i=t.updateQueue;ci=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var u=a,c=u.next;u.next=null,o===null?s=c:o.next=c,o=u;var h=t.alternate;h!==null&&(h=h.updateQueue,a=h.lastBaseUpdate,a!==o&&(a===null?h.firstBaseUpdate=c:a.next=c,h.lastBaseUpdate=u))}if(s!==null){var f=i.baseState;o=0,h=c=u=null,a=s;do{var g=a.lane,m=a.eventTime;if((r&g)===g){h!==null&&(h=h.next={eventTime:m,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var E=t,A=a;switch(g=e,m=n,A.tag){case 1:if(E=A.payload,typeof E=="function"){f=E.call(m,f,g);break e}f=E;break e;case 3:E.flags=E.flags&-65537|128;case 0:if(E=A.payload,g=typeof E=="function"?E.call(m,f,g):E,g==null)break e;f=it({},f,g);break e;case 2:ci=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,g=i.effects,g===null?i.effects=[a]:g.push(a))}else m={eventTime:m,lane:g,tag:a.tag,payload:a.payload,callback:a.callback,next:null},h===null?(c=h=m,u=f):h=h.next=m,o|=g;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;g=a,a=g.next,g.next=null,i.lastBaseUpdate=g,i.shared.pending=null}}while(!0);if(h===null&&(u=f),i.baseState=u,i.firstBaseUpdate=c,i.lastBaseUpdate=h,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Es|=o,t.lanes=o,t.memoizedState=f}}function Uy(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(H(191,i));i.call(r)}}}var Fl={},cr=$i(Fl),dl=$i(Fl),hl=$i(Fl);function ds(t){if(t===Fl)throw Error(H(174));return t}function Xp(t,e){switch(He(hl,e),He(dl,t),He(cr,Fl),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:rf(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=rf(e,t)}Qe(cr),He(cr,e)}function Mo(){Qe(cr),Qe(dl),Qe(hl)}function rE(t){ds(hl.current);var e=ds(cr.current),n=rf(e,t.type);e!==n&&(He(dl,t),He(cr,n))}function Jp(t){dl.current===t&&(Qe(cr),Qe(dl))}var nt=$i(0);function Tc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var vh=[];function Zp(){for(var t=0;t<vh.length;t++)vh[t]._workInProgressVersionPrimary=null;vh.length=0}var $u=Qr.ReactCurrentDispatcher,_h=Qr.ReactCurrentBatchConfig,ws=0,rt=null,vt=null,It=null,Ic=!1,Ba=!1,fl=0,WR=0;function Ut(){throw Error(H(321))}function em(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Jn(t[n],e[n]))return!1;return!0}function tm(t,e,n,r,i,s){if(ws=s,rt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,$u.current=t===null||t.memoizedState===null?YR:XR,t=n(r,i),Ba){s=0;do{if(Ba=!1,fl=0,25<=s)throw Error(H(301));s+=1,It=vt=null,e.updateQueue=null,$u.current=JR,t=n(r,i)}while(Ba)}if($u.current=Sc,e=vt!==null&&vt.next!==null,ws=0,It=vt=rt=null,Ic=!1,e)throw Error(H(300));return t}function nm(){var t=fl!==0;return fl=0,t}function or(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return It===null?rt.memoizedState=It=t:It=It.next=t,It}function jn(){if(vt===null){var t=rt.alternate;t=t!==null?t.memoizedState:null}else t=vt.next;var e=It===null?rt.memoizedState:It.next;if(e!==null)It=e,vt=t;else{if(t===null)throw Error(H(310));vt=t,t={memoizedState:vt.memoizedState,baseState:vt.baseState,baseQueue:vt.baseQueue,queue:vt.queue,next:null},It===null?rt.memoizedState=It=t:It=It.next=t}return It}function pl(t,e){return typeof e=="function"?e(t):e}function wh(t){var e=jn(),n=e.queue;if(n===null)throw Error(H(311));n.lastRenderedReducer=t;var r=vt,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,u=null,c=s;do{var h=c.lane;if((ws&h)===h)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var f={lane:h,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(a=u=f,o=r):u=u.next=f,rt.lanes|=h,Es|=h}c=c.next}while(c!==null&&c!==s);u===null?o=r:u.next=a,Jn(r,e.memoizedState)||(on=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,rt.lanes|=s,Es|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Eh(t){var e=jn(),n=e.queue;if(n===null)throw Error(H(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);Jn(s,e.memoizedState)||(on=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function iE(){}function sE(t,e){var n=rt,r=jn(),i=e(),s=!Jn(r.memoizedState,i);if(s&&(r.memoizedState=i,on=!0),r=r.queue,rm(lE.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||It!==null&&It.memoizedState.tag&1){if(n.flags|=2048,ml(9,aE.bind(null,n,r,i,e),void 0,null),St===null)throw Error(H(349));ws&30||oE(n,e,i)}return i}function oE(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=rt.updateQueue,e===null?(e={lastEffect:null,stores:null},rt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function aE(t,e,n,r){e.value=n,e.getSnapshot=r,uE(e)&&cE(t)}function lE(t,e,n){return n(function(){uE(e)&&cE(t)})}function uE(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Jn(t,n)}catch{return!0}}function cE(t){var e=Br(t,1);e!==null&&Xn(e,t,1,-1)}function jy(t){var e=or();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:pl,lastRenderedState:t},e.queue=t,t=t.dispatch=QR.bind(null,rt,t),[e.memoizedState,t]}function ml(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=rt.updateQueue,e===null?(e={lastEffect:null,stores:null},rt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function dE(){return jn().memoizedState}function Hu(t,e,n,r){var i=or();rt.flags|=t,i.memoizedState=ml(1|e,n,void 0,r===void 0?null:r)}function fd(t,e,n,r){var i=jn();r=r===void 0?null:r;var s=void 0;if(vt!==null){var o=vt.memoizedState;if(s=o.destroy,r!==null&&em(r,o.deps)){i.memoizedState=ml(e,n,s,r);return}}rt.flags|=t,i.memoizedState=ml(1|e,n,s,r)}function zy(t,e){return Hu(8390656,8,t,e)}function rm(t,e){return fd(2048,8,t,e)}function hE(t,e){return fd(4,2,t,e)}function fE(t,e){return fd(4,4,t,e)}function pE(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function mE(t,e,n){return n=n!=null?n.concat([t]):null,fd(4,4,pE.bind(null,e,t),n)}function im(){}function gE(t,e){var n=jn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&em(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function yE(t,e){var n=jn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&em(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function vE(t,e,n){return ws&21?(Jn(n,e)||(n=Iw(),rt.lanes|=n,Es|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,on=!0),t.memoizedState=n)}function qR(t,e){var n=Fe;Fe=n!==0&&4>n?n:4,t(!0);var r=_h.transition;_h.transition={};try{t(!1),e()}finally{Fe=n,_h.transition=r}}function _E(){return jn().memoizedState}function KR(t,e,n){var r=Pi(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},wE(t))EE(e,n);else if(n=tE(t,e,n,r),n!==null){var i=Yt();Xn(n,t,r,i),TE(n,e,r)}}function QR(t,e,n){var r=Pi(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(wE(t))EE(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,Jn(a,o)){var u=e.interleaved;u===null?(i.next=i,Qp(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=tE(t,e,i,r),n!==null&&(i=Yt(),Xn(n,t,r,i),TE(n,e,r))}}function wE(t){var e=t.alternate;return t===rt||e!==null&&e===rt}function EE(t,e){Ba=Ic=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function TE(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Mp(t,n)}}var Sc={readContext:Un,useCallback:Ut,useContext:Ut,useEffect:Ut,useImperativeHandle:Ut,useInsertionEffect:Ut,useLayoutEffect:Ut,useMemo:Ut,useReducer:Ut,useRef:Ut,useState:Ut,useDebugValue:Ut,useDeferredValue:Ut,useTransition:Ut,useMutableSource:Ut,useSyncExternalStore:Ut,useId:Ut,unstable_isNewReconciler:!1},YR={readContext:Un,useCallback:function(t,e){return or().memoizedState=[t,e===void 0?null:e],t},useContext:Un,useEffect:zy,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Hu(4194308,4,pE.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Hu(4194308,4,t,e)},useInsertionEffect:function(t,e){return Hu(4,2,t,e)},useMemo:function(t,e){var n=or();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=or();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=KR.bind(null,rt,t),[r.memoizedState,t]},useRef:function(t){var e=or();return t={current:t},e.memoizedState=t},useState:jy,useDebugValue:im,useDeferredValue:function(t){return or().memoizedState=t},useTransition:function(){var t=jy(!1),e=t[0];return t=qR.bind(null,t[1]),or().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=rt,i=or();if(Ze){if(n===void 0)throw Error(H(407));n=n()}else{if(n=e(),St===null)throw Error(H(349));ws&30||oE(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,zy(lE.bind(null,r,s,t),[t]),r.flags|=2048,ml(9,aE.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=or(),e=St.identifierPrefix;if(Ze){var n=Nr,r=kr;n=(r&~(1<<32-Yn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=fl++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=WR++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},XR={readContext:Un,useCallback:gE,useContext:Un,useEffect:rm,useImperativeHandle:mE,useInsertionEffect:hE,useLayoutEffect:fE,useMemo:yE,useReducer:wh,useRef:dE,useState:function(){return wh(pl)},useDebugValue:im,useDeferredValue:function(t){var e=jn();return vE(e,vt.memoizedState,t)},useTransition:function(){var t=wh(pl)[0],e=jn().memoizedState;return[t,e]},useMutableSource:iE,useSyncExternalStore:sE,useId:_E,unstable_isNewReconciler:!1},JR={readContext:Un,useCallback:gE,useContext:Un,useEffect:rm,useImperativeHandle:mE,useInsertionEffect:hE,useLayoutEffect:fE,useMemo:yE,useReducer:Eh,useRef:dE,useState:function(){return Eh(pl)},useDebugValue:im,useDeferredValue:function(t){var e=jn();return vt===null?e.memoizedState=t:vE(e,vt.memoizedState,t)},useTransition:function(){var t=Eh(pl)[0],e=jn().memoizedState;return[t,e]},useMutableSource:iE,useSyncExternalStore:sE,useId:_E,unstable_isNewReconciler:!1};function Hn(t,e){if(t&&t.defaultProps){e=it({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Cf(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:it({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var pd={isMounted:function(t){return(t=t._reactInternals)?Ds(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Yt(),i=Pi(t),s=Lr(r,i);s.payload=e,n!=null&&(s.callback=n),e=Ri(t,s,i),e!==null&&(Xn(e,t,i,r),Bu(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Yt(),i=Pi(t),s=Lr(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Ri(t,s,i),e!==null&&(Xn(e,t,i,r),Bu(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Yt(),r=Pi(t),i=Lr(n,r);i.tag=2,e!=null&&(i.callback=e),e=Ri(t,i,r),e!==null&&(Xn(e,t,r,n),Bu(e,t,r))}};function By(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!al(n,r)||!al(i,s):!0}function IE(t,e,n){var r=!1,i=Mi,s=e.contextType;return typeof s=="object"&&s!==null?s=Un(s):(i=ln(e)?vs:Gt.current,r=e.contextTypes,s=(r=r!=null)?No(t,i):Mi),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=pd,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function $y(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&pd.enqueueReplaceState(e,e.state,null)}function Rf(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},Yp(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Un(s):(s=ln(e)?vs:Gt.current,i.context=No(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Cf(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&pd.enqueueReplaceState(i,i.state,null),Ec(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Lo(t,e){try{var n="",r=e;do n+=RC(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Th(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Af(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var ZR=typeof WeakMap=="function"?WeakMap:Map;function SE(t,e,n){n=Lr(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Rc||(Rc=!0,Vf=r),Af(t,e)},n}function CE(t,e,n){n=Lr(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Af(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Af(t,e),typeof r!="function"&&(Ai===null?Ai=new Set([this]):Ai.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Hy(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new ZR;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=fA.bind(null,t,e,n),e.then(t,t))}function Gy(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Wy(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Lr(-1,1),e.tag=2,Ri(n,e,1))),n.lanes|=1),t)}var eA=Qr.ReactCurrentOwner,on=!1;function Qt(t,e,n,r){e.child=t===null?eE(e,null,n,r):Oo(e,t.child,n,r)}function qy(t,e,n,r,i){n=n.render;var s=e.ref;return So(e,i),r=tm(t,e,n,r,s,i),n=nm(),t!==null&&!on?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,$r(t,e,i)):(Ze&&n&&$p(e),e.flags|=1,Qt(t,e,r,i),e.child)}function Ky(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!hm(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,RE(t,e,s,r,i)):(t=Ku(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:al,n(o,r)&&t.ref===e.ref)return $r(t,e,i)}return e.flags|=1,t=bi(s,r),t.ref=e.ref,t.return=e,e.child=t}function RE(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(al(s,r)&&t.ref===e.ref)if(on=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(on=!0);else return e.lanes=t.lanes,$r(t,e,i)}return Pf(t,e,n,r,i)}function AE(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},He(vo,mn),mn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,He(vo,mn),mn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,He(vo,mn),mn|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,He(vo,mn),mn|=r;return Qt(t,e,i,n),e.child}function PE(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Pf(t,e,n,r,i){var s=ln(n)?vs:Gt.current;return s=No(e,s),So(e,i),n=tm(t,e,n,r,s,i),r=nm(),t!==null&&!on?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,$r(t,e,i)):(Ze&&r&&$p(e),e.flags|=1,Qt(t,e,n,i),e.child)}function Qy(t,e,n,r,i){if(ln(n)){var s=!0;gc(e)}else s=!1;if(So(e,i),e.stateNode===null)Gu(t,e),IE(e,n,r),Rf(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var u=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Un(c):(c=ln(n)?vs:Gt.current,c=No(e,c));var h=n.getDerivedStateFromProps,f=typeof h=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||u!==c)&&$y(e,o,r,c),ci=!1;var g=e.memoizedState;o.state=g,Ec(e,r,o,i),u=e.memoizedState,a!==r||g!==u||an.current||ci?(typeof h=="function"&&(Cf(e,n,h,r),u=e.memoizedState),(a=ci||By(e,n,a,r,g,u,c))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=c,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,nE(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:Hn(e.type,a),o.props=c,f=e.pendingProps,g=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=Un(u):(u=ln(n)?vs:Gt.current,u=No(e,u));var m=n.getDerivedStateFromProps;(h=typeof m=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||g!==u)&&$y(e,o,r,u),ci=!1,g=e.memoizedState,o.state=g,Ec(e,r,o,i);var E=e.memoizedState;a!==f||g!==E||an.current||ci?(typeof m=="function"&&(Cf(e,n,m,r),E=e.memoizedState),(c=ci||By(e,n,c,r,g,E,u)||!1)?(h||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,E,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,E,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=E),o.props=r,o.state=E,o.context=u,r=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),r=!1)}return bf(t,e,n,r,s,i)}function bf(t,e,n,r,i,s){PE(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Oy(e,n,!1),$r(t,e,s);r=e.stateNode,eA.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Oo(e,t.child,null,s),e.child=Oo(e,null,a,s)):Qt(t,e,a,s),e.memoizedState=r.state,i&&Oy(e,n,!0),e.child}function bE(t){var e=t.stateNode;e.pendingContext?Dy(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Dy(t,e.context,!1),Xp(t,e.containerInfo)}function Yy(t,e,n,r,i){return Do(),Gp(i),e.flags|=256,Qt(t,e,n,r),e.child}var xf={dehydrated:null,treeContext:null,retryLane:0};function kf(t){return{baseLanes:t,cachePool:null,transitions:null}}function xE(t,e,n){var r=e.pendingProps,i=nt.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),He(nt,i&1),t===null)return If(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=yd(o,r,0,null),t=gs(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=kf(n),e.memoizedState=xf,t):sm(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return tA(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=bi(i,u),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=bi(a,s):(s=gs(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?kf(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=xf,r}return s=t.child,t=s.sibling,r=bi(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function sm(t,e){return e=yd({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Cu(t,e,n,r){return r!==null&&Gp(r),Oo(e,t.child,null,n),t=sm(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function tA(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Th(Error(H(422))),Cu(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=yd({mode:"visible",children:r.children},i,0,null),s=gs(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Oo(e,t.child,null,o),e.child.memoizedState=kf(o),e.memoizedState=xf,s);if(!(e.mode&1))return Cu(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(H(419)),r=Th(s,r,void 0),Cu(t,e,o,r)}if(a=(o&t.childLanes)!==0,on||a){if(r=St,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Br(t,i),Xn(r,t,i,-1))}return dm(),r=Th(Error(H(421))),Cu(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=pA.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,yn=Ci(i.nextSibling),_n=e,Ze=!0,qn=null,t!==null&&(Nn[Dn++]=kr,Nn[Dn++]=Nr,Nn[Dn++]=_s,kr=t.id,Nr=t.overflow,_s=e),e=sm(e,r.children),e.flags|=4096,e)}function Xy(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Sf(t.return,e,n)}function Ih(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function kE(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(Qt(t,e,r.children,n),r=nt.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Xy(t,n,e);else if(t.tag===19)Xy(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(He(nt,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Tc(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Ih(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Tc(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Ih(e,!0,n,null,s);break;case"together":Ih(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Gu(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function $r(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Es|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(H(153));if(e.child!==null){for(t=e.child,n=bi(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=bi(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function nA(t,e,n){switch(e.tag){case 3:bE(e),Do();break;case 5:rE(e);break;case 1:ln(e.type)&&gc(e);break;case 4:Xp(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;He(_c,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(He(nt,nt.current&1),e.flags|=128,null):n&e.child.childLanes?xE(t,e,n):(He(nt,nt.current&1),t=$r(t,e,n),t!==null?t.sibling:null);He(nt,nt.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return kE(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),He(nt,nt.current),r)break;return null;case 22:case 23:return e.lanes=0,AE(t,e,n)}return $r(t,e,n)}var NE,Nf,DE,OE;NE=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Nf=function(){};DE=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,ds(cr.current);var s=null;switch(n){case"input":i=Zh(t,i),r=Zh(t,r),s=[];break;case"select":i=it({},i,{value:void 0}),r=it({},r,{value:void 0}),s=[];break;case"textarea":i=nf(t,i),r=nf(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=pc)}sf(n,r);var o;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var a=i[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(el.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var u=r[c];if(a=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&u!==a&&(u!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&a[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,a=a?a.__html:void 0,u!=null&&a!==u&&(s=s||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(el.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&Ke("scroll",t),s||a===u||(s=[])):(s=s||[]).push(c,u))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};OE=function(t,e,n,r){n!==r&&(e.flags|=4)};function _a(t,e){if(!Ze)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function jt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function rA(t,e,n){var r=e.pendingProps;switch(Hp(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return jt(e),null;case 1:return ln(e.type)&&mc(),jt(e),null;case 3:return r=e.stateNode,Mo(),Qe(an),Qe(Gt),Zp(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Iu(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,qn!==null&&(jf(qn),qn=null))),Nf(t,e),jt(e),null;case 5:Jp(e);var i=ds(hl.current);if(n=e.type,t!==null&&e.stateNode!=null)DE(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(H(166));return jt(e),null}if(t=ds(cr.current),Iu(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[ar]=e,r[cl]=s,t=(e.mode&1)!==0,n){case"dialog":Ke("cancel",r),Ke("close",r);break;case"iframe":case"object":case"embed":Ke("load",r);break;case"video":case"audio":for(i=0;i<ba.length;i++)Ke(ba[i],r);break;case"source":Ke("error",r);break;case"img":case"image":case"link":Ke("error",r),Ke("load",r);break;case"details":Ke("toggle",r);break;case"input":oy(r,s),Ke("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},Ke("invalid",r);break;case"textarea":ly(r,s),Ke("invalid",r)}sf(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&Tu(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Tu(r.textContent,a,t),i=["children",""+a]):el.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&Ke("scroll",r)}switch(n){case"input":pu(r),ay(r,s,!0);break;case"textarea":pu(r),uy(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=pc)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=lw(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[ar]=e,t[cl]=r,NE(t,e,!1,!1),e.stateNode=t;e:{switch(o=of(n,r),n){case"dialog":Ke("cancel",t),Ke("close",t),i=r;break;case"iframe":case"object":case"embed":Ke("load",t),i=r;break;case"video":case"audio":for(i=0;i<ba.length;i++)Ke(ba[i],t);i=r;break;case"source":Ke("error",t),i=r;break;case"img":case"image":case"link":Ke("error",t),Ke("load",t),i=r;break;case"details":Ke("toggle",t),i=r;break;case"input":oy(t,r),i=Zh(t,r),Ke("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=it({},r,{value:void 0}),Ke("invalid",t);break;case"textarea":ly(t,r),i=nf(t,r),Ke("invalid",t);break;default:i=r}sf(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var u=a[s];s==="style"?dw(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&uw(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&tl(t,u):typeof u=="number"&&tl(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(el.hasOwnProperty(s)?u!=null&&s==="onScroll"&&Ke("scroll",t):u!=null&&bp(t,s,u,o))}switch(n){case"input":pu(t),ay(t,r,!1);break;case"textarea":pu(t),uy(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Oi(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?wo(t,!!r.multiple,s,!1):r.defaultValue!=null&&wo(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=pc)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return jt(e),null;case 6:if(t&&e.stateNode!=null)OE(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(H(166));if(n=ds(hl.current),ds(cr.current),Iu(e)){if(r=e.stateNode,n=e.memoizedProps,r[ar]=e,(s=r.nodeValue!==n)&&(t=_n,t!==null))switch(t.tag){case 3:Tu(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Tu(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[ar]=e,e.stateNode=r}return jt(e),null;case 13:if(Qe(nt),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Ze&&yn!==null&&e.mode&1&&!(e.flags&128))Jw(),Do(),e.flags|=98560,s=!1;else if(s=Iu(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(H(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(H(317));s[ar]=e}else Do(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;jt(e),s=!1}else qn!==null&&(jf(qn),qn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||nt.current&1?wt===0&&(wt=3):dm())),e.updateQueue!==null&&(e.flags|=4),jt(e),null);case 4:return Mo(),Nf(t,e),t===null&&ll(e.stateNode.containerInfo),jt(e),null;case 10:return Kp(e.type._context),jt(e),null;case 17:return ln(e.type)&&mc(),jt(e),null;case 19:if(Qe(nt),s=e.memoizedState,s===null)return jt(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)_a(s,!1);else{if(wt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Tc(t),o!==null){for(e.flags|=128,_a(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return He(nt,nt.current&1|2),e.child}t=t.sibling}s.tail!==null&&ft()>Vo&&(e.flags|=128,r=!0,_a(s,!1),e.lanes=4194304)}else{if(!r)if(t=Tc(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),_a(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Ze)return jt(e),null}else 2*ft()-s.renderingStartTime>Vo&&n!==1073741824&&(e.flags|=128,r=!0,_a(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=ft(),e.sibling=null,n=nt.current,He(nt,r?n&1|2:n&1),e):(jt(e),null);case 22:case 23:return cm(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?mn&1073741824&&(jt(e),e.subtreeFlags&6&&(e.flags|=8192)):jt(e),null;case 24:return null;case 25:return null}throw Error(H(156,e.tag))}function iA(t,e){switch(Hp(e),e.tag){case 1:return ln(e.type)&&mc(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Mo(),Qe(an),Qe(Gt),Zp(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Jp(e),null;case 13:if(Qe(nt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(H(340));Do()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Qe(nt),null;case 4:return Mo(),null;case 10:return Kp(e.type._context),null;case 22:case 23:return cm(),null;case 24:return null;default:return null}}var Ru=!1,$t=!1,sA=typeof WeakSet=="function"?WeakSet:Set,J=null;function yo(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){lt(t,e,r)}else n.current=null}function Df(t,e,n){try{n()}catch(r){lt(t,e,r)}}var Jy=!1;function oA(t,e){if(gf=dc,t=Uw(),Bp(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,u=-1,c=0,h=0,f=t,g=null;t:for(;;){for(var m;f!==n||i!==0&&f.nodeType!==3||(a=o+i),f!==s||r!==0&&f.nodeType!==3||(u=o+r),f.nodeType===3&&(o+=f.nodeValue.length),(m=f.firstChild)!==null;)g=f,f=m;for(;;){if(f===t)break t;if(g===n&&++c===i&&(a=o),g===s&&++h===r&&(u=o),(m=f.nextSibling)!==null)break;f=g,g=f.parentNode}f=m}n=a===-1||u===-1?null:{start:a,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(yf={focusedElem:t,selectionRange:n},dc=!1,J=e;J!==null;)if(e=J,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,J=t;else for(;J!==null;){e=J;try{var E=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(E!==null){var A=E.memoizedProps,N=E.memoizedState,T=e.stateNode,_=T.getSnapshotBeforeUpdate(e.elementType===e.type?A:Hn(e.type,A),N);T.__reactInternalSnapshotBeforeUpdate=_}break;case 3:var S=e.stateNode.containerInfo;S.nodeType===1?S.textContent="":S.nodeType===9&&S.documentElement&&S.removeChild(S.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(H(163))}}catch(D){lt(e,e.return,D)}if(t=e.sibling,t!==null){t.return=e.return,J=t;break}J=e.return}return E=Jy,Jy=!1,E}function $a(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Df(e,n,s)}i=i.next}while(i!==r)}}function md(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Of(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function ME(t){var e=t.alternate;e!==null&&(t.alternate=null,ME(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[ar],delete e[cl],delete e[wf],delete e[BR],delete e[$R])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function LE(t){return t.tag===5||t.tag===3||t.tag===4}function Zy(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||LE(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Mf(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=pc));else if(r!==4&&(t=t.child,t!==null))for(Mf(t,e,n),t=t.sibling;t!==null;)Mf(t,e,n),t=t.sibling}function Lf(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Lf(t,e,n),t=t.sibling;t!==null;)Lf(t,e,n),t=t.sibling}var Pt=null,Gn=!1;function ii(t,e,n){for(n=n.child;n!==null;)VE(t,e,n),n=n.sibling}function VE(t,e,n){if(ur&&typeof ur.onCommitFiberUnmount=="function")try{ur.onCommitFiberUnmount(ad,n)}catch{}switch(n.tag){case 5:$t||yo(n,e);case 6:var r=Pt,i=Gn;Pt=null,ii(t,e,n),Pt=r,Gn=i,Pt!==null&&(Gn?(t=Pt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Pt.removeChild(n.stateNode));break;case 18:Pt!==null&&(Gn?(t=Pt,n=n.stateNode,t.nodeType===8?gh(t.parentNode,n):t.nodeType===1&&gh(t,n),sl(t)):gh(Pt,n.stateNode));break;case 4:r=Pt,i=Gn,Pt=n.stateNode.containerInfo,Gn=!0,ii(t,e,n),Pt=r,Gn=i;break;case 0:case 11:case 14:case 15:if(!$t&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Df(n,e,o),i=i.next}while(i!==r)}ii(t,e,n);break;case 1:if(!$t&&(yo(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){lt(n,e,a)}ii(t,e,n);break;case 21:ii(t,e,n);break;case 22:n.mode&1?($t=(r=$t)||n.memoizedState!==null,ii(t,e,n),$t=r):ii(t,e,n);break;default:ii(t,e,n)}}function ev(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new sA),e.forEach(function(r){var i=mA.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function $n(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Pt=a.stateNode,Gn=!1;break e;case 3:Pt=a.stateNode.containerInfo,Gn=!0;break e;case 4:Pt=a.stateNode.containerInfo,Gn=!0;break e}a=a.return}if(Pt===null)throw Error(H(160));VE(s,o,i),Pt=null,Gn=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(c){lt(i,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)FE(e,t),e=e.sibling}function FE(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if($n(e,t),sr(t),r&4){try{$a(3,t,t.return),md(3,t)}catch(A){lt(t,t.return,A)}try{$a(5,t,t.return)}catch(A){lt(t,t.return,A)}}break;case 1:$n(e,t),sr(t),r&512&&n!==null&&yo(n,n.return);break;case 5:if($n(e,t),sr(t),r&512&&n!==null&&yo(n,n.return),t.flags&32){var i=t.stateNode;try{tl(i,"")}catch(A){lt(t,t.return,A)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&ow(i,s),of(a,o);var c=of(a,s);for(o=0;o<u.length;o+=2){var h=u[o],f=u[o+1];h==="style"?dw(i,f):h==="dangerouslySetInnerHTML"?uw(i,f):h==="children"?tl(i,f):bp(i,h,f,c)}switch(a){case"input":ef(i,s);break;case"textarea":aw(i,s);break;case"select":var g=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var m=s.value;m!=null?wo(i,!!s.multiple,m,!1):g!==!!s.multiple&&(s.defaultValue!=null?wo(i,!!s.multiple,s.defaultValue,!0):wo(i,!!s.multiple,s.multiple?[]:"",!1))}i[cl]=s}catch(A){lt(t,t.return,A)}}break;case 6:if($n(e,t),sr(t),r&4){if(t.stateNode===null)throw Error(H(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(A){lt(t,t.return,A)}}break;case 3:if($n(e,t),sr(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{sl(e.containerInfo)}catch(A){lt(t,t.return,A)}break;case 4:$n(e,t),sr(t);break;case 13:$n(e,t),sr(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(lm=ft())),r&4&&ev(t);break;case 22:if(h=n!==null&&n.memoizedState!==null,t.mode&1?($t=(c=$t)||h,$n(e,t),$t=c):$n(e,t),sr(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!h&&t.mode&1)for(J=t,h=t.child;h!==null;){for(f=J=h;J!==null;){switch(g=J,m=g.child,g.tag){case 0:case 11:case 14:case 15:$a(4,g,g.return);break;case 1:yo(g,g.return);var E=g.stateNode;if(typeof E.componentWillUnmount=="function"){r=g,n=g.return;try{e=r,E.props=e.memoizedProps,E.state=e.memoizedState,E.componentWillUnmount()}catch(A){lt(r,n,A)}}break;case 5:yo(g,g.return);break;case 22:if(g.memoizedState!==null){nv(f);continue}}m!==null?(m.return=g,J=m):nv(f)}h=h.sibling}e:for(h=null,f=t;;){if(f.tag===5){if(h===null){h=f;try{i=f.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=f.stateNode,u=f.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,a.style.display=cw("display",o))}catch(A){lt(t,t.return,A)}}}else if(f.tag===6){if(h===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(A){lt(t,t.return,A)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;h===f&&(h=null),f=f.return}h===f&&(h=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:$n(e,t),sr(t),r&4&&ev(t);break;case 21:break;default:$n(e,t),sr(t)}}function sr(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(LE(n)){var r=n;break e}n=n.return}throw Error(H(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(tl(i,""),r.flags&=-33);var s=Zy(t);Lf(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=Zy(t);Mf(t,a,o);break;default:throw Error(H(161))}}catch(u){lt(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function aA(t,e,n){J=t,UE(t)}function UE(t,e,n){for(var r=(t.mode&1)!==0;J!==null;){var i=J,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Ru;if(!o){var a=i.alternate,u=a!==null&&a.memoizedState!==null||$t;a=Ru;var c=$t;if(Ru=o,($t=u)&&!c)for(J=i;J!==null;)o=J,u=o.child,o.tag===22&&o.memoizedState!==null?rv(i):u!==null?(u.return=o,J=u):rv(i);for(;s!==null;)J=s,UE(s),s=s.sibling;J=i,Ru=a,$t=c}tv(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,J=s):tv(t)}}function tv(t){for(;J!==null;){var e=J;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:$t||md(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!$t)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Hn(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Uy(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Uy(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var h=c.memoizedState;if(h!==null){var f=h.dehydrated;f!==null&&sl(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(H(163))}$t||e.flags&512&&Of(e)}catch(g){lt(e,e.return,g)}}if(e===t){J=null;break}if(n=e.sibling,n!==null){n.return=e.return,J=n;break}J=e.return}}function nv(t){for(;J!==null;){var e=J;if(e===t){J=null;break}var n=e.sibling;if(n!==null){n.return=e.return,J=n;break}J=e.return}}function rv(t){for(;J!==null;){var e=J;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{md(4,e)}catch(u){lt(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){lt(e,i,u)}}var s=e.return;try{Of(e)}catch(u){lt(e,s,u)}break;case 5:var o=e.return;try{Of(e)}catch(u){lt(e,o,u)}}}catch(u){lt(e,e.return,u)}if(e===t){J=null;break}var a=e.sibling;if(a!==null){a.return=e.return,J=a;break}J=e.return}}var lA=Math.ceil,Cc=Qr.ReactCurrentDispatcher,om=Qr.ReactCurrentOwner,Ln=Qr.ReactCurrentBatchConfig,ke=0,St=null,gt=null,kt=0,mn=0,vo=$i(0),wt=0,gl=null,Es=0,gd=0,am=0,Ha=null,rn=null,lm=0,Vo=1/0,br=null,Rc=!1,Vf=null,Ai=null,Au=!1,_i=null,Ac=0,Ga=0,Ff=null,Wu=-1,qu=0;function Yt(){return ke&6?ft():Wu!==-1?Wu:Wu=ft()}function Pi(t){return t.mode&1?ke&2&&kt!==0?kt&-kt:GR.transition!==null?(qu===0&&(qu=Iw()),qu):(t=Fe,t!==0||(t=window.event,t=t===void 0?16:xw(t.type)),t):1}function Xn(t,e,n,r){if(50<Ga)throw Ga=0,Ff=null,Error(H(185));Ml(t,n,r),(!(ke&2)||t!==St)&&(t===St&&(!(ke&2)&&(gd|=n),wt===4&&fi(t,kt)),un(t,r),n===1&&ke===0&&!(e.mode&1)&&(Vo=ft()+500,hd&&Hi()))}function un(t,e){var n=t.callbackNode;GC(t,e);var r=cc(t,t===St?kt:0);if(r===0)n!==null&&hy(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&hy(n),e===1)t.tag===0?HR(iv.bind(null,t)):Qw(iv.bind(null,t)),jR(function(){!(ke&6)&&Hi()}),n=null;else{switch(Sw(r)){case 1:n=Op;break;case 4:n=Ew;break;case 16:n=uc;break;case 536870912:n=Tw;break;default:n=uc}n=qE(n,jE.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function jE(t,e){if(Wu=-1,qu=0,ke&6)throw Error(H(327));var n=t.callbackNode;if(Co()&&t.callbackNode!==n)return null;var r=cc(t,t===St?kt:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Pc(t,r);else{e=r;var i=ke;ke|=2;var s=BE();(St!==t||kt!==e)&&(br=null,Vo=ft()+500,ms(t,e));do try{dA();break}catch(a){zE(t,a)}while(!0);qp(),Cc.current=s,ke=i,gt!==null?e=0:(St=null,kt=0,e=wt)}if(e!==0){if(e===2&&(i=df(t),i!==0&&(r=i,e=Uf(t,i))),e===1)throw n=gl,ms(t,0),fi(t,r),un(t,ft()),n;if(e===6)fi(t,r);else{if(i=t.current.alternate,!(r&30)&&!uA(i)&&(e=Pc(t,r),e===2&&(s=df(t),s!==0&&(r=s,e=Uf(t,s))),e===1))throw n=gl,ms(t,0),fi(t,r),un(t,ft()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(H(345));case 2:is(t,rn,br);break;case 3:if(fi(t,r),(r&130023424)===r&&(e=lm+500-ft(),10<e)){if(cc(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Yt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=_f(is.bind(null,t,rn,br),e);break}is(t,rn,br);break;case 4:if(fi(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-Yn(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=ft()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*lA(r/1960))-r,10<r){t.timeoutHandle=_f(is.bind(null,t,rn,br),r);break}is(t,rn,br);break;case 5:is(t,rn,br);break;default:throw Error(H(329))}}}return un(t,ft()),t.callbackNode===n?jE.bind(null,t):null}function Uf(t,e){var n=Ha;return t.current.memoizedState.isDehydrated&&(ms(t,e).flags|=256),t=Pc(t,e),t!==2&&(e=rn,rn=n,e!==null&&jf(e)),t}function jf(t){rn===null?rn=t:rn.push.apply(rn,t)}function uA(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Jn(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function fi(t,e){for(e&=~am,e&=~gd,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Yn(e),r=1<<n;t[n]=-1,e&=~r}}function iv(t){if(ke&6)throw Error(H(327));Co();var e=cc(t,0);if(!(e&1))return un(t,ft()),null;var n=Pc(t,e);if(t.tag!==0&&n===2){var r=df(t);r!==0&&(e=r,n=Uf(t,r))}if(n===1)throw n=gl,ms(t,0),fi(t,e),un(t,ft()),n;if(n===6)throw Error(H(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,is(t,rn,br),un(t,ft()),null}function um(t,e){var n=ke;ke|=1;try{return t(e)}finally{ke=n,ke===0&&(Vo=ft()+500,hd&&Hi())}}function Ts(t){_i!==null&&_i.tag===0&&!(ke&6)&&Co();var e=ke;ke|=1;var n=Ln.transition,r=Fe;try{if(Ln.transition=null,Fe=1,t)return t()}finally{Fe=r,Ln.transition=n,ke=e,!(ke&6)&&Hi()}}function cm(){mn=vo.current,Qe(vo)}function ms(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,UR(n)),gt!==null)for(n=gt.return;n!==null;){var r=n;switch(Hp(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&mc();break;case 3:Mo(),Qe(an),Qe(Gt),Zp();break;case 5:Jp(r);break;case 4:Mo();break;case 13:Qe(nt);break;case 19:Qe(nt);break;case 10:Kp(r.type._context);break;case 22:case 23:cm()}n=n.return}if(St=t,gt=t=bi(t.current,null),kt=mn=e,wt=0,gl=null,am=gd=Es=0,rn=Ha=null,cs!==null){for(e=0;e<cs.length;e++)if(n=cs[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}cs=null}return t}function zE(t,e){do{var n=gt;try{if(qp(),$u.current=Sc,Ic){for(var r=rt.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Ic=!1}if(ws=0,It=vt=rt=null,Ba=!1,fl=0,om.current=null,n===null||n.return===null){wt=1,gl=e,gt=null;break}e:{var s=t,o=n.return,a=n,u=e;if(e=kt,a.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,h=a,f=h.tag;if(!(h.mode&1)&&(f===0||f===11||f===15)){var g=h.alternate;g?(h.updateQueue=g.updateQueue,h.memoizedState=g.memoizedState,h.lanes=g.lanes):(h.updateQueue=null,h.memoizedState=null)}var m=Gy(o);if(m!==null){m.flags&=-257,Wy(m,o,a,s,e),m.mode&1&&Hy(s,c,e),e=m,u=c;var E=e.updateQueue;if(E===null){var A=new Set;A.add(u),e.updateQueue=A}else E.add(u);break e}else{if(!(e&1)){Hy(s,c,e),dm();break e}u=Error(H(426))}}else if(Ze&&a.mode&1){var N=Gy(o);if(N!==null){!(N.flags&65536)&&(N.flags|=256),Wy(N,o,a,s,e),Gp(Lo(u,a));break e}}s=u=Lo(u,a),wt!==4&&(wt=2),Ha===null?Ha=[s]:Ha.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var T=SE(s,u,e);Fy(s,T);break e;case 1:a=u;var _=s.type,S=s.stateNode;if(!(s.flags&128)&&(typeof _.getDerivedStateFromError=="function"||S!==null&&typeof S.componentDidCatch=="function"&&(Ai===null||!Ai.has(S)))){s.flags|=65536,e&=-e,s.lanes|=e;var D=CE(s,a,e);Fy(s,D);break e}}s=s.return}while(s!==null)}HE(n)}catch(j){e=j,gt===n&&n!==null&&(gt=n=n.return);continue}break}while(!0)}function BE(){var t=Cc.current;return Cc.current=Sc,t===null?Sc:t}function dm(){(wt===0||wt===3||wt===2)&&(wt=4),St===null||!(Es&268435455)&&!(gd&268435455)||fi(St,kt)}function Pc(t,e){var n=ke;ke|=2;var r=BE();(St!==t||kt!==e)&&(br=null,ms(t,e));do try{cA();break}catch(i){zE(t,i)}while(!0);if(qp(),ke=n,Cc.current=r,gt!==null)throw Error(H(261));return St=null,kt=0,wt}function cA(){for(;gt!==null;)$E(gt)}function dA(){for(;gt!==null&&!LC();)$E(gt)}function $E(t){var e=WE(t.alternate,t,mn);t.memoizedProps=t.pendingProps,e===null?HE(t):gt=e,om.current=null}function HE(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=iA(n,e),n!==null){n.flags&=32767,gt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{wt=6,gt=null;return}}else if(n=rA(n,e,mn),n!==null){gt=n;return}if(e=e.sibling,e!==null){gt=e;return}gt=e=t}while(e!==null);wt===0&&(wt=5)}function is(t,e,n){var r=Fe,i=Ln.transition;try{Ln.transition=null,Fe=1,hA(t,e,n,r)}finally{Ln.transition=i,Fe=r}return null}function hA(t,e,n,r){do Co();while(_i!==null);if(ke&6)throw Error(H(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(H(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(WC(t,s),t===St&&(gt=St=null,kt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Au||(Au=!0,qE(uc,function(){return Co(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Ln.transition,Ln.transition=null;var o=Fe;Fe=1;var a=ke;ke|=4,om.current=null,oA(t,n),FE(n,t),NR(yf),dc=!!gf,yf=gf=null,t.current=n,aA(n),VC(),ke=a,Fe=o,Ln.transition=s}else t.current=n;if(Au&&(Au=!1,_i=t,Ac=i),s=t.pendingLanes,s===0&&(Ai=null),jC(n.stateNode),un(t,ft()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Rc)throw Rc=!1,t=Vf,Vf=null,t;return Ac&1&&t.tag!==0&&Co(),s=t.pendingLanes,s&1?t===Ff?Ga++:(Ga=0,Ff=t):Ga=0,Hi(),null}function Co(){if(_i!==null){var t=Sw(Ac),e=Ln.transition,n=Fe;try{if(Ln.transition=null,Fe=16>t?16:t,_i===null)var r=!1;else{if(t=_i,_i=null,Ac=0,ke&6)throw Error(H(331));var i=ke;for(ke|=4,J=t.current;J!==null;){var s=J,o=s.child;if(J.flags&16){var a=s.deletions;if(a!==null){for(var u=0;u<a.length;u++){var c=a[u];for(J=c;J!==null;){var h=J;switch(h.tag){case 0:case 11:case 15:$a(8,h,s)}var f=h.child;if(f!==null)f.return=h,J=f;else for(;J!==null;){h=J;var g=h.sibling,m=h.return;if(ME(h),h===c){J=null;break}if(g!==null){g.return=m,J=g;break}J=m}}}var E=s.alternate;if(E!==null){var A=E.child;if(A!==null){E.child=null;do{var N=A.sibling;A.sibling=null,A=N}while(A!==null)}}J=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,J=o;else e:for(;J!==null;){if(s=J,s.flags&2048)switch(s.tag){case 0:case 11:case 15:$a(9,s,s.return)}var T=s.sibling;if(T!==null){T.return=s.return,J=T;break e}J=s.return}}var _=t.current;for(J=_;J!==null;){o=J;var S=o.child;if(o.subtreeFlags&2064&&S!==null)S.return=o,J=S;else e:for(o=_;J!==null;){if(a=J,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:md(9,a)}}catch(j){lt(a,a.return,j)}if(a===o){J=null;break e}var D=a.sibling;if(D!==null){D.return=a.return,J=D;break e}J=a.return}}if(ke=i,Hi(),ur&&typeof ur.onPostCommitFiberRoot=="function")try{ur.onPostCommitFiberRoot(ad,t)}catch{}r=!0}return r}finally{Fe=n,Ln.transition=e}}return!1}function sv(t,e,n){e=Lo(n,e),e=SE(t,e,1),t=Ri(t,e,1),e=Yt(),t!==null&&(Ml(t,1,e),un(t,e))}function lt(t,e,n){if(t.tag===3)sv(t,t,n);else for(;e!==null;){if(e.tag===3){sv(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Ai===null||!Ai.has(r))){t=Lo(n,t),t=CE(e,t,1),e=Ri(e,t,1),t=Yt(),e!==null&&(Ml(e,1,t),un(e,t));break}}e=e.return}}function fA(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Yt(),t.pingedLanes|=t.suspendedLanes&n,St===t&&(kt&n)===n&&(wt===4||wt===3&&(kt&130023424)===kt&&500>ft()-lm?ms(t,0):am|=n),un(t,e)}function GE(t,e){e===0&&(t.mode&1?(e=yu,yu<<=1,!(yu&130023424)&&(yu=4194304)):e=1);var n=Yt();t=Br(t,e),t!==null&&(Ml(t,e,n),un(t,n))}function pA(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),GE(t,n)}function mA(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(H(314))}r!==null&&r.delete(e),GE(t,n)}var WE;WE=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||an.current)on=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return on=!1,nA(t,e,n);on=!!(t.flags&131072)}else on=!1,Ze&&e.flags&1048576&&Yw(e,vc,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Gu(t,e),t=e.pendingProps;var i=No(e,Gt.current);So(e,n),i=tm(null,e,r,t,i,n);var s=nm();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,ln(r)?(s=!0,gc(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Yp(e),i.updater=pd,e.stateNode=i,i._reactInternals=e,Rf(e,r,t,n),e=bf(null,e,r,!0,s,n)):(e.tag=0,Ze&&s&&$p(e),Qt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Gu(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=yA(r),t=Hn(r,t),i){case 0:e=Pf(null,e,r,t,n);break e;case 1:e=Qy(null,e,r,t,n);break e;case 11:e=qy(null,e,r,t,n);break e;case 14:e=Ky(null,e,r,Hn(r.type,t),n);break e}throw Error(H(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Hn(r,i),Pf(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Hn(r,i),Qy(t,e,r,i,n);case 3:e:{if(bE(e),t===null)throw Error(H(387));r=e.pendingProps,s=e.memoizedState,i=s.element,nE(t,e),Ec(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Lo(Error(H(423)),e),e=Yy(t,e,r,n,i);break e}else if(r!==i){i=Lo(Error(H(424)),e),e=Yy(t,e,r,n,i);break e}else for(yn=Ci(e.stateNode.containerInfo.firstChild),_n=e,Ze=!0,qn=null,n=eE(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Do(),r===i){e=$r(t,e,n);break e}Qt(t,e,r,n)}e=e.child}return e;case 5:return rE(e),t===null&&If(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,vf(r,i)?o=null:s!==null&&vf(r,s)&&(e.flags|=32),PE(t,e),Qt(t,e,o,n),e.child;case 6:return t===null&&If(e),null;case 13:return xE(t,e,n);case 4:return Xp(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Oo(e,null,r,n):Qt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Hn(r,i),qy(t,e,r,i,n);case 7:return Qt(t,e,e.pendingProps,n),e.child;case 8:return Qt(t,e,e.pendingProps.children,n),e.child;case 12:return Qt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,He(_c,r._currentValue),r._currentValue=o,s!==null)if(Jn(s.value,o)){if(s.children===i.children&&!an.current){e=$r(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var u=a.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=Lr(-1,n&-n),u.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var h=c.pending;h===null?u.next=u:(u.next=h.next,h.next=u),c.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),Sf(s.return,n,e),a.lanes|=n;break}u=u.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(H(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Sf(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Qt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,So(e,n),i=Un(i),r=r(i),e.flags|=1,Qt(t,e,r,n),e.child;case 14:return r=e.type,i=Hn(r,e.pendingProps),i=Hn(r.type,i),Ky(t,e,r,i,n);case 15:return RE(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Hn(r,i),Gu(t,e),e.tag=1,ln(r)?(t=!0,gc(e)):t=!1,So(e,n),IE(e,r,i),Rf(e,r,i,n),bf(null,e,r,!0,t,n);case 19:return kE(t,e,n);case 22:return AE(t,e,n)}throw Error(H(156,e.tag))};function qE(t,e){return ww(t,e)}function gA(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Mn(t,e,n,r){return new gA(t,e,n,r)}function hm(t){return t=t.prototype,!(!t||!t.isReactComponent)}function yA(t){if(typeof t=="function")return hm(t)?1:0;if(t!=null){if(t=t.$$typeof,t===kp)return 11;if(t===Np)return 14}return 2}function bi(t,e){var n=t.alternate;return n===null?(n=Mn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Ku(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")hm(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case ao:return gs(n.children,i,s,e);case xp:o=8,i|=8;break;case Qh:return t=Mn(12,n,e,i|2),t.elementType=Qh,t.lanes=s,t;case Yh:return t=Mn(13,n,e,i),t.elementType=Yh,t.lanes=s,t;case Xh:return t=Mn(19,n,e,i),t.elementType=Xh,t.lanes=s,t;case rw:return yd(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case tw:o=10;break e;case nw:o=9;break e;case kp:o=11;break e;case Np:o=14;break e;case ui:o=16,r=null;break e}throw Error(H(130,t==null?t:typeof t,""))}return e=Mn(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function gs(t,e,n,r){return t=Mn(7,t,r,e),t.lanes=n,t}function yd(t,e,n,r){return t=Mn(22,t,r,e),t.elementType=rw,t.lanes=n,t.stateNode={isHidden:!1},t}function Sh(t,e,n){return t=Mn(6,t,null,e),t.lanes=n,t}function Ch(t,e,n){return e=Mn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function vA(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=sh(0),this.expirationTimes=sh(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=sh(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function fm(t,e,n,r,i,s,o,a,u){return t=new vA(t,e,n,a,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Mn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Yp(s),t}function _A(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:oo,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function KE(t){if(!t)return Mi;t=t._reactInternals;e:{if(Ds(t)!==t||t.tag!==1)throw Error(H(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(ln(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(H(171))}if(t.tag===1){var n=t.type;if(ln(n))return Kw(t,n,e)}return e}function QE(t,e,n,r,i,s,o,a,u){return t=fm(n,r,!0,t,i,s,o,a,u),t.context=KE(null),n=t.current,r=Yt(),i=Pi(n),s=Lr(r,i),s.callback=e??null,Ri(n,s,i),t.current.lanes=i,Ml(t,i,r),un(t,r),t}function vd(t,e,n,r){var i=e.current,s=Yt(),o=Pi(i);return n=KE(n),e.context===null?e.context=n:e.pendingContext=n,e=Lr(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Ri(i,e,o),t!==null&&(Xn(t,i,o,s),Bu(t,i,o)),o}function bc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function ov(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function pm(t,e){ov(t,e),(t=t.alternate)&&ov(t,e)}function wA(){return null}var YE=typeof reportError=="function"?reportError:function(t){console.error(t)};function mm(t){this._internalRoot=t}_d.prototype.render=mm.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(H(409));vd(t,e,null,null)};_d.prototype.unmount=mm.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Ts(function(){vd(null,t,null,null)}),e[zr]=null}};function _d(t){this._internalRoot=t}_d.prototype.unstable_scheduleHydration=function(t){if(t){var e=Aw();t={blockedOn:null,target:t,priority:e};for(var n=0;n<hi.length&&e!==0&&e<hi[n].priority;n++);hi.splice(n,0,t),n===0&&bw(t)}};function gm(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function wd(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function av(){}function EA(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var c=bc(o);s.call(c)}}var o=QE(e,r,t,0,null,!1,!1,"",av);return t._reactRootContainer=o,t[zr]=o.current,ll(t.nodeType===8?t.parentNode:t),Ts(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var c=bc(u);a.call(c)}}var u=fm(t,0,!1,null,null,!1,!1,"",av);return t._reactRootContainer=u,t[zr]=u.current,ll(t.nodeType===8?t.parentNode:t),Ts(function(){vd(e,u,n,r)}),u}function Ed(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var u=bc(o);a.call(u)}}vd(e,o,t,i)}else o=EA(n,e,t,i,r);return bc(o)}Cw=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Pa(e.pendingLanes);n!==0&&(Mp(e,n|1),un(e,ft()),!(ke&6)&&(Vo=ft()+500,Hi()))}break;case 13:Ts(function(){var r=Br(t,1);if(r!==null){var i=Yt();Xn(r,t,1,i)}}),pm(t,1)}};Lp=function(t){if(t.tag===13){var e=Br(t,134217728);if(e!==null){var n=Yt();Xn(e,t,134217728,n)}pm(t,134217728)}};Rw=function(t){if(t.tag===13){var e=Pi(t),n=Br(t,e);if(n!==null){var r=Yt();Xn(n,t,e,r)}pm(t,e)}};Aw=function(){return Fe};Pw=function(t,e){var n=Fe;try{return Fe=t,e()}finally{Fe=n}};lf=function(t,e,n){switch(e){case"input":if(ef(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=dd(r);if(!i)throw Error(H(90));sw(r),ef(r,i)}}}break;case"textarea":aw(t,n);break;case"select":e=n.value,e!=null&&wo(t,!!n.multiple,e,!1)}};pw=um;mw=Ts;var TA={usingClientEntryPoint:!1,Events:[Vl,ho,dd,hw,fw,um]},wa={findFiberByHostInstance:us,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},IA={bundleType:wa.bundleType,version:wa.version,rendererPackageName:wa.rendererPackageName,rendererConfig:wa.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Qr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=vw(t),t===null?null:t.stateNode},findFiberByHostInstance:wa.findFiberByHostInstance||wA,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Pu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Pu.isDisabled&&Pu.supportsFiber)try{ad=Pu.inject(IA),ur=Pu}catch{}}Sn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=TA;Sn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!gm(e))throw Error(H(200));return _A(t,e,null,n)};Sn.createRoot=function(t,e){if(!gm(t))throw Error(H(299));var n=!1,r="",i=YE;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=fm(t,1,!1,null,null,n,!1,r,i),t[zr]=e.current,ll(t.nodeType===8?t.parentNode:t),new mm(e)};Sn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(H(188)):(t=Object.keys(t).join(","),Error(H(268,t)));return t=vw(e),t=t===null?null:t.stateNode,t};Sn.flushSync=function(t){return Ts(t)};Sn.hydrate=function(t,e,n){if(!wd(e))throw Error(H(200));return Ed(null,t,e,!0,n)};Sn.hydrateRoot=function(t,e,n){if(!gm(t))throw Error(H(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=YE;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=QE(e,null,t,1,n??null,i,!1,s,o),t[zr]=e.current,ll(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new _d(e)};Sn.render=function(t,e,n){if(!wd(e))throw Error(H(200));return Ed(null,t,e,!1,n)};Sn.unmountComponentAtNode=function(t){if(!wd(t))throw Error(H(40));return t._reactRootContainer?(Ts(function(){Ed(null,null,t,!1,function(){t._reactRootContainer=null,t[zr]=null})}),!0):!1};Sn.unstable_batchedUpdates=um;Sn.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!wd(n))throw Error(H(200));if(t==null||t._reactInternals===void 0)throw Error(H(38));return Ed(t,e,n,!1,r)};Sn.version="18.3.1-next-f1338f8080-20240426";function XE(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(XE)}catch(t){console.error(t)}}XE(),X0.exports=Sn;var ym=X0.exports;const JE=U0(ym),SA=F0({__proto__:null,default:JE},[ym]);var ZE,lv=ym;ZE=lv.createRoot,lv.hydrateRoot;function CA(t,e){typeof t=="function"?t(e):t!=null&&(t.current=e)}function RA(...t){return e=>t.forEach(n=>CA(n,e))}var eT=U.forwardRef((t,e)=>{const{children:n,...r}=t,i=U.Children.toArray(n),s=i.find(PA);if(s){const o=s.props.children,a=i.map(u=>u===s?U.Children.count(o)>1?U.Children.only(null):U.isValidElement(o)?o.props.children:null:u);return V.jsx(zf,{...r,ref:e,children:U.isValidElement(o)?U.cloneElement(o,void 0,a):null})}return V.jsx(zf,{...r,ref:e,children:n})});eT.displayName="Slot";var zf=U.forwardRef((t,e)=>{const{children:n,...r}=t;if(U.isValidElement(n)){const i=xA(n);return U.cloneElement(n,{...bA(r,n.props),ref:e?RA(e,i):i})}return U.Children.count(n)>1?U.Children.only(null):null});zf.displayName="SlotClone";var AA=({children:t})=>V.jsx(V.Fragment,{children:t});function PA(t){return U.isValidElement(t)&&t.type===AA}function bA(t,e){const n={...e};for(const r in e){const i=t[r],s=e[r];/^on[A-Z]/.test(r)?i&&s?n[r]=(...a)=>{s(...a),i(...a)}:i&&(n[r]=i):r==="style"?n[r]={...i,...s}:r==="className"&&(n[r]=[i,s].filter(Boolean).join(" "))}return{...t,...n}}function xA(t){var r,i;let e=(r=Object.getOwnPropertyDescriptor(t.props,"ref"))==null?void 0:r.get,n=e&&"isReactWarning"in e&&e.isReactWarning;return n?t.ref:(e=(i=Object.getOwnPropertyDescriptor(t,"ref"))==null?void 0:i.get,n=e&&"isReactWarning"in e&&e.isReactWarning,n?t.props.ref:t.props.ref||t.ref)}function tT(t){var e,n,r="";if(typeof t=="string"||typeof t=="number")r+=t;else if(typeof t=="object")if(Array.isArray(t))for(e=0;e<t.length;e++)t[e]&&(n=tT(t[e]))&&(r&&(r+=" "),r+=n);else for(e in t)t[e]&&(r&&(r+=" "),r+=e);return r}function kA(){for(var t,e,n=0,r="";n<arguments.length;)(t=arguments[n++])&&(e=tT(t))&&(r&&(r+=" "),r+=e);return r}const uv=t=>typeof t=="boolean"?"".concat(t):t===0?"0":t,cv=kA,NA=(t,e)=>n=>{var r;if((e==null?void 0:e.variants)==null)return cv(t,n==null?void 0:n.class,n==null?void 0:n.className);const{variants:i,defaultVariants:s}=e,o=Object.keys(i).map(c=>{const h=n==null?void 0:n[c],f=s==null?void 0:s[c];if(h===null)return null;const g=uv(h)||uv(f);return i[c][g]}),a=n&&Object.entries(n).reduce((c,h)=>{let[f,g]=h;return g===void 0||(c[f]=g),c},{}),u=e==null||(r=e.compoundVariants)===null||r===void 0?void 0:r.reduce((c,h)=>{let{class:f,className:g,...m}=h;return Object.entries(m).every(E=>{let[A,N]=E;return Array.isArray(N)?N.includes({...s,...a}[A]):{...s,...a}[A]===N})?[...c,f,g]:c},[]);return cv(t,o,u,n==null?void 0:n.class,n==null?void 0:n.className)};function nT(t){var e,n,r="";if(typeof t=="string"||typeof t=="number")r+=t;else if(typeof t=="object")if(Array.isArray(t)){var i=t.length;for(e=0;e<i;e++)t[e]&&(n=nT(t[e]))&&(r&&(r+=" "),r+=n)}else for(n in t)t[n]&&(r&&(r+=" "),r+=n);return r}function DA(){for(var t,e,n=0,r="",i=arguments.length;n<i;n++)(t=arguments[n])&&(e=nT(t))&&(r&&(r+=" "),r+=e);return r}const vm="-",OA=t=>{const e=LA(t),{conflictingClassGroups:n,conflictingClassGroupModifiers:r}=t;return{getClassGroupId:o=>{const a=o.split(vm);return a[0]===""&&a.length!==1&&a.shift(),rT(a,e)||MA(o)},getConflictingClassGroupIds:(o,a)=>{const u=n[o]||[];return a&&r[o]?[...u,...r[o]]:u}}},rT=(t,e)=>{var o;if(t.length===0)return e.classGroupId;const n=t[0],r=e.nextPart.get(n),i=r?rT(t.slice(1),r):void 0;if(i)return i;if(e.validators.length===0)return;const s=t.join(vm);return(o=e.validators.find(({validator:a})=>a(s)))==null?void 0:o.classGroupId},dv=/^\[(.+)\]$/,MA=t=>{if(dv.test(t)){const e=dv.exec(t)[1],n=e==null?void 0:e.substring(0,e.indexOf(":"));if(n)return"arbitrary.."+n}},LA=t=>{const{theme:e,prefix:n}=t,r={nextPart:new Map,validators:[]};return FA(Object.entries(t.classGroups),n).forEach(([s,o])=>{Bf(o,r,s,e)}),r},Bf=(t,e,n,r)=>{t.forEach(i=>{if(typeof i=="string"){const s=i===""?e:hv(e,i);s.classGroupId=n;return}if(typeof i=="function"){if(VA(i)){Bf(i(r),e,n,r);return}e.validators.push({validator:i,classGroupId:n});return}Object.entries(i).forEach(([s,o])=>{Bf(o,hv(e,s),n,r)})})},hv=(t,e)=>{let n=t;return e.split(vm).forEach(r=>{n.nextPart.has(r)||n.nextPart.set(r,{nextPart:new Map,validators:[]}),n=n.nextPart.get(r)}),n},VA=t=>t.isThemeGetter,FA=(t,e)=>e?t.map(([n,r])=>{const i=r.map(s=>typeof s=="string"?e+s:typeof s=="object"?Object.fromEntries(Object.entries(s).map(([o,a])=>[e+o,a])):s);return[n,i]}):t,UA=t=>{if(t<1)return{get:()=>{},set:()=>{}};let e=0,n=new Map,r=new Map;const i=(s,o)=>{n.set(s,o),e++,e>t&&(e=0,r=n,n=new Map)};return{get(s){let o=n.get(s);if(o!==void 0)return o;if((o=r.get(s))!==void 0)return i(s,o),o},set(s,o){n.has(s)?n.set(s,o):i(s,o)}}},iT="!",jA=t=>{const{separator:e,experimentalParseClassName:n}=t,r=e.length===1,i=e[0],s=e.length,o=a=>{const u=[];let c=0,h=0,f;for(let N=0;N<a.length;N++){let T=a[N];if(c===0){if(T===i&&(r||a.slice(N,N+s)===e)){u.push(a.slice(h,N)),h=N+s;continue}if(T==="/"){f=N;continue}}T==="["?c++:T==="]"&&c--}const g=u.length===0?a:a.substring(h),m=g.startsWith(iT),E=m?g.substring(1):g,A=f&&f>h?f-h:void 0;return{modifiers:u,hasImportantModifier:m,baseClassName:E,maybePostfixModifierPosition:A}};return n?a=>n({className:a,parseClassName:o}):o},zA=t=>{if(t.length<=1)return t;const e=[];let n=[];return t.forEach(r=>{r[0]==="["?(e.push(...n.sort(),r),n=[]):n.push(r)}),e.push(...n.sort()),e},BA=t=>({cache:UA(t.cacheSize),parseClassName:jA(t),...OA(t)}),$A=/\s+/,HA=(t,e)=>{const{parseClassName:n,getClassGroupId:r,getConflictingClassGroupIds:i}=e,s=[],o=t.trim().split($A);let a="";for(let u=o.length-1;u>=0;u-=1){const c=o[u],{modifiers:h,hasImportantModifier:f,baseClassName:g,maybePostfixModifierPosition:m}=n(c);let E=!!m,A=r(E?g.substring(0,m):g);if(!A){if(!E){a=c+(a.length>0?" "+a:a);continue}if(A=r(g),!A){a=c+(a.length>0?" "+a:a);continue}E=!1}const N=zA(h).join(":"),T=f?N+iT:N,_=T+A;if(s.includes(_))continue;s.push(_);const S=i(A,E);for(let D=0;D<S.length;++D){const j=S[D];s.push(T+j)}a=c+(a.length>0?" "+a:a)}return a};function GA(){let t=0,e,n,r="";for(;t<arguments.length;)(e=arguments[t++])&&(n=sT(e))&&(r&&(r+=" "),r+=n);return r}const sT=t=>{if(typeof t=="string")return t;let e,n="";for(let r=0;r<t.length;r++)t[r]&&(e=sT(t[r]))&&(n&&(n+=" "),n+=e);return n};function WA(t,...e){let n,r,i,s=o;function o(u){const c=e.reduce((h,f)=>f(h),t());return n=BA(c),r=n.cache.get,i=n.cache.set,s=a,a(u)}function a(u){const c=r(u);if(c)return c;const h=HA(u,n);return i(u,h),h}return function(){return s(GA.apply(null,arguments))}}const qe=t=>{const e=n=>n[t]||[];return e.isThemeGetter=!0,e},oT=/^\[(?:([a-z-]+):)?(.+)\]$/i,qA=/^\d+\/\d+$/,KA=new Set(["px","full","screen"]),QA=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,YA=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,XA=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,JA=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,ZA=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,Pr=t=>Ro(t)||KA.has(t)||qA.test(t),si=t=>Xo(t,"length",aP),Ro=t=>!!t&&!Number.isNaN(Number(t)),Rh=t=>Xo(t,"number",Ro),Ea=t=>!!t&&Number.isInteger(Number(t)),eP=t=>t.endsWith("%")&&Ro(t.slice(0,-1)),ye=t=>oT.test(t),oi=t=>QA.test(t),tP=new Set(["length","size","percentage"]),nP=t=>Xo(t,tP,aT),rP=t=>Xo(t,"position",aT),iP=new Set(["image","url"]),sP=t=>Xo(t,iP,uP),oP=t=>Xo(t,"",lP),Ta=()=>!0,Xo=(t,e,n)=>{const r=oT.exec(t);return r?r[1]?typeof e=="string"?r[1]===e:e.has(r[1]):n(r[2]):!1},aP=t=>YA.test(t)&&!XA.test(t),aT=()=>!1,lP=t=>JA.test(t),uP=t=>ZA.test(t),cP=()=>{const t=qe("colors"),e=qe("spacing"),n=qe("blur"),r=qe("brightness"),i=qe("borderColor"),s=qe("borderRadius"),o=qe("borderSpacing"),a=qe("borderWidth"),u=qe("contrast"),c=qe("grayscale"),h=qe("hueRotate"),f=qe("invert"),g=qe("gap"),m=qe("gradientColorStops"),E=qe("gradientColorStopPositions"),A=qe("inset"),N=qe("margin"),T=qe("opacity"),_=qe("padding"),S=qe("saturate"),D=qe("scale"),j=qe("sepia"),b=qe("skew"),I=qe("space"),y=qe("translate"),w=()=>["auto","contain","none"],C=()=>["auto","hidden","clip","visible","scroll"],k=()=>["auto",ye,e],x=()=>[ye,e],R=()=>["",Pr,si],ge=()=>["auto",Ro,ye],ct=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],et=()=>["solid","dashed","dotted","double","none"],ve=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],q=()=>["start","end","center","between","around","evenly","stretch"],G=()=>["","0",ye],Z=()=>["auto","avoid","all","avoid-page","page","left","right","column"],de=()=>[Ro,ye];return{cacheSize:500,separator:":",theme:{colors:[Ta],spacing:[Pr,si],blur:["none","",oi,ye],brightness:de(),borderColor:[t],borderRadius:["none","","full",oi,ye],borderSpacing:x(),borderWidth:R(),contrast:de(),grayscale:G(),hueRotate:de(),invert:G(),gap:x(),gradientColorStops:[t],gradientColorStopPositions:[eP,si],inset:k(),margin:k(),opacity:de(),padding:x(),saturate:de(),scale:de(),sepia:G(),skew:de(),space:x(),translate:x()},classGroups:{aspect:[{aspect:["auto","square","video",ye]}],container:["container"],columns:[{columns:[oi]}],"break-after":[{"break-after":Z()}],"break-before":[{"break-before":Z()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...ct(),ye]}],overflow:[{overflow:C()}],"overflow-x":[{"overflow-x":C()}],"overflow-y":[{"overflow-y":C()}],overscroll:[{overscroll:w()}],"overscroll-x":[{"overscroll-x":w()}],"overscroll-y":[{"overscroll-y":w()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[A]}],"inset-x":[{"inset-x":[A]}],"inset-y":[{"inset-y":[A]}],start:[{start:[A]}],end:[{end:[A]}],top:[{top:[A]}],right:[{right:[A]}],bottom:[{bottom:[A]}],left:[{left:[A]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",Ea,ye]}],basis:[{basis:k()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",ye]}],grow:[{grow:G()}],shrink:[{shrink:G()}],order:[{order:["first","last","none",Ea,ye]}],"grid-cols":[{"grid-cols":[Ta]}],"col-start-end":[{col:["auto",{span:["full",Ea,ye]},ye]}],"col-start":[{"col-start":ge()}],"col-end":[{"col-end":ge()}],"grid-rows":[{"grid-rows":[Ta]}],"row-start-end":[{row:["auto",{span:[Ea,ye]},ye]}],"row-start":[{"row-start":ge()}],"row-end":[{"row-end":ge()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",ye]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",ye]}],gap:[{gap:[g]}],"gap-x":[{"gap-x":[g]}],"gap-y":[{"gap-y":[g]}],"justify-content":[{justify:["normal",...q()]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal",...q(),"baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[...q(),"baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[_]}],px:[{px:[_]}],py:[{py:[_]}],ps:[{ps:[_]}],pe:[{pe:[_]}],pt:[{pt:[_]}],pr:[{pr:[_]}],pb:[{pb:[_]}],pl:[{pl:[_]}],m:[{m:[N]}],mx:[{mx:[N]}],my:[{my:[N]}],ms:[{ms:[N]}],me:[{me:[N]}],mt:[{mt:[N]}],mr:[{mr:[N]}],mb:[{mb:[N]}],ml:[{ml:[N]}],"space-x":[{"space-x":[I]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[I]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit","svw","lvw","dvw",ye,e]}],"min-w":[{"min-w":[ye,e,"min","max","fit"]}],"max-w":[{"max-w":[ye,e,"none","full","min","max","fit","prose",{screen:[oi]},oi]}],h:[{h:[ye,e,"auto","min","max","fit","svh","lvh","dvh"]}],"min-h":[{"min-h":[ye,e,"min","max","fit","svh","lvh","dvh"]}],"max-h":[{"max-h":[ye,e,"min","max","fit","svh","lvh","dvh"]}],size:[{size:[ye,e,"auto","min","max","fit"]}],"font-size":[{text:["base",oi,si]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",Rh]}],"font-family":[{font:[Ta]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractons"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",ye]}],"line-clamp":[{"line-clamp":["none",Ro,Rh]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",Pr,ye]}],"list-image":[{"list-image":["none",ye]}],"list-style-type":[{list:["none","disc","decimal",ye]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[t]}],"placeholder-opacity":[{"placeholder-opacity":[T]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[t]}],"text-opacity":[{"text-opacity":[T]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...et(),"wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",Pr,si]}],"underline-offset":[{"underline-offset":["auto",Pr,ye]}],"text-decoration-color":[{decoration:[t]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:x()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",ye]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",ye]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[T]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...ct(),rP]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",nP]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},sP]}],"bg-color":[{bg:[t]}],"gradient-from-pos":[{from:[E]}],"gradient-via-pos":[{via:[E]}],"gradient-to-pos":[{to:[E]}],"gradient-from":[{from:[m]}],"gradient-via":[{via:[m]}],"gradient-to":[{to:[m]}],rounded:[{rounded:[s]}],"rounded-s":[{"rounded-s":[s]}],"rounded-e":[{"rounded-e":[s]}],"rounded-t":[{"rounded-t":[s]}],"rounded-r":[{"rounded-r":[s]}],"rounded-b":[{"rounded-b":[s]}],"rounded-l":[{"rounded-l":[s]}],"rounded-ss":[{"rounded-ss":[s]}],"rounded-se":[{"rounded-se":[s]}],"rounded-ee":[{"rounded-ee":[s]}],"rounded-es":[{"rounded-es":[s]}],"rounded-tl":[{"rounded-tl":[s]}],"rounded-tr":[{"rounded-tr":[s]}],"rounded-br":[{"rounded-br":[s]}],"rounded-bl":[{"rounded-bl":[s]}],"border-w":[{border:[a]}],"border-w-x":[{"border-x":[a]}],"border-w-y":[{"border-y":[a]}],"border-w-s":[{"border-s":[a]}],"border-w-e":[{"border-e":[a]}],"border-w-t":[{"border-t":[a]}],"border-w-r":[{"border-r":[a]}],"border-w-b":[{"border-b":[a]}],"border-w-l":[{"border-l":[a]}],"border-opacity":[{"border-opacity":[T]}],"border-style":[{border:[...et(),"hidden"]}],"divide-x":[{"divide-x":[a]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[a]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[T]}],"divide-style":[{divide:et()}],"border-color":[{border:[i]}],"border-color-x":[{"border-x":[i]}],"border-color-y":[{"border-y":[i]}],"border-color-s":[{"border-s":[i]}],"border-color-e":[{"border-e":[i]}],"border-color-t":[{"border-t":[i]}],"border-color-r":[{"border-r":[i]}],"border-color-b":[{"border-b":[i]}],"border-color-l":[{"border-l":[i]}],"divide-color":[{divide:[i]}],"outline-style":[{outline:["",...et()]}],"outline-offset":[{"outline-offset":[Pr,ye]}],"outline-w":[{outline:[Pr,si]}],"outline-color":[{outline:[t]}],"ring-w":[{ring:R()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[t]}],"ring-opacity":[{"ring-opacity":[T]}],"ring-offset-w":[{"ring-offset":[Pr,si]}],"ring-offset-color":[{"ring-offset":[t]}],shadow:[{shadow:["","inner","none",oi,oP]}],"shadow-color":[{shadow:[Ta]}],opacity:[{opacity:[T]}],"mix-blend":[{"mix-blend":[...ve(),"plus-lighter","plus-darker"]}],"bg-blend":[{"bg-blend":ve()}],filter:[{filter:["","none"]}],blur:[{blur:[n]}],brightness:[{brightness:[r]}],contrast:[{contrast:[u]}],"drop-shadow":[{"drop-shadow":["","none",oi,ye]}],grayscale:[{grayscale:[c]}],"hue-rotate":[{"hue-rotate":[h]}],invert:[{invert:[f]}],saturate:[{saturate:[S]}],sepia:[{sepia:[j]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[n]}],"backdrop-brightness":[{"backdrop-brightness":[r]}],"backdrop-contrast":[{"backdrop-contrast":[u]}],"backdrop-grayscale":[{"backdrop-grayscale":[c]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[h]}],"backdrop-invert":[{"backdrop-invert":[f]}],"backdrop-opacity":[{"backdrop-opacity":[T]}],"backdrop-saturate":[{"backdrop-saturate":[S]}],"backdrop-sepia":[{"backdrop-sepia":[j]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[o]}],"border-spacing-x":[{"border-spacing-x":[o]}],"border-spacing-y":[{"border-spacing-y":[o]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",ye]}],duration:[{duration:de()}],ease:[{ease:["linear","in","out","in-out",ye]}],delay:[{delay:de()}],animate:[{animate:["none","spin","ping","pulse","bounce",ye]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[D]}],"scale-x":[{"scale-x":[D]}],"scale-y":[{"scale-y":[D]}],rotate:[{rotate:[Ea,ye]}],"translate-x":[{"translate-x":[y]}],"translate-y":[{"translate-y":[y]}],"skew-x":[{"skew-x":[b]}],"skew-y":[{"skew-y":[b]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",ye]}],accent:[{accent:["auto",t]}],appearance:[{appearance:["none","auto"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",ye]}],"caret-color":[{caret:[t]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":x()}],"scroll-mx":[{"scroll-mx":x()}],"scroll-my":[{"scroll-my":x()}],"scroll-ms":[{"scroll-ms":x()}],"scroll-me":[{"scroll-me":x()}],"scroll-mt":[{"scroll-mt":x()}],"scroll-mr":[{"scroll-mr":x()}],"scroll-mb":[{"scroll-mb":x()}],"scroll-ml":[{"scroll-ml":x()}],"scroll-p":[{"scroll-p":x()}],"scroll-px":[{"scroll-px":x()}],"scroll-py":[{"scroll-py":x()}],"scroll-ps":[{"scroll-ps":x()}],"scroll-pe":[{"scroll-pe":x()}],"scroll-pt":[{"scroll-pt":x()}],"scroll-pr":[{"scroll-pr":x()}],"scroll-pb":[{"scroll-pb":x()}],"scroll-pl":[{"scroll-pl":x()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",ye]}],fill:[{fill:[t,"none"]}],"stroke-w":[{stroke:[Pr,si,Rh]}],stroke:[{stroke:[t,"none"]}],sr:["sr-only","not-sr-only"],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}},dP=WA(cP);function hP(...t){return dP(DA(t))}const fP=NA("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",{variants:{variant:{default:"bg-slate-950 text-white hover:bg-bg-slate-950/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),Td=U.forwardRef(({className:t,variant:e,size:n,asChild:r=!1,...i},s)=>{const o=r?eT:"button";return V.jsx(o,{className:hP(fP({variant:e,size:n,className:t})),ref:s,...i})});Td.displayName="Button";/**
 * @remix-run/router v1.21.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Je(){return Je=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Je.apply(this,arguments)}var mt;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(mt||(mt={}));const fv="popstate";function pP(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:a}=r.location;return yl("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Is(i)}return gP(e,n,null,t)}function Se(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Fo(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function mP(){return Math.random().toString(36).substr(2,8)}function pv(t,e){return{usr:t.state,key:t.key,idx:e}}function yl(t,e,n,r){return n===void 0&&(n=null),Je({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Gi(e):e,{state:n,key:e&&e.key||r||mP()})}function Is(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Gi(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function gP(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=mt.Pop,u=null,c=h();c==null&&(c=0,o.replaceState(Je({},o.state,{idx:c}),""));function h(){return(o.state||{idx:null}).idx}function f(){a=mt.Pop;let N=h(),T=N==null?null:N-c;c=N,u&&u({action:a,location:A.location,delta:T})}function g(N,T){a=mt.Push;let _=yl(A.location,N,T);c=h()+1;let S=pv(_,c),D=A.createHref(_);try{o.pushState(S,"",D)}catch(j){if(j instanceof DOMException&&j.name==="DataCloneError")throw j;i.location.assign(D)}s&&u&&u({action:a,location:A.location,delta:1})}function m(N,T){a=mt.Replace;let _=yl(A.location,N,T);c=h();let S=pv(_,c),D=A.createHref(_);o.replaceState(S,"",D),s&&u&&u({action:a,location:A.location,delta:0})}function E(N){let T=i.location.origin!=="null"?i.location.origin:i.location.href,_=typeof N=="string"?N:Is(N);return _=_.replace(/ $/,"%20"),Se(T,"No window.location.(origin|href) available to create URL for href: "+_),new URL(_,T)}let A={get action(){return a},get location(){return t(i,o)},listen(N){if(u)throw new Error("A history only accepts one active listener");return i.addEventListener(fv,f),u=N,()=>{i.removeEventListener(fv,f),u=null}},createHref(N){return e(i,N)},createURL:E,encodeLocation(N){let T=E(N);return{pathname:T.pathname,search:T.search,hash:T.hash}},push:g,replace:m,go(N){return o.go(N)}};return A}var Ue;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Ue||(Ue={}));const yP=new Set(["lazy","caseSensitive","path","id","index","children"]);function vP(t){return t.index===!0}function xc(t,e,n,r){return n===void 0&&(n=[]),r===void 0&&(r={}),t.map((i,s)=>{let o=[...n,String(s)],a=typeof i.id=="string"?i.id:o.join("-");if(Se(i.index!==!0||!i.children,"Cannot specify children on an index route"),Se(!r[a],'Found a route id collision on id "'+a+`".  Route id's must be globally unique within Data Router usages`),vP(i)){let u=Je({},i,e(i),{id:a});return r[a]=u,u}else{let u=Je({},i,e(i),{id:a,children:void 0});return r[a]=u,i.children&&(u.children=xc(i.children,e,o,r)),u}})}function as(t,e,n){return n===void 0&&(n="/"),Qu(t,e,n,!1)}function Qu(t,e,n,r){let i=typeof e=="string"?Gi(e):e,s=Jo(i.pathname||"/",n);if(s==null)return null;let o=lT(t);wP(o);let a=null;for(let u=0;a==null&&u<o.length;++u){let c=kP(s);a=bP(o[u],c,r)}return a}function _P(t,e){let{route:n,pathname:r,params:i}=t;return{id:n.id,pathname:r,params:i,data:e[n.id],handle:n.handle}}function lT(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let u={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};u.relativePath.startsWith("/")&&(Se(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let c=Vr([r,u.relativePath]),h=n.concat(u);s.children&&s.children.length>0&&(Se(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),lT(s.children,e,h,c)),!(s.path==null&&!s.index)&&e.push({path:c,score:AP(c,s.index),routesMeta:h})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let u of uT(s.path))i(s,o,u)}),e}function uT(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=uT(r.join("/")),a=[];return a.push(...o.map(u=>u===""?s:[s,u].join("/"))),i&&a.push(...o),a.map(u=>t.startsWith("/")&&u===""?"/":u)}function wP(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:PP(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const EP=/^:[\w-]+$/,TP=3,IP=2,SP=1,CP=10,RP=-2,mv=t=>t==="*";function AP(t,e){let n=t.split("/"),r=n.length;return n.some(mv)&&(r+=RP),e&&(r+=IP),n.filter(i=>!mv(i)).reduce((i,s)=>i+(EP.test(s)?TP:s===""?SP:CP),r)}function PP(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function bP(t,e,n){n===void 0&&(n=!1);let{routesMeta:r}=t,i={},s="/",o=[];for(let a=0;a<r.length;++a){let u=r[a],c=a===r.length-1,h=s==="/"?e:e.slice(s.length)||"/",f=gv({path:u.relativePath,caseSensitive:u.caseSensitive,end:c},h),g=u.route;if(!f&&c&&n&&!r[r.length-1].route.index&&(f=gv({path:u.relativePath,caseSensitive:u.caseSensitive,end:!1},h)),!f)return null;Object.assign(i,f.params),o.push({params:i,pathname:Vr([s,f.pathname]),pathnameBase:OP(Vr([s,f.pathnameBase])),route:g}),f.pathnameBase!=="/"&&(s=Vr([s,f.pathnameBase]))}return o}function gv(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=xP(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((c,h,f)=>{let{paramName:g,isOptional:m}=h;if(g==="*"){let A=a[f]||"";o=s.slice(0,s.length-A.length).replace(/(.)\/+$/,"$1")}const E=a[f];return m&&!E?c[g]=void 0:c[g]=(E||"").replace(/%2F/g,"/"),c},{}),pathname:s,pathnameBase:o,pattern:t}}function xP(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),Fo(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,a,u)=>(r.push({paramName:a,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function kP(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Fo(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function Jo(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function NP(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?Gi(t):t;return{pathname:n?n.startsWith("/")?n:DP(n,e):e,search:MP(r),hash:LP(i)}}function DP(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Ah(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function cT(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function _m(t,e){let n=cT(t);return e?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function wm(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=Gi(t):(i=Je({},t),Se(!i.pathname||!i.pathname.includes("?"),Ah("?","pathname","search",i)),Se(!i.pathname||!i.pathname.includes("#"),Ah("#","pathname","hash",i)),Se(!i.search||!i.search.includes("#"),Ah("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(o==null)a=n;else{let f=e.length-1;if(!r&&o.startsWith("..")){let g=o.split("/");for(;g[0]==="..";)g.shift(),f-=1;i.pathname=g.join("/")}a=f>=0?e[f]:"/"}let u=NP(i,a),c=o&&o!=="/"&&o.endsWith("/"),h=(s||o===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(c||h)&&(u.pathname+="/"),u}const Vr=t=>t.join("/").replace(/\/\/+/g,"/"),OP=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),MP=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,LP=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;class kc{constructor(e,n,r,i){i===void 0&&(i=!1),this.status=e,this.statusText=n||"",this.internal=i,r instanceof Error?(this.data=r.toString(),this.error=r):this.data=r}}function Id(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const dT=["post","put","patch","delete"],VP=new Set(dT),FP=["get",...dT],UP=new Set(FP),jP=new Set([301,302,303,307,308]),zP=new Set([307,308]),Ph={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},BP={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},Ia={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},Em=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,$P=t=>({hasErrorBoundary:!!t.hasErrorBoundary}),hT="remix-router-transitions";function HP(t){const e=t.window?t.window:typeof window<"u"?window:void 0,n=typeof e<"u"&&typeof e.document<"u"&&typeof e.document.createElement<"u",r=!n;Se(t.routes.length>0,"You must provide a non-empty routes array to createRouter");let i;if(t.mapRouteProperties)i=t.mapRouteProperties;else if(t.detectErrorBoundary){let P=t.detectErrorBoundary;i=O=>({hasErrorBoundary:P(O)})}else i=$P;let s={},o=xc(t.routes,i,void 0,s),a,u=t.basename||"/",c=t.dataStrategy||KP,h=t.patchRoutesOnNavigation,f=Je({v7_fetcherPersist:!1,v7_normalizeFormMethod:!1,v7_partialHydration:!1,v7_prependBasename:!1,v7_relativeSplatPath:!1,v7_skipActionErrorRevalidation:!1},t.future),g=null,m=new Set,E=null,A=null,N=null,T=t.hydrationData!=null,_=as(o,t.history.location,u),S=null;if(_==null&&!h){let P=tn(404,{pathname:t.history.location.pathname}),{matches:O,route:L}=Av(o);_=O,S={[L.id]:P}}_&&!t.hydrationData&&hn(_,o,t.history.location.pathname).active&&(_=null);let D;if(_)if(_.some(P=>P.route.lazy))D=!1;else if(!_.some(P=>P.route.loader))D=!0;else if(f.v7_partialHydration){let P=t.hydrationData?t.hydrationData.loaderData:null,O=t.hydrationData?t.hydrationData.errors:null;if(O){let L=_.findIndex(B=>O[B.route.id]!==void 0);D=_.slice(0,L+1).every(B=>!Hf(B.route,P,O))}else D=_.every(L=>!Hf(L.route,P,O))}else D=t.hydrationData!=null;else if(D=!1,_=[],f.v7_partialHydration){let P=hn(null,o,t.history.location.pathname);P.active&&P.matches&&(_=P.matches)}let j,b={historyAction:t.history.action,location:t.history.location,matches:_,initialized:D,navigation:Ph,restoreScrollPosition:t.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:t.hydrationData&&t.hydrationData.loaderData||{},actionData:t.hydrationData&&t.hydrationData.actionData||null,errors:t.hydrationData&&t.hydrationData.errors||S,fetchers:new Map,blockers:new Map},I=mt.Pop,y=!1,w,C=!1,k=new Map,x=null,R=!1,ge=!1,ct=[],et=new Set,ve=new Map,q=0,G=-1,Z=new Map,de=new Set,ne=new Map,re=new Map,pe=new Set,Ne=new Map,Ge=new Map,Re;function Ki(){if(g=t.history.listen(P=>{let{action:O,location:L,delta:B}=P;if(Re){Re(),Re=void 0;return}Fo(Ge.size===0||B!=null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let X=en({currentLocation:b.location,nextLocation:L,historyAction:O});if(X&&B!=null){let se=new Promise(ae=>{Re=ae});t.history.go(B*-1),Pn(X,{state:"blocked",location:L,proceed(){Pn(X,{state:"proceeding",proceed:void 0,reset:void 0,location:L}),se.then(()=>t.history.go(B))},reset(){let ae=new Map(b.blockers);ae.set(X,Ia),ze({blockers:ae})}});return}return Kt(O,L)}),n){lb(e,k);let P=()=>ub(e,k);e.addEventListener("pagehide",P),x=()=>e.removeEventListener("pagehide",P)}return b.initialized||Kt(mt.Pop,b.location,{initialHydration:!0}),j}function _r(){g&&g(),x&&x(),m.clear(),w&&w.abort(),b.fetchers.forEach((P,O)=>Zt(O)),b.blockers.forEach((P,O)=>qs(O))}function Rn(P){return m.add(P),()=>m.delete(P)}function ze(P,O){O===void 0&&(O={}),b=Je({},b,P);let L=[],B=[];f.v7_fetcherPersist&&b.fetchers.forEach((X,se)=>{X.state==="idle"&&(pe.has(se)?B.push(se):L.push(se))}),[...m].forEach(X=>X(b,{deletedFetchers:B,viewTransitionOpts:O.viewTransitionOpts,flushSync:O.flushSync===!0})),f.v7_fetcherPersist&&(L.forEach(X=>b.fetchers.delete(X)),B.forEach(X=>Zt(X)))}function An(P,O,L){var B,X;let{flushSync:se}=L===void 0?{}:L,ae=b.actionData!=null&&b.navigation.formMethod!=null&&Wn(b.navigation.formMethod)&&b.navigation.state==="loading"&&((B=P.state)==null?void 0:B._isRedirect)!==!0,ee;O.actionData?Object.keys(O.actionData).length>0?ee=O.actionData:ee=null:ae?ee=b.actionData:ee=null;let te=O.loaderData?Cv(b.loaderData,O.loaderData,O.matches||[],O.errors):b.loaderData,Q=b.blockers;Q.size>0&&(Q=new Map(Q),Q.forEach((we,Be)=>Q.set(Be,Ia)));let ie=y===!0||b.navigation.formMethod!=null&&Wn(b.navigation.formMethod)&&((X=P.state)==null?void 0:X._isRedirect)!==!0;a&&(o=a,a=void 0),R||I===mt.Pop||(I===mt.Push?t.history.push(P,P.state):I===mt.Replace&&t.history.replace(P,P.state));let _e;if(I===mt.Pop){let we=k.get(b.location.pathname);we&&we.has(P.pathname)?_e={currentLocation:b.location,nextLocation:P}:k.has(P.pathname)&&(_e={currentLocation:P,nextLocation:b.location})}else if(C){let we=k.get(b.location.pathname);we?we.add(P.pathname):(we=new Set([P.pathname]),k.set(b.location.pathname,we)),_e={currentLocation:b.location,nextLocation:P}}ze(Je({},O,{actionData:ee,loaderData:te,historyAction:I,location:P,initialized:!0,navigation:Ph,revalidation:"idle",restoreScrollPosition:Lt(P,O.matches||b.matches),preventScrollReset:ie,blockers:Q}),{viewTransitionOpts:_e,flushSync:se===!0}),I=mt.Pop,y=!1,C=!1,R=!1,ge=!1,ct=[]}async function wr(P,O){if(typeof P=="number"){t.history.go(P);return}let L=$f(b.location,b.matches,u,f.v7_prependBasename,P,f.v7_relativeSplatPath,O==null?void 0:O.fromRouteId,O==null?void 0:O.relative),{path:B,submission:X,error:se}=yv(f.v7_normalizeFormMethod,!1,L,O),ae=b.location,ee=yl(b.location,B,O&&O.state);ee=Je({},ee,t.history.encodeLocation(ee));let te=O&&O.replace!=null?O.replace:void 0,Q=mt.Push;te===!0?Q=mt.Replace:te===!1||X!=null&&Wn(X.formMethod)&&X.formAction===b.location.pathname+b.location.search&&(Q=mt.Replace);let ie=O&&"preventScrollReset"in O?O.preventScrollReset===!0:void 0,_e=(O&&O.flushSync)===!0,we=en({currentLocation:ae,nextLocation:ee,historyAction:Q});if(we){Pn(we,{state:"blocked",location:ee,proceed(){Pn(we,{state:"proceeding",proceed:void 0,reset:void 0,location:ee}),wr(P,O)},reset(){let Be=new Map(b.blockers);Be.set(we,Ia),ze({blockers:Be})}});return}return await Kt(Q,ee,{submission:X,pendingError:se,preventScrollReset:ie,replace:O&&O.replace,enableViewTransition:O&&O.viewTransition,flushSync:_e})}function Qi(){if(ot(),ze({revalidation:"loading"}),b.navigation.state!=="submitting"){if(b.navigation.state==="idle"){Kt(b.historyAction,b.location,{startUninterruptedRevalidation:!0});return}Kt(I||b.historyAction,b.navigation.location,{overrideNavigation:b.navigation,enableViewTransition:C===!0})}}async function Kt(P,O,L){w&&w.abort(),w=null,I=P,R=(L&&L.startUninterruptedRevalidation)===!0,dt(b.location,b.matches),y=(L&&L.preventScrollReset)===!0,C=(L&&L.enableViewTransition)===!0;let B=a||o,X=L&&L.overrideNavigation,se=as(B,O,u),ae=(L&&L.flushSync)===!0,ee=hn(se,B,O.pathname);if(ee.active&&ee.matches&&(se=ee.matches),!se){let{error:Ve,notFoundMatches:Pe,route:$e}=Xr(O.pathname);An(O,{matches:Pe,loaderData:{},errors:{[$e.id]:Ve}},{flushSync:ae});return}if(b.initialized&&!ge&&eb(b.location,O)&&!(L&&L.submission&&Wn(L.submission.formMethod))){An(O,{matches:se},{flushSync:ae});return}w=new AbortController;let te=Zs(t.history,O,w.signal,L&&L.submission),Q;if(L&&L.pendingError)Q=[ls(se).route.id,{type:Ue.error,error:L.pendingError}];else if(L&&L.submission&&Wn(L.submission.formMethod)){let Ve=await Bs(te,O,L.submission,se,ee.active,{replace:L.replace,flushSync:ae});if(Ve.shortCircuited)return;if(Ve.pendingActionResult){let[Pe,$e]=Ve.pendingActionResult;if(gn($e)&&Id($e.error)&&$e.error.status===404){w=null,An(O,{matches:Ve.matches,loaderData:{},errors:{[Pe]:$e.error}});return}}se=Ve.matches||se,Q=Ve.pendingActionResult,X=bh(O,L.submission),ae=!1,ee.active=!1,te=Zs(t.history,te.url,te.signal)}let{shortCircuited:ie,matches:_e,loaderData:we,errors:Be}=await $s(te,O,se,ee.active,X,L&&L.submission,L&&L.fetcherSubmission,L&&L.replace,L&&L.initialHydration===!0,ae,Q);ie||(w=null,An(O,Je({matches:_e||se},Rv(Q),{loaderData:we,errors:Be})))}async function Bs(P,O,L,B,X,se){se===void 0&&(se={}),ot();let ae=ob(O,L);if(ze({navigation:ae},{flushSync:se.flushSync===!0}),X){let Q=await Sr(B,O.pathname,P.signal);if(Q.type==="aborted")return{shortCircuited:!0};if(Q.type==="error"){let ie=ls(Q.partialMatches).route.id;return{matches:Q.partialMatches,pendingActionResult:[ie,{type:Ue.error,error:Q.error}]}}else if(Q.matches)B=Q.matches;else{let{notFoundMatches:ie,error:_e,route:we}=Xr(O.pathname);return{matches:ie,pendingActionResult:[we.id,{type:Ue.error,error:_e}]}}}let ee,te=xa(B,O);if(!te.route.action&&!te.route.lazy)ee={type:Ue.error,error:tn(405,{method:P.method,pathname:O.pathname,routeId:te.route.id})};else if(ee=(await Ot("action",b,P,[te],B,null))[te.route.id],P.signal.aborted)return{shortCircuited:!0};if(hs(ee)){let Q;return se&&se.replace!=null?Q=se.replace:Q=Tv(ee.response.headers.get("Location"),new URL(P.url),u)===b.location.pathname+b.location.search,await Ye(P,ee,!0,{submission:L,replace:Q}),{shortCircuited:!0}}if(wi(ee))throw tn(400,{type:"defer-action"});if(gn(ee)){let Q=ls(B,te.route.id);return(se&&se.replace)!==!0&&(I=mt.Push),{matches:B,pendingActionResult:[Q.route.id,ee]}}return{matches:B,pendingActionResult:[te.route.id,ee]}}async function $s(P,O,L,B,X,se,ae,ee,te,Q,ie){let _e=X||bh(O,se),we=se||ae||bv(_e),Be=!R&&(!f.v7_partialHydration||!te);if(B){if(Be){let Xe=Er(ie);ze(Je({navigation:_e},Xe!==void 0?{actionData:Xe}:{}),{flushSync:Q})}let Te=await Sr(L,O.pathname,P.signal);if(Te.type==="aborted")return{shortCircuited:!0};if(Te.type==="error"){let Xe=ls(Te.partialMatches).route.id;return{matches:Te.partialMatches,loaderData:{},errors:{[Xe]:Te.error}}}else if(Te.matches)L=Te.matches;else{let{error:Xe,notFoundMatches:Cr,route:ti}=Xr(O.pathname);return{matches:Cr,loaderData:{},errors:{[ti.id]:Xe}}}}let Ve=a||o,[Pe,$e]=_v(t.history,b,L,we,O,f.v7_partialHydration&&te===!0,f.v7_skipActionErrorRevalidation,ge,ct,et,pe,ne,de,Ve,u,ie);if(oe(Te=>!(L&&L.some(Xe=>Xe.route.id===Te))||Pe&&Pe.some(Xe=>Xe.route.id===Te)),G=++q,Pe.length===0&&$e.length===0){let Te=Zi();return An(O,Je({matches:L,loaderData:{},errors:ie&&gn(ie[1])?{[ie[0]]:ie[1].error}:null},Rv(ie),Te?{fetchers:new Map(b.fetchers)}:{}),{flushSync:Q}),{shortCircuited:!0}}if(Be){let Te={};if(!B){Te.navigation=_e;let Xe=Er(ie);Xe!==void 0&&(Te.actionData=Xe)}$e.length>0&&(Te.fetchers=Yi($e)),ze(Te,{flushSync:Q})}$e.forEach(Te=>{yt(Te.key),Te.controller&&ve.set(Te.key,Te.controller)});let nr=()=>$e.forEach(Te=>yt(Te.key));w&&w.signal.addEventListener("abort",nr);let{loaderResults:Jr,fetcherResults:bn}=await Xi(b,L,Pe,$e,P);if(P.signal.aborted)return{shortCircuited:!0};w&&w.signal.removeEventListener("abort",nr),$e.forEach(Te=>ve.delete(Te.key));let xn=bu(Jr);if(xn)return await Ye(P,xn.result,!0,{replace:ee}),{shortCircuited:!0};if(xn=bu(bn),xn)return de.add(xn.key),await Ye(P,xn.result,!0,{replace:ee}),{shortCircuited:!0};let{loaderData:Zr,errors:ei}=Sv(b,L,Jr,ie,$e,bn,Ne);Ne.forEach((Te,Xe)=>{Te.subscribe(Cr=>{(Cr||Te.done)&&Ne.delete(Xe)})}),f.v7_partialHydration&&te&&b.errors&&(ei=Je({},b.errors,ei));let zn=Zi(),rr=Ir(G),kn=zn||rr||$e.length>0;return Je({matches:L,loaderData:Zr,errors:ei},kn?{fetchers:new Map(b.fetchers)}:{})}function Er(P){if(P&&!gn(P[1]))return{[P[0]]:P[1].data};if(b.actionData)return Object.keys(b.actionData).length===0?null:b.actionData}function Yi(P){return P.forEach(O=>{let L=b.fetchers.get(O.key),B=Sa(void 0,L?L.data:void 0);b.fetchers.set(O.key,B)}),new Map(b.fetchers)}function dn(P,O,L,B){if(r)throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");yt(P);let X=(B&&B.flushSync)===!0,se=a||o,ae=$f(b.location,b.matches,u,f.v7_prependBasename,L,f.v7_relativeSplatPath,O,B==null?void 0:B.relative),ee=as(se,ae,u),te=hn(ee,se,ae);if(te.active&&te.matches&&(ee=te.matches),!ee){Mt(P,O,tn(404,{pathname:ae}),{flushSync:X});return}let{path:Q,submission:ie,error:_e}=yv(f.v7_normalizeFormMethod,!0,ae,B);if(_e){Mt(P,O,_e,{flushSync:X});return}let we=xa(ee,Q),Be=(B&&B.preventScrollReset)===!0;if(ie&&Wn(ie.formMethod)){Hs(P,O,Q,we,ee,te.active,X,Be,ie);return}ne.set(P,{routeId:O,path:Q}),sa(P,O,Q,we,ee,te.active,X,Be,ie)}async function Hs(P,O,L,B,X,se,ae,ee,te){ot(),ne.delete(P);function Q(tt){if(!tt.route.action&&!tt.route.lazy){let ir=tn(405,{method:te.formMethod,pathname:L,routeId:O});return Mt(P,O,ir,{flushSync:ae}),!0}return!1}if(!se&&Q(B))return;let ie=b.fetchers.get(P);Le(P,ab(te,ie),{flushSync:ae});let _e=new AbortController,we=Zs(t.history,L,_e.signal,te);if(se){let tt=await Sr(X,L,we.signal);if(tt.type==="aborted")return;if(tt.type==="error"){Mt(P,O,tt.error,{flushSync:ae});return}else if(tt.matches){if(X=tt.matches,B=xa(X,L),Q(B))return}else{Mt(P,O,tn(404,{pathname:L}),{flushSync:ae});return}}ve.set(P,_e);let Be=q,Pe=(await Ot("action",b,we,[B],X,P))[B.route.id];if(we.signal.aborted){ve.get(P)===_e&&ve.delete(P);return}if(f.v7_fetcherPersist&&pe.has(P)){if(hs(Pe)||gn(Pe)){Le(P,li(void 0));return}}else{if(hs(Pe))if(ve.delete(P),G>Be){Le(P,li(void 0));return}else return de.add(P),Le(P,Sa(te)),Ye(we,Pe,!1,{fetcherSubmission:te,preventScrollReset:ee});if(gn(Pe)){Mt(P,O,Pe.error);return}}if(wi(Pe))throw tn(400,{type:"defer-action"});let $e=b.navigation.location||b.location,nr=Zs(t.history,$e,_e.signal),Jr=a||o,bn=b.navigation.state!=="idle"?as(Jr,b.navigation.location,u):b.matches;Se(bn,"Didn't find any matches after fetcher action");let xn=++q;Z.set(P,xn);let Zr=Sa(te,Pe.data);b.fetchers.set(P,Zr);let[ei,zn]=_v(t.history,b,bn,te,$e,!1,f.v7_skipActionErrorRevalidation,ge,ct,et,pe,ne,de,Jr,u,[B.route.id,Pe]);zn.filter(tt=>tt.key!==P).forEach(tt=>{let ir=tt.key,Ks=b.fetchers.get(ir),eu=Sa(void 0,Ks?Ks.data:void 0);b.fetchers.set(ir,eu),yt(ir),tt.controller&&ve.set(ir,tt.controller)}),ze({fetchers:new Map(b.fetchers)});let rr=()=>zn.forEach(tt=>yt(tt.key));_e.signal.addEventListener("abort",rr);let{loaderResults:kn,fetcherResults:Te}=await Xi(b,bn,ei,zn,nr);if(_e.signal.aborted)return;_e.signal.removeEventListener("abort",rr),Z.delete(P),ve.delete(P),zn.forEach(tt=>ve.delete(tt.key));let Xe=bu(kn);if(Xe)return Ye(nr,Xe.result,!1,{preventScrollReset:ee});if(Xe=bu(Te),Xe)return de.add(Xe.key),Ye(nr,Xe.result,!1,{preventScrollReset:ee});let{loaderData:Cr,errors:ti}=Sv(b,bn,kn,void 0,zn,Te,Ne);if(b.fetchers.has(P)){let tt=li(Pe.data);b.fetchers.set(P,tt)}Ir(xn),b.navigation.state==="loading"&&xn>G?(Se(I,"Expected pending action"),w&&w.abort(),An(b.navigation.location,{matches:bn,loaderData:Cr,errors:ti,fetchers:new Map(b.fetchers)})):(ze({errors:ti,loaderData:Cv(b.loaderData,Cr,bn,ti),fetchers:new Map(b.fetchers)}),ge=!1)}async function sa(P,O,L,B,X,se,ae,ee,te){let Q=b.fetchers.get(P);Le(P,Sa(te,Q?Q.data:void 0),{flushSync:ae});let ie=new AbortController,_e=Zs(t.history,L,ie.signal);if(se){let Pe=await Sr(X,L,_e.signal);if(Pe.type==="aborted")return;if(Pe.type==="error"){Mt(P,O,Pe.error,{flushSync:ae});return}else if(Pe.matches)X=Pe.matches,B=xa(X,L);else{Mt(P,O,tn(404,{pathname:L}),{flushSync:ae});return}}ve.set(P,ie);let we=q,Ve=(await Ot("loader",b,_e,[B],X,P))[B.route.id];if(wi(Ve)&&(Ve=await Tm(Ve,_e.signal,!0)||Ve),ve.get(P)===ie&&ve.delete(P),!_e.signal.aborted){if(pe.has(P)){Le(P,li(void 0));return}if(hs(Ve))if(G>we){Le(P,li(void 0));return}else{de.add(P),await Ye(_e,Ve,!1,{preventScrollReset:ee});return}if(gn(Ve)){Mt(P,O,Ve.error);return}Se(!wi(Ve),"Unhandled fetcher deferred data"),Le(P,li(Ve.data))}}async function Ye(P,O,L,B){let{submission:X,fetcherSubmission:se,preventScrollReset:ae,replace:ee}=B===void 0?{}:B;O.response.headers.has("X-Remix-Revalidate")&&(ge=!0);let te=O.response.headers.get("Location");Se(te,"Expected a Location header on the redirect Response"),te=Tv(te,new URL(P.url),u);let Q=yl(b.location,te,{_isRedirect:!0});if(n){let Pe=!1;if(O.response.headers.has("X-Remix-Reload-Document"))Pe=!0;else if(Em.test(te)){const $e=t.history.createURL(te);Pe=$e.origin!==e.location.origin||Jo($e.pathname,u)==null}if(Pe){ee?e.location.replace(te):e.location.assign(te);return}}w=null;let ie=ee===!0||O.response.headers.has("X-Remix-Replace")?mt.Replace:mt.Push,{formMethod:_e,formAction:we,formEncType:Be}=b.navigation;!X&&!se&&_e&&we&&Be&&(X=bv(b.navigation));let Ve=X||se;if(zP.has(O.response.status)&&Ve&&Wn(Ve.formMethod))await Kt(ie,Q,{submission:Je({},Ve,{formAction:te}),preventScrollReset:ae||y,enableViewTransition:L?C:void 0});else{let Pe=bh(Q,X);await Kt(ie,Q,{overrideNavigation:Pe,fetcherSubmission:se,preventScrollReset:ae||y,enableViewTransition:L?C:void 0})}}async function Ot(P,O,L,B,X,se){let ae,ee={};try{ae=await QP(c,P,O,L,B,X,se,s,i)}catch(te){return B.forEach(Q=>{ee[Q.route.id]={type:Ue.error,error:te}}),ee}for(let[te,Q]of Object.entries(ae))if(tb(Q)){let ie=Q.result;ee[te]={type:Ue.redirect,response:JP(ie,L,te,X,u,f.v7_relativeSplatPath)}}else ee[te]=await XP(Q);return ee}async function Xi(P,O,L,B,X){let se=P.matches,ae=Ot("loader",P,X,L,O,null),ee=Promise.all(B.map(async ie=>{if(ie.matches&&ie.match&&ie.controller){let we=(await Ot("loader",P,Zs(t.history,ie.path,ie.controller.signal),[ie.match],ie.matches,ie.key))[ie.match.route.id];return{[ie.key]:we}}else return Promise.resolve({[ie.key]:{type:Ue.error,error:tn(404,{pathname:ie.path})}})})),te=await ae,Q=(await ee).reduce((ie,_e)=>Object.assign(ie,_e),{});return await Promise.all([ib(O,te,X.signal,se,P.loaderData),sb(O,Q,B)]),{loaderResults:te,fetcherResults:Q}}function ot(){ge=!0,ct.push(...oe()),ne.forEach((P,O)=>{ve.has(O)&&et.add(O),yt(O)})}function Le(P,O,L){L===void 0&&(L={}),b.fetchers.set(P,O),ze({fetchers:new Map(b.fetchers)},{flushSync:(L&&L.flushSync)===!0})}function Mt(P,O,L,B){B===void 0&&(B={});let X=ls(b.matches,O);Zt(P),ze({errors:{[X.route.id]:L},fetchers:new Map(b.fetchers)},{flushSync:(B&&B.flushSync)===!0})}function Tr(P){return f.v7_fetcherPersist&&(re.set(P,(re.get(P)||0)+1),pe.has(P)&&pe.delete(P)),b.fetchers.get(P)||BP}function Zt(P){let O=b.fetchers.get(P);ve.has(P)&&!(O&&O.state==="loading"&&Z.has(P))&&yt(P),ne.delete(P),Z.delete(P),de.delete(P),pe.delete(P),et.delete(P),b.fetchers.delete(P)}function Gs(P){if(f.v7_fetcherPersist){let O=(re.get(P)||0)-1;O<=0?(re.delete(P),pe.add(P)):re.set(P,O)}else Zt(P);ze({fetchers:new Map(b.fetchers)})}function yt(P){let O=ve.get(P);O&&(O.abort(),ve.delete(P))}function Ji(P){for(let O of P){let L=Tr(O),B=li(L.data);b.fetchers.set(O,B)}}function Zi(){let P=[],O=!1;for(let L of de){let B=b.fetchers.get(L);Se(B,"Expected fetcher: "+L),B.state==="loading"&&(de.delete(L),P.push(L),O=!0)}return Ji(P),O}function Ir(P){let O=[];for(let[L,B]of Z)if(B<P){let X=b.fetchers.get(L);Se(X,"Expected fetcher: "+L),X.state==="loading"&&(yt(L),Z.delete(L),O.push(L))}return Ji(O),O.length>0}function Ws(P,O){let L=b.blockers.get(P)||Ia;return Ge.get(P)!==O&&Ge.set(P,O),L}function qs(P){b.blockers.delete(P),Ge.delete(P)}function Pn(P,O){let L=b.blockers.get(P)||Ia;Se(L.state==="unblocked"&&O.state==="blocked"||L.state==="blocked"&&O.state==="blocked"||L.state==="blocked"&&O.state==="proceeding"||L.state==="blocked"&&O.state==="unblocked"||L.state==="proceeding"&&O.state==="unblocked","Invalid blocker state transition: "+L.state+" -> "+O.state);let B=new Map(b.blockers);B.set(P,O),ze({blockers:B})}function en(P){let{currentLocation:O,nextLocation:L,historyAction:B}=P;if(Ge.size===0)return;Ge.size>1&&Fo(!1,"A router only supports one blocker at a time");let X=Array.from(Ge.entries()),[se,ae]=X[X.length-1],ee=b.blockers.get(se);if(!(ee&&ee.state==="proceeding")&&ae({currentLocation:O,nextLocation:L,historyAction:B}))return se}function Xr(P){let O=tn(404,{pathname:P}),L=a||o,{matches:B,route:X}=Av(L);return oe(),{notFoundMatches:B,route:X,error:O}}function oe(P){let O=[];return Ne.forEach((L,B)=>{(!P||P(B))&&(L.cancel(),O.push(B),Ne.delete(B))}),O}function Ae(P,O,L){if(E=P,N=O,A=L||null,!T&&b.navigation===Ph){T=!0;let B=Lt(b.location,b.matches);B!=null&&ze({restoreScrollPosition:B})}return()=>{E=null,N=null,A=null}}function Oe(P,O){return A&&A(P,O.map(B=>_P(B,b.loaderData)))||P.key}function dt(P,O){if(E&&N){let L=Oe(P,O);E[L]=N()}}function Lt(P,O){if(E){let L=Oe(P,O),B=E[L];if(typeof B=="number")return B}return null}function hn(P,O,L){if(h)if(P){if(Object.keys(P[0].params).length>0)return{active:!0,matches:Qu(O,L,u,!0)}}else return{active:!0,matches:Qu(O,L,u,!0)||[]};return{active:!1,matches:null}}async function Sr(P,O,L){if(!h)return{type:"success",matches:P};let B=P;for(;;){let X=a==null,se=a||o,ae=s;try{await h({path:O,matches:B,patch:(Q,ie)=>{L.aborted||Ev(Q,ie,se,ae,i)}})}catch(Q){return{type:"error",error:Q,partialMatches:B}}finally{X&&!L.aborted&&(o=[...o])}if(L.aborted)return{type:"aborted"};let ee=as(se,O,u);if(ee)return{type:"success",matches:ee};let te=Qu(se,O,u,!0);if(!te||B.length===te.length&&B.every((Q,ie)=>Q.route.id===te[ie].route.id))return{type:"success",matches:null};B=te}}function es(P){s={},a=xc(P,i,void 0,s)}function Zl(P,O){let L=a==null;Ev(P,O,a||o,s,i),L&&(o=[...o],ze({}))}return j={get basename(){return u},get future(){return f},get state(){return b},get routes(){return o},get window(){return e},initialize:Ki,subscribe:Rn,enableScrollRestoration:Ae,navigate:wr,fetch:dn,revalidate:Qi,createHref:P=>t.history.createHref(P),encodeLocation:P=>t.history.encodeLocation(P),getFetcher:Tr,deleteFetcher:Gs,dispose:_r,getBlocker:Ws,deleteBlocker:qs,patchRoutes:Zl,_internalFetchControllers:ve,_internalActiveDeferreds:Ne,_internalSetRoutes:es},j}function GP(t){return t!=null&&("formData"in t&&t.formData!=null||"body"in t&&t.body!==void 0)}function $f(t,e,n,r,i,s,o,a){let u,c;if(o){u=[];for(let f of e)if(u.push(f),f.route.id===o){c=f;break}}else u=e,c=e[e.length-1];let h=wm(i||".",_m(u,s),Jo(t.pathname,n)||t.pathname,a==="path");if(i==null&&(h.search=t.search,h.hash=t.hash),(i==null||i===""||i===".")&&c){let f=Im(h.search);if(c.route.index&&!f)h.search=h.search?h.search.replace(/^\?/,"?index&"):"?index";else if(!c.route.index&&f){let g=new URLSearchParams(h.search),m=g.getAll("index");g.delete("index"),m.filter(A=>A).forEach(A=>g.append("index",A));let E=g.toString();h.search=E?"?"+E:""}}return r&&n!=="/"&&(h.pathname=h.pathname==="/"?n:Vr([n,h.pathname])),Is(h)}function yv(t,e,n,r){if(!r||!GP(r))return{path:n};if(r.formMethod&&!rb(r.formMethod))return{path:n,error:tn(405,{method:r.formMethod})};let i=()=>({path:n,error:tn(400,{type:"invalid-body"})}),s=r.formMethod||"get",o=t?s.toUpperCase():s.toLowerCase(),a=mT(n);if(r.body!==void 0){if(r.formEncType==="text/plain"){if(!Wn(o))return i();let g=typeof r.body=="string"?r.body:r.body instanceof FormData||r.body instanceof URLSearchParams?Array.from(r.body.entries()).reduce((m,E)=>{let[A,N]=E;return""+m+A+"="+N+`
`},""):String(r.body);return{path:n,submission:{formMethod:o,formAction:a,formEncType:r.formEncType,formData:void 0,json:void 0,text:g}}}else if(r.formEncType==="application/json"){if(!Wn(o))return i();try{let g=typeof r.body=="string"?JSON.parse(r.body):r.body;return{path:n,submission:{formMethod:o,formAction:a,formEncType:r.formEncType,formData:void 0,json:g,text:void 0}}}catch{return i()}}}Se(typeof FormData=="function","FormData is not available in this environment");let u,c;if(r.formData)u=Gf(r.formData),c=r.formData;else if(r.body instanceof FormData)u=Gf(r.body),c=r.body;else if(r.body instanceof URLSearchParams)u=r.body,c=Iv(u);else if(r.body==null)u=new URLSearchParams,c=new FormData;else try{u=new URLSearchParams(r.body),c=Iv(u)}catch{return i()}let h={formMethod:o,formAction:a,formEncType:r&&r.formEncType||"application/x-www-form-urlencoded",formData:c,json:void 0,text:void 0};if(Wn(h.formMethod))return{path:n,submission:h};let f=Gi(n);return e&&f.search&&Im(f.search)&&u.append("index",""),f.search="?"+u,{path:Is(f),submission:h}}function vv(t,e,n){n===void 0&&(n=!1);let r=t.findIndex(i=>i.route.id===e);return r>=0?t.slice(0,n?r+1:r):t}function _v(t,e,n,r,i,s,o,a,u,c,h,f,g,m,E,A){let N=A?gn(A[1])?A[1].error:A[1].data:void 0,T=t.createURL(e.location),_=t.createURL(i),S=n;s&&e.errors?S=vv(n,Object.keys(e.errors)[0],!0):A&&gn(A[1])&&(S=vv(n,A[0]));let D=A?A[1].statusCode:void 0,j=o&&D&&D>=400,b=S.filter((y,w)=>{let{route:C}=y;if(C.lazy)return!0;if(C.loader==null)return!1;if(s)return Hf(C,e.loaderData,e.errors);if(WP(e.loaderData,e.matches[w],y)||u.some(R=>R===y.route.id))return!0;let k=e.matches[w],x=y;return wv(y,Je({currentUrl:T,currentParams:k.params,nextUrl:_,nextParams:x.params},r,{actionResult:N,actionStatus:D,defaultShouldRevalidate:j?!1:a||T.pathname+T.search===_.pathname+_.search||T.search!==_.search||fT(k,x)}))}),I=[];return f.forEach((y,w)=>{if(s||!n.some(ge=>ge.route.id===y.routeId)||h.has(w))return;let C=as(m,y.path,E);if(!C){I.push({key:w,routeId:y.routeId,path:y.path,matches:null,match:null,controller:null});return}let k=e.fetchers.get(w),x=xa(C,y.path),R=!1;g.has(w)?R=!1:c.has(w)?(c.delete(w),R=!0):k&&k.state!=="idle"&&k.data===void 0?R=a:R=wv(x,Je({currentUrl:T,currentParams:e.matches[e.matches.length-1].params,nextUrl:_,nextParams:n[n.length-1].params},r,{actionResult:N,actionStatus:D,defaultShouldRevalidate:j?!1:a})),R&&I.push({key:w,routeId:y.routeId,path:y.path,matches:C,match:x,controller:new AbortController})}),[b,I]}function Hf(t,e,n){if(t.lazy)return!0;if(!t.loader)return!1;let r=e!=null&&e[t.id]!==void 0,i=n!=null&&n[t.id]!==void 0;return!r&&i?!1:typeof t.loader=="function"&&t.loader.hydrate===!0?!0:!r&&!i}function WP(t,e,n){let r=!e||n.route.id!==e.route.id,i=t[n.route.id]===void 0;return r||i}function fT(t,e){let n=t.route.path;return t.pathname!==e.pathname||n!=null&&n.endsWith("*")&&t.params["*"]!==e.params["*"]}function wv(t,e){if(t.route.shouldRevalidate){let n=t.route.shouldRevalidate(e);if(typeof n=="boolean")return n}return e.defaultShouldRevalidate}function Ev(t,e,n,r,i){var s;let o;if(t){let c=r[t];Se(c,"No route found to patch children into: routeId = "+t),c.children||(c.children=[]),o=c.children}else o=n;let a=e.filter(c=>!o.some(h=>pT(c,h))),u=xc(a,i,[t||"_","patch",String(((s=o)==null?void 0:s.length)||"0")],r);o.push(...u)}function pT(t,e){return"id"in t&&"id"in e&&t.id===e.id?!0:t.index===e.index&&t.path===e.path&&t.caseSensitive===e.caseSensitive?(!t.children||t.children.length===0)&&(!e.children||e.children.length===0)?!0:t.children.every((n,r)=>{var i;return(i=e.children)==null?void 0:i.some(s=>pT(n,s))}):!1}async function qP(t,e,n){if(!t.lazy)return;let r=await t.lazy();if(!t.lazy)return;let i=n[t.id];Se(i,"No route found in manifest");let s={};for(let o in r){let u=i[o]!==void 0&&o!=="hasErrorBoundary";Fo(!u,'Route "'+i.id+'" has a static property "'+o+'" defined but its lazy function is also returning a value for this property. '+('The lazy route property "'+o+'" will be ignored.')),!u&&!yP.has(o)&&(s[o]=r[o])}Object.assign(i,s),Object.assign(i,Je({},e(i),{lazy:void 0}))}async function KP(t){let{matches:e}=t,n=e.filter(i=>i.shouldLoad);return(await Promise.all(n.map(i=>i.resolve()))).reduce((i,s,o)=>Object.assign(i,{[n[o].route.id]:s}),{})}async function QP(t,e,n,r,i,s,o,a,u,c){let h=s.map(m=>m.route.lazy?qP(m.route,u,a):void 0),f=s.map((m,E)=>{let A=h[E],N=i.some(_=>_.route.id===m.route.id);return Je({},m,{shouldLoad:N,resolve:async _=>(_&&r.method==="GET"&&(m.route.lazy||m.route.loader)&&(N=!0),N?YP(e,r,m,A,_,c):Promise.resolve({type:Ue.data,result:void 0}))})}),g=await t({matches:f,request:r,params:s[0].params,fetcherKey:o,context:c});try{await Promise.all(h)}catch{}return g}async function YP(t,e,n,r,i,s){let o,a,u=c=>{let h,f=new Promise((E,A)=>h=A);a=()=>h(),e.signal.addEventListener("abort",a);let g=E=>typeof c!="function"?Promise.reject(new Error("You cannot call the handler for a route which defines a boolean "+('"'+t+'" [routeId: '+n.route.id+"]"))):c({request:e,params:n.params,context:s},...E!==void 0?[E]:[]),m=(async()=>{try{return{type:"data",result:await(i?i(A=>g(A)):g())}}catch(E){return{type:"error",result:E}}})();return Promise.race([m,f])};try{let c=n.route[t];if(r)if(c){let h,[f]=await Promise.all([u(c).catch(g=>{h=g}),r]);if(h!==void 0)throw h;o=f}else if(await r,c=n.route[t],c)o=await u(c);else if(t==="action"){let h=new URL(e.url),f=h.pathname+h.search;throw tn(405,{method:e.method,pathname:f,routeId:n.route.id})}else return{type:Ue.data,result:void 0};else if(c)o=await u(c);else{let h=new URL(e.url),f=h.pathname+h.search;throw tn(404,{pathname:f})}Se(o.result!==void 0,"You defined "+(t==="action"?"an action":"a loader")+" for route "+('"'+n.route.id+"\" but didn't return anything from your `"+t+"` ")+"function. Please return a value or `null`.")}catch(c){return{type:Ue.error,result:c}}finally{a&&e.signal.removeEventListener("abort",a)}return o}async function XP(t){let{result:e,type:n}=t;if(gT(e)){let c;try{let h=e.headers.get("Content-Type");h&&/\bapplication\/json\b/.test(h)?e.body==null?c=null:c=await e.json():c=await e.text()}catch(h){return{type:Ue.error,error:h}}return n===Ue.error?{type:Ue.error,error:new kc(e.status,e.statusText,c),statusCode:e.status,headers:e.headers}:{type:Ue.data,data:c,statusCode:e.status,headers:e.headers}}if(n===Ue.error){if(Pv(e)){var r;if(e.data instanceof Error){var i;return{type:Ue.error,error:e.data,statusCode:(i=e.init)==null?void 0:i.status}}e=new kc(((r=e.init)==null?void 0:r.status)||500,void 0,e.data)}return{type:Ue.error,error:e,statusCode:Id(e)?e.status:void 0}}if(nb(e)){var s,o;return{type:Ue.deferred,deferredData:e,statusCode:(s=e.init)==null?void 0:s.status,headers:((o=e.init)==null?void 0:o.headers)&&new Headers(e.init.headers)}}if(Pv(e)){var a,u;return{type:Ue.data,data:e.data,statusCode:(a=e.init)==null?void 0:a.status,headers:(u=e.init)!=null&&u.headers?new Headers(e.init.headers):void 0}}return{type:Ue.data,data:e}}function JP(t,e,n,r,i,s){let o=t.headers.get("Location");if(Se(o,"Redirects returned/thrown from loaders/actions must have a Location header"),!Em.test(o)){let a=r.slice(0,r.findIndex(u=>u.route.id===n)+1);o=$f(new URL(e.url),a,i,!0,o,s),t.headers.set("Location",o)}return t}function Tv(t,e,n){if(Em.test(t)){let r=t,i=r.startsWith("//")?new URL(e.protocol+r):new URL(r),s=Jo(i.pathname,n)!=null;if(i.origin===e.origin&&s)return i.pathname+i.search+i.hash}return t}function Zs(t,e,n,r){let i=t.createURL(mT(e)).toString(),s={signal:n};if(r&&Wn(r.formMethod)){let{formMethod:o,formEncType:a}=r;s.method=o.toUpperCase(),a==="application/json"?(s.headers=new Headers({"Content-Type":a}),s.body=JSON.stringify(r.json)):a==="text/plain"?s.body=r.text:a==="application/x-www-form-urlencoded"&&r.formData?s.body=Gf(r.formData):s.body=r.formData}return new Request(i,s)}function Gf(t){let e=new URLSearchParams;for(let[n,r]of t.entries())e.append(n,typeof r=="string"?r:r.name);return e}function Iv(t){let e=new FormData;for(let[n,r]of t.entries())e.append(n,r);return e}function ZP(t,e,n,r,i){let s={},o=null,a,u=!1,c={},h=n&&gn(n[1])?n[1].error:void 0;return t.forEach(f=>{if(!(f.route.id in e))return;let g=f.route.id,m=e[g];if(Se(!hs(m),"Cannot handle redirect results in processLoaderData"),gn(m)){let E=m.error;h!==void 0&&(E=h,h=void 0),o=o||{};{let A=ls(t,g);o[A.route.id]==null&&(o[A.route.id]=E)}s[g]=void 0,u||(u=!0,a=Id(m.error)?m.error.status:500),m.headers&&(c[g]=m.headers)}else wi(m)?(r.set(g,m.deferredData),s[g]=m.deferredData.data,m.statusCode!=null&&m.statusCode!==200&&!u&&(a=m.statusCode),m.headers&&(c[g]=m.headers)):(s[g]=m.data,m.statusCode&&m.statusCode!==200&&!u&&(a=m.statusCode),m.headers&&(c[g]=m.headers))}),h!==void 0&&n&&(o={[n[0]]:h},s[n[0]]=void 0),{loaderData:s,errors:o,statusCode:a||200,loaderHeaders:c}}function Sv(t,e,n,r,i,s,o){let{loaderData:a,errors:u}=ZP(e,n,r,o);return i.forEach(c=>{let{key:h,match:f,controller:g}=c,m=s[h];if(Se(m,"Did not find corresponding fetcher result"),!(g&&g.signal.aborted))if(gn(m)){let E=ls(t.matches,f==null?void 0:f.route.id);u&&u[E.route.id]||(u=Je({},u,{[E.route.id]:m.error})),t.fetchers.delete(h)}else if(hs(m))Se(!1,"Unhandled fetcher revalidation redirect");else if(wi(m))Se(!1,"Unhandled fetcher deferred data");else{let E=li(m.data);t.fetchers.set(h,E)}}),{loaderData:a,errors:u}}function Cv(t,e,n,r){let i=Je({},e);for(let s of n){let o=s.route.id;if(e.hasOwnProperty(o)?e[o]!==void 0&&(i[o]=e[o]):t[o]!==void 0&&s.route.loader&&(i[o]=t[o]),r&&r.hasOwnProperty(o))break}return i}function Rv(t){return t?gn(t[1])?{actionData:{}}:{actionData:{[t[0]]:t[1].data}}:{}}function ls(t,e){return(e?t.slice(0,t.findIndex(r=>r.route.id===e)+1):[...t]).reverse().find(r=>r.route.hasErrorBoundary===!0)||t[0]}function Av(t){let e=t.length===1?t[0]:t.find(n=>n.index||!n.path||n.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:e}],route:e}}function tn(t,e){let{pathname:n,routeId:r,method:i,type:s,message:o}=e===void 0?{}:e,a="Unknown Server Error",u="Unknown @remix-run/router error";return t===400?(a="Bad Request",i&&n&&r?u="You made a "+i+' request to "'+n+'" but '+('did not provide a `loader` for route "'+r+'", ')+"so there is no way to handle the request.":s==="defer-action"?u="defer() is not supported in actions":s==="invalid-body"&&(u="Unable to encode submission body")):t===403?(a="Forbidden",u='Route "'+r+'" does not match URL "'+n+'"'):t===404?(a="Not Found",u='No route matches URL "'+n+'"'):t===405&&(a="Method Not Allowed",i&&n&&r?u="You made a "+i.toUpperCase()+' request to "'+n+'" but '+('did not provide an `action` for route "'+r+'", ')+"so there is no way to handle the request.":i&&(u='Invalid request method "'+i.toUpperCase()+'"')),new kc(t||500,a,new Error(u),!0)}function bu(t){let e=Object.entries(t);for(let n=e.length-1;n>=0;n--){let[r,i]=e[n];if(hs(i))return{key:r,result:i}}}function mT(t){let e=typeof t=="string"?Gi(t):t;return Is(Je({},e,{hash:""}))}function eb(t,e){return t.pathname!==e.pathname||t.search!==e.search?!1:t.hash===""?e.hash!=="":t.hash===e.hash?!0:e.hash!==""}function tb(t){return gT(t.result)&&jP.has(t.result.status)}function wi(t){return t.type===Ue.deferred}function gn(t){return t.type===Ue.error}function hs(t){return(t&&t.type)===Ue.redirect}function Pv(t){return typeof t=="object"&&t!=null&&"type"in t&&"data"in t&&"init"in t&&t.type==="DataWithResponseInit"}function nb(t){let e=t;return e&&typeof e=="object"&&typeof e.data=="object"&&typeof e.subscribe=="function"&&typeof e.cancel=="function"&&typeof e.resolveData=="function"}function gT(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.headers=="object"&&typeof t.body<"u"}function rb(t){return UP.has(t.toLowerCase())}function Wn(t){return VP.has(t.toLowerCase())}async function ib(t,e,n,r,i){let s=Object.entries(e);for(let o=0;o<s.length;o++){let[a,u]=s[o],c=t.find(g=>(g==null?void 0:g.route.id)===a);if(!c)continue;let h=r.find(g=>g.route.id===c.route.id),f=h!=null&&!fT(h,c)&&(i&&i[c.route.id])!==void 0;wi(u)&&f&&await Tm(u,n,!1).then(g=>{g&&(e[a]=g)})}}async function sb(t,e,n){for(let r=0;r<n.length;r++){let{key:i,routeId:s,controller:o}=n[r],a=e[i];t.find(c=>(c==null?void 0:c.route.id)===s)&&wi(a)&&(Se(o,"Expected an AbortController for revalidating fetcher deferred result"),await Tm(a,o.signal,!0).then(c=>{c&&(e[i]=c)}))}}async function Tm(t,e,n){if(n===void 0&&(n=!1),!await t.deferredData.resolveData(e)){if(n)try{return{type:Ue.data,data:t.deferredData.unwrappedData}}catch(i){return{type:Ue.error,error:i}}return{type:Ue.data,data:t.deferredData.data}}}function Im(t){return new URLSearchParams(t).getAll("index").some(e=>e==="")}function xa(t,e){let n=typeof e=="string"?Gi(e).search:e.search;if(t[t.length-1].route.index&&Im(n||""))return t[t.length-1];let r=cT(t);return r[r.length-1]}function bv(t){let{formMethod:e,formAction:n,formEncType:r,text:i,formData:s,json:o}=t;if(!(!e||!n||!r)){if(i!=null)return{formMethod:e,formAction:n,formEncType:r,formData:void 0,json:void 0,text:i};if(s!=null)return{formMethod:e,formAction:n,formEncType:r,formData:s,json:void 0,text:void 0};if(o!==void 0)return{formMethod:e,formAction:n,formEncType:r,formData:void 0,json:o,text:void 0}}}function bh(t,e){return e?{state:"loading",location:t,formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text}:{state:"loading",location:t,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0}}function ob(t,e){return{state:"submitting",location:t,formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text}}function Sa(t,e){return t?{state:"loading",formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text,data:e}:{state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:e}}function ab(t,e){return{state:"submitting",formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text,data:e?e.data:void 0}}function li(t){return{state:"idle",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:t}}function lb(t,e){try{let n=t.sessionStorage.getItem(hT);if(n){let r=JSON.parse(n);for(let[i,s]of Object.entries(r||{}))s&&Array.isArray(s)&&e.set(i,new Set(s||[]))}}catch{}}function ub(t,e){if(e.size>0){let n={};for(let[r,i]of e)n[r]=[...i];try{t.sessionStorage.setItem(hT,JSON.stringify(n))}catch(r){Fo(!1,"Failed to save applied view transitions in sessionStorage ("+r+").")}}}/**
 * React Router v6.28.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Nc(){return Nc=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Nc.apply(this,arguments)}const Sd=U.createContext(null),yT=U.createContext(null),Os=U.createContext(null),Sm=U.createContext(null),Wi=U.createContext({outlet:null,matches:[],isDataRoute:!1}),vT=U.createContext(null);function cb(t,e){let{relative:n}=e===void 0?{}:e;Ul()||Se(!1);let{basename:r,navigator:i}=U.useContext(Os),{hash:s,pathname:o,search:a}=wT(t,{relative:n}),u=o;return r!=="/"&&(u=o==="/"?r:Vr([r,o])),i.createHref({pathname:u,search:a,hash:s})}function Ul(){return U.useContext(Sm)!=null}function jl(){return Ul()||Se(!1),U.useContext(Sm).location}function _T(t){U.useContext(Os).static||U.useLayoutEffect(t)}function Cm(){let{isDataRoute:t}=U.useContext(Wi);return t?Ib():db()}function db(){Ul()||Se(!1);let t=U.useContext(Sd),{basename:e,future:n,navigator:r}=U.useContext(Os),{matches:i}=U.useContext(Wi),{pathname:s}=jl(),o=JSON.stringify(_m(i,n.v7_relativeSplatPath)),a=U.useRef(!1);return _T(()=>{a.current=!0}),U.useCallback(function(c,h){if(h===void 0&&(h={}),!a.current)return;if(typeof c=="number"){r.go(c);return}let f=wm(c,JSON.parse(o),s,h.relative==="path");t==null&&e!=="/"&&(f.pathname=f.pathname==="/"?e:Vr([e,f.pathname])),(h.replace?r.replace:r.push)(f,h.state,h)},[e,r,o,s,t])}function hb(){let{matches:t}=U.useContext(Wi),e=t[t.length-1];return e?e.params:{}}function wT(t,e){let{relative:n}=e===void 0?{}:e,{future:r}=U.useContext(Os),{matches:i}=U.useContext(Wi),{pathname:s}=jl(),o=JSON.stringify(_m(i,r.v7_relativeSplatPath));return U.useMemo(()=>wm(t,JSON.parse(o),s,n==="path"),[t,o,s,n])}function fb(t,e,n,r){Ul()||Se(!1);let{navigator:i}=U.useContext(Os),{matches:s}=U.useContext(Wi),o=s[s.length-1],a=o?o.params:{};o&&o.pathname;let u=o?o.pathnameBase:"/";o&&o.route;let c=jl(),h;h=c;let f=h.pathname||"/",g=f;if(u!=="/"){let A=u.replace(/^\//,"").split("/");g="/"+f.replace(/^\//,"").split("/").slice(A.length).join("/")}let m=as(t,{pathname:g});return vb(m&&m.map(A=>Object.assign({},A,{params:Object.assign({},a,A.params),pathname:Vr([u,i.encodeLocation?i.encodeLocation(A.pathname).pathname:A.pathname]),pathnameBase:A.pathnameBase==="/"?u:Vr([u,i.encodeLocation?i.encodeLocation(A.pathnameBase).pathname:A.pathnameBase])})),s,n,r)}function pb(){let t=Tb(),e=Id(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return U.createElement(U.Fragment,null,U.createElement("h2",null,"Unexpected Application Error!"),U.createElement("h3",{style:{fontStyle:"italic"}},e),n?U.createElement("pre",{style:i},n):null,null)}const mb=U.createElement(pb,null);class gb extends U.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?U.createElement(Wi.Provider,{value:this.props.routeContext},U.createElement(vT.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function yb(t){let{routeContext:e,match:n,children:r}=t,i=U.useContext(Sd);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),U.createElement(Wi.Provider,{value:e},r)}function vb(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var s;if(!n)return null;if(n.errors)t=n.matches;else if((s=r)!=null&&s.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let o=t,a=(i=n)==null?void 0:i.errors;if(a!=null){let h=o.findIndex(f=>f.route.id&&(a==null?void 0:a[f.route.id])!==void 0);h>=0||Se(!1),o=o.slice(0,Math.min(o.length,h+1))}let u=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let h=0;h<o.length;h++){let f=o[h];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(c=h),f.route.id){let{loaderData:g,errors:m}=n,E=f.route.loader&&g[f.route.id]===void 0&&(!m||m[f.route.id]===void 0);if(f.route.lazy||E){u=!0,c>=0?o=o.slice(0,c+1):o=[o[0]];break}}}return o.reduceRight((h,f,g)=>{let m,E=!1,A=null,N=null;n&&(m=a&&f.route.id?a[f.route.id]:void 0,A=f.route.errorElement||mb,u&&(c<0&&g===0?(Sb("route-fallback"),E=!0,N=null):c===g&&(E=!0,N=f.route.hydrateFallbackElement||null)));let T=e.concat(o.slice(0,g+1)),_=()=>{let S;return m?S=A:E?S=N:f.route.Component?S=U.createElement(f.route.Component,null):f.route.element?S=f.route.element:S=h,U.createElement(yb,{match:f,routeContext:{outlet:h,matches:T,isDataRoute:n!=null},children:S})};return n&&(f.route.ErrorBoundary||f.route.errorElement||g===0)?U.createElement(gb,{location:n.location,revalidation:n.revalidation,component:A,error:m,children:_(),routeContext:{outlet:null,matches:T,isDataRoute:!0}}):_()},null)}var ET=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(ET||{}),Dc=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(Dc||{});function _b(t){let e=U.useContext(Sd);return e||Se(!1),e}function wb(t){let e=U.useContext(yT);return e||Se(!1),e}function Eb(t){let e=U.useContext(Wi);return e||Se(!1),e}function TT(t){let e=Eb(),n=e.matches[e.matches.length-1];return n.route.id||Se(!1),n.route.id}function Tb(){var t;let e=U.useContext(vT),n=wb(Dc.UseRouteError),r=TT(Dc.UseRouteError);return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function Ib(){let{router:t}=_b(ET.UseNavigateStable),e=TT(Dc.UseNavigateStable),n=U.useRef(!1);return _T(()=>{n.current=!0}),U.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,Nc({fromRouteId:e},s)))},[t,e])}const xv={};function Sb(t,e,n){xv[t]||(xv[t]=!0)}const kv={};function Cb(t,e){kv[e]||(kv[e]=!0,console.warn(e))}const eo=(t,e,n)=>Cb(t,"⚠️ React Router Future Flag Warning: "+e+". "+("You can use the `"+t+"` future flag to opt-in early. ")+("For more information, see "+n+"."));function Rb(t,e){t!=null&&t.v7_startTransition||eo("v7_startTransition","React Router will begin wrapping state updates in `React.startTransition` in v7","https://reactrouter.com/v6/upgrading/future#v7_starttransition"),!(t!=null&&t.v7_relativeSplatPath)&&(!e||!e.v7_relativeSplatPath)&&eo("v7_relativeSplatPath","Relative route resolution within Splat routes is changing in v7","https://reactrouter.com/v6/upgrading/future#v7_relativesplatpath"),e&&(e.v7_fetcherPersist||eo("v7_fetcherPersist","The persistence behavior of fetchers is changing in v7","https://reactrouter.com/v6/upgrading/future#v7_fetcherpersist"),e.v7_normalizeFormMethod||eo("v7_normalizeFormMethod","Casing of `formMethod` fields is being normalized to uppercase in v7","https://reactrouter.com/v6/upgrading/future#v7_normalizeformmethod"),e.v7_partialHydration||eo("v7_partialHydration","`RouterProvider` hydration behavior is changing in v7","https://reactrouter.com/v6/upgrading/future#v7_partialhydration"),e.v7_skipActionErrorRevalidation||eo("v7_skipActionErrorRevalidation","The revalidation behavior after 4xx/5xx `action` responses is changing in v7","https://reactrouter.com/v6/upgrading/future#v7_skipactionerrorrevalidation"))}function Ab(t){let{basename:e="/",children:n=null,location:r,navigationType:i=mt.Pop,navigator:s,static:o=!1,future:a}=t;Ul()&&Se(!1);let u=e.replace(/^\/*/,"/"),c=U.useMemo(()=>({basename:u,navigator:s,static:o,future:Nc({v7_relativeSplatPath:!1},a)}),[u,a,s,o]);typeof r=="string"&&(r=Gi(r));let{pathname:h="/",search:f="",hash:g="",state:m=null,key:E="default"}=r,A=U.useMemo(()=>{let N=Jo(h,u);return N==null?null:{location:{pathname:N,search:f,hash:g,state:m,key:E},navigationType:i}},[u,h,f,g,m,E,i]);return A==null?null:U.createElement(Os.Provider,{value:c},U.createElement(Sm.Provider,{children:n,value:A}))}new Promise(()=>{});function Pb(t){let e={hasErrorBoundary:t.ErrorBoundary!=null||t.errorElement!=null};return t.Component&&Object.assign(e,{element:U.createElement(t.Component),Component:void 0}),t.HydrateFallback&&Object.assign(e,{hydrateFallbackElement:U.createElement(t.HydrateFallback),HydrateFallback:void 0}),t.ErrorBoundary&&Object.assign(e,{errorElement:U.createElement(t.ErrorBoundary),ErrorBoundary:void 0}),e}/**
 * React Router DOM v6.28.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function vl(){return vl=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},vl.apply(this,arguments)}function bb(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function xb(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function kb(t,e){return t.button===0&&(!e||e==="_self")&&!xb(t)}const Nb=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],Db="6";try{window.__reactRouterVersion=Db}catch{}function Ob(t,e){return HP({basename:void 0,future:vl({},void 0,{v7_prependBasename:!0}),history:pP({window:void 0}),hydrationData:Mb(),routes:t,mapRouteProperties:Pb,dataStrategy:void 0,patchRoutesOnNavigation:void 0,window:void 0}).initialize()}function Mb(){var t;let e=(t=window)==null?void 0:t.__staticRouterHydrationData;return e&&e.errors&&(e=vl({},e,{errors:Lb(e.errors)})),e}function Lb(t){if(!t)return null;let e=Object.entries(t),n={};for(let[r,i]of e)if(i&&i.__type==="RouteErrorResponse")n[r]=new kc(i.status,i.statusText,i.data,i.internal===!0);else if(i&&i.__type==="Error"){if(i.__subType){let s=window[i.__subType];if(typeof s=="function")try{let o=new s(i.message);o.stack="",n[r]=o}catch{}}if(n[r]==null){let s=new Error(i.message);s.stack="",n[r]=s}}else n[r]=i;return n}const Vb=U.createContext({isTransitioning:!1}),Fb=U.createContext(new Map),Ub="startTransition",Nv=qh[Ub],jb="flushSync",Dv=SA[jb];function zb(t){Nv?Nv(t):t()}function Ca(t){Dv?Dv(t):t()}let Bb=class{constructor(){this.status="pending",this.promise=new Promise((e,n)=>{this.resolve=r=>{this.status==="pending"&&(this.status="resolved",e(r))},this.reject=r=>{this.status==="pending"&&(this.status="rejected",n(r))}})}};function $b(t){let{fallbackElement:e,router:n,future:r}=t,[i,s]=U.useState(n.state),[o,a]=U.useState(),[u,c]=U.useState({isTransitioning:!1}),[h,f]=U.useState(),[g,m]=U.useState(),[E,A]=U.useState(),N=U.useRef(new Map),{v7_startTransition:T}=r||{},_=U.useCallback(y=>{T?zb(y):y()},[T]),S=U.useCallback((y,w)=>{let{deletedFetchers:C,flushSync:k,viewTransitionOpts:x}=w;C.forEach(ge=>N.current.delete(ge)),y.fetchers.forEach((ge,ct)=>{ge.data!==void 0&&N.current.set(ct,ge.data)});let R=n.window==null||n.window.document==null||typeof n.window.document.startViewTransition!="function";if(!x||R){k?Ca(()=>s(y)):_(()=>s(y));return}if(k){Ca(()=>{g&&(h&&h.resolve(),g.skipTransition()),c({isTransitioning:!0,flushSync:!0,currentLocation:x.currentLocation,nextLocation:x.nextLocation})});let ge=n.window.document.startViewTransition(()=>{Ca(()=>s(y))});ge.finished.finally(()=>{Ca(()=>{f(void 0),m(void 0),a(void 0),c({isTransitioning:!1})})}),Ca(()=>m(ge));return}g?(h&&h.resolve(),g.skipTransition(),A({state:y,currentLocation:x.currentLocation,nextLocation:x.nextLocation})):(a(y),c({isTransitioning:!0,flushSync:!1,currentLocation:x.currentLocation,nextLocation:x.nextLocation}))},[n.window,g,h,N,_]);U.useLayoutEffect(()=>n.subscribe(S),[n,S]),U.useEffect(()=>{u.isTransitioning&&!u.flushSync&&f(new Bb)},[u]),U.useEffect(()=>{if(h&&o&&n.window){let y=o,w=h.promise,C=n.window.document.startViewTransition(async()=>{_(()=>s(y)),await w});C.finished.finally(()=>{f(void 0),m(void 0),a(void 0),c({isTransitioning:!1})}),m(C)}},[_,o,h,n.window]),U.useEffect(()=>{h&&o&&i.location.key===o.location.key&&h.resolve()},[h,g,i.location,o]),U.useEffect(()=>{!u.isTransitioning&&E&&(a(E.state),c({isTransitioning:!0,flushSync:!1,currentLocation:E.currentLocation,nextLocation:E.nextLocation}),A(void 0))},[u.isTransitioning,E]),U.useEffect(()=>{},[]);let D=U.useMemo(()=>({createHref:n.createHref,encodeLocation:n.encodeLocation,go:y=>n.navigate(y),push:(y,w,C)=>n.navigate(y,{state:w,preventScrollReset:C==null?void 0:C.preventScrollReset}),replace:(y,w,C)=>n.navigate(y,{replace:!0,state:w,preventScrollReset:C==null?void 0:C.preventScrollReset})}),[n]),j=n.basename||"/",b=U.useMemo(()=>({router:n,navigator:D,static:!1,basename:j}),[n,D,j]),I=U.useMemo(()=>({v7_relativeSplatPath:n.future.v7_relativeSplatPath}),[n.future.v7_relativeSplatPath]);return U.useEffect(()=>Rb(r,n.future),[r,n.future]),U.createElement(U.Fragment,null,U.createElement(Sd.Provider,{value:b},U.createElement(yT.Provider,{value:i},U.createElement(Fb.Provider,{value:N.current},U.createElement(Vb.Provider,{value:u},U.createElement(Ab,{basename:j,location:i.location,navigationType:i.historyAction,navigator:D,future:I},i.initialized||n.future.v7_partialHydration?U.createElement(Hb,{routes:n.routes,future:n.future,state:i}):e))))),null)}const Hb=U.memo(Gb);function Gb(t){let{routes:e,future:n,state:r}=t;return fb(e,void 0,r,n)}const Wb=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",qb=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Cd=U.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:u,to:c,preventScrollReset:h,viewTransition:f}=e,g=bb(e,Nb),{basename:m}=U.useContext(Os),E,A=!1;if(typeof c=="string"&&qb.test(c)&&(E=c,Wb))try{let S=new URL(window.location.href),D=c.startsWith("//")?new URL(S.protocol+c):new URL(c),j=Jo(D.pathname,m);D.origin===S.origin&&j!=null?c=j+D.search+D.hash:A=!0}catch{}let N=cb(c,{relative:i}),T=Kb(c,{replace:o,state:a,target:u,preventScrollReset:h,relative:i,viewTransition:f});function _(S){r&&r(S),S.defaultPrevented||T(S)}return U.createElement("a",vl({},g,{href:E||N,onClick:A||s?r:_,ref:n,target:u}))});var Ov;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(Ov||(Ov={}));var Mv;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(Mv||(Mv={}));function Kb(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o,viewTransition:a}=e===void 0?{}:e,u=Cm(),c=jl(),h=wT(t,{relative:o});return U.useCallback(f=>{if(kb(f,n)){f.preventDefault();let g=r!==void 0?r:Is(c)===Is(h);u(t,{replace:g,state:i,preventScrollReset:s,relative:o,viewTransition:a})}},[c,u,h,r,i,n,t,s,o,a])}var Lv={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IT=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Qb=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},ST={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,u=i+2<t.length,c=u?t[i+2]:0,h=s>>2,f=(s&3)<<4|a>>4;let g=(a&15)<<2|c>>6,m=c&63;u||(m=64,o||(g=64)),r.push(n[h],n[f],n[g],n[m])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(IT(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Qb(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const f=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||c==null||f==null)throw new Yb;const g=s<<2|a>>4;if(r.push(g),c!==64){const m=a<<4&240|c>>2;if(r.push(m),f!==64){const E=c<<6&192|f;r.push(E)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Yb extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Xb=function(t){const e=IT(t);return ST.encodeByteArray(e,!0)},Oc=function(t){return Xb(t).replace(/\./g,"")},CT=function(t){try{return ST.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jb(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zb=()=>Jb().__FIREBASE_DEFAULTS__,ex=()=>{if(typeof process>"u"||typeof Lv>"u")return;const t=Lv.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},tx=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&CT(t[1]);return e&&JSON.parse(e)},Rd=()=>{try{return Zb()||ex()||tx()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},RT=t=>{var e,n;return(n=(e=Rd())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},nx=t=>{const e=RT(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},AT=()=>{var t;return(t=Rd())===null||t===void 0?void 0:t.config},PT=t=>{var e;return(e=Rd())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rx{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ix(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Oc(JSON.stringify(n)),Oc(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function sx(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Wt())}function ox(){var t;const e=(t=Rd())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function ax(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function bT(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function lx(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function ux(){const t=Wt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function cx(){return!ox()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function xT(){try{return typeof indexedDB=="object"}catch{return!1}}function kT(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}function dx(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hx="FirebaseError";class tr extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=hx,Object.setPrototypeOf(this,tr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ms.prototype.create)}}class Ms{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?fx(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new tr(i,a,r)}}function fx(t,e){return t.replace(px,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const px=/\{\$([^}]+)}/g;function mx(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function _l(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Vv(s)&&Vv(o)){if(!_l(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Vv(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zl(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function ka(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Na(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function gx(t,e){const n=new yx(t,e);return n.subscribe.bind(n)}class yx{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");vx(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=xh),i.error===void 0&&(i.error=xh),i.complete===void 0&&(i.complete=xh);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function vx(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function xh(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _x=1e3,wx=2,Ex=4*60*60*1e3,Tx=.5;function Fv(t,e=_x,n=wx){const r=e*Math.pow(n,t),i=Math.round(Tx*r*(Math.random()-.5)*2);return Math.min(Ex,r+i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qt(t){return t&&t._delegate?t._delegate:t}class Zn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ss="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ix=class{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new rx;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Cx(e))try{this.getOrInitializeService({instanceIdentifier:ss})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=ss){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ss){return this.instances.has(e)}getOptions(e=ss){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Sx(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=ss){return this.component?this.component.multipleInstances?e:ss:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}};function Sx(t){return t===ss?void 0:t}function Cx(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rx{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Ix(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ie;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Ie||(Ie={}));const Ax={debug:Ie.DEBUG,verbose:Ie.VERBOSE,info:Ie.INFO,warn:Ie.WARN,error:Ie.ERROR,silent:Ie.SILENT},Px=Ie.INFO,bx={[Ie.DEBUG]:"log",[Ie.VERBOSE]:"log",[Ie.INFO]:"info",[Ie.WARN]:"warn",[Ie.ERROR]:"error"},xx=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=bx[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ad{constructor(e){this.name=e,this._logLevel=Px,this._logHandler=xx,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ie))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Ax[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ie.DEBUG,...e),this._logHandler(this,Ie.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ie.VERBOSE,...e),this._logHandler(this,Ie.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ie.INFO,...e),this._logHandler(this,Ie.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ie.WARN,...e),this._logHandler(this,Ie.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ie.ERROR,...e),this._logHandler(this,Ie.ERROR,...e)}}const kx=(t,e)=>e.some(n=>t instanceof n);let Uv,jv;function Nx(){return Uv||(Uv=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Dx(){return jv||(jv=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const NT=new WeakMap,Wf=new WeakMap,DT=new WeakMap,kh=new WeakMap,Rm=new WeakMap;function Ox(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(xi(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&NT.set(n,t)}).catch(()=>{}),Rm.set(e,t),e}function Mx(t){if(Wf.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Wf.set(t,e)}let qf={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Wf.get(t);if(e==="objectStoreNames")return t.objectStoreNames||DT.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return xi(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Lx(t){qf=t(qf)}function Vx(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Nh(this),e,...n);return DT.set(r,e.sort?e.sort():[e]),xi(r)}:Dx().includes(t)?function(...e){return t.apply(Nh(this),e),xi(NT.get(this))}:function(...e){return xi(t.apply(Nh(this),e))}}function Fx(t){return typeof t=="function"?Vx(t):(t instanceof IDBTransaction&&Mx(t),kx(t,Nx())?new Proxy(t,qf):t)}function xi(t){if(t instanceof IDBRequest)return Ox(t);if(kh.has(t))return kh.get(t);const e=Fx(t);return e!==t&&(kh.set(t,e),Rm.set(e,t)),e}const Nh=t=>Rm.get(t);function OT(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=xi(o);return r&&o.addEventListener("upgradeneeded",u=>{r(xi(o.result),u.oldVersion,u.newVersion,xi(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),a.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const Ux=["get","getKey","getAll","getAllKeys","count"],jx=["put","add","delete","clear"],Dh=new Map;function zv(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Dh.get(e))return Dh.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=jx.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||Ux.includes(n)))return;const s=async function(o,...a){const u=this.transaction(o,i?"readwrite":"readonly");let c=u.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&u.done]))[0]};return Dh.set(e,s),s}Lx(t=>({...t,get:(e,n,r)=>zv(e,n)||t.get(e,n,r),has:(e,n)=>!!zv(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zx{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Bx(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Bx(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Kf="@firebase/app",Bv="0.10.15";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hr=new Ad("@firebase/app"),$x="@firebase/app-compat",Hx="@firebase/analytics-compat",Gx="@firebase/analytics",Wx="@firebase/app-check-compat",qx="@firebase/app-check",Kx="@firebase/auth",Qx="@firebase/auth-compat",Yx="@firebase/database",Xx="@firebase/data-connect",Jx="@firebase/database-compat",Zx="@firebase/functions",ek="@firebase/functions-compat",tk="@firebase/installations",nk="@firebase/installations-compat",rk="@firebase/messaging",ik="@firebase/messaging-compat",sk="@firebase/performance",ok="@firebase/performance-compat",ak="@firebase/remote-config",lk="@firebase/remote-config-compat",uk="@firebase/storage",ck="@firebase/storage-compat",dk="@firebase/firestore",hk="@firebase/vertexai",fk="@firebase/firestore-compat",pk="firebase",mk="11.0.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qf="[DEFAULT]",gk={[Kf]:"fire-core",[$x]:"fire-core-compat",[Gx]:"fire-analytics",[Hx]:"fire-analytics-compat",[qx]:"fire-app-check",[Wx]:"fire-app-check-compat",[Kx]:"fire-auth",[Qx]:"fire-auth-compat",[Yx]:"fire-rtdb",[Xx]:"fire-data-connect",[Jx]:"fire-rtdb-compat",[Zx]:"fire-fn",[ek]:"fire-fn-compat",[tk]:"fire-iid",[nk]:"fire-iid-compat",[rk]:"fire-fcm",[ik]:"fire-fcm-compat",[sk]:"fire-perf",[ok]:"fire-perf-compat",[ak]:"fire-rc",[lk]:"fire-rc-compat",[uk]:"fire-gcs",[ck]:"fire-gcs-compat",[dk]:"fire-fst",[fk]:"fire-fst-compat",[hk]:"fire-vertex","fire-js":"fire-js",[pk]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mc=new Map,yk=new Map,Yf=new Map;function $v(t,e){try{t.container.addComponent(e)}catch(n){Hr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function gr(t){const e=t.name;if(Yf.has(e))return Hr.debug(`There were multiple attempts to register component ${e}.`),!1;Yf.set(e,t);for(const n of Mc.values())$v(n,t);for(const n of yk.values())$v(n,t);return!0}function Ls(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function lr(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vk={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},ki=new Ms("app","Firebase",vk);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _k{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Zn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ki.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zo=mk;function MT(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Qf,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw ki.create("bad-app-name",{appName:String(i)});if(n||(n=AT()),!n)throw ki.create("no-options");const s=Mc.get(i);if(s){if(_l(n,s.options)&&_l(r,s.config))return s;throw ki.create("duplicate-app",{appName:i})}const o=new Rx(i);for(const u of Yf.values())o.addComponent(u);const a=new _k(n,r,o);return Mc.set(i,a),a}function Am(t=Qf){const e=Mc.get(t);if(!e&&t===Qf&&AT())return MT();if(!e)throw ki.create("no-app",{appName:t});return e}function Vn(t,e,n){var r;let i=(r=gk[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Hr.warn(a.join(" "));return}gr(new Zn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wk="firebase-heartbeat-database",Ek=1,wl="firebase-heartbeat-store";let Oh=null;function LT(){return Oh||(Oh=OT(wk,Ek,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(wl)}catch(n){console.warn(n)}}}}).catch(t=>{throw ki.create("idb-open",{originalErrorMessage:t.message})})),Oh}async function Tk(t){try{const n=(await LT()).transaction(wl),r=await n.objectStore(wl).get(VT(t));return await n.done,r}catch(e){if(e instanceof tr)Hr.warn(e.message);else{const n=ki.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Hr.warn(n.message)}}}async function Hv(t,e){try{const r=(await LT()).transaction(wl,"readwrite");await r.objectStore(wl).put(e,VT(t)),await r.done}catch(n){if(n instanceof tr)Hr.warn(n.message);else{const r=ki.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Hr.warn(r.message)}}}function VT(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ik=1024,Sk=30*24*60*60*1e3;class Ck{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Ak(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Gv();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=Sk}),this._storage.overwrite(this._heartbeatsCache))}catch(r){Hr.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Gv(),{heartbeatsToSend:r,unsentEntries:i}=Rk(this._heartbeatsCache.heartbeats),s=Oc(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return Hr.warn(n),""}}}function Gv(){return new Date().toISOString().substring(0,10)}function Rk(t,e=Ik){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Wv(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Wv(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Ak{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return xT()?kT().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Tk(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Hv(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Hv(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Wv(t){return Oc(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pk(t){gr(new Zn("platform-logger",e=>new zx(e),"PRIVATE")),gr(new Zn("heartbeat",e=>new Ck(e),"PRIVATE")),Vn(Kf,Bv,t),Vn(Kf,Bv,"esm2017"),Vn("fire-js","")}Pk("");function Pm(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function FT(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const bk=FT,UT=new Ms("auth","Firebase",FT());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lc=new Ad("@firebase/auth");function xk(t,...e){Lc.logLevel<=Ie.WARN&&Lc.warn(`Auth (${Zo}): ${t}`,...e)}function Yu(t,...e){Lc.logLevel<=Ie.ERROR&&Lc.error(`Auth (${Zo}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function er(t,...e){throw bm(t,...e)}function dr(t,...e){return bm(t,...e)}function jT(t,e,n){const r=Object.assign(Object.assign({},bk()),{[e]:n});return new Ms("auth","Firebase",r).create(e,{appName:t.name})}function Fr(t){return jT(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function bm(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return UT.create(t,...e)}function ce(t,e,...n){if(!t)throw bm(e,...n)}function Dr(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Yu(e),new Error(e)}function Gr(t,e){t||Dr(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xf(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function kk(){return qv()==="http:"||qv()==="https:"}function qv(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nk(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(kk()||bT()||"connection"in navigator)?navigator.onLine:!0}function Dk(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bl{constructor(e,n){this.shortDelay=e,this.longDelay=n,Gr(n>e,"Short delay should be less than long delay!"),this.isMobile=sx()||lx()}get(){return Nk()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xm(t,e){Gr(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zT{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Dr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Dr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Dr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ok={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mk=new Bl(3e4,6e4);function qi(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Yr(t,e,n,r,i={}){return BT(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=zl(Object.assign({key:t.config.apiKey},o)).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const c=Object.assign({method:e,headers:u},s);return ax()||(c.referrerPolicy="no-referrer"),zT.fetch()($T(t,t.config.apiHost,n,a),c)})}async function BT(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},Ok),e);try{const i=new Vk(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw xu(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[u,c]=a.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw xu(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw xu(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw xu(t,"user-disabled",o);const h=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw jT(t,h,c);er(t,h)}}catch(i){if(i instanceof tr)throw i;er(t,"network-request-failed",{message:String(i)})}}async function $l(t,e,n,r,i={}){const s=await Yr(t,e,n,r,i);return"mfaPendingCredential"in s&&er(t,"multi-factor-auth-required",{_serverResponse:s}),s}function $T(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?xm(t.config,i):`${t.config.apiScheme}://${i}`}function Lk(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Vk{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(dr(this.auth,"network-request-failed")),Mk.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function xu(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=dr(t,e,r);return i.customData._tokenResponse=n,i}function Kv(t){return t!==void 0&&t.enterprise!==void 0}class Fk{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return Lk(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function Uk(t,e){return Yr(t,"GET","/v2/recaptchaConfig",qi(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jk(t,e){return Yr(t,"POST","/v1/accounts:delete",e)}async function HT(t,e){return Yr(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wa(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function zk(t,e=!1){const n=qt(t),r=await n.getIdToken(e),i=km(r);ce(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Wa(Mh(i.auth_time)),issuedAtTime:Wa(Mh(i.iat)),expirationTime:Wa(Mh(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Mh(t){return Number(t)*1e3}function km(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Yu("JWT malformed, contained fewer than 3 sections"),null;try{const i=CT(n);return i?JSON.parse(i):(Yu("Failed to decode base64 JWT payload"),null)}catch(i){return Yu("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Qv(t){const e=km(t);return ce(e,"internal-error"),ce(typeof e.exp<"u","internal-error"),ce(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Uo(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof tr&&Bk(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function Bk({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $k{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jf{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Wa(this.lastLoginAt),this.creationTime=Wa(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vc(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Uo(t,HT(n,{idToken:r}));ce(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?GT(s.providerUserInfo):[],a=Gk(t.providerData,o),u=t.isAnonymous,c=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),h=u?c:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Jf(s.createdAt,s.lastLoginAt),isAnonymous:h};Object.assign(t,f)}async function Hk(t){const e=qt(t);await Vc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Gk(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function GT(t){return t.map(e=>{var{providerId:n}=e,r=Pm(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wk(t,e){const n=await BT(t,{},async()=>{const r=zl({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=$T(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",zT.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function qk(t,e){return Yr(t,"POST","/v2/accounts:revokeToken",qi(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ao{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ce(e.idToken,"internal-error"),ce(typeof e.idToken<"u","internal-error"),ce(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Qv(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){ce(e.length!==0,"internal-error");const n=Qv(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(ce(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await Wk(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Ao;return r&&(ce(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(ce(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(ce(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ao,this.toJSON())}_performRefresh(){return Dr("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ai(t,e){ce(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Or{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Pm(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new $k(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Jf(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Uo(this,this.stsTokenManager.getToken(this.auth,e));return ce(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return zk(this,e)}reload(){return Hk(this)}_assign(e){this!==e&&(ce(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Or(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){ce(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Vc(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(lr(this.auth.app))return Promise.reject(Fr(this.auth));const e=await this.getIdToken();return await Uo(this,jk(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,u,c,h;const f=(r=n.displayName)!==null&&r!==void 0?r:void 0,g=(i=n.email)!==null&&i!==void 0?i:void 0,m=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,E=(o=n.photoURL)!==null&&o!==void 0?o:void 0,A=(a=n.tenantId)!==null&&a!==void 0?a:void 0,N=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,T=(c=n.createdAt)!==null&&c!==void 0?c:void 0,_=(h=n.lastLoginAt)!==null&&h!==void 0?h:void 0,{uid:S,emailVerified:D,isAnonymous:j,providerData:b,stsTokenManager:I}=n;ce(S&&I,e,"internal-error");const y=Ao.fromJSON(this.name,I);ce(typeof S=="string",e,"internal-error"),ai(f,e.name),ai(g,e.name),ce(typeof D=="boolean",e,"internal-error"),ce(typeof j=="boolean",e,"internal-error"),ai(m,e.name),ai(E,e.name),ai(A,e.name),ai(N,e.name),ai(T,e.name),ai(_,e.name);const w=new Or({uid:S,auth:e,email:g,emailVerified:D,displayName:f,isAnonymous:j,photoURL:E,phoneNumber:m,tenantId:A,stsTokenManager:y,createdAt:T,lastLoginAt:_});return b&&Array.isArray(b)&&(w.providerData=b.map(C=>Object.assign({},C))),N&&(w._redirectEventId=N),w}static async _fromIdTokenResponse(e,n,r=!1){const i=new Ao;i.updateFromServerResponse(n);const s=new Or({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Vc(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];ce(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?GT(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),a=new Ao;a.updateFromIdToken(r);const u=new Or({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new Jf(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,c),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yv=new Map;function Mr(t){Gr(t instanceof Function,"Expected a class definition");let e=Yv.get(t);return e?(Gr(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Yv.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WT{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}WT.type="NONE";const Xv=WT;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xu(t,e,n){return`firebase:${t}:${e}:${n}`}class Po{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Xu(this.userKey,i.apiKey,s),this.fullPersistenceKey=Xu("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Or._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Po(Mr(Xv),e,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||Mr(Xv);const o=Xu(r,e.config.apiKey,e.name);let a=null;for(const c of n)try{const h=await c._get(o);if(h){const f=Or._fromJSON(e,h);c!==s&&(a=f),s=c;break}}catch{}const u=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new Po(s,e,r):(s=u[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new Po(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jv(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(YT(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(qT(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(JT(e))return"Blackberry";if(ZT(e))return"Webos";if(KT(e))return"Safari";if((e.includes("chrome/")||QT(e))&&!e.includes("edge/"))return"Chrome";if(XT(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function qT(t=Wt()){return/firefox\//i.test(t)}function KT(t=Wt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function QT(t=Wt()){return/crios\//i.test(t)}function YT(t=Wt()){return/iemobile/i.test(t)}function XT(t=Wt()){return/android/i.test(t)}function JT(t=Wt()){return/blackberry/i.test(t)}function ZT(t=Wt()){return/webos/i.test(t)}function Nm(t=Wt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Kk(t=Wt()){var e;return Nm(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Qk(){return ux()&&document.documentMode===10}function e1(t=Wt()){return Nm(t)||XT(t)||ZT(t)||JT(t)||/windows phone/i.test(t)||YT(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function t1(t,e=[]){let n;switch(t){case"Browser":n=Jv(Wt());break;case"Worker":n=`${Jv(Wt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Zo}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yk{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const u=e(s);o(u)}catch(u){a(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xk(t,e={}){return Yr(t,"GET","/v2/passwordPolicy",qi(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jk=6;class Zk{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:Jk,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,a;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(n=u.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(i=u.containsLowercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(s=u.containsUppercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(o=u.containsNumericCharacter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(a=u.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),u}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eN{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Zv(this),this.idTokenSubscription=new Zv(this),this.beforeStateQueue=new Yk(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=UT,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Mr(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Po.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await HT(this,{idToken:e}),r=await Or._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(lr(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===a)&&(u!=null&&u.user)&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return ce(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Vc(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Dk()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(lr(this.app))return Promise.reject(Fr(this));const n=e?qt(e):null;return n&&ce(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ce(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return lr(this.app)?Promise.reject(Fr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return lr(this.app)?Promise.reject(Fr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Mr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Xk(this),n=new Zk(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ms("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await qk(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Mr(e)||this._popupRedirectResolver;ce(n,this,"argument-error"),this.redirectPersistenceManager=await Po.create(this,[Mr(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(ce(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,i);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ce(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=t1(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&xk(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Vs(t){return qt(t)}class Zv{constructor(e){this.auth=e,this.observer=null,this.addObserver=gx(n=>this.observer=n)}get next(){return ce(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Pd={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function tN(t){Pd=t}function n1(t){return Pd.loadJS(t)}function nN(){return Pd.recaptchaEnterpriseScript}function rN(){return Pd.gapiScript}function iN(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class sN{constructor(){this.enterprise=new oN}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class oN{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const aN="recaptcha-enterprise",r1="NO_RECAPTCHA";class lN{constructor(e){this.type=aN,this.auth=Vs(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{Uk(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new Fk(u);return s.tenantId==null?s._agentRecaptchaConfig=c:s._tenantRecaptchaConfigs[s.tenantId]=c,o(c.siteKey)}}).catch(u=>{a(u)})})}function i(s,o,a){const u=window.grecaptcha;Kv(u)?u.enterprise.ready(()=>{u.enterprise.execute(s,{action:e}).then(c=>{o(c)}).catch(()=>{o(r1)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new sN().execute("siteKey",{action:"verify"}):new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&Kv(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let u=nN();u.length!==0&&(u+=a),n1(u).then(()=>{i(a,s,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function e_(t,e,n,r=!1,i=!1){const s=new lN(t);let o;if(i)o=r1;else try{o=await s.verify(n)}catch{o=await s.verify(n,!0)}const a=Object.assign({},e);if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in a){const u=a.phoneEnrollmentInfo.phoneNumber,c=a.phoneEnrollmentInfo.recaptchaToken;Object.assign(a,{phoneEnrollmentInfo:{phoneNumber:u,recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in a){const u=a.phoneSignInInfo.recaptchaToken;Object.assign(a,{phoneSignInInfo:{recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return a}return r?Object.assign(a,{captchaResp:o}):Object.assign(a,{captchaResponse:o}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function Zf(t,e,n,r,i){var s;if(!((s=t._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await e_(t,e,n,n==="getOobCode");return r(t,o)}else return r(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const a=await e_(t,e,n,n==="getOobCode");return r(t,a)}else return Promise.reject(o)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uN(t,e){const n=Ls(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(_l(s,e??{}))return i;er(i,"already-initialized")}return n.initialize({options:e})}function cN(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Mr);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function dN(t,e,n){const r=Vs(t);ce(r._canInitEmulator,r,"emulator-config-failed"),ce(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=i1(e),{host:o,port:a}=hN(e),u=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),fN()}function i1(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function hN(t){const e=i1(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:t_(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:t_(o)}}}function t_(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function fN(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dm{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Dr("not implemented")}_getIdTokenResponse(e){return Dr("not implemented")}_linkToIdToken(e,n){return Dr("not implemented")}_getReauthenticationResolver(e){return Dr("not implemented")}}async function pN(t,e){return Yr(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mN(t,e){return $l(t,"POST","/v1/accounts:signInWithPassword",qi(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gN(t,e){return $l(t,"POST","/v1/accounts:signInWithEmailLink",qi(t,e))}async function yN(t,e){return $l(t,"POST","/v1/accounts:signInWithEmailLink",qi(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class El extends Dm{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new El(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new El(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Zf(e,n,"signInWithPassword",mN);case"emailLink":return gN(e,{email:this._email,oobCode:this._password});default:er(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Zf(e,r,"signUpPassword",pN);case"emailLink":return yN(e,{idToken:n,email:this._email,oobCode:this._password});default:er(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bo(t,e){return $l(t,"POST","/v1/accounts:signInWithIdp",qi(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vN="http://localhost";class Ss extends Dm{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Ss(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):er("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Pm(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Ss(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return bo(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,bo(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,bo(e,n)}buildRequest(){const e={requestUri:vN,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=zl(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _N(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function wN(t){const e=ka(Na(t)).link,n=e?ka(Na(e)).deep_link_id:null,r=ka(Na(t)).deep_link_id;return(r?ka(Na(r)).link:null)||r||n||e||t}class Om{constructor(e){var n,r,i,s,o,a;const u=ka(Na(e)),c=(n=u.apiKey)!==null&&n!==void 0?n:null,h=(r=u.oobCode)!==null&&r!==void 0?r:null,f=_N((i=u.mode)!==null&&i!==void 0?i:null);ce(c&&h&&f,"argument-error"),this.apiKey=c,this.operation=f,this.code=h,this.continueUrl=(s=u.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=u.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=u.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=wN(e);try{return new Om(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ea{constructor(){this.providerId=ea.PROVIDER_ID}static credential(e,n){return El._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Om.parseLink(n);return ce(r,"argument-error"),El._fromEmailAndCode(e,r.code,r.tenantId)}}ea.PROVIDER_ID="password";ea.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ea.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s1{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hl extends s1{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pi extends Hl{constructor(){super("facebook.com")}static credential(e){return Ss._fromParams({providerId:pi.PROVIDER_ID,signInMethod:pi.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return pi.credentialFromTaggedObject(e)}static credentialFromError(e){return pi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return pi.credential(e.oauthAccessToken)}catch{return null}}}pi.FACEBOOK_SIGN_IN_METHOD="facebook.com";pi.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mi extends Hl{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Ss._fromParams({providerId:mi.PROVIDER_ID,signInMethod:mi.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return mi.credentialFromTaggedObject(e)}static credentialFromError(e){return mi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return mi.credential(n,r)}catch{return null}}}mi.GOOGLE_SIGN_IN_METHOD="google.com";mi.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gi extends Hl{constructor(){super("github.com")}static credential(e){return Ss._fromParams({providerId:gi.PROVIDER_ID,signInMethod:gi.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return gi.credentialFromTaggedObject(e)}static credentialFromError(e){return gi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return gi.credential(e.oauthAccessToken)}catch{return null}}}gi.GITHUB_SIGN_IN_METHOD="github.com";gi.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yi extends Hl{constructor(){super("twitter.com")}static credential(e,n){return Ss._fromParams({providerId:yi.PROVIDER_ID,signInMethod:yi.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return yi.credentialFromTaggedObject(e)}static credentialFromError(e){return yi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return yi.credential(n,r)}catch{return null}}}yi.TWITTER_SIGN_IN_METHOD="twitter.com";yi.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function EN(t,e){return $l(t,"POST","/v1/accounts:signUp",qi(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cs{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Or._fromIdTokenResponse(e,r,i),o=n_(r);return new Cs({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=n_(r);return new Cs({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function n_(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fc extends tr{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Fc.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Fc(e,n,r,i)}}function o1(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Fc._fromErrorAndOperation(t,s,e,r):s})}async function TN(t,e,n=!1){const r=await Uo(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Cs._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function IN(t,e,n=!1){const{auth:r}=t;if(lr(r.app))return Promise.reject(Fr(r));const i="reauthenticate";try{const s=await Uo(t,o1(r,i,e,t),n);ce(s.idToken,r,"internal-error");const o=km(s.idToken);ce(o,r,"internal-error");const{sub:a}=o;return ce(t.uid===a,r,"user-mismatch"),Cs._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&er(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function a1(t,e,n=!1){if(lr(t.app))return Promise.reject(Fr(t));const r="signIn",i=await o1(t,r,e),s=await Cs._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function SN(t,e){return a1(Vs(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function l1(t){const e=Vs(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function CN(t,e,n){if(lr(t.app))return Promise.reject(Fr(t));const r=Vs(t),o=await Zf(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",EN).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&l1(t),u}),a=await Cs._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function RN(t,e,n){return lr(t.app)?Promise.reject(Fr(t)):SN(qt(t),ea.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&l1(t),r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function AN(t,e){return Yr(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function PN(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=qt(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await Uo(r,AN(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:u})=>u==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function bN(t,e,n,r){return qt(t).onIdTokenChanged(e,n,r)}function xN(t,e,n){return qt(t).beforeAuthStateChanged(e,n)}function kN(t,e,n,r){return qt(t).onAuthStateChanged(e,n,r)}function NN(t){return qt(t).signOut()}const Uc="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u1{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Uc,"1"),this.storage.removeItem(Uc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DN=1e3,ON=10;class c1 extends u1{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=e1(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);Qk()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,ON):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},DN)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}c1.type="LOCAL";const MN=c1;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d1 extends u1{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}d1.type="SESSION";const h1=d1;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LN(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bd{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new bd(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async c=>c(n.origin,s)),u=await LN(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}bd.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mm(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VN{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,u)=>{const c=Mm("",20);i.port1.start();const h=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(f){const g=f;if(g.data.eventId===c)switch(g.data.status){case"ack":clearTimeout(h),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(g.data.response);break;default:clearTimeout(h),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hr(){return window}function FN(t){hr().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function f1(){return typeof hr().WorkerGlobalScope<"u"&&typeof hr().importScripts=="function"}async function UN(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function jN(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function zN(){return f1()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const p1="firebaseLocalStorageDb",BN=1,jc="firebaseLocalStorage",m1="fbase_key";class Gl{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function xd(t,e){return t.transaction([jc],e?"readwrite":"readonly").objectStore(jc)}function $N(){const t=indexedDB.deleteDatabase(p1);return new Gl(t).toPromise()}function ep(){const t=indexedDB.open(p1,BN);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(jc,{keyPath:m1})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(jc)?e(r):(r.close(),await $N(),e(await ep()))})})}async function r_(t,e,n){const r=xd(t,!0).put({[m1]:e,value:n});return new Gl(r).toPromise()}async function HN(t,e){const n=xd(t,!1).get(e),r=await new Gl(n).toPromise();return r===void 0?null:r.value}function i_(t,e){const n=xd(t,!0).delete(e);return new Gl(n).toPromise()}const GN=800,WN=3;class g1{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ep(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>WN)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return f1()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=bd._getInstance(zN()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await UN(),!this.activeServiceWorker)return;this.sender=new VN(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||jN()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ep();return await r_(e,Uc,"1"),await i_(e,Uc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>r_(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>HN(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>i_(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=xd(i,!1).getAll();return new Gl(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),GN)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}g1.type="LOCAL";const qN=g1;new Bl(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KN(t,e){return e?Mr(e):(ce(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lm extends Dm{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return bo(e,this._buildIdpRequest())}_linkToIdToken(e,n){return bo(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return bo(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function QN(t){return a1(t.auth,new Lm(t),t.bypassAuthState)}function YN(t){const{auth:e,user:n}=t;return ce(n,e,"internal-error"),IN(n,new Lm(t),t.bypassAuthState)}async function XN(t){const{auth:e,user:n}=t;return ce(n,e,"internal-error"),TN(n,new Lm(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y1{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(u))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return QN;case"linkViaPopup":case"linkViaRedirect":return XN;case"reauthViaPopup":case"reauthViaRedirect":return YN;default:er(this.auth,"internal-error")}}resolve(e){Gr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Gr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JN=new Bl(2e3,1e4);class _o extends y1{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,_o.currentPopupAction&&_o.currentPopupAction.cancel(),_o.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ce(e,this.auth,"internal-error"),e}async onExecution(){Gr(this.filter.length===1,"Popup operations only handle one event");const e=Mm();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(dr(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(dr(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,_o.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(dr(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,JN.get())};e()}}_o.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZN="pendingRedirect",Ju=new Map;class e2 extends y1{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Ju.get(this.auth._key());if(!e){try{const r=await t2(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Ju.set(this.auth._key(),e)}return this.bypassAuthState||Ju.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function t2(t,e){const n=i2(e),r=r2(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function n2(t,e){Ju.set(t._key(),e)}function r2(t){return Mr(t._redirectPersistence)}function i2(t){return Xu(ZN,t.config.apiKey,t.name)}async function s2(t,e,n=!1){if(lr(t.app))return Promise.reject(Fr(t));const r=Vs(t),i=KN(r,e),o=await new e2(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o2=10*60*1e3;class a2{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!l2(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!v1(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(dr(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=o2&&this.cachedEventUids.clear(),this.cachedEventUids.has(s_(e))}saveEventToCache(e){this.cachedEventUids.add(s_(e)),this.lastProcessedEventTime=Date.now()}}function s_(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function v1({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function l2(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return v1(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function u2(t,e={}){return Yr(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const c2=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,d2=/^https?/;async function h2(t){if(t.config.emulator)return;const{authorizedDomains:e}=await u2(t);for(const n of e)try{if(f2(n))return}catch{}er(t,"unauthorized-domain")}function f2(t){const e=Xf(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!d2.test(n))return!1;if(c2.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const p2=new Bl(3e4,6e4);function o_(){const t=hr().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function m2(t){return new Promise((e,n)=>{var r,i,s;function o(){o_(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{o_(),n(dr(t,"network-request-failed"))},timeout:p2.get()})}if(!((i=(r=hr().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=hr().gapi)===null||s===void 0)&&s.load)o();else{const a=iN("iframefcb");return hr()[a]=()=>{gapi.load?o():n(dr(t,"network-request-failed"))},n1(`${rN()}?onload=${a}`).catch(u=>n(u))}}).catch(e=>{throw Zu=null,e})}let Zu=null;function g2(t){return Zu=Zu||m2(t),Zu}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const y2=new Bl(5e3,15e3),v2="__/auth/iframe",_2="emulator/auth/iframe",w2={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},E2=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function T2(t){const e=t.config;ce(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?xm(e,_2):`https://${t.config.authDomain}/${v2}`,r={apiKey:e.apiKey,appName:t.name,v:Zo},i=E2.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${zl(r).slice(1)}`}async function I2(t){const e=await g2(t),n=hr().gapi;return ce(n,t,"internal-error"),e.open({where:document.body,url:T2(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:w2,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=dr(t,"network-request-failed"),a=hr().setTimeout(()=>{s(o)},y2.get());function u(){hr().clearTimeout(a),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S2={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},C2=500,R2=600,A2="_blank",P2="http://localhost";class a_{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function b2(t,e,n,r=C2,i=R2){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const u=Object.assign(Object.assign({},S2),{width:r.toString(),height:i.toString(),top:s,left:o}),c=Wt().toLowerCase();n&&(a=QT(c)?A2:n),qT(c)&&(e=e||P2,u.scrollbars="yes");const h=Object.entries(u).reduce((g,[m,E])=>`${g}${m}=${E},`,"");if(Kk(c)&&a!=="_self")return x2(e||"",a),new a_(null);const f=window.open(e||"",a,h);ce(f,t,"popup-blocked");try{f.focus()}catch{}return new a_(f)}function x2(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k2="__/auth/handler",N2="emulator/auth/handler",D2=encodeURIComponent("fac");async function l_(t,e,n,r,i,s){ce(t.config.authDomain,t,"auth-domain-config-required"),ce(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Zo,eventId:i};if(e instanceof s1){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",mx(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[h,f]of Object.entries({}))o[h]=f}if(e instanceof Hl){const h=e.getScopes().filter(f=>f!=="");h.length>0&&(o.scopes=h.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const h of Object.keys(a))a[h]===void 0&&delete a[h];const u=await t._getAppCheckToken(),c=u?`#${D2}=${encodeURIComponent(u)}`:"";return`${O2(t)}?${zl(a).slice(1)}${c}`}function O2({config:t}){return t.emulator?xm(t,N2):`https://${t.authDomain}/${k2}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lh="webStorageSupport";class M2{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=h1,this._completeRedirectFn=s2,this._overrideRedirectResult=n2}async _openPopup(e,n,r,i){var s;Gr((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await l_(e,n,r,Xf(),i);return b2(e,o,Mm())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await l_(e,n,r,Xf(),i);return FN(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Gr(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await I2(e),r=new a2(e);return n.register("authEvent",i=>(ce(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Lh,{type:Lh},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Lh];o!==void 0&&n(!!o),er(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=h2(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return e1()||KT()||Nm()}}const L2=M2;var u_="@firebase/auth",c_="1.8.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V2{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ce(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function F2(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function U2(t){gr(new Zn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;ce(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:t1(t)},c=new eN(r,i,s,u);return cN(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),gr(new Zn("auth-internal",e=>{const n=Vs(e.getProvider("auth").getImmediate());return(r=>new V2(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Vn(u_,c_,F2(t)),Vn(u_,c_,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j2=5*60,z2=PT("authIdTokenMaxAge")||j2;let d_=null;const B2=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>z2)return;const i=n==null?void 0:n.token;d_!==i&&(d_=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function $2(t=Am()){const e=Ls(t,"auth");if(e.isInitialized())return e.getImmediate();const n=uN(t,{popupRedirectResolver:L2,persistence:[qN,MN,h1]}),r=PT("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=B2(s.toString());xN(n,o,()=>o(n.currentUser)),bN(n,a=>o(a))}}const i=RT("auth");return i&&dN(n,`http://${i}`),n}function H2(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}tN({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=dr("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",H2().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});U2("Browser");var G2="firebase",W2="11.0.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Vn(G2,W2,"app");const _1="@firebase/installations",Vm="0.6.10";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w1=1e4,E1=`w:${Vm}`,T1="FIS_v2",q2="https://firebaseinstallations.googleapis.com/v1",K2=60*60*1e3,Q2="installations",Y2="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X2={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Rs=new Ms(Q2,Y2,X2);function I1(t){return t instanceof tr&&t.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S1({projectId:t}){return`${q2}/projects/${t}/installations`}function C1(t){return{token:t.token,requestStatus:2,expiresIn:Z2(t.expiresIn),creationTime:Date.now()}}async function R1(t,e){const r=(await e.json()).error;return Rs.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function A1({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function J2(t,{refreshToken:e}){const n=A1(t);return n.append("Authorization",eD(e)),n}async function P1(t){const e=await t();return e.status>=500&&e.status<600?t():e}function Z2(t){return Number(t.replace("s","000"))}function eD(t){return`${T1} ${t}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tD({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=S1(t),i=A1(t),s=e.getImmediate({optional:!0});if(s){const c=await s.getHeartbeatsHeader();c&&i.append("x-firebase-client",c)}const o={fid:n,authVersion:T1,appId:t.appId,sdkVersion:E1},a={method:"POST",headers:i,body:JSON.stringify(o)},u=await P1(()=>fetch(r,a));if(u.ok){const c=await u.json();return{fid:c.fid||n,registrationStatus:2,refreshToken:c.refreshToken,authToken:C1(c.authToken)}}else throw await R1("Create Installation",u)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b1(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nD(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rD=/^[cdef][\w-]{21}$/,tp="";function iD(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=sD(t);return rD.test(n)?n:tp}catch{return tp}}function sD(t){return nD(t).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kd(t){return`${t.appName}!${t.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x1=new Map;function k1(t,e){const n=kd(t);N1(n,e),oD(n,e)}function N1(t,e){const n=x1.get(t);if(n)for(const r of n)r(e)}function oD(t,e){const n=aD();n&&n.postMessage({key:t,fid:e}),lD()}let fs=null;function aD(){return!fs&&"BroadcastChannel"in self&&(fs=new BroadcastChannel("[Firebase] FID Change"),fs.onmessage=t=>{N1(t.data.key,t.data.fid)}),fs}function lD(){x1.size===0&&fs&&(fs.close(),fs=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uD="firebase-installations-database",cD=1,As="firebase-installations-store";let Vh=null;function Fm(){return Vh||(Vh=OT(uD,cD,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(As)}}})),Vh}async function zc(t,e){const n=kd(t),i=(await Fm()).transaction(As,"readwrite"),s=i.objectStore(As),o=await s.get(n);return await s.put(e,n),await i.done,(!o||o.fid!==e.fid)&&k1(t,e.fid),e}async function D1(t){const e=kd(t),r=(await Fm()).transaction(As,"readwrite");await r.objectStore(As).delete(e),await r.done}async function Nd(t,e){const n=kd(t),i=(await Fm()).transaction(As,"readwrite"),s=i.objectStore(As),o=await s.get(n),a=e(o);return a===void 0?await s.delete(n):await s.put(a,n),await i.done,a&&(!o||o.fid!==a.fid)&&k1(t,a.fid),a}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Um(t){let e;const n=await Nd(t.appConfig,r=>{const i=dD(r),s=hD(t,i);return e=s.registrationPromise,s.installationEntry});return n.fid===tp?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function dD(t){const e=t||{fid:iD(),registrationStatus:0};return O1(e)}function hD(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(Rs.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=fD(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:pD(t)}:{installationEntry:e}}async function fD(t,e){try{const n=await tD(t,e);return zc(t.appConfig,n)}catch(n){throw I1(n)&&n.customData.serverCode===409?await D1(t.appConfig):await zc(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function pD(t){let e=await h_(t.appConfig);for(;e.registrationStatus===1;)await b1(100),e=await h_(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await Um(t);return r||n}return e}function h_(t){return Nd(t,e=>{if(!e)throw Rs.create("installation-not-found");return O1(e)})}function O1(t){return mD(t)?{fid:t.fid,registrationStatus:0}:t}function mD(t){return t.registrationStatus===1&&t.registrationTime+w1<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gD({appConfig:t,heartbeatServiceProvider:e},n){const r=yD(t,n),i=J2(t,n),s=e.getImmediate({optional:!0});if(s){const c=await s.getHeartbeatsHeader();c&&i.append("x-firebase-client",c)}const o={installation:{sdkVersion:E1,appId:t.appId}},a={method:"POST",headers:i,body:JSON.stringify(o)},u=await P1(()=>fetch(r,a));if(u.ok){const c=await u.json();return C1(c)}else throw await R1("Generate Auth Token",u)}function yD(t,{fid:e}){return`${S1(t)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jm(t,e=!1){let n;const r=await Nd(t.appConfig,s=>{if(!M1(s))throw Rs.create("not-registered");const o=s.authToken;if(!e&&wD(o))return s;if(o.requestStatus===1)return n=vD(t,e),s;{if(!navigator.onLine)throw Rs.create("app-offline");const a=TD(s);return n=_D(t,a),a}});return n?await n:r.authToken}async function vD(t,e){let n=await f_(t.appConfig);for(;n.authToken.requestStatus===1;)await b1(100),n=await f_(t.appConfig);const r=n.authToken;return r.requestStatus===0?jm(t,e):r}function f_(t){return Nd(t,e=>{if(!M1(e))throw Rs.create("not-registered");const n=e.authToken;return ID(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function _D(t,e){try{const n=await gD(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await zc(t.appConfig,r),n}catch(n){if(I1(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await D1(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await zc(t.appConfig,r)}throw n}}function M1(t){return t!==void 0&&t.registrationStatus===2}function wD(t){return t.requestStatus===2&&!ED(t)}function ED(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+K2}function TD(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function ID(t){return t.requestStatus===1&&t.requestTime+w1<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function SD(t){const e=t,{installationEntry:n,registrationPromise:r}=await Um(e);return r?r.catch(console.error):jm(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function CD(t,e=!1){const n=t;return await RD(n),(await jm(n,e)).token}async function RD(t){const{registrationPromise:e}=await Um(t);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AD(t){if(!t||!t.options)throw Fh("App Configuration");if(!t.name)throw Fh("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw Fh(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function Fh(t){return Rs.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L1="installations",PD="installations-internal",bD=t=>{const e=t.getProvider("app").getImmediate(),n=AD(e),r=Ls(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},xD=t=>{const e=t.getProvider("app").getImmediate(),n=Ls(e,L1).getImmediate();return{getId:()=>SD(n),getToken:i=>CD(n,i)}};function kD(){gr(new Zn(L1,bD,"PUBLIC")),gr(new Zn(PD,xD,"PRIVATE"))}kD();Vn(_1,Vm);Vn(_1,Vm,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bc="analytics",ND="firebase_id",DD="origin",OD=60*1e3,MD="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",zm="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cn=new Ad("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LD={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},wn=new Ms("analytics","Analytics",LD);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VD(t){if(!t.startsWith(zm)){const e=wn.create("invalid-gtag-resource",{gtagURL:t});return cn.warn(e.message),""}return t}function V1(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function FD(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function UD(t,e){const n=FD("firebase-js-sdk-policy",{createScriptURL:VD}),r=document.createElement("script"),i=`${zm}?l=${t}&id=${e}`;r.src=n?n==null?void 0:n.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function jD(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function zD(t,e,n,r,i,s){const o=r[i];try{if(o)await e[o];else{const u=(await V1(n)).find(c=>c.measurementId===i);u&&await e[u.appId]}}catch(a){cn.error(a)}t("config",i,s)}async function BD(t,e,n,r,i){try{let s=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);const a=await V1(n);for(const u of o){const c=a.find(f=>f.measurementId===u),h=c&&e[c.appId];if(h)s.push(h);else{s=[];break}}}s.length===0&&(s=Object.values(e)),await Promise.all(s),t("event",r,i||{})}catch(s){cn.error(s)}}function $D(t,e,n,r){async function i(s,...o){try{if(s==="event"){const[a,u]=o;await BD(t,e,n,a,u)}else if(s==="config"){const[a,u]=o;await zD(t,e,n,r,a,u)}else if(s==="consent"){const[a,u]=o;t("consent",a,u)}else if(s==="get"){const[a,u,c]=o;t("get",a,u,c)}else if(s==="set"){const[a]=o;t("set",a)}else t(s,...o)}catch(a){cn.error(a)}}return i}function HD(t,e,n,r,i){let s=function(...o){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(s=window[i]),window[i]=$D(s,t,e,n),{gtagCore:s,wrappedGtag:window[i]}}function GD(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(zm)&&n.src.includes(t))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WD=30,qD=1e3;class KD{constructor(e={},n=qD){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const F1=new KD;function QD(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function YD(t){var e;const{appId:n,apiKey:r}=t,i={method:"GET",headers:QD(r)},s=MD.replace("{app-id}",n),o=await fetch(s,i);if(o.status!==200&&o.status!==304){let a="";try{const u=await o.json();!((e=u.error)===null||e===void 0)&&e.message&&(a=u.error.message)}catch{}throw wn.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function XD(t,e=F1,n){const{appId:r,apiKey:i,measurementId:s}=t.options;if(!r)throw wn.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:r};throw wn.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new eO;return setTimeout(async()=>{a.abort()},OD),U1({appId:r,apiKey:i,measurementId:s},o,a,e)}async function U1(t,{throttleEndTimeMillis:e,backoffCount:n},r,i=F1){var s;const{appId:o,measurementId:a}=t;try{await JD(r,e)}catch(u){if(a)return cn.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:o,measurementId:a};throw u}try{const u=await YD(t);return i.deleteThrottleMetadata(o),u}catch(u){const c=u;if(!ZD(c)){if(i.deleteThrottleMetadata(o),a)return cn.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:o,measurementId:a};throw u}const h=Number((s=c==null?void 0:c.customData)===null||s===void 0?void 0:s.httpStatus)===503?Fv(n,i.intervalMillis,WD):Fv(n,i.intervalMillis),f={throttleEndTimeMillis:Date.now()+h,backoffCount:n+1};return i.setThrottleMetadata(o,f),cn.debug(`Calling attemptFetch again in ${h} millis`),U1(t,f,r,i)}}function JD(t,e){return new Promise((n,r)=>{const i=Math.max(e-Date.now(),0),s=setTimeout(n,i);t.addEventListener(()=>{clearTimeout(s),r(wn.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function ZD(t){if(!(t instanceof tr)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class eO{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function tO(t,e,n,r,i){if(i&&i.global){t("event",n,r);return}else{const s=await e,o=Object.assign(Object.assign({},r),{send_to:s});t("event",n,o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nO(){if(xT())try{await kT()}catch(t){return cn.warn(wn.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return cn.warn(wn.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function rO(t,e,n,r,i,s,o){var a;const u=XD(t);u.then(m=>{n[m.measurementId]=m.appId,t.options.measurementId&&m.measurementId!==t.options.measurementId&&cn.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${m.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(m=>cn.error(m)),e.push(u);const c=nO().then(m=>{if(m)return r.getId()}),[h,f]=await Promise.all([u,c]);GD(s)||UD(s,h.measurementId),i("js",new Date);const g=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return g[DD]="firebase",g.update=!0,f!=null&&(g[ND]=f),i("config",h.measurementId,g),h.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iO{constructor(e){this.app=e}_delete(){return delete qa[this.app.options.appId],Promise.resolve()}}let qa={},p_=[];const m_={};let Uh="dataLayer",sO="gtag",g_,j1,y_=!1;function oO(){const t=[];if(bT()&&t.push("This is a browser extension environment."),dx()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=wn.create("invalid-analytics-context",{errorInfo:e});cn.warn(n.message)}}function aO(t,e,n){oO();const r=t.options.appId;if(!r)throw wn.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)cn.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw wn.create("no-api-key");if(qa[r]!=null)throw wn.create("already-exists",{id:r});if(!y_){jD(Uh);const{wrappedGtag:s,gtagCore:o}=HD(qa,p_,m_,Uh,sO);j1=s,g_=o,y_=!0}return qa[r]=rO(t,p_,m_,e,g_,Uh,n),new iO(t)}function lO(t=Am()){t=qt(t);const e=Ls(t,Bc);return e.isInitialized()?e.getImmediate():uO(t)}function uO(t,e={}){const n=Ls(t,Bc);if(n.isInitialized()){const i=n.getImmediate();if(_l(e,n.getOptions()))return i;throw wn.create("already-initialized")}return n.initialize({options:e})}function cO(t,e,n,r){t=qt(t),tO(j1,qa[t.app.options.appId],e,n,r).catch(i=>cn.error(i))}const v_="@firebase/analytics",__="0.10.9";function dO(){gr(new Zn(Bc,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return aO(r,i,n)},"PUBLIC")),gr(new Zn("analytics-internal",t,"PRIVATE")),Vn(v_,__),Vn(v_,__,"esm2017");function t(e){try{const n=e.getProvider(Bc).getImmediate();return{logEvent:(r,i,s)=>cO(n,r,i,s)}}catch(n){throw wn.create("interop-component-reg-failed",{reason:n})}}}dO();var w_=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ys,z1;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(I,y){function w(){}w.prototype=y.prototype,I.D=y.prototype,I.prototype=new w,I.prototype.constructor=I,I.C=function(C,k,x){for(var R=Array(arguments.length-2),ge=2;ge<arguments.length;ge++)R[ge-2]=arguments[ge];return y.prototype[k].apply(C,R)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(I,y,w){w||(w=0);var C=Array(16);if(typeof y=="string")for(var k=0;16>k;++k)C[k]=y.charCodeAt(w++)|y.charCodeAt(w++)<<8|y.charCodeAt(w++)<<16|y.charCodeAt(w++)<<24;else for(k=0;16>k;++k)C[k]=y[w++]|y[w++]<<8|y[w++]<<16|y[w++]<<24;y=I.g[0],w=I.g[1],k=I.g[2];var x=I.g[3],R=y+(x^w&(k^x))+C[0]+3614090360&4294967295;y=w+(R<<7&4294967295|R>>>25),R=x+(k^y&(w^k))+C[1]+3905402710&4294967295,x=y+(R<<12&4294967295|R>>>20),R=k+(w^x&(y^w))+C[2]+606105819&4294967295,k=x+(R<<17&4294967295|R>>>15),R=w+(y^k&(x^y))+C[3]+3250441966&4294967295,w=k+(R<<22&4294967295|R>>>10),R=y+(x^w&(k^x))+C[4]+4118548399&4294967295,y=w+(R<<7&4294967295|R>>>25),R=x+(k^y&(w^k))+C[5]+1200080426&4294967295,x=y+(R<<12&4294967295|R>>>20),R=k+(w^x&(y^w))+C[6]+2821735955&4294967295,k=x+(R<<17&4294967295|R>>>15),R=w+(y^k&(x^y))+C[7]+4249261313&4294967295,w=k+(R<<22&4294967295|R>>>10),R=y+(x^w&(k^x))+C[8]+1770035416&4294967295,y=w+(R<<7&4294967295|R>>>25),R=x+(k^y&(w^k))+C[9]+2336552879&4294967295,x=y+(R<<12&4294967295|R>>>20),R=k+(w^x&(y^w))+C[10]+4294925233&4294967295,k=x+(R<<17&4294967295|R>>>15),R=w+(y^k&(x^y))+C[11]+2304563134&4294967295,w=k+(R<<22&4294967295|R>>>10),R=y+(x^w&(k^x))+C[12]+1804603682&4294967295,y=w+(R<<7&4294967295|R>>>25),R=x+(k^y&(w^k))+C[13]+4254626195&4294967295,x=y+(R<<12&4294967295|R>>>20),R=k+(w^x&(y^w))+C[14]+2792965006&4294967295,k=x+(R<<17&4294967295|R>>>15),R=w+(y^k&(x^y))+C[15]+1236535329&4294967295,w=k+(R<<22&4294967295|R>>>10),R=y+(k^x&(w^k))+C[1]+4129170786&4294967295,y=w+(R<<5&4294967295|R>>>27),R=x+(w^k&(y^w))+C[6]+3225465664&4294967295,x=y+(R<<9&4294967295|R>>>23),R=k+(y^w&(x^y))+C[11]+643717713&4294967295,k=x+(R<<14&4294967295|R>>>18),R=w+(x^y&(k^x))+C[0]+3921069994&4294967295,w=k+(R<<20&4294967295|R>>>12),R=y+(k^x&(w^k))+C[5]+3593408605&4294967295,y=w+(R<<5&4294967295|R>>>27),R=x+(w^k&(y^w))+C[10]+38016083&4294967295,x=y+(R<<9&4294967295|R>>>23),R=k+(y^w&(x^y))+C[15]+3634488961&4294967295,k=x+(R<<14&4294967295|R>>>18),R=w+(x^y&(k^x))+C[4]+3889429448&4294967295,w=k+(R<<20&4294967295|R>>>12),R=y+(k^x&(w^k))+C[9]+568446438&4294967295,y=w+(R<<5&4294967295|R>>>27),R=x+(w^k&(y^w))+C[14]+3275163606&4294967295,x=y+(R<<9&4294967295|R>>>23),R=k+(y^w&(x^y))+C[3]+4107603335&4294967295,k=x+(R<<14&4294967295|R>>>18),R=w+(x^y&(k^x))+C[8]+1163531501&4294967295,w=k+(R<<20&4294967295|R>>>12),R=y+(k^x&(w^k))+C[13]+2850285829&4294967295,y=w+(R<<5&4294967295|R>>>27),R=x+(w^k&(y^w))+C[2]+4243563512&4294967295,x=y+(R<<9&4294967295|R>>>23),R=k+(y^w&(x^y))+C[7]+1735328473&4294967295,k=x+(R<<14&4294967295|R>>>18),R=w+(x^y&(k^x))+C[12]+2368359562&4294967295,w=k+(R<<20&4294967295|R>>>12),R=y+(w^k^x)+C[5]+4294588738&4294967295,y=w+(R<<4&4294967295|R>>>28),R=x+(y^w^k)+C[8]+2272392833&4294967295,x=y+(R<<11&4294967295|R>>>21),R=k+(x^y^w)+C[11]+1839030562&4294967295,k=x+(R<<16&4294967295|R>>>16),R=w+(k^x^y)+C[14]+4259657740&4294967295,w=k+(R<<23&4294967295|R>>>9),R=y+(w^k^x)+C[1]+2763975236&4294967295,y=w+(R<<4&4294967295|R>>>28),R=x+(y^w^k)+C[4]+1272893353&4294967295,x=y+(R<<11&4294967295|R>>>21),R=k+(x^y^w)+C[7]+4139469664&4294967295,k=x+(R<<16&4294967295|R>>>16),R=w+(k^x^y)+C[10]+3200236656&4294967295,w=k+(R<<23&4294967295|R>>>9),R=y+(w^k^x)+C[13]+681279174&4294967295,y=w+(R<<4&4294967295|R>>>28),R=x+(y^w^k)+C[0]+3936430074&4294967295,x=y+(R<<11&4294967295|R>>>21),R=k+(x^y^w)+C[3]+3572445317&4294967295,k=x+(R<<16&4294967295|R>>>16),R=w+(k^x^y)+C[6]+76029189&4294967295,w=k+(R<<23&4294967295|R>>>9),R=y+(w^k^x)+C[9]+3654602809&4294967295,y=w+(R<<4&4294967295|R>>>28),R=x+(y^w^k)+C[12]+3873151461&4294967295,x=y+(R<<11&4294967295|R>>>21),R=k+(x^y^w)+C[15]+530742520&4294967295,k=x+(R<<16&4294967295|R>>>16),R=w+(k^x^y)+C[2]+3299628645&4294967295,w=k+(R<<23&4294967295|R>>>9),R=y+(k^(w|~x))+C[0]+4096336452&4294967295,y=w+(R<<6&4294967295|R>>>26),R=x+(w^(y|~k))+C[7]+1126891415&4294967295,x=y+(R<<10&4294967295|R>>>22),R=k+(y^(x|~w))+C[14]+2878612391&4294967295,k=x+(R<<15&4294967295|R>>>17),R=w+(x^(k|~y))+C[5]+4237533241&4294967295,w=k+(R<<21&4294967295|R>>>11),R=y+(k^(w|~x))+C[12]+1700485571&4294967295,y=w+(R<<6&4294967295|R>>>26),R=x+(w^(y|~k))+C[3]+2399980690&4294967295,x=y+(R<<10&4294967295|R>>>22),R=k+(y^(x|~w))+C[10]+4293915773&4294967295,k=x+(R<<15&4294967295|R>>>17),R=w+(x^(k|~y))+C[1]+2240044497&4294967295,w=k+(R<<21&4294967295|R>>>11),R=y+(k^(w|~x))+C[8]+1873313359&4294967295,y=w+(R<<6&4294967295|R>>>26),R=x+(w^(y|~k))+C[15]+4264355552&4294967295,x=y+(R<<10&4294967295|R>>>22),R=k+(y^(x|~w))+C[6]+2734768916&4294967295,k=x+(R<<15&4294967295|R>>>17),R=w+(x^(k|~y))+C[13]+1309151649&4294967295,w=k+(R<<21&4294967295|R>>>11),R=y+(k^(w|~x))+C[4]+4149444226&4294967295,y=w+(R<<6&4294967295|R>>>26),R=x+(w^(y|~k))+C[11]+3174756917&4294967295,x=y+(R<<10&4294967295|R>>>22),R=k+(y^(x|~w))+C[2]+718787259&4294967295,k=x+(R<<15&4294967295|R>>>17),R=w+(x^(k|~y))+C[9]+3951481745&4294967295,I.g[0]=I.g[0]+y&4294967295,I.g[1]=I.g[1]+(k+(R<<21&4294967295|R>>>11))&4294967295,I.g[2]=I.g[2]+k&4294967295,I.g[3]=I.g[3]+x&4294967295}r.prototype.u=function(I,y){y===void 0&&(y=I.length);for(var w=y-this.blockSize,C=this.B,k=this.h,x=0;x<y;){if(k==0)for(;x<=w;)i(this,I,x),x+=this.blockSize;if(typeof I=="string"){for(;x<y;)if(C[k++]=I.charCodeAt(x++),k==this.blockSize){i(this,C),k=0;break}}else for(;x<y;)if(C[k++]=I[x++],k==this.blockSize){i(this,C),k=0;break}}this.h=k,this.o+=y},r.prototype.v=function(){var I=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);I[0]=128;for(var y=1;y<I.length-8;++y)I[y]=0;var w=8*this.o;for(y=I.length-8;y<I.length;++y)I[y]=w&255,w/=256;for(this.u(I),I=Array(16),y=w=0;4>y;++y)for(var C=0;32>C;C+=8)I[w++]=this.g[y]>>>C&255;return I};function s(I,y){var w=a;return Object.prototype.hasOwnProperty.call(w,I)?w[I]:w[I]=y(I)}function o(I,y){this.h=y;for(var w=[],C=!0,k=I.length-1;0<=k;k--){var x=I[k]|0;C&&x==y||(w[k]=x,C=!1)}this.g=w}var a={};function u(I){return-128<=I&&128>I?s(I,function(y){return new o([y|0],0>y?-1:0)}):new o([I|0],0>I?-1:0)}function c(I){if(isNaN(I)||!isFinite(I))return f;if(0>I)return N(c(-I));for(var y=[],w=1,C=0;I>=w;C++)y[C]=I/w|0,w*=4294967296;return new o(y,0)}function h(I,y){if(I.length==0)throw Error("number format error: empty string");if(y=y||10,2>y||36<y)throw Error("radix out of range: "+y);if(I.charAt(0)=="-")return N(h(I.substring(1),y));if(0<=I.indexOf("-"))throw Error('number format error: interior "-" character');for(var w=c(Math.pow(y,8)),C=f,k=0;k<I.length;k+=8){var x=Math.min(8,I.length-k),R=parseInt(I.substring(k,k+x),y);8>x?(x=c(Math.pow(y,x)),C=C.j(x).add(c(R))):(C=C.j(w),C=C.add(c(R)))}return C}var f=u(0),g=u(1),m=u(16777216);t=o.prototype,t.m=function(){if(A(this))return-N(this).m();for(var I=0,y=1,w=0;w<this.g.length;w++){var C=this.i(w);I+=(0<=C?C:4294967296+C)*y,y*=4294967296}return I},t.toString=function(I){if(I=I||10,2>I||36<I)throw Error("radix out of range: "+I);if(E(this))return"0";if(A(this))return"-"+N(this).toString(I);for(var y=c(Math.pow(I,6)),w=this,C="";;){var k=D(w,y).g;w=T(w,k.j(y));var x=((0<w.g.length?w.g[0]:w.h)>>>0).toString(I);if(w=k,E(w))return x+C;for(;6>x.length;)x="0"+x;C=x+C}},t.i=function(I){return 0>I?0:I<this.g.length?this.g[I]:this.h};function E(I){if(I.h!=0)return!1;for(var y=0;y<I.g.length;y++)if(I.g[y]!=0)return!1;return!0}function A(I){return I.h==-1}t.l=function(I){return I=T(this,I),A(I)?-1:E(I)?0:1};function N(I){for(var y=I.g.length,w=[],C=0;C<y;C++)w[C]=~I.g[C];return new o(w,~I.h).add(g)}t.abs=function(){return A(this)?N(this):this},t.add=function(I){for(var y=Math.max(this.g.length,I.g.length),w=[],C=0,k=0;k<=y;k++){var x=C+(this.i(k)&65535)+(I.i(k)&65535),R=(x>>>16)+(this.i(k)>>>16)+(I.i(k)>>>16);C=R>>>16,x&=65535,R&=65535,w[k]=R<<16|x}return new o(w,w[w.length-1]&-2147483648?-1:0)};function T(I,y){return I.add(N(y))}t.j=function(I){if(E(this)||E(I))return f;if(A(this))return A(I)?N(this).j(N(I)):N(N(this).j(I));if(A(I))return N(this.j(N(I)));if(0>this.l(m)&&0>I.l(m))return c(this.m()*I.m());for(var y=this.g.length+I.g.length,w=[],C=0;C<2*y;C++)w[C]=0;for(C=0;C<this.g.length;C++)for(var k=0;k<I.g.length;k++){var x=this.i(C)>>>16,R=this.i(C)&65535,ge=I.i(k)>>>16,ct=I.i(k)&65535;w[2*C+2*k]+=R*ct,_(w,2*C+2*k),w[2*C+2*k+1]+=x*ct,_(w,2*C+2*k+1),w[2*C+2*k+1]+=R*ge,_(w,2*C+2*k+1),w[2*C+2*k+2]+=x*ge,_(w,2*C+2*k+2)}for(C=0;C<y;C++)w[C]=w[2*C+1]<<16|w[2*C];for(C=y;C<2*y;C++)w[C]=0;return new o(w,0)};function _(I,y){for(;(I[y]&65535)!=I[y];)I[y+1]+=I[y]>>>16,I[y]&=65535,y++}function S(I,y){this.g=I,this.h=y}function D(I,y){if(E(y))throw Error("division by zero");if(E(I))return new S(f,f);if(A(I))return y=D(N(I),y),new S(N(y.g),N(y.h));if(A(y))return y=D(I,N(y)),new S(N(y.g),y.h);if(30<I.g.length){if(A(I)||A(y))throw Error("slowDivide_ only works with positive integers.");for(var w=g,C=y;0>=C.l(I);)w=j(w),C=j(C);var k=b(w,1),x=b(C,1);for(C=b(C,2),w=b(w,2);!E(C);){var R=x.add(C);0>=R.l(I)&&(k=k.add(w),x=R),C=b(C,1),w=b(w,1)}return y=T(I,k.j(y)),new S(k,y)}for(k=f;0<=I.l(y);){for(w=Math.max(1,Math.floor(I.m()/y.m())),C=Math.ceil(Math.log(w)/Math.LN2),C=48>=C?1:Math.pow(2,C-48),x=c(w),R=x.j(y);A(R)||0<R.l(I);)w-=C,x=c(w),R=x.j(y);E(x)&&(x=g),k=k.add(x),I=T(I,R)}return new S(k,I)}t.A=function(I){return D(this,I).h},t.and=function(I){for(var y=Math.max(this.g.length,I.g.length),w=[],C=0;C<y;C++)w[C]=this.i(C)&I.i(C);return new o(w,this.h&I.h)},t.or=function(I){for(var y=Math.max(this.g.length,I.g.length),w=[],C=0;C<y;C++)w[C]=this.i(C)|I.i(C);return new o(w,this.h|I.h)},t.xor=function(I){for(var y=Math.max(this.g.length,I.g.length),w=[],C=0;C<y;C++)w[C]=this.i(C)^I.i(C);return new o(w,this.h^I.h)};function j(I){for(var y=I.g.length+1,w=[],C=0;C<y;C++)w[C]=I.i(C)<<1|I.i(C-1)>>>31;return new o(w,I.h)}function b(I,y){var w=y>>5;y%=32;for(var C=I.g.length-w,k=[],x=0;x<C;x++)k[x]=0<y?I.i(x+w)>>>y|I.i(x+w+1)<<32-y:I.i(x+w);return new o(k,I.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,z1=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=c,o.fromString=h,ys=o}).apply(typeof w_<"u"?w_:typeof self<"u"?self:typeof window<"u"?window:{});var ku=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var B1,Da,$1,ec,np,H1,G1,W1;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(l,d,p){return l==Array.prototype||l==Object.prototype||(l[d]=p.value),l};function n(l){l=[typeof globalThis=="object"&&globalThis,l,typeof window=="object"&&window,typeof self=="object"&&self,typeof ku=="object"&&ku];for(var d=0;d<l.length;++d){var p=l[d];if(p&&p.Math==Math)return p}throw Error("Cannot find global object")}var r=n(this);function i(l,d){if(d)e:{var p=r;l=l.split(".");for(var v=0;v<l.length-1;v++){var M=l[v];if(!(M in p))break e;p=p[M]}l=l[l.length-1],v=p[l],d=d(v),d!=v&&d!=null&&e(p,l,{configurable:!0,writable:!0,value:d})}}function s(l,d){l instanceof String&&(l+="");var p=0,v=!1,M={next:function(){if(!v&&p<l.length){var F=p++;return{value:d(F,l[F]),done:!1}}return v=!0,{done:!0,value:void 0}}};return M[Symbol.iterator]=function(){return M},M}i("Array.prototype.values",function(l){return l||function(){return s(this,function(d,p){return p})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},a=this||self;function u(l){var d=typeof l;return d=d!="object"?d:l?Array.isArray(l)?"array":d:"null",d=="array"||d=="object"&&typeof l.length=="number"}function c(l){var d=typeof l;return d=="object"&&l!=null||d=="function"}function h(l,d,p){return l.call.apply(l.bind,arguments)}function f(l,d,p){if(!l)throw Error();if(2<arguments.length){var v=Array.prototype.slice.call(arguments,2);return function(){var M=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(M,v),l.apply(d,M)}}return function(){return l.apply(d,arguments)}}function g(l,d,p){return g=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?h:f,g.apply(null,arguments)}function m(l,d){var p=Array.prototype.slice.call(arguments,1);return function(){var v=p.slice();return v.push.apply(v,arguments),l.apply(this,v)}}function E(l,d){function p(){}p.prototype=d.prototype,l.aa=d.prototype,l.prototype=new p,l.prototype.constructor=l,l.Qb=function(v,M,F){for(var K=Array(arguments.length-2),je=2;je<arguments.length;je++)K[je-2]=arguments[je];return d.prototype[M].apply(v,K)}}function A(l){const d=l.length;if(0<d){const p=Array(d);for(let v=0;v<d;v++)p[v]=l[v];return p}return[]}function N(l,d){for(let p=1;p<arguments.length;p++){const v=arguments[p];if(u(v)){const M=l.length||0,F=v.length||0;l.length=M+F;for(let K=0;K<F;K++)l[M+K]=v[K]}else l.push(v)}}class T{constructor(d,p){this.i=d,this.j=p,this.h=0,this.g=null}get(){let d;return 0<this.h?(this.h--,d=this.g,this.g=d.next,d.next=null):d=this.i(),d}}function _(l){return/^[\s\xa0]*$/.test(l)}function S(){var l=a.navigator;return l&&(l=l.userAgent)?l:""}function D(l){return D[" "](l),l}D[" "]=function(){};var j=S().indexOf("Gecko")!=-1&&!(S().toLowerCase().indexOf("webkit")!=-1&&S().indexOf("Edge")==-1)&&!(S().indexOf("Trident")!=-1||S().indexOf("MSIE")!=-1)&&S().indexOf("Edge")==-1;function b(l,d,p){for(const v in l)d.call(p,l[v],v,l)}function I(l,d){for(const p in l)d.call(void 0,l[p],p,l)}function y(l){const d={};for(const p in l)d[p]=l[p];return d}const w="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function C(l,d){let p,v;for(let M=1;M<arguments.length;M++){v=arguments[M];for(p in v)l[p]=v[p];for(let F=0;F<w.length;F++)p=w[F],Object.prototype.hasOwnProperty.call(v,p)&&(l[p]=v[p])}}function k(l){var d=1;l=l.split(":");const p=[];for(;0<d&&l.length;)p.push(l.shift()),d--;return l.length&&p.push(l.join(":")),p}function x(l){a.setTimeout(()=>{throw l},0)}function R(){var l=G;let d=null;return l.g&&(d=l.g,l.g=l.g.next,l.g||(l.h=null),d.next=null),d}class ge{constructor(){this.h=this.g=null}add(d,p){const v=ct.get();v.set(d,p),this.h?this.h.next=v:this.g=v,this.h=v}}var ct=new T(()=>new et,l=>l.reset());class et{constructor(){this.next=this.g=this.h=null}set(d,p){this.h=d,this.g=p,this.next=null}reset(){this.next=this.g=this.h=null}}let ve,q=!1,G=new ge,Z=()=>{const l=a.Promise.resolve(void 0);ve=()=>{l.then(de)}};var de=()=>{for(var l;l=R();){try{l.h.call(l.g)}catch(p){x(p)}var d=ct;d.j(l),100>d.h&&(d.h++,l.next=d.g,d.g=l)}q=!1};function ne(){this.s=this.s,this.C=this.C}ne.prototype.s=!1,ne.prototype.ma=function(){this.s||(this.s=!0,this.N())},ne.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function re(l,d){this.type=l,this.g=this.target=d,this.defaultPrevented=!1}re.prototype.h=function(){this.defaultPrevented=!0};var pe=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var l=!1,d=Object.defineProperty({},"passive",{get:function(){l=!0}});try{const p=()=>{};a.addEventListener("test",p,d),a.removeEventListener("test",p,d)}catch{}return l}();function Ne(l,d){if(re.call(this,l?l.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,l){var p=this.type=l.type,v=l.changedTouches&&l.changedTouches.length?l.changedTouches[0]:null;if(this.target=l.target||l.srcElement,this.g=d,d=l.relatedTarget){if(j){e:{try{D(d.nodeName);var M=!0;break e}catch{}M=!1}M||(d=null)}}else p=="mouseover"?d=l.fromElement:p=="mouseout"&&(d=l.toElement);this.relatedTarget=d,v?(this.clientX=v.clientX!==void 0?v.clientX:v.pageX,this.clientY=v.clientY!==void 0?v.clientY:v.pageY,this.screenX=v.screenX||0,this.screenY=v.screenY||0):(this.clientX=l.clientX!==void 0?l.clientX:l.pageX,this.clientY=l.clientY!==void 0?l.clientY:l.pageY,this.screenX=l.screenX||0,this.screenY=l.screenY||0),this.button=l.button,this.key=l.key||"",this.ctrlKey=l.ctrlKey,this.altKey=l.altKey,this.shiftKey=l.shiftKey,this.metaKey=l.metaKey,this.pointerId=l.pointerId||0,this.pointerType=typeof l.pointerType=="string"?l.pointerType:Ge[l.pointerType]||"",this.state=l.state,this.i=l,l.defaultPrevented&&Ne.aa.h.call(this)}}E(Ne,re);var Ge={2:"touch",3:"pen",4:"mouse"};Ne.prototype.h=function(){Ne.aa.h.call(this);var l=this.i;l.preventDefault?l.preventDefault():l.returnValue=!1};var Re="closure_listenable_"+(1e6*Math.random()|0),Ki=0;function _r(l,d,p,v,M){this.listener=l,this.proxy=null,this.src=d,this.type=p,this.capture=!!v,this.ha=M,this.key=++Ki,this.da=this.fa=!1}function Rn(l){l.da=!0,l.listener=null,l.proxy=null,l.src=null,l.ha=null}function ze(l){this.src=l,this.g={},this.h=0}ze.prototype.add=function(l,d,p,v,M){var F=l.toString();l=this.g[F],l||(l=this.g[F]=[],this.h++);var K=wr(l,d,v,M);return-1<K?(d=l[K],p||(d.fa=!1)):(d=new _r(d,this.src,F,!!v,M),d.fa=p,l.push(d)),d};function An(l,d){var p=d.type;if(p in l.g){var v=l.g[p],M=Array.prototype.indexOf.call(v,d,void 0),F;(F=0<=M)&&Array.prototype.splice.call(v,M,1),F&&(Rn(d),l.g[p].length==0&&(delete l.g[p],l.h--))}}function wr(l,d,p,v){for(var M=0;M<l.length;++M){var F=l[M];if(!F.da&&F.listener==d&&F.capture==!!p&&F.ha==v)return M}return-1}var Qi="closure_lm_"+(1e6*Math.random()|0),Kt={};function Bs(l,d,p,v,M){if(Array.isArray(d)){for(var F=0;F<d.length;F++)Bs(l,d[F],p,v,M);return null}return p=Xi(p),l&&l[Re]?l.K(d,p,c(v)?!!v.capture:!!v,M):$s(l,d,p,!1,v,M)}function $s(l,d,p,v,M,F){if(!d)throw Error("Invalid event type");var K=c(M)?!!M.capture:!!M,je=Ye(l);if(je||(l[Qi]=je=new ze(l)),p=je.add(d,p,v,K,F),p.proxy)return p;if(v=Er(),p.proxy=v,v.src=l,v.listener=p,l.addEventListener)pe||(M=K),M===void 0&&(M=!1),l.addEventListener(d.toString(),v,M);else if(l.attachEvent)l.attachEvent(Hs(d.toString()),v);else if(l.addListener&&l.removeListener)l.addListener(v);else throw Error("addEventListener and attachEvent are unavailable.");return p}function Er(){function l(p){return d.call(l.src,l.listener,p)}const d=sa;return l}function Yi(l,d,p,v,M){if(Array.isArray(d))for(var F=0;F<d.length;F++)Yi(l,d[F],p,v,M);else v=c(v)?!!v.capture:!!v,p=Xi(p),l&&l[Re]?(l=l.i,d=String(d).toString(),d in l.g&&(F=l.g[d],p=wr(F,p,v,M),-1<p&&(Rn(F[p]),Array.prototype.splice.call(F,p,1),F.length==0&&(delete l.g[d],l.h--)))):l&&(l=Ye(l))&&(d=l.g[d.toString()],l=-1,d&&(l=wr(d,p,v,M)),(p=-1<l?d[l]:null)&&dn(p))}function dn(l){if(typeof l!="number"&&l&&!l.da){var d=l.src;if(d&&d[Re])An(d.i,l);else{var p=l.type,v=l.proxy;d.removeEventListener?d.removeEventListener(p,v,l.capture):d.detachEvent?d.detachEvent(Hs(p),v):d.addListener&&d.removeListener&&d.removeListener(v),(p=Ye(d))?(An(p,l),p.h==0&&(p.src=null,d[Qi]=null)):Rn(l)}}}function Hs(l){return l in Kt?Kt[l]:Kt[l]="on"+l}function sa(l,d){if(l.da)l=!0;else{d=new Ne(d,this);var p=l.listener,v=l.ha||l.src;l.fa&&dn(l),l=p.call(v,d)}return l}function Ye(l){return l=l[Qi],l instanceof ze?l:null}var Ot="__closure_events_fn_"+(1e9*Math.random()>>>0);function Xi(l){return typeof l=="function"?l:(l[Ot]||(l[Ot]=function(d){return l.handleEvent(d)}),l[Ot])}function ot(){ne.call(this),this.i=new ze(this),this.M=this,this.F=null}E(ot,ne),ot.prototype[Re]=!0,ot.prototype.removeEventListener=function(l,d,p,v){Yi(this,l,d,p,v)};function Le(l,d){var p,v=l.F;if(v)for(p=[];v;v=v.F)p.push(v);if(l=l.M,v=d.type||d,typeof d=="string")d=new re(d,l);else if(d instanceof re)d.target=d.target||l;else{var M=d;d=new re(v,l),C(d,M)}if(M=!0,p)for(var F=p.length-1;0<=F;F--){var K=d.g=p[F];M=Mt(K,v,!0,d)&&M}if(K=d.g=l,M=Mt(K,v,!0,d)&&M,M=Mt(K,v,!1,d)&&M,p)for(F=0;F<p.length;F++)K=d.g=p[F],M=Mt(K,v,!1,d)&&M}ot.prototype.N=function(){if(ot.aa.N.call(this),this.i){var l=this.i,d;for(d in l.g){for(var p=l.g[d],v=0;v<p.length;v++)Rn(p[v]);delete l.g[d],l.h--}}this.F=null},ot.prototype.K=function(l,d,p,v){return this.i.add(String(l),d,!1,p,v)},ot.prototype.L=function(l,d,p,v){return this.i.add(String(l),d,!0,p,v)};function Mt(l,d,p,v){if(d=l.i.g[String(d)],!d)return!0;d=d.concat();for(var M=!0,F=0;F<d.length;++F){var K=d[F];if(K&&!K.da&&K.capture==p){var je=K.listener,Rt=K.ha||K.src;K.fa&&An(l.i,K),M=je.call(Rt,v)!==!1&&M}}return M&&!v.defaultPrevented}function Tr(l,d,p){if(typeof l=="function")p&&(l=g(l,p));else if(l&&typeof l.handleEvent=="function")l=g(l.handleEvent,l);else throw Error("Invalid listener argument");return 2147483647<Number(d)?-1:a.setTimeout(l,d||0)}function Zt(l){l.g=Tr(()=>{l.g=null,l.i&&(l.i=!1,Zt(l))},l.l);const d=l.h;l.h=null,l.m.apply(null,d)}class Gs extends ne{constructor(d,p){super(),this.m=d,this.l=p,this.h=null,this.i=!1,this.g=null}j(d){this.h=arguments,this.g?this.i=!0:Zt(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function yt(l){ne.call(this),this.h=l,this.g={}}E(yt,ne);var Ji=[];function Zi(l){b(l.g,function(d,p){this.g.hasOwnProperty(p)&&dn(d)},l),l.g={}}yt.prototype.N=function(){yt.aa.N.call(this),Zi(this)},yt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Ir=a.JSON.stringify,Ws=a.JSON.parse,qs=class{stringify(l){return a.JSON.stringify(l,void 0)}parse(l){return a.JSON.parse(l,void 0)}};function Pn(){}Pn.prototype.h=null;function en(l){return l.h||(l.h=l.i())}function Xr(){}var oe={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Ae(){re.call(this,"d")}E(Ae,re);function Oe(){re.call(this,"c")}E(Oe,re);var dt={},Lt=null;function hn(){return Lt=Lt||new ot}dt.La="serverreachability";function Sr(l){re.call(this,dt.La,l)}E(Sr,re);function es(l){const d=hn();Le(d,new Sr(d))}dt.STAT_EVENT="statevent";function Zl(l,d){re.call(this,dt.STAT_EVENT,l),this.stat=d}E(Zl,re);function P(l){const d=hn();Le(d,new Zl(d,l))}dt.Ma="timingevent";function O(l,d){re.call(this,dt.Ma,l),this.size=d}E(O,re);function L(l,d){if(typeof l!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){l()},d)}function B(){this.g=!0}B.prototype.xa=function(){this.g=!1};function X(l,d,p,v,M,F){l.info(function(){if(l.g)if(F)for(var K="",je=F.split("&"),Rt=0;Rt<je.length;Rt++){var De=je[Rt].split("=");if(1<De.length){var Vt=De[0];De=De[1];var Ft=Vt.split("_");K=2<=Ft.length&&Ft[1]=="type"?K+(Vt+"="+De+"&"):K+(Vt+"=redacted&")}}else K=null;else K=F;return"XMLHTTP REQ ("+v+") [attempt "+M+"]: "+d+`
`+p+`
`+K})}function se(l,d,p,v,M,F,K){l.info(function(){return"XMLHTTP RESP ("+v+") [ attempt "+M+"]: "+d+`
`+p+`
`+F+" "+K})}function ae(l,d,p,v){l.info(function(){return"XMLHTTP TEXT ("+d+"): "+te(l,p)+(v?" "+v:"")})}function ee(l,d){l.info(function(){return"TIMEOUT: "+d})}B.prototype.info=function(){};function te(l,d){if(!l.g)return d;if(!d)return null;try{var p=JSON.parse(d);if(p){for(l=0;l<p.length;l++)if(Array.isArray(p[l])){var v=p[l];if(!(2>v.length)){var M=v[1];if(Array.isArray(M)&&!(1>M.length)){var F=M[0];if(F!="noop"&&F!="stop"&&F!="close")for(var K=1;K<M.length;K++)M[K]=""}}}}return Ir(p)}catch{return d}}var Q={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},ie={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},_e;function we(){}E(we,Pn),we.prototype.g=function(){return new XMLHttpRequest},we.prototype.i=function(){return{}},_e=new we;function Be(l,d,p,v){this.j=l,this.i=d,this.l=p,this.R=v||1,this.U=new yt(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Ve}function Ve(){this.i=null,this.g="",this.h=!1}var Pe={},$e={};function nr(l,d,p){l.L=1,l.v=ru(Rr(d)),l.m=p,l.P=!0,Jr(l,null)}function Jr(l,d){l.F=Date.now(),Zr(l),l.A=Rr(l.v);var p=l.A,v=l.R;Array.isArray(v)||(v=[String(v)]),Ng(p.i,"t",v),l.C=0,p=l.j.J,l.h=new Ve,l.g=Yg(l.j,p?d:null,!l.m),0<l.O&&(l.M=new Gs(g(l.Y,l,l.g),l.O)),d=l.U,p=l.g,v=l.ca;var M="readystatechange";Array.isArray(M)||(M&&(Ji[0]=M.toString()),M=Ji);for(var F=0;F<M.length;F++){var K=Bs(p,M[F],v||d.handleEvent,!1,d.h||d);if(!K)break;d.g[K.key]=K}d=l.H?y(l.H):{},l.m?(l.u||(l.u="POST"),d["Content-Type"]="application/x-www-form-urlencoded",l.g.ea(l.A,l.u,l.m,d)):(l.u="GET",l.g.ea(l.A,l.u,null,d)),es(),X(l.i,l.u,l.A,l.l,l.R,l.m)}Be.prototype.ca=function(l){l=l.target;const d=this.M;d&&Ar(l)==3?d.j():this.Y(l)},Be.prototype.Y=function(l){try{if(l==this.g)e:{const Ft=Ar(this.g);var d=this.g.Ba();const Xs=this.g.Z();if(!(3>Ft)&&(Ft!=3||this.g&&(this.h.h||this.g.oa()||Ug(this.g)))){this.J||Ft!=4||d==7||(d==8||0>=Xs?es(3):es(2)),zn(this);var p=this.g.Z();this.X=p;t:if(bn(this)){var v=Ug(this.g);l="";var M=v.length,F=Ar(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){kn(this),rr(this);var K="";break t}this.h.i=new a.TextDecoder}for(d=0;d<M;d++)this.h.h=!0,l+=this.h.i.decode(v[d],{stream:!(F&&d==M-1)});v.length=0,this.h.g+=l,this.C=0,K=this.h.g}else K=this.g.oa();if(this.o=p==200,se(this.i,this.u,this.A,this.l,this.R,Ft,p),this.o){if(this.T&&!this.K){t:{if(this.g){var je,Rt=this.g;if((je=Rt.g?Rt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!_(je)){var De=je;break t}}De=null}if(p=De)ae(this.i,this.l,p,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Te(this,p);else{this.o=!1,this.s=3,P(12),kn(this),rr(this);break e}}if(this.P){p=!0;let Bn;for(;!this.J&&this.C<K.length;)if(Bn=xn(this,K),Bn==$e){Ft==4&&(this.s=4,P(14),p=!1),ae(this.i,this.l,null,"[Incomplete Response]");break}else if(Bn==Pe){this.s=4,P(15),ae(this.i,this.l,K,"[Invalid Chunk]"),p=!1;break}else ae(this.i,this.l,Bn,null),Te(this,Bn);if(bn(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Ft!=4||K.length!=0||this.h.h||(this.s=1,P(16),p=!1),this.o=this.o&&p,!p)ae(this.i,this.l,K,"[Invalid Chunked Response]"),kn(this),rr(this);else if(0<K.length&&!this.W){this.W=!0;var Vt=this.j;Vt.g==this&&Vt.ba&&!Vt.M&&(Vt.j.info("Great, no buffering proxy detected. Bytes received: "+K.length),Jd(Vt),Vt.M=!0,P(11))}}else ae(this.i,this.l,K,null),Te(this,K);Ft==4&&kn(this),this.o&&!this.J&&(Ft==4?Wg(this.j,this):(this.o=!1,Zr(this)))}else XS(this.g),p==400&&0<K.indexOf("Unknown SID")?(this.s=3,P(12)):(this.s=0,P(13)),kn(this),rr(this)}}}catch{}finally{}};function bn(l){return l.g?l.u=="GET"&&l.L!=2&&l.j.Ca:!1}function xn(l,d){var p=l.C,v=d.indexOf(`
`,p);return v==-1?$e:(p=Number(d.substring(p,v)),isNaN(p)?Pe:(v+=1,v+p>d.length?$e:(d=d.slice(v,v+p),l.C=v+p,d)))}Be.prototype.cancel=function(){this.J=!0,kn(this)};function Zr(l){l.S=Date.now()+l.I,ei(l,l.I)}function ei(l,d){if(l.B!=null)throw Error("WatchDog timer not null");l.B=L(g(l.ba,l),d)}function zn(l){l.B&&(a.clearTimeout(l.B),l.B=null)}Be.prototype.ba=function(){this.B=null;const l=Date.now();0<=l-this.S?(ee(this.i,this.A),this.L!=2&&(es(),P(17)),kn(this),this.s=2,rr(this)):ei(this,this.S-l)};function rr(l){l.j.G==0||l.J||Wg(l.j,l)}function kn(l){zn(l);var d=l.M;d&&typeof d.ma=="function"&&d.ma(),l.M=null,Zi(l.U),l.g&&(d=l.g,l.g=null,d.abort(),d.ma())}function Te(l,d){try{var p=l.j;if(p.G!=0&&(p.g==l||ir(p.h,l))){if(!l.K&&ir(p.h,l)&&p.G==3){try{var v=p.Da.g.parse(d)}catch{v=null}if(Array.isArray(v)&&v.length==3){var M=v;if(M[0]==0){e:if(!p.u){if(p.g)if(p.g.F+3e3<l.F)uu(p),au(p);else break e;Xd(p),P(18)}}else p.za=M[1],0<p.za-p.T&&37500>M[2]&&p.F&&p.v==0&&!p.C&&(p.C=L(g(p.Za,p),6e3));if(1>=tt(p.h)&&p.ca){try{p.ca()}catch{}p.ca=void 0}}else ns(p,11)}else if((l.K||p.g==l)&&uu(p),!_(d))for(M=p.Da.g.parse(d),d=0;d<M.length;d++){let De=M[d];if(p.T=De[0],De=De[1],p.G==2)if(De[0]=="c"){p.K=De[1],p.ia=De[2];const Vt=De[3];Vt!=null&&(p.la=Vt,p.j.info("VER="+p.la));const Ft=De[4];Ft!=null&&(p.Aa=Ft,p.j.info("SVER="+p.Aa));const Xs=De[5];Xs!=null&&typeof Xs=="number"&&0<Xs&&(v=1.5*Xs,p.L=v,p.j.info("backChannelRequestTimeoutMs_="+v)),v=p;const Bn=l.g;if(Bn){const du=Bn.g?Bn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(du){var F=v.h;F.g||du.indexOf("spdy")==-1&&du.indexOf("quic")==-1&&du.indexOf("h2")==-1||(F.j=F.l,F.g=new Set,F.h&&(Ks(F,F.h),F.h=null))}if(v.D){const Zd=Bn.g?Bn.g.getResponseHeader("X-HTTP-Session-Id"):null;Zd&&(v.ya=Zd,We(v.I,v.D,Zd))}}p.G=3,p.l&&p.l.ua(),p.ba&&(p.R=Date.now()-l.F,p.j.info("Handshake RTT: "+p.R+"ms")),v=p;var K=l;if(v.qa=Qg(v,v.J?v.ia:null,v.W),K.K){eu(v.h,K);var je=K,Rt=v.L;Rt&&(je.I=Rt),je.B&&(zn(je),Zr(je)),v.g=K}else Hg(v);0<p.i.length&&lu(p)}else De[0]!="stop"&&De[0]!="close"||ns(p,7);else p.G==3&&(De[0]=="stop"||De[0]=="close"?De[0]=="stop"?ns(p,7):Yd(p):De[0]!="noop"&&p.l&&p.l.ta(De),p.v=0)}}es(4)}catch{}}var Xe=class{constructor(l,d){this.g=l,this.map=d}};function Cr(l){this.l=l||10,a.PerformanceNavigationTiming?(l=a.performance.getEntriesByType("navigation"),l=0<l.length&&(l[0].nextHopProtocol=="hq"||l[0].nextHopProtocol=="h2")):l=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=l?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function ti(l){return l.h?!0:l.g?l.g.size>=l.j:!1}function tt(l){return l.h?1:l.g?l.g.size:0}function ir(l,d){return l.h?l.h==d:l.g?l.g.has(d):!1}function Ks(l,d){l.g?l.g.add(d):l.h=d}function eu(l,d){l.h&&l.h==d?l.h=null:l.g&&l.g.has(d)&&l.g.delete(d)}Cr.prototype.cancel=function(){if(this.i=Cg(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const l of this.g.values())l.cancel();this.g.clear()}};function Cg(l){if(l.h!=null)return l.i.concat(l.h.D);if(l.g!=null&&l.g.size!==0){let d=l.i;for(const p of l.g.values())d=d.concat(p.D);return d}return A(l.i)}function LS(l){if(l.V&&typeof l.V=="function")return l.V();if(typeof Map<"u"&&l instanceof Map||typeof Set<"u"&&l instanceof Set)return Array.from(l.values());if(typeof l=="string")return l.split("");if(u(l)){for(var d=[],p=l.length,v=0;v<p;v++)d.push(l[v]);return d}d=[],p=0;for(v in l)d[p++]=l[v];return d}function VS(l){if(l.na&&typeof l.na=="function")return l.na();if(!l.V||typeof l.V!="function"){if(typeof Map<"u"&&l instanceof Map)return Array.from(l.keys());if(!(typeof Set<"u"&&l instanceof Set)){if(u(l)||typeof l=="string"){var d=[];l=l.length;for(var p=0;p<l;p++)d.push(p);return d}d=[],p=0;for(const v in l)d[p++]=v;return d}}}function Rg(l,d){if(l.forEach&&typeof l.forEach=="function")l.forEach(d,void 0);else if(u(l)||typeof l=="string")Array.prototype.forEach.call(l,d,void 0);else for(var p=VS(l),v=LS(l),M=v.length,F=0;F<M;F++)d.call(void 0,v[F],p&&p[F],l)}var Ag=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function FS(l,d){if(l){l=l.split("&");for(var p=0;p<l.length;p++){var v=l[p].indexOf("="),M=null;if(0<=v){var F=l[p].substring(0,v);M=l[p].substring(v+1)}else F=l[p];d(F,M?decodeURIComponent(M.replace(/\+/g," ")):"")}}}function ts(l){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,l instanceof ts){this.h=l.h,tu(this,l.j),this.o=l.o,this.g=l.g,nu(this,l.s),this.l=l.l;var d=l.i,p=new la;p.i=d.i,d.g&&(p.g=new Map(d.g),p.h=d.h),Pg(this,p),this.m=l.m}else l&&(d=String(l).match(Ag))?(this.h=!1,tu(this,d[1]||"",!0),this.o=oa(d[2]||""),this.g=oa(d[3]||"",!0),nu(this,d[4]),this.l=oa(d[5]||"",!0),Pg(this,d[6]||"",!0),this.m=oa(d[7]||"")):(this.h=!1,this.i=new la(null,this.h))}ts.prototype.toString=function(){var l=[],d=this.j;d&&l.push(aa(d,bg,!0),":");var p=this.g;return(p||d=="file")&&(l.push("//"),(d=this.o)&&l.push(aa(d,bg,!0),"@"),l.push(encodeURIComponent(String(p)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),p=this.s,p!=null&&l.push(":",String(p))),(p=this.l)&&(this.g&&p.charAt(0)!="/"&&l.push("/"),l.push(aa(p,p.charAt(0)=="/"?zS:jS,!0))),(p=this.i.toString())&&l.push("?",p),(p=this.m)&&l.push("#",aa(p,$S)),l.join("")};function Rr(l){return new ts(l)}function tu(l,d,p){l.j=p?oa(d,!0):d,l.j&&(l.j=l.j.replace(/:$/,""))}function nu(l,d){if(d){if(d=Number(d),isNaN(d)||0>d)throw Error("Bad port number "+d);l.s=d}else l.s=null}function Pg(l,d,p){d instanceof la?(l.i=d,HS(l.i,l.h)):(p||(d=aa(d,BS)),l.i=new la(d,l.h))}function We(l,d,p){l.i.set(d,p)}function ru(l){return We(l,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),l}function oa(l,d){return l?d?decodeURI(l.replace(/%25/g,"%2525")):decodeURIComponent(l):""}function aa(l,d,p){return typeof l=="string"?(l=encodeURI(l).replace(d,US),p&&(l=l.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l):null}function US(l){return l=l.charCodeAt(0),"%"+(l>>4&15).toString(16)+(l&15).toString(16)}var bg=/[#\/\?@]/g,jS=/[#\?:]/g,zS=/[#\?]/g,BS=/[#\?@]/g,$S=/#/g;function la(l,d){this.h=this.g=null,this.i=l||null,this.j=!!d}function ni(l){l.g||(l.g=new Map,l.h=0,l.i&&FS(l.i,function(d,p){l.add(decodeURIComponent(d.replace(/\+/g," ")),p)}))}t=la.prototype,t.add=function(l,d){ni(this),this.i=null,l=Qs(this,l);var p=this.g.get(l);return p||this.g.set(l,p=[]),p.push(d),this.h+=1,this};function xg(l,d){ni(l),d=Qs(l,d),l.g.has(d)&&(l.i=null,l.h-=l.g.get(d).length,l.g.delete(d))}function kg(l,d){return ni(l),d=Qs(l,d),l.g.has(d)}t.forEach=function(l,d){ni(this),this.g.forEach(function(p,v){p.forEach(function(M){l.call(d,M,v,this)},this)},this)},t.na=function(){ni(this);const l=Array.from(this.g.values()),d=Array.from(this.g.keys()),p=[];for(let v=0;v<d.length;v++){const M=l[v];for(let F=0;F<M.length;F++)p.push(d[v])}return p},t.V=function(l){ni(this);let d=[];if(typeof l=="string")kg(this,l)&&(d=d.concat(this.g.get(Qs(this,l))));else{l=Array.from(this.g.values());for(let p=0;p<l.length;p++)d=d.concat(l[p])}return d},t.set=function(l,d){return ni(this),this.i=null,l=Qs(this,l),kg(this,l)&&(this.h-=this.g.get(l).length),this.g.set(l,[d]),this.h+=1,this},t.get=function(l,d){return l?(l=this.V(l),0<l.length?String(l[0]):d):d};function Ng(l,d,p){xg(l,d),0<p.length&&(l.i=null,l.g.set(Qs(l,d),A(p)),l.h+=p.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const l=[],d=Array.from(this.g.keys());for(var p=0;p<d.length;p++){var v=d[p];const F=encodeURIComponent(String(v)),K=this.V(v);for(v=0;v<K.length;v++){var M=F;K[v]!==""&&(M+="="+encodeURIComponent(String(K[v]))),l.push(M)}}return this.i=l.join("&")};function Qs(l,d){return d=String(d),l.j&&(d=d.toLowerCase()),d}function HS(l,d){d&&!l.j&&(ni(l),l.i=null,l.g.forEach(function(p,v){var M=v.toLowerCase();v!=M&&(xg(this,v),Ng(this,M,p))},l)),l.j=d}function GS(l,d){const p=new B;if(a.Image){const v=new Image;v.onload=m(ri,p,"TestLoadImage: loaded",!0,d,v),v.onerror=m(ri,p,"TestLoadImage: error",!1,d,v),v.onabort=m(ri,p,"TestLoadImage: abort",!1,d,v),v.ontimeout=m(ri,p,"TestLoadImage: timeout",!1,d,v),a.setTimeout(function(){v.ontimeout&&v.ontimeout()},1e4),v.src=l}else d(!1)}function WS(l,d){const p=new B,v=new AbortController,M=setTimeout(()=>{v.abort(),ri(p,"TestPingServer: timeout",!1,d)},1e4);fetch(l,{signal:v.signal}).then(F=>{clearTimeout(M),F.ok?ri(p,"TestPingServer: ok",!0,d):ri(p,"TestPingServer: server error",!1,d)}).catch(()=>{clearTimeout(M),ri(p,"TestPingServer: error",!1,d)})}function ri(l,d,p,v,M){try{M&&(M.onload=null,M.onerror=null,M.onabort=null,M.ontimeout=null),v(p)}catch{}}function qS(){this.g=new qs}function KS(l,d,p){const v=p||"";try{Rg(l,function(M,F){let K=M;c(M)&&(K=Ir(M)),d.push(v+F+"="+encodeURIComponent(K))})}catch(M){throw d.push(v+"type="+encodeURIComponent("_badmap")),M}}function iu(l){this.l=l.Ub||null,this.j=l.eb||!1}E(iu,Pn),iu.prototype.g=function(){return new su(this.l,this.j)},iu.prototype.i=function(l){return function(){return l}}({});function su(l,d){ot.call(this),this.D=l,this.o=d,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}E(su,ot),t=su.prototype,t.open=function(l,d){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=l,this.A=d,this.readyState=1,ca(this)},t.send=function(l){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const d={headers:this.u,method:this.B,credentials:this.m,cache:void 0};l&&(d.body=l),(this.D||a).fetch(new Request(this.A,d)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ua(this)),this.readyState=0},t.Sa=function(l){if(this.g&&(this.l=l,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=l.headers,this.readyState=2,ca(this)),this.g&&(this.readyState=3,ca(this),this.g)))if(this.responseType==="arraybuffer")l.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in l){if(this.j=l.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Dg(this)}else l.text().then(this.Ra.bind(this),this.ga.bind(this))};function Dg(l){l.j.read().then(l.Pa.bind(l)).catch(l.ga.bind(l))}t.Pa=function(l){if(this.g){if(this.o&&l.value)this.response.push(l.value);else if(!this.o){var d=l.value?l.value:new Uint8Array(0);(d=this.v.decode(d,{stream:!l.done}))&&(this.response=this.responseText+=d)}l.done?ua(this):ca(this),this.readyState==3&&Dg(this)}},t.Ra=function(l){this.g&&(this.response=this.responseText=l,ua(this))},t.Qa=function(l){this.g&&(this.response=l,ua(this))},t.ga=function(){this.g&&ua(this)};function ua(l){l.readyState=4,l.l=null,l.j=null,l.v=null,ca(l)}t.setRequestHeader=function(l,d){this.u.append(l,d)},t.getResponseHeader=function(l){return this.h&&this.h.get(l.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const l=[],d=this.h.entries();for(var p=d.next();!p.done;)p=p.value,l.push(p[0]+": "+p[1]),p=d.next();return l.join(`\r
`)};function ca(l){l.onreadystatechange&&l.onreadystatechange.call(l)}Object.defineProperty(su.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(l){this.m=l?"include":"same-origin"}});function Og(l){let d="";return b(l,function(p,v){d+=v,d+=":",d+=p,d+=`\r
`}),d}function Qd(l,d,p){e:{for(v in p){var v=!1;break e}v=!0}v||(p=Og(p),typeof l=="string"?p!=null&&encodeURIComponent(String(p)):We(l,d,p))}function at(l){ot.call(this),this.headers=new Map,this.o=l||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}E(at,ot);var QS=/^https?$/i,YS=["POST","PUT"];t=at.prototype,t.Ha=function(l){this.J=l},t.ea=function(l,d,p,v){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+l);d=d?d.toUpperCase():"GET",this.D=l,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():_e.g(),this.v=this.o?en(this.o):en(_e),this.g.onreadystatechange=g(this.Ea,this);try{this.B=!0,this.g.open(d,String(l),!0),this.B=!1}catch(F){Mg(this,F);return}if(l=p||"",p=new Map(this.headers),v)if(Object.getPrototypeOf(v)===Object.prototype)for(var M in v)p.set(M,v[M]);else if(typeof v.keys=="function"&&typeof v.get=="function")for(const F of v.keys())p.set(F,v.get(F));else throw Error("Unknown input type for opt_headers: "+String(v));v=Array.from(p.keys()).find(F=>F.toLowerCase()=="content-type"),M=a.FormData&&l instanceof a.FormData,!(0<=Array.prototype.indexOf.call(YS,d,void 0))||v||M||p.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[F,K]of p)this.g.setRequestHeader(F,K);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Fg(this),this.u=!0,this.g.send(l),this.u=!1}catch(F){Mg(this,F)}};function Mg(l,d){l.h=!1,l.g&&(l.j=!0,l.g.abort(),l.j=!1),l.l=d,l.m=5,Lg(l),ou(l)}function Lg(l){l.A||(l.A=!0,Le(l,"complete"),Le(l,"error"))}t.abort=function(l){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=l||7,Le(this,"complete"),Le(this,"abort"),ou(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),ou(this,!0)),at.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Vg(this):this.bb())},t.bb=function(){Vg(this)};function Vg(l){if(l.h&&typeof o<"u"&&(!l.v[1]||Ar(l)!=4||l.Z()!=2)){if(l.u&&Ar(l)==4)Tr(l.Ea,0,l);else if(Le(l,"readystatechange"),Ar(l)==4){l.h=!1;try{const K=l.Z();e:switch(K){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var d=!0;break e;default:d=!1}var p;if(!(p=d)){var v;if(v=K===0){var M=String(l.D).match(Ag)[1]||null;!M&&a.self&&a.self.location&&(M=a.self.location.protocol.slice(0,-1)),v=!QS.test(M?M.toLowerCase():"")}p=v}if(p)Le(l,"complete"),Le(l,"success");else{l.m=6;try{var F=2<Ar(l)?l.g.statusText:""}catch{F=""}l.l=F+" ["+l.Z()+"]",Lg(l)}}finally{ou(l)}}}}function ou(l,d){if(l.g){Fg(l);const p=l.g,v=l.v[0]?()=>{}:null;l.g=null,l.v=null,d||Le(l,"ready");try{p.onreadystatechange=v}catch{}}}function Fg(l){l.I&&(a.clearTimeout(l.I),l.I=null)}t.isActive=function(){return!!this.g};function Ar(l){return l.g?l.g.readyState:0}t.Z=function(){try{return 2<Ar(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(l){if(this.g){var d=this.g.responseText;return l&&d.indexOf(l)==0&&(d=d.substring(l.length)),Ws(d)}};function Ug(l){try{if(!l.g)return null;if("response"in l.g)return l.g.response;switch(l.H){case"":case"text":return l.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in l.g)return l.g.mozResponseArrayBuffer}return null}catch{return null}}function XS(l){const d={};l=(l.g&&2<=Ar(l)&&l.g.getAllResponseHeaders()||"").split(`\r
`);for(let v=0;v<l.length;v++){if(_(l[v]))continue;var p=k(l[v]);const M=p[0];if(p=p[1],typeof p!="string")continue;p=p.trim();const F=d[M]||[];d[M]=F,F.push(p)}I(d,function(v){return v.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function da(l,d,p){return p&&p.internalChannelParams&&p.internalChannelParams[l]||d}function jg(l){this.Aa=0,this.i=[],this.j=new B,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=da("failFast",!1,l),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=da("baseRetryDelayMs",5e3,l),this.cb=da("retryDelaySeedMs",1e4,l),this.Wa=da("forwardChannelMaxRetries",2,l),this.wa=da("forwardChannelRequestTimeoutMs",2e4,l),this.pa=l&&l.xmlHttpFactory||void 0,this.Xa=l&&l.Tb||void 0,this.Ca=l&&l.useFetchStreams||!1,this.L=void 0,this.J=l&&l.supportsCrossDomainXhr||!1,this.K="",this.h=new Cr(l&&l.concurrentRequestLimit),this.Da=new qS,this.P=l&&l.fastHandshake||!1,this.O=l&&l.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=l&&l.Rb||!1,l&&l.xa&&this.j.xa(),l&&l.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&l&&l.detectBufferingProxy||!1,this.ja=void 0,l&&l.longPollingTimeout&&0<l.longPollingTimeout&&(this.ja=l.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=jg.prototype,t.la=8,t.G=1,t.connect=function(l,d,p,v){P(0),this.W=l,this.H=d||{},p&&v!==void 0&&(this.H.OSID=p,this.H.OAID=v),this.F=this.X,this.I=Qg(this,null,this.W),lu(this)};function Yd(l){if(zg(l),l.G==3){var d=l.U++,p=Rr(l.I);if(We(p,"SID",l.K),We(p,"RID",d),We(p,"TYPE","terminate"),ha(l,p),d=new Be(l,l.j,d),d.L=2,d.v=ru(Rr(p)),p=!1,a.navigator&&a.navigator.sendBeacon)try{p=a.navigator.sendBeacon(d.v.toString(),"")}catch{}!p&&a.Image&&(new Image().src=d.v,p=!0),p||(d.g=Yg(d.j,null),d.g.ea(d.v)),d.F=Date.now(),Zr(d)}Kg(l)}function au(l){l.g&&(Jd(l),l.g.cancel(),l.g=null)}function zg(l){au(l),l.u&&(a.clearTimeout(l.u),l.u=null),uu(l),l.h.cancel(),l.s&&(typeof l.s=="number"&&a.clearTimeout(l.s),l.s=null)}function lu(l){if(!ti(l.h)&&!l.s){l.s=!0;var d=l.Ga;ve||Z(),q||(ve(),q=!0),G.add(d,l),l.B=0}}function JS(l,d){return tt(l.h)>=l.h.j-(l.s?1:0)?!1:l.s?(l.i=d.D.concat(l.i),!0):l.G==1||l.G==2||l.B>=(l.Va?0:l.Wa)?!1:(l.s=L(g(l.Ga,l,d),qg(l,l.B)),l.B++,!0)}t.Ga=function(l){if(this.s)if(this.s=null,this.G==1){if(!l){this.U=Math.floor(1e5*Math.random()),l=this.U++;const M=new Be(this,this.j,l);let F=this.o;if(this.S&&(F?(F=y(F),C(F,this.S)):F=this.S),this.m!==null||this.O||(M.H=F,F=null),this.P)e:{for(var d=0,p=0;p<this.i.length;p++){t:{var v=this.i[p];if("__data__"in v.map&&(v=v.map.__data__,typeof v=="string")){v=v.length;break t}v=void 0}if(v===void 0)break;if(d+=v,4096<d){d=p;break e}if(d===4096||p===this.i.length-1){d=p+1;break e}}d=1e3}else d=1e3;d=$g(this,M,d),p=Rr(this.I),We(p,"RID",l),We(p,"CVER",22),this.D&&We(p,"X-HTTP-Session-Id",this.D),ha(this,p),F&&(this.O?d="headers="+encodeURIComponent(String(Og(F)))+"&"+d:this.m&&Qd(p,this.m,F)),Ks(this.h,M),this.Ua&&We(p,"TYPE","init"),this.P?(We(p,"$req",d),We(p,"SID","null"),M.T=!0,nr(M,p,null)):nr(M,p,d),this.G=2}}else this.G==3&&(l?Bg(this,l):this.i.length==0||ti(this.h)||Bg(this))};function Bg(l,d){var p;d?p=d.l:p=l.U++;const v=Rr(l.I);We(v,"SID",l.K),We(v,"RID",p),We(v,"AID",l.T),ha(l,v),l.m&&l.o&&Qd(v,l.m,l.o),p=new Be(l,l.j,p,l.B+1),l.m===null&&(p.H=l.o),d&&(l.i=d.D.concat(l.i)),d=$g(l,p,1e3),p.I=Math.round(.5*l.wa)+Math.round(.5*l.wa*Math.random()),Ks(l.h,p),nr(p,v,d)}function ha(l,d){l.H&&b(l.H,function(p,v){We(d,v,p)}),l.l&&Rg({},function(p,v){We(d,v,p)})}function $g(l,d,p){p=Math.min(l.i.length,p);var v=l.l?g(l.l.Na,l.l,l):null;e:{var M=l.i;let F=-1;for(;;){const K=["count="+p];F==-1?0<p?(F=M[0].g,K.push("ofs="+F)):F=0:K.push("ofs="+F);let je=!0;for(let Rt=0;Rt<p;Rt++){let De=M[Rt].g;const Vt=M[Rt].map;if(De-=F,0>De)F=Math.max(0,M[Rt].g-100),je=!1;else try{KS(Vt,K,"req"+De+"_")}catch{v&&v(Vt)}}if(je){v=K.join("&");break e}}}return l=l.i.splice(0,p),d.D=l,v}function Hg(l){if(!l.g&&!l.u){l.Y=1;var d=l.Fa;ve||Z(),q||(ve(),q=!0),G.add(d,l),l.v=0}}function Xd(l){return l.g||l.u||3<=l.v?!1:(l.Y++,l.u=L(g(l.Fa,l),qg(l,l.v)),l.v++,!0)}t.Fa=function(){if(this.u=null,Gg(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var l=2*this.R;this.j.info("BP detection timer enabled: "+l),this.A=L(g(this.ab,this),l)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,P(10),au(this),Gg(this))};function Jd(l){l.A!=null&&(a.clearTimeout(l.A),l.A=null)}function Gg(l){l.g=new Be(l,l.j,"rpc",l.Y),l.m===null&&(l.g.H=l.o),l.g.O=0;var d=Rr(l.qa);We(d,"RID","rpc"),We(d,"SID",l.K),We(d,"AID",l.T),We(d,"CI",l.F?"0":"1"),!l.F&&l.ja&&We(d,"TO",l.ja),We(d,"TYPE","xmlhttp"),ha(l,d),l.m&&l.o&&Qd(d,l.m,l.o),l.L&&(l.g.I=l.L);var p=l.g;l=l.ia,p.L=1,p.v=ru(Rr(d)),p.m=null,p.P=!0,Jr(p,l)}t.Za=function(){this.C!=null&&(this.C=null,au(this),Xd(this),P(19))};function uu(l){l.C!=null&&(a.clearTimeout(l.C),l.C=null)}function Wg(l,d){var p=null;if(l.g==d){uu(l),Jd(l),l.g=null;var v=2}else if(ir(l.h,d))p=d.D,eu(l.h,d),v=1;else return;if(l.G!=0){if(d.o)if(v==1){p=d.m?d.m.length:0,d=Date.now()-d.F;var M=l.B;v=hn(),Le(v,new O(v,p)),lu(l)}else Hg(l);else if(M=d.s,M==3||M==0&&0<d.X||!(v==1&&JS(l,d)||v==2&&Xd(l)))switch(p&&0<p.length&&(d=l.h,d.i=d.i.concat(p)),M){case 1:ns(l,5);break;case 4:ns(l,10);break;case 3:ns(l,6);break;default:ns(l,2)}}}function qg(l,d){let p=l.Ta+Math.floor(Math.random()*l.cb);return l.isActive()||(p*=2),p*d}function ns(l,d){if(l.j.info("Error code "+d),d==2){var p=g(l.fb,l),v=l.Xa;const M=!v;v=new ts(v||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||tu(v,"https"),ru(v),M?GS(v.toString(),p):WS(v.toString(),p)}else P(2);l.G=0,l.l&&l.l.sa(d),Kg(l),zg(l)}t.fb=function(l){l?(this.j.info("Successfully pinged google.com"),P(2)):(this.j.info("Failed to ping google.com"),P(1))};function Kg(l){if(l.G=0,l.ka=[],l.l){const d=Cg(l.h);(d.length!=0||l.i.length!=0)&&(N(l.ka,d),N(l.ka,l.i),l.h.i.length=0,A(l.i),l.i.length=0),l.l.ra()}}function Qg(l,d,p){var v=p instanceof ts?Rr(p):new ts(p);if(v.g!="")d&&(v.g=d+"."+v.g),nu(v,v.s);else{var M=a.location;v=M.protocol,d=d?d+"."+M.hostname:M.hostname,M=+M.port;var F=new ts(null);v&&tu(F,v),d&&(F.g=d),M&&nu(F,M),p&&(F.l=p),v=F}return p=l.D,d=l.ya,p&&d&&We(v,p,d),We(v,"VER",l.la),ha(l,v),v}function Yg(l,d,p){if(d&&!l.J)throw Error("Can't create secondary domain capable XhrIo object.");return d=l.Ca&&!l.pa?new at(new iu({eb:p})):new at(l.pa),d.Ha(l.J),d}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Xg(){}t=Xg.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function cu(){}cu.prototype.g=function(l,d){return new fn(l,d)};function fn(l,d){ot.call(this),this.g=new jg(d),this.l=l,this.h=d&&d.messageUrlParams||null,l=d&&d.messageHeaders||null,d&&d.clientProtocolHeaderRequired&&(l?l["X-Client-Protocol"]="webchannel":l={"X-Client-Protocol":"webchannel"}),this.g.o=l,l=d&&d.initMessageHeaders||null,d&&d.messageContentType&&(l?l["X-WebChannel-Content-Type"]=d.messageContentType:l={"X-WebChannel-Content-Type":d.messageContentType}),d&&d.va&&(l?l["X-WebChannel-Client-Profile"]=d.va:l={"X-WebChannel-Client-Profile":d.va}),this.g.S=l,(l=d&&d.Sb)&&!_(l)&&(this.g.m=l),this.v=d&&d.supportsCrossDomainXhr||!1,this.u=d&&d.sendRawJson||!1,(d=d&&d.httpSessionIdParam)&&!_(d)&&(this.g.D=d,l=this.h,l!==null&&d in l&&(l=this.h,d in l&&delete l[d])),this.j=new Ys(this)}E(fn,ot),fn.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},fn.prototype.close=function(){Yd(this.g)},fn.prototype.o=function(l){var d=this.g;if(typeof l=="string"){var p={};p.__data__=l,l=p}else this.u&&(p={},p.__data__=Ir(l),l=p);d.i.push(new Xe(d.Ya++,l)),d.G==3&&lu(d)},fn.prototype.N=function(){this.g.l=null,delete this.j,Yd(this.g),delete this.g,fn.aa.N.call(this)};function Jg(l){Ae.call(this),l.__headers__&&(this.headers=l.__headers__,this.statusCode=l.__status__,delete l.__headers__,delete l.__status__);var d=l.__sm__;if(d){e:{for(const p in d){l=p;break e}l=void 0}(this.i=l)&&(l=this.i,d=d!==null&&l in d?d[l]:void 0),this.data=d}else this.data=l}E(Jg,Ae);function Zg(){Oe.call(this),this.status=1}E(Zg,Oe);function Ys(l){this.g=l}E(Ys,Xg),Ys.prototype.ua=function(){Le(this.g,"a")},Ys.prototype.ta=function(l){Le(this.g,new Jg(l))},Ys.prototype.sa=function(l){Le(this.g,new Zg)},Ys.prototype.ra=function(){Le(this.g,"b")},cu.prototype.createWebChannel=cu.prototype.g,fn.prototype.send=fn.prototype.o,fn.prototype.open=fn.prototype.m,fn.prototype.close=fn.prototype.close,W1=function(){return new cu},G1=function(){return hn()},H1=dt,np={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Q.NO_ERROR=0,Q.TIMEOUT=8,Q.HTTP_ERROR=6,ec=Q,ie.COMPLETE="complete",$1=ie,Xr.EventType=oe,oe.OPEN="a",oe.CLOSE="b",oe.ERROR="c",oe.MESSAGE="d",ot.prototype.listen=ot.prototype.K,Da=Xr,at.prototype.listenOnce=at.prototype.L,at.prototype.getLastError=at.prototype.Ka,at.prototype.getLastErrorCode=at.prototype.Ba,at.prototype.getStatus=at.prototype.Z,at.prototype.getResponseJson=at.prototype.Oa,at.prototype.getResponseText=at.prototype.oa,at.prototype.send=at.prototype.ea,at.prototype.setWithCredentials=at.prototype.Ha,B1=at}).apply(typeof ku<"u"?ku:typeof self<"u"?self:typeof window<"u"?window:{});const E_="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Bt.UNAUTHENTICATED=new Bt(null),Bt.GOOGLE_CREDENTIALS=new Bt("google-credentials-uid"),Bt.FIRST_PARTY=new Bt("first-party-uid"),Bt.MOCK_USER=new Bt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ta="11.0.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ps=new Ad("@firebase/firestore");function no(){return Ps.logLevel}function Y(t,...e){if(Ps.logLevel<=Ie.DEBUG){const n=e.map(Bm);Ps.debug(`Firestore (${ta}): ${t}`,...n)}}function Wr(t,...e){if(Ps.logLevel<=Ie.ERROR){const n=e.map(Bm);Ps.error(`Firestore (${ta}): ${t}`,...n)}}function jo(t,...e){if(Ps.logLevel<=Ie.WARN){const n=e.map(Bm);Ps.warn(`Firestore (${ta}): ${t}`,...n)}}function Bm(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function he(t="Unexpected state"){const e=`FIRESTORE (${ta}) INTERNAL ASSERTION FAILED: `+t;throw Wr(e),new Error(e)}function Me(t,e){t||he()}function me(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class le extends tr{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ni{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q1{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class hO{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Bt.UNAUTHENTICATED))}shutdown(){}}class fO{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class pO{constructor(e){this.t=e,this.currentUser=Bt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Me(this.o===void 0);let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new Ni;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Ni,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},a=u=>{Y("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>a(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?a(u):(Y("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Ni)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(Y("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Me(typeof r.accessToken=="string"),new q1(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Me(e===null||typeof e=="string"),new Bt(e)}}class mO{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=Bt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class gO{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new mO(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(Bt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class yO{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class vO{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){Me(this.o===void 0);const r=s=>{s.error!=null&&Y("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,Y("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{Y("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):Y("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Me(typeof n.token=="string"),this.R=n.token,new yO(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _O(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K1{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=_O(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function xe(t,e){return t<e?-1:t>e?1:0}function zo(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new le($.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new le($.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new le($.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new le($.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Et.fromMillis(Date.now())}static fromDate(e){return Et.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Et(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?xe(this.nanoseconds,e.nanoseconds):xe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fe{constructor(e){this.timestamp=e}static fromTimestamp(e){return new fe(e)}static min(){return new fe(new Et(0,0))}static max(){return new fe(new Et(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tl{constructor(e,n,r){n===void 0?n=0:n>e.length&&he(),r===void 0?r=e.length-n:r>e.length-n&&he(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Tl.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Tl?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class ut extends Tl{construct(e,n,r){return new ut(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new le($.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new ut(n)}static emptyPath(){return new ut([])}}const wO=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class xt extends Tl{construct(e,n,r){return new xt(e,n,r)}static isValidIdentifier(e){return wO.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),xt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new xt(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new le($.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new le($.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new le($.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new le($.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new xt(n)}static emptyPath(){return new xt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ue{constructor(e){this.path=e}static fromPath(e){return new ue(ut.fromString(e))}static fromName(e){return new ue(ut.fromString(e).popFirst(5))}static empty(){return new ue(ut.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ut.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return ut.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ue(new ut(e.slice()))}}function EO(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=fe.fromTimestamp(r===1e9?new Et(n+1,0):new Et(n,r));return new Li(i,ue.empty(),e)}function TO(t){return new Li(t.readTime,t.key,-1)}class Li{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Li(fe.min(),ue.empty(),-1)}static max(){return new Li(fe.max(),ue.empty(),-1)}}function IO(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=ue.comparator(t.documentKey,e.documentKey),n!==0?n:xe(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SO="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class CO{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function na(t){if(t.code!==$.FAILED_PRECONDITION||t.message!==SO)throw t;Y("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&he(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new z((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof z?n:z.resolve(n)}catch(n){return z.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):z.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):z.reject(n)}static resolve(e){return new z((n,r)=>{n(e)})}static reject(e){return new z((n,r)=>{r(e)})}static waitFor(e){return new z((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},u=>r(u))}),o=!0,s===i&&n()})}static or(e){let n=z.resolve(!1);for(const r of e)n=n.next(i=>i?z.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new z((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let u=0;u<s;u++){const c=u;n(e[c]).next(h=>{o[c]=h,++a,a===s&&r(o)},h=>i(h))}})}static doWhile(e,n){return new z((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function RO(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function ra(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dd{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Dd.oe=-1;function Od(t){return t==null}function $c(t){return t===0&&1/t==-1/0}function AO(t){return typeof t=="number"&&Number.isInteger(t)&&!$c(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PO(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=T_(e)),e=bO(t.get(n),e);return T_(e)}function bO(t,e){let n=e;const r=t.length;for(let i=0;i<r;i++){const s=t.charAt(i);switch(s){case"\0":n+="";break;case"":n+="";break;default:n+=s}}return n}function T_(t){return t+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function I_(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Fs(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Q1(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st{constructor(e,n){this.comparator=e,this.root=n||bt.EMPTY}insert(e,n){return new st(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,bt.BLACK,null,null))}remove(e){return new st(this.comparator,this.root.remove(e,this.comparator).copy(null,null,bt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Nu(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Nu(this.root,e,this.comparator,!1)}getReverseIterator(){return new Nu(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Nu(this.root,e,this.comparator,!0)}}class Nu{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class bt{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??bt.RED,this.left=i??bt.EMPTY,this.right=s??bt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new bt(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return bt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return bt.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,bt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,bt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw he();const e=this.left.check();if(e!==this.right.check())throw he();return e+(this.isRed()?0:1)}}bt.EMPTY=null,bt.RED=!0,bt.BLACK=!1;bt.EMPTY=new class{constructor(){this.size=0}get key(){throw he()}get value(){throw he()}get color(){throw he()}get left(){throw he()}get right(){throw he()}copy(e,n,r,i,s){return this}insert(e,n,r){return new bt(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct{constructor(e){this.comparator=e,this.data=new st(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new S_(this.data.getIterator())}getIteratorFrom(e){return new S_(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Ct)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Ct(this.comparator);return n.data=e,n}}class S_{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qn{constructor(e){this.fields=e,e.sort(xt.comparator)}static empty(){return new Qn([])}unionWith(e){let n=new Ct(xt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Qn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return zo(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y1 extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new Y1("Invalid base64 string: "+s):s}}(e);return new Dt(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new Dt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return xe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Dt.EMPTY_BYTE_STRING=new Dt("");const xO=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Vi(t){if(Me(!!t),typeof t=="string"){let e=0;const n=xO.exec(t);if(Me(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:ht(t.seconds),nanos:ht(t.nanos)}}function ht(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Fi(t){return typeof t=="string"?Dt.fromBase64String(t):Dt.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $m(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Md(t){const e=t.mapValue.fields.__previous_value__;return $m(e)?Md(e):e}function Il(t){const e=Vi(t.mapValue.fields.__local_write_time__.timestampValue);return new Et(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kO{constructor(e,n,r,i,s,o,a,u,c){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=u,this.useFetchStreams=c}}class Sl{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Sl("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Sl&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Du={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Ui(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?$m(t)?4:DO(t)?9007199254740991:NO(t)?10:11:he()}function yr(t,e){if(t===e)return!0;const n=Ui(t);if(n!==Ui(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Il(t).isEqual(Il(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=Vi(i.timestampValue),a=Vi(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return Fi(i.bytesValue).isEqual(Fi(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return ht(i.geoPointValue.latitude)===ht(s.geoPointValue.latitude)&&ht(i.geoPointValue.longitude)===ht(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return ht(i.integerValue)===ht(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=ht(i.doubleValue),a=ht(s.doubleValue);return o===a?$c(o)===$c(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return zo(t.arrayValue.values||[],e.arrayValue.values||[],yr);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(I_(o)!==I_(a))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(a[u]===void 0||!yr(o[u],a[u])))return!1;return!0}(t,e);default:return he()}}function Cl(t,e){return(t.values||[]).find(n=>yr(n,e))!==void 0}function Bo(t,e){if(t===e)return 0;const n=Ui(t),r=Ui(e);if(n!==r)return xe(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return xe(t.booleanValue,e.booleanValue);case 2:return function(s,o){const a=ht(s.integerValue||s.doubleValue),u=ht(o.integerValue||o.doubleValue);return a<u?-1:a>u?1:a===u?0:isNaN(a)?isNaN(u)?0:-1:1}(t,e);case 3:return C_(t.timestampValue,e.timestampValue);case 4:return C_(Il(t),Il(e));case 5:return xe(t.stringValue,e.stringValue);case 6:return function(s,o){const a=Fi(s),u=Fi(o);return a.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const a=s.split("/"),u=o.split("/");for(let c=0;c<a.length&&c<u.length;c++){const h=xe(a[c],u[c]);if(h!==0)return h}return xe(a.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const a=xe(ht(s.latitude),ht(o.latitude));return a!==0?a:xe(ht(s.longitude),ht(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return R_(t.arrayValue,e.arrayValue);case 10:return function(s,o){var a,u,c,h;const f=s.fields||{},g=o.fields||{},m=(a=f.value)===null||a===void 0?void 0:a.arrayValue,E=(u=g.value)===null||u===void 0?void 0:u.arrayValue,A=xe(((c=m==null?void 0:m.values)===null||c===void 0?void 0:c.length)||0,((h=E==null?void 0:E.values)===null||h===void 0?void 0:h.length)||0);return A!==0?A:R_(m,E)}(t.mapValue,e.mapValue);case 11:return function(s,o){if(s===Du.mapValue&&o===Du.mapValue)return 0;if(s===Du.mapValue)return 1;if(o===Du.mapValue)return-1;const a=s.fields||{},u=Object.keys(a),c=o.fields||{},h=Object.keys(c);u.sort(),h.sort();for(let f=0;f<u.length&&f<h.length;++f){const g=xe(u[f],h[f]);if(g!==0)return g;const m=Bo(a[u[f]],c[h[f]]);if(m!==0)return m}return xe(u.length,h.length)}(t.mapValue,e.mapValue);default:throw he()}}function C_(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return xe(t,e);const n=Vi(t),r=Vi(e),i=xe(n.seconds,r.seconds);return i!==0?i:xe(n.nanos,r.nanos)}function R_(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const s=Bo(n[i],r[i]);if(s)return s}return xe(n.length,r.length)}function $o(t){return rp(t)}function rp(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Vi(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Fi(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return ue.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=rp(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${rp(n.fields[o])}`;return i+"}"}(t.mapValue):he()}function tc(t){switch(Ui(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Md(t);return e?16+tc(e):16;case 5:return 2*t.stringValue.length;case 6:return Fi(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((i,s)=>i+tc(s),0)}(t.arrayValue);case 10:case 11:return function(r){let i=0;return Fs(r.fields,(s,o)=>{i+=s.length+tc(o)}),i}(t.mapValue);default:throw he()}}function ip(t){return!!t&&"integerValue"in t}function Hm(t){return!!t&&"arrayValue"in t}function A_(t){return!!t&&"nullValue"in t}function P_(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function nc(t){return!!t&&"mapValue"in t}function NO(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function Ka(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Fs(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Ka(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Ka(t.arrayValue.values[n]);return e}return Object.assign({},t)}function DO(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class On{constructor(e){this.value=e}static empty(){return new On({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!nc(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ka(n)}setAll(e){let n=xt.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=Ka(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());nc(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return yr(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];nc(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Fs(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new On(Ka(this.value))}}function X1(t){const e=[];return Fs(t.fields,(n,r)=>{const i=new xt([n]);if(nc(r)){const s=X1(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Qn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ht{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Ht(e,0,fe.min(),fe.min(),fe.min(),On.empty(),0)}static newFoundDocument(e,n,r,i){return new Ht(e,1,n,fe.min(),r,i,0)}static newNoDocument(e,n){return new Ht(e,2,n,fe.min(),fe.min(),On.empty(),0)}static newUnknownDocument(e,n){return new Ht(e,3,n,fe.min(),fe.min(),On.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(fe.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=On.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=On.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=fe.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ht&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ht(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hc{constructor(e,n){this.position=e,this.inclusive=n}}function b_(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=ue.comparator(ue.fromName(o.referenceValue),n.key):r=Bo(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function x_(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!yr(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gc{constructor(e,n="asc"){this.field=e,this.dir=n}}function OO(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J1{}class _t extends J1{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new LO(e,n,r):n==="array-contains"?new UO(e,r):n==="in"?new jO(e,r):n==="not-in"?new zO(e,r):n==="array-contains-any"?new BO(e,r):new _t(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new VO(e,r):new FO(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Bo(n,this.value)):n!==null&&Ui(this.value)===Ui(n)&&this.matchesComparison(Bo(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return he()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class vr extends J1{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new vr(e,n)}matches(e){return Z1(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Z1(t){return t.op==="and"}function eI(t){return MO(t)&&Z1(t)}function MO(t){for(const e of t.filters)if(e instanceof vr)return!1;return!0}function sp(t){if(t instanceof _t)return t.field.canonicalString()+t.op.toString()+$o(t.value);if(eI(t))return t.filters.map(e=>sp(e)).join(",");{const e=t.filters.map(n=>sp(n)).join(",");return`${t.op}(${e})`}}function tI(t,e){return t instanceof _t?function(r,i){return i instanceof _t&&r.op===i.op&&r.field.isEqual(i.field)&&yr(r.value,i.value)}(t,e):t instanceof vr?function(r,i){return i instanceof vr&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&tI(o,i.filters[a]),!0):!1}(t,e):void he()}function nI(t){return t instanceof _t?function(n){return`${n.field.canonicalString()} ${n.op} ${$o(n.value)}`}(t):t instanceof vr?function(n){return n.op.toString()+" {"+n.getFilters().map(nI).join(" ,")+"}"}(t):"Filter"}class LO extends _t{constructor(e,n,r){super(e,n,r),this.key=ue.fromName(r.referenceValue)}matches(e){const n=ue.comparator(e.key,this.key);return this.matchesComparison(n)}}class VO extends _t{constructor(e,n){super(e,"in",n),this.keys=rI("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class FO extends _t{constructor(e,n){super(e,"not-in",n),this.keys=rI("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function rI(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>ue.fromName(r.referenceValue))}class UO extends _t{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Hm(n)&&Cl(n.arrayValue,this.value)}}class jO extends _t{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Cl(this.value.arrayValue,n)}}class zO extends _t{constructor(e,n){super(e,"not-in",n)}matches(e){if(Cl(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Cl(this.value.arrayValue,n)}}class BO extends _t{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Hm(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Cl(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $O{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ue=null}}function k_(t,e=null,n=[],r=[],i=null,s=null,o=null){return new $O(t,e,n,r,i,s,o)}function Gm(t){const e=me(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>sp(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Od(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>$o(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>$o(r)).join(",")),e.ue=n}return e.ue}function Wm(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!OO(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!tI(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!x_(t.startAt,e.startAt)&&x_(t.endAt,e.endAt)}function op(t){return ue.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ld{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function HO(t,e,n,r,i,s,o,a){return new Ld(t,e,n,r,i,s,o,a)}function qm(t){return new Ld(t)}function N_(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function GO(t){return t.collectionGroup!==null}function Qa(t){const e=me(t);if(e.ce===null){e.ce=[];const n=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new Ct(xt.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(c=>{c.isInequality()&&(a=a.add(c.field))})}),a})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.ce.push(new Gc(s,r))}),n.has(xt.keyField().canonicalString())||e.ce.push(new Gc(xt.keyField(),r))}return e.ce}function fr(t){const e=me(t);return e.le||(e.le=WO(e,Qa(t))),e.le}function WO(t,e){if(t.limitType==="F")return k_(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new Gc(i.field,s)});const n=t.endAt?new Hc(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Hc(t.startAt.position,t.startAt.inclusive):null;return k_(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function ap(t,e,n){return new Ld(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Vd(t,e){return Wm(fr(t),fr(e))&&t.limitType===e.limitType}function iI(t){return`${Gm(fr(t))}|lt:${t.limitType}`}function ro(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>nI(i)).join(", ")}]`),Od(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>$o(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>$o(i)).join(",")),`Target(${r})`}(fr(t))}; limitType=${t.limitType})`}function Fd(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):ue.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of Qa(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,a,u){const c=b_(o,a,u);return o.inclusive?c<=0:c<0}(r.startAt,Qa(r),i)||r.endAt&&!function(o,a,u){const c=b_(o,a,u);return o.inclusive?c>=0:c>0}(r.endAt,Qa(r),i))}(t,e)}function qO(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function sI(t){return(e,n)=>{let r=!1;for(const i of Qa(t)){const s=KO(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function KO(t,e,n){const r=t.field.isKeyField()?ue.comparator(e.key,n.key):function(s,o,a){const u=o.data.field(s),c=a.data.field(s);return u!==null&&c!==null?Bo(u,c):he()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return he()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Us{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Fs(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return Q1(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QO=new st(ue.comparator);function qr(){return QO}const oI=new st(ue.comparator);function Oa(...t){let e=oI;for(const n of t)e=e.insert(n.key,n);return e}function aI(t){let e=oI;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function ps(){return Ya()}function lI(){return Ya()}function Ya(){return new Us(t=>t.toString(),(t,e)=>t.isEqual(e))}const YO=new st(ue.comparator),XO=new Ct(ue.comparator);function Ce(...t){let e=XO;for(const n of t)e=e.add(n);return e}const JO=new Ct(xe);function ZO(){return JO}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Km(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:$c(e)?"-0":e}}function uI(t){return{integerValue:""+t}}function eM(t,e){return AO(e)?uI(e):Km(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ud{constructor(){this._=void 0}}function tM(t,e,n){return t instanceof Wc?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&$m(s)&&(s=Md(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof Rl?dI(t,e):t instanceof Al?hI(t,e):function(i,s){const o=cI(i,s),a=D_(o)+D_(i.Pe);return ip(o)&&ip(i.Pe)?uI(a):Km(i.serializer,a)}(t,e)}function nM(t,e,n){return t instanceof Rl?dI(t,e):t instanceof Al?hI(t,e):n}function cI(t,e){return t instanceof qc?function(r){return ip(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class Wc extends Ud{}class Rl extends Ud{constructor(e){super(),this.elements=e}}function dI(t,e){const n=fI(e);for(const r of t.elements)n.some(i=>yr(i,r))||n.push(r);return{arrayValue:{values:n}}}class Al extends Ud{constructor(e){super(),this.elements=e}}function hI(t,e){let n=fI(e);for(const r of t.elements)n=n.filter(i=>!yr(i,r));return{arrayValue:{values:n}}}class qc extends Ud{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function D_(t){return ht(t.integerValue||t.doubleValue)}function fI(t){return Hm(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function rM(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof Rl&&i instanceof Rl||r instanceof Al&&i instanceof Al?zo(r.elements,i.elements,yr):r instanceof qc&&i instanceof qc?yr(r.Pe,i.Pe):r instanceof Wc&&i instanceof Wc}(t.transform,e.transform)}class iM{constructor(e,n){this.version=e,this.transformResults=n}}class Ur{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Ur}static exists(e){return new Ur(void 0,e)}static updateTime(e){return new Ur(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function rc(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class jd{}function pI(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new gI(t.key,Ur.none()):new Wl(t.key,t.data,Ur.none());{const n=t.data,r=On.empty();let i=new Ct(xt.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new js(t.key,r,new Qn(i.toArray()),Ur.none())}}function sM(t,e,n){t instanceof Wl?function(i,s,o){const a=i.value.clone(),u=M_(i.fieldTransforms,s,o.transformResults);a.setAll(u),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof js?function(i,s,o){if(!rc(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=M_(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(mI(i)),u.setAll(a),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Xa(t,e,n,r){return t instanceof Wl?function(s,o,a,u){if(!rc(s.precondition,o))return a;const c=s.value.clone(),h=L_(s.fieldTransforms,u,o);return c.setAll(h),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof js?function(s,o,a,u){if(!rc(s.precondition,o))return a;const c=L_(s.fieldTransforms,u,o),h=o.data;return h.setAll(mI(s)),h.setAll(c),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(f=>f.field))}(t,e,n,r):function(s,o,a){return rc(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function oM(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=cI(r.transform,i||null);s!=null&&(n===null&&(n=On.empty()),n.set(r.field,s))}return n||null}function O_(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&zo(r,i,(s,o)=>rM(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Wl extends jd{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class js extends jd{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function mI(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function M_(t,e,n){const r=new Map;Me(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,nM(o,a,n[i]))}return r}function L_(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,tM(s,o,e))}return r}class gI extends jd{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class aM extends jd{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lM{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&sM(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Xa(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Xa(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=lI();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const u=pI(o,a);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(fe.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Ce())}isEqual(e){return this.batchId===e.batchId&&zo(this.mutations,e.mutations,(n,r)=>O_(n,r))&&zo(this.baseMutations,e.baseMutations,(n,r)=>O_(n,r))}}class Qm{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){Me(e.mutations.length===r.length);let i=function(){return YO}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new Qm(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uM{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cM{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var pt,be;function dM(t){switch(t){default:return he();case $.CANCELLED:case $.UNKNOWN:case $.DEADLINE_EXCEEDED:case $.RESOURCE_EXHAUSTED:case $.INTERNAL:case $.UNAVAILABLE:case $.UNAUTHENTICATED:return!1;case $.INVALID_ARGUMENT:case $.NOT_FOUND:case $.ALREADY_EXISTS:case $.PERMISSION_DENIED:case $.FAILED_PRECONDITION:case $.ABORTED:case $.OUT_OF_RANGE:case $.UNIMPLEMENTED:case $.DATA_LOSS:return!0}}function yI(t){if(t===void 0)return Wr("GRPC error has no .code"),$.UNKNOWN;switch(t){case pt.OK:return $.OK;case pt.CANCELLED:return $.CANCELLED;case pt.UNKNOWN:return $.UNKNOWN;case pt.DEADLINE_EXCEEDED:return $.DEADLINE_EXCEEDED;case pt.RESOURCE_EXHAUSTED:return $.RESOURCE_EXHAUSTED;case pt.INTERNAL:return $.INTERNAL;case pt.UNAVAILABLE:return $.UNAVAILABLE;case pt.UNAUTHENTICATED:return $.UNAUTHENTICATED;case pt.INVALID_ARGUMENT:return $.INVALID_ARGUMENT;case pt.NOT_FOUND:return $.NOT_FOUND;case pt.ALREADY_EXISTS:return $.ALREADY_EXISTS;case pt.PERMISSION_DENIED:return $.PERMISSION_DENIED;case pt.FAILED_PRECONDITION:return $.FAILED_PRECONDITION;case pt.ABORTED:return $.ABORTED;case pt.OUT_OF_RANGE:return $.OUT_OF_RANGE;case pt.UNIMPLEMENTED:return $.UNIMPLEMENTED;case pt.DATA_LOSS:return $.DATA_LOSS;default:return he()}}(be=pt||(pt={}))[be.OK=0]="OK",be[be.CANCELLED=1]="CANCELLED",be[be.UNKNOWN=2]="UNKNOWN",be[be.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",be[be.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",be[be.NOT_FOUND=5]="NOT_FOUND",be[be.ALREADY_EXISTS=6]="ALREADY_EXISTS",be[be.PERMISSION_DENIED=7]="PERMISSION_DENIED",be[be.UNAUTHENTICATED=16]="UNAUTHENTICATED",be[be.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",be[be.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",be[be.ABORTED=10]="ABORTED",be[be.OUT_OF_RANGE=11]="OUT_OF_RANGE",be[be.UNIMPLEMENTED=12]="UNIMPLEMENTED",be[be.INTERNAL=13]="INTERNAL",be[be.UNAVAILABLE=14]="UNAVAILABLE",be[be.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hM(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fM=new ys([4294967295,4294967295],0);function V_(t){const e=hM().encode(t),n=new z1;return n.update(e),new Uint8Array(n.digest())}function F_(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new ys([n,r],0),new ys([i,s],0)]}class Ym{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Ma(`Invalid padding: ${n}`);if(r<0)throw new Ma(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Ma(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Ma(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=ys.fromNumber(this.Ie)}Ee(e,n,r){let i=e.add(n.multiply(ys.fromNumber(r)));return i.compare(fM)===1&&(i=new ys([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=V_(e),[r,i]=F_(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);if(!this.de(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new Ym(s,i,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Ie===0)return;const n=V_(e),[r,i]=F_(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Ma extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zd{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,ql.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new zd(fe.min(),i,new st(xe),qr(),Ce())}}class ql{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new ql(r,n,Ce(),Ce(),Ce())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ic{constructor(e,n,r,i){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=i}}class vI{constructor(e,n){this.targetId=e,this.me=n}}class _I{constructor(e,n,r=Dt.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class U_{constructor(){this.fe=0,this.ge=z_(),this.pe=Dt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=Ce(),n=Ce(),r=Ce();return this.ge.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:he()}}),new ql(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=z_()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,Me(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class pM{constructor(e){this.Le=e,this.Be=new Map,this.ke=qr(),this.qe=j_(),this.Qe=new st(xe)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:he()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,i)=>{this.ze(i)&&n(i)})}He(e){const n=e.targetId,r=e.me.count,i=this.Je(n);if(i){const s=i.target;if(op(s))if(r===0){const o=new ue(s.path);this.Ue(n,o,Ht.newNoDocument(o,fe.min()))}else Me(r===1);else{const o=this.Ye(n);if(o!==r){const a=this.Ze(e),u=a?this.Xe(a,e,o):1;if(u!==0){this.je(n);const c=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,c)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,a;try{o=Fi(r).toUint8Array()}catch(u){if(u instanceof Y1)return jo("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{a=new Ym(o,i,s)}catch(u){return jo(u instanceof Ma?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return a.Ie===0?null:a}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Le.tt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(a)||(this.Ue(n,s,null),i++)}),i}rt(e){const n=new Map;this.Be.forEach((s,o)=>{const a=this.Je(o);if(a){if(s.current&&op(a.target)){const u=new ue(a.target.path);this.ke.get(u)!==null||this.it(o,u)||this.Ue(o,u,Ht.newNoDocument(u,e))}s.be&&(n.set(o,s.ve()),s.Ce())}});let r=Ce();this.qe.forEach((s,o)=>{let a=!0;o.forEachWhile(u=>{const c=this.Je(u);return!c||c.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.ke.forEach((s,o)=>o.setReadTime(e));const i=new zd(e,n,this.Qe,this.ke,r);return this.ke=qr(),this.qe=j_(),this.Qe=new st(xe),i}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,n)?i.Fe(n,1):i.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new U_,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new Ct(xe),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||Y("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new U_),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function j_(){return new st(ue.comparator)}function z_(){return new st(ue.comparator)}const mM={asc:"ASCENDING",desc:"DESCENDING"},gM={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},yM={and:"AND",or:"OR"};class vM{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function lp(t,e){return t.useProto3Json||Od(e)?e:{value:e}}function Kc(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function wI(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function _M(t,e){return Kc(t,e.toTimestamp())}function pr(t){return Me(!!t),fe.fromTimestamp(function(n){const r=Vi(n);return new Et(r.seconds,r.nanos)}(t))}function Xm(t,e){return up(t,e).canonicalString()}function up(t,e){const n=function(i){return new ut(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function EI(t){const e=ut.fromString(t);return Me(RI(e)),e}function cp(t,e){return Xm(t.databaseId,e.path)}function jh(t,e){const n=EI(e);if(n.get(1)!==t.databaseId.projectId)throw new le($.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new le($.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new ue(II(n))}function TI(t,e){return Xm(t.databaseId,e)}function wM(t){const e=EI(t);return e.length===4?ut.emptyPath():II(e)}function dp(t){return new ut(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function II(t){return Me(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function B_(t,e,n){return{name:cp(t,e),fields:n.value.mapValue.fields}}function EM(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:he()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(c,h){return c.useProto3Json?(Me(h===void 0||typeof h=="string"),Dt.fromBase64String(h||"")):(Me(h===void 0||h instanceof Buffer||h instanceof Uint8Array),Dt.fromUint8Array(h||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const h=c.code===void 0?$.UNKNOWN:yI(c.code);return new le(h,c.message||"")}(o);n=new _I(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=jh(t,r.document.name),s=pr(r.document.updateTime),o=r.document.createTime?pr(r.document.createTime):fe.min(),a=new On({mapValue:{fields:r.document.fields}}),u=Ht.newFoundDocument(i,s,o,a),c=r.targetIds||[],h=r.removedTargetIds||[];n=new ic(c,h,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=jh(t,r.document),s=r.readTime?pr(r.readTime):fe.min(),o=Ht.newNoDocument(i,s),a=r.removedTargetIds||[];n=new ic([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=jh(t,r.document),s=r.removedTargetIds||[];n=new ic([],s,i,null)}else{if(!("filter"in e))return he();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new cM(i,s),a=r.targetId;n=new vI(a,o)}}return n}function TM(t,e){let n;if(e instanceof Wl)n={update:B_(t,e.key,e.value)};else if(e instanceof gI)n={delete:cp(t,e.key)};else if(e instanceof js)n={update:B_(t,e.key,e.data),updateMask:kM(e.fieldMask)};else{if(!(e instanceof aM))return he();n={verify:cp(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof Wc)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof Rl)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof Al)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof qc)return{fieldPath:o.field.canonicalString(),increment:a.Pe};throw he()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:_M(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:he()}(t,e.precondition)),n}function IM(t,e){return t&&t.length>0?(Me(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?pr(i.updateTime):pr(s);return o.isEqual(fe.min())&&(o=pr(s)),new iM(o,i.transformResults||[])}(n,e))):[]}function SM(t,e){return{documents:[TI(t,e.path)]}}function CM(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=TI(t,i);const s=function(c){if(c.length!==0)return CI(vr.create(c,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(c){if(c.length!==0)return c.map(h=>function(g){return{field:io(g.field),direction:PM(g.dir)}}(h))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const a=lp(t,e.limit);return a!==null&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),{_t:n,parent:i}}function RM(t){let e=wM(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){Me(r===1);const h=n.from[0];h.allDescendants?i=h.collectionId:e=e.child(h.collectionId)}let s=[];n.where&&(s=function(f){const g=SI(f);return g instanceof vr&&eI(g)?g.getFilters():[g]}(n.where));let o=[];n.orderBy&&(o=function(f){return f.map(g=>function(E){return new Gc(so(E.field),function(N){switch(N){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(E.direction))}(g))}(n.orderBy));let a=null;n.limit&&(a=function(f){let g;return g=typeof f=="object"?f.value:f,Od(g)?null:g}(n.limit));let u=null;n.startAt&&(u=function(f){const g=!!f.before,m=f.values||[];return new Hc(m,g)}(n.startAt));let c=null;return n.endAt&&(c=function(f){const g=!f.before,m=f.values||[];return new Hc(m,g)}(n.endAt)),HO(e,i,o,s,a,"F",u,c)}function AM(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return he()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function SI(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=so(n.unaryFilter.field);return _t.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=so(n.unaryFilter.field);return _t.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=so(n.unaryFilter.field);return _t.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=so(n.unaryFilter.field);return _t.create(o,"!=",{nullValue:"NULL_VALUE"});default:return he()}}(t):t.fieldFilter!==void 0?function(n){return _t.create(so(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return he()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return vr.create(n.compositeFilter.filters.map(r=>SI(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return he()}}(n.compositeFilter.op))}(t):he()}function PM(t){return mM[t]}function bM(t){return gM[t]}function xM(t){return yM[t]}function io(t){return{fieldPath:t.canonicalString()}}function so(t){return xt.fromServerFormat(t.fieldPath)}function CI(t){return t instanceof _t?function(n){if(n.op==="=="){if(P_(n.value))return{unaryFilter:{field:io(n.field),op:"IS_NAN"}};if(A_(n.value))return{unaryFilter:{field:io(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(P_(n.value))return{unaryFilter:{field:io(n.field),op:"IS_NOT_NAN"}};if(A_(n.value))return{unaryFilter:{field:io(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:io(n.field),op:bM(n.op),value:n.value}}}(t):t instanceof vr?function(n){const r=n.getFilters().map(i=>CI(i));return r.length===1?r[0]:{compositeFilter:{op:xM(n.op),filters:r}}}(t):he()}function kM(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function RI(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ei{constructor(e,n,r,i,s=fe.min(),o=fe.min(),a=Dt.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=u}withSequenceNumber(e){return new Ei(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Ei(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Ei(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Ei(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NM{constructor(e){this.ct=e}}function DM(t){const e=RM({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?ap(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OM{constructor(){this.un=new MM}addToCollectionParentIndex(e,n){return this.un.add(n),z.resolve()}getCollectionParents(e,n){return z.resolve(this.un.getEntries(n))}addFieldIndex(e,n){return z.resolve()}deleteFieldIndex(e,n){return z.resolve()}deleteAllFieldIndexes(e){return z.resolve()}createTargetIndexes(e,n){return z.resolve()}getDocumentsMatchingTarget(e,n){return z.resolve(null)}getIndexType(e,n){return z.resolve(0)}getFieldIndexes(e,n){return z.resolve([])}getNextCollectionGroupToUpdate(e){return z.resolve(null)}getMinOffset(e,n){return z.resolve(Li.min())}getMinOffsetFromCollectionGroup(e,n){return z.resolve(Li.min())}updateCollectionGroup(e,n,r){return z.resolve()}updateIndexEntries(e,n){return z.resolve()}}class MM{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new Ct(ut.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Ct(ut.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $_={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class nn{constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}static withCacheSize(e){return new nn(e,nn.DEFAULT_COLLECTION_PERCENTILE,nn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */nn.DEFAULT_COLLECTION_PERCENTILE=10,nn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,nn.DEFAULT=new nn(41943040,nn.DEFAULT_COLLECTION_PERCENTILE,nn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),nn.DISABLED=new nn(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ho{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new Ho(0)}static kn(){return new Ho(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function H_([t,e],[n,r]){const i=xe(t,n);return i===0?xe(e,r):i}class LM{constructor(e){this.Un=e,this.buffer=new Ct(H_),this.Wn=0}Gn(){return++this.Wn}zn(e){const n=[e,this.Gn()];if(this.buffer.size<this.Un)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();H_(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class VM{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.jn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Hn(6e4)}stop(){this.jn&&(this.jn.cancel(),this.jn=null)}get started(){return this.jn!==null}Hn(e){Y("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.jn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.jn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){ra(n)?Y("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",n):await na(n)}await this.Hn(3e5)})}}class FM{constructor(e,n){this.Jn=e,this.params=n}calculateTargetCount(e,n){return this.Jn.Yn(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return z.resolve(Dd.oe);const r=new LM(n);return this.Jn.forEachTarget(e,i=>r.zn(i.sequenceNumber)).next(()=>this.Jn.Zn(e,i=>r.zn(i))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.Jn.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.Jn.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(Y("LruGarbageCollector","Garbage collection skipped; disabled"),z.resolve($_)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(Y("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),$_):this.Xn(e,n))}getCacheSize(e){return this.Jn.getCacheSize(e)}Xn(e,n){let r,i,s,o,a,u,c;const h=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(f=>(f>this.params.maximumSequenceNumbersToCollect?(Y("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${f}`),i=this.params.maximumSequenceNumbersToCollect):i=f,o=Date.now(),this.nthSequenceNumber(e,i))).next(f=>(r=f,a=Date.now(),this.removeTargets(e,r,n))).next(f=>(s=f,u=Date.now(),this.removeOrphanedDocuments(e,r))).next(f=>(c=Date.now(),no()<=Ie.DEBUG&&Y("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-h}ms
	Determined least recently used ${i} in `+(a-o)+`ms
	Removed ${s} targets in `+(u-a)+`ms
	Removed ${f} documents in `+(c-u)+`ms
Total Duration: ${c-h}ms`),z.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:f})))}}function UM(t,e){return new FM(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jM{constructor(){this.changes=new Us(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Ht.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?z.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zM{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BM{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&Xa(r.mutation,i,Qn.empty(),Et.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,Ce()).next(()=>r))}getLocalViewOfDocuments(e,n,r=Ce()){const i=ps();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=Oa();return s.forEach((a,u)=>{o=o.insert(a,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=ps();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,Ce()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=qr();const o=Ya(),a=function(){return Ya()}();return n.forEach((u,c)=>{const h=r.get(c.key);i.has(c.key)&&(h===void 0||h.mutation instanceof js)?s=s.insert(c.key,c):h!==void 0?(o.set(c.key,h.mutation.getFieldMask()),Xa(h.mutation,c,h.mutation.getFieldMask(),Et.now())):o.set(c.key,Qn.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((c,h)=>o.set(c,h)),n.forEach((c,h)=>{var f;return a.set(c,new zM(h,(f=o.get(c))!==null&&f!==void 0?f:null))}),a))}recalculateAndSaveOverlays(e,n){const r=Ya();let i=new st((o,a)=>o-a),s=Ce();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(u=>{const c=n.get(u);if(c===null)return;let h=r.get(u)||Qn.empty();h=a.applyToLocalView(c,h),r.set(u,h);const f=(i.get(a.batchId)||Ce()).add(u);i=i.insert(a.batchId,f)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const u=a.getNext(),c=u.key,h=u.value,f=lI();h.forEach(g=>{if(!s.has(g)){const m=pI(n.get(g),r.get(g));m!==null&&f.set(g,m),s=s.add(g)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,f))}return z.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return ue.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):GO(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):z.resolve(ps());let a=-1,u=s;return o.next(c=>z.forEach(c,(h,f)=>(a<f.largestBatchId&&(a=f.largestBatchId),s.get(h)?z.resolve():this.remoteDocumentCache.getEntry(e,h).next(g=>{u=u.insert(h,g)}))).next(()=>this.populateOverlays(e,c,s)).next(()=>this.computeViews(e,u,c,Ce())).next(h=>({batchId:a,changes:aI(h)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new ue(n)).next(r=>{let i=Oa();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=Oa();return this.indexManager.getCollectionParents(e,s).next(a=>z.forEach(a,u=>{const c=function(f,g){return new Ld(g,null,f.explicitOrderBy.slice(),f.filters.slice(),f.limit,f.limitType,f.startAt,f.endAt)}(n,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,c,r,i).next(h=>{h.forEach((f,g)=>{o=o.insert(f,g)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((u,c)=>{const h=c.getKey();o.get(h)===null&&(o=o.insert(h,Ht.newInvalidDocument(h)))});let a=Oa();return o.forEach((u,c)=>{const h=s.get(u);h!==void 0&&Xa(h.mutation,c,Qn.empty(),Et.now()),Fd(n,c)&&(a=a.insert(u,c))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $M{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,n){return z.resolve(this.hr.get(n))}saveBundleMetadata(e,n){return this.hr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:pr(i.createTime)}}(n)),z.resolve()}getNamedQuery(e,n){return z.resolve(this.Pr.get(n))}saveNamedQuery(e,n){return this.Pr.set(n.name,function(i){return{name:i.name,query:DM(i.bundledQuery),readTime:pr(i.readTime)}}(n)),z.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HM{constructor(){this.overlays=new st(ue.comparator),this.Ir=new Map}getOverlay(e,n){return z.resolve(this.overlays.get(n))}getOverlays(e,n){const r=ps();return z.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ht(e,n,s)}),z.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Ir.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Ir.delete(r)),z.resolve()}getOverlaysForCollection(e,n,r){const i=ps(),s=n.length+1,o=new ue(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const u=a.getNext().value,c=u.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return z.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new st((c,h)=>c-h);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let h=s.get(c.largestBatchId);h===null&&(h=ps(),s=s.insert(c.largestBatchId,h)),h.set(c.getKey(),c)}}const a=ps(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((c,h)=>a.set(c,h)),!(a.size()>=i)););return z.resolve(a)}ht(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.Ir.get(i.largestBatchId).delete(r.key);this.Ir.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new uM(n,r));let s=this.Ir.get(n);s===void 0&&(s=Ce(),this.Ir.set(n,s)),this.Ir.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GM{constructor(){this.sessionToken=Dt.EMPTY_BYTE_STRING}getSessionToken(e){return z.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,z.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jm{constructor(){this.Tr=new Ct(Tt.Er),this.dr=new Ct(Tt.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,n){const r=new Tt(e,n);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Vr(new Tt(e,n))}mr(e,n){e.forEach(r=>this.removeReference(r,n))}gr(e){const n=new ue(new ut([])),r=new Tt(n,e),i=new Tt(n,e+1),s=[];return this.dr.forEachInRange([r,i],o=>{this.Vr(o),s.push(o.key)}),s}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const n=new ue(new ut([])),r=new Tt(n,e),i=new Tt(n,e+1);let s=Ce();return this.dr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new Tt(e,0),r=this.Tr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Tt{constructor(e,n){this.key=e,this.wr=n}static Er(e,n){return ue.comparator(e.key,n.key)||xe(e.wr,n.wr)}static Ar(e,n){return xe(e.wr,n.wr)||ue.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WM{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Sr=1,this.br=new Ct(Tt.Er)}checkEmpty(e){return z.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new lM(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.br=this.br.add(new Tt(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return z.resolve(o)}lookupMutationBatch(e,n){return z.resolve(this.Dr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.vr(r),s=i<0?0:i;return z.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return z.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return z.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Tt(n,0),i=new Tt(n,Number.POSITIVE_INFINITY),s=[];return this.br.forEachInRange([r,i],o=>{const a=this.Dr(o.wr);s.push(a)}),z.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Ct(xe);return n.forEach(i=>{const s=new Tt(i,0),o=new Tt(i,Number.POSITIVE_INFINITY);this.br.forEachInRange([s,o],a=>{r=r.add(a.wr)})}),z.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;ue.isDocumentKey(s)||(s=s.child(""));const o=new Tt(new ue(s),0);let a=new Ct(xe);return this.br.forEachWhile(u=>{const c=u.key.path;return!!r.isPrefixOf(c)&&(c.length===i&&(a=a.add(u.wr)),!0)},o),z.resolve(this.Cr(a))}Cr(e){const n=[];return e.forEach(r=>{const i=this.Dr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){Me(this.Fr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return z.forEach(n.mutations,i=>{const s=new Tt(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,n){const r=new Tt(n,0),i=this.br.firstAfterOrEqual(r);return z.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,z.resolve()}Fr(e,n){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const n=this.vr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qM{constructor(e){this.Mr=e,this.docs=function(){return new st(ue.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Mr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return z.resolve(r?r.document.mutableCopy():Ht.newInvalidDocument(n))}getEntries(e,n){let r=qr();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Ht.newInvalidDocument(i))}),z.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=qr();const o=n.path,a=new ue(o.child("")),u=this.docs.getIteratorFrom(a);for(;u.hasNext();){const{key:c,value:{document:h}}=u.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||IO(TO(h),r)<=0||(i.has(h.key)||Fd(n,h))&&(s=s.insert(h.key,h.mutableCopy()))}return z.resolve(s)}getAllFromCollectionGroup(e,n,r,i){he()}Or(e,n){return z.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new KM(this)}getSize(e){return z.resolve(this.size)}}class KM extends jM{constructor(e){super(),this.cr=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.cr.addEntry(e,i)):this.cr.removeEntry(r)}),z.waitFor(n)}getFromCache(e,n){return this.cr.getEntry(e,n)}getAllFromCache(e,n){return this.cr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QM{constructor(e){this.persistence=e,this.Nr=new Us(n=>Gm(n),Wm),this.lastRemoteSnapshotVersion=fe.min(),this.highestTargetId=0,this.Lr=0,this.Br=new Jm,this.targetCount=0,this.kr=Ho.Bn()}forEachTarget(e,n){return this.Nr.forEach((r,i)=>n(i)),z.resolve()}getLastRemoteSnapshotVersion(e){return z.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return z.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),z.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Lr&&(this.Lr=n),z.resolve()}Kn(e){this.Nr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.kr=new Ho(n),this.highestTargetId=n),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,n){return this.Kn(n),this.targetCount+=1,z.resolve()}updateTargetData(e,n){return this.Kn(n),z.resolve()}removeTargetData(e,n){return this.Nr.delete(n.target),this.Br.gr(n.targetId),this.targetCount-=1,z.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Nr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Nr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),z.waitFor(s).next(()=>i)}getTargetCount(e){return z.resolve(this.targetCount)}getTargetData(e,n){const r=this.Nr.get(n)||null;return z.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Rr(n,r),z.resolve()}removeMatchingKeys(e,n,r){this.Br.mr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),z.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Br.gr(n),z.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.yr(n);return z.resolve(r)}containsKey(e,n){return z.resolve(this.Br.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AI{constructor(e,n){this.qr={},this.overlays={},this.Qr=new Dd(0),this.Kr=!1,this.Kr=!0,this.$r=new GM,this.referenceDelegate=e(this),this.Ur=new QM(this),this.indexManager=new OM,this.remoteDocumentCache=function(i){return new qM(i)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new NM(n),this.Gr=new $M(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new HM,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.qr[e.toKey()];return r||(r=new WM(n,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,n,r){Y("MemoryPersistence","Starting transaction:",e);const i=new YM(this.Qr.next());return this.referenceDelegate.zr(),r(i).next(s=>this.referenceDelegate.jr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Hr(e,n){return z.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,n)))}}class YM extends CO{constructor(e){super(),this.currentSequenceNumber=e}}class Zm{constructor(e){this.persistence=e,this.Jr=new Jm,this.Yr=null}static Zr(e){return new Zm(e)}get Xr(){if(this.Yr)return this.Yr;throw he()}addReference(e,n,r){return this.Jr.addReference(r,n),this.Xr.delete(r.toString()),z.resolve()}removeReference(e,n,r){return this.Jr.removeReference(r,n),this.Xr.add(r.toString()),z.resolve()}markPotentiallyOrphaned(e,n){return this.Xr.add(n.toString()),z.resolve()}removeTarget(e,n){this.Jr.gr(n.targetId).forEach(i=>this.Xr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Xr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}zr(){this.Yr=new Set}jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return z.forEach(this.Xr,r=>{const i=ue.fromPath(r);return this.ei(e,i).next(s=>{s||n.removeEntry(i,fe.min())})}).next(()=>(this.Yr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ei(e,n).next(r=>{r?this.Xr.delete(n.toString()):this.Xr.add(n.toString())})}Wr(e){return 0}ei(e,n){return z.or([()=>z.resolve(this.Jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Hr(e,n)])}}class Qc{constructor(e,n){this.persistence=e,this.ti=new Us(r=>PO(r.path),(r,i)=>r.isEqual(i)),this.garbageCollector=UM(this,n)}static Zr(e,n){return new Qc(e,n)}zr(){}jr(e){return z.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}Yn(e){const n=this.er(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(i=>r+i))}er(e){let n=0;return this.Zn(e,r=>{n++}).next(()=>n)}Zn(e,n){return z.forEach(this.ti,(r,i)=>this.nr(e,r,i).next(s=>s?z.resolve():n(i)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const i=this.persistence.getRemoteDocumentCache(),s=i.newChangeBuffer();return i.Or(e,o=>this.nr(e,o,n).next(a=>{a||(r++,s.removeEntry(o,fe.min()))})).next(()=>s.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.ti.set(n,e.currentSequenceNumber),z.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.ti.set(r,e.currentSequenceNumber),z.resolve()}removeReference(e,n,r){return this.ti.set(r,e.currentSequenceNumber),z.resolve()}updateLimboDocument(e,n){return this.ti.set(n,e.currentSequenceNumber),z.resolve()}Wr(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=tc(e.data.value)),n}nr(e,n,r){return z.or([()=>this.persistence.Hr(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const i=this.ti.get(n);return z.resolve(i!==void 0&&i>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eg{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.$i=r,this.Ui=i}static Wi(e,n){let r=Ce(),i=Ce();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new eg(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XM{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JM{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return cx()?8:RO(Wt())>0?6:4}()}initialize(e,n){this.Ji=e,this.indexManager=n,this.Gi=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.Yi(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Zi(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new XM;return this.Xi(e,n,o).next(a=>{if(s.result=a,this.zi)return this.es(e,n,o,a.size)})}).next(()=>s.result)}es(e,n,r,i){return r.documentReadCount<this.ji?(no()<=Ie.DEBUG&&Y("QueryEngine","SDK will not create cache indexes for query:",ro(n),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),z.resolve()):(no()<=Ie.DEBUG&&Y("QueryEngine","Query:",ro(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Hi*i?(no()<=Ie.DEBUG&&Y("QueryEngine","The SDK decides to create cache indexes for query:",ro(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,fr(n))):z.resolve())}Yi(e,n){if(N_(n))return z.resolve(null);let r=fr(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=ap(n,null,"F"),r=fr(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=Ce(...s);return this.Ji.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(u=>{const c=this.ts(n,a);return this.ns(n,c,o,u.readTime)?this.Yi(e,ap(n,null,"F")):this.rs(e,c,n,u)}))})))}Zi(e,n,r,i){return N_(n)||i.isEqual(fe.min())?z.resolve(null):this.Ji.getDocuments(e,r).next(s=>{const o=this.ts(n,s);return this.ns(n,o,r,i)?z.resolve(null):(no()<=Ie.DEBUG&&Y("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),ro(n)),this.rs(e,o,n,EO(i,-1)).next(a=>a))})}ts(e,n){let r=new Ct(sI(e));return n.forEach((i,s)=>{Fd(e,s)&&(r=r.add(s))}),r}ns(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Xi(e,n,r){return no()<=Ie.DEBUG&&Y("QueryEngine","Using full collection scan to execute query:",ro(n)),this.Ji.getDocumentsMatchingQuery(e,n,Li.min(),r)}rs(e,n,r,i){return this.Ji.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZM{constructor(e,n,r,i){this.persistence=e,this.ss=n,this.serializer=i,this.os=new st(xe),this._s=new Us(s=>Gm(s),Wm),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new BM(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.os))}}function eL(t,e,n,r){return new ZM(t,e,n,r)}async function PI(t,e){const n=me(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.ls(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let u=Ce();for(const c of i){o.push(c.batchId);for(const h of c.mutations)u=u.add(h.key)}for(const c of s){a.push(c.batchId);for(const h of c.mutations)u=u.add(h.key)}return n.localDocuments.getDocuments(r,u).next(c=>({hs:c,removedBatchIds:o,addedBatchIds:a}))})})}function tL(t,e){const n=me(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.cs.newChangeBuffer({trackRemovals:!0});return function(a,u,c,h){const f=c.batch,g=f.keys();let m=z.resolve();return g.forEach(E=>{m=m.next(()=>h.getEntry(u,E)).next(A=>{const N=c.docVersions.get(E);Me(N!==null),A.version.compareTo(N)<0&&(f.applyToRemoteDocument(A,c),A.isValidDocument()&&(A.setReadTime(c.commitVersion),h.addEntry(A)))})}),m.next(()=>a.mutationQueue.removeMutationBatch(u,f))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let u=Ce();for(let c=0;c<a.mutationResults.length;++c)a.mutationResults[c].transformResults.length>0&&(u=u.add(a.batch.mutations[c].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function bI(t){const e=me(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ur.getLastRemoteSnapshotVersion(n))}function nL(t,e){const n=me(t),r=e.snapshotVersion;let i=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.cs.newChangeBuffer({trackRemovals:!0});i=n.os;const a=[];e.targetChanges.forEach((h,f)=>{const g=i.get(f);if(!g)return;a.push(n.Ur.removeMatchingKeys(s,h.removedDocuments,f).next(()=>n.Ur.addMatchingKeys(s,h.addedDocuments,f)));let m=g.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(f)!==null?m=m.withResumeToken(Dt.EMPTY_BYTE_STRING,fe.min()).withLastLimboFreeSnapshotVersion(fe.min()):h.resumeToken.approximateByteSize()>0&&(m=m.withResumeToken(h.resumeToken,r)),i=i.insert(f,m),function(A,N,T){return A.resumeToken.approximateByteSize()===0||N.snapshotVersion.toMicroseconds()-A.snapshotVersion.toMicroseconds()>=3e8?!0:T.addedDocuments.size+T.modifiedDocuments.size+T.removedDocuments.size>0}(g,m,h)&&a.push(n.Ur.updateTargetData(s,m))});let u=qr(),c=Ce();if(e.documentUpdates.forEach(h=>{e.resolvedLimboDocuments.has(h)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,h))}),a.push(rL(s,o,e.documentUpdates).next(h=>{u=h.Ps,c=h.Is})),!r.isEqual(fe.min())){const h=n.Ur.getLastRemoteSnapshotVersion(s).next(f=>n.Ur.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(h)}return z.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,u,c)).next(()=>u)}).then(s=>(n.os=i,s))}function rL(t,e,n){let r=Ce(),i=Ce();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=qr();return n.forEach((a,u)=>{const c=s.get(a);u.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(a)),u.isNoDocument()&&u.version.isEqual(fe.min())?(e.removeEntry(a,u.readTime),o=o.insert(a,u)):!c.isValidDocument()||u.version.compareTo(c.version)>0||u.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(u),o=o.insert(a,u)):Y("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",u.version)}),{Ps:o,Is:i}})}function iL(t,e){const n=me(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function sL(t,e){const n=me(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Ur.getTargetData(r,e).next(s=>s?(i=s,z.resolve(i)):n.Ur.allocateTargetId(r).next(o=>(i=new Ei(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Ur.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.os.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.os=n.os.insert(r.targetId,r),n._s.set(e,r.targetId)),r})}async function hp(t,e,n){const r=me(t),i=r.os.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!ra(o))throw o;Y("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.os=r.os.remove(e),r._s.delete(i.target)}function G_(t,e,n){const r=me(t);let i=fe.min(),s=Ce();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,c,h){const f=me(u),g=f._s.get(h);return g!==void 0?z.resolve(f.os.get(g)):f.Ur.getTargetData(c,h)}(r,o,fr(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(o,a.targetId).next(u=>{s=u})}).next(()=>r.ss.getDocumentsMatchingQuery(o,e,n?i:fe.min(),n?s:Ce())).next(a=>(oL(r,qO(e),a),{documents:a,Ts:s})))}function oL(t,e,n){let r=t.us.get(e)||fe.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.us.set(e,r)}class W_{constructor(){this.activeTargetIds=ZO()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class aL{constructor(){this.so=new W_,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,n,r){this.oo[e]=n}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new W_,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lL{_o(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q_{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){Y("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){Y("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ou=null;function zh(){return Ou===null?Ou=function(){return 268435456+Math.round(2147483648*Math.random())}():Ou++,"0x"+Ou.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uL={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cL{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zt="WebChannelConnection";class dL extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+n.host,this.vo=`projects/${i}/databases/${s}`,this.Co=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Fo(){return!1}Mo(n,r,i,s,o){const a=zh(),u=this.xo(n,r.toUriEncodedString());Y("RestConnection",`Sending RPC '${n}' ${a}:`,u,i);const c={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(c,s,o),this.No(n,u,c,i).then(h=>(Y("RestConnection",`Received RPC '${n}' ${a}: `,h),h),h=>{throw jo("RestConnection",`RPC '${n}' ${a} failed with error: `,h,"url: ",u,"request:",i),h})}Lo(n,r,i,s,o,a){return this.Mo(n,r,i,s,o)}Oo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+ta}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}xo(n,r){const i=uL[n];return`${this.Do}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,n,r,i){const s=zh();return new Promise((o,a)=>{const u=new B1;u.setWithCredentials(!0),u.listenOnce($1.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case ec.NO_ERROR:const h=u.getResponseJson();Y(zt,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(h)),o(h);break;case ec.TIMEOUT:Y(zt,`RPC '${e}' ${s} timed out`),a(new le($.DEADLINE_EXCEEDED,"Request time out"));break;case ec.HTTP_ERROR:const f=u.getStatus();if(Y(zt,`RPC '${e}' ${s} failed with status:`,f,"response text:",u.getResponseText()),f>0){let g=u.getResponseJson();Array.isArray(g)&&(g=g[0]);const m=g==null?void 0:g.error;if(m&&m.status&&m.message){const E=function(N){const T=N.toLowerCase().replace(/_/g,"-");return Object.values($).indexOf(T)>=0?T:$.UNKNOWN}(m.status);a(new le(E,m.message))}else a(new le($.UNKNOWN,"Server responded with status "+u.getStatus()))}else a(new le($.UNAVAILABLE,"Connection failed."));break;default:he()}}finally{Y(zt,`RPC '${e}' ${s} completed.`)}});const c=JSON.stringify(i);Y(zt,`RPC '${e}' ${s} sending request:`,i),u.send(n,"POST",c,r,15)})}Bo(e,n,r){const i=zh(),s=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=W1(),a=G1(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(u.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(u.useFetchStreams=!0),this.Oo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const h=s.join("");Y(zt,`Creating RPC '${e}' stream ${i}: ${h}`,u);const f=o.createWebChannel(h,u);let g=!1,m=!1;const E=new cL({Io:N=>{m?Y(zt,`Not sending because RPC '${e}' stream ${i} is closed:`,N):(g||(Y(zt,`Opening RPC '${e}' stream ${i} transport.`),f.open(),g=!0),Y(zt,`RPC '${e}' stream ${i} sending:`,N),f.send(N))},To:()=>f.close()}),A=(N,T,_)=>{N.listen(T,S=>{try{_(S)}catch(D){setTimeout(()=>{throw D},0)}})};return A(f,Da.EventType.OPEN,()=>{m||(Y(zt,`RPC '${e}' stream ${i} transport opened.`),E.yo())}),A(f,Da.EventType.CLOSE,()=>{m||(m=!0,Y(zt,`RPC '${e}' stream ${i} transport closed`),E.So())}),A(f,Da.EventType.ERROR,N=>{m||(m=!0,jo(zt,`RPC '${e}' stream ${i} transport errored:`,N),E.So(new le($.UNAVAILABLE,"The operation could not be completed")))}),A(f,Da.EventType.MESSAGE,N=>{var T;if(!m){const _=N.data[0];Me(!!_);const S=_,D=S.error||((T=S[0])===null||T===void 0?void 0:T.error);if(D){Y(zt,`RPC '${e}' stream ${i} received error:`,D);const j=D.status;let b=function(w){const C=pt[w];if(C!==void 0)return yI(C)}(j),I=D.message;b===void 0&&(b=$.INTERNAL,I="Unknown error status: "+j+" with message "+D.message),m=!0,E.So(new le(b,I)),f.close()}else Y(zt,`RPC '${e}' stream ${i} received:`,_),E.bo(_)}}),A(a,H1.STAT_EVENT,N=>{N.stat===np.PROXY?Y(zt,`RPC '${e}' stream ${i} detected buffering proxy`):N.stat===np.NOPROXY&&Y(zt,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{E.wo()},0),E}}function Bh(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bd(t){return new vM(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xI{constructor(e,n,r=1e3,i=1.5,s=6e4){this.ui=e,this.timerId=n,this.ko=r,this.qo=i,this.Qo=s,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),i=Math.max(0,n-r);i>0&&Y("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,i,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kI{constructor(e,n,r,i,s,o,a,u){this.ui=e,this.Ho=r,this.Jo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=u,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new xI(e,n)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,n){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():n&&n.code===$.RESOURCE_EXHAUSTED?(Wr(n.toString()),Wr("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):n&&n.code===$.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(n)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),n=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Yo===n&&this.P_(r,i)},r=>{e(()=>{const i=new le($.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(i)})})}P_(e,n){const r=this.h_(this.Yo);this.stream=this.T_(e,n),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(i=>{r(()=>this.I_(i))}),this.stream.onMessage(i=>{r(()=>++this.e_==1?this.E_(i):this.onNext(i))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return Y("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return n=>{this.ui.enqueueAndForget(()=>this.Yo===e?n():(Y("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class hL extends kI{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}T_(e,n){return this.connection.Bo("Listen",e,n)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const n=EM(this.serializer,e),r=function(s){if(!("targetChange"in s))return fe.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?fe.min():o.readTime?pr(o.readTime):fe.min()}(e);return this.listener.d_(n,r)}A_(e){const n={};n.database=dp(this.serializer),n.addTarget=function(s,o){let a;const u=o.target;if(a=op(u)?{documents:SM(s,u)}:{query:CM(s,u)._t},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=wI(s,o.resumeToken);const c=lp(s,o.expectedCount);c!==null&&(a.expectedCount=c)}else if(o.snapshotVersion.compareTo(fe.min())>0){a.readTime=Kc(s,o.snapshotVersion.toTimestamp());const c=lp(s,o.expectedCount);c!==null&&(a.expectedCount=c)}return a}(this.serializer,e);const r=AM(this.serializer,e);r&&(n.labels=r),this.a_(n)}R_(e){const n={};n.database=dp(this.serializer),n.removeTarget=e,this.a_(n)}}class fL extends kI{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,n){return this.connection.Bo("Write",e,n)}E_(e){return Me(!!e.streamToken),this.lastStreamToken=e.streamToken,Me(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){Me(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const n=IM(e.writeResults,e.commitTime),r=pr(e.commitTime);return this.listener.g_(r,n)}p_(){const e={};e.database=dp(this.serializer),this.a_(e)}m_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>TM(this.serializer,r))};this.a_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pL extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.y_=!1}w_(){if(this.y_)throw new le($.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,n,r,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Mo(e,up(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===$.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new le($.UNKNOWN,s.toString())})}Lo(e,n,r,i,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.Lo(e,up(n,r),i,o,a,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===$.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new le($.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class mL{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(Wr(n),this.D_=!1):Y("OnlineStateTracker",n)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gL{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=s,this.k_._o(o=>{r.enqueueAndForget(async()=>{zs(this)&&(Y("RemoteStore","Restarting streams for network reachability change."),await async function(u){const c=me(u);c.L_.add(4),await Kl(c),c.q_.set("Unknown"),c.L_.delete(4),await $d(c)}(this))})}),this.q_=new mL(r,i)}}async function $d(t){if(zs(t))for(const e of t.B_)await e(!0)}async function Kl(t){for(const e of t.B_)await e(!1)}function NI(t,e){const n=me(t);n.N_.has(e.targetId)||(n.N_.set(e.targetId,e),ig(n)?rg(n):ia(n).r_()&&ng(n,e))}function tg(t,e){const n=me(t),r=ia(n);n.N_.delete(e),r.r_()&&DI(n,e),n.N_.size===0&&(r.r_()?r.o_():zs(n)&&n.q_.set("Unknown"))}function ng(t,e){if(t.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(fe.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}ia(t).A_(e)}function DI(t,e){t.Q_.xe(e),ia(t).R_(e)}function rg(t){t.Q_=new pM({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.N_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),ia(t).start(),t.q_.v_()}function ig(t){return zs(t)&&!ia(t).n_()&&t.N_.size>0}function zs(t){return me(t).L_.size===0}function OI(t){t.Q_=void 0}async function yL(t){t.q_.set("Online")}async function vL(t){t.N_.forEach((e,n)=>{ng(t,e)})}async function _L(t,e){OI(t),ig(t)?(t.q_.M_(e),rg(t)):t.q_.set("Unknown")}async function wL(t,e,n){if(t.q_.set("Online"),e instanceof _I&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const a of s.targetIds)i.N_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.N_.delete(a),i.Q_.removeTarget(a))}(t,e)}catch(r){Y("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Yc(t,r)}else if(e instanceof ic?t.Q_.Ke(e):e instanceof vI?t.Q_.He(e):t.Q_.We(e),!n.isEqual(fe.min()))try{const r=await bI(t.localStore);n.compareTo(r)>=0&&await function(s,o){const a=s.Q_.rt(o);return a.targetChanges.forEach((u,c)=>{if(u.resumeToken.approximateByteSize()>0){const h=s.N_.get(c);h&&s.N_.set(c,h.withResumeToken(u.resumeToken,o))}}),a.targetMismatches.forEach((u,c)=>{const h=s.N_.get(u);if(!h)return;s.N_.set(u,h.withResumeToken(Dt.EMPTY_BYTE_STRING,h.snapshotVersion)),DI(s,u);const f=new Ei(h.target,u,c,h.sequenceNumber);ng(s,f)}),s.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){Y("RemoteStore","Failed to raise snapshot:",r),await Yc(t,r)}}async function Yc(t,e,n){if(!ra(e))throw e;t.L_.add(1),await Kl(t),t.q_.set("Offline"),n||(n=()=>bI(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{Y("RemoteStore","Retrying IndexedDB access"),await n(),t.L_.delete(1),await $d(t)})}function MI(t,e){return e().catch(n=>Yc(t,n,e))}async function Hd(t){const e=me(t),n=ji(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;EL(e);)try{const i=await iL(e.localStore,r);if(i===null){e.O_.length===0&&n.o_();break}r=i.batchId,TL(e,i)}catch(i){await Yc(e,i)}LI(e)&&VI(e)}function EL(t){return zs(t)&&t.O_.length<10}function TL(t,e){t.O_.push(e);const n=ji(t);n.r_()&&n.V_&&n.m_(e.mutations)}function LI(t){return zs(t)&&!ji(t).n_()&&t.O_.length>0}function VI(t){ji(t).start()}async function IL(t){ji(t).p_()}async function SL(t){const e=ji(t);for(const n of t.O_)e.m_(n.mutations)}async function CL(t,e,n){const r=t.O_.shift(),i=Qm.from(r,e,n);await MI(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Hd(t)}async function RL(t,e){e&&ji(t).V_&&await async function(r,i){if(function(o){return dM(o)&&o!==$.ABORTED}(i.code)){const s=r.O_.shift();ji(r).s_(),await MI(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Hd(r)}}(t,e),LI(t)&&VI(t)}async function K_(t,e){const n=me(t);n.asyncQueue.verifyOperationInProgress(),Y("RemoteStore","RemoteStore received new credentials");const r=zs(n);n.L_.add(3),await Kl(n),r&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await $d(n)}async function AL(t,e){const n=me(t);e?(n.L_.delete(2),await $d(n)):e||(n.L_.add(2),await Kl(n),n.q_.set("Unknown"))}function ia(t){return t.K_||(t.K_=function(n,r,i){const s=me(n);return s.w_(),new hL(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Eo:yL.bind(null,t),Ro:vL.bind(null,t),mo:_L.bind(null,t),d_:wL.bind(null,t)}),t.B_.push(async e=>{e?(t.K_.s_(),ig(t)?rg(t):t.q_.set("Unknown")):(await t.K_.stop(),OI(t))})),t.K_}function ji(t){return t.U_||(t.U_=function(n,r,i){const s=me(n);return s.w_(),new fL(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Eo:()=>Promise.resolve(),Ro:IL.bind(null,t),mo:RL.bind(null,t),f_:SL.bind(null,t),g_:CL.bind(null,t)}),t.B_.push(async e=>{e?(t.U_.s_(),await Hd(t)):(await t.U_.stop(),t.O_.length>0&&(Y("RemoteStore",`Stopping write stream with ${t.O_.length} pending writes`),t.O_=[]))})),t.U_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sg{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Ni,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new sg(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new le($.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function og(t,e){if(Wr("AsyncQueue",`${e}: ${t}`),ra(t))return new le($.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xo{constructor(e){this.comparator=e?(n,r)=>e(n,r)||ue.comparator(n.key,r.key):(n,r)=>ue.comparator(n.key,r.key),this.keyedMap=Oa(),this.sortedSet=new st(this.comparator)}static emptySet(e){return new xo(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof xo)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new xo;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q_{constructor(){this.W_=new st(ue.comparator)}track(e){const n=e.doc.key,r=this.W_.get(n);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(n,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(n):e.type===1&&r.type===2?this.W_=this.W_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):he():this.W_=this.W_.insert(n,e)}G_(){const e=[];return this.W_.inorderTraversal((n,r)=>{e.push(r)}),e}}class Go{constructor(e,n,r,i,s,o,a,u,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=u,this.hasCachedResults=c}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Go(e,n,xo.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Vd(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PL{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class bL{constructor(){this.queries=Y_(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(n,r){const i=me(n),s=i.queries;i.queries=Y_(),s.forEach((o,a)=>{for(const u of a.j_)u.onError(r)})})(this,new le($.ABORTED,"Firestore shutting down"))}}function Y_(){return new Us(t=>iI(t),Vd)}async function xL(t,e){const n=me(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.H_()&&e.J_()&&(r=2):(s=new PL,r=e.J_()?0:1);try{switch(r){case 0:s.z_=await n.onListen(i,!0);break;case 1:s.z_=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const a=og(o,`Initialization of query '${ro(e.query)}' failed`);return void e.onError(a)}n.queries.set(i,s),s.j_.push(e),e.Z_(n.onlineState),s.z_&&e.X_(s.z_)&&ag(n)}async function kL(t,e){const n=me(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.j_.indexOf(e);o>=0&&(s.j_.splice(o,1),s.j_.length===0?i=e.J_()?0:1:!s.H_()&&e.J_()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function NL(t,e){const n=me(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.j_)a.X_(i)&&(r=!0);o.z_=i}}r&&ag(n)}function DL(t,e,n){const r=me(t),i=r.queries.get(e);if(i)for(const s of i.j_)s.onError(n);r.queries.delete(e)}function ag(t){t.Y_.forEach(e=>{e.next()})}var fp,X_;(X_=fp||(fp={})).ea="default",X_.Cache="cache";class OL{constructor(e,n,r){this.query=e,this.ta=n,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Go(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.na?this.ia(e)&&(this.ta.next(e),n=!0):this.sa(e,this.onlineState)&&(this.oa(e),n=!0),this.ra=e,n}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let n=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),n=!0),n}sa(e,n){if(!e.fromCache||!this.J_())return!0;const r=n!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const n=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}oa(e){e=Go.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==fp.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FI{constructor(e){this.key=e}}class UI{constructor(e){this.key=e}}class ML{constructor(e,n){this.query=e,this.Ta=n,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=Ce(),this.mutatedKeys=Ce(),this.Aa=sI(e),this.Ra=new xo(this.Aa)}get Va(){return this.Ta}ma(e,n){const r=n?n.fa:new Q_,i=n?n.Ra:this.Ra;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((h,f)=>{const g=i.get(h),m=Fd(this.query,f)?f:null,E=!!g&&this.mutatedKeys.has(g.key),A=!!m&&(m.hasLocalMutations||this.mutatedKeys.has(m.key)&&m.hasCommittedMutations);let N=!1;g&&m?g.data.isEqual(m.data)?E!==A&&(r.track({type:3,doc:m}),N=!0):this.ga(g,m)||(r.track({type:2,doc:m}),N=!0,(u&&this.Aa(m,u)>0||c&&this.Aa(m,c)<0)&&(a=!0)):!g&&m?(r.track({type:0,doc:m}),N=!0):g&&!m&&(r.track({type:1,doc:g}),N=!0,(u||c)&&(a=!0)),N&&(m?(o=o.add(m),s=A?s.add(h):s.delete(h)):(o=o.delete(h),s=s.delete(h)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const h=this.query.limitType==="F"?o.last():o.first();o=o.delete(h.key),s=s.delete(h.key),r.track({type:1,doc:h})}return{Ra:o,fa:r,ns:a,mutatedKeys:s}}ga(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const o=e.fa.G_();o.sort((h,f)=>function(m,E){const A=N=>{switch(N){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return he()}};return A(m)-A(E)}(h.type,f.type)||this.Aa(h.doc,f.doc)),this.pa(r),i=i!=null&&i;const a=n&&!i?this.ya():[],u=this.da.size===0&&this.current&&!i?1:0,c=u!==this.Ea;return this.Ea=u,o.length!==0||c?{snapshot:new Go(this.query,e.Ra,s,o,e.mutatedKeys,u===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:a}:{wa:a}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new Q_,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(n=>this.Ta=this.Ta.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ta=this.Ta.delete(n)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=Ce(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const n=[];return e.forEach(r=>{this.da.has(r)||n.push(new UI(r))}),this.da.forEach(r=>{e.has(r)||n.push(new FI(r))}),n}ba(e){this.Ta=e.Ts,this.da=Ce();const n=this.ma(e.documents);return this.applyChanges(n,!0)}Da(){return Go.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class LL{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class VL{constructor(e){this.key=e,this.va=!1}}class FL{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new Us(a=>iI(a),Vd),this.Ma=new Map,this.xa=new Set,this.Oa=new st(ue.comparator),this.Na=new Map,this.La=new Jm,this.Ba={},this.ka=new Map,this.qa=Ho.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function UL(t,e,n=!0){const r=GI(t);let i;const s=r.Fa.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.Da()):i=await jI(r,e,n,!0),i}async function jL(t,e){const n=GI(t);await jI(n,e,!0,!1)}async function jI(t,e,n,r){const i=await sL(t.localStore,fr(e)),s=i.targetId,o=t.sharedClientState.addLocalQueryTarget(s,n);let a;return r&&(a=await zL(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&NI(t.remoteStore,i),a}async function zL(t,e,n,r,i){t.Ka=(f,g,m)=>async function(A,N,T,_){let S=N.view.ma(T);S.ns&&(S=await G_(A.localStore,N.query,!1).then(({documents:I})=>N.view.ma(I,S)));const D=_&&_.targetChanges.get(N.targetId),j=_&&_.targetMismatches.get(N.targetId)!=null,b=N.view.applyChanges(S,A.isPrimaryClient,D,j);return Z_(A,N.targetId,b.wa),b.snapshot}(t,f,g,m);const s=await G_(t.localStore,e,!0),o=new ML(e,s.Ts),a=o.ma(s.documents),u=ql.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),c=o.applyChanges(a,t.isPrimaryClient,u);Z_(t,n,c.wa);const h=new LL(e,n,o);return t.Fa.set(e,h),t.Ma.has(n)?t.Ma.get(n).push(e):t.Ma.set(n,[e]),c.snapshot}async function BL(t,e,n){const r=me(t),i=r.Fa.get(e),s=r.Ma.get(i.targetId);if(s.length>1)return r.Ma.set(i.targetId,s.filter(o=>!Vd(o,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await hp(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&tg(r.remoteStore,i.targetId),pp(r,i.targetId)}).catch(na)):(pp(r,i.targetId),await hp(r.localStore,i.targetId,!0))}async function $L(t,e){const n=me(t),r=n.Fa.get(e),i=n.Ma.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),tg(n.remoteStore,r.targetId))}async function HL(t,e,n){const r=XL(t);try{const i=await function(o,a){const u=me(o),c=Et.now(),h=a.reduce((m,E)=>m.add(E.key),Ce());let f,g;return u.persistence.runTransaction("Locally write mutations","readwrite",m=>{let E=qr(),A=Ce();return u.cs.getEntries(m,h).next(N=>{E=N,E.forEach((T,_)=>{_.isValidDocument()||(A=A.add(T))})}).next(()=>u.localDocuments.getOverlayedDocuments(m,E)).next(N=>{f=N;const T=[];for(const _ of a){const S=oM(_,f.get(_.key).overlayedDocument);S!=null&&T.push(new js(_.key,S,X1(S.value.mapValue),Ur.exists(!0)))}return u.mutationQueue.addMutationBatch(m,c,T,a)}).next(N=>{g=N;const T=N.applyToLocalDocumentSet(f,A);return u.documentOverlayCache.saveOverlays(m,N.batchId,T)})}).then(()=>({batchId:g.batchId,changes:aI(f)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,a,u){let c=o.Ba[o.currentUser.toKey()];c||(c=new st(xe)),c=c.insert(a,u),o.Ba[o.currentUser.toKey()]=c}(r,i.batchId,n),await Ql(r,i.changes),await Hd(r.remoteStore)}catch(i){const s=og(i,"Failed to persist write");n.reject(s)}}async function zI(t,e){const n=me(t);try{const r=await nL(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Na.get(s);o&&(Me(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.va=!0:i.modifiedDocuments.size>0?Me(o.va):i.removedDocuments.size>0&&(Me(o.va),o.va=!1))}),await Ql(n,r,e)}catch(r){await na(r)}}function J_(t,e,n){const r=me(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Fa.forEach((s,o)=>{const a=o.view.Z_(e);a.snapshot&&i.push(a.snapshot)}),function(o,a){const u=me(o);u.onlineState=a;let c=!1;u.queries.forEach((h,f)=>{for(const g of f.j_)g.Z_(a)&&(c=!0)}),c&&ag(u)}(r.eventManager,e),i.length&&r.Ca.d_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function GL(t,e,n){const r=me(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Na.get(e),s=i&&i.key;if(s){let o=new st(ue.comparator);o=o.insert(s,Ht.newNoDocument(s,fe.min()));const a=Ce().add(s),u=new zd(fe.min(),new Map,new st(xe),o,a);await zI(r,u),r.Oa=r.Oa.remove(s),r.Na.delete(e),lg(r)}else await hp(r.localStore,e,!1).then(()=>pp(r,e,n)).catch(na)}async function WL(t,e){const n=me(t),r=e.batch.batchId;try{const i=await tL(n.localStore,e);$I(n,r,null),BI(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Ql(n,i)}catch(i){await na(i)}}async function qL(t,e,n){const r=me(t);try{const i=await function(o,a){const u=me(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let h;return u.mutationQueue.lookupMutationBatch(c,a).next(f=>(Me(f!==null),h=f.keys(),u.mutationQueue.removeMutationBatch(c,f))).next(()=>u.mutationQueue.performConsistencyCheck(c)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(c,h,a)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,h)).next(()=>u.localDocuments.getDocuments(c,h))})}(r.localStore,e);$I(r,e,n),BI(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Ql(r,i)}catch(i){await na(i)}}function BI(t,e){(t.ka.get(e)||[]).forEach(n=>{n.resolve()}),t.ka.delete(e)}function $I(t,e,n){const r=me(t);let i=r.Ba[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Ba[r.currentUser.toKey()]=i}}function pp(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Ma.get(e))t.Fa.delete(r),n&&t.Ca.$a(r,n);t.Ma.delete(e),t.isPrimaryClient&&t.La.gr(e).forEach(r=>{t.La.containsKey(r)||HI(t,r)})}function HI(t,e){t.xa.delete(e.path.canonicalString());const n=t.Oa.get(e);n!==null&&(tg(t.remoteStore,n),t.Oa=t.Oa.remove(e),t.Na.delete(n),lg(t))}function Z_(t,e,n){for(const r of n)r instanceof FI?(t.La.addReference(r.key,e),KL(t,r)):r instanceof UI?(Y("SyncEngine","Document no longer in limbo: "+r.key),t.La.removeReference(r.key,e),t.La.containsKey(r.key)||HI(t,r.key)):he()}function KL(t,e){const n=e.key,r=n.path.canonicalString();t.Oa.get(n)||t.xa.has(r)||(Y("SyncEngine","New document in limbo: "+n),t.xa.add(r),lg(t))}function lg(t){for(;t.xa.size>0&&t.Oa.size<t.maxConcurrentLimboResolutions;){const e=t.xa.values().next().value;t.xa.delete(e);const n=new ue(ut.fromString(e)),r=t.qa.next();t.Na.set(r,new VL(n)),t.Oa=t.Oa.insert(n,r),NI(t.remoteStore,new Ei(fr(qm(n.path)),r,"TargetPurposeLimboResolution",Dd.oe))}}async function Ql(t,e,n){const r=me(t),i=[],s=[],o=[];r.Fa.isEmpty()||(r.Fa.forEach((a,u)=>{o.push(r.Ka(u,e,n).then(c=>{var h;if((c||n)&&r.isPrimaryClient){const f=c?!c.fromCache:(h=n==null?void 0:n.targetChanges.get(u.targetId))===null||h===void 0?void 0:h.current;r.sharedClientState.updateQueryState(u.targetId,f?"current":"not-current")}if(c){i.push(c);const f=eg.Wi(u.targetId,c);s.push(f)}}))}),await Promise.all(o),r.Ca.d_(i),await async function(u,c){const h=me(u);try{await h.persistence.runTransaction("notifyLocalViewChanges","readwrite",f=>z.forEach(c,g=>z.forEach(g.$i,m=>h.persistence.referenceDelegate.addReference(f,g.targetId,m)).next(()=>z.forEach(g.Ui,m=>h.persistence.referenceDelegate.removeReference(f,g.targetId,m)))))}catch(f){if(!ra(f))throw f;Y("LocalStore","Failed to update sequence numbers: "+f)}for(const f of c){const g=f.targetId;if(!f.fromCache){const m=h.os.get(g),E=m.snapshotVersion,A=m.withLastLimboFreeSnapshotVersion(E);h.os=h.os.insert(g,A)}}}(r.localStore,s))}async function QL(t,e){const n=me(t);if(!n.currentUser.isEqual(e)){Y("SyncEngine","User change. New user:",e.toKey());const r=await PI(n.localStore,e);n.currentUser=e,function(s,o){s.ka.forEach(a=>{a.forEach(u=>{u.reject(new le($.CANCELLED,o))})}),s.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Ql(n,r.hs)}}function YL(t,e){const n=me(t),r=n.Na.get(e);if(r&&r.va)return Ce().add(r.key);{let i=Ce();const s=n.Ma.get(e);if(!s)return i;for(const o of s){const a=n.Fa.get(o);i=i.unionWith(a.view.Va)}return i}}function GI(t){const e=me(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=zI.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=YL.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=GL.bind(null,e),e.Ca.d_=NL.bind(null,e.eventManager),e.Ca.$a=DL.bind(null,e.eventManager),e}function XL(t){const e=me(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=WL.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=qL.bind(null,e),e}class Xc{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Bd(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,n){return null}Ha(e,n){return null}za(e){return eL(this.persistence,new JM,e.initialUser,this.serializer)}Ga(e){return new AI(Zm.Zr,this.serializer)}Wa(e){return new aL}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Xc.provider={build:()=>new Xc};class JL extends Xc{constructor(e){super(),this.cacheSizeBytes=e}ja(e,n){Me(this.persistence.referenceDelegate instanceof Qc);const r=this.persistence.referenceDelegate.garbageCollector;return new VM(r,e.asyncQueue,n)}Ga(e){const n=this.cacheSizeBytes!==void 0?nn.withCacheSize(this.cacheSizeBytes):nn.DEFAULT;return new AI(r=>Qc.Zr(r,n),this.serializer)}}class mp{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>J_(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=QL.bind(null,this.syncEngine),await AL(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new bL}()}createDatastore(e){const n=Bd(e.databaseInfo.databaseId),r=function(s){return new dL(s)}(e.databaseInfo);return function(s,o,a,u){return new pL(s,o,a,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,a){return new gL(r,i,s,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>J_(this.syncEngine,n,0),function(){return q_.D()?new q_:new lL}())}createSyncEngine(e,n){return function(i,s,o,a,u,c,h){const f=new FL(i,s,o,a,u,c);return h&&(f.Qa=!0),f}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const s=me(i);Y("RemoteStore","RemoteStore shutting down."),s.L_.add(5),await Kl(s),s.k_.shutdown(),s.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}mp.provider={build:()=>new mp};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZL{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):Wr("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eV{constructor(e,n,r,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=Bt.UNAUTHENTICATED,this.clientId=K1.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async o=>{Y("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(Y("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Ni;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=og(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function $h(t,e){t.asyncQueue.verifyOperationInProgress(),Y("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await PI(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function e0(t,e){t.asyncQueue.verifyOperationInProgress();const n=await tV(t);Y("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>K_(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>K_(e.remoteStore,i)),t._onlineComponents=e}async function tV(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){Y("FirestoreClient","Using user provided OfflineComponentProvider");try{await $h(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(i){return i.name==="FirebaseError"?i.code===$.FAILED_PRECONDITION||i.code===$.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(n))throw n;jo("Error using user provided cache. Falling back to memory cache: "+n),await $h(t,new Xc)}}else Y("FirestoreClient","Using default OfflineComponentProvider"),await $h(t,new JL(void 0));return t._offlineComponents}async function WI(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(Y("FirestoreClient","Using user provided OnlineComponentProvider"),await e0(t,t._uninitializedComponentsProvider._online)):(Y("FirestoreClient","Using default OnlineComponentProvider"),await e0(t,new mp))),t._onlineComponents}function nV(t){return WI(t).then(e=>e.syncEngine)}async function rV(t){const e=await WI(t),n=e.eventManager;return n.onListen=UL.bind(null,e.syncEngine),n.onUnlisten=BL.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=jL.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=$L.bind(null,e.syncEngine),n}function iV(t,e,n={}){const r=new Ni;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,u,c){const h=new ZL({next:g=>{h.Za(),o.enqueueAndForget(()=>kL(s,f));const m=g.docs.has(a);!m&&g.fromCache?c.reject(new le($.UNAVAILABLE,"Failed to get document because the client is offline.")):m&&g.fromCache&&u&&u.source==="server"?c.reject(new le($.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(g)},error:g=>c.reject(g)}),f=new OL(qm(a.path),h,{includeMetadataChanges:!0,_a:!0});return xL(s,f)}(await rV(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qI(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const t0=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sV(t,e,n){if(!n)throw new le($.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function oV(t,e,n,r){if(e===!0&&r===!0)throw new le($.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function n0(t){if(!ue.isDocumentKey(t))throw new le($.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function ug(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":he()}function Pl(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new le($.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=ug(t);throw new le($.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r0{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new le($.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new le($.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}oV("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=qI((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new le($.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new le($.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new le($.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class cg{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new r0({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new le($.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new le($.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new r0(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new hO;switch(r.type){case"firstParty":return new gO(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new le($.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=t0.get(n);r&&(Y("ComponentProvider","Removing Datastore"),t0.delete(n),r.terminate())}(this),Promise.resolve()}}function aV(t,e,n,r={}){var i;const s=(t=Pl(t,cg))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&jo("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,u;if(typeof r.mockUserToken=="string")a=r.mockUserToken,u=Bt.MOCK_USER;else{a=ix(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new le($.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new Bt(c)}t._authCredentials=new fO(new q1(a,u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dg{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new dg(this.firestore,e,this._query)}}class Fn{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new bl(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Fn(this.firestore,e,this._key)}}class bl extends dg{constructor(e,n,r){super(e,n,qm(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Fn(this.firestore,null,new ue(e))}withConverter(e){return new bl(this.firestore,e,this._path)}}function KI(t,e,...n){if(t=qt(t),arguments.length===1&&(e=K1.newId()),sV("doc","path",e),t instanceof cg){const r=ut.fromString(e,...n);return n0(r),new Fn(t,null,new ue(r))}{if(!(t instanceof Fn||t instanceof bl))throw new le($.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ut.fromString(e,...n));return n0(r),new Fn(t.firestore,t instanceof bl?t.converter:null,new ue(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i0{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new xI(this,"async_queue_retry"),this.Vu=()=>{const r=Bh();r&&Y("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const n=Bh();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const n=Bh();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const n=new Ni;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!ra(e))throw e;Y("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const n=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw Wr("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.du=!1,r))));return this.mu=n,n}enqueueAfterDelay(e,n,r){this.fu(),this.Ru.indexOf(e)>-1&&(n=0);const i=sg.createAndSchedule(this,e,n,r,s=>this.yu(s));return this.Tu.push(i),i}fu(){this.Eu&&he()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const n of this.Tu)if(n.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Tu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const n=this.Tu.indexOf(e);this.Tu.splice(n,1)}}class hg extends cg{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new i0,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new i0(e),this._firestoreClient=void 0,await e}}}function lV(t,e){const n=typeof t=="object"?t:Am(),r=typeof t=="string"?t:"(default)",i=Ls(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=nx("firestore");s&&aV(i,...s)}return i}function QI(t){if(t._terminated)throw new le($.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||uV(t),t._firestoreClient}function uV(t){var e,n,r;const i=t._freezeSettings(),s=function(a,u,c,h){return new kO(a,u,c,h.host,h.ssl,h.experimentalForceLongPolling,h.experimentalAutoDetectLongPolling,qI(h.experimentalLongPollingOptions),h.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._componentsProvider||!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),t._firestoreClient=new eV(t._authCredentials,t._appCheckCredentials,t._queue,s,t._componentsProvider&&function(a){const u=a==null?void 0:a._online.build();return{_offline:a==null?void 0:a._offline.build(u),_online:u}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wo{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Wo(Dt.fromBase64String(e))}catch(n){throw new le($.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Wo(Dt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fg{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new le($.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new xt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YI{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pg{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new le($.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new le($.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return xe(this._lat,e._lat)||xe(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mg{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cV=/^__.*__$/;class dV{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new js(e,this.data,this.fieldMask,n,this.fieldTransforms):new Wl(e,this.data,n,this.fieldTransforms)}}function XI(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw he()}}class gg{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.vu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new gg(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.Ou(e),i}Nu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.vu(),i}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return Jc(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(XI(this.Cu)&&cV.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class hV{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Bd(e)}Qu(e,n,r,i=!1){return new gg({Cu:e,methodName:n,qu:r,path:xt.emptyPath(),xu:!1,ku:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function fV(t){const e=t._freezeSettings(),n=Bd(t._databaseId);return new hV(t._databaseId,!!e.ignoreUndefinedProperties,n)}function pV(t,e,n,r,i,s={}){const o=t.Qu(s.merge||s.mergeFields?2:0,e,n,i);tS("Data must be an object, but it was:",o,r);const a=ZI(r,o);let u,c;if(s.merge)u=new Qn(o.fieldMask),c=o.fieldTransforms;else if(s.mergeFields){const h=[];for(const f of s.mergeFields){const g=mV(e,f,n);if(!o.contains(g))throw new le($.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);yV(h,g)||h.push(g)}u=new Qn(h),c=o.fieldTransforms.filter(f=>u.covers(f.field))}else u=null,c=o.fieldTransforms;return new dV(new On(a),u,c)}function JI(t,e){if(eS(t=qt(t)))return tS("Unsupported field value:",e,t),ZI(t,e);if(t instanceof YI)return function(r,i){if(!XI(i.Cu))throw i.Bu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Bu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let u=JI(a,i.Lu(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=qt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return eM(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=Et.fromDate(r);return{timestampValue:Kc(i.serializer,s)}}if(r instanceof Et){const s=new Et(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Kc(i.serializer,s)}}if(r instanceof pg)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Wo)return{bytesValue:wI(i.serializer,r._byteString)};if(r instanceof Fn){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Bu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Xm(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof mg)return function(o,a){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(u=>{if(typeof u!="number")throw a.Bu("VectorValues must only contain numeric values.");return Km(a.serializer,u)})}}}}}}(r,i);throw i.Bu(`Unsupported field value: ${ug(r)}`)}(t,e)}function ZI(t,e){const n={};return Q1(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Fs(t,(r,i)=>{const s=JI(i,e.Mu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function eS(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Et||t instanceof pg||t instanceof Wo||t instanceof Fn||t instanceof YI||t instanceof mg)}function tS(t,e,n){if(!eS(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=ug(n);throw r==="an object"?e.Bu(t+" a custom object"):e.Bu(t+" "+r)}}function mV(t,e,n){if((e=qt(e))instanceof fg)return e._internalPath;if(typeof e=="string")return nS(t,e);throw Jc("Field path arguments must be of type string or ",t,!1,void 0,n)}const gV=new RegExp("[~\\*/\\[\\]]");function nS(t,e,n){if(e.search(gV)>=0)throw Jc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new fg(...e.split("."))._internalPath}catch{throw Jc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Jc(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new le($.INVALID_ARGUMENT,a+t+u)}function yV(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rS{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Fn(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new vV(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(iS("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class vV extends rS{data(){return super.data()}}function iS(t,e){return typeof e=="string"?nS(t,e):e instanceof fg?e._internalPath:e._delegate._internalPath}class _V{convertValue(e,n="none"){switch(Ui(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ht(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Fi(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw he()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Fs(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertVectorValue(e){var n,r,i;const s=(i=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(o=>ht(o.doubleValue));return new mg(s)}convertGeoPoint(e){return new pg(ht(e.latitude),ht(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Md(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Il(e));default:return null}}convertTimestamp(e){const n=Vi(e);return new Et(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=ut.fromString(e);Me(RI(r));const i=new Sl(r.get(1),r.get(3)),s=new ue(r.popFirst(5));return i.isEqual(n)||Wr(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wV(t,e,n){let r;return r=t?t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EV{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class sS extends rS{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new TV(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(iS("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class TV extends sS{data(e={}){return super.data(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IV(t){t=Pl(t,Fn);const e=Pl(t.firestore,hg);return iV(QI(e),t._key).then(n=>AV(e,t,n))}class SV extends _V{constructor(e){super(),this.firestore=e}convertBytes(e){return new Wo(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Fn(this.firestore,null,n)}}function CV(t,e,n){t=Pl(t,Fn);const r=Pl(t.firestore,hg),i=wV(t.converter,e);return RV(r,[pV(fV(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,Ur.none())])}function RV(t,e){return function(r,i){const s=new Ni;return r.asyncQueue.enqueueAndForget(async()=>HL(await nV(r),i,s)),s.promise}(QI(t),e)}function AV(t,e,n){const r=n.docs.get(e._key),i=new SV(t);return new sS(t,i,e._key,r,new EV(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(i){ta=i})(Zo),gr(new Zn("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new hg(new pO(r.getProvider("auth-internal")),new vO(r.getProvider("app-check-internal")),function(c,h){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new le($.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Sl(c.options.projectId,h)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),Vn(E_,"4.7.4",e),Vn(E_,"4.7.4","esm2017")})();const PV={apiKey:"AIzaSyD-IrZzxRKpGYCZSnfGtXM4vqPBAIlkSLw",authDomain:"ai-trip-planner-2555.firebaseapp.com",projectId:"ai-trip-planner-2555",storageBucket:"ai-trip-planner-2555.firebasestorage.app",messagingSenderId:"1089984980263",appId:"1:1089984980263:web:23a7a563beab5009a9f502",measurementId:"G-T2E6VWLRRQ"},oS=MT(PV);lO(oS);const Ja=$2(),aS=lV(oS);function yg(){const{pathname:t}=jl(),[e,n]=U.useState(t);U.useEffect(()=>{n(t)},[t]);const r=()=>{NN(Ja).catch(i=>console.log(i))};return V.jsxs("div",{className:"p-2 shadow-sm flex justify-between px-7",children:[V.jsx("img",{src:"./logo.svg",alt:"Logo"}),V.jsx(Cd,{to:"/login",children:e!=="/login"&&V.jsx(Td,{className:"rounded-lg",onClick:r,children:"Sign out"})})]})}var lS={exports:{}},uS={};/**
 * @license React
 * use-sync-external-store-with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yl=U;function bV(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var xV=typeof Object.is=="function"?Object.is:bV,kV=Yl.useSyncExternalStore,NV=Yl.useRef,DV=Yl.useEffect,OV=Yl.useMemo,MV=Yl.useDebugValue;uS.useSyncExternalStoreWithSelector=function(t,e,n,r,i){var s=NV(null);if(s.current===null){var o={hasValue:!1,value:null};s.current=o}else o=s.current;s=OV(function(){function u(m){if(!c){if(c=!0,h=m,m=r(m),i!==void 0&&o.hasValue){var E=o.value;if(i(E,m))return f=E}return f=m}if(E=f,xV(h,m))return E;var A=r(m);return i!==void 0&&i(E,A)?E:(h=m,f=A)}var c=!1,h,f,g=n===void 0?null:n;return[function(){return u(e())},g===null?void 0:function(){return u(g())}]},[e,n,r,i]);var a=kV(t,s[0],s[1]);return DV(function(){o.hasValue=!0,o.value=a},[a]),MV(a),a};lS.exports=uS;var LV=lS.exports,vn="default"in qh?W:qh,s0=Symbol.for("react-redux-context"),o0=typeof globalThis<"u"?globalThis:{};function VV(){if(!vn.createContext)return{};const t=o0[s0]??(o0[s0]=new Map);let e=t.get(vn.createContext);return e||(e=vn.createContext(null),t.set(vn.createContext,e)),e}var zi=VV(),FV=()=>{throw new Error("uSES not initialized!")};function vg(t=zi){return function(){return vn.useContext(t)}}var cS=vg(),dS=FV,UV=t=>{dS=t},jV=(t,e)=>t===e;function zV(t=zi){const e=t===zi?cS:vg(t),n=(r,i={})=>{const{equalityFn:s=jV,devModeChecks:o={}}=typeof i=="function"?{equalityFn:i}:i,{store:a,subscription:u,getServerState:c,stabilityCheck:h,identityFunctionCheck:f}=e();vn.useRef(!0);const g=vn.useCallback({[r.name](E){return r(E)}}[r.name],[r,h,o.stabilityCheck]),m=dS(u.addNestedSub,a.getState,c||a.getState,g,s);return vn.useDebugValue(m),m};return Object.assign(n,{withTypes:()=>n}),n}var Xl=zV();function BV(t){t()}function $V(){let t=null,e=null;return{clear(){t=null,e=null},notify(){BV(()=>{let n=t;for(;n;)n.callback(),n=n.next})},get(){const n=[];let r=t;for(;r;)n.push(r),r=r.next;return n},subscribe(n){let r=!0;const i=e={callback:n,next:null,prev:e};return i.prev?i.prev.next=i:t=i,function(){!r||t===null||(r=!1,i.next?i.next.prev=i.prev:e=i.prev,i.prev?i.prev.next=i.next:t=i.next)}}}}var a0={notify(){},get:()=>[]};function HV(t,e){let n,r=a0,i=0,s=!1;function o(A){h();const N=r.subscribe(A);let T=!1;return()=>{T||(T=!0,N(),f())}}function a(){r.notify()}function u(){E.onStateChange&&E.onStateChange()}function c(){return s}function h(){i++,n||(n=t.subscribe(u),r=$V())}function f(){i--,n&&i===0&&(n(),n=void 0,r.clear(),r=a0)}function g(){s||(s=!0,h())}function m(){s&&(s=!1,f())}const E={addNestedSub:o,notifyNestedSubs:a,handleChangeWrapper:u,isSubscribed:c,trySubscribe:g,tryUnsubscribe:m,getListeners:()=>r};return E}var GV=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",WV=typeof navigator<"u"&&navigator.product==="ReactNative",qV=GV||WV?vn.useLayoutEffect:vn.useEffect;function KV({store:t,context:e,children:n,serverState:r,stabilityCheck:i="once",identityFunctionCheck:s="once"}){const o=vn.useMemo(()=>{const c=HV(t);return{store:t,subscription:c,getServerState:r?()=>r:void 0,stabilityCheck:i,identityFunctionCheck:s}},[t,r,i,s]),a=vn.useMemo(()=>t.getState(),[t]);qV(()=>{const{subscription:c}=o;return c.onStateChange=c.notifyNestedSubs,c.trySubscribe(),a!==t.getState()&&c.notifyNestedSubs(),()=>{c.tryUnsubscribe(),c.onStateChange=void 0}},[o,a]);const u=e||zi;return vn.createElement(u.Provider,{value:o},n)}var QV=KV;function hS(t=zi){const e=t===zi?cS:vg(t),n=()=>{const{store:r}=e();return r};return Object.assign(n,{withTypes:()=>n}),n}var YV=hS();function XV(t=zi){const e=t===zi?YV:hS(t),n=()=>e().dispatch;return Object.assign(n,{withTypes:()=>n}),n}var _g=XV();UV(LV.useSyncExternalStoreWithSelector);function JV(){const e=Xl(n=>n.user.mail)?"/create-trip":"/login";return V.jsxs("div",{className:"flex flex-col items-center gap-9",children:[V.jsxs("h1",{className:"font-extrabold text-center text-5xl mt-16 w-screen",children:[V.jsx("h1",{className:"text-[#f56551]",children:"Discover your next adventure with AI:"}),V.jsx("h1",{className:"pt-4",children:"Personalized itineraries at your fingertips."})]}),V.jsx("p",{className:"text-xl text-gray-500",children:"Your personal trip planner and travel curator, creating custom itineraries tailored to your interest and budget."}),V.jsx(Cd,{to:e,children:V.jsx(Td,{children:"Get started, It's free"})})]})}function At(t){return`Minified Redux error #${t}; visit https://redux.js.org/Errors?code=${t} for the full message or use the non-minified dev environment for full errors. `}var ZV=typeof Symbol=="function"&&Symbol.observable||"@@observable",l0=ZV,Hh=()=>Math.random().toString(36).substring(7).split("").join("."),e4={INIT:`@@redux/INIT${Hh()}`,REPLACE:`@@redux/REPLACE${Hh()}`,PROBE_UNKNOWN_ACTION:()=>`@@redux/PROBE_UNKNOWN_ACTION${Hh()}`},Zc=e4;function wg(t){if(typeof t!="object"||t===null)return!1;let e=t;for(;Object.getPrototypeOf(e)!==null;)e=Object.getPrototypeOf(e);return Object.getPrototypeOf(t)===e||Object.getPrototypeOf(t)===null}function fS(t,e,n){if(typeof t!="function")throw new Error(At(2));if(typeof e=="function"&&typeof n=="function"||typeof n=="function"&&typeof arguments[3]=="function")throw new Error(At(0));if(typeof e=="function"&&typeof n>"u"&&(n=e,e=void 0),typeof n<"u"){if(typeof n!="function")throw new Error(At(1));return n(fS)(t,e)}let r=t,i=e,s=new Map,o=s,a=0,u=!1;function c(){o===s&&(o=new Map,s.forEach((N,T)=>{o.set(T,N)}))}function h(){if(u)throw new Error(At(3));return i}function f(N){if(typeof N!="function")throw new Error(At(4));if(u)throw new Error(At(5));let T=!0;c();const _=a++;return o.set(_,N),function(){if(T){if(u)throw new Error(At(6));T=!1,c(),o.delete(_),s=null}}}function g(N){if(!wg(N))throw new Error(At(7));if(typeof N.type>"u")throw new Error(At(8));if(typeof N.type!="string")throw new Error(At(17));if(u)throw new Error(At(9));try{u=!0,i=r(i,N)}finally{u=!1}return(s=o).forEach(_=>{_()}),N}function m(N){if(typeof N!="function")throw new Error(At(10));r=N,g({type:Zc.REPLACE})}function E(){const N=f;return{subscribe(T){if(typeof T!="object"||T===null)throw new Error(At(11));function _(){const D=T;D.next&&D.next(h())}return _(),{unsubscribe:N(_)}},[l0](){return this}}}return g({type:Zc.INIT}),{dispatch:g,subscribe:f,getState:h,replaceReducer:m,[l0]:E}}function t4(t){Object.keys(t).forEach(e=>{const n=t[e];if(typeof n(void 0,{type:Zc.INIT})>"u")throw new Error(At(12));if(typeof n(void 0,{type:Zc.PROBE_UNKNOWN_ACTION()})>"u")throw new Error(At(13))})}function n4(t){const e=Object.keys(t),n={};for(let s=0;s<e.length;s++){const o=e[s];typeof t[o]=="function"&&(n[o]=t[o])}const r=Object.keys(n);let i;try{t4(n)}catch(s){i=s}return function(o={},a){if(i)throw i;let u=!1;const c={};for(let h=0;h<r.length;h++){const f=r[h],g=n[f],m=o[f],E=g(m,a);if(typeof E>"u")throw a&&a.type,new Error(At(14));c[f]=E,u=u||E!==m}return u=u||r.length!==Object.keys(o).length,u?c:o}}function ed(...t){return t.length===0?e=>e:t.length===1?t[0]:t.reduce((e,n)=>(...r)=>e(n(...r)))}function r4(...t){return e=>(n,r)=>{const i=e(n,r);let s=()=>{throw new Error(At(15))};const o={getState:i.getState,dispatch:(u,...c)=>s(u,...c)},a=t.map(u=>u(o));return s=ed(...a)(i.dispatch),{...i,dispatch:s}}}function i4(t){return wg(t)&&"type"in t&&typeof t.type=="string"}var pS=Symbol.for("immer-nothing"),u0=Symbol.for("immer-draftable"),Tn=Symbol.for("immer-state");function Kn(t,...e){throw new Error(`[Immer] minified error nr: ${t}. Full error at: https://bit.ly/3cXEKWf`)}var qo=Object.getPrototypeOf;function bs(t){return!!t&&!!t[Tn]}function Kr(t){var e;return t?mS(t)||Array.isArray(t)||!!t[u0]||!!((e=t.constructor)!=null&&e[u0])||Wd(t)||qd(t):!1}var s4=Object.prototype.constructor.toString();function mS(t){if(!t||typeof t!="object")return!1;const e=qo(t);if(e===null)return!0;const n=Object.hasOwnProperty.call(e,"constructor")&&e.constructor;return n===Object?!0:typeof n=="function"&&Function.toString.call(n)===s4}function td(t,e){Gd(t)===0?Reflect.ownKeys(t).forEach(n=>{e(n,t[n],t)}):t.forEach((n,r)=>e(r,n,t))}function Gd(t){const e=t[Tn];return e?e.type_:Array.isArray(t)?1:Wd(t)?2:qd(t)?3:0}function gp(t,e){return Gd(t)===2?t.has(e):Object.prototype.hasOwnProperty.call(t,e)}function gS(t,e,n){const r=Gd(t);r===2?t.set(e,n):r===3?t.add(n):t[e]=n}function o4(t,e){return t===e?t!==0||1/t===1/e:t!==t&&e!==e}function Wd(t){return t instanceof Map}function qd(t){return t instanceof Set}function os(t){return t.copy_||t.base_}function yp(t,e){if(Wd(t))return new Map(t);if(qd(t))return new Set(t);if(Array.isArray(t))return Array.prototype.slice.call(t);const n=mS(t);if(e===!0||e==="class_only"&&!n){const r=Object.getOwnPropertyDescriptors(t);delete r[Tn];let i=Reflect.ownKeys(r);for(let s=0;s<i.length;s++){const o=i[s],a=r[o];a.writable===!1&&(a.writable=!0,a.configurable=!0),(a.get||a.set)&&(r[o]={configurable:!0,writable:!0,enumerable:a.enumerable,value:t[o]})}return Object.create(qo(t),r)}else{const r=qo(t);if(r!==null&&n)return{...t};const i=Object.create(r);return Object.assign(i,t)}}function Eg(t,e=!1){return Kd(t)||bs(t)||!Kr(t)||(Gd(t)>1&&(t.set=t.add=t.clear=t.delete=a4),Object.freeze(t),e&&Object.entries(t).forEach(([n,r])=>Eg(r,!0))),t}function a4(){Kn(2)}function Kd(t){return Object.isFrozen(t)}var l4={};function xs(t){const e=l4[t];return e||Kn(0,t),e}var xl;function yS(){return xl}function u4(t,e){return{drafts_:[],parent_:t,immer_:e,canAutoFreeze_:!0,unfinalizedDrafts_:0}}function c0(t,e){e&&(xs("Patches"),t.patches_=[],t.inversePatches_=[],t.patchListener_=e)}function vp(t){_p(t),t.drafts_.forEach(c4),t.drafts_=null}function _p(t){t===xl&&(xl=t.parent_)}function d0(t){return xl=u4(xl,t)}function c4(t){const e=t[Tn];e.type_===0||e.type_===1?e.revoke_():e.revoked_=!0}function h0(t,e){e.unfinalizedDrafts_=e.drafts_.length;const n=e.drafts_[0];return t!==void 0&&t!==n?(n[Tn].modified_&&(vp(e),Kn(4)),Kr(t)&&(t=nd(e,t),e.parent_||rd(e,t)),e.patches_&&xs("Patches").generateReplacementPatches_(n[Tn].base_,t,e.patches_,e.inversePatches_)):t=nd(e,n,[]),vp(e),e.patches_&&e.patchListener_(e.patches_,e.inversePatches_),t!==pS?t:void 0}function nd(t,e,n){if(Kd(e))return e;const r=e[Tn];if(!r)return td(e,(i,s)=>f0(t,r,e,i,s,n)),e;if(r.scope_!==t)return e;if(!r.modified_)return rd(t,r.base_,!0),r.base_;if(!r.finalized_){r.finalized_=!0,r.scope_.unfinalizedDrafts_--;const i=r.copy_;let s=i,o=!1;r.type_===3&&(s=new Set(i),i.clear(),o=!0),td(s,(a,u)=>f0(t,r,i,a,u,n,o)),rd(t,i,!1),n&&t.patches_&&xs("Patches").generatePatches_(r,n,t.patches_,t.inversePatches_)}return r.copy_}function f0(t,e,n,r,i,s,o){if(bs(i)){const a=s&&e&&e.type_!==3&&!gp(e.assigned_,r)?s.concat(r):void 0,u=nd(t,i,a);if(gS(n,r,u),bs(u))t.canAutoFreeze_=!1;else return}else o&&n.add(i);if(Kr(i)&&!Kd(i)){if(!t.immer_.autoFreeze_&&t.unfinalizedDrafts_<1)return;nd(t,i),(!e||!e.scope_.parent_)&&typeof r!="symbol"&&Object.prototype.propertyIsEnumerable.call(n,r)&&rd(t,i)}}function rd(t,e,n=!1){!t.parent_&&t.immer_.autoFreeze_&&t.canAutoFreeze_&&Eg(e,n)}function d4(t,e){const n=Array.isArray(t),r={type_:n?1:0,scope_:e?e.scope_:yS(),modified_:!1,finalized_:!1,assigned_:{},parent_:e,base_:t,draft_:null,copy_:null,revoke_:null,isManual_:!1};let i=r,s=Tg;n&&(i=[r],s=kl);const{revoke:o,proxy:a}=Proxy.revocable(i,s);return r.draft_=a,r.revoke_=o,a}var Tg={get(t,e){if(e===Tn)return t;const n=os(t);if(!gp(n,e))return h4(t,n,e);const r=n[e];return t.finalized_||!Kr(r)?r:r===Gh(t.base_,e)?(Wh(t),t.copy_[e]=Ep(r,t)):r},has(t,e){return e in os(t)},ownKeys(t){return Reflect.ownKeys(os(t))},set(t,e,n){const r=vS(os(t),e);if(r!=null&&r.set)return r.set.call(t.draft_,n),!0;if(!t.modified_){const i=Gh(os(t),e),s=i==null?void 0:i[Tn];if(s&&s.base_===n)return t.copy_[e]=n,t.assigned_[e]=!1,!0;if(o4(n,i)&&(n!==void 0||gp(t.base_,e)))return!0;Wh(t),wp(t)}return t.copy_[e]===n&&(n!==void 0||e in t.copy_)||Number.isNaN(n)&&Number.isNaN(t.copy_[e])||(t.copy_[e]=n,t.assigned_[e]=!0),!0},deleteProperty(t,e){return Gh(t.base_,e)!==void 0||e in t.base_?(t.assigned_[e]=!1,Wh(t),wp(t)):delete t.assigned_[e],t.copy_&&delete t.copy_[e],!0},getOwnPropertyDescriptor(t,e){const n=os(t),r=Reflect.getOwnPropertyDescriptor(n,e);return r&&{writable:!0,configurable:t.type_!==1||e!=="length",enumerable:r.enumerable,value:n[e]}},defineProperty(){Kn(11)},getPrototypeOf(t){return qo(t.base_)},setPrototypeOf(){Kn(12)}},kl={};td(Tg,(t,e)=>{kl[t]=function(){return arguments[0]=arguments[0][0],e.apply(this,arguments)}});kl.deleteProperty=function(t,e){return kl.set.call(this,t,e,void 0)};kl.set=function(t,e,n){return Tg.set.call(this,t[0],e,n,t[0])};function Gh(t,e){const n=t[Tn];return(n?os(n):t)[e]}function h4(t,e,n){var i;const r=vS(e,n);return r?"value"in r?r.value:(i=r.get)==null?void 0:i.call(t.draft_):void 0}function vS(t,e){if(!(e in t))return;let n=qo(t);for(;n;){const r=Object.getOwnPropertyDescriptor(n,e);if(r)return r;n=qo(n)}}function wp(t){t.modified_||(t.modified_=!0,t.parent_&&wp(t.parent_))}function Wh(t){t.copy_||(t.copy_=yp(t.base_,t.scope_.immer_.useStrictShallowCopy_))}var f4=class{constructor(t){this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.produce=(e,n,r)=>{if(typeof e=="function"&&typeof n!="function"){const s=n;n=e;const o=this;return function(u=s,...c){return o.produce(u,h=>n.call(this,h,...c))}}typeof n!="function"&&Kn(6),r!==void 0&&typeof r!="function"&&Kn(7);let i;if(Kr(e)){const s=d0(this),o=Ep(e,void 0);let a=!0;try{i=n(o),a=!1}finally{a?vp(s):_p(s)}return c0(s,r),h0(i,s)}else if(!e||typeof e!="object"){if(i=n(e),i===void 0&&(i=e),i===pS&&(i=void 0),this.autoFreeze_&&Eg(i,!0),r){const s=[],o=[];xs("Patches").generateReplacementPatches_(e,i,s,o),r(s,o)}return i}else Kn(1,e)},this.produceWithPatches=(e,n)=>{if(typeof e=="function")return(o,...a)=>this.produceWithPatches(o,u=>e(u,...a));let r,i;return[this.produce(e,n,(o,a)=>{r=o,i=a}),r,i]},typeof(t==null?void 0:t.autoFreeze)=="boolean"&&this.setAutoFreeze(t.autoFreeze),typeof(t==null?void 0:t.useStrictShallowCopy)=="boolean"&&this.setUseStrictShallowCopy(t.useStrictShallowCopy)}createDraft(t){Kr(t)||Kn(8),bs(t)&&(t=p4(t));const e=d0(this),n=Ep(t,void 0);return n[Tn].isManual_=!0,_p(e),n}finishDraft(t,e){const n=t&&t[Tn];(!n||!n.isManual_)&&Kn(9);const{scope_:r}=n;return c0(r,e),h0(void 0,r)}setAutoFreeze(t){this.autoFreeze_=t}setUseStrictShallowCopy(t){this.useStrictShallowCopy_=t}applyPatches(t,e){let n;for(n=e.length-1;n>=0;n--){const i=e[n];if(i.path.length===0&&i.op==="replace"){t=i.value;break}}n>-1&&(e=e.slice(n+1));const r=xs("Patches").applyPatches_;return bs(t)?r(t,e):this.produce(t,i=>r(i,e))}};function Ep(t,e){const n=Wd(t)?xs("MapSet").proxyMap_(t,e):qd(t)?xs("MapSet").proxySet_(t,e):d4(t,e);return(e?e.scope_:yS()).drafts_.push(n),n}function p4(t){return bs(t)||Kn(10,t),_S(t)}function _S(t){if(!Kr(t)||Kd(t))return t;const e=t[Tn];let n;if(e){if(!e.modified_)return e.base_;e.finalized_=!0,n=yp(t,e.scope_.immer_.useStrictShallowCopy_)}else n=yp(t,!0);return td(n,(r,i)=>{gS(n,r,_S(i))}),e&&(e.finalized_=!1),n}var In=new f4,wS=In.produce;In.produceWithPatches.bind(In);In.setAutoFreeze.bind(In);In.setUseStrictShallowCopy.bind(In);In.applyPatches.bind(In);In.createDraft.bind(In);In.finishDraft.bind(In);function ES(t){return({dispatch:n,getState:r})=>i=>s=>typeof s=="function"?s(n,r,t):i(s)}var m4=ES(),g4=ES,y4=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]=="object"?ed:ed.apply(null,arguments)};function p0(t,e){function n(...r){if(e){let i=e(...r);if(!i)throw new Error(mr(0));return{type:t,payload:i.payload,..."meta"in i&&{meta:i.meta},..."error"in i&&{error:i.error}}}return{type:t,payload:r[0]}}return n.toString=()=>`${t}`,n.type=t,n.match=r=>i4(r)&&r.type===t,n}var TS=class La extends Array{constructor(...e){super(...e),Object.setPrototypeOf(this,La.prototype)}static get[Symbol.species](){return La}concat(...e){return super.concat.apply(this,e)}prepend(...e){return e.length===1&&Array.isArray(e[0])?new La(...e[0].concat(this)):new La(...e.concat(this))}};function m0(t){return Kr(t)?wS(t,()=>{}):t}function g0(t,e,n){if(t.has(e)){let i=t.get(e);return n.update&&(i=n.update(i,e,t),t.set(e,i)),i}if(!n.insert)throw new Error(mr(10));const r=n.insert(e,t);return t.set(e,r),r}function v4(t){return typeof t=="boolean"}var _4=()=>function(e){const{thunk:n=!0,immutableCheck:r=!0,serializableCheck:i=!0,actionCreatorCheck:s=!0}=e??{};let o=new TS;return n&&(v4(n)?o.push(m4):o.push(g4(n.extraArgument))),o},w4="RTK_autoBatch",IS=t=>e=>{setTimeout(e,t)},E4=typeof window<"u"&&window.requestAnimationFrame?window.requestAnimationFrame:IS(10),T4=(t={type:"raf"})=>e=>(...n)=>{const r=e(...n);let i=!0,s=!1,o=!1;const a=new Set,u=t.type==="tick"?queueMicrotask:t.type==="raf"?E4:t.type==="callback"?t.queueNotification:IS(t.timeout),c=()=>{o=!1,s&&(s=!1,a.forEach(h=>h()))};return Object.assign({},r,{subscribe(h){const f=()=>i&&h(),g=r.subscribe(f);return a.add(h),()=>{g(),a.delete(h)}},dispatch(h){var f;try{return i=!((f=h==null?void 0:h.meta)!=null&&f[w4]),s=!i,s&&(o||(o=!0,u(c))),r.dispatch(h)}finally{i=!0}}})},I4=t=>function(n){const{autoBatch:r=!0}=n??{};let i=new TS(t);return r&&i.push(T4(typeof r=="object"?r:void 0)),i};function S4(t){const e=_4(),{reducer:n=void 0,middleware:r,devTools:i=!0,preloadedState:s=void 0,enhancers:o=void 0}=t||{};let a;if(typeof n=="function")a=n;else if(wg(n))a=n4(n);else throw new Error(mr(1));let u;typeof r=="function"?u=r(e):u=e();let c=ed;i&&(c=y4({trace:!1,...typeof i=="object"&&i}));const h=r4(...u),f=I4(h);let g=typeof o=="function"?o(f):f();const m=c(...g);return fS(a,s,m)}function SS(t){const e={},n=[];let r;const i={addCase(s,o){const a=typeof s=="string"?s:s.type;if(!a)throw new Error(mr(28));if(a in e)throw new Error(mr(29));return e[a]=o,i},addMatcher(s,o){return n.push({matcher:s,reducer:o}),i},addDefaultCase(s){return r=s,i}};return t(i),[e,n,r]}function C4(t){return typeof t=="function"}function R4(t,e){let[n,r,i]=SS(e),s;if(C4(t))s=()=>m0(t());else{const a=m0(t);s=()=>a}function o(a=s(),u){let c=[n[u.type],...r.filter(({matcher:h})=>h(u)).map(({reducer:h})=>h)];return c.filter(h=>!!h).length===0&&(c=[i]),c.reduce((h,f)=>{if(f)if(bs(h)){const m=f(h,u);return m===void 0?h:m}else{if(Kr(h))return wS(h,g=>f(g,u));{const g=f(h,u);if(g===void 0){if(h===null)return h;throw Error("A case reducer on a non-draftable value must not return undefined")}return g}}return h},a)}return o.getInitialState=s,o}var A4=Symbol.for("rtk-slice-createasyncthunk");function P4(t,e){return`${t}/${e}`}function b4({creators:t}={}){var n;const e=(n=t==null?void 0:t.asyncThunk)==null?void 0:n[A4];return function(i){const{name:s,reducerPath:o=s}=i;if(!s)throw new Error(mr(11));typeof process<"u";const a=(typeof i.reducers=="function"?i.reducers(k4()):i.reducers)||{},u=Object.keys(a),c={sliceCaseReducersByName:{},sliceCaseReducersByType:{},actionCreators:{},sliceMatchers:[]},h={addCase(S,D){const j=typeof S=="string"?S:S.type;if(!j)throw new Error(mr(12));if(j in c.sliceCaseReducersByType)throw new Error(mr(13));return c.sliceCaseReducersByType[j]=D,h},addMatcher(S,D){return c.sliceMatchers.push({matcher:S,reducer:D}),h},exposeAction(S,D){return c.actionCreators[S]=D,h},exposeCaseReducer(S,D){return c.sliceCaseReducersByName[S]=D,h}};u.forEach(S=>{const D=a[S],j={reducerName:S,type:P4(s,S),createNotation:typeof i.reducers=="function"};D4(D)?M4(j,D,h,e):N4(j,D,h)});function f(){const[S={},D=[],j=void 0]=typeof i.extraReducers=="function"?SS(i.extraReducers):[i.extraReducers],b={...S,...c.sliceCaseReducersByType};return R4(i.initialState,I=>{for(let y in b)I.addCase(y,b[y]);for(let y of c.sliceMatchers)I.addMatcher(y.matcher,y.reducer);for(let y of D)I.addMatcher(y.matcher,y.reducer);j&&I.addDefaultCase(j)})}const g=S=>S,m=new Map;let E;function A(S,D){return E||(E=f()),E(S,D)}function N(){return E||(E=f()),E.getInitialState()}function T(S,D=!1){function j(I){let y=I[S];return typeof y>"u"&&D&&(y=N()),y}function b(I=g){const y=g0(m,D,{insert:()=>new WeakMap});return g0(y,I,{insert:()=>{const w={};for(const[C,k]of Object.entries(i.selectors??{}))w[C]=x4(k,I,N,D);return w}})}return{reducerPath:S,getSelectors:b,get selectors(){return b(j)},selectSlice:j}}const _={name:s,reducer:A,actions:c.actionCreators,caseReducers:c.sliceCaseReducersByName,getInitialState:N,...T(o),injectInto(S,{reducerPath:D,...j}={}){const b=D??o;return S.inject({reducerPath:b,reducer:A},j),{..._,...T(b,!0)}}};return _}}function x4(t,e,n,r){function i(s,...o){let a=e(s);return typeof a>"u"&&r&&(a=n()),t(a,...o)}return i.unwrapped=t,i}var CS=b4();function k4(){function t(e,n){return{_reducerDefinitionType:"asyncThunk",payloadCreator:e,...n}}return t.withTypes=()=>t,{reducer(e){return Object.assign({[e.name](...n){return e(...n)}}[e.name],{_reducerDefinitionType:"reducer"})},preparedReducer(e,n){return{_reducerDefinitionType:"reducerWithPrepare",prepare:e,reducer:n}},asyncThunk:t}}function N4({type:t,reducerName:e,createNotation:n},r,i){let s,o;if("reducer"in r){if(n&&!O4(r))throw new Error(mr(17));s=r.reducer,o=r.prepare}else s=r;i.addCase(t,s).exposeCaseReducer(e,s).exposeAction(e,o?p0(t,o):p0(t))}function D4(t){return t._reducerDefinitionType==="asyncThunk"}function O4(t){return t._reducerDefinitionType==="reducerWithPrepare"}function M4({type:t,reducerName:e},n,r,i){if(!i)throw new Error(mr(18));const{payloadCreator:s,fulfilled:o,pending:a,rejected:u,settled:c,options:h}=n,f=i(t,s,h);r.exposeAction(e,f),o&&r.addCase(f.fulfilled,o),a&&r.addCase(f.pending,a),u&&r.addCase(f.rejected,u),c&&r.addMatcher(f.settled,c),r.exposeCaseReducer(e,{fulfilled:o||Mu,pending:a||Mu,rejected:u||Mu,settled:c||Mu})}function Mu(){}function mr(t){return`Minified Redux Toolkit error #${t}; visit https://redux-toolkit.js.org/Errors?code=${t} for the full message or use the non-minified dev environment for full errors. `}const RS=CS({name:"user",initialState:{mail:null,displayName:null,uid:null},reducers:{setUser(t,e){t.mail=e.payload.mail,t.displayName=e.payload.displayName,t.uid=e.payload.uid},clearUser(t){t.mail=null,t.displayName=null,t.uid=null}}}),{setUser:L4,clearUser:IU}=RS.actions,V4=RS.reducer;function F4(){const t=_g();return U.useEffect(kN(Ja,e=>{if(e){console.log(e);const{uid:n,email:r}=e;setTimeout(()=>{console.log("User ID:",n),console.log("Email:",r),console.log("Display Name:",e.displayName);const i=e.displayName;t(L4({uid:n,name:i,mail:r}))},2e3)}}),[]),V.jsxs(V.Fragment,{children:[V.jsx(yg,{}),V.jsx(JV,{})]})}var AS={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},y0=W.createContext&&W.createContext(AS),U4=["attr","size","title"];function j4(t,e){if(t==null)return{};var n=z4(t,e),r,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(i=0;i<s.length;i++)r=s[i],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function z4(t,e){if(t==null)return{};var n={};for(var r in t)if(Object.prototype.hasOwnProperty.call(t,r)){if(e.indexOf(r)>=0)continue;n[r]=t[r]}return n}function id(){return id=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},id.apply(this,arguments)}function v0(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function sd(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?v0(Object(n),!0).forEach(function(r){B4(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):v0(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function B4(t,e,n){return e=$4(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function $4(t){var e=H4(t,"string");return typeof e=="symbol"?e:e+""}function H4(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function PS(t){return t&&t.map((e,n)=>W.createElement(e.tag,sd({key:n},e.attr),PS(e.child)))}function bS(t){return e=>W.createElement(G4,id({attr:sd({},t.attr)},e),PS(t.child))}function G4(t){var e=n=>{var{attr:r,size:i,title:s}=t,o=j4(t,U4),a=i||n.size||"1em",u;return n.className&&(u=n.className),t.className&&(u=(u?u+" ":"")+t.className),W.createElement("svg",id({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,o,{className:u,style:sd(sd({color:t.color||n.color},n.style),t.style),height:a,width:a,xmlns:"http://www.w3.org/2000/svg"}),s&&W.createElement("title",null,s),t.children)};return y0!==void 0?W.createElement(y0.Consumer,null,n=>e(n)):e(AS)}function W4(t){return bS({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M512 1024c-69.1 0-136.2-13.5-199.3-40.2C251.7 958 197 921 150 874c-47-47-84-101.7-109.8-162.7C13.5 648.2 0 581.1 0 512c0-19.9 16.1-36 36-36s36 16.1 36 36c0 59.4 11.6 117 34.6 171.3 22.2 52.4 53.9 99.5 94.3 139.9 40.4 40.4 87.5 72.2 139.9 94.3C395 940.4 452.6 952 512 952c59.4 0 117-11.6 171.3-34.6 52.4-22.2 99.5-53.9 139.9-94.3 40.4-40.4 72.2-87.5 94.3-139.9C940.4 629 952 571.4 952 512c0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 0 0-94.3-139.9 437.71 437.71 0 0 0-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.2C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3s-13.5 136.2-40.2 199.3C958 772.3 921 827 874 874c-47 47-101.8 83.9-162.7 109.7-63.1 26.8-130.2 40.3-199.3 40.3z"},child:[]}]})(t)}const q4=[{logo:"💵",name:"Cheap",desc:"Stay conscious of cost"},{logo:"💰",name:"Moderate",desc:"Keep cost on the average side"},{logo:"💸",name:"Luxury",desc:"Don't worry about cost"}],K4=[{logo:"👦",name:"Just me",desc:"A solo travel in exploration"},{logo:"💑",name:"Couples",desc:"Two travelers in tandem"},{logo:"🏡",name:"Family",desc:"A group of fun loving adv"},{logo:"👥",name:"Friends",desc:"A bunch of thrill seekers"}],Q4="Generate Travel Plan for Location: {location}, for {totalDays} for {noOfPerson} with a {budgetType} budget,Give me a Hotels options list with HotelName, Hotel address(address should be concise with 3-4 words and keep key name as HotelAddress), Price, hotel image url, geo coordinates, rating, descriptions and suggest itinerary with placeName, Place Details, Place Image Url, Geo Coordinates, ticket Pricing, Time to travel each of the location for {totalDays} days with each day plan with best time to visit in JSON format(Ex: {destination: 'Ladakh', noOfDays: '5', noOfPeople: 'Couples', budget: 'Luxury'})";var Y4=t=>{switch(t){case"success":return Z4;case"info":return tF;case"warning":return eF;case"error":return nF;default:return null}},X4=Array(12).fill(0),J4=({visible:t,className:e})=>W.createElement("div",{className:["sonner-loading-wrapper",e].filter(Boolean).join(" "),"data-visible":t},W.createElement("div",{className:"sonner-spinner"},X4.map((n,r)=>W.createElement("div",{className:"sonner-loading-bar",key:`spinner-bar-${r}`})))),Z4=W.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",height:"20",width:"20"},W.createElement("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",clipRule:"evenodd"})),eF=W.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",height:"20",width:"20"},W.createElement("path",{fillRule:"evenodd",d:"M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",clipRule:"evenodd"})),tF=W.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",height:"20",width:"20"},W.createElement("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",clipRule:"evenodd"})),nF=W.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",height:"20",width:"20"},W.createElement("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",clipRule:"evenodd"})),rF=W.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"},W.createElement("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),W.createElement("line",{x1:"6",y1:"6",x2:"18",y2:"18"})),iF=()=>{let[t,e]=W.useState(document.hidden);return W.useEffect(()=>{let n=()=>{e(document.hidden)};return document.addEventListener("visibilitychange",n),()=>window.removeEventListener("visibilitychange",n)},[]),t},Tp=1,sF=class{constructor(){this.subscribe=t=>(this.subscribers.push(t),()=>{let e=this.subscribers.indexOf(t);this.subscribers.splice(e,1)}),this.publish=t=>{this.subscribers.forEach(e=>e(t))},this.addToast=t=>{this.publish(t),this.toasts=[...this.toasts,t]},this.create=t=>{var e;let{message:n,...r}=t,i=typeof(t==null?void 0:t.id)=="number"||((e=t.id)==null?void 0:e.length)>0?t.id:Tp++,s=this.toasts.find(a=>a.id===i),o=t.dismissible===void 0?!0:t.dismissible;return s?this.toasts=this.toasts.map(a=>a.id===i?(this.publish({...a,...t,id:i,title:n}),{...a,...t,id:i,dismissible:o,title:n}):a):this.addToast({title:n,...r,dismissible:o,id:i}),i},this.dismiss=t=>(t||this.toasts.forEach(e=>{this.subscribers.forEach(n=>n({id:e.id,dismiss:!0}))}),this.subscribers.forEach(e=>e({id:t,dismiss:!0})),t),this.message=(t,e)=>this.create({...e,message:t}),this.error=(t,e)=>this.create({...e,message:t,type:"error"}),this.success=(t,e)=>this.create({...e,type:"success",message:t}),this.info=(t,e)=>this.create({...e,type:"info",message:t}),this.warning=(t,e)=>this.create({...e,type:"warning",message:t}),this.loading=(t,e)=>this.create({...e,type:"loading",message:t}),this.promise=(t,e)=>{if(!e)return;let n;e.loading!==void 0&&(n=this.create({...e,promise:t,type:"loading",message:e.loading,description:typeof e.description!="function"?e.description:void 0}));let r=t instanceof Promise?t:t(),i=n!==void 0,s,o=r.then(async u=>{if(s=["resolve",u],W.isValidElement(u))i=!1,this.create({id:n,type:"default",message:u});else if(aF(u)&&!u.ok){i=!1;let c=typeof e.error=="function"?await e.error(`HTTP error! status: ${u.status}`):e.error,h=typeof e.description=="function"?await e.description(`HTTP error! status: ${u.status}`):e.description;this.create({id:n,type:"error",message:c,description:h})}else if(e.success!==void 0){i=!1;let c=typeof e.success=="function"?await e.success(u):e.success,h=typeof e.description=="function"?await e.description(u):e.description;this.create({id:n,type:"success",message:c,description:h})}}).catch(async u=>{if(s=["reject",u],e.error!==void 0){i=!1;let c=typeof e.error=="function"?await e.error(u):e.error,h=typeof e.description=="function"?await e.description(u):e.description;this.create({id:n,type:"error",message:c,description:h})}}).finally(()=>{var u;i&&(this.dismiss(n),n=void 0),(u=e.finally)==null||u.call(e)}),a=()=>new Promise((u,c)=>o.then(()=>s[0]==="reject"?c(s[1]):u(s[1])).catch(c));return typeof n!="string"&&typeof n!="number"?{unwrap:a}:Object.assign(n,{unwrap:a})},this.custom=(t,e)=>{let n=(e==null?void 0:e.id)||Tp++;return this.create({jsx:t(n),id:n,...e}),n},this.subscribers=[],this.toasts=[]}},pn=new sF,oF=(t,e)=>{let n=(e==null?void 0:e.id)||Tp++;return pn.addToast({title:t,...e,id:n}),n},aF=t=>t&&typeof t=="object"&&"ok"in t&&typeof t.ok=="boolean"&&"status"in t&&typeof t.status=="number",lF=oF,uF=()=>pn.toasts,xS=Object.assign(lF,{success:pn.success,info:pn.info,warning:pn.warning,error:pn.error,custom:pn.custom,message:pn.message,promise:pn.promise,dismiss:pn.dismiss,loading:pn.loading},{getHistory:uF});function cF(t,{insertAt:e}={}){if(typeof document>"u")return;let n=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css",e==="top"&&n.firstChild?n.insertBefore(r,n.firstChild):n.appendChild(r),r.styleSheet?r.styleSheet.cssText=t:r.appendChild(document.createTextNode(t))}cF(`:where(html[dir="ltr"]),:where([data-sonner-toaster][dir="ltr"]){--toast-icon-margin-start: -3px;--toast-icon-margin-end: 4px;--toast-svg-margin-start: -1px;--toast-svg-margin-end: 0px;--toast-button-margin-start: auto;--toast-button-margin-end: 0;--toast-close-button-start: 0;--toast-close-button-end: unset;--toast-close-button-transform: translate(-35%, -35%)}:where(html[dir="rtl"]),:where([data-sonner-toaster][dir="rtl"]){--toast-icon-margin-start: 4px;--toast-icon-margin-end: -3px;--toast-svg-margin-start: 0px;--toast-svg-margin-end: -1px;--toast-button-margin-start: 0;--toast-button-margin-end: auto;--toast-close-button-start: unset;--toast-close-button-end: 0;--toast-close-button-transform: translate(35%, -35%)}:where([data-sonner-toaster]){position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1: hsl(0, 0%, 99%);--gray2: hsl(0, 0%, 97.3%);--gray3: hsl(0, 0%, 95.1%);--gray4: hsl(0, 0%, 93%);--gray5: hsl(0, 0%, 90.9%);--gray6: hsl(0, 0%, 88.7%);--gray7: hsl(0, 0%, 85.8%);--gray8: hsl(0, 0%, 78%);--gray9: hsl(0, 0%, 56.1%);--gray10: hsl(0, 0%, 52.3%);--gray11: hsl(0, 0%, 43.5%);--gray12: hsl(0, 0%, 9%);--border-radius: 8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:none;z-index:999999999;transition:transform .4s ease}:where([data-sonner-toaster][data-lifted="true"]){transform:translateY(-10px)}@media (hover: none) and (pointer: coarse){:where([data-sonner-toaster][data-lifted="true"]){transform:none}}:where([data-sonner-toaster][data-x-position="right"]){right:max(var(--offset),env(safe-area-inset-right))}:where([data-sonner-toaster][data-x-position="left"]){left:max(var(--offset),env(safe-area-inset-left))}:where([data-sonner-toaster][data-x-position="center"]){left:50%;transform:translate(-50%)}:where([data-sonner-toaster][data-y-position="top"]){top:max(var(--offset),env(safe-area-inset-top))}:where([data-sonner-toaster][data-y-position="bottom"]){bottom:max(var(--offset),env(safe-area-inset-bottom))}:where([data-sonner-toast]){--y: translateY(100%);--lift-amount: calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);filter:blur(0);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:none;overflow-wrap:anywhere}:where([data-sonner-toast][data-styled="true"]){padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px #0000001a;width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}:where([data-sonner-toast]:focus-visible){box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast][data-y-position="top"]){top:0;--y: translateY(-100%);--lift: 1;--lift-amount: calc(1 * var(--gap))}:where([data-sonner-toast][data-y-position="bottom"]){bottom:0;--y: translateY(100%);--lift: -1;--lift-amount: calc(var(--lift) * var(--gap))}:where([data-sonner-toast]) :where([data-description]){font-weight:400;line-height:1.4;color:inherit}:where([data-sonner-toast]) :where([data-title]){font-weight:500;line-height:1.5;color:inherit}:where([data-sonner-toast]) :where([data-icon]){display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}:where([data-sonner-toast][data-promise="true"]) :where([data-icon])>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}:where([data-sonner-toast]) :where([data-icon])>*{flex-shrink:0}:where([data-sonner-toast]) :where([data-icon]) svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}:where([data-sonner-toast]) :where([data-content]){display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;cursor:pointer;outline:none;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}:where([data-sonner-toast]) :where([data-button]):focus-visible{box-shadow:0 0 0 2px #0006}:where([data-sonner-toast]) :where([data-button]):first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}:where([data-sonner-toast]) :where([data-cancel]){color:var(--normal-text);background:rgba(0,0,0,.08)}:where([data-sonner-toast][data-theme="dark"]) :where([data-cancel]){background:rgba(255,255,255,.3)}:where([data-sonner-toast]) :where([data-close-button]){position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast] [data-close-button]{background:var(--gray1)}:where([data-sonner-toast]) :where([data-close-button]):focus-visible{box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast]) :where([data-disabled="true"]){cursor:not-allowed}:where([data-sonner-toast]):hover :where([data-close-button]):hover{background:var(--gray2);border-color:var(--gray5)}:where([data-sonner-toast][data-swiping="true"]):before{content:"";position:absolute;left:0;right:0;height:100%;z-index:-1}:where([data-sonner-toast][data-y-position="top"][data-swiping="true"]):before{bottom:50%;transform:scaleY(3) translateY(50%)}:where([data-sonner-toast][data-y-position="bottom"][data-swiping="true"]):before{top:50%;transform:scaleY(3) translateY(-50%)}:where([data-sonner-toast][data-swiping="false"][data-removed="true"]):before{content:"";position:absolute;inset:0;transform:scaleY(2)}:where([data-sonner-toast]):after{content:"";position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}:where([data-sonner-toast][data-mounted="true"]){--y: translateY(0);opacity:1}:where([data-sonner-toast][data-expanded="false"][data-front="false"]){--scale: var(--toasts-before) * .05 + 1;--y: translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}:where([data-sonner-toast])>*{transition:opacity .4s}:where([data-sonner-toast][data-expanded="false"][data-front="false"][data-styled="true"])>*{opacity:0}:where([data-sonner-toast][data-visible="false"]){opacity:0;pointer-events:none}:where([data-sonner-toast][data-mounted="true"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}:where([data-sonner-toast][data-removed="true"][data-front="true"][data-swipe-out="false"]){--y: translateY(calc(var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="false"]){--y: translateY(40%);opacity:0;transition:transform .5s,opacity .2s}:where([data-sonner-toast][data-removed="true"][data-front="false"]):before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount, 0px));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation:swipe-out .2s ease-out forwards}@keyframes swipe-out{0%{transform:translateY(calc(var(--lift) * var(--offset) + var(--swipe-amount)));opacity:1}to{transform:translateY(calc(var(--lift) * var(--offset) + var(--swipe-amount) + var(--lift) * -100%));opacity:0}}@media (max-width: 600px){[data-sonner-toaster]{position:fixed;--mobile-offset: 16px;right:var(--mobile-offset);left:var(--mobile-offset);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset)}[data-sonner-toaster][data-y-position=bottom]{bottom:20px}[data-sonner-toaster][data-y-position=top]{top:20px}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset);right:var(--mobile-offset);transform:none}}[data-sonner-toaster][data-theme=light]{--normal-bg: #fff;--normal-border: var(--gray4);--normal-text: var(--gray12);--success-bg: hsl(143, 85%, 96%);--success-border: hsl(145, 92%, 91%);--success-text: hsl(140, 100%, 27%);--info-bg: hsl(208, 100%, 97%);--info-border: hsl(221, 91%, 91%);--info-text: hsl(210, 92%, 45%);--warning-bg: hsl(49, 100%, 97%);--warning-border: hsl(49, 91%, 91%);--warning-text: hsl(31, 92%, 45%);--error-bg: hsl(359, 100%, 97%);--error-border: hsl(359, 100%, 94%);--error-text: hsl(360, 100%, 45%)}[data-sonner-toaster][data-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg: #fff;--normal-border: var(--gray3);--normal-text: var(--gray12)}[data-sonner-toaster][data-theme=dark]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1);--success-bg: hsl(150, 100%, 6%);--success-border: hsl(147, 100%, 12%);--success-text: hsl(150, 86%, 65%);--info-bg: hsl(215, 100%, 6%);--info-border: hsl(223, 100%, 12%);--info-text: hsl(216, 87%, 65%);--warning-bg: hsl(64, 100%, 6%);--warning-border: hsl(60, 100%, 12%);--warning-text: hsl(46, 87%, 65%);--error-bg: hsl(358, 76%, 10%);--error-border: hsl(357, 89%, 16%);--error-text: hsl(358, 100%, 81%)}[data-rich-colors=true][data-sonner-toast][data-type=success],[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info],[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning],[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error],[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size: 16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:nth-child(1){animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}to{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}to{opacity:.15}}@media (prefers-reduced-motion){[data-sonner-toast],[data-sonner-toast]>*,.sonner-loading-bar{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}
`);function Lu(t){return t.label!==void 0}var dF=3,hF="32px",_0=4e3,fF=356,pF=14,mF=20,gF=200;function yF(...t){return t.filter(Boolean).join(" ")}var vF=t=>{var e,n,r,i,s,o,a,u,c,h,f;let{invert:g,toast:m,unstyled:E,interacting:A,setHeights:N,visibleToasts:T,heights:_,index:S,toasts:D,expanded:j,removeToast:b,defaultRichColors:I,closeButton:y,style:w,cancelButtonStyle:C,actionButtonStyle:k,className:x="",descriptionClassName:R="",duration:ge,position:ct,gap:et,loadingIcon:ve,expandByDefault:q,classNames:G,icons:Z,closeButtonAriaLabel:de="Close toast",pauseWhenPageIsHidden:ne,cn:re}=t,[pe,Ne]=W.useState(!1),[Ge,Re]=W.useState(!1),[Ki,_r]=W.useState(!1),[Rn,ze]=W.useState(!1),[An,wr]=W.useState(!1),[Qi,Kt]=W.useState(0),[Bs,$s]=W.useState(0),Er=W.useRef(m.duration||ge||_0),Yi=W.useRef(null),dn=W.useRef(null),Hs=S===0,sa=S+1<=T,Ye=m.type,Ot=m.dismissible!==!1,Xi=m.className||"",ot=m.descriptionClassName||"",Le=W.useMemo(()=>_.findIndex(oe=>oe.toastId===m.id)||0,[_,m.id]),Mt=W.useMemo(()=>{var oe;return(oe=m.closeButton)!=null?oe:y},[m.closeButton,y]);W.useMemo(()=>m.duration||ge||_0,[m.duration,ge]);let Tr=W.useRef(0),Zt=W.useRef(0),Gs=W.useRef(0),yt=W.useRef(null),[Ji,Zi]=ct.split("-"),Ir=W.useMemo(()=>_.reduce((oe,Ae,Oe)=>Oe>=Le?oe:oe+Ae.height,0),[_,Le]),Ws=iF(),qs=m.invert||g,Pn=Ye==="loading";Zt.current=W.useMemo(()=>Le*et+Ir,[Le,Ir]),W.useEffect(()=>{Ne(!0)},[]),W.useEffect(()=>{let oe=dn.current;if(oe){let Ae=oe.getBoundingClientRect().height;return $s(Ae),N(Oe=>[{toastId:m.id,height:Ae,position:m.position},...Oe]),()=>N(Oe=>Oe.filter(dt=>dt.toastId!==m.id))}},[N,m.id]),W.useLayoutEffect(()=>{if(!pe)return;let oe=dn.current,Ae=oe.style.height;oe.style.height="auto";let Oe=oe.getBoundingClientRect().height;oe.style.height=Ae,$s(Oe),N(dt=>dt.find(Lt=>Lt.toastId===m.id)?dt.map(Lt=>Lt.toastId===m.id?{...Lt,height:Oe}:Lt):[{toastId:m.id,height:Oe,position:m.position},...dt])},[pe,m.title,m.description,N,m.id]);let en=W.useCallback(()=>{Re(!0),Kt(Zt.current),N(oe=>oe.filter(Ae=>Ae.toastId!==m.id)),setTimeout(()=>{b(m)},gF)},[m,b,N,Zt]);W.useEffect(()=>{if(m.promise&&Ye==="loading"||m.duration===1/0||m.type==="loading")return;let oe;return j||A||ne&&Ws?(()=>{if(Gs.current<Tr.current){let Ae=new Date().getTime()-Tr.current;Er.current=Er.current-Ae}Gs.current=new Date().getTime()})():Er.current!==1/0&&(Tr.current=new Date().getTime(),oe=setTimeout(()=>{var Ae;(Ae=m.onAutoClose)==null||Ae.call(m,m),en()},Er.current)),()=>clearTimeout(oe)},[j,A,m,Ye,ne,Ws,en]),W.useEffect(()=>{m.delete&&en()},[en,m.delete]);function Xr(){var oe,Ae,Oe;return Z!=null&&Z.loading?W.createElement("div",{className:re(G==null?void 0:G.loader,(oe=m==null?void 0:m.classNames)==null?void 0:oe.loader,"sonner-loader"),"data-visible":Ye==="loading"},Z.loading):ve?W.createElement("div",{className:re(G==null?void 0:G.loader,(Ae=m==null?void 0:m.classNames)==null?void 0:Ae.loader,"sonner-loader"),"data-visible":Ye==="loading"},ve):W.createElement(J4,{className:re(G==null?void 0:G.loader,(Oe=m==null?void 0:m.classNames)==null?void 0:Oe.loader),visible:Ye==="loading"})}return W.createElement("li",{tabIndex:0,ref:dn,className:re(x,Xi,G==null?void 0:G.toast,(e=m==null?void 0:m.classNames)==null?void 0:e.toast,G==null?void 0:G.default,G==null?void 0:G[Ye],(n=m==null?void 0:m.classNames)==null?void 0:n[Ye]),"data-sonner-toast":"","data-rich-colors":(r=m.richColors)!=null?r:I,"data-styled":!(m.jsx||m.unstyled||E),"data-mounted":pe,"data-promise":!!m.promise,"data-swiped":An,"data-removed":Ge,"data-visible":sa,"data-y-position":Ji,"data-x-position":Zi,"data-index":S,"data-front":Hs,"data-swiping":Ki,"data-dismissible":Ot,"data-type":Ye,"data-invert":qs,"data-swipe-out":Rn,"data-expanded":!!(j||q&&pe),style:{"--index":S,"--toasts-before":S,"--z-index":D.length-S,"--offset":`${Ge?Qi:Zt.current}px`,"--initial-height":q?"auto":`${Bs}px`,...w,...m.style},onPointerDown:oe=>{Pn||!Ot||(Yi.current=new Date,Kt(Zt.current),oe.target.setPointerCapture(oe.pointerId),oe.target.tagName!=="BUTTON"&&(_r(!0),yt.current={x:oe.clientX,y:oe.clientY}))},onPointerUp:()=>{var oe,Ae,Oe,dt;if(Rn||!Ot)return;yt.current=null;let Lt=Number(((oe=dn.current)==null?void 0:oe.style.getPropertyValue("--swipe-amount").replace("px",""))||0),hn=new Date().getTime()-((Ae=Yi.current)==null?void 0:Ae.getTime()),Sr=Math.abs(Lt)/hn;if(Math.abs(Lt)>=mF||Sr>.11){Kt(Zt.current),(Oe=m.onDismiss)==null||Oe.call(m,m),en(),ze(!0),wr(!1);return}(dt=dn.current)==null||dt.style.setProperty("--swipe-amount","0px"),_r(!1)},onPointerMove:oe=>{var Ae,Oe,dt;if(!yt.current||!Ot)return;let Lt=oe.clientY-yt.current.y,hn=((Ae=window.getSelection())==null?void 0:Ae.toString().length)>0;Number(((Oe=dn.current)==null?void 0:Oe.style.getPropertyValue("--swipe-amount").replace("px",""))||0)>0&&wr(!0),!hn&&((dt=dn.current)==null||dt.style.setProperty("--swipe-amount",`${Math.max(0,Lt)}px`))}},Mt&&!m.jsx?W.createElement("button",{"aria-label":de,"data-disabled":Pn,"data-close-button":!0,onClick:Pn||!Ot?()=>{}:()=>{var oe;en(),(oe=m.onDismiss)==null||oe.call(m,m)},className:re(G==null?void 0:G.closeButton,(i=m==null?void 0:m.classNames)==null?void 0:i.closeButton)},(s=Z==null?void 0:Z.close)!=null?s:rF):null,m.jsx||W.isValidElement(m.title)?m.jsx?m.jsx:typeof m.title=="function"?m.title():m.title:W.createElement(W.Fragment,null,Ye||m.icon||m.promise?W.createElement("div",{"data-icon":"",className:re(G==null?void 0:G.icon,(o=m==null?void 0:m.classNames)==null?void 0:o.icon)},m.promise||m.type==="loading"&&!m.icon?m.icon||Xr():null,m.type!=="loading"?m.icon||(Z==null?void 0:Z[Ye])||Y4(Ye):null):null,W.createElement("div",{"data-content":"",className:re(G==null?void 0:G.content,(a=m==null?void 0:m.classNames)==null?void 0:a.content)},W.createElement("div",{"data-title":"",className:re(G==null?void 0:G.title,(u=m==null?void 0:m.classNames)==null?void 0:u.title)},typeof m.title=="function"?m.title():m.title),m.description?W.createElement("div",{"data-description":"",className:re(R,ot,G==null?void 0:G.description,(c=m==null?void 0:m.classNames)==null?void 0:c.description)},typeof m.description=="function"?m.description():m.description):null),W.isValidElement(m.cancel)?m.cancel:m.cancel&&Lu(m.cancel)?W.createElement("button",{"data-button":!0,"data-cancel":!0,style:m.cancelButtonStyle||C,onClick:oe=>{var Ae,Oe;Lu(m.cancel)&&Ot&&((Oe=(Ae=m.cancel).onClick)==null||Oe.call(Ae,oe),en())},className:re(G==null?void 0:G.cancelButton,(h=m==null?void 0:m.classNames)==null?void 0:h.cancelButton)},m.cancel.label):null,W.isValidElement(m.action)?m.action:m.action&&Lu(m.action)?W.createElement("button",{"data-button":!0,"data-action":!0,style:m.actionButtonStyle||k,onClick:oe=>{var Ae,Oe;Lu(m.action)&&((Oe=(Ae=m.action).onClick)==null||Oe.call(Ae,oe),!oe.defaultPrevented&&en())},className:re(G==null?void 0:G.actionButton,(f=m==null?void 0:m.classNames)==null?void 0:f.actionButton)},m.action.label):null))};function w0(){if(typeof window>"u"||typeof document>"u")return"ltr";let t=document.documentElement.getAttribute("dir");return t==="auto"||!t?window.getComputedStyle(document.documentElement).direction:t}var _F=U.forwardRef(function(t,e){let{invert:n,position:r="bottom-right",hotkey:i=["altKey","KeyT"],expand:s,closeButton:o,className:a,offset:u,theme:c="light",richColors:h,duration:f,style:g,visibleToasts:m=dF,toastOptions:E,dir:A=w0(),gap:N=pF,loadingIcon:T,icons:_,containerAriaLabel:S="Notifications",pauseWhenPageIsHidden:D,cn:j=yF}=t,[b,I]=W.useState([]),y=W.useMemo(()=>Array.from(new Set([r].concat(b.filter(ne=>ne.position).map(ne=>ne.position)))),[b,r]),[w,C]=W.useState([]),[k,x]=W.useState(!1),[R,ge]=W.useState(!1),[ct,et]=W.useState(c!=="system"?c:typeof window<"u"&&window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"),ve=W.useRef(null),q=i.join("+").replace(/Key/g,"").replace(/Digit/g,""),G=W.useRef(null),Z=W.useRef(!1),de=W.useCallback(ne=>{I(re=>{var pe;return(pe=re.find(Ne=>Ne.id===ne.id))!=null&&pe.delete||pn.dismiss(ne.id),re.filter(({id:Ne})=>Ne!==ne.id)})},[]);return W.useEffect(()=>pn.subscribe(ne=>{if(ne.dismiss){I(re=>re.map(pe=>pe.id===ne.id?{...pe,delete:!0}:pe));return}setTimeout(()=>{JE.flushSync(()=>{I(re=>{let pe=re.findIndex(Ne=>Ne.id===ne.id);return pe!==-1?[...re.slice(0,pe),{...re[pe],...ne},...re.slice(pe+1)]:[ne,...re]})})})}),[]),W.useEffect(()=>{if(c!=="system"){et(c);return}if(c==="system"&&(window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?et("dark"):et("light")),typeof window>"u")return;let ne=window.matchMedia("(prefers-color-scheme: dark)");try{ne.addEventListener("change",({matches:re})=>{et(re?"dark":"light")})}catch{ne.addListener(({matches:pe})=>{try{et(pe?"dark":"light")}catch(Ne){console.error(Ne)}})}},[c]),W.useEffect(()=>{b.length<=1&&x(!1)},[b]),W.useEffect(()=>{let ne=re=>{var pe,Ne;i.every(Ge=>re[Ge]||re.code===Ge)&&(x(!0),(pe=ve.current)==null||pe.focus()),re.code==="Escape"&&(document.activeElement===ve.current||(Ne=ve.current)!=null&&Ne.contains(document.activeElement))&&x(!1)};return document.addEventListener("keydown",ne),()=>document.removeEventListener("keydown",ne)},[i]),W.useEffect(()=>{if(ve.current)return()=>{G.current&&(G.current.focus({preventScroll:!0}),G.current=null,Z.current=!1)}},[ve.current]),W.createElement("section",{"aria-label":`${S} ${q}`,tabIndex:-1,"aria-live":"polite","aria-relevant":"additions text","aria-atomic":"false"},y.map((ne,re)=>{var pe;let[Ne,Ge]=ne.split("-");return b.length?W.createElement("ol",{key:ne,dir:A==="auto"?w0():A,tabIndex:-1,ref:ve,className:a,"data-sonner-toaster":!0,"data-theme":ct,"data-y-position":Ne,"data-lifted":k&&b.length>1&&!s,"data-x-position":Ge,style:{"--front-toast-height":`${((pe=w[0])==null?void 0:pe.height)||0}px`,"--offset":typeof u=="number"?`${u}px`:u||hF,"--width":`${fF}px`,"--gap":`${N}px`,...g},onBlur:Re=>{Z.current&&!Re.currentTarget.contains(Re.relatedTarget)&&(Z.current=!1,G.current&&(G.current.focus({preventScroll:!0}),G.current=null))},onFocus:Re=>{Re.target instanceof HTMLElement&&Re.target.dataset.dismissible==="false"||Z.current||(Z.current=!0,G.current=Re.relatedTarget)},onMouseEnter:()=>x(!0),onMouseMove:()=>x(!0),onMouseLeave:()=>{R||x(!1)},onPointerDown:Re=>{Re.target instanceof HTMLElement&&Re.target.dataset.dismissible==="false"||ge(!0)},onPointerUp:()=>ge(!1)},b.filter(Re=>!Re.position&&re===0||Re.position===ne).map((Re,Ki)=>{var _r,Rn;return W.createElement(vF,{key:Re.id,icons:_,index:Ki,toast:Re,defaultRichColors:h,duration:(_r=E==null?void 0:E.duration)!=null?_r:f,className:E==null?void 0:E.className,descriptionClassName:E==null?void 0:E.descriptionClassName,invert:n,visibleToasts:m,closeButton:(Rn=E==null?void 0:E.closeButton)!=null?Rn:o,interacting:R,position:ne,style:E==null?void 0:E.style,unstyled:E==null?void 0:E.unstyled,classNames:E==null?void 0:E.classNames,cancelButtonStyle:E==null?void 0:E.cancelButtonStyle,actionButtonStyle:E==null?void 0:E.actionButtonStyle,removeToast:de,toasts:b.filter(ze=>ze.position==Re.position),heights:w.filter(ze=>ze.position==Re.position),setHeights:C,expandByDefault:s,gap:N,loadingIcon:T,expanded:k,pauseWhenPageIsHidden:D,cn:j})})):null}))}),E0;(function(t){t.STRING="string",t.NUMBER="number",t.INTEGER="integer",t.BOOLEAN="boolean",t.ARRAY="array",t.OBJECT="object"})(E0||(E0={}));/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var T0;(function(t){t.LANGUAGE_UNSPECIFIED="language_unspecified",t.PYTHON="python"})(T0||(T0={}));var I0;(function(t){t.OUTCOME_UNSPECIFIED="outcome_unspecified",t.OUTCOME_OK="outcome_ok",t.OUTCOME_FAILED="outcome_failed",t.OUTCOME_DEADLINE_EXCEEDED="outcome_deadline_exceeded"})(I0||(I0={}));/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S0=["user","model","function","system"];var C0;(function(t){t.HARM_CATEGORY_UNSPECIFIED="HARM_CATEGORY_UNSPECIFIED",t.HARM_CATEGORY_HATE_SPEECH="HARM_CATEGORY_HATE_SPEECH",t.HARM_CATEGORY_SEXUALLY_EXPLICIT="HARM_CATEGORY_SEXUALLY_EXPLICIT",t.HARM_CATEGORY_HARASSMENT="HARM_CATEGORY_HARASSMENT",t.HARM_CATEGORY_DANGEROUS_CONTENT="HARM_CATEGORY_DANGEROUS_CONTENT"})(C0||(C0={}));var R0;(function(t){t.HARM_BLOCK_THRESHOLD_UNSPECIFIED="HARM_BLOCK_THRESHOLD_UNSPECIFIED",t.BLOCK_LOW_AND_ABOVE="BLOCK_LOW_AND_ABOVE",t.BLOCK_MEDIUM_AND_ABOVE="BLOCK_MEDIUM_AND_ABOVE",t.BLOCK_ONLY_HIGH="BLOCK_ONLY_HIGH",t.BLOCK_NONE="BLOCK_NONE"})(R0||(R0={}));var A0;(function(t){t.HARM_PROBABILITY_UNSPECIFIED="HARM_PROBABILITY_UNSPECIFIED",t.NEGLIGIBLE="NEGLIGIBLE",t.LOW="LOW",t.MEDIUM="MEDIUM",t.HIGH="HIGH"})(A0||(A0={}));var P0;(function(t){t.BLOCKED_REASON_UNSPECIFIED="BLOCKED_REASON_UNSPECIFIED",t.SAFETY="SAFETY",t.OTHER="OTHER"})(P0||(P0={}));var Za;(function(t){t.FINISH_REASON_UNSPECIFIED="FINISH_REASON_UNSPECIFIED",t.STOP="STOP",t.MAX_TOKENS="MAX_TOKENS",t.SAFETY="SAFETY",t.RECITATION="RECITATION",t.LANGUAGE="LANGUAGE",t.OTHER="OTHER"})(Za||(Za={}));var b0;(function(t){t.TASK_TYPE_UNSPECIFIED="TASK_TYPE_UNSPECIFIED",t.RETRIEVAL_QUERY="RETRIEVAL_QUERY",t.RETRIEVAL_DOCUMENT="RETRIEVAL_DOCUMENT",t.SEMANTIC_SIMILARITY="SEMANTIC_SIMILARITY",t.CLASSIFICATION="CLASSIFICATION",t.CLUSTERING="CLUSTERING"})(b0||(b0={}));var x0;(function(t){t.MODE_UNSPECIFIED="MODE_UNSPECIFIED",t.AUTO="AUTO",t.ANY="ANY",t.NONE="NONE"})(x0||(x0={}));var k0;(function(t){t.MODE_UNSPECIFIED="MODE_UNSPECIFIED",t.MODE_DYNAMIC="MODE_DYNAMIC"})(k0||(k0={}));/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sn extends Error{constructor(e){super(`[GoogleGenerativeAI Error]: ${e}`)}}class to extends sn{constructor(e,n){super(e),this.response=n}}class kS extends sn{constructor(e,n,r,i){super(e),this.status=n,this.statusText=r,this.errorDetails=i}}class Di extends sn{}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wF="https://generativelanguage.googleapis.com",EF="v1beta",TF="0.21.0",IF="genai-js";var ks;(function(t){t.GENERATE_CONTENT="generateContent",t.STREAM_GENERATE_CONTENT="streamGenerateContent",t.COUNT_TOKENS="countTokens",t.EMBED_CONTENT="embedContent",t.BATCH_EMBED_CONTENTS="batchEmbedContents"})(ks||(ks={}));class SF{constructor(e,n,r,i,s){this.model=e,this.task=n,this.apiKey=r,this.stream=i,this.requestOptions=s}toString(){var e,n;const r=((e=this.requestOptions)===null||e===void 0?void 0:e.apiVersion)||EF;let s=`${((n=this.requestOptions)===null||n===void 0?void 0:n.baseUrl)||wF}/${r}/${this.model}:${this.task}`;return this.stream&&(s+="?alt=sse"),s}}function CF(t){const e=[];return t!=null&&t.apiClient&&e.push(t.apiClient),e.push(`${IF}/${TF}`),e.join(" ")}async function RF(t){var e;const n=new Headers;n.append("Content-Type","application/json"),n.append("x-goog-api-client",CF(t.requestOptions)),n.append("x-goog-api-key",t.apiKey);let r=(e=t.requestOptions)===null||e===void 0?void 0:e.customHeaders;if(r){if(!(r instanceof Headers))try{r=new Headers(r)}catch(i){throw new Di(`unable to convert customHeaders value ${JSON.stringify(r)} to Headers: ${i.message}`)}for(const[i,s]of r.entries()){if(i==="x-goog-api-key")throw new Di(`Cannot set reserved header name ${i}`);if(i==="x-goog-api-client")throw new Di(`Header name ${i} can only be set using the apiClient field`);n.append(i,s)}}return n}async function AF(t,e,n,r,i,s){const o=new SF(t,e,n,r,s);return{url:o.toString(),fetchOptions:Object.assign(Object.assign({},kF(s)),{method:"POST",headers:await RF(o),body:i})}}async function Jl(t,e,n,r,i,s={},o=fetch){const{url:a,fetchOptions:u}=await AF(t,e,n,r,i,s);return PF(a,u,o)}async function PF(t,e,n=fetch){let r;try{r=await n(t,e)}catch(i){bF(i,t)}return r.ok||await xF(r,t),r}function bF(t,e){let n=t;throw t instanceof kS||t instanceof Di||(n=new sn(`Error fetching from ${e.toString()}: ${t.message}`),n.stack=t.stack),n}async function xF(t,e){let n="",r;try{const i=await t.json();n=i.error.message,i.error.details&&(n+=` ${JSON.stringify(i.error.details)}`,r=i.error.details)}catch{}throw new kS(`Error fetching from ${e.toString()}: [${t.status} ${t.statusText}] ${n}`,t.status,t.statusText,r)}function kF(t){const e={};if((t==null?void 0:t.signal)!==void 0||(t==null?void 0:t.timeout)>=0){const n=new AbortController;(t==null?void 0:t.timeout)>=0&&setTimeout(()=>n.abort(),t.timeout),t!=null&&t.signal&&t.signal.addEventListener("abort",()=>{n.abort()}),e.signal=n.signal}return e}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ig(t){return t.text=()=>{if(t.candidates&&t.candidates.length>0){if(t.candidates.length>1&&console.warn(`This response had ${t.candidates.length} candidates. Returning text from the first candidate only. Access response.candidates directly to use the other candidates.`),sc(t.candidates[0]))throw new to(`${di(t)}`,t);return NF(t)}else if(t.promptFeedback)throw new to(`Text not available. ${di(t)}`,t);return""},t.functionCall=()=>{if(t.candidates&&t.candidates.length>0){if(t.candidates.length>1&&console.warn(`This response had ${t.candidates.length} candidates. Returning function calls from the first candidate only. Access response.candidates directly to use the other candidates.`),sc(t.candidates[0]))throw new to(`${di(t)}`,t);return console.warn("response.functionCall() is deprecated. Use response.functionCalls() instead."),N0(t)[0]}else if(t.promptFeedback)throw new to(`Function call not available. ${di(t)}`,t)},t.functionCalls=()=>{if(t.candidates&&t.candidates.length>0){if(t.candidates.length>1&&console.warn(`This response had ${t.candidates.length} candidates. Returning function calls from the first candidate only. Access response.candidates directly to use the other candidates.`),sc(t.candidates[0]))throw new to(`${di(t)}`,t);return N0(t)}else if(t.promptFeedback)throw new to(`Function call not available. ${di(t)}`,t)},t}function NF(t){var e,n,r,i;const s=[];if(!((n=(e=t.candidates)===null||e===void 0?void 0:e[0].content)===null||n===void 0)&&n.parts)for(const o of(i=(r=t.candidates)===null||r===void 0?void 0:r[0].content)===null||i===void 0?void 0:i.parts)o.text&&s.push(o.text),o.executableCode&&s.push("\n```"+o.executableCode.language+`
`+o.executableCode.code+"\n```\n"),o.codeExecutionResult&&s.push("\n```\n"+o.codeExecutionResult.output+"\n```\n");return s.length>0?s.join(""):""}function N0(t){var e,n,r,i;const s=[];if(!((n=(e=t.candidates)===null||e===void 0?void 0:e[0].content)===null||n===void 0)&&n.parts)for(const o of(i=(r=t.candidates)===null||r===void 0?void 0:r[0].content)===null||i===void 0?void 0:i.parts)o.functionCall&&s.push(o.functionCall);if(s.length>0)return s}const DF=[Za.RECITATION,Za.SAFETY,Za.LANGUAGE];function sc(t){return!!t.finishReason&&DF.includes(t.finishReason)}function di(t){var e,n,r;let i="";if((!t.candidates||t.candidates.length===0)&&t.promptFeedback)i+="Response was blocked",!((e=t.promptFeedback)===null||e===void 0)&&e.blockReason&&(i+=` due to ${t.promptFeedback.blockReason}`),!((n=t.promptFeedback)===null||n===void 0)&&n.blockReasonMessage&&(i+=`: ${t.promptFeedback.blockReasonMessage}`);else if(!((r=t.candidates)===null||r===void 0)&&r[0]){const s=t.candidates[0];sc(s)&&(i+=`Candidate was blocked due to ${s.finishReason}`,s.finishMessage&&(i+=`: ${s.finishMessage}`))}return i}function Nl(t){return this instanceof Nl?(this.v=t,this):new Nl(t)}function OF(t,e,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r=n.apply(t,e||[]),i,s=[];return i={},o("next"),o("throw"),o("return"),i[Symbol.asyncIterator]=function(){return this},i;function o(g){r[g]&&(i[g]=function(m){return new Promise(function(E,A){s.push([g,m,E,A])>1||a(g,m)})})}function a(g,m){try{u(r[g](m))}catch(E){f(s[0][3],E)}}function u(g){g.value instanceof Nl?Promise.resolve(g.value.v).then(c,h):f(s[0][2],g)}function c(g){a("next",g)}function h(g){a("throw",g)}function f(g,m){g(m),s.shift(),s.length&&a(s[0][0],s[0][1])}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D0=/^data\: (.*)(?:\n\n|\r\r|\r\n\r\n)/;function MF(t){const e=t.body.pipeThrough(new TextDecoderStream("utf8",{fatal:!0})),n=FF(e),[r,i]=n.tee();return{stream:VF(r),response:LF(i)}}async function LF(t){const e=[],n=t.getReader();for(;;){const{done:r,value:i}=await n.read();if(r)return Ig(UF(e));e.push(i)}}function VF(t){return OF(this,arguments,function*(){const n=t.getReader();for(;;){const{value:r,done:i}=yield Nl(n.read());if(i)break;yield yield Nl(Ig(r))}})}function FF(t){const e=t.getReader();return new ReadableStream({start(r){let i="";return s();function s(){return e.read().then(({value:o,done:a})=>{if(a){if(i.trim()){r.error(new sn("Failed to parse stream"));return}r.close();return}i+=o;let u=i.match(D0),c;for(;u;){try{c=JSON.parse(u[1])}catch{r.error(new sn(`Error parsing JSON response: "${u[1]}"`));return}r.enqueue(c),i=i.substring(u[0].length),u=i.match(D0)}return s()})}}})}function UF(t){const e=t[t.length-1],n={promptFeedback:e==null?void 0:e.promptFeedback};for(const r of t){if(r.candidates)for(const i of r.candidates){const s=i.index;if(n.candidates||(n.candidates=[]),n.candidates[s]||(n.candidates[s]={index:i.index}),n.candidates[s].citationMetadata=i.citationMetadata,n.candidates[s].groundingMetadata=i.groundingMetadata,n.candidates[s].finishReason=i.finishReason,n.candidates[s].finishMessage=i.finishMessage,n.candidates[s].safetyRatings=i.safetyRatings,i.content&&i.content.parts){n.candidates[s].content||(n.candidates[s].content={role:i.content.role||"user",parts:[]});const o={};for(const a of i.content.parts)a.text&&(o.text=a.text),a.functionCall&&(o.functionCall=a.functionCall),a.executableCode&&(o.executableCode=a.executableCode),a.codeExecutionResult&&(o.codeExecutionResult=a.codeExecutionResult),Object.keys(o).length===0&&(o.text=""),n.candidates[s].content.parts.push(o)}}r.usageMetadata&&(n.usageMetadata=r.usageMetadata)}return n}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function NS(t,e,n,r){const i=await Jl(e,ks.STREAM_GENERATE_CONTENT,t,!0,JSON.stringify(n),r);return MF(i)}async function DS(t,e,n,r){const s=await(await Jl(e,ks.GENERATE_CONTENT,t,!1,JSON.stringify(n),r)).json();return{response:Ig(s)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OS(t){if(t!=null){if(typeof t=="string")return{role:"system",parts:[{text:t}]};if(t.text)return{role:"system",parts:[t]};if(t.parts)return t.role?t:{role:"system",parts:t.parts}}}function Dl(t){let e=[];if(typeof t=="string")e=[{text:t}];else for(const n of t)typeof n=="string"?e.push({text:n}):e.push(n);return jF(e)}function jF(t){const e={role:"user",parts:[]},n={role:"function",parts:[]};let r=!1,i=!1;for(const s of t)"functionResponse"in s?(n.parts.push(s),i=!0):(e.parts.push(s),r=!0);if(r&&i)throw new sn("Within a single message, FunctionResponse cannot be mixed with other type of part in the request for sending chat message.");if(!r&&!i)throw new sn("No content is provided for sending chat message.");return r?e:n}function zF(t,e){var n;let r={model:e==null?void 0:e.model,generationConfig:e==null?void 0:e.generationConfig,safetySettings:e==null?void 0:e.safetySettings,tools:e==null?void 0:e.tools,toolConfig:e==null?void 0:e.toolConfig,systemInstruction:e==null?void 0:e.systemInstruction,cachedContent:(n=e==null?void 0:e.cachedContent)===null||n===void 0?void 0:n.name,contents:[]};const i=t.generateContentRequest!=null;if(t.contents){if(i)throw new Di("CountTokensRequest must have one of contents or generateContentRequest, not both.");r.contents=t.contents}else if(i)r=Object.assign(Object.assign({},r),t.generateContentRequest);else{const s=Dl(t);r.contents=[s]}return{generateContentRequest:r}}function O0(t){let e;return t.contents?e=t:e={contents:[Dl(t)]},t.systemInstruction&&(e.systemInstruction=OS(t.systemInstruction)),e}function BF(t){return typeof t=="string"||Array.isArray(t)?{content:Dl(t)}:t}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M0=["text","inlineData","functionCall","functionResponse","executableCode","codeExecutionResult"],$F={user:["text","inlineData"],function:["functionResponse"],model:["text","functionCall","executableCode","codeExecutionResult"],system:["text"]};function HF(t){let e=!1;for(const n of t){const{role:r,parts:i}=n;if(!e&&r!=="user")throw new sn(`First content should be with role 'user', got ${r}`);if(!S0.includes(r))throw new sn(`Each item should include role field. Got ${r} but valid roles are: ${JSON.stringify(S0)}`);if(!Array.isArray(i))throw new sn("Content should have 'parts' property with an array of Parts");if(i.length===0)throw new sn("Each Content should have at least one part");const s={text:0,inlineData:0,functionCall:0,functionResponse:0,fileData:0,executableCode:0,codeExecutionResult:0};for(const a of i)for(const u of M0)u in a&&(s[u]+=1);const o=$F[r];for(const a of M0)if(!o.includes(a)&&s[a]>0)throw new sn(`Content with role '${r}' can't contain '${a}' part`);e=!0}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L0="SILENT_ERROR";class GF{constructor(e,n,r,i={}){this.model=n,this.params=r,this._requestOptions=i,this._history=[],this._sendPromise=Promise.resolve(),this._apiKey=e,r!=null&&r.history&&(HF(r.history),this._history=r.history)}async getHistory(){return await this._sendPromise,this._history}async sendMessage(e,n={}){var r,i,s,o,a,u;await this._sendPromise;const c=Dl(e),h={safetySettings:(r=this.params)===null||r===void 0?void 0:r.safetySettings,generationConfig:(i=this.params)===null||i===void 0?void 0:i.generationConfig,tools:(s=this.params)===null||s===void 0?void 0:s.tools,toolConfig:(o=this.params)===null||o===void 0?void 0:o.toolConfig,systemInstruction:(a=this.params)===null||a===void 0?void 0:a.systemInstruction,cachedContent:(u=this.params)===null||u===void 0?void 0:u.cachedContent,contents:[...this._history,c]},f=Object.assign(Object.assign({},this._requestOptions),n);let g;return this._sendPromise=this._sendPromise.then(()=>DS(this._apiKey,this.model,h,f)).then(m=>{var E;if(m.response.candidates&&m.response.candidates.length>0){this._history.push(c);const A=Object.assign({parts:[],role:"model"},(E=m.response.candidates)===null||E===void 0?void 0:E[0].content);this._history.push(A)}else{const A=di(m.response);A&&console.warn(`sendMessage() was unsuccessful. ${A}. Inspect response object for details.`)}g=m}),await this._sendPromise,g}async sendMessageStream(e,n={}){var r,i,s,o,a,u;await this._sendPromise;const c=Dl(e),h={safetySettings:(r=this.params)===null||r===void 0?void 0:r.safetySettings,generationConfig:(i=this.params)===null||i===void 0?void 0:i.generationConfig,tools:(s=this.params)===null||s===void 0?void 0:s.tools,toolConfig:(o=this.params)===null||o===void 0?void 0:o.toolConfig,systemInstruction:(a=this.params)===null||a===void 0?void 0:a.systemInstruction,cachedContent:(u=this.params)===null||u===void 0?void 0:u.cachedContent,contents:[...this._history,c]},f=Object.assign(Object.assign({},this._requestOptions),n),g=NS(this._apiKey,this.model,h,f);return this._sendPromise=this._sendPromise.then(()=>g).catch(m=>{throw new Error(L0)}).then(m=>m.response).then(m=>{if(m.candidates&&m.candidates.length>0){this._history.push(c);const E=Object.assign({},m.candidates[0].content);E.role||(E.role="model"),this._history.push(E)}else{const E=di(m);E&&console.warn(`sendMessageStream() was unsuccessful. ${E}. Inspect response object for details.`)}}).catch(m=>{m.message!==L0&&console.error(m)}),g}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function WF(t,e,n,r){return(await Jl(e,ks.COUNT_TOKENS,t,!1,JSON.stringify(n),r)).json()}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qF(t,e,n,r){return(await Jl(e,ks.EMBED_CONTENT,t,!1,JSON.stringify(n),r)).json()}async function KF(t,e,n,r){const i=n.requests.map(o=>Object.assign(Object.assign({},o),{model:e}));return(await Jl(e,ks.BATCH_EMBED_CONTENTS,t,!1,JSON.stringify({requests:i}),r)).json()}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V0{constructor(e,n,r={}){this.apiKey=e,this._requestOptions=r,n.model.includes("/")?this.model=n.model:this.model=`models/${n.model}`,this.generationConfig=n.generationConfig||{},this.safetySettings=n.safetySettings||[],this.tools=n.tools,this.toolConfig=n.toolConfig,this.systemInstruction=OS(n.systemInstruction),this.cachedContent=n.cachedContent}async generateContent(e,n={}){var r;const i=O0(e),s=Object.assign(Object.assign({},this._requestOptions),n);return DS(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:(r=this.cachedContent)===null||r===void 0?void 0:r.name},i),s)}async generateContentStream(e,n={}){var r;const i=O0(e),s=Object.assign(Object.assign({},this._requestOptions),n);return NS(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:(r=this.cachedContent)===null||r===void 0?void 0:r.name},i),s)}startChat(e){var n;return new GF(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:(n=this.cachedContent)===null||n===void 0?void 0:n.name},e),this._requestOptions)}async countTokens(e,n={}){const r=zF(e,{model:this.model,generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:this.cachedContent}),i=Object.assign(Object.assign({},this._requestOptions),n);return WF(this.apiKey,this.model,r,i)}async embedContent(e,n={}){const r=BF(e),i=Object.assign(Object.assign({},this._requestOptions),n);return qF(this.apiKey,this.model,r,i)}async batchEmbedContents(e,n={}){const r=Object.assign(Object.assign({},this._requestOptions),n);return KF(this.apiKey,this.model,e,r)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QF{constructor(e){this.apiKey=e}getGenerativeModel(e,n){if(!e.model)throw new sn("Must provide a model name. Example: genai.getGenerativeModel({ model: 'my-model-name' })");return new V0(this.apiKey,e,n)}getGenerativeModelFromCachedContent(e,n,r){if(!e.name)throw new Di("Cached content must contain a `name` field.");if(!e.model)throw new Di("Cached content must contain a `model` field.");const i=["model","systemInstruction"];for(const o of i)if(n!=null&&n[o]&&e[o]&&(n==null?void 0:n[o])!==e[o]){if(o==="model"){const a=n.model.startsWith("models/")?n.model.replace("models/",""):n.model,u=e.model.startsWith("models/")?e.model.replace("models/",""):e.model;if(a===u)continue}throw new Di(`Different value for "${o}" specified in modelParams (${n[o]}) and cachedContent (${e[o]})`)}const s=Object.assign(Object.assign({},n),{model:e.model,tools:e.tools,toolConfig:e.toolConfig,systemInstruction:e.systemInstruction,cachedContent:e});return new V0(this.apiKey,s,r)}}const YF="AIzaSyDDzuTUQCXxNED810Gq1txwXM81idS7fNA",XF=new QF(YF),JF=XF.getGenerativeModel({model:"gemini-1.5-flash"}),ZF={temperature:1,topP:.95,topK:40,maxOutputTokens:8192,responseMimeType:"application/json"},eU=JF.startChat({generationConfig:ZF,history:[{role:"user",parts:[{text:"Generate Travel Plan for Location: Paris, for 5 days for family with a luxury budget,Give me a Hotels options list with Hotel name, Hotel address(address should be concise with 3-4 words and keep key name as HotelAddress), Price, hotel image url, geo coordinates, rating, descriptions and suggest itinerary with placeName, Place Details, Place Image Url, Geo Coordinates, ticket Pricing, Time to travel each of the location for {totalDays} days with each day plan with best time to visit in JSON format."}]},{role:"model",parts:[{text:`## Paris Luxury Family Travel Plan (5 Days)

**Hotels**

\`\`\`json
[
  {
    "HotelName": "Four Seasons Hotel George V",
    "HotelAddress": "Avenue George V",
    "Price": "From $1,500 per night",
    "HotelImageUrl": "https://www.fourseasons.com/images/hotels/par/hotel/gallery/hero/four-seasons-hotel-george-v-paris-hero.jpg",
    "GeoCoordinates": "48.8682, 2.2936",
    "Rating": "5 stars",
    "Description": "Iconic Parisian hotel with luxurious rooms, Michelin-starred dining, and a prime location near Champs-Élysées."
  },
  {
    "HotelName": "Le Bristol Paris",
    "HotelAddress": "Rue du Faubourg Saint-Honoré",
    "Price": "From $1,200 per night",
    "HotelImageUrl": "https://www.oetkercollection.com/media/images/hotels/le-bristol-paris/hero/hotel-hero-le-bristol-paris.jpg",
    "GeoCoordinates": "48.8734, 2.2994",
    "Rating": "5 stars",
    "Description": "Elegant hotel known for its exceptional service, stylish suites, and a rooftop pool with city views."
  },
  {
    "HotelName": "The Ritz Paris",
    "HotelAddress": "Place Vendôme",
    "Price": "From $1,000 per night",
    "HotelImageUrl": "https://www.ritzparis.com/sites/default/files/styles/hero/public/hero-banner-homepage.jpg?itok=K8Y941mI",
    "GeoCoordinates": "48.8686, 2.3206",
    "Rating": "5 stars",
    "Description": "Historic hotel with opulent interiors, world-class dining, and a legendary past frequented by celebrities."
  },
  {
    "HotelName": "Mandarin Oriental, Paris",
    "HotelAddress": "Rue Saint-André des Arts",
    "Price": "From $800 per night",
    "HotelImageUrl": "https://www.mandarinoriental.com/paris/saint-germain-des-pres/gallery/hotel/hero/mandarin-oriental-paris-hero.jpg",
    "GeoCoordinates": "48.8560, 2.3369",
    "Rating": "5 stars",
    "Description": "Stylish hotel with modern rooms, rooftop bar, and a Michelin-starred restaurant in the heart of Saint-Germain-des-Prés."
  },
  {
    "HotelName": "Hotel Plaza Athénéé",
    "HotelAddress": "Avenue Montaigne",
    "Price": "From $700 per night",
    "HotelImageUrl": "https://www.dorchestercollection.com/media/images/hotels/plaza-athenee-paris/hero/hotel-hero-plaza-athenee.jpg",
    "GeoCoordinates": "48.8628, 2.2943",
    "Rating": "5 stars",
    "Description": "Sophisticated hotel with a prime location on Avenue Montaigne, known for its fashion boutiques and luxury shopping."
  }
]
\`\`\`

**Itinerary**

\`\`\`json
{
  "totalDays": 5,
  "days": [
    {
      "day": 1,
      "bestTime": "Morning",
      "plan": [
        {
          "placeName": "Eiffel Tower",
          "PlaceDetails": "Iconic wrought-iron tower offering panoramic views of Paris.",
          "PlaceImageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Eiffel_Tower_at_Night_%282016%29.jpg/1280px-Eiffel_Tower_at_Night_%282016%29.jpg",
          "GeoCoordinates": "48.8584, 2.2945",
          "ticketPricing": "From €26.50 per adult",
          "Time": "3 hours"
        },
        {
          "placeName": "Champ de Mars",
          "PlaceDetails": "Large park at the foot of the Eiffel Tower, perfect for a relaxing picnic or stroll.",
          "PlaceImageUrl": "https://www.parisinfo.com/var/site/storage/images/medias/image/champ-de-mars-vue-tour-eiffel-paris_20170301115400_xlarge_default.jpg",
          "GeoCoordinates": "48.8585, 2.2923",
          "ticketPricing": "Free",
          "Time": "1 hour"
        }
      ]
    },
    {
      "day": 2,
      "bestTime": "Morning",
      "plan": [
        {
          "placeName": "Louvre Museum",
          "PlaceDetails": "World-renowned art museum housing masterpieces like the Mona Lisa.",
          "PlaceImageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Louvre_Museum_2008.jpg/1280px-Louvre_Museum_2008.jpg",
          "GeoCoordinates": "48.8606, 2.3376",
          "ticketPricing": "From €17 per adult",
          "Time": "3-4 hours"
        }
      ]
    },
    {
      "day": 2,
      "bestTime": "Afternoon",
      "plan": [
        {
          "placeName": "Tuileries Garden",
          "PlaceDetails": "Beautiful formal garden between the Louvre and Place de la Concorde.",
          "PlaceImageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Tuileries_Garden_2011.jpg/1280px-Tuileries_Garden_2011.jpg",
          "GeoCoordinates": "48.8605, 2.3258",
          "ticketPricing": "Free",
          "Time": "1 hour"
        }
      ]
    },
    {
      "day": 3,
      "bestTime": "Morning",
      "plan": [
        {
          "placeName": "Notre Dame Cathedral",
          "PlaceDetails": "Iconic Gothic cathedral on Île de la Cité, currently undergoing restoration.",
          "PlaceImageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Cathedrale_Notre_Dame_de_Paris_2012_DSC_0140.jpg/1280px-Cathedrale_Notre_Dame_de_Paris_2012_DSC_0140.jpg",
          "GeoCoordinates": "48.8534, 2.3496",
          "ticketPricing": "Free (currently closed)",
          "Time": "2 hours"
        }
      ]
    },
    {
      "day": 3,
      "bestTime": "Afternoon",
      "plan": [
        {
          "placeName": "Île Saint-Louis",
          "PlaceDetails": "Charming island in the Seine River with quaint shops and restaurants.",
          "PlaceImageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Ile_Saint-Louis_Paris_France_3384.jpg/1280px-Ile_Saint-Louis_Paris_France_3384.jpg",
          "GeoCoordinates": "48.8521, 2.3589",
          "ticketPricing": "Free",
          "Time": "2 hours"
        }
      ]
    },
    {
      "day": 4,
      "bestTime": "Morning",
      "plan": [
        {
          "placeName": "Arc de Triomphe",
          "PlaceDetails": "Triumphal arch commemorating French military victories.",
          "PlaceImageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Arc_de_Triomphe_Paris_France_%281%29.jpg/1280px-Arc_de_Triomphe_Paris_France_%281%29.jpg",
          "GeoCoordinates": "48.8738, 2.2950",
          "ticketPricing": "From €13 per adult",
          "Time": "2 hours"
        }
      ]
    },
    {
      "day": 4,
      "bestTime": "Afternoon",
      "plan": [
        {
          "placeName": "Champs-Élysées",
          "PlaceDetails": "Famous avenue lined with luxury shops, restaurants, and theaters.",
          "PlaceImageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Champs-%C3%A9lys%C3%A9es_December_2011.jpg/1280px-Champs-%C3%A9lys%C3%A9es_December_2011.jpg",
          "GeoCoordinates": "48.8636, 2.2952",
          "ticketPricing": "Free",
          "Time": "2 hours"
        }
      ]
    },
    {
      "day": 5,
      "bestTime": "Morning",
      "plan": [
        {
          "placeName": "Versailles Palace",
          "PlaceDetails": "Grand palace with opulent gardens, showcasing the grandeur of French royalty.",
          "PlaceImageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Versailles_Palace_2013.jpg/1280px-Versailles_Palace_2013.jpg",
          "GeoCoordinates": "48.8045, 2.1215",
          "ticketPricing": "From €20 per adult",
          "Time": "4-5 hours"
        }
      ]
    }
  ]
}
\`\`\`

**Notes:**

* This itinerary is a suggestion, you can customize it based on your family's interests and preferences.
* Consider booking tours and tickets in advance, especially for popular attractions.
* Paris is a walkable city, but consider using the Metro or taxis for longer distances.
* Don't forget to pack comfortable shoes and be prepared for crowds, especially during peak season.
* Enjoy your luxurious family trip to Paris! 
`}]},{role:"user",parts:[{text:`The data you provided is correct just remove the double quotes for all keys within the json object
`}]},{role:"model",parts:[{text:`You are absolutely right!  I apologize for the mistake. Here is the corrected JSON with the double quotes removed from the keys:

\`\`\`json
[
  {
    HotelName: "Four Seasons Hotel George V",
    HotelAddress: "Avenue George V",
    Price: "From $1,500 per night",
    HotelImageUrl: "https://www.fourseasons.com/images/hotels/par/hotel/gallery/hero/four-seasons-hotel-george-v-paris-hero.jpg",
    GeoCoordinates: "48.8682, 2.2936",
    Rating: "5 stars",
    Description: "Iconic Parisian hotel with luxurious rooms, Michelin-starred dining, and a prime location near Champs-Élysées."
  },
  {
    HotelName: "Le Bristol Paris",
    HotelAddress: "Rue du Faubourg Saint-Honoré",
    Price: "From $1,200 per night",
    HotelImageUrl: "https://www.oetkercollection.com/media/images/hotels/le-bristol-paris/hero/hotel-hero-le-bristol-paris.jpg",
    GeoCoordinates: "48.8734, 2.2994",
    Rating: "5 stars",
    Description: "Elegant hotel known for its exceptional service, stylish suites, and a rooftop pool with city views."
  },
  {
    HotelName: "The Ritz Paris",
    HotelAddress: "Place Vendôme",
    Price: "From $1,000 per night",
    HotelImageUrl: "https://www.ritzparis.com/sites/default/files/styles/hero/public/hero-banner-homepage.jpg?itok=K8Y941mI",
    GeoCoordinates: "48.8686, 2.3206",
    Rating: "5 stars",
    Description: "Historic hotel with opulent interiors, world-class dining, and a legendary past frequented by celebrities."
  },
  {
    HotelName: "Mandarin Oriental, Paris",
    HotelAddress: "Rue Saint-André des Arts",
    Price: "From $800 per night",
    HotelImageUrl: "https://www.mandarinoriental.com/paris/saint-germain-des-pres/gallery/hotel/hero/mandarin-oriental-paris-hero.jpg",
    GeoCoordinates: "48.8560, 2.3369",
    Rating: "5 stars",
    Description: "Stylish hotel with modern rooms, rooftop bar, and a Michelin-starred restaurant in the heart of Saint-Germain-des-Prés."
  },
  {
    HotelName: "Hotel Plaza Athénéé",
    HotelAddress: "Avenue Montaigne",
    Price: "From $700 per night",
    HotelImageUrl: "https://www.dorchestercollection.com/media/images/hotels/plaza-athenee-paris/hero/hotel-hero-plaza-athenee.jpg",
    GeoCoordinates: "48.8628, 2.2943",
    Rating: "5 stars",
    Description: "Sophisticated hotel with a prime location on Avenue Montaigne, known for its fashion boutiques and luxury shopping."
  }
]
\`\`\`

\`\`\`json
{
  totalDays: 5,
  days: [
    {
      day: 1,
      bestTime: "Morning",
      plan: [
        {
          placeName: "Eiffel Tower",
          PlaceDetails: "Iconic wrought-iron tower offering panoramic views of Paris.",
          PlaceImageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Eiffel_Tower_at_Night_%282016%29.jpg/1280px-Eiffel_Tower_at_Night_%282016%29.jpg",
          GeoCoordinates: "48.8584, 2.2945",
          ticketPricing: "From €26.50 per adult",
          Time: "3 hours"
        },
        {
          placeName: "Champ de Mars",
          PlaceDetails: "Large park at the foot of the Eiffel Tower, perfect for a relaxing picnic or stroll.",
          PlaceImageUrl: "https://www.parisinfo.com/var/site/storage/images/medias/image/champ-de-mars-vue-tour-eiffel-paris_20170301115400_xlarge_default.jpg",
          GeoCoordinates: "48.8585, 2.2923",
          ticketPricing: "Free",
          Time: "1 hour"
        }
      ]
    },
    {
      day: 2,
      bestTime: "Morning",
      plan: [
        {
          placeName: "Louvre Museum",
          PlaceDetails: "World-renowned art museum housing masterpieces like the Mona Lisa.",
          PlaceImageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Louvre_Museum_2008.jpg/1280px-Louvre_Museum_2008.jpg",
          GeoCoordinates: "48.8606, 2.3376",
          ticketPricing: "From €17 per adult",
          Time: "3-4 hours"
        }
      ]
    },
    {
      day: 2,
      bestTime: "Afternoon",
      plan: [
        {
          placeName: "Tuileries Garden",
          PlaceDetails: "Beautiful formal garden between the Louvre and Place de la Concorde.",
          PlaceImageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Tuileries_Garden_2011.jpg/1280px-Tuileries_Garden_2011.jpg",
          GeoCoordinates: "48.8605, 2.3258",
          ticketPricing: "Free",
          Time: "1 hour"
        }
      ]
    },
    {
      day: 3,
      bestTime: "Morning",
      plan: [
        {
          placeName: "Notre Dame Cathedral",
          PlaceDetails: "Iconic Gothic cathedral on Île de la Cité, currently undergoing restoration.",
          PlaceImageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Cathedrale_Notre_Dame_de_Paris_2012_DSC_0140.jpg/1280px-Cathedrale_Notre_Dame_de_Paris_2012_DSC_0140.jpg",
          GeoCoordinates: "48.8534, 2.3496",
          ticketPricing: "Free (currently closed)",
          Time: "2 hours"
        }
      ]
    },
    {
      day: 3,
      bestTime: "Afternoon",
      plan: [
        {
          placeName: "Île Saint-Louis",
          PlaceDetails: "Charming island in the Seine River with quaint shops and restaurants.",
          PlaceImageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Ile_Saint-Louis_Paris_France_3384.jpg/1280px-Ile_Saint-Louis_Paris_France_3384.jpg",
          GeoCoordinates: "48.8521, 2.3589",
          ticketPricing: "Free",
          Time: "2 hours"
        }
      ]
    },
    {
      day: 4,
      bestTime: "Morning",
      plan: [
        {
          placeName: "Arc de Triomphe",
          PlaceDetails: "Triumphal arch commemorating French military victories.",
          PlaceImageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Arc_de_Triomphe_Paris_France_%281%29.jpg/1280px-Arc_de_Triomphe_Paris_France_%281%29.jpg",
          GeoCoordinates: "48.8738, 2.2950",
          ticketPricing: "From €13 per adult",
          Time: "2 hours"
        }
      ]
    },
    {
      day: 4,
      bestTime: "Afternoon",
      plan: [
        {
          placeName: "Champs-Élysées",
          PlaceDetails: "Famous avenue lined with luxury shops, restaurants, and theaters.",
          PlaceImageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Champs-%C3%A9lys%C3%A9es_December_2011.jpg/1280px-Champs-%C3%A9lys%C3%A9es_December_2011.jpg",
          GeoCoordinates: "48.8636, 2.2952",
          ticketPricing: "Free",
          Time: "2 hours"
        }
      ]
    },
    {
      day: 5,
      bestTime: "Morning",
      plan: [
        {
          placeName: "Versailles Palace",
          PlaceDetails: "Grand palace with opulent gardens, showcasing the grandeur of French royalty.",
          PlaceImageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Versailles_Palace_2013.jpg/1280px-Versailles_Palace_2013.jpg",
          GeoCoordinates: "48.8045, 2.1215",
          ticketPricing: "From €20 per adult",
          Time: "4-5 hours"
        }
      ]
    }
  ]
}
\`\`\`

This should be the correct JSON format! Please let me know if you have any other questions. 
`}]}]});function tU(){const[t,e]=U.useState({destination:"",noOfDays:0,noOfPeople:"",budget:""}),n=Xl(c=>c.user.mail),[r,i]=U.useState(!1),s=Cm(),o=(c,h)=>{e({...t,[c]:h})},a=async()=>{var m,E,A,N;(!(t!=null&&t.budget)||!(t!=null&&t.destination)||!(t!=null&&t.noOfPeople)||!(t!=null&&t.noOfDays))&&xS("Please fill all the columns!"),console.log(t);const c=Q4.replace("{location}",t.destination).replace("{totalDays}",t.noOfDays).replace("{budgetType}",t.budget).replace("noOfPerson",t.noOfPeople);i(!0);const h=await eU.sendMessage(c),f=(N=(A=(E=(m=h==null?void 0:h.response)==null?void 0:m.candidates[0])==null?void 0:E.content)==null?void 0:A.parts[0])==null?void 0:N.text;console.log(f);const g=await JSON.parse(f);console.log(g),await u(g),i(!1)},u=async c=>{i(!0);const h=Date.now().toString();await CV(KI(aS,"AiTrip",h),{userSelection:t,tripData:c,userEmail:n,id:h}),i(!1),s("/view-trip/"+h)};return V.jsxs("div",{children:[V.jsx(yg,{}),V.jsxs("div",{className:"sm:px-10 md:px-32 lg:px-50 xl:10px px-5 mt-10",children:[V.jsx("h2",{className:"text-3xl font-bold pb-4",children:"Tell us your travel preferences"}),V.jsx("p",{className:"text-gray-500",children:"Just provide some basic information, and our trip planner will generate a customized intinerary based on your preference"}),V.jsxs("div",{children:[V.jsxs("div",{className:" mt-20 ",children:[V.jsx("h2",{className:"text-xl font-medium",children:"What is your destination choice?"}),V.jsx("input",{type:"text",className:"border border-slate-400 mt-2 w-8/12 rounded-lg h-10 px-2",placeholder:"Ex. Mumbai",onChange:c=>{o("destination",c.target.value)}})]}),V.jsxs("div",{className:" mt-10",children:[V.jsx("h2",{className:"text-xl font-medium",children:"What is the number of days?"}),V.jsx("input",{type:"text",className:"border border-slate-400 mt-2 w-8/12 rounded-lg h-10 px-2",placeholder:"Ex. 3",onChange:c=>{o("noOfDays",c.target.value)}})]}),V.jsxs("div",{className:"mt-10",children:[V.jsx("h2",{className:"text-xl font-medium",children:"What is your budet?"}),V.jsx("div",{className:"flex gap-4 w-8/12 mt-2",children:q4.map((c,h)=>V.jsxs("div",{className:`${t.budget==c.name&&"border-2 border-gray-950 shadow-lg"} flex flex-col border border-gray-400 w-4/12 rounded-lg p-2 cursor-pointer`,onClick:()=>o("budget",c.name),children:[V.jsx("p",{children:c.logo}),V.jsx("h2",{className:"text-xl font-medium",children:c.name}),V.jsx("p",{className:"text-gray-500 text-sm",children:c.desc})]},h))})]}),V.jsxs("div",{className:"mt-10",children:[V.jsx("h2",{className:"text-xl font-medium",children:"What do you plan on travelling with on your next adventure?"}),V.jsx("div",{className:"grid grid-cols-3 gap-4 w-8/12 mt-2",children:K4.map((c,h)=>V.jsxs("div",{className:`${t.noOfPeople==c.name&&"border-2 border-gray-950 shadow-lg"} border border-gray-400 rounded-lg p-4 cursor-pointer`,onClick:()=>o("noOfPeople",c.name),children:[V.jsx("p",{children:c.logo}),V.jsx("h2",{className:"text-xl font-medium",children:c.name}),V.jsx("p",{className:"text-gray-500 text-sm",children:c.desc})]},h))})]}),V.jsx("div",{className:"my-10 flex justify-end w-8/12",onClick:a,children:V.jsx(Td,{disabled:r,children:r?V.jsx(W4,{className:"animate-spin"}):"Generate trip"})})]})]})]})}const nU=(t,e,n)=>{const r=/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(t);console.log("Password being validated:",e);const i=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+=[\]{};':"\\|,.<>\/?]).{8,}$/.test(e);console.log("Password validation result:",i);const s=n&&/^[a-zA-Z][a-zA-Z0-9_-]{2,19}$/.test(n);return r?i?n&&!s?"Username must contain letters, numbers, and hyphens.":null:"Password is not valid":"E-mail Id is not valid"};function rU(){const[t,e]=U.useState(!1),n=Cm(),r=()=>{e(!t)},i=U.useRef(),s=U.useRef(),o=U.useRef(),[a,u]=U.useState(),c=_g(),h=()=>{const f=nU(i.current.value,s.current.value,t&&o.current.value);if(console.log("Validation result:",f),f){u(f);return}if(u(null),t){const g=o.current.value;CN(Ja,i.current.value,s.current.value).then(m=>{const E=m.user;console.log(E),PN(Ja.currentUser,{displayName:g}),c(setUser({mail:i.current.value,displayName:g,uid:E.uid}))}).catch(m=>{const E=m.code,A=m.message;u(E+"-"+A)}),n("/")}else RN(Ja,i.current.value,s.current.value).then(g=>{const m=g.user;console.log(m),c(setUser({mail:m.email,displayName:m.displayName,uid:m.uid}))}).catch(g=>{const m=g.code,E=g.message;u(m==="auth/invalid-credential"?"Invalid Credential":m+"-"+E)}),n("/")};return V.jsxs("div",{children:[V.jsx(yg,{}),V.jsxs("div",{className:"flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8",children:[V.jsx("div",{className:"sm:mx-auto sm:w-full sm:max-w-sm",children:V.jsx("h2",{className:"mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900",children:t?"Create a new account":"Sign in to your account"})}),V.jsxs("div",{className:"mt-10 sm:mx-auto sm:w-full sm:max-w-sm",children:[V.jsxs("form",{action:"#",method:"POST",onSubmit:f=>f.preventDefault(),className:"space-y-6",children:[t&&V.jsxs("div",{children:[V.jsx("label",{htmlFor:"email",className:"block text-sm/6 font-medium text-gray-900",children:"User name"}),V.jsx("div",{className:"mt-2",children:V.jsx("input",{name:"userName",type:"text",ref:o,required:!0,className:"px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"})})]}),V.jsxs("div",{children:[V.jsx("label",{htmlFor:"email",className:"block text-sm/6 font-medium text-gray-900",children:"Email address"}),V.jsx("div",{className:"mt-2",children:V.jsx("input",{id:"email",name:"email",ref:i,type:"email",required:!0,className:"px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"})})]}),V.jsxs("div",{children:[V.jsx("div",{className:"flex items-center",children:V.jsx("label",{htmlFor:"password",className:"block text-sm/6 font-medium text-gray-900",children:"Password"})}),V.jsx("div",{className:"mt-2",children:V.jsx("input",{id:"password",name:"password",type:"password",ref:s,required:!0,className:"px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"})})]}),V.jsx("div",{children:a&&V.jsx("p",{className:"text-red-500 text-sm font-medium",children:a})}),V.jsx("div",{children:V.jsx("button",{type:"submit",onClick:h,className:"flex w-full justify-center rounded-md bg-slate-950 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-slate-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",children:t?"Sign up":"Sign in"})})]}),V.jsxs("p",{className:"mt-10 text-center text-sm/6 text-gray-500",children:[t?"Already a member? ":"Not a member? ",V.jsx("a",{href:"#",className:"font-semibold text-indigo-600 hover:text-indigo-500",onClick:r,children:t?"Sign in":"Create a new account"})]})]})]})]})}const MS=CS({name:"travel",initialState:null,reducers:{addTravelData:(t,e)=>e.payload,removeTravelData:(t,e)=>null}}),{addTravelData:iU,removeTravelData:SU}=MS.actions,sU=MS.reducer,oU=S4({reducer:{user:V4,travel:sU}}),Sg=t=>new Promise((e,n)=>{const r="2zsapZ7MUkjaKD9YmYMWFIyJATkf2m5Ntx_eWq4HdeY",i=new XMLHttpRequest;i.open("GET",`https://api.unsplash.com/search/photos?query=${t}&per_page=1`,!0),i.setRequestHeader("Authorization","Client-ID "+r),i.onload=function(){if(i.status===200){const o=JSON.parse(i.responseText).results;o.forEach(a=>{}),e(o)}else console.error("Error fetching images:",i.status,i.statusText),n(i.status+i.statusText)},i.onerror=function(){console.error("Network error")},i.send()});function aU(){const{budget:t,noOfPeople:e,destination:n,noOfDays:r}=Xl(o=>o.travel.data.userSelection),[i,s]=U.useState("");return U.useEffect(()=>{(async a=>{const u=await Sg(a);console.log(u[0].links.download),s(u[0].links.download)})(n)},[]),V.jsxs("div",{children:[V.jsx("img",{src:i,alt:"adv",className:"h-[340px] w-full object-cover rounded-lg "}),V.jsxs("div",{children:[V.jsx("h2",{className:"mb-2 mt-3 font-bold text-3xl",children:n}),V.jsxs("div",{className:"flex flex-wrap gap-4 text-sm text-gray-600",children:[V.jsxs("p",{className:"bg-gray-300 px-2 py-1 rounded-lg",children:["🗓️ ",r," days"]}),V.jsxs("p",{className:"bg-gray-300 px-2 py-1 rounded-lg",children:["💰 ",t," budget"]}),V.jsxs("p",{className:"bg-gray-300 px-2 py-1 rounded-lg",children:["🍻Traveller type : ",e]})]})]})]})}const lU=()=>V.jsxs("div",{className:"my-5",children:[V.jsx("div",{className:"h-24 bg-gray-200 rounded animate-pulse w-4/12 mx-4 my-2"}),V.jsx("div",{className:"h-6 bg-gray-200 rounded animate-pulse w-5/12 mx-4 my-2"}),V.jsx("div",{className:"h-6 bg-gray-200 rounded animate-pulse w-9/12 mx-4 my-2"}),V.jsx("div",{className:"h-6 bg-gray-200 rounded animate-pulse w-9/12 mx-4 my-2"}),V.jsx("div",{className:"h-24 bg-gray-200 rounded animate-pulse w-4/12 mx-4 my-2"}),V.jsx("div",{className:"h-6 bg-gray-200 rounded animate-pulse w-5/12 mx-4 my-2"}),V.jsx("div",{className:"h-6 bg-gray-200 rounded animate-pulse w-9/12 mx-4 my-2"}),V.jsx("div",{className:"h-6 bg-gray-200 rounded animate-pulse w-9/12 mx-4 my-2"}),V.jsx("div",{className:"h-24 bg-gray-200 rounded animate-pulse w-4/12 mx-4 my-2"}),V.jsx("div",{className:"h-6 bg-gray-200 rounded animate-pulse w-5/12 mx-4 my-2"}),V.jsx("div",{className:"h-6 bg-gray-200 rounded animate-pulse w-9/12 mx-4 my-2"}),V.jsx("div",{className:"h-6 bg-gray-200 rounded animate-pulse w-9/12 mx-4 my-2"})]}),uU=({item:t,index:e})=>{const[n,r]=U.useState();return U.useEffect(()=>{(s=>{Sg(s==null?void 0:s.HotelName.trim()).then(o=>{const a=o[0].links.download;console.log(a),r(a)})})(t)},[]),V.jsx("div",{children:V.jsx(Cd,{to:"https://www.google.com/maps/search/?api=1&query="+(t==null?void 0:t.HotelName)+","+(t==null?void 0:t.HotelAddress),target:"_blank",children:V.jsxs("div",{className:"mt-2 hover:scale-105 transition-all cursor-pointer",children:[V.jsx("img",{className:"h-40 rounded-lg",src:n,alt:"alt"}),V.jsxs("div",{className:"mt-3 mx-1 flex gap-1 flex-col",children:[V.jsx("h2",{className:"font-medium",children:t==null?void 0:t.HotelName}),V.jsxs("p",{className:"text-xs text-gray-500",children:["📍 ",t==null?void 0:t.HotelAddress]}),V.jsxs("p",{className:"text-sm",children:["🏷️ ",t==null?void 0:t.Price]}),V.jsxs("p",{className:"text-sm",children:["⭐ ",t==null?void 0:t.Rating]})]})]},e)})})};function cU(){const t=Xl(e=>e.travel.data.tripData.hotels);return console.log(t),V.jsxs("div",{className:"mt-8",children:[V.jsx("h2",{className:"font-semibold text-xl",children:"Recommended Hotels"}),V.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-3  gap-4 h-100",children:t.map((e,n)=>V.jsx(uU,{item:e,index:n}))})]})}function dU(t){return bS({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M408 120c0 54.6-73.1 151.9-105.2 192c-7.7 9.6-22 9.6-29.6 0C241.1 271.9 168 174.6 168 120C168 53.7 221.7 0 288 0s120 53.7 120 120zm8 80.4c3.5-6.9 6.7-13.8 9.6-20.6c.5-1.2 1-2.5 1.5-3.7l116-46.4C558.9 123.4 576 135 576 152V422.8c0 9.8-6 18.6-15.1 22.3L416 503V200.4zM137.6 138.3c2.4 14.1 7.2 28.3 12.8 41.5c2.9 6.8 6.1 13.7 9.6 20.6V451.8L32.9 502.7C17.1 509 0 497.4 0 480.4V209.6c0-9.8 6-18.6 15.1-22.3l122.6-49zM327.8 332c13.9-17.4 35.7-45.7 56.2-77V504.3L192 449.4V255c20.5 31.3 42.3 59.6 56.2 77c20.5 25.6 59.1 25.6 79.6 0zM288 152a40 40 0 1 0 0-80 40 40 0 1 0 0 80z"},child:[]}]})(t)}const hU=({items:t,index:e})=>{const[n,r]=U.useState();return U.useEffect(()=>{(async s=>{const o=await Sg(s);console.log(),r(o[0].links.download)})(t.placeName.trim())},[]),V.jsxs("div",{className:"flex gap-3 align-middle border shadow-xl p-4 w-12/12 rounded-xl",children:[V.jsx("img",{src:n,alt:"photo",className:"w-32 h-35 rounded-lg"}),V.jsxs("div",{className:"flex flex-col gap-1 w-full h-2/3",children:[V.jsx("h2",{className:"font-semibold ",children:t.placeName}),V.jsxs("p",{className:"text-sm text-gray-600",children:["🖊️ ",t.PlaceDetails]}),V.jsxs("p",{className:"text-sm",children:["⏰ ",t.Time]}),V.jsxs("div",{className:"flex justify-between w-full pr-4",children:[V.jsxs("p",{className:"text-sm",children:["💵 ",t.ticketPricing]}),V.jsx(Cd,{to:"https://www.google.com/maps/search/?api=1&query="+t.placeName+","+t.PlaceDetails,target:"_blank",children:V.jsx(dU,{className:"cursor-pointer"})})]})]})]},e)},fU=({item:t,index:e,days:n})=>{var r;return V.jsxs("div",{children:[V.jsx("h2",{className:"font-semibold text-lg",children:t.day!==((r=n[e-1])==null?void 0:r.day)?"Day "+t.day:""}),V.jsxs("h2",{className:"text-red-800",children:["Best time to visit: ",t.bestTime]}),V.jsx("div",{className:"flex gap-3 flex-col my-2",children:t.plan.map((i,s)=>V.jsx(hU,{items:i,index:s}))})]},e)};function pU(){const{days:t}=Xl(e=>e.travel.data.tripData.itinerary);return console.log(t),V.jsxs("div",{className:"",children:[V.jsx("h1",{className:"mt-8 font-semibold text-xl",children:"Places to visit"}),t.map((e,n)=>V.jsx(fU,{item:e,index:n,days:t}))]})}function mU(){return V.jsx("div",{className:"mt-12",children:V.jsx("h2",{className:"text-gray-500 text-center text-sm",children:"Created by: Nabil Mohamed"})})}function gU(){const{tripId:t}=hb(),[e,n]=U.useState(!0);console.log("Inside"+t),U.useEffect(()=>{console.log(t),t&&i()},[t]);const r=_g(),i=async()=>{const s=KI(aS,"AiTrip",t),o=await IV(s);o.exists()?(console.log("Document data: ",o.data()),r(iU({data:o.data()}))):xS("No such document"),n(!1)};return e?V.jsx(lU,{}):V.jsxs("div",{className:"p-10 md:px-20 lg:px-44 xl:px-56",children:[V.jsx(aU,{}),V.jsx(cU,{}),V.jsx(pU,{}),V.jsx(mU,{})]})}const yU=Ob([{path:"/",element:V.jsx(F4,{})},{path:"/create-trip",element:V.jsx(tU,{})},{path:"/login",element:V.jsx(rU,{})},{path:"/view-trip/:tripId",element:V.jsx(gU,{})}]);ZE(document.getElementById("root")).render(V.jsx(U.StrictMode,{children:V.jsx(QV,{store:oU,children:V.jsx($b,{router:yU,children:V.jsx(_F,{})})})}));
