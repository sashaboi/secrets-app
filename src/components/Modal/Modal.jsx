import React from 'react';
import './modal.css';
import { AiFillCloseCircle } from 'react-icons/ai';

import { UseModal } from '../../context/Modal-context';
const Modal = () => {
  const { showModal, setShowModal, modalContent } = UseModal();
  if (!showModal) {
    return null;
  }
  return (
    <div className="modal-positioning">
      <div className="modal-container">
        <div className="modal-title">
          <h3>Anon says ...</h3>
        </div>
        <div className="modal-content">{modalContent}</div>
        <h3>Get your own on https://feedback-anon.netlify.app/</h3>
        <div onClick={() => setShowModal(false)} className="close-btn">
          <AiFillCloseCircle />
        </div>
      </div>
    </div>
  );
};

export default Modal;
