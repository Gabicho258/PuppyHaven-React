import React, { useEffect, useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import { NavBar } from "../../Components/NavBar/NavBar";
import "./_WalkerProfileAccount.scss";
import { useDispatch, useSelector } from "react-redux";

export const WalkerProfileAccount = () => {
  const walkerSession = JSON.parse(sessionStorage.getItem("infoUser"));
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

  // const distrito = useSelector((state) => state.distritos.distrito);
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
    // handleInit();
    console.log(walkerInfo);
  }, []);
  const [isEditing, setIsEditing] = useState(false);
  const handleClick = () => {
    setIsEditing(true);
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
            {isEditing ? (
              <>
                <div className="left__description-edit">
                  <textarea className="left__description-edit-textarea"></textarea>
                  <div className="left__description-edit-btnSection">
                    <Button
                      type="submit"
                      color="success"
                      variant="contained"
                      className="left__description-edit-btnSection-btn"
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
