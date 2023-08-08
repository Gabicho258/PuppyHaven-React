import React, { useEffect, useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import { NavBar } from "../../Components/NavBar/NavBar";
import "./_WalkerProfile.scss";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getWalkerByCodeAsync } from "../../slices/paseadores.slice";
import { Comment } from "../../Components/Comment/Comment";
import { Box, FormControl, Rating, TextField } from "@mui/material";
import { QualificationComponent } from "../../Components/QualificationComponent/QualificationComponent";

export const WalkerProfile = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const walker = useSelector((state) => state.paseadores.walker);
  const allDistritos = useSelector((state) => state.distritos.allDistritos);
  const allCalificaciones = useSelector(
    (state) => state.calificaciones.allCalificaciones
  );
  const distrito = allDistritos.filter(
    (distrito) => walker[0]?.DisCod === distrito.DisCod
  );
  const calificacion = allCalificaciones.filter(
    (calificacion) => walker[0]?.CalCod === calificacion.CalCod
  );

  const likes = calificacion[0]?.CalMeGus;
  const dislikes = calificacion[0]?.CalNoGus;
  const walkerInfo = [
    `${new Date().getFullYear() - walker[0]?.PasFecNacAno} años`,
    distrito[0]?.DisNom,
    walker[0]?.PasCor,
  ];
  const walkerAvailability = {
    lunes: "15:00 - 18:00",
    martes: "15:00 - 18:00",
    miercoles: "14:00 - 17:00",
    jueves: "15:00 - 18:00",
    viernes: "15:00 - 18:00",
    sabado: "12:00 - 1:30",
    domingo: "15:00 - 18:00",
  };
  // const walkerAvailability = undefined;
  const days = [
    "lunes",
    "martes",
    "miercoles",
    "jueves",
    "viernes",
    "sabado",
    "domingo",
  ];
  useEffect(() => {
    dispatch(getWalkerByCodeAsync(id));
  }, []);

  const comments = [
    {
      authorName: "Pedrito",
      qualification: { isLiked: true, isDisliked: false },
      comment: "hola comentario",
    },
    {
      authorName: "Castillo",
      qualification: { isLiked: true, isDisliked: false },
      comment: "hola comentario",
    },
    {
      authorName: "Anthony",
      qualification: { isLiked: true, isDisliked: false },
      comment: "hola comentario",
    },
    {
      authorName: "Hater",
      qualification: { isLiked: false, isDisliked: true },
      comment: "hola comentario malo",
    },
  ];
  const [addingComment, setAddingComment] = useState(false);
  const handleClick = () => {
    setAddingComment(true);
  };
  const [qualification, setQualification] = useState({
    isLiked: false,
    isDisliked: false,
  });
  const [comment, setComment] = useState("");

  const user = { role: "user" };

  const showInfo = () => {
    const info = {
      comment: comment,
      qualification: qualification,
    };
    console.log(info);
  };

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
            <p className="left__description-des">{walker[0]?.PasDes}</p>
          </div>
          <div className="left__buttons">
            <Button variant="contained" className="left__buttons-btn">
              Retroceder
            </Button>
            <Button variant="contained" className="left__buttons-btn">
              Hacer una cita
            </Button>
          </div>
          <div className="left__addCommentSection">
            {user?.role === "user" && (
              <>
                <Button
                  variant="contained"
                  className="left__addCommentSection-addBtn"
                  onClick={handleClick}
                >
                  Añadir nuevo comentario
                </Button>
                {addingComment && (
                  <FormControl className="left__addCommentSection-form">
                    <form
                      onSubmit={(e) => {
                        e.preventDefault();
                        // handleSubmit(e);
                      }}
                    >
                      <Box
                        component="div"
                        sx={{
                          "& .MuiTextField-root": {},
                        }}
                        noValidate
                        autoComplete="off"
                        className="left__addCommentSection-form-container"
                      >
                        <div className="left__addCommentSection-form-container-qualification">
                          <h3 className="left__addCommentSection-form-container-qualification-label">
                            Calificación:
                          </h3>
                          <QualificationComponent
                            value={qualification}
                            qualification={qualification}
                            readOnly={false}
                            onClick={(event, newValue) => {
                              setQualification(newValue);
                            }}
                          ></QualificationComponent>
                        </div>

                        <TextField
                          className="left__addCommentSection-form-container-comment"
                          required
                          multiline
                          rows={4}
                          id="outlined-multiline-static"
                          type="text"
                          label="Añade el comentario aquí"
                          value={comment}
                          onChange={({ target }) => {
                            setComment(target.value);
                          }}
                        />
                        <div className="left__addCommentSection-form-container-btnSection">
                          <Button
                            type="submit"
                            color="success"
                            variant="contained"
                            className="left__addCommentSection-form-container-btnSection-btn"
                            onClick={showInfo}
                          >
                            Guardar cambios
                          </Button>
                          <Button
                            type="button"
                            variant="contained"
                            className="left__addCommentSection-form-container-btnSection-btn"
                            onClick={() => {
                              setAddingComment(false);
                            }}
                          >
                            Cancelar
                          </Button>
                        </div>
                      </Box>
                    </form>
                  </FormControl>
                )}
              </>
            )}
          </div>
          <div className="left__comments">
            {comments.map(({ authorName, qualification, comment }, i) => {
              return (
                <Comment
                  key={i}
                  author={authorName}
                  qualification={qualification}
                  comment={comment}
                />
              );
            })}
          </div>
        </div>
        <div className="right">
          <table className="right__userAvailability">
            <thead>
              <tr>
                <th>Dias disponibles</th>
                <th>Horarios disponibles</th>
              </tr>
            </thead>
            <tbody>
              {walkerAvailability ? (
                days.map((item) => {
                  if (walkerAvailability[item] === "") return <></>;
                  return (
                    <tr>
                      <td>{item}</td>
                      <td>{walkerAvailability[item]}</td>
                    </tr>
                  );
                })
              ) : (
                <tr>
                  <td colSpan={2}>El usuario no tiene horarios disponibles</td>
                </tr>
              )}
            </tbody>
          </table>
          <div className="right__userCalification">
            <div className="right__userCalification-likes">
              <ThumbUpIcon className="right__userCalification-likes-icon" />
              <p>{likes}</p>
              <p>Me gusta</p>
            </div>
            <div className="right__userCalification-dislikes">
              <ThumbDownIcon className="right__userCalification-dislikes-icon" />
              <p>{dislikes}</p>
              <p>No me gusta</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
