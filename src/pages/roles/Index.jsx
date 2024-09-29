import { PencilSquareIcon, TrashIcon } from "@heroicons/react/16/solid";
import Sidebar from "../layout/Sidebar";
import FormPermissions from "./FormPermissions";
import swal from "sweetalert";

export default function RolesPage() {
  const roles = [
    {
      idRole: 1,
      name: "Aministrador",
      state: true,
    },
    {
      idRole: 2,
      name: "Cliente",
      state: true,
    },
  ];

  const handleChange = (e) => {
    const state = e.target.checked;
    swal({
      title: "¿Estás seguro?",
      text: "Si desactivas este rol, los usuarios que lo tengan asignado no podrán acceder a la plataforma",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((confirm) => {
      if (confirm) {
        e.target.checked = state ? true : false;
      } else {
        e.target.checked = state ? false : true;
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

  return (
    <div className="row">
      <Sidebar></Sidebar>
      <main className="col-10">
        <div className="row">
          <fieldset className="col-sm-12 col-md-6">
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
                    <th>Estado</th>
                  </tr>
                </thead>
                <tbody>
                  {roles.map((rol) => (
                    <tr key={rol.idRole}>
                      <td className="px-4 py-3">{rol.name}</td>
                      <td className="px-4 py-3" key={rol.idRole}>
                        <PencilSquareIcon width={25} type="button" />
                        <TrashIcon width={25} type="button" />
                        <div className="form-switch d-inline">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            role="switch"
                            name="state"
                            checked={rol.state}
                            onChange={handleChange}
                          />
                        </div>
                      </td>
                      <td>{rol.state}</td>
                    </tr>
                  ))}
                </tbody>
               
              </table>
            </table>
          </fieldset>
          <fieldset className="col-sm-12 col-md-6">
            <legend>Permisos</legend>
            <FormPermissions />
          </fieldset>
        </div>
      </main>
    </div>
  );
}
