import CustomerForm from "./CustomerForm";
import { useLocation } from "react-router-dom";

export default function Reserve() {
  const location = useLocation();
  return (
    <div className="row g-3">
      <div className="col-4">
        <CustomerForm identification={location.state.identification}/>
      </div>
      <div className="col">
        {/* crear tabla para los acompañantes de la reserva */}
      </div>
    </div>
  );
}
