import { useState } from "react";
import { documentTypes } from "../../utilies/documentTypes";
import { phonePrefixes } from "../../utilies/phonePrefixes";
import { Form } from "react-bootstrap";
import { Companion } from "../../models/companion.model";

export default function CompanionForm() {
  const formCompanion = new Companion();
  const [companion, setCompanion] = useState(formCompanion);
  const [validated, setValidated] = useState(false);

  const handleChangeCompanion = (e) => {
    const { name, value, checked, type } = e.target;
    setCompanion({
      ...companion,
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
          <div className="col-5">
            <select
              className="form-select"
              name="documentType"
              value={companion.documentType}
              onChange={handleChangeCompanion}
              required
            >
              <option selected>Selecciona</option>
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
              value={companion.identification}
              onChange={handleChangeCompanion}
              pattern="^[a-z0-9]{6,}$"
              required
            />
            <small className="valid-feedback">Todo bien!</small>
            <small className="invalid-feedback">Campo obligatorio</small>
          </div>
          <div className="col-2">
            <button className="btn btn-primary" onClick={onClickSearch}>
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
          value={companion.name}
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
          value={companion.lastName}
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
              value={companion.phone}
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
          value={companion.dateOfBirth}
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
          value={companion.age}
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
  );
}
