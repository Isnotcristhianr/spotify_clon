import{r as o}from"./index.DHQ29l5n.js";import{r as g}from"./index.CqpTcRZB.js";var s={},p;function v(){if(p)return s;p=1;var t=g();return s.createRoot=t.createRoot,s.hydrateRoot=t.hydrateRoot,s}var y=v();const d=({value:t,name:r,hydrate:e=!0})=>{if(!t)return null;const a=e?"astro-slot":"astro-static-slot";return o.createElement(a,{name:r,suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:t}})};d.shouldComponentUpdate=()=>!1;function C(t){for(const r in t)if(r.startsWith("__reactContainer"))return r}function R(t){let r={};for(const e of t.attributes)r[e.name]=e.value;return t.firstChild===null?o.createElement(t.localName,r):o.createElement(t.localName,r,Array.from(t.childNodes).map(e=>e.nodeType===Node.TEXT_NODE?e.data:e.nodeType===Node.ELEMENT_NODE?R(e):void 0).filter(e=>!!e))}function O(t,r){if(r&&t){let e=[],a=document.createElement("template");a.innerHTML=t;for(let u of a.content.children)e.push(R(u));return e}else return t?o.createElement(d,{value:t}):void 0}let h=new WeakMap;const N=(t,r)=>{let e=h.get(t);return e||(e=r(),h.set(t,e)),e},x=t=>(r,e,{default:a,...u},{client:A})=>{if(!t.hasAttribute("ssr"))return;const f=t.getAttribute("data-action-key"),l=t.getAttribute("data-action-name"),E=t.getAttribute("data-action-result"),T=f&&l&&E?[JSON.parse(E),f,l]:void 0,b={identifierPrefix:t.getAttribute("prefix"),formState:T};for(const[i,n]of Object.entries(u))e[i]=o.createElement(d,{value:n,name:i});const c=o.createElement(r,e,O(a,t.hasAttribute("data-react-children"))),m=C(t);if(m&&delete t[m],A==="only")return o.startTransition(()=>{N(t,()=>{const n=y.createRoot(t);return t.addEventListener("astro:unmount",()=>n.unmount(),{once:!0}),n}).render(c)});o.startTransition(()=>{N(t,()=>{const n=y.hydrateRoot(t,c,b);return t.addEventListener("astro:unmount",()=>n.unmount(),{once:!0}),n}).render(c)})};export{x as default};
