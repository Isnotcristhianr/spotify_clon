import { c as createComponent, r as renderTemplate, b as addAttribute, h as renderHead, i as renderSlot, e as createAstro, m as maybeRenderHead, a as renderComponent, d as renderScript, f as renderTransition } from './astro/server_B4s4SVlk.mjs';
import 'kleur/colors';
import { clsx } from 'clsx';
/* empty css                         */
import { p as playlists } from './data_DGPL3Rfk.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import { create } from 'zustand';
import * as React from 'react';
import { useRef, useState, useEffect } from 'react';
import * as SliderPrimitive from '@radix-ui/react-slider';
import { twMerge } from 'tailwind-merge';

const $$Astro$4 = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Layout;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>Spotify Clone</title>${renderHead()}</head> <body> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "/Users/cristhianrecalde/dev/web/astro/curso/spotify_clon/src/layouts/Layout.astro", void 0);

const $$LibraryIcon = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg role="img" height="32" aria-hidden="true" viewBox="0 0 24 24" class="Svg-sc-ytk21e-0 bneLcE" fill="white"><path d="M3 22a1 1 0 0 1-1-1V3a1 1 0 0 1 2 0v18a1 1 0 0 1-1 1zM15.5 2.134A1 1 0 0 0 14 3v18a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V6.464a1 1 0 0 0-.5-.866l-6-3.464zM9 2a1 1 0 0 0-1 1v18a1 1 0 1 0 2 0V3a1 1 0 0 0-1-1z"></path></svg>`;
}, "/Users/cristhianrecalde/dev/web/astro/curso/spotify_clon/src/icons/LibraryIcon.astro", void 0);

const $$Astro$3 = createAstro();
const $$SideMenu = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$SideMenu;
  const { href } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<li> <a${addAttribute(href, "href")} class="flex gap-4 text-zinc-400 hover:text-zinc-100 items-center py-3 px-5 font-medium"> ${renderSlot($$result, $$slots["default"])} </a> </li>`;
}, "/Users/cristhianrecalde/dev/web/astro/curso/spotify_clon/src/components/SideMenu.astro", void 0);

const $$MoreIcon = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg role="img" aria-hidden="true" viewBox="0 0 16 16" height="16" fill="white"><path d="M15.25 8a.75.75 0 0 1-.75.75H8.75v5.75a.75.75 0 0 1-1.5 0V8.75H1.5a.75.75 0 0 1 0-1.5h5.75V1.5a.75.75 0 0 1 1.5 0v5.75h5.75a.75.75 0 0 1 .75.75z"></path></svg>`;
}, "/Users/cristhianrecalde/dev/web/astro/curso/spotify_clon/src/icons/MoreIcon.astro", void 0);

const $$SearchIcon = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg role="img" aria-hidden="true" class="Svg-sc-ytk21e-0 dYnaPI CIVozJ8XNPJ60uMN23Yg" viewBox="0 0 16 16" height="16" fill="white"><path d="M7 1.75a5.25 5.25 0 1 0 0 10.5 5.25 5.25 0 0 0 0-10.5zM.25 7a6.75 6.75 0 1 1 12.096 4.12l3.184 3.185a.75.75 0 1 1-1.06 1.06L11.304 12.2A6.75 6.75 0 0 1 .25 7z"></path></svg>`;
}, "/Users/cristhianrecalde/dev/web/astro/curso/spotify_clon/src/icons/SearchIcon.astro", void 0);

