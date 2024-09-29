import {
  EyeIcon,
  MagnifyingGlassIcon,
  PencilSquareIcon,
  PlusCircleIcon,
} from "@heroicons/react/16/solid";
import Sidebar from "../layout/Sidebar";
import { NavLink } from "react-router-dom";
import { useState } from "react";

export default function Customers() {
  const [haveReservations, setHaveReservations] = useState('');

  const customers = [
    {
      id_customer: 1,
      idUser: 3,
      documentType: "CC",
      identification: "899213",
      name: "Juan",
      lastName: "Quintero",
      phone: "+573001234567",
      dateOfBirth: "2001-09-21",
      age: 22,
      address: "cl 9a",
      country: "Col",
      departament: "Ant",
      municipality: "Med",
      sex: "h",
      bloodType: "o+",
      eps: "Sura",
      state: true,
      reservas: [
        {
          id_reserva: 1,
          paquete: "Cartagena Fam",
          valor: 670000,
          fecha: "12/12/12",
          estado: "e",
          servicios: [
            {
              nombre: "Pesca",
              valor: 500000,
              cantidad: 1,
            },
            {
              nombre: "Lancha",
              valor: 70000,
              cantidad: 1,
            },
          ],
        },
      ],
    },
  ];

  const reservations = [
    {
      id_reservation: 1,
      paquete: "Cartagena Fam",
      valor: 670000,
      fecha: "12/12/12",
      estado: "e",
      servicios: [
        {
          nombre: "Pesca",
          valor: 500000,
          cantidad: 1,
        },
        {
          nombre: "Lancha",
          valor: 70000,
          cantidad: 1,
        },
      ],
    },
  ];

  return (
    <div className="row">
      <Sidebar></Sidebar>
      <main className="col-11">
        <div className="row">
          <fieldset className="col-sm-12 col-md-7">
            <legend>Clientes</legend>
            <NavLink
              to={{ pathname: "/reserve" }}
              state={{ identification: 0 }}
              className="btn btn-primary float-end"
            >
              <PlusCircleIcon width={25} />
              Crear
            </NavLink>
            <form className="row">
              <div className="col-6">
                <input
                  type="search"
                  id="identification"
                  className="form-control"
                  placeholder="Buscar"
                  onChange={(e) => console.log(e.target.value)}
                />
              </div>
              <div className="col-6">
                <button type="submit" className="btn">
                  <MagnifyingGlassIcon />
                </button>
              </div>
            </form>
            <table className="table table-striped my-2">
              <thead>
                <th scope="col">Acciones</th>
                <th scope="col">Identificacion</th>
                <th scope="col">Nombre</th>
                <th scope="col">Celular</th>
                <th scope="col">Estado</th>
                <th scope="col">Reservas</th>
              </thead>
              <tbody>
                {customers.map((customer) => (
                  <tr key={customer.id_customer}>
                    <td className="d-flex">
                      <button className="btn m-0 p-0">
                        <EyeIcon
                          width={25}
                          onClick={() => console.log(customer.id_customer)}
                        />
                      </button>
                      <NavLink
                        to={{ pathname: "administrator/reservations" }}
                        state={{ identification: customer.identification }}
                        className="btn m-0 p-0"
                      >
                        <PencilSquareIcon width={25} />
                      </NavLink>
                    </td>
                    <td>{customer.identification}</td>
                    <td>
                      {customer.name.trim()} {customer.lastName.trim()}
                    </td>
                    <td>{customer.phone}</td>
                    <td>{customer.state}</td>
                    <td>{customer.reservas.length}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </fieldset>
          {haveReservations && (
            <fieldset className="col-sm-12 col-md-5 p-5">
              <legend>Reservas del cliente</legend>
              <NavLink to="/reserve" className="btn btn-primary float-end">
                <PlusCircleIcon width={25} />
                Crear
              </NavLink>
              <table className="table table-striped my-2">
                <thead>
                  <th scope="col">Acciones</th>
                  <th scope="col">Paquete</th>
                  <th scope="col">Valor</th>
                  <th scope="col">Fecha</th>
                  <th scope="col">Estado</th>
                </thead>
                <tbody>
                  {reservations.map((reserve) => (
                    <tr key={reserve.paquete}>
                      <td className="d-flex">
                        <button className="btn m-0 p-0">
                          <EyeIcon
                            width={25}
                            color={haveReservations ? "blue" : "black"}
                            onClick={() =>
                              setHaveReservations(!haveReservations)
                            }
                          />
                        </button>
                        <button className="btn m-0 p-0">
                          <PencilSquareIcon width={25} />
                        </button>
                      </td>
                      <td>{reserve.paquete}</td>
                      <td>{reserve.valor}</td>
                      <td>{reserve.fecha}</td>
                      <td>{reserve.estado}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </fieldset>
          )}
        </div>
      </main>
    </div>
  );
}
