import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import SimpleAlert from "../../../components/Alerts";
import { User } from "../../../models/user.model";
import { messages } from "../../../utilies/messages";

export default function Login({ isOpen, clickModal }) {
  const user = new User();
  const [modalIsOpen, setModalIsOpen] = useState(isOpen);
  const [showAlert, setShowAlert] = useState(false);
  const [message, setMessage] = useState(messages);
  const [formData, setFormData] = useState(user);
  const [showResetModal, setShowResetModal] = useState(false);
  const [resetEmail, setResetEmail] = useState("");
  const [showCodeModal, setShowCodeModal] = useState(false);
  const [verificationCode, setVerificationCode] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const toggleModal = () => {
    setModalIsOpen(!modalIsOpen);
    clickModal(!modalIsOpen);
  };

  const toggleResetModal = () => {
    setShowResetModal(!showResetModal);
  };

  const toggleCodeModal = () => {
    setShowCodeModal(!showCodeModal);
  };

  const clickAlert = () => {
    setShowAlert(!showAlert);
  };

  const validateForm = (e) => {
    e.preventDefault();

    if (formData.email === "" || formData.password === "") {
      setMessage(messages.error.emptyFields);
      setShowAlert(true);
      return;
    }

    if (!formData.email.includes("@") || !formData.email.includes(".")) {
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
      clickModal(!modalIsOpen);
    }, 3000);
  };

  const handleResetPassword = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para enviar el email de restablecimiento
    setMessage("Instrucciones enviadas a tu correo.");
    setShowAlert(true);
    setTimeout(() => {
      toggleResetModal();
      toggleCodeModal();
    }, 3000);
  };

  const handleVerifyCode = (e) => {
    e.preventDefault();
    // Lógica para verificar el código
    if (verificationCode === "123456") { // Cambia esto por la lógica real
      setMessage("Código verificado. Ahora puedes restablecer tu contraseña.");
      setShowAlert(true);
    } else {
      setMessage("Código incorrecto. Intenta nuevamente.");
      setShowAlert(true);
    }
  };

  const handleChangePassword = (e) => {
    e.preventDefault();

    if (newPassword.length < 6) {
      setMessage("La nueva contraseña debe tener al menos 6 caracteres.");
      setShowAlert(true);
      return;
    }

    if (newPassword !== confirmPassword) {
      setMessage("Las contraseñas no coinciden.");
      setShowAlert(true);
      return;
    }

    setMessage("Contraseña restablecida correctamente.");
    setShowAlert(true);
    // Aquí puedes agregar la lógica para actualizar la contraseña
    toggleCodeModal();
  };

  return (
    <>
      <Modal show={modalIsOpen} onHide={toggleModal}>
        <Modal.Body>
          <form onSubmit={validateForm}>
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
            <Button type="submit">Submit</Button>
          </form>
          <p>
            <a href="#" onClick={toggleResetModal}>Olvidé mi contraseña</a>
          </p>
        </Modal.Body>
        {showAlert && (
          <SimpleAlert
            show={showAlert}
            variant="success"
            title="Titulo"
            message={message}
            clickAlert={clickAlert}
          />
        )}
      </Modal>

      {/* Modal para restablecer contraseña */}
      <Modal show={showResetModal} onHide={toggleResetModal}>
        <Modal.Body>
          <h5>Recuperar Contraseña</h5>
          <form onSubmit={handleResetPassword}>
            <div className="mb-3">
              <label htmlFor="resetEmail" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                onChange={(e) => setResetEmail(e.target.value)}
                value={resetEmail}
              />
            </div>
            <Button type="submit">Enviar código</Button>
          </form>
        </Modal.Body>
      </Modal>

      {/* Modal para ingresar el código de verificación */}
      <Modal show={showCodeModal} onHide={toggleCodeModal}>
        <Modal.Body>
          <h5>Ingresa el código de verificación</h5>
          <form onSubmit={handleVerifyCode}>
            <div className="mb-3">
              <label htmlFor="verificationCode" className="form-label">
                Código
              </label>
              <input
                type="text"
                className="form-control"
                onChange={(e) => setVerificationCode(e.target.value)}
                value={verificationCode}
              />
            </div>
            <Button type="submit">Verificar Código</Button>
          </form>
        </Modal.Body>
      </Modal>

      {/* Modal para cambiar la contraseña */}
      <Modal show={showCodeModal && verificationCode === "123456"} onHide={toggleCodeModal}>
        <Modal.Body>
          <h5>Cambiar Contraseña</h5>
          <form onSubmit={handleChangePassword}>
            <div className="mb-3">
              <label htmlFor="newPassword" className="form-label">
                Nueva Contraseña
              </label>
              <input
                type="password"
                className="form-control"
                onChange={(e) => setNewPassword(e.target.value)}
                value={newPassword}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="confirmPassword" className="form-label">
                Confirmar Contraseña
              </label>
              <input
                type="password"
                className="form-control"
                onChange={(e) => setConfirmPassword(e.target.value)}
                value={confirmPassword}
              />
            </div>
            <Button type="submit">Restablecer Contraseña</Button>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}
