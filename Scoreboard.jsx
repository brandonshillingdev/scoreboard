import React, { useState, useEffect } from "react";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  doc,
  deleteDoc,
  onSnapshot,
} from "firebase/firestore";
import { db } from "../lib/firebase";
import { playerCollectionRef } from "../lib/firestore.collections";
import Player from "./Player";

function Scoreboard() {
  // State to hold the list of players and the input for adding new players
  const [players, setPlayers] = useState([]);
  const [name, setName] = useState("");

  useEffect(() => {
    // Set up a real-time listener to automatically update the players when the database changes
    const unsubscribe = onSnapshot(playerCollectionRef, (snapshot) => {
      setPlayers(
        snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
      );
    });

    // Clean up the listener when the component unmounts to prevent memory leaks
    return () => {
      unsubscribe();
    };
  }, []);

  // Function to fetch players from the database (might be used for future features)
  function getPlayers() {
    const playerCollectionRef = collection(db, "scoreboard");
    getDocs(playerCollectionRef)
      .then((response) => {
        const list = response.docs.map((doc) => ({
          data: doc.data(),
          id: doc.id,
        }));
        setPlayers(list);
      })
      .catch((error) => console.log(error.message));
  }

  // Function to clear all player scores by setting them to 0
  function clearScore() {
    players.map((player) => updateScore(player.id, 0));
  }

  // Function to delete a player from the database
  function deletePlayer(id) {
    const docRef = doc(db, "scoreboard", id);
    deleteDoc(docRef)
      .then(() => console.log("Document deleted"))
      .catch((error) => console.log(error.message));
  }

  // Function to update a player's score in the database
  function updateScore(id, newScore) {
    const docRef = doc(db, "scoreboard", id);
    updateDoc(docRef, { score: newScore }).catch((error) =>
      console.log(error.message)
    );
  }

  // Function to handle the form submission when adding a new player
  function handleSubmit(e) {
    console.log("clicked");
    e.preventDefault();
    if (name === "") {
      return;
    }
    const playerCollRef = collection(db, "scoreboard");
    addDoc(playerCollRef, {
      name: name,
      score: 0,
    })
      .then((response) => console.log(response))
      .catch((error) => console.log(error.message));
    setName("");
  }

  return (
    <div
      id="Scoreboard"
      className="bg-slate-800 text-white w-max p-1 text-center rounded-lg text-sm "
    >
      <div id="header" className="mt-1 text-lg">
        <h1>SCOREBOARD</h1>
      </div>
      <form
        id="players"
        className="border-b-2 border-slate-700 mb-2 p-2 "
        onSubmit={handleSubmit}
      >
        {/* Render the list of players */}
        {players.map((player) => (
          <Player
            key={player.id}
            player={player}
            deletePlayer={deletePlayer}
            updateScore={updateScore}
          />
        ))}
        {/* Add player panel */}
        <div id="AddPlayer" className="grid grid-cols-10 mt-1 p-1 gap-2">
          <input
            type="text"
            placeholder="Player Name"
            className="bg-slate-900 p-1 pl-3 col-span-7 text-sm"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button
            type="submit"
            className="cursor-pointer bg-emerald-600 col-span-3 rounded-sm text-sm "
          >
            Add Player
          </button>
        </div>
      </form>
      {/* Clear score button */}
      <button
        id="clearScore"
        className="cursor-pointer bg-sky-600 rounded-sm text-sm col-span-3 p-1 mb-1"
        onClick={clearScore}
      >
        Clear Score
      </button>
    </div>
  );
}

export default Scoreboard;
