function j0(o,f){for(var d=0;d<f.length;d++){const u=f[d];if(typeof u!="string"&&!Array.isArray(u)){for(const b in u)if(b!=="default"&&!(b in o)){const E=Object.getOwnPropertyDescriptor(u,b);E&&Object.defineProperty(o,b,E.get?E:{enumerable:!0,get:()=>u[b]})}}}return Object.freeze(Object.defineProperty(o,Symbol.toStringTag,{value:"Module"}))}(function(){const f=document.createElement("link").relList;if(f&&f.supports&&f.supports("modulepreload"))return;for(const b of document.querySelectorAll('link[rel="modulepreload"]'))u(b);new MutationObserver(b=>{for(const E of b)if(E.type==="childList")for(const B of E.addedNodes)B.tagName==="LINK"&&B.rel==="modulepreload"&&u(B)}).observe(document,{childList:!0,subtree:!0});function d(b){const E={};return b.integrity&&(E.integrity=b.integrity),b.referrerPolicy&&(E.referrerPolicy=b.referrerPolicy),b.crossOrigin==="use-credentials"?E.credentials="include":b.crossOrigin==="anonymous"?E.credentials="omit":E.credentials="same-origin",E}function u(b){if(b.ep)return;b.ep=!0;const E=d(b);fetch(b.href,E)}})();function R0(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var vo={exports:{}},An={};var Dd;function U0(){if(Dd)return An;Dd=1;var o=Symbol.for("react.transitional.element"),f=Symbol.for("react.fragment");function d(u,b,E){var B=null;if(E!==void 0&&(B=""+E),b.key!==void 0&&(B=""+b.key),"key"in b){E={};for(var D in b)D!=="key"&&(E[D]=b[D])}else E=b;return b=E.ref,{$$typeof:o,type:u,key:B,ref:b!==void 0?b:null,props:E}}return An.Fragment=f,An.jsx=d,An.jsxs=d,An}var _d;function k0(){return _d||(_d=1,vo.exports=U0()),vo.exports}var y=k0(),bo={exports:{}},X={};var jd;function H0(){if(jd)return X;jd=1;var o=Symbol.for("react.transitional.element"),f=Symbol.for("react.portal"),d=Symbol.for("react.fragment"),u=Symbol.for("react.strict_mode"),b=Symbol.for("react.profiler"),E=Symbol.for("react.consumer"),B=Symbol.for("react.context"),D=Symbol.for("react.forward_ref"),A=Symbol.for("react.suspense"),S=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),N=Symbol.for("react.activity"),Q=Symbol.iterator;function se(m){return m===null||typeof m!="object"?null:(m=Q&&m[Q]||m["@@iterator"],typeof m=="function"?m:null)}var le={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},F=Object.assign,G={};function oe(m,O,R){this.props=m,this.context=O,this.refs=G,this.updater=R||le}oe.prototype.isReactComponent={},oe.prototype.setState=function(m,O){if(typeof m!="object"&&typeof m!="function"&&m!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,m,O,"setState")},oe.prototype.forceUpdate=function(m){this.updater.enqueueForceUpdate(this,m,"forceUpdate")};function ze(){}ze.prototype=oe.prototype;function ge(m,O,R){this.props=m,this.context=O,this.refs=G,this.updater=R||le}var Ue=ge.prototype=new ze;Ue.constructor=ge,F(Ue,oe.prototype),Ue.isPureReactComponent=!0;var Xe=Array.isArray;function Ze(){}var te={H:null,A:null,T:null,S:null},Ke=Object.prototype.hasOwnProperty;function Tt(m,O,R){var H=R.ref;return{$$typeof:o,type:m,key:O,ref:H!==void 0?H:null,props:R}}function Ka(m,O){return Tt(m.type,O,m.props)}function At(m){return typeof m=="object"&&m!==null&&m.$$typeof===o}function Je(m){var O={"=":"=0",":":"=2"};return"$"+m.replace(/[=:]/g,function(R){return O[R]})}var Ma=/\/+/g;function Dt(m,O){return typeof m=="object"&&m!==null&&m.key!=null?Je(""+m.key):O.toString(36)}function zt(m){switch(m.status){case"fulfilled":return m.value;case"rejected":throw m.reason;default:switch(typeof m.status=="string"?m.then(Ze,Ze):(m.status="pending",m.then(function(O){m.status==="pending"&&(m.status="fulfilled",m.value=O)},function(O){m.status==="pending"&&(m.status="rejected",m.reason=O)})),m.status){case"fulfilled":return m.value;case"rejected":throw m.reason}}throw m}function w(m,O,R,H,Z){var W=typeof m;(W==="undefined"||W==="boolean")&&(m=null);var ue=!1;if(m===null)ue=!0;else switch(W){case"bigint":case"string":case"number":ue=!0;break;case"object":switch(m.$$typeof){case o:case f:ue=!0;break;case _:return ue=m._init,w(ue(m._payload),O,R,H,Z)}}if(ue)return Z=Z(m),ue=H===""?"."+Dt(m,0):H,Xe(Z)?(R="",ue!=null&&(R=ue.replace(Ma,"$&/")+"/"),w(Z,O,R,"",function(_l){return _l})):Z!=null&&(At(Z)&&(Z=Ka(Z,R+(Z.key==null||m&&m.key===Z.key?"":(""+Z.key).replace(Ma,"$&/")+"/")+ue)),O.push(Z)),1;ue=0;var Qe=H===""?".":H+":";if(Xe(m))for(var we=0;we<m.length;we++)H=m[we],W=Qe+Dt(H,we),ue+=w(H,O,R,W,Z);else if(we=se(m),typeof we=="function")for(m=we.call(m),we=0;!(H=m.next()).done;)H=H.value,W=Qe+Dt(H,we++),ue+=w(H,O,R,W,Z);else if(W==="object"){if(typeof m.then=="function")return w(zt(m),O,R,H,Z);throw O=String(m),Error("Objects are not valid as a React child (found: "+(O==="[object Object]"?"object with keys {"+Object.keys(m).join(", ")+"}":O)+"). If you meant to render a collection of children, use an array instead.")}return ue}function j(m,O,R){if(m==null)return m;var H=[],Z=0;return w(m,H,"","",function(W){return O.call(R,W,Z++)}),H}function V(m){if(m._status===-1){var O=m._result;O=O(),O.then(function(R){(m._status===0||m._status===-1)&&(m._status=1,m._result=R)},function(R){(m._status===0||m._status===-1)&&(m._status=2,m._result=R)}),m._status===-1&&(m._status=0,m._result=O)}if(m._status===1)return m._result.default;throw m._result}var de=typeof reportError=="function"?reportError:function(m){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var O=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof m=="object"&&m!==null&&typeof m.message=="string"?String(m.message):String(m),error:m});if(!window.dispatchEvent(O))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",m);return}console.error(m)},ve={map:j,forEach:function(m,O,R){j(m,function(){O.apply(this,arguments)},R)},count:function(m){var O=0;return j(m,function(){O++}),O},toArray:function(m){return j(m,function(O){return O})||[]},only:function(m){if(!At(m))throw Error("React.Children.only expected to receive a single React element child.");return m}};return X.Activity=N,X.Children=ve,X.Component=oe,X.Fragment=d,X.Profiler=b,X.PureComponent=ge,X.StrictMode=u,X.Suspense=A,X.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=te,X.__COMPILER_RUNTIME={__proto__:null,c:function(m){return te.H.useMemoCache(m)}},X.cache=function(m){return function(){return m.apply(null,arguments)}},X.cacheSignal=function(){return null},X.cloneElement=function(m,O,R){if(m==null)throw Error("The argument must be a React element, but you passed "+m+".");var H=F({},m.props),Z=m.key;if(O!=null)for(W in O.key!==void 0&&(Z=""+O.key),O)!Ke.call(O,W)||W==="key"||W==="__self"||W==="__source"||W==="ref"&&O.ref===void 0||(H[W]=O[W]);var W=arguments.length-2;if(W===1)H.children=R;else if(1<W){for(var ue=Array(W),Qe=0;Qe<W;Qe++)ue[Qe]=arguments[Qe+2];H.children=ue}return Tt(m.type,Z,H)},X.createContext=function(m){return m={$$typeof:B,_currentValue:m,_currentValue2:m,_threadCount:0,Provider:null,Consumer:null},m.Provider=m,m.Consumer={$$typeof:E,_context:m},m},X.createElement=function(m,O,R){var H,Z={},W=null;if(O!=null)for(H in O.key!==void 0&&(W=""+O.key),O)Ke.call(O,H)&&H!=="key"&&H!=="__self"&&H!=="__source"&&(Z[H]=O[H]);var ue=arguments.length-2;if(ue===1)Z.children=R;else if(1<ue){for(var Qe=Array(ue),we=0;we<ue;we++)Qe[we]=arguments[we+2];Z.children=Qe}if(m&&m.defaultProps)for(H in ue=m.defaultProps,ue)Z[H]===void 0&&(Z[H]=ue[H]);return Tt(m,W,Z)},X.createRef=function(){return{current:null}},X.forwardRef=function(m){return{$$typeof:D,render:m}},X.isValidElement=At,X.lazy=function(m){return{$$typeof:_,_payload:{_status:-1,_result:m},_init:V}},X.memo=function(m,O){return{$$typeof:S,type:m,compare:O===void 0?null:O}},X.startTransition=function(m){var O=te.T,R={};te.T=R;try{var H=m(),Z=te.S;Z!==null&&Z(R,H),typeof H=="object"&&H!==null&&typeof H.then=="function"&&H.then(Ze,de)}catch(W){de(W)}finally{O!==null&&R.types!==null&&(O.types=R.types),te.T=O}},X.unstable_useCacheRefresh=function(){return te.H.useCacheRefresh()},X.use=function(m){return te.H.use(m)},X.useActionState=function(m,O,R){return te.H.useActionState(m,O,R)},X.useCallback=function(m,O){return te.H.useCallback(m,O)},X.useContext=function(m){return te.H.useContext(m)},X.useDebugValue=function(){},X.useDeferredValue=function(m,O){return te.H.useDeferredValue(m,O)},X.useEffect=function(m,O){return te.H.useEffect(m,O)},X.useEffectEvent=function(m){return te.H.useEffectEvent(m)},X.useId=function(){return te.H.useId()},X.useImperativeHandle=function(m,O,R){return te.H.useImperativeHandle(m,O,R)},X.useInsertionEffect=function(m,O){return te.H.useInsertionEffect(m,O)},X.useLayoutEffect=function(m,O){return te.H.useLayoutEffect(m,O)},X.useMemo=function(m,O){return te.H.useMemo(m,O)},X.useOptimistic=function(m,O){return te.H.useOptimistic(m,O)},X.useReducer=function(m,O,R){return te.H.useReducer(m,O,R)},X.useRef=function(m){return te.H.useRef(m)},X.useState=function(m){return te.H.useState(m)},X.useSyncExternalStore=function(m,O,R){return te.H.useSyncExternalStore(m,O,R)},X.useTransition=function(){return te.H.useTransition()},X.version="19.2.4",X}var Rd;function To(){return Rd||(Rd=1,bo.exports=H0()),bo.exports}var U=To();const L0=R0(U),q0=j0({__proto__:null,default:L0},[U]);var yo={exports:{}},Cn={},xo={exports:{}},So={};var Ud;function Y0(){return Ud||(Ud=1,(function(o){function f(w,j){var V=w.length;w.push(j);e:for(;0<V;){var de=V-1>>>1,ve=w[de];if(0<b(ve,j))w[de]=j,w[V]=ve,V=de;else break e}}function d(w){return w.length===0?null:w[0]}function u(w){if(w.length===0)return null;var j=w[0],V=w.pop();if(V!==j){w[0]=V;e:for(var de=0,ve=w.length,m=ve>>>1;de<m;){var O=2*(de+1)-1,R=w[O],H=O+1,Z=w[H];if(0>b(R,V))H<ve&&0>b(Z,R)?(w[de]=Z,w[H]=V,de=H):(w[de]=R,w[O]=V,de=O);else if(H<ve&&0>b(Z,V))w[de]=Z,w[H]=V,de=H;else break e}}return j}function b(w,j){var V=w.sortIndex-j.sortIndex;return V!==0?V:w.id-j.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var E=performance;o.unstable_now=function(){return E.now()}}else{var B=Date,D=B.now();o.unstable_now=function(){return B.now()-D}}var A=[],S=[],_=1,N=null,Q=3,se=!1,le=!1,F=!1,G=!1,oe=typeof setTimeout=="function"?setTimeout:null,ze=typeof clearTimeout=="function"?clearTimeout:null,ge=typeof setImmediate<"u"?setImmediate:null;function Ue(w){for(var j=d(S);j!==null;){if(j.callback===null)u(S);else if(j.startTime<=w)u(S),j.sortIndex=j.expirationTime,f(A,j);else break;j=d(S)}}function Xe(w){if(F=!1,Ue(w),!le)if(d(A)!==null)le=!0,Ze||(Ze=!0,Je());else{var j=d(S);j!==null&&zt(Xe,j.startTime-w)}}var Ze=!1,te=-1,Ke=5,Tt=-1;function Ka(){return G?!0:!(o.unstable_now()-Tt<Ke)}function At(){if(G=!1,Ze){var w=o.unstable_now();Tt=w;var j=!0;try{e:{le=!1,F&&(F=!1,ze(te),te=-1),se=!0;var V=Q;try{t:{for(Ue(w),N=d(A);N!==null&&!(N.expirationTime>w&&Ka());){var de=N.callback;if(typeof de=="function"){N.callback=null,Q=N.priorityLevel;var ve=de(N.expirationTime<=w);if(w=o.unstable_now(),typeof ve=="function"){N.callback=ve,Ue(w),j=!0;break t}N===d(A)&&u(A),Ue(w)}else u(A);N=d(A)}if(N!==null)j=!0;else{var m=d(S);m!==null&&zt(Xe,m.startTime-w),j=!1}}break e}finally{N=null,Q=V,se=!1}j=void 0}}finally{j?Je():Ze=!1}}}var Je;if(typeof ge=="function")Je=function(){ge(At)};else if(typeof MessageChannel<"u"){var Ma=new MessageChannel,Dt=Ma.port2;Ma.port1.onmessage=At,Je=function(){Dt.postMessage(null)}}else Je=function(){oe(At,0)};function zt(w,j){te=oe(function(){w(o.unstable_now())},j)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(w){w.callback=null},o.unstable_forceFrameRate=function(w){0>w||125<w?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Ke=0<w?Math.floor(1e3/w):5},o.unstable_getCurrentPriorityLevel=function(){return Q},o.unstable_next=function(w){switch(Q){case 1:case 2:case 3:var j=3;break;default:j=Q}var V=Q;Q=j;try{return w()}finally{Q=V}},o.unstable_requestPaint=function(){G=!0},o.unstable_runWithPriority=function(w,j){switch(w){case 1:case 2:case 3:case 4:case 5:break;default:w=3}var V=Q;Q=w;try{return j()}finally{Q=V}},o.unstable_scheduleCallback=function(w,j,V){var de=o.unstable_now();switch(typeof V=="object"&&V!==null?(V=V.delay,V=typeof V=="number"&&0<V?de+V:de):V=de,w){case 1:var ve=-1;break;case 2:ve=250;break;case 5:ve=1073741823;break;case 4:ve=1e4;break;default:ve=5e3}return ve=V+ve,w={id:_++,callback:j,priorityLevel:w,startTime:V,expirationTime:ve,sortIndex:-1},V>de?(w.sortIndex=V,f(S,w),d(A)===null&&w===d(S)&&(F?(ze(te),te=-1):F=!0,zt(Xe,V-de))):(w.sortIndex=ve,f(A,w),le||se||(le=!0,Ze||(Ze=!0,Je()))),w},o.unstable_shouldYield=Ka,o.unstable_wrapCallback=function(w){var j=Q;return function(){var V=Q;Q=j;try{return w.apply(this,arguments)}finally{Q=V}}}})(So)),So}var kd;function G0(){return kd||(kd=1,xo.exports=Y0()),xo.exports}var zo={exports:{}},Ge={};var Hd;function Q0(){if(Hd)return Ge;Hd=1;var o=To();function f(A){var S="https://react.dev/errors/"+A;if(1<arguments.length){S+="?args[]="+encodeURIComponent(arguments[1]);for(var _=2;_<arguments.length;_++)S+="&args[]="+encodeURIComponent(arguments[_])}return"Minified React error #"+A+"; visit "+S+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function d(){}var u={d:{f:d,r:function(){throw Error(f(522))},D:d,C:d,L:d,m:d,X:d,S:d,M:d},p:0,findDOMNode:null},b=Symbol.for("react.portal");function E(A,S,_){var N=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:b,key:N==null?null:""+N,children:A,containerInfo:S,implementation:_}}var B=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function D(A,S){if(A==="font")return"";if(typeof S=="string")return S==="use-credentials"?S:""}return Ge.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=u,Ge.createPortal=function(A,S){var _=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!S||S.nodeType!==1&&S.nodeType!==9&&S.nodeType!==11)throw Error(f(299));return E(A,S,null,_)},Ge.flushSync=function(A){var S=B.T,_=u.p;try{if(B.T=null,u.p=2,A)return A()}finally{B.T=S,u.p=_,u.d.f()}},Ge.preconnect=function(A,S){typeof A=="string"&&(S?(S=S.crossOrigin,S=typeof S=="string"?S==="use-credentials"?S:"":void 0):S=null,u.d.C(A,S))},Ge.prefetchDNS=function(A){typeof A=="string"&&u.d.D(A)},Ge.preinit=function(A,S){if(typeof A=="string"&&S&&typeof S.as=="string"){var _=S.as,N=D(_,S.crossOrigin),Q=typeof S.integrity=="string"?S.integrity:void 0,se=typeof S.fetchPriority=="string"?S.fetchPriority:void 0;_==="style"?u.d.S(A,typeof S.precedence=="string"?S.precedence:void 0,{crossOrigin:N,integrity:Q,fetchPriority:se}):_==="script"&&u.d.X(A,{crossOrigin:N,integrity:Q,fetchPriority:se,nonce:typeof S.nonce=="string"?S.nonce:void 0})}},Ge.preinitModule=function(A,S){if(typeof A=="string")if(typeof S=="object"&&S!==null){if(S.as==null||S.as==="script"){var _=D(S.as,S.crossOrigin);u.d.M(A,{crossOrigin:_,integrity:typeof S.integrity=="string"?S.integrity:void 0,nonce:typeof S.nonce=="string"?S.nonce:void 0})}}else S==null&&u.d.M(A)},Ge.preload=function(A,S){if(typeof A=="string"&&typeof S=="object"&&S!==null&&typeof S.as=="string"){var _=S.as,N=D(_,S.crossOrigin);u.d.L(A,_,{crossOrigin:N,integrity:typeof S.integrity=="string"?S.integrity:void 0,nonce:typeof S.nonce=="string"?S.nonce:void 0,type:typeof S.type=="string"?S.type:void 0,fetchPriority:typeof S.fetchPriority=="string"?S.fetchPriority:void 0,referrerPolicy:typeof S.referrerPolicy=="string"?S.referrerPolicy:void 0,imageSrcSet:typeof S.imageSrcSet=="string"?S.imageSrcSet:void 0,imageSizes:typeof S.imageSizes=="string"?S.imageSizes:void 0,media:typeof S.media=="string"?S.media:void 0})}},Ge.preloadModule=function(A,S){if(typeof A=="string")if(S){var _=D(S.as,S.crossOrigin);u.d.m(A,{as:typeof S.as=="string"&&S.as!=="script"?S.as:void 0,crossOrigin:_,integrity:typeof S.integrity=="string"?S.integrity:void 0})}else u.d.m(A)},Ge.requestFormReset=function(A){u.d.r(A)},Ge.unstable_batchedUpdates=function(A,S){return A(S)},Ge.useFormState=function(A,S,_){return B.H.useFormState(A,S,_)},Ge.useFormStatus=function(){return B.H.useHostTransitionStatus()},Ge.version="19.2.4",Ge}var Ld;function Id(){if(Ld)return zo.exports;Ld=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(f){console.error(f)}}return o(),zo.exports=Q0(),zo.exports}var qd;function V0(){if(qd)return Cn;qd=1;var o=G0(),f=To(),d=Id();function u(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function b(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function E(e){var t=e,a=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(a=t.return),e=t.return;while(e)}return t.tag===3?a:null}function B(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function D(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function A(e){if(E(e)!==e)throw Error(u(188))}function S(e){var t=e.alternate;if(!t){if(t=E(e),t===null)throw Error(u(188));return t!==e?null:e}for(var a=e,l=t;;){var n=a.return;if(n===null)break;var i=n.alternate;if(i===null){if(l=n.return,l!==null){a=l;continue}break}if(n.child===i.child){for(i=n.child;i;){if(i===a)return A(n),e;if(i===l)return A(n),t;i=i.sibling}throw Error(u(188))}if(a.return!==l.return)a=n,l=i;else{for(var c=!1,s=n.child;s;){if(s===a){c=!0,a=n,l=i;break}if(s===l){c=!0,l=n,a=i;break}s=s.sibling}if(!c){for(s=i.child;s;){if(s===a){c=!0,a=i,l=n;break}if(s===l){c=!0,l=i,a=n;break}s=s.sibling}if(!c)throw Error(u(189))}}if(a.alternate!==l)throw Error(u(190))}if(a.tag!==3)throw Error(u(188));return a.stateNode.current===a?e:t}function _(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=_(e),t!==null)return t;e=e.sibling}return null}var N=Object.assign,Q=Symbol.for("react.element"),se=Symbol.for("react.transitional.element"),le=Symbol.for("react.portal"),F=Symbol.for("react.fragment"),G=Symbol.for("react.strict_mode"),oe=Symbol.for("react.profiler"),ze=Symbol.for("react.consumer"),ge=Symbol.for("react.context"),Ue=Symbol.for("react.forward_ref"),Xe=Symbol.for("react.suspense"),Ze=Symbol.for("react.suspense_list"),te=Symbol.for("react.memo"),Ke=Symbol.for("react.lazy"),Tt=Symbol.for("react.activity"),Ka=Symbol.for("react.memo_cache_sentinel"),At=Symbol.iterator;function Je(e){return e===null||typeof e!="object"?null:(e=At&&e[At]||e["@@iterator"],typeof e=="function"?e:null)}var Ma=Symbol.for("react.client.reference");function Dt(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Ma?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case F:return"Fragment";case oe:return"Profiler";case G:return"StrictMode";case Xe:return"Suspense";case Ze:return"SuspenseList";case Tt:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case le:return"Portal";case ge:return e.displayName||"Context";case ze:return(e._context.displayName||"Context")+".Consumer";case Ue:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case te:return t=e.displayName||null,t!==null?t:Dt(e.type)||"Memo";case Ke:t=e._payload,e=e._init;try{return Dt(e(t))}catch{}}return null}var zt=Array.isArray,w=f.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,j=d.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,V={pending:!1,data:null,method:null,action:null},de=[],ve=-1;function m(e){return{current:e}}function O(e){0>ve||(e.current=de[ve],de[ve]=null,ve--)}function R(e,t){ve++,de[ve]=e.current,e.current=t}var H=m(null),Z=m(null),W=m(null),ue=m(null);function Qe(e,t){switch(R(W,t),R(Z,e),R(H,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?td(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=td(t),e=ad(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}O(H),R(H,e)}function we(){O(H),O(Z),O(W)}function _l(e){e.memoizedState!==null&&R(ue,e);var t=H.current,a=ad(t,e.type);t!==a&&(R(Z,e),R(H,a))}function _n(e){Z.current===e&&(O(H),O(Z)),ue.current===e&&(O(ue),En._currentValue=V)}var $i,No;function wa(e){if($i===void 0)try{throw Error()}catch(a){var t=a.stack.trim().match(/\n( *(at )?)/);$i=t&&t[1]||"",No=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+$i+e+No}var Pi=!1;function ec(e,t){if(!e||Pi)return"";Pi=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(t){var C=function(){throw Error()};if(Object.defineProperty(C.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(C,[])}catch(z){var x=z}Reflect.construct(e,[],C)}else{try{C.call()}catch(z){x=z}e.call(C.prototype)}}else{try{throw Error()}catch(z){x=z}(C=e())&&typeof C.catch=="function"&&C.catch(function(){})}}catch(z){if(z&&x&&typeof z.stack=="string")return[z.stack,x.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var n=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");n&&n.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=l.DetermineComponentFrameRoot(),c=i[0],s=i[1];if(c&&s){var r=c.split(`
`),v=s.split(`
`);for(n=l=0;l<r.length&&!r[l].includes("DetermineComponentFrameRoot");)l++;for(;n<v.length&&!v[n].includes("DetermineComponentFrameRoot");)n++;if(l===r.length||n===v.length)for(l=r.length-1,n=v.length-1;1<=l&&0<=n&&r[l]!==v[n];)n--;for(;1<=l&&0<=n;l--,n--)if(r[l]!==v[n]){if(l!==1||n!==1)do if(l--,n--,0>n||r[l]!==v[n]){var M=`
`+r[l].replace(" at new "," at ");return e.displayName&&M.includes("<anonymous>")&&(M=M.replace("<anonymous>",e.displayName)),M}while(1<=l&&0<=n);break}}}finally{Pi=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?wa(a):""}function fp(e,t){switch(e.tag){case 26:case 27:case 5:return wa(e.type);case 16:return wa("Lazy");case 13:return e.child!==t&&t!==null?wa("Suspense Fallback"):wa("Suspense");case 19:return wa("SuspenseList");case 0:case 15:return ec(e.type,!1);case 11:return ec(e.type.render,!1);case 1:return ec(e.type,!0);case 31:return wa("Activity");default:return""}}function Bo(e){try{var t="",a=null;do t+=fp(e,a),a=e,e=e.return;while(e);return t}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var tc=Object.prototype.hasOwnProperty,ac=o.unstable_scheduleCallback,lc=o.unstable_cancelCallback,dp=o.unstable_shouldYield,pp=o.unstable_requestPaint,at=o.unstable_now,mp=o.unstable_getCurrentPriorityLevel,Do=o.unstable_ImmediatePriority,_o=o.unstable_UserBlockingPriority,jn=o.unstable_NormalPriority,hp=o.unstable_LowPriority,jo=o.unstable_IdlePriority,gp=o.log,vp=o.unstable_setDisableYieldValue,jl=null,lt=null;function $t(e){if(typeof gp=="function"&&vp(e),lt&&typeof lt.setStrictMode=="function")try{lt.setStrictMode(jl,e)}catch{}}var nt=Math.clz32?Math.clz32:xp,bp=Math.log,yp=Math.LN2;function xp(e){return e>>>=0,e===0?32:31-(bp(e)/yp|0)|0}var Rn=256,Un=262144,kn=4194304;function Ta(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Hn(e,t,a){var l=e.pendingLanes;if(l===0)return 0;var n=0,i=e.suspendedLanes,c=e.pingedLanes;e=e.warmLanes;var s=l&134217727;return s!==0?(l=s&~i,l!==0?n=Ta(l):(c&=s,c!==0?n=Ta(c):a||(a=s&~e,a!==0&&(n=Ta(a))))):(s=l&~i,s!==0?n=Ta(s):c!==0?n=Ta(c):a||(a=l&~e,a!==0&&(n=Ta(a)))),n===0?0:t!==0&&t!==n&&(t&i)===0&&(i=n&-n,a=t&-t,i>=a||i===32&&(a&4194048)!==0)?t:n}function Rl(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Sp(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ro(){var e=kn;return kn<<=1,(kn&62914560)===0&&(kn=4194304),e}function nc(e){for(var t=[],a=0;31>a;a++)t.push(e);return t}function Ul(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function zp(e,t,a,l,n,i){var c=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var s=e.entanglements,r=e.expirationTimes,v=e.hiddenUpdates;for(a=c&~a;0<a;){var M=31-nt(a),C=1<<M;s[M]=0,r[M]=-1;var x=v[M];if(x!==null)for(v[M]=null,M=0;M<x.length;M++){var z=x[M];z!==null&&(z.lane&=-536870913)}a&=~C}l!==0&&Uo(e,l,0),i!==0&&n===0&&e.tag!==0&&(e.suspendedLanes|=i&~(c&~t))}function Uo(e,t,a){e.pendingLanes|=t,e.suspendedLanes&=~t;var l=31-nt(t);e.entangledLanes|=t,e.entanglements[l]=e.entanglements[l]|1073741824|a&261930}function ko(e,t){var a=e.entangledLanes|=t;for(e=e.entanglements;a;){var l=31-nt(a),n=1<<l;n&t|e[l]&t&&(e[l]|=t),a&=~n}}function Ho(e,t){var a=t&-t;return a=(a&42)!==0?1:ic(a),(a&(e.suspendedLanes|t))!==0?0:a}function ic(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function cc(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Lo(){var e=j.p;return e!==0?e:(e=window.event,e===void 0?32:wd(e.type))}function qo(e,t){var a=j.p;try{return j.p=e,t()}finally{j.p=a}}var Pt=Math.random().toString(36).slice(2),ke="__reactFiber$"+Pt,Fe="__reactProps$"+Pt,Ja="__reactContainer$"+Pt,sc="__reactEvents$"+Pt,Ep="__reactListeners$"+Pt,Mp="__reactHandles$"+Pt,Yo="__reactResources$"+Pt,kl="__reactMarker$"+Pt;function oc(e){delete e[ke],delete e[Fe],delete e[sc],delete e[Ep],delete e[Mp]}function Fa(e){var t=e[ke];if(t)return t;for(var a=e.parentNode;a;){if(t=a[Ja]||a[ke]){if(a=t.alternate,t.child!==null||a!==null&&a.child!==null)for(e=ud(e);e!==null;){if(a=e[ke])return a;e=ud(e)}return t}e=a,a=e.parentNode}return null}function Wa(e){if(e=e[ke]||e[Ja]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Hl(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(u(33))}function Ia(e){var t=e[Yo];return t||(t=e[Yo]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function je(e){e[kl]=!0}var Go=new Set,Qo={};function Aa(e,t){$a(e,t),$a(e+"Capture",t)}function $a(e,t){for(Qo[e]=t,e=0;e<t.length;e++)Go.add(t[e])}var wp=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Vo={},Xo={};function Tp(e){return tc.call(Xo,e)?!0:tc.call(Vo,e)?!1:wp.test(e)?Xo[e]=!0:(Vo[e]=!0,!1)}function Ln(e,t,a){if(Tp(t))if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var l=t.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+a)}}function qn(e,t,a){if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+a)}}function _t(e,t,a,l){if(l===null)e.removeAttribute(a);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(t,a,""+l)}}function dt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Zo(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Ap(e,t,a){var l=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var n=l.get,i=l.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return n.call(this)},set:function(c){a=""+c,i.call(this,c)}}),Object.defineProperty(e,t,{enumerable:l.enumerable}),{getValue:function(){return a},setValue:function(c){a=""+c},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function uc(e){if(!e._valueTracker){var t=Zo(e)?"checked":"value";e._valueTracker=Ap(e,t,""+e[t])}}function Ko(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var a=t.getValue(),l="";return e&&(l=Zo(e)?e.checked?"true":"false":e.value),e=l,e!==a?(t.setValue(e),!0):!1}function Yn(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Cp=/[\n"\\]/g;function pt(e){return e.replace(Cp,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function rc(e,t,a,l,n,i,c,s){e.name="",c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"?e.type=c:e.removeAttribute("type"),t!=null?c==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+dt(t)):e.value!==""+dt(t)&&(e.value=""+dt(t)):c!=="submit"&&c!=="reset"||e.removeAttribute("value"),t!=null?fc(e,c,dt(t)):a!=null?fc(e,c,dt(a)):l!=null&&e.removeAttribute("value"),n==null&&i!=null&&(e.defaultChecked=!!i),n!=null&&(e.checked=n&&typeof n!="function"&&typeof n!="symbol"),s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"?e.name=""+dt(s):e.removeAttribute("name")}function Jo(e,t,a,l,n,i,c,s){if(i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(e.type=i),t!=null||a!=null){if(!(i!=="submit"&&i!=="reset"||t!=null)){uc(e);return}a=a!=null?""+dt(a):"",t=t!=null?""+dt(t):a,s||t===e.value||(e.value=t),e.defaultValue=t}l=l??n,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=s?e.checked:!!l,e.defaultChecked=!!l,c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"&&(e.name=c),uc(e)}function fc(e,t,a){t==="number"&&Yn(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function Pa(e,t,a,l){if(e=e.options,t){t={};for(var n=0;n<a.length;n++)t["$"+a[n]]=!0;for(a=0;a<e.length;a++)n=t.hasOwnProperty("$"+e[a].value),e[a].selected!==n&&(e[a].selected=n),n&&l&&(e[a].defaultSelected=!0)}else{for(a=""+dt(a),t=null,n=0;n<e.length;n++){if(e[n].value===a){e[n].selected=!0,l&&(e[n].defaultSelected=!0);return}t!==null||e[n].disabled||(t=e[n])}t!==null&&(t.selected=!0)}}function Fo(e,t,a){if(t!=null&&(t=""+dt(t),t!==e.value&&(e.value=t),a==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=a!=null?""+dt(a):""}function Wo(e,t,a,l){if(t==null){if(l!=null){if(a!=null)throw Error(u(92));if(zt(l)){if(1<l.length)throw Error(u(93));l=l[0]}a=l}a==null&&(a=""),t=a}a=dt(t),e.defaultValue=a,l=e.textContent,l===a&&l!==""&&l!==null&&(e.value=l),uc(e)}function el(e,t){if(t){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=t;return}}e.textContent=t}var Op=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Io(e,t,a){var l=t.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?l?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":l?e.setProperty(t,a):typeof a!="number"||a===0||Op.has(t)?t==="float"?e.cssFloat=a:e[t]=(""+a).trim():e[t]=a+"px"}function $o(e,t,a){if(t!=null&&typeof t!="object")throw Error(u(62));if(e=e.style,a!=null){for(var l in a)!a.hasOwnProperty(l)||t!=null&&t.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var n in t)l=t[n],t.hasOwnProperty(n)&&a[n]!==l&&Io(e,n,l)}else for(var i in t)t.hasOwnProperty(i)&&Io(e,i,t[i])}function dc(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Np=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Bp=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Gn(e){return Bp.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function jt(){}var pc=null;function mc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var tl=null,al=null;function Po(e){var t=Wa(e);if(t&&(e=t.stateNode)){var a=e[Fe]||null;e:switch(e=t.stateNode,t.type){case"input":if(rc(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),t=a.name,a.type==="radio"&&t!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+pt(""+t)+'"][type="radio"]'),t=0;t<a.length;t++){var l=a[t];if(l!==e&&l.form===e.form){var n=l[Fe]||null;if(!n)throw Error(u(90));rc(l,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name)}}for(t=0;t<a.length;t++)l=a[t],l.form===e.form&&Ko(l)}break e;case"textarea":Fo(e,a.value,a.defaultValue);break e;case"select":t=a.value,t!=null&&Pa(e,!!a.multiple,t,!1)}}}var hc=!1;function eu(e,t,a){if(hc)return e(t,a);hc=!0;try{var l=e(t);return l}finally{if(hc=!1,(tl!==null||al!==null)&&(Oi(),tl&&(t=tl,e=al,al=tl=null,Po(t),e)))for(t=0;t<e.length;t++)Po(e[t])}}function Ll(e,t){var a=e.stateNode;if(a===null)return null;var l=a[Fe]||null;if(l===null)return null;a=l[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(u(231,t,typeof a));return a}var Rt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),gc=!1;if(Rt)try{var ql={};Object.defineProperty(ql,"passive",{get:function(){gc=!0}}),window.addEventListener("test",ql,ql),window.removeEventListener("test",ql,ql)}catch{gc=!1}var ea=null,vc=null,Qn=null;function tu(){if(Qn)return Qn;var e,t=vc,a=t.length,l,n="value"in ea?ea.value:ea.textContent,i=n.length;for(e=0;e<a&&t[e]===n[e];e++);var c=a-e;for(l=1;l<=c&&t[a-l]===n[i-l];l++);return Qn=n.slice(e,1<l?1-l:void 0)}function Vn(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Xn(){return!0}function au(){return!1}function We(e){function t(a,l,n,i,c){this._reactName=a,this._targetInst=n,this.type=l,this.nativeEvent=i,this.target=c,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(a=e[s],this[s]=a?a(i):i[s]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Xn:au,this.isPropagationStopped=au,this}return N(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Xn)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Xn)},persist:function(){},isPersistent:Xn}),t}var Ca={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Zn=We(Ca),Yl=N({},Ca,{view:0,detail:0}),Dp=We(Yl),bc,yc,Gl,Kn=N({},Yl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Sc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Gl&&(Gl&&e.type==="mousemove"?(bc=e.screenX-Gl.screenX,yc=e.screenY-Gl.screenY):yc=bc=0,Gl=e),bc)},movementY:function(e){return"movementY"in e?e.movementY:yc}}),lu=We(Kn),_p=N({},Kn,{dataTransfer:0}),jp=We(_p),Rp=N({},Yl,{relatedTarget:0}),xc=We(Rp),Up=N({},Ca,{animationName:0,elapsedTime:0,pseudoElement:0}),kp=We(Up),Hp=N({},Ca,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Lp=We(Hp),qp=N({},Ca,{data:0}),nu=We(qp),Yp={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Gp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Qp={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Vp(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Qp[e])?!!t[e]:!1}function Sc(){return Vp}var Xp=N({},Yl,{key:function(e){if(e.key){var t=Yp[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Vn(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Gp[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Sc,charCode:function(e){return e.type==="keypress"?Vn(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Vn(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Zp=We(Xp),Kp=N({},Kn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),iu=We(Kp),Jp=N({},Yl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Sc}),Fp=We(Jp),Wp=N({},Ca,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ip=We(Wp),$p=N({},Kn,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Pp=We($p),em=N({},Ca,{newState:0,oldState:0}),tm=We(em),am=[9,13,27,32],zc=Rt&&"CompositionEvent"in window,Ql=null;Rt&&"documentMode"in document&&(Ql=document.documentMode);var lm=Rt&&"TextEvent"in window&&!Ql,cu=Rt&&(!zc||Ql&&8<Ql&&11>=Ql),su=" ",ou=!1;function uu(e,t){switch(e){case"keyup":return am.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ru(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ll=!1;function nm(e,t){switch(e){case"compositionend":return ru(t);case"keypress":return t.which!==32?null:(ou=!0,su);case"textInput":return e=t.data,e===su&&ou?null:e;default:return null}}function im(e,t){if(ll)return e==="compositionend"||!zc&&uu(e,t)?(e=tu(),Qn=vc=ea=null,ll=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return cu&&t.locale!=="ko"?null:t.data;default:return null}}var cm={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function fu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!cm[e.type]:t==="textarea"}function du(e,t,a,l){tl?al?al.push(l):al=[l]:tl=l,t=Ui(t,"onChange"),0<t.length&&(a=new Zn("onChange","change",null,a,l),e.push({event:a,listeners:t}))}var Vl=null,Xl=null;function sm(e){Ff(e,0)}function Jn(e){var t=Hl(e);if(Ko(t))return e}function pu(e,t){if(e==="change")return t}var mu=!1;if(Rt){var Ec;if(Rt){var Mc="oninput"in document;if(!Mc){var hu=document.createElement("div");hu.setAttribute("oninput","return;"),Mc=typeof hu.oninput=="function"}Ec=Mc}else Ec=!1;mu=Ec&&(!document.documentMode||9<document.documentMode)}function gu(){Vl&&(Vl.detachEvent("onpropertychange",vu),Xl=Vl=null)}function vu(e){if(e.propertyName==="value"&&Jn(Xl)){var t=[];du(t,Xl,e,mc(e)),eu(sm,t)}}function om(e,t,a){e==="focusin"?(gu(),Vl=t,Xl=a,Vl.attachEvent("onpropertychange",vu)):e==="focusout"&&gu()}function um(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Jn(Xl)}function rm(e,t){if(e==="click")return Jn(t)}function fm(e,t){if(e==="input"||e==="change")return Jn(t)}function dm(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var it=typeof Object.is=="function"?Object.is:dm;function Zl(e,t){if(it(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var a=Object.keys(e),l=Object.keys(t);if(a.length!==l.length)return!1;for(l=0;l<a.length;l++){var n=a[l];if(!tc.call(t,n)||!it(e[n],t[n]))return!1}return!0}function bu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function yu(e,t){var a=bu(e);e=0;for(var l;a;){if(a.nodeType===3){if(l=e+a.textContent.length,e<=t&&l>=t)return{node:a,offset:t-e};e=l}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=bu(a)}}function xu(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?xu(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Su(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Yn(e.document);t instanceof e.HTMLIFrameElement;){try{var a=typeof t.contentWindow.location.href=="string"}catch{a=!1}if(a)e=t.contentWindow;else break;t=Yn(e.document)}return t}function wc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var pm=Rt&&"documentMode"in document&&11>=document.documentMode,nl=null,Tc=null,Kl=null,Ac=!1;function zu(e,t,a){var l=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Ac||nl==null||nl!==Yn(l)||(l=nl,"selectionStart"in l&&wc(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Kl&&Zl(Kl,l)||(Kl=l,l=Ui(Tc,"onSelect"),0<l.length&&(t=new Zn("onSelect","select",null,t,a),e.push({event:t,listeners:l}),t.target=nl)))}function Oa(e,t){var a={};return a[e.toLowerCase()]=t.toLowerCase(),a["Webkit"+e]="webkit"+t,a["Moz"+e]="moz"+t,a}var il={animationend:Oa("Animation","AnimationEnd"),animationiteration:Oa("Animation","AnimationIteration"),animationstart:Oa("Animation","AnimationStart"),transitionrun:Oa("Transition","TransitionRun"),transitionstart:Oa("Transition","TransitionStart"),transitioncancel:Oa("Transition","TransitionCancel"),transitionend:Oa("Transition","TransitionEnd")},Cc={},Eu={};Rt&&(Eu=document.createElement("div").style,"AnimationEvent"in window||(delete il.animationend.animation,delete il.animationiteration.animation,delete il.animationstart.animation),"TransitionEvent"in window||delete il.transitionend.transition);function Na(e){if(Cc[e])return Cc[e];if(!il[e])return e;var t=il[e],a;for(a in t)if(t.hasOwnProperty(a)&&a in Eu)return Cc[e]=t[a];return e}var Mu=Na("animationend"),wu=Na("animationiteration"),Tu=Na("animationstart"),mm=Na("transitionrun"),hm=Na("transitionstart"),gm=Na("transitioncancel"),Au=Na("transitionend"),Cu=new Map,Oc="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Oc.push("scrollEnd");function Et(e,t){Cu.set(e,t),Aa(t,[e])}var Fn=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},mt=[],cl=0,Nc=0;function Wn(){for(var e=cl,t=Nc=cl=0;t<e;){var a=mt[t];mt[t++]=null;var l=mt[t];mt[t++]=null;var n=mt[t];mt[t++]=null;var i=mt[t];if(mt[t++]=null,l!==null&&n!==null){var c=l.pending;c===null?n.next=n:(n.next=c.next,c.next=n),l.pending=n}i!==0&&Ou(a,n,i)}}function In(e,t,a,l){mt[cl++]=e,mt[cl++]=t,mt[cl++]=a,mt[cl++]=l,Nc|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function Bc(e,t,a,l){return In(e,t,a,l),$n(e)}function Ba(e,t){return In(e,null,null,t),$n(e)}function Ou(e,t,a){e.lanes|=a;var l=e.alternate;l!==null&&(l.lanes|=a);for(var n=!1,i=e.return;i!==null;)i.childLanes|=a,l=i.alternate,l!==null&&(l.childLanes|=a),i.tag===22&&(e=i.stateNode,e===null||e._visibility&1||(n=!0)),e=i,i=i.return;return e.tag===3?(i=e.stateNode,n&&t!==null&&(n=31-nt(a),e=i.hiddenUpdates,l=e[n],l===null?e[n]=[t]:l.push(t),t.lane=a|536870912),i):null}function $n(e){if(50<gn)throw gn=0,qs=null,Error(u(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var sl={};function vm(e,t,a,l){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ct(e,t,a,l){return new vm(e,t,a,l)}function Dc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ut(e,t){var a=e.alternate;return a===null?(a=ct(e.tag,t,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=t,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,t=e.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Nu(e,t){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,t=a.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Pn(e,t,a,l,n,i){var c=0;if(l=e,typeof e=="function")Dc(e)&&(c=1);else if(typeof e=="string")c=z0(e,a,H.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case Tt:return e=ct(31,a,t,n),e.elementType=Tt,e.lanes=i,e;case F:return Da(a.children,n,i,t);case G:c=8,n|=24;break;case oe:return e=ct(12,a,t,n|2),e.elementType=oe,e.lanes=i,e;case Xe:return e=ct(13,a,t,n),e.elementType=Xe,e.lanes=i,e;case Ze:return e=ct(19,a,t,n),e.elementType=Ze,e.lanes=i,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ge:c=10;break e;case ze:c=9;break e;case Ue:c=11;break e;case te:c=14;break e;case Ke:c=16,l=null;break e}c=29,a=Error(u(130,e===null?"null":typeof e,"")),l=null}return t=ct(c,a,t,n),t.elementType=e,t.type=l,t.lanes=i,t}function Da(e,t,a,l){return e=ct(7,e,l,t),e.lanes=a,e}function _c(e,t,a){return e=ct(6,e,null,t),e.lanes=a,e}function Bu(e){var t=ct(18,null,null,0);return t.stateNode=e,t}function jc(e,t,a){return t=ct(4,e.children!==null?e.children:[],e.key,t),t.lanes=a,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Du=new WeakMap;function ht(e,t){if(typeof e=="object"&&e!==null){var a=Du.get(e);return a!==void 0?a:(t={value:e,source:t,stack:Bo(t)},Du.set(e,t),t)}return{value:e,source:t,stack:Bo(t)}}var ol=[],ul=0,ei=null,Jl=0,gt=[],vt=0,ta=null,Ct=1,Ot="";function kt(e,t){ol[ul++]=Jl,ol[ul++]=ei,ei=e,Jl=t}function _u(e,t,a){gt[vt++]=Ct,gt[vt++]=Ot,gt[vt++]=ta,ta=e;var l=Ct;e=Ot;var n=32-nt(l)-1;l&=~(1<<n),a+=1;var i=32-nt(t)+n;if(30<i){var c=n-n%5;i=(l&(1<<c)-1).toString(32),l>>=c,n-=c,Ct=1<<32-nt(t)+n|a<<n|l,Ot=i+e}else Ct=1<<i|a<<n|l,Ot=e}function Rc(e){e.return!==null&&(kt(e,1),_u(e,1,0))}function Uc(e){for(;e===ei;)ei=ol[--ul],ol[ul]=null,Jl=ol[--ul],ol[ul]=null;for(;e===ta;)ta=gt[--vt],gt[vt]=null,Ot=gt[--vt],gt[vt]=null,Ct=gt[--vt],gt[vt]=null}function ju(e,t){gt[vt++]=Ct,gt[vt++]=Ot,gt[vt++]=ta,Ct=t.id,Ot=t.overflow,ta=e}var He=null,ye=null,ae=!1,aa=null,bt=!1,kc=Error(u(519));function la(e){var t=Error(u(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Fl(ht(t,e)),kc}function Ru(e){var t=e.stateNode,a=e.type,l=e.memoizedProps;switch(t[ke]=e,t[Fe]=l,a){case"dialog":$("cancel",t),$("close",t);break;case"iframe":case"object":case"embed":$("load",t);break;case"video":case"audio":for(a=0;a<bn.length;a++)$(bn[a],t);break;case"source":$("error",t);break;case"img":case"image":case"link":$("error",t),$("load",t);break;case"details":$("toggle",t);break;case"input":$("invalid",t),Jo(t,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":$("invalid",t);break;case"textarea":$("invalid",t),Wo(t,l.value,l.defaultValue,l.children)}a=l.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||t.textContent===""+a||l.suppressHydrationWarning===!0||Pf(t.textContent,a)?(l.popover!=null&&($("beforetoggle",t),$("toggle",t)),l.onScroll!=null&&$("scroll",t),l.onScrollEnd!=null&&$("scrollend",t),l.onClick!=null&&(t.onclick=jt),t=!0):t=!1,t||la(e,!0)}function Uu(e){for(He=e.return;He;)switch(He.tag){case 5:case 31:case 13:bt=!1;return;case 27:case 3:bt=!0;return;default:He=He.return}}function rl(e){if(e!==He)return!1;if(!ae)return Uu(e),ae=!0,!1;var t=e.tag,a;if((a=t!==3&&t!==27)&&((a=t===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||to(e.type,e.memoizedProps)),a=!a),a&&ye&&la(e),Uu(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(317));ye=od(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(317));ye=od(e)}else t===27?(t=ye,va(e.type)?(e=co,co=null,ye=e):ye=t):ye=He?xt(e.stateNode.nextSibling):null;return!0}function _a(){ye=He=null,ae=!1}function Hc(){var e=aa;return e!==null&&(et===null?et=e:et.push.apply(et,e),aa=null),e}function Fl(e){aa===null?aa=[e]:aa.push(e)}var Lc=m(null),ja=null,Ht=null;function na(e,t,a){R(Lc,t._currentValue),t._currentValue=a}function Lt(e){e._currentValue=Lc.current,O(Lc)}function qc(e,t,a){for(;e!==null;){var l=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,l!==null&&(l.childLanes|=t)):l!==null&&(l.childLanes&t)!==t&&(l.childLanes|=t),e===a)break;e=e.return}}function Yc(e,t,a,l){var n=e.child;for(n!==null&&(n.return=e);n!==null;){var i=n.dependencies;if(i!==null){var c=n.child;i=i.firstContext;e:for(;i!==null;){var s=i;i=n;for(var r=0;r<t.length;r++)if(s.context===t[r]){i.lanes|=a,s=i.alternate,s!==null&&(s.lanes|=a),qc(i.return,a,e),l||(c=null);break e}i=s.next}}else if(n.tag===18){if(c=n.return,c===null)throw Error(u(341));c.lanes|=a,i=c.alternate,i!==null&&(i.lanes|=a),qc(c,a,e),c=null}else c=n.child;if(c!==null)c.return=n;else for(c=n;c!==null;){if(c===e){c=null;break}if(n=c.sibling,n!==null){n.return=c.return,c=n;break}c=c.return}n=c}}function fl(e,t,a,l){e=null;for(var n=t,i=!1;n!==null;){if(!i){if((n.flags&524288)!==0)i=!0;else if((n.flags&262144)!==0)break}if(n.tag===10){var c=n.alternate;if(c===null)throw Error(u(387));if(c=c.memoizedProps,c!==null){var s=n.type;it(n.pendingProps.value,c.value)||(e!==null?e.push(s):e=[s])}}else if(n===ue.current){if(c=n.alternate,c===null)throw Error(u(387));c.memoizedState.memoizedState!==n.memoizedState.memoizedState&&(e!==null?e.push(En):e=[En])}n=n.return}e!==null&&Yc(t,e,a,l),t.flags|=262144}function ti(e){for(e=e.firstContext;e!==null;){if(!it(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Ra(e){ja=e,Ht=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Le(e){return ku(ja,e)}function ai(e,t){return ja===null&&Ra(e),ku(e,t)}function ku(e,t){var a=t._currentValue;if(t={context:t,memoizedValue:a,next:null},Ht===null){if(e===null)throw Error(u(308));Ht=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Ht=Ht.next=t;return a}var bm=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(a,l){e.push(l)}};this.abort=function(){t.aborted=!0,e.forEach(function(a){return a()})}},ym=o.unstable_scheduleCallback,xm=o.unstable_NormalPriority,Ce={$$typeof:ge,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Gc(){return{controller:new bm,data:new Map,refCount:0}}function Wl(e){e.refCount--,e.refCount===0&&ym(xm,function(){e.controller.abort()})}var Il=null,Qc=0,dl=0,pl=null;function Sm(e,t){if(Il===null){var a=Il=[];Qc=0,dl=Zs(),pl={status:"pending",value:void 0,then:function(l){a.push(l)}}}return Qc++,t.then(Hu,Hu),t}function Hu(){if(--Qc===0&&Il!==null){pl!==null&&(pl.status="fulfilled");var e=Il;Il=null,dl=0,pl=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function zm(e,t){var a=[],l={status:"pending",value:null,reason:null,then:function(n){a.push(n)}};return e.then(function(){l.status="fulfilled",l.value=t;for(var n=0;n<a.length;n++)(0,a[n])(t)},function(n){for(l.status="rejected",l.reason=n,n=0;n<a.length;n++)(0,a[n])(void 0)}),l}var Lu=w.S;w.S=function(e,t){Ef=at(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&Sm(e,t),Lu!==null&&Lu(e,t)};var Ua=m(null);function Vc(){var e=Ua.current;return e!==null?e:be.pooledCache}function li(e,t){t===null?R(Ua,Ua.current):R(Ua,t.pool)}function qu(){var e=Vc();return e===null?null:{parent:Ce._currentValue,pool:e}}var ml=Error(u(460)),Xc=Error(u(474)),ni=Error(u(542)),ii={then:function(){}};function Yu(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Gu(e,t,a){switch(a=e[a],a===void 0?e.push(t):a!==t&&(t.then(jt,jt),t=a),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Vu(e),e;default:if(typeof t.status=="string")t.then(jt,jt);else{if(e=be,e!==null&&100<e.shellSuspendCounter)throw Error(u(482));e=t,e.status="pending",e.then(function(l){if(t.status==="pending"){var n=t;n.status="fulfilled",n.value=l}},function(l){if(t.status==="pending"){var n=t;n.status="rejected",n.reason=l}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Vu(e),e}throw Ha=t,ml}}function ka(e){try{var t=e._init;return t(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Ha=a,ml):a}}var Ha=null;function Qu(){if(Ha===null)throw Error(u(459));var e=Ha;return Ha=null,e}function Vu(e){if(e===ml||e===ni)throw Error(u(483))}var hl=null,$l=0;function ci(e){var t=$l;return $l+=1,hl===null&&(hl=[]),Gu(hl,e,t)}function Pl(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function si(e,t){throw t.$$typeof===Q?Error(u(525)):(e=Object.prototype.toString.call(t),Error(u(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Xu(e){function t(h,p){if(e){var g=h.deletions;g===null?(h.deletions=[p],h.flags|=16):g.push(p)}}function a(h,p){if(!e)return null;for(;p!==null;)t(h,p),p=p.sibling;return null}function l(h){for(var p=new Map;h!==null;)h.key!==null?p.set(h.key,h):p.set(h.index,h),h=h.sibling;return p}function n(h,p){return h=Ut(h,p),h.index=0,h.sibling=null,h}function i(h,p,g){return h.index=g,e?(g=h.alternate,g!==null?(g=g.index,g<p?(h.flags|=67108866,p):g):(h.flags|=67108866,p)):(h.flags|=1048576,p)}function c(h){return e&&h.alternate===null&&(h.flags|=67108866),h}function s(h,p,g,T){return p===null||p.tag!==6?(p=_c(g,h.mode,T),p.return=h,p):(p=n(p,g),p.return=h,p)}function r(h,p,g,T){var q=g.type;return q===F?M(h,p,g.props.children,T,g.key):p!==null&&(p.elementType===q||typeof q=="object"&&q!==null&&q.$$typeof===Ke&&ka(q)===p.type)?(p=n(p,g.props),Pl(p,g),p.return=h,p):(p=Pn(g.type,g.key,g.props,null,h.mode,T),Pl(p,g),p.return=h,p)}function v(h,p,g,T){return p===null||p.tag!==4||p.stateNode.containerInfo!==g.containerInfo||p.stateNode.implementation!==g.implementation?(p=jc(g,h.mode,T),p.return=h,p):(p=n(p,g.children||[]),p.return=h,p)}function M(h,p,g,T,q){return p===null||p.tag!==7?(p=Da(g,h.mode,T,q),p.return=h,p):(p=n(p,g),p.return=h,p)}function C(h,p,g){if(typeof p=="string"&&p!==""||typeof p=="number"||typeof p=="bigint")return p=_c(""+p,h.mode,g),p.return=h,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case se:return g=Pn(p.type,p.key,p.props,null,h.mode,g),Pl(g,p),g.return=h,g;case le:return p=jc(p,h.mode,g),p.return=h,p;case Ke:return p=ka(p),C(h,p,g)}if(zt(p)||Je(p))return p=Da(p,h.mode,g,null),p.return=h,p;if(typeof p.then=="function")return C(h,ci(p),g);if(p.$$typeof===ge)return C(h,ai(h,p),g);si(h,p)}return null}function x(h,p,g,T){var q=p!==null?p.key:null;if(typeof g=="string"&&g!==""||typeof g=="number"||typeof g=="bigint")return q!==null?null:s(h,p,""+g,T);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case se:return g.key===q?r(h,p,g,T):null;case le:return g.key===q?v(h,p,g,T):null;case Ke:return g=ka(g),x(h,p,g,T)}if(zt(g)||Je(g))return q!==null?null:M(h,p,g,T,null);if(typeof g.then=="function")return x(h,p,ci(g),T);if(g.$$typeof===ge)return x(h,p,ai(h,g),T);si(h,g)}return null}function z(h,p,g,T,q){if(typeof T=="string"&&T!==""||typeof T=="number"||typeof T=="bigint")return h=h.get(g)||null,s(p,h,""+T,q);if(typeof T=="object"&&T!==null){switch(T.$$typeof){case se:return h=h.get(T.key===null?g:T.key)||null,r(p,h,T,q);case le:return h=h.get(T.key===null?g:T.key)||null,v(p,h,T,q);case Ke:return T=ka(T),z(h,p,g,T,q)}if(zt(T)||Je(T))return h=h.get(g)||null,M(p,h,T,q,null);if(typeof T.then=="function")return z(h,p,g,ci(T),q);if(T.$$typeof===ge)return z(h,p,g,ai(p,T),q);si(p,T)}return null}function k(h,p,g,T){for(var q=null,ne=null,L=p,J=p=0,ee=null;L!==null&&J<g.length;J++){L.index>J?(ee=L,L=null):ee=L.sibling;var ie=x(h,L,g[J],T);if(ie===null){L===null&&(L=ee);break}e&&L&&ie.alternate===null&&t(h,L),p=i(ie,p,J),ne===null?q=ie:ne.sibling=ie,ne=ie,L=ee}if(J===g.length)return a(h,L),ae&&kt(h,J),q;if(L===null){for(;J<g.length;J++)L=C(h,g[J],T),L!==null&&(p=i(L,p,J),ne===null?q=L:ne.sibling=L,ne=L);return ae&&kt(h,J),q}for(L=l(L);J<g.length;J++)ee=z(L,h,J,g[J],T),ee!==null&&(e&&ee.alternate!==null&&L.delete(ee.key===null?J:ee.key),p=i(ee,p,J),ne===null?q=ee:ne.sibling=ee,ne=ee);return e&&L.forEach(function(za){return t(h,za)}),ae&&kt(h,J),q}function Y(h,p,g,T){if(g==null)throw Error(u(151));for(var q=null,ne=null,L=p,J=p=0,ee=null,ie=g.next();L!==null&&!ie.done;J++,ie=g.next()){L.index>J?(ee=L,L=null):ee=L.sibling;var za=x(h,L,ie.value,T);if(za===null){L===null&&(L=ee);break}e&&L&&za.alternate===null&&t(h,L),p=i(za,p,J),ne===null?q=za:ne.sibling=za,ne=za,L=ee}if(ie.done)return a(h,L),ae&&kt(h,J),q;if(L===null){for(;!ie.done;J++,ie=g.next())ie=C(h,ie.value,T),ie!==null&&(p=i(ie,p,J),ne===null?q=ie:ne.sibling=ie,ne=ie);return ae&&kt(h,J),q}for(L=l(L);!ie.done;J++,ie=g.next())ie=z(L,h,J,ie.value,T),ie!==null&&(e&&ie.alternate!==null&&L.delete(ie.key===null?J:ie.key),p=i(ie,p,J),ne===null?q=ie:ne.sibling=ie,ne=ie);return e&&L.forEach(function(_0){return t(h,_0)}),ae&&kt(h,J),q}function he(h,p,g,T){if(typeof g=="object"&&g!==null&&g.type===F&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case se:e:{for(var q=g.key;p!==null;){if(p.key===q){if(q=g.type,q===F){if(p.tag===7){a(h,p.sibling),T=n(p,g.props.children),T.return=h,h=T;break e}}else if(p.elementType===q||typeof q=="object"&&q!==null&&q.$$typeof===Ke&&ka(q)===p.type){a(h,p.sibling),T=n(p,g.props),Pl(T,g),T.return=h,h=T;break e}a(h,p);break}else t(h,p);p=p.sibling}g.type===F?(T=Da(g.props.children,h.mode,T,g.key),T.return=h,h=T):(T=Pn(g.type,g.key,g.props,null,h.mode,T),Pl(T,g),T.return=h,h=T)}return c(h);case le:e:{for(q=g.key;p!==null;){if(p.key===q)if(p.tag===4&&p.stateNode.containerInfo===g.containerInfo&&p.stateNode.implementation===g.implementation){a(h,p.sibling),T=n(p,g.children||[]),T.return=h,h=T;break e}else{a(h,p);break}else t(h,p);p=p.sibling}T=jc(g,h.mode,T),T.return=h,h=T}return c(h);case Ke:return g=ka(g),he(h,p,g,T)}if(zt(g))return k(h,p,g,T);if(Je(g)){if(q=Je(g),typeof q!="function")throw Error(u(150));return g=q.call(g),Y(h,p,g,T)}if(typeof g.then=="function")return he(h,p,ci(g),T);if(g.$$typeof===ge)return he(h,p,ai(h,g),T);si(h,g)}return typeof g=="string"&&g!==""||typeof g=="number"||typeof g=="bigint"?(g=""+g,p!==null&&p.tag===6?(a(h,p.sibling),T=n(p,g),T.return=h,h=T):(a(h,p),T=_c(g,h.mode,T),T.return=h,h=T),c(h)):a(h,p)}return function(h,p,g,T){try{$l=0;var q=he(h,p,g,T);return hl=null,q}catch(L){if(L===ml||L===ni)throw L;var ne=ct(29,L,null,h.mode);return ne.lanes=T,ne.return=h,ne}}}var La=Xu(!0),Zu=Xu(!1),ia=!1;function Zc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Kc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function ca(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function sa(e,t,a){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(ce&2)!==0){var n=l.pending;return n===null?t.next=t:(t.next=n.next,n.next=t),l.pending=t,t=$n(e),Ou(e,null,a),t}return In(e,l,t,a),$n(e)}function en(e,t,a){if(t=t.updateQueue,t!==null&&(t=t.shared,(a&4194048)!==0)){var l=t.lanes;l&=e.pendingLanes,a|=l,t.lanes=a,ko(e,a)}}function Jc(e,t){var a=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,a===l)){var n=null,i=null;if(a=a.firstBaseUpdate,a!==null){do{var c={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};i===null?n=i=c:i=i.next=c,a=a.next}while(a!==null);i===null?n=i=t:i=i.next=t}else n=i=t;a={baseState:l.baseState,firstBaseUpdate:n,lastBaseUpdate:i,shared:l.shared,callbacks:l.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=t:e.next=t,a.lastBaseUpdate=t}var Fc=!1;function tn(){if(Fc){var e=pl;if(e!==null)throw e}}function an(e,t,a,l){Fc=!1;var n=e.updateQueue;ia=!1;var i=n.firstBaseUpdate,c=n.lastBaseUpdate,s=n.shared.pending;if(s!==null){n.shared.pending=null;var r=s,v=r.next;r.next=null,c===null?i=v:c.next=v,c=r;var M=e.alternate;M!==null&&(M=M.updateQueue,s=M.lastBaseUpdate,s!==c&&(s===null?M.firstBaseUpdate=v:s.next=v,M.lastBaseUpdate=r))}if(i!==null){var C=n.baseState;c=0,M=v=r=null,s=i;do{var x=s.lane&-536870913,z=x!==s.lane;if(z?(P&x)===x:(l&x)===x){x!==0&&x===dl&&(Fc=!0),M!==null&&(M=M.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});e:{var k=e,Y=s;x=t;var he=a;switch(Y.tag){case 1:if(k=Y.payload,typeof k=="function"){C=k.call(he,C,x);break e}C=k;break e;case 3:k.flags=k.flags&-65537|128;case 0:if(k=Y.payload,x=typeof k=="function"?k.call(he,C,x):k,x==null)break e;C=N({},C,x);break e;case 2:ia=!0}}x=s.callback,x!==null&&(e.flags|=64,z&&(e.flags|=8192),z=n.callbacks,z===null?n.callbacks=[x]:z.push(x))}else z={lane:x,tag:s.tag,payload:s.payload,callback:s.callback,next:null},M===null?(v=M=z,r=C):M=M.next=z,c|=x;if(s=s.next,s===null){if(s=n.shared.pending,s===null)break;z=s,s=z.next,z.next=null,n.lastBaseUpdate=z,n.shared.pending=null}}while(!0);M===null&&(r=C),n.baseState=r,n.firstBaseUpdate=v,n.lastBaseUpdate=M,i===null&&(n.shared.lanes=0),da|=c,e.lanes=c,e.memoizedState=C}}function Ku(e,t){if(typeof e!="function")throw Error(u(191,e));e.call(t)}function Ju(e,t){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Ku(a[e],t)}var gl=m(null),oi=m(0);function Fu(e,t){e=Jt,R(oi,e),R(gl,t),Jt=e|t.baseLanes}function Wc(){R(oi,Jt),R(gl,gl.current)}function Ic(){Jt=oi.current,O(gl),O(oi)}var st=m(null),yt=null;function oa(e){var t=e.alternate;R(Te,Te.current&1),R(st,e),yt===null&&(t===null||gl.current!==null||t.memoizedState!==null)&&(yt=e)}function $c(e){R(Te,Te.current),R(st,e),yt===null&&(yt=e)}function Wu(e){e.tag===22?(R(Te,Te.current),R(st,e),yt===null&&(yt=e)):ua()}function ua(){R(Te,Te.current),R(st,st.current)}function ot(e){O(st),yt===e&&(yt=null),O(Te)}var Te=m(0);function ui(e){for(var t=e;t!==null;){if(t.tag===13){var a=t.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||no(a)||io(a)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var qt=0,K=null,pe=null,Oe=null,ri=!1,vl=!1,qa=!1,fi=0,ln=0,bl=null,Em=0;function Ee(){throw Error(u(321))}function Pc(e,t){if(t===null)return!1;for(var a=0;a<t.length&&a<e.length;a++)if(!it(e[a],t[a]))return!1;return!0}function es(e,t,a,l,n,i){return qt=i,K=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,w.H=e===null||e.memoizedState===null?_r:hs,qa=!1,i=a(l,n),qa=!1,vl&&(i=$u(t,a,l,n)),Iu(e),i}function Iu(e){w.H=sn;var t=pe!==null&&pe.next!==null;if(qt=0,Oe=pe=K=null,ri=!1,ln=0,bl=null,t)throw Error(u(300));e===null||Ne||(e=e.dependencies,e!==null&&ti(e)&&(Ne=!0))}function $u(e,t,a,l){K=e;var n=0;do{if(vl&&(bl=null),ln=0,vl=!1,25<=n)throw Error(u(301));if(n+=1,Oe=pe=null,e.updateQueue!=null){var i=e.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,i.memoCache!=null&&(i.memoCache.index=0)}w.H=jr,i=t(a,l)}while(vl);return i}function Mm(){var e=w.H,t=e.useState()[0];return t=typeof t.then=="function"?nn(t):t,e=e.useState()[0],(pe!==null?pe.memoizedState:null)!==e&&(K.flags|=1024),t}function ts(){var e=fi!==0;return fi=0,e}function as(e,t,a){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a}function ls(e){if(ri){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}ri=!1}qt=0,Oe=pe=K=null,vl=!1,ln=fi=0,bl=null}function Ve(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Oe===null?K.memoizedState=Oe=e:Oe=Oe.next=e,Oe}function Ae(){if(pe===null){var e=K.alternate;e=e!==null?e.memoizedState:null}else e=pe.next;var t=Oe===null?K.memoizedState:Oe.next;if(t!==null)Oe=t,pe=e;else{if(e===null)throw K.alternate===null?Error(u(467)):Error(u(310));pe=e,e={memoizedState:pe.memoizedState,baseState:pe.baseState,baseQueue:pe.baseQueue,queue:pe.queue,next:null},Oe===null?K.memoizedState=Oe=e:Oe=Oe.next=e}return Oe}function di(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function nn(e){var t=ln;return ln+=1,bl===null&&(bl=[]),e=Gu(bl,e,t),t=K,(Oe===null?t.memoizedState:Oe.next)===null&&(t=t.alternate,w.H=t===null||t.memoizedState===null?_r:hs),e}function pi(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return nn(e);if(e.$$typeof===ge)return Le(e)}throw Error(u(438,String(e)))}function ns(e){var t=null,a=K.updateQueue;if(a!==null&&(t=a.memoCache),t==null){var l=K.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(t={data:l.data.map(function(n){return n.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),a===null&&(a=di(),K.updateQueue=a),a.memoCache=t,a=t.data[t.index],a===void 0)for(a=t.data[t.index]=Array(e),l=0;l<e;l++)a[l]=Ka;return t.index++,a}function Yt(e,t){return typeof t=="function"?t(e):t}function mi(e){var t=Ae();return is(t,pe,e)}function is(e,t,a){var l=e.queue;if(l===null)throw Error(u(311));l.lastRenderedReducer=a;var n=e.baseQueue,i=l.pending;if(i!==null){if(n!==null){var c=n.next;n.next=i.next,i.next=c}t.baseQueue=n=i,l.pending=null}if(i=e.baseState,n===null)e.memoizedState=i;else{t=n.next;var s=c=null,r=null,v=t,M=!1;do{var C=v.lane&-536870913;if(C!==v.lane?(P&C)===C:(qt&C)===C){var x=v.revertLane;if(x===0)r!==null&&(r=r.next={lane:0,revertLane:0,gesture:null,action:v.action,hasEagerState:v.hasEagerState,eagerState:v.eagerState,next:null}),C===dl&&(M=!0);else if((qt&x)===x){v=v.next,x===dl&&(M=!0);continue}else C={lane:0,revertLane:v.revertLane,gesture:null,action:v.action,hasEagerState:v.hasEagerState,eagerState:v.eagerState,next:null},r===null?(s=r=C,c=i):r=r.next=C,K.lanes|=x,da|=x;C=v.action,qa&&a(i,C),i=v.hasEagerState?v.eagerState:a(i,C)}else x={lane:C,revertLane:v.revertLane,gesture:v.gesture,action:v.action,hasEagerState:v.hasEagerState,eagerState:v.eagerState,next:null},r===null?(s=r=x,c=i):r=r.next=x,K.lanes|=C,da|=C;v=v.next}while(v!==null&&v!==t);if(r===null?c=i:r.next=s,!it(i,e.memoizedState)&&(Ne=!0,M&&(a=pl,a!==null)))throw a;e.memoizedState=i,e.baseState=c,e.baseQueue=r,l.lastRenderedState=i}return n===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function cs(e){var t=Ae(),a=t.queue;if(a===null)throw Error(u(311));a.lastRenderedReducer=e;var l=a.dispatch,n=a.pending,i=t.memoizedState;if(n!==null){a.pending=null;var c=n=n.next;do i=e(i,c.action),c=c.next;while(c!==n);it(i,t.memoizedState)||(Ne=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),a.lastRenderedState=i}return[i,l]}function Pu(e,t,a){var l=K,n=Ae(),i=ae;if(i){if(a===void 0)throw Error(u(407));a=a()}else a=t();var c=!it((pe||n).memoizedState,a);if(c&&(n.memoizedState=a,Ne=!0),n=n.queue,us(ar.bind(null,l,n,e),[e]),n.getSnapshot!==t||c||Oe!==null&&Oe.memoizedState.tag&1){if(l.flags|=2048,yl(9,{destroy:void 0},tr.bind(null,l,n,a,t),null),be===null)throw Error(u(349));i||(qt&127)!==0||er(l,t,a)}return a}function er(e,t,a){e.flags|=16384,e={getSnapshot:t,value:a},t=K.updateQueue,t===null?(t=di(),K.updateQueue=t,t.stores=[e]):(a=t.stores,a===null?t.stores=[e]:a.push(e))}function tr(e,t,a,l){t.value=a,t.getSnapshot=l,lr(t)&&nr(e)}function ar(e,t,a){return a(function(){lr(t)&&nr(e)})}function lr(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!it(e,a)}catch{return!0}}function nr(e){var t=Ba(e,2);t!==null&&tt(t,e,2)}function ss(e){var t=Ve();if(typeof e=="function"){var a=e;if(e=a(),qa){$t(!0);try{a()}finally{$t(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Yt,lastRenderedState:e},t}function ir(e,t,a,l){return e.baseState=a,is(e,pe,typeof l=="function"?l:Yt)}function wm(e,t,a,l,n){if(vi(e))throw Error(u(485));if(e=t.action,e!==null){var i={payload:n,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(c){i.listeners.push(c)}};w.T!==null?a(!0):i.isTransition=!1,l(i),a=t.pending,a===null?(i.next=t.pending=i,cr(t,i)):(i.next=a.next,t.pending=a.next=i)}}function cr(e,t){var a=t.action,l=t.payload,n=e.state;if(t.isTransition){var i=w.T,c={};w.T=c;try{var s=a(n,l),r=w.S;r!==null&&r(c,s),sr(e,t,s)}catch(v){os(e,t,v)}finally{i!==null&&c.types!==null&&(i.types=c.types),w.T=i}}else try{i=a(n,l),sr(e,t,i)}catch(v){os(e,t,v)}}function sr(e,t,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(l){or(e,t,l)},function(l){return os(e,t,l)}):or(e,t,a)}function or(e,t,a){t.status="fulfilled",t.value=a,ur(t),e.state=a,t=e.pending,t!==null&&(a=t.next,a===t?e.pending=null:(a=a.next,t.next=a,cr(e,a)))}function os(e,t,a){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do t.status="rejected",t.reason=a,ur(t),t=t.next;while(t!==l)}e.action=null}function ur(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function rr(e,t){return t}function fr(e,t){if(ae){var a=be.formState;if(a!==null){e:{var l=K;if(ae){if(ye){t:{for(var n=ye,i=bt;n.nodeType!==8;){if(!i){n=null;break t}if(n=xt(n.nextSibling),n===null){n=null;break t}}i=n.data,n=i==="F!"||i==="F"?n:null}if(n){ye=xt(n.nextSibling),l=n.data==="F!";break e}}la(l)}l=!1}l&&(t=a[0])}}return a=Ve(),a.memoizedState=a.baseState=t,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:rr,lastRenderedState:t},a.queue=l,a=Nr.bind(null,K,l),l.dispatch=a,l=ss(!1),i=ms.bind(null,K,!1,l.queue),l=Ve(),n={state:t,dispatch:null,action:e,pending:null},l.queue=n,a=wm.bind(null,K,n,i,a),n.dispatch=a,l.memoizedState=e,[t,a,!1]}function dr(e){var t=Ae();return pr(t,pe,e)}function pr(e,t,a){if(t=is(e,t,rr)[0],e=mi(Yt)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var l=nn(t)}catch(c){throw c===ml?ni:c}else l=t;t=Ae();var n=t.queue,i=n.dispatch;return a!==t.memoizedState&&(K.flags|=2048,yl(9,{destroy:void 0},Tm.bind(null,n,a),null)),[l,i,e]}function Tm(e,t){e.action=t}function mr(e){var t=Ae(),a=pe;if(a!==null)return pr(t,a,e);Ae(),t=t.memoizedState,a=Ae();var l=a.queue.dispatch;return a.memoizedState=e,[t,l,!1]}function yl(e,t,a,l){return e={tag:e,create:a,deps:l,inst:t,next:null},t=K.updateQueue,t===null&&(t=di(),K.updateQueue=t),a=t.lastEffect,a===null?t.lastEffect=e.next=e:(l=a.next,a.next=e,e.next=l,t.lastEffect=e),e}function hr(){return Ae().memoizedState}function hi(e,t,a,l){var n=Ve();K.flags|=e,n.memoizedState=yl(1|t,{destroy:void 0},a,l===void 0?null:l)}function gi(e,t,a,l){var n=Ae();l=l===void 0?null:l;var i=n.memoizedState.inst;pe!==null&&l!==null&&Pc(l,pe.memoizedState.deps)?n.memoizedState=yl(t,i,a,l):(K.flags|=e,n.memoizedState=yl(1|t,i,a,l))}function gr(e,t){hi(8390656,8,e,t)}function us(e,t){gi(2048,8,e,t)}function Am(e){K.flags|=4;var t=K.updateQueue;if(t===null)t=di(),K.updateQueue=t,t.events=[e];else{var a=t.events;a===null?t.events=[e]:a.push(e)}}function vr(e){var t=Ae().memoizedState;return Am({ref:t,nextImpl:e}),function(){if((ce&2)!==0)throw Error(u(440));return t.impl.apply(void 0,arguments)}}function br(e,t){return gi(4,2,e,t)}function yr(e,t){return gi(4,4,e,t)}function xr(e,t){if(typeof t=="function"){e=e();var a=t(e);return function(){typeof a=="function"?a():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Sr(e,t,a){a=a!=null?a.concat([e]):null,gi(4,4,xr.bind(null,t,e),a)}function rs(){}function zr(e,t){var a=Ae();t=t===void 0?null:t;var l=a.memoizedState;return t!==null&&Pc(t,l[1])?l[0]:(a.memoizedState=[e,t],e)}function Er(e,t){var a=Ae();t=t===void 0?null:t;var l=a.memoizedState;if(t!==null&&Pc(t,l[1]))return l[0];if(l=e(),qa){$t(!0);try{e()}finally{$t(!1)}}return a.memoizedState=[l,t],l}function fs(e,t,a){return a===void 0||(qt&1073741824)!==0&&(P&261930)===0?e.memoizedState=t:(e.memoizedState=a,e=wf(),K.lanes|=e,da|=e,a)}function Mr(e,t,a,l){return it(a,t)?a:gl.current!==null?(e=fs(e,a,l),it(e,t)||(Ne=!0),e):(qt&42)===0||(qt&1073741824)!==0&&(P&261930)===0?(Ne=!0,e.memoizedState=a):(e=wf(),K.lanes|=e,da|=e,t)}function wr(e,t,a,l,n){var i=j.p;j.p=i!==0&&8>i?i:8;var c=w.T,s={};w.T=s,ms(e,!1,t,a);try{var r=n(),v=w.S;if(v!==null&&v(s,r),r!==null&&typeof r=="object"&&typeof r.then=="function"){var M=zm(r,l);cn(e,t,M,ft(e))}else cn(e,t,l,ft(e))}catch(C){cn(e,t,{then:function(){},status:"rejected",reason:C},ft())}finally{j.p=i,c!==null&&s.types!==null&&(c.types=s.types),w.T=c}}function Cm(){}function ds(e,t,a,l){if(e.tag!==5)throw Error(u(476));var n=Tr(e).queue;wr(e,n,t,V,a===null?Cm:function(){return Ar(e),a(l)})}function Tr(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:V,baseState:V,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Yt,lastRenderedState:V},next:null};var a={};return t.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Yt,lastRenderedState:a},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Ar(e){var t=Tr(e);t.next===null&&(t=e.alternate.memoizedState),cn(e,t.next.queue,{},ft())}function ps(){return Le(En)}function Cr(){return Ae().memoizedState}function Or(){return Ae().memoizedState}function Om(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var a=ft();e=ca(a);var l=sa(t,e,a);l!==null&&(tt(l,t,a),en(l,t,a)),t={cache:Gc()},e.payload=t;return}t=t.return}}function Nm(e,t,a){var l=ft();a={lane:l,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},vi(e)?Br(t,a):(a=Bc(e,t,a,l),a!==null&&(tt(a,e,l),Dr(a,t,l)))}function Nr(e,t,a){var l=ft();cn(e,t,a,l)}function cn(e,t,a,l){var n={lane:l,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(vi(e))Br(t,n);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var c=t.lastRenderedState,s=i(c,a);if(n.hasEagerState=!0,n.eagerState=s,it(s,c))return In(e,t,n,0),be===null&&Wn(),!1}catch{}if(a=Bc(e,t,n,l),a!==null)return tt(a,e,l),Dr(a,t,l),!0}return!1}function ms(e,t,a,l){if(l={lane:2,revertLane:Zs(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},vi(e)){if(t)throw Error(u(479))}else t=Bc(e,a,l,2),t!==null&&tt(t,e,2)}function vi(e){var t=e.alternate;return e===K||t!==null&&t===K}function Br(e,t){vl=ri=!0;var a=e.pending;a===null?t.next=t:(t.next=a.next,a.next=t),e.pending=t}function Dr(e,t,a){if((a&4194048)!==0){var l=t.lanes;l&=e.pendingLanes,a|=l,t.lanes=a,ko(e,a)}}var sn={readContext:Le,use:pi,useCallback:Ee,useContext:Ee,useEffect:Ee,useImperativeHandle:Ee,useLayoutEffect:Ee,useInsertionEffect:Ee,useMemo:Ee,useReducer:Ee,useRef:Ee,useState:Ee,useDebugValue:Ee,useDeferredValue:Ee,useTransition:Ee,useSyncExternalStore:Ee,useId:Ee,useHostTransitionStatus:Ee,useFormState:Ee,useActionState:Ee,useOptimistic:Ee,useMemoCache:Ee,useCacheRefresh:Ee};sn.useEffectEvent=Ee;var _r={readContext:Le,use:pi,useCallback:function(e,t){return Ve().memoizedState=[e,t===void 0?null:t],e},useContext:Le,useEffect:gr,useImperativeHandle:function(e,t,a){a=a!=null?a.concat([e]):null,hi(4194308,4,xr.bind(null,t,e),a)},useLayoutEffect:function(e,t){return hi(4194308,4,e,t)},useInsertionEffect:function(e,t){hi(4,2,e,t)},useMemo:function(e,t){var a=Ve();t=t===void 0?null:t;var l=e();if(qa){$t(!0);try{e()}finally{$t(!1)}}return a.memoizedState=[l,t],l},useReducer:function(e,t,a){var l=Ve();if(a!==void 0){var n=a(t);if(qa){$t(!0);try{a(t)}finally{$t(!1)}}}else n=t;return l.memoizedState=l.baseState=n,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},l.queue=e,e=e.dispatch=Nm.bind(null,K,e),[l.memoizedState,e]},useRef:function(e){var t=Ve();return e={current:e},t.memoizedState=e},useState:function(e){e=ss(e);var t=e.queue,a=Nr.bind(null,K,t);return t.dispatch=a,[e.memoizedState,a]},useDebugValue:rs,useDeferredValue:function(e,t){var a=Ve();return fs(a,e,t)},useTransition:function(){var e=ss(!1);return e=wr.bind(null,K,e.queue,!0,!1),Ve().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,a){var l=K,n=Ve();if(ae){if(a===void 0)throw Error(u(407));a=a()}else{if(a=t(),be===null)throw Error(u(349));(P&127)!==0||er(l,t,a)}n.memoizedState=a;var i={value:a,getSnapshot:t};return n.queue=i,gr(ar.bind(null,l,i,e),[e]),l.flags|=2048,yl(9,{destroy:void 0},tr.bind(null,l,i,a,t),null),a},useId:function(){var e=Ve(),t=be.identifierPrefix;if(ae){var a=Ot,l=Ct;a=(l&~(1<<32-nt(l)-1)).toString(32)+a,t="_"+t+"R_"+a,a=fi++,0<a&&(t+="H"+a.toString(32)),t+="_"}else a=Em++,t="_"+t+"r_"+a.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:ps,useFormState:fr,useActionState:fr,useOptimistic:function(e){var t=Ve();t.memoizedState=t.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=a,t=ms.bind(null,K,!0,a),a.dispatch=t,[e,t]},useMemoCache:ns,useCacheRefresh:function(){return Ve().memoizedState=Om.bind(null,K)},useEffectEvent:function(e){var t=Ve(),a={impl:e};return t.memoizedState=a,function(){if((ce&2)!==0)throw Error(u(440));return a.impl.apply(void 0,arguments)}}},hs={readContext:Le,use:pi,useCallback:zr,useContext:Le,useEffect:us,useImperativeHandle:Sr,useInsertionEffect:br,useLayoutEffect:yr,useMemo:Er,useReducer:mi,useRef:hr,useState:function(){return mi(Yt)},useDebugValue:rs,useDeferredValue:function(e,t){var a=Ae();return Mr(a,pe.memoizedState,e,t)},useTransition:function(){var e=mi(Yt)[0],t=Ae().memoizedState;return[typeof e=="boolean"?e:nn(e),t]},useSyncExternalStore:Pu,useId:Cr,useHostTransitionStatus:ps,useFormState:dr,useActionState:dr,useOptimistic:function(e,t){var a=Ae();return ir(a,pe,e,t)},useMemoCache:ns,useCacheRefresh:Or};hs.useEffectEvent=vr;var jr={readContext:Le,use:pi,useCallback:zr,useContext:Le,useEffect:us,useImperativeHandle:Sr,useInsertionEffect:br,useLayoutEffect:yr,useMemo:Er,useReducer:cs,useRef:hr,useState:function(){return cs(Yt)},useDebugValue:rs,useDeferredValue:function(e,t){var a=Ae();return pe===null?fs(a,e,t):Mr(a,pe.memoizedState,e,t)},useTransition:function(){var e=cs(Yt)[0],t=Ae().memoizedState;return[typeof e=="boolean"?e:nn(e),t]},useSyncExternalStore:Pu,useId:Cr,useHostTransitionStatus:ps,useFormState:mr,useActionState:mr,useOptimistic:function(e,t){var a=Ae();return pe!==null?ir(a,pe,e,t):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:ns,useCacheRefresh:Or};jr.useEffectEvent=vr;function gs(e,t,a,l){t=e.memoizedState,a=a(l,t),a=a==null?t:N({},t,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var vs={enqueueSetState:function(e,t,a){e=e._reactInternals;var l=ft(),n=ca(l);n.payload=t,a!=null&&(n.callback=a),t=sa(e,n,l),t!==null&&(tt(t,e,l),en(t,e,l))},enqueueReplaceState:function(e,t,a){e=e._reactInternals;var l=ft(),n=ca(l);n.tag=1,n.payload=t,a!=null&&(n.callback=a),t=sa(e,n,l),t!==null&&(tt(t,e,l),en(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var a=ft(),l=ca(a);l.tag=2,t!=null&&(l.callback=t),t=sa(e,l,a),t!==null&&(tt(t,e,a),en(t,e,a))}};function Rr(e,t,a,l,n,i,c){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,i,c):t.prototype&&t.prototype.isPureReactComponent?!Zl(a,l)||!Zl(n,i):!0}function Ur(e,t,a,l){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(a,l),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(a,l),t.state!==e&&vs.enqueueReplaceState(t,t.state,null)}function Ya(e,t){var a=t;if("ref"in t){a={};for(var l in t)l!=="ref"&&(a[l]=t[l])}if(e=e.defaultProps){a===t&&(a=N({},a));for(var n in e)a[n]===void 0&&(a[n]=e[n])}return a}function kr(e){Fn(e)}function Hr(e){console.error(e)}function Lr(e){Fn(e)}function bi(e,t){try{var a=e.onUncaughtError;a(t.value,{componentStack:t.stack})}catch(l){setTimeout(function(){throw l})}}function qr(e,t,a){try{var l=e.onCaughtError;l(a.value,{componentStack:a.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(n){setTimeout(function(){throw n})}}function bs(e,t,a){return a=ca(a),a.tag=3,a.payload={element:null},a.callback=function(){bi(e,t)},a}function Yr(e){return e=ca(e),e.tag=3,e}function Gr(e,t,a,l){var n=a.type.getDerivedStateFromError;if(typeof n=="function"){var i=l.value;e.payload=function(){return n(i)},e.callback=function(){qr(t,a,l)}}var c=a.stateNode;c!==null&&typeof c.componentDidCatch=="function"&&(e.callback=function(){qr(t,a,l),typeof n!="function"&&(pa===null?pa=new Set([this]):pa.add(this));var s=l.stack;this.componentDidCatch(l.value,{componentStack:s!==null?s:""})})}function Bm(e,t,a,l,n){if(a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(t=a.alternate,t!==null&&fl(t,a,n,!0),a=st.current,a!==null){switch(a.tag){case 31:case 13:return yt===null?Ni():a.alternate===null&&Me===0&&(Me=3),a.flags&=-257,a.flags|=65536,a.lanes=n,l===ii?a.flags|=16384:(t=a.updateQueue,t===null?a.updateQueue=new Set([l]):t.add(l),Qs(e,l,n)),!1;case 22:return a.flags|=65536,l===ii?a.flags|=16384:(t=a.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([l])},a.updateQueue=t):(a=t.retryQueue,a===null?t.retryQueue=new Set([l]):a.add(l)),Qs(e,l,n)),!1}throw Error(u(435,a.tag))}return Qs(e,l,n),Ni(),!1}if(ae)return t=st.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=n,l!==kc&&(e=Error(u(422),{cause:l}),Fl(ht(e,a)))):(l!==kc&&(t=Error(u(423),{cause:l}),Fl(ht(t,a))),e=e.current.alternate,e.flags|=65536,n&=-n,e.lanes|=n,l=ht(l,a),n=bs(e.stateNode,l,n),Jc(e,n),Me!==4&&(Me=2)),!1;var i=Error(u(520),{cause:l});if(i=ht(i,a),hn===null?hn=[i]:hn.push(i),Me!==4&&(Me=2),t===null)return!0;l=ht(l,a),a=t;do{switch(a.tag){case 3:return a.flags|=65536,e=n&-n,a.lanes|=e,e=bs(a.stateNode,l,e),Jc(a,e),!1;case 1:if(t=a.type,i=a.stateNode,(a.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||i!==null&&typeof i.componentDidCatch=="function"&&(pa===null||!pa.has(i))))return a.flags|=65536,n&=-n,a.lanes|=n,n=Yr(n),Gr(n,e,a,l),Jc(a,n),!1}a=a.return}while(a!==null);return!1}var ys=Error(u(461)),Ne=!1;function qe(e,t,a,l){t.child=e===null?Zu(t,null,a,l):La(t,e.child,a,l)}function Qr(e,t,a,l,n){a=a.render;var i=t.ref;if("ref"in l){var c={};for(var s in l)s!=="ref"&&(c[s]=l[s])}else c=l;return Ra(t),l=es(e,t,a,c,i,n),s=ts(),e!==null&&!Ne?(as(e,t,n),Gt(e,t,n)):(ae&&s&&Rc(t),t.flags|=1,qe(e,t,l,n),t.child)}function Vr(e,t,a,l,n){if(e===null){var i=a.type;return typeof i=="function"&&!Dc(i)&&i.defaultProps===void 0&&a.compare===null?(t.tag=15,t.type=i,Xr(e,t,i,l,n)):(e=Pn(a.type,null,l,t,t.mode,n),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!As(e,n)){var c=i.memoizedProps;if(a=a.compare,a=a!==null?a:Zl,a(c,l)&&e.ref===t.ref)return Gt(e,t,n)}return t.flags|=1,e=Ut(i,l),e.ref=t.ref,e.return=t,t.child=e}function Xr(e,t,a,l,n){if(e!==null){var i=e.memoizedProps;if(Zl(i,l)&&e.ref===t.ref)if(Ne=!1,t.pendingProps=l=i,As(e,n))(e.flags&131072)!==0&&(Ne=!0);else return t.lanes=e.lanes,Gt(e,t,n)}return xs(e,t,a,l,n)}function Zr(e,t,a,l){var n=l.children,i=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((t.flags&128)!==0){if(i=i!==null?i.baseLanes|a:a,e!==null){for(l=t.child=e.child,n=0;l!==null;)n=n|l.lanes|l.childLanes,l=l.sibling;l=n&~i}else l=0,t.child=null;return Kr(e,t,i,a,l)}if((a&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&li(t,i!==null?i.cachePool:null),i!==null?Fu(t,i):Wc(),Wu(t);else return l=t.lanes=536870912,Kr(e,t,i!==null?i.baseLanes|a:a,a,l)}else i!==null?(li(t,i.cachePool),Fu(t,i),ua(),t.memoizedState=null):(e!==null&&li(t,null),Wc(),ua());return qe(e,t,n,a),t.child}function on(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Kr(e,t,a,l,n){var i=Vc();return i=i===null?null:{parent:Ce._currentValue,pool:i},t.memoizedState={baseLanes:a,cachePool:i},e!==null&&li(t,null),Wc(),Wu(t),e!==null&&fl(e,t,l,!0),t.childLanes=n,null}function yi(e,t){return t=Si({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function Jr(e,t,a){return La(t,e.child,null,a),e=yi(t,t.pendingProps),e.flags|=2,ot(t),t.memoizedState=null,e}function Dm(e,t,a){var l=t.pendingProps,n=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(ae){if(l.mode==="hidden")return e=yi(t,l),t.lanes=536870912,on(null,e);if($c(t),(e=ye)?(e=sd(e,bt),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:ta!==null?{id:Ct,overflow:Ot}:null,retryLane:536870912,hydrationErrors:null},a=Bu(e),a.return=t,t.child=a,He=t,ye=null)):e=null,e===null)throw la(t);return t.lanes=536870912,null}return yi(t,l)}var i=e.memoizedState;if(i!==null){var c=i.dehydrated;if($c(t),n)if(t.flags&256)t.flags&=-257,t=Jr(e,t,a);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(u(558));else if(Ne||fl(e,t,a,!1),n=(a&e.childLanes)!==0,Ne||n){if(l=be,l!==null&&(c=Ho(l,a),c!==0&&c!==i.retryLane))throw i.retryLane=c,Ba(e,c),tt(l,e,c),ys;Ni(),t=Jr(e,t,a)}else e=i.treeContext,ye=xt(c.nextSibling),He=t,ae=!0,aa=null,bt=!1,e!==null&&ju(t,e),t=yi(t,l),t.flags|=4096;return t}return e=Ut(e.child,{mode:l.mode,children:l.children}),e.ref=t.ref,t.child=e,e.return=t,e}function xi(e,t){var a=t.ref;if(a===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(u(284));(e===null||e.ref!==a)&&(t.flags|=4194816)}}function xs(e,t,a,l,n){return Ra(t),a=es(e,t,a,l,void 0,n),l=ts(),e!==null&&!Ne?(as(e,t,n),Gt(e,t,n)):(ae&&l&&Rc(t),t.flags|=1,qe(e,t,a,n),t.child)}function Fr(e,t,a,l,n,i){return Ra(t),t.updateQueue=null,a=$u(t,l,a,n),Iu(e),l=ts(),e!==null&&!Ne?(as(e,t,i),Gt(e,t,i)):(ae&&l&&Rc(t),t.flags|=1,qe(e,t,a,i),t.child)}function Wr(e,t,a,l,n){if(Ra(t),t.stateNode===null){var i=sl,c=a.contextType;typeof c=="object"&&c!==null&&(i=Le(c)),i=new a(l,i),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=vs,t.stateNode=i,i._reactInternals=t,i=t.stateNode,i.props=l,i.state=t.memoizedState,i.refs={},Zc(t),c=a.contextType,i.context=typeof c=="object"&&c!==null?Le(c):sl,i.state=t.memoizedState,c=a.getDerivedStateFromProps,typeof c=="function"&&(gs(t,a,c,l),i.state=t.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(c=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),c!==i.state&&vs.enqueueReplaceState(i,i.state,null),an(t,l,i,n),tn(),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308),l=!0}else if(e===null){i=t.stateNode;var s=t.memoizedProps,r=Ya(a,s);i.props=r;var v=i.context,M=a.contextType;c=sl,typeof M=="object"&&M!==null&&(c=Le(M));var C=a.getDerivedStateFromProps;M=typeof C=="function"||typeof i.getSnapshotBeforeUpdate=="function",s=t.pendingProps!==s,M||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(s||v!==c)&&Ur(t,i,l,c),ia=!1;var x=t.memoizedState;i.state=x,an(t,l,i,n),tn(),v=t.memoizedState,s||x!==v||ia?(typeof C=="function"&&(gs(t,a,C,l),v=t.memoizedState),(r=ia||Rr(t,a,r,l,x,v,c))?(M||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=l,t.memoizedState=v),i.props=l,i.state=v,i.context=c,l=r):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),l=!1)}else{i=t.stateNode,Kc(e,t),c=t.memoizedProps,M=Ya(a,c),i.props=M,C=t.pendingProps,x=i.context,v=a.contextType,r=sl,typeof v=="object"&&v!==null&&(r=Le(v)),s=a.getDerivedStateFromProps,(v=typeof s=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(c!==C||x!==r)&&Ur(t,i,l,r),ia=!1,x=t.memoizedState,i.state=x,an(t,l,i,n),tn();var z=t.memoizedState;c!==C||x!==z||ia||e!==null&&e.dependencies!==null&&ti(e.dependencies)?(typeof s=="function"&&(gs(t,a,s,l),z=t.memoizedState),(M=ia||Rr(t,a,M,l,x,z,r)||e!==null&&e.dependencies!==null&&ti(e.dependencies))?(v||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(l,z,r),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(l,z,r)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||c===e.memoizedProps&&x===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&x===e.memoizedState||(t.flags|=1024),t.memoizedProps=l,t.memoizedState=z),i.props=l,i.state=z,i.context=r,l=M):(typeof i.componentDidUpdate!="function"||c===e.memoizedProps&&x===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&x===e.memoizedState||(t.flags|=1024),l=!1)}return i=l,xi(e,t),l=(t.flags&128)!==0,i||l?(i=t.stateNode,a=l&&typeof a.getDerivedStateFromError!="function"?null:i.render(),t.flags|=1,e!==null&&l?(t.child=La(t,e.child,null,n),t.child=La(t,null,a,n)):qe(e,t,a,n),t.memoizedState=i.state,e=t.child):e=Gt(e,t,n),e}function Ir(e,t,a,l){return _a(),t.flags|=256,qe(e,t,a,l),t.child}var Ss={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function zs(e){return{baseLanes:e,cachePool:qu()}}function Es(e,t,a){return e=e!==null?e.childLanes&~a:0,t&&(e|=rt),e}function $r(e,t,a){var l=t.pendingProps,n=!1,i=(t.flags&128)!==0,c;if((c=i)||(c=e!==null&&e.memoizedState===null?!1:(Te.current&2)!==0),c&&(n=!0,t.flags&=-129),c=(t.flags&32)!==0,t.flags&=-33,e===null){if(ae){if(n?oa(t):ua(),(e=ye)?(e=sd(e,bt),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:ta!==null?{id:Ct,overflow:Ot}:null,retryLane:536870912,hydrationErrors:null},a=Bu(e),a.return=t,t.child=a,He=t,ye=null)):e=null,e===null)throw la(t);return io(e)?t.lanes=32:t.lanes=536870912,null}var s=l.children;return l=l.fallback,n?(ua(),n=t.mode,s=Si({mode:"hidden",children:s},n),l=Da(l,n,a,null),s.return=t,l.return=t,s.sibling=l,t.child=s,l=t.child,l.memoizedState=zs(a),l.childLanes=Es(e,c,a),t.memoizedState=Ss,on(null,l)):(oa(t),Ms(t,s))}var r=e.memoizedState;if(r!==null&&(s=r.dehydrated,s!==null)){if(i)t.flags&256?(oa(t),t.flags&=-257,t=ws(e,t,a)):t.memoizedState!==null?(ua(),t.child=e.child,t.flags|=128,t=null):(ua(),s=l.fallback,n=t.mode,l=Si({mode:"visible",children:l.children},n),s=Da(s,n,a,null),s.flags|=2,l.return=t,s.return=t,l.sibling=s,t.child=l,La(t,e.child,null,a),l=t.child,l.memoizedState=zs(a),l.childLanes=Es(e,c,a),t.memoizedState=Ss,t=on(null,l));else if(oa(t),io(s)){if(c=s.nextSibling&&s.nextSibling.dataset,c)var v=c.dgst;c=v,l=Error(u(419)),l.stack="",l.digest=c,Fl({value:l,source:null,stack:null}),t=ws(e,t,a)}else if(Ne||fl(e,t,a,!1),c=(a&e.childLanes)!==0,Ne||c){if(c=be,c!==null&&(l=Ho(c,a),l!==0&&l!==r.retryLane))throw r.retryLane=l,Ba(e,l),tt(c,e,l),ys;no(s)||Ni(),t=ws(e,t,a)}else no(s)?(t.flags|=192,t.child=e.child,t=null):(e=r.treeContext,ye=xt(s.nextSibling),He=t,ae=!0,aa=null,bt=!1,e!==null&&ju(t,e),t=Ms(t,l.children),t.flags|=4096);return t}return n?(ua(),s=l.fallback,n=t.mode,r=e.child,v=r.sibling,l=Ut(r,{mode:"hidden",children:l.children}),l.subtreeFlags=r.subtreeFlags&65011712,v!==null?s=Ut(v,s):(s=Da(s,n,a,null),s.flags|=2),s.return=t,l.return=t,l.sibling=s,t.child=l,on(null,l),l=t.child,s=e.child.memoizedState,s===null?s=zs(a):(n=s.cachePool,n!==null?(r=Ce._currentValue,n=n.parent!==r?{parent:r,pool:r}:n):n=qu(),s={baseLanes:s.baseLanes|a,cachePool:n}),l.memoizedState=s,l.childLanes=Es(e,c,a),t.memoizedState=Ss,on(e.child,l)):(oa(t),a=e.child,e=a.sibling,a=Ut(a,{mode:"visible",children:l.children}),a.return=t,a.sibling=null,e!==null&&(c=t.deletions,c===null?(t.deletions=[e],t.flags|=16):c.push(e)),t.child=a,t.memoizedState=null,a)}function Ms(e,t){return t=Si({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Si(e,t){return e=ct(22,e,null,t),e.lanes=0,e}function ws(e,t,a){return La(t,e.child,null,a),e=Ms(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Pr(e,t,a){e.lanes|=t;var l=e.alternate;l!==null&&(l.lanes|=t),qc(e.return,t,a)}function Ts(e,t,a,l,n,i){var c=e.memoizedState;c===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:l,tail:a,tailMode:n,treeForkCount:i}:(c.isBackwards=t,c.rendering=null,c.renderingStartTime=0,c.last=l,c.tail=a,c.tailMode=n,c.treeForkCount=i)}function ef(e,t,a){var l=t.pendingProps,n=l.revealOrder,i=l.tail;l=l.children;var c=Te.current,s=(c&2)!==0;if(s?(c=c&1|2,t.flags|=128):c&=1,R(Te,c),qe(e,t,l,a),l=ae?Jl:0,!s&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Pr(e,a,t);else if(e.tag===19)Pr(e,a,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(n){case"forwards":for(a=t.child,n=null;a!==null;)e=a.alternate,e!==null&&ui(e)===null&&(n=a),a=a.sibling;a=n,a===null?(n=t.child,t.child=null):(n=a.sibling,a.sibling=null),Ts(t,!1,n,a,i,l);break;case"backwards":case"unstable_legacy-backwards":for(a=null,n=t.child,t.child=null;n!==null;){if(e=n.alternate,e!==null&&ui(e)===null){t.child=n;break}e=n.sibling,n.sibling=a,a=n,n=e}Ts(t,!0,a,null,i,l);break;case"together":Ts(t,!1,null,null,void 0,l);break;default:t.memoizedState=null}return t.child}function Gt(e,t,a){if(e!==null&&(t.dependencies=e.dependencies),da|=t.lanes,(a&t.childLanes)===0)if(e!==null){if(fl(e,t,a,!1),(a&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(u(153));if(t.child!==null){for(e=t.child,a=Ut(e,e.pendingProps),t.child=a,a.return=t;e.sibling!==null;)e=e.sibling,a=a.sibling=Ut(e,e.pendingProps),a.return=t;a.sibling=null}return t.child}function As(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&ti(e)))}function _m(e,t,a){switch(t.tag){case 3:Qe(t,t.stateNode.containerInfo),na(t,Ce,e.memoizedState.cache),_a();break;case 27:case 5:_l(t);break;case 4:Qe(t,t.stateNode.containerInfo);break;case 10:na(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,$c(t),null;break;case 13:var l=t.memoizedState;if(l!==null)return l.dehydrated!==null?(oa(t),t.flags|=128,null):(a&t.child.childLanes)!==0?$r(e,t,a):(oa(t),e=Gt(e,t,a),e!==null?e.sibling:null);oa(t);break;case 19:var n=(e.flags&128)!==0;if(l=(a&t.childLanes)!==0,l||(fl(e,t,a,!1),l=(a&t.childLanes)!==0),n){if(l)return ef(e,t,a);t.flags|=128}if(n=t.memoizedState,n!==null&&(n.rendering=null,n.tail=null,n.lastEffect=null),R(Te,Te.current),l)break;return null;case 22:return t.lanes=0,Zr(e,t,a,t.pendingProps);case 24:na(t,Ce,e.memoizedState.cache)}return Gt(e,t,a)}function tf(e,t,a){if(e!==null)if(e.memoizedProps!==t.pendingProps)Ne=!0;else{if(!As(e,a)&&(t.flags&128)===0)return Ne=!1,_m(e,t,a);Ne=(e.flags&131072)!==0}else Ne=!1,ae&&(t.flags&1048576)!==0&&_u(t,Jl,t.index);switch(t.lanes=0,t.tag){case 16:e:{var l=t.pendingProps;if(e=ka(t.elementType),t.type=e,typeof e=="function")Dc(e)?(l=Ya(e,l),t.tag=1,t=Wr(null,t,e,l,a)):(t.tag=0,t=xs(null,t,e,l,a));else{if(e!=null){var n=e.$$typeof;if(n===Ue){t.tag=11,t=Qr(null,t,e,l,a);break e}else if(n===te){t.tag=14,t=Vr(null,t,e,l,a);break e}}throw t=Dt(e)||e,Error(u(306,t,""))}}return t;case 0:return xs(e,t,t.type,t.pendingProps,a);case 1:return l=t.type,n=Ya(l,t.pendingProps),Wr(e,t,l,n,a);case 3:e:{if(Qe(t,t.stateNode.containerInfo),e===null)throw Error(u(387));l=t.pendingProps;var i=t.memoizedState;n=i.element,Kc(e,t),an(t,l,null,a);var c=t.memoizedState;if(l=c.cache,na(t,Ce,l),l!==i.cache&&Yc(t,[Ce],a,!0),tn(),l=c.element,i.isDehydrated)if(i={element:l,isDehydrated:!1,cache:c.cache},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){t=Ir(e,t,l,a);break e}else if(l!==n){n=ht(Error(u(424)),t),Fl(n),t=Ir(e,t,l,a);break e}else for(e=t.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,ye=xt(e.firstChild),He=t,ae=!0,aa=null,bt=!0,a=Zu(t,null,l,a),t.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(_a(),l===n){t=Gt(e,t,a);break e}qe(e,t,l,a)}t=t.child}return t;case 26:return xi(e,t),e===null?(a=pd(t.type,null,t.pendingProps,null))?t.memoizedState=a:ae||(a=t.type,e=t.pendingProps,l=ki(W.current).createElement(a),l[ke]=t,l[Fe]=e,Ye(l,a,e),je(l),t.stateNode=l):t.memoizedState=pd(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return _l(t),e===null&&ae&&(l=t.stateNode=rd(t.type,t.pendingProps,W.current),He=t,bt=!0,n=ye,va(t.type)?(co=n,ye=xt(l.firstChild)):ye=n),qe(e,t,t.pendingProps.children,a),xi(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&ae&&((n=l=ye)&&(l=u0(l,t.type,t.pendingProps,bt),l!==null?(t.stateNode=l,He=t,ye=xt(l.firstChild),bt=!1,n=!0):n=!1),n||la(t)),_l(t),n=t.type,i=t.pendingProps,c=e!==null?e.memoizedProps:null,l=i.children,to(n,i)?l=null:c!==null&&to(n,c)&&(t.flags|=32),t.memoizedState!==null&&(n=es(e,t,Mm,null,null,a),En._currentValue=n),xi(e,t),qe(e,t,l,a),t.child;case 6:return e===null&&ae&&((e=a=ye)&&(a=r0(a,t.pendingProps,bt),a!==null?(t.stateNode=a,He=t,ye=null,e=!0):e=!1),e||la(t)),null;case 13:return $r(e,t,a);case 4:return Qe(t,t.stateNode.containerInfo),l=t.pendingProps,e===null?t.child=La(t,null,l,a):qe(e,t,l,a),t.child;case 11:return Qr(e,t,t.type,t.pendingProps,a);case 7:return qe(e,t,t.pendingProps,a),t.child;case 8:return qe(e,t,t.pendingProps.children,a),t.child;case 12:return qe(e,t,t.pendingProps.children,a),t.child;case 10:return l=t.pendingProps,na(t,t.type,l.value),qe(e,t,l.children,a),t.child;case 9:return n=t.type._context,l=t.pendingProps.children,Ra(t),n=Le(n),l=l(n),t.flags|=1,qe(e,t,l,a),t.child;case 14:return Vr(e,t,t.type,t.pendingProps,a);case 15:return Xr(e,t,t.type,t.pendingProps,a);case 19:return ef(e,t,a);case 31:return Dm(e,t,a);case 22:return Zr(e,t,a,t.pendingProps);case 24:return Ra(t),l=Le(Ce),e===null?(n=Vc(),n===null&&(n=be,i=Gc(),n.pooledCache=i,i.refCount++,i!==null&&(n.pooledCacheLanes|=a),n=i),t.memoizedState={parent:l,cache:n},Zc(t),na(t,Ce,n)):((e.lanes&a)!==0&&(Kc(e,t),an(t,null,null,a),tn()),n=e.memoizedState,i=t.memoizedState,n.parent!==l?(n={parent:l,cache:l},t.memoizedState=n,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=n),na(t,Ce,l)):(l=i.cache,na(t,Ce,l),l!==n.cache&&Yc(t,[Ce],a,!0))),qe(e,t,t.pendingProps.children,a),t.child;case 29:throw t.pendingProps}throw Error(u(156,t.tag))}function Qt(e){e.flags|=4}function Cs(e,t,a,l,n){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(n&335544128)===n)if(e.stateNode.complete)e.flags|=8192;else if(Of())e.flags|=8192;else throw Ha=ii,Xc}else e.flags&=-16777217}function af(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!bd(t))if(Of())e.flags|=8192;else throw Ha=ii,Xc}function zi(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Ro():536870912,e.lanes|=t,El|=t)}function un(e,t){if(!ae)switch(e.tailMode){case"hidden":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function xe(e){var t=e.alternate!==null&&e.alternate.child===e.child,a=0,l=0;if(t)for(var n=e.child;n!==null;)a|=n.lanes|n.childLanes,l|=n.subtreeFlags&65011712,l|=n.flags&65011712,n.return=e,n=n.sibling;else for(n=e.child;n!==null;)a|=n.lanes|n.childLanes,l|=n.subtreeFlags,l|=n.flags,n.return=e,n=n.sibling;return e.subtreeFlags|=l,e.childLanes=a,t}function jm(e,t,a){var l=t.pendingProps;switch(Uc(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return xe(t),null;case 1:return xe(t),null;case 3:return a=t.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),t.memoizedState.cache!==l&&(t.flags|=2048),Lt(Ce),we(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(rl(t)?Qt(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Hc())),xe(t),null;case 26:var n=t.type,i=t.memoizedState;return e===null?(Qt(t),i!==null?(xe(t),af(t,i)):(xe(t),Cs(t,n,null,l,a))):i?i!==e.memoizedState?(Qt(t),xe(t),af(t,i)):(xe(t),t.flags&=-16777217):(e=e.memoizedProps,e!==l&&Qt(t),xe(t),Cs(t,n,e,l,a)),null;case 27:if(_n(t),a=W.current,n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==l&&Qt(t);else{if(!l){if(t.stateNode===null)throw Error(u(166));return xe(t),null}e=H.current,rl(t)?Ru(t):(e=rd(n,l,a),t.stateNode=e,Qt(t))}return xe(t),null;case 5:if(_n(t),n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==l&&Qt(t);else{if(!l){if(t.stateNode===null)throw Error(u(166));return xe(t),null}if(i=H.current,rl(t))Ru(t);else{var c=ki(W.current);switch(i){case 1:i=c.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:i=c.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":i=c.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":i=c.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":i=c.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild);break;case"select":i=typeof l.is=="string"?c.createElement("select",{is:l.is}):c.createElement("select"),l.multiple?i.multiple=!0:l.size&&(i.size=l.size);break;default:i=typeof l.is=="string"?c.createElement(n,{is:l.is}):c.createElement(n)}}i[ke]=t,i[Fe]=l;e:for(c=t.child;c!==null;){if(c.tag===5||c.tag===6)i.appendChild(c.stateNode);else if(c.tag!==4&&c.tag!==27&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===t)break e;for(;c.sibling===null;){if(c.return===null||c.return===t)break e;c=c.return}c.sibling.return=c.return,c=c.sibling}t.stateNode=i;e:switch(Ye(i,n,l),n){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}l&&Qt(t)}}return xe(t),Cs(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,a),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==l&&Qt(t);else{if(typeof l!="string"&&t.stateNode===null)throw Error(u(166));if(e=W.current,rl(t)){if(e=t.stateNode,a=t.memoizedProps,l=null,n=He,n!==null)switch(n.tag){case 27:case 5:l=n.memoizedProps}e[ke]=t,e=!!(e.nodeValue===a||l!==null&&l.suppressHydrationWarning===!0||Pf(e.nodeValue,a)),e||la(t,!0)}else e=ki(e).createTextNode(l),e[ke]=t,t.stateNode=e}return xe(t),null;case 31:if(a=t.memoizedState,e===null||e.memoizedState!==null){if(l=rl(t),a!==null){if(e===null){if(!l)throw Error(u(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(557));e[ke]=t}else _a(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;xe(t),e=!1}else a=Hc(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return t.flags&256?(ot(t),t):(ot(t),null);if((t.flags&128)!==0)throw Error(u(558))}return xe(t),null;case 13:if(l=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(n=rl(t),l!==null&&l.dehydrated!==null){if(e===null){if(!n)throw Error(u(318));if(n=t.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(u(317));n[ke]=t}else _a(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;xe(t),n=!1}else n=Hc(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),n=!0;if(!n)return t.flags&256?(ot(t),t):(ot(t),null)}return ot(t),(t.flags&128)!==0?(t.lanes=a,t):(a=l!==null,e=e!==null&&e.memoizedState!==null,a&&(l=t.child,n=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(n=l.alternate.memoizedState.cachePool.pool),i=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(i=l.memoizedState.cachePool.pool),i!==n&&(l.flags|=2048)),a!==e&&a&&(t.child.flags|=8192),zi(t,t.updateQueue),xe(t),null);case 4:return we(),e===null&&Ws(t.stateNode.containerInfo),xe(t),null;case 10:return Lt(t.type),xe(t),null;case 19:if(O(Te),l=t.memoizedState,l===null)return xe(t),null;if(n=(t.flags&128)!==0,i=l.rendering,i===null)if(n)un(l,!1);else{if(Me!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(i=ui(e),i!==null){for(t.flags|=128,un(l,!1),e=i.updateQueue,t.updateQueue=e,zi(t,e),t.subtreeFlags=0,e=a,a=t.child;a!==null;)Nu(a,e),a=a.sibling;return R(Te,Te.current&1|2),ae&&kt(t,l.treeForkCount),t.child}e=e.sibling}l.tail!==null&&at()>Ai&&(t.flags|=128,n=!0,un(l,!1),t.lanes=4194304)}else{if(!n)if(e=ui(i),e!==null){if(t.flags|=128,n=!0,e=e.updateQueue,t.updateQueue=e,zi(t,e),un(l,!0),l.tail===null&&l.tailMode==="hidden"&&!i.alternate&&!ae)return xe(t),null}else 2*at()-l.renderingStartTime>Ai&&a!==536870912&&(t.flags|=128,n=!0,un(l,!1),t.lanes=4194304);l.isBackwards?(i.sibling=t.child,t.child=i):(e=l.last,e!==null?e.sibling=i:t.child=i,l.last=i)}return l.tail!==null?(e=l.tail,l.rendering=e,l.tail=e.sibling,l.renderingStartTime=at(),e.sibling=null,a=Te.current,R(Te,n?a&1|2:a&1),ae&&kt(t,l.treeForkCount),e):(xe(t),null);case 22:case 23:return ot(t),Ic(),l=t.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(t.flags|=8192):l&&(t.flags|=8192),l?(a&536870912)!==0&&(t.flags&128)===0&&(xe(t),t.subtreeFlags&6&&(t.flags|=8192)):xe(t),a=t.updateQueue,a!==null&&zi(t,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),l=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),l!==a&&(t.flags|=2048),e!==null&&O(Ua),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),Lt(Ce),xe(t),null;case 25:return null;case 30:return null}throw Error(u(156,t.tag))}function Rm(e,t){switch(Uc(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Lt(Ce),we(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return _n(t),null;case 31:if(t.memoizedState!==null){if(ot(t),t.alternate===null)throw Error(u(340));_a()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(ot(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(u(340));_a()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return O(Te),null;case 4:return we(),null;case 10:return Lt(t.type),null;case 22:case 23:return ot(t),Ic(),e!==null&&O(Ua),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Lt(Ce),null;case 25:return null;default:return null}}function lf(e,t){switch(Uc(t),t.tag){case 3:Lt(Ce),we();break;case 26:case 27:case 5:_n(t);break;case 4:we();break;case 31:t.memoizedState!==null&&ot(t);break;case 13:ot(t);break;case 19:O(Te);break;case 10:Lt(t.type);break;case 22:case 23:ot(t),Ic(),e!==null&&O(Ua);break;case 24:Lt(Ce)}}function rn(e,t){try{var a=t.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var n=l.next;a=n;do{if((a.tag&e)===e){l=void 0;var i=a.create,c=a.inst;l=i(),c.destroy=l}a=a.next}while(a!==n)}}catch(s){fe(t,t.return,s)}}function ra(e,t,a){try{var l=t.updateQueue,n=l!==null?l.lastEffect:null;if(n!==null){var i=n.next;l=i;do{if((l.tag&e)===e){var c=l.inst,s=c.destroy;if(s!==void 0){c.destroy=void 0,n=t;var r=a,v=s;try{v()}catch(M){fe(n,r,M)}}}l=l.next}while(l!==i)}}catch(M){fe(t,t.return,M)}}function nf(e){var t=e.updateQueue;if(t!==null){var a=e.stateNode;try{Ju(t,a)}catch(l){fe(e,e.return,l)}}}function cf(e,t,a){a.props=Ya(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(l){fe(e,t,l)}}function fn(e,t){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof a=="function"?e.refCleanup=a(l):a.current=l}}catch(n){fe(e,t,n)}}function Nt(e,t){var a=e.ref,l=e.refCleanup;if(a!==null)if(typeof l=="function")try{l()}catch(n){fe(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(n){fe(e,t,n)}else a.current=null}function sf(e){var t=e.type,a=e.memoizedProps,l=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":a.autoFocus&&l.focus();break e;case"img":a.src?l.src=a.src:a.srcSet&&(l.srcset=a.srcSet)}}catch(n){fe(e,e.return,n)}}function Os(e,t,a){try{var l=e.stateNode;l0(l,e.type,a,t),l[Fe]=t}catch(n){fe(e,e.return,n)}}function of(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&va(e.type)||e.tag===4}function Ns(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||of(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&va(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Bs(e,t,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,t):(t=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,t.appendChild(e),a=a._reactRootContainer,a!=null||t.onclick!==null||(t.onclick=jt));else if(l!==4&&(l===27&&va(e.type)&&(a=e.stateNode,t=null),e=e.child,e!==null))for(Bs(e,t,a),e=e.sibling;e!==null;)Bs(e,t,a),e=e.sibling}function Ei(e,t,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?a.insertBefore(e,t):a.appendChild(e);else if(l!==4&&(l===27&&va(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Ei(e,t,a),e=e.sibling;e!==null;)Ei(e,t,a),e=e.sibling}function uf(e){var t=e.stateNode,a=e.memoizedProps;try{for(var l=e.type,n=t.attributes;n.length;)t.removeAttributeNode(n[0]);Ye(t,l,a),t[ke]=e,t[Fe]=a}catch(i){fe(e,e.return,i)}}var Vt=!1,Be=!1,Ds=!1,rf=typeof WeakSet=="function"?WeakSet:Set,Re=null;function Um(e,t){if(e=e.containerInfo,Ps=Vi,e=Su(e),wc(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var l=a.getSelection&&a.getSelection();if(l&&l.rangeCount!==0){a=l.anchorNode;var n=l.anchorOffset,i=l.focusNode;l=l.focusOffset;try{a.nodeType,i.nodeType}catch{a=null;break e}var c=0,s=-1,r=-1,v=0,M=0,C=e,x=null;t:for(;;){for(var z;C!==a||n!==0&&C.nodeType!==3||(s=c+n),C!==i||l!==0&&C.nodeType!==3||(r=c+l),C.nodeType===3&&(c+=C.nodeValue.length),(z=C.firstChild)!==null;)x=C,C=z;for(;;){if(C===e)break t;if(x===a&&++v===n&&(s=c),x===i&&++M===l&&(r=c),(z=C.nextSibling)!==null)break;C=x,x=C.parentNode}C=z}a=s===-1||r===-1?null:{start:s,end:r}}else a=null}a=a||{start:0,end:0}}else a=null;for(eo={focusedElem:e,selectionRange:a},Vi=!1,Re=t;Re!==null;)if(t=Re,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,Re=e;else for(;Re!==null;){switch(t=Re,i=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)n=e[a],n.ref.impl=n.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&i!==null){e=void 0,a=t,n=i.memoizedProps,i=i.memoizedState,l=a.stateNode;try{var k=Ya(a.type,n);e=l.getSnapshotBeforeUpdate(k,i),l.__reactInternalSnapshotBeforeUpdate=e}catch(Y){fe(a,a.return,Y)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,a=e.nodeType,a===9)lo(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":lo(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(u(163))}if(e=t.sibling,e!==null){e.return=t.return,Re=e;break}Re=t.return}}function ff(e,t,a){var l=a.flags;switch(a.tag){case 0:case 11:case 15:Zt(e,a),l&4&&rn(5,a);break;case 1:if(Zt(e,a),l&4)if(e=a.stateNode,t===null)try{e.componentDidMount()}catch(c){fe(a,a.return,c)}else{var n=Ya(a.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(n,t,e.__reactInternalSnapshotBeforeUpdate)}catch(c){fe(a,a.return,c)}}l&64&&nf(a),l&512&&fn(a,a.return);break;case 3:if(Zt(e,a),l&64&&(e=a.updateQueue,e!==null)){if(t=null,a.child!==null)switch(a.child.tag){case 27:case 5:t=a.child.stateNode;break;case 1:t=a.child.stateNode}try{Ju(e,t)}catch(c){fe(a,a.return,c)}}break;case 27:t===null&&l&4&&uf(a);case 26:case 5:Zt(e,a),t===null&&l&4&&sf(a),l&512&&fn(a,a.return);break;case 12:Zt(e,a);break;case 31:Zt(e,a),l&4&&mf(e,a);break;case 13:Zt(e,a),l&4&&hf(e,a),l&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=Xm.bind(null,a),f0(e,a))));break;case 22:if(l=a.memoizedState!==null||Vt,!l){t=t!==null&&t.memoizedState!==null||Be,n=Vt;var i=Be;Vt=l,(Be=t)&&!i?Kt(e,a,(a.subtreeFlags&8772)!==0):Zt(e,a),Vt=n,Be=i}break;case 30:break;default:Zt(e,a)}}function df(e){var t=e.alternate;t!==null&&(e.alternate=null,df(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&oc(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Se=null,Ie=!1;function Xt(e,t,a){for(a=a.child;a!==null;)pf(e,t,a),a=a.sibling}function pf(e,t,a){if(lt&&typeof lt.onCommitFiberUnmount=="function")try{lt.onCommitFiberUnmount(jl,a)}catch{}switch(a.tag){case 26:Be||Nt(a,t),Xt(e,t,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Be||Nt(a,t);var l=Se,n=Ie;va(a.type)&&(Se=a.stateNode,Ie=!1),Xt(e,t,a),xn(a.stateNode),Se=l,Ie=n;break;case 5:Be||Nt(a,t);case 6:if(l=Se,n=Ie,Se=null,Xt(e,t,a),Se=l,Ie=n,Se!==null)if(Ie)try{(Se.nodeType===9?Se.body:Se.nodeName==="HTML"?Se.ownerDocument.body:Se).removeChild(a.stateNode)}catch(i){fe(a,t,i)}else try{Se.removeChild(a.stateNode)}catch(i){fe(a,t,i)}break;case 18:Se!==null&&(Ie?(e=Se,id(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),Bl(e)):id(Se,a.stateNode));break;case 4:l=Se,n=Ie,Se=a.stateNode.containerInfo,Ie=!0,Xt(e,t,a),Se=l,Ie=n;break;case 0:case 11:case 14:case 15:ra(2,a,t),Be||ra(4,a,t),Xt(e,t,a);break;case 1:Be||(Nt(a,t),l=a.stateNode,typeof l.componentWillUnmount=="function"&&cf(a,t,l)),Xt(e,t,a);break;case 21:Xt(e,t,a);break;case 22:Be=(l=Be)||a.memoizedState!==null,Xt(e,t,a),Be=l;break;default:Xt(e,t,a)}}function mf(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Bl(e)}catch(a){fe(t,t.return,a)}}}function hf(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Bl(e)}catch(a){fe(t,t.return,a)}}function km(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new rf),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new rf),t;default:throw Error(u(435,e.tag))}}function Mi(e,t){var a=km(e);t.forEach(function(l){if(!a.has(l)){a.add(l);var n=Zm.bind(null,e,l);l.then(n,n)}})}function $e(e,t){var a=t.deletions;if(a!==null)for(var l=0;l<a.length;l++){var n=a[l],i=e,c=t,s=c;e:for(;s!==null;){switch(s.tag){case 27:if(va(s.type)){Se=s.stateNode,Ie=!1;break e}break;case 5:Se=s.stateNode,Ie=!1;break e;case 3:case 4:Se=s.stateNode.containerInfo,Ie=!0;break e}s=s.return}if(Se===null)throw Error(u(160));pf(i,c,n),Se=null,Ie=!1,i=n.alternate,i!==null&&(i.return=null),n.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)gf(t,e),t=t.sibling}var Mt=null;function gf(e,t){var a=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:$e(t,e),Pe(e),l&4&&(ra(3,e,e.return),rn(3,e),ra(5,e,e.return));break;case 1:$e(t,e),Pe(e),l&512&&(Be||a===null||Nt(a,a.return)),l&64&&Vt&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?l:a.concat(l))));break;case 26:var n=Mt;if($e(t,e),Pe(e),l&512&&(Be||a===null||Nt(a,a.return)),l&4){var i=a!==null?a.memoizedState:null;if(l=e.memoizedState,a===null)if(l===null)if(e.stateNode===null){e:{l=e.type,a=e.memoizedProps,n=n.ownerDocument||n;t:switch(l){case"title":i=n.getElementsByTagName("title")[0],(!i||i[kl]||i[ke]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=n.createElement(l),n.head.insertBefore(i,n.querySelector("head > title"))),Ye(i,l,a),i[ke]=e,je(i),l=i;break e;case"link":var c=gd("link","href",n).get(l+(a.href||""));if(c){for(var s=0;s<c.length;s++)if(i=c[s],i.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&i.getAttribute("rel")===(a.rel==null?null:a.rel)&&i.getAttribute("title")===(a.title==null?null:a.title)&&i.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){c.splice(s,1);break t}}i=n.createElement(l),Ye(i,l,a),n.head.appendChild(i);break;case"meta":if(c=gd("meta","content",n).get(l+(a.content||""))){for(s=0;s<c.length;s++)if(i=c[s],i.getAttribute("content")===(a.content==null?null:""+a.content)&&i.getAttribute("name")===(a.name==null?null:a.name)&&i.getAttribute("property")===(a.property==null?null:a.property)&&i.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&i.getAttribute("charset")===(a.charSet==null?null:a.charSet)){c.splice(s,1);break t}}i=n.createElement(l),Ye(i,l,a),n.head.appendChild(i);break;default:throw Error(u(468,l))}i[ke]=e,je(i),l=i}e.stateNode=l}else vd(n,e.type,e.stateNode);else e.stateNode=hd(n,l,e.memoizedProps);else i!==l?(i===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):i.count--,l===null?vd(n,e.type,e.stateNode):hd(n,l,e.memoizedProps)):l===null&&e.stateNode!==null&&Os(e,e.memoizedProps,a.memoizedProps)}break;case 27:$e(t,e),Pe(e),l&512&&(Be||a===null||Nt(a,a.return)),a!==null&&l&4&&Os(e,e.memoizedProps,a.memoizedProps);break;case 5:if($e(t,e),Pe(e),l&512&&(Be||a===null||Nt(a,a.return)),e.flags&32){n=e.stateNode;try{el(n,"")}catch(k){fe(e,e.return,k)}}l&4&&e.stateNode!=null&&(n=e.memoizedProps,Os(e,n,a!==null?a.memoizedProps:n)),l&1024&&(Ds=!0);break;case 6:if($e(t,e),Pe(e),l&4){if(e.stateNode===null)throw Error(u(162));l=e.memoizedProps,a=e.stateNode;try{a.nodeValue=l}catch(k){fe(e,e.return,k)}}break;case 3:if(qi=null,n=Mt,Mt=Hi(t.containerInfo),$e(t,e),Mt=n,Pe(e),l&4&&a!==null&&a.memoizedState.isDehydrated)try{Bl(t.containerInfo)}catch(k){fe(e,e.return,k)}Ds&&(Ds=!1,vf(e));break;case 4:l=Mt,Mt=Hi(e.stateNode.containerInfo),$e(t,e),Pe(e),Mt=l;break;case 12:$e(t,e),Pe(e);break;case 31:$e(t,e),Pe(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Mi(e,l)));break;case 13:$e(t,e),Pe(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Ti=at()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Mi(e,l)));break;case 22:n=e.memoizedState!==null;var r=a!==null&&a.memoizedState!==null,v=Vt,M=Be;if(Vt=v||n,Be=M||r,$e(t,e),Be=M,Vt=v,Pe(e),l&8192)e:for(t=e.stateNode,t._visibility=n?t._visibility&-2:t._visibility|1,n&&(a===null||r||Vt||Be||Ga(e)),a=null,t=e;;){if(t.tag===5||t.tag===26){if(a===null){r=a=t;try{if(i=r.stateNode,n)c=i.style,typeof c.setProperty=="function"?c.setProperty("display","none","important"):c.display="none";else{s=r.stateNode;var C=r.memoizedProps.style,x=C!=null&&C.hasOwnProperty("display")?C.display:null;s.style.display=x==null||typeof x=="boolean"?"":(""+x).trim()}}catch(k){fe(r,r.return,k)}}}else if(t.tag===6){if(a===null){r=t;try{r.stateNode.nodeValue=n?"":r.memoizedProps}catch(k){fe(r,r.return,k)}}}else if(t.tag===18){if(a===null){r=t;try{var z=r.stateNode;n?cd(z,!0):cd(r.stateNode,!1)}catch(k){fe(r,r.return,k)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;a===t&&(a=null),t=t.return}a===t&&(a=null),t.sibling.return=t.return,t=t.sibling}l&4&&(l=e.updateQueue,l!==null&&(a=l.retryQueue,a!==null&&(l.retryQueue=null,Mi(e,a))));break;case 19:$e(t,e),Pe(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Mi(e,l)));break;case 30:break;case 21:break;default:$e(t,e),Pe(e)}}function Pe(e){var t=e.flags;if(t&2){try{for(var a,l=e.return;l!==null;){if(of(l)){a=l;break}l=l.return}if(a==null)throw Error(u(160));switch(a.tag){case 27:var n=a.stateNode,i=Ns(e);Ei(e,i,n);break;case 5:var c=a.stateNode;a.flags&32&&(el(c,""),a.flags&=-33);var s=Ns(e);Ei(e,s,c);break;case 3:case 4:var r=a.stateNode.containerInfo,v=Ns(e);Bs(e,v,r);break;default:throw Error(u(161))}}catch(M){fe(e,e.return,M)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function vf(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;vf(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Zt(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)ff(e,t.alternate,t),t=t.sibling}function Ga(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:ra(4,t,t.return),Ga(t);break;case 1:Nt(t,t.return);var a=t.stateNode;typeof a.componentWillUnmount=="function"&&cf(t,t.return,a),Ga(t);break;case 27:xn(t.stateNode);case 26:case 5:Nt(t,t.return),Ga(t);break;case 22:t.memoizedState===null&&Ga(t);break;case 30:Ga(t);break;default:Ga(t)}e=e.sibling}}function Kt(e,t,a){for(a=a&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var l=t.alternate,n=e,i=t,c=i.flags;switch(i.tag){case 0:case 11:case 15:Kt(n,i,a),rn(4,i);break;case 1:if(Kt(n,i,a),l=i,n=l.stateNode,typeof n.componentDidMount=="function")try{n.componentDidMount()}catch(v){fe(l,l.return,v)}if(l=i,n=l.updateQueue,n!==null){var s=l.stateNode;try{var r=n.shared.hiddenCallbacks;if(r!==null)for(n.shared.hiddenCallbacks=null,n=0;n<r.length;n++)Ku(r[n],s)}catch(v){fe(l,l.return,v)}}a&&c&64&&nf(i),fn(i,i.return);break;case 27:uf(i);case 26:case 5:Kt(n,i,a),a&&l===null&&c&4&&sf(i),fn(i,i.return);break;case 12:Kt(n,i,a);break;case 31:Kt(n,i,a),a&&c&4&&mf(n,i);break;case 13:Kt(n,i,a),a&&c&4&&hf(n,i);break;case 22:i.memoizedState===null&&Kt(n,i,a),fn(i,i.return);break;case 30:break;default:Kt(n,i,a)}t=t.sibling}}function _s(e,t){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Wl(a))}function js(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Wl(e))}function wt(e,t,a,l){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)bf(e,t,a,l),t=t.sibling}function bf(e,t,a,l){var n=t.flags;switch(t.tag){case 0:case 11:case 15:wt(e,t,a,l),n&2048&&rn(9,t);break;case 1:wt(e,t,a,l);break;case 3:wt(e,t,a,l),n&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Wl(e)));break;case 12:if(n&2048){wt(e,t,a,l),e=t.stateNode;try{var i=t.memoizedProps,c=i.id,s=i.onPostCommit;typeof s=="function"&&s(c,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(r){fe(t,t.return,r)}}else wt(e,t,a,l);break;case 31:wt(e,t,a,l);break;case 13:wt(e,t,a,l);break;case 23:break;case 22:i=t.stateNode,c=t.alternate,t.memoizedState!==null?i._visibility&2?wt(e,t,a,l):dn(e,t):i._visibility&2?wt(e,t,a,l):(i._visibility|=2,xl(e,t,a,l,(t.subtreeFlags&10256)!==0||!1)),n&2048&&_s(c,t);break;case 24:wt(e,t,a,l),n&2048&&js(t.alternate,t);break;default:wt(e,t,a,l)}}function xl(e,t,a,l,n){for(n=n&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var i=e,c=t,s=a,r=l,v=c.flags;switch(c.tag){case 0:case 11:case 15:xl(i,c,s,r,n),rn(8,c);break;case 23:break;case 22:var M=c.stateNode;c.memoizedState!==null?M._visibility&2?xl(i,c,s,r,n):dn(i,c):(M._visibility|=2,xl(i,c,s,r,n)),n&&v&2048&&_s(c.alternate,c);break;case 24:xl(i,c,s,r,n),n&&v&2048&&js(c.alternate,c);break;default:xl(i,c,s,r,n)}t=t.sibling}}function dn(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var a=e,l=t,n=l.flags;switch(l.tag){case 22:dn(a,l),n&2048&&_s(l.alternate,l);break;case 24:dn(a,l),n&2048&&js(l.alternate,l);break;default:dn(a,l)}t=t.sibling}}var pn=8192;function Sl(e,t,a){if(e.subtreeFlags&pn)for(e=e.child;e!==null;)yf(e,t,a),e=e.sibling}function yf(e,t,a){switch(e.tag){case 26:Sl(e,t,a),e.flags&pn&&e.memoizedState!==null&&E0(a,Mt,e.memoizedState,e.memoizedProps);break;case 5:Sl(e,t,a);break;case 3:case 4:var l=Mt;Mt=Hi(e.stateNode.containerInfo),Sl(e,t,a),Mt=l;break;case 22:e.memoizedState===null&&(l=e.alternate,l!==null&&l.memoizedState!==null?(l=pn,pn=16777216,Sl(e,t,a),pn=l):Sl(e,t,a));break;default:Sl(e,t,a)}}function xf(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function mn(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var l=t[a];Re=l,zf(l,e)}xf(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Sf(e),e=e.sibling}function Sf(e){switch(e.tag){case 0:case 11:case 15:mn(e),e.flags&2048&&ra(9,e,e.return);break;case 3:mn(e);break;case 12:mn(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,wi(e)):mn(e);break;default:mn(e)}}function wi(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var l=t[a];Re=l,zf(l,e)}xf(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:ra(8,t,t.return),wi(t);break;case 22:a=t.stateNode,a._visibility&2&&(a._visibility&=-3,wi(t));break;default:wi(t)}e=e.sibling}}function zf(e,t){for(;Re!==null;){var a=Re;switch(a.tag){case 0:case 11:case 15:ra(8,a,t);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var l=a.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:Wl(a.memoizedState.cache)}if(l=a.child,l!==null)l.return=a,Re=l;else e:for(a=e;Re!==null;){l=Re;var n=l.sibling,i=l.return;if(df(l),l===a){Re=null;break e}if(n!==null){n.return=i,Re=n;break e}Re=i}}}var Hm={getCacheForType:function(e){var t=Le(Ce),a=t.data.get(e);return a===void 0&&(a=e(),t.data.set(e,a)),a},cacheSignal:function(){return Le(Ce).controller.signal}},Lm=typeof WeakMap=="function"?WeakMap:Map,ce=0,be=null,I=null,P=0,re=0,ut=null,fa=!1,zl=!1,Rs=!1,Jt=0,Me=0,da=0,Qa=0,Us=0,rt=0,El=0,hn=null,et=null,ks=!1,Ti=0,Ef=0,Ai=1/0,Ci=null,pa=null,_e=0,ma=null,Ml=null,Ft=0,Hs=0,Ls=null,Mf=null,gn=0,qs=null;function ft(){return(ce&2)!==0&&P!==0?P&-P:w.T!==null?Zs():Lo()}function wf(){if(rt===0)if((P&536870912)===0||ae){var e=Un;Un<<=1,(Un&3932160)===0&&(Un=262144),rt=e}else rt=536870912;return e=st.current,e!==null&&(e.flags|=32),rt}function tt(e,t,a){(e===be&&(re===2||re===9)||e.cancelPendingCommit!==null)&&(wl(e,0),ha(e,P,rt,!1)),Ul(e,a),((ce&2)===0||e!==be)&&(e===be&&((ce&2)===0&&(Qa|=a),Me===4&&ha(e,P,rt,!1)),Bt(e))}function Tf(e,t,a){if((ce&6)!==0)throw Error(u(327));var l=!a&&(t&127)===0&&(t&e.expiredLanes)===0||Rl(e,t),n=l?Gm(e,t):Gs(e,t,!0),i=l;do{if(n===0){zl&&!l&&ha(e,t,0,!1);break}else{if(a=e.current.alternate,i&&!qm(a)){n=Gs(e,t,!1),i=!1;continue}if(n===2){if(i=t,e.errorRecoveryDisabledLanes&i)var c=0;else c=e.pendingLanes&-536870913,c=c!==0?c:c&536870912?536870912:0;if(c!==0){t=c;e:{var s=e;n=hn;var r=s.current.memoizedState.isDehydrated;if(r&&(wl(s,c).flags|=256),c=Gs(s,c,!1),c!==2){if(Rs&&!r){s.errorRecoveryDisabledLanes|=i,Qa|=i,n=4;break e}i=et,et=n,i!==null&&(et===null?et=i:et.push.apply(et,i))}n=c}if(i=!1,n!==2)continue}}if(n===1){wl(e,0),ha(e,t,0,!0);break}e:{switch(l=e,i=n,i){case 0:case 1:throw Error(u(345));case 4:if((t&4194048)!==t)break;case 6:ha(l,t,rt,!fa);break e;case 2:et=null;break;case 3:case 5:break;default:throw Error(u(329))}if((t&62914560)===t&&(n=Ti+300-at(),10<n)){if(ha(l,t,rt,!fa),Hn(l,0,!0)!==0)break e;Ft=t,l.timeoutHandle=ld(Af.bind(null,l,a,et,Ci,ks,t,rt,Qa,El,fa,i,"Throttled",-0,0),n);break e}Af(l,a,et,Ci,ks,t,rt,Qa,El,fa,i,null,-0,0)}}break}while(!0);Bt(e)}function Af(e,t,a,l,n,i,c,s,r,v,M,C,x,z){if(e.timeoutHandle=-1,C=t.subtreeFlags,C&8192||(C&16785408)===16785408){C={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:jt},yf(t,i,C);var k=(i&62914560)===i?Ti-at():(i&4194048)===i?Ef-at():0;if(k=M0(C,k),k!==null){Ft=i,e.cancelPendingCommit=k(Rf.bind(null,e,t,i,a,l,n,c,s,r,M,C,null,x,z)),ha(e,i,c,!v);return}}Rf(e,t,i,a,l,n,c,s,r)}function qm(e){for(var t=e;;){var a=t.tag;if((a===0||a===11||a===15)&&t.flags&16384&&(a=t.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var l=0;l<a.length;l++){var n=a[l],i=n.getSnapshot;n=n.value;try{if(!it(i(),n))return!1}catch{return!1}}if(a=t.child,t.subtreeFlags&16384&&a!==null)a.return=t,t=a;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function ha(e,t,a,l){t&=~Us,t&=~Qa,e.suspendedLanes|=t,e.pingedLanes&=~t,l&&(e.warmLanes|=t),l=e.expirationTimes;for(var n=t;0<n;){var i=31-nt(n),c=1<<i;l[i]=-1,n&=~c}a!==0&&Uo(e,a,t)}function Oi(){return(ce&6)===0?(vn(0),!1):!0}function Ys(){if(I!==null){if(re===0)var e=I.return;else e=I,Ht=ja=null,ls(e),hl=null,$l=0,e=I;for(;e!==null;)lf(e.alternate,e),e=e.return;I=null}}function wl(e,t){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,c0(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),Ft=0,Ys(),be=e,I=a=Ut(e.current,null),P=t,re=0,ut=null,fa=!1,zl=Rl(e,t),Rs=!1,El=rt=Us=Qa=da=Me=0,et=hn=null,ks=!1,(t&8)!==0&&(t|=t&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=t;0<l;){var n=31-nt(l),i=1<<n;t|=e[n],l&=~i}return Jt=t,Wn(),a}function Cf(e,t){K=null,w.H=sn,t===ml||t===ni?(t=Qu(),re=3):t===Xc?(t=Qu(),re=4):re=t===ys?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,ut=t,I===null&&(Me=1,bi(e,ht(t,e.current)))}function Of(){var e=st.current;return e===null?!0:(P&4194048)===P?yt===null:(P&62914560)===P||(P&536870912)!==0?e===yt:!1}function Nf(){var e=w.H;return w.H=sn,e===null?sn:e}function Bf(){var e=w.A;return w.A=Hm,e}function Ni(){Me=4,fa||(P&4194048)!==P&&st.current!==null||(zl=!0),(da&134217727)===0&&(Qa&134217727)===0||be===null||ha(be,P,rt,!1)}function Gs(e,t,a){var l=ce;ce|=2;var n=Nf(),i=Bf();(be!==e||P!==t)&&(Ci=null,wl(e,t)),t=!1;var c=Me;e:do try{if(re!==0&&I!==null){var s=I,r=ut;switch(re){case 8:Ys(),c=6;break e;case 3:case 2:case 9:case 6:st.current===null&&(t=!0);var v=re;if(re=0,ut=null,Tl(e,s,r,v),a&&zl){c=0;break e}break;default:v=re,re=0,ut=null,Tl(e,s,r,v)}}Ym(),c=Me;break}catch(M){Cf(e,M)}while(!0);return t&&e.shellSuspendCounter++,Ht=ja=null,ce=l,w.H=n,w.A=i,I===null&&(be=null,P=0,Wn()),c}function Ym(){for(;I!==null;)Df(I)}function Gm(e,t){var a=ce;ce|=2;var l=Nf(),n=Bf();be!==e||P!==t?(Ci=null,Ai=at()+500,wl(e,t)):zl=Rl(e,t);e:do try{if(re!==0&&I!==null){t=I;var i=ut;t:switch(re){case 1:re=0,ut=null,Tl(e,t,i,1);break;case 2:case 9:if(Yu(i)){re=0,ut=null,_f(t);break}t=function(){re!==2&&re!==9||be!==e||(re=7),Bt(e)},i.then(t,t);break e;case 3:re=7;break e;case 4:re=5;break e;case 7:Yu(i)?(re=0,ut=null,_f(t)):(re=0,ut=null,Tl(e,t,i,7));break;case 5:var c=null;switch(I.tag){case 26:c=I.memoizedState;case 5:case 27:var s=I;if(c?bd(c):s.stateNode.complete){re=0,ut=null;var r=s.sibling;if(r!==null)I=r;else{var v=s.return;v!==null?(I=v,Bi(v)):I=null}break t}}re=0,ut=null,Tl(e,t,i,5);break;case 6:re=0,ut=null,Tl(e,t,i,6);break;case 8:Ys(),Me=6;break e;default:throw Error(u(462))}}Qm();break}catch(M){Cf(e,M)}while(!0);return Ht=ja=null,w.H=l,w.A=n,ce=a,I!==null?0:(be=null,P=0,Wn(),Me)}function Qm(){for(;I!==null&&!dp();)Df(I)}function Df(e){var t=tf(e.alternate,e,Jt);e.memoizedProps=e.pendingProps,t===null?Bi(e):I=t}function _f(e){var t=e,a=t.alternate;switch(t.tag){case 15:case 0:t=Fr(a,t,t.pendingProps,t.type,void 0,P);break;case 11:t=Fr(a,t,t.pendingProps,t.type.render,t.ref,P);break;case 5:ls(t);default:lf(a,t),t=I=Nu(t,Jt),t=tf(a,t,Jt)}e.memoizedProps=e.pendingProps,t===null?Bi(e):I=t}function Tl(e,t,a,l){Ht=ja=null,ls(t),hl=null,$l=0;var n=t.return;try{if(Bm(e,n,t,a,P)){Me=1,bi(e,ht(a,e.current)),I=null;return}}catch(i){if(n!==null)throw I=n,i;Me=1,bi(e,ht(a,e.current)),I=null;return}t.flags&32768?(ae||l===1?e=!0:zl||(P&536870912)!==0?e=!1:(fa=e=!0,(l===2||l===9||l===3||l===6)&&(l=st.current,l!==null&&l.tag===13&&(l.flags|=16384))),jf(t,e)):Bi(t)}function Bi(e){var t=e;do{if((t.flags&32768)!==0){jf(t,fa);return}e=t.return;var a=jm(t.alternate,t,Jt);if(a!==null){I=a;return}if(t=t.sibling,t!==null){I=t;return}I=t=e}while(t!==null);Me===0&&(Me=5)}function jf(e,t){do{var a=Rm(e.alternate,e);if(a!==null){a.flags&=32767,I=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!t&&(e=e.sibling,e!==null)){I=e;return}I=e=a}while(e!==null);Me=6,I=null}function Rf(e,t,a,l,n,i,c,s,r){e.cancelPendingCommit=null;do Di();while(_e!==0);if((ce&6)!==0)throw Error(u(327));if(t!==null){if(t===e.current)throw Error(u(177));if(i=t.lanes|t.childLanes,i|=Nc,zp(e,a,i,c,s,r),e===be&&(I=be=null,P=0),Ml=t,ma=e,Ft=a,Hs=i,Ls=n,Mf=l,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Km(jn,function(){return qf(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||l){l=w.T,w.T=null,n=j.p,j.p=2,c=ce,ce|=4;try{Um(e,t,a)}finally{ce=c,j.p=n,w.T=l}}_e=1,Uf(),kf(),Hf()}}function Uf(){if(_e===1){_e=0;var e=ma,t=Ml,a=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||a){a=w.T,w.T=null;var l=j.p;j.p=2;var n=ce;ce|=4;try{gf(t,e);var i=eo,c=Su(e.containerInfo),s=i.focusedElem,r=i.selectionRange;if(c!==s&&s&&s.ownerDocument&&xu(s.ownerDocument.documentElement,s)){if(r!==null&&wc(s)){var v=r.start,M=r.end;if(M===void 0&&(M=v),"selectionStart"in s)s.selectionStart=v,s.selectionEnd=Math.min(M,s.value.length);else{var C=s.ownerDocument||document,x=C&&C.defaultView||window;if(x.getSelection){var z=x.getSelection(),k=s.textContent.length,Y=Math.min(r.start,k),he=r.end===void 0?Y:Math.min(r.end,k);!z.extend&&Y>he&&(c=he,he=Y,Y=c);var h=yu(s,Y),p=yu(s,he);if(h&&p&&(z.rangeCount!==1||z.anchorNode!==h.node||z.anchorOffset!==h.offset||z.focusNode!==p.node||z.focusOffset!==p.offset)){var g=C.createRange();g.setStart(h.node,h.offset),z.removeAllRanges(),Y>he?(z.addRange(g),z.extend(p.node,p.offset)):(g.setEnd(p.node,p.offset),z.addRange(g))}}}}for(C=[],z=s;z=z.parentNode;)z.nodeType===1&&C.push({element:z,left:z.scrollLeft,top:z.scrollTop});for(typeof s.focus=="function"&&s.focus(),s=0;s<C.length;s++){var T=C[s];T.element.scrollLeft=T.left,T.element.scrollTop=T.top}}Vi=!!Ps,eo=Ps=null}finally{ce=n,j.p=l,w.T=a}}e.current=t,_e=2}}function kf(){if(_e===2){_e=0;var e=ma,t=Ml,a=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||a){a=w.T,w.T=null;var l=j.p;j.p=2;var n=ce;ce|=4;try{ff(e,t.alternate,t)}finally{ce=n,j.p=l,w.T=a}}_e=3}}function Hf(){if(_e===4||_e===3){_e=0,pp();var e=ma,t=Ml,a=Ft,l=Mf;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?_e=5:(_e=0,Ml=ma=null,Lf(e,e.pendingLanes));var n=e.pendingLanes;if(n===0&&(pa=null),cc(a),t=t.stateNode,lt&&typeof lt.onCommitFiberRoot=="function")try{lt.onCommitFiberRoot(jl,t,void 0,(t.current.flags&128)===128)}catch{}if(l!==null){t=w.T,n=j.p,j.p=2,w.T=null;try{for(var i=e.onRecoverableError,c=0;c<l.length;c++){var s=l[c];i(s.value,{componentStack:s.stack})}}finally{w.T=t,j.p=n}}(Ft&3)!==0&&Di(),Bt(e),n=e.pendingLanes,(a&261930)!==0&&(n&42)!==0?e===qs?gn++:(gn=0,qs=e):gn=0,vn(0)}}function Lf(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Wl(t)))}function Di(){return Uf(),kf(),Hf(),qf()}function qf(){if(_e!==5)return!1;var e=ma,t=Hs;Hs=0;var a=cc(Ft),l=w.T,n=j.p;try{j.p=32>a?32:a,w.T=null,a=Ls,Ls=null;var i=ma,c=Ft;if(_e=0,Ml=ma=null,Ft=0,(ce&6)!==0)throw Error(u(331));var s=ce;if(ce|=4,Sf(i.current),bf(i,i.current,c,a),ce=s,vn(0,!1),lt&&typeof lt.onPostCommitFiberRoot=="function")try{lt.onPostCommitFiberRoot(jl,i)}catch{}return!0}finally{j.p=n,w.T=l,Lf(e,t)}}function Yf(e,t,a){t=ht(a,t),t=bs(e.stateNode,t,2),e=sa(e,t,2),e!==null&&(Ul(e,2),Bt(e))}function fe(e,t,a){if(e.tag===3)Yf(e,e,a);else for(;t!==null;){if(t.tag===3){Yf(t,e,a);break}else if(t.tag===1){var l=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(pa===null||!pa.has(l))){e=ht(a,e),a=Yr(2),l=sa(t,a,2),l!==null&&(Gr(a,l,t,e),Ul(l,2),Bt(l));break}}t=t.return}}function Qs(e,t,a){var l=e.pingCache;if(l===null){l=e.pingCache=new Lm;var n=new Set;l.set(t,n)}else n=l.get(t),n===void 0&&(n=new Set,l.set(t,n));n.has(a)||(Rs=!0,n.add(a),e=Vm.bind(null,e,t,a),t.then(e,e))}function Vm(e,t,a){var l=e.pingCache;l!==null&&l.delete(t),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,be===e&&(P&a)===a&&(Me===4||Me===3&&(P&62914560)===P&&300>at()-Ti?(ce&2)===0&&wl(e,0):Us|=a,El===P&&(El=0)),Bt(e)}function Gf(e,t){t===0&&(t=Ro()),e=Ba(e,t),e!==null&&(Ul(e,t),Bt(e))}function Xm(e){var t=e.memoizedState,a=0;t!==null&&(a=t.retryLane),Gf(e,a)}function Zm(e,t){var a=0;switch(e.tag){case 31:case 13:var l=e.stateNode,n=e.memoizedState;n!==null&&(a=n.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(u(314))}l!==null&&l.delete(t),Gf(e,a)}function Km(e,t){return ac(e,t)}var _i=null,Al=null,Vs=!1,ji=!1,Xs=!1,ga=0;function Bt(e){e!==Al&&e.next===null&&(Al===null?_i=Al=e:Al=Al.next=e),ji=!0,Vs||(Vs=!0,Fm())}function vn(e,t){if(!Xs&&ji){Xs=!0;do for(var a=!1,l=_i;l!==null;){if(e!==0){var n=l.pendingLanes;if(n===0)var i=0;else{var c=l.suspendedLanes,s=l.pingedLanes;i=(1<<31-nt(42|e)+1)-1,i&=n&~(c&~s),i=i&201326741?i&201326741|1:i?i|2:0}i!==0&&(a=!0,Zf(l,i))}else i=P,i=Hn(l,l===be?i:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(i&3)===0||Rl(l,i)||(a=!0,Zf(l,i));l=l.next}while(a);Xs=!1}}function Jm(){Qf()}function Qf(){ji=Vs=!1;var e=0;ga!==0&&i0()&&(e=ga);for(var t=at(),a=null,l=_i;l!==null;){var n=l.next,i=Vf(l,t);i===0?(l.next=null,a===null?_i=n:a.next=n,n===null&&(Al=a)):(a=l,(e!==0||(i&3)!==0)&&(ji=!0)),l=n}_e!==0&&_e!==5||vn(e),ga!==0&&(ga=0)}function Vf(e,t){for(var a=e.suspendedLanes,l=e.pingedLanes,n=e.expirationTimes,i=e.pendingLanes&-62914561;0<i;){var c=31-nt(i),s=1<<c,r=n[c];r===-1?((s&a)===0||(s&l)!==0)&&(n[c]=Sp(s,t)):r<=t&&(e.expiredLanes|=s),i&=~s}if(t=be,a=P,a=Hn(e,e===t?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,a===0||e===t&&(re===2||re===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&lc(l),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Rl(e,a)){if(t=a&-a,t===e.callbackPriority)return t;switch(l!==null&&lc(l),cc(a)){case 2:case 8:a=_o;break;case 32:a=jn;break;case 268435456:a=jo;break;default:a=jn}return l=Xf.bind(null,e),a=ac(a,l),e.callbackPriority=t,e.callbackNode=a,t}return l!==null&&l!==null&&lc(l),e.callbackPriority=2,e.callbackNode=null,2}function Xf(e,t){if(_e!==0&&_e!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Di()&&e.callbackNode!==a)return null;var l=P;return l=Hn(e,e===be?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(Tf(e,l,t),Vf(e,at()),e.callbackNode!=null&&e.callbackNode===a?Xf.bind(null,e):null)}function Zf(e,t){if(Di())return null;Tf(e,t,!0)}function Fm(){s0(function(){(ce&6)!==0?ac(Do,Jm):Qf()})}function Zs(){if(ga===0){var e=dl;e===0&&(e=Rn,Rn<<=1,(Rn&261888)===0&&(Rn=256)),ga=e}return ga}function Kf(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Gn(""+e)}function Jf(e,t){var a=t.ownerDocument.createElement("input");return a.name=t.name,a.value=t.value,e.id&&a.setAttribute("form",e.id),t.parentNode.insertBefore(a,t),e=new FormData(e),a.parentNode.removeChild(a),e}function Wm(e,t,a,l,n){if(t==="submit"&&a&&a.stateNode===n){var i=Kf((n[Fe]||null).action),c=l.submitter;c&&(t=(t=c[Fe]||null)?Kf(t.formAction):c.getAttribute("formAction"),t!==null&&(i=t,c=null));var s=new Zn("action","action",null,l,n);e.push({event:s,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(ga!==0){var r=c?Jf(n,c):new FormData(n);ds(a,{pending:!0,data:r,method:n.method,action:i},null,r)}}else typeof i=="function"&&(s.preventDefault(),r=c?Jf(n,c):new FormData(n),ds(a,{pending:!0,data:r,method:n.method,action:i},i,r))},currentTarget:n}]})}}for(var Ks=0;Ks<Oc.length;Ks++){var Js=Oc[Ks],Im=Js.toLowerCase(),$m=Js[0].toUpperCase()+Js.slice(1);Et(Im,"on"+$m)}Et(Mu,"onAnimationEnd"),Et(wu,"onAnimationIteration"),Et(Tu,"onAnimationStart"),Et("dblclick","onDoubleClick"),Et("focusin","onFocus"),Et("focusout","onBlur"),Et(mm,"onTransitionRun"),Et(hm,"onTransitionStart"),Et(gm,"onTransitionCancel"),Et(Au,"onTransitionEnd"),$a("onMouseEnter",["mouseout","mouseover"]),$a("onMouseLeave",["mouseout","mouseover"]),$a("onPointerEnter",["pointerout","pointerover"]),$a("onPointerLeave",["pointerout","pointerover"]),Aa("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Aa("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Aa("onBeforeInput",["compositionend","keypress","textInput","paste"]),Aa("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Aa("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Aa("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var bn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Pm=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(bn));function Ff(e,t){t=(t&4)!==0;for(var a=0;a<e.length;a++){var l=e[a],n=l.event;l=l.listeners;e:{var i=void 0;if(t)for(var c=l.length-1;0<=c;c--){var s=l[c],r=s.instance,v=s.currentTarget;if(s=s.listener,r!==i&&n.isPropagationStopped())break e;i=s,n.currentTarget=v;try{i(n)}catch(M){Fn(M)}n.currentTarget=null,i=r}else for(c=0;c<l.length;c++){if(s=l[c],r=s.instance,v=s.currentTarget,s=s.listener,r!==i&&n.isPropagationStopped())break e;i=s,n.currentTarget=v;try{i(n)}catch(M){Fn(M)}n.currentTarget=null,i=r}}}}function $(e,t){var a=t[sc];a===void 0&&(a=t[sc]=new Set);var l=e+"__bubble";a.has(l)||(Wf(t,e,2,!1),a.add(l))}function Fs(e,t,a){var l=0;t&&(l|=4),Wf(a,e,l,t)}var Ri="_reactListening"+Math.random().toString(36).slice(2);function Ws(e){if(!e[Ri]){e[Ri]=!0,Go.forEach(function(a){a!=="selectionchange"&&(Pm.has(a)||Fs(a,!1,e),Fs(a,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ri]||(t[Ri]=!0,Fs("selectionchange",!1,t))}}function Wf(e,t,a,l){switch(wd(t)){case 2:var n=A0;break;case 8:n=C0;break;default:n=fo}a=n.bind(null,t,a,e),n=void 0,!gc||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(n=!0),l?n!==void 0?e.addEventListener(t,a,{capture:!0,passive:n}):e.addEventListener(t,a,!0):n!==void 0?e.addEventListener(t,a,{passive:n}):e.addEventListener(t,a,!1)}function Is(e,t,a,l,n){var i=l;if((t&1)===0&&(t&2)===0&&l!==null)e:for(;;){if(l===null)return;var c=l.tag;if(c===3||c===4){var s=l.stateNode.containerInfo;if(s===n)break;if(c===4)for(c=l.return;c!==null;){var r=c.tag;if((r===3||r===4)&&c.stateNode.containerInfo===n)return;c=c.return}for(;s!==null;){if(c=Fa(s),c===null)return;if(r=c.tag,r===5||r===6||r===26||r===27){l=i=c;continue e}s=s.parentNode}}l=l.return}eu(function(){var v=i,M=mc(a),C=[];e:{var x=Cu.get(e);if(x!==void 0){var z=Zn,k=e;switch(e){case"keypress":if(Vn(a)===0)break e;case"keydown":case"keyup":z=Zp;break;case"focusin":k="focus",z=xc;break;case"focusout":k="blur",z=xc;break;case"beforeblur":case"afterblur":z=xc;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":z=lu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":z=jp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":z=Fp;break;case Mu:case wu:case Tu:z=kp;break;case Au:z=Ip;break;case"scroll":case"scrollend":z=Dp;break;case"wheel":z=Pp;break;case"copy":case"cut":case"paste":z=Lp;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":z=iu;break;case"toggle":case"beforetoggle":z=tm}var Y=(t&4)!==0,he=!Y&&(e==="scroll"||e==="scrollend"),h=Y?x!==null?x+"Capture":null:x;Y=[];for(var p=v,g;p!==null;){var T=p;if(g=T.stateNode,T=T.tag,T!==5&&T!==26&&T!==27||g===null||h===null||(T=Ll(p,h),T!=null&&Y.push(yn(p,T,g))),he)break;p=p.return}0<Y.length&&(x=new z(x,k,null,a,M),C.push({event:x,listeners:Y}))}}if((t&7)===0){e:{if(x=e==="mouseover"||e==="pointerover",z=e==="mouseout"||e==="pointerout",x&&a!==pc&&(k=a.relatedTarget||a.fromElement)&&(Fa(k)||k[Ja]))break e;if((z||x)&&(x=M.window===M?M:(x=M.ownerDocument)?x.defaultView||x.parentWindow:window,z?(k=a.relatedTarget||a.toElement,z=v,k=k?Fa(k):null,k!==null&&(he=E(k),Y=k.tag,k!==he||Y!==5&&Y!==27&&Y!==6)&&(k=null)):(z=null,k=v),z!==k)){if(Y=lu,T="onMouseLeave",h="onMouseEnter",p="mouse",(e==="pointerout"||e==="pointerover")&&(Y=iu,T="onPointerLeave",h="onPointerEnter",p="pointer"),he=z==null?x:Hl(z),g=k==null?x:Hl(k),x=new Y(T,p+"leave",z,a,M),x.target=he,x.relatedTarget=g,T=null,Fa(M)===v&&(Y=new Y(h,p+"enter",k,a,M),Y.target=g,Y.relatedTarget=he,T=Y),he=T,z&&k)t:{for(Y=e0,h=z,p=k,g=0,T=h;T;T=Y(T))g++;T=0;for(var q=p;q;q=Y(q))T++;for(;0<g-T;)h=Y(h),g--;for(;0<T-g;)p=Y(p),T--;for(;g--;){if(h===p||p!==null&&h===p.alternate){Y=h;break t}h=Y(h),p=Y(p)}Y=null}else Y=null;z!==null&&If(C,x,z,Y,!1),k!==null&&he!==null&&If(C,he,k,Y,!0)}}e:{if(x=v?Hl(v):window,z=x.nodeName&&x.nodeName.toLowerCase(),z==="select"||z==="input"&&x.type==="file")var ne=pu;else if(fu(x))if(mu)ne=fm;else{ne=um;var L=om}else z=x.nodeName,!z||z.toLowerCase()!=="input"||x.type!=="checkbox"&&x.type!=="radio"?v&&dc(v.elementType)&&(ne=pu):ne=rm;if(ne&&(ne=ne(e,v))){du(C,ne,a,M);break e}L&&L(e,x,v),e==="focusout"&&v&&x.type==="number"&&v.memoizedProps.value!=null&&fc(x,"number",x.value)}switch(L=v?Hl(v):window,e){case"focusin":(fu(L)||L.contentEditable==="true")&&(nl=L,Tc=v,Kl=null);break;case"focusout":Kl=Tc=nl=null;break;case"mousedown":Ac=!0;break;case"contextmenu":case"mouseup":case"dragend":Ac=!1,zu(C,a,M);break;case"selectionchange":if(pm)break;case"keydown":case"keyup":zu(C,a,M)}var J;if(zc)e:{switch(e){case"compositionstart":var ee="onCompositionStart";break e;case"compositionend":ee="onCompositionEnd";break e;case"compositionupdate":ee="onCompositionUpdate";break e}ee=void 0}else ll?uu(e,a)&&(ee="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(ee="onCompositionStart");ee&&(cu&&a.locale!=="ko"&&(ll||ee!=="onCompositionStart"?ee==="onCompositionEnd"&&ll&&(J=tu()):(ea=M,vc="value"in ea?ea.value:ea.textContent,ll=!0)),L=Ui(v,ee),0<L.length&&(ee=new nu(ee,e,null,a,M),C.push({event:ee,listeners:L}),J?ee.data=J:(J=ru(a),J!==null&&(ee.data=J)))),(J=lm?nm(e,a):im(e,a))&&(ee=Ui(v,"onBeforeInput"),0<ee.length&&(L=new nu("onBeforeInput","beforeinput",null,a,M),C.push({event:L,listeners:ee}),L.data=J)),Wm(C,e,v,a,M)}Ff(C,t)})}function yn(e,t,a){return{instance:e,listener:t,currentTarget:a}}function Ui(e,t){for(var a=t+"Capture",l=[];e!==null;){var n=e,i=n.stateNode;if(n=n.tag,n!==5&&n!==26&&n!==27||i===null||(n=Ll(e,a),n!=null&&l.unshift(yn(e,n,i)),n=Ll(e,t),n!=null&&l.push(yn(e,n,i))),e.tag===3)return l;e=e.return}return[]}function e0(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function If(e,t,a,l,n){for(var i=t._reactName,c=[];a!==null&&a!==l;){var s=a,r=s.alternate,v=s.stateNode;if(s=s.tag,r!==null&&r===l)break;s!==5&&s!==26&&s!==27||v===null||(r=v,n?(v=Ll(a,i),v!=null&&c.unshift(yn(a,v,r))):n||(v=Ll(a,i),v!=null&&c.push(yn(a,v,r)))),a=a.return}c.length!==0&&e.push({event:t,listeners:c})}var t0=/\r\n?/g,a0=/\u0000|\uFFFD/g;function $f(e){return(typeof e=="string"?e:""+e).replace(t0,`
`).replace(a0,"")}function Pf(e,t){return t=$f(t),$f(e)===t}function me(e,t,a,l,n,i){switch(a){case"children":typeof l=="string"?t==="body"||t==="textarea"&&l===""||el(e,l):(typeof l=="number"||typeof l=="bigint")&&t!=="body"&&el(e,""+l);break;case"className":qn(e,"class",l);break;case"tabIndex":qn(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":qn(e,a,l);break;case"style":$o(e,l,i);break;case"data":if(t!=="object"){qn(e,"data",l);break}case"src":case"href":if(l===""&&(t!=="a"||a!=="href")){e.removeAttribute(a);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=Gn(""+l),e.setAttribute(a,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof i=="function"&&(a==="formAction"?(t!=="input"&&me(e,t,"name",n.name,n,null),me(e,t,"formEncType",n.formEncType,n,null),me(e,t,"formMethod",n.formMethod,n,null),me(e,t,"formTarget",n.formTarget,n,null)):(me(e,t,"encType",n.encType,n,null),me(e,t,"method",n.method,n,null),me(e,t,"target",n.target,n,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=Gn(""+l),e.setAttribute(a,l);break;case"onClick":l!=null&&(e.onclick=jt);break;case"onScroll":l!=null&&$("scroll",e);break;case"onScrollEnd":l!=null&&$("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(u(61));if(a=l.__html,a!=null){if(n.children!=null)throw Error(u(60));e.innerHTML=a}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}a=Gn(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""+l):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":l===!0?e.setAttribute(a,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,l):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(a,l):e.removeAttribute(a);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(a):e.setAttribute(a,l);break;case"popover":$("beforetoggle",e),$("toggle",e),Ln(e,"popover",l);break;case"xlinkActuate":_t(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":_t(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":_t(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":_t(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":_t(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":_t(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":_t(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":_t(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":_t(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":Ln(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Np.get(a)||a,Ln(e,a,l))}}function $s(e,t,a,l,n,i){switch(a){case"style":$o(e,l,i);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(u(61));if(a=l.__html,a!=null){if(n.children!=null)throw Error(u(60));e.innerHTML=a}}break;case"children":typeof l=="string"?el(e,l):(typeof l=="number"||typeof l=="bigint")&&el(e,""+l);break;case"onScroll":l!=null&&$("scroll",e);break;case"onScrollEnd":l!=null&&$("scrollend",e);break;case"onClick":l!=null&&(e.onclick=jt);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Qo.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(n=a.endsWith("Capture"),t=a.slice(2,n?a.length-7:void 0),i=e[Fe]||null,i=i!=null?i[a]:null,typeof i=="function"&&e.removeEventListener(t,i,n),typeof l=="function")){typeof i!="function"&&i!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(t,l,n);break e}a in e?e[a]=l:l===!0?e.setAttribute(a,""):Ln(e,a,l)}}}function Ye(e,t,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":$("error",e),$("load",e);var l=!1,n=!1,i;for(i in a)if(a.hasOwnProperty(i)){var c=a[i];if(c!=null)switch(i){case"src":l=!0;break;case"srcSet":n=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(u(137,t));default:me(e,t,i,c,a,null)}}n&&me(e,t,"srcSet",a.srcSet,a,null),l&&me(e,t,"src",a.src,a,null);return;case"input":$("invalid",e);var s=i=c=n=null,r=null,v=null;for(l in a)if(a.hasOwnProperty(l)){var M=a[l];if(M!=null)switch(l){case"name":n=M;break;case"type":c=M;break;case"checked":r=M;break;case"defaultChecked":v=M;break;case"value":i=M;break;case"defaultValue":s=M;break;case"children":case"dangerouslySetInnerHTML":if(M!=null)throw Error(u(137,t));break;default:me(e,t,l,M,a,null)}}Jo(e,i,s,r,v,c,n,!1);return;case"select":$("invalid",e),l=c=i=null;for(n in a)if(a.hasOwnProperty(n)&&(s=a[n],s!=null))switch(n){case"value":i=s;break;case"defaultValue":c=s;break;case"multiple":l=s;default:me(e,t,n,s,a,null)}t=i,a=c,e.multiple=!!l,t!=null?Pa(e,!!l,t,!1):a!=null&&Pa(e,!!l,a,!0);return;case"textarea":$("invalid",e),i=n=l=null;for(c in a)if(a.hasOwnProperty(c)&&(s=a[c],s!=null))switch(c){case"value":l=s;break;case"defaultValue":n=s;break;case"children":i=s;break;case"dangerouslySetInnerHTML":if(s!=null)throw Error(u(91));break;default:me(e,t,c,s,a,null)}Wo(e,l,n,i);return;case"option":for(r in a)a.hasOwnProperty(r)&&(l=a[r],l!=null)&&(r==="selected"?e.selected=l&&typeof l!="function"&&typeof l!="symbol":me(e,t,r,l,a,null));return;case"dialog":$("beforetoggle",e),$("toggle",e),$("cancel",e),$("close",e);break;case"iframe":case"object":$("load",e);break;case"video":case"audio":for(l=0;l<bn.length;l++)$(bn[l],e);break;case"image":$("error",e),$("load",e);break;case"details":$("toggle",e);break;case"embed":case"source":case"link":$("error",e),$("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(v in a)if(a.hasOwnProperty(v)&&(l=a[v],l!=null))switch(v){case"children":case"dangerouslySetInnerHTML":throw Error(u(137,t));default:me(e,t,v,l,a,null)}return;default:if(dc(t)){for(M in a)a.hasOwnProperty(M)&&(l=a[M],l!==void 0&&$s(e,t,M,l,a,void 0));return}}for(s in a)a.hasOwnProperty(s)&&(l=a[s],l!=null&&me(e,t,s,l,a,null))}function l0(e,t,a,l){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var n=null,i=null,c=null,s=null,r=null,v=null,M=null;for(z in a){var C=a[z];if(a.hasOwnProperty(z)&&C!=null)switch(z){case"checked":break;case"value":break;case"defaultValue":r=C;default:l.hasOwnProperty(z)||me(e,t,z,null,l,C)}}for(var x in l){var z=l[x];if(C=a[x],l.hasOwnProperty(x)&&(z!=null||C!=null))switch(x){case"type":i=z;break;case"name":n=z;break;case"checked":v=z;break;case"defaultChecked":M=z;break;case"value":c=z;break;case"defaultValue":s=z;break;case"children":case"dangerouslySetInnerHTML":if(z!=null)throw Error(u(137,t));break;default:z!==C&&me(e,t,x,z,l,C)}}rc(e,c,s,r,v,M,i,n);return;case"select":z=c=s=x=null;for(i in a)if(r=a[i],a.hasOwnProperty(i)&&r!=null)switch(i){case"value":break;case"multiple":z=r;default:l.hasOwnProperty(i)||me(e,t,i,null,l,r)}for(n in l)if(i=l[n],r=a[n],l.hasOwnProperty(n)&&(i!=null||r!=null))switch(n){case"value":x=i;break;case"defaultValue":s=i;break;case"multiple":c=i;default:i!==r&&me(e,t,n,i,l,r)}t=s,a=c,l=z,x!=null?Pa(e,!!a,x,!1):!!l!=!!a&&(t!=null?Pa(e,!!a,t,!0):Pa(e,!!a,a?[]:"",!1));return;case"textarea":z=x=null;for(s in a)if(n=a[s],a.hasOwnProperty(s)&&n!=null&&!l.hasOwnProperty(s))switch(s){case"value":break;case"children":break;default:me(e,t,s,null,l,n)}for(c in l)if(n=l[c],i=a[c],l.hasOwnProperty(c)&&(n!=null||i!=null))switch(c){case"value":x=n;break;case"defaultValue":z=n;break;case"children":break;case"dangerouslySetInnerHTML":if(n!=null)throw Error(u(91));break;default:n!==i&&me(e,t,c,n,l,i)}Fo(e,x,z);return;case"option":for(var k in a)x=a[k],a.hasOwnProperty(k)&&x!=null&&!l.hasOwnProperty(k)&&(k==="selected"?e.selected=!1:me(e,t,k,null,l,x));for(r in l)x=l[r],z=a[r],l.hasOwnProperty(r)&&x!==z&&(x!=null||z!=null)&&(r==="selected"?e.selected=x&&typeof x!="function"&&typeof x!="symbol":me(e,t,r,x,l,z));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Y in a)x=a[Y],a.hasOwnProperty(Y)&&x!=null&&!l.hasOwnProperty(Y)&&me(e,t,Y,null,l,x);for(v in l)if(x=l[v],z=a[v],l.hasOwnProperty(v)&&x!==z&&(x!=null||z!=null))switch(v){case"children":case"dangerouslySetInnerHTML":if(x!=null)throw Error(u(137,t));break;default:me(e,t,v,x,l,z)}return;default:if(dc(t)){for(var he in a)x=a[he],a.hasOwnProperty(he)&&x!==void 0&&!l.hasOwnProperty(he)&&$s(e,t,he,void 0,l,x);for(M in l)x=l[M],z=a[M],!l.hasOwnProperty(M)||x===z||x===void 0&&z===void 0||$s(e,t,M,x,l,z);return}}for(var h in a)x=a[h],a.hasOwnProperty(h)&&x!=null&&!l.hasOwnProperty(h)&&me(e,t,h,null,l,x);for(C in l)x=l[C],z=a[C],!l.hasOwnProperty(C)||x===z||x==null&&z==null||me(e,t,C,x,l,z)}function ed(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function n0(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,a=performance.getEntriesByType("resource"),l=0;l<a.length;l++){var n=a[l],i=n.transferSize,c=n.initiatorType,s=n.duration;if(i&&s&&ed(c)){for(c=0,s=n.responseEnd,l+=1;l<a.length;l++){var r=a[l],v=r.startTime;if(v>s)break;var M=r.transferSize,C=r.initiatorType;M&&ed(C)&&(r=r.responseEnd,c+=M*(r<s?1:(s-v)/(r-v)))}if(--l,t+=8*(i+c)/(n.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Ps=null,eo=null;function ki(e){return e.nodeType===9?e:e.ownerDocument}function td(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function ad(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function to(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var ao=null;function i0(){var e=window.event;return e&&e.type==="popstate"?e===ao?!1:(ao=e,!0):(ao=null,!1)}var ld=typeof setTimeout=="function"?setTimeout:void 0,c0=typeof clearTimeout=="function"?clearTimeout:void 0,nd=typeof Promise=="function"?Promise:void 0,s0=typeof queueMicrotask=="function"?queueMicrotask:typeof nd<"u"?function(e){return nd.resolve(null).then(e).catch(o0)}:ld;function o0(e){setTimeout(function(){throw e})}function va(e){return e==="head"}function id(e,t){var a=t,l=0;do{var n=a.nextSibling;if(e.removeChild(a),n&&n.nodeType===8)if(a=n.data,a==="/$"||a==="/&"){if(l===0){e.removeChild(n),Bl(t);return}l--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")l++;else if(a==="html")xn(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,xn(a);for(var i=a.firstChild;i;){var c=i.nextSibling,s=i.nodeName;i[kl]||s==="SCRIPT"||s==="STYLE"||s==="LINK"&&i.rel.toLowerCase()==="stylesheet"||a.removeChild(i),i=c}}else a==="body"&&xn(e.ownerDocument.body);a=n}while(a);Bl(t)}function cd(e,t){var a=e;e=0;do{var l=a.nextSibling;if(a.nodeType===1?t?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(t?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),l&&l.nodeType===8)if(a=l.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=l}while(a)}function lo(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var a=t;switch(t=t.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":lo(a),oc(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function u0(e,t,a,l){for(;e.nodeType===1;){var n=a;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[kl])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(i=e.getAttribute("rel"),i==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(i!==n.rel||e.getAttribute("href")!==(n.href==null||n.href===""?null:n.href)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin)||e.getAttribute("title")!==(n.title==null?null:n.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(i=e.getAttribute("src"),(i!==(n.src==null?null:n.src)||e.getAttribute("type")!==(n.type==null?null:n.type)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin))&&i&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var i=n.name==null?null:""+n.name;if(n.type==="hidden"&&e.getAttribute("name")===i)return e}else return e;if(e=xt(e.nextSibling),e===null)break}return null}function r0(e,t,a){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=xt(e.nextSibling),e===null))return null;return e}function sd(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=xt(e.nextSibling),e===null))return null;return e}function no(e){return e.data==="$?"||e.data==="$~"}function io(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function f0(e,t){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||a.readyState!=="loading")t();else{var l=function(){t(),a.removeEventListener("DOMContentLoaded",l)};a.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function xt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var co=null;function od(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(t===0)return xt(e.nextSibling);t--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||t++}e=e.nextSibling}return null}function ud(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(t===0)return e;t--}else a!=="/$"&&a!=="/&"||t++}e=e.previousSibling}return null}function rd(e,t,a){switch(t=ki(a),e){case"html":if(e=t.documentElement,!e)throw Error(u(452));return e;case"head":if(e=t.head,!e)throw Error(u(453));return e;case"body":if(e=t.body,!e)throw Error(u(454));return e;default:throw Error(u(451))}}function xn(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);oc(e)}var St=new Map,fd=new Set;function Hi(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Wt=j.d;j.d={f:d0,r:p0,D:m0,C:h0,L:g0,m:v0,X:y0,S:b0,M:x0};function d0(){var e=Wt.f(),t=Oi();return e||t}function p0(e){var t=Wa(e);t!==null&&t.tag===5&&t.type==="form"?Ar(t):Wt.r(e)}var Cl=typeof document>"u"?null:document;function dd(e,t,a){var l=Cl;if(l&&typeof t=="string"&&t){var n=pt(t);n='link[rel="'+e+'"][href="'+n+'"]',typeof a=="string"&&(n+='[crossorigin="'+a+'"]'),fd.has(n)||(fd.add(n),e={rel:e,crossOrigin:a,href:t},l.querySelector(n)===null&&(t=l.createElement("link"),Ye(t,"link",e),je(t),l.head.appendChild(t)))}}function m0(e){Wt.D(e),dd("dns-prefetch",e,null)}function h0(e,t){Wt.C(e,t),dd("preconnect",e,t)}function g0(e,t,a){Wt.L(e,t,a);var l=Cl;if(l&&e&&t){var n='link[rel="preload"][as="'+pt(t)+'"]';t==="image"&&a&&a.imageSrcSet?(n+='[imagesrcset="'+pt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(n+='[imagesizes="'+pt(a.imageSizes)+'"]')):n+='[href="'+pt(e)+'"]';var i=n;switch(t){case"style":i=Ol(e);break;case"script":i=Nl(e)}St.has(i)||(e=N({rel:"preload",href:t==="image"&&a&&a.imageSrcSet?void 0:e,as:t},a),St.set(i,e),l.querySelector(n)!==null||t==="style"&&l.querySelector(Sn(i))||t==="script"&&l.querySelector(zn(i))||(t=l.createElement("link"),Ye(t,"link",e),je(t),l.head.appendChild(t)))}}function v0(e,t){Wt.m(e,t);var a=Cl;if(a&&e){var l=t&&typeof t.as=="string"?t.as:"script",n='link[rel="modulepreload"][as="'+pt(l)+'"][href="'+pt(e)+'"]',i=n;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=Nl(e)}if(!St.has(i)&&(e=N({rel:"modulepreload",href:e},t),St.set(i,e),a.querySelector(n)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(zn(i)))return}l=a.createElement("link"),Ye(l,"link",e),je(l),a.head.appendChild(l)}}}function b0(e,t,a){Wt.S(e,t,a);var l=Cl;if(l&&e){var n=Ia(l).hoistableStyles,i=Ol(e);t=t||"default";var c=n.get(i);if(!c){var s={loading:0,preload:null};if(c=l.querySelector(Sn(i)))s.loading=5;else{e=N({rel:"stylesheet",href:e,"data-precedence":t},a),(a=St.get(i))&&so(e,a);var r=c=l.createElement("link");je(r),Ye(r,"link",e),r._p=new Promise(function(v,M){r.onload=v,r.onerror=M}),r.addEventListener("load",function(){s.loading|=1}),r.addEventListener("error",function(){s.loading|=2}),s.loading|=4,Li(c,t,l)}c={type:"stylesheet",instance:c,count:1,state:s},n.set(i,c)}}}function y0(e,t){Wt.X(e,t);var a=Cl;if(a&&e){var l=Ia(a).hoistableScripts,n=Nl(e),i=l.get(n);i||(i=a.querySelector(zn(n)),i||(e=N({src:e,async:!0},t),(t=St.get(n))&&oo(e,t),i=a.createElement("script"),je(i),Ye(i,"link",e),a.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},l.set(n,i))}}function x0(e,t){Wt.M(e,t);var a=Cl;if(a&&e){var l=Ia(a).hoistableScripts,n=Nl(e),i=l.get(n);i||(i=a.querySelector(zn(n)),i||(e=N({src:e,async:!0,type:"module"},t),(t=St.get(n))&&oo(e,t),i=a.createElement("script"),je(i),Ye(i,"link",e),a.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},l.set(n,i))}}function pd(e,t,a,l){var n=(n=W.current)?Hi(n):null;if(!n)throw Error(u(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(t=Ol(a.href),a=Ia(n).hoistableStyles,l=a.get(t),l||(l={type:"style",instance:null,count:0,state:null},a.set(t,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=Ol(a.href);var i=Ia(n).hoistableStyles,c=i.get(e);if(c||(n=n.ownerDocument||n,c={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},i.set(e,c),(i=n.querySelector(Sn(e)))&&!i._p&&(c.instance=i,c.state.loading=5),St.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},St.set(e,a),i||S0(n,e,a,c.state))),t&&l===null)throw Error(u(528,""));return c}if(t&&l!==null)throw Error(u(529,""));return null;case"script":return t=a.async,a=a.src,typeof a=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Nl(a),a=Ia(n).hoistableScripts,l=a.get(t),l||(l={type:"script",instance:null,count:0,state:null},a.set(t,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(u(444,e))}}function Ol(e){return'href="'+pt(e)+'"'}function Sn(e){return'link[rel="stylesheet"]['+e+"]"}function md(e){return N({},e,{"data-precedence":e.precedence,precedence:null})}function S0(e,t,a,l){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?l.loading=1:(t=e.createElement("link"),l.preload=t,t.addEventListener("load",function(){return l.loading|=1}),t.addEventListener("error",function(){return l.loading|=2}),Ye(t,"link",a),je(t),e.head.appendChild(t))}function Nl(e){return'[src="'+pt(e)+'"]'}function zn(e){return"script[async]"+e}function hd(e,t,a){if(t.count++,t.instance===null)switch(t.type){case"style":var l=e.querySelector('style[data-href~="'+pt(a.href)+'"]');if(l)return t.instance=l,je(l),l;var n=N({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),je(l),Ye(l,"style",n),Li(l,a.precedence,e),t.instance=l;case"stylesheet":n=Ol(a.href);var i=e.querySelector(Sn(n));if(i)return t.state.loading|=4,t.instance=i,je(i),i;l=md(a),(n=St.get(n))&&so(l,n),i=(e.ownerDocument||e).createElement("link"),je(i);var c=i;return c._p=new Promise(function(s,r){c.onload=s,c.onerror=r}),Ye(i,"link",l),t.state.loading|=4,Li(i,a.precedence,e),t.instance=i;case"script":return i=Nl(a.src),(n=e.querySelector(zn(i)))?(t.instance=n,je(n),n):(l=a,(n=St.get(i))&&(l=N({},a),oo(l,n)),e=e.ownerDocument||e,n=e.createElement("script"),je(n),Ye(n,"link",l),e.head.appendChild(n),t.instance=n);case"void":return null;default:throw Error(u(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(l=t.instance,t.state.loading|=4,Li(l,a.precedence,e));return t.instance}function Li(e,t,a){for(var l=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),n=l.length?l[l.length-1]:null,i=n,c=0;c<l.length;c++){var s=l[c];if(s.dataset.precedence===t)i=s;else if(i!==n)break}i?i.parentNode.insertBefore(e,i.nextSibling):(t=a.nodeType===9?a.head:a,t.insertBefore(e,t.firstChild))}function so(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function oo(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var qi=null;function gd(e,t,a){if(qi===null){var l=new Map,n=qi=new Map;n.set(a,l)}else n=qi,l=n.get(a),l||(l=new Map,n.set(a,l));if(l.has(e))return l;for(l.set(e,null),a=a.getElementsByTagName(e),n=0;n<a.length;n++){var i=a[n];if(!(i[kl]||i[ke]||e==="link"&&i.getAttribute("rel")==="stylesheet")&&i.namespaceURI!=="http://www.w3.org/2000/svg"){var c=i.getAttribute(t)||"";c=e+c;var s=l.get(c);s?s.push(i):l.set(c,[i])}}return l}function vd(e,t,a){e=e.ownerDocument||e,e.head.insertBefore(a,t==="title"?e.querySelector("head > title"):null)}function z0(e,t,a){if(a===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;return t.rel==="stylesheet"?(e=t.disabled,typeof t.precedence=="string"&&e==null):!0;case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function bd(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function E0(e,t,a,l){if(a.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var n=Ol(l.href),i=t.querySelector(Sn(n));if(i){t=i._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=Yi.bind(e),t.then(e,e)),a.state.loading|=4,a.instance=i,je(i);return}i=t.ownerDocument||t,l=md(l),(n=St.get(n))&&so(l,n),i=i.createElement("link"),je(i);var c=i;c._p=new Promise(function(s,r){c.onload=s,c.onerror=r}),Ye(i,"link",l),a.instance=i}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,t),(t=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=Yi.bind(e),t.addEventListener("load",a),t.addEventListener("error",a))}}var uo=0;function M0(e,t){return e.stylesheets&&e.count===0&&Qi(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var l=setTimeout(function(){if(e.stylesheets&&Qi(e,e.stylesheets),e.unsuspend){var i=e.unsuspend;e.unsuspend=null,i()}},6e4+t);0<e.imgBytes&&uo===0&&(uo=62500*n0());var n=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Qi(e,e.stylesheets),e.unsuspend)){var i=e.unsuspend;e.unsuspend=null,i()}},(e.imgBytes>uo?50:800)+t);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(l),clearTimeout(n)}}:null}function Yi(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Qi(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Gi=null;function Qi(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Gi=new Map,t.forEach(w0,e),Gi=null,Yi.call(e))}function w0(e,t){if(!(t.state.loading&4)){var a=Gi.get(e);if(a)var l=a.get(null);else{a=new Map,Gi.set(e,a);for(var n=e.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<n.length;i++){var c=n[i];(c.nodeName==="LINK"||c.getAttribute("media")!=="not all")&&(a.set(c.dataset.precedence,c),l=c)}l&&a.set(null,l)}n=t.instance,c=n.getAttribute("data-precedence"),i=a.get(c)||l,i===l&&a.set(null,n),a.set(c,n),this.count++,l=Yi.bind(this),n.addEventListener("load",l),n.addEventListener("error",l),i?i.parentNode.insertBefore(n,i.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(n,e.firstChild)),t.state.loading|=4}}var En={$$typeof:ge,Provider:null,Consumer:null,_currentValue:V,_currentValue2:V,_threadCount:0};function T0(e,t,a,l,n,i,c,s,r){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=nc(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=nc(0),this.hiddenUpdates=nc(null),this.identifierPrefix=l,this.onUncaughtError=n,this.onCaughtError=i,this.onRecoverableError=c,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=r,this.incompleteTransitions=new Map}function yd(e,t,a,l,n,i,c,s,r,v,M,C){return e=new T0(e,t,a,c,r,v,M,C,s),t=1,i===!0&&(t|=24),i=ct(3,null,null,t),e.current=i,i.stateNode=e,t=Gc(),t.refCount++,e.pooledCache=t,t.refCount++,i.memoizedState={element:l,isDehydrated:a,cache:t},Zc(i),e}function xd(e){return e?(e=sl,e):sl}function Sd(e,t,a,l,n,i){n=xd(n),l.context===null?l.context=n:l.pendingContext=n,l=ca(t),l.payload={element:a},i=i===void 0?null:i,i!==null&&(l.callback=i),a=sa(e,l,t),a!==null&&(tt(a,e,t),en(a,e,t))}function zd(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<t?a:t}}function ro(e,t){zd(e,t),(e=e.alternate)&&zd(e,t)}function Ed(e){if(e.tag===13||e.tag===31){var t=Ba(e,67108864);t!==null&&tt(t,e,67108864),ro(e,67108864)}}function Md(e){if(e.tag===13||e.tag===31){var t=ft();t=ic(t);var a=Ba(e,t);a!==null&&tt(a,e,t),ro(e,t)}}var Vi=!0;function A0(e,t,a,l){var n=w.T;w.T=null;var i=j.p;try{j.p=2,fo(e,t,a,l)}finally{j.p=i,w.T=n}}function C0(e,t,a,l){var n=w.T;w.T=null;var i=j.p;try{j.p=8,fo(e,t,a,l)}finally{j.p=i,w.T=n}}function fo(e,t,a,l){if(Vi){var n=po(l);if(n===null)Is(e,t,l,Xi,a),Td(e,l);else if(N0(n,e,t,a,l))l.stopPropagation();else if(Td(e,l),t&4&&-1<O0.indexOf(e)){for(;n!==null;){var i=Wa(n);if(i!==null)switch(i.tag){case 3:if(i=i.stateNode,i.current.memoizedState.isDehydrated){var c=Ta(i.pendingLanes);if(c!==0){var s=i;for(s.pendingLanes|=2,s.entangledLanes|=2;c;){var r=1<<31-nt(c);s.entanglements[1]|=r,c&=~r}Bt(i),(ce&6)===0&&(Ai=at()+500,vn(0))}}break;case 31:case 13:s=Ba(i,2),s!==null&&tt(s,i,2),Oi(),ro(i,2)}if(i=po(l),i===null&&Is(e,t,l,Xi,a),i===n)break;n=i}n!==null&&l.stopPropagation()}else Is(e,t,l,null,a)}}function po(e){return e=mc(e),mo(e)}var Xi=null;function mo(e){if(Xi=null,e=Fa(e),e!==null){var t=E(e);if(t===null)e=null;else{var a=t.tag;if(a===13){if(e=B(t),e!==null)return e;e=null}else if(a===31){if(e=D(t),e!==null)return e;e=null}else if(a===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Xi=e,null}function wd(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(mp()){case Do:return 2;case _o:return 8;case jn:case hp:return 32;case jo:return 268435456;default:return 32}default:return 32}}var ho=!1,ba=null,ya=null,xa=null,Mn=new Map,wn=new Map,Sa=[],O0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Td(e,t){switch(e){case"focusin":case"focusout":ba=null;break;case"dragenter":case"dragleave":ya=null;break;case"mouseover":case"mouseout":xa=null;break;case"pointerover":case"pointerout":Mn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":wn.delete(t.pointerId)}}function Tn(e,t,a,l,n,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:a,eventSystemFlags:l,nativeEvent:i,targetContainers:[n]},t!==null&&(t=Wa(t),t!==null&&Ed(t)),e):(e.eventSystemFlags|=l,t=e.targetContainers,n!==null&&t.indexOf(n)===-1&&t.push(n),e)}function N0(e,t,a,l,n){switch(t){case"focusin":return ba=Tn(ba,e,t,a,l,n),!0;case"dragenter":return ya=Tn(ya,e,t,a,l,n),!0;case"mouseover":return xa=Tn(xa,e,t,a,l,n),!0;case"pointerover":var i=n.pointerId;return Mn.set(i,Tn(Mn.get(i)||null,e,t,a,l,n)),!0;case"gotpointercapture":return i=n.pointerId,wn.set(i,Tn(wn.get(i)||null,e,t,a,l,n)),!0}return!1}function Ad(e){var t=Fa(e.target);if(t!==null){var a=E(t);if(a!==null){if(t=a.tag,t===13){if(t=B(a),t!==null){e.blockedOn=t,qo(e.priority,function(){Md(a)});return}}else if(t===31){if(t=D(a),t!==null){e.blockedOn=t,qo(e.priority,function(){Md(a)});return}}else if(t===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Zi(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var a=po(e.nativeEvent);if(a===null){a=e.nativeEvent;var l=new a.constructor(a.type,a);pc=l,a.target.dispatchEvent(l),pc=null}else return t=Wa(a),t!==null&&Ed(t),e.blockedOn=a,!1;t.shift()}return!0}function Cd(e,t,a){Zi(e)&&a.delete(t)}function B0(){ho=!1,ba!==null&&Zi(ba)&&(ba=null),ya!==null&&Zi(ya)&&(ya=null),xa!==null&&Zi(xa)&&(xa=null),Mn.forEach(Cd),wn.forEach(Cd)}function Ki(e,t){e.blockedOn===t&&(e.blockedOn=null,ho||(ho=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,B0)))}var Ji=null;function Od(e){Ji!==e&&(Ji=e,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){Ji===e&&(Ji=null);for(var t=0;t<e.length;t+=3){var a=e[t],l=e[t+1],n=e[t+2];if(typeof l!="function"){if(mo(l||a)===null)continue;break}var i=Wa(a);i!==null&&(e.splice(t,3),t-=3,ds(i,{pending:!0,data:n,method:a.method,action:l},l,n))}}))}function Bl(e){function t(r){return Ki(r,e)}ba!==null&&Ki(ba,e),ya!==null&&Ki(ya,e),xa!==null&&Ki(xa,e),Mn.forEach(t),wn.forEach(t);for(var a=0;a<Sa.length;a++){var l=Sa[a];l.blockedOn===e&&(l.blockedOn=null)}for(;0<Sa.length&&(a=Sa[0],a.blockedOn===null);)Ad(a),a.blockedOn===null&&Sa.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(l=0;l<a.length;l+=3){var n=a[l],i=a[l+1],c=n[Fe]||null;if(typeof i=="function")c||Od(a);else if(c){var s=null;if(i&&i.hasAttribute("formAction")){if(n=i,c=i[Fe]||null)s=c.formAction;else if(mo(n)!==null)continue}else s=c.action;typeof s=="function"?a[l+1]=s:(a.splice(l,3),l-=3),Od(a)}}}function Nd(){function e(i){i.canIntercept&&i.info==="react-transition"&&i.intercept({handler:function(){return new Promise(function(c){return n=c})},focusReset:"manual",scroll:"manual"})}function t(){n!==null&&(n(),n=null),l||setTimeout(a,20)}function a(){if(!l&&!navigation.transition){var i=navigation.currentEntry;i&&i.url!=null&&navigation.navigate(i.url,{state:i.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,n=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(a,100),function(){l=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),n!==null&&(n(),n=null)}}}function go(e){this._internalRoot=e}Fi.prototype.render=go.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(u(409));var a=t.current,l=ft();Sd(a,l,e,t,null,null)},Fi.prototype.unmount=go.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Sd(e.current,2,null,e,null,null),Oi(),t[Ja]=null}};function Fi(e){this._internalRoot=e}Fi.prototype.unstable_scheduleHydration=function(e){if(e){var t=Lo();e={blockedOn:null,target:e,priority:t};for(var a=0;a<Sa.length&&t!==0&&t<Sa[a].priority;a++);Sa.splice(a,0,e),a===0&&Ad(e)}};var Bd=f.version;if(Bd!=="19.2.4")throw Error(u(527,Bd,"19.2.4"));j.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(u(188)):(e=Object.keys(e).join(","),Error(u(268,e)));return e=S(t),e=e!==null?_(e):null,e=e===null?null:e.stateNode,e};var D0={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:w,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Wi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Wi.isDisabled&&Wi.supportsFiber)try{jl=Wi.inject(D0),lt=Wi}catch{}}return Cn.createRoot=function(e,t){if(!b(e))throw Error(u(299));var a=!1,l="",n=kr,i=Hr,c=Lr;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onUncaughtError!==void 0&&(n=t.onUncaughtError),t.onCaughtError!==void 0&&(i=t.onCaughtError),t.onRecoverableError!==void 0&&(c=t.onRecoverableError)),t=yd(e,1,!1,null,null,a,l,null,n,i,c,Nd),e[Ja]=t.current,Ws(e),new go(t)},Cn.hydrateRoot=function(e,t,a){if(!b(e))throw Error(u(299));var l=!1,n="",i=kr,c=Hr,s=Lr,r=null;return a!=null&&(a.unstable_strictMode===!0&&(l=!0),a.identifierPrefix!==void 0&&(n=a.identifierPrefix),a.onUncaughtError!==void 0&&(i=a.onUncaughtError),a.onCaughtError!==void 0&&(c=a.onCaughtError),a.onRecoverableError!==void 0&&(s=a.onRecoverableError),a.formState!==void 0&&(r=a.formState)),t=yd(e,1,!0,t,a??null,l,n,r,i,c,s,Nd),t.context=xd(null),a=t.current,l=ft(),l=ic(l),n=ca(l),n.callback=null,sa(a,n,l),a=l,t.current.lanes=a,Ul(t,a),Bt(t),e[Ja]=t.current,Ws(e),new Fi(t)},Cn.version="19.2.4",Cn}var Yd;function X0(){if(Yd)return yo.exports;Yd=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(f){console.error(f)}}return o(),yo.exports=V0(),yo.exports}var Z0=X0();Id();function On(){return On=Object.assign?Object.assign.bind():function(o){for(var f=1;f<arguments.length;f++){var d=arguments[f];for(var u in d)({}).hasOwnProperty.call(d,u)&&(o[u]=d[u])}return o},On.apply(null,arguments)}var Ea;(function(o){o.Pop="POP",o.Push="PUSH",o.Replace="REPLACE"})(Ea||(Ea={}));const Gd="popstate";function K0(o){o===void 0&&(o={});function f(u,b){let{pathname:E,search:B,hash:D}=u.location;return Mo("",{pathname:E,search:B,hash:D},b.state&&b.state.usr||null,b.state&&b.state.key||"default")}function d(u,b){return typeof b=="string"?b:$d(b)}return F0(f,d,null,o)}function De(o,f){if(o===!1||o===null||typeof o>"u")throw new Error(f)}function Ao(o,f){if(!o){typeof console<"u"&&console.warn(f);try{throw new Error(f)}catch{}}}function J0(){return Math.random().toString(36).substr(2,8)}function Qd(o,f){return{usr:o.state,key:o.key,idx:f}}function Mo(o,f,d,u){return d===void 0&&(d=null),On({pathname:typeof o=="string"?o:o.pathname,search:"",hash:""},typeof f=="string"?Dl(f):f,{state:d,key:f&&f.key||u||J0()})}function $d(o){let{pathname:f="/",search:d="",hash:u=""}=o;return d&&d!=="?"&&(f+=d.charAt(0)==="?"?d:"?"+d),u&&u!=="#"&&(f+=u.charAt(0)==="#"?u:"#"+u),f}function Dl(o){let f={};if(o){let d=o.indexOf("#");d>=0&&(f.hash=o.substr(d),o=o.substr(0,d));let u=o.indexOf("?");u>=0&&(f.search=o.substr(u),o=o.substr(0,u)),o&&(f.pathname=o)}return f}function F0(o,f,d,u){u===void 0&&(u={});let{window:b=document.defaultView,v5Compat:E=!1}=u,B=b.history,D=Ea.Pop,A=null,S=_();S==null&&(S=0,B.replaceState(On({},B.state,{idx:S}),""));function _(){return(B.state||{idx:null}).idx}function N(){D=Ea.Pop;let G=_(),oe=G==null?null:G-S;S=G,A&&A({action:D,location:F.location,delta:oe})}function Q(G,oe){D=Ea.Push;let ze=Mo(F.location,G,oe);S=_()+1;let ge=Qd(ze,S),Ue=F.createHref(ze);try{B.pushState(ge,"",Ue)}catch(Xe){if(Xe instanceof DOMException&&Xe.name==="DataCloneError")throw Xe;b.location.assign(Ue)}E&&A&&A({action:D,location:F.location,delta:1})}function se(G,oe){D=Ea.Replace;let ze=Mo(F.location,G,oe);S=_();let ge=Qd(ze,S),Ue=F.createHref(ze);B.replaceState(ge,"",Ue),E&&A&&A({action:D,location:F.location,delta:0})}function le(G){let oe=b.location.origin!=="null"?b.location.origin:b.location.href,ze=typeof G=="string"?G:$d(G);return ze=ze.replace(/ $/,"%20"),De(oe,"No window.location.(origin|href) available to create URL for href: "+ze),new URL(ze,oe)}let F={get action(){return D},get location(){return o(b,B)},listen(G){if(A)throw new Error("A history only accepts one active listener");return b.addEventListener(Gd,N),A=G,()=>{b.removeEventListener(Gd,N),A=null}},createHref(G){return f(b,G)},createURL:le,encodeLocation(G){let oe=le(G);return{pathname:oe.pathname,search:oe.search,hash:oe.hash}},push:Q,replace:se,go(G){return B.go(G)}};return F}var Vd;(function(o){o.data="data",o.deferred="deferred",o.redirect="redirect",o.error="error"})(Vd||(Vd={}));function W0(o,f,d){return d===void 0&&(d="/"),I0(o,f,d)}function I0(o,f,d,u){let b=typeof f=="string"?Dl(f):f,E=tp(b.pathname||"/",d);if(E==null)return null;let B=Pd(o);$0(B);let D=null,A=rh(E);for(let S=0;D==null&&S<B.length;++S)D=sh(B[S],A);return D}function Pd(o,f,d,u){f===void 0&&(f=[]),d===void 0&&(d=[]),u===void 0&&(u="");let b=(E,B,D)=>{let A={relativePath:D===void 0?E.path||"":D,caseSensitive:E.caseSensitive===!0,childrenIndex:B,route:E};A.relativePath.startsWith("/")&&(De(A.relativePath.startsWith(u),'Absolute route path "'+A.relativePath+'" nested under path '+('"'+u+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),A.relativePath=A.relativePath.slice(u.length));let S=Va([u,A.relativePath]),_=d.concat(A);E.children&&E.children.length>0&&(De(E.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+S+'".')),Pd(E.children,f,_,S)),!(E.path==null&&!E.index)&&f.push({path:S,score:ih(S,E.index),routesMeta:_})};return o.forEach((E,B)=>{var D;if(E.path===""||!((D=E.path)!=null&&D.includes("?")))b(E,B);else for(let A of ep(E.path))b(E,B,A)}),f}function ep(o){let f=o.split("/");if(f.length===0)return[];let[d,...u]=f,b=d.endsWith("?"),E=d.replace(/\?$/,"");if(u.length===0)return b?[E,""]:[E];let B=ep(u.join("/")),D=[];return D.push(...B.map(A=>A===""?E:[E,A].join("/"))),b&&D.push(...B),D.map(A=>o.startsWith("/")&&A===""?"/":A)}function $0(o){o.sort((f,d)=>f.score!==d.score?d.score-f.score:ch(f.routesMeta.map(u=>u.childrenIndex),d.routesMeta.map(u=>u.childrenIndex)))}const P0=/^:[\w-]+$/,eh=3,th=2,ah=1,lh=10,nh=-2,Xd=o=>o==="*";function ih(o,f){let d=o.split("/"),u=d.length;return d.some(Xd)&&(u+=nh),f&&(u+=th),d.filter(b=>!Xd(b)).reduce((b,E)=>b+(P0.test(E)?eh:E===""?ah:lh),u)}function ch(o,f){return o.length===f.length&&o.slice(0,-1).every((u,b)=>u===f[b])?o[o.length-1]-f[f.length-1]:0}function sh(o,f,d){let{routesMeta:u}=o,b={},E="/",B=[];for(let D=0;D<u.length;++D){let A=u[D],S=D===u.length-1,_=E==="/"?f:f.slice(E.length)||"/",N=oh({path:A.relativePath,caseSensitive:A.caseSensitive,end:S},_),Q=A.route;if(!N)return null;Object.assign(b,N.params),B.push({params:b,pathname:Va([E,N.pathname]),pathnameBase:hh(Va([E,N.pathnameBase])),route:Q}),N.pathnameBase!=="/"&&(E=Va([E,N.pathnameBase]))}return B}function oh(o,f){typeof o=="string"&&(o={path:o,caseSensitive:!1,end:!0});let[d,u]=uh(o.path,o.caseSensitive,o.end),b=f.match(d);if(!b)return null;let E=b[0],B=E.replace(/(.)\/+$/,"$1"),D=b.slice(1);return{params:u.reduce((S,_,N)=>{let{paramName:Q,isOptional:se}=_;if(Q==="*"){let F=D[N]||"";B=E.slice(0,E.length-F.length).replace(/(.)\/+$/,"$1")}const le=D[N];return se&&!le?S[Q]=void 0:S[Q]=(le||"").replace(/%2F/g,"/"),S},{}),pathname:E,pathnameBase:B,pattern:o}}function uh(o,f,d){f===void 0&&(f=!1),d===void 0&&(d=!0),Ao(o==="*"||!o.endsWith("*")||o.endsWith("/*"),'Route path "'+o+'" will be treated as if it were '+('"'+o.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+o.replace(/\*$/,"/*")+'".'));let u=[],b="^"+o.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(B,D,A)=>(u.push({paramName:D,isOptional:A!=null}),A?"/?([^\\/]+)?":"/([^\\/]+)"));return o.endsWith("*")?(u.push({paramName:"*"}),b+=o==="*"||o==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):d?b+="\\/*$":o!==""&&o!=="/"&&(b+="(?:(?=\\/|$))"),[new RegExp(b,f?void 0:"i"),u]}function rh(o){try{return o.split("/").map(f=>decodeURIComponent(f).replace(/\//g,"%2F")).join("/")}catch(f){return Ao(!1,'The URL path "'+o+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+f+").")),o}}function tp(o,f){if(f==="/")return o;if(!o.toLowerCase().startsWith(f.toLowerCase()))return null;let d=f.endsWith("/")?f.length-1:f.length,u=o.charAt(d);return u&&u!=="/"?null:o.slice(d)||"/"}const fh=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,dh=o=>fh.test(o);function ph(o,f){f===void 0&&(f="/");let{pathname:d,search:u="",hash:b=""}=typeof o=="string"?Dl(o):o,E;if(d)if(dh(d))E=d;else{if(d.includes("//")){let B=d;d=np(d),Ao(!1,"Pathnames cannot have embedded double slashes - normalizing "+(B+" -> "+d))}d.startsWith("/")?E=Zd(d.substring(1),"/"):E=Zd(d,f)}else E=f;return{pathname:E,search:gh(u),hash:vh(b)}}function Zd(o,f){let d=f.replace(/\/+$/,"").split("/");return o.split("/").forEach(b=>{b===".."?d.length>1&&d.pop():b!=="."&&d.push(b)}),d.length>1?d.join("/"):"/"}function Eo(o,f,d,u){return"Cannot include a '"+o+"' character in a manually specified "+("`to."+f+"` field ["+JSON.stringify(u)+"].  Please separate it out to the ")+("`to."+d+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function mh(o){return o.filter((f,d)=>d===0||f.route.path&&f.route.path.length>0)}function ap(o,f){let d=mh(o);return f?d.map((u,b)=>b===d.length-1?u.pathname:u.pathnameBase):d.map(u=>u.pathnameBase)}function lp(o,f,d,u){u===void 0&&(u=!1);let b;typeof o=="string"?b=Dl(o):(b=On({},o),De(!b.pathname||!b.pathname.includes("?"),Eo("?","pathname","search",b)),De(!b.pathname||!b.pathname.includes("#"),Eo("#","pathname","hash",b)),De(!b.search||!b.search.includes("#"),Eo("#","search","hash",b)));let E=o===""||b.pathname==="",B=E?"/":b.pathname,D;if(B==null)D=d;else{let N=f.length-1;if(!u&&B.startsWith("..")){let Q=B.split("/");for(;Q[0]==="..";)Q.shift(),N-=1;b.pathname=Q.join("/")}D=N>=0?f[N]:"/"}let A=ph(b,D),S=B&&B!=="/"&&B.endsWith("/"),_=(E||B===".")&&d.endsWith("/");return!A.pathname.endsWith("/")&&(S||_)&&(A.pathname+="/"),A}const np=o=>o.replace(/\/\/+/g,"/"),Va=o=>np(o.join("/")),hh=o=>o.replace(/\/+$/,"").replace(/^\/*/,"/"),gh=o=>!o||o==="?"?"":o.startsWith("?")?o:"?"+o,vh=o=>!o||o==="#"?"":o.startsWith("#")?o:"#"+o;function bh(o){return o!=null&&typeof o.status=="number"&&typeof o.statusText=="string"&&typeof o.internal=="boolean"&&"data"in o}const ip=["post","put","patch","delete"];new Set(ip);const yh=["get",...ip];new Set(yh);function Nn(){return Nn=Object.assign?Object.assign.bind():function(o){for(var f=1;f<arguments.length;f++){var d=arguments[f];for(var u in d)({}).hasOwnProperty.call(d,u)&&(o[u]=d[u])}return o},Nn.apply(null,arguments)}const Co=U.createContext(null),xh=U.createContext(null),Bn=U.createContext(null),Ii=U.createContext(null),Xa=U.createContext({outlet:null,matches:[],isDataRoute:!1}),cp=U.createContext(null);function Dn(){return U.useContext(Ii)!=null}function Oo(){return Dn()||De(!1),U.useContext(Ii).location}function sp(o){U.useContext(Bn).static||U.useLayoutEffect(o)}function Za(){let{isDataRoute:o}=U.useContext(Xa);return o?_h():Sh()}function Sh(){Dn()||De(!1);let o=U.useContext(Co),{basename:f,future:d,navigator:u}=U.useContext(Bn),{matches:b}=U.useContext(Xa),{pathname:E}=Oo(),B=JSON.stringify(ap(b,d.v7_relativeSplatPath)),D=U.useRef(!1);return sp(()=>{D.current=!0}),U.useCallback(function(S,_){if(_===void 0&&(_={}),!D.current)return;if(typeof S=="number"){u.go(S);return}let N=lp(S,JSON.parse(B),E,_.relative==="path");o==null&&f!=="/"&&(N.pathname=N.pathname==="/"?f:Va([f,N.pathname])),(_.replace?u.replace:u.push)(N,_.state,_)},[f,u,B,E,o])}function zh(o,f){return Eh(o,f)}function Eh(o,f,d,u){Dn()||De(!1);let{navigator:b}=U.useContext(Bn),{matches:E}=U.useContext(Xa),B=E[E.length-1],D=B?B.params:{};B&&B.pathname;let A=B?B.pathnameBase:"/";B&&B.route;let S=Oo(),_;if(f){var N;let G=typeof f=="string"?Dl(f):f;A==="/"||(N=G.pathname)!=null&&N.startsWith(A)||De(!1),_=G}else _=S;let Q=_.pathname||"/",se=Q;if(A!=="/"){let G=A.replace(/^\//,"").split("/");se="/"+Q.replace(/^\//,"").split("/").slice(G.length).join("/")}let le=W0(o,{pathname:se}),F=Ch(le&&le.map(G=>Object.assign({},G,{params:Object.assign({},D,G.params),pathname:Va([A,b.encodeLocation?b.encodeLocation(G.pathname).pathname:G.pathname]),pathnameBase:G.pathnameBase==="/"?A:Va([A,b.encodeLocation?b.encodeLocation(G.pathnameBase).pathname:G.pathnameBase])})),E,d,u);return f&&F?U.createElement(Ii.Provider,{value:{location:Nn({pathname:"/",search:"",hash:"",state:null,key:"default"},_),navigationType:Ea.Pop}},F):F}function Mh(){let o=Dh(),f=bh(o)?o.status+" "+o.statusText:o instanceof Error?o.message:JSON.stringify(o),d=o instanceof Error?o.stack:null,b={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return U.createElement(U.Fragment,null,U.createElement("h2",null,"Unexpected Application Error!"),U.createElement("h3",{style:{fontStyle:"italic"}},f),d?U.createElement("pre",{style:b},d):null,null)}const wh=U.createElement(Mh,null);class Th extends U.Component{constructor(f){super(f),this.state={location:f.location,revalidation:f.revalidation,error:f.error}}static getDerivedStateFromError(f){return{error:f}}static getDerivedStateFromProps(f,d){return d.location!==f.location||d.revalidation!=="idle"&&f.revalidation==="idle"?{error:f.error,location:f.location,revalidation:f.revalidation}:{error:f.error!==void 0?f.error:d.error,location:d.location,revalidation:f.revalidation||d.revalidation}}componentDidCatch(f,d){console.error("React Router caught the following error during render",f,d)}render(){return this.state.error!==void 0?U.createElement(Xa.Provider,{value:this.props.routeContext},U.createElement(cp.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Ah(o){let{routeContext:f,match:d,children:u}=o,b=U.useContext(Co);return b&&b.static&&b.staticContext&&(d.route.errorElement||d.route.ErrorBoundary)&&(b.staticContext._deepestRenderedBoundaryId=d.route.id),U.createElement(Xa.Provider,{value:f},u)}function Ch(o,f,d,u){var b;if(f===void 0&&(f=[]),d===void 0&&(d=null),u===void 0&&(u=null),o==null){var E;if(!d)return null;if(d.errors)o=d.matches;else if((E=u)!=null&&E.v7_partialHydration&&f.length===0&&!d.initialized&&d.matches.length>0)o=d.matches;else return null}let B=o,D=(b=d)==null?void 0:b.errors;if(D!=null){let _=B.findIndex(N=>N.route.id&&D?.[N.route.id]!==void 0);_>=0||De(!1),B=B.slice(0,Math.min(B.length,_+1))}let A=!1,S=-1;if(d&&u&&u.v7_partialHydration)for(let _=0;_<B.length;_++){let N=B[_];if((N.route.HydrateFallback||N.route.hydrateFallbackElement)&&(S=_),N.route.id){let{loaderData:Q,errors:se}=d,le=N.route.loader&&Q[N.route.id]===void 0&&(!se||se[N.route.id]===void 0);if(N.route.lazy||le){A=!0,S>=0?B=B.slice(0,S+1):B=[B[0]];break}}}return B.reduceRight((_,N,Q)=>{let se,le=!1,F=null,G=null;d&&(se=D&&N.route.id?D[N.route.id]:void 0,F=N.route.errorElement||wh,A&&(S<0&&Q===0?(jh("route-fallback"),le=!0,G=null):S===Q&&(le=!0,G=N.route.hydrateFallbackElement||null)));let oe=f.concat(B.slice(0,Q+1)),ze=()=>{let ge;return se?ge=F:le?ge=G:N.route.Component?ge=U.createElement(N.route.Component,null):N.route.element?ge=N.route.element:ge=_,U.createElement(Ah,{match:N,routeContext:{outlet:_,matches:oe,isDataRoute:d!=null},children:ge})};return d&&(N.route.ErrorBoundary||N.route.errorElement||Q===0)?U.createElement(Th,{location:d.location,revalidation:d.revalidation,component:F,error:se,children:ze(),routeContext:{outlet:null,matches:oe,isDataRoute:!0}}):ze()},null)}var op=(function(o){return o.UseBlocker="useBlocker",o.UseRevalidator="useRevalidator",o.UseNavigateStable="useNavigate",o})(op||{}),up=(function(o){return o.UseBlocker="useBlocker",o.UseLoaderData="useLoaderData",o.UseActionData="useActionData",o.UseRouteError="useRouteError",o.UseNavigation="useNavigation",o.UseRouteLoaderData="useRouteLoaderData",o.UseMatches="useMatches",o.UseRevalidator="useRevalidator",o.UseNavigateStable="useNavigate",o.UseRouteId="useRouteId",o})(up||{});function Oh(o){let f=U.useContext(Co);return f||De(!1),f}function Nh(o){let f=U.useContext(xh);return f||De(!1),f}function Bh(o){let f=U.useContext(Xa);return f||De(!1),f}function rp(o){let f=Bh(),d=f.matches[f.matches.length-1];return d.route.id||De(!1),d.route.id}function Dh(){var o;let f=U.useContext(cp),d=Nh(),u=rp();return f!==void 0?f:(o=d.errors)==null?void 0:o[u]}function _h(){let{router:o}=Oh(op.UseNavigateStable),f=rp(up.UseNavigateStable),d=U.useRef(!1);return sp(()=>{d.current=!0}),U.useCallback(function(b,E){E===void 0&&(E={}),d.current&&(typeof b=="number"?o.navigate(b):o.navigate(b,Nn({fromRouteId:f},E)))},[o,f])}const Kd={};function jh(o,f,d){Kd[o]||(Kd[o]=!0)}function Rh(o,f){o?.v7_startTransition,o?.v7_relativeSplatPath}function Uh(o){let{to:f,replace:d,state:u,relative:b}=o;Dn()||De(!1);let{future:E,static:B}=U.useContext(Bn),{matches:D}=U.useContext(Xa),{pathname:A}=Oo(),S=Za(),_=lp(f,ap(D,E.v7_relativeSplatPath),A,b==="path"),N=JSON.stringify(_);return U.useEffect(()=>S(JSON.parse(N),{replace:d,state:u,relative:b}),[S,N,b,d,u]),null}function It(o){De(!1)}function kh(o){let{basename:f="/",children:d=null,location:u,navigationType:b=Ea.Pop,navigator:E,static:B=!1,future:D}=o;Dn()&&De(!1);let A=f.replace(/^\/*/,"/"),S=U.useMemo(()=>({basename:A,navigator:E,static:B,future:Nn({v7_relativeSplatPath:!1},D)}),[A,D,E,B]);typeof u=="string"&&(u=Dl(u));let{pathname:_="/",search:N="",hash:Q="",state:se=null,key:le="default"}=u,F=U.useMemo(()=>{let G=tp(_,A);return G==null?null:{location:{pathname:G,search:N,hash:Q,state:se,key:le},navigationType:b}},[A,_,N,Q,se,le,b]);return F==null?null:U.createElement(Bn.Provider,{value:S},U.createElement(Ii.Provider,{children:d,value:F}))}function Hh(o){let{children:f,location:d}=o;return zh(wo(f),d)}new Promise(()=>{});function wo(o,f){f===void 0&&(f=[]);let d=[];return U.Children.forEach(o,(u,b)=>{if(!U.isValidElement(u))return;let E=[...f,b];if(u.type===U.Fragment){d.push.apply(d,wo(u.props.children,E));return}u.type!==It&&De(!1),!u.props.index||!u.props.children||De(!1);let B={id:u.props.id||E.join("-"),caseSensitive:u.props.caseSensitive,element:u.props.element,Component:u.props.Component,index:u.props.index,path:u.props.path,loader:u.props.loader,action:u.props.action,errorElement:u.props.errorElement,ErrorBoundary:u.props.ErrorBoundary,hasErrorBoundary:u.props.ErrorBoundary!=null||u.props.errorElement!=null,shouldRevalidate:u.props.shouldRevalidate,handle:u.props.handle,lazy:u.props.lazy};u.props.children&&(B.children=wo(u.props.children,E)),d.push(B)}),d}const Lh="6";try{window.__reactRouterVersion=Lh}catch{}const qh="startTransition",Jd=q0[qh];function Yh(o){let{basename:f,children:d,future:u,window:b}=o,E=U.useRef();E.current==null&&(E.current=K0({window:b,v5Compat:!0}));let B=E.current,[D,A]=U.useState({action:B.action,location:B.location}),{v7_startTransition:S}=u||{},_=U.useCallback(N=>{S&&Jd?Jd(()=>A(N)):A(N)},[A,S]);return U.useLayoutEffect(()=>B.listen(_),[B,_]),U.useEffect(()=>Rh(u),[u]),U.createElement(kh,{basename:f,children:d,location:D.location,navigationType:D.action,navigator:B,future:u})}var Fd;(function(o){o.UseScrollRestoration="useScrollRestoration",o.UseSubmit="useSubmit",o.UseSubmitFetcher="useSubmitFetcher",o.UseFetcher="useFetcher",o.useViewTransitionState="useViewTransitionState"})(Fd||(Fd={}));var Wd;(function(o){o.UseFetcher="useFetcher",o.UseFetchers="useFetchers",o.UseScrollRestoration="useScrollRestoration"})(Wd||(Wd={}));const Gh=`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&family=Orbitron:wght@500;700&family=Roboto+Slab:wght@400;600&display=swap');

  .entry-root {
    margin: 0;
    font-family: "Montserrat", sans-serif;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    position: relative;
    color: #f4f1e1;
    overflow: hidden;
    perspective: 1000px;
    background: url("https://techportal.in/wp-content/uploads/2023/11/iit-bombay-768x318.jpg") no-repeat center center/cover;
    transition: background-position 0.3s ease;
    cursor: default;
  }

  .entry-root::before {
    content: "";
    position: absolute;
    top: 0; left: 0; right: 0; bottom: 0;
    backdrop-filter: blur(6px);
    z-index: 0;
  }

  .entry-root::after {
    content: "";
    position: absolute;
    top: 0; left: 0; right: 0; bottom: 0;
    background: rgba(0, 0, 0, 0.45);
    z-index: 0;
  }

  .entry-container {
    position: relative;
    z-index: 1;
    animation: fadeIn 2s ease;
    transform-style: preserve-3d;
  }

  .entry-h1 {
    font-size: 3.5rem;
    margin-bottom: 0.5rem;
    letter-spacing: 3px;
    font-family: "Orbitron", sans-serif;
    text-shadow: 3px 3px 8px #000;
    color: #f4f1e1;
    animation: float3D 6s infinite ease-in-out;
  }

  .entry-h2 {
    font-size: 1.8rem;
    margin: 1rem auto 2rem auto;
    font-family: "Roboto Slab", serif;
    letter-spacing: 1px;
    text-shadow: 2px 2px 6px #000;
    color: #f4f1e1;
    border-right: 2px solid #f4f1e1;
    white-space: nowrap;
    overflow: hidden;
    width: 0;
    animation: typing 2.5s steps(20, end) forwards, blink 0.75s step-end infinite;
  }

  @keyframes typing {
    from { width: 0; }
    to { width: 20ch; }
  }
  @keyframes blink {
    50% { border-color: transparent; }
  }

  .explore-btn {
    background: #a67c52;
    color: #fff;
    border: none;
    padding: 1rem 2.5rem;
    font-size: 1.3rem;
    border-radius: 12px;
    cursor: pointer;
    transition: transform 0.6s ease, background 0.3s ease, box-shadow 0.3s ease;
    font-family: "Montserrat", sans-serif;
  }

  .explore-btn:hover,
  .explore-btn:focus {
    background: #3b6b3b;
    transform: scale(1.1) rotateY(10deg);
    box-shadow: 0 0 25px rgba(255,255,255,0.7);
    outline: none;
  }

  .explore-btn:active {
    transform: scale(0.95) rotateX(10deg);
  }

  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }

  @keyframes float3D {
    0% { transform: rotateY(0deg) translateZ(0); }
    50% { transform: rotateY(10deg) translateZ(20px); }
    100% { transform: rotateY(0deg) translateZ(0); }
  }

  .entry-modal {
    position: fixed;
    top: 50%; left: 50%;
    background: #e8dcc2;
    color: #333;
    padding: 3rem;
    border-radius: 20px;
    border: 3px solid #6b4226;
    box-shadow: 0 0 40px rgba(0,0,0,0.6);
    z-index: 1000;
    animation: popUp 0.5s ease forwards;
    width: 450px;
    text-align: center;
    font-family: "Montserrat", sans-serif;
  }

  @keyframes popUp {
    from { opacity: 0; transform: translate(-50%, -50%) scale(0.8); }
    to { opacity: 1; transform: translate(-50%, -50%) scale(1); }
  }

  .entry-modal h3 {
    margin-top: 0;
    font-family: "Orbitron", sans-serif;
    margin-bottom: 1.5rem;
    font-size: 1.5rem;
  }

  .entry-modal button {
    margin: 0.5rem;
    padding: 0.8rem 1.5rem;
    border: none;
    border-radius: 12px;
    cursor: pointer;
    background: #3b6b3b;
    color: #fff;
    transition: transform 0.3s ease, background 0.3s ease, box-shadow 0.3s ease;
    font-size: 1rem;
    font-family: "Montserrat", sans-serif;
  }

  .entry-modal button:hover {
    transform: scale(1.15) rotateY(5deg);
    background: #a67c52;
    box-shadow: 0 0 15px rgba(0,0,0,0.4);
  }

  @media (max-width: 768px) {
    .entry-h1 {
      font-size: 2.5rem;
      letter-spacing: 1px;
    }
    .entry-h2 {
      font-size: 1.2rem;
      white-space: normal;
      width: auto !important;
      animation: none;
      border-right: none;
    }
    .explore-btn {
      padding: 0.8rem 1.5rem;
      font-size: 1.1rem;
    }
    .entry-modal {
      width: 90%;
      padding: 1.5rem;
    }
    .entry-modal button {
      padding: 0.6rem 1rem;
      font-size: 0.9rem;
    }
  }
`;function Qh(){const[o,f]=U.useState(!1),d=Za();U.useEffect(()=>{const b=E=>{const B=(E.clientX/window.innerWidth-.5)*10,D=(E.clientY/window.innerHeight-.5)*10;document.querySelector(".entry-root").style.backgroundPosition=`${50+B}% ${50+D}%`};return document.addEventListener("mousemove",b),()=>document.removeEventListener("mousemove",b)},[]);const u=()=>{d("/landing")};return y.jsxs(y.Fragment,{children:[y.jsx("style",{children:Gh}),y.jsxs("div",{className:"entry-root",children:[y.jsxs("div",{className:"entry-container",children:[y.jsx("h1",{className:"entry-h1",children:"Smart Move"}),y.jsx("h2",{className:"entry-h2",children:"IIT Bombay Navigator"}),y.jsx("button",{className:"explore-btn",onClick:()=>f(!0),children:"Explore IIT Bombay"})]}),o&&y.jsxs("div",{className:"entry-modal",children:[y.jsx("h3",{children:"Welcome! Who is visiting the campus?"}),y.jsx("button",{onClick:u,children:"New Student"}),y.jsx("button",{onClick:u,children:"Visitor"}),y.jsx("button",{onClick:u,children:"Community Member"})]})]})]})}const Vh={buildings:[{id:"main-building",name:"Main Building",description:"Central administrative offices",color:"#8B4513",icon:"fa-building"},{id:"sjmsom",name:"SJMSOM",description:"School of Management",color:"#E07A5F",icon:"fa-briefcase"},{id:"library",name:"Central Library",description:"24/7 study spaces",color:"#81B29A",icon:"fa-book"},{id:"lc",name:"Lecture Complex",description:"Main lecture halls",color:"#F4A261",icon:"fa-chalkboard-teacher"},{id:"vmcc",name:"Victor Menezes Convention Centre",description:"Events and conferences",color:"#3D5A40",icon:"fa-calendar"}]};function Xh(o,f){return"#"+o.replace(/^#/,"").replace(/../g,d=>("0"+Math.min(255,Math.max(0,parseInt(d,16)+f)).toString(16)).slice(-2))}const Zh=`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&family=Montserrat:wght@600;700;800&display=swap');
  @import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css');

  :root {
    --earth-brown: #8B4513; --deep-earth: #654321; --terracotta: #E07A5F;
    --sand: #F4A261; --sage: #81B29A; --forest: #3D5A40;
    --clay: #D4A574; --stone: #A8A196; --cream: #F9F5F0;
    --charcoal: #2D3142; --white: #FFFFFF;
  }

  .landing-root * { margin: 0; padding: 0; box-sizing: border-box; -webkit-tap-highlight-color: transparent; }

  .landing-root {
    font-family: 'Poppins', sans-serif;
    overflow-x: hidden;
    background: #1a1a1a;
    min-height: 100vh;
    position: relative;
  }

  .background-wrapper {
    position: fixed; top: 0; left: 0; width: 100%; height: 100%;
    z-index: 0; overflow: hidden;
  }
  .background-image { width: 100%; height: 100%; object-fit: cover; object-position: center; }
  .background-overlay {
    position: absolute; top: 0; left: 0; width: 100%; height: 100%;
    background: linear-gradient(135deg, rgba(139,69,19,0.85) 0%, rgba(101,67,33,0.75) 50%, rgba(61,90,64,0.85) 100%);
    backdrop-filter: blur(3px);
  }

  .header {
    position: fixed; top: 0; left: 0; right: 0; height: 90px;
    background: rgba(255,255,255,0.15); backdrop-filter: blur(25px);
    box-shadow: 0 8px 32px rgba(0,0,0,0.3); z-index: 1000;
    display: flex; align-items: center; justify-content: space-between;
    padding: 0 50px; border-bottom: 3px solid rgba(212,165,116,0.3);
  }

  .logo-section { display: flex; align-items: center; gap: 18px; }

  .logo-icon {
    width: 60px; height: 60px;
    background: linear-gradient(135deg, var(--earth-brown), var(--terracotta));
    border-radius: 15px; display: flex; align-items: center; justify-content: center;
    box-shadow: 0 8px 25px rgba(139,69,19,0.5), inset 0 -3px 10px rgba(0,0,0,0.3);
    animation: logo-pulse 3s ease-in-out infinite; position: relative;
  }
  .logo-icon::before {
    content: ''; position: absolute; inset: -5px;
    background: conic-gradient(from 0deg, var(--terracotta), var(--sand), var(--sage), var(--terracotta));
    border-radius: 18px; z-index: -1; opacity: 0.6; filter: blur(15px);
    animation: rotateAnim 4s linear infinite;
  }
  @keyframes logo-pulse { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.05); } }
  @keyframes rotateAnim { 100% { transform: rotate(360deg); } }

  .logo-icon i { font-size: 28px; color: white; filter: drop-shadow(0 3px 6px rgba(0,0,0,0.3)); }

  .logo-text h1 {
    font-family: 'Montserrat', sans-serif; font-size: 32px; font-weight: 800;
    background: linear-gradient(135deg, #fff, var(--clay));
    -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
    text-shadow: none; letter-spacing: -0.5px;
  }
  .logo-text p { font-size: 12px; color: rgba(255,255,255,0.8); font-weight: 600; text-transform: uppercase; letter-spacing: 2px; }

  .login-button {
    padding: 14px 35px;
    background: linear-gradient(135deg, var(--terracotta), var(--sand));
    color: white; border: none; border-radius: 50px; font-size: 15px;
    font-weight: 700; cursor: pointer; transition: all 0.4s ease;
    box-shadow: 0 8px 25px rgba(224,122,95,0.4); position: relative; overflow: hidden;
    text-transform: uppercase; letter-spacing: 1px;
  }
  .login-button::before {
    content: ''; position: absolute; top: 50%; left: 50%; width: 0; height: 0;
    border-radius: 50%; background: rgba(255,255,255,0.3);
    transform: translate(-50%,-50%); transition: width 0.6s, height 0.6s;
  }
  .login-button:hover::before { width: 300px; height: 300px; }
  .login-button:hover { transform: translateY(-3px); box-shadow: 0 12px 35px rgba(224,122,95,0.6); }
  .login-button i { margin-right: 10px; }

  .main-container { position: relative; width: 100%; min-height: 100vh; padding-top: 90px; z-index: 1; }

  .hero-section { padding: 60px 50px 40px; text-align: center; margin-bottom: 50px; }
  .hero-title {
    font-family: 'Montserrat', sans-serif; font-size: 56px; font-weight: 800; color: white;
    margin-bottom: 20px; text-shadow: 0 5px 20px rgba(0,0,0,0.6); letter-spacing: -1px;
    animation: fadeInDown 0.8s ease-out;
  }
  @keyframes fadeInDown { from { opacity: 0; transform: translateY(-30px); } to { opacity: 1; transform: translateY(0); } }
  .hero-subtitle {
    font-size: 22px; color: rgba(255,255,255,0.9); font-weight: 500;
    max-width: 700px; margin: 0 auto 15px; text-shadow: 0 3px 12px rgba(0,0,0,0.5);
    animation: fadeInUp 0.8s ease-out 0.2s both;
  }
  @keyframes fadeInUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }

  .iit-badge {
    display: inline-flex; align-items: center; gap: 10px;
    background: rgba(255,255,255,0.2); backdrop-filter: blur(15px);
    padding: 12px 30px; border-radius: 50px; border: 2px solid rgba(255,255,255,0.3);
    color: white; font-weight: 600; font-size: 14px;
    box-shadow: 0 8px 25px rgba(0,0,0,0.3); animation: fadeInUp 0.8s ease-out 0.4s both;
    text-decoration: none; cursor: pointer; transition: all 0.3s ease;
  }
  .iit-badge:hover { background: rgba(255,255,255,0.3); border-color: rgba(255,255,255,0.5); transform: translateY(-3px); box-shadow: 0 12px 35px rgba(0,0,0,0.4); }
  .iit-badge i { font-size: 18px; }

  .search-section { max-width: 800px; margin: 0 auto 50px; padding: 0 50px; animation: fadeInUp 0.8s ease-out 0.8s both; }
  .search-container {
    background: rgba(255,255,255,0.15); backdrop-filter: blur(25px);
    border-radius: 25px; padding: 8px; border: 2px solid rgba(255,255,255,0.3);
    box-shadow: 0 15px 50px rgba(0,0,0,0.4); transition: all 0.3s ease;
  }
  .search-container:focus-within { border-color: var(--terracotta); box-shadow: 0 20px 60px rgba(224,122,95,0.4); background: rgba(255,255,255,0.2); }
  .search-input-wrapper { display: flex; align-items: center; padding: 12px 20px; }
  .search-input-wrapper i { font-size: 22px; color: white; margin-right: 15px; }
  .search-input { flex: 1; background: transparent; border: none; outline: none; font-size: 18px; color: white; font-weight: 500; font-family: 'Poppins', sans-serif; }
  .search-input::placeholder { color: rgba(255,255,255,0.6); }
  .search-results { max-height: 400px; overflow-y: auto; margin-top: 8px; }
  .search-result-item {
    background: rgba(255,255,255,0.1); backdrop-filter: blur(15px); padding: 18px 20px;
    margin-bottom: 8px; border-radius: 15px; cursor: pointer; transition: all 0.3s ease;
    border: 1px solid rgba(255,255,255,0.2); display: flex; align-items: center; gap: 15px;
  }
  .search-result-item:hover { background: rgba(255,255,255,0.2); border-color: var(--terracotta); transform: translateX(8px); }
  .result-icon { width: 50px; height: 50px; border-radius: 12px; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
  .result-icon i { color: white; font-size: 22px; }
  .result-content h4 { color: white; font-size: 16px; font-weight: 600; margin-bottom: 5px; }
  .result-content p { color: rgba(255,255,255,0.7); font-size: 13px; }

  .blocks-container { display: grid; grid-template-columns: repeat(3, 1fr); gap: 35px; padding: 0 50px 60px; max-width: 1600px; margin: 0 auto; }
  .block-card {
    background: rgba(255,255,255,0.12); backdrop-filter: blur(25px);
    border-radius: 30px; padding: 45px 35px; border: 2px solid rgba(255,255,255,0.2);
    box-shadow: 0 20px 60px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.2);
    transition: all 0.5s cubic-bezier(0.4,0,0.2,1); cursor: pointer;
    position: relative; overflow: hidden; animation: slideInUp 0.8s ease-out both;
  }
  .block-card:nth-child(1) { animation-delay: 0.2s; }
  .block-card:nth-child(2) { animation-delay: 0.4s; }
  .block-card:nth-child(3) { animation-delay: 0.6s; }
  @keyframes slideInUp { from { opacity: 0; transform: translateY(60px); } to { opacity: 1; transform: translateY(0); } }
  .block-card::before { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 5px; background: linear-gradient(90deg, var(--terracotta), var(--sand), var(--sage)); opacity: 0; transition: opacity 0.3s ease; }
  .block-card:hover::before { opacity: 1; }
  .block-card:hover { transform: translateY(-15px) scale(1.02); background: rgba(255,255,255,0.18); border-color: rgba(255,255,255,0.4); box-shadow: 0 30px 80px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.3), 0 0 50px rgba(224,122,95,0.2); }

  .block-icon { width: 90px; height: 90px; margin: 0 auto 30px; border-radius: 50%; display: flex; align-items: center; justify-content: center; box-shadow: 0 15px 40px rgba(224,122,95,0.4), inset 0 -3px 10px rgba(0,0,0,0.2); position: relative; animation: float 4s ease-in-out infinite; }
  .block-card:nth-child(1) .block-icon { background: linear-gradient(135deg, #E07A5F, #F4A261); }
  .block-card:nth-child(2) .block-icon { background: linear-gradient(135deg, #81B29A, #3D5A40); animation-delay: 0.5s; }
  .block-card:nth-child(3) .block-icon { background: linear-gradient(135deg, #8B4513, #654321); animation-delay: 1s; }
  @keyframes float { 0%, 100% { transform: translateY(0) rotate(0deg); } 25% { transform: translateY(-10px) rotate(5deg); } 50% { transform: translateY(-5px) rotate(0deg); } 75% { transform: translateY(-10px) rotate(-5deg); } }
  .block-icon::before { content: ''; position: absolute; inset: -8px; background: inherit; border-radius: 50%; filter: blur(20px); opacity: 0.5; z-index: -1; }
  .block-icon i { font-size: 42px; color: white; filter: drop-shadow(0 5px 10px rgba(0,0,0,0.3)); }

  .block-title { font-family: 'Montserrat', sans-serif; font-size: 26px; font-weight: 700; color: white; margin-bottom: 15px; text-align: center; text-shadow: 0 3px 12px rgba(0,0,0,0.5); }
  .block-description { font-size: 15px; color: rgba(255,255,255,0.85); text-align: center; line-height: 1.7; margin-bottom: 25px; text-shadow: 0 2px 8px rgba(0,0,0,0.4); }
  .block-stats { display: flex; justify-content: space-around; margin-top: 30px; padding-top: 25px; border-top: 1px solid rgba(255,255,255,0.2); }
  .stat-item { text-align: center; }
  .stat-number { font-size: 32px; font-weight: 700; color: white; margin-bottom: 5px; text-shadow: 0 3px 10px rgba(0,0,0,0.5); }
  .stat-label { font-size: 12px; color: rgba(255,255,255,0.75); text-transform: uppercase; letter-spacing: 1px; font-weight: 600; }

  .block-action {
    width: 100%; padding: 16px; background: rgba(255,255,255,0.15); backdrop-filter: blur(10px);
    border: 2px solid rgba(255,255,255,0.3); border-radius: 15px; color: white; font-size: 15px;
    font-weight: 700; cursor: pointer; transition: all 0.3s ease; margin-top: 25px;
    text-transform: uppercase; letter-spacing: 1px; display: block; text-align: center; text-decoration: none;
  }
  .block-action:hover { background: rgba(255,255,255,0.25); border-color: rgba(255,255,255,0.5); transform: translateY(-2px); box-shadow: 0 8px 20px rgba(0,0,0,0.3); color: white; }
  .block-action i { margin-left: 8px; transition: transform 0.3s ease; }
  .block-action:hover i { transform: translateX(5px); }

  .login-modal-overlay {
    position: fixed; top: 0; left: 0; right: 0; bottom: 0;
    background: rgba(0,0,0,0.85); backdrop-filter: blur(10px);
    z-index: 2000; display: flex; align-items: center; justify-content: center;
    animation: fadeInModal 0.3s ease-out;
  }
  @keyframes fadeInModal { from { opacity: 0; } to { opacity: 1; } }
  .login-box {
    background: rgba(255,255,255,0.95); border-radius: 30px; padding: 50px 45px;
    max-width: 450px; width: 90%; box-shadow: 0 30px 90px rgba(0,0,0,0.5);
    border: 3px solid rgba(212,165,116,0.5); animation: scaleIn 0.4s ease-out; position: relative;
  }
  @keyframes scaleIn { from { transform: scale(0.9); opacity: 0; } to { transform: scale(1); opacity: 1; } }
  .close-modal { position: absolute; top: 20px; right: 20px; width: 40px; height: 40px; border: none; background: rgba(224,122,95,0.15); border-radius: 50%; cursor: pointer; display: flex; align-items: center; justify-content: center; transition: all 0.3s ease; }
  .close-modal:hover { background: var(--terracotta); transform: rotate(90deg); }
  .close-modal i { color: var(--terracotta); font-size: 18px; }
  .close-modal:hover i { color: white; }
  .login-header { text-align: center; margin-bottom: 35px; }
  .login-header h2 { font-family: 'Montserrat', sans-serif; font-size: 32px; font-weight: 800; background: linear-gradient(135deg, var(--earth-brown), var(--terracotta)); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; margin-bottom: 10px; }
  .login-header p { font-size: 14px; color: var(--stone); font-weight: 500; }
  .input-group { margin-bottom: 22px; }
  .input-group label { display: block; font-size: 13px; font-weight: 700; color: var(--charcoal); margin-bottom: 8px; text-transform: uppercase; letter-spacing: 0.5px; }
  .input-wrapper { position: relative; }
  .input-wrapper i { position: absolute; left: 18px; top: 50%; transform: translateY(-50%); color: var(--stone); font-size: 16px; }
  .input-wrapper input { width: 100%; padding: 15px 20px 15px 50px; border: 2px solid var(--clay); border-radius: 12px; font-size: 15px; font-family: 'Poppins', sans-serif; transition: all 0.3s ease; background: rgba(249,245,240,0.7); }
  .input-wrapper input:focus { outline: none; border-color: var(--terracotta); background: white; box-shadow: 0 5px 20px rgba(224,122,95,0.2); }
  .login-submit { width: 100%; padding: 16px; border: none; border-radius: 12px; background: linear-gradient(135deg, var(--earth-brown), var(--terracotta)); color: white; font-size: 16px; font-weight: 700; cursor: pointer; transition: all 0.3s ease; font-family: 'Poppins', sans-serif; box-shadow: 0 8px 25px rgba(139,69,19,0.3); margin-top: 10px; text-transform: uppercase; letter-spacing: 1px; }
  .login-submit:hover { transform: translateY(-2px); box-shadow: 0 12px 35px rgba(139,69,19,0.4); }

  @media (max-width: 1200px) {
    .blocks-container { grid-template-columns: repeat(2, 1fr); }
    .block-card:nth-child(3) { grid-column: 1 / -1; max-width: 600px; margin: 0 auto; }
  }
  @media (max-width: 768px) {
    .header { padding: 0 20px; height: 75px; }
    .logo-text h1 { font-size: 22px; }
    .logo-icon { width: 45px; height: 45px; }
    .logo-icon i { font-size: 20px; }
    .login-button { padding: 10px 20px; font-size: 13px; }
    .hero-title { font-size: 32px; letter-spacing: -1px; }
    .hero-subtitle { font-size: 16px; margin-bottom: 25px; }
    .blocks-container { grid-template-columns: 1fr; gap: 20px; padding: 0 20px 40px; }
    .block-card { padding: 30px 25px; }
    .block-card:nth-child(3) { grid-column: 1; }
    .search-section { padding: 0 20px; margin-bottom: 30px; }
    .search-bar { padding: 8px 8px 8px 20px; }
    .search-btn { padding: 12px 24px; font-size: 14px; }
    .search-input { font-size: 15px; }
    .search-input-wrapper i { font-size: 18px; margin-right: 10px; }
    .hero-section { padding: 25px 20px 20px; }
    .login-box { padding: 40px 25px; }
    .login-header h2 { font-size: 26px; }
    .block-title { font-size: 22px; }
    .block-icon { width: 70px; height: 70px; margin-bottom: 20px; }
    .block-icon i { font-size: 32px; }
  }
`;function Kh(){const[o,f]=U.useState(!1),[d,u]=U.useState(""),b=Za(),E=d.length>=2?Vh.buildings.filter(D=>D.name.toLowerCase().includes(d.toLowerCase())||D.description.toLowerCase().includes(d.toLowerCase())):[],B=D=>{D.preventDefault(),alert(`🎉 Login successful!
Welcome to Smart Move Navigation System`),f(!1)};return y.jsxs(y.Fragment,{children:[y.jsx("style",{children:Zh}),y.jsx("link",{rel:"stylesheet",href:"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"}),y.jsxs("div",{className:"landing-root",children:[y.jsxs("div",{className:"background-wrapper",children:[y.jsx("img",{src:"https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=2000",alt:"IIT Bombay Campus",className:"background-image"}),y.jsx("div",{className:"background-overlay"})]}),y.jsxs("header",{className:"header",children:[y.jsxs("div",{className:"logo-section",children:[y.jsx("div",{className:"logo-icon",children:y.jsx("i",{className:"fas fa-location-arrow"})}),y.jsxs("div",{className:"logo-text",children:[y.jsx("h1",{children:"Smart Move"}),y.jsx("p",{children:"IIT Bombay Navigator"})]})]}),y.jsxs("button",{className:"login-button",onClick:()=>f(!0),children:[y.jsx("i",{className:"fas fa-user-circle"}),"Login"]})]}),y.jsxs("div",{className:"main-container",children:[y.jsxs("section",{className:"hero-section",children:[y.jsx("h1",{className:"hero-title",children:"Navigate IIT Bombay Campus"}),y.jsx("p",{className:"hero-subtitle",children:"Real-time maps. Live occupancy. Instant essentials. Find exactly what you need, exactly where you are"}),y.jsxs("a",{onClick:()=>b("/iit-bombay"),className:"iit-badge",title:"History & Achievements of IIT Bombay",children:[y.jsx("i",{className:"fas fa-university"}),"Indian Institute of Technology Bombay"]})]}),y.jsx("div",{className:"search-section",children:y.jsxs("div",{className:"search-container",children:[y.jsxs("div",{className:"search-input-wrapper",children:[y.jsx("i",{className:"fas fa-search"}),y.jsx("input",{type:"text",className:"search-input",placeholder:"Search buildings, departments, or locations...",value:d,onChange:D=>u(D.target.value)})]}),E.length>0&&y.jsx("div",{className:"search-results",children:E.map(D=>y.jsxs("div",{className:"search-result-item",onClick:()=>{alert(`Selected: ${D.name}
Navigating to this location...`),u("")},children:[y.jsx("div",{className:"result-icon",style:{background:`linear-gradient(135deg, ${D.color}, ${Xh(D.color,-20)})`},children:y.jsx("i",{className:`fas ${D.icon}`})}),y.jsxs("div",{className:"result-content",children:[y.jsx("h4",{children:D.name}),y.jsx("p",{children:D.description})]})]},D.id))})]})}),y.jsxs("div",{className:"blocks-container",children:[y.jsxs("div",{className:"block-card",children:[y.jsx("div",{className:"block-icon",children:y.jsx("i",{className:"fas fa-map-marked-alt"})}),y.jsx("h2",{className:"block-title",children:"Interactive Campus Map"}),y.jsx("p",{className:"block-description",children:"Explore IIT Bombay's 365-acre campus with our interactive 3D map. Find buildings, departments, and facilities with precise location tracking."}),y.jsxs("div",{className:"block-stats",children:[y.jsxs("div",{className:"stat-item",children:[y.jsx("div",{className:"stat-number",children:"50+"}),y.jsx("div",{className:"stat-label",children:"Buildings"})]}),y.jsxs("div",{className:"stat-item",children:[y.jsx("div",{className:"stat-number",children:"365"}),y.jsx("div",{className:"stat-label",children:"Acres"})]})]}),y.jsxs("a",{onClick:()=>b("/campus-map"),className:"block-action",children:["Explore Map ",y.jsx("i",{className:"fas fa-arrow-right"})]})]}),y.jsxs("div",{className:"block-card",children:[y.jsx("div",{className:"block-icon",children:y.jsx("i",{className:"fas fa-route"})}),y.jsx("h2",{className:"block-title",children:"Smart Navigation"}),y.jsx("p",{className:"block-description",children:"Get turn-by-turn directions with landmark-based guidance. Choose step-free routes and avoid crowded areas during peak hours."}),y.jsxs("div",{className:"block-stats",children:[y.jsxs("div",{className:"stat-item",children:[y.jsx("div",{className:"stat-number",children:"GPS"}),y.jsx("div",{className:"stat-label",children:"Enabled"})]}),y.jsxs("div",{className:"stat-item",children:[y.jsx("div",{className:"stat-number",children:"Live"}),y.jsx("div",{className:"stat-label",children:"Updates"})]})]}),y.jsxs("button",{className:"block-action",onClick:()=>b("/navigation"),children:["Start Navigation ",y.jsx("i",{className:"fas fa-arrow-right"})]})]}),y.jsxs("div",{className:"block-card",children:[y.jsx("div",{className:"block-icon",children:y.jsx("i",{className:"fas fa-building"})}),y.jsx("h2",{className:"block-title",children:"Campus Services"}),y.jsx("p",{className:"block-description",children:"Check real-time availability of printers, study rooms, labs, and other facilities. Book resources and plan your day efficiently."}),y.jsxs("div",{className:"block-stats",children:[y.jsxs("div",{className:"stat-item",children:[y.jsx("div",{className:"stat-number",children:"24/7"}),y.jsx("div",{className:"stat-label",children:"Access"})]}),y.jsxs("div",{className:"stat-item",children:[y.jsx("div",{className:"stat-number",children:"Real-time"}),y.jsx("div",{className:"stat-label",children:"Status"})]})]}),y.jsxs("button",{className:"block-action",onClick:()=>b("/campus-services"),children:["View Services ",y.jsx("i",{className:"fas fa-arrow-right"})]})]})]})]}),o&&y.jsx("div",{className:"login-modal-overlay",onClick:D=>D.target===D.currentTarget&&f(!1),children:y.jsxs("div",{className:"login-box",children:[y.jsx("button",{className:"close-modal",onClick:()=>f(!1),children:y.jsx("i",{className:"fas fa-times"})}),y.jsxs("div",{className:"login-header",children:[y.jsx("h2",{children:"Welcome to Smart Move"}),y.jsx("p",{children:"Login to access personalized navigation"})]}),y.jsxs("form",{onSubmit:B,children:[y.jsxs("div",{className:"input-group",children:[y.jsx("label",{children:"Email or Username"}),y.jsxs("div",{className:"input-wrapper",children:[y.jsx("i",{className:"fas fa-envelope"}),y.jsx("input",{type:"text",placeholder:"Enter your email",required:!0})]})]}),y.jsxs("div",{className:"input-group",children:[y.jsx("label",{children:"Password"}),y.jsxs("div",{className:"input-wrapper",children:[y.jsx("i",{className:"fas fa-lock"}),y.jsx("input",{type:"password",placeholder:"Enter your password",required:!0})]})]}),y.jsx("button",{type:"submit",className:"login-submit",children:"Login Now"})]})]})})]})]})}function Jh(){const o=Za();return U.useEffect(()=>{const d=u=>{u.data&&u.data.nav&&o(u.data.nav)};return window.addEventListener("message",d),()=>window.removeEventListener("message",d)},[o]),y.jsx("iframe",{srcDoc:`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover">
  <title>History &amp; Achievements - IIT Bombay | Smart Move</title>
  <meta name="description" content="History and achievements of Indian Institute of Technology Bombay">
  <meta name="theme-color" content="#8B4513">

  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&family=Montserrat:wght@600;700;800&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">

  <style>
    :root {
      --earth-brown: #8B4513;
      --deep-earth: #654321;
      --terracotta: #E07A5F;
      --sand: #F4A261;
      --sage: #81B29A;
      --forest: #3D5A40;
      --clay: #D4A574;
      --stone: #A8A196;
      --cream: #F9F5F0;
      --charcoal: #2D3142;
      --white: #FFFFFF;
    }

    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      -webkit-tap-highlight-color: transparent;
    }

    body {
      font-family: 'Poppins', sans-serif;
      overflow-x: hidden;
      background: #1a1a1a;
      min-height: 100vh;
      position: relative;
    }

    .background-wrapper {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 0;
      overflow: hidden;
    }

    .background-image {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
    }

    .background-overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(
        135deg,
        rgba(139, 69, 19, 0.88) 0%,
        rgba(101, 67, 33, 0.78) 50%,
        rgba(61, 90, 64, 0.88) 100%
      );
      backdrop-filter: blur(3px);
    }

    .header {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      height: 90px;
      background: rgba(255, 255, 255, 0.15);
      backdrop-filter: blur(25px);
      box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
      z-index: 1000;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 50px;
      border-bottom: 3px solid rgba(212, 165, 116, 0.3);
    }

    .logo-section {
      display: flex;
      align-items: center;
      gap: 18px;
    }

    .logo-icon {
      width: 60px;
      height: 60px;
      background: linear-gradient(135deg, var(--earth-brown), var(--terracotta));
      border-radius: 15px;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 8px 25px rgba(139, 69, 19, 0.5), inset 0 -3px 10px rgba(0, 0, 0, 0.3);
      position: relative;
    }

    .logo-icon i {
      font-size: 28px;
      color: white;
      filter: drop-shadow(0 3px 6px rgba(0, 0, 0, 0.3));
    }

    .logo-text h1 {
      font-family: 'Montserrat', sans-serif;
      font-size: 28px;
      font-weight: 800;
      color: white;
      letter-spacing: -0.5px;
      text-shadow: 0 4px 15px rgba(0, 0, 0, 0.5);
      background: linear-gradient(135deg, #fff, var(--clay));
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .logo-text p {
      font-size: 12px;
      color: rgba(255, 255, 255, 0.8);
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 2px;
    }

    .nav-back {
      padding: 12px 24px;
      background: rgba(255, 255, 255, 0.2);
      border: 2px solid rgba(255, 255, 255, 0.4);
      border-radius: 50px;
      color: white;
      font-weight: 600;
      text-decoration: none;
      transition: all 0.3s ease;
      display: inline-flex;
      align-items: center;
      gap: 8px;
    }

    .nav-back:hover {
      background: rgba(255, 255, 255, 0.3);
      transform: translateY(-2px);
      box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
      color: white;
    }

    .main-container {
      position: relative;
      width: 100%;
      min-height: 100vh;
      padding: 110px 50px 60px;
      z-index: 1;
    }

    .page-hero {
      text-align: center;
      margin-bottom: 50px;
    }

    .page-hero h1 {
      font-family: 'Montserrat', sans-serif;
      font-size: 48px;
      font-weight: 800;
      color: white;
      text-shadow: 0 5px 20px rgba(0, 0, 0, 0.6);
      margin-bottom: 12px;
      letter-spacing: -1px;
    }

    .page-hero .subtitle {
      font-size: 20px;
      color: rgba(255, 255, 255, 0.9);
      max-width: 600px;
      margin: 0 auto;
    }

    .content-card {
      max-width: 900px;
      margin: 0 auto 35px;
      background: rgba(255, 255, 255, 0.12);
      backdrop-filter: blur(25px);
      border-radius: 30px;
      padding: 45px 45px 40px;
      border: 2px solid rgba(255, 255, 255, 0.2);
      box-shadow: 0 20px 60px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.2);
      transition: all 0.4s ease;
    }

    .content-card:hover {
      background: rgba(255, 255, 255, 0.15);
      border-color: rgba(255, 255, 255, 0.3);
      box-shadow: 0 25px 70px rgba(0, 0, 0, 0.45);
    }

    .content-card h2 {
      font-family: 'Montserrat', sans-serif;
      font-size: 28px;
      font-weight: 700;
      color: white;
      margin-bottom: 24px;
      padding-bottom: 14px;
      border-bottom: 3px solid rgba(255, 255, 255, 0.3);
      display: flex;
      align-items: center;
      gap: 14px;
      text-shadow: 0 3px 12px rgba(0, 0, 0, 0.5);
    }

    .content-card h2 i {
      color: var(--sand);
    }

    .content-card p {
      font-size: 16px;
      color: rgba(255, 255, 255, 0.9);
      line-height: 1.8;
      margin-bottom: 18px;
      text-shadow: 0 2px 8px rgba(0, 0, 0, 0.4);
    }

    .content-card p:last-child {
      margin-bottom: 0;
    }

    .content-card ul {
      list-style: none;
      margin: 20px 0;
    }

    .content-card ul li {
      font-size: 16px;
      color: rgba(255, 255, 255, 0.9);
      line-height: 1.8;
      padding-left: 32px;
      position: relative;
      margin-bottom: 12px;
      text-shadow: 0 2px 8px rgba(0, 0, 0, 0.4);
    }

    .content-card ul li::before {
      content: '\\f00c';
      font-family: 'Font Awesome 6 Free';
      font-weight: 900;
      position: absolute;
      left: 0;
      color: var(--sage);
      font-size: 14px;
    }

    .timeline-item {
      margin-bottom: 28px;
      padding-left: 28px;
      border-left: 4px solid var(--terracotta);
      margin-left: 8px;
    }

    .timeline-item:last-child {
      margin-bottom: 0;
    }

    .timeline-item strong {
      color: white;
      font-size: 17px;
      display: block;
      margin-bottom: 6px;
    }

    .timeline-item span {
      color: rgba(255, 255, 255, 0.75);
      font-size: 14px;
    }

    .timeline-item p {
      margin-bottom: 0;
      margin-top: 8px;
    }

    .stat-row {
      display: flex;
      flex-wrap: wrap;
      gap: 24px;
      margin-top: 28px;
      justify-content: center;
    }

    .stat-pill {
      background: rgba(255, 255, 255, 0.15);
      padding: 18px 28px;
      border-radius: 20px;
      border: 2px solid rgba(255, 255, 255, 0.25);
      text-align: center;
      min-width: 140px;
    }

    .stat-pill .num {
      font-family: 'Montserrat', sans-serif;
      font-size: 32px;
      font-weight: 800;
      color: white;
      display: block;
      text-shadow: 0 3px 10px rgba(0, 0, 0, 0.5);
    }

    .stat-pill .label {
      font-size: 12px;
      color: rgba(255, 255, 255, 0.85);
      text-transform: uppercase;
      letter-spacing: 1px;
      margin-top: 4px;
    }

    @media (max-width: 768px) {
      .header { padding: 0 20px; height: 80px; }
      .logo-text h1 { font-size: 22px; }
      .main-container { padding: 95px 20px 40px; }
      .page-hero h1 { font-size: 32px; }
      .page-hero .subtitle { font-size: 17px; }
      .content-card { padding: 28px 24px; }
      .content-card h2 { font-size: 22px; }
      .content-card p, .content-card ul li { font-size: 15px; }
    }
  </style>
</head>
<body>

  <div class="background-wrapper">
    <img src="https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=2000" alt="IIT Bombay Campus" class="background-image">
    <div class="background-overlay"></div>
  </div>

  <header class="header">
    <div class="logo-section">
      <div class="logo-icon">
        <i class="fas fa-university"></i>
      </div>
      <div class="logo-text">
        <h1>Smart Move</h1>
        <p>IIT Bombay</p>
      </div>
    </div>
    <a href="#" onclick="window.parent.postMessage({nav:'/landing'},'*');return false;" class="nav-back">
      <i class="fas fa-arrow-left"></i> Back to Home
    </a>
  </header>

  <main class="main-container">
    <div class="page-hero">
      <h1>IIT Bombay</h1>
      <p class="subtitle">History &amp; Achievements of the Indian Institute of Technology Bombay</p>
    </div>

    <div class="content-card">
      <h2><i class="fas fa-landmark"></i> History</h2>
      <p>
        Indian Institute of Technology Bombay (IIT Bombay or IITB) is a public technical and research university in Powai, Mumbai. It was established in 1958 as the second IIT, with the first batch of 100 students admitted in the same year. The institute was created with assistance from UNESCO and the Soviet Union, and has since grown into one of India’s premier institutions for engineering, science, and technology.
      </p>
      <p>
        The campus spans about 550 acres in Powai, with the Powai Lake on one side. Over the decades, IIT Bombay has expanded its academic programmes, research centres, and infrastructure while maintaining a strong focus on innovation and industry collaboration.
      </p>
      <h3 style="font-size:18px; color: rgba(255,255,255,0.95); margin: 24px 0 12px; font-weight:600;">Key milestones</h3>
      <div class="timeline-item">
        <strong>1958</strong>
        <span>Institute established; first batch of 100 students</span>
        <p>IIT Bombay was founded with support from UNESCO and the USSR. The first academic session began with programmes in mechanical, electrical, civil, and chemical engineering.</p>
      </div>
      <div class="timeline-item">
        <strong>1961</strong>
        <span>First convocation</span>
        <p>First batch of undergraduates graduated, marking the start of IIT Bombay’s contribution to the nation’s technical workforce.</p>
      </div>
      <div class="timeline-item">
        <strong>1990s – 2000s</strong>
        <span>Expansion and new departments</span>
        <p>New departments and schools were added, including Computer Science, Humanities &amp; Social Sciences, and the Shailesh J. Mehta School of Management (SJMSOM). Research and industry partnerships grew significantly.</p>
      </div>
      <div class="timeline-item">
        <strong>Today</strong>
        <span>Global recognition</span>
        <p>IIT Bombay is consistently ranked among the top engineering and technology institutions in India and the world, with strong placements, research output, and alumni presence globally.</p>
      </div>
    </div>

    <div class="content-card">
      <h2><i class="fas fa-trophy"></i> Achievements &amp; Recognition</h2>
      <p>
        IIT Bombay has been recognised nationally and internationally for academic excellence, research, innovation, and industry collaboration. Below are some notable achievements and highlights.
      </p>
      <ul>
        <li>Consistently ranked among the top engineering institutions in India (e.g. NIRF, QS, THE) and in global rankings for engineering and technology.</li>
        <li>Strong placement records with leading companies from India and abroad visiting for campus recruitment.</li>
        <li>Research output in areas such as nanotechnology, energy, computing, aerospace, and biotechnology, with numerous patents and publications.</li>
        <li>Incubation and innovation ecosystem: Society for Innovation and Entrepreneurship (SINE) supports startups and entrepreneurship on campus.</li>
        <li>Alumni include leaders in industry, academia, and public life in India and overseas.</li>
        <li>Collaboration with international universities and organisations for joint research and student exchange.</li>
        <li>Contributions to national projects in defence, space, and critical infrastructure through research and consultancy.</li>
      </ul>
      <div class="stat-row">
        <div class="stat-pill">
          <span class="num">1958</span>
          <span class="label">Established</span>
        </div>
        <div class="stat-pill">
          <span class="num">550+</span>
          <span class="label">Acres campus</span>
        </div>
        <div class="stat-pill">
          <span class="num">18+</span>
          <span class="label">Departments / centres</span>
        </div>
        <div class="stat-pill">
          <span class="num">10K+</span>
          <span class="label">Students</span>
        </div>
      </div>
    </div>

    <div class="content-card">
      <h2><i class="fas fa-graduation-cap"></i> Academics &amp; Campus</h2>
      <p>
        IIT Bombay offers undergraduate (B.Tech., B.S.), postgraduate (M.Tech., M.Des., M.Sc., M.Phil., MBA, etc.), and doctoral programmes across engineering, sciences, design, and management. The campus hosts central facilities such as the Central Library, Victor Menezes Convention Centre (VMCC), lecture halls, hostels, and sports facilities. The institute also promotes extracurricular activities, technical festivals, and cultural events, making it a vibrant academic and social environment.
      </p>
    </div>
  </main>
</body>
</html>
`,style:{width:"100%",height:"100vh",border:"none",display:"block"},title:"IITBombayPage",allow:"geolocation"})}function Fh(){const o=Za();return U.useEffect(()=>{const d=u=>{u.data&&u.data.nav&&o(u.data.nav)};return window.addEventListener("message",d),()=>window.removeEventListener("message",d)},[o]),y.jsx("iframe",{srcDoc:`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover">
  <title>Interactive Campus Map - IIT Bombay | Smart Move</title>
  <meta name="description" content="Explore IIT Bombay campus - locations, features and facilities">
  <meta name="theme-color" content="#8B4513">

  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&family=Montserrat:wght@600;700;800&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
  <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY=" crossorigin="">

  <style>
    :root {
      --earth-brown: #8B4513;
      --deep-earth: #654321;
      --terracotta: #E07A5F;
      --sand: #F4A261;
      --sage: #81B29A;
      --forest: #3D5A40;
      --clay: #D4A574;
      --stone: #A8A196;
      --cream: #F9F5F0;
      --charcoal: #2D3142;
      --white: #FFFFFF;
    }

    * { margin: 0; padding: 0; box-sizing: border-box; -webkit-tap-highlight-color: transparent; }

    body {
      font-family: 'Poppins', sans-serif;
      overflow-x: hidden;
      background: #1a1a1a;
      min-height: 100vh;
      position: relative;
    }

    .background-wrapper {
      position: fixed;
      top: 0; left: 0; width: 100%; height: 100%;
      z-index: 0;
      overflow: hidden;
    }

    .background-image {
      width: 100%; height: 100%;
      object-fit: cover;
      object-position: center;
    }

    .background-overlay {
      position: absolute;
      top: 0; left: 0; width: 100%; height: 100%;
      background: linear-gradient(135deg, rgba(139, 69, 19, 0.88) 0%, rgba(101, 67, 33, 0.78) 50%, rgba(61, 90, 64, 0.88) 100%);
      backdrop-filter: blur(3px);
    }

    .header {
      position: fixed;
      top: 0; left: 0; right: 0;
      height: 90px;
      background: rgba(255, 255, 255, 0.15);
      backdrop-filter: blur(25px);
      box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
      z-index: 1000;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 50px;
      border-bottom: 3px solid rgba(212, 165, 116, 0.3);
    }

    .logo-section { display: flex; align-items: center; gap: 18px; }

    .logo-icon {
      width: 60px; height: 60px;
      background: linear-gradient(135deg, var(--earth-brown), var(--terracotta));
      border-radius: 15px;
      display: flex; align-items: center; justify-content: center;
      box-shadow: 0 8px 25px rgba(139, 69, 19, 0.5), inset 0 -3px 10px rgba(0, 0, 0, 0.3);
    }

    .logo-icon i { font-size: 28px; color: white; filter: drop-shadow(0 3px 6px rgba(0, 0, 0, 0.3)); }

    .logo-text h1 {
      font-family: 'Montserrat', sans-serif;
      font-size: 28px;
      font-weight: 800;
      color: white;
      letter-spacing: -0.5px;
      text-shadow: 0 4px 15px rgba(0, 0, 0, 0.5);
      background: linear-gradient(135deg, #fff, var(--clay));
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .logo-text p { font-size: 12px; color: rgba(255, 255, 255, 0.8); font-weight: 600; text-transform: uppercase; letter-spacing: 2px; }

    .nav-back {
      padding: 12px 24px;
      background: rgba(255, 255, 255, 0.2);
      border: 2px solid rgba(255, 255, 255, 0.4);
      border-radius: 50px;
      color: white;
      font-weight: 600;
      text-decoration: none;
      transition: all 0.3s ease;
      display: inline-flex;
      align-items: center;
      gap: 8px;
    }

    .nav-back:hover { background: rgba(255, 255, 255, 0.3); transform: translateY(-2px); box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3); color: white; }

    .main-container {
      position: relative;
      width: 100%;
      min-height: 100vh;
      padding: 110px 50px 60px;
      z-index: 1;
    }

    .page-hero { text-align: center; margin-bottom: 32px; }
    .page-hero h1 {
      font-family: 'Montserrat', sans-serif;
      font-size: 42px;
      font-weight: 800;
      color: white;
      text-shadow: 0 5px 20px rgba(0, 0, 0, 0.6);
      margin-bottom: 10px;
      letter-spacing: -1px;
    }
    .page-hero .subtitle { font-size: 18px; color: rgba(255, 255, 255, 0.9); max-width: 640px; margin: 0 auto; }

    .map-search-card {
      max-width: 1000px;
      margin: 0 auto 28px;
      background: rgba(255, 255, 255, 0.12);
      backdrop-filter: blur(25px);
      border-radius: 24px;
      padding: 28px 32px;
      border: 2px solid rgba(255, 255, 255, 0.2);
      box-shadow: 0 20px 60px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.2);
    }

    .search-wrap {
      position: relative;
      display: flex;
      gap: 12px;
      flex-wrap: wrap;
      align-items: center;
    }

    .search-wrap i.fa-search {
      position: absolute;
      left: 20px;
      top: 50%;
      transform: translateY(-50%);
      color: rgba(255, 255, 255, 0.7);
      font-size: 18px;
      pointer-events: none;
    }

    .search-wrap input {
      flex: 1;
      min-width: 220px;
      padding: 16px 20px 16px 52px;
      border: 2px solid rgba(255, 255, 255, 0.3);
      border-radius: 16px;
      background: rgba(255, 255, 255, 0.1);
      color: white;
      font-size: 16px;
      font-family: 'Poppins', sans-serif;
      transition: all 0.3s ease;
    }

    .search-wrap input::placeholder { color: rgba(255, 255, 255, 0.55); }
    .search-wrap input:focus {
      outline: none;
      border-color: var(--terracotta);
      background: rgba(255, 255, 255, 0.15);
      box-shadow: 0 0 0 4px rgba(224, 122, 95, 0.2);
    }

    .filter-tags {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
      margin-top: 16px;
      align-items: center;
    }

    .filter-tags span { font-size: 13px; color: rgba(255, 255, 255, 0.8); margin-right: 4px; }
    .filter-tag {
      padding: 8px 16px;
      background: rgba(255, 255, 255, 0.1);
      border: 1px solid rgba(255, 255, 255, 0.3);
      border-radius: 20px;
      color: white;
      font-size: 13px;
      cursor: pointer;
      transition: all 0.25s ease;
      font-family: 'Poppins', sans-serif;
    }
    .filter-tag:hover, .filter-tag.active {
      background: rgba(255, 255, 255, 0.25);
      border-color: var(--terracotta);
    }

    .map-3d-wrap {
      max-width: 1000px;
      margin: 0 auto 28px;
      border-radius: 24px;
      overflow: hidden;
      border: 2px solid rgba(255, 255, 255, 0.2);
      box-shadow: 0 25px 60px rgba(0, 0, 0, 0.5);
      background: #1e3a32;
      min-height: 320px;
    }

    #map {
      width: 100%;
      height: 320px;
      background: #2d5a4a;
    }

    .directions-card { margin-bottom: 20px; }
    .directions-row { display: flex; flex-wrap: wrap; gap: 16px; align-items: flex-end; }
    .direction-field { flex: 1; min-width: 200px; }
    .direction-field label { display: block; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; color: rgba(255,255,255,0.8); margin-bottom: 6px; font-weight: 600; }
    .direction-select {
      width: 100%;
      padding: 14px 18px;
      border: 2px solid rgba(255, 255, 255, 0.3);
      border-radius: 16px;
      background: rgba(255, 255, 255, 0.1);
      color: white;
      font-size: 15px;
      font-family: 'Poppins', sans-serif;
      cursor: pointer;
      transition: all 0.3s ease;
    }
    .direction-select:focus { outline: none; border-color: var(--terracotta); background: rgba(255, 255, 255, 0.15); }
    .direction-select option { background: var(--charcoal); color: white; }

    .leaflet-control-zoom a { background: rgba(255,255,255,0.2) !important; color: white !important; }
    .leaflet-control-attribution { background: rgba(0,0,0,0.5) !important; color: rgba(255,255,255,0.7) !important; font-size: 10px; }

    .results-count {
      max-width: 1000px;
      margin: 0 auto 14px;
      font-size: 15px;
      color: rgba(255, 255, 255, 0.85);
    }

    .place-cards {
      max-width: 1000px;
      margin: 0 auto;
      display: grid;
      gap: 22px;
    }

    .place-card {
      background: rgba(255, 255, 255, 0.12);
      backdrop-filter: blur(25px);
      border-radius: 24px;
      padding: 28px 32px;
      border: 2px solid rgba(255, 255, 255, 0.2);
      box-shadow: 0 16px 48px rgba(0, 0, 0, 0.35), inset 0 1px 0 rgba(255, 255, 255, 0.1);
      transition: all 0.35s ease;
      cursor: pointer;
      transform-style: preserve-3d;
      perspective: 1000px;
    }

    .place-card:hover {
      background: rgba(255, 255, 255, 0.18);
      border-color: rgba(255, 255, 255, 0.35);
      transform: translateY(-6px);
      box-shadow: 0 24px 56px rgba(0, 0, 0, 0.45), 0 0 40px rgba(224, 122, 95, 0.15);
    }

    .place-card h3 {
      font-family: 'Montserrat', sans-serif;
      font-size: 22px;
      font-weight: 700;
      color: white;
      margin-bottom: 10px;
      display: flex;
      align-items: center;
      gap: 12px;
      text-shadow: 0 2px 10px rgba(0, 0, 0, 0.4);
    }

    .place-card h3 .icon-wrap {
      width: 44px;
      height: 44px;
      border-radius: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
    }

    .place-card h3 .icon-wrap i { color: white; font-size: 20px; }

    .place-card .location {
      font-size: 14px;
      color: var(--sand);
      margin-bottom: 12px;
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .place-card .location i { opacity: 0.9; }

    .place-card .desc {
      font-size: 15px;
      color: rgba(255, 255, 255, 0.88);
      line-height: 1.65;
      margin-bottom: 16px;
    }

    .place-card .meta {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      margin-bottom: 14px;
    }

    .meta-pill {
      padding: 6px 14px;
      background: rgba(255, 255, 255, 0.15);
      border-radius: 20px;
      font-size: 12px;
      color: rgba(255, 255, 255, 0.95);
      border: 1px solid rgba(255, 255, 255, 0.2);
    }

    .place-card .available-title {
      font-size: 12px;
      text-transform: uppercase;
      letter-spacing: 1px;
      color: rgba(255, 255, 255, 0.7);
      margin-bottom: 8px;
      font-weight: 600;
    }

    .place-card .available-list {
      font-size: 14px;
      color: rgba(255, 255, 255, 0.9);
      line-height: 1.6;
    }

    .no-results {
      max-width: 1000px;
      margin: 0 auto;
      text-align: center;
      padding: 50px 24px;
      background: rgba(255, 255, 255, 0.08);
      border-radius: 24px;
      border: 2px dashed rgba(255, 255, 255, 0.2);
      color: rgba(255, 255, 255, 0.7);
      font-size: 16px;
    }

    @media (max-width: 768px) {
      .header { padding: 0 20px; height: 80px; }
      .logo-text h1 { font-size: 22px; }
      .main-container { padding: 95px 20px 40px; }
      .page-hero h1 { font-size: 30px; }
      .map-search-card { padding: 20px; }
      .place-card { padding: 22px; }
      .place-card h3 { font-size: 19px; }
      #map { height: 260px; }
    }
  </style>
</head>
<body>

  <div class="background-wrapper">
    <img src="https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=2000" alt="Campus" class="background-image">
    <div class="background-overlay"></div>
  </div>

  <header class="header">
    <div class="logo-section">
      <div class="logo-icon">
        <i class="fas fa-map-marked-alt"></i>
      </div>
      <div class="logo-text">
        <h1>Smart Move</h1>
        <p>Interactive Campus Map</p>
      </div>
    </div>
    <a href="#" onclick="window.parent.postMessage({nav:'/landing'},'*');return false;" class="nav-back">
      <i class="fas fa-arrow-left"></i> Back to Home
    </a>
  </header>

  <main class="main-container">
    <div class="page-hero">
      <h1>Interactive Campus Map</h1>
      <p class="subtitle">Search locations and see features, facilities and what’s available at each place across IIT Bombay.</p>
    </div>

    <div class="map-search-card">
      <div class="search-wrap">
        <i class="fas fa-search"></i>
        <input type="text" id="searchInput" placeholder="Search by name, location, feature or facility..." autocomplete="off">
      </div>
      <div class="filter-tags">
        <span>Filter:</span>
        <button type="button" class="filter-tag active" data-filter="">All</button>
        <button type="button" class="filter-tag" data-filter="academic">Academic</button>
        <button type="button" class="filter-tag" data-filter="hostel">Hostel</button>
        <button type="button" class="filter-tag" data-filter="recreation">Recreation</button>
        <button type="button" class="filter-tag" data-filter="admin">Admin</button>
        <button type="button" class="filter-tag" data-filter="food">Food</button>
        <button type="button" class="filter-tag" data-filter="research">Research</button>
      </div>
    </div>

    <!-- Directions (React map feature): source/destination + route on map -->
    <div class="directions-card map-search-card">
      <div class="directions-row">
        <div class="direction-field">
          <label>From</label>
          <select id="dirSource" class="direction-select">
            <option value="">Select source...</option>
          </select>
        </div>
        <div class="direction-field">
          <label>To</label>
          <select id="dirDest" class="direction-select">
            <option value="">Select destination...</option>
          </select>
        </div>
        <button type="button" id="clearRouteBtn" class="nav-back" style="display:none; margin-top:22px; padding:10px 20px;">Clear route</button>
      </div>
    </div>

    <div class="map-3d-wrap">
      <div id="map"></div>
    </div>

    <p class="results-count" id="resultsCount"></p>
    <div class="place-cards" id="placeCards"></div>
    <div class="no-results" id="noResults" style="display:none;">No places match your search. Try another keyword or filter.</div>
  </main>

  <script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js" integrity="sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo=" crossorigin=""><\/script>
  <script src="https://cdn.jsdelivr.net/npm/leaflet-polylinedecorator@1.6.0/dist/leaflet.polylineDecorator.min.js"><\/script>
  <script>
    const IIT_CENTER = { lat: 19.1334, lng: 72.9133 };
    const CAMPUS_BOUNDS = [[19.125, 72.905], [19.142, 72.922]];

    // Colored markers by type (same as React IITBmap)
    const MARKER_COLORS = { academic: 'red', hostel: 'blue', food: 'green', recreation: 'orange', admin: 'orange', research: 'orange', facility: 'orange' };
    function createIcon(type) {
      var color = MARKER_COLORS[type] || 'orange';
      return L.icon({
        iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-' + color + '.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41]
      });
    }

    const campusPlaces = [
      {
        id: 'main-gate',
        name: 'Main Gate',
        location: 'Powai, Eastern entrance',
        area: 'Gate 1, Powai',
        lat: 19.1320,
        lng: 72.9185,
        description: 'Primary entrance to IIT Bombay campus from Powai side.',
        type: 'admin',
        features: ['24/7 access', 'Security', 'Visitor registration'],
        available: 'Security desk, visitor pass counter, vehicle entry.'
      },
      {
        id: 'central-library',
        name: 'Central Library',
        location: 'Near Convocation Hall, Academic area',
        area: 'Academic zone',
        lat: 19.1345,
        lng: 72.9110,
        description: 'Main library with extensive print and digital collections.',
        type: 'academic',
        features: ['WiFi', '24/7 reading room', 'Study carrels', 'Printing'],
        available: 'Books, journals, e-resources, study halls, printers, scanning, group study rooms.'
      },
      {
        id: 'convocation-hall',
        name: 'Convocation Hall',
        location: 'Central academic area',
        area: 'Academic zone',
        lat: 19.1352,
        lng: 72.9105,
        description: 'Venue for convocations, lectures and large events.',
        type: 'academic',
        features: ['Large capacity', 'Stage', 'AV systems'],
        available: 'Seating for 2000+, stage, projectors, sound system. Bookable for events.'
      },
      {
        id: 'vmcc',
        name: 'Victor Menezes Convention Centre (VMCC)',
        location: 'Near Lake, Convention area',
        area: 'Convention zone',
        lat: 19.1360,
        lng: 72.9080,
        description: 'Convention centre for conferences, workshops and seminars.',
        type: 'academic',
        features: ['Multiple halls', 'Catering', 'WiFi', 'Parking'],
        available: 'Auditoriums, meeting rooms, registration area, cafeteria, parking.'
      },
      {
        id: 'lc',
        name: 'Lecture Complex (LC)',
        location: 'Academic area, near Main Building',
        area: 'Academic zone',
        lat: 19.1338,
        lng: 72.9120,
        description: 'Main lecture theatre complex for classes and exams.',
        type: 'academic',
        features: ['Multiple lecture halls', 'Projectors', 'Whiteboards'],
        available: 'Lecture halls, tutorial rooms, common corridors, vending.'
      },
      {
        id: 'main-building',
        name: 'Main Building',
        location: 'Central campus, Academic area',
        area: 'Academic zone',
        lat: 19.1340,
        lng: 72.9115,
        description: 'Central administrative and academic building.',
        type: 'admin',
        features: ['Admin offices', 'Dept offices', 'WiFi'],
        available: 'Registrar, academics office, department HODs, faculty cabins, notice boards.'
      },
      {
        id: 'sjmsom',
        name: 'Shailesh J. Mehta School of Management (SJMSOM)',
        location: 'Near Main Building',
        area: 'Academic zone',
        lat: 19.1332,
        lng: 72.9108,
        description: 'Business school offering MBA and related programmes.',
        type: 'academic',
        features: ['MBA programmes', 'Case study rooms', 'WiFi', 'Library'],
        available: 'Classrooms, computer lab, library, placement cell, seminar halls.'
      },
      {
        id: 'hostel-18',
        name: 'Hostel 18',
        location: 'Residential zone, near Powai Lake',
        area: 'Hostel area',
        lat: 19.1370,
        lng: 72.9075,
        description: 'One of the newer hostels with modern facilities.',
        type: 'hostel',
        features: ['Single/double rooms', 'Common room', 'WiFi', '24/7'],
        available: 'Rooms, common room, mess, washing area, study room, gym.'
      },
      {
        id: 'hostel-1',
        name: 'Hostel 1 (First year)',
        location: 'Residential zone',
        area: 'Hostel area',
        lat: 19.1315,
        lng: 72.9095,
        description: 'First-year undergraduate hostel.',
        type: 'hostel',
        features: ['Mess', 'Common room', 'WiFi'],
        available: 'Dorm-style rooms, mess, common room, sports ground nearby.'
      },
      {
        id: 'sac',
        name: 'Student Activity Centre (SAC)',
        location: 'Central campus, near hostels',
        area: 'Recreation zone',
        lat: 19.1325,
        lng: 72.9125,
        description: 'Hub for student clubs, activities and events.',
        type: 'recreation',
        features: ['Club rooms', 'Stage', 'WiFi', 'Events'],
        available: 'Club offices, rehearsal spaces, event venue, notice boards.'
      },
      {
        id: 'gymkhana',
        name: 'Gymkhana (Sports)',
        location: 'Sports complex area',
        area: 'Recreation zone',
        lat: 19.1310,
        lng: 72.9140,
        description: 'Sports and fitness facilities.',
        type: 'recreation',
        features: ['Gym', 'Indoor games', 'Courts', 'Swimming'],
        available: 'Gym, badminton, table tennis, squash, swimming pool, outdoor courts.'
      },
      {
        id: 'cafeteria',
        name: 'Institute Cafeteria / Canteen',
        location: 'Near SAC, Central campus',
        area: 'Food zone',
        lat: 19.1328,
        lng: 72.9118,
        description: 'Main campus canteen for meals and snacks.',
        type: 'food',
        features: ['Vegetarian', 'Snacks', 'Beverages'],
        available: 'Breakfast, lunch, snacks, beverages. Open on institute timings.'
      },
      {
        id: 'sine',
        name: 'SINE (Society for Innovation & Entrepreneurship)',
        location: 'Near Main Building',
        area: 'Academic / Research zone',
        lat: 19.1335,
        lng: 72.9102,
        description: 'Incubation centre for startups and innovation.',
        type: 'research',
        features: ['Incubation', 'Startup support', 'WiFi', 'Meeting rooms'],
        available: 'Incubation space, mentoring, meeting rooms, connect with startups.'
      },
      {
        id: 'cse-building',
        name: 'Computer Science & Engineering Dept',
        location: 'Academic area, Kanwal Rekhi Block',
        area: 'Academic zone',
        lat: 19.1342,
        lng: 72.9098,
        description: 'CSE department with labs and faculty offices.',
        type: 'academic',
        features: ['Labs', 'Servers', 'WiFi', 'Seminar room'],
        available: 'Labs, project rooms, server room, faculty cabins, seminar hall.'
      },
      {
        id: 'powai-lake',
        name: 'Powai Lake (Campus side)',
        location: 'Eastern boundary, near hostels',
        area: 'Recreation / Nature',
        lat: 19.1380,
        lng: 72.9065,
        description: 'Lake front on campus for walks and recreation.',
        type: 'recreation',
        features: ['Walking track', 'View', 'Open 24/7'],
        available: 'Walking path, seating, view of lake. No swimming.'
      }
    ];

    let map;
    let markers = [];
    let routeLayers = [];

    function initMap() {
      map = L.map('map', {
        center: [IIT_CENTER.lat, IIT_CENTER.lng],
        zoom: 16,
        minZoom: 15,
        maxBounds: CAMPUS_BOUNDS,
        maxBoundsViscosity: 0.8
      });
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      }).addTo(map);
      fillDirectionDropdowns();
      bindDirectionEvents();
      renderPlaces(campusPlaces);
    }

    function fillDirectionDropdowns() {
      var sourceSel = document.getElementById('dirSource');
      var destSel = document.getElementById('dirDest');
      campusPlaces.forEach(function(p) {
        sourceSel.appendChild(new Option(p.name, p.id));
        destSel.appendChild(new Option(p.name, p.id));
      });
    }

    function bindDirectionEvents() {
      var sourceSel = document.getElementById('dirSource');
      var destSel = document.getElementById('dirDest');
      var clearBtn = document.getElementById('clearRouteBtn');
      function updateRoute() {
        var sid = sourceSel.value, did = destSel.value;
        if (sid && did && sid !== did) {
          var src = campusPlaces.find(function(p) { return p.id === sid; });
          var dst = campusPlaces.find(function(p) { return p.id === did; });
          if (src && dst) fetchAndDrawRoute(src, dst);
        } else {
          clearRoute();
        }
        clearBtn.style.display = (sid && did) ? 'inline-flex' : 'none';
      }
      sourceSel.addEventListener('change', updateRoute);
      destSel.addEventListener('change', updateRoute);
      clearBtn.addEventListener('click', function() {
        sourceSel.value = ''; destSel.value = '';
        clearRoute();
        clearBtn.style.display = 'none';
      });
    }

    function clearRoute() {
      routeLayers.forEach(function(layer) { map.removeLayer(layer); });
      routeLayers = [];
    }

    function fetchAndDrawRoute(source, destination) {
      clearRoute();
      var coords = [[source.lat, source.lng], [destination.lat, destination.lng]];
      var apiKey = ''; // Optional: add OpenRouteService key for real routes, e.g. 'eyJvcmciOiI...'
      var url = 'https://api.openrouteservice.org/v2/directions/driving-car/geojson';
      var body = { coordinates: [[source.lng, source.lat], [destination.lng, destination.lat]] };

      if (apiKey) {
        fetch(url, {
          method: 'POST',
          headers: { 'Authorization': apiKey, 'Content-Type': 'application/json' },
          body: JSON.stringify(body)
        })
          .then(function(r) { return r.json(); })
          .then(function(data) {
            if (data.features && data.features[0] && data.features[0].geometry)
              coords = data.features[0].geometry.coordinates.map(function(c) { return [c[1], c[0]]; });
            drawRouteOnMap(coords);
          })
          .catch(function() { drawRouteOnMap(coords); });
      } else {
        drawRouteOnMap(coords);
      }
    }

    function drawRouteOnMap(coords) {
      clearRoute();
      var polyline = L.polyline(coords, { color: '#E07A5F', weight: 5 });
      polyline.addTo(map);
      routeLayers.push(polyline);
      if (typeof L.polylineDecorator === 'function') {
        var decorator = L.polylineDecorator(polyline, {
          patterns: [{ offset: '5%', repeat: '10%', symbol: L.Symbol.arrowHead({ pixelSize: 8, pathOptions: { color: '#E07A5F', fillOpacity: 1 } }) }]
        });
        decorator.addTo(map);
        routeLayers.push(decorator);
      }
      map.fitBounds(L.latLngBounds(coords), { padding: [50, 50] });
    }

    function clearMarkers() {
      markers.forEach(m => map.removeLayer(m));
      markers = [];
    }

    function addMarkers(places) {
      clearMarkers();
      places.forEach(p => {
        const m = L.marker([p.lat, p.lng], { icon: createIcon(p.type) })
          .addTo(map)
          .bindPopup('<strong>' + p.name + '</strong><br>' + p.location);
        markers.push(m);
      });
      if (places.length > 1) {
        const group = L.featureGroup(markers);
        map.fitBounds(group.getBounds().pad(0.15));
      } else if (places.length === 1) {
        map.setView([places[0].lat, places[0].lng], 17);
      }
    }

    function getSearchText(place) {
      return [place.name, place.location, place.area, place.description, place.type, (place.features || []).join(' '), place.available].filter(Boolean).join(' ').toLowerCase();
    }

    function renderPlaces(places) {
      addMarkers(places);
      const container = document.getElementById('placeCards');
      const noResults = document.getElementById('noResults');
      const countEl = document.getElementById('resultsCount');

      if (places.length === 0) {
        container.innerHTML = '';
        noResults.style.display = 'block';
        countEl.textContent = '0 places found.';
        return;
      }

      noResults.style.display = 'none';
      countEl.textContent = places.length + ' place' + (places.length !== 1 ? 's' : '') + ' found.';

      const colors = { academic: '#E07A5F', hostel: '#81B29A', recreation: '#F4A261', admin: '#8B4513', food: '#3D5A40', research: '#654321' };
      container.innerHTML = places.map(p => {
        const feat = (p.features || []).map(f => '<span class="meta-pill">' + f + '</span>').join('');
        const color = colors[p.type] || '#6c757d';
        return '<div class="place-card" data-id="' + p.id + '">' +
          '<h3><span class="icon-wrap" style="background:linear-gradient(135deg,' + color + ',rgba(255,255,255,0.2));"><i class="fas fa-map-marker-alt"></i></span>' + p.name + '</h3>' +
          '<div class="location"><i class="fas fa-location-dot"></i> ' + p.location + '</div>' +
          '<p class="desc">' + p.description + '</p>' +
          '<div class="meta">' + feat + '</div>' +
          '<div class="available-title">What\\'s available</div>' +
          '<div class="available-list">' + p.available + '</div>' +
          '</div>';
      }).join('');

      container.querySelectorAll('.place-card').forEach(card => {
        card.addEventListener('click', function() {
          const id = this.getAttribute('data-id');
          const place = campusPlaces.find(p => p.id === id);
          if (place) {
            map.setView([place.lat, place.lng], 18);
            const m = markers.find((_, i) => places[i] && places[i].id === id);
            if (m) m.openPopup();
          }
        });
      });
    }

    let currentFilter = '';
    const searchInput = document.getElementById('searchInput');
    const filterTags = document.querySelectorAll('.filter-tag');

    function applyFilterAndSearch() {
      const q = searchInput.value.trim().toLowerCase();
      let list = campusPlaces;
      if (currentFilter) list = list.filter(p => p.type === currentFilter);
      if (q) list = list.filter(p => getSearchText(p).includes(q));
      renderPlaces(list);
    }

    searchInput.addEventListener('input', applyFilterAndSearch);

    filterTags.forEach(tag => {
      tag.addEventListener('click', function() {
        filterTags.forEach(t => t.classList.remove('active'));
        this.classList.add('active');
        currentFilter = this.getAttribute('data-filter') || '';
        applyFilterAndSearch();
      });
    });

    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', initMap);
    } else {
      initMap();
    }
  <\/script>
</body>
</html>
`,style:{width:"100%",height:"100vh",border:"none",display:"block"},title:"CampusMapPage",allow:"geolocation"})}function Wh(){const o=Za();return U.useEffect(()=>{const d=u=>{u.data&&u.data.nav&&o(u.data.nav)};return window.addEventListener("message",d),()=>window.removeEventListener("message",d)},[o]),y.jsx("iframe",{srcDoc:`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover">
  <title>Smart Campus Navigation - IIT Bombay | Smart Move</title>
  <meta name="theme-color" content="#8B4513">

  <!-- Google Fonts (same as landing) -->
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&family=Montserrat:wght@600;700;800&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">

  <!-- Leaflet CSS -->
  <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY=" crossorigin="">
  <link rel="stylesheet" href="https://unpkg.com/leaflet-routing-machine@3.2.12/dist/leaflet-routing-machine.css">

  <style>
    /* ==================== CUSTOM PROPERTIES (same as landing.html) ==================== */
    :root {
      --earth-brown: #8B4513;
      --deep-earth: #654321;
      --terracotta: #E07A5F;
      --sand: #F4A261;
      --sage: #81B29A;
      --forest: #3D5A40;
      --clay: #D4A574;
      --stone: #A8A196;
      --cream: #F9F5F0;
      --charcoal: #2D3142;
      --white: #FFFFFF;
    }

    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      -webkit-tap-highlight-color: transparent;
    }

    body {
      font-family: 'Poppins', sans-serif;
      overflow-x: hidden;
      background: #1a1a1a;
      min-height: 100vh;
      position: relative;
    }

    /* ==================== BACKGROUND (same as landing) ==================== */
    .background-wrapper {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 0;
      overflow: hidden;
    }

    .background-image {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
    }

    .background-overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(
        135deg,
        rgba(139, 69, 19, 0.85) 0%,
        rgba(101, 67, 33, 0.75) 50%,
        rgba(61, 90, 64, 0.85) 100%
      );
      backdrop-filter: blur(3px);
    }

    /* ==================== HEADER (same as landing) ==================== */
    .header {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      height: 90px;
      background: rgba(255, 255, 255, 0.15);
      backdrop-filter: blur(25px);
      box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
      z-index: 1000;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 50px;
      border-bottom: 3px solid rgba(212, 165, 116, 0.3);
    }

    .logo-section {
      display: flex;
      align-items: center;
      gap: 18px;
    }

    .logo-icon {
      width: 60px;
      height: 60px;
      background: linear-gradient(135deg, var(--earth-brown), var(--terracotta));
      border-radius: 15px;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 8px 25px rgba(139, 69, 19, 0.5), inset 0 -3px 10px rgba(0, 0, 0, 0.3);
      position: relative;
    }

    .logo-icon i {
      font-size: 28px;
      color: white;
      filter: drop-shadow(0 3px 6px rgba(0, 0, 0, 0.3));
    }

    .logo-text h1 {
      font-family: 'Montserrat', sans-serif;
      font-size: 28px;
      font-weight: 800;
      color: white;
      letter-spacing: -0.5px;
      text-shadow: 0 4px 15px rgba(0, 0, 0, 0.5);
      background: linear-gradient(135deg, #fff, var(--clay));
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .logo-text p {
      font-size: 12px;
      color: rgba(255, 255, 255, 0.8);
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 2px;
    }

    .nav-back {
      padding: 12px 24px;
      background: rgba(255, 255, 255, 0.2);
      border: 2px solid rgba(255, 255, 255, 0.4);
      border-radius: 50px;
      color: white;
      font-weight: 600;
      text-decoration: none;
      transition: all 0.3s ease;
      display: inline-flex;
      align-items: center;
      gap: 8px;
    }

    .nav-back:hover {
      background: rgba(255, 255, 255, 0.3);
      transform: translateY(-2px);
      box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
    }

    /* ==================== MAIN CONTAINER ==================== */
    .main-container {
      position: relative;
      width: 100%;
      min-height: 100vh;
      padding: 100px 30px 40px;
      z-index: 1;
    }

    .map-page-title {
      text-align: center;
      margin-bottom: 24px;
    }

    .map-page-title h1 {
      font-family: 'Montserrat', sans-serif;
      font-size: 36px;
      font-weight: 800;
      color: white;
      text-shadow: 0 4px 15px rgba(0, 0, 0, 0.5);
      margin-bottom: 8px;
    }

    .map-page-title p {
      font-size: 16px;
      color: rgba(255, 255, 255, 0.85);
    }

    /* ==================== GLASS CARD (same style as landing blocks) ==================== */
    .nav-card {
      max-width: 1100px;
      margin: 0 auto;
      background: rgba(255, 255, 255, 0.12);
      backdrop-filter: blur(25px);
      border-radius: 30px;
      padding: 32px;
      border: 2px solid rgba(255, 255, 255, 0.2);
      box-shadow: 0 20px 60px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.2);
    }

    /* ==================== CONTROLS ==================== */
    .controls {
      display: flex;
      flex-wrap: wrap;
      gap: 12px;
      align-items: center;
      margin-bottom: 20px;
    }

    .input-wrap {
      flex: 1;
      min-width: 160px;
      position: relative;
    }

    .input-wrap i {
      position: absolute;
      left: 16px;
      top: 50%;
      transform: translateY(-50%);
      color: rgba(255, 255, 255, 0.7);
      font-size: 16px;
      pointer-events: none;
    }

    .controls input {
      width: 100%;
      padding: 14px 18px 14px 46px;
      border: 2px solid rgba(255, 255, 255, 0.3);
      border-radius: 14px;
      background: rgba(255, 255, 255, 0.1);
      color: white;
      font-size: 15px;
      font-family: 'Poppins', sans-serif;
      transition: all 0.3s ease;
    }

    .controls input::placeholder {
      color: rgba(255, 255, 255, 0.6);
    }

    .controls input:focus {
      outline: none;
      border-color: var(--terracotta);
      background: rgba(255, 255, 255, 0.15);
      box-shadow: 0 0 0 4px rgba(224, 122, 95, 0.2);
    }

    .btn {
      padding: 14px 22px;
      border: none;
      border-radius: 14px;
      font-size: 15px;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s ease;
      font-family: 'Poppins', sans-serif;
      display: inline-flex;
      align-items: center;
      gap: 8px;
    }

    .btn-primary {
      background: linear-gradient(135deg, var(--terracotta), var(--sand));
      color: white;
      box-shadow: 0 8px 25px rgba(224, 122, 95, 0.4);
    }

    .btn-primary:hover {
      transform: translateY(-2px);
      box-shadow: 0 12px 35px rgba(224, 122, 95, 0.5);
    }

    .btn-secondary {
      background: rgba(255, 255, 255, 0.2);
      color: white;
      border: 2px solid rgba(255, 255, 255, 0.4);
    }

    .btn-secondary:hover {
      background: rgba(255, 255, 255, 0.3);
      border-color: rgba(255, 255, 255, 0.6);
      transform: translateY(-2px);
    }

    .btn-accessible {
      background: linear-gradient(135deg, var(--sage), var(--forest));
      color: white;
    }

    .btn-accessible:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 25px rgba(129, 178, 154, 0.4);
    }

    .btn-accessible.active {
      box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.5);
    }

    /* ==================== MAP CONTAINER ==================== */
    .map-wrap {
      width: 100%;
      height: 480px;
      border-radius: 20px;
      overflow: hidden;
      border: 2px solid rgba(255, 255, 255, 0.2);
      box-shadow: inset 0 2px 10px rgba(0, 0, 0, 0.2);
      background: #1a3a2a;
    }

    #map {
      width: 100%;
      height: 100%;
      background: #2d5a4a;
    }

    /* Leaflet overrides for dark glass theme */
    .leaflet-control-zoom {
      border: 2px solid rgba(255, 255, 255, 0.3) !important;
      border-radius: 12px !important;
      overflow: hidden;
    }

    .leaflet-control-zoom a {
      background: rgba(255, 255, 255, 0.15) !important;
      color: white !important;
      font-weight: bold !important;
    }

    .leaflet-control-zoom a:hover {
      background: rgba(255, 255, 255, 0.3) !important;
    }

    .leaflet-routing-container {
      background: rgba(30, 30, 30, 0.95) !important;
      border-radius: 12px !important;
      border: 2px solid rgba(255, 255, 255, 0.2) !important;
    }

    .leaflet-routing-container h2,
    .leaflet-routing-container h3 {
      color: white !important;
    }

    .leaflet-routing-alt {
      background: rgba(255, 255, 255, 0.08) !important;
      color: rgba(255, 255, 255, 0.9) !important;
    }

    .leaflet-control-attribution {
      background: rgba(0, 0, 0, 0.4) !important;
      color: rgba(255, 255, 255, 0.7) !important;
      font-size: 10px;
    }

    /* ==================== QUICK PLACES ==================== */
    .quick-places {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      margin-top: 16px;
    }

    .quick-places span {
      font-size: 13px;
      color: rgba(255, 255, 255, 0.8);
      align-self: center;
    }

    .quick-btn {
      padding: 8px 16px;
      background: rgba(255, 255, 255, 0.1);
      border: 1px solid rgba(255, 255, 255, 0.3);
      border-radius: 20px;
      color: white;
      font-size: 13px;
      cursor: pointer;
      transition: all 0.25s ease;
      font-family: 'Poppins', sans-serif;
    }

    .quick-btn:hover {
      background: rgba(255, 255, 255, 0.2);
      border-color: var(--terracotta);
      transform: translateY(-1px);
    }

    /* ==================== QR & STATUS ==================== */
    .qr-section {
      margin-top: 20px;
      text-align: center;
      padding: 16px;
      background: rgba(0, 0, 0, 0.2);
      border-radius: 16px;
    }

    .qr-section img {
      border-radius: 12px;
      box-shadow: 0 8px 25px rgba(0, 0, 0, 0.4);
    }

    .map-status {
      margin-top: 12px;
      padding: 12px 16px;
      border-radius: 12px;
      background: rgba(0, 0, 0, 0.2);
      color: rgba(255, 255, 255, 0.9);
      font-size: 14px;
      display: none;
    }

    .map-status.show {
      display: block;
    }

    .map-status.error {
      background: rgba(224, 122, 95, 0.3);
      border: 1px solid var(--terracotta);
    }

    .map-status.success {
      background: rgba(129, 178, 154, 0.3);
      border: 1px solid var(--sage);
    }

    /* ==================== LOADING STATE ==================== */
    .map-loading {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      height: 100%;
      color: white;
      gap: 16px;
    }

    .map-loading.spinner::after {
      content: '';
      width: 48px;
      height: 48px;
      border: 4px solid rgba(255, 255, 255, 0.2);
      border-top-color: var(--terracotta);
      border-radius: 50%;
      animation: spin 0.8s linear infinite;
    }

    @keyframes spin {
      to { transform: rotate(360deg); }
    }

    /* ==================== RESPONSIVE ==================== */
    @media (max-width: 768px) {
      .header {
        padding: 0 20px;
        height: 80px;
      }

      .logo-text h1 {
        font-size: 22px;
      }

      .main-container {
        padding: 90px 16px 24px;
      }

      .map-page-title h1 {
        font-size: 28px;
      }

      .nav-card {
        padding: 20px;
      }

      .controls {
        flex-direction: column;
        align-items: stretch;
      }

      .input-wrap {
        min-width: 100%;
      }

      .map-wrap {
        height: 380px;
      }
    }
  </style>
</head>
<body>

  <div class="background-wrapper">
    <img src="https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=2000" alt="Campus" class="background-image">
    <div class="background-overlay"></div>
  </div>

  <header class="header">
    <div class="logo-section">
      <div class="logo-icon">
        <i class="fas fa-map-marked-alt"></i>
      </div>
      <div class="logo-text">
        <h1>Smart Move</h1>
        <p>Smart Campus Navigation</p>
      </div>
    </div>
    <a href="#" onclick="window.parent.postMessage({nav:'/landing'},'*');return false;" class="nav-back">
      <i class="fas fa-arrow-left"></i> Back to Home
    </a>
  </header>

  <main class="main-container">
    <div class="map-page-title">
      <h1>Interactive Campus Map</h1>
      <p>Enter start and destination, or use quick places. Map loads without any API key.</p>
    </div>

    <div class="nav-card">
      <div class="controls">
        <div class="input-wrap">
          <i class="fas fa-map-pin"></i>
          <input type="text" id="start" placeholder="Start (e.g. IIT Bombay Main Gate)" autocomplete="off">
        </div>
        <div class="input-wrap">
          <i class="fas fa-flag-checkered"></i>
          <input type="text" id="end" placeholder="Destination (e.g. Library IIT Bombay)" autocomplete="off">
        </div>
        <button type="button" class="btn btn-primary" id="btnNavigate" onclick="calculateRoute()">
          <i class="fas fa-route"></i> Navigate
        </button>
        <button type="button" class="btn btn-secondary" id="btnMyLocation" onclick="useMyLocation()">
          <i class="fas fa-location-crosshairs"></i> My location
        </button>
        <button type="button" class="btn btn-secondary" onclick="startVoice()">
          <i class="fas fa-microphone"></i> Voice
        </button>
        <button type="button" class="btn btn-accessible" id="btnAccessible" onclick="toggleAccessible()">
          <i class="fas fa-universal-access"></i> Accessible
        </button>
        <button type="button" class="btn btn-secondary" onclick="shareQR()">
          <i class="fas fa-qrcode"></i> Share QR
        </button>
      </div>

      <div class="quick-places">
        <span>Quick:</span>
        <button type="button" class="quick-btn" data-place="IIT Bombay Main Gate">Main Gate</button>
        <button type="button" class="quick-btn" data-place="IIT Bombay Library">Library</button>
        <button type="button" class="quick-btn" data-place="IIT Bombay VMCC">VMCC</button>
        <button type="button" class="quick-btn" data-place="IIT Bombay Hostel 18">Hostel 18</button>
        <button type="button" class="quick-btn" data-place="IIT Bombay Convocation Hall">Convocation Hall</button>
      </div>

      <div id="mapStatus" class="map-status"></div>

      <div class="map-wrap">
        <div id="map" class="map-loading spinner">Loading map…</div>
      </div>

      <div class="qr-section" id="qrBox"></div>
    </div>
  </main>

  <!-- Leaflet JS -->
  <script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js" integrity="sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo=" crossorigin=""><\/script>
  <script src="https://unpkg.com/leaflet-routing-machine@3.2.12/dist/leaflet-routing-machine.js"><\/script>

  <script>
    // IIT Bombay center
    const IIT_BOMBAY = { lat: 19.1334, lng: 72.9133 };

    let map;
    let routingControl = null;
    let userMarker = null;
    let accessibleMode = false;

    // Initialize map (no API key – uses OpenStreetMap)
    function initMap() {
      const el = document.getElementById('map');
      el.classList.remove('map-loading', 'spinner');
      el.innerHTML = '';

      map = L.map('map').setView([IIT_BOMBAY.lat, IIT_BOMBAY.lng], 16);

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
        maxZoom: 19
      }).addTo(map);

      // Default marker for IIT Bombay
      L.marker([IIT_BOMBAY.lat, IIT_BOMBAY.lng])
        .addTo(map)
        .bindPopup('<b>IIT Bombay</b><br>Campus center')
        .openPopup();

      showStatus('Map loaded. Enter start and destination, or use Quick places.', 'success');
    }

    function showStatus(msg, type) {
      const el = document.getElementById('mapStatus');
      el.textContent = msg;
      el.className = 'map-status show ' + (type || '');
    }

    function hideStatus() {
      document.getElementById('mapStatus').classList.remove('show');
    }

    // Geocode using Nominatim (free, no API key)
    function geocode(query) {
      const url = 'https://nominatim.openstreetmap.org/search?q=' + encodeURIComponent(query) + '&format=json&limit=1';
      return fetch(url, { headers: { 'Accept': 'application/json' } })
        .then(r => r.json())
        .then(data => {
          if (data && data[0]) {
            return { lat: parseFloat(data[0].lat), lng: parseFloat(data[0].lon) };
          }
          return null;
        });
    }

    function clearRoute() {
      if (routingControl) {
        map.removeControl(routingControl);
        routingControl = null;
      }
    }

    function calculateRoute() {
      const startVal = document.getElementById('start').value.trim();
      const endVal = document.getElementById('end').value.trim();

      if (!startVal || !endVal) {
        showStatus('Please enter both start and destination.', 'error');
        return;
      }

      showStatus('Finding route…', '');
      clearRoute();

      const startInput = document.getElementById('start');
      const startLat = startInput.dataset.lat;
      const startLng = startInput.dataset.lng;
      const startPromise = (startVal === 'Current location' && startLat && startLng)
        ? Promise.resolve({ lat: parseFloat(startLat), lng: parseFloat(startLng) })
        : geocode(startVal);

      Promise.all([startPromise, geocode(endVal)])
        .then(([startCoord, endCoord]) => {
          if (!startCoord) {
            showStatus('Start location not found. Try a more specific name (e.g. IIT Bombay Main Gate).', 'error');
            return;
          }
          if (!endCoord) {
            showStatus('Destination not found. Try a more specific name.', 'error');
            return;
          }

          const start = L.latLng(startCoord.lat, startCoord.lng);
          const end = L.latLng(endCoord.lat, endCoord.lng);

          routingControl = L.Routing.control({
            waypoints: [start, end],
            routeWhileDragging: false,
            show: false,
            lineOptions: {
              styles: [{ color: '#E07A5F', weight: 6 }],
              addWaypoints: false
            },
            createMarker: function() { return null; }
          }).addTo(map);

          routingControl.on('routingerror', function() {
            showStatus('Could not compute route for this pair. Try different places.', 'error');
          });

          routingControl.on('routesfound', function() {
            showStatus('Route displayed. Accessible mode: ' + (accessibleMode ? 'on (walking-friendly).' : 'off.'), 'success');
          });

          speak('Route started');
        })
        .catch(() => {
          showStatus('Network error. Check connection and try again.', 'error');
        });
    }

    function useMyLocation() {
      if (!navigator.geolocation) {
        showStatus('Geolocation is not supported by your browser.', 'error');
        return;
      }
      showStatus('Getting your location…', '');
      navigator.geolocation.getCurrentPosition(
        function(pos) {
          const lat = pos.coords.latitude;
          const lng = pos.coords.longitude;
          document.getElementById('start').value = 'Current location';
          document.getElementById('start').dataset.lat = lat;
          document.getElementById('start').dataset.lng = lng;
          if (!userMarker) {
            userMarker = L.marker([lat, lng]).addTo(map).bindPopup('You are here');
          } else {
            userMarker.setLatLng([lat, lng]);
          }
          map.setView([lat, lng], 16);
          showStatus('Start set to your current location.', 'success');
          speak('Location set');
        },
        function() {
          showStatus('Could not get your location. Check permissions or enter start manually.', 'error');
        }
      );
    }

    function startVoice() {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      if (!SpeechRecognition) {
        showStatus('Voice input not supported in this browser.', 'error');
        return;
      }
      const recognition = new SpeechRecognition();
      recognition.onresult = function(e) {
        const speech = e.results[0][0].transcript;
        if (!document.getElementById('start').value) {
          document.getElementById('start').value = speech;
        } else {
          document.getElementById('end').value = speech;
        }
        speak('Location added');
        showStatus('Voice: "' + speech + '" added.', 'success');
      };
      recognition.start();
    }

    function speak(text) {
      const msg = new SpeechSynthesisUtterance(text);
      speechSynthesis.speak(msg);
    }

    function toggleAccessible() {
      accessibleMode = !accessibleMode;
      const btn = document.getElementById('btnAccessible');
      if (accessibleMode) {
        btn.classList.add('active');
        showStatus('Accessible route mode on – prefer step-free / walking routes.', 'success');
        speak('Accessible route enabled');
      } else {
        btn.classList.remove('active');
        showStatus('Normal route mode.', 'success');
        speak('Normal route enabled');
      }
    }

    function shareQR() {
      const url = window.location.href;
      document.getElementById('qrBox').innerHTML =
        '<p style="color:rgba(255,255,255,0.9);margin-bottom:8px;">Scan to open this map</p>' +
        '<img src="https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=' + encodeURIComponent(url) + '" alt="QR Code">';
    }

    document.getElementById('start').addEventListener('input', function() {
      if (this.value !== 'Current location') {
        delete this.dataset.lat;
        delete this.dataset.lng;
      }
    });

    // Quick place buttons
    document.querySelectorAll('.quick-btn').forEach(btn => {
      btn.addEventListener('click', function() {
        const place = this.getAttribute('data-place');
        if (!document.getElementById('start').value) {
          document.getElementById('start').value = place;
        } else {
          document.getElementById('end').value = place;
        }
        showStatus('Place added: ' + place, 'success');
      });
    });

    // Load map when DOM is ready (Leaflet does not need callback like Google Maps)
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', initMap);
    } else {
      initMap();
    }
  <\/script>
</body>
</html>
`,style:{width:"100%",height:"100vh",border:"none",display:"block"},title:"NavigationPage",allow:"geolocation"})}function Ih(){const o=Za();return U.useEffect(()=>{const d=u=>{u.data&&u.data.nav&&o(u.data.nav)};return window.addEventListener("message",d),()=>window.removeEventListener("message",d)},[o]),y.jsx("iframe",{srcDoc:`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Campus Services | IIT Bombay | Smart Move</title>
    <meta name="description" content="Campus services, canteens, study spaces, facilities and events at IIT Bombay">
    <meta name="theme-color" content="#8B4513">
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&family=Montserrat:wght@600;700;800&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">

    <style>
        /* ============================================
           EARTHY COLOR PALETTE & VARIABLES
           ============================================ */
        :root {
            --earth-brown: #8B4513;
            --deep-earth: #654321;
            --terracotta: #E07A5F;
            --sand: #F4A261;
            --sage: #81B29A;
            --forest: #3D5A40;
            --clay: #D4A574;
            --stone: #A8A196;
            --cream: #F9F5F0;
            --charcoal: #2D3142;
            --white: #FFFFFF;
        }

        /* ============================================
           RESET & BASE STYLES
           ============================================ */
        * { margin: 0; padding: 0; box-sizing: border-box; -webkit-tap-highlight-color: transparent; }
        html { scroll-behavior: smooth; }
        body {
            font-family: 'Poppins', sans-serif;
            background: #1a1a1a;
            color: rgba(255,255,255,0.95);
            line-height: 1.65;
            overflow-x: hidden;
            min-height: 100vh;
            position: relative;
        }
        h1, h2, h3 { font-family: 'Montserrat', sans-serif; color: white; }
        p { margin-bottom: 1rem; color: rgba(255,255,255,0.88); }

        .background-wrapper {
            position: fixed;
            top: 0; left: 0; width: 100%; height: 100%;
            z-index: 0;
            overflow: hidden;
        }
        .background-image {
            width: 100%; height: 100%;
            object-fit: cover;
            object-position: center;
        }
        .background-overlay {
            position: absolute;
            top: 0; left: 0; width: 100%; height: 100%;
            background: linear-gradient(135deg, rgba(139, 69, 19, 0.88) 0%, rgba(101, 67, 33, 0.78) 50%, rgba(61, 90, 64, 0.88) 100%);
            backdrop-filter: blur(3px);
        }

        .header {
            position: fixed;
            top: 0; left: 0; right: 0;
            height: 90px;
            background: rgba(255, 255, 255, 0.15);
            backdrop-filter: blur(25px);
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
            z-index: 1000;
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 0 50px;
            border-bottom: 3px solid rgba(212, 165, 116, 0.3);
        }
        .logo-section { display: flex; align-items: center; gap: 18px; }
        .logo-icon {
            width: 60px; height: 60px;
            background: linear-gradient(135deg, var(--earth-brown), var(--terracotta));
            border-radius: 15px;
            display: flex; align-items: center; justify-content: center;
            box-shadow: 0 8px 25px rgba(139, 69, 19, 0.5), inset 0 -3px 10px rgba(0, 0, 0, 0.3);
        }
        .logo-icon i { font-size: 28px; color: white; filter: drop-shadow(0 3px 6px rgba(0, 0, 0, 0.3)); }
        .logo-text h1 {
            font-family: 'Montserrat', sans-serif;
            font-size: 28px;
            font-weight: 800;
            color: white;
            letter-spacing: -0.5px;
            text-shadow: 0 4px 15px rgba(0, 0, 0, 0.5);
            background: linear-gradient(135deg, #fff, var(--clay));
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }
        .logo-text p { font-size: 12px; color: rgba(255, 255, 255, 0.8); font-weight: 600; text-transform: uppercase; letter-spacing: 2px; }
        .nav-back {
            padding: 12px 24px;
            background: rgba(255, 255, 255, 0.2);
            border: 2px solid rgba(255, 255, 255, 0.4);
            border-radius: 50px;
            color: white;
            font-weight: 600;
            text-decoration: none;
            transition: all 0.3s ease;
            display: inline-flex;
            align-items: center;
            gap: 8px;
            font-family: 'Poppins', sans-serif;
        }
        .nav-back:hover { background: rgba(255, 255, 255, 0.3); transform: translateY(-2px); box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3); color: white; }

        .main-container {
            position: relative;
            width: 100%;
            min-height: 100vh;
            padding: 110px 50px 60px;
            z-index: 1;
        }
        .page-hero { text-align: center; margin-bottom: 36px; }
        .page-hero h1, .hero h1 {
            font-size: 42px;
            font-weight: 800;
            color: white;
            text-shadow: 0 5px 20px rgba(0, 0, 0, 0.6);
            margin-bottom: 12px;
            letter-spacing: -1px;
        }
        .hero-subtitle, .page-hero .subtitle {
            font-size: 18px;
            color: rgba(255, 255, 255, 0.9);
            max-width: 640px;
            margin: 0 auto 24px;
        }
        .hero-stats {
            display: flex;
            justify-content: center;
            gap: 3rem;
            flex-wrap: wrap;
        }
        .stat-item { text-align: center; }
        .stat-number {
            font-family: 'Montserrat', sans-serif;
            font-size: 2rem;
            font-weight: 800;
            color: var(--sand);
        }
        .stat-label {
            font-size: 12px;
            color: rgba(255,255,255,0.8);
            text-transform: uppercase;
            letter-spacing: 1px;
        }
        .hero { max-width: 1000px; margin: 0 auto; padding: 0; }

        /* ============================================
           CATEGORY FILTER
           ============================================ */
        .category-filter { max-width: 1000px; margin: 0 auto 28px; }
        .filter-tabs {
            display: flex;
            justify-content: center;
            gap: 10px;
            flex-wrap: wrap;
        }
        .filter-tab {
            padding: 10px 20px;
            background: rgba(255, 255, 255, 0.1);
            border: 2px solid rgba(255, 255, 255, 0.3);
            border-radius: 50px;
            cursor: pointer;
            transition: all 0.25s ease;
            font-weight: 500;
            color: white;
            font-family: 'Poppins', sans-serif;
        }
        .filter-tab:hover,
        .filter-tab.active {
            background: rgba(255, 255, 255, 0.25);
            border-color: var(--terracotta);
        }

        /* ============================================
           SERVICES GRID
           ============================================ */
        .services-container { max-width: 1000px; margin: 0 auto; }
        .section-header { text-align: center; margin-bottom: 28px; }
        .section-title { font-family: 'Montserrat', sans-serif; font-size: 28px; color: white; margin-bottom: 8px; }
        .section-description { font-size: 16px; color: rgba(255,255,255,0.85); }
        .services-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 22px;
        }
        .service-card {
            background: rgba(255, 255, 255, 0.12);
            backdrop-filter: blur(25px);
            border-radius: 24px;
            padding: 28px 24px;
            border: 2px solid rgba(255, 255, 255, 0.2);
            box-shadow: 0 16px 48px rgba(0, 0, 0, 0.35), inset 0 1px 0 rgba(255, 255, 255, 0.1);
            transition: all 0.35s ease;
            cursor: pointer;
        }
        .service-card:hover {
            background: rgba(255, 255, 255, 0.18);
            border-color: rgba(255, 255, 255, 0.35);
            transform: translateY(-6px);
            box-shadow: 0 24px 56px rgba(0, 0, 0, 0.45), 0 0 40px rgba(224, 122, 95, 0.15);
        }
        .service-icon {
            width: 56px;
            height: 56px;
            background: linear-gradient(135deg, var(--terracotta), var(--sand));
            border-radius: 16px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.5rem;
            margin-bottom: 14px;
            box-shadow: 0 6px 20px rgba(139, 69, 19, 0.3);
        }
        .service-title { font-family: 'Montserrat', sans-serif; font-size: 20px; font-weight: 700; color: white; margin-bottom: 10px; }
        .service-description { font-size: 14px; color: rgba(255,255,255,0.88); line-height: 1.6; margin-bottom: 14px; }
        .service-details { display: flex; flex-direction: column; gap: 6px; }
        .detail-item { display: flex; align-items: center; gap: 8px; color: rgba(255,255,255,0.85); font-size: 13px; }
        .detail-icon { color: var(--sand); }
        .service-badge {
            display: inline-block;
            padding: 6px 14px;
            background: rgba(255, 255, 255, 0.15);
            border-radius: 20px;
            font-size: 12px;
            font-weight: 600;
            color: rgba(255,255,255,0.95);
            border: 1px solid rgba(255, 255, 255, 0.2);
            margin-top: 12px;
        }

        /* ============================================
           FOOD MENU MODAL
           ============================================ */
        .modal {
            display: none;
            position: fixed;
            top: 0; left: 0;
            width: 100%; height: 100%;
            background: rgba(0, 0, 0, 0.75);
            backdrop-filter: blur(8px);
            z-index: 2000;
            align-items: center;
            justify-content: center;
            animation: fadeIn 0.3s ease-out;
        }
        .modal.active { display: flex; }
        .modal-content {
            background: rgba(45, 49, 66, 0.98);
            border-radius: 24px;
            max-width: 900px;
            max-height: 85vh;
            overflow-y: auto;
            padding: 2.5rem;
            position: relative;
            box-shadow: 0 25px 80px rgba(0, 0, 0, 0.6);
            border: 2px solid rgba(212, 165, 116, 0.4);
            animation: slideUp 0.4s ease-out;
        }
        .modal-close {
            position: absolute;
            top: 1rem; right: 1rem;
            background: var(--terracotta);
            color: white;
            border: none;
            width: 44px; height: 44px;
            border-radius: 50%;
            font-size: 1.5rem;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.3s ease;
        }
        .modal-close:hover { background: var(--earth-brown); transform: rotate(90deg); }
        .modal-header { margin-bottom: 1.5rem; }
        .modal-title { font-family: 'Montserrat', sans-serif; font-size: 26px; color: white; margin-bottom: 6px; }
        .modal-subtitle { color: rgba(255,255,255,0.8); font-size: 15px; }
        .menu-section { margin-bottom: 2rem; }
        .menu-category { font-family: 'Montserrat', sans-serif; font-size: 18px; color: var(--sand); margin-bottom: 12px; padding-bottom: 8px; border-bottom: 2px solid rgba(255,255,255,0.2); }
        .menu-items { display: grid; gap: 10px; }
        .menu-item {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 14px 16px;
            background: rgba(255, 255, 255, 0.08);
            border-radius: 14px;
            border: 1px solid rgba(255, 255, 255, 0.15);
            transition: all 0.3s ease;
        }
        .menu-item:hover { background: rgba(255, 255, 255, 0.12); }
        .item-name { font-weight: 600; color: white; margin-bottom: 4px; }
        .item-description { font-size: 13px; color: rgba(255,255,255,0.7); }
        .item-price { font-weight: 700; color: var(--terracotta); font-size: 15px; }

        /* ============================================
           ANIMATIONS
           ============================================ */
        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        @keyframes fadeInScale {
            from {
                opacity: 0;
                transform: scale(0.9);
            }
            to {
                opacity: 1;
                transform: scale(1);
            }
        }

        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }

        @keyframes slideUp {
            from {
                opacity: 0;
                transform: translateY(50px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        /* Stagger animations for cards */
        .service-card:nth-child(1) { animation-delay: 0.1s; }
        .service-card:nth-child(2) { animation-delay: 0.2s; }
        .service-card:nth-child(3) { animation-delay: 0.3s; }
        .service-card:nth-child(4) { animation-delay: 0.4s; }
        .service-card:nth-child(5) { animation-delay: 0.5s; }
        .service-card:nth-child(6) { animation-delay: 0.6s; }

        /* ============================================
           FOOTER
           ============================================ */
        footer {
            margin-top: 4rem;
            padding: 2.5rem 50px;
            background: rgba(0, 0, 0, 0.4);
            border-top: 2px solid rgba(212, 165, 116, 0.2);
            border-radius: 24px 24px 0 0;
        }
        .footer-content {
            max-width: 1000px;
            margin: 0 auto;
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 2rem;
            margin-bottom: 1.5rem;
        }
        .footer-section h3 { font-family: 'Montserrat', sans-serif; color: var(--clay); margin-bottom: 12px; font-size: 16px; }
        .footer-section p,
        .footer-section a { color: rgba(255,255,255,0.8); font-size: 14px; line-height: 1.7; text-decoration: none; display: block; margin-bottom: 6px; transition: all 0.3s ease; }
        .footer-section a:hover { color: var(--terracotta); }
        .footer-bottom { text-align: center; padding-top: 1.5rem; border-top: 1px solid rgba(255,255,255,0.1); color: rgba(255,255,255,0.6); font-size: 13px; }

        /* ============================================
           RESPONSIVE DESIGN
           ============================================ */
        @media (max-width: 1024px) {
            h1 { font-size: 3rem; }
            .hero h1 { font-size: 3.5rem; }
            .services-grid {
                grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            }
        }

        @media (max-width: 768px) {
            .header { padding: 0 20px; height: 80px; }
            .logo-text h1 { font-size: 22px; }
            .main-container { padding: 95px 20px 40px; }
            .page-hero h1, .hero h1 { font-size: 30px; }
            .services-grid { grid-template-columns: 1fr; }
            .modal-content { margin: 1rem; padding: 1.5rem; }
            footer { padding: 2rem 20px; }
        }

        /* ============================================
           ACCESSIBILITY
           ============================================ */
        *:focus-visible {
            outline: 3px solid var(--terracotta);
            outline-offset: 3px;
        }

        .skip-to-content {
            position: absolute;
            top: -100px;
            left: 0;
            background: var(--earth-brown);
            color: white;
            padding: 1rem 2rem;
            z-index: 3000;
            transition: top 0.3s ease;
        }

        .skip-to-content:focus {
            top: 0;
        }

        /* ============================================
           UTILITY CLASSES
           ============================================ */
        .hidden {
            display: none !important;
        }

        .text-center {
            text-align: center;
        }

        .mb-1 { margin-bottom: 1rem; }
        .mb-2 { margin-bottom: 2rem; }
        .mb-3 { margin-bottom: 3rem; }

        /* Custom scrollbar */
        ::-webkit-scrollbar {
            width: 12px;
        }

        ::-webkit-scrollbar-track {
            background: var(--cream);
        }

        ::-webkit-scrollbar-thumb {
            background: var(--earth-brown);
            border-radius: 6px;
        }

        ::-webkit-scrollbar-thumb:hover {
            background: var(--terracotta);
        }
    </style>
</head>
<body>

    <div class="background-wrapper">
        <img src="https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=2000" alt="Campus" class="background-image">
        <div class="background-overlay"></div>
    </div>

    <header class="header">
        <div class="logo-section">
            <div class="logo-icon">
                <i class="fas fa-building"></i>
            </div>
            <div class="logo-text">
                <h1>Smart Move</h1>
                <p>Campus Services</p>
            </div>
        </div>
        <a href="#" onclick="window.parent.postMessage({nav:'/landing'},'*');return false;" class="nav-back">
            <i class="fas fa-arrow-left"></i> Back to Home
        </a>
    </header>

    <main class="main-container" id="main-content">
        <div class="page-hero">
            <h1>Campus Services & Amenities</h1>
            <p class="subtitle">Dining, study spaces, facilities, events and more at IIT Bombay</p>
            <div class="hero-stats">
                <div class="stat-item">
                    <div class="stat-number">20+</div>
                    <div class="stat-label">Services</div>
                </div>
                <div class="stat-item">
                    <div class="stat-number">12</div>
                    <div class="stat-label">Dining Options</div>
                </div>
                <div class="stat-item">
                    <div class="stat-number">550</div>
                    <div class="stat-label">Acres Campus</div>
                </div>
            </div>
        </div>

        <!-- Category Filter -->
        <section class="category-filter" id="services">
            <div class="filter-tabs">
                <button class="filter-tab active" data-category="all">All Services</button>
                <button class="filter-tab" data-category="dining">🍽️ Dining</button>
                <button class="filter-tab" data-category="study">📚 Study Spaces</button>
                <button class="filter-tab" data-category="facilities">🏋️ Facilities</button>
                <button class="filter-tab" data-category="events">🎉 Events</button>
                <button class="filter-tab" data-category="explore">🗺️ Explore</button>
            </div>
        </section>

        <!-- Services Container -->
        <section class="services-container">
            <div class="section-header">
                <h2 class="section-title">Campus Services & Amenities</h2>
                <p class="section-description">
                    Everything you need for a comfortable and enriching campus life
                </p>
            </div>

            <div class="services-grid" id="servicesGrid">
                <!-- Dining Services -->
                <div class="service-card" data-category="dining" onclick="openFoodMenu('canteen1')">
                    <div class="service-icon">🍽️</div>
                    <h3 class="service-title">Main Canteen (Canteen 1)</h3>
                    <p class="service-description">
                        Our largest dining facility serving authentic North & South Indian cuisine with a variety of options for breakfast, lunch, and dinner.
                    </p>
                    <div class="service-details">
                        <div class="detail-item">
                            <span class="detail-icon">⏰</span>
                            <span>7:00 AM - 11:00 PM</span>
                        </div>
                        <div class="detail-item">
                            <span class="detail-icon">👥</span>
                            <span>Capacity: 500 people</span>
                        </div>
                        <div class="detail-item">
                            <span class="detail-icon">📍</span>
                            <span>Main Campus, Near H1 Hostel</span>
                        </div>
                    </div>
                    <span class="service-badge">View Full Menu</span>
                </div>

                <div class="service-card" data-category="dining" onclick="openFoodMenu('himalaya')">
                    <div class="service-icon">🍜</div>
                    <h3 class="service-title">Himalaya Canteen</h3>
                    <p class="service-description">
                        Specializing in Chinese, continental, and fusion cuisine. Popular spot for international students and late-night cravings.
                    </p>
                    <div class="service-details">
                        <div class="detail-item">
                            <span class="detail-icon">⏰</span>
                            <span>8:00 AM - 11:00 PM</span>
                        </div>
                        <div class="detail-item">
                            <span class="detail-icon">💰</span>
                            <span>₹50 - ₹200 per meal</span>
                        </div>
                        <div class="detail-item">
                            <span class="detail-icon">📍</span>
                            <span>Near H7 Hostel</span>
                        </div>
                    </div>
                    <span class="service-badge">View Full Menu</span>
                </div>

                <div class="service-card" data-category="dining" onclick="openFoodMenu('nightcanteen')">
                    <div class="service-icon">🌙</div>
                    <h3 class="service-title">Night Canteen</h3>
                    <p class="service-description">
                        Perfect for night owls! Serves quick bites, Maggi, chai, and snacks throughout the night.
                    </p>
                    <div class="service-details">
                        <div class="detail-item">
                            <span class="detail-icon">⏰</span>
                            <span>10:00 PM - 4:00 AM</span>
                        </div>
                        <div class="detail-item">
                            <span class="detail-icon">⭐</span>
                            <span>Popular: Maggi & Chai</span>
                        </div>
                        <div class="detail-item">
                            <span class="detail-icon">📍</span>
                            <span>Central Campus</span>
                        </div>
                    </div>
                    <span class="service-badge">View Menu</span>
                </div>

                <div class="service-card" data-category="dining" onclick="openFoodMenu('foodcourt')">
                    <div class="service-icon">🍕</div>
                    <h3 class="service-title">SAC Food Court</h3>
                    <p class="service-description">
                        Multiple food stalls offering pizza, burgers, South Indian, chaats, and beverages in one convenient location.
                    </p>
                    <div class="service-details">
                        <div class="detail-item">
                            <span class="detail-icon">⏰</span>
                            <span>9:00 AM - 10:00 PM</span>
                        </div>
                        <div class="detail-item">
                            <span class="detail-icon">🎯</span>
                            <span>8 food stalls</span>
                        </div>
                        <div class="detail-item">
                            <span class="detail-icon">📍</span>
                            <span>Student Activity Center</span>
                        </div>
                    </div>
                    <span class="service-badge">View Stalls</span>
                </div>

                <!-- Study Spaces -->
                <div class="service-card" data-category="study">
                    <div class="service-icon">📚</div>
                    <h3 class="service-title">Central Library</h3>
                    <p class="service-description">
                        State-of-the-art library with over 4 lakh books, journals, digital resources, and quiet study zones.
                    </p>
                    <div class="service-details">
                        <div class="detail-item">
                            <span class="detail-icon">⏰</span>
                            <span>8:00 AM - 12:00 AM</span>
                        </div>
                        <div class="detail-item">
                            <span class="detail-icon">💻</span>
                            <span>200+ study seats, Computer labs</span>
                        </div>
                        <div class="detail-item">
                            <span class="detail-icon">📖</span>
                            <span>400,000+ books & journals</span>
                        </div>
                    </div>
                    <span class="service-badge">24/7 Reading Room</span>
                </div>

                <div class="service-card" data-category="study">
                    <div class="service-icon">🏛️</div>
                    <h3 class="service-title">Departmental Reading Rooms</h3>
                    <p class="service-description">
                        Department-specific study spaces with subject reference materials and peaceful environment.
                    </p>
                    <div class="service-details">
                        <div class="detail-item">
                            <span class="detail-icon">⏰</span>
                            <span>8:00 AM - 10:00 PM</span>
                        </div>
                        <div class="detail-item">
                            <span class="detail-icon">📍</span>
                            <span>Each academic department</span>
                        </div>
                        <div class="detail-item">
                            <span class="detail-icon">✨</span>
                            <span>Quiet study environment</span>
                        </div>
                    </div>
                    <span class="service-badge">Department Access</span>
                </div>

                <div class="service-card" data-category="study">
                    <div class="service-icon">🌳</div>
                    <h3 class="service-title">Open Study Areas</h3>
                    <p class="service-description">
                        Beautiful outdoor study spots under trees, near lakes, and in garden areas for relaxed studying.
                    </p>
                    <div class="service-details">
                        <div class="detail-item">
                            <span class="detail-icon">🌞</span>
                            <span>Sunrise to Sunset</span>
                        </div>
                        <div class="detail-item">
                            <span class="detail-icon">🌲</span>
                            <span>Multiple scenic locations</span>
                        </div>
                        <div class="detail-item">
                            <span class="detail-icon">📱</span>
                            <span>Wi-Fi enabled zones</span>
                        </div>
                    </div>
                    <span class="service-badge">Fresh Air Study</span>
                </div>

                <!-- Facilities -->
                <div class="service-card" data-category="facilities">
                    <div class="service-icon">🖨️</div>
                    <h3 class="service-title">Print & Copy Services</h3>
                    <p class="service-description">
                        Multiple printing shops across campus for documents, assignments, posters, and bindings.
                    </p>
                    <div class="service-details">
                        <div class="detail-item">
                            <span class="detail-icon">⏰</span>
                            <span>8:00 AM - 10:00 PM</span>
                        </div>
                        <div class="detail-item">
                            <span class="detail-icon">💰</span>
                            <span>₹1 per page (B&W), ₹5 (Color)</span>
                        </div>
                        <div class="detail-item">
                            <span class="detail-icon">📍</span>
                            <span>5 locations campus-wide</span>
                        </div>
                    </div>
                    <span class="service-badge">Quick Service</span>
                </div>

                <div class="service-card" data-category="facilities">
                    <div class="service-icon">💧</div>
                    <h3 class="service-title">Water Coolers & RO Points</h3>
                    <p class="service-description">
                        Clean drinking water facilities installed across all buildings, hostels, and common areas.
                    </p>
                    <div class="service-details">
                        <div class="detail-item">
                            <span class="detail-icon">✅</span>
                            <span>100+ water points</span>
                        </div>
                        <div class="detail-item">
                            <span class="detail-icon">🧪</span>
                            <span>RO purified water</span>
                        </div>
                        <div class="detail-item">
                            <span class="detail-icon">♻️</span>
                            <span>Regular maintenance</span>
                        </div>
                    </div>
                    <span class="service-badge">Safe & Clean</span>
                </div>

                <div class="service-card" data-category="facilities">
                    <div class="service-icon">🏋️</div>
                    <h3 class="service-title">Gymnasium (SAC Gym)</h3>
                    <p class="service-description">
                        Fully equipped modern gym with cardio machines, weights, and fitness equipment.
                    </p>
                    <div class="service-details">
                        <div class="detail-item">
                            <span class="detail-icon">⏰</span>
                            <span>6:00 AM - 10:00 PM</span>
                        </div>
                        <div class="detail-item">
                            <span class="detail-icon">💪</span>
                            <span>Trainers available</span>
                        </div>
                        <div class="detail-item">
                            <span class="detail-icon">🎫</span>
                            <span>Student membership: ₹500/semester</span>
                        </div>
                    </div>
                    <span class="service-badge">Fitness First</span>
                </div>

                <div class="service-card" data-category="facilities">
                    <div class="service-icon">🚶</div>
                    <h3 class="service-title">Walking Track & Jogging Path</h3>
                    <p class="service-description">
                        Scenic 3km walking track around campus with beautiful views of Powai Lake.
                    </p>
                    <div class="service-details">
                        <div class="detail-item">
                            <span class="detail-icon">🌅</span>
                            <span>Open 24/7</span>
                        </div>
                        <div class="detail-item">
                            <span class="detail-icon">📏</span>
                            <span>3 km loop</span>
                        </div>
                        <div class="detail-item">
                            <span class="detail-icon">🌊</span>
                            <span>Lake view route</span>
                        </div>
                    </div>
                    <span class="service-badge">Peaceful Walk</span>
                </div>

                <div class="service-card" data-category="facilities">
                    <div class="service-icon">🚴</div>
                    <h3 class="service-title">Cycling Tracks</h3>
                    <p class="service-description">
                        Dedicated cycling paths throughout campus. Bicycle rentals available.
                    </p>
                    <div class="service-details">
                        <div class="detail-item">
                            <span class="detail-icon">🚲</span>
                            <span>Bike rental: ₹500/semester</span>
                        </div>
                        <div class="detail-item">
                            <span class="detail-icon">🗺️</span>
                            <span>8 km cycling route</span>
                        </div>
                        <div class="detail-item">
                            <span class="detail-icon">🌳</span>
                            <span>Green campus trails</span>
                        </div>
                    </div>
                    <span class="service-badge">Eco-Friendly</span>
                </div>

                <div class="service-card" data-category="facilities">
                    <div class="service-icon">🏥</div>
                    <h3 class="service-title">Health Centre</h3>
                    <p class="service-description">
                        On-campus hospital with 24/7 emergency services, pharmacy, and specialist consultations.
                    </p>
                    <div class="service-details">
                        <div class="detail-item">
                            <span class="detail-icon">🚑</span>
                            <span>24/7 Emergency</span>
                        </div>
                        <div class="detail-item">
                            <span class="detail-icon">👨‍⚕️</span>
                            <span>Multiple specialists</span>
                        </div>
                        <div class="detail-item">
                            <span class="detail-icon">💊</span>
                            <span>Pharmacy on-site</span>
                        </div>
                    </div>
                    <span class="service-badge">Healthcare Ready</span>
                </div>

                <!-- Events -->
                <div class="service-card" data-category="events">
                    <div class="service-icon">🎭</div>
                    <h3 class="service-title">Mood Indigo</h3>
                    <p class="service-description">
                        Asia's largest college cultural festival with music, dance, drama, and celebrity performances.
                    </p>
                    <div class="service-details">
                        <div class="detail-item">
                            <span class="detail-icon">📅</span>
                            <span>December (Annual)</span>
                        </div>
                        <div class="detail-item">
                            <span class="detail-icon">👥</span>
                            <span>150,000+ attendees</span>
                        </div>
                        <div class="detail-item">
                            <span class="detail-icon">🎸</span>
                            <span>4-day cultural extravaganza</span>
                        </div>
                    </div>
                    <span class="service-badge">Mega Fest</span>
                </div>

                <div class="service-card" data-category="events">
                    <div class="service-icon">⚽</div>
                    <h3 class="service-title">Inter-IIT Sports Meet</h3>
                    <p class="service-description">
                        Annual sports competition between all IITs featuring athletics, team sports, and aquatics.
                    </p>
                    <div class="service-details">
                        <div class="detail-item">
                            <span class="detail-icon">📅</span>
                            <span>October-November</span>
                        </div>
                        <div class="detail-item">
                            <span class="detail-icon">🏆</span>
                            <span>20+ sports events</span>
                        </div>
                        <div class="detail-item">
                            <span class="detail-icon">🎯</span>
                            <span>All IIT participation</span>
                        </div>
                    </div>
                    <span class="service-badge">Sports Glory</span>
                </div>

                <div class="service-card" data-category="events">
                    <div class="service-icon">💻</div>
                    <h3 class="service-title">Hackathons & Tech Fests</h3>
                    <p class="service-description">
                        Regular coding competitions, hackathons, Techfest, and tech workshops throughout the year.
                    </p>
                    <div class="service-details">
                        <div class="detail-item">
                            <span class="detail-icon">🚀</span>
                            <span>Monthly hackathons</span>
                        </div>
                        <div class="detail-item">
                            <span class="detail-icon">🏅</span>
                            <span>Prize money up to ₹5L</span>
                        </div>
                        <div class="detail-item">
                            <span class="detail-icon">🌐</span>
                            <span>24-48 hour events</span>
                        </div>
                    </div>
                    <span class="service-badge">Innovation Hub</span>
                </div>

                <div class="service-card" data-category="events">
                    <div class="service-icon">🎪</div>
                    <h3 class="service-title">Club Events & Workshops</h3>
                    <p class="service-description">
                        50+ active clubs organizing weekly events, workshops, competitions, and social gatherings.
                    </p>
                    <div class="service-details">
                        <div class="detail-item">
                            <span class="detail-icon">🎨</span>
                            <span>Art, Music, Dance, Tech clubs</span>
                        </div>
                        <div class="detail-item">
                            <span class="detail-icon">📆</span>
                            <span>Weekly activities</span>
                        </div>
                        <div class="detail-item">
                            <span class="detail-icon">🤝</span>
                            <span>Open to all students</span>
                        </div>
                    </div>
                    <span class="service-badge">Join Now</span>
                </div>

                <!-- Explore Nearby -->
                <div class="service-card" data-category="explore">
                    <div class="service-icon">🏞️</div>
                    <h3 class="service-title">Powai Lake</h3>
                    <p class="service-description">
                        Beautiful artificial lake adjacent to campus, perfect for morning walks and sunset views.
                    </p>
                    <div class="service-details">
                        <div class="detail-item">
                            <span class="detail-icon">📍</span>
                            <span>Adjacent to campus</span>
                        </div>
                        <div class="detail-item">
                            <span class="detail-icon">🚶</span>
                            <span>5 min walk from main gate</span>
                        </div>
                        <div class="detail-item">
                            <span class="detail-icon">📸</span>
                            <span>Scenic photo spot</span>
                        </div>
                    </div>
                    <span class="service-badge">Must Visit</span>
                </div>

                <div class="service-card" data-category="explore">
                    <div class="service-icon">🛍️</div>
                    <h3 class="service-title">Hiranandani Gardens</h3>
                    <p class="service-description">
                        Upscale shopping and dining complex just outside campus with cafes, restaurants, and stores.
                    </p>
                    <div class="service-details">
                        <div class="detail-item">
                            <span class="detail-icon">🚗</span>
                            <span>10 min by campus shuttle</span>
                        </div>
                        <div class="detail-item">
                            <span class="detail-icon">🍔</span>
                            <span>50+ restaurants & cafes</span>
                        </div>
                        <div class="detail-item">
                            <span class="detail-icon">🎬</span>
                            <span>Multiplex cinema</span>
                        </div>
                    </div>
                    <span class="service-badge">Weekend Spot</span>
                </div>

                <div class="service-card" data-category="explore">
                    <div class="service-icon">⛰️</div>
                    <h3 class="service-title">Sanjay Gandhi National Park</h3>
                    <p class="service-description">
                        Asia's largest urban national park with wildlife, Kanheri Caves, and hiking trails.
                    </p>
                    <div class="service-details">
                        <div class="detail-item">
                            <span class="detail-icon">🚗</span>
                            <span>25 min drive</span>
                        </div>
                        <div class="detail-item">
                            <span class="detail-icon">🦌</span>
                            <span>Wildlife safari available</span>
                        </div>
                        <div class="detail-item">
                            <span class="detail-icon">🏛️</span>
                            <span>Ancient Buddhist caves</span>
                        </div>
                    </div>
                    <span class="service-badge">Nature Escape</span>
                </div>

                <div class="service-card" data-category="explore">
                    <div class="service-icon">🏖️</div>
                    <h3 class="service-title">Mumbai Beaches</h3>
                    <p class="service-description">
                        Juhu Beach, Versova Beach, and Marine Drive - perfect for weekend outings with friends.
                    </p>
                    <div class="service-details">
                        <div class="detail-item">
                            <span class="detail-icon">🚆</span>
                            <span>30-45 min by train</span>
                        </div>
                        <div class="detail-item">
                            <span class="detail-icon">🌅</span>
                            <span>Stunning sunsets</span>
                        </div>
                        <div class="detail-item">
                            <span class="detail-icon">🍿</span>
                            <span>Street food & activities</span>
                        </div>
                    </div>
                    <span class="service-badge">Beach Day</span>
                </div>
            </div>
        </section>
    </main>

    <!-- Food Menu Modal -->
    <div class="modal" id="foodMenuModal">
        <div class="modal-content">
            <button class="modal-close" onclick="closeFoodMenu()" aria-label="Close menu">×</button>
            <div class="modal-header">
                <h2 class="modal-title" id="modalTitle">Food Menu</h2>
                <p class="modal-subtitle" id="modalSubtitle">Delicious meals prepared fresh daily</p>
            </div>
            <div id="modalBody">
                <!-- Menu content will be inserted here -->
            </div>
        </div>
    </div>

    <!-- Footer -->
    <footer>
        <div class="footer-content">
            <div class="footer-section">
                <h3>About IIT Bombay</h3>
                <p>Indian Institute of Technology Bombay is a public research university located in Powai, Mumbai. Established in 1958, it is recognized as an Institute of Eminence.</p>
            </div>
            <div class="footer-section">
                <h3>Quick Links</h3>
                <a href="#services">All Services</a>
                <a href="#dining">Dining Options</a>
                <a href="#facilities">Facilities</a>
                <a href="#events">Events & Fests</a>
            </div>
            <div class="footer-section">
                <h3>Contact</h3>
                <p>📍 Powai, Mumbai 400076</p>
                <p>📞 +91-22-2572 2545</p>
                <p>✉️ <a href="/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="41282f272e01282835236f20226f282f">[email&#160;protected]</a></p>
                <p>🌐 www.iitb.ac.in</p>
            </div>
            <div class="footer-section">
                <h3>Emergency</h3>
                <p>🚑 Health Center: 2576</p>
                <p>🔒 Security: 2222</p>
                <p>🚨 Emergency: 100</p>
                <p>🚒 Fire: 101</p>
            </div>
        </div>
        <div class="footer-bottom">
            <p>&copy; 2025 IIT Bombay Campus Services. Made with ❤️ for the IIT Bombay community.</p>
        </div>
    </footer>

    <!-- JavaScript -->
    <script>
        // Category filter functionality
        const filterTabs = document.querySelectorAll('.filter-tab');
        const serviceCards = document.querySelectorAll('.service-card');

        filterTabs.forEach(tab => {
            tab.addEventListener('click', () => {
                // Remove active class from all tabs
                filterTabs.forEach(t => t.classList.remove('active'));
                // Add active class to clicked tab
                tab.classList.add('active');

                const category = tab.getAttribute('data-category');

                // Filter service cards
                serviceCards.forEach(card => {
                    const cardCategory = card.getAttribute('data-category');
                    
                    if (category === 'all' || cardCategory === category) {
                        card.style.display = 'block';
                        // Re-trigger animation
                        card.style.animation = 'none';
                        setTimeout(() => {
                            card.style.animation = 'fadeInScale 0.6s ease-out backwards';
                        }, 10);
                    } else {
                        card.style.display = 'none';
                    }
                });
            });
        });

        // Food Menu Data
        const foodMenus = {
            canteen1: {
                title: "Main Canteen (Canteen 1)",
                subtitle: "Full-service dining with North & South Indian cuisine",
                sections: [
                    {
                        category: "Breakfast (7:00 AM - 10:00 AM)",
                        items: [
                            { name: "Idli Sambar", description: "4 pcs with coconut chutney", price: "₹30" },
                            { name: "Masala Dosa", description: "Crispy dosa with potato filling", price: "₹40" },
                            { name: "Poha", description: "Flattened rice with peanuts", price: "₹25" },
                            { name: "Upma", description: "Semolina with vegetables", price: "₹25" },
                            { name: "Paratha with Curd", description: "2 parathas", price: "₹35" },
                            { name: "Bread Omelette", description: "2 eggs with toast", price: "₹30" }
                        ]
                    },
                    {
                        category: "Lunch (12:00 PM - 3:00 PM)",
                        items: [
                            { name: "Thali (Veg)", description: "Rice, dal, 2 sabzi, roti, salad", price: "₹70" },
                            { name: "Thali (Non-veg)", description: "Rice, dal, chicken curry, roti", price: "₹100" },
                            { name: "Chole Bhature", description: "2 bhature with chickpeas", price: "₹60" },
                            { name: "Rajma Chawal", description: "Kidney beans with rice", price: "₹55" },
                            { name: "Biryani (Veg)", description: "Aromatic rice with vegetables", price: "₹80" },
                            { name: "Biryani (Chicken)", description: "Aromatic rice with chicken", price: "₹120" }
                        ]
                    },
                    {
                        category: "Snacks (4:00 PM - 7:00 PM)",
                        items: [
                            { name: "Samosa", description: "2 pcs with chutney", price: "₹20" },
                            { name: "Pakora", description: "Mixed vegetable fritters", price: "₹30" },
                            { name: "Sandwich", description: "Grilled veg sandwich", price: "₹40" },
                            { name: "Chai", description: "Hot Indian tea", price: "₹10" },
                            { name: "Coffee", description: "Hot coffee", price: "₹15" }
                        ]
                    },
                    {
                        category: "Dinner (7:00 PM - 10:30 PM)",
                        items: [
                            { name: "Dal Fry with Rice", description: "Yellow lentils", price: "₹50" },
                            { name: "Paneer Butter Masala", description: "With 4 rotis", price: "₹85" },
                            { name: "Mixed Veg Curry", description: "With rice or roti", price: "₹65" },
                            { name: "Egg Curry", description: "2 eggs with gravy", price: "₹70" },
                            { name: "Fish Fry", description: "2 pcs with rice", price: "₹110" }
                        ]
                    }
                ]
            },
            himalaya: {
                title: "Himalaya Canteen",
                subtitle: "Chinese, Continental & Fusion Cuisine",
                sections: [
                    {
                        category: "Chinese Specialties",
                        items: [
                            { name: "Hakka Noodles", description: "Veg/Chicken/Egg", price: "₹80/₹100/₹90" },
                            { name: "Fried Rice", description: "Veg/Chicken/Egg", price: "₹75/₹95/₹85" },
                            { name: "Manchurian", description: "Dry or gravy", price: "₹70" },
                            { name: "Chilli Chicken", description: "Spicy chicken with peppers", price: "₹110" },
                            { name: "Spring Rolls", description: "4 pcs with sauce", price: "₹60" }
                        ]
                    },
                    {
                        category: "Continental",
                        items: [
                            { name: "Pasta Alfredo", description: "Creamy white sauce pasta", price: "₹90" },
                            { name: "Pasta Arrabiata", description: "Spicy tomato sauce pasta", price: "₹85" },
                            { name: "Grilled Sandwich", description: "Cheese & vegetables", price: "₹70" },
                            { name: "French Fries", description: "Crispy potato fries", price: "₹50" },
                            { name: "Pizza (Personal)", description: "7 inch pizza", price: "₹120" }
                        ]
                    },
                    {
                        category: "Beverages & Desserts",
                        items: [
                            { name: "Cold Coffee", description: "With ice cream", price: "₹60" },
                            { name: "Chocolate Shake", description: "Thick chocolate shake", price: "₹70" },
                            { name: "Fresh Juice", description: "Orange/Watermelon", price: "₹40" },
                            { name: "Brownie with Ice Cream", description: "Warm brownie", price: "₹80" },
                            { name: "Pastry", description: "Chocolate/Pineapple", price: "₹50" }
                        ]
                    }
                ]
            },
            nightcanteen: {
                title: "Night Canteen",
                subtitle: "Late night cravings solved! Open 10 PM - 4 AM",
                sections: [
                    {
                        category: "Bestsellers",
                        items: [
                            { name: "Maggi (Plain)", description: "Classic 2-minute noodles", price: "₹20" },
                            { name: "Maggi (Masala)", description: "With extra spices & veggies", price: "₹30" },
                            { name: "Maggi (Cheese)", description: "With cheese topping", price: "₹40" },
                            { name: "Bread Omelette", description: "2 eggs with 2 bread", price: "₹35" },
                            { name: "Chai", description: "Hot masala tea", price: "₹10" },
                            { name: "Coffee", description: "Strong filter coffee", price: "₹15" }
                        ]
                    },
                    {
                        category: "Quick Bites",
                        items: [
                            { name: "Sandwich (Veg)", description: "Grilled sandwich", price: "₹40" },
                            { name: "Sandwich (Cheese)", description: "Extra cheese", price: "₹50" },
                            { name: "Pav Bhaji", description: "2 pav with bhaji", price: "₹45" },
                            { name: "Vada Pav", description: "Mumbai special", price: "₹20" },
                            { name: "Samosa", description: "2 pcs hot & crispy", price: "₹20" }
                        ]
                    }
                ]
            },
            foodcourt: {
                title: "SAC Food Court",
                subtitle: "Multiple cuisines under one roof!",
                sections: [
                    {
                        category: "Stall 1: South Indian",
                        items: [
                            { name: "Masala Dosa", description: "Crispy dosa", price: "₹50" },
                            { name: "Idli Vada", description: "3 idli, 1 vada", price: "₹45" },
                            { name: "Uttapam", description: "Thick pancake", price: "₹55" },
                            { name: "Filter Coffee", description: "South Indian style", price: "₹20" }
                        ]
                    },
                    {
                        category: "Stall 2: North Indian",
                        items: [
                            { name: "Chole Kulche", description: "2 kulche", price: "₹60" },
                            { name: "Pav Bhaji", description: "Mumbai style", price: "₹50" },
                            { name: "Paneer Paratha", description: "Stuffed paratha", price: "₹55" }
                        ]
                    },
                    {
                        category: "Stall 3: Fast Food",
                        items: [
                            { name: "Burger (Veg)", description: "With fries", price: "₹70" },
                            { name: "Burger (Chicken)", description: "With fries", price: "₹90" },
                            { name: "Pizza Slice", description: "Margherita", price: "₹50" },
                            { name: "Garlic Bread", description: "4 pcs", price: "₹60" }
                        ]
                    },
                    {
                        category: "Stall 4: Chaats & Snacks",
                        items: [
                            { name: "Pani Puri", description: "8 pcs", price: "₹30" },
                            { name: "Bhel Puri", description: "Mumbai style", price: "₹35" },
                            { name: "Dahi Puri", description: "8 pcs", price: "₹40" },
                            { name: "Sev Puri", description: "Mumbai style", price: "₹35" }
                        ]
                    },
                    {
                        category: "Stall 5: Beverages",
                        items: [
                            { name: "Fresh Lime Soda", description: "Sweet/Salt", price: "₹25" },
                            { name: "Lassi", description: "Sweet/Salted", price: "₹40" },
                            { name: "Milkshake", description: "Various flavors", price: "₹60" },
                            { name: "Sugarcane Juice", description: "Fresh squeezed", price: "₹30" }
                        ]
                    }
                ]
            }
        };

        // Open Food Menu Modal
        function openFoodMenu(canteenId) {
            const modal = document.getElementById('foodMenuModal');
            const modalTitle = document.getElementById('modalTitle');
            const modalSubtitle = document.getElementById('modalSubtitle');
            const modalBody = document.getElementById('modalBody');

            const menu = foodMenus[canteenId];
            
            if (menu) {
                modalTitle.textContent = menu.title;
                modalSubtitle.textContent = menu.subtitle;

                let menuHTML = '';
                menu.sections.forEach(section => {
                    menuHTML += \`
                        <div class="menu-section">
                            <h3 class="menu-category">\${section.category}</h3>
                            <div class="menu-items">
                    \`;
                    
                    section.items.forEach(item => {
                        menuHTML += \`
                            <div class="menu-item">
                                <div>
                                    <div class="item-name">\${item.name}</div>
                                    <div class="item-description">\${item.description}</div>
                                </div>
                                <div class="item-price">\${item.price}</div>
                            </div>
                        \`;
                    });
                    
                    menuHTML += \`
                            </div>
                        </div>
                    \`;
                });

                modalBody.innerHTML = menuHTML;
                modal.classList.add('active');
                document.body.style.overflow = 'hidden';
            }
        }

        // Close Food Menu Modal
        function closeFoodMenu() {
            const modal = document.getElementById('foodMenuModal');
            modal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }

        // Close modal when clicking outside
        document.getElementById('foodMenuModal').addEventListener('click', (e) => {
            if (e.target.id === 'foodMenuModal') {
                closeFoodMenu();
            }
        });

        // Smooth scroll for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Add scroll animation for service cards
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        // Observe all service cards
        serviceCards.forEach(card => {
            observer.observe(card);
        });

        `,style:{width:"100%",height:"100vh",border:"none",display:"block"},title:"CampusServicesPage",allow:"geolocation"})}const $h={canteen1:{title:"Main Canteen (Canteen 1)",subtitle:"North & South Indian Cuisine",categories:[{name:"Breakfast",items:[{name:"Masala Dosa",desc:"With chutney & sambar",price:"₹40"},{name:"Poha",desc:"Light & healthy",price:"₹25"}]},{name:"Lunch",items:[{name:"Veg Thali",desc:"Rice, roti, sabzi, dal",price:"₹80"},{name:"Paneer Butter Masala",desc:"With 2 rotis",price:"₹90"}]}]},himalaya:{title:"Himalaya Canteen",subtitle:"Chinese & Fusion",categories:[{name:"Popular Items",items:[{name:"Hakka Noodles",desc:"Veg / Chicken",price:"₹120"},{name:"Manchurian",desc:"Dry / Gravy",price:"₹100"}]}]},nightcanteen:{title:"Night Canteen",subtitle:"Late Night Snacks",categories:[{name:"Snacks",items:[{name:"Maggi",desc:"Classic / Cheese",price:"₹30"},{name:"Chai",desc:"Hot tea",price:"₹15"}]}]},foodcourt:{title:"SAC Food Court",subtitle:"Multiple Stalls",categories:[{name:"Fast Food",items:[{name:"Pizza Slice",desc:"Veg / Non-veg",price:"₹90"},{name:"Burger",desc:"Cheese / Chicken",price:"₹70"}]}]}};function Ph({isOpen:o,onClose:f,data:d}){return!o||!d?null:y.jsx("div",{className:"food-modal-overlay",onClick:f,children:y.jsxs("div",{className:"food-modal",onClick:u=>u.stopPropagation(),children:[y.jsx("button",{className:"close-btn",onClick:f,children:"×"}),y.jsx("h2",{children:d.title}),y.jsx("p",{className:"subtitle",children:d.subtitle}),d.categories.map((u,b)=>y.jsxs("div",{className:"menu-section",children:[y.jsx("h3",{className:"menu-category",children:u.name}),u.items.map((E,B)=>y.jsxs("div",{className:"menu-item",children:[y.jsxs("div",{children:[y.jsx("div",{className:"item-name",children:E.name}),y.jsx("div",{className:"item-description",children:E.desc})]}),y.jsx("div",{className:"item-price",children:E.price})]},B))]},b))]})})}function eg(){const[o,f]=U.useState(null),d=b=>{f($h[b])},u=()=>{f(null)};return y.jsxs("div",{className:"dining-page",children:[y.jsx("h1",{children:"Dining Options"}),y.jsxs("div",{className:"canteen-grid",children:[y.jsx("div",{onClick:()=>d("canteen1"),children:"Main Canteen"}),y.jsx("div",{onClick:()=>d("himalaya"),children:"Himalaya"}),y.jsx("div",{onClick:()=>d("nightcanteen"),children:"Night Canteen"}),y.jsx("div",{onClick:()=>d("foodcourt"),children:"SAC Food Court"})]}),y.jsx(Ph,{isOpen:!!o,onClose:u,data:o})]})}function tg(){return y.jsx(Yh,{children:y.jsxs(Hh,{children:[y.jsx(It,{path:"/",element:y.jsx(Qh,{})}),y.jsx(It,{path:"/landing",element:y.jsx(Kh,{})}),y.jsx(It,{path:"/iit-bombay",element:y.jsx(Jh,{})}),y.jsx(It,{path:"/campus-map",element:y.jsx(Fh,{})}),y.jsx(It,{path:"/navigation",element:y.jsx(Wh,{})}),y.jsx(It,{path:"/campus-services",element:y.jsx(Ih,{})}),y.jsx(It,{path:"/dining",element:y.jsx(eg,{})})," ",y.jsx(It,{path:"*",element:y.jsx(Uh,{to:"/",replace:!0})})]})})}Z0.createRoot(document.getElementById("root")).render(y.jsx(U.StrictMode,{children:y.jsx(tg,{})}));
