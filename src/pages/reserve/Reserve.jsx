import CustomerForm from "./CustomerForm";
import { useLocation } from "react-router-dom";

export default function Reserve() {
  const location = useLocation();
  return (
    <div className="row g-1 justify-content-center">
      <fieldset className="col-sm-12 col-md-5">
        <legend>Datos personales</legend>
        <CustomerForm location={location} />
      </fieldset>
      <fieldset className="col-sm-12 col-md-4">
      <legend>Acompañantes</legend>
        {/* crear tabla para los acompañantes de la reserva */}
      </fieldset>
      <div className="d-none d-sm-inline col-sm-12 col-md-1">
      </div>
    </div>
  );
}
