import React, { useEffect, useState } from "react";
import { NavBar } from "../../Components/NavBar/NavBar";
import { Typography } from "@mui/material";

import "./_HomePageUser.scss";
import { WalkerCard } from "../../Components/WalkerCard/WalkerCard";
import { useDispatch, useSelector } from "react-redux";
import { getAllWalkersAsync } from "../../slices/paseadores.slice";
export const HomePageUser = () => {
  const dispatch = useDispatch();
  //   ============================

  const walkers = useSelector(
    (state) => state.paseadores.allWalkers
  ).paseadores;
  console.log(walkers);
  useEffect(() => {
    dispatch(getAllWalkersAsync());
  }, []);
  if (walkers === undefined) {
    return (
      <>
        <NavBar />
        <div className="walkersContainer">
          <h1>Cargando información de los paseadores...</h1>
        </div>
      </>
    );
  }
  return (
    <>
      <NavBar />
      <div className="walkersContainer">
        <div className="walkersContainer__title">
          <Typography variant="h4">Paseadores</Typography>
        </div>

        <div className="walkersContainer__cards">
          {walkers?.map((walker) => (
            <WalkerCard
              key={walker.id}
              userName={walker.nombre}
              userDesc={walker.descripcion}
              image={walker.fotoUrl}
              id={walker.id}
            />
          ))}
        </div>
      </div>
    </>
  );
};
