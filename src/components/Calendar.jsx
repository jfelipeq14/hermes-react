/* eslint-disable react/prop-types */
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import { EllipsisVerticalIcon } from "@heroicons/react/16/solid";
import { useState } from "react";
import Modals from "./Modals";
import CustomersList from "../pages/programming/CustomersList";
import { NavLink } from "react-router-dom";

const events = [
  {
    title: "Cartagena",
    idProgramming: 1,
    start: new Date().toISOString().split("T")[0],
    finish: new Date().toISOString().split("T")[0],
    dateExecute: new Date().toISOString().split("T")[0],
    dateFinish: new Date().toISOString().split("T")[0],
    status: "A",
  },
  {
    title: "Santa Marta",
    idProgramming: 2,
    start: new Date().toISOString().split("T")[0],
    finish: new Date().toISOString().split("T")[0],
    dateExecute: new Date().toISOString().split("T")[0],
    dateFinish: new Date().toISOString().split("T")[0],
    status: "S",
  },
  {
    title: "San Andres",
    idProgramming: 3,
    start: "2024-10-01",
    finish: new Date().toISOString().split("T")[0],
    dateExecute: new Date().toISOString().split("T")[0],
    dateFinish: new Date().toISOString().split("T")[0],
    status: "C",
  },
];

export default function Calendar({ clicModal }) {
  const [openModalCustomers, setOpenModalCustomers] = useState(false);
  return (
    <FullCalendar
      plugins={[dayGridPlugin, interactionPlugin]}
      initialView="dayGridMonth"
      events={events}
      eventContent={(eventInfo) => RenderEventContent(eventInfo, clicModal,openModalCustomers,setOpenModalCustomers)}
      eventColor="white"
      dateClick={clicModal}
      showNonCurrentDates={false}
      fixedWeekCount={false}
    />
  );
}

// a custom render function
const RenderEventContent = (eventInfo, clicModal,openModalCustomers,setOpenModalCustomers) => {
  const colorByStatus =
    eventInfo.event.extendedProps.status === "A"
      ? "success"
      : eventInfo.event.extendedProps.status === "S"
      ? "warning"
      : "danger";

  return (
    <div className={`  rounded bg-${colorByStatus}`}>
      <button
        className={`btn m-0 p-0 fs-6 btn-${colorByStatus}`}
        onClick={() => {
          clicModal(eventInfo);
        }}
      >
        {eventInfo.event.title}
      </button>
      <button
        className="btn p-0 m-0"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <EllipsisVerticalIcon width={20} className="m-0 p-0 z-3" />
      </button>
      <ul className="dropdown-menu m-0 p-0">
        <li>
          <button
            className="dropdown-item"
            onClick={() => {
              setOpenModalCustomers(!openModalCustomers);
            }}
          >
            Previsualizar clientes
          </button>
        </li>
        <li>
        <NavLink
            to={{ pathname: "/reserve" }}
             className="dropdown-item"
          >
            Crear reserva
          </NavLink>
        </li>
        <li>
        <button
            className="dropdown-item"
            onClick={() => {
              clicModal(eventInfo);
            }}
          >
            Editar Programación
          </button>
        </li>
      </ul>
      {openModalCustomers && (
        <Modals isOpen={openModalCustomers} clickModal={setOpenModalCustomers} size="lg">
          <CustomersList />
        </Modals>
      )}
    </div>
  );
};
