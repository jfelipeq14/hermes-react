/* eslint-disable react/prop-types */

//#region react imports
import { useState } from "react";
//#endregion

//#region react-bootstrap imports
import { Form } from "react-bootstrap";
//#endregion

//#region utilities imports
import { documentTypes } from "../../utilies/documentTypes";
import { phonePrefixes } from "../../utilies/phonePrefixes";

import swal from "sweetalert";
import { MagnifyingGlassIcon } from "@heroicons/react/16/solid";
//#endregion



//#region models imports
import { Users } from "../../models/users/users.model";
import { Customers } from "../../models/reservations/customers.model";
//#endregion

export default function CustomerForm({ user, setUser, customer, setCustomer }) {
  //#region variables (datos quemados)
  let start = new Date();
  start.setFullYear(start.getFullYear() - 18);
  let limitDate = start.toISOString().split("T")[0];
  //#endregion

  //#region hooks
  const [confirmPassword, setConfirmPassword] = useState(null);
  let [validated, setValidated] = useState(false);
  //#endregion

  // #region functions
  const handleChangeCustomer = (e) => {
    let { name, value, checked, type } = e.target;
    setCustomer({
      ...customer,
      [name]: type === "checkbox" ? checked : value,
    });
    if (name === "dateOfBirth") {
      let birthDate = new Date(value);
      let today = new Date();
      let age = today.getFullYear() - birthDate.getFullYear();
      let monthDifference = today.getMonth() - birthDate.getMonth();
      let dayDifference = today.getDate() - birthDate.getDate();

      // Ajustar la edad si el cumpleaños aún no ha ocurrido este año
      if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
        age--;
      }

      setCustomer({
        ...customer,
        dateOfBirth: value,
        age: age,
      });
    }
  };

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
        title: "¿Quieres actualizar estos datos?",
        text: "Revisa todos los campos antes de enviar el formulario para evitar conflictos",
        icon: "warning",
        buttons: true,
      }).then((confirm) => {
        swal({
          title: confirm ? "Enviado" : "Cancelado",
          text: confirm
            ? "Los datos fueron actualizados correctamente"
            : "Se cancelo el envio de datos",
          icon: confirm ? "success" : "error",
          timer: 2000,
          buttons: false,
        });
      });
    }

    setValidated(true);
  };

  const handleReset = () => {
    setUser(new Users());
    setCustomer(new Customers())
    setConfirmPassword(null);
    setValidated(false);
  };
  //#endregion

  return (
    <Form
      noValidate
      validated={validated}
      onSubmit={handleSubmit}
      onReset={handleReset}
      className="row p-1"
    >
      {/* identificacion */}
      <label className="col-12">
        Identificación:
        <select
          className="form-select"
          name="documentType"
          value={user.documentType}
          onChange={handleChangeUser}
          required
        >
          <option value="">Selecciona</option>
          {documentTypes.map((documentType, index) => (
            <option key={index} value={documentType}>
              {documentType}
            </option>
          ))}
        </select>
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
        <button className="btn">
          <MagnifyingGlassIcon width={25} />
        </button>
      </label>

      {/* nombres */}
      <label className="col-12">
        Nombres:
        <input
          type="text"
          className="form-control"
          name="name"
          value={user.name}
          onChange={handleChangeUser}
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
          className="form-control"
          name="lastName"
          value={user.lastName}
          onChange={handleChangeUser}
          pattern="^[A-Z][a-zA-Z]+\s*(?:[a-zA-Z]+\s*)$"
          required
        />
        <small className="valid-feedback">Información correcta</small>
        <small className="invalid-feedback">Revisa los datos</small>
      </label>

      {/* celular: Agregar el prefijo en el input de phone */}
      <label className="col-12">
        Celular:
        <select
          className="form-select"
          name="phone"
          onChange={handleChangeCustomer}
          required
        >
          <option>Selecciona</option>
          {phonePrefixes.map((phonePrefix) => (
            <option key={phonePrefix.country}>{phonePrefix.prefix}</option>
          ))}
        </select>
        <input
          type="text"
          className="form-control"
          name="phone"
          value={customer.phone}
          onChange={handleChangeCustomer}
          pattern="^\+?[0-9]{1,3}[0-9]{7,}$"
          required
        />
        <small className="valid-feedback">Todo bien!</small>
        <small className="invalid-feedback">Campo obligatorio</small>
      </label>

      {/* edad */}
      <label className="col-6">
        Fecha de nacimiento:
        <input
          type="date"
          className="form-control my-2"
          name="dateOfBirth"
          value={customer.dateOfBirth}
          onChange={handleChangeCustomer}
          max={limitDate}
          required
        />
        <small className="valid-feedback">Todo bien!</small>
        <small className="invalid-feedback">Campo obligatorio</small>
      </label>
      <label className="col-6">
        Edad:
        <input
          type="number"
          className="form-control my-2"
          name="age"
          value={customer.age}
          readOnly
        />
      </label>

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
      <label className="col-6">
        Contraseña:
        <input
          type="password"
          className="form-control"
          name="password"
          value={user.password}
          onChange={handleChangeUser}
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
          className="form-control my-2"
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
      <div className="buttons my-4">
        <button type="submit" className="btn btn-primary">
          Actualizar
        </button>
        <button type="reset" className="btn btn-danger">
          Cancelar
        </button>
      </div>
    </Form>
  );
}
