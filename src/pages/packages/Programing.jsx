import { Calendar } from "../../components/Calendar";
import { administrator } from "../../utilies/routes";
import Sidebar, { SidebarItem } from "../layout/Sidebar";

export default function Programing() {
  return (
    <div className="row">
      <Sidebar>
        {administrator.map((link) => {
          return (
            <SidebarItem
              key={link.name}
              name={link.name}
              href={link.href}
              icon={<link.icon width={30} />}
            />
          );
        })}
      </Sidebar>
      <main className="col-11">
        <div className="row p-2">
          <fieldset className="col-sm-12 col-md-6">
            <legend>Formulario</legend>
            <select className="form-select" id="categoria" name="categoria">
              <option value=" ">Selecciona un Paquete</option>
              <option>Happy</option>
            </select>
            <div className="col-6 py-2">
              <label htmlFor="birthDate">Inicio inscripción:</label>
              <input
                type="date"
                className="form-control"
                name="dateOfBirth"
                //   value={customer.dateOfBirth}
                //   onChange={handleChangeCustomer}
                //   max={limitDate}
                required
              />
              <small className="valid-feedback">Todo bien!</small>
              <small className="invalid-feedback">Campo obligatorio</small>
            </div>
          </fieldset>
          <fieldset className="col-sm-12 col-md-6">
            <legend>Agenda</legend>
            <Calendar />
          </fieldset>
        </div>
      </main>
    </div>
  );
}
