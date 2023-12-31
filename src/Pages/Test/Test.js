import { Box, Button, FormControl, Rating, TextField } from "@mui/material";
import React, { useState } from "react";
import {
  createUser,
  deleteUser,
  getAllUsers,
  getUserByCode,
  loginUser,
  updateUser,
} from "../../api/usuarios.api";
import {
  createCalificacion,
  getAllCalificaciones,
  getCalificacionByCode,
  updateCalificacion,
} from "../../api/calificaciones.api";
import {
  createDistrito,
  getAllDistritos,
  getDistritoByCode,
  updateDistrito,
} from "../../api/distritos.api";
import {
  createMascota,
  deleteMascota,
  getAllMascotas,
  getMascotaByCode,
  getMascotaByUserCode,
  updateMascota,
} from "../../api/mascotas.api";
import {
  createPaseo,
  deletePaseo,
  getAllPaseos,
  getPaseoByNum,
  getPaseosByUserCode,
  getPaseosByWalkerCode,
  updatePaseo,
} from "../../api/paseos.api";
import {
  createTramite,
  getAllTramites,
  getTramiteByCode,
  getTramitesByUserAdopterCode,
  getTramitesByUserOwnerCode,
} from "../../api/tramites.api";
import { getAllMascotasAsync } from "../../slices/mascotas.slice";
import { useDispatch, useSelector } from "react-redux";
// import {
//   createWalker,
//   deleteWalker,
//   getAllWalkers,
//   getWalkerByCode,
//   loginWalker,
//   updateWalker,
// } from "../../api/paseadores.api.js";

