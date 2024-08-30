import { useState } from "react";
import { Form } from "react-bootstrap";
import { Pays } from "../../models/pays/pays.model";
import swal from "sweetalert";
import { Reservations } from "../../models/reservations/reservations.model";
import { Customers } from "../../models/reservations/customers.model";

export default function PayForm() {
  const formPay = new Pays();
  const formReserve = new Reservations();
  const formCustomer = new Customers();
  const [validated, setValidated] = useState(false);
  const [pay, setPay] = useState(formPay);

  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;
    setPay({ ...pay, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!e.currentTarget.checkValidity()) {
      e.stopPropagation();
    } else {
      swal({
        title: "¿Quieres registrarte con estos datos?",
        text: "Revisa todos los campos antes de enviar el formulario para evitar conflictos",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      }).then((confirm) => {
        if (confirm) {
          swal({
            title: "Enviado",
            text: "Los datos fueron enviados correctamente",
            icon: "success",
            timer: 2000,
            buttons: false,
          });
        } else {
          swal({
            title: "Cancelado",
            text: "Los datos no se han enviado",
            icon: "error",
            timer: 2000,
            buttons: false,
          });
        }
      });
    }

    setValidated(true);
  };
  return (
    <Form
      noValidate
      validated={validated}
      onSubmit={handleSubmit}
      className="row p-1"
    >
      {/* Cliente */}
      <div className="col-12">
        <label htmlFor="name">Nombre:</label>
        <input
          type="text"
          className="form-control"
          name="name"
          value={`${formCustomer.id_user} - ${formCustomer.name} ${formCustomer.lastName}`}
          onChange={handleChange}
          pattern="^[A-Z][a-zñ]{3,}[^\d\W_]*$"
          required
        />
        <small className="valid-feedback">Todo bien!</small>
        <small className="invalid-feedback">Campo obligatorio</small>
      </div>
      {/* Paquete */}
      <div className="col-12">
        <label htmlFor="destination">Paquete</label>
        <input
          type="text"
          className="form-control"
          name="destination"
          value={formReserve.id_detail_programming_package}
          onChange={handleChange}
          pattern="^[A-Z][a-zñ]{3,}[^\d\W_]*$"
          required
        />
        <small className="valid-feedback">Todo bien!</small>
        <small className="invalid-feedback">Campo obligatorio</small>
      </div>
    </Form>
  );
}
