const Player = require("../models/players");

const getPlayers = async (req, res) => {
  try {
    const players = await Player.find();

    res.json(players);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const createPlayer = async (req, res) => {
  try {
    const { name, stats, bag } = req.body;
    const newPlayer = new Player({ name, class: req.body.class, stats, bag });

    await newPlayer.save();
    res.json(newPlayer);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { createPlayer, getPlayers };
