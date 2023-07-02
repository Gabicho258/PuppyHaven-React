import React from "react";
import { NavBar } from "../../Components/NavBar/NavBar";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import "./_GiveUpPetAdoption.scss";

export const GiveUpPetAdoption = () => {
  return (
    <>
      <NavBar />
      <h1 className="pageTitle">Dar en Adopción</h1>
      <div className="petInfo">
        <h3 className="petInfo__title">Datos de la mascota</h3>
        <div className="petInfo__form">
          <div className="petInfo__form-months">
            <label className="petInfo__form-months-label">Meses de vida:</label>
            <TextField
              className="petInfo__form-months-input"
              inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
              type="text"
              required
              id="monthsOfLife"
            />
          </div>
          <div className="petInfo__form-race">
            <label className="petInfo__form-race-label">Raza:</label>
            <TextField
              className="petInfo__form-race-input"
              type="text"
              required
              id="race"
            />
          </div>
          <div className="petInfo__form-color">
            <label className="petInfo__form-color-label">
              Color predominante:
            </label>
            <TextField
              className="petInfo__form-color-input"
              type="text"
              required
              id="petColor"
            />
          </div>
        </div>
      </div>
      <div className="userSection">
        <Box
          className="userSection__petImg"
          sx={{
            width: "20rem",
            height: "20rem",
            backgroundColor: "#dbf0ff",
            border: "1px dashed grey",
          }}
        >
          <Button className="userSection__petImg-uploadBtn">
            Subir una foto
          </Button>
        </Box>
        <div className="userSection__userInfo">
          <h3 className="userSection__userInfo-title">Datos del donador</h3>
          <div className="userSection__userInfo-form">
            <TextField
              className="userSection__userInfo-form-input"
              type="text"
              required
              id="name"
              label="Nombre completo"
            />
            <TextField
              className="userSection__userInfo-form-input"
              type="text"
              required
              id="dni"
              label="DNI"
            />

            <TextField
              className="userSection__userInfo-form-input"
              type="text"
              required
              id="age"
              label="Edad"
            />
            <TextField
              className="userSection__userInfo-form-input"
              type="text"
              required
              id="address"
              label="Dirección"
            />
            <TextField
              className="userSection__userInfo-form-input"
              type="email"
              required
              id="email"
              label="Correo"
            />
          </div>
          <p className="userSection__userInfo-mailWarn">
            Nos pondremos en contacto por medio del correo
          </p>
          <Button
            className="userSection__userInfo-submitBtn"
            type="submit"
            variant="outlined"
          >
            ENVIAR
          </Button>
        </div>
      </div>
    </>
  );
};
