import { NavLink } from "react-router-dom";

export default function Sidebar({ children }) {
  return (
    <aside className="container col-1">
      <hr />
      <ul className="nav nav-pills flex-column">{children}</ul>
    </aside>
  );
}

export function SidebarItem({ icon, text }) {
  return (
    <li className="nav-item fs-4 my-1 d-flex">
      {icon}
      <span className="d-none d-sm-inline">{text}</span>
    </li>
  );
}
