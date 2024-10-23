import {
  EyeIcon,
  PencilSquareIcon,
  PlusCircleIcon,
} from "@heroicons/react/16/solid";
import { NavLink } from "react-router-dom";
import swal from "sweetalert";
import { useState } from "react";

export default function PackagesPage() {
  const [packs, setPacks] = useState([
    {
      id: 1,
      nombres: "Cartagena",
      fechaInscripcion: "24/08/2024",
      fechaFinInscripcion: "30/08/2024",
      fechaEjecucion: "10/09/2024",
      valor: 670000,
      estado: true,
    },
    {
      id: 2,
      nombres: "Barranquilla",
      fechaInscripcion: "13/08/2024",
      fechaFinInscripcion: "20/08/2024",
      fechaEjecucion: "30/08/2024",
      valor: 800000,
      estado: false,
    },
  ]);

  const services = [
    {
      nombre: "Visita Muralla ",
      valor: 45000,
      cantidad: 1,
    },
    {
      nombre: "Lancha",
      valor: 20000,
      cantidad: 1,
    },
  ];

  const [viewServices, setViewServices] = useState(false);

  const handleCheck = (id, currentState) => {
    const newState = !currentState;
    swal({
      title: "¿Estás seguro?",
      text: newState
        ? "Si activas este paquete, podrá ser exhibido a los clientes"
        : "Si desactivas este paquete, no podrá ser exhibido a los clientes",
      icon: "warning",
      buttons: true,
      dangerMode: !newState,
    }).then((confirm) => {
      if (confirm) {
        setPacks((prevData) =>
          prevData.map((item) =>
            item.id === id ? { ...item, estado: newState } : item
          )
        );
        swal({
          title: newState ? "Activado" : "Desactivado",
          text: newState
            ? "El paquete ha sido activado y será exhibido a los clientes"
            : "El paquete ha sido desactivado y no será exhibido a los clientes",
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

  return (
    <div className="row">
      <fieldset className="col-sm-12 col-md-8">
        <legend>Paquetes</legend>
        <header className="row">
          <div className="col-6">
            <input
              type="text"
              id="identification"
              className="form-control form-control-sm my-2"
              placeholder="Buscar"
              onChange={(e) => console.log(e.target.value)}
            />
          </div>
          <div className="col-6">
            <div className="buttons float-end">
              <NavLink
                to={{ pathname: `/administrator/package` }}
                className={
                  " btn btn-sm btn-primary d-flex align-items-center justify-content-center gap-2"
                }
              >
                <PlusCircleIcon width={20} />
                Crear
              </NavLink>
            </div>
          </div>
        </header>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Acciones</th>
              <th scope="col">Nombre</th>
              <th scope="col">FechaInscr</th>
              <th scope="col">FechaFin</th>
              <th scope="col">FechaEjecu</th>
              <th scope="col">Valor</th>
              <th scope="col">Estado</th>
            </tr>
          </thead>
          <tbody>
            {packs.map((pack) => (
              <tr key={pack.id}>
                <td className="d-flex">
                  <button className="btn m-0 p-0">
                    <EyeIcon
                      width={20}
                      onClick={() => {
                        setViewServices(!viewServices);
                      }}
                    />
                  </button>
                  <NavLink
                    to={{ pathname: `/administrator/package` }}
                    state={{ id: pack.id }}
                    className="btn m-0 p-0"
                  >
                    <PencilSquareIcon width={20} />
                  </NavLink>
                  <div className="form-switch d-inline">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      role="switch"
                      checked={pack.estado}
                      onChange={() => handleCheck(pack.id, pack.estado)}
                    />
                  </div>
                </td>
                <td>{pack.nombres}</td>
                <td>{pack.fechaInscripcion}</td>
                <td>{pack.fechaFinInscripcion}</td>
                <td>{pack.fechaEjecucion}</td>
                <td>{pack.valor}</td>
                <td>{pack.estado ? "Activo" : "Inactivo"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </fieldset>
      {viewServices && (
        <fieldset className="col-sm-12 col-md-4 py-5">
          <legend>Servicios</legend>
          <table className="table my-2">
            <thead>
              <tr>
                <th scope="col">Nombre</th>
                <th scope="col">Valor</th>
                <th scope="col">Cantidad</th>
              </tr>
            </thead>
            <tbody>
              {services.map((service) => (
                <tr key={service.nombre}>
                  <td>{service.nombre}</td>
                  <td>{service.valor}</td>
                  <td>{service.cantidad}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </fieldset>
      )}
    </div>
  );
}
