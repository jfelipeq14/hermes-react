import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import HermesLogo from "../../components/HermesLogo";
import Login from "../home/auth/Login";
import Register from "../home/auth/Register";
import { Button } from "react-bootstrap";
import { FaSignOutAlt, FaUserEdit } from "react-icons/fa"; // Asegúrate de tener react-icons instalado

export default function Navbar({ children, authenticated }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    const confirmLogout = window.confirm("¿Seguro que quieres cerrar sesión?");
    if (confirmLogout) {
      setUser(false)
      navigate("/");
    }
  };

  const handleEditProfile = () => {
    navigate("/EditProfile"); // Cambia esto a la ruta de tu página de edición de perfil
  };
  const [user, setUser] = useState(true);
  const [openLoginModal, setOpenLoginModal] = useState(false);
  const [openRegisterModal, setOpenRegisterModal] = useState(false);

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
                <>
                  <Button
                    variant="primary"
                    onClick={handleEditProfile}
                    className="me-2"
                  >
                    <FaUserEdit /> Perfil
                  </Button>
                  <Button variant="danger" onClick={handleLogout}>
                    <FaSignOutAlt /> Cerrar Sesión
                  </Button>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
      {openLoginModal && (
        <Login
          isOpen={openLoginModal}
          clickModal={toggleLoginModal}
          userAuthenticated={user}
        />
      )}
      {openRegisterModal && (
        <Register isOpen={openRegisterModal} clickModal={toggleRegisterModal} />
      )}
    </>
  );
}
