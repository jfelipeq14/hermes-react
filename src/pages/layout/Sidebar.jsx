import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { NavLink } from "react-router-dom";

// eslint-disable-next-line react/prop-types
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

// eslint-disable-next-line react/prop-types
export function SidebarItem({ name, href, icon }) {
  return (
    <li className="nav-item m-0 p-0">
      <NavLink to={{ pathname: `/${href}` }} className="nav-link">
        <OverlayTrigger
          key={name}
          placement="right"
          overlay={<Tooltip id={`tooltip-right`}>{name}</Tooltip>}
        >
          <button className="btn">{icon}</button>
        </OverlayTrigger>
      </NavLink>
    </li>
  );
}
