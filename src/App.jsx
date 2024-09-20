/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { BrowserRouter, Route, Link, Routes, Navigate } from "react-router-dom";

import Home from "./pages/home/Home";
import Navbar from "./pages/layout/Navbar";
import PageNotFound from "./pages/PageNotFound";

import { getTokenStorage } from "./utilies/authUtils";
import { createRoutes } from "./utilies/routes.js";
import Reserve from "./pages/reserve/Reserve";

export default function App() {
  const [user, setUser] = useState(null);
  const [role, setRole] = useState(0);

  useEffect(() => {
    const loggedUser = getTokenStorage();
    if (!loggedUser) return;
    const data = JSON.parse(loggedUser);
    data.data.idRole == 1 ? setRole(1) : setRole(2);
    setUser(data);
  }, [user]);

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
        <Route exact path="/reserve" element={<Reserve />} />
        {user &&
          role &&
          createRoutes(role).map((item) => {
            return (
              <>
                <Route
                  key={item.name}
                  exact
                  path={item.href}
                  element={
                    <RenderComponent
                      user={user}
                      component={<item.component />}
                    />
                  }
                />
                {item.submenu &&
                  item.submenu.map((submenu) => (
                    <Route
                      key={submenu.name}
                      exact
                      path={submenu.href}
                      element={
                        <RenderComponent
                          user={user}
                          component={<submenu.component />}
                        />
                      }
                    />
                  ))}
              </>
            );
          })}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export function RenderComponent({ user, component }) {
  return user ? component : <Navigate to="/" />;
}
