const mongoose = require("mongoose");

const PlayerStatsSchema = new mongoose.Schema({
  health: { type: Number, default: 100 },
  stamina: { type: Number, default: 75 },
  mana: { type: Number, default: 50 },
});

const WeaponSchema = new mongoose.Schema({
  name: { type: String, required: true },
  damage: { type: Number, required: true },
  durability: { type: Number, default: 100 },
});

const PotionSchema = new mongoose.Schema({
  name: { type: String, required: true },
  effect: { type: String, required: true },
});

const PlayerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  class: { type: String, required: true },
  stats: PlayerStatsSchema,
  bag: {
    gold: { type: Number, default: 0 },
    weapons: [WeaponSchema],
    potions: [PotionSchema],
  },
});

const PlayerModel = mongoose.model("Player", PlayerSchema);

module.exports = PlayerModel;
