import React, { useState } from 'react';
import Modal from 'react-modal';

const ModalComponent = () => {
  const [modalAberto, setModalAberto] = useState(false);

  const fecharModal = () => {
    setModalAberto(false);
  };

  return (
    <div>
      <button onClick={() => setModalAberto(true)}>Abrir Modal</button>

      <Modal
        isOpen={modalAberto}
        onRequestClose={fecharModal}
        overlayClassName="overlay"
      >
        <div className='bg-black'>
          Olá, mundo!
        </div>
      </Modal>
    </div>
  );
};

export default ModalComponent;
