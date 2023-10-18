"use strict";var __assign=function(){return(__assign=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};function __spreadArray(e,t,r){if(r||2===arguments.length)for(var a,o=0,n=t.length;o<n;o++)!a&&o in t||((a=a||Array.prototype.slice.call(t,0,o))[o]=t[o]);return e.concat(a||Array.prototype.slice.call(t))}var freeGlobal="object"==typeof global&&global&&global.Object===Object&&global,freeGlobal$1=freeGlobal,freeSelf="object"==typeof self&&self&&self.Object===Object&&self,root=freeGlobal$1||freeSelf||Function("return this")(),root$1=root,Symbol=root$1.Symbol,Symbol$1=Symbol,objectProto$c=Object.prototype,hasOwnProperty$9=objectProto$c.hasOwnProperty,nativeObjectToString$1=objectProto$c.toString,symToStringTag$1=Symbol$1?Symbol$1.toStringTag:void 0;function getRawTag(e){var t=hasOwnProperty$9.call(e,symToStringTag$1),r=e[symToStringTag$1];try{var a=!(e[symToStringTag$1]=void 0)}catch(e){}var o=nativeObjectToString$1.call(e);return a&&(t?e[symToStringTag$1]=r:delete e[symToStringTag$1]),o}var objectProto$b=Object.prototype,nativeObjectToString=objectProto$b.toString;function objectToString(e){return nativeObjectToString.call(e)}var nullTag="[object Null]",undefinedTag="[object Undefined]",symToStringTag=Symbol$1?Symbol$1.toStringTag:void 0;function baseGetTag(e){return null==e?void 0===e?undefinedTag:nullTag:(symToStringTag&&symToStringTag in Object(e)?getRawTag:objectToString)(e)}function isObjectLike(e){return null!=e&&"object"==typeof e}var isArray=Array.isArray,isArray$1=isArray;function isObject(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}var asyncTag="[object AsyncFunction]",funcTag$2="[object Function]",genTag$1="[object GeneratorFunction]",proxyTag="[object Proxy]";function isFunction(e){return!!isObject(e)&&((e=baseGetTag(e))==funcTag$2||e==genTag$1||e==asyncTag||e==proxyTag)}var coreJsData=root$1["__core-js_shared__"],coreJsData$1=coreJsData,maskSrcKey=function(){var e=/[^.]+$/.exec(coreJsData$1&&coreJsData$1.keys&&coreJsData$1.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();function isMasked(e){return!!maskSrcKey&&maskSrcKey in e}var funcProto$1=Function.prototype,funcToString$1=funcProto$1.toString;function toSource(e){if(null!=e){try{return funcToString$1.call(e)}catch(e){}try{return e+""}catch(e){}}return""}var reRegExpChar=/[\\^$.*+?()[\]{}|]/g,reIsHostCtor=/^\[object .+?Constructor\]$/,funcProto=Function.prototype,objectProto$a=Object.prototype,funcToString=funcProto.toString,hasOwnProperty$8=objectProto$a.hasOwnProperty,reIsNative=RegExp("^"+funcToString.call(hasOwnProperty$8).replace(reRegExpChar,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function baseIsNative(e){return!(!isObject(e)||isMasked(e))&&(isFunction(e)?reIsNative:reIsHostCtor).test(toSource(e))}function getValue(e,t){return null==e?void 0:e[t]}function getNative(e,t){e=getValue(e,t);return baseIsNative(e)?e:void 0}var WeakMap=getNative(root$1,"WeakMap"),WeakMap$1=WeakMap,objectCreate=Object.create,baseCreate=function(){function t(){}return function(e){if(!isObject(e))return{};if(objectCreate)return objectCreate(e);t.prototype=e;e=new t;return t.prototype=void 0,e}}(),baseCreate$1=baseCreate;function copyArray(e,t){var r=-1,a=e.length;for(t=t||Array(a);++r<a;)t[r]=e[r];return t}var defineProperty=function(){try{var e=getNative(Object,"defineProperty");return e({},"",{}),e}catch(e){}}(),defineProperty$1=defineProperty;function arrayEach(e,t){for(var r=-1,a=null==e?0:e.length;++r<a&&!1!==t(e[r],r,e););return e}var MAX_SAFE_INTEGER$1=9007199254740991,reIsUint=/^(?:0|[1-9]\d*)$/;function isIndex(e,t){var r=typeof e;return!!(t=null==t?MAX_SAFE_INTEGER$1:t)&&("number"==r||"symbol"!=r&&reIsUint.test(e))&&-1<e&&e%1==0&&e<t}function baseAssignValue(e,t,r){"__proto__"==t&&defineProperty$1?defineProperty$1(e,t,{configurable:!0,enumerable:!0,value:r,writable:!0}):e[t]=r}function eq(e,t){return e===t||e!=e&&t!=t}var objectProto$9=Object.prototype,hasOwnProperty$7=objectProto$9.hasOwnProperty;function assignValue(e,t,r){var a=e[t];hasOwnProperty$7.call(e,t)&&eq(a,r)&&(void 0!==r||t in e)||baseAssignValue(e,t,r)}function copyObject(e,t,r,a){for(var o=!r,n=(r=r||{},-1),s=t.length;++n<s;){var i=t[n],c=a?a(r[i],e[i],i,r,e):void 0;(o?baseAssignValue:assignValue)(r,i,c=void 0===c?e[i]:c)}return r}var MAX_SAFE_INTEGER=9007199254740991;function isLength(e){return"number"==typeof e&&-1<e&&e%1==0&&e<=MAX_SAFE_INTEGER}function isArrayLike(e){return null!=e&&isLength(e.length)&&!isFunction(e)}var objectProto$8=Object.prototype;function isPrototype(e){var t=e&&e.constructor;return e===("function"==typeof t&&t.prototype||objectProto$8)}function baseTimes(e,t){for(var r=-1,a=Array(e);++r<e;)a[r]=t(r);return a}var argsTag$2="[object Arguments]";function baseIsArguments(e){return isObjectLike(e)&&baseGetTag(e)==argsTag$2}var objectProto$7=Object.prototype,hasOwnProperty$6=objectProto$7.hasOwnProperty,propertyIsEnumerable$1=objectProto$7.propertyIsEnumerable,isArguments=baseIsArguments(function(){return arguments}())?baseIsArguments:function(e){return isObjectLike(e)&&hasOwnProperty$6.call(e,"callee")&&!propertyIsEnumerable$1.call(e,"callee")},isArguments$1=isArguments;function stubFalse(){return!1}var freeExports$2="object"==typeof exports&&exports&&!exports.nodeType&&exports,freeModule$2=freeExports$2&&"object"==typeof module&&module&&!module.nodeType&&module,moduleExports$2=freeModule$2&&freeModule$2.exports===freeExports$2,Buffer$1=moduleExports$2?root$1.Buffer:void 0,nativeIsBuffer=Buffer$1?Buffer$1.isBuffer:void 0,isBuffer=nativeIsBuffer||stubFalse,isBuffer$1=isBuffer,argsTag$1="[object Arguments]",arrayTag$1="[object Array]",boolTag$2="[object Boolean]",dateTag$2="[object Date]",errorTag$1="[object Error]",funcTag$1="[object Function]",mapTag$4="[object Map]",numberTag$2="[object Number]",objectTag$2="[object Object]",regexpTag$2="[object RegExp]",setTag$4="[object Set]",stringTag$2="[object String]",weakMapTag$2="[object WeakMap]",arrayBufferTag$2="[object ArrayBuffer]",dataViewTag$3="[object DataView]",float32Tag$2="[object Float32Array]",float64Tag$2="[object Float64Array]",int8Tag$2="[object Int8Array]",int16Tag$2="[object Int16Array]",int32Tag$2="[object Int32Array]",uint8Tag$2="[object Uint8Array]",uint8ClampedTag$2="[object Uint8ClampedArray]",uint16Tag$2="[object Uint16Array]",uint32Tag$2="[object Uint32Array]",typedArrayTags={};function baseIsTypedArray(e){return isObjectLike(e)&&isLength(e.length)&&!!typedArrayTags[baseGetTag(e)]}function baseUnary(t){return function(e){return t(e)}}typedArrayTags[float32Tag$2]=typedArrayTags[float64Tag$2]=typedArrayTags[int8Tag$2]=typedArrayTags[int16Tag$2]=typedArrayTags[int32Tag$2]=typedArrayTags[uint8Tag$2]=typedArrayTags[uint8ClampedTag$2]=typedArrayTags[uint16Tag$2]=typedArrayTags[uint32Tag$2]=!0,typedArrayTags[argsTag$1]=typedArrayTags[arrayTag$1]=typedArrayTags[arrayBufferTag$2]=typedArrayTags[boolTag$2]=typedArrayTags[dataViewTag$3]=typedArrayTags[dateTag$2]=typedArrayTags[errorTag$1]=typedArrayTags[funcTag$1]=typedArrayTags[mapTag$4]=typedArrayTags[numberTag$2]=typedArrayTags[objectTag$2]=typedArrayTags[regexpTag$2]=typedArrayTags[setTag$4]=typedArrayTags[stringTag$2]=typedArrayTags[weakMapTag$2]=!1;var freeExports$1="object"==typeof exports&&exports&&!exports.nodeType&&exports,freeModule$1=freeExports$1&&"object"==typeof module&&module&&!module.nodeType&&module,moduleExports$1=freeModule$1&&freeModule$1.exports===freeExports$1,freeProcess=moduleExports$1&&freeGlobal$1.process,nodeUtil=function(){try{var e=freeModule$1&&freeModule$1.require&&freeModule$1.require("util").types;return e?e:freeProcess&&freeProcess.binding&&freeProcess.binding("util")}catch(e){}}(),nodeUtil$1=nodeUtil,nodeIsTypedArray=nodeUtil$1&&nodeUtil$1.isTypedArray,isTypedArray=nodeIsTypedArray?baseUnary(nodeIsTypedArray):baseIsTypedArray,isTypedArray$1=isTypedArray,objectProto$6=Object.prototype,hasOwnProperty$5=objectProto$6.hasOwnProperty;function arrayLikeKeys(e,t){var r,a=isArray$1(e),o=!a&&isArguments$1(e),n=!a&&!o&&isBuffer$1(e),s=!a&&!o&&!n&&isTypedArray$1(e),i=a||o||n||s,c=i?baseTimes(e.length,String):[],l=c.length;for(r in e)!t&&!hasOwnProperty$5.call(e,r)||i&&("length"==r||n&&("offset"==r||"parent"==r)||s&&("buffer"==r||"byteLength"==r||"byteOffset"==r)||isIndex(r,l))||c.push(r);return c}function overArg(t,r){return function(e){return t(r(e))}}var nativeKeys=overArg(Object.keys,Object),nativeKeys$1=nativeKeys,objectProto$5=Object.prototype,hasOwnProperty$4=objectProto$5.hasOwnProperty;function baseKeys(e){if(!isPrototype(e))return nativeKeys$1(e);var t,r=[];for(t in Object(e))hasOwnProperty$4.call(e,t)&&"constructor"!=t&&r.push(t);return r}function keys(e){return(isArrayLike(e)?arrayLikeKeys:baseKeys)(e)}function nativeKeysIn(e){var t=[];if(null!=e)for(var r in Object(e))t.push(r);return t}var objectProto$4=Object.prototype,hasOwnProperty$3=objectProto$4.hasOwnProperty;function baseKeysIn(e){if(!isObject(e))return nativeKeysIn(e);var t,r=isPrototype(e),a=[];for(t in e)("constructor"!=t||!r&&hasOwnProperty$3.call(e,t))&&a.push(t);return a}function keysIn(e){return isArrayLike(e)?arrayLikeKeys(e,!0):baseKeysIn(e)}var nativeCreate=getNative(Object,"create"),nativeCreate$1=nativeCreate;function hashClear(){this.__data__=nativeCreate$1?nativeCreate$1(null):{},this.size=0}function hashDelete(e){e=this.has(e)&&delete this.__data__[e];return this.size-=e?1:0,e}var HASH_UNDEFINED$1="__lodash_hash_undefined__",objectProto$3=Object.prototype,hasOwnProperty$2=objectProto$3.hasOwnProperty;function hashGet(e){var t,r=this.__data__;return nativeCreate$1?(t=r[e])===HASH_UNDEFINED$1?void 0:t:hasOwnProperty$2.call(r,e)?r[e]:void 0}var objectProto$2=Object.prototype,hasOwnProperty$1=objectProto$2.hasOwnProperty;function hashHas(e){var t=this.__data__;return nativeCreate$1?void 0!==t[e]:hasOwnProperty$1.call(t,e)}var HASH_UNDEFINED="__lodash_hash_undefined__";function hashSet(e,t){var r=this.__data__;return this.size+=this.has(e)?0:1,r[e]=nativeCreate$1&&void 0===t?HASH_UNDEFINED:t,this}function Hash(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var a=e[t];this.set(a[0],a[1])}}function listCacheClear(){this.__data__=[],this.size=0}function assocIndexOf(e,t){for(var r=e.length;r--;)if(eq(e[r][0],t))return r;return-1}Hash.prototype.clear=hashClear,Hash.prototype.delete=hashDelete,Hash.prototype.get=hashGet,Hash.prototype.has=hashHas,Hash.prototype.set=hashSet;var arrayProto=Array.prototype,splice=arrayProto.splice;function listCacheDelete(e){var t=this.__data__,e=assocIndexOf(t,e);return!(e<0||(e==t.length-1?t.pop():splice.call(t,e,1),--this.size,0))}function listCacheGet(e){var t=this.__data__,e=assocIndexOf(t,e);return e<0?void 0:t[e][1]}function listCacheHas(e){return-1<assocIndexOf(this.__data__,e)}function listCacheSet(e,t){var r=this.__data__,a=assocIndexOf(r,e);return a<0?(++this.size,r.push([e,t])):r[a][1]=t,this}function ListCache(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var a=e[t];this.set(a[0],a[1])}}ListCache.prototype.clear=listCacheClear,ListCache.prototype.delete=listCacheDelete,ListCache.prototype.get=listCacheGet,ListCache.prototype.has=listCacheHas,ListCache.prototype.set=listCacheSet;var Map=getNative(root$1,"Map"),Map$1=Map;function mapCacheClear(){this.size=0,this.__data__={hash:new Hash,map:new(Map$1||ListCache),string:new Hash}}function isKeyable(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e}function getMapData(e,t){e=e.__data__;return isKeyable(t)?e["string"==typeof t?"string":"hash"]:e.map}function mapCacheDelete(e){e=getMapData(this,e).delete(e);return this.size-=e?1:0,e}function mapCacheGet(e){return getMapData(this,e).get(e)}function mapCacheHas(e){return getMapData(this,e).has(e)}function mapCacheSet(e,t){var r=getMapData(this,e),a=r.size;return r.set(e,t),this.size+=r.size==a?0:1,this}function MapCache(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var a=e[t];this.set(a[0],a[1])}}function arrayPush(e,t){for(var r=-1,a=t.length,o=e.length;++r<a;)e[o+r]=t[r];return e}MapCache.prototype.clear=mapCacheClear,MapCache.prototype.delete=mapCacheDelete,MapCache.prototype.get=mapCacheGet,MapCache.prototype.has=mapCacheHas,MapCache.prototype.set=mapCacheSet;var getPrototype=overArg(Object.getPrototypeOf,Object),getPrototype$1=getPrototype;function stackClear(){this.__data__=new ListCache,this.size=0}function stackDelete(e){var t=this.__data__,e=t.delete(e);return this.size=t.size,e}function stackGet(e){return this.__data__.get(e)}function stackHas(e){return this.__data__.has(e)}var LARGE_ARRAY_SIZE=200;function stackSet(e,t){var r=this.__data__;if(r instanceof ListCache){var a=r.__data__;if(!Map$1||a.length<LARGE_ARRAY_SIZE-1)return a.push([e,t]),this.size=++r.size,this;r=this.__data__=new MapCache(a)}return r.set(e,t),this.size=r.size,this}function Stack(e){e=this.__data__=new ListCache(e);this.size=e.size}function baseAssign(e,t){return e&&copyObject(t,keys(t),e)}function baseAssignIn(e,t){return e&&copyObject(t,keysIn(t),e)}Stack.prototype.clear=stackClear,Stack.prototype.delete=stackDelete,Stack.prototype.get=stackGet,Stack.prototype.has=stackHas,Stack.prototype.set=stackSet;var freeExports="object"==typeof exports&&exports&&!exports.nodeType&&exports,freeModule=freeExports&&"object"==typeof module&&module&&!module.nodeType&&module,moduleExports=freeModule&&freeModule.exports===freeExports,Buffer=moduleExports?root$1.Buffer:void 0,allocUnsafe=Buffer?Buffer.allocUnsafe:void 0;function cloneBuffer(e,t){return t?e.slice():(t=e.length,t=allocUnsafe?allocUnsafe(t):new e.constructor(t),e.copy(t),t)}function arrayFilter(e,t){for(var r=-1,a=null==e?0:e.length,o=0,n=[];++r<a;){var s=e[r];t(s,r,e)&&(n[o++]=s)}return n}function stubArray(){return[]}var objectProto$1=Object.prototype,propertyIsEnumerable=objectProto$1.propertyIsEnumerable,nativeGetSymbols$1=Object.getOwnPropertySymbols,getSymbols=nativeGetSymbols$1?function(t){return null==t?[]:(t=Object(t),arrayFilter(nativeGetSymbols$1(t),function(e){return propertyIsEnumerable.call(t,e)}))}:stubArray,getSymbols$1=getSymbols;function copySymbols(e,t){return copyObject(e,getSymbols$1(e),t)}var nativeGetSymbols=Object.getOwnPropertySymbols,getSymbolsIn=nativeGetSymbols?function(e){for(var t=[];e;)arrayPush(t,getSymbols$1(e)),e=getPrototype$1(e);return t}:stubArray,getSymbolsIn$1=getSymbolsIn;function copySymbolsIn(e,t){return copyObject(e,getSymbolsIn$1(e),t)}function baseGetAllKeys(e,t,r){t=t(e);return isArray$1(e)?t:arrayPush(t,r(e))}function getAllKeys(e){return baseGetAllKeys(e,keys,getSymbols$1)}function getAllKeysIn(e){return baseGetAllKeys(e,keysIn,getSymbolsIn$1)}var DataView=getNative(root$1,"DataView"),DataView$1=DataView,Promise$1=getNative(root$1,"Promise"),Promise$2=Promise$1,Set=getNative(root$1,"Set"),Set$1=Set,mapTag$3="[object Map]",objectTag$1="[object Object]",promiseTag="[object Promise]",setTag$3="[object Set]",weakMapTag$1="[object WeakMap]",dataViewTag$2="[object DataView]",dataViewCtorString=toSource(DataView$1),mapCtorString=toSource(Map$1),promiseCtorString=toSource(Promise$2),setCtorString=toSource(Set$1),weakMapCtorString=toSource(WeakMap$1),getTag=baseGetTag,getTag$1=getTag=DataView$1&&getTag(new DataView$1(new ArrayBuffer(1)))!=dataViewTag$2||Map$1&&getTag(new Map$1)!=mapTag$3||Promise$2&&getTag(Promise$2.resolve())!=promiseTag||Set$1&&getTag(new Set$1)!=setTag$3||WeakMap$1&&getTag(new WeakMap$1)!=weakMapTag$1?function(e){var t=baseGetTag(e),e=t==objectTag$1?e.constructor:void 0,e=e?toSource(e):"";if(e)switch(e){case dataViewCtorString:return dataViewTag$2;case mapCtorString:return mapTag$3;case promiseCtorString:return promiseTag;case setCtorString:return setTag$3;case weakMapCtorString:return weakMapTag$1}return t}:getTag,objectProto=Object.prototype,hasOwnProperty=objectProto.hasOwnProperty;function initCloneArray(e){var t=e.length,r=new e.constructor(t);return t&&"string"==typeof e[0]&&hasOwnProperty.call(e,"index")&&(r.index=e.index,r.input=e.input),r}var Uint8Array=root$1.Uint8Array,Uint8Array$1=Uint8Array;function cloneArrayBuffer(e){var t=new e.constructor(e.byteLength);return new Uint8Array$1(t).set(new Uint8Array$1(e)),t}function cloneDataView(e,t){t=t?cloneArrayBuffer(e.buffer):e.buffer;return new e.constructor(t,e.byteOffset,e.byteLength)}var reFlags=/\w*$/;function cloneRegExp(e){var t=new e.constructor(e.source,reFlags.exec(e));return t.lastIndex=e.lastIndex,t}var symbolProto=Symbol$1?Symbol$1.prototype:void 0,symbolValueOf=symbolProto?symbolProto.valueOf:void 0;function cloneSymbol(e){return symbolValueOf?Object(symbolValueOf.call(e)):{}}function cloneTypedArray(e,t){t=t?cloneArrayBuffer(e.buffer):e.buffer;return new e.constructor(t,e.byteOffset,e.length)}var boolTag$1="[object Boolean]",dateTag$1="[object Date]",mapTag$2="[object Map]",numberTag$1="[object Number]",regexpTag$1="[object RegExp]",setTag$2="[object Set]",stringTag$1="[object String]",symbolTag$1="[object Symbol]",arrayBufferTag$1="[object ArrayBuffer]",dataViewTag$1="[object DataView]",float32Tag$1="[object Float32Array]",float64Tag$1="[object Float64Array]",int8Tag$1="[object Int8Array]",int16Tag$1="[object Int16Array]",int32Tag$1="[object Int32Array]",uint8Tag$1="[object Uint8Array]",uint8ClampedTag$1="[object Uint8ClampedArray]",uint16Tag$1="[object Uint16Array]",uint32Tag$1="[object Uint32Array]";function initCloneByTag(e,t,r){var a=e.constructor;switch(t){case arrayBufferTag$1:return cloneArrayBuffer(e);case boolTag$1:case dateTag$1:return new a(+e);case dataViewTag$1:return cloneDataView(e,r);case float32Tag$1:case float64Tag$1:case int8Tag$1:case int16Tag$1:case int32Tag$1:case uint8Tag$1:case uint8ClampedTag$1:case uint16Tag$1:case uint32Tag$1:return cloneTypedArray(e,r);case mapTag$2:return new a;case numberTag$1:case stringTag$1:return new a(e);case regexpTag$1:return cloneRegExp(e);case setTag$2:return new a;case symbolTag$1:return cloneSymbol(e)}}function initCloneObject(e){return"function"!=typeof e.constructor||isPrototype(e)?{}:baseCreate$1(getPrototype$1(e))}var mapTag$1="[object Map]";function baseIsMap(e){return isObjectLike(e)&&getTag$1(e)==mapTag$1}var nodeIsMap=nodeUtil$1&&nodeUtil$1.isMap,isMap=nodeIsMap?baseUnary(nodeIsMap):baseIsMap,isMap$1=isMap,setTag$1="[object Set]";function baseIsSet(e){return isObjectLike(e)&&getTag$1(e)==setTag$1}var nodeIsSet=nodeUtil$1&&nodeUtil$1.isSet,isSet=nodeIsSet?baseUnary(nodeIsSet):baseIsSet,isSet$1=isSet,CLONE_DEEP_FLAG$1=1,CLONE_FLAT_FLAG=2,CLONE_SYMBOLS_FLAG$1=4,argsTag="[object Arguments]",arrayTag="[object Array]",boolTag="[object Boolean]",dateTag="[object Date]",errorTag="[object Error]",funcTag="[object Function]",genTag="[object GeneratorFunction]",mapTag="[object Map]",numberTag="[object Number]",objectTag="[object Object]",regexpTag="[object RegExp]",setTag="[object Set]",stringTag="[object String]",symbolTag="[object Symbol]",weakMapTag="[object WeakMap]",arrayBufferTag="[object ArrayBuffer]",dataViewTag="[object DataView]",float32Tag="[object Float32Array]",float64Tag="[object Float64Array]",int8Tag="[object Int8Array]",int16Tag="[object Int16Array]",int32Tag="[object Int32Array]",uint8Tag="[object Uint8Array]",uint8ClampedTag="[object Uint8ClampedArray]",uint16Tag="[object Uint16Array]",uint32Tag="[object Uint32Array]",cloneableTags={};function baseClone(r,a,o,e,t,n){var s,i=a&CLONE_DEEP_FLAG$1,c=a&CLONE_FLAT_FLAG,l=a&CLONE_SYMBOLS_FLAG$1;if(void 0===(s=o?t?o(r,e,t,n):o(r):s)){if(!isObject(r))return r;e=isArray$1(r);if(e){if(s=initCloneArray(r),!i)return copyArray(r,s)}else{var u=getTag$1(r),g=u==funcTag||u==genTag;if(isBuffer$1(r))return cloneBuffer(r,i);if(u==objectTag||u==argsTag||g&&!t){if(s=c||g?{}:initCloneObject(r),!i)return c?copySymbolsIn(r,baseAssignIn(s,r)):copySymbols(r,baseAssign(s,r))}else{if(!cloneableTags[u])return t?r:{};s=initCloneByTag(r,u,i)}}g=(n=n||new Stack).get(r);if(g)return g;n.set(r,s),isSet$1(r)?r.forEach(function(e){s.add(baseClone(e,a,o,e,r,n))}):isMap$1(r)&&r.forEach(function(e,t){s.set(t,baseClone(e,a,o,t,r,n))});var p=e?void 0:(l?c?getAllKeysIn:getAllKeys:c?keysIn:keys)(r);arrayEach(p||r,function(e,t){p&&(e=r[t=e]),assignValue(s,t,baseClone(e,a,o,t,r,n))})}return s}cloneableTags[argsTag]=cloneableTags[arrayTag]=cloneableTags[arrayBufferTag]=cloneableTags[dataViewTag]=cloneableTags[boolTag]=cloneableTags[dateTag]=cloneableTags[float32Tag]=cloneableTags[float64Tag]=cloneableTags[int8Tag]=cloneableTags[int16Tag]=cloneableTags[int32Tag]=cloneableTags[mapTag]=cloneableTags[numberTag]=cloneableTags[objectTag]=cloneableTags[regexpTag]=cloneableTags[setTag]=cloneableTags[stringTag]=cloneableTags[symbolTag]=cloneableTags[uint8Tag]=cloneableTags[uint8ClampedTag]=cloneableTags[uint16Tag]=cloneableTags[uint32Tag]=!0,cloneableTags[errorTag]=cloneableTags[funcTag]=cloneableTags[weakMapTag]=!1;var CLONE_DEEP_FLAG=1,CLONE_SYMBOLS_FLAG=4;function cloneDeep(e){return baseClone(e,CLONE_DEEP_FLAG|CLONE_SYMBOLS_FLAG)}var PI=3.141592653589793,a=6378245,ee=.006693421622965943;function transformlat(e,t){var r=2*e-100+3*t+.2*t*t+.1*e*t+.2*Math.sqrt(Math.abs(e));return(r+=2*(20*Math.sin(6*e*PI)+20*Math.sin(2*e*PI))/3)+2*(20*Math.sin(t*PI)+40*Math.sin(t/3*PI))/3+2*(160*Math.sin(t/12*PI)+320*Math.sin(t*PI/30))/3}function transformlng(e,t){t=300+e+2*t+.1*e*e+.1*e*t+.1*Math.sqrt(Math.abs(e));return(t+=2*(20*Math.sin(6*e*PI)+20*Math.sin(2*e*PI))/3)+2*(20*Math.sin(e*PI)+40*Math.sin(e/3*PI))/3+2*(150*Math.sin(e/12*PI)+300*Math.sin(e/30*PI))/3}function out_of_china(e,t){return e<72.004||137.8347<e||t<.8293||55.8271<t||!1}function bd09togcj02(e,t){var r=52.35987755982988,e=e-.0065,t=t-.006,a=Math.sqrt(e*e+t*t)-2e-5*Math.sin(t*r),t=Math.atan2(t,e)-3e-6*Math.cos(e*r);return[a*Math.cos(t),a*Math.sin(t)]}function gcj02towgs84(e,t){var r,o,n,s,i;return out_of_china(e,t)?[e,t]:(s=transformlat(e-105,t-35),i=transformlng(e-105,t-35),r=t/180*PI,o=Math.sin(r),o=1-ee*o*o,n=Math.sqrt(o),s=180*s/(a*(1-ee)/(o*n)*PI),[2*e-(e+(i=180*i/(a/n*Math.cos(r)*PI))),2*t-(t+s)])}function bd09towgs84(e,t){e=bd09togcj02(e,t);return gcj02towgs84(e[0],e[1])}var getSourceData=function(e,t){return{type:"geojson",data:getStandardMapData(e,t=void 0===t?!0:t),cluster:!1}},getStandardMapData=function(e,t){t=(t=void 0===t?!0:t)?transformRandomNumToGps(e):e;return getEmptyMapData(getTransformList(t))},getTransformList=function(e){return null==e?void 0:e.map(function(e,t){var r=e.level||e.vul_level||e.risk_category||e.ransom_type||e.malicious_name||e.gps_type||"机构",a=cloneDeep(e.realGps),o=cloneDeep(e.gps),n="机构"===r?bd09towgs84(o[0],o[1]):__spreadArray([],o,!0),a={realLngGps:(a||n)[0],realLatGps:(a||n)[1]};return{type:"Feature",properties:__assign({data:e.data,count:e.count||0,lng:n[0],lat:n[1],queryLng:o[0],queryLat:o[1],level:r,point_type:e.point_type,keyStr:r},a),geometry:{type:"Point",coordinates:__spreadArray([],n,!0)}}})};function getRandom(){return Math.floor(9*Math.random()+1)}function addTargetNumToGps(e,t,r){for(var a=String(e),o=0;o<t;o++)a="".concat(a).concat(r||0===r?r:getRandom());return a}function addRandomNumToGps(e,t){var e=String(e),r=e.split(".")[0],a=e.split(".")[1];return a?(a=addTargetNumToGps(a,6-a.length,0),a=addTargetNumToGps(a,t),parseFloat("".concat(r,".").concat(a))):Number(e)}var transformRandomNumToGps=function(e){return e.map(function(e){var t=e.gps,r=t[0],t=t[1],r=addRandomNumToGps(r,3),t=addRandomNumToGps(t,3);return __assign(__assign({},e),{realGps:e.gps,gps:[r,t]})})},getEmptyMapData=function(e){return{type:"FeatureCollection",features:e=void 0===e?[]:e}},GLOWWORM1="glowworm",GLOWWORM2="glowworm2",GLOWWORM3="glowworm3",defaultMapColorList=["blue","#00CFFF","lightBlue","#28A4FF","服务协议层","#00CE5A","操作系统层","#F6A109","硬件设备层","#F6A109","终端","#F1AC00","apt","#FFA35C","超危","#E00F20","高危","#F84D04","中危","#F19900","低危","#E7CE00","资产异常","#E44806","配置错误","#FFD600","确定受影响资产","#E44806","疑似受影响资产","#FFD600","违法网址","#E44806","欺诈网址","#FFD600","高","#F84D04","中","#F19900","低","#E7CE00","低风险机构","#C9AF47","中风险机构","#F84404","高风险机构","#D10314","安全","#27FFA9","风险","#FFA35C","可疑","#FFD600"],defaultOutGlowwormColorList=["blue","#0060E9","lightBlue","#006AB0","green","#00856E","orange","#A77D00","yellow","#A97001","deepRed","#931721","red","#F84D04"],defaultInnerGlowwormColorList=["blue","#14E6FF","lightBlue","#28A4FF","green","#00CE5A","orange","#F6A109","yellow","#FFD600","deepRed","#E00F20","red","#E64500"],GlowwormMap=function(){function e(e,t){this.map={},this.options={},this.map=e}return e.prototype.addCommonLayer=function(e,t,r){var r=r||this.options,a=r.mapColorList,o=r.circleBlur,n=r.circleColor,s=r.circleOpacity,i=r.circleRadius,c=r.dotSize,l=r.circleStrokeWidth,r=r.circleStrokeColor;this.map.addSource(t,getSourceData(e)),this.map.addLayer({id:t,type:"circle",source:t,paint:{"circle-blur":null!=(e=o)?e:0,"circle-color":null!=(t=n)?t:__spreadArray(__spreadArray(["match",["get","keyStr"]],a||defaultMapColorList,!0),["rgba(237,97,147,0.9)"],!1),"circle-color-transition":{duration:2},"circle-opacity":s,"circle-radius":null!=(o=i)?o:__spreadArray(["interpolate",["exponential",.1],["zoom"]],c||[14.1,3,32,9],!0),"circle-stroke-width":null!=(e=l)?e:0,"circle-stroke-color":null!=(n=r)?n:"#ffffff"}})},e.prototype.addGlowwormLayer=function(e,t,r){var a=t.glowwormLayerName,o=t.glowwormInnerColorList,t=t.glowwormOutColorList;this.addCommonLayer(e,a||GLOWWORM1,{circleOpacity:.4,circleBlur:3,circleColor:__spreadArray(__spreadArray(["match",["get","keyStr"]],t||defaultOutGlowwormColorList,!0),["rgba(237,97,147,0.9)"],!1),circleRadius:["interpolate",["exponential",.1],["zoom"],14.1,14,32,22]}),this.addCommonLayer(e,GLOWWORM2,{circleOpacity:.4,circleBlur:3,circleColor:__spreadArray(__spreadArray(["match",["get","keyStr"]],o||defaultInnerGlowwormColorList,!0),["rgba(237,97,147,0.9)"],!1),circleRadius:["interpolate",["exponential",.1],["zoom"],14.1,9,32,12]}),this.addCommonLayer(e,GLOWWORM3,{circleOpacity:1,circleBlur:0,circleColor:"#ffffff",circleRadius:["interpolate",["exponential",.1],["zoom"],14.1,1.3,32,2.2]})},e.prototype.addSimpleCityLayer=function(){this.map.addLayer({id:"simple-cities",type:"symbol",source:"simpleCity",minzoom:5,maxzoom:12,layout:{"text-field":"{title}","text-font":["DIN Pro Medium","Arial Unicode MS Regular"],"text-size":["interpolate",["cubic-bezier",.2,0,.9,1],["zoom"],2,["step",["get","symbolrank"],3,3,3],6,["step",["get","symbolrank"],23.400000000000002,6,20.8,7,18.2],8,["step",["get","symbolrank"],10,9,10,10,18.2],15,["step",["get","symbolrank"],31.200000000000003,9,26,12,20.8,15,18.2]]},paint:{"text-color":"hsl(215, 28%, 71%)","text-halo-color":"hsla(215, 91%, 48%, 0.24)","text-halo-width":1,"icon-opacity":.63,"text-halo-blur":1}})},e}();exports.GlowwormMap=GlowwormMap;
