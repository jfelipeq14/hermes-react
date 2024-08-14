import { PencilIcon, PencilSquareIcon, TrashIcon } from "@heroicons/react/16/solid";

export default function Role() {
  const permisos = [
    {
      nombre: "dashboard",
      active: true,
    },
    {
      nombre: "role",
      active: true,
    },
    {
      nombre: "users",
      active: true,
    },
    {
      nombre: "services",
      active: true,
    },
    {
      nombre: "packages",
      active: true,
    },
    {
      nombre: "programingPackages",
      active: true,
    },
    {
      nombre: "customers",
      active: true,
    },
    {
      nombre: "reservations",
      active: true,
    },
    {
      nombre: "pay",
      active: true,
    },
  ];

  const privilegios = [
    {
      nombre: "Crear",
    },
    {
      nombre: "Ver",
    },
    {
      nombre: "Editar",
    },
    {
      nombre: "Eliminar",
    },
    {
      nombre: "Cambio de estado",
    },
    {
      nombre: "Buscar",
    },
  ];

  const nameRol = [
    {
      nombre: "Administrador",
    },
    {
      nombre:"Cliente"
    }
  ];

  const acciones = [{
    nombre:"acciones"
  }];

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
                    {acciones.map((permiso, index) => (
                      <th key={index}>{permiso.nombre}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {nameRol.map((row, index) => (
                    <tr key={index}>
                      <td className="px-4 py-3">{row.nombre}</td>
                      {acciones.map((_, idx) => (
                        <td className="px-4 py-3" key={idx}>
                          <PencilSquareIcon width={25}
                          type="button" />
                           <TrashIcon width={25}
                          type="button" />
                           <PencilIcon width={25}
                          type="button" />
                        </td>
                      ))}
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
        <legend>Permisos</legend>

        <form>
          <div className="form-group">
            <label htmlFor="role">Rol:</label>
            <input
              id="role"
              placeholder="Administrador"
              className="form-control"
            />
          </div>
        </form>

        <table className="table table-striped">
          <thead>
            <tr>
              <th>Nombre</th>
              {privilegios.map((permiso, index) => (
                <th key={index}>{permiso.nombre}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {permisos.map((row, index) => (
              <tr key={index}>
                <td className="px-4 py-3">{row.nombre}</td>
                {privilegios.map((_, idx) => (
                  <td className="px-4 py-3" key={idx}>
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id={`permiso${index}-${idx}`}
                    />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>

        <div className="buttons">
          <button className="btn btn-primary">Guardar</button>
          <button className="btn btn-primary">Limpiar</button>
        </div>
      </fieldset>
    </div>
  );
}
