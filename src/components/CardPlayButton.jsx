import { Play, Pause } from "@/components/player";
import { usePlayerStore } from "@/store/playerStore";

export function CardPlayButton({ id}) {
  const { currentMusic, isPlaying, setIsPlaying, setCurrentMusic } = usePlayerStore(state => state);

  const handleClick = () => {
    setCurrentMusic({ playlistId: id, songId: null, songs: [] });
    setIsPlaying(!isPlaying);
  }

  return (
    <button onClick={handleClick} className="card-play-button rounded-full bg-green-500 p-2">
      {isPlaying ? <Pause /> : <Play />}
    </button>
  )
}
