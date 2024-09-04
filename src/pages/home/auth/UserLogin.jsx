// userLogin.jsx
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import swal from "sweetalert";

export default function UserLogin() {
  const [showResetModal, setShowResetModal] = useState(false);
  const [resetEmail, setResetEmail] = useState("");
  const [showCodeModal, setShowCodeModal] = useState(false);
  const [verificationCode, setVerificationCode] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const toggleResetModal = () => {
    setShowResetModal(!showResetModal);
  };

  const toggleCodeModal = () => {
    setShowCodeModal(!showCodeModal);
  };

  const handleResetPassword = (e) => {
    e.preventDefault();
    swal("Código enviado a tu correo.", {
      icon: "success",
    });
    setTimeout(() => {
      toggleResetModal();
      setShowCodeModal(true);
    }, 3000);
  };

  const handleVerifyCode = (e) => {
    e.preventDefault();
    if (verificationCode === "9999") {
      swal("Código verificado. Ahora puedes restablecer tu contraseña.", {
        icon: "success",
      });
      toggleCodeModal();
    } else {
      swal("Código incorrecto. Intenta nuevamente.", {
        icon: "error",
      });
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
      swal(errors.join("\n"), {
        icon: "error",
      });
      return;
    }

    swal("Contraseña restablecida correctamente.", {
      icon: "success",
    });
    toggleCodeModal();
  };

  return (
    <>
      <p>
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
      <Modal show={showCodeModal}>
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
      <Modal show={showCodeModal && verificationCode === "9999"}>
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
            <Button type="submit">Restablecer Contraseña</Button>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}
