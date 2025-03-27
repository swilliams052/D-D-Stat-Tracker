const express = require("express");

const { getPlayers, createPlayer } = require("../controllers/players");

const router = express.Router();

router.get("/", getPlayers);
router.post("/", createPlayer);

module.exports = router;
