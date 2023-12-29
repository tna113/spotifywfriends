import React from "react";
import "./App.css";
import Page from "./components/Page";
import SongCard from "./components/SongCard";
import SearchBar from "./components/SearchBar";

const appStyles = {
  backgroundColor:'#121212',
  minHeight: '100vh',
  minWidth: '100vw',
}

//TODO: load spotify song

export default function App() {
  return (
    <Page sx={{...appStyles}} direction="column">
      <SearchBar />
      <SongCard title="song title" artist="artist" />
    </Page>
  );
}
