/* eslint-disable react/prop-types */
import { Form } from "react-bootstrap";
import swal from "sweetalert";
import { documentTypes } from "../../utilies/documentTypes";
import { useState } from "react";
import { UsersService } from "../../services/users.service";
import { Users } from "../../models/users/users.model";

export default function UserForm({ user, setUser, editMode, getUsers }) {
  const roles = [
    { idRole: 1, name: "Administrador", state: true },
    { idRole: 2, name: "Usuario", state: true },
  ];
  const [confirmPassword, setConfirmPassword] = useState(null);
  let [validated, setValidated] = useState(false);

  const handleChangeUser = (e) => {
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
          getUsers();
        } else {
          user.idUser = user.identification;
          user.idRole = 1;
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
          getUsers();
        }
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
      {/* Rol */}
      <div className="col-12">
        <label htmlFor="role" className="form-label">
          Rol:
        </label>
        <select
          className="form-select"
          name="idRole"
          value={user.idRole}
          onChange={handleChangeUser}
          required
        >
          <option value="">Selecciona</option>
          {roles.map((role) => (
            <option key={role.idRole} value={role.idRole}>
              {role.name}
            </option>
          ))}
        </select>
        <small className="valid-feedback">Todo bien!</small>
        <small className="invalid-feedback">Campo obligatorio</small>
      </div>
      {/* identificacion */}
      <div className="col-12">
        <div className="row">
          <label htmlFor="identification" className="form-label">
            Cedula:
          </label>
          <div className="col-3">
            <select
              className="form-select"
              name="documentType"
              value={user.documentType}
              onChange={handleChangeUser}
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
              onChange={handleChangeUser}
              pattern="^[a-z0-9]{6,}$"
              required
            />
            <small className="valid-feedback">Todo bien!</small>
            <small className="invalid-feedback">Campo obligatorio</small>
          </div>
        </div>
      </div>
      {/* correo */}
      <label className="col-12">
        Correo:
        <input
          type="email"
          className="form-control"
          name="email"
          value={user.email}
          onChange={handleChangeUser}
          pattern="^[a-z0-9.!#$%&*+/=?^_`{|}~-]+@[a-z0-9-]+\.[a-z0-9.]{2,}$"
          required
        />
        <small className="valid-feedback">Todo bien!</small>
        <small className="invalid-feedback">Campo obligatorio</small>
      </label>
      {/* contraseña */}
      <div className="col-6">
        <label htmlFor="password">Contraseña:</label>
        <input
          type="password"
          className="form-control"
          name="password"
          value={user.password}
          onChange={handleChangeUser}
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
  );
}
