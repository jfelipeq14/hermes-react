import { BrowserRouter, Route, Link, Routes } from "react-router-dom";

import Home from "./pages/home/Home";
import PageNotFound from "./pages/PageNotFound";
import Navbar from "./pages/layout/Navbar";

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
        <Route path="*" element={<PageNotFound />} /> 
      </Routes>
    </BrowserRouter>
  );
}
