export default function Role() {
  const array = [
    "Dashboard",
    "Gestión de roles",
    "Gestión de servicios",
    "Gestión de usuarios",
    "Gestión de reservas",
  ];

  return (
    <div className="row">
      <section className="col-sm-12 col-md-6">
        <form>
          <fieldset>
            <legend className="border-2 border-bottom">Roles</legend>
            <header>
              <input
                type="search"
                placeholder="Buscar"
                className="form-control"
              />
            </header>
            <table>
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th>acciones</th>
                </tr>
              </thead>
              <tbody></tbody>
            </table>
          </fieldset>
        </form>
      </section>
      <section className="col-sm-12 col-md-6">
        <form>
          <fieldset>
            <legend className="border-2 border-bottom">Permisos</legend>
            <div className="form-group d-flex align-items-center">
              <label htmlFor="role">Rol:</label>
              <input
                id="role"
                placeholder="Administrador"
                className="form-control"
              />
            </div>
            <div className="mt-4 border rounded-lg overflow-auto">
              {array.map((permiso, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between px-4 py-3 border-b"
                >
                  <div>{permiso}</div>
                  <div className="flex space-x-2">
                    {[...Array(5)].map((_, idx) => (
                      <input
                        key={idx}
                        className="form-check-input"
                        type="checkbox"
                        id={`flexCheckDefault${idx}`}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div className="flex">
              <button className="btn btn-primary">Guardar</button>
              <button className="btn btn-primary">Limpiar</button>
            </div>
          </fieldset>
        </form>
      </section>
    </div>
  );
}
