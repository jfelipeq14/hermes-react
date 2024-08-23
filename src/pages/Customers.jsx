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
      cedula: "899",
      nombres: "Juan Goleador",
      celular: "687",
      correo: "jf@gmail.com",
      reservas: 4,
      state: true,
    },
    {
      cedula: "008",
      nombres: "Juan Guti",
      celular: "567",
      correo: "jg@gmail.com",
      reservas: 5,
      state: false,
    },
  ];

  const reservations = [
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
              <div className="btn-group">
                <NavLink
                  to="/reservations"
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
                <th scope="col">Acciones</th>
                <th scope="col">Cedula</th>
                <th scope="col">Nombre</th>
                <th scope="col">Celular</th>
                <th scope="col">Correo</th>
                <th scope="col">Reservas</th>
              </thead>
              <tbody>
                {customer.map((row) => (
                  <tr key={row.email}>
                    <td className="d-flex">
                      <EyeIcon width={20} />
                      <PencilSquareIcon width={20} />
                    </td>
                    <td>{row.cedula}</td>
                    <td>{row.nombres}</td>
                    <td>{row.celular}</td>
                    <td>{row.correo}</td>
                    <td>{row.reservas}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </fieldset>
          <fieldset className="col-sm-12 col-md-6">
            <legend>Reservas</legend>
            <header className="d-flex justify-content-end align-items-end">
              <div className="buttons">
                <NavLink
                  to="/reservations"
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
                <th scope="col">Acciones</th>
                <th scope="col">Paquete</th>
                <th scope="col">Valor</th>
                <th scope="col">Fecha</th>
                <th scope="col">Estado</th>
              </thead>
              <tbody>
                {reservations.map((row) => (
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
