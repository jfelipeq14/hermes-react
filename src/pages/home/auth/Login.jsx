import { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { User } from "../../../models/user.model";

export default function Login({ isOpen, clickModal, handleLogin }) {
  const user = new User();
  const [modalIsOpen, setModalIsOpen] = useState(isOpen);
  const [messages, setMessages] = useState([]);
  const [formData, setFormData] = useState(user);
  const [showResetModal, setShowResetModal] = useState(false);
  const [resetEmail, setResetEmail] = useState("");
  const [showCodeModal, setShowCodeModal] = useState(false);
  const [verificationCode, setVerificationCode] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();

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

  const validateForm = (e) => {
    e.preventDefault();
    const errors = [];

    if (formData.email === "" || formData.password === "") {
      errors.push("Los campos no pueden estar vacíos.");
    }

    if (!formData.email.includes("@") || !formData.email.includes(".")) {
      errors.push("El formato del email es incorrecto.");
    }

    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordRegex.test(formData.password)) {
      errors.push("La contraseña debe tener al menos 8 caracteres, incluir letras, números y un carácter especial.");
    }

    if (errors.length > 0) {
      setMessages(errors);
      return;
    }

    setMessages(["Inicio de sesión exitoso."]);
    handleLogin();
    setModalIsOpen(false); // Cierra el modal
    navigate("/Menu"); // Redirige a Menu
  };

  const handleResetPassword = (e) => {
    e.preventDefault();
    setMessages(["Código enviado a tu correo."]);
    setTimeout(() => {
      toggleResetModal();
      setShowCodeModal(true);
    }, 3000);
  };

  const handleVerifyCode = (e) => {
    e.preventDefault();
    if (verificationCode === "123456") {
      setMessages(["Código verificado. Ahora puedes restablecer tu contraseña."]);
      toggleCodeModal();
    } else {
      setMessages(["Código incorrecto. Intenta nuevamente."]);
    }
  };

  const handleChangePassword = (e) => {
    e.preventDefault();
    const errors = [];

    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordRegex.test(newPassword)) {
      errors.push("La nueva contraseña debe tener al menos 8 caracteres, incluir letras, números y un carácter especial.");
    }

    if (newPassword !== confirmPassword) {
      errors.push("Las contraseñas no coinciden.");
    }

    if (errors.length > 0) {
      setMessages(errors);
      return;
    }

    setMessages(["Contraseña restablecida correctamente."]);
    toggleCodeModal();
  };

  return (
    <>
      {/* Iniciar sesión */}
      <Modal show={modalIsOpen} onHide={toggleModal}>
        <Modal.Header>
          <Modal.Title>Iniciar Sesión</Modal.Title>
          <Button variant="close" onClick={toggleModal} aria-label="Cerrar">
            <span aria-hidden="true">&times;</span>
          </Button>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={validateForm}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Correo electrónico</label>
              <input
                type="email"
                className="form-control"
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                value={formData.email}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Contraseña</label>
              <input
                type="password"
                className="form-control"
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                value={formData.password}
              />
            </div>
            {messages.length > 0 && (
              <div className={`alert ${messages[0].includes("correctamente") || messages[0].includes("enviadas") ? "alert-success" : "alert-danger"}`}>
                <ul>
                  {messages.map((msg, index) => (
                    <li key={index}>{msg}</li>
                  ))}
                </ul>
              </div>
            )}
            <Button type="submit">Ingresar</Button>
          </form>
          <p>
            <a href="#" onClick={toggleResetModal}>Olvidé mi contraseña</a>
          </p>
        </Modal.Body>
      </Modal>

      {/* Modal para restablecer contraseña */}
      <Modal show={showResetModal} onHide={toggleResetModal}>
        <Modal.Header>
          <Modal.Title>Recuperar Contraseña</Modal.Title>
          <Button variant="close" onClick={toggleResetModal} aria-label="Cerrar">
            <span aria-hidden="true">&times;</span>
          </Button>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleResetPassword}>
            <div className="mb-3">
              <label htmlFor="resetEmail" className="form-label">Correo electrónico</label>
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
        <Modal.Header>
          <Modal.Title>Ingresa el código de verificación</Modal.Title>
          <Button variant="close" onClick={toggleCodeModal} aria-label="Cerrar">
            <span aria-hidden="true">&times;</span>
          </Button>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleVerifyCode}>
            <div className="mb-3">
              <label htmlFor="verificationCode" className="form-label">Código</label>
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
        <Modal.Header>
          <Modal.Title>Cambiar Contraseña</Modal.Title>
          <Button variant="close" onClick={toggleCodeModal} aria-label="Cerrar">
            <span aria-hidden="true">&times;</span>
          </Button>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleChangePassword}>
            <div className="mb-3">
              <label htmlFor="newPassword" className="form-label">Nueva Contraseña</label>
              <input
                type="password"
                className="form-control"
                onChange={(e) => setNewPassword(e.target.value)}
                value={newPassword}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="confirmPassword" className="form-label">Confirmar Contraseña</label>
              <input
                type="password"
                className="form-control"
                onChange={(e) => setConfirmPassword(e.target.value)}
                value={confirmPassword}
              />
            </div>
            {messages.length > 0 && (
              <div className={`alert ${messages[0].includes("correctamente") || messages[0].includes("enviadas") ? "alert-success" : "alert-danger"}`}>
                <ul>
                  {messages.map((msg, index) => (
                    <li key={index}>{msg}</li>
                  ))}
                </ul>
              </div>
            )}
            <Button type="submit">Restablecer Contraseña</Button>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}
