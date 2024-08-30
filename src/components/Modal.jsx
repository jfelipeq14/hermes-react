// eslint-disable-next-line react/prop-types
export default function Modal({ isOpen, toggleModal, title }) {
  return (
    <Modal show={isOpen} onHide={toggleModal}>
      <header>{title}</header>

      <footer>
        <small>Hermes</small>
      </footer>
    </Modal>
  );
}
