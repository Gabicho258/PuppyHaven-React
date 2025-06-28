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
  console.log(tramites);
  useEffect(() => {
    dispatch(getTramitesByUserAdopterCodeAsync(userSession.id));
  }, []);

  return (
    <>
      <NavBar />
      <div className="adoptTramitList">
        {tramites.length !== 0 ? (
          <>
            {tramites?.map((tramite) => {
              return (
                <div className="adoptTramitList__item" key={tramite.id}>
                  <div className="adoptTramitList__item-code">
                    Código de trámite: {tramite.id}
                  </div>
                  <div className="adoptTramitList__item-grid">
                    <div className="adoptTramitList__item-grid-gridItem">
                      <Avatar
                        sx={{ bgcolor: "#202124" }}
                        variant="rounded"
                        className="adoptTramitList__item-grid-gridItem-avatar"
                        alt={tramite.dueno?.nombre}
                        src={tramite.dueno?.fotoUrl}
                      />
                      {/* {tramite.owner.UsuNom} */}
                      {/* </Avatar> */}
                      <div className="adoptTramitList__item-grid-gridItem-name">
                        {tramite.dueno?.nombre}
                      </div>
                    </div>
                    <DoubleArrowIcon className="adoptTramitList__item-grid-doubleArrow" />
                    <div className="adoptTramitList__item-grid-gridItem">
                      <Avatar
                        sx={{ bgcolor: "#202124" }}
                        variant="rounded"
                        className="adoptTramitList__item-grid-gridItem-avatar"
                        alt={tramite.mascota?.nombre}
                        src={tramite.mascota?.fotoUrl}
                      >
                        {tramite.mascota?.nombre}
                      </Avatar>
                      <div className="adoptTramitList__item-grid-gridItem-info">
                        <div className="adoptTramitList__item-grid-gridItem-info-name">
                          {tramite.mascota?.nombre}
                        </div>
                        <div className="adoptTramitList__item-grid-gridItem-info-description">
                          <ul className="adoptTramitList__item-grid-gridItem-info-description-list">
                            <li className="adoptTramitList__item-grid-gridItem-info-description-list-item">
                              Color: {tramite.mascota?.color}
                            </li>
                            <li className="adoptTramitList__item-grid-gridItem-info-description-list-item">
                              Raza: {tramite.mascota?.raza}
                            </li>
                            <li className="adoptTramitList__item-grid-gridItem-info-description-list-item">
                              Edad: {tramite.mascota?.edad} años
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
                        alt={user?.nombre}
                        src={user?.fotoUrl}
                      />
                      {/* {user.UsuNom}
                      </Avatar> */}
                      <div className="adoptTramitList__item-grid-gridItem-name">
                        {user?.nombre}
                      </div>
                    </div>
                  </div>
                  <div className="adoptTramitList__item-status">
                    {user?.nombre === tramite?.dueno?.nombre &&
                    tramite.estado === "P" ? (
                      <div
                        onClick={() =>
                          handleChangeState(
                            tramite.id,
                            user.id,
                            tramite.mascota
                          )
                        }
                        className="adoptTramitList__item-status-content-owner"
                      >
                        {/* {tramite.adoptador.TraEst} */}
                        {tramite.estado === "P" ? "Pendiente" : "Realizado"}
                      </div>
                    ) : (
                      <div className="adoptTramitList__item-status-content">
                        {/* {tramite.adoptador.TraEst} */}
                        {tramite.estado === "P" ? "Pendiente" : "Realizado"}
                      </div>
                    )}
                  </div>
                  <div className="adoptTramitList__item-date">
                    {tramite.fechaDia}/{tramite.fechaMes}/{tramite.fechaAno}
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
