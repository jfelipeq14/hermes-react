import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";

// const events = [{ title: "Meeting", start: new Date() }];

export function Calendar() {
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
      id_programation: 1,
      start: "2024-08-08",
      date_end: new Date(),
      date_execution: new Date(),
      date_ending: new Date(),
    },
  ];
  return (
    <FullCalendar
      plugins={[dayGridPlugin]}
      initialView="dayGridMonth"
      events={events}
      eventContent={renderEventContent}
    />
  );
}

// a custom render function
function renderEventContent(eventInfo) {
  return (
      <div className="btn-group dropend">
        <button type="button" className="btn">
          {eventInfo.event.title}
        </button>
        <button
          type="button"
          className="btn dropdown-toggle dropdown-toggle-split"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
        </button>
        <ul className="dropdown-menu">
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
      </div>
  );
}
