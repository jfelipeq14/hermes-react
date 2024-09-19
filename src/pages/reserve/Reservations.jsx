import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  CalendarDateRangeIcon,
  EyeIcon,
  NoSymbolIcon,
  PlusCircleIcon,
  TicketIcon,
  UserPlusIcon,
} from "@heroicons/react/16/solid";

import { administrator } from "../../utilies/routes";
import Sidebar, { SidebarItem } from "../layout/Sidebar";
import CompanionForm from "./CompanionForm";
import PayForm from "../pay/PayForm";
import Modals from "../../components/Modals";
import Reprogramming from "./Reprogramming";

import { ReservationsService } from "../../services/reservations.service.js";

export default function Reservas() {
  const [reservas, setReservas] = useState([]);

  const [modalPaysOpen, setModalPaysOpen] = useState(false);
  const clickModal = () => {
    setModalPaysOpen(!modalPaysOpen);
  };

  (async () => {
    const getData = await ReservationsService.getAll();
    if (getData) {
      setReservas(getData);
    }
  })();

  const [showPay, setShowPay] = useState(false);

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
        <div className="row">
          <fieldset className="col-sm-12 col-md-4">
            <legend>{showPay ? "Pago" : "Acompañante"}</legend>
            {showPay ? <PayForm /> : <CompanionForm />}
          </fieldset>
          <fieldset className="col-sm-12 col-md-8">
            <legend>Reservas</legend>
            <header className="buttons">
              <NavLink
                to={{ pathname: "/administrator/packages/programming" }}
                className="btn btn-primary m-2"
              >
                <CalendarDateRangeIcon width={25} />
                Programación
              </NavLink>
              <NavLink to={{ pathname: "/" }} className="btn btn-primary m-2">
                <PlusCircleIcon width={25} />
                Crear
              </NavLink>
            </header>
            <table className="table table-striped my-2">
              <thead>
                <th scope="col">Acciones</th>
                <th scope="col">Nombre</th>
                <th scope="col">FechaInscr</th>
                <th scope="col">FechaFin</th>
                <th scope="col">FechaEjecu</th>
                <th scope="col">Valor</th>
                <th scope="col">Estado</th>
              </thead>
              <tbody>
                {reservas.map((reserva) => (
                  <tr key={reserva.id_reservation}>
                    <td className="d-flex">
                      <button className="btn m-0 p-0">
                        <EyeIcon width={25} />
                      </button>
                      <button
                        className="btn m-0 p-0"
                        onClick={() => {
                          setShowPay(false);
                        }}
                      >
                        <UserPlusIcon width={25} />
                      </button>
                      <button className="btn m-0 p-0" onClick={clickModal}>
                        <CalendarDateRangeIcon width={25} />
                      </button>
                      <button
                        className="btn m-0 p-0"
                        onClick={() => {
                          setShowPay(true);
                        }}
                      >
                        <TicketIcon width={25} />
                      </button>
                      <button className="btn m-0 p-0">
                        <NoSymbolIcon width={25} />
                      </button>
                    </td>
                    <td>{reserva.id_customer}</td>
                    <td>{reserva.id_detail_programming_package}</td>
                    <td>{reserva.id_detail_programming_package}</td>
                    <td>{reserva.id_detail_programming_package}</td>
                    <td>{reserva.price_reservation}</td>
                    <td>{reserva.estado}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <footer></footer>
          </fieldset>
        </div>
      </main>
      {modalPaysOpen && (
        <Modals isOpen={modalPaysOpen} clickModal={clickModal} size="lg">
          <Reprogramming clickModal={clickModal} />
        </Modals>
      )}
    </div>
  );
}
