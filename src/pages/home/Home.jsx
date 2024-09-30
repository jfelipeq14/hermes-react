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
    id_package: 1,
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
    id_package: 2,
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
    id_package: 3,
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
  {
    id_package: 4,
    destination: "Medellin",
    name: "Feria de flores",
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
      <main className="row text-center">
        <section>
          <video src="/public/videos/bg.mp4" autoPlay loop muted></video>
          <h1 className="fw-bold fs-1 m-0">Bienvenido a Parche Travels</h1>
        </section>

        <section className="col-12 mx-auto my-5">
          <h2 className="fw-bold fs-4">Paquetes</h2>
          <article className="row g-1 justify-content-center">
            {packages.map((pkg, index) => {
              return (
                <div className="col-sm-12 col-md-6 col-lg-3 p-2" key={index}>
                  <Package
                    key={pkg.id_package}
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
          <footer className="container">
            <p>
              Antes de realizar una reserva debes saber que el comprobante se
              sube en la aplicación, pero previamente debes registrarte. Lee
              nuestros
              <br />
              <NavLink to={"/terminos"} className="text-primary">
                terminos y condiciones
              </NavLink>
            </p>
          </footer>
        </section>
        <section className="col-md-12 my-5">
          <h2 className="fw-bold fs-4">Preguntas</h2>
          <hr />
          {/* crear un detail donde se hagan preguntas y respuestas de una agencia de viajes */}
          <article className="row">
            <fieldset className="col-md-3 rounded p-3">
              <legend className="d-flex align-items-center gap-4 fs-5 fw-medium">
                ¿Cómo puedo reservar un paquete?
              </legend>
              <p className="text-muted">
                Para reservar un paquete, primero debes registrarte en la
                aplicación, luego seleccionar el paquete que deseas y seguir los
                pasos que se te indican.
              </p>
            </fieldset>
            <fieldset className="col-md-3 rounded p-3">
              <legend className="d-flex align-items-center gap-4 fs-5 fw-medium">
                ¿Cómo puedo reservar un paquete?
              </legend>
              <p className="text-muted">
                Para reservar un paquete, primero debes registrarte en la
                aplicación, luego seleccionar el paquete que deseas y seguir los
                pasos que se te indican.
              </p>
            </fieldset>
            <fieldset className="col-md-3 rounded p-3">
              <legend className="d-flex align-items-center gap-4 fs-5 fw-medium">
                ¿Cómo puedo reservar un paquete?
              </legend>
              <p className="text-muted">
                Para reservar un paquete, primero debes registrarte en la
                aplicación, luego seleccionar el paquete que deseas y seguir los
                pasos que se te indican.
              </p>
            </fieldset>
            <fieldset className="col-md-3 rounded p-3">
              <legend className="d-flex align-items-center gap-4 fs-5 fw-medium">
                ¿Cómo puedo reservar un paquete?
              </legend>
              <p className="text-muted">
                Para reservar un paquete, primero debes registrarte en la
                aplicación, luego seleccionar el paquete que deseas y seguir los
                pasos que se te indican.
              </p>
            </fieldset>
          </article>
        </section>
        <section className="col-12 my-5 text-start p-5">
          <article className="row p-5">
            <section className="col-md-6 mx-auto">
              <h2 className="fs-4 fw-bold my-5">Información de contacto</h2>
              <p>
                <strong>Registro Nacional</strong>: 123456789
              </p>

              <strong>Redes sociales</strong>
              <ul>
                <li>
                  <a href="https://www.facebook.com/parchetravels">Facebook</a>
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
        </section>
      </main>
      <Footer />
    </>
  );
}
