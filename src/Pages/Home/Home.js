import React from "react";
import { NavBar } from "../../Components/NavBar/NavBar";
import PetsIcon from "@mui/icons-material/Pets";

import "./_Home.scss";

export const Home = () => {
  const housedPetsNum = 45;
  const adoptions = 51;
  const walkersNum = 20;
  const walksNum = 132;
  return (
    <>
      <NavBar />
      <section className="mainSection">
        <div className="logo">
          <PetsIcon className="logo__icon" />
        </div>
        <div className="phrase">
          <p className="phrase__content">
            Mejorar el bienestar de los animales, y acabar con la crueldad y la
            negligencia hacia ellos, con la cría descontrolada y el abandono de
            los mismos a través de rescates, rehabilitación y tratamiento
            veterinario.
          </p>
        </div>
        <div className="stats">
          <div className="stats__housedPets">
            <div>{housedPetsNum}</div>
            <div>Mascotas Albergadas</div>
          </div>
          <div className="stats__adoptions">
            <div>{adoptions}</div>
            <div>Adopciones</div>
          </div>
          <div className="stats__walkers">
            <div>{walkersNum}</div>
            <div>Paseadores</div>
          </div>
          <div className="stats__walks">
            <div>{walksNum}</div>
            <div>Paseos</div>
          </div>
        </div>
      </section>
    </>
  );
};
