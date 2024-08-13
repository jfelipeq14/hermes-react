export default function Role() {
//   const array = [
//     "Dashboard",
//     "Gestión de roles",
//     "Gestión de servicios",
//     "Gestión de usuarios",
//     "Gestión de reservas",


//   ];

const array = [
    {
        dashboard: true,
        role: true,
        users: true,
        services: true,
        packages: true,
        programingPackages: true,
        customers: true,
        reservations: true,
        pay: true

    },

]

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
              <tbody>
                {/* agregar el contenido del array en la tabla */}
                
              </tbody>
            </table>
          </fieldset>
        </form>
      </section>
      <section className="col-sm-12 col-md-6">
        <form>
          <fieldset>
            <legend className="border-2 border-bottom">Permisos</legend>
            <div className="">
              <label htmlFor="role">Rol:</label>
              <input
                id="role"
                placeholder="Administrador"
                className="form-control"
              />
            </div>

            <div className="mt-4 border rounded-lg overflow-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr>
                    <th className="px-4 py-2 border-b">Permiso</th>
                    <th className="px-4 py-2 border-b">Opciones</th>
                  </tr>
                </thead>
                <tbody>
                  {array.map((permiso, index) => (
                    <tr key={index} className="border-b">
                      <td className="px-4 py-3">{permiso}</td>
                      <td className="px-4 py-3">
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
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="flex ">
              <button className="btn btn-primary">Guardar</button>
              <button className="btn btn-primary">Limpiar</button>
            </div>
          </fieldset>
        </form>
      </section>
    </div>
  );
}
