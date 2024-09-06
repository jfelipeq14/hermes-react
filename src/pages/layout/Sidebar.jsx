import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { NavLink } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export default function Sidebar({ children }) {
  return (
    <aside className="col-1 m-0 p-0">
      <ul className="nav nav-pills sticky-top">
        {children}
      </ul>
    </aside>
  );
}

// eslint-disable-next-line react/prop-types
export function SidebarItem({ name, href, icon }) {
  return (
    <li className="nav-item">
      <NavLink to={{ pathname: `/${href}` }} className="nav-link">
        <OverlayTrigger placement="right" overlay={<Tooltip>{name}</Tooltip>}>
          <button className="btn">{icon}</button>
        </OverlayTrigger>
      </NavLink>
    </li>
  );
}
