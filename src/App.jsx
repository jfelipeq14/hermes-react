import { BrowserRouter, Route, Link, Routes } from "react-router-dom";

import Home from "./pages/home/Home";
import PageNotFound from "./pages/PageNotFound";
import Navbar from "./pages/layout/Navbar";
import Customers from "./pages/Customers";
import Role from "./pages/role/Role";
import Reservations from "./pages/reservations/Reservations";
import Packages from "./pages/packages/Packages";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar>
        <li className="nav-item">
          <Link to="customers" className={"nav-link"}>
            Customers
          </Link>
        </li>
        <li className="nav-item">
          <Link to="role" className={"nav-link"}>
            Role
          </Link>
        </li>
        <li className="nav-item">
          <Link to="packages" className={"nav-link"}>
            packages
          </Link>
        </li>
      </Navbar>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/customers" element={<Customers />} />
        <Route exact path="/role" element={<Role />} />
        <Route exact path="/packages" element={<Packages />} />
        <Route exact path="/reservations" element={<Reservations />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
