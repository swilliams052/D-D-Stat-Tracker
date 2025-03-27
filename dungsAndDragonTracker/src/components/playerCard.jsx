import WarriorImg from ".././assets/Warrior-IMG.jpeg";
import MageImg from ".././assets/Mage-IMG.jpeg";
import AssassinImg from ".././assets/Assassin-IMG.jpeg";

export const PlayerCard = ({ player }) => {
  const playerImages = {
    Warrior: WarriorImg,
    Mage: MageImg,
    Assassin: AssassinImg,
  };

  return (
    <div className="player-card" key={player.id}>
      <img
        src={playerImages[player.class] || playerImages["Warrior"]}
        alt={player.class}
        className="player-image"
      />
      <h2>{player.name}</h2>
      <h3>{player.class}</h3>

      <div className="stats">
        <p>❤️ Health: {player.stats?.health ?? 100}</p>
        <p>⚡ Stamina: {player.stats?.stamina ?? 50}</p>
        <p>🔮 Mana: {player.stats?.mana ?? 50}</p>
      </div>

      <div className="bag">
        <h3>Bag</h3>
        <p>💰 Gold: {player.bag.gold}</p>

        <h4>Weapons</h4>
        {player.bag.weapons.length > 0 ? (
          <ul>
            {player.bag.weapons.map((weapon, index) => (
              <li key={index}>
                {weapon.name} - ⚔️ {weapon.damage} DMG | 🛡️ {weapon.durability}{" "}
                DUR
              </li>
            ))}
          </ul>
        ) : (
          <p>No weapons</p>
        )}

        {/* Potions */}
        <h4>Potions</h4>
        {player.bag.potions.length > 0 ? (
          <ul>
            {player.bag.potions.map((potion, index) => (
              <li key={index}>
                {potion.name} - ✨ {potion.effect}
              </li>
            ))}
          </ul>
        ) : (
          <p>No potions</p>
        )}
      </div>
    </div>
  );
};
