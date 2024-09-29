import {
  EyeIcon,
  PencilSquareIcon,
  PlusCircleIcon,
} from "@heroicons/react/16/solid";
import Sidebar from "../layout/Sidebar";
import { NavLink } from "react-router-dom";
import swal from "sweetalert";

export default function PackagesPage() {
  const packs = [
    {
      id: 1,
      nombres: "Cartagena",
      fechaInscripcion: "24/08/2024",
      fechaFinInscripcion: "30/08/2024",
      fechaEjecucion: "10/09/2024",
      valor: 670000,
      estado: "Activo",
    },
    {
      id: 2,
      nombres: "Barranquilla",
      fechaInscripcion: "13/08/2024",
      fechaFinInscripcion: "20/08/2024",
      fechaEjecucion: "30/08/2024",
      valor: 800000,
      estado: "Inactivo",
    },
  ];

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

  const handleChange = (e) => {
    const state = e.target.checked;
    swal({
      title: "Cambiar Estado",
      text: "¿Quieres cambiar el estado de este paquete?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((confirm) => {  2
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
      <main className="col-11">
        <div className="row">
          <fieldset className="col-sm-12 col-md-7">
            <legend>Paquetes</legend>
            <header className="row">
              <div className="col-6">
                <input
                  type="text"
                  id="identification"
                  className="form-control"
                  placeholder="Buscar"
                  onChange={(e) => console.log(e.target.value)}
                />
              </div>
              <div className="col-6">
                <div className="buttons float-end">
                  <NavLink
                    to={{ pathname: `create` }}
                    className={
                      "btn btn-primary d-flex align-items-center justify-content-center gap-2"
                    }
                  >
                    <PlusCircleIcon width={25} />
                    Crear
                  </NavLink>
                </div>
              </div>
            </header>
            <table className="table table-striped">
              <thead>
                <th scope="col">Acciones</th>
                <th scope="col">Nombre</th>
                <th scope="col">FechaInscr</th>
                <th scope="col">FechaFin</th>
                <th scope="col">FechaEjecu</th>
                <th scope="col">Valor</th>
                <th scope="col">Estado</th>
              </thead>
              <tbody>
                {packs.map((pack) => (
                  <tr key={pack.email}>
                    <td className="d-flex">
                      <button className="btn m-0 p-0">
                        <EyeIcon width={25} />
                      </button>
                      <NavLink
                        to={{ pathname: `create` }}
                        state={{ id: pack.id }}
                        className="btn m-0 p-0"
                      >
                        <PencilSquareIcon width={25} />
                      </NavLink>
                      <div className="form-switch d-inline">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          role="switch"
                          name="state"
                          checked={pack.state}
                          onChange={handleChange}
                        />
                      </div>
                    </td>
                    <td>{pack.nombres}</td>
                    <td>{pack.fechaInscripcion}</td>
                    <td>{pack.fechaFinInscripcion}</td>
                    <td>{pack.fechaEjecucion}</td>
                    <td>{pack.valor}</td>
                    <td>{pack.estado}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </fieldset>
          <fieldset className="col-sm-12 col-md-5">
            <legend>Servicios</legend>
            <header className="row">
              <div className="col">
                <div className="buttons float-end">
                  <NavLink
                    to={{ pathname: `/administrator/services` }}
                    className={
                      "btn btn-primary d-flex align-items-center justify-content-center gap-2"
                    }
                  >
                    <PlusCircleIcon width={25} />
                    Crear
                  </NavLink>
                </div>
              </div>
            </header>
            <table className="table table-striped my-2">
              <thead>
                <th scope="col">Nombre</th>
                <th scope="col">Valor</th>
                <th scope="col">Cantidad</th>
              </thead>
              <tbody>
                {services.map((service) => (
                  <tr key={service.paquete}>
                    <td>{service.nombre}</td>
                    <td>{service.valor}</td>
                    <td>{service.cantidad}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </fieldset>
        </div>
      </main>
    </div>
  );
}
