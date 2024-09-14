import { PlusIcon } from "@heroicons/react/16/solid";
import { NavLink } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export default function CardMenu({ title, logo, href }) {
  return (
    <div className="card m-5 text-center">
      <NavLink to={`/${href}`} className="text-decoration-none p-2">
        <div className="container">
          <PlusIcon width={25} className="float-end" />
        </div>
        <div className="container">
          <div className="container">{logo}</div>
        </div>
        <footer className="p-2">{title}</footer>
      </NavLink>
    </div>
  );
}
