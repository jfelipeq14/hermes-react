import {
  EyeIcon,
  PencilSquareIcon,
  PlusCircleIcon,
} from "@heroicons/react/16/solid";
import { administrator } from "../utilies/routes";
import Sidebar, { SidebarItem } from "./layout/Sidebar";
import { NavLink } from "react-router-dom";

export default function Customers() {
  const customer = [
    {
      id_customer: 1,
      id_user: 3,
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
      healthPosition: "Monterrey",
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

  const reserve = [
    {
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
          <fieldset className="col-sm-12 col-md-6">
            <legend>Clientes</legend>
            <header className="d-flex justify-content-between align-items-end my-2">
              <div className="form-group">
                <input
                  type="text"
                  id="identification"
                  className="form-control"
                  onChange={(e) => console.log(e.target.value)}
                  placeholder="Buscar"
                />
              </div>
              <NavLink
                to={{ pathname: "/reserve" }}
                state={{ identification: null }}
                className={
                  "btn btn-primary d-flex align-items-center justify-content-center gap-2"
                }
              >
                <PlusCircleIcon width={20} />
                Crear
              </NavLink>
            </header>
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
                {customer.map((row) => (
                  <tr key={row.id_customer}>
                    <td className="d-flex">
                      <EyeIcon
                        width={20}
                        onClick={() => console.log(row.id_customer)}
                      />
                      <NavLink
                        to={{ pathname: "/reserve" }}
                        state={{ identification: row.identification }}
                        className="text-white"
                      >
                        <PencilSquareIcon width={20} />
                      </NavLink>
                    </td>
                    <td>{row.identification}</td>
                    <td>
                      {row.name.trim()} {row.lastName.trim()}
                    </td>
                    <td>{row.phone}</td>
                    <td>{row.state}</td>
                    <td>{row.reservas.length}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </fieldset>
          <fieldset className="col-sm-12 col-md-6">
            <legend>Reservas</legend>
            <header className="d-flex justify-content-end align-items-end">
              <NavLink
                to="/reserve"
                className={
                  "btn btn-primary d-flex align-items-center justify-content-center gap-2"
                }
              >
                <PlusCircleIcon width={20} />
                Crear
              </NavLink>
            </header>
            <table className="table table-striped my-2">
              <thead>
                <th scope="col">Acciones</th>
                <th scope="col">Paquete</th>
                <th scope="col">Valor</th>
                <th scope="col">Fecha</th>
                <th scope="col">Estado</th>
              </thead>
              <tbody>
                {reserve.map((row) => (
                  <tr key={row.paquete}>
                    <td className="d-flex">
                      <EyeIcon width={20} />
                      <PencilSquareIcon width={20} />
                    </td>
                    <td>{row.paquete}</td>
                    <td>{row.valor}</td>
                    <td>{row.fecha}</td>
                    <td>{row.estado}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </fieldset>
        </div>
      </main>
    </div>
  );
}
