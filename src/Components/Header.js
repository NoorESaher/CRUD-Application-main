import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <h1>Book Management App</h1>
      <hr />
      <div className="links">
        <NavLink to="/" className="link" activeclassname="active" exact>
          Books List HERE
        </NavLink>
        <NavLink to="/add" className="link" activeclassname="active">
          Add Book
        </NavLink>
        <NavLink to="/redirect" className="link" activeclassname="active">
          Counter Page
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
