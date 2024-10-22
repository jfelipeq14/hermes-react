import { useState } from "react";
import { Customers } from "../../models/reservations/customers.model";
// import { Users } from "../../models/users/users.model";
import {  NoSymbolIcon, PencilSquareIcon, PlusCircleIcon } from "@heroicons/react/16/solid";

export default function CustomersList() {
    const [customer, setCustomer] = useState(new Customers());
//   const [user, setUser] = useState(new Users());

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
    <fieldset className="  p-2">
    <legend>Clientes</legend>
    <button
      className="btn btn-sm btn-primary float-end"
      onClick={() => {
        // setUser(new Users());
        setCustomer(new Customers());
        setEditMode(false);
        setModalIsOpen(!modalIsOpen);
      }}
    >
      <PlusCircleIcon width={20} />
      Agregar
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
      </thead>
      <tbody>
        {customers.map((customer) => (
          <tr key={customer.idCustomer}>
            <td className="d-flex">
              <button className="btn m-0 p-0">
                <PencilSquareIcon
                  width={20}
                  onClick={handleEditCustomer}
                  id={customer.idCustomer}
                />
              </button>
              <button className="btn m-0 p-0">
                <NoSymbolIcon
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
          </tr>
        ))}
      </tbody>
    </table>
  </fieldset>
  );
}
