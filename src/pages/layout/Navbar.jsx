import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import HermesLogo from "../../components/HermesLogo";
import Login from "../home/auth/Login";
import Register from "../home/auth/Register";
import {
  ArrowRightEndOnRectangleIcon,
  UserCircleIcon,
} from "@heroicons/react/16/solid";

export default function Navbar({ children }) {
  const navigate = useNavigate();
  const [user, setUser] = useState(false);
  const [openLoginModal, setOpenLoginModal] = useState(false);
  const [openRegisterModal, setOpenRegisterModal] = useState(false);

  const handleLogin = () => {
    setUser(!user);
  };

  const handleLogout = () => {
    const confirmLogout = window.confirm("¿Seguro que quieres cerrar sesión?");
    if (confirmLogout) {
      setUser(!user);
      navigate("/");
    }
  };

  const toggleLoginModal = () => {
    setOpenLoginModal(!openLoginModal);
  };

  const toggleRegisterModal = () => {
    setOpenRegisterModal(!openRegisterModal);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <NavLink to="/" className={"nav-brand"}>
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
              {!user ? (
                <>
                  <li className="nav-item">
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={toggleLoginModal}
                    >
                      Ingresar
                    </button>
                  </li>
                  <li className="nav-item">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      onClick={toggleRegisterModal}
                    >
                      Registrarse
                    </button>
                  </li>
                </>
              ) : (
                <li className="nav-item d-flex align-items-center">
                  <UserCircleIcon
                    width={25}
                    onClick={() => {
                      navigate("/edit-profile");
                    }}
                  />
                  <ArrowRightEndOnRectangleIcon
                    width={25}
                    onClick={handleLogout}
                  />
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
      {openLoginModal && (
        <Login
          isOpen={openLoginModal}
          clickModal={toggleLoginModal}
          handleLogin={handleLogin}
        />
      )}
      {openRegisterModal && (
        <Register isOpen={openRegisterModal} clickModal={toggleRegisterModal} />
      )}
    </>
  );
}
