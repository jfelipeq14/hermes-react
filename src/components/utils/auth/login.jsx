import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export default function Login({ isOpen, form, clickModal }) {
  const [modalIsOpen, setModalIsOpen] = useState(isOpen);

  const toggleModal = () => {
    setModalIsOpen(!isOpen);
    clickModal(!isOpen);
  };

  const validateForm = () => {
    // validar que los campos no estén vacíos
    form.email === "" || form.password === ""
      ? alert("Los campos no pueden estar vacíos")
      : console.log("Formulario válido");
    // validar que el email tenga un formato correcto
    form.email.includes("@") && form.email.includes(".")
      ? console.log("Email válido")
      : alert("Email inválido");
    // validar que el password tenga al menos 6 caracteres
    form.password.length >= 6
      ? console.log("Password válido")
      : alert("Password debe tener al menos 6 caracteres");
  };

  return (
    <Modal show={modalIsOpen} onHide={toggleModal}>
      <Modal.Body>
        {/* agregar formulario de login con los campos email y password */}
        <form>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input type="email" className="form-control" value={form.email} />
            <div id="emailHelp" className="form-text">
              We`ll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              value={form.password}
            />
          </div>
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label" htmlFor="exampleCheck1">
              Check me out
            </label>
          </div>
          <Button variant="primary" onClick={validateForm}>
            Submit
          </Button>
        </form>
      </Modal.Body>
    </Modal>
  );
}
