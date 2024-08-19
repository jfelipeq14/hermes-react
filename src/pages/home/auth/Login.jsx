import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import SimpleAlert from "../../../components/Alerts";
import { User } from "../../../models/user.model";
import { messages } from "../../../utilies/messages";

export default function Login({ isOpen, form, clickModal }) {
  const user = new User();
  const [modalIsOpen, setModalIsOpen] = useState(isOpen);
  const [showAlert, setShowAlert] = useState(false);
  const [message, setMessage] = useState(messages);
  const [formData, setFormData] = useState(user);

  const toggleModal = () => {
    setModalIsOpen(!isOpen);
    clickModal(!isOpen);
  };

  const clickAlert = () => {
    setShowAlert(!showAlert);
  };

  const validateForm = () => {
    // validar que los campos no estén vacíos
    if (formData.email === "" || formData.password === "") {
      setMessage(messages.error.emptyFields);
      setShowAlert(true);
      return;
    }
    if (!formData.email.includes("@") && !formData.email.includes(".")) {
      setMessage("El formato del email es incorrecto");
      setShowAlert(true);
      return;
    }
    if (formData.password.length < 6) {
      setMessage("La contraseña debe tener al menos 6 caracteres");
      setShowAlert(true);
      return;
    }
    setMessage("Formulario enviado correctamente");
    setShowAlert(true);
    setTimeout(() => {
      clickModal(!isOpen);
    }, 3000);
  };

  return (
    <Modal show={modalIsOpen} onHide={toggleModal}>
      <Modal.Body>
        <form onSubmit={validateForm()}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
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
              Password
            </label>
            <input
              type="password"
              className="form-control"
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
              value={formData.password}
            />
          </div>
          <Button>Submit</Button>
        </form>
      </Modal.Body>
      {showAlert ? (
        <SimpleAlert
          show={showAlert}
          variant="success"
          title="Titulo"
          message={message}
          clickAlert={clickAlert}
        />
      ) : (
        ""
      )}
    </Modal>
  );
}
