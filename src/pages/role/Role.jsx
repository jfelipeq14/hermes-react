import { PencilSquareIcon, TrashIcon } from "@heroicons/react/16/solid";
import FormPermissions from "./FormPermissions";
import { messages } from "../../utilies/messages";
import { titles } from "../../utilies/titles";
import { useState } from "react";
import Alerts from "../../components/Alerts";

export default function RolePage() {
  const nameRol = [
    {
      id_role: 1,
      name: "Aministrador",
      state: true,
    },
    {
      id_role: 2,
      name: "Cliente",
      state: true,
    },
  ];

  const [role, setRole] = useState(nameRol);
  const [message, setMessage] = useState(messages);
  const [title, setTitle] = useState(titles);
  const [showAlert, setShowAlert] = useState(false);

  const clickAlert = () => {
    setShowAlert(!showAlert);
  };

  const handleChange = (e, confirm) => {
    console.log(e.target.checked);
    if (confirm && e.target.checked) {
      const { name, value, checked, type } = e.target;
      setRole({ ...role, [name]: type === "checkbox" ? checked : value });
      setMessage(message.roles.confirmar);
      setTitle(title.roles.confirmar);
      setShowAlert(true);
    }
  };

  return (
    <div className="row p-5">
      <section className="col-sm-12 col-md-6">
        <form>
          <fieldset>
            <legend>Roles</legend>
            <header>
              <input
                type="search"
                placeholder="Buscar"
                className="form-control"
              />
            </header>
            {showAlert && (
              <Alerts
              message={message}
              title={title}
              clickAlert={clickAlert}
              handleChange={handleChange}
              />
            )}
            <table className="table table-striped">
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th>Nombre</th>
                    <th>acciones</th>
                    <th>Estado</th>
                  </tr>
                </thead>
                <tbody>
                  {nameRol.map((row) => (
                    <tr key={row.id_role}>
                      <td className="px-4 py-3">{row.name}</td>
                      <td className="px-4 py-3" key={row.id_role}>
                        <PencilSquareIcon width={25} type="button" />
                        <TrashIcon width={25} type="button" />
                        <div className=" form-switch d-inline">
                          <input
                            value={row.state}
                            name="state"
                            className="form-check-input"
                            type="checkbox"
                            role="switch"
                            onChange={handleChange}

                          />
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <tbody>
                <form>
                  <div className="form-group">
                    <label htmlFor="role">Roles:</label>
                    <input
                      id="role"
                      placeholder="Administrador"
                      className="form-control"
                    />
                  </div>
                </form>
              </tbody>
            </table>
          </fieldset>
        </form>
      </section>
      <fieldset className="col-sm-12 col-md-6">
        <legend>Permisos</legend>
        <FormPermissions />
      </fieldset>
    </div>
  );
}
