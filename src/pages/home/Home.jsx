import Package from "../../components/Package";
import Footer from "../layout/Footer";

import { NavLink } from "react-router-dom";
// import { getPackages } from "./service/home.service";

// const packages = getPackages()
//   .then((data) => {
//     return data;
//   })
//   .catch((error) => {
//     console.error(error);
//   });

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
    <>
      <main className="row w-100 h-100">
        {/* banner */}
        <section className="col-12 overflow-hidden">
          <div className="position-absolute my-5 p-5 z-1">
            <h1 className="fw-bold text-center">Bienvenido a Parche Travels</h1>
            <p className="lead fs-3 text-center">
              Encuentra paquetes turisticos a los mejores destinos y precios del
              mercado. No dudes en reservar con nosotros.
            </p>
          </div>
          <video src="/public/videos/bg.mp4"  autoPlay loop muted></video>
        </section>

        {/* paquetes */}
        <section className="col-12 p-5">
          <div className="container position-absolute top-50 start-0 end-0">
            <article className="row justify-content-center align-items-center">
              {packages.map((pkg, index) => {
                return (
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
                );
              })}
            </article>
          </div>
        </section>

        {/* preguntas */}
        <section className="col-12 mx-auto p-5">
          <div className="container">
            <h2 className="fs-1 lead text-center mt-5">Preguntas</h2>
            <article className="row">
              <fieldset className="col-md-3 rounded p-3">
                <legend className="d-flex align-items-center gap-4 fs-5 fw-medium">
                  ¿Cómo puedo reservar un paquete?
                </legend>
                <p className="text-muted">
                  Para reservar un paquete, primero debes registrarte en la
                  aplicación, luego seleccionar el paquete que deseas y seguir
                  los pasos que se te indican.
                </p>
              </fieldset>
              <fieldset className="col-md-3 rounded p-3">
                <legend className="d-flex align-items-center gap-4 fs-5 fw-medium">
                  ¿Cómo puedo reservar un paquete?
                </legend>
                <p className="text-muted">
                  Para reservar un paquete, primero debes registrarte en la
                  aplicación, luego seleccionar el paquete que deseas y seguir
                  los pasos que se te indican.
                </p>
              </fieldset>
              <fieldset className="col-md-3 rounded p-3">
                <legend className="d-flex align-items-center gap-4 fs-5 fw-medium">
                  ¿Cómo puedo reservar un paquete?
                </legend>
                <p className="text-muted">
                  Para reservar un paquete, primero debes registrarte en la
                  aplicación, luego seleccionar el paquete que deseas y seguir
                  los pasos que se te indican.
                </p>
              </fieldset>
              <fieldset className="col-md-3 rounded p-3">
                <legend className="d-flex align-items-center gap-4 fs-5 fw-medium">
                  ¿Cómo puedo reservar un paquete?
                </legend>
                <p className="text-muted">
                  Para reservar un paquete, primero debes registrarte en la
                  aplicación, luego seleccionar el paquete que deseas y seguir
                  los pasos que se te indican.
                </p>
              </fieldset>
            </article>
          </div>
        </section>

        {/* contacto */}
        <section className="col-12 text-start p-5">
          <div className="container">
            <article className="row p-5">
              <section className="col-md-6 mx-auto">
                <h2 className="fs-4 fw-bold my-5">Información de contacto</h2>
                <p>
                  <strong>Registro Nacional</strong>: 123456789
                </p>

                <strong>Redes sociales</strong>
                <ul>
                  <li>
                    <a href="https://www.facebook.com/parchetravels">
                      Facebook
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/parchetravels">
                      Instagram
                    </a>
                  </li>
                  <li>
                    <a href="https://www.twitter.com/parchetravels">Twitter</a>
                  </li>
                </ul>

                <p>
                  <strong>Correo</strong>:
                  <a href="mailto:gerenciaparchetravels@gmail.com">
                    gerenciaparchetravels@gmail.com
                  </a>
                </p>

                <p>
                  <strong>Teléfono</strong>: 123456789
                </p>
              </section>
              <section className="col-md-6 mx-auto">
                <ul>
                  <li>
                    <NavLink to="/pqrs">PQRS</NavLink>
                  </li>
                  <li>
                    <NavLink to="/terminos">Terminos y condiciones</NavLink>
                  </li>
                  <li>
                    <NavLink to="/politicas">Políticas de privacidad</NavLink>
                  </li>
                </ul>
              </section>
            </article>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
