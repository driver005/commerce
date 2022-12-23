import{r as c,j as v,a as p,y as _,K as F}from"./index.9baa07f0.js";import{C as Z}from"./index.6b8195c5.js";let B={data:""},U=e=>typeof window=="object"?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||B,V=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,X=/\/\*[^]*?\*\/|  +/g,T=/\n+/g,x=(e,t)=>{let r="",a="",i="";for(let s in e){let n=e[s];s[0]=="@"?s[1]=="i"?r=s+" "+n+";":a+=s[1]=="f"?x(n,s):s+"{"+x(n,s[1]=="k"?"":t)+"}":typeof n=="object"?a+=x(n,t?t.replace(/([^,])+/g,o=>s.replace(/(^:.*)|([^,])+/g,l=>/&/.test(l)?l.replace(/&/g,o):o?o+" "+l:l)):s):n!=null&&(s=/^--/.test(s)?s:s.replace(/[A-Z]/g,"-$&").toLowerCase(),i+=x.p?x.p(s,n):s+":"+n+";")}return r+(t&&i?t+"{"+i+"}":i)+a},w={},P=e=>{if(typeof e=="object"){let t="";for(let r in e)t+=r+P(e[r]);return t}return e},R=(e,t,r,a,i)=>{let s=P(e),n=w[s]||(w[s]=(o=>{let l=0,d=11;for(;l<o.length;)d=101*d+o.charCodeAt(l++)>>>0;return"go"+d})(s));if(!w[n]){let o=s!==e?e:(l=>{let d,m,f=[{}];for(;d=V.exec(l.replace(X,""));)d[4]?f.shift():d[3]?(m=d[3].replace(T," ").trim(),f.unshift(f[0][m]=f[0][m]||{})):f[0][d[1]]=d[2].replace(T," ").trim();return f[0]})(e);w[n]=x(i?{["@keyframes "+n]:o}:o,r?"":"."+n)}return((o,l,d)=>{l.data.indexOf(o)==-1&&(l.data=d?o+l.data:l.data+o)})(w[n],t,a),n},Y=(e,t,r)=>e.reduce((a,i,s)=>{let n=t[s];if(n&&n.call){let o=n(r),l=o&&o.props&&o.props.className||/^go/.test(o)&&o;n=l?"."+l:o&&typeof o=="object"?o.props?"":x(o,""):o===!1?"":o}return a+i+(n==null?"":n)},"");function M(e){let t=this||{},r=e.call?e(t.p):e;return R(r.unshift?r.raw?Y(r,[].slice.call(arguments,1),t.p):r.reduce((a,i)=>Object.assign(a,i&&i.call?i(t.p):i),{}):r,U(t.target),t.g,t.o,t.k)}let H,A,z;M.bind({g:1});let g=M.bind({k:1});function q(e,t,r,a){x.p=t,H=e,A=r,z=a}function y(e,t){let r=this||{};return function(){let a=arguments;function i(s,n){let o=Object.assign({},s),l=o.className||i.className;r.p=Object.assign({theme:A&&A()},o),r.o=/ *go\d+/.test(l),o.className=M.apply(r,a)+(l?" "+l:""),t&&(o.ref=n);let d=e;return e[0]&&(d=o.as||e,delete o.as),z&&d[0]&&z(o),H(d,o)}return t?t(i):i}}var G=e=>typeof e=="function",I=(e,t)=>G(e)?e(t):e,J=(()=>{let e=0;return()=>(++e).toString()})(),S=(()=>{let e;return()=>{if(e===void 0&&typeof window<"u"){let t=matchMedia("(prefers-reduced-motion: reduce)");e=!t||t.matches}return e}})(),K=20,N=new Map,Q=1e3,W=e=>{if(N.has(e))return;let t=setTimeout(()=>{N.delete(e),b({type:4,toastId:e})},Q);N.set(e,t)},ee=e=>{let t=N.get(e);t&&clearTimeout(t)},D=(e,t)=>{switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,K)};case 1:return t.toast.id&&ee(t.toast.id),{...e,toasts:e.toasts.map(s=>s.id===t.toast.id?{...s,...t.toast}:s)};case 2:let{toast:r}=t;return e.toasts.find(s=>s.id===r.id)?D(e,{type:1,toast:r}):D(e,{type:0,toast:r});case 3:let{toastId:a}=t;return a?W(a):e.toasts.forEach(s=>{W(s.id)}),{...e,toasts:e.toasts.map(s=>s.id===a||a===void 0?{...s,visible:!1}:s)};case 4:return t.toastId===void 0?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(s=>s.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let i=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(s=>({...s,pauseDuration:s.pauseDuration+i}))}}},L=[],$={toasts:[],pausedAt:void 0},b=e=>{$=D($,e),L.forEach(t=>{t($)})},te={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},re=(e={})=>{let[t,r]=c.exports.useState($);c.exports.useEffect(()=>(L.push(r),()=>{let i=L.indexOf(r);i>-1&&L.splice(i,1)}),[t]);let a=t.toasts.map(i=>{var s,n;return{...e,...e[i.type],...i,duration:i.duration||((s=e[i.type])==null?void 0:s.duration)||(e==null?void 0:e.duration)||te[i.type],style:{...e.style,...(n=e[i.type])==null?void 0:n.style,...i.style}}});return{...t,toasts:a}},se=(e,t="blank",r)=>({createdAt:Date.now(),visible:!0,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...r,id:(r==null?void 0:r.id)||J()}),C=e=>(t,r)=>{let a=se(t,e,r);return b({type:2,toast:a}),a.id},u=(e,t)=>C("blank")(e,t);u.error=C("error");u.success=C("success");u.loading=C("loading");u.custom=C("custom");u.dismiss=e=>{b({type:3,toastId:e})};u.remove=e=>b({type:4,toastId:e});u.promise=(e,t,r)=>{let a=u.loading(t.loading,{...r,...r==null?void 0:r.loading});return e.then(i=>(u.success(I(t.success,i),{id:a,...r,...r==null?void 0:r.success}),i)).catch(i=>{u.error(I(t.error,i),{id:a,...r,...r==null?void 0:r.error})}),e};var oe=(e,t)=>{b({type:1,toast:{id:e,height:t}})},ae=()=>{b({type:5,time:Date.now()})},ie=e=>{let{toasts:t,pausedAt:r}=re(e);c.exports.useEffect(()=>{if(r)return;let s=Date.now(),n=t.map(o=>{if(o.duration===1/0)return;let l=(o.duration||0)+o.pauseDuration-(s-o.createdAt);if(l<0){o.visible&&u.dismiss(o.id);return}return setTimeout(()=>u.dismiss(o.id),l)});return()=>{n.forEach(o=>o&&clearTimeout(o))}},[t,r]);let a=c.exports.useCallback(()=>{r&&b({type:6,time:Date.now()})},[r]),i=c.exports.useCallback((s,n)=>{let{reverseOrder:o=!1,gutter:l=8,defaultPosition:d}=n||{},m=t.filter(h=>(h.position||d)===(s.position||d)&&h.height),f=m.findIndex(h=>h.id===s.id),E=m.filter((h,O)=>O<f&&h.visible).length;return m.filter(h=>h.visible).slice(...o?[E+1]:[0,E]).reduce((h,O)=>h+(O.height||0)+l,0)},[t]);return{toasts:t,handlers:{updateHeight:oe,startPause:ae,endPause:a,calculateOffset:i}}},ne=g`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,le=g`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,de=g`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,ce=y("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${ne} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${le} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${e=>e.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${de} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,pe=g`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,ue=y("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${pe} 1s linear infinite;
`,me=g`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,fe=g`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,he=y("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${me} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${fe} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${e=>e.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,ge=y("div")`
  position: absolute;
`,xe=y("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,ye=g`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,be=y("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${ye} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,ve=({toast:e})=>{let{icon:t,type:r,iconTheme:a}=e;return t!==void 0?typeof t=="string"?c.exports.createElement(be,null,t):t:r==="blank"?null:c.exports.createElement(xe,null,c.exports.createElement(ue,{...a}),r!=="loading"&&c.exports.createElement(ge,null,r==="error"?c.exports.createElement(ce,{...a}):c.exports.createElement(he,{...a})))},we=e=>`
0% {transform: translate3d(0,${e*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,ke=e=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${e*-150}%,-1px) scale(.6); opacity:0;}
`,Ce="0%{opacity:0;} 100%{opacity:1;}",Ee="0%{opacity:1;} 100%{opacity:0;}",je=y("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,Ne=y("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,Le=(e,t)=>{let r=e.includes("top")?1:-1,[a,i]=S()?[Ce,Ee]:[we(r),ke(r)];return{animation:t?`${g(a)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${g(i)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},$e=c.exports.memo(({toast:e,position:t,style:r,children:a})=>{let i=e.height?Le(e.position||t||"top-center",e.visible):{opacity:0},s=c.exports.createElement(ve,{toast:e}),n=c.exports.createElement(Ne,{...e.ariaProps},I(e.message,e));return c.exports.createElement(je,{className:e.className,style:{...i,...r,...e.style}},typeof a=="function"?a({icon:s,message:n}):c.exports.createElement(c.exports.Fragment,null,s,n))});q(c.exports.createElement);var Ie=({id:e,className:t,style:r,onHeightUpdate:a,children:i})=>{let s=c.exports.useCallback(n=>{if(n){let o=()=>{let l=n.getBoundingClientRect().height;a(e,l)};o(),new MutationObserver(o).observe(n,{subtree:!0,childList:!0,characterData:!0})}},[e,a]);return c.exports.createElement("div",{ref:s,className:t,style:r},i)},Me=(e,t)=>{let r=e.includes("top"),a=r?{top:0}:{bottom:0},i=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:S()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${t*(r?1:-1)}px)`,...a,...i}},Oe=M`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,j=16,_e=({reverseOrder:e,position:t="top-center",toastOptions:r,gutter:a,children:i,containerStyle:s,containerClassName:n})=>{let{toasts:o,handlers:l}=ie(r);return c.exports.createElement("div",{style:{position:"fixed",zIndex:9999,top:j,left:j,right:j,bottom:j,pointerEvents:"none",...s},className:n,onMouseEnter:l.startPause,onMouseLeave:l.endPause},o.map(d=>{let m=d.position||t,f=l.calculateOffset(d,{reverseOrder:e,gutter:a,defaultPosition:t}),E=Me(m,f);return c.exports.createElement(Ie,{id:d.id,key:d.id,onHeightUpdate:l.updateHeight,className:d.visible?Oe:"",style:E},d.type==="custom"?I(d.message,d):i?i(d):c.exports.createElement($e,{toast:d,position:m}))}))},Fe=u;const Ae=({size:e="20",color:t="currentColor",...r})=>v("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...r,children:[p("path",{d:"M10 17.5C14.1421 17.5 17.5 14.1421 17.5 10C17.5 5.85786 14.1421 2.5 10 2.5C5.85786 2.5 2.5 5.85786 2.5 10C2.5 14.1421 5.85786 17.5 10 17.5Z",stroke:t,strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),p("path",{d:"M10 6.66669V10",stroke:t,strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),p("path",{d:"M10 13.3333H10.0088",stroke:t,strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}),ze=({size:e="16",color:t="currentColor",...r})=>v("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...r,children:[p("path",{d:"M8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14Z",stroke:t,strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),p("path",{d:"M8 10.6667V8",stroke:t,strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),p("path",{d:"M8 5.33331H8.0075",stroke:t,strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}),De=({size:e="24px",color:t="currentColor",...r})=>v("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...r,children:[p("path",{d:"M10 17.5C14.1421 17.5 17.5 14.1421 17.5 10C17.5 5.85786 14.1421 2.5 10 2.5C5.85786 2.5 2.5 5.85786 2.5 10C2.5 14.1421 5.85786 17.5 10 17.5Z",stroke:t,strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),p("path",{d:"M12.5 7.5L7.5 12.5",stroke:t,strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),p("path",{d:"M7.5 7.5L12.5 12.5",stroke:t,strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}),Te=({children:e,visible:t,className:r,...a})=>p("div",{className:_("flex items-start bg-grey-90 p-base border rounded-rounded shadow-toaster mb-xsmall last:mb-0",{"animate-enter":t},{"animate-leave":!t},r),...a,children:e}),We=({toast:e,type:t,title:r,message:a})=>{const i=()=>{u.dismiss(e.id)};return v(Te,{visible:e.visible,className:"w-[380px]",children:[p("div",{children:Pe(t)}),v("div",{className:"flex flex-col ml-small mr-base gap-y-2xsmall flex-grow text-white",children:[p("span",{className:"inter-small-semibold",children:r}),p("span",{className:"inter-small-regular text-grey-20",children:a})]}),v("div",{children:[p("button",{onClick:i,children:p(F,{size:k,className:"text-grey-40"})}),p("span",{className:"sr-only",children:"Close"})]})]})},k=20;function Pe(e){switch(e){case"success":return p(Z,{size:k,className:"text-emerald-40"});case"warning":return p(Ae,{size:k,className:"text-orange-40"});case"error":return p(De,{size:k,className:"text-rose-40"});default:return p(ze,{size:k,className:"text-grey-40"})}}const Ze=()=>(e,t,r)=>{u.custom(a=>p(We,{toast:a,type:r,title:e,message:t}),{position:"top-right",duration:3e3})};export{Ae as A,ze as I,Te as T,De as X,Fe as _,_e as a,u as n,Ze as u};
