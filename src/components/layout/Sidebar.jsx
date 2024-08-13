export default function Sidebar({ children }) {
  return (
    <aside className="container col-1">
      <a href="" className="text-decoration-none d-flex align-items-center">
        <i className="fs-4 bi bi-speedometer"></i>
        <span className="ms-1 fs-4">Hermes</span>
      </a>
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
