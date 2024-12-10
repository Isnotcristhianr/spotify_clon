import { usePlayerStore } from "@/store/playerStore";
import { useState, useRef, useEffect } from "react";
import { Slider } from "@/components/Slider";


export const Pause = () => (
    <svg role="img" aria-hidden="true" viewBox="0 0 16 16" height="16" fill="black">
      <path d="M2.7 1a.7.7 0 0 0-.7.7v12.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7H2.7zm8 0a.7.7 0 0 0-.7.7v12.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7h-2.6z"></path>
    </svg>
);

export const Play = () => (
    <svg role="img" aria-hidden="true" viewBox="0 0 24 24" height="16" fill="black">
      <path d="m7.05 3.606 13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606z"></path>
    </svg>
);

const CurrentSong = ({ image, title, artists }) => {
  return (
    <div className="flex flex-row gap-5 overflow-hidden">
      <picture className="w-16 h-16">
        <img src={image} alt={title} className="object-cover w-full h-full rounded-md" />
      </picture>
      <div className="flex flex-col gap-1">
        <h3 className="text-white text-sm font-bold">{title}</h3>
        <span className="text-white text-xs font-bold opacity-50">{artists ? artists.join(', ') : ''}</span>
      </div>
    </div>
  )
}

export function Player() {
  const { isPlaying, setIsPlaying, currentMusic } = usePlayerStore(state => state);
  const audioRef = useRef();

  useEffect(() => {
    isPlaying ? audioRef.current.play() : audioRef.current.pause();
  }, [isPlaying]);

  useEffect(() => {
    const { playlistId, songId } = currentMusic;
    if (playlistId && songId) {
      const src = `/music/${playlistId}/0${songId}.mp3`;
      audioRef.current.src = src;
      audioRef.current.volume = 0.1;
      audioRef.current.play()
        .then(() => setIsPlaying(true))
        .catch(e => console.error("Error playing audio:", e));
    }
  }, [currentMusic]);

  const handleClick = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="flex flex-row justify-between w-full px-4 z-50">
      <CurrentSong {...currentMusic.songs[0]} />
      <div className="grid place-content-center gap-4 flex-1">
        <div className="flex justify-center">
          <button className="bg-white rounded-full p-2" onClick={handleClick}>
            {isPlaying ? <Pause /> : <Play />}
          </button>
        </div>
      </div>
      <div>
        <audio ref={audioRef}></audio>
      </div>
      <div className="grid place-content-center">
        <Slider 
          defaultValue={[100]}
          max={100}
          min={0}
          step={1}
          className="w-[95px] h-[5px] rounded-full"
          onValueChange={(value) => {
            audioRef.current.volume = value[0] / 100;
          }}
        />
      </div>
    </div>
  );
}
