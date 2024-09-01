import { useState } from "react";
import { Form } from "react-bootstrap";
import swal from "sweetalert";

export default function PayForm() {
  // img
  const [image, setImage] = useState(null);

  const [validated, setValidated] = useState(false);
  const [pay, setPay] = useState({
    cliente: "",
    paquete: "",
    valor: "",
    pago: "",
    restante: "",
    comprobante: "",
    estado: "",
  });

  const estados = [
    { value: "R", nombre: "Revisar" },
    { value: "P", nombre: "Pago" },
    { value: "N", nombre: "No pago" },
    { value: "A", nombre: "Anulado" },
  ];

  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;
    setPay({ ...pay, [name]: type === "checkbox" ? checked : value });

    if (e.target.files && e.target.files[0]) {
      setImage(URL.createObjectURL(e.target.files[0]));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!e.currentTarget.checkValidity()) {
      e.stopPropagation();
    } else {
      swal({
        title: "¿Quieres registrarte ese pago?",
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
      <label className="col-12">
        Cliente:
        <input
          type="text"
          className="form-control"
          name="name"
          value={pay.cliente}
          onChange={handleChange}
          pattern="^[A-Z][a-zñ]{3,}[^\d\W_]*$"
          required
        />
        <small className="valid-feedback">Todo bien!</small>
        <small className="invalid-feedback">Campo obligatorio</small>
      </label>
      {/* Paquete */}
      <label className="col-12">
        Paquete:
        <input
          type="text"
          className="form-control"
          name="name"
          value={pay.paquete}
          onChange={handleChange}
          pattern="^[A-Z][a-zñ]{3,}[^\d\W_]*$"
          required
        />
        <small className="valid-feedback">Todo bien!</small>
        <small className="invalid-feedback">Campo obligatorio</small>
      </label>
      <label className="col-4">
        Valor:
        <input
          type="number"
          className="form-control"
          name="name"
          value={pay.valor}
          onChange={handleChange}
          readOnly
        />
      </label>
      <label className="col-4">
        Pagó:
        <input
          type="number"
          className="form-control"
          name="pago"
          value={pay.pago}
          onChange={handleChange}
          readOnly
        />
      </label>
      <label className="col-4">
        Restante:
        <input
          type="number"
          className="form-control"
          name="restante"
          value={pay.restante}
          onChange={handleChange}
          readOnly
        />
      </label>
      <label className="col-12">
        Comprobante:
        <input
          className="form-control"
          type="file"
          accept="image/*"
          name="comprobante"
          value={pay.comprobante}
          onChange={handleChange}
          required
        />
        <small className="valid-feedback">Todo bien!</small>
        <small className="invalid-feedback">Campo obligatorio</small>
        <img alt="preview comprobante" className="img-thumbnail" src={image} />
      </label>
      <label className="col-12">
        Estado:
        <select
          className="form-select"
          name="estado"
          value={pay.estado}
          onChange={handleChange}
          required
        >
          <option value="">Selecciona</option>
          {estados.map((estado, index) => (
            <option key={index} value={estado.value}>
              {estado.nombre}
            </option>
          ))}
        </select>
        <small className="valid-feedback">Todo bien!</small>
        <small className="invalid-feedback">Campo obligatorio</small>
      </label>
      {/* buttons */}
      <div className="buttons my-4">
        <button type="submit" className="btn btn-primary">
          Pagar
        </button>
        <button type="reset" className="btn btn-secondary">
          Cancelar
        </button>
      </div>
    </Form>
  );
}
