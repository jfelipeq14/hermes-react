// Login.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form } from "react-bootstrap";
import { Modal } from "react-bootstrap";
import { Users } from "../../../models/users/users.model";
import UserLogin from "./UserLogin"; // Importar el componente de usuario
import HermesLogo from "../../../components/HermesLogo";

// eslint-disable-next-line react/prop-types
export default function Login({ isOpen, clickModal }) {
  const user = new Users();
  const [modalIsOpen, setModalIsOpen] = useState(isOpen);
  const [formData, setFormData] = useState(user);
  const navigate = useNavigate();

  const [validated, setValidated] = useState(false);

  const toggleModal = () => {
    setModalIsOpen(!modalIsOpen);
    clickModal(!modalIsOpen);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!e.currentTarget.checkValidity()) {
      e.stopPropagation();
    } else {
      navigate("/menu");
    }

    setValidated(true);
  };

  return (
    <>
      <Modal show={modalIsOpen} onHide={toggleModal} size="sm">
        <button
          type="button"
          className="btn-close position-absolute top-0 end-0 m-2"
          onClick={clickModal}
          aria-label="Close"
        ></button>
        <h1 className="text-center fs-3 my-5">Ingresar</h1>
        <div className="container text-center">
          <HermesLogo />
        </div>
        <Form
          noValidate
          validated={validated}
          onSubmit={handleSubmit}
          className="row p-4"
        >
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Correo electrónico
            </label>
            <input
              type="email"
              className="form-control"
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              value={formData.email}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Contraseña
            </label>
            <input
              type="password"
              className="form-control"
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
              value={formData.password}
              required
            />
          </div>
          <div className="buttons justify-content-center">
            <button className="btn btn-primary">Ingresar</button>
          </div>
        </Form>
        <UserLogin />
      </Modal>
    </>
  );
}
