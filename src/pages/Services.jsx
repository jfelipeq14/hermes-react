import {
  EyeIcon,
  PencilSquareIcon,
  TrashIcon,
} from "@heroicons/react/16/solid";
import { administrator } from "../utilies/routes";
import Sidebar, { SidebarItem } from "./layout/Sidebar";

export default function Customers() {
  const services = [
    {
      categoria: "Transporte",
      nombre: "Metro",
      valor: 3200,
      estado: "Habilitado",
    },
    {
      categoria: "Alojamiento",
      nombre: "5 Estrellas",
      valor: 580000,
      estado: "Deshabilitado",
    },
    {
        categoria: "Entretenimiento",
        nombre: "Museo",
        valor: 37900,
        estado: "Habilitado",
      },
  ];

  return (
    <div className="row">
      <Sidebar>
        {administrator.map((link) => {
          return (
            <SidebarItem
              key={link.name}
              name={link.name}
              href={link.href}
              icon={<link.icon width={30} />}
            />
          );
        })}
      </Sidebar>
      <main className="col-11">
        <div className="row p-5">
          <fieldset className="col-sm-12 col-md-6">
            <legend>Reservas</legend>
            <header className="d-flex justify-content-end align-items-end"></header>
          </fieldset>
          {/*  */}
          <fieldset className="col-sm-12 col-md-6">
            <section>
              <form>
                <fieldset>
                  <legend>Roles</legend>
                  <header>
                    <input
                      type="search"
                      placeholder="Buscar"
                      className="form-control"
                    />
                  </header>
                  <table className="table table-striped">
                    <table className="table table-striped">
                      <thead>
                        <tr>
                          <th scope="col">Acciones</th>
                          <th scope="col">Categoria</th>
                          <th scope="col">Nombre</th>
                          <th scope="col">Valor</th>
                          <th scope="col">Estado</th>
                        </tr>
                      </thead>
                      <tbody>
                        {services.map((row) => (
                          <tr key={row.paquete}>
                            <td className="d-flex">
                              <EyeIcon type="button" width={25} />
                              <PencilSquareIcon type="button" width={25} />
                              <TrashIcon type="button" width={25} />
                            </td>
                            <td>{row.categoria}</td>
                            <td>{row.nombre}</td>
                            <td>{row.valor}</td>
                            <td>{row.estado}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>

                    <tbody>
                      <form>
                        <div className="form-group">
                          <label htmlFor="role">Roles:</label>
                          <input
                            id="role"
                            placeholder="Administrador"
                            className="form-control"
                          />
                        </div>
                      </form>
                    </tbody>
                  </table>
                </fieldset>
              </form>
            </section>
          </fieldset>
        </div>
      </main>
    </div>
  );
}
