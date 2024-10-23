import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  BanknotesIcon,
  CalendarDateRangeIcon,
  EyeIcon,
  NoSymbolIcon,
  PlusCircleIcon,
  UsersIcon,
} from "@heroicons/react/16/solid";

import CompanionForm from "../reservations/companions/FormCompanion.jsx";
import PayForm from "../payments/FormPayment.jsx";
import Modals from "../../components/Modals.jsx";
import Reprogramming from "../../components/Reprogramming.jsx";

import { formattedPrice } from "../../utilies/formattedPrice.js";

export default function ReservationsPage() {
  const [modalReprogrammingOpen, setModalReprogrammingOpen] = useState(false);
  const [modalPayments, setModalPayments] = useState(false);
  const [modalCompanion, setModalCompanion] = useState(false);

  const reservas = [
    {
      idReservation: 1,
      idDetailProgrammingPackage: 1,
      idCustomer: 1,
      dateReservation: "2021-09-01",
      priceReservation: 100000,
      numberCompanions: 2,
      travelCustomer: false,
      status: "N",
    },
  ];

  // useEffect(() => {
  //   const getData = async () => {
  //     const data = await ReservationsService.getAll();
  //     if (data) {
  //       setReservas(data);
  //     }
  //   };
  //   getData();
  // }, []);

  return (
    <>
      <fieldset className="  p-2">
        <legend>Reservas</legend>
        <NavLink
          to={{ pathname: "/" }}
          className=" btn btn-sm btn-primary mx-2 float-end"
        >
          <PlusCircleIcon width={20} />
          Crear
        </NavLink>
        <button
          className=" btn btn-sm btn-primary mx-2 float-end"
          onClick={() => {
            setModalReprogrammingOpen(!modalReprogrammingOpen);
          }}
        >
          <CalendarDateRangeIcon width={20} />
          Programación
        </button>
        <form className="w-50">
          <input
            type="search"
            id="identification"
            className="form-control form-control-sm"
            placeholder="Buscar"
            onChange={(e) => console.log(e.target.value)}
          />
        </form>
        <header className="buttons"></header>
        <table className="table table-hover my-2">
          <thead>
            <th scope="col">Acciones</th>
            <th scope="col">Detalle</th>
            <th scope="col">Cliente</th>
            <th scope="col">Fecha reserva</th>
            <th scope="col">Valor</th>
            <th scope="col">Acompañantes</th>
            <th scope="col">Estado</th>
          </thead>
          <tbody>
            {reservas.map((reserva) => (
              <tr key={reserva.idReservation}>
                <td className="d-flex">
                  <button className="btn m-0 p-0">
                    <EyeIcon width={20} />
                  </button>
                  <button
                    className="btn m-0 p-0"
                    onClick={() => {
                      setModalCompanion(!modalCompanion);
                    }}
                  >
                    <UsersIcon width={20} />
                  </button>
                  <button
                    className="btn m-0 p-0"
                    onClick={() => {
                      setModalReprogrammingOpen(!modalReprogrammingOpen);
                    }}
                  >
                    <CalendarDateRangeIcon width={20} />
                  </button>
                  <button
                    className="btn m-0 p-0"
                    onClick={() => {
                      setModalPayments(!modalPayments);
                    }}
                  >
                    <BanknotesIcon width={20} />
                  </button>
                  <button className="btn m-0 p-0">
                    <NoSymbolIcon width={20} />
                  </button>
                </td>
                <td>{reserva.idDetailProgrammingPackage}</td>
                <td>{reserva.idCustomer}</td>
                <td>{reserva.dateReservation}</td>
                <td>{formattedPrice(reserva.priceReservation)}</td>
                <td>
                  {reserva.travelCustomer
                    ? reserva.numberCompanions + 1
                    : reserva.numberCompanions}
                </td>
                <td>{reserva.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <footer></footer>
      </fieldset>
      {modalCompanion && (
        <Modals
          isOpen={modalCompanion}
          clickModal={setModalCompanion}
          size="md"
        >
          <CompanionForm />
        </Modals>
      )}
      {modalReprogrammingOpen && (
        <Modals
          isOpen={modalReprogrammingOpen}
          clickModal={setModalReprogrammingOpen}
          size="xl"
        >
          <Reprogramming
            setModalReprogrammingOpen={setModalReprogrammingOpen}
          />
        </Modals>
      )}
      {modalPayments && (
        <Modals isOpen={modalPayments} clickModal={setModalPayments} size="md">
          <PayForm />
        </Modals>
      )}
    </>
  );
}
