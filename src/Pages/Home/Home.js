import React, { useEffect } from "react";
import { NavBar } from "../../Components/NavBar/NavBar";
import PetsIcon from "@mui/icons-material/Pets";

import "./_Home.scss";
import { useDispatch, useSelector } from "react-redux";
import { getAllMascotasAsync } from "../../slices/mascotas.slice";
import { getAllTramitesAsync } from "../../slices/tramites.slice";
import { getAllWalkersAsync } from "../../slices/paseadores.slice";
import { getAllPaseosAsync } from "../../slices/paseos.slice";

export const Home = () => {
  const dispatch = useDispatch();
  const mascotas = useSelector((state) => state.mascotas.allMascotas);
  const tramites = useSelector((state) => state.tramites.allTramites);
  const paseadores = useSelector((state) => state.paseadores.allWalkers);
  const paseos = useSelector((state) => state.paseos.allPaseos);
  const housedPetsNum = mascotas.filter(
    ({ MasIsToAdo }) => MasIsToAdo === 1
  ).length;
  const adoptions = tramites.length;
  const walkersNum = paseadores.length;
  const walksNum = paseos.length;
  useEffect(() => {
    dispatch(getAllMascotasAsync());
    dispatch(getAllTramitesAsync());
    dispatch(getAllWalkersAsync());
    dispatch(getAllPaseosAsync());
  }, []);
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
