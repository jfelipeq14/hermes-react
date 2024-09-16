//#region react imports
import { useState } from "react";
//#endregion
//#region models imports
import { Companions } from "../../models/reservations/companions.model";
//#endregion
//#region utilities imports
import { documentTypes } from "../../utilies/documentTypes";
import { phonePrefixes } from "../../utilies/phonePrefixes";
import { bloodType } from "../../utilies/bloodType";
//#endregion
//#region react-bootstrap imports
import { Form } from "react-bootstrap";
//#endregion
//#region complements imports
import { MagnifyingGlassIcon } from "@heroicons/react/16/solid";
import swal from "sweetalert";
//#endregion

// eslint-disable-next-line react/prop-types
export default function CompanionForm({ companions, setCompanions, setHaveCompanions,}) {
  // #region formData
  let formCompanion = new Companions();
  // #endregion

  //#region read props
  //#endregion

  //#region hooks
  let [companion, setCompanion] = useState(formCompanion);
  let [validated, setValidated] = useState(false);
  //#endregion

  // #region functions
  const onClickSearch = () => {
    console.log("Buscando...");
  };

  const handleChangeCompanion = (e) => {
    let { name, value, checked, type } = e.target;
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
  //#endregion

  return (
    <Form
      noValidate
      validated={validated}
      onSubmit={handleSubmit}
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
              className="form-select"
              name="documentType"
              value={companion.documentType}
              onChange={handleChangeCompanion}
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
            <button className="btn" onClick={onClickSearch}>
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
          value={companion.name}
          onChange={handleChangeCompanion}
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
          value={companion.lastName}
          onChange={handleChangeCompanion}
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
              className="form-select"
              name="phone"
              onChange={handleChangeCompanion}
              required
            >
              <option value="">Selecciona</option>
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
              value={companion.phone}
              onChange={handleChangeCompanion}
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
              onChange={handleChangeCompanion}
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
              onChange={handleChangeCompanion}
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
          className="form-select"
          name="bloodType"
          value={companion.bloodType}
          onChange={handleChangeCompanion}
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
          className="form-control"
          name="eps"
          value={companion.eps}
          onChange={handleChangeCompanion}
          pattern="^[A-Z][a-zA-Z]+\s*(?:[a-zA-Z]+\s*)$"
          required
        />
        <small className="valid-feedback">Todo bien!</small>
        <small className="invalid-feedback">Campo obligatorio</small>
      </div>
      {/* buttons */}
      <div className="buttons my-4">
        <button type="submit" className="btn btn-primary">
          Agregar
        </button>
        <button
          type="reset"
          className="btn btn-danger"
          onClick={() => {
            setHaveCompanions(false);
          }}
        >
          Cancelar
        </button>
      </div>
    </Form>
  );
}
