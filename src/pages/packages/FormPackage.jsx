import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Form } from "react-bootstrap";
import { PlusCircleIcon, TrashIcon } from "@heroicons/react/16/solid";
import Sidebar from "../layout/Sidebar";
import { Packages } from "../../models/packs/packages.model";

export default function FormPackage() {

  const navigate = useNavigate();
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
  const [pack, setPackage] = useState(new Packages());
  const [validated, setValidated] = useState(false);
  const [servicePackData, setServicePackData] = useState([]);
  let idService = 0;

  useEffect(() => {
    
  }, [servicePackData]);

  const handleChangePack = (e) => {
    const { name, value, checked, type } = e.target;
    setPackage({ ...pack, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    }

    packs.push(pack);
    navigate('/administrator/packages');
    
    setValidated(true);
  };

  const handleChangeOptions = (e) => {
    const index = e.target.options.selectedIndex;
    const serviceFound = servicePackData.find((s) => s.idService === index);
    if (e.target.options.selectedIndex === idService || serviceFound) {
      return;
    }
    idService = e.target.options.selectedIndex;
  };

  const onClickService = () => {
    const serviceFound = services.find((s) => s.idService === idService);
    setServicePackData([...servicePackData, serviceFound]);
  };

  return (
    <div className="row">
      <Sidebar></Sidebar>
      <div className="col-10">
        <div className="row">
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
                  className="form-control form-control-sm my-2"
                  name="name"
                  value={pack.name}
                  onChange={handleChangePack}
                  pattern="^[A-Z][a-zA-Z]+\s*(?:[a-zA-Z]+\s*)$"
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
                  className="form-control form-control-sm my-2"
                  name="destination"
                  value={pack.destination}
                  onChange={handleChangePack}
                  pattern="^[A-Z][a-zA-Z]+\s*(?:[a-zA-Z]+\s*)$"
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
                  <div className="col-12">
                    <input
                      className="form-control form-control-sm my-2"
                      type="file"
                      accept="image/*"
                      name="image"
                      value={pack.image}
                      onChange={handleChangePack}
                      pattern="^\+?[0-9]{1,3}[0-9]{6,}$"
                      required
                    />
                  </div>
                  <small className="valid-feedback">Todo bien!</small>
                  <small className="invalid-feedback">Campo obligatorio</small>
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
                      className="form-select form-select-sm"
                      name="services"
                      // value={idService}
                      onChange={handleChangeOptions}
                      required
                    >
                      <option value="">Selecciona</option>
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
                      className="form-control form-control-sm my-2"
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
                      className=" btn btn-sm btn-primary"
                      type="button"
                      onClick={onClickService}
                    >
                      Cargar
                    </button>
                  </div>
                  {/* Precio */}
                  <div className="col-12">
                    <label htmlFor="precio">Precio:</label>
                    <input
                      type="number"
                      className="form-control form-control-sm my-2"
                      name="precio"
                      value={pack.precio}
                      onChange={handleChangePack}
                      pattern="^[A-Z][a-zA-Z]+\s*(?:[a-zA-Z]+\s*)$"
                      required
                    />
                    <small className="valid-feedback">Todo bien!</small>
                    <small className="invalid-feedback">
                      Campo obligatorio
                    </small>
                  </div>
                  {/* Ganancia */}
                  <div className="col-12">
                    <label htmlFor="destination">Ingreso:</label>
                    <input
                      type="number"
                      className="form-control form-control-sm my-2"
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
                <button type="submit" className=" btn btn-sm btn-primary">
                  Crear
                </button>
                <button type="reset" className=" btn btn-sm btn-danger">
                  Cancelar
                </button>
              </div>
            </Form>
          </fieldset>
          <fieldset className="col-sm-12 col-md-6">
            <legend>Servicios</legend>
            <header className="row">
              <div className="col-6">
                <select
                  className="form-select form-select-sm"
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
                    to={{ pathname: `administrator/packages` }}
                    className={
                      " btn btn-sm btn-primary d-flex align-items-center justify-content-center gap-2"
                    }
                  >
                    <PlusCircleIcon width={20} />
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
              </thead>
              <tbody>
                {servicePackData.map((service) => {
                  if (service) {
                    return (
                      <tr key={service.idService}>
                        <td>
                          <button className="btn">
                            <TrashIcon width={20} />
                          </button>
                        </td>
                        <td>{service.nombre}</td>
                        <td>{service.categoria}</td>
                        <td>{service.valor}</td>
                      </tr>
                    );
                  }
                })}
              </tbody>
            </table>
          </fieldset>
        </div>
      </div>
    </div>
  );
}
