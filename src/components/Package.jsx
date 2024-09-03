import { formatDate } from "@fullcalendar/core/index.js";
import { formattedPrice } from "../utilies/formattedPrice";
import { NavLink } from "react-router-dom";
import { PencilSquareIcon } from "@heroicons/react/16/solid";

// eslint-disable-next-line react/prop-types
export default function Package({
  key,
  address,
  name,
  date,
  price,
  services = [],
}) {
  return (
    <div className="col-sm-6 col-md-4 col-lg-3">
      <div className="card">
        <div className="card-img-top bg-center">
          <p className="position-absolute p-2">{address}</p>
        </div>

        <div className="d-flex justify-content-between">
          <p className="text-muted">{name}</p>
          <p>{formatDate(date)}</p>
        </div>
        <div className="d-flex justify-content-between">
          <ul className="list-unstyled">
            {/* Realiza un map de los servicios que se incluyan como un item de la lista */}
            {services.map((service, index) => (
              <li key={index}>{service}</li>
            ))}
          </ul>
          <strong>{formattedPrice(price)}</strong>
        </div>
        <NavLink
          to={{ pathname: "/reserve" }}
          state={{ index: key }}
          className="btn btn-primary m-2"
        >
          Reservar
        </NavLink>
      </div>
    </div>
  );
}
