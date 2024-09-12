import { PencilSquareIcon, TrashIcon } from "@heroicons/react/16/solid";
import { administrator } from "../../utilies/routes";
import Sidebar, { SidebarItem } from "../layout/Sidebar";
import UserForm from "./UserForm";
import { useState, useEffect } from "react";
import { Users } from "../../models/users/users.model";

export default function UsersComponent() {
  const userModel = new Users();
  const [users, setUsers] = useState(() => userModel.users || []); // Initialize state based on userModel
  const [editingUser, setEditingUser] = useState(null);

  // No need for useEffect to set initial users if they are already initialized
  useEffect(() => {
    // Potentially other effects related to users can be handled here
  }, []); // Empty dependency array, this effect only runs once after the initial render

  const handleEditUser = (e) => {
    const userId = parseInt(e.currentTarget.id, 10);
    const user = users.find((user) => user.id_user === userId);
    setEditingUser(user || null);
    console.log("Editando usuario", user);
  };

  const handleDeleteUser = (e) => {
    const userId = parseInt(e.currentTarget.id, 10);
    setUsers(users.filter((user) => user.id_user !== userId));
    console.log("Eliminando usuario", userId);
  };

  return (
    <div className="row">
      <Sidebar>
        {administrator.map((link) => (
          <SidebarItem
            key={link.name}
            name={link.name}
            href={link.href}
            icon={<link.icon width={30} />}
          />
        ))}
      </Sidebar>
      <main className="col-11">
        <div className="row p-2">
          <fieldset className="col-sm-12 col-md-6">
            <legend>Usuario</legend>
            <UserForm user={editingUser} />
          </fieldset>
          <fieldset className="col-sm-12 col-md-6">
            <legend>Usuarios</legend>
            <header className="my-4">
              <input
                type="search"
                className="form-control"
                placeholder="Buscar"
              />
            </header>
            <table className="table table-striped">
              <thead>
                <tr>
                  <th scope="col">Acciones</th>
                  <th scope="col">Identificación</th>
                  <th scope="col">Correo</th>
                  <th scope="col">Rol</th>
                  <th scope="col">Estado</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user.id_user}>
                    <td className="d-flex">
                      <button className="btn m-0 p-0" onClick={handleEditUser} id={user.id_user}>
                        <PencilSquareIcon width={25} />
                      </button>
                      <button className="btn m-0 p-0" onClick={handleDeleteUser} id={user.id_user}>
                        <TrashIcon width={25} />
                      </button>
                      <div className="form-switch d-inline">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          role="switch"
                          name="state"
                          checked={user.state}
                          readOnly
                        />
                      </div>
                    </td>
                    <td>{user.identification}</td>
                    <td>{user.email}</td>
                    <td>{user.id_role}</td>
                    <td>{user.state ? "Activo" : "Inactivo"}</td>
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
