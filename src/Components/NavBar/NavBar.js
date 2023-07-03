import React from "react";
import Avatar from "@mui/material/Avatar";
import "./_NavBar.scss";
import { Link, useNavigate } from "react-router-dom";

export const NavBar = () => {
  const name = "Carlo Diaz";
  const navigate = useNavigate();
  return (
    <>
      <nav className="nav">
        <ul className="nav__ul">
          <li className="nav__ul-li">
            <Link to="/home-page-user">INICIO</Link>
          </li>
          <li className="nav__ul-li">
            <Link to="/adopt-pet">ADOPTAR</Link>
          </li>
          <li className="nav__ul-li">
            <Link to="/home-page-user">BUSCAR PASEO</Link>
          </li>
          <li className="nav__ul-li">
            <Link to="/give-up-a-pet-for-adoption">DAR EN ADOPCIÓN</Link>
          </li>
          <li className="nav__ul-li">
            <span className="nav__ul-li-name">{name}</span>
            <Avatar
              className="nav__ul-li-avatar"
              //   style={{ display: "inline-block" }}
              alt={name}
              src="/static/images/avatar/1.jpg"
              onClick={() => navigate("/")}
            />
          </li>
        </ul>
      </nav>
    </>
  );
};
