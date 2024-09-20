import {
  EyeIcon,
  PencilSquareIcon,
  PlusCircleIcon,
  TrashIcon,
} from "@heroicons/react/16/solid";
import { administrator } from "../../utilies/routes";
import Sidebar, { SidebarItem } from "../layout/Sidebar";
import { NavLink } from "react-router-dom";
import swal from "sweetalert";
import { PackagesService } from "../../services/packages.services";
import { useEffect, useState } from "react";

export default function Packs() {
  const [packages, setPackages] = useState([]);
  const [services, setServices] = useState([]);
  async function getPackages() {
    const data = await PackagesService.getAll();
    if (data) {
      setPackages(data);
    }
  }
  // async function getServices() {
  //   const data = await PackagesService.getAll();
  //   if (data) {
  //     setServices(data);
  //   }
  // }

  useEffect(() => {
    getPackages();
  }, []);

  const handleChange = (e) => {
    const state = e.target.checked;
    swal({
      title: "Cambiar Estado",
      text: "¿Quieres cambiar el estado de este paquete?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((confirm) => {
      2;
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
  const handleDeletePack = async (e) => {
    const idPackage = parseInt(e.target.id);

    swal({
      title: "¿Quieres eliminar el paquete?",
      text: "Vas a eliminar el paquete",
      icon: "warning",
      buttons: true,
    }).then(async (confirm) => {
      if (!confirm) return;
      const data = await PackagesService.remove(idPackage);
      if (data) {
        swal({
          title: "Paquete eliminado",
          text: "El paquete ha sido eliminado correctamente",
          icon: "success",
          buttons: false,
          timer: 2000,
        }).then(() => {
          getPackages()
        });
      } else {
        swal({
          title: "Error",
          text: "Ha ocurrido un error al eliminar el paquete",
          icon: "error",
          buttons: false,
          timer: 2000,
        });
      }
    });
  };

  return (
    <div className="row">
      <Sidebar>
        {administrator.map((link) => {
          return (
            <SidebarItem
              key={link.name}
              name={link.name}
              href={link.href}
              icon={<link.icon width={30} />}
            />
          );
        })}
      </Sidebar>
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
                {packages.map((pack) => (
                  <tr key={pack.email}>
                    <td className="d-flex">
                      <button className="btn m-0 p-0">
                        <EyeIcon width={25} />
                      </button>
                      <NavLink
                        to={{ pathname: `create` }}
                        state={{ id: pack.idPackage }}
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
                          checked={pack.status}
                          onChange={handleChange}
                        />
                      </div> <button className="btn m-0 p-0">
                        <TrashIcon
                          width={25}
                          onClick={handleDeletePack}
                          id={pack.idPackage}
                        />
                      </button>
                    </td>
                    <td>{pack.name}</td>
                    <td>{pack.fechaInscripcion}</td>
                    <td>{pack.fechaFinInscripcion}</td>
                    <td>{pack.fechaEjecucion}</td>
                    <td>{pack.price}</td>
                    <td>{pack.status ? "Activo" : "Inactivo"}</td>
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
