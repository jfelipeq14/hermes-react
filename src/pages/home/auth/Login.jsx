import { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Users } from "../../../models/users/users.model";
import UserLogin from './UserLogin';

export default function Login({ isOpen, clickModal, handleLogin }) {
  const user = new Users();
  const [modalIsOpen, setModalIsOpen] = useState(isOpen);
  const [formData, setFormData] = useState(user);
  const navigate = useNavigate();

  const toggleModal = () => {
    setModalIsOpen(!modalIsOpen);
    clickModal(!modalIsOpen);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin();
    setModalIsOpen(false);
    navigate("/Menu");
  };

  return (
    <>
      <Modal show={modalIsOpen} onHide={toggleModal}>
        <Modal.Header>
          <Modal.Title>Iniciar Sesión</Modal.Title>
          <Button variant="close" onClick={toggleModal} aria-label="Cerrar">
            <span aria-hidden="true">&times;</span>
          </Button>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Correo electrónico</label>
              <input
                type="email"
                className="form-control"
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                value={formData.email}
                 pattern="^[a-z0-9.!#$%&*+/=?^_`{|}~-]+@[a-z0-9-]+\.[a-z0-9.]{2,}$"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Contraseña</label>
              <input
                type="password"
                className="form-control"
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                value={formData.password}
                pattern="^[a-z0-9.!#$%&*+/=?^_`{|}~-]{8,}$"
            minLength={8}
                required
              />
            </div>
            <Button type="submit">Ingresar</Button>
          </form>
          <UserLogin />
        </Modal.Body>
      </Modal>
    </>
  );
}
