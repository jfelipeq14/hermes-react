import { useState } from "react";
import { NavLink } from "react-router-dom";
import HermesLogo from "../../components/HermesLogo";
import Login from "../home/auth/Login";

// eslint-disable-next-line react/prop-types
export default function Navbar({children}) {
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
              {children}
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
            </ul>
          </div>
        </div>
      </nav>
      {openModal ? <Login isOpen={openModal} form={form} clickModal={clickModal}/> : ""}
    </>
  );
}
