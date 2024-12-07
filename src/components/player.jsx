import { usePlayerStore } from "@/store/playerStore";
import { useState, useRef, useEffect } from "react";

export const Pause = () => {
  return (
    <svg
      role="img"
      aria-hidden="true"
      viewBox="0 0 16 16"
      height="16"
      fill="black"
    >
      <path d="M2.7 1a.7.7 0 0 0-.7.7v12.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7H2.7zm8 0a.7.7 0 0 0-.7.7v12.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7h-2.6z"></path>
    </svg>
  );
};

export const Play = () => {
  return (
    <svg
      role="img"
      aria-hidden="true"
      viewBox="0 0 24 24"
      height="16"
      fill="black"
    >
      <path d="m7.05 3.606 13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606z"></path>
    </svg>
  );
};

export function Player() {
  const { currentMusic, isPlaying, setIsPlaying, setCurrentMusic } = usePlayerStore(state => state);
  const audioRef = useRef();

  useEffect(() => {
    audioRef.current.src = "/music/1/01.mp3";
  }, []);

  const handleClick = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="flex flex-row justify-between w-full px-4 z-50">
      <div>current song</div>
      <div className="grid place-content-center gap-4 flex-1">
        <div className="flex justify-center">
          <button
            className="bg-white rounded-full p-2"
            onClick={handleClick}
          >
            {isPlaying ? <Pause /> : <Play />}
          </button>
        </div>
      </div>
      <div>
        <audio ref={audioRef}></audio>
      </div>
    </div>
  );
}
