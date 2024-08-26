import CustomerForm from "./CustomerForm";
import { useLocation } from "react-router-dom";

export default function Reserve() {
  const location = useLocation();
  return (
    <div className="row m-0 p-0 g-2">
      <fieldset className="col-sm-12 col-md-5">
        <legend>Datos personales</legend>
        <CustomerForm location={location} />
      </fieldset>
      <fieldset className="col-sm-12 col-md-5">
        <legend>Acompañantes</legend>
        {/* crear tabla para los acompañantes de la reserva */}
      </fieldset>
      <fieldset className="col-sm-12 col-md-2">
        <legend>Paquete</legend>
      </fieldset>
    </div>
  );
}
