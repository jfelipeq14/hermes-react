import { useState } from "react";
import { NavLink } from "react-router-dom";
import HermesLogo from "../../components/HermesLogo";
import Login from "../home/auth/Login";
import Register from "../home/auth/Register";
import { logout } from "../../utilies/authUtils"; // Asegúrate de que la ruta sea correcta

export default function Navbar({ children, onLogout }) {
  const [openLoginModal, setOpenLoginModal] = useState(false);
  const [openRegisterModal, setOpenRegisterModal] = useState(false);

  const toggleLoginModal = () => {
    setOpenLoginModal(!openLoginModal);
  };

  const toggleRegisterModal = () => {
    setOpenRegisterModal(!openRegisterModal);
  };

  const handleLogout = () => {
    logout(); // Llama a la función de cierre de sesión
    onLogout(); // Llama a la función pasada como prop para manejar el estado en el componente superior
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
              <li className="nav-item">
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={handleLogout}
                >
                  Cerrar Sesión
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {openLoginModal && <Login isOpen={openLoginModal} clickModal={toggleLoginModal} />}
      {openRegisterModal && <Register isOpen={openRegisterModal} clickModal={toggleRegisterModal} />}
    </>
  );
}

