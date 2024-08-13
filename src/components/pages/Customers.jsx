import { administrator } from "../../routes";
import Sidebar, { SidebarItem } from "../layout/Sidebar";

export default function Customers() {
  const customer = [
    {
      cedula: "899",
      nombres: "Juan Goleador",
      celular: "687",
      correo: "jf@gmail.com",
      reservas: 4,
    },
  ];

  const reservations = [
    {
      paquete: "Cartagena Fam",
      valor: 670000,
      fecha: "12/12/12",
      estado: "e",
    },
  ];

  return (
    <div className="row">
      <Sidebar>
        {administrator.map((link) => {
          return (
            <SidebarItem
              key={link.href}
              icon={<link.icon />}
              text={link.name}
            />
          );
        })}
      </Sidebar>
      <main className="col-11">
        <div className="row p-5">
          <form className="col-sm-12 col-md-6">
            <fieldset>
              <legend>Clientes</legend>
              <header className="d-flex justify-content-between align-items-end my-2">
                <div className="form-group">
                  <label htmlFor="identification" className="form-label">
                    Cedula:
                  </label>
                  <input
                    type="text"
                    id="identification"
                    className="form-control"
                  />
                </div>
                <div className="btn-group">
                  <button className="btn btn-primary">Crear</button>
                </div>
              </header>
              <table className="table table-striped my-2">
                <thead>
                  <th scope="col">Acciones</th>
                  <th scope="col">Cedula</th>
                  <th scope="col">Nombre</th>
                  <th scope="col">Celular</th>
                  <th scope="col">Correo</th>
                  <th scope="col">Reservas</th>
                </thead>
                <tbody>
                  {customer.map((row) => (
                    <tr key={row.email}>
                      <td>btn</td>
                      <td>{row.cedula}</td>
                      <td>{row.nombres}</td>
                      <td>{row.celular}</td>
                      <td>{row.correo}</td>
                      <td>{row.reservas}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </fieldset>
          </form>
          <article className="col-sm-12 col-md-6">
            <fieldset>
              <legend>Reservas</legend>
              <header className="d-flex justify-content-end align-items-end">
                <div className="btn-group">
                  <button className="btn btn-primary">Crear</button>
                </div>
              </header>
              <table className="table table-striped my-2">
                <thead>
                  <th scope="col">Acciones</th>
                  <th scope="col">Paquete</th>
                  <th scope="col">Valor</th>
                  <th scope="col">Fecha</th>
                  <th scope="col">Estado</th>
                </thead>
                <tbody>
                  {reservations.map((row) => (
                    <tr key={row.paquete}>
                      <td>btn</td>
                      <td>{row.paquete}</td>
                      <td>{row.valor}</td>
                      <td>{row.fecha}</td>
                      <td>{row.estado}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </fieldset>
          </article>
        </div>
      </main>
    </div>
  );
}
