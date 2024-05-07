(()=>{"use strict";var e={208:(e,n,t)=>{t.d(n,{A:()=>c});var o=t(601),r=t.n(o),a=t(314),i=t.n(a)()(r());i.push([e.id,"* {\n    box-sizing: border-box;\n}\nbody {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    background-color: #3B3486;\n    padding: 0px;\n    margin: 0px;\n}\n\n#btnHeader {\n    display: flex;\n    justify-content: center;\n    background-color: #332941;\n    margin-bottom: 50px;\n    width: 100%;\n}\n\nbutton {\n    margin: 10px;\n    margin-bottom: 0px;\n    padding: 10px;\n    background-color: #F8E559;\n    border-style: none;\n    border-radius: 5px;\n    font-size: 20px;\n}\n\n\n#content {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    width: 900px;\n    height: 100vh;\n    background-color: #332941;\n    color: white;\n    font-size: 30px;\n}\n\nimg {\n    height: 400px;\n    margin-bottom: 50px;\n}\n\nheader {\n    margin-bottom: 40px;\n}",""]);const c=i},314:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",o=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),o&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),o&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,o,r,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(o)for(var c=0;c<this.length;c++){var d=this[c][0];null!=d&&(i[d]=!0)}for(var s=0;s<e.length;s++){var l=[].concat(e[s]);o&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),n.push(l))}},n}},601:e=>{e.exports=function(e){return e[1]}},72:e=>{var n=[];function t(e){for(var t=-1,o=0;o<n.length;o++)if(n[o].identifier===e){t=o;break}return t}function o(e,o){for(var a={},i=[],c=0;c<e.length;c++){var d=e[c],s=o.base?d[0]+o.base:d[0],l=a[s]||0,u="".concat(s," ").concat(l);a[s]=l+1;var p=t(u),m={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==p)n[p].references++,n[p].updater(m);else{var f=r(m,o);o.byIndex=c,n.splice(c,0,{identifier:u,updater:f,references:1})}i.push(u)}return i}function r(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,r){var a=o(e=e||[],r=r||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var c=t(a[i]);n[c].references--}for(var d=o(e,r),s=0;s<a.length;s++){var l=t(a[s]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}a=d}}},659:e=>{var n={};e.exports=function(e,t){var o=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},540:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},56:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(o,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},113:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(o){var r=n[o];if(void 0!==r)return r.exports;var a=n[o]={id:o,exports:{}};return e[o](a,a.exports,t),a.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),t.nc=void 0,(()=>{const e=document.getElementById("content"),n=document.createElement("img"),o=document.createElement("header"),r=document.createElement("div"),a=function(){n.src="../img/moon.png",o.textContent="Moonside Cafe",r.textContent="Have a drink any time of the night at the Moonside cafe.",e.appendChild(n),e.appendChild(o),e.appendChild(r)},i=document.getElementById("content"),c=document.createElement("img"),d=document.createElement("header"),s=document.createElement("div"),l=document.createElement("div"),u=document.createElement("div"),p=document.createElement("div"),m=document.createElement("div"),f=document.getElementById("content"),h=document.createElement("img"),v=document.createElement("header"),g=document.createElement("div"),x=document.createElement("div"),y=document.createElement("div"),C=document.createElement("div");var b=t(72),E=t.n(b),L=t(825),M=t.n(L),I=t(659),k=t.n(I),A=t(56),w=t.n(A),S=t(540),T=t.n(S),B=t(113),j=t.n(B),P=t(208),H={};H.styleTagTransform=j(),H.setAttributes=w(),H.insert=k().bind(null,"head"),H.domAPI=M(),H.insertStyleElement=T(),E()(P.A,H),P.A&&P.A.locals&&P.A.locals,document.querySelectorAll("button").forEach((e=>e.onclick=()=>document.getElementById("content").textContent="")),document.getElementById("home").addEventListener("click",a),document.getElementById("menu").addEventListener("click",(function(){c.src="../img/moon.png",d.textContent="Menu",l.textContent="Coffee - $2.00",u.textContent="Cake Slice - $5.00",p.textContent="Pasta - $6.50",m.textContent="Sandwich - $7.25",s.classList.add("menuContainer"),l.classList.add("item1"),u.classList.add("item2"),p.classList.add("item3"),m.classList.add("item4"),i.appendChild(c),i.appendChild(d),i.appendChild(s),s.appendChild(l),s.appendChild(u),s.appendChild(p),s.appendChild(m)})),document.getElementById("contact").addEventListener("click",(function(){h.src="../img/moon.png",v.textContent="Contact",x.textContent="Mobile - 0987-555-6622",y.textContent="Landline - 01-1234-5678",C.textContent="Address - 123 Luna Street, Moon City, The Moon",g.classList.add("contactContainer"),x.classList.add("mobile"),y.classList.add("landline"),C.classList.add("address"),f.appendChild(h),f.appendChild(v),f.appendChild(g),g.appendChild(x),g.appendChild(y),g.appendChild(C)})),a(),console.log("Works!")})()})();