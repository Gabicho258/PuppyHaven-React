import React, { useEffect, useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import { NavBar } from "../../Components/NavBar/NavBar";
import "./_WalkerProfileAccount.scss";
import { useDispatch, useSelector } from "react-redux";

import { Comment } from "../../Components/Comment/Comment";

import { TextField } from "@mui/material";
import {
  getWalkerByCodeAsync,
  updateWalkerAsync,
} from "../../slices/paseadores.slice";
import { cloudinaryService } from "../../utils/cloudinaryService";
import { getComentariosByWalkerCodeAsync } from "../../slices/comentarios.slice";

export const WalkerProfileAccount = () => {
  const walkerSession = JSON.parse(sessionStorage.getItem("infoUser"));
  const walker = useSelector((state) => state.paseadores.walker);
  const dispatch = useDispatch();
  const allDistritos = useSelector((state) => state.distritos.allDistritos);
  const [description, setDescription] = useState(walker?.descripcion);
  const allCalificaciones = useSelector(
    (state) => state.calificaciones.allCalificaciones
  );
  const comentarios = useSelector((state) => state.comentarios.comentarios);
  const distrito = allDistritos.filter(
    (distrito) => walker?.distritoId === distrito.id
  );
  const calificacion = allCalificaciones.filter(
    (calificacion) => walker?.calificacionId === calificacion.id
  );

  // const distrito = useSelector((state) => state.distritos.distrito);
  const likes = calificacion[0]?.meGusta;
  const dislikes = calificacion[0]?.noGusta;
  const walkerInfo = [
    `${new Date().getFullYear() - walker?.fechaNacAno} años`,
    distrito[0]?.nombre,
    walker?.correo,
  ];
  const handleSubmit = async () => {
    const paseadorToEdit = {
      pasCod: walker?.id,
      disCod: walker?.distritoId,
      pasFotURL: walker?.fotoUrl,
      pasDes: description,
      pasDis: walker?.disponibilidad,
    };
    await dispatch(updateWalkerAsync(paseadorToEdit));
    await dispatch(getWalkerByCodeAsync(walker?.id));
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
      pasCod: walker?.id,
      disCod: walker?.distritoId,
      pasFotURL: pasFotURL,
      pasDes: description,
      pasDis: "",
    };
    await dispatch(updateWalkerAsync(paseadorToEdit));
    await dispatch(getWalkerByCodeAsync(walker?.id));
  };
  const [isEditing, setIsEditing] = useState(false);
  const handleClick = () => {
    setDescription(walker?.descripcion);
    setIsEditing(true);
  };

  // const comentarios = [
  //   { UsuNom: "Pepe", ComIsLike: true, ComTex: "este es un buen comment" },
  //   { UsuNom: "Pepe", ComIsLike: true, ComTex: "este es un buen comment" },
  //   { UsuNom: "Pepe", ComIsLike: true, ComTex: "este es un buen comment" },
  //   { UsuNom: "Pepe", ComIsLike: true, ComTex: "este es un buen comment" },
  //   { UsuNom: "Pepe", ComIsLike: true, ComTex: "este es un buen comment" },
  //   { UsuNom: "Pepe", ComIsLike: true, ComTex: "este es un buen comment" },
  //   { UsuNom: "Pepe", ComIsLike: true, ComTex: "este es un buen comment" },
  // ];

  useEffect(() => {
    dispatch(getComentariosByWalkerCodeAsync(walkerSession.id));
  }, []);

  return (
    <>
      <NavBar />
      <section>
        <div className="left">
          <div className="left__user">
            <Avatar
              className="left__user-avatar"
              alt={walker?.nombre}
              src={walker?.fotoUrl}
              variant="rounded"
              sx={{ width: 200, height: 200 }}
              onClick={showWidgetPhotoUser}
            />
            <div className="left__user-info">
              <h3 className="left__user-info-name">{walker?.nombre}</h3>
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
                  {walker?.descripcion || "El usuario no tiene descripción"}
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
          <div className="left__comments">
            {comentarios.length === 0 ? (
              <div className="left__comments-empty">
                <p>No hay comentarios</p>
              </div>
            ) : (
              comentarios.map(({ usuario, esLike, texto }, i) => {
                return (
                  <Comment
                    key={i}
                    author={usuario.nombre}
                    qualification={{
                      isLiked: esLike,
                      isDisliked: !esLike,
                    }}
                    comment={texto}
                  />
                );
              })
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
