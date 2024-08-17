import CustomerForm from "./CustomerForm";

export default function Reservations() {
  

  return (
    <div className="row">
      <fieldset className="col-sm-12 col-md-4">
        <legend>Datos personales</legend>
        <CustomerForm/>
      </fieldset>
    </div>
  );
}
