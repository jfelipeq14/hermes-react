import { useState } from "react";
import { Modal } from "react-bootstrap";

// eslint-disable-next-line react/prop-types
export default function Modals({ isOpen, clickModal, size = "sm", children  }) {
  const [modalIsOpen, setModalIsOpen] = useState(isOpen);
  
  const toggleModal = () => {
    setModalIsOpen(!modalIsOpen);
    clickModal(!modalIsOpen);
  };
  return (
    <Modal
      show={modalIsOpen}
      onHide={toggleModal}
      size={size}
    >
      <button
        type="button"
        className="btn-close position-absolute top-0 end-0 m-2"
        onClick={toggleModal}
        aria-label="Close"
      ></button>
      {children}
    </Modal>
  );
}