const $$Astro$2 = createAstro();
const $$SideMenuCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$SideMenuCard;
  const { playlist } = Astro2.props;
  const { id, cover, title, artists, color } = playlist;
  const artistsString = artists.join(", ");
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(`/playlist/${id}`, "href")} class="playlist-item flex relative p-2 overflow-hidden items-center gap-5 rounded-md hover:bg-zinc-800"> <picture class="h-12 w-12 flex-none"> <img${addAttribute(cover, "src")}${addAttribute(`Cover of ${title} by ${artistsString}`, "alt")} class="object-cover w-full h-full rounded-md"> </picture> <div class="flex flex-auto flex-col truncate"> <h4 class="text-white text-sm"> ${title} </h4> <span class="text-xs text-gray-400"> ${artistsString} </span> </div> </a>`;
}, "/Users/cristhianrecalde/dev/web/astro/curso/spotify_clon/src/components/SideMenuCard.astro", void 0);

const $$AsideMenu = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<nav class="flex flex-col gap-2 flex-1"> <div class="rounded-lg h-full"> <ul> ${renderComponent($$result, "SideMenu", $$SideMenu, { "href": "/#" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "LibraryIcon", $$LibraryIcon, {})} <span>Tu Biblioteca</span> <div class="flex flex-1 justify-end mr-4"> ${renderComponent($$result2, "MoreIcon", $$MoreIcon, {})} </div> ` })} ${renderComponent($$result, "SideMenu", $$SideMenu, { "href": "/#" }, { "default": ($$result2) => renderTemplate` <input type="text" placeholder="Buscar" class="bg-transparent outline-none text-sm"> ${renderComponent($$result2, "SearchIcon", $$SearchIcon, {})} ` })} <hr class="border-t border-zinc-800 my-1"> </ul> <ul> ${playlists.map((playlist) => renderTemplate`${renderComponent($$result, "SideMenuCard", $$SideMenuCard, { "playlist": playlist })}`)} </ul> </div></nav>`;
}, "/Users/cristhianrecalde/dev/web/astro/curso/spotify_clon/src/components/AsideMenu.astro", void 0);

const $$SpotifyIcon = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg role="img" viewBox="0 0 24 24" aria-label="Spotify" aria-hidden="false" height="32" fill="white"><title>Spotify</title><path d="M13.427.01C6.805-.253 1.224 4.902.961 11.524.698 18.147 5.853 23.728 12.476 23.99c6.622.263 12.203-4.892 12.466-11.514S20.049.272 13.427.01m5.066 17.579a.717.717 0 0 1-.977.268 14.4 14.4 0 0 0-5.138-1.747 14.4 14.4 0 0 0-5.42.263.717.717 0 0 1-.338-1.392c1.95-.474 3.955-.571 5.958-.29 2.003.282 3.903.928 5.647 1.92a.717.717 0 0 1 .268.978m1.577-3.15a.93.93 0 0 1-1.262.376 17.7 17.7 0 0 0-5.972-1.96 17.7 17.7 0 0 0-6.281.238.93.93 0 0 1-1.11-.71.93.93 0 0 1 .71-1.11 19.5 19.5 0 0 1 6.94-.262 19.5 19.5 0 0 1 6.599 2.165c.452.245.62.81.376 1.263m1.748-3.551a1.147 1.147 0 0 1-1.546.488 21.4 21.4 0 0 0-6.918-2.208 21.4 21.4 0 0 0-7.259.215 1.146 1.146 0 0 1-.456-2.246 23.7 23.7 0 0 1 8.034-.24 23.7 23.7 0 0 1 7.657 2.445c.561.292.78.984.488 1.546m13.612-.036-.832-.247c-1.67-.495-2.14-.681-2.14-1.353 0-.637.708-1.327 2.264-1.327 1.539 0 2.839.752 3.51 1.31.116.096.24.052.24-.098V6.935c0-.097-.027-.15-.098-.203-.83-.62-2.272-1.07-3.723-1.07-2.953 0-4.722 1.68-4.722 3.59 0 2.157 1.371 2.91 3.626 3.546l.973.274c1.689.478 1.998.902 1.998 1.556 0 1.097-.831 1.433-2.07 1.433-1.556 0-3.457-.911-4.35-2.025-.08-.098-.177-.053-.177.062v2.423c0 .097.01.141.08.22.743.814 2.52 1.53 4.59 1.53 2.546 0 4.456-1.485 4.456-3.784 0-1.787-1.052-2.865-3.625-3.635m10.107-1.76c-1.68 0-2.653 1.026-3.219 2.052V9.376c0-.08-.044-.124-.124-.124h-2.22c-.079 0-.123.044-.123.124V20.72c0 .08.044.124.124.124h2.22c.079 0 .123-.044.123-.124v-4.536c.566 1.025 1.521 2.034 3.237 2.034 2.264 0 3.89-1.955 3.89-4.581s-1.644-4.545-3.908-4.545m-.654 6.986c-1.185 0-2.211-1.167-2.618-2.458.407-1.362 1.344-2.405 2.618-2.405 1.211 0 2.051.92 2.051 2.423s-.84 2.44-2.051 2.44m40.633-6.826h-2.264c-.08 0-.115.017-.15.097l-2.282 5.483-2.29-5.483c-.035-.08-.07-.097-.15-.097h-3.661v-.584c0-.955.645-1.397 1.476-1.397.496 0 1.035.256 1.415.486.089.053.15-.008.115-.088l-.796-1.901a.26.26 0 0 0-.124-.133c-.389-.203-1.025-.38-1.644-.38-1.875 0-2.954 1.432-2.954 3.254v.743h-1.503c-.08 0-.124.044-.124.124v1.768c0 .08.044.124.124.124h1.503v6.668c0 .08.044.123.124.123h2.264c.08 0 .124-.044.124-.123v-6.668h1.936l2.812 6.11-1.512 3.325c-.044.098.009.142.097.142h2.414c.08 0 .116-.018.15-.097l4.997-11.355c.035-.08-.009-.141-.097-.141M54.964 9.04c-2.865 0-4.837 2.025-4.837 4.616 0 2.573 1.971 4.616 4.837 4.616 2.856 0 4.846-2.043 4.846-4.616 0-2.591-1.99-4.616-4.846-4.616m.008 7.065c-1.37 0-2.343-1.043-2.343-2.45 0-1.405.973-2.449 2.343-2.449 1.362 0 2.335 1.043 2.335 2.45 0 1.406-.973 2.45-2.335 2.45m33.541-6.334a1.24 1.24 0 0 0-.483-.471 1.4 1.4 0 0 0-.693-.17q-.384 0-.693.17a1.24 1.24 0 0 0-.484.471q-.174.302-.174.681 0 .375.174.677.175.3.484.471t.693.17.693-.17.483-.471.175-.676q0-.38-.175-.682m-.211 1.247a1 1 0 0 1-.394.39 1.15 1.15 0 0 1-.571.14 1.16 1.16 0 0 1-.576-.14 1 1 0 0 1-.391-.39 1.14 1.14 0 0 1-.14-.566q0-.316.14-.562t.391-.388.576-.14q.32 0 .57.14.253.141.395.39t.142.565q0 .312-.142.56m-19.835-5.78c-.85 0-1.468.6-1.468 1.396s.619 1.397 1.468 1.397c.866 0 1.485-.6 1.485-1.397 0-.796-.619-1.397-1.485-1.397m19.329 5.19a.31.31 0 0 0 .134-.262q0-.168-.132-.266-.132-.099-.381-.099h-.588v1.229h.284v-.489h.154l.374.489h.35l-.41-.518a.5.5 0 0 0 .215-.084m-.424-.109h-.26v-.3h.27q.12 0 .184.036a.12.12 0 0 1 .065.116.12.12 0 0 1-.067.111.4.4 0 0 1-.192.037M69.607 9.252h-2.263c-.08 0-.124.044-.124.124v8.56c0 .08.044.123.124.123h2.263c.08 0 .124-.044.124-.123v-8.56c0-.08-.044-.124-.124-.124m-3.333 6.605a2.1 2.1 0 0 1-1.053.257c-.725 0-1.185-.425-1.185-1.362v-3.484h2.211c.08 0 .124-.044.124-.124V9.376c0-.08-.044-.124-.124-.124h-2.21V6.944c0-.097-.063-.15-.15-.08l-3.954 3.113c-.053.044-.07.088-.07.16v1.007c0 .08.044.124.123.124h1.539v3.855c0 2.087 1.203 3.06 2.918 3.06.743 0 1.46-.194 1.884-.442.062-.035.07-.07.07-.133v-1.68c0-.088-.044-.115-.123-.07" transform="translate(-0.95,0)"></path></svg>`;
}, "/Users/cristhianrecalde/dev/web/astro/curso/spotify_clon/src/icons/SpotifyIcon.astro", void 0);

