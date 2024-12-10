import { usePlayerStore } from "@/store/playerStore";
import { useState, useRef, useEffect } from "react";
import { Slider } from "@/components/Slider";

export const Pause = () => (
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

export const Play = () => (
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

const CurrentSong = ({ image, title, artists }) => {
  if (!title) return null;
  
  return (
    <div className="flex flex-row gap-5 overflow-hidden">
      <picture className="w-16 h-16">
        <img
          src={image}
          alt={title}
          className="object-cover w-full h-full rounded-md"
        />
      </picture>
      <div className="flex flex-col gap-1">
        <h3 className="text-white text-sm font-bold">{title}</h3>
        <span className="text-white text-xs font-bold opacity-50">
          {artists ? artists.join(", ") : ""}
        </span>
      </div>
    </div>
  );
};

const formatTime = (time) => {
  if (!time || isNaN(time)) return '0:00';
  
  const seconds = Math.floor(time % 60);
  const minutes = Math.floor(time / 60);
  
  return `${minutes}:${seconds.toString().padStart(2, '0')}`;
};

export function Player() {
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
      if (playPromise !== undefined) {
        playPromise.catch(error => {
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
      if (playPromise !== undefined) {
        playPromise
          .then(() => setIsPlaying(true))
          .catch(error => {
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

    audio.addEventListener('timeupdate', updateProgress);
    audio.addEventListener('loadedmetadata', updateProgress);
    audio.addEventListener('ended', handleEnded);

    return () => {
      audio.removeEventListener('timeupdate', updateProgress);
      audio.removeEventListener('loadedmetadata', updateProgress);
      audio.removeEventListener('ended', handleEnded);
    };
  }, []);

  const handleClick = () => {
    setIsPlaying(!isPlaying);
  };

  const currentSong = currentMusic.songs?.[0];

  return (
    <div className="flex flex-row justify-between w-full px-4 z-50">
      <div className="w-[200px]">
        <CurrentSong {...currentSong} />
      </div>
      
      <div className="flex flex-col items-center justify-center gap-4 flex-1">
        <div className="flex justify-center">
          <button 
            className="bg-white rounded-full p-2 hover:scale-105 transition duration-200"
            onClick={handleClick}
          >
            {isPlaying ? <Pause /> : <Play />}
          </button>
        </div>
        
        <div className="flex gap-2 items-center w-full max-w-[600px]">
          <span className="text-xs text-white opacity-70 w-12 text-right">
            {formatTime(currentTime)}
          </span>

          <Slider 
            defaultValue={[0]}
            value={[currentTime]}
            max={duration || 100}
            min={0}
            className="w-[400px]"
            onValueCommit={(value) => {
              const [newTime] = value;
              const audio = audioRef.current;
              if (audio && !isNaN(newTime)) {
                audio.currentTime = newTime;
                setCurrentTime(newTime);
              }
            }}
          />

          <span className="text-xs text-white opacity-70 w-12">
            {formatTime(duration)}
          </span>
        </div>
      </div>

      <div className="grid place-content-center w-[200px]">
        <Slider 
          defaultValue={[volume * 100]}
          value={[volume * 100]}
          max={100}
          min={0}
          step={1}
          className="w-[95px] h-[5px]"
          onValueChange={(value) => {
            const [newVolume] = value;
            const volumeValue = newVolume / 100;
            setVolume(volumeValue);
            if (audioRef.current) {
              audioRef.current.volume = volumeValue;
            }
          }}
        />
      </div>

      <audio ref={audioRef} />
    </div>
  );
}
