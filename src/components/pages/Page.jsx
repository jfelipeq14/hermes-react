import Package from "../utils/Package";
import Footer from "../layout/Footer";

import {
  NavLink,
} from "react-router-dom";

const packages = [
  {
    address: "Calle 123 # 123 - 123",
    name: "Paquete 1",
    date: "01/01/2024",
    price: 1000000,
    services: ["Servicio 1", "Servicio 2", "Servicio 3"],
  },
  {
    address: "Calle 123 # 123 - 123",
    name: "Paquete 2",
    date: "01/01/2024",
    price: 1000000,
    services: ["Servicio 1", "Servicio 2", "Servicio 3"],
  },
  {
    address: "Calle 123 # 123 - 123",
    name: "Paquete 3",
    date: "01/01/2024",
    price: 1000000,
    services: ["Servicio 1", "Servicio 2", "Servicio 3"],
  },
  {
    address: "Calle 123 # 123 - 123",
    name: "Paquete 4",
    date: "01/01/2024",
    price: 1000000,
    services: ["Servicio 1", "Servicio 2", "Servicio 3"],
  },
  {
    address: "Calle 123 # 123 - 123",
    name: "Paquete 5",
    date: "01/01/2024",
    price: 1000000,
    services: ["Servicio 1", "Servicio 2", "Servicio 3"],
  },
  {
    address: "Calle 123 # 123 - 123",
    name: "Paquete 6",
    date: "01/01/2024",
    price: 1000000,
    services: ["Servicio 1", "Servicio 2", "Servicio 3"],
  },
  {
    address: "Calle 123 # 123 - 123",
    name: "Paquete 7",
    date: "01/01/2024",
    price: 1000000,
    services: ["Servicio 1", "Servicio 2", "Servicio 3"],
  },
];

export default function Page() {
  return (
    <div className="container">
      <div className="row">
        <main className="row col-sm-12 col-md-10">
          <section className="col-sm-12 mx-auto my-5">
            <header className="text-center">
              <h2 className="fw-bold fs-4">Paquetes</h2>
            </header>
            <article className="row g-4">
              {packages.map((pkg) => {
                return (
                  // eslint-disable-next-line react/jsx-key
                  <Package
                    address={pkg.address}
                    name={pkg.name}
                    date={pkg.date}
                    price={pkg.price}
                    services={pkg.services}
                  />
                );
              })}
            </article>
            <footer className="text-center">
              <p>
                Antes de realizar una reserva debes saber que el comprobante se
                sube en la aplicación, pero previamente debes registrarte. Lee
                nuestros{" "}
                <NavLink to={"/terminos"} className="text-primary">
                  terminos y condiciones
                </NavLink>
              </p>
            </footer>
          </section>
          <section className="col-md-12 my-5">
            <header className="text-center">
              <h2 className="fw-bold fs-4">Preguntas</h2>
            </header>
            <hr />
            {/* crear un detail donde se hagan preguntas y respuestas de una agencia de viajes */}
            <article className="row">
              <fieldset className="col-md-3 rounded p-4 m-4 border">
                <legend className="d-flex align-items-center gap-4 fs-5 fw-medium">
                  ¿Cómo puedo reservar un paquete?
                </legend>
                <p className="text-muted">
                  Para reservar un paquete, primero debes registrarte en la
                  aplicación, luego seleccionar el paquete que deseas y seguir
                  los pasos que se te indican.
                </p>
              </fieldset>
              <fieldset className="col-md-3 rounded p-4 m-4 border">
                <legend className="d-flex align-items-center gap-4 fs-5 fw-medium">
                  ¿Cómo puedo reservar un paquete?
                </legend>
                <p className="text-muted">
                  Para reservar un paquete, primero debes registrarte en la
                  aplicación, luego seleccionar el paquete que deseas y seguir
                  los pasos que se te indican.
                </p>
              </fieldset>
              <fieldset className="col-md-3 rounded p-4 m-4 border">
                <legend className="d-flex align-items-center gap-4 fs-5 fw-medium">
                  ¿Cómo puedo reservar un paquete?
                </legend>
                <p className="text-muted">
                  Para reservar un paquete, primero debes registrarte en la
                  aplicación, luego seleccionar el paquete que deseas y seguir
                  los pasos que se te indican.
                </p>
              </fieldset>
              <fieldset className="col-md-3 rounded p-4 m-4 border">
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
          </section>
          <section className="col-12 my-5">
            <article className="row">
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
              <section className="col-md-6 mx-auto text-start">
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
      </div>
    </div>
  );
}
