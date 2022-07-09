import React, { useContext, useState } from "react";
import "./App.css";
import DetailSong from "./components/DetailSong/DetailSong";
import Header from "./components/Header/Header";
import ListSong from "./components/ListSong/ListSong";
import Playing from "./components/Playing/Playing";
import { SongContext } from "./contexts/SongContext";
import ISong from "./interfaces/Song.interface";

function App() {
  const songs = useContext(SongContext);
  const [songActive, setSongActive] = useState<ISong>(songs[0]);
  return (
    <div className="App">
      <Header />
      <div className="grid grid-cols-3">
        <div>
          <DetailSong songActive={songActive} />
        </div>
        <div className="col-span-2">
          <ListSong songActive={songActive} setSongActive={setSongActive} />
        </div>
      </div>
      <div>
        <Playing songActive={songActive} setSongActive={setSongActive} />
      </div>
    </div>
  );
}

export default App;
