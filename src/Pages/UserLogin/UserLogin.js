import React, { useEffect, useState } from "react";
import PersonIcon from "@mui/icons-material/Person";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./_UserLogin.scss";
import { Link, useNavigate } from "react-router-dom";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import { useDispatch, useSelector } from "react-redux";
import { loginUserAsync } from "../../slices/usuarios.slice";
import { loginWalkerAsync } from "../../slices/paseadores.slice";
import { LoginNotificationError } from "../../Components/LoginNotificationError/LoginNotificationError";

export const UserLogin = () => {
  const alertUser = useSelector((state) => state.usuarios.alert);
  const alertWalker = useSelector((state) => state.paseadores.alert);
  const [alert, setAlert] = useState(false);
  const [rol, setRol] = useState("usuario");
  const [correo, setCorreo] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userInfoSessionStorage =
    JSON.parse(sessionStorage.getItem("infoUser")) ?? false;
  const userIsLoggued = useSelector((state) => state.usuarios.loggued);
  const walkerIsLoggued = useSelector((state) => state.paseadores.loggued);
  // const logguedUser = useSelector((state) => state.usuarios.userInfo);
  // const logguesWalker = useSelector((state) => state.paseadores.walkerInfo);
  const handleLogin = async () => {
    const userToLogin = {
      usuCor: correo,
      usuCon: password,
    };
    const walkerToLogin = {
      pasCor: correo,
      pasCon: password,
    };

    console.log(userToLogin);
    if (rol === "usuario") {
      await dispatch(loginUserAsync(userToLogin));
    } else {
      await dispatch(loginWalkerAsync(walkerToLogin));
    }
    setAlert(alertUser || alertWalker);
    setTimeout(() => {
      setAlert(false);
    }, 5000);
  };
  useEffect(() => {
    if (userIsLoggued || walkerIsLoggued || userInfoSessionStorage) {
      setAlert(false);
      navigate("/");
    }
    setAlert(alertUser || alertWalker);
    console.log("alertUser", alertUser);
    console.log("alertWalker", alertWalker);
  }, [userIsLoggued, walkerIsLoggued]);
  return (
    <>
      {alert ? (
        <LoginNotificationError
          alertOnUser={() => {
            return true;
          }}
          alertOnWalker={() => {
            return true;
          }}
          message={"No se pudo iniciar sesión correctamente"}
        />
      ) : (
        <></>
      )}
      <div className="container">
        <form className="loginForm">
          <PersonIcon className="loginForm__icon"></PersonIcon>
          <div className="loginForm__userType">
            <FormControl className="loginForm__userType-formControl">
              <RadioGroup
                row
                name="userType"
                defaultValue={rol}
                className="loginForm__userType-formControl-radioGroup"
              >
                <FormControlLabel
                  value="usuario"
                  control={<Radio />}
                  label="Usuario:"
                  onClick={() => {
                    setRol("usuario");
                  }}
                />

                <FormControlLabel
                  value="paseador"
                  control={<Radio />}
                  label="Paseador:"
                  onClick={() => {
                    setRol("paseador");
                  }}
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
              value={correo}
              onChange={({ target }) => {
                setCorreo(target.value);
              }}
            />
          </div>
          <div className="loginForm__password">
            <label for="password" className="loginForm__password-label">
              Contraseña:
            </label>
            <TextField
              required
              value={password}
              id="password"
              type="password"
              className="loginForm__password-input"
              onChange={({ target }) => {
                setPassword(target.value);
              }}
            />
          </div>

          <Link to="/register" className="loginForm__link">
            ¿Quieres crear una cuenta?
          </Link>
          <Button
            variant="contained"
            className="loginForm__btn"
            onClick={handleLogin}
          >
            Iniciar Sesión
          </Button>
          <Link to="/" className="loginForm__link">
            Cancelar
          </Link>
        </form>
      </div>
    </>
  );
};
