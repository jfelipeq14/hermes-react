import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import HermesLogo from "../../components/HermesLogo";
import Login from "../home/auth/Login";
import Register from "../home/auth/Register";
import {
  ArrowRightEndOnRectangleIcon,
  UserCircleIcon,
} from "@heroicons/react/16/solid";
import {
  getTokenStorage,
  removeTokenStorage,
  setTokenStorage,
} from "../../utilies/authUtils";
import { login, logout } from "../../services/auth.service";

// eslint-disable-next-line react/prop-types
export default function Navbar({ children }) {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [openLoginModal, setOpenLoginModal] = useState(false);
  const [openRegisterModal, setOpenRegisterModal] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const [validated, setValidated] = useState(false);

  useEffect(() => {
    const loggedUser = getTokenStorage();
    if (loggedUser) {
      const user = JSON.parse(loggedUser);
      setUser(user);
    }
  }, []);

  const handleChange = ({ target }) => {
    const { name, value } = target;
    if (name === "email") setEmail(value);
    if (name === "password") setPassword(value);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!e.currentTarget.checkValidity()) {
      e.stopPropagation();
    } else {
      try {
        const userLogin = await login({ email, password });
        setUser(userLogin);
        setTokenStorage(userLogin);
        setOpenLoginModal(false);
        navigate("/menu");
      } catch (error) {
        console.error(error);
      }
    }
    setValidated(true);
  };

  const handleLogout = () => {
    setUser(null);
    removeTokenStorage();
    logout();
    setShowLogoutModal(false); // Cierra el modal al cerrar sesión
    navigate("/");
  };

  const toggleLoginModal = () => {
    setOpenLoginModal(!openLoginModal);
  };

  const toggleRegisterModal = () => {
    setOpenRegisterModal(!openRegisterModal);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg">
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
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              {children}
              {user ? (
                <li className="nav-item d-flex g-3 align-items-center">
                  <button
                    className="btn btn-outline-dark mx-2"
                    onClick={() => navigate("/edit-profile")}
                  >
                    {user.data.email}
                    <UserCircleIcon width={25} className="mx-2" />
                  </button>
                  <button
                    className="btn btn-outline-danger mx-2"
                    onClick={() => setShowLogoutModal(true)}
                  >
                    <ArrowRightEndOnRectangleIcon width={25} className="me-2" />
                  </button>
                </li>
              ) : (
                <li className="nav-item d-flex align-items-center">
                  <button
                    type="button"
                    className="btn btn-outline-primary mx-1"
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
            </ul>
          </div>
        </div>
      </nav>

      {openLoginModal && (
        <Login
          isOpen={openLoginModal}
          clickModal={toggleLoginModal}
          validated={validated}
          handleLogin={handleLogin}
          handleChange={handleChange}
        />
      )}
      {openRegisterModal && (
        <Register isOpen={openRegisterModal} clickModal={toggleRegisterModal} />
      )}

      {/* Modal de confirmación */}
      {showLogoutModal && (
        <div
          className="modal fade show"
          style={{ display: "block" }}
          tabIndex="-1"
          role="dialog"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content rounded-3 shadow-lg">
              <div className="modal-header border-bottom-0">
                <h5 className="modal-title">Confirmar Cierre de Sesión</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setShowLogoutModal(false)}
                  aria-label="Close"
                >
                  <span>&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <p className="text-center">
                  ¿Estás seguro que deseas cerrar sesión?
                </p>
              </div>
              <div className="modal-footer d-flex justify-content-center border-top-0">
                <button
                  type="button"
                  className="btn btn-danger me-2"
                  onClick={() => setShowLogoutModal(false)}
                >
                  Cancelar
                </button>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={handleLogout}
                >
                  Cerrar Sesión
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
