import { CreditCardIcon, QrCodeIcon } from "@heroicons/react/16/solid";
import { useState } from "react";
import { Form } from "react-bootstrap";
import swal from "sweetalert";

export default function FormPayment() {
  // img
  const [image, setImage] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState(null);
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

  const handleReset = () => {
    setPay({
      cliente: "",
      paquete: "",
      valor: "",
      pago: "",
      restante: "",
      comprobante: "",
      estado: "",
    });
    setImage(null);
    setValidated(false);
  };
  return (
    <>
      <section className="buttons justify-content-around">
        <button className="btn btn-sm btn-primary">
          <CreditCardIcon
            width={80}
            onClick={() => {
              setPaymentMethod("banco");
            }}
          />
        </button>
        <button className="btn btn-sm btn-primary">
          <QrCodeIcon
            width={80}
            onClick={() => {
              setPaymentMethod("qr");
            }}
          />
        </button>
      </section>
      
      {paymentMethod && (
        <div className="container shadow p-3 m-2">
          <h1 className="  text-uppercase">{paymentMethod}</h1>
          {paymentMethod === "banco" ? (
            <>
              <p>
                Nombre: <strong>Juan S. Castaño</strong>
              </p>
              <p>
                Tipo de documento: <strong>CC</strong>
              </p>
              <p>
                Numero de documento:
                <strong>123456789</strong>
              </p>
              <p>
                Banco: <strong>Bancolombia</strong>
              </p>
              <p>
                Tipo de cuenta: <strong>Ahorros</strong>
              </p>
              <p>
                Numero de cuenta: <strong>123456789</strong>
              </p>
            </>
          ) : paymentMethod === "qr" ? (
            <img src="/public/hermes.png" width={80} />
          ) : null}
        </div>
      )}

      <Form
        noValidate
        validated={validated}
        onSubmit={handleSubmit}
        onReset={handleReset}
        className="row p-1"
      >
        {/* Cliente */}
        <label className="col-12">
          Cliente:
          <input
            type="text"
            className="form-control form-control-sm my-2"
            name="name"
            value={pay.cliente}
            onChange={handleChange}
            pattern="^[A-Z][a-zA-Z]+\s*(?:[a-zA-Z]+\s*)$"
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
            className="form-control form-control-sm my-2"
            name="name"
            value={pay.paquete}
            onChange={handleChange}
            pattern="^[A-Z][a-zA-Z]+\s*(?:[a-zA-Z]+\s*)$"
            required
          />
          <small className="valid-feedback">Todo bien!</small>
          <small className="invalid-feedback">Campo obligatorio</small>
        </label>
        <label className="col-6">
          Valor total:
          <input
            type="number"
            className="form-control form-control-sm my-2"
            name="name"
            value={pay.valorTotal}
            onChange={handleChange}
            readOnly
          />
        </label>
        <label className="col-6">
          Pago minimo:
          <input
            type="number"
            className="form-control form-control-sm my-2"
            name="pago"
            value={pay.pagoMinimo}
            onChange={handleChange}
            readOnly
          />
        </label>
        <label className="col-12">
          Comprobante:
          <input
            className="form-control form-control-sm my-2"
            type="file"
            accept="image/*"
            name="comprobante"
            value={pay.comprobante}
            onChange={handleChange}
            required
          />
          <small className="valid-feedback">Todo bien!</small>
          <small className="invalid-feedback">Campo obligatorio</small>
          <img
            alt="preview comprobante"
            className="img-thumbnail my-2"
            src={image}
          />
        </label>
        <label className="col-12">
          Estado:
          <select
            className="form-select form-select-sm"
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
          <button type="submit" className=" btn btn-sm btn-primary">
            Pagar
          </button>
          <button type="reset" className=" btn btn-sm btn-danger">
            Cancelar
          </button>
        </div>
      </Form>
    </>
  );
}
