import { useEffect, useState } from "react";
 
import { getTokenStorage } from "../../utilies/authUtils";
import { Users } from "../../models/users/users.model";
import UserForm from "../users/UserForm";
import CustomerForm from "../users/CustomerForm";
import { Customers } from "../../models/reservations/customers.model";

export default function ProfilePage() {
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
    <div className="row h-100 w-100">
       
      <main className="col-10 justify-content-center align-items-center">
        <div className="row">
          <fieldset className="col-8">
            <legend>Perfil</legend>
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
          </fieldset>
        </div>
      </main>
    </div>
  );
}
