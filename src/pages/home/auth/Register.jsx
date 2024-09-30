import { useState } from "react";

import { Users } from "../../../models/users/users.model";

import HermesLogo from "../../../components/HermesLogo";

import UserForm from "../../users/UserForm.jsx";

export default function FormRegister() {
  const [user, setUser] = useState(new Users());

  return (
    <>
      <h1 className="text-center fs-3 my-5">Registrarse</h1>
      <div className="container text-center">
        <HermesLogo />
      </div>

      <div className="container p4">
        <UserForm
          user={user}
          setUser={setUser}
          editMode={false}
          customer={true}
          getUsers={null}
        />
      </div>
    </>
  );
}
