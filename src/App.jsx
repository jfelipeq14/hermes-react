import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Page from "./components/pages/Page";
import Menu from "./components/pages/menu";
import Role from "./components/pages/role";
import Customers from "./components/pages/Customers";
import Reservations from "./components/pages/Reservations";
import PageNotFound from "./components/PageNotFound";
import Navbar from "./components/layout/Navbar";

export default function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        
        <Route exact path="/" element={<Page />} />
        <Route exact path="/menu" element={<Menu />} />
        <Route exact path="/customers" element={<Customers />} />
        <Route exact path="/reservations" element={<Reservations />} />
        <Route exact path="/role" element={<Role />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
}
