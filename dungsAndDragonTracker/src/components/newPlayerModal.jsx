import React, { useState } from "react";
import { createPlayer } from "../service";
import { useModal } from "../context/modalProvider";

import Modal from "./modal";


export const NewPlayerModal = () => {
  const { openConfirmation } = useModal()
  const [name, setName] = useState("");
  const [playerClass, setPlayerClass] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handlePlayerClassChange = (e) => {
    setPlayerClass(e.target.value);
  };

  const handleSubmission = () => {
    console.log(name, playerClass);
    if (name === "" || playerClass === "") return;
    createPlayer({ name, classType: playerClass }, openConfirmation);
  };

  return (
    <Modal>
      <input placeholder="Name" value={name} onChange={handleNameChange} />
      <select value={playerClass} onChange={handlePlayerClassChange}>
        <option value="" disabled hidden>
          Select Class
        </option>
        <option value="Warrior">Warrior</option>
        <option value="Mage">Mage</option>
        <option value="Assassin">Assassin</option>
      </select>

      <button onClick={handleSubmission} style={{ color: "red" }}>
        Click Here for New Player
      </button>
    </Modal>
  );
};
