export default function Role() {
  const array = [
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

  const permisos = [
    {
      nombre: "create",
    },
    {
      nombre: "read",
    },
    {
      nombre: "update",
    },
    {
      nombre: "delete",
    },
  ];

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
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th>acciones</th>
                </tr>
              </thead>
              <tbody>{/* agregar el contenido del array en la tabla */}</tbody>
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
              <th>Permiso</th>
              {permisos.map((permiso, index) => {
                <th key={index}>{permiso.nombre}</th>;
              })}
            </tr>
          </thead>
          <tbody>
            {array.map((row, index) => (
              <tr key={index}>
                <td className="px-4 py-3">{row.nombre}</td>
                {[...Array(5)].map((_, idx) => (
                  <td className="px-4 py-3">
                    <input
                      key={idx}
                      className="form-check-input"
                      type="checkbox"
                      id={`flexCheckDefault${idx}`}
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
