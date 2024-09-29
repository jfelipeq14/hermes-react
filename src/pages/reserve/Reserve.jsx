import { useState } from "react";

import CustomerForm from "./CustomerForm";
import Package from "../../components/Package";
import { Customers } from "../../models/reservations/customers.model";
import { Users } from "../../models/users/users.model";

export default function Reserve() {
  let [customer, setCustomer] = useState(new Customers());
  let [user, setUser] = useState(new Users());

  return (
    <div className="row m-0 p-0">
      <fieldset className="col-11 col-md-4">
        <legend>Cliente</legend>
        <CustomerForm
          user={user}
          setUser={setUser}
          customer={customer}
          setCustomer={setCustomer}
        />
      </fieldset>
      <div className="d-none col-md-2">
        <Package />
      </div>
    </div>
  );
}
