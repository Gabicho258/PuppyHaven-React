import React, { useEffect } from "react";
import { NavBar } from "../../Components/NavBar/NavBar";
import { Typography } from "@mui/material";
import { PetCard } from "../../Components/PetCard/PetCard";

import "./_HomeAdoptPet.scss";
import { useDispatch, useSelector } from "react-redux";
import { getAllMascotasAsync } from "../../slices/mascotas.slice";

export const HomeAdoptPet = () => {
  const dispatch = useDispatch();
  const mascotas = useSelector((state) => state.mascotas.allMascotas).mascotas;

  const pets = mascotas?.filter((mascota) => mascota.paraAdopcion === true);
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
          {pets?.map(({ id, nombre, fotoUrl, raza }) => (
            <PetCard
              key={id}
              petCod={id}
              petName={nombre}
              petImageURL={fotoUrl}
              petBreed={raza}
            />
          ))}
        </div>
      </div>
    </>
  );
};
