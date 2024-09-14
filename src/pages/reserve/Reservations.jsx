import { administrator } from "../../utilies/routes";
import Sidebar, { SidebarItem } from "../layout/Sidebar";
import {
  CalendarDateRangeIcon,
  ExclamationCircleIcon,
  EyeIcon,
  TicketIcon,
  UserPlusIcon,
} from "@heroicons/react/16/solid";
import CompanionForm from "./CompanionForm";

export default function Reservas() {
  const reservas = [
    {
      id_reservation: 0,
      id_detail_programming_package: 0,
      id_customer: 0,
      date_reservation: "2024-12-12",
      price_reservation: 240000,
      number_companions: 0,
      travel_customer: true,
      status: "C",
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
        <div className="row">
          <fieldset className="col-sm-12 col-md-4">
            <legend>Acompañantes</legend>
            <CompanionForm />
          </fieldset>
          <fieldset className="col-sm-12 col-md-8">
            <table className="table table-striped my-2">
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
                {reservas.map((reserva) => (
                  <tr key={reserva.id_reservation}>
                    <td className="d-flex">
                      <button className="btn m-0 p-0">
                        <EyeIcon width={25} />
                      </button>
                      <button className="btn m-0 p-0">
                        <UserPlusIcon width={25} />
                      </button>
                      <button className="btn m-0 p-0">
                        <UserPlusIcon width={25} />
                      </button>
                      <button className="btn m-0 p-0">
                        <CalendarDateRangeIcon width={25} />
                      </button>
                      <button className="btn m-0 p-0">
                        <TicketIcon width={25} />
                      </button>
                      <button className="btn m-0 p-0">
                        <ExclamationCircleIcon width={25} />
                      </button>
                    </td>
                    <td>{reserva.nombres}</td>
                    <td>{reserva.fechaInscripcion}</td>
                    <td>{reserva.fechaFinInscripcion}</td>
                    <td>{reserva.fechaEjecucion}</td>
                    <td>{reserva.valor}</td>
                    <td>{reserva.estado}</td>
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
