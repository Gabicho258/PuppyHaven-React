import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { StyledEngineProvider } from "@mui/material/styles";
import reportWebVitals from "./reportWebVitals";
// import Counter from "./Counter";
import { NavBar } from "./Components/NavBar/NavBar";
import { UserRegister } from "./Pages/UserRegister/UserRegister";

import { WalkerProfile } from "./Pages/WalkerProfile/WalkerProfile";
import { UserLogin } from "./Pages/UserLogin/UserLogin";
import { GiveUpPetAdoption } from "./Pages/GiveUpPetAdoption/GiveUpPetAdoption";

import { HomePageUser } from "./Pages/HomePageUser/HomePageUser";
import { WalkerCard } from "./Components/WalkerCard/WalkerCard";
import { PetCard } from "./Components/PetCard/PetCard";
import { HomeAdoptPet } from "./Pages/HomeAdoptPet/HomeAdoptPet";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {
      <StyledEngineProvider injectFirst>
        <GiveUpPetAdoption />
      </StyledEngineProvider>
    }
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
