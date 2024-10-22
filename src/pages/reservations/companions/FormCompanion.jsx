/* eslint-disable react/prop-types */

//#region react imports
import { useState } from "react";
//#endregion

//#region react-bootstrap imports
import { Form } from "react-bootstrap";
//#endregion

//#region models imports
import { Companions } from "../../../models/reservations/companions.model.js";
//#endregion

//#region utilities imports
import { documentTypes } from "../../../utilies/documentTypes.js";
import { phonePrefixes } from "../../../utilies/phonePrefixes";
import { bloodType } from "../../../utilies/bloodType";

import { MagnifyingGlassIcon } from "@heroicons/react/16/solid";
import swal from "sweetalert";
//#endregion

export default function FormCompanion({
  companions,
  setCompanions,
  setHaveCompanions,
}) {
  //#region hooks
  const [companion, setCompanion] = useState(new Companions());
  const [validated, setValidated] = useState(false);
  //#endregion

  // #region functions
  const onClickSearch = () => {
    console.log("Buscando...");
  };

  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;

    setCompanion({
      ...companion,
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

      setCompanion({
        ...companion,
        dateOfBirth: value,
        age: age,
      });
    }
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
        dangerMode: true,
      }).then((confirm) => {
        if (confirm) {
          setCompanions([...companions, companion]);
          setCompanion(new Companions());
          swal({
            title: "Enviado",
            text: "Los datos fueron enviados correctamente",
            icon: "success",
            timer: 2000,
            buttons: false,
          });
        } else {
          swal({
            title: "Cancelado",
            text: "Los datos no se han enviado",
            icon: "error",
            timer: 2000,
            buttons: false,
          });
        }
      });
    }

    setValidated(true);
  };

  const handleReset = () => {
    setCompanion(new Companions());
    setValidated(false);
  };

  //#endregion

  return (
    <fieldset className="  p-2">
      <legend>Acompañante</legend>
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
              Cedula:
            </label>
            <div className="col-5">
              <select
                className="form-select form-select-sm my-2"
                name="documentType"
                value={companion.documentType}
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
            <div className="col-5">
              <input
                type="text"
                className="form-control form-control-sm my-2"
                name="identification"
                value={companion.identification}
                onChange={handleChange}
                pattern="^[a-z0-9]{6,}$"
                required
              />
              <small className="valid-feedback">Todo bien!</small>
              <small className="invalid-feedback">Campo obligatorio</small>
            </div>
            <div className="col-2">
              <button className="btn" onClick={onClickSearch}>
                <MagnifyingGlassIcon width={20} />
              </button>
            </div>
          </div>
        </div>
        {/* nombres */}
        <div className="col-12">
          <label htmlFor="name">Nombres:</label>
          <input
            type="text"
            className="form-control form-control-sm my-2"
            name="name"
            value={companion.name}
            onChange={handleChange}
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
            className="form-control form-control-sm my-2"
            name="lastName"
            value={companion.lastName}
            onChange={handleChange}
            pattern="^[A-Z][a-zA-Z]+\s*(?:[a-zA-Z]+\s*)$"
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
              <select
                className="form-select form-select-sm my-2"
                name="phone"
                onChange={handleChange}
                required
              >
                <option value="">Selecciona</option>
                {phonePrefixes.map((phonePrefix) => (
                  <option key={phonePrefix.country}>
                    {phonePrefix.prefix}
                  </option>
                ))}
              </select>
              <small className="valid-feedback">Todo bien!</small>
              <small className="invalid-feedback">Campo obligatorio</small>
            </div>
            <div className="col-7">
              <input
                type="text"
                className="form-control form-control-sm my-2"
                name="phone"
                value={companion.phone}
                onChange={handleChange}
                pattern="^\+?[0-9]{1,3}[0-9]{7,}$"
                required
              />
              <small className="valid-feedback">Todo bien!</small>
              <small className="invalid-feedback">Campo obligatorio</small>
            </div>
          </div>
        </div>
        {/* sexo */}
        <div className="col-12">
          <div className="row">
            <label htmlFor="sex" className="col-12">
              Sexo:
            </label>
            <div className="col-sm-12 col-md-6">
              <input
                type="radio"
                name="sex"
                value="H"
                onChange={handleChange}
              />
              <label htmlFor="sex" className="mx-4">
                Hombre
              </label>
            </div>
            <div className="col-sm-12 col-md-6">
              <input
                type="radio"
                name="sex"
                value="M"
                onChange={handleChange}
              />
              <label htmlFor="sex" className="mx-4">
                Mujer
              </label>
            </div>
          </div>
        </div>
        {/* tipo de sangre */}
        <div className="col-12">
          <label htmlFor="phone" className="col-12">
            Tipo de sangre:
          </label>
          <select
            className="form-select form-select-sm my-2"
            name="bloodType"
            value={companion.bloodType}
            onChange={handleChange}
            required
          >
            <option value="">Selecciona</option>
            {bloodType.map((blood, index) => (
              <option key={index}>{blood}</option>
            ))}
          </select>
          <small className="valid-feedback">Todo bien!</small>
          <small className="invalid-feedback">Campo obligatorio</small>
        </div>
        {/* eps */}
        <div className="col-12">
          <label htmlFor="eps">EPS:</label>
          <input
            type="text"
            className="form-control form-control-sm my-2"
            name="eps"
            value={companion.eps}
            onChange={handleChange}
            pattern="^[A-Z][a-zA-Z]+\s*(?:[a-zA-Z]+\s*)$"
            required
          />
          <small className="valid-feedback">Todo bien!</small>
          <small className="invalid-feedback">Campo obligatorio</small>
        </div>
        {/* buttons */}
        <div className="buttons my-4">
          <button type="submit" className=" btn btn-sm btn-primary">
            Agregar
          </button>
          <button
            type="reset"
            className=" btn btn-sm btn-danger"
            onClick={() => {
              setHaveCompanions(false);
            }}
          >
            Cancelar
          </button>
        </div>
      </Form>
    </fieldset>
  );
}
