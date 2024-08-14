import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Page from "./components/pages/Page";
// import Menu from "./components/pages/Menu";
import Role from "./components/pages/role";
import Customers from "./components/pages/Customers";
import PageNotFound from "./components/PageNotFound";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Page />} />
        {/* <Route exact path="/menu" element={<Menu />} /> */}
        <Route exact path="/customers" element={<Customers />} />
        <Route path="/role" element={<Role />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
}
