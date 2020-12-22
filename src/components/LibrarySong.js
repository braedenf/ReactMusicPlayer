import React from "react";
import { playAudio } from "../util";

const LibrarySong = ({
  song,
  songs,
  setCurrentSong,
  id,
  audioRef,
  isPlaying,
  setSongs,
}) => {
  //HANDLERS
  const songSelectHandler = () => {
    const selectedSong = songs.filter((stateSongs) => stateSongs.id === id);
    setCurrentSong(selectedSong[0]);
    /*
      Check if the current song id matches an id in the library song list
      by mapping over the song list data object.
      If it does match then return the song list object with the active
      property set to true. However if it does not match then return the
      object with active set to false. 
    */

    const newSongs = songs.map((song) => {
      if (song.id === id) {
        return {
          ...song,
          active: true,
        };
      } else {
        return {
          ...song,
          active: false,
        };
      }
    });

    // Now update the state by setting the songs
    setSongs(newSongs);

    /*
      First check if the song is playing.
      Then make sure the result of the player is not
      undefined. Only then run the play function once the track
      is loaded using a promise.
    */

    playAudio(isPlaying, audioRef);
  };

  return (
    <div
      onClick={songSelectHandler}
      className={`library-song ${song.active ? "selected" : ""}`}
    >
      <img alt={song.name} src={song.cover}></img>
      <div className="song-description">
        <h3>{song.name}</h3>
        <h4>{song.artist}</h4>
      </div>
    </div>
  );
};

export default LibrarySong;
