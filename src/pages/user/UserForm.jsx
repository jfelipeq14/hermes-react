/* eslint-disable react/prop-types */
import { Form } from "react-bootstrap";
import swal from "sweetalert";
import { documentTypes } from "../../utilies/documentTypes";
import { useState } from "react";
import { UsersService } from "../../services/users.service";

export default function UserForm({ user, setUser, editMode }) {
  const roles = [
    { idRole: 1, name: "Administrador", state: true },
    { idRole: 2, name: "Usuario", state: true },
  ];

  let [validated, setValidated] = useState(false);

  const handleChangeUser = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
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
        if (!confirm) return;
        if (editMode) {
          const editUser = await UsersService.update(user.idUser, user);
          if (editUser) {
            swal({
              title: "Editado",
              text: "Los datos fueron editados correctamente",
              icon: "success",
              timer: 2000,
              buttons: false,
            });
            return;
          } else {
            swal({
              title: "Error",
              text: "Ha ocurrido un error al editar el usuario",
              icon: "error",
              timer: 2000,
              buttons: false,
            });
            return;
          }
        } else {
          const createUser = await UsersService.create(user);
          if (!createUser) {
            swal({
              title: "Error",
              text: "Ha ocurrido un error al crear el usuario",
              icon: "error",
              timer: 2000,
              buttons: false,
            });
            return;
          }
          swal({
            title: "Creado",
            text: "El usuario fue creado correctamente",
            icon: "success",
            timer: 2000,
            buttons: false,
          });
        }
      });
    }

    setValidated(true);
  };

  return (
    <Form
      noValidate
      validated={validated}
      onSubmit={handleSubmit}
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
            <option key={role.idRole} value={role.idRole}>{role.name}</option>
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
      <div className="col-6">
        <label htmlFor="email">Correo:</label>
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
      </div>
      <div className="col-6">
        <label htmlFor="emailConfirmation">Confir. correo:</label>
        <input
          type="email"
          className="form-control"
          name="emailConfirmation"
          value={user.email}
          onChange={(e) => {
            if (user.email === e.target.value) {
              return;
            }
          }}
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
          name="passwordConfirmation"
          value={user.password}
          onChange={(e) => {
            if (user.password === e.target.value) {
              return;
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
  );
}