const $$HomeIcon = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg role="img" aria-hidden="true" viewBox="0 0 24 24" height="20" fill="none" stroke="white" stroke-width="2"><path d="M13.5 1.515a3 3 0 0 0-3 0L3 5.845a2 2 0 0 0-1 1.732V21a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6h4v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V7.577a2 2 0 0 0-1-1.732l-7.5-4.33z"></path></svg>`;
}, "/Users/cristhianrecalde/dev/web/astro/curso/spotify_clon/src/icons/HomeIcon.astro", void 0);

const $$AlbumIcon = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg role="img" aria-hidden="true" viewBox="0 0 24 24" height="20" fill="white"><path d="M15 15.5c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2z"></path><path d="M1.513 9.37A1 1 0 0 1 2.291 9h19.418a1 1 0 0 1 .979 1.208l-2.339 11a1 1 0 0 1-.978.792H4.63a1 1 0 0 1-.978-.792l-2.339-11a1 1 0 0 1 .201-.837zM3.525 11l1.913 9h13.123l1.913-9H3.525zM4 2a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v4h-2V3H6v3H4V2z"></path></svg>`;
}, "/Users/cristhianrecalde/dev/web/astro/curso/spotify_clon/src/icons/AlbumIcon.astro", void 0);

const $$DownLoadIcon = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg role="img" aria-hidden="true" viewBox="0 0 16 16" height="20" fill="green"><path d="M4.995 8.745a.75.75 0 0 1 1.06 0L7.25 9.939V4a.75.75 0 0 1 1.5 0v5.94l1.195-1.195a.75.75 0 1 1 1.06 1.06L8 12.811l-.528-.528a.945.945 0 0 1-.005-.005L4.995 9.805a.75.75 0 0 1 0-1.06z"></path><path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13z"></path></svg>`;
}, "/Users/cristhianrecalde/dev/web/astro/curso/spotify_clon/src/icons/DownLoadIcon.astro", void 0);

