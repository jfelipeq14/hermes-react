import { useEffect, useState } from "react";
import { Package } from "../../models/packs/package.model";
import { Form } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { PlusCircleIcon, TrashIcon } from "@heroicons/react/16/solid";
import Sidebar, { SidebarItem } from "../layout/Sidebar";
import { administrator } from "../../utilies/routes";

export default function PackForm() {
  const formPackage = new Package();
  // const formService = new Service();
  const services = [
    {
      idService: 1,
      nombre: "Pesca",
      categoria: "Entretenimiento",
      valor: 50000,
      cantidad: 1,
    },
    {
      idService: 2,
      nombre: "Lancha",
      categoria: "Transporte",
      valor: 70000,
      cantidad: 1,
    },
  ];

  const packs = [];
  const [pack, setPackage] = useState(formPackage);
  const [validated, setValidated] = useState(false);
  const [servicePackData, setServicePackData] = useState([]);
  let idService;

  useEffect(() => {}, [servicePackData]);

  const handleChangePack = (e) => {
    const { name, value, checked, type } = e.target;
    setPackage({ ...pack, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
  };

  const onClickService = () => {
    const serviceFound = services.find((s) => s.idService === idService);
    setServicePackData([...servicePackData, serviceFound]);
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
      <div className="col-11">
        <div className="row p-2">
          <fieldset className="col-sm-12 col-md-6">
            <legend>Paquete</legend>
            <Form
              noValidate
              validated={validated}
              onSubmit={handleSubmit}
              className="row g-2"
            >
              {/* nombres */}
              <div className="col-12">
                <label htmlFor="name">Nombre:</label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  value={pack.name}
                  onChange={handleChangePack}
                  pattern="^[A-Z][a-zñ]{3,}[^\d\W_]*$"
                  required
                />
                <small className="valid-feedback">Todo bien!</small>
                <small className="invalid-feedback">Campo obligatorio</small>
              </div>
              {/* Destino */}
              <div className="col-12">
                <label htmlFor="destination">Destino:</label>
                <input
                  type="text"
                  className="form-control"
                  name="destination"
                  value={pack.destination}
                  onChange={handleChangePack}
                  pattern="^[A-Z][a-zñ]{3,}[^\d\W_]*$"
                  required
                />
                <small className="valid-feedback">Todo bien!</small>
                <small className="invalid-feedback">Campo obligatorio</small>
              </div>
              {/* image */}
              <div className="col-12">
                <label htmlFor="image" className="col-12">
                  Imagen:
                </label>
                <div className="row">
                  <div className="col-7">
                    <input
                      type="text"
                      className="form-control"
                      name="image"
                      value={pack.image}
                      onChange={handleChangePack}
                      pattern="^\+?[0-9]{1,3}[0-9]{6,}$"
                      required
                    />
                    <small className="valid-feedback">Todo bien!</small>
                    <small className="invalid-feedback">
                      Campo obligatorio
                    </small>
                  </div>
                  <div className="col-5">
                    <button className="btn btn-primary">Cargar</button>
                  </div>
                </div>
              </div>
              {/* servicios */}
              <div className="col-12">
                <label htmlFor="image" className="col-12">
                  Servicios:
                </label>
                <div className="row">
                  <div className="col-6">
                    <select
                      className="form-select"
                      name="services"
                      onChange={(e) => {
                        idService = e.target.options.selectedIndex + 1;
                      }}
                      required
                    >
                      {services.map((service) => (
                        <option key={service.idService}>
                          {service.nombre}
                        </option>
                      ))}
                    </select>
                    <small className="valid-feedback">Todo bien!</small>
                    <small className="invalid-feedback">
                      Campo obligatorio
                    </small>
                  </div>
                  <div className="col-6">
                    <input
                      type="text"
                      className="form-control"
                      name="value"
                      onChange={handleChangePack}
                      readOnly
                    />
                    <small className="valid-feedback">Todo bien!</small>
                    <small className="invalid-feedback">
                      Campo obligatorio
                    </small>
                  </div>
                  <div className="col-6 my-2">
                    <button
                      className="btn btn-primary"
                      type="button"
                      onClick={onClickService}
                    >
                      Cargar
                    </button>
                  </div>
                  {/* Precio */}
                  <div className="col-12">
                    <label htmlFor="name">Precio:</label>
                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      value={pack.name}
                      onChange={handleChangePack}
                      pattern="^[A-Z][a-zñ]{3,}[^\d\W_]*$"
                      required
                    />
                    <small className="valid-feedback">Todo bien!</small>
                    <small className="invalid-feedback">
                      Campo obligatorio
                    </small>
                  </div>
                  {/* Ganancia */}
                  <div className="col-12">
                    <label htmlFor="destination">Ganancia:</label>
                    <input
                      type="text"
                      className="form-control"
                      name="destination"
                      value={pack.destination}
                      readOnly
                    />
                    <small className="valid-feedback">Todo bien!</small>
                    <small className="invalid-feedback">
                      Campo obligatorio
                    </small>
                  </div>
                  <div className="col-12 my-2">
                    <label htmlFor="">Estado:</label>
                    <div className="row">
                      <div className="col-sm-12 col-md-6 my-2">
                        <input type="radio" name="status" value={true} />
                        <span className="mx-3">Activo</span>
                      </div>
                      <div className="col-sm-12 col-md-6 my-2">
                        <input type="radio" name="status" value={false} />
                        <span className="mx-3">Inactivo</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="buttons">
                <button type="submit" className="btn btn-primary">
                  Crear
                </button>
                <button type="reset" className="btn btn-secondary">
                  Limpiar
                </button>
              </div>
            </Form>
          </fieldset>
          <fieldset className="col-sm-12 col-md-6">
            <legend>Servicios</legend>
            <header className="row">
              <div className="col-6">
                <select
                  className="form-select"
                  name="documentType"
                  value={pack.services}
                  onChange={handleChangePack}
                  required
                >
                  {packs.map((pack) => (
                    <option key={pack.id}>{pack.nombre}</option>
                  ))}
                </select>
                <small className="valid-feedback">Todo bien!</small>
                <small className="invalid-feedback">Campo obligatorio</small>
              </div>
              <div className="col-6">
                <div className="buttons float-end">
                  <NavLink
                    to="packs"
                    className={
                      "btn btn-primary d-flex align-items-center justify-content-center gap-2"
                    }
                  >
                    <PlusCircleIcon width={25} />
                    Ver
                  </NavLink>
                </div>
              </div>
            </header>
            <table className="table table-striped">
              <thead>
                <th scope="col">Accion</th>
                <th scope="col">Categoria</th>
                <th scope="col">Nombre</th>
                <th scope="col">Valor</th>
                <th scope="col">Cantidad</th>
              </thead>
              <tbody>
                {servicePackData.map((service) => (
                  <tr key={service.id}>
                    <td>
                      <button className="btn">
                        <TrashIcon width={25} />
                      </button>
                    </td>
                    <td>{service.nombre}</td>
                    <td>{service.categoria}</td>
                    <td>{service.valor}</td>
                    <td>{service.cantidad}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </fieldset>
        </div>
      </div>
    </div>
  );
}
