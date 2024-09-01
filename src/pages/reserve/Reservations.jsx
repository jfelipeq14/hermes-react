import { useState } from "react";
import {
  CalendarDateRangeIcon,
  ExclamationCircleIcon,
  EyeIcon,
  TicketIcon,
  UserPlusIcon,
} from "@heroicons/react/16/solid";

import { administrator } from "../../utilies/routes";
import Sidebar, { SidebarItem } from "../layout/Sidebar";
import CompanionForm from "./CompanionForm";
import PayForm from "../pay/PayForm";
import Modal from "../../components/Modal";
import Calendar from "../../components/Calendar";

export default function Reservas() {
  const [modalPaysOpen, setModalPaysOpen] = useState(false);
  const clickModal = () => {
    setModalPaysOpen(!modalPaysOpen);
  }

  const reservas = [
    {
      id_reservation: 1,
      id_detail_programming_package: 1,
      id_customer: 1,
      date_reservation: "2024-12-12",
      price_reservation: 240000,
      number_companions: 1,
      travel_customer: true,
      status: "C",
    },
  ];

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
        <div className="row p-2">
          <fieldset className="col-sm-12 col-md-4">
            <legend>{showPay ? "Pago" : "Acompañante"}</legend>
            {showPay ? <PayForm /> : <CompanionForm />}
          </fieldset>
          <fieldset className="col-sm-12 col-md-8">
            <legend>Reservas</legend>
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
                      <button className="btn m-0 p-0">
                        <UserPlusIcon width={25} />
                      </button>
                      <button
                        className="btn m-0 p-0"
                        onClick={clickModal}
                      >
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
                        <ExclamationCircleIcon width={25} />
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
          </fieldset>
        </div>
      </main>
      {modalPaysOpen && (
        <Modal
          isOpen={modalPaysOpen}
          clickModal={clickModal}
          component={<Calendar />}
        />
      )}
    </div>
  );
}
