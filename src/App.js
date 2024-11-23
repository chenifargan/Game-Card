import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import Game from "./Pages/Game";
import { useState } from "react";
import EndGame from "./Pages/EndGame";

function App() {
  const [player, setPlayer] = useState(null);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage setPlayer={setPlayer} />} />
        <Route
          path="/game"
          element={<Game player={player} setPlayer={setPlayer} />}
        />
        <Route
          path="/end"
          element={<EndGame player={player} setPlayer={setPlayer} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
