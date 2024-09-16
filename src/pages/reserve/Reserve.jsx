import { NavLink, useLocation } from "react-router-dom";
import { useState } from "react";

import {
  PencilSquareIcon,
  PlusIcon,
  TrashIcon,
} from "@heroicons/react/16/solid";

import CompanionForm from "./CompanionForm";
import CustomerForm from "./CustomerForm";
import PaymentForm from "./PaymentForm";
import Package from "../../components/Package";
import { Customers } from "../../models/reservations/customers.model";
import { Users } from "../../models/users/users.model";

export default function Reserve() {
  const location = useLocation();
  console.log(location.state);

  const [haveCompanions, setHaveCompanions] = useState(false);
  const [companions, setCompanions] = useState([]);

  const formCustomer = new Customers();
  let [customer, setCustomer] = useState(formCustomer);
  const formUser = new Users();
  let [user, setUser] = useState(formUser);

  let indexEdit = -1;

  return (
    <>
      <div className="row m-0 p-0 g-2">
        <fieldset className="col-sm-12 col-lg-4">
          <legend>Datos personales</legend>
          {haveCompanions && (customer.name || customer.lastName) ? (
            <CompanionForm
              companions={companions}
              setCompanions={setCompanions}
              setHaveCompanions={setHaveCompanions}
            />
          ) : (
            <CustomerForm
              location={location}
              user={user}
              setUser={setUser}
              customer={customer}
              setCustomer={setCustomer}
              companions={companions}
              setCompanions={setCompanions}
              setHaveCompanions={setHaveCompanions}
            />
          )}
        </fieldset>
        <fieldset className="col-sm-12 col-lg-6">
          <legend>Acompañantes</legend>
          <button
            className="btn btn-primary float-end"
            onClick={() => {
              setHaveCompanions(!haveCompanions);
            }}
          >
            <PlusIcon width={25} />
            Agregar
          </button>
          {/* crear tabla para los acompañantes de la reserva */}
          <table className="table table-striped my-2">
            <thead>
              <th scope="col">Acciones</th>
              <th scope="col">Identificacion</th>
              <th scope="col">Nombre</th>
              <th scope="col">Celular</th>
              <th scope="col">Sexo</th>
              <th scope="col">Tipo de sangre</th>
              <th scope="col">Eps</th>
            </thead>
            <tbody>
              {companions.map((companion) => (
                <tr key={companion.id_reserve_companion}>
                  <td className="d-flex">
                    <button className="btn m-0 p-0">
                      <TrashIcon
                        width={25}
                        onClick={() => {
                          let index = companions.findIndex(
                            (c) => c.identification === companion.identification
                          );
                          if (index < 0) return;
                          companions.splice(index, 1);
                          setCompanions([...companions]);
                        }}
                      />
                    </button>
                    <button className="btn m-0 p-0">
                      <PencilSquareIcon
                        width={25}
                        onClick={() => {
                          // Buscar un acompañante por su id
                          let index = companions.findIndex(
                            (c) => c.identification === companion.identification
                          );
                          if (!index) return;
                          indexEdit = index;
                          console.log(indexEdit);
                        }}
                      />
                    </button>
                  </td>
                  <td>{companion.identification}</td>
                  <td>
                    {companion.name.trim()} {companion.lastName.trim()}
                  </td>
                  <td>{companion.phone}</td>
                  <td>{companion.sex}</td>
                  <td>{companion.bloodType}</td>
                  <td>{companion.eps}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <fieldset>
            <legend>Cliente</legend>
            <form className="row justify-content-end align-items-end">
              {/* Agregar la informacion esencial de un cliente como: identificacion, nombres (nombres y apellidos en el mismo input) y el boton para ir a pagar */}
              <label className="col-4">
                Identificacion
                <input
                  type="text"
                  className="form-control"
                  value={user.identification}
                />
              </label>
              <label className="col-4">
                Nombre
                <input
                  type="text"
                  className="form-control"
                  value={`${customer.name} ${customer.lastName}`}
                />
              </label>
              <div className="col-4">
                <button className="btn btn-primary">Pagar</button>
                <NavLink
                  to={{ pathname: "/" }}
                  className="btn btn-danger"
                >
                  Cancelar
                </NavLink>
              </div>
            </form>
          </fieldset>
        </fieldset>
        <fieldset className="d-none d-lg-inline col-lg-2">
          <legend>Paquete</legend>
          <Package />
        </fieldset>
      </div>
      <div className="row m-0 p-0 g-2">
        <fieldset className="col-sm-12 col-lg-4">
          <a href="" className="float-end">
            Politicas de pago
          </a>
          <legend>Pago</legend>
          <PaymentForm />
        </fieldset>
      </div>
    </>
  );
}
