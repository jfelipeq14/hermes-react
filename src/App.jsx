import { BrowserRouter, Route, Link, Routes } from "react-router-dom";

import Home from "./pages/home/Home";
import PageNotFound from "./pages/PageNotFound";
import Navbar from "./pages/layout/Navbar";
import Customers from "./pages/Customers";
import Role from "./pages/role/Role";
import Users from "./pages/user/Users";
import EditProfile from "./pages/user/EditProfile";
import Reserve from "./pages/reserve/Reserve";
import Reservations from "./pages/reserve/Reservations";
import Packages from "./pages/packages/Packages";
import CreatePackages from "./pages/packages/CreatePackages";
import Menu from "./pages/Menu";
import Services from "./pages/Services";
import Programing from "./pages/packages/Programing";
import Payments from "./pages/pay/Payments";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar>
        <li className="nav-item">
          <Link to="customers" className="nav-link">
            Customers
          </Link>
        </li>
        <li className="nav-item">
          <Link to="role" className="nav-link">
            Role
          </Link>
        </li>
        <li className="nav-item">
          <Link to="packages" className="nav-link">
            Packages
          </Link>
        </li>
        <li className="nav-item">
          <Link to="services" className="nav-link">
            Services
          </Link>
        </li><li className="nav-item">
          <Link to="programing-packs" className="nav-link">
            Programing
          </Link>
        </li>
      </Navbar>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/customers" element={<Customers />} />
        <Route exact path="/role" element={<Role />} />
        <Route exact path="/users" element={<Users />} />
        <Route exact path="/edit-profile" element={<EditProfile />} />
        <Route exact path="/reserve" element={<Reserve />} />
        <Route exact path="/packages" element={<Packages />} />
        <Route exact path="/create-packs" element={<CreatePackages />} />
        <Route exact path="/programing-packs" element={<Programing />} />
        <Route exact path="/reservations" element={<Reservations />} />
        <Route exact path="/payments" element={<Payments />} />
        <Route exact path="/menu" element={<Menu />} />
        <Route exact path="/services" element={<Services />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
