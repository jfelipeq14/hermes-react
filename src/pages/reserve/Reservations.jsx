import { Form } from "react-bootstrap";
import { administrator } from "../../utilies/routes";
import Sidebar, { SidebarItem } from "../layout/Sidebar";
import { useState } from "react";
import {
  CalendarDateRangeIcon,
  ExclamationCircleIcon,
  EyeIcon,
  TicketIcon,
  UserPlusIcon,
} from "@heroicons/react/16/solid";

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

  const [validated, setValidated] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!e.currentTarget.checkValidity()) {
      e.stopPropagation();
    }

    setValidated(true);
  };

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
          <fieldset className="col-sm-12 col-md-4">
            <legend>Acompañantes</legend>
            <Form
              noValidate
              validated={validated}
              onSubmit={handleSubmit}
              className="row g-2"
            ></Form>
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
                  <tr key={reserva.email}>
                    <td className="d-flex">
                      <button className="btn m-0 p-0">
                        <EyeIcon width={20} />
                      </button>
                      <button className="btn m-0 p-0">
                        <UserPlusIcon width={20} />
                      </button>
                      <button className="btn m-0 p-0">
                        <UserPlusIcon width={20} />
                      </button>
                      <button className="btn m-0 p-0">
                        <CalendarDateRangeIcon width={20} />
                      </button>
                      <button className="btn m-0 p-0">
                        <TicketIcon width={20} />
                      </button>
                      <button className="btn m-0 p-0">
                        <ExclamationCircleIcon width={20} />
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
