import { useLocation } from "react-router-dom";
import { useState } from "react";

import {
  PencilSquareIcon,
  PlusIcon,
  TrashIcon,
} from "@heroicons/react/16/solid";

import CompanionForm from "./CompanionForm";
import CustomerForm from "./CustomerForm";
import PaymentForm from "./PaymentForm";
import Package from "../../components/Package";

export default function Reserve() {
  const location = useLocation();
  console.log(location.state);

  const [haveCompanions, setHaveCompanions] = useState(false);
  const [companions, setCompanions] = useState([]);

  let indexEdit = -1;

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
              indexEdit={indexEdit}
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
                            (c) => c.identification === companion.identification
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
                        onClick={() => {
                          // Buscar un acompañante por su id
                          let index = companions.findIndex(
                            (c) => c.identification === companion.identification
                          );
                          if (!index) return;
                          indexEdit = index;
                          console.log(indexEdit);
                        }}
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
          <footer>
            {/* datos del cliente que no viaja */}
            <label htmlFor="">
              Cliente:
              <input type="text" className="form-control" />

            </label>
            <button className="btn btn-primary float-end">Pagar</button>
          </footer>
        </fieldset>
        <fieldset className="d-none d-lg-inline col-lg-2">
          <legend>Paquete</legend>
          <Package />
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
