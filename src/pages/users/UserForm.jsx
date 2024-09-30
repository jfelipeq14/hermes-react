/* eslint-disable react/prop-types */
import { useState } from "react";

import { Form } from "react-bootstrap";

import { documentTypes } from "../../utilies/documentTypes";
import { UsersService } from "../../services/users.service";
import swal from "sweetalert";

import { Users } from "../../models/users/users.model";

export default function UserForm({
  user,
  setUser,
  editMode = false,
  getUsers,
  customer = false,
}) {
  const roles = [
    { idRole: 1, name: "Administrador", state: true },
    { idRole: 2, name: "Usuario", state: true },
  ];
  const [confirmPassword, setConfirmPassword] = useState(null);
  let [validated, setValidated] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: name === "idRole" ? parseInt(value) : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!e.currentTarget.checkValidity()) {
      e.stopPropagation();
    } else {
      swal({
        title: editMode ? "Editar usuario" : "Crear usuario",
        text: "Revisa todos los campos antes de enviar el formulario para evitar conflictos",
        icon: "warning",
        buttons: true,
      }).then(async (confirm) => {
        if (!confirm || user.password !== confirmPassword) return;
        if (editMode) {
          user.idUser = user.identification;
          const editUser = await UsersService.update(user.idUser, user);
          swal({
            title: editUser ? "Editado" : "Error",
            text: editUser
              ? "Los datos fueron editados correctamente"
              : "Ha ocurrido un error al editar la informacion",
            icon: editUser ? "success" : "error",
            timer: 2000,
            buttons: false,
          });
        } else {
          user.idUser = user.identification;
          user.idRole = 2;
          const createUser = await UsersService.create(user);
          swal({
            title: createUser ? "Creado" : "Error",
            text: createUser
              ? "El usuario fue creado correctamente"
              : "Ha ocurrido un error al crear el usuario",
            icon: createUser ? "success" : "error",
            timer: 2000,
            buttons: false,
          });
        }
        getUsers();
      });
    }

    setValidated(true);
  };

  const handleReset = () => {
    setUser(new Users());
    setConfirmPassword(null);
    setValidated(false);
  };

  return (
    <Form
      noValidate
      validated={validated}
      onSubmit={handleSubmit}
      onReset={handleReset}
      className="row p-1"
    >
      {!customer && (
        <label className="col-12">
          Rol:
          <select
            className="form-select form-select-sm my-2"
            name="idRole"
            value={user.idRole}
            onChange={handleChange}
            required
          >
            <option value="">Selecciona</option>
            {roles.map((role) => (
              <option key={role.idRole} value={role.idRole}>
                {role.name}
              </option>
            ))}
          </select>
          <small className="valid-feedback">Información correcta</small>
          <small className="invalid-feedback">Revisa los datos</small>
        </label>
      )}

      {/* identificacion */}
      <label className="col-12">
        Cedula:
        <div className="d-flex justify-content-between align-items-center my-2">
          <select
            className="form-select form-select-sm"
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
          <input
            type="text"
            className="form-control form-control-sm my-2"
            name="identification"
            value={user.identification}
            onChange={handleChange}
            pattern="^[a-z0-9]{6,}$"
            required
          />
        </div>
        <small className="valid-feedback">Información correcta</small>
        <small className="invalid-feedback">Revisa los datos</small>
      </label>

      {/* nombres */}
      <label className="col-12">
        Nombres:
        <input
          type="text"
          className="form-control form-control-sm my-2"
          name="name"
          value={user.name}
          onChange={handleChange}
          pattern="^[A-Z][a-zA-Z]+\s*(?:[a-zA-Z]+\s*)$"
          required
        />
        <small className="valid-feedback">Información correcta</small>
        <small className="invalid-feedback">Revisa los datos</small>
      </label>

      {/* Apellidos */}
      <label className="col-12">
        Apellidos:
        <input
          type="text"
          className="form-control form-control-sm my-2"
          name="lastName"
          value={user.lastName}
          onChange={handleChange}
          pattern="^[A-Z][a-zA-Z]+\s*(?:[a-zA-Z]+\s*)$"
          required
        />
        <small className="valid-feedback">Información correcta</small>
        <small className="invalid-feedback">Revisa los datos</small>
      </label>

      {/* correo */}
      <label className="col-12">
        Correo:
        <input
          type="email"
          className="form-control form-control-sm my-2"
          name="email"
          value={user.email}
          onChange={handleChange}
          pattern="^[a-z0-9.!#$%&*+/=?^_`{|}~-]+@[a-z0-9-]+\.[a-z0-9.]{2,}$"
          required
        />
        <small className="valid-feedback">Información correcta</small>
        <small className="invalid-feedback">Revisa los datos</small>
      </label>

      {/* contraseña */}
      <label className="col-6">
        Contraseña:
        <input
          type="password"
          className="form-control form-control-sm my-2"
          name="password"
          value={user.password}
          onChange={handleChange}
          pattern="^[a-z0-9.!#$%&*+/=?^_`{|}~-]{8,}$"
          min={confirmPassword}
          minLength={8}
          required
        />
        <small className="valid-feedback">Información correcta</small>
        <small className="invalid-feedback">Revisa los datos</small>
      </label>
      <label className="col-6">
        Confirm. contraseña:
        <input
          type="password"
          className="form-control form-control-sm my-2 my-2"
          name="confirmPassword"
          value={confirmPassword}
          onChange={(e) => {
            setConfirmPassword(e.target.value);
          }}
          required
        />
        <small className="valid-feedback">Información correcta</small>
        <small className="invalid-feedback">Revisa los datos</small>
      </label>

      {/* buttons */}
      <div className="buttons my-2">
        <button type="submit" className="btn btn-sm btn-primary">
          {editMode ? "Editar" : "Crear"}
        </button>
        <button type="reset" className="btn btn-sm btn-danger">
          Cancelar
        </button>
      </div>
    </Form>
  );
}
