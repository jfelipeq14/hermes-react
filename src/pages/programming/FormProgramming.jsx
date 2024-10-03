/* eslint-disable react/prop-types */
import { useState } from "react";
import { Form } from "react-bootstrap";
import swal from "sweetalert";

export default function FormProgramming({programming, setProgramming}) {
  const [validated, setValidated] = useState(false);
  

  // fechas
  let [minEnd, setMinEnd] = useState("");
  let [minInscription, setMinInscription] = useState("");
  let [maxInscription, setMaxInscription] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProgramming({
      ...programming,
      [name]: value,
    });

    // validar valores minimos de las fechas
    if (name === "date_execution") {
      let fecha = new Date(value);
      setMinEnd(fecha.toISOString().split("T")[0]);
      fecha.setDate(fecha.getDate() - 15);
      setMinInscription(fecha.toISOString().split("T")[0]);
      fecha.setDate(fecha.getDate() + 5);
      setMaxInscription(fecha.toISOString().split("T")[0]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!e.currentTarget.checkValidity()) {
      e.stopPropagation();
    } else {
      swal({
        title: "¿Quieres registrarte esa programación?",
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
      <label className="col-12">
        <select className="form-select form-select-sm my-2" name="categoria">
          <option value="">Selecciona un Paquete: </option>
          <option value="happy">Happy</option>
        </select>
      </label>

      {/* ejecucion */}
      <label>
        Fecha de ejecución:
        <input
          type="date"
          className="form-control form-control-sm my-2 my-2"
          name="dateExecute"
          onChange={handleChange}
          value={programming.dateExecute}
          required
        />
        <small className="valid-feedback">Todo bien!</small>
        <small className="invalid-feedback">Campo obligatorio</small>
      </label>
      {/* finalizacion */}
      <label>
        Fecha Finalización:
        <input
          type="date"
          className="form-control form-control-sm my-2"
          name="dateFinish"
          value={programming.dateFinish}
          onChange={handleChange}
          min={minEnd}
          required
        />
        <small className="valid-feedback">Todo bien!</small>
        <small className="invalid-feedback">Campo obligatorio</small>
      </label>

      {/* inicio inscricion */}
      <label>
        Inicio inscripción:
        <input
          type="date"
          className="form-control form-control-sm my-2"
          name="start"
          value={programming.start}
          onChange={handleChange}
          min={minInscription}
          required
        />
        <small className="valid-feedback">Todo bien!</small>
        <small className="invalid-feedback">Campo obligatorio</small>
      </label>
      {/* fin inscripcion */}
      <label>
        Fin inscripción:
        <input
          type="date"
          className="form-control form-control-sm my-2"
          name="end"
          value={programming.end}
          onChange={handleChange}
          min={maxInscription}
          required
        />
        <small className="valid-feedback">Todo bien!</small>
        <small className="invalid-feedback">Campo obligatorio</small>
      </label>

      <div className="col-12 my-2">
        <label htmlFor="">Estado:</label>
        <div className="row">
          <div className="col-sm-12 col-md-4 my-2">
            <input type="radio" name="status" value="A" />
            <span className="mx-2">Activo</span>
          </div>
          <div className="col-sm-12 col-md-4 my-2">
            <input type="radio" name="status" value="S" />
            <span className="mx-1">Suspendido</span>
          </div>
          <div className="col-sm-12 col-md-4 my-2">
            <input type="radio" name="status" value="C" />
            <span className="mx-2">Cancelado</span>
          </div>
        </div>
      </div>
      <div className="buttons">
        <button type="submit" className=" btn btn-sm btn-primary">
          Crear
        </button>
        <button type="reset" className=" btn btn-sm btn-secondary">
          Limpiar
        </button>
      </div>
    </Form>
  );
}
