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
          <div className="container p-0 m-0">
            <strong>Incluye: </strong>
            <ul className="list-unstyled">
              {services.map((service, index) => (
                <li key={index}>{service.name}</li>
              ))}
            </ul>
          </div>

          <div className="d-flex flex-column">
            <strong>{formattedPrice(price)}</strong>
            <small className="text-end">Por persona</small>
          </div>
        </div>
        {status ? (
          <NavLink
            to={{ pathname: "/reserve" }}
            className=" btn btn-sm btn-primary m-2"
          >
            Reservar
          </NavLink>
        ) : (
          <button className=" btn btn-sm btn-danger m-2" disabled>
            Agotado
          </button>
        )}
      </div>
    </div>
  );
}
