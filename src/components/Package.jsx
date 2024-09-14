import { formatDate } from "@fullcalendar/core/index.js";
import { formattedPrice } from "../utilies/formattedPrice";
import { NavLink } from "react-router-dom";

export default function Package() {
  const services = [
    {
      id_service: 1,
      id_categoryService: 1,
      name: "Transporte",
      price: 180000,
      status: true,
    },
    {
      id_service: 2,
      id_categoryService: 2,
      name: "Pesca",
      price: 20000,
      status: true,
    },
  ];
  
  const packageData = {
    id_package: 1,
    name: "Navidad en cartagena",
    destination: "Cartagena",
    price: 580000,
    status: true,
  }

  return (
    <div className="card">
        <div className="card-img-top bg-center">
          <p className="position-absolute p-2">{packageData.destination}</p>
        </div>

        <div className="d-flex justify-content-between">
          <p className="text-muted">{packageData.name}</p>
          <p>{formatDate()}</p>
        </div>
        <div className="d-flex justify-content-between">
          <ul className="list-unstyled">
            {/* Realiza un map de los servicios que se incluyan como un item de la lista */}
            {services.map((service, index) => (
              <li key={index}>{service.name}</li>
            ))}
          </ul>
          <strong>{formattedPrice(packageData.price)}</strong>
        </div>
        {packageData.status ? (
          <NavLink
            to={{ pathname: "/reserve", packageData: packageData }}
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
  );
}
