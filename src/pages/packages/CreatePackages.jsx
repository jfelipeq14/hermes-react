import { useState } from "react";
import { Package } from "../../models/package.model";
import { Form } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { PlusCircleIcon } from "@heroicons/react/16/solid";
import Sidebar, { SidebarItem } from "../layout/Sidebar";
import { administrator } from "../../utilies/routes";


export default function CustomerForm() {
  const formPackage = new Package();
  const services = []

  const [pack, setPackage] = useState(formPackage);
  const [validated, setValidated] = useState(false);
  const service = []

  const handleChangeCustomer = (e) => {
    const { name, value, checked, type } = e.target;
    setPackage({ ...pack, [name]: type === "checkbox" ? checked : value });
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
    <div className="row">
            <Sidebar>
        {administrator.map((link) => {
          return (
            <SidebarItem
              key={link.href}
              icon={<link.icon />}
              text={link.name}
            />
          );
        })}
      </Sidebar>
        <fieldset className="col-sm-11 col-md-5">
      <legend>Paquete</legend>

      <Form
        noValidate
        validated={validated}
        onSubmit={handleSubmit}
        className="row g-2"
      >
        {/* nombres */}
        <div className="col-12">
          <label htmlFor="name">Nombre:</label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={pack.name}
            onChange={handleChangeCustomer}
            pattern="^[A-Z][a-zñ]{3,}[^\d\W_]*$"
            required
          />
          <small className="valid-feedback">Todo bien!</small>
          <small className="invalid-feedback">Campo obligatorio</small>
        </div>
        {/* Destino */}
        <div className="col-12">
          <label htmlFor="destination">Destino:</label>
          <input
            type="text"
            className="form-control"
            name="destination"
            value={pack.destination}
            onChange={handleChangeCustomer}
            pattern="^[A-Z][a-zñ]{3,}[^\d\W_]*$"
            required
          />
          <small className="valid-feedback">Todo bien!</small>
          <small className="invalid-feedback">Campo obligatorio</small>
        </div>
        {/* image */}
        <div className="col-12">
          <label htmlFor="image" className="col-12">
            Imagen:
          </label>
          <div className="row">
            <div className="col-7">
              <input
                type="text"
                className="form-control"
                name="image"
                value={pack.image}
                onChange={handleChangeCustomer}
                pattern="^\+?[0-9]{1,3}[0-9]{6,}$"
                required
              />
              <small className="valid-feedback">Todo bien!</small>
              <small className="invalid-feedback">Campo obligatorio</small>
            </div>
            <div className="col-5">
              <button className="btn btn-primary">Cargar</button>
            </div>
          </div>
        </div>
        <div className="col-12">
          <label htmlFor="image" className="col-12">
            Servicios:
          </label>
          <div className="row">
            <div className="col-6">
            <select
                className="form-select"
                name="documentType"
                value={pack.services}
                onChange={handleChangeCustomer}
                required
              >
                {service.map((serviceItem) => (
                  <option key={serviceItem}>{serviceItem}</option>
                ))}
              </select>
              <small className="valid-feedback">Todo bien!</small>
              <small className="invalid-feedback">Campo obligatorio</small>
            </div>
            <div className="col-6">
              <input
                type="text"
                className="form-control"
                name="image"
                value={pack.image}
                onChange={handleChangeCustomer}
                pattern="^\+?[0-9]{1,3}[0-9]{6,}$"
                required
              />
              <small className="valid-feedback">Todo bien!</small>
              <small className="invalid-feedback">Campo obligatorio</small>
            </div>
              <button className="btn btn-primary w-25">Cargar</button>
          </div>
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
    <fieldset className="col-sm-11 col-md-5">
              <legend>Servicios</legend>
              <header className="d-flex justify-content-end align-items-end">
                <div className="buttons">
                  <NavLink
                    to="packs"
                    className={
                      "btn btn-primary d-flex align-items-center justify-content-center gap-2"
                    }
                  >
                    <PlusCircleIcon width={20} />
                    Crear
                  </NavLink>
                </div>
              </header>
              <table className="table table-striped my-2">
                <thead> 
                  <th scope="col">Nombre</th>
                  <th scope="col">Valor</th>
                  <th scope="col">Cantidad</th>
                </thead>
                <tbody>
                  {service.map((row) => (
                    <tr key={row.paquete}>
                      <td>{row.nombre}</td>
                      <td>{row.valor}</td>
                      <td>{row.cantidad}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </fieldset>
    </div>

  );
}
