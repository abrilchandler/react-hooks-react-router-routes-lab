import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return <div>
    <li>
    <NavLink className="navbar" to="/actors" exact>Actors</NavLink>
    </li>
    <li>
    <NavLink className="navbar" to="/movies" exact>Movies</NavLink>
    </li>
    <li>
    <NavLink className="navbar" to="/directors" exact>Directors</NavLink>
    </li>
    <li>
    <NavLink to="/" exact>Home</NavLink>
  </li>
  </div>;
}

export default NavBar;
