/* eslint-disable react/prop-types */
//#region react imports
import { useState } from "react";
//#endregion

//#region utilities imports
import { documentTypes } from "../../../utilies/documentTypes";
import { phonePrefixes } from "../../../utilies/phonePrefixes";
//#endregion

//#region react-bootstrap imports
import { Form } from "react-bootstrap";
//#endregion

//#region complements imports
import swal from "sweetalert";
import { MagnifyingGlassIcon } from "@heroicons/react/16/solid";
import { Customers } from "../../../models/reservations/customers.model";
import { Users } from "../../../models/users/users.model";
//#endregion

export default function Customer({
  location,
  user,
  setUser,
  customer,
  setCustomer,
  companions,
  setCompanions,
  setHaveCompanions,
}) {
  //#region variables (datos quemados)
  let start = new Date();
  start.setFullYear(start.getFullYear() - 18);
  let limitDate = start.toISOString().split("T")[0];

  let travel = false;
  //#endregion

  //#region read props
  if (location.state)
    customer.identification = location.state.identification ?? 0;
  //#endregion

  //#region hooks
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
        title: "¿Quieres registrarte con estos datos?",
        text: "Revisa todos los campos antes de enviar el formulario para evitar inconvenientes con los datos. Si quieres revisar presiona cancelar",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      }).then((confirm) => {
        if (travel) {
          setCompanions([...companions, customer]);
        }
        setHaveCompanions(true);
        swal({
          title: confirm ? "Enviado" : "Cancelado",
          text: confirm
            ? "Los datos fueron enviados correctamente"
            : "Los datos no fueron enviados",
          icon: confirm ? "success" : "error",
          timer: 2000,
          buttons: false,
        });
      });
    }

    setValidated(true);
  };

  const handleReset = () => {
    setCustomer(new Customers());
    setUser(new Users());
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
      <div className="col-12">
        <div className="row">
          <label htmlFor="identification" className="form-label">
            Identificación:
          </label>
          <div className="col-5">
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
            <small className="valid-feedback">Todo bien!</small>
            <small className="invalid-feedback">Campo obligatorio</small>
          </div>
          <div className="col-5">
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
          <div className="col-2">
            <button className="btn">
              <MagnifyingGlassIcon width={25} />
            </button>
          </div>
        </div>
      </div>
      {/* nombres */}
      <div className="col-12">
        <label htmlFor="name">Nombres:</label>
        <input
          type="text"
          className="form-control"
          name="name"
          value={customer.name}
          onChange={handleChangeCustomer}
          pattern="^[A-Z][a-zA-Z]+\s*(?:[a-zA-Z]+\s*)$"
          required
        />
        <small className="valid-feedback">Todo bien!</small>
        <small className="invalid-feedback">Campo obligatorio</small>
      </div>
      {/* Apellidos */}
      <div className="col-12">
        <label htmlFor="lastName">Apellidos:</label>
        <input
          type="text"
          className="form-control"
          name="lastName"
          value={customer.lastName}
          onChange={handleChangeCustomer}
          pattern="^[A-Z][a-zA-Z]+\s*(?:[a-zA-Z]+\s*)$"
          required
        />
        <small className="valid-feedback">Todo bien!</small>
        <small className="invalid-feedback">Campo obligatorio</small>
      </div>
      {/* celular: Agregar el prefijo en el input de phone */}
      <div className="col-12">
        <label htmlFor="phone" className="col-12">
          Celular:
        </label>
        <div className="row">
          <div className="col-5">
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
            <small className="valid-feedback">Todo bien!</small>
            <small className="invalid-feedback">Campo obligatorio</small>
          </div>
          <div className="col-7">
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
          </div>
        </div>
      </div>
      {/* edad */}
      <div className="col-6">
        <label htmlFor="birthDate">Fecha de nacimiento:</label>
        <input
          type="date"
          className="form-control"
          name="dateOfBirth"
          value={customer.dateOfBirth}
          onChange={handleChangeCustomer}
          max={limitDate}
          required
        />
        <small className="valid-feedback">Todo bien!</small>
        <small className="invalid-feedback">Campo obligatorio</small>
      </div>
      <div className="col-6">
        <label htmlFor="age">Edad:</label>
        <input
          type="number"
          className="form-control"
          name="age"
          value={customer.age}
          readOnly
        />
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
      {/* check */}
      <label className="col-12">
        ¿El cliente está incluido en el viaje?
        <input
          className="form-check-input my-2"
          type="checkbox"
          name="travel"
          value={false}
          onChange={() => {
            travel = !travel;
          }}
        />
      </label>
      <div className="buttons my-3">
        <button type="submit" className="btn btn-primary">
          Crear
        </button>
        <button type="reset" className="btn btn-danger">
          Cancelar
        </button>
      </div>
    </Form>
  );
}
