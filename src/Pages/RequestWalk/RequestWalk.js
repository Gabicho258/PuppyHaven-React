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
import Select, { SelectChangeEvent } from "@mui/material/Select";
import "./_RequestWalk.scss";

export const RequestWalk = () => {
  const info = {
    walkerName: "Carlo Diaz",
    walkerDistrict: "Jose Luis Bustamante y Rivero",
    walkerEmail: "correo@correo.com",
    walkerAge: 18,
    walkerLikes: 23,
    walkerDislikes: 2,
    userPets: ["Camilo", "Camila", "Alaska", "Alex", "Alura"],
  };
  const [district, setDistrict] = useState("");
  const [reference, setReference] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [walkHours, setWalkHours] = useState(1);
  const [selectedPets, setSelectedPets] = useState([]);

  const showInfo = () => {
    const dateNow = date.split("-");
    const form = {
      distric: district,
      reference: reference,
      date: {
        day: dateNow[2],
        month: dateNow[1],
        year: dateNow[0],
      },
      time: time,
      walkHours: walkHours,
      selectedPets: selectedPets,
    };
    console.log(form);
  };
  return (
    <>
      <NavBar />
      <div className="requestWalkGrid">
        <div className="requestWalkGrid__left">
          <div className="requestWalkGrid__left-walkerInfo">
            <Avatar
              sx={{ bgcolor: "#202124" }}
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
              {info.userPets.map((item) => {
                return (
                  <FormControlLabel
                    control={
                      <Checkbox
                        onClick={({ target }) => {
                          if (selectedPets.some((pet) => pet === item)) {
                            setSelectedPets(
                              selectedPets.filter((pet) => pet !== item)
                            );
                          }
                          selectedPets.push(item);
                        }}
                      />
                    }
                    label={item}
                  />
                );
              })}
            </FormGroup>
          </div>
          <div className="requestWalkGrid__right-btnSection">
            <Button
              variant="contained"
              className="left__buttons-btnrequestWalkGrid__right-btnSection-btn"
              onClick={showInfo}
            >
              Solicitar una cita
            </Button>
            <Button
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