export const Test = () => {
  const dispatch = useDispatch();
  const handleClick1 = async () => {
    // console.log(await createCalificacion());
    // console.log(await getAllCalificaciones());
    // console.log(
    //   await updateCalificacion({ calCod: 20, calMeGus: 1, calNoGus: 0 })
    // );
    // console.log(await getCalificacionByCode(20));
    // console.log(await getAllDistritos());
    // console.log(await createDistrito("Yanahuara"));
    // console.log(await updateDistrito({ disCod: 9, disNom: "Socabaya Better" }));
    // console.log(await getDistritoByCode(9));
    // console.log(await getAllMascotas());
    // console.log(
    //   await createMascota({
    //     masNom: "Perrito fiu fiu v2",
    //     masCol: "Nigga",
    //     masRaz: "Chuscaso",
    //     masEda: 2,
    //     masFotURL: "www.google.com",
    //     masDes: "Está desnutrido",
    //     masIsToAdo: false,
    //     masUsuCod: 1,
    //   })
    // );
    // console.log(await getMascotaByCode(4));
    // console.log(await deleteMascota(3));
    // console.log(
    //   await updateMascota({
    //     masCod: 4,
    //     masNom: "Perrito fiu fiu v10",
    //     masCol: "Nigga",
    //     masRaz: "Chuscaso",
    //     masEda: 2,
    //     masFotURL: "www.google.com",
    //     masDes: "Está desnutrido",
    //     masIsToAdo: true,
    //     masUsuCod: 1,
    //   })
    // );
    // console.log(await getMascotaByUserCode(1));
    // console.log(await getAllPaseos());
    // console.log(
    //   await createPaseo({
    //     pasCod: 1,
    //     usuCod: 1,
    //     pasDir: "Las malvinas400",
    //     masCod: 1,
    //     pasEst: "P",
    //   })
    // );
    // console.log(
    //   await updatePaseo({
    //     pasCod: 1,
    //     usuCod: 1,
    //     pasDir: "Las malvinas4200",
    //     pasNum: 6,
    //     masCod: 1,
    //     pasEst: "P",
    //   })
    // );
    // console.log(await getPaseoByNum(6));
    // console.log(await getPaseosByUserCode(1));
    // console.log(await getPaseosByWalkerCode(2));
    // console.log(await deletePaseo(6));
    // console.log(await getAllTramites());
    // console.log(
    //   await createTramite({
    //     traUsuCodAdo: 1,
    //     traUsuCodDue: 2,
    //     traFecAno: 2025,
    //     traFeMes: 8,
    //     traFecDia: 5,
    //     traMasCod: 1,
    //   })
    // );
    // console.log(await getTramiteByCode(4));
    // console.log(await getTramitesByUserAdopterCode(1));
    // console.log(await getTramitesByUserOwnerCode(2));
    // console.log(
    //   await loginUser({
    //     usuCor: "correo@test.com",
    //     usuCon: "contrasena10",
    //   })
    // );
    // console.log(await getAllUsers());
    // console.log(
    //   await createUser({
    //     usuNom: "Edson10",
    //     usuCor: "correo@correo.com",
    //     usuCon: "contrasena10",
    //     disCod: 1,
    //     usuFotURL: "https://rincondelvago.com",
    //     usuFecNacAno: 2002,
    //     usuFecNacMes: 10,
    //     usuFecNacDia: 12,
    //   })
    // );
    // console.log(
    //   await updateUser({
    //     usuCod: 8,
    //     usuNom: "EdsonLQ",
    //     disCod: 2,
    //     usuFotURL: "https://rincondelvago3.com",
    //   })
    // );
    // console.log(await deleteUser(7));
    // console.log(await getUserByCode(8));
    // console.log(
    //   await loginWalker({
    //     pasCor: "correo@correo.com",
    //     pasCon: "contrasena",
    //   })
    // );
    // console.log(await getAllWalkers());
    // console.log(
    //   await createWalker({
    //     pasNom: "Gabriel24",
    //     pasCor: "correo@correos.com",
    //     pasCon: "contrasena",
    //     disCod: 3,
    //     pasFotURL: "https://rincondelvago.com",
    //     pasFecNacAno: 2003,
    //     pasFecNacMes: 4,
    //     pasFecNacDia: 11,
    //     pasDes: "Gaaa",
    //     pasDis: "Lunes/Miercoles/Viernes 16:00-17:00",
    //     calCod: 1,
    //   })
    // );
    // console.log(
    //   await updateWalker({
    //     pasCod: 5,
    //     disCod: 2,
    //     pasFotURL: "https://rincondelv4ago.com",
    //     pasDes: "NEW DESCRIPTION",
    //     pasDis: "Lunes4/Miercoles/Viernes 16:00-17:00",
    //   })
    // );
    // console.log(await deleteWalker(5));
    // console.log(await getWalkerByCode(5));
    await dispatch(getAllMascotasAsync());
  };

  const mascotas = useSelector((state) => state.mascotas.mascotas);
  console.log(mascotas);
  const [addingComment, setAddingComment] = useState(false);
  const handleClick = () => {
    setAddingComment(true);
  };
  const [rate, setRate] = useState(0);

  const user = { role: "user" };
  return (
    // <div>
    //   Test
    //   <Button variant="contained" onClick={handleClick}>
    //     Test
    //   </Button>
    // </div>
    <div className="comments">
      <h1>Comentarios</h1>
      {/* {user?.role === "user" && ( */}
      {user?.role === "user" && (
        <>
          <Button
            variant="contained"
            className="addComment"
            onClick={handleClick}
          >
            Añadir nuevo comentario
          </Button>
          {addingComment && (
            <FormControl className="comment-container">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  // handleSubmit(e);
                }}
              >
                <Box
                  component="div"
                  sx={{
                    "& .MuiTextField-root": { m: 1, width: "90%" },
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <h3 className="rate">
                    Puntualos:{" "}
                    <Rating
                      name="simple-controlled"
                      value={rate}
                      onChange={(event, newValue) => {
                        setRate(newValue);
                      }}
                    />{" "}
                  </h3>
                  <TextField
                    required
                    multiline
                    rows={4}
                    id="outlined-multiline-static"
                    type="text"
                    label="Añade el comentario aquí"
                  />
                  <Button
                    type="submit"
                    color="success"
                    variant="contained"
                    className="button-save__comment"
                  >
                    Guardar cambios
                  </Button>
                  <Button
                    type="button"
                    variant="contained"
                    className="button-cancel__comment"
                    onClick={() => {
                      setAddingComment(false);
                    }}
                  >
                    Cancelar
                  </Button>
                </Box>
              </form>
            </FormControl>
          )}
        </>
      )}
      {[
        { author_name: "qwe", rating: 2, comment: "Hola" },
        { author_name: "qwe", rating: 2, comment: "Hola" },
        { author_name: "qwe", rating: 2, comment: "Hola" },
      ].map(({ author_name, rating, comment }, i) => (
        <Comment key={i} author={author_name} rate={rating} comment={comment} />
      ))}
    </div>
  );
};
const Comment = ({ author, rate, comment }) => {
  return (
    <div className="comment-container">
      <h3>{author}</h3>
      <RatingComponent readOnly={true} rate={rate} />
      <p>{comment}</p>
    </div>
  );
};

export const RatingComponent = ({ readOnly, rate }) => {
  const [value, setValue] = useState(rate);
  return (
    <Box
      sx={{
        "& > legend": { mt: 2 },
      }}
      style={{ marginBottom: "10px" }}
    >
      {!readOnly ? (
        <Rating
          name="simple-controlled"
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        />
      ) : (
        <Rating name="read-only" value={value} readOnly />
      )}
    </Box>
  );
};
