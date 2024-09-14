import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import swal from "sweetalert";
import { Users } from "../../../models/users/users.model";
import { Form } from "react-bootstrap";
import { documentTypes } from "../../../utilies/documentTypes";
import HermesLogo from "../../../components/HermesLogo";

// eslint-disable-next-line react/prop-types
export default function Register({ isOpen, clickModal }) {
  // const [nombre, setNombre] = useState("");
  // const [correo, setCorreo] = useState("");
  // const [tipoIdentificacion, setTipoIdentificacion] = useState("");
  // const [cedula, setCedula] = useState("");
  // const [contraseña, setContraseña] = useState("");
  // const [confirmarContraseña, setConfirmarContraseña] = useState("");
  // const [error, setError] = useState("");
  // const [mostrarContraseña, setMostrarContraseña] = useState(false);
  // const [mostrarConfirmarContraseña, setMostrarConfirmarContraseña] =
  //   useState(false);
  // Puedes ahorrarte todo lo anterior con
  const formUser = new Users();
  formUser.id_role = 2; // Usuario
  const [user, setUser] = useState(formUser); // Un solo estado para todos los campos
  const [confirmPassword, setConfirmPassword] = useState("");
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  // Puedes ahorrarte estas validaciones haciendo los formularios iguales a los que ya tenemos. Revisa el codigo nuevo
  // const handleRegister = (e) => {
  //   e.preventDefault();
  //   setError("");

  //   // Validaciones
  //   if (!nombre || !correo || !cedula || !contraseña || !confirmarContraseña) {
  //     setError("Todos los campos son obligatorios");
  //     return;
  //   }
  //   if (contraseña !== confirmarContraseña) {
  //     setError("Las contraseñas no coinciden");
  //     return;
  //   }
  //   if (
  //     !/^(?=.*[A-Z])(?=.*[a-z0-9.!#$%&*+/=?^_`{|}~-]).{8,}$/.test(contraseña)
  //   ) {
  //     setError(
  //       "La contraseña debe tener al menos 8 caracteres, incluyendo al menos una constra mayúscula y solo puede incluir constras minúsculas, números o ciertos símbolos."
  //     );
  //     return;
  //   }
  //   if (!/^[a-zA-Z\s]+$/.test(nombre)) {
  //     setError("El nombre solo debe contener constras y espacios.");
  //     return;
  //   }
  //   if (!/^\d+$/.test(cedula)) {
  //     setError("La cédula debe contener solo números.");
  //     return;
  //   }

  // };

  // Esta es la forma de hacer las validaciones:
  const [validated, setValidated] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!e.currentTarget.checkValidity()) {
      e.stopPropagation();
    } else {
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
    <Modal show={isOpen} onHide={clickModal} size="md">
      <button
        type="button"
        className="btn-close position-absolute top-0 end-0 m-2"
        onClick={clickModal}
        aria-label="Close"
      ></button>
      <h1 className="text-center fs-3 my-5">Registrarse</h1>
      <div className="container text-center">
        <HermesLogo />
      </div>
      <Form
        noValidate
        validated={validated}
        onSubmit={handleSubmit}
        className="row p-4"
      >
        {/* identificacion */}
        <div className="col-12">
          <div className="row">
            <label htmlFor="identification" className="form-label">
              Identificacion:
            </label>
            <div className="col-3">
              <select
                className="form-select"
                name="documentType"
                value={user.documentType}
                onChange={handleChange}
                required
              >
                <option>Selecciona</option>
                {documentTypes.map((documentType) => (
                  <option key={documentType}>{documentType}</option>
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
        {/* correo */}
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
        {/* contraseña */}
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
          <label htmlFor="passwordConfirmation">Confirm. contraseña:</label>
          <input
            type="password"
            className="form-control"
            name="confirmPassword"
            value={confirmPassword}
            onChange={(e) => {
              setConfirmPassword(e.target.value);
              if (confirmPassword === user.password) {
                return;
              } else {
                swal({
                  title: "La contraseña no coincide",
                  text: "Revisa la información antes de enviar el formulario",
                  icon: "warning",
                  buttons: false,
                  timer: 2000,
                });
              }
            }}
            required
          />
          <small className="valid-feedback">Todo bien!</small>
          <small className="invalid-feedback">Campo obligatorio</small>
        </div>
        <div className="col-12 buttons my-3">
          <button type="submit" className="btn btn-outline-primary">
            Guardar
          </button>
          <button type="reset" className="btn btn-outline-danger">
            Cancelar
          </button>
        </div>
      </Form>
    </Modal>
  );
}
