/* empty css                                    */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as renderComponent, b as addAttribute, d as renderScript, e as createAstro, f as renderTransition } from '../../chunks/astro/server_B4s4SVlk.mjs';
import 'kleur/colors';
import { a as allPlaylists, s as songs } from '../../chunks/data_DGPL3Rfk.mjs';
import { $ as $$PlayIcon, a as $$AppLayout } from '../../chunks/PlayIcon_B6fOgXLA.mjs';
import 'clsx';
export { r as renderers } from '../../chunks/_@astro-renderers_DwQtr-gZ.mjs';

const $$TimeIcon = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg role="img" aria-hidden="true" viewBox="0 0 16 16" class="Svg-sc-ytk21e-0 dYnaPI" fill="white" width="15" height="15"><path d="M8 1.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8z"></path><path d="M8 3.25a.75.75 0 0 1 .75.75v3.25H11a.75.75 0 0 1 0 1.5H7.25V4A.75.75 0 0 1 8 3.25z"></path></svg>`;
}, "/Users/cristhianrecalde/dev/web/astro/curso/spotify_clon/src/icons/TimeIcon.astro", void 0);

const $$Astro$1 = createAstro();
const $$MusicsTable = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$MusicsTable;
  const { songs } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<table class="table-auto text-left min-w-full divide-y divide-gray-500/20"> <thead class=""> <tr class="text-gray-400 text-sm uppercase"> <th class="px-4 py-2 w-14">#</th> <th class="px-4 py-2">Título</th> <th class="px-4 py-2 hidden md:table-cell">Álbum</th> <th class="px-4 py-2">${renderComponent($$result, "TimeIcon", $$TimeIcon, {})}</th> </tr> </thead> <tbody> ${songs.map((song, index) => renderTemplate`<tr class="text-gray-400 text-sm hover:bg-white/10 rounded-lg transition duration-300 group"> <td class="px-4 py-3 relative"> <span class="group-hover:hidden">${index + 1}</span> <button class="hidden group-hover:block w-4 h-4 text-white" title="Reproducir {song.title}"> ${renderComponent($$result, "PlayIcon", $$PlayIcon, {})} </button> </td> <td class="px-4 py-3 flex gap-3"> <picture class="w-10 h-10 flex-shrink-0"> <img${addAttribute(song.image, "src")}${addAttribute(song.title, "alt")} class="w-10 h-10 rounded"> </picture> <div class="flex flex-col"> <h3 class="text-white text-base font-normal">${song.title}</h3> <span class="text-sm">${song.artists.join(", ")}</span> </div> </td> <td class="px-4 py-3 hidden md:table-cell">${song.album}</td> <td class="px-4 py-3">${song.duration}</td> </tr>`)} </tbody> </table> ${renderScript($$result, "/Users/cristhianrecalde/dev/web/astro/curso/spotify_clon/src/components/MusicsTable.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/cristhianrecalde/dev/web/astro/curso/spotify_clon/src/components/MusicsTable.astro", void 0);

const $$Astro = createAstro();
const $$id = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { id } = Astro2.params;
  const playlist = allPlaylists.find((playlist2) => playlist2.id === id);
  const playListSongs = songs.filter((song) => song.albumId === playlist?.albumId);
  return renderTemplate`${renderComponent($$result, "AppLayout", $$AppLayout, { "title": "Spotify Clone" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div id="playlist-container" class="relative flex flex-col h-full bg-zinc-900 overflow-x-hidden bg-gradient-to-t from-50% from-zinc-900 via-zinc-900/80"${addAttribute(`background-color: ${playlist?.color.accent}`, "style")}${addAttribute(renderTransition($$result2, "lwbbxtwc", "", `playlist ${id} box`), "data-astro-transition-scope")}> <!-- <PageHeader /> --> <header class="flex flex-row gap-8 px-6 mt-12"> <picture class="aspect-square w-52 h-52 flex-none"> <img${addAttribute(playlist?.cover, "src")}${addAttribute(`Cover of ${playlist?.title}`, "alt")} class="object-cover w-full h-full shadow-lg"${addAttribute(renderTransition($$result2, "jkadwh6j", "", `playlist ${playlist?.id} image`), "data-astro-transition-scope")}> </picture> <div class="flex flex-col justify-between"> <h2 class="flex flex-1 items-end">Playlist</h2> <div> <h1 class="text-5xl font-bold block text-white"> <span${addAttribute(renderTransition($$result2, "vl5qskca", "", `playlist ${playlist?.id} title`), "data-astro-transition-scope")}> ${playlist?.title} </span> </h1> </div> <div class="flex-1 flex items-end"> <div class="text-sm text-gray-300 font-normal"> <div${addAttribute(renderTransition($$result2, "2qsllmyo", "", `playlist ${playlist?.id} artists`), "data-astro-transition-scope")}> <span>${playlist?.artists.join(", ")}</span> </div> <p class="mt-1"> <span class="text-white">${playListSongs.length} canciones</span>,
              3 h aproximadamente
</p> </div> </div> </div> </header> <!-- Musics Table --> ${renderComponent($$result2, "MusicsTable", $$MusicsTable, { "songs": playListSongs })} </div> ` })}`;
}, "/Users/cristhianrecalde/dev/web/astro/curso/spotify_clon/src/pages/playlist/[id].astro", "self");

const $$file = "/Users/cristhianrecalde/dev/web/astro/curso/spotify_clon/src/pages/playlist/[id].astro";
const $$url = "/playlist/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$id,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
