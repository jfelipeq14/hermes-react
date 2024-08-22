import { useRef, useState } from "react";
import { NavLink } from "react-router-dom";

export default function Sidebar({ children }) {
  const [open, setOpen] = useState(true);
  const ref = useRef(null);
  // useClickAway(ref, () => setOpen(false))
  const toggleSidebar = () => setOpen((prev) => !prev);

  return (
    <div className="col-1">
      <div className="row flex-nowrap">
        <div className="col-auto px-0">
          <div className="d-flex flex-column align-items-start min-vh-100">
            <ul
              className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start"
              id="menu"
            >
              {children}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export function SidebarItem({ name, href, icon }) {
  return (
    <li className="nav-item">
      <NavLink to={href} className="nav-link">
        <div className="d-flex">
          <div className="d-none d-md-inline px-0">{name}</div>
          <div className="float-end">{icon}</div>
        </div>
      </NavLink>
    </li>
  );
}
