import { useState } from "react";
import { NavLink } from "react-router-dom";
import HermesLogo from "../utils/HermesLogo";
import Login from "../utils/auth/Login";

export default function Navbar() {
  const form = {
    email: "",
    password: "",
  };
  const [openModal, setOpenModal] = useState(false);
  const clickModal = () => {
    setOpenModal(!openModal);
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
              <li className="nav-item">
                <NavLink to="customers" className={"nav-link"}>
                  Customers
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="role" className={"nav-link"}>
                  Role
                </NavLink>
              </li>
              <li className="nav-item">
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => {
                    setOpenModal(!openModal);
                  }}
                >
                  Ingresar
                </button>
              </li>
              <li className="nav-item">
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => {
                    clickModal();
                  }}
                >
                  Registrarse
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {openModal ? <Login isOpen={openModal} form={form} clickModal={clickModal}/> : ""}
    </>
  );
}
