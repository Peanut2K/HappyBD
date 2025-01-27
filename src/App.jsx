import './App.css'
import { useEffect } from 'react';
import MusicPlayer from './Music_Player'
import Pass from "./Unlock-pass";
import Gallery from './Gallery.jsx'
import StartText  from './StartText'


function App() {
  useEffect(()=>{
    window.scrollTo(0, 0);
  },[])

  return (
    <>
      <MusicPlayer />
      <div className='divider'></div>
      <StartText />
      <Gallery />
      <div className='divider'></div>
      <Pass />
    </>
  )
}

export default App
