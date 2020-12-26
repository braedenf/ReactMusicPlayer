import React, { useState, useRef } from "react";
//Import Styles
import "./styles/app.scss";
// Import Components
import Player from "./Components/Player";
import Song from "./Components/Song";
import Library from "./Components/Library";
import Nav from "./Components/Nav";

//import data
import data from "./data";
import { library } from "@fortawesome/fontawesome-svg-core";

function App() {
  //Ref
  const audioRef = useRef(null);

  //STATE
  //Fetch songs
  const [songs, setSongs] = useState(data());
  //Get first song to start with
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);

  //AUDIO State and time update

  //Update time state object with time of current song
  const timeUpdateHandler = (e) => {
    const current = e.target.currentTime;
    const duration = e.target.duration;
    //Calculate percentage
    const roundedCurrent = Math.round(current);
    const roundedDuration = Math.round(duration);
    const animation = Math.round((roundedCurrent / roundedDuration) * 100);

    setSongInfo({
      ...songInfo,
      currentTime: current,
      duration,
      animationPercentage: animation,
    });
  };

  //handles the opening and closing of library panel
  const [libraryStatus, setLibraryStatus] = useState(false);
  //STATE
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
    animationPercentage: 0,
  });

  //When the song ends, skip foward to next song and play song

  const songEndHandler = async () => {
    let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
    await setCurrentSong(songs[(currentIndex + 1) % songs.length]);
    if (isPlaying) audioRef.current.play();
  };

  return (
    <div className={`App ${libraryStatus ? "Library-Active" : ""}`}>
      <Nav libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus} />
      <Song currentSong={currentSong} />
      <Player
        audioRef={audioRef}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        currentSong={currentSong}
        setSongInfo={setSongInfo}
        songInfo={songInfo}
        songs={songs}
        setCurrentSong={setCurrentSong}
        setSongs={setSongs}
      />
      <Library
        audioRef={audioRef}
        songs={songs}
        setCurrentSong={setCurrentSong}
        isPlaying={isPlaying}
        setSongs={setSongs}
        libraryStatus={libraryStatus}
      />
      <audio
        onTimeUpdate={timeUpdateHandler}
        onLoadedMetadata={timeUpdateHandler}
        ref={audioRef}
        src={currentSong.audio}
        onEnded={songEndHandler}
      ></audio>
    </div>
  );
}

export default App;
