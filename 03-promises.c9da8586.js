var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in n){var o=n[e];delete n[e];var r={id:e,exports:{}};return t[e]=r,o.call(r.exports,r,r.exports),r.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){n[e]=t},e.parcelRequired7c6=o);var r=o("iQIUW");function l(e,t){return new Promise(((n,o)=>{const r=Math.random()>.3;setTimeout((()=>{r&&n(`✅ Fulfilled promise ${e} in ${t}ms`),o(`❌ Rejected promise ${e} in ${t}ms`)}),t)}))}document.querySelector(".form").addEventListener("submit",(function(e){e.preventDefault();const{delay:t,step:n,amount:o}=e.currentTarget.elements;let i=Number(t.value);const u=Number(n.value),s=Number(o.value);console.log(i),console.log(u);let a=1;for(let e=0;e<s;e+=1)l(a,i).then((e=>r.Notify.success(e))).catch((e=>r.Notify.failure(e))),a+=1,i+=u}));
//# sourceMappingURL=03-promises.c9da8586.js.map