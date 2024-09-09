import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Users } from "../../../models/users/users.model";
import UserLogin from './UserLogin'; // Importar el componente de usuario

// eslint-disable-next-line react/prop-types
export default function Login({ isOpen, clickModal, handleLogin }) {
  const userModel = new Users(); // Supongamos que Users tiene una lista de usuarios
  const [modalIsOpen, setModalIsOpen] = useState(isOpen);
  const [messages, setMessages] = useState([]);
  const [formData, setFormData] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const toggleModal = () => {
    setModalIsOpen(!modalIsOpen);
    clickModal(!modalIsOpen);
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

    const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z0-9.!#$%&*+/=?^_`{|}~-]).{8,}$/;
    if (!passwordRegex.test(formData.password)) {
      errors.push("La contraseña debe tener al menos 8 caracteres, incluir al menos una letra mayúscula y solo puede incluir letras minúsculas, números o ciertos símbolos.");
    }

    // Si hay errores, los mostramos y detenemos la ejecución
    if (errors.length > 0) {
      setMessages(errors);
      return;
    }

    // Aquí buscamos el usuario en la lista de usuarios (suponiendo que sea un array)
    const userFound = userModel.users.find(
      (user) => user.email === formData.email
    );

    // Si el usuario no es encontrado
    if (!userFound) {
      setMessages(["Usuario no encontrado."]);
      return;
    }

    // Si la contraseña no coincide
    if (userFound.password !== formData.password) {
      setMessages(["Contraseña incorrecta."]);
      return;
    }

    // Si todo es correcto, iniciamos sesión
    setMessages(["Inicio de sesión exitoso."]);
    handleLogin(userFound); // Pasamos el usuario al handleLogin
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
            <Button type="submit">Ingresar</Button>
          </form>
          <UserLogin />
        </Modal.Body>
      </Modal>
    </>
  );
}
