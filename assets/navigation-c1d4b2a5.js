import{r as o,R as F,L as H,N as D,j as i,a as q}from"./index-9374475f.js";import{G as J,A as Q,a as Y}from"./index.esm-330bb1de.js";import{u as K,f as Z,a as ee,P as te,L as ne,m as _}from"./motion-2587db01.js";function V(){const e=o.useRef(!1);return K(()=>(e.current=!0,()=>{e.current=!1}),[]),e}function re(){const e=V(),[t,n]=o.useState(0),r=o.useCallback(()=>{e.current&&n(t+1)},[t]);return[o.useCallback(()=>Z.postRender(r),[r]),t]}class oe extends o.Component{getSnapshotBeforeUpdate(t){const n=this.props.childRef.current;if(n&&t.isPresent&&!this.props.isPresent){const r=this.props.sizeRef.current;r.height=n.offsetHeight||0,r.width=n.offsetWidth||0,r.top=n.offsetTop,r.left=n.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function ie({children:e,isPresent:t}){const n=o.useId(),r=o.useRef(null),c=o.useRef({width:0,height:0,top:0,left:0});return o.useInsertionEffect(()=>{const{width:l,height:h,top:s,left:g}=c.current;if(t||!r.current||!l||!h)return;r.current.dataset.motionPopId=n;const d=document.createElement("style");return document.head.appendChild(d),d.sheet&&d.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${l}px !important;
            height: ${h}px !important;
            top: ${s}px !important;
            left: ${g}px !important;
          }
        `),()=>{document.head.removeChild(d)}},[t]),o.createElement(oe,{isPresent:t,childRef:r,sizeRef:c},o.cloneElement(e,{ref:r}))}const N=({children:e,initial:t,isPresent:n,onExitComplete:r,custom:c,presenceAffectsLayout:l,mode:h})=>{const s=ee(se),g=o.useId(),d=o.useMemo(()=>({id:g,initial:t,isPresent:n,custom:c,onExitComplete:a=>{s.set(a,!0);for(const u of s.values())if(!u)return;r&&r()},register:a=>(s.set(a,!1),()=>s.delete(a))}),l?void 0:[n]);return o.useMemo(()=>{s.forEach((a,u)=>s.set(u,!1))},[n]),o.useEffect(()=>{!n&&!s.size&&r&&r()},[n]),h==="popLayout"&&(e=o.createElement(ie,{isPresent:n},e)),o.createElement(te.Provider,{value:d},e)};function se(){return new Map}function ae(e){return o.useEffect(()=>()=>e(),[])}const v=e=>e.key||"";function ce(e,t){e.forEach(n=>{const r=v(n);t.set(r,n)})}function le(e){const t=[];return o.Children.forEach(e,n=>{o.isValidElement(n)&&t.push(n)}),t}const S=({children:e,custom:t,initial:n=!0,onExitComplete:r,exitBeforeEnter:c,presenceAffectsLayout:l=!0,mode:h="sync"})=>{const s=o.useContext(ne).forceRender||re()[0],g=V(),d=le(e);let a=d;const u=o.useRef(new Map).current,x=o.useRef(a),y=o.useRef(new Map).current,L=o.useRef(!0);if(K(()=>{L.current=!1,ce(d,y),x.current=a}),ae(()=>{L.current=!0,y.clear(),u.clear()}),L.current)return o.createElement(o.Fragment,null,a.map(f=>o.createElement(N,{key:v(f),isPresent:!0,initial:n?void 0:!1,presenceAffectsLayout:l,mode:h},f)));a=[...a];const R=x.current.map(v),I=d.map(v),G=R.length;for(let f=0;f<G;f++){const p=R[f];I.indexOf(p)===-1&&!u.has(p)&&u.set(p,void 0)}return h==="wait"&&u.size&&(a=[]),u.forEach((f,p)=>{if(I.indexOf(p)!==-1)return;const O=y.get(p);if(!O)return;const W=R.indexOf(p);let j=f;if(!j){const X=()=>{u.delete(p);const M=Array.from(y.keys()).filter(k=>!I.includes(k));if(M.forEach(k=>y.delete(k)),x.current=d.filter(k=>{const T=v(k);return T===p||M.includes(T)}),!u.size){if(g.current===!1)return;s(),r&&r()}};j=o.createElement(N,{key:v(O),isPresent:!1,onExitComplete:X,custom:t,presenceAffectsLayout:l,mode:h},O),u.set(p,j)}a.splice(W,0,j)}),a=a.map(f=>{const p=f.key;return u.has(p)?f:o.createElement(N,{key:v(f),isPresent:!0,presenceAffectsLayout:l,mode:h},f)}),o.createElement(o.Fragment,null,u.size?a:a.map(f=>o.cloneElement(f)))};/*! *****************************************************************************
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
***************************************************************************** */var P=function(){return P=Object.assign||function(t){for(var n,r=1,c=arguments.length;r<c;r++){n=arguments[r];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(t[l]=n[l])}return t},P.apply(this,arguments)};function ue(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var c=0,r=Object.getOwnPropertySymbols(e);c<r.length;c++)t.indexOf(r[c])<0&&Object.prototype.propertyIsEnumerable.call(e,r[c])&&(n[r[c]]=e[r[c]]);return n}var b="",w=null,E=null,U=null;function A(){b="",w!==null&&w.disconnect(),E!==null&&(window.clearTimeout(E),E=null)}function z(e){var t=["BUTTON","INPUT","SELECT","TEXTAREA"],n=["A","AREA"];return t.includes(e.tagName)&&!e.hasAttribute("disabled")||n.includes(e.tagName)&&e.hasAttribute("href")}function B(){var e=null;if(b==="#")e=document.body;else{var t=b.replace("#","");e=document.getElementById(t),e===null&&b==="#top"&&(e=document.body)}if(e!==null){U(e);var n=e.getAttribute("tabindex");return n===null&&!z(e)&&e.setAttribute("tabindex",-1),e.focus({preventScroll:!0}),n===null&&!z(e)&&(e.blur(),e.removeAttribute("tabindex")),A(),!0}return!1}function fe(e){window.setTimeout(function(){B()===!1&&(w===null&&(w=new MutationObserver(B)),w.observe(document,{attributes:!0,childList:!0,subtree:!0}),E=window.setTimeout(function(){A()},e||1e4))},0)}function $(e){return F.forwardRef(function(t,n){var r="";typeof t.to=="string"&&t.to.includes("#")?r="#"+t.to.split("#").slice(1).join("#"):typeof t.to=="object"&&typeof t.to.hash=="string"&&(r=t.to.hash);var c={};e===D&&(c.isActive=function(s,g){return s&&s.isExact&&g.hash===r});function l(s){A(),b=t.elementId?"#"+t.elementId:r,t.onClick&&t.onClick(s),b!==""&&!s.defaultPrevented&&s.button===0&&(!t.target||t.target==="_self")&&!(s.metaKey||s.altKey||s.ctrlKey||s.shiftKey)&&(U=t.scroll||function(g){return t.smooth?g.scrollIntoView({behavior:"smooth"}):g.scrollIntoView()},fe(t.timeout))}var h=ue(t,["scroll","smooth","timeout","elementId"]);return F.createElement(e,P({},c,h,{onClick:l,ref:n}),t.children)})}var C=$(H);$(D);function he(e){return J({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"}}]})(e)}const de="_container_12gen_3",me="_containerDark_12gen_25 _container_12gen_3",ge="_navbar_12gen_37",pe="_logoLink_12gen_55",ye="_navLinks_12gen_77",ve="_navLink_12gen_77",xe="_menu_12gen_137",be="_menuMobile_12gen_149 _menu_12gen_137 _menu_12gen_137",ke="_hamburgerCheckbox_12gen_169",_e="_hamburger_12gen_169",we="_scrollButton_12gen_197",m={container:de,containerDark:me,navbar:ge,logoLink:pe,navLinks:ye,navLink:ve,menu:xe,menuMobile:be,hamburgerCheckbox:ke,hamburger:_e,scrollButton:we};function Le(){const[e,t]=o.useState(!1),[n,r]=o.useState(!1),c=o.useCallback(()=>{var a=document.documentElement,u=document.body,x="scrollTop",y="scrollHeight";return(a[x]||u[x])/((a[y]||u[y])-a.clientHeight)*100},[]),l=o.useCallback(()=>{t(c())},[t,c]);o.useEffect(()=>(document.addEventListener("scroll",l,{passive:!0}),()=>{document.removeEventListener("scroll",l)}),[l]);const h=e>1,s=2*3.14*20,g=s*((100-e)/100),d=i.jsxs(i.Fragment,{children:[i.jsx(_.li,{initial:{opacity:0,y:-20,height:0},whileInView:{opacity:1,y:0,height:"auto"},exit:{opacity:0,y:-20,height:0,transition:{delay:.3}},children:i.jsx(C,{smooth:!0,to:"/#about",className:m.navLink,children:"About"})}),i.jsx(_.li,{initial:{opacity:0,y:-20,height:0},whileInView:{opacity:1,y:0,height:"auto",transition:{delay:.1}},exit:{opacity:0,y:-20,height:0,transition:{delay:.2}},children:i.jsx(C,{smooth:!0,to:"/#projects",className:m.navLink,children:"Projects"})}),i.jsx(_.li,{initial:{opacity:0,y:-20,height:0},whileInView:{opacity:1,y:0,height:"auto",transition:{delay:.2}},exit:{opacity:0,y:-20,height:0,transition:{delay:.1}},children:i.jsx(C,{smooth:!0,to:"/#testimonials",className:m.navLink,children:"Testimonials"})}),i.jsx(_.li,{initial:{opacity:0,y:-20,height:0},whileInView:{opacity:1,y:0,height:"auto",transition:{delay:.3}},exit:{opacity:0,y:-20,height:0},children:i.jsx(C,{smooth:!0,to:"/#contact",className:m.navLink,children:"Contact"})})]});return i.jsxs(i.Fragment,{children:[i.jsx("div",{className:h||n?m.containerDark:m.container,children:i.jsxs("nav",{className:m.navbar,role:"navigation",children:[i.jsx(H,{to:"/",className:m.logoLink,children:i.jsx("img",{src:q,alt:"logo"})}),i.jsxs("ul",{className:m.navLinks,children:[i.jsx("input",{className:m.hamburgerCheckbox,type:"checkbox",id:"checkbox_toggle",onChange:a=>{r(a.target.checked)}}),i.jsx("label",{htmlFor:"checkbox_toggle",className:m.hamburger,children:n?i.jsx(Q,{}):i.jsx(he,{})}),i.jsx("div",{className:m.menu,children:d}),i.jsx(S,{children:n&&i.jsx("div",{className:m.menuMobile,children:d})})]})]})}),i.jsx(S,{initial:!1,children:h&&i.jsxs(_.button,{className:m.scrollButton,onClick:()=>{window.scrollTo({top:0,behavior:"smooth"})},initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},exit:{opacity:0,y:20},transition:{duration:.5},children:[i.jsxs("svg",{width:"60",height:"60",viewBox:"-7.5 -7.5 75 75",version:"1.1",xmlns:"http://www.w3.org/2000/svg",style:{transform:"rotate(-90deg)"},children:[i.jsx("circle",{r:"20",cx:"30",cy:"30",fill:"transparent",stroke:"#1e1e1e",strokeWidth:"2",strokeDasharray:s,strokeDashoffset:"0"}),i.jsx("circle",{r:"20",cx:"30",cy:"30",stroke:"#00eeff",strokeWidth:"2",strokeLinecap:"round",strokeDashoffset:g,fill:"transparent",strokeDasharray:s})]}),i.jsx(Y,{})]})})]})}export{Le as default};
