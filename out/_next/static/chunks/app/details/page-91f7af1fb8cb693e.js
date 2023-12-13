(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[549],{2601:function(e,t,n){"use strict";var r,a;e.exports=(null==(r=n.g.process)?void 0:r.env)&&"object"==typeof(null==(a=n.g.process)?void 0:a.env)?n.g.process:n(8960)},4290:function(e,t,n){Promise.resolve().then(n.bind(n,6748))},6748:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return page}});var r=n(7437),a=n(2265),i=n(4440),o=n.n(i),l=n(4061),s=n(7127),c=n(8413),u=n(5778),d=n(3290),esm_createChainedFunction=function(...e){return e.filter(e=>null!=e).reduce((e,t)=>{if("function"!=typeof t)throw Error("Invalid Argument Type, must only provide functions, undefined, or null.");return null===e?t:function(...n){e.apply(this,n),t.apply(this,n)}},null)},f=n(8335),p=n(8984);let m={height:["marginTop","marginBottom"],width:["marginLeft","marginRight"]};function getDefaultDimensionValue(e,t){let n=`offset${e[0].toUpperCase()}${e.slice(1)}`,r=t[n],a=m[e];return r+parseInt((0,c.default)(t,a[0]),10)+parseInt((0,c.default)(t,a[1]),10)}let h={[u.EXITED]:"collapse",[u.EXITING]:"collapsing",[u.ENTERING]:"collapsing",[u.ENTERED]:"collapse show"},x=a.forwardRef(({onEnter:e,onEntering:t,onEntered:n,onExit:i,onExiting:l,className:s,children:c,dimension:u="height",in:m=!1,timeout:x=300,mountOnEnter:v=!1,unmountOnExit:y=!1,appear:E=!1,getDimensionValue:g=getDefaultDimensionValue,...j},N)=>{let b="function"==typeof u?u():u,w=(0,a.useMemo)(()=>esm_createChainedFunction(e=>{e.style[b]="0"},e),[b,e]),C=(0,a.useMemo)(()=>esm_createChainedFunction(e=>{let t=`scroll${b[0].toUpperCase()}${b.slice(1)}`;e.style[b]=`${e[t]}px`},t),[b,t]),_=(0,a.useMemo)(()=>esm_createChainedFunction(e=>{e.style[b]=null},n),[b,n]),T=(0,a.useMemo)(()=>esm_createChainedFunction(e=>{e.style[b]=`${g(b,e)}px`,(0,f.Z)(e)},i),[i,g,b]),$=(0,a.useMemo)(()=>esm_createChainedFunction(e=>{e.style[b]=null},l),[b,l]);return(0,r.jsx)(p.Z,{ref:N,addEndListener:d.Z,...j,"aria-expanded":j.role?m:null,onEnter:w,onEntering:C,onEntered:_,onExit:T,onExiting:$,childRef:c.ref,in:m,timeout:x,mountOnEnter:v,unmountOnExit:y,appear:E,children:(e,t)=>a.cloneElement(c,{...t,className:o()(s,c.props.className,h[e],"width"===b&&"collapse-horizontal")})})});function isAccordionItemSelected(e,t){return Array.isArray(e)?e.includes(t):e===t}let v=a.createContext({});v.displayName="AccordionContext";let y=a.forwardRef(({as:e="div",bsPrefix:t,className:n,children:i,eventKey:l,...c},u)=>{let{activeEventKey:d}=(0,a.useContext)(v);return t=(0,s.vE)(t,"accordion-collapse"),(0,r.jsx)(x,{ref:u,in:isAccordionItemSelected(d,l),...c,className:o()(n,t),children:(0,r.jsx)(e,{children:a.Children.only(i)})})});y.displayName="AccordionCollapse";let E=a.createContext({eventKey:""});E.displayName="AccordionItemContext";let g=a.forwardRef(({as:e="div",bsPrefix:t,className:n,onEnter:i,onEntering:l,onEntered:c,onExit:u,onExiting:d,onExited:f,...p},m)=>{t=(0,s.vE)(t,"accordion-body");let{eventKey:h}=(0,a.useContext)(E);return(0,r.jsx)(y,{eventKey:h,onEnter:i,onEntering:l,onEntered:c,onExit:u,onExiting:d,onExited:f,children:(0,r.jsx)(e,{ref:m,...p,className:o()(n,t)})})});g.displayName="AccordionBody";let j=a.forwardRef(({as:e="button",bsPrefix:t,className:n,onClick:i,...l},c)=>{t=(0,s.vE)(t,"accordion-button");let{eventKey:u}=(0,a.useContext)(E),d=function(e,t){let{activeEventKey:n,onSelect:r,alwaysOpen:i}=(0,a.useContext)(v);return a=>{let o=e===n?null:e;i&&(o=Array.isArray(n)?n.includes(e)?n.filter(t=>t!==e):[...n,e]:[e]),null==r||r(o,a),null==t||t(a)}}(u,i),{activeEventKey:f}=(0,a.useContext)(v);return"button"===e&&(l.type="button"),(0,r.jsx)(e,{ref:c,onClick:d,...l,"aria-expanded":Array.isArray(f)?f.includes(u):u===f,className:o()(n,t,!isAccordionItemSelected(f,u)&&"collapsed")})});j.displayName="AccordionButton";let N=a.forwardRef(({as:e="h2",bsPrefix:t,className:n,children:a,onClick:i,...l},c)=>(t=(0,s.vE)(t,"accordion-header"),(0,r.jsx)(e,{ref:c,...l,className:o()(n,t),children:(0,r.jsx)(j,{onClick:i,children:a})})));N.displayName="AccordionHeader";let b=a.forwardRef(({as:e="div",bsPrefix:t,className:n,eventKey:i,...l},c)=>{t=(0,s.vE)(t,"accordion-item");let u=(0,a.useMemo)(()=>({eventKey:i}),[i]);return(0,r.jsx)(E.Provider,{value:u,children:(0,r.jsx)(e,{ref:c,...l,className:o()(n,t)})})});b.displayName="AccordionItem";let w=a.forwardRef((e,t)=>{let{as:n="div",activeKey:i,bsPrefix:c,className:u,onSelect:d,flush:f,alwaysOpen:p,...m}=(0,l.useUncontrolled)(e,{activeKey:"onSelect"}),h=(0,s.vE)(c,"accordion"),x=(0,a.useMemo)(()=>({activeEventKey:i,onSelect:d,alwaysOpen:p}),[i,d,p]);return(0,r.jsx)(v.Provider,{value:x,children:(0,r.jsx)(n,{ref:t,...m,className:o()(u,h,f&&`${h}-flush`)})})});w.displayName="Accordion";var C=Object.assign(w,{Button:j,Collapse:y,Item:b,Header:N,Body:g});let _=a.forwardRef(({bsPrefix:e,bg:t="primary",pill:n=!1,text:a,className:i,as:l="span",...c},u)=>{let d=(0,s.vE)(e,"badge");return(0,r.jsx)(l,{ref:u,...c,className:o()(i,d,n&&"rounded-pill",a&&`text-${a}`,t&&`bg-${t}`)})});_.displayName="Badge";var T=n(5511);let $=a.forwardRef(({bsPrefix:e,active:t=!1,children:n,className:a,as:i="li",linkAs:l=T.Z,linkProps:c={},href:u,title:d,target:f,...p},m)=>{let h=(0,s.vE)(e,"breadcrumb-item");return(0,r.jsx)(i,{ref:m,...p,className:o()(h,a,{active:t}),"aria-current":t?"page":void 0,children:t?n:(0,r.jsx)(l,{...c,href:u,title:d,target:f,children:n})})});$.displayName="BreadcrumbItem";let R=a.forwardRef(({bsPrefix:e,className:t,listProps:n={},children:a,label:i="breadcrumb",as:l="nav",...c},u)=>{let d=(0,s.vE)(e,"breadcrumb");return(0,r.jsx)(l,{"aria-label":i,className:t,ref:u,...c,children:(0,r.jsx)("ol",{...n,className:o()(d,null==n?void 0:n.className),children:a})})});R.displayName="Breadcrumb";var k=Object.assign(R,{Item:$}),I=n(1387),A=n(4033),S=n(8597),D=n(4434),Z=n(6742),O=n(3198),L=n(2601),page=e=>{let{sectionData:t}=e,[n,i]=(0,a.useState)(t),o=(0,A.useSearchParams)(),[l,s]=(0,a.useState)("We are asking openai for more information"),[c,u]=(0,a.useState)(!1);(0,O.v9)(e=>e.auth);let d=L.env.NEXT_PUBLIC_BACKEND,fetchDescription=async e=>{let t=await fetch("".concat(d,"/openai/").concat(e)),n=await t.json();return s(n.data),u(!0),n.data};return(0,a.useEffect)(()=>{let fetchData=async()=>{let e=o.get("Province"),t=o.get("City"),n=o.get("Section"),r=["202310","202309","202308","202307","202306"].map(async r=>{let a=await fetch("".concat(L.env.NEXT_PUBLIC_BACKEND,"/waterpub/Home/GetSectionDataList?sectionName=").concat(n,"&cityCode=").concat(t,"&provinceCode=").concat(e,"&taskMonth=").concat(r)),i=await a.json();return{month:r,data:i}}),a=await Promise.all(r);i(a),await fetchDescription(o.get("Section"))};fetchData()},[]),(0,r.jsxs)("div",{style:{padding:"10px"},children:[(0,r.jsx)(S.Z,{children:(0,r.jsxs)(k,{children:[(0,r.jsx)(k.Item,{children:o.get("Province")}),(0,r.jsx)(k.Item,{children:o.get("City")}),(0,r.jsx)(k.Item,{active:!0,children:o.get("Section")})]})}),(0,r.jsxs)(S.Z,{children:[(0,r.jsxs)(D.Z,{children:[(0,r.jsxs)("h6",{children:["Details of Previous Data ",(0,r.jsx)(_,{bg:"primary",children:"China National Environmental Monitoring Centre"})]}),(0,r.jsx)(C,{children:n&&n.map((e,t)=>(0,r.jsxs)(C.Item,{eventKey:t,children:[(0,r.jsx)(C.Header,{children:e.month}),(0,r.jsx)(C.Body,{children:(0,r.jsxs)(I.Z,{striped:!0,bordered:!0,hover:!0,children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{width:"10%",children:"Key"}),(0,r.jsx)("th",{children:"Value"})]})}),(0,r.jsx)("tbody",{children:Object.keys(e.data[0]).map((t,n)=>(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:t}),e.data.map((e,n)=>(0,r.jsx)("td",{children:e[t]},n))]},n))})]})})]},t))})]}),(0,r.jsx)(D.Z,{xs:{span:3},style:{margin:"20px",padding:"20px"},children:(0,r.jsxs)(S.Z,{children:[(0,r.jsxs)("h6",{children:["Introduction about ",o.get("Section")," ",(0,r.jsx)(_,{bg:"primary",children:"OpenAI"})]}),c?(0,r.jsx)(Z.Z,{style:{margin:"10px",fontSize:"16px"},variant:"info",children:(0,r.jsx)("p",{children:l})}):(0,r.jsx)(Z.Z,{style:{margin:"10px",fontSize:"16px"},variant:"success",children:(0,r.jsx)("p",{children:l})})]})})]}),!n&&(0,r.jsx)("div",{children:"Loading..."})]})}},8960:function(e){!function(){var t={229:function(e){var t,n,r,a=e.exports={};function defaultSetTimout(){throw Error("setTimeout has not been defined")}function defaultClearTimeout(){throw Error("clearTimeout has not been defined")}function runTimeout(e){if(t===setTimeout)return setTimeout(e,0);if((t===defaultSetTimout||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(n){try{return t.call(null,e,0)}catch(n){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:defaultSetTimout}catch(e){t=defaultSetTimout}try{n="function"==typeof clearTimeout?clearTimeout:defaultClearTimeout}catch(e){n=defaultClearTimeout}}();var i=[],o=!1,l=-1;function cleanUpNextTick(){o&&r&&(o=!1,r.length?i=r.concat(i):l=-1,i.length&&drainQueue())}function drainQueue(){if(!o){var e=runTimeout(cleanUpNextTick);o=!0;for(var t=i.length;t;){for(r=i,i=[];++l<t;)r&&r[l].run();l=-1,t=i.length}r=null,o=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===defaultClearTimeout||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function Item(e,t){this.fun=e,this.array=t}function noop(){}a.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];i.push(new Item(e,t)),1!==i.length||o||runTimeout(drainQueue)},Item.prototype.run=function(){this.fun.apply(null,this.array)},a.title="browser",a.browser=!0,a.env={},a.argv=[],a.version="",a.versions={},a.on=noop,a.addListener=noop,a.once=noop,a.off=noop,a.removeListener=noop,a.removeAllListeners=noop,a.emit=noop,a.prependListener=noop,a.prependOnceListener=noop,a.listeners=function(e){return[]},a.binding=function(e){throw Error("process.binding is not supported")},a.cwd=function(){return"/"},a.chdir=function(e){throw Error("process.chdir is not supported")},a.umask=function(){return 0}}},n={};function __nccwpck_require__(e){var r=n[e];if(void 0!==r)return r.exports;var a=n[e]={exports:{}},i=!0;try{t[e](a,a.exports,__nccwpck_require__),i=!1}finally{i&&delete n[e]}return a.exports}__nccwpck_require__.ab="//";var r=__nccwpck_require__(229);e.exports=r}()},622:function(e,t,n){"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r=n(2265),a=Symbol.for("react.element"),i=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,l=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function q(e,t,n){var r,i={},c=null,u=null;for(r in void 0!==n&&(c=""+n),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(u=t.ref),t)o.call(t,r)&&!s.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===i[r]&&(i[r]=t[r]);return{$$typeof:a,type:e,key:c,ref:u,props:i,_owner:l.current}}t.Fragment=i,t.jsx=q,t.jsxs=q},7437:function(e,t,n){"use strict";e.exports=n(622)},4033:function(e,t,n){e.exports=n(290)},6742:function(e,t,n){"use strict";n.d(t,{Z:function(){return C}});var r=n(4440),a=n.n(r),i=n(2265),o=n(4061),l=n(5113),s=n(7127),c=n(7437);let u=i.forwardRef((e,t)=>(0,c.jsx)("div",{...e,ref:t,className:a()(e.className,"h4")}));u.displayName="DivStyledAsH4";let d=i.forwardRef(({className:e,bsPrefix:t,as:n=u,...r},i)=>(t=(0,s.vE)(t,"alert-heading"),(0,c.jsx)(n,{ref:i,className:a()(e,t),...r})));d.displayName="AlertHeading";var f=n(5511);let p=i.forwardRef(({className:e,bsPrefix:t,as:n=f.Z,...r},i)=>(t=(0,s.vE)(t,"alert-link"),(0,c.jsx)(n,{ref:i,className:a()(e,t),...r})));p.displayName="AlertLink";var m=n(5778),h=n(3290),x=n(8335),v=n(8984);let y={[m.ENTERING]:"show",[m.ENTERED]:"show"},E=i.forwardRef(({className:e,children:t,transitionClasses:n={},onEnter:r,...o},l)=>{let s={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1,...o},u=(0,i.useCallback)((e,t)=>{(0,x.Z)(e),null==r||r(e,t)},[r]);return(0,c.jsx)(v.Z,{ref:l,addEndListener:h.Z,...s,onEnter:u,childRef:t.ref,children:(r,o)=>i.cloneElement(t,{...o,className:a()("fade",e,t.props.className,y[r],n[r])})})});E.displayName="Fade";var g=n(4275),j=n.n(g);let N={"aria-label":j().string,onClick:j().func,variant:j().oneOf(["white"])},b=i.forwardRef(({className:e,variant:t,"aria-label":n="Close",...r},i)=>(0,c.jsx)("button",{ref:i,type:"button",className:a()("btn-close",t&&`btn-close-${t}`,e),"aria-label":n,...r}));b.displayName="CloseButton",b.propTypes=N;let w=i.forwardRef((e,t)=>{let{bsPrefix:n,show:r=!0,closeLabel:i="Close alert",closeVariant:u,className:d,children:f,variant:p="primary",onClose:m,dismissible:h,transition:x=E,...v}=(0,o.useUncontrolled)(e,{show:"onClose"}),y=(0,s.vE)(n,"alert"),g=(0,l.Z)(e=>{m&&m(!1,e)}),j=!0===x?E:x,N=(0,c.jsxs)("div",{role:"alert",...j?void 0:v,ref:t,className:a()(d,y,p&&`${y}-${p}`,h&&`${y}-dismissible`),children:[h&&(0,c.jsx)(b,{onClick:g,"aria-label":i,variant:u}),f]});return j?(0,c.jsx)(j,{unmountOnExit:!0,...v,ref:void 0,in:r,children:N}):r?N:null});w.displayName="Alert";var C=Object.assign(w,{Link:p,Heading:d})},4434:function(e,t,n){"use strict";var r=n(4440),a=n.n(r),i=n(2265),o=n(7127),l=n(7437);let s=i.forwardRef((e,t)=>{let[{className:n,...r},{as:i="div",bsPrefix:s,spans:c}]=function({as:e,bsPrefix:t,className:n,...r}){t=(0,o.vE)(t,"col");let i=(0,o.pi)(),l=(0,o.zG)(),s=[],c=[];return i.forEach(e=>{let n,a,i;let o=r[e];delete r[e],"object"==typeof o&&null!=o?{span:n,offset:a,order:i}=o:n=o;let u=e!==l?`-${e}`:"";n&&s.push(!0===n?`${t}${u}`:`${t}${u}-${n}`),null!=i&&c.push(`order${u}-${i}`),null!=a&&c.push(`offset${u}-${a}`)}),[{...r,className:a()(n,...s,...c)},{as:e,bsPrefix:t,spans:s}]}(e);return(0,l.jsx)(i,{...r,ref:t,className:a()(n,!c.length&&s)})});s.displayName="Col",t.Z=s},8597:function(e,t,n){"use strict";var r=n(4440),a=n.n(r),i=n(2265),o=n(7127),l=n(7437);let s=i.forwardRef(({bsPrefix:e,className:t,as:n="div",...r},i)=>{let s=(0,o.vE)(e,"row"),c=(0,o.pi)(),u=(0,o.zG)(),d=`${s}-cols`,f=[];return c.forEach(e=>{let t;let n=r[e];delete r[e],null!=n&&"object"==typeof n?{cols:t}=n:t=n;let a=e!==u?`-${e}`:"";null!=t&&f.push(`${d}${a}-${t}`)}),(0,l.jsx)(n,{ref:i,...r,className:a()(t,s,...f)})});s.displayName="Row",t.Z=s},1387:function(e,t,n){"use strict";var r=n(4440),a=n.n(r),i=n(2265),o=n(7127),l=n(7437);let s=i.forwardRef(({bsPrefix:e,className:t,striped:n,bordered:r,borderless:i,hover:s,size:c,variant:u,responsive:d,...f},p)=>{let m=(0,o.vE)(e,"table"),h=a()(t,m,u&&`${m}-${u}`,c&&`${m}-${c}`,n&&`${m}-${"string"==typeof n?`striped-${n}`:"striped"}`,r&&`${m}-bordered`,i&&`${m}-borderless`,s&&`${m}-hover`),x=(0,l.jsx)("table",{...f,className:h,ref:p});if(d){let e=`${m}-responsive`;return"string"==typeof d&&(e=`${e}-${d}`),(0,l.jsx)("div",{className:e,children:x})}return x});t.Z=s},8984:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var r=n(2265),a=n(5778),i=n(1271),o=n(4887),l=n(7437);let s=r.forwardRef(({onEnter:e,onEntering:t,onEntered:n,onExit:s,onExiting:c,onExited:u,addEndListener:d,children:f,childRef:p,...m},h)=>{let x=(0,r.useRef)(null),v=(0,i.Z)(x,p),attachRef=e=>{v(e&&"setState"in e?o.findDOMNode(e):null!=e?e:null)},normalize=e=>t=>{e&&x.current&&e(x.current,t)},y=(0,r.useCallback)(normalize(e),[e]),E=(0,r.useCallback)(normalize(t),[t]),g=(0,r.useCallback)(normalize(n),[n]),j=(0,r.useCallback)(normalize(s),[s]),N=(0,r.useCallback)(normalize(c),[c]),b=(0,r.useCallback)(normalize(u),[u]),w=(0,r.useCallback)(normalize(d),[d]);return(0,l.jsx)(a.default,{ref:h,...m,onEnter:y,onEntered:g,onEntering:E,onExit:j,onExited:b,onExiting:N,addEndListener:w,nodeRef:x,children:"function"==typeof f?(e,t)=>f(e,{...t,ref:attachRef}):r.cloneElement(f,{ref:attachRef})})});var c=s},3290:function(e,t,n){"use strict";n.d(t,{Z:function(){return transitionEndListener}});var r=n(8413),a=n(9469);function parseDuration(e,t){let n=(0,r.default)(e,t)||"",a=-1===n.indexOf("ms")?1e3:1;return parseFloat(n)*a}function transitionEndListener(e,t){let n=parseDuration(e,"transitionDuration"),r=parseDuration(e,"transitionDelay"),i=(0,a.default)(e,n=>{n.target===e&&(i(),t(n))},n+r)}},8335:function(e,t,n){"use strict";function triggerBrowserReflow(e){e.offsetHeight}n.d(t,{Z:function(){return triggerBrowserReflow}})}},function(e){e.O(0,[198,680,971,864,744],function(){return e(e.s=4290)}),_N_E=e.O()}]);