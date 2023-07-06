import React, { useState } from "react";
import { NavBar } from "../../Components/NavBar/NavBar";
import { Typography } from "@mui/material";

import "./_HomePageUser.scss";
import { WalkerCard } from "../../Components/WalkerCard/WalkerCard";
export const HomePageUser = () => {
  //   ============================
  const walkers = [
    {
      userName: "Gabriel Antony",
      userDesc:
        "Soy un amante por los animales, disfruto el tiempo que paso con ellos y se me da bien cuidarlos",
    },
    {
      userName: "Gabriel Antony",
      userDesc:
        "Soy un amante por los animales, disfruto el tiempo que paso con ellos y se me da bien cuidarlos",
    },
    {
      userName: "Gabriel Antony",
      userDesc:
        "Soy un amante por los animales, disfruto el tiempo que paso con ellos y se me da bien cuidarlos",
    },
    {
      userName: "Gabriel Antony",
      userDesc:
        "Soy un amante por los animales, disfruto el tiempo que paso con ellos y se me da bien cuidarlos",
    },
    {
      userName: "Gabriel Antony",
      userDesc:
        "Soy un amante por los animales, disfruto el tiempo que paso con ellos y se me da bien cuidarlos",
    },
    {
      userName: "Gabriel Antony",
      userDesc:
        "Soy un amante por los animales, disfruto el tiempo que paso con ellos y se me da bien cuidarlos",
    },
    {
      userName: "Gabriel Antony",
      userDesc:
        "Soy un amante por los animales, disfruto el tiempo que paso con ellos y se me da bien cuidarlos",
    },
    {
      userName: "Gabriel Antony",
      userDesc:
        "Soy un amante por los animales, disfruto el tiempo que paso con ellos y se me da bien cuidarlos",
    },
    {
      userName: "Gabriel Antony",
      userDesc:
        "Soy un amante por los animales, disfruto el tiempo que paso con ellos y se me da bien cuidarlos",
    },
    {
      userName: "Gabriel Antony",
      userDesc:
        "Soy un amante por los animales, disfruto el tiempo que paso con ellos y se me da bien cuidarlos",
    },
  ];
  return (
    <>
      <NavBar />
      <div className="walkersContainer">
        <div className="walkersContainer__title">
          <Typography variant="h4">Paseadores</Typography>
        </div>

        <div className="walkersContainer__cards">
          {walkers.map((walker) => (
            <WalkerCard userName={walker.userName} userDesc={walker.userDesc} />
          ))}
        </div>
      </div>
    </>
  );
};
