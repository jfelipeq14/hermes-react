import { useEffect, useState } from "react";
import Sidebar from "../layout/Sidebar";
import { getTokenStorage } from "../../utilies/authUtils";
import { Users } from "../../models/users/users.model";
import UserForm from "../users/UserForm";
import CustomerForm from "../users/CustomerForm";
import { Customers } from "../../models/reservations/customers.model";

export default function EditProfile() {
  const [user, setUser] = useState(new Users());
  const [customer, setCustomer] = useState(new Customers());
  const [isCustomer, setIsCustomer] = useState(false);

  useEffect(() => {
    const loggedUser = getTokenStorage();
    if (!loggedUser) return;
    const data = JSON.parse(loggedUser);
    data.data.idRole === 1 ? setIsCustomer(false) : setIsCustomer(true);
    setUser(data.data);
  }, []);

  return (
    <div className="row">
      <Sidebar></Sidebar>
      <main className="col-6">
        <div className="row">
          {isCustomer ? (
            <CustomerForm
              user={user}
              setUser={setUser}
              customer={customer}
              setCustomer={setCustomer}
            />
          ) : (
            <UserForm user={user} setUser={setUser} editMode={true} />
          )}
        </div>
      </main>
    </div>
  );
}
