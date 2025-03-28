import { useEffect } from "react";
import { getPlayers } from "./service";
import { PlayerCard } from "./components/playerCard";
import { useModal } from "./context/modalProvider";
import { useSelector, useDispatch } from "react-redux";
import { loadAllCharacters } from "../redux/characterSlice";

import "./App.css";

function App() {
  const { openNewPlayer } = useModal();
  const dispatch = useDispatch()
  const players = useSelector((state) => state.characters.data)

  useEffect(() => {
    const fetchPlayers = async () => {
      const players = await getPlayers()
      dispatch(loadAllCharacters(players.data))
    }
    fetchPlayers()
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
