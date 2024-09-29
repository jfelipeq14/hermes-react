/* eslint-disable react/prop-types */
import { formatDate } from "@fullcalendar/core/index.js";
import { formattedPrice } from "../utilies/formattedPrice";
import { NavLink } from "react-router-dom";

export default function Package({
  destination,
  name,
  date,
  price,
  services = [],
  status,
}) {
  return (
    <div className="card shadow">
      <div className="card-img-top bg-center">
        <img src="/public/card.jpg" className="card-img-top" alt="destino" />
        <p className="position-absolute top-0 start-0 p-2 m-2 rounded shadow bg-light">
          {destination}
        </p>
      </div>

      <div className="container py-2">
        <div className="d-flex justify-content-between">
          <p className="text-muted">{name}</p>
          <p>{formatDate(date)}</p>
        </div>
        <div className="d-flex justify-content-between">
          <ul className="list-unstyled">
            {/* Realiza un map de los servicios que se incluyan como un item de la lista */}
            {services.map((service, index) => (
              <li key={index}>{service.name}</li>
            ))}
          </ul>
          <strong>{formattedPrice(price)} Persona</strong>
        </div>
        {status ? (
          <NavLink
            to={{ pathname: "/reserve" }}
            className="btn btn-primary m-2"
          >
            Reservar
          </NavLink>
        ) : (
          <button className="btn btn-danger m-2" disabled>
            Agotado
          </button>
        )}
      </div>
    </div>
  );
}
