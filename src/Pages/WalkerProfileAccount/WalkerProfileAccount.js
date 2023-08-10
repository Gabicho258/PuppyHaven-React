import React, { useEffect, useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import { NavBar } from "../../Components/NavBar/NavBar";
import "./_WalkerProfileAccount.scss";
import { useDispatch, useSelector } from "react-redux";
import { TextField } from "@mui/material";
import {
  getWalkerByCodeAsync,
  updateWalkerAsync,
} from "../../slices/paseadores.slice";
import { cloudinaryService } from "../../utils/cloudinaryService";

export const WalkerProfileAccount = () => {
  const walkerSession = JSON.parse(sessionStorage.getItem("infoUser"));
  const walker = useSelector((state) => state.paseadores.walker);
  const dispatch = useDispatch();
  const allDistritos = useSelector((state) => state.distritos.allDistritos);
  const [description, setDescription] = useState(walker[0]?.PasDes);
  const allCalificaciones = useSelector(
    (state) => state.calificaciones.allCalificaciones
  );
  const distrito = allDistritos.filter(
    (distrito) => walker[0]?.DisCod === distrito.DisCod
  );
  const calificacion = allCalificaciones.filter(
    (calificacion) => walker[0]?.CalCod === calificacion.CalCod
  );

  // const distrito = useSelector((state) => state.distritos.distrito);
  const likes = calificacion[0]?.CalMeGus;
  const dislikes = calificacion[0]?.CalNoGus;
  const walkerInfo = [
    `${new Date().getFullYear() - walker[0]?.PasFecNacAno} años`,
    distrito[0]?.DisNom,
    walker[0]?.PasCor,
  ];
  const handleSubmit = async () => {
    const paseadorToEdit = {
      pasCod: walker[0].PasCod,
      disCod: walker[0].DisCod,
      pasFotURL: walker[0].PasFotURL,
      pasDes: description,
      pasDis: "",
    };
    await dispatch(updateWalkerAsync(paseadorToEdit));
    await dispatch(getWalkerByCodeAsync(walker[0]?.PasCod));
    setIsEditing(false);
  };
  // Cloudinary service
  const [photoUserUrl, setPhotoUserUrl] = useState("");
  const [photoName, setPhotoName] = useState("Choose file...");

  const showWidgetPhotoUser = async () => {
    let state = "";
    let URL = "";
    window.cloudinary.openUploadWidget(
      cloudinaryService("user_photos"),
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
          handlePhotoEdit(URL);
        }
      }
    );
  };
  //////////////
  const handlePhotoEdit = async (pasFotURL) => {
    // await showWidgetPhotoUser();
    const paseadorToEdit = {
      pasCod: walker[0].PasCod,
      disCod: walker[0].DisCod,
      pasFotURL: pasFotURL,
      pasDes: description,
      pasDis: "",
    };
    await dispatch(updateWalkerAsync(paseadorToEdit));
    await dispatch(getWalkerByCodeAsync(walker[0]?.PasCod));
  };
  const [isEditing, setIsEditing] = useState(false);
  const handleClick = () => {
    setDescription(walker[0]?.PasDes);
    setIsEditing(true);
  };
  useEffect(() => {}, []);

  return (
    <>
      <NavBar />
      <section>
        <div className="left">
          <div className="left__user">
            <Avatar
              className="left__user-avatar"
              alt={walker[0]?.PasNom}
              src={walker[0]?.PasFotURL}
              variant="rounded"
              sx={{ width: 200, height: 200 }}
              onClick={showWidgetPhotoUser}
            />
            <div className="left__user-info">
              <h3 className="left__user-info-name">{walker[0]?.PasNom}</h3>
              <ul className="left__user-info-list">
                {walkerInfo.map((item) => (
                  <li>{item}</li>
                ))}
              </ul>
            </div>
          </div>
          <hr className="left__divider"></hr>
          <div className="left__description">
            <h4 className="left__description-title">Descripción</h4>
            {isEditing ? (
              <>
                <div className="left__description-edit">
                  <TextField
                    id="filled-multiline-flexible"
                    label="Descripción"
                    multiline
                    maxRows={6}
                    variant="filled"
                    className="left__description-edit-textarea"
                    value={description}
                    onChange={({ target }) => setDescription(target.value)}
                  />
                  {/* <textarea className="left__description-edit-textarea"></textarea> */}
                  <div className="left__description-edit-btnSection">
                    <Button
                      type="submit"
                      color="success"
                      variant="contained"
                      className="left__description-edit-btnSection-btn"
                      onClick={handleSubmit}
                    >
                      Guardar cambios
                    </Button>
                    <Button
                      type="button"
                      variant="contained"
                      className="left__description-edit-btnSection-btn"
                      onClick={() => {
                        setIsEditing(false);
                      }}
                    >
                      Cancelar
                    </Button>
                  </div>
                </div>
              </>
            ) : (
              <>
                <p className="left__description-des">
                  {walker[0]?.PasDes || "El usuario no tiene descripción"}
                </p>
              </>
            )}
          </div>
          <div className="left__button">
            {isEditing ? (
              <></>
            ) : (
              <Button
                variant="contained"
                className="left__button-btn"
                onClick={handleClick}
              >
                <strong>Editar Datos</strong>
              </Button>
            )}
          </div>
        </div>
        <div className="right">
          <div className="right__userCalificationWalker">
            <div className="right__userCalificationWalker-likes">
              <ThumbUpIcon className="right__userCalificationWalker-likes-icon" />
              <p>{likes}</p>
              <p>Me gusta</p>
            </div>
            <div className="right__userCalificationWalker-dislikes">
              <ThumbDownIcon className="right__userCalificationWalker-dislikes-icon" />
              <p>{dislikes}</p>
              <p>No me gusta</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
