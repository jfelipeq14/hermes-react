import { formatDate } from "@fullcalendar/core/index.js";
import Sidebar from "../layout/Sidebar";
import {
  EyeIcon,
  MagnifyingGlassIcon,
  PencilSquareIcon,
} from "@heroicons/react/16/solid";
import PayForm from "./FormPayment";

export default function PaymentsPage() {
  const payments = [
    {
      id_pay: 1,
      id_reservation: 1,
      date_pay: formatDate(new Date()),
      price: 80000,
      identification: "8998988855",
      voucher: "8998988855-20243008.png",
      status: "R",
    },
  ];

  return (
    <div className="row">
      <Sidebar></Sidebar>
      <main className="col-10   justify-content-center align-items-center">
        <div className="row p-2">
          <fieldset className="col-sm-12 col-md-6">
            <legend>Pagos</legend>
            <PayForm/>
          </fieldset>
          <fieldset className="col-sm-12 col-md-6">
            <legend>Reservas</legend>
            <form className="row">
              <div className="col-6">
                <input
                  type="search"
                  id="identification"
                  className="form-control form-control-sm my-2"
                  placeholder="Buscar"
                  onChange={(e) => console.log(e.target.value)}
                />
              </div>
              <div className="col-6">
                <button type="submit" className="btn">
                  <MagnifyingGlassIcon />
                </button>
              </div>
            </form>
            <table className="table table-striped my-2">
              <thead>
                <th scope="col">Acciones</th>
                <th scope="col">Paquete</th>
                <th scope="col">Fecha</th>
                <th scope="col">Valor</th>
                <th scope="col">Identificacion</th>
                <th scope="col">Cliente</th>
                <th scope="col">Estado</th>
              </thead>
              <tbody>
                {payments.map((pay) => (
                  <tr key={pay.id_pay}>
                    <td className="d-flex">
                      <button className="btn m-0 p-0">
                        <EyeIcon width={20} />
                      </button>
                      <button className="btn m-0 p-0">
                        <PencilSquareIcon width={20} />
                      </button>
                    </td>
                    <td>{pay.id_reservation}</td>
                    <td>{pay.date_pay}</td>
                    <td>{pay.price}</td>
                    <td>{pay.identification}</td>
                    <td>{pay.voucher}</td>
                    <td>{pay.status}</td>
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
