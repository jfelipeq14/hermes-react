import { formattedDate } from "../utilies/formattedDate";
import { formattedPrice } from "../utilies/formattedPrice";

export default function Package({ address, name, date, price, services = [] }) {
  return (
    <div className="card col-sm-12 col-md-4">
      <div className="card-img-top bg-center">
        <p className="p-1 bg-light bg-opacity-75 rounded shadow-lg position-absolute bottom-0 end-0 m-2">
          {address}
        </p>
      </div>
      <div className="card-body d-flex justify-content-between">
        <p className="card-title text-muted">{name}</p>
        <p className="card-text">{formattedDate(date)}</p>
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
    </div>
  );
}
