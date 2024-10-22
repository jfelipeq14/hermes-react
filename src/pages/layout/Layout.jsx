/* eslint-disable react/prop-types */
import Footer from "./Footer";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import "./layout.css";

export default function Layout({ children, user, setUser }) {
  return (
    <>
      {user ? (
        <div className="grid-area-admin">
          <Navbar user={user} setUser={setUser}></Navbar>
          <Sidebar />
          <main>{children}</main>
          <Footer />
        </div>
      ) : (
        <div className="grid-area-landing">
          <Navbar user={user} setUser={setUser}></Navbar>
          <main>{children}</main>
        </div>
      )}
    </>
  );
}
