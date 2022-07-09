import React, { useContext, useRef } from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { SongContext } from "../../contexts/SongContext";
import ISong from "../../interfaces/Song.interface";

const Playing = ({ songActive, setSongActive }: any) => {
  console.log(songActive);
  const songs = useContext(SongContext);

  const handleClickNext = (): void => {
    const indexSongActive = songs.findIndex(
      (song: ISong) => song.id === songActive.id
    );
    if (indexSongActive === songs.length - 1) {
      setSongActive(songs[0]);
    } else {
      setSongActive(songs[indexSongActive + 1]);
    }
  };

  const handleClickPrevious = (): void => {
    const indexSongActive = songs.findIndex(
      (song: ISong) => song.id === songActive.id
    );
    if (indexSongActive === 0) {
      setSongActive(songs[songs.length - 1]);
    } else {
      setSongActive(songs[indexSongActive - 1]);
    }
  };

  const handleEndedSong = (): void => {
    const indexSongActive = songs.findIndex(
      (song: ISong) => song.id === songActive.id
    );
    if (indexSongActive === songs.length - 1) {
      setSongActive(songs[0]);
    } else {
      setSongActive(songs[indexSongActive + 1]);
    }
  };
  console.log();
  return (
    <AudioPlayer
      className="player-music fixed bottom-0"
      layout="stacked-reverse"
      src={songActive.url}
      onPlay={(e) => console.log("onPlay")}
      autoPlay={true}
      showSkipControls={true}
      showJumpControls={false}
      onClickNext={handleClickNext}
      onClickPrevious={handleClickPrevious}
      onEnded={handleEndedSong}
    />
  );
};

export default Playing;
