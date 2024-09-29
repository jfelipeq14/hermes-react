import PaymentForm from "./PaymentForm";

export default function Pay() {
  return (
    <div className="row m-0 p-0 g-2">
      <fieldset className="col-sm-12 col-lg-4">
        <legend>
          Pago
          <a href="" className="float-end">
            Politicas de pago
          </a>
        </legend>
        <PaymentForm />
      </fieldset>
    </div>
  );
}
