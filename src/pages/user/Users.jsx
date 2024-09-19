import { PencilSquareIcon, TrashIcon } from "@heroicons/react/16/solid";
import { administrator } from "../../utilies/routes";
import Sidebar, { SidebarItem } from "../layout/Sidebar";
import UserForm from "./UserForm";
import { useEffect, useState } from "react";

import swal from "sweetalert";

import { UsersService } from "../../services/users.service";

import { Users } from "../../models/users/users.model";
import { getTokenStorage } from "../../utilies/authUtils";

export default function UsersPage() {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState(new Users());
  const [editMode, setEditMode] = useState(false);

  async function getUsers() {
    const data = await UsersService.getAll();
    if (data) {
      setUsers(data);
    }
  }

  useEffect(() => {
    getUsers();
  }, []);

  const handleEditUser = (e) => {
    const userFound = users.find(
      (user) => user.idUser === parseInt(e.currentTarget.id)
    );
    if (userFound) {
      setUser({
        idUser: userFound.idUser,
        idRole: userFound.idRole,
        documentType: userFound.documentType,
        identification: userFound.identification,
        email: userFound.email,
        state: user.status,
      });
      setEditMode(!editMode);
    }
  };

  const handleDeleteUser = async (e) => {
    const idUser = parseInt(e.target.id);
    const loggedUser = JSON.parse(getTokenStorage());

    swal({
      title: "¿Quieres eliminar el usuario?",
      text: "Vas a eliminar el usuario",
      icon: "warning",
      buttons: true,
    }).then(async (confirm) => {
      if (!confirm || loggedUser.data.idUser == idUser) return;
      const data = await UsersService.remove(parseInt(e.currentTarget.id));
      if (data) {
        swal({
          title: "Usuario eliminado",
          text: "El usuario ha sido eliminado correctamente",
          icon: "success",
          buttons: false,
          timer: 2000,
        }).then(() => {
          getUsers();
        });
      } else {
        swal({
          title: "Error",
          text: "Ha ocurrido un error al eliminar el usuario",
          icon: "error",
          buttons: false,
          timer: 2000,
        });
      }
    });
  };

  const handleCheck = (e) => {
    const idUser = parseInt(e.target.id);
    const loggedUser = JSON.parse(getTokenStorage());

    swal({
      title: "¿Quieres cambiar el estado?",
      text: "Vas a cambiar el estado del usuario",
      icon: "warning",
      buttons: true,
    }).then((confirm) => {
      if (!confirm || loggedUser.data.idUser == idUser) return;
      const userChangeStatus = UsersService.update(idUser, {
        state: e.target.checked,
      });
      if (userChangeStatus) {
        swal({
          title: "Correcto",
          text: "Se cambió el estado del usuario correctamente",
          icon: "success",
          timer: 2000,
          buttons: false,
        });
        getUsers();
        return;
      } else {
        swal({
          title: "Error",
          text: "Ha ocurrido un error al cambiar el estado del usuario",
          icon: "error",
          timer: 2000,
          buttons: false,
        });
        return;
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
          <fieldset className="col-sm-12 col-md-6">
            <legend>Usuario</legend>
            <UserForm user={user} setUser={setUser} editMode={editMode} />
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
                <th scope="col">Acciones</th>
                <th scope="col">Identificacion</th>
                <th scope="col">Correo</th>
                <th scope="col">Rol</th>
                <th scope="col">Estado</th>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user.idUser}>
                    <td className="d-flex">
                      <button className="btn m-0 p-0">
                        <PencilSquareIcon
                          width={25}
                          onClick={handleEditUser}
                          id={user.idUser}
                        />
                      </button>
                      <button className="btn m-0 p-0">
                        <TrashIcon
                          width={25}
                          onClick={handleDeleteUser}
                          id={user.idUser}
                        />
                      </button>
                      <div className="form-switch d-inline">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          role="switch"
                          name="state"
                          id={user.idUser}
                          checked={user.state}
                          onChange={handleCheck}
                        />
                      </div>
                    </td>
                    <td>{user.identification}</td>
                    <td>{user.email}</td>
                    <td>{user.idRole}</td>
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
