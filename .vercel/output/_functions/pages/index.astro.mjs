/* empty css                                 */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as renderComponent, b as addAttribute, f as renderTransition, e as createAstro, d as renderScript } from '../chunks/astro/server_B4s4SVlk.mjs';
import 'kleur/colors';
import { u as usePlayerStore, P as Pause, b as Play, $ as $$PlayIcon, a as $$AppLayout } from '../chunks/PlayIcon_B6fOgXLA.mjs';
import { p as playlists } from '../chunks/data_DGPL3Rfk.mjs';
import { jsx } from 'react/jsx-runtime';
import { p as push, a as pop } from '../chunks/_@astro-renderers_DwQtr-gZ.mjs';
export { r as renderers } from '../chunks/_@astro-renderers_DwQtr-gZ.mjs';
/* empty css                                 */

const CONTENT_REGEX = /[&<]/g;

/**
 * @template V
 * @param {V} value
 * @param {boolean} [is_attr]
 */
function escape_html(value, is_attr) {
	const str = String(value ?? '');

	const pattern = CONTENT_REGEX;
	pattern.lastIndex = 0;

	let escaped = '';
	let last = 0;

	while (pattern.test(str)) {
		const i = pattern.lastIndex - 1;
		const ch = str[i];
		escaped += str.substring(last, i) + (ch === '&' ? '&amp;' : ch === '"' ? '&quot;' : '&lt;');
		last = i + 1;
	}

	return escaped + str.substring(last);
}

function CardPlayButton({ id }) {
  const { currentMusic, isPlaying, setIsPlaying, setCurrentMusic } = usePlayerStore((state) => state);
  const isPlayingThisSong = isPlaying && currentMusic.playlistId === id;
  const handleClick = () => {
    if (isPlayingThisSong) {
      setIsPlaying(false);
      return;
    }
    fetch(`/api/get-info-playlist.json?id=${id}`).then((res) => res.json()).then((data) => {
      const { songs } = data;
      const firstSong = songs[0];
      setCurrentMusic({
        playlistId: id,
        songId: firstSong.id,
        songs
      });
      setIsPlaying(true);
    });
  };
  return /* @__PURE__ */ jsx(
    "button",
    {
      onClick: handleClick,
      className: "card-play-button rounded-full bg-green-500 p-2",
      children: isPlayingThisSong ? /* @__PURE__ */ jsx(Pause, {}) : /* @__PURE__ */ jsx(Play, {})
    }
  );
}

const $$Astro$1 = createAstro();
const $$PlaylistItem = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$PlaylistItem;
  const { playlist } = Astro2.props;
  const { id, cover, title, artists, color } = playlist;
  const artistsString = artists.join(", ");
  return renderTemplate`${maybeRenderHead()}<article class="group relative hover:bg-zinc-800 rounded-md"> <div class="absolute right-4 bottom-10 translate-y-4 transition-all duration-300 opacity-0 group-hover:opacity-100  z-20"> ${renderComponent($$result, "CardPlayButton", CardPlayButton, { "id": id, "client:visible": true, "client:component-hydration": "visible", "client:component-path": "@/components/CardPlayButton", "client:component-export": "CardPlayButton" })} </div> <a${addAttribute(`/playlist/${id}`, "href")} class="playlist-item flex relative p-1 overflow-hidden items-center gap-4
    rounded-md bg-zinc-600/30 hover:bg-zinc-800 m-1"> <picture class="h-12 w-12 flex-none"> <img${addAttribute(cover, "src")}${addAttribute(`Cover of ${title} by ${artistsString}`, "alt")} class="object-cover w-full h-full rounded-md"${addAttribute(renderTransition($$result, "eq2hu5ut", "", `playlist ${id} image`), "data-astro-transition-scope")}> </picture> <div class="flex flex-auto flex-col truncate"> <h4 class="text-white text-sm"${addAttribute(renderTransition($$result, "wojxblrd", "", `playlist ${id} title`), "data-astro-transition-scope")}> ${title} </h4> <span class="text-xs text-gray-400"${addAttribute(renderTransition($$result, "zjirzrn6", "", `playlist ${id} artists`), "data-astro-transition-scope")}> ${artistsString} </span> </div> </a> </article>`;
}, "/Users/cristhianrecalde/dev/web/astro/curso/spotify_clon/src/components/PlaylistItem.astro", "self");

