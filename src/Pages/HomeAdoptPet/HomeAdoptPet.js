import React, { useEffect } from "react";
import { NavBar } from "../../Components/NavBar/NavBar";
import { Typography } from "@mui/material";
import { PetCard } from "../../Components/PetCard/PetCard";

import "./_HomeAdoptPet.scss";
import { useDispatch, useSelector } from "react-redux";
import { getAllMascotasAsync } from "../../slices/mascotas.slice";

export const HomeAdoptPet = () => {
  const dispatch = useDispatch();
  const mascotas = useSelector((state) => state.mascotas.allMascotas);
  const pets = mascotas.filter((mascota) => mascota.MasIsToAdo === 1);
  console.log(mascotas);
  useEffect(() => {
    dispatch(getAllMascotasAsync());
  }, []);
  return (
    <>
      <NavBar />
      <div className="adoptContainer">
        <div className="adoptContainer__title">
          <Typography variant="h4">¡Adopta!</Typography>
        </div>

        <div className="adoptContainer__cards">
          {pets.map(({ MasNom, MasFotURL, MasRaz }) => (
            <PetCard
              petName={MasNom}
              petImageURL={MasFotURL}
              petBreed={MasRaz}
            />
          ))}
        </div>
      </div>
    </>
  );
};
