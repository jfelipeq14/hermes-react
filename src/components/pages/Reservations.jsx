export default function Reservations() {
  const documentTypes = [
    "CC",
    "CE",
    "PA",
    "SC",
    "CD",
    "TE",
    "PEP",
    "AS",
    "DU",
    "CCEX",
    "CEEX",
    "PAEX",
    "SCEX",
    "CDEX",
    "TEX",
    "RNEX",
    "PEPEX",
    "ASEX",
  ];

  //  Crear una constante con los prefijos telefonicos de todos los paises de suramerica
  const phonePrefixes = [
    { country: "Colombia", prefix: "+57" },
    { country: "Argentina", prefix: "+54" },
    { country: "Bolivia", prefix: "+591" },
    { country: "Brasil", prefix: "+55" },
    { country: "Chile", prefix: "+56" },
    { country: "Ecuador", prefix: "+593" },
    { country: "Guyana", prefix: "+592" },
    { country: "Paraguay", prefix: "+595" },
    { country: "Peru", prefix: "+51" },
    { country: "Surinam", prefix: "+597" },
    { country: "Uruguay", prefix: "+598" },
    { country: "Venezuela", prefix: "+58" },
    { country: "Guayana Francesa", prefix: "+594" },
    { country: "Islas Malvinas", prefix: "+500" },
    { country: "Islas Georgias del Sur", prefix: "+500" },
    { country: "Islas Sandwich del Sur", prefix: "+500" },
  ];


  return (
    <div className="row">
      <fieldset className="col-sm-12 col-md-4">
        <legend>Datos personales</legend>
        <form>
          <div className="form-group my-2">
            <label htmlFor="identification" className="col-12">
              Cedula:
            </label>
            <div className="row">
              <div className="col-sm-12 col-md-5">
                <select
                  className="form-select"
                  aria-label="Default select example"
                >
                  <option selected>Seleccione</option>
                  {documentTypes.map((documentType) => (
                    <option key={documentType}>{documentType}</option>
                  ))}
                </select>
              </div>
              <div className="col-sm-12 col-md-5">
                <input type="text" className="form-control" />
              </div>
              <div className="col-sm-12 col-md-2">
                <button className="btn btn-primary">🔍</button>
              </div>
            </div>
          </div>
          <div className="form-group my-2">
            <div className="row">
              <div className="col-sm-12 col-md-6">
                <label htmlFor="firstName">Primer nombre:</label>
                <input type="text" className="form-control" id="firstName" />
              </div>
              <div className="col-sm-12 col-md-6">
                <label htmlFor="secondName">Segundo nombre:</label>
                <input type="text" className="form-control" id="secondName" />
              </div>
            </div>
          </div>
          <div className="form-group my-2">
            <div className="row">
              <div className="col-sm-12 col-md-6">
                <label htmlFor="firstLastName">Primer apellido:</label>
                <input
                  type="text"
                  className="form-control"
                  id="firstLastName"
                />
              </div>
              <div className="col-sm-12 col-md-6">
                <label htmlFor="secondLastName">Segundo apellido:</label>
                <input
                  type="text"
                  className="form-control"
                  id="secondLastName"
                />
              </div>
            </div>
          </div>
          <div className="form-group my-2">
            <label htmlFor="identification" className="col-12">
              Contacto:
            </label>
            <div className="row">
              <div className="col-sm-12 col-md-6">
                <select
                  className="form-select"
                  aria-label="Default select example"
                >
                  <option selected>Seleccione</option>
                  {phonePrefixes.map((phonePrefix) => (
                    <option
                      key={phonePrefix.prefix}
                    >{`${phonePrefix.country} (${phonePrefix.prefix})`}</option>
                  ))}
                </select>
              </div>
              <div className="col-sm-12 col-md-6">
                <input type="text" className="form-control" />
              </div>
            </div>
          </div>
          <div className="form-group my-2">
            <div className="row">
              <div className="col-sm-12 col-md-6">
                <label htmlFor="birthDate">Fecha de nacimiento:</label>
                <input type="date" className="form-control" id="birthDate" />
              </div>
              <div className="col-sm-12 col-md-6">
                <label htmlFor="age">Edad:</label>
                <input
                  type="number"
                  className="form-control"
                  id="age"
                  readOnly
                />
              </div>
            </div>
          </div>
          <div className="form-group my-2">
            <div className="row">
              <div className="col-sm-12 col-md-6">
                <label htmlFor="email">Correo:</label>
                <input type="email" className="form-control" id="email" />
              </div>
              <div className="col-sm-12 col-md-6">
                <label htmlFor="emailConfirmation">
                  Confirmación de correo:
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="emailConfirmation"
                />
              </div>
            </div>
          </div>
          <div className="form-group my-2">
            <div className="row">
              <div className="col-sm-12 col-md-6">
                <label htmlFor="password">Contraseña:</label>
                <input type="password" className="form-control" id="password" />
              </div>
              <div className="col-sm-12 col-md-6">
                <label htmlFor="passwordConfirmation">
                  Confirmación de contraseña:
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="passwordConfirmation"
                />
              </div>
            </div>
          </div>
          <div className="form-check my-2">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="travel"
            />
            <label className="form-check-label" htmlFor="travel">
              El cliente está incluido en el viaje
            </label>
          </div>
          <div className="buttons">
            <button type="submit" className="btn btn-primary">
              Crear
            </button>
            <button type="reset" className="btn btn-secondary">
              Limpiar
            </button>
          </div>
        </form>
      </fieldset>
    </div>
  );
}