const $$AlertIcon = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg role="img" aria-hidden="true" viewBox="0 0 16 16" height="12" fill="green"><path d="M8 1.5a4 4 0 0 0-4 4v3.27a.75.75 0 0 1-.1.373L2.255 12h11.49L12.1 9.142a.75.75 0 0 1-.1-.374V5.5a4 4 0 0 0-4-4zm-5.5 4a5.5 5.5 0 0 1 11 0v3.067l2.193 3.809a.75.75 0 0 1-.65 1.124H10.5a2.5 2.5 0 0 1-5 0H.957a.75.75 0 0 1-.65-1.124L2.5 8.569V5.5zm4.5 8a1 1 0 1 0 2 0H7z"></path></svg>`;
}, "/Users/cristhianrecalde/dev/web/astro/curso/spotify_clon/src/icons/AlertIcon.astro", void 0);

const $$TopMenu = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="p-2 flex flex-wrap items-center gap-4"> <a href="https://open.spotify.com" target="_blank" class="md:flex hidden"> ${renderComponent($$result, "SpotifyIcon", $$SpotifyIcon, {})} </a> <a href="/" class="bg-zinc-900 rounded-full p-3"> ${renderComponent($$result, "HomeIcon", $$HomeIcon, {})} </a> <div class="bg-zinc-900 rounded-full p-3 flex items-center gap-2 text-zinc-400 flex-1 min-w-[200px]"> ${renderComponent($$result, "SearchIcon", $$SearchIcon, {})} <input type="text" placeholder="¿Qué quieres escuchar?" class="bg-transparent border-none outline-none text-zinc-400 placeholder:text-zinc-400 w-full"> <div class=" items-center gap-2 md:flex hidden"> <span>|</span> ${renderComponent($$result, "AlbumIcon", $$AlbumIcon, {})} </div> </div> <a href="https://open.spotify.com/download" target="_blank" class="bg-zinc-900 rounded-full p-3  items-center gap-2 text-zinc-400 lg:flex hidden"> ${renderComponent($$result, "DownLoadIcon", $$DownLoadIcon, {})} <label class="cursor-pointer">Instalar App</label> </a> <a href="https://open.spotify.com/alert" target="_blank" class="bg-zinc-900 rounded-full p-4  items-center gap-2 text-zinc-400 sm:flex hidden"> ${renderComponent($$result, "AlertIcon", $$AlertIcon, {})} </a> <div class="flex items-center gap-2 bg-zinc-400 hover:bg-white transition-colors rounded-full p-3 px-6 text-zinc-900 font-bold cursor-pointer"> <a href="https://accounts.spotify.com/es/login?continue=https%3A%2F%2Fopen.spotify.com%2Fintl-es" class="text-sm whitespace-nowrap">
Login
</a> </div> </div>`;
}, "/Users/cristhianrecalde/dev/web/astro/curso/spotify_clon/src/components/TopMenu.astro", void 0);

const $$Astro$1 = createAstro();
const $$ClientRouter = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ClientRouter;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>${renderScript($$result, "/Users/cristhianrecalde/dev/web/astro/curso/spotify_clon/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/cristhianrecalde/dev/web/astro/curso/spotify_clon/node_modules/astro/components/ClientRouter.astro", void 0);

const usePlayerStore = create((set) => ({
  isPlaying: false,
  currentMusic: {
    playlistId: null,
    songId: null,
    songs: [],
  },
  setIsPlaying: (isPlaying) => set({ isPlaying }),
  setCurrentMusic: (currentMusic) => set({ currentMusic }),
}));

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const Slider = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxs(
  SliderPrimitive.Root,
  {
    ref,
    className: cn(
      "relative flex w-full touch-none select-none items-center",
      className
    ),
    ...props,
    children: [
      /* @__PURE__ */ jsx(SliderPrimitive.Track, { className: "relative h-2 w-full grow overflow-hidden rounded-full bg-zinc-800", children: /* @__PURE__ */ jsx(SliderPrimitive.Range, { className: "absolute h-full bg-green-500" }) }),
      /* @__PURE__ */ jsx(SliderPrimitive.Thumb, { className: "block h-3 w-3 rounded-full border-2 border-green-500 bg-white ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50" })
    ]
  }
));
Slider.displayName = SliderPrimitive.Root.displayName;

