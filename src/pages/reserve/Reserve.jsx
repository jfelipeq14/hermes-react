import {
  EyeIcon,
  PencilSquareIcon,
  PlusIcon,
  TrashIcon,
} from "@heroicons/react/16/solid";
import CompanionForm from "./CompanionForm";
import CustomerForm from "./CustomerForm";
import { useLocation } from "react-router-dom";
import { useState } from "react";

export default function Reserve() {
  const location = useLocation();
  const [haveCompanions, setHaveCompanions] = useState(false);
  const companions = [
    {
      id_reserve_companion: 0,
      id_reservation: 0,
      identification: "",
      name: "",
      lastName: "",
      phone: "",
      sex: "",
      bloodType: "",
      eps: "",
    },
  ];

  return (
    <div className="row m-0 p-0 g-2">
      <fieldset className="col-sm-12 col-md-5">
        <legend>Datos personales</legend>
        {haveCompanions ? (
          <CompanionForm />
        ) : (
          <CustomerForm
            location={location}
            setHaveCompanions={setHaveCompanions}
          />
        )}
      </fieldset>
      <fieldset className="col-sm-12 col-md-5">
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
                      onClick={() =>
                        console.log(companion.id_reserve_companion)
                      }
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
      <fieldset className="col-sm-12 col-md-2">
        <legend>Paquete</legend>
      </fieldset>
    </div>
  );
}
