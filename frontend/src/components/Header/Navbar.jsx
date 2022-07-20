import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { AuthContext } from "../../context/AuthContext";
export const Navbar = () => {
  const { isAuthenticated, setIsAuthenticated } = useContext(AuthContext);
  function logoutHandle() {
    localStorage.removeItem("token");
    localStorage.removeItem("id");
    setIsAuthenticated(false);
  }
  return (
    <div className="navbar-container">
      <Link to="/">Home</Link>
      {isAuthenticated ? (
        <Link onClick={logoutHandle} to="/">
          Log out{" "}
        </Link>
      ) : (
        <Link to="/login">Log in</Link>
      )}
      {!isAuthenticated ? <Link to="/signup">Sign Up </Link> : <span></span>}
    </div>
  );
};
