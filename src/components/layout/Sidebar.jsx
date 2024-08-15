import { NavLink } from "react-router-dom";

export default function Sidebar({ children }) {
  return (
    <aside className="container col-1">
      <NavLink
        to="/"
        className="text-decoration-none d-flex align-items-center"
      >
        <img src="../../assets/hermes.svg" alt="" />
        <span className="fs-4 mx-auto">Hermes</span>
      </NavLink>
      <ul className="nav nav-pills flex-column gap-2 mx-auto my-4">
        {children}
      </ul>
    </aside>
  );
}

export function SidebarItem({ icon, text }) {
  return (
    <li className="nav-item">
      <span>{icon}</span>
      <span>{text}</span>
    </li>
  );
}
