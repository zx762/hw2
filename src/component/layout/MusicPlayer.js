'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import volumeImg from '@/../public/audio/volume.png';
import muteImg from '@/../public/audio/mute.png';

export default function MusicPlayer() {
  const audioRef = useRef(null);
  const [volume, setVolume] = useState(0.4);
  const [isMuted, setIsMuted] = useState(false);
  const [prevVolume, setPrevVolume] = useState(0.4);
  const [isFirstPlay, setIsFirstPlay] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = volume;
    audio.muted = isMuted;
  }, [volume, isMuted]);

  const toggleMute = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (!isFirstPlay) {
      audio.play().catch((err) => {
        console.log('音樂播放失敗：', err);
      });
      setIsFirstPlay(true);
    }

    if (isMuted) {
      audio.muted = false;
      setVolume(prevVolume);
      setIsMuted(false);
    } else {
      setPrevVolume(volume);
      audio.muted = true;
      setVolume(0);
      setIsMuted(true);
    }
  };

  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    const audio = audioRef.current;
    if (!audio) return;

    if (!isFirstPlay) {
      audio.play().catch((err) => {
        console.log('音樂播放失敗：', err);
      });
      setIsFirstPlay(true);
    }

    setVolume(newVolume);
    audio.volume = newVolume;

    if (newVolume === 0) {
      audio.muted = true;
      setIsMuted(true);
    } else {
      audio.muted = false;
      setIsMuted(false);
      setPrevVolume(newVolume);
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        src="/audio/bg-music.mp3"
        loop
        preload="auto"
      />

      <div className="absolute top-4 left-4 flex items-center gap-2 group z-50">
        <Image
          src={isMuted ? muteImg : volumeImg}
          alt={isMuted ? 'Muted' : 'Volume'}
          className="w-12 h-12 opacity-50 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer"
          onClick={toggleMute}
        />

        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={handleVolumeChange}
          className={`
            hidden group-hover:block transition-all duration-300 
            w-24 h-1 appearance-none bg-[#097b85] rounded-full
            [&::-webkit-slider-thumb]:appearance-none
            [&::-webkit-slider-thumb]:w-4
            [&::-webkit-slider-thumb]:h-4
            [&::-webkit-slider-thumb]:bg-[#fc6f2f]
            [&::-webkit-slider-thumb]:rounded-full
            [&::-webkit-slider-thumb]:shadow-md
            [&::-moz-range-thumb]:bg-[#fc6f2f]
            [&::-moz-range-thumb]:border-none
          `}
        />
      </div>
    </>
  );
}