import { useContext, createContext, useState } from 'react';

const ModalContext = createContext();

const ModalProvider = ({ children }) => {
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState('');
  return (
    <ModalContext.Provider
      value={{ showModal, setShowModal, modalContent, setModalContent }}
    >
      {children}
    </ModalContext.Provider>
  );
};

const UseModal = () => useContext(ModalContext);
export { UseModal, ModalProvider };
