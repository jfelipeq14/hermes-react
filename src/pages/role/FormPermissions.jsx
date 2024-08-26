import { useState } from "react";
import swal from "sweetalert";

export default function FormPermissions() {
  const permissions = [
    { id_permission: 1, name: "Dashboard", state: true },
    { id_permission: 2, name: "Gestion de Roles", state: true },
    { id_permission: 3, name: "Gestion de Servicios", state: true },
    { id_permission: 4, name: "Gestion de Usuarios", state: true },
    { id_permission: 5, name: "Gestion de Reservas", state: true },
  ];

  const privilegios = [
    { id_privilege: 1, name: "Crear" },
    { id_privilege: 2, name: "Ver" },
    { id_privilege: 3, name: "Editar" },
    { id_privilege: 4, name: "Eliminar" },
    { id_privilege: 5, name: "Cambiar estado" },
  ];

  // Initialize state with all permissions and their privileges
  const [role, setRole] = useState({ name: "" });
  const [permissionsWithPrivileges, setPermissionsWithPrivileges] = useState(
    permissions.map(permission => ({
      ...permission,
      privileges: privilegios.reduce((acc, privilege) => {
        acc[privilege.id_privilege] = false;
        return acc;
      }, {})
    }))
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Check if any privilege is selected
    const hasSelectedPrivileges = permissionsWithPrivileges.some(permission =>
      Object.values(permission.privileges).includes(true)
    );

    if (!hasSelectedPrivileges) {
      swal({
        title: "Por favor seleccione al menos un privilegio",
        icon: "warning",
      });
      return;
    }

    swal({
      title: "¿Quieres otorgar estos privilegios?",
      text: "Revisa todos los campos antes de enviar el formulario para evitar conflictos",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((confirm) => {
      if (confirm) {
        // Reset form and show success alert
        setPermissionsWithPrivileges(
          permissionsWithPrivileges.map(permission => ({
            ...permission,
            privileges: privilegios.reduce((acc, privilege) => {
              acc[privilege.id_privilege] = false;
              return acc;
            }, {})
          }))
        );
        setRole({ name: "" });
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
  };

  const handleChangeRole = (e) => {
    const { name, value } = e.target;
    setRole({ ...role, [name]: value });
  };

  const handleChangePrivilege = (permissionId, privilegeId) => (e) => {
    const { checked } = e.target;

    setPermissionsWithPrivileges(prev =>
      prev.map(permission =>
        permission.id_permission === permissionId
          ? {
              ...permission,
              privileges: {
                ...permission.privileges,
                [privilegeId]: checked
              }
            }
          : permission
      )
    );
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
            {privilegios.map(privilege => (
              <th key={privilege.id_privilege}>{privilege.name}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {permissionsWithPrivileges.map(permission => (
            <tr key={permission.id_permission}>
              <td className="px-4 py-3">{permission.name}</td>
              {privilegios.map(privilege => (
                <td className="px-4 py-3" key={privilege.id_privilege}>
                  <input
                    className="form-check-input"
                    type="checkbox"
                    checked={!!permission.privileges[privilege.id_privilege]}
                    value={privilege.id_privilege}
                    onChange={handleChangePrivilege(permission.id_permission, privilege.id_privilege)}
                  />
                </td>
              ))}
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
    </form>
  );
}
