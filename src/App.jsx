/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { BrowserRouter, Route, Link, Routes, Navigate } from "react-router-dom";

import Home from "./pages/home/Home";
import Navbar from "./pages/layout/Navbar";
import PageNotFound from "./pages/PageNotFound";

import { getTokenStorage } from "./utilies/authUtils";
import { administrator } from "./utilies/routes";

export default function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const loggedUser = getTokenStorage();
    if (loggedUser) {
      const user = JSON.parse(loggedUser);
      setUser(user);
    }
  }, []);

  return (
    <BrowserRouter>
      <Navbar user={user} setUser={setUser}>
        <li className="nav-item">
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>
      </Navbar>
      <Routes>
        <Route exact path="/" element={<Home />} />
        {user &&
          user.data.id_role === 1 &&
          administrator.map((admin) => (
            <Route
              key={admin.name}
              exact
              path={admin.href}
              element={
                <RenderComponent user={user} component={<admin.component />} />
              }
            />
          ))}

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export function RenderComponent({ user, component }) {
  return user ? component : <Navigate to="/" />;
}
