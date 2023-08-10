import React, { useEffect } from "react";
import Avatar from "@mui/material/Avatar";
import "./_NavBar.scss";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUserByCodeAsync } from "../../slices/usuarios.slice";
import { getWalkerByCodeAsync } from "../../slices/paseadores.slice";
import { getAllDistritosAsync } from "../../slices/distritos.slice";
import { getAllCalificacionesAsync } from "../../slices/calificaciones.slice";

export const NavBar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userSession = JSON.parse(sessionStorage.getItem("infoUser"));
  const userIsLoggued = useSelector((state) => state.usuarios.loggued);
  const walkerIsLoggued = useSelector((state) => state.paseadores.loggued);
  const user = useSelector((state) => state.usuarios.user);
  const walker = useSelector((state) => state.paseadores.walker);

  const isUser =
    userSession?.rol === "usuario" && (userIsLoggued || userSession);
  const isWalker =
    userSession?.rol === "paseador" && (walkerIsLoggued || userSession);

  const handleEndSession = () => {
    sessionStorage.removeItem("infoUser");
    window.location.href = "/";
  };
  useEffect(() => {
    console.log(userSession);
    dispatch(getAllDistritosAsync());
    dispatch(getAllCalificacionesAsync());
    if (userSession?.rol === "usuario") {
      dispatch(getUserByCodeAsync(userSession.id));
    } else if (userSession?.rol === "paseador") {
      dispatch(getWalkerByCodeAsync(userSession.id));
    }
    console.log(user);
  }, []);

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
                <Link to="/adopt-tramit">TRAMITES</Link>
              </li>
              <li className="nav__ul-li">
                <Link to="/my-walks">MIS PASEOS</Link>
              </li>
              <li className="nav__ul-li">
                <span className="nav__ul-li-name">{user[0]?.UsuNom}</span>
                <Avatar
                  className="nav__ul-li-avatar"
                  //   style={{ display: "inline-block" }}
                  alt={user[0]?.UsuNom}
                  src={user[0]?.UsuFotURL}
                  onClick={() => navigate("/user-profile")}
                />
                <Link className="nav__ul-li-end" onClick={handleEndSession}>
                  SALIR
                </Link>
              </li>
            </>
          ) : isWalker ? (
            <>
              {" "}
              <li className="nav__ul-li">
                <Link to="/my-requests">SOLICITUDES DE PASEOS</Link>
              </li>
              <li className="nav__ul-li">
                <Link to="/my-walks">CITAS</Link>
              </li>
              <li className="nav__ul-li">
                <span className="nav__ul-li-name">{walker[0]?.PasNom}</span>
                <Avatar
                  className="nav__ul-li-avatar"
                  //   style={{ display: "inline-block" }}
                  alt={walker[0]?.PasNom}
                  src={walker[0]?.PasFotURL}
                  onClick={() => navigate("/walker-profile")}
                />
                <Link className="nav__ul-li-end" onClick={handleEndSession}>
                  SALIR
                </Link>
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
