parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";function e(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),t.push.apply(t,n)}return t}function r(r){for(var n=1;n<arguments.length;n++){var c=null!=arguments[n]?arguments[n]:{};n%2?e(Object(c),!0).forEach(function(e){t(r,e,c[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(c)):e(Object(c)).forEach(function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(c,e))})}return r}function t(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}document.addEventListener("DOMContentLoaded",function(){var e=document.querySelectorAll('[name="volume"]'),t=document.querySelectorAll(".comparison__fields  input"),n=window.innerWidth;window.addEventListener("resize",function(){n=window.innerWidth,u(o,c)});var c={storage:0,transfer:0},o={backblaze:{minPayment:7,storagePrice:.005,transferPrice:.01,color:"#e41e2a"},bunny:{maxPayment:10,storagePrice:{hdd:.01,ssd:.02},transferPrice:.01,color:"#faae13"},scaleway:{storagePrice:{multi:.06,single:.03,storageFree:75},transferPrice:{price:.02,transferFree:75},color:"#b75de8"},vultr:{minPayment:5,storagePrice:.01,transferPrice:.01,color:"#2e6be6"}};function a(e){e.id.includes("transfer")?c.transfer=+e.value:c.storage=+e.value}function i(){var e=[];return t.forEach(function(r){return r.checked?e.push(r.value):0}),e}function s(e,t,n){var c=n,o=i(),a=c.minPayment?c.minPayment:0,s=c.maxPayment?c.maxPayment:0,u=e.transfer,f=e.storage,l=0;if("Object"!==c.transferPrice.constructor.name&&"Object"!==c.storagePrice.constructor.name){l=Math.floor(c.transferPrice*u)+Math.floor(c.storagePrice*f)}else{var m=r({},c.storagePrice),P=r({},c.transferPrice),d=m.storageFree||0,b=P.transferFree||0;l=(f-d)*m[function(e,r){var t=new Set(r);return e.filter(function(e){return t.has(e)})}(Object.keys(m),o)]+(u-b)*(P.price||c.transferPrice)}return l=0!==a&&a>l?a:0!==s&&s<l?s:l<0?0:l,l=Math.trunc(100*l)/100}function u(e,r){var t,n,c={};for(var o in e){var a=s(r,0,e[o]);c[o]=a,t=void 0===t||t>a?a:t,n=void 0===n||n<a?a:n}c.minimalPrice=t,c.maximalPrice=n,f(c)}function f(e){var r=n<768?"width":"height";for(var t in e)if("minimalPrice"!==t&&"maximalPrice"!==t){var c=document.querySelector(".progress-bar--".concat(t," .progress-bar__inner")),a=document.querySelector(".progress-bar--".concat(t," span")),i=e[t]/(e.maximalPrice+15)*100+1;e[t]<=e.minimalPrice?c.style.cssText="".concat(r,": ").concat(i,"%; background-color: ").concat(o[t].color):c.style.cssText="".concat(r,": ").concat(i,"%; background-color: ''"),a.textContent=e[t]+"$"}}e.forEach(function(e){a(e),e.addEventListener("input",function(){a(e),u(o,c)})}),t.forEach(function(e){i(),e.addEventListener("click",function(){i(),u(o,c)})}),u(o,c)});
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.55c4610b.js.map