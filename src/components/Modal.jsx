import { useState } from "react";

// eslint-disable-next-line react/prop-types
export default function Modal({ isOpen, clickModal, component }) {
  const [modalIsOpen, setModalIsOpen] = useState(isOpen);
  const toggleModal = () => {
    setModalIsOpen(!modalIsOpen);
    clickModal(!modalIsOpen);
  };
  return (
    <Modal show={modalIsOpen} onHide={toggleModal}>
      {component}
    </Modal>
  );
}