const Pause = () => /* @__PURE__ */ jsx(
  "svg",
  {
    role: "img",
    "aria-hidden": "true",
    viewBox: "0 0 16 16",
    height: "16",
    fill: "black",
    children: /* @__PURE__ */ jsx("path", { d: "M2.7 1a.7.7 0 0 0-.7.7v12.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7H2.7zm8 0a.7.7 0 0 0-.7.7v12.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7h-2.6z" })
  }
);
const Play = () => /* @__PURE__ */ jsx(
  "svg",
  {
    role: "img",
    "aria-hidden": "true",
    viewBox: "0 0 24 24",
    height: "16",
    fill: "black",
    children: /* @__PURE__ */ jsx("path", { d: "m7.05 3.606 13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606z" })
  }
);
const CurrentSong = ({ image, title, artists }) => {
  if (!title) return null;
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-row gap-5 overflow-hidden", children: [
    /* @__PURE__ */ jsx("picture", { className: "w-16 h-16", children: /* @__PURE__ */ jsx(
      "img",
      {
        src: image,
        alt: title,
        className: "object-cover w-full h-full rounded-md"
      }
    ) }),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-1", children: [
      /* @__PURE__ */ jsx("h3", { className: "text-white text-sm font-bold", children: title }),
      /* @__PURE__ */ jsx("span", { className: "text-white text-xs font-bold opacity-50", children: artists ? artists.join(", ") : "" })
    ] })
  ] });
};
const formatTime = (time) => {
  if (!time || isNaN(time)) return "0:00";
  const seconds = Math.floor(time % 60);
  const minutes = Math.floor(time / 60);
  return `${minutes}:${seconds.toString().padStart(2, "0")}`;
};
function Player() {
  const { isPlaying, setIsPlaying, currentMusic } = usePlayerStore(
    (state) => state
  );
  const audioRef = useRef();
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.5);
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    if (isPlaying) {
      const playPromise = audio.play();
      if (playPromise !== void 0) {
        playPromise.catch((error) => {
          console.error("Error playing audio:", error);
          setIsPlaying(false);
        });
      }
    } else {
      audio.pause();
    }
  }, [isPlaying]);
  useEffect(() => {
    const { playlistId, songId } = currentMusic;
    if (playlistId && songId) {
      const src = `/music/${playlistId}/0${songId}.mp3`;
      const audio = audioRef.current;
      audio.src = src;
      audio.volume = volume;
      const playPromise = audio.play();
      if (playPromise !== void 0) {
        playPromise.then(() => setIsPlaying(true)).catch((error) => {
          console.error("Error playing audio:", error);
          setIsPlaying(false);
        });
      }
    }
  }, [currentMusic]);
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    const updateProgress = () => {
      const newTime = audio.currentTime;
      const newDuration = audio.duration;
      if (!isNaN(newTime)) setCurrentTime(newTime);
      if (!isNaN(newDuration)) setDuration(newDuration);
    };
    const handleEnded = () => {
      setIsPlaying(false);
      setCurrentTime(0);
    };
    audio.addEventListener("timeupdate", updateProgress);
    audio.addEventListener("loadedmetadata", updateProgress);
    audio.addEventListener("ended", handleEnded);
    return () => {
      audio.removeEventListener("timeupdate", updateProgress);
      audio.removeEventListener("loadedmetadata", updateProgress);
      audio.removeEventListener("ended", handleEnded);
    };
  }, []);
  const handleClick = () => {
    setIsPlaying(!isPlaying);
  };
  const currentSong = currentMusic.songs?.[0];
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-row justify-between w-full px-4 z-50", children: [
    /* @__PURE__ */ jsx("div", { className: "w-[200px]", children: /* @__PURE__ */ jsx(CurrentSong, { ...currentSong }) }),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center justify-center gap-4 flex-1", children: [
      /* @__PURE__ */ jsx("div", { className: "flex justify-center", children: /* @__PURE__ */ jsx(
        "button",
        {
          className: "bg-white rounded-full p-2 hover:scale-105 transition duration-200",
          onClick: handleClick,
          children: isPlaying ? /* @__PURE__ */ jsx(Pause, {}) : /* @__PURE__ */ jsx(Play, {})
        }
      ) }),
      /* @__PURE__ */ jsxs("div", { className: "flex gap-2 items-center w-full max-w-[600px]", children: [
        /* @__PURE__ */ jsx("span", { className: "text-xs text-white opacity-70 w-12 text-right", children: formatTime(currentTime) }),
        /* @__PURE__ */ jsx(
          Slider,
          {
            defaultValue: [0],
            value: [currentTime],
            max: duration || 100,
            min: 0,
            className: "w-[400px]",
            onValueCommit: (value) => {
              const [newTime] = value;
              const audio = audioRef.current;
              if (audio && !isNaN(newTime)) {
                audio.currentTime = newTime;
                setCurrentTime(newTime);
              }
            }
          }
        ),
        /* @__PURE__ */ jsx("span", { className: "text-xs text-white opacity-70 w-12", children: formatTime(duration) })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid place-content-center w-[200px]", children: /* @__PURE__ */ jsx(
      Slider,
      {
        defaultValue: [volume * 100],
        value: [volume * 100],
        max: 100,
        min: 0,
        step: 1,
        className: "w-[95px] h-[5px]",
        onValueChange: (value) => {
          const [newVolume] = value;
          const volumeValue = newVolume / 100;
          setVolume(volumeValue);
          if (audioRef.current) {
            audioRef.current.volume = volumeValue;
          }
        }
      }
    ) }),
    /* @__PURE__ */ jsx("audio", { ref: audioRef })
  ] });
}

