import {
  EyeIcon,
  PencilSquareIcon,
  PlusCircleIcon,
} from "@heroicons/react/16/solid";
import { administrator } from "../../utilies/routes";
import Sidebar, { SidebarItem } from "../layout/Sidebar";
import { NavLink } from "react-router-dom";

export default function Packs() {
  const packs = [
    {
      nombres: "Cartagena",
      fechaInscripcion: "24/08/2024",
      fechaFinInscripcion: "30/08/2024",
      fechaEjecucion: "10/09/2024",
      valor: 670000,
      estado: "Activo",
    },
    {
      nombres: "Barranquilla",
      fechaInscripcion: "13/08/2024",
      fechaFinInscripcion: "20/08/2024",
      fechaEjecucion: "30/08/2024",
      valor: 800000,
      estado: "Inactivo",
    },
  ];

  const services = [
    {
      nombre: "Visita Muralla ",
      valor: 45000,
      cantidad: 1,
    },
    {
      nombre: "Lancha",
      valor: 30000,
      cantidad: 1,
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
        <div className="row p-2">
          <fieldset className="col-sm-12 col-md-7">
            <legend>Paquetes</legend>
            <header className="row">
              <div className="col-6">
                <input
                  type="text"
                  id="identification"
                  className="form-control"
                  placeholder="Buscar"
                  onChange={(e) => console.log(e.target.value)}
                />
              </div>
              <div className="col-6">
                <div className="buttons float-end">
                  <NavLink
                    to="/create-packs"
                    className={
                      "btn btn-primary d-flex align-items-center justify-content-center gap-2"
                    }
                  >
                    <PlusCircleIcon width={25} />
                    Crear
                  </NavLink>
                </div>
              </div>
            </header>
            <table className="table table-striped">
              <thead>
                <th scope="col">Acciones</th>
                <th scope="col">Nombre</th>
                <th scope="col">FechaInscr</th>
                <th scope="col">FechaFin</th>
                <th scope="col">FechaEjecu</th>
                <th scope="col">Valor</th>
                <th scope="col">Estado</th>
              </thead>
              <tbody>
                {packs.map((pack) => (
                  <tr key={pack.email}>
                    <td className="d-flex">
                      <button className="btn m-0 p-0">
                        <EyeIcon width={25} />
                      </button>
                      <button className="btn m-0 p-0">
                        <PencilSquareIcon width={25} />
                      </button>
                    </td>
                    <td>{pack.nombres}</td>
                    <td>{pack.fechaInscripcion}</td>
                    <td>{pack.fechaFinInscripcion}</td>
                    <td>{pack.fechaEjecucion}</td>
                    <td>{pack.valor}</td>
                    <td>{pack.estado}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </fieldset>
          <fieldset className="col-sm-12 col-md-5">
            <legend>Servicios</legend>
            <header className="row">
              <div className="col">
                <div className="buttons float-end">
                  <NavLink
                    to="packs"
                    className={
                      "btn btn-primary d-flex align-items-center justify-content-center gap-2"
                    }
                  >
                    <PlusCircleIcon width={25} />
                    Crear
                  </NavLink>
                </div>
              </div>
            </header>
            <table className="table table-striped my-2">
              <thead>
                <th scope="col">Nombre</th>
                <th scope="col">Valor</th>
                <th scope="col">Cantidad</th>
              </thead>
              <tbody>
                {services.map((service) => (
                  <tr key={service.paquete}>
                    <td>{service.nombre}</td>
                    <td>{service.valor}</td>
                    <td>{service.cantidad}</td>
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
