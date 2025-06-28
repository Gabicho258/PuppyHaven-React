import React, { useEffect } from "react";
import { NavBar } from "../../Components/NavBar/NavBar";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import "./_ConfirmAdoptPet.scss";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getAllMascotasAsync } from "../../slices/mascotas.slice";
import { createTramiteAsync } from "../../slices/tramites.slice";

export const ConfirmAdoptPet = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.usuarios.user);
  const { id: petID } = useParams();
  const mascotas = useSelector((state) => state.mascotas.allMascotas);
  const petToAdopt = mascotas.filter(
    (mascota) => mascota.MasCod === parseInt(petID)
  );
  const allDistritos = useSelector((state) => state.distritos.allDistritos);
  const distrito = allDistritos.filter(
    (distrito) => user[0]?.distritoId === distrito.id
  );
  const {
    MasCod: masCod,
    MasNom: masNom,
    MasCol: masCol,
    MasRaz: masRaz,
    MasEda: masEda,
    MasFotURL: masFotURL,
    MasUsuCod: masUsuCod,
  } = petToAdopt[0];
  console.log(petToAdopt);
  const info = {
    petName: masNom,
    petRace: masRaz,
    petAge: masEda,
    petColor: masCol,
    date: new Date(Date.now()).toLocaleDateString(),
    userName: user[0]?.UsuNom,
    userDistrict: distrito[0]?.DisNom,
    userEmail: user[0]?.UsuCor,
  };

  const handleAdoptPet = async () => {
    const tramite = {
      traUsuCodAdo: user[0]?.UsuCod,
      traUsuCodDue: masUsuCod,
      traFecAno: info.date.split("/")[2],
      traFeMes: info.date.split("/")[1],
      traFecDia: info.date.split("/")[0],
      traMasCod: masCod,
    };
    await dispatch(createTramiteAsync(tramite));
    navigate("/adopt-tramit");
  };
  useEffect(() => {
    dispatch(getAllMascotasAsync());
  }, []);

  return (
    <>
      <NavBar />
      <div className="confirmAdoptPetContainer">
        <h1 className="confirmAdoptPetContainer__title">Tramite de Adopción</h1>
        <div className="confirmAdoptPetContainer__grid">
          <Avatar
            sx={{ bgcolor: "#202124" }}
            variant="rounded"
            className="confirmAdoptPetContainer__grid-avatar"
            src={masFotURL}
            alt={info.petName}
          >
            {info.petName}
          </Avatar>
          <DoubleArrowIcon className="confirmAdoptPetContainer__grid-doubleArrow" />
          <Avatar
            sx={{ bgcolor: "#202124" }}
            variant="rounded"
            className="confirmAdoptPetContainer__grid-avatar"
            src={user[0]?.UsuFotURL}
            alt={info.userName}
          >
            {info.userName}
          </Avatar>
          <div className="confirmAdoptPetContainer__grid-info">
            <p className="confirmAdoptPetContainer__grid-info-item">
              Nombre: {info.petName}
            </p>
            <p className="confirmAdoptPetContainer__grid-info-item">
              Raza: {info.petRace}
            </p>
            <p className="confirmAdoptPetContainer__grid-info-item">
              Edad: {info.petAge} años
            </p>
            <p className="confirmAdoptPetContainer__grid-info-item">
              Color: {info.petColor}
            </p>
          </div>
          <div className="confirmAdoptPetContainer__grid-date">
            <h3 className="confirmAdoptPetContainer__grid-date-label">
              Fecha:
            </h3>
            <div className="confirmAdoptPetContainer__grid-date-now">
              {info.date}
            </div>
          </div>
          <div className="confirmAdoptPetContainer__grid-info">
            <p className="confirmAdoptPetContainer__grid-info-item">
              {info.userName}
            </p>
            <p className="confirmAdoptPetContainer__grid-info-item">
              {info.userDistrict}
            </p>
            <p className="confirmAdoptPetContainer__grid-info-item">
              {info.userEmail}
            </p>
          </div>
        </div>
        <div className="confirmAdoptPetContainer__btnContainer">
          <Button
            className="confirmAdoptPetContainer__btnContainer-btn"
            variant="contained"
            onClick={handleAdoptPet}
          >
            Adoptar
          </Button>
        </div>
      </div>
    </>
  );
};
