import{r as o,R as F,L as H,N as D,u as q,j as i}from"./index-2240c5f9.js";import{G as J,A as Q,a as Y}from"./index.esm-8872f204.js";import{u as K,f as Z,a as ee,P as te,L as ne,m as w}from"./motion-fa35d893.js";function V(){const e=o.useRef(!1);return K(()=>(e.current=!0,()=>{e.current=!1}),[]),e}function re(){const e=V(),[t,r]=o.useState(0),n=o.useCallback(()=>{e.current&&r(t+1)},[t]);return[o.useCallback(()=>Z.postRender(n),[n]),t]}class oe extends o.Component{getSnapshotBeforeUpdate(t){const r=this.props.childRef.current;if(r&&t.isPresent&&!this.props.isPresent){const n=this.props.sizeRef.current;n.height=r.offsetHeight||0,n.width=r.offsetWidth||0,n.top=r.offsetTop,n.left=r.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function ie({children:e,isPresent:t}){const r=o.useId(),n=o.useRef(null),a=o.useRef({width:0,height:0,top:0,left:0});return o.useInsertionEffect(()=>{const{width:u,height:f,top:s,left:d}=a.current;if(t||!n.current||!u||!f)return;n.current.dataset.motionPopId=r;const g=document.createElement("style");return document.head.appendChild(g),g.sheet&&g.sheet.insertRule(`
          [data-motion-pop-id="${r}"] {
            position: absolute !important;
            width: ${u}px !important;
            height: ${f}px !important;
            top: ${s}px !important;
            left: ${d}px !important;
          }
        `),()=>{document.head.removeChild(g)}},[t]),o.createElement(oe,{isPresent:t,childRef:n,sizeRef:a},o.cloneElement(e,{ref:n}))}const N=({children:e,initial:t,isPresent:r,onExitComplete:n,custom:a,presenceAffectsLayout:u,mode:f})=>{const s=ee(se),d=o.useId(),g=o.useMemo(()=>({id:d,initial:t,isPresent:r,custom:a,onExitComplete:c=>{s.set(c,!0);for(const l of s.values())if(!l)return;n&&n()},register:c=>(s.set(c,!1),()=>s.delete(c))}),u?void 0:[r]);return o.useMemo(()=>{s.forEach((c,l)=>s.set(l,!1))},[r]),o.useEffect(()=>{!r&&!s.size&&n&&n()},[r]),f==="popLayout"&&(e=o.createElement(ie,{isPresent:r},e)),o.createElement(te.Provider,{value:g},e)};function se(){return new Map}function ae(e){return o.useEffect(()=>()=>e(),[])}const v=e=>e.key||"";function ce(e,t){e.forEach(r=>{const n=v(r);t.set(n,r)})}function le(e){const t=[];return o.Children.forEach(e,r=>{o.isValidElement(r)&&t.push(r)}),t}const S=({children:e,custom:t,initial:r=!0,onExitComplete:n,exitBeforeEnter:a,presenceAffectsLayout:u=!0,mode:f="sync"})=>{const s=o.useContext(ne).forceRender||re()[0],d=V(),g=le(e);let c=g;const l=o.useRef(new Map).current,x=o.useRef(c),y=o.useRef(new Map).current,b=o.useRef(!0);if(K(()=>{b.current=!1,ce(g,y),x.current=c}),ae(()=>{b.current=!0,y.clear(),l.clear()}),b.current)return o.createElement(o.Fragment,null,c.map(h=>o.createElement(N,{key:v(h),isPresent:!0,initial:r?void 0:!1,presenceAffectsLayout:u,mode:f},h)));c=[...c];const R=x.current.map(v),I=g.map(v),G=R.length;for(let h=0;h<G;h++){const p=R[h];I.indexOf(p)===-1&&!l.has(p)&&l.set(p,void 0)}return f==="wait"&&l.size&&(c=[]),l.forEach((h,p)=>{if(I.indexOf(p)!==-1)return;const O=y.get(p);if(!O)return;const W=R.indexOf(p);let j=h;if(!j){const X=()=>{l.delete(p);const M=Array.from(y.keys()).filter(_=>!I.includes(_));if(M.forEach(_=>y.delete(_)),x.current=g.filter(_=>{const T=v(_);return T===p||M.includes(T)}),!l.size){if(d.current===!1)return;s(),n&&n()}};j=o.createElement(N,{key:v(O),isPresent:!1,onExitComplete:X,custom:t,presenceAffectsLayout:u,mode:f},O),l.set(p,j)}c.splice(W,0,j)}),c=c.map(h=>{const p=h.key;return l.has(p)?h:o.createElement(N,{key:v(h),isPresent:!0,presenceAffectsLayout:u,mode:f},h)}),o.createElement(o.Fragment,null,l.size?c:c.map(h=>o.cloneElement(h)))};/*! *****************************************************************************
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
***************************************************************************** */var P=function(){return P=Object.assign||function(t){for(var r,n=1,a=arguments.length;n<a;n++){r=arguments[n];for(var u in r)Object.prototype.hasOwnProperty.call(r,u)&&(t[u]=r[u])}return t},P.apply(this,arguments)};function ue(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r}var k="",E=null,L=null,U=null;function A(){k="",E!==null&&E.disconnect(),L!==null&&(window.clearTimeout(L),L=null)}function z(e){var t=["BUTTON","INPUT","SELECT","TEXTAREA"],r=["A","AREA"];return t.includes(e.tagName)&&!e.hasAttribute("disabled")||r.includes(e.tagName)&&e.hasAttribute("href")}function B(){var e=null;if(k==="#")e=document.body;else{var t=k.replace("#","");e=document.getElementById(t),e===null&&k==="#top"&&(e=document.body)}if(e!==null){U(e);var r=e.getAttribute("tabindex");return r===null&&!z(e)&&e.setAttribute("tabindex",-1),e.focus({preventScroll:!0}),r===null&&!z(e)&&(e.blur(),e.removeAttribute("tabindex")),A(),!0}return!1}function fe(e){window.setTimeout(function(){B()===!1&&(E===null&&(E=new MutationObserver(B)),E.observe(document,{attributes:!0,childList:!0,subtree:!0}),L=window.setTimeout(function(){A()},e||1e4))},0)}function $(e){return F.forwardRef(function(t,r){var n="";typeof t.to=="string"&&t.to.includes("#")?n="#"+t.to.split("#").slice(1).join("#"):typeof t.to=="object"&&typeof t.to.hash=="string"&&(n=t.to.hash);var a={};e===D&&(a.isActive=function(s,d){return s&&s.isExact&&d.hash===n});function u(s){A(),k=t.elementId?"#"+t.elementId:n,t.onClick&&t.onClick(s),k!==""&&!s.defaultPrevented&&s.button===0&&(!t.target||t.target==="_self")&&!(s.metaKey||s.altKey||s.ctrlKey||s.shiftKey)&&(U=t.scroll||function(d){return t.smooth?d.scrollIntoView({behavior:"smooth"}):d.scrollIntoView()},fe(t.timeout))}var f=ue(t,["scroll","smooth","timeout","elementId"]);return F.createElement(e,P({},a,f,{onClick:u,ref:r}),t.children)})}var C=$(H);$(D);function he(e){return J({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"}}]})(e)}const de="_container_12gen_3",me="_containerDark_12gen_25 _container_12gen_3",ge="_navbar_12gen_37",pe="_logoLink_12gen_55",ye="_navLinks_12gen_77",ve="_navLink_12gen_77",xe="_menu_12gen_137",be="_menuMobile_12gen_149 _menu_12gen_137 _menu_12gen_137",ke="_hamburgerCheckbox_12gen_169",_e="_hamburger_12gen_169",we="_scrollButton_12gen_197",m={container:de,containerDark:me,navbar:ge,logoLink:pe,navLinks:ye,navLink:ve,menu:xe,menuMobile:be,hamburgerCheckbox:ke,hamburger:_e,scrollButton:we};function Le(){const e=q(),[t,r]=o.useState(!1),[n,a]=o.useState(!1),u=o.useCallback(()=>{var l=document.documentElement,x=document.body,y="scrollTop",b="scrollHeight";return(l[y]||x[y])/((l[b]||x[b])-l.clientHeight)*100},[]),f=o.useCallback(()=>{r(u())},[r,u]);o.useEffect(()=>(document.addEventListener("scroll",f,{passive:!0}),()=>{document.removeEventListener("scroll",f)}),[f]),o.useEffect(()=>{window.scrollTo({top:0,left:0,behavior:"instant"})},[e]);const s=t>1,d=2*3.14*20,g=d*((100-t)/100),c=i.jsxs(i.Fragment,{children:[i.jsx(w.li,{initial:{opacity:0,y:-20,height:0},whileInView:{opacity:1,y:0,height:"auto"},exit:{opacity:0,y:-20,height:0,transition:{delay:.3}},children:i.jsx(C,{smooth:!0,to:"/#about",className:m.navLink,children:"About"})}),i.jsx(w.li,{initial:{opacity:0,y:-20,height:0},whileInView:{opacity:1,y:0,height:"auto",transition:{delay:.1}},exit:{opacity:0,y:-20,height:0,transition:{delay:.2}},children:i.jsx(C,{smooth:!0,to:"/#projects",className:m.navLink,children:"Projects"})}),i.jsx(w.li,{initial:{opacity:0,y:-20,height:0},whileInView:{opacity:1,y:0,height:"auto",transition:{delay:.2}},exit:{opacity:0,y:-20,height:0,transition:{delay:.1}},children:i.jsx(C,{smooth:!0,to:"/#testimonials",className:m.navLink,children:"Testimonials"})}),i.jsx(w.li,{initial:{opacity:0,y:-20,height:0},whileInView:{opacity:1,y:0,height:"auto",transition:{delay:.3}},exit:{opacity:0,y:-20,height:0},children:i.jsx(C,{smooth:!0,to:"/#contact",className:m.navLink,children:"Contact"})})]});return i.jsxs(i.Fragment,{children:[i.jsx("div",{className:s||n?m.containerDark:m.container,children:i.jsxs("nav",{className:m.navbar,role:"navigation",children:[i.jsx(H,{to:"/",className:m.logoLink,children:i.jsx("img",{src:"/logo.svg",alt:"logo"})}),i.jsxs("ul",{className:m.navLinks,children:[i.jsx("input",{className:m.hamburgerCheckbox,type:"checkbox",id:"checkbox_toggle",onChange:l=>{a(l.target.checked)}}),i.jsx("label",{htmlFor:"checkbox_toggle",className:m.hamburger,children:n?i.jsx(Q,{}):i.jsx(he,{})}),i.jsx("div",{className:m.menu,children:c}),i.jsx(S,{children:n&&i.jsx("div",{className:m.menuMobile,children:c})})]})]})}),i.jsx(S,{initial:!1,children:s&&i.jsxs(w.button,{className:m.scrollButton,onClick:()=>{window.scrollTo({top:0,behavior:"smooth"})},initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},exit:{opacity:0,y:20},transition:{duration:.5},children:[i.jsxs("svg",{width:"60",height:"60",viewBox:"-7.5 -7.5 75 75",version:"1.1",xmlns:"http://www.w3.org/2000/svg",style:{transform:"rotate(-90deg)"},children:[i.jsx("circle",{r:"20",cx:"30",cy:"30",fill:"transparent",stroke:"#1e1e1e",strokeWidth:"2",strokeDasharray:d,strokeDashoffset:"0"}),i.jsx("circle",{r:"20",cx:"30",cy:"30",stroke:"#00eeff",strokeWidth:"2",strokeLinecap:"round",strokeDashoffset:g,fill:"transparent",strokeDasharray:d})]}),i.jsx(Y,{})]})})]})}export{Le as default};