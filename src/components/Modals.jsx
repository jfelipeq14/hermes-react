import { useState } from "react";
import { Modal } from "react-bootstrap";

// eslint-disable-next-line react/prop-types
export default function Modals({ isOpen, clickModal, children }) {
  const [modalIsOpen, setModalIsOpen] = useState(isOpen);
  const toggleModal = () => {
    setModalIsOpen(!modalIsOpen);
    clickModal(!modalIsOpen);
  };

  return (
    <Modal show={modalIsOpen} onHide={toggleModal}>
      {children}
    </Modal>
  );
}
