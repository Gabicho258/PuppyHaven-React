import React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import { NavBar } from "../../Components/NavBar/NavBar";
import { PetCard } from "../../Components/PetCard/PetCard";
import { Link, useNavigate } from "react-router-dom";
import "./_UserProfile.scss";

export const UserProfile = () => {
  const name = "Gabriel Steven Machicao Quispe";
  const walkerInfo = [18, "Estudiante", "Jose Luis Bustamante y Rivero"];
  const navigate = useNavigate();
  // const walkerAvailability = undefined;

  return (
    <>
      <NavBar />
      <div className="section-p">
        <div className="left">
          <div className="left__user">
            <Avatar
              className="left__user-avatar"
              alt={name}
              src="/static/images/avatar/1.jpg"
              variant="rounded"
              sx={{ width: 200, height: 200 }}
            />
            <div className="left__user-info">
              <h3 className="left__user-info-name">{name}</h3>
              <ul className="left__user-info-list">
                {walkerInfo.map((item) => (
                  <li>{item}</li>
                ))}
              </ul>
            </div>
          </div>
          <hr className="left__divider"></hr>

          <div className="left__buttons">
            <Button variant="contained" className="left__buttons-btn">
              Editar perfil
            </Button>
            <Button
              variant="contained"
              className="left__buttons-btn"
              onClick={() => navigate("/add-pet")}
            >
              Añadir mascota
            </Button>
          </div>
        </div>
      </div>

      <div className="section-pets">
        <h3 className="pets-title">Mis mascotas</h3>
        <div className="pets">
          <PetCard />
          <PetCard />
          <PetCard />
        </div>
      </div>
    </>
  );
};
