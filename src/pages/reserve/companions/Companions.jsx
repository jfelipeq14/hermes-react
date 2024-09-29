import { useState } from "react";
import CompanionForm from "./CompanionForm";
import {
  PencilSquareIcon,
  PlusIcon,
  TrashIcon,
} from "@heroicons/react/16/solid";

export default function Companions() {
  const [haveCompanions, setHaveCompanions] = useState(false);
  const [companions, setCompanions] = useState([]);

  return (
    <div className="row">
      <fieldset className="col-sm-12 col-lg-6">
        <legend>Agregar acompañantes</legend>
        <CompanionForm />
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
        <table className="table">
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
      </fieldset>
    </div>
  );
}
