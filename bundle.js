!function(t){var r={};function e(n){if(r[n])return r[n].exports;var i=r[n]={i:n,l:!1,exports:{}};return t[n].call(i.exports,i,i.exports,e),i.l=!0,i.exports}e.m=t,e.c=r,e.d=function(t,r,n){e.o(t,r)||Object.defineProperty(t,r,{enumerable:!0,get:n})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,r){if(1&r&&(t=e(t)),8&r)return t;if(4&r&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(e.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&r&&"string"!=typeof t)for(var i in t)e.d(n,i,function(r){return t[r]}.bind(null,i));return n},e.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(r,"a",r),r},e.o=function(t,r){return Object.prototype.hasOwnProperty.call(t,r)},e.p="",e(e.s=2)}([function(t,r,e){"use strict";function n(t){if(Array.isArray(t)){for(var r=0,e=Array(t.length);r<t.length;r++)e[r]=t[r];return e}return Array.from(t)}Object.defineProperty(r,"__esModule",{value:!0});r.formatTime=function(t){var r=new Date;r.setHours(8,t,0,0);var e=r.getMinutes();return r.getHours()+":"+(e>9?e:"0"+e)},r.collector=function(t){var r=[];return t.forEach(function(e,n){e!==t[n-1]?r.push({price:e,start:n}):r[r.length-1].end=n}),r},r.getMinAndMax=function(t){var r={val:Math.max.apply(Math,n(t))};r.index=t.indexOf(r.val);for(var e=t[0],i=1;i<r.index;i++)e>t[i]&&(e=t[i]);return{min:e,max:r.val}},r.getTargets=function(t,r){return t.filter(function(t){return r(t.price)})},r.getPossibilities=function(t,r,e){var n=[],i=t.filter(function(t){return t.price==e}),o=t.filter(function(t){return t.price==r});return i.forEach(function(t){o.forEach(function(r){var e=t.price-r.price,i=r.end||r.start,o=t.start,u=o-i;o>i&&n.push({profit:e,lowEnd:i,highStart:o,interval:u>0?u:0})})}),n},r.getMaximumProfit=function(t){if(0==t.length)return{lowEnd:0,highStart:0,profit:0};var r=Math.min.apply(Math,n(t.map(function(t){return t.interval}))),e=Math.min.apply(Math,n(t.map(function(t){return t.lowEnd})));return t.filter(function(t){return t.interval==r}).filter(function(t){return t.lowEnd==e})[0]}},function(t,r,e){"use strict";t.exports=[10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9]},function(t,r,e){"use strict";var n=function(t){return t&&t.__esModule?t:{default:t}}(e(1)),i=e(0);console.log(function(t){var r=(0,i.collector)(t),e=(0,i.getMinAndMax)(r.map(function(t){return t.price})),n=e.min,o=e.max,u=void 0;if(n==o)u={lowEnd:0,highStart:0};else{var a=(0,i.getTargets)(r,function(t){return t==n||t==o}),f=(0,i.getPossibilities)(a,n,o);u=(0,i.getMaximumProfit)(f)}return u.profit+", "+(0,i.formatTime)(u.lowEnd)+", "+(0,i.formatTime)(u.highStart)}(n.default))}]);