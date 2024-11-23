import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const HomePage = ({ setPlayer }) => {
  const [name, setName] = useState("");
  const navigate = useNavigate();
  function startTheGame() {
    if (!name.trim()) {
      alert("please fill your name");
    } else {
      const deck = Array.from({ length: 52 }, (_, i) => (i % 13) + 1);
      const shuffledDeck = deck.sort(() => Math.random() - 0.5);
      const playerCards = shuffledDeck.slice(0, 26);
      const computerCards = shuffledDeck.slice(26);
      const player = {
        name,
        wins: 0,
        losses: 0,
        gamesPlayed: 0,
        cards: playerCards,
      };
      console.log(player);
      setPlayer({ ...player, computerCards });
      navigate("/game");
    }
  }

  return (
    <div className="container">
      <h1>ready for WAR</h1>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <button onClick={startTheGame}>Start</button>
    </div>
  );
};

export default HomePage;
