!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=132)}({124:function(e,t,n){var r=n(79),o=n(125);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var i={insert:"head",singleton:!1};r(o,i);e.exports=o.locals||{}},125:function(e,t,n){"use strict";n.r(t);var r=n(43),o=n.n(r)()(!1);o.push([e.i,".kuc-input-outer {\n    position: relative;\n    display: inline-block;\n    vertical-align: top;\n}\n.kuc-input-text {\n    display: block;\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0 8px;\n    height: 48px;\n    outline: none;\n    border: 1px solid #e3e7e8;\n    background-color: #fff;\n    box-shadow: 4px 4px 12px #f5f5f5 inset, -4px -4px 12px #f5f5f5 inset;\n    font-size: 14px;\n}\n.kuc-input-text:disabled {\n    cursor: not-allowed;\n    background-color: #E7E6E6;\n    color: #888888;\n    box-shadow: none;\n}\n",""]),t.default=o},126:function(e,t,n){var r=n(79),o=n(127);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var i={insert:"head",singleton:!1};r(o,i);e.exports=o.locals||{}},127:function(e,t,n){"use strict";n.r(t);var r=n(43),o=n.n(r)()(!1);o.push([e.i,".kuc-label {\n    display: block;\n    padding: 4px 8px;\n    color: #333;\n    font-size: 14px;\n    margin: 0 -8px;\n    white-space: nowrap;\n}\n.kuc-label .kuc-require {\n    margin-left: 4px;\n    color: #e74c3c;\n    vertical-align: middle;\n    font-size: 15px;\n    line-height: 1;\n}",""]),t.default=o},128:function(e,t,n){var r=n(79),o=n(129);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var i={insert:"head",singleton:!1};r(o,i);e.exports=o.locals||{}},129:function(e,t,n){"use strict";n.r(t);var r=n(43),o=n.n(r)()(!1);o.push([e.i,".kuc-btn.normal,\n.kuc-btn.submit {\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n    font-size: 16px;\n    white-space: nowrap;\n}\n.kuc-btn.normal:disabled,\n.kuc-btn.submit:disabled,\n.kuc-btn.normal:disabled:hover,\n.kuc-btn.submit:disabled:hover {\n    color: #bababa;\n    border: 1px solid #e3e7e8;\n    background-color: #dbdcdd;\n    cursor: not-allowed;\n    box-shadow: none;\n}\n.kuc-btn.normal {\n    display: block;\n    box-sizing: border-box;\n    padding: 0 16px;\n    min-width: 163px;\n    height: 48px;\n    outline: none;\n    border: 1px solid #e3e7e8;\n    background-color: #f7f9fa;\n    box-shadow: 1px 1px 1px #fff inset;\n    color: #3498db;\n    text-align: center;\n    line-height: 48px;\n}\n.kuc-btn.normal:hover {\n    background-color: #c8d6dd;\n    box-shadow: none;\n    cursor: pointer;\n}\n\n.kuc-btn.submit {\n    display: block;\n    box-sizing: border-box;\n    padding: 0 16px;\n    min-width: 163px;\n    height: 48px;\n    outline: none;\n    border: 1px solid #e3e7e8;\n    background-color: #3498db;\n    box-shadow: 1px 1px 1px #8ccbee inset;\n    color: #fff;\n    text-align: center;\n    line-height: 48px;\n}\n.kuc-btn.submit:hover {\n    background-color: #1d6fa5;\n    cursor: pointer;\n}\n",""]),t.default=o},132:function(e,t,n){"use strict";n.r(t);
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
var r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)};function o(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}var i=function(){return(i=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};n(78);var s=function(){function e(){this._props=i({},this._props,{isDisabled:!1,isVisible:!0})}return e.prototype.rerender=function(e){this.element&&(this._props.isVisible||"boolean"!=typeof this._props.isVisible?this.element.style.display="":this.element.style.display="none",this._props.isDisabled?this.element.setAttribute("disabled",""+this._props.isDisabled):this.element.removeAttribute("disabled"))},e.prototype.getIsDisabled=function(){return this._props.isDisabled},e.prototype.render=function(){return this.element},e.prototype.on=function(e,t){var n=this;this.element.addEventListener(e,(function(e){n._props.isDisabled||t(e)}))},e.prototype.show=function(){this._props.isVisible=!0,this.rerender(["isVisible"])},e.prototype.hide=function(){this._props.isVisible=!1,this.rerender(["isVisible"])},e.prototype.disable=function(){this._props.isDisabled=!0,this.rerender(["isDisabled"])},e.prototype.enable=function(){this._props.isDisabled=!1,this.rerender(["isDisabled"])},e}(),l={common:{SELECTTION_DUPLICATE_VALUE:"The selection has duplicate value",CHECKED_ITEM_LIST_DUPLICATE_VALUE:"The checked item list has duplicate value",INVALID_ARGUMENT:"Error: invalid function arguments"},control:{INVALID_EVENT:"Invalid event, this function accept only ",INVALID_TABLE_FIELDS:"Invalid table cell field type, this function accept only "},radioBtn:{MISSING_NAME:"Missing name for radio buttons"},tabs:{MISSING_TAB_NAME:"Missing tab name on tab item[{{index}}]",MISSING_NEW_ITEM_TABNAME:"Missing tab name.",INVALID_ACTION:"Behavior invalid"},datetime:{INVALID_DATE:"Invalid date",INVALID_LOCALE:"Invalid locale. This function accepts only the following locales: ja, en, zh",INVALID_DATEFORMAT_SEPARATOR:'Invalid date format separator. Valid separators are:  "/", "-", " ", ":"'},colorPicker:{INVALID_COLOR:"Invalid color string"},selection:{MISSING_VALUE_PROPERTY_IN_ITEMS:"Missing options.items[x].value property",INVALID_VALUE:"Specified invalid options.value not included in options.items[x].value"}},a=(n(124),function(e){function t(t){var n=e.call(this)||this;return n._props.value="",n._props.placeholder="","object"==typeof t&&null!==t&&"boolean"!=typeof t.isDisabled&&delete t.isDisabled,t&&(n._props=i({},n._props,t)),n.element=document.createElement("input"),n.element.className="kuc-input-text",n.element.setAttribute("type","text"),n.element.value=null===n._props.value||void 0===n._props.value?"":n._props.value,n.element.placeholder=null===n._props.placeholder||void 0===n._props.placeholder?"":n._props.placeholder,n.element.onchange=function(e){n._props.value=e.target.value,n._onChange&&n._onChange(e)},n}return o(t,e),t.prototype.render=function(){return this.rerender(),e.prototype.render.call(this)},t.prototype.rerender=function(t){e.prototype.rerender.call(this),this._props.isDisabled?this.element.setAttribute("disabled",""+this._props.isDisabled):this.element.removeAttribute("disabled"),t&&(-1!==t.indexOf("value")&&(this.element.value=null===this._props.value||void 0===this._props.value?"":this._props.value),-1!==t.indexOf("placeholder")&&(this.element.placeholder=null===this._props.placeholder||void 0===this._props.placeholder?"":this._props.placeholder))},t.prototype.on=function(e,t){var n=this;"change"!==e?this.element.addEventListener(e,(function(e){n._props.isDisabled||t(e)})):this._onChange=t},t.prototype.setValue=function(e){this._props.value=e,this.rerender(["value"])},t.prototype.getValue=function(){return this._props.value},t.prototype.setPlaceholder=function(e){if(!e)throw new Error(l.common.INVALID_ARGUMENT);this._props.placeholder=e,this.rerender(["placeholder"])},t.prototype.getPlaceholder=function(){return this._props.placeholder},t}(s)),p=function(){function e(e){if(this.elArr=[],"string"==typeof e){var t=document.querySelectorAll(e);this.elArr=Array.prototype.slice.call(t)}else this.elArr.push(e)}return e.prototype.on=function(e,t){return this.each((function(n){n.addEventListener(e,t)})),this},e.prototype.each=function(e){this.elArr.forEach((function(t){e(t)}),this)},e.prototype.data=function(e,t){var n=this;if(void 0===t)return this.elArr[0].getAttribute("data-"+e);try{this.elArr.forEach((function(){n.attr("data-"+e,t)}),this)}catch(e){return!1}return this},e.prototype.attr=function(e,t){return 0===this.elArr.length?void 0!==t?this:null:void 0!==t?(this.elArr.forEach((function(n){n.setAttribute(e,t)}),this),this):this.elArr[0].getAttribute(e)},e.prototype.removeAttr=function(e){return this.elArr.forEach((function(t){t.removeAttribute(e)}),this),this},e.prototype.val=function(e){return 0===this.elArr.length?void 0!==e?this:null:void 0!==e?(this.elArr.forEach((function(t){t.value=e}),this),this):this.elArr[0].value},e.prototype.html=function(e){return 0===this.elArr.length?void 0!==e?this:null:void 0!==e?(this.elArr.forEach((function(t){t.innerHTML=e}),this),this):this.elArr[0].innerHTML},e.prototype.focus=function(){0!==this.elArr.length&&this.elArr[0].focus()},e.prototype.remove=function(){0!==this.elArr.length&&this.elArr.forEach((function(e){try{e.parentNode&&e.parentNode.removeChild(e)}catch(e){}}),this)},e.prototype.trigger=function(e){0!==this.elArr.length&&this.elArr.forEach((function(t){t.dispatchEvent(function(){if("function"==typeof Event)return new Event(e,{bubbles:!0,cancelable:!0});var t=document.createEvent("Event");return t.initEvent(e,!0,!0),t}())}),this)},e.prototype.addClass=function(e){try{return this.elArr.forEach((function(t){var n=t.className.split(" ");-1===n.indexOf(e)&&(n.push(e),t.className=n.join(" ").trim())}),this),this}catch(e){return this}},e.prototype.removeClass=function(e){try{return this.hasClass(e)?(this.elArr.forEach((function(t){var n=t.className.split(" ");n.splice(n.indexOf(e),1),t.className=n.join(" ")}),this),this):this}catch(e){return this}},e.prototype.hasClass=function(e){if(void 0===e)return!1;try{return-1!==this.elArr[0].className.split(" ").indexOf(e)}catch(e){return!1}},e.prototype.append=function(e){var t=this;try{return this.elArr.forEach((function(n){if(Array.isArray(e))return e.forEach((function(e){var t=e.elArr?e.elArr[0]||null:e;n.appendChild(t)})),t;var r=e.elArr?e.elArr[0]||null:e;return n.appendChild(r),t}),this),this}catch(e){return this}},e.prototype.appendTo=function(e){var t=this;try{return this.elArr.forEach((function(n){return Array.isArray(e)?(e.forEach((function(e){(e.elArr?e.elArr[0]||null:e).appendChild(n)})),t):((e.elArr?e.elArr[0]||null:e).appendChild(n),t)}),this),this}catch(e){return window.console.error(e),this}},e.prototype.prepend=function(e){var t=this;try{return this.elArr.forEach((function(n){if(Array.isArray(e))return e.forEach((function(e){n.insertBefore(e.elArr?e.elArr[0]||null:e,n.firstChild)})),t;var r=e.elArr?e.elArr[0]||null:e;return n.insertBefore(r,n.firstChild),t})),this}catch(e){return this}},e}(),c=function(e){return new p(e)},u=(n(126),function(e){function t(t){var n=e.call(this)||this;return n._props=i({},n._props,{text:"",isRequired:!1,textColor:"",backgroundColor:""}),t&&(n._props=i({},n._props,t),n._props.text=t.text&&"string"==typeof t.text?t.text:""),n._props.isDisabled=!1,n.element=n._createLabelLayout(),n.rerender(["text","isRequired","textStyle"]),n}return o(t,e),t.prototype._createLabelLayout=function(){this.textEl=c(document.createElement("span")),this.requiredEl=c(document.createElement("span")).addClass("kuc-require").html("*");var e=document.createElement("div");return this.containerEl=c(e).addClass("kuc-label").append(this.textEl),e},t.prototype.rerender=function(t){if(e.prototype.rerender.call(this),t&&(-1!==t.indexOf("text")&&this.textEl.html(this._props.text),-1!==t.indexOf("isRequired")&&(this._props.isRequired&&"boolean"==typeof this._props.isRequired?this.containerEl.append(this.requiredEl):this.requiredEl.remove()),-1!==t.indexOf("textStyle"))){var n=""!==this._props.textColor?"color: "+this._props.textColor:"";n+=""!==this._props.backgroundColor?";background-color: "+this._props.backgroundColor:"",this.textEl.attr("style",n)}},t.prototype.setText=function(e){this._props.text="string"==typeof e?e:"",this.rerender(["text"])},t.prototype.setRequired=function(e){this._props.isRequired="boolean"==typeof e&&e,this.rerender(["isRequired"])},t.prototype.setTextColor=function(e){this._props.textColor=e,this.rerender(["textStyle"])},t.prototype.setBackgroundColor=function(e){this._props.backgroundColor=e,this.rerender(["textStyle"])},t.prototype.disable=function(){},t.prototype.enable=function(){},t}(s)),d=(n(128),function(e){function t(t){var n=e.call(this)||this;return n._props=i({},n._props,{text:"",type:"normal"}),t&&"boolean"!=typeof t.isDisabled&&delete t.isDisabled,t&&(n._props=i({},n._props,t)),n._createLayout(),n.rerender(["isDisabled","isVisible"]),n}return o(t,e),t.prototype.rerender=function(e){e&&(-1!==e.indexOf("type")&&(this.element.className=this._getClassName()),-1!==e.indexOf("text")&&(this.element.innerHTML=this._props.text||""),-1!==e.indexOf("isDisabled")&&(this._props.isDisabled?this.element.setAttribute("disabled",""+this._props.isDisabled):this.element.removeAttribute("disabled")),-1!==e.indexOf("isVisible")&&(this._props.isVisible?this.element.style.display="":this.element.style.display="none"))},t.prototype.setText=function(e){this._props.text=e,this.rerender(["text"])},t.prototype.setType=function(e){this._props.type=e,this.rerender(["type"])},t.prototype._getClassName=function(){return["kuc-btn","submit"===this._props.type?"submit":"normal"].join(" ").trim()},t.prototype.on=function(e,t){var n=this;this.element.addEventListener(e,(function(e){n._props.isDisabled||t(e)}))},t.prototype._createLayout=function(){this.element=document.createElement("button"),this.element.className=this._getClassName(),this.element.innerHTML=this._props.text||"",this._props.onClick&&this.on("click",this._props.onClick)},t}(s));!function(e){var t=kintone.plugin.app.getConfig(e);t||(t={});var n=document.getElementById("token"),r=new a({placeholder:"token",value:"token"in t?t.token:""});n.appendChild(new u({text:"Token",isRequired:!0}).render()),n.appendChild(r.render());var o=new d({text:"Save",type:"submit"});document.getElementById("save_button").appendChild(o.render()),o.on("click",(function(){var e={token:r.getValue()};kintone.plugin.app.setConfig(e)}))}(kintone.$PLUGIN_ID)},43:function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var o=(s=r,l=btoa(unescape(encodeURIComponent(JSON.stringify(s)))),a="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(l),"/*# ".concat(a," */")),i=r.sources.map((function(e){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(e," */")}));return[n].concat(i).concat([o]).join("\n")}var s,l,a;return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var s=this[i][0];null!=s&&(o[s]=!0)}for(var l=0;l<e.length;l++){var a=[].concat(e[l]);r&&o[a[0]]||(n&&(a[2]?a[2]="".concat(n," and ").concat(a[2]):a[2]=n),t.push(a))}},t}},78:function(e,t){[Element.prototype,Document.prototype,DocumentFragment.prototype].forEach((function(e){Object.prototype.hasOwnProperty.call(e,"append")||Object.defineProperty(e,"append",{configurable:!0,enumerable:!0,writable:!0,value:function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var n=document.createDocumentFragment();e.forEach((function(e){var t=e instanceof Node;n.appendChild(t?e:document.createTextNode(String(e)))})),this.appendChild(n)}}),Object.prototype.hasOwnProperty.call(e,"remove")||Object.defineProperty(e,"remove",{configurable:!0,enumerable:!0,writable:!0,value:function(){null!==this.parentNode&&this.parentNode.removeChild(this)}}),Object.prototype.hasOwnProperty.call(e,"prepend")||Object.defineProperty(e,"prepend",{configurable:!0,enumerable:!0,writable:!0,value:function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var n=document.createDocumentFragment();e.forEach((function(e){var t=e instanceof Node;n.appendChild(t?e:document.createTextNode(String(e)))})),this.insertBefore(n,this.firstChild)}})})),Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector),Element.prototype.closest||(Element.prototype.closest=function(e){var t=this;do{if(t.matches&&t.matches(e))return t;t=t.parentElement||t.parentNode}while(null!==t&&1===t.nodeType);return null})},79:function(e,t,n){"use strict";var r,o=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},i=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),s=[];function l(e){for(var t=-1,n=0;n<s.length;n++)if(s[n].identifier===e){t=n;break}return t}function a(e,t){for(var n={},r=[],o=0;o<e.length;o++){var i=e[o],a=t.base?i[0]+t.base:i[0],p=n[a]||0,c="".concat(a," ").concat(p);n[a]=p+1;var u=l(c),d={css:i[1],media:i[2],sourceMap:i[3]};-1!==u?(s[u].references++,s[u].updater(d)):s.push({identifier:c,updater:v(d,t),references:1}),r.push(c)}return r}function p(e){var t=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var o=n.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(e){t.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(t);else{var s=i(e.insert||"head");if(!s)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");s.appendChild(t)}return t}var c,u=(c=[],function(e,t){return c[e]=t,c.filter(Boolean).join("\n")});function d(e,t,n,r){var o=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=u(t,o);else{var i=document.createTextNode(o),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(i,s[t]):e.appendChild(i)}}function h(e,t,n){var r=n.css,o=n.media,i=n.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var f=null,b=0;function v(e,t){var n,r,o;if(t.singleton){var i=b++;n=f||(f=p(t)),r=d.bind(null,n,i,!1),o=d.bind(null,n,i,!0)}else n=p(t),r=h.bind(null,n,t),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=o());var n=a(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<n.length;r++){var o=l(n[r]);s[o].references--}for(var i=a(e,t),p=0;p<n.length;p++){var c=l(n[p]);0===s[c].references&&(s[c].updater(),s.splice(c,1))}n=i}}}}});