import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";
import firebase from "./lib/firebase";
import Scoreboard from "./Components/Scoreboard";

function App() {
  return (
    <div className="App">
      <Scoreboard />
    </div>
  );
}

export default App;
