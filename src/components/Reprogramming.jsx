import { useState } from "react";
import { Customers } from "../models/reservations/customers.model";
import Calendar from "./Calendar";

// eslint-disable-next-line react/prop-types
export default function Reprogramming({clickModal}) {
  let formCustomer = new Customers();

  let [customer, setCustomer] = useState(formCustomer);

  const handleChangeCustomer = (e) => {
    let { name, value, checked, type } = e.target;
    setCustomer({
      ...customer,
      [name]: type === "checkbox" ? checked : value,
    });
  };
  return (
    <div className="container">
      <div className="row">
        <fieldset className="col-12">
          <legend>Cliente</legend>
          <form className="row">
            <label className="col">
              Identificacion:
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
            </label>
            <label className="col">
              Nombre:
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
            </label>
          </form>
        </fieldset>
      </div>

      <div className="row">
        <fieldset className="col-sm-12 col-md-10">
          <legend>Reprogramación</legend>
          <Calendar />
        </fieldset>
        <fieldset className="col-sm-12 col-md-2">
          <legend>Paquete</legend>
        </fieldset>
      </div>
      <div className="buttons my-2">
        <button className="btn btn-danger" onClick={clickModal}>Cancelar</button>
      </div>
    </div>
  );
}