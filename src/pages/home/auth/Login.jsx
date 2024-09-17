// Login.jsx
import { useState } from "react";
import { Form } from "react-bootstrap";
import { Modal } from "react-bootstrap";
import UserLogin from "./UserLogin"; // Importar el componente de usuario
import HermesLogo from "../../../components/HermesLogo";

// eslint-disable-next-line react/prop-types
export default function Login({isOpen, clickModal, validated, handleLogin, handleChange}) {
  const [modalIsOpen, setModalIsOpen] = useState(isOpen);

  const toggleModal = () => {
    setModalIsOpen(!modalIsOpen);
    clickModal(!modalIsOpen);
  };

  return (
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
        onSubmit={handleLogin}
        className="row p-4"
      >
        <label className="col-12">
          Correo electrónico:
          <input
            type="email"
            name="email"
            className="form-control"
            onChange={handleChange}
          />
        </label>
        <label className="col-12">
          Contraseña:
          <input
            type="password"
            name="password"
            className="form-control"
            onChange={handleChange}
            required
          />
        </label>
        <div className="buttons justify-content-center">
          <button className="btn btn-primary">Ingresar</button>
        </div>
      </Form>
      <UserLogin />
    </Modal>
  );
}
