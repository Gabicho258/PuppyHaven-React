import React, { useEffect, useState } from "react";

import FormControl from "@mui/material/FormControl";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button, InputLabel, MenuItem, Select } from "@mui/material";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";

import "./_UserRegister.scss";
import { useDispatch, useSelector } from "react-redux";
import { createUserAsync } from "../../slices/usuarios.slice";
import { createWalkerAsync } from "../../slices/paseadores.slice";
import { calificacionesFunctions } from "../../api";
import { useNavigate } from "react-router-dom";
import { distritos } from "../../utils/distritos";
// import { login } from "../../api/user.api";
const { createCalificacion } = calificacionesFunctions;
export const UserRegister = () => {
  const [rol, setRol] = useState("usuario");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userCreated = useSelector((state) => state.usuarios.created);
  const walkerCreated = useSelector((state) => state.paseadores.created);
  const [distrito, setDistrito] = useState();
  const handleRegister = async ({ target }) => {
    console.log(rol);
    const userToRegister = {
      usuNom: `${target[2].value} ${target[4].value}`,
      usuCor: target[6].value,
      usuCon: target[14].value,
      disCod: distrito,
      usuFotURL:
        "https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-High-Quality-Image.png",
      usuFecNacAno: parseInt(target[10].value.split("-")[0]),
      usuFecNacMes: parseInt(target[10].value.split("-")[1]),
      usuFecNacDia: parseInt(target[10].value.split("-")[2]),
    };
    const walkerToRegister = {
      pasNom: `${target[2].value} ${target[4].value}`,
      pasCor: target[6].value,
      pasCon: target[14].value,
      disCod: distrito,
      pasFotURL:
        "https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-High-Quality-Image.png",
      pasFecNacAno: parseInt(target[10].value.split("-")[0]),
      pasFecNacMes: parseInt(target[10].value.split("-")[1]),
      pasFecNacDia: parseInt(target[10].value.split("-")[2]),
      pasDes: `¡Hola! Mi nombre es ${target[2].value}`,
      pasDis: "",
    };
    if (rol === "usuario") {
      await dispatch(createUserAsync(userToRegister));
      // console.log(userToRegister);
    }
    if (rol === "paseador") {
      const [{ id: calCod }] = await createCalificacion();
      dispatch(createWalkerAsync({ ...walkerToRegister, calCod }));
    }
  };

  useEffect(() => {
    if (userCreated || walkerCreated) {
      navigate("/login");
    }
  }, [userCreated, walkerCreated]);

  return (
    <div className="registerContainer">
      <div className="registerContainer__formContainer">
        <FormControl className="registerContainer__formContainer-form">
          <PersonOutlineOutlinedIcon
            color="primary"
            Outlined
            sx={{ fontSize: 60, margin: "auto", marginTop: 2 }}
          />
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleRegister(e);
            }}
          >
            <Box
              component="div"
              sx={{
                "& .MuiTextField-root": {
                  m: 1,
                  width: "90%",
                },
              }}
              noValidate
              autoComplete="off"
            >
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
              <TextField
                style={{ width: "44%" }}
                required
                id="name"
                type="text"
                label="Nombres"
              />
              <TextField
                style={{ width: "44%" }}
                required
                id="lastName"
                type="text"
                label="Apellidos"
              />
              <TextField
                required
                id="email"
                type="email"
                label="Correo electrónico"
              />
              <FormControl style={{ width: "90%" }}>
                <InputLabel id="distrito">Distrito:</InputLabel>
                <Select
                  labelId="distrito"
                  id="distrito"
                  value={distrito}
                  label="Distrito"
                  required
                  onChange={({ target }) => {
                    setDistrito(target.value);
                  }}
                  style={{ textAlign: "left" }}
                >
                  {distritos.map((distrito) => (
                    <MenuItem key={distrito.id} value={distrito.id}>
                      {distrito.nombre}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <TextField
                required
                InputLabelProps={{ shrink: true }}
                id="fechaNacimiento"
                type="date"
                label="Fecha de nacimiento"
                defaultValue
              />

              <TextField
                inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
                type="text"
                required
                id="phone"
                label="Número de teléfono"
              />

              <TextField
                type="password"
                required
                id="password"
                label="Contraseña"
              />
            </Box>
            <Button
              type="submit"
              variant="outlined"
              className="registerContainer__formContainer-form-btnSubmit"
            >
              Registrarse
            </Button>
          </form>
        </FormControl>
      </div>
    </div>
  );
};
