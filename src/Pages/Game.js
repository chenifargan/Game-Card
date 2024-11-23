import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Game = ({ player, setPlayer }) => {
  const [round, setRound] = useState(0);
  const [playerCard, setPlayerCard] = useState(null);
  const [computerCard, setComputerCard] = useState(null);
  const [score, setScore] = useState({ player: 0, computer: 0 });
  const navigate = useNavigate();
  console.log("game");
  console.log(player);

  function playRound() {
    if (round >= 25) {
      navigate("/end", { state: { score } });
    } else {
      const nextPlayerCard = player.cards[round];
      const nextComputerCard = player.computerCards[round];
      setPlayerCard(nextPlayerCard);
      setComputerCard(nextComputerCard);
      if (nextPlayerCard > nextComputerCard) {
        setScore((prev) => ({ ...prev, player: prev.player + 1 }));
      }
      if (nextComputerCard > nextPlayerCard) {
        setScore((prev) => ({ ...prev, computer: prev.computer + 1 }));
      }
      setRound(round + 1);
    }
  }
  return (
    <div className="game-container">
      <h1 className="computer-title">Computer</h1>
      <div className="card">{computerCard || "?"}</div>
      <div className="card">{playerCard || "?"}</div>
      <h1 className="player-title">You</h1>
      <button className="next-btn" onClick={playRound}>
        Next
      </button>
    </div>
  );
};

export default Game;
