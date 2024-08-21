import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

export default function Register({ isOpen, clickModal }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    setError(""); // Reiniciar el error

    // Validaciones
    if (!email) {
      setError("El email es obligatorio");
      return;
    }
    if (!password) {
      setError("La contraseña es obligatoria");
      return;
    }
    if (password.length < 6) {
      setError("La contraseña debe tener al menos 6 caracteres");
      return;
    }

    // Lógica de registro aquí
    console.log("Registro exitoso con:", { email, password });
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
            <label htmlFor="email" className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Contraseña</label>
            <input
              type="password"
              className="form-control"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <Button type="submit" variant="primary">Registrarse</Button>
        </form>
      </Modal.Body>
    </Modal>
  );
}
