import React from "react";
import PersonIcon from "@mui/icons-material/Person";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./_UserLogin.scss";
import { Link } from "react-router-dom";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";

export const UserLogin = () => {
  return (
    <>
      <div className="container">
        <form className="loginForm">
          <PersonIcon className="loginForm__icon"></PersonIcon>
          <div className="loginForm__userType">
            <FormControl className="loginForm__userType-formControl">
              <RadioGroup
                row
                name="userType"
                defaultValue="usuario"
                className="loginForm__userType-formControl-radioGroup"
              >
                <FormControlLabel
                  value="usuario"
                  control={<Radio />}
                  label="Usuario:"
                />

                <FormControlLabel
                  value="paseador"
                  control={<Radio />}
                  label="Paseador:"
                />
              </RadioGroup>
            </FormControl>
          </div>
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

          <Link to="/register" className="loginForm__link">
            ¿Quieres crear una cuenta?
          </Link>
          <Button variant="contained" className="loginForm__btn">
            Iniciar Sesión
          </Button>
        </form>
      </div>
    </>
  );
};
