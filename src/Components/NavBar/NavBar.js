import React from "react";
import Avatar from "@mui/material/Avatar";
import "./_NavBar.scss";
import { Link, useNavigate } from "react-router-dom";

export const NavBar = () => {
  const name = "Carlo Diaz";
  const navigate = useNavigate();
  const isUser = false;
  const isWalker = false;
  return (
    <>
      <nav className="nav">
        <ul className="nav__ul">
          <li className="nav__ul-li">
            <Link to="/">INICIO</Link>
          </li>
          {isUser ? (
            <>
              <li className="nav__ul-li">
                <Link to="/adopt-pet">ADOPTAR</Link>
              </li>
              <li className="nav__ul-li">
                <Link to="/search-walkers">BUSCAR PASEO</Link>
              </li>
              <li className="nav__ul-li">
                <span className="nav__ul-li-name">{name}</span>
                <Avatar
                  className="nav__ul-li-avatar"
                  //   style={{ display: "inline-block" }}
                  alt={name}
                  src="/static/images/avatar/1.jpg"
                  onClick={() => navigate("/user-profile")}
                />
              </li>
            </>
          ) : isWalker ? (
            <>
              {" "}
              <li className="nav__ul-li">
                <Link to="/adopt-pet">SOLICITUDES DE PASEOS</Link>
              </li>
              <li className="nav__ul-li">
                <span className="nav__ul-li-name">{name}</span>
                <Avatar
                  className="nav__ul-li-avatar"
                  //   style={{ display: "inline-block" }}
                  alt={name}
                  src="/static/images/avatar/1.jpg"
                  onClick={() => navigate("/walker-profile/id")}
                />
              </li>
            </>
          ) : (
            <>
              <li className="nav__ul-li">
                <Link to="/register">REGISTRARSE</Link>
              </li>
              <li className="nav__ul-li">
                <Link to="/login">INICIAR SESIÓN</Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </>
  );
};
