var o5=Object.defineProperty;var s5=(e,t,n)=>t in e?o5(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var Yu=(e,t,n)=>(s5(e,typeof t!="symbol"?t+"":t,n),n),Xu=(e,t,n)=>{if(!t.has(e))throw TypeError("Cannot "+n)};var Oe=(e,t,n)=>(Xu(e,t,"read from private field"),n?n.call(e):t.get(e)),Dn=(e,t,n)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,n)},mc=(e,t,n,r)=>(Xu(e,t,"write to private field"),r?r.call(e,n):t.set(e,n),n);var it=(e,t,n)=>(Xu(e,t,"access private method"),n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function m0(e,t){const n=Object.create(null),r=e.split(",");for(let i=0;i<r.length;i++)n[r[i]]=!0;return t?i=>!!n[i.toLowerCase()]:i=>!!n[i]}const nt={},po=[],_n=()=>{},a5=()=>!1,c5=/^on[^a-z]/,jl=e=>c5.test(e),g0=e=>e.startsWith("onUpdate:"),yt=Object.assign,w0=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},l5=Object.prototype.hasOwnProperty,je=(e,t)=>l5.call(e,t),Se=Array.isArray,mo=e=>qa(e)==="[object Map]",Wl=e=>qa(e)==="[object Set]",bp=e=>qa(e)==="[object Date]",Re=e=>typeof e=="function",pt=e=>typeof e=="string",Js=e=>typeof e=="symbol",Qe=e=>e!==null&&typeof e=="object",Eg=e=>Qe(e)&&Re(e.then)&&Re(e.catch),Tg=Object.prototype.toString,qa=e=>Tg.call(e),u5=e=>qa(e).slice(8,-1),Sg=e=>qa(e)==="[object Object]",b0=e=>pt(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Rc=m0(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Hl=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},d5=/-(\w)/g,zn=Hl(e=>e.replace(d5,(t,n)=>n?n.toUpperCase():"")),f5=/\B([A-Z])/g,Ko=Hl(e=>e.replace(f5,"-$1").toLowerCase()),zl=Hl(e=>e.charAt(0).toUpperCase()+e.slice(1)),Qu=Hl(e=>e?`on${zl(e)}`:""),Ys=(e,t)=>!Object.is(e,t),Nc=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},Kc=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},qd=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let yp;const Vd=()=>yp||(yp=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function y0(e){if(Se(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],i=pt(r)?g5(r):y0(r);if(i)for(const o in i)t[o]=i[o]}return t}else{if(pt(e))return e;if(Qe(e))return e}}const h5=/;(?![^(]*\))/g,p5=/:([^]+)/,m5=/\/\*[^]*?\*\//g;function g5(e){const t={};return e.replace(m5,"").split(h5).forEach(n=>{if(n){const r=n.split(p5);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function Zo(e){let t="";if(pt(e))t=e;else if(Se(e))for(let n=0;n<e.length;n++){const r=Zo(e[n]);r&&(t+=r+" ")}else if(Qe(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const w5="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",b5=m0(w5);function Ag(e){return!!e||e===""}function y5(e,t){if(e.length!==t.length)return!1;let n=!0;for(let r=0;n&&r<e.length;r++)n=ql(e[r],t[r]);return n}function ql(e,t){if(e===t)return!0;let n=bp(e),r=bp(t);if(n||r)return n&&r?e.getTime()===t.getTime():!1;if(n=Js(e),r=Js(t),n||r)return e===t;if(n=Se(e),r=Se(t),n||r)return n&&r?y5(e,t):!1;if(n=Qe(e),r=Qe(t),n||r){if(!n||!r)return!1;const i=Object.keys(e).length,o=Object.keys(t).length;if(i!==o)return!1;for(const s in e){const a=e.hasOwnProperty(s),c=t.hasOwnProperty(s);if(a&&!c||!a&&c||!ql(e[s],t[s]))return!1}}return String(e)===String(t)}function $g(e,t){return e.findIndex(n=>ql(n,t))}const Xs=e=>pt(e)?e:e==null?"":Se(e)||Qe(e)&&(e.toString===Tg||!Re(e.toString))?JSON.stringify(e,Pg,2):String(e),Pg=(e,t)=>t&&t.__v_isRef?Pg(e,t.value):mo(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,i])=>(n[`${r} =>`]=i,n),{})}:Wl(t)?{[`Set(${t.size})`]:[...t.values()]}:Qe(t)&&!Se(t)&&!Sg(t)?String(t):t;let dn;class Og{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=dn,!t&&dn&&(this.index=(dn.scopes||(dn.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const n=dn;try{return dn=this,t()}finally{dn=n}}}on(){dn=this}off(){dn=this.parent}stop(t){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this._active=!1}}}function v5(e){return new Og(e)}function x5(e,t=dn){t&&t.active&&t.effects.push(e)}function _5(){return dn}const v0=e=>{const t=new Set(e);return t.w=0,t.n=0,t},Dg=e=>(e.w&Hr)>0,Ig=e=>(e.n&Hr)>0,C5=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=Hr},E5=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const i=t[r];Dg(i)&&!Ig(i)?i.delete(e):t[n++]=i,i.w&=~Hr,i.n&=~Hr}t.length=n}},Gd=new WeakMap;let Ps=0,Hr=1;const Kd=30;let wn;const Ci=Symbol(""),Zd=Symbol("");class x0{constructor(t,n=null,r){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,x5(this,r)}run(){if(!this.active)return this.fn();let t=wn,n=kr;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=wn,wn=this,kr=!0,Hr=1<<++Ps,Ps<=Kd?C5(this):vp(this),this.fn()}finally{Ps<=Kd&&E5(this),Hr=1<<--Ps,wn=this.parent,kr=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){wn===this?this.deferStop=!0:this.active&&(vp(this),this.onStop&&this.onStop(),this.active=!1)}}function vp(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let kr=!0;const Rg=[];function Jo(){Rg.push(kr),kr=!1}function Yo(){const e=Rg.pop();kr=e===void 0?!0:e}function Wt(e,t,n){if(kr&&wn){let r=Gd.get(e);r||Gd.set(e,r=new Map);let i=r.get(n);i||r.set(n,i=v0()),Ng(i)}}function Ng(e,t){let n=!1;Ps<=Kd?Ig(e)||(e.n|=Hr,n=!Dg(e)):n=!e.has(wn),n&&(e.add(wn),wn.deps.push(e))}function pr(e,t,n,r,i,o){const s=Gd.get(e);if(!s)return;let a=[];if(t==="clear")a=[...s.values()];else if(n==="length"&&Se(e)){const c=Number(r);s.forEach((u,l)=>{(l==="length"||l>=c)&&a.push(u)})}else switch(n!==void 0&&a.push(s.get(n)),t){case"add":Se(e)?b0(n)&&a.push(s.get("length")):(a.push(s.get(Ci)),mo(e)&&a.push(s.get(Zd)));break;case"delete":Se(e)||(a.push(s.get(Ci)),mo(e)&&a.push(s.get(Zd)));break;case"set":mo(e)&&a.push(s.get(Ci));break}if(a.length===1)a[0]&&Jd(a[0]);else{const c=[];for(const u of a)u&&c.push(...u);Jd(v0(c))}}function Jd(e,t){const n=Se(e)?e:[...e];for(const r of n)r.computed&&xp(r);for(const r of n)r.computed||xp(r)}function xp(e,t){(e!==wn||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const T5=m0("__proto__,__v_isRef,__isVue"),kg=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Js)),S5=_0(),A5=_0(!1,!0),$5=_0(!0),_p=P5();function P5(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const r=He(this);for(let o=0,s=this.length;o<s;o++)Wt(r,"get",o+"");const i=r[t](...n);return i===-1||i===!1?r[t](...n.map(He)):i}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){Jo();const r=He(this)[t].apply(this,n);return Yo(),r}}),e}function O5(e){const t=He(this);return Wt(t,"has",e),t.hasOwnProperty(e)}function _0(e=!1,t=!1){return function(r,i,o){if(i==="__v_isReactive")return!e;if(i==="__v_isReadonly")return e;if(i==="__v_isShallow")return t;if(i==="__v_raw"&&o===(e?t?V5:Fg:t?Ug:Lg).get(r))return r;const s=Se(r);if(!e){if(s&&je(_p,i))return Reflect.get(_p,i,o);if(i==="hasOwnProperty")return O5}const a=Reflect.get(r,i,o);return(Js(i)?kg.has(i):T5(i))||(e||Wt(r,"get",i),t)?a:At(a)?s&&b0(i)?a:a.value:Qe(a)?e?jg(a):Xo(a):a}}const D5=Mg(),I5=Mg(!0);function Mg(e=!1){return function(n,r,i,o){let s=n[r];if(Eo(s)&&At(s)&&!At(i))return!1;if(!e&&(!Zc(i)&&!Eo(i)&&(s=He(s),i=He(i)),!Se(n)&&At(s)&&!At(i)))return s.value=i,!0;const a=Se(n)&&b0(r)?Number(r)<n.length:je(n,r),c=Reflect.set(n,r,i,o);return n===He(o)&&(a?Ys(i,s)&&pr(n,"set",r,i):pr(n,"add",r,i)),c}}function R5(e,t){const n=je(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&n&&pr(e,"delete",t,void 0),r}function N5(e,t){const n=Reflect.has(e,t);return(!Js(t)||!kg.has(t))&&Wt(e,"has",t),n}function k5(e){return Wt(e,"iterate",Se(e)?"length":Ci),Reflect.ownKeys(e)}const Bg={get:S5,set:D5,deleteProperty:R5,has:N5,ownKeys:k5},M5={get:$5,set(e,t){return!0},deleteProperty(e,t){return!0}},B5=yt({},Bg,{get:A5,set:I5}),C0=e=>e,Vl=e=>Reflect.getPrototypeOf(e);function gc(e,t,n=!1,r=!1){e=e.__v_raw;const i=He(e),o=He(t);n||(t!==o&&Wt(i,"get",t),Wt(i,"get",o));const{has:s}=Vl(i),a=r?C0:n?S0:Qs;if(s.call(i,t))return a(e.get(t));if(s.call(i,o))return a(e.get(o));e!==i&&e.get(t)}function wc(e,t=!1){const n=this.__v_raw,r=He(n),i=He(e);return t||(e!==i&&Wt(r,"has",e),Wt(r,"has",i)),e===i?n.has(e):n.has(e)||n.has(i)}function bc(e,t=!1){return e=e.__v_raw,!t&&Wt(He(e),"iterate",Ci),Reflect.get(e,"size",e)}function Cp(e){e=He(e);const t=He(this);return Vl(t).has.call(t,e)||(t.add(e),pr(t,"add",e,e)),this}function Ep(e,t){t=He(t);const n=He(this),{has:r,get:i}=Vl(n);let o=r.call(n,e);o||(e=He(e),o=r.call(n,e));const s=i.call(n,e);return n.set(e,t),o?Ys(t,s)&&pr(n,"set",e,t):pr(n,"add",e,t),this}function Tp(e){const t=He(this),{has:n,get:r}=Vl(t);let i=n.call(t,e);i||(e=He(e),i=n.call(t,e)),r&&r.call(t,e);const o=t.delete(e);return i&&pr(t,"delete",e,void 0),o}function Sp(){const e=He(this),t=e.size!==0,n=e.clear();return t&&pr(e,"clear",void 0,void 0),n}function yc(e,t){return function(r,i){const o=this,s=o.__v_raw,a=He(s),c=t?C0:e?S0:Qs;return!e&&Wt(a,"iterate",Ci),s.forEach((u,l)=>r.call(i,c(u),c(l),o))}}function vc(e,t,n){return function(...r){const i=this.__v_raw,o=He(i),s=mo(o),a=e==="entries"||e===Symbol.iterator&&s,c=e==="keys"&&s,u=i[e](...r),l=n?C0:t?S0:Qs;return!t&&Wt(o,"iterate",c?Zd:Ci),{next(){const{value:d,done:p}=u.next();return p?{value:d,done:p}:{value:a?[l(d[0]),l(d[1])]:l(d),done:p}},[Symbol.iterator](){return this}}}}function Cr(e){return function(...t){return e==="delete"?!1:this}}function L5(){const e={get(o){return gc(this,o)},get size(){return bc(this)},has:wc,add:Cp,set:Ep,delete:Tp,clear:Sp,forEach:yc(!1,!1)},t={get(o){return gc(this,o,!1,!0)},get size(){return bc(this)},has:wc,add:Cp,set:Ep,delete:Tp,clear:Sp,forEach:yc(!1,!0)},n={get(o){return gc(this,o,!0)},get size(){return bc(this,!0)},has(o){return wc.call(this,o,!0)},add:Cr("add"),set:Cr("set"),delete:Cr("delete"),clear:Cr("clear"),forEach:yc(!0,!1)},r={get(o){return gc(this,o,!0,!0)},get size(){return bc(this,!0)},has(o){return wc.call(this,o,!0)},add:Cr("add"),set:Cr("set"),delete:Cr("delete"),clear:Cr("clear"),forEach:yc(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(o=>{e[o]=vc(o,!1,!1),n[o]=vc(o,!0,!1),t[o]=vc(o,!1,!0),r[o]=vc(o,!0,!0)}),[e,n,t,r]}const[U5,F5,j5,W5]=L5();function E0(e,t){const n=t?e?W5:j5:e?F5:U5;return(r,i,o)=>i==="__v_isReactive"?!e:i==="__v_isReadonly"?e:i==="__v_raw"?r:Reflect.get(je(n,i)&&i in r?n:r,i,o)}const H5={get:E0(!1,!1)},z5={get:E0(!1,!0)},q5={get:E0(!0,!1)},Lg=new WeakMap,Ug=new WeakMap,Fg=new WeakMap,V5=new WeakMap;function G5(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function K5(e){return e.__v_skip||!Object.isExtensible(e)?0:G5(u5(e))}function Xo(e){return Eo(e)?e:T0(e,!1,Bg,H5,Lg)}function Z5(e){return T0(e,!1,B5,z5,Ug)}function jg(e){return T0(e,!0,M5,q5,Fg)}function T0(e,t,n,r,i){if(!Qe(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const o=i.get(e);if(o)return o;const s=K5(e);if(s===0)return e;const a=new Proxy(e,s===2?r:n);return i.set(e,a),a}function go(e){return Eo(e)?go(e.__v_raw):!!(e&&e.__v_isReactive)}function Eo(e){return!!(e&&e.__v_isReadonly)}function Zc(e){return!!(e&&e.__v_isShallow)}function Wg(e){return go(e)||Eo(e)}function He(e){const t=e&&e.__v_raw;return t?He(t):e}function Hg(e){return Kc(e,"__v_skip",!0),e}const Qs=e=>Qe(e)?Xo(e):e,S0=e=>Qe(e)?jg(e):e;function zg(e){kr&&wn&&(e=He(e),Ng(e.dep||(e.dep=v0())))}function qg(e,t){e=He(e);const n=e.dep;n&&Jd(n)}function At(e){return!!(e&&e.__v_isRef===!0)}function J5(e){return Vg(e,!1)}function Y5(e){return Vg(e,!0)}function Vg(e,t){return At(e)?e:new X5(e,t)}class X5{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:He(t),this._value=n?t:Qs(t)}get value(){return zg(this),this._value}set value(t){const n=this.__v_isShallow||Zc(t)||Eo(t);t=n?t:He(t),Ys(t,this._rawValue)&&(this._rawValue=t,this._value=n?t:Qs(t),qg(this))}}function wo(e){return At(e)?e.value:e}const Q5={get:(e,t,n)=>wo(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const i=e[t];return At(i)&&!At(n)?(i.value=n,!0):Reflect.set(e,t,n,r)}};function Gg(e){return go(e)?e:new Proxy(e,Q5)}class e3{constructor(t,n,r,i){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new x0(t,()=>{this._dirty||(this._dirty=!0,qg(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=r}get value(){const t=He(this);return zg(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function t3(e,t,n=!1){let r,i;const o=Re(e);return o?(r=e,i=_n):(r=e.get,i=e.set),new e3(r,i,o||!i,n)}function Mr(e,t,n,r){let i;try{i=r?e(...r):e()}catch(o){Gl(o,t,n)}return i}function Cn(e,t,n,r){if(Re(e)){const o=Mr(e,t,n,r);return o&&Eg(o)&&o.catch(s=>{Gl(s,t,n)}),o}const i=[];for(let o=0;o<e.length;o++)i.push(Cn(e[o],t,n,r));return i}function Gl(e,t,n,r=!0){const i=t?t.vnode:null;if(t){let o=t.parent;const s=t.proxy,a=n;for(;o;){const u=o.ec;if(u){for(let l=0;l<u.length;l++)if(u[l](e,s,a)===!1)return}o=o.parent}const c=t.appContext.config.errorHandler;if(c){Mr(c,null,10,[e,s,a]);return}}n3(e,n,i,r)}function n3(e,t,n,r=!0){console.error(e)}let ea=!1,Yd=!1;const Tt=[];let Fn=0;const bo=[];let cr=null,gi=0;const Kg=Promise.resolve();let A0=null;function Zg(e){const t=A0||Kg;return e?t.then(this?e.bind(this):e):t}function r3(e){let t=Fn+1,n=Tt.length;for(;t<n;){const r=t+n>>>1;ta(Tt[r])<e?t=r+1:n=r}return t}function $0(e){(!Tt.length||!Tt.includes(e,ea&&e.allowRecurse?Fn+1:Fn))&&(e.id==null?Tt.push(e):Tt.splice(r3(e.id),0,e),Jg())}function Jg(){!ea&&!Yd&&(Yd=!0,A0=Kg.then(Xg))}function i3(e){const t=Tt.indexOf(e);t>Fn&&Tt.splice(t,1)}function o3(e){Se(e)?bo.push(...e):(!cr||!cr.includes(e,e.allowRecurse?gi+1:gi))&&bo.push(e),Jg()}function Ap(e,t=ea?Fn+1:0){for(;t<Tt.length;t++){const n=Tt[t];n&&n.pre&&(Tt.splice(t,1),t--,n())}}function Yg(e){if(bo.length){const t=[...new Set(bo)];if(bo.length=0,cr){cr.push(...t);return}for(cr=t,cr.sort((n,r)=>ta(n)-ta(r)),gi=0;gi<cr.length;gi++)cr[gi]();cr=null,gi=0}}const ta=e=>e.id==null?1/0:e.id,s3=(e,t)=>{const n=ta(e)-ta(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function Xg(e){Yd=!1,ea=!0,Tt.sort(s3);const t=_n;try{for(Fn=0;Fn<Tt.length;Fn++){const n=Tt[Fn];n&&n.active!==!1&&Mr(n,null,14)}}finally{Fn=0,Tt.length=0,Yg(),ea=!1,A0=null,(Tt.length||bo.length)&&Xg()}}function a3(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||nt;let i=n;const o=t.startsWith("update:"),s=o&&t.slice(7);if(s&&s in r){const l=`${s==="modelValue"?"model":s}Modifiers`,{number:d,trim:p}=r[l]||nt;p&&(i=n.map(g=>pt(g)?g.trim():g)),d&&(i=n.map(qd))}let a,c=r[a=Qu(t)]||r[a=Qu(zn(t))];!c&&o&&(c=r[a=Qu(Ko(t))]),c&&Cn(c,e,6,i);const u=r[a+"Once"];if(u){if(!e.emitted)e.emitted={};else if(e.emitted[a])return;e.emitted[a]=!0,Cn(u,e,6,i)}}function Qg(e,t,n=!1){const r=t.emitsCache,i=r.get(e);if(i!==void 0)return i;const o=e.emits;let s={},a=!1;if(!Re(e)){const c=u=>{const l=Qg(u,t,!0);l&&(a=!0,yt(s,l))};!n&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}return!o&&!a?(Qe(e)&&r.set(e,null),null):(Se(o)?o.forEach(c=>s[c]=null):yt(s,o),Qe(e)&&r.set(e,s),s)}function Kl(e,t){return!e||!jl(t)?!1:(t=t.slice(2).replace(/Once$/,""),je(e,t[0].toLowerCase()+t.slice(1))||je(e,Ko(t))||je(e,t))}let rn=null,e2=null;function Jc(e){const t=rn;return rn=e,e2=e&&e.type.__scopeId||null,t}function St(e,t=rn,n){if(!t||e._n)return e;const r=(...i)=>{r._d&&Lp(-1);const o=Jc(t);let s;try{s=e(...i)}finally{Jc(o),r._d&&Lp(1)}return s};return r._n=!0,r._c=!0,r._d=!0,r}function ed(e){const{type:t,vnode:n,proxy:r,withProxy:i,props:o,propsOptions:[s],slots:a,attrs:c,emit:u,render:l,renderCache:d,data:p,setupState:g,ctx:w,inheritAttrs:y}=e;let x,E;const b=Jc(e);try{if(n.shapeFlag&4){const _=i||r;x=Un(l.call(_,_,d,o,g,p,w)),E=c}else{const _=t;x=Un(_.length>1?_(o,{attrs:c,slots:a,emit:u}):_(o,null)),E=t.props?c:c3(c)}}catch(_){Fs.length=0,Gl(_,e,1),x=Fe($i)}let C=x;if(E&&y!==!1){const _=Object.keys(E),{shapeFlag:T}=C;_.length&&T&7&&(s&&_.some(g0)&&(E=l3(E,s)),C=To(C,E))}return n.dirs&&(C=To(C),C.dirs=C.dirs?C.dirs.concat(n.dirs):n.dirs),n.transition&&(C.transition=n.transition),x=C,Jc(b),x}const c3=e=>{let t;for(const n in e)(n==="class"||n==="style"||jl(n))&&((t||(t={}))[n]=e[n]);return t},l3=(e,t)=>{const n={};for(const r in e)(!g0(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function u3(e,t,n){const{props:r,children:i,component:o}=e,{props:s,children:a,patchFlag:c}=t,u=o.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?$p(r,s,u):!!s;if(c&8){const l=t.dynamicProps;for(let d=0;d<l.length;d++){const p=l[d];if(s[p]!==r[p]&&!Kl(u,p))return!0}}}else return(i||a)&&(!a||!a.$stable)?!0:r===s?!1:r?s?$p(r,s,u):!0:!!s;return!1}function $p(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let i=0;i<r.length;i++){const o=r[i];if(t[o]!==e[o]&&!Kl(n,o))return!0}return!1}function d3({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const f3=e=>e.__isSuspense;function h3(e,t){t&&t.pendingBranch?Se(e)?t.effects.push(...e):t.effects.push(e):o3(e)}const xc={};function yo(e,t,n){return t2(e,t,n)}function t2(e,t,{immediate:n,deep:r,flush:i,onTrack:o,onTrigger:s}=nt){var a;const c=_5()===((a=xt)==null?void 0:a.scope)?xt:null;let u,l=!1,d=!1;if(At(e)?(u=()=>e.value,l=Zc(e)):go(e)?(u=()=>e,r=!0):Se(e)?(d=!0,l=e.some(_=>go(_)||Zc(_)),u=()=>e.map(_=>{if(At(_))return _.value;if(go(_))return yi(_);if(Re(_))return Mr(_,c,2)})):Re(e)?t?u=()=>Mr(e,c,2):u=()=>{if(!(c&&c.isUnmounted))return p&&p(),Cn(e,c,3,[g])}:u=_n,t&&r){const _=u;u=()=>yi(_())}let p,g=_=>{p=b.onStop=()=>{Mr(_,c,4)}},w;if(ra)if(g=_n,t?n&&Cn(t,c,3,[u(),d?[]:void 0,g]):u(),i==="sync"){const _=c6();w=_.__watcherHandles||(_.__watcherHandles=[])}else return _n;let y=d?new Array(e.length).fill(xc):xc;const x=()=>{if(b.active)if(t){const _=b.run();(r||l||(d?_.some((T,$)=>Ys(T,y[$])):Ys(_,y)))&&(p&&p(),Cn(t,c,3,[_,y===xc?void 0:d&&y[0]===xc?[]:y,g]),y=_)}else b.run()};x.allowRecurse=!!t;let E;i==="sync"?E=x:i==="post"?E=()=>Bt(x,c&&c.suspense):(x.pre=!0,c&&(x.id=c.uid),E=()=>$0(x));const b=new x0(u,E);t?n?x():y=b.run():i==="post"?Bt(b.run.bind(b),c&&c.suspense):b.run();const C=()=>{b.stop(),c&&c.scope&&w0(c.scope.effects,b)};return w&&w.push(C),C}function p3(e,t,n){const r=this.proxy,i=pt(e)?e.includes(".")?n2(r,e):()=>r[e]:e.bind(r,r);let o;Re(t)?o=t:(o=t.handler,n=t);const s=xt;So(this);const a=t2(i,o.bind(r),n);return s?So(s):Ei(),a}function n2(e,t){const n=t.split(".");return()=>{let r=e;for(let i=0;i<n.length&&r;i++)r=r[n[i]];return r}}function yi(e,t){if(!Qe(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),At(e))yi(e.value,t);else if(Se(e))for(let n=0;n<e.length;n++)yi(e[n],t);else if(Wl(e)||mo(e))e.forEach(n=>{yi(n,t)});else if(Sg(e))for(const n in e)yi(e[n],t);return e}function zR(e,t){const n=rn;if(n===null)return e;const r=Ql(n)||n.proxy,i=e.dirs||(e.dirs=[]);for(let o=0;o<t.length;o++){let[s,a,c,u=nt]=t[o];s&&(Re(s)&&(s={mounted:s,updated:s}),s.deep&&yi(a),i.push({dir:s,instance:r,value:a,oldValue:void 0,arg:c,modifiers:u}))}return e}function ci(e,t,n,r){const i=e.dirs,o=t&&t.dirs;for(let s=0;s<i.length;s++){const a=i[s];o&&(a.oldValue=o[s].value);let c=a.dir[r];c&&(Jo(),Cn(c,n,8,[e.el,a,e,t]),Yo())}}function r2(e,t){return Re(e)?(()=>yt({name:e.name},t,{setup:e}))():e}const kc=e=>!!e.type.__asyncLoader,i2=e=>e.type.__isKeepAlive;function m3(e,t){o2(e,"a",t)}function g3(e,t){o2(e,"da",t)}function o2(e,t,n=xt){const r=e.__wdc||(e.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return e()});if(Zl(t,r,n),n){let i=n.parent;for(;i&&i.parent;)i2(i.parent.vnode)&&w3(r,t,n,i),i=i.parent}}function w3(e,t,n,r){const i=Zl(t,e,r,!0);s2(()=>{w0(r[t],i)},n)}function Zl(e,t,n=xt,r=!1){if(n){const i=n[e]||(n[e]=[]),o=t.__weh||(t.__weh=(...s)=>{if(n.isUnmounted)return;Jo(),So(n);const a=Cn(t,n,e,s);return Ei(),Yo(),a});return r?i.unshift(o):i.push(o),o}}const yr=e=>(t,n=xt)=>(!ra||e==="sp")&&Zl(e,(...r)=>t(...r),n),b3=yr("bm"),y3=yr("m"),v3=yr("bu"),x3=yr("u"),_3=yr("bum"),s2=yr("um"),C3=yr("sp"),E3=yr("rtg"),T3=yr("rtc");function S3(e,t=xt){Zl("ec",e,t)}const a2="components";function mn(e,t){return $3(a2,e,!0,t)||e}const A3=Symbol.for("v-ndc");function $3(e,t,n=!0,r=!1){const i=rn||xt;if(i){const o=i.type;if(e===a2){const a=o6(o,!1);if(a&&(a===t||a===zn(t)||a===zl(zn(t))))return o}const s=Pp(i[e]||o[e],t)||Pp(i.appContext[e],t);return!s&&r?o:s}}function Pp(e,t){return e&&(e[t]||e[zn(t)]||e[zl(zn(t))])}function P3(e,t,n,r){let i;const o=n&&n[r];if(Se(e)||pt(e)){i=new Array(e.length);for(let s=0,a=e.length;s<a;s++)i[s]=t(e[s],s,void 0,o&&o[s])}else if(typeof e=="number"){i=new Array(e);for(let s=0;s<e;s++)i[s]=t(s+1,s,void 0,o&&o[s])}else if(Qe(e))if(e[Symbol.iterator])i=Array.from(e,(s,a)=>t(s,a,void 0,o&&o[a]));else{const s=Object.keys(e);i=new Array(s.length);for(let a=0,c=s.length;a<c;a++){const u=s[a];i[a]=t(e[u],u,a,o&&o[a])}}else i=[];return n&&(n[r]=i),i}const Xd=e=>e?b2(e)?Ql(e)||e.proxy:Xd(e.parent):null,Us=yt(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Xd(e.parent),$root:e=>Xd(e.root),$emit:e=>e.emit,$options:e=>P0(e),$forceUpdate:e=>e.f||(e.f=()=>$0(e.update)),$nextTick:e=>e.n||(e.n=Zg.bind(e.proxy)),$watch:e=>p3.bind(e)}),td=(e,t)=>e!==nt&&!e.__isScriptSetup&&je(e,t),O3={get({_:e},t){const{ctx:n,setupState:r,data:i,props:o,accessCache:s,type:a,appContext:c}=e;let u;if(t[0]!=="$"){const g=s[t];if(g!==void 0)switch(g){case 1:return r[t];case 2:return i[t];case 4:return n[t];case 3:return o[t]}else{if(td(r,t))return s[t]=1,r[t];if(i!==nt&&je(i,t))return s[t]=2,i[t];if((u=e.propsOptions[0])&&je(u,t))return s[t]=3,o[t];if(n!==nt&&je(n,t))return s[t]=4,n[t];Qd&&(s[t]=0)}}const l=Us[t];let d,p;if(l)return t==="$attrs"&&Wt(e,"get",t),l(e);if((d=a.__cssModules)&&(d=d[t]))return d;if(n!==nt&&je(n,t))return s[t]=4,n[t];if(p=c.config.globalProperties,je(p,t))return p[t]},set({_:e},t,n){const{data:r,setupState:i,ctx:o}=e;return td(i,t)?(i[t]=n,!0):r!==nt&&je(r,t)?(r[t]=n,!0):je(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(o[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:i,propsOptions:o}},s){let a;return!!n[s]||e!==nt&&je(e,s)||td(t,s)||(a=o[0])&&je(a,s)||je(r,s)||je(Us,s)||je(i.config.globalProperties,s)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:je(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function Op(e){return Se(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let Qd=!0;function D3(e){const t=P0(e),n=e.proxy,r=e.ctx;Qd=!1,t.beforeCreate&&Dp(t.beforeCreate,e,"bc");const{data:i,computed:o,methods:s,watch:a,provide:c,inject:u,created:l,beforeMount:d,mounted:p,beforeUpdate:g,updated:w,activated:y,deactivated:x,beforeDestroy:E,beforeUnmount:b,destroyed:C,unmounted:_,render:T,renderTracked:$,renderTriggered:h,errorCaptured:S,serverPrefetch:U,expose:D,inheritAttrs:R,components:L,directives:H,filters:Z}=t;if(u&&I3(u,r,null),s)for(const q in s){const ne=s[q];Re(ne)&&(r[q]=ne.bind(n))}if(i){const q=i.call(n,n);Qe(q)&&(e.data=Xo(q))}if(Qd=!0,o)for(const q in o){const ne=o[q],fe=Re(ne)?ne.bind(n,n):Re(ne.get)?ne.get.bind(n,n):_n,Ae=!Re(ne)&&Re(ne.set)?ne.set.bind(n):_n,be=Gt({get:fe,set:Ae});Object.defineProperty(r,q,{enumerable:!0,configurable:!0,get:()=>be.value,set:pe=>be.value=pe})}if(a)for(const q in a)c2(a[q],r,n,q);if(c){const q=Re(c)?c.call(n):c;Reflect.ownKeys(q).forEach(ne=>{Mc(ne,q[ne])})}l&&Dp(l,e,"c");function J(q,ne){Se(ne)?ne.forEach(fe=>q(fe.bind(n))):ne&&q(ne.bind(n))}if(J(b3,d),J(y3,p),J(v3,g),J(x3,w),J(m3,y),J(g3,x),J(S3,S),J(T3,$),J(E3,h),J(_3,b),J(s2,_),J(C3,U),Se(D))if(D.length){const q=e.exposed||(e.exposed={});D.forEach(ne=>{Object.defineProperty(q,ne,{get:()=>n[ne],set:fe=>n[ne]=fe})})}else e.exposed||(e.exposed={});T&&e.render===_n&&(e.render=T),R!=null&&(e.inheritAttrs=R),L&&(e.components=L),H&&(e.directives=H)}function I3(e,t,n=_n){Se(e)&&(e=ef(e));for(const r in e){const i=e[r];let o;Qe(i)?"default"in i?o=Hn(i.from||r,i.default,!0):o=Hn(i.from||r):o=Hn(i),At(o)?Object.defineProperty(t,r,{enumerable:!0,configurable:!0,get:()=>o.value,set:s=>o.value=s}):t[r]=o}}function Dp(e,t,n){Cn(Se(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function c2(e,t,n,r){const i=r.includes(".")?n2(n,r):()=>n[r];if(pt(e)){const o=t[e];Re(o)&&yo(i,o)}else if(Re(e))yo(i,e.bind(n));else if(Qe(e))if(Se(e))e.forEach(o=>c2(o,t,n,r));else{const o=Re(e.handler)?e.handler.bind(n):t[e.handler];Re(o)&&yo(i,o,e)}}function P0(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:i,optionsCache:o,config:{optionMergeStrategies:s}}=e.appContext,a=o.get(t);let c;return a?c=a:!i.length&&!n&&!r?c=t:(c={},i.length&&i.forEach(u=>Yc(c,u,s,!0)),Yc(c,t,s)),Qe(t)&&o.set(t,c),c}function Yc(e,t,n,r=!1){const{mixins:i,extends:o}=t;o&&Yc(e,o,n,!0),i&&i.forEach(s=>Yc(e,s,n,!0));for(const s in t)if(!(r&&s==="expose")){const a=R3[s]||n&&n[s];e[s]=a?a(e[s],t[s]):t[s]}return e}const R3={data:Ip,props:Rp,emits:Rp,methods:Os,computed:Os,beforeCreate:Ot,created:Ot,beforeMount:Ot,mounted:Ot,beforeUpdate:Ot,updated:Ot,beforeDestroy:Ot,beforeUnmount:Ot,destroyed:Ot,unmounted:Ot,activated:Ot,deactivated:Ot,errorCaptured:Ot,serverPrefetch:Ot,components:Os,directives:Os,watch:k3,provide:Ip,inject:N3};function Ip(e,t){return t?e?function(){return yt(Re(e)?e.call(this,this):e,Re(t)?t.call(this,this):t)}:t:e}function N3(e,t){return Os(ef(e),ef(t))}function ef(e){if(Se(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function Ot(e,t){return e?[...new Set([].concat(e,t))]:t}function Os(e,t){return e?yt(Object.create(null),e,t):t}function Rp(e,t){return e?Se(e)&&Se(t)?[...new Set([...e,...t])]:yt(Object.create(null),Op(e),Op(t??{})):t}function k3(e,t){if(!e)return t;if(!t)return e;const n=yt(Object.create(null),e);for(const r in t)n[r]=Ot(e[r],t[r]);return n}function l2(){return{app:null,config:{isNativeTag:a5,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let M3=0;function B3(e,t){return function(r,i=null){Re(r)||(r=yt({},r)),i!=null&&!Qe(i)&&(i=null);const o=l2(),s=new Set;let a=!1;const c=o.app={_uid:M3++,_component:r,_props:i,_container:null,_context:o,_instance:null,version:l6,get config(){return o.config},set config(u){},use(u,...l){return s.has(u)||(u&&Re(u.install)?(s.add(u),u.install(c,...l)):Re(u)&&(s.add(u),u(c,...l))),c},mixin(u){return o.mixins.includes(u)||o.mixins.push(u),c},component(u,l){return l?(o.components[u]=l,c):o.components[u]},directive(u,l){return l?(o.directives[u]=l,c):o.directives[u]},mount(u,l,d){if(!a){const p=Fe(r,i);return p.appContext=o,l&&t?t(p,u):e(p,u,d),a=!0,c._container=u,u.__vue_app__=c,Ql(p.component)||p.component.proxy}},unmount(){a&&(e(null,c._container),delete c._container.__vue_app__)},provide(u,l){return o.provides[u]=l,c},runWithContext(u){Xc=c;try{return u()}finally{Xc=null}}};return c}}let Xc=null;function Mc(e,t){if(xt){let n=xt.provides;const r=xt.parent&&xt.parent.provides;r===n&&(n=xt.provides=Object.create(r)),n[e]=t}}function Hn(e,t,n=!1){const r=xt||rn;if(r||Xc){const i=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:Xc._context.provides;if(i&&e in i)return i[e];if(arguments.length>1)return n&&Re(t)?t.call(r&&r.proxy):t}}function L3(e,t,n,r=!1){const i={},o={};Kc(o,Xl,1),e.propsDefaults=Object.create(null),u2(e,t,i,o);for(const s in e.propsOptions[0])s in i||(i[s]=void 0);n?e.props=r?i:Z5(i):e.type.props?e.props=i:e.props=o,e.attrs=o}function U3(e,t,n,r){const{props:i,attrs:o,vnode:{patchFlag:s}}=e,a=He(i),[c]=e.propsOptions;let u=!1;if((r||s>0)&&!(s&16)){if(s&8){const l=e.vnode.dynamicProps;for(let d=0;d<l.length;d++){let p=l[d];if(Kl(e.emitsOptions,p))continue;const g=t[p];if(c)if(je(o,p))g!==o[p]&&(o[p]=g,u=!0);else{const w=zn(p);i[w]=tf(c,a,w,g,e,!1)}else g!==o[p]&&(o[p]=g,u=!0)}}}else{u2(e,t,i,o)&&(u=!0);let l;for(const d in a)(!t||!je(t,d)&&((l=Ko(d))===d||!je(t,l)))&&(c?n&&(n[d]!==void 0||n[l]!==void 0)&&(i[d]=tf(c,a,d,void 0,e,!0)):delete i[d]);if(o!==a)for(const d in o)(!t||!je(t,d))&&(delete o[d],u=!0)}u&&pr(e,"set","$attrs")}function u2(e,t,n,r){const[i,o]=e.propsOptions;let s=!1,a;if(t)for(let c in t){if(Rc(c))continue;const u=t[c];let l;i&&je(i,l=zn(c))?!o||!o.includes(l)?n[l]=u:(a||(a={}))[l]=u:Kl(e.emitsOptions,c)||(!(c in r)||u!==r[c])&&(r[c]=u,s=!0)}if(o){const c=He(n),u=a||nt;for(let l=0;l<o.length;l++){const d=o[l];n[d]=tf(i,c,d,u[d],e,!je(u,d))}}return s}function tf(e,t,n,r,i,o){const s=e[n];if(s!=null){const a=je(s,"default");if(a&&r===void 0){const c=s.default;if(s.type!==Function&&!s.skipFactory&&Re(c)){const{propsDefaults:u}=i;n in u?r=u[n]:(So(i),r=u[n]=c.call(null,t),Ei())}else r=c}s[0]&&(o&&!a?r=!1:s[1]&&(r===""||r===Ko(n))&&(r=!0))}return r}function d2(e,t,n=!1){const r=t.propsCache,i=r.get(e);if(i)return i;const o=e.props,s={},a=[];let c=!1;if(!Re(e)){const l=d=>{c=!0;const[p,g]=d2(d,t,!0);yt(s,p),g&&a.push(...g)};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}if(!o&&!c)return Qe(e)&&r.set(e,po),po;if(Se(o))for(let l=0;l<o.length;l++){const d=zn(o[l]);Np(d)&&(s[d]=nt)}else if(o)for(const l in o){const d=zn(l);if(Np(d)){const p=o[l],g=s[d]=Se(p)||Re(p)?{type:p}:yt({},p);if(g){const w=Bp(Boolean,g.type),y=Bp(String,g.type);g[0]=w>-1,g[1]=y<0||w<y,(w>-1||je(g,"default"))&&a.push(d)}}}const u=[s,a];return Qe(e)&&r.set(e,u),u}function Np(e){return e[0]!=="$"}function kp(e){const t=e&&e.toString().match(/^\s*(function|class) (\w+)/);return t?t[2]:e===null?"null":""}function Mp(e,t){return kp(e)===kp(t)}function Bp(e,t){return Se(t)?t.findIndex(n=>Mp(n,e)):Re(t)&&Mp(t,e)?0:-1}const f2=e=>e[0]==="_"||e==="$stable",O0=e=>Se(e)?e.map(Un):[Un(e)],F3=(e,t,n)=>{if(t._n)return t;const r=St((...i)=>O0(t(...i)),n);return r._c=!1,r},h2=(e,t,n)=>{const r=e._ctx;for(const i in e){if(f2(i))continue;const o=e[i];if(Re(o))t[i]=F3(i,o,r);else if(o!=null){const s=O0(o);t[i]=()=>s}}},p2=(e,t)=>{const n=O0(t);e.slots.default=()=>n},j3=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=He(t),Kc(t,"_",n)):h2(t,e.slots={})}else e.slots={},t&&p2(e,t);Kc(e.slots,Xl,1)},W3=(e,t,n)=>{const{vnode:r,slots:i}=e;let o=!0,s=nt;if(r.shapeFlag&32){const a=t._;a?n&&a===1?o=!1:(yt(i,t),!n&&a===1&&delete i._):(o=!t.$stable,h2(t,i)),s=t}else t&&(p2(e,t),s={default:1});if(o)for(const a in i)!f2(a)&&!(a in s)&&delete i[a]};function nf(e,t,n,r,i=!1){if(Se(e)){e.forEach((p,g)=>nf(p,t&&(Se(t)?t[g]:t),n,r,i));return}if(kc(r)&&!i)return;const o=r.shapeFlag&4?Ql(r.component)||r.component.proxy:r.el,s=i?null:o,{i:a,r:c}=e,u=t&&t.r,l=a.refs===nt?a.refs={}:a.refs,d=a.setupState;if(u!=null&&u!==c&&(pt(u)?(l[u]=null,je(d,u)&&(d[u]=null)):At(u)&&(u.value=null)),Re(c))Mr(c,a,12,[s,l]);else{const p=pt(c),g=At(c);if(p||g){const w=()=>{if(e.f){const y=p?je(d,c)?d[c]:l[c]:c.value;i?Se(y)&&w0(y,o):Se(y)?y.includes(o)||y.push(o):p?(l[c]=[o],je(d,c)&&(d[c]=l[c])):(c.value=[o],e.k&&(l[e.k]=c.value))}else p?(l[c]=s,je(d,c)&&(d[c]=s)):g&&(c.value=s,e.k&&(l[e.k]=s))};s?(w.id=-1,Bt(w,n)):w()}}}const Bt=h3;function H3(e){return z3(e)}function z3(e,t){const n=Vd();n.__VUE__=!0;const{insert:r,remove:i,patchProp:o,createElement:s,createText:a,createComment:c,setText:u,setElementText:l,parentNode:d,nextSibling:p,setScopeId:g=_n,insertStaticContent:w}=e,y=(P,O,N,W=null,G=null,X=null,le=!1,re=null,te=!!O.dynamicChildren)=>{if(P===O)return;P&&!gs(P,O)&&(W=F(P),pe(P,G,X,!0),P=null),O.patchFlag===-2&&(te=!1,O.dynamicChildren=null);const{type:V,ref:oe,shapeFlag:se}=O;switch(V){case Jl:x(P,O,N,W);break;case $i:E(P,O,N,W);break;case Bc:P==null&&b(O,N,W,le);break;case gn:L(P,O,N,W,G,X,le,re,te);break;default:se&1?T(P,O,N,W,G,X,le,re,te):se&6?H(P,O,N,W,G,X,le,re,te):(se&64||se&128)&&V.process(P,O,N,W,G,X,le,re,te,Y)}oe!=null&&G&&nf(oe,P&&P.ref,X,O||P,!O)},x=(P,O,N,W)=>{if(P==null)r(O.el=a(O.children),N,W);else{const G=O.el=P.el;O.children!==P.children&&u(G,O.children)}},E=(P,O,N,W)=>{P==null?r(O.el=c(O.children||""),N,W):O.el=P.el},b=(P,O,N,W)=>{[P.el,P.anchor]=w(P.children,O,N,W,P.el,P.anchor)},C=({el:P,anchor:O},N,W)=>{let G;for(;P&&P!==O;)G=p(P),r(P,N,W),P=G;r(O,N,W)},_=({el:P,anchor:O})=>{let N;for(;P&&P!==O;)N=p(P),i(P),P=N;i(O)},T=(P,O,N,W,G,X,le,re,te)=>{le=le||O.type==="svg",P==null?$(O,N,W,G,X,le,re,te):U(P,O,G,X,le,re,te)},$=(P,O,N,W,G,X,le,re)=>{let te,V;const{type:oe,props:se,shapeFlag:he,transition:me,dirs:xe}=P;if(te=P.el=s(P.type,X,se&&se.is,se),he&8?l(te,P.children):he&16&&S(P.children,te,null,W,G,X&&oe!=="foreignObject",le,re),xe&&ci(P,null,W,"created"),h(te,P,P.scopeId,le,W),se){for(const f in se)f!=="value"&&!Rc(f)&&o(te,f,null,se[f],X,P.children,W,G,Te);"value"in se&&o(te,"value",null,se.value),(V=se.onVnodeBeforeMount)&&In(V,W,P)}xe&&ci(P,null,W,"beforeMount");const v=(!G||G&&!G.pendingBranch)&&me&&!me.persisted;v&&me.beforeEnter(te),r(te,O,N),((V=se&&se.onVnodeMounted)||v||xe)&&Bt(()=>{V&&In(V,W,P),v&&me.enter(te),xe&&ci(P,null,W,"mounted")},G)},h=(P,O,N,W,G)=>{if(N&&g(P,N),W)for(let X=0;X<W.length;X++)g(P,W[X]);if(G){let X=G.subTree;if(O===X){const le=G.vnode;h(P,le,le.scopeId,le.slotScopeIds,G.parent)}}},S=(P,O,N,W,G,X,le,re,te=0)=>{for(let V=te;V<P.length;V++){const oe=P[V]=re?$r(P[V]):Un(P[V]);y(null,oe,O,N,W,G,X,le,re)}},U=(P,O,N,W,G,X,le)=>{const re=O.el=P.el;let{patchFlag:te,dynamicChildren:V,dirs:oe}=O;te|=P.patchFlag&16;const se=P.props||nt,he=O.props||nt;let me;N&&li(N,!1),(me=he.onVnodeBeforeUpdate)&&In(me,N,O,P),oe&&ci(O,P,N,"beforeUpdate"),N&&li(N,!0);const xe=G&&O.type!=="foreignObject";if(V?D(P.dynamicChildren,V,re,N,W,xe,X):le||ne(P,O,re,null,N,W,xe,X,!1),te>0){if(te&16)R(re,O,se,he,N,W,G);else if(te&2&&se.class!==he.class&&o(re,"class",null,he.class,G),te&4&&o(re,"style",se.style,he.style,G),te&8){const v=O.dynamicProps;for(let f=0;f<v.length;f++){const m=v[f],A=se[m],I=he[m];(I!==A||m==="value")&&o(re,m,A,I,G,P.children,N,W,Te)}}te&1&&P.children!==O.children&&l(re,O.children)}else!le&&V==null&&R(re,O,se,he,N,W,G);((me=he.onVnodeUpdated)||oe)&&Bt(()=>{me&&In(me,N,O,P),oe&&ci(O,P,N,"updated")},W)},D=(P,O,N,W,G,X,le)=>{for(let re=0;re<O.length;re++){const te=P[re],V=O[re],oe=te.el&&(te.type===gn||!gs(te,V)||te.shapeFlag&70)?d(te.el):N;y(te,V,oe,null,W,G,X,le,!0)}},R=(P,O,N,W,G,X,le)=>{if(N!==W){if(N!==nt)for(const re in N)!Rc(re)&&!(re in W)&&o(P,re,N[re],null,le,O.children,G,X,Te);for(const re in W){if(Rc(re))continue;const te=W[re],V=N[re];te!==V&&re!=="value"&&o(P,re,V,te,le,O.children,G,X,Te)}"value"in W&&o(P,"value",N.value,W.value)}},L=(P,O,N,W,G,X,le,re,te)=>{const V=O.el=P?P.el:a(""),oe=O.anchor=P?P.anchor:a("");let{patchFlag:se,dynamicChildren:he,slotScopeIds:me}=O;me&&(re=re?re.concat(me):me),P==null?(r(V,N,W),r(oe,N,W),S(O.children,N,oe,G,X,le,re,te)):se>0&&se&64&&he&&P.dynamicChildren?(D(P.dynamicChildren,he,N,G,X,le,re),(O.key!=null||G&&O===G.subTree)&&m2(P,O,!0)):ne(P,O,N,oe,G,X,le,re,te)},H=(P,O,N,W,G,X,le,re,te)=>{O.slotScopeIds=re,P==null?O.shapeFlag&512?G.ctx.activate(O,N,W,le,te):Z(O,N,W,G,X,le,te):z(P,O,te)},Z=(P,O,N,W,G,X,le)=>{const re=P.component=e6(P,W,G);if(i2(P)&&(re.ctx.renderer=Y),t6(re),re.asyncDep){if(G&&G.registerDep(re,J),!P.el){const te=re.subTree=Fe($i);E(null,te,O,N)}return}J(re,P,O,N,G,X,le)},z=(P,O,N)=>{const W=O.component=P.component;if(u3(P,O,N))if(W.asyncDep&&!W.asyncResolved){q(W,O,N);return}else W.next=O,i3(W.update),W.update();else O.el=P.el,W.vnode=O},J=(P,O,N,W,G,X,le)=>{const re=()=>{if(P.isMounted){let{next:oe,bu:se,u:he,parent:me,vnode:xe}=P,v=oe,f;li(P,!1),oe?(oe.el=xe.el,q(P,oe,le)):oe=xe,se&&Nc(se),(f=oe.props&&oe.props.onVnodeBeforeUpdate)&&In(f,me,oe,xe),li(P,!0);const m=ed(P),A=P.subTree;P.subTree=m,y(A,m,d(A.el),F(A),P,G,X),oe.el=m.el,v===null&&d3(P,m.el),he&&Bt(he,G),(f=oe.props&&oe.props.onVnodeUpdated)&&Bt(()=>In(f,me,oe,xe),G)}else{let oe;const{el:se,props:he}=O,{bm:me,m:xe,parent:v}=P,f=kc(O);if(li(P,!1),me&&Nc(me),!f&&(oe=he&&he.onVnodeBeforeMount)&&In(oe,v,O),li(P,!0),se&&ye){const m=()=>{P.subTree=ed(P),ye(se,P.subTree,P,G,null)};f?O.type.__asyncLoader().then(()=>!P.isUnmounted&&m()):m()}else{const m=P.subTree=ed(P);y(null,m,N,W,P,G,X),O.el=m.el}if(xe&&Bt(xe,G),!f&&(oe=he&&he.onVnodeMounted)){const m=O;Bt(()=>In(oe,v,m),G)}(O.shapeFlag&256||v&&kc(v.vnode)&&v.vnode.shapeFlag&256)&&P.a&&Bt(P.a,G),P.isMounted=!0,O=N=W=null}},te=P.effect=new x0(re,()=>$0(V),P.scope),V=P.update=()=>te.run();V.id=P.uid,li(P,!0),V()},q=(P,O,N)=>{O.component=P;const W=P.vnode.props;P.vnode=O,P.next=null,U3(P,O.props,W,N),W3(P,O.children,N),Jo(),Ap(),Yo()},ne=(P,O,N,W,G,X,le,re,te=!1)=>{const V=P&&P.children,oe=P?P.shapeFlag:0,se=O.children,{patchFlag:he,shapeFlag:me}=O;if(he>0){if(he&128){Ae(V,se,N,W,G,X,le,re,te);return}else if(he&256){fe(V,se,N,W,G,X,le,re,te);return}}me&8?(oe&16&&Te(V,G,X),se!==V&&l(N,se)):oe&16?me&16?Ae(V,se,N,W,G,X,le,re,te):Te(V,G,X,!0):(oe&8&&l(N,""),me&16&&S(se,N,W,G,X,le,re,te))},fe=(P,O,N,W,G,X,le,re,te)=>{P=P||po,O=O||po;const V=P.length,oe=O.length,se=Math.min(V,oe);let he;for(he=0;he<se;he++){const me=O[he]=te?$r(O[he]):Un(O[he]);y(P[he],me,N,null,G,X,le,re,te)}V>oe?Te(P,G,X,!0,!1,se):S(O,N,W,G,X,le,re,te,se)},Ae=(P,O,N,W,G,X,le,re,te)=>{let V=0;const oe=O.length;let se=P.length-1,he=oe-1;for(;V<=se&&V<=he;){const me=P[V],xe=O[V]=te?$r(O[V]):Un(O[V]);if(gs(me,xe))y(me,xe,N,null,G,X,le,re,te);else break;V++}for(;V<=se&&V<=he;){const me=P[se],xe=O[he]=te?$r(O[he]):Un(O[he]);if(gs(me,xe))y(me,xe,N,null,G,X,le,re,te);else break;se--,he--}if(V>se){if(V<=he){const me=he+1,xe=me<oe?O[me].el:W;for(;V<=he;)y(null,O[V]=te?$r(O[V]):Un(O[V]),N,xe,G,X,le,re,te),V++}}else if(V>he)for(;V<=se;)pe(P[V],G,X,!0),V++;else{const me=V,xe=V,v=new Map;for(V=xe;V<=he;V++){const Ce=O[V]=te?$r(O[V]):Un(O[V]);Ce.key!=null&&v.set(Ce.key,V)}let f,m=0;const A=he-xe+1;let I=!1,B=0;const j=new Array(A);for(V=0;V<A;V++)j[V]=0;for(V=me;V<=se;V++){const Ce=P[V];if(m>=A){pe(Ce,G,X,!0);continue}let Le;if(Ce.key!=null)Le=v.get(Ce.key);else for(f=xe;f<=he;f++)if(j[f-xe]===0&&gs(Ce,O[f])){Le=f;break}Le===void 0?pe(Ce,G,X,!0):(j[Le-xe]=V+1,Le>=B?B=Le:I=!0,y(Ce,O[Le],N,null,G,X,le,re,te),m++)}const ve=I?q3(j):po;for(f=ve.length-1,V=A-1;V>=0;V--){const Ce=xe+V,Le=O[Ce],et=Ce+1<oe?O[Ce+1].el:W;j[V]===0?y(null,Le,N,et,G,X,le,re,te):I&&(f<0||V!==ve[f]?be(Le,N,et,2):f--)}}},be=(P,O,N,W,G=null)=>{const{el:X,type:le,transition:re,children:te,shapeFlag:V}=P;if(V&6){be(P.component.subTree,O,N,W);return}if(V&128){P.suspense.move(O,N,W);return}if(V&64){le.move(P,O,N,Y);return}if(le===gn){r(X,O,N);for(let se=0;se<te.length;se++)be(te[se],O,N,W);r(P.anchor,O,N);return}if(le===Bc){C(P,O,N);return}if(W!==2&&V&1&&re)if(W===0)re.beforeEnter(X),r(X,O,N),Bt(()=>re.enter(X),G);else{const{leave:se,delayLeave:he,afterLeave:me}=re,xe=()=>r(X,O,N),v=()=>{se(X,()=>{xe(),me&&me()})};he?he(X,xe,v):v()}else r(X,O,N)},pe=(P,O,N,W=!1,G=!1)=>{const{type:X,props:le,ref:re,children:te,dynamicChildren:V,shapeFlag:oe,patchFlag:se,dirs:he}=P;if(re!=null&&nf(re,null,N,P,!0),oe&256){O.ctx.deactivate(P);return}const me=oe&1&&he,xe=!kc(P);let v;if(xe&&(v=le&&le.onVnodeBeforeUnmount)&&In(v,O,P),oe&6)Pe(P.component,N,W);else{if(oe&128){P.suspense.unmount(N,W);return}me&&ci(P,null,O,"beforeUnmount"),oe&64?P.type.remove(P,O,N,G,Y,W):V&&(X!==gn||se>0&&se&64)?Te(V,O,N,!1,!0):(X===gn&&se&384||!G&&oe&16)&&Te(te,O,N),W&&ce(P)}(xe&&(v=le&&le.onVnodeUnmounted)||me)&&Bt(()=>{v&&In(v,O,P),me&&ci(P,null,O,"unmounted")},N)},ce=P=>{const{type:O,el:N,anchor:W,transition:G}=P;if(O===gn){_e(N,W);return}if(O===Bc){_(P);return}const X=()=>{i(N),G&&!G.persisted&&G.afterLeave&&G.afterLeave()};if(P.shapeFlag&1&&G&&!G.persisted){const{leave:le,delayLeave:re}=G,te=()=>le(N,X);re?re(P.el,X,te):te()}else X()},_e=(P,O)=>{let N;for(;P!==O;)N=p(P),i(P),P=N;i(O)},Pe=(P,O,N)=>{const{bum:W,scope:G,update:X,subTree:le,um:re}=P;W&&Nc(W),G.stop(),X&&(X.active=!1,pe(le,P,O,N)),re&&Bt(re,O),Bt(()=>{P.isUnmounted=!0},O),O&&O.pendingBranch&&!O.isUnmounted&&P.asyncDep&&!P.asyncResolved&&P.suspenseId===O.pendingId&&(O.deps--,O.deps===0&&O.resolve())},Te=(P,O,N,W=!1,G=!1,X=0)=>{for(let le=X;le<P.length;le++)pe(P[le],O,N,W,G)},F=P=>P.shapeFlag&6?F(P.component.subTree):P.shapeFlag&128?P.suspense.next():p(P.anchor||P.el),Q=(P,O,N)=>{P==null?O._vnode&&pe(O._vnode,null,null,!0):y(O._vnode||null,P,O,null,null,null,N),Ap(),Yg(),O._vnode=P},Y={p:y,um:pe,m:be,r:ce,mt:Z,mc:S,pc:ne,pbc:D,n:F,o:e};let ie,ye;return t&&([ie,ye]=t(Y)),{render:Q,hydrate:ie,createApp:B3(Q,ie)}}function li({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function m2(e,t,n=!1){const r=e.children,i=t.children;if(Se(r)&&Se(i))for(let o=0;o<r.length;o++){const s=r[o];let a=i[o];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[o]=$r(i[o]),a.el=s.el),n||m2(s,a)),a.type===Jl&&(a.el=s.el)}}function q3(e){const t=e.slice(),n=[0];let r,i,o,s,a;const c=e.length;for(r=0;r<c;r++){const u=e[r];if(u!==0){if(i=n[n.length-1],e[i]<u){t[r]=i,n.push(r);continue}for(o=0,s=n.length-1;o<s;)a=o+s>>1,e[n[a]]<u?o=a+1:s=a;u<e[n[o]]&&(o>0&&(t[r]=n[o-1]),n[o]=r)}}for(o=n.length,s=n[o-1];o-- >0;)n[o]=s,s=t[s];return n}const V3=e=>e.__isTeleport,gn=Symbol.for("v-fgt"),Jl=Symbol.for("v-txt"),$i=Symbol.for("v-cmt"),Bc=Symbol.for("v-stc"),Fs=[];let bn=null;function Ke(e=!1){Fs.push(bn=e?null:[])}function G3(){Fs.pop(),bn=Fs[Fs.length-1]||null}let na=1;function Lp(e){na+=e}function g2(e){return e.dynamicChildren=na>0?bn||po:null,G3(),na>0&&bn&&bn.push(e),e}function ot(e,t,n,r,i,o){return g2(ee(e,t,n,r,i,o,!0))}function Yl(e,t,n,r,i){return g2(Fe(e,t,n,r,i,!0))}function rf(e){return e?e.__v_isVNode===!0:!1}function gs(e,t){return e.type===t.type&&e.key===t.key}const Xl="__vInternal",w2=({key:e})=>e??null,Lc=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?pt(e)||At(e)||Re(e)?{i:rn,r:e,k:t,f:!!n}:e:null);function ee(e,t=null,n=null,r=0,i=null,o=e===gn?0:1,s=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&w2(t),ref:t&&Lc(t),scopeId:e2,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:r,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:rn};return a?(D0(c,n),o&128&&e.normalize(c)):n&&(c.shapeFlag|=pt(n)?8:16),na>0&&!s&&bn&&(c.patchFlag>0||o&6)&&c.patchFlag!==32&&bn.push(c),c}const Fe=K3;function K3(e,t=null,n=null,r=0,i=null,o=!1){if((!e||e===A3)&&(e=$i),rf(e)){const a=To(e,t,!0);return n&&D0(a,n),na>0&&!o&&bn&&(a.shapeFlag&6?bn[bn.indexOf(e)]=a:bn.push(a)),a.patchFlag|=-2,a}if(s6(e)&&(e=e.__vccOpts),t){t=Z3(t);let{class:a,style:c}=t;a&&!pt(a)&&(t.class=Zo(a)),Qe(c)&&(Wg(c)&&!Se(c)&&(c=yt({},c)),t.style=y0(c))}const s=pt(e)?1:f3(e)?128:V3(e)?64:Qe(e)?4:Re(e)?2:0;return ee(e,t,n,r,i,s,o,!0)}function Z3(e){return e?Wg(e)||Xl in e?yt({},e):e:null}function To(e,t,n=!1){const{props:r,ref:i,patchFlag:o,children:s}=e,a=t?Y3(r||{},t):r;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:a,key:a&&w2(a),ref:t&&t.ref?n&&i?Se(i)?i.concat(Lc(t)):[i,Lc(t)]:Lc(t):i,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:s,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==gn?o===-1?16:o|16:o,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&To(e.ssContent),ssFallback:e.ssFallback&&To(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce}}function Kt(e=" ",t=0){return Fe(Jl,null,e,t)}function J3(e,t){const n=Fe(Bc,null,e);return n.staticCount=t,n}function dr(e="",t=!1){return t?(Ke(),Yl($i,null,e)):Fe($i,null,e)}function Un(e){return e==null||typeof e=="boolean"?Fe($i):Se(e)?Fe(gn,null,e.slice()):typeof e=="object"?$r(e):Fe(Jl,null,String(e))}function $r(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:To(e)}function D0(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(Se(t))n=16;else if(typeof t=="object")if(r&65){const i=t.default;i&&(i._c&&(i._d=!1),D0(e,i()),i._c&&(i._d=!0));return}else{n=32;const i=t._;!i&&!(Xl in t)?t._ctx=rn:i===3&&rn&&(rn.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else Re(t)?(t={default:t,_ctx:rn},n=32):(t=String(t),r&64?(n=16,t=[Kt(t)]):n=8);e.children=t,e.shapeFlag|=n}function Y3(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const i in r)if(i==="class")t.class!==r.class&&(t.class=Zo([t.class,r.class]));else if(i==="style")t.style=y0([t.style,r.style]);else if(jl(i)){const o=t[i],s=r[i];s&&o!==s&&!(Se(o)&&o.includes(s))&&(t[i]=o?[].concat(o,s):s)}else i!==""&&(t[i]=r[i])}return t}function In(e,t,n,r=null){Cn(e,t,7,[n,r])}const X3=l2();let Q3=0;function e6(e,t,n){const r=e.type,i=(t?t.appContext:e.appContext)||X3,o={uid:Q3++,vnode:e,type:r,parent:t,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new Og(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:d2(r,i),emitsOptions:Qg(r,i),emit:null,emitted:null,propsDefaults:nt,inheritAttrs:r.inheritAttrs,ctx:nt,data:nt,props:nt,attrs:nt,slots:nt,refs:nt,setupState:nt,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return o.ctx={_:o},o.root=t?t.root:o,o.emit=a3.bind(null,o),e.ce&&e.ce(o),o}let xt=null,I0,Gi,Up="__VUE_INSTANCE_SETTERS__";(Gi=Vd()[Up])||(Gi=Vd()[Up]=[]),Gi.push(e=>xt=e),I0=e=>{Gi.length>1?Gi.forEach(t=>t(e)):Gi[0](e)};const So=e=>{I0(e),e.scope.on()},Ei=()=>{xt&&xt.scope.off(),I0(null)};function b2(e){return e.vnode.shapeFlag&4}let ra=!1;function t6(e,t=!1){ra=t;const{props:n,children:r}=e.vnode,i=b2(e);L3(e,n,i,t),j3(e,r);const o=i?n6(e,t):void 0;return ra=!1,o}function n6(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=Hg(new Proxy(e.ctx,O3));const{setup:r}=n;if(r){const i=e.setupContext=r.length>1?i6(e):null;So(e),Jo();const o=Mr(r,e,0,[e.props,i]);if(Yo(),Ei(),Eg(o)){if(o.then(Ei,Ei),t)return o.then(s=>{Fp(e,s,t)}).catch(s=>{Gl(s,e,0)});e.asyncDep=o}else Fp(e,o,t)}else y2(e,t)}function Fp(e,t,n){Re(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:Qe(t)&&(e.setupState=Gg(t)),y2(e,n)}let jp;function y2(e,t,n){const r=e.type;if(!e.render){if(!t&&jp&&!r.render){const i=r.template||P0(e).template;if(i){const{isCustomElement:o,compilerOptions:s}=e.appContext.config,{delimiters:a,compilerOptions:c}=r,u=yt(yt({isCustomElement:o,delimiters:a},s),c);r.render=jp(i,u)}}e.render=r.render||_n}So(e),Jo(),D3(e),Yo(),Ei()}function r6(e){return e.attrsProxy||(e.attrsProxy=new Proxy(e.attrs,{get(t,n){return Wt(e,"get","$attrs"),t[n]}}))}function i6(e){const t=n=>{e.exposed=n||{}};return{get attrs(){return r6(e)},slots:e.slots,emit:e.emit,expose:t}}function Ql(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(Gg(Hg(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Us)return Us[n](e)},has(t,n){return n in t||n in Us}}))}function o6(e,t=!0){return Re(e)?e.displayName||e.name:e.name||t&&e.__name}function s6(e){return Re(e)&&"__vccOpts"in e}const Gt=(e,t)=>t3(e,t,ra);function v2(e,t,n){const r=arguments.length;return r===2?Qe(t)&&!Se(t)?rf(t)?Fe(e,null,[t]):Fe(e,t):Fe(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&rf(n)&&(n=[n]),Fe(e,t,n))}const a6=Symbol.for("v-scx"),c6=()=>Hn(a6),l6="3.3.4",u6="http://www.w3.org/2000/svg",wi=typeof document<"u"?document:null,Wp=wi&&wi.createElement("template"),d6={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const i=t?wi.createElementNS(u6,e):wi.createElement(e,n?{is:n}:void 0);return e==="select"&&r&&r.multiple!=null&&i.setAttribute("multiple",r.multiple),i},createText:e=>wi.createTextNode(e),createComment:e=>wi.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>wi.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,i,o){const s=n?n.previousSibling:t.lastChild;if(i&&(i===o||i.nextSibling))for(;t.insertBefore(i.cloneNode(!0),n),!(i===o||!(i=i.nextSibling)););else{Wp.innerHTML=r?`<svg>${e}</svg>`:e;const a=Wp.content;if(r){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}t.insertBefore(a,n)}return[s?s.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function f6(e,t,n){const r=e._vtc;r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function h6(e,t,n){const r=e.style,i=pt(n);if(n&&!i){if(t&&!pt(t))for(const o in t)n[o]==null&&of(r,o,"");for(const o in n)of(r,o,n[o])}else{const o=r.display;i?t!==n&&(r.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(r.display=o)}}const Hp=/\s*!important$/;function of(e,t,n){if(Se(n))n.forEach(r=>of(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=p6(e,t);Hp.test(n)?e.setProperty(Ko(r),n.replace(Hp,""),"important"):e[r]=n}}const zp=["Webkit","Moz","ms"],nd={};function p6(e,t){const n=nd[t];if(n)return n;let r=zn(t);if(r!=="filter"&&r in e)return nd[t]=r;r=zl(r);for(let i=0;i<zp.length;i++){const o=zp[i]+r;if(o in e)return nd[t]=o}return t}const qp="http://www.w3.org/1999/xlink";function m6(e,t,n,r,i){if(r&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(qp,t.slice(6,t.length)):e.setAttributeNS(qp,t,n);else{const o=b5(t);n==null||o&&!Ag(n)?e.removeAttribute(t):e.setAttribute(t,o?"":n)}}function g6(e,t,n,r,i,o,s){if(t==="innerHTML"||t==="textContent"){r&&s(r,i,o),e[t]=n??"";return}const a=e.tagName;if(t==="value"&&a!=="PROGRESS"&&!a.includes("-")){e._value=n;const u=a==="OPTION"?e.getAttribute("value"):e.value,l=n??"";u!==l&&(e.value=l),n==null&&e.removeAttribute(t);return}let c=!1;if(n===""||n==null){const u=typeof e[t];u==="boolean"?n=Ag(n):n==null&&u==="string"?(n="",c=!0):u==="number"&&(n=0,c=!0)}try{e[t]=n}catch{}c&&e.removeAttribute(t)}function bi(e,t,n,r){e.addEventListener(t,n,r)}function w6(e,t,n,r){e.removeEventListener(t,n,r)}function b6(e,t,n,r,i=null){const o=e._vei||(e._vei={}),s=o[t];if(r&&s)s.value=r;else{const[a,c]=y6(t);if(r){const u=o[t]=_6(r,i);bi(e,a,u,c)}else s&&(w6(e,a,s,c),o[t]=void 0)}}const Vp=/(?:Once|Passive|Capture)$/;function y6(e){let t;if(Vp.test(e)){t={};let r;for(;r=e.match(Vp);)e=e.slice(0,e.length-r[0].length),t[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):Ko(e.slice(2)),t]}let rd=0;const v6=Promise.resolve(),x6=()=>rd||(v6.then(()=>rd=0),rd=Date.now());function _6(e,t){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Cn(C6(r,n.value),t,5,[r])};return n.value=e,n.attached=x6(),n}function C6(e,t){if(Se(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>i=>!i._stopped&&r&&r(i))}else return t}const Gp=/^on[a-z]/,E6=(e,t,n,r,i=!1,o,s,a,c)=>{t==="class"?f6(e,r,i):t==="style"?h6(e,n,r):jl(t)?g0(t)||b6(e,t,n,r,s):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):T6(e,t,r,i))?g6(e,t,r,o,s,a,c):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),m6(e,t,r,i))};function T6(e,t,n,r){return r?!!(t==="innerHTML"||t==="textContent"||t in e&&Gp.test(t)&&Re(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||Gp.test(t)&&pt(n)?!1:t in e}const Qc=e=>{const t=e.props["onUpdate:modelValue"]||!1;return Se(t)?n=>Nc(t,n):t};function S6(e){e.target.composing=!0}function Kp(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const qR={created(e,{modifiers:{lazy:t,trim:n,number:r}},i){e._assign=Qc(i);const o=r||i.props&&i.props.type==="number";bi(e,t?"change":"input",s=>{if(s.target.composing)return;let a=e.value;n&&(a=a.trim()),o&&(a=qd(a)),e._assign(a)}),n&&bi(e,"change",()=>{e.value=e.value.trim()}),t||(bi(e,"compositionstart",S6),bi(e,"compositionend",Kp),bi(e,"change",Kp))},mounted(e,{value:t}){e.value=t??""},beforeUpdate(e,{value:t,modifiers:{lazy:n,trim:r,number:i}},o){if(e._assign=Qc(o),e.composing||document.activeElement===e&&e.type!=="range"&&(n||r&&e.value.trim()===t||(i||e.type==="number")&&qd(e.value)===t))return;const s=t??"";e.value!==s&&(e.value=s)}},VR={deep:!0,created(e,t,n){e._assign=Qc(n),bi(e,"change",()=>{const r=e._modelValue,i=A6(e),o=e.checked,s=e._assign;if(Se(r)){const a=$g(r,i),c=a!==-1;if(o&&!c)s(r.concat(i));else if(!o&&c){const u=[...r];u.splice(a,1),s(u)}}else if(Wl(r)){const a=new Set(r);o?a.add(i):a.delete(i),s(a)}else s(x2(e,o))})},mounted:Zp,beforeUpdate(e,t,n){e._assign=Qc(n),Zp(e,t,n)}};function Zp(e,{value:t,oldValue:n},r){e._modelValue=t,Se(t)?e.checked=$g(t,r.props.value)>-1:Wl(t)?e.checked=t.has(r.props.value):t!==n&&(e.checked=ql(t,x2(e,!0)))}function A6(e){return"_value"in e?e._value:e.value}function x2(e,t){const n=t?"_trueValue":"_falseValue";return n in e?e[n]:t}const $6=yt({patchProp:E6},d6);let Jp;function P6(){return Jp||(Jp=H3($6))}const O6=(...e)=>{const t=P6().createApp(...e),{mount:n}=t;return t.mount=r=>{const i=D6(r);if(!i)return;const o=t._component;!Re(o)&&!o.render&&!o.template&&(o.template=i.innerHTML),i.innerHTML="";const s=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),s},t};function D6(e){return pt(e)?document.querySelector(e):e}const tr={8453:"0x26fe408bbd7a490feb056da8e2d1e007938e5685",56:"0xb368b8b9287c0f979813fa3e241bad18c37517cf"},Ki={8453:"0x4a0a76645941d8c7ba059940b3446228f0db8972",56:"0xCFae100958A517919C583a2C36dED84cB6e7D217"},I6={8453:"0x4200000000000000000000000000000000000006",56:"0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c "},Yp={8453:"0x0c477c729816228af3cb4e014cbf9412aa080b86",56:"0x92fe0282ada8a9efdcad44ffdf06591e304eb8b1"},ws={8453:"0x327df1e6de05895d2ab08513aadd9313fe505d86",56:"0x10ed43c718714eb63d5aa57b78b54704e256024e"},GR={8453:{0:30,1:20,2:10,3:5,4:100},97:{0:30,1:25,2:20,3:10,4:100},56:{0:30,1:20,2:10,3:5,4:100}},_c={8453:18,56:18},id=1e4,Pr={1:"Ethereum Mainnet",3:"Ethereum Ropsten",4:"Ethereum Rinkeby",5:"Ethereum Goerli",42:"Ethereum Kovan",56:"BNB Chain",97:"BNB Chain TestNet",80001:"Polygon Testnet",137:"Polygon Mainnet",16667e5:"Harmony TestNet",16666e5:"Harmony ",43114:"Avalanche C-chain",43113:"Avalanche Testnet",8453:"Base Mainnet"},Rn=[56,8453],KR=10,ZR=100,R6="CAROL",N6=18,JR=99999.9999,YR=.001,k6={8453:{0:30,1:20,2:10,3:5,4:0},97:{0:50,1:32,2:16,3:8,4:0},56:{0:30,1:20,2:10,3:5,4:0}},XR=2,Er="https://carol.finance/api",M6="https://carol.finance",Xp="0x8e6eae0ed43786554774D51abD90313Af4D20a75",Qp="0x0000000000000000000000000000000000000000",QR=[{perc:5,triggerAmount:0,level:0},{perc:7,triggerAmount:0,level:1},{perc:9,triggerAmount:30,level:2},{perc:11,triggerAmount:120,level:3},{perc:14,triggerAmount:500,level:4},{perc:16,triggerAmount:1e3,level:5},{perc:18,triggerAmount:3e3,level:6},{perc:20,triggerAmount:1e4,level:7}],eN={8453:{MIN_DEP:.001,DEF_DEP:10,MAX_DEP:1e8,REF_PERC:[5,2,1,.5,.5],DEP_PLANS:{MIN_DAYS:10,MAX_DAYS:33,STEP:5,MIN_PERC:120,MAX_PERC:235},LEAD_RULES:[{}]}};function _2(e,t){return function(){return e.apply(t,arguments)}}const{toString:B6}=Object.prototype,{getPrototypeOf:R0}=Object,eu=(e=>t=>{const n=B6.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),Jn=e=>(e=e.toLowerCase(),t=>eu(t)===e),tu=e=>t=>typeof t===e,{isArray:Qo}=Array,ia=tu("undefined");function L6(e){return e!==null&&!ia(e)&&e.constructor!==null&&!ia(e.constructor)&&on(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const C2=Jn("ArrayBuffer");function U6(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&C2(e.buffer),t}const F6=tu("string"),on=tu("function"),E2=tu("number"),nu=e=>e!==null&&typeof e=="object",j6=e=>e===!0||e===!1,Uc=e=>{if(eu(e)!=="object")return!1;const t=R0(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},W6=Jn("Date"),H6=Jn("File"),z6=Jn("Blob"),q6=Jn("FileList"),V6=e=>nu(e)&&on(e.pipe),G6=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||on(e.append)&&((t=eu(e))==="formdata"||t==="object"&&on(e.toString)&&e.toString()==="[object FormData]"))},K6=Jn("URLSearchParams"),Z6=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Va(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,i;if(typeof e!="object"&&(e=[e]),Qo(e))for(r=0,i=e.length;r<i;r++)t.call(null,e[r],r,e);else{const o=n?Object.getOwnPropertyNames(e):Object.keys(e),s=o.length;let a;for(r=0;r<s;r++)a=o[r],t.call(null,e[a],a,e)}}function T2(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,i;for(;r-- >0;)if(i=n[r],t===i.toLowerCase())return i;return null}const S2=(()=>typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global)(),A2=e=>!ia(e)&&e!==S2;function sf(){const{caseless:e}=A2(this)&&this||{},t={},n=(r,i)=>{const o=e&&T2(t,i)||i;Uc(t[o])&&Uc(r)?t[o]=sf(t[o],r):Uc(r)?t[o]=sf({},r):Qo(r)?t[o]=r.slice():t[o]=r};for(let r=0,i=arguments.length;r<i;r++)arguments[r]&&Va(arguments[r],n);return t}const J6=(e,t,n,{allOwnKeys:r}={})=>(Va(t,(i,o)=>{n&&on(i)?e[o]=_2(i,n):e[o]=i},{allOwnKeys:r}),e),Y6=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),X6=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},Q6=(e,t,n,r)=>{let i,o,s;const a={};if(t=t||{},e==null)return t;do{for(i=Object.getOwnPropertyNames(e),o=i.length;o-- >0;)s=i[o],(!r||r(s,e,t))&&!a[s]&&(t[s]=e[s],a[s]=!0);e=n!==!1&&R0(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},ev=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},tv=e=>{if(!e)return null;if(Qo(e))return e;let t=e.length;if(!E2(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},nv=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&R0(Uint8Array)),rv=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let i;for(;(i=r.next())&&!i.done;){const o=i.value;t.call(e,o[0],o[1])}},iv=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},ov=Jn("HTMLFormElement"),sv=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,i){return r.toUpperCase()+i}),e1=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),av=Jn("RegExp"),$2=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};Va(n,(i,o)=>{let s;(s=t(i,o,e))!==!1&&(r[o]=s||i)}),Object.defineProperties(e,r)},cv=e=>{$2(e,(t,n)=>{if(on(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(on(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},lv=(e,t)=>{const n={},r=i=>{i.forEach(o=>{n[o]=!0})};return Qo(e)?r(e):r(String(e).split(t)),n},uv=()=>{},dv=(e,t)=>(e=+e,Number.isFinite(e)?e:t),od="abcdefghijklmnopqrstuvwxyz",t1="0123456789",P2={DIGIT:t1,ALPHA:od,ALPHA_DIGIT:od+od.toUpperCase()+t1},fv=(e=16,t=P2.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n};function hv(e){return!!(e&&on(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const pv=e=>{const t=new Array(10),n=(r,i)=>{if(nu(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[i]=r;const o=Qo(r)?[]:{};return Va(r,(s,a)=>{const c=n(s,i+1);!ia(c)&&(o[a]=c)}),t[i]=void 0,o}}return r};return n(e,0)},mv=Jn("AsyncFunction"),gv=e=>e&&(nu(e)||on(e))&&on(e.then)&&on(e.catch),K={isArray:Qo,isArrayBuffer:C2,isBuffer:L6,isFormData:G6,isArrayBufferView:U6,isString:F6,isNumber:E2,isBoolean:j6,isObject:nu,isPlainObject:Uc,isUndefined:ia,isDate:W6,isFile:H6,isBlob:z6,isRegExp:av,isFunction:on,isStream:V6,isURLSearchParams:K6,isTypedArray:nv,isFileList:q6,forEach:Va,merge:sf,extend:J6,trim:Z6,stripBOM:Y6,inherits:X6,toFlatObject:Q6,kindOf:eu,kindOfTest:Jn,endsWith:ev,toArray:tv,forEachEntry:rv,matchAll:iv,isHTMLForm:ov,hasOwnProperty:e1,hasOwnProp:e1,reduceDescriptors:$2,freezeMethods:cv,toObjectSet:lv,toCamelCase:sv,noop:uv,toFiniteNumber:dv,findKey:T2,global:S2,isContextDefined:A2,ALPHABET:P2,generateString:fv,isSpecCompliantForm:hv,toJSONObject:pv,isAsyncFn:mv,isThenable:gv};function Ue(e,t,n,r,i){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),i&&(this.response=i)}K.inherits(Ue,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:K.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const O2=Ue.prototype,D2={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{D2[e]={value:e}});Object.defineProperties(Ue,D2);Object.defineProperty(O2,"isAxiosError",{value:!0});Ue.from=(e,t,n,r,i,o)=>{const s=Object.create(O2);return K.toFlatObject(e,s,function(c){return c!==Error.prototype},a=>a!=="isAxiosError"),Ue.call(s,e.message,t,n,r,i),s.cause=e,s.name=e.name,o&&Object.assign(s,o),s};const wv=null;function af(e){return K.isPlainObject(e)||K.isArray(e)}function I2(e){return K.endsWith(e,"[]")?e.slice(0,-2):e}function n1(e,t,n){return e?e.concat(t).map(function(i,o){return i=I2(i),!n&&o?"["+i+"]":i}).join(n?".":""):t}function bv(e){return K.isArray(e)&&!e.some(af)}const yv=K.toFlatObject(K,{},null,function(t){return/^is[A-Z]/.test(t)});function ru(e,t,n){if(!K.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=K.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(y,x){return!K.isUndefined(x[y])});const r=n.metaTokens,i=n.visitor||l,o=n.dots,s=n.indexes,c=(n.Blob||typeof Blob<"u"&&Blob)&&K.isSpecCompliantForm(t);if(!K.isFunction(i))throw new TypeError("visitor must be a function");function u(w){if(w===null)return"";if(K.isDate(w))return w.toISOString();if(!c&&K.isBlob(w))throw new Ue("Blob is not supported. Use a Buffer instead.");return K.isArrayBuffer(w)||K.isTypedArray(w)?c&&typeof Blob=="function"?new Blob([w]):Buffer.from(w):w}function l(w,y,x){let E=w;if(w&&!x&&typeof w=="object"){if(K.endsWith(y,"{}"))y=r?y:y.slice(0,-2),w=JSON.stringify(w);else if(K.isArray(w)&&bv(w)||(K.isFileList(w)||K.endsWith(y,"[]"))&&(E=K.toArray(w)))return y=I2(y),E.forEach(function(C,_){!(K.isUndefined(C)||C===null)&&t.append(s===!0?n1([y],_,o):s===null?y:y+"[]",u(C))}),!1}return af(w)?!0:(t.append(n1(x,y,o),u(w)),!1)}const d=[],p=Object.assign(yv,{defaultVisitor:l,convertValue:u,isVisitable:af});function g(w,y){if(!K.isUndefined(w)){if(d.indexOf(w)!==-1)throw Error("Circular reference detected in "+y.join("."));d.push(w),K.forEach(w,function(E,b){(!(K.isUndefined(E)||E===null)&&i.call(t,E,K.isString(b)?b.trim():b,y,p))===!0&&g(E,y?y.concat(b):[b])}),d.pop()}}if(!K.isObject(e))throw new TypeError("data must be an object");return g(e),t}function r1(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function N0(e,t){this._pairs=[],e&&ru(e,this,t)}const R2=N0.prototype;R2.append=function(t,n){this._pairs.push([t,n])};R2.toString=function(t){const n=t?function(r){return t.call(this,r,r1)}:r1;return this._pairs.map(function(i){return n(i[0])+"="+n(i[1])},"").join("&")};function vv(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function N2(e,t,n){if(!t)return e;const r=n&&n.encode||vv,i=n&&n.serialize;let o;if(i?o=i(t,n):o=K.isURLSearchParams(t)?t.toString():new N0(t,n).toString(r),o){const s=e.indexOf("#");s!==-1&&(e=e.slice(0,s)),e+=(e.indexOf("?")===-1?"?":"&")+o}return e}class xv{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){K.forEach(this.handlers,function(r){r!==null&&t(r)})}}const i1=xv,k2={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},_v=typeof URLSearchParams<"u"?URLSearchParams:N0,Cv=typeof FormData<"u"?FormData:null,Ev=typeof Blob<"u"?Blob:null,Tv=(()=>{let e;return typeof navigator<"u"&&((e=navigator.product)==="ReactNative"||e==="NativeScript"||e==="NS")?!1:typeof window<"u"&&typeof document<"u"})(),Sv=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),Wn={isBrowser:!0,classes:{URLSearchParams:_v,FormData:Cv,Blob:Ev},isStandardBrowserEnv:Tv,isStandardBrowserWebWorkerEnv:Sv,protocols:["http","https","file","blob","url","data"]};function Av(e,t){return ru(e,new Wn.classes.URLSearchParams,Object.assign({visitor:function(n,r,i,o){return Wn.isNode&&K.isBuffer(n)?(this.append(r,n.toString("base64")),!1):o.defaultVisitor.apply(this,arguments)}},t))}function $v(e){return K.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function Pv(e){const t={},n=Object.keys(e);let r;const i=n.length;let o;for(r=0;r<i;r++)o=n[r],t[o]=e[o];return t}function M2(e){function t(n,r,i,o){let s=n[o++];const a=Number.isFinite(+s),c=o>=n.length;return s=!s&&K.isArray(i)?i.length:s,c?(K.hasOwnProp(i,s)?i[s]=[i[s],r]:i[s]=r,!a):((!i[s]||!K.isObject(i[s]))&&(i[s]=[]),t(n,r,i[s],o)&&K.isArray(i[s])&&(i[s]=Pv(i[s])),!a)}if(K.isFormData(e)&&K.isFunction(e.entries)){const n={};return K.forEachEntry(e,(r,i)=>{t($v(r),i,n,0)}),n}return null}function Ov(e,t,n){if(K.isString(e))try{return(t||JSON.parse)(e),K.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const k0={transitional:k2,adapter:["xhr","http"],transformRequest:[function(t,n){const r=n.getContentType()||"",i=r.indexOf("application/json")>-1,o=K.isObject(t);if(o&&K.isHTMLForm(t)&&(t=new FormData(t)),K.isFormData(t))return i&&i?JSON.stringify(M2(t)):t;if(K.isArrayBuffer(t)||K.isBuffer(t)||K.isStream(t)||K.isFile(t)||K.isBlob(t))return t;if(K.isArrayBufferView(t))return t.buffer;if(K.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let a;if(o){if(r.indexOf("application/x-www-form-urlencoded")>-1)return Av(t,this.formSerializer).toString();if((a=K.isFileList(t))||r.indexOf("multipart/form-data")>-1){const c=this.env&&this.env.FormData;return ru(a?{"files[]":t}:t,c&&new c,this.formSerializer)}}return o||i?(n.setContentType("application/json",!1),Ov(t)):t}],transformResponse:[function(t){const n=this.transitional||k0.transitional,r=n&&n.forcedJSONParsing,i=this.responseType==="json";if(t&&K.isString(t)&&(r&&!this.responseType||i)){const s=!(n&&n.silentJSONParsing)&&i;try{return JSON.parse(t)}catch(a){if(s)throw a.name==="SyntaxError"?Ue.from(a,Ue.ERR_BAD_RESPONSE,this,null,this.response):a}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Wn.classes.FormData,Blob:Wn.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};K.forEach(["delete","get","head","post","put","patch"],e=>{k0.headers[e]={}});const M0=k0,Dv=K.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),Iv=e=>{const t={};let n,r,i;return e&&e.split(`
`).forEach(function(s){i=s.indexOf(":"),n=s.substring(0,i).trim().toLowerCase(),r=s.substring(i+1).trim(),!(!n||t[n]&&Dv[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},o1=Symbol("internals");function bs(e){return e&&String(e).trim().toLowerCase()}function Fc(e){return e===!1||e==null?e:K.isArray(e)?e.map(Fc):String(e)}function Rv(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}const Nv=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function sd(e,t,n,r,i){if(K.isFunction(r))return r.call(this,t,n);if(i&&(t=n),!!K.isString(t)){if(K.isString(r))return t.indexOf(r)!==-1;if(K.isRegExp(r))return r.test(t)}}function kv(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function Mv(e,t){const n=K.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(i,o,s){return this[r].call(this,t,i,o,s)},configurable:!0})})}class iu{constructor(t){t&&this.set(t)}set(t,n,r){const i=this;function o(a,c,u){const l=bs(c);if(!l)throw new Error("header name must be a non-empty string");const d=K.findKey(i,l);(!d||i[d]===void 0||u===!0||u===void 0&&i[d]!==!1)&&(i[d||c]=Fc(a))}const s=(a,c)=>K.forEach(a,(u,l)=>o(u,l,c));return K.isPlainObject(t)||t instanceof this.constructor?s(t,n):K.isString(t)&&(t=t.trim())&&!Nv(t)?s(Iv(t),n):t!=null&&o(n,t,r),this}get(t,n){if(t=bs(t),t){const r=K.findKey(this,t);if(r){const i=this[r];if(!n)return i;if(n===!0)return Rv(i);if(K.isFunction(n))return n.call(this,i,r);if(K.isRegExp(n))return n.exec(i);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=bs(t),t){const r=K.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||sd(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let i=!1;function o(s){if(s=bs(s),s){const a=K.findKey(r,s);a&&(!n||sd(r,r[a],a,n))&&(delete r[a],i=!0)}}return K.isArray(t)?t.forEach(o):o(t),i}clear(t){const n=Object.keys(this);let r=n.length,i=!1;for(;r--;){const o=n[r];(!t||sd(this,this[o],o,t,!0))&&(delete this[o],i=!0)}return i}normalize(t){const n=this,r={};return K.forEach(this,(i,o)=>{const s=K.findKey(r,o);if(s){n[s]=Fc(i),delete n[o];return}const a=t?kv(o):String(o).trim();a!==o&&delete n[o],n[a]=Fc(i),r[a]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return K.forEach(this,(r,i)=>{r!=null&&r!==!1&&(n[i]=t&&K.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(i=>r.set(i)),r}static accessor(t){const r=(this[o1]=this[o1]={accessors:{}}).accessors,i=this.prototype;function o(s){const a=bs(s);r[a]||(Mv(i,s),r[a]=!0)}return K.isArray(t)?t.forEach(o):o(t),this}}iu.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);K.reduceDescriptors(iu.prototype,({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(r){this[n]=r}}});K.freezeMethods(iu);const fr=iu;function ad(e,t){const n=this||M0,r=t||n,i=fr.from(r.headers);let o=r.data;return K.forEach(e,function(a){o=a.call(n,o,i.normalize(),t?t.status:void 0)}),i.normalize(),o}function B2(e){return!!(e&&e.__CANCEL__)}function Ga(e,t,n){Ue.call(this,e??"canceled",Ue.ERR_CANCELED,t,n),this.name="CanceledError"}K.inherits(Ga,Ue,{__CANCEL__:!0});function Bv(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new Ue("Request failed with status code "+n.status,[Ue.ERR_BAD_REQUEST,Ue.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const Lv=Wn.isStandardBrowserEnv?function(){return{write:function(n,r,i,o,s,a){const c=[];c.push(n+"="+encodeURIComponent(r)),K.isNumber(i)&&c.push("expires="+new Date(i).toGMTString()),K.isString(o)&&c.push("path="+o),K.isString(s)&&c.push("domain="+s),a===!0&&c.push("secure"),document.cookie=c.join("; ")},read:function(n){const r=document.cookie.match(new RegExp("(^|;\\s*)("+n+")=([^;]*)"));return r?decodeURIComponent(r[3]):null},remove:function(n){this.write(n,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}();function Uv(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function Fv(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}function L2(e,t){return e&&!Uv(t)?Fv(e,t):t}const jv=Wn.isStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function i(o){let s=o;return t&&(n.setAttribute("href",s),s=n.href),n.setAttribute("href",s),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=i(window.location.href),function(s){const a=K.isString(s)?i(s):s;return a.protocol===r.protocol&&a.host===r.host}}():function(){return function(){return!0}}();function Wv(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function Hv(e,t){e=e||10;const n=new Array(e),r=new Array(e);let i=0,o=0,s;return t=t!==void 0?t:1e3,function(c){const u=Date.now(),l=r[o];s||(s=u),n[i]=c,r[i]=u;let d=o,p=0;for(;d!==i;)p+=n[d++],d=d%e;if(i=(i+1)%e,i===o&&(o=(o+1)%e),u-s<t)return;const g=l&&u-l;return g?Math.round(p*1e3/g):void 0}}function s1(e,t){let n=0;const r=Hv(50,250);return i=>{const o=i.loaded,s=i.lengthComputable?i.total:void 0,a=o-n,c=r(a),u=o<=s;n=o;const l={loaded:o,total:s,progress:s?o/s:void 0,bytes:a,rate:c||void 0,estimated:c&&s&&u?(s-o)/c:void 0,event:i};l[t?"download":"upload"]=!0,e(l)}}const zv=typeof XMLHttpRequest<"u",qv=zv&&function(e){return new Promise(function(n,r){let i=e.data;const o=fr.from(e.headers).normalize(),s=e.responseType;let a;function c(){e.cancelToken&&e.cancelToken.unsubscribe(a),e.signal&&e.signal.removeEventListener("abort",a)}let u;K.isFormData(i)&&(Wn.isStandardBrowserEnv||Wn.isStandardBrowserWebWorkerEnv?o.setContentType(!1):o.getContentType(/^\s*multipart\/form-data/)?K.isString(u=o.getContentType())&&o.setContentType(u.replace(/^\s*(multipart\/form-data);+/,"$1")):o.setContentType("multipart/form-data"));let l=new XMLHttpRequest;if(e.auth){const w=e.auth.username||"",y=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";o.set("Authorization","Basic "+btoa(w+":"+y))}const d=L2(e.baseURL,e.url);l.open(e.method.toUpperCase(),N2(d,e.params,e.paramsSerializer),!0),l.timeout=e.timeout;function p(){if(!l)return;const w=fr.from("getAllResponseHeaders"in l&&l.getAllResponseHeaders()),x={data:!s||s==="text"||s==="json"?l.responseText:l.response,status:l.status,statusText:l.statusText,headers:w,config:e,request:l};Bv(function(b){n(b),c()},function(b){r(b),c()},x),l=null}if("onloadend"in l?l.onloadend=p:l.onreadystatechange=function(){!l||l.readyState!==4||l.status===0&&!(l.responseURL&&l.responseURL.indexOf("file:")===0)||setTimeout(p)},l.onabort=function(){l&&(r(new Ue("Request aborted",Ue.ECONNABORTED,e,l)),l=null)},l.onerror=function(){r(new Ue("Network Error",Ue.ERR_NETWORK,e,l)),l=null},l.ontimeout=function(){let y=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const x=e.transitional||k2;e.timeoutErrorMessage&&(y=e.timeoutErrorMessage),r(new Ue(y,x.clarifyTimeoutError?Ue.ETIMEDOUT:Ue.ECONNABORTED,e,l)),l=null},Wn.isStandardBrowserEnv){const w=(e.withCredentials||jv(d))&&e.xsrfCookieName&&Lv.read(e.xsrfCookieName);w&&o.set(e.xsrfHeaderName,w)}i===void 0&&o.setContentType(null),"setRequestHeader"in l&&K.forEach(o.toJSON(),function(y,x){l.setRequestHeader(x,y)}),K.isUndefined(e.withCredentials)||(l.withCredentials=!!e.withCredentials),s&&s!=="json"&&(l.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&l.addEventListener("progress",s1(e.onDownloadProgress,!0)),typeof e.onUploadProgress=="function"&&l.upload&&l.upload.addEventListener("progress",s1(e.onUploadProgress)),(e.cancelToken||e.signal)&&(a=w=>{l&&(r(!w||w.type?new Ga(null,e,l):w),l.abort(),l=null)},e.cancelToken&&e.cancelToken.subscribe(a),e.signal&&(e.signal.aborted?a():e.signal.addEventListener("abort",a)));const g=Wv(d);if(g&&Wn.protocols.indexOf(g)===-1){r(new Ue("Unsupported protocol "+g+":",Ue.ERR_BAD_REQUEST,e));return}l.send(i||null)})},cf={http:wv,xhr:qv};K.forEach(cf,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const a1=e=>`- ${e}`,Vv=e=>K.isFunction(e)||e===null||e===!1,U2={getAdapter:e=>{e=K.isArray(e)?e:[e];const{length:t}=e;let n,r;const i={};for(let o=0;o<t;o++){n=e[o];let s;if(r=n,!Vv(n)&&(r=cf[(s=String(n)).toLowerCase()],r===void 0))throw new Ue(`Unknown adapter '${s}'`);if(r)break;i[s||"#"+o]=r}if(!r){const o=Object.entries(i).map(([a,c])=>`adapter ${a} `+(c===!1?"is not supported by the environment":"is not available in the build"));let s=t?o.length>1?`since :
`+o.map(a1).join(`
`):" "+a1(o[0]):"as no adapter specified";throw new Ue("There is no suitable adapter to dispatch the request "+s,"ERR_NOT_SUPPORT")}return r},adapters:cf};function cd(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new Ga(null,e)}function c1(e){return cd(e),e.headers=fr.from(e.headers),e.data=ad.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),U2.getAdapter(e.adapter||M0.adapter)(e).then(function(r){return cd(e),r.data=ad.call(e,e.transformResponse,r),r.headers=fr.from(r.headers),r},function(r){return B2(r)||(cd(e),r&&r.response&&(r.response.data=ad.call(e,e.transformResponse,r.response),r.response.headers=fr.from(r.response.headers))),Promise.reject(r)})}const l1=e=>e instanceof fr?e.toJSON():e;function Ao(e,t){t=t||{};const n={};function r(u,l,d){return K.isPlainObject(u)&&K.isPlainObject(l)?K.merge.call({caseless:d},u,l):K.isPlainObject(l)?K.merge({},l):K.isArray(l)?l.slice():l}function i(u,l,d){if(K.isUndefined(l)){if(!K.isUndefined(u))return r(void 0,u,d)}else return r(u,l,d)}function o(u,l){if(!K.isUndefined(l))return r(void 0,l)}function s(u,l){if(K.isUndefined(l)){if(!K.isUndefined(u))return r(void 0,u)}else return r(void 0,l)}function a(u,l,d){if(d in t)return r(u,l);if(d in e)return r(void 0,u)}const c={url:o,method:o,data:o,baseURL:s,transformRequest:s,transformResponse:s,paramsSerializer:s,timeout:s,timeoutMessage:s,withCredentials:s,adapter:s,responseType:s,xsrfCookieName:s,xsrfHeaderName:s,onUploadProgress:s,onDownloadProgress:s,decompress:s,maxContentLength:s,maxBodyLength:s,beforeRedirect:s,transport:s,httpAgent:s,httpsAgent:s,cancelToken:s,socketPath:s,responseEncoding:s,validateStatus:a,headers:(u,l)=>i(l1(u),l1(l),!0)};return K.forEach(Object.keys(Object.assign({},e,t)),function(l){const d=c[l]||i,p=d(e[l],t[l],l);K.isUndefined(p)&&d!==a||(n[l]=p)}),n}const F2="1.5.1",B0={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{B0[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const u1={};B0.transitional=function(t,n,r){function i(o,s){return"[Axios v"+F2+"] Transitional option '"+o+"'"+s+(r?". "+r:"")}return(o,s,a)=>{if(t===!1)throw new Ue(i(s," has been removed"+(n?" in "+n:"")),Ue.ERR_DEPRECATED);return n&&!u1[s]&&(u1[s]=!0,console.warn(i(s," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(o,s,a):!0}};function Gv(e,t,n){if(typeof e!="object")throw new Ue("options must be an object",Ue.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let i=r.length;for(;i-- >0;){const o=r[i],s=t[o];if(s){const a=e[o],c=a===void 0||s(a,o,e);if(c!==!0)throw new Ue("option "+o+" must be "+c,Ue.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new Ue("Unknown option "+o,Ue.ERR_BAD_OPTION)}}const lf={assertOptions:Gv,validators:B0},Tr=lf.validators;class el{constructor(t){this.defaults=t,this.interceptors={request:new i1,response:new i1}}request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=Ao(this.defaults,n);const{transitional:r,paramsSerializer:i,headers:o}=n;r!==void 0&&lf.assertOptions(r,{silentJSONParsing:Tr.transitional(Tr.boolean),forcedJSONParsing:Tr.transitional(Tr.boolean),clarifyTimeoutError:Tr.transitional(Tr.boolean)},!1),i!=null&&(K.isFunction(i)?n.paramsSerializer={serialize:i}:lf.assertOptions(i,{encode:Tr.function,serialize:Tr.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let s=o&&K.merge(o.common,o[n.method]);o&&K.forEach(["delete","get","head","post","put","patch","common"],w=>{delete o[w]}),n.headers=fr.concat(s,o);const a=[];let c=!0;this.interceptors.request.forEach(function(y){typeof y.runWhen=="function"&&y.runWhen(n)===!1||(c=c&&y.synchronous,a.unshift(y.fulfilled,y.rejected))});const u=[];this.interceptors.response.forEach(function(y){u.push(y.fulfilled,y.rejected)});let l,d=0,p;if(!c){const w=[c1.bind(this),void 0];for(w.unshift.apply(w,a),w.push.apply(w,u),p=w.length,l=Promise.resolve(n);d<p;)l=l.then(w[d++],w[d++]);return l}p=a.length;let g=n;for(d=0;d<p;){const w=a[d++],y=a[d++];try{g=w(g)}catch(x){y.call(this,x);break}}try{l=c1.call(this,g)}catch(w){return Promise.reject(w)}for(d=0,p=u.length;d<p;)l=l.then(u[d++],u[d++]);return l}getUri(t){t=Ao(this.defaults,t);const n=L2(t.baseURL,t.url);return N2(n,t.params,t.paramsSerializer)}}K.forEach(["delete","get","head","options"],function(t){el.prototype[t]=function(n,r){return this.request(Ao(r||{},{method:t,url:n,data:(r||{}).data}))}});K.forEach(["post","put","patch"],function(t){function n(r){return function(o,s,a){return this.request(Ao(a||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:o,data:s}))}}el.prototype[t]=n(),el.prototype[t+"Form"]=n(!0)});const jc=el;class L0{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(o){n=o});const r=this;this.promise.then(i=>{if(!r._listeners)return;let o=r._listeners.length;for(;o-- >0;)r._listeners[o](i);r._listeners=null}),this.promise.then=i=>{let o;const s=new Promise(a=>{r.subscribe(a),o=a}).then(i);return s.cancel=function(){r.unsubscribe(o)},s},t(function(o,s,a){r.reason||(r.reason=new Ga(o,s,a),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}static source(){let t;return{token:new L0(function(i){t=i}),cancel:t}}}const Kv=L0;function Zv(e){return function(n){return e.apply(null,n)}}function Jv(e){return K.isObject(e)&&e.isAxiosError===!0}const uf={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(uf).forEach(([e,t])=>{uf[t]=e});const Yv=uf;function j2(e){const t=new jc(e),n=_2(jc.prototype.request,t);return K.extend(n,jc.prototype,t,{allOwnKeys:!0}),K.extend(n,t,null,{allOwnKeys:!0}),n.create=function(i){return j2(Ao(e,i))},n}const ut=j2(M0);ut.Axios=jc;ut.CanceledError=Ga;ut.CancelToken=Kv;ut.isCancel=B2;ut.VERSION=F2;ut.toFormData=ru;ut.AxiosError=Ue;ut.Cancel=ut.CanceledError;ut.all=function(t){return Promise.all(t)};ut.spread=Zv;ut.isAxiosError=Jv;ut.mergeConfig=Ao;ut.AxiosHeaders=fr;ut.formToJSON=e=>M2(K.isHTMLForm(e)?new FormData(e):e);ut.getAdapter=U2.getAdapter;ut.HttpStatusCode=Yv;ut.default=ut;const un=ut,Xv="1.16.5",Qv=e=>e,ou=e=>e,e4=()=>`viem@${Xv}`;class ae extends Error{constructor(t,n={}){var o;super(),Object.defineProperty(this,"details",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"docsPath",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"metaMessages",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"shortMessage",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ViemError"}),Object.defineProperty(this,"version",{enumerable:!0,configurable:!0,writable:!0,value:e4()});const r=n.cause instanceof ae?n.cause.details:(o=n.cause)!=null&&o.message?n.cause.message:n.details,i=n.cause instanceof ae&&n.cause.docsPath||n.docsPath;this.message=[t||"An error occurred.","",...n.metaMessages?[...n.metaMessages,""]:[],...i?[`Docs: https://viem.sh${i}.html${n.docsSlug?`#${n.docsSlug}`:""}`]:[],...r?[`Details: ${r}`]:[],`Version: ${this.version}`].join(`
`),n.cause&&(this.cause=n.cause),this.details=r,this.docsPath=i,this.metaMessages=n.metaMessages,this.shortMessage=t}walk(t){return W2(this,t)}}function W2(e,t){return t!=null&&t(e)?e:e&&typeof e=="object"&&"cause"in e?W2(e.cause,t):t?null:e}class df extends ae{constructor({blockNumber:t,chain:n,contract:r}){super(`Chain "${n.name}" does not support contract "${r.name}".`,{metaMessages:["This could be due to any of the following:",...t&&r.blockCreated&&r.blockCreated>t?[`- The contract "${r.name}" was not deployed until block ${r.blockCreated} (current block ${t}).`]:[`- The chain does not have the contract "${r.name}" configured.`]]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ChainDoesNotSupportContract"})}}let t4=class extends ae{constructor({chain:t,currentChainId:n}){super(`The current chain of the wallet (id: ${n}) does not match the target chain for the transaction (id: ${t.id} – ${t.name}).`,{metaMessages:[`Current Chain ID:  ${n}`,`Expected Chain ID: ${t.id} – ${t.name}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ChainMismatchError"})}};class n4 extends ae{constructor(){super(["No chain was provided to the request.","Please provide a chain with the `chain` argument on the Action, or by supplying a `chain` to WalletClient."].join(`
`)),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ChainNotFoundError"})}}class H2 extends ae{constructor(){super("No chain was provided to the Client."),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ClientChainNotConfiguredError"})}}function z2({chain:e,currentChainId:t}){if(!e)throw new n4;if(t!==e.id)throw new t4({chain:e,currentChainId:t})}function U0(e,t={}){const{fees:n=e.fees,formatters:r=e.formatters,serializers:i=e.serializers}=t;return{...e,fees:n,formatters:r,serializers:i}}function es({blockNumber:e,chain:t,contract:n}){var i;const r=(i=t==null?void 0:t.contracts)==null?void 0:i[n];if(!r)throw new df({chain:t,contract:{name:n}});if(e&&r.blockCreated&&r.blockCreated>e)throw new df({blockNumber:e,chain:t,contract:{name:n,blockCreated:r.blockCreated}});return r.address}class r4 extends ae{constructor({max:t,min:n,signed:r,size:i,value:o}){super(`Number "${o}" is not in safe ${i?`${i*8}-bit ${r?"signed":"unsigned"} `:""}integer range ${t?`(${n} to ${t})`:`(above ${n})`}`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"IntegerOutOfRangeError"})}}class i4 extends ae{constructor(t){super(`Hex value "${t}" is not a valid boolean. The hex value must be "0x0" (false) or "0x1" (true).`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidHexBooleanError"})}}class o4 extends ae{constructor({givenSize:t,maxSize:n}){super(`Size cannot exceed ${n} bytes. Given size: ${t} bytes.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"SizeOverflowError"})}}function qn(e,{strict:t=!0}={}){return!e||typeof e!="string"?!1:t?/^0x[0-9a-fA-F]*$/.test(e):e.startsWith("0x")}function ht(e){return qn(e,{strict:!1})?Math.ceil((e.length-2)/2):e.length}function Ti(e,{dir:t="left"}={}){let n=typeof e=="string"?e.replace("0x",""):e,r=0;for(let i=0;i<n.length-1&&n[t==="left"?i:n.length-i-1].toString()==="0";i++)r++;return n=t==="left"?n.slice(r):n.slice(0,n.length-r),typeof e=="string"?(n.length===1&&t==="right"&&(n=`${n}0`),`0x${n.length%2===1?`0${n}`:n}`):n}class q2 extends ae{constructor({offset:t,position:n,size:r}){super(`Slice ${n==="start"?"starting":"ending"} at offset "${t}" is out-of-bounds (size: ${r}).`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"SliceOffsetOutOfBoundsError"})}}class V2 extends ae{constructor({size:t,targetSize:n,type:r}){super(`${r.charAt(0).toUpperCase()}${r.slice(1).toLowerCase()} size (${t}) exceeds padding size (${n}).`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"SizeExceedsPaddingSizeError"})}}function ts(e,{dir:t,size:n=32}={}){return typeof e=="string"?Br(e,{dir:t,size:n}):s4(e,{dir:t,size:n})}function Br(e,{dir:t,size:n=32}={}){if(n===null)return e;const r=e.replace("0x","");if(r.length>n*2)throw new V2({size:Math.ceil(r.length/2),targetSize:n,type:"hex"});return`0x${r[t==="right"?"padEnd":"padStart"](n*2,"0")}`}function s4(e,{dir:t,size:n=32}={}){if(n===null)return e;if(e.length>n)throw new V2({size:e.length,targetSize:n,type:"bytes"});const r=new Uint8Array(n);for(let i=0;i<n;i++){const o=t==="right";r[o?i:n-i-1]=e[o?i:e.length-i-1]}return r}const a4=Array.from({length:256},(e,t)=>t.toString(16).padStart(2,"0"));function vr(e,t={}){return typeof e=="number"||typeof e=="bigint"?Ie(e,t):typeof e=="string"?F0(e,t):typeof e=="boolean"?G2(e,t):oa(e,t)}function G2(e,t={}){const n=`0x${Number(e)}`;return typeof t.size=="number"?(Xr(n,{size:t.size}),ts(n,{size:t.size})):n}function oa(e,t={}){let n="";for(let i=0;i<e.length;i++)n+=a4[e[i]];const r=`0x${n}`;return typeof t.size=="number"?(Xr(r,{size:t.size}),ts(r,{dir:"right",size:t.size})):r}function Ie(e,t={}){const{signed:n,size:r}=t,i=BigInt(e);let o;r?n?o=(1n<<BigInt(r)*8n-1n)-1n:o=2n**(BigInt(r)*8n)-1n:typeof e=="number"&&(o=BigInt(Number.MAX_SAFE_INTEGER));const s=typeof o=="bigint"&&n?-o-1n:0;if(o&&i>o||i<s){const c=typeof e=="bigint"?"n":"";throw new r4({max:o?`${o}${c}`:void 0,min:`${s}${c}`,signed:n,size:r,value:`${e}${c}`})}const a=`0x${(n&&i<0?(1n<<BigInt(r*8))+BigInt(i):i).toString(16)}`;return r?ts(a,{size:r}):a}const c4=new TextEncoder;function F0(e,t={}){const n=c4.encode(e);return oa(n,t)}const l4=new TextEncoder;function zr(e,t={}){return typeof e=="number"||typeof e=="bigint"?d4(e,t):typeof e=="boolean"?u4(e,t):qn(e)?j0(e,t):hr(e,t)}function u4(e,t={}){const n=new Uint8Array(1);return n[0]=Number(e),typeof t.size=="number"?(Xr(n,{size:t.size}),ts(n,{size:t.size})):n}const nr={zero:48,nine:57,A:65,F:70,a:97,f:102};function d1(e){if(e>=nr.zero&&e<=nr.nine)return e-nr.zero;if(e>=nr.A&&e<=nr.F)return e-(nr.A-10);if(e>=nr.a&&e<=nr.f)return e-(nr.a-10)}function j0(e,t={}){let n=e;t.size&&(Xr(n,{size:t.size}),n=ts(n,{dir:"right",size:t.size}));let r=n.slice(2);r.length%2&&(r=`0${r}`);const i=r.length/2,o=new Uint8Array(i);for(let s=0,a=0;s<i;s++){const c=d1(r.charCodeAt(a++)),u=d1(r.charCodeAt(a++));if(c===void 0||u===void 0)throw new ae(`Invalid byte sequence ("${r[a-2]}${r[a-1]}" in "${r}").`);o[s]=c*16+u}return o}function d4(e,t){const n=Ie(e,t);return j0(n)}function hr(e,t={}){const n=l4.encode(e);return typeof t.size=="number"?(Xr(n,{size:t.size}),ts(n,{dir:"right",size:t.size})):n}function Xr(e,{size:t}){if(ht(e)>t)throw new o4({givenSize:ht(e),maxSize:t})}function su(e,t={}){const{signed:n}=t;t.size&&Xr(e,{size:t.size});const r=BigInt(e);if(!n)return r;const i=(e.length-2)/2,o=(1n<<BigInt(i)*8n-1n)-1n;return r<=o?r:r-BigInt(`0x${"f".padStart(i*2,"f")}`)-1n}function f4(e,t={}){let n=e;if(t.size&&(Xr(n,{size:t.size}),n=Ti(n)),Ti(n)==="0x00")return!1;if(Ti(n)==="0x01")return!0;throw new i4(n)}function $t(e,t={}){return Number(su(e,t))}function W0(e,t={}){let n=j0(e);return t.size&&(Xr(n,{size:t.size}),n=Ti(n,{dir:"right"})),new TextDecoder().decode(n)}const K2={"0x0":"legacy","0x1":"eip2930","0x2":"eip1559"};function Z2(e){const t={...e,blockHash:e.blockHash?e.blockHash:null,blockNumber:e.blockNumber?BigInt(e.blockNumber):null,chainId:e.chainId?$t(e.chainId):void 0,gas:e.gas?BigInt(e.gas):void 0,gasPrice:e.gasPrice?BigInt(e.gasPrice):void 0,maxFeePerGas:e.maxFeePerGas?BigInt(e.maxFeePerGas):void 0,maxPriorityFeePerGas:e.maxPriorityFeePerGas?BigInt(e.maxPriorityFeePerGas):void 0,nonce:e.nonce?$t(e.nonce):void 0,to:e.to?e.to:null,transactionIndex:e.transactionIndex?Number(e.transactionIndex):null,type:e.type?K2[e.type]:void 0,typeHex:e.type?e.type:void 0,value:e.value?BigInt(e.value):void 0,v:e.v?BigInt(e.v):void 0};return t.type==="legacy"&&(delete t.accessList,delete t.maxFeePerGas,delete t.maxPriorityFeePerGas),t.type==="eip2930"&&(delete t.maxFeePerGas,delete t.maxPriorityFeePerGas),t}function J2(e){var n;const t=(n=e.transactions)==null?void 0:n.map(r=>typeof r=="string"?r:Z2(r));return{...e,baseFeePerGas:e.baseFeePerGas?BigInt(e.baseFeePerGas):null,difficulty:e.difficulty?BigInt(e.difficulty):void 0,gasLimit:e.gasLimit?BigInt(e.gasLimit):void 0,gasUsed:e.gasUsed?BigInt(e.gasUsed):void 0,hash:e.hash?e.hash:null,logsBloom:e.logsBloom?e.logsBloom:null,nonce:e.nonce?e.nonce:null,number:e.number?BigInt(e.number):null,size:e.size?BigInt(e.size):void 0,timestamp:e.timestamp?BigInt(e.timestamp):void 0,transactions:t,totalDifficulty:e.totalDifficulty?BigInt(e.totalDifficulty):null}}function Tn(e,{args:t,eventName:n}={}){return{...e,blockHash:e.blockHash?e.blockHash:null,blockNumber:e.blockNumber?BigInt(e.blockNumber):null,logIndex:e.logIndex?Number(e.logIndex):null,transactionHash:e.transactionHash?e.transactionHash:null,transactionIndex:e.transactionIndex?Number(e.transactionIndex):null,...n?{args:t,eventName:n}:{}}}const h4={"0x0":"reverted","0x1":"success"};function p4(e){return{...e,blockNumber:e.blockNumber?BigInt(e.blockNumber):null,contractAddress:e.contractAddress?e.contractAddress:null,cumulativeGasUsed:e.cumulativeGasUsed?BigInt(e.cumulativeGasUsed):null,effectiveGasPrice:e.effectiveGasPrice?BigInt(e.effectiveGasPrice):null,gasUsed:e.gasUsed?BigInt(e.gasUsed):null,logs:e.logs?e.logs.map(t=>Tn(t)):null,to:e.to?e.to:null,transactionIndex:e.transactionIndex?$t(e.transactionIndex):null,status:e.status?h4[e.status]:null,type:e.type?K2[e.type]||e.type:null}}const ld=U0({id:56,name:"BNB Smart Chain",network:"bsc",nativeCurrency:{decimals:18,name:"BNB",symbol:"BNB"},rpcUrls:{default:{http:["https://rpc.ankr.com/bsc"]},public:{http:["https://rpc.ankr.com/bsc"]}},blockExplorers:{etherscan:{name:"BscScan",url:"https://bscscan.com"},default:{name:"BscScan",url:"https://bscscan.com"}},contracts:{multicall3:{address:"0xca11bde05977b3631167028862be2a173976ca11",blockCreated:15921452}}}),m4={legacy:"0x0",eip2930:"0x1",eip1559:"0x2"};function au(e){return{...e,gas:typeof e.gas<"u"?Ie(e.gas):void 0,gasPrice:typeof e.gasPrice<"u"?Ie(e.gasPrice):void 0,maxFeePerGas:typeof e.maxFeePerGas<"u"?Ie(e.maxFeePerGas):void 0,maxPriorityFeePerGas:typeof e.maxPriorityFeePerGas<"u"?Ie(e.maxPriorityFeePerGas):void 0,nonce:typeof e.nonce<"u"?Ie(e.nonce):void 0,type:typeof e.type<"u"?m4[e.type]:void 0,value:typeof e.value<"u"?Ie(e.value):void 0}}class sa extends ae{constructor({address:t}){super(`Address "${t}" is invalid.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidAddressError"})}}const g4={gwei:9,wei:18},w4={ether:-9,wei:9},b4={ether:-18,gwei:-9};function tl(e,t){let n=e.toString();const r=n.startsWith("-");r&&(n=n.slice(1)),n=n.padStart(t,"0");let[i,o]=[n.slice(0,n.length-t),n.slice(n.length-t)];return o=o.replace(/(0+)$/,""),`${r?"-":""}${i||"0"}${o?`.${o}`:""}`}function Ft(e,t="wei"){return tl(e,w4[t])}class co extends ae{constructor({cause:t,message:n}={}){var i;const r=(i=n==null?void 0:n.replace("execution reverted: ",""))==null?void 0:i.replace("execution reverted","");super(`Execution reverted ${r?`with reason: ${r}`:"for an unknown reason"}.`,{cause:t}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ExecutionRevertedError"})}}Object.defineProperty(co,"code",{enumerable:!0,configurable:!0,writable:!0,value:3});Object.defineProperty(co,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/execution reverted/});class nl extends ae{constructor({cause:t,maxFeePerGas:n}={}){super(`The fee cap (\`maxFeePerGas\`${n?` = ${Ft(n)} gwei`:""}) cannot be higher than the maximum allowed value (2^256-1).`,{cause:t}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"FeeCapTooHigh"})}}Object.defineProperty(nl,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/max fee per gas higher than 2\^256-1|fee cap higher than 2\^256-1/});class ff extends ae{constructor({cause:t,maxFeePerGas:n}={}){super(`The fee cap (\`maxFeePerGas\`${n?` = ${Ft(n)}`:""} gwei) cannot be lower than the block base fee.`,{cause:t}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"FeeCapTooLow"})}}Object.defineProperty(ff,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/max fee per gas less than block base fee|fee cap less than block base fee|transaction is outdated/});class hf extends ae{constructor({cause:t,nonce:n}={}){super(`Nonce provided for the transaction ${n?`(${n}) `:""}is higher than the next one expected.`,{cause:t}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"NonceTooHighError"})}}Object.defineProperty(hf,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/nonce too high/});class pf extends ae{constructor({cause:t,nonce:n}={}){super([`Nonce provided for the transaction ${n?`(${n}) `:""}is lower than the current nonce of the account.`,"Try increasing the nonce or find the latest nonce with `getTransactionCount`."].join(`
`),{cause:t}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"NonceTooLowError"})}}Object.defineProperty(pf,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/nonce too low|transaction already imported|already known/});class mf extends ae{constructor({cause:t,nonce:n}={}){super(`Nonce provided for the transaction ${n?`(${n}) `:""}exceeds the maximum allowed nonce.`,{cause:t}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"NonceMaxValueError"})}}Object.defineProperty(mf,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/nonce has max value/});class gf extends ae{constructor({cause:t}={}){super(["The total cost (gas * gas fee + value) of executing this transaction exceeds the balance of the account."].join(`
`),{cause:t,metaMessages:["This error could arise when the account does not have enough funds to:"," - pay for the total gas fee,"," - pay for the value to send."," ","The cost of the transaction is calculated as `gas * gas fee + value`, where:"," - `gas` is the amount of gas needed for transaction to execute,"," - `gas fee` is the gas fee,"," - `value` is the amount of ether to send to the recipient."]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InsufficientFundsError"})}}Object.defineProperty(gf,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/insufficient funds/});class wf extends ae{constructor({cause:t,gas:n}={}){super(`The amount of gas ${n?`(${n}) `:""}provided for the transaction exceeds the limit allowed for the block.`,{cause:t}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"IntrinsicGasTooHighError"})}}Object.defineProperty(wf,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/intrinsic gas too high|gas limit reached/});class bf extends ae{constructor({cause:t,gas:n}={}){super(`The amount of gas ${n?`(${n}) `:""}provided for the transaction is too low.`,{cause:t}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"IntrinsicGasTooLowError"})}}Object.defineProperty(bf,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/intrinsic gas too low/});class yf extends ae{constructor({cause:t}){super("The transaction type is not supported for this chain.",{cause:t}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TransactionTypeNotSupportedError"})}}Object.defineProperty(yf,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/transaction type not valid/});class rl extends ae{constructor({cause:t,maxPriorityFeePerGas:n,maxFeePerGas:r}={}){super([`The provided tip (\`maxPriorityFeePerGas\`${n?` = ${Ft(n)} gwei`:""}) cannot be higher than the fee cap (\`maxFeePerGas\`${r?` = ${Ft(r)} gwei`:""}).`].join(`
`),{cause:t}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TipAboveFeeCapError"})}}Object.defineProperty(rl,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/max priority fee per gas higher than max fee per gas|tip higher than fee cap/});class cu extends ae{constructor({cause:t}){super(`An error occurred while executing: ${t==null?void 0:t.shortMessage}`,{cause:t}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"UnknownNodeError"})}}const y4=/^0x[a-fA-F0-9]{40}$/;function $o(e){return y4.test(e)}function mr(e){return typeof e[0]=="string"?H0(e):v4(e)}function v4(e){let t=0;for(const i of e)t+=i.length;const n=new Uint8Array(t);let r=0;for(const i of e)n.set(i,r),r+=i.length;return n}function H0(e){return`0x${e.reduce((t,n)=>t+n.replace("0x",""),"")}`}function Qr(e,{includeName:t=!1}={}){if(e.type!=="function"&&e.type!=="event"&&e.type!=="error")throw new R4(e.type);return`${e.name}(${lu(e.inputs,{includeName:t})})`}function lu(e,{includeName:t=!1}={}){return e?e.map(n=>x4(n,{includeName:t})).join(t?", ":","):""}function x4(e,{includeName:t}){return e.type.startsWith("tuple")?`(${lu(e.components,{includeName:t})})${e.type.slice(5)}`:e.type+(t&&e.name?` ${e.name}`:"")}class _4 extends ae{constructor({docsPath:t}){super(["A constructor was not found on the ABI.","Make sure you are using the correct ABI and that the constructor exists on it."].join(`
`),{docsPath:t}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiConstructorNotFoundError"})}}class f1 extends ae{constructor({docsPath:t}){super(["Constructor arguments were provided (`args`), but a constructor parameters (`inputs`) were not found on the ABI.","Make sure you are using the correct ABI, and that the `inputs` attribute on the constructor exists."].join(`
`),{docsPath:t}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiConstructorParamsNotFoundError"})}}class z0 extends ae{constructor({data:t,params:n,size:r}){super([`Data size of ${r} bytes is too small for given parameters.`].join(`
`),{metaMessages:[`Params: (${lu(n,{includeName:!0})})`,`Data:   ${t} (${r} bytes)`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiDecodingDataSizeTooSmallError"}),Object.defineProperty(this,"data",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"params",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"size",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.data=t,this.params=n,this.size=r}}class uu extends ae{constructor(){super('Cannot decode zero data ("0x") with ABI parameters.'),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiDecodingZeroDataError"})}}class C4 extends ae{constructor({expectedLength:t,givenLength:n,type:r}){super([`ABI encoding array length mismatch for type ${r}.`,`Expected length: ${t}`,`Given length: ${n}`].join(`
`)),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiEncodingArrayLengthMismatchError"})}}class E4 extends ae{constructor({expectedSize:t,value:n}){super(`Size of bytes "${n}" (bytes${ht(n)}) does not match expected size (bytes${t}).`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiEncodingBytesSizeMismatchError"})}}class T4 extends ae{constructor({expectedLength:t,givenLength:n}){super(["ABI encoding params/values length mismatch.",`Expected length (params): ${t}`,`Given length (values): ${n}`].join(`
`)),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiEncodingLengthMismatchError"})}}class Y2 extends ae{constructor(t,{docsPath:n}){super([`Encoded error signature "${t}" not found on ABI.`,"Make sure you are using the correct ABI and that the error exists on it.",`You can look up the decoded signature here: https://openchain.xyz/signatures?query=${t}.`].join(`
`),{docsPath:n}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiErrorSignatureNotFoundError"}),Object.defineProperty(this,"signature",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.signature=t}}class S4 extends ae{constructor({docsPath:t}){super("Cannot extract event signature from empty topics.",{docsPath:t}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiEventSignatureEmptyTopicsError"})}}class A4 extends ae{constructor(t,{docsPath:n}){super([`Encoded event signature "${t}" not found on ABI.`,"Make sure you are using the correct ABI and that the event exists on it.",`You can look up the signature here: https://openchain.xyz/signatures?query=${t}.`].join(`
`),{docsPath:n}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiEventSignatureNotFoundError"})}}class h1 extends ae{constructor(t,{docsPath:n}={}){super([`Event ${t?`"${t}" `:""}not found on ABI.`,"Make sure you are using the correct ABI and that the event exists on it."].join(`
`),{docsPath:n}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiEventNotFoundError"})}}class il extends ae{constructor(t,{docsPath:n}={}){super([`Function ${t?`"${t}" `:""}not found on ABI.`,"Make sure you are using the correct ABI and that the function exists on it."].join(`
`),{docsPath:n}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiFunctionNotFoundError"})}}class $4 extends ae{constructor(t,{docsPath:n}){super([`Function "${t}" does not contain any \`outputs\` on ABI.`,"Cannot decode function result without knowing what the parameter types are.","Make sure you are using the correct ABI and that the function exists on it."].join(`
`),{docsPath:n}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiFunctionOutputsNotFoundError"})}}class P4 extends ae{constructor({expectedSize:t,givenSize:n}){super(`Expected bytes${t}, got bytes${n}.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"BytesSizeMismatchError"})}}class Pi extends ae{constructor({abiItem:t,data:n,params:r,size:i}){super([`Data size of ${i} bytes is too small for non-indexed event parameters.`].join(`
`),{metaMessages:[`Params: (${lu(r,{includeName:!0})})`,`Data:   ${n} (${i} bytes)`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"DecodeLogDataMismatch"}),Object.defineProperty(this,"abiItem",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"data",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"params",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"size",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.abiItem=t,this.data=n,this.params=r,this.size=i}}class ns extends ae{constructor({abiItem:t,param:n}){super([`Expected a topic for indexed event parameter${n.name?` "${n.name}"`:""} on event "${Qr(t,{includeName:!0})}".`].join(`
`)),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"DecodeLogTopicsMismatch"}),Object.defineProperty(this,"abiItem",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.abiItem=t}}class O4 extends ae{constructor(t,{docsPath:n}){super([`Type "${t}" is not a valid encoding type.`,"Please provide a valid ABI type."].join(`
`),{docsPath:n}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidAbiEncodingType"})}}class D4 extends ae{constructor(t,{docsPath:n}){super([`Type "${t}" is not a valid decoding type.`,"Please provide a valid ABI type."].join(`
`),{docsPath:n}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidAbiDecodingType"})}}class I4 extends ae{constructor(t){super([`Value "${t}" is not a valid array.`].join(`
`)),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidArrayError"})}}class R4 extends ae{constructor(t){super([`"${t}" is not a valid definition type.`,'Valid types: "function", "event", "error"'].join(`
`)),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidDefinitionTypeError"})}}class N4 extends ae{constructor(t){super(`Filter type "${t}" is not supported.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"FilterTypeNotSupportedError"})}}const k4=/((function|event)\s)?(.*)(\((.*)\))/;function X2(e){const t=e.match(k4),n=(t==null?void 0:t[2])||void 0,r=t==null?void 0:t[3],i=(t==null?void 0:t[5])||void 0;return{type:n,name:r,params:i}}function M4(e){return X2(e).name}function B4(e){const t=X2(e).params,n=t==null?void 0:t.split(",").map(r=>r.trim().split(" "));return n==null?void 0:n.map(r=>({type:r[0],name:r[1]==="indexed"?r[2]:r[1],...r[1]==="indexed"?{indexed:!0}:{}}))}const Q2=e=>{if(typeof e=="string"){const t=M4(e),n=B4(e)||[];return`${t}(${n.map(({type:r})=>r).join(",")})`}return Qr(e)},L4=e=>Q2(e);function p1(e){if(!Number.isSafeInteger(e)||e<0)throw new Error(`Wrong positive integer: ${e}`)}function ew(e,...t){if(!(e instanceof Uint8Array))throw new Error("Expected Uint8Array");if(t.length>0&&!t.includes(e.length))throw new Error(`Expected Uint8Array of length ${t}, not of length=${e.length}`)}function m1(e,t=!0){if(e.destroyed)throw new Error("Hash instance has been destroyed");if(t&&e.finished)throw new Error("Hash#digest() has already been called")}function U4(e,t){ew(e);const n=t.outputLen;if(e.length<n)throw new Error(`digestInto() expects output buffer of length at least ${n}`)}const Cc=BigInt(2**32-1),g1=BigInt(32);function F4(e,t=!1){return t?{h:Number(e&Cc),l:Number(e>>g1&Cc)}:{h:Number(e>>g1&Cc)|0,l:Number(e&Cc)|0}}function j4(e,t=!1){let n=new Uint32Array(e.length),r=new Uint32Array(e.length);for(let i=0;i<e.length;i++){const{h:o,l:s}=F4(e[i],t);[n[i],r[i]]=[o,s]}return[n,r]}const W4=(e,t,n)=>e<<n|t>>>32-n,H4=(e,t,n)=>t<<n|e>>>32-n,z4=(e,t,n)=>t<<n-32|e>>>64-n,q4=(e,t,n)=>e<<n-32|t>>>64-n;/*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */const V4=e=>e instanceof Uint8Array,G4=e=>new Uint32Array(e.buffer,e.byteOffset,Math.floor(e.byteLength/4)),K4=new Uint8Array(new Uint32Array([287454020]).buffer)[0]===68;if(!K4)throw new Error("Non little-endian hardware is not supported");function Z4(e){if(typeof e!="string")throw new Error(`utf8ToBytes expected string, got ${typeof e}`);return new Uint8Array(new TextEncoder().encode(e))}function tw(e){if(typeof e=="string"&&(e=Z4(e)),!V4(e))throw new Error(`expected Uint8Array, got ${typeof e}`);return e}class J4{clone(){return this._cloneInto()}}function Y4(e){const t=r=>e().update(tw(r)).digest(),n=e();return t.outputLen=n.outputLen,t.blockLen=n.blockLen,t.create=()=>e(),t}const[nw,rw,iw]=[[],[],[]],X4=BigInt(0),ys=BigInt(1),Q4=BigInt(2),e8=BigInt(7),t8=BigInt(256),n8=BigInt(113);for(let e=0,t=ys,n=1,r=0;e<24;e++){[n,r]=[r,(2*n+3*r)%5],nw.push(2*(5*r+n)),rw.push((e+1)*(e+2)/2%64);let i=X4;for(let o=0;o<7;o++)t=(t<<ys^(t>>e8)*n8)%t8,t&Q4&&(i^=ys<<(ys<<BigInt(o))-ys);iw.push(i)}const[r8,i8]=j4(iw,!0),w1=(e,t,n)=>n>32?z4(e,t,n):W4(e,t,n),b1=(e,t,n)=>n>32?q4(e,t,n):H4(e,t,n);function o8(e,t=24){const n=new Uint32Array(10);for(let r=24-t;r<24;r++){for(let s=0;s<10;s++)n[s]=e[s]^e[s+10]^e[s+20]^e[s+30]^e[s+40];for(let s=0;s<10;s+=2){const a=(s+8)%10,c=(s+2)%10,u=n[c],l=n[c+1],d=w1(u,l,1)^n[a],p=b1(u,l,1)^n[a+1];for(let g=0;g<50;g+=10)e[s+g]^=d,e[s+g+1]^=p}let i=e[2],o=e[3];for(let s=0;s<24;s++){const a=rw[s],c=w1(i,o,a),u=b1(i,o,a),l=nw[s];i=e[l],o=e[l+1],e[l]=c,e[l+1]=u}for(let s=0;s<50;s+=10){for(let a=0;a<10;a++)n[a]=e[s+a];for(let a=0;a<10;a++)e[s+a]^=~n[(a+2)%10]&n[(a+4)%10]}e[0]^=r8[r],e[1]^=i8[r]}n.fill(0)}class q0 extends J4{constructor(t,n,r,i=!1,o=24){if(super(),this.blockLen=t,this.suffix=n,this.outputLen=r,this.enableXOF=i,this.rounds=o,this.pos=0,this.posOut=0,this.finished=!1,this.destroyed=!1,p1(r),0>=this.blockLen||this.blockLen>=200)throw new Error("Sha3 supports only keccak-f1600 function");this.state=new Uint8Array(200),this.state32=G4(this.state)}keccak(){o8(this.state32,this.rounds),this.posOut=0,this.pos=0}update(t){m1(this);const{blockLen:n,state:r}=this;t=tw(t);const i=t.length;for(let o=0;o<i;){const s=Math.min(n-this.pos,i-o);for(let a=0;a<s;a++)r[this.pos++]^=t[o++];this.pos===n&&this.keccak()}return this}finish(){if(this.finished)return;this.finished=!0;const{state:t,suffix:n,pos:r,blockLen:i}=this;t[r]^=n,n&128&&r===i-1&&this.keccak(),t[i-1]^=128,this.keccak()}writeInto(t){m1(this,!1),ew(t),this.finish();const n=this.state,{blockLen:r}=this;for(let i=0,o=t.length;i<o;){this.posOut>=r&&this.keccak();const s=Math.min(r-this.posOut,o-i);t.set(n.subarray(this.posOut,this.posOut+s),i),this.posOut+=s,i+=s}return t}xofInto(t){if(!this.enableXOF)throw new Error("XOF is not possible for this instance");return this.writeInto(t)}xof(t){return p1(t),this.xofInto(new Uint8Array(t))}digestInto(t){if(U4(t,this),this.finished)throw new Error("digest() was already called");return this.writeInto(t),this.destroy(),t}digest(){return this.digestInto(new Uint8Array(this.outputLen))}destroy(){this.destroyed=!0,this.state.fill(0)}_cloneInto(t){const{blockLen:n,suffix:r,outputLen:i,rounds:o,enableXOF:s}=this;return t||(t=new q0(n,r,i,s,o)),t.state32.set(this.state32),t.pos=this.pos,t.posOut=this.posOut,t.finished=this.finished,t.rounds=o,t.suffix=r,t.outputLen=i,t.enableXOF=s,t.destroyed=this.destroyed,t}}const s8=(e,t,n)=>Y4(()=>new q0(t,e,n)),a8=s8(1,136,256/8);function It(e,t){const n=t||"hex",r=a8(qn(e,{strict:!1})?zr(e):e);return n==="bytes"?r:vr(r)}const c8=e=>It(zr(e)),V0=e=>c8(L4(e));function lt(e,t,n,{strict:r}={}){return qn(e,{strict:!1})?u8(e,t,n,{strict:r}):l8(e,t,n,{strict:r})}function ow(e,t){if(typeof t=="number"&&t>0&&t>ht(e)-1)throw new q2({offset:t,position:"start",size:ht(e)})}function sw(e,t,n){if(typeof t=="number"&&typeof n=="number"&&ht(e)!==n-t)throw new q2({offset:n,position:"end",size:ht(e)})}function l8(e,t,n,{strict:r}={}){ow(e,t);const i=e.slice(t,n);return r&&sw(i,t,n),i}function u8(e,t,n,{strict:r}={}){ow(e,t);const i=`0x${e.replace("0x","").slice((t??0)*2,(n??e.length)*2)}`;return r&&sw(i,t,n),i}function Ka(e,t){if(e.length!==t.length)throw new T4({expectedLength:e.length,givenLength:t.length});const n=d8({params:e,values:t}),r=K0(n);return r.length===0?"0x":r}function d8({params:e,values:t}){const n=[];for(let r=0;r<e.length;r++)n.push(G0({param:e[r],value:t[r]}));return n}function G0({param:e,value:t}){const n=du(e.type);if(n){const[r,i]=n;return h8(t,{length:r,param:{...e,type:i}})}if(e.type==="tuple")return b8(t,{param:e});if(e.type==="address")return f8(t);if(e.type==="bool")return m8(t);if(e.type.startsWith("uint")||e.type.startsWith("int")){const r=e.type.startsWith("int");return g8(t,{signed:r})}if(e.type.startsWith("bytes"))return p8(t,{param:e});if(e.type==="string")return w8(t);throw new O4(e.type,{docsPath:"/docs/contract/encodeAbiParameters"})}function K0(e){let t=0;for(let o=0;o<e.length;o++){const{dynamic:s,encoded:a}=e[o];s?t+=32:t+=ht(a)}const n=[],r=[];let i=0;for(let o=0;o<e.length;o++){const{dynamic:s,encoded:a}=e[o];s?(n.push(Ie(t+i,{size:32})),r.push(a),i+=ht(a)):n.push(a)}return mr([...n,...r])}function f8(e){if(!$o(e))throw new sa({address:e});return{dynamic:!1,encoded:Br(e.toLowerCase())}}function h8(e,{length:t,param:n}){const r=t===null;if(!Array.isArray(e))throw new I4(e);if(!r&&e.length!==t)throw new C4({expectedLength:t,givenLength:e.length,type:`${n.type}[${t}]`});let i=!1;const o=[];for(let s=0;s<e.length;s++){const a=G0({param:n,value:e[s]});a.dynamic&&(i=!0),o.push(a)}if(r||i){const s=K0(o);if(r){const a=Ie(o.length,{size:32});return{dynamic:!0,encoded:o.length>0?mr([a,s]):a}}if(i)return{dynamic:!0,encoded:s}}return{dynamic:!1,encoded:mr(o.map(({encoded:s})=>s))}}function p8(e,{param:t}){const[,n]=t.type.split("bytes"),r=ht(e);if(!n){let i=e;return r%32!==0&&(i=Br(i,{dir:"right",size:Math.ceil((e.length-2)/2/32)*32})),{dynamic:!0,encoded:mr([Br(Ie(r,{size:32})),i])}}if(r!==parseInt(n))throw new E4({expectedSize:parseInt(n),value:e});return{dynamic:!1,encoded:Br(e,{dir:"right"})}}function m8(e){return{dynamic:!1,encoded:Br(G2(e))}}function g8(e,{signed:t}){return{dynamic:!1,encoded:Ie(e,{size:32,signed:t})}}function w8(e){const t=F0(e),n=Math.ceil(ht(t)/32),r=[];for(let i=0;i<n;i++)r.push(Br(lt(t,i*32,(i+1)*32),{dir:"right"}));return{dynamic:!0,encoded:mr([Br(Ie(ht(t),{size:32})),...r])}}function b8(e,{param:t}){let n=!1;const r=[];for(let i=0;i<t.components.length;i++){const o=t.components[i],s=Array.isArray(e)?i:o.name,a=G0({param:o,value:e[s]});r.push(a),a.dynamic&&(n=!0)}return{dynamic:n,encoded:n?K0(r):mr(r.map(({encoded:i})=>i))}}function du(e){const t=e.match(/^(.*)\[(\d+)?\]$/);return t?[t[2]?Number(t[2]):null,t[1]]:void 0}const y8=e=>It(zr(e)),Z0=e=>lt(y8(Q2(e)),0,4);function Za({abi:e,args:t=[],name:n}){const r=qn(n,{strict:!1}),i=e.filter(o=>r?o.type==="function"?Z0(o)===n:o.type==="event"?V0(o)===n:!1:"name"in o&&o.name===n);if(i.length!==0){if(i.length===1)return i[0];for(const o of i){if(!("inputs"in o))continue;if(!t||t.length===0){if(!o.inputs||o.inputs.length===0)return o;continue}if(!o.inputs||o.inputs.length===0||o.inputs.length!==t.length)continue;if(t.every((a,c)=>{const u="inputs"in o&&o.inputs[c];return u?vf(a,u):!1}))return o}return i[0]}}function vf(e,t){const n=typeof e,r=t.type;switch(r){case"address":return $o(e);case"bool":return n==="boolean";case"function":return n==="string";case"string":return n==="string";default:return r==="tuple"&&"components"in t?Object.values(t.components).every((i,o)=>vf(Object.values(e)[o],i)):/^u?int(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/.test(r)?n==="number"||n==="bigint":/^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/.test(r)?n==="string"||e instanceof Uint8Array:/[a-z]+[1-9]{0,3}(\[[0-9]{0,}\])+$/.test(r)?Array.isArray(e)&&e.every(i=>vf(i,{...t,type:r.replace(/(\[[0-9]{0,}\])$/,"")})):!1}}function Ja({abi:e,eventName:t,args:n}){var a;let r=e[0];if(t&&(r=Za({abi:e,args:n,name:t}),!r))throw new h1(t,{docsPath:"/docs/contract/encodeEventTopics"});if(r.type!=="event")throw new h1(void 0,{docsPath:"/docs/contract/encodeEventTopics"});const i=Qr(r),o=V0(i);let s=[];if(n&&"inputs"in r){const c=(a=r.inputs)==null?void 0:a.filter(l=>"indexed"in l&&l.indexed),u=Array.isArray(n)?n:Object.values(n).length>0?(c==null?void 0:c.map(l=>n[l.name]))??[]:[];u.length>0&&(s=(c==null?void 0:c.map((l,d)=>Array.isArray(u[d])?u[d].map((p,g)=>y1({param:l,value:u[d][g]})):u[d]?y1({param:l,value:u[d]}):null))??[])}return[o,...s]}function y1({param:e,value:t}){if(e.type==="string"||e.type==="bytes")return It(zr(t));if(e.type==="tuple"||e.type.match(/^(.*)\[(\d+)?\]$/))throw new N4(e.type);return Ka([e],[t])}function fu(e,{method:t}){var r,i;const n={};return e.transport.type==="fallback"&&((i=(r=e.transport).onResponse)==null||i.call(r,({method:o,response:s,status:a,transport:c})=>{a==="success"&&t===o&&(n[s]=c.request)})),o=>n[o]||e.request}async function aw(e,{address:t,abi:n,args:r,eventName:i,fromBlock:o,strict:s,toBlock:a}){const c=fu(e,{method:"eth_newFilter"}),u=i?Ja({abi:n,args:r,eventName:i}):void 0,l=await e.request({method:"eth_newFilter",params:[{address:t,fromBlock:typeof o=="bigint"?Ie(o):o,toBlock:typeof a=="bigint"?Ie(a):a,topics:u}]});return{abi:n,args:r,eventName:i,id:l,request:c(l),strict:s,type:"event"}}function an(e){return typeof e=="string"?{address:e,type:"json-rpc"}:e}function ei({abi:e,args:t,functionName:n}){let r=e[0];if(n&&(r=Za({abi:e,args:t,name:n}),!r))throw new il(n,{docsPath:"/docs/contract/encodeFunctionData"});if(r.type!=="function")throw new il(void 0,{docsPath:"/docs/contract/encodeFunctionData"});const i=Qr(r),o=Z0(i),s="inputs"in r&&r.inputs?Ka(r.inputs,t??[]):void 0;return H0([o,s??"0x"])}const cw={1:"An `assert` condition failed.",17:"Arithmic operation resulted in underflow or overflow.",18:"Division or modulo by zero (e.g. `5 / 0` or `23 % 0`).",33:"Attempted to convert to an invalid type.",34:"Attempted to access a storage byte array that is incorrectly encoded.",49:"Performed `.pop()` on an empty array",50:"Array index is out of bounds.",65:"Allocated too much memory or created an array which is too large.",81:"Attempted to call a zero-initialized variable of internal function type."},v8={inputs:[{name:"message",type:"string"}],name:"Error",type:"error"},x8={inputs:[{name:"reason",type:"uint256"}],name:"Panic",type:"error"};function J0(e,t){const n=t?`${t}${e.toLowerCase()}`:e.substring(2).toLowerCase(),r=It(hr(n),"bytes"),i=(t?n.substring(`${t}0x`.length):n).split("");for(let o=0;o<40;o+=2)r[o>>1]>>4>=8&&i[o]&&(i[o]=i[o].toUpperCase()),(r[o>>1]&15)>=8&&i[o+1]&&(i[o+1]=i[o+1].toUpperCase());return`0x${i.join("")}`}function En(e,t){if(!$o(e))throw new sa({address:e});return J0(e,t)}function hu(e,t){if(t==="0x"&&e.length>0)throw new uu;if(ht(t)&&ht(t)<32)throw new z0({data:t,params:e,size:ht(t)});return _8({data:t,params:e})}function _8({data:e,params:t}){const n=[];let r=0;for(let i=0;i<t.length;i++){if(r>=ht(e))throw new z0({data:e,params:t,size:ht(e)});const o=t[i],{consumed:s,value:a}=vo({data:e,param:o,position:r});n.push(a),r+=s}return n}function vo({data:e,param:t,position:n}){const r=du(t.type);if(r){const[o,s]=r;return E8(e,{length:o,param:{...t,type:s},position:n})}if(t.type==="tuple")return P8(e,{param:t,position:n});if(t.type==="string")return $8(e,{position:n});if(t.type.startsWith("bytes"))return S8(e,{param:t,position:n});const i=lt(e,n,n+32,{strict:!0});if(t.type.startsWith("uint")||t.type.startsWith("int"))return A8(i,{param:t});if(t.type==="address")return C8(i);if(t.type==="bool")return T8(i);throw new D4(t.type,{docsPath:"/docs/contract/decodeAbiParameters"})}function C8(e){return{consumed:32,value:J0(lt(e,-20))}}function E8(e,{param:t,length:n,position:r}){if(!n){const s=$t(lt(e,r,r+32,{strict:!0})),a=$t(lt(e,s,s+32,{strict:!0}));let c=0;const u=[];for(let l=0;l<a;++l){const d=vo({data:lt(e,s+32),param:t,position:c});c+=d.consumed,u.push(d.value)}return{value:u,consumed:32}}if(ol(t)){const s=du(t.type),a=!(s!=null&&s[0]);let c=0;const u=[];for(let l=0;l<n;++l){const d=$t(lt(e,r,r+32,{strict:!0})),p=vo({data:lt(e,d),param:t,position:a?c:l*32});c+=p.consumed,u.push(p.value)}return{value:u,consumed:32}}let i=0;const o=[];for(let s=0;s<n;++s){const a=vo({data:e,param:t,position:r+i});i+=a.consumed,o.push(a.value)}return{value:o,consumed:i}}function T8(e){return{consumed:32,value:f4(e)}}function S8(e,{param:t,position:n}){const[r,i]=t.type.split("bytes");if(!i){const s=$t(lt(e,n,n+32,{strict:!0})),a=$t(lt(e,s,s+32,{strict:!0}));return a===0?{consumed:32,value:"0x"}:{consumed:32,value:lt(e,s+32,s+32+a,{strict:!0})}}return{consumed:32,value:lt(e,n,n+parseInt(i),{strict:!0})}}function A8(e,{param:t}){const n=t.type.startsWith("int");return{consumed:32,value:parseInt(t.type.split("int")[1]||"256")>48?su(e,{signed:n}):$t(e,{signed:n})}}function $8(e,{position:t}){const n=$t(lt(e,t,t+32,{strict:!0})),r=$t(lt(e,n,n+32,{strict:!0}));return r===0?{consumed:32,value:""}:{consumed:32,value:W0(Ti(lt(e,n+32,n+32+r,{strict:!0})))}}function P8(e,{param:t,position:n}){const r=t.components.length===0||t.components.some(({name:s})=>!s),i=r?[]:{};let o=0;if(ol(t)){const s=$t(lt(e,n,n+32,{strict:!0}));for(let a=0;a<t.components.length;++a){const c=t.components[a],u=vo({data:lt(e,s),param:c,position:o});o+=u.consumed,i[r?a:c==null?void 0:c.name]=u.value}return{consumed:32,value:i}}for(let s=0;s<t.components.length;++s){const a=t.components[s],c=vo({data:e,param:a,position:n+o});o+=c.consumed,i[r?s:a==null?void 0:a.name]=c.value}return{consumed:o,value:i}}function ol(e){var r;const{type:t}=e;if(t==="string"||t==="bytes"||t.endsWith("[]"))return!0;if(t==="tuple")return(r=e.components)==null?void 0:r.some(ol);const n=du(e.type);return!!(n&&ol({...e,type:n[1]}))}function O8({abi:e,data:t}){const n=lt(t,0,4);if(n==="0x")throw new uu;const i=[...e||[],v8,x8].find(o=>o.type==="error"&&n===Z0(Qr(o)));if(!i)throw new Y2(n,{docsPath:"/docs/contract/decodeErrorResult"});return{abiItem:i,args:"inputs"in i&&i.inputs&&i.inputs.length>0?hu(i.inputs,lt(t,4)):void 0,errorName:i.name}}const Rt=(e,t,n)=>JSON.stringify(e,(r,i)=>{const o=typeof i=="bigint"?i.toString():i;return typeof t=="function"?t(r,o):o},n);function lw({abiItem:e,args:t,includeFunctionName:n=!0,includeName:r=!1}){if("name"in e&&"inputs"in e&&e.inputs)return`${n?e.name:""}(${e.inputs.map((i,o)=>`${r&&i.name?`${i.name}: `:""}${typeof t[o]=="object"?Rt(t[o]):t[o]}`).join(", ")})`}function Y0(e,t="wei"){return tl(e,g4[t])}function Ya(e){const t=Object.entries(e).map(([r,i])=>i===void 0||i===!1?null:[r,i]).filter(Boolean),n=t.reduce((r,[i])=>Math.max(r,i.length),0);return t.map(([r,i])=>`  ${`${r}:`.padEnd(n+1)}  ${i}`).join(`
`)}class D8 extends ae{constructor(){super(["Cannot specify both a `gasPrice` and a `maxFeePerGas`/`maxPriorityFeePerGas`.","Use `maxFeePerGas`/`maxPriorityFeePerGas` for EIP-1559 compatible networks, and `gasPrice` for others."].join(`
`)),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"FeeConflictError"})}}class I8 extends ae{constructor({transaction:t}){super("Cannot infer a transaction type from provided transaction.",{metaMessages:["Provided Transaction:","{",Ya(t),"}","","To infer the type, either provide:","- a `type` to the Transaction, or","- an EIP-1559 Transaction with `maxFeePerGas`, or","- an EIP-2930 Transaction with `gasPrice` & `accessList`, or","- a Legacy Transaction with `gasPrice`"]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidSerializableTransactionError"})}}class R8 extends ae{constructor(t,{account:n,docsPath:r,chain:i,data:o,gas:s,gasPrice:a,maxFeePerGas:c,maxPriorityFeePerGas:u,nonce:l,to:d,value:p}){const g=Ya({chain:i&&`${i==null?void 0:i.name} (id: ${i==null?void 0:i.id})`,from:n==null?void 0:n.address,to:d,value:typeof p<"u"&&`${Y0(p)} ${(i==null?void 0:i.nativeCurrency.symbol)||"ETH"}`,data:o,gas:s,gasPrice:typeof a<"u"&&`${Ft(a)} gwei`,maxFeePerGas:typeof c<"u"&&`${Ft(c)} gwei`,maxPriorityFeePerGas:typeof u<"u"&&`${Ft(u)} gwei`,nonce:l});super(t.shortMessage,{cause:t,docsPath:r,metaMessages:[...t.metaMessages?[...t.metaMessages," "]:[],"Request Arguments:",g].filter(Boolean)}),Object.defineProperty(this,"cause",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TransactionExecutionError"}),this.cause=t}}class uw extends ae{constructor({blockHash:t,blockNumber:n,blockTag:r,hash:i,index:o}){let s="Transaction";r&&o!==void 0&&(s=`Transaction at block time "${r}" at index "${o}"`),t&&o!==void 0&&(s=`Transaction at block hash "${t}" at index "${o}"`),n&&o!==void 0&&(s=`Transaction at block number "${n}" at index "${o}"`),i&&(s=`Transaction with hash "${i}"`),super(`${s} could not be found.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TransactionNotFoundError"})}}class dw extends ae{constructor({hash:t}){super(`Transaction receipt with hash "${t}" could not be found. The Transaction may not be processed on a block yet.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TransactionReceiptNotFoundError"})}}class N8 extends ae{constructor({hash:t}){super(`Timed out while waiting for transaction with hash "${t}" to be confirmed.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"WaitForTransactionReceiptTimeoutError"})}}class fw extends ae{constructor(t,{account:n,docsPath:r,chain:i,data:o,gas:s,gasPrice:a,maxFeePerGas:c,maxPriorityFeePerGas:u,nonce:l,to:d,value:p}){const g=n?an(n):void 0,w=Ya({from:g==null?void 0:g.address,to:d,value:typeof p<"u"&&`${Y0(p)} ${(i==null?void 0:i.nativeCurrency.symbol)||"ETH"}`,data:o,gas:s,gasPrice:typeof a<"u"&&`${Ft(a)} gwei`,maxFeePerGas:typeof c<"u"&&`${Ft(c)} gwei`,maxPriorityFeePerGas:typeof u<"u"&&`${Ft(u)} gwei`,nonce:l});super(t.shortMessage,{cause:t,docsPath:r,metaMessages:[...t.metaMessages?[...t.metaMessages," "]:[],"Raw Call Arguments:",w].filter(Boolean)}),Object.defineProperty(this,"cause",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"CallExecutionError"}),this.cause=t}}class X0 extends ae{constructor(t,{abi:n,args:r,contractAddress:i,docsPath:o,functionName:s,sender:a}){const c=Za({abi:n,args:r,name:s}),u=c?lw({abiItem:c,args:r,includeFunctionName:!1,includeName:!1}):void 0,l=c?Qr(c,{includeName:!0}):void 0,d=Ya({address:i&&Qv(i),function:l,args:u&&u!=="()"&&`${[...Array((s==null?void 0:s.length)??0).keys()].map(()=>" ").join("")}${u}`,sender:a});super(t.shortMessage||`An unknown error occurred while executing the contract function "${s}".`,{cause:t,docsPath:o,metaMessages:[...t.metaMessages?[...t.metaMessages," "]:[],"Contract Call:",d].filter(Boolean)}),Object.defineProperty(this,"abi",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"args",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"cause",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"contractAddress",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"formattedArgs",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"functionName",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"sender",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ContractFunctionExecutionError"}),this.abi=n,this.args=r,this.cause=t,this.contractAddress=i,this.functionName=s,this.sender=a}}class xf extends ae{constructor({abi:t,data:n,functionName:r,message:i}){let o,s,a,c;if(n&&n!=="0x")try{s=O8({abi:t,data:n});const{abiItem:l,errorName:d,args:p}=s;if(d==="Error")c=p[0];else if(d==="Panic"){const[g]=p;c=cw[g]}else{const g=l?Qr(l,{includeName:!0}):void 0,w=l&&p?lw({abiItem:l,args:p,includeFunctionName:!1,includeName:!1}):void 0;a=[g?`Error: ${g}`:"",w&&w!=="()"?`       ${[...Array((d==null?void 0:d.length)??0).keys()].map(()=>" ").join("")}${w}`:""]}}catch(l){o=l}else i&&(c=i);let u;o instanceof Y2&&(u=o.signature,a=[`Unable to decode signature "${u}" as it was not found on the provided ABI.`,"Make sure you are using the correct ABI and that the error exists on it.",`You can look up the decoded signature here: https://openchain.xyz/signatures?query=${u}.`]),super(c&&c!=="execution reverted"||u?[`The contract function "${r}" reverted with the following ${u?"signature":"reason"}:`,c||u].join(`
`):`The contract function "${r}" reverted.`,{cause:o,metaMessages:a}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ContractFunctionRevertedError"}),Object.defineProperty(this,"data",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"reason",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"signature",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.data=s,this.reason=c,this.signature=u}}class k8 extends ae{constructor({functionName:t}){super(`The contract function "${t}" returned no data ("0x").`,{metaMessages:["This could be due to any of the following:",`  - The contract does not have the function "${t}",`,"  - The parameters passed to the contract function may be invalid, or","  - The address is not a contract."]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ContractFunctionZeroDataError"})}}class Q0 extends ae{constructor({data:t,message:n}){super(n||""),Object.defineProperty(this,"code",{enumerable:!0,configurable:!0,writable:!0,value:3}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"RawContractError"}),Object.defineProperty(this,"data",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.data=t}}class js extends ae{constructor({body:t,details:n,headers:r,status:i,url:o}){super("HTTP request failed.",{details:n,metaMessages:[i&&`Status: ${i}`,`URL: ${ou(o)}`,t&&`Request body: ${Rt(t)}`].filter(Boolean)}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"HttpRequestError"}),Object.defineProperty(this,"body",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"headers",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"status",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"url",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.body=t,this.headers=r,this.status=i,this.url=o}}class M8 extends ae{constructor({body:t,details:n,url:r}){super("WebSocket request failed.",{details:n,metaMessages:[`URL: ${ou(r)}`,`Request body: ${Rt(t)}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"WebSocketRequestError"})}}class eh extends ae{constructor({body:t,error:n,url:r}){super("RPC Request failed.",{cause:n,details:n.message,metaMessages:[`URL: ${ou(r)}`,`Request body: ${Rt(t)}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"RpcRequestError"}),Object.defineProperty(this,"code",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.code=n.code}}class _f extends ae{constructor({body:t,url:n}){super("The request took too long to respond.",{details:"The request timed out.",metaMessages:[`URL: ${ou(n)}`,`Request body: ${Rt(t)}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TimeoutError"})}}const B8=-1;class zt extends ae{constructor(t,{code:n,docsPath:r,metaMessages:i,shortMessage:o}){super(o,{cause:t,docsPath:r,metaMessages:i||(t==null?void 0:t.metaMessages)}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"RpcError"}),Object.defineProperty(this,"code",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.name=t.name,this.code=t instanceof eh?t.code:n??B8}}class rs extends zt{constructor(t,n){super(t,n),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ProviderRpcError"}),Object.defineProperty(this,"data",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.data=n.data}}class aa extends zt{constructor(t){super(t,{code:aa.code,shortMessage:"Invalid JSON was received by the server. An error occurred on the server while parsing the JSON text."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ParseRpcError"})}}Object.defineProperty(aa,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32700});class ca extends zt{constructor(t){super(t,{code:ca.code,shortMessage:"JSON is not a valid request object."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidRequestRpcError"})}}Object.defineProperty(ca,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32600});class la extends zt{constructor(t){super(t,{code:la.code,shortMessage:"The method does not exist / is not available."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"MethodNotFoundRpcError"})}}Object.defineProperty(la,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32601});class ua extends zt{constructor(t){super(t,{code:ua.code,shortMessage:["Invalid parameters were provided to the RPC method.","Double check you have provided the correct parameters."].join(`
`)}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidParamsRpcError"})}}Object.defineProperty(ua,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32602});class Po extends zt{constructor(t){super(t,{code:Po.code,shortMessage:"An internal error was received."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InternalRpcError"})}}Object.defineProperty(Po,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32603});class Oi extends zt{constructor(t){super(t,{code:Oi.code,shortMessage:["Missing or invalid parameters.","Double check you have provided the correct parameters."].join(`
`)}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidInputRpcError"})}}Object.defineProperty(Oi,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32e3});class da extends zt{constructor(t){super(t,{code:da.code,shortMessage:"Requested resource not found."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ResourceNotFoundRpcError"})}}Object.defineProperty(da,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32001});class Oo extends zt{constructor(t){super(t,{code:Oo.code,shortMessage:"Requested resource not available."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ResourceUnavailableRpcError"})}}Object.defineProperty(Oo,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32002});class fa extends zt{constructor(t){super(t,{code:fa.code,shortMessage:"Transaction creation failed."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TransactionRejectedRpcError"})}}Object.defineProperty(fa,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32003});class ha extends zt{constructor(t){super(t,{code:ha.code,shortMessage:"Method is not implemented."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"MethodNotSupportedRpcError"})}}Object.defineProperty(ha,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32004});class pa extends zt{constructor(t){super(t,{code:pa.code,shortMessage:"Request exceeds defined limit."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"LimitExceededRpcError"})}}Object.defineProperty(pa,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32005});class ma extends zt{constructor(t){super(t,{code:ma.code,shortMessage:"Version of JSON-RPC protocol is not supported."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"JsonRpcVersionUnsupportedError"})}}Object.defineProperty(ma,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32006});class Ut extends rs{constructor(t){super(t,{code:Ut.code,shortMessage:"User rejected the request."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"UserRejectedRequestError"})}}Object.defineProperty(Ut,"code",{enumerable:!0,configurable:!0,writable:!0,value:4001});class ga extends rs{constructor(t){super(t,{code:ga.code,shortMessage:"The requested method and/or account has not been authorized by the user."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"UnauthorizedProviderError"})}}Object.defineProperty(ga,"code",{enumerable:!0,configurable:!0,writable:!0,value:4100});class wa extends rs{constructor(t){super(t,{code:wa.code,shortMessage:"The Provider does not support the requested method."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"UnsupportedProviderMethodError"})}}Object.defineProperty(wa,"code",{enumerable:!0,configurable:!0,writable:!0,value:4200});class ba extends rs{constructor(t){super(t,{code:ba.code,shortMessage:"The Provider is disconnected from all chains."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ProviderDisconnectedError"})}}Object.defineProperty(ba,"code",{enumerable:!0,configurable:!0,writable:!0,value:4900});class ya extends rs{constructor(t){super(t,{code:ya.code,shortMessage:"The Provider is not connected to the requested chain."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ChainDisconnectedError"})}}Object.defineProperty(ya,"code",{enumerable:!0,configurable:!0,writable:!0,value:4901});class gr extends rs{constructor(t){super(t,{code:gr.code,shortMessage:"An error occurred when attempting to switch chain."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"SwitchChainError"})}}Object.defineProperty(gr,"code",{enumerable:!0,configurable:!0,writable:!0,value:4902});class L8 extends zt{constructor(t){super(t,{shortMessage:"An unknown RPC error occurred."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"UnknownRpcError"})}}const U8=3;function va(e,{abi:t,address:n,args:r,docsPath:i,functionName:o,sender:s}){const{code:a,data:c,message:u,shortMessage:l}=e instanceof Q0?e:e instanceof ae?e.walk(p=>"data"in p)||e.walk():{},d=(()=>e instanceof uu?new k8({functionName:o}):[U8,Po.code].includes(a)&&(c||u||l)?new xf({abi:t,data:typeof c=="object"?c.data:c,functionName:o,message:l??u}):e)();return new X0(d,{abi:t,args:r,contractAddress:n,docsPath:i,functionName:o,sender:s})}class is extends ae{constructor({docsPath:t}={}){super(["Could not find an Account to execute with this Action.","Please provide an Account with the `account` argument on the Action, or by supplying an `account` to the WalletClient."].join(`
`),{docsPath:t,docsSlug:"account"}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AccountNotFoundError"})}}class F8 extends ae{constructor(t,{account:n,docsPath:r,chain:i,data:o,gas:s,gasPrice:a,maxFeePerGas:c,maxPriorityFeePerGas:u,nonce:l,to:d,value:p}){const g=Ya({from:n==null?void 0:n.address,to:d,value:typeof p<"u"&&`${Y0(p)} ${(i==null?void 0:i.nativeCurrency.symbol)||"ETH"}`,data:o,gas:s,gasPrice:typeof a<"u"&&`${Ft(a)} gwei`,maxFeePerGas:typeof c<"u"&&`${Ft(c)} gwei`,maxPriorityFeePerGas:typeof u<"u"&&`${Ft(u)} gwei`,nonce:l});super(t.shortMessage,{cause:t,docsPath:r,metaMessages:[...t.metaMessages?[...t.metaMessages," "]:[],"Estimate Gas Arguments:",g].filter(Boolean)}),Object.defineProperty(this,"cause",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"EstimateGasExecutionError"}),this.cause=t}}function th(e,t){const n=(e.details||"").toLowerCase(),r=e.walk(i=>i.code===co.code);return r instanceof ae?new co({cause:e,message:r.details}):co.nodeMessage.test(n)?new co({cause:e,message:e.details}):nl.nodeMessage.test(n)?new nl({cause:e,maxFeePerGas:t==null?void 0:t.maxFeePerGas}):ff.nodeMessage.test(n)?new ff({cause:e,maxFeePerGas:t==null?void 0:t.maxFeePerGas}):hf.nodeMessage.test(n)?new hf({cause:e,nonce:t==null?void 0:t.nonce}):pf.nodeMessage.test(n)?new pf({cause:e,nonce:t==null?void 0:t.nonce}):mf.nodeMessage.test(n)?new mf({cause:e,nonce:t==null?void 0:t.nonce}):gf.nodeMessage.test(n)?new gf({cause:e}):wf.nodeMessage.test(n)?new wf({cause:e,gas:t==null?void 0:t.gas}):bf.nodeMessage.test(n)?new bf({cause:e,gas:t==null?void 0:t.gas}):yf.nodeMessage.test(n)?new yf({cause:e}):rl.nodeMessage.test(n)?new rl({cause:e,maxFeePerGas:t==null?void 0:t.maxFeePerGas,maxPriorityFeePerGas:t==null?void 0:t.maxPriorityFeePerGas}):new cu({cause:e})}function j8(e,{docsPath:t,...n}){const r=(()=>{const i=th(e,n);return i instanceof cu?e:i})();return new F8(r,{docsPath:t,...n})}function nh(e,{format:t}){return t?Object.keys(t({})).reduce((r,i)=>(e!=null&&e.hasOwnProperty(i)&&(r[i]=e[i]),r),{}):{}}function Xa(e){const{account:t,gasPrice:n,maxFeePerGas:r,maxPriorityFeePerGas:i,to:o}=e,s=t?an(t):void 0;if(s&&!$o(s.address))throw new sa({address:s.address});if(o&&!$o(o))throw new sa({address:o});if(typeof n<"u"&&(typeof r<"u"||typeof i<"u"))throw new D8;if(r&&r>2n**256n-1n)throw new nl({maxFeePerGas:r});if(i&&r&&i>r)throw new rl({maxFeePerGas:r,maxPriorityFeePerGas:i})}class W8 extends ae{constructor(){super("`baseFeeMultiplier` must be greater than 1."),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"BaseFeeScalarError"})}}class rh extends ae{constructor(){super("Chain does not support EIP-1559 fees."),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"Eip1559FeesNotSupportedError"})}}class H8 extends ae{constructor({maxPriorityFeePerGas:t}){super(`\`maxFeePerGas\` cannot be less than the \`maxPriorityFeePerGas\` (${Ft(t)} gwei).`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"MaxFeePerGasTooLowError"})}}class z8 extends ae{constructor({blockHash:t,blockNumber:n}){let r="Block";t&&(r=`Block at hash "${t}"`),n&&(r=`Block at number "${n}"`),super(`${r} could not be found.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"BlockNotFoundError"})}}async function qr(e,{blockHash:t,blockNumber:n,blockTag:r,includeTransactions:i}={}){var l,d,p;const o=r??"latest",s=i??!1,a=n!==void 0?Ie(n):void 0;let c=null;if(t?c=await e.request({method:"eth_getBlockByHash",params:[t,s]}):c=await e.request({method:"eth_getBlockByNumber",params:[a||o,s]}),!c)throw new z8({blockHash:t,blockNumber:n});return(((p=(d=(l=e.chain)==null?void 0:l.formatters)==null?void 0:d.block)==null?void 0:p.format)||J2)(c)}async function ih(e){const t=await e.request({method:"eth_gasPrice"});return BigInt(t)}async function q8(e,t){return hw(e,t)}async function hw(e,t){var o,s,a;const{block:n,chain:r=e.chain,request:i}=t||{};if(typeof((o=r==null?void 0:r.fees)==null?void 0:o.defaultPriorityFee)=="function"){const c=n||await qr(e);return r.fees.defaultPriorityFee({block:c,client:e,request:i})}else if(typeof((s=r==null?void 0:r.fees)==null?void 0:s.defaultPriorityFee)<"u")return(a=r==null?void 0:r.fees)==null?void 0:a.defaultPriorityFee;try{const c=await e.request({method:"eth_maxPriorityFeePerGas"});return su(c)}catch{const[c,u]=await Promise.all([n?Promise.resolve(n):qr(e),ih(e)]);if(typeof c.baseFeePerGas!="bigint")throw new rh;const l=u-c.baseFeePerGas;return l<0n?0n:l}}async function V8(e,t){return Cf(e,t)}async function Cf(e,t){var p,g;const{block:n,chain:r=e.chain,request:i,type:o="eip1559"}=t||{},s=await(async()=>{var w,y;return typeof((w=r==null?void 0:r.fees)==null?void 0:w.baseFeeMultiplier)=="function"?r.fees.baseFeeMultiplier({block:n,client:e,request:i}):((y=r==null?void 0:r.fees)==null?void 0:y.baseFeeMultiplier)??1.2})();if(s<1)throw new W8;const c=10**(((p=s.toString().split(".")[1])==null?void 0:p.length)??0),u=w=>w*BigInt(Math.ceil(s*c))/BigInt(c),l=n||await qr(e);if(typeof((g=r==null?void 0:r.fees)==null?void 0:g.estimateFeesPerGas)=="function")return r.fees.estimateFeesPerGas({block:n,client:e,multiply:u,request:i,type:o});if(o==="eip1559"){if(typeof l.baseFeePerGas!="bigint")throw new rh;const w=i!=null&&i.maxPriorityFeePerGas?i.maxPriorityFeePerGas:await hw(e,{block:l,chain:r,request:i}),y=u(l.baseFeePerGas);return{maxFeePerGas:(i==null?void 0:i.maxFeePerGas)??y+w,maxPriorityFeePerGas:w}}return{gasPrice:(i==null?void 0:i.gasPrice)??u(await ih(e))}}async function pw(e,{address:t,blockTag:n="latest",blockNumber:r}){const i=await e.request({method:"eth_getTransactionCount",params:[t,r?Ie(r):n]});return $t(i)}function G8(e){if(e.type)return e.type;if(typeof e.maxFeePerGas<"u"||typeof e.maxPriorityFeePerGas<"u")return"eip1559";if(typeof e.gasPrice<"u")return typeof e.accessList<"u"?"eip2930":"legacy";throw new I8({transaction:e})}async function pu(e,t){const{account:n=e.account,chain:r,gas:i,nonce:o,type:s}=t;if(!n)throw new is;const a=an(n),c=await qr(e,{blockTag:"latest"}),u={...t,from:a.address};if(typeof o>"u"&&(u.nonce=await pw(e,{address:a.address,blockTag:"pending"})),typeof s>"u")try{u.type=G8(u)}catch{u.type=typeof c.baseFeePerGas=="bigint"?"eip1559":"legacy"}if(u.type==="eip1559"){const{maxFeePerGas:l,maxPriorityFeePerGas:d}=await Cf(e,{block:c,chain:r,request:u});if(typeof t.maxPriorityFeePerGas>"u"&&t.maxFeePerGas&&t.maxFeePerGas<d)throw new H8({maxPriorityFeePerGas:d});u.maxPriorityFeePerGas=d,u.maxFeePerGas=l}else{if(typeof t.maxFeePerGas<"u"||typeof t.maxPriorityFeePerGas<"u")throw new rh;const{gasPrice:l}=await Cf(e,{block:c,chain:r,request:u,type:"legacy"});u.gasPrice=l}return typeof i>"u"&&(u.gas=await oh(e,{...u,account:{address:a.address,type:"json-rpc"}})),Xa(u),u}async function oh(e,t){var i,o,s;const n=t.account??e.account;if(!n)throw new is({docsPath:"/docs/actions/public/estimateGas"});const r=an(n);try{const{accessList:a,blockNumber:c,blockTag:u,data:l,gas:d,gasPrice:p,maxFeePerGas:g,maxPriorityFeePerGas:w,nonce:y,to:x,value:E,...b}=r.type==="local"?await pu(e,t):t,_=(c?Ie(c):void 0)||u;Xa(t);const T=((s=(o=(i=e.chain)==null?void 0:i.formatters)==null?void 0:o.transactionRequest)==null?void 0:s.format)||au,$=T({...nh(b,{format:T}),from:r.address,accessList:a,data:l,gas:d,gasPrice:p,maxFeePerGas:g,maxPriorityFeePerGas:w,nonce:y,to:x,value:E}),h=await e.request({method:"eth_estimateGas",params:_?[$,_]:[$]});return BigInt(h)}catch(a){throw j8(a,{...t,account:r,chain:e.chain})}}async function K8(e,{abi:t,address:n,args:r,functionName:i,...o}){const s=ei({abi:t,args:r,functionName:i});try{return await oh(e,{data:s,to:n,...o})}catch(a){const c=o.account?an(o.account):void 0;throw va(a,{abi:t,address:n,args:r,docsPath:"/docs/contract/estimateContractGas",functionName:i,sender:c==null?void 0:c.address})}}const v1="/docs/contract/decodeEventLog";function Qa({abi:e,data:t,strict:n,topics:r}){const i=n??!0,[o,...s]=r;if(!o)throw new S4({docsPath:v1});const a=e.find(w=>w.type==="event"&&o===V0(Qr(w)));if(!(a&&"name"in a)||a.type!=="event")throw new A4(o,{docsPath:v1});const{name:c,inputs:u}=a,l=u==null?void 0:u.some(w=>!("name"in w&&w.name));let d=l?[]:{};const p=u.filter(w=>"indexed"in w&&w.indexed);for(let w=0;w<p.length;w++){const y=p[w],x=s[w];if(!x)throw new ns({abiItem:a,param:y});d[y.name||w]=Z8({param:y,value:x})}const g=u.filter(w=>!("indexed"in w&&w.indexed));if(g.length>0){if(t&&t!=="0x")try{const w=hu(g,t);if(w)if(l)d=[...d,...w];else for(let y=0;y<g.length;y++)d[g[y].name]=w[y]}catch(w){if(i)throw w instanceof z0?new Pi({abiItem:a,data:w.data,params:w.params,size:w.size}):w}else if(i)throw new Pi({abiItem:a,data:"0x",params:g,size:0})}return{eventName:c,args:Object.values(d).length>0?d:void 0}}function Z8({param:e,value:t}){return e.type==="string"||e.type==="bytes"||e.type==="tuple"||e.type.match(/^(.*)\[(\d+)?\]$/)?t:(hu([e],t)||[])[0]}async function sh(e,{address:t,blockHash:n,fromBlock:r,toBlock:i,event:o,events:s,args:a,strict:c}={}){const u=c??!1,l=s??(o?[o]:void 0);let d=[];l&&(d=[l.flatMap(g=>Ja({abi:[g],eventName:g.name,args:a}))],o&&(d=d[0]));let p;return n?p=await e.request({method:"eth_getLogs",params:[{address:t,topics:d,blockHash:n}]}):p=await e.request({method:"eth_getLogs",params:[{address:t,topics:d,fromBlock:typeof r=="bigint"?Ie(r):r,toBlock:typeof i=="bigint"?Ie(i):i}]}),p.map(g=>{var w;try{const{eventName:y,args:x}=l?Qa({abi:l,data:g.data,topics:g.topics,strict:u}):{eventName:void 0,args:void 0};return Tn(g,{args:x,eventName:y})}catch(y){let x,E;if(y instanceof Pi||y instanceof ns){if(u)return;x=y.abiItem.name,E=(w=y.abiItem.inputs)==null?void 0:w.some(b=>!("name"in b&&b.name))}return Tn(g,{args:E?[]:{},eventName:x})}}).filter(Boolean)}async function mw(e,{abi:t,address:n,args:r,blockHash:i,eventName:o,fromBlock:s,toBlock:a,strict:c}){const u=o?Za({abi:t,name:o}):void 0,l=u?void 0:t.filter(d=>d.type==="event");return sh(e,{address:n,args:r,blockHash:i,event:u,events:l,fromBlock:s,toBlock:a,strict:c})}const ud="/docs/contract/decodeFunctionResult";function os({abi:e,args:t,functionName:n,data:r}){let i=e[0];if(n&&(i=Za({abi:e,args:t,name:n}),!i))throw new il(n,{docsPath:ud});if(i.type!=="function")throw new il(void 0,{docsPath:ud});if(!i.outputs)throw new $4(i.name,{docsPath:ud});const o=hu(i.outputs,r);if(o&&o.length>1)return o;if(o&&o.length===1)return o[0]}const J8="modulepreload",Y8=function(e){return"/"+e},x1={},Vt=function(t,n,r){if(!n||n.length===0)return t();const i=document.getElementsByTagName("link");return Promise.all(n.map(o=>{if(o=Y8(o),o in x1)return;x1[o]=!0;const s=o.endsWith(".css"),a=s?'[rel="stylesheet"]':"";if(!!r)for(let l=i.length-1;l>=0;l--){const d=i[l];if(d.href===o&&(!s||d.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${o}"]${a}`))return;const u=document.createElement("link");if(u.rel=s?"stylesheet":J8,s||(u.as="script",u.crossOrigin=""),u.href=o,document.head.appendChild(u),s)return new Promise((l,d)=>{u.addEventListener("load",l),u.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${o}`)))})})).then(()=>t())},Ef=[{inputs:[{components:[{name:"target",type:"address"},{name:"allowFailure",type:"bool"},{name:"callData",type:"bytes"}],name:"calls",type:"tuple[]"}],name:"aggregate3",outputs:[{components:[{name:"success",type:"bool"},{name:"returnData",type:"bytes"}],name:"returnData",type:"tuple[]"}],stateMutability:"view",type:"function"}],gw=[{inputs:[],name:"ResolverNotFound",type:"error"},{inputs:[],name:"ResolverWildcardNotSupported",type:"error"}],ww=[...gw,{name:"resolve",type:"function",stateMutability:"view",inputs:[{name:"name",type:"bytes"},{name:"data",type:"bytes"}],outputs:[{name:"",type:"bytes"},{name:"address",type:"address"}]}],X8=[...gw,{name:"reverse",type:"function",stateMutability:"view",inputs:[{type:"bytes",name:"reverseName"}],outputs:[{type:"string",name:"resolvedName"},{type:"address",name:"resolvedAddress"},{type:"address",name:"reverseResolver"},{type:"address",name:"resolver"}]}],_1=[{name:"text",type:"function",stateMutability:"view",inputs:[{name:"name",type:"bytes32"},{name:"key",type:"string"}],outputs:[{name:"",type:"string"}]}],C1=[{name:"addr",type:"function",stateMutability:"view",inputs:[{name:"name",type:"bytes32"}],outputs:[{name:"",type:"address"}]},{name:"addr",type:"function",stateMutability:"view",inputs:[{name:"name",type:"bytes32"},{name:"coinType",type:"uint256"}],outputs:[{name:"",type:"bytes"}]}],Q8=[{inputs:[{internalType:"address",name:"_signer",type:"address"},{internalType:"bytes32",name:"_hash",type:"bytes32"},{internalType:"bytes",name:"_signature",type:"bytes"}],stateMutability:"nonpayable",type:"constructor"}],e7="0x82ad56cb";function t7(e,{docsPath:t,...n}){const r=(()=>{const i=th(e,n);return i instanceof cu?e:i})();return new fw(r,{docsPath:t,...n})}const dd=new Map;function ah({fn:e,id:t,shouldSplitBatch:n,wait:r=0}){const i=async()=>{const u=a();o();const l=u.map(({args:d})=>d);l.length!==0&&e(l).then(d=>{u.forEach(({pendingPromise:p},g)=>{var w;return(w=p.resolve)==null?void 0:w.call(p,[d[g],d])})}).catch(d=>{u.forEach(({pendingPromise:p})=>{var g;return(g=p.reject)==null?void 0:g.call(p,d)})})},o=()=>dd.delete(t),s=()=>a().map(({args:u})=>u),a=()=>dd.get(t)||[],c=u=>dd.set(t,[...a(),u]);return{flush:o,async schedule(u){const l={},d=new Promise((w,y)=>{l.resolve=w,l.reject=y});return(n==null?void 0:n([...s(),u]))&&i(),a().length>0?(c({args:u,pendingPromise:l}),d):(c({args:u,pendingPromise:l}),setTimeout(i,r),d)}}}async function mu(e,t){var E,b,C,_;const{account:n=e.account,batch:r=!!((E=e.batch)!=null&&E.multicall),blockNumber:i,blockTag:o="latest",accessList:s,data:a,gas:c,gasPrice:u,maxFeePerGas:l,maxPriorityFeePerGas:d,nonce:p,to:g,value:w,...y}=t,x=n?an(n):void 0;try{Xa(t);const $=(i?Ie(i):void 0)||o,h=((_=(C=(b=e.chain)==null?void 0:b.formatters)==null?void 0:C.transactionRequest)==null?void 0:_.format)||au,S=h({...nh(y,{format:h}),from:x==null?void 0:x.address,accessList:s,data:a,gas:c,gasPrice:u,maxFeePerGas:l,maxPriorityFeePerGas:d,nonce:p,to:g,value:w});if(r&&n7({request:S}))try{return await r7(e,{...S,blockNumber:i,blockTag:o})}catch(D){if(!(D instanceof H2)&&!(D instanceof df))throw D}const U=await e.request({method:"eth_call",params:$?[S,$]:[S]});return U==="0x"?{data:void 0}:{data:U}}catch(T){const $=i7(T),{offchainLookup:h,offchainLookupSignature:S}=await Vt(()=>import("./ccip-58590add.js"),[]);if(($==null?void 0:$.slice(0,10))===S&&g)return{data:await h(e,{data:$,to:g})};throw t7(T,{...t,account:x,chain:e.chain})}}function n7({request:e}){const{data:t,to:n,...r}=e;return!(!t||t.startsWith(e7)||!n||Object.values(r).filter(i=>typeof i<"u").length>0)}async function r7(e,t){var y;const{batchSize:n=1024,wait:r=0}=typeof((y=e.batch)==null?void 0:y.multicall)=="object"?e.batch.multicall:{},{blockNumber:i,blockTag:o="latest",data:s,multicallAddress:a,to:c}=t;let u=a;if(!u){if(!e.chain)throw new H2;u=es({blockNumber:i,chain:e.chain,contract:"multicall3"})}const d=(i?Ie(i):void 0)||o,{schedule:p}=ah({id:`${e.uid}.${d}`,wait:r,shouldSplitBatch(x){return x.reduce((b,{data:C})=>b+(C.length-2),0)>n*2},fn:async x=>{const E=x.map(_=>({allowFailure:!0,callData:_.data,target:_.to})),b=ei({abi:Ef,args:[E],functionName:"aggregate3"}),C=await e.request({method:"eth_call",params:[{data:b,to:u},d]});return os({abi:Ef,args:[E],functionName:"aggregate3",data:C||"0x"})}}),[{returnData:g,success:w}]=await p({data:s,to:c});if(!w)throw new Q0({data:g});return g==="0x"?{data:void 0}:{data:g}}function i7(e){if(!(e instanceof ae))return;const t=e.walk();return typeof t.data=="object"?t.data.data:t.data}async function Vr(e,{abi:t,address:n,args:r,functionName:i,...o}){const s=ei({abi:t,args:r,functionName:i});try{const{data:a}=await mu(e,{data:s,to:n,...o});return os({abi:t,args:r,functionName:i,data:a||"0x"})}catch(a){throw va(a,{abi:t,address:n,args:r,docsPath:"/docs/contract/readContract",functionName:i})}}async function o7(e,{abi:t,address:n,args:r,dataSuffix:i,functionName:o,...s}){const a=s.account?an(s.account):void 0,c=ei({abi:t,args:r,functionName:o});try{const{data:u}=await mu(e,{batch:!1,data:`${c}${i?i.replace("0x",""):""}`,to:n,...s});return{result:os({abi:t,args:r,functionName:o,data:u||"0x"}),request:{abi:t,address:n,args:r,dataSuffix:i,functionName:o,...s}}}catch(u){throw va(u,{abi:t,address:n,args:r,docsPath:"/docs/contract/simulateContract",functionName:o,sender:a==null?void 0:a.address})}}const fd=new Map,E1=new Map;let s7=0;function ss(e,t,n){const r=++s7,i=()=>fd.get(e)||[],o=()=>{const l=i();fd.set(e,l.filter(d=>d.id!==r))},s=()=>{const l=E1.get(e);i().length===1&&l&&l(),o()},a=i();if(fd.set(e,[...a,{id:r,fns:t}]),a&&a.length>0)return s;const c={};for(const l in t)c[l]=(...d)=>{const p=i();p.length!==0&&p.forEach(g=>{var w,y;return(y=(w=g.fns)[l])==null?void 0:y.call(w,...d)})};const u=n(c);return typeof u=="function"&&E1.set(e,u),s}async function sl(e){return new Promise(t=>setTimeout(t,e))}function ec(e,{emitOnBegin:t,initialWaitTime:n,interval:r}){let i=!0;const o=()=>i=!1;return(async()=>{let a;t&&(a=await e({unpoll:o}));const c=await(n==null?void 0:n(a))??r;await sl(c);const u=async()=>{i&&(await e({unpoll:o}),await sl(r),u())};u()})(),o}const a7=new Map,c7=new Map;function l7(e){const t=(i,o)=>({clear:()=>o.delete(i),get:()=>o.get(i),set:s=>o.set(i,s)}),n=t(e,a7),r=t(e,c7);return{clear:()=>{n.clear(),r.clear()},promise:n,response:r}}async function u7(e,{cacheKey:t,cacheTime:n=1/0}){const r=l7(t),i=r.response.get();if(i&&n>0&&new Date().getTime()-i.created.getTime()<n)return i.data;let o=r.promise.get();o||(o=e(),r.promise.set(o));try{const s=await o;return r.response.set({created:new Date,data:s}),s}finally{r.promise.clear()}}const d7=e=>`blockNumber.${e}`;async function tc(e,{cacheTime:t=e.cacheTime,maxAge:n}={}){const r=await u7(()=>e.request({method:"eth_blockNumber"}),{cacheKey:d7(e.uid),cacheTime:n??t});return BigInt(r)}async function gu(e,{filter:t}){const n="strict"in t&&t.strict;return(await t.request({method:"eth_getFilterChanges",params:[t.id]})).map(i=>{var o;if(typeof i=="string")return i;try{const{eventName:s,args:a}="abi"in t&&t.abi?Qa({abi:t.abi,data:i.data,topics:i.topics,strict:n}):{eventName:void 0,args:void 0};return Tn(i,{args:a,eventName:s})}catch(s){let a,c;if(s instanceof Pi||s instanceof ns){if("strict"in t&&t.strict)return;a=s.abiItem.name,c=(o=s.abiItem.inputs)==null?void 0:o.some(u=>!("name"in u&&u.name))}return Tn(i,{args:c?[]:{},eventName:a})}}).filter(Boolean)}async function wu(e,{filter:t}){return t.request({method:"eth_uninstallFilter",params:[t.id]})}function f7(e,{abi:t,address:n,args:r,batch:i=!0,eventName:o,onError:s,onLogs:a,poll:c,pollingInterval:u=e.pollingInterval,strict:l}){return(typeof c<"u"?c:e.transport.type!=="webSocket")?(()=>{const w=Rt(["watchContractEvent",n,r,i,e.uid,o,u]),y=l??!1;return ss(w,{onLogs:a,onError:s},x=>{let E,b,C=!1;const _=ec(async()=>{var T;if(!C){try{b=await aw(e,{abi:t,address:n,args:r,eventName:o,strict:y})}catch{}C=!0;return}try{let $;if(b)$=await gu(e,{filter:b});else{const h=await tc(e);E&&E!==h?$=await mw(e,{abi:t,address:n,args:r,fromBlock:E+1n,toBlock:h,strict:y}):$=[],E=h}if($.length===0)return;i?x.onLogs($):$.forEach(h=>x.onLogs([h]))}catch($){b&&$ instanceof Oi&&(C=!1),(T=x.onError)==null||T.call(x,$)}},{emitOnBegin:!0,interval:u});return async()=>{b&&await wu(e,{filter:b}),_()}})})():(()=>{let w=!0,y=()=>w=!1;return(async()=>{try{const x=o?Ja({abi:t,eventName:o,args:r}):[],{unsubscribe:E}=await e.transport.subscribe({params:["logs",{address:n,topics:x}],onData(b){var _;if(!w)return;const C=b.result;try{const{eventName:T,args:$}=Qa({abi:t,data:C.data,topics:C.topics,strict:l}),h=Tn(C,{args:$,eventName:T});a([h])}catch(T){let $,h;if(T instanceof Pi||T instanceof ns){if(l)return;$=T.abiItem.name,h=(_=T.abiItem.inputs)==null?void 0:_.some(U=>!("name"in U&&U.name))}const S=Tn(C,{args:h?[]:{},eventName:$});a([S])}},onError(b){s==null||s(b)}});y=E,w||y()}catch(x){s==null||s(x)}})(),y})()}function h7(e,{docsPath:t,...n}){const r=(()=>{const i=th(e,n);return i instanceof cu?e:i})();return new R8(r,{docsPath:t,...n})}async function xa(e){const t=await e.request({method:"eth_chainId"});return $t(t)}async function ch(e,{serializedTransaction:t}){return e.request({method:"eth_sendRawTransaction",params:[t]})}async function lh(e,t){var y,x,E;const{account:n=e.account,chain:r=e.chain,accessList:i,data:o,gas:s,gasPrice:a,maxFeePerGas:c,maxPriorityFeePerGas:u,nonce:l,to:d,value:p,...g}=t;if(!n)throw new is({docsPath:"/docs/actions/wallet/sendTransaction"});const w=an(n);try{Xa(t);let b;if(r!==null&&(b=await xa(e),z2({currentChainId:b,chain:r})),w.type==="local"){const T=await pu(e,{account:w,accessList:i,chain:r,data:o,gas:s,gasPrice:a,maxFeePerGas:c,maxPriorityFeePerGas:u,nonce:l,to:d,value:p,...g});b||(b=await xa(e));const $=(y=r==null?void 0:r.serializers)==null?void 0:y.transaction,h=await w.signTransaction({...T,chainId:b},{serializer:$});return await ch(e,{serializedTransaction:h})}const C=((E=(x=r==null?void 0:r.formatters)==null?void 0:x.transactionRequest)==null?void 0:E.format)||au,_=C({...nh(g,{format:C}),accessList:i,data:o,from:w.address,gas:s,gasPrice:a,maxFeePerGas:c,maxPriorityFeePerGas:u,nonce:l,to:d,value:p});return await e.request({method:"eth_sendTransaction",params:[_]})}catch(b){throw h7(b,{...t,account:w,chain:t.chain||void 0})}}async function p7(e,{abi:t,address:n,args:r,dataSuffix:i,functionName:o,...s}){const a=ei({abi:t,args:r,functionName:o});return await lh(e,{data:`${a}${i?i.replace("0x",""):""}`,to:n,...s})}async function m7(e,{chain:t}){const{id:n,name:r,nativeCurrency:i,rpcUrls:o,blockExplorers:s}=t;await e.request({method:"wallet_addEthereumChain",params:[{chainId:Ie(n),chainName:r,nativeCurrency:i,rpcUrls:o.default.http,blockExplorerUrls:s?Object.values(s).map(({url:a})=>a):void 0}]})}const Tf=256;let Ec=Tf,Tc;function g7(e=11){if(!Tc||Ec+e>Tf*2){Tc="",Ec=0;for(let t=0;t<Tf;t++)Tc+=(256+Math.random()*256|0).toString(16).substring(1)}return Tc.substring(Ec,Ec+++e)}function bw(e){const{batch:t,cacheTime:n=e.pollingInterval??4e3,key:r="base",name:i="Base Client",pollingInterval:o=4e3,type:s="base"}=e,a=e.chain,c=e.account?an(e.account):void 0,{config:u,request:l,value:d}=e.transport({chain:a,pollingInterval:o}),p={...u,...d},g={account:c,batch:t,cacheTime:n,chain:a,key:r,name:i,pollingInterval:o,request:l,transport:p,type:s,uid:g7()};function w(y){return x=>{const E=x(y);for(const C in g)delete E[C];const b={...y,...E};return Object.assign(b,{extend:w(b)})}}return Object.assign(g,{extend:w(g)})}function yw(e,{delay:t=100,retryCount:n=2,shouldRetry:r=()=>!0}={}){return new Promise((i,o)=>{const s=async({count:a=0}={})=>{const c=async({error:u})=>{const l=typeof t=="function"?t({count:a,error:u}):t;l&&await sl(l),s({count:a+1})};try{const u=await e();i(u)}catch(u){if(a<n&&await r({count:a,error:u}))return c({error:u});o(u)}};s()})}const vw=e=>"code"in e?e.code!==-1&&e.code!==-32004&&e.code!==-32005&&e.code!==-32042&&e.code!==-32603:e instanceof js&&e.status?e.status!==403&&e.status!==408&&e.status!==413&&e.status!==429&&e.status!==500&&e.status!==502&&e.status!==503&&e.status!==504:!1;function w7(e,{retryDelay:t=150,retryCount:n=3}={}){return async r=>yw(async()=>{try{return await e(r)}catch(i){const o=i;switch(o.code){case aa.code:throw new aa(o);case ca.code:throw new ca(o);case la.code:throw new la(o);case ua.code:throw new ua(o);case Po.code:throw new Po(o);case Oi.code:throw new Oi(o);case da.code:throw new da(o);case Oo.code:throw new Oo(o);case fa.code:throw new fa(o);case ha.code:throw new ha(o);case pa.code:throw new pa(o);case ma.code:throw new ma(o);case Ut.code:throw new Ut(o);case ga.code:throw new ga(o);case wa.code:throw new wa(o);case ba.code:throw new ba(o);case ya.code:throw new ya(o);case gr.code:throw new gr(o);case 5e3:throw new Ut(o);default:throw i instanceof ae?i:new L8(o)}}},{delay:({count:i,error:o})=>{var s;if(o&&o instanceof js){const a=(s=o==null?void 0:o.headers)==null?void 0:s.get("Retry-After");if(a!=null&&a.match(/\d/))return parseInt(a)*1e3}return~~(1<<i)*t},retryCount:n,shouldRetry:({error:i})=>!vw(i)})}function bu({key:e,name:t,request:n,retryCount:r=3,retryDelay:i=150,timeout:o,type:s},a){return{config:{key:e,name:t,request:n,retryCount:r,retryDelay:i,timeout:o,type:s},request:w7(n,{retryCount:r,retryDelay:i}),value:a}}function uh(e,t={}){const{key:n="custom",name:r="Custom Provider",retryDelay:i}=t;return({retryCount:o})=>bu({key:n,name:r,request:e.request.bind(e),retryCount:t.retryCount??o,retryDelay:i,type:"custom"})}function T1(e,t={}){const{key:n="fallback",name:r="Fallback",rank:i=!1,retryCount:o,retryDelay:s}=t;return({chain:a,pollingInterval:c=4e3,timeout:u})=>{let l=e,d=()=>{};const p=bu({key:n,name:r,async request({method:g,params:w}){const y=async(x=0)=>{const E=l[x]({chain:a,retryCount:0,timeout:u});try{const b=await E.request({method:g,params:w});return d({method:g,params:w,response:b,transport:E,status:"success"}),b}catch(b){if(d({error:b,method:g,params:w,transport:E,status:"error"}),vw(b)||x===l.length-1)throw b;return y(x+1)}};return y()},retryCount:o,retryDelay:s,type:"fallback"},{onResponse:g=>d=g,transports:l.map(g=>g({chain:a,retryCount:0}))});if(i){const g=typeof i=="object"?i:{};b7({chain:a,interval:g.interval??c,onTransports:w=>l=w,sampleCount:g.sampleCount,timeout:g.timeout,transports:l,weights:g.weights})}return p}}function b7({chain:e,interval:t=4e3,onTransports:n,sampleCount:r=10,timeout:i=1e3,transports:o,weights:s={}}){const{stability:a=.7,latency:c=.3}=s,u=[],l=async()=>{const d=await Promise.all(o.map(async w=>{const y=w({chain:e,retryCount:0,timeout:i}),x=Date.now();let E,b;try{await y.request({method:"net_listening"}),b=1}catch{b=0}finally{E=Date.now()}return{latency:E-x,success:b}}));u.push(d),u.length>r&&u.shift();const p=Math.max(...u.map(w=>Math.max(...w.map(({latency:y})=>y)))),g=o.map((w,y)=>{const x=u.map(T=>T[y].latency),b=1-x.reduce((T,$)=>T+$,0)/x.length/p,C=u.map(T=>T[y].success),_=C.reduce((T,$)=>T+$,0)/C.length;return _===0?[0,y]:[c*b+a*_,y]}).sort((w,y)=>y[0]-w[0]);n(g.map(([,w])=>o[w])),await sl(t),l()};l()}class xw extends ae{constructor(){super("No URL was provided to the Transport. Please provide a valid RPC URL to the Transport.",{docsPath:"/docs/clients/intro"})}}function y7(){if(typeof WebSocket<"u")return WebSocket;if(typeof global.WebSocket<"u")return global.WebSocket;if(typeof window.WebSocket<"u")return window.WebSocket;if(typeof self.WebSocket<"u")return self.WebSocket;throw new Error("`WebSocket` is not supported in this environment")}const S1=y7();function _w(e,{errorInstance:t=new Error("timed out"),timeout:n,signal:r}){return new Promise((i,o)=>{(async()=>{let s;try{const a=new AbortController;n>0&&(s=setTimeout(()=>{r?a.abort():o(t)},n)),i(await e({signal:a==null?void 0:a.signal}))}catch(a){a.name==="AbortError"&&o(t),o(a)}finally{clearTimeout(s)}})()})}let Sf=0;async function v7(e,{body:t,fetchOptions:n={},timeout:r=1e4}){var a;const{headers:i,method:o,signal:s}=n;try{const c=await _w(async({signal:l})=>await fetch(e,{...n,body:Array.isArray(t)?Rt(t.map(p=>({jsonrpc:"2.0",id:p.id??Sf++,...p}))):Rt({jsonrpc:"2.0",id:t.id??Sf++,...t}),headers:{...i,"Content-Type":"application/json"},method:o||"POST",signal:s||(r>0?l:void 0)}),{errorInstance:new _f({body:t,url:e}),timeout:r,signal:!0});let u;if((a=c.headers.get("Content-Type"))!=null&&a.startsWith("application/json")?u=await c.json():u=await c.text(),!c.ok)throw new js({body:t,details:Rt(u.error)||c.statusText,headers:c.headers,status:c.status,url:e});return u}catch(c){throw c instanceof js||c instanceof _f?c:new js({body:t,details:c.message,url:e})}}const hd=new Map;async function pd(e){let t=hd.get(e);if(t)return t;const{schedule:n}=ah({id:e,fn:async()=>{const o=new S1(e),s=new Map,a=new Map,c=({data:l})=>{const d=JSON.parse(l),p=d.method==="eth_subscription",g=p?d.params.subscription:d.id,w=p?a:s,y=w.get(g);y&&y({data:l}),p||w.delete(g)},u=()=>{hd.delete(e),o.removeEventListener("close",u),o.removeEventListener("message",c)};return o.addEventListener("close",u),o.addEventListener("message",c),o.readyState===S1.CONNECTING&&await new Promise((l,d)=>{o&&(o.onopen=l,o.onerror=d)}),t=Object.assign(o,{requests:s,subscriptions:a}),hd.set(e,t),[t]}}),[r,[i]]=await n();return i}function x7(e,{body:t,onResponse:n}){if(e.readyState===e.CLOSED||e.readyState===e.CLOSING)throw new M8({body:t,url:e.url,details:"Socket is closed."});const r=Sf++,i=({data:o})=>{var a;const s=JSON.parse(o);typeof s.id=="number"&&r!==s.id||(n==null||n(s),t.method==="eth_subscribe"&&typeof s.result=="string"&&e.subscriptions.set(s.result,i),t.method==="eth_unsubscribe"&&e.subscriptions.delete((a=t.params)==null?void 0:a[0]))};return e.requests.set(r,i),e.send(JSON.stringify({jsonrpc:"2.0",...t,id:r})),e}async function _7(e,{body:t,timeout:n=1e4}){return _w(()=>new Promise(r=>xo.webSocket(e,{body:t,onResponse:r})),{errorInstance:new _f({body:t,url:e.url}),timeout:n})}const xo={http:v7,webSocket:x7,webSocketAsync:_7};function C7(e,t={}){const{batch:n,fetchOptions:r,key:i="http",name:o="HTTP JSON-RPC",retryDelay:s}=t;return({chain:a,retryCount:c,timeout:u})=>{const{batchSize:l=1e3,wait:d=0}=typeof n=="object"?n:{},p=t.retryCount??c,g=u??t.timeout??1e4,w=e||(a==null?void 0:a.rpcUrls.default.http[0]);if(!w)throw new xw;return bu({key:i,name:o,async request({method:y,params:x}){const E={method:y,params:x},{schedule:b}=ah({id:`${e}`,wait:d,shouldSplitBatch($){return $.length>l},fn:$=>xo.http(w,{body:$,fetchOptions:r,timeout:g})}),C=async $=>n?b($):[await xo.http(w,{body:$,fetchOptions:r,timeout:g})],[{error:_,result:T}]=await C(E);if(_)throw new eh({body:E,error:_,url:w});return T},retryCount:p,retryDelay:s,timeout:g,type:"http"},{fetchOptions:r,url:e})}}function dh(e,t){var r,i,o;if(!(e instanceof ae))return!1;const n=e.walk(s=>s instanceof xf);return n instanceof xf?!!(((r=n.data)==null?void 0:r.errorName)==="ResolverNotFound"||((i=n.data)==null?void 0:i.errorName)==="ResolverWildcardNotSupported"||(o=n.reason)!=null&&o.includes("Wildcard on non-extended resolvers is not supported")||t==="reverse"&&n.reason===cw[50]):!1}function Cw(e){if(e.length!==66||e.indexOf("[")!==0||e.indexOf("]")!==65)return null;const t=`0x${e.slice(1,65)}`;return qn(t)?t:null}function Wc(e){let t=new Uint8Array(32).fill(0);if(!e)return oa(t);const n=e.split(".");for(let r=n.length-1;r>=0;r-=1){const i=Cw(n[r]),o=i?zr(i):It(hr(n[r]),"bytes");t=It(mr([t,o]),"bytes")}return oa(t)}function E7(e){return`[${e.slice(2)}]`}function T7(e){const t=new Uint8Array(32).fill(0);return e?Cw(e)||It(hr(e)):oa(t)}function yu(e){const t=e.replace(/^\.|\.$/gm,"");if(t.length===0)return new Uint8Array(1);const n=new Uint8Array(hr(t).byteLength+2);let r=0;const i=t.split(".");for(let o=0;o<i.length;o++){let s=hr(i[o]);s.byteLength>255&&(s=hr(E7(T7(i[o])))),n[r]=s.length,n.set(s,r+1),r+=s.length+1}return n.byteLength!==r+1?n.slice(0,r+1):n}async function S7(e,{blockNumber:t,blockTag:n,coinType:r,name:i,universalResolverAddress:o}){let s=o;if(!s){if(!e.chain)throw new Error("client chain not configured. universalResolverAddress is required.");s=es({blockNumber:t,chain:e.chain,contract:"ensUniversalResolver"})}try{const a=ei({abi:C1,functionName:"addr",...r!=null?{args:[Wc(i),BigInt(r)]}:{args:[Wc(i)]}}),c=await Vr(e,{address:s,abi:ww,functionName:"resolve",args:[vr(yu(i)),a],blockNumber:t,blockTag:n});if(c[0]==="0x")return null;const u=os({abi:C1,args:r!=null?[Wc(i),BigInt(r)]:void 0,functionName:"addr",data:c[0]});return u==="0x"||Ti(u)==="0x00"?null:u}catch(a){if(dh(a,"resolve"))return null;throw a}}class A7 extends ae{constructor({data:t}){super("Unable to extract image from metadata. The metadata may be malformed or invalid.",{metaMessages:["- Metadata must be a JSON object with at least an `image`, `image_url` or `image_data` property.","",`Provided data: ${JSON.stringify(t)}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"EnsAvatarInvalidMetadataError"})}}class vs extends ae{constructor({reason:t}){super(`ENS NFT avatar URI is invalid. ${t}`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"EnsAvatarInvalidNftUriError"})}}class fh extends ae{constructor({uri:t}){super(`Unable to resolve ENS avatar URI "${t}". The URI may be malformed, invalid, or does not respond with a valid image.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"EnsAvatarUriResolutionError"})}}class $7 extends ae{constructor({namespace:t}){super(`ENS NFT avatar namespace "${t}" is not supported. Must be "erc721" or "erc1155".`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"EnsAvatarUnsupportedNamespaceError"})}}const P7=/(?<protocol>https?:\/\/[^\/]*|ipfs:\/|ipns:\/|ar:\/)?(?<root>\/)?(?<subpath>ipfs\/|ipns\/)?(?<target>[\w\-.]+)(?<subtarget>\/.*)?/,O7=/^(Qm[1-9A-HJ-NP-Za-km-z]{44,}|b[A-Za-z2-7]{58,}|B[A-Z2-7]{58,}|z[1-9A-HJ-NP-Za-km-z]{48,}|F[0-9A-F]{50,})(\/(?<target>[\w\-.]+))?(?<subtarget>\/.*)?$/,D7=/^data:([a-zA-Z\-/+]*);base64,([^"].*)/,I7=/^data:([a-zA-Z\-/+]*)?(;[a-zA-Z0-9].*?)?(,)/;async function R7(e){try{const t=await fetch(e,{method:"HEAD"});if(t.status===200){const n=t.headers.get("content-type");return n==null?void 0:n.startsWith("image/")}return!1}catch(t){return typeof t=="object"&&typeof t.response<"u"||!globalThis.hasOwnProperty("Image")?!1:new Promise(n=>{const r=new Image;r.onload=()=>{n(!0)},r.onerror=()=>{n(!1)},r.src=e})}}function A1(e,t){return e?e.endsWith("/")?e.slice(0,-1):e:t}function Ew({uri:e,gatewayUrls:t}){const n=D7.test(e);if(n)return{uri:e,isOnChain:!0,isEncoded:n};const r=A1(t==null?void 0:t.ipfs,"https://ipfs.io"),i=A1(t==null?void 0:t.arweave,"https://arweave.net"),o=e.match(P7),{protocol:s,subpath:a,target:c,subtarget:u=""}=(o==null?void 0:o.groups)||{},l=s==="ipns:/"||a==="ipns/",d=s==="ipfs:/"||a==="ipfs/"||O7.test(e);if(e.startsWith("http")&&!l&&!d){let g=e;return t!=null&&t.arweave&&(g=e.replace(/https:\/\/arweave.net/g,t==null?void 0:t.arweave)),{uri:g,isOnChain:!1,isEncoded:!1}}if((l||d)&&c)return{uri:`${r}/${l?"ipns":"ipfs"}/${c}${u}`,isOnChain:!1,isEncoded:!1};if(s==="ar:/"&&c)return{uri:`${i}/${c}${u||""}`,isOnChain:!1,isEncoded:!1};let p=e.replace(I7,"");if(p.startsWith("<svg")&&(p=`data:image/svg+xml;base64,${btoa(p)}`),p.startsWith("data:")||p.startsWith("{"))return{uri:p,isOnChain:!0,isEncoded:!1};throw new fh({uri:e})}function Tw(e){if(typeof e!="object"||!("image"in e)&&!("image_url"in e)&&!("image_data"in e))throw new A7({data:e});return e.image||e.image_url||e.image_data}async function N7({gatewayUrls:e,uri:t}){try{const n=await fetch(t).then(i=>i.json());return await hh({gatewayUrls:e,uri:Tw(n)})}catch{throw new fh({uri:t})}}async function hh({gatewayUrls:e,uri:t}){const{uri:n,isOnChain:r}=Ew({uri:t,gatewayUrls:e});if(r||await R7(n))return n;throw new fh({uri:t})}function k7(e){let t=e;t.startsWith("did:nft:")&&(t=t.replace("did:nft:","").replace(/_/g,"/"));const[n,r,i]=t.split("/"),[o,s]=n.split(":"),[a,c]=r.split(":");if(!o||o.toLowerCase()!=="eip155")throw new vs({reason:"Only EIP-155 supported"});if(!s)throw new vs({reason:"Chain ID not found"});if(!c)throw new vs({reason:"Contract address not found"});if(!i)throw new vs({reason:"Token ID not found"});if(!a)throw new vs({reason:"ERC namespace not found"});return{chainID:parseInt(s),namespace:a.toLowerCase(),contractAddress:c,tokenID:i}}async function M7(e,{nft:t}){if(t.namespace==="erc721")return Vr(e,{address:t.contractAddress,abi:[{name:"tokenURI",type:"function",stateMutability:"view",inputs:[{name:"tokenId",type:"uint256"}],outputs:[{name:"",type:"string"}]}],functionName:"tokenURI",args:[BigInt(t.tokenID)]});if(t.namespace==="erc1155")return Vr(e,{address:t.contractAddress,abi:[{name:"uri",type:"function",stateMutability:"view",inputs:[{name:"_id",type:"uint256"}],outputs:[{name:"",type:"string"}]}],functionName:"uri",args:[BigInt(t.tokenID)]});throw new $7({namespace:t.namespace})}async function B7(e,{gatewayUrls:t,record:n}){return/eip155:/i.test(n)?L7(e,{gatewayUrls:t,record:n}):hh({uri:n,gatewayUrls:t})}async function L7(e,{gatewayUrls:t,record:n}){const r=k7(n),i=await M7(e,{nft:r}),{uri:o,isOnChain:s,isEncoded:a}=Ew({uri:i,gatewayUrls:t});if(s&&(o.includes("data:application/json;base64,")||o.startsWith("{"))){const u=a?atob(o.replace("data:application/json;base64,","")):o,l=JSON.parse(u);return hh({uri:Tw(l),gatewayUrls:t})}let c=r.tokenID;return r.namespace==="erc1155"&&(c=c.replace("0x","").padStart(64,"0")),N7({gatewayUrls:t,uri:o.replace(/(?:0x)?{id}/,c)})}async function Sw(e,{blockNumber:t,blockTag:n,name:r,key:i,universalResolverAddress:o}){let s=o;if(!s){if(!e.chain)throw new Error("client chain not configured. universalResolverAddress is required.");s=es({blockNumber:t,chain:e.chain,contract:"ensUniversalResolver"})}try{const a=await Vr(e,{address:s,abi:ww,functionName:"resolve",args:[vr(yu(r)),ei({abi:_1,functionName:"text",args:[Wc(r),i]})],blockNumber:t,blockTag:n});if(a[0]==="0x")return null;const c=os({abi:_1,functionName:"text",data:a[0]});return c===""?null:c}catch(a){if(dh(a,"resolve"))return null;throw a}}async function U7(e,{blockNumber:t,blockTag:n,gatewayUrls:r,name:i,universalResolverAddress:o}){const s=await Sw(e,{blockNumber:t,blockTag:n,key:"avatar",name:i,universalResolverAddress:o});if(!s)return null;try{return await B7(e,{record:s,gatewayUrls:r})}catch{return null}}async function F7(e,{address:t,blockNumber:n,blockTag:r,universalResolverAddress:i}){let o=i;if(!o){if(!e.chain)throw new Error("client chain not configured. universalResolverAddress is required.");o=es({blockNumber:n,chain:e.chain,contract:"ensUniversalResolver"})}const s=`${t.toLowerCase().substring(2)}.addr.reverse`;try{return(await Vr(e,{address:o,abi:X8,functionName:"reverse",args:[vr(yu(s))],blockNumber:n,blockTag:r}))[0]}catch(a){if(dh(a,"reverse"))return null;throw a}}async function j7(e,{blockNumber:t,blockTag:n,name:r,universalResolverAddress:i}){let o=i;if(!o){if(!e.chain)throw new Error("client chain not configured. universalResolverAddress is required.");o=es({blockNumber:t,chain:e.chain,contract:"ensUniversalResolver"})}const[s]=await Vr(e,{address:o,abi:[{inputs:[{type:"bytes"}],name:"findResolver",outputs:[{type:"address"},{type:"bytes32"}],stateMutability:"view",type:"function"}],functionName:"findResolver",args:[vr(yu(r))],blockNumber:t,blockTag:n});return s}async function W7(e){const t=fu(e,{method:"eth_newBlockFilter"}),n=await e.request({method:"eth_newBlockFilter"});return{id:n,request:t(n),type:"block"}}async function Aw(e,{address:t,args:n,event:r,events:i,fromBlock:o,strict:s,toBlock:a}={}){const c=i??(r?[r]:void 0),u=fu(e,{method:"eth_newFilter"});let l=[];c&&(l=[c.flatMap(p=>Ja({abi:[p],eventName:p.name,args:n}))],r&&(l=l[0]));const d=await e.request({method:"eth_newFilter",params:[{address:t,fromBlock:typeof o=="bigint"?Ie(o):o,toBlock:typeof a=="bigint"?Ie(a):a,...l.length?{topics:l}:{}}]});return{abi:c,args:n,eventName:r?r.name:void 0,fromBlock:o,id:d,request:u(d),strict:s,toBlock:a,type:"event"}}async function $w(e){const t=fu(e,{method:"eth_newPendingTransactionFilter"}),n=await e.request({method:"eth_newPendingTransactionFilter"});return{id:n,request:t(n),type:"transaction"}}async function H7(e,{address:t,blockNumber:n,blockTag:r="latest"}){const i=n?Ie(n):void 0,o=await e.request({method:"eth_getBalance",params:[t,i||r]});return BigInt(o)}async function z7(e,{blockHash:t,blockNumber:n,blockTag:r="latest"}={}){const i=n!==void 0?Ie(n):void 0;let o;return t?o=await e.request({method:"eth_getBlockTransactionCountByHash",params:[t]}):o=await e.request({method:"eth_getBlockTransactionCountByNumber",params:[i||r]}),$t(o)}async function q7(e,{address:t,blockNumber:n,blockTag:r="latest"}){const i=n!==void 0?Ie(n):void 0,o=await e.request({method:"eth_getCode",params:[t,i||r]});if(o!=="0x")return o}function V7(e){var t;return{baseFeePerGas:e.baseFeePerGas.map(n=>BigInt(n)),gasUsedRatio:e.gasUsedRatio,oldestBlock:BigInt(e.oldestBlock),reward:(t=e.reward)==null?void 0:t.map(n=>n.map(r=>BigInt(r)))}}async function G7(e,{blockCount:t,blockNumber:n,blockTag:r="latest",rewardPercentiles:i}){const o=n?Ie(n):void 0,s=await e.request({method:"eth_feeHistory",params:[Ie(t),o||r,i]});return V7(s)}async function K7(e,{filter:t}){const n=t.strict??!1;return(await t.request({method:"eth_getFilterLogs",params:[t.id]})).map(i=>{var o;try{const{eventName:s,args:a}="abi"in t&&t.abi?Qa({abi:t.abi,data:i.data,topics:i.topics,strict:n}):{eventName:void 0,args:void 0};return Tn(i,{args:a,eventName:s})}catch(s){let a,c;if(s instanceof Pi||s instanceof ns){if("strict"in t&&t.strict)return;a=s.abiItem.name,c=(o=s.abiItem.inputs)==null?void 0:o.some(u=>!("name"in u&&u.name))}return Tn(i,{args:c?[]:{},eventName:a})}}).filter(Boolean)}const Z7=/^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/,J7=/^(u?int)(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/;function Y7({domain:e,message:t,primaryType:n,types:r}){const i=typeof e>"u"?{}:e,o={EIP712Domain:Nw({domain:i}),...r};Rw({domain:i,message:t,primaryType:n,types:o});const s=["0x1901"];return i&&s.push(X7({domain:i,types:o})),n!=="EIP712Domain"&&s.push(Pw({data:t,primaryType:n,types:o})),It(mr(s))}function X7({domain:e,types:t}){return Pw({data:e,primaryType:"EIP712Domain",types:t})}function Pw({data:e,primaryType:t,types:n}){const r=Ow({data:e,primaryType:t,types:n});return It(r)}function Ow({data:e,primaryType:t,types:n}){const r=[{type:"bytes32"}],i=[Q7({primaryType:t,types:n})];for(const o of n[t]){const[s,a]=Iw({types:n,name:o.name,type:o.type,value:e[o.name]});r.push(s),i.push(a)}return Ka(r,i)}function Q7({primaryType:e,types:t}){const n=vr(ex({primaryType:e,types:t}));return It(n)}function ex({primaryType:e,types:t}){let n="";const r=Dw({primaryType:e,types:t});r.delete(e);const i=[e,...Array.from(r).sort()];for(const o of i)n+=`${o}(${t[o].map(({name:s,type:a})=>`${a} ${s}`).join(",")})`;return n}function Dw({primaryType:e,types:t},n=new Set){const r=e.match(/^\w*/u),i=r==null?void 0:r[0];if(n.has(i)||t[i]===void 0)return n;n.add(i);for(const o of t[i])Dw({primaryType:o.type,types:t},n);return n}function Iw({types:e,name:t,type:n,value:r}){if(e[n]!==void 0)return[{type:"bytes32"},It(Ow({data:r,primaryType:n,types:e}))];if(n==="bytes")return r=`0x${(r.length%2?"0":"")+r.slice(2)}`,[{type:"bytes32"},It(r)];if(n==="string")return[{type:"bytes32"},It(vr(r))];if(n.lastIndexOf("]")===n.length-1){const i=n.slice(0,n.lastIndexOf("[")),o=r.map(s=>Iw({name:t,type:i,types:e,value:s}));return[{type:"bytes32"},It(Ka(o.map(([s])=>s),o.map(([,s])=>s)))]}return[{type:n},r]}function Rw({domain:e,message:t,primaryType:n,types:r}){const i=r,o=(s,a)=>{for(const c of s){const{name:u,type:l}=c,d=l,p=a[u],g=d.match(J7);if(g&&(typeof p=="number"||typeof p=="bigint")){const[x,E,b]=g;Ie(p,{signed:E==="int",size:parseInt(b)/8})}if(d==="address"&&typeof p=="string"&&!$o(p))throw new sa({address:p});const w=d.match(Z7);if(w){const[x,E]=w;if(E&&ht(p)!==parseInt(E))throw new P4({expectedSize:parseInt(E),givenSize:ht(p)})}const y=i[d];y&&o(y,p)}};if(i.EIP712Domain&&e&&o(i.EIP712Domain,e),n!=="EIP712Domain"){const s=i[n];o(s,t)}}function Nw({domain:e}){return[typeof(e==null?void 0:e.name)=="string"&&{name:"name",type:"string"},(e==null?void 0:e.version)&&{name:"version",type:"string"},typeof(e==null?void 0:e.chainId)=="number"&&{name:"chainId",type:"uint256"},(e==null?void 0:e.verifyingContract)&&{name:"verifyingContract",type:"address"},(e==null?void 0:e.salt)&&{name:"salt",type:"bytes32"}].filter(Boolean)}const md="/docs/contract/encodeDeployData";function kw({abi:e,args:t,bytecode:n}){if(!t||t.length===0)return n;const r=e.find(o=>"type"in o&&o.type==="constructor");if(!r)throw new _4({docsPath:md});if(!("inputs"in r))throw new f1({docsPath:md});if(!r.inputs||r.inputs.length===0)throw new f1({docsPath:md});const i=Ka(r.inputs,t);return H0([n,i])}function tx(e,t){const n=(()=>typeof e=="string"?hr(e):e.raw instanceof Uint8Array?e.raw:zr(e.raw))(),r=hr(`Ethereum Signed Message:
${n.length}`);return It(mr([r,n]),t)}function nx(e){return e.map(t=>({...t,value:BigInt(t.value)}))}function rx(e){return{...e,balance:e.balance?BigInt(e.balance):void 0,nonce:e.nonce?$t(e.nonce):void 0,storageProof:e.storageProof?nx(e.storageProof):void 0}}async function ix(e,{address:t,blockNumber:n,blockTag:r,storageKeys:i}){const o=r??"latest",s=n!==void 0?Ie(n):void 0,a=await e.request({method:"eth_getProof",params:[t,i,s||o]});return rx(a)}async function ox(e,{address:t,blockNumber:n,blockTag:r="latest",slot:i}){const o=n!==void 0?Ie(n):void 0;return await e.request({method:"eth_getStorageAt",params:[t,i,o||r]})}async function ph(e,{blockHash:t,blockNumber:n,blockTag:r,hash:i,index:o}){var l,d,p;const s=r||"latest",a=n!==void 0?Ie(n):void 0;let c=null;if(i?c=await e.request({method:"eth_getTransactionByHash",params:[i]}):t?c=await e.request({method:"eth_getTransactionByBlockHashAndIndex",params:[t,Ie(o)]}):(a||s)&&(c=await e.request({method:"eth_getTransactionByBlockNumberAndIndex",params:[a||s,Ie(o)]})),!c)throw new uw({blockHash:t,blockNumber:n,blockTag:s,hash:i,index:o});return(((p=(d=(l=e.chain)==null?void 0:l.formatters)==null?void 0:d.transaction)==null?void 0:p.format)||Z2)(c)}async function sx(e,{hash:t,transactionReceipt:n}){const[r,i]=await Promise.all([tc(e),t?ph(e,{hash:t}):void 0]),o=(n==null?void 0:n.blockNumber)||(i==null?void 0:i.blockNumber);return o?r-o+1n:0n}async function Af(e,{hash:t}){var i,o,s;const n=await e.request({method:"eth_getTransactionReceipt",params:[t]});if(!n)throw new dw({hash:t});return(((s=(o=(i=e.chain)==null?void 0:i.formatters)==null?void 0:o.transactionReceipt)==null?void 0:s.format)||p4)(n)}async function ax(e,t){var y;const{allowFailure:n=!0,batchSize:r,blockNumber:i,blockTag:o,contracts:s,multicallAddress:a}=t,c=r??(typeof((y=e.batch)==null?void 0:y.multicall)=="object"&&e.batch.multicall.batchSize||1024);let u=a;if(!u){if(!e.chain)throw new Error("client chain not configured. multicallAddress is required.");u=es({blockNumber:i,chain:e.chain,contract:"multicall3"})}const l=[[]];let d=0,p=0;for(let x=0;x<s.length;x++){const{abi:E,address:b,args:C,functionName:_}=s[x];try{const T=ei({abi:E,args:C,functionName:_});p+=(T.length-2)/2,c>0&&p>c&&l[d].length>0&&(d++,p=(T.length-2)/2,l[d]=[]),l[d]=[...l[d],{allowFailure:!0,callData:T,target:b}]}catch(T){const $=va(T,{abi:E,address:b,args:C,docsPath:"/docs/contract/multicall",functionName:_});if(!n)throw $;l[d]=[...l[d],{allowFailure:!0,callData:"0x",target:b}]}}const g=await Promise.allSettled(l.map(x=>Vr(e,{abi:Ef,address:u,args:[x],blockNumber:i,blockTag:o,functionName:"aggregate3"}))),w=[];for(let x=0;x<g.length;x++){const E=g[x];if(E.status==="rejected"){if(!n)throw E.reason;for(let C=0;C<l[x].length;C++)w.push({status:"failure",error:E.reason,result:void 0});continue}const b=E.value;for(let C=0;C<b.length;C++){const{returnData:_,success:T}=b[C],{callData:$}=l[x][C],{abi:h,address:S,functionName:U,args:D}=s[w.length];try{if($==="0x")throw new uu;if(!T)throw new Q0({data:_});const R=os({abi:h,args:D,data:_,functionName:U});w.push(n?{result:R,status:"success"}:R)}catch(R){const L=va(R,{abi:h,address:S,args:D,docsPath:"/docs/contract/multicall",functionName:U});if(!n)throw L;w.push({error:L,result:void 0,status:"failure"})}}}if(w.length!==s.length)throw new ae("multicall results mismatch");return w}const cx="0x60806040523480156200001157600080fd5b50604051620007003803806200070083398101604081905262000034916200056f565b6000620000438484846200004f565b9050806000526001601ff35b600080846001600160a01b0316803b806020016040519081016040528181526000908060200190933c90507f6492649264926492649264926492649264926492649264926492649264926492620000a68462000451565b036200021f57600060608085806020019051810190620000c79190620005ce565b8651929550909350915060000362000192576000836001600160a01b031683604051620000f5919062000643565b6000604051808303816000865af19150503d806000811462000134576040519150601f19603f3d011682016040523d82523d6000602084013e62000139565b606091505b5050905080620001905760405162461bcd60e51b815260206004820152601e60248201527f5369676e617475726556616c696461746f723a206465706c6f796d656e74000060448201526064015b60405180910390fd5b505b604051630b135d3f60e11b808252906001600160a01b038a1690631626ba7e90620001c4908b90869060040162000661565b602060405180830381865afa158015620001e2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200020891906200069d565b6001600160e01b031916149450505050506200044a565b805115620002b157604051630b135d3f60e11b808252906001600160a01b03871690631626ba7e9062000259908890889060040162000661565b602060405180830381865afa15801562000277573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200029d91906200069d565b6001600160e01b031916149150506200044a565b8251604114620003195760405162461bcd60e51b815260206004820152603a6024820152600080516020620006e083398151915260448201527f3a20696e76616c6964207369676e6174757265206c656e677468000000000000606482015260840162000187565b620003236200046b565b506020830151604080850151855186939260009185919081106200034b576200034b620006c9565b016020015160f81c9050601b81148015906200036b57508060ff16601c14155b15620003cf5760405162461bcd60e51b815260206004820152603b6024820152600080516020620006e083398151915260448201527f3a20696e76616c6964207369676e617475726520762076616c75650000000000606482015260840162000187565b6040805160008152602081018083528a905260ff83169181019190915260608101849052608081018390526001600160a01b038a169060019060a0016020604051602081039080840390855afa1580156200042e573d6000803e3d6000fd5b505050602060405103516001600160a01b031614955050505050505b9392505050565b60006020825110156200046357600080fd5b508051015190565b60405180606001604052806003906020820280368337509192915050565b6001600160a01b03811681146200049f57600080fd5b50565b634e487b7160e01b600052604160045260246000fd5b60005b83811015620004d5578181015183820152602001620004bb565b50506000910152565b600082601f830112620004f057600080fd5b81516001600160401b03808211156200050d576200050d620004a2565b604051601f8301601f19908116603f01168101908282118183101715620005385762000538620004a2565b816040528381528660208588010111156200055257600080fd5b62000565846020830160208901620004b8565b9695505050505050565b6000806000606084860312156200058557600080fd5b8351620005928162000489565b6020850151604086015191945092506001600160401b03811115620005b657600080fd5b620005c486828701620004de565b9150509250925092565b600080600060608486031215620005e457600080fd5b8351620005f18162000489565b60208501519093506001600160401b03808211156200060f57600080fd5b6200061d87838801620004de565b935060408601519150808211156200063457600080fd5b50620005c486828701620004de565b6000825162000657818460208701620004b8565b9190910192915050565b828152604060208201526000825180604084015262000688816060850160208701620004b8565b601f01601f1916919091016060019392505050565b600060208284031215620006b057600080fd5b81516001600160e01b0319811681146200044a57600080fd5b634e487b7160e01b600052603260045260246000fdfe5369676e617475726556616c696461746f72237265636f7665725369676e6572";/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */BigInt(0);BigInt(1);BigInt(2);function lx(e,t){if(e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}function ux(e,t){const n=qn(e)?zr(e):e,r=qn(t)?zr(t):t;return lx(n,r)}async function Mw(e,{address:t,hash:n,signature:r,...i}){const o=qn(r)?r:vr(r);try{const{data:s}=await mu(e,{data:kw({abi:Q8,args:[t,n,o],bytecode:cx}),...i});return ux(s??"0x0","0x1")}catch(s){if(s instanceof fw)return!1;throw s}}async function dx(e,{address:t,message:n,signature:r,...i}){const o=tx(n);return Mw(e,{address:t,hash:o,signature:r,...i})}async function fx(e,{address:t,signature:n,message:r,primaryType:i,types:o,domain:s,...a}){const c=Y7({message:r,primaryType:i,types:o,domain:s});return Mw(e,{address:t,hash:c,signature:n,...a})}function Bw(e,{emitOnBegin:t=!1,emitMissed:n=!1,onBlockNumber:r,onError:i,poll:o,pollingInterval:s=e.pollingInterval}){const a=typeof o<"u"?o:e.transport.type!=="webSocket";let c;return a?(()=>{const d=Rt(["watchBlockNumber",e.uid,t,n,s]);return ss(d,{onBlockNumber:r,onError:i},p=>ec(async()=>{var g;try{const w=await tc(e,{cacheTime:0});if(c){if(w===c)return;if(w-c>1&&n)for(let y=c+1n;y<w;y++)p.onBlockNumber(y,c),c=y}(!c||w>c)&&(p.onBlockNumber(w,c),c=w)}catch(w){(g=p.onError)==null||g.call(p,w)}},{emitOnBegin:t,interval:s}))})():(()=>{let d=!0,p=()=>d=!1;return(async()=>{try{const{unsubscribe:g}=await e.transport.subscribe({params:["newHeads"],onData(w){var x;if(!d)return;const y=su((x=w.result)==null?void 0:x.number);r(y,c),c=y},onError(w){i==null||i(w)}});p=g,d||p()}catch(g){i==null||i(g)}})(),p})()}async function hx(e,{confirmations:t=1,hash:n,onReplaced:r,pollingInterval:i=e.pollingInterval,timeout:o}){const s=Rt(["waitForTransactionReceipt",e.uid,n]);let a,c,u,l=!1;return new Promise((d,p)=>{o&&setTimeout(()=>p(new N8({hash:n})),o);const g=ss(s,{onReplaced:r,resolve:d,reject:p},w=>{const y=Bw(e,{emitMissed:!0,emitOnBegin:!0,poll:!0,pollingInterval:i,async onBlockNumber(x){if(l)return;let E=x;const b=C=>{y(),C(),g()};try{if(u){if(t>1&&(!u.blockNumber||E-u.blockNumber+1n<t))return;b(()=>w.resolve(u));return}if(a||(l=!0,await yw(async()=>{a=await ph(e,{hash:n}),a.blockNumber&&(E=a.blockNumber)},{delay:({count:C})=>~~(1<<C)*200,retryCount:6}),l=!1),u=await Af(e,{hash:n}),t>1&&(!u.blockNumber||E-u.blockNumber+1n<t))return;b(()=>w.resolve(u))}catch(C){if(a&&(C instanceof uw||C instanceof dw))try{c=a;const T=(await qr(e,{blockNumber:E,includeTransactions:!0})).transactions.find(({from:h,nonce:S})=>h===c.from&&S===c.nonce);if(!T||(u=await Af(e,{hash:T.hash}),t>1&&(!u.blockNumber||E-u.blockNumber+1n<t)))return;let $="replaced";T.to===c.to&&T.value===c.value?$="repriced":T.from===T.to&&T.value===0n&&($="cancelled"),b(()=>{var h;(h=w.onReplaced)==null||h.call(w,{reason:$,replacedTransaction:c,transaction:T,transactionReceipt:u}),w.resolve(u)})}catch(_){b(()=>w.reject(_))}else b(()=>w.reject(C))}}})})})}function px(e,{blockTag:t="latest",emitMissed:n=!1,emitOnBegin:r=!1,onBlock:i,onError:o,includeTransactions:s,poll:a,pollingInterval:c=e.pollingInterval}){const u=typeof a<"u"?a:e.transport.type!=="webSocket",l=s??!1;let d;return u?(()=>{const w=Rt(["watchBlocks",e.uid,n,r,l,c]);return ss(w,{onBlock:i,onError:o},y=>ec(async()=>{var x;try{const E=await qr(e,{blockTag:t,includeTransactions:l});if(E.number&&(d!=null&&d.number)){if(E.number===d.number)return;if(E.number-d.number>1&&n)for(let b=(d==null?void 0:d.number)+1n;b<E.number;b++){const C=await qr(e,{blockNumber:b,includeTransactions:l});y.onBlock(C,d),d=C}}(!(d!=null&&d.number)||t==="pending"&&!(E!=null&&E.number)||E.number&&E.number>d.number)&&(y.onBlock(E,d),d=E)}catch(E){(x=y.onError)==null||x.call(y,E)}},{emitOnBegin:r,interval:c}))})():(()=>{let w=!0,y=()=>w=!1;return(async()=>{try{const{unsubscribe:x}=await e.transport.subscribe({params:["newHeads"],onData(E){var _,T,$;if(!w)return;const C=((($=(T=(_=e.chain)==null?void 0:_.formatters)==null?void 0:T.block)==null?void 0:$.format)||J2)(E.result);i(C,d),d=C},onError(E){o==null||o(E)}});y=x,w||y()}catch(x){o==null||o(x)}})(),y})()}function mx(e,{address:t,args:n,batch:r=!0,event:i,events:o,onError:s,onLogs:a,poll:c,pollingInterval:u=e.pollingInterval,strict:l}){const d=typeof c<"u"?c:e.transport.type!=="webSocket",p=l??!1;return d?(()=>{const y=Rt(["watchEvent",t,n,r,e.uid,i,u]);return ss(y,{onLogs:a,onError:s},x=>{let E,b,C=!1;const _=ec(async()=>{var T;if(!C){try{b=await Aw(e,{address:t,args:n,event:i,events:o,strict:p})}catch{}C=!0;return}try{let $;if(b)$=await gu(e,{filter:b});else{const h=await tc(e);E&&E!==h?$=await sh(e,{address:t,args:n,event:i,events:o,fromBlock:E+1n,toBlock:h}):$=[],E=h}if($.length===0)return;r?x.onLogs($):$.forEach(h=>x.onLogs([h]))}catch($){b&&$ instanceof Oi&&(C=!1),(T=x.onError)==null||T.call(x,$)}},{emitOnBegin:!0,interval:u});return async()=>{b&&await wu(e,{filter:b}),_()}})})():(()=>{let y=!0,x=()=>y=!1;return(async()=>{try{const E=o??(i?[i]:void 0);let b=[];E&&(b=[E.flatMap(_=>Ja({abi:[_],eventName:_.name,args:n}))],i&&(b=b[0]));const{unsubscribe:C}=await e.transport.subscribe({params:["logs",{address:t,topics:b}],onData(_){var $;if(!y)return;const T=_.result;try{const{eventName:h,args:S}=Qa({abi:E,data:T.data,topics:T.topics,strict:p}),U=Tn(T,{args:S,eventName:h});a([U])}catch(h){let S,U;if(h instanceof Pi||h instanceof ns){if(l)return;S=h.abiItem.name,U=($=h.abiItem.inputs)==null?void 0:$.some(R=>!("name"in R&&R.name))}const D=Tn(T,{args:U?[]:{},eventName:S});a([D])}},onError(_){s==null||s(_)}});x=C,y||x()}catch(E){s==null||s(E)}})(),x})()}function gx(e,{batch:t=!0,onError:n,onTransactions:r,poll:i,pollingInterval:o=e.pollingInterval}){return(typeof i<"u"?i:e.transport.type!=="webSocket")?(()=>{const u=Rt(["watchPendingTransactions",e.uid,t,o]);return ss(u,{onTransactions:r,onError:n},l=>{let d;const p=ec(async()=>{var g;try{if(!d)try{d=await $w(e);return}catch(y){throw p(),y}const w=await gu(e,{filter:d});if(w.length===0)return;t?l.onTransactions(w):w.forEach(y=>l.onTransactions([y]))}catch(w){(g=l.onError)==null||g.call(l,w)}},{emitOnBegin:!0,interval:o});return async()=>{d&&await wu(e,{filter:d}),p()}})})():(()=>{let u=!0,l=()=>u=!1;return(async()=>{try{const{unsubscribe:d}=await e.transport.subscribe({params:["newPendingTransactions"],onData(p){if(!u)return;const g=p.result;r([g])},onError(p){n==null||n(p)}});l=d,u||l()}catch(d){n==null||n(d)}})(),l})()}function wx(e){return{call:t=>mu(e,t),createBlockFilter:()=>W7(e),createContractEventFilter:t=>aw(e,t),createEventFilter:t=>Aw(e,t),createPendingTransactionFilter:()=>$w(e),estimateContractGas:t=>K8(e,t),estimateGas:t=>oh(e,t),getBalance:t=>H7(e,t),getBlock:t=>qr(e,t),getBlockNumber:t=>tc(e,t),getBlockTransactionCount:t=>z7(e,t),getBytecode:t=>q7(e,t),getChainId:()=>xa(e),getContractEvents:t=>mw(e,t),getEnsAddress:t=>S7(e,t),getEnsAvatar:t=>U7(e,t),getEnsName:t=>F7(e,t),getEnsResolver:t=>j7(e,t),getEnsText:t=>Sw(e,t),getFeeHistory:t=>G7(e,t),estimateFeesPerGas:t=>V8(e,t),getFilterChanges:t=>gu(e,t),getFilterLogs:t=>K7(e,t),getGasPrice:()=>ih(e),getLogs:t=>sh(e,t),getProof:t=>ix(e,t),estimateMaxPriorityFeePerGas:t=>q8(e,t),getStorageAt:t=>ox(e,t),getTransaction:t=>ph(e,t),getTransactionConfirmations:t=>sx(e,t),getTransactionCount:t=>pw(e,t),getTransactionReceipt:t=>Af(e,t),multicall:t=>ax(e,t),prepareTransactionRequest:t=>pu(e,t),readContract:t=>Vr(e,t),sendRawTransaction:t=>ch(e,t),simulateContract:t=>o7(e,t),verifyMessage:t=>dx(e,t),verifyTypedData:t=>fx(e,t),uninstallFilter:t=>wu(e,t),waitForTransactionReceipt:t=>hx(e,t),watchBlocks:t=>px(e,t),watchBlockNumber:t=>Bw(e,t),watchContractEvent:t=>f7(e,t),watchEvent:t=>mx(e,t),watchPendingTransactions:t=>gx(e,t)}}function $1(e){const{key:t="public",name:n="Public Client"}=e;return bw({...e,key:t,name:n,type:"publicClient"}).extend(wx)}function bx(e,{abi:t,args:n,bytecode:r,...i}){const o=kw({abi:t,args:n,bytecode:r});return lh(e,{...i,data:o})}async function yx(e){var n;return((n=e.account)==null?void 0:n.type)==="local"?[e.account.address]:(await e.request({method:"eth_accounts"})).map(r=>J0(r))}async function vx(e){return await e.request({method:"wallet_getPermissions"})}async function xx(e){return(await e.request({method:"eth_requestAccounts"})).map(n=>En(n))}async function _x(e,t){return e.request({method:"wallet_requestPermissions",params:[t]})}async function Cx(e,{account:t=e.account,message:n}){if(!t)throw new is({docsPath:"/docs/actions/wallet/signMessage"});const r=an(t);if(r.type==="local")return r.signMessage({message:n});const i=(()=>typeof n=="string"?F0(n):n.raw instanceof Uint8Array?vr(n.raw):n.raw)();return e.request({method:"personal_sign",params:[i,r.address]})}async function Ex(e,t){var u,l,d,p;const{account:n=e.account,chain:r=e.chain,...i}=t;if(!n)throw new is({docsPath:"/docs/actions/wallet/signTransaction"});const o=an(n);Xa({account:o,...t});const s=await xa(e);r!==null&&z2({currentChainId:s,chain:r});const a=(r==null?void 0:r.formatters)||((u=e.chain)==null?void 0:u.formatters),c=((l=a==null?void 0:a.transactionRequest)==null?void 0:l.format)||au;return o.type==="local"?o.signTransaction({...i,chainId:s},{serializer:(p=(d=e.chain)==null?void 0:d.serializers)==null?void 0:p.transaction}):await e.request({method:"eth_signTransaction",params:[{...c(i),chainId:Ie(s),from:o.address}]})}async function Tx(e,{account:t=e.account,domain:n,message:r,primaryType:i,types:o}){if(!t)throw new is({docsPath:"/docs/actions/wallet/signTypedData"});const s=an(t),a={EIP712Domain:Nw({domain:n}),...o};if(Rw({domain:n,message:r,primaryType:i,types:a}),s.type==="local")return s.signTypedData({domain:n,primaryType:i,types:a,message:r});const c=Rt({domain:n??{},primaryType:i,types:a,message:r},(u,l)=>qn(l)?l.toLowerCase():l);return e.request({method:"eth_signTypedData_v4",params:[s.address,c]})}async function Sx(e,{id:t}){await e.request({method:"wallet_switchEthereumChain",params:[{chainId:Ie(t)}]})}async function Ax(e,t){return await e.request({method:"wallet_watchAsset",params:t})}function $x(e){return{addChain:t=>m7(e,t),deployContract:t=>bx(e,t),getAddresses:()=>yx(e),getChainId:()=>xa(e),getPermissions:()=>vx(e),prepareTransactionRequest:t=>pu(e,t),requestAddresses:()=>xx(e),requestPermissions:t=>_x(e,t),sendRawTransaction:t=>ch(e,t),sendTransaction:t=>lh(e,t),signMessage:t=>Cx(e,t),signTransaction:t=>Ex(e,t),signTypedData:t=>Tx(e,t),switchChain:t=>Sx(e,t),watchAsset:t=>Ax(e,t),writeContract:t=>p7(e,t)}}function mh(e){const{key:t="wallet",name:n="Wallet Client",transport:r}=e;return bw({...e,key:t,name:n,transport:o=>r({...o,retryCount:0}),type:"walletClient"}).extend($x)}function Px(e,t={}){const{key:n="webSocket",name:r="WebSocket JSON-RPC",retryDelay:i}=t;return({chain:o,retryCount:s,timeout:a})=>{var d;const c=t.retryCount??s,u=a??t.timeout??1e4,l=e||((d=o==null?void 0:o.rpcUrls.default.webSocket)==null?void 0:d[0]);if(!l)throw new xw;return bu({key:n,name:r,async request({method:p,params:g}){const w={method:p,params:g},y=await pd(l),{error:x,result:E}=await xo.webSocketAsync(y,{body:w,timeout:u});if(x)throw new eh({body:w,error:x,url:l});return E},retryCount:c,retryDelay:i,timeout:u,type:"webSocket"},{getSocket(){return pd(l)},async subscribe({params:p,onData:g,onError:w}){const y=await pd(l),{result:x}=await new Promise((E,b)=>xo.webSocket(y,{body:{method:"eth_subscribe",params:p},onResponse(C){if(C.error){b(C.error),w==null||w(C.error);return}if(typeof C.id=="number"){E(C);return}C.method==="eth_subscription"&&g(C.params)}}));return{subscriptionId:x,async unsubscribe(){return new Promise(E=>xo.webSocket(y,{body:{method:"eth_unsubscribe",params:[x]},onResponse:E}))}}}})}}const Ox=U0({id:5,network:"goerli",name:"Goerli",nativeCurrency:{name:"Goerli Ether",symbol:"ETH",decimals:18},rpcUrls:{alchemy:{http:["https://eth-goerli.g.alchemy.com/v2"],webSocket:["wss://eth-goerli.g.alchemy.com/v2"]},infura:{http:["https://goerli.infura.io/v3"],webSocket:["wss://goerli.infura.io/ws/v3"]},default:{http:["https://rpc.ankr.com/eth_goerli"]},public:{http:["https://rpc.ankr.com/eth_goerli"]}},blockExplorers:{etherscan:{name:"Etherscan",url:"https://goerli.etherscan.io"},default:{name:"Etherscan",url:"https://goerli.etherscan.io"}},contracts:{ensRegistry:{address:"0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e"},ensUniversalResolver:{address:"0x56522D00C410a43BFfDF00a9A569489297385790",blockCreated:8765204},multicall3:{address:"0xca11bde05977b3631167028862be2a173976ca11",blockCreated:6507670}},testnet:!0}),Hc=U0({id:1,network:"homestead",name:"Ethereum",nativeCurrency:{name:"Ether",symbol:"ETH",decimals:18},rpcUrls:{alchemy:{http:["https://eth-mainnet.g.alchemy.com/v2"],webSocket:["wss://eth-mainnet.g.alchemy.com/v2"]},infura:{http:["https://mainnet.infura.io/v3"],webSocket:["wss://mainnet.infura.io/ws/v3"]},default:{http:["https://cloudflare-eth.com"]},public:{http:["https://cloudflare-eth.com"]}},blockExplorers:{etherscan:{name:"Etherscan",url:"https://etherscan.io"},default:{name:"Etherscan",url:"https://etherscan.io"}},contracts:{ensRegistry:{address:"0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e"},ensUniversalResolver:{address:"0xc0497E381f536Be9ce14B0dD3817cBcAe57d2F62",blockCreated:16966585},multicall3:{address:"0xca11bde05977b3631167028862be2a173976ca11",blockCreated:14353601}}});var Lw=class extends Error{constructor({chainId:e,connectorId:t}){super(`Chain "${e}" not configured for connector "${t}".`),this.name="ChainNotConfiguredForConnectorError"}},lr=class extends Error{constructor(){super(...arguments),this.name="ConnectorNotFoundError",this.message="Connector not found"}};function al(e){return typeof e=="string"?Number.parseInt(e,e.trim().substring(0,2)==="0x"?16:10):typeof e=="bigint"?Number(e):e}var P1=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Dx(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function Ix(e){if(e.__esModule)return e;var t=e.default;if(typeof t=="function"){var n=function r(){if(this instanceof r){var i=[null];i.push.apply(i,arguments);var o=Function.bind.apply(t,i);return new o}return t.apply(this,arguments)};n.prototype=t.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(e).forEach(function(r){var i=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(n,r,i.get?i:{enumerable:!0,get:function(){return e[r]}})}),n}var Uw={exports:{}};(function(e){var t=Object.prototype.hasOwnProperty,n="~";function r(){}Object.create&&(r.prototype=Object.create(null),new r().__proto__||(n=!1));function i(c,u,l){this.fn=c,this.context=u,this.once=l||!1}function o(c,u,l,d,p){if(typeof l!="function")throw new TypeError("The listener must be a function");var g=new i(l,d||c,p),w=n?n+u:u;return c._events[w]?c._events[w].fn?c._events[w]=[c._events[w],g]:c._events[w].push(g):(c._events[w]=g,c._eventsCount++),c}function s(c,u){--c._eventsCount===0?c._events=new r:delete c._events[u]}function a(){this._events=new r,this._eventsCount=0}a.prototype.eventNames=function(){var u=[],l,d;if(this._eventsCount===0)return u;for(d in l=this._events)t.call(l,d)&&u.push(n?d.slice(1):d);return Object.getOwnPropertySymbols?u.concat(Object.getOwnPropertySymbols(l)):u},a.prototype.listeners=function(u){var l=n?n+u:u,d=this._events[l];if(!d)return[];if(d.fn)return[d.fn];for(var p=0,g=d.length,w=new Array(g);p<g;p++)w[p]=d[p].fn;return w},a.prototype.listenerCount=function(u){var l=n?n+u:u,d=this._events[l];return d?d.fn?1:d.length:0},a.prototype.emit=function(u,l,d,p,g,w){var y=n?n+u:u;if(!this._events[y])return!1;var x=this._events[y],E=arguments.length,b,C;if(x.fn){switch(x.once&&this.removeListener(u,x.fn,void 0,!0),E){case 1:return x.fn.call(x.context),!0;case 2:return x.fn.call(x.context,l),!0;case 3:return x.fn.call(x.context,l,d),!0;case 4:return x.fn.call(x.context,l,d,p),!0;case 5:return x.fn.call(x.context,l,d,p,g),!0;case 6:return x.fn.call(x.context,l,d,p,g,w),!0}for(C=1,b=new Array(E-1);C<E;C++)b[C-1]=arguments[C];x.fn.apply(x.context,b)}else{var _=x.length,T;for(C=0;C<_;C++)switch(x[C].once&&this.removeListener(u,x[C].fn,void 0,!0),E){case 1:x[C].fn.call(x[C].context);break;case 2:x[C].fn.call(x[C].context,l);break;case 3:x[C].fn.call(x[C].context,l,d);break;case 4:x[C].fn.call(x[C].context,l,d,p);break;default:if(!b)for(T=1,b=new Array(E-1);T<E;T++)b[T-1]=arguments[T];x[C].fn.apply(x[C].context,b)}}return!0},a.prototype.on=function(u,l,d){return o(this,u,l,d,!1)},a.prototype.once=function(u,l,d){return o(this,u,l,d,!0)},a.prototype.removeListener=function(u,l,d,p){var g=n?n+u:u;if(!this._events[g])return this;if(!l)return s(this,g),this;var w=this._events[g];if(w.fn)w.fn===l&&(!p||w.once)&&(!d||w.context===d)&&s(this,g);else{for(var y=0,x=[],E=w.length;y<E;y++)(w[y].fn!==l||p&&!w[y].once||d&&w[y].context!==d)&&x.push(w[y]);x.length?this._events[g]=x.length===1?x[0]:x:s(this,g)}return this},a.prototype.removeAllListeners=function(u){var l;return u?(l=n?n+u:u,this._events[l]&&s(this,l)):(this._events=new r,this._eventsCount=0),this},a.prototype.off=a.prototype.removeListener,a.prototype.addListener=a.prototype.on,a.prefixed=n,a.EventEmitter=a,e.exports=a})(Uw);var Rx=Uw.exports;const Nx=Dx(Rx);var gh=(e,t,n)=>{if(!t.has(e))throw TypeError("Cannot "+n)},Ve=(e,t,n)=>(gh(e,t,"read from private field"),n?n.call(e):t.get(e)),Lt=(e,t,n)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,n)},_a=(e,t,n,r)=>(gh(e,t,"write to private field"),r?r.call(e,n):t.set(e,n),n),gt=(e,t,n)=>(gh(e,t,"access private method"),n),wh=class extends Nx{constructor({chains:e=[Hc,Ox],options:t}){super(),this.chains=e,this.options=t}getBlockExplorerUrls(e){const{default:t,...n}=e.blockExplorers??{};if(t)return[t.url,...Object.values(n).map(r=>r.url)]}isChainUnsupported(e){return!this.chains.some(t=>t.id===e)}setStorage(e){this.storage=e}};function kx(e){var n;if(!e)return"Injected";const t=r=>{if(r.isApexWallet)return"Apex Wallet";if(r.isAvalanche)return"Core Wallet";if(r.isBackpack)return"Backpack";if(r.isBifrost)return"Bifrost Wallet";if(r.isBitKeep)return"BitKeep";if(r.isBitski)return"Bitski";if(r.isBlockWallet)return"BlockWallet";if(r.isBraveWallet)return"Brave Wallet";if(r.isCoin98)return"Coin98 Wallet";if(r.isCoinbaseWallet)return"Coinbase Wallet";if(r.isDawn)return"Dawn Wallet";if(r.isDefiant)return"Defiant";if(r.isDesig)return"Desig Wallet";if(r.isEnkrypt)return"Enkrypt";if(r.isExodus)return"Exodus";if(r.isFordefi)return"Fordefi";if(r.isFrame)return"Frame";if(r.isFrontier)return"Frontier Wallet";if(r.isGamestop)return"GameStop Wallet";if(r.isHaqqWallet)return"HAQQ Wallet";if(r.isHyperPay)return"HyperPay Wallet";if(r.isImToken)return"ImToken";if(r.isHaloWallet)return"Halo Wallet";if(r.isKuCoinWallet)return"KuCoin Wallet";if(r.isMathWallet)return"MathWallet";if(r.isNovaWallet)return"Nova Wallet";if(r.isOkxWallet||r.isOKExWallet)return"OKX Wallet";if(r.isOneInchIOSWallet||r.isOneInchAndroidWallet)return"1inch Wallet";if(r.isOpera)return"Opera";if(r.isPhantom)return"Phantom";if(r.isPortal)return"Ripio Portal";if(r.isRabby)return"Rabby Wallet";if(r.isRainbow)return"Rainbow";if(r.isStatus)return"Status";if(r.isSubWallet)return"SubWallet";if(r.isTalisman)return"Talisman";if(r.isTally)return"Taho";if(r.isTokenPocket)return"TokenPocket";if(r.isTokenary)return"Tokenary";if(r.isTrust||r.isTrustWallet)return"Trust Wallet";if(r.isTTWallet)return"TTWallet";if(r.isXDEFI)return"XDEFI Wallet";if(r.isZeal)return"Zeal";if(r.isZerion)return"Zerion";if(r.isMetaMask)return"MetaMask"};if((n=e.providers)!=null&&n.length){const r=new Set;let i=1;for(const s of e.providers){let a=t(s);a||(a=`Unknown Wallet #${i}`,i+=1),r.add(a)}const o=[...r];return o.length?o:o[0]??"Injected"}return t(e)??"Injected"}var zc,Fw=class extends wh{constructor({chains:e,options:t}={}){const n={shimDisconnect:!0,getProvider(){if(typeof window>"u")return;const i=window.ethereum;return i!=null&&i.providers?i.providers[0]:i},...t};super({chains:e,options:n}),this.id="injected",Lt(this,zc,void 0),this.shimDisconnectKey=`${this.id}.shimDisconnect`,this.onAccountsChanged=i=>{i.length===0?this.emit("disconnect"):this.emit("change",{account:En(i[0])})},this.onChainChanged=i=>{const o=al(i),s=this.isChainUnsupported(o);this.emit("change",{chain:{id:o,unsupported:s}})},this.onDisconnect=async i=>{var o;i.code===1013&&await this.getProvider()&&await this.getAccount()||(this.emit("disconnect"),this.options.shimDisconnect&&((o=this.storage)==null||o.removeItem(this.shimDisconnectKey)))};const r=n.getProvider();if(typeof n.name=="string")this.name=n.name;else if(r){const i=kx(r);n.name?this.name=n.name(i):typeof i=="string"?this.name=i:this.name=i[0]}else this.name="Injected";this.ready=!!r}async connect({chainId:e}={}){var t;try{const n=await this.getProvider();if(!n)throw new lr;n.on&&(n.on("accountsChanged",this.onAccountsChanged),n.on("chainChanged",this.onChainChanged),n.on("disconnect",this.onDisconnect)),this.emit("message",{type:"connecting"});const r=await n.request({method:"eth_requestAccounts"}),i=En(r[0]);let o=await this.getChainId(),s=this.isChainUnsupported(o);return e&&o!==e&&(o=(await this.switchChain(e)).id,s=this.isChainUnsupported(o)),this.options.shimDisconnect&&((t=this.storage)==null||t.setItem(this.shimDisconnectKey,!0)),{account:i,chain:{id:o,unsupported:s}}}catch(n){throw this.isUserRejectedRequestError(n)?new Ut(n):n.code===-32002?new Oo(n):n}}async disconnect(){var t;const e=await this.getProvider();e!=null&&e.removeListener&&(e.removeListener("accountsChanged",this.onAccountsChanged),e.removeListener("chainChanged",this.onChainChanged),e.removeListener("disconnect",this.onDisconnect),this.options.shimDisconnect&&((t=this.storage)==null||t.removeItem(this.shimDisconnectKey)))}async getAccount(){const e=await this.getProvider();if(!e)throw new lr;const t=await e.request({method:"eth_accounts"});return En(t[0])}async getChainId(){const e=await this.getProvider();if(!e)throw new lr;return e.request({method:"eth_chainId"}).then(al)}async getProvider(){const e=this.options.getProvider();return e&&_a(this,zc,e),Ve(this,zc)}async getWalletClient({chainId:e}={}){const[t,n]=await Promise.all([this.getProvider(),this.getAccount()]),r=this.chains.find(i=>i.id===e);if(!t)throw new Error("provider is required.");return mh({account:n,chain:r,transport:uh(t)})}async isAuthorized(){var e;try{if(this.options.shimDisconnect&&!((e=this.storage)!=null&&e.getItem(this.shimDisconnectKey)))return!1;if(!await this.getProvider())throw new lr;return!!await this.getAccount()}catch{return!1}}async switchChain(e){var r,i,o;const t=await this.getProvider();if(!t)throw new lr;const n=Ie(e);try{return await Promise.all([t.request({method:"wallet_switchEthereumChain",params:[{chainId:n}]}),new Promise(s=>this.on("change",({chain:a})=>{(a==null?void 0:a.id)===e&&s()}))]),this.chains.find(s=>s.id===e)??{id:e,name:`Chain ${n}`,network:`${n}`,nativeCurrency:{name:"Ether",decimals:18,symbol:"ETH"},rpcUrls:{default:{http:[""]},public:{http:[""]}}}}catch(s){const a=this.chains.find(c=>c.id===e);if(!a)throw new Lw({chainId:e,connectorId:this.id});if(s.code===4902||((i=(r=s==null?void 0:s.data)==null?void 0:r.originalError)==null?void 0:i.code)===4902)try{if(await t.request({method:"wallet_addEthereumChain",params:[{chainId:n,chainName:a.name,nativeCurrency:a.nativeCurrency,rpcUrls:[((o=a.rpcUrls.public)==null?void 0:o.http[0])??""],blockExplorerUrls:this.getBlockExplorerUrls(a)}]}),await this.getChainId()!==e)throw new Ut(new Error("User rejected switch after adding network."));return a}catch(c){throw new Ut(c)}throw this.isUserRejectedRequestError(s)?new Ut(s):new gr(s)}}async watchAsset({address:e,decimals:t=18,image:n,symbol:r}){const i=await this.getProvider();if(!i)throw new lr;return i.request({method:"wallet_watchAsset",params:{type:"ERC20",options:{address:e,decimals:t,image:n,symbol:r}}})}isUserRejectedRequestError(e){return e.code===4001}};zc=new WeakMap;var bh=(e,t,n)=>{if(!t.has(e))throw TypeError("Cannot "+n)},gd=(e,t,n)=>(bh(e,t,"read from private field"),n?n.call(e):t.get(e)),wd=(e,t,n)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,n)},Sc=(e,t,n,r)=>(bh(e,t,"write to private field"),r?r.call(e,n):t.set(e,n),n),Mx=(e,t,n)=>(bh(e,t,"access private method"),n);const Bx=e=>(t,n,r)=>{const i=r.subscribe;return r.subscribe=(s,a,c)=>{let u=s;if(a){const l=(c==null?void 0:c.equalityFn)||Object.is;let d=s(r.getState());u=p=>{const g=s(p);if(!l(d,g)){const w=d;a(d=g,w)}},c!=null&&c.fireImmediately&&a(d,d)}return i(u)},e(t,n,r)},Lx=Bx;function Ux(e,t){let n;try{n=e()}catch{return}return{getItem:i=>{var o;const s=c=>c===null?null:JSON.parse(c,t==null?void 0:t.reviver),a=(o=n.getItem(i))!=null?o:null;return a instanceof Promise?a.then(s):s(a)},setItem:(i,o)=>n.setItem(i,JSON.stringify(o,t==null?void 0:t.replacer)),removeItem:i=>n.removeItem(i)}}const Ca=e=>t=>{try{const n=e(t);return n instanceof Promise?n:{then(r){return Ca(r)(n)},catch(r){return this}}}catch(n){return{then(r){return this},catch(r){return Ca(r)(n)}}}},Fx=(e,t)=>(n,r,i)=>{let o={getStorage:()=>localStorage,serialize:JSON.stringify,deserialize:JSON.parse,partialize:x=>x,version:0,merge:(x,E)=>({...E,...x}),...t},s=!1;const a=new Set,c=new Set;let u;try{u=o.getStorage()}catch{}if(!u)return e((...x)=>{console.warn(`[zustand persist middleware] Unable to update item '${o.name}', the given storage is currently unavailable.`),n(...x)},r,i);const l=Ca(o.serialize),d=()=>{const x=o.partialize({...r()});let E;const b=l({state:x,version:o.version}).then(C=>u.setItem(o.name,C)).catch(C=>{E=C});if(E)throw E;return b},p=i.setState;i.setState=(x,E)=>{p(x,E),d()};const g=e((...x)=>{n(...x),d()},r,i);let w;const y=()=>{var x;if(!u)return;s=!1,a.forEach(b=>b(r()));const E=((x=o.onRehydrateStorage)==null?void 0:x.call(o,r()))||void 0;return Ca(u.getItem.bind(u))(o.name).then(b=>{if(b)return o.deserialize(b)}).then(b=>{if(b)if(typeof b.version=="number"&&b.version!==o.version){if(o.migrate)return o.migrate(b.state,b.version);console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}else return b.state}).then(b=>{var C;return w=o.merge(b,(C=r())!=null?C:g),n(w,!0),d()}).then(()=>{E==null||E(w,void 0),s=!0,c.forEach(b=>b(w))}).catch(b=>{E==null||E(void 0,b)})};return i.persist={setOptions:x=>{o={...o,...x},x.getStorage&&(u=x.getStorage())},clearStorage:()=>{u==null||u.removeItem(o.name)},getOptions:()=>o,rehydrate:()=>y(),hasHydrated:()=>s,onHydrate:x=>(a.add(x),()=>{a.delete(x)}),onFinishHydration:x=>(c.add(x),()=>{c.delete(x)})},y(),w||g},jx=(e,t)=>(n,r,i)=>{let o={storage:Ux(()=>localStorage),partialize:y=>y,version:0,merge:(y,x)=>({...x,...y}),...t},s=!1;const a=new Set,c=new Set;let u=o.storage;if(!u)return e((...y)=>{console.warn(`[zustand persist middleware] Unable to update item '${o.name}', the given storage is currently unavailable.`),n(...y)},r,i);const l=()=>{const y=o.partialize({...r()});return u.setItem(o.name,{state:y,version:o.version})},d=i.setState;i.setState=(y,x)=>{d(y,x),l()};const p=e((...y)=>{n(...y),l()},r,i);let g;const w=()=>{var y,x;if(!u)return;s=!1,a.forEach(b=>{var C;return b((C=r())!=null?C:p)});const E=((x=o.onRehydrateStorage)==null?void 0:x.call(o,(y=r())!=null?y:p))||void 0;return Ca(u.getItem.bind(u))(o.name).then(b=>{if(b)if(typeof b.version=="number"&&b.version!==o.version){if(o.migrate)return o.migrate(b.state,b.version);console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}else return b.state}).then(b=>{var C;return g=o.merge(b,(C=r())!=null?C:p),n(g,!0),l()}).then(()=>{E==null||E(g,void 0),g=r(),s=!0,c.forEach(b=>b(g))}).catch(b=>{E==null||E(void 0,b)})};return i.persist={setOptions:y=>{o={...o,...y},y.storage&&(u=y.storage)},clearStorage:()=>{u==null||u.removeItem(o.name)},getOptions:()=>o,rehydrate:()=>w(),hasHydrated:()=>s,onHydrate:y=>(a.add(y),()=>{a.delete(y)}),onFinishHydration:y=>(c.add(y),()=>{c.delete(y)})},o.skipHydration||w(),g||p},Wx=(e,t)=>"getStorage"in t||"serialize"in t||"deserialize"in t?(({VITE_PROJECT_ID:"59e3161a3414729703d9cf5848b96830",VITE_PROJECT_ID_BNB:"019ab9103abc6972f04181e0d32a6973",VITE_NODE_ENV:"mainnet",VITE_GOOGLE_CLIENT_ID:"831024169401-t1d758nlvmnl1f7d1cv05okdr09ntrqq.apps.googleusercontent.com",VITE_GOOGLE_CLIENT_SECRET:"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",VITE_GOOGLE_API_KEY:"AIzaSyBJRKcfSPE1yClyOTEpgaBgBCO-uGYJCW8",VITE_GOOGLE_SPREADSHEET_ID:"1NszEvlgr1MK2PCMdxT9uU3EosWEG5CCT-A9lj5Ilbeo",VITE_GOOGLE_SPREADSHEET_PROPOSAL_ID:"1aYPyqGEDu-VzdomF_6nxdHzoFqX17BH5J6KE2XFnT5k",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0,SSR:!1}&&"production")!=="production"&&console.warn("[DEPRECATED] `getStorage`, `serialize` and `deserialize` options are deprecated. Use `storage` option instead."),Fx(e,t)):jx(e,t),Hx=Wx,O1=e=>{let t;const n=new Set,r=(c,u)=>{const l=typeof c=="function"?c(t):c;if(!Object.is(l,t)){const d=t;t=u??typeof l!="object"?l:Object.assign({},t,l),n.forEach(p=>p(t,d))}},i=()=>t,a={setState:r,getState:i,subscribe:c=>(n.add(c),()=>n.delete(c)),destroy:()=>{({VITE_PROJECT_ID:"59e3161a3414729703d9cf5848b96830",VITE_PROJECT_ID_BNB:"019ab9103abc6972f04181e0d32a6973",VITE_NODE_ENV:"mainnet",VITE_GOOGLE_CLIENT_ID:"831024169401-t1d758nlvmnl1f7d1cv05okdr09ntrqq.apps.googleusercontent.com",VITE_GOOGLE_CLIENT_SECRET:"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",VITE_GOOGLE_API_KEY:"AIzaSyBJRKcfSPE1yClyOTEpgaBgBCO-uGYJCW8",VITE_GOOGLE_SPREADSHEET_ID:"1NszEvlgr1MK2PCMdxT9uU3EosWEG5CCT-A9lj5Ilbeo",VITE_GOOGLE_SPREADSHEET_PROPOSAL_ID:"1aYPyqGEDu-VzdomF_6nxdHzoFqX17BH5J6KE2XFnT5k",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0,SSR:!1}&&"production")!=="production"&&console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),n.clear()}};return t=e(r,i,a),a},zx=e=>e?O1(e):O1;function jw(e,t){if(Object.is(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;if(e instanceof Map&&t instanceof Map){if(e.size!==t.size)return!1;for(const[r,i]of e)if(!Object.is(i,t.get(r)))return!1;return!0}if(e instanceof Set&&t instanceof Set){if(e.size!==t.size)return!1;for(const r of e)if(!t.has(r))return!1;return!0}const n=Object.keys(e);if(n.length!==Object.keys(t).length)return!1;for(let r=0;r<n.length;r++)if(!Object.prototype.hasOwnProperty.call(t,n[r])||!Object.is(e[n[r]],t[n[r]]))return!1;return!0}function qx(e,t,{batch:n={multicall:{wait:32}},pollingInterval:r=4e3,rank:i,retryCount:o,retryDelay:s,stallTimeout:a}={}){if(!e.length)throw new Error("must have at least one chain");let c=[];const u={},l={};for(const d of e){let p=!1;for(const g of t){const w=g(d);w&&(p=!0,c.some(({id:y})=>y===d.id)||(c=[...c,w.chain]),u[d.id]=[...u[d.id]||[],...w.rpcUrls.http],w.rpcUrls.webSocket&&(l[d.id]=[...l[d.id]||[],...w.rpcUrls.webSocket]))}if(!p)throw new Error([`Could not find valid provider configuration for chain "${d.name}".
`,"You may need to add `jsonRpcProvider` to `configureChains` with the chain's RPC URLs.","Read more: https://wagmi.sh/core/providers/jsonRpc"].join(`
`))}return{chains:c,publicClient:({chainId:d})=>{const p=c.find(y=>y.id===d)??e[0],g=u[p.id];if(!g||!g[0])throw new Error(`No providers configured for chain "${p.id}"`);const w=$1({batch:n,chain:p,transport:T1(g.map(y=>C7(y,{timeout:a})),{rank:i,retryCount:o,retryDelay:s}),pollingInterval:r});return Object.assign(w,{chains:c})},webSocketPublicClient:({chainId:d})=>{const p=c.find(y=>y.id===d)??e[0],g=l[p.id];if(!g||!g[0])return;const w=$1({batch:n,chain:p,transport:T1(g.map(y=>Px(y,{timeout:a})),{rank:i,retryCount:o,retryDelay:s}),pollingInterval:r});return Object.assign(w,{chains:c})}}}var Vx=class extends Error{constructor({activeChain:e,targetChain:t}){super(`Chain mismatch: Expected "${t}", received "${e}".`),this.name="ChainMismatchError"}},Gx=class extends Error{constructor({chainId:e,connectorId:t}){super(`Chain "${e}" not configured${t?` for connector "${t}"`:""}.`),this.name="ChainNotConfigured"}},Kx=class extends Error{constructor(){super(...arguments),this.name="ConnectorAlreadyConnectedError",this.message="Connector already connected"}},Zx=class extends Error{constructor(){super(...arguments),this.name="ConfigChainsNotFound",this.message="No chains were found on the wagmi config. Some functions that require a chain may not work."}},Jx=class extends Error{constructor({connector:e}){super(`"${e.name}" does not support programmatic chain switching.`),this.name="SwitchChainNotSupportedError"}},$f=(e,{find:t,replace:n})=>e&&t(e)?n(e):typeof e!="object"?e:Array.isArray(e)?e.map(r=>$f(r,{find:t,replace:n})):e instanceof Object?Object.entries(e).reduce((r,[i,o])=>({...r,[i]:$f(o,{find:t,replace:n})}),{}):e;function Yx(e){const t=JSON.parse(e);return $f(t,{find:r=>typeof r=="string"&&r.startsWith("#bigint."),replace:r=>BigInt(r.replace("#bigint.",""))})}function Xx(e){return{accessList:e.accessList,account:e.account,blockNumber:e.blockNumber,blockTag:e.blockTag,data:e.data,gas:e.gas,gasPrice:e.gasPrice,maxFeePerGas:e.maxFeePerGas,maxPriorityFeePerGas:e.maxPriorityFeePerGas,nonce:e.nonce,to:e.to,value:e.value}}function D1(e){return typeof e=="number"?e:e==="wei"?0:Math.abs(b4[e])}function I1(e,t){return e.slice(0,t).join(".")||"."}function R1(e,t){const{length:n}=e;for(let r=0;r<n;++r)if(e[r]===t)return r+1;return 0}function Qx(e,t){const n=typeof e=="function",r=typeof t=="function",i=[],o=[];return function(a,c){if(typeof c=="object")if(i.length){const u=R1(i,this);u===0?i[i.length]=this:(i.splice(u),o.splice(u)),o[o.length]=a;const l=R1(i,c);if(l!==0)return r?t.call(this,a,c,I1(o,l)):`[ref=${I1(o,l)}]`}else i[0]=c,o[0]=a;return n?e.call(this,a,c):c}}function e_(e,t,n,r){return JSON.stringify(e,Qx((i,o)=>{const s=typeof o=="bigint"?`#bigint.${o.toString()}`:o;return(t==null?void 0:t(i,s))||s},r),n??void 0)}var t_={getItem:e=>"",setItem:(e,t)=>null,removeItem:e=>null};function n_({deserialize:e=Yx,key:t="wagmi",serialize:n=e_,storage:r}){return{...r,getItem:(i,o=null)=>{const s=r.getItem(`${t}.${i}`);try{return s?e(s):o}catch(a){return console.warn(a),o}},setItem:(i,o)=>{if(o===null)r.removeItem(`${t}.${i}`);else try{r.setItem(`${t}.${i}`,n(o))}catch(s){console.error(s)}},removeItem:i=>r.removeItem(`${t}.${i}`)}}var N1="store",no,Ds,Pf,Ww,r_=class{constructor({autoConnect:e=!1,connectors:t=[new Fw],publicClient:n,storage:r=n_({storage:typeof window<"u"?window.localStorage:t_}),logger:i={warn:console.warn},webSocketPublicClient:o}){var u,l;wd(this,Pf),this.publicClients=new Map,this.webSocketPublicClients=new Map,wd(this,no,void 0),wd(this,Ds,void 0),this.args={autoConnect:e,connectors:t,logger:i,publicClient:n,storage:r,webSocketPublicClient:o};let s="disconnected",a;if(e)try{const d=r.getItem(N1),p=(u=d==null?void 0:d.state)==null?void 0:u.data;s=p!=null&&p.account?"reconnecting":"connecting",a=(l=p==null?void 0:p.chain)==null?void 0:l.id}catch{}const c=typeof t=="function"?t():t;c.forEach(d=>d.setStorage(r)),this.store=zx(Lx(Hx(()=>({connectors:c,publicClient:this.getPublicClient({chainId:a}),status:s,webSocketPublicClient:this.getWebSocketPublicClient({chainId:a})}),{name:N1,storage:r,partialize:d=>{var p,g;return{...e&&{data:{account:(p=d==null?void 0:d.data)==null?void 0:p.account,chain:(g=d==null?void 0:d.data)==null?void 0:g.chain}},chains:d==null?void 0:d.chains}},version:2}))),this.storage=r,Sc(this,Ds,r==null?void 0:r.getItem("wallet")),Mx(this,Pf,Ww).call(this),e&&typeof window<"u"&&setTimeout(async()=>await this.autoConnect(),0)}get chains(){return this.store.getState().chains}get connectors(){return this.store.getState().connectors}get connector(){return this.store.getState().connector}get data(){return this.store.getState().data}get error(){return this.store.getState().error}get lastUsedChainId(){var e,t;return(t=(e=this.data)==null?void 0:e.chain)==null?void 0:t.id}get publicClient(){return this.store.getState().publicClient}get status(){return this.store.getState().status}get subscribe(){return this.store.subscribe}get webSocketPublicClient(){return this.store.getState().webSocketPublicClient}setState(e){const t=typeof e=="function"?e(this.store.getState()):e;this.store.setState(t,!0)}clearState(){this.setState(e=>({...e,chains:void 0,connector:void 0,data:void 0,error:void 0,status:"disconnected"}))}async destroy(){var e,t;this.connector&&await((t=(e=this.connector).disconnect)==null?void 0:t.call(e)),Sc(this,no,!1),this.clearState(),this.store.destroy()}async autoConnect(){if(gd(this,no))return;Sc(this,no,!0),this.setState(n=>{var r;return{...n,status:(r=n.data)!=null&&r.account?"reconnecting":"connecting"}});const e=gd(this,Ds)?[...this.connectors].sort(n=>n.id===gd(this,Ds)?-1:1):this.connectors;let t=!1;for(const n of e){if(!n.ready||!n.isAuthorized||!await n.isAuthorized())continue;const i=await n.connect();this.setState(o=>({...o,connector:n,chains:n==null?void 0:n.chains,data:i,status:"connected"})),t=!0;break}return t||this.setState(n=>({...n,data:void 0,status:"disconnected"})),Sc(this,no,!1),this.data}setConnectors(e){this.args={...this.args,connectors:e};const t=typeof e=="function"?e():e;t.forEach(n=>n.setStorage(this.args.storage)),this.setState(n=>({...n,connectors:t}))}getPublicClient({chainId:e}={}){let t=this.publicClients.get(-1);if(t&&(t==null?void 0:t.chain.id)===e||(t=this.publicClients.get(e??-1),t))return t;const{publicClient:n}=this.args;return t=typeof n=="function"?n({chainId:e}):n,this.publicClients.set(e??-1,t),t}setPublicClient(e){var n,r;const t=(r=(n=this.data)==null?void 0:n.chain)==null?void 0:r.id;this.args={...this.args,publicClient:e},this.publicClients.clear(),this.setState(i=>({...i,publicClient:this.getPublicClient({chainId:t})}))}getWebSocketPublicClient({chainId:e}={}){let t=this.webSocketPublicClients.get(-1);if(t&&(t==null?void 0:t.chain.id)===e||(t=this.webSocketPublicClients.get(e??-1),t))return t;const{webSocketPublicClient:n}=this.args;return t=typeof n=="function"?n({chainId:e}):n,t&&this.webSocketPublicClients.set(e??-1,t),t}setWebSocketPublicClient(e){var n,r;const t=(r=(n=this.data)==null?void 0:n.chain)==null?void 0:r.id;this.args={...this.args,webSocketPublicClient:e},this.webSocketPublicClients.clear(),this.setState(i=>({...i,webSocketPublicClient:this.getWebSocketPublicClient({chainId:t})}))}setLastUsedConnector(e=null){var t;(t=this.storage)==null||t.setItem("wallet",e)}};no=new WeakMap;Ds=new WeakMap;Pf=new WeakSet;Ww=function(){const e=a=>{this.setState(c=>({...c,data:{...c.data,...a}}))},t=()=>{this.clearState()},n=a=>{this.setState(c=>({...c,error:a}))};this.store.subscribe(({connector:a})=>a,(a,c)=>{var u,l,d,p,g,w;(u=c==null?void 0:c.off)==null||u.call(c,"change",e),(l=c==null?void 0:c.off)==null||l.call(c,"disconnect",t),(d=c==null?void 0:c.off)==null||d.call(c,"error",n),a&&((p=a.on)==null||p.call(a,"change",e),(g=a.on)==null||g.call(a,"disconnect",t),(w=a.on)==null||w.call(a,"error",n))});const{publicClient:r,webSocketPublicClient:i}=this.args;(typeof r=="function"||typeof i=="function")&&this.store.subscribe(({data:a})=>{var c;return(c=a==null?void 0:a.chain)==null?void 0:c.id},a=>{this.setState(c=>({...c,publicClient:this.getPublicClient({chainId:a}),webSocketPublicClient:this.getWebSocketPublicClient({chainId:a})}))})};var Of;function i_(e){const t=new r_(e);return Of=t,t}function Yn(){if(!Of)throw new Error("No wagmi config found. Ensure you have set up a config: https://wagmi.sh/react/config");return Of}async function k1({chainId:e,connector:t}){const n=Yn(),r=n.connector;if(r&&t.id===r.id)throw new Kx;try{n.setState(o=>({...o,status:"connecting"}));const i=await t.connect({chainId:e});return n.setLastUsedConnector(t.id),n.setState(o=>({...o,connector:t,chains:t==null?void 0:t.chains,data:i,status:"connected"})),n.storage.setItem("connected",!0),{...i,connector:t}}catch(i){throw n.setState(o=>({...o,status:o.connector?"connected":"disconnected"})),i}}async function Hw(){const e=Yn();e.connector&&await e.connector.disconnect(),e.clearState(),e.storage.removeItem("connected")}var o_=[{type:"event",name:"Approval",inputs:[{indexed:!0,name:"owner",type:"address"},{indexed:!0,name:"spender",type:"address"},{indexed:!1,name:"value",type:"uint256"}]},{type:"event",name:"Transfer",inputs:[{indexed:!0,name:"from",type:"address"},{indexed:!0,name:"to",type:"address"},{indexed:!1,name:"value",type:"uint256"}]},{type:"function",name:"allowance",stateMutability:"view",inputs:[{name:"owner",type:"address"},{name:"spender",type:"address"}],outputs:[{name:"",type:"uint256"}]},{type:"function",name:"approve",stateMutability:"nonpayable",inputs:[{name:"spender",type:"address"},{name:"amount",type:"uint256"}],outputs:[{name:"",type:"bool"}]},{type:"function",name:"balanceOf",stateMutability:"view",inputs:[{name:"account",type:"address"}],outputs:[{name:"",type:"uint256"}]},{type:"function",name:"decimals",stateMutability:"view",inputs:[],outputs:[{name:"",type:"uint8"}]},{type:"function",name:"name",stateMutability:"view",inputs:[],outputs:[{name:"",type:"string"}]},{type:"function",name:"symbol",stateMutability:"view",inputs:[],outputs:[{name:"",type:"string"}]},{type:"function",name:"totalSupply",stateMutability:"view",inputs:[],outputs:[{name:"",type:"uint256"}]},{type:"function",name:"transfer",stateMutability:"nonpayable",inputs:[{name:"recipient",type:"address"},{name:"amount",type:"uint256"}],outputs:[{name:"",type:"bool"}]},{type:"function",name:"transferFrom",stateMutability:"nonpayable",inputs:[{name:"sender",type:"address"},{name:"recipient",type:"address"},{name:"amount",type:"uint256"}],outputs:[{name:"",type:"bool"}]}],s_=[{type:"event",name:"Approval",inputs:[{indexed:!0,name:"owner",type:"address"},{indexed:!0,name:"spender",type:"address"},{indexed:!1,name:"value",type:"uint256"}]},{type:"event",name:"Transfer",inputs:[{indexed:!0,name:"from",type:"address"},{indexed:!0,name:"to",type:"address"},{indexed:!1,name:"value",type:"uint256"}]},{type:"function",name:"allowance",stateMutability:"view",inputs:[{name:"owner",type:"address"},{name:"spender",type:"address"}],outputs:[{name:"",type:"uint256"}]},{type:"function",name:"approve",stateMutability:"nonpayable",inputs:[{name:"spender",type:"address"},{name:"amount",type:"uint256"}],outputs:[{name:"",type:"bool"}]},{type:"function",name:"balanceOf",stateMutability:"view",inputs:[{name:"account",type:"address"}],outputs:[{name:"",type:"uint256"}]},{type:"function",name:"decimals",stateMutability:"view",inputs:[],outputs:[{name:"",type:"uint8"}]},{type:"function",name:"name",stateMutability:"view",inputs:[],outputs:[{name:"",type:"bytes32"}]},{type:"function",name:"symbol",stateMutability:"view",inputs:[],outputs:[{name:"",type:"bytes32"}]},{type:"function",name:"totalSupply",stateMutability:"view",inputs:[],outputs:[{name:"",type:"uint256"}]},{type:"function",name:"transfer",stateMutability:"nonpayable",inputs:[{name:"recipient",type:"address"},{name:"amount",type:"uint256"}],outputs:[{name:"",type:"bool"}]},{type:"function",name:"transferFrom",stateMutability:"nonpayable",inputs:[{name:"sender",type:"address"},{name:"recipient",type:"address"},{name:"amount",type:"uint256"}],outputs:[{name:"",type:"bool"}]}];function ti({chainId:e}={}){const t=Yn();return e&&t.getPublicClient({chainId:e})||t.publicClient}async function zw({chainId:e}={}){var r,i;return await((i=(r=Yn().connector)==null?void 0:r.getWalletClient)==null?void 0:i.call(r,{chainId:e}))||null}async function Is({abi:e,address:t,args:n,chainId:r,dataSuffix:i,functionName:o,walletClient:s,...a}){const c=ti({chainId:r}),u=s??await zw({chainId:r});if(!u)throw new lr;r&&Kw({chainId:r});const{account:l,accessList:d,blockNumber:p,blockTag:g,gas:w,gasPrice:y,maxFeePerGas:x,maxPriorityFeePerGas:E,nonce:b,value:C}=Xx(a),{result:_,request:T}=await c.simulateContract({abi:e,address:t,functionName:o,args:n,account:l||u.account,accessList:d,blockNumber:p,blockTag:g,dataSuffix:i,gas:w,gasPrice:y,maxFeePerGas:x,maxPriorityFeePerGas:E,nonce:b,value:C}),$=e.filter(h=>"name"in h&&h.name===o);return{mode:"prepared",request:{...T,abi:$,chainId:r},result:_}}async function a_({chainId:e,contracts:t,blockNumber:n,blockTag:r,...i}){const o=ti({chainId:e});if(!o.chains)throw new Zx;if(e&&o.chain.id!==e)throw new Gx({chainId:e});return o.multicall({allowFailure:i.allowFailure??!0,blockNumber:n,blockTag:r,contracts:t})}async function c_({address:e,account:t,chainId:n,abi:r,args:i,functionName:o,blockNumber:s,blockTag:a}){return ti({chainId:n}).readContract({abi:r,address:e,account:t,functionName:o,args:i,blockNumber:s,blockTag:a})}async function Rs({contracts:e,blockNumber:t,blockTag:n,...r}){const{allowFailure:i=!0}=r;try{const o=ti(),s=e.reduce((l,d,p)=>{const g=d.chainId??o.chain.id;return{...l,[g]:[...l[g]||[],{contract:d,index:p}]}},{}),a=()=>Object.entries(s).map(([l,d])=>a_({allowFailure:i,chainId:parseInt(l),contracts:d.map(({contract:p})=>p),blockNumber:t,blockTag:n})),c=(await Promise.all(a())).flat(),u=Object.values(s).flatMap(l=>l.map(({index:d})=>d));return c.reduce((l,d,p)=>(l&&(l[u[p]]=d),l),[])}catch(o){if(o instanceof X0)throw o;const s=()=>e.map(a=>c_({...a,blockNumber:t,blockTag:n}));return i?(await Promise.allSettled(s())).map(a=>a.status==="fulfilled"?{result:a.value,status:"success"}:{error:a.reason,result:void 0,status:"failure"}):await Promise.all(s())}}async function Ac(e){const t=await zw({chainId:e.chainId});if(!t)throw new lr;e.chainId&&Kw({chainId:e.chainId});let n;if(e.mode==="prepared")n=e.request;else{const{chainId:i,mode:o,...s}=e;n=(await Is(s)).request}return{hash:await t.writeContract({...n,chain:e.chainId?{id:e.chainId}:null})}}async function qw({address:e,chainId:t,formatUnits:n,token:r}){const i=Yn(),o=ti({chainId:t});if(r){const u=async({abi:l})=>{const d={abi:l,address:r,chainId:t},[p,g,w]=await Rs({allowFailure:!1,contracts:[{...d,functionName:"balanceOf",args:[e]},{...d,functionName:"decimals"},{...d,functionName:"symbol"}]});return{decimals:g,formatted:tl(p??"0",D1(n??g)),symbol:w,value:p}};try{return await u({abi:o_})}catch(l){if(l instanceof X0){const{symbol:d,...p}=await u({abi:s_});return{symbol:W0(Ti(d,{dir:"right"})),...p}}throw l}}const s=[...i.publicClient.chains||[],...i.chains??[]],a=await o.getBalance({address:e}),c=s.find(u=>u.id===o.chain.id);return{decimals:(c==null?void 0:c.nativeCurrency.decimals)??18,formatted:tl(a??"0",D1(n??18)),symbol:(c==null?void 0:c.nativeCurrency.symbol)??"ETH",value:a}}function cl(){const{data:e,connector:t,status:n}=Yn();switch(n){case"connected":return{address:e==null?void 0:e.account,connector:t,isConnected:!0,isConnecting:!1,isDisconnected:!1,isReconnecting:!1,status:n};case"reconnecting":return{address:e==null?void 0:e.account,connector:t,isConnected:!!(e!=null&&e.account),isConnecting:!1,isDisconnected:!1,isReconnecting:!0,status:n};case"connecting":return{address:e==null?void 0:e.account,connector:t,isConnected:!1,isConnecting:!0,isDisconnected:!1,isReconnecting:!1,status:n};case"disconnected":return{address:void 0,connector:void 0,isConnected:!1,isConnecting:!1,isDisconnected:!0,isReconnecting:!1,status:n}}}function Di(){var i,o,s,a;const e=Yn(),t=(o=(i=e.data)==null?void 0:i.chain)==null?void 0:o.id,n=e.chains??[],r=[...((s=e.publicClient)==null?void 0:s.chains)||[],...n].find(c=>c.id===t)??{id:t,name:`Chain ${t}`,network:`${t}`,nativeCurrency:{name:"Ether",decimals:18,symbol:"ETH"},rpcUrls:{default:{http:[""]},public:{http:[""]}}};return{chain:t?{...r,...(a=e.data)==null?void 0:a.chain,id:t}:void 0,chains:n}}async function yh({chainId:e}){const{connector:t}=Yn();if(!t)throw new lr;if(!t.switchChain)throw new Jx({connector:t});return t.switchChain(e)}function Vw(e,{selector:t=n=>n}={}){const n=Yn(),r=()=>e(cl());return n.subscribe(({data:o,connector:s,status:a})=>t({address:o==null?void 0:o.account,connector:s,status:a}),r,{equalityFn:jw})}function Gw(e,{selector:t=n=>n}={}){const n=Yn(),r=()=>e(Di());return n.subscribe(({data:o,chains:s})=>{var a;return t({chainId:(a=o==null?void 0:o.chain)==null?void 0:a.id,chains:s})},r,{equalityFn:jw})}async function l_({name:e,chainId:t}){const{normalize:n}=await Vt(()=>import("./index-ecf8bb4d.js"),[]);return await ti({chainId:t}).getEnsAvatar({name:n(e)})}async function u_({address:e,chainId:t}){return ti({chainId:t}).getEnsName({address:En(e)})}async function $c({chainId:e,confirmations:t=1,hash:n,onReplaced:r,timeout:i=0}){const o=ti({chainId:e}),s=await o.waitForTransactionReceipt({hash:n,confirmations:t,onReplaced:r,timeout:i});if(s.status==="reverted"){const a=await o.getTransaction({hash:s.transactionHash}),c=await o.call({...a,gasPrice:a.type!=="eip1559"?a.gasPrice:void 0,maxFeePerGas:a.type==="eip1559"?a.maxFeePerGas:void 0,maxPriorityFeePerGas:a.type==="eip1559"?a.maxPriorityFeePerGas:void 0}),u=W0(`0x${c.substring(138)}`);throw new Error(u)}return s}function Kw({chainId:e}){var i,o;const{chain:t,chains:n}=Di(),r=t==null?void 0:t.id;if(r&&e!==r)throw new Vx({activeChain:((i=n.find(s=>s.id===r))==null?void 0:i.name)??`Chain ${r}`,targetChain:((o=n.find(s=>s.id===e))==null?void 0:o.name)??`Chain ${e}`})}const d_=Symbol(),M1=Object.getPrototypeOf,Df=new WeakMap,f_=e=>e&&(Df.has(e)?Df.get(e):M1(e)===Object.prototype||M1(e)===Array.prototype),h_=e=>f_(e)&&e[d_]||null,B1=(e,t=!0)=>{Df.set(e,t)},bd=e=>typeof e=="object"&&e!==null,pi=new WeakMap,Ns=new WeakSet,p_=(e=Object.is,t=(u,l)=>new Proxy(u,l),n=u=>bd(u)&&!Ns.has(u)&&(Array.isArray(u)||!(Symbol.iterator in u))&&!(u instanceof WeakMap)&&!(u instanceof WeakSet)&&!(u instanceof Error)&&!(u instanceof Number)&&!(u instanceof Date)&&!(u instanceof String)&&!(u instanceof RegExp)&&!(u instanceof ArrayBuffer),r=u=>{switch(u.status){case"fulfilled":return u.value;case"rejected":throw u.reason;default:throw u}},i=new WeakMap,o=(u,l,d=r)=>{const p=i.get(u);if((p==null?void 0:p[0])===l)return p[1];const g=Array.isArray(u)?[]:Object.create(Object.getPrototypeOf(u));return B1(g,!0),i.set(u,[l,g]),Reflect.ownKeys(u).forEach(w=>{if(Object.getOwnPropertyDescriptor(g,w))return;const y=Reflect.get(u,w),x={value:y,enumerable:!0,configurable:!0};if(Ns.has(y))B1(y,!1);else if(y instanceof Promise)delete x.value,x.get=()=>d(y);else if(pi.has(y)){const[E,b]=pi.get(y);x.value=o(E,b(),d)}Object.defineProperty(g,w,x)}),Object.preventExtensions(g)},s=new WeakMap,a=[1,1],c=u=>{if(!bd(u))throw new Error("object required");const l=s.get(u);if(l)return l;let d=a[0];const p=new Set,g=(U,D=++a[0])=>{d!==D&&(d=D,p.forEach(R=>R(U,D)))};let w=a[1];const y=(U=++a[1])=>(w!==U&&!p.size&&(w=U,E.forEach(([D])=>{const R=D[1](U);R>d&&(d=R)})),d),x=U=>(D,R)=>{const L=[...D];L[1]=[U,...L[1]],g(L,R)},E=new Map,b=(U,D)=>{if(p.size){const R=D[3](x(U));E.set(U,[D,R])}else E.set(U,[D])},C=U=>{var D;const R=E.get(U);R&&(E.delete(U),(D=R[1])==null||D.call(R))},_=U=>(p.add(U),p.size===1&&E.forEach(([R,L],H)=>{const Z=R[3](x(H));E.set(H,[R,Z])}),()=>{p.delete(U),p.size===0&&E.forEach(([R,L],H)=>{L&&(L(),E.set(H,[R]))})}),T=Array.isArray(u)?[]:Object.create(Object.getPrototypeOf(u)),h=t(T,{deleteProperty(U,D){const R=Reflect.get(U,D);C(D);const L=Reflect.deleteProperty(U,D);return L&&g(["delete",[D],R]),L},set(U,D,R,L){const H=Reflect.has(U,D),Z=Reflect.get(U,D,L);if(H&&(e(Z,R)||s.has(R)&&e(Z,s.get(R))))return!0;C(D),bd(R)&&(R=h_(R)||R);let z=R;if(R instanceof Promise)R.then(J=>{R.status="fulfilled",R.value=J,g(["resolve",[D],J])}).catch(J=>{R.status="rejected",R.reason=J,g(["reject",[D],J])});else{!pi.has(R)&&n(R)&&(z=c(R));const J=!Ns.has(z)&&pi.get(z);J&&b(D,J)}return Reflect.set(U,D,z,L),g(["set",[D],R,Z]),!0}});s.set(u,h);const S=[T,y,o,_];return pi.set(h,S),Reflect.ownKeys(u).forEach(U=>{const D=Object.getOwnPropertyDescriptor(u,U);"value"in D&&(h[U]=u[U],delete D.value,delete D.writable),Object.defineProperty(T,U,D)}),h})=>[c,pi,Ns,e,t,n,r,i,o,s,a],[m_]=p_();function Jt(e={}){return m_(e)}function as(e,t,n){const r=pi.get(e);let i;const o=[],s=r[3];let a=!1;const u=s(l=>{if(o.push(l),n){t(o.splice(0));return}i||(i=Promise.resolve().then(()=>{i=void 0,a&&t(o.splice(0))}))});return a=!0,()=>{a=!1,u()}}function ll(e){return Ns.add(e),e}function Xn(e,t,n,r){let i=e[t];return as(e,()=>{const o=e[t];Object.is(i,o)||n(i=o)},r)}const ks={FOUR_MINUTES_MS:24e4,TEN_SEC_MS:1e4,ONE_SEC_MS:1e3,RESTRICTED_TIMEZONES:["ASIA/SHANGHAI","ASIA/URUMQI","ASIA/CHONGQING","ASIA/HARBIN","ASIA/KASHGAR","ASIA/MACAU","ASIA/HONG_KONG","ASIA/MACAO","ASIA/BEIJING","ASIA/HARBIN"]},Ee={isMobile(){return typeof window<"u"?!!(window.matchMedia("(pointer:coarse)").matches||/Android|webOS|iPhone|iPad|iPod|BlackBerry|Opera Mini/u.test(navigator.userAgent)):!1},isAndroid(){const e=navigator.userAgent.toLowerCase();return Ee.isMobile()&&e.includes("android")},isIos(){const e=navigator.userAgent.toLowerCase();return Ee.isMobile()&&(e.includes("iphone")||e.includes("ipad"))},isClient(){return typeof window<"u"},isPairingExpired(e){return e?e-Date.now()<=ks.TEN_SEC_MS:!0},isAllowedRetry(e){return Date.now()-e>=ks.ONE_SEC_MS},copyToClopboard(e){navigator.clipboard.writeText(e)},getPairingExpiry(){return Date.now()+ks.FOUR_MINUTES_MS},getPlainAddress(e){return e.split(":")[2]},async wait(e){return new Promise(t=>{setTimeout(t,e)})},debounce(e,t=500){let n;return(...r)=>{function i(){e(...r)}n&&clearTimeout(n),n=setTimeout(i,t)}},isHttpUrl(e){return e.startsWith("http://")||e.startsWith("https://")},formatNativeUrl(e,t){if(Ee.isHttpUrl(e))return this.formatUniversalUrl(e,t);let n=e;n.includes("://")||(n=e.replaceAll("/","").replaceAll(":",""),n=`${n}://`),n.endsWith("/")||(n=`${n}/`);const r=encodeURIComponent(t);return{redirect:`${n}wc?uri=${r}`,href:n}},formatUniversalUrl(e,t){if(!Ee.isHttpUrl(e))return this.formatNativeUrl(e,t);let n=e;n.endsWith("/")||(n=`${n}/`);const r=encodeURIComponent(t);return{redirect:`${n}wc?uri=${r}`,href:n}},openHref(e,t){window.open(e,t,"noreferrer noopener")},async preloadImage(e){const t=new Promise((n,r)=>{const i=new Image;i.onload=n,i.onerror=r,i.crossOrigin="anonymous",i.src=e});return Promise.race([t,Ee.wait(2e3)])},formatBalance(e,t){var r;let n;if(e==="0")n="0.000";else if(typeof e=="string"){const i=Number(e);i&&(n=(r=i.toString().match(/^-?\d+(?:\.\d{0,3})?/u))==null?void 0:r[0])}return n?`${n} ${t}`:"0.000"},isRestrictedRegion(){try{const{timeZone:e}=new Intl.DateTimeFormat().resolvedOptions(),t=e.toUpperCase();return ks.RESTRICTED_TIMEZONES.includes(t)}catch{return!1}},getApiUrl(){return Ee.isRestrictedRegion()?"https://api.web3modal.org":"https://api.web3modal.com"},getBlockchainApiUrl(){return Ee.isRestrictedRegion()?"https://rpc.walletconnect.org":"https://rpc.walletconnect.com"},getAnalyticsUrl(){return Ee.isRestrictedRegion()?"https://pulse.walletconnect.org":"https://pulse.walletconnect.com"},getUUID(){return crypto!=null&&crypto.randomUUID?crypto.randomUUID():"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/gu,e=>{const t=Math.random()*16|0;return(e==="x"?t:t&3|8).toString(16)})}},ct=Jt({isConnected:!1}),Ze={state:ct,subscribe(e){return as(ct,()=>e(ct))},subscribeKey(e,t){return Xn(ct,e,t)},setIsConnected(e){ct.isConnected=e},setCaipAddress(e){ct.caipAddress=e,ct.address=e?Ee.getPlainAddress(e):void 0},setBalance(e,t){ct.balance=e,ct.balanceSymbol=t},setProfileName(e){ct.profileName=e},setProfileImage(e){ct.profileImage=e},setAddressExplorerUrl(e){ct.addressExplorerUrl=e},resetAccount(){ct.isConnected=!1,ct.caipAddress=void 0,ct.address=void 0,ct.balance=void 0,ct.balanceSymbol=void 0,ct.profileName=void 0,ct.profileImage=void 0,ct.addressExplorerUrl=void 0}};class vh{constructor({baseUrl:t}){this.baseUrl=t}async get({headers:t,...n}){const r=this.createUrl(n);return(await fetch(r,{method:"GET",headers:t})).json()}async getBlob({headers:t,...n}){const r=this.createUrl(n);return(await fetch(r,{method:"GET",headers:t})).blob()}async post({body:t,headers:n,...r}){const i=this.createUrl(r);return(await fetch(i,{method:"POST",headers:n,body:t?JSON.stringify(t):void 0})).json()}async put({body:t,headers:n,...r}){const i=this.createUrl(r);return(await fetch(i,{method:"PUT",headers:n,body:t?JSON.stringify(t):void 0})).json()}async delete({body:t,headers:n,...r}){const i=this.createUrl(r);return(await fetch(i,{method:"DELETE",headers:n,body:t?JSON.stringify(t):void 0})).json()}createUrl({path:t,params:n}){const r=new URL(t,this.baseUrl);return n&&Object.entries(n).forEach(([i,o])=>{o&&r.searchParams.append(i,o)}),r}}const yd="WALLETCONNECT_DEEPLINK_CHOICE",L1="@w3m/recent",Lr={setWalletConnectDeepLink({href:e,name:t}){try{localStorage.setItem(yd,JSON.stringify({href:e,name:t}))}catch{console.info("Unable to set WalletConnect deep link")}},getWalletConnectDeepLink(){try{const e=localStorage.getItem(yd);if(e)return JSON.parse(e)}catch{console.info("Unable to get WalletConnect deep link")}},deleteWalletConnectDeepLink(){try{localStorage.removeItem(yd)}catch{console.info("Unable to delete WalletConnect deep link")}},setWeb3ModalRecent(e){try{const t=Lr.getRecentWallets();t.find(r=>r.id===e.id)||(t.unshift(e),t.length>2&&t.pop(),localStorage.setItem(L1,JSON.stringify(t)))}catch{console.info("Unable to set Web3Modal recent")}},getRecentWallets(){try{const e=localStorage.getItem(L1);return e?JSON.parse(e):[]}catch{console.info("Unable to get Web3Modal recent")}return[]}},Sr=Jt({walletImages:{},networkImages:{},connectorImages:{},tokenImages:{}}),Ur={state:Sr,subscribeNetworkImages(e){return as(Sr.networkImages,()=>e(Sr.networkImages))},subscribeKey(e,t){return Xn(Sr,e,t)},setWalletImage(e,t){Sr.walletImages[e]=t},setNetworkImage(e,t){Sr.networkImages[e]=t},setConnectorImage(e,t){Sr.connectorImages[e]=t},setTokenImage(e,t){Sr.tokenImages[e]=t}},xs=Jt({connectors:[]}),yn={state:xs,subscribeKey(e,t){return Xn(xs,e,t)},setConnectors(e){xs.connectors=e.map(t=>ll(t))},addConnector(e){xs.connectors.push(ll(e))},getConnectors(){return xs.connectors}},_s=Jt({open:!1,selectedNetworkId:void 0}),Do={state:_s,subscribe(e){return as(_s,()=>e(_s))},set(e){Object.assign(_s,{..._s,...e})}},Ct=Jt({supportsAllNetworks:!0,isDefaultCaipNetwork:!1}),rt={state:Ct,subscribeKey(e,t){return Xn(Ct,e,t)},_getClient(){if(!Ct._client)throw new Error("NetworkController client not set");return Ct._client},setClient(e){Ct._client=ll(e)},setCaipNetwork(e){Ct.caipNetwork=e,Do.set({selectedNetworkId:e==null?void 0:e.id})},setDefaultCaipNetwork(e){Ct.caipNetwork=e,Do.set({selectedNetworkId:e==null?void 0:e.id}),Ct.isDefaultCaipNetwork=!0},setRequestedCaipNetworks(e){Ct.requestedCaipNetworks=e},async getApprovedCaipNetworksData(){const e=await this._getClient().getApprovedCaipNetworksData();Ct.supportsAllNetworks=e.supportsAllNetworks,Ct.approvedCaipNetworkIds=e.approvedCaipNetworkIds},async switchActiveNetwork(e){await this._getClient().switchCaipNetwork(e),Ct.caipNetwork=e},resetNetwork(){Ct.isDefaultCaipNetwork||(Ct.caipNetwork=void 0),Ct.approvedCaipNetworkIds=void 0,Ct.supportsAllNetworks=!0}},Qt=Jt({projectId:"",sdkType:"w3m",sdkVersion:"html-wagmi-undefined"}),tt={state:Qt,subscribeKey(e,t){return Xn(Qt,e,t)},setProjectId(e){Qt.projectId=e},setIncludeWalletIds(e){Qt.includeWalletIds=e},setExcludeWalletIds(e){Qt.excludeWalletIds=e},setFeaturedWalletIds(e){Qt.featuredWalletIds=e},setTokens(e){Qt.tokens=e},setTermsConditionsUrl(e){Qt.termsConditionsUrl=e},setPrivacyPolicyUrl(e){Qt.privacyPolicyUrl=e},setCustomWallets(e){Qt.customWallets=e},setEnableAnalytics(e){Qt.enableAnalytics=e},setSdkVersion(e){Qt.sdkVersion=e}},g_=Ee.getApiUrl(),Nn=new vh({baseUrl:g_}),w_="40",U1="4",Pt=Jt({page:1,count:0,featured:[],recommended:[],wallets:[],search:[]}),Be={state:Pt,subscribeKey(e,t){return Xn(Pt,e,t)},_getApiHeaders(){const{projectId:e,sdkType:t,sdkVersion:n}=tt.state;return{"x-project-id":e,"x-sdk-type":t,"x-sdk-version":n}},async _fetchWalletImage(e){const t=`${Nn.baseUrl}/getWalletImage/${e}`,n=await Nn.getBlob({path:t,headers:Be._getApiHeaders()});Ur.setWalletImage(e,URL.createObjectURL(n))},async _fetchNetworkImage(e){const t=`${Nn.baseUrl}/public/getAssetImage/${e}`,n=await Nn.getBlob({path:t,headers:Be._getApiHeaders()});Ur.setNetworkImage(e,URL.createObjectURL(n))},async _fetchConnectorImage(e){const t=`${Nn.baseUrl}/public/getAssetImage/${e}`,n=await Nn.getBlob({path:t,headers:Be._getApiHeaders()});Ur.setConnectorImage(e,URL.createObjectURL(n))},async fetchNetworkImages(){const{requestedCaipNetworks:e}=rt.state,t=e==null?void 0:e.map(({imageId:n})=>n).filter(Boolean);t&&await Promise.allSettled(t.map(n=>Be._fetchNetworkImage(n)))},async fetchConnectorImages(){const{connectors:e}=yn.state,t=e.map(({imageId:n})=>n).filter(Boolean);await Promise.allSettled(t.map(n=>Be._fetchConnectorImage(n)))},async fetchFeaturedWallets(){const{featuredWalletIds:e}=tt.state;if(e!=null&&e.length){const{data:t}=await Nn.get({path:"/getWallets",headers:Be._getApiHeaders(),params:{page:"1",entries:e!=null&&e.length?String(e.length):U1,include:e==null?void 0:e.join(",")}});t.sort((r,i)=>e.indexOf(r.id)-e.indexOf(i.id));const n=t.map(r=>r.image_id).filter(Boolean);await Promise.allSettled(n.map(r=>Be._fetchWalletImage(r))),Pt.featured=t}},async fetchRecommendedWallets(){const{includeWalletIds:e,excludeWalletIds:t,featuredWalletIds:n}=tt.state,r=[...t??[],...n??[]].filter(Boolean),{data:i,count:o}=await Nn.get({path:"/getWallets",headers:Be._getApiHeaders(),params:{page:"1",entries:U1,include:e==null?void 0:e.join(","),exclude:r==null?void 0:r.join(",")}}),s=Lr.getRecentWallets(),a=i.map(u=>u.image_id).filter(Boolean),c=s.map(u=>u.image_id).filter(Boolean);await Promise.allSettled([...a,...c].map(u=>Be._fetchWalletImage(u))),Pt.recommended=i,Pt.count=o??0},async fetchWallets({page:e}){const{includeWalletIds:t,excludeWalletIds:n,featuredWalletIds:r}=tt.state,i=[...Pt.recommended.map(({id:c})=>c),...n??[],...r??[]].filter(Boolean),{data:o,count:s}=await Nn.get({path:"/getWallets",headers:Be._getApiHeaders(),params:{page:String(e),entries:w_,include:t==null?void 0:t.join(","),exclude:i.join(",")}}),a=o.map(c=>c.image_id).filter(Boolean);await Promise.allSettled([...a.map(c=>Be._fetchWalletImage(c)),Ee.wait(300)]),Pt.wallets=[...Pt.wallets,...o],Pt.count=s>Pt.count?s:Pt.count,Pt.page=e},async searchWallet({search:e}){const{includeWalletIds:t,excludeWalletIds:n}=tt.state;Pt.search=[];const{data:r}=await Nn.get({path:"/getWallets",headers:Be._getApiHeaders(),params:{page:"1",entries:"100",search:e,include:t==null?void 0:t.join(","),exclude:n==null?void 0:n.join(",")}}),i=r.map(o=>o.image_id).filter(Boolean);await Promise.allSettled([...i.map(o=>Be._fetchWalletImage(o)),Ee.wait(300)]),Pt.search=r},prefetch(){Pt.prefetchPromise=Promise.race([Promise.allSettled([Be.fetchFeaturedWallets(),Be.fetchRecommendedWallets(),Be.fetchNetworkImages(),Be.fetchConnectorImages()]),Ee.wait(3e3)])}},b_=Ee.getAnalyticsUrl(),y_=new vh({baseUrl:b_}),v_=["MODAL_CREATED"],Zi=Jt({timestamp:Date.now(),data:{type:"track",event:"MODAL_CREATED"}}),Xe={state:Zi,subscribe(e){return as(Zi,()=>e(Zi))},_getApiHeaders(){const{projectId:e,sdkType:t,sdkVersion:n}=tt.state;return{"x-project-id":e,"x-sdk-type":t,"x-sdk-version":n}},async _sendAnalyticsEvent(e){try{if(v_.includes(e.data.event)||typeof window>"u")return;await y_.post({path:"/e",headers:Xe._getApiHeaders(),body:{eventId:Ee.getUUID(),url:window.location.href,domain:window.location.hostname,timestamp:e.timestamp,props:e.data}})}catch{}},sendEvent(e){Zi.timestamp=Date.now(),Zi.data=e,tt.state.enableAnalytics&&Xe._sendAnalyticsEvent(Zi)}},vt=Jt({view:"Connect",history:["Connect"]}),Me={state:vt,subscribeKey(e,t){return Xn(vt,e,t)},push(e,t){e!==vt.view&&(vt.view=e,vt.history.push(e),vt.data=t)},reset(e){vt.view=e,vt.history=[e]},replace(e){vt.history.length>1&&vt.history.at(-1)!==e&&(vt.view=e,vt.history[vt.history.length-1]=e)},goBack(){if(vt.history.length>1){vt.history.pop();const[e]=vt.history.slice(-1);e&&(vt.view=e)}}},Pc=Jt({open:!1}),bt={state:Pc,subscribeKey(e,t){return Xn(Pc,e,t)},async open(e){await Be.state.prefetchPromise,e!=null&&e.view?Me.reset(e.view):Ze.state.isConnected?Me.reset("Account"):Me.reset("Connect"),Pc.open=!0,Do.set({open:!0}),Xe.sendEvent({type:"track",event:"MODAL_OPEN"})},close(){Pc.open=!1,Do.set({open:!1}),Xe.sendEvent({type:"track",event:"MODAL_CLOSE"})}},mt=Jt({wcError:!1,buffering:!1}),We={state:mt,subscribeKey(e,t){return Xn(mt,e,t)},_getClient(){if(!mt._client)throw new Error("ConnectionController client not set");return mt._client},setClient(e){mt._client=ll(e)},connectWalletConnect(){mt.wcPromise=this._getClient().connectWalletConnect(e=>{mt.wcUri=e,mt.wcPairingExpiry=Ee.getPairingExpiry()})},async connectExternal(e){var t,n;await((n=(t=this._getClient()).connectExternal)==null?void 0:n.call(t,e))},checkInstalled(e){var t,n;return(n=(t=this._getClient()).checkInstalled)==null?void 0:n.call(t,e)},resetWcConnection(){mt.wcUri=void 0,mt.wcPairingExpiry=void 0,mt.wcPromise=void 0,mt.wcLinking=void 0,mt.recentWallet=void 0,Lr.deleteWalletConnectDeepLink()},setWcLinking(e){mt.wcLinking=e},setWcError(e){mt.wcError=e,mt.buffering=!1},setRecentWallet(e){mt.recentWallet=e},setBuffering(e){mt.buffering=e},async disconnect(){await this._getClient().disconnect(),this.resetWcConnection()}},rr=Jt({message:"",variant:"success",open:!1}),vn={state:rr,subscribeKey(e,t){return Xn(rr,e,t)},showSuccess(e){rr.message=e,rr.variant="success",rr.open=!0},showError(e){rr.message=e,rr.variant="error",rr.open=!0},hide(){rr.open=!1}},Ji=Jt({themeMode:"dark",themeVariables:{}}),en={state:Ji,subscribe(e){return as(Ji,()=>e(Ji))},setThemeMode(e){Ji.themeMode=e},setThemeVariables(e){Ji.themeVariables={...Ji.themeVariables,...e}}},x_=Ee.getBlockchainApiUrl(),__=new vh({baseUrl:x_}),C_={fetchIdentity({caipChainId:e,address:t}){return __.get({path:`/v1/identity/${t}`,params:{chainId:e,projectId:tt.state.projectId}})}},wt={getWalletImage(e){if(e!=null&&e.image_url)return e==null?void 0:e.image_url;if(e!=null&&e.image_id)return Ur.state.walletImages[e.image_id]},getNetworkImage(e){if(e!=null&&e.imageUrl)return e==null?void 0:e.imageUrl;if(e!=null&&e.imageId)return Ur.state.networkImages[e.imageId]},getConnectorImage(e){if(e!=null&&e.imageUrl)return e.imageUrl;if(e!=null&&e.imageId)return Ur.state.connectorImages[e.imageId]}};/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const qc=globalThis,xh=qc.ShadowRoot&&(qc.ShadyCSS===void 0||qc.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,_h=Symbol(),F1=new WeakMap;let Zw=class{constructor(t,n,r){if(this._$cssResult$=!0,r!==_h)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=n}get styleSheet(){let t=this.o;const n=this.t;if(xh&&t===void 0){const r=n!==void 0&&n.length===1;r&&(t=F1.get(n)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),r&&F1.set(n,t))}return t}toString(){return this.cssText}};const Bn=e=>new Zw(typeof e=="string"?e:e+"",void 0,_h),we=(e,...t)=>{const n=e.length===1?e[0]:t.reduce((r,i,o)=>r+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+e[o+1],e[0]);return new Zw(n,e,_h)},E_=(e,t)=>{if(xh)e.adoptedStyleSheets=t.map(n=>n instanceof CSSStyleSheet?n:n.styleSheet);else for(const n of t){const r=document.createElement("style"),i=qc.litNonce;i!==void 0&&r.setAttribute("nonce",i),r.textContent=n.cssText,e.appendChild(r)}},j1=xh?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let n="";for(const r of t.cssRules)n+=r.cssText;return Bn(n)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:T_,defineProperty:S_,getOwnPropertyDescriptor:A_,getOwnPropertyNames:$_,getOwnPropertySymbols:P_,getPrototypeOf:O_}=Object,Fr=globalThis,W1=Fr.trustedTypes,D_=W1?W1.emptyScript:"",vd=Fr.reactiveElementPolyfillSupport,Ws=(e,t)=>e,ul={toAttribute(e,t){switch(t){case Boolean:e=e?D_:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let n=e;switch(t){case Boolean:n=e!==null;break;case Number:n=e===null?null:Number(e);break;case Object:case Array:try{n=JSON.parse(e)}catch{n=null}}return n}},Ch=(e,t)=>!T_(e,t),H1={attribute:!0,type:String,converter:ul,reflect:!1,hasChanged:Ch};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),Fr.litPropertyMetadata??(Fr.litPropertyMetadata=new WeakMap);let ro=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,n=H1){if(n.state&&(n.attribute=!1),this._$Ei(),this.elementProperties.set(t,n),!n.noAccessor){const r=Symbol(),i=this.getPropertyDescriptor(t,r,n);i!==void 0&&S_(this.prototype,t,i)}}static getPropertyDescriptor(t,n,r){const{get:i,set:o}=A_(this.prototype,t)??{get(){return this[n]},set(s){this[n]=s}};return{get(){return i==null?void 0:i.call(this)},set(s){const a=i==null?void 0:i.call(this);o.call(this,s),this.requestUpdate(t,a,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??H1}static _$Ei(){if(this.hasOwnProperty(Ws("elementProperties")))return;const t=O_(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(Ws("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Ws("properties"))){const n=this.properties,r=[...$_(n),...P_(n)];for(const i of r)this.createProperty(i,n[i])}const t=this[Symbol.metadata];if(t!==null){const n=litPropertyMetadata.get(t);if(n!==void 0)for(const[r,i]of n)this.elementProperties.set(r,i)}this._$Eh=new Map;for(const[n,r]of this.elementProperties){const i=this._$Eu(n,r);i!==void 0&&this._$Eh.set(i,n)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const n=[];if(Array.isArray(t)){const r=new Set(t.flat(1/0).reverse());for(const i of r)n.unshift(j1(i))}else t!==void 0&&n.push(j1(t));return n}static _$Eu(t,n){const r=n.attribute;return r===!1?void 0:typeof r=="string"?r:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$Eg=new Promise(n=>this.enableUpdating=n),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(n=>n(this))}addController(t){var n;(this._$ES??(this._$ES=[])).push(t),this.renderRoot!==void 0&&this.isConnected&&((n=t.hostConnected)==null||n.call(t))}removeController(t){var n;(n=this._$ES)==null||n.splice(this._$ES.indexOf(t)>>>0,1)}_$E_(){const t=new Map,n=this.constructor.elementProperties;for(const r of n.keys())this.hasOwnProperty(r)&&(t.set(r,this[r]),delete this[r]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return E_(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)==null||t.forEach(n=>{var r;return(r=n.hostConnected)==null?void 0:r.call(n)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)==null||t.forEach(n=>{var r;return(r=n.hostDisconnected)==null?void 0:r.call(n)})}attributeChangedCallback(t,n,r){this._$AK(t,r)}_$EO(t,n){var o;const r=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,r);if(i!==void 0&&r.reflect===!0){const s=(((o=r.converter)==null?void 0:o.toAttribute)!==void 0?r.converter:ul).toAttribute(n,r.type);this._$Em=t,s==null?this.removeAttribute(i):this.setAttribute(i,s),this._$Em=null}}_$AK(t,n){var o;const r=this.constructor,i=r._$Eh.get(t);if(i!==void 0&&this._$Em!==i){const s=r.getPropertyOptions(i),a=typeof s.converter=="function"?{fromAttribute:s.converter}:((o=s.converter)==null?void 0:o.fromAttribute)!==void 0?s.converter:ul;this._$Em=i,this[i]=a.fromAttribute(n,s.type),this._$Em=null}}requestUpdate(t,n,r,i=!1,o){if(t!==void 0){if(r??(r=this.constructor.getPropertyOptions(t)),!(r.hasChanged??Ch)(i?o:this[t],n))return;this.C(t,n,r)}this.isUpdatePending===!1&&(this._$Eg=this._$EP())}C(t,n,r){this._$AL.has(t)||this._$AL.set(t,n),r.reflect===!0&&this._$Em!==t&&(this._$Ej??(this._$Ej=new Set)).add(t)}async _$EP(){this.isUpdatePending=!0;try{await this._$Eg}catch(n){Promise.reject(n)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var r;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this._$Ep){for(const[o,s]of this._$Ep)this[o]=s;this._$Ep=void 0}const i=this.constructor.elementProperties;if(i.size>0)for(const[o,s]of i)s.wrapped!==!0||this._$AL.has(o)||this[o]===void 0||this.C(o,this[o],s)}let t=!1;const n=this._$AL;try{t=this.shouldUpdate(n),t?(this.willUpdate(n),(r=this._$ES)==null||r.forEach(i=>{var o;return(o=i.hostUpdate)==null?void 0:o.call(i)}),this.update(n)):this._$ET()}catch(i){throw t=!1,this._$ET(),i}t&&this._$AE(n)}willUpdate(t){}_$AE(t){var n;(n=this._$ES)==null||n.forEach(r=>{var i;return(i=r.hostUpdated)==null?void 0:i.call(r)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$ET(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Eg}shouldUpdate(t){return!0}update(t){this._$Ej&&(this._$Ej=this._$Ej.forEach(n=>this._$EO(n,this[n]))),this._$ET()}updated(t){}firstUpdated(t){}};ro.elementStyles=[],ro.shadowRootOptions={mode:"open"},ro[Ws("elementProperties")]=new Map,ro[Ws("finalized")]=new Map,vd==null||vd({ReactiveElement:ro}),(Fr.reactiveElementVersions??(Fr.reactiveElementVersions=[])).push("2.0.0");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Hs=globalThis,dl=Hs.trustedTypes,z1=dl?dl.createPolicy("lit-html",{createHTML:e=>e}):void 0,Jw="$lit$",Ir=`lit$${(Math.random()+"").slice(9)}$`,Yw="?"+Ir,I_=`<${Yw}>`,Ii=document,Ea=()=>Ii.createComment(""),Ta=e=>e===null||typeof e!="object"&&typeof e!="function",Xw=Array.isArray,R_=e=>Xw(e)||typeof(e==null?void 0:e[Symbol.iterator])=="function",xd=`[ 	
\f\r]`,Cs=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,q1=/-->/g,V1=/>/g,ui=RegExp(`>|${xd}(?:([^\\s"'>=/]+)(${xd}*=${xd}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),G1=/'/g,K1=/"/g,Qw=/^(?:script|style|textarea|title)$/i,eb=e=>(t,...n)=>({_$litType$:e,strings:t,values:n}),k=eb(1),ge=eb(2),Ri=Symbol.for("lit-noChange"),at=Symbol.for("lit-nothing"),Z1=new WeakMap,vi=Ii.createTreeWalker(Ii,129);function tb(e,t){if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return z1!==void 0?z1.createHTML(t):t}const N_=(e,t)=>{const n=e.length-1,r=[];let i,o=t===2?"<svg>":"",s=Cs;for(let a=0;a<n;a++){const c=e[a];let u,l,d=-1,p=0;for(;p<c.length&&(s.lastIndex=p,l=s.exec(c),l!==null);)p=s.lastIndex,s===Cs?l[1]==="!--"?s=q1:l[1]!==void 0?s=V1:l[2]!==void 0?(Qw.test(l[2])&&(i=RegExp("</"+l[2],"g")),s=ui):l[3]!==void 0&&(s=ui):s===ui?l[0]===">"?(s=i??Cs,d=-1):l[1]===void 0?d=-2:(d=s.lastIndex-l[2].length,u=l[1],s=l[3]===void 0?ui:l[3]==='"'?K1:G1):s===K1||s===G1?s=ui:s===q1||s===V1?s=Cs:(s=ui,i=void 0);const g=s===ui&&e[a+1].startsWith("/>")?" ":"";o+=s===Cs?c+I_:d>=0?(r.push(u),c.slice(0,d)+Jw+c.slice(d)+Ir+g):c+Ir+(d===-2?a:g)}return[tb(e,o+(e[n]||"<?>")+(t===2?"</svg>":"")),r]};let If=class nb{constructor({strings:t,_$litType$:n},r){let i;this.parts=[];let o=0,s=0;const a=t.length-1,c=this.parts,[u,l]=N_(t,n);if(this.el=nb.createElement(u,r),vi.currentNode=this.el.content,n===2){const d=this.el.content.firstChild;d.replaceWith(...d.childNodes)}for(;(i=vi.nextNode())!==null&&c.length<a;){if(i.nodeType===1){if(i.hasAttributes())for(const d of i.getAttributeNames())if(d.endsWith(Jw)){const p=l[s++],g=i.getAttribute(d).split(Ir),w=/([.?@])?(.*)/.exec(p);c.push({type:1,index:o,name:w[2],strings:g,ctor:w[1]==="."?M_:w[1]==="?"?B_:w[1]==="@"?L_:vu}),i.removeAttribute(d)}else d.startsWith(Ir)&&(c.push({type:6,index:o}),i.removeAttribute(d));if(Qw.test(i.tagName)){const d=i.textContent.split(Ir),p=d.length-1;if(p>0){i.textContent=dl?dl.emptyScript:"";for(let g=0;g<p;g++)i.append(d[g],Ea()),vi.nextNode(),c.push({type:2,index:++o});i.append(d[p],Ea())}}}else if(i.nodeType===8)if(i.data===Yw)c.push({type:2,index:o});else{let d=-1;for(;(d=i.data.indexOf(Ir,d+1))!==-1;)c.push({type:7,index:o}),d+=Ir.length-1}o++}}static createElement(t,n){const r=Ii.createElement("template");return r.innerHTML=t,r}};function Io(e,t,n=e,r){var s,a;if(t===Ri)return t;let i=r!==void 0?(s=n._$Co)==null?void 0:s[r]:n._$Cl;const o=Ta(t)?void 0:t._$litDirective$;return(i==null?void 0:i.constructor)!==o&&((a=i==null?void 0:i._$AO)==null||a.call(i,!1),o===void 0?i=void 0:(i=new o(e),i._$AT(e,n,r)),r!==void 0?(n._$Co??(n._$Co=[]))[r]=i:n._$Cl=i),i!==void 0&&(t=Io(e,i._$AS(e,t.values),i,r)),t}let k_=class{constructor(t,n){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=n}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:n},parts:r}=this._$AD,i=((t==null?void 0:t.creationScope)??Ii).importNode(n,!0);vi.currentNode=i;let o=vi.nextNode(),s=0,a=0,c=r[0];for(;c!==void 0;){if(s===c.index){let u;c.type===2?u=new Eh(o,o.nextSibling,this,t):c.type===1?u=new c.ctor(o,c.name,c.strings,this,t):c.type===6&&(u=new U_(o,this,t)),this._$AV.push(u),c=r[++a]}s!==(c==null?void 0:c.index)&&(o=vi.nextNode(),s++)}return vi.currentNode=Ii,i}p(t){let n=0;for(const r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(t,r,n),n+=r.strings.length-2):r._$AI(t[n])),n++}},Eh=class rb{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,n,r,i){this.type=2,this._$AH=at,this._$AN=void 0,this._$AA=t,this._$AB=n,this._$AM=r,this.options=i,this._$Cv=(i==null?void 0:i.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const n=this._$AM;return n!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=n.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,n=this){t=Io(this,t,n),Ta(t)?t===at||t==null||t===""?(this._$AH!==at&&this._$AR(),this._$AH=at):t!==this._$AH&&t!==Ri&&this._(t):t._$litType$!==void 0?this.g(t):t.nodeType!==void 0?this.$(t):R_(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==at&&Ta(this._$AH)?this._$AA.nextSibling.data=t:this.$(Ii.createTextNode(t)),this._$AH=t}g(t){var o;const{values:n,_$litType$:r}=t,i=typeof r=="number"?this._$AC(t):(r.el===void 0&&(r.el=If.createElement(tb(r.h,r.h[0]),this.options)),r);if(((o=this._$AH)==null?void 0:o._$AD)===i)this._$AH.p(n);else{const s=new k_(i,this),a=s.u(this.options);s.p(n),this.$(a),this._$AH=s}}_$AC(t){let n=Z1.get(t.strings);return n===void 0&&Z1.set(t.strings,n=new If(t)),n}T(t){Xw(this._$AH)||(this._$AH=[],this._$AR());const n=this._$AH;let r,i=0;for(const o of t)i===n.length?n.push(r=new rb(this.k(Ea()),this.k(Ea()),this,this.options)):r=n[i],r._$AI(o),i++;i<n.length&&(this._$AR(r&&r._$AB.nextSibling,i),n.length=i)}_$AR(t=this._$AA.nextSibling,n){var r;for((r=this._$AP)==null?void 0:r.call(this,!1,!0,n);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i}}setConnected(t){var n;this._$AM===void 0&&(this._$Cv=t,(n=this._$AP)==null||n.call(this,t))}},vu=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,n,r,i,o){this.type=1,this._$AH=at,this._$AN=void 0,this.element=t,this.name=n,this._$AM=i,this.options=o,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=at}_$AI(t,n=this,r,i){const o=this.strings;let s=!1;if(o===void 0)t=Io(this,t,n,0),s=!Ta(t)||t!==this._$AH&&t!==Ri,s&&(this._$AH=t);else{const a=t;let c,u;for(t=o[0],c=0;c<o.length-1;c++)u=Io(this,a[r+c],n,c),u===Ri&&(u=this._$AH[c]),s||(s=!Ta(u)||u!==this._$AH[c]),u===at?t=at:t!==at&&(t+=(u??"")+o[c+1]),this._$AH[c]=u}s&&!i&&this.j(t)}j(t){t===at?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}};class M_ extends vu{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===at?void 0:t}}let B_=class extends vu{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==at)}};class L_ extends vu{constructor(t,n,r,i,o){super(t,n,r,i,o),this.type=5}_$AI(t,n=this){if((t=Io(this,t,n,0)??at)===Ri)return;const r=this._$AH,i=t===at&&r!==at||t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive,o=t!==at&&(r===at||i);i&&this.element.removeEventListener(this.name,this,r),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var n;typeof this._$AH=="function"?this._$AH.call(((n=this.options)==null?void 0:n.host)??this.element,t):this._$AH.handleEvent(t)}}let U_=class{constructor(t,n,r){this.element=t,this.type=6,this._$AN=void 0,this._$AM=n,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(t){Io(this,t)}};const _d=Hs.litHtmlPolyfillSupport;_d==null||_d(If,Eh),(Hs.litHtmlVersions??(Hs.litHtmlVersions=[])).push("3.0.0");const F_=(e,t,n)=>{const r=(n==null?void 0:n.renderBefore)??t;let i=r._$litPart$;if(i===void 0){const o=(n==null?void 0:n.renderBefore)??null;r._$litPart$=i=new Eh(t.insertBefore(Ea(),o),o,void 0,n??{})}return i._$AI(e),i};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let de=class extends ro{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var n;const t=super.createRenderRoot();return(n=this.renderOptions).renderBefore??(n.renderBefore=t.firstChild),t}update(t){const n=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=F_(n,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return Ri}};var _g;de._$litElement$=!0,de.finalized=!0,(_g=globalThis.litElementHydrateSupport)==null||_g.call(globalThis,{LitElement:de});const Cd=globalThis.litElementPolyfillSupport;Cd==null||Cd({LitElement:de});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.0");let zs,jr,Wr;function j_(e,t){zs=document.createElement("style"),jr=document.createElement("style"),Wr=document.createElement("style"),zs.textContent=_o(e).core.cssText,jr.textContent=_o(e).dark.cssText,Wr.textContent=_o(e).light.cssText,document.head.appendChild(zs),document.head.appendChild(jr),document.head.appendChild(Wr),ib(t)}function ib(e){jr&&Wr&&(e==="light"?(jr.removeAttribute("media"),Wr.media="enabled"):(Wr.removeAttribute("media"),jr.media="enabled"))}function W_(e){zs&&jr&&Wr&&(zs.textContent=_o(e).core.cssText,jr.textContent=_o(e).dark.cssText,Wr.textContent=_o(e).light.cssText)}function _o(e){return{core:we`
      :root {
        --w3m-color-mix-strength: ${Bn(e!=null&&e["--w3m-color-mix-strength"]?`${e["--w3m-color-mix-strength"]}%`:"0%")};
        --w3m-font-family: ${Bn((e==null?void 0:e["--w3m-font-family"])||"-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif")};
        --w3m-font-size-master: ${Bn((e==null?void 0:e["--w3m-font-size-master"])||"10px")};
        --w3m-border-radius-master: ${Bn((e==null?void 0:e["--w3m-border-radius-master"])||"4px")};
        --w3m-z-index: ${Bn((e==null?void 0:e["--w3m-z-index"])||100)};

        --wui-font-family: var(--w3m-font-family);

        --wui-font-size-micro: var(--w3m-font-size-master);
        --wui-font-size-tiny: calc(var(--w3m-font-size-master) * 1.2);
        --wui-font-size-small: calc(var(--w3m-font-size-master) * 1.4);
        --wui-font-size-paragraph: calc(var(--w3m-font-size-master) * 1.6);
        --wui-font-size-large: calc(var(--w3m-font-size-master) * 2);

        --wui-border-radius-5xs: var(--w3m-border-radius-master);
        --wui-border-radius-4xs: calc(var(--w3m-border-radius-master) * 1.5);
        --wui-border-radius-3xs: calc(var(--w3m-border-radius-master) * 2);
        --wui-border-radius-xxs: calc(var(--w3m-border-radius-master) * 3);
        --wui-border-radius-xs: calc(var(--w3m-border-radius-master) * 4);
        --wui-border-radius-s: calc(var(--w3m-border-radius-master) * 5);
        --wui-border-radius-m: calc(var(--w3m-border-radius-master) * 7);
        --wui-border-radius-l: calc(var(--w3m-border-radius-master) * 9);
        --wui-border-radius-3xl: calc(var(--w3m-border-radius-master) * 20);

        --wui-font-weight-regular: 500;
        --wui-font-weight-medium: 600;
        --wui-font-weight-bold: 700;

        --wui-letter-spacing-large: -0.8px;
        --wui-letter-spacing-paragraph: -0.64px;
        --wui-letter-spacing-small: -0.56px;
        --wui-letter-spacing-tiny: -0.48px;
        --wui-letter-spacing-micro: -0.2px;

        --wui-spacing-0: 0px;
        --wui-spacing-4xs: 2px;
        --wui-spacing-3xs: 4px;
        --wui-spacing-xxs: 6px;
        --wui-spacing-2xs: 7px;
        --wui-spacing-xs: 8px;
        --wui-spacing-1xs: 10px;
        --wui-spacing-s: 12px;
        --wui-spacing-m: 14px;
        --wui-spacing-l: 16px;
        --wui-spacing-2l: 18px;
        --wui-spacing-xl: 20px;
        --wui-spacing-xxl: 24px;
        --wui-spacing-3xl: 40px;

        --wui-icon-box-size-xs: 20px;
        --wui-icon-box-size-sm: 24px;
        --wui-icon-box-size-md: 32px;
        --wui-icon-box-size-lg: 40px;

        --wui-icon-size-inherit: inherit;
        --wui-icon-size-xxs: 10px;
        --wui-icon-size-xs: 12px;
        --wui-icon-size-sm: 14px;
        --wui-icon-size-md: 16px;
        --wui-icon-size-mdl: 18px;
        --wui-icon-size-lg: 20px;

        --wui-wallet-image-size-inherit: inherit;
        --wui-wallet-image-size-sm: 40px;
        --wui-wallet-image-size-md: 56px;
        --wui-wallet-image-size-lg: 80px;

        --wui-box-size-md: 100px;
        --wui-box-size-lg: 120px;

        --wui-ease-out-power-2: cubic-bezier(0, 0, 0.22, 1);
        --wui-ease-out-power-1: cubic-bezier(0, 0, 0.55, 1);

        --wui-ease-in-power-3: cubic-bezier(0.66, 0, 1, 1);
        --wui-ease-in-power-2: cubic-bezier(0.45, 0, 1, 1);
        --wui-ease-in-power-1: cubic-bezier(0.3, 0, 1, 1);

        --wui-ease-inout-power-1: cubic-bezier(0.45, 0, 0.55, 1);

        --wui-duration-lg: 200ms;
        --wui-duration-md: 125ms;
        --wui-duration-sm: 75ms;

        --wui-path-network: path(
          'M43.4605 10.7248L28.0485 1.61089C25.5438 0.129705 22.4562 0.129705 19.9515 1.61088L4.53951 10.7248C2.03626 12.2051 0.5 14.9365 0.5 17.886V36.1139C0.5 39.0635 2.03626 41.7949 4.53951 43.2752L19.9515 52.3891C22.4562 53.8703 25.5438 53.8703 28.0485 52.3891L43.4605 43.2752C45.9637 41.7949 47.5 39.0635 47.5 36.114V17.8861C47.5 14.9365 45.9637 12.2051 43.4605 10.7248Z'
        );

        --wui-path-network-lg: path(
          'M78.3244 18.926L50.1808 2.45078C45.7376 -0.150261 40.2624 -0.150262 35.8192 2.45078L7.6756 18.926C3.23322 21.5266 0.5 26.3301 0.5 31.5248V64.4752C0.5 69.6699 3.23322 74.4734 7.6756 77.074L35.8192 93.5492C40.2624 96.1503 45.7376 96.1503 50.1808 93.5492L78.3244 77.074C82.7668 74.4734 85.5 69.6699 85.5 64.4752V31.5248C85.5 26.3301 82.7668 21.5266 78.3244 18.926Z'
        );

        --wui-color-inherit: inherit;

        --wui-color-inverse-100: #fff;
        --wui-color-inverse-000: #000;

        --wui-cover: rgba(0, 0, 0, 0.3);

        --wui-color-blue-100: var(--wui-color-blue-base-100);
        --wui-color-blue-015: var(--wui-color-accent-base-015);

        --wui-color-accent-100: var(--wui-color-accent-base-100);
        --wui-color-accent-090: var(--wui-color-accent-base-090);
        --wui-color-accent-080: var(--wui-color-accent-base-080);

        --wui-accent-glass-090: var(--wui-accent-glass-base-090);
        --wui-accent-glass-080: var(--wui-accent-glass-base-080);
        --wui-accent-glass-020: var(--wui-accent-glass-base-020);
        --wui-accent-glass-015: var(--wui-accent-glass-base-015);
        --wui-accent-glass-010: var(--wui-accent-glass-base-010);
        --wui-accent-glass-005: var(--wui-accent-glass-base-005);
        --wui-accent-glass-002: var(--wui-accent-glass-base-002);

        --wui-color-fg-100: var(--wui-color-fg-base-100);
        --wui-color-fg-125: var(--wui-color-fg-base-125);
        --wui-color-fg-150: var(--wui-color-fg-base-150);
        --wui-color-fg-175: var(--wui-color-fg-base-175);
        --wui-color-fg-200: var(--wui-color-fg-base-200);
        --wui-color-fg-225: var(--wui-color-fg-base-225);
        --wui-color-fg-250: var(--wui-color-fg-base-250);
        --wui-color-fg-275: var(--wui-color-fg-base-275);
        --wui-color-fg-300: var(--wui-color-fg-base-300);

        --wui-color-bg-100: var(--wui-color-bg-base-100);
        --wui-color-bg-125: var(--wui-color-bg-base-125);
        --wui-color-bg-150: var(--wui-color-bg-base-150);
        --wui-color-bg-175: var(--wui-color-bg-base-175);
        --wui-color-bg-200: var(--wui-color-bg-base-200);
        --wui-color-bg-225: var(--wui-color-bg-base-225);
        --wui-color-bg-250: var(--wui-color-bg-base-250);
        --wui-color-bg-275: var(--wui-color-bg-base-275);
        --wui-color-bg-300: var(--wui-color-bg-base-300);

        --wui-color-success-100: var(--wui-color-success-base-100);
        --wui-color-error-100: var(--wui-color-error-base-100);

        --wui-icon-box-bg-error-100: var(--wui-icon-box-bg-error-base-100);
        --wui-icon-box-bg-blue-100: var(--wui-icon-box-bg-blue-base-100);
        --wui-icon-box-bg-success-100: var(--wui-icon-box-bg-success-base-100);
        --wui-icon-box-bg-inverse-100: var(--wui-icon-box-bg-inverse-base-100);

        --wui-all-wallets-bg-100: var(--wui-all-wallets-bg-base-100);

        --wui-avatar-border: var(--wui-avatar-border-base);

        --wui-box-shadow-blue: rgba(71, 161, 255, 0.16);
      }

      @supports (background: color-mix(in srgb, white 50%, black)) {
        :root {
          --wui-box-shadow-blue: color-mix(in srgb, var(--wui-color-accent-100) 16%, transparent);

          --wui-color-accent-090: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 90%,
            var(--w3m-default)
          );
          --wui-color-accent-080: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 80%,
            var(--w3m-default)
          );

          --wui-color-accent-090: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 90%,
            transparent
          );
          --wui-color-accent-080: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 80%,
            transparent
          );

          --wui-accent-glass-090: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 90%,
            transparent
          );
          --wui-accent-glass-080: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 80%,
            transparent
          );
          --wui-accent-glass-020: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 20%,
            transparent
          );
          --wui-accent-glass-015: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 15%,
            transparent
          );
          --wui-accent-glass-010: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 10%,
            transparent
          );
          --wui-accent-glass-005: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 5%,
            transparent
          );
          --wui-color-accent-002: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 2%,
            transparent
          );

          --wui-color-fg-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-100)
          );
          --wui-color-fg-125: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-125)
          );
          --wui-color-fg-150: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-150)
          );
          --wui-color-fg-175: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-175)
          );
          --wui-color-fg-200: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-200)
          );
          --wui-color-fg-225: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-225)
          );
          --wui-color-fg-250: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-250)
          );
          --wui-color-fg-275: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-275)
          );
          --wui-color-fg-300: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-300)
          );

          --wui-color-bg-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-100)
          );
          --wui-color-bg-125: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-125)
          );
          --wui-color-bg-150: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-150)
          );
          --wui-color-bg-175: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-175)
          );
          --wui-color-bg-200: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-200)
          );
          --wui-color-bg-225: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-225)
          );
          --wui-color-bg-250: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-250)
          );
          --wui-color-bg-275: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-275)
          );
          --wui-color-bg-300: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-300)
          );

          --wui-color-success-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-success-base-100)
          );
          --wui-color-error-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-error-base-100)
          );

          --wui-icon-box-bg-error-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-error-base-100)
          );
          --wui-icon-box-bg-accent-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-blue-base-100)
          );
          --wui-icon-box-bg-success-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-success-base-100)
          );
          --wui-icon-box-bg-inverse-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-inverse-base-100)
          );

          --wui-all-wallets-bg-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-all-wallets-bg-base-100)
          );

          --wui-avatar-border: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-avatar-border-base)
          );
        }
      }
    `,light:we`
      :root {
        --w3m-color-mix: ${Bn((e==null?void 0:e["--w3m-color-mix"])||"#fff")};
        --w3m-accent: ${Bn((e==null?void 0:e["--w3m-accent"])||"#47a1ff")};
        --w3m-default: #fff;

        --wui-color-blue-base-100: #47a1ff;

        --wui-color-accent-base-100: var(--w3m-accent);
        --wui-color-accent-base-090: #59aaff;
        --wui-color-accent-base-080: #6cb4ff;

        --wui-accent-glass-base-090: rgba(71, 161, 255, 0.9);
        --wui-accent-glass-base-080: rgba(71, 161, 255, 0.8);
        --wui-accent-glass-base-020: rgba(71, 161, 255, 0.2);
        --wui-accent-glass-base-015: rgba(71, 161, 255, 0.15);
        --wui-accent-glass-base-010: rgba(71, 161, 255, 0.1);
        --wui-accent-glass-base-005: rgba(71, 161, 255, 0.05);
        --wui-accent-glass-base-002: rgba(71, 161, 255, 0.02);

        --wui-color-fg-base-100: #e4e7e7;
        --wui-color-fg-base-125: #d0d5d5;
        --wui-color-fg-base-150: #a8b1b1;
        --wui-color-fg-base-175: #a8b0b0;
        --wui-color-fg-base-200: #949e9e;
        --wui-color-fg-base-225: #868f8f;
        --wui-color-fg-base-250: #788080;
        --wui-color-fg-base-275: #788181;
        --wui-color-fg-base-300: #6e7777;

        --wui-color-bg-base-100: #141414;
        --wui-color-bg-base-125: #191a1a;
        --wui-color-bg-base-150: #1e1f1f;
        --wui-color-bg-base-175: #222525;
        --wui-color-bg-base-200: #272a2a;
        --wui-color-bg-base-225: #2c3030;
        --wui-color-bg-base-250: #313535;
        --wui-color-bg-base-275: #363b3b;
        --wui-color-bg-base-300: #3b4040;

        --wui-color-success-base-100: #26d962;
        --wui-color-error-base-100: #f25a67;

        --wui-icon-box-bg-error-base-100: #3c2426;
        --wui-icon-box-bg-blue-base-100: #20303f;
        --wui-icon-box-bg-success-base-100: #1f3a28;
        --wui-icon-box-bg-inverse-base-100: #243240;

        --wui-all-wallets-bg-base-100: #222b35;

        --wui-avatar-border-base: #252525;

        --wui-gray-glass-001: rgba(255, 255, 255, 0.01);
        --wui-gray-glass-002: rgba(255, 255, 255, 0.02);
        --wui-gray-glass-005: rgba(255, 255, 255, 0.05);
        --wui-gray-glass-010: rgba(255, 255, 255, 0.1);
        --wui-gray-glass-015: rgba(255, 255, 255, 0.15);
        --wui-gray-glass-020: rgba(255, 255, 255, 0.2);
        --wui-gray-glass-025: rgba(255, 255, 255, 0.25);
        --wui-gray-glass-030: rgba(255, 255, 255, 0.3);
        --wui-gray-glass-060: rgba(255, 255, 255, 0.6);
        --wui-gray-glass-080: rgba(255, 255, 255, 0.8);
      }
    `,dark:we`
      :root {
        --w3m-color-mix: ${Bn((e==null?void 0:e["--w3m-color-mix"])||"#000")};
        --w3m-accent: ${Bn((e==null?void 0:e["--w3m-accent"])||"#3396ff")};
        --w3m-default: #000;

        --wui-color-blue-base-100: #3396ff;

        --wui-color-accent-base-100: var(--w3m-accent);
        --wui-color-accent-base-090: #2d7dd2;
        --wui-color-accent-base-080: #2978cc;

        --wui-accent-glass-base-090: rgba(51, 150, 255, 0.9);
        --wui-accent-glass-base-080: rgba(51, 150, 255, 0.8);
        --wui-accent-glass-base-020: rgba(51, 150, 255, 0.2);
        --wui-accent-glass-base-015: rgba(51, 150, 255, 0.15);
        --wui-accent-glass-base-010: rgba(51, 150, 255, 0.1);
        --wui-accent-glass-base-005: rgba(51, 150, 255, 0.05);
        --wui-accent-glass-base-002: rgba(51, 150, 255, 0.02);

        --wui-color-fg-base-100: #141414;
        --wui-color-fg-base-125: #2d3131;
        --wui-color-fg-base-150: #474d4d;
        --wui-color-fg-base-175: #636d6d;
        --wui-color-fg-base-200: #798686;
        --wui-color-fg-base-225: #828f8f;
        --wui-color-fg-base-250: #8b9797;
        --wui-color-fg-base-275: #95a0a0;
        --wui-color-fg-base-300: #9ea9a9;

        --wui-color-bg-base-100: #ffffff;
        --wui-color-bg-base-125: #f5fafa;
        --wui-color-bg-base-150: #f3f8f8;
        --wui-color-bg-base-175: #eef4f4;
        --wui-color-bg-base-200: #eaf1f1;
        --wui-color-bg-base-225: #e5eded;
        --wui-color-bg-base-250: #e1e9e9;
        --wui-color-bg-base-275: #dce7e7;
        --wui-color-bg-base-300: #d8e3e3;

        --wui-color-success-base-100: #26b562;
        --wui-color-error-base-100: #f05142;

        --wui-icon-box-bg-error-base-100: #f4dfdd;
        --wui-icon-box-bg-blue-base-100: #d9ecfb;
        --wui-icon-box-bg-success-base-100: #daf0e4;
        --wui-icon-box-bg-inverse-base-100: #dcecfc;

        --wui-all-wallets-bg-base-100: #e8f1fa;

        --wui-avatar-border-base: #f3f4f4;

        --wui-gray-glass-001: rgba(0, 0, 0, 0.01);
        --wui-gray-glass-002: rgba(0, 0, 0, 0.02);
        --wui-gray-glass-005: rgba(0, 0, 0, 0.05);
        --wui-gray-glass-010: rgba(0, 0, 0, 0.1);
        --wui-gray-glass-015: rgba(0, 0, 0, 0.15);
        --wui-gray-glass-020: rgba(0, 0, 0, 0.2);
        --wui-gray-glass-025: rgba(0, 0, 0, 0.25);
        --wui-gray-glass-030: rgba(0, 0, 0, 0.3);
        --wui-gray-glass-060: rgba(0, 0, 0, 0.6);
        --wui-gray-glass-080: rgba(0, 0, 0, 0.8);
      }
    `}}const De=we`
  *,
  *::after,
  *::before,
  :host {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-style: normal;
    text-rendering: optimizeSpeed;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: transparent;
    font-family: var(--wui-font-family);
    backface-visibility: hidden;
  }
`,dt=we`
  button,
  a {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    transition: all var(--wui-ease-out-power-1) var(--wui-duration-lg);
    outline: none;
    border: 1px solid transparent;
    column-gap: var(--wui-spacing-3xs);
    background-color: transparent;
    text-decoration: none;
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-gray-glass-005);
    }

    button:active:enabled {
      transition: all var(--wui-ease-out-power-2) var(--wui-duration-sm);
      background-color: var(--wui-gray-glass-010);
    }

    button[data-variant='fill']:hover:enabled {
      background-color: var(--wui-color-accent-090);
    }
  }

  button:disabled {
    cursor: not-allowed;
    background-color: var(--wui-gray-glass-005);
  }

  button[data-variant='shade']:disabled,
  button[data-variant='accent']:disabled {
    background-color: var(--wui-gray-glass-010);
    color: var(--wui-gray-glass-015);
    filter: grayscale(1);
  }

  button:disabled > wui-wallet-image,
  button:disabled > wui-all-wallets-image,
  button:disabled > wui-network-image,
  button:disabled > wui-image,
  button:disabled > wui-icon-box,
  button:disabled > wui-transaction-visual,
  button:disabled > wui-logo {
    filter: grayscale(1);
  }

  button:focus-visible,
  a:focus-visible {
    border: 1px solid var(--wui-color-accent-100);
    background-color: var(--wui-gray-glass-005);
    -webkit-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  button[data-variant='fill']:focus-visible {
    background-color: var(--wui-color-accent-090);
  }

  button[data-variant='fill'] {
    color: var(--wui-color-inverse-100);
    background-color: var(--wui-color-accent-100);
  }

  button[data-variant='fill']:disabled {
    color: var(--wui-gray-glass-015);
    background-color: var(--wui-gray-glass-015);
  }

  button[data-variant='fill']:disabled > wui-icon {
    color: var(--wui-gray-glass-015);
  }

  button[data-variant='shade'] {
    color: var(--wui-color-fg-200);
  }

  button[data-variant='accent'] {
    color: var(--wui-color-accent-100);
  }

  button[data-variant='fullWidth'] {
    width: 100%;
    border-radius: var(--wui-border-radius-xs);
    height: 56px;
    border: none;
    background-color: var(--wui-gray-glass-002);
    color: var(--wui-color-fg-200);
    gap: var(--wui-spacing-xs);
  }

  button:active:enabled {
    background-color: var(--wui-gray-glass-010);
  }

  button[data-variant='fill']:active:enabled {
    background-color: var(--wui-color-accent-080);
    border: 1px solid var(--wui-gray-glass-010);
  }

  input {
    border: none;
    outline: none;
    appearance: none;
  }
`,Th=we`
  .wui-color-inherit {
    color: var(--wui-color-inherit);
  }

  .wui-color-accent-100 {
    color: var(--wui-color-accent-100);
  }

  .wui-color-error-100 {
    color: var(--wui-color-error-100);
  }

  .wui-color-success-100 {
    color: var(--wui-color-success-100);
  }

  .wui-color-inverse-100 {
    color: var(--wui-color-inverse-100);
  }

  .wui-color-inverse-000 {
    color: var(--wui-color-inverse-000);
  }

  .wui-color-fg-100 {
    color: var(--wui-color-fg-100);
  }

  .wui-color-fg-200 {
    color: var(--wui-color-fg-200);
  }

  .wui-color-fg-300 {
    color: var(--wui-color-fg-300);
  }

  .wui-bg-color-inherit {
    background-color: var(--wui-color-inherit);
  }

  .wui-bg-color-blue-100 {
    background-color: var(--wui-color-accent-100);
  }

  .wui-bg-color-error-100 {
    background-color: var(--wui-color-error-100);
  }

  .wui-bg-color-success-100 {
    background-color: var(--wui-color-success-100);
  }

  .wui-bg-color-inverse-100 {
    background-color: var(--wui-color-inverse-100);
  }

  .wui-bg-color-inverse-000 {
    background-color: var(--wui-color-inverse-000);
  }

  .wui-bg-color-fg-100 {
    background-color: var(--wui-color-fg-100);
  }

  .wui-bg-color-fg-200 {
    background-color: var(--wui-color-fg-200);
  }

  .wui-bg-color-fg-300 {
    background-color: var(--wui-color-fg-300);
  }
`;function H_(e,t){const{kind:n,elements:r}=t;return{kind:n,elements:r,finisher(i){customElements.get(e)||customElements.define(e,i)}}}function z_(e,t){return customElements.get(e)||customElements.define(e,t),t}function ue(e){return function(n){return typeof n=="function"?z_(e,n):H_(e,n)}}const q_=we`
  :host {
    display: block;
    border-radius: clamp(0px, var(--wui-border-radius-l), 44px);
    border: 1px solid var(--wui-gray-glass-005);
    background-color: var(--wui-color-bg-125);
    overflow: hidden;
  }
`;var V_=globalThis&&globalThis.__decorate||function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};let Rf=class extends de{render(){return k`<slot></slot>`}};Rf.styles=[De,q_];Rf=V_([ue("wui-card")],Rf);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const G_={attribute:!0,type:String,converter:ul,reflect:!1,hasChanged:Ch},K_=(e=G_,t,n)=>{const{kind:r,metadata:i}=n;let o=globalThis.litPropertyMetadata.get(i);if(o===void 0&&globalThis.litPropertyMetadata.set(i,o=new Map),o.set(n.name,e),r==="accessor"){const{name:s}=n;return{set(a){const c=t.get.call(this);t.set.call(this,a),this.requestUpdate(s,c,e)},init(a){return a!==void 0&&this.C(s,void 0,e),a}}}if(r==="setter"){const{name:s}=n;return function(a){const c=this[s];t.call(this,a),this.requestUpdate(s,c,e)}}throw Error("Unsupported decorator location: "+r)};function M(e){return(t,n)=>typeof n=="object"?K_(e,t,n):((r,i,o)=>{const s=i.hasOwnProperty(o);return i.constructor.createProperty(o,s?{...r,wrapped:!0}:r),s?Object.getOwnPropertyDescriptor(i,o):void 0})(e,t,n)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function $e(e){return M({...e,state:!0,attribute:!1})}const Z_=we`
  :host {
    display: flex;
    aspect-ratio: 1 / 1;
    color: var(--local-color);
    width: var(--local-width);
  }

  svg {
    width: inherit;
    height: inherit;
    object-fit: contain;
    object-position: center;
  }
`,J_=ge`<svg fill="none" viewBox="0 0 24 24">
  <path
    style="fill: var(--wui-color-accent-100);"
    d="M10.2 6.6a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0ZM21 6.6a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0ZM10.2 17.4a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0ZM21 17.4a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0Z"
  />
</svg>`,Y_=ge`
<svg width="36" height="36">
  <path
    d="M28.724 0H7.271A7.269 7.269 0 0 0 0 7.272v21.46A7.268 7.268 0 0 0 7.271 36H28.73A7.272 7.272 0 0 0 36 28.728V7.272A7.275 7.275 0 0 0 28.724 0Z"
    fill="url(#a)"
  />
  <path
    d="m17.845 8.271.729-1.26a1.64 1.64 0 1 1 2.843 1.638l-7.023 12.159h5.08c1.646 0 2.569 1.935 1.853 3.276H6.434a1.632 1.632 0 0 1-1.638-1.638c0-.909.73-1.638 1.638-1.638h4.176l5.345-9.265-1.67-2.898a1.642 1.642 0 0 1 2.844-1.638l.716 1.264Zm-6.317 17.5-1.575 2.732a1.64 1.64 0 1 1-2.844-1.638l1.17-2.025c1.323-.41 2.398-.095 3.249.931Zm13.56-4.954h4.262c.909 0 1.638.729 1.638 1.638 0 .909-.73 1.638-1.638 1.638h-2.367l1.597 2.772c.45.788.185 1.782-.602 2.241a1.642 1.642 0 0 1-2.241-.603c-2.69-4.666-4.711-8.159-6.052-10.485-1.372-2.367-.391-4.743.576-5.549 1.075 1.846 2.682 4.631 4.828 8.348Z"
    fill="#fff"
  />
  <defs>
    <linearGradient id="a" x1="18" y1="0" x2="18" y2="36" gradientUnits="userSpaceOnUse">
      <stop stop-color="#18BFFB" />
      <stop offset="1" stop-color="#2072F3" />
    </linearGradient>
  </defs>
</svg>`,X_=ge`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#000" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M28.77 23.3c-.69 1.99-2.75 5.52-4.87 5.56-1.4.03-1.86-.84-3.46-.84-1.61 0-2.12.81-3.45.86-2.25.1-5.72-5.1-5.72-9.62 0-4.15 2.9-6.2 5.42-6.25 1.36-.02 2.64.92 3.47.92.83 0 2.38-1.13 4.02-.97.68.03 2.6.28 3.84 2.08-3.27 2.14-2.76 6.61.75 8.25ZM24.2 7.88c-2.47.1-4.49 2.69-4.2 4.84 2.28.17 4.47-2.39 4.2-4.84Z"
        />
      </g>
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,Q_=ge`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M7 1.99a1 1 0 0 1 1 1v7.58l2.46-2.46a1 1 0 0 1 1.41 1.42L7.7 13.69a1 1 0 0 1-1.41 0L2.12 9.53A1 1 0 0 1 3.54 8.1L6 10.57V3a1 1 0 0 1 1-1Z"
    clip-rule="evenodd"
  />
</svg>`,eC=ge`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M13 7.99a1 1 0 0 1-1 1H4.4l2.46 2.46a1 1 0 1 1-1.41 1.41L1.29 8.7a1 1 0 0 1 0-1.41L5.46 3.1a1 1 0 0 1 1.41 1.42L4.41 6.99H12a1 1 0 0 1 1 1Z"
    clip-rule="evenodd"
  />
</svg>`,tC=ge`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M1 7.99a1 1 0 0 1 1-1h7.58L7.12 4.53A1 1 0 1 1 8.54 3.1l4.16 4.17a1 1 0 0 1 0 1.41l-4.16 4.17a1 1 0 1 1-1.42-1.41l2.46-2.46H2a1 1 0 0 1-1-1Z"
    clip-rule="evenodd"
  />
</svg>`,nC=ge`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M7 13.99a1 1 0 0 1-1-1V5.4L3.54 7.86a1 1 0 0 1-1.42-1.41L6.3 2.28a1 1 0 0 1 1.41 0l4.17 4.17a1 1 0 1 1-1.41 1.41L8 5.4v7.59a1 1 0 0 1-1 1Z"
    clip-rule="evenodd"
  />
</svg>`,rC=ge`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M4 6.4a1 1 0 0 1-.46.89 6.98 6.98 0 0 0 .38 6.18A7 7 0 0 0 16.46 7.3a1 1 0 0 1-.47-.92 7 7 0 0 0-12 .03Zm-2.02-.5a9 9 0 1 1 16.03 8.2A9 9 0 0 1 1.98 5.9Z"
    clip-rule="evenodd"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M6.03 8.63c-1.46-.3-2.72-.75-3.6-1.35l-.02-.01-.14-.11a1 1 0 0 1 1.2-1.6l.1.08c.6.4 1.52.74 2.69 1 .16-.99.39-1.88.67-2.65.3-.79.68-1.5 1.15-2.02A2.58 2.58 0 0 1 9.99 1c.8 0 1.45.44 1.92.97.47.52.84 1.23 1.14 2.02.29.77.52 1.66.68 2.64a8 8 0 0 0 2.7-1l.26-.18h.48a1 1 0 0 1 .12 2c-.86.51-2.01.91-3.34 1.18a22.24 22.24 0 0 1-.03 3.19c1.45.29 2.7.73 3.58 1.31a1 1 0 0 1-1.1 1.68c-.6-.4-1.56-.76-2.75-1-.15.8-.36 1.55-.6 2.2-.3.79-.67 1.5-1.14 2.02-.47.53-1.12.97-1.92.97-.8 0-1.45-.44-1.91-.97a6.51 6.51 0 0 1-1.15-2.02c-.24-.65-.44-1.4-.6-2.2-1.18.24-2.13.6-2.73.99a1 1 0 1 1-1.1-1.67c.88-.58 2.12-1.03 3.57-1.31a22.03 22.03 0 0 1-.04-3.2Zm2.2-1.7c.15-.86.34-1.61.58-2.24.24-.65.51-1.12.76-1.4.25-.28.4-.29.42-.29.03 0 .17.01.42.3.25.27.52.74.77 1.4.23.62.43 1.37.57 2.22a19.96 19.96 0 0 1-3.52 0Zm-.18 4.6a20.1 20.1 0 0 1-.03-2.62 21.95 21.95 0 0 0 3.94 0 20.4 20.4 0 0 1-.03 2.63 21.97 21.97 0 0 0-3.88 0Zm.27 2c.13.66.3 1.26.49 1.78.24.65.51 1.12.76 1.4.25.28.4.29.42.29.03 0 .17-.01.42-.3.25-.27.52-.74.77-1.4.19-.5.36-1.1.49-1.78a20.03 20.03 0 0 0-3.35 0Z"
    clip-rule="evenodd"
  />
</svg>`,iC=ge`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M12.04 2.65c.47.3.6.91.3 1.38l-5.78 9a1 1 0 0 1-1.61.1L1.73 9.27A1 1 0 1 1 3.27 8L5.6 10.8l5.05-7.85a1 1 0 0 1 1.38-.3Z"
    clip-rule="evenodd"
  />
</svg>`,oC=ge`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M1.46 4.96a1 1 0 0 1 1.41 0L8 10.09l5.13-5.13a1 1 0 1 1 1.41 1.41l-5.83 5.84a1 1 0 0 1-1.42 0L1.46 6.37a1 1 0 0 1 0-1.41Z"
    clip-rule="evenodd"
  />
</svg>`,sC=ge`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M11.04 1.46a1 1 0 0 1 0 1.41L5.91 8l5.13 5.13a1 1 0 1 1-1.41 1.41L3.79 8.71a1 1 0 0 1 0-1.42l5.84-5.83a1 1 0 0 1 1.41 0Z"
    clip-rule="evenodd"
  />
</svg>`,aC=ge`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M4.96 14.54a1 1 0 0 1 0-1.41L10.09 8 4.96 2.87a1 1 0 0 1 1.41-1.41l5.84 5.83a1 1 0 0 1 0 1.42l-5.84 5.83a1 1 0 0 1-1.41 0Z"
    clip-rule="evenodd"
  />
</svg>`,cC=ge`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M14.54 11.04a1 1 0 0 1-1.41 0L8 5.92l-5.13 5.12a1 1 0 1 1-1.41-1.41l5.83-5.84a1 1 0 0 1 1.42 0l5.83 5.84a1 1 0 0 1 0 1.41Z"
    clip-rule="evenodd"
  />
</svg>`,lC=ge`<svg width="36" height="36" fill="none">
  <path
    fill="#fff"
    fill-opacity=".05"
    d="M0 14.94c0-5.55 0-8.326 1.182-10.4a9 9 0 0 1 3.359-3.358C6.614 0 9.389 0 14.94 0h6.12c5.55 0 8.326 0 10.4 1.182a9 9 0 0 1 3.358 3.359C36 6.614 36 9.389 36 14.94v6.12c0 5.55 0 8.326-1.182 10.4a9 9 0 0 1-3.359 3.358C29.386 36 26.611 36 21.06 36h-6.12c-5.55 0-8.326 0-10.4-1.182a9 9 0 0 1-3.358-3.359C0 29.386 0 26.611 0 21.06v-6.12Z"
  />
  <path
    stroke="#fff"
    stroke-opacity=".05"
    d="M14.94.5h6.12c2.785 0 4.84 0 6.46.146 1.612.144 2.743.43 3.691.97a8.5 8.5 0 0 1 3.172 3.173c.541.948.826 2.08.971 3.692.145 1.62.146 3.675.146 6.459v6.12c0 2.785 0 4.84-.146 6.46-.145 1.612-.43 2.743-.97 3.691a8.5 8.5 0 0 1-3.173 3.172c-.948.541-2.08.826-3.692.971-1.62.145-3.674.146-6.459.146h-6.12c-2.784 0-4.84 0-6.46-.146-1.612-.145-2.743-.43-3.691-.97a8.5 8.5 0 0 1-3.172-3.173c-.541-.948-.827-2.08-.971-3.692C.5 25.9.5 23.845.5 21.06v-6.12c0-2.784 0-4.84.146-6.46.144-1.612.43-2.743.97-3.691A8.5 8.5 0 0 1 4.79 1.617C5.737 1.076 6.869.79 8.48.646 10.1.5 12.156.5 14.94.5Z"
  />
  <path
    fill="url(#a)"
    d="M17.998 10.8h12.469a14.397 14.397 0 0 0-24.938.001l6.234 10.798.006-.001a7.19 7.19 0 0 1 6.23-10.799Z"
  />
  <path
    fill="url(#b)"
    d="m24.237 21.598-6.234 10.798A14.397 14.397 0 0 0 30.47 10.798H18.002l-.002.006a7.191 7.191 0 0 1 6.237 10.794Z"
  />
  <path
    fill="url(#c)"
    d="M11.765 21.601 5.531 10.803A14.396 14.396 0 0 0 18.001 32.4l6.235-10.798-.004-.004a7.19 7.19 0 0 1-12.466.004Z"
  />
  <path fill="#fff" d="M18 25.2a7.2 7.2 0 1 0 0-14.4 7.2 7.2 0 0 0 0 14.4Z" />
  <path fill="#1A73E8" d="M18 23.7a5.7 5.7 0 1 0 0-11.4 5.7 5.7 0 0 0 0 11.4Z" />
  <defs>
    <linearGradient
      id="a"
      x1="6.294"
      x2="41.1"
      y1="5.995"
      y2="5.995"
      gradientUnits="userSpaceOnUse"
    >
      <stop stop-color="#D93025" />
      <stop offset="1" stop-color="#EA4335" />
    </linearGradient>
    <linearGradient
      id="b"
      x1="20.953"
      x2="37.194"
      y1="32.143"
      y2="2.701"
      gradientUnits="userSpaceOnUse"
    >
      <stop stop-color="#FCC934" />
      <stop offset="1" stop-color="#FBBC04" />
    </linearGradient>
    <linearGradient
      id="c"
      x1="25.873"
      x2="9.632"
      y1="31.2"
      y2="1.759"
      gradientUnits="userSpaceOnUse"
    >
      <stop stop-color="#1E8E3E" />
      <stop offset="1" stop-color="#34A853" />
    </linearGradient>
  </defs>
</svg>`,uC=ge`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M7 2.99a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm-7 5a7 7 0 1 1 14 0 7 7 0 0 1-14 0Zm7-4a1 1 0 0 1 1 1v2.58l1.85 1.85a1 1 0 0 1-1.41 1.42L6.29 8.69A1 1 0 0 1 6 8v-3a1 1 0 0 1 1-1Z"
    clip-rule="evenodd"
  />
</svg>`,dC=ge`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M2.54 2.54a1 1 0 0 1 1.42 0L8 6.6l4.04-4.05a1 1 0 1 1 1.42 1.42L9.4 8l4.05 4.04a1 1 0 0 1-1.42 1.42L8 9.4l-4.04 4.05a1 1 0 0 1-1.42-1.42L6.6 8 2.54 3.96a1 1 0 0 1 0-1.42Z"
    clip-rule="evenodd"
  />
</svg>`,fC=ge`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M10 3a7 7 0 0 0-6.85 8.44l8.29-8.3C10.97 3.06 10.49 3 10 3Zm3.49.93-9.56 9.56c.32.55.71 1.06 1.16 1.5L15 5.1a7.03 7.03 0 0 0-1.5-1.16Zm2.7 2.8-9.46 9.46a7 7 0 0 0 9.46-9.46ZM1.99 5.9A9 9 0 1 1 18 14.09 9 9 0 0 1 1.98 5.91Z"
    clip-rule="evenodd"
  />
</svg>`,hC=ge`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M8 2a6 6 0 1 0 0 12A6 6 0 0 0 8 2ZM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm10.66-2.65a1 1 0 0 1 .23 1.06L9.83 9.24a1 1 0 0 1-.59.58l-2.83 1.06A1 1 0 0 1 5.13 9.6l1.06-2.82a1 1 0 0 1 .58-.59L9.6 5.12a1 1 0 0 1 1.06.23ZM7.9 7.89l-.13.35.35-.13.12-.35-.34.13Z"
    clip-rule="evenodd"
  />
</svg>`,pC=ge`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M9.5 0h1.67c.68 0 1.26 0 1.73.04.5.05.97.14 1.42.4.52.3.95.72 1.24 1.24.26.45.35.92.4 1.42.04.47.04 1.05.04 1.73V6.5c0 .69 0 1.26-.04 1.74-.05.5-.14.97-.4 1.41-.3.52-.72.95-1.24 1.25-.45.25-.92.35-1.42.4-.43.03-.95.03-1.57.03 0 .62 0 1.14-.04 1.57-.04.5-.14.97-.4 1.42-.29.52-.72.95-1.24 1.24-.44.26-.92.35-1.41.4-.48.04-1.05.04-1.74.04H4.83c-.68 0-1.26 0-1.73-.04-.5-.05-.97-.14-1.42-.4-.52-.3-.95-.72-1.24-1.24a3.39 3.39 0 0 1-.4-1.42A20.9 20.9 0 0 1 0 11.17V9.5c0-.69 0-1.26.04-1.74.05-.5.14-.97.4-1.41.3-.52.72-.95 1.24-1.25.45-.25.92-.35 1.42-.4.43-.03.95-.03 1.57-.03 0-.62 0-1.14.04-1.57.04-.5.14-.97.4-1.42.29-.52.72-.95 1.24-1.24.44-.26.92-.35 1.41-.4A20.9 20.9 0 0 1 9.5 0ZM4.67 6.67c-.63 0-1.06 0-1.4.03-.35.03-.5.09-.6.14-.2.12-.38.3-.5.5-.05.1-.1.24-.14.6C2 8.32 2 8.8 2 9.54v1.59c0 .73 0 1.22.03 1.6.04.35.1.5.15.6.11.2.29.38.5.5.09.05.24.1.6.14.37.03.86.03 1.6.03h1.58c.74 0 1.22 0 1.6-.03.36-.04.5-.1.6-.15.2-.11.38-.29.5-.5.05-.09.1-.24.14-.6.03-.33.03-.76.03-1.39-.6 0-1.13 0-1.57-.04-.5-.04-.97-.14-1.41-.4-.52-.29-.95-.72-1.25-1.24a3.39 3.39 0 0 1-.4-1.41c-.03-.44-.03-.96-.03-1.57Zm3.27-4.64c-.36.04-.5.1-.6.15-.2.11-.38.29-.5.5-.05.09-.1.24-.14.6-.03.37-.03.86-.03 1.6v1.58c0 .74 0 1.22.03 1.6.03.36.09.5.14.6.12.2.3.38.5.5.1.05.24.1.6.14.38.03.86.03 1.6.03h1.59c.73 0 1.22 0 1.6-.03.35-.03.5-.09.6-.14.2-.12.38-.3.5-.5.05-.1.1-.24.14-.6.03-.38.03-.86.03-1.6V4.87c0-.73 0-1.22-.03-1.6a1.46 1.46 0 0 0-.15-.6c-.11-.2-.29-.38-.5-.5-.09-.05-.24-.1-.6-.14-.37-.03-.86-.03-1.6-.03H9.55c-.74 0-1.22 0-1.6.03Z"
    clip-rule="evenodd"
  />
</svg>`,mC=ge` <svg fill="none" viewBox="0 0 13 4">
  <path fill="currentColor" d="M.5 0h12L8.9 3.13a3.76 3.76 0 0 1-4.8 0L.5 0Z" />
</svg>`,gC=ge`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M13.66 2H6.34c-1.07 0-1.96 0-2.68.08-.74.08-1.42.25-2.01.68a4 4 0 0 0-.89.89c-.43.6-.6 1.27-.68 2.01C0 6.38 0 7.26 0 8.34v.89c0 1.07 0 1.96.08 2.68.08.74.25 1.42.68 2.01a4 4 0 0 0 .89.89c.6.43 1.27.6 2.01.68a27 27 0 0 0 2.68.08h7.32a27 27 0 0 0 2.68-.08 4.03 4.03 0 0 0 2.01-.68 4 4 0 0 0 .89-.89c.43-.6.6-1.27.68-2.01.08-.72.08-1.6.08-2.68v-.89c0-1.07 0-1.96-.08-2.68a4.04 4.04 0 0 0-.68-2.01 4 4 0 0 0-.89-.89c-.6-.43-1.27-.6-2.01-.68C15.62 2 14.74 2 13.66 2ZM2.82 4.38c.2-.14.48-.25 1.06-.31C4.48 4 5.25 4 6.4 4h7.2c1.15 0 1.93 0 2.52.07.58.06.86.17 1.06.31a2 2 0 0 1 .44.44c.14.2.25.48.31 1.06.07.6.07 1.37.07 2.52v.77c0 1.15 0 1.93-.07 2.52-.06.58-.17.86-.31 1.06a2 2 0 0 1-.44.44c-.2.14-.48.25-1.06.32-.6.06-1.37.06-2.52.06H6.4c-1.15 0-1.93 0-2.52-.06-.58-.07-.86-.18-1.06-.32a2 2 0 0 1-.44-.44c-.14-.2-.25-.48-.31-1.06C2 11.1 2 10.32 2 9.17V8.4c0-1.15 0-1.93.07-2.52.06-.58.17-.86.31-1.06a2 2 0 0 1 .44-.44Z"
    clip-rule="evenodd"
  />
  <path fill="currentColor" d="M6.14 17.57a1 1 0 1 0 0 2h7.72a1 1 0 1 0 0-2H6.14Z" />
</svg>`,wC=ge`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M6.07 1h.57a1 1 0 0 1 0 2h-.52c-.98 0-1.64 0-2.14.06-.48.05-.7.14-.84.24-.13.1-.25.22-.34.35-.1.14-.2.35-.25.83-.05.5-.05 1.16-.05 2.15v2.74c0 .99 0 1.65.05 2.15.05.48.14.7.25.83.1.14.2.25.34.35.14.1.36.2.84.25.5.05 1.16.05 2.14.05h.52a1 1 0 0 1 0 2h-.57c-.92 0-1.69 0-2.3-.07a3.6 3.6 0 0 1-1.8-.61c-.3-.22-.57-.49-.8-.8a3.6 3.6 0 0 1-.6-1.79C.5 11.11.5 10.35.5 9.43V6.58c0-.92 0-1.7.06-2.31a3.6 3.6 0 0 1 .62-1.8c.22-.3.48-.57.79-.79a3.6 3.6 0 0 1 1.8-.61C4.37 1 5.14 1 6.06 1ZM9.5 3a1 1 0 0 1 1.42 0l4.28 4.3a1 1 0 0 1 0 1.4L10.93 13a1 1 0 0 1-1.42-1.42L12.1 9H6.8a1 1 0 1 1 0-2h5.3L9.51 4.42a1 1 0 0 1 0-1.41Z"
    clip-rule="evenodd"
  />
</svg>`,bC=ge`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#5865F2" />
      <path
        fill="#fff"
        fill-rule="evenodd"
        d="M25.71 28.15C30.25 28 32 25.02 32 25.02c0-6.61-2.96-11.98-2.96-11.98-2.96-2.22-5.77-2.15-5.77-2.15l-.29.32c3.5 1.07 5.12 2.61 5.12 2.61a16.75 16.75 0 0 0-10.34-1.93l-.35.04a15.43 15.43 0 0 0-5.88 1.9s1.71-1.63 5.4-2.7l-.2-.24s-2.81-.07-5.77 2.15c0 0-2.96 5.37-2.96 11.98 0 0 1.73 2.98 6.27 3.13l1.37-1.7c-2.6-.79-3.6-2.43-3.6-2.43l.58.35.09.06.08.04.02.01.08.05a17.25 17.25 0 0 0 4.52 1.58 14.4 14.4 0 0 0 8.3-.86c.72-.27 1.52-.66 2.37-1.21 0 0-1.03 1.68-3.72 2.44.61.78 1.35 1.67 1.35 1.67Zm-9.55-9.6c-1.17 0-2.1 1.03-2.1 2.28 0 1.25.95 2.28 2.1 2.28 1.17 0 2.1-1.03 2.1-2.28.01-1.25-.93-2.28-2.1-2.28Zm7.5 0c-1.17 0-2.1 1.03-2.1 2.28 0 1.25.95 2.28 2.1 2.28 1.17 0 2.1-1.03 2.1-2.28 0-1.25-.93-2.28-2.1-2.28Z"
        clip-rule="evenodd"
      />
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
  </defs>
</svg>`,yC=ge`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    d="M4.25 7a.63.63 0 0 0-.63.63v3.97c0 .28-.2.51-.47.54l-.75.07a.93.93 0 0 1-.9-.47A7.51 7.51 0 0 1 5.54.92a7.5 7.5 0 0 1 9.54 4.62c.12.35.06.72-.16 1-.74.97-1.68 1.78-2.6 2.44V4.44a.64.64 0 0 0-.63-.64h-1.06c-.35 0-.63.3-.63.64v5.5c0 .23-.12.42-.32.5l-.52.23V6.05c0-.36-.3-.64-.64-.64H7.45c-.35 0-.64.3-.64.64v4.97c0 .25-.17.46-.4.52a5.8 5.8 0 0 0-.45.11v-4c0-.36-.3-.65-.64-.65H4.25ZM14.07 12.4A7.49 7.49 0 0 1 3.6 14.08c4.09-.58 9.14-2.5 11.87-6.6v.03a7.56 7.56 0 0 1-1.41 4.91Z"
  />
</svg>`,vC=ge`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M6.71 2.99a.57.57 0 0 0-.57.57 1 1 0 0 1-1 1c-.58 0-.96 0-1.24.03-.27.03-.37.07-.42.1a.97.97 0 0 0-.36.35c-.04.08-.09.21-.11.67a2.57 2.57 0 0 1 0 5.13c.02.45.07.6.11.66.09.15.21.28.36.36.07.04.21.1.67.12a2.57 2.57 0 0 1 5.12 0c.46-.03.6-.08.67-.12a.97.97 0 0 0 .36-.36c.03-.04.07-.14.1-.41.02-.29.03-.66.03-1.24a1 1 0 0 1 1-1 .57.57 0 0 0 0-1.15 1 1 0 0 1-1-1c0-.58 0-.95-.03-1.24a1.04 1.04 0 0 0-.1-.42.97.97 0 0 0-.36-.36 1.04 1.04 0 0 0-.42-.1c-.28-.02-.65-.02-1.24-.02a1 1 0 0 1-1-1 .57.57 0 0 0-.57-.57ZM5.15 13.98a1 1 0 0 0 .99-1v-.78a.57.57 0 0 1 1.14 0v.78a1 1 0 0 0 .99 1H8.36a66.26 66.26 0 0 0 .73 0 3.78 3.78 0 0 0 1.84-.38c.46-.26.85-.64 1.1-1.1.23-.4.32-.8.36-1.22.02-.2.03-.4.03-.63a2.57 2.57 0 0 0 0-4.75c0-.23-.01-.44-.03-.63a2.96 2.96 0 0 0-.35-1.22 2.97 2.97 0 0 0-1.1-1.1c-.4-.22-.8-.31-1.22-.35a8.7 8.7 0 0 0-.64-.04 2.57 2.57 0 0 0-4.74 0c-.23 0-.44.02-.63.04-.42.04-.83.13-1.22.35-.46.26-.84.64-1.1 1.1-.33.57-.37 1.2-.39 1.84a21.39 21.39 0 0 0 0 .72v.1a1 1 0 0 0 1 .99h.78a.57.57 0 0 1 0 1.15h-.77a1 1 0 0 0-1 .98v.1a63.87 63.87 0 0 0 0 .73c0 .64.05 1.27.38 1.83.26.47.64.85 1.1 1.11.56.32 1.2.37 1.84.38a20.93 20.93 0 0 0 .72 0h.1Z"
    clip-rule="evenodd"
  />
</svg>`,xC=ge`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3.74 3.99a1 1 0 0 1 1-1H11a1 1 0 0 1 1 1v6.26a1 1 0 0 1-2 0V6.4l-6.3 6.3a1 1 0 0 1-1.4-1.42l6.29-6.3H4.74a1 1 0 0 1-1-1Z"
    clip-rule="evenodd"
  />
</svg>`,_C=ge`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#1877F2" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M26 12.38h-2.89c-.92 0-1.61.38-1.61 1.34v1.66H26l-.36 4.5H21.5v12H17v-12h-3v-4.5h3V12.5c0-3.03 1.6-4.62 5.2-4.62H26v4.5Z"
        />
      </g>
    </g>
    <path
      fill="#1877F2"
      d="M40 20a20 20 0 1 0-23.13 19.76V25.78H11.8V20h5.07v-4.4c0-5.02 3-7.79 7.56-7.79 2.19 0 4.48.4 4.48.4v4.91h-2.53c-2.48 0-3.25 1.55-3.25 3.13V20h5.54l-.88 5.78h-4.66v13.98A20 20 0 0 0 40 20Z"
    />
    <path
      fill="#fff"
      d="m27.79 25.78.88-5.78h-5.55v-3.75c0-1.58.78-3.13 3.26-3.13h2.53V8.2s-2.3-.39-4.48-.39c-4.57 0-7.55 2.77-7.55 7.78V20H11.8v5.78h5.07v13.98a20.15 20.15 0 0 0 6.25 0V25.78h4.67Z"
    />
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,CC=ge`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M0 3a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H1a1 1 0 0 1-1-1Zm2.63 5.25a1 1 0 0 1 1-1h8.75a1 1 0 1 1 0 2H3.63a1 1 0 0 1-1-1Zm2.62 5.25a1 1 0 0 1 1-1h3.5a1 1 0 0 1 0 2h-3.5a1 1 0 0 1-1-1Z"
    clip-rule="evenodd"
  />
</svg>`,EC=ge`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#1B1F23" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M8 19.89a12 12 0 1 1 15.8 11.38c-.6.12-.8-.26-.8-.57v-3.3c0-1.12-.4-1.85-.82-2.22 2.67-.3 5.48-1.31 5.48-5.92 0-1.31-.47-2.38-1.24-3.22.13-.3.54-1.52-.12-3.18 0 0-1-.32-3.3 1.23a11.54 11.54 0 0 0-6 0c-2.3-1.55-3.3-1.23-3.3-1.23a4.32 4.32 0 0 0-.12 3.18 4.64 4.64 0 0 0-1.24 3.22c0 4.6 2.8 5.63 5.47 5.93-.34.3-.65.83-.76 1.6-.69.31-2.42.84-3.5-1 0 0-.63-1.15-1.83-1.23 0 0-1.18-.02-.09.73 0 0 .8.37 1.34 1.76 0 0 .7 2.14 4.03 1.41v2.24c0 .31-.2.68-.8.57A12 12 0 0 1 8 19.9Z"
        />
      </g>
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,TC=ge`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#fff" fill-opacity=".05" />
      <g clip-path="url(#c)">
        <path
          fill="#4285F4"
          d="M20 17.7v4.65h6.46a5.53 5.53 0 0 1-2.41 3.61l3.9 3.02c2.26-2.09 3.57-5.17 3.57-8.82 0-.85-.08-1.67-.22-2.46H20Z"
        />
        <path
          fill="#34A853"
          d="m13.27 22.17-.87.67-3.11 2.42A12 12 0 0 0 20 31.9c3.24 0 5.96-1.07 7.94-2.9l-3.9-3.03A7.15 7.15 0 0 1 20 27.12a7.16 7.16 0 0 1-6.72-4.94v-.01Z"
        />
        <path
          fill="#FBBC05"
          d="M9.29 14.5a11.85 11.85 0 0 0 0 10.76l3.99-3.1a7.19 7.19 0 0 1 0-4.55l-4-3.1Z"
        />
        <path
          fill="#EA4335"
          d="M20 12.66c1.77 0 3.34.61 4.6 1.8l3.43-3.44A11.51 11.51 0 0 0 20 7.89c-4.7 0-8.74 2.69-10.71 6.62l3.99 3.1A7.16 7.16 0 0 1 20 12.66Z"
        />
      </g>
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,SC=ge`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    d="M8.51 5.66a.83.83 0 0 0-.57-.2.83.83 0 0 0-.52.28.8.8 0 0 0-.25.52 1 1 0 0 1-2 0c0-.75.34-1.43.81-1.91a2.75 2.75 0 0 1 4.78 1.92c0 1.24-.8 1.86-1.25 2.2l-.04.03c-.47.36-.5.43-.5.65a1 1 0 1 1-2 0c0-1.25.8-1.86 1.24-2.2l.04-.04c.47-.36.5-.43.5-.65 0-.3-.1-.49-.24-.6ZM9.12 11.87a1.13 1.13 0 1 1-2.25 0 1.13 1.13 0 0 1 2.25 0Z"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6a6 6 0 1 0 0 12A6 6 0 0 0 8 2Z"
    clip-rule="evenodd"
  />
</svg>`,AC=ge`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    d="M6 10.49a1 1 0 1 0 2 0v-2a1 1 0 0 0-2 0v2ZM7 4.49a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M7 14.99a7 7 0 1 0 0-14 7 7 0 0 0 0 14Zm5-7a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z"
    clip-rule="evenodd"
  />
</svg>`,$C=ge`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M4.83 1.34h6.34c.68 0 1.26 0 1.73.04.5.05.97.15 1.42.4.52.3.95.72 1.24 1.24.26.45.35.92.4 1.42.04.47.04 1.05.04 1.73v3.71c0 .69 0 1.26-.04 1.74-.05.5-.14.97-.4 1.41-.3.52-.72.95-1.24 1.25-.45.25-.92.35-1.42.4-.47.03-1.05.03-1.73.03H4.83c-.68 0-1.26 0-1.73-.04-.5-.04-.97-.14-1.42-.4-.52-.29-.95-.72-1.24-1.24a3.39 3.39 0 0 1-.4-1.41A20.9 20.9 0 0 1 0 9.88v-3.7c0-.7 0-1.27.04-1.74.05-.5.14-.97.4-1.42.3-.52.72-.95 1.24-1.24.45-.25.92-.35 1.42-.4.47-.04 1.05-.04 1.73-.04ZM3.28 3.38c-.36.03-.51.08-.6.14-.21.11-.39.29-.5.5a.8.8 0 0 0-.08.19l5.16 3.44c.45.3 1.03.3 1.48 0L13.9 4.2a.79.79 0 0 0-.08-.2c-.11-.2-.29-.38-.5-.5-.09-.05-.24-.1-.6-.13-.37-.04-.86-.04-1.6-.04H4.88c-.73 0-1.22 0-1.6.04ZM14 6.54 9.85 9.31a3.33 3.33 0 0 1-3.7 0L2 6.54v3.3c0 .74 0 1.22.03 1.6.04.36.1.5.15.6.11.2.29.38.5.5.09.05.24.1.6.14.37.03.86.03 1.6.03h6.25c.73 0 1.22 0 1.6-.03.35-.03.5-.09.6-.14.2-.12.38-.3.5-.5.05-.1.1-.24.14-.6.03-.38.03-.86.03-1.6v-3.3Z"
    clip-rule="evenodd"
  />
</svg>`,PC=ge`<svg fill="none" viewBox="0 0 20 20">
  <path fill="currentColor" d="M10.81 5.81a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3 4.75A4.75 4.75 0 0 1 7.75 0h4.5A4.75 4.75 0 0 1 17 4.75v10.5A4.75 4.75 0 0 1 12.25 20h-4.5A4.75 4.75 0 0 1 3 15.25V4.75ZM7.75 2A2.75 2.75 0 0 0 5 4.75v10.5A2.75 2.75 0 0 0 7.75 18h4.5A2.75 2.75 0 0 0 15 15.25V4.75A2.75 2.75 0 0 0 12.25 2h-4.5Z"
    clip-rule="evenodd"
  />
</svg>`,OC=ge`<svg fill="none" viewBox="0 0 22 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M16.32 13.62a3.14 3.14 0 1 1-.99 1.72l-1.6-.93a3.83 3.83 0 0 1-3.71 1 3.66 3.66 0 0 1-1.74-1l-1.6.94a3.14 3.14 0 1 1-1-1.73l1.6-.94a3.7 3.7 0 0 1 0-2 3.81 3.81 0 0 1 1.8-2.33c.29-.17.6-.3.92-.38V6.1a3.14 3.14 0 1 1 2 0l-.01.02v1.85H12a3.82 3.82 0 0 1 2.33 1.8 3.7 3.7 0 0 1 .39 2.91l1.6.93ZM2.6 16.54a1.14 1.14 0 0 0 1.98-1.14 1.14 1.14 0 0 0-1.98 1.14ZM11 2.01a1.14 1.14 0 1 0 0 2.28 1.14 1.14 0 0 0 0-2.28Zm1.68 10.45c.08-.19.14-.38.16-.58v-.05l.02-.13v-.13a1.92 1.92 0 0 0-.24-.8l-.11-.15a1.89 1.89 0 0 0-.74-.6 1.86 1.86 0 0 0-.77-.17h-.19a1.97 1.97 0 0 0-.89.34 1.98 1.98 0 0 0-.61.74 1.99 1.99 0 0 0-.16.9v.05a1.87 1.87 0 0 0 .24.74l.1.15c.12.16.26.3.42.42l.16.1.13.07.04.02a1.84 1.84 0 0 0 .76.17h.17a2 2 0 0 0 .91-.35 1.78 1.78 0 0 0 .52-.58l.03-.05a.84.84 0 0 0 .05-.11Zm5.15 4.5a1.14 1.14 0 0 0 1.14-1.97 1.13 1.13 0 0 0-1.55.41c-.32.55-.13 1.25.41 1.56Z"
    clip-rule="evenodd"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M4.63 9.43a1.5 1.5 0 1 0 1.5-2.6 1.5 1.5 0 0 0-1.5 2.6Zm.32-1.55a.5.5 0 0 1 .68-.19.5.5 0 0 1 .18.68.5.5 0 0 1-.68.19.5.5 0 0 1-.18-.68ZM17.94 8.88a1.5 1.5 0 1 1-2.6-1.5 1.5 1.5 0 1 1 2.6 1.5ZM16.9 7.69a.5.5 0 0 0-.68.19.5.5 0 0 0 .18.68.5.5 0 0 0 .68-.19.5.5 0 0 0-.18-.68ZM9.75 17.75a1.5 1.5 0 1 1 2.6 1.5 1.5 1.5 0 1 1-2.6-1.5Zm1.05 1.18a.5.5 0 0 0 .68-.18.5.5 0 0 0-.18-.68.5.5 0 0 0-.68.18.5.5 0 0 0 .18.68Z"
    clip-rule="evenodd"
  />
</svg>`,DC=ge`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M9.13 1h1.71c1.46 0 2.63 0 3.56.1.97.1 1.8.33 2.53.85a5 5 0 0 1 1.1 1.11c.53.73.75 1.56.86 2.53.1.93.1 2.1.1 3.55v1.72c0 1.45 0 2.62-.1 3.55-.1.97-.33 1.8-.86 2.53a5 5 0 0 1-1.1 1.1c-.73.53-1.56.75-2.53.86-.93.1-2.1.1-3.55.1H9.13c-1.45 0-2.62 0-3.56-.1-.96-.1-1.8-.33-2.52-.85a5 5 0 0 1-1.1-1.11 5.05 5.05 0 0 1-.86-2.53c-.1-.93-.1-2.1-.1-3.55V9.14c0-1.45 0-2.62.1-3.55.1-.97.33-1.8.85-2.53a5 5 0 0 1 1.1-1.1 5.05 5.05 0 0 1 2.53-.86C6.51 1 7.67 1 9.13 1ZM5.79 3.09a3.1 3.1 0 0 0-1.57.48 3 3 0 0 0-.66.67c-.24.32-.4.77-.48 1.56-.1.82-.1 1.88-.1 3.4v1.6c0 1.15 0 2.04.05 2.76l.41-.42c.5-.5.93-.92 1.32-1.24.41-.33.86-.6 1.43-.7a3 3 0 0 1 .94 0c.35.06.66.2.95.37a17.11 17.11 0 0 0 .8.45c.1-.08.2-.2.41-.4l.04-.03a27 27 0 0 1 1.95-1.84 4.03 4.03 0 0 1 1.91-.94 4 4 0 0 1 1.25 0c.73.11 1.33.46 1.91.94l.64.55V9.2c0-1.52 0-2.58-.1-3.4a3.1 3.1 0 0 0-.48-1.56 3 3 0 0 0-.66-.67 3.1 3.1 0 0 0-1.56-.48C13.37 3 12.3 3 10.79 3h-1.6c-1.52 0-2.59 0-3.4.09Zm11.18 10-.04-.05a26.24 26.24 0 0 0-1.83-1.74c-.45-.36-.73-.48-.97-.52a2 2 0 0 0-.63 0c-.24.04-.51.16-.97.52-.46.38-1.01.93-1.83 1.74l-.02.02c-.17.18-.34.34-.49.47a2.04 2.04 0 0 1-1.08.5 1.97 1.97 0 0 1-1.25-.27l-.79-.46-.02-.02a.65.65 0 0 0-.24-.1 1 1 0 0 0-.31 0c-.08.02-.21.06-.49.28-.3.24-.65.59-1.2 1.14l-.56.56-.65.66a3 3 0 0 0 .62.6c.33.24.77.4 1.57.49.81.09 1.88.09 3.4.09h1.6c1.52 0 2.58 0 3.4-.09a3.1 3.1 0 0 0 1.56-.48 3 3 0 0 0 .66-.67c.24-.32.4-.77.49-1.56l.07-1.12Zm-8.02-1.03ZM4.99 7a2 2 0 1 1 4 0 2 2 0 0 1-4 0Z"
    clip-rule="evenodd"
  />
</svg>`,IC=ge`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M8 0a1 1 0 0 1 1 1v5.38a1 1 0 0 1-2 0V1a1 1 0 0 1 1-1ZM5.26 2.6a1 1 0 0 1-.28 1.39 5.46 5.46 0 1 0 6.04 0 1 1 0 1 1 1.1-1.67 7.46 7.46 0 1 1-8.25 0 1 1 0 0 1 1.4.28Z"
    clip-rule="evenodd"
  />
</svg>`,RC=ge` <svg
  width="36"
  height="36"
  fill="none"
>
  <path
    d="M0 8a8 8 0 0 1 8-8h20a8 8 0 0 1 8 8v20a8 8 0 0 1-8 8H8a8 8 0 0 1-8-8V8Z"
    fill="#fff"
    fill-opacity=".05"
  />
  <path
    d="m18.262 17.513-8.944 9.49v.01a2.417 2.417 0 0 0 3.56 1.452l.026-.017 10.061-5.803-4.703-5.132Z"
    fill="#EA4335"
  />
  <path
    d="m27.307 15.9-.008-.008-4.342-2.52-4.896 4.36 4.913 4.912 4.325-2.494a2.42 2.42 0 0 0 .008-4.25Z"
    fill="#FBBC04"
  />
  <path
    d="M9.318 8.997c-.05.202-.084.403-.084.622V26.39c0 .218.025.42.084.621l9.246-9.247-9.246-8.768Z"
    fill="#4285F4"
  />
  <path
    d="m18.33 18 4.627-4.628-10.053-5.828a2.427 2.427 0 0 0-3.586 1.444L18.329 18Z"
    fill="#34A853"
  />
  <path
    d="M8 .5h20A7.5 7.5 0 0 1 35.5 8v20a7.5 7.5 0 0 1-7.5 7.5H8A7.5 7.5 0 0 1 .5 28V8A7.5 7.5 0 0 1 8 .5Z"
    stroke="#fff"
    stroke-opacity=".05"
  />
</svg>`,NC=ge`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    d="M3 6a3 3 0 0 1 3-3h1a1 1 0 1 0 0-2H6a5 5 0 0 0-5 5v1a1 1 0 0 0 2 0V6ZM13 1a1 1 0 1 0 0 2h1a3 3 0 0 1 3 3v1a1 1 0 1 0 2 0V6a5 5 0 0 0-5-5h-1ZM3 13a1 1 0 1 0-2 0v1a5 5 0 0 0 5 5h1a1 1 0 1 0 0-2H6a3 3 0 0 1-3-3v-1ZM19 13a1 1 0 1 0-2 0v1a3 3 0 0 1-3 3h-1a1 1 0 1 0 0 2h1.01a5 5 0 0 0 5-5v-1ZM5.3 6.36c-.04.2-.04.43-.04.89s0 .7.05.89c.14.52.54.92 1.06 1.06.19.05.42.05.89.05.46 0 .7 0 .88-.05A1.5 1.5 0 0 0 9.2 8.14c.06-.2.06-.43.06-.89s0-.7-.06-.89A1.5 1.5 0 0 0 8.14 5.3c-.19-.05-.42-.05-.88-.05-.47 0-.7 0-.9.05a1.5 1.5 0 0 0-1.05 1.06ZM10.8 6.36c-.04.2-.04.43-.04.89s0 .7.05.89c.14.52.54.92 1.06 1.06.19.05.42.05.89.05.46 0 .7 0 .88-.05a1.5 1.5 0 0 0 1.06-1.06c.06-.2.06-.43.06-.89s0-.7-.06-.89a1.5 1.5 0 0 0-1.06-1.06c-.19-.05-.42-.05-.88-.05-.47 0-.7 0-.9.05a1.5 1.5 0 0 0-1.05 1.06ZM5.26 12.75c0-.46 0-.7.05-.89a1.5 1.5 0 0 1 1.06-1.06c.19-.05.42-.05.89-.05.46 0 .7 0 .88.05.52.14.93.54 1.06 1.06.06.2.06.43.06.89s0 .7-.06.89a1.5 1.5 0 0 1-1.06 1.06c-.19.05-.42.05-.88.05-.47 0-.7 0-.9-.05a1.5 1.5 0 0 1-1.05-1.06c-.05-.2-.05-.43-.05-.89ZM10.8 11.86c-.04.2-.04.43-.04.89s0 .7.05.89c.14.52.54.92 1.06 1.06.19.05.42.05.89.05.46 0 .7 0 .88-.05a1.5 1.5 0 0 0 1.06-1.06c.06-.2.06-.43.06-.89s0-.7-.06-.89a1.5 1.5 0 0 0-1.06-1.06c-.19-.05-.42-.05-.88-.05-.47 0-.7 0-.9.05a1.5 1.5 0 0 0-1.05 1.06Z"
  />
</svg>`,kC=ge`<svg fill="none" viewBox="0 0 14 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3.94 1.04a1 1 0 0 1 .7 1.23l-.48 1.68a5.85 5.85 0 0 1 8.53 4.32 5.86 5.86 0 0 1-11.4 2.56 1 1 0 0 1 1.9-.57 3.86 3.86 0 1 0 1.83-4.5l1.87.53a1 1 0 0 1-.55 1.92l-4.1-1.15a1 1 0 0 1-.69-1.23l1.16-4.1a1 1 0 0 1 1.23-.7Z"
    clip-rule="evenodd"
  />
</svg>`,MC=ge`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M9.36 4.21a5.14 5.14 0 1 0 0 10.29 5.14 5.14 0 0 0 0-10.29ZM1.64 9.36a7.71 7.71 0 1 1 14 4.47l2.52 2.5a1.29 1.29 0 1 1-1.82 1.83l-2.51-2.51A7.71 7.71 0 0 1 1.65 9.36Z"
    clip-rule="evenodd"
  />
</svg>`,BC=ge`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M6.76.3a1 1 0 0 1 0 1.4L4.07 4.4h9a1 1 0 1 1 0 2h-9l2.69 2.68a1 1 0 1 1-1.42 1.42L.95 6.09a1 1 0 0 1 0-1.4l4.4-4.4a1 1 0 0 1 1.4 0Zm6.49 9.21a1 1 0 0 1 1.41 0l4.39 4.4a1 1 0 0 1 0 1.4l-4.39 4.4a1 1 0 0 1-1.41-1.42l2.68-2.68h-9a1 1 0 0 1 0-2h9l-2.68-2.68a1 1 0 0 1 0-1.42Z"
    clip-rule="evenodd"
  />
</svg>`,LC=ge`<svg fill="none" viewBox="0 0 14 14">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3.48 2.18a1 1 0 0 1 1.41 0l2.68 2.68a1 1 0 1 1-1.41 1.42l-.98-.98v4.56a1 1 0 0 1-2 0V5.3l-.97.98A1 1 0 0 1 .79 4.86l2.69-2.68Zm6.34 2.93a1 1 0 0 1 1 1v4.56l.97-.98a1 1 0 1 1 1.42 1.42l-2.69 2.68a1 1 0 0 1-1.41 0l-2.68-2.68a1 1 0 0 1 1.41-1.42l.98.98V6.1a1 1 0 0 1 1-1Z"
    clip-rule="evenodd"
  />
</svg>`,UC=ge`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#5865F2" />
      <path
        fill="#fff"
        fill-rule="evenodd"
        d="M25.71 28.15C30.25 28 32 25.02 32 25.02c0-6.61-2.96-11.98-2.96-11.98-2.96-2.22-5.77-2.15-5.77-2.15l-.29.32c3.5 1.07 5.12 2.61 5.12 2.61a16.75 16.75 0 0 0-10.34-1.93l-.35.04a15.43 15.43 0 0 0-5.88 1.9s1.71-1.63 5.4-2.7l-.2-.24s-2.81-.07-5.77 2.15c0 0-2.96 5.37-2.96 11.98 0 0 1.73 2.98 6.27 3.13l1.37-1.7c-2.6-.79-3.6-2.43-3.6-2.43l.58.35.09.06.08.04.02.01.08.05a17.25 17.25 0 0 0 4.52 1.58 14.4 14.4 0 0 0 8.3-.86c.72-.27 1.52-.66 2.37-1.21 0 0-1.03 1.68-3.72 2.44.61.78 1.35 1.67 1.35 1.67Zm-9.55-9.6c-1.17 0-2.1 1.03-2.1 2.28 0 1.25.95 2.28 2.1 2.28 1.17 0 2.1-1.03 2.1-2.28.01-1.25-.93-2.28-2.1-2.28Zm7.5 0c-1.17 0-2.1 1.03-2.1 2.28 0 1.25.95 2.28 2.1 2.28 1.17 0 2.1-1.03 2.1-2.28 0-1.25-.93-2.28-2.1-2.28Z"
        clip-rule="evenodd"
      />
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
  </defs>
</svg> `,FC=ge`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#5A3E85" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M18.22 25.7 20 23.91h3.34l2.1-2.1v-6.68H15.4v8.78h2.82v1.77Zm3.87-8.16h1.25v3.66H22.1v-3.66Zm-3.34 0H20v3.66h-1.25v-3.66ZM20 7.9a12 12 0 1 0 0 24 12 12 0 0 0 0-24Zm6.69 14.56-3.66 3.66h-2.72l-1.77 1.78h-1.88V26.1H13.3v-9.82l.94-2.4H26.7v8.56Z"
        />
      </g>
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,jC=ge`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#1D9BF0" />
      <path
        fill="#fff"
        d="M30 13.81c-.74.33-1.53.55-2.36.65.85-.51 1.5-1.32 1.8-2.27-.79.47-1.66.8-2.6 1a4.1 4.1 0 0 0-7 3.73c-3.4-.17-6.42-1.8-8.45-4.28a4.1 4.1 0 0 0 1.27 5.47c-.67-.02-1.3-.2-1.86-.5a4.1 4.1 0 0 0 3.3 4.07c-.58.15-1.21.19-1.86.07a4.1 4.1 0 0 0 3.83 2.85A8.25 8.25 0 0 1 10 26.3a11.62 11.62 0 0 0 6.29 1.84c7.62 0 11.92-6.44 11.66-12.2.8-.59 1.5-1.3 2.05-2.13Z"
      />
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
  </defs>
</svg>`,WC=ge`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    d="m14.36 4.74.01.42c0 4.34-3.3 9.34-9.34 9.34A9.3 9.3 0 0 1 0 13.03a6.6 6.6 0 0 0 4.86-1.36 3.29 3.29 0 0 1-3.07-2.28c.5.1 1 .07 1.48-.06A3.28 3.28 0 0 1 .64 6.11v-.04c.46.26.97.4 1.49.41A3.29 3.29 0 0 1 1.11 2.1a9.32 9.32 0 0 0 6.77 3.43 3.28 3.28 0 0 1 5.6-3 6.59 6.59 0 0 0 2.08-.8 3.3 3.3 0 0 1-1.45 1.82A6.53 6.53 0 0 0 16 3.04c-.44.66-1 1.23-1.64 1.7Z"
  />
</svg>`,HC=ge`
  <svg fill="none" viewBox="0 0 48 44">
    <path
      style="fill: var(--wui-color-bg-300);"
      d="M4.56 8.64c-1.23 1.68-1.23 4.08-1.23 8.88v8.96c0 4.8 0 7.2 1.23 8.88.39.55.87 1.02 1.41 1.42C7.65 38 10.05 38 14.85 38h14.3c4.8 0 7.2 0 8.88-1.22a6.4 6.4 0 0 0 1.41-1.42c.83-1.14 1.1-2.6 1.19-4.92a6.4 6.4 0 0 0 5.16-4.65c.21-.81.21-1.8.21-3.79 0-1.98 0-2.98-.22-3.79a6.4 6.4 0 0 0-5.15-4.65c-.1-2.32-.36-3.78-1.19-4.92a6.4 6.4 0 0 0-1.41-1.42C36.35 6 33.95 6 29.15 6h-14.3c-4.8 0-7.2 0-8.88 1.22a6.4 6.4 0 0 0-1.41 1.42Z"
    />
    <path
      style="fill: var(--wui-color-fg-200);"
      fill-rule="evenodd"
      d="M2.27 11.33a6.4 6.4 0 0 1 6.4-6.4h26.66a6.4 6.4 0 0 1 6.4 6.4v1.7a6.4 6.4 0 0 1 5.34 6.3v5.34a6.4 6.4 0 0 1-5.34 6.3v1.7a6.4 6.4 0 0 1-6.4 6.4H8.67a6.4 6.4 0 0 1-6.4-6.4V11.33ZM39.6 31.07h-6.93a9.07 9.07 0 1 1 0-18.14h6.93v-1.6a4.27 4.27 0 0 0-4.27-4.26H8.67a4.27 4.27 0 0 0-4.27 4.26v21.34a4.27 4.27 0 0 0 4.27 4.26h26.66a4.27 4.27 0 0 0 4.27-4.26v-1.6Zm-6.93-16a6.93 6.93 0 0 0 0 13.86h8a4.27 4.27 0 0 0 4.26-4.26v-5.34a4.27 4.27 0 0 0-4.26-4.26h-8Z"
      clip-rule="evenodd"
    />
  </svg>
`,zC=ge`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M0 5.5c0-1.8 1.46-3.25 3.25-3.25H14.5c1.8 0 3.25 1.46 3.25 3.25v.28A3.25 3.25 0 0 1 20 8.88v2.24c0 1.45-.94 2.68-2.25 3.1v.28c0 1.8-1.46 3.25-3.25 3.25H3.25A3.25 3.25 0 0 1 0 14.5v-9Zm15.75 8.88h-2.38a4.38 4.38 0 0 1 0-8.76h2.38V5.5c0-.69-.56-1.25-1.25-1.25H3.25C2.56 4.25 2 4.81 2 5.5v9c0 .69.56 1.25 1.25 1.25H14.5c.69 0 1.25-.56 1.25-1.25v-.13Zm-2.38-6.76a2.37 2.37 0 1 0 0 4.75h3.38c.69 0 1.25-.55 1.25-1.24V8.87c0-.69-.56-1.24-1.25-1.24h-3.38Z"
    clip-rule="evenodd"
  />
</svg>`,qC=ge`<svg fill="none" viewBox="0 0 96 67">
  <path
    fill="currentColor"
    d="M25.32 18.8a32.56 32.56 0 0 1 45.36 0l1.5 1.47c.63.62.63 1.61 0 2.22l-5.15 5.05c-.31.3-.82.3-1.14 0l-2.07-2.03a22.71 22.71 0 0 0-31.64 0l-2.22 2.18c-.31.3-.82.3-1.14 0l-5.15-5.05a1.55 1.55 0 0 1 0-2.22l1.65-1.62Zm56.02 10.44 4.59 4.5c.63.6.63 1.6 0 2.21l-20.7 20.26c-.62.61-1.63.61-2.26 0L48.28 41.83a.4.4 0 0 0-.56 0L33.03 56.21c-.63.61-1.64.61-2.27 0L10.07 35.95a1.55 1.55 0 0 1 0-2.22l4.59-4.5a1.63 1.63 0 0 1 2.27 0L31.6 43.63a.4.4 0 0 0 .57 0l14.69-14.38a1.63 1.63 0 0 1 2.26 0l14.69 14.38a.4.4 0 0 0 .57 0l14.68-14.38a1.63 1.63 0 0 1 2.27 0Z"
  />
  <path
    stroke="#000"
    stroke-opacity=".1"
    d="M25.67 19.15a32.06 32.06 0 0 1 44.66 0l1.5 1.48c.43.42.43 1.09 0 1.5l-5.15 5.05a.31.31 0 0 1-.44 0l-2.07-2.03a23.21 23.21 0 0 0-32.34 0l-2.22 2.18a.31.31 0 0 1-.44 0l-5.15-5.05a1.05 1.05 0 0 1 0-1.5l1.65-1.63ZM81 29.6l4.6 4.5c.42.41.42 1.09 0 1.5l-20.7 20.26c-.43.43-1.14.43-1.57 0L48.63 41.47a.9.9 0 0 0-1.26 0L32.68 55.85c-.43.43-1.14.43-1.57 0L10.42 35.6a1.05 1.05 0 0 1 0-1.5l4.59-4.5a1.13 1.13 0 0 1 1.57 0l14.68 14.38a.9.9 0 0 0 1.27 0l-.35-.35.35.35L47.22 29.6a1.13 1.13 0 0 1 1.56 0l14.7 14.38a.9.9 0 0 0 1.26 0L79.42 29.6a1.13 1.13 0 0 1 1.57 0Z"
  />
</svg>`,VC=ge`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    d="M11 6.67a1 1 0 1 0-2 0v2.66a1 1 0 0 0 2 0V6.67ZM10 14.5a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Z"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M10 1a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm-7 9a7 7 0 1 1 14 0 7 7 0 0 1-14 0Z"
    clip-rule="evenodd"
  />
</svg>`;var xu=globalThis&&globalThis.__decorate||function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};const GC={allWallets:J_,appStore:Y_,chromeStore:lC,apple:X_,arrowBottom:Q_,arrowLeft:eC,arrowRight:tC,arrowTop:nC,browser:rC,checkmark:iC,chevronBottom:oC,chevronLeft:sC,chevronRight:aC,chevronTop:cC,clock:uC,close:dC,compass:hC,coinPlaceholder:fC,copy:pC,cursor:mC,desktop:gC,disconnect:wC,discord:bC,etherscan:yC,extension:vC,externalLink:xC,facebook:_C,filters:CC,github:EC,google:TC,helpCircle:SC,infoCircle:AC,mail:$C,mobile:PC,networkPlaceholder:OC,nftPlaceholder:DC,off:IC,playStore:RC,qrCode:NC,refresh:kC,search:MC,swapHorizontal:BC,swapVertical:LC,telegram:UC,twitch:FC,twitter:jC,twitterIcon:WC,wallet:zC,walletConnect:qC,walletPlaceholder:HC,warningCircle:VC};let Ro=class extends de{constructor(){super(...arguments),this.size="md",this.name="copy",this.color="fg-300"}render(){return this.style.cssText=`
      --local-color: ${`var(--wui-color-${this.color});`}
      --local-width: ${`var(--wui-icon-size-${this.size});`}
    `,k`${GC[this.name]}`}};Ro.styles=[De,Th,Z_];xu([M()],Ro.prototype,"size",void 0);xu([M()],Ro.prototype,"name",void 0);xu([M()],Ro.prototype,"color",void 0);Ro=xu([ue("wui-icon")],Ro);const KC=we`
  :host {
    display: block;
    width: 100%;
    height: 100%;
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center center;
    border-radius: inherit;
  }
`;var Sh=globalThis&&globalThis.__decorate||function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};let Sa=class extends de{constructor(){super(...arguments),this.src="./path/to/image.jpg",this.alt="Image"}render(){return k`<img src=${this.src} alt=${this.alt} />`}};Sa.styles=[De,Th,KC];Sh([M()],Sa.prototype,"src",void 0);Sh([M()],Sa.prototype,"alt",void 0);Sa=Sh([ue("wui-image")],Sa);const ZC=we`
  :host {
    display: block;
    width: var(--wui-box-size-lg);
    height: var(--wui-box-size-lg);
  }

  svg {
    width: var(--wui-box-size-lg);
    height: var(--wui-box-size-lg);
    fill: none;
    stroke: transparent;
    stroke-linecap: round;
    transition: all var(--wui-ease-in-power-3) var(--wui-duration-lg);
  }

  use {
    stroke: var(--wui-color-accent-100);
    stroke-width: 2px;
    stroke-dasharray: 54, 118;
    stroke-dashoffset: 172;
    animation: dash 1s linear infinite;
  }

  @keyframes dash {
    to {
      stroke-dashoffset: 0px;
    }
  }
`;var JC=globalThis&&globalThis.__decorate||function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};let Nf=class extends de{render(){return k`
      <svg viewBox="0 0 54 59">
        <path
          id="wui-loader-path"
          d="M17.22 5.295c3.877-2.277 5.737-3.363 7.72-3.726a11.44 11.44 0 0 1 4.12 0c1.983.363 3.844 1.45 7.72 3.726l6.065 3.562c3.876 2.276 5.731 3.372 7.032 4.938a11.896 11.896 0 0 1 2.06 3.63c.683 1.928.688 4.11.688 8.663v7.124c0 4.553-.005 6.735-.688 8.664a11.896 11.896 0 0 1-2.06 3.63c-1.3 1.565-3.156 2.66-7.032 4.937l-6.065 3.563c-3.877 2.276-5.737 3.362-7.72 3.725a11.46 11.46 0 0 1-4.12 0c-1.983-.363-3.844-1.449-7.72-3.726l-6.065-3.562c-3.876-2.276-5.731-3.372-7.032-4.938a11.885 11.885 0 0 1-2.06-3.63c-.682-1.928-.688-4.11-.688-8.663v-7.124c0-4.553.006-6.735.688-8.664a11.885 11.885 0 0 1 2.06-3.63c1.3-1.565 3.156-2.66 7.032-4.937l6.065-3.562Z"
        />
        <use xlink:href="#wui-loader-path"></use>
      </svg>
    `}};Nf.styles=[De,ZC];Nf=JC([ue("wui-loading-hexagon")],Nf);const YC=we`
  :host {
    display: flex;
  }

  :host([data-size='sm']) > svg {
    width: 12px;
    height: 12px;
  }

  :host([data-size='md']) > svg {
    width: 14px;
    height: 14px;
  }

  :host([data-size='lg']) > svg {
    width: 24px;
    height: 24px;
  }

  svg {
    animation: rotate 2s linear infinite;
    transition: all var(--wui-ease-in-power-3) var(--wui-duration-lg);
  }

  circle {
    fill: none;
    stroke: var(--local-color);
    stroke-width: 4px;
    stroke-dasharray: 1, 124;
    stroke-dashoffset: 0;
    stroke-linecap: round;
    animation: dash 1.5s ease-in-out infinite;
  }

  :host([data-size='md']) > svg > circle {
    stroke-width: 6px;
  }

  :host([data-size='sm']) > svg > circle {
    stroke-width: 8px;
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes dash {
    0% {
      stroke-dasharray: 1, 124;
      stroke-dashoffset: 0;
    }

    50% {
      stroke-dasharray: 90, 124;
      stroke-dashoffset: -35;
    }

    100% {
      stroke-dashoffset: -125;
    }
  }
`;var Ah=globalThis&&globalThis.__decorate||function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};let Aa=class extends de{constructor(){super(...arguments),this.color="accent-100",this.size="lg"}render(){return this.style.cssText=`--local-color: var(--wui-color-${this.color});`,this.dataset.size=this.size,k`<svg viewBox="25 25 50 50">
      <circle r="20" cy="50" cx="50"></circle>
    </svg>`}};Aa.styles=[De,YC];Ah([M()],Aa.prototype,"color",void 0);Ah([M()],Aa.prototype,"size",void 0);Aa=Ah([ue("wui-loading-spinner")],Aa);const XC=we`
  :host {
    display: block;
    width: var(--wui-box-size-md);
    height: var(--wui-box-size-md);
  }

  svg {
    width: var(--wui-box-size-md);
    height: var(--wui-box-size-md);
    transition: all var(--wui-ease-in-power-3) var(--wui-duration-lg);
  }

  rect {
    fill: none;
    stroke: var(--wui-color-accent-100);
    stroke-width: 4px;
    stroke-linecap: round;
    animation: dash 1s linear infinite;
  }

  @keyframes dash {
    to {
      stroke-dashoffset: 0px;
    }
  }
`;var ob=globalThis&&globalThis.__decorate||function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};let fl=class extends de{constructor(){super(...arguments),this.radius=36}render(){return this.svgLoaderTemplate()}svgLoaderTemplate(){const t=this.radius>50?50:this.radius,r=36-t,i=116+r,o=245+r,s=360+r*1.75;return k`
      <svg viewBox="0 0 110 110" width="110" height="110">
        <rect
          x="2"
          y="2"
          width="106"
          height="106"
          rx=${t}
          stroke-dasharray="${i} ${o}"
          stroke-dashoffset=${s}
        />
      </svg>
    `}};fl.styles=[De,XC];ob([M({type:Number})],fl.prototype,"radius",void 0);fl=ob([ue("wui-loading-thumbnail")],fl);const QC=we`
  :host {
    display: block;
    outline: 1px solid var(--wui-gray-glass-005);
    background: linear-gradient(
      90deg,
      var(--wui-color-bg-200) 5%,
      var(--wui-color-bg-300) 60%,
      var(--wui-color-bg-200) 100%
    );
    background-size: 250%;
    animation: shimmer 2.5s linear infinite reverse;
  }

  @keyframes shimmer {
    from {
      background-position: -250% 0;
    }
    to {
      background-position: 250% 0;
    }
  }
`;var _u=globalThis&&globalThis.__decorate||function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};let No=class extends de{constructor(){super(...arguments),this.width="",this.height="",this.borderRadius="m"}render(){return this.style.cssText=`
      width: ${this.width};
      height: ${this.height};
      border-radius: ${`clamp(0px,var(--wui-border-radius-${this.borderRadius}), 40px)`};
    `,k`<slot></slot>`}};No.styles=[QC];_u([M()],No.prototype,"width",void 0);_u([M()],No.prototype,"height",void 0);_u([M()],No.prototype,"borderRadius",void 0);No=_u([ue("wui-shimmer")],No);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const sb={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},ab=e=>(...t)=>({_$litDirective$:e,values:t});let cb=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,n,r){this._$Ct=t,this._$AM=n,this._$Ci=r}_$AS(t,n){return this.update(t,n)}update(t,n){return this.render(...n)}};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const eE=ab(class extends cb{constructor(e){var t;if(super(e),e.type!==sb.ATTRIBUTE||e.name!=="class"||((t=e.strings)==null?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){var r,i;if(this.it===void 0){this.it=new Set,e.strings!==void 0&&(this.st=new Set(e.strings.join(" ").split(/\s/).filter(o=>o!=="")));for(const o in t)t[o]&&!((r=this.st)!=null&&r.has(o))&&this.it.add(o);return this.render(t)}const n=e.element.classList;for(const o of this.it)o in t||(n.remove(o),this.it.delete(o));for(const o in t){const s=!!t[o];s===this.it.has(o)||(i=this.st)!=null&&i.has(o)||(s?(n.add(o),this.it.add(o)):(n.remove(o),this.it.delete(o)))}return Ri}}),tE=we`
  :host {
    display: flex !important;
  }

  slot {
    display: inline-block;
    font-style: normal;
    font-family: var(--wui-font-family);
    font-feature-settings:
      'tnum' on,
      'lnum' on,
      'case' on;
    line-height: 130%;
    font-weight: var(--wui-font-weight-regular);
    overflow: inherit;
    text-overflow: inherit;
    text-align: var(--local-align);
    color: var(--local-color);
  }

  .wui-font-large-500,
  .wui-font-large-600,
  .wui-font-large-700 {
    font-size: var(--wui-font-size-large);
    letter-spacing: var(--wui-letter-spacing-large);
  }

  .wui-font-paragraph-500,
  .wui-font-paragraph-600,
  .wui-font-paragraph-700 {
    font-size: var(--wui-font-size-paragraph);
    letter-spacing: var(--wui-letter-spacing-paragraph);
  }

  .wui-font-small-500,
  .wui-font-small-600 {
    font-size: var(--wui-font-size-small);
    letter-spacing: var(--wui-letter-spacing-small);
  }

  .wui-font-tiny-500,
  .wui-font-tiny-600 {
    font-size: var(--wui-font-size-tiny);
    letter-spacing: var(--wui-letter-spacing-tiny);
  }

  .wui-font-micro-700,
  .wui-font-micro-600 {
    font-size: var(--wui-font-size-micro);
    letter-spacing: var(--wui-letter-spacing-micro);
    text-transform: uppercase;
  }

  .wui-font-large-700,
  .wui-font-paragraph-700,
  .wui-font-micro-700 {
    font-weight: var(--wui-font-weight-bold);
  }

  .wui-font-large-600,
  .wui-font-paragraph-600,
  .wui-font-small-600,
  .wui-font-tiny-600,
  .wui-font-micro-600 {
    font-weight: var(--wui-font-weight-medium);
  }
`;var Cu=globalThis&&globalThis.__decorate||function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};let ko=class extends de{constructor(){super(...arguments),this.variant="paragraph-500",this.color="fg-300",this.align="left"}render(){const t={[`wui-font-${this.variant}`]:!0,[`wui-color-${this.color}`]:!0};return this.style.cssText=`
      --local-align: ${this.align};
      --local-color: var(--wui-color-${this.color});
    `,k`<slot class=${eE(t)}></slot>`}};ko.styles=[De,tE];Cu([M()],ko.prototype,"variant",void 0);Cu([M()],ko.prototype,"color",void 0);Cu([M()],ko.prototype,"align",void 0);ko=Cu([ue("wui-text")],ko);const nE=ge`<svg fill="none" viewBox="0 0 60 60">
  <rect width="60" height="60" fill="#1DC956" rx="30" />
  <circle cx="30" cy="30" r="3" fill="#fff" />
  <path
    fill="#2BEE6C"
    stroke="#fff"
    stroke-width="2"
    d="m45.32 17.9-.88-.42.88.42.02-.05c.1-.2.21-.44.26-.7l-.82-.15.82.16a2 2 0 0 0-.24-1.4c-.13-.23-.32-.42-.47-.57a8.42 8.42 0 0 1-.04-.04l-.04-.04a2.9 2.9 0 0 0-.56-.47l-.51.86.5-.86a2 2 0 0 0-1.4-.24c-.26.05-.5.16-.69.26l-.05.02-15.05 7.25-.1.05c-1.14.55-1.85.89-2.46 1.37a7 7 0 0 0-1.13 1.14c-.5.6-.83 1.32-1.38 2.45l-.05.11-7.25 15.05-.02.05c-.1.2-.21.43-.26.69a2 2 0 0 0 .24 1.4l.85-.5-.85.5c.13.23.32.42.47.57l.04.04.04.04c.15.15.34.34.56.47a2 2 0 0 0 1.41.24l-.2-.98.2.98c.25-.05.5-.17.69-.26l.05-.02-.42-.87.42.87 15.05-7.25.1-.05c1.14-.55 1.85-.89 2.46-1.38a7 7 0 0 0 1.13-1.13 12.87 12.87 0 0 0 1.43-2.56l7.25-15.05Z"
  />
  <path
    fill="#1DC956"
    d="M33.38 32.72 30.7 29.3 15.86 44.14l.2.2a1 1 0 0 0 1.14.2l15.1-7.27a3 3 0 0 0 1.08-4.55Z"
  />
  <path
    fill="#86F999"
    d="m26.62 27.28 2.67 3.43 14.85-14.85-.2-.2a1 1 0 0 0-1.14-.2l-15.1 7.27a3 3 0 0 0-1.08 4.55Z"
  />
  <circle cx="30" cy="30" r="3" fill="#fff" transform="rotate(45 30 30)" />
  <rect width="59" height="59" x=".5" y=".5" stroke="#062B2B" stroke-opacity=".1" rx="29.5" />
</svg> `,rE=ge`<svg viewBox="0 0 60 60" fill="none">
  <g clip-path="url(#clip0_7734_50402)">
    <path
      d="M0 24.9C0 15.6485 0 11.0228 1.97053 7.56812C3.3015 5.23468 5.23468 3.3015 7.56812 1.97053C11.0228 0 15.6485 0 24.9 0H35.1C44.3514 0 48.9772 0 52.4319 1.97053C54.7653 3.3015 56.6985 5.23468 58.0295 7.56812C60 11.0228 60 15.6485 60 24.9V35.1C60 44.3514 60 48.9772 58.0295 52.4319C56.6985 54.7653 54.7653 56.6985 52.4319 58.0295C48.9772 60 44.3514 60 35.1 60H24.9C15.6485 60 11.0228 60 7.56812 58.0295C5.23468 56.6985 3.3015 54.7653 1.97053 52.4319C0 48.9772 0 44.3514 0 35.1V24.9Z"
      fill="#EB8B47"
    />
    <path
      d="M0.5 24.9C0.5 20.2652 0.50047 16.8221 0.744315 14.105C0.987552 11.3946 1.46987 9.45504 2.40484 7.81585C3.69145 5.56019 5.56019 3.69145 7.81585 2.40484C9.45504 1.46987 11.3946 0.987552 14.105 0.744315C16.8221 0.50047 20.2652 0.5 24.9 0.5H35.1C39.7348 0.5 43.1779 0.50047 45.895 0.744315C48.6054 0.987552 50.545 1.46987 52.1841 2.40484C54.4398 3.69145 56.3086 5.56019 57.5952 7.81585C58.5301 9.45504 59.0124 11.3946 59.2557 14.105C59.4995 16.8221 59.5 20.2652 59.5 24.9V35.1C59.5 39.7348 59.4995 43.1779 59.2557 45.895C59.0124 48.6054 58.5301 50.545 57.5952 52.1841C56.3086 54.4398 54.4398 56.3086 52.1841 57.5952C50.545 58.5301 48.6054 59.0124 45.895 59.2557C43.1779 59.4995 39.7348 59.5 35.1 59.5H24.9C20.2652 59.5 16.8221 59.4995 14.105 59.2557C11.3946 59.0124 9.45504 58.5301 7.81585 57.5952C5.56019 56.3086 3.69145 54.4398 2.40484 52.1841C1.46987 50.545 0.987552 48.6054 0.744315 45.895C0.50047 43.1779 0.5 39.7348 0.5 35.1V24.9Z"
      stroke="#062B2B"
      stroke-opacity="0.1"
    />
    <path
      d="M19 52C24.5228 52 29 47.5228 29 42C29 36.4772 24.5228 32 19 32C13.4772 32 9 36.4772 9 42C9 47.5228 13.4772 52 19 52Z"
      fill="#FF974C"
      stroke="white"
      stroke-width="2"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M42.8437 8.3264C42.4507 7.70891 41.5493 7.70891 41.1564 8.32641L28.978 27.4638C28.5544 28.1295 29.0326 29.0007 29.8217 29.0007H54.1783C54.9674 29.0007 55.4456 28.1295 55.022 27.4638L42.8437 8.3264Z"
      fill="white"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M42.3348 11.6456C42.659 11.7608 42.9061 12.1492 43.4005 12.926L50.7332 24.4488C51.2952 25.332 51.5763 25.7737 51.5254 26.1382C51.4915 26.3808 51.3698 26.6026 51.1833 26.7614C50.9031 27 50.3796 27 49.3327 27H34.6673C33.6204 27 33.0969 27 32.8167 26.7614C32.6302 26.6026 32.5085 26.3808 32.4746 26.1382C32.4237 25.7737 32.7048 25.332 33.2669 24.4488L40.5995 12.926C41.0939 12.1492 41.341 11.7608 41.6652 11.6456C41.8818 11.5687 42.1182 11.5687 42.3348 11.6456ZM35.0001 26.999C38.8661 26.999 42.0001 23.865 42.0001 19.999C42.0001 23.865 45.1341 26.999 49.0001 26.999H35.0001Z"
      fill="#FF974C"
    />
    <path
      d="M10.1061 9.35712C9.9973 9.67775 9.99867 10.0388 9.99978 10.3323C9.99989 10.3611 10 10.3893 10 10.4167V25.5833C10 25.6107 9.99989 25.6389 9.99978 25.6677C9.99867 25.9612 9.9973 26.3222 10.1061 26.6429C10.306 27.2317 10.7683 27.694 11.3571 27.8939C11.6777 28.0027 12.0388 28.0013 12.3323 28.0002C12.3611 28.0001 12.3893 28 12.4167 28H19C24.5228 28 29 23.5228 29 18C29 12.4772 24.5228 8 19 8H12.4167C12.3893 8 12.3611 7.99989 12.3323 7.99978C12.0388 7.99867 11.6778 7.9973 11.3571 8.10614C10.7683 8.306 10.306 8.76834 10.1061 9.35712Z"
      fill="#FF974C"
      stroke="white"
      stroke-width="2"
    />
    <circle cx="19" cy="18" r="4" fill="#EB8B47" stroke="white" stroke-width="2" />
    <circle cx="19" cy="42" r="4" fill="#EB8B47" stroke="white" stroke-width="2" />
  </g>
  <defs>
    <clipPath id="clip0_7734_50402">
      <rect width="60" height="60" fill="white" />
    </clipPath>
  </defs>
</svg> `,iE=ge`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <path
      fill="#1DC956"
      d="M0 25.01c0-9.25 0-13.88 1.97-17.33a15 15 0 0 1 5.6-5.6C11.02.11 15.65.11 24.9.11h10.2c9.25 0 13.88 0 17.33 1.97a15 15 0 0 1 5.6 5.6C60 11.13 60 15.76 60 25v10.2c0 9.25 0 13.88-1.97 17.33a15 15 0 0 1-5.6 5.6c-3.45 1.97-8.08 1.97-17.33 1.97H24.9c-9.25 0-13.88 0-17.33-1.97a15 15 0 0 1-5.6-5.6C0 49.1 0 44.46 0 35.21v-10.2Z"
    />
    <path
      fill="#2BEE6C"
      d="M16.1 60c-3.82-.18-6.4-.64-8.53-1.86a15 15 0 0 1-5.6-5.6C.55 50.06.16 46.97.04 41.98L4.2 40.6a4 4 0 0 0 2.48-2.39l4.65-12.4a2 2 0 0 1 2.5-1.2l2.53.84a2 2 0 0 0 2.43-1l2.96-5.94a2 2 0 0 1 3.7.32l3.78 12.58a2 2 0 0 0 3.03 1.09l3.34-2.23a2 2 0 0 0 .65-.7l5.3-9.72a2 2 0 0 1 1.42-1.01l4.14-.69a2 2 0 0 1 1.6.44l3.9 3.24a2 2 0 0 0 2.7-.12l4.62-4.63c.08 2.2.08 4.8.08 7.93v10.2c0 9.25 0 13.88-1.97 17.33a15 15 0 0 1-5.6 5.6c-2.13 1.22-4.7 1.68-8.54 1.86H16.11Z"
    />
    <path
      fill="#fff"
      d="m.07 43.03-.05-2.1 3.85-1.28a3 3 0 0 0 1.86-1.79l4.66-12.4a3 3 0 0 1 3.75-1.8l2.53.84a1 1 0 0 0 1.21-.5l2.97-5.94a3 3 0 0 1 5.56.48l3.77 12.58a1 1 0 0 0 1.51.55l3.34-2.23a1 1 0 0 0 .33-.35l5.3-9.71a3 3 0 0 1 2.14-1.53l4.13-.69a3 3 0 0 1 2.41.66l3.9 3.24a1 1 0 0 0 1.34-.06l5.28-5.28c.05.85.08 1.75.1 2.73L56 22.41a3 3 0 0 1-4.04.19l-3.9-3.25a1 1 0 0 0-.8-.21l-4.13.69a1 1 0 0 0-.72.5l-5.3 9.72a3 3 0 0 1-.97 1.05l-3.34 2.23a3 3 0 0 1-4.53-1.63l-3.78-12.58a1 1 0 0 0-1.85-.16l-2.97 5.94a3 3 0 0 1-3.63 1.5l-2.53-.84a1 1 0 0 0-1.25.6l-4.65 12.4a5 5 0 0 1-3.1 3L.07 43.02Z"
    />
    <path
      fill="#fff"
      fill-rule="evenodd"
      d="M49.5 19a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Z"
      clip-rule="evenodd"
    />
    <path fill="#fff" d="M45 .28v59.66l-2 .1V.19c.7.02 1.37.05 2 .1Z" />
    <path fill="#2BEE6C" d="M47.5 19a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" />
    <path
      stroke="#fff"
      stroke-opacity=".1"
      d="M.5 25.01c0-4.63 0-8.08.24-10.8.25-2.7.73-4.64 1.66-6.28a14.5 14.5 0 0 1 5.42-5.41C9.46 1.58 11.39 1.1 14.1.85A133 133 0 0 1 24.9.61h10.2c4.63 0 8.08 0 10.8.24 2.7.25 4.65.73 6.28 1.67a14.5 14.5 0 0 1 5.42 5.4c.93 1.65 1.41 3.58 1.66 6.3.24 2.71.24 6.16.24 10.79v10.2c0 4.64 0 8.08-.24 10.8-.25 2.7-.73 4.65-1.66 6.28a14.5 14.5 0 0 1-5.42 5.42c-1.63.93-3.57 1.41-6.28 1.66-2.72.24-6.17.24-10.8.24H24.9c-4.63 0-8.08 0-10.8-.24-2.7-.25-4.64-.73-6.28-1.66a14.5 14.5 0 0 1-5.42-5.42C1.47 50.66 1 48.72.74 46.01A133 133 0 0 1 .5 35.2v-10.2Z"
    />
  </g>
  <defs>
    <clipPath id="a"><path fill="#fff" d="M0 0h60v60H0z" /></clipPath>
  </defs>
</svg>`,oE=ge`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <rect width="60" height="60" fill="#C653C6" rx="30" />
    <path
      fill="#E87DE8"
      d="M57.98.01v19.5a4.09 4.09 0 0 0-2.63 2.29L50.7 34.2a2 2 0 0 1-2.5 1.2l-2.53-.84a2 2 0 0 0-2.42 1l-2.97 5.94a2 2 0 0 1-3.7-.32L32.8 28.6a2 2 0 0 0-3.02-1.09l-3.35 2.23a2 2 0 0 0-.64.7l-5.3 9.72a2 2 0 0 1-1.43 1.01l-4.13.69a2 2 0 0 1-1.61-.44l-3.9-3.24a2 2 0 0 0-2.69.12L2.1 42.93.02 43V.01h57.96Z"
    />
    <path
      fill="#fff"
      d="m61.95 16.94.05 2.1-3.85 1.28a3 3 0 0 0-1.86 1.79l-4.65 12.4a3 3 0 0 1-3.76 1.8l-2.53-.84a1 1 0 0 0-1.2.5l-2.98 5.94a3 3 0 0 1-5.55-.48l-3.78-12.58a1 1 0 0 0-1.5-.55l-3.35 2.23a1 1 0 0 0-.32.35l-5.3 9.72a3 3 0 0 1-2.14 1.52l-4.14.69a3 3 0 0 1-2.41-.66l-3.9-3.24a1 1 0 0 0-1.34.06l-5.28 5.28c-.05-.84-.08-1.75-.1-2.73l3.97-3.96a3 3 0 0 1 4.04-.19l3.89 3.25a1 1 0 0 0 .8.21l4.14-.68a1 1 0 0 0 .71-.51l5.3-9.71a3 3 0 0 1 .97-1.06l3.34-2.23a3 3 0 0 1 4.54 1.63l3.77 12.58a1 1 0 0 0 1.86.16l2.96-5.93a3 3 0 0 1 3.64-1.5l2.52.83a1 1 0 0 0 1.25-.6l4.66-12.4a5 5 0 0 1 3.1-2.99l4.43-1.48Z"
    />
    <path
      fill="#fff"
      fill-rule="evenodd"
      d="M35.5 27a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Z"
      clip-rule="evenodd"
    />
    <path fill="#fff" d="M31 0v60h-2V0h2Z" />
    <path fill="#E87DE8" d="M33.5 27a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" />
  </g>
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="29.5" />
  <defs>
    <clipPath id="a"><rect width="60" height="60" fill="#fff" rx="30" /></clipPath>
  </defs>
</svg> `,sE=ge`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <rect width="60" height="60" fill="#987DE8" rx="30" />
    <path
      fill="#fff"
      fill-rule="evenodd"
      d="m15.48 28.37 11.97-19.3a3 3 0 0 1 5.1 0l11.97 19.3a6 6 0 0 1 .9 3.14v.03a6 6 0 0 1-1.16 3.56L33.23 50.2a4 4 0 0 1-6.46 0L15.73 35.1a6 6 0 0 1-1.15-3.54v-.03a6 6 0 0 1 .9-3.16Z"
      clip-rule="evenodd"
    />
    <path
      fill="#643CDD"
      d="M30.84 10.11a1 1 0 0 0-.84-.46V24.5l12.6 5.53a2 2 0 0 0-.28-1.4L30.84 10.11Z"
    />
    <path
      fill="#BDADEB"
      d="M30 9.65a1 1 0 0 0-.85.46L17.66 28.64a2 2 0 0 0-.26 1.39L30 24.5V9.65Z"
    />
    <path
      fill="#643CDD"
      d="M30 50.54a1 1 0 0 0 .8-.4l11.24-15.38c.3-.44-.2-1-.66-.73l-9.89 5.68a3 3 0 0 1-1.5.4v10.43Z"
    />
    <path
      fill="#BDADEB"
      d="m17.97 34.76 11.22 15.37c.2.28.5.41.8.41V40.11a3 3 0 0 1-1.49-.4l-9.88-5.68c-.47-.27-.97.3-.65.73Z"
    />
    <path
      fill="#401AB3"
      d="M42.6 30.03 30 24.5v13.14a3 3 0 0 0 1.5-.4l10.14-5.83a2 2 0 0 0 .95-1.38Z"
    />
    <path
      fill="#7C5AE2"
      d="M30 37.64V24.46l-12.6 5.57a2 2 0 0 0 .97 1.39l10.13 5.82a3 3 0 0 0 1.5.4Z"
    />
  </g>
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="29.5" />
  <defs>
    <clipPath id="a"><rect width="60" height="60" fill="#fff" rx="30" /></clipPath>
  </defs>
</svg> `,aE=ge`<svg fill="none" viewBox="0 0 60 60">
  <rect width="60" height="60" fill="#1DC956" rx="3" />
  <path
    fill="#1FAD7E"
    stroke="#fff"
    stroke-width="2"
    d="m30.49 29.13-.49-.27-.49.27-12.77 7.1-.05.02c-.86.48-1.58.88-2.1 1.24-.54.37-1.04.81-1.28 1.45a3 3 0 0 0 0 2.12c.24.63.74 1.08 1.27 1.45.53.36 1.25.76 2.11 1.24l.05.03 6.33 3.51.17.1c2.33 1.3 3.72 2.06 5.22 2.32a9 9 0 0 0 3.08 0c1.5-.26 2.9-1.03 5.22-2.32l.18-.1 6.32-3.51.05-.03a26.9 26.9 0 0 0 2.1-1.24 3.21 3.21 0 0 0 1.28-1.45l-.94-.35.94.35a3 3 0 0 0 0-2.12l-.94.35.94-.35a3.21 3.21 0 0 0-1.27-1.45c-.53-.36-1.25-.76-2.11-1.24l-.05-.03-12.77-7.1Z"
  />
  <path
    fill="#2BEE6C"
    stroke="#fff"
    stroke-width="2"
    d="m30.49 19.13-.49-.27-.49.27-12.77 7.1-.05.02c-.86.48-1.58.88-2.1 1.24-.54.37-1.04.81-1.28 1.45a3 3 0 0 0 0 2.12c.24.63.74 1.08 1.27 1.45.53.36 1.25.76 2.11 1.24l.05.03 6.33 3.51.17.1c2.33 1.3 3.72 2.06 5.22 2.32a9 9 0 0 0 3.08 0c1.5-.26 2.9-1.03 5.22-2.32l.18-.1 6.32-3.51.05-.03a26.9 26.9 0 0 0 2.1-1.24 3.21 3.21 0 0 0 1.28-1.45l-.94-.35.94.35a3 3 0 0 0 0-2.12l-.94.35.94-.35a3.21 3.21 0 0 0-1.27-1.45c-.53-.36-1.25-.76-2.11-1.24l-.05-.03-12.77-7.1Z"
  />
  <path
    fill="#86F999"
    stroke="#fff"
    stroke-width="2"
    d="m46.69 21.06-.94-.35.94.35a3 3 0 0 0 0-2.12l-.94.35.94-.35a3.21 3.21 0 0 0-1.27-1.45c-.53-.36-1.25-.76-2.11-1.24l-.05-.03-6.32-3.51-.18-.1c-2.33-1.3-3.72-2.06-5.22-2.33a9 9 0 0 0-3.08 0c-1.5.27-2.9 1.04-5.22 2.33l-.17.1-6.33 3.51-.05.03c-.86.48-1.58.88-2.1 1.24-.54.37-1.04.81-1.28 1.45a3 3 0 0 0 0 2.12c.24.63.74 1.08 1.27 1.45.53.36 1.25.76 2.11 1.24l.05.03 6.33 3.51.17.1c2.33 1.3 3.72 2.06 5.22 2.32a9 9 0 0 0 3.08 0c1.5-.26 2.9-1.03 5.22-2.32l.18-.1 6.32-3.51.05-.03a26.9 26.9 0 0 0 2.1-1.24 3.21 3.21 0 0 0 1.28-1.45Z"
  />
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="2.5" />
</svg>`,cE=ge`<svg fill="none" viewBox="0 0 60 60">
  <rect width="60" height="60" fill="#C653C6" rx="3" />
  <path
    fill="#fff"
    d="M20.03 15.22C20 15.6 20 16.07 20 17v2.8c0 1.14 0 1.7-.2 2.12-.15.31-.3.5-.58.71-.37.28-1.06.42-2.43.7-.59.12-1.11.29-1.6.51a9 9 0 0 0-4.35 4.36C10 30 10 32.34 10 37c0 4.66 0 7 .84 8.8a9 9 0 0 0 4.36 4.36C17 51 19.34 51 24 51h12c4.66 0 7 0 8.8-.84a9 9 0 0 0 4.36-4.36C50 44 50 41.66 50 37c0-4.66 0-7-.84-8.8a9 9 0 0 0-4.36-4.36c-.48-.22-1-.39-1.6-.5-1.36-.29-2.05-.43-2.42-.7-.27-.22-.43-.4-.58-.72-.2-.42-.2-.98-.2-2.11V17c0-.93 0-1.4-.03-1.78a9 9 0 0 0-8.19-8.19C31.4 7 30.93 7 30 7s-1.4 0-1.78.03a9 9 0 0 0-8.19 8.19Z"
  />
  <path
    fill="#E87DE8"
    d="M22 17c0-.93 0-1.4.04-1.78a7 7 0 0 1 6.18-6.18C28.6 9 29.07 9 30 9s1.4 0 1.78.04a7 7 0 0 1 6.18 6.18c.04.39.04.85.04 1.78v4.5a1.5 1.5 0 0 1-3 0V17c0-.93 0-1.4-.08-1.78a4 4 0 0 0-3.14-3.14C31.39 12 30.93 12 30 12s-1.4 0-1.78.08a4 4 0 0 0-3.14 3.14c-.08.39-.08.85-.08 1.78v4.5a1.5 1.5 0 0 1-3 0V17Z"
  />
  <path
    fill="#E87DE8"
    fill-rule="evenodd"
    d="M12 36.62c0-4.32 0-6.48.92-8.09a7 7 0 0 1 2.61-2.61C17.14 25 19.3 25 23.62 25h6.86c.46 0 .7 0 .9.02 2.73.22 4.37 2.43 4.62 4.98.27-2.7 2.11-5 5.02-5A6.98 6.98 0 0 1 48 31.98v5.4c0 4.32 0 6.48-.92 8.09a7 7 0 0 1-2.61 2.61c-1.61.92-3.77.92-8.09.92h-5.86c-.46 0-.7 0-.9-.02-2.73-.22-4.37-2.43-4.62-4.98-.26 2.58-1.94 4.82-4.71 4.99l-.7.01c-.55 0-.82 0-1.05-.02a7 7 0 0 1-6.52-6.52c-.02-.23-.02-.5-.02-1.05v-4.79Zm21.24-.27a4 4 0 1 0-6.48 0 31.28 31.28 0 0 1 1.57 2.23c.17.4.17.81.17 1.24V42.5a1.5 1.5 0 0 0 3 0V39.82c0-.43 0-.85.17-1.24.09-.2.58-.87 1.57-2.23Z"
    clip-rule="evenodd"
  />
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="2.5" />
</svg>`,lE=ge`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <path
      fill="#EB8B47"
      d="M0 24.9c0-9.25 0-13.88 1.97-17.33a15 15 0 0 1 5.6-5.6C11.02 0 15.65 0 24.9 0h10.2c9.25 0 13.88 0 17.33 1.97a15 15 0 0 1 5.6 5.6C60 11.02 60 15.65 60 24.9v10.2c0 9.25 0 13.88-1.97 17.33a15 15 0 0 1-5.6 5.6C48.98 60 44.35 60 35.1 60H24.9c-9.25 0-13.88 0-17.33-1.97a15 15 0 0 1-5.6-5.6C0 48.98 0 44.35 0 35.1V24.9Z"
    />
    <path
      stroke="#062B2B"
      stroke-opacity=".1"
      d="M.5 24.9c0-4.64 0-8.08.24-10.8.25-2.7.73-4.65 1.66-6.28A14.5 14.5 0 0 1 7.82 2.4C9.46 1.47 11.39 1 14.1.74A133 133 0 0 1 24.9.5h10.2c4.63 0 8.08 0 10.8.24 2.7.25 4.65.73 6.28 1.66a14.5 14.5 0 0 1 5.42 5.42c.93 1.63 1.41 3.57 1.66 6.28.24 2.72.24 6.16.24 10.8v10.2c0 4.63 0 8.08-.24 10.8-.25 2.7-.73 4.64-1.66 6.28a14.5 14.5 0 0 1-5.42 5.41c-1.63.94-3.57 1.42-6.28 1.67-2.72.24-6.17.24-10.8.24H24.9c-4.63 0-8.08 0-10.8-.24-2.7-.25-4.64-.73-6.28-1.67a14.5 14.5 0 0 1-5.42-5.4C1.47 50.53 1 48.6.74 45.88A133 133 0 0 1 .5 35.1V24.9Z"
    />
    <path
      fill="#FF974C"
      stroke="#fff"
      stroke-width="2"
      d="M39.2 29.2a13 13 0 1 0-18.4 0l1.3 1.28a12.82 12.82 0 0 1 2.1 2.39 6 6 0 0 1 .6 1.47c.2.76.2 1.56.2 3.17v11.24c0 1.08 0 1.61.13 2.12a4 4 0 0 0 .41.98c.26.45.64.83 1.4 1.6l.3.29c.65.65.98.98 1.36 1.09.26.07.54.07.8 0 .38-.11.7-.44 1.36-1.1l3.48-3.47c.65-.65.98-.98 1.09-1.36a1.5 1.5 0 0 0 0-.8c-.1-.38-.44-.7-1.1-1.36l-.47-.48c-.65-.65-.98-.98-1.09-1.36a1.5 1.5 0 0 1 0-.8c.1-.38.44-.7 1.1-1.36l.47-.48c.65-.65.98-.98 1.09-1.36a1.5 1.5 0 0 0 0-.8c-.1-.38-.44-.7-1.1-1.36l-.48-.5c-.65-.64-.98-.97-1.08-1.35a1.5 1.5 0 0 1 0-.79c.1-.38.42-.7 1.06-1.36l5.46-5.55Z"
    />
    <circle cx="30" cy="17" r="4" fill="#EB8B47" stroke="#fff" stroke-width="2" />
  </g>
  <defs>
    <clipPath id="a"><path fill="#fff" d="M0 0h60v60H0z" /></clipPath>
  </defs>
</svg> `,uE=ge`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <rect width="60" height="60" fill="#00ACE6" rx="30" />
    <circle cx="64" cy="39" r="50" fill="#1AC6FF" stroke="#fff" stroke-width="2" />
    <circle cx="78" cy="30" r="50" fill="#4DD2FF" stroke="#fff" stroke-width="2" />
    <circle cx="72" cy="15" r="35" fill="#80DFFF" stroke="#fff" stroke-width="2" />
    <circle cx="34" cy="-17" r="45" stroke="#fff" stroke-width="2" />
    <circle cx="34" cy="-5" r="50" stroke="#fff" stroke-width="2" />
    <circle cx="30" cy="45" r="4" fill="#4DD2FF" stroke="#fff" stroke-width="2" />
    <circle cx="39.5" cy="27.5" r="4" fill="#80DFFF" stroke="#fff" stroke-width="2" />
    <circle cx="16" cy="24" r="4" fill="#19C6FF" stroke="#fff" stroke-width="2" />
  </g>
  <rect width="59" height="59" x=".5" y=".5" stroke="#062B2B" stroke-opacity=".1" rx="29.5" />
  <defs>
    <clipPath id="a"><rect width="60" height="60" fill="#fff" rx="30" /></clipPath>
  </defs>
</svg>`,dE=ge`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <rect width="60" height="60" fill="#C653C6" rx="3" />
    <path
      fill="#E87DE8"
      stroke="#fff"
      stroke-width="2"
      d="M52.1 47.34c0-4.24-1.44-9.55-5.9-12.4a2.86 2.86 0 0 0-1.6-3.89v-.82c0-1.19-.52-2.26-1.35-3a4.74 4.74 0 0 0-2.4-6.26v-5.5a11.31 11.31 0 1 0-22.63 0v2.15a3.34 3.34 0 0 0-1.18 5.05 4.74 4.74 0 0 0-.68 6.44A5.22 5.22 0 0 0 14 35.92c-3.06 4.13-6.1 8.3-6.1 15.64 0 2.67.37 4.86.74 6.39a20.3 20.3 0 0 0 .73 2.39l.02.04v.01l.92-.39-.92.4.26.6h38.26l.3-.49-.87-.51.86.5.02-.01.03-.07a16.32 16.32 0 0 0 .57-1.05c.36-.72.85-1.74 1.33-2.96a25.51 25.51 0 0 0 1.94-9.07Z"
    />
    <path
      fill="#fff"
      fill-rule="evenodd"
      d="M26.5 29.5c-3-.5-5.5-3-5.5-7v-7c0-.47 0-.7.03-.9a3 3 0 0 1 2.58-2.57c.2-.03.42-.03.89-.03 2 0 2.5-2.5 2.5-2.5s0 2.5 2.5 2.5c1.4 0 2.1 0 2.65.23a3 3 0 0 1 1.62 1.62c.23.55.23 1.25.23 2.65v6c0 4-3 7-6.5 7 1.35.23 4 0 6.5-2v9.53C34 38.5 31.5 40 28 40s-6-1.5-6-2.97L24 34l2.5 1.5v-6ZM26 47h4.5c2.5 0 3 4 3 5.5h-3l-1-1.5H26v-4Zm-6.25 5.5H24V57h-8c0-1 1-4.5 3.75-4.5Z"
      clip-rule="evenodd"
    />
  </g>
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="2.5" />
  <defs>
    <clipPath id="a"><rect width="60" height="60" fill="#fff" rx="3" /></clipPath>
  </defs>
</svg> `,fE=ge`<svg fill="none" viewBox="0 0 60 60">
  <rect width="60" height="60" fill="#794CFF" rx="3" />
  <path
    fill="#987DE8"
    stroke="#fff"
    stroke-width="2"
    d="M33 22.5v-1H16v5H8.5V36H13v-5h3v7.5h17V31h1v7.5h17v-17H34v5h-1v-4Z"
  />
  <path fill="#fff" d="M37.5 25h10v10h-10z" />
  <path fill="#4019B2" d="M42.5 25h5v10h-5z" />
  <path fill="#fff" d="M19.5 25h10v10h-10z" />
  <path fill="#4019B2" d="M24.5 25h5v10h-5z" />
  <path fill="#fff" d="M12 30.5h4V37h-4v-6.5Z" />
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="2.5" />
</svg>`,hE=ge`<svg
  viewBox="0 0 60 60"
  fill="none"
>
  <g clip-path="url(#1)">
    <rect width="60" height="60" rx="30" fill="#00ACE6" />
    <path
      d="M59 73C59 89.0163 46.0163 102 30 102C13.9837 102 1 89.0163 1 73C1 56.9837 12 44 30 44C48 44 59 56.9837 59 73Z"
      fill="#1AC6FF"
      stroke="white"
      stroke-width="2"
    />
    <path
      d="M18.6904 19.9015C19.6264 15.3286 23.3466 11.8445 27.9708 11.2096C29.3231 11.024 30.6751 11.0238 32.0289 11.2096C36.6532 11.8445 40.3733 15.3286 41.3094 19.9015C41.4868 20.7681 41.6309 21.6509 41.7492 22.5271C41.8811 23.5041 41.8811 24.4944 41.7492 25.4715C41.6309 26.3476 41.4868 27.2304 41.3094 28.097C40.3733 32.6699 36.6532 36.154 32.0289 36.7889C30.6772 36.9744 29.3216 36.9743 27.9708 36.7889C23.3466 36.154 19.6264 32.6699 18.6904 28.097C18.513 27.2304 18.3689 26.3476 18.2506 25.4715C18.1186 24.4944 18.1186 23.5041 18.2506 22.5271C18.3689 21.6509 18.513 20.7681 18.6904 19.9015Z"
      fill="#1AC6FF"
      stroke="white"
      stroke-width="2"
    />
    <circle cx="24.5" cy="23.5" r="1.5" fill="white" />
    <circle cx="35.5" cy="23.5" r="1.5" fill="white" />
    <path
      d="M31 20L28 28H32"
      stroke="white"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </g>
  <rect x="0.5" y="0.5" width="59" height="59" rx="29.5" stroke="white" stroke-opacity="0.1" />
  <defs>
    <clipPath id="1">
      <rect width="60" height="60" rx="30" fill="white" />
    </clipPath>
  </defs>
</svg> `,pE=ge`<svg viewBox="0 0 60 60" fill="none">
  <g clip-path="url(#1)">
    <path
      d="M0 24.9C0 15.6485 0 11.0228 1.97053 7.56812C3.3015 5.23468 5.23468 3.3015 7.56812 1.97053C11.0228 0 15.6485 0 24.9 0H35.1C44.3514 0 48.9772 0 52.4319 1.97053C54.7653 3.3015 56.6985 5.23468 58.0295 7.56812C60 11.0228 60 15.6485 60 24.9V35.1C60 44.3514 60 48.9772 58.0295 52.4319C56.6985 54.7653 54.7653 56.6985 52.4319 58.0295C48.9772 60 44.3514 60 35.1 60H24.9C15.6485 60 11.0228 60 7.56812 58.0295C5.23468 56.6985 3.3015 54.7653 1.97053 52.4319C0 48.9772 0 44.3514 0 35.1V24.9Z"
      fill="#794CFF"
    />
    <path
      d="M0.5 24.9C0.5 20.2652 0.50047 16.8221 0.744315 14.105C0.987552 11.3946 1.46987 9.45504 2.40484 7.81585C3.69145 5.56019 5.56019 3.69145 7.81585 2.40484C9.45504 1.46987 11.3946 0.987552 14.105 0.744315C16.8221 0.50047 20.2652 0.5 24.9 0.5H35.1C39.7348 0.5 43.1779 0.50047 45.895 0.744315C48.6054 0.987552 50.545 1.46987 52.1841 2.40484C54.4398 3.69145 56.3086 5.56019 57.5952 7.81585C58.5301 9.45504 59.0124 11.3946 59.2557 14.105C59.4995 16.8221 59.5 20.2652 59.5 24.9V35.1C59.5 39.7348 59.4995 43.1779 59.2557 45.895C59.0124 48.6054 58.5301 50.545 57.5952 52.1841C56.3086 54.4398 54.4398 56.3086 52.1841 57.5952C50.545 58.5301 48.6054 59.0124 45.895 59.2557C43.1779 59.4995 39.7348 59.5 35.1 59.5H24.9C20.2652 59.5 16.8221 59.4995 14.105 59.2557C11.3946 59.0124 9.45504 58.5301 7.81585 57.5952C5.56019 56.3086 3.69145 54.4398 2.40484 52.1841C1.46987 50.545 0.987552 48.6054 0.744315 45.895C0.50047 43.1779 0.5 39.7348 0.5 35.1V24.9Z"
      stroke="#062B2B"
      stroke-opacity="0.1"
    />
    <path
      d="M35.1403 31.5016C35.1193 30.9637 35.388 30.4558 35.8446 30.1707C36.1207 29.9982 36.4761 29.8473 36.7921 29.7685C37.3143 29.6382 37.8664 29.7977 38.2386 30.1864C38.8507 30.8257 39.3004 31.6836 39.8033 32.408C40.2796 33.0942 41.4695 33.2512 41.9687 32.5047C42.4839 31.7341 42.9405 30.8229 43.572 30.1399C43.9375 29.7447 44.4866 29.5756 45.0111 29.6967C45.3283 29.7701 45.6863 29.9147 45.9655 30.0823C46.4269 30.3595 46.7045 30.8626 46.6928 31.4008C46.6731 32.3083 46.3764 33.2571 46.2158 34.1473C46.061 35.0048 46.9045 35.8337 47.7592 35.664C48.6464 35.4878 49.5899 35.1747 50.497 35.1391C51.0348 35.1181 51.5427 35.3868 51.8279 35.8433C52.0004 36.1195 52.1513 36.4749 52.2301 36.7908C52.3604 37.3131 52.2009 37.8651 51.8121 38.2374C51.1729 38.8495 50.3151 39.2991 49.5908 39.8019C48.9046 40.2782 48.7473 41.4683 49.4939 41.9675C50.2644 42.4827 51.1757 42.9393 51.8587 43.5708C52.2539 43.9362 52.423 44.4854 52.3018 45.0099C52.2285 45.3271 52.0839 45.6851 51.9162 45.9642C51.6391 46.4257 51.1359 46.7032 50.5978 46.6916C49.6903 46.6719 48.7417 46.3753 47.8516 46.2146C46.9939 46.0598 46.1648 46.9035 46.3346 47.7583C46.5108 48.6454 46.8239 49.5888 46.8594 50.4958C46.8805 51.0336 46.6117 51.5415 46.1552 51.8267C45.879 51.9992 45.5236 52.15 45.2077 52.2289C44.6854 52.3592 44.1334 52.1997 43.7611 51.8109C43.1491 51.1718 42.6996 50.314 42.1968 49.5897C41.7203 48.9034 40.5301 48.7463 40.0309 49.493C39.5157 50.2634 39.0592 51.1746 38.4278 51.8574C38.0623 52.2527 37.5132 52.4218 36.9887 52.3006C36.6715 52.2273 36.3135 52.0826 36.0343 51.915C35.5729 51.6379 35.2953 51.1347 35.307 50.5966C35.3267 49.6891 35.6233 48.7405 35.7839 47.8505C35.9388 46.9928 35.0951 46.1636 34.2402 46.3334C33.3531 46.5096 32.4098 46.8227 31.5028 46.8582C30.9649 46.8793 30.457 46.6105 30.1719 46.154C29.9994 45.8778 29.8485 45.5224 29.7697 45.2065C29.6394 44.6842 29.7989 44.1322 30.1877 43.7599C30.8269 43.1479 31.6847 42.6982 32.4091 42.1954C33.0954 41.7189 33.2522 40.5289 32.5056 40.0297C31.7351 39.5145 30.824 39.058 30.1411 38.4265C29.7459 38.0611 29.5768 37.5119 29.698 36.9875C29.7713 36.6702 29.9159 36.3122 30.0836 36.0331C30.3607 35.5717 30.8638 35.2941 31.402 35.3058C32.3095 35.3255 33.2583 35.6221 34.1485 35.7828C35.006 35.9376 35.8349 35.094 35.6652 34.2393C35.489 33.3521 35.1759 32.4087 35.1403 31.5016Z"
      fill="#906EF7"
      stroke="white"
      stroke-width="2"
    />
    <path
      d="M20.7706 8.22357C20.9036 7.51411 21.5231 7 22.2449 7H23.7551C24.4769 7 25.0964 7.51411 25.2294 8.22357C25.5051 9.69403 25.4829 11.6321 27.1202 12.2606C27.3092 12.3331 27.4958 12.4105 27.6798 12.4926C29.2818 13.2072 30.6374 11.8199 31.8721 10.9752C32.4678 10.5676 33.2694 10.6421 33.7798 11.1525L34.8477 12.2204C35.3581 12.7308 35.4326 13.5323 35.025 14.128C34.1802 15.3627 32.7931 16.7183 33.5077 18.3202C33.5898 18.5043 33.6672 18.6909 33.7398 18.88C34.3683 20.5171 36.3061 20.4949 37.7764 20.7706C38.4859 20.9036 39 21.5231 39 22.2449V23.7551C39 24.4769 38.4859 25.0964 37.7764 25.2294C36.3061 25.5051 34.3685 25.483 33.7401 27.1201C33.6675 27.3093 33.59 27.4961 33.5079 27.6803C32.7934 29.282 34.1803 30.6374 35.025 31.8719C35.4326 32.4677 35.3581 33.2692 34.8477 33.7796L33.7798 34.8475C33.2694 35.3579 32.4678 35.4324 31.8721 35.0248C30.6376 34.1801 29.2823 32.7934 27.6806 33.508C27.4962 33.5903 27.3093 33.6678 27.12 33.7405C25.483 34.3688 25.5051 36.3062 25.2294 37.7764C25.0964 38.4859 24.4769 39 23.7551 39H22.2449C21.5231 39 20.9036 38.4859 20.7706 37.7764C20.4949 36.3062 20.517 34.3688 18.88 33.7405C18.6908 33.6678 18.5039 33.5903 18.3196 33.5081C16.7179 32.7936 15.3625 34.1804 14.1279 35.0251C13.5322 35.4327 12.7307 35.3582 12.2203 34.8478L11.1524 33.7799C10.642 33.2695 10.5675 32.4679 10.9751 31.8722C11.8198 30.6376 13.2067 29.2822 12.4922 27.6804C12.41 27.4962 12.3325 27.3093 12.2599 27.1201C11.6315 25.483 9.69392 25.5051 8.22357 25.2294C7.51411 25.0964 7 24.4769 7 23.7551V22.2449C7 21.5231 7.51411 20.9036 8.22357 20.7706C9.69394 20.4949 11.6317 20.5171 12.2602 18.88C12.3328 18.6909 12.4103 18.5042 12.4924 18.3201C13.207 16.7181 11.8198 15.3625 10.975 14.1278C10.5674 13.5321 10.6419 12.7305 11.1523 12.2201L12.2202 11.1522C12.7306 10.6418 13.5322 10.5673 14.1279 10.9749C15.3626 11.8197 16.7184 13.2071 18.3204 12.4925C18.5044 12.4105 18.6909 12.3331 18.8799 12.2606C20.5171 11.6321 20.4949 9.69403 20.7706 8.22357Z"
      fill="#906EF7"
      stroke="white"
      stroke-width="2"
    />
    <circle cx="23" cy="23" r="6" fill="#794CFF" stroke="white" stroke-width="2" />
    <circle cx="41" cy="41" r="4" fill="#794CFF" stroke="white" stroke-width="2" />
  </g>
  <defs>
    <clipPath id="1">
      <rect width="60" height="60" fill="white" />
    </clipPath>
  </defs>
</svg> `,mE=we`
  :host {
    display: block;
    width: 55px;
    height: 55px;
  }
`;var lb=globalThis&&globalThis.__decorate||function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};const gE={browser:nE,dao:rE,defi:iE,defiAlt:oE,eth:sE,layers:aE,lock:cE,login:lE,network:uE,nft:dE,noun:fE,profile:hE,system:pE};let hl=class extends de{constructor(){super(...arguments),this.name="browser"}render(){return k`${gE[this.name]}`}};hl.styles=[De,mE];lb([M()],hl.prototype,"name",void 0);hl=lb([ue("wui-visual")],hl);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ke=e=>e??at,Ye={getSpacingStyles(e,t){if(Array.isArray(e))return e[t]?`var(--wui-spacing-${e[t]})`:void 0;if(typeof e=="string")return`var(--wui-spacing-${e})`},getFormattedDate(e){return new Intl.DateTimeFormat("en-US",{month:"short",day:"numeric"}).format(e)},getHostName(e){return new URL(e).hostname},getTruncateString({string:e,charsStart:t,charsEnd:n,truncate:r}){return e.length<=t+n?e:r==="end"?`${e.substring(0,t)}...`:r==="start"?`...${e.substring(e.length-n)}`:`${e.substring(0,Math.floor(t))}...${e.substring(e.length-Math.floor(n))}`},generateAvatarColors(e){const n=e.toLowerCase().replace(/^0x/iu,"").substring(0,6),r=this.hexToRgb(n),i=[];for(let o=0;o<5;o+=1){const s=this.tintColor(r,.15*o);i.push(`rgb(${s[0]}, ${s[1]}, ${s[2]})`)}return`
    --local-color-1: ${i[0]};
    --local-color-2: ${i[1]};
    --local-color-3: ${i[2]};
    --local-color-4: ${i[3]};
    --local-color-5: ${i[4]};
   `},hexToRgb(e){const t=parseInt(e,16),n=t>>16&255,r=t>>8&255,i=t&255;return[n,r,i]},tintColor(e,t){const[n,r,i]=e,o=Math.round(n+(255-n)*t),s=Math.round(r+(255-r)*t),a=Math.round(i+(255-i)*t);return[o,s,a]},isNumber(e){return{number:/^[0-9]+$/u}.number.test(e)},getColorTheme(e){return e||(typeof window<"u"&&window.matchMedia?window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light":"dark")}},wE=we`
  :host {
    display: flex;
    width: inherit;
    height: inherit;
  }
`;var Yt=globalThis&&globalThis.__decorate||function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};let Nt=class extends de{render(){return this.style.cssText=`
      flex-direction: ${this.flexDirection};
      flex-wrap: ${this.flexWrap};
      flex-basis: ${this.flexBasis};
      flex-grow: ${this.flexGrow};
      flex-shrink: ${this.flexShrink};
      align-items: ${this.alignItems};
      justify-content: ${this.justifyContent};
      column-gap: ${this.columnGap&&`var(--wui-spacing-${this.columnGap})`};
      row-gap: ${this.rowGap&&`var(--wui-spacing-${this.rowGap})`};
      gap: ${this.gap&&`var(--wui-spacing-${this.gap})`};
      padding-top: ${this.padding&&Ye.getSpacingStyles(this.padding,0)};
      padding-right: ${this.padding&&Ye.getSpacingStyles(this.padding,1)};
      padding-bottom: ${this.padding&&Ye.getSpacingStyles(this.padding,2)};
      padding-left: ${this.padding&&Ye.getSpacingStyles(this.padding,3)};
      margin-top: ${this.margin&&Ye.getSpacingStyles(this.margin,0)};
      margin-right: ${this.margin&&Ye.getSpacingStyles(this.margin,1)};
      margin-bottom: ${this.margin&&Ye.getSpacingStyles(this.margin,2)};
      margin-left: ${this.margin&&Ye.getSpacingStyles(this.margin,3)};
    `,k`<slot></slot>`}};Nt.styles=[De,wE];Yt([M()],Nt.prototype,"flexDirection",void 0);Yt([M()],Nt.prototype,"flexWrap",void 0);Yt([M()],Nt.prototype,"flexBasis",void 0);Yt([M()],Nt.prototype,"flexGrow",void 0);Yt([M()],Nt.prototype,"flexShrink",void 0);Yt([M()],Nt.prototype,"alignItems",void 0);Yt([M()],Nt.prototype,"justifyContent",void 0);Yt([M()],Nt.prototype,"columnGap",void 0);Yt([M()],Nt.prototype,"rowGap",void 0);Yt([M()],Nt.prototype,"gap",void 0);Yt([M()],Nt.prototype,"padding",void 0);Yt([M()],Nt.prototype,"margin",void 0);Nt=Yt([ue("wui-flex")],Nt);const bE=we`
  :host {
    display: block;
    width: 64px;
    height: 64px;
    outline: 8px solid var(--wui-gray-glass-005);
    border-radius: var(--wui-border-radius-3xl);
    overflow: hidden;
    position: relative;
  }

  :host([data-variant='generated']) {
    --mixed-local-color-1: var(--local-color-1);
    --mixed-local-color-2: var(--local-color-2);
    --mixed-local-color-3: var(--local-color-3);
    --mixed-local-color-4: var(--local-color-4);
    --mixed-local-color-5: var(--local-color-5);
  }

  @supports (background: color-mix(in srgb, white 50%, black)) {
    :host([data-variant='generated']) {
      --mixed-local-color-1: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-1)
      );
      --mixed-local-color-2: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-2)
      );
      --mixed-local-color-3: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-3)
      );
      --mixed-local-color-4: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-4)
      );
      --mixed-local-color-5: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-5)
      );
    }
  }

  :host([data-variant='generated']) {
    outline: 8px solid var(--wui-avatar-border);
    background: radial-gradient(
      75.29% 75.29% at 64.96% 24.36%,
      #fff 0.52%,
      var(--mixed-local-color-5) 31.25%,
      var(--mixed-local-color-3) 51.56%,
      var(--mixed-local-color-2) 65.63%,
      var(--mixed-local-color-1) 82.29%,
      var(--mixed-local-color-4) 100%
    );
  }

  :host([data-variant='default']) {
    outline: 8px solid var(--wui-avatar-border);
    background: radial-gradient(
      75.29% 75.29% at 64.96% 24.36%,
      #fff 0.52%,
      #f5ccfc 31.25%,
      #dba4f5 51.56%,
      #9a8ee8 65.63%,
      #6493da 82.29%,
      #6ebdea 100%
    );
  }
`;var Eu=globalThis&&globalThis.__decorate||function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};let Mo=class extends de{constructor(){super(...arguments),this.imageSrc=void 0,this.alt=void 0,this.address=void 0}render(){return k`${this.visualTemplate()}`}visualTemplate(){if(this.imageSrc)return this.dataset.variant="image",k`<wui-image src=${this.imageSrc} alt=${this.alt??"avatar"}></wui-image>`;if(this.address){this.dataset.variant="generated";const t=Ye.generateAvatarColors(this.address);return this.style.cssText=t,null}return this.dataset.variant="default",null}};Mo.styles=[De,bE];Eu([M()],Mo.prototype,"imageSrc",void 0);Eu([M()],Mo.prototype,"alt",void 0);Eu([M()],Mo.prototype,"address",void 0);Mo=Eu([ue("wui-avatar")],Mo);const yE=we`
  :host {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    background-color: var(--wui-gray-glass-020);
    border-radius: var(--local-border-radius);
    border: var(--local-border);
    width: var(--local-size);
    height: var(--local-size);
    min-height: var(--local-size);
    min-width: var(--local-size);
  }

  @supports (background: color-mix(in srgb, white 50%, black)) {
    :host {
      background-color: color-mix(in srgb, var(--local-bg-value) var(--local-bg-mix), transparent);
    }
  }
`;var ni=globalThis&&globalThis.__decorate||function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};let Vn=class extends de{constructor(){super(...arguments),this.size="md",this.backgroundColor="accent-100",this.iconColor="accent-100",this.background="transparent",this.border=!1,this.borderColor="wui-color-bg-125",this.icon="copy"}render(){let t="xxs";switch(this.size){case"lg":t="lg";break;case"md":t="md";break;case"mdl":t="mdl";break;case"sm":t="xs";break;default:t="xxs"}const n=this.size==="lg",r=n?"12%":"16%",i=n?"xxs":"3xl",o=this.background==="opaque",s=this.backgroundColor==="accent-100"&&o||this.backgroundColor==="success-100"&&o||this.backgroundColor==="error-100"&&o||this.backgroundColor==="inverse-100"&&o;return this.style.cssText=`
       --local-bg-value: ${s?`var(--wui-icon-box-bg-${this.backgroundColor})`:`var(--wui-color-${this.backgroundColor})`};
       --local-bg-mix: ${s?"100%":r};
       --local-border-radius: var(--wui-border-radius-${i});
       --local-size: var(--wui-icon-box-size-${this.size});
       --local-border: ${this.borderColor==="wui-color-bg-125"?"2px":"1px"} solid ${this.border?`var(--${this.borderColor})`:"transparent"}
   `,k` <wui-icon color=${this.iconColor} size=${t} name=${this.icon}></wui-icon> `}};Vn.styles=[De,dt,yE];ni([M()],Vn.prototype,"size",void 0);ni([M()],Vn.prototype,"backgroundColor",void 0);ni([M()],Vn.prototype,"iconColor",void 0);ni([M()],Vn.prototype,"background",void 0);ni([M({type:Boolean})],Vn.prototype,"border",void 0);ni([M()],Vn.prototype,"borderColor",void 0);ni([M()],Vn.prototype,"icon",void 0);Vn=ni([ue("wui-icon-box")],Vn);const vE=we`
  :host {
    display: block;
  }

  button {
    border-radius: var(--wui-border-radius-3xl);
    background: var(--wui-gray-glass-002);
    display: flex;
    gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-3xs) var(--wui-spacing-xs) var(--wui-spacing-3xs)
      var(--wui-spacing-xs);
    border: 1px solid var(--wui-gray-glass-005);
  }

  button:disabled {
    background: var(--wui-gray-glass-015);
  }

  button:disabled > wui-text {
    color: var(--wui-gray-glass-015);
  }

  button:disabled > wui-flex > wui-text {
    color: var(--wui-gray-glass-015);
  }

  button:disabled > wui-image,
  button:disabled > wui-icon-box,
  button:disabled > wui-flex > wui-avatar {
    filter: grayscale(1);
  }

  button:has(wui-image) {
    padding: var(--wui-spacing-3xs) var(--wui-spacing-3xs) var(--wui-spacing-3xs)
      var(--wui-spacing-xs);
  }

  wui-text {
    color: var(--wui-color-fg-100);
  }

  wui-flex > wui-text {
    color: var(--wui-color-fg-200);
    transition: all var(--wui-ease-out-power-1) var(--wui-duration-lg);
  }

  wui-image,
  wui-icon-box {
    border-radius: var(--wui-border-radius-3xl);
    width: 24px;
    height: 24px;
    outline: 2px solid var(--wui-gray-glass-005);
  }

  wui-flex {
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-gray-glass-005);
    background: var(--wui-gray-glass-005);
    padding: 4px var(--wui-spacing-m) 4px var(--wui-spacing-xxs);
  }

  wui-flex.local-no-balance {
    border-radius: 0px;
    border: none;
    background: transparent;
  }

  wui-avatar {
    width: 20px;
    height: 20px;
    outline: 2px solid var(--wui-gray-glass-010);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled > wui-flex > wui-text {
      color: var(--wui-color-fg-175);
    }

    button:active:enabled > wui-flex > wui-text {
      color: var(--wui-color-fg-175);
    }
  }
`;var Fi=globalThis&&globalThis.__decorate||function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};let wr=class extends de{constructor(){super(...arguments),this.networkSrc=void 0,this.avatarSrc=void 0,this.balance=void 0,this.disabled=!1,this.isProfileName=!1,this.address=""}render(){return k`
      <button ?disabled=${this.disabled}>
        ${this.balanceTemplate()}
        <wui-flex
          gap="xxs"
          alignItems="center"
          class=${ke(this.balance?void 0:"local-no-balance")}
        >
          <wui-avatar
            .imageSrc=${this.avatarSrc}
            alt=${this.address}
            address=${this.address}
          ></wui-avatar>
          <wui-text variant="paragraph-600" color="inherit">
            ${Ye.getTruncateString({string:this.address,charsStart:this.isProfileName?18:4,charsEnd:this.isProfileName?0:6,truncate:this.isProfileName?"end":"middle"})}
          </wui-text>
        </wui-flex>
      </button>
    `}balanceTemplate(){if(this.balance){const t=this.networkSrc?k`<wui-image src=${this.networkSrc}></wui-image>`:k`
            <wui-icon-box
              size="sm"
              iconColor="fg-200"
              backgroundColor="fg-300"
              icon="networkPlaceholder"
            ></wui-icon-box>
          `;return k`
        ${t}
        <wui-text variant="paragraph-600" color="inherit"> ${this.balance} </wui-text>
      `}return null}};wr.styles=[De,dt,vE];Fi([M()],wr.prototype,"networkSrc",void 0);Fi([M()],wr.prototype,"avatarSrc",void 0);Fi([M()],wr.prototype,"balance",void 0);Fi([M({type:Boolean})],wr.prototype,"disabled",void 0);Fi([M({type:Boolean})],wr.prototype,"isProfileName",void 0);Fi([M()],wr.prototype,"address",void 0);wr=Fi([ue("wui-account-button")],wr);const xE=we`
  :host {
    position: relative;
    border-radius: inherit;
    overflow: hidden;
    background-color: var(--wui-gray-glass-002);
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--local-size);
    height: var(--local-size);
    border-radius: var(--local-border-radius);
  }

  :host::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: inherit;
    border: 1px solid var(--wui-gray-glass-010);
    pointer-events: none;
  }

  :host([name='Extension'])::after {
    border: 1px solid var(--wui-accent-glass-010);
  }

  :host([data-wallet-icon='allWallets']) {
    background-color: var(--wui-all-wallets-bg-100);
  }

  :host([data-wallet-icon='allWallets'])::after {
    border: 1px solid var(--wui-accent-glass-010);
  }

  wui-icon[data-parent-size='inherit'] {
    width: 75%;
    height: 75%;
    align-items: center;
  }

  wui-icon[data-parent-size='sm'] {
    width: 18px;
    height: 18px;
  }

  wui-icon[data-parent-size='md'] {
    width: 24px;
    height: 24px;
  }

  wui-icon[data-parent-size='lg'] {
    width: 42px;
    height: 42px;
  }

  wui-icon[data-parent-size='full'] {
    width: 100%;
    height: 100%;
  }
`;var nc=globalThis&&globalThis.__decorate||function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};let Ni=class extends de{constructor(){super(...arguments),this.size="md",this.name=""}render(){let t="xxs";return this.size==="lg"?t="m":this.size==="md"?t="xs":t="xxs",this.style.cssText=`
       --local-border-radius: var(--wui-border-radius-${t});
       --local-size: var(--wui-wallet-image-size-${this.size});
   `,this.walletIcon&&(this.dataset.walletIcon=this.walletIcon),k` ${this.templateVisual()}`}templateVisual(){return this.imageSrc?k`<wui-image src=${this.imageSrc} alt=${this.name}></wui-image>`:this.walletIcon?k`<wui-icon
        data-parent-size="md"
        size="md"
        color="inherit"
        name=${this.walletIcon}
      ></wui-icon>`:k`<wui-icon
      data-parent-size=${this.size}
      size="inherit"
      color="inherit"
      name="walletPlaceholder"
    ></wui-icon>`}};Ni.styles=[De,xE];nc([M()],Ni.prototype,"size",void 0);nc([M()],Ni.prototype,"name",void 0);nc([M()],Ni.prototype,"imageSrc",void 0);nc([M()],Ni.prototype,"walletIcon",void 0);Ni=nc([ue("wui-wallet-image")],Ni);const _E=we`
  :host {
    position: relative;
    border-radius: var(--wui-border-radius-xxs);
    width: 40px;
    height: 40px;
    overflow: hidden;
    background: var(--wui-gray-glass-002);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: var(--wui-spacing-4xs);
    padding: 3.75px !important;
  }

  :host::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: inherit;
    border: 1px solid var(--wui-gray-glass-010);
    pointer-events: none;
  }

  :host > wui-wallet-image {
    width: 14px;
    height: 14px;
    border-radius: var(--wui-border-radius-5xs);
  }
`;var ub=globalThis&&globalThis.__decorate||function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};const Ed=4;let pl=class extends de{constructor(){super(...arguments),this.walletImages=[]}render(){const t=this.walletImages.length<Ed;return k`${this.walletImages.slice(0,Ed).map(({src:n,walletName:r})=>k`
          <wui-wallet-image
            size="inherit"
            imageSrc=${n}
            name=${ke(r)}
          ></wui-wallet-image>
        `)}
    ${t?[...Array(Ed-this.walletImages.length)].map(()=>k` <wui-wallet-image size="inherit" name=""></wui-wallet-image>`):null}`}};pl.styles=[De,_E];ub([M({type:Array})],pl.prototype,"walletImages",void 0);pl=ub([ue("wui-all-wallets-image")],pl);const CE=we`
  :host {
    width: var(--local-width);
    position: relative;
  }

  button {
    border: 1px solid var(--wui-gray-glass-010);
    border-radius: var(--wui-border-radius-m);
  }

  button:disabled {
    border: 1px solid var(--wui-gray-glass-010);
  }

  button[data-size='sm'] {
    padding: 6px 12px;
  }

  ::slotted(*) {
    transition: opacity 200ms ease-in-out;
    opacity: var(--local-opacity-100);
  }

  button > wui-text {
    transition: opacity 200ms ease-in-out;
    opacity: var(--local-opacity-100);
  }

  button[data-size='md'] {
    padding: 9px var(--wui-spacing-l) 9px var(--wui-spacing-l);
  }

  wui-loading-spinner {
    position: absolute;
    left: 50%;
    top: 50%;
    transition: all 200ms ease-in-out;
    transform: translate(-50%, -50%);
    opacity: var(--local-opacity-000);
  }
`;var rc=globalThis&&globalThis.__decorate||function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};let ki=class extends de{constructor(){super(...arguments),this.size="md",this.disabled=!1,this.loading=!1,this.variant="fill"}render(){this.style.cssText=`
    --local-width: ${this.variant==="fullWidth"?"100%":"auto"};
    --local-opacity-100: ${this.loading?0:1};
    --local-opacity-000: ${this.loading?1:0};`;const t=this.size==="md"?"paragraph-600":"small-600";return k`
      <button
        data-variant=${this.variant}
        data-size=${this.size}
        ?disabled=${this.disabled||this.loading}
        ontouchstart
      >
        ${this.loadingTemplate()}
        <slot name="iconLeft"></slot>
        <wui-text variant=${t} color="inherit">
          <slot></slot>
        </wui-text>
        <slot name="iconRight"></slot>
      </button>
    `}loadingTemplate(){return this.loading?k`<wui-loading-spinner color="fg-300"></wui-loading-spinner>`:k``}};ki.styles=[De,dt,CE];rc([M()],ki.prototype,"size",void 0);rc([M({type:Boolean})],ki.prototype,"disabled",void 0);rc([M({type:Boolean})],ki.prototype,"loading",void 0);rc([M()],ki.prototype,"variant",void 0);ki=rc([ue("wui-button")],ki);const db=ge`<svg  viewBox="0 0 48 54" fill="none">
  <path
    d="M43.4605 10.7248L28.0485 1.61089C25.5438 0.129705 22.4562 0.129705 19.9515 1.61088L4.53951 10.7248C2.03626 12.2051 0.5 14.9365 0.5 17.886V36.1139C0.5 39.0635 2.03626 41.7949 4.53951 43.2752L19.9515 52.3891C22.4562 53.8703 25.5438 53.8703 28.0485 52.3891L43.4605 43.2752C45.9637 41.7949 47.5 39.0635 47.5 36.114V17.8861C47.5 14.9365 45.9637 12.2051 43.4605 10.7248Z"
  />
</svg>`,EE=we`
  :host {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 76px;
    row-gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-xs) 10px;
    background-color: var(--wui-gray-glass-002);
    border-radius: clamp(0px, var(--wui-border-radius-xs), 20px);
    position: relative;
  }

  wui-shimmer[data-type='network'] {
    border: none;
    -webkit-clip-path: var(--wui-path-network);
    clip-path: var(--wui-path-network);
  }

  svg {
    position: absolute;
    width: 48px;
    height: 54px;
    z-index: 1;
  }

  svg > path {
    stroke: var(--wui-gray-glass-010);
    stroke-width: 1px;
  }
`;var fb=globalThis&&globalThis.__decorate||function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};let ml=class extends de{constructor(){super(...arguments),this.type="wallet"}render(){return k`
      ${this.shimmerTemplate()}
      <wui-shimmer width="56px" height="20px" borderRadius="xs"></wui-shimmer>
    `}shimmerTemplate(){return this.type==="network"?k` <wui-shimmer
          data-type=${this.type}
          width="48px"
          height="54px"
          borderRadius="xs"
        ></wui-shimmer>
        ${db}`:k`<wui-shimmer width="56px" height="56px" borderRadius="xs"></wui-shimmer>`}};ml.styles=[De,dt,EE];fb([M()],ml.prototype,"type",void 0);ml=fb([ue("wui-card-select-loader")],ml);const TE=ge`<svg width="86" height="96" fill="none">
  <path
    d="M78.3244 18.926L50.1808 2.45078C45.7376 -0.150261 40.2624 -0.150262 35.8192 2.45078L7.6756 18.926C3.23322 21.5266 0.5 26.3301 0.5 31.5248V64.4752C0.5 69.6699 3.23322 74.4734 7.6756 77.074L35.8192 93.5492C40.2624 96.1503 45.7376 96.1503 50.1808 93.5492L78.3244 77.074C82.7668 74.4734 85.5 69.6699 85.5 64.4752V31.5248C85.5 26.3301 82.7668 21.5266 78.3244 18.926Z"
  />
</svg>`,SE=we`
  :host {
    position: relative;
    border-radius: inherit;
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--local-width);
    height: var(--local-height);
  }

  svg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    fill: var(--wui-gray-glass-002);
  }

  svg > path {
    stroke: var(--local-stroke);
    transition: stroke var(--wui-ease-out-power-1) var(--wui-duration-lg);
  }

  wui-image {
    width: 100%;
    height: 100%;
    -webkit-clip-path: var(--local-path);
    clip-path: var(--local-path);
    background: var(--wui-gray-glass-002);
  }

  wui-icon {
    transform: translateY(-5%);
    width: var(--local-icon-size);
    height: var(--local-icon-size);
  }
`;var ic=globalThis&&globalThis.__decorate||function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};let Mi=class extends de{constructor(){super(...arguments),this.size="md",this.name="uknown",this.selected=!1}render(){const t=this.size==="lg";return this.style.cssText=`
      --local-stroke: ${this.selected?"var(--wui-color-accent-100)":"var(--wui-gray-glass-010)"};
      --local-path: ${t?"var(--wui-path-network-lg)":"var(--wui-path-network)"};
      --local-width: ${t?"86px":"48px"};
      --local-height: ${t?"96px":"54px"};
      --local-icon-size: ${t?"42px":"24px"};
    `,k`${this.templateVisual()} ${t?TE:db}`}templateVisual(){return this.imageSrc?k`<wui-image src=${this.imageSrc} alt=${this.name}></wui-image>`:k`<wui-icon size="inherit" color="fg-200" name="networkPlaceholder"></wui-icon>`}};Mi.styles=[De,SE];ic([M()],Mi.prototype,"size",void 0);ic([M()],Mi.prototype,"name",void 0);ic([M()],Mi.prototype,"imageSrc",void 0);ic([M({type:Boolean})],Mi.prototype,"selected",void 0);Mi=ic([ue("wui-network-image")],Mi);const AE=we`
  button {
    flex-direction: column;
    width: 76px;
    row-gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-xs) var(--wui-spacing-0);
    background-color: var(--wui-gray-glass-002);
    border-radius: clamp(0px, var(--wui-border-radius-xs), 20px);
  }

  button > wui-text {
    color: var(--wui-color-fg-100);
    max-width: 64px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    justify-content: center;
  }

  button:disabled > wui-text {
    color: var(--wui-gray-glass-015);
  }

  [data-selected='true'] {
    background-color: var(--wui-accent-glass-020);
  }

  @media (hover: hover) and (pointer: fine) {
    [data-selected='true']:hover:enabled {
      background-color: var(--wui-accent-glass-015);
    }
  }

  [data-selected='true']:active:enabled {
    background-color: var(--wui-accent-glass-010);
  }
`;var cs=globalThis&&globalThis.__decorate||function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};let Gr=class extends de{constructor(){super(...arguments),this.name="Unknown",this.type="wallet",this.imageSrc=void 0,this.disabled=!1,this.selected=!1}render(){return k`
      <button data-selected=${ke(this.selected)} ?disabled=${this.disabled} ontouchstart>
        ${this.imageTemplate()}
        <wui-text variant="tiny-500" color=${this.selected?"accent-100":"inherit"}>
          ${this.name}
        </wui-text>
      </button>
    `}imageTemplate(){return this.type==="network"?k`
        <wui-network-image
          .selected=${this.selected}
          imageSrc=${ke(this.imageSrc)}
          name=${this.name}
        >
        </wui-network-image>
      `:k`
      <wui-wallet-image size="md" imageSrc=${ke(this.imageSrc)} name=${this.name}>
      </wui-wallet-image>
    `}};Gr.styles=[De,dt,AE];cs([M()],Gr.prototype,"name",void 0);cs([M()],Gr.prototype,"type",void 0);cs([M()],Gr.prototype,"imageSrc",void 0);cs([M({type:Boolean})],Gr.prototype,"disabled",void 0);cs([M({type:Boolean})],Gr.prototype,"selected",void 0);Gr=cs([ue("wui-card-select")],Gr);const $E=we`
  a {
    border: 1px solid var(--wui-gray-glass-010);
    border-radius: var(--wui-border-radius-3xl);
  }

  wui-image {
    border-radius: var(--wui-border-radius-3xl);
    overflow: hidden;
  }

  a.disabled > wui-icon,
  a.disabled > wui-image {
    filter: grayscale(1);
  }

  a[data-variant='fill'] {
    color: var(--wui-color-inverse-100);
    background-color: var(--wui-color-accent-100);
  }

  a[data-variant='shade'] {
    background-color: transparent;
    background-color: var(--wui-gray-glass-010);
    color: var(--wui-color-fg-200);
  }

  a[data-variant='transparent'] {
    column-gap: var(--wui-spacing-xxs);
    background-color: transparent;
    padding: 7px var(--wui-spacing-s) 7px 10px;
    color: var(--wui-color-fg-150);
  }

  a[data-variant='transparent']:has(wui-text:first-child) {
    padding: 7px var(--wui-spacing-s);
  }

  a[data-variant='fill'],
  a[data-variant='shade'] {
    column-gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-xxs) var(--wui-spacing-m) var(--wui-spacing-xxs)
      var(--wui-spacing-xs);
  }

  a[data-variant='fill']:has(wui-text:first-child),
  a[data-variant='shade']:has(wui-text:first-child) {
    padding: 8.5px var(--wui-spacing-m) 9.5px var(--wui-spacing-m);
  }

  a[data-variant='fill'] > wui-image,
  a[data-variant='shade'] > wui-image {
    width: 24px;
    height: 24px;
  }

  a[data-variant='fill'] > wui-image {
    border: 1px solid var(--wui-color-accent-090);
  }

  a[data-variant='shade'] > wui-image {
    border: 1px solid var(--wui-gray-glass-010);
  }

  a[data-variant='fill'] > wui-icon,
  a[data-variant='shade'] > wui-icon {
    width: 14px;
    height: 14px;
  }

  a[data-variant='transparent'] > wui-image {
    width: 14px;
    height: 14px;
  }

  a[data-variant='transparent'] > wui-icon {
    width: 12px;
    height: 12px;
  }

  a[data-variant='fill']:focus-visible {
    background-color: var(--wui-color-accent-090);
  }

  a[data-variant='shade']:focus-visible {
    background-color: var(--wui-gray-glass-015);
  }

  a[data-variant='transparent']:focus-visible {
    background-color: var(--wui-gray-glass-005);
  }

  a.disabled {
    color: var(--wui-gray-glass-015);
    background-color: var(--wui-gray-glass-015);
    pointer-events: none;
  }

  @media (hover: hover) and (pointer: fine) {
    a[data-variant='fill']:hover {
      background-color: var(--wui-color-accent-090);
    }

    a[data-variant='shade']:hover {
      background-color: var(--wui-gray-glass-015);
    }

    a[data-variant='transparent']:hover {
      background-color: var(--wui-gray-glass-005);
    }
  }

  a[data-variant='fill']:active {
    background-color: var(--wui-color-accent-080);
  }

  a[data-variant='shade']:active {
    background-color: var(--wui-gray-glass-020);
  }

  a[data-variant='transparent']:active {
    background-color: var(--wui-gray-glass-010);
  }
`;var ls=globalThis&&globalThis.__decorate||function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};let Kr=class extends de{constructor(){super(...arguments),this.variant="fill",this.imageSrc=void 0,this.disabled=!1,this.icon="externalLink",this.href=""}render(){const t=this.variant==="transparent"?"small-600":"paragraph-600";return k`
      <a
        rel="noreferrer"
        target="_blank"
        href=${this.href}
        class=${this.disabled?"disabled":""}
        data-variant=${this.variant}
      >
        ${this.imageTemplate()}
        <wui-text variant=${t} color="inherit">
          ${Ye.getHostName(this.href)}
        </wui-text>
        <wui-icon name=${this.icon} color="inherit" size="inherit"></wui-icon>
      </a>
    `}imageTemplate(){return this.imageSrc?k`<wui-image src=${this.imageSrc}></wui-image>`:null}};Kr.styles=[De,dt,$E];ls([M()],Kr.prototype,"variant",void 0);ls([M()],Kr.prototype,"imageSrc",void 0);ls([M({type:Boolean})],Kr.prototype,"disabled",void 0);ls([M()],Kr.prototype,"icon",void 0);ls([M()],Kr.prototype,"href",void 0);Kr=ls([ue("wui-chip")],Kr);const PE=we`
  :host {
    position: relative;
    display: block;
  }

  button {
    background: var(--wui-color-accent-100);
    border: 1px solid var(--wui-gray-glass-010);
    border-radius: var(--wui-border-radius-m);
    gap: var(--wui-spacing-xs);
  }

  button.loading {
    background: var(--wui-gray-glass-010);
    border: 1px solid var(--wui-gray-glass-010);
    pointer-events: none;
  }

  button:disabled {
    background-color: var(--wui-gray-glass-015);
    border: 1px solid var(--wui-gray-glass-010);
  }

  button:disabled > wui-text {
    color: var(--wui-gray-glass-015);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-color-accent-090);
    }

    button:active:enabled {
      background-color: var(--wui-color-accent-080);
    }
  }

  button:focus-visible {
    border: 1px solid var(--wui-gray-glass-010);
    background-color: var(--wui-color-accent-090);
    -webkit-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  button[data-size='sm'] {
    padding: 6.75px 10px 7.25px;
  }

  ::slotted(*) {
    transition: opacity 200ms ease-in-out;
    opacity: var(--local-opacity-100);
  }

  button > wui-text {
    transition: opacity 200ms ease-in-out;
    opacity: var(--local-opacity-100);
    color: var(--wui-color-inverse-100);
  }

  button[data-size='md'] {
    padding: 9px var(--wui-spacing-l) 9px var(--wui-spacing-l);
  }

  button[data-size='md'] + wui-text {
    padding-left: var(--wui-spacing-3xs);
  }

  wui-loading-spinner {
    width: 14px;
    height: 14px;
  }

  wui-loading-spinner::slotted(svg) {
    width: 10px !important;
    height: 10px !important;
  }

  button[data-size='sm'] > wui-loading-spinner {
    width: 12px;
    height: 12px;
  }
`;var $h=globalThis&&globalThis.__decorate||function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};let $a=class extends de{constructor(){super(...arguments),this.size="md",this.loading=!1}render(){const t=this.size==="md"?"paragraph-600":"small-600";return k`
      <button data-size=${this.size} ?disabled=${this.loading} ontouchstart>
        ${this.loadingTemplate()}
        <wui-text variant=${t} color=${this.loading?"accent-100":"inherit"}>
          <slot></slot>
        </wui-text>
      </button>
    `}loadingTemplate(){return this.loading?k`<wui-loading-spinner size=${this.size} color="accent-100"></wui-loading-spinner>`:null}};$a.styles=[De,dt,PE];$h([M()],$a.prototype,"size",void 0);$h([M({type:Boolean})],$a.prototype,"loading",void 0);$a=$h([ue("wui-connect-button")],$a);const OE=we`
  wui-flex {
    width: 100%;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
  }
`;var Tu=globalThis&&globalThis.__decorate||function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};let Bo=class extends de{constructor(){super(...arguments),this.disabled=!1,this.label="",this.buttonLabel=""}render(){return k`
      <wui-flex
        justifyContent="space-between"
        alignItems="center"
        .padding=${["1xs","2l","1xs","2l"]}
      >
        <wui-text variant="paragraph-500" colo="fg-200">${this.label}</wui-text>
        <wui-button size="sm" variant="accent">
          ${this.buttonLabel}
          <wui-icon size="sm" color="inherit" slot="iconRight" name="chevronRight"></wui-icon>
        </wui-button>
      </wui-flex>
    `}};Bo.styles=[De,dt,OE];Tu([M({type:Boolean})],Bo.prototype,"disabled",void 0);Tu([M()],Bo.prototype,"label",void 0);Tu([M()],Bo.prototype,"buttonLabel",void 0);Bo=Tu([ue("wui-cta-button")],Bo);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const DE=e=>e.strings===void 0;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const qs=(e,t)=>{var r;const n=e._$AN;if(n===void 0)return!1;for(const i of n)(r=i._$AO)==null||r.call(i,t,!1),qs(i,t);return!0},gl=e=>{let t,n;do{if((t=e._$AM)===void 0)break;n=t._$AN,n.delete(e),e=t}while((n==null?void 0:n.size)===0)},hb=e=>{for(let t;t=e._$AM;e=t){let n=t._$AN;if(n===void 0)t._$AN=n=new Set;else if(n.has(e))break;n.add(e),NE(t)}};function IE(e){this._$AN!==void 0?(gl(this),this._$AM=e,hb(this)):this._$AM=e}function RE(e,t=!1,n=0){const r=this._$AH,i=this._$AN;if(i!==void 0&&i.size!==0)if(t)if(Array.isArray(r))for(let o=n;o<r.length;o++)qs(r[o],!1),gl(r[o]);else r!=null&&(qs(r,!1),gl(r));else qs(this,e)}const NE=e=>{e.type==sb.CHILD&&(e._$AP??(e._$AP=RE),e._$AQ??(e._$AQ=IE))};class kE extends cb{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,n,r){super._$AT(t,n,r),hb(this),this.isConnected=t._$AU}_$AO(t,n=!0){var r,i;t!==this.isConnected&&(this.isConnected=t,t?(r=this.reconnected)==null||r.call(this):(i=this.disconnected)==null||i.call(this)),n&&(qs(this,t),gl(this))}setValue(t){if(DE(this._$Ct))this._$Ct._$AI(t,this);else{const n=[...this._$Ct._$AH];n[this._$Ci]=t,this._$Ct._$AI(n,this,0)}}disconnected(){}reconnected(){}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const pb=()=>new ME;let ME=class{};const Td=new WeakMap,mb=ab(class extends kE{render(e){return at}update(e,[t]){var r;const n=t!==this.G;return n&&this.G!==void 0&&this.ot(void 0),(n||this.rt!==this.lt)&&(this.G=t,this.ct=(r=e.options)==null?void 0:r.host,this.ot(this.lt=e.element)),at}ot(e){if(typeof this.G=="function"){const t=this.ct??globalThis;let n=Td.get(t);n===void 0&&(n=new WeakMap,Td.set(t,n)),n.get(this.G)!==void 0&&this.G.call(this.ct,void 0),n.set(this.G,e),e!==void 0&&this.G.call(this.ct,e)}else this.G.value=e}get rt(){var e,t;return typeof this.G=="function"?(e=Td.get(this.ct??globalThis))==null?void 0:e.get(this.G):(t=this.G)==null?void 0:t.value}disconnected(){this.rt===this.lt&&this.ot(void 0)}reconnected(){this.ot(this.lt)}}),BE=we`
  :host {
    position: relative;
    width: 100%;
    display: inline-block;
    color: var(--wui-color-fg-275);
  }

  input {
    width: 100%;
    border-radius: var(--wui-border-radius-xxs);
    border: 1px solid var(--wui-gray-glass-005);
    background: var(--wui-gray-glass-005);
    font-size: var(--wui-font-size-paragraph);
    font-weight: var(--wui-font-weight-regular);
    letter-spacing: var(--wui-letter-spacing-paragraph);
    color: var(--wui-color-fg-100);
    transition: all var(--wui-ease-inout-power-1) var(--wui-duration-lg);
    caret-color: var(--wui-color-accent-100);
  }

  input:disabled {
    cursor: not-allowed;
    border: 1px solid var(--wui-gray-glass-010);
    background: var(--wui-gray-glass-015);
  }

  input:disabled::placeholder,
  input:disabled + wui-icon {
    color: var(--wui-color-fg-300);
  }

  input::placeholder {
    color: var(--wui-color-fg-275);
  }

  input:focus:enabled {
    transition: all var(--wui-ease-out-power-2) var(--wui-duration-sm);
    background-color: var(--wui-gray-glass-010);
    border: 1px solid var(--wui-color-accent-100);
    -webkit-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  input:hover:enabled {
    background-color: var(--wui-gray-glass-010);
  }

  wui-icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    pointer-events: none;
  }

  .wui-size-sm {
    padding: 9px var(--wui-spacing-m) 10px var(--wui-spacing-s);
  }

  wui-icon + .wui-size-sm {
    padding: 9px var(--wui-spacing-m) 10px 36px;
  }

  wui-icon[data-input='sm'] {
    left: var(--wui-spacing-s);
  }

  .wui-size-md {
    padding: 15px var(--wui-spacing-m) var(--wui-spacing-l) var(--wui-spacing-m);
  }

  wui-icon + .wui-size-md {
    padding: 15px var(--wui-spacing-m) var(--wui-spacing-l) 42px;
  }

  wui-icon[data-input='md'] {
    left: var(--wui-spacing-m);
  }

  input:placeholder-shown ~ ::slotted(wui-input-element),
  input:placeholder-shown ~ ::slotted(wui-icon) {
    opacity: 0;
    pointer-events: none;
  }

  ::slotted(wui-input-element),
  ::slotted(wui-icon) {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    transition: all var(--wui-ease-in-power-2) var(--wui-duration-md);
  }

  ::slotted(wui-input-element) {
    right: var(--wui-spacing-m);
  }

  ::slotted(wui-icon) {
    right: 0px;
  }
`;var ji=globalThis&&globalThis.__decorate||function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};let br=class extends de{constructor(){super(...arguments),this.size="md",this.disabled=!1,this.placeholder="",this.type="text",this.inputElementRef=pb()}render(){const t=`wui-size-${this.size}`;return k` ${this.templateIcon()}
      <input
        ${mb(this.inputElementRef)}
        class=${t}
        type=${this.type}
        enterkeyhint=${ke(this.enterKeyHint)}
        ?disabled=${this.disabled}
        placeholder=${this.placeholder}
        @input=${this.dispatchInputChangeEvent.bind(this)}
      />
      <slot></slot>`}templateIcon(){return this.icon?k`<wui-icon
        data-input=${this.size}
        size="md"
        color="inherit"
        name=${this.icon}
      ></wui-icon>`:null}dispatchInputChangeEvent(){var t;this.dispatchEvent(new CustomEvent("inputChange",{detail:(t=this.inputElementRef.value)==null?void 0:t.value,bubbles:!0,composed:!0}))}};br.styles=[De,dt,BE];ji([M()],br.prototype,"size",void 0);ji([M()],br.prototype,"icon",void 0);ji([M({type:Boolean})],br.prototype,"disabled",void 0);ji([M()],br.prototype,"placeholder",void 0);ji([M()],br.prototype,"type",void 0);ji([M()],br.prototype,"keyHint",void 0);br=ji([ue("wui-input-text")],br);const LE=we`
  :host {
    position: relative;
    display: inline-block;
  }

  wui-icon {
    padding: var(--wui-spacing-xl);
    cursor: pointer;
    transition: all var(--wui-duration-lg) var(--wui-ease-in-power-1);
  }

  wui-icon:hover {
    color: var(--wui-color-fg-200) !important;
  }

  wui-icon::part(chevronRight) {
    width: 12px;
    height: 12px;
  }

  wui-text {
    margin: var(--wui-spacing-xxs) var(--wui-spacing-m) var(--wui-spacing-0) var(--wui-spacing-m);
  }
`;var gb=globalThis&&globalThis.__decorate||function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};let wl=class extends de{render(){return k`
      <wui-input-text placeholder="Email" icon="mail" size="md">
        <wui-icon size="inherit" color="fg-100" name="chevronRight"></wui-icon>
      </wui-input-text>
      ${this.templateError()}
    `}templateError(){return this.errorMessage?k`<wui-text variant="tiny-500" color="error-100">${this.errorMessage}</wui-text>`:null}};wl.styles=[De,LE];gb([M()],wl.prototype,"errorMessage",void 0);wl=gb([ue("wui-email-input")],wl);const UE=we`
  button {
    border-radius: var(--wui-border-radius-xxs);
    color: var(--wui-color-fg-100);
    padding: var(--wui-spacing-2xs);
  }

  @media (max-width: 700px) {
    button {
      padding: var(--wui-spacing-s);
    }
  }

  button > wui-icon {
    pointer-events: none;
  }

  button:disabled > wui-icon {
    color: var(--wui-color-bg-300) !important;
  }

  button:disabled {
    background-color: transparent;
  }
`;var oc=globalThis&&globalThis.__decorate||function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};let Bi=class extends de{constructor(){super(...arguments),this.size="md",this.disabled=!1,this.icon="copy",this.iconColor="inherit"}render(){return k`
      <button ?disabled=${this.disabled} ontouchstart>
        <wui-icon color=${this.iconColor} size=${this.size} name=${this.icon}></wui-icon>
      </button>
    `}};Bi.styles=[De,dt,Th,UE];oc([M()],Bi.prototype,"size",void 0);oc([M({type:Boolean})],Bi.prototype,"disabled",void 0);oc([M()],Bi.prototype,"icon",void 0);oc([M()],Bi.prototype,"iconColor",void 0);Bi=oc([ue("wui-icon-link")],Bi);const FE=we`
  button {
    background-color: var(--wui-color-fg-300);
    border-radius: var(--wui-border-radius-4xs);
    width: 16px;
    height: 16px;
  }

  button:disabled {
    background-color: var(--wui-color-bg-300);
  }

  wui-icon {
    color: var(--wui-color-bg-200) !important;
  }

  button:focus-visible {
    background-color: var(--wui-color-fg-250);
    border: 1px solid var(--wui-color-accent-100);
  }

  button:active:enabled {
    background-color: var(--wui-color-fg-225);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-color-fg-250);
    }
  }
`;var wb=globalThis&&globalThis.__decorate||function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};let bl=class extends de{constructor(){super(...arguments),this.icon="copy"}render(){return k`
      <button>
        <wui-icon color="inherit" size="xxs" name=${this.icon}></wui-icon>
      </button>
    `}};bl.styles=[De,dt,FE];wb([M()],bl.prototype,"icon",void 0);bl=wb([ue("wui-input-element")],bl);const jE=we`
  :host {
    position: relative;
    display: inline-block;
  }

  input {
    width: 50px;
    height: 50px;
    background: var(--wui-gray-glass-005);
    border-radius: var(--wui-border-radius-xs);
    border: 1px solid var(--wui-gray-glass-005);
    font-family: var(--wui-font-family);
    font-size: var(--wui-font-size-large);
    font-weight: var(--wui-font-weight-regular);
    letter-spacing: var(--wui-letter-spacing-large);
    text-align: center;
    color: var(--wui-color-fg-100);
    caret-color: var(--wui-color-accent-100);
    transition: all var(--wui-ease-inout-power-1) var(--wui-duration-lg);
    box-sizing: border-box;
    -webkit-appearance: none;
    -moz-appearance: textfield;
    padding: 0px;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type='number'] {
    -moz-appearance: textfield;
  }

  input:disabled {
    cursor: not-allowed;
    border: 1px solid var(--wui-gray-glass-010);
    background: var(--wui-gray-glass-015);
  }

  input:focus:enabled {
    transition: all var(--wui-ease-out-power-2) var(--wui-duration-sm);
    background-color: var(--wui-gray-glass-010);
    border: 1px solid var(--wui-color-accent-100);
    -webkit-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  input:hover:enabled {
    background-color: var(--wui-gray-glass-010);
  }
`;var bb=globalThis&&globalThis.__decorate||function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};let yl=class extends de{constructor(){super(...arguments),this.disabled=!1}render(){return k`<input
      type="number"
      maxlength="1"
      inputmode="numeric"
      autofocus
      ?disabled=${this.disabled}
    /> `}};yl.styles=[De,dt,jE];bb([M({type:Boolean})],yl.prototype,"disabled",void 0);yl=bb([ue("wui-input-numeric")],yl);const WE=we`
  button {
    padding: var(--wui-spacing-4xs) var(--wui-spacing-xxs);
    border-radius: var(--wui-border-radius-3xs);
    background-color: transparent;
    color: var(--wui-color-accent-100);
  }

  button:disabled {
    background-color: transparent;
    color: var(--wui-gray-glass-015);
  }
`;var Ph=globalThis&&globalThis.__decorate||function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};let Pa=class extends de{constructor(){super(...arguments),this.disabled=!1,this.color="inherit"}render(){return k`
      <button ?disabled=${this.disabled} ontouchstart>
        <slot name="iconLeft"></slot>
        <wui-text variant="small-600" color=${this.color}>
          <slot></slot>
        </wui-text>
        <slot name="iconRight"></slot>
      </button>
    `}};Pa.styles=[De,dt,WE];Ph([M({type:Boolean})],Pa.prototype,"disabled",void 0);Ph([M()],Pa.prototype,"color",void 0);Pa=Ph([ue("wui-link")],Pa);const HE=we`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 11px 18px 11px var(--wui-spacing-s);
    width: 100%;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-250);
  }

  button[data-iconvariant='square'],
  button[data-iconvariant='square-blue'] {
    padding: 6px 18px 6px 9px;
  }

  button > wui-flex {
    flex: 1;
  }

  button > wui-image {
    width: 32px;
    height: 32px;
    outline: 2px solid var(--wui-gray-glass-005);
    border-radius: var(--wui-border-radius-3xl);
  }

  button > wui-icon {
    width: 36px;
    height: 36px;
  }

  button > wui-icon-box[data-variant='blue'] {
    outline: 2px solid var(--wui-accent-glass-005);
  }

  button > wui-icon-box[data-variant='overlay'] {
    outline: 2px solid var(--wui-gray-glass-005);
  }

  button > wui-icon-box[data-variant='square-blue'] {
    border-radius: var(--wui-border-radius-3xs);
    position: relative;
    border: none;
    width: 36px;
    height: 36px;
  }

  button > wui-icon-box[data-variant='square-blue']::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: inherit;
    border: 1px solid var(--wui-accent-glass-010);
    pointer-events: none;
  }

  button > wui-icon:last-child {
    width: 14px;
    height: 14px;
  }

  button:disabled {
    background-color: var(--wui-gray-glass-015);
    color: var(--wui-gray-glass-015);
  }

  button[data-loading='true'] > wui-icon {
    transition: opacity 200ms ease-in-out;
    opacity: 0;
  }

  wui-loading-spinner {
    position: absolute;
    right: 18px;
    top: 50%;
    transform: translateY(-50%);
  }
`;var xr=globalThis&&globalThis.__decorate||function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};let Sn=class extends de{constructor(){super(...arguments),this.variant="icon",this.disabled=!1,this.imageSrc=void 0,this.alt=void 0,this.chevron=!1,this.loading=!1}render(){return k`
      <button
        ?disabled=${this.loading?!0:!!this.disabled}
        data-loading=${this.loading}
        data-iconvariant=${ke(this.iconVariant)}
        ontouchstart
      >
        ${this.loadingTemplate()} ${this.visualTemplate()}
        <wui-flex gap="3xs">
          <slot></slot>
        </wui-flex>
        ${this.chevronTemplate()}
      </button>
    `}visualTemplate(){if(this.variant==="image"&&this.imageSrc)return k`<wui-image src=${this.imageSrc} alt=${this.alt??"list item"}></wui-image>`;if(this.iconVariant==="square"&&this.icon&&this.variant==="icon")return k`<wui-icon name=${this.icon}></wui-icon>`;if(this.variant==="icon"&&this.icon&&this.iconVariant){const t=["blue","square-blue"].includes(this.iconVariant)?"accent-100":"fg-200",n=this.iconVariant==="square-blue"?"mdl":"md";return k`
        <wui-icon-box
          data-variant=${this.iconVariant}
          icon=${this.icon}
          background="transparent"
          iconColor=${t}
          backgroundColor=${t}
          size=${n}
        ></wui-icon-box>
      `}return null}loadingTemplate(){return this.loading?k`<wui-loading-spinner color="fg-300"></wui-loading-spinner>`:k``}chevronTemplate(){return this.chevron?k`<wui-icon size="inherit" color="fg-200" name="chevronRight"></wui-icon>`:null}};Sn.styles=[De,dt,HE];xr([M()],Sn.prototype,"icon",void 0);xr([M()],Sn.prototype,"variant",void 0);xr([M()],Sn.prototype,"iconVariant",void 0);xr([M({type:Boolean})],Sn.prototype,"disabled",void 0);xr([M()],Sn.prototype,"imageSrc",void 0);xr([M()],Sn.prototype,"alt",void 0);xr([M({type:Boolean})],Sn.prototype,"chevron",void 0);xr([M({type:Boolean})],Sn.prototype,"loading",void 0);Sn=xr([ue("wui-list-item")],Sn);const zE=we`
  :host {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 40px;
    height: 40px;
    border: 1px solid var(--wui-gray-glass-005);
    border-radius: var(--wui-border-radius-3xl);
  }

  :host([data-type='minted']),
  :host([data-type='nftSent']),
  :host([data-type='bought']) {
    border-radius: var(--wui-border-radius-xs);
  }

  wui-image {
    display: block;
    border-radius: inherit;
  }

  wui-icon {
    width: 20px;
    height: 20px;
  }

  wui-icon-box {
    position: absolute;
    right: 0;
    bottom: 0;
    transform: translate(20%, 20%);
  }
`;var Oh=globalThis&&globalThis.__decorate||function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};const qE=["withdrawed","buy","cryptoSent","nftSent"],J1=["deposited","received","bought","minted"],Y1=["minted","bought","nftSent"],VE=["deposited","withdrawed","cryptoSent","buy","received"];let Oa=class extends de{constructor(){super(...arguments),this.type="buy"}render(){let t="accent-100",n="arrowTop";return qE.includes(this.type)?(t="accent-100",n="arrowTop"):J1.includes(this.type)&&Y1.includes(this.type)||J1.includes(this.type)&&VE.includes(this.type)?(t="success-100",n="arrowBottom"):(t="accent-100",n="swapVertical"),this.dataset.type=this.type,k`
      ${this.templateVisual()}
      <wui-icon-box
        size="xs"
        iconColor=${t}
        backgroundColor=${t}
        background="opaque"
        .icon=${n}
        ?border=${!0}
        borderColor="wui-color-bg-125"
      ></wui-icon-box>
    `}templateVisual(){return this.imageSrc?k`<wui-image src=${this.imageSrc} alt=${this.type}></wui-image>`:Y1.includes(this.type)?k`<wui-icon size="inherit" color="fg-200" name="nftPlaceholder"></wui-icon>`:k`<wui-icon size="inherit" color="fg-200" name="coinPlaceholder"></wui-icon>`}};Oa.styles=[De,zE];Oh([M()],Oa.prototype,"type",void 0);Oh([M()],Oa.prototype,"imageSrc",void 0);Oa=Oh([ue("wui-transaction-visual")],Oa);const GE=we`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 7px var(--wui-spacing-l) 7px var(--wui-spacing-xs);
    width: 100%;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-250);
  }

  wui-transaction-visual {
    width: 40px;
    height: 40px;
  }

  wui-flex {
    flex: 1;
  }

  button > wui-flex > wui-text:nth-child(1) {
    text-transform: capitalize;
  }

  button > wui-flex > wui-text:nth-child(2) {
    text-transform: uppercase;
  }

  button:disabled {
    color: var(--wui-color-fg-300);
  }
`;var us=globalThis&&globalThis.__decorate||function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};let Zr=class extends de{constructor(){super(...arguments),this.type="bought",this.disabled=!1,this.imageSrc="",this.date=new Date,this.transactionDetail=""}render(){const n=this.type==="nftSent"||this.type==="cryptoSent"?"Sent":this.type,r=Ye.getFormattedDate(this.date);return k`
      <button ?disabled=${this.disabled} ontouchstart>
        <wui-transaction-visual
          type=${this.type}
          imageSrc=${this.imageSrc}
        ></wui-transaction-visual>
        <wui-flex flexDirection="column" gap="3xs">
          <wui-text variant="paragraph-600" color="fg-100">${n}</wui-text>
          <wui-text variant="small-500" color="fg-200">${this.transactionDetail}</wui-text>
        </wui-flex>
        <wui-text variant="micro-700" color="fg-300">${r}</wui-text>
      </button>
    `}};Zr.styles=[De,dt,GE];us([M()],Zr.prototype,"type",void 0);us([M({type:Boolean})],Zr.prototype,"disabled",void 0);us([M()],Zr.prototype,"imageSrc",void 0);us([M({attribute:!1})],Zr.prototype,"date",void 0);us([M()],Zr.prototype,"transactionDetail",void 0);Zr=us([ue("wui-list-transaction")],Zr);const KE=we`
  :host {
    display: block;
    padding: 3.5px 5px !important;
    border-radius: var(--wui-border-radius-5xs);
  }

  :host([data-variant='main']) {
    background-color: var(--wui-accent-glass-015);
    color: var(--wui-color-accent-100);
  }

  :host([data-variant='shade']) {
    background-color: var(--wui-gray-glass-010);
    color: var(--wui-color-fg-200);
  }

  :host([data-variant='success']) {
    background-color: var(--wui-icon-box-bg-success-100);
    color: var(--wui-color-success-100);
  }

  :host([data-variant='error']) {
    background-color: var(--wui-icon-box-bg-error-100);
    color: var(--wui-color-error-100);
  }
`;var yb=globalThis&&globalThis.__decorate||function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};let vl=class extends de{constructor(){super(...arguments),this.variant="main"}render(){return this.dataset.variant=this.variant,k`
      <wui-text data-variant=${this.variant} variant="micro-700" color="inherit">
        <slot></slot>
      </wui-text>
    `}};vl.styles=[De,KE];yb([M()],vl.prototype,"variant",void 0);vl=yb([ue("wui-tag")],vl);const ZE=we`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 7px var(--wui-spacing-l) 7px var(--wui-spacing-xs);
    width: 100%;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-100);
  }

  button > wui-text:nth-child(2) {
    display: flex;
    flex: 1;
  }

  wui-icon {
    color: var(--wui-color-fg-200) !important;
  }

  button:disabled {
    background-color: var(--wui-gray-glass-015);
    color: var(--wui-gray-glass-015);
  }

  button:disabled > wui-tag {
    background-color: var(--wui-gray-glass-010);
    color: var(--wui-color-fg-300);
  }
`;var Qn=globalThis&&globalThis.__decorate||function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};let sn=class extends de{constructor(){super(...arguments),this.walletImages=[],this.imageSrc="",this.name="",this.disabled=!1,this.showAllWallets=!1}render(){return k`
      <button ?disabled=${this.disabled} ontouchstart>
        ${this.templateAllWallets()} ${this.templateWalletImage()}
        <wui-text variant="paragraph-500" color="inherit">${this.name}</wui-text>
        ${this.templateStatus()}
      </button>
    `}templateAllWallets(){return this.showAllWallets&&this.imageSrc?k` <wui-all-wallets-image .imageeSrc=${this.imageSrc}> </wui-all-wallets-image> `:this.showAllWallets&&this.walletIcon?k` <wui-wallet-image .walletIcon=${this.walletIcon} size="sm"> </wui-wallet-image> `:null}templateWalletImage(){return!this.showAllWallets&&this.imageSrc?k`<wui-wallet-image
        size="sm"
        imageSrc=${this.imageSrc}
        name=${this.name}
      ></wui-wallet-image>`:!this.showAllWallets&&!this.imageSrc?k`<wui-wallet-image size="sm" name=${this.name}></wui-wallet-image>`:null}templateStatus(){return this.tagLabel&&this.tagVariant?k`<wui-tag variant=${this.tagVariant}>${this.tagLabel}</wui-tag>`:this.icon?k`<wui-icon color="inherit" size="sm" name=${this.icon}></wui-icon>`:null}};sn.styles=[De,dt,ZE];Qn([M({type:Array})],sn.prototype,"walletImages",void 0);Qn([M()],sn.prototype,"imageSrc",void 0);Qn([M()],sn.prototype,"name",void 0);Qn([M()],sn.prototype,"tagLabel",void 0);Qn([M()],sn.prototype,"tagVariant",void 0);Qn([M()],sn.prototype,"icon",void 0);Qn([M()],sn.prototype,"walletIcon",void 0);Qn([M({type:Boolean})],sn.prototype,"disabled",void 0);Qn([M({type:Boolean})],sn.prototype,"showAllWallets",void 0);sn=Qn([ue("wui-list-wallet")],sn);const JE=we`
  :host {
    display: block;
    width: 40px;
    height: 40px;
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-gray-glass-010);
    overflow: hidden;
  }

  wui-icon {
    width: 100%;
    height: 100%;
  }
`;var vb=globalThis&&globalThis.__decorate||function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};let xl=class extends de{constructor(){super(...arguments),this.logo="google"}render(){return k`<wui-icon color="inherit" size="inherit" name=${this.logo}></wui-icon> `}};xl.styles=[De,JE];vb([M()],xl.prototype,"logo",void 0);xl=vb([ue("wui-logo")],xl);const YE=we`
  :host {
    display: block;
  }

  button {
    width: 50px;
    height: 50px;
    background: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
  }
`;var Dh=globalThis&&globalThis.__decorate||function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};let Da=class extends de{constructor(){super(...arguments),this.logo="google",this.disabled=!1}render(){return k`
      <button ?disabled=${this.disabled} ontouchstart>
        <wui-logo logo=${this.logo}></wui-logo>
      </button>
    `}};Da.styles=[De,dt,YE];Dh([M()],Da.prototype,"logo",void 0);Dh([M({type:Boolean})],Da.prototype,"disabled",void 0);Da=Dh([ue("wui-logo-select")],Da);const XE=we`
  :host {
    display: block;
  }

  button {
    border-radius: var(--wui-border-radius-3xl);
    display: flex;
    gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-2xs) var(--wui-spacing-s) var(--wui-spacing-2xs)
      var(--wui-spacing-xs);
    border: 1px solid var(--wui-gray-glass-010);
    background-color: var(--wui-gray-glass-005);
    color: var(--wui-color-fg-100);
  }

  button:disabled {
    border: 1px solid var(--wui-gray-glass-005);
    background-color: var(--wui-gray-glass-015);
    color: var(--wui-gray-glass-015);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-gray-glass-010);
    }

    button:active:enabled {
      background-color: var(--wui-gray-glass-015);
    }
  }

  wui-image,
  wui-icon-box {
    border-radius: var(--wui-border-radius-3xl);
    width: 24px;
    height: 24px;
    outline: 2px solid var(--wui-gray-glass-005);
  }
`;var Ih=globalThis&&globalThis.__decorate||function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};let Ia=class extends de{constructor(){super(...arguments),this.imageSrc=void 0,this.disabled=!1}render(){return k`
      <button ?disabled=${this.disabled}>
        ${this.visualTemplate()}
        <wui-text variant="paragraph-600" color="inherit">
          <slot></slot>
        </wui-text>
      </button>
    `}visualTemplate(){return this.imageSrc?k`<wui-image src=${this.imageSrc}></wui-image>`:k`
      <wui-icon-box
        size="sm"
        iconColor="inverse-100"
        backgroundColor="fg-100"
        icon="networkPlaceholder"
      ></wui-icon-box>
    `}};Ia.styles=[De,dt,XE];Ih([M()],Ia.prototype,"imageSrc",void 0);Ih([M({type:Boolean})],Ia.prototype,"disabled",void 0);Ia=Ih([ue("wui-network-button")],Ia);const QE=we`
  :host {
    position: relative;
    display: block;
  }
`;var xb=globalThis&&globalThis.__decorate||function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};let _l=class extends de{constructor(){super(...arguments),this.length=6,this.numerics=[],this.handleKeyDown=(t,n)=>{const r=t.target,i=this.getInputElement(r),o=["ArrowLeft","ArrowRight","Shift","Delete"];if(!i)return;o.includes(t.key)&&t.preventDefault();const s=i.selectionStart;switch(t.key){case"ArrowLeft":s&&i.setSelectionRange(s+1,s+1),this.focusInputField("prev",n);break;case"ArrowRight":this.focusInputField("next",n);break;case"Shift":this.focusInputField("next",n);break;case"Delete":i.value===""?this.focusInputField("prev",n):i.value="";break;case"Backspace":i.value===""?this.focusInputField("prev",n):i.value="";break}},this.focusInputField=(t,n)=>{if(t==="next"){const r=n+1,i=this.numerics[r<this.length?r:n],o=i?this.getInputElement(i):void 0;o&&o.focus()}if(t==="prev"){const r=n-1,i=this.numerics[r>-1?r:n],o=i?this.getInputElement(i):void 0;o&&o.focus()}}}firstUpdated(){var n;const t=(n=this.shadowRoot)==null?void 0:n.querySelectorAll("wui-input-numeric");t&&(this.numerics=Array.from(t))}render(){return k`
      <wui-flex gap="xxs">
        ${[...Array(this.length)].map((t,n)=>k`
            <wui-input-numeric
              @input=${r=>this.handleInput(r,n)}
              @keydown=${r=>this.handleKeyDown(r,n)}
            >
            </wui-input-numeric>
          `)}
      </wui-flex>
    `}handleInput(t,n){const r=t.target,i=this.getInputElement(r);if(i){const o=i.value;t.inputType==="insertFromPaste"?this.handlePaste(i,o,n):Ye.isNumber(o)&&t.data?(i.value=t.data,this.focusInputField("next",n)):i.value=""}}handlePaste(t,n,r){const i=n[0];if(i&&Ye.isNumber(i)){t.value=i;const s=n.substring(1);if(r+1<this.length&&s.length){const a=this.numerics[r+1],c=a?this.getInputElement(a):void 0;c&&this.handlePaste(c,s,r+1)}else this.focusInputField("next",r)}else t.value=""}getInputElement(t){var n;return(n=t.shadowRoot)!=null&&n.querySelector("input")?t.shadowRoot.querySelector("input"):null}};_l.styles=[De,QE];xb([M({type:Number})],_l.prototype,"length",void 0);_l=xb([ue("wui-otp")],_l);var sc={},e9=function(){return typeof Promise=="function"&&Promise.prototype&&Promise.prototype.then},_b={},Xt={};let Rh;const t9=[0,26,44,70,100,134,172,196,242,292,346,404,466,532,581,655,733,815,901,991,1085,1156,1258,1364,1474,1588,1706,1828,1921,2051,2185,2323,2465,2611,2761,2876,3034,3196,3362,3532,3706];Xt.getSymbolSize=function(t){if(!t)throw new Error('"version" cannot be null or undefined');if(t<1||t>40)throw new Error('"version" should be in range from 1 to 40');return t*4+17};Xt.getSymbolTotalCodewords=function(t){return t9[t]};Xt.getBCHDigit=function(e){let t=0;for(;e!==0;)t++,e>>>=1;return t};Xt.setToSJISFunction=function(t){if(typeof t!="function")throw new Error('"toSJISFunc" is not a valid function.');Rh=t};Xt.isKanjiModeEnabled=function(){return typeof Rh<"u"};Xt.toSJIS=function(t){return Rh(t)};var Su={};(function(e){e.L={bit:1},e.M={bit:0},e.Q={bit:3},e.H={bit:2};function t(n){if(typeof n!="string")throw new Error("Param is not a string");switch(n.toLowerCase()){case"l":case"low":return e.L;case"m":case"medium":return e.M;case"q":case"quartile":return e.Q;case"h":case"high":return e.H;default:throw new Error("Unknown EC Level: "+n)}}e.isValid=function(r){return r&&typeof r.bit<"u"&&r.bit>=0&&r.bit<4},e.from=function(r,i){if(e.isValid(r))return r;try{return t(r)}catch{return i}}})(Su);function Cb(){this.buffer=[],this.length=0}Cb.prototype={get:function(e){const t=Math.floor(e/8);return(this.buffer[t]>>>7-e%8&1)===1},put:function(e,t){for(let n=0;n<t;n++)this.putBit((e>>>t-n-1&1)===1)},getLengthInBits:function(){return this.length},putBit:function(e){const t=Math.floor(this.length/8);this.buffer.length<=t&&this.buffer.push(0),e&&(this.buffer[t]|=128>>>this.length%8),this.length++}};var n9=Cb;function ac(e){if(!e||e<1)throw new Error("BitMatrix size must be defined and greater than 0");this.size=e,this.data=new Uint8Array(e*e),this.reservedBit=new Uint8Array(e*e)}ac.prototype.set=function(e,t,n,r){const i=e*this.size+t;this.data[i]=n,r&&(this.reservedBit[i]=!0)};ac.prototype.get=function(e,t){return this.data[e*this.size+t]};ac.prototype.xor=function(e,t,n){this.data[e*this.size+t]^=n};ac.prototype.isReserved=function(e,t){return this.reservedBit[e*this.size+t]};var r9=ac,Eb={};(function(e){const t=Xt.getSymbolSize;e.getRowColCoords=function(r){if(r===1)return[];const i=Math.floor(r/7)+2,o=t(r),s=o===145?26:Math.ceil((o-13)/(2*i-2))*2,a=[o-7];for(let c=1;c<i-1;c++)a[c]=a[c-1]-s;return a.push(6),a.reverse()},e.getPositions=function(r){const i=[],o=e.getRowColCoords(r),s=o.length;for(let a=0;a<s;a++)for(let c=0;c<s;c++)a===0&&c===0||a===0&&c===s-1||a===s-1&&c===0||i.push([o[a],o[c]]);return i}})(Eb);var Tb={};const i9=Xt.getSymbolSize,X1=7;Tb.getPositions=function(t){const n=i9(t);return[[0,0],[n-X1,0],[0,n-X1]]};var Sb={};(function(e){e.Patterns={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7};const t={N1:3,N2:3,N3:40,N4:10};e.isValid=function(i){return i!=null&&i!==""&&!isNaN(i)&&i>=0&&i<=7},e.from=function(i){return e.isValid(i)?parseInt(i,10):void 0},e.getPenaltyN1=function(i){const o=i.size;let s=0,a=0,c=0,u=null,l=null;for(let d=0;d<o;d++){a=c=0,u=l=null;for(let p=0;p<o;p++){let g=i.get(d,p);g===u?a++:(a>=5&&(s+=t.N1+(a-5)),u=g,a=1),g=i.get(p,d),g===l?c++:(c>=5&&(s+=t.N1+(c-5)),l=g,c=1)}a>=5&&(s+=t.N1+(a-5)),c>=5&&(s+=t.N1+(c-5))}return s},e.getPenaltyN2=function(i){const o=i.size;let s=0;for(let a=0;a<o-1;a++)for(let c=0;c<o-1;c++){const u=i.get(a,c)+i.get(a,c+1)+i.get(a+1,c)+i.get(a+1,c+1);(u===4||u===0)&&s++}return s*t.N2},e.getPenaltyN3=function(i){const o=i.size;let s=0,a=0,c=0;for(let u=0;u<o;u++){a=c=0;for(let l=0;l<o;l++)a=a<<1&2047|i.get(u,l),l>=10&&(a===1488||a===93)&&s++,c=c<<1&2047|i.get(l,u),l>=10&&(c===1488||c===93)&&s++}return s*t.N3},e.getPenaltyN4=function(i){let o=0;const s=i.data.length;for(let c=0;c<s;c++)o+=i.data[c];return Math.abs(Math.ceil(o*100/s/5)-10)*t.N4};function n(r,i,o){switch(r){case e.Patterns.PATTERN000:return(i+o)%2===0;case e.Patterns.PATTERN001:return i%2===0;case e.Patterns.PATTERN010:return o%3===0;case e.Patterns.PATTERN011:return(i+o)%3===0;case e.Patterns.PATTERN100:return(Math.floor(i/2)+Math.floor(o/3))%2===0;case e.Patterns.PATTERN101:return i*o%2+i*o%3===0;case e.Patterns.PATTERN110:return(i*o%2+i*o%3)%2===0;case e.Patterns.PATTERN111:return(i*o%3+(i+o)%2)%2===0;default:throw new Error("bad maskPattern:"+r)}}e.applyMask=function(i,o){const s=o.size;for(let a=0;a<s;a++)for(let c=0;c<s;c++)o.isReserved(c,a)||o.xor(c,a,n(i,c,a))},e.getBestMask=function(i,o){const s=Object.keys(e.Patterns).length;let a=0,c=1/0;for(let u=0;u<s;u++){o(u),e.applyMask(u,i);const l=e.getPenaltyN1(i)+e.getPenaltyN2(i)+e.getPenaltyN3(i)+e.getPenaltyN4(i);e.applyMask(u,i),l<c&&(c=l,a=u)}return a}})(Sb);var Au={};const Nr=Su,Oc=[1,1,1,1,1,1,1,1,1,1,2,2,1,2,2,4,1,2,4,4,2,4,4,4,2,4,6,5,2,4,6,6,2,5,8,8,4,5,8,8,4,5,8,11,4,8,10,11,4,9,12,16,4,9,16,16,6,10,12,18,6,10,17,16,6,11,16,19,6,13,18,21,7,14,21,25,8,16,20,25,8,17,23,25,9,17,23,34,9,18,25,30,10,20,27,32,12,21,29,35,12,23,34,37,12,25,34,40,13,26,35,42,14,28,38,45,15,29,40,48,16,31,43,51,17,33,45,54,18,35,48,57,19,37,51,60,19,38,53,63,20,40,56,66,21,43,59,70,22,45,62,74,24,47,65,77,25,49,68,81],Dc=[7,10,13,17,10,16,22,28,15,26,36,44,20,36,52,64,26,48,72,88,36,64,96,112,40,72,108,130,48,88,132,156,60,110,160,192,72,130,192,224,80,150,224,264,96,176,260,308,104,198,288,352,120,216,320,384,132,240,360,432,144,280,408,480,168,308,448,532,180,338,504,588,196,364,546,650,224,416,600,700,224,442,644,750,252,476,690,816,270,504,750,900,300,560,810,960,312,588,870,1050,336,644,952,1110,360,700,1020,1200,390,728,1050,1260,420,784,1140,1350,450,812,1200,1440,480,868,1290,1530,510,924,1350,1620,540,980,1440,1710,570,1036,1530,1800,570,1064,1590,1890,600,1120,1680,1980,630,1204,1770,2100,660,1260,1860,2220,720,1316,1950,2310,750,1372,2040,2430];Au.getBlocksCount=function(t,n){switch(n){case Nr.L:return Oc[(t-1)*4+0];case Nr.M:return Oc[(t-1)*4+1];case Nr.Q:return Oc[(t-1)*4+2];case Nr.H:return Oc[(t-1)*4+3];default:return}};Au.getTotalCodewordsCount=function(t,n){switch(n){case Nr.L:return Dc[(t-1)*4+0];case Nr.M:return Dc[(t-1)*4+1];case Nr.Q:return Dc[(t-1)*4+2];case Nr.H:return Dc[(t-1)*4+3];default:return}};var Ab={},$u={};const Vs=new Uint8Array(512),Cl=new Uint8Array(256);(function(){let t=1;for(let n=0;n<255;n++)Vs[n]=t,Cl[t]=n,t<<=1,t&256&&(t^=285);for(let n=255;n<512;n++)Vs[n]=Vs[n-255]})();$u.log=function(t){if(t<1)throw new Error("log("+t+")");return Cl[t]};$u.exp=function(t){return Vs[t]};$u.mul=function(t,n){return t===0||n===0?0:Vs[Cl[t]+Cl[n]]};(function(e){const t=$u;e.mul=function(r,i){const o=new Uint8Array(r.length+i.length-1);for(let s=0;s<r.length;s++)for(let a=0;a<i.length;a++)o[s+a]^=t.mul(r[s],i[a]);return o},e.mod=function(r,i){let o=new Uint8Array(r);for(;o.length-i.length>=0;){const s=o[0];for(let c=0;c<i.length;c++)o[c]^=t.mul(i[c],s);let a=0;for(;a<o.length&&o[a]===0;)a++;o=o.slice(a)}return o},e.generateECPolynomial=function(r){let i=new Uint8Array([1]);for(let o=0;o<r;o++)i=e.mul(i,new Uint8Array([1,t.exp(o)]));return i}})(Ab);const $b=Ab;function Nh(e){this.genPoly=void 0,this.degree=e,this.degree&&this.initialize(this.degree)}Nh.prototype.initialize=function(t){this.degree=t,this.genPoly=$b.generateECPolynomial(this.degree)};Nh.prototype.encode=function(t){if(!this.genPoly)throw new Error("Encoder not initialized");const n=new Uint8Array(t.length+this.degree);n.set(t);const r=$b.mod(n,this.genPoly),i=this.degree-r.length;if(i>0){const o=new Uint8Array(this.degree);return o.set(r,i),o}return r};var o9=Nh,Pb={},ri={},kh={};kh.isValid=function(t){return!isNaN(t)&&t>=1&&t<=40};var er={};const Ob="[0-9]+",s9="[A-Z $%*+\\-./:]+";let Ra="(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";Ra=Ra.replace(/u/g,"\\u");const a9="(?:(?![A-Z0-9 $%*+\\-./:]|"+Ra+`)(?:.|[\r
]))+`;er.KANJI=new RegExp(Ra,"g");er.BYTE_KANJI=new RegExp("[^A-Z0-9 $%*+\\-./:]+","g");er.BYTE=new RegExp(a9,"g");er.NUMERIC=new RegExp(Ob,"g");er.ALPHANUMERIC=new RegExp(s9,"g");const c9=new RegExp("^"+Ra+"$"),l9=new RegExp("^"+Ob+"$"),u9=new RegExp("^[A-Z0-9 $%*+\\-./:]+$");er.testKanji=function(t){return c9.test(t)};er.testNumeric=function(t){return l9.test(t)};er.testAlphanumeric=function(t){return u9.test(t)};(function(e){const t=kh,n=er;e.NUMERIC={id:"Numeric",bit:1,ccBits:[10,12,14]},e.ALPHANUMERIC={id:"Alphanumeric",bit:2,ccBits:[9,11,13]},e.BYTE={id:"Byte",bit:4,ccBits:[8,16,16]},e.KANJI={id:"Kanji",bit:8,ccBits:[8,10,12]},e.MIXED={bit:-1},e.getCharCountIndicator=function(o,s){if(!o.ccBits)throw new Error("Invalid mode: "+o);if(!t.isValid(s))throw new Error("Invalid version: "+s);return s>=1&&s<10?o.ccBits[0]:s<27?o.ccBits[1]:o.ccBits[2]},e.getBestModeForData=function(o){return n.testNumeric(o)?e.NUMERIC:n.testAlphanumeric(o)?e.ALPHANUMERIC:n.testKanji(o)?e.KANJI:e.BYTE},e.toString=function(o){if(o&&o.id)return o.id;throw new Error("Invalid mode")},e.isValid=function(o){return o&&o.bit&&o.ccBits};function r(i){if(typeof i!="string")throw new Error("Param is not a string");switch(i.toLowerCase()){case"numeric":return e.NUMERIC;case"alphanumeric":return e.ALPHANUMERIC;case"kanji":return e.KANJI;case"byte":return e.BYTE;default:throw new Error("Unknown mode: "+i)}}e.from=function(o,s){if(e.isValid(o))return o;try{return r(o)}catch{return s}}})(ri);(function(e){const t=Xt,n=Au,r=Su,i=ri,o=kh,s=7973,a=t.getBCHDigit(s);function c(p,g,w){for(let y=1;y<=40;y++)if(g<=e.getCapacity(y,w,p))return y}function u(p,g){return i.getCharCountIndicator(p,g)+4}function l(p,g){let w=0;return p.forEach(function(y){const x=u(y.mode,g);w+=x+y.getBitsLength()}),w}function d(p,g){for(let w=1;w<=40;w++)if(l(p,w)<=e.getCapacity(w,g,i.MIXED))return w}e.from=function(g,w){return o.isValid(g)?parseInt(g,10):w},e.getCapacity=function(g,w,y){if(!o.isValid(g))throw new Error("Invalid QR Code version");typeof y>"u"&&(y=i.BYTE);const x=t.getSymbolTotalCodewords(g),E=n.getTotalCodewordsCount(g,w),b=(x-E)*8;if(y===i.MIXED)return b;const C=b-u(y,g);switch(y){case i.NUMERIC:return Math.floor(C/10*3);case i.ALPHANUMERIC:return Math.floor(C/11*2);case i.KANJI:return Math.floor(C/13);case i.BYTE:default:return Math.floor(C/8)}},e.getBestVersionForData=function(g,w){let y;const x=r.from(w,r.M);if(Array.isArray(g)){if(g.length>1)return d(g,x);if(g.length===0)return 1;y=g[0]}else y=g;return c(y.mode,y.getLength(),x)},e.getEncodedBits=function(g){if(!o.isValid(g)||g<7)throw new Error("Invalid QR Code version");let w=g<<12;for(;t.getBCHDigit(w)-a>=0;)w^=s<<t.getBCHDigit(w)-a;return g<<12|w}})(Pb);var Db={};const kf=Xt,Ib=1335,d9=21522,Q1=kf.getBCHDigit(Ib);Db.getEncodedBits=function(t,n){const r=t.bit<<3|n;let i=r<<10;for(;kf.getBCHDigit(i)-Q1>=0;)i^=Ib<<kf.getBCHDigit(i)-Q1;return(r<<10|i)^d9};var Rb={};const f9=ri;function Lo(e){this.mode=f9.NUMERIC,this.data=e.toString()}Lo.getBitsLength=function(t){return 10*Math.floor(t/3)+(t%3?t%3*3+1:0)};Lo.prototype.getLength=function(){return this.data.length};Lo.prototype.getBitsLength=function(){return Lo.getBitsLength(this.data.length)};Lo.prototype.write=function(t){let n,r,i;for(n=0;n+3<=this.data.length;n+=3)r=this.data.substr(n,3),i=parseInt(r,10),t.put(i,10);const o=this.data.length-n;o>0&&(r=this.data.substr(n),i=parseInt(r,10),t.put(i,o*3+1))};var h9=Lo;const p9=ri,Sd=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];function Uo(e){this.mode=p9.ALPHANUMERIC,this.data=e}Uo.getBitsLength=function(t){return 11*Math.floor(t/2)+6*(t%2)};Uo.prototype.getLength=function(){return this.data.length};Uo.prototype.getBitsLength=function(){return Uo.getBitsLength(this.data.length)};Uo.prototype.write=function(t){let n;for(n=0;n+2<=this.data.length;n+=2){let r=Sd.indexOf(this.data[n])*45;r+=Sd.indexOf(this.data[n+1]),t.put(r,11)}this.data.length%2&&t.put(Sd.indexOf(this.data[n]),6)};var m9=Uo,g9=function(t){for(var n=[],r=t.length,i=0;i<r;i++){var o=t.charCodeAt(i);if(o>=55296&&o<=56319&&r>i+1){var s=t.charCodeAt(i+1);s>=56320&&s<=57343&&(o=(o-55296)*1024+s-56320+65536,i+=1)}if(o<128){n.push(o);continue}if(o<2048){n.push(o>>6|192),n.push(o&63|128);continue}if(o<55296||o>=57344&&o<65536){n.push(o>>12|224),n.push(o>>6&63|128),n.push(o&63|128);continue}if(o>=65536&&o<=1114111){n.push(o>>18|240),n.push(o>>12&63|128),n.push(o>>6&63|128),n.push(o&63|128);continue}n.push(239,191,189)}return new Uint8Array(n).buffer};const w9=g9,b9=ri;function Fo(e){this.mode=b9.BYTE,typeof e=="string"&&(e=w9(e)),this.data=new Uint8Array(e)}Fo.getBitsLength=function(t){return t*8};Fo.prototype.getLength=function(){return this.data.length};Fo.prototype.getBitsLength=function(){return Fo.getBitsLength(this.data.length)};Fo.prototype.write=function(e){for(let t=0,n=this.data.length;t<n;t++)e.put(this.data[t],8)};var y9=Fo;const v9=ri,x9=Xt;function jo(e){this.mode=v9.KANJI,this.data=e}jo.getBitsLength=function(t){return t*13};jo.prototype.getLength=function(){return this.data.length};jo.prototype.getBitsLength=function(){return jo.getBitsLength(this.data.length)};jo.prototype.write=function(e){let t;for(t=0;t<this.data.length;t++){let n=x9.toSJIS(this.data[t]);if(n>=33088&&n<=40956)n-=33088;else if(n>=57408&&n<=60351)n-=49472;else throw new Error("Invalid SJIS character: "+this.data[t]+`
Make sure your charset is UTF-8`);n=(n>>>8&255)*192+(n&255),e.put(n,13)}};var _9=jo,Nb={exports:{}};(function(e){var t={single_source_shortest_paths:function(n,r,i){var o={},s={};s[r]=0;var a=t.PriorityQueue.make();a.push(r,0);for(var c,u,l,d,p,g,w,y,x;!a.empty();){c=a.pop(),u=c.value,d=c.cost,p=n[u]||{};for(l in p)p.hasOwnProperty(l)&&(g=p[l],w=d+g,y=s[l],x=typeof s[l]>"u",(x||y>w)&&(s[l]=w,a.push(l,w),o[l]=u))}if(typeof i<"u"&&typeof s[i]>"u"){var E=["Could not find a path from ",r," to ",i,"."].join("");throw new Error(E)}return o},extract_shortest_path_from_predecessor_list:function(n,r){for(var i=[],o=r;o;)i.push(o),n[o],o=n[o];return i.reverse(),i},find_path:function(n,r,i){var o=t.single_source_shortest_paths(n,r,i);return t.extract_shortest_path_from_predecessor_list(o,i)},PriorityQueue:{make:function(n){var r=t.PriorityQueue,i={},o;n=n||{};for(o in r)r.hasOwnProperty(o)&&(i[o]=r[o]);return i.queue=[],i.sorter=n.sorter||r.default_sorter,i},default_sorter:function(n,r){return n.cost-r.cost},push:function(n,r){var i={value:n,cost:r};this.queue.push(i),this.queue.sort(this.sorter)},pop:function(){return this.queue.shift()},empty:function(){return this.queue.length===0}}};e.exports=t})(Nb);var C9=Nb.exports;(function(e){const t=ri,n=h9,r=m9,i=y9,o=_9,s=er,a=Xt,c=C9;function u(E){return unescape(encodeURIComponent(E)).length}function l(E,b,C){const _=[];let T;for(;(T=E.exec(C))!==null;)_.push({data:T[0],index:T.index,mode:b,length:T[0].length});return _}function d(E){const b=l(s.NUMERIC,t.NUMERIC,E),C=l(s.ALPHANUMERIC,t.ALPHANUMERIC,E);let _,T;return a.isKanjiModeEnabled()?(_=l(s.BYTE,t.BYTE,E),T=l(s.KANJI,t.KANJI,E)):(_=l(s.BYTE_KANJI,t.BYTE,E),T=[]),b.concat(C,_,T).sort(function(h,S){return h.index-S.index}).map(function(h){return{data:h.data,mode:h.mode,length:h.length}})}function p(E,b){switch(b){case t.NUMERIC:return n.getBitsLength(E);case t.ALPHANUMERIC:return r.getBitsLength(E);case t.KANJI:return o.getBitsLength(E);case t.BYTE:return i.getBitsLength(E)}}function g(E){return E.reduce(function(b,C){const _=b.length-1>=0?b[b.length-1]:null;return _&&_.mode===C.mode?(b[b.length-1].data+=C.data,b):(b.push(C),b)},[])}function w(E){const b=[];for(let C=0;C<E.length;C++){const _=E[C];switch(_.mode){case t.NUMERIC:b.push([_,{data:_.data,mode:t.ALPHANUMERIC,length:_.length},{data:_.data,mode:t.BYTE,length:_.length}]);break;case t.ALPHANUMERIC:b.push([_,{data:_.data,mode:t.BYTE,length:_.length}]);break;case t.KANJI:b.push([_,{data:_.data,mode:t.BYTE,length:u(_.data)}]);break;case t.BYTE:b.push([{data:_.data,mode:t.BYTE,length:u(_.data)}])}}return b}function y(E,b){const C={},_={start:{}};let T=["start"];for(let $=0;$<E.length;$++){const h=E[$],S=[];for(let U=0;U<h.length;U++){const D=h[U],R=""+$+U;S.push(R),C[R]={node:D,lastCount:0},_[R]={};for(let L=0;L<T.length;L++){const H=T[L];C[H]&&C[H].node.mode===D.mode?(_[H][R]=p(C[H].lastCount+D.length,D.mode)-p(C[H].lastCount,D.mode),C[H].lastCount+=D.length):(C[H]&&(C[H].lastCount=D.length),_[H][R]=p(D.length,D.mode)+4+t.getCharCountIndicator(D.mode,b))}}T=S}for(let $=0;$<T.length;$++)_[T[$]].end=0;return{map:_,table:C}}function x(E,b){let C;const _=t.getBestModeForData(E);if(C=t.from(b,_),C!==t.BYTE&&C.bit<_.bit)throw new Error('"'+E+'" cannot be encoded with mode '+t.toString(C)+`.
 Suggested mode is: `+t.toString(_));switch(C===t.KANJI&&!a.isKanjiModeEnabled()&&(C=t.BYTE),C){case t.NUMERIC:return new n(E);case t.ALPHANUMERIC:return new r(E);case t.KANJI:return new o(E);case t.BYTE:return new i(E)}}e.fromArray=function(b){return b.reduce(function(C,_){return typeof _=="string"?C.push(x(_,null)):_.data&&C.push(x(_.data,_.mode)),C},[])},e.fromString=function(b,C){const _=d(b,a.isKanjiModeEnabled()),T=w(_),$=y(T,C),h=c.find_path($.map,"start","end"),S=[];for(let U=1;U<h.length-1;U++)S.push($.table[h[U]].node);return e.fromArray(g(S))},e.rawSplit=function(b){return e.fromArray(d(b,a.isKanjiModeEnabled()))}})(Rb);const Pu=Xt,Ad=Su,E9=n9,T9=r9,S9=Eb,A9=Tb,Mf=Sb,Bf=Au,$9=o9,El=Pb,P9=Db,O9=ri,$d=Rb;function D9(e,t){const n=e.size,r=A9.getPositions(t);for(let i=0;i<r.length;i++){const o=r[i][0],s=r[i][1];for(let a=-1;a<=7;a++)if(!(o+a<=-1||n<=o+a))for(let c=-1;c<=7;c++)s+c<=-1||n<=s+c||(a>=0&&a<=6&&(c===0||c===6)||c>=0&&c<=6&&(a===0||a===6)||a>=2&&a<=4&&c>=2&&c<=4?e.set(o+a,s+c,!0,!0):e.set(o+a,s+c,!1,!0))}}function I9(e){const t=e.size;for(let n=8;n<t-8;n++){const r=n%2===0;e.set(n,6,r,!0),e.set(6,n,r,!0)}}function R9(e,t){const n=S9.getPositions(t);for(let r=0;r<n.length;r++){const i=n[r][0],o=n[r][1];for(let s=-2;s<=2;s++)for(let a=-2;a<=2;a++)s===-2||s===2||a===-2||a===2||s===0&&a===0?e.set(i+s,o+a,!0,!0):e.set(i+s,o+a,!1,!0)}}function N9(e,t){const n=e.size,r=El.getEncodedBits(t);let i,o,s;for(let a=0;a<18;a++)i=Math.floor(a/3),o=a%3+n-8-3,s=(r>>a&1)===1,e.set(i,o,s,!0),e.set(o,i,s,!0)}function Pd(e,t,n){const r=e.size,i=P9.getEncodedBits(t,n);let o,s;for(o=0;o<15;o++)s=(i>>o&1)===1,o<6?e.set(o,8,s,!0):o<8?e.set(o+1,8,s,!0):e.set(r-15+o,8,s,!0),o<8?e.set(8,r-o-1,s,!0):o<9?e.set(8,15-o-1+1,s,!0):e.set(8,15-o-1,s,!0);e.set(r-8,8,1,!0)}function k9(e,t){const n=e.size;let r=-1,i=n-1,o=7,s=0;for(let a=n-1;a>0;a-=2)for(a===6&&a--;;){for(let c=0;c<2;c++)if(!e.isReserved(i,a-c)){let u=!1;s<t.length&&(u=(t[s]>>>o&1)===1),e.set(i,a-c,u),o--,o===-1&&(s++,o=7)}if(i+=r,i<0||n<=i){i-=r,r=-r;break}}}function M9(e,t,n){const r=new E9;n.forEach(function(c){r.put(c.mode.bit,4),r.put(c.getLength(),O9.getCharCountIndicator(c.mode,e)),c.write(r)});const i=Pu.getSymbolTotalCodewords(e),o=Bf.getTotalCodewordsCount(e,t),s=(i-o)*8;for(r.getLengthInBits()+4<=s&&r.put(0,4);r.getLengthInBits()%8!==0;)r.putBit(0);const a=(s-r.getLengthInBits())/8;for(let c=0;c<a;c++)r.put(c%2?17:236,8);return B9(r,e,t)}function B9(e,t,n){const r=Pu.getSymbolTotalCodewords(t),i=Bf.getTotalCodewordsCount(t,n),o=r-i,s=Bf.getBlocksCount(t,n),a=r%s,c=s-a,u=Math.floor(r/s),l=Math.floor(o/s),d=l+1,p=u-l,g=new $9(p);let w=0;const y=new Array(s),x=new Array(s);let E=0;const b=new Uint8Array(e.buffer);for(let h=0;h<s;h++){const S=h<c?l:d;y[h]=b.slice(w,w+S),x[h]=g.encode(y[h]),w+=S,E=Math.max(E,S)}const C=new Uint8Array(r);let _=0,T,$;for(T=0;T<E;T++)for($=0;$<s;$++)T<y[$].length&&(C[_++]=y[$][T]);for(T=0;T<p;T++)for($=0;$<s;$++)C[_++]=x[$][T];return C}function L9(e,t,n,r){let i;if(Array.isArray(e))i=$d.fromArray(e);else if(typeof e=="string"){let u=t;if(!u){const l=$d.rawSplit(e);u=El.getBestVersionForData(l,n)}i=$d.fromString(e,u||40)}else throw new Error("Invalid data");const o=El.getBestVersionForData(i,n);if(!o)throw new Error("The amount of data is too big to be stored in a QR Code");if(!t)t=o;else if(t<o)throw new Error(`
The chosen QR Code version cannot contain this amount of data.
Minimum version required to store current data is: `+o+`.
`);const s=M9(t,n,i),a=Pu.getSymbolSize(t),c=new T9(a);return D9(c,t),I9(c),R9(c,t),Pd(c,n,0),t>=7&&N9(c,t),k9(c,s),isNaN(r)&&(r=Mf.getBestMask(c,Pd.bind(null,c,n))),Mf.applyMask(r,c),Pd(c,n,r),{modules:c,version:t,errorCorrectionLevel:n,maskPattern:r,segments:i}}_b.create=function(t,n){if(typeof t>"u"||t==="")throw new Error("No input text");let r=Ad.M,i,o;return typeof n<"u"&&(r=Ad.from(n.errorCorrectionLevel,Ad.M),i=El.from(n.version),o=Mf.from(n.maskPattern),n.toSJISFunc&&Pu.setToSJISFunction(n.toSJISFunc)),L9(t,i,r,o)};var kb={},Mh={};(function(e){function t(n){if(typeof n=="number"&&(n=n.toString()),typeof n!="string")throw new Error("Color should be defined as hex string");let r=n.slice().replace("#","").split("");if(r.length<3||r.length===5||r.length>8)throw new Error("Invalid hex color: "+n);(r.length===3||r.length===4)&&(r=Array.prototype.concat.apply([],r.map(function(o){return[o,o]}))),r.length===6&&r.push("F","F");const i=parseInt(r.join(""),16);return{r:i>>24&255,g:i>>16&255,b:i>>8&255,a:i&255,hex:"#"+r.slice(0,6).join("")}}e.getOptions=function(r){r||(r={}),r.color||(r.color={});const i=typeof r.margin>"u"||r.margin===null||r.margin<0?4:r.margin,o=r.width&&r.width>=21?r.width:void 0,s=r.scale||4;return{width:o,scale:o?4:s,margin:i,color:{dark:t(r.color.dark||"#000000ff"),light:t(r.color.light||"#ffffffff")},type:r.type,rendererOpts:r.rendererOpts||{}}},e.getScale=function(r,i){return i.width&&i.width>=r+i.margin*2?i.width/(r+i.margin*2):i.scale},e.getImageWidth=function(r,i){const o=e.getScale(r,i);return Math.floor((r+i.margin*2)*o)},e.qrToImageData=function(r,i,o){const s=i.modules.size,a=i.modules.data,c=e.getScale(s,o),u=Math.floor((s+o.margin*2)*c),l=o.margin*c,d=[o.color.light,o.color.dark];for(let p=0;p<u;p++)for(let g=0;g<u;g++){let w=(p*u+g)*4,y=o.color.light;if(p>=l&&g>=l&&p<u-l&&g<u-l){const x=Math.floor((p-l)/c),E=Math.floor((g-l)/c);y=d[a[x*s+E]?1:0]}r[w++]=y.r,r[w++]=y.g,r[w++]=y.b,r[w]=y.a}}})(Mh);(function(e){const t=Mh;function n(i,o,s){i.clearRect(0,0,o.width,o.height),o.style||(o.style={}),o.height=s,o.width=s,o.style.height=s+"px",o.style.width=s+"px"}function r(){try{return document.createElement("canvas")}catch{throw new Error("You need to specify a canvas element")}}e.render=function(o,s,a){let c=a,u=s;typeof c>"u"&&(!s||!s.getContext)&&(c=s,s=void 0),s||(u=r()),c=t.getOptions(c);const l=t.getImageWidth(o.modules.size,c),d=u.getContext("2d"),p=d.createImageData(l,l);return t.qrToImageData(p.data,o,c),n(d,u,l),d.putImageData(p,0,0),u},e.renderToDataURL=function(o,s,a){let c=a;typeof c>"u"&&(!s||!s.getContext)&&(c=s,s=void 0),c||(c={});const u=e.render(o,s,c),l=c.type||"image/png",d=c.rendererOpts||{};return u.toDataURL(l,d.quality)}})(kb);var Mb={};const U9=Mh;function em(e,t){const n=e.a/255,r=t+'="'+e.hex+'"';return n<1?r+" "+t+'-opacity="'+n.toFixed(2).slice(1)+'"':r}function Od(e,t,n){let r=e+t;return typeof n<"u"&&(r+=" "+n),r}function F9(e,t,n){let r="",i=0,o=!1,s=0;for(let a=0;a<e.length;a++){const c=Math.floor(a%t),u=Math.floor(a/t);!c&&!o&&(o=!0),e[a]?(s++,a>0&&c>0&&e[a-1]||(r+=o?Od("M",c+n,.5+u+n):Od("m",i,0),i=0,o=!1),c+1<t&&e[a+1]||(r+=Od("h",s),s=0)):i++}return r}Mb.render=function(t,n,r){const i=U9.getOptions(n),o=t.modules.size,s=t.modules.data,a=o+i.margin*2,c=i.color.light.a?"<path "+em(i.color.light,"fill")+' d="M0 0h'+a+"v"+a+'H0z"/>':"",u="<path "+em(i.color.dark,"stroke")+' d="'+F9(s,o,i.margin)+'"/>',l='viewBox="0 0 '+a+" "+a+'"',p='<svg xmlns="http://www.w3.org/2000/svg" '+(i.width?'width="'+i.width+'" height="'+i.width+'" ':"")+l+' shape-rendering="crispEdges">'+c+u+`</svg>
`;return typeof r=="function"&&r(null,p),p};const j9=e9,Lf=_b,Bb=kb,W9=Mb;function Bh(e,t,n,r,i){const o=[].slice.call(arguments,1),s=o.length,a=typeof o[s-1]=="function";if(!a&&!j9())throw new Error("Callback required as last argument");if(a){if(s<2)throw new Error("Too few arguments provided");s===2?(i=n,n=t,t=r=void 0):s===3&&(t.getContext&&typeof i>"u"?(i=r,r=void 0):(i=r,r=n,n=t,t=void 0))}else{if(s<1)throw new Error("Too few arguments provided");return s===1?(n=t,t=r=void 0):s===2&&!t.getContext&&(r=n,n=t,t=void 0),new Promise(function(c,u){try{const l=Lf.create(n,r);c(e(l,t,r))}catch(l){u(l)}})}try{const c=Lf.create(n,r);i(null,e(c,t,r))}catch(c){i(c)}}sc.create=Lf.create;sc.toCanvas=Bh.bind(null,Bb.render);sc.toDataURL=Bh.bind(null,Bb.renderToDataURL);sc.toString=Bh.bind(null,function(e,t,n){return W9.render(e,n)});const H9=.1,tm=2.5,ir=7;function Dd(e,t,n){return e===t?!1:(e-t<0?t-e:e-t)<=n+H9}function z9(e,t){const n=Array.prototype.slice.call(sc.create(e,{errorCorrectionLevel:t}).modules.data,0),r=Math.sqrt(n.length);return n.reduce((i,o,s)=>(s%r===0?i.push([o]):i[i.length-1].push(o))&&i,[])}const q9={generate(e,t,n){const r="#141414",i="transparent",s=[],a=z9(e,"Q"),c=t/a.length,u=[{x:0,y:0},{x:1,y:0},{x:0,y:1}];u.forEach(({x:y,y:x})=>{const E=(a.length-ir)*c*y,b=(a.length-ir)*c*x,C=.45;for(let _=0;_<u.length;_+=1){const T=c*(ir-_*2);s.push(ge`
            <rect
              fill=${_===2?r:i}
              width=${_===0?T-5:T}
              rx= ${_===0?(T-5)*C:T*C}
              ry= ${_===0?(T-5)*C:T*C}
              stroke=${r}
              stroke-width=${_===0?5:0}
              height=${_===0?T-5:T}
              x= ${_===0?b+c*_+5/2:b+c*_}
              y= ${_===0?E+c*_+5/2:E+c*_}
            />
          `)}});const l=Math.floor((n+25)/c),d=a.length/2-l/2,p=a.length/2+l/2-1,g=[];a.forEach((y,x)=>{y.forEach((E,b)=>{if(a[x][b]&&!(x<ir&&b<ir||x>a.length-(ir+1)&&b<ir||x<ir&&b>a.length-(ir+1))&&!(x>d&&x<p&&b>d&&b<p)){const C=x*c+c/2,_=b*c+c/2;g.push([C,_])}})});const w={};return g.forEach(([y,x])=>{var E;w[y]?(E=w[y])==null||E.push(x):w[y]=[x]}),Object.entries(w).map(([y,x])=>{const E=x.filter(b=>x.every(C=>!Dd(b,C,c)));return[Number(y),E]}).forEach(([y,x])=>{x.forEach(E=>{s.push(ge`<circle cx=${y} cy=${E} fill=${r} r=${c/tm} />`)})}),Object.entries(w).filter(([y,x])=>x.length>1).map(([y,x])=>{const E=x.filter(b=>x.some(C=>Dd(b,C,c)));return[Number(y),E]}).map(([y,x])=>{x.sort((b,C)=>b<C?-1:1);const E=[];for(const b of x){const C=E.find(_=>_.some(T=>Dd(b,T,c)));C?C.push(b):E.push([b])}return[y,E.map(b=>[b[0],b[b.length-1]])]}).forEach(([y,x])=>{x.forEach(([E,b])=>{s.push(ge`
              <line
                x1=${y}
                x2=${y}
                y1=${E}
                y2=${b}
                stroke=${r}
                stroke-width=${c/(tm/2)}
                stroke-linecap="round"
              />
            `)})}),s}},V9=we`
  :host {
    position: relative;
    user-select: none;
    display: block;
    overflow: hidden;
    aspect-ratio: 1 / 1;
    width: var(--local-size);
  }

  :host([data-theme='dark']) {
    border-radius: clamp(0px, var(--wui-border-radius-l), 40px);
    background-color: var(--wui-color-inverse-100);
    padding: var(--wui-spacing-l);
  }

  :host([data-theme='light']) {
    outline: 1px solid var(--wui-color-bg-125);
    background-color: var(--wui-color-bg-125);
  }

  svg:first-child,
  wui-image,
  wui-icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
  }

  wui-image {
    width: 25%;
    height: 25%;
    border-radius: var(--wui-border-radius-xs);
  }

  wui-icon {
    width: 100%;
    height: 100%;
    color: #3396ff !important;
    transform: translateY(-50%) translateX(-50%) scale(0.25);
  }
`;var ds=globalThis&&globalThis.__decorate||function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};let Jr=class extends de{constructor(){super(...arguments),this.uri="",this.size=0,this.theme="dark",this.imageSrc=void 0,this.alt=void 0}render(){return this.dataset.theme=this.theme,this.style.cssText=`--local-size: ${this.size}px`,k`${this.templateVisual()} ${this.templateSvg()}`}templateSvg(){const t=this.theme==="light"?this.size:this.size-32;return ge`
      <svg height=${t} width=${t}>
        ${q9.generate(this.uri,t,t/4)}
      </svg>
    `}templateVisual(){return this.imageSrc?k`<wui-image src=${this.imageSrc} alt=${this.alt??"logo"}></wui-image>`:k`<wui-icon size="inherit" color="inherit" name="walletConnect"></wui-icon>`}};Jr.styles=[De,V9];ds([M()],Jr.prototype,"uri",void 0);ds([M({type:Number})],Jr.prototype,"size",void 0);ds([M()],Jr.prototype,"theme",void 0);ds([M()],Jr.prototype,"imageSrc",void 0);ds([M()],Jr.prototype,"alt",void 0);Jr=ds([ue("wui-qr-code")],Jr);const G9=we`
  :host {
    position: relative;
    display: inline-block;
    width: 100%;
  }
`;var K9=globalThis&&globalThis.__decorate||function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};let Uf=class extends de{constructor(){super(...arguments),this.inputComponentRef=pb()}render(){return k`
      <wui-input-text
        ${mb(this.inputComponentRef)}
        placeholder="Search wallet"
        icon="search"
        type="search"
        enterKeyHint="search"
        size="sm"
      >
        <wui-input-element @click=${this.clearValue} icon="close"></wui-input-element>
      </wui-input-text>
    `}clearValue(){const t=this.inputComponentRef.value,n=t==null?void 0:t.inputElementRef.value;n&&(n.value="",n.focus(),n.dispatchEvent(new Event("input")))}};Uf.styles=[De,G9];Uf=K9([ue("wui-search-bar")],Uf);const Z9=we`
  :host {
    display: flex;
    column-gap: var(--wui-spacing-xs);
    align-items: center;
    padding: 7px var(--wui-spacing-l) 7px var(--wui-spacing-xs);
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-gray-glass-005);
    background-color: var(--wui-color-bg-175);
    box-shadow:
      0px 14px 64px -4px rgba(0, 0, 0, 0.15),
      0px 8px 22px -6px rgba(0, 0, 0, 0.15);
  }
`;var cc=globalThis&&globalThis.__decorate||function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};let Li=class extends de{constructor(){super(...arguments),this.backgroundColor="accent-100",this.iconColor="accent-100",this.icon="checkmark",this.message=""}render(){return k`
      <wui-icon-box
        size="sm"
        iconColor=${this.iconColor}
        backgroundColor=${this.backgroundColor}
        icon=${this.icon}
      ></wui-icon-box>
      <wui-text variant="paragraph-500" color="fg-100">${this.message}</wui-text>
    `}};Li.styles=[De,Z9];cc([M()],Li.prototype,"backgroundColor",void 0);cc([M()],Li.prototype,"iconColor",void 0);cc([M()],Li.prototype,"icon",void 0);cc([M()],Li.prototype,"message",void 0);Li=cc([ue("wui-snackbar")],Li);const J9=we`
  :host {
    display: inline-flex;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-3xl);
    padding: var(--wui-spacing-3xs);
    position: relative;
    height: 36px;
    overflow: hidden;
  }

  :host::before {
    content: '';
    position: absolute;
    pointer-events: none;
    top: 4px;
    left: 4px;
    display: block;
    width: var(--local-tab-width);
    height: 28px;
    border-radius: var(--wui-border-radius-3xl);
    background-color: var(--wui-gray-glass-002);
    box-shadow: inset 0 0 0 1px var(--wui-gray-glass-002);
    transform: translateX(calc(var(--local-tab) * var(--local-tab-width)));
    transition: transform var(--wui-ease-out-power-2) var(--wui-duration-lg);
  }

  :host([data-type='flex'])::before {
    left: 3px;
    transform: translateX(calc((var(--local-tab) * 34px) + (var(--local-tab) * 4px)));
  }

  :host([data-type='flex']) {
    display: flex;
    padding: 0px 0px 0px 12px;
    gap: 4px;
  }

  :host([data-type='flex']) > button > wui-text {
    position: absolute;
    left: 18px;
    opacity: 0;
  }

  button[data-active='true'] > wui-icon,
  button[data-active='true'] > wui-text {
    color: var(--wui-color-fg-100);
  }

  button[data-active='false'] > wui-icon,
  button[data-active='false'] > wui-text {
    color: var(--wui-color-fg-200);
  }

  button[data-active='true']:disabled,
  button[data-active='false']:disabled {
    background-color: transparent;
    opacity: 0.5;
    cursor: not-allowed;
  }

  button[data-active='true']:disabled > wui-text {
    color: var(--wui-color-fg-200);
  }

  button[data-active='false']:disabled > wui-text {
    color: var(--wui-color-fg-300);
  }

  button > wui-icon,
  button > wui-text {
    pointer-events: none;
    transition: all var(--wui-ease-out-power-2) var(--wui-duration-lg);
  }

  button {
    width: var(--local-tab-width);
  }

  :host([data-type='flex']) > button {
    width: 34px;
    position: relative;
    display: flex;
    justify-content: flex-start;
  }

  button:hover:enabled,
  button:active:enabled {
    background-color: transparent !important;
  }

  button:hover:enabled > wui-icon,
  button:active:enabled > wui-icon {
    color: var(--wui-color-fg-125);
  }

  button:hover:enabled > wui-text,
  button:active:enabled > wui-text {
    color: var(--wui-color-fg-125);
  }
`;var ii=globalThis&&globalThis.__decorate||function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};let Gn=class extends de{constructor(){super(...arguments),this.tabs=[],this.onTabChange=()=>null,this.buttons=[],this.disabled=!1,this.activeTab=0,this.localTabWidth="100px",this.isDense=!1}render(){return this.isDense=this.tabs.length>3,this.style.cssText=`
      --local-tab: ${this.activeTab};
      --local-tab-width: ${this.localTabWidth};
    `,this.dataset.type=this.isDense?"flex":"block",this.tabs.map((t,n)=>{const r=n===this.activeTab;return k`
        <button
          ?disabled=${this.disabled}
          @click=${()=>this.onTabClick(n)}
          data-active=${r}
        >
          <wui-icon size="sm" color="inherit" name=${t.icon}></wui-icon>
          <wui-text variant="small-600" color="inherit"> ${t.label} </wui-text>
        </button>
      `})}firstUpdated(){this.shadowRoot&&this.isDense&&(this.buttons=[...this.shadowRoot.querySelectorAll("button")],setTimeout(()=>{this.animateTabs(0,!0)},0))}onTabClick(t){this.buttons&&this.animateTabs(t,!1),this.activeTab=t,this.onTabChange(t)}animateTabs(t,n){const r=this.buttons[this.activeTab],i=this.buttons[t],o=r==null?void 0:r.querySelector("wui-text"),s=i==null?void 0:i.querySelector("wui-text"),a=i==null?void 0:i.getBoundingClientRect(),c=s==null?void 0:s.getBoundingClientRect();r&&o&&!n&&t!==this.activeTab&&(o.animate([{opacity:0}],{duration:200,easing:"ease",fill:"forwards"}),r.animate([{width:"34px"}],{duration:500,easing:"ease",fill:"forwards"})),i&&a&&c&&s&&(t!==this.activeTab||n)&&(this.localTabWidth=`${Math.round(a.width+c.width)+6}px`,i.animate([{width:`${a.width+c.width}px`}],{duration:n?0:500,fill:"forwards",easing:"ease"}),s.animate([{opacity:1}],{duration:n?0:250,delay:n?0:50,fill:"forwards",easing:"ease"}))}};Gn.styles=[De,dt,J9];ii([M({type:Array})],Gn.prototype,"tabs",void 0);ii([M()],Gn.prototype,"onTabChange",void 0);ii([M({type:Array})],Gn.prototype,"buttons",void 0);ii([M({type:Boolean})],Gn.prototype,"disabled",void 0);ii([$e()],Gn.prototype,"activeTab",void 0);ii([$e()],Gn.prototype,"localTabWidth",void 0);ii([$e()],Gn.prototype,"isDense",void 0);Gn=ii([ue("wui-tabs")],Gn);const Y9=we`
  :host {
    display: block;
    padding: 9px var(--wui-spacing-s) 10px var(--wui-spacing-s);
    border-radius: var(--wui-border-radius-xxs);
    background-color: var(--wui-color-fg-100);
    color: var(--wui-color-bg-100);
    position: relative;
  }

  wui-icon {
    position: absolute;
    width: 12px !important;
    height: 4px !important;
  }

  wui-icon[data-placement='top'] {
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 95%);
  }

  wui-icon[data-placement='bottom'] {
    top: 0;
    left: 50%;
    transform: translate(-50%, -95%) rotate(180deg);
  }

  wui-icon[data-placement='right'] {
    top: 50%;
    left: 0;
    transform: translate(-65%, -50%) rotate(90deg);
  }

  wui-icon[data-placement='left'] {
    top: 50%;
    right: 0%;
    transform: translate(65%, -50%) rotate(270deg);
  }
`;var Lh=globalThis&&globalThis.__decorate||function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};let Na=class extends de{constructor(){super(...arguments),this.placement="top",this.message=""}render(){return k`<wui-icon
        data-placement=${this.placement}
        color="fg-100"
        size="inherit"
        name="cursor"
      ></wui-icon>
      <wui-text color="inherit" variant="small-500">${this.message}</wui-text>`}};Na.styles=[De,dt,Y9];Lh([M()],Na.prototype,"placement",void 0);Lh([M()],Na.prototype,"message",void 0);Na=Lh([ue("wui-tooltip")],Na);const X9=we`
  :host {
    display: grid;
    width: inherit;
    height: inherit;
  }
`;var cn=globalThis&&globalThis.__decorate||function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};let Ht=class extends de{render(){return this.style.cssText=`
      grid-template-rows: ${this.gridTemplateRows};
      grid-template-columns: ${this.gridTemplateColumns};
      justify-items: ${this.justifyItems};
      align-items: ${this.alignItems};
      justify-content: ${this.justifyContent};
      align-content: ${this.alignContent};
      column-gap: ${this.columnGap&&`var(--wui-spacing-${this.columnGap})`};
      row-gap: ${this.rowGap&&`var(--wui-spacing-${this.rowGap})`};
      gap: ${this.gap&&`var(--wui-spacing-${this.gap})`};
      padding-top: ${this.padding&&Ye.getSpacingStyles(this.padding,0)};
      padding-right: ${this.padding&&Ye.getSpacingStyles(this.padding,1)};
      padding-bottom: ${this.padding&&Ye.getSpacingStyles(this.padding,2)};
      padding-left: ${this.padding&&Ye.getSpacingStyles(this.padding,3)};
      margin-top: ${this.margin&&Ye.getSpacingStyles(this.margin,0)};
      margin-right: ${this.margin&&Ye.getSpacingStyles(this.margin,1)};
      margin-bottom: ${this.margin&&Ye.getSpacingStyles(this.margin,2)};
      margin-left: ${this.margin&&Ye.getSpacingStyles(this.margin,3)};
    `,k`<slot></slot>`}};Ht.styles=[De,X9];cn([M()],Ht.prototype,"gridTemplateRows",void 0);cn([M()],Ht.prototype,"gridTemplateColumns",void 0);cn([M()],Ht.prototype,"justifyItems",void 0);cn([M()],Ht.prototype,"alignItems",void 0);cn([M()],Ht.prototype,"justifyContent",void 0);cn([M()],Ht.prototype,"alignContent",void 0);cn([M()],Ht.prototype,"columnGap",void 0);cn([M()],Ht.prototype,"rowGap",void 0);cn([M()],Ht.prototype,"gap",void 0);cn([M()],Ht.prototype,"padding",void 0);cn([M()],Ht.prototype,"margin",void 0);Ht=cn([ue("wui-grid")],Ht);const Q9=we`
  :host {
    position: relative;
    display: flex;
    width: 100%;
    height: 1px;
    background-color: var(--wui-gray-glass-005);
    justify-content: center;
    align-items: center;
  }

  :host > wui-text {
    position: absolute;
    padding: 0px 10px;
    background-color: var(--wui-color-bg-125);
  }
`;var Lb=globalThis&&globalThis.__decorate||function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};let Tl=class extends de{constructor(){super(...arguments),this.text=""}render(){return k`${this.template()}`}template(){return this.text?k`<wui-text variant="small-500" color="fg-200">${this.text}</wui-text>`:null}};Tl.styles=[De,Q9];Lb([M()],Tl.prototype,"text",void 0);Tl=Lb([ue("wui-separator")],Tl);var _r=globalThis&&globalThis.__decorate||function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};let Kn=class extends de{constructor(){super(),this.unsubscribe=[],this.networkImages=Ur.state.networkImages,this.disabled=!1,this.balance="show",this.address=Ze.state.address,this.balanceVal=Ze.state.balance,this.balanceSymbol=Ze.state.balanceSymbol,this.profileName=Ze.state.profileName,this.profileImage=Ze.state.profileImage,this.network=rt.state.caipNetwork,this.unsubscribe.push(Ze.subscribe(t=>{t.isConnected?(this.address=t.address,this.balanceVal=t.balance,this.profileName=t.profileName,this.profileImage=t.profileImage,this.balanceSymbol=t.balanceSymbol):(this.address="",this.balanceVal="",this.profileName="",this.profileImage="",this.balanceSymbol="")}),rt.subscribeKey("caipNetwork",t=>this.network=t))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){var r;const t=this.networkImages[((r=this.network)==null?void 0:r.imageId)??""],n=this.balance==="show";return k`
      <wui-account-button
        .disabled=${!!this.disabled}
        address=${ke(this.profileName??this.address)}
        ?isProfileName=${!!this.profileName}
        networkSrc=${ke(t)}
        avatarSrc=${ke(this.profileImage)}
        balance=${n?Ee.formatBalance(this.balanceVal,this.balanceSymbol):""}
        @click=${this.onClick.bind(this)}
      >
      </wui-account-button>
    `}onClick(){bt.open()}};_r([M({type:Boolean})],Kn.prototype,"disabled",void 0);_r([M()],Kn.prototype,"balance",void 0);_r([$e()],Kn.prototype,"address",void 0);_r([$e()],Kn.prototype,"balanceVal",void 0);_r([$e()],Kn.prototype,"balanceSymbol",void 0);_r([$e()],Kn.prototype,"profileName",void 0);_r([$e()],Kn.prototype,"profileImage",void 0);_r([$e()],Kn.prototype,"network",void 0);Kn=_r([ue("w3m-account-button")],Kn);var Wi=globalThis&&globalThis.__decorate||function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};let Yr=class extends de{constructor(){super(),this.unsubscribe=[],this.disabled=!1,this.balance=void 0,this.size=void 0,this.label=void 0,this.loadingLabel=void 0,this.isAccount=Ze.state.isConnected,this.unsubscribe.push(Ze.subscribeKey("isConnected",t=>{this.isAccount=t}))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){return this.isAccount?k`
          <w3m-account-button
            .disabled=${!!this.disabled}
            balance=${ke(this.balance)}
          >
          </w3m-account-button>
        `:k`
          <w3m-connect-button
            size=${ke(this.size)}
            label=${ke(this.label)}
            loadingLabel=${ke(this.loadingLabel)}
          ></w3m-connect-button>
        `}};Wi([M({type:Boolean})],Yr.prototype,"disabled",void 0);Wi([M()],Yr.prototype,"balance",void 0);Wi([M()],Yr.prototype,"size",void 0);Wi([M()],Yr.prototype,"label",void 0);Wi([M()],Yr.prototype,"loadingLabel",void 0);Wi([$e()],Yr.prototype,"isAccount",void 0);Yr=Wi([ue("w3m-button")],Yr);var lc=globalThis&&globalThis.__decorate||function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};let Wo=class extends de{constructor(){super(),this.unsubscribe=[],this.size="md",this.label="Connect Wallet",this.loadingLabel="Connecting...",this.open=bt.state.open,this.unsubscribe.push(bt.subscribeKey("open",t=>this.open=t))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){return k`
      <wui-connect-button
        size=${ke(this.size)}
        .loading=${this.open}
        @click=${this.onClick.bind(this)}
      >
        ${this.open?this.loadingLabel:this.label}
      </wui-connect-button>
    `}onClick(){this.open?bt.close():bt.open()}};lc([M()],Wo.prototype,"size",void 0);lc([M()],Wo.prototype,"label",void 0);lc([M()],Wo.prototype,"loadingLabel",void 0);lc([$e()],Wo.prototype,"open",void 0);Wo=lc([ue("w3m-connect-button")],Wo);const eT=we`
  :host {
    z-index: var(--w3m-z-index);
    display: block;
    backface-visibility: hidden;
    will-change: opacity;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    pointer-events: none;
    opacity: 0;
    background-color: var(--wui-cover);
  }

  @keyframes zoom-in {
    0% {
      transform: scale(0.95) translateY(0);
    }
    100% {
      transform: scale(1) translateY(0);
    }
  }

  @keyframes slide-in {
    0% {
      transform: scale(1) translateY(50px);
    }
    100% {
      transform: scale(1) translateY(0);
    }
  }

  wui-card {
    max-width: 360px;
    width: 100%;
    position: relative;
    animation-delay: 0.3s;
    animation-duration: 0.2s;
    animation-name: zoom-in;
    animation-fill-mode: backwards;
    animation-timing-function: var(--wui-ease-out-power-2);
    outline: none;
  }

  wui-flex {
    overflow-x: hidden;
    overflow-y: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  @media (max-height: 700px) and (min-width: 431px) {
    wui-flex {
      align-items: flex-start;
    }

    wui-card {
      margin: var(--wui-spacing-xxl) 0px;
    }
  }

  @media (max-width: 430px) {
    wui-flex {
      align-items: flex-end;
    }

    wui-card {
      max-width: 100%;
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
      border-bottom: none;
      animation-name: slide-in;
    }
  }
`;var Ub=globalThis&&globalThis.__decorate||function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};const nm="scroll-lock";let ka=class extends de{constructor(){super(),this.unsubscribe=[],this.abortController=void 0,this.open=bt.state.open,this.initializeTheming(),Be.prefetch(),this.unsubscribe.push(bt.subscribeKey("open",t=>t?this.onOpen():this.onClose())),Xe.sendEvent({type:"track",event:"MODAL_LOADED"})}disconnectedCallback(){this.unsubscribe.forEach(t=>t()),this.onRemoveKeyboardListener()}render(){return this.open?k`
          <wui-flex @click=${this.onOverlayClick.bind(this)}>
            <wui-card role="alertdialog" aria-modal="true" tabindex="0">
              <w3m-header></w3m-header>
              <w3m-router></w3m-router>
              <w3m-snackbar></w3m-snackbar>
            </wui-card>
          </wui-flex>
        `:null}onOverlayClick(t){t.target===t.currentTarget&&bt.close()}initializeTheming(){const{themeVariables:t,themeMode:n}=en.state,r=Ye.getColorTheme(n);j_(t,r)}async onClose(){this.onScrollUnlock(),await this.animate([{opacity:1},{opacity:0}],{duration:200,easing:"ease",fill:"forwards"}).finished,vn.hide(),this.open=!1,this.onRemoveKeyboardListener()}async onOpen(){this.onScrollLock(),this.open=!0,await this.animate([{opacity:0},{opacity:1}],{duration:200,easing:"ease",fill:"forwards",delay:300}).finished,this.onAddKeyboardListener()}onScrollLock(){const t=document.createElement("style");t.dataset.w3m=nm,t.textContent=`
      html, body {
        touch-action: none;
        overflow: hidden;
        overscroll-behavior: contain;
      }
      w3m-modal {
        pointer-events: auto;
      }
    `,document.head.appendChild(t)}onScrollUnlock(){const t=document.head.querySelector(`style[data-w3m="${nm}"]`);t&&t.remove()}onAddKeyboardListener(){var n;this.abortController=new AbortController;const t=(n=this.shadowRoot)==null?void 0:n.querySelector("wui-card");t==null||t.focus(),window.addEventListener("keydown",r=>{if(r.key==="Escape")bt.close();else if(r.key==="Tab"){const{tagName:i}=r.target;i&&!i.includes("W3M-")&&!i.includes("WUI-")&&(t==null||t.focus())}},this.abortController)}onRemoveKeyboardListener(){var t;(t=this.abortController)==null||t.abort(),this.abortController=void 0}};ka.styles=eT;Ub([$e()],ka.prototype,"open",void 0);ka=Ub([ue("w3m-modal")],ka);const tT=Object.freeze(Object.defineProperty({__proto__:null,get W3mModal(){return ka}},Symbol.toStringTag,{value:"Module"}));var Ou=globalThis&&globalThis.__decorate||function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};let Ma=class extends de{constructor(){super(),this.unsubscribe=[],this.disabled=!1,this.network=rt.state.caipNetwork,this.connected=Ze.state.isConnected,this.unsubscribe.push(rt.subscribeKey("caipNetwork",t=>this.network=t),Ze.subscribeKey("isConnected",t=>this.connected=t))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){var t;return k`
      <wui-network-button
        .disabled=${!!this.disabled}
        imageSrc=${ke(wt.getNetworkImage(this.network))}
        @click=${this.onClick.bind(this)}
      >
        ${((t=this.network)==null?void 0:t.name)??(this.connected?"Unknown Network":"Select Network")}
      </wui-network-button>
    `}onClick(){bt.open({view:"Networks"})}};Ou([M({type:Boolean})],Ma.prototype,"disabled",void 0);Ou([$e()],Ma.prototype,"network",void 0);Ou([$e()],Ma.prototype,"connected",void 0);Ma=Ou([ue("w3m-network-button")],Ma);const nT=we`
  :host {
    display: block;
    will-change: transform, opacity;
  }
`;var Fb=globalThis&&globalThis.__decorate||function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};let Sl=class extends de{constructor(){super(),this.resizeObserver=void 0,this.prevHeight="0px",this.prevHistoryLength=1,this.unsubscribe=[],this.view=Me.state.view,this.unsubscribe.push(Me.subscribeKey("view",t=>this.onViewChange(t)))}firstUpdated(){this.resizeObserver=new ResizeObserver(async([t])=>{const n=`${t==null?void 0:t.contentRect.height}px`;this.prevHeight!=="0px"&&(await this.animate([{height:this.prevHeight},{height:n}],{duration:150,easing:"ease",fill:"forwards"}).finished,this.style.height="auto"),this.prevHeight=n}),this.resizeObserver.observe(this.getWrapper())}disconnectedCallback(){var t;(t=this.resizeObserver)==null||t.unobserve(this.getWrapper()),this.unsubscribe.forEach(n=>n())}render(){return k`<div>${this.viewTemplate()}</div>`}viewTemplate(){switch(this.view){case"Connect":return k`<w3m-connect-view></w3m-connect-view>`;case"ConnectingWalletConnect":return k`<w3m-connecting-wc-view></w3m-connecting-wc-view>`;case"ConnectingExternal":return k`<w3m-connecting-external-view></w3m-connecting-external-view>`;case"AllWallets":return k`<w3m-all-wallets-view></w3m-all-wallets-view>`;case"Networks":return k`<w3m-networks-view></w3m-networks-view>`;case"SwitchNetwork":return k`<w3m-network-switch-view></w3m-network-switch-view>`;case"Account":return k`<w3m-account-view></w3m-account-view>`;case"WhatIsAWallet":return k`<w3m-what-is-a-wallet-view></w3m-what-is-a-wallet-view>`;case"WhatIsANetwork":return k`<w3m-what-is-a-network-view></w3m-what-is-a-network-view>`;case"GetWallet":return k`<w3m-get-wallet-view></w3m-get-wallet-view>`;case"Downloads":return k`<w3m-downloads-view></w3m-downloads-view>`;default:return k`<w3m-connect-view></w3m-connect-view>`}}async onViewChange(t){const{history:n}=Me.state;let r=-10,i=10;n.length<this.prevHistoryLength&&(r=10,i=-10),this.prevHistoryLength=n.length,await this.animate([{opacity:1,transform:"translateX(0px)"},{opacity:0,transform:`translateX(${r}px)`}],{duration:150,easing:"ease",fill:"forwards"}).finished,this.view=t,await this.animate([{opacity:0,transform:`translateX(${i}px)`},{opacity:1,transform:"translateX(0px)"}],{duration:150,easing:"ease",fill:"forwards",delay:50}).finished}getWrapper(){var t;return(t=this.shadowRoot)==null?void 0:t.querySelector("div")}};Sl.styles=nT;Fb([$e()],Sl.prototype,"view",void 0);Sl=Fb([ue("w3m-router")],Sl);const rT=we`
  wui-flex {
    width: 100%;
  }

  :host > wui-flex:first-child {
    transform: translateY(calc(var(--wui-spacing-xxs) * -1));
  }

  wui-icon-link {
    margin-right: calc(var(--wui-icon-box-size-md) * -1);
  }
`;var oi=globalThis&&globalThis.__decorate||function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};let Zn=class extends de{constructor(){super(),this.usubscribe=[],this.networkImages=Ur.state.networkImages,this.address=Ze.state.address,this.profileImage=Ze.state.profileImage,this.profileName=Ze.state.profileName,this.balance=Ze.state.balance,this.balanceSymbol=Ze.state.balanceSymbol,this.network=rt.state.caipNetwork,this.disconecting=!1,this.usubscribe.push(Ze.subscribe(t=>{t.address?(this.address=t.address,this.profileImage=t.profileImage,this.profileName=t.profileName,this.balance=t.balance,this.balanceSymbol=t.balanceSymbol):bt.close()}),rt.subscribeKey("caipNetwork",t=>{t!=null&&t.id&&(this.network=t)}))}disconnectedCallback(){this.usubscribe.forEach(t=>t())}render(){var n,r;if(!this.address)throw new Error("w3m-account-view: No account provided");const t=this.networkImages[((n=this.network)==null?void 0:n.imageId)??""];return k`
      <wui-flex
        flexDirection="column"
        .padding=${["0","s","m","s"]}
        alignItems="center"
        gap="l"
      >
        <wui-avatar
          alt=${this.address}
          address=${this.address}
          imageSrc=${ke(this.profileImage)}
        ></wui-avatar>

        <wui-flex flexDirection="column" alignItems="center">
          <wui-flex gap="3xs" alignItems="center" justifyContent="center">
            <wui-text variant="large-600" color="fg-100">
              ${this.profileName?Ye.getTruncateString({string:this.profileName,charsStart:20,charsEnd:0,truncate:"end"}):Ye.getTruncateString({string:this.address,charsStart:4,charsEnd:6,truncate:"middle"})}
            </wui-text>
            <wui-icon-link
              size="md"
              icon="copy"
              iconColor="fg-200"
              @click=${this.onCopyAddress}
            ></wui-icon-link>
          </wui-flex>
          <wui-flex gap="s" flexDirection="column" alignItems="center">
            <wui-text variant="paragraph-500" color="fg-200">
              ${Ee.formatBalance(this.balance,this.balanceSymbol)}
            </wui-text>

            ${this.explorerBtnTemplate()}
          </wui-flex>
        </wui-flex>
      </wui-flex>

      <wui-flex flexDirection="column" gap="xs" .padding=${["0","s","s","s"]}>
        <wui-list-item
          .variant=${t?"image":"icon"}
          iconVariant="overlay"
          icon="networkPlaceholder"
          imageSrc=${ke(t)}
          ?chevron=${this.isAllowedNetworkSwitch()}
          @click=${this.onNetworks.bind(this)}
        >
          <wui-text variant="paragraph-500" color="fg-100">
            ${((r=this.network)==null?void 0:r.name)??"Unknown"}
          </wui-text>
        </wui-list-item>
        <wui-list-item
          variant="icon"
          iconVariant="overlay"
          icon="disconnect"
          ?chevron=${!1}
          .loading=${this.disconecting}
          @click=${this.onDisconnect.bind(this)}
        >
          <wui-text variant="paragraph-500" color="fg-200">Disconnect</wui-text>
        </wui-list-item>
      </wui-flex>
    `}explorerBtnTemplate(){const{addressExplorerUrl:t}=Ze.state;return t?k`
      <wui-button size="sm" variant="shade" @click=${this.onExplorer.bind(this)}>
        <wui-icon size="sm" color="inherit" slot="iconLeft" name="compass"></wui-icon>
        Block Explorer
        <wui-icon size="sm" color="inherit" slot="iconRight" name="externalLink"></wui-icon>
      </wui-button>
    `:null}isAllowedNetworkSwitch(){const{requestedCaipNetworks:t}=rt.state,n=t?t.length>1:!1,r=t==null?void 0:t.find(({id:i})=>{var o;return i===((o=this.network)==null?void 0:o.id)});return n||!r}onCopyAddress(){try{this.address&&(Ee.copyToClopboard(this.address),vn.showSuccess("Address copied"))}catch{vn.showError("Failed to copy")}}onNetworks(){this.isAllowedNetworkSwitch()&&Me.push("Networks")}async onDisconnect(){try{this.disconecting=!0,await We.disconnect(),Xe.sendEvent({type:"track",event:"DISCONNECT_SUCCESS"}),bt.close()}catch{Xe.sendEvent({type:"track",event:"DISCONNECT_ERROR"}),vn.showError("Failed to disconnect")}finally{this.disconecting=!1}}onExplorer(){const{addressExplorerUrl:t}=Ze.state;t&&Ee.openHref(t,"_blank")}};Zn.styles=rT;oi([$e()],Zn.prototype,"address",void 0);oi([$e()],Zn.prototype,"profileImage",void 0);oi([$e()],Zn.prototype,"profileName",void 0);oi([$e()],Zn.prototype,"balance",void 0);oi([$e()],Zn.prototype,"balanceSymbol",void 0);oi([$e()],Zn.prototype,"network",void 0);oi([$e()],Zn.prototype,"disconecting",void 0);Zn=oi([ue("w3m-account-view")],Zn);var jb=globalThis&&globalThis.__decorate||function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};let Ff=class extends de{constructor(){super(...arguments),this.search="",this.onDebouncedSearch=Ee.debounce(t=>{this.search=t})}render(){const t=this.search.length>=2;return k`
      <wui-flex padding="s" gap="s">
        <wui-search-bar @inputChange=${this.onInputChange.bind(this)}></wui-search-bar>
        ${this.qrButtonTemplate()}
      </wui-flex>
      ${t?k`<w3m-all-wallets-search query=${this.search}></w3m-all-wallets-search>`:k`<w3m-all-wallets-list></w3m-all-wallets-list>`}
    `}onInputChange(t){this.onDebouncedSearch(t.detail)}qrButtonTemplate(){return Ee.isMobile()?k`
        <wui-icon-box
          size="lg"
          iconcolor="accent-100"
          backgroundcolor="accent-100"
          icon="qrCode"
          background="transparent"
          border
          borderColor="wui-accent-glass-010"
          @click=${this.onWalletConnectQr.bind(this)}
        ></wui-icon-box>
      `:null}onWalletConnectQr(){Me.push("ConnectingWalletConnect")}};jb([$e()],Ff.prototype,"search",void 0);Ff=jb([ue("w3m-all-wallets-view")],Ff);const iT=we`
  wui-flex {
    max-height: clamp(360px, 540px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
  }

  wui-flex::-webkit-scrollbar {
    display: none;
  }
`;var Wb=globalThis&&globalThis.__decorate||function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};let Al=class extends de{constructor(){super(),this.unsubscribe=[],this.connectors=yn.state.connectors,this.unsubscribe.push(yn.subscribeKey("connectors",t=>this.connectors=t))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){return k`
      <wui-flex flexDirection="column" padding="s" gap="xs">
        ${this.walletConnectConnectorTemplate()} ${this.recentTemplate()}
        ${this.announcedTemplate()} ${this.injectedTemplate()} ${this.featuredTemplate()}
        ${this.customTemplate()} ${this.recommendedTemplate()} ${this.connectorsTemplate()}
        ${this.allWalletsTemplate()}
      </wui-flex>
      <w3m-legal-footer></w3m-legal-footer>
    `}walletConnectConnectorTemplate(){if(Ee.isMobile())return null;const t=this.connectors.find(n=>n.type==="WALLET_CONNECT");return t?k`
      <wui-list-wallet
        imageSrc=${ke(wt.getConnectorImage(t))}
        name=${t.name??"Unknown"}
        @click=${()=>this.onConnector(t)}
        tagLabel="qr code"
        tagVariant="main"
      >
      </wui-list-wallet>
    `:null}customTemplate(){const{customWallets:t}=tt.state;return t!=null&&t.length?this.filterOutDuplicateWallets(t).map(r=>k`
        <wui-list-wallet
          imageSrc=${ke(wt.getWalletImage(r))}
          name=${r.name??"Unknown"}
          @click=${()=>this.onConnectWallet(r)}
        >
        </wui-list-wallet>
      `):null}featuredTemplate(){const{featured:t}=Be.state;return t.length?this.filterOutDuplicateWallets(t).map(r=>k`
        <wui-list-wallet
          imageSrc=${ke(wt.getWalletImage(r))}
          name=${r.name??"Unknown"}
          @click=${()=>this.onConnectWallet(r)}
        >
        </wui-list-wallet>
      `):null}recentTemplate(){return Lr.getRecentWallets().map(n=>k`
        <wui-list-wallet
          imageSrc=${ke(wt.getWalletImage(n))}
          name=${n.name??"Unknown"}
          @click=${()=>this.onConnectWallet(n)}
          tagLabel="recent"
          tagVariant="shade"
        >
        </wui-list-wallet>
      `)}announcedTemplate(){return this.connectors.map(t=>t.type!=="ANNOUNCED"?null:k`
        <wui-list-wallet
          imageSrc=${ke(wt.getConnectorImage(t))}
          name=${t.name??"Unknown"}
          @click=${()=>this.onConnector(t)}
          tagLabel="installed"
          tagVariant="success"
        >
        </wui-list-wallet>
      `)}injectedTemplate(){const t=this.connectors.find(n=>n.type==="ANNOUNCED");return this.connectors.map(n=>n.type!=="INJECTED"||!We.checkInstalled()?null:k`
        <wui-list-wallet
          imageSrc=${ke(wt.getConnectorImage(n))}
          name=${n.name??"Unknown"}
          @click=${()=>this.onConnector(n)}
          tagLabel=${ke(t?void 0:"installed")}
          tagVariant=${ke(t?void 0:"success")}
        >
        </wui-list-wallet>
      `)}connectorsTemplate(){return this.connectors.map(t=>["WALLET_CONNECT","INJECTED","ANNOUNCED"].includes(t.type)?null:k`
        <wui-list-wallet
          imageSrc=${ke(wt.getConnectorImage(t))}
          name=${t.name??"Unknown"}
          @click=${()=>this.onConnector(t)}
        >
        </wui-list-wallet>
      `)}allWalletsTemplate(){const t=Math.floor(Be.state.count/10)*10;return k`
      <wui-list-wallet
        name="All Wallets"
        walletIcon="allWallets"
        showAllWallets
        @click=${this.onAllWallets.bind(this)}
        tagLabel=${`${t}+`}
        tagVariant="shade"
      ></wui-list-wallet>
    `}recommendedTemplate(){const{recommended:t}=Be.state,{customWallets:n,featuredWalletIds:r}=tt.state,{connectors:i}=yn.state,o=Lr.getRecentWallets(),s=i.filter(l=>l.type==="ANNOUNCED");if(r||n||!t.length)return null;const a=s.length+o.length,c=Math.max(0,2-a);return this.filterOutDuplicateWallets(t).slice(0,c).map(l=>k`
        <wui-list-wallet
          imageSrc=${ke(wt.getWalletImage(l))}
          name=${(l==null?void 0:l.name)??"Unknown"}
          @click=${()=>this.onConnectWallet(l)}
        >
        </wui-list-wallet>
      `)}onConnector(t){t.type==="WALLET_CONNECT"?Ee.isMobile()?Me.push("AllWallets"):Me.push("ConnectingWalletConnect"):Me.push("ConnectingExternal",{connector:t})}filterOutDuplicateWallets(t){const{connectors:n}=yn.state,i=Lr.getRecentWallets().map(a=>a.id),o=n.map(a=>{var c;return(c=a.info)==null?void 0:c.rdns}).filter(Boolean);return t.filter(a=>!i.includes(a.id)&&!o.includes(a.rdns??void 0))}onAllWallets(){Xe.sendEvent({type:"track",event:"CLICK_ALL_WALLETS"}),Me.push("AllWallets")}onConnectWallet(t){Me.push("ConnectingWalletConnect",{wallet:t})}};Al.styles=iT;Wb([$e()],Al.prototype,"connectors",void 0);Al=Wb([ue("w3m-connect-view")],Al);const oT=we`
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-loading-thumbnail {
    position: absolute;
  }

  wui-icon-box {
    position: absolute;
    right: calc(var(--wui-spacing-3xs) * -1);
    bottom: calc(var(--wui-spacing-3xs) * -1);
    opacity: 0;
    transform: scale(0.5);
    transition: all var(--wui-ease-out-power-2) var(--wui-duration-lg);
  }

  wui-text[align='center'] {
    width: 100%;
    padding: 0px var(--wui-spacing-l);
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  }

  [data-retry='false'] wui-link {
    display: none;
  }

  [data-retry='true'] wui-link {
    display: block;
    opacity: 1;
  }
`;var Hi=globalThis&&globalThis.__decorate||function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};class qt extends de{constructor(){var t,n,r,i;super(),this.wallet=(t=Me.state.data)==null?void 0:t.wallet,this.connector=(n=Me.state.data)==null?void 0:n.connector,this.timeout=void 0,this.secondaryBtnLabel="Try again",this.secondaryBtnIcon="refresh",this.secondaryLabel="Accept connection request in the wallet",this.onConnect=void 0,this.onRender=void 0,this.onAutoConnect=void 0,this.isWalletConnect=!0,this.unsubscribe=[],this.imageSrc=wt.getWalletImage(this.wallet)??wt.getConnectorImage(this.connector),this.name=((r=this.wallet)==null?void 0:r.name)??((i=this.connector)==null?void 0:i.name)??"Wallet",this.isRetrying=!1,this.uri=We.state.wcUri,this.error=We.state.wcError,this.ready=!1,this.showRetry=!1,this.buffering=!1,this.isMobile=!1,this.onRetry=void 0,this.unsubscribe.push(We.subscribeKey("wcUri",o=>{var s;this.uri=o,this.isRetrying&&this.onRetry&&(this.isRetrying=!1,(s=this.onConnect)==null||s.call(this))}),We.subscribeKey("wcError",o=>this.error=o),We.subscribeKey("buffering",o=>this.buffering=o))}firstUpdated(){var t;(t=this.onAutoConnect)==null||t.call(this),this.showRetry=!this.onAutoConnect}disconnectedCallback(){this.unsubscribe.forEach(t=>t()),clearTimeout(this.timeout)}render(){var r;(r=this.onRender)==null||r.call(this),this.onShowRetry();const t=this.error?"Connection can be declined if a previous request is still active":this.secondaryLabel;let n=`Continue in ${this.name}`;return this.buffering&&(n="Connecting..."),this.error&&(n="Connection declined"),k`
      <wui-flex
        data-error=${ke(this.error)}
        data-retry=${this.showRetry}
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","xl","xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-wallet-image size="lg" imageSrc=${ke(this.imageSrc)}></wui-wallet-image>

          ${this.error?null:this.loaderTemplate()}

          <wui-icon-box
            backgroundColor="error-100"
            background="opaque"
            iconColor="error-100"
            icon="close"
            size="sm"
            border
            borderColor="wui-color-bg-125"
          ></wui-icon-box>
        </wui-flex>

        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <wui-text variant="paragraph-500" color=${this.error?"error-100":"fg-100"}>
            ${n}
          </wui-text>
          <wui-text align="center" variant="small-500" color="fg-200">${t}</wui-text>
        </wui-flex>

        <wui-button
          variant="accent"
          ?disabled=${!this.error&&this.buffering}
          @click=${this.onTryAgain.bind(this)}
        >
          <wui-icon color="inherit" slot="iconLeft" name=${this.secondaryBtnIcon}></wui-icon>
          ${this.secondaryBtnLabel}
        </wui-button>
      </wui-flex>

      ${this.isWalletConnect?k`
            <wui-flex .padding=${["0","xl","xl","xl"]} justifyContent="center">
              <wui-link @click=${this.onCopyUri} color="fg-200">
                <wui-icon size="sm" color="fg-200" slot="iconLeft" name="copy"></wui-icon>
                Copy Link
              </wui-link>
            </wui-flex>
          `:null}

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}onShowRetry(){var t;this.error&&!this.showRetry&&(this.showRetry=!0,((t=this.shadowRoot)==null?void 0:t.querySelector("wui-button")).animate([{opacity:0},{opacity:1}],{fill:"forwards",easing:"ease"}))}onTryAgain(){var t,n;this.buffering||(We.setWcError(!1),this.onRetry?(this.isRetrying=!0,(t=this.onRetry)==null||t.call(this)):(n=this.onConnect)==null||n.call(this))}loaderTemplate(){const t=en.state.themeVariables["--w3m-border-radius-master"],n=t?parseInt(t.replace("px",""),10):4;return k`<wui-loading-thumbnail radius=${n*9}></wui-loading-thumbnail>`}onCopyUri(){try{this.uri&&(Ee.copyToClopboard(this.uri),vn.showSuccess("Link copied"))}catch{vn.showError("Failed to copy")}}}qt.styles=oT;Hi([$e()],qt.prototype,"uri",void 0);Hi([$e()],qt.prototype,"error",void 0);Hi([$e()],qt.prototype,"ready",void 0);Hi([$e()],qt.prototype,"showRetry",void 0);Hi([$e()],qt.prototype,"buffering",void 0);Hi([M({type:Boolean})],qt.prototype,"isMobile",void 0);Hi([M()],qt.prototype,"onRetry",void 0);var sT=globalThis&&globalThis.__decorate||function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};const aT={INJECTED:"browser",ANNOUNCED:"browser"};let rm=class extends qt{constructor(){if(super(),!this.connector)throw new Error("w3m-connecting-view: No connector provided");Xe.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.connector.name??"Unknown",platform:aT[this.connector.type]??"external"}}),this.onConnect=this.onConnectProxy.bind(this),this.onAutoConnect=this.onConnectProxy.bind(this),this.isWalletConnect=!1}async onConnectProxy(){try{this.error=!1,this.connector&&(await We.connectExternal(this.connector),bt.close(),Xe.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:"external"}}))}catch(t){Xe.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:(t==null?void 0:t.message)??"Unknown"}}),this.error=!0}}};rm=sT([ue("w3m-connecting-external-view")],rm);var Uh=globalThis&&globalThis.__decorate||function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};let $l=class extends de{constructor(){var t;super(),this.interval=void 0,this.lastRetry=Date.now(),this.wallet=(t=Me.state.data)==null?void 0:t.wallet,this.platform=void 0,this.platforms=[],this.initializeConnection(),this.interval=setInterval(this.initializeConnection.bind(this),ks.TEN_SEC_MS)}disconnectedCallback(){clearTimeout(this.interval)}render(){return this.wallet?(this.determinePlatforms(),k`
      ${this.headerTemplate()}
      <div>${this.platformTemplate()}</div>
    `):k`<w3m-connecting-wc-qrcode></w3m-connecting-wc-qrcode>`}async initializeConnection(t=!1){try{const{wcPairingExpiry:n}=We.state;(t||Ee.isPairingExpired(n))&&(We.connectWalletConnect(),await We.state.wcPromise,this.finalizeConnection(),bt.close())}catch(n){Xe.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:(n==null?void 0:n.message)??"Unknown"}}),We.setWcError(!0),Ee.isAllowedRetry(this.lastRetry)&&(vn.showError("Declined"),this.lastRetry=Date.now(),this.initializeConnection(!0))}}finalizeConnection(){const{wcLinking:t,recentWallet:n}=We.state;t&&Lr.setWalletConnectDeepLink(t),n&&Lr.setWeb3ModalRecent(n),Xe.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:t?"mobile":"qrcode"}})}determinePlatforms(){if(!this.wallet)throw new Error("w3m-connecting-wc-view:determinePlatforms No wallet");if(this.platform)return;const{mobile_link:t,desktop_link:n,webapp_link:r,injected:i,rdns:o}=this.wallet,s=i==null?void 0:i.map(({injected_id:w})=>w).filter(Boolean),a=o?[o]:s??[],c=a.length,u=t,l=r,d=We.checkInstalled(a),p=c&&d,g=n&&!Ee.isMobile();p&&this.platforms.push("browser"),u&&this.platforms.push(Ee.isMobile()?"mobile":"qrcode"),l&&this.platforms.push("web"),g&&this.platforms.push("desktop"),!p&&c&&this.platforms.push("unsupported"),this.platform=this.platforms[0]}platformTemplate(){switch(this.platform){case"browser":return k`<w3m-connecting-wc-browser></w3m-connecting-wc-browser>`;case"desktop":return k`
          <w3m-connecting-wc-desktop .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-desktop>
        `;case"web":return k`
          <w3m-connecting-wc-web .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-web>
        `;case"mobile":return k`
          <w3m-connecting-wc-mobile isMobile .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-mobile>
        `;case"qrcode":return k`<w3m-connecting-wc-qrcode></w3m-connecting-wc-qrcode>`;default:return k`<w3m-connecting-wc-unsupported></w3m-connecting-wc-unsupported>`}}headerTemplate(){return this.platforms.length>1?k`
      <w3m-connecting-header
        .platforms=${this.platforms}
        .onSelectPlatfrom=${this.onSelectPlatform.bind(this)}
      >
      </w3m-connecting-header>
    `:null}async onSelectPlatform(t){var r;const n=(r=this.shadowRoot)==null?void 0:r.querySelector("div");n&&(await n.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.platform=t,n.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}};Uh([$e()],$l.prototype,"platform",void 0);Uh([$e()],$l.prototype,"platforms",void 0);$l=Uh([ue("w3m-connecting-wc-view")],$l);var cT=globalThis&&globalThis.__decorate||function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};let im=class extends de{constructor(){var t;super(...arguments),this.wallet=(t=Me.state.data)==null?void 0:t.wallet}render(){if(!this.wallet)throw new Error("w3m-downloads-view");return k`
      <wui-flex gap="xs" flexDirection="column" .padding=${["s","s","l","s"]}>
        ${this.chromeTemplate()} ${this.iosTemplate()} ${this.androidTemplate()}
        ${this.homepageTemplate()}
      </wui-flex>
    `}chromeTemplate(){var t;return(t=this.wallet)!=null&&t.chrome_store?k`<wui-list-item
      variant="icon"
      icon="chromeStore"
      iconVariant="square"
      @click=${this.onChromeStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">Chrome Extension</wui-text>
    </wui-list-item>`:null}iosTemplate(){var t;return(t=this.wallet)!=null&&t.app_store?k`<wui-list-item
      variant="icon"
      icon="appStore"
      iconVariant="square"
      @click=${this.onAppStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">iOS App</wui-text>
    </wui-list-item>`:null}androidTemplate(){var t;return(t=this.wallet)!=null&&t.play_store?k`<wui-list-item
      variant="icon"
      icon="playStore"
      iconVariant="square"
      @click=${this.onPlayStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">Android App</wui-text>
    </wui-list-item>`:null}homepageTemplate(){var t;return(t=this.wallet)!=null&&t.homepage?k`
      <wui-list-item
        variant="icon"
        icon="browser"
        iconVariant="square-blue"
        @click=${this.onHomePage.bind(this)}
        chevron
      >
        <wui-text variant="paragraph-500" color="fg-100">Website</wui-text>
      </wui-list-item>
    `:null}onChromeStore(){var t;(t=this.wallet)!=null&&t.chrome_store&&Ee.openHref(this.wallet.chrome_store,"_blank")}onAppStore(){var t;(t=this.wallet)!=null&&t.app_store&&Ee.openHref(this.wallet.app_store,"_blank")}onPlayStore(){var t;(t=this.wallet)!=null&&t.play_store&&Ee.openHref(this.wallet.play_store,"_blank")}onHomePage(){var t;(t=this.wallet)!=null&&t.homepage&&Ee.openHref(this.wallet.homepage,"_blank")}};im=cT([ue("w3m-downloads-view")],im);var lT=globalThis&&globalThis.__decorate||function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};const uT="https://walletconnect.com/explorer";let om=class extends de{render(){return k`
      <wui-flex flexDirection="column" padding="s" gap="xs">
        ${this.recommendedWalletsTemplate()}
        <wui-list-wallet
          name="Explore all"
          showAllWallets
          walletIcon="allWallets"
          icon="externalLink"
          @click=${()=>{Ee.openHref("https://walletconnect.com/explorer?type=wallet","_blank")}}
        ></wui-list-wallet>
      </wui-flex>
    `}recommendedWalletsTemplate(){const{recommended:t,featured:n}=Be.state,{customWallets:r}=tt.state;return[...n,...r??[],...t].slice(0,4).map(o=>k`
        <wui-list-wallet
          name=${o.name??"Unknown"}
          tagVariant="main"
          imageSrc=${ke(wt.getWalletImage(o))}
          @click=${()=>{Ee.openHref(o.homepage??uT,"_blank")}}
        ></wui-list-wallet>
      `)}};om=lT([ue("w3m-get-wallet-view")],om);const dT=we`
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-loading-hexagon {
    position: absolute;
  }

  wui-icon-box {
    position: absolute;
    right: 4px;
    bottom: 0;
    opacity: 0;
    transform: scale(0.5);
    z-index: 1;
    transition: all var(--wui-ease-out-power-2) var(--wui-duration-lg);
  }

  wui-button {
    display: none;
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  }

  wui-button[data-retry='true'] {
    display: block;
    opacity: 1;
  }
`;var Du=globalThis&&globalThis.__decorate||function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};let Ho=class extends de{constructor(){var t;super(),this.network=(t=Me.state.data)==null?void 0:t.network,this.unsubscribe=[],this.showRetry=!1,this.error=!1,this.currentNetwork=rt.state.caipNetwork,this.unsubscribe.push(rt.subscribeKey("caipNetwork",n=>{var r;(n==null?void 0:n.id)!==((r=this.currentNetwork)==null?void 0:r.id)&&Me.goBack()}))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}firstUpdated(){this.onSwitchNetwork()}render(){if(!this.network)throw new Error("w3m-network-switch-view: No network provided");this.onShowRetry();const t=this.error?"Switch declined":"Approve in wallet",n=this.error?"Switch can be declined if chain is not supported by a wallet or previous request is still active":"Accept connection request in your wallet";return k`
      <wui-flex
        data-error=${this.error}
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","3xl","xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-network-image
            size="lg"
            imageSrc=${ke(wt.getNetworkImage(this.network))}
          ></wui-network-image>

          ${this.error?null:k`<wui-loading-hexagon></wui-loading-hexagon>`}

          <wui-icon-box
            backgroundColor="error-100"
            background="opaque"
            iconColor="error-100"
            icon="close"
            size="sm"
            ?border=${!0}
            borderColor="wui-color-bg-125"
          ></wui-icon-box>
        </wui-flex>

        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <wui-text align="center" variant="paragraph-500" color="fg-100">${t}</wui-text>
          <wui-text align="center" variant="small-500" color="fg-200">${n}</wui-text>
        </wui-flex>

        <wui-button
          data-retry=${this.showRetry}
          variant="fill"
          .disabled=${!this.error}
          @click=${this.onSwitchNetwork.bind(this)}
        >
          <wui-icon color="inherit" slot="iconLeft" name="refresh"></wui-icon>
          Try again
        </wui-button>
      </wui-flex>
    `}onShowRetry(){var t;this.error&&!this.showRetry&&(this.showRetry=!0,((t=this.shadowRoot)==null?void 0:t.querySelector("wui-button")).animate([{opacity:0},{opacity:1}],{fill:"forwards",easing:"ease"}))}async onSwitchNetwork(){try{this.error=!1,this.network&&(await rt.switchActiveNetwork(this.network),Me.goBack())}catch{this.error=!0}}};Ho.styles=dT;Du([$e()],Ho.prototype,"showRetry",void 0);Du([$e()],Ho.prototype,"error",void 0);Du([$e()],Ho.prototype,"currentNetwork",void 0);Ho=Du([ue("w3m-network-switch-view")],Ho);var Hb=globalThis&&globalThis.__decorate||function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};let jf=class extends de{constructor(){super(),this.unsubscribe=[],this.caipNetwork=rt.state.caipNetwork,this.unsubscribe.push(rt.subscribeKey("caipNetwork",t=>this.caipNetwork=t))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){return k`
      <wui-grid padding="s" gridTemplateColumns="repeat(4, 1fr)" rowGap="l" columnGap="xs">
        ${this.networksTemplate()}
      </wui-grid>

      <wui-separator></wui-separator>

      <wui-flex padding="s" flexDirection="column" gap="m" alignItems="center">
        <wui-text variant="small-500" color="fg-300" align="center">
          Your connected wallet may not support some of the networks available for this dApp
        </wui-text>
        <wui-link @click=${this.onNetworkHelp.bind(this)}>
          <wui-icon size="xs" color="accent-100" slot="iconLeft" name="helpCircle"></wui-icon>
          What is a network
        </wui-link>
      </wui-flex>
    `}onNetworkHelp(){Xe.sendEvent({type:"track",event:"CLICK_NETWORK_HELP"}),Me.push("WhatIsANetwork")}networksTemplate(){const{approvedCaipNetworkIds:t,requestedCaipNetworks:n,supportsAllNetworks:r}=rt.state,i=t,o=n;return i!=null&&i.length&&(o==null||o.sort((s,a)=>i.indexOf(a.id)-i.indexOf(s.id))),o==null?void 0:o.map(s=>{var a;return k`
        <wui-card-select
          .selected=${((a=this.caipNetwork)==null?void 0:a.id)===s.id}
          imageSrc=${ke(wt.getNetworkImage(s))}
          type="network"
          name=${s.name??s.id}
          @click=${()=>this.onSwitchNetwork(s)}
          .disabled=${!r&&!(i!=null&&i.includes(s.id))}
        ></wui-card-select>
      `})}async onSwitchNetwork(t){const{isConnected:n}=Ze.state,{approvedCaipNetworkIds:r,supportsAllNetworks:i,caipNetwork:o}=rt.state;n&&(o==null?void 0:o.id)!==t.id?r!=null&&r.includes(t.id)?await rt.switchActiveNetwork(t):i&&Me.push("SwitchNetwork",{network:t}):n||(rt.setCaipNetwork(t),Me.push("Connect"))}};Hb([$e()],jf.prototype,"caipNetwork",void 0);jf=Hb([ue("w3m-networks-view")],jf);var fT=globalThis&&globalThis.__decorate||function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};const hT=[{images:["network","layers","system"],title:"The system’s nuts and bolts",text:"A network is what brings the blockchain to life, as this technical infrastructure allows apps to access the ledger and smart contract services."},{images:["noun","defiAlt","dao"],title:"Designed for different uses",text:"Each network is designed differently, and may therefore suit certain apps and experiences."}];let sm=class extends de{render(){return k`
      <wui-flex
        flexDirection="column"
        .padding=${["xxl","xl","xl","xl"]}
        alignItems="center"
        gap="xl"
      >
        <w3m-help-widget .data=${hT}></w3m-help-widget>
        <wui-button
          variant="fill"
          size="sm"
          @click=${()=>{Ee.openHref("https://ethereum.org/en/developers/docs/networks/","_blank")}}
        >
          Learn more
          <wui-icon color="inherit" slot="iconRight" name="externalLink"></wui-icon>
        </wui-button>
      </wui-flex>
    `}};sm=fT([ue("w3m-what-is-a-network-view")],sm);var pT=globalThis&&globalThis.__decorate||function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};const mT=[{images:["login","profile","lock"],title:"One login for all of web3",text:"Log in to any app by connecting your wallet. Say goodbye to countless passwords!"},{images:["defi","nft","eth"],title:"A home for your digital assets",text:"A wallet lets you store, send and receive digital assets like cryptocurrencies and NFTs."},{images:["browser","noun","dao"],title:"Your gateway to a new web",text:"With your wallet, you can explore and interact with DeFi, NFTs, DAOs, and much more."}];let am=class extends de{render(){return k`
      <wui-flex
        flexDirection="column"
        .padding=${["xxl","xl","xl","xl"]}
        alignItems="center"
        gap="xl"
      >
        <w3m-help-widget .data=${mT}></w3m-help-widget>
        <wui-button variant="fill" size="sm" @click=${this.onGetWallet.bind(this)}>
          <wui-icon color="inherit" slot="iconLeft" name="wallet"></wui-icon>
          Get a Wallet
        </wui-button>
      </wui-flex>
    `}onGetWallet(){Xe.sendEvent({type:"track",event:"CLICK_GET_WALLET"}),Me.push("GetWallet")}};am=pT([ue("w3m-what-is-a-wallet-view")],am);const gT=we`
  wui-grid {
    max-height: clamp(360px, 400px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
    grid-auto-rows: min-content;
    grid-template-columns: repeat(auto-fill, 76px);
  }

  @media (max-width: 435px) {
    wui-grid {
      grid-template-columns: repeat(auto-fill, 77px);
    }
  }

  wui-grid[data-scroll='false'] {
    overflow: hidden;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  wui-loading-spinner {
    padding-top: var(--wui-spacing-l);
    padding-bottom: var(--wui-spacing-l);
    justify-content: center;
    grid-column: 1 / span 4;
  }
`;var uc=globalThis&&globalThis.__decorate||function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};const cm="local-paginator";let Ui=class extends de{constructor(){super(),this.unsubscribe=[],this.paginationObserver=void 0,this.initial=!Be.state.wallets.length,this.wallets=Be.state.wallets,this.recommended=Be.state.recommended,this.featured=Be.state.featured,this.unsubscribe.push(Be.subscribeKey("wallets",t=>this.wallets=t),Be.subscribeKey("recommended",t=>this.recommended=t),Be.subscribeKey("featured",t=>this.featured=t))}firstUpdated(){this.initialFetch(),this.createPaginationObserver()}disconnectedCallback(){var t;this.unsubscribe.forEach(n=>n()),(t=this.paginationObserver)==null||t.disconnect()}render(){return k`
      <wui-grid
        data-scroll=${!this.initial}
        .padding=${["0","s","s","s"]}
        columnGap="xxs"
        rowGap="l"
        justifyContent="space-between"
      >
        ${this.initial?this.shimmerTemplate(16):this.walletsTemplate()}
        ${this.paginationLoaderTemplate()}
      </wui-grid>
    `}async initialFetch(){var n;const t=(n=this.shadowRoot)==null?void 0:n.querySelector("wui-grid");this.initial&&t&&(await Be.fetchWallets({page:1}),await t.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.initial=!1,t.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}shimmerTemplate(t,n){return[...Array(t)].map(()=>k`
        <wui-card-select-loader type="wallet" id=${ke(n)}></wui-card-select-loader>
      `)}walletsTemplate(){return[...this.featured,...this.recommended,...this.wallets].map(n=>k`
        <wui-card-select
          imageSrc=${ke(wt.getWalletImage(n))}
          type="wallet"
          name=${n.name}
          @click=${()=>this.onConnectWallet(n)}
        ></wui-card-select>
      `)}paginationLoaderTemplate(){const{wallets:t,recommended:n,featured:r,count:i}=Be.state,o=window.innerWidth<352?3:4,s=t.length+n.length;let c=Math.ceil(s/o)*o-s+o;return c-=t.length?r.length%o:0,i===0||[...r,...t,...n].length<i?this.shimmerTemplate(c,cm):null}createPaginationObserver(){var n;const t=(n=this.shadowRoot)==null?void 0:n.querySelector(`#${cm}`);t&&(this.paginationObserver=new IntersectionObserver(([r])=>{if(r!=null&&r.isIntersecting&&!this.initial){const{page:i,count:o,wallets:s}=Be.state;s.length<o&&Be.fetchWallets({page:i+1})}}),this.paginationObserver.observe(t))}onConnectWallet(t){const{connectors:n}=yn.state,r=n.find(({explorerId:i})=>i===t.id);r?Me.push("ConnectingExternal",{connector:r}):Me.push("ConnectingWalletConnect",{wallet:t})}};Ui.styles=gT;uc([$e()],Ui.prototype,"initial",void 0);uc([$e()],Ui.prototype,"wallets",void 0);uc([$e()],Ui.prototype,"recommended",void 0);uc([$e()],Ui.prototype,"featured",void 0);Ui=uc([ue("w3m-all-wallets-list")],Ui);const wT=we`
  wui-grid,
  wui-loading-spinner,
  wui-flex {
    height: 360px;
  }

  wui-grid {
    overflow: scroll;
    scrollbar-width: none;
    grid-auto-rows: min-content;
  }

  wui-grid[data-scroll='false'] {
    overflow: hidden;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  wui-loading-spinner {
    justify-content: center;
    align-items: center;
  }
`;var Fh=globalThis&&globalThis.__decorate||function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};let Ba=class extends de{constructor(){super(...arguments),this.prevQuery="",this.loading=!0,this.query=""}render(){return this.onSearch(),this.loading?k`<wui-loading-spinner color="accent-100"></wui-loading-spinner>`:this.walletsTemplate()}async onSearch(){this.query!==this.prevQuery&&(this.prevQuery=this.query,this.loading=!0,await Be.searchWallet({search:this.query}),this.loading=!1)}walletsTemplate(){const{search:t}=Be.state;return t.length?k`
      <wui-grid
        .padding=${["0","s","s","s"]}
        gridTemplateColumns="repeat(4, 1fr)"
        rowGap="l"
        columnGap="xs"
      >
        ${t.map(n=>k`
            <wui-card-select
              imageSrc=${ke(wt.getWalletImage(n))}
              type="wallet"
              name=${n.name}
              @click=${()=>this.onConnectWallet(n)}
            ></wui-card-select>
          `)}
      </wui-grid>
    `:k`
        <wui-flex justifyContent="center" alignItems="center" gap="s" flexDirection="column">
          <wui-icon-box
            size="lg"
            iconcolor="fg-200"
            backgroundcolor="fg-300"
            icon="wallet"
            background="transparent"
          ></wui-icon-box>
          <wui-text color="fg-200" variant="paragraph-500">No Wallet found</wui-text>
        </wui-flex>
      `}onConnectWallet(t){const{connectors:n}=yn.state,r=n.find(({explorerId:i})=>i===t.id);r?Me.push("ConnectingExternal",{connector:r}):Me.push("ConnectingWalletConnect",{wallet:t})}};Ba.styles=wT;Fh([$e()],Ba.prototype,"loading",void 0);Fh([M()],Ba.prototype,"query",void 0);Ba=Fh([ue("w3m-all-wallets-search")],Ba);var Iu=globalThis&&globalThis.__decorate||function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};let La=class extends de{constructor(){super(),this.platformTabs=[],this.unsubscribe=[],this.platforms=[],this.onSelectPlatfrom=void 0,this.buffering=!1,this.unsubscribe.push(We.subscribeKey("buffering",t=>this.buffering=t))}disconnectCallback(){this.unsubscribe.forEach(t=>t())}render(){const t=this.generateTabs();return k`
      <wui-flex justifyContent="center" .padding=${["l","0","0","0"]}>
        <wui-tabs
          ?disabled=${this.buffering}
          .tabs=${t}
          .onTabChange=${this.onTabChange.bind(this)}
        ></wui-tabs>
      </wui-flex>
    `}generateTabs(){const t=this.platforms.map(n=>n==="browser"?{label:"Browser",icon:"extension",platform:"browser"}:n==="mobile"?{label:"Mobile",icon:"mobile",platform:"mobile"}:n==="qrcode"?{label:"Mobile",icon:"mobile",platform:"qrcode"}:n==="web"?{label:"Webapp",icon:"browser",platform:"web"}:n==="desktop"?{label:"Desktop",icon:"desktop",platform:"desktop"}:{label:"Browser",icon:"extension",platform:"unsupported"});return this.platformTabs=t.map(({platform:n})=>n),t}onTabChange(t){var r;const n=this.platformTabs[t];n&&((r=this.onSelectPlatfrom)==null||r.call(this,n))}};Iu([M({type:Array})],La.prototype,"platforms",void 0);Iu([M()],La.prototype,"onSelectPlatfrom",void 0);Iu([$e()],La.prototype,"buffering",void 0);La=Iu([ue("w3m-connecting-header")],La);var bT=globalThis&&globalThis.__decorate||function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};let lm=class extends qt{constructor(){if(super(),!this.wallet)throw new Error("w3m-connecting-wc-browser: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.onAutoConnect=this.onConnectProxy.bind(this),Xe.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"browser"}})}async onConnectProxy(){try{this.error=!1;const{connectors:t}=yn.state,n=t.find(i=>{var o,s;return i.type==="ANNOUNCED"&&((o=i.info)==null?void 0:o.rdns)===((s=this.wallet)==null?void 0:s.rdns)}),r=t.find(i=>i.type==="INJECTED");n?await We.connectExternal(n):r&&await We.connectExternal(r),bt.close(),Xe.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:"browser"}})}catch(t){Xe.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:(t==null?void 0:t.message)??"Unknown"}}),this.error=!0}}};lm=bT([ue("w3m-connecting-wc-browser")],lm);var yT=globalThis&&globalThis.__decorate||function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};let um=class extends qt{constructor(){if(super(),!this.wallet)throw new Error("w3m-connecting-wc-desktop: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.onRender=this.onRenderProxy.bind(this),Xe.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"desktop"}})}onRenderProxy(){!this.ready&&this.uri&&(this.ready=!0,this.timeout=setTimeout(()=>{var t;(t=this.onConnect)==null||t.call(this)},200))}onConnectProxy(){var t;if((t=this.wallet)!=null&&t.desktop_link&&this.uri)try{this.error=!1;const{desktop_link:n,name:r}=this.wallet,{redirect:i,href:o}=Ee.formatNativeUrl(n,this.uri);We.setWcLinking({name:r,href:o}),We.setRecentWallet(this.wallet),Ee.openHref(i,"_self")}catch{this.error=!0}}};um=yT([ue("w3m-connecting-wc-desktop")],um);var vT=globalThis&&globalThis.__decorate||function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};let dm=class extends qt{constructor(){if(super(),!this.wallet)throw new Error("w3m-connecting-wc-mobile: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.onRender=this.onRenderProxy.bind(this),document.addEventListener("visibilitychange",this.onBuffering.bind(this)),Xe.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"mobile"}})}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("visibilitychange",this.onBuffering.bind(this))}onRenderProxy(){var t;!this.ready&&this.uri&&(this.ready=!0,(t=this.onConnect)==null||t.call(this))}onConnectProxy(){var t;if((t=this.wallet)!=null&&t.mobile_link&&this.uri)try{this.error=!1;const{mobile_link:n,name:r}=this.wallet,{redirect:i,href:o}=Ee.formatNativeUrl(n,this.uri);We.setWcLinking({name:r,href:o}),We.setRecentWallet(this.wallet),Ee.openHref(i,"_self")}catch{this.error=!0}}onBuffering(){const t=Ee.isIos();(document==null?void 0:document.visibilityState)==="visible"&&!this.error&&t&&(We.setBuffering(!0),setTimeout(()=>{We.setBuffering(!1)},5e3))}};dm=vT([ue("w3m-connecting-wc-mobile")],dm);const xT=we`
  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  wui-shimmer {
    width: 100%;
    aspect-ratio: 1 / 1;
    border-radius: clamp(0px, var(--wui-border-radius-l), 40px) !important;
  }

  wui-qr-code {
    opacity: 0;
    animation-duration: 200ms;
    animation-timing-function: ease;
    animation-name: fadein;
    animation-fill-mode: forwards;
  }
`;var _T=globalThis&&globalThis.__decorate||function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};let Wf=class extends qt{constructor(){var t;super(),this.forceUpdate=()=>{this.requestUpdate()},window.addEventListener("resize",this.forceUpdate),Xe.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:((t=this.wallet)==null?void 0:t.name)??"WalletConnect",platform:"qrcode"}})}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("resize",this.forceUpdate)}render(){return this.onRenderProxy(),k`
      <wui-flex padding="xl" flexDirection="column" gap="xl" alignItems="center">
        <wui-shimmer borderRadius="l" width="100%"> ${this.qrCodeTemplate()} </wui-shimmer>

        <wui-text variant="paragraph-500" color="fg-100">
          Scan this QR Code with your phone
        </wui-text>

        <wui-link @click=${this.onCopyUri} color="fg-200">
          <wui-icon size="sm" color="fg-200" slot="iconLeft" name="copy"></wui-icon>
          Copy Link
        </wui-link>
      </wui-flex>

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}onRenderProxy(){!this.ready&&this.uri&&(this.timeout=setTimeout(()=>{this.ready=!0},200))}qrCodeTemplate(){if(!this.uri||!this.ready)return null;const t=this.getBoundingClientRect().width-40,n=this.wallet?this.wallet.name:void 0;return We.setWcLinking(void 0),We.setRecentWallet(this.wallet),k`<wui-qr-code
      size=${t}
      theme=${en.state.themeMode}
      uri=${this.uri}
      imageSrc=${ke(wt.getWalletImage(this.wallet))}
      alt=${ke(n)}
    ></wui-qr-code>`}};Wf.styles=xT;Wf=_T([ue("w3m-connecting-wc-qrcode")],Wf);var CT=globalThis&&globalThis.__decorate||function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};let fm=class extends de{constructor(){var t;if(super(),this.wallet=(t=Me.state.data)==null?void 0:t.wallet,!this.wallet)throw new Error("w3m-connecting-wc-unsupported: No wallet provided");Xe.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"browser"}})}render(){return k`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","xl","xl"]}
        gap="xl"
      >
        <wui-wallet-image
          size="lg"
          imageSrc=${ke(wt.getWalletImage(this.wallet))}
        ></wui-wallet-image>

        <wui-text variant="paragraph-500" color="fg-100">Not Detected</wui-text>
      </wui-flex>

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}};fm=CT([ue("w3m-connecting-wc-unsupported")],fm);var ET=globalThis&&globalThis.__decorate||function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};let hm=class extends qt{constructor(){if(super(),!this.wallet)throw new Error("w3m-connecting-wc-web: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.secondaryBtnLabel="Open",this.secondaryLabel="Open and continue in a new browser tab",this.secondaryBtnIcon="externalLink",Xe.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"web"}})}onConnectProxy(){var t;if((t=this.wallet)!=null&&t.webapp_link&&this.uri)try{this.error=!1;const{webapp_link:n,name:r}=this.wallet,{redirect:i,href:o}=Ee.formatUniversalUrl(n,this.uri);We.setWcLinking({name:r,href:o}),We.setRecentWallet(this.wallet),Ee.openHref(i,"_blank")}catch{this.error=!0}}};hm=ET([ue("w3m-connecting-wc-web")],hm);const TT=we`
  wui-icon-link[data-hidden='true'] {
    opacity: 0 !important;
    pointer-events: none;
  }
`;var Ru=globalThis&&globalThis.__decorate||function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};function pm(){var i,o,s,a,c,u;const e=(o=(i=Me.state.data)==null?void 0:i.connector)==null?void 0:o.name,t=(a=(s=Me.state.data)==null?void 0:s.wallet)==null?void 0:a.name,n=(u=(c=Me.state.data)==null?void 0:c.network)==null?void 0:u.name,r=t??e;return{Connect:"Connect Wallet",Account:void 0,ConnectingExternal:r??"Connect Wallet",ConnectingWalletConnect:r??"WalletConnect",Networks:"Choose Network",SwitchNetwork:n??"Switch Network",AllWallets:"All Wallets",WhatIsANetwork:"What is a network?",WhatIsAWallet:"What is a wallet?",GetWallet:"Get a Wallet",Downloads:r?`Get ${r}`:"Downloads"}}let zo=class extends de{constructor(){super(),this.unsubscribe=[],this.heading=pm()[Me.state.view],this.buffering=!1,this.showBack=!1,this.unsubscribe.push(Me.subscribeKey("view",t=>{this.onViewChange(t),this.onHistoryChange()}),We.subscribeKey("buffering",t=>this.buffering=t))}disconnectCallback(){this.unsubscribe.forEach(t=>t())}render(){return k`
      <wui-flex .padding=${this.getPadding()} justifyContent="space-between" alignItems="center">
        ${this.dynamicButtonTemplate()} ${this.titleTemplate()}
        <wui-icon-link
          ?disabled=${this.buffering}
          icon="close"
          @click=${bt.close}
        ></wui-icon-link>
      </wui-flex>
      ${this.separatorTemplate()}
    `}onWalletHelp(){Xe.sendEvent({type:"track",event:"CLICK_WALLET_HELP"}),Me.push("WhatIsAWallet")}titleTemplate(){return k`<wui-text variant="paragraph-700" color="fg-100">${this.heading}</wui-text>`}dynamicButtonTemplate(){const{view:t}=Me.state,n=t==="Connect";return this.showBack?k`<wui-icon-link
        id="dynamic"
        icon="chevronLeft"
        ?disabled=${this.buffering}
        @click=${Me.goBack}
      ></wui-icon-link>`:k`<wui-icon-link
      data-hidden=${!n}
      id="dynamic"
      icon="helpCircle"
      @click=${this.onWalletHelp.bind(this)}
    ></wui-icon-link>`}separatorTemplate(){return this.heading?k`<wui-separator></wui-separator>`:null}getPadding(){return this.heading?["l","2l","l","2l"]:["l","2l","0","2l"]}async onViewChange(t){var r;const n=(r=this.shadowRoot)==null?void 0:r.querySelector("wui-text");if(n){const i=pm()[t];await n.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.heading=i,n.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"})}}async onHistoryChange(){var r;const{history:t}=Me.state,n=(r=this.shadowRoot)==null?void 0:r.querySelector("#dynamic");t.length>1&&!this.showBack&&n?(await n.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.showBack=!0,n.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"})):t.length<=1&&this.showBack&&n&&(await n.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.showBack=!1,n.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}};zo.styles=[TT];Ru([$e()],zo.prototype,"heading",void 0);Ru([$e()],zo.prototype,"buffering",void 0);Ru([$e()],zo.prototype,"showBack",void 0);zo=Ru([ue("w3m-header")],zo);var zb=globalThis&&globalThis.__decorate||function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};let Hf=class extends de{constructor(){super(...arguments),this.data=[]}render(){return k`
      <wui-flex flexDirection="column" alignItems="center" gap="l">
        ${this.data.map(t=>k`
            <wui-flex flexDirection="column" alignItems="center" gap="xl">
              <wui-flex flexDirection="row" justifyContent="center" gap="1xs">
                ${t.images.map(n=>k`<wui-visual name=${n}></wui-visual>`)}
              </wui-flex>
            </wui-flex>
            <wui-flex flexDirection="column" alignItems="center" gap="xxs">
              <wui-text variant="paragraph-500" color="fg-100" align="center">
                ${t.title}
              </wui-text>
              <wui-text variant="small-500" color="fg-200" align="center">${t.text}</wui-text>
            </wui-flex>
          `)}
      </wui-flex>
    `}};zb([M({type:Array})],Hf.prototype,"data",void 0);Hf=zb([ue("w3m-help-widget")],Hf);const ST=we`
  wui-flex {
    background-color: var(--wui-gray-glass-005);
  }

  a {
    text-decoration: none;
    color: var(--wui-color-fg-175);
    font-weight: 600;
  }
`;var AT=globalThis&&globalThis.__decorate||function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};let zf=class extends de{render(){const{termsConditionsUrl:t,privacyPolicyUrl:n}=tt.state;return!t&&!n?null:k`
      <wui-flex .padding=${["m","s","s","s"]} justifyContent="center">
        <wui-text color="fg-250" variant="small-500" align="center">
          By connecting your wallet, you agree to our <br />
          ${this.termsTemplate()} ${this.andTemplate()} ${this.privacyTemplate()}
        </wui-text>
      </wui-flex>
    `}andTemplate(){const{termsConditionsUrl:t,privacyPolicyUrl:n}=tt.state;return t&&n?"and":""}termsTemplate(){const{termsConditionsUrl:t}=tt.state;return t?k`<a href=${t}>Terms of Service</a>`:null}privacyTemplate(){const{privacyPolicyUrl:t}=tt.state;return t?k`<a href=${t}>Privacy Policy</a>`:null}};zf.styles=[ST];zf=AT([ue("w3m-legal-footer")],zf);const $T=we`
  :host {
    display: block;
    padding: 0 var(--wui-spacing-xl) var(--wui-spacing-xl);
  }
`;var qb=globalThis&&globalThis.__decorate||function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};let Pl=class extends de{constructor(){super(...arguments),this.wallet=void 0}render(){if(!this.wallet)return this.style.display="none",null;const{name:t,app_store:n,play_store:r,chrome_store:i,homepage:o}=this.wallet,s=Ee.isMobile(),a=Ee.isIos(),c=Ee.isAndroid(),u=[n,r,o,i].filter(Boolean).length>1,l=Ye.getTruncateString({string:t,charsStart:12,charsEnd:0,truncate:"end"});return u&&!s?k`
        <wui-cta-button
          label=${`Don't have ${l}?`}
          buttonLabel="Get"
          @click=${()=>Me.push("Downloads",{wallet:this.wallet})}
        ></wui-cta-button>
      `:!u&&o?k`
        <wui-cta-button
          label=${`Don't have ${l}?`}
          buttonLabel="Get"
          @click=${this.onHomePage.bind(this)}
        ></wui-cta-button>
      `:n&&a?k`
        <wui-cta-button
          label=${`Don't have ${l}?`}
          buttonLabel="Get"
          @click=${this.onAppStore.bind(this)}
        ></wui-cta-button>
      `:r&&c?k`
        <wui-cta-button
          label=${`Don't have ${l}?`}
          buttonLabel="Get"
          @click=${this.onPlayStore.bind(this)}
        ></wui-cta-button>
      `:(this.style.display="none",null)}onAppStore(){var t;(t=this.wallet)!=null&&t.app_store&&Ee.openHref(this.wallet.app_store,"_blank")}onPlayStore(){var t;(t=this.wallet)!=null&&t.play_store&&Ee.openHref(this.wallet.play_store,"_blank")}onHomePage(){var t;(t=this.wallet)!=null&&t.homepage&&Ee.openHref(this.wallet.homepage,"_blank")}};Pl.styles=[$T];qb([M({type:Object})],Pl.prototype,"wallet",void 0);Pl=qb([ue("w3m-mobile-download-links")],Pl);const PT=we`
  :host {
    display: block;
    position: absolute;
    opacity: 0;
    pointer-events: none;
    top: 11px;
    left: 50%;
  }
`;var Vb=globalThis&&globalThis.__decorate||function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};const OT={success:{backgroundColor:"success-100",iconColor:"success-100",icon:"checkmark"},error:{backgroundColor:"error-100",iconColor:"error-100",icon:"close"}};let Ol=class extends de{constructor(){super(),this.unsubscribe=[],this.timeout=void 0,this.open=vn.state.open,this.unsubscribe.push(vn.subscribeKey("open",t=>{this.open=t,this.onOpen()}))}disconnectedCallback(){clearTimeout(this.timeout),this.unsubscribe.forEach(t=>t())}render(){const{message:t,variant:n}=vn.state,r=OT[n];return k`
      <wui-snackbar
        message=${t}
        backgroundColor=${r.backgroundColor}
        iconColor=${r.iconColor}
        icon=${r.icon}
      ></wui-snackbar>
    `}onOpen(){clearTimeout(this.timeout),this.open?(this.animate([{opacity:0,transform:"translateX(-50%) scale(0.85)"},{opacity:1,transform:"translateX(-50%) scale(1)"}],{duration:150,fill:"forwards",easing:"ease"}),this.timeout=setTimeout(()=>vn.hide(),2500)):this.animate([{opacity:1,transform:"translateX(-50%) scale(1)"},{opacity:0,transform:"translateX(-50%) scale(0.85)"}],{duration:150,fill:"forwards",easing:"ease"})}};Ol.styles=PT;Vb([$e()],Ol.prototype,"open",void 0);Ol=Vb([ue("w3m-snackbar")],Ol);let mm=!1;class DT{constructor(t){this.initPromise=void 0,this.setIsConnected=n=>{Ze.setIsConnected(n)},this.setCaipAddress=n=>{Ze.setCaipAddress(n)},this.setBalance=(n,r)=>{Ze.setBalance(n,r)},this.setProfileName=n=>{Ze.setProfileName(n)},this.setProfileImage=n=>{Ze.setProfileImage(n)},this.resetAccount=()=>{Ze.resetAccount()},this.setCaipNetwork=n=>{rt.setCaipNetwork(n)},this.getCaipNetwork=()=>rt.state.caipNetwork,this.setRequestedCaipNetworks=n=>{rt.setRequestedCaipNetworks(n)},this.getApprovedCaipNetworksData=()=>rt.getApprovedCaipNetworksData(),this.resetNetwork=()=>{rt.resetNetwork()},this.setConnectors=n=>{yn.setConnectors(n)},this.addConnector=n=>{yn.addConnector(n)},this.getConnectors=()=>yn.getConnectors(),this.resetWcConnection=()=>{We.resetWcConnection()},this.fetchIdentity=n=>C_.fetchIdentity(n),this.setAddressExplorerUrl=n=>{Ze.setAddressExplorerUrl(n)},this.initControllers(t),this.initOrContinue()}async open(t){await this.initOrContinue(),bt.open(t)}async close(){await this.initOrContinue(),bt.close()}getThemeMode(){return en.state.themeMode}getThemeVariables(){return en.state.themeVariables}setThemeMode(t){en.setThemeMode(t),ib(en.state.themeMode)}setThemeVariables(t){en.setThemeVariables(t),W_(en.state.themeVariables)}subscribeTheme(t){return en.subscribe(t)}getState(){return{...Do.state}}subscribeState(t){return Do.subscribe(t)}getEvent(){return{...Xe.state}}subscribeEvents(t){return Xe.subscribe(t)}initControllers(t){rt.setClient(t.networkControllerClient),rt.setDefaultCaipNetwork(t.defaultChain),tt.setProjectId(t.projectId),tt.setIncludeWalletIds(t.includeWalletIds),tt.setExcludeWalletIds(t.excludeWalletIds),tt.setFeaturedWalletIds(t.featuredWalletIds),tt.setTokens(t.tokens),tt.setTermsConditionsUrl(t.termsConditionsUrl),tt.setPrivacyPolicyUrl(t.privacyPolicyUrl),tt.setCustomWallets(t.customWallets),tt.setEnableAnalytics(t.enableAnalytics),tt.setSdkVersion(t._sdkVersion),We.setClient(t.connectionControllerClient),t.themeMode&&en.setThemeMode(t.themeMode),t.themeVariables&&en.setThemeVariables(t.themeVariables)}async initOrContinue(){return!this.initPromise&&!mm&&Ee.isClient()&&(mm=!0,this.initPromise=new Promise(async t=>{await Promise.all([Vt(()=>import("./index-3b4e3853.js"),[]),Vt(()=>Promise.resolve().then(()=>tT),void 0)]);const n=document.createElement("w3m-modal");document.body.insertAdjacentElement("beforeend",n),t()})),this.initPromise}}const xi="walletConnect",jh="injected",Wh="coinbaseWallet",Hh="safe",zh="ledger",io="eip6963",Ln="eip155",IT="wallet_addEthereumChain",RT="wagmi.wallet",NT="eip6963:announceProvider",kT="eip6963:requestProvider",Gb="3.1.0",qf={1:"692ed6ba-e569-459a-556a-776476829e00",42161:"600a9a04-c1b9-42ca-6785-9b4b6ff85200",43114:"30c46e53-e989-45fb-4549-be3bd4eb3b00",56:"93564157-2e8e-4ce7-81df-b264dbee9b00",250:"06b26297-fe0c-4733-5d6b-ffa5498aac00",10:"ab9c186a-c52f-464b-2906-ca59d760a400",137:"41d04d42-da3b-4453-8506-668cc0727900",100:"02b53f6a-e3d4-479e-1cb4-21178987d100",9001:"f926ff41-260d-4028-635e-91913fc28e00",324:"b310f07f-4ef7-49f3-7073-2a0a39685800",314:"5a73b3dd-af74-424e-cae0-0de859ee9400",4689:"34e68754-e536-40da-c153-6ef2e7188a00",1088:"3897a66d-40b9-4833-162f-a2c90531c900",1284:"161038da-44ae-4ec7-1208-0ea569454b00",1285:"f1d73bb6-5450-4e18-38f7-fb6484264a00",7777777:"845c60df-d429-4991-e687-91ae45791600",42220:"ab781bbc-ccc6-418d-d32d-789b15da1f00",8453:"7289c336-3981-4081-c5f4-efc26ac64a00",1313161554:"3ff73439-a619-4894-9262-4470c773a100"},MT={[Wh]:"0c2840c3-5b04-4c44-9661-fbd4b49e1800",[Hh]:"461db637-8616-43ce-035a-d89b8a1d5800",[zh]:"54a1aa77-d202-4f8d-0fb2-5d2bb6db0300",[xi]:"ef1a1fcf-7fe8-4d69-bd6d-fda1345b4400",[jh]:"07ba87ed-43aa-4adf-4540-9e6a2b9cae00"},BT={[Wh]:"fd20dc426fb37566d803205b19bbc1d4096b248ac04548e3cfb6b3a38bd033aa",[Hh]:"225affb176778569276e484e1b92637ad061b01e13a048b35a9d280c3b58970f",[zh]:"19177a98252e07ddfc9af2083ba8e07ef627cb6103467ffebb3f8f4205fd7927"},LT={[jh]:"Browser Wallet",[xi]:"WalletConnect",[Wh]:"Coinbase",[zh]:"Ledger",[Hh]:"Safe"},UT={[jh]:"INJECTED",[xi]:"WALLET_CONNECT",[io]:"ANNOUNCED"};function FT(e){if(e)return{id:`${Ln}:${e.id}`,name:e.name,imageId:qf[e.id]}}function jT(e){if(!e)return;const t={};return Object.entries(e).forEach(([n,r])=>{t[`${Ln}:${n}`]=r}),t}function Es(e){return e?Number(e.split(":")[1]):void 0}class WT extends DT{constructor(t){const{wagmiConfig:n,chains:r,defaultChain:i,tokens:o,_sdkVersion:s,...a}=t;if(!n)throw new Error("web3modal:constructor - wagmiConfig is undefined");if(!a.projectId)throw new Error("web3modal:constructor - projectId is undefined");if(!n.connectors.find(l=>l.id===xi))throw new Error("web3modal:constructor - WalletConnectConnector is required");const c={switchCaipNetwork:async l=>{const d=Es(l==null?void 0:l.id);d&&await yh({chainId:d})},async getApprovedCaipNetworksData(){var d,p,g,w;const l=localStorage.getItem(RT);if(l!=null&&l.includes(xi)){const y=n.connectors.find(_=>_.id===xi);if(!y)throw new Error("networkControllerClient:getApprovedCaipNetworks - connector is undefined");const E=(p=(d=(await y.getProvider()).signer)==null?void 0:d.session)==null?void 0:p.namespaces,b=(g=E==null?void 0:E[Ln])==null?void 0:g.methods,C=(w=E==null?void 0:E[Ln])==null?void 0:w.chains;return{supportsAllNetworks:b==null?void 0:b.includes(IT),approvedCaipNetworkIds:C}}return{approvedCaipNetworkIds:void 0,supportsAllNetworks:!0}}},u={connectWalletConnect:async l=>{var g;const d=n.connectors.find(w=>w.id===xi);if(!d)throw new Error("connectionControllerClient:getWalletConnectUri - connector is undefined");d.on("message",w=>{w.type==="display_uri"&&(l(w.data),d.removeAllListeners())});const p=Es((g=this.getCaipNetwork())==null?void 0:g.id);await k1({connector:d,chainId:p})},connectExternal:async({id:l,provider:d,info:p})=>{var y,x;const g=n.connectors.find(E=>E.id===l);if(!g)throw new Error("connectionControllerClient:connectExternal - connector is undefined");d&&p&&g.id===io&&((y=g.setEip6963Wallet)==null||y.call(g,{provider:d,info:p}));const w=Es((x=this.getCaipNetwork())==null?void 0:x.id);await k1({connector:g,chainId:w})},checkInstalled:l=>{const d=this.getConnectors().filter(g=>g.type==="ANNOUNCED"),p=this.getConnectors().find(g=>g.type==="INJECTED");return l?d.length&&l.some(w=>d.some(y=>{var x;return((x=y.info)==null?void 0:x.rdns)===w}))?!0:p&&window!=null&&window.ethereum?l.some(g=>{var w;return!!((w=window.ethereum)!=null&&w[String(g)])}):!1:!!window.ethereum},disconnect:Hw};super({networkControllerClient:c,connectionControllerClient:u,defaultChain:FT(i),tokens:jT(o),_sdkVersion:s??`html-wagmi-${Gb}`,...a}),this.hasSyncedConnectedAccount=!1,this.options=void 0,this.options=t,this.syncRequestedNetworks(r),this.syncConnectors(n),this.listenConnectors(n),Vw(()=>this.syncAccount()),Gw(()=>this.syncNetwork())}getState(){const t=super.getState();return{...t,selectedNetworkId:Es(t.selectedNetworkId)}}subscribeState(t){return super.subscribeState(n=>t({...n,selectedNetworkId:Es(n.selectedNetworkId)}))}syncRequestedNetworks(t){const n=t==null?void 0:t.map(r=>{var i,o;return{id:`${Ln}:${r.id}`,name:r.name,imageId:qf[r.id],imageUrl:(o=(i=this.options)==null?void 0:i.chainImages)==null?void 0:o[r.id]}});this.setRequestedCaipNetworks(n??[])}async syncAccount(){const{address:t,isConnected:n}=cl(),{chain:r}=Di();if(this.resetAccount(),n&&t&&r){const i=`${Ln}:${r.id}:${t}`;this.setIsConnected(n),this.setCaipAddress(i),await Promise.all([this.syncProfile(t),this.syncBalance(t,r),this.getApprovedCaipNetworksData()]),this.hasSyncedConnectedAccount=!0}else!n&&this.hasSyncedConnectedAccount&&(this.resetWcConnection(),this.resetNetwork())}async syncNetwork(){var i,o,s,a;const{address:t,isConnected:n}=cl(),{chain:r}=Di();if(r){const c=String(r.id),u=`${Ln}:${c}`;if(this.setCaipNetwork({id:u,name:r.name,imageId:qf[r.id],imageUrl:(o=(i=this.options)==null?void 0:i.chainImages)==null?void 0:o[r.id]}),n&&t){const l=`${Ln}:${r.id}:${t}`;if(this.setCaipAddress(l),(a=(s=r.blockExplorers)==null?void 0:s.default)!=null&&a.url){const d=`${r.blockExplorers.default.url}/address/${t}`;this.setAddressExplorerUrl(d)}else this.setAddressExplorerUrl(void 0);this.hasSyncedConnectedAccount&&await this.syncBalance(t,r)}}}async syncProfile(t){try{const{name:n,avatar:r}=await this.fetchIdentity({caipChainId:`${Ln}:${Hc.id}`,address:t});this.setProfileName(n),this.setProfileImage(r)}catch{const n=await u_({address:t,chainId:Hc.id});if(n){this.setProfileName(n);const r=await l_({name:n,chainId:Hc.id});r&&this.setProfileImage(r)}}}async syncBalance(t,n){var i,o,s;const r=await qw({address:t,chainId:n.id,token:(s=(o=(i=this.options)==null?void 0:i.tokens)==null?void 0:o[n.id])==null?void 0:s.address});this.setBalance(r.formatted,r.symbol)}syncConnectors(t){const n=[];t.connectors.forEach(({id:r,name:i})=>{var o,s;r!==io&&n.push({id:r,explorerId:BT[r],imageId:MT[r],imageUrl:(s=(o=this.options)==null?void 0:o.connectorImages)==null?void 0:s[r],name:LT[r]??i,type:UT[r]??"EXTERNAL"})}),this.setConnectors(n)}listenConnectors(t){const n=t.connectors.find(r=>r.id===io);typeof window<"u"&&n&&(window.addEventListener(NT,r=>{var i,o;if(r.detail){const{info:s,provider:a}=r.detail;this.addConnector({id:io,type:"ANNOUNCED",imageUrl:s.icon??((o=(i=this.options)==null?void 0:i.connectorImages)==null?void 0:o[io]),name:s.name,provider:a,info:s}),n.isAuthorized({info:s,provider:a})}}),window.dispatchEvent(new Event(kT)))}}globalThis&&globalThis.__classPrivateFieldSet;globalThis&&globalThis.__classPrivateFieldGet;var Kb={},Nu={};Nu.byteLength=qT;Nu.toByteArray=GT;Nu.fromByteArray=JT;var jn=[],tn=[],HT=typeof Uint8Array<"u"?Uint8Array:Array,Id="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(var Yi=0,zT=Id.length;Yi<zT;++Yi)jn[Yi]=Id[Yi],tn[Id.charCodeAt(Yi)]=Yi;tn["-".charCodeAt(0)]=62;tn["_".charCodeAt(0)]=63;function Zb(e){var t=e.length;if(t%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var n=e.indexOf("=");n===-1&&(n=t);var r=n===t?0:4-n%4;return[n,r]}function qT(e){var t=Zb(e),n=t[0],r=t[1];return(n+r)*3/4-r}function VT(e,t,n){return(t+n)*3/4-n}function GT(e){var t,n=Zb(e),r=n[0],i=n[1],o=new HT(VT(e,r,i)),s=0,a=i>0?r-4:r,c;for(c=0;c<a;c+=4)t=tn[e.charCodeAt(c)]<<18|tn[e.charCodeAt(c+1)]<<12|tn[e.charCodeAt(c+2)]<<6|tn[e.charCodeAt(c+3)],o[s++]=t>>16&255,o[s++]=t>>8&255,o[s++]=t&255;return i===2&&(t=tn[e.charCodeAt(c)]<<2|tn[e.charCodeAt(c+1)]>>4,o[s++]=t&255),i===1&&(t=tn[e.charCodeAt(c)]<<10|tn[e.charCodeAt(c+1)]<<4|tn[e.charCodeAt(c+2)]>>2,o[s++]=t>>8&255,o[s++]=t&255),o}function KT(e){return jn[e>>18&63]+jn[e>>12&63]+jn[e>>6&63]+jn[e&63]}function ZT(e,t,n){for(var r,i=[],o=t;o<n;o+=3)r=(e[o]<<16&16711680)+(e[o+1]<<8&65280)+(e[o+2]&255),i.push(KT(r));return i.join("")}function JT(e){for(var t,n=e.length,r=n%3,i=[],o=16383,s=0,a=n-r;s<a;s+=o)i.push(ZT(e,s,s+o>a?a:s+o));return r===1?(t=e[n-1],i.push(jn[t>>2]+jn[t<<4&63]+"==")):r===2&&(t=(e[n-2]<<8)+e[n-1],i.push(jn[t>>10]+jn[t>>4&63]+jn[t<<2&63]+"=")),i.join("")}var qh={};/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */qh.read=function(e,t,n,r,i){var o,s,a=i*8-r-1,c=(1<<a)-1,u=c>>1,l=-7,d=n?i-1:0,p=n?-1:1,g=e[t+d];for(d+=p,o=g&(1<<-l)-1,g>>=-l,l+=a;l>0;o=o*256+e[t+d],d+=p,l-=8);for(s=o&(1<<-l)-1,o>>=-l,l+=r;l>0;s=s*256+e[t+d],d+=p,l-=8);if(o===0)o=1-u;else{if(o===c)return s?NaN:(g?-1:1)*(1/0);s=s+Math.pow(2,r),o=o-u}return(g?-1:1)*s*Math.pow(2,o-r)};qh.write=function(e,t,n,r,i,o){var s,a,c,u=o*8-i-1,l=(1<<u)-1,d=l>>1,p=i===23?Math.pow(2,-24)-Math.pow(2,-77):0,g=r?0:o-1,w=r?1:-1,y=t<0||t===0&&1/t<0?1:0;for(t=Math.abs(t),isNaN(t)||t===1/0?(a=isNaN(t)?1:0,s=l):(s=Math.floor(Math.log(t)/Math.LN2),t*(c=Math.pow(2,-s))<1&&(s--,c*=2),s+d>=1?t+=p/c:t+=p*Math.pow(2,1-d),t*c>=2&&(s++,c/=2),s+d>=l?(a=0,s=l):s+d>=1?(a=(t*c-1)*Math.pow(2,i),s=s+d):(a=t*Math.pow(2,d-1)*Math.pow(2,i),s=0));i>=8;e[n+g]=a&255,g+=w,a/=256,i-=8);for(s=s<<i|a,u+=i;u>0;e[n+g]=s&255,g+=w,s/=256,u-=8);e[n+g-w]|=y*128};/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */(function(e){const t=Nu,n=qh,r=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;e.Buffer=a,e.SlowBuffer=b,e.INSPECT_MAX_BYTES=50;const i=2147483647;e.kMaxLength=i,a.TYPED_ARRAY_SUPPORT=o(),!a.TYPED_ARRAY_SUPPORT&&typeof console<"u"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function o(){try{const v=new Uint8Array(1),f={foo:function(){return 42}};return Object.setPrototypeOf(f,Uint8Array.prototype),Object.setPrototypeOf(v,f),v.foo()===42}catch{return!1}}Object.defineProperty(a.prototype,"parent",{enumerable:!0,get:function(){if(a.isBuffer(this))return this.buffer}}),Object.defineProperty(a.prototype,"offset",{enumerable:!0,get:function(){if(a.isBuffer(this))return this.byteOffset}});function s(v){if(v>i)throw new RangeError('The value "'+v+'" is invalid for option "size"');const f=new Uint8Array(v);return Object.setPrototypeOf(f,a.prototype),f}function a(v,f,m){if(typeof v=="number"){if(typeof f=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return d(v)}return c(v,f,m)}a.poolSize=8192;function c(v,f,m){if(typeof v=="string")return p(v,f);if(ArrayBuffer.isView(v))return w(v);if(v==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof v);if(oe(v,ArrayBuffer)||v&&oe(v.buffer,ArrayBuffer)||typeof SharedArrayBuffer<"u"&&(oe(v,SharedArrayBuffer)||v&&oe(v.buffer,SharedArrayBuffer)))return y(v,f,m);if(typeof v=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');const A=v.valueOf&&v.valueOf();if(A!=null&&A!==v)return a.from(A,f,m);const I=x(v);if(I)return I;if(typeof Symbol<"u"&&Symbol.toPrimitive!=null&&typeof v[Symbol.toPrimitive]=="function")return a.from(v[Symbol.toPrimitive]("string"),f,m);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof v)}a.from=function(v,f,m){return c(v,f,m)},Object.setPrototypeOf(a.prototype,Uint8Array.prototype),Object.setPrototypeOf(a,Uint8Array);function u(v){if(typeof v!="number")throw new TypeError('"size" argument must be of type number');if(v<0)throw new RangeError('The value "'+v+'" is invalid for option "size"')}function l(v,f,m){return u(v),v<=0?s(v):f!==void 0?typeof m=="string"?s(v).fill(f,m):s(v).fill(f):s(v)}a.alloc=function(v,f,m){return l(v,f,m)};function d(v){return u(v),s(v<0?0:E(v)|0)}a.allocUnsafe=function(v){return d(v)},a.allocUnsafeSlow=function(v){return d(v)};function p(v,f){if((typeof f!="string"||f==="")&&(f="utf8"),!a.isEncoding(f))throw new TypeError("Unknown encoding: "+f);const m=C(v,f)|0;let A=s(m);const I=A.write(v,f);return I!==m&&(A=A.slice(0,I)),A}function g(v){const f=v.length<0?0:E(v.length)|0,m=s(f);for(let A=0;A<f;A+=1)m[A]=v[A]&255;return m}function w(v){if(oe(v,Uint8Array)){const f=new Uint8Array(v);return y(f.buffer,f.byteOffset,f.byteLength)}return g(v)}function y(v,f,m){if(f<0||v.byteLength<f)throw new RangeError('"offset" is outside of buffer bounds');if(v.byteLength<f+(m||0))throw new RangeError('"length" is outside of buffer bounds');let A;return f===void 0&&m===void 0?A=new Uint8Array(v):m===void 0?A=new Uint8Array(v,f):A=new Uint8Array(v,f,m),Object.setPrototypeOf(A,a.prototype),A}function x(v){if(a.isBuffer(v)){const f=E(v.length)|0,m=s(f);return m.length===0||v.copy(m,0,0,f),m}if(v.length!==void 0)return typeof v.length!="number"||se(v.length)?s(0):g(v);if(v.type==="Buffer"&&Array.isArray(v.data))return g(v.data)}function E(v){if(v>=i)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+i.toString(16)+" bytes");return v|0}function b(v){return+v!=v&&(v=0),a.alloc(+v)}a.isBuffer=function(f){return f!=null&&f._isBuffer===!0&&f!==a.prototype},a.compare=function(f,m){if(oe(f,Uint8Array)&&(f=a.from(f,f.offset,f.byteLength)),oe(m,Uint8Array)&&(m=a.from(m,m.offset,m.byteLength)),!a.isBuffer(f)||!a.isBuffer(m))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(f===m)return 0;let A=f.length,I=m.length;for(let B=0,j=Math.min(A,I);B<j;++B)if(f[B]!==m[B]){A=f[B],I=m[B];break}return A<I?-1:I<A?1:0},a.isEncoding=function(f){switch(String(f).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},a.concat=function(f,m){if(!Array.isArray(f))throw new TypeError('"list" argument must be an Array of Buffers');if(f.length===0)return a.alloc(0);let A;if(m===void 0)for(m=0,A=0;A<f.length;++A)m+=f[A].length;const I=a.allocUnsafe(m);let B=0;for(A=0;A<f.length;++A){let j=f[A];if(oe(j,Uint8Array))B+j.length>I.length?(a.isBuffer(j)||(j=a.from(j)),j.copy(I,B)):Uint8Array.prototype.set.call(I,j,B);else if(a.isBuffer(j))j.copy(I,B);else throw new TypeError('"list" argument must be an Array of Buffers');B+=j.length}return I};function C(v,f){if(a.isBuffer(v))return v.length;if(ArrayBuffer.isView(v)||oe(v,ArrayBuffer))return v.byteLength;if(typeof v!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof v);const m=v.length,A=arguments.length>2&&arguments[2]===!0;if(!A&&m===0)return 0;let I=!1;for(;;)switch(f){case"ascii":case"latin1":case"binary":return m;case"utf8":case"utf-8":return X(v).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return m*2;case"hex":return m>>>1;case"base64":return te(v).length;default:if(I)return A?-1:X(v).length;f=(""+f).toLowerCase(),I=!0}}a.byteLength=C;function _(v,f,m){let A=!1;if((f===void 0||f<0)&&(f=0),f>this.length||((m===void 0||m>this.length)&&(m=this.length),m<=0)||(m>>>=0,f>>>=0,m<=f))return"";for(v||(v="utf8");;)switch(v){case"hex":return fe(this,f,m);case"utf8":case"utf-8":return Z(this,f,m);case"ascii":return q(this,f,m);case"latin1":case"binary":return ne(this,f,m);case"base64":return H(this,f,m);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return Ae(this,f,m);default:if(A)throw new TypeError("Unknown encoding: "+v);v=(v+"").toLowerCase(),A=!0}}a.prototype._isBuffer=!0;function T(v,f,m){const A=v[f];v[f]=v[m],v[m]=A}a.prototype.swap16=function(){const f=this.length;if(f%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(let m=0;m<f;m+=2)T(this,m,m+1);return this},a.prototype.swap32=function(){const f=this.length;if(f%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(let m=0;m<f;m+=4)T(this,m,m+3),T(this,m+1,m+2);return this},a.prototype.swap64=function(){const f=this.length;if(f%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(let m=0;m<f;m+=8)T(this,m,m+7),T(this,m+1,m+6),T(this,m+2,m+5),T(this,m+3,m+4);return this},a.prototype.toString=function(){const f=this.length;return f===0?"":arguments.length===0?Z(this,0,f):_.apply(this,arguments)},a.prototype.toLocaleString=a.prototype.toString,a.prototype.equals=function(f){if(!a.isBuffer(f))throw new TypeError("Argument must be a Buffer");return this===f?!0:a.compare(this,f)===0},a.prototype.inspect=function(){let f="";const m=e.INSPECT_MAX_BYTES;return f=this.toString("hex",0,m).replace(/(.{2})/g,"$1 ").trim(),this.length>m&&(f+=" ... "),"<Buffer "+f+">"},r&&(a.prototype[r]=a.prototype.inspect),a.prototype.compare=function(f,m,A,I,B){if(oe(f,Uint8Array)&&(f=a.from(f,f.offset,f.byteLength)),!a.isBuffer(f))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof f);if(m===void 0&&(m=0),A===void 0&&(A=f?f.length:0),I===void 0&&(I=0),B===void 0&&(B=this.length),m<0||A>f.length||I<0||B>this.length)throw new RangeError("out of range index");if(I>=B&&m>=A)return 0;if(I>=B)return-1;if(m>=A)return 1;if(m>>>=0,A>>>=0,I>>>=0,B>>>=0,this===f)return 0;let j=B-I,ve=A-m;const Ce=Math.min(j,ve),Le=this.slice(I,B),et=f.slice(m,A);for(let Ge=0;Ge<Ce;++Ge)if(Le[Ge]!==et[Ge]){j=Le[Ge],ve=et[Ge];break}return j<ve?-1:ve<j?1:0};function $(v,f,m,A,I){if(v.length===0)return-1;if(typeof m=="string"?(A=m,m=0):m>2147483647?m=2147483647:m<-2147483648&&(m=-2147483648),m=+m,se(m)&&(m=I?0:v.length-1),m<0&&(m=v.length+m),m>=v.length){if(I)return-1;m=v.length-1}else if(m<0)if(I)m=0;else return-1;if(typeof f=="string"&&(f=a.from(f,A)),a.isBuffer(f))return f.length===0?-1:h(v,f,m,A,I);if(typeof f=="number")return f=f&255,typeof Uint8Array.prototype.indexOf=="function"?I?Uint8Array.prototype.indexOf.call(v,f,m):Uint8Array.prototype.lastIndexOf.call(v,f,m):h(v,[f],m,A,I);throw new TypeError("val must be string, number or Buffer")}function h(v,f,m,A,I){let B=1,j=v.length,ve=f.length;if(A!==void 0&&(A=String(A).toLowerCase(),A==="ucs2"||A==="ucs-2"||A==="utf16le"||A==="utf-16le")){if(v.length<2||f.length<2)return-1;B=2,j/=2,ve/=2,m/=2}function Ce(et,Ge){return B===1?et[Ge]:et.readUInt16BE(Ge*B)}let Le;if(I){let et=-1;for(Le=m;Le<j;Le++)if(Ce(v,Le)===Ce(f,et===-1?0:Le-et)){if(et===-1&&(et=Le),Le-et+1===ve)return et*B}else et!==-1&&(Le-=Le-et),et=-1}else for(m+ve>j&&(m=j-ve),Le=m;Le>=0;Le--){let et=!0;for(let Ge=0;Ge<ve;Ge++)if(Ce(v,Le+Ge)!==Ce(f,Ge)){et=!1;break}if(et)return Le}return-1}a.prototype.includes=function(f,m,A){return this.indexOf(f,m,A)!==-1},a.prototype.indexOf=function(f,m,A){return $(this,f,m,A,!0)},a.prototype.lastIndexOf=function(f,m,A){return $(this,f,m,A,!1)};function S(v,f,m,A){m=Number(m)||0;const I=v.length-m;A?(A=Number(A),A>I&&(A=I)):A=I;const B=f.length;A>B/2&&(A=B/2);let j;for(j=0;j<A;++j){const ve=parseInt(f.substr(j*2,2),16);if(se(ve))return j;v[m+j]=ve}return j}function U(v,f,m,A){return V(X(f,v.length-m),v,m,A)}function D(v,f,m,A){return V(le(f),v,m,A)}function R(v,f,m,A){return V(te(f),v,m,A)}function L(v,f,m,A){return V(re(f,v.length-m),v,m,A)}a.prototype.write=function(f,m,A,I){if(m===void 0)I="utf8",A=this.length,m=0;else if(A===void 0&&typeof m=="string")I=m,A=this.length,m=0;else if(isFinite(m))m=m>>>0,isFinite(A)?(A=A>>>0,I===void 0&&(I="utf8")):(I=A,A=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");const B=this.length-m;if((A===void 0||A>B)&&(A=B),f.length>0&&(A<0||m<0)||m>this.length)throw new RangeError("Attempt to write outside buffer bounds");I||(I="utf8");let j=!1;for(;;)switch(I){case"hex":return S(this,f,m,A);case"utf8":case"utf-8":return U(this,f,m,A);case"ascii":case"latin1":case"binary":return D(this,f,m,A);case"base64":return R(this,f,m,A);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return L(this,f,m,A);default:if(j)throw new TypeError("Unknown encoding: "+I);I=(""+I).toLowerCase(),j=!0}},a.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function H(v,f,m){return f===0&&m===v.length?t.fromByteArray(v):t.fromByteArray(v.slice(f,m))}function Z(v,f,m){m=Math.min(v.length,m);const A=[];let I=f;for(;I<m;){const B=v[I];let j=null,ve=B>239?4:B>223?3:B>191?2:1;if(I+ve<=m){let Ce,Le,et,Ge;switch(ve){case 1:B<128&&(j=B);break;case 2:Ce=v[I+1],(Ce&192)===128&&(Ge=(B&31)<<6|Ce&63,Ge>127&&(j=Ge));break;case 3:Ce=v[I+1],Le=v[I+2],(Ce&192)===128&&(Le&192)===128&&(Ge=(B&15)<<12|(Ce&63)<<6|Le&63,Ge>2047&&(Ge<55296||Ge>57343)&&(j=Ge));break;case 4:Ce=v[I+1],Le=v[I+2],et=v[I+3],(Ce&192)===128&&(Le&192)===128&&(et&192)===128&&(Ge=(B&15)<<18|(Ce&63)<<12|(Le&63)<<6|et&63,Ge>65535&&Ge<1114112&&(j=Ge))}}j===null?(j=65533,ve=1):j>65535&&(j-=65536,A.push(j>>>10&1023|55296),j=56320|j&1023),A.push(j),I+=ve}return J(A)}const z=4096;function J(v){const f=v.length;if(f<=z)return String.fromCharCode.apply(String,v);let m="",A=0;for(;A<f;)m+=String.fromCharCode.apply(String,v.slice(A,A+=z));return m}function q(v,f,m){let A="";m=Math.min(v.length,m);for(let I=f;I<m;++I)A+=String.fromCharCode(v[I]&127);return A}function ne(v,f,m){let A="";m=Math.min(v.length,m);for(let I=f;I<m;++I)A+=String.fromCharCode(v[I]);return A}function fe(v,f,m){const A=v.length;(!f||f<0)&&(f=0),(!m||m<0||m>A)&&(m=A);let I="";for(let B=f;B<m;++B)I+=he[v[B]];return I}function Ae(v,f,m){const A=v.slice(f,m);let I="";for(let B=0;B<A.length-1;B+=2)I+=String.fromCharCode(A[B]+A[B+1]*256);return I}a.prototype.slice=function(f,m){const A=this.length;f=~~f,m=m===void 0?A:~~m,f<0?(f+=A,f<0&&(f=0)):f>A&&(f=A),m<0?(m+=A,m<0&&(m=0)):m>A&&(m=A),m<f&&(m=f);const I=this.subarray(f,m);return Object.setPrototypeOf(I,a.prototype),I};function be(v,f,m){if(v%1!==0||v<0)throw new RangeError("offset is not uint");if(v+f>m)throw new RangeError("Trying to access beyond buffer length")}a.prototype.readUintLE=a.prototype.readUIntLE=function(f,m,A){f=f>>>0,m=m>>>0,A||be(f,m,this.length);let I=this[f],B=1,j=0;for(;++j<m&&(B*=256);)I+=this[f+j]*B;return I},a.prototype.readUintBE=a.prototype.readUIntBE=function(f,m,A){f=f>>>0,m=m>>>0,A||be(f,m,this.length);let I=this[f+--m],B=1;for(;m>0&&(B*=256);)I+=this[f+--m]*B;return I},a.prototype.readUint8=a.prototype.readUInt8=function(f,m){return f=f>>>0,m||be(f,1,this.length),this[f]},a.prototype.readUint16LE=a.prototype.readUInt16LE=function(f,m){return f=f>>>0,m||be(f,2,this.length),this[f]|this[f+1]<<8},a.prototype.readUint16BE=a.prototype.readUInt16BE=function(f,m){return f=f>>>0,m||be(f,2,this.length),this[f]<<8|this[f+1]},a.prototype.readUint32LE=a.prototype.readUInt32LE=function(f,m){return f=f>>>0,m||be(f,4,this.length),(this[f]|this[f+1]<<8|this[f+2]<<16)+this[f+3]*16777216},a.prototype.readUint32BE=a.prototype.readUInt32BE=function(f,m){return f=f>>>0,m||be(f,4,this.length),this[f]*16777216+(this[f+1]<<16|this[f+2]<<8|this[f+3])},a.prototype.readBigUInt64LE=me(function(f){f=f>>>0,O(f,"offset");const m=this[f],A=this[f+7];(m===void 0||A===void 0)&&N(f,this.length-8);const I=m+this[++f]*2**8+this[++f]*2**16+this[++f]*2**24,B=this[++f]+this[++f]*2**8+this[++f]*2**16+A*2**24;return BigInt(I)+(BigInt(B)<<BigInt(32))}),a.prototype.readBigUInt64BE=me(function(f){f=f>>>0,O(f,"offset");const m=this[f],A=this[f+7];(m===void 0||A===void 0)&&N(f,this.length-8);const I=m*2**24+this[++f]*2**16+this[++f]*2**8+this[++f],B=this[++f]*2**24+this[++f]*2**16+this[++f]*2**8+A;return(BigInt(I)<<BigInt(32))+BigInt(B)}),a.prototype.readIntLE=function(f,m,A){f=f>>>0,m=m>>>0,A||be(f,m,this.length);let I=this[f],B=1,j=0;for(;++j<m&&(B*=256);)I+=this[f+j]*B;return B*=128,I>=B&&(I-=Math.pow(2,8*m)),I},a.prototype.readIntBE=function(f,m,A){f=f>>>0,m=m>>>0,A||be(f,m,this.length);let I=m,B=1,j=this[f+--I];for(;I>0&&(B*=256);)j+=this[f+--I]*B;return B*=128,j>=B&&(j-=Math.pow(2,8*m)),j},a.prototype.readInt8=function(f,m){return f=f>>>0,m||be(f,1,this.length),this[f]&128?(255-this[f]+1)*-1:this[f]},a.prototype.readInt16LE=function(f,m){f=f>>>0,m||be(f,2,this.length);const A=this[f]|this[f+1]<<8;return A&32768?A|4294901760:A},a.prototype.readInt16BE=function(f,m){f=f>>>0,m||be(f,2,this.length);const A=this[f+1]|this[f]<<8;return A&32768?A|4294901760:A},a.prototype.readInt32LE=function(f,m){return f=f>>>0,m||be(f,4,this.length),this[f]|this[f+1]<<8|this[f+2]<<16|this[f+3]<<24},a.prototype.readInt32BE=function(f,m){return f=f>>>0,m||be(f,4,this.length),this[f]<<24|this[f+1]<<16|this[f+2]<<8|this[f+3]},a.prototype.readBigInt64LE=me(function(f){f=f>>>0,O(f,"offset");const m=this[f],A=this[f+7];(m===void 0||A===void 0)&&N(f,this.length-8);const I=this[f+4]+this[f+5]*2**8+this[f+6]*2**16+(A<<24);return(BigInt(I)<<BigInt(32))+BigInt(m+this[++f]*2**8+this[++f]*2**16+this[++f]*2**24)}),a.prototype.readBigInt64BE=me(function(f){f=f>>>0,O(f,"offset");const m=this[f],A=this[f+7];(m===void 0||A===void 0)&&N(f,this.length-8);const I=(m<<24)+this[++f]*2**16+this[++f]*2**8+this[++f];return(BigInt(I)<<BigInt(32))+BigInt(this[++f]*2**24+this[++f]*2**16+this[++f]*2**8+A)}),a.prototype.readFloatLE=function(f,m){return f=f>>>0,m||be(f,4,this.length),n.read(this,f,!0,23,4)},a.prototype.readFloatBE=function(f,m){return f=f>>>0,m||be(f,4,this.length),n.read(this,f,!1,23,4)},a.prototype.readDoubleLE=function(f,m){return f=f>>>0,m||be(f,8,this.length),n.read(this,f,!0,52,8)},a.prototype.readDoubleBE=function(f,m){return f=f>>>0,m||be(f,8,this.length),n.read(this,f,!1,52,8)};function pe(v,f,m,A,I,B){if(!a.isBuffer(v))throw new TypeError('"buffer" argument must be a Buffer instance');if(f>I||f<B)throw new RangeError('"value" argument is out of bounds');if(m+A>v.length)throw new RangeError("Index out of range")}a.prototype.writeUintLE=a.prototype.writeUIntLE=function(f,m,A,I){if(f=+f,m=m>>>0,A=A>>>0,!I){const ve=Math.pow(2,8*A)-1;pe(this,f,m,A,ve,0)}let B=1,j=0;for(this[m]=f&255;++j<A&&(B*=256);)this[m+j]=f/B&255;return m+A},a.prototype.writeUintBE=a.prototype.writeUIntBE=function(f,m,A,I){if(f=+f,m=m>>>0,A=A>>>0,!I){const ve=Math.pow(2,8*A)-1;pe(this,f,m,A,ve,0)}let B=A-1,j=1;for(this[m+B]=f&255;--B>=0&&(j*=256);)this[m+B]=f/j&255;return m+A},a.prototype.writeUint8=a.prototype.writeUInt8=function(f,m,A){return f=+f,m=m>>>0,A||pe(this,f,m,1,255,0),this[m]=f&255,m+1},a.prototype.writeUint16LE=a.prototype.writeUInt16LE=function(f,m,A){return f=+f,m=m>>>0,A||pe(this,f,m,2,65535,0),this[m]=f&255,this[m+1]=f>>>8,m+2},a.prototype.writeUint16BE=a.prototype.writeUInt16BE=function(f,m,A){return f=+f,m=m>>>0,A||pe(this,f,m,2,65535,0),this[m]=f>>>8,this[m+1]=f&255,m+2},a.prototype.writeUint32LE=a.prototype.writeUInt32LE=function(f,m,A){return f=+f,m=m>>>0,A||pe(this,f,m,4,4294967295,0),this[m+3]=f>>>24,this[m+2]=f>>>16,this[m+1]=f>>>8,this[m]=f&255,m+4},a.prototype.writeUint32BE=a.prototype.writeUInt32BE=function(f,m,A){return f=+f,m=m>>>0,A||pe(this,f,m,4,4294967295,0),this[m]=f>>>24,this[m+1]=f>>>16,this[m+2]=f>>>8,this[m+3]=f&255,m+4};function ce(v,f,m,A,I){P(f,A,I,v,m,7);let B=Number(f&BigInt(4294967295));v[m++]=B,B=B>>8,v[m++]=B,B=B>>8,v[m++]=B,B=B>>8,v[m++]=B;let j=Number(f>>BigInt(32)&BigInt(4294967295));return v[m++]=j,j=j>>8,v[m++]=j,j=j>>8,v[m++]=j,j=j>>8,v[m++]=j,m}function _e(v,f,m,A,I){P(f,A,I,v,m,7);let B=Number(f&BigInt(4294967295));v[m+7]=B,B=B>>8,v[m+6]=B,B=B>>8,v[m+5]=B,B=B>>8,v[m+4]=B;let j=Number(f>>BigInt(32)&BigInt(4294967295));return v[m+3]=j,j=j>>8,v[m+2]=j,j=j>>8,v[m+1]=j,j=j>>8,v[m]=j,m+8}a.prototype.writeBigUInt64LE=me(function(f,m=0){return ce(this,f,m,BigInt(0),BigInt("0xffffffffffffffff"))}),a.prototype.writeBigUInt64BE=me(function(f,m=0){return _e(this,f,m,BigInt(0),BigInt("0xffffffffffffffff"))}),a.prototype.writeIntLE=function(f,m,A,I){if(f=+f,m=m>>>0,!I){const Ce=Math.pow(2,8*A-1);pe(this,f,m,A,Ce-1,-Ce)}let B=0,j=1,ve=0;for(this[m]=f&255;++B<A&&(j*=256);)f<0&&ve===0&&this[m+B-1]!==0&&(ve=1),this[m+B]=(f/j>>0)-ve&255;return m+A},a.prototype.writeIntBE=function(f,m,A,I){if(f=+f,m=m>>>0,!I){const Ce=Math.pow(2,8*A-1);pe(this,f,m,A,Ce-1,-Ce)}let B=A-1,j=1,ve=0;for(this[m+B]=f&255;--B>=0&&(j*=256);)f<0&&ve===0&&this[m+B+1]!==0&&(ve=1),this[m+B]=(f/j>>0)-ve&255;return m+A},a.prototype.writeInt8=function(f,m,A){return f=+f,m=m>>>0,A||pe(this,f,m,1,127,-128),f<0&&(f=255+f+1),this[m]=f&255,m+1},a.prototype.writeInt16LE=function(f,m,A){return f=+f,m=m>>>0,A||pe(this,f,m,2,32767,-32768),this[m]=f&255,this[m+1]=f>>>8,m+2},a.prototype.writeInt16BE=function(f,m,A){return f=+f,m=m>>>0,A||pe(this,f,m,2,32767,-32768),this[m]=f>>>8,this[m+1]=f&255,m+2},a.prototype.writeInt32LE=function(f,m,A){return f=+f,m=m>>>0,A||pe(this,f,m,4,2147483647,-2147483648),this[m]=f&255,this[m+1]=f>>>8,this[m+2]=f>>>16,this[m+3]=f>>>24,m+4},a.prototype.writeInt32BE=function(f,m,A){return f=+f,m=m>>>0,A||pe(this,f,m,4,2147483647,-2147483648),f<0&&(f=4294967295+f+1),this[m]=f>>>24,this[m+1]=f>>>16,this[m+2]=f>>>8,this[m+3]=f&255,m+4},a.prototype.writeBigInt64LE=me(function(f,m=0){return ce(this,f,m,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))}),a.prototype.writeBigInt64BE=me(function(f,m=0){return _e(this,f,m,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))});function Pe(v,f,m,A,I,B){if(m+A>v.length)throw new RangeError("Index out of range");if(m<0)throw new RangeError("Index out of range")}function Te(v,f,m,A,I){return f=+f,m=m>>>0,I||Pe(v,f,m,4),n.write(v,f,m,A,23,4),m+4}a.prototype.writeFloatLE=function(f,m,A){return Te(this,f,m,!0,A)},a.prototype.writeFloatBE=function(f,m,A){return Te(this,f,m,!1,A)};function F(v,f,m,A,I){return f=+f,m=m>>>0,I||Pe(v,f,m,8),n.write(v,f,m,A,52,8),m+8}a.prototype.writeDoubleLE=function(f,m,A){return F(this,f,m,!0,A)},a.prototype.writeDoubleBE=function(f,m,A){return F(this,f,m,!1,A)},a.prototype.copy=function(f,m,A,I){if(!a.isBuffer(f))throw new TypeError("argument should be a Buffer");if(A||(A=0),!I&&I!==0&&(I=this.length),m>=f.length&&(m=f.length),m||(m=0),I>0&&I<A&&(I=A),I===A||f.length===0||this.length===0)return 0;if(m<0)throw new RangeError("targetStart out of bounds");if(A<0||A>=this.length)throw new RangeError("Index out of range");if(I<0)throw new RangeError("sourceEnd out of bounds");I>this.length&&(I=this.length),f.length-m<I-A&&(I=f.length-m+A);const B=I-A;return this===f&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(m,A,I):Uint8Array.prototype.set.call(f,this.subarray(A,I),m),B},a.prototype.fill=function(f,m,A,I){if(typeof f=="string"){if(typeof m=="string"?(I=m,m=0,A=this.length):typeof A=="string"&&(I=A,A=this.length),I!==void 0&&typeof I!="string")throw new TypeError("encoding must be a string");if(typeof I=="string"&&!a.isEncoding(I))throw new TypeError("Unknown encoding: "+I);if(f.length===1){const j=f.charCodeAt(0);(I==="utf8"&&j<128||I==="latin1")&&(f=j)}}else typeof f=="number"?f=f&255:typeof f=="boolean"&&(f=Number(f));if(m<0||this.length<m||this.length<A)throw new RangeError("Out of range index");if(A<=m)return this;m=m>>>0,A=A===void 0?this.length:A>>>0,f||(f=0);let B;if(typeof f=="number")for(B=m;B<A;++B)this[B]=f;else{const j=a.isBuffer(f)?f:a.from(f,I),ve=j.length;if(ve===0)throw new TypeError('The value "'+f+'" is invalid for argument "value"');for(B=0;B<A-m;++B)this[B+m]=j[B%ve]}return this};const Q={};function Y(v,f,m){Q[v]=class extends m{constructor(){super(),Object.defineProperty(this,"message",{value:f.apply(this,arguments),writable:!0,configurable:!0}),this.name=`${this.name} [${v}]`,this.stack,delete this.name}get code(){return v}set code(I){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value:I,writable:!0})}toString(){return`${this.name} [${v}]: ${this.message}`}}}Y("ERR_BUFFER_OUT_OF_BOUNDS",function(v){return v?`${v} is outside of buffer bounds`:"Attempt to access memory outside buffer bounds"},RangeError),Y("ERR_INVALID_ARG_TYPE",function(v,f){return`The "${v}" argument must be of type number. Received type ${typeof f}`},TypeError),Y("ERR_OUT_OF_RANGE",function(v,f,m){let A=`The value of "${v}" is out of range.`,I=m;return Number.isInteger(m)&&Math.abs(m)>2**32?I=ie(String(m)):typeof m=="bigint"&&(I=String(m),(m>BigInt(2)**BigInt(32)||m<-(BigInt(2)**BigInt(32)))&&(I=ie(I)),I+="n"),A+=` It must be ${f}. Received ${I}`,A},RangeError);function ie(v){let f="",m=v.length;const A=v[0]==="-"?1:0;for(;m>=A+4;m-=3)f=`_${v.slice(m-3,m)}${f}`;return`${v.slice(0,m)}${f}`}function ye(v,f,m){O(f,"offset"),(v[f]===void 0||v[f+m]===void 0)&&N(f,v.length-(m+1))}function P(v,f,m,A,I,B){if(v>m||v<f){const j=typeof f=="bigint"?"n":"";let ve;throw B>3?f===0||f===BigInt(0)?ve=`>= 0${j} and < 2${j} ** ${(B+1)*8}${j}`:ve=`>= -(2${j} ** ${(B+1)*8-1}${j}) and < 2 ** ${(B+1)*8-1}${j}`:ve=`>= ${f}${j} and <= ${m}${j}`,new Q.ERR_OUT_OF_RANGE("value",ve,v)}ye(A,I,B)}function O(v,f){if(typeof v!="number")throw new Q.ERR_INVALID_ARG_TYPE(f,"number",v)}function N(v,f,m){throw Math.floor(v)!==v?(O(v,m),new Q.ERR_OUT_OF_RANGE(m||"offset","an integer",v)):f<0?new Q.ERR_BUFFER_OUT_OF_BOUNDS:new Q.ERR_OUT_OF_RANGE(m||"offset",`>= ${m?1:0} and <= ${f}`,v)}const W=/[^+/0-9A-Za-z-_]/g;function G(v){if(v=v.split("=")[0],v=v.trim().replace(W,""),v.length<2)return"";for(;v.length%4!==0;)v=v+"=";return v}function X(v,f){f=f||1/0;let m;const A=v.length;let I=null;const B=[];for(let j=0;j<A;++j){if(m=v.charCodeAt(j),m>55295&&m<57344){if(!I){if(m>56319){(f-=3)>-1&&B.push(239,191,189);continue}else if(j+1===A){(f-=3)>-1&&B.push(239,191,189);continue}I=m;continue}if(m<56320){(f-=3)>-1&&B.push(239,191,189),I=m;continue}m=(I-55296<<10|m-56320)+65536}else I&&(f-=3)>-1&&B.push(239,191,189);if(I=null,m<128){if((f-=1)<0)break;B.push(m)}else if(m<2048){if((f-=2)<0)break;B.push(m>>6|192,m&63|128)}else if(m<65536){if((f-=3)<0)break;B.push(m>>12|224,m>>6&63|128,m&63|128)}else if(m<1114112){if((f-=4)<0)break;B.push(m>>18|240,m>>12&63|128,m>>6&63|128,m&63|128)}else throw new Error("Invalid code point")}return B}function le(v){const f=[];for(let m=0;m<v.length;++m)f.push(v.charCodeAt(m)&255);return f}function re(v,f){let m,A,I;const B=[];for(let j=0;j<v.length&&!((f-=2)<0);++j)m=v.charCodeAt(j),A=m>>8,I=m%256,B.push(I),B.push(A);return B}function te(v){return t.toByteArray(G(v))}function V(v,f,m,A){let I;for(I=0;I<A&&!(I+m>=f.length||I>=v.length);++I)f[I+m]=v[I];return I}function oe(v,f){return v instanceof f||v!=null&&v.constructor!=null&&v.constructor.name!=null&&v.constructor.name===f.name}function se(v){return v!==v}const he=function(){const v="0123456789abcdef",f=new Array(256);for(let m=0;m<16;++m){const A=m*16;for(let I=0;I<16;++I)f[A+I]=v[m]+v[I]}return f}();function me(v){return typeof BigInt>"u"?xe:v}function xe(){throw new Error("BigInt not supported")}})(Kb);var Cg;typeof window<"u"&&(window.Buffer||(window.Buffer=Kb.Buffer),window.global||(window.global=window),window.process||(window.process={}),(Cg=window.process)!=null&&Cg.env||(window.process={env:{}}));var Ms,oo,YT=class extends wh{constructor({chains:e,options:t}){super({chains:e,options:{reloadOnDisconnect:!1,...t}}),this.id="coinbaseWallet",this.name="Coinbase Wallet",this.ready=!0,Lt(this,Ms,void 0),Lt(this,oo,void 0),this.onAccountsChanged=n=>{n.length===0?this.emit("disconnect"):this.emit("change",{account:En(n[0])})},this.onChainChanged=n=>{const r=al(n),i=this.isChainUnsupported(r);this.emit("change",{chain:{id:r,unsupported:i}})},this.onDisconnect=()=>{this.emit("disconnect")}}async connect({chainId:e}={}){try{const t=await this.getProvider();t.on("accountsChanged",this.onAccountsChanged),t.on("chainChanged",this.onChainChanged),t.on("disconnect",this.onDisconnect),this.emit("message",{type:"connecting"});const n=await t.enable(),r=En(n[0]);let i=await this.getChainId(),o=this.isChainUnsupported(i);return e&&i!==e&&(i=(await this.switchChain(e)).id,o=this.isChainUnsupported(i)),{account:r,chain:{id:i,unsupported:o}}}catch(t){throw/(user closed modal|accounts received is empty)/i.test(t.message)?new Ut(t):t}}async disconnect(){if(!Ve(this,oo))return;const e=await this.getProvider();e.removeListener("accountsChanged",this.onAccountsChanged),e.removeListener("chainChanged",this.onChainChanged),e.removeListener("disconnect",this.onDisconnect),e.disconnect(),e.close()}async getAccount(){const t=await(await this.getProvider()).request({method:"eth_accounts"});return En(t[0])}async getChainId(){const e=await this.getProvider();return al(e.chainId)}async getProvider(){var e;if(!Ve(this,oo)){let t=(await Vt(()=>import("./index-f737520f.js").then(s=>s.i),["assets/index-f737520f.js","assets/events-0145d8fd.js"])).default;typeof t!="function"&&typeof t.default=="function"&&(t=t.default),_a(this,Ms,new t(this.options));const n=(e=Ve(this,Ms).walletExtension)==null?void 0:e.getChainId(),r=this.chains.find(s=>this.options.chainId?s.id===this.options.chainId:s.id===n)||this.chains[0],i=this.options.chainId||(r==null?void 0:r.id),o=this.options.jsonRpcUrl||(r==null?void 0:r.rpcUrls.default.http[0]);_a(this,oo,Ve(this,Ms).makeWeb3Provider(o,i))}return Ve(this,oo)}async getWalletClient({chainId:e}={}){const[t,n]=await Promise.all([this.getProvider(),this.getAccount()]),r=this.chains.find(i=>i.id===e);if(!t)throw new Error("provider is required.");return mh({account:n,chain:r,transport:uh(t)})}async isAuthorized(){try{return!!await this.getAccount()}catch{return!1}}async switchChain(e){var r;const t=await this.getProvider(),n=Ie(e);try{return await t.request({method:"wallet_switchEthereumChain",params:[{chainId:n}]}),this.chains.find(i=>i.id===e)??{id:e,name:`Chain ${n}`,network:`${n}`,nativeCurrency:{name:"Ether",decimals:18,symbol:"ETH"},rpcUrls:{default:{http:[""]},public:{http:[""]}}}}catch(i){const o=this.chains.find(s=>s.id===e);if(!o)throw new Lw({chainId:e,connectorId:this.id});if(i.code===4902)try{return await t.request({method:"wallet_addEthereumChain",params:[{chainId:n,chainName:o.name,nativeCurrency:o.nativeCurrency,rpcUrls:[((r=o.rpcUrls.public)==null?void 0:r.http[0])??""],blockExplorerUrls:this.getBlockExplorerUrls(o)}]}),o}catch(s){throw new Ut(s)}throw new gr(i)}}async watchAsset({address:e,decimals:t=18,image:n,symbol:r}){return(await this.getProvider()).request({method:"wallet_watchAsset",params:{type:"ERC20",options:{address:e,decimals:t,image:n,symbol:r}}})}};Ms=new WeakMap;oo=new WeakMap;var Vh={},ku={},Ne={},Jb={};(function(e){Object.defineProperty(e,"__esModule",{value:!0});function t(a,c){var u=a>>>16&65535,l=a&65535,d=c>>>16&65535,p=c&65535;return l*p+(u*p+l*d<<16>>>0)|0}e.mul=Math.imul||t;function n(a,c){return a+c|0}e.add=n;function r(a,c){return a-c|0}e.sub=r;function i(a,c){return a<<c|a>>>32-c}e.rotl=i;function o(a,c){return a<<32-c|a>>>c}e.rotr=o;function s(a){return typeof a=="number"&&isFinite(a)&&Math.floor(a)===a}e.isInteger=Number.isInteger||s,e.MAX_SAFE_INTEGER=9007199254740991,e.isSafeInteger=function(a){return e.isInteger(a)&&a>=-e.MAX_SAFE_INTEGER&&a<=e.MAX_SAFE_INTEGER}})(Jb);Object.defineProperty(Ne,"__esModule",{value:!0});var Yb=Jb;function XT(e,t){return t===void 0&&(t=0),(e[t+0]<<8|e[t+1])<<16>>16}Ne.readInt16BE=XT;function QT(e,t){return t===void 0&&(t=0),(e[t+0]<<8|e[t+1])>>>0}Ne.readUint16BE=QT;function eS(e,t){return t===void 0&&(t=0),(e[t+1]<<8|e[t])<<16>>16}Ne.readInt16LE=eS;function tS(e,t){return t===void 0&&(t=0),(e[t+1]<<8|e[t])>>>0}Ne.readUint16LE=tS;function Xb(e,t,n){return t===void 0&&(t=new Uint8Array(2)),n===void 0&&(n=0),t[n+0]=e>>>8,t[n+1]=e>>>0,t}Ne.writeUint16BE=Xb;Ne.writeInt16BE=Xb;function Qb(e,t,n){return t===void 0&&(t=new Uint8Array(2)),n===void 0&&(n=0),t[n+0]=e>>>0,t[n+1]=e>>>8,t}Ne.writeUint16LE=Qb;Ne.writeInt16LE=Qb;function Vf(e,t){return t===void 0&&(t=0),e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3]}Ne.readInt32BE=Vf;function Gf(e,t){return t===void 0&&(t=0),(e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3])>>>0}Ne.readUint32BE=Gf;function Kf(e,t){return t===void 0&&(t=0),e[t+3]<<24|e[t+2]<<16|e[t+1]<<8|e[t]}Ne.readInt32LE=Kf;function Zf(e,t){return t===void 0&&(t=0),(e[t+3]<<24|e[t+2]<<16|e[t+1]<<8|e[t])>>>0}Ne.readUint32LE=Zf;function Dl(e,t,n){return t===void 0&&(t=new Uint8Array(4)),n===void 0&&(n=0),t[n+0]=e>>>24,t[n+1]=e>>>16,t[n+2]=e>>>8,t[n+3]=e>>>0,t}Ne.writeUint32BE=Dl;Ne.writeInt32BE=Dl;function Il(e,t,n){return t===void 0&&(t=new Uint8Array(4)),n===void 0&&(n=0),t[n+0]=e>>>0,t[n+1]=e>>>8,t[n+2]=e>>>16,t[n+3]=e>>>24,t}Ne.writeUint32LE=Il;Ne.writeInt32LE=Il;function nS(e,t){t===void 0&&(t=0);var n=Vf(e,t),r=Vf(e,t+4);return n*4294967296+r-(r>>31)*4294967296}Ne.readInt64BE=nS;function rS(e,t){t===void 0&&(t=0);var n=Gf(e,t),r=Gf(e,t+4);return n*4294967296+r}Ne.readUint64BE=rS;function iS(e,t){t===void 0&&(t=0);var n=Kf(e,t),r=Kf(e,t+4);return r*4294967296+n-(n>>31)*4294967296}Ne.readInt64LE=iS;function oS(e,t){t===void 0&&(t=0);var n=Zf(e,t),r=Zf(e,t+4);return r*4294967296+n}Ne.readUint64LE=oS;function ey(e,t,n){return t===void 0&&(t=new Uint8Array(8)),n===void 0&&(n=0),Dl(e/4294967296>>>0,t,n),Dl(e>>>0,t,n+4),t}Ne.writeUint64BE=ey;Ne.writeInt64BE=ey;function ty(e,t,n){return t===void 0&&(t=new Uint8Array(8)),n===void 0&&(n=0),Il(e>>>0,t,n),Il(e/4294967296>>>0,t,n+4),t}Ne.writeUint64LE=ty;Ne.writeInt64LE=ty;function sS(e,t,n){if(n===void 0&&(n=0),e%8!==0)throw new Error("readUintBE supports only bitLengths divisible by 8");if(e/8>t.length-n)throw new Error("readUintBE: array is too short for the given bitLength");for(var r=0,i=1,o=e/8+n-1;o>=n;o--)r+=t[o]*i,i*=256;return r}Ne.readUintBE=sS;function aS(e,t,n){if(n===void 0&&(n=0),e%8!==0)throw new Error("readUintLE supports only bitLengths divisible by 8");if(e/8>t.length-n)throw new Error("readUintLE: array is too short for the given bitLength");for(var r=0,i=1,o=n;o<n+e/8;o++)r+=t[o]*i,i*=256;return r}Ne.readUintLE=aS;function cS(e,t,n,r){if(n===void 0&&(n=new Uint8Array(e/8)),r===void 0&&(r=0),e%8!==0)throw new Error("writeUintBE supports only bitLengths divisible by 8");if(!Yb.isSafeInteger(t))throw new Error("writeUintBE value must be an integer");for(var i=1,o=e/8+r-1;o>=r;o--)n[o]=t/i&255,i*=256;return n}Ne.writeUintBE=cS;function lS(e,t,n,r){if(n===void 0&&(n=new Uint8Array(e/8)),r===void 0&&(r=0),e%8!==0)throw new Error("writeUintLE supports only bitLengths divisible by 8");if(!Yb.isSafeInteger(t))throw new Error("writeUintLE value must be an integer");for(var i=1,o=r;o<r+e/8;o++)n[o]=t/i&255,i*=256;return n}Ne.writeUintLE=lS;function uS(e,t){t===void 0&&(t=0);var n=new DataView(e.buffer,e.byteOffset,e.byteLength);return n.getFloat32(t)}Ne.readFloat32BE=uS;function dS(e,t){t===void 0&&(t=0);var n=new DataView(e.buffer,e.byteOffset,e.byteLength);return n.getFloat32(t,!0)}Ne.readFloat32LE=dS;function fS(e,t){t===void 0&&(t=0);var n=new DataView(e.buffer,e.byteOffset,e.byteLength);return n.getFloat64(t)}Ne.readFloat64BE=fS;function hS(e,t){t===void 0&&(t=0);var n=new DataView(e.buffer,e.byteOffset,e.byteLength);return n.getFloat64(t,!0)}Ne.readFloat64LE=hS;function pS(e,t,n){t===void 0&&(t=new Uint8Array(4)),n===void 0&&(n=0);var r=new DataView(t.buffer,t.byteOffset,t.byteLength);return r.setFloat32(n,e),t}Ne.writeFloat32BE=pS;function mS(e,t,n){t===void 0&&(t=new Uint8Array(4)),n===void 0&&(n=0);var r=new DataView(t.buffer,t.byteOffset,t.byteLength);return r.setFloat32(n,e,!0),t}Ne.writeFloat32LE=mS;function gS(e,t,n){t===void 0&&(t=new Uint8Array(8)),n===void 0&&(n=0);var r=new DataView(t.buffer,t.byteOffset,t.byteLength);return r.setFloat64(n,e),t}Ne.writeFloat64BE=gS;function wS(e,t,n){t===void 0&&(t=new Uint8Array(8)),n===void 0&&(n=0);var r=new DataView(t.buffer,t.byteOffset,t.byteLength);return r.setFloat64(n,e,!0),t}Ne.writeFloat64LE=wS;var Pn={};Object.defineProperty(Pn,"__esModule",{value:!0});function bS(e){for(var t=0;t<e.length;t++)e[t]=0;return e}Pn.wipe=bS;Object.defineProperty(ku,"__esModule",{value:!0});var Et=Ne,Jf=Pn,yS=20;function vS(e,t,n){for(var r=1634760805,i=857760878,o=2036477234,s=1797285236,a=n[3]<<24|n[2]<<16|n[1]<<8|n[0],c=n[7]<<24|n[6]<<16|n[5]<<8|n[4],u=n[11]<<24|n[10]<<16|n[9]<<8|n[8],l=n[15]<<24|n[14]<<16|n[13]<<8|n[12],d=n[19]<<24|n[18]<<16|n[17]<<8|n[16],p=n[23]<<24|n[22]<<16|n[21]<<8|n[20],g=n[27]<<24|n[26]<<16|n[25]<<8|n[24],w=n[31]<<24|n[30]<<16|n[29]<<8|n[28],y=t[3]<<24|t[2]<<16|t[1]<<8|t[0],x=t[7]<<24|t[6]<<16|t[5]<<8|t[4],E=t[11]<<24|t[10]<<16|t[9]<<8|t[8],b=t[15]<<24|t[14]<<16|t[13]<<8|t[12],C=r,_=i,T=o,$=s,h=a,S=c,U=u,D=l,R=d,L=p,H=g,Z=w,z=y,J=x,q=E,ne=b,fe=0;fe<yS;fe+=2)C=C+h|0,z^=C,z=z>>>32-16|z<<16,R=R+z|0,h^=R,h=h>>>32-12|h<<12,_=_+S|0,J^=_,J=J>>>32-16|J<<16,L=L+J|0,S^=L,S=S>>>32-12|S<<12,T=T+U|0,q^=T,q=q>>>32-16|q<<16,H=H+q|0,U^=H,U=U>>>32-12|U<<12,$=$+D|0,ne^=$,ne=ne>>>32-16|ne<<16,Z=Z+ne|0,D^=Z,D=D>>>32-12|D<<12,T=T+U|0,q^=T,q=q>>>32-8|q<<8,H=H+q|0,U^=H,U=U>>>32-7|U<<7,$=$+D|0,ne^=$,ne=ne>>>32-8|ne<<8,Z=Z+ne|0,D^=Z,D=D>>>32-7|D<<7,_=_+S|0,J^=_,J=J>>>32-8|J<<8,L=L+J|0,S^=L,S=S>>>32-7|S<<7,C=C+h|0,z^=C,z=z>>>32-8|z<<8,R=R+z|0,h^=R,h=h>>>32-7|h<<7,C=C+S|0,ne^=C,ne=ne>>>32-16|ne<<16,H=H+ne|0,S^=H,S=S>>>32-12|S<<12,_=_+U|0,z^=_,z=z>>>32-16|z<<16,Z=Z+z|0,U^=Z,U=U>>>32-12|U<<12,T=T+D|0,J^=T,J=J>>>32-16|J<<16,R=R+J|0,D^=R,D=D>>>32-12|D<<12,$=$+h|0,q^=$,q=q>>>32-16|q<<16,L=L+q|0,h^=L,h=h>>>32-12|h<<12,T=T+D|0,J^=T,J=J>>>32-8|J<<8,R=R+J|0,D^=R,D=D>>>32-7|D<<7,$=$+h|0,q^=$,q=q>>>32-8|q<<8,L=L+q|0,h^=L,h=h>>>32-7|h<<7,_=_+U|0,z^=_,z=z>>>32-8|z<<8,Z=Z+z|0,U^=Z,U=U>>>32-7|U<<7,C=C+S|0,ne^=C,ne=ne>>>32-8|ne<<8,H=H+ne|0,S^=H,S=S>>>32-7|S<<7;Et.writeUint32LE(C+r|0,e,0),Et.writeUint32LE(_+i|0,e,4),Et.writeUint32LE(T+o|0,e,8),Et.writeUint32LE($+s|0,e,12),Et.writeUint32LE(h+a|0,e,16),Et.writeUint32LE(S+c|0,e,20),Et.writeUint32LE(U+u|0,e,24),Et.writeUint32LE(D+l|0,e,28),Et.writeUint32LE(R+d|0,e,32),Et.writeUint32LE(L+p|0,e,36),Et.writeUint32LE(H+g|0,e,40),Et.writeUint32LE(Z+w|0,e,44),Et.writeUint32LE(z+y|0,e,48),Et.writeUint32LE(J+x|0,e,52),Et.writeUint32LE(q+E|0,e,56),Et.writeUint32LE(ne+b|0,e,60)}function ny(e,t,n,r,i){if(i===void 0&&(i=0),e.length!==32)throw new Error("ChaCha: key size must be 32 bytes");if(r.length<n.length)throw new Error("ChaCha: destination is shorter than source");var o,s;if(i===0){if(t.length!==8&&t.length!==12)throw new Error("ChaCha nonce must be 8 or 12 bytes");o=new Uint8Array(16),s=o.length-t.length,o.set(t,s)}else{if(t.length!==16)throw new Error("ChaCha nonce with counter must be 16 bytes");o=t,s=i}for(var a=new Uint8Array(64),c=0;c<n.length;c+=64){vS(a,o,e);for(var u=c;u<c+64&&u<n.length;u++)r[u]=n[u]^a[u-c];_S(o,0,s)}return Jf.wipe(a),i===0&&Jf.wipe(o),r}ku.streamXOR=ny;function xS(e,t,n,r){return r===void 0&&(r=0),Jf.wipe(n),ny(e,t,n,n,r)}ku.stream=xS;function _S(e,t,n){for(var r=1;n--;)r=r+(e[t]&255)|0,e[t]=r&255,r>>>=8,t++;if(r>0)throw new Error("ChaCha: counter overflow")}var ry={},si={};Object.defineProperty(si,"__esModule",{value:!0});function CS(e,t,n){return~(e-1)&t|e-1&n}si.select=CS;function ES(e,t){return(e|0)-(t|0)-1>>>31&1}si.lessOrEqual=ES;function iy(e,t){if(e.length!==t.length)return 0;for(var n=0,r=0;r<e.length;r++)n|=e[r]^t[r];return 1&n-1>>>8}si.compare=iy;function TS(e,t){return e.length===0||t.length===0?!1:iy(e,t)!==0}si.equal=TS;(function(e){Object.defineProperty(e,"__esModule",{value:!0});var t=si,n=Pn;e.DIGEST_LENGTH=16;var r=function(){function s(a){this.digestLength=e.DIGEST_LENGTH,this._buffer=new Uint8Array(16),this._r=new Uint16Array(10),this._h=new Uint16Array(10),this._pad=new Uint16Array(8),this._leftover=0,this._fin=0,this._finished=!1;var c=a[0]|a[1]<<8;this._r[0]=c&8191;var u=a[2]|a[3]<<8;this._r[1]=(c>>>13|u<<3)&8191;var l=a[4]|a[5]<<8;this._r[2]=(u>>>10|l<<6)&7939;var d=a[6]|a[7]<<8;this._r[3]=(l>>>7|d<<9)&8191;var p=a[8]|a[9]<<8;this._r[4]=(d>>>4|p<<12)&255,this._r[5]=p>>>1&8190;var g=a[10]|a[11]<<8;this._r[6]=(p>>>14|g<<2)&8191;var w=a[12]|a[13]<<8;this._r[7]=(g>>>11|w<<5)&8065;var y=a[14]|a[15]<<8;this._r[8]=(w>>>8|y<<8)&8191,this._r[9]=y>>>5&127,this._pad[0]=a[16]|a[17]<<8,this._pad[1]=a[18]|a[19]<<8,this._pad[2]=a[20]|a[21]<<8,this._pad[3]=a[22]|a[23]<<8,this._pad[4]=a[24]|a[25]<<8,this._pad[5]=a[26]|a[27]<<8,this._pad[6]=a[28]|a[29]<<8,this._pad[7]=a[30]|a[31]<<8}return s.prototype._blocks=function(a,c,u){for(var l=this._fin?0:2048,d=this._h[0],p=this._h[1],g=this._h[2],w=this._h[3],y=this._h[4],x=this._h[5],E=this._h[6],b=this._h[7],C=this._h[8],_=this._h[9],T=this._r[0],$=this._r[1],h=this._r[2],S=this._r[3],U=this._r[4],D=this._r[5],R=this._r[6],L=this._r[7],H=this._r[8],Z=this._r[9];u>=16;){var z=a[c+0]|a[c+1]<<8;d+=z&8191;var J=a[c+2]|a[c+3]<<8;p+=(z>>>13|J<<3)&8191;var q=a[c+4]|a[c+5]<<8;g+=(J>>>10|q<<6)&8191;var ne=a[c+6]|a[c+7]<<8;w+=(q>>>7|ne<<9)&8191;var fe=a[c+8]|a[c+9]<<8;y+=(ne>>>4|fe<<12)&8191,x+=fe>>>1&8191;var Ae=a[c+10]|a[c+11]<<8;E+=(fe>>>14|Ae<<2)&8191;var be=a[c+12]|a[c+13]<<8;b+=(Ae>>>11|be<<5)&8191;var pe=a[c+14]|a[c+15]<<8;C+=(be>>>8|pe<<8)&8191,_+=pe>>>5|l;var ce=0,_e=ce;_e+=d*T,_e+=p*(5*Z),_e+=g*(5*H),_e+=w*(5*L),_e+=y*(5*R),ce=_e>>>13,_e&=8191,_e+=x*(5*D),_e+=E*(5*U),_e+=b*(5*S),_e+=C*(5*h),_e+=_*(5*$),ce+=_e>>>13,_e&=8191;var Pe=ce;Pe+=d*$,Pe+=p*T,Pe+=g*(5*Z),Pe+=w*(5*H),Pe+=y*(5*L),ce=Pe>>>13,Pe&=8191,Pe+=x*(5*R),Pe+=E*(5*D),Pe+=b*(5*U),Pe+=C*(5*S),Pe+=_*(5*h),ce+=Pe>>>13,Pe&=8191;var Te=ce;Te+=d*h,Te+=p*$,Te+=g*T,Te+=w*(5*Z),Te+=y*(5*H),ce=Te>>>13,Te&=8191,Te+=x*(5*L),Te+=E*(5*R),Te+=b*(5*D),Te+=C*(5*U),Te+=_*(5*S),ce+=Te>>>13,Te&=8191;var F=ce;F+=d*S,F+=p*h,F+=g*$,F+=w*T,F+=y*(5*Z),ce=F>>>13,F&=8191,F+=x*(5*H),F+=E*(5*L),F+=b*(5*R),F+=C*(5*D),F+=_*(5*U),ce+=F>>>13,F&=8191;var Q=ce;Q+=d*U,Q+=p*S,Q+=g*h,Q+=w*$,Q+=y*T,ce=Q>>>13,Q&=8191,Q+=x*(5*Z),Q+=E*(5*H),Q+=b*(5*L),Q+=C*(5*R),Q+=_*(5*D),ce+=Q>>>13,Q&=8191;var Y=ce;Y+=d*D,Y+=p*U,Y+=g*S,Y+=w*h,Y+=y*$,ce=Y>>>13,Y&=8191,Y+=x*T,Y+=E*(5*Z),Y+=b*(5*H),Y+=C*(5*L),Y+=_*(5*R),ce+=Y>>>13,Y&=8191;var ie=ce;ie+=d*R,ie+=p*D,ie+=g*U,ie+=w*S,ie+=y*h,ce=ie>>>13,ie&=8191,ie+=x*$,ie+=E*T,ie+=b*(5*Z),ie+=C*(5*H),ie+=_*(5*L),ce+=ie>>>13,ie&=8191;var ye=ce;ye+=d*L,ye+=p*R,ye+=g*D,ye+=w*U,ye+=y*S,ce=ye>>>13,ye&=8191,ye+=x*h,ye+=E*$,ye+=b*T,ye+=C*(5*Z),ye+=_*(5*H),ce+=ye>>>13,ye&=8191;var P=ce;P+=d*H,P+=p*L,P+=g*R,P+=w*D,P+=y*U,ce=P>>>13,P&=8191,P+=x*S,P+=E*h,P+=b*$,P+=C*T,P+=_*(5*Z),ce+=P>>>13,P&=8191;var O=ce;O+=d*Z,O+=p*H,O+=g*L,O+=w*R,O+=y*D,ce=O>>>13,O&=8191,O+=x*U,O+=E*S,O+=b*h,O+=C*$,O+=_*T,ce+=O>>>13,O&=8191,ce=(ce<<2)+ce|0,ce=ce+_e|0,_e=ce&8191,ce=ce>>>13,Pe+=ce,d=_e,p=Pe,g=Te,w=F,y=Q,x=Y,E=ie,b=ye,C=P,_=O,c+=16,u-=16}this._h[0]=d,this._h[1]=p,this._h[2]=g,this._h[3]=w,this._h[4]=y,this._h[5]=x,this._h[6]=E,this._h[7]=b,this._h[8]=C,this._h[9]=_},s.prototype.finish=function(a,c){c===void 0&&(c=0);var u=new Uint16Array(10),l,d,p,g;if(this._leftover){for(g=this._leftover,this._buffer[g++]=1;g<16;g++)this._buffer[g]=0;this._fin=1,this._blocks(this._buffer,0,16)}for(l=this._h[1]>>>13,this._h[1]&=8191,g=2;g<10;g++)this._h[g]+=l,l=this._h[g]>>>13,this._h[g]&=8191;for(this._h[0]+=l*5,l=this._h[0]>>>13,this._h[0]&=8191,this._h[1]+=l,l=this._h[1]>>>13,this._h[1]&=8191,this._h[2]+=l,u[0]=this._h[0]+5,l=u[0]>>>13,u[0]&=8191,g=1;g<10;g++)u[g]=this._h[g]+l,l=u[g]>>>13,u[g]&=8191;for(u[9]-=8192,d=(l^1)-1,g=0;g<10;g++)u[g]&=d;for(d=~d,g=0;g<10;g++)this._h[g]=this._h[g]&d|u[g];for(this._h[0]=(this._h[0]|this._h[1]<<13)&65535,this._h[1]=(this._h[1]>>>3|this._h[2]<<10)&65535,this._h[2]=(this._h[2]>>>6|this._h[3]<<7)&65535,this._h[3]=(this._h[3]>>>9|this._h[4]<<4)&65535,this._h[4]=(this._h[4]>>>12|this._h[5]<<1|this._h[6]<<14)&65535,this._h[5]=(this._h[6]>>>2|this._h[7]<<11)&65535,this._h[6]=(this._h[7]>>>5|this._h[8]<<8)&65535,this._h[7]=(this._h[8]>>>8|this._h[9]<<5)&65535,p=this._h[0]+this._pad[0],this._h[0]=p&65535,g=1;g<8;g++)p=(this._h[g]+this._pad[g]|0)+(p>>>16)|0,this._h[g]=p&65535;return a[c+0]=this._h[0]>>>0,a[c+1]=this._h[0]>>>8,a[c+2]=this._h[1]>>>0,a[c+3]=this._h[1]>>>8,a[c+4]=this._h[2]>>>0,a[c+5]=this._h[2]>>>8,a[c+6]=this._h[3]>>>0,a[c+7]=this._h[3]>>>8,a[c+8]=this._h[4]>>>0,a[c+9]=this._h[4]>>>8,a[c+10]=this._h[5]>>>0,a[c+11]=this._h[5]>>>8,a[c+12]=this._h[6]>>>0,a[c+13]=this._h[6]>>>8,a[c+14]=this._h[7]>>>0,a[c+15]=this._h[7]>>>8,this._finished=!0,this},s.prototype.update=function(a){var c=0,u=a.length,l;if(this._leftover){l=16-this._leftover,l>u&&(l=u);for(var d=0;d<l;d++)this._buffer[this._leftover+d]=a[c+d];if(u-=l,c+=l,this._leftover+=l,this._leftover<16)return this;this._blocks(this._buffer,0,16),this._leftover=0}if(u>=16&&(l=u-u%16,this._blocks(a,c,l),c+=l,u-=l),u){for(var d=0;d<u;d++)this._buffer[this._leftover+d]=a[c+d];this._leftover+=u}return this},s.prototype.digest=function(){if(this._finished)throw new Error("Poly1305 was finished");var a=new Uint8Array(16);return this.finish(a),a},s.prototype.clean=function(){return n.wipe(this._buffer),n.wipe(this._r),n.wipe(this._h),n.wipe(this._pad),this._leftover=0,this._fin=0,this._finished=!0,this},s}();e.Poly1305=r;function i(s,a){var c=new r(s);c.update(a);var u=c.digest();return c.clean(),u}e.oneTimeAuth=i;function o(s,a){return s.length!==e.DIGEST_LENGTH||a.length!==e.DIGEST_LENGTH?!1:t.equal(s,a)}e.equal=o})(ry);(function(e){Object.defineProperty(e,"__esModule",{value:!0});var t=ku,n=ry,r=Pn,i=Ne,o=si;e.KEY_LENGTH=32,e.NONCE_LENGTH=12,e.TAG_LENGTH=16;var s=new Uint8Array(16),a=function(){function c(u){if(this.nonceLength=e.NONCE_LENGTH,this.tagLength=e.TAG_LENGTH,u.length!==e.KEY_LENGTH)throw new Error("ChaCha20Poly1305 needs 32-byte key");this._key=new Uint8Array(u)}return c.prototype.seal=function(u,l,d,p){if(u.length>16)throw new Error("ChaCha20Poly1305: incorrect nonce length");var g=new Uint8Array(16);g.set(u,g.length-u.length);var w=new Uint8Array(32);t.stream(this._key,g,w,4);var y=l.length+this.tagLength,x;if(p){if(p.length!==y)throw new Error("ChaCha20Poly1305: incorrect destination length");x=p}else x=new Uint8Array(y);return t.streamXOR(this._key,g,l,x,4),this._authenticate(x.subarray(x.length-this.tagLength,x.length),w,x.subarray(0,x.length-this.tagLength),d),r.wipe(g),x},c.prototype.open=function(u,l,d,p){if(u.length>16)throw new Error("ChaCha20Poly1305: incorrect nonce length");if(l.length<this.tagLength)return null;var g=new Uint8Array(16);g.set(u,g.length-u.length);var w=new Uint8Array(32);t.stream(this._key,g,w,4);var y=new Uint8Array(this.tagLength);if(this._authenticate(y,w,l.subarray(0,l.length-this.tagLength),d),!o.equal(y,l.subarray(l.length-this.tagLength,l.length)))return null;var x=l.length-this.tagLength,E;if(p){if(p.length!==x)throw new Error("ChaCha20Poly1305: incorrect destination length");E=p}else E=new Uint8Array(x);return t.streamXOR(this._key,g,l.subarray(0,l.length-this.tagLength),E,4),r.wipe(g),E},c.prototype.clean=function(){return r.wipe(this._key),this},c.prototype._authenticate=function(u,l,d,p){var g=new n.Poly1305(l);p&&(g.update(p),p.length%16>0&&g.update(s.subarray(p.length%16))),g.update(d),d.length%16>0&&g.update(s.subarray(d.length%16));var w=new Uint8Array(8);p&&i.writeUint64LE(p.length,w),g.update(w),i.writeUint64LE(d.length,w),g.update(w);for(var y=g.digest(),x=0;x<y.length;x++)u[x]=y[x];g.clean(),r.wipe(y),r.wipe(w)},c}();e.ChaCha20Poly1305=a})(Vh);var oy={},dc={},Gh={};Object.defineProperty(Gh,"__esModule",{value:!0});function SS(e){return typeof e.saveState<"u"&&typeof e.restoreState<"u"&&typeof e.cleanSavedState<"u"}Gh.isSerializableHash=SS;Object.defineProperty(dc,"__esModule",{value:!0});var kn=Gh,AS=si,$S=Pn,sy=function(){function e(t,n){this._finished=!1,this._inner=new t,this._outer=new t,this.blockSize=this._outer.blockSize,this.digestLength=this._outer.digestLength;var r=new Uint8Array(this.blockSize);n.length>this.blockSize?this._inner.update(n).finish(r).clean():r.set(n);for(var i=0;i<r.length;i++)r[i]^=54;this._inner.update(r);for(var i=0;i<r.length;i++)r[i]^=106;this._outer.update(r),kn.isSerializableHash(this._inner)&&kn.isSerializableHash(this._outer)&&(this._innerKeyedState=this._inner.saveState(),this._outerKeyedState=this._outer.saveState()),$S.wipe(r)}return e.prototype.reset=function(){if(!kn.isSerializableHash(this._inner)||!kn.isSerializableHash(this._outer))throw new Error("hmac: can't reset() because hash doesn't implement restoreState()");return this._inner.restoreState(this._innerKeyedState),this._outer.restoreState(this._outerKeyedState),this._finished=!1,this},e.prototype.clean=function(){kn.isSerializableHash(this._inner)&&this._inner.cleanSavedState(this._innerKeyedState),kn.isSerializableHash(this._outer)&&this._outer.cleanSavedState(this._outerKeyedState),this._inner.clean(),this._outer.clean()},e.prototype.update=function(t){return this._inner.update(t),this},e.prototype.finish=function(t){return this._finished?(this._outer.finish(t),this):(this._inner.finish(t),this._outer.update(t.subarray(0,this.digestLength)).finish(t),this._finished=!0,this)},e.prototype.digest=function(){var t=new Uint8Array(this.digestLength);return this.finish(t),t},e.prototype.saveState=function(){if(!kn.isSerializableHash(this._inner))throw new Error("hmac: can't saveState() because hash doesn't implement it");return this._inner.saveState()},e.prototype.restoreState=function(t){if(!kn.isSerializableHash(this._inner)||!kn.isSerializableHash(this._outer))throw new Error("hmac: can't restoreState() because hash doesn't implement it");return this._inner.restoreState(t),this._outer.restoreState(this._outerKeyedState),this._finished=!1,this},e.prototype.cleanSavedState=function(t){if(!kn.isSerializableHash(this._inner))throw new Error("hmac: can't cleanSavedState() because hash doesn't implement it");this._inner.cleanSavedState(t)},e}();dc.HMAC=sy;function PS(e,t,n){var r=new sy(e,t);r.update(n);var i=r.digest();return r.clean(),i}dc.hmac=PS;dc.equal=AS.equal;Object.defineProperty(oy,"__esModule",{value:!0});var gm=dc,wm=Pn,OS=function(){function e(t,n,r,i){r===void 0&&(r=new Uint8Array(0)),this._counter=new Uint8Array(1),this._hash=t,this._info=i;var o=gm.hmac(this._hash,r,n);this._hmac=new gm.HMAC(t,o),this._buffer=new Uint8Array(this._hmac.digestLength),this._bufpos=this._buffer.length}return e.prototype._fillBuffer=function(){this._counter[0]++;var t=this._counter[0];if(t===0)throw new Error("hkdf: cannot expand more");this._hmac.reset(),t>1&&this._hmac.update(this._buffer),this._info&&this._hmac.update(this._info),this._hmac.update(this._counter),this._hmac.finish(this._buffer),this._bufpos=0},e.prototype.expand=function(t){for(var n=new Uint8Array(t),r=0;r<n.length;r++)this._bufpos===this._buffer.length&&this._fillBuffer(),n[r]=this._buffer[this._bufpos++];return n},e.prototype.clean=function(){this._hmac.clean(),wm.wipe(this._buffer),wm.wipe(this._counter),this._bufpos=0},e}(),DS=oy.HKDF=OS,Mu={},Bu={},Lu={};Object.defineProperty(Lu,"__esModule",{value:!0});Lu.BrowserRandomSource=void 0;const bm=65536;class IS{constructor(){this.isAvailable=!1,this.isInstantiated=!1;const t=typeof self<"u"?self.crypto||self.msCrypto:null;t&&t.getRandomValues!==void 0&&(this._crypto=t,this.isAvailable=!0,this.isInstantiated=!0)}randomBytes(t){if(!this.isAvailable||!this._crypto)throw new Error("Browser random byte generator is not available.");const n=new Uint8Array(t);for(let r=0;r<n.length;r+=bm)this._crypto.getRandomValues(n.subarray(r,r+Math.min(n.length-r,bm)));return n}}Lu.BrowserRandomSource=IS;function RS(e){throw new Error('Could not dynamically require "'+e+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var Uu={};const NS={},kS=Object.freeze(Object.defineProperty({__proto__:null,default:NS},Symbol.toStringTag,{value:"Module"})),MS=Ix(kS);Object.defineProperty(Uu,"__esModule",{value:!0});Uu.NodeRandomSource=void 0;const BS=Pn;class LS{constructor(){if(this.isAvailable=!1,this.isInstantiated=!1,typeof RS<"u"){const t=MS;t&&t.randomBytes&&(this._crypto=t,this.isAvailable=!0,this.isInstantiated=!0)}}randomBytes(t){if(!this.isAvailable||!this._crypto)throw new Error("Node.js random byte generator is not available.");let n=this._crypto.randomBytes(t);if(n.length!==t)throw new Error("NodeRandomSource: got fewer bytes than requested");const r=new Uint8Array(t);for(let i=0;i<r.length;i++)r[i]=n[i];return(0,BS.wipe)(n),r}}Uu.NodeRandomSource=LS;Object.defineProperty(Bu,"__esModule",{value:!0});Bu.SystemRandomSource=void 0;const US=Lu,FS=Uu;class jS{constructor(){if(this.isAvailable=!1,this.name="",this._source=new US.BrowserRandomSource,this._source.isAvailable){this.isAvailable=!0,this.name="Browser";return}if(this._source=new FS.NodeRandomSource,this._source.isAvailable){this.isAvailable=!0,this.name="Node";return}}randomBytes(t){if(!this.isAvailable)throw new Error("System random byte generator is not available.");return this._source.randomBytes(t)}}Bu.SystemRandomSource=jS;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.randomStringForEntropy=e.randomString=e.randomUint32=e.randomBytes=e.defaultRandomSource=void 0;const t=Bu,n=Ne,r=Pn;e.defaultRandomSource=new t.SystemRandomSource;function i(u,l=e.defaultRandomSource){return l.randomBytes(u)}e.randomBytes=i;function o(u=e.defaultRandomSource){const l=i(4,u),d=(0,n.readUint32LE)(l);return(0,r.wipe)(l),d}e.randomUint32=o;const s="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";function a(u,l=s,d=e.defaultRandomSource){if(l.length<2)throw new Error("randomString charset is too short");if(l.length>256)throw new Error("randomString charset is too long");let p="";const g=l.length,w=256-256%g;for(;u>0;){const y=i(Math.ceil(u*256/w),d);for(let x=0;x<y.length&&u>0;x++){const E=y[x];E<w&&(p+=l.charAt(E%g),u--)}(0,r.wipe)(y)}return p}e.randomString=a;function c(u,l=s,d=e.defaultRandomSource){const p=Math.ceil(u/(Math.log(l.length)/Math.LN2));return a(p,l,d)}e.randomStringForEntropy=c})(Mu);var Fu={};(function(e){Object.defineProperty(e,"__esModule",{value:!0});var t=Ne,n=Pn;e.DIGEST_LENGTH=32,e.BLOCK_SIZE=64;var r=function(){function a(){this.digestLength=e.DIGEST_LENGTH,this.blockSize=e.BLOCK_SIZE,this._state=new Int32Array(8),this._temp=new Int32Array(64),this._buffer=new Uint8Array(128),this._bufferLength=0,this._bytesHashed=0,this._finished=!1,this.reset()}return a.prototype._initState=function(){this._state[0]=1779033703,this._state[1]=3144134277,this._state[2]=1013904242,this._state[3]=2773480762,this._state[4]=1359893119,this._state[5]=2600822924,this._state[6]=528734635,this._state[7]=1541459225},a.prototype.reset=function(){return this._initState(),this._bufferLength=0,this._bytesHashed=0,this._finished=!1,this},a.prototype.clean=function(){n.wipe(this._buffer),n.wipe(this._temp),this.reset()},a.prototype.update=function(c,u){if(u===void 0&&(u=c.length),this._finished)throw new Error("SHA256: can't update because hash was finished.");var l=0;if(this._bytesHashed+=u,this._bufferLength>0){for(;this._bufferLength<this.blockSize&&u>0;)this._buffer[this._bufferLength++]=c[l++],u--;this._bufferLength===this.blockSize&&(o(this._temp,this._state,this._buffer,0,this.blockSize),this._bufferLength=0)}for(u>=this.blockSize&&(l=o(this._temp,this._state,c,l,u),u%=this.blockSize);u>0;)this._buffer[this._bufferLength++]=c[l++],u--;return this},a.prototype.finish=function(c){if(!this._finished){var u=this._bytesHashed,l=this._bufferLength,d=u/536870912|0,p=u<<3,g=u%64<56?64:128;this._buffer[l]=128;for(var w=l+1;w<g-8;w++)this._buffer[w]=0;t.writeUint32BE(d,this._buffer,g-8),t.writeUint32BE(p,this._buffer,g-4),o(this._temp,this._state,this._buffer,0,g),this._finished=!0}for(var w=0;w<this.digestLength/4;w++)t.writeUint32BE(this._state[w],c,w*4);return this},a.prototype.digest=function(){var c=new Uint8Array(this.digestLength);return this.finish(c),c},a.prototype.saveState=function(){if(this._finished)throw new Error("SHA256: cannot save finished state");return{state:new Int32Array(this._state),buffer:this._bufferLength>0?new Uint8Array(this._buffer):void 0,bufferLength:this._bufferLength,bytesHashed:this._bytesHashed}},a.prototype.restoreState=function(c){return this._state.set(c.state),this._bufferLength=c.bufferLength,c.buffer&&this._buffer.set(c.buffer),this._bytesHashed=c.bytesHashed,this._finished=!1,this},a.prototype.cleanSavedState=function(c){n.wipe(c.state),c.buffer&&n.wipe(c.buffer),c.bufferLength=0,c.bytesHashed=0},a}();e.SHA256=r;var i=new Int32Array([1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298]);function o(a,c,u,l,d){for(;d>=64;){for(var p=c[0],g=c[1],w=c[2],y=c[3],x=c[4],E=c[5],b=c[6],C=c[7],_=0;_<16;_++){var T=l+_*4;a[_]=t.readUint32BE(u,T)}for(var _=16;_<64;_++){var $=a[_-2],h=($>>>17|$<<32-17)^($>>>19|$<<32-19)^$>>>10;$=a[_-15];var S=($>>>7|$<<32-7)^($>>>18|$<<32-18)^$>>>3;a[_]=(h+a[_-7]|0)+(S+a[_-16]|0)}for(var _=0;_<64;_++){var h=(((x>>>6|x<<26)^(x>>>11|x<<21)^(x>>>25|x<<7))+(x&E^~x&b)|0)+(C+(i[_]+a[_]|0)|0)|0,S=((p>>>2|p<<32-2)^(p>>>13|p<<32-13)^(p>>>22|p<<32-22))+(p&g^p&w^g&w)|0;C=b,b=E,E=x,x=y+h|0,y=w,w=g,g=p,p=h+S|0}c[0]+=p,c[1]+=g,c[2]+=w,c[3]+=y,c[4]+=x,c[5]+=E,c[6]+=b,c[7]+=C,l+=64,d-=64}return l}function s(a){var c=new r;c.update(a);var u=c.digest();return c.clean(),u}e.hash=s})(Fu);var Kh={};(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.sharedKey=e.generateKeyPair=e.generateKeyPairFromSeed=e.scalarMultBase=e.scalarMult=e.SHARED_KEY_LENGTH=e.SECRET_KEY_LENGTH=e.PUBLIC_KEY_LENGTH=void 0;const t=Mu,n=Pn;e.PUBLIC_KEY_LENGTH=32,e.SECRET_KEY_LENGTH=32,e.SHARED_KEY_LENGTH=32;function r(_){const T=new Float64Array(16);if(_)for(let $=0;$<_.length;$++)T[$]=_[$];return T}const i=new Uint8Array(32);i[0]=9;const o=r([56129,1]);function s(_){let T=1;for(let $=0;$<16;$++){let h=_[$]+T+65535;T=Math.floor(h/65536),_[$]=h-T*65536}_[0]+=T-1+37*(T-1)}function a(_,T,$){const h=~($-1);for(let S=0;S<16;S++){const U=h&(_[S]^T[S]);_[S]^=U,T[S]^=U}}function c(_,T){const $=r(),h=r();for(let S=0;S<16;S++)h[S]=T[S];s(h),s(h),s(h);for(let S=0;S<2;S++){$[0]=h[0]-65517;for(let D=1;D<15;D++)$[D]=h[D]-65535-($[D-1]>>16&1),$[D-1]&=65535;$[15]=h[15]-32767-($[14]>>16&1);const U=$[15]>>16&1;$[14]&=65535,a(h,$,1-U)}for(let S=0;S<16;S++)_[2*S]=h[S]&255,_[2*S+1]=h[S]>>8}function u(_,T){for(let $=0;$<16;$++)_[$]=T[2*$]+(T[2*$+1]<<8);_[15]&=32767}function l(_,T,$){for(let h=0;h<16;h++)_[h]=T[h]+$[h]}function d(_,T,$){for(let h=0;h<16;h++)_[h]=T[h]-$[h]}function p(_,T,$){let h,S,U=0,D=0,R=0,L=0,H=0,Z=0,z=0,J=0,q=0,ne=0,fe=0,Ae=0,be=0,pe=0,ce=0,_e=0,Pe=0,Te=0,F=0,Q=0,Y=0,ie=0,ye=0,P=0,O=0,N=0,W=0,G=0,X=0,le=0,re=0,te=$[0],V=$[1],oe=$[2],se=$[3],he=$[4],me=$[5],xe=$[6],v=$[7],f=$[8],m=$[9],A=$[10],I=$[11],B=$[12],j=$[13],ve=$[14],Ce=$[15];h=T[0],U+=h*te,D+=h*V,R+=h*oe,L+=h*se,H+=h*he,Z+=h*me,z+=h*xe,J+=h*v,q+=h*f,ne+=h*m,fe+=h*A,Ae+=h*I,be+=h*B,pe+=h*j,ce+=h*ve,_e+=h*Ce,h=T[1],D+=h*te,R+=h*V,L+=h*oe,H+=h*se,Z+=h*he,z+=h*me,J+=h*xe,q+=h*v,ne+=h*f,fe+=h*m,Ae+=h*A,be+=h*I,pe+=h*B,ce+=h*j,_e+=h*ve,Pe+=h*Ce,h=T[2],R+=h*te,L+=h*V,H+=h*oe,Z+=h*se,z+=h*he,J+=h*me,q+=h*xe,ne+=h*v,fe+=h*f,Ae+=h*m,be+=h*A,pe+=h*I,ce+=h*B,_e+=h*j,Pe+=h*ve,Te+=h*Ce,h=T[3],L+=h*te,H+=h*V,Z+=h*oe,z+=h*se,J+=h*he,q+=h*me,ne+=h*xe,fe+=h*v,Ae+=h*f,be+=h*m,pe+=h*A,ce+=h*I,_e+=h*B,Pe+=h*j,Te+=h*ve,F+=h*Ce,h=T[4],H+=h*te,Z+=h*V,z+=h*oe,J+=h*se,q+=h*he,ne+=h*me,fe+=h*xe,Ae+=h*v,be+=h*f,pe+=h*m,ce+=h*A,_e+=h*I,Pe+=h*B,Te+=h*j,F+=h*ve,Q+=h*Ce,h=T[5],Z+=h*te,z+=h*V,J+=h*oe,q+=h*se,ne+=h*he,fe+=h*me,Ae+=h*xe,be+=h*v,pe+=h*f,ce+=h*m,_e+=h*A,Pe+=h*I,Te+=h*B,F+=h*j,Q+=h*ve,Y+=h*Ce,h=T[6],z+=h*te,J+=h*V,q+=h*oe,ne+=h*se,fe+=h*he,Ae+=h*me,be+=h*xe,pe+=h*v,ce+=h*f,_e+=h*m,Pe+=h*A,Te+=h*I,F+=h*B,Q+=h*j,Y+=h*ve,ie+=h*Ce,h=T[7],J+=h*te,q+=h*V,ne+=h*oe,fe+=h*se,Ae+=h*he,be+=h*me,pe+=h*xe,ce+=h*v,_e+=h*f,Pe+=h*m,Te+=h*A,F+=h*I,Q+=h*B,Y+=h*j,ie+=h*ve,ye+=h*Ce,h=T[8],q+=h*te,ne+=h*V,fe+=h*oe,Ae+=h*se,be+=h*he,pe+=h*me,ce+=h*xe,_e+=h*v,Pe+=h*f,Te+=h*m,F+=h*A,Q+=h*I,Y+=h*B,ie+=h*j,ye+=h*ve,P+=h*Ce,h=T[9],ne+=h*te,fe+=h*V,Ae+=h*oe,be+=h*se,pe+=h*he,ce+=h*me,_e+=h*xe,Pe+=h*v,Te+=h*f,F+=h*m,Q+=h*A,Y+=h*I,ie+=h*B,ye+=h*j,P+=h*ve,O+=h*Ce,h=T[10],fe+=h*te,Ae+=h*V,be+=h*oe,pe+=h*se,ce+=h*he,_e+=h*me,Pe+=h*xe,Te+=h*v,F+=h*f,Q+=h*m,Y+=h*A,ie+=h*I,ye+=h*B,P+=h*j,O+=h*ve,N+=h*Ce,h=T[11],Ae+=h*te,be+=h*V,pe+=h*oe,ce+=h*se,_e+=h*he,Pe+=h*me,Te+=h*xe,F+=h*v,Q+=h*f,Y+=h*m,ie+=h*A,ye+=h*I,P+=h*B,O+=h*j,N+=h*ve,W+=h*Ce,h=T[12],be+=h*te,pe+=h*V,ce+=h*oe,_e+=h*se,Pe+=h*he,Te+=h*me,F+=h*xe,Q+=h*v,Y+=h*f,ie+=h*m,ye+=h*A,P+=h*I,O+=h*B,N+=h*j,W+=h*ve,G+=h*Ce,h=T[13],pe+=h*te,ce+=h*V,_e+=h*oe,Pe+=h*se,Te+=h*he,F+=h*me,Q+=h*xe,Y+=h*v,ie+=h*f,ye+=h*m,P+=h*A,O+=h*I,N+=h*B,W+=h*j,G+=h*ve,X+=h*Ce,h=T[14],ce+=h*te,_e+=h*V,Pe+=h*oe,Te+=h*se,F+=h*he,Q+=h*me,Y+=h*xe,ie+=h*v,ye+=h*f,P+=h*m,O+=h*A,N+=h*I,W+=h*B,G+=h*j,X+=h*ve,le+=h*Ce,h=T[15],_e+=h*te,Pe+=h*V,Te+=h*oe,F+=h*se,Q+=h*he,Y+=h*me,ie+=h*xe,ye+=h*v,P+=h*f,O+=h*m,N+=h*A,W+=h*I,G+=h*B,X+=h*j,le+=h*ve,re+=h*Ce,U+=38*Pe,D+=38*Te,R+=38*F,L+=38*Q,H+=38*Y,Z+=38*ie,z+=38*ye,J+=38*P,q+=38*O,ne+=38*N,fe+=38*W,Ae+=38*G,be+=38*X,pe+=38*le,ce+=38*re,S=1,h=U+S+65535,S=Math.floor(h/65536),U=h-S*65536,h=D+S+65535,S=Math.floor(h/65536),D=h-S*65536,h=R+S+65535,S=Math.floor(h/65536),R=h-S*65536,h=L+S+65535,S=Math.floor(h/65536),L=h-S*65536,h=H+S+65535,S=Math.floor(h/65536),H=h-S*65536,h=Z+S+65535,S=Math.floor(h/65536),Z=h-S*65536,h=z+S+65535,S=Math.floor(h/65536),z=h-S*65536,h=J+S+65535,S=Math.floor(h/65536),J=h-S*65536,h=q+S+65535,S=Math.floor(h/65536),q=h-S*65536,h=ne+S+65535,S=Math.floor(h/65536),ne=h-S*65536,h=fe+S+65535,S=Math.floor(h/65536),fe=h-S*65536,h=Ae+S+65535,S=Math.floor(h/65536),Ae=h-S*65536,h=be+S+65535,S=Math.floor(h/65536),be=h-S*65536,h=pe+S+65535,S=Math.floor(h/65536),pe=h-S*65536,h=ce+S+65535,S=Math.floor(h/65536),ce=h-S*65536,h=_e+S+65535,S=Math.floor(h/65536),_e=h-S*65536,U+=S-1+37*(S-1),S=1,h=U+S+65535,S=Math.floor(h/65536),U=h-S*65536,h=D+S+65535,S=Math.floor(h/65536),D=h-S*65536,h=R+S+65535,S=Math.floor(h/65536),R=h-S*65536,h=L+S+65535,S=Math.floor(h/65536),L=h-S*65536,h=H+S+65535,S=Math.floor(h/65536),H=h-S*65536,h=Z+S+65535,S=Math.floor(h/65536),Z=h-S*65536,h=z+S+65535,S=Math.floor(h/65536),z=h-S*65536,h=J+S+65535,S=Math.floor(h/65536),J=h-S*65536,h=q+S+65535,S=Math.floor(h/65536),q=h-S*65536,h=ne+S+65535,S=Math.floor(h/65536),ne=h-S*65536,h=fe+S+65535,S=Math.floor(h/65536),fe=h-S*65536,h=Ae+S+65535,S=Math.floor(h/65536),Ae=h-S*65536,h=be+S+65535,S=Math.floor(h/65536),be=h-S*65536,h=pe+S+65535,S=Math.floor(h/65536),pe=h-S*65536,h=ce+S+65535,S=Math.floor(h/65536),ce=h-S*65536,h=_e+S+65535,S=Math.floor(h/65536),_e=h-S*65536,U+=S-1+37*(S-1),_[0]=U,_[1]=D,_[2]=R,_[3]=L,_[4]=H,_[5]=Z,_[6]=z,_[7]=J,_[8]=q,_[9]=ne,_[10]=fe,_[11]=Ae,_[12]=be,_[13]=pe,_[14]=ce,_[15]=_e}function g(_,T){p(_,T,T)}function w(_,T){const $=r();for(let h=0;h<16;h++)$[h]=T[h];for(let h=253;h>=0;h--)g($,$),h!==2&&h!==4&&p($,$,T);for(let h=0;h<16;h++)_[h]=$[h]}function y(_,T){const $=new Uint8Array(32),h=new Float64Array(80),S=r(),U=r(),D=r(),R=r(),L=r(),H=r();for(let q=0;q<31;q++)$[q]=_[q];$[31]=_[31]&127|64,$[0]&=248,u(h,T);for(let q=0;q<16;q++)U[q]=h[q];S[0]=R[0]=1;for(let q=254;q>=0;--q){const ne=$[q>>>3]>>>(q&7)&1;a(S,U,ne),a(D,R,ne),l(L,S,D),d(S,S,D),l(D,U,R),d(U,U,R),g(R,L),g(H,S),p(S,D,S),p(D,U,L),l(L,S,D),d(S,S,D),g(U,S),d(D,R,H),p(S,D,o),l(S,S,R),p(D,D,S),p(S,R,H),p(R,U,h),g(U,L),a(S,U,ne),a(D,R,ne)}for(let q=0;q<16;q++)h[q+16]=S[q],h[q+32]=D[q],h[q+48]=U[q],h[q+64]=R[q];const Z=h.subarray(32),z=h.subarray(16);w(Z,Z),p(z,z,Z);const J=new Uint8Array(32);return c(J,z),J}e.scalarMult=y;function x(_){return y(_,i)}e.scalarMultBase=x;function E(_){if(_.length!==e.SECRET_KEY_LENGTH)throw new Error(`x25519: seed must be ${e.SECRET_KEY_LENGTH} bytes`);const T=new Uint8Array(_);return{publicKey:x(T),secretKey:T}}e.generateKeyPairFromSeed=E;function b(_){const T=(0,t.randomBytes)(32,_),$=E(T);return(0,n.wipe)(T),$}e.generateKeyPair=b;function C(_,T,$=!1){if(_.length!==e.PUBLIC_KEY_LENGTH)throw new Error("X25519: incorrect secret key length");if(T.length!==e.PUBLIC_KEY_LENGTH)throw new Error("X25519: incorrect public key length");const h=y(_,T);if($){let S=0;for(let U=0;U<h.length;U++)S|=h[U];if(S===0)throw new Error("X25519: invalid shared key")}return h}e.sharedKey=C})(Kh);function Zh(e){return globalThis.Buffer!=null?new Uint8Array(e.buffer,e.byteOffset,e.byteLength):e}function ay(e=0){return globalThis.Buffer!=null&&globalThis.Buffer.allocUnsafe!=null?Zh(globalThis.Buffer.allocUnsafe(e)):new Uint8Array(e)}function ym(e,t){t||(t=e.reduce((i,o)=>i+o.length,0));const n=ay(t);let r=0;for(const i of e)n.set(i,r),r+=i.length;return Zh(n)}function WS(e,t){if(e.length>=255)throw new TypeError("Alphabet too long");for(var n=new Uint8Array(256),r=0;r<n.length;r++)n[r]=255;for(var i=0;i<e.length;i++){var o=e.charAt(i),s=o.charCodeAt(0);if(n[s]!==255)throw new TypeError(o+" is ambiguous");n[s]=i}var a=e.length,c=e.charAt(0),u=Math.log(a)/Math.log(256),l=Math.log(256)/Math.log(a);function d(w){if(w instanceof Uint8Array||(ArrayBuffer.isView(w)?w=new Uint8Array(w.buffer,w.byteOffset,w.byteLength):Array.isArray(w)&&(w=Uint8Array.from(w))),!(w instanceof Uint8Array))throw new TypeError("Expected Uint8Array");if(w.length===0)return"";for(var y=0,x=0,E=0,b=w.length;E!==b&&w[E]===0;)E++,y++;for(var C=(b-E)*l+1>>>0,_=new Uint8Array(C);E!==b;){for(var T=w[E],$=0,h=C-1;(T!==0||$<x)&&h!==-1;h--,$++)T+=256*_[h]>>>0,_[h]=T%a>>>0,T=T/a>>>0;if(T!==0)throw new Error("Non-zero carry");x=$,E++}for(var S=C-x;S!==C&&_[S]===0;)S++;for(var U=c.repeat(y);S<C;++S)U+=e.charAt(_[S]);return U}function p(w){if(typeof w!="string")throw new TypeError("Expected String");if(w.length===0)return new Uint8Array;var y=0;if(w[y]!==" "){for(var x=0,E=0;w[y]===c;)x++,y++;for(var b=(w.length-y)*u+1>>>0,C=new Uint8Array(b);w[y];){var _=n[w.charCodeAt(y)];if(_===255)return;for(var T=0,$=b-1;(_!==0||T<E)&&$!==-1;$--,T++)_+=a*C[$]>>>0,C[$]=_%256>>>0,_=_/256>>>0;if(_!==0)throw new Error("Non-zero carry");E=T,y++}if(w[y]!==" "){for(var h=b-E;h!==b&&C[h]===0;)h++;for(var S=new Uint8Array(x+(b-h)),U=x;h!==b;)S[U++]=C[h++];return S}}}function g(w){var y=p(w);if(y)return y;throw new Error(`Non-${t} character`)}return{encode:d,decodeUnsafe:p,decode:g}}var HS=WS,zS=HS;const qS=e=>{if(e instanceof Uint8Array&&e.constructor.name==="Uint8Array")return e;if(e instanceof ArrayBuffer)return new Uint8Array(e);if(ArrayBuffer.isView(e))return new Uint8Array(e.buffer,e.byteOffset,e.byteLength);throw new Error("Unknown type, must be binary type")},VS=e=>new TextEncoder().encode(e),GS=e=>new TextDecoder().decode(e);class KS{constructor(t,n,r){this.name=t,this.prefix=n,this.baseEncode=r}encode(t){if(t instanceof Uint8Array)return`${this.prefix}${this.baseEncode(t)}`;throw Error("Unknown type, must be binary type")}}class ZS{constructor(t,n,r){if(this.name=t,this.prefix=n,n.codePointAt(0)===void 0)throw new Error("Invalid prefix character");this.prefixCodePoint=n.codePointAt(0),this.baseDecode=r}decode(t){if(typeof t=="string"){if(t.codePointAt(0)!==this.prefixCodePoint)throw Error(`Unable to decode multibase string ${JSON.stringify(t)}, ${this.name} decoder only supports inputs prefixed with ${this.prefix}`);return this.baseDecode(t.slice(this.prefix.length))}else throw Error("Can only multibase decode strings")}or(t){return cy(this,t)}}class JS{constructor(t){this.decoders=t}or(t){return cy(this,t)}decode(t){const n=t[0],r=this.decoders[n];if(r)return r.decode(t);throw RangeError(`Unable to decode multibase string ${JSON.stringify(t)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`)}}const cy=(e,t)=>new JS({...e.decoders||{[e.prefix]:e},...t.decoders||{[t.prefix]:t}});class YS{constructor(t,n,r,i){this.name=t,this.prefix=n,this.baseEncode=r,this.baseDecode=i,this.encoder=new KS(t,n,r),this.decoder=new ZS(t,n,i)}encode(t){return this.encoder.encode(t)}decode(t){return this.decoder.decode(t)}}const ju=({name:e,prefix:t,encode:n,decode:r})=>new YS(e,t,n,r),fc=({prefix:e,name:t,alphabet:n})=>{const{encode:r,decode:i}=zS(n,t);return ju({prefix:e,name:t,encode:r,decode:o=>qS(i(o))})},XS=(e,t,n,r)=>{const i={};for(let l=0;l<t.length;++l)i[t[l]]=l;let o=e.length;for(;e[o-1]==="=";)--o;const s=new Uint8Array(o*n/8|0);let a=0,c=0,u=0;for(let l=0;l<o;++l){const d=i[e[l]];if(d===void 0)throw new SyntaxError(`Non-${r} character`);c=c<<n|d,a+=n,a>=8&&(a-=8,s[u++]=255&c>>a)}if(a>=n||255&c<<8-a)throw new SyntaxError("Unexpected end of data");return s},QS=(e,t,n)=>{const r=t[t.length-1]==="=",i=(1<<n)-1;let o="",s=0,a=0;for(let c=0;c<e.length;++c)for(a=a<<8|e[c],s+=8;s>n;)s-=n,o+=t[i&a>>s];if(s&&(o+=t[i&a<<n-s]),r)for(;o.length*n&7;)o+="=";return o},_t=({name:e,prefix:t,bitsPerChar:n,alphabet:r})=>ju({prefix:t,name:e,encode(i){return QS(i,r,n)},decode(i){return XS(i,r,n,e)}}),eA=ju({prefix:"\0",name:"identity",encode:e=>GS(e),decode:e=>VS(e)}),tA=Object.freeze(Object.defineProperty({__proto__:null,identity:eA},Symbol.toStringTag,{value:"Module"})),nA=_t({prefix:"0",name:"base2",alphabet:"01",bitsPerChar:1}),rA=Object.freeze(Object.defineProperty({__proto__:null,base2:nA},Symbol.toStringTag,{value:"Module"})),iA=_t({prefix:"7",name:"base8",alphabet:"01234567",bitsPerChar:3}),oA=Object.freeze(Object.defineProperty({__proto__:null,base8:iA},Symbol.toStringTag,{value:"Module"})),sA=fc({prefix:"9",name:"base10",alphabet:"0123456789"}),aA=Object.freeze(Object.defineProperty({__proto__:null,base10:sA},Symbol.toStringTag,{value:"Module"})),cA=_t({prefix:"f",name:"base16",alphabet:"0123456789abcdef",bitsPerChar:4}),lA=_t({prefix:"F",name:"base16upper",alphabet:"0123456789ABCDEF",bitsPerChar:4}),uA=Object.freeze(Object.defineProperty({__proto__:null,base16:cA,base16upper:lA},Symbol.toStringTag,{value:"Module"})),dA=_t({prefix:"b",name:"base32",alphabet:"abcdefghijklmnopqrstuvwxyz234567",bitsPerChar:5}),fA=_t({prefix:"B",name:"base32upper",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",bitsPerChar:5}),hA=_t({prefix:"c",name:"base32pad",alphabet:"abcdefghijklmnopqrstuvwxyz234567=",bitsPerChar:5}),pA=_t({prefix:"C",name:"base32padupper",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=",bitsPerChar:5}),mA=_t({prefix:"v",name:"base32hex",alphabet:"0123456789abcdefghijklmnopqrstuv",bitsPerChar:5}),gA=_t({prefix:"V",name:"base32hexupper",alphabet:"0123456789ABCDEFGHIJKLMNOPQRSTUV",bitsPerChar:5}),wA=_t({prefix:"t",name:"base32hexpad",alphabet:"0123456789abcdefghijklmnopqrstuv=",bitsPerChar:5}),bA=_t({prefix:"T",name:"base32hexpadupper",alphabet:"0123456789ABCDEFGHIJKLMNOPQRSTUV=",bitsPerChar:5}),yA=_t({prefix:"h",name:"base32z",alphabet:"ybndrfg8ejkmcpqxot1uwisza345h769",bitsPerChar:5}),vA=Object.freeze(Object.defineProperty({__proto__:null,base32:dA,base32hex:mA,base32hexpad:wA,base32hexpadupper:bA,base32hexupper:gA,base32pad:hA,base32padupper:pA,base32upper:fA,base32z:yA},Symbol.toStringTag,{value:"Module"})),xA=fc({prefix:"k",name:"base36",alphabet:"0123456789abcdefghijklmnopqrstuvwxyz"}),_A=fc({prefix:"K",name:"base36upper",alphabet:"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"}),CA=Object.freeze(Object.defineProperty({__proto__:null,base36:xA,base36upper:_A},Symbol.toStringTag,{value:"Module"})),EA=fc({name:"base58btc",prefix:"z",alphabet:"123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"}),TA=fc({name:"base58flickr",prefix:"Z",alphabet:"123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ"}),SA=Object.freeze(Object.defineProperty({__proto__:null,base58btc:EA,base58flickr:TA},Symbol.toStringTag,{value:"Module"})),AA=_t({prefix:"m",name:"base64",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",bitsPerChar:6}),$A=_t({prefix:"M",name:"base64pad",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",bitsPerChar:6}),PA=_t({prefix:"u",name:"base64url",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",bitsPerChar:6}),OA=_t({prefix:"U",name:"base64urlpad",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",bitsPerChar:6}),DA=Object.freeze(Object.defineProperty({__proto__:null,base64:AA,base64pad:$A,base64url:PA,base64urlpad:OA},Symbol.toStringTag,{value:"Module"})),ly=Array.from("🚀🪐☄🛰🌌🌑🌒🌓🌔🌕🌖🌗🌘🌍🌏🌎🐉☀💻🖥💾💿😂❤😍🤣😊🙏💕😭😘👍😅👏😁🔥🥰💔💖💙😢🤔😆🙄💪😉☺👌🤗💜😔😎😇🌹🤦🎉💞✌✨🤷😱😌🌸🙌😋💗💚😏💛🙂💓🤩😄😀🖤😃💯🙈👇🎶😒🤭❣😜💋👀😪😑💥🙋😞😩😡🤪👊🥳😥🤤👉💃😳✋😚😝😴🌟😬🙃🍀🌷😻😓⭐✅🥺🌈😈🤘💦✔😣🏃💐☹🎊💘😠☝😕🌺🎂🌻😐🖕💝🙊😹🗣💫💀👑🎵🤞😛🔴😤🌼😫⚽🤙☕🏆🤫👈😮🙆🍻🍃🐶💁😲🌿🧡🎁⚡🌞🎈❌✊👋😰🤨😶🤝🚶💰🍓💢🤟🙁🚨💨🤬✈🎀🍺🤓😙💟🌱😖👶🥴▶➡❓💎💸⬇😨🌚🦋😷🕺⚠🙅😟😵👎🤲🤠🤧📌🔵💅🧐🐾🍒😗🤑🌊🤯🐷☎💧😯💆👆🎤🙇🍑❄🌴💣🐸💌📍🥀🤢👅💡💩👐📸👻🤐🤮🎼🥵🚩🍎🍊👼💍📣🥂"),IA=ly.reduce((e,t,n)=>(e[n]=t,e),[]),RA=ly.reduce((e,t,n)=>(e[t.codePointAt(0)]=n,e),[]);function NA(e){return e.reduce((t,n)=>(t+=IA[n],t),"")}function kA(e){const t=[];for(const n of e){const r=RA[n.codePointAt(0)];if(r===void 0)throw new Error(`Non-base256emoji character: ${n}`);t.push(r)}return new Uint8Array(t)}const MA=ju({prefix:"🚀",name:"base256emoji",encode:NA,decode:kA}),BA=Object.freeze(Object.defineProperty({__proto__:null,base256emoji:MA},Symbol.toStringTag,{value:"Module"}));new TextEncoder;new TextDecoder;const vm={...tA,...rA,...oA,...aA,...uA,...vA,...CA,...SA,...DA,...BA};function uy(e,t,n,r){return{name:e,prefix:t,encoder:{name:e,prefix:t,encode:n},decoder:{decode:r}}}const xm=uy("utf8","u",e=>"u"+new TextDecoder("utf8").decode(e),e=>new TextEncoder().encode(e.substring(1))),Rd=uy("ascii","a",e=>{let t="a";for(let n=0;n<e.length;n++)t+=String.fromCharCode(e[n]);return t},e=>{e=e.substring(1);const t=ay(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}),dy={utf8:xm,"utf-8":xm,hex:vm.base16,latin1:Rd,ascii:Rd,binary:Rd,...vm};function xn(e,t="utf8"){const n=dy[t];if(!n)throw new Error(`Unsupported encoding "${t}"`);return(t==="utf8"||t==="utf-8")&&globalThis.Buffer!=null&&globalThis.Buffer.from!=null?Zh(globalThis.Buffer.from(e,"utf-8")):n.decoder.decode(`${n.prefix}${e}`)}function An(e,t="utf8"){const n=dy[t];if(!n)throw new Error(`Unsupported encoding "${t}"`);return(t==="utf8"||t==="utf-8")&&globalThis.Buffer!=null&&globalThis.Buffer.from!=null?globalThis.Buffer.from(e.buffer,e.byteOffset,e.byteLength).toString("utf8"):n.encoder.encode(e).substring(1)}var _m=globalThis&&globalThis.__spreadArray||function(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,o;r<i;r++)(o||!(r in t))&&(o||(o=Array.prototype.slice.call(t,0,r)),o[r]=t[r]);return e.concat(o||Array.prototype.slice.call(t))},LA=function(){function e(t,n,r){this.name=t,this.version=n,this.os=r,this.type="browser"}return e}(),UA=function(){function e(t){this.version=t,this.type="node",this.name="node",this.os=process.platform}return e}(),FA=function(){function e(t,n,r,i){this.name=t,this.version=n,this.os=r,this.bot=i,this.type="bot-device"}return e}(),jA=function(){function e(){this.type="bot",this.bot=!0,this.name="bot",this.version=null,this.os=null}return e}(),WA=function(){function e(){this.type="react-native",this.name="react-native",this.version=null,this.os=null}return e}(),HA=/alexa|bot|crawl(er|ing)|facebookexternalhit|feedburner|google web preview|nagios|postrank|pingdom|slurp|spider|yahoo!|yandex/,zA=/(nuhk|curl|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask\ Jeeves\/Teoma|ia_archiver)/,Cm=3,qA=[["aol",/AOLShield\/([0-9\._]+)/],["edge",/Edge\/([0-9\._]+)/],["edge-ios",/EdgiOS\/([0-9\._]+)/],["yandexbrowser",/YaBrowser\/([0-9\._]+)/],["kakaotalk",/KAKAOTALK\s([0-9\.]+)/],["samsung",/SamsungBrowser\/([0-9\.]+)/],["silk",/\bSilk\/([0-9._-]+)\b/],["miui",/MiuiBrowser\/([0-9\.]+)$/],["beaker",/BeakerBrowser\/([0-9\.]+)/],["edge-chromium",/EdgA?\/([0-9\.]+)/],["chromium-webview",/(?!Chrom.*OPR)wv\).*Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],["chrome",/(?!Chrom.*OPR)Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],["phantomjs",/PhantomJS\/([0-9\.]+)(:?\s|$)/],["crios",/CriOS\/([0-9\.]+)(:?\s|$)/],["firefox",/Firefox\/([0-9\.]+)(?:\s|$)/],["fxios",/FxiOS\/([0-9\.]+)/],["opera-mini",/Opera Mini.*Version\/([0-9\.]+)/],["opera",/Opera\/([0-9\.]+)(?:\s|$)/],["opera",/OPR\/([0-9\.]+)(:?\s|$)/],["pie",/^Microsoft Pocket Internet Explorer\/(\d+\.\d+)$/],["pie",/^Mozilla\/\d\.\d+\s\(compatible;\s(?:MSP?IE|MSInternet Explorer) (\d+\.\d+);.*Windows CE.*\)$/],["netfront",/^Mozilla\/\d\.\d+.*NetFront\/(\d.\d)/],["ie",/Trident\/7\.0.*rv\:([0-9\.]+).*\).*Gecko$/],["ie",/MSIE\s([0-9\.]+);.*Trident\/[4-7].0/],["ie",/MSIE\s(7\.0)/],["bb10",/BB10;\sTouch.*Version\/([0-9\.]+)/],["android",/Android\s([0-9\.]+)/],["ios",/Version\/([0-9\._]+).*Mobile.*Safari.*/],["safari",/Version\/([0-9\._]+).*Safari/],["facebook",/FB[AS]V\/([0-9\.]+)/],["instagram",/Instagram\s([0-9\.]+)/],["ios-webview",/AppleWebKit\/([0-9\.]+).*Mobile/],["ios-webview",/AppleWebKit\/([0-9\.]+).*Gecko\)$/],["curl",/^curl\/([0-9\.]+)$/],["searchbot",HA]],Em=[["iOS",/iP(hone|od|ad)/],["Android OS",/Android/],["BlackBerry OS",/BlackBerry|BB10/],["Windows Mobile",/IEMobile/],["Amazon OS",/Kindle/],["Windows 3.11",/Win16/],["Windows 95",/(Windows 95)|(Win95)|(Windows_95)/],["Windows 98",/(Windows 98)|(Win98)/],["Windows 2000",/(Windows NT 5.0)|(Windows 2000)/],["Windows XP",/(Windows NT 5.1)|(Windows XP)/],["Windows Server 2003",/(Windows NT 5.2)/],["Windows Vista",/(Windows NT 6.0)/],["Windows 7",/(Windows NT 6.1)/],["Windows 8",/(Windows NT 6.2)/],["Windows 8.1",/(Windows NT 6.3)/],["Windows 10",/(Windows NT 10.0)/],["Windows ME",/Windows ME/],["Windows CE",/Windows CE|WinCE|Microsoft Pocket Internet Explorer/],["Open BSD",/OpenBSD/],["Sun OS",/SunOS/],["Chrome OS",/CrOS/],["Linux",/(Linux)|(X11)/],["Mac OS",/(Mac_PowerPC)|(Macintosh)/],["QNX",/QNX/],["BeOS",/BeOS/],["OS/2",/OS\/2/]];function VA(e){return e?Tm(e):typeof document>"u"&&typeof navigator<"u"&&navigator.product==="ReactNative"?new WA:typeof navigator<"u"?Tm(navigator.userAgent):ZA()}function GA(e){return e!==""&&qA.reduce(function(t,n){var r=n[0],i=n[1];if(t)return t;var o=i.exec(e);return!!o&&[r,o]},!1)}function Tm(e){var t=GA(e);if(!t)return null;var n=t[0],r=t[1];if(n==="searchbot")return new jA;var i=r[1]&&r[1].split(".").join("_").split("_").slice(0,3);i?i.length<Cm&&(i=_m(_m([],i,!0),JA(Cm-i.length),!0)):i=[];var o=i.join("."),s=KA(e),a=zA.exec(e);return a&&a[1]?new FA(n,o,s,a[1]):new LA(n,o,s)}function KA(e){for(var t=0,n=Em.length;t<n;t++){var r=Em[t],i=r[0],o=r[1],s=o.exec(e);if(s)return i}return null}function ZA(){var e=typeof process<"u"&&process.version;return e?new UA(process.version.slice(1)):null}function JA(e){for(var t=[],n=0;n<e;n++)t.push("0");return t}var Si={},fy={exports:{}};/*! *****************************************************************************
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
***************************************************************************** */(function(e){var t,n,r,i,o,s,a,c,u,l,d,p,g,w,y,x,E,b,C,_,T,$,h;(function(S){var U=typeof P1=="object"?P1:typeof self=="object"?self:typeof this=="object"?this:{};S(D(U,D(e.exports)));function D(R,L){return R!==U&&(typeof Object.create=="function"?Object.defineProperty(R,"__esModule",{value:!0}):R.__esModule=!0),function(H,Z){return R[H]=L?L(H,Z):Z}}})(function(S){var U=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(D,R){D.__proto__=R}||function(D,R){for(var L in R)R.hasOwnProperty(L)&&(D[L]=R[L])};t=function(D,R){U(D,R);function L(){this.constructor=D}D.prototype=R===null?Object.create(R):(L.prototype=R.prototype,new L)},n=Object.assign||function(D){for(var R,L=1,H=arguments.length;L<H;L++){R=arguments[L];for(var Z in R)Object.prototype.hasOwnProperty.call(R,Z)&&(D[Z]=R[Z])}return D},r=function(D,R){var L={};for(var H in D)Object.prototype.hasOwnProperty.call(D,H)&&R.indexOf(H)<0&&(L[H]=D[H]);if(D!=null&&typeof Object.getOwnPropertySymbols=="function")for(var Z=0,H=Object.getOwnPropertySymbols(D);Z<H.length;Z++)R.indexOf(H[Z])<0&&Object.prototype.propertyIsEnumerable.call(D,H[Z])&&(L[H[Z]]=D[H[Z]]);return L},i=function(D,R,L,H){var Z=arguments.length,z=Z<3?R:H===null?H=Object.getOwnPropertyDescriptor(R,L):H,J;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")z=Reflect.decorate(D,R,L,H);else for(var q=D.length-1;q>=0;q--)(J=D[q])&&(z=(Z<3?J(z):Z>3?J(R,L,z):J(R,L))||z);return Z>3&&z&&Object.defineProperty(R,L,z),z},o=function(D,R){return function(L,H){R(L,H,D)}},s=function(D,R){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(D,R)},a=function(D,R,L,H){function Z(z){return z instanceof L?z:new L(function(J){J(z)})}return new(L||(L=Promise))(function(z,J){function q(Ae){try{fe(H.next(Ae))}catch(be){J(be)}}function ne(Ae){try{fe(H.throw(Ae))}catch(be){J(be)}}function fe(Ae){Ae.done?z(Ae.value):Z(Ae.value).then(q,ne)}fe((H=H.apply(D,R||[])).next())})},c=function(D,R){var L={label:0,sent:function(){if(z[0]&1)throw z[1];return z[1]},trys:[],ops:[]},H,Z,z,J;return J={next:q(0),throw:q(1),return:q(2)},typeof Symbol=="function"&&(J[Symbol.iterator]=function(){return this}),J;function q(fe){return function(Ae){return ne([fe,Ae])}}function ne(fe){if(H)throw new TypeError("Generator is already executing.");for(;L;)try{if(H=1,Z&&(z=fe[0]&2?Z.return:fe[0]?Z.throw||((z=Z.return)&&z.call(Z),0):Z.next)&&!(z=z.call(Z,fe[1])).done)return z;switch(Z=0,z&&(fe=[fe[0]&2,z.value]),fe[0]){case 0:case 1:z=fe;break;case 4:return L.label++,{value:fe[1],done:!1};case 5:L.label++,Z=fe[1],fe=[0];continue;case 7:fe=L.ops.pop(),L.trys.pop();continue;default:if(z=L.trys,!(z=z.length>0&&z[z.length-1])&&(fe[0]===6||fe[0]===2)){L=0;continue}if(fe[0]===3&&(!z||fe[1]>z[0]&&fe[1]<z[3])){L.label=fe[1];break}if(fe[0]===6&&L.label<z[1]){L.label=z[1],z=fe;break}if(z&&L.label<z[2]){L.label=z[2],L.ops.push(fe);break}z[2]&&L.ops.pop(),L.trys.pop();continue}fe=R.call(D,L)}catch(Ae){fe=[6,Ae],Z=0}finally{H=z=0}if(fe[0]&5)throw fe[1];return{value:fe[0]?fe[1]:void 0,done:!0}}},h=function(D,R,L,H){H===void 0&&(H=L),D[H]=R[L]},u=function(D,R){for(var L in D)L!=="default"&&!R.hasOwnProperty(L)&&(R[L]=D[L])},l=function(D){var R=typeof Symbol=="function"&&Symbol.iterator,L=R&&D[R],H=0;if(L)return L.call(D);if(D&&typeof D.length=="number")return{next:function(){return D&&H>=D.length&&(D=void 0),{value:D&&D[H++],done:!D}}};throw new TypeError(R?"Object is not iterable.":"Symbol.iterator is not defined.")},d=function(D,R){var L=typeof Symbol=="function"&&D[Symbol.iterator];if(!L)return D;var H=L.call(D),Z,z=[],J;try{for(;(R===void 0||R-- >0)&&!(Z=H.next()).done;)z.push(Z.value)}catch(q){J={error:q}}finally{try{Z&&!Z.done&&(L=H.return)&&L.call(H)}finally{if(J)throw J.error}}return z},p=function(){for(var D=[],R=0;R<arguments.length;R++)D=D.concat(d(arguments[R]));return D},g=function(){for(var D=0,R=0,L=arguments.length;R<L;R++)D+=arguments[R].length;for(var H=Array(D),Z=0,R=0;R<L;R++)for(var z=arguments[R],J=0,q=z.length;J<q;J++,Z++)H[Z]=z[J];return H},w=function(D){return this instanceof w?(this.v=D,this):new w(D)},y=function(D,R,L){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var H=L.apply(D,R||[]),Z,z=[];return Z={},J("next"),J("throw"),J("return"),Z[Symbol.asyncIterator]=function(){return this},Z;function J(pe){H[pe]&&(Z[pe]=function(ce){return new Promise(function(_e,Pe){z.push([pe,ce,_e,Pe])>1||q(pe,ce)})})}function q(pe,ce){try{ne(H[pe](ce))}catch(_e){be(z[0][3],_e)}}function ne(pe){pe.value instanceof w?Promise.resolve(pe.value.v).then(fe,Ae):be(z[0][2],pe)}function fe(pe){q("next",pe)}function Ae(pe){q("throw",pe)}function be(pe,ce){pe(ce),z.shift(),z.length&&q(z[0][0],z[0][1])}},x=function(D){var R,L;return R={},H("next"),H("throw",function(Z){throw Z}),H("return"),R[Symbol.iterator]=function(){return this},R;function H(Z,z){R[Z]=D[Z]?function(J){return(L=!L)?{value:w(D[Z](J)),done:Z==="return"}:z?z(J):J}:z}},E=function(D){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var R=D[Symbol.asyncIterator],L;return R?R.call(D):(D=typeof l=="function"?l(D):D[Symbol.iterator](),L={},H("next"),H("throw"),H("return"),L[Symbol.asyncIterator]=function(){return this},L);function H(z){L[z]=D[z]&&function(J){return new Promise(function(q,ne){J=D[z](J),Z(q,ne,J.done,J.value)})}}function Z(z,J,q,ne){Promise.resolve(ne).then(function(fe){z({value:fe,done:q})},J)}},b=function(D,R){return Object.defineProperty?Object.defineProperty(D,"raw",{value:R}):D.raw=R,D},C=function(D){if(D&&D.__esModule)return D;var R={};if(D!=null)for(var L in D)Object.hasOwnProperty.call(D,L)&&(R[L]=D[L]);return R.default=D,R},_=function(D){return D&&D.__esModule?D:{default:D}},T=function(D,R){if(!R.has(D))throw new TypeError("attempted to get private field on non-instance");return R.get(D)},$=function(D,R,L){if(!R.has(D))throw new TypeError("attempted to set private field on non-instance");return R.set(D,L),L},S("__extends",t),S("__assign",n),S("__rest",r),S("__decorate",i),S("__param",o),S("__metadata",s),S("__awaiter",a),S("__generator",c),S("__exportStar",u),S("__createBinding",h),S("__values",l),S("__read",d),S("__spread",p),S("__spreadArrays",g),S("__await",w),S("__asyncGenerator",y),S("__asyncDelegator",x),S("__asyncValues",E),S("__makeTemplateObject",b),S("__importStar",C),S("__importDefault",_),S("__classPrivateFieldGet",T),S("__classPrivateFieldSet",$)})})(fy);var Wu=fy.exports,Nd={},Ts={},Sm;function YA(){if(Sm)return Ts;Sm=1,Object.defineProperty(Ts,"__esModule",{value:!0}),Ts.delay=void 0;function e(t){return new Promise(n=>{setTimeout(()=>{n(!0)},t)})}return Ts.delay=e,Ts}var di={},kd={},fi={},Am;function XA(){return Am||(Am=1,Object.defineProperty(fi,"__esModule",{value:!0}),fi.ONE_THOUSAND=fi.ONE_HUNDRED=void 0,fi.ONE_HUNDRED=100,fi.ONE_THOUSAND=1e3),fi}var Md={},$m;function QA(){return $m||($m=1,function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.ONE_YEAR=e.FOUR_WEEKS=e.THREE_WEEKS=e.TWO_WEEKS=e.ONE_WEEK=e.THIRTY_DAYS=e.SEVEN_DAYS=e.FIVE_DAYS=e.THREE_DAYS=e.ONE_DAY=e.TWENTY_FOUR_HOURS=e.TWELVE_HOURS=e.SIX_HOURS=e.THREE_HOURS=e.ONE_HOUR=e.SIXTY_MINUTES=e.THIRTY_MINUTES=e.TEN_MINUTES=e.FIVE_MINUTES=e.ONE_MINUTE=e.SIXTY_SECONDS=e.THIRTY_SECONDS=e.TEN_SECONDS=e.FIVE_SECONDS=e.ONE_SECOND=void 0,e.ONE_SECOND=1,e.FIVE_SECONDS=5,e.TEN_SECONDS=10,e.THIRTY_SECONDS=30,e.SIXTY_SECONDS=60,e.ONE_MINUTE=e.SIXTY_SECONDS,e.FIVE_MINUTES=e.ONE_MINUTE*5,e.TEN_MINUTES=e.ONE_MINUTE*10,e.THIRTY_MINUTES=e.ONE_MINUTE*30,e.SIXTY_MINUTES=e.ONE_MINUTE*60,e.ONE_HOUR=e.SIXTY_MINUTES,e.THREE_HOURS=e.ONE_HOUR*3,e.SIX_HOURS=e.ONE_HOUR*6,e.TWELVE_HOURS=e.ONE_HOUR*12,e.TWENTY_FOUR_HOURS=e.ONE_HOUR*24,e.ONE_DAY=e.TWENTY_FOUR_HOURS,e.THREE_DAYS=e.ONE_DAY*3,e.FIVE_DAYS=e.ONE_DAY*5,e.SEVEN_DAYS=e.ONE_DAY*7,e.THIRTY_DAYS=e.ONE_DAY*30,e.ONE_WEEK=e.SEVEN_DAYS,e.TWO_WEEKS=e.ONE_WEEK*2,e.THREE_WEEKS=e.ONE_WEEK*3,e.FOUR_WEEKS=e.ONE_WEEK*4,e.ONE_YEAR=e.ONE_DAY*365}(Md)),Md}var Pm;function hy(){return Pm||(Pm=1,function(e){Object.defineProperty(e,"__esModule",{value:!0});const t=Wu;t.__exportStar(XA(),e),t.__exportStar(QA(),e)}(kd)),kd}var Om;function e$(){if(Om)return di;Om=1,Object.defineProperty(di,"__esModule",{value:!0}),di.fromMiliseconds=di.toMiliseconds=void 0;const e=hy();function t(r){return r*e.ONE_THOUSAND}di.toMiliseconds=t;function n(r){return Math.floor(r/e.ONE_THOUSAND)}return di.fromMiliseconds=n,di}var Dm;function t$(){return Dm||(Dm=1,function(e){Object.defineProperty(e,"__esModule",{value:!0});const t=Wu;t.__exportStar(YA(),e),t.__exportStar(e$(),e)}(Nd)),Nd}var Xi={},Im;function n$(){if(Im)return Xi;Im=1,Object.defineProperty(Xi,"__esModule",{value:!0}),Xi.Watch=void 0;class e{constructor(){this.timestamps=new Map}start(n){if(this.timestamps.has(n))throw new Error(`Watch already started for label: ${n}`);this.timestamps.set(n,{started:Date.now()})}stop(n){const r=this.get(n);if(typeof r.elapsed<"u")throw new Error(`Watch already stopped for label: ${n}`);const i=Date.now()-r.started;this.timestamps.set(n,{started:r.started,elapsed:i})}get(n){const r=this.timestamps.get(n);if(typeof r>"u")throw new Error(`No timestamp found for label: ${n}`);return r}elapsed(n){const r=this.get(n);return r.elapsed||Date.now()-r.started}}return Xi.Watch=e,Xi.default=e,Xi}var Bd={},Ss={},Rm;function r$(){if(Rm)return Ss;Rm=1,Object.defineProperty(Ss,"__esModule",{value:!0}),Ss.IWatch=void 0;class e{}return Ss.IWatch=e,Ss}var Nm;function i$(){return Nm||(Nm=1,function(e){Object.defineProperty(e,"__esModule",{value:!0}),Wu.__exportStar(r$(),e)}(Bd)),Bd}(function(e){Object.defineProperty(e,"__esModule",{value:!0});const t=Wu;t.__exportStar(t$(),e),t.__exportStar(n$(),e),t.__exportStar(i$(),e),t.__exportStar(hy(),e)})(Si);var Je={};Object.defineProperty(Je,"__esModule",{value:!0});Je.getLocalStorage=Je.getLocalStorageOrThrow=Je.getCrypto=Je.getCryptoOrThrow=my=Je.getLocation=Je.getLocationOrThrow=Jh=Je.getNavigator=Je.getNavigatorOrThrow=py=Je.getDocument=Je.getDocumentOrThrow=Je.getFromWindowOrThrow=Je.getFromWindow=void 0;function zi(e){let t;return typeof window<"u"&&typeof window[e]<"u"&&(t=window[e]),t}Je.getFromWindow=zi;function fs(e){const t=zi(e);if(!t)throw new Error(`${e} is not defined in Window`);return t}Je.getFromWindowOrThrow=fs;function o$(){return fs("document")}Je.getDocumentOrThrow=o$;function s$(){return zi("document")}var py=Je.getDocument=s$;function a$(){return fs("navigator")}Je.getNavigatorOrThrow=a$;function c$(){return zi("navigator")}var Jh=Je.getNavigator=c$;function l$(){return fs("location")}Je.getLocationOrThrow=l$;function u$(){return zi("location")}var my=Je.getLocation=u$;function d$(){return fs("crypto")}Je.getCryptoOrThrow=d$;function f$(){return zi("crypto")}Je.getCrypto=f$;function h$(){return fs("localStorage")}Je.getLocalStorageOrThrow=h$;function p$(){return zi("localStorage")}Je.getLocalStorage=p$;var Yh={};Object.defineProperty(Yh,"__esModule",{value:!0});var gy=Yh.getWindowMetadata=void 0;const km=Je;function m$(){let e,t;try{e=km.getDocumentOrThrow(),t=km.getLocationOrThrow()}catch{return null}function n(){const d=e.getElementsByTagName("link"),p=[];for(let g=0;g<d.length;g++){const w=d[g],y=w.getAttribute("rel");if(y&&y.toLowerCase().indexOf("icon")>-1){const x=w.getAttribute("href");if(x)if(x.toLowerCase().indexOf("https:")===-1&&x.toLowerCase().indexOf("http:")===-1&&x.indexOf("//")!==0){let E=t.protocol+"//"+t.host;if(x.indexOf("/")===0)E+=x;else{const b=t.pathname.split("/");b.pop();const C=b.join("/");E+=C+"/"+x}p.push(E)}else if(x.indexOf("//")===0){const E=t.protocol+x;p.push(E)}else p.push(x)}}return p}function r(...d){const p=e.getElementsByTagName("meta");for(let g=0;g<p.length;g++){const w=p[g],y=["itemprop","property","name"].map(x=>w.getAttribute(x)).filter(x=>x?d.includes(x):!1);if(y.length&&y){const x=w.getAttribute("content");if(x)return x}}return""}function i(){let d=r("name","og:site_name","og:title","twitter:title");return d||(d=e.title),d}function o(){return r("description","og:description","twitter:description","keywords")}const s=i(),a=o(),c=t.origin,u=n();return{description:a,url:c,icons:u,name:s}}gy=Yh.getWindowMetadata=m$;var Ua={},g$=e=>encodeURIComponent(e).replace(/[!'()*]/g,t=>`%${t.charCodeAt(0).toString(16).toUpperCase()}`),wy="%[a-f0-9]{2}",Mm=new RegExp("("+wy+")|([^%]+?)","gi"),Bm=new RegExp("("+wy+")+","gi");function Yf(e,t){try{return[decodeURIComponent(e.join(""))]}catch{}if(e.length===1)return e;t=t||1;var n=e.slice(0,t),r=e.slice(t);return Array.prototype.concat.call([],Yf(n),Yf(r))}function w$(e){try{return decodeURIComponent(e)}catch{for(var t=e.match(Mm)||[],n=1;n<t.length;n++)e=Yf(t,n).join(""),t=e.match(Mm)||[];return e}}function b$(e){for(var t={"%FE%FF":"��","%FF%FE":"��"},n=Bm.exec(e);n;){try{t[n[0]]=decodeURIComponent(n[0])}catch{var r=w$(n[0]);r!==n[0]&&(t[n[0]]=r)}n=Bm.exec(e)}t["%C2"]="�";for(var i=Object.keys(t),o=0;o<i.length;o++){var s=i[o];e=e.replace(new RegExp(s,"g"),t[s])}return e}var y$=function(e){if(typeof e!="string")throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof e+"`");try{return e=e.replace(/\+/g," "),decodeURIComponent(e)}catch{return b$(e)}},v$=(e,t)=>{if(!(typeof e=="string"&&typeof t=="string"))throw new TypeError("Expected the arguments to be of type `string`");if(t==="")return[e];const n=e.indexOf(t);return n===-1?[e]:[e.slice(0,n),e.slice(n+t.length)]},x$=function(e,t){for(var n={},r=Object.keys(e),i=Array.isArray(t),o=0;o<r.length;o++){var s=r[o],a=e[s];(i?t.indexOf(s)!==-1:t(s,a,e))&&(n[s]=a)}return n};(function(e){const t=g$,n=y$,r=v$,i=x$,o=b=>b==null,s=Symbol("encodeFragmentIdentifier");function a(b){switch(b.arrayFormat){case"index":return C=>(_,T)=>{const $=_.length;return T===void 0||b.skipNull&&T===null||b.skipEmptyString&&T===""?_:T===null?[..._,[l(C,b),"[",$,"]"].join("")]:[..._,[l(C,b),"[",l($,b),"]=",l(T,b)].join("")]};case"bracket":return C=>(_,T)=>T===void 0||b.skipNull&&T===null||b.skipEmptyString&&T===""?_:T===null?[..._,[l(C,b),"[]"].join("")]:[..._,[l(C,b),"[]=",l(T,b)].join("")];case"colon-list-separator":return C=>(_,T)=>T===void 0||b.skipNull&&T===null||b.skipEmptyString&&T===""?_:T===null?[..._,[l(C,b),":list="].join("")]:[..._,[l(C,b),":list=",l(T,b)].join("")];case"comma":case"separator":case"bracket-separator":{const C=b.arrayFormat==="bracket-separator"?"[]=":"=";return _=>(T,$)=>$===void 0||b.skipNull&&$===null||b.skipEmptyString&&$===""?T:($=$===null?"":$,T.length===0?[[l(_,b),C,l($,b)].join("")]:[[T,l($,b)].join(b.arrayFormatSeparator)])}default:return C=>(_,T)=>T===void 0||b.skipNull&&T===null||b.skipEmptyString&&T===""?_:T===null?[..._,l(C,b)]:[..._,[l(C,b),"=",l(T,b)].join("")]}}function c(b){let C;switch(b.arrayFormat){case"index":return(_,T,$)=>{if(C=/\[(\d*)\]$/.exec(_),_=_.replace(/\[\d*\]$/,""),!C){$[_]=T;return}$[_]===void 0&&($[_]={}),$[_][C[1]]=T};case"bracket":return(_,T,$)=>{if(C=/(\[\])$/.exec(_),_=_.replace(/\[\]$/,""),!C){$[_]=T;return}if($[_]===void 0){$[_]=[T];return}$[_]=[].concat($[_],T)};case"colon-list-separator":return(_,T,$)=>{if(C=/(:list)$/.exec(_),_=_.replace(/:list$/,""),!C){$[_]=T;return}if($[_]===void 0){$[_]=[T];return}$[_]=[].concat($[_],T)};case"comma":case"separator":return(_,T,$)=>{const h=typeof T=="string"&&T.includes(b.arrayFormatSeparator),S=typeof T=="string"&&!h&&d(T,b).includes(b.arrayFormatSeparator);T=S?d(T,b):T;const U=h||S?T.split(b.arrayFormatSeparator).map(D=>d(D,b)):T===null?T:d(T,b);$[_]=U};case"bracket-separator":return(_,T,$)=>{const h=/(\[\])$/.test(_);if(_=_.replace(/\[\]$/,""),!h){$[_]=T&&d(T,b);return}const S=T===null?[]:T.split(b.arrayFormatSeparator).map(U=>d(U,b));if($[_]===void 0){$[_]=S;return}$[_]=[].concat($[_],S)};default:return(_,T,$)=>{if($[_]===void 0){$[_]=T;return}$[_]=[].concat($[_],T)}}}function u(b){if(typeof b!="string"||b.length!==1)throw new TypeError("arrayFormatSeparator must be single character string")}function l(b,C){return C.encode?C.strict?t(b):encodeURIComponent(b):b}function d(b,C){return C.decode?n(b):b}function p(b){return Array.isArray(b)?b.sort():typeof b=="object"?p(Object.keys(b)).sort((C,_)=>Number(C)-Number(_)).map(C=>b[C]):b}function g(b){const C=b.indexOf("#");return C!==-1&&(b=b.slice(0,C)),b}function w(b){let C="";const _=b.indexOf("#");return _!==-1&&(C=b.slice(_)),C}function y(b){b=g(b);const C=b.indexOf("?");return C===-1?"":b.slice(C+1)}function x(b,C){return C.parseNumbers&&!Number.isNaN(Number(b))&&typeof b=="string"&&b.trim()!==""?b=Number(b):C.parseBooleans&&b!==null&&(b.toLowerCase()==="true"||b.toLowerCase()==="false")&&(b=b.toLowerCase()==="true"),b}function E(b,C){C=Object.assign({decode:!0,sort:!0,arrayFormat:"none",arrayFormatSeparator:",",parseNumbers:!1,parseBooleans:!1},C),u(C.arrayFormatSeparator);const _=c(C),T=Object.create(null);if(typeof b!="string"||(b=b.trim().replace(/^[?#&]/,""),!b))return T;for(const $ of b.split("&")){if($==="")continue;let[h,S]=r(C.decode?$.replace(/\+/g," "):$,"=");S=S===void 0?null:["comma","separator","bracket-separator"].includes(C.arrayFormat)?S:d(S,C),_(d(h,C),S,T)}for(const $ of Object.keys(T)){const h=T[$];if(typeof h=="object"&&h!==null)for(const S of Object.keys(h))h[S]=x(h[S],C);else T[$]=x(h,C)}return C.sort===!1?T:(C.sort===!0?Object.keys(T).sort():Object.keys(T).sort(C.sort)).reduce(($,h)=>{const S=T[h];return S&&typeof S=="object"&&!Array.isArray(S)?$[h]=p(S):$[h]=S,$},Object.create(null))}e.extract=y,e.parse=E,e.stringify=(b,C)=>{if(!b)return"";C=Object.assign({encode:!0,strict:!0,arrayFormat:"none",arrayFormatSeparator:","},C),u(C.arrayFormatSeparator);const _=S=>C.skipNull&&o(b[S])||C.skipEmptyString&&b[S]==="",T=a(C),$={};for(const S of Object.keys(b))_(S)||($[S]=b[S]);const h=Object.keys($);return C.sort!==!1&&h.sort(C.sort),h.map(S=>{const U=b[S];return U===void 0?"":U===null?l(S,C):Array.isArray(U)?U.length===0&&C.arrayFormat==="bracket-separator"?l(S,C)+"[]":U.reduce(T(S),[]).join("&"):l(S,C)+"="+l(U,C)}).filter(S=>S.length>0).join("&")},e.parseUrl=(b,C)=>{C=Object.assign({decode:!0},C);const[_,T]=r(b,"#");return Object.assign({url:_.split("?")[0]||"",query:E(y(b),C)},C&&C.parseFragmentIdentifier&&T?{fragmentIdentifier:d(T,C)}:{})},e.stringifyUrl=(b,C)=>{C=Object.assign({encode:!0,strict:!0,[s]:!0},C);const _=g(b.url).split("?")[0]||"",T=e.extract(b.url),$=e.parse(T,{sort:!1}),h=Object.assign($,b.query);let S=e.stringify(h,C);S&&(S=`?${S}`);let U=w(b.url);return b.fragmentIdentifier&&(U=`#${C[s]?l(b.fragmentIdentifier,C):b.fragmentIdentifier}`),`${_}${S}${U}`},e.pick=(b,C,_)=>{_=Object.assign({parseFragmentIdentifier:!0,[s]:!1},_);const{url:T,query:$,fragmentIdentifier:h}=e.parseUrl(b,_);return e.stringifyUrl({url:T,query:i($,C),fragmentIdentifier:h},_)},e.exclude=(b,C,_)=>{const T=Array.isArray(C)?$=>!C.includes($):($,h)=>!C($,h);return e.pick(b,T,_)}})(Ua);const _$={waku:{publish:"waku_publish",batchPublish:"waku_batchPublish",subscribe:"waku_subscribe",batchSubscribe:"waku_batchSubscribe",subscription:"waku_subscription",unsubscribe:"waku_unsubscribe",batchUnsubscribe:"waku_batchUnsubscribe"},irn:{publish:"irn_publish",batchPublish:"irn_batchPublish",subscribe:"irn_subscribe",batchSubscribe:"irn_batchSubscribe",subscription:"irn_subscription",unsubscribe:"irn_unsubscribe",batchUnsubscribe:"irn_batchUnsubscribe"},iridium:{publish:"iridium_publish",batchPublish:"iridium_batchPublish",subscribe:"iridium_subscribe",batchSubscribe:"iridium_batchSubscribe",subscription:"iridium_subscription",unsubscribe:"iridium_unsubscribe",batchUnsubscribe:"iridium_batchUnsubscribe"}},C$=":";function Rk(e){const[t,n]=e.split(C$);return{namespace:t,reference:n}}function Nk(e,t=[]){const n=[];return Object.keys(e).forEach(r=>{if(t.length&&!t.includes(r))return;const i=e[r];n.push(...i.accounts)}),n}function by(e,t){return e.includes(":")?[e]:t.chains||[]}const yy="base10",jt="base16",Xf="base64pad",Xh="utf8",vy=0,hc=1,E$=0,Lm=1,Qf=12,Qh=32;function kk(){const e=Kh.generateKeyPair();return{privateKey:An(e.secretKey,jt),publicKey:An(e.publicKey,jt)}}function Mk(){const e=Mu.randomBytes(Qh);return An(e,jt)}function Bk(e,t){const n=Kh.sharedKey(xn(e,jt),xn(t,jt),!0),r=new DS(Fu.SHA256,n).expand(Qh);return An(r,jt)}function Lk(e){const t=Fu.hash(xn(e,jt));return An(t,jt)}function Uk(e){const t=Fu.hash(xn(e,Xh));return An(t,jt)}function T$(e){return xn(`${e}`,yy)}function Hu(e){return Number(An(e,yy))}function Fk(e){const t=T$(typeof e.type<"u"?e.type:vy);if(Hu(t)===hc&&typeof e.senderPublicKey>"u")throw new Error("Missing sender public key for type 1 envelope");const n=typeof e.senderPublicKey<"u"?xn(e.senderPublicKey,jt):void 0,r=typeof e.iv<"u"?xn(e.iv,jt):Mu.randomBytes(Qf),i=new Vh.ChaCha20Poly1305(xn(e.symKey,jt)).seal(r,xn(e.message,Xh));return S$({type:t,sealed:i,iv:r,senderPublicKey:n})}function jk(e){const t=new Vh.ChaCha20Poly1305(xn(e.symKey,jt)),{sealed:n,iv:r}=xy(e.encoded),i=t.open(r,n);if(i===null)throw new Error("Failed to decrypt");return An(i,Xh)}function S$(e){if(Hu(e.type)===hc){if(typeof e.senderPublicKey>"u")throw new Error("Missing sender public key for type 1 envelope");return An(ym([e.type,e.senderPublicKey,e.iv,e.sealed]),Xf)}return An(ym([e.type,e.iv,e.sealed]),Xf)}function xy(e){const t=xn(e,Xf),n=t.slice(E$,Lm),r=Lm;if(Hu(n)===hc){const a=r+Qh,c=a+Qf,u=t.slice(r,a),l=t.slice(a,c),d=t.slice(c);return{type:n,sealed:d,iv:l,senderPublicKey:u}}const i=r+Qf,o=t.slice(r,i),s=t.slice(i);return{type:n,sealed:s,iv:o}}function Wk(e,t){const n=xy(e);return A$({type:Hu(n.type),senderPublicKey:typeof n.senderPublicKey<"u"?An(n.senderPublicKey,jt):void 0,receiverPublicKey:t==null?void 0:t.receiverPublicKey})}function A$(e){const t=(e==null?void 0:e.type)||vy;if(t===hc){if(typeof(e==null?void 0:e.senderPublicKey)>"u")throw new Error("missing sender public key");if(typeof(e==null?void 0:e.receiverPublicKey)>"u")throw new Error("missing receiver public key")}return{type:t,senderPublicKey:e==null?void 0:e.senderPublicKey,receiverPublicKey:e==null?void 0:e.receiverPublicKey}}function Hk(e){return e.type===hc&&typeof e.senderPublicKey=="string"&&typeof e.receiverPublicKey=="string"}var $$=Object.defineProperty,Um=Object.getOwnPropertySymbols,P$=Object.prototype.hasOwnProperty,O$=Object.prototype.propertyIsEnumerable,Fm=(e,t,n)=>t in e?$$(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,jm=(e,t)=>{for(var n in t||(t={}))P$.call(t,n)&&Fm(e,n,t[n]);if(Um)for(var n of Um(t))O$.call(t,n)&&Fm(e,n,t[n]);return e};const D$="ReactNative",Zt={reactNative:"react-native",node:"node",browser:"browser",unknown:"unknown"},I$="js";function _y(){return typeof process<"u"&&typeof process.versions<"u"&&typeof process.versions.node<"u"}function ep(){return!py()&&!!Jh()&&navigator.product===D$}function tp(){return!_y()&&!!Jh()}function pc(){return ep()?Zt.reactNative:_y()?Zt.node:tp()?Zt.browser:Zt.unknown}function R$(e,t){let n=Ua.parse(e);return n=jm(jm({},n),t),e=Ua.stringify(n),e}function zk(){return gy()||{name:"",description:"",url:"",icons:[""]}}function N$(){if(pc()===Zt.reactNative&&typeof global<"u"&&typeof(global==null?void 0:global.Platform)<"u"){const{OS:n,Version:r}=global.Platform;return[n,r].join("-")}const e=VA();if(e===null)return"unknown";const t=e.os?e.os.replace(" ","").toLowerCase():"unknown";return e.type==="browser"?[t,e.name,e.version].join("-"):[t,e.version].join("-")}function k$(){var e;const t=pc();return t===Zt.browser?[t,((e=my())==null?void 0:e.host)||"unknown"].join(":"):t}function M$(e,t,n){const r=N$(),i=k$();return[[e,t].join("-"),[I$,n].join("-"),r,i].join("/")}function qk({protocol:e,version:t,relayUrl:n,sdkVersion:r,auth:i,projectId:o,useOnCloseEvent:s}){const a=n.split("?"),c=M$(e,t,r),u={auth:i,ua:c,projectId:o,useOnCloseEvent:s||void 0},l=R$(a[1]||"",u);return a[0]+"?"+l}function _i(e,t){return e.filter(n=>t.includes(n)).length===e.length}function Vk(e){return Object.fromEntries(e.entries())}function Gk(e){return new Map(Object.entries(e))}function Kk(e=Si.FIVE_MINUTES,t){const n=Si.toMiliseconds(e||Si.FIVE_MINUTES);let r,i,o;return{resolve:s=>{o&&r&&(clearTimeout(o),r(s))},reject:s=>{o&&i&&(clearTimeout(o),i(s))},done:()=>new Promise((s,a)=>{o=setTimeout(()=>{a(new Error(t))},n),r=s,i=a})}}function Zk(e,t,n){return new Promise(async(r,i)=>{const o=setTimeout(()=>i(new Error(n)),t);try{const s=await e;r(s)}catch(s){i(s)}clearTimeout(o)})}function Cy(e,t){if(typeof t=="string"&&t.startsWith(`${e}:`))return t;if(e.toLowerCase()==="topic"){if(typeof t!="string")throw new Error('Value must be "string" for expirer target type: topic');return`topic:${t}`}else if(e.toLowerCase()==="id"){if(typeof t!="number")throw new Error('Value must be "number" for expirer target type: id');return`id:${t}`}throw new Error(`Unknown expirer target type: ${e}`)}function Jk(e){return Cy("topic",e)}function Yk(e){return Cy("id",e)}function Xk(e){const[t,n]=e.split(":"),r={id:void 0,topic:void 0};if(t==="topic"&&typeof n=="string")r.topic=n;else if(t==="id"&&Number.isInteger(Number(n)))r.id=Number(n);else throw new Error(`Invalid target, expected id:number or topic:string, got ${t}:${n}`);return r}function Qk(e,t){return Si.fromMiliseconds((t||Date.now())+Si.toMiliseconds(e))}function eM(e){return Date.now()>=Si.toMiliseconds(e)}function tM(e,t){return`${e}${t?`:${t}`:""}`}function Ld(e=[],t=[]){return[...new Set([...e,...t])]}async function nM({id:e,topic:t,wcDeepLink:n}){try{if(!n)return;const r=typeof n=="string"?JSON.parse(n):n;let i=r==null?void 0:r.href;if(typeof i!="string")return;i.endsWith("/")&&(i=i.slice(0,-1));const o=`${i}/wc?requestId=${e}&sessionTopic=${t}`,s=pc();s===Zt.browser?o.startsWith("https://")?window.open(o,"_blank","noreferrer noopener"):window.open(o,"_self","noreferrer noopener"):s===Zt.reactNative&&typeof(global==null?void 0:global.Linking)<"u"&&await global.Linking.openURL(o)}catch(r){console.error(r)}}const B$="irn";function rM(e){return(e==null?void 0:e.relay)||{protocol:B$}}function iM(e){const t=_$[e];if(typeof t>"u")throw new Error(`Relay Protocol not supported: ${e}`);return t}var L$=Object.defineProperty,Wm=Object.getOwnPropertySymbols,U$=Object.prototype.hasOwnProperty,F$=Object.prototype.propertyIsEnumerable,Hm=(e,t,n)=>t in e?L$(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,j$=(e,t)=>{for(var n in t||(t={}))U$.call(t,n)&&Hm(e,n,t[n]);if(Wm)for(var n of Wm(t))F$.call(t,n)&&Hm(e,n,t[n]);return e};function W$(e,t="-"){const n={},r="relay"+t;return Object.keys(e).forEach(i=>{if(i.startsWith(r)){const o=i.replace(r,""),s=e[i];n[o]=s}}),n}function oM(e){const t=e.indexOf(":"),n=e.indexOf("?")!==-1?e.indexOf("?"):void 0,r=e.substring(0,t),i=e.substring(t+1,n).split("@"),o=typeof n<"u"?e.substring(n):"",s=Ua.parse(o);return{protocol:r,topic:H$(i[0]),version:parseInt(i[1],10),symKey:s.symKey,relay:W$(s)}}function H$(e){return e.startsWith("//")?e.substring(2):e}function z$(e,t="-"){const n="relay",r={};return Object.keys(e).forEach(i=>{const o=n+t+i;e[i]&&(r[o]=e[i])}),r}function sM(e){return`${e.protocol}:${e.topic}@${e.version}?`+Ua.stringify(j$({symKey:e.symKey},z$(e.relay)))}var q$=Object.defineProperty,V$=Object.defineProperties,G$=Object.getOwnPropertyDescriptors,zm=Object.getOwnPropertySymbols,K$=Object.prototype.hasOwnProperty,Z$=Object.prototype.propertyIsEnumerable,qm=(e,t,n)=>t in e?q$(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,J$=(e,t)=>{for(var n in t||(t={}))K$.call(t,n)&&qm(e,n,t[n]);if(zm)for(var n of zm(t))Z$.call(t,n)&&qm(e,n,t[n]);return e},Y$=(e,t)=>V$(e,G$(t));function hs(e){const t=[];return e.forEach(n=>{const[r,i]=n.split(":");t.push(`${r}:${i}`)}),t}function X$(e){const t=[];return Object.values(e).forEach(n=>{t.push(...hs(n.accounts))}),t}function Q$(e,t){const n=[];return Object.values(e).forEach(r=>{hs(r.accounts).includes(t)&&n.push(...r.methods)}),n}function eP(e,t){const n=[];return Object.values(e).forEach(r=>{hs(r.accounts).includes(t)&&n.push(...r.events)}),n}function aM(e,t){const n=uP(e,t);if(n)throw new Error(n.message);const r={};for(const[i,o]of Object.entries(e))r[i]={methods:o.methods,events:o.events,chains:o.accounts.map(s=>`${s.split(":")[0]}:${s.split(":")[1]}`)};return r}function Ey(e){return e.includes(":")}function tP(e){return Ey(e)?e.split(":")[0]:e}function Ty(e){var t,n,r;const i={};if(!np(e))return i;for(const[o,s]of Object.entries(e)){const a=Ey(o)?[o]:s.chains,c=s.methods||[],u=s.events||[],l=tP(o);i[l]=Y$(J$({},i[l]),{chains:Ld(a,(t=i[l])==null?void 0:t.chains),methods:Ld(c,(n=i[l])==null?void 0:n.methods),events:Ld(u,(r=i[l])==null?void 0:r.events)})}return i}const nP={INVALID_METHOD:{message:"Invalid method.",code:1001},INVALID_EVENT:{message:"Invalid event.",code:1002},INVALID_UPDATE_REQUEST:{message:"Invalid update request.",code:1003},INVALID_EXTEND_REQUEST:{message:"Invalid extend request.",code:1004},INVALID_SESSION_SETTLE_REQUEST:{message:"Invalid session settle request.",code:1005},UNAUTHORIZED_METHOD:{message:"Unauthorized method.",code:3001},UNAUTHORIZED_EVENT:{message:"Unauthorized event.",code:3002},UNAUTHORIZED_UPDATE_REQUEST:{message:"Unauthorized update request.",code:3003},UNAUTHORIZED_EXTEND_REQUEST:{message:"Unauthorized extend request.",code:3004},USER_REJECTED:{message:"User rejected.",code:5e3},USER_REJECTED_CHAINS:{message:"User rejected chains.",code:5001},USER_REJECTED_METHODS:{message:"User rejected methods.",code:5002},USER_REJECTED_EVENTS:{message:"User rejected events.",code:5003},UNSUPPORTED_CHAINS:{message:"Unsupported chains.",code:5100},UNSUPPORTED_METHODS:{message:"Unsupported methods.",code:5101},UNSUPPORTED_EVENTS:{message:"Unsupported events.",code:5102},UNSUPPORTED_ACCOUNTS:{message:"Unsupported accounts.",code:5103},UNSUPPORTED_NAMESPACE_KEY:{message:"Unsupported namespace key.",code:5104},USER_DISCONNECTED:{message:"User disconnected.",code:6e3},SESSION_SETTLEMENT_FAILED:{message:"Session settlement failed.",code:7e3},WC_METHOD_UNSUPPORTED:{message:"Unsupported wc_ method.",code:10001}},rP={NOT_INITIALIZED:{message:"Not initialized.",code:1},NO_MATCHING_KEY:{message:"No matching key.",code:2},RESTORE_WILL_OVERRIDE:{message:"Restore will override.",code:3},RESUBSCRIBED:{message:"Resubscribed.",code:4},MISSING_OR_INVALID:{message:"Missing or invalid.",code:5},EXPIRED:{message:"Expired.",code:6},UNKNOWN_TYPE:{message:"Unknown type.",code:7},MISMATCHED_TOPIC:{message:"Mismatched topic.",code:8},NON_CONFORMING_NAMESPACES:{message:"Non conforming namespaces.",code:9}};function Rr(e,t){const{message:n,code:r}=rP[e];return{message:t?`${n} ${t}`:n,code:r}}function qo(e,t){const{message:n,code:r}=nP[e];return{message:t?`${n} ${t}`:n,code:r}}function zu(e,t){return Array.isArray(e)?typeof t<"u"&&e.length?e.every(t):!0:!1}function np(e){return Object.getPrototypeOf(e)===Object.prototype&&Object.keys(e).length}function Ai(e){return typeof e>"u"}function ln(e,t){return t&&Ai(e)?!0:typeof e=="string"&&!!e.trim().length}function rp(e,t){return t&&Ai(e)?!0:typeof e=="number"&&!isNaN(e)}function cM(e,t){const{requiredNamespaces:n}=t,r=Object.keys(e.namespaces),i=Object.keys(n);let o=!0;return _i(i,r)?(r.forEach(s=>{const{accounts:a,methods:c,events:u}=e.namespaces[s],l=hs(a),d=n[s];(!_i(by(s,d),l)||!_i(d.methods,c)||!_i(d.events,u))&&(o=!1)}),o):!1}function Rl(e){return ln(e,!1)&&e.includes(":")?e.split(":").length===2:!1}function iP(e){if(ln(e,!1)&&e.includes(":")){const t=e.split(":");if(t.length===3){const n=t[0]+":"+t[1];return!!t[2]&&Rl(n)}}return!1}function lM(e){if(ln(e,!1))try{return typeof new URL(e)<"u"}catch{return!1}return!1}function uM(e){var t;return(t=e==null?void 0:e.proposer)==null?void 0:t.publicKey}function dM(e){return e==null?void 0:e.topic}function fM(e,t){let n=null;return ln(e==null?void 0:e.publicKey,!1)||(n=Rr("MISSING_OR_INVALID",`${t} controller public key should be a string`)),n}function Vm(e){let t=!0;return zu(e)?e.length&&(t=e.every(n=>ln(n,!1))):t=!1,t}function oP(e,t,n){let r=null;return zu(t)&&t.length?t.forEach(i=>{r||Rl(i)||(r=qo("UNSUPPORTED_CHAINS",`${n}, chain ${i} should be a string and conform to "namespace:chainId" format`))}):Rl(e)||(r=qo("UNSUPPORTED_CHAINS",`${n}, chains must be defined as "namespace:chainId" e.g. "eip155:1": {...} in the namespace key OR as an array of CAIP-2 chainIds e.g. eip155: { chains: ["eip155:1", "eip155:5"] }`)),r}function sP(e,t,n){let r=null;return Object.entries(e).forEach(([i,o])=>{if(r)return;const s=oP(i,by(i,o),`${t} ${n}`);s&&(r=s)}),r}function aP(e,t){let n=null;return zu(e)?e.forEach(r=>{n||iP(r)||(n=qo("UNSUPPORTED_ACCOUNTS",`${t}, account ${r} should be a string and conform to "namespace:chainId:address" format`))}):n=qo("UNSUPPORTED_ACCOUNTS",`${t}, accounts should be an array of strings conforming to "namespace:chainId:address" format`),n}function cP(e,t){let n=null;return Object.values(e).forEach(r=>{if(n)return;const i=aP(r==null?void 0:r.accounts,`${t} namespace`);i&&(n=i)}),n}function lP(e,t){let n=null;return Vm(e==null?void 0:e.methods)?Vm(e==null?void 0:e.events)||(n=qo("UNSUPPORTED_EVENTS",`${t}, events should be an array of strings or empty array for no events`)):n=qo("UNSUPPORTED_METHODS",`${t}, methods should be an array of strings or empty array for no methods`),n}function Sy(e,t){let n=null;return Object.values(e).forEach(r=>{if(n)return;const i=lP(r,`${t}, namespace`);i&&(n=i)}),n}function hM(e,t,n){let r=null;if(e&&np(e)){const i=Sy(e,t);i&&(r=i);const o=sP(e,t,n);o&&(r=o)}else r=Rr("MISSING_OR_INVALID",`${t}, ${n} should be an object with data`);return r}function uP(e,t){let n=null;if(e&&np(e)){const r=Sy(e,t);r&&(n=r);const i=cP(e,t);i&&(n=i)}else n=Rr("MISSING_OR_INVALID",`${t}, namespaces should be an object with data`);return n}function dP(e){return ln(e.protocol,!0)}function pM(e,t){let n=!1;return t&&!e?n=!0:e&&zu(e)&&e.length&&e.forEach(r=>{n=dP(r)}),n}function mM(e){return typeof e=="number"}function gM(e){return typeof e<"u"&&typeof e!==null}function wM(e){return!(!e||typeof e!="object"||!e.code||!rp(e.code,!1)||!e.message||!ln(e.message,!1))}function bM(e){return!(Ai(e)||!ln(e.method,!1))}function yM(e){return!(Ai(e)||Ai(e.result)&&Ai(e.error)||!rp(e.id,!1)||!ln(e.jsonrpc,!1))}function vM(e){return!(Ai(e)||!ln(e.name,!1))}function xM(e,t){return!(!Rl(t)||!X$(e).includes(t))}function _M(e,t,n){return ln(n,!1)?Q$(e,t).includes(n):!1}function CM(e,t,n){return ln(n,!1)?eP(e,t).includes(n):!1}function EM(e,t,n){let r=null;const i=fP(e),o=hP(t),s=Object.keys(i),a=Object.keys(o),c=Gm(Object.keys(e)),u=Gm(Object.keys(t)),l=c.filter(d=>!u.includes(d));return l.length&&(r=Rr("NON_CONFORMING_NAMESPACES",`${n} namespaces keys don't satisfy requiredNamespaces.
      Required: ${l.toString()}
      Received: ${Object.keys(t).toString()}`)),_i(s,a)||(r=Rr("NON_CONFORMING_NAMESPACES",`${n} namespaces chains don't satisfy required namespaces.
      Required: ${s.toString()}
      Approved: ${a.toString()}`)),Object.keys(t).forEach(d=>{if(!d.includes(":")||r)return;const p=hs(t[d].accounts);p.includes(d)||(r=Rr("NON_CONFORMING_NAMESPACES",`${n} namespaces accounts don't satisfy namespace accounts for ${d}
        Required: ${d}
        Approved: ${p.toString()}`))}),s.forEach(d=>{r||(_i(i[d].methods,o[d].methods)?_i(i[d].events,o[d].events)||(r=Rr("NON_CONFORMING_NAMESPACES",`${n} namespaces events don't satisfy namespace events for ${d}`)):r=Rr("NON_CONFORMING_NAMESPACES",`${n} namespaces methods don't satisfy namespace methods for ${d}`))}),r}function fP(e){const t={};return Object.keys(e).forEach(n=>{var r;n.includes(":")?t[n]=e[n]:(r=e[n].chains)==null||r.forEach(i=>{t[i]={methods:e[n].methods,events:e[n].events}})}),t}function Gm(e){return[...new Set(e.map(t=>t.includes(":")?t.split(":")[0]:t))]}function hP(e){const t={};return Object.keys(e).forEach(n=>{if(n.includes(":"))t[n]=e[n];else{const r=hs(e[n].accounts);r==null||r.forEach(i=>{t[i]={accounts:e[n].accounts.filter(o=>o.includes(`${i}:`)),methods:e[n].methods,events:e[n].events}})}}),t}function TM(e,t){return rp(e,!1)&&e<=t.max&&e>=t.min}function SM(){const e=pc();return new Promise(t=>{switch(e){case Zt.browser:t(pP());break;case Zt.reactNative:t(mP());break;case Zt.node:t(gP());break;default:t(!0)}})}function pP(){return tp()&&(navigator==null?void 0:navigator.onLine)}async function mP(){if(ep()&&typeof global<"u"&&global!=null&&global.NetInfo){const e=await(global==null?void 0:global.NetInfo.fetch());return e==null?void 0:e.isConnected}return!0}function gP(){return!0}function AM(e){switch(pc()){case Zt.browser:wP(e);break;case Zt.reactNative:bP(e);break}}function wP(e){tp()&&(window.addEventListener("online",()=>e(!0)),window.addEventListener("offline",()=>e(!1)))}function bP(e){ep()&&typeof global<"u"&&global!=null&&global.NetInfo&&(global==null||global.NetInfo.addEventListener(t=>e(t==null?void 0:t.isConnected)))}const Ud={};class $M{static get(t){return Ud[t]}static set(t,n){Ud[t]=n}static delete(t){delete Ud[t]}}var Ay="eip155",yP="store",$y="requestedChains",e0="wallet_addEthereumChain",st,Gs,Vc,t0,ip,Py,Gc,n0,r0,Oy,Nl,op,so,Bs,kl,sp,Ml,ap,Bl,cp,vP=class extends wh{constructor(e){super({...e,options:{isNewChainsStale:!0,...e.options}}),Lt(this,Vc),Lt(this,ip),Lt(this,Gc),Lt(this,r0),Lt(this,Nl),Lt(this,so),Lt(this,kl),Lt(this,Ml),Lt(this,Bl),this.id="walletConnect",this.name="WalletConnect",this.ready=!0,Lt(this,st,void 0),Lt(this,Gs,void 0),this.onAccountsChanged=t=>{t.length===0?this.emit("disconnect"):this.emit("change",{account:En(t[0])})},this.onChainChanged=t=>{const n=Number(t),r=this.isChainUnsupported(n);this.emit("change",{chain:{id:n,unsupported:r}})},this.onDisconnect=()=>{gt(this,so,Bs).call(this,[]),this.emit("disconnect")},this.onDisplayUri=t=>{this.emit("message",{type:"display_uri",data:t})},this.onConnect=()=>{this.emit("connect",{})},gt(this,Vc,t0).call(this)}async connect({chainId:e,pairingTopic:t}={}){var n,r,i,o,s;try{let a=e;if(!a){const w=(n=this.storage)==null?void 0:n.getItem(yP),y=(o=(i=(r=w==null?void 0:w.state)==null?void 0:r.data)==null?void 0:i.chain)==null?void 0:o.id;y&&!this.isChainUnsupported(y)?a=y:a=(s=this.chains[0])==null?void 0:s.id}if(!a)throw new Error("No chains found on connector.");const c=await this.getProvider();gt(this,r0,Oy).call(this);const u=gt(this,Gc,n0).call(this);if(c.session&&u&&await c.disconnect(),!c.session||u){const w=this.chains.filter(y=>y.id!==a).map(y=>y.id);this.emit("message",{type:"connecting"}),await c.connect({pairingTopic:t,chains:[a],optionalChains:w.length?w:void 0}),gt(this,so,Bs).call(this,this.chains.map(({id:y})=>y))}const l=await c.enable(),d=En(l[0]),p=await this.getChainId(),g=this.isChainUnsupported(p);return{account:d,chain:{id:p,unsupported:g}}}catch(a){throw/user rejected/i.test(a==null?void 0:a.message)?new Ut(a):a}}async disconnect(){const e=await this.getProvider();try{await e.disconnect()}catch(t){if(!/No matching key/i.test(t.message))throw t}finally{gt(this,Nl,op).call(this),gt(this,so,Bs).call(this,[])}}async getAccount(){const{accounts:e}=await this.getProvider();return En(e[0])}async getChainId(){const{chainId:e}=await this.getProvider();return e}async getProvider({chainId:e}={}){return Ve(this,st)||await gt(this,Vc,t0).call(this),e&&await this.switchChain(e),Ve(this,st)}async getWalletClient({chainId:e}={}){const[t,n]=await Promise.all([this.getProvider({chainId:e}),this.getAccount()]),r=this.chains.find(i=>i.id===e);if(!t)throw new Error("provider is required.");return mh({account:n,chain:r,transport:uh(t)})}async isAuthorized(){try{const[e,t]=await Promise.all([this.getAccount(),this.getProvider()]),n=gt(this,Gc,n0).call(this);if(!e)return!1;if(n&&t.session){try{await t.disconnect()}catch{}return!1}return!0}catch{return!1}}async switchChain(e){var n,r;const t=this.chains.find(i=>i.id===e);if(!t)throw new gr(new Error("chain not found on connector."));try{const i=await this.getProvider(),o=gt(this,Ml,ap).call(this),s=gt(this,Bl,cp).call(this);if(!o.includes(e)&&s.includes(e0)){await i.request({method:e0,params:[{chainId:Ie(t.id),blockExplorerUrls:[(r=(n=t.blockExplorers)==null?void 0:n.default)==null?void 0:r.url],chainName:t.name,nativeCurrency:t.nativeCurrency,rpcUrls:[...t.rpcUrls.default.http]}]});const c=gt(this,kl,sp).call(this);c.push(e),gt(this,so,Bs).call(this,c)}return await i.request({method:"wallet_switchEthereumChain",params:[{chainId:Ie(e)}]}),t}catch(i){const o=typeof i=="string"?i:i==null?void 0:i.message;throw/user rejected request/i.test(o)?new Ut(i):new gr(i)}}};st=new WeakMap;Gs=new WeakMap;Vc=new WeakSet;t0=async function(){return!Ve(this,Gs)&&typeof window<"u"&&_a(this,Gs,gt(this,ip,Py).call(this)),Ve(this,Gs)};ip=new WeakSet;Py=async function(){const{EthereumProvider:e,OPTIONAL_EVENTS:t,OPTIONAL_METHODS:n}=await Vt(()=>import("./index.es-91ccde2d.js"),["assets/index.es-91ccde2d.js","assets/events-0145d8fd.js"]),[r,...i]=this.chains.map(({id:o})=>o);if(r){const{projectId:o,showQrModal:s=!0,qrModalOptions:a,metadata:c,relayUrl:u}=this.options;_a(this,st,await e.init({showQrModal:s,qrModalOptions:a,projectId:o,optionalMethods:n,optionalEvents:t,chains:[r],optionalChains:i.length?i:void 0,rpcMap:Object.fromEntries(this.chains.map(l=>[l.id,l.rpcUrls.default.http[0]])),metadata:c,relayUrl:u}))}};Gc=new WeakSet;n0=function(){if(gt(this,Bl,cp).call(this).includes(e0)||!this.options.isNewChainsStale)return!1;const t=gt(this,kl,sp).call(this),n=this.chains.map(({id:i})=>i),r=gt(this,Ml,ap).call(this);return r.length&&!r.some(i=>n.includes(i))?!1:!n.every(i=>t.includes(i))};r0=new WeakSet;Oy=function(){Ve(this,st)&&(gt(this,Nl,op).call(this),Ve(this,st).on("accountsChanged",this.onAccountsChanged),Ve(this,st).on("chainChanged",this.onChainChanged),Ve(this,st).on("disconnect",this.onDisconnect),Ve(this,st).on("session_delete",this.onDisconnect),Ve(this,st).on("display_uri",this.onDisplayUri),Ve(this,st).on("connect",this.onConnect))};Nl=new WeakSet;op=function(){Ve(this,st)&&(Ve(this,st).removeListener("accountsChanged",this.onAccountsChanged),Ve(this,st).removeListener("chainChanged",this.onChainChanged),Ve(this,st).removeListener("disconnect",this.onDisconnect),Ve(this,st).removeListener("session_delete",this.onDisconnect),Ve(this,st).removeListener("display_uri",this.onDisplayUri),Ve(this,st).removeListener("connect",this.onConnect))};so=new WeakSet;Bs=function(e){var t;(t=this.storage)==null||t.setItem($y,e)};kl=new WeakSet;sp=function(){var e;return((e=this.storage)==null?void 0:e.getItem($y))??[]};Ml=new WeakSet;ap=function(){var r,i,o;if(!Ve(this,st))return[];const e=(r=Ve(this,st).session)==null?void 0:r.namespaces;return e?((o=(i=Ty(e)[Ay])==null?void 0:i.chains)==null?void 0:o.map(s=>parseInt(s.split(":")[1]||"")))??[]:[]};Bl=new WeakSet;cp=function(){var r,i;if(!Ve(this,st))return[];const e=(r=Ve(this,st).session)==null?void 0:r.namespaces;return e?((i=Ty(e)[Ay])==null?void 0:i.methods)??[]:[]};function xP(){return function(e){return e.rpcUrls.public.http[0]?{chain:e,rpcUrls:e.rpcUrls.public}:null}}const _P=Ee.getBlockchainApiUrl();function CP({projectId:e}){return function(n){if(![1,5,11155111,10,420,42161,421613,137,80001,42220,1313161554,1313161555,56,97,43114,43113,100,8453,84531,7777777,999,324,280].includes(n.id))return null;const i=`${_P}/v1/?chainId=${Ln}:${n.id}&projectId=${e}`;return{chain:{...n,rpcUrls:{...n.rpcUrls,default:{http:[i]}}},rpcUrls:{http:[i]}}}}function EP(e){return new WT({...e,_sdkVersion:`html-wagmi-${Gb}`})}const TP="6.6.1";function SP(e,t,n){const r=t.split("|").map(o=>o.trim());for(let o=0;o<r.length;o++)switch(t){case"any":return;case"bigint":case"boolean":case"number":case"string":if(typeof e===t)return}const i=new Error(`invalid value for type ${t}`);throw i.code="INVALID_ARGUMENT",i.argument=`value.${n}`,i.value=e,i}function Dy(e,t,n){for(let r in t){let i=t[r];const o=n?n[r]:null;o&&SP(i,o,r),Object.defineProperty(e,r,{enumerable:!0,value:i,writable:!1})}}function lo(e){if(e==null)return"null";if(Array.isArray(e))return"[ "+e.map(lo).join(", ")+" ]";if(e instanceof Uint8Array){const t="0123456789abcdef";let n="0x";for(let r=0;r<e.length;r++)n+=t[e[r]>>4],n+=t[e[r]&15];return n}if(typeof e=="object"&&typeof e.toJSON=="function")return lo(e.toJSON());switch(typeof e){case"boolean":case"symbol":return e.toString();case"bigint":return BigInt(e).toString();case"number":return e.toString();case"string":return JSON.stringify(e);case"object":{const t=Object.keys(e);return t.sort(),"{ "+t.map(n=>`${lo(n)}: ${lo(e[n])}`).join(", ")+" }"}}return"[ COULD NOT SERIALIZE ]"}function AP(e,t,n){{const i=[];if(n){if("message"in n||"code"in n||"name"in n)throw new Error(`value will overwrite populated values: ${lo(n)}`);for(const o in n){const s=n[o];i.push(o+"="+lo(s))}}i.push(`code=${t}`),i.push(`version=${TP}`),i.length&&(e+=" ("+i.join(", ")+")")}let r;switch(t){case"INVALID_ARGUMENT":r=new TypeError(e);break;case"NUMERIC_FAULT":case"BUFFER_OVERRUN":r=new RangeError(e);break;default:r=new Error(e)}return Dy(r,{code:t}),n&&Object.assign(r,n),r}function nn(e,t,n,r){if(!e)throw AP(t,n,r)}function ft(e,t,n,r){nn(e,t,"INVALID_ARGUMENT",{argument:n,value:r})}["NFD","NFC","NFKD","NFKC"].reduce((e,t)=>{try{if("test".normalize(t)!=="test")throw new Error("bad");if(t==="NFD"){const n=String.fromCharCode(233).normalize("NFD"),r=String.fromCharCode(101,769);if(n!==r)throw new Error("broken")}e.push(t)}catch{}return e},[]);function $P(e,t,n){if(n==null&&(n=""),e!==t){let r=n,i="new";n&&(r+=".",i+=" "+n),nn(!1,`private constructor; use ${r}from* methods`,"UNSUPPORTED_OPERATION",{operation:i})}}function PP(e,t,n){if(e instanceof Uint8Array)return n?new Uint8Array(e):e;if(typeof e=="string"&&e.match(/^0x([0-9a-f][0-9a-f])*$/i)){const r=new Uint8Array((e.length-2)/2);let i=2;for(let o=0;o<r.length;o++)r[o]=parseInt(e.substring(i,i+2),16),i+=2;return r}ft(!1,"invalid BytesLike value",t||"value",e)}function OP(e,t){return PP(e,t,!1)}const Iy=BigInt(0),uo=BigInt(1),fo=9007199254740991;function i0(e,t){const n=Ry(e,"value"),r=BigInt(ps(t,"width"));if(nn(n>>r===Iy,"overflow","NUMERIC_FAULT",{operation:"fromTwos",fault:"overflow",value:e}),n>>r-uo){const i=(uo<<r)-uo;return-((~n&i)+uo)}return n}function Km(e,t){const n=Ry(e,"value"),r=BigInt(ps(t,"bits"));return n&(uo<<r)-uo}function lp(e,t){switch(typeof e){case"bigint":return e;case"number":return ft(Number.isInteger(e),"underflow",t||"value",e),ft(e>=-fo&&e<=fo,"overflow",t||"value",e),BigInt(e);case"string":try{if(e==="")throw new Error("empty string");return e[0]==="-"&&e[1]!=="-"?-BigInt(e.substring(1)):BigInt(e)}catch(n){ft(!1,`invalid BigNumberish string: ${n.message}`,t||"value",e)}}ft(!1,"invalid BigNumberish value",t||"value",e)}function Ry(e,t){const n=lp(e,t);return nn(n>=Iy,"unsigned value cannot be negative","NUMERIC_FAULT",{fault:"overflow",operation:"getUint",value:e}),n}const Zm="0123456789abcdef";function sr(e){if(e instanceof Uint8Array){let t="0x0";for(const n of e)t+=Zm[n>>4],t+=Zm[n&15];return BigInt(t)}return lp(e)}function ps(e,t){switch(typeof e){case"bigint":return ft(e>=-fo&&e<=fo,"overflow",t||"value",e),Number(e);case"number":return ft(Number.isInteger(e),"underflow",t||"value",e),ft(e>=-fo&&e<=fo,"overflow",t||"value",e),e;case"string":try{if(e==="")throw new Error("empty string");return ps(BigInt(e),t)}catch(n){ft(!1,`invalid numeric string: ${n.message}`,t||"value",e)}}ft(!1,"invalid numeric value",t||"value",e)}const DP=BigInt(-1),fn=BigInt(0),ho=BigInt(1),IP=BigInt(5),Qi={};let Co="0000";for(;Co.length<80;)Co+=Co;function hi(e){let t=Co;for(;t.length<e;)t+=t;return BigInt("1"+t.substring(0,e))}function As(e,t,n){const r=BigInt(t.width);if(t.signed){const i=ho<<r-ho;nn(n==null||e>=-i&&e<i,"overflow","NUMERIC_FAULT",{operation:n,fault:"overflow",value:e}),e>fn?e=i0(Km(e,r),r):e=-i0(Km(-e,r),r)}else{const i=ho<<r;nn(n==null||e>=0&&e<i,"overflow","NUMERIC_FAULT",{operation:n,fault:"overflow",value:e}),e=(e%i+i)%i&i-ho}return e}function Fd(e){typeof e=="number"&&(e=`fixed128x${e}`);let t=!0,n=128,r=18;if(typeof e=="string"){if(e!=="fixed")if(e==="ufixed")t=!1;else{const o=e.match(/^(u?)fixed([0-9]+)x([0-9]+)$/);ft(o,"invalid fixed format","format",e),t=o[1]!=="u",n=parseInt(o[2]),r=parseInt(o[3])}}else if(e){const o=e,s=(a,c,u)=>o[a]==null?u:(ft(typeof o[a]===c,"invalid fixed format ("+a+" not "+c+")","format."+a,o[a]),o[a]);t=s("signed","boolean",t),n=s("width","number",n),r=s("decimals","number",r)}ft(n%8===0,"invalid FixedNumber width (not byte aligned)","format.width",n),ft(r<=80,"invalid FixedNumber decimals (too large)","format.decimals",r);const i=(t?"":"u")+"fixed"+String(n)+"x"+String(r);return{signed:t,width:n,decimals:r,name:i}}function RP(e,t){let n="";e<fn&&(n="-",e*=DP);let r=e.toString();if(t===0)return n+r;for(;r.length<=t;)r=Co+r;const i=r.length-t;for(r=r.substring(0,i)+"."+r.substring(i);r[0]==="0"&&r[1]!==".";)r=r.substring(1);for(;r[r.length-1]==="0"&&r[r.length-2]!==".";)r=r.substring(0,r.length-1);return n+r}var hn,qe,Dt,ur,mi,pn,ar,ja,o0,Wa,s0,Ha,a0,za,c0;const Dr=class{constructor(t,n,r){Dn(this,ur);Dn(this,pn);Dn(this,ja);Dn(this,Wa);Dn(this,Ha);Dn(this,za);Yu(this,"format");Dn(this,hn,void 0);Dn(this,qe,void 0);Dn(this,Dt,void 0);Yu(this,"_value");$P(t,Qi,"FixedNumber"),mc(this,qe,n),mc(this,hn,r);const i=RP(n,r.decimals);Dy(this,{format:r.name,_value:i}),mc(this,Dt,hi(r.decimals))}get signed(){return Oe(this,hn).signed}get width(){return Oe(this,hn).width}get decimals(){return Oe(this,hn).decimals}get value(){return Oe(this,qe)}addUnsafe(t){return it(this,ja,o0).call(this,t)}add(t){return it(this,ja,o0).call(this,t,"add")}subUnsafe(t){return it(this,Wa,s0).call(this,t)}sub(t){return it(this,Wa,s0).call(this,t,"sub")}mulUnsafe(t){return it(this,Ha,a0).call(this,t)}mul(t){return it(this,Ha,a0).call(this,t,"mul")}mulSignal(t){it(this,ur,mi).call(this,t);const n=Oe(this,qe)*Oe(t,qe);return nn(n%Oe(this,Dt)===fn,"precision lost during signalling mul","NUMERIC_FAULT",{operation:"mulSignal",fault:"underflow",value:this}),it(this,pn,ar).call(this,n/Oe(this,Dt),"mulSignal")}divUnsafe(t){return it(this,za,c0).call(this,t)}div(t){return it(this,za,c0).call(this,t,"div")}divSignal(t){nn(Oe(t,qe)!==fn,"division by zero","NUMERIC_FAULT",{operation:"div",fault:"divide-by-zero",value:this}),it(this,ur,mi).call(this,t);const n=Oe(this,qe)*Oe(this,Dt);return nn(n%Oe(t,qe)===fn,"precision lost during signalling div","NUMERIC_FAULT",{operation:"divSignal",fault:"underflow",value:this}),it(this,pn,ar).call(this,n/Oe(t,qe),"divSignal")}cmp(t){let n=this.value,r=t.value;const i=this.decimals-t.decimals;return i>0?r*=hi(i):i<0&&(n*=hi(-i)),n<r?-1:n>r?1:0}eq(t){return this.cmp(t)===0}lt(t){return this.cmp(t)<0}lte(t){return this.cmp(t)<=0}gt(t){return this.cmp(t)>0}gte(t){return this.cmp(t)>=0}floor(){let t=Oe(this,qe);return Oe(this,qe)<fn&&(t-=Oe(this,Dt)-ho),t=Oe(this,qe)/Oe(this,Dt)*Oe(this,Dt),it(this,pn,ar).call(this,t,"floor")}ceiling(){let t=Oe(this,qe);return Oe(this,qe)>fn&&(t+=Oe(this,Dt)-ho),t=Oe(this,qe)/Oe(this,Dt)*Oe(this,Dt),it(this,pn,ar).call(this,t,"ceiling")}round(t){if(t==null&&(t=0),t>=this.decimals)return this;const n=this.decimals-t,r=IP*hi(n-1);let i=this.value+r;const o=hi(n);return i=i/o*o,As(i,Oe(this,hn),"round"),new Dr(Qi,i,Oe(this,hn))}isZero(){return Oe(this,qe)===fn}isNegative(){return Oe(this,qe)<fn}toString(){return this._value}toUnsafeFloat(){return parseFloat(this.toString())}toFormat(t){return Dr.fromString(this.toString(),t)}static fromValue(t,n,r){const i=n==null?0:ps(n),o=Fd(r);let s=lp(t,"value");const a=i-o.decimals;if(a>0){const c=hi(a);nn(s%c===fn,"value loses precision for format","NUMERIC_FAULT",{operation:"fromValue",fault:"underflow",value:t}),s/=c}else a<0&&(s*=hi(-a));return As(s,o,"fromValue"),new Dr(Qi,s,o)}static fromString(t,n){const r=t.match(/^(-?)([0-9]*)\.?([0-9]*)$/);ft(r&&r[2].length+r[3].length>0,"invalid FixedNumber string value","value",t);const i=Fd(n);let o=r[2]||"0",s=r[3]||"";for(;s.length<i.decimals;)s+=Co;nn(s.substring(i.decimals).match(/^0*$/),"too many decimals for format","NUMERIC_FAULT",{operation:"fromString",fault:"underflow",value:t}),s=s.substring(0,i.decimals);const a=BigInt(r[1]+o+s);return As(a,i,"fromString"),new Dr(Qi,a,i)}static fromBytes(t,n){let r=sr(OP(t,"value"));const i=Fd(n);return i.signed&&(r=i0(r,i.width)),As(r,i,"fromBytes"),new Dr(Qi,r,i)}};let Ll=Dr;hn=new WeakMap,qe=new WeakMap,Dt=new WeakMap,ur=new WeakSet,mi=function(t){ft(this.format===t.format,"incompatible format; use fixedNumber.toFormat","other",t)},pn=new WeakSet,ar=function(t,n){return t=As(t,Oe(this,hn),n),new Dr(Qi,t,Oe(this,hn))},ja=new WeakSet,o0=function(t,n){return it(this,ur,mi).call(this,t),it(this,pn,ar).call(this,Oe(this,qe)+Oe(t,qe),n)},Wa=new WeakSet,s0=function(t,n){return it(this,ur,mi).call(this,t),it(this,pn,ar).call(this,Oe(this,qe)-Oe(t,qe),n)},Ha=new WeakSet,a0=function(t,n){return it(this,ur,mi).call(this,t),it(this,pn,ar).call(this,Oe(this,qe)*Oe(t,qe)/Oe(this,Dt),n)},za=new WeakSet,c0=function(t,n){return nn(Oe(t,qe)!==fn,"division by zero","NUMERIC_FAULT",{operation:"div",fault:"divide-by-zero",value:this}),it(this,ur,mi).call(this,t),it(this,pn,ar).call(this,Oe(this,qe)*Oe(this,Dt)/Oe(t,qe),n)};const Ny=["wei","kwei","mwei","gwei","szabo","finney","ether"];function Mt(e,t){let n=18;if(typeof t=="string"){const r=Ny.indexOf(t);ft(r>=0,"invalid unit","unit",t),n=3*r}else t!=null&&(n=ps(t,"unit"));return Ll.fromValue(e,n,{decimals:n}).toString()}function Ls(e,t){ft(typeof e=="string","value must be a string","value",e);let n=18;if(typeof t=="string"){const r=Ny.indexOf(t);ft(r>=0,"invalid unit","unit",t),n=3*r}else t!=null&&(n=ps(t,"unit"));return Ll.fromString(e,{decimals:n}).value}function Mn(e){return Ls(e,18)}const NP=[{inputs:[{internalType:"address",name:"uniswapRouterAddress",type:"address"},{internalType:"address",name:"CAROLTokenAddress",type:"address"},{internalType:"address",name:"lpTokenAddress",type:"address"},{internalType:"address",name:"defaultUpline",type:"address"}],stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"userAddress",type:"address"},{indexed:!0,internalType:"address",name:"receiverAddress",type:"address"},{indexed:!1,internalType:"uint256",name:"tokensAmount",type:"uint256"},{indexed:!1,internalType:"uint256",name:"time",type:"uint256"}],name:"Claim",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"uint256",name:"amountToken",type:"uint256"},{indexed:!1,internalType:"uint256",name:"amountETH",type:"uint256"},{indexed:!1,internalType:"uint256",name:"liquidity",type:"uint256"},{indexed:!1,internalType:"uint256",name:"time",type:"uint256"}],name:"LiquidityAdded",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"userAddress",type:"address"},{indexed:!0,internalType:"uint8",name:"bondType",type:"uint8"},{indexed:!0,internalType:"uint8",name:"bondIndex",type:"uint8"},{indexed:!1,internalType:"uint256",name:"amount",type:"uint256"},{indexed:!1,internalType:"uint256",name:"tokensAmount",type:"uint256"},{indexed:!1,internalType:"bool",name:"isRebond",type:"bool"},{indexed:!1,internalType:"uint256",name:"time",type:"uint256"}],name:"NewBond",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"userAddress",type:"address"},{indexed:!0,internalType:"address",name:"upline",type:"address"},{indexed:!1,internalType:"uint256",name:"time",type:"uint256"}],name:"NewUser",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"previousOwner",type:"address"},{indexed:!0,internalType:"address",name:"newOwner",type:"address"}],name:"OwnershipTransferred",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"address",name:"account",type:"address"}],name:"Paused",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"userAddress",type:"address"},{indexed:!0,internalType:"uint8",name:"bondIndex",type:"uint8"},{indexed:!1,internalType:"uint256",name:"amount",type:"uint256"},{indexed:!1,internalType:"uint256",name:"tokensAmount",type:"uint256"},{indexed:!1,internalType:"uint256",name:"time",type:"uint256"}],name:"ReBond",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"investor",type:"address"},{indexed:!0,internalType:"address",name:"upline",type:"address"},{indexed:!0,internalType:"uint256",name:"level",type:"uint256"},{indexed:!1,internalType:"uint256",name:"amount",type:"uint256"},{indexed:!1,internalType:"uint256",name:"time",type:"uint256"}],name:"RefPayout",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"userAddress",type:"address"},{indexed:!1,internalType:"uint256",name:"tokensAmount",type:"uint256"},{indexed:!1,internalType:"uint256",name:"ethAmount",type:"uint256"},{indexed:!1,internalType:"uint256",name:"time",type:"uint256"}],name:"Sell",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"userAddress",type:"address"},{indexed:!0,internalType:"uint8",name:"bondIndex",type:"uint8"},{indexed:!1,internalType:"uint256",name:"amountToken",type:"uint256"},{indexed:!1,internalType:"uint256",name:"amountETH",type:"uint256"},{indexed:!1,internalType:"uint256",name:"time",type:"uint256"}],name:"StakeBond",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"userAddress",type:"address"},{indexed:!0,internalType:"uint8",name:"bondIndex",type:"uint8"},{indexed:!1,internalType:"uint256",name:"amountToken",type:"uint256"},{indexed:!1,internalType:"uint256",name:"time",type:"uint256"}],name:"Transfer",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"address",name:"account",type:"address"}],name:"Unpaused",type:"event"},{inputs:[{internalType:"uint256",name:"",type:"uint256"}],name:"BOND_ACTIVATIONS",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"",type:"uint256"}],name:"BOND_FREEZE_PERCENTS",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"",type:"uint256"}],name:"BOND_FREEZE_PERIODS",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"DEFAULT_UPLINE",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"LP_TOKEN_ADDRESS",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"REFERRAL_DEPTH",outputs:[{internalType:"uint8",name:"",type:"uint8"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"",type:"uint256"}],name:"REFERRAL_LEVELS_MILESTONES",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"",type:"uint256"}],name:"REFERRAL_LEVELS_PERCENTS",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"REFERRAL_TURNOVER_DEPTH",outputs:[{internalType:"uint8",name:"",type:"uint8"}],stateMutability:"view",type:"function"},{inputs:[],name:"TOKEN_ADDRESS",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"UNISWAP_ROUTER_ADDRESS",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint8",name:"bondType",type:"uint8"}],name:"activateBondType",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"moderator",type:"address"}],name:"addModerator",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"",type:"address"},{internalType:"uint8",name:"",type:"uint8"}],name:"bonds",outputs:[{internalType:"uint256",name:"amount",type:"uint256"},{internalType:"uint256",name:"creationTime",type:"uint256"},{internalType:"uint256",name:"freezePeriod",type:"uint256"},{internalType:"uint256",name:"profitPercent",type:"uint256"},{internalType:"uint256",name:"stakeAmount",type:"uint256"},{internalType:"uint256",name:"stakeTime",type:"uint256"},{internalType:"uint256",name:"collectedTime",type:"uint256"},{internalType:"uint256",name:"collectedReward",type:"uint256"},{internalType:"uint256",name:"stakingRewardLimit",type:"uint256"},{internalType:"bool",name:"isClosed",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"upline",type:"address"},{internalType:"uint8",name:"bondType",type:"uint8"}],name:"buy",outputs:[],stateMutability:"payable",type:"function"},{inputs:[{internalType:"uint256",name:"percent",type:"uint256"}],name:"changePriceBalancerPercent",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"tokensAmount",type:"uint256"},{internalType:"address",name:"receiver",type:"address"}],name:"claim",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"collect",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint8",name:"bondType",type:"uint8"}],name:"deactivateBondType",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"tokensAmount",type:"uint256"}],name:"getETHAmount",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"userAddr",type:"address"}],name:"getHoldBonusPercent",outputs:[{internalType:"uint256",name:"bonusPercent",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"userAddr",type:"address"}],name:"getLiquidityBonusPercent",outputs:[{internalType:"uint256",name:"bonusPercent",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"getLiquidityGlobalBonusPercent",outputs:[{internalType:"uint256",name:"bonusPercent",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"getTokenLiquidity",outputs:[{internalType:"uint256",name:"liquidityETH",type:"uint256"},{internalType:"uint256",name:"liquidityERC20",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"amount",type:"uint256"}],name:"getTokensAmount",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"userAddr",type:"address"}],name:"getUIData",outputs:[{components:[{internalType:"address",name:"upline",type:"address"},{internalType:"uint8",name:"refLevel",type:"uint8"},{internalType:"uint8",name:"bondsNumber",type:"uint8"},{internalType:"uint256",name:"balance",type:"uint256"},{internalType:"uint256",name:"totalInvested",type:"uint256"},{internalType:"uint256",name:"liquidityCreated",type:"uint256"},{internalType:"uint256",name:"totalRefReward",type:"uint256"},{internalType:"uint256",name:"totalWithdrawn",type:"uint256"},{internalType:"uint256",name:"refTurnover",type:"uint256"},{internalType:"uint256",name:"lastActionTime",type:"uint256"},{internalType:"address[]",name:"referrals",type:"address[]"},{internalType:"uint256[10]",name:"refs",type:"uint256[10]"},{internalType:"uint256[10]",name:"refsNumber",type:"uint256[10]"}],internalType:"struct Models.User",name:"user",type:"tuple"},{internalType:"uint256",name:"userTokensBalance",type:"uint256"},{internalType:"uint256",name:"userHoldBonus",type:"uint256"},{internalType:"uint256",name:"userLiquidityBonus",type:"uint256"},{internalType:"uint256",name:"globalLiquidityBonus",type:"uint256"},{internalType:"bool[5]",name:"bondActivations",type:"bool[5]"},{internalType:"address[]",name:"userReferrals",type:"address[]"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"userAddr",type:"address"},{internalType:"uint256",name:"tokensAmount",type:"uint256"},{internalType:"address",name:"upline",type:"address"}],name:"influencerBond",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"",type:"address"}],name:"moderators",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"owner",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"pause",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"paused",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokensAmount",type:"uint256"},{internalType:"address",name:"receiver",type:"address"}],name:"rebond",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"moderator",type:"address"}],name:"removeModerator",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"renounceOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"tokensAmount",type:"uint256"}],name:"sell",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint8",name:"bondIdx",type:"uint8"}],name:"stake",outputs:[],stateMutability:"payable",type:"function"},{inputs:[{internalType:"uint8",name:"swaps",type:"uint8"}],name:"swap",outputs:[],stateMutability:"payable",type:"function"},{inputs:[{internalType:"uint8",name:"bondIdx",type:"uint8"}],name:"transfer",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"newOwner",type:"address"}],name:"transferOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"unpause",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"userAddress",type:"address"}],name:"userBalance",outputs:[{internalType:"uint256",name:"balance",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"",type:"address"}],name:"users",outputs:[{internalType:"address",name:"upline",type:"address"},{internalType:"uint8",name:"refLevel",type:"uint8"},{internalType:"uint8",name:"bondsNumber",type:"uint8"},{internalType:"uint256",name:"balance",type:"uint256"},{internalType:"uint256",name:"totalInvested",type:"uint256"},{internalType:"uint256",name:"liquidityCreated",type:"uint256"},{internalType:"uint256",name:"totalRefReward",type:"uint256"},{internalType:"uint256",name:"totalWithdrawn",type:"uint256"},{internalType:"uint256",name:"refTurnover",type:"uint256"},{internalType:"uint256",name:"lastActionTime",type:"uint256"}],stateMutability:"view",type:"function"},{stateMutability:"payable",type:"receive"}],Jm=[{inputs:[{internalType:"address",name:"uniswapRouterAddress",type:"address"},{internalType:"address",name:"CAROLTokenAddress",type:"address"},{internalType:"address",name:"lpTokenAddress",type:"address"},{internalType:"address",name:"defaultUpline",type:"address"}],stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"previousOwner",type:"address"},{indexed:!0,internalType:"address",name:"newOwner",type:"address"}],name:"OwnershipTransferred",type:"event"},{inputs:[],name:"TOKEN_ADDRESS",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"",type:"uint256"}],name:"BOND_ACTIVATIONS",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"",type:"uint256"}],name:"BOND_FREEZE_PERCENTS",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"",type:"uint256"}],name:"BOND_FREEZE_PERIODS",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"DEFAULT_UPLINE",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"LP_TOKEN_ADDRESS",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"REFERRAL_DEPTH",outputs:[{internalType:"uint8",name:"",type:"uint8"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"",type:"uint256"}],name:"REFERRAL_LEVELS_MILESTONES",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"",type:"uint256"}],name:"REFERRAL_LEVELS_PERCENTS",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"REFERRAL_TURNOVER_DEPTH",outputs:[{internalType:"uint8",name:"",type:"uint8"}],stateMutability:"view",type:"function"},{inputs:[],name:"UNISWAP_ROUTER_ADDRESS",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint8",name:"bondType",type:"uint8"}],name:"activateBondType",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"",type:"address"},{internalType:"uint8",name:"",type:"uint8"}],name:"bonds",outputs:[{internalType:"uint256",name:"amount",type:"uint256"},{internalType:"uint256",name:"creationTime",type:"uint256"},{internalType:"uint256",name:"freezePeriod",type:"uint256"},{internalType:"uint256",name:"profitPercent",type:"uint256"},{internalType:"uint256",name:"stakeAmount",type:"uint256"},{internalType:"uint256",name:"stakeTime",type:"uint256"},{internalType:"uint256",name:"collectedTime",type:"uint256"},{internalType:"uint256",name:"collectedReward",type:"uint256"},{internalType:"uint256",name:"stakingRewardLimit",type:"uint256"},{internalType:"bool",name:"isClosed",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"upline",type:"address"},{internalType:"uint8",name:"bondType",type:"uint8"}],name:"buy",outputs:[],stateMutability:"payable",type:"function"},{inputs:[{internalType:"uint256",name:"percent",type:"uint256"}],name:"changePriceBalancerPercent",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"tokensAmount",type:"uint256"}],name:"claim",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint8",name:"bondType",type:"uint8"}],name:"deactivateBondType",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"tokensAmount",type:"uint256"}],name:"getETHAmount",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"userAddr",type:"address"}],name:"getHoldBonusPercent",outputs:[{internalType:"uint256",name:"bonusPercent",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"userAddr",type:"address"}],name:"getLiquidityBonusPercent",outputs:[{internalType:"uint256",name:"bonusPercent",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"getLiquidityGlobalBonusPercent",outputs:[{internalType:"uint256",name:"bonusPercent",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"getTokenLiquidity",outputs:[{internalType:"uint256",name:"liquidityETH",type:"uint256"},{internalType:"uint256",name:"liquidityERC20",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"amount",type:"uint256"}],name:"getTokensAmount",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"userAddr",type:"address"}],name:"getUIData",outputs:[{components:[{internalType:"address",name:"upline",type:"address"},{internalType:"uint8",name:"refLevel",type:"uint8"},{internalType:"uint8",name:"bondsNumber",type:"uint8"},{internalType:"uint256",name:"balance",type:"uint256"},{internalType:"uint256",name:"totalInvested",type:"uint256"},{internalType:"uint256",name:"liquidityCreated",type:"uint256"},{internalType:"uint256",name:"totalRefReward",type:"uint256"},{internalType:"uint256",name:"totalWithdrawn",type:"uint256"},{internalType:"uint256",name:"refTurnover",type:"uint256"},{internalType:"uint256",name:"lastActionTime",type:"uint256"},{internalType:"address[]",name:"referrals",type:"address[]"},{internalType:"uint256[10]",name:"refs",type:"uint256[10]"},{internalType:"uint256[10]",name:"refsNumber",type:"uint256[10]"}],internalType:"struct Models.User",name:"user",type:"tuple"},{internalType:"uint256",name:"userTokensBalance",type:"uint256"},{internalType:"uint256",name:"userHoldBonus",type:"uint256"},{internalType:"uint256",name:"userLiquidityBonus",type:"uint256"},{internalType:"uint256",name:"globalLiquidityBonus",type:"uint256"},{internalType:"bool[5]",name:"bondActivations",type:"bool[5]"},{internalType:"address[]",name:"userReferrals",type:"address[]"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"userAddr",type:"address"},{internalType:"uint256",name:"tokensAmount",type:"uint256"}],name:"influencerBond",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"owner",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokensAmount",type:"uint256"}],name:"rebond",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"renounceOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"amount",type:"uint256"}],name:"retrieve",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"tokenAddress",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"retrieveERC20",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"tokensAmount",type:"uint256"}],name:"sell",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint8",name:"bondIdx",type:"uint8"}],name:"stake",outputs:[],stateMutability:"payable",type:"function"},{inputs:[{internalType:"uint8",name:"swaps",type:"uint8"}],name:"swap",outputs:[],stateMutability:"payable",type:"function"},{inputs:[{internalType:"uint8",name:"bondIdx",type:"uint8"}],name:"transfer",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"newOwner",type:"address"}],name:"transferOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"userAddress",type:"address"}],name:"userBalance",outputs:[{internalType:"uint256",name:"balance",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"",type:"address"}],name:"users",outputs:[{internalType:"address",name:"upline",type:"address"},{internalType:"uint8",name:"refLevel",type:"uint8"},{internalType:"uint8",name:"bondsNumber",type:"uint8"},{internalType:"uint256",name:"balance",type:"uint256"},{internalType:"uint256",name:"totalInvested",type:"uint256"},{internalType:"uint256",name:"liquidityCreated",type:"uint256"},{internalType:"uint256",name:"totalRefReward",type:"uint256"},{internalType:"uint256",name:"totalWithdrawn",type:"uint256"},{internalType:"uint256",name:"refTurnover",type:"uint256"},{internalType:"uint256",name:"lastActionTime",type:"uint256"}],stateMutability:"view",type:"function"},{stateMutability:"payable",type:"receive"}],Ym=[{inputs:[{internalType:"address",name:"uniswapRouterAddress",type:"address"}],stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"spender",type:"address"},{indexed:!1,internalType:"uint256",name:"value",type:"uint256"}],name:"Approval",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"previousOwner",type:"address"},{indexed:!0,internalType:"address",name:"newOwner",type:"address"}],name:"OwnershipTransferred",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"from",type:"address"},{indexed:!0,internalType:"address",name:"to",type:"address"},{indexed:!1,internalType:"uint256",name:"value",type:"uint256"}],name:"Transfer",type:"event"},{inputs:[],name:"LP_TOKEN_ADDRESS",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"UNISWAP_ROUTER_ADDRESS",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"owner",type:"address"},{internalType:"address",name:"spender",type:"address"}],name:"allowance",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"approve",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"}],name:"balanceOf",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"amount",type:"uint256"}],name:"burn",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"burnFrom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"decimals",outputs:[{internalType:"uint8",name:"",type:"uint8"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"subtractedValue",type:"uint256"}],name:"decreaseAllowance",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"addedValue",type:"uint256"}],name:"increaseAllowance",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"mainContractAddress",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"mint",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"name",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"owner",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"renounceOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"lpTokenAddress",type:"address"}],name:"setLPTokenAddress",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"contractAddress",type:"address"}],name:"setMainContractAddress",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"symbol",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"totalSupply",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"transfer",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"transferFrom",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"newOwner",type:"address"}],name:"transferOwnership",outputs:[],stateMutability:"nonpayable",type:"function"}],Xm=[{inputs:[],payable:!1,stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"spender",type:"address"},{indexed:!1,internalType:"uint256",name:"value",type:"uint256"}],name:"Approval",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"sender",type:"address"},{indexed:!1,internalType:"uint256",name:"amount0",type:"uint256"},{indexed:!1,internalType:"uint256",name:"amount1",type:"uint256"},{indexed:!0,internalType:"address",name:"to",type:"address"}],name:"Burn",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"sender",type:"address"},{indexed:!1,internalType:"uint256",name:"amount0",type:"uint256"},{indexed:!1,internalType:"uint256",name:"amount1",type:"uint256"}],name:"Mint",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"sender",type:"address"},{indexed:!1,internalType:"uint256",name:"amount0In",type:"uint256"},{indexed:!1,internalType:"uint256",name:"amount1In",type:"uint256"},{indexed:!1,internalType:"uint256",name:"amount0Out",type:"uint256"},{indexed:!1,internalType:"uint256",name:"amount1Out",type:"uint256"},{indexed:!0,internalType:"address",name:"to",type:"address"}],name:"Swap",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"uint112",name:"reserve0",type:"uint112"},{indexed:!1,internalType:"uint112",name:"reserve1",type:"uint112"}],name:"Sync",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"from",type:"address"},{indexed:!0,internalType:"address",name:"to",type:"address"},{indexed:!1,internalType:"uint256",name:"value",type:"uint256"}],name:"Transfer",type:"event"},{constant:!0,inputs:[],name:"DOMAIN_SEPARATOR",outputs:[{internalType:"bytes32",name:"",type:"bytes32"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"MINIMUM_LIQUIDITY",outputs:[{internalType:"uint256",name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"PERMIT_TYPEHASH",outputs:[{internalType:"bytes32",name:"",type:"bytes32"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{internalType:"address",name:"",type:"address"},{internalType:"address",name:"",type:"address"}],name:"allowance",outputs:[{internalType:"uint256",name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"value",type:"uint256"}],name:"approve",outputs:[{internalType:"bool",name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[{internalType:"address",name:"",type:"address"}],name:"balanceOf",outputs:[{internalType:"uint256",name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{internalType:"address",name:"to",type:"address"}],name:"burn",outputs:[{internalType:"uint256",name:"amount0",type:"uint256"},{internalType:"uint256",name:"amount1",type:"uint256"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"decimals",outputs:[{internalType:"uint8",name:"",type:"uint8"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"factory",outputs:[{internalType:"address",name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"getReserves",outputs:[{internalType:"uint112",name:"_reserve0",type:"uint112"},{internalType:"uint112",name:"_reserve1",type:"uint112"},{internalType:"uint32",name:"_blockTimestampLast",type:"uint32"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{internalType:"address",name:"_token0",type:"address"},{internalType:"address",name:"_token1",type:"address"}],name:"initialize",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"kLast",outputs:[{internalType:"uint256",name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{internalType:"address",name:"to",type:"address"}],name:"mint",outputs:[{internalType:"uint256",name:"liquidity",type:"uint256"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"name",outputs:[{internalType:"string",name:"",type:"string"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{internalType:"address",name:"",type:"address"}],name:"nonces",outputs:[{internalType:"uint256",name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{internalType:"address",name:"owner",type:"address"},{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"value",type:"uint256"},{internalType:"uint256",name:"deadline",type:"uint256"},{internalType:"uint8",name:"v",type:"uint8"},{internalType:"bytes32",name:"r",type:"bytes32"},{internalType:"bytes32",name:"s",type:"bytes32"}],name:"permit",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"price0CumulativeLast",outputs:[{internalType:"uint256",name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"price1CumulativeLast",outputs:[{internalType:"uint256",name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{internalType:"address",name:"to",type:"address"}],name:"skim",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{internalType:"uint256",name:"amount0Out",type:"uint256"},{internalType:"uint256",name:"amount1Out",type:"uint256"},{internalType:"address",name:"to",type:"address"},{internalType:"bytes",name:"data",type:"bytes"}],name:"swap",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"symbol",outputs:[{internalType:"string",name:"",type:"string"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[],name:"sync",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"token0",outputs:[{internalType:"address",name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"token1",outputs:[{internalType:"address",name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"totalSupply",outputs:[{internalType:"uint256",name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"value",type:"uint256"}],name:"transfer",outputs:[{internalType:"bool",name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"value",type:"uint256"}],name:"transferFrom",outputs:[{internalType:"bool",name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"}],Qm=[{inputs:[{internalType:"address",name:"_factory",type:"address"},{internalType:"address",name:"_WETH",type:"address"}],stateMutability:"nonpayable",type:"constructor"},{inputs:[],name:"WETH",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"tokenA",type:"address"},{internalType:"address",name:"tokenB",type:"address"},{internalType:"uint256",name:"amountADesired",type:"uint256"},{internalType:"uint256",name:"amountBDesired",type:"uint256"},{internalType:"uint256",name:"amountAMin",type:"uint256"},{internalType:"uint256",name:"amountBMin",type:"uint256"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"deadline",type:"uint256"}],name:"addLiquidity",outputs:[{internalType:"uint256",name:"amountA",type:"uint256"},{internalType:"uint256",name:"amountB",type:"uint256"},{internalType:"uint256",name:"liquidity",type:"uint256"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"token",type:"address"},{internalType:"uint256",name:"amountTokenDesired",type:"uint256"},{internalType:"uint256",name:"amountTokenMin",type:"uint256"},{internalType:"uint256",name:"amountETHMin",type:"uint256"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"deadline",type:"uint256"}],name:"addLiquidityETH",outputs:[{internalType:"uint256",name:"amountToken",type:"uint256"},{internalType:"uint256",name:"amountETH",type:"uint256"},{internalType:"uint256",name:"liquidity",type:"uint256"}],stateMutability:"payable",type:"function"},{inputs:[],name:"factory",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"amountOut",type:"uint256"},{internalType:"uint256",name:"reserveIn",type:"uint256"},{internalType:"uint256",name:"reserveOut",type:"uint256"}],name:"getAmountIn",outputs:[{internalType:"uint256",name:"amountIn",type:"uint256"}],stateMutability:"pure",type:"function"},{inputs:[{internalType:"uint256",name:"amountIn",type:"uint256"},{internalType:"uint256",name:"reserveIn",type:"uint256"},{internalType:"uint256",name:"reserveOut",type:"uint256"}],name:"getAmountOut",outputs:[{internalType:"uint256",name:"amountOut",type:"uint256"}],stateMutability:"pure",type:"function"},{inputs:[{internalType:"uint256",name:"amountOut",type:"uint256"},{internalType:"address[]",name:"path",type:"address[]"}],name:"getAmountsIn",outputs:[{internalType:"uint256[]",name:"amounts",type:"uint256[]"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"amountIn",type:"uint256"},{internalType:"address[]",name:"path",type:"address[]"}],name:"getAmountsOut",outputs:[{internalType:"uint256[]",name:"amounts",type:"uint256[]"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"amountA",type:"uint256"},{internalType:"uint256",name:"reserveA",type:"uint256"},{internalType:"uint256",name:"reserveB",type:"uint256"}],name:"quote",outputs:[{internalType:"uint256",name:"amountB",type:"uint256"}],stateMutability:"pure",type:"function"},{inputs:[{internalType:"address",name:"tokenA",type:"address"},{internalType:"address",name:"tokenB",type:"address"},{internalType:"uint256",name:"liquidity",type:"uint256"},{internalType:"uint256",name:"amountAMin",type:"uint256"},{internalType:"uint256",name:"amountBMin",type:"uint256"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"deadline",type:"uint256"}],name:"removeLiquidity",outputs:[{internalType:"uint256",name:"amountA",type:"uint256"},{internalType:"uint256",name:"amountB",type:"uint256"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"token",type:"address"},{internalType:"uint256",name:"liquidity",type:"uint256"},{internalType:"uint256",name:"amountTokenMin",type:"uint256"},{internalType:"uint256",name:"amountETHMin",type:"uint256"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"deadline",type:"uint256"}],name:"removeLiquidityETH",outputs:[{internalType:"uint256",name:"amountToken",type:"uint256"},{internalType:"uint256",name:"amountETH",type:"uint256"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"token",type:"address"},{internalType:"uint256",name:"liquidity",type:"uint256"},{internalType:"uint256",name:"amountTokenMin",type:"uint256"},{internalType:"uint256",name:"amountETHMin",type:"uint256"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"deadline",type:"uint256"}],name:"removeLiquidityETHSupportingFeeOnTransferTokens",outputs:[{internalType:"uint256",name:"amountETH",type:"uint256"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"token",type:"address"},{internalType:"uint256",name:"liquidity",type:"uint256"},{internalType:"uint256",name:"amountTokenMin",type:"uint256"},{internalType:"uint256",name:"amountETHMin",type:"uint256"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"deadline",type:"uint256"},{internalType:"bool",name:"approveMax",type:"bool"},{internalType:"uint8",name:"v",type:"uint8"},{internalType:"bytes32",name:"r",type:"bytes32"},{internalType:"bytes32",name:"s",type:"bytes32"}],name:"removeLiquidityETHWithPermit",outputs:[{internalType:"uint256",name:"amountToken",type:"uint256"},{internalType:"uint256",name:"amountETH",type:"uint256"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"token",type:"address"},{internalType:"uint256",name:"liquidity",type:"uint256"},{internalType:"uint256",name:"amountTokenMin",type:"uint256"},{internalType:"uint256",name:"amountETHMin",type:"uint256"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"deadline",type:"uint256"},{internalType:"bool",name:"approveMax",type:"bool"},{internalType:"uint8",name:"v",type:"uint8"},{internalType:"bytes32",name:"r",type:"bytes32"},{internalType:"bytes32",name:"s",type:"bytes32"}],name:"removeLiquidityETHWithPermitSupportingFeeOnTransferTokens",outputs:[{internalType:"uint256",name:"amountETH",type:"uint256"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"tokenA",type:"address"},{internalType:"address",name:"tokenB",type:"address"},{internalType:"uint256",name:"liquidity",type:"uint256"},{internalType:"uint256",name:"amountAMin",type:"uint256"},{internalType:"uint256",name:"amountBMin",type:"uint256"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"deadline",type:"uint256"},{internalType:"bool",name:"approveMax",type:"bool"},{internalType:"uint8",name:"v",type:"uint8"},{internalType:"bytes32",name:"r",type:"bytes32"},{internalType:"bytes32",name:"s",type:"bytes32"}],name:"removeLiquidityWithPermit",outputs:[{internalType:"uint256",name:"amountA",type:"uint256"},{internalType:"uint256",name:"amountB",type:"uint256"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"amountOut",type:"uint256"},{internalType:"address[]",name:"path",type:"address[]"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"deadline",type:"uint256"}],name:"swapETHForExactTokens",outputs:[{internalType:"uint256[]",name:"amounts",type:"uint256[]"}],stateMutability:"payable",type:"function"},{inputs:[{internalType:"uint256",name:"amountOutMin",type:"uint256"},{internalType:"address[]",name:"path",type:"address[]"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"deadline",type:"uint256"}],name:"swapExactETHForTokens",outputs:[{internalType:"uint256[]",name:"amounts",type:"uint256[]"}],stateMutability:"payable",type:"function"},{inputs:[{internalType:"uint256",name:"amountOutMin",type:"uint256"},{internalType:"address[]",name:"path",type:"address[]"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"deadline",type:"uint256"}],name:"swapExactETHForTokensSupportingFeeOnTransferTokens",outputs:[],stateMutability:"payable",type:"function"},{inputs:[{internalType:"uint256",name:"amountIn",type:"uint256"},{internalType:"uint256",name:"amountOutMin",type:"uint256"},{internalType:"address[]",name:"path",type:"address[]"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"deadline",type:"uint256"}],name:"swapExactTokensForETH",outputs:[{internalType:"uint256[]",name:"amounts",type:"uint256[]"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"amountIn",type:"uint256"},{internalType:"uint256",name:"amountOutMin",type:"uint256"},{internalType:"address[]",name:"path",type:"address[]"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"deadline",type:"uint256"}],name:"swapExactTokensForETHSupportingFeeOnTransferTokens",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"amountIn",type:"uint256"},{internalType:"uint256",name:"amountOutMin",type:"uint256"},{internalType:"address[]",name:"path",type:"address[]"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"deadline",type:"uint256"}],name:"swapExactTokensForTokens",outputs:[{internalType:"uint256[]",name:"amounts",type:"uint256[]"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"amountIn",type:"uint256"},{internalType:"uint256",name:"amountOutMin",type:"uint256"},{internalType:"address[]",name:"path",type:"address[]"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"deadline",type:"uint256"}],name:"swapExactTokensForTokensSupportingFeeOnTransferTokens",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"amountOut",type:"uint256"},{internalType:"uint256",name:"amountInMax",type:"uint256"},{internalType:"address[]",name:"path",type:"address[]"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"deadline",type:"uint256"}],name:"swapTokensForExactETH",outputs:[{internalType:"uint256[]",name:"amounts",type:"uint256[]"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"amountOut",type:"uint256"},{internalType:"uint256",name:"amountInMax",type:"uint256"},{internalType:"address[]",name:"path",type:"address[]"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"deadline",type:"uint256"}],name:"swapTokensForExactTokens",outputs:[{internalType:"uint256[]",name:"amounts",type:"uint256[]"}],stateMutability:"nonpayable",type:"function"},{stateMutability:"payable",type:"receive"}],eg={id:"8453",name:"Base Mainnet",network:"base",nativeCurrency:{decimals:18,name:"Ethereum",symbol:"ETH"},rpcUrls:{default:{http:["https://base.llamarpc.com"]},public:{http:["https://base.llamarpc.com"]}},blockExplorers:{etherscan:{name:"BaseScan",url:"https://basescan.org"},default:{name:"BaseScan",url:"https://basescan.org"}}},kP={id:8453,name:"Base Mainnet",network:"base",nativeCurrency:{decimals:18,name:"Ethereum",symbol:"ETH"},rpcUrls:{default:{http:["https://base.llamarpc.com"]},public:{http:["https://base.llamarpc.com"]}},blockExplorers:{etherscan:{name:"BaseScan",url:"https://basescan.org"},default:{name:"BaseScan",url:"https://basescan.org"}}};class MP{constructor(t){this.context=t,this.init()}async init(){this.chains=[ld,eg],this.defaultChains=[ld];const t="59e3161a3414729703d9cf5848b96830",{chains:n,publicClient:r}=qx([ld,eg,kP],[CP({projectId:t}),xP()]),i={name:"Carol.Finance",description:"Carol.Finance",url:"https://carol.finance",icons:["https://avatars.githubusercontent.com/u/37784886"]},o=i_({autoConnect:!0,connectors:[new vP({chains:n,options:{projectId:t,showQrModal:!1,metadata:i}}),new Fw({chains:n,options:{shimDisconnect:!0}}),new YT({chains:n,options:{appName:i.name}})],publicClient:r});this.web3modal=EP({wagmiConfig:o,projectId:t,chains:n}),this.web3modal.subscribeState(({open:s})=>{this.context.$store.commit("setIsConnecting",s)})}async fetchContractDataInLoop(t,n=3e4){await this.fetchContractData(t),this.fetchContractDataInterval||(this.fetchContractDataInterval=setInterval(async()=>{await this.fetchContractData(t)},n))}async fetchUserDataInLoop(t,n,r=3e4){await this.fetchUserData(t,n),this.fetchUserDataInterval||(this.fetchUserDataInterval=setInterval(async()=>{await this.fetchUserData(t,n)},r))}stopIntervals(){window.clearInterval(this.fetchUserDataInterval),this.fetchUserDataInterval=null,window.clearInterval(this.fetchContractDataInterval),this.fetchContractDataInterval=null}async getCurrentRate(){let t=this,n;const r=new Date,i=Date.UTC(r.getUTCFullYear(),r.getUTCMonth(),r.getUTCDate(),r.getUTCHours(),r.getUTCMinutes(),r.getUTCSeconds(),r.getUTCMilliseconds());try{Number(t.context.chainId)===8453?localStorage.getItem("rate")&&localStorage.getItem("rateTimeStamp")?localStorage.getItem("rateTimeStamp")&&i<=+localStorage.getItem("rateTimeStamp")+3e5?t.context.$store.commit("setRate",localStorage.getItem("rate")):localStorage.getItem("rateTimeStamp")&&i>+localStorage.getItem("rateTimeStamp")+3e5&&(n=await t.getLatestBnbToUsdRate(),localStorage.setItem("rate",n),localStorage.setItem("rateTimeStamp",i),t.context.$store.commit("setRate",n)):(n=await t.getLatestBnbToUsdRate(),localStorage.setItem("rate",n),localStorage.setItem("rateTimeStamp",i),t.context.$store.commit("setRate",n)):(Number(t.context.chainId)===56||!t.context.chainId)&&(localStorage.getItem("rateBnb")&&localStorage.getItem("rateBnbTimeStamp")?localStorage.getItem("rateBnbTimeStamp")&&i<=+localStorage.getItem("rateBnbTimeStamp")+3e5?t.context.$store.commit("setRate",localStorage.getItem("rateBnb")):localStorage.getItem("rateBnbTimeStamp")&&i>+localStorage.getItem("rateBnbTimeStamp")+3e5&&(n=await t.getLatestBnbToUsdRate(),localStorage.setItem("rateBnb",n),localStorage.setItem("rateBnbTimeStamp",i),t.context.$store.commit("setRate",n)):(n=await t.getLatestBnbToUsdRate(),localStorage.setItem("rateBnb",n),localStorage.setItem("rateBnbTimeStamp",i),t.context.$store.commit("setRate",n)))}catch(o){console.log(o)}}async approve(t){try{let n;const r=this.context.chainId||this.defaultChains[0].id;return t==="project"?n=tr[r]:t==="router"&&(n=ws[r]),this.writeContract("erc20","approve",r,[n,"10000000000000000000000000"])}catch{throw new Error}}async approveLpToken(t){var n;try{const r=Di();if(!t||!r||t&&((n=r==null?void 0:r.chain)!=null&&n.id)&&Number(t)!==Number(r.chain.id)){alert("mismatch chain id detected, please switch network to use the web page.");try{await this.switchNetworkMethod(t)}catch{throw Error("User rejected network switch")}}return this.writeContract("pair","approve",t,[ws[t],(void 0).MaxUint256])}catch{throw new Error}}async buy(t,n,r){(!t||t==="0x0000000000000000000000000000000000000000")&&(t=Xp);const i=this.context.chainId||this.defaultChains[0].id;await this.writeContract("project","buy",i,[t,r],n.toString())}async sell(t){const n=this.context.chainId||this.defaultChains[0].id;t=sr(Mn(t.toString())),await this.writeContract("project","sell",n,[t])}async sellInBase(t){const n=this.context.chainId||this.defaultChains[0].id;t=sr(Mn(t.toString()));let r=new Date().getTime()+3e5;await this.writeContract("router","swapExactTokensForETH",n,[t,0,[Ki[n],I6[n]],this.context.currentAddress,r])}async stake(t,n){const r=this.context.chainId||this.defaultChains[0].id;await this.writeContract("project","stake",r,[t],n)}async claim(t,n){const r=this.context.chainId||this.defaultChains[0].id;t=sr(Mn(t.toString())),Number(r)===8453?await this.writeContract("project","claim",r,[t]):n!=="0x0000000000000000000000000000000000000000"?await this.writeContract("project","claim",r,[t,n]):await this.writeContract("project","claim",r,[t,"0x0000000000000000000000000000000000000000"])}async rebond(t,n){const r=this.context.chainId||this.defaultChains[0].id;t=sr(Mn(t.toString())),Number(r)===8453?await this.writeContract("project","rebond",r,[t]):n!=="0x0000000000000000000000000000000000000000"?await this.writeContract("project","rebond",r,[t,n]):await this.writeContract("project","rebond",r,[t,"0x0000000000000000000000000000000000000000"])}async deposit(t,n){(!t||t==="0x0000000000000000000000000000000000000000")&&(t=Xp);const r=this.context.chainId||this.defaultChains[0].id;return n=Ls(n.toString(),_c[r]),await this.writeContract("project","buy",r,[t,n._hex])}async withdraw(){const t=this.context.chainId||this.defaultChains[0].id;return await this.writeContract("project","withdraw",t)}async addLiquidityETH(t,n,r){n=Mn(`${n}`).toString();const i=this.context.chainId||this.defaultChains[0].id,o=Math.floor(new Date().getTime()/1e3+3600);return await this.writeContract("router","addLiquidityETH",i,[Ki[i],n,"1","1",r,o],t)}async removeLiquidityETH(t,n){t=Mn(`${t}`).toString();const r=this.context.chainId||this.defaultChains[0].id,i=Math.floor(new Date().getTime()/1e3+3600);return await this.writeContract("router","removeLiquidityETHSupportingFeeOnTransferTokens",r,[Ki[r],t,"1","1",n,i])}async writeContract(t,n,r,i=[],o="0"){var s;try{if(t==="project"){o=sr(Mn(o.toString()));const a=await Is({address:tr[r],abi:Number(r)===8453?Jm:NP,functionName:n,args:i,value:o,chainId:r}),c=await Ac(a);this.context.$store.commit("push_notification",{type:"warning",typeClass:"warning",message:"Sending your transaction into the blockchain..."}),c&&await $c(c),n!=="buy"&&n!=="stake"&&n!=="rebond"&&n!=="claim"&&n!=="sell"&&this.context.$store.commit("push_notification",{type:"success",typeClass:"success",message:"Transaction was successfully processed"}),await this.fetchContractData(this.context.currentAddress)}else if(t==="erc20"){o=Ls(o,_c[r]);const a=await Is({address:Ki[r],abi:Ym,functionName:n,args:i,value:o,chainId:r}),c=await Ac(a);this.context.$store.commit("push_notification",{type:"warning",typeClass:"warning",message:"Sending your transaction into the blockchain..."}),c&&(await $c({confirmations:3,hash:c.hash}),this.context.$store.commit("push_notification",{type:"success",typeClass:"success",message:"Your transaction has been successfully processed!"})),await this.fetchContractData(this.context.currentAddress),await this.fetchUserData(this.context.currentAddress)}else if(t==="pair"){o=Ls(o,_c[r]);const a=await Is({address:Yp[r],abi:Xm,functionName:n,args:i,value:o,chainId:r}),c=await Ac(a);this.context.$store.commit("push_notification",{type:"warning",typeClass:"warning",message:"Sending your transaction into the blockchain..."}),c&&await $c(c),n!=="deposit"&&this.context.$store.commit("push_notification",{type:"success",typeClass:"success",message:"Transaction was successfully processed"}),await this.fetchContractData(this.context.currentAddress)}else if(t==="router"){o=Ls(o,_c[r]);const a=await Is({address:ws[r],abi:Qm,functionName:n,args:i,value:o,chainId:r}),c=await Ac(a);this.context.$store.commit("push_notification",{type:"warning",typeClass:"warning",message:"Sending your transaction into the blockchain..."}),c&&(await $c({confirmations:3,hash:c.hash}),this.context.$store.commit("push_notification",{type:"success",typeClass:"success",message:"Transaction was successfully processed"})),await this.fetchContractData(this.context.currentAddress),await this.fetchUserData(this.context.currentAddress)}}catch(a){throw console.log({error:a}),a.name==="ChainMismatchError"&&(a.details="It seems that you are connected to a wrong chain. Please switch to BNB Chain Mainnet and repeat the action."),this.context.$store.commit("push_notification",{type:"error",typeClass:"error",message:`${((s=a==null?void 0:a.cause)==null?void 0:s.reason)||(a==null?void 0:a.details)||a.message}`}),new Error}}async fetchContractData(t){var n;try{if(t==="0x0000000000000000000000000000000000000000"&&((n=this==null?void 0:this.context)==null?void 0:n.currentAddress.toLowerCase())!==t.toLowerCase()){this.stopIntervals();return}const[r]=await Promise.all([this.getReserves()]);this.context.$store.commit("setReserves",r),await this.getCurrentRate()}catch(r){console.log(r)}}async fetchUserData(t,n){var r;try{if(t==="0x0000000000000000000000000000000000000000"&&((r=this==null?void 0:this.context)==null?void 0:r.currentAddress.toLowerCase())!==t.toLowerCase()){this.stopIntervals();return}let[i,o,s,a,c,{bonds:u,stakes:l},d,p,g,w,y]=await Promise.all([qw({address:t}),this.getERC20TokensBalance(t),this.getERC20TokenAllowance(t),this.getLPTokensBalance(t),this.getUserInfoAndDecodeIt(t),this.getUserBondsAndStakes(t,n),this.getUserClaims(t,n),this.getUserRebonds(t,n),this.getUserSells(t,n)]);c&&(c.totalClaimed=parseFloat(this.withoutRound(d.reduce((x,E)=>x+Number(E.amountToken),0),2)),c.totalSold=parseFloat(this.withoutRound(g.reduce((x,E)=>x+Number(E.amountToken),0),2)),c.totalRebonded=parseFloat(this.withoutRound(p.reduce((x,E)=>x+Number(E.amountToken),0),2))),this.context.$store.commit("setUserCoinBalance",parseFloat(this.withoutRound(i.formatted,4))),this.context.$store.commit("setCoinSymbol",i.symbol),this.context.$store.commit("setERC20Symbol","CAROL"),this.context.$store.commit("setUserTokenBalance",parseFloat(this.withoutRound(o,4))),this.context.$store.commit("setUserTokenAllowance",Number(this.withoutRound(s,4))),this.context.$store.commit("setUserLPTokenBalance",parseFloat(this.withoutRound(a,4))),this.context.$store.commit("setUserBonds",u),this.context.$store.commit("setUserStakes",l),this.context.$store.commit("setUserData",c),this.context.$store.commit("setUserClaims",d),this.context.$store.commit("setUserSells",g),this.context.$store.commit("setUserRebonds",p)}catch(i){console.log(i)}}async getLPTokensBalance(t){let n=await this.readContractData("pair","balanceOf",[t]);return Mt(n[0].result,"ether")}async getERC20TokensBalance(t){let n=await this.readContractData("erc20","balanceOf",[t]);return Mt(n[0].result,"ether")}async getERC20TokenAllowance(t){const n=this.context.chainId||this.defaultChains[0].id;let r=ws[n],i=await this.readContractData("erc20","allowance",[t,r]);return Mt(i[0].result,18)}async getUserInfoAndDecodeIt(t){try{let[n]=await Promise.all([this.readContractData("project","getUIData",[t])]);n=n[0].result;const r=n[0];return{upline:r.upline,refLevel:r.refLevel,bondsNumber:r.bondsNumber,totalInvested:parseFloat(Mt(r.totalInvested,"ether")),totalRefReward:parseFloat(Mt(r.totalRefReward,"ether")),totalWithdrawn:parseFloat(Mt(r.totalWithdrawn,"ether")),refTurnover:parseFloat(Mt(r.refTurnover,"ether")),userAvailableAmount:parseFloat(Mt(n[1],"ether")),userHoldBonus:this.withoutRound(Number(n[2])/id*100,2),userLiquidityBonus:this.withoutRound(Number(n[3])/id*100,2),globalLiquidityBonus:this.withoutRound(Number(n[4])/id*100,2),bondTypeStatus:{0:n[5][0],1:n[5][1],2:n[5][2],3:n[5][3]},referralsNumber:n[6].length,referrals:n[6]}}catch(n){console.log(n)}}async getReserves(){let[t,n]=await Promise.all([this.readContractData("pair","getReserves"),this.readContractData("pair","totalSupply")]);return t=t[0].result,{coinReserves:BigInt(t[0])<BigInt(t[1])?Mt(t[0]):Mt(t[1]),erc20Reserves:BigInt(t[0])<BigInt(t[1])?Mt(t[1]):Mt(t[0]),lpTotalSupply:Mt(n[0].result)}}async readContractData(t,n,r=[]){if(t==="project"){const i=[],o={};return o.address=tr[this.context.chainId],o.abi=Jm,o.functionName=n,o.chainId=this.context.chainId,r.indexOf("0x0000000000000000000000000000000000000000")>=0&&r.length===1&&(r=[Qp]),o.args=r,i.push(o),await Rs({contracts:i})}else if(t==="erc20"){const i=[],o={};return o.address=Ki[this.context.chainId],o.abi=Ym,o.functionName=n,o.chainId=this.context.chainId,r.indexOf("0x0000000000000000000000000000000000000000")>=0&&r.length===1&&(r=[Qp]),o.args=[...r],i.push(o),await Rs({contracts:i})}else if(t==="pair"){const i=[],o={};return o.address=Yp[this.context.chainId],o.abi=Xm,o.functionName=n,o.chainId=this.context.chainId,o.args=[...r],i.push(o),await Rs({contracts:i})}else if(t==="router"){const i=[],o={};return o.address=ws[this.context.chainId],o.abi=Qm,o.functionName=n,o.chainId=this.context.chainId,o.args=[...r],i.push(o),await Rs({contracts:i})}}async getUserDeposits(t,n){try{return!t||!n?[]:(await un.get(`${Er}/getUserDeposits`,{params:{address:t,chainId:n,contractAddress:tr[n]}})).data.sort((i,o)=>o.timestamp-i.timestamp)}catch(r){console.log(r)}}async getUserBondsAndStakes(t,n){try{if(!t||!n)return[];const i=(await un.get(`${Er}/getUserBondsAndStakes`,{params:{address:t,chainId:n,contractAddress:tr[n]}})).data.filter(a=>!(a.eventType==="NewBond"&&a.bondType===4&&a.amountToken==="0.0"));i.sort((a,c)=>c.time-a.time);const[o,s]=this.separateEvents(i);return{bonds:o,stakes:s}}catch(r){console.log(r)}}async getUserClaims(t,n){try{if(!t||!n)return[];const r=await un.get(`${Er}/getUserClaims`,{params:{address:t,chainId:n,contractAddress:tr[n]}});return r.data.sort((i,o)=>o.time-i.time),r.data}catch(r){console.log(r)}}async getUserSells(t,n){try{if(!t||!n)return[];const r=await un.get(`${Er}/getUserSells`,{params:{address:t,chainId:n,contractAddress:tr[n]}});return r.data.sort((i,o)=>o.time-i.time),r.data}catch(r){console.log(r)}}async getUserRebonds(t,n){try{if(!t||!n)return[];const r=await un.get(`${Er}/getUserRebonds`,{params:{address:t,chainId:n,contractAddress:tr[n]}});return r.data.sort((i,o)=>o.time-i.time),r.data}catch(r){console.log(r)}}async getUserTransactions(t,n){try{return!t||!n?[]:(await un.get(`${Er}/getUserTransactions`,{params:{address:t,chainId:n,contractAddress:tr[n]}})).data.filter(i=>i.event_name!=="Upline").sort((i,o)=>o.timestamp-i.timestamp)}catch(r){console.log(r)}}async submitProposal(t,n,r){await un.post(`${Er}/addProposal`,{title:t,description:n,userAddress:r}).catch(i=>{if(i.response&&i.response.data)throw new Error(i.response.data)})}async pingAds(t,n,r,i){try{const o=window.localStorage.getItem("aads");if(o)await un.post(`${Er}/pingAds`,{partner:o,amount:t,address:n,chainId:r,hash:i}),window.localStorage.removeItem("adds");else return}catch(o){console.log(o)}}async switchNetworkMethod(t){try{await yh({chainId:t})}catch(n){if(n.toString().includes("Connector not found")){this.context.$store.commit("push_notification",{type:"error",typeClass:"error",message:"You need to connect your wallet first."});return}else throw Error(n)}}withoutRound(t,n=2){if(n===2)if(t.toString().indexOf(".")!==-1){const r=t.toString().split(".");return r[1]+="00",t=r.join("."),t.toString().match(/^-?\d+(?:\.\d{0,2})?/)[0]}else return t=t.toString()+".00",t.toString().match(/^-?\d+(?:\.\d{0,2})?/)[0];else if(n===4)if(t.toString().indexOf(".")!==-1){const r=t.toString().split(".");return r[1]+="00",t=r.join("."),t.toString().match(/^-?\d+(?:\.\d{0,4})?/)[0]}else return t=t.toString()+".00",t.toString().match(/^-?\d+(?:\.\d{0,4})?/)[0];else if(n===6)if(t.toString().indexOf(".")!==-1){const r=t.toString().split(".");return r[1]+="00",t=r.join("."),t.toString().match(/^-?\d+(?:\.\d{0,6})?/)[0]}else return t=t.toString()+".00",t.toString().match(/^-?\d+(?:\.\d{0,6})?/)[0];else if(n===8)if(t.toString().indexOf(".")!==-1){const r=t.toString().split(".");return r[1]+="00",t=r.join("."),t.toString().match(/^-?\d+(?:\.\d{0,8})?/)[0]}else return t=t.toString()+".00",t.toString().match(/^-?\d+(?:\.\d{0,8})?/)[0];else if(n===9)if(t.toString().indexOf(".")!==-1){const r=t.toString().split(".");return r[1]+="00",t=r.join("."),t.toString().match(/^-?\d+(?:\.\d{0,9})?/)[0]}else return t=t.toString()+".00",t.toString().match(/^-?\d+(?:\.\d{0,9})?/)[0]}separateEvents(t){let n=[],r=[];return t.forEach(i=>{i.eventType==="NewBond"?n.push({...i,staked:!1}):i.eventType==="StakeBond"&&r.push(i)}),n.forEach(i=>{const o=k6[this.context.chainId][i.bondType];i.profitPercent=o;const s=sr(Mn(i.amountETH.toString())),a=sr(Mn(i.profitPercent.toString())),c=sr(Mn(100 .toString()));i.coinAmountWithProfitPercent=Mt(s*(c+a)/c),r.forEach(u=>{i.bondIndex===u.bondIndex&&i.userAddress===u.userAddress&&(i.staked=!0)})}),[n,r]}async addTokenToWallet(){try{const t=this.context.chainId||this.defaultChains[0].id;await window.ethereum.request({method:"wallet_watchAsset",params:{type:"ERC20",options:{address:Ki[t],symbol:R6,decimals:N6,image:`${M6}/token.png`}}})&&this.context.$store.commit("push_notification",{type:"success",typeClass:"success",message:"Token has been added to your wallet."})}catch(t){this.handleError(t)}}async getLatestBnbToUsdRate(){if(Number(this.context.chainId)===8453){let t="https://api.coincap.io/v2/assets/ethereum";return(await un.get(t)).data.data.priceUsd}else if(Number(this.context.chainId)===56||!this.context.chainId){let t="https://api.coincap.io/v2/assets/binance-coin";return(await un.get(t)).data.data.priceUsd}}withRound(t,n=2){if(n===2)if(t.toString().indexOf(".")!==-1){const r=t.toString().split(".");return r[1]+="00",t=r.join("."),(Number(t.toString().match(/^-?\d+(?:\.\d{0,2})?/)[0])+.01).toFixed(2)}else return t=t.toString()+".00",t.toString().match(/^-?\d+(?:\.\d{0,2})?/)[0];else if(n===4)if(t.toString().indexOf(".")!==-1){const r=t.toString().split(".");return r[1]+="00",t=r.join("."),t.toString().match(/^-?\d+(?:\.\d{0,4})?/)[0]}else return t=t.toString()+".00",t.toString().match(/^-?\d+(?:\.\d{0,4})?/)[0]}handleError(t){if(console.log({error:t}),t.toString().includes("declined by user")){this.context.$store.commit("push_notification",{type:"error",typeClass:"error",message:"Confirmation declined by user"});return}if(t.message){this.context.$store.commit("push_notification",{type:"error",typeClass:"error",message:`${t.message}`});return}}}function BP(){return ky().__VUE_DEVTOOLS_GLOBAL_HOOK__}function ky(){return typeof navigator<"u"&&typeof window<"u"?window:typeof global<"u"?global:{}}const LP=typeof Proxy=="function",UP="devtools-plugin:setup",FP="plugin:settings:set";let eo,l0;function jP(){var e;return eo!==void 0||(typeof window<"u"&&window.performance?(eo=!0,l0=window.performance):typeof global<"u"&&(!((e=global.perf_hooks)===null||e===void 0)&&e.performance)?(eo=!0,l0=global.perf_hooks.performance):eo=!1),eo}function WP(){return jP()?l0.now():Date.now()}class HP{constructor(t,n){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=t,this.hook=n;const r={};if(t.settings)for(const s in t.settings){const a=t.settings[s];r[s]=a.defaultValue}const i=`__vue-devtools-plugin-settings__${t.id}`;let o=Object.assign({},r);try{const s=localStorage.getItem(i),a=JSON.parse(s);Object.assign(o,a)}catch{}this.fallbacks={getSettings(){return o},setSettings(s){try{localStorage.setItem(i,JSON.stringify(s))}catch{}o=s},now(){return WP()}},n&&n.on(FP,(s,a)=>{s===this.plugin.id&&this.fallbacks.setSettings(a)}),this.proxiedOn=new Proxy({},{get:(s,a)=>this.target?this.target.on[a]:(...c)=>{this.onQueue.push({method:a,args:c})}}),this.proxiedTarget=new Proxy({},{get:(s,a)=>this.target?this.target[a]:a==="on"?this.proxiedOn:Object.keys(this.fallbacks).includes(a)?(...c)=>(this.targetQueue.push({method:a,args:c,resolve:()=>{}}),this.fallbacks[a](...c)):(...c)=>new Promise(u=>{this.targetQueue.push({method:a,args:c,resolve:u})})})}async setRealTarget(t){this.target=t;for(const n of this.onQueue)this.target.on[n.method](...n.args);for(const n of this.targetQueue)n.resolve(await this.target[n.method](...n.args))}}function zP(e,t){const n=e,r=ky(),i=BP(),o=LP&&n.enableEarlyProxy;if(i&&(r.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__||!o))i.emit(UP,e,t);else{const s=o?new HP(n,i):null;(r.__VUE_DEVTOOLS_PLUGINS__=r.__VUE_DEVTOOLS_PLUGINS__||[]).push({pluginDescriptor:n,setupFn:t,proxy:s}),s&&t(s.proxiedTarget)}}/*!
 * vuex v4.1.0
 * (c) 2022 Evan You
 * @license MIT
 */var up="store";function qP(e){return e===void 0&&(e=null),Hn(e!==null?e:up)}function VP(e,t){return e.filter(t)[0]}function u0(e,t){if(t===void 0&&(t=[]),e===null||typeof e!="object")return e;var n=VP(t,function(i){return i.original===e});if(n)return n.copy;var r=Array.isArray(e)?[]:{};return t.push({original:e,copy:r}),Object.keys(e).forEach(function(i){r[i]=u0(e[i],t)}),r}function ms(e,t){Object.keys(e).forEach(function(n){return t(e[n],n)})}function My(e){return e!==null&&typeof e=="object"}function GP(e){return e&&typeof e.then=="function"}function KP(e,t){return function(){return e(t)}}function By(e,t,n){return t.indexOf(e)<0&&(n&&n.prepend?t.unshift(e):t.push(e)),function(){var r=t.indexOf(e);r>-1&&t.splice(r,1)}}function Ly(e,t){e._actions=Object.create(null),e._mutations=Object.create(null),e._wrappedGetters=Object.create(null),e._modulesNamespaceMap=Object.create(null);var n=e.state;qu(e,n,[],e._modules.root,!0),dp(e,n,t)}function dp(e,t,n){var r=e._state,i=e._scope;e.getters={},e._makeLocalGettersCache=Object.create(null);var o=e._wrappedGetters,s={},a={},c=v5(!0);c.run(function(){ms(o,function(u,l){s[l]=KP(u,e),a[l]=Gt(function(){return s[l]()}),Object.defineProperty(e.getters,l,{get:function(){return a[l].value},enumerable:!0})})}),e._state=Xo({data:t}),e._scope=c,e.strict&&QP(e),r&&n&&e._withCommit(function(){r.data=null}),i&&i.stop()}function qu(e,t,n,r,i){var o=!n.length,s=e._modules.getNamespace(n);if(r.namespaced&&(e._modulesNamespaceMap[s],e._modulesNamespaceMap[s]=r),!o&&!i){var a=fp(t,n.slice(0,-1)),c=n[n.length-1];e._withCommit(function(){a[c]=r.state})}var u=r.context=ZP(e,s,n);r.forEachMutation(function(l,d){var p=s+d;JP(e,p,l,u)}),r.forEachAction(function(l,d){var p=l.root?d:s+d,g=l.handler||l;YP(e,p,g,u)}),r.forEachGetter(function(l,d){var p=s+d;XP(e,p,l,u)}),r.forEachChild(function(l,d){qu(e,t,n.concat(d),l,i)})}function ZP(e,t,n){var r=t==="",i={dispatch:r?e.dispatch:function(o,s,a){var c=Ul(o,s,a),u=c.payload,l=c.options,d=c.type;return(!l||!l.root)&&(d=t+d),e.dispatch(d,u)},commit:r?e.commit:function(o,s,a){var c=Ul(o,s,a),u=c.payload,l=c.options,d=c.type;(!l||!l.root)&&(d=t+d),e.commit(d,u,l)}};return Object.defineProperties(i,{getters:{get:r?function(){return e.getters}:function(){return Uy(e,t)}},state:{get:function(){return fp(e.state,n)}}}),i}function Uy(e,t){if(!e._makeLocalGettersCache[t]){var n={},r=t.length;Object.keys(e.getters).forEach(function(i){if(i.slice(0,r)===t){var o=i.slice(r);Object.defineProperty(n,o,{get:function(){return e.getters[i]},enumerable:!0})}}),e._makeLocalGettersCache[t]=n}return e._makeLocalGettersCache[t]}function JP(e,t,n,r){var i=e._mutations[t]||(e._mutations[t]=[]);i.push(function(s){n.call(e,r.state,s)})}function YP(e,t,n,r){var i=e._actions[t]||(e._actions[t]=[]);i.push(function(s){var a=n.call(e,{dispatch:r.dispatch,commit:r.commit,getters:r.getters,state:r.state,rootGetters:e.getters,rootState:e.state},s);return GP(a)||(a=Promise.resolve(a)),e._devtoolHook?a.catch(function(c){throw e._devtoolHook.emit("vuex:error",c),c}):a})}function XP(e,t,n,r){e._wrappedGetters[t]||(e._wrappedGetters[t]=function(o){return n(r.state,r.getters,o.state,o.getters)})}function QP(e){yo(function(){return e._state.data},function(){},{deep:!0,flush:"sync"})}function fp(e,t){return t.reduce(function(n,r){return n[r]},e)}function Ul(e,t,n){return My(e)&&e.type&&(n=t,t=e,e=e.type),{type:e,payload:t,options:n}}var eO="vuex bindings",tg="vuex:mutations",jd="vuex:actions",to="vuex",tO=0;function nO(e,t){zP({id:"org.vuejs.vuex",app:e,label:"Vuex",homepage:"https://next.vuex.vuejs.org/",logo:"https://vuejs.org/images/icons/favicon-96x96.png",packageName:"vuex",componentStateTypes:[eO]},function(n){n.addTimelineLayer({id:tg,label:"Vuex Mutations",color:ng}),n.addTimelineLayer({id:jd,label:"Vuex Actions",color:ng}),n.addInspector({id:to,label:"Vuex",icon:"storage",treeFilterPlaceholder:"Filter stores..."}),n.on.getInspectorTree(function(r){if(r.app===e&&r.inspectorId===to)if(r.filter){var i=[];Hy(i,t._modules.root,r.filter,""),r.rootNodes=i}else r.rootNodes=[Wy(t._modules.root,"")]}),n.on.getInspectorState(function(r){if(r.app===e&&r.inspectorId===to){var i=r.nodeId;Uy(t,i),r.state=oO(aO(t._modules,i),i==="root"?t.getters:t._makeLocalGettersCache,i)}}),n.on.editInspectorState(function(r){if(r.app===e&&r.inspectorId===to){var i=r.nodeId,o=r.path;i!=="root"&&(o=i.split("/").filter(Boolean).concat(o)),t._withCommit(function(){r.set(t._state.data,o,r.state.value)})}}),t.subscribe(function(r,i){var o={};r.payload&&(o.payload=r.payload),o.state=i,n.notifyComponentUpdate(),n.sendInspectorTree(to),n.sendInspectorState(to),n.addTimelineEvent({layerId:tg,event:{time:Date.now(),title:r.type,data:o}})}),t.subscribeAction({before:function(r,i){var o={};r.payload&&(o.payload=r.payload),r._id=tO++,r._time=Date.now(),o.state=i,n.addTimelineEvent({layerId:jd,event:{time:r._time,title:r.type,groupId:r._id,subtitle:"start",data:o}})},after:function(r,i){var o={},s=Date.now()-r._time;o.duration={_custom:{type:"duration",display:s+"ms",tooltip:"Action duration",value:s}},r.payload&&(o.payload=r.payload),o.state=i,n.addTimelineEvent({layerId:jd,event:{time:Date.now(),title:r.type,groupId:r._id,subtitle:"end",data:o}})}})})}var ng=8702998,rO=6710886,iO=16777215,Fy={label:"namespaced",textColor:iO,backgroundColor:rO};function jy(e){return e&&e!=="root"?e.split("/").slice(-2,-1)[0]:"Root"}function Wy(e,t){return{id:t||"root",label:jy(t),tags:e.namespaced?[Fy]:[],children:Object.keys(e._children).map(function(n){return Wy(e._children[n],t+n+"/")})}}function Hy(e,t,n,r){r.includes(n)&&e.push({id:r||"root",label:r.endsWith("/")?r.slice(0,r.length-1):r||"Root",tags:t.namespaced?[Fy]:[]}),Object.keys(t._children).forEach(function(i){Hy(e,t._children[i],n,r+i+"/")})}function oO(e,t,n){t=n==="root"?t:t[n];var r=Object.keys(t),i={state:Object.keys(e.state).map(function(s){return{key:s,editable:!0,value:e.state[s]}})};if(r.length){var o=sO(t);i.getters=Object.keys(o).map(function(s){return{key:s.endsWith("/")?jy(s):s,editable:!1,value:d0(function(){return o[s]})}})}return i}function sO(e){var t={};return Object.keys(e).forEach(function(n){var r=n.split("/");if(r.length>1){var i=t,o=r.pop();r.forEach(function(s){i[s]||(i[s]={_custom:{value:{},display:s,tooltip:"Module",abstract:!0}}),i=i[s]._custom.value}),i[o]=d0(function(){return e[n]})}else t[n]=d0(function(){return e[n]})}),t}function aO(e,t){var n=t.split("/").filter(function(r){return r});return n.reduce(function(r,i,o){var s=r[i];if(!s)throw new Error('Missing module "'+i+'" for path "'+t+'".');return o===n.length-1?s:s._children},t==="root"?e:e.root._children)}function d0(e){try{return e()}catch(t){return t}}var On=function(t,n){this.runtime=n,this._children=Object.create(null),this._rawModule=t;var r=t.state;this.state=(typeof r=="function"?r():r)||{}},zy={namespaced:{configurable:!0}};zy.namespaced.get=function(){return!!this._rawModule.namespaced};On.prototype.addChild=function(t,n){this._children[t]=n};On.prototype.removeChild=function(t){delete this._children[t]};On.prototype.getChild=function(t){return this._children[t]};On.prototype.hasChild=function(t){return t in this._children};On.prototype.update=function(t){this._rawModule.namespaced=t.namespaced,t.actions&&(this._rawModule.actions=t.actions),t.mutations&&(this._rawModule.mutations=t.mutations),t.getters&&(this._rawModule.getters=t.getters)};On.prototype.forEachChild=function(t){ms(this._children,t)};On.prototype.forEachGetter=function(t){this._rawModule.getters&&ms(this._rawModule.getters,t)};On.prototype.forEachAction=function(t){this._rawModule.actions&&ms(this._rawModule.actions,t)};On.prototype.forEachMutation=function(t){this._rawModule.mutations&&ms(this._rawModule.mutations,t)};Object.defineProperties(On.prototype,zy);var qi=function(t){this.register([],t,!1)};qi.prototype.get=function(t){return t.reduce(function(n,r){return n.getChild(r)},this.root)};qi.prototype.getNamespace=function(t){var n=this.root;return t.reduce(function(r,i){return n=n.getChild(i),r+(n.namespaced?i+"/":"")},"")};qi.prototype.update=function(t){qy([],this.root,t)};qi.prototype.register=function(t,n,r){var i=this;r===void 0&&(r=!0);var o=new On(n,r);if(t.length===0)this.root=o;else{var s=this.get(t.slice(0,-1));s.addChild(t[t.length-1],o)}n.modules&&ms(n.modules,function(a,c){i.register(t.concat(c),a,r)})};qi.prototype.unregister=function(t){var n=this.get(t.slice(0,-1)),r=t[t.length-1],i=n.getChild(r);i&&i.runtime&&n.removeChild(r)};qi.prototype.isRegistered=function(t){var n=this.get(t.slice(0,-1)),r=t[t.length-1];return n?n.hasChild(r):!1};function qy(e,t,n){if(t.update(n),n.modules)for(var r in n.modules){if(!t.getChild(r))return;qy(e.concat(r),t.getChild(r),n.modules[r])}}function cO(e){return new kt(e)}var kt=function(t){var n=this;t===void 0&&(t={});var r=t.plugins;r===void 0&&(r=[]);var i=t.strict;i===void 0&&(i=!1);var o=t.devtools;this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new qi(t),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._makeLocalGettersCache=Object.create(null),this._scope=null,this._devtools=o;var s=this,a=this,c=a.dispatch,u=a.commit;this.dispatch=function(p,g){return c.call(s,p,g)},this.commit=function(p,g,w){return u.call(s,p,g,w)},this.strict=i;var l=this._modules.root.state;qu(this,l,[],this._modules.root),dp(this,l),r.forEach(function(d){return d(n)})},hp={state:{configurable:!0}};kt.prototype.install=function(t,n){t.provide(n||up,this),t.config.globalProperties.$store=this;var r=this._devtools!==void 0?this._devtools:!1;r&&nO(t,this)};hp.state.get=function(){return this._state.data};hp.state.set=function(e){};kt.prototype.commit=function(t,n,r){var i=this,o=Ul(t,n,r),s=o.type,a=o.payload,c={type:s,payload:a},u=this._mutations[s];u&&(this._withCommit(function(){u.forEach(function(d){d(a)})}),this._subscribers.slice().forEach(function(l){return l(c,i.state)}))};kt.prototype.dispatch=function(t,n){var r=this,i=Ul(t,n),o=i.type,s=i.payload,a={type:o,payload:s},c=this._actions[o];if(c){try{this._actionSubscribers.slice().filter(function(l){return l.before}).forEach(function(l){return l.before(a,r.state)})}catch{}var u=c.length>1?Promise.all(c.map(function(l){return l(s)})):c[0](s);return new Promise(function(l,d){u.then(function(p){try{r._actionSubscribers.filter(function(g){return g.after}).forEach(function(g){return g.after(a,r.state)})}catch{}l(p)},function(p){try{r._actionSubscribers.filter(function(g){return g.error}).forEach(function(g){return g.error(a,r.state,p)})}catch{}d(p)})})}};kt.prototype.subscribe=function(t,n){return By(t,this._subscribers,n)};kt.prototype.subscribeAction=function(t,n){var r=typeof t=="function"?{before:t}:t;return By(r,this._actionSubscribers,n)};kt.prototype.watch=function(t,n,r){var i=this;return yo(function(){return t(i.state,i.getters)},n,Object.assign({},r))};kt.prototype.replaceState=function(t){var n=this;this._withCommit(function(){n._state.data=t})};kt.prototype.registerModule=function(t,n,r){r===void 0&&(r={}),typeof t=="string"&&(t=[t]),this._modules.register(t,n),qu(this,this.state,t,this._modules.get(t),r.preserveState),dp(this,this.state)};kt.prototype.unregisterModule=function(t){var n=this;typeof t=="string"&&(t=[t]),this._modules.unregister(t),this._withCommit(function(){var r=fp(n.state,t.slice(0,-1));delete r[t[t.length-1]]}),Ly(this)};kt.prototype.hasModule=function(t){return typeof t=="string"&&(t=[t]),this._modules.isRegistered(t)};kt.prototype.hotUpdate=function(t){this._modules.update(t),Ly(this,!0)};kt.prototype._withCommit=function(t){var n=this._committing;this._committing=!0,t(),this._committing=n};Object.defineProperties(kt.prototype,hp);var Vi=Ku(function(e,t){var n={};return Gu(t).forEach(function(r){var i=r.key,o=r.val;n[i]=function(){var a=this.$store.state,c=this.$store.getters;if(e){var u=Zu(this.$store,"mapState",e);if(!u)return;a=u.context.state,c=u.context.getters}return typeof o=="function"?o.call(this,a,c):a[o]},n[i].vuex=!0}),n}),Vu=Ku(function(e,t){var n={};return Gu(t).forEach(function(r){var i=r.key,o=r.val;n[i]=function(){for(var a=[],c=arguments.length;c--;)a[c]=arguments[c];var u=this.$store.commit;if(e){var l=Zu(this.$store,"mapMutations",e);if(!l)return;u=l.context.commit}return typeof o=="function"?o.apply(this,[u].concat(a)):u.apply(this.$store,[o].concat(a))}}),n}),Vy=Ku(function(e,t){var n={};return Gu(t).forEach(function(r){var i=r.key,o=r.val;o=e+o,n[i]=function(){if(!(e&&!Zu(this.$store,"mapGetters",e)))return this.$store.getters[o]},n[i].vuex=!0}),n}),Gy=Ku(function(e,t){var n={};return Gu(t).forEach(function(r){var i=r.key,o=r.val;n[i]=function(){for(var a=[],c=arguments.length;c--;)a[c]=arguments[c];var u=this.$store.dispatch;if(e){var l=Zu(this.$store,"mapActions",e);if(!l)return;u=l.context.dispatch}return typeof o=="function"?o.apply(this,[u].concat(a)):u.apply(this.$store,[o].concat(a))}}),n}),lO=function(e){return{mapState:Vi.bind(null,e),mapGetters:Vy.bind(null,e),mapMutations:Vu.bind(null,e),mapActions:Gy.bind(null,e)}};function Gu(e){return uO(e)?Array.isArray(e)?e.map(function(t){return{key:t,val:t}}):Object.keys(e).map(function(t){return{key:t,val:e[t]}}):[]}function uO(e){return Array.isArray(e)||My(e)}function Ku(e){return function(t,n){return typeof t!="string"?(n=t,t=""):t.charAt(t.length-1)!=="/"&&(t+="/"),e(t,n)}}function Zu(e,t,n){var r=e._modulesNamespaceMap[n];return r}function dO(e){e===void 0&&(e={});var t=e.collapsed;t===void 0&&(t=!0);var n=e.filter;n===void 0&&(n=function(l,d,p){return!0});var r=e.transformer;r===void 0&&(r=function(l){return l});var i=e.mutationTransformer;i===void 0&&(i=function(l){return l});var o=e.actionFilter;o===void 0&&(o=function(l,d){return!0});var s=e.actionTransformer;s===void 0&&(s=function(l){return l});var a=e.logMutations;a===void 0&&(a=!0);var c=e.logActions;c===void 0&&(c=!0);var u=e.logger;return u===void 0&&(u=console),function(l){var d=u0(l.state);typeof u>"u"||(a&&l.subscribe(function(p,g){var w=u0(g);if(n(p,d,w)){var y=og(),x=i(p),E="mutation "+p.type+y;rg(u,E,t),u.log("%c prev state","color: #9E9E9E; font-weight: bold",r(d)),u.log("%c mutation","color: #03A9F4; font-weight: bold",x),u.log("%c next state","color: #4CAF50; font-weight: bold",r(w)),ig(u)}d=w}),c&&l.subscribeAction(function(p,g){if(o(p,g)){var w=og(),y=s(p),x="action "+p.type+w;rg(u,x,t),u.log("%c action","color: #03A9F4; font-weight: bold",y),ig(u)}}))}}function rg(e,t,n){var r=n?e.groupCollapsed:e.group;try{r.call(e,t)}catch{e.log(t)}}function ig(e){try{e.groupEnd()}catch{e.log("—— log end ——")}}function og(){var e=new Date;return" @ "+Ic(e.getHours(),2)+":"+Ic(e.getMinutes(),2)+":"+Ic(e.getSeconds(),2)+"."+Ic(e.getMilliseconds(),3)}function fO(e,t){return new Array(t+1).join(e)}function Ic(e,t){return fO("0",t-e.toString().length)+e}var hO={version:"4.1.0",Store:kt,storeKey:up,createStore:cO,useStore:qP,mapState:Vi,mapMutations:Vu,mapGetters:Vy,mapActions:Gy,createNamespacedHelpers:lO,createLogger:dO};const pO=hO,pp="/assets/logo-yellow-67622ff2.svg",mp="/assets/logo-3561e087.svg",ai=(e,t)=>{const n=e.__vccOpts||e;for(const[r,i]of t)n[r]=i;return n},mO={computed:{...Vi(["currentAddress","chainId"]),getCurrentChainName(){return this.chainId?Pr[this.chainId]:""}},methods:{makeShort(e,t){return e.substring(0,t)+"..."+e.substring(e.length-t,e.length)},async changeNetwork(e){if(e==="base"){if(Number(this.chainId)===8453){this.$store.commit("push_notification",{type:"success",typeClass:"success",message:"Base Mainnet already selected"});return}await this.$root.core.switchNetworkMethod(8453)}else if(e==="bnb"){if(Number(this.chainId)===56){this.$store.commit("push_notification",{type:"success",typeClass:"success",message:"BNB Chain  already selected"});return}await this.$root.core.switchNetworkMethod(56)}}}},gO={class:"menu"},wO={class:"menu-header"},bO={class:"container"},yO={class:"row"},vO={key:0,src:pp,alt:"",style:{width:"120px",height:"auto"}},xO={key:1,src:mp,alt:"",style:{width:"120px",height:"auto"}},_O=ee("i",{class:"i-close"},null,-1),CO=[_O],EO={class:"menu-content"},TO={class:"container"},SO={class:"menu-container"},AO={class:"menu-actions"},$O={class:"network drop-down"},PO={class:"btn header-item"},OO=ee("i",{class:"i-arrow-down"},null,-1),DO={class:"drop-down-content"},IO={class:"drop-down-content-wrap"},RO=ee("i",{class:"i-network i-base"},null,-1),NO=ee("span",null,"Base Mainnet",-1),kO=[RO,NO],MO=ee("i",{class:"i-network i-bnb"},null,-1),BO=ee("span",null,"BNB Chain",-1),LO=[MO,BO],UO={key:1,class:"user-connected drop-down"},FO={class:"btn header-item"},jO={class:"address"},WO=ee("i",{class:"i-arrow-down"},null,-1),HO={class:"drop-down-content"},zO=ee("i",{class:"i-logout"},null,-1),qO=ee("span",null,"Log out",-1),VO=[zO,qO];function GO(e,t,n,r,i,o){const s=mn("RouterLink");return Ke(),ot("div",gO,[ee("div",wO,[ee("div",bO,[ee("div",yO,[Fe(s,{to:{name:"MainPage"},tag:"a",class:"logo"},{default:St(()=>[Number(e.chainId)===97||Number(e.chainId)===56?(Ke(),ot("img",vO)):dr("",!0),Number(e.chainId)===8453?(Ke(),ot("img",xO)):dr("",!0)]),_:1}),ee("button",{onClick:t[0]||(t[0]=a=>e.$emit("close")),class:"btn-close"},CO)])])]),ee("div",EO,[ee("div",TO,[ee("div",SO,[ee("nav",{onClick:t[1]||(t[1]=a=>e.$emit("close"))},[Fe(s,{to:{name:"Bonding"}},{default:St(()=>[Kt(" Bond CAROL ")]),_:1}),Fe(s,{to:{name:"Staking"}},{default:St(()=>[Kt(" Stake CAROL ")]),_:1}),Fe(s,{to:{name:"ReferralProg"}},{default:St(()=>[Kt(" Incentive Program ")]),_:1}),Fe(s,{to:{name:"Proposals"}},{default:St(()=>[Kt(" Proposals ")]),_:1})]),ee("div",AO,[ee("div",$O,[ee("button",PO,[ee("i",{class:Zo(["i-network",{"i-base":Number(e.chainId)===8453,"i-bnb":Number(e.chainId)===97||Number(e.chainId)===56}])},null,2),ee("span",null,Xs(o.getCurrentChainName),1),OO]),ee("div",DO,[ee("div",IO,[ee("button",{onClick:t[2]||(t[2]=a=>o.changeNetwork("base")),class:"btn"},kO),ee("button",{onClick:t[3]||(t[3]=a=>o.changeNetwork("bnb")),class:"btn"},LO)])])]),!e.currentAddress||e.currentAddress==="0x0000000000000000000000000000000000000000"?(Ke(),ot("button",{key:0,onClick:t[4]||(t[4]=a=>(e.$emit("connectToWallet"),e.$emit("close"))),class:"btn header-item btn-connect"},"Connect")):(Ke(),ot("div",UO,[ee("button",FO,[ee("span",jO,Xs(o.makeShort(e.currentAddress,7)),1),WO]),ee("div",HO,[ee("button",{onClick:t[5]||(t[5]=a=>(e.$emit("disconnect"),e.$emit("close"))),class:"btn"},VO)])]))])])])])])}const KO=ai(mO,[["render",GO]]),ZO={data(){return{openMobileMenu:!1}},components:{MobileMenu:KO},computed:{...Vi(["currentAddress","theme","chainId"]),getCurrentChainName(){return this.chainId?Pr[this.chainId]:""}},created(){localStorage.currentTheme!==void 0?JSON.parse(localStorage.currentTheme)?this.switchTheme(!0):this.switchTheme(!1):localStorage.setItem("currentTheme",JSON.stringify(!1))},methods:{...Vu(["updateLastTheme"]),getActiveChain(e){return Number(this.chainId)===Number(e)},async changeNetwork(e){if(e==="base"){if(Number(this.chainId)===8453){this.$store.commit("push_notification",{type:"success",typeClass:"success",message:"Base Mainnet already selected"});return}await this.$root.core.switchNetworkMethod(8453)}else if(e==="bnb"){if(Number(this.chainId)===56){this.$store.commit("push_notification",{type:"success",typeClass:"success",message:"BNB Chain  already selected"});return}await this.$root.core.switchNetworkMethod(56)}},makeShort(e,t){return e.substring(0,t)+"..."+e.substring(e.length-t,e.length)},updateCurrentTheme(){let e=JSON.parse(localStorage.getItem("currentTheme")),t=this.switchTheme(!e);localStorage.setItem("currentTheme",JSON.stringify(t))},switchTheme(e){const t=document.getElementsByTagName("html")[0];return e===!0?(this.updateLastTheme(!0),t.classList.contains("dark")||t.classList.add("dark"),!0):(this.updateLastTheme(!1),t.classList.contains("dark")&&t.classList.remove("dark"),!1)}},watch:{openMobileMenu:function(e){e?document.body.style.overflow="hidden":document.body.style.overflow="auto"}}},JO={class:"container"},YO={class:"row row-header"},XO={class:"part part-right"},QO={key:0,src:pp,alt:"",style:{width:"120px",height:"auto"}},eD={key:1,src:mp,alt:"",style:{width:"120px",height:"auto"}},tD={class:"part part-mobile"},nD={key:0,width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},rD=ee("path",{d:"M12 17C10.6167 17 9.4375 16.5125 8.4625 15.5375C7.4875 14.5625 7 13.3833 7 12C7 10.6167 7.4875 9.4375 8.4625 8.4625C9.4375 7.4875 10.6167 7 12 7C13.3833 7 14.5625 7.4875 15.5375 8.4625C16.5125 9.4375 17 10.6167 17 12C17 13.3833 16.5125 14.5625 15.5375 15.5375C14.5625 16.5125 13.3833 17 12 17ZM1.75 12.75C1.53333 12.75 1.35417 12.6792 1.2125 12.5375C1.07083 12.3958 1 12.2167 1 12C1 11.7833 1.07083 11.6042 1.2125 11.4625C1.35417 11.3208 1.53333 11.25 1.75 11.25H4.25C4.46667 11.25 4.64583 11.3208 4.7875 11.4625C4.92917 11.6042 5 11.7833 5 12C5 12.2167 4.92917 12.3958 4.7875 12.5375C4.64583 12.6792 4.46667 12.75 4.25 12.75H1.75ZM19.75 12.75C19.5333 12.75 19.3542 12.6792 19.2125 12.5375C19.0708 12.3958 19 12.2167 19 12C19 11.7833 19.0708 11.6042 19.2125 11.4625C19.3542 11.3208 19.5333 11.25 19.75 11.25H22.25C22.4667 11.25 22.6458 11.3208 22.7875 11.4625C22.9292 11.6042 23 11.7833 23 12C23 12.2167 22.9292 12.3958 22.7875 12.5375C22.6458 12.6792 22.4667 12.75 22.25 12.75H19.75ZM12 5C11.7833 5 11.6042 4.92917 11.4625 4.7875C11.3208 4.64583 11.25 4.46667 11.25 4.25V1.75C11.25 1.53333 11.3208 1.35417 11.4625 1.2125C11.6042 1.07083 11.7833 1 12 1C12.2167 1 12.3958 1.07083 12.5375 1.2125C12.6792 1.35417 12.75 1.53333 12.75 1.75V4.25C12.75 4.46667 12.6792 4.64583 12.5375 4.7875C12.3958 4.92917 12.2167 5 12 5ZM12 23C11.7833 23 11.6042 22.9292 11.4625 22.7875C11.3208 22.6458 11.25 22.4667 11.25 22.25V19.75C11.25 19.5333 11.3208 19.3542 11.4625 19.2125C11.6042 19.0708 11.7833 19 12 19C12.2167 19 12.3958 19.0708 12.5375 19.2125C12.6792 19.3542 12.75 19.5333 12.75 19.75V22.25C12.75 22.4667 12.6792 22.6458 12.5375 22.7875C12.3958 22.9292 12.2167 23 12 23ZM6 7.05L4.575 5.65C4.425 5.5 4.35417 5.32083 4.3625 5.1125C4.37083 4.90417 4.44167 4.725 4.575 4.575C4.725 4.425 4.90417 4.35 5.1125 4.35C5.32083 4.35 5.5 4.425 5.65 4.575L7.05 6C7.18333 6.15 7.25 6.325 7.25 6.525C7.25 6.725 7.18333 6.89167 7.05 7.025C6.91667 7.175 6.74583 7.25 6.5375 7.25C6.32917 7.25 6.15 7.18333 6 7.05ZM18.35 19.425L16.95 18C16.8167 17.85 16.75 17.6708 16.75 17.4625C16.75 17.2542 16.825 17.0833 16.975 16.95C17.1083 16.8 17.275 16.725 17.475 16.725C17.675 16.725 17.85 16.8 18 16.95L19.425 18.35C19.575 18.5 19.6458 18.6792 19.6375 18.8875C19.6292 19.0958 19.5583 19.275 19.425 19.425C19.275 19.575 19.0958 19.65 18.8875 19.65C18.6792 19.65 18.5 19.575 18.35 19.425ZM16.95 7.05C16.8 6.9 16.725 6.725 16.725 6.525C16.725 6.325 16.8 6.15 16.95 6L18.35 4.575C18.5 4.425 18.6792 4.35417 18.8875 4.3625C19.0958 4.37083 19.275 4.44167 19.425 4.575C19.575 4.725 19.65 4.90417 19.65 5.1125C19.65 5.32083 19.575 5.5 19.425 5.65L18 7.05C17.8667 7.18333 17.6958 7.25 17.4875 7.25C17.2792 7.25 17.1 7.18333 16.95 7.05ZM4.575 19.425C4.425 19.275 4.35 19.0958 4.35 18.8875C4.35 18.6792 4.425 18.5 4.575 18.35L6 16.95C6.15 16.8 6.325 16.725 6.525 16.725C6.725 16.725 6.9 16.8 7.05 16.95C7.2 17.1 7.275 17.275 7.275 17.475C7.275 17.675 7.2 17.85 7.05 18L5.65 19.425C5.5 19.575 5.32083 19.6458 5.1125 19.6375C4.90417 19.6292 4.725 19.5583 4.575 19.425Z",fill:"#717B83"},null,-1),iD=[rD],oD={key:1,width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},sD=ee("path",{d:"M12 21C9.5 21 7.375 20.125 5.625 18.375C3.875 16.625 3 14.5 3 12C3 9.5 3.875 7.375 5.625 5.625C7.375 3.875 9.5 3 12 3C12.1333 3 12.275 3.00417 12.425 3.0125C12.575 3.02083 12.7667 3.03333 13 3.05C12.4 3.58333 11.9333 4.24167 11.6 5.025C11.2667 5.80833 11.1 6.63333 11.1 7.5C11.1 9 11.625 10.275 12.675 11.325C13.725 12.375 15 12.9 16.5 12.9C17.3667 12.9 18.1917 12.7458 18.975 12.4375C19.7583 12.1292 20.4167 11.7 20.95 11.15C20.9667 11.35 20.9792 11.5125 20.9875 11.6375C20.9958 11.7625 21 11.8833 21 12C21 14.5 20.125 16.625 18.375 18.375C16.625 20.125 14.5 21 12 21Z",fill:"#333333"},null,-1),aD=[sD],cD=ee("i",{class:"i-menu"},null,-1),lD=[cD],uD={class:"part part-center"},dD={class:"part part-left"},fD={key:0,width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},hD=ee("path",{d:"M12 17C10.6167 17 9.4375 16.5125 8.4625 15.5375C7.4875 14.5625 7 13.3833 7 12C7 10.6167 7.4875 9.4375 8.4625 8.4625C9.4375 7.4875 10.6167 7 12 7C13.3833 7 14.5625 7.4875 15.5375 8.4625C16.5125 9.4375 17 10.6167 17 12C17 13.3833 16.5125 14.5625 15.5375 15.5375C14.5625 16.5125 13.3833 17 12 17ZM1.75 12.75C1.53333 12.75 1.35417 12.6792 1.2125 12.5375C1.07083 12.3958 1 12.2167 1 12C1 11.7833 1.07083 11.6042 1.2125 11.4625C1.35417 11.3208 1.53333 11.25 1.75 11.25H4.25C4.46667 11.25 4.64583 11.3208 4.7875 11.4625C4.92917 11.6042 5 11.7833 5 12C5 12.2167 4.92917 12.3958 4.7875 12.5375C4.64583 12.6792 4.46667 12.75 4.25 12.75H1.75ZM19.75 12.75C19.5333 12.75 19.3542 12.6792 19.2125 12.5375C19.0708 12.3958 19 12.2167 19 12C19 11.7833 19.0708 11.6042 19.2125 11.4625C19.3542 11.3208 19.5333 11.25 19.75 11.25H22.25C22.4667 11.25 22.6458 11.3208 22.7875 11.4625C22.9292 11.6042 23 11.7833 23 12C23 12.2167 22.9292 12.3958 22.7875 12.5375C22.6458 12.6792 22.4667 12.75 22.25 12.75H19.75ZM12 5C11.7833 5 11.6042 4.92917 11.4625 4.7875C11.3208 4.64583 11.25 4.46667 11.25 4.25V1.75C11.25 1.53333 11.3208 1.35417 11.4625 1.2125C11.6042 1.07083 11.7833 1 12 1C12.2167 1 12.3958 1.07083 12.5375 1.2125C12.6792 1.35417 12.75 1.53333 12.75 1.75V4.25C12.75 4.46667 12.6792 4.64583 12.5375 4.7875C12.3958 4.92917 12.2167 5 12 5ZM12 23C11.7833 23 11.6042 22.9292 11.4625 22.7875C11.3208 22.6458 11.25 22.4667 11.25 22.25V19.75C11.25 19.5333 11.3208 19.3542 11.4625 19.2125C11.6042 19.0708 11.7833 19 12 19C12.2167 19 12.3958 19.0708 12.5375 19.2125C12.6792 19.3542 12.75 19.5333 12.75 19.75V22.25C12.75 22.4667 12.6792 22.6458 12.5375 22.7875C12.3958 22.9292 12.2167 23 12 23ZM6 7.05L4.575 5.65C4.425 5.5 4.35417 5.32083 4.3625 5.1125C4.37083 4.90417 4.44167 4.725 4.575 4.575C4.725 4.425 4.90417 4.35 5.1125 4.35C5.32083 4.35 5.5 4.425 5.65 4.575L7.05 6C7.18333 6.15 7.25 6.325 7.25 6.525C7.25 6.725 7.18333 6.89167 7.05 7.025C6.91667 7.175 6.74583 7.25 6.5375 7.25C6.32917 7.25 6.15 7.18333 6 7.05ZM18.35 19.425L16.95 18C16.8167 17.85 16.75 17.6708 16.75 17.4625C16.75 17.2542 16.825 17.0833 16.975 16.95C17.1083 16.8 17.275 16.725 17.475 16.725C17.675 16.725 17.85 16.8 18 16.95L19.425 18.35C19.575 18.5 19.6458 18.6792 19.6375 18.8875C19.6292 19.0958 19.5583 19.275 19.425 19.425C19.275 19.575 19.0958 19.65 18.8875 19.65C18.6792 19.65 18.5 19.575 18.35 19.425ZM16.95 7.05C16.8 6.9 16.725 6.725 16.725 6.525C16.725 6.325 16.8 6.15 16.95 6L18.35 4.575C18.5 4.425 18.6792 4.35417 18.8875 4.3625C19.0958 4.37083 19.275 4.44167 19.425 4.575C19.575 4.725 19.65 4.90417 19.65 5.1125C19.65 5.32083 19.575 5.5 19.425 5.65L18 7.05C17.8667 7.18333 17.6958 7.25 17.4875 7.25C17.2792 7.25 17.1 7.18333 16.95 7.05ZM4.575 19.425C4.425 19.275 4.35 19.0958 4.35 18.8875C4.35 18.6792 4.425 18.5 4.575 18.35L6 16.95C6.15 16.8 6.325 16.725 6.525 16.725C6.725 16.725 6.9 16.8 7.05 16.95C7.2 17.1 7.275 17.275 7.275 17.475C7.275 17.675 7.2 17.85 7.05 18L5.65 19.425C5.5 19.575 5.32083 19.6458 5.1125 19.6375C4.90417 19.6292 4.725 19.5583 4.575 19.425Z",fill:"#717B83"},null,-1),pD=[hD],mD={key:1,width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},gD=ee("path",{d:"M12 21C9.5 21 7.375 20.125 5.625 18.375C3.875 16.625 3 14.5 3 12C3 9.5 3.875 7.375 5.625 5.625C7.375 3.875 9.5 3 12 3C12.1333 3 12.275 3.00417 12.425 3.0125C12.575 3.02083 12.7667 3.03333 13 3.05C12.4 3.58333 11.9333 4.24167 11.6 5.025C11.2667 5.80833 11.1 6.63333 11.1 7.5C11.1 9 11.625 10.275 12.675 11.325C13.725 12.375 15 12.9 16.5 12.9C17.3667 12.9 18.1917 12.7458 18.975 12.4375C19.7583 12.1292 20.4167 11.7 20.95 11.15C20.9667 11.35 20.9792 11.5125 20.9875 11.6375C20.9958 11.7625 21 11.8833 21 12C21 14.5 20.125 16.625 18.375 18.375C16.625 20.125 14.5 21 12 21Z",fill:"#333333"},null,-1),wD=[gD],bD={class:"network drop-down"},yD={class:"btn header-item"},vD=ee("i",{class:"i-arrow-down"},null,-1),xD={class:"drop-down-content"},_D={class:"drop-down-content-wrap"},CD=ee("i",{class:"i-network i-base"},null,-1),ED=ee("span",null,"Base Mainnet",-1),TD=[CD,ED],SD=ee("i",{class:"i-network i-bnb"},null,-1),AD=ee("span",null,"BNB Chain",-1),$D=[SD,AD],PD={class:"btn header-item"},OD={class:"address"},DD=ee("i",{class:"i-arrow-down"},null,-1),ID={class:"drop-down-content"},RD=ee("i",{class:"i-logout"},null,-1),ND=ee("span",null,"Log out",-1),kD=[RD,ND];function MD(e,t,n,r,i,o){const s=mn("MobileMenu"),a=mn("RouterLink");return Ke(),ot("header",null,[i.openMobileMenu?(Ke(),Yl(s,{key:0,onClose:t[0]||(t[0]=c=>i.openMobileMenu=!1),onDisconnect:t[1]||(t[1]=c=>e.$emit("disconnect")),onConnectToWallet:t[2]||(t[2]=c=>e.$emit("connectToWallet"))})):dr("",!0),ee("div",JO,[ee("div",YO,[ee("div",XO,[Fe(a,{to:{name:"MainPage"},tag:"a",class:"logo"},{default:St(()=>[Number(e.chainId)===97||Number(e.chainId)===56?(Ke(),ot("img",QO)):dr("",!0),Number(e.chainId)===8453?(Ke(),ot("img",eD)):dr("",!0)]),_:1})]),ee("div",tD,[ee("button",{class:"btn btn-switch-color-mode",onClick:t[3]||(t[3]=(...c)=>o.updateCurrentTheme&&o.updateCurrentTheme(...c))},[e.theme===!0?(Ke(),ot("svg",nD,iD)):(Ke(),ot("svg",oD,aD))]),ee("button",{class:"btn-menu",onClick:t[4]||(t[4]=c=>i.openMobileMenu=!0)},lD)]),ee("div",uD,[ee("nav",null,[Fe(a,{to:{name:"Bonding"}},{default:St(()=>[Kt(" Bond CAROL ")]),_:1}),Fe(a,{to:{name:"Staking"}},{default:St(()=>[Kt(" Stake CAROL ")]),_:1}),Fe(a,{to:{name:"ReferralProg"}},{default:St(()=>[Kt(" Incentive Program ")]),_:1}),Fe(a,{to:{name:"Proposals"}},{default:St(()=>[Kt(" Proposals ")]),_:1})])]),ee("div",dD,[ee("button",{class:"btn btn-switch-color-mode",onClick:t[5]||(t[5]=(...c)=>o.updateCurrentTheme&&o.updateCurrentTheme(...c))},[e.theme===!0?(Ke(),ot("svg",fD,pD)):(Ke(),ot("svg",mD,wD))]),ee("div",bD,[ee("button",yD,[ee("i",{class:Zo(["i-network",{"i-base":Number(e.chainId)===8453,"i-bnb":Number(e.chainId)===97||Number(e.chainId)===56}])},null,2),ee("span",null,Xs(o.getCurrentChainName),1),vD]),ee("div",xD,[ee("div",_D,[ee("button",{onClick:t[6]||(t[6]=c=>o.changeNetwork("base")),class:"btn"},TD),ee("button",{onClick:t[7]||(t[7]=c=>o.changeNetwork("bnb")),class:"btn"},$D)])])]),e.currentAddress&&e.currentAddress!=="0x0000000000000000000000000000000000000000"?(Ke(),ot("div",{key:0,onClick:t[9]||(t[9]=c=>e.$emit("connectToWallet")),class:"user-connected drop-down"},[ee("button",PD,[ee("span",OD,Xs(o.makeShort(e.currentAddress,5)),1),DD]),ee("div",ID,[ee("button",{onClick:t[8]||(t[8]=c=>e.$emit("disconnect")),class:"btn"},kD)])])):(Ke(),ot("button",{key:1,onClick:t[10]||(t[10]=c=>e.$emit("connectToWallet")),class:"btn header-item btn-connect"},"Connect"))])])])])}const BD=ai(ZO,[["render",MD]]);const LD={props:["news"]},UD={class:"pop-up"},FD={class:"pop-up-wrap"},jD={class:"pop-up-header"},WD=ee("p",null,"We've got News!",-1),HD=ee("i",{class:"i-close"},null,-1),zD=[HD],qD=["innerHTML"];function VD(e,t,n,r,i,o){return Ke(),ot("div",UD,[ee("div",{onClick:t[0]||(t[0]=s=>e.$emit("closeNewsModal")),class:"pop-up-close"}),ee("div",FD,[ee("div",jD,[WD,ee("button",{onClick:t[1]||(t[1]=s=>e.$emit("closeNewsModal")),class:"btn-close"},zD)]),ee("div",{class:"pop-up-content",innerHTML:n.news.desc},null,8,qD)])])}const GD=ai(LD,[["render",VD]]),KD={methods:{},computed:{...Vi(["chainId"]),getGitBookLink(){if(Number(this.chainId)===8453)return"https://carol-8.gitbook.io/documentation/users-guide/how-carol-protocol-works";if(!this.chainId||Number(this.chainId)===56)return"https://carol-8.gitbook.io/documentation/cross-blockchain-integration/launch-carol-protocol-on-bnb-chain"}}},ZD={class:"footer-wrap"},JD={class:"row row-footer-wrap"},YD={class:"container"},XD={class:"row row-footer"},QD={class:"part part-right"},eI={key:0,src:pp,alt:"",style:{width:"120px",height:"auto"}},tI={key:1,src:mp,alt:"",style:{width:"120px",height:"auto"}},nI={class:"part part-center"},rI={class:"row row-nav"},iI={class:"part part-right"},oI={class:"row row-social-links"},sI=J3('<a class="social-link" href="https://twitter.com/carol_protocol" target="_blank" rel="nofollow"><i class="i-twitter-new"></i></a><a class="social-link" href="https://t.me/CAROL_protocol_group" target="_blank"><i class="i-telegram-new"></i></a><a class="social-link" href=" https://discord.gg/XYddwyDhXq" target="_blank"><i class="i-discord"></i></a>',3),aI=["href"],cI=ee("i",{class:"i-gitbook"},null,-1),lI=[cI],uI=ee("a",{class:"social-link",href:"https://github.com/SpyWolfNetwork/Smart_Contract_Audits/blob/main/August_2023/Carol_Protocol_0x7ed834b7bd8429368681DA8e1FEf190bf9059Da4.pdf",target:"_blank"},[ee("i",{class:"i-audit"})],-1),dI=ee("div",{class:"row row-footer-wrap"},[ee("div",{class:"container"},[ee("div",{class:"row row-footer row-footer-additional"},[ee("div",{class:"part part-left"},"Copyright © 2023.")])])],-1);function fI(e,t,n,r,i,o){const s=mn("RouterLink");return Ke(),ot("div",ZD,[ee("footer",null,[ee("div",JD,[ee("div",YD,[ee("div",XD,[ee("div",QD,[Fe(s,{to:{name:"MainPage"},tag:"a",class:"logo"},{default:St(()=>[Number(e.chainId)===97||Number(e.chainId)===56?(Ke(),ot("img",eI)):dr("",!0),Number(e.chainId)===8453?(Ke(),ot("img",tI)):dr("",!0)]),_:1})]),ee("div",nI,[ee("nav",rI,[Fe(s,{to:{name:"Bonding"}},{default:St(()=>[Kt(" Bond CAROL")]),_:1}),Fe(s,{to:{name:"Staking"}},{default:St(()=>[Kt(" Stake CAROL ")]),_:1}),Fe(s,{to:{name:"ReferralProg"}},{default:St(()=>[Kt(" Incentive program ")]),_:1}),Fe(s,{to:{name:"Proposals"}},{default:St(()=>[Kt(" Proposals ")]),_:1})])]),ee("div",iI,[ee("div",oI,[sI,ee("a",{class:"social-link",href:o.getGitBookLink,target:"_blank"},lI,8,aI),uI])])])])]),dI])])}const hI=ai(KD,[["render",fI]]),pI={data(){return{timeout:null,pushError:!1}},props:["notification"],computed:{typeClass(){return`block ${this.notification.typeClass} flexInlineBetween`}},created(){if(!this.notification.gtmTag){const e=this.notification.message.length>40?7500:5e3;this.timeout=setTimeout(()=>{this.remove_notification(this.notification)},e)}},methods:{...Vu(["remove_notification"]),closeNotif(){this.remove_notification(this.notification)}},beforeDestroy(){clearTimeout(this.timeout)}},mI={class:"content"},gI=ee("i",{class:"i-close"},null,-1),wI=[gI];function bI(e,t,n,r,i,o){return Ke(),ot("div",{class:Zo(["notification",{warning:n.notification.type==="warning",success:n.notification.type==="success",error:n.notification.type==="error"}])},[ee("div",mI,Xs(n.notification.message),1),ee("button",{onClick:t[0]||(t[0]=s=>o.closeNotif()),class:"btn-close"},wI)],2)}const yI=ai(pI,[["render",bI]]),vI={components:{Notification:yI},computed:{...Vi(["notifications"])}},xI={key:0,class:"notification-list"};function _I(e,t,n,r,i,o){const s=mn("Notification");return e.notifications.length?(Ke(),ot("div",xI,[(Ke(!0),ot(gn,null,P3(e.notifications,a=>(Ke(),Yl(s,{key:a.id,notification:a},null,8,["notification"]))),128))])):dr("",!0)}const CI=ai(vI,[["render",_I]]);function EI(e){var t=window.location.search.substring(1),n=t.split("&"),r,i;for(i=0;i<n.length;i++)if(r=n[i].split("="),r[0]===e)return typeof r[1]===void 0?!0:decodeURIComponent(r[1]);return!1}const TI={data(){return{}},components:{HeaderComponent:BD,FooterComponent:hI,NotificationList:CI,NewsModalComponent:GD},computed:{...Vi(["currentAddress","chainId","userCoinBalance","coinSymbol","contractData","openBurgerMenu","openWalletMenu","openLendingMenu","isConnecting","news"])},async mounted(){this.$root.core=new MP(this);const{web3modal:e}=this.$root.core;this.web3Modal=e;const t=cl(),{chain:n}=Di();if(n)if(Rn.indexOf(n.id)>=0)this.$store.commit("setChainId",n.id);else{const o=n.name.replace("Chain ","");confirm(`${Pr[o]?Pr[o]:"Chain selected in your wallet"} is not supported, please accept switching to ${Pr[Rn[0]]}`)&&setTimeout(async()=>{await this.$root.core.switchNetworkMethod(Rn[0])},1500)}t&&t.isConnected&&t.address?this.$store.commit("setCurrentAddress",t.address):this.$store.commit("setCurrentAddress","0x0000000000000000000000000000000000000000"),(this.$root.core.fetchUserDataInterval||this.$root.core.fetchContractDataInterval)&&this.$root.core.stopIntervals(),this.chainId||this.$store.commit("setChainId",Rn[0]),this.currentAddress!=="0x0000000000000000000000000000000000000000"&&(await this.$root.core.fetchContractDataInLoop(this.currentAddress),await this.$root.core.fetchUserDataInLoop(this.currentAddress,this.chainId)),Vw(async i=>{i.isConnected?(this.$store.commit("setCurrentAddress",i.address),(this.$root.core.fetchUserDataInterval||this.$root.core.fetchContractDataInterval)&&(this.$root.core.stopIntervals(),this.$store.commit("resetState")),await this.$root.core.fetchContractDataInLoop(this.currentAddress),await this.$root.core.fetchUserDataInLoop(this.currentAddress,this.chainId),setTimeout(async()=>{var s;const o=Di();this.chainId&&((s=o==null?void 0:o.chain)!=null&&s.id)&&Number(this.chainId)!==Number(o.chain.id)&&(alert("mismatch chain id detected, please switch network to use the web page."),await this.$root.core.switchNetworkMethod(Rn[0]))},7e3)):(this.$store.commit("setCurrentAddress","0x0000000000000000000000000000000000000000"),this.$store.commit("setChainId",Rn[0]),(this.$root.core.fetchUserDataInterval||this.$root.core.fetchContractDataInterval)&&(this.$root.core.stopIntervals(),this.$store.commit("resetState"),this.$root.core.getCurrentRate()),await this.$root.core.fetchContractDataInLoop(this.currentAddress),await this.$root.core.fetchUserDataInLoop(this.currentAddress,this.chainId))}),Gw(async i=>{if(i&&i.chain){if(!(Rn.indexOf(i.chain.id)>=0)){const s=i.chain.name.replace("Chain ","");alert(`${Pr[s]?Pr[s]:"Chain selected in your wallet"} is not supported, please accept switching to ${Pr[Rn[0]]}`),await this.$root.core.switchNetworkMethod(Rn[0]);return}this.$root.core.fetchUserDataInterval&&(this.$root.core.stopIntervals(),this.$store.commit("resetState")),this.$store.commit("setChainId",i.chain.id),await this.$root.core.fetchUserDataInLoop(this.currentAddress,this.chainId),await this.$root.core.fetchContractDataInLoop(this.currentAddress)}else this.$store.commit("setChainId",Rn[0])}),setTimeout(()=>{this.$store.dispatch("fetchNews")},2500);const r=EI("partner");window.localStorage.setItem("aads",r)},beforeUnmount(){window.removeEventListener("beforeunload",beforeUnloadHandler)},methods:{getChainName(e){return this.$root.core?this.$root.core.chains.find(t=>Number(t.id)===Number(e)).name:e},async connectToWallet(){try{this.$store.commit("setIsConnecting",!0),await this.web3Modal.open()}catch(e){console.log(e)}},async disconnect(){await Hw()},async mint(e,t){if(Number(e)!==Number(this.chainId))try{await yh({chainId:Number(e)})}catch(n){if(n.toString().includes("Connector not found")){this.$store.commit("push_notification",{type:"error",typeClass:"error",message:"You need to connect your wallet first."});return}}await this.$root.core.writeContract("mint",this.chainId,[this.currentAddress,ethers.utils.parseEther(t.toString())])},closeNewsModal(){localStorage.setItem("newsSeenAt",Math.floor(new Date().getTime()/1e3)),localStorage.setItem("seenNews",JSON.stringify(this.news[0].desc.slice(0,50))),this.$store.commit("setNews",[])}}},SI={class:"header-wrap"};function AI(e,t,n,r,i,o){const s=mn("news-modal-component"),a=mn("NotificationList"),c=mn("HeaderComponent"),u=mn("MobileMenu"),l=mn("router-view"),d=mn("FooterComponent");return Ke(),ot(gn,null,[e.news&&e.news.length>0?(Ke(),Yl(s,{key:0,onCloseNewsModal:o.closeNewsModal,news:e.news[0]},null,8,["onCloseNewsModal","news"])):dr("",!0),Fe(a),ee("div",SI,[Fe(c,{onConnectToWallet:t[0]||(t[0]=p=>o.connectToWallet()),onDisconnect:t[1]||(t[1]=p=>o.disconnect())}),Fe(u,{onDisconnect:t[2]||(t[2]=p=>o.disconnect())})]),Fe(l,{onConnectToWallet:t[3]||(t[3]=p=>o.connectToWallet())}),Fe(d)],64)}const $I=ai(TI,[["render",AI],["__scopeId","data-v-5d2ac03c"]]);/*!
  * vue-router v4.2.2
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const ao=typeof window<"u";function PI(e){return e.__esModule||e[Symbol.toStringTag]==="Module"}const ze=Object.assign;function Wd(e,t){const n={};for(const r in t){const i=t[r];n[r]=$n(i)?i.map(e):e(i)}return n}const Ks=()=>{},$n=Array.isArray,OI=/\/$/,DI=e=>e.replace(OI,"");function Hd(e,t,n="/"){let r,i={},o="",s="";const a=t.indexOf("#");let c=t.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(r=t.slice(0,c),o=t.slice(c+1,a>-1?a:t.length),i=e(o)),a>-1&&(r=r||t.slice(0,a),s=t.slice(a,t.length)),r=kI(r??t,n),{fullPath:r+(o&&"?")+o+s,path:r,query:i,hash:s}}function II(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function sg(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function RI(e,t,n){const r=t.matched.length-1,i=n.matched.length-1;return r>-1&&r===i&&Vo(t.matched[r],n.matched[i])&&Ky(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function Vo(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function Ky(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!NI(e[n],t[n]))return!1;return!0}function NI(e,t){return $n(e)?ag(e,t):$n(t)?ag(t,e):e===t}function ag(e,t){return $n(t)?e.length===t.length&&e.every((n,r)=>n===t[r]):e.length===1&&e[0]===t}function kI(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/"),i=r[r.length-1];(i===".."||i===".")&&r.push("");let o=n.length-1,s,a;for(s=0;s<r.length;s++)if(a=r[s],a!==".")if(a==="..")o>1&&o--;else break;return n.slice(0,o).join("/")+"/"+r.slice(s-(s===r.length?1:0)).join("/")}var Fa;(function(e){e.pop="pop",e.push="push"})(Fa||(Fa={}));var Zs;(function(e){e.back="back",e.forward="forward",e.unknown=""})(Zs||(Zs={}));function MI(e){if(!e)if(ao){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),DI(e)}const BI=/^[^#]+#/;function LI(e,t){return e.replace(BI,"#")+t}function UI(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const Ju=()=>({left:window.pageXOffset,top:window.pageYOffset});function FI(e){let t;if("el"in e){const n=e.el,r=typeof n=="string"&&n.startsWith("#"),i=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;t=UI(i,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.pageXOffset,t.top!=null?t.top:window.pageYOffset)}function cg(e,t){return(history.state?history.state.position-t:-1)+e}const f0=new Map;function jI(e,t){f0.set(e,t)}function WI(e){const t=f0.get(e);return f0.delete(e),t}let HI=()=>location.protocol+"//"+location.host;function Zy(e,t){const{pathname:n,search:r,hash:i}=t,o=e.indexOf("#");if(o>-1){let a=i.includes(e.slice(o))?e.slice(o).length:1,c=i.slice(a);return c[0]!=="/"&&(c="/"+c),sg(c,"")}return sg(n,e)+r+i}function zI(e,t,n,r){let i=[],o=[],s=null;const a=({state:p})=>{const g=Zy(e,location),w=n.value,y=t.value;let x=0;if(p){if(n.value=g,t.value=p,s&&s===w){s=null;return}x=y?p.position-y.position:0}else r(g);i.forEach(E=>{E(n.value,w,{delta:x,type:Fa.pop,direction:x?x>0?Zs.forward:Zs.back:Zs.unknown})})};function c(){s=n.value}function u(p){i.push(p);const g=()=>{const w=i.indexOf(p);w>-1&&i.splice(w,1)};return o.push(g),g}function l(){const{history:p}=window;p.state&&p.replaceState(ze({},p.state,{scroll:Ju()}),"")}function d(){for(const p of o)p();o=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",l)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",l,{passive:!0}),{pauseListeners:c,listen:u,destroy:d}}function lg(e,t,n,r=!1,i=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:i?Ju():null}}function qI(e){const{history:t,location:n}=window,r={value:Zy(e,n)},i={value:t.state};i.value||o(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function o(c,u,l){const d=e.indexOf("#"),p=d>-1?(n.host&&document.querySelector("base")?e:e.slice(d))+c:HI()+e+c;try{t[l?"replaceState":"pushState"](u,"",p),i.value=u}catch(g){console.error(g),n[l?"replace":"assign"](p)}}function s(c,u){const l=ze({},t.state,lg(i.value.back,c,i.value.forward,!0),u,{position:i.value.position});o(c,l,!0),r.value=c}function a(c,u){const l=ze({},i.value,t.state,{forward:c,scroll:Ju()});o(l.current,l,!0);const d=ze({},lg(r.value,c,null),{position:l.position+1},u);o(c,d,!1),r.value=c}return{location:r,state:i,push:a,replace:s}}function VI(e){e=MI(e);const t=qI(e),n=zI(e,t.state,t.location,t.replace);function r(o,s=!0){s||n.pauseListeners(),history.go(o)}const i=ze({location:"",base:e,go:r,createHref:LI.bind(null,e)},t,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>t.state.value}),i}function GI(e){return typeof e=="string"||e&&typeof e=="object"}function Jy(e){return typeof e=="string"||typeof e=="symbol"}const Ar={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Yy=Symbol("");var ug;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(ug||(ug={}));function Go(e,t){return ze(new Error,{type:e,[Yy]:!0},t)}function or(e,t){return e instanceof Error&&Yy in e&&(t==null||!!(e.type&t))}const dg="[^/]+?",KI={sensitive:!1,strict:!1,start:!0,end:!0},ZI=/[.+*?^${}()[\]/\\]/g;function JI(e,t){const n=ze({},KI,t),r=[];let i=n.start?"^":"";const o=[];for(const u of e){const l=u.length?[]:[90];n.strict&&!u.length&&(i+="/");for(let d=0;d<u.length;d++){const p=u[d];let g=40+(n.sensitive?.25:0);if(p.type===0)d||(i+="/"),i+=p.value.replace(ZI,"\\$&"),g+=40;else if(p.type===1){const{value:w,repeatable:y,optional:x,regexp:E}=p;o.push({name:w,repeatable:y,optional:x});const b=E||dg;if(b!==dg){g+=10;try{new RegExp(`(${b})`)}catch(_){throw new Error(`Invalid custom RegExp for param "${w}" (${b}): `+_.message)}}let C=y?`((?:${b})(?:/(?:${b}))*)`:`(${b})`;d||(C=x&&u.length<2?`(?:/${C})`:"/"+C),x&&(C+="?"),i+=C,g+=20,x&&(g+=-8),y&&(g+=-20),b===".*"&&(g+=-50)}l.push(g)}r.push(l)}if(n.strict&&n.end){const u=r.length-1;r[u][r[u].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const s=new RegExp(i,n.sensitive?"":"i");function a(u){const l=u.match(s),d={};if(!l)return null;for(let p=1;p<l.length;p++){const g=l[p]||"",w=o[p-1];d[w.name]=g&&w.repeatable?g.split("/"):g}return d}function c(u){let l="",d=!1;for(const p of e){(!d||!l.endsWith("/"))&&(l+="/"),d=!1;for(const g of p)if(g.type===0)l+=g.value;else if(g.type===1){const{value:w,repeatable:y,optional:x}=g,E=w in u?u[w]:"";if($n(E)&&!y)throw new Error(`Provided param "${w}" is an array but it is not repeatable (* or + modifiers)`);const b=$n(E)?E.join("/"):E;if(!b)if(x)p.length<2&&(l.endsWith("/")?l=l.slice(0,-1):d=!0);else throw new Error(`Missing required param "${w}"`);l+=b}}return l||"/"}return{re:s,score:r,keys:o,parse:a,stringify:c}}function YI(e,t){let n=0;for(;n<e.length&&n<t.length;){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?e.length===1&&e[0]===40+40?-1:1:e.length>t.length?t.length===1&&t[0]===40+40?1:-1:0}function XI(e,t){let n=0;const r=e.score,i=t.score;for(;n<r.length&&n<i.length;){const o=YI(r[n],i[n]);if(o)return o;n++}if(Math.abs(i.length-r.length)===1){if(fg(r))return 1;if(fg(i))return-1}return i.length-r.length}function fg(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const QI={type:0,value:""},eR=/[a-zA-Z0-9_]/;function tR(e){if(!e)return[[]];if(e==="/")return[[QI]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(g){throw new Error(`ERR (${n})/"${u}": ${g}`)}let n=0,r=n;const i=[];let o;function s(){o&&i.push(o),o=[]}let a=0,c,u="",l="";function d(){u&&(n===0?o.push({type:0,value:u}):n===1||n===2||n===3?(o.length>1&&(c==="*"||c==="+")&&t(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),o.push({type:1,value:u,regexp:l,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):t("Invalid state to consume buffer"),u="")}function p(){u+=c}for(;a<e.length;){if(c=e[a++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(u&&d(),s()):c===":"?(d(),n=1):p();break;case 4:p(),n=r;break;case 1:c==="("?n=2:eR.test(c)?p():(d(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?l[l.length-1]=="\\"?l=l.slice(0,-1)+c:n=3:l+=c;break;case 3:d(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,l="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${u}"`),d(),s(),i}function nR(e,t,n){const r=JI(tR(e.path),n),i=ze(r,{record:e,parent:t,children:[],alias:[]});return t&&!i.record.aliasOf==!t.record.aliasOf&&t.children.push(i),i}function rR(e,t){const n=[],r=new Map;t=mg({strict:!1,end:!0,sensitive:!1},t);function i(l){return r.get(l)}function o(l,d,p){const g=!p,w=iR(l);w.aliasOf=p&&p.record;const y=mg(t,l),x=[w];if("alias"in l){const C=typeof l.alias=="string"?[l.alias]:l.alias;for(const _ of C)x.push(ze({},w,{components:p?p.record.components:w.components,path:_,aliasOf:p?p.record:w}))}let E,b;for(const C of x){const{path:_}=C;if(d&&_[0]!=="/"){const T=d.record.path,$=T[T.length-1]==="/"?"":"/";C.path=d.record.path+(_&&$+_)}if(E=nR(C,d,y),p?p.alias.push(E):(b=b||E,b!==E&&b.alias.push(E),g&&l.name&&!pg(E)&&s(l.name)),w.children){const T=w.children;for(let $=0;$<T.length;$++)o(T[$],E,p&&p.children[$])}p=p||E,(E.record.components&&Object.keys(E.record.components).length||E.record.name||E.record.redirect)&&c(E)}return b?()=>{s(b)}:Ks}function s(l){if(Jy(l)){const d=r.get(l);d&&(r.delete(l),n.splice(n.indexOf(d),1),d.children.forEach(s),d.alias.forEach(s))}else{const d=n.indexOf(l);d>-1&&(n.splice(d,1),l.record.name&&r.delete(l.record.name),l.children.forEach(s),l.alias.forEach(s))}}function a(){return n}function c(l){let d=0;for(;d<n.length&&XI(l,n[d])>=0&&(l.record.path!==n[d].record.path||!Xy(l,n[d]));)d++;n.splice(d,0,l),l.record.name&&!pg(l)&&r.set(l.record.name,l)}function u(l,d){let p,g={},w,y;if("name"in l&&l.name){if(p=r.get(l.name),!p)throw Go(1,{location:l});y=p.record.name,g=ze(hg(d.params,p.keys.filter(b=>!b.optional).map(b=>b.name)),l.params&&hg(l.params,p.keys.map(b=>b.name))),w=p.stringify(g)}else if("path"in l)w=l.path,p=n.find(b=>b.re.test(w)),p&&(g=p.parse(w),y=p.record.name);else{if(p=d.name?r.get(d.name):n.find(b=>b.re.test(d.path)),!p)throw Go(1,{location:l,currentLocation:d});y=p.record.name,g=ze({},d.params,l.params),w=p.stringify(g)}const x=[];let E=p;for(;E;)x.unshift(E.record),E=E.parent;return{name:y,path:w,params:g,matched:x,meta:sR(x)}}return e.forEach(l=>o(l)),{addRoute:o,resolve:u,removeRoute:s,getRoutes:a,getRecordMatcher:i}}function hg(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function iR(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:oR(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function oR(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]=typeof n=="boolean"?n:n[r];return t}function pg(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function sR(e){return e.reduce((t,n)=>ze(t,n.meta),{})}function mg(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}function Xy(e,t){return t.children.some(n=>n===e||Xy(e,n))}const Qy=/#/g,aR=/&/g,cR=/\//g,lR=/=/g,uR=/\?/g,e5=/\+/g,dR=/%5B/g,fR=/%5D/g,t5=/%5E/g,hR=/%60/g,n5=/%7B/g,pR=/%7C/g,r5=/%7D/g,mR=/%20/g;function gp(e){return encodeURI(""+e).replace(pR,"|").replace(dR,"[").replace(fR,"]")}function gR(e){return gp(e).replace(n5,"{").replace(r5,"}").replace(t5,"^")}function h0(e){return gp(e).replace(e5,"%2B").replace(mR,"+").replace(Qy,"%23").replace(aR,"%26").replace(hR,"`").replace(n5,"{").replace(r5,"}").replace(t5,"^")}function wR(e){return h0(e).replace(lR,"%3D")}function bR(e){return gp(e).replace(Qy,"%23").replace(uR,"%3F")}function yR(e){return e==null?"":bR(e).replace(cR,"%2F")}function Fl(e){try{return decodeURIComponent(""+e)}catch{}return""+e}function vR(e){const t={};if(e===""||e==="?")return t;const r=(e[0]==="?"?e.slice(1):e).split("&");for(let i=0;i<r.length;++i){const o=r[i].replace(e5," "),s=o.indexOf("="),a=Fl(s<0?o:o.slice(0,s)),c=s<0?null:Fl(o.slice(s+1));if(a in t){let u=t[a];$n(u)||(u=t[a]=[u]),u.push(c)}else t[a]=c}return t}function gg(e){let t="";for(let n in e){const r=e[n];if(n=wR(n),r==null){r!==void 0&&(t+=(t.length?"&":"")+n);continue}($n(r)?r.map(o=>o&&h0(o)):[r&&h0(r)]).forEach(o=>{o!==void 0&&(t+=(t.length?"&":"")+n,o!=null&&(t+="="+o))})}return t}function xR(e){const t={};for(const n in e){const r=e[n];r!==void 0&&(t[n]=$n(r)?r.map(i=>i==null?null:""+i):r==null?r:""+r)}return t}const _R=Symbol(""),wg=Symbol(""),wp=Symbol(""),i5=Symbol(""),p0=Symbol("");function $s(){let e=[];function t(r){return e.push(r),()=>{const i=e.indexOf(r);i>-1&&e.splice(i,1)}}function n(){e=[]}return{add:t,list:()=>e,reset:n}}function Or(e,t,n,r,i){const o=r&&(r.enterCallbacks[i]=r.enterCallbacks[i]||[]);return()=>new Promise((s,a)=>{const c=d=>{d===!1?a(Go(4,{from:n,to:t})):d instanceof Error?a(d):GI(d)?a(Go(2,{from:t,to:d})):(o&&r.enterCallbacks[i]===o&&typeof d=="function"&&o.push(d),s())},u=e.call(r&&r.instances[i],t,n,c);let l=Promise.resolve(u);e.length<3&&(l=l.then(c)),l.catch(d=>a(d))})}function zd(e,t,n,r){const i=[];for(const o of e)for(const s in o.components){let a=o.components[s];if(!(t!=="beforeRouteEnter"&&!o.instances[s]))if(CR(a)){const u=(a.__vccOpts||a)[t];u&&i.push(Or(u,n,r,o,s))}else{let c=a();i.push(()=>c.then(u=>{if(!u)return Promise.reject(new Error(`Couldn't resolve component "${s}" at "${o.path}"`));const l=PI(u)?u.default:u;o.components[s]=l;const p=(l.__vccOpts||l)[t];return p&&Or(p,n,r,o,s)()}))}}return i}function CR(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function bg(e){const t=Hn(wp),n=Hn(i5),r=Gt(()=>t.resolve(wo(e.to))),i=Gt(()=>{const{matched:c}=r.value,{length:u}=c,l=c[u-1],d=n.matched;if(!l||!d.length)return-1;const p=d.findIndex(Vo.bind(null,l));if(p>-1)return p;const g=yg(c[u-2]);return u>1&&yg(l)===g&&d[d.length-1].path!==g?d.findIndex(Vo.bind(null,c[u-2])):p}),o=Gt(()=>i.value>-1&&AR(n.params,r.value.params)),s=Gt(()=>i.value>-1&&i.value===n.matched.length-1&&Ky(n.params,r.value.params));function a(c={}){return SR(c)?t[wo(e.replace)?"replace":"push"](wo(e.to)).catch(Ks):Promise.resolve()}return{route:r,href:Gt(()=>r.value.href),isActive:o,isExactActive:s,navigate:a}}const ER=r2({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:bg,setup(e,{slots:t}){const n=Xo(bg(e)),{options:r}=Hn(wp),i=Gt(()=>({[vg(e.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[vg(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const o=t.default&&t.default(n);return e.custom?o:v2("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},o)}}}),TR=ER;function SR(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function AR(e,t){for(const n in t){const r=t[n],i=e[n];if(typeof r=="string"){if(r!==i)return!1}else if(!$n(i)||i.length!==r.length||r.some((o,s)=>o!==i[s]))return!1}return!0}function yg(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const vg=(e,t,n)=>e??t??n,$R=r2({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const r=Hn(p0),i=Gt(()=>e.route||r.value),o=Hn(wg,0),s=Gt(()=>{let u=wo(o);const{matched:l}=i.value;let d;for(;(d=l[u])&&!d.components;)u++;return u}),a=Gt(()=>i.value.matched[s.value]);Mc(wg,Gt(()=>s.value+1)),Mc(_R,a),Mc(p0,i);const c=J5();return yo(()=>[c.value,a.value,e.name],([u,l,d],[p,g,w])=>{l&&(l.instances[d]=u,g&&g!==l&&u&&u===p&&(l.leaveGuards.size||(l.leaveGuards=g.leaveGuards),l.updateGuards.size||(l.updateGuards=g.updateGuards))),u&&l&&(!g||!Vo(l,g)||!p)&&(l.enterCallbacks[d]||[]).forEach(y=>y(u))},{flush:"post"}),()=>{const u=i.value,l=e.name,d=a.value,p=d&&d.components[l];if(!p)return xg(n.default,{Component:p,route:u});const g=d.props[l],w=g?g===!0?u.params:typeof g=="function"?g(u):g:null,x=v2(p,ze({},w,t,{onVnodeUnmounted:E=>{E.component.isUnmounted&&(d.instances[l]=null)},ref:c}));return xg(n.default,{Component:x,route:u})||x}}});function xg(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const PR=$R;function OR(e){const t=rR(e.routes,e),n=e.parseQuery||vR,r=e.stringifyQuery||gg,i=e.history,o=$s(),s=$s(),a=$s(),c=Y5(Ar);let u=Ar;ao&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const l=Wd.bind(null,F=>""+F),d=Wd.bind(null,yR),p=Wd.bind(null,Fl);function g(F,Q){let Y,ie;return Jy(F)?(Y=t.getRecordMatcher(F),ie=Q):ie=F,t.addRoute(ie,Y)}function w(F){const Q=t.getRecordMatcher(F);Q&&t.removeRoute(Q)}function y(){return t.getRoutes().map(F=>F.record)}function x(F){return!!t.getRecordMatcher(F)}function E(F,Q){if(Q=ze({},Q||c.value),typeof F=="string"){const N=Hd(n,F,Q.path),W=t.resolve({path:N.path},Q),G=i.createHref(N.fullPath);return ze(N,W,{params:p(W.params),hash:Fl(N.hash),redirectedFrom:void 0,href:G})}let Y;if("path"in F)Y=ze({},F,{path:Hd(n,F.path,Q.path).path});else{const N=ze({},F.params);for(const W in N)N[W]==null&&delete N[W];Y=ze({},F,{params:d(N)}),Q.params=d(Q.params)}const ie=t.resolve(Y,Q),ye=F.hash||"";ie.params=l(p(ie.params));const P=II(r,ze({},F,{hash:gR(ye),path:ie.path})),O=i.createHref(P);return ze({fullPath:P,hash:ye,query:r===gg?xR(F.query):F.query||{}},ie,{redirectedFrom:void 0,href:O})}function b(F){return typeof F=="string"?Hd(n,F,c.value.path):ze({},F)}function C(F,Q){if(u!==F)return Go(8,{from:Q,to:F})}function _(F){return h(F)}function T(F){return _(ze(b(F),{replace:!0}))}function $(F){const Q=F.matched[F.matched.length-1];if(Q&&Q.redirect){const{redirect:Y}=Q;let ie=typeof Y=="function"?Y(F):Y;return typeof ie=="string"&&(ie=ie.includes("?")||ie.includes("#")?ie=b(ie):{path:ie},ie.params={}),ze({query:F.query,hash:F.hash,params:"path"in ie?{}:F.params},ie)}}function h(F,Q){const Y=u=E(F),ie=c.value,ye=F.state,P=F.force,O=F.replace===!0,N=$(Y);if(N)return h(ze(b(N),{state:typeof N=="object"?ze({},ye,N.state):ye,force:P,replace:O}),Q||Y);const W=Y;W.redirectedFrom=Q;let G;return!P&&RI(r,ie,Y)&&(G=Go(16,{to:W,from:ie}),be(ie,ie,!0,!1)),(G?Promise.resolve(G):D(W,ie)).catch(X=>or(X)?or(X,2)?X:Ae(X):ne(X,W,ie)).then(X=>{if(X){if(or(X,2))return h(ze({replace:O},b(X.to),{state:typeof X.to=="object"?ze({},ye,X.to.state):ye,force:P}),Q||W)}else X=L(W,ie,!0,O,ye);return R(W,ie,X),X})}function S(F,Q){const Y=C(F,Q);return Y?Promise.reject(Y):Promise.resolve()}function U(F){const Q=_e.values().next().value;return Q&&typeof Q.runWithContext=="function"?Q.runWithContext(F):F()}function D(F,Q){let Y;const[ie,ye,P]=DR(F,Q);Y=zd(ie.reverse(),"beforeRouteLeave",F,Q);for(const N of ie)N.leaveGuards.forEach(W=>{Y.push(Or(W,F,Q))});const O=S.bind(null,F,Q);return Y.push(O),Te(Y).then(()=>{Y=[];for(const N of o.list())Y.push(Or(N,F,Q));return Y.push(O),Te(Y)}).then(()=>{Y=zd(ye,"beforeRouteUpdate",F,Q);for(const N of ye)N.updateGuards.forEach(W=>{Y.push(Or(W,F,Q))});return Y.push(O),Te(Y)}).then(()=>{Y=[];for(const N of F.matched)if(N.beforeEnter&&!Q.matched.includes(N))if($n(N.beforeEnter))for(const W of N.beforeEnter)Y.push(Or(W,F,Q));else Y.push(Or(N.beforeEnter,F,Q));return Y.push(O),Te(Y)}).then(()=>(F.matched.forEach(N=>N.enterCallbacks={}),Y=zd(P,"beforeRouteEnter",F,Q),Y.push(O),Te(Y))).then(()=>{Y=[];for(const N of s.list())Y.push(Or(N,F,Q));return Y.push(O),Te(Y)}).catch(N=>or(N,8)?N:Promise.reject(N))}function R(F,Q,Y){for(const ie of a.list())U(()=>ie(F,Q,Y))}function L(F,Q,Y,ie,ye){const P=C(F,Q);if(P)return P;const O=Q===Ar,N=ao?history.state:{};Y&&(ie||O?i.replace(F.fullPath,ze({scroll:O&&N&&N.scroll},ye)):i.push(F.fullPath,ye)),c.value=F,be(F,Q,Y,O),Ae()}let H;function Z(){H||(H=i.listen((F,Q,Y)=>{if(!Pe.listening)return;const ie=E(F),ye=$(ie);if(ye){h(ze(ye,{replace:!0}),ie).catch(Ks);return}u=ie;const P=c.value;ao&&jI(cg(P.fullPath,Y.delta),Ju()),D(ie,P).catch(O=>or(O,12)?O:or(O,2)?(h(O.to,ie).then(N=>{or(N,20)&&!Y.delta&&Y.type===Fa.pop&&i.go(-1,!1)}).catch(Ks),Promise.reject()):(Y.delta&&i.go(-Y.delta,!1),ne(O,ie,P))).then(O=>{O=O||L(ie,P,!1),O&&(Y.delta&&!or(O,8)?i.go(-Y.delta,!1):Y.type===Fa.pop&&or(O,20)&&i.go(-1,!1)),R(ie,P,O)}).catch(Ks)}))}let z=$s(),J=$s(),q;function ne(F,Q,Y){Ae(F);const ie=J.list();return ie.length?ie.forEach(ye=>ye(F,Q,Y)):console.error(F),Promise.reject(F)}function fe(){return q&&c.value!==Ar?Promise.resolve():new Promise((F,Q)=>{z.add([F,Q])})}function Ae(F){return q||(q=!F,Z(),z.list().forEach(([Q,Y])=>F?Y(F):Q()),z.reset()),F}function be(F,Q,Y,ie){const{scrollBehavior:ye}=e;if(!ao||!ye)return Promise.resolve();const P=!Y&&WI(cg(F.fullPath,0))||(ie||!Y)&&history.state&&history.state.scroll||null;return Zg().then(()=>ye(F,Q,P)).then(O=>O&&FI(O)).catch(O=>ne(O,F,Q))}const pe=F=>i.go(F);let ce;const _e=new Set,Pe={currentRoute:c,listening:!0,addRoute:g,removeRoute:w,hasRoute:x,getRoutes:y,resolve:E,options:e,push:_,replace:T,go:pe,back:()=>pe(-1),forward:()=>pe(1),beforeEach:o.add,beforeResolve:s.add,afterEach:a.add,onError:J.add,isReady:fe,install(F){const Q=this;F.component("RouterLink",TR),F.component("RouterView",PR),F.config.globalProperties.$router=Q,Object.defineProperty(F.config.globalProperties,"$route",{enumerable:!0,get:()=>wo(c)}),ao&&!ce&&c.value===Ar&&(ce=!0,_(i.location).catch(ye=>{}));const Y={};for(const ye in Ar)Y[ye]=Gt(()=>c.value[ye]);F.provide(wp,Q),F.provide(i5,Xo(Y)),F.provide(p0,c);const ie=F.unmount;_e.add(F),F.unmount=function(){_e.delete(F),_e.size<1&&(u=Ar,H&&H(),H=null,c.value=Ar,ce=!1,q=!1),ie()}}};function Te(F){return F.reduce((Q,Y)=>Q.then(()=>U(Y)),Promise.resolve())}return Pe}function DR(e,t){const n=[],r=[],i=[],o=Math.max(t.matched.length,e.matched.length);for(let s=0;s<o;s++){const a=t.matched[s];a&&(e.matched.find(u=>Vo(u,a))?r.push(a):n.push(a));const c=e.matched[s];c&&(t.matched.find(u=>Vo(u,c))||i.push(c))}return[n,r,i]}const IR={},RR={class:"main-first"},NR=ee("div",{class:"container"},[ee("div",{class:"main-header"},[ee("p",{class:"main-title"}," Home Page ")])],-1),kR=[NR];function MR(e,t){return Ke(),ot("main",RR,kR)}const BR=ai(IR,[["render",MR]]),LR=[{path:"/",name:"MainPage",component:BR,redirect:"/bonding"},{path:"/bonding",name:"Bonding",component:()=>Vt(()=>import("./Bonding-ed82be13.js"),[]),beforeEnter(e,t,n){document.body.style.overflow="auto",window.scrollTo({top:0,behavior:"instant"}),n()}},{path:"/referral-program",name:"ReferralProg",component:()=>Vt(()=>import("./ReferralProg-8f071f88.js"),["assets/ReferralProg-8f071f88.js","assets/copyMixin-11d7a2ba.js"]),beforeEnter(e,t,n){document.body.style.overflow="auto",window.scrollTo({top:0,behavior:"instant"}),n()}},{path:"/staking:index?",name:"Staking",props:e=>({index:e.params.index||""}),component:()=>Vt(()=>import("./Staking-0bc5530d.js"),["assets/Staking-0bc5530d.js","assets/copyMixin-11d7a2ba.js"]),beforeEnter(e,t,n){document.body.style.overflow="auto",window.scrollTo({top:0,behavior:"instant"}),n()}},{path:"/proposals",name:"Proposals",component:()=>Vt(()=>import("./Proposals-8ffd3745.js"),[]),beforeEnter(e,t,n){document.body.style.overflow="auto",window.scrollTo({top:0,behavior:"instant"}),n()}},{path:"/newproposal",name:"CreateProposal",component:()=>Vt(()=>import("./CreateProposal-68995598.js"),[])},{path:"/details",name:"DetailsProposal",component:()=>Vt(()=>import("./DetailsProposal-41a1a0de.js"),[])},{path:"/:notFound(.*)",name:"NotFound",component:()=>Vt(()=>import("./NotFound-f912b62f.js"),[])}],UR=OR({history:VI(),base:{}.BASE_URL,routes:LR}),FR="AIzaSyBJRKcfSPE1yClyOTEpgaBgBCO-uGYJCW8",jR="1NszEvlgr1MK2PCMdxT9uU3EosWEG5CCT-A9lj5Ilbeo",WR=new pO.Store({state:{notifications:[],currentAddress:"0x0000000000000000000000000000000000000000",userData:null,siteData:null,reserves:null,openBurgerMenu:!1,userCoinBalance:0,userTokenBalance:0,userTokenAllowance:0,userLPTokenBalance:0,openWalletMenu:!1,rate:0,userDeposits:null,userBonds:null,userStakes:null,userClaims:null,userSells:null,userRebonds:null,userTransactions:null,openLendingMenu:!1,chainId:"",coinSymbol:"",erc20Symbol:"",theme:!1,news:[],isConnecting:!1},mutations:{setCurrentAddress(e,t){e.currentAddress=t},setRate(e,t){e.rate=t},setReserves(e,t){e.reserves=t},updateLastTheme(e,t){e.theme=t},setChainId(e,t){let n=document.getElementsByTagName("html")[0];const r=document.getElementById("favicon");Number(t)===97||Number(t)===56?(n.classList.add("yellow"),r.setAttribute("href","favicon-yellow.svg")):Number(t)===8453?(r.setAttribute("href","favicon.svg"),n.classList.remove("yellow")):(n.classList.add("yellow"),r.setAttribute("href","favicon-yellow.svg")),e.chainId=t},setCoinSymbol(e,t){e.coinSymbol=t},setERC20Symbol(e,t){e.erc20Symbol=t},setUserData(e,t){e.userData=t},setUserDeposits(e,t){e.userDeposits=t},setUserBonds(e,t){e.userBonds=t},setBondTypeStatus(e,t){e.bondTypeStatus=t},setUserClaims(e,t){e.userClaims=t},setUserSells(e,t){e.userSells=t},setUserRebonds(e,t){e.userRebonds=t},setUserStakes(e,t){e.userStakes=t},setUserTransactions(e,t){e.userTransactions=t},setUserCoinBalance(e,t){e.userCoinBalance=t},setUserTokenBalance(e,t){e.userTokenBalance=t},setUserTokenAllowance(e,t){e.userTokenAllowance=t},setUserLPTokenBalance(e,t){e.userLPTokenBalance=t},setSiteData(e,t){e.siteData=t},updateBurgerMenu(e,t){e.openBurgerMenu=t},updateLendingMenu(e,t){e.openLendingMenu=t},updateWalletMenu(e,t){e.openWalletMenu=t},resetState(e){e.userData=null,e.userCoinBalance=0,e.userTokenBalance=0,e.userLPTokenBalance=0,e.userBonds=null,e.userStakes=null,e.rate=0},push_notification(e,t){const n=e.notifications.findIndex(i=>i.message==="Your transaction has been confirmed");if(t.message.includes("Your transaction has successfully entered the blockchain")&&n>=0)return;e.notifications.findIndex(i=>i.message.toLowerCase()===t.message.toLowerCase())<0&&e.notifications.push({...t,id:(Math.random().toString(36)+Date.now().toString(36)).substr(2)})},clear_notifications(e,t){e.notifications=t},remove_notification(e,t){e.notifications=e.notifications.filter(n=>n.id!=t.id)},setIsConnecting(e,t){e.isConnecting=t},setNews(e,t){if(!t.length)e.news=t;else{let n=Math.floor(new Date().getTime()/1e3),r=window.localStorage.getItem("newsSeenAt"),i=JSON.parse(window.localStorage.getItem("seenNews")),o=t[0].desc.slice(0,50);(!r||Number(r)+6*3600<n||i&&i!==o)&&(e.news=t)}}},actions:{async fetchNews({commit:e},t){try{let n=[],r=await un.get(`https://sheets.googleapis.com/v4/spreadsheets/${jR}/values/news/?key=${FR}`);for(let i of r.data.values){const o={id:i[0],desc:i[1],informUsers:i[2]};n.push(o)}n[0]&&n[0].informUsers==="TRUE"&&e("setNews",n)}catch(n){console.log(n)}}},modules:{},getters:{getLendingMenu(e){return e.openLendingMenu},getBurgerMenu(e){return e.openBurgerMenu},getWalletMenu(e){return e.openWalletMenu}}});O6($I).use(WR).use(UR).mount("#app");export{Ke as $,br as A,Pa as B,Sn as C,Zr as D,sn as E,Da as F,xl as G,Ia as H,Mi as I,_l as J,Jr as K,Uf as L,Li as M,Gn as N,vl as O,Na as P,Oa as Q,Ni as R,Nt as S,Ht as T,Ye as U,Tl as V,Rf as W,Vi as X,QR as Y,M6 as Z,ai as _,W_ as a,Ai as a$,ot as a0,ee as a1,Kt as a2,Xs as a3,Zo as a4,y0 as a5,eN as a6,dr as a7,zR as a8,qR as a9,VR as aA,k6 as aB,ZR as aC,XR as aD,Yp as aE,Ki as aF,gn as aG,P3 as aH,Xp as aI,un as aJ,Pr as aK,P1 as aL,KR as aM,GR as aN,JR as aO,YR as aP,Fe as aQ,sc as aR,Wu as aS,Ix as aT,Si as aU,Ne as aV,Pn as aW,Mu as aX,xn as aY,An as aZ,ym as a_,J3 as aa,mn as ab,Yl as ac,St as ad,S7 as ae,U7 as af,F7 as ag,j7 as ah,Sw as ai,T7 as aj,Wc as ak,Dx as al,ae as am,ou as an,Rt as ao,$o as ap,sa as aq,O8 as ar,mu as as,mr as at,Ka as au,js as av,qn as aw,B1 as ax,h_ as ay,Vt as az,Ro as b,tP as b$,uM as b0,dM as b1,Rr as b2,kk as b3,Mk as b4,Bk as b5,Lk as b6,A$ as b7,Hk as b8,Fk as b9,Vk as bA,Gk as bB,Uk as bC,rM as bD,iM as bE,zu as bF,zk as bG,np as bH,aM as bI,nM as bJ,cM as bK,$M as bL,pM as bM,hM as bN,uP as bO,EM as bP,wM as bQ,dP as bR,fM as bS,xM as bT,bM as bU,_M as bV,TM as bW,yM as bX,vM as bY,CM as bZ,mM as b_,Wk as ba,jk as bb,xy as bc,Hu as bd,jt as be,Zk as bf,SM as bg,qk as bh,AM as bi,hc as bj,Qk as bk,sM as bl,oM as bm,Kk as bn,tM as bo,qo as bp,eM as bq,gM as br,lM as bs,ln as bt,Xk as bu,Jk as bv,Yk as bw,ep as bx,tp as by,_y as bz,ue as c,Ey as c0,Ld as c1,Rk as c2,Nk as c3,MS as c4,Kb as c5,Sa as d,Nf as e,Aa as f,fl as g,No as h,j_ as i,ko as j,hl as k,wr as l,pl as m,Mo as n,ki as o,ml as p,Gr as q,Kr as r,ib as s,$a as t,Bo as u,wl as v,Vn as w,Bi as x,bl as y,yl as z};
