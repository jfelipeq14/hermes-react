import { PlusIcon } from "@heroicons/react/16/solid";
import CompanionForm from "./CompanionForm";
import CustomerForm from "./CustomerForm";
import { useLocation } from "react-router-dom";
import { useState } from "react";

export default function Reserve() {
  const location = useLocation();
  const [haveCompanions, setHaveCompanions] = useState(false);

  return (
    <div className="row m-0 p-0 g-2">
      <fieldset className="col-sm-12 col-md-5">
        <legend>Datos personales</legend>
        {haveCompanions ? (
          <CompanionForm />
        ) : (
          <CustomerForm location={location} />
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
            <PlusIcon width={25}/>
            Agregar
          </button>
        {/* crear tabla para los acompañantes de la reserva */}
      </fieldset>
      <fieldset className="col-sm-12 col-md-2">
        <legend>Paquete</legend>
      </fieldset>
    </div>
  );
}
