import { useState } from "react";
import {
  PencilSquareIcon,
  // PlusCircleIcon,
  TrashIcon,
} from "@heroicons/react/16/solid";
 
import FormPermissions from "./FormPermissions";
import swal from "sweetalert";
// import { NavLink } from "react-router-dom";

export default function RolesPage() {
  const [roles, setRoles] = useState([
    {
      idRole: 1,
      name: "Administrador",
      state: true,
    },
    {
      idRole: 2,
      name: "Cliente",
      state: true,
    },
  ]);

  const [selectedRole, setSelectedRole] = useState(null);

  const handleChange = (id, currentState) => {
    const newState = !currentState;
    swal({
      title: "¿Estás seguro?",
      text: newState
        ? "Si activas este rol, los usuarios asignados podrán acceder a la plataforma"
        : "Si desactivas este rol, los usuarios que lo tengan asignado no podrán acceder a la plataforma",
      icon: "warning",
      buttons: true,
      dangerMode: !newState,
    }).then((confirm) => {
      if (confirm) {
        setRoles((prevRoles) =>
          prevRoles.map((role) =>
            role.idRole === id ? { ...role, state: newState } : role
          )
        );
        swal({
          title: newState ? "Activado" : "Desactivado",
          text: newState
            ? "El rol ha sido activado"
            : "El rol ha sido desactivado",
          icon: newState ? "success" : "info",
          timer: 2000,
          buttons: false,
        });
      } else {
        swal({
          title: "Cancelado",
          text: "No se han realizado cambios",
          icon: "error",
          timer: 2000,
          buttons: false,
        });
      }
    });
  };

  const handleDelete = (id) => {
    swal({
      title: "¿Estás seguro?",
      text: "Una vez eliminado, no podrás recuperar este rol",
      icon: "warning",
      buttons: ["Cancelar", "Sí, eliminar"],
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        setRoles((prevRoles) => prevRoles.filter((role) => role.idRole !== id));
        swal("Eliminado", "El rol ha sido eliminado correctamente", "success");
      } else {
        swal("Cancelado", "El rol está a salvo", "info");
      }
    });
  };

  const handleRoleClick = (role) => {
    setSelectedRole(role);
    // Aquí puedes agregar más lógica si es necesario, como cargar permisos específicos del rol
  };

  return (
    <div className="row w-100 h-100">
       
      <main className="col-10 justify-content-center align-items-center">
        <div className="row">
          <fieldset className="col-sm-12 col-md-6">
            <legend>Roles</legend>
            {/* <NavLink
              to={{ pathname: "/reserve" }}
              state={{ identification: 0 }}
              className="btn btn-sm btn-primary float-end"
            >
              <PlusCircleIcon width={20} />
              Crear
            </NavLink> */}
            <form className="w-50">
              <input
                type="search"
                id="identification"
                className="form-control form-control-sm"
                placeholder="Buscar"
              />
            </form>
            <table className="table table-hover my-2">
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th>Acciones</th>
                  <th>Estado</th>
                </tr>
              </thead>
              <tbody>
                {roles.map((rol) => (
                  <tr
                    key={rol.idRole}
                    onClick={() => handleRoleClick(rol)}
                    className={`cursor-pointer ${
                      selectedRole && selectedRole.idRole === rol.idRole
                        ? "table-active"
                        : ""
                    }`}
                  >
                    <td className="px-4 py-3">{rol.name}</td>
                    <td className="px-4 py-3">
                      <PencilSquareIcon
                        width={20}
                        type="button"
                        className="mx-1"
                      />
                      <TrashIcon
                        width={20}
                        type="button"
                        className="mx-1"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleDelete(rol.idRole);
                        }}
                      />
                      <div className="form-switch d-inline">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          role="switch"
                          name="state"
                          checked={rol.state}
                          onChange={(e) => {
                            e.stopPropagation();
                            handleChange(rol.idRole, rol.state);
                          }}
                        />
                      </div>
                    </td>
                    <td>{rol.state ? "Activo" : "Inactivo"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </fieldset>
          <fieldset className="col-sm-12 col-md-6">
            <legend>Permisos</legend>
            <FormPermissions selectedRole={selectedRole} />
          </fieldset>
        </div>
      </main>
    </div>
  );
}
