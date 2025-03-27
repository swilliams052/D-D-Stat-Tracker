const assassinData = {
  class: "Assassin",
  stats: {
    health: 100,
    magic: 30,
    stamina: 150,
  },
  bag: {
    gold: 75,
    weapons: [
      {
        name: "Daggers",
        damage: 15,
        durability: 90,
      },
    ],
    potions: [
      {
        name: "Stamina Potion",
        effect: "Restores 50 Stamina",
      },
    ],
  },
};

const mageData = {
  class: "Mage",
  stats: {
    health: 80,
    magic: 200,
    stamina: 60,
  },
  bag: {
    gold: 120,
    weapons: [
      {
        name: "Staff of Fire",
        damage: 35,
        durability: 80,
      },
    ],
    potions: [
      {
        name: "Mana Potion",
        effect: "Restores 100 MP",
      },
    ],
  },
};

const warriorData = {
  class: "Warrior",
  stats: {
    health: 150,
    magic: 20,
    stamina: 100,
  },
  bag: {
    gold: 50,
    weapons: [
      {
        name: "Great Sword",
        damage: 25,
        durability: 100,
      },
    ],
    potions: [
      {
        name: "Health Potion",
        effect: "Restores 50 HP",
      },
    ],
  },
};

const playerClass = {
    Warrior: warriorData,
    Assassin: assassinData,
    Mage: mageData
}

export const mapPlayerData = (name, classType) => {
    return {
        name,
        ...playerClass[classType]
    }
}