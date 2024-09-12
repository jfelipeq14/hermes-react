// src/pages/Register.jsx
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import swal from "sweetalert";
import { Users } from "../../../models/users/users.model";
import { Form } from "react-bootstrap";
import { documentTypes } from "../../../utilies/documentTypes";
import HermesLogo from "../../../components/HermesLogo";

// eslint-disable-next-line react/prop-types
export default function Register({ isOpen, clickModal }) {
  const formUser = new Users();
  formUser.id_role = 2; // Usuario
  const [user, setUser] = useState(formUser); // Un solo estado para todos los campos
  const [confirmPassword, setConfirmPassword] = useState("");
  const [validated, setValidated] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.checkValidity()) {
      e.stopPropagation();
    } else {
      if (user.password !== confirmPassword) {
        swal({
          title: "Las contraseñas no coinciden",
          text: "Revisa la información antes de enviar el formulario",
          icon: "warning",
          buttons: false,
          timer: 2000,
        });
        return;
      }

      // Confirmación de registro
      swal({
        title: "¿Quieres registrarte con estos datos?",
        text: "Revisa todos los campos antes de enviar el formulario para evitar conflictos",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      }).then((confirm) => {
        if (confirm) {
          console.log("Registro exitoso con:", user);
          clickModal(); // Cierra el modal después del registro

          // Mostrar alerta de registro exitoso
          swal({
            title: "Registro Exitoso",
            text: "Ahora puedes iniciar sesión, dirígete a ingresar.",
            icon: "success",
            buttons: false,
            timer: 3000,
          });
        } else {
          swal({
            title: "Cancelado",
            text: "Los datos no se han enviado",
            icon: "error",
            timer: 2000,
            buttons: false,
          });
        }
      });
    }
    setValidated(true);
  };

  return (
    <Modal show={isOpen} onHide={clickModal}>
      <Modal.Header closeButton>
        <Modal.Title>Registrarse</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <HermesLogo />
        <Form
          noValidate
          validated={validated}
          onSubmit={handleSubmit}
          className="row p-4"
        >
          {/* Identificación */}
          <div className="col-12 mb-3">
            <Form.Group controlId="formDocumentType">
              <Form.Label>Tipo de Identificación</Form.Label>
              <Form.Control
                as="select"
                name="documentType"
                value={user.documentType}
                onChange={handleChange}
                required
              >
                <option value="">Selecciona</option>
                {documentTypes.map((documentType) => (
                  <option key={documentType} value={documentType}>
                    {documentType}
                  </option>
                ))}
              </Form.Control>
              <Form.Control.Feedback type="invalid">Campo obligatorio</Form.Control.Feedback>
            </Form.Group>
          </div>
          <div className="col-12 mb-3">
            <Form.Group controlId="formIdentification">
              <Form.Label>Identificación</Form.Label>
              <Form.Control
                type="text"
                name="identification"
                value={user.identification}
                onChange={handleChange}
                pattern="^[a-z0-9]{6,}$"
                required
              />
              <Form.Control.Feedback type="invalid">Campo obligatorio</Form.Control.Feedback>
            </Form.Group>
          </div>
          {/* Correo */}
          <div className="col-12 mb-3">
            <Form.Group controlId="formEmail">
              <Form.Label>Correo Electrónico</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={user.email}
                onChange={handleChange}
                pattern="^[a-z0-9.!#$%&*+/=?^_`{|}~-]+@[a-z0-9-]+\.[a-z0-9.]{2,}$"
                required
              />
              <Form.Control.Feedback type="invalid">Campo obligatorio</Form.Control.Feedback>
            </Form.Group>
          </div>
          {/* Contraseña */}
          <div className="col-6 mb-3">
            <Form.Group controlId="formPassword">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control
                type="password"
                name="password"
                value={user.password}
                onChange={handleChange}
                pattern="^(?=.*[A-Z])(?=.*[a-z0-9.!#$%&*+/=?^_`{|}~-]).{8,}$"
                minLength={8}
                required
              />
              <Form.Control.Feedback type="invalid">Campo obligatorio</Form.Control.Feedback>
            </Form.Group>
          </div>
          <div className="col-6 mb-3">
            <Form.Group controlId="formConfirmPassword">
              <Form.Label>Confirmar Contraseña</Form.Label>
              <Form.Control
                type="password"
                name="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
              <Form.Control.Feedback type="invalid">Campo obligatorio</Form.Control.Feedback>
            </Form.Group>
          </div>
          <div className="col-12 my-3">
            <button type="submit" className="btn btn-outline-primary">
              Guardar
            </button>
            <button type="reset" className="btn btn-outline-danger" onClick={() => setConfirmPassword("")}>
              Cancelar
            </button>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
}
