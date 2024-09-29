/* eslint-disable react/prop-types */
import { NavLink, useNavigate } from "react-router-dom";
import HermesLogo from "../../components/HermesLogo";
import { useState } from "react";
import {
  ArrowRightEndOnRectangleIcon,
  UserCircleIcon,
} from "@heroicons/react/16/solid";
import { removeTokenStorage } from "../../utilies/authUtils";
import { AuthService } from "../../services/auth.service.js";
import Login from "../home/auth/Login";
import Register from "../home/auth/Register";

export default function Navbar({ children, user, setUser }) {
  const navigate = useNavigate();

  const [openLoginModal, setOpenLoginModal] = useState(false);
  const [openRegisterModal, setOpenRegisterModal] = useState(false);

  const handleLogout = async () => {
    setUser(null);
    removeTokenStorage();
    await AuthService.logout();
    navigate("/");
  };

  const toggleLoginModal = () => {
    setOpenLoginModal(!openLoginModal);
  };

  const toggleRegisterModal = () => {
    setOpenRegisterModal(!openRegisterModal);
  };

  return (
    <nav className="navbar navbar-expand-lg p-0 m-0">
      <div className="container-fluid rounded p-2 text-light">
        <NavLink to="/" className="nav-brand">
          <HermesLogo />
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            {children}
            {user ? (
              <li className="nav-item d-flex g-3 align-items-center">
                <NavLink
                  to={{ pathname: "administrator/profile", user: user }}
                  className="btn btn-dark mx-2"
                >
                  {user.data.email}
                  <UserCircleIcon width={25} className="mx-2" />
                </NavLink>
                <button
                  className="btn btn-outline-danger mx-2"
                  onClick={handleLogout}
                >
                  <ArrowRightEndOnRectangleIcon width={25} className="me-2" />
                </button>
              </li>
            ) : (
              <li className="nav-item d-flex align-items-center">
                <button
                  type="button"
                  className="btn btn-dark mx-1"
                  onClick={toggleLoginModal}
                >
                  Ingresar
                </button>
                <button
                  type="button"
                  className="btn btn-outline-secondary mx-1"
                  onClick={toggleRegisterModal}
                >
                  Registrarse
                </button>
              </li>
            )}
            {openLoginModal && (
              <Login
                isOpen={openLoginModal}
                clickModal={toggleLoginModal}
                setUser={setUser}
              />
            )}
            {openRegisterModal && (
              <Register
                isOpen={openRegisterModal}
                clickModal={toggleRegisterModal}
              />
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}
