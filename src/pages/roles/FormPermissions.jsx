import { useState, useEffect } from "react";
import swal from "sweetalert";

export default function FormPermissions({ selectedRole }) {
  const permissions = [
    { idPermission: 1, name: "Dashboard", state: true },
    { idPermission: 2, name: "Roles", state: true },
    { idPermission: 3, name: "Servicios", state: true },
    { idPermission: 4, name: "Usuarios", state: true },
    { idPermission: 5, name: "Reservas", state: true },
  ];

  const privilegios = [
    { idPrivilege: 1, name: "Crear" },
    { idPrivilege: 2, name: "Ver" },
    { idPrivilege: 3, name: "Editar" },
    { idPrivilege: 4, name: "Eliminar" },
    { idPrivilege: 5, name: "Cambiar estado" },
  ];

  const [permissionsWithPrivileges, setPermissionsWithPrivileges] = useState(
    []
  );
  const [isModalOpen, setIsModalOpen] = useState(true);

  useEffect(() => {
    resetPermissions();
  }, [selectedRole]);

  const resetPermissions = () => {
    setPermissionsWithPrivileges(
      permissions.map((permission) => ({
        ...permission,
        privileges: privilegios.reduce((acc, privilege) => {
          acc[privilege.idPrivilege] = false;
          return acc;
        }, {}),
      }))
    );
  };

  const handleSave = (e) => {
    e.preventDefault();

    const hasSelectedPrivileges = permissionsWithPrivileges.some((permission) =>
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
        console.log("Guardando permisos:", permissionsWithPrivileges);

        resetPermissions();
        swal({
          title: "¡Privilegios guardados!",
          text: "Los privilegios se han actualizado correctamente.",
          icon: "success",
          timer: 2000,
          buttons: false,
        }).then(() => {
          setIsModalOpen(false);
        });
      }
    });
  };

  const handleCancel = () => {
    swal({
      title: "¿Estás seguro de cancelar?",
      text: "Se perderán todos los cambios no guardados",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willCancel) => {
      if (willCancel) {
        resetPermissions();
        swal({
          title: "Cambios cancelados",
          text: "Los cambios han sido descartados",
          icon: "info",
          timer: 2000,
          buttons: false,
        }).then(() => {
          setIsModalOpen(false);
        });
      }
    });
  };

  const handleChangePrivilege = (permissionId, privilegeId) => (e) => {
    const { checked } = e.target;

    setPermissionsWithPrivileges((prev) =>
      prev.map((permission) =>
        permission.idPermission === permissionId
          ? {
              ...permission,
              privileges: {
                ...permission.privileges,
                [privilegeId]: checked,
              },
            }
          : permission
      )
    );
  };

  if (!isModalOpen) {
    return null;
  }

  return (
    <form onSubmit={handleSave}>
      <table className="table">
        <thead>
          <tr>
            <th>Nombre</th>
            {privilegios.map((privilege) => (
              <th key={privilege.idPrivilege}>{privilege.name}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {permissionsWithPrivileges.map((permission) => (
            <tr key={permission.idPermission}>
              <td className="px-4 py-3">{permission.name}</td>
              {privilegios.map((privilege) => (
                <td className="px-4 py-3" key={privilege.idPrivilege}>
                  <input
                    className="form-check-input"
                    type="checkbox"
                    checked={!!permission.privileges[privilege.idPrivilege]}
                    onChange={handleChangePrivilege(
                      permission.idPermission,
                      privilege.idPrivilege
                    )}
                  />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="buttons">
        <button type="submit" className="btn btn-sm btn-primary me-2">
          Guardar
        </button>
        <button
          type="button"
          className="btn btn-sm btn-danger"
          onClick={handleCancel}
        >
          Cancelar
        </button>
      </div>
    </form>
  );
}
