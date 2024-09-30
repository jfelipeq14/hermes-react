import { formatDate } from "@fullcalendar/core/index.js";
import Sidebar from "../layout/Sidebar";
import { EyeIcon, PencilSquareIcon } from "@heroicons/react/16/solid";
import PayForm from "./FormPayment";
import { useState } from "react";
import Modals from "../../components/Modals";

export default function PaymentsPage() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [haveVoucher, setHaveVoucher] = useState(false);

  const payments = [
    {
      idPay: 1,
      idReservation: 1,
      date_pay: formatDate(new Date()),
      price: 80000,
      identification: "8998988855",
      vouchers: [
        {
          idVoucher: 1,
          date: formatDate(new Date()),
          voucher: "8998988855-fecha.png",
        },
        {
          idVoucher: 2,
          date: formatDate(new Date()),
          voucher: "8998988855-fecha.png",
        },
      ],
      status: "R",
    },
  ];

  return (
    <div className="row">
      <Sidebar></Sidebar>
      <main className="col-10 justify-content-center align-items-center">
        <div className="row">
          <fieldset className="col-sm-12 col-md-8">
            <legend>Pagos</legend>
            <form className="w-50">
              <input
                type="search"
                id="identification"
                className="form-control form-control-sm"
                placeholder="Buscar"
                onChange={(e) => console.log(e.target.value)}
              />
            </form>
            <table className="table my-2">
              <thead>
                <th scope="col">Acciones</th>
                <th scope="col">Paquete</th>
                <th scope="col">Fecha</th>
                <th scope="col">Valor</th>
                <th scope="col">Identificacion</th>
                <th scope="col">Estado</th>
              </thead>
              <tbody>
                {payments.map((pay) => (
                  <tr key={pay.idPay}>
                    <td className="d-flex">
                      <button className="btn m-0 p-0">
                        <EyeIcon
                          width={20}
                          onClick={() => {
                            if (pay.vouchers.length) {
                              setHaveVoucher(!haveVoucher);
                            }
                          }}
                        />
                      </button>
                      <button className="btn m-0 p-0">
                        <PencilSquareIcon width={20} />
                      </button>
                    </td>
                    <td>{pay.idReservation}</td>
                    <td>{pay.date_pay}</td>
                    <td>{pay.price}</td>
                    <td>{pay.identification}</td>
                    <td>{pay.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </fieldset>
          {haveVoucher && (
            <fieldset className="col-sm-12 col-md-4 py-5">
              <legend>Comprobantes</legend>
              <table className="table my-2">
                <thead>
                  <th scope="col">Acciones</th>
                  <th scope="col">Fecha</th>
                  <th scope="col">Voucher</th>
                </thead>
                <tbody>
                  {payments.map((pay) => {
                    return pay.vouchers.map((voucher) => (
                      <tr key={voucher.idVoucher}>
                        <td className="d-flex">
                          <button className="btn m-0 p-0">
                            <EyeIcon width={20} />
                          </button>
                          <button className="btn m-0 p-0">
                            <PencilSquareIcon width={20} />
                          </button>
                        </td>
                        <td>{voucher.date}</td>
                        <td>{voucher.voucher}</td>
                      </tr>
                    ));
                  })}
                </tbody>
              </table>
            </fieldset>
          )}
        </div>

        {modalIsOpen && (
          <Modals isOpen={modalIsOpen} clickModal={setModalIsOpen}>
            <PayForm />
          </Modals>
        )}
      </main>
    </div>
  );
}
