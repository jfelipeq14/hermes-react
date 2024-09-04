import { formatDate } from "@fullcalendar/core/index.js";
import { administrator } from "../../utilies/routes";
import Sidebar, { SidebarItem } from "../layout/Sidebar";
import {
  EyeIcon,
  MagnifyingGlassIcon,
  PencilSquareIcon,
} from "@heroicons/react/16/solid";
import PayForm from "./PayForm";
import { NavLink } from "react-router-dom";

export default function Payment() {
  const payments = [ 
    {
      id_pay: 1,
      fecha_compromiso: formatDate(new Date()),
      fecha_pago: formatDate(new Date()),
      monto: 80000,
      estado: "R",
      cliente: "Juan Quintero",
      reserva: 1,
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
          <fieldset className="col-sm-12 col-md-6">
            <legend>Pagos</legend>
            <PayForm />
          </fieldset>
          <fieldset className="col-sm-12 col-md-6">
            <legend>Reservas</legend>
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
                <th scope="col">Fecha compromiso</th>
                <th scope="col">Fecha pago</th>
                <th scope="col">Monto</th>
                <th scope="col">Estado</th>
                <th scope="col">Cliente</th>
                <th scope="col">Reserva</th>
              </thead>
              <tbody>
                {payments.map((pay) => (
                  <tr key={pay.id_pay}>
                    <td className="d-flex">
                      <button className="btn m-0 p-0">
                        <EyeIcon width={25} />
                      </button>
                      <NavLink
                        to={{ pathname: "/payments" }}
                        state={{ index: pay.id_pay }}
                        className="btn m-0 p-0"
                      >
                        <PencilSquareIcon width={25} />
                      </NavLink>
                    </td>
                    <td>{pay.fecha_compromiso}</td>
                    <td>{pay.fecha_pago}</td>
                    <td>{pay.monto}</td>
                    <td>{pay.estado}</td>
                    <td>{pay.cliente}</td>
                    <td>{pay.reserva}</td>
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
