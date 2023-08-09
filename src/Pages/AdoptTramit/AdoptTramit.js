import React from "react";
import { NavBar } from "../../Components/NavBar/NavBar";
import Avatar from "@mui/material/Avatar";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import "./_AdoptTramit.scss";

export const AdoptTramit = () => {
  const today = new Date(Date.now());
  const tramits = [
    {
      TraCod: 1234,
      TraUsuNomAdo: "Carlos",
      TraUsuNomDue: "Gabriel",
      MasNom: "Firulais",
      MasRaz: "Golden",
      MasCol: "Amarillo",
      MasEda: 3,
      TraEst: "Pendiente",
      TraFecAno: today.getFullYear(),
      TraFecMes: today.getMonth() + 1,
      TraFecDia: today.getDay(),
    },
    {
      TraCod: 1234,
      TraUsuNomAdo: "Carlos",
      TraUsuNomDue: "Gabriel",
      MasNom: "Firulais",
      MasRaz: "Golden",
      MasCol: "Amarillo",
      MasEda: 3,
      TraEst: "Pendiente",
      TraFecAno: today.getFullYear(),
      TraFecMes: today.getMonth() + 1,
      TraFecDia: today.getDay(),
    },
    {
      TraCod: 1234,
      TraUsuNomAdo: "Carlos",
      TraUsuNomDue: "Gabriel",
      MasNom: "Firulais",
      MasRaz: "Golden",
      MasCol: "Amarillo",
      MasEda: 3,
      TraEst: "Pendiente",
      TraFecAno: today.getFullYear(),
      TraFecMes: today.getMonth() + 1,
      TraFecDia: today.getDay(),
    },
  ];
  return (
    <>
      <NavBar />
      <div className="adoptTramitList">
        {tramits ? (
          <>
            {tramits.map((tramit) => {
              return (
                <div className="adoptTramitList__item">
                  <div className="adoptTramitList__item-code">
                    Código de trámite: {tramit.TraCod}
                  </div>
                  <div className="adoptTramitList__item-grid">
                    <div className="adoptTramitList__item-grid-gridItem">
                      <Avatar
                        sx={{ bgcolor: "#202124" }}
                        variant="rounded"
                        className="adoptTramitList__item-grid-gridItem-avatar"
                        alt={tramit.TraUsuNomDue}
                      >
                        {tramit.TraUsuNomDue}
                      </Avatar>
                      <div className="adoptTramitList__item-grid-gridItem-name">
                        {tramit.TraUsuNomDue}
                      </div>
                    </div>
                    <DoubleArrowIcon className="adoptTramitList__item-grid-doubleArrow" />
                    <div className="adoptTramitList__item-grid-gridItem">
                      <Avatar
                        sx={{ bgcolor: "#202124" }}
                        variant="rounded"
                        className="adoptTramitList__item-grid-gridItem-avatar"
                        alt={tramit.MasNom}
                      >
                        {tramit.MasNom}
                      </Avatar>
                      <div className="adoptTramitList__item-grid-gridItem-info">
                        <div className="adoptTramitList__item-grid-gridItem-info-name">
                          {tramit.MasNom}
                        </div>
                        <div className="adoptTramitList__item-grid-gridItem-info-description">
                          <ul className="adoptTramitList__item-grid-gridItem-info-description-list">
                            <li className="adoptTramitList__item-grid-gridItem-info-description-list-item">
                              Color: {tramit.MasCol}
                            </li>
                            <li className="adoptTramitList__item-grid-gridItem-info-description-list-item">
                              Raza: {tramit.MasRaz}
                            </li>
                            <li className="adoptTramitList__item-grid-gridItem-info-description-list-item">
                              Edad: {tramit.MasEda}
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <DoubleArrowIcon className="adoptTramitList__item-grid-doubleArrow" />
                    <div className="adoptTramitList__item-grid-gridItem">
                      <Avatar
                        sx={{ bgcolor: "#202124" }}
                        variant="rounded"
                        className="adoptTramitList__item-grid-gridItem-avatar"
                        alt={tramit.TraUsuNomAdo}
                      >
                        {tramit.TraUsuNomAdo}
                      </Avatar>
                      <div className="adoptTramitList__item-grid-gridItem-name">
                        {tramit.TraUsuNomAdo}
                      </div>
                    </div>
                  </div>
                  <div className="adoptTramitList__item-status">
                    <div className="adoptTramitList__item-status-content">
                      {tramit.TraEst}
                    </div>
                  </div>
                  <div className="adoptTramitList__item-date">
                    {tramit.TraFecDia}/{tramit.TraFecMes}/{tramit.TraFecAno}
                  </div>
                </div>
              );
            })}
          </>
        ) : (
          <>
            <h1 className="adoptTramitList__empty">
              No hay trámites para mostrar
            </h1>
          </>
        )}
      </div>
    </>
  );
};
