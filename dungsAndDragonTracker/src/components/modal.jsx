import React from "react";
import { useModal } from "../context/modalProvider";

const Modal = ({ children }) => {
  const { isOpen, close } = useModal();
  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close" onClick={close}>
          ✖
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
