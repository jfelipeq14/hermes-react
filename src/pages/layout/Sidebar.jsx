import { NavLink } from "react-router-dom";

export default function Sidebar({ children }) {
  return (
    <div className="col-1 position-static m-0 p-0">
      <div className="row flex-nowrap">
        <div className="col-auto p-0 m-0">
          <div className="d-flex flex-column">
            <ul className="nav nav-pills flex-column">{children}</ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export function SidebarItem({ name, href, icon }) {
  return (
    <li className="nav-item m-0 p-0">
      <NavLink to={{ pathname: `/${href}` }} className="nav-link">
        <div className="d-flex justify-content-between align-items-center">
          <span className="d-none">{name}</span>
          <span>{icon}</span>
        </div>
      </NavLink>
    </li>
  );
}
