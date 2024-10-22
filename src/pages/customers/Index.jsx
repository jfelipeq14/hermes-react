import {
  EyeIcon,
  PencilSquareIcon,
  PlusCircleIcon,
} from "@heroicons/react/16/solid";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import Modals from "../../components/Modals";
import CustomerForm from "../users/CustomerForm";
import { Users } from "../../models/users/users.model";
import { Customers } from "../../models/reservations/customers.model";

export default function CustomersPage() {
  const [customer, setCustomer] = useState(new Customers());
  const [user, setUser] = useState(new Users());

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [editMode, setEditMode] = useState(false);

  const customers = [
    {
      idCustomer: 1,
      user: {
        idUser: 89989888,
        idRole: 2,
        documentType: "CC",
        identification: "89989888",
        name: "Felipe",
        lastName: "Gutierrez",
        email: "felipe@gmail.com",
        state: true,
      },
      phone: "+573001234567",
      dateOfBirth: "2001-09-21",
      age: 22,
      address: "cl 9a",
      country: "Col",
      departament: "Ant",
      municipality: "Med",
      sex: "h",
      bloodType: "o+",
      eps: "Sura",
      state: true,
    },
  ];

  const handleEditCustomer = (e) => {
    const customerFound = customers.find(
      (customer) => customer.idCustomer === parseInt(e.currentTarget.id)
    );
    if (customerFound) {
      setCustomer({
        idCustomer: customerFound.idCustomer,
        state: customer.status,
      });
      setEditMode(!editMode);
      setModalIsOpen(!modalIsOpen);
    }
  };

  return (
    <div className="row w-100 h-100">
       
      <main className="col-10 justify-content-center align-items-center">
        <fieldset className="container p-2">
          <legend>Clientes</legend>
          <button
            className="btn btn-sm btn-primary float-end"
            onClick={() => {
              setUser(new Users());
              setCustomer(new Customers());
              setEditMode(false);
              setModalIsOpen(!modalIsOpen);
            }}
          >
            <PlusCircleIcon width={20} />
            Crear
          </button>
          <form className="w-50">
            <input
              type="search"
              id="identification"
              className="form-control form-control-sm"
              placeholder="Buscar"
              onChange={(e) => console.log(e.target.value)}
            />
          </form>

          <table className="table my-2">
            <thead>
              <th scope="col">Acciones</th>
              <th scope="col">Identificacion</th>
              <th scope="col">Nombre</th>
              <th scope="col">Correo</th>
              <th scope="col">Celular</th>
              <th scope="col">Estado</th>
            </thead>
            <tbody>
              {customers.map((customer) => (
                <tr key={customer.idCustomer}>
                  <td className="d-flex">
                    <NavLink
                      to={{ pathname: "/administrator/reservations" }}
                      state={{ identification: 0 }}
                      className="btn m-0 p-0"
                    >
                      <EyeIcon width={20} />
                    </NavLink>
                    <button className="btn m-0 p-0">
                      <PencilSquareIcon
                        width={20}
                        onClick={handleEditCustomer}
                        id={customer.idCustomer}
                      />
                    </button>
                  </td>
                  <td>{customer.user.identification}</td>
                  <td>
                    {customer.user.name.trim()} {customer.user.lastName.trim()}
                  </td>
                  <td>{customer.user.email}</td>
                  <td>{customer.phone}</td>
                  <td>{customer.state ? "Activo" : "Inactivo"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </fieldset>
        {modalIsOpen && (
          <Modals isOpen={modalIsOpen} clickModal={setModalIsOpen} size="md">
            <fieldset className="container p-4">
              <legend>{editMode ? "Editar cliente" : "Crear cliente"}</legend>
              <CustomerForm
                user={user}
                setUser={setUser}
                customer={customer}
                setCustomer={setCustomer}
              />
            </fieldset>
          </Modals>
        )}
      </main>
    </div>
  );
}
