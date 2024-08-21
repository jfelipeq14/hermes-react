import { RolePrivilege } from "../../models/role/rolePrivilege.model";
import { Role } from "../../models/role/role.model";
import SimpleAlert from "../../components/Alerts";
import { messages } from "../../utilies/messages";
import { useState } from "react";
import {
  PencilIcon,
  PencilSquareIcon,
  TrashIcon,
} from "@heroicons/react/16/solid";

export default function RolePage() {
  const permissions = [
    {
      id_permission: 1,
      name: "Dashboard",
      state: true,
    },
    {
      id_permission: 2,
      name: "Role",
      state: true,
    },
  ];

  const privilegios = [
    {
      id_privilege: 1,
      name: "Crear",
      id_permission: 2,
    },
    {
      id_privilege: 2,
      name: "Ver",
      id_permission: 1,
    },
  ];

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

  const formRole = new Role();
  const formRolPrivilege = new RolePrivilege();

  const [role, setRole] = useState(formRole);
  const [rolePrivilege, setRolePrivilege] = useState(formRolPrivilege);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (rolePrivilege.id_privilege === 0) {
      setMessage(messages.error.emptyFields);
      setShowAlert(true);
      return;
    }
  };

  const handleChangeRole = (e) => {
    const { name, value, checked, type } = e.target;
    setRole({ ...role, [name]: type === "checkbox" ? checked : value });
  };

  const handleChangePrivilege = (e) => {
    const { name, value } = e.target;
    setRolePrivilege({
      ...rolePrivilege,
      [name]: parseInt(value),
    });
  };

  const [message, setMessage] = useState(messages);
  const [showAlert, setShowAlert] = useState(false);
  const clickAlert = () => {
    setShowAlert(!showAlert);
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
            <table className="table table-striped">
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th>Nombre</th>
                    <th>acciones</th>
                  </tr>
                </thead>
                <tbody>
                  {nameRol.map((row) => (
                    <tr key={row.id_role}>
                      <td className="px-4 py-3">{row.name}</td>
                      <td className="px-4 py-3" key={row.id_role}>
                        <PencilSquareIcon width={25} type="button" />
                        <TrashIcon width={25} type="button" />
                        <PencilIcon width={25} type="button" />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <tbody>
                {/* agregar el contenido del privilegios en la tabla */}
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
        <legend>permissions</legend>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="role">Rol:</label>
            <input
              className="form-control"
              name="name"
              value={role.name}
              onChange={handleChangeRole}
              pattern="^[A-Z][a-zñ]{3,}[^\d\W_]*$"
              required
            />
          </div>
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Nombre</th>
                {privilegios.map((privilege) => {
                  if (privilege.id_permission !== 0) {
                    return (
                      <th key={privilege.id_privilege}>{privilege.name}</th>
                    );
                  }
                })}
              </tr>
            </thead>
            <tbody>
              {privilegios.map((privilege) => (
                <tr key={privilege.id_permission}>
                  <td className="px-4 py-3">
                    {
                      permissions.find(
                        (p) => p.id_permission === privilege.id_permission
                      ).name
                    }
                  </td>
                  {privilegios.map((privilege) => {
                    if (privilege.id_permission !== 0) {
                      return (
                        <td className="px-4 py-3" key={privilege.id_privilege}>
                          <input
                            className="form-check-input"
                            type="checkbox"
                            name="id_privilege"
                            value={privilege.id_privilege}
                            onChange={handleChangePrivilege}
                          />
                        </td>
                      );
                    }
                  })}
                </tr>
              ))}
            </tbody>
          </table>
          <div className="buttons">
            <button type="submit" className="btn btn-primary">
              Guardar
            </button>
            <button type="reset" className="btn btn-primary">
              Limpiar
            </button>
          </div>
          {showAlert ? (
            <SimpleAlert
              show={showAlert}
              variant="danger"
              title="Titulo"
              message={message}
              clickAlert={clickAlert}
            />
          ) : (
            ""
          )}
        </form>
      </fieldset>
    </div>
  );
}
