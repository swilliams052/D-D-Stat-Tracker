import axios from "axios";
import { mapPlayerData } from "./helpers/playerHelpers";

const baseURL = "http://localhost:5001/api";

export const getPlayers = async () => {
  try {
    const players = await axios.get(`${baseURL}/players`);
    return players
  } catch (error) {
    console.error(error);
  }

};

export const createPlayer = async (data) => {
    const playerData = mapPlayerData(data.name, data.classType)
    
  try {
    const newPlayer = await axios.post(`${baseURL}/players`, playerData, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return newPlayer
  } catch (error) {
    console.error(error);
  }
};

export const deletePlayer = async (playerId) => {
  try {
    await axios.delete(`${baseURL}/players/${playerId}`);
    return playerId;
  } catch (error) {
    console.error(error);
  }
};
