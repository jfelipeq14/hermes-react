import { useState } from "react";
import { Customer } from "../../models/customer.model";
import { documentTypes } from "../../utilies/documentTypes";
import { phonePrefixes } from "../../utilies/phonePrefixes";
import { User } from "../../models/user.model";
import { Form } from "react-bootstrap";
import { messages } from "../../utilies/messages";
import { titles } from "../../utilies/titles";
import Alerts from "../../components/Alerts";

export default function CustomerForm() {
  const formCustomer = new Customer();
  const formUser = new User();
  const [customer, setCustomer] = useState(formCustomer);
  const [user, setUser] = useState(formUser);
  const [validated, setValidated] = useState(false);

  const [message, setMessage] = useState(messages);
  const [title, setTitle] = useState(titles);
  const [showAlert, setShowAlert] = useState(false);
  const clickAlert = () => {
    setShowAlert(!showAlert);
  };

  const handleChangeCustomer = (e) => {
    const { name, value, checked, type } = e.target;
    setCustomer({ ...customer, [name]: type === "checkbox" ? checked : value });
  };

  const handleChangeUser = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!e.currentTarget.checkValidity()) {
      e.stopPropagation();

      setMessage(messages.error.emptyFields);
      setTitle(title.error);
      setShowAlert(true);
    }

    setValidated(true);
  };

  var start = new Date();
  start.setFullYear(start.getFullYear() - 18);
  var limitDate = start.toISOString().split("T")[0];
  console.log(limitDate);

  return (
    <fieldset className="p-2">
      <legend>Datos personales</legend>
      <Form
        noValidate
        validated={validated}
        onSubmit={handleSubmit}
        className="row g-2"
      >
        {showAlert && (
              <Alerts
              message={message}
              title={title}
              clickAlert={clickAlert}
              handleChange={()=>null}
              />
            )}
        {/* identificacion */}
        <div className="col-12">
          <div className="row">
            <label htmlFor="identification" className="form-label">
              Cedula:
            </label>
            <div className="col-5">
              <select
                className="form-select"
                name="documentType"
                value={customer.documentType}
                onChange={handleChangeCustomer}
                required
              >
                {documentTypes.map((documentType) => (
                  <option key={documentType}>{documentType}</option>
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
                value={customer.identification}
                onChange={handleChangeCustomer}
                pattern="^[a-z0-9]{6,}$"
                required
              />
              <small className="valid-feedback">Todo bien!</small>
              <small className="invalid-feedback">Campo obligatorio</small>
            </div>
            <div className="col-2">
              <button
                className="btn btn-primary"
                onClick={() => {
                  console.log("buscar cliente");
                }}
              >
                🔍
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
            pattern="^[A-Z][a-zñ]{3,}[^\d\W_]*$"
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
            pattern="^[A-Z][a-zñ]{3,}[^\d\W_]*$"
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
                {phonePrefixes.map((phonePrefix) => (
                  <option key={phonePrefix.prefix}>{phonePrefix.prefix}</option>
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
        <div className="col-12">
          <input
            className="form-check-input"
            type="checkbox"
            name="travel"
            value={false}
            onChange={handleChangeCustomer}
          />
          <label className="form-check-label" htmlFor="travel">
            El cliente está incluido en el viaje
          </label>
        </div>
        <div className="buttons">
          <button type="submit" className="btn btn-primary">
            Crear
          </button>
          <button type="reset" className="btn btn-secondary">
            Limpiar
          </button>
        </div>
      </Form>
    </fieldset>
  );
}
