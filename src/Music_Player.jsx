import { useState, useRef } from 'react';
import './MusicPlayer.css';

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="Music-Con" style={{ textAlign: 'center', fontFamily:  'Arial, sans-serif', marginTop: '50px' }}>
      <h3 style={{fontSize:'14px'}}>🎹 Click to play or pause the music 🎵</h3>
      <div
        style={{
          display: 'inline-block',
          cursor: 'pointer',
          position: 'relative',
          width: '220px',
          height: '220px',
          transition: 'transform .2s',
          marginTop:'10px'
        }}
        onClick={togglePlayPause}
      >
        <img
          src="vinyl.png"
          alt="Vinyl Record"
          className={isPlaying ? 'vinyl rotating' : 'vinyl'}
          style={{
            width: '80%',
            height: '80%',
            borderRadius: '50%',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            position: 'absolute',
            top: 0,
            left: 70
          }}
        />
        <img
          src="/anda6.jfif"
          alt="Album Cover"
          style={{
            width: '85%',
            height: '85%',
            position: 'absolute',
            right: '60px',
            zIndex: 2,
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          }}
        />
        <br />  
      </div>
      <audio ref={audioRef} src="/love_song.mp3" />
    </div>
  );
};

export default MusicPlayer;
