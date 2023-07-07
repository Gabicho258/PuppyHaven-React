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
  const walkers = useSelector((state) => state.paseadores.allWalkers);
  console.log(walkers);
  useEffect(() => {
    dispatch(getAllWalkersAsync());
  }, []);
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
              userName={walker.PasNom}
              userDesc={walker.PasDes}
              image={walker.PasFotURL}
              id={walker.PasCod}
            />
          ))}
        </div>
      </div>
    </>
  );
};
