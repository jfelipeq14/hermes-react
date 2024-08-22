import SimpleAlert from "../../components/Alerts";
import { RolePrivilege } from "../../models/role/rolePrivilege.model";
import { Role } from "../../models/role/role.model";
import { messages } from "../../utilies/messages";
import { useState } from "react";
import { variants } from "../../utilies/variants";


export default function FormPermissions() {

    const permissions = [
        {
          id_permission: 1,
          name: "Dashboard",
          state: true,
        },
        {
          id_permission: 2,
          name: "Gestion de Roles",
          state: true,
        },
        {
          id_permission: 3,
          name: "Gestion de Servicios",
          state: true,
        },
        {
          id_permission: 4,
          name: "Gestion de Usuarios",
          state: true,
        },
        {
          id_permission: 5,
          name: "Gestion de Reservas",
          state: true,
        },
      ];
    
      const privilegios = [
        {
          id_privilege: 1,
          name: "Crear",
          id_permission: 1,
        },
        {
          id_privilege: 2,
          name: "Ver",
          id_permission: 2,
        },
        {
          id_privilege: 3,
          name: "Editar",
          id_permission: 3,
        },
        {
          id_privilege: 4,
          name: "Eliminar",
          id_permission: 4,
        },
        {
          id_privilege: 5,
          name: "Cambiar estado",
          id_permission: 5,
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
      setVariant(variant.error);
      setShowAlert(true);
      return;
    } else {
      setMessage(messages.success.formSent);
      setVariant(variant.correct);
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
  const [variant, setVariant] = useState(variants);
  const [showAlert, setShowAlert] = useState(false);
  const clickAlert = () => {
    setShowAlert(!showAlert);
  };

  return (
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
                return <th key={privilege.id_privilege}>{privilege.name}</th>;
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
          variant={variant}
          title="Titulo"
          message={message}
          clickAlert={clickAlert}
        />
      ) : (
        ""
      )}
    </form>
  );
}
