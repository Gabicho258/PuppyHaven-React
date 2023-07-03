import React from "react";
import { NavBar } from "../../Components/NavBar/NavBar";
import { Typography } from "@mui/material";
import { PetCard } from "../../Components/PetCard/PetCard";

import "./_HomeAdoptPet.scss";

export const HomeAdoptPet = () => {
  const pets = [
    {
      petName: "Tu perrito fiu fiu",
      petImageURL:
        "https://static.fundacion-affinity.org/cdn/farfuture/PVbbIC-0M9y4fPbbCsdvAD8bcjjtbFc0NSP3lRwlWcE/mtime:1643275542/sites/default/files/los-10-sonidos-principales-del-perro.jpg",
      petBreed: "Golden Dog",
    },
    {
      petName: "Tu perrito fiu fiu",
      petImageURL:
        "https://static.fundacion-affinity.org/cdn/farfuture/PVbbIC-0M9y4fPbbCsdvAD8bcjjtbFc0NSP3lRwlWcE/mtime:1643275542/sites/default/files/los-10-sonidos-principales-del-perro.jpg",
      petBreed: "Golden Dog",
    },
    {
      petName: "Tu perrito fiu fiu",
      petImageURL:
        "https://static.fundacion-affinity.org/cdn/farfuture/PVbbIC-0M9y4fPbbCsdvAD8bcjjtbFc0NSP3lRwlWcE/mtime:1643275542/sites/default/files/los-10-sonidos-principales-del-perro.jpg",
      petBreed: "Golden Dog",
    },
    {
      petName: "Tu perrito fiu fiu",
      petImageURL:
        "https://static.fundacion-affinity.org/cdn/farfuture/PVbbIC-0M9y4fPbbCsdvAD8bcjjtbFc0NSP3lRwlWcE/mtime:1643275542/sites/default/files/los-10-sonidos-principales-del-perro.jpg",
      petBreed: "Golden Dog",
    },
    {
      petName: "Tu perrito fiu fiu",
      petImageURL:
        "https://static.fundacion-affinity.org/cdn/farfuture/PVbbIC-0M9y4fPbbCsdvAD8bcjjtbFc0NSP3lRwlWcE/mtime:1643275542/sites/default/files/los-10-sonidos-principales-del-perro.jpg",
      petBreed: "Golden Dog",
    },
    {
      petName: "Tu perrito fiu fiu",
      petImageURL:
        "https://static.fundacion-affinity.org/cdn/farfuture/PVbbIC-0M9y4fPbbCsdvAD8bcjjtbFc0NSP3lRwlWcE/mtime:1643275542/sites/default/files/los-10-sonidos-principales-del-perro.jpg",
      petBreed: "Golden Dog",
    },
    {
      petName: "Tu perrito fiu fiu",
      petImageURL:
        "https://static.fundacion-affinity.org/cdn/farfuture/PVbbIC-0M9y4fPbbCsdvAD8bcjjtbFc0NSP3lRwlWcE/mtime:1643275542/sites/default/files/los-10-sonidos-principales-del-perro.jpg",
      petBreed: "Golden Dog",
    },
    {
      petName: "Tu perrito fiu fiu",
      petImageURL:
        "https://static.fundacion-affinity.org/cdn/farfuture/PVbbIC-0M9y4fPbbCsdvAD8bcjjtbFc0NSP3lRwlWcE/mtime:1643275542/sites/default/files/los-10-sonidos-principales-del-perro.jpg",
      petBreed: "Golden Dog",
    },
    {
      petName: "Tu perrito fiu fiu",
      petImageURL:
        "https://static.fundacion-affinity.org/cdn/farfuture/PVbbIC-0M9y4fPbbCsdvAD8bcjjtbFc0NSP3lRwlWcE/mtime:1643275542/sites/default/files/los-10-sonidos-principales-del-perro.jpg",
      petBreed: "Golden Dog",
    },
    {
      petName: "Tu perrito fiu fiu",
      petImageURL:
        "https://static.fundacion-affinity.org/cdn/farfuture/PVbbIC-0M9y4fPbbCsdvAD8bcjjtbFc0NSP3lRwlWcE/mtime:1643275542/sites/default/files/los-10-sonidos-principales-del-perro.jpg",
      petBreed: "Golden Dog",
    },
    {
      petName: "Tu perrito fiu fiu",
      petImageURL:
        "https://static.fundacion-affinity.org/cdn/farfuture/PVbbIC-0M9y4fPbbCsdvAD8bcjjtbFc0NSP3lRwlWcE/mtime:1643275542/sites/default/files/los-10-sonidos-principales-del-perro.jpg",
      petBreed: "Golden Dog",
    },
    {
      petName: "Tu perrito fiu fiu",
      petImageURL:
        "https://static.fundacion-affinity.org/cdn/farfuture/PVbbIC-0M9y4fPbbCsdvAD8bcjjtbFc0NSP3lRwlWcE/mtime:1643275542/sites/default/files/los-10-sonidos-principales-del-perro.jpg",
      petBreed: "Golden Dog",
    },
    {
      petName: "Tu perrito fiu fiu",
      petImageURL:
        "https://static.fundacion-affinity.org/cdn/farfuture/PVbbIC-0M9y4fPbbCsdvAD8bcjjtbFc0NSP3lRwlWcE/mtime:1643275542/sites/default/files/los-10-sonidos-principales-del-perro.jpg",
      petBreed: "Golden Dog",
    },
    {
      petName: "Tu perrito fiu fiu",
      petImageURL:
        "https://static.fundacion-affinity.org/cdn/farfuture/PVbbIC-0M9y4fPbbCsdvAD8bcjjtbFc0NSP3lRwlWcE/mtime:1643275542/sites/default/files/los-10-sonidos-principales-del-perro.jpg",
      petBreed: "Golden Dog",
    },
    {
      petName: "Tu perrito fiu fiu",
      petImageURL:
        "https://static.fundacion-affinity.org/cdn/farfuture/PVbbIC-0M9y4fPbbCsdvAD8bcjjtbFc0NSP3lRwlWcE/mtime:1643275542/sites/default/files/los-10-sonidos-principales-del-perro.jpg",
      petBreed: "Golden Dog",
    },
    {
      petName: "Tu perrito fiu fiu",
      petImageURL:
        "https://static.fundacion-affinity.org/cdn/farfuture/PVbbIC-0M9y4fPbbCsdvAD8bcjjtbFc0NSP3lRwlWcE/mtime:1643275542/sites/default/files/los-10-sonidos-principales-del-perro.jpg",
      petBreed: "Golden Dog",
    },
    {
      petName: "Tu perrito fiu fiu",
      petImageURL:
        "https://static.fundacion-affinity.org/cdn/farfuture/PVbbIC-0M9y4fPbbCsdvAD8bcjjtbFc0NSP3lRwlWcE/mtime:1643275542/sites/default/files/los-10-sonidos-principales-del-perro.jpg",
      petBreed: "Golden Dog",
    },
    {
      petName: "Tu perrito fiu fiu",
      petImageURL:
        "https://static.fundacion-affinity.org/cdn/farfuture/PVbbIC-0M9y4fPbbCsdvAD8bcjjtbFc0NSP3lRwlWcE/mtime:1643275542/sites/default/files/los-10-sonidos-principales-del-perro.jpg",
      petBreed: "Golden Dog",
    },
    {
      petName: "Tu perrito fiu fiu",
      petImageURL:
        "https://static.fundacion-affinity.org/cdn/farfuture/PVbbIC-0M9y4fPbbCsdvAD8bcjjtbFc0NSP3lRwlWcE/mtime:1643275542/sites/default/files/los-10-sonidos-principales-del-perro.jpg",
      petBreed: "Golden Dog",
    },
    {
      petName: "Tu perrito fiu fiu",
      petImageURL:
        "https://static.fundacion-affinity.org/cdn/farfuture/PVbbIC-0M9y4fPbbCsdvAD8bcjjtbFc0NSP3lRwlWcE/mtime:1643275542/sites/default/files/los-10-sonidos-principales-del-perro.jpg",
      petBreed: "Golden Dog",
    },
    {
      petName: "Tu perrito fiu fiu",
      petImageURL:
        "https://static.fundacion-affinity.org/cdn/farfuture/PVbbIC-0M9y4fPbbCsdvAD8bcjjtbFc0NSP3lRwlWcE/mtime:1643275542/sites/default/files/los-10-sonidos-principales-del-perro.jpg",
      petBreed: "Golden Dog",
    },
    {
      petName: "Tu perrito fiu fiu",
      petImageURL:
        "https://static.fundacion-affinity.org/cdn/farfuture/PVbbIC-0M9y4fPbbCsdvAD8bcjjtbFc0NSP3lRwlWcE/mtime:1643275542/sites/default/files/los-10-sonidos-principales-del-perro.jpg",
      petBreed: "Golden Dog",
    },
    {
      petName: "Tu perrito fiu fiu",
      petImageURL:
        "https://static.fundacion-affinity.org/cdn/farfuture/PVbbIC-0M9y4fPbbCsdvAD8bcjjtbFc0NSP3lRwlWcE/mtime:1643275542/sites/default/files/los-10-sonidos-principales-del-perro.jpg",
      petBreed: "Golden Dog",
    },
  ];
  return (
    <>
      <NavBar />
      <div className="adoptContainer">
        <div className="adoptContainer__title">
          <Typography variant="h4">¡Adopta!</Typography>
        </div>

        <div className="adoptContainer__cards">
          {pets.map(({ petName, petImageURL, petBreed }) => (
            <PetCard
              petName={petName}
              petImageURL={petImageURL}
              petBreed={petBreed}
            />
          ))}
        </div>
      </div>
    </>
  );
};
