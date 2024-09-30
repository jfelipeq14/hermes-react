import { NavLink } from "react-router-dom";

export default function PageNotFound() {
  return (
    <div className="row">
      <div className="col-12  ">
        <h1>404</h1>
        <h2>La pagina que buscas no se encuentra en el sistema</h2>
        <p>
          Lamentamos las molestias ocasionadas. Estamos trabajando para mejorar el producto.
        </p>
        <NavLink
          to={{ pathname: "/" }}
          className=" btn btn-sm btn-primary m-2"
        >
          Volver al inicio
        </NavLink>
      </div>
    </div>
  );
}
