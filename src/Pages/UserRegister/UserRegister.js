import React from "react";

import FormControl from "@mui/material/FormControl";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";

import "./_UserRegister.scss";
import { login1, login2 } from "../../api/user.api";

export const UserRegister = () => {
  const handleRegister = async ({ target }) => {
    const resolve = await login1();
    console.log(resolve);
  };

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
              <TextField
                inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
                type="text"
                required
                id="dni"
                label="Número de DNI"
              />
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
