'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import volumeImg from '@/../public/audio/volume.png';
import muteImg from '@/../public/audio/mute.png'; // 加入靜音圖片

export default function MusicPlayer() {
  const audioRef = useRef(null); // 不用加型別
  const [volume, setVolume] = useState(0.4);
  const [isMuted, setIsMuted] = useState(false);
  const [prevVolume, setPrevVolume] = useState(0.4); // 用來記住靜音前的音量

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = volume;

    const playAudio = () => {
      audio.play().catch(err => {
        console.log("播放被阻止，可能需要使用者互動", err);
      });
    };

    playAudio();
    window.addEventListener('click', playAudio);

    return () => {
      audio.pause();
      window.removeEventListener('click', playAudio);
    };
  }, []);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  const toggleMute = () => {
    if (isMuted) {
      setVolume(prevVolume);
      setIsMuted(false);
    } else {
      setPrevVolume(volume);
      setVolume(0);
      setIsMuted(true);
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
          alt={isMuted ? "Muted" : "Volume"}
          className="w-12 h-12 opacity-50 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer"
          onClick={toggleMute}
        />

        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={e => {
            const val = parseFloat(e.target.value);
            setVolume(val);
            if (val === 0) {
              setIsMuted(true);
            } else {
              setIsMuted(false);
              setPrevVolume(val);
            }
          }}
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