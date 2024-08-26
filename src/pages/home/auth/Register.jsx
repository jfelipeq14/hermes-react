import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { Eye, EyeSlash } from 'react-bootstrap-icons'; // Asegúrate de tener react-bootstrap-icons instalado
import { useNavigate } from 'react-router-dom'; // Importa useNavigate

export default function Register({ isOpen, clickModal }) {
  const navigate = useNavigate(); // Inicializa useNavigate
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [correo, setCorreo] = useState("");
  const [celular, setCelular] = useState("");
  const [tipoIdentificacion, setTipoIdentificacion] = useState("Cédula de Ciudadanía");
  const [cedula, setCedula] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [confirmarContraseña, setConfirmarContraseña] = useState("");
  const [error, setError] = useState("");
  const [mostrarContraseña, setMostrarContraseña] = useState(false);
  const [mostrarConfirmarContraseña, setMostrarConfirmarContraseña] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();
    setError(""); // Reiniciar el error

    // Validaciones
    if (!nombre || !apellido || !correo || !celular || !cedula || !contraseña || !confirmarContraseña) {
      setError("Todos los campos son obligatorios");
      return;
    }
    if (contraseña !== confirmarContraseña) {
      setError("Las contraseñas no coinciden");
      return;
    }
    if (contraseña.length < 8) {
      setError("La contraseña debe tener al menos 8 caracteres");
      return;
    }

    // Lógica de registro aquí
    console.log("Registro exitoso con:", { nombre, apellido, correo, celular, tipoIdentificacion, cedula, contraseña });
    
    clickModal(); // Cierra el modal después del registro
    setTimeout(() => navigate('/Login'), 500); // Redirige a la página de inicio de sesión
  };

  return (
    <Modal show={isOpen} onHide={clickModal}>
      <Modal.Header closeButton>
        <Modal.Title>Registrarse</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {error && <div className="alert alert-danger">{error}</div>}
        <form onSubmit={handleRegister}>
          <div className="mb-3 row">
            <div className="col">
              <label htmlFor="nombre" className="form-label">Nombre</label>
              <input
                type="text"
                className="form-control"
                id="nombre"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                required
              />
            </div>
            <div className="col">
              <label htmlFor="apellido" className="form-label">Apellido</label>
              <input
                type="text"
                className="form-control"
                id="apellido"
                value={apellido}
                onChange={(e) => setApellido(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="mb-3 row">
            <div className="col">
              <label htmlFor="correo" className="form-label">Correo</label>
              <input
                type="email"
                className="form-control"
                id="correo"
                value={correo}
                onChange={(e) => setCorreo(e.target.value)}
                required
              />
            </div>
            <div className="col">
              <label htmlFor="celular" className="form-label">Celular</label>
              <input
                type="tel"
                className="form-control"
                id="celular"
                value={celular}
                onChange={(e) => setCelular(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="mb-3 row">
            <div className="col">
              <label htmlFor="tipoIdentificacion" className="form-label">Tipo de Identificación</label>
              <select
                className="form-select"
                id="tipoIdentificacion"
                value={tipoIdentificacion}
                onChange={(e) => setTipoIdentificacion(e.target.value)}
              >
                <option value="Cédula de Ciudadanía">Cédula de Ciudadanía</option>
                <option value="Pasaporte">Pasaporte</option>
                <option value="Tarjeta de Identidad">Tarjeta de Identidad</option>
              </select>
            </div>
            <div className="col">
              <label htmlFor="cedula" className="form-label">Número de Identificación</label>
              <input
                type="text"
                className="form-control"
                id="cedula"
                value={cedula}
                onChange={(e) => setCedula(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="contraseña" className="form-label">Contraseña</label>
            <div className="input-group">
              <input
                type={mostrarContraseña ? "text" : "password"}
                className="form-control"
                id="contraseña"
                value={contraseña}
                onChange={(e) => setContraseña(e.target.value)}
                required
              />
              <span className="input-group-text" onClick={() => setMostrarContraseña(!mostrarContraseña)}>
                {mostrarContraseña ? <EyeSlash /> : <Eye />}
              </span>
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="confirmarContraseña" className="form-label">Confirmar Contraseña</label>
            <div className="input-group">
              <input
                type={mostrarConfirmarContraseña ? "text" : "password"}
                className="form-control"
                id="confirmarContraseña"
                value={confirmarContraseña}
                onChange={(e) => setConfirmarContraseña(e.target.value)}
                required
              />
              <span className="input-group-text" onClick={() => setMostrarConfirmarContraseña(!mostrarConfirmarContraseña)}>
                {mostrarConfirmarContraseña ? <EyeSlash /> : <Eye />}
              </span>
            </div>
          </div>
          <Button variant="primary" type="submit">
            Registrarse
          </Button>
        </form>
      </Modal.Body>
    </Modal>
  );
}
