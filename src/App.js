<<<<<<< HEAD
import React, { useState, useRef } from "react";
//Import Styles
import "./styles/app.scss";
// Import Components
import Player from "./components/Player";
import Song from "./components/Song";
import Library from "./components/Library";

//import data
import data from "./data";

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
    setSongInfo({ ...songInfo, currentTime: current, duration });
  };

  //STATE
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
  });

  return (
    <div>
      <Song currentSong={currentSong} />
      <Player
        audioRef={audioRef}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        setIsPlaying={setIsPlaying}
        currentSong={(songs, currentSong)}
        setSongInfo={setSongInfo}
        songInfo={songInfo}
      />
      <Library
        audioRef={audioRef}
        songs={songs}
        setCurrentSong={setCurrentSong}
        isPlaying={isPlaying}
        setSongs={setSongs}
      />
      <audio
        onTimeUpdate={timeUpdateHandler}
        onLoadedMetadata={timeUpdateHandler}
        ref={audioRef}
        src={currentSong.audio}
      ></audio>
=======
import React, {useState} from "react";

//Import Components
import CreateTweet from './Components/CreateTweet'
import TweetList from "./Components/TweetList";

function App() {

  //State
  const [textInput, setTextInput] = useState("");
  const [tweets, setTweets] = useState([]);

  const [name, setName] = useState("Braeden");
  const message = "This is a message";

  return (
    <div>
        <CreateTweet
          textInput={textInput}
          setTextInput={setTextInput}
          tweets={tweets}
          setTweets={setTweets}
        />
        <TweetList name={name} tweets={tweets}/>
>>>>>>> 1e74476bab0497487127ae63bb8fd0c27f74bb4c
    </div>
  );
}

export default App;
