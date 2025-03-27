import { useState, useEffect } from "react";
import { getPlayers } from "./service";
import { PlayerCard } from "./components/playerCard";
import { useModal } from "./context/modalProvider";

import "./App.css";

function App() {
  const [players, setPlayers] = useState([]);
  const { openNewPlayer } = useModal();

  useEffect(() => {
    getPlayers(setPlayers);
  }, []);

  return (
    <>
      <div className="header">
        <header>
          <h1 className="title">Dungeons & Dragons</h1>
          <div className="player-list">
            {players.map((player) => (
              <div key={player.name}>
                <PlayerCard player={player} />
              </div>
            ))}
          </div>
        </header>
        <button onClick={openNewPlayer}>Add New Player</button>
      </div>
    </>
  );
}

export default App;
