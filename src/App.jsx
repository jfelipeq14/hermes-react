import { BrowserRouter, Route, Link, Routes } from "react-router-dom";

import Home from "./pages/home/Home";
import PageNotFound from "./pages/PageNotFound";
import Navbar from "./pages/layout/Navbar";
import Customers from "./pages/Customers";
import Reservations from "./pages/reservations/Reservations";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar>
        <li className="nav-item">
          <Link to="customers" className={"nav-link"}>
            Customers
          </Link>
        </li>
      </Navbar>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/customers" element={<Customers />} />
        <Route exact path="/reservations" element={<Reservations />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
