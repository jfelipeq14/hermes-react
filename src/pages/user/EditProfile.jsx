import { useState } from "react";
import { Form } from "react-bootstrap";
import { documentTypes } from "../../utilies/documentTypes";
import { phonePrefixes } from "../../utilies/phonePrefixes";
import Sidebar, { SidebarItem } from "../layout/Sidebar";
import { administrator } from "../../utilies/routes";
import { Customers } from "../../models/reservations/customers.model";
import { MagnifyingGlassIcon } from "@heroicons/react/16/solid";

export default function EditProfile({ isOpen, clickModal }) {
  const formCustomer = new Customers();
  const [customer, setCustomer] = useState(formCustomer);
  const [validated, setValidated] = useState(false);

  const handleChangeCustomer = (e) => {
    const { name, value, checked, type } = e.target;
    setCustomer({ ...customer, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!e.currentTarget.checkValidity()) {
      e.stopPropagation();
    }

    setValidated(true);

    clickModal(); // Cierra el formulario después de la actualización
  };

  var start = new Date();
  start.setFullYear(start.getFullYear() - 18);
  var limitDate = start.toISOString().split("T")[0];

  return (
    <div className="row">
      <Sidebar>
        {administrator.map((link) => {
          return (
            <SidebarItem
              key={link.name}
              name={link.name}
              href={link.href}
              icon={<link.icon width={30} />}
            />
          );
        })}
      </Sidebar>
      <main className="col-11">
        <div className="row p-5">
          <Form
            noValidate
            validated={validated}
            onSubmit={handleSubmit}
            className="row g-2"
          >
            <div className="row">
              <fieldset className="col-sm-12 col-md-6">
                <legend>Datos personales</legend>
                <div className="row">
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
                        <small className="invalid-feedback">
                          Campo obligatorio
                        </small>
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
                        <small className="invalid-feedback">
                          Campo obligatorio
                        </small>
                      </div>
                      <div className="col-2">
                        <button
                          className="btn"
                          onClick={() => {
                            console.log("buscar cliente", customer.identification);
                          }}
                        >
                          <MagnifyingGlassIcon></MagnifyingGlassIcon>
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
                    <small className="invalid-feedback">
                      Campo obligatorio
                    </small>
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
                    <small className="invalid-feedback">
                      Campo obligatorio
                    </small>
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
                            <option key={phonePrefix.prefix}>
                              {phonePrefix.prefix}
                            </option>
                          ))}
                        </select>
                        <small className="valid-feedback">Todo bien!</small>
                        <small className="invalid-feedback">
                          Campo obligatorio
                        </small>
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
                        <small className="invalid-feedback">
                          Campo obligatorio
                        </small>
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
                    <small className="invalid-feedback">
                      Campo obligatorio
                    </small>
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
                      value={customer.email}
                      onChange={handleChangeCustomer}
                      pattern="^[a-z0-9.!#$%&*+/=?^_`{|}~-]+@[a-z0-9-]+\.[a-z0-9.]{2,}$"
                      required
                    />
                    <small className="valid-feedback">Todo bien!</small>
                    <small className="invalid-feedback">
                      Campo obligatorio
                    </small>
                  </div>
                </div>
              </fieldset>
            </div>
            <div className="col-12 buttons my-3">
              <button type="submit" className="btn btn-primary">
                Crear
              </button>
              <button type="reset" className="btn btn-secondary">
                Cancelar
              </button>
            </div>
          </Form>
        </div>
      </main>
    </div>
  );
}
