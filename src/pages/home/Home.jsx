import Package from "../../components/Package";
import { NavLink } from "react-router-dom";

const packages = [
  {
    idPackage: 1,
    destination: "Cartagena",
    name: "Navidad",
    date: "2021-09-30",
    price: 1000000,
    services: [
      {
        id: 1,
        category: "Entretenimiento",
        name: "Pesca",
      },
      {
        id: 2,
        category: "Transporte",
        name: "Lancha",
      },
    ],
    status: true,
  },
  {
    idPackage: 2,
    destination: "Santa Marta",
    name: "Año nuevo",
    date: "2025-01-01",
    price: 1000000,
    services: [
      {
        id: 1,
        category: "Entretenimiento",
        name: "Pesca",
      },
      {
        id: 2,
        category: "Transporte",
        name: "Lancha",
      },
    ],
    status: false,
  },
  {
    idPackage: 3,
    destination: "Cavo de la vela",
    name: "Mitad de año",
    date: "2025-06-06",
    price: 1000000,
    services: [
      {
        id: 1,
        category: "Entretenimiento",
        name: "Pesca",
      },
      {
        id: 2,
        category: "Transporte",
        name: "Lancha",
      },
    ],
    status: true,
  },
];

export default function Home() {
  return (
    <div className="container">
      {/* Banner */}
      <section
        id="home"
        className="col-12 position-relative p-0 overflow-hidden"
        style={{ height: "70vh" }}
      >
        <div
          className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
          style={{ backgroundColor: "rgba(0,0,0,0.5)", zIndex: 2 }}
        >
          <div className="text-center text-white p-5">
            <h1 className="fw-bold mb-4">Bienvenido a Parche Travels</h1>
            <p className="lead fs-3">
              Encuentra paquetes turísticos a los mejores destinos y precios del
              mercado. No dudes en reservar con nosotros.
            </p>
          </div>
        </div>
        <video
          src="/public/videos/bg.mp4"
          autoPlay
          loop
          muted
          className="position-absolute top-0 start-0 w-100 h-100 object-fit-cover"
          style={{ zIndex: 1 }}
        ></video>
      </section>

      {/* Paquetes */}
      <section
        className="col-12 p-5 border-top border-light"
        style={{ backgroundColor: "#eeeeee" }}
      >
        <div className="container">
          <h2 className="text-center mb-4">Nuestros Paquetes</h2>
          <div className="row justify-content-center align-items-center">
            {packages.map((pkg, index) => (
              <div className="col-sm-12 col-md-6 col-lg-4 p-3" key={index}>
                <Package
                  key={pkg.idPackage}
                  destination={pkg.destination}
                  name={pkg.name}
                  date={pkg.date}
                  price={pkg.price}
                  services={pkg.services}
                  status={pkg.status}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Preguntas */}
      <section
        className="col-12 mx-auto p-5 border-bottom border-light"
        style={{ backgroundColor: "#e4e4e4" }}
      >
        <div className="container">
          <h2 className="fs-1 lead text-center mb-5">Preguntas Frecuentes</h2>
          <div className="row">
            {[1, 2, 3, 4].map((_, index) => (
              <div className="col-md-3 mb-4" key={index}>
                <div className="card h-100 shadow-sm">
                  <div className="card-body">
                    <h5 className="card-title">
                      ¿Cómo puedo reservar un paquete?
                    </h5>
                    <p className="card-text text-muted">
                      Para reservar un paquete, primero debes registrarte en la
                      aplicación, luego seleccionar el paquete que deseas y
                      seguir los pasos que se te indican.
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contacto */}
      <section
        id="contact"
        className="col-12 text-start p-5"
        style={{ backgroundColor: "#eeeeee" }}
      >
        <div className="container">
          <div className="row p-5">
            <div className="col-md-4 mb-4 border-end border-secondary border-opacity-25">
              <h2 className="fs-4 fw-bold mb-4">Información de contacto</h2>
              <p>
                <strong>Registro Nacional</strong>: 123456789
              </p>
              <p>
                <strong>Correo</strong>:{" "}
                <a
                  href="mailto:gerenciaparchetravels@gmail.com"
                  className="text-decoration-none"
                >
                  gerenciaparchetravels@gmail.com
                </a>
              </p>
              <p>
                <strong>Teléfono</strong>: 123456789
              </p>
            </div>
            <div className="col-md-4 mb-4 border-end border-secondary border-opacity-25">
              <h2 className="fs-4 fw-bold mb-4">Redes sociales</h2>
              <ul className="list-unstyled">
                <li>
                  <a
                    href="https://www.facebook.com/parchetravels"
                    className="text-decoration-none"
                  >
                    Facebook
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/parchetravels"
                    className="text-decoration-none"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.twitter.com/parchetravels"
                    className="text-decoration-none"
                  >
                    Twitter
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-4">
              <h2 className="fs-4 fw-bold mb-4">Enlaces útiles</h2>
              <ul className="list-unstyled">
                <li>
                  <NavLink to="/pqrs" className="text-decoration-none">
                    PQRS
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/terminos" className="text-decoration-none">
                    Términos y condiciones
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/politicas" className="text-decoration-none">
                    Políticas de privacidad
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
