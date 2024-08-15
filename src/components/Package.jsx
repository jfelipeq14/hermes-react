export default function Package({ address, name, date, price, services }) {
  const formatter = new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
  });
  const formattedPrice = formatter.format(price);

  // formatear la fecha para que quede más legible para el usuario
  const formattedDate = new Date(date).toLocaleDateString("es-CO", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="card col-sm-12 col-md-4">
      <div className="card-img-top bg-center">
        <p className="p-1 bg-light bg-opacity-75 rounded shadow-lg position-absolute bottom-0 end-0 m-2">
          {address}
        </p>
      </div>
      <div className="card-body d-flex justify-content-between">
        <p className="card-title text-muted">{name}</p>
        <p className="card-text">{formattedDate}</p>
      </div>
      <div className="d-flex justify-content-between">
          <ul className="list-unstyled">
            {/* Realiza un map de los servicios que se incluyan como un item de la lista */}
            {services.map((service, index) => (
              <li key={index}>{service}</li>
            ))}
          </ul>
        <strong>{formattedPrice}</strong>
      </div>
    </div>
  );
}
