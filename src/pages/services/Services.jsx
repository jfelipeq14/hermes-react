import // PlusCircleIcon,
// EyeIcon,
// PencilSquareIcon,
// TrashIcon,
"@heroicons/react/16/solid";
import { administrator } from "../../utilies/routes";
import Sidebar, { SidebarItem } from "../layout/Sidebar";
import { useState } from "react";
import { PencilSquareIcon, TrashIcon } from "@heroicons/react/16/solid";
import swal from "sweetalert";
import { Services } from "../../models/services/services.model";
import { Form } from "react-bootstrap";

export default function Service() {
  const formService = new Services();
  const [serviceData, setServiceData] = useState(formService);
  const [data, setData] = useState([]);
  let [validated, setValidated] = useState(false);

  const handleChange = (e) => {
    setServiceData({ ...serviceData, [e.target.name]: e.target.value });
  };


  const handleCheck = (e) => {
    const state = e.target.checked;
    swal({
      title: "¿Estás seguro?",
      text: "Si desactivas este servicio, no podra ser exhibido en los paquetes",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((confirm) => {
      if (confirm) {
        {
          e.target.checked = state ? true : false;
        }
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


  const handleSubmit = (e) => {
    e.preventDefault();
  
    if (!e.currentTarget.checkValidity()) {
      e.stopPropagation();
      setValidated(true);
      return;
    }
  
    swal({
      title: "¿Quieres registrarte con estos datos?",
      text: "Revisa todos los campos antes de enviar el formulario para evitar conflictos",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((confirm) => {
      if (confirm) {
        setData(prevData => [...prevData, { ...serviceData, id: Date.now() }]);
        swal({
          title: "Enviado",
          text: "Los datos fueron enviados correctamente",
          icon: "success",
          timer: 2000,
          buttons: false,
        });
        resetForm();
      } else {
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
  
  const resetForm = () => {
    setServiceData({
      id: null,
      id_categoryService: '',
      name: '',
      price: '',
      status: true
    });
    setValidated(false);
  };

  const handleDelete = (id) => {
    const index = data.findIndex((item) => item.id === id);
    if (index < 0) return;
    const updatedData = [...data];
    updatedData.splice(index, 1);
    setData(updatedData);

    swal({
      title: "¿Quieres registrarte con estos datos?",
      text: "Revisa todos los campos antes de enviar el formulario para evitar conflictos",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((confirm) => {
      if (confirm) {
        setData(prevData => [...prevData, { ...serviceData, id: Date.now() }]);
        swal({
          title: "Enviado",
          text: "Los datos fueron enviados correctamente",
          icon: "success",
          timer: 2000,
          buttons: false,
        });
        resetForm();
      } else {
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

  const handleEdit = (id) => {
    const serviceToEdit = data.find((item) => item.id === id);
    if (serviceToEdit) {
      setServiceData(serviceToEdit);
    }
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
        <div className="row p-2">
          <Form
            noValidate
            validated={validated}
            onSubmit={handleSubmit}
            className="col-sm-12 col-md-6 p-1"
          >
            <div className="mb-3">
              <legend>Servicio</legend>
              <label>Categoría</label>
              <select
                className="form-select"
                name="id_categoryService"
                value={serviceData.id_categoryService}
                onChange={handleChange}
                required
              >
                <option value="">Selecciona una categoría</option>
                <option value={1}>Transporte</option>
                <option value={2}>Alimentación</option>
                <option value={3}>Entretenimiento</option>
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="nombre" className="form-label">
                Nombre
              </label>
              <input
                type="text"
                className="form-control"
                name="name"
                value={serviceData.name}
                onChange={handleChange}
                pattern="^[A-Z][a-zA-Z]+\s*(?:[a-zA-Z]+\s*)$"
                required
              />
              <small className="valid-feedback">Todo bien!</small>
              <small className="invalid-feedback">
                Por favor escriba un nombre valido
              </small>
            </div>
            <div className="mb-3">
              <label htmlFor="valor" className="form-label">
                Valor
              </label>
              <input
                type="number"
                className="form-control"
                name="price"
                value={serviceData.price}
                onChange={handleChange}
                pattern="^[1-9][0-9]*(\.[0-9]{1,2})?$"
                required
              />
              <small className="valid-feedback">Todo bien!</small>
              <small className="invalid-feedback">
                Por favor escriba un nombre valido
              </small>
            </div>
            <div className="mb-3">
              <label className="form-label">Estado</label>
              <div>
                <label htmlFor="habilitado">Habilitado</label>
                <input
                  type="radio"
                  id="habilitado"
                  name="status"
                  value={true}
                  onChange={handleChange}
                  checked
                />
                <label htmlFor="deshabilitado">Deshabilitado</label>
                <input
                  type="radio"
                  id="deshabilitado"
                  name="status"
                  value={false}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="buttons">
              <button type="submit" className="btn btn-primary">
                Guardar
              </button>
              <button type="reset" className="btn btn-danger">
                Cancelar
              </button>
            </div>
          </Form>
          <fieldset className="col-sm-12 col-md-5">
            <legend>Servicios</legend>
            <table className="table table-striped">
              <thead>
                <tr>
                  <th scope="col">Acciones</th>
                  <th scope="col">Categoría</th>
                  <th scope="col">Nombre</th>
                  <th scope="col">Valor</th>
                  <th scope="col">Estado</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item, index) => (
                  <tr key={index}>
                    <td>
                      <button
                        className="btn m-0 p-0"
                        onClick={() => handleEdit(item.id)}
                      >
                        <PencilSquareIcon width={25} />
                      </button>
                      <button
                      className="btn m-0 p-0"
                      onClick={() => handleDelete(item.id)}>
                        <TrashIcon
                          width={25}
                          
                        />
                      </button>
                      <div className="form-switch d-inline">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          role="switch"
                          name="state"
                          onChange={handleCheck}
                          checked
                        />
                        {/* Hacer la validacion de, si le doy al radio me tiene que poner el estado que selecciones, si es habilitado o deshabilitado */}
                      </div>
                    </td>
                    <td>{item.id_categoryService}</td>
                    <td>{item.name}</td>
                    <td>{item.price}</td>
                    <td>{item.status ? "Activo" : "Inactivo"}</td>
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
