import { PencilSquareIcon, TrashIcon } from "@heroicons/react/16/solid";

import { useState } from "react";
import swal from "sweetalert";
import { Services } from "../../models/services/services.model";
import { Form } from "react-bootstrap";

const categoryMap = {
  1: "Transporte",
  2: "Alimentación",
  3: "Entretenimiento",
};

export default function ServicesPage() {
  const [serviceData, setServiceData] = useState(new Services());
  const [services, setServices] = useState([]);
  const [validated, setValidated] = useState(false);
  const [editMode, setEditMode] = useState(false);

  const handleChange = (e) => {
    const value =
      e.target.name === "idCategoryService"
        ? parseInt(e.target.value)
        : e.target.value;
    setServiceData({ ...serviceData, [e.target.name]: value });
  };

  const handleCheck = (id, currentState) => {
    const newState = !currentState;
    swal({
      title: "¿Estás seguro?",
      text: newState
        ? "Si activas este servicio, podrá ser exhibido en los paquetes"
        : "Si desactivas este servicio, no podrá ser exhibido en los paquetes",
      icon: "warning",
      buttons: true,
      dangerMode: !newState,
    }).then((confirm) => {
      if (confirm) {
        setServices((prevData) =>
          prevData.map((item) =>
            item.id === id ? { ...item, status: newState } : item
          )
        );
        swal({
          title: newState ? "Activado" : "Desactivado",
          text: newState
            ? "El servicio ha sido activado y será exhibido en los paquetes"
            : "El servicio ha sido desactivado y no será exhibido en los paquetes",
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

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!e.currentTarget.checkValidity()) {
      e.stopPropagation();
      setValidated(true);
      return;
    }

    swal({
      title: editMode
        ? "¿Quieres guardar estos cambios?"
        : "¿Quieres registrar este servicio?",
      text: "Revisa todos los campos antes de enviar el formulario para evitar conflictos",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((confirm) => {
      if (confirm) {
        const newService = {
          ...serviceData,
          categoryName: categoryMap[serviceData.idCategoryService],
        };

        if (editMode) {
          setServices((prevData) =>
            prevData.map((item) =>
              item.id === serviceData.id ? newService : item
            )
          );
        } else {
          setServices((prevData) => [
            ...prevData,
            { ...newService, id: Date.now() },
          ]);
        }
        swal({
          title: editMode ? "Actualizado" : "Registrado",
          text: editMode
            ? "Los datos fueron actualizados correctamente"
            : "Los datos fueron registrados correctamente",
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
      idCategoryService: "",
      name: "",
      price: "",
      status: true,
    });
    setValidated(false);
    setEditMode(false);
  };

  const handleDelete = (id) => {
    swal({
      title: "¿Estás seguro?",
      text: "Una vez eliminado, no podrás recuperar este servicio",
      icon: "warning",
      buttons: ["Cancelar", "Sí, eliminar"],
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        setServices((prevData) => prevData.filter((item) => item.id !== id));
        swal(
          "Eliminado",
          "El servicio ha sido eliminado correctamente",
          "success"
        );
      } else {
        swal("Cancelado", "El servicio está a salvo", "info");
      }
    });
  };

  const handleEdit = (id) => {
    const serviceToEdit = services.find((item) => item.id === id);
    if (serviceToEdit) {
      setServiceData(serviceToEdit);
      setEditMode(true);
    }
  };

  return (
    <div className="row p-2">
      <Form
        noValidate
        validated={validated}
        onSubmit={handleSubmit}
        className="col-sm-12 col-md-6"
      >
        <div className="mb-3">
          <legend>Servicio</legend>
          <label>Categoría</label>
          <select
            className="form-select form-select-sm my-2"
            name="idCategoryService"
            value={serviceData.idCategoryService}
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
            className="form-control form-control-sm my-2"
            name="name"
            value={serviceData.name}
            onChange={handleChange}
            pattern="^[A-Z][a-zA-Z]+\s*(?:[a-zA-Z]+\s*)*$"
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
            className="form-control form-control-sm my-2"
            name="price"
            value={serviceData.price}
            onChange={handleChange}
            pattern="^[1-9][0-9]*(\.[0-9]{1,2})?$"
            required
          />
          <small className="valid-feedback">Todo bien!</small>
          <small className="invalid-feedback">
            Por favor escriba un valor valido
          </small>
        </div>
        <div className="buttons">
          <button type="submit" className="btn btn-sm btn-primary">
            Guardar
          </button>
          <button
            type="reset"
            className="btn btn-sm btn-secondary"
            onClick={resetForm}
          >
            Cancelar
          </button>
        </div>
      </Form>
      <fieldset className="col-sm-12 col-md-6">
        <legend>Servicios</legend>
        <table className="table">
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
            {services.map((item) => (
              <tr key={item.id}>
                <td>
                  <button
                    className="btn m-0 p-0"
                    onClick={() => handleEdit(item.id)}
                  >
                    <PencilSquareIcon width={20} />
                  </button>
                  <button
                    className="btn m-0 p-0"
                    onClick={() => handleDelete(item.id)}
                  >
                    <TrashIcon width={20} />
                  </button>
                  <div className="form-switch d-inline">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      role="switch"
                      checked={item.status}
                      onChange={() => handleCheck(item.id, item.status)}
                    />
                  </div>
                </td>
                <td>{item.categoryName}</td>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>{item.status ? "Habilitado" : "Inhabilitado"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </fieldset>
    </div>
  );
}
