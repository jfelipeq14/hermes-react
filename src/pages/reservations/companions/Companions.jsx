import { useState } from "react";
import CompanionForm from "./FormCompanion";
import {
  PencilSquareIcon,
  PlusIcon,
  TrashIcon,
} from "@heroicons/react/16/solid";
import Modals from "../../../components/Modals";

export default function Companions() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [haveCompanions, setHaveCompanions] = useState(false);
  const [companions, setCompanions] = useState([]);

  return (
    <fieldset className="  p-2">
      <legend>Acompañantes</legend>
      <button
        className=" btn btn-sm btn-primary float-end"
        onClick={() => {
          setHaveCompanions(!haveCompanions);
          setModalIsOpen(true);
        }}
      >
        <PlusIcon width={20} />
        Agregar
      </button>

      <table className="table table-hover">
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
            <tr key={companion.idReserveCompanion}>
              <td className="d-flex">
                <button className="btn m-0 p-0">
                  <TrashIcon
                    width={20}
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
                    width={20}
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

      {modalIsOpen && (
        <Modals isOpen={modalIsOpen} clickModal={setModalIsOpen} size="md">
          <CompanionForm
            companions={companions}
            setCompanions={setCompanions}
            setHaveCompanions={setHaveCompanions}
          />
        </Modals>
      )}
    </fieldset>
  );
}
