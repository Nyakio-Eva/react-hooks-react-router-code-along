import React from "react";
import { NavLink, Link } from "react-router-dom";

const linkStyles = {
  display: "inline-block",
  width: "50px",
  padding: "12px",
  margin: "0 6px 6px",
  background: "blue",
  textDecoration: "none",
  color: "white",
};

function NavBar(){
    return (
      <>
       <NavLink to="/" exact="true" style={linkStyles} activestyle={{background: "darkblue",}}>Home</NavLink>
        <Link to="/about" style={linkStyles}>About</Link>
        <Link to="/login" style={linkStyles}>Login</Link>
      </>
    )

}

export default NavBar