import { PencilSquareIcon, TrashIcon } from "@heroicons/react/16/solid";
import FormPermissions from "./FormPermissions";
import swal from "sweetalert";

export default function RolePage() {
  const roles = [
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
      }else{
        e.target.checked = state ? false : true;
      }
    });
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
                    <th>Estado</th>
                  </tr>
                </thead>
                <tbody>
                  {roles.map((rol) => (
                    <tr key={rol.id_role}>
                      <td className="px-4 py-3">{rol.name}</td>
                      <td className="px-4 py-3" key={rol.id_role}>
                        <PencilSquareIcon width={25} type="button" />
                        <TrashIcon width={25} type="button" />
                        <div className=" form-switch d-inline">
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
