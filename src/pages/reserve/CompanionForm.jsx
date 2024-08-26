import { useState } from "react";
import { documentTypes } from "../../utilies/documentTypes";
import { phonePrefixes } from "../../utilies/phonePrefixes";
import { Form } from "react-bootstrap";
import { Companion } from "../../models/companion.model";

export default function CompanionForm() {
  const formCompanion = new Companion();
  const [customer, setCompanion] = useState(formCompanion);
  const [validated, setValidated] = useState(false);

  const handleChangeCompanion = (e) => {
    const { name, value, checked, type } = e.target;
    setCompanion({
      ...customer,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
  };

  return (
    <fieldset>
      <legend>Datos personales</legend>

      <Form
        noValidate
        validated={validated}
        onSubmit={handleSubmit}
        className="row g-2"
      >
        {/* identificacion */}
        <div className="col-12">
          <div className="row">
            <label htmlFor="identification" className="form-label">
              Cedula:
            </label>
            <div className="col-10">
              <input
                type="text"
                className="form-control"
                name="identification"
                value={customer.identification}
                onChange={handleChangeCompanion}
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
            onChange={handleChangeCompanion}
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
            onChange={handleChangeCompanion}
            required
          />
          <small className="valid-feedback">Todo bien!</small>
          <small className="invalid-feedback">Campo obligatorio</small>
        </div>
        {/* celular */}
        <div className="col-12">
          <label htmlFor="phone" className="col-12">
            Celular:
          </label>
          <div className="row">
            <div className="col-5">
              <select className="form-select" name="phonePrefix" required>
                {phonePrefixes.map((phonePrefix) => (
                  <option
                    key={phonePrefix.prefix}
                  >{`(${phonePrefix.prefix}) - ${phonePrefix.country}`}</option>
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
                onChange={handleChangeCompanion}
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
            onChange={handleChangeCompanion}
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
