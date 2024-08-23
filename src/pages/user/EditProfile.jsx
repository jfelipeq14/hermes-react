import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';

export default function EditProfile({ isOpen, clickModal }) {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [correo, setCorreo] = useState("");
  const [celular, setCelular] = useState("");
  const [tipoIdentificacion, setTipoIdentificacion] = useState("Cédula de Ciudadanía");
  const [error, setError] = useState("");

  const handleUpdate = (e) => {
    e.preventDefault();
    setError(""); // Reiniciar el error

    // Validaciones
    if (!nombre || !apellido || !correo || !celular) {
      setError("Todos los campos son obligatorios");
      return;
    }

    // Lógica de actualización aquí
    console.log("Perfil actualizado con:", { nombre, apellido, correo, celular, tipoIdentificacion });
    clickModal(); // Cierra el formulario después de la actualización
  };

  return (
    <div className={`modal ${isOpen ? 'd-block' : 'd-none'}`} tabIndex="-1" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Editar Perfil</h5>
            <button type="button" className="btn-close" onClick={clickModal}></button>
          </div>
          <div className="modal-body">
            {error && <div className="alert alert-danger">{error}</div>}
            <form onSubmit={handleUpdate}>
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
                  <option value="Cédula de Ciudadanía">Cédula de Ciudadanía</option>
                  <option value="Pasaporte">Pasaporte</option>
                  <option value="Tarjeta de Identidad">Tarjeta de Identidad</option>
                </select>
              </div>
              <Button type="submit" variant="primary">Guardar Cambios</Button>
              <Button variant="secondary" onClick={clickModal} style={{ marginLeft: '10px' }}>Cancelar</Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
