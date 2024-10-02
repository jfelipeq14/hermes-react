/* eslint-disable react/prop-types */
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import { EllipsisVerticalIcon } from "@heroicons/react/16/solid";

const events = [
  {
    title: "Cartagena",
    id_programation: 1,
    start: new Date(),
    date_end: new Date(),
    date_execution: new Date(),
    date_ending: new Date(),
  },
  {
    title: "Guatape",
    id_programation: 2,
    start: new Date(),
    date_end: new Date(),
    date_execution: new Date(),
    date_ending: new Date(),
  },
];

let functionClick



export default function Calendar({ clicModal }) {
  functionClick = clicModal

  return (
    <FullCalendar
      plugins={[dayGridPlugin, interactionPlugin]}
      initialView="dayGridMonth"
      events={events}
      eventContent={renderEventContent}
      eventClick={clicModal}
      dateClick={clicModal}
      showNonCurrentDates={false}
      fixedWeekCount={false}
    />
  );
}

// a custom render function
const renderEventContent = (eventInfo) => {
  return (
    <>
      <div className="container w-100 p-0 m-0">
        <button type="button" className="btn p-0 m-0 fs-6" onClick={() => functionClick}>
          {eventInfo.event.title}
        </button>
      </div>
      <button
        className="btn p-0 m-0"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <EllipsisVerticalIcon width={20} className="m-0 p-0" />
      </button>
      <ul className="dropdown-menu m-0 p-0">
        <li>
          <a className="dropdown-item" href="#">
            Previsualizar clientes
          </a>
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
    </>
  );
};
