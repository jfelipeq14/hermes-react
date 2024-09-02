import {
  PencilSquareIcon,
  PlusIcon,
  TrashIcon,
} from "@heroicons/react/16/solid";
import CompanionForm from "./CompanionForm";
import CustomerForm from "./CustomerForm";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import PaymentForm from "./PaymentForm";

export default function Reserve() {
  const location = useLocation();
  const [haveCompanions, setHaveCompanions] = useState(false);
  const [companions, setCompanions] = useState([]);

  return (
    <>
      <div className="row m-0 p-0 g-2">
        <fieldset className="col-sm-12 col-lg-4">
          <legend>Datos personales</legend>
          {haveCompanions ? (
            <CompanionForm
              companions={companions}
              setCompanions={setCompanions}
              setHaveCompanions={setHaveCompanions}
            />
          ) : (
            <CustomerForm
              location={location}
              companions={companions}
              setCompanions={setCompanions}
              setHaveCompanions={setHaveCompanions}
            />
          )}
        </fieldset>
        <fieldset className="col-sm-12 col-lg-6">
          <legend>Acompañantes</legend>
          <button
              className="btn btn-primary float-end"
              onClick={() => {
                setHaveCompanions(!haveCompanions);
              }}
            >
              <PlusIcon width={25} />
              Agregar
            </button>
          {/* crear tabla para los acompañantes de la reserva */}
          <table className="table table-striped my-2">
            <thead>
              <th scope="col">Acciones</th>
              <th scope="col">Identificacion</th>
              <th scope="col">Nombre</th>
              <th scope="col">Celular</th>
              <th scope="col">Sexo</th>
              <th scope="col">Tipo de sangre</th>
              <th scope="col">Eps</th>
            </thead>
            <tbody>
              {companions.map((companion) => (
                <tr key={companion.id_reserve_companion}>
                  <td className="d-flex">
                    <button className="btn m-0 p-0">
                      <TrashIcon
                        width={25}
                        onClick={() => {
                          let index = companions.findIndex(
                            (c) =>
                              c.id_reserve_companion ===
                              companion.id_reserve_companion
                          );
                          if (index < 0) return;
                          companions.splice(index, 1);
                          setCompanions([...companions]);
                        }}
                      />
                    </button>
                    <button className="btn m-0 p-0">
                      <PencilSquareIcon
                        width={25}
                        onClick={() =>
                          console.log(companion.id_reserve_companion)
                        }
                      />
                    </button>
                  </td>
                  <td>{companion.identification}</td>
                  <td>
                    {companion.name.trim()} {companion.lastName.trim()}
                  </td>
                  <td>{companion.phone}</td>
                  <td>{companion.sex}</td>
                  <td>{companion.bloodType}</td>
                  <td>{companion.eps}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </fieldset>
        <fieldset className="d-none d-lg-inline col-lg-2">
          <legend>Paquete</legend>
        </fieldset>
      </div>
      <div className="row m-0 p-0 g-2">
        <fieldset className="col-sm-12 col-lg-4">
          <a href="" className="float-end">
            Politicas de pago
          </a>
          <legend>Pago</legend>
          <PaymentForm />
        </fieldset>
      </div>
    </>
  );
}
