import React, { useRef } from 'react';

import Lovestory from '../assets/music/love story.mp3'


export const MusicPlayer = () => {
      const audioRef = useRef(null);
    //   audioRef.current.play();
      const playAudio = () => {
        audioRef.current.play();
      };
    
      const pauseAudio = () => {
        audioRef.current.pause();
      };
    
      return (
        <div>
          <audio ref={audioRef}>
            <source src={Lovestory} type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
          <div className=' flex justify-end'>
          &nbsp;
          &nbsp;
          &nbsp;
          <button onClick={playAudio}>Play</button>
          &nbsp;
          &nbsp;
          &nbsp;
          &nbsp;
          &nbsp;
          &nbsp;
          &nbsp;
          &nbsp;
          <button onClick={pauseAudio}>Pause</button>
          </div>
         
        </div>
      );
    };