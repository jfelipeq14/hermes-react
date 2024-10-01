import { NavLink } from "react-router-dom";
import { createRoutes } from "../../utilies/routes.js";
import { useEffect, useState } from "react";
import { getTokenStorage } from "../../utilies/authUtils.js";

export default function Sidebar() {
  const [role, setRole] = useState(0);

  useEffect(() => {
    const loggedUser = getTokenStorage();
    if (!loggedUser) return;
    const data = JSON.parse(loggedUser);
    data.data.idRole == 1 ? setRole(1) : setRole(2);
  }, []);

  return (
    <aside className="col-2 p-0 m-0 shadow bg-transparent">
      <ul className="nav nav-pills d-flex flex-column sticky-top p-0 m-0">
        {createRoutes(role).map((link) => {
          return (
            <SidebarItem
              key={link.name}
              name={link.name}
              href={link.href}
              icon={<link.icon width={25} />}
            />
          );
        })}
      </ul>
    </aside>
  );
}

// eslint-disable-next-line react/prop-types
export function SidebarItem({ name, href, icon }) {
  return (
    <li className="nav-item">
      <NavLink
        to={{ pathname: `/${href}` }}
        className="nav-link p-0 m-0 rounded-0"
      >
        <div className="d-flex align-items-center">
          <button className="btn">{icon}</button>
          <small className="d-none d-lg-block text-start">{name}</small>
        </div>
      </NavLink>
    </li>
  );
}
