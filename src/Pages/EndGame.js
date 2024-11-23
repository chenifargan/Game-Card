import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const EndGame = ({ palyer, setPlayer }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { score } = location.state;
  console.log(score);
  const result = score.player > score.computer ? "Win" : "Lose";
  const result2 = score.player + "/" + score.computer;
  function finishTheGame() {
    setPlayer(null);
    navigate("/");
  }
  return (
    <div className="container">
      <h1 className="result-title">{result}</h1>
      <h3>{result2}</h3>
      <button className="restart-btn" onClick={finishTheGame}>
        Play Again
      </button>
    </div>
  );
};

export default EndGame;
