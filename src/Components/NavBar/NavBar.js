import React from "react";
import Avatar from "@mui/material/Avatar";
import "./_NavBar.scss";

export const NavBar = () => {
  const name = "Carlo Diaz";
  return (
    <>
      <nav className="nav">
        <ul className="nav__ul">
          <li className="nav__ul-li">INICIO</li>
          <li className="nav__ul-li">ADOPTAR</li>
          <li className="nav__ul-li">BUSCAR PASEO</li>
          <li className="nav__ul-li">DAR EN ADOPCIÓN</li>
          <li className="nav__ul-li">
            <span className="nav__ul-li-name">{name}</span>
            <Avatar
              className="nav__ul-li-avatar"
              //   style={{ display: "inline-block" }}
              alt={name}
              src="/static/images/avatar/1.jpg"
            />
          </li>
        </ul>
      </nav>
    </>
  );
};
