import MultiStep from "react-multistep";

import Customer from "./steps/Customer";
import Package from "../../../components/Package";
import Companions from "../../reservations/companions/Companions";
import FormPayment from "../../payments/FormPayment";

export default function ReservePage() {
  const steps = [
    { name: "Cliente", component: <Customer /> },
    { name: "Acompañantes", component: <Companions /> },
    { name: "Pago", component: <FormPayment /> },
  ];

  const buttonStyle = {
    color: "white",
    border: "none",
    padding: "5px 8px",
    margin: "8px",
    borderRadius: "5px",
    cursor: "pointer",
  };

  return (
    <section className="row m-0 p-0">
      <article className="col-9 p-5">
        <MultiStep
          steps={steps}
          prevButton={{
            title: "Anterior",
            style: { ...buttonStyle, backgroundColor: "rgb(108,117,125)" },
          }}
          nextButton={{
            title: "Siguiente",
            style: { ...buttonStyle, backgroundColor: "rgb(13,110,253)" },
          }}
        />
      </article>
      <article className="d-none col-3">
        <Package />
      </article>
    </section>
  );
}