const $$Astro = createAstro();
const $$AppLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$AppLayout;
  const { title } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": title, "data-astro-cid-j3tygqaf": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div id="app" class="relative h-screen p-2 gap-2" data-astro-cid-j3tygqaf> <header class="[grid-area:top] flex-1" data-astro-cid-j3tygqaf> ${renderComponent($$result2, "TopMenu", $$TopMenu, { "data-astro-cid-j3tygqaf": true })} </header> <aside class="[grid-area:aside] flex-col overflow-y-auto rounded-lg bg-zinc-900
                      hidden sm:flex max-w-[300px]" data-astro-cid-j3tygqaf> ${renderComponent($$result2, "AsideMenu", $$AsideMenu, { "data-astro-cid-j3tygqaf": true })} </aside> <!-- info desarrollador --> <main class="[grid-area:main] rounded-lg bg-zinc-900 overflow-y-auto w-full" data-astro-cid-j3tygqaf> <div class="flex flex-col gap-2 items-end justify-end p-2" data-astro-cid-j3tygqaf> <p class="text-sm text-zinc-500" data-astro-cid-j3tygqaf>
Desarrollado por <a href="https://github.com/Isnotcristhianr" class="text-white" data-astro-cid-j3tygqaf>Cristhian Recalde</a> </p> </div> ${renderComponent($$result2, "ViewTransitions", $$ClientRouter, { "fallback": "none", "data-astro-cid-j3tygqaf": true })} ${renderSlot($$result2, $$slots["default"])} </main> <footer class="[grid-area:player] h-[80px] sm:h-[90px] bg-zinc-900 rounded-lg w-full
                       fixed bottom-2 left-2 right-2 z-50" data-astro-cid-j3tygqaf> ${renderComponent($$result2, "Player", Player, { "client:load": true, "data-astro-transition-persist": "media-player", "client:component-hydration": "load", "client:component-path": "@components/player.jsx", "client:component-export": "Player", "data-astro-cid-j3tygqaf": true, "data-astro-transition-scope": renderTransition($$result2, "npxs75eu", "", "media-player") })} </footer> </div> ` })} `;
}, "/Users/cristhianrecalde/dev/web/astro/curso/spotify_clon/src/layouts/AppLayout.astro", "self");

const $$PlayIcon = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg role="img" aria-hidden="true" viewBox="0 0 24 24" height="16" fill="currentColor"><path d="M8 5.14v14l11-7-11-7z"></path></svg>`;
}, "/Users/cristhianrecalde/dev/web/astro/curso/spotify_clon/src/icons/PlayIcon.astro", void 0);

export { $$PlayIcon as $, Pause as P, $$AppLayout as a, Play as b, usePlayerStore as u };
