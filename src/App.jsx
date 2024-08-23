import { BrowserRouter, Route, Link, Routes } from "react-router-dom";

import Home from "./pages/home/Home";
import PageNotFound from "./pages/PageNotFound";
import Navbar from "./pages/layout/Navbar";
import Customers from "./pages/Customers";
import Role from "./pages/role/Role";
import Reservations from "./pages/reservations/Reservations";
import Menu from "./pages/Menu";
import EditProfile from "./pages/user/EditProfile";



import Services from "./pages/Services";

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
          <Link to="services" className={"nav-link"}>
            Services
          </Link>
        </li>
      </Navbar>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/customers" element={<Customers />} />
        <Route exact path="/role" element={<Role />} />
        <Route exact path="/reservations" element={<Reservations />} />
        <Route exact path="/menu" element={<Menu />} />
        <Route exact path="/edit-profile" element={<EditProfile />} />
       
        <Route exact path="/services" element={<Services />} />
        <Route path="*" element={<PageNotFound />} />
        
      </Routes>
    </BrowserRouter>
  );
}
