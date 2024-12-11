import { a as allPlaylists, s as songs } from '../../chunks/data_DGPL3Rfk.mjs';
export { r as renderers } from '../../chunks/_@astro-renderers_DwQtr-gZ.mjs';

async function GET({ params, request }) {
  //get the id from the request
  const { url } = request;
  const urlObject = new URL(url);
  const id = urlObject.searchParams.get("id");

  const playlist = allPlaylists.find((playlist) => playlist.id === id);
  const songs$1 = songs.filter((song) => song.albumId === playlist?.albumId);

  return new Response(JSON.stringify({ playlistId: id, songs: songs$1 }), {
    headers: {
      "Content-Type": "application/json",
    },
  });
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
