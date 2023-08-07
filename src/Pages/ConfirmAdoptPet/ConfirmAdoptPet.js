import React, { useState } from "react";
import { NavBar } from "../../Components/NavBar/NavBar";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import "./_ConfirmAdoptPet.scss";

export const ConfirmAdoptPet = () => {
  const info = {
    petRace: "Raza",
    petAge: "Edad",
    petColor: "Color",
    date: new Date(Date.now()).toLocaleDateString(),
    userName: "Edson",
    userDistrict: "Jose Luis Bustamante y Rivero",
    userEmail: "correo@correo.com",
  };

  const showInfo = () => {
    console.log(info);
  };

  return (
    <>
      <NavBar />
      <div className="confirmAdoptPetContainer">
        <h1 className="confirmAdoptPetContainer__title">Tramite de Adopción</h1>
        <div className="confirmAdoptPetContainer__grid">
          <Avatar
            sx={{ bgcolor: "#202124" }}
            variant="rounded"
            className="confirmAdoptPetContainer__grid-avatar"
          >
            M
          </Avatar>
          <DoubleArrowIcon className="confirmAdoptPetContainer__grid-doubleArrow" />
          <Avatar
            sx={{ bgcolor: "#202124" }}
            variant="rounded"
            className="confirmAdoptPetContainer__grid-avatar"
          >
            {info.userName}
          </Avatar>
          <div className="confirmAdoptPetContainer__grid-info">
            <p className="confirmAdoptPetContainer__grid-info-item">
              {info.petRace}
            </p>
            <p className="confirmAdoptPetContainer__grid-info-item">
              {info.petAge}
            </p>
            <p className="confirmAdoptPetContainer__grid-info-item">
              {info.petColor}
            </p>
          </div>
          <div className="confirmAdoptPetContainer__grid-date">
            <h3 className="confirmAdoptPetContainer__grid-date-label">
              Fecha:
            </h3>
            <div className="confirmAdoptPetContainer__grid-date-now">
              {info.date}
            </div>
          </div>
          <div className="confirmAdoptPetContainer__grid-info">
            <p className="confirmAdoptPetContainer__grid-info-item">
              {info.userName}
            </p>
            <p className="confirmAdoptPetContainer__grid-info-item">
              {info.userDistrict}
            </p>
            <p className="confirmAdoptPetContainer__grid-info-item">
              {info.userEmail}
            </p>
          </div>
        </div>
        <div className="confirmAdoptPetContainer__btnContainer">
          <Button
            className="confirmAdoptPetContainer__btnContainer-btn"
            variant="contained"
            onClick={showInfo}
          >
            Adoptar
          </Button>
        </div>
      </div>
    </>
  );
};
