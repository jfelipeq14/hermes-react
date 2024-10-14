/* eslint-disable react/prop-types */
import { Form } from "react-bootstrap";
import HermesLogo from "../../../components/HermesLogo";

import swal from "sweetalert";
import { useState } from "react";

export default function Restore({ emailProp }) {
  // const users = [];
  console.log(emailProp);

  const [email, setEmail] = useState(emailProp);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [validated, setValidated] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!e.currentTarget.checkValidity()) {
      e.stopPropagation();
    } else {
      try {
        if (password !== confirmPassword) {
          swal({
            title: "Las contraseñas no coinciden",
            text: "Vuelve a intentarlo",
            icon: "error",
            buttons: false,
            timer: 2000,
          });
          return;
        } else {
          swal({
            title: "Se ha restablecido la contraseña. Inicia sesión",
            text: "Revisa tu bandeja de entrada",
            icon: "success",
            buttons: false,
            timer: 2000,
          });
        }
      } catch (error) {
        console.error(error);
      }
    }
    setValidated(true);
  };

  const handleReset = () => {
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setValidated(false);
  };
  return (
    <>
      <h1 className="text-center fs-3 my-5">Recuperar acceso</h1>
      <div className="container text-center">
        <HermesLogo />
      </div>
      <p>
        Introduza la dirección de correo electrónico que utilizó para
        registrarse y le enviaremos un enlace para restablecer su contraseña por
        correo electrónico.
      </p>
      <Form
        noValidate
        validated={validated}
        onSubmit={handleSubmit}
        onReset={handleReset}
        className="row p-4"
      >
        <label className="col-12">
          Correo electrónico:
          <input
            type="email"
            name="email"
            value={email}
            className="form-control form-control-sm my-2"
            readOnly
          />
        </label>
        <label className="col-12">
          Contraseña:
          <input
            type="password"
            name="password"
            value={password}
            className="form-control form-control-sm my-2"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </label>
        <label className="col-12">
          Confirmar contraseña:
          <input
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            className="form-control form-control-sm my-2"
            onChange={(e) => {
              setConfirmPassword(e.target.value);
            }}
          />
        </label>
        <div className="buttons justify-content-center">
          <button className=" btn btn-sm btn-primary" type="submit">
            Enviar
          </button>
        </div>
        <div className="text-center">
          <button
            className="btn text-center"
            type="button"
            onClick={(e) => {
              console.log(e);
            }}
          >
            Volver al acceso
          </button>
        </div>
      </Form>
    </>
  );
}
