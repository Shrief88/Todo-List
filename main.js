(()=>{"use strict";var n,e,t,r,o,a,i,c,s,l,p,d,u,f,m={426:(n,e,t)=>{t.d(e,{Z:()=>m});var r=t(81),o=t.n(r),a=t(645),i=t.n(a),c=t(667),s=t.n(c),l=new URL(t(937),t.b),p=new URL(t(867),t.b),d=i()(o()),u=s()(l),f=s()(p);d.push([n.id,"@font-face {\n    font-family: 'BrandFont';\n    src: url("+u+") format('truetype');\n    font-weight: 600;\n    font-style: normal;\n}\n\n@font-face {\n    font-family: 'contentFont';\n    src: url("+f+") format('truetype');\n    font-weight: 400;\n    font-style: normal;\n}\n\n\n\n\n\n:root{\n    --navbar-color : #DC4D3D;\n    --sidebar-color: #F7F7F7;\n    --content-color: #FEFEFE;\n    --brandName-color : #FEFEFE;\n}\n\nhtml,body{\n    margin: 0;\n    padding: 0;\n    min-height: 100vh;\n    font-size: 18px;\n    box-sizing: border-box;\n}\n\np,ul,img{\n    margin: 0;\n    padding: 0;\n}\n\nli{\n    list-style: none;\n}\n\n\nbody{\n    display: flex;\n    flex-direction: column;\n}\n\n#navbar{\n    background-color: var(--navbar-color);\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    padding: 10px 200px 10px 70px;\n    align-items: center;\n}\n\n#brand-name{\n    font-family: 'BrandFont';\n    font-size: 3rem;\n    color: var(--brandName-color);\n}\n\n#toggle-button{\n    padding: 1px 1px 0 1px;\n    border-radius: 1px;\n}\n\n#toggle-button:hover{\n    background-color: #E27065;\n}\n\n\n#container{\n    flex : 1;\n    background-color: var(--content-color);\n    display: flex;\n}\n\n#tasks{\n    flex: 1;\n}\n\n#sidebar{\n    padding: 20px 50px 20px 40px;\n    background-color: var(--sidebar-color);\n    display: flex;\n    flex-direction: column;\n    gap: 15px;\n    align-items: stretch;\n}\n\n.sidebar-element{\n    display: flex;\n    flex-direction: row;\n    gap: 15px;\n    font-family: 'contentFont';\n    align-items: center;\n    font-size: 1.1rem;\n    padding: 5px;\n    border-radius: 5px;\n}\n\n.left-padding{\n    padding-left: 50px;\n}\n\n.sidebar-element:hover{\n    background-color: #dfdcdc;\n    cursor: pointer;\n}\n\n#plus:hover{\n    color: red;\n    background-color: var(--sidebar-color)\n}\n\n\n\n\n\n\n\n\n",""]);const m=d},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var l=0;l<n.length;l++){var p=[].concat(n[l]);r&&i[p[0]]||(void 0!==a&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=a),t&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=t):p[2]=t),o&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=o):p[4]="".concat(o)),e.push(p))}},e}},667:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var a={},i=[],c=0;c<n.length;c++){var s=n[c],l=r.base?s[0]+r.base:s[0],p=a[l]||0,d="".concat(l," ").concat(p);a[l]=p+1;var u=t(d),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)e[u].references++,e[u].updater(f);else{var m=o(f,r);r.byIndex=c,e.splice(c,0,{identifier:d,updater:m,references:1})}i.push(d)}return i}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var a=r(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var c=t(a[i]);e[c].references--}for(var s=r(n,o),l=0;l<a.length;l++){var p=t(a[l]);0===e[p].references&&(e[p].updater(),e.splice(p,1))}a=s}}},569:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},937:(n,e,t)=>{n.exports=t.p+"72fc35f38c2864ca2cd5.ttf"},867:(n,e,t)=>{n.exports=t.p+"7c8d04cd831df3033c8a.ttf"}},v={};function g(n){var e=v[n];if(void 0!==e)return e.exports;var t=v[n]={id:n,exports:{}};return m[n](t,t.exports,g),t.exports}g.m=m,g.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return g.d(e,{a:e}),e},g.d=(n,e)=>{for(var t in e)g.o(e,t)&&!g.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:e[t]})},g.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),g.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;g.g.importScripts&&(n=g.g.location+"");var e=g.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var t=e.getElementsByTagName("script");t.length&&(n=t[t.length-1].src)}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),g.p=n})(),g.b=document.baseURI||self.location.href,g.nc=void 0,n=g(379),e=g.n(n),t=g(795),r=g.n(t),o=g(569),a=g.n(o),i=g(565),c=g.n(i),s=g(216),l=g.n(s),p=g(589),d=g.n(p),u=g(426),(f={}).styleTagTransform=d(),f.setAttributes=c(),f.insert=a().bind(null,"head"),f.domAPI=r(),f.insertStyleElement=l(),e()(u.Z,f),u.Z&&u.Z.locals&&u.Z.locals,console.log("hello webpack!")})();