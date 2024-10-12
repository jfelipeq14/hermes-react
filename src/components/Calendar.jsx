/* eslint-disable react/prop-types */
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import { EllipsisVerticalIcon } from "@heroicons/react/16/solid";
import { useState } from "react";
import Modals from "./Modals";

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
  return (
    <FullCalendar
      plugins={[dayGridPlugin, interactionPlugin]}
      initialView="dayGridMonth"
      events={events}
      eventContent={(eventInfo) => RenderEventContent(eventInfo, clicModal)}
      eventColor="white"
      dateClick={clicModal}
      showNonCurrentDates={false}
      fixedWeekCount={false}
    />
  );
}

// a custom render function
const RenderEventContent = (eventInfo, clicModal) => {
  const colorByStatus =
    eventInfo.event.extendedProps.status === "A"
      ? "success"
      : eventInfo.event.extendedProps.status === "S"
      ? "warning"
      : "danger";

  const [openModal, setOpenModal] = useState(false);

  return (
    <div className={`container rounded bg-${colorByStatus}`}>
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
              setOpenModal(!openModal);
            }}
          >
            Previsualizar clientes
          </button>
        </li>
        <li>
          <a className="dropdown-item" href="#">
            Crear reserva
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="#">
            Editar programación
          </a>
        </li>
      </ul>
      {openModal && (
        <Modals isOpen={openModal} clickModal={setOpenModal}>
        </Modals>
      )}
    </div>
  );
};
