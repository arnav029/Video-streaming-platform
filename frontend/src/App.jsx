import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import VideoPlayer from './player'
import {useRef} from 'react'
function App() {
  const playerRef = useRef(null)
  const videoLink = "http://localhost:3000/uploads/courses/0a6e35e2-8b06-4680-8c23-829a8fc1f0c6/index.m3u8"

  const videoPlayerOptions = {
    controls: true, 
    responsive: true,
    fluid: true,
    sources: [
      {
        src: videoLink,
        type: "application/x-mpegURL"
      }
    ]
  }

  const handlePlayerReady = (player) => {
    playerRef.current = player;

    player.on('waiting', () => {
      videojs.log('player is waiting');
    });

    player.on('dispose', () => {
      videojs.log('player will dispose');
    });
  };

  return (
    <>
    <div>
      <h1>Video Player</h1>
    </div>

    <VideoPlayer
      options = {videoPlayerOptions}
      onReady = {handlePlayerReady}
    />

    </>
  )
}

export default App
