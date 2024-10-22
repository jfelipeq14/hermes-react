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
import Modals from "../../components/Modals.jsx";
import Recover from "../home/auth/Recover.jsx";

export default function Navbar({ children, user, setUser }) {
  const navigate = useNavigate();

  const [openLoginModal, setOpenLoginModal] = useState(false);
  const [openRegisterModal, setOpenRegisterModal] = useState(false);
  const [openRecoveryModal, setOpenRecoveryModal] = useState(false);

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
    <nav className="navbar navbar-expand-lg shadow-sm bg-light">
      <div className="container-fluid">
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
          <ul className="navbar-nav ms-auto">
            {children}
            {user ? (
              <li className="nav-item d-flex g-3 align-items-center">
                <button
                  className="btn btn-sm btn-secondary mx-2"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {user.data.email}
                </button>
                <ul className="dropdown-menu m-0 p-0">
                  <li>
                    <NavLink
                      to={{ pathname: "administrator/profile", user: user }}
                      className="dropdown-item"
                    >
                      <UserCircleIcon width={20} className="mx-2" />
                      {user.data.idRole === 1 ? "Administrador" : "Cliente"}
                    </NavLink>
                  </li>
                  <li>
                    <button
                      className="btn"
                      onClick={handleLogout}
                    >
                      <ArrowRightEndOnRectangleIcon
                        width={20}
                        className="mx-2"
                      />
                      Cerrar
                    </button>
                  </li>
                </ul>
              </li>
            ) : (
              <li className="nav-item d-flex align-items-center">
                <button
                  type="button"
                  className="btn btn-sm btn-primary mx-1"
                  onClick={toggleLoginModal}
                >
                  Ingresar
                </button>
                <button
                  type="button"
                  className="btn btn-sm btn-secondary mx-1"
                  onClick={toggleRegisterModal}
                >
                  Registrarse
                </button>
              </li>
            )}

            {openLoginModal && (
              <Modals isOpen={openLoginModal} clickModal={setOpenLoginModal}>
                <Login
                  setUser={setUser}
                  clickModal={setOpenLoginModal}
                  setOpenRecoveryModal={setOpenRecoveryModal}
                />
              </Modals>
            )}

            {openRegisterModal && (
              <Modals
                isOpen={openRegisterModal}
                clickModal={setOpenRegisterModal}
                size="md"
              >
                <Register />
              </Modals>
            )}

            {openRecoveryModal && (
              <Modals
                isOpen={openRecoveryModal}
                clickModal={setOpenRecoveryModal}
              >
                <Recover user={user} setUser={setUser} />
              </Modals>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}
