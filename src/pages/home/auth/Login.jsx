/* eslint-disable react/prop-types */

import { useState } from "react";

import { useNavigate } from "react-router-dom";

import { Form } from "react-bootstrap";

import { setTokenStorage } from "../../../utilies/authUtils.js";
import HermesLogo from "../../../components/HermesLogo.jsx";
import swal from "sweetalert";

import { AuthService } from "../../../services/auth.service.js";

export default function Login({ setUser, clickModal, setOpenRecoveryModal }) {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [validated, setValidated] = useState(false);

  const handleChange = ({ target }) => {
    const { name, value } = target;
    if (name === "email") setEmail(value);
    if (name === "password") setPassword(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!e.currentTarget.checkValidity()) {
      e.stopPropagation();
    } else {
      try {
        const userLogin = await AuthService.login({ email, password });
        if (!userLogin) {
          swal({
            title: "No existe el usuario",
            text: "Revisa las credenciales ingresadas",
            icon: "error",
            buttons: false,
            timer: 2000,
          });
          return;
        }
        setUser(userLogin);
        setTokenStorage(userLogin);
        clickModal();
        if (userLogin.data.idRole === 1) {
          navigate("/administrator/dashboard");
        } else {
          navigate("/customer/reservations");
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
    setValidated(false);
    clickModal();
  };

  return (
    <>
      <h1 className="text-center fs-3 my-5">Ingresar</h1>
      <div className="container text-center">
        <HermesLogo />
      </div>
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
            className="form-control form-control-sm my-2"
            onChange={handleChange}
          />
        </label>
        <label className="col-12">
          Contraseña:
          <input
            type="password"
            name="password"
            className="form-control form-control-sm my-2"
            onChange={handleChange}
            required
          />
        </label>
        <div className="buttons justify-content-center">
          <button className="btn btn-sm btn-primary" type="submit">
            Ingresar
          </button>
        </div>
        <div className="text-center">
          <button className="btn" type="button" onClick={()=>{
            clickModal()
            setOpenRecoveryModal(true)
          }}>¿Ha olvidado su contraseña?</button>
        </div>
      </Form>
    </>
  );
}
