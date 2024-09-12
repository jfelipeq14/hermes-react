import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Cookies from 'js-cookie';
import { Users } from "../../../models/users/users.model";
import UserLogin from './UserLogin';

// Componente de Logout
export function LogoutButton() {
  const navigate = useNavigate();

  const handleLogout = () => {
    Cookies.remove("loggedInUser");
    navigate("/login");
  };

  return <Button onClick={handleLogout}>Cerrar sesión</Button>;
}

// Componente de Login
export default function Login({ isOpen, clickModal, handleLogin }) {
  const userModel = new Users();
  const [modalIsOpen, setModalIsOpen] = useState(isOpen);
  const [messages, setMessages] = useState([]);
  const [formData, setFormData] = useState({ email: "", password: "", rememberMe: false });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = Cookies.get("loggedInUser");
    if (storedUser) {
      handleLogin(JSON.parse(storedUser));
      console.log("Redirigiendo a /Menu");
      navigate("/Menu");
    }
  }, [handleLogin, navigate]);

  const toggleModal = () => {
    setModalIsOpen(!modalIsOpen);
    clickModal(!modalIsOpen);
  };

  const validateForm = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessages([]);

    const errors = [];

    // Validaciones del formulario
    if (formData.email.trim() === "" || formData.password.trim() === "") {
      errors.push("Los campos no pueden estar vacíos.");
    }

    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.push("El formato del email es incorrecto.");
    }

    const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z0-9.!#$%&*+/=?^_`{|}~-]).{8,}$/;
    if (!passwordRegex.test(formData.password)) {
      errors.push("La contraseña debe tener al menos 8 caracteres e incluir al menos una letra mayúscula.");
    }

    if (errors.length > 0) {
      setMessages(errors);
      setIsSubmitting(false);
      return; // Evita continuar si hay errores
    }

    // Verificar si la lista de usuarios está definida y contiene usuarios
    if (!userModel.users || userModel.users.length === 0) {
      setMessages(["Lista de usuarios no definida o vacía."]);
      setIsSubmitting(false);
      return; // Evita continuar si la lista de usuarios está vacía
    }

    // Buscar el usuario en la lista
    const userFound = userModel.users.find(user => user.email === formData.email);

    if (!userFound) {
      setMessages(["Usuario no encontrado."]);
      setIsSubmitting(false);
      return; // Evita continuar si el usuario no se encuentra
    }

    if (userFound.password !== formData.password) {
      setMessages(["Contraseña incorrecta."]);
      setIsSubmitting(false);
      return; // Evita continuar si la contraseña es incorrecta
    }

    // Usuario autenticado exitosamente
    setMessages(["Inicio de sesión exitoso."]);
    handleLogin(userFound);

    if (formData.rememberMe) {
      Cookies.set("loggedInUser", JSON.stringify(userFound), { expires: 7 });
    }

    setModalIsOpen(false);
    setIsSubmitting(false);
    console.log("Redirigiendo a /Menu");
    navigate("/Menu");
  };

  return (
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
          <div className="mb-3">
            <input
              type="checkbox"
              id="rememberMe"
              onChange={(e) => setFormData({ ...formData, rememberMe: e.target.checked })}
            />
            <label htmlFor="rememberMe" className="form-label">Recordar sesión</label>
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
          <Button type="submit" disabled={isSubmitting}>Ingresar</Button>
        </form>
        <UserLogin />
      </Modal.Body>
    </Modal>
  );
}

Login.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  clickModal: PropTypes.func.isRequired,
  handleLogin: PropTypes.func.isRequired
};
