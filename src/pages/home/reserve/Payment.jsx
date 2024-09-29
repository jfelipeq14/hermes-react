import FormPayment from "../../payments/FormPayment";

export default function Pay() {
  return (
    <fieldset>
      <legend>
        Pago
        <a href="" className="float-end">
          Politicas de pago
        </a>
      </legend>
      <FormPayment />
    </fieldset>
  );
}
