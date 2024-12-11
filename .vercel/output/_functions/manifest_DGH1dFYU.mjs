import 'cookie';
import 'kleur/colors';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_DgoLT03b.mjs';
import 'es-module-lexer';
import { g as decodeKey } from './chunks/astro/server_B4s4SVlk.mjs';
import 'clsx';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///Users/cristhianrecalde/dev/web/astro/curso/spotify_clon/","adapterName":"@astrojs/vercel","routes":[{"file":"","links":[],"scripts":[],"styles":[{"type":"inline","content":"[data-astro-image]{width:100%;height:auto;-o-object-fit:var(--fit);object-fit:var(--fit);-o-object-position:var(--pos);object-position:var(--pos);aspect-ratio:var(--w) / var(--h)}[data-astro-image=responsive]{max-width:calc(var(--w) * 1px);max-height:calc(var(--h) * 1px)}[data-astro-image=fixed]{width:calc(var(--w) * 1px);height:calc(var(--h) * 1px)}\n"}],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/get-info-playlist.json","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/get-info-playlist\\.json\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"get-info-playlist.json","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/get-info-playlist.json.js","pathname":"/api/get-info-playlist.json","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.C0klBFuJ.css"}],"routeData":{"route":"/playlist/[id]","isIndex":false,"type":"page","pattern":"^\\/playlist\\/([^/]+?)\\/?$","segments":[[{"content":"playlist","dynamic":false,"spread":false}],[{"content":"id","dynamic":true,"spread":false}]],"params":["id"],"component":"src/pages/playlist/[id].astro","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.C0klBFuJ.css"},{"type":"inline","content":".play-button[data-astro-cid-g62t75cb] svg[data-astro-cid-g62t75cb]{width:24px;height:24px}@media (min-width: 640px){.play-button[data-astro-cid-g62t75cb] svg[data-astro-cid-g62t75cb]{width:28px;height:28px}}\n"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/Users/cristhianrecalde/dev/web/astro/curso/spotify_clon/src/pages/playlist/[id].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/playlist/[id]@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}],["/Users/cristhianrecalde/dev/web/astro/curso/spotify_clon/src/components/PlaylistItem.astro",{"propagation":"in-tree","containsHead":false}],["/Users/cristhianrecalde/dev/web/astro/curso/spotify_clon/src/components/Main.astro",{"propagation":"in-tree","containsHead":false}],["/Users/cristhianrecalde/dev/web/astro/curso/spotify_clon/src/pages/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/index@_@astro",{"propagation":"in-tree","containsHead":false}],["/Users/cristhianrecalde/dev/web/astro/curso/spotify_clon/src/components/CardSongs.astro",{"propagation":"in-tree","containsHead":false}],["/Users/cristhianrecalde/dev/web/astro/curso/spotify_clon/src/layouts/AppLayout.astro",{"propagation":"in-tree","containsHead":false}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-page:src/pages/api/get-info-playlist.json@_@js":"pages/api/get-info-playlist.json.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-page:src/pages/playlist/[id]@_@astro":"pages/playlist/_id_.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","/Users/cristhianrecalde/dev/web/astro/curso/spotify_clon/node_modules/@astrojs/react/vnode-children.js":"chunks/vnode-children_BkR_XoPb.mjs","/Users/cristhianrecalde/dev/web/astro/curso/spotify_clon/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_D6aTqhp6.mjs","\u0000@astrojs-manifest":"manifest_DGH1dFYU.mjs","@/components/CardPlayButton":"_astro/CardPlayButton.DyHXnV04.js","/Users/cristhianrecalde/dev/web/astro/curso/spotify_clon/src/components/CardSongs.astro?astro&type=script&index=0&lang.ts":"_astro/CardSongs.astro_astro_type_script_index_0_lang.Da0WAs8B.js","/Users/cristhianrecalde/dev/web/astro/curso/spotify_clon/src/components/MusicsTable.astro?astro&type=script&index=0&lang.ts":"_astro/MusicsTable.astro_astro_type_script_index_0_lang.DK4oIX7_.js","@astrojs/svelte/client.js":"_astro/client.svelte.tw96eeZr.js","@components/Greeting.svelte":"_astro/Greeting.BMtpzuUj.js","@astrojs/react/client.js":"_astro/client.CL0M-IJe.js","/Users/cristhianrecalde/dev/web/astro/curso/spotify_clon/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts":"_astro/ClientRouter.astro_astro_type_script_index_0_lang.BScVxmeO.js","@components/player.jsx":"_astro/player.DdU5B8E1.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["/Users/cristhianrecalde/dev/web/astro/curso/spotify_clon/src/components/MusicsTable.astro?astro&type=script&index=0&lang.ts","document.querySelectorAll(\"tr\").forEach(t=>{const e=t.querySelector(\"button\");e&&e.addEventListener(\"click\",()=>{const n=t.querySelector(\"h3\")?.textContent,o=t.querySelector(\"span\")?.textContent,c=t.querySelector(\"img\")?.src,s=new CustomEvent(\"play-song\",{detail:{title:n,artist:o,image:c}});document.dispatchEvent(s)})});"]],"assets":["/_astro/index.C0klBFuJ.css","/favicon.svg","/_astro/CardPlayButton.DyHXnV04.js","/_astro/CardSongs.astro_astro_type_script_index_0_lang.Da0WAs8B.js","/_astro/ClientRouter.astro_astro_type_script_index_0_lang.BScVxmeO.js","/_astro/Greeting.BMtpzuUj.js","/_astro/client.CL0M-IJe.js","/_astro/client.svelte.tw96eeZr.js","/_astro/index.CqpTcRZB.js","/_astro/index.DHQ29l5n.js","/_astro/player.1Cndimv7.js","/_astro/player.DdU5B8E1.js","/_astro/playerStore.C_Wwg2uk.js","/_astro/render.Bbp0I59I.js","/fonts/CircularStd-Black.woff2","/fonts/CircularStd-Bold.woff2","/fonts/CircularStd-Book.woff2","/fonts/CircularStd-Light.woff2","/fonts/CircularStd-Medium.woff2","/music/2/01.mp3","/music/2/02.mp3","/music/2/03.mp3","/music/2/04.mp3","/music/2/05.mp3","/music/3/01.mp3","/music/3/02.mp3","/music/3/03.mp3","/music/3/04.mp3","/music/3/05.mp3","/music/4/01.mp3","/music/4/02.mp3","/music/4/03.mp3","/music/4/04.mp3","/music/4/05.mp3","/music/5/01.mp3","/music/5/02.mp3","/music/5/03.mp3","/music/5/04.mp3","/music/5/05.mp3","/music/6/01.mp3","/music/6/02.mp3","/music/6/03.mp3","/music/6/04.mp3","/music/6/05.mp3","/music/1/01.mp3","/music/1/02.mp3","/music/1/03.mp3","/music/1/04.mp3","/music/1/05.mp3","/music/7/01.mp3","/music/7/02.mp3","/music/7/03.mp3","/music/7/04.mp3","/music/7/05.mp3"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"SQXHGtF93suHL/0Z/ch88/OS/aMdmPr6vrC6f7oEdZI="});

export { manifest };