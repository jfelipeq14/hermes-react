import { Form } from "react-bootstrap";

export default function ProgramingForm() {
  const events = [
    {
      title: "Cartagena",
      id_programation: 1,
      start: new Date(),
      date_end: new Date(),
      date_execution: new Date(),
      date_ending: new Date(),
    },
    {
      title: "Guatape",
      id_programation: 1,
      start: "2024-08-08",
      date_end: new Date(),
      date_execution: new Date(),
      date_ending: new Date(),
    },
  ];

  const event = {
    title: "Guatape",
    id_programation: 1,
    start: "2024-08-08",
    date_end: new Date(),
    date_execution: new Date(),
    date_ending: new Date(),
  };

  return (
    <Form>
      <select className="form-select" id="categoria" name="categoria">
        <option value=" ">Selecciona un Paquete</option>
        <option>Happy</option>
      </select>
      <div className="py-2">
        <label htmlFor="birthDate">Inicio inscripción:</label>
        <input
          type="date"
          className="form-control"
          name="dateOfBirth"
          required
        />
        <small className="valid-feedback">Todo bien!</small>
        <small className="invalid-feedback">Campo obligatorio</small>
      </div>
      <div className="py-2">
        <label htmlFor="birthDate">Fin inscripción:</label>
        <input
          type="date"
          className="form-control"
          name="dateOfBirth"
          required
        />
        <small className="valid-feedback">Todo bien!</small>
        <small className="invalid-feedback">Campo obligatorio</small>
      </div>
      <div className="py-2">
        <label htmlFor="birthDate">Fecha de ejecución:</label>
        <input
          type="date"
          className="form-control"
          name="dateOfBirth"
          required
        />
        <small className="valid-feedback">Todo bien!</small>
        <small className="invalid-feedback">Campo obligatorio</small>
      </div>
      <div className="py-2">
        <label htmlFor="birthDate">Fecha Finalización:</label>
        <input
          type="date"
          className="form-control"
          name="dateOfBirth"
          required
        />
        <small className="valid-feedback">Todo bien!</small>
        <small className="invalid-feedback">Campo obligatorio</small>
      </div>
      <div className="col-12 my-2">
        <label htmlFor="">Estado:</label>
        <div className="row">
          <div className="col-sm-12 col-md-4 my-2">
            <input type="radio" name="status" value={true} />
            <span className="mx-2">Activo</span>
          </div>
          <div className="col-sm-12 col-md-4 my-2">
            <input type="radio" name="status" value={false} />
            <span className="mx-1">Suspendido</span>
          </div>
          <div className="col-sm-12 col-md-4 my-2">
            <input type="radio" name="status" value={false} />
            <span className="mx-2">Cancelado</span>
          </div>
        </div>
      </div>
      <div className="buttons">
        <button type="submit" className="btn btn-primary">
          Crear
        </button>
        <button type="reset" className="btn btn-secondary">
          Limpiar
        </button>
      </div>
    </Form>
  );
}
