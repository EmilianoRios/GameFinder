import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import * as API from "../../src/services/freeGames";

export function Game() {
  const [games, setGame] = useState([]);

  const { gameId } = useParams();

  useEffect(() => {
    API.getFreeGameById(gameId).then(setGame).catch(console.log);
  }, [gameId]);

  return <div>Juego: {gameId} </div>;
}
