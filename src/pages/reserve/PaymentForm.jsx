import {
  CreditCardIcon,
  CurrencyDollarIcon,
  QrCodeIcon,
} from "@heroicons/react/16/solid";
import { useState } from "react";
import { Form } from "react-bootstrap";
import swal from "sweetalert";

export default function PaymentForm() {
  // img
  const [image, setImage] = useState(null);
  // payment method
  const [paymentMethod, setPaymentMethod] = useState(null);

  const [validated, setValidated] = useState(false);
  const [pay, setPay] = useState({
    valorTotal: 0,
    pagoMinimo: 0,
    comprobante: "",
  });

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
    <>
      <section className="buttons justify-content-around">
        <button className="btn btn-outline-primary">
          <CreditCardIcon
            width={80}
            onClick={() => {
              setPaymentMethod("banco");
            }}
          />
        </button>
        <button className="btn btn-outline-primary">
          <CurrencyDollarIcon
            width={80}
            onClick={() => {
              setPaymentMethod("nequi");
            }}
          />
        </button>
        <button className="btn btn-outline-primary">
          <QrCodeIcon
            width={80}
            onClick={() => {
              setPaymentMethod("qr");
            }}
          />
        </button>
      </section>
      <section>
        {paymentMethod && (
          <div className="container shadow p-3 m-2">
            <h1 className="text-center text-uppercase">{paymentMethod}</h1>
            {paymentMethod === "nequi" ? (
              <>
                <p>
                  Numero de celular: <strong>3128283889</strong>
                </p>
                <p>
                  Nombre:
                  <strong>Juan Castaño</strong>
                </p>
              </>
            ) : paymentMethod === "banco" ? (
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
      </section>
      <Form
        noValidate
        validated={validated}
        onSubmit={handleSubmit}
        className="row p-1"
      >
        <label className="col-6">
          Valor total:
          <input
            type="number"
            className="form-control"
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
            className="form-control"
            name="pago"
            value={pay.pagoMinimo}
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
          <img
            alt="preview comprobante"
            className="img-thumbnail my-2"
            src={image}
          />
        </label>
        {/* buttons */}
        <div className="buttons my-4">
          <button type="submit" className="btn btn-primary">
            Pagar
          </button>
          <button type="reset" className="btn btn-danger">
            Cancelar
          </button>
        </div>
      </Form>
    </>
  );
}
