import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Customers from "./components/pages/Customers";
import PageNotFound from "./components/PageNotFound";

export default function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route exact path="/customers" element={<Customers />} />
        {/* <Route path="/role" element={<Role />} /> */}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
}
