import React, { useState } from 'react';
import Modal from 'react-modal';
import RegisterForm from './RegisterForm';

const RegisterModal = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div>
      <button onClick={openModal}>Register</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Register Modal"
      >
        <button onClick={closeModal}>Close Modal</button>
        <RegisterForm />
      </Modal>
    </div>
  );
};

export default RegisterModal;
