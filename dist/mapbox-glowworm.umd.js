!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((t="undefined"!=typeof globalThis?globalThis:t||self).glowworm={})}(this,function(t){"use strict";var c=function(){return(c=Object.assign||function(t){for(var e,r=1,o=arguments.length;r<o;r++)for(var n in e=arguments[r])Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t}).apply(this,arguments)};function l(t,e,r){if(r||2===arguments.length)for(var o,n=0,a=e.length;n<a;n++)!o&&n in e||((o=o||Array.prototype.slice.call(e,0,n))[n]=e[n]);return t.concat(o||Array.prototype.slice.call(e))}var e="object"==typeof global&&global&&global.Object===Object&&global,r="object"==typeof self&&self&&self.Object===Object&&self,r=e||r||Function("return this")(),o=r.Symbol,n=Object.prototype,B=n.hasOwnProperty,I=n.toString,i=o?o.toStringTag:void 0;var U=Object.prototype.toString;var T="[object Null]",R="[object Undefined]",q=o?o.toStringTag:void 0;function a(t){if(null==t)return void 0===t?R:T;if(q&&q in Object(t)){var e=t,r=B.call(e,i),o=e[i];try{var n=!(e[i]=void 0)}catch(t){}var a=I.call(e);return n&&(r?e[i]=o:delete e[i]),a}return U.call(t)}function u(t){return null!=t&&"object"==typeof t}var M=Array.isArray;function S(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}var G="[object AsyncFunction]",$="[object Function]",N="[object GeneratorFunction]",V="[object Proxy]";function W(t){if(S(t))return(t=a(t))==$||t==N||t==G||t==V}var n=r["__core-js_shared__"],H=(n=/[^.]+$/.exec(n&&n.keys&&n.keys.IE_PROTO||""))?"Symbol(src)_1."+n:"";var J=Function.prototype.toString;function s(t){if(null!=t){try{return J.call(t)}catch(t){}try{return t+""}catch(t){}}return""}var K=/^\[object .+?Constructor\]$/,n=Function.prototype,p=Object.prototype,n=n.toString,p=p.hasOwnProperty,Q=RegExp("^"+n.call(p).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function X(t){var e;return S(t)&&(e=t,!(H&&H in e))&&(W(t)?Q:K).test(s(t))}function f(t,e){e=e;t=null==(t=t)?void 0:t[e];return X(t)?t:void 0}var n=f(r,"WeakMap"),Y=Object.create;function y(){}var Z=function(t){if(!S(t))return{};if(Y)return Y(t);y.prototype=t;t=new y;return y.prototype=void 0,t};var tt=function(){try{var t=f(Object,"defineProperty");return t({},"",{}),t}catch(t){}}();var et=/^(?:0|[1-9]\d*)$/;function rt(t,e,r){"__proto__"==e&&tt?tt(t,e,{configurable:!0,enumerable:!0,value:r,writable:!0}):t[e]=r}function ot(t,e){return t===e||t!=t&&e!=e}var nt=Object.prototype.hasOwnProperty;function at(t,e,r){var o=t[e];nt.call(t,e)&&ot(o,r)&&(void 0!==r||e in t)||rt(t,e,r)}function C(t,e,r,o){for(var n=!r,a=(r=r||{},-1),c=e.length;++a<c;){var i=e[a],u=o?o(r[i],t[i],i,r,t):void 0;(n?rt:at)(r,i,u=void 0===u?t[i]:u)}return r}var ct=9007199254740991;function it(t){return"number"==typeof t&&-1<t&&t%1==0&&t<=ct}function ut(t){return null!=t&&it(t.length)&&!W(t)}var st=Object.prototype;function z(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||st)}function lt(t){return u(t)&&"[object Arguments]"==a(t)}var p=Object.prototype,pt=p.hasOwnProperty,ft=p.propertyIsEnumerable,yt=lt(function(){return arguments}())?lt:function(t){return u(t)&&pt.call(t,"callee")&&!ft.call(t,"callee")};var p="object"==typeof t&&t&&!t.nodeType&&t,b=p&&"object"==typeof module&&module&&!module.nodeType&&module,b=b&&b.exports===p?r.Buffer:void 0,bt=(b?b.isBuffer:void 0)||function(){return!1},h={};function d(e){return function(t){return e(t)}}h["[object Float32Array]"]=h["[object Float64Array]"]=h["[object Int8Array]"]=h["[object Int16Array]"]=h["[object Int32Array]"]=h["[object Uint8Array]"]=h["[object Uint8ClampedArray]"]=h["[object Uint16Array]"]=h["[object Uint32Array]"]=!0,h["[object Arguments]"]=h["[object Array]"]=h["[object ArrayBuffer]"]=h["[object Boolean]"]=h["[object DataView]"]=h["[object Date]"]=h["[object Error]"]=h["[object Function]"]=h["[object Map]"]=h["[object Number]"]=h["[object Object]"]=h["[object RegExp]"]=h["[object Set]"]=h["[object String]"]=h["[object WeakMap]"]=!1;var p="object"==typeof t&&t&&!t.nodeType&&t,v=p&&"object"==typeof module&&module&&!module.nodeType&&module,j=v&&v.exports===p&&e.process,b=function(){try{var t=v&&v.require&&v.require("util").types;return t?t:j&&j.binding&&j.binding("util")}catch(t){}}(),p=b&&b.isTypedArray,ht=p?d(p):function(t){return u(t)&&it(t.length)&&!!h[a(t)]},dt=Object.prototype.hasOwnProperty;function vt(t,e){var r,o,n,a,c=M(t),i=!c&&yt(t),u=!c&&!i&&bt(t),s=!c&&!i&&!u&&ht(t),l=c||i||u||s,p=l?function(t,e){for(var r=-1,o=Array(t);++r<t;)o[r]=e(r);return o}(t.length,String):[],f=p.length;for(r in t)!e&&!dt.call(t,r)||l&&("length"==r||u&&("offset"==r||"parent"==r)||s&&("buffer"==r||"byteLength"==r||"byteOffset"==r)||(a=void 0,a=typeof(o=r),(n=null==(n=f)?9007199254740991:n)&&("number"==a||"symbol"!=a&&et.test(o))&&-1<o&&o%1==0&&o<n))||p.push(r);return p}function jt(e,r){return function(t){return e(r(t))}}var _t=jt(Object.keys,Object),gt=Object.prototype.hasOwnProperty;function mt(t){return(ut(t)?vt:function(t){if(!z(t))return _t(t);var e,r=[];for(e in Object(t))gt.call(t,e)&&"constructor"!=e&&r.push(e);return r})(t)}var wt=Object.prototype.hasOwnProperty;function At(t){if(!S(t)){var e=t,r=[];if(null!=e)for(var o in Object(e))r.push(o);return r}var n,a=z(t),c=[];for(n in t)("constructor"!=n||!a&&wt.call(t,n))&&c.push(n);return c}function Ft(t){return ut(t)?vt(t,!0):At(t)}var _=f(Object,"create");var Ot=Object.prototype.hasOwnProperty;var Et=Object.prototype.hasOwnProperty;function g(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var o=t[e];this.set(o[0],o[1])}}function m(t,e){for(var r=t.length;r--;)if(ot(t[r][0],e))return r;return-1}g.prototype.clear=function(){this.__data__=_?_(null):{},this.size=0},g.prototype.delete=function(t){return t=this.has(t)&&delete this.__data__[t],this.size-=t?1:0,t},g.prototype.get=function(t){var e,r=this.__data__;return _?"__lodash_hash_undefined__"===(e=r[t])?void 0:e:Ot.call(r,t)?r[t]:void 0},g.prototype.has=function(t){var e=this.__data__;return _?void 0!==e[t]:Et.call(e,t)},g.prototype.set=function(t,e){var r=this.__data__;return this.size+=this.has(t)?0:1,r[t]=_&&void 0===e?"__lodash_hash_undefined__":e,this};var Mt=Array.prototype.splice;function w(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var o=t[e];this.set(o[0],o[1])}}w.prototype.clear=function(){this.__data__=[],this.size=0},w.prototype.delete=function(t){var e=this.__data__;return!((t=m(e,t))<0||(t==e.length-1?e.pop():Mt.call(e,t,1),--this.size,0))},w.prototype.get=function(t){var e=this.__data__;return(t=m(e,t))<0?void 0:e[t][1]},w.prototype.has=function(t){return-1<m(this.__data__,t)},w.prototype.set=function(t,e){var r=this.__data__,o=m(r,t);return o<0?(++this.size,r.push([t,e])):r[o][1]=e,this};var A=f(r,"Map");function F(t,e){var r,o,t=t.__data__;return("string"==(o=typeof(r=e))||"number"==o||"symbol"==o||"boolean"==o?"__proto__"!==r:null===r)?t["string"==typeof e?"string":"hash"]:t.map}function O(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var o=t[e];this.set(o[0],o[1])}}function St(t,e){for(var r=-1,o=e.length,n=t.length;++r<o;)t[n+r]=e[r];return t}O.prototype.clear=function(){this.size=0,this.__data__={hash:new g,map:new(A||w),string:new g}},O.prototype.delete=function(t){return t=F(this,t).delete(t),this.size-=t?1:0,t},O.prototype.get=function(t){return F(this,t).get(t)},O.prototype.has=function(t){return F(this,t).has(t)},O.prototype.set=function(t,e){var r=F(this,t),o=r.size;return r.set(t,e),this.size+=r.size==o?0:1,this};var Ct=jt(Object.getPrototypeOf,Object);function D(t){t=this.__data__=new w(t);this.size=t.size}D.prototype.clear=function(){this.__data__=new w,this.size=0},D.prototype.delete=function(t){var e=this.__data__,t=e.delete(t);return this.size=e.size,t},D.prototype.get=function(t){return this.__data__.get(t)},D.prototype.has=function(t){return this.__data__.has(t)},D.prototype.set=function(t,e){var r=this.__data__;if(r instanceof w){var o=r.__data__;if(!A||o.length<199)return o.push([t,e]),this.size=++r.size,this;r=this.__data__=new O(o)}return r.set(t,e),this.size=r.size,this};var e="object"==typeof t&&t&&!t.nodeType&&t,p=e&&"object"==typeof module&&module&&!module.nodeType&&module,p=p&&p.exports===e?r.Buffer:void 0,zt=p?p.allocUnsafe:void 0;function Dt(){return[]}var xt=Object.prototype.propertyIsEnumerable,Pt=Object.getOwnPropertySymbols,Lt=Pt?function(e){if(null==e)return[];e=Object(e);for(var t=Pt(e),r=function(t){return xt.call(e,t)},o=-1,n=null==t?0:t.length,a=0,c=[];++o<n;){var i=t[o];r(i,o,t)&&(c[a++]=i)}return c}:Dt;var kt=Object.getOwnPropertySymbols?function(t){for(var e=[];t;)St(e,Lt(t)),t=Ct(t);return e}:Dt;function Bt(t,e,r){e=e(t);return M(t)?e:St(e,r(t))}function It(t){return Bt(t,mt,Lt)}function Ut(t){return Bt(t,Ft,kt)}var e=f(r,"DataView"),p=f(r,"Promise"),E=f(r,"Set"),Tt="[object Map]",Rt="[object Promise]",qt="[object Set]",Gt="[object WeakMap]",$t="[object DataView]",Nt=s(e),Vt=s(A),Wt=s(p),Ht=s(E),Jt=s(n),x=a,Kt=x=e&&x(new e(new ArrayBuffer(1)))!=$t||A&&x(new A)!=Tt||p&&x(p.resolve())!=Rt||E&&x(new E)!=qt||n&&x(new n)!=Gt?function(t){var e=a(t),t="[object Object]"==e?t.constructor:void 0,t=t?s(t):"";if(t)switch(t){case Nt:return $t;case Vt:return Tt;case Wt:return Rt;case Ht:return qt;case Jt:return Gt}return e}:x,Qt=Object.prototype.hasOwnProperty;var Xt=r.Uint8Array;function Yt(t){var e=new t.constructor(t.byteLength);return new Xt(e).set(new Xt(t)),e}var Zt=/\w*$/;var e=o?o.prototype:void 0,te=e?e.valueOf:void 0;function ee(t,e,r){var o,n,a,c,i=t.constructor;switch(e){case"[object ArrayBuffer]":return Yt(t);case"[object Boolean]":case"[object Date]":return new i(+t);case"[object DataView]":return a=t,c=(c=r)?Yt(a.buffer):a.buffer,new a.constructor(c,a.byteOffset,a.byteLength);case"[object Float32Array]":case"[object Float64Array]":case"[object Int8Array]":case"[object Int16Array]":case"[object Int32Array]":case"[object Uint8Array]":case"[object Uint8ClampedArray]":case"[object Uint16Array]":case"[object Uint32Array]":return c=t,a=(a=r)?Yt(c.buffer):c.buffer,new c.constructor(a,c.byteOffset,c.length);case"[object Map]":return new i;case"[object Number]":case"[object String]":return new i(t);case"[object RegExp]":return(n=new(o=t).constructor(o.source,Zt.exec(o))).lastIndex=o.lastIndex,n;case"[object Set]":return new i;case"[object Symbol]":return o=t,te?Object(te.call(o)):{}}}var p=b&&b.isMap,re=p?d(p):function(t){return u(t)&&"[object Map]"==Kt(t)};var E=b&&b.isSet,oe=E?d(E):function(t){return u(t)&&"[object Set]"==Kt(t)},ne="[object Arguments]",ae="[object Function]",ce="[object Object]",P={};function L(r,o,n,t,e,a){var c,i=1&o,u=2&o,s=4&o;if(void 0===(c=n?e?n(r,t,e,a):n(r):c)){if(!S(r))return r;var l,p,f,y,b,t=M(r);if(t){if(_=(g=r).length,b=new g.constructor(_),_&&"string"==typeof g[0]&&Qt.call(g,"index")&&(b.index=g.index,b.input=g.input),c=b,!i){var h=r,d=c,v=-1,j=h.length;for(d=d||Array(j);++v<j;)d[v]=h[v];return d}}else{var _=Kt(r),g=_==ae||"[object GeneratorFunction]"==_;if(bt(r))return b=r,(y=i)?b.slice():(y=b.length,y=zt?zt(y):new b.constructor(y),b.copy(y),y);if(_==ce||_==ne||g&&!e){if(c=u||g||"function"!=typeof(y=r).constructor||z(y)?{}:Z(Ct(y)),!i)return u?(f=l=r,f=(p=c)&&C(f,Ft(f),p),C(l,kt(l),f)):(l=p=r,m=(f=c)&&C(l,mt(l),f),C(p,Lt(p),m))}else{if(!P[_])return e?r:{};c=ee(r,_,i)}}var m=(a=a||new D).get(r);if(m)return m;a.set(r,c),oe(r)?r.forEach(function(t){c.add(L(t,o,n,t,r,a))}):re(r)&&r.forEach(function(t,e){c.set(e,L(t,o,n,e,r,a))});for(var w=t?void 0:(s?u?Ut:It:u?Ft:mt)(r),A=w||r,F=function(t,e){w&&(t=r[e=t]),at(c,e,L(t,o,n,e,r,a))},O=-1,E=null==A?0:A.length;++O<E&&!1!==F(A[O],O,A););}return c}P[ne]=P["[object Array]"]=P["[object ArrayBuffer]"]=P["[object DataView]"]=P["[object Boolean]"]=P["[object Date]"]=P["[object Float32Array]"]=P["[object Float64Array]"]=P["[object Int8Array]"]=P["[object Int16Array]"]=P["[object Int32Array]"]=P["[object Map]"]=P["[object Number]"]=P[ce]=P["[object RegExp]"]=P["[object Set]"]=P["[object String]"]=P["[object Symbol]"]=P["[object Uint8Array]"]=P["[object Uint8ClampedArray]"]=P["[object Uint16Array]"]=P["[object Uint32Array]"]=!0,P["[object Error]"]=P[ae]=P["[object WeakMap]"]=!1;function ie(t){return L(t,5)}var k=3.141592653589793,ue=.006693421622965943;function se(t,e){var r,o,n,a,c;return c=e,(a=t)<72.004||137.8347<a||c<.8293||55.8271<c?[t,e]:(r=2*(a=t-105)-100+3*(c=e-35)+.2*c*c+.1*a*c+.2*Math.sqrt(Math.abs(a)),a=(r+=2*(20*Math.sin(6*a*k)+20*Math.sin(2*a*k))/3)+2*(20*Math.sin(c*k)+40*Math.sin(c/3*k))/3+2*(160*Math.sin(c/12*k)+320*Math.sin(c*k/30))/3,c=300+(r=t-105)+2*(c=e-35)+.1*r*r+.1*r*c+.1*Math.sqrt(Math.abs(r)),c=(c+=2*(20*Math.sin(6*r*k)+20*Math.sin(2*r*k))/3)+2*(20*Math.sin(r*k)+40*Math.sin(r/3*k))/3+2*(150*Math.sin(r/12*k)+300*Math.sin(r/30*k))/3,r=e/180*k,o=Math.sin(r),o=1-ue*o*o,n=Math.sqrt(o),a=180*a/(6378245*(1-ue)/(o*n)*k),[2*t-(t+(c=180*c/(6378245/n*Math.cos(r)*k))),2*e-(e+a)])}function le(t,e){t=t,e=e,r=52.35987755982988,t-=.0065,e-=.006,o=Math.sqrt(t*t+e*e)-2e-5*Math.sin(e*r),e=Math.atan2(e,t)-3e-6*Math.cos(t*r);var r,o,t=[o*Math.cos(e),o*Math.sin(e)];return se(t[0],t[1])}function pe(t,e){return{type:"geojson",data:function(t,e){if(e===void 0)e=true;var r=e?he(t):t;return de(fe(r))}(t,e=void 0===e?!0:e),cluster:!1}}var fe=function(t){return null==t?void 0:t.map(function(t,e){var r=t.level||t.vul_level||t.risk_category||t.ransom_type||t.malicious_name||t.gps_type||"机构",o=ie(t.realGps),n=ie(t.gps),a="机构"===r?le(n[0],n[1]):l([],n,!0),o={realLngGps:(o||a)[0],realLatGps:(o||a)[1]};return{type:"Feature",properties:c({data:t.data,count:t.count||0,lng:a[0],lat:a[1],queryLng:n[0],queryLat:n[1],level:r,point_type:t.point_type,keyStr:r},o),geometry:{type:"Point",coordinates:l([],a,!0)}}})};function ye(t,e,r){for(var o=String(t),n=0;n<e;n++)o="".concat(o).concat(r||0===r?r:Math.floor(9*Math.random()+1));return o}function be(t,e){var t=String(t),r=t.split(".")[0],o=t.split(".")[1];return o?(o=ye(o,6-o.length,0),o=ye(o,e),parseFloat("".concat(r,".").concat(o))):Number(t)}var he=function(t){return t.map(function(t){var e=t.gps,r=e[0],e=e[1],r=be(r,3),e=be(e,3);return c(c({},t),{realGps:t.gps,gps:[r,e]})})},de=function(t){return{type:"FeatureCollection",features:t=void 0===t?[]:t}},ve=["应用业务层","#00CFFF","中间支撑层","#28A4FF","服务协议层","#00CE5A","操作系统层","#F6A109","硬件设备层","#F6A109","终端","#F1AC00","apt","#FFA35C","超危","#E00F20","高危","#F84D04","中危","#F19900","低危","#E7CE00","资产异常","#E44806","配置错误","#FFD600","确定受影响资产","#E44806","疑似受影响资产","#FFD600","违法网址","#E44806","欺诈网址","#FFD600","高","#F84D04","中","#F19900","低","#E7CE00","低风险机构","#C9AF47","中风险机构","#F84404","高风险机构","#D10314","安全","#27FFA9","风险","#FFA35C","可疑","#FFD600"],je=["应用业务层","#0060E9","中间支撑层","#006AB0","服务协议层","#00856E","操作系统层","#818100","硬件设备层","#A77D00","终端","#A77D00","机构","#A97001","超危","#931721","高危","#F84D04","中危","#F19900","低危","#E7CE00","资产异常","#F84D04","配置错误","#E7CE00","确定受影响资产","#F84D04","疑似受影响资产","#E7CE00","违法网址","#F84D04","欺诈网址","#E7CE00","高","#E64500","中","#A77D00","低","#818100"],_e=["应用业务层","#14E6FF","中间支撑层","#28A4FF","服务协议层","#00CE5A","操作系统层","#F6A109","硬件设备层","#F6A109","终端","#F6A109","机构","#FFD600","超危","#E00F20","高危","#E64500","中危","#A77D00","低危","#818100","资产异常","#E64500","配置错误","#818100","确定受影响资产","#E64500","疑似受影响资产","#818100","违法网址","#E64500","欺诈网址","#818100","高","#F84D04","中","#F19900","低","#E7CE00"];function ge(t,e){this.map={},this.options={},this.map=t}ge.prototype.addCommonLayer=function(t,e,r){var r=r||this.options,o=r.mapColorList,n=r.circleBlur,a=r.circleColor,c=r.circleOpacity,i=r.circleRadius,u=r.dotSize,s=r.circleStrokeWidth,r=r.circleStrokeColor;this.map.addSource(e,pe(t)),this.map.addLayer({id:e,type:"circle",source:e,paint:{"circle-blur":null!=(t=n)?t:0,"circle-color":null!=(e=a)?e:l(l(["match",["get","keyStr"]],o||ve,!0),["rgba(237,97,147,0.9)"],!1),"circle-color-transition":{duration:2},"circle-opacity":c,"circle-radius":null!=(n=i)?n:l(["interpolate",["exponential",.1],["zoom"]],u||[14.1,3,32,9],!0),"circle-stroke-width":null!=(t=s)?t:0,"circle-stroke-color":null!=(a=r)?a:"#ffffff"}})},ge.prototype.addGlowwormLayer=function(t,e,r){var o=e.glowwormLayerName,n=e.glowwormInnerColorList,e=e.glowwormOutColorList;this.addCommonLayer(t,o||"glowworm",{circleOpacity:.4,circleBlur:3,circleColor:l(l(["match",["get","keyStr"]],e||je,!0),["rgba(237,97,147,0.9)"],!1),circleRadius:["interpolate",["exponential",.1],["zoom"],14.1,14,32,22]}),this.addCommonLayer(t,"glowworm2",{circleOpacity:.4,circleBlur:3,circleColor:l(l(["match",["get","keyStr"]],n||_e,!0),["rgba(237,97,147,0.9)"],!1),circleRadius:["interpolate",["exponential",.1],["zoom"],14.1,9,32,12]}),this.addCommonLayer(t,"glowworm3",{circleOpacity:1,circleBlur:0,circleColor:"#ffffff",circleRadius:["interpolate",["exponential",.1],["zoom"],14.1,1.3,32,2.2]})},t.GlowwormMap=ge});
