import React, { useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { NavBar } from "../../Components/NavBar/NavBar";
import Button from "@mui/material/Button";
import "./_MyWalks.scss";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getPaseosByUserCodeAsync,
  getPaseosByWalkerCodeAsync,
} from "../../slices/paseos.slice";

export const MyWalks = () => {
  const userSession = JSON.parse(sessionStorage.getItem("infoUser"));
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const paseos = useSelector((state) => state.paseos.paseos);
  const role = userSession.rol;
  console.log(paseos);
  // const role = "paseador";

  useEffect(() => {
    if (userSession.rol === "usuario")
      dispatch(getPaseosByUserCodeAsync(userSession.id));
    if (userSession.rol === "paseador")
      dispatch(getPaseosByWalkerCodeAsync(userSession.id));
  }, []);
  return (
    <>
      <NavBar />
      <div className="myWalksContainer">
        <h1 className="myWalksContainer__title">Reservación de paseos</h1>
        <TableContainer
          className="myWalksContainer__tableContainer"
          component={Paper}
        >
          <Table
            sx={{ minWidth: 650 }}
            aria-label="walks"
            className="myWalksContainer__tableContainer-table"
          >
            <TableHead className="myWalksContainer__tableContainer-table-head">
              <TableRow>
                <TableCell
                  align="center"
                  className="myWalksContainer__tableContainer-table-head-cell"
                >
                  {role === "usuario" ? "Paseador" : "Cliente"}
                </TableCell>
                <TableCell
                  align="center"
                  className="myWalksContainer__tableContainer-table-head-cell"
                >
                  Fecha
                </TableCell>
                <TableCell
                  align="center"
                  className="myWalksContainer__tableContainer-table-head-cell"
                >
                  Hora
                </TableCell>
                <TableCell
                  align="center"
                  className="myWalksContainer__tableContainer-table-head-cell"
                >
                  Lugar
                </TableCell>
                <TableCell
                  align="center"
                  className="myWalksContainer__tableContainer-table-head-cell"
                >
                  Mascotas
                </TableCell>
                <TableCell
                  align="center"
                  className="myWalksContainer__tableContainer-table-head-cell"
                >
                  Estado
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody className="myWalksContainer__tableContainer-table-body">
              {paseos.map((paseo) => (
                <TableRow>
                  <TableCell
                    className="myWalksContainer__tableContainer-table-body-cell"
                    align="left"
                  >
                    {role === "usuario" ? paseo.PasNom : paseo.UsuNom}
                  </TableCell>
                  <TableCell
                    className="myWalksContainer__tableContainer-table-body-cell"
                    align="left"
                  >
                    {paseo.PasFecDia}/{paseo.PasFecMes}/{paseo.PasFecAno}
                  </TableCell>
                  <TableCell
                    className="myWalksContainer__tableContainer-table-body-cell"
                    align="left"
                  >
                    {paseo.PasHor}
                  </TableCell>
                  <TableCell
                    className="myWalksContainer__tableContainer-table-body-cell"
                    align="left"
                  >
                    {paseo.PasDis} - {paseo.PasDir}
                  </TableCell>
                  <TableCell
                    className="myWalksContainer__tableContainer-table-body-cell"
                    align="left"
                  >
                    <ul className="myWalksContainer__tableContainer-table-body-cell-petList">
                      {paseo.mascotas.map(({ MasNom }) => {
                        return <li>{MasNom}</li>;
                      })}
                    </ul>
                  </TableCell>

                  {paseo.PasEst === "P" ? (
                    <TableCell
                      className="myWalksContainer__tableContainer-table-body-cell-p"
                      align="left"
                    >
                      Pendiente
                    </TableCell>
                  ) : (
                    <></>
                  )}
                  {paseo.PasEst === "R" ? (
                    <TableCell
                      className="myWalksContainer__tableContainer-table-body-cell-r"
                      align="left"
                    >
                      Rechazado
                    </TableCell>
                  ) : (
                    <></>
                  )}
                  {paseo.PasEst === "C" ? (
                    <TableCell
                      className="myWalksContainer__tableContainer-table-body-cell-c"
                      align="left"
                    >
                      Confirmado
                    </TableCell>
                  ) : (
                    <></>
                  )}
                  {paseo.PasEst === "O" ? (
                    <TableCell
                      className="myWalksContainer__tableContainer-table-body-cell-o"
                      align="left"
                    >
                      Realizado
                    </TableCell>
                  ) : (
                    <></>
                  )}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Button className="myWalksContainer__btn" variant="contained">
          Regresar a mi perfil
        </Button>
      </div>
    </>
  );
};
