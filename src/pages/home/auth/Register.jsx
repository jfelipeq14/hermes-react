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
  const [user, setUser] = useState(formUser);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [validated, setValidated] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!e.currentTarget.checkValidity()) {
      e.stopPropagation();
    } else {
      if (user.password !== confirmPassword) {
        swal({
          title: "Error",
          text: "Las contraseñas no coinciden",
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
      }).then(async (confirm) => {
        if (confirm) {
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
        clickModal()
      });
    }
    setValidated(true);
  };

  const handleReset = () => {
    setUser(formUser); // Reinicia el estado del usuario
    setConfirmPassword(""); // Reinicia la confirmación de contraseña
    clickModal(); // Cierra el modal
  };

  return (
    <Modal show={isOpen} onHide={clickModal}>
      <h1 className="text-center p-4">Registrarse</h1>
      <HermesLogo />
      <Form
        noValidate
        validated={validated}
        onSubmit={handleSubmit}
        className="row p-4"
      >
        {/* Identificación */}
        <div className="col-12">
          <div className="row">
            <label htmlFor="identification" className="form-label">
              Identificación:
            </label>
            <div className="col-3">
              <select
                className="form-select"
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
              </select>
              <small className="valid-feedback">Todo bien!</small>
              <small className="invalid-feedback">Campo obligatorio</small>
            </div>
            <div className="col-9">
              <input
                type="text"
                className="form-control"
                name="identification"
                value={user.identification}
                onChange={handleChange}
                pattern="^[a-z0-9]{6,}$"
                required
              />
              <small className="valid-feedback">Todo bien!</small>
              <small className="invalid-feedback">Campo obligatorio</small>
            </div>
          </div>
        </div>
        {/* Correo */}
        <div className="col-12">
          <label htmlFor="email">Correo:</label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={user.email}
            onChange={handleChange}
            pattern="^[a-z0-9.!#$%&*+/=?^_`{|}~-]+@[a-z0-9-]+\.[a-z0-9.]{2,}$"
            required
          />
          <small className="valid-feedback">Todo bien!</small>
          <small className="invalid-feedback">Campo obligatorio</small>
        </div>
        {/* Contraseña */}
        <div className="col-6">
          <label htmlFor="password">Contraseña:</label>
          <input
            type="password"
            className="form-control"
            name="password"
            value={user.password}
            onChange={handleChange}
            pattern="^[a-z0-9.!#$%&*+/=?^_`{|}~-]{8,}$"
            minLength={8}
            required
          />
          <small className="valid-feedback">Todo bien!</small>
          <small className="invalid-feedback">Campo obligatorio</small>
        </div>
        <div className="col-6">
          <label htmlFor="confirmPassword">Confirmar contraseña:</label>
          <input
            type="password"
            className="form-control"
            name="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          <small className="valid-feedback">Todo bien!</small>
          <small className="invalid-feedback">Campo obligatorio</small>
        </div>
        <div className="col-12 buttons my-3">
          <button
            type="submit"
            className="btn btn-outline-primary"
            disabled={confirmPassword !== user.password}
          >
            Guardar
          </button>

          <button
            type="button"
            className="btn btn-outline-danger"
            onClick={clickModal}
          >
            Cancelar
          </button>
        </div>
      </Form>
    </Modal>
  );
}
