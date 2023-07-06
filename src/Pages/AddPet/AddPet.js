import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { NavBar } from "../../Components/NavBar/NavBar";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import Box from "@mui/material/Box";
import "./_AddPet.scss";

export const AddPet = () => {
  return (
    <>
      <NavBar />
      <h1 className="pageTitle">Añadir Mascota</h1>
      <div className="addPetContainer">
        <div className="addPetContainer__left">
          <div className="addPetContainer__left-item">
            <label className="addPetContainer__left-item-label">Nombre:</label>
            <TextField
              className="addPetContainer__left-item-field"
              inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
              type="text"
            />
          </div>
          <div className="addPetContainer__left-item">
            <label className="addPetContainer__left-item-label">
              Color Predominante:
            </label>
            <TextField
              inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
              type="text"
            />
          </div>
          <div className="addPetContainer__left-item">
            <label className="addPetContainer__left-item-label">Raza:</label>
            <TextField
              inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
              type="text"
            />
          </div>
          <div className="addPetContainer__left-item">
            <label className="addPetContainer__left-item-label">Edad:</label>
            <TextField
              inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
              type="text"
            />
          </div>
          <div className="addPetContainer__left-item">
            <label className="addPetContainer__left-item-label">
              Descripcion:
            </label>
            <TextField
              inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
              type="text"
            />
          </div>
          <div>
            <Button
              className="addPetContainer__left-submitBtn"
              variant="contained"
            >
              Añadir Mascota
            </Button>
          </div>
        </div>
        <div className="right">
          <div>
            <Box
              sx={{
                width: "13rem",
                height: "13rem",
                backgroundColor: "#dbf0ff",
                border: "1px dashed grey",
              }}
            >
              <Button>Subir una foto</Button>
            </Box>
          </div>
          <div>
            <label>Donar</label>
            <FormControlLabel
              sx={{
                display: "block",
              }}
              control={<Switch name="donate" color="primary" />}
            />
          </div>
        </div>
      </div>
    </>
  );
};
