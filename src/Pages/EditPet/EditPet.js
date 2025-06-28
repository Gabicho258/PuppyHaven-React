import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { NavBar } from "../../Components/NavBar/NavBar";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import Box from "@mui/material/Box";
import "./_EditPet.scss";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  getMascotasByUserCodeAsync,
  updateMascotaAsync,
} from "../../slices/mascotas.slice";
import { cloudinaryService } from "../../utils/cloudinaryService";

export const EditPet = () => {
  const { id: petID } = useParams();
  const mascotas = useSelector((state) => state.mascotas.mascotas);
  const petToEdit = mascotas.filter(
    (mascota) => mascota.id === parseInt(petID)
  );
  const {
    id: masCod,
    nombre: masNom,
    color: masCol,
    raza: masRaz,
    edad: masEda,
    fotoUrl: masFotURL,
    descripcion: masDes,
    paraAdopcion: masIsToAdo,
    usuarioId: masUsuCod,
  } = petToEdit[0];
  const userSession = JSON.parse(sessionStorage.getItem("infoUser"));
  const [color, setColor] = useState(masCol);
  const [race, setRace] = useState(masRaz);
  const [age, setAge] = useState(masEda);
  const [description, setDescription] = useState(masDes);
  const [donate, setDonate] = useState(masIsToAdo);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [photoURL, setPhotoURL] = useState(masFotURL);
  // Cloudinary service
  const [photoUserUrl, setPhotoUserUrl] = useState("");
  const [photoName, setPhotoName] = useState("Choose file...");

  const showWidgetEditPet = async () => {
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
      masCod,
      masNom,
      masCol: color,
      masRaz: race,
      masEda: age,
      masFotURL: photoURL,
      masDes: description,
      masIsToAdo: donate,
      masUsuCod,
    };
    console.log(mascota);
    await dispatch(updateMascotaAsync(mascota));
    navigate("/user-profile");
  };

  useEffect(() => {
    dispatch(getMascotasByUserCodeAsync(userSession.id));
  }, []);

  return (
    <>
      <NavBar />
      <h1 className="editPetName">{masNom}</h1>
      <div className="editPetContainer">
        <div className="editPetContainer__left">
          <div className="editPetContainer__left-item">
            <label className="editPetContainer__left-item-label">
              Color Predominante:
            </label>
            <TextField
              className="editPetContainer__left-item-field"
              value={color}
              onChange={({ target }) => {
                setColor(target.value);
              }}
              inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
              type="text"
            />
          </div>
          <div className="editPetContainer__left-item">
            <label className="editPetContainer__left-item-label">Raza:</label>
            <TextField
              className="editPetContainer__left-item-field"
              value={race}
              onChange={({ target }) => {
                setRace(target.value);
              }}
              inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
              type="text"
            />
          </div>
          <div className="editPetContainer__left-item">
            <label className="editPetContainer__left-item-label">Edad:</label>
            <TextField
              className="editPetContainer__left-item-field"
              value={age}
              onChange={({ target }) => {
                setAge(target.value);
              }}
              inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
              type="number"
            />
          </div>
          <div className="editPetContainer__left-item">
            <label className="editPetContainer__left-item-label">
              Descripcion:
            </label>
            <TextField
              className="editPetContainer__left-item-field"
              value={description}
              onChange={({ target }) => {
                setDescription(target.value);
              }}
              inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
              type="text"
            />
          </div>
          <div className="editPetContainer__left-btn">
            <Button
              className="editPetContainer__left-btn-submit"
              onClick={handleSubmit}
              variant="contained"
            >
              Editar
            </Button>
            <Button
              className="editPetContainer__left-btn-cancel"
              onClick={() => navigate("/user-profile")}
              variant="contained"
            >
              Cancelar
            </Button>
          </div>
        </div>
        <div className="editPetContainer__right">
          <div>
            <Box
              className="editPetContainer__right-box"
              sx={{
                width: "17rem",
                height: "17rem",
                backgroundColor: "#dbf0ff",
                border: "1px dashed grey",
              }}
            >
              <Button
                onClick={showWidgetEditPet}
                className="editPetContainer__right-box-uploadBtn"
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
