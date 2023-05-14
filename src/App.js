// import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import DetailSong from "./components/DetailSongs";
import ListSongs from "./components/ListSongs";
import { Songs } from "./Context";
import DataSongs from "./datasong/songs.json";
import Playing from "./components/PlayingAudio";
import { useState } from "react";
function App() {
  const [song, setSong] = useState(DataSongs[0]);

  const handleSetSong = (idSong) => {
    const song = DataSongs.find((song) => song.id === idSong);
    if (!song) setSong(DataSongs[0]);
    else setSong(song);
  };
  return (
    <div className="App">
      <Songs.Provider value={{ DataSongs, song, handleSetSong }}>
        <Header />
        <div className="grid grid-cols-3 bg-slate-700 h-screen-navbar-player overflow-hidden">
          {/* span 1 */}
          <div className="parent-container-music">
            <DetailSong />
            <Playing />
          </div>
          {/* span 2 */}
          <ListSongs />
        </div>
      </Songs.Provider>
    </div>
  );
}

export default App;
