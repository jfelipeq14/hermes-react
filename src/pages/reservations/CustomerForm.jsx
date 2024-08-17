import { useState } from "react";
import { Customer } from "../../models/customer.model";
import { documentTypes } from "../../utilies/documentTypes";
import { phonePrefixes } from "../../utilies/phonePrefixes";
import { User } from "../../models/user.model";
import { Form } from "react-bootstrap";

export default function CustomerForm() {
  const formCustomer = new Customer();
  const formUser = new User();

  const [customer, setCustomer] = useState(formCustomer);
  const [user, setUser] = useState(formUser);
  const [error, setError] = useState(false);
  const [validated, setValidated] = useState(false);

  const handleChangeCustomer = (e) => {
    const { name, value, checked, type } = e.target;
    setCustomer({ ...customer, [name]: type === "checkbox" ? checked : value });
  };

  const handleChangeUser = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  // const PintarError = () => (
  //   <div className="alert alert-danger">Todos los campos obligatorios</div>
  // );

  return (
    <div className="container">
      {/* {error && <PintarError />} */}
      <Form noValidate validated={validated} onSubmit={handleSubmit} className="row g-3">
        <div className="form-group my-2">
          <label htmlFor="identification" className="col-12">
            Cedula:
          </label>
          <div className="d-flex justify-content-around">
            <select
              className="form-select"
              name="documentType"
              value={customer.documentType}
              onChange={handleChangeCustomer}
              required
            >
              <option selected>Seleccione</option>
              {documentTypes.map((documentType) => (
                <option key={documentType}>{documentType}</option>
              ))}
            </select>
            <input
              type="text"
              className="form-control"
              name="identification"
              value={customer.identification}
              onChange={handleChangeCustomer}
              required
            />
            <button className="btn btn-primary">🔍</button>
          </div>
          <div className="valid-feedback">
            <small>Todo bien!</small>
          </div>
          <div className="invalid-feedback">
            <small className="text-danger">Campo obligatorio</small>
          </div>
        </div>
        <div className="form-group my-2">
          <div className="row">
            <div className="col-sm-12 col-md-6">
              <label htmlFor="name">Nombres:</label>
              <input
                type="text"
                className="form-control"
                name="name"
                value={customer.name}
                onChange={handleChangeCustomer}
                required
              />
              <div className="valid-feedback">
                <small>Todo bien!</small>
              </div>
              <div className="invalid-feedback">
                <small className="text-danger">Campo obligatorio</small>
              </div>
            </div>
            <div className="col-sm-12 col-md-6">
              <label htmlFor="lastName">Apellidos:</label>
              <input
                type="text"
                className="form-control"
                name="lastName"
                value={customer.lastName}
                onChange={handleChangeCustomer}
                required
              />
              <div className="valid-feedback">
                <small>Todo bien!</small>
              </div>
              <div className="invalid-feedback">
                <small className="text-danger">Campo obligatorio</small>
              </div>
            </div>
          </div>
        </div>
        <div className="form-group my-2">
          <label htmlFor="phone" className="col-12">
            Celular:
          </label>
          <div className="row">
            <div className="d-flex justify-content-around">
              <select className="form-select" name="phonePrefix">
                <option selected>Seleccione</option>
                {phonePrefixes.map((phonePrefix) => (
                  <option
                    key={phonePrefix.prefix}
                  >{`${phonePrefix.country} (${phonePrefix.prefix})`}</option>
                ))}
              </select>
              <input
                type="text"
                className="form-control"
                name="phone"
                value={customer.phone}
                onChange={handleChangeCustomer}
              />
            </div>
          </div>
        </div>
        <div className="form-group my-2">
          <div className="row">
            <div className="col-sm-12 col-md-6">
              <label htmlFor="birthDate">Fecha de nacimiento:</label>
              <input
                type="date"
                className="form-control"
                name="dateOfBirth"
                value={customer.dateOfBirth}
                onChange={handleChangeCustomer}
              />
            </div>
            <div className="col-sm-12 col-md-6">
              <label htmlFor="age">Edad:</label>
              <input
                type="number"
                className="form-control"
                name="age"
                value={customer.age}
                readOnly
              />
            </div>
          </div>
        </div>
        <div className="form-group my-2">
          <div className="row">
            <div className="col-sm-12 col-md-6">
              <label htmlFor="email">Correo:</label>
              <input
                type="email"
                className="form-control"
                name="email"
                value={user.email}
                onChange={handleChangeUser}
              />
            </div>
            <div className="col-sm-12 col-md-6">
              <label htmlFor="emailConfirmation">Confirmación de correo:</label>
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
              />
            </div>
          </div>
        </div>
        <div className="form-group my-2">
          <div className="row">
            <div className="col-sm-12 col-md-6">
              <label htmlFor="password">Contraseña:</label>
              <input
                type="password"
                className="form-control"
                name="password"
                value={user.password}
                onChange={handleChangeUser}
              />
            </div>
            <div className="col-sm-12 col-md-6">
              <label htmlFor="passwordConfirmation">
                Confirmación de contraseña:
              </label>
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
              />
            </div>
          </div>
        </div>
        <div className="form-check my-2">
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
    </div>
  );
}