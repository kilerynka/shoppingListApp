!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=9)}({9:function(e,t){var r,n,o=document.querySelector(".input-js"),i=document.querySelector(".addFruit-js"),l=document.querySelector(".listOfFruits-js"),a=document.querySelector(".addToList-js"),c=document.querySelector(".delete-js"),u="chemistry",s=["Kapsułki do prania","Płyn do ciała","Płyn do naczyń","Szmatki do mebli","Dedozorant"],f=[],d=0;i.addEventListener("click",(function(e){if(o.value){s.push(o.value),s.sort();var t=s.find((function(e){return e==o.value}));localStorage.setItem(u,JSON.stringify(s));var r=localStorage.getItem(u);s=JSON.parse(r),l.innerHTML+='<li class="listOfFruits-fruit  '.concat("number"+d,' fontStyle fruit-js">').concat(t,"</li>"),o.value="",d++}})),l.addEventListener("click",(function(e){n=e.target.innerHTML,r=e.target.classList[1]})),c.addEventListener("click",(function(){!function(e,t,r,n){document.querySelector("".concat("."+e)).remove();var o=s.indexOf(t);r.splice(o,1),localStorage.setItem(n,JSON.stringify(r))}(r,n,s,u)})),a.addEventListener("click",(function(){if(localStorage.getItem("shopList")){var e=localStorage.getItem("shopList");(f=JSON.parse(e)).push(n),localStorage.setItem("shopList",JSON.stringify(f))}else f.push(n),localStorage.setItem("shopList",JSON.stringify(f))}));!function(){if("[]"==localStorage.fruits)localStorage.setItem(u,JSON.stringify(s)),console.log(!0);else if(localStorage.getItem(u)){var e=localStorage.getItem(u);s=JSON.parse(e)}else localStorage.setItem(u,JSON.stringify(s))}(),s.forEach((function(e){l.innerHTML+='<li class="listOfFruits-fruit '.concat("number"+d,' fontStyle fruit-js">').concat(e,"</li>"),d++}))}});