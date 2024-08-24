import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

export default function Register({ isOpen, clickModal }) {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [correo, setCorreo] = useState("");
  const [celular, setCelular] = useState("");
  const [tipoIdentificacion, setTipoIdentificacion] = useState("Cedula de Ciudadania");
  const [contraseña, setContraseña] = useState("");
  const [confirmarContraseña, setConfirmarContraseña] = useState("");
  const [error, setError] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    setError(""); // Reiniciar el error

    // Validaciones
    if (!nombre || !apellido || !correo || !celular || !contraseña || !confirmarContraseña) {
      setError("Todos los campos son obligatorios");
      return;
    }
    if (contraseña !== confirmarContraseña) {
      setError("Las contraseñas no coinciden");
      return;
    }
    if (contraseña.length < 6) {
      setError("La contraseña debe tener al menos 6 caracteres");
      return;
    }

    // Lógica de registro aquí
    console.log("Registro exitoso con:", { nombre, apellido, correo, celular, tipoIdentificacion, contraseña });
    clickModal(); // Cierra el modal después del registro
  };

  return (
    <Modal show={isOpen} onHide={clickModal}>
      <Modal.Header closeButton>
        <Modal.Title>Registrarse</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {error && <div className="alert alert-danger">{error}</div>}
        <form onSubmit={handleRegister}>
          <div className="mb-3">
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
          <div className="mb-3">
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
          <div className="mb-3">
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
          <div className="mb-3">
            <label htmlFor="celular" className="form-label">Celular</label>
            <input
              type="text"
              className="form-control"
              id="celular"
              value={celular}
              onChange={(e) => setCelular(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="tipoIdentificacion" className="form-label">Tipo de identificación</label>
            <select
              className="form-select"
              id="tipoIdentificacion"
              value={tipoIdentificacion}
              onChange={(e) => setTipoIdentificacion(e.target.value)}
            >
              <option value="Cedula de Ciudadania">Cédula de Ciudadanía</option>
              {/* Puedes agregar más opciones aquí */}
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor="contraseña" className="form-label">Contraseña</label>
            <input
              type="password"
              className="form-control"
              id="contraseña"
              value={contraseña}
              onChange={(e) => setContraseña(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="confirmarContraseña" className="form-label">Confirmar contraseña</label>
            <input
              type="password"
              className="form-control"
              id="confirmarContraseña"
              value={confirmarContraseña}
              onChange={(e) => setConfirmarContraseña(e.target.value)}
              required
            />
          </div>
          <Button type="submit" variant="primary">Guardar</Button>
        </form>
      </Modal.Body>
    </Modal>
  );
}

