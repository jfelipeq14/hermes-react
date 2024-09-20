import { useEffect, useState } from "react";
import CardMenu from "../components/CardMenu";
import { createRoutes } from "../utilies/routes.js";
import Sidebar from "./layout/Sidebar";
import { getTokenStorage } from "../utilies/authUtils.js";

export default function Menu() {
  const [role, setRole] = useState(0);

  useEffect(() => {
    const loggedUser = getTokenStorage();
    if (!loggedUser) return;
    const data = JSON.parse(loggedUser);
    data.data.idRole == 1 ? setRole(1) : setRole(2);
  }, []);

  return (
    <div className="row">
      <Sidebar></Sidebar>
      <main className="col-11">
        <div className="container text-center">
          <div className="d-flex flex-wrap justify-content-around align-items-center">
            {createRoutes(role).map((admin) => (
              <CardMenu
                key={admin.name}
                title={admin.name}
                logo={<admin.icon width={60} />}
                href={admin.href}
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
