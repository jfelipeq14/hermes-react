/* eslint-disable react/prop-types */
import { Form } from "react-bootstrap";
import HermesLogo from "../../../components/HermesLogo";

import swal from "sweetalert";
import { useState } from "react";
import Modals from "../../../components/Modals";
import Restore from "./Restore";

export default function Recover() {
  // const users = [];

  const [email, setEmail] = useState("");
  const [openRestoreModal, setOpenRestoreModal] = useState(false);
  const [validated, setValidated] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!e.currentTarget.checkValidity()) {
      e.stopPropagation();
    } else {
      try {
        swal({
          title: "Se ha enviado un correo electrónico",
          text: "Revisa tu bandeja de entrada",
          icon: "success",
          buttons: false,
          timer: 2000,
        });
        setOpenRestoreModal(true);
      } catch (error) {
        console.error(error);
      }
    }
    setValidated(true);
  };

  const handleReset = () => {
    setEmail("");
    setValidated(false);
  };
  return (
    <>
      <h1 className="text-center fs-3 my-5">Recuperar acceso</h1>
      <div className="container text-center">
        <HermesLogo />
      </div>
      <p className="text-center">
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
            onChange={(e) => {
              setEmail(e.target.value);
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
      {openRestoreModal && (
        <Modals isOpen={openRestoreModal} clickModal={setOpenRestoreModal}>
          <Restore emailProp={email} />
        </Modals>
      )}
    </>
  );
}
