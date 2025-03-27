import axios from "axios";
import { mapPlayerData } from "./helpers/playerHelpers";

const baseURL = "http://localhost:5001/api";

export const getPlayers = async (callback) => {
  try {
    const players = await axios.get(`${baseURL}/players`);
    callback(players.data);
    console.log(players.data)
  } catch (error) {
    console.error(error);
  }
};

export const createPlayer = async (data, callback) => {
    const playerData = mapPlayerData(data.name, data.classType)
    
  try {
    const newPlayer = await axios.post(`${baseURL}/players`, playerData, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    callback(newPlayer)
  } catch (error) {
    console.error(error);
  }
};
