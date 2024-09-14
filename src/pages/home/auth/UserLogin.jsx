// userLogin.jsx
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export default function UserLogin() {
  const [showResetModal, setShowResetModal] = useState(false);
  const [resetEmail, setResetEmail] = useState("");
  const [showCodeModal, setShowCodeModal] = useState(false);
  const [verificationCode, setVerificationCode] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [messages, setMessages] = useState([]);

  const toggleResetModal = () => {
    setShowResetModal(!showResetModal);
  };

  const toggleCodeModal = () => {
    setShowCodeModal(!showCodeModal);
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
    if (verificationCode === "9999") {
      setMessages(["Código verificado. Ahora puedes restablecer tu contraseña."]);
      toggleCodeModal();
    } else {
      setMessages(["Código incorrecto. Intenta nuevamente."]);
    }
  };

  const handleChangePassword = (e) => {
    e.preventDefault();
    const errors = [];

    const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z0-9.!#$%&*+/=?^_`{|}~-]).{8,}$/;
    if (!passwordRegex.test(newPassword)) {
      errors.push("La nueva contraseña debe tener al menos 8 caracteres, incluir al menos una letra mayúscula y solo puede incluir letras minúsculas, números o ciertos símbolos.");
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
      <p className="text-center">
        <a href="#" onClick={toggleResetModal}>Olvidé mi contraseña</a>
      </p>

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
      <Modal show={showCodeModal && verificationCode === "9999"} onHide={toggleCodeModal}>
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
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="confirmPassword" className="form-label">Confirmar Contraseña</label>
              <input
                type="password"
                className="form-control"
                onChange={(e) => setConfirmPassword(e.target.value)}
                value={confirmPassword}
                required
              />
            </div>
            {messages.length > 0 && (
              <div className={`alert ${messages[0].includes("correctamente") ? "alert-success" : "alert-danger"}`}>
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
