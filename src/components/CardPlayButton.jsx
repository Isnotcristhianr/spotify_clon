import { Play, Pause } from "@/components/player";
import { usePlayerStore } from "@/store/playerStore";

export function CardPlayButton({ id }) {
  const { currentMusic, isPlaying, setIsPlaying, setCurrentMusic } =
    usePlayerStore((state) => state);

  const isPlayingThisSong = isPlaying && currentMusic.playlistId === id;

  const handleClick = () => {
    if (isPlayingThisSong) {
      setIsPlaying(false);
      return;
    }

    fetch(`/api/get-info-playlist.json?id=${id}`)
      .then((res) => res.json())
      .then((data) => {
        const { songs } = data;
        const firstSong = songs[0];
        
        setCurrentMusic({ 
          playlistId: id,
          songId: firstSong.id,
          songs: songs
        });
        setIsPlaying(true);
      });
  };

  return (
    <button
      onClick={handleClick}
      className="card-play-button rounded-full bg-green-500 p-2"
    >
      {isPlayingThisSong ? <Pause /> : <Play />}
    </button>
  );
}
