/* eslint-disable react/prop-types */
import { useState } from "react";

import { Modal, Form } from "react-bootstrap";

import { documentTypes } from "../../../utilies/documentTypes";

import { AuthService } from "../../../services/auth.service.js";
import { Users } from "../../../models/users/users.model";

import HermesLogo from "../../../components/HermesLogo";

import swal from "sweetalert";

export default function Register({ isOpen, clickModal }) {
  const [user, setUser] = useState(new Users());
  const [confirmPassword, setConfirmPassword] = useState(null);
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
      swal({
        title: "¿Quieres registrarte con estos datos?",
        text: "Revisa todos los campos antes de enviar el formulario para evitar conflictos",
        icon: "warning",
        buttons: true,
      }).then(async (confirm) => {
        if (!confirm || user.password !== confirmPassword) return;
        user.idUser = user.identification;
        user.idRole = 1;
        const userCreated = await AuthService.register(user);
        swal({
          title: userCreated ? "Registro Exitoso" : "Error al registrar",
          text: userCreated
            ? "Ahora puedes iniciar sesión, dirígete a ingresar."
            : "Revisa la información antes de enviar el formulario",
          icon: userCreated ? "success" : "error",
          buttons: false,
          timer: 2000,
        });
        clickModal();
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
                <option value="">Selecciona</option>
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
