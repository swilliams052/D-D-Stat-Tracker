import React, { createContext, useContext, useState } from "react";
import { NewPlayerModal } from "../components/newPlayerModal";
import { ConfirmationModal } from "../components/confirmationModal";

const ModalContext = createContext();

export const ModalProvider = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalType, setModalType] = useState("");

  const openNewPlayer = () => {
    setIsOpen(true);
    setModalType("NewPlayer");
  };

  const openConfirmation = () => {
    setIsOpen(true);
    setModalType("Confirmation");
  };

  const close = () => {
    setIsOpen(false);
    setModalType("");
  };

  return (
    <ModalContext.Provider
      value={{ isOpen, openNewPlayer, openConfirmation, close }}
    >
      {props.children}
      {modalType === "NewPlayer" ? <NewPlayerModal /> : null}
      {modalType === "Confirmation" ? <ConfirmationModal /> : null}
    </ModalContext.Provider>
  );
};

export const useModal = () => useContext(ModalContext);
