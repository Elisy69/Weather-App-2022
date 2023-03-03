(()=>{"use strict";var n={917:(n,e,t)=>{t.d(e,{Z:()=>s});var o=t(81),r=t.n(o),i=t(645),a=t.n(i)()(r());a.push([n.id,"/*\n  1. Use a more-intuitive box-sizing model.\n*/\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n/*\n    2. Remove default margin\n  */\n* {\n  margin: 0;\n}\n/*\n    3. Allow percentage-based heights in the application\n  */\nhtml,\nbody {\n  height: 100%;\n}\n/*\n    Typographic tweaks!\n    4. Add accessible line-height\n    5. Improve text rendering\n  */\nbody {\n  line-height: 1.5;\n  -webkit-font-smoothing: antialiased;\n}\n/*\n    6. Improve media defaults\n  */\nimg,\npicture,\nvideo,\ncanvas,\nsvg {\n  display: block;\n  max-width: 100%;\n}\n/*\n    7. Remove built-in form typography styles\n  */\ninput,\nbutton,\ntextarea,\nselect {\n  font: inherit;\n}\n/*\n    8. Avoid text overflows\n  */\np,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  overflow-wrap: break-word;\n}\n/*\n    9. Create a root stacking context\n  */\n#root,\n#__next {\n  isolation: isolate;\n}\n\nol,\nul {\n  list-style: none;\n}\n",""]);const s=a},426:(n,e,t)=>{t.d(e,{Z:()=>b});var o=t(81),r=t.n(o),i=t(645),a=t.n(i),s=t(667),c=t.n(s),l=new URL(t(848),t.b),d=new URL(t(868),t.b),p=new URL(t(195),t.b),u=a()(r()),f=c()(l),h=c()(d),g=c()(p);u.push([n.id,'body {\n  background-color: aliceblue;\n  display: flex;\n  flex-direction: column;\n}\n#AppWrapper {\n  background-color: aliceblue;\n  width: 100%;\n  height: 50%;\n  display: flex;\n  justify-content: center;\n}\n#CityIMG {\n  background-color: blueviolet;\n  width: 100%;\n  height: 50%;\n}\n.AppContainer {\n  background-color: bisque;\n  box-sizing: border-box;\n  width: 600px;\n  height: 435px;\n  border: 1px solid #000000;\n  align-self: center;\n}\n\n.searchBar {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  border-bottom: 1px solid #000000;\n  padding: 5px;\n}\n.searchInput {\n  all: unset;\n  flex-grow: 2;\n  cursor: text;\n}\n.searchBtn {\n  all: unset;\n}\n.searchImg {\n}\n\n.interface {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  height: 391px;\n}\n\n.tabsWindow {\n  flex-grow: 1;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  width: 300px;\n}\n\n.temperature {\n  font-family: "Roboto";\n  font-style: normal;\n  font-weight: 400;\n  font-size: 70px;\n  line-height: 82px;\n  display: inline-block;\n  padding: 20px 174px 0px 23px;\n  flex-grow: 1;\n}\n.weatherIcon {\n  display: flex;\n  flex-grow: 1;\n  justify-content: center;\n}\n.nowCity {\n  display: flex;\n  justify-content: space-between;\n  padding: 12px;\n  flex-grow: 1;\n  align-items: flex-end;\n}\n.currentCity {\n  font-family: "Roboto";\n  font-style: normal;\n  font-weight: 400;\n  font-size: 24px;\n  line-height: 28px;\n  color: #000000;\n}\n\n.addToFavoriteBtn input {\n  position: absolute;\n  opacity: 0;\n  cursor: pointer;\n  height: 0;\n  width: 0;\n}\n\n.addToFavoriteBtnActive {\n  display: block;\n  top: 0;\n  left: 0;\n  height: 25px;\n  width: 24px;\n  background-image: url('+f+");\n}\n.addToFavoriteBtn:hover input ~ .addToFavoriteBtnActive {\n  background-image: url("+h+");\n}\n\n.addToFavoriteBtn input:checked ~ .addToFavoriteBtnActive {\n  background-image: url("+g+');\n}\n\n.tabsList {\n  padding: 0;\n  display: flex;\n  justify-content: space-between;\n  width: 301px;\n  height: 45px;\n  border-top: 1px solid #000000;\n}\n\n.tab:first-child {\n  border-left: none;\n}\n\n.tab {\n  flex-grow: 1;\n  border-left: 1px solid #000000;\n  display: flex;\n  justify-content: center;\n  line-height: 44px;\n  font-family: "Roboto";\n  font-style: normal;\n  font-weight: 400;\n  font-size: 18px;\n  width: 99px;\n  height: 46px;\n}\n.tab:hover {\n  cursor: pointer;\n  background-color: #000000;\n  color: aliceblue;\n}\n.active {\n}\n\n.citiesWindow {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  flex-grow: 1;\n  border-left: 1px solid #000000;\n  width: 300px;\n}\n.addedLocations {\n  display: flex;\n  font-family: "Roboto";\n  font-style: normal;\n  font-weight: 400;\n  font-size: 24px;\n  border-bottom: 1px solid #000000;\n  justify-content: center;\n  height: 37px;\n}\n\n.favoriteLocationsList {\n  height: 360px;\n  padding: 30px;\n}\n.favoriteLocation {\n  font-family: "Roboto";\n  font-style: normal;\n  font-weight: 400;\n  font-size: 24px;\n  padding: 5px;\n}\n.favoriteLocationBtn {\n  all: unset;\n}\n\n.weatherWindows {\n  display: none;\n}\n.active {\n  display: flex;\n  flex-direction: column;\n  height: 345px;\n}\n\n.pressed {\n  background-color: #000000;\n  color: aliceblue;\n}\n',""]);const b=u},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",o=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),o&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),o&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,o,r,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(o)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(a[c]=!0)}for(var l=0;l<n.length;l++){var d=[].concat(n[l]);o&&a[d[0]]||(void 0!==i&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=i),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),r&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=r):d[4]="".concat(r)),e.push(d))}},e}},667:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,o=0;o<e.length;o++)if(e[o].identifier===n){t=o;break}return t}function o(n,o){for(var i={},a=[],s=0;s<n.length;s++){var c=n[s],l=o.base?c[0]+o.base:c[0],d=i[l]||0,p="".concat(l," ").concat(d);i[l]=d+1;var u=t(p),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)e[u].references++,e[u].updater(f);else{var h=r(f,o);o.byIndex=s,e.splice(s,0,{identifier:p,updater:h,references:1})}a.push(p)}return a}function r(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,r){var i=o(n=n||[],r=r||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var s=t(i[a]);e[s].references--}for(var c=o(n,r),l=0;l<i.length;l++){var d=t(i[l]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}i=c}}},569:n=>{var e={};n.exports=function(n,t){var o=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(o,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},848:(n,e,t)=>{n.exports=t.p+"6c15f93c3e3049004caf.svg"},195:(n,e,t)=>{n.exports=t.p+"2cb98753f119c6f4805c.svg"},868:(n,e,t)=>{n.exports=t.p+"65bbd9c157a37b5f1bd9.svg"}},e={};function t(o){var r=e[o];if(void 0!==r)return r.exports;var i=e[o]={id:o,exports:{}};return n[o](i,i.exports,t),i.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var o=e.getElementsByTagName("script");o.length&&(n=o[o.length-1].src)}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{var n=t(379),e=t.n(n),o=t(795),r=t.n(o),i=t(569),a=t.n(i),s=t(565),c=t.n(s),l=t(216),d=t.n(l),p=t(589),u=t.n(p),f=t(917),h={};h.styleTagTransform=u(),h.setAttributes=c(),h.insert=a().bind(null,"head"),h.domAPI=r(),h.insertStyleElement=d(),e()(f.Z,h),f.Z&&f.Z.locals&&f.Z.locals;var g=t(426),b={};b.styleTagTransform=u(),b.setAttributes=c(),b.insert=a().bind(null,"head"),b.domAPI=r(),b.insertStyleElement=d(),e()(g.Z,b),g.Z&&g.Z.locals&&g.Z.locals;const x=document.querySelectorAll(".tab"),v=document.querySelectorAll(".weatherWindows");x.forEach((n=>{n.addEventListener("click",(()=>{x.forEach((n=>n.classList.remove("pressed"))),n.classList.add("pressed");const e=document.querySelector(n.dataset.option);console.log(e),v.forEach((n=>n.classList.remove("active"))),e.classList.add("active")}))})),console.log(x)})()})();