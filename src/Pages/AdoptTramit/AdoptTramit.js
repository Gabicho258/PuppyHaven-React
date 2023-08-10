import React, { useEffect } from "react";
import { NavBar } from "../../Components/NavBar/NavBar";
import Avatar from "@mui/material/Avatar";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import "./_AdoptTramit.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  getTramitesByUserAdopterCodeAsync,
  updateTramiteAsync,
} from "../../slices/tramites.slice";
import { updateMascotaAsync } from "../../slices/mascotas.slice";

export const AdoptTramit = () => {
  const userSession = JSON.parse(sessionStorage.getItem("infoUser"));
  const dispatch = useDispatch();
  const tramites = useSelector((state) => state.tramites.tramites);
  const user = useSelector((state) => state.usuarios.user);
  console.log(tramites);
  console.log(user);
  const handleChangeState = async (
    cod,
    newUsuCod,
    { MasCod, MasNom, MasCol, MasRaz, MasEda, MasFotURL, MasDes }
  ) => {
    const mascota = {
      masCod: MasCod,
      masNom: MasNom,
      masCol: MasCol,
      masRaz: MasRaz,
      masEda: MasEda,
      masFotURL: MasFotURL,
      masDes: MasDes,
      masIsToAdo: false,
      masUsuCod: newUsuCod,
    };
    await dispatch(updateTramiteAsync({ traCod: cod, traEst: "R" }));
    await dispatch(getTramitesByUserAdopterCodeAsync(userSession.id));
    await dispatch(updateMascotaAsync(mascota));
  };
  useEffect(() => {
    dispatch(getTramitesByUserAdopterCodeAsync(userSession.id));
  }, []);

  return (
    <>
      <NavBar />
      <div className="adoptTramitList">
        {tramites.length !== 0 ? (
          <>
            {tramites.map((tramite) => {
              return (
                <div className="adoptTramitList__item">
                  <div className="adoptTramitList__item-code">
                    Código de trámite: {tramite.TraCod}
                  </div>
                  <div className="adoptTramitList__item-grid">
                    <div className="adoptTramitList__item-grid-gridItem">
                      <Avatar
                        sx={{ bgcolor: "#202124" }}
                        variant="rounded"
                        className="adoptTramitList__item-grid-gridItem-avatar"
                        alt={tramite.owner.UsuNom}
                        src={tramite.owner.UsuFotURL}
                      />
                      {/* {tramite.owner.UsuNom} */}
                      {/* </Avatar> */}
                      <div className="adoptTramitList__item-grid-gridItem-name">
                        {tramite.owner.UsuNom}
                      </div>
                    </div>
                    <DoubleArrowIcon className="adoptTramitList__item-grid-doubleArrow" />
                    <div className="adoptTramitList__item-grid-gridItem">
                      <Avatar
                        sx={{ bgcolor: "#202124" }}
                        variant="rounded"
                        className="adoptTramitList__item-grid-gridItem-avatar"
                        alt={tramite.mascota.MasNom}
                        src={tramite.mascota.MasFotURL}
                      >
                        {tramite.mascota.MasNom}
                      </Avatar>
                      <div className="adoptTramitList__item-grid-gridItem-info">
                        <div className="adoptTramitList__item-grid-gridItem-info-name">
                          {tramite.mascota.MasNom}
                        </div>
                        <div className="adoptTramitList__item-grid-gridItem-info-description">
                          <ul className="adoptTramitList__item-grid-gridItem-info-description-list">
                            <li className="adoptTramitList__item-grid-gridItem-info-description-list-item">
                              Color: {tramite.mascota.MasCol}
                            </li>
                            <li className="adoptTramitList__item-grid-gridItem-info-description-list-item">
                              Raza: {tramite.mascota.MasRaz}
                            </li>
                            <li className="adoptTramitList__item-grid-gridItem-info-description-list-item">
                              Edad: {tramite.mascota.MasEda} años
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
                        alt={tramite.adoptador.UsuNom}
                        src={tramite.adoptador.UsuFotURL}
                      />
                      {/* {tramite.adoptador.UsuNom}
                      </Avatar> */}
                      <div className="adoptTramitList__item-grid-gridItem-name">
                        {tramite.adoptador.UsuNom}
                      </div>
                    </div>
                  </div>
                  <div className="adoptTramitList__item-status">
                    {user[0]?.UsuNom === tramite.owner.UsuNom &&
                    tramite.TraEst === "P" ? (
                      <div
                        onClick={() =>
                          handleChangeState(
                            tramite.TraCod,
                            tramite.adoptador.UsuCod,
                            tramite.mascota
                          )
                        }
                        className="adoptTramitList__item-status-content-owner"
                      >
                        {/* {tramite.adoptador.TraEst} */}
                        {tramite.TraEst === "P" ? "Pendiente" : "Realizado"}
                      </div>
                    ) : (
                      <div className="adoptTramitList__item-status-content">
                        {/* {tramite.adoptador.TraEst} */}
                        {tramite.TraEst === "P" ? "Pendiente" : "Realizado"}
                      </div>
                    )}
                  </div>
                  <div className="adoptTramitList__item-date">
                    {tramite.TraFecDia}/{tramite.TraFecMes}/{tramite.TraFecAno}
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
