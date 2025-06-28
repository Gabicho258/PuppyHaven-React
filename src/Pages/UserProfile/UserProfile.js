import React, { useEffect, useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import { NavBar } from "../../Components/NavBar/NavBar";
import { PetCard } from "../../Components/PetCard/PetCard";
import { Link, useNavigate } from "react-router-dom";
import "./_UserProfile.scss";
import { useDispatch, useSelector } from "react-redux";
import { getMascotasByUserCodeAsync } from "../../slices/mascotas.slice";
import { cloudinaryService } from "../../utils/cloudinaryService";
import { updateUserAsync } from "../../slices/usuarios.slice";

export const UserProfile = () => {
  const userSession = JSON.parse(sessionStorage.getItem("infoUser"));
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.usuarios.user);
  const allDistritos = useSelector((state) => state.distritos.allDistritos);
  const mascotas = useSelector((state) => state.mascotas.mascotas);
  const misMascotas = mascotas.filter(
    (mascota) => mascota.paraAdopcion === false
  );

  const distrito = allDistritos.filter(
    (distrito) => user?.distritoId === distrito.id
  );
  console.log("user-profile", user);
  console.log("user-profile", allDistritos);
  const userInfo = [
    `${new Date().getFullYear() - user?.fechaNacAno} años`,
    user?.correo,
    distrito[0]?.nombre,
  ];
  console.log(misMascotas);
  // const walkerAvailability = undefined;
  // Cloudinary service
  const [photoUserUrl, setPhotoUserUrl] = useState("");
  const [photoName, setPhotoName] = useState("Choose file...");

  const showWidgetPhotoUser = async () => {
    let state = "";
    let URL = "";
    window.cloudinary.openUploadWidget(
      cloudinaryService("user_photos"),
      (err, result) => {
        if (!err && result && result.event === "success") {
          state = "success";
          const { secure_url, original_filename, format } = result.info;
          URL = secure_url;
          setPhotoUserUrl(secure_url);
          setPhotoName(`${original_filename}.${format}`);
        }
        console.log(`object ${state}`);
        if (state === "success" && result.event === "close") {
          handlePhotoEdit(URL);
        }
      }
    );
  };
  ////////
  const handlePhotoEdit = async (usuFotURL) => {
    // await showWidgetPhotoUser();
    const { id: usuCod, nombre: usuNom, distritoId: disCod } = user;
    await dispatch(updateUserAsync({ usuCod, usuNom, disCod, usuFotURL }));
    window.location.reload();
  };
  useEffect(() => {
    dispatch(getMascotasByUserCodeAsync(userSession.id));
  }, []);

  return (
    <>
      <NavBar />
      <div className="section-p">
        <div className="left">
          <div className="left__user">
            <Avatar
              className="left__user-avatar"
              alt={user?.nombre}
              src={user?.fotoUrl}
              onClick={showWidgetPhotoUser}
              variant="rounded"
              sx={{ width: 200, height: 200 }}
            />
            <div className="left__user-info">
              <h3 className="left__user-info-name">{user?.nombre}</h3>
              <ul className="left__user-info-list">
                {userInfo.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
          <hr className="left__divider"></hr>

          <div className="left__buttons">
            {/* <Button variant="contained" className="left__buttons-btn">
              Editar perfil
            </Button> */}
            <Button
              variant="contained"
              className="left__buttons-btn"
              onClick={() => navigate("/add-pet")}
            >
              Añadir mascota
            </Button>
          </div>
        </div>
      </div>

      <div className="section-pets">
        <h3 className="pets-title">Mis mascotas</h3>
        <div className="pets">
          {misMascotas.map((mascota) => (
            <PetCard
              type="edit"
              petCod={mascota.id}
              petName={mascota.nombre}
              petImageURL={mascota.fotoUrl}
              petBreed={mascota.raza}
            />
          ))}
        </div>
      </div>
    </>
  );
};
