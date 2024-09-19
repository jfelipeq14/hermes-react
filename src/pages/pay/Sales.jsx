import {
  CalendarDateRangeIcon,
  EyeIcon,
  TicketIcon,
  UserPlusIcon,
} from "@heroicons/react/16/solid";
import { administrator } from "../../utilies/routes";
import Sidebar, { SidebarItem } from "../layout/Sidebar";

export default function Sales() {
  const sales = [
    {
      id: 1,
      nombresPaquete: "Family",
      valorPaquete: 24000,
      cantidad: 1,
      fechaRes: "06/05/2024",
      fechaEjecucion: "10/05/2024",
      cedula: 123,
      cliente: "Juan Felipe",
      estado: "Reservado",
    },
    {
      id: 2,
      nombresPaquete: "Family",
      valorPaquete: 24000,
      cantidad: 1,
      fechaRes: "06/05/2024",
      fechaEjecucion: "10/05/2024",
      cedula: 123,
      cliente: "Juan Felipe",
      estado: "Finalizado",
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
        <div className="row p-2">
          <fieldset className="col-12">
            <legend>Ventas</legend>
            <header className="row">
              <div className="col-6 my-2">
                <input
                  type="text"
                  id="identification"
                  className="form-control"
                  placeholder="Buscar"
                  onChange={(e) => console.log(e.target.value)}
                />
              </div>
            </header>
            <table className="table table-striped">
              <thead>
                <th scope="col">Acciones</th>
                <th scope="col">Nombre pack</th>
                <th scope="col">Valor</th>
                <th scope="col">Cantidad</th>
                <th scope="col">FechaRes</th>
                <th scope="col">FechaEjecu</th>
                <th scope="col">Cedula</th>
                <th scope="col">Cliente</th>
                <th scope="col">Estado</th>
              </thead>
              <tbody>
                {sales.map((sale) => (
                  <tr key={sale.email}>
                    <td className="d-flex">
                      <button className="btn m-0 p-0">
                        <EyeIcon width={25} />
                      </button>
                      <button className="btn m-0 p-0">
                        <UserPlusIcon width={25} />
                      </button>
                      <button className="btn m-0 p-0">
                        <CalendarDateRangeIcon width={25} />
                      </button>
                      <button className="btn m-0 p-0">
                        <TicketIcon width={25} />
                      </button>
                    </td>
                    <td>{sale.nombresPaquete}</td>
                    <td>{sale.valorPaquete}</td>
                    <td>{sale.cantidad}</td>
                    <td>{sale.fechaRes}</td>
                    <td>{sale.fechaEjecucion}</td>
                    <td>{sale.cedula}</td>
                    <td>{sale.cliente}</td>
                    <td>{sale.estado}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </fieldset>
        </div>
      </main>
    </div>
  );
}