function Greeting($$payload, $$props) {
	push();

	const currentDate = new Date();
	const hour = currentDate.getHours();
	let greeting = "";

	if (hour < 12) {
		greeting = "Buenos días";
	} else if (hour < 18) {
		greeting = "Buenas tardes";
	} else {
		greeting = "Buenas noches";
	}

	$$payload.out += `<div class="text-3xl font-bold">${escape_html(greeting)}</div>`;
	pop();
}

const $$Main = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div id="playlist-container" class="relative transition-all duration-1000 bg-green-400 rounded-xl"> <!-- page header --> <div class="relative z-10 px-4 p-2"> <!-- Saludos --> ${renderComponent($$result, "Greeting", Greeting, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "@components/Greeting.svelte", "client:component-export": "default" })} <p class="text-white">Encuentra tu album favorito</p> <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"> ${playlists.map((playlist) => renderTemplate`${renderComponent($$result, "PlaylistItem", $$PlaylistItem, { "playlist": playlist })}`)} </div> </div> <div class="absolute inset-0 bg-gradient-to-b from-transparent to-zinc-950 via-zinc-900/80 rounded-xl"></div> </div>`;
}, "/Users/cristhianrecalde/dev/web/astro/curso/spotify_clon/src/components/Main.astro", void 0);

const $$Astro = createAstro();
const $$CardSongs = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$CardSongs;
  const { playlist } = Astro2.props;
  const { id, cover, title, artists, color } = playlist;
  const artistsString = artists.join(", ");
  return renderTemplate`${maybeRenderHead()}<article class="group relative bg-zinc-900/30 hover:bg-zinc-800 shadow-lg hover:shadow-xl 
         rounded-md transition-all duration-300 w-full max-w-[320px] mx-auto" data-astro-cid-g62t75cb> <div class="relative p-4" data-astro-cid-g62t75cb> <a${addAttribute(`/playlist/${id}`, "href")} class="playlist-item transition-all duration-300 flex flex-col" data-astro-cid-g62t75cb${addAttribute(renderTransition($$result, "uyq7rujj", "", `playlist ${id} box`), "data-astro-transition-scope")}> <picture class="aspect-square w-full h-auto flex-none mb-4 relative" data-astro-cid-g62t75cb> <img${addAttribute(cover, "src")}${addAttribute(`Cover of ${title} by ${artistsString}`, "alt")} class="object-cover w-full h-full rounded-md shadow-lg" data-astro-cid-g62t75cb${addAttribute(renderTransition($$result, "dc5ntjwz", "", `playlist ${id} image`), "data-astro-transition-scope")}> </picture> <div class="flex flex-col gap-2 min-h-[60px]" data-astro-cid-g62t75cb> <h4 class="text-white font-bold truncate text-sm sm:text-base" data-astro-cid-g62t75cb${addAttribute(renderTransition($$result, "43n73qpj", "", `playlist ${id} title`), "data-astro-transition-scope")}> ${title} </h4> <span class="text-xs sm:text-sm text-gray-400 line-clamp-2" data-astro-cid-g62t75cb${addAttribute(renderTransition($$result, "m24xjfzp", "", `playlist ${id} artists`), "data-astro-transition-scope")}> ${artistsString} </span> </div> </a> <button class="play-button absolute right-6 bottom-[85px] p-3 text-black bg-green-500 rounded-full 
             opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 
             transition-all duration-300 hover:scale-105 hover:bg-green-400 shadow-xl
             sm:right-8 md:p-4"${addAttribute(`Reproducir ${title}`, "title")}${addAttribute(id, "data-playlist-id")} data-astro-cid-g62t75cb> ${renderComponent($$result, "PlayIcon", $$PlayIcon, { "data-astro-cid-g62t75cb": true })} </button> </div> </article> ${renderScript($$result, "/Users/cristhianrecalde/dev/web/astro/curso/spotify_clon/src/components/CardSongs.astro?astro&type=script&index=0&lang.ts")} `;
}, "/Users/cristhianrecalde/dev/web/astro/curso/spotify_clon/src/components/CardSongs.astro", "self");

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "AppLayout", $$AppLayout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Main", $$Main, {})} ${maybeRenderHead()}<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4 px-6"> ${playlists.map((playlist) => renderTemplate`${renderComponent($$result2, "CardSongs", $$CardSongs, { "playlist": playlist })}`)} </div> ` })}`;
}, "/Users/cristhianrecalde/dev/web/astro/curso/spotify_clon/src/pages/index.astro", void 0);

const $$file = "/Users/cristhianrecalde/dev/web/astro/curso/spotify_clon/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
