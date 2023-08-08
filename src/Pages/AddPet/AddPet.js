import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { NavBar } from "../../Components/NavBar/NavBar";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import Box from "@mui/material/Box";
import "./_AddPet.scss";
import { cloudinaryService } from "../../utils/cloudinaryService";
import { useDispatch, useSelector } from "react-redux";
import { createMascotaAsync } from "../../slices/mascotas.slice";
import { useNavigate } from "react-router-dom";

export const AddPet = () => {
  const [name, setName] = useState("");
  const [color, setColor] = useState("");
  const [race, setRace] = useState("");
  const [age, setAge] = useState(0);
  const [description, setDescription] = useState("");
  const [donate, setDonate] = useState(false);
  const [photoURL, setPhotoURL] = useState("");
  const user = useSelector((state) => state.usuarios.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Cloudinary service
  const [photoUserUrl, setPhotoUserUrl] = useState("");
  const [photoName, setPhotoName] = useState("Choose file...");

  const showWidgetAddPet = async () => {
    let state = "";
    let URL = "";
    window.cloudinary.openUploadWidget(
      cloudinaryService("pet_photos"),
      (err, result) => {
        if (!err && result && result.event === "success") {
          state = "success";
          const { secure_url, original_filename, format } = result.info;
          URL = secure_url;
          setPhotoUserUrl(secure_url);
          setPhotoName(`${original_filename}.${format}`);
        }
        console.log(`object ${state}`);
        if (state === "success" && result.event === "close") {
          setPhotoURL(URL);
        }
      }
    );
  };
  ////////

  const handleSubmit = async () => {
    const mascota = {
      masNom: name,
      masCol: color,
      masRaz: race,
      masEda: age,
      masFotURL: photoURL,
      masDes: description,
      masIsToAdo: donate,
      masUsuCod: user[0]?.UsuCod,
    };
    await dispatch(createMascotaAsync(mascota));
    navigate("/user-profile");
    console.log(user);
  };

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
              value={name}
              onChange={({ target }) => {
                setName(target.value);
              }}
              inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
              type="text"
            />
          </div>
          <div className="addPetContainer__left-item">
            <label className="addPetContainer__left-item-label">
              Color Predominante:
            </label>
            <TextField
              className="addPetContainer__left-item-field"
              value={color}
              onChange={({ target }) => {
                setColor(target.value);
              }}
              inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
              type="text"
            />
          </div>
          <div className="addPetContainer__left-item">
            <label className="addPetContainer__left-item-label">Raza:</label>
            <TextField
              className="addPetContainer__left-item-field"
              value={race}
              onChange={({ target }) => {
                setRace(target.value);
              }}
              inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
              type="text"
            />
          </div>
          <div className="addPetContainer__left-item">
            <label className="addPetContainer__left-item-label">Edad:</label>
            <TextField
              className="addPetContainer__left-item-field"
              value={age}
              onChange={({ target }) => {
                setAge(target.value);
              }}
              inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
              type="number"
            />
          </div>
          <div className="addPetContainer__left-item">
            <label className="addPetContainer__left-item-label">
              Descripcion:
            </label>
            <TextField
              className="addPetContainer__left-item-field"
              value={description}
              onChange={({ target }) => {
                setDescription(target.value);
              }}
              inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
              type="text"
            />
          </div>
          <div className="addPetContainer__left-btn">
            <Button
              className="addPetContainer__left-btn-submit"
              onClick={handleSubmit}
              variant="contained"
            >
              Añadir Mascota
            </Button>
          </div>
        </div>

        <div className="addPetContainer__right">
          <div>
            <Box
              className="addPetContainer__right-box"
              sx={{
                width: "17rem",
                height: "17rem",
                backgroundColor: "#dbf0ff",
                border: "1px dashed grey",
              }}
            >
              <Button
                onClick={showWidgetAddPet}
                className="addPetContainer__right-box-uploadBtn"
                style={{
                  backgroundImage: `url("${photoURL}")`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                }}
              >
                {photoURL.length > 0 ? "" : "Subir una foto"}
              </Button>
            </Box>
          </div>
          <div>
            <label>Donar</label>
            <FormControlLabel
              onClick={({ target }) => {
                if (donate) setDonate(false);
                else setDonate(true);
              }}
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
