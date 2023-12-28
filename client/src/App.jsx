import React from "react";
import "./App.css";
import Page from "./components/Page";
import SongCard from "./components/SongCard";

//TODO: load spotify song

export default function App() {
  return (
    <div>
      <Page>
        <p>content</p>
        <SongCard title="song title" artist="artist" />
      </Page>
    </div>
  );
}
