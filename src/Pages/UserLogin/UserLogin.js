import React from "react";
import PersonIcon from "@mui/icons-material/Person";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./_UserLogin.scss";

export const UserLogin = () => {
  return (
    <>
      <div className="container">
        <form className="loginForm">
          <PersonIcon className="loginForm__icon"></PersonIcon>
          <div className="loginForm__mail">
            <label for="email" className="loginForm__mail-label">
              Correo o Nombre de Usuario:
            </label>
            <TextField
              required
              id="email"
              type="email"
              className="loginForm__mail-input"
            />
          </div>
          <div className="loginForm__password">
            <label for="password" className="loginForm__password-label">
              Contraseña:
            </label>
            <TextField
              required
              id="password"
              type="password"
              className="loginForm__password-input"
            />
          </div>
          <a href="#" className="loginForm__link">
            ¿Quieres crear una cuenta?
          </a>
          <Button variant="contained" className="loginForm__btn">
            Iniciar Sesión
          </Button>
        </form>
      </div>
    </>
  );
};
