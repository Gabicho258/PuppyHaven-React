import React, { useState } from "react";
import { NavBar } from "../../Components/NavBar/NavBar";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import TextField from "@mui/material/TextField";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import "./_RequestWalk.scss";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getWalkerByCodeAsync } from "../../slices/paseadores.slice";
import { useNavigate, useParams } from "react-router-dom";
import { getMascotasByUserCodeAsync } from "../../slices/mascotas.slice";
import { createPaseoAsync } from "../../slices/paseos.slice";

export const RequestWalk = () => {
  const { id } = useParams();
  const userSession = JSON.parse(sessionStorage.getItem("infoUser"));
  const [district, setDistrict] = useState("");
  const [reference, setReference] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [walkHours, setWalkHours] = useState(1);
  const [selectedPets, setSelectedPets] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const walker = useSelector((state) => state.paseadores.walker);
  const allDistritos = useSelector((state) => state.distritos.allDistritos);
  const mascotas = useSelector((state) => state.mascotas.mascotas);
  const misMascotas = mascotas.filter((mascota) => mascota.MasIsToAdo === 0);

  const allCalificaciones = useSelector(
    (state) => state.calificaciones.allCalificaciones
  );
  const distrito = allDistritos.filter(
    (distrito) => walker[0]?.distritoId === distrito.id
  );
  const calificacion = allCalificaciones.filter(
    (calificacion) => walker[0]?.CalCod === calificacion.CalCod
  );
  const likes = calificacion[0]?.CalMeGus;
  const dislikes = calificacion[0]?.CalNoGus;
  const info = {
    walkerName: walker[0]?.PasNom,
    walkerDistrict: distrito[0]?.DisNom,
    walkerEmail: walker[0]?.PasCor,
    walkerAge: new Date().getFullYear() - walker[0]?.PasFecNacAno,
    walkerLikes: likes,
    walkerDislikes: dislikes,
    userPets: misMascotas,
  };
  const handleRequestWalk = async () => {
    const dateNow = date.split("-");
    const paseo = {
      pasCod: id,
      usuCod: userSession.id,
      pasDis: district,
      pasDir: reference,
      pasFecAno: dateNow[0],
      pasFecMes: dateNow[1],
      pasFecDia: dateNow[2],
      pasHor: time,
      pasCanHor: walkHours,
      pasEst: "P",
      mascotas: selectedPets.map((pet) => pet.MasCod),
    };
    console.log(paseo);
    await dispatch(createPaseoAsync(paseo));
    navigate("/my-walks");
  };
  useEffect(() => {
    dispatch(getMascotasByUserCodeAsync(userSession.id));

    dispatch(getWalkerByCodeAsync(id));
  }, []);
  return (
    <>
      <NavBar />
      <div className="requestWalkGrid">
        <div className="requestWalkGrid__left">
          <div className="requestWalkGrid__left-walkerInfo">
            <Avatar
              sx={{ bgcolor: "#202124" }}
              src={walker[0]?.PasFotURL}
              variant="rounded"
              className="requestWalkGrid__left-walkerInfo-avatar"
            >
              {info.walkerName}
            </Avatar>
            <div className="requestWalkGrid__left-walkerInfo-info">
              <h2 className="requestWalkGrid__left-walkerInfo-info-name">
                {info.walkerName}
              </h2>
              <ul className="requestWalkGrid__left-walkerInfo-info-list">
                <li>{info.walkerAge} años</li>
                <li>{info.walkerDistrict}</li>
                <li>{info.walkerEmail}</li>
              </ul>
            </div>
          </div>
          <hr className="requestWalkGrid__left-divider" />
          <div className="requestWalkGrid__left-walkForm">
            <div className="requestWalkGrid__left-walkForm-item">
              <label className="requestWalkGrid__left-walkForm-item-label">
                Distrito:
              </label>
              <TextField
                className="requestWalkGrid__left-walkForm-item-field"
                value={district}
                onChange={({ target }) => {
                  setDistrict(target.value);
                }}
                inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
                type="text"
              />
            </div>
            <div className="requestWalkGrid__left-walkForm-item">
              <label className="requestWalkGrid__left-walkForm-item-label">
                Referencia:
              </label>
              <TextField
                className="requestWalkGrid__left-walkForm-item-field"
                value={reference}
                onChange={({ target }) => {
                  setReference(target.value);
                }}
                inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
                type="text"
              />
            </div>
            <div className="requestWalkGrid__left-walkForm-item">
              <label className="requestWalkGrid__left-walkForm-item-label">
                Fecha del paseo:
              </label>
              <TextField
                className="requestWalkGrid__left-walkForm-item-field"
                value={date}
                onInput={({ target }) => {
                  console.log(target.value);
                  setDate(target.value);
                }}
                inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
                type="date"
              />
            </div>
            <div className="requestWalkGrid__left-walkForm-item">
              <label className="requestWalkGrid__left-walkForm-item-label">
                Hora del paseo:
              </label>
              <TextField
                className="requestWalkGrid__left-walkForm-item-field"
                value={time}
                onChange={({ target }) => {
                  setTime(target.value);
                }}
                inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
                type="time"
              />
            </div>
            <div className="requestWalkGrid__left-walkForm-itemSelect">
              <FormControl className="requestWalkGrid__left-walkForm-itemSelect-select">
                <InputLabel id="walkHours">Cantidad de horas:</InputLabel>
                <Select
                  labelId="walkHours"
                  id="walkHours"
                  value={walkHours}
                  label="Cantidad de horas"
                  onChange={({ target }) => {
                    setWalkHours(target.value);
                  }}
                >
                  <MenuItem value={1}>1 hora</MenuItem>
                  <MenuItem value={2}>2 horas</MenuItem>
                  <MenuItem value={3}>3 horas</MenuItem>
                </Select>
              </FormControl>
            </div>
          </div>
        </div>
        <div className="requestWalkGrid__right">
          <div className="requestWalkGrid__right-walkerQualification">
            <div className="requestWalkGrid__right-walkerQualification-item">
              <ThumbUpIcon className="requestWalkGrid__right-walkerQualification-item-iconLikes" />
              <p className="requestWalkGrid__right-walkerQualification-item-num">
                {info.walkerLikes}
              </p>
              <p className="requestWalkGrid__right-walkerQualification-item-num">
                Me gusta
              </p>
            </div>
            <div className="requestWalkGrid__right-walkerQualification-item">
              <ThumbDownIcon className="requestWalkGrid__right-walkerQualification-item-iconDislikes" />
              <p className="requestWalkGrid__right-walkerQualification-item-num">
                {info.walkerDislikes}
              </p>
              <p className="requestWalkGrid__right-walkerQualification-item-num">
                No me gusta
              </p>
            </div>
          </div>
          <div className="requestWalkGrid__right-selectPet">
            <label className="requestWalkGrid__right-selectPet-label">
              Seleccionar mascota:
            </label>
            <FormGroup className="requestWalkGrid__right-selectPet-form">
              {info.userPets.map((mascota) => {
                return (
                  <FormControlLabel
                    control={
                      <Checkbox
                        onClick={({ target }) => {
                          if (
                            selectedPets.some(
                              (pet) => pet.MasNom === mascota.MasNom
                            )
                          ) {
                            setSelectedPets(
                              selectedPets.filter(
                                (pet) => pet.MasNom !== mascota.MasNom
                              )
                            );
                          }
                          selectedPets.push(mascota);
                        }}
                      />
                    }
                    label={mascota.MasNom}
                  />
                );
              })}
            </FormGroup>
          </div>
          <div className="requestWalkGrid__right-btnSection">
            <Button
              variant="contained"
              className="left__buttons-btnrequestWalkGrid__right-btnSection-btn"
              onClick={handleRequestWalk}
            >
              Solicitar una cita
            </Button>
            <Button
              onClick={() => navigate(`/walker-profile/${id}`)}
              variant="contained"
              className="left__buttons-btnrequestWalkGrid__right-btnSection-btn"
            >
              Atras
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};
