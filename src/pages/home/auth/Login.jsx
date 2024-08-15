import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import SimpleAlert from "../../../components/Alerts";

export default function Login({ isOpen, form, clickModal }) {
  const [modalIsOpen, setModalIsOpen] = useState(isOpen);
  const [showAlert, setShowAlert] = useState(false);
  const [message, setMessage] = useState("");
  const [formData, setFormData] = useState({
    email: form.email,
    password: form.password,
  });

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
      setMessage("Los campos no pueden estar vacíos");
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
        <form>
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
          <Button
            variant="primary"
            onClick={() => {
              validateForm();
            }}
          >
            Submit
          </Button>
        </form>
      </Modal.Body>
      {showAlert ? (
        <SimpleAlert
          show={showAlert}
          variant="success"
          message={message}
          clickAlert={clickAlert}
        />
      ) : (
        ""
      )}
    </Modal>
  );
}
