import React, { useEffect } from "react";
import { NavBar } from "../../Components/NavBar/NavBar";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import CheckIcon from "@mui/icons-material/Check";
import CancelIcon from "@mui/icons-material/Cancel";
import "./_MyRequests.scss";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getPaseosByWalkerCodeAsync,
  updatePaseoAsync,
} from "../../slices/paseos.slice";

export const MyRequests = () => {
  const userSession = JSON.parse(sessionStorage.getItem("infoUser"));
  const paseador = useSelector((state) => state.paseadores.walker);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const paseos = useSelector((state) => state.paseos.paseos);

  console.log(paseos);

  useEffect(() => {
    dispatch(getPaseosByWalkerCodeAsync(userSession.id));
  }, []);

  if (paseos === undefined) {
    return (
      <>
        <NavBar />
        <div className="myRequestsContainer">
          <h1>Cargando información de las solicitudes...</h1>
        </div>
      </>
    );
  }
  return (
    <>
      <NavBar />
      <div className="myRequestsContainer">
        <h1 className="myRequestsContainer__title">Solicitudes</h1>
        <TableContainer
          className="myRequestsContainer__tableContainer"
          component={Paper}
        >
          <Table
            sx={{ minWidth: 650 }}
            aria-label="walks"
            className="myRequestsContainer__tableContainer-table"
          >
            <TableHead className="myRequestsContainer__tableContainer-table-head">
              <TableRow>
                <TableCell
                  align="center"
                  className="myRequestsContainer__tableContainer-table-head-cell"
                >
                  Cliente
                </TableCell>
                <TableCell
                  align="center"
                  className="myRequestsContainer__tableContainer-table-head-cell"
                >
                  Fecha
                </TableCell>
                <TableCell
                  align="center"
                  className="myRequestsContainer__tableContainer-table-head-cell"
                >
                  Hora
                </TableCell>
                <TableCell
                  align="center"
                  className="myRequestsContainer__tableContainer-table-head-cell"
                >
                  Lugar
                </TableCell>
                <TableCell
                  align="center"
                  className="myRequestsContainer__tableContainer-table-head-cell"
                >
                  Mascotas
                </TableCell>
                <TableCell
                  align="center"
                  className="myRequestsContainer__tableContainer-table-head-cell"
                  colSpan={3}
                >
                  Confirmación
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody className="myRequestsContainer__tableContainer-table-body">
              {paseos?.map((paseo) => (
                <TableRow>
                  <TableCell
                    className="myRequestsContainer__tableContainer-table-body-cell"
                    align="left"
                  >
                    {paseo.usuario.nombre}
                  </TableCell>
                  <TableCell
                    className="myRequestsContainer__tableContainer-table-body-cell"
                    align="left"
                  >
                    {paseo.fechaDia}/{paseo.fechaMes}/{paseo.fechaAno}
                  </TableCell>
                  <TableCell
                    className="myRequestsContainer__tableContainer-table-body-cell"
                    align="left"
                  >
                    {paseo.hora}
                  </TableCell>
                  <TableCell
                    className="myRequestsContainer__tableContainer-table-body-cell"
                    align="left"
                  >
                    {paseo.distrito} - {paseo.direccion}
                  </TableCell>
                  <TableCell
                    className="myRequestsContainer__tableContainer-table-body-cell"
                    align="left"
                  >
                    <ul className="myRequestsContainer__tableContainer-table-body-cell-petList">
                      {paseo?.paseoMascotas.map(({ mascota }) => {
                        return <li key={mascota.id}>{mascota.nombre}</li>;
                      })}
                    </ul>
                  </TableCell>
                  <TableCell
                    className="myRequestsContainer__tableContainer-table-body-cell"
                    align="left"
                    colSpan={3}
                  >
                    <div className="myRequestsContainer__tableContainer-table-body-cell-btn">
                      <Button
                        className="myRequestsContainer__tableContainer-table-body-cell-btn-accept"
                        variant="contained"
                        onClick={() => {
                          dispatch(
                            updatePaseoAsync({
                              pasNum: paseo.id,
                              pasEst: "C",
                            })
                          );
                          dispatch(getPaseosByWalkerCodeAsync(userSession.id));
                        }}
                        sx={{
                          "&.Mui-disabled": {
                            background: "#66c466",
                          },
                        }}
                        disabled={paseo.estado !== "P"}
                      >
                        <CheckIcon className="myRequestsContainer__tableContainer-table-body-cell-btn-accept-icon"></CheckIcon>
                        Aceptar
                      </Button>
                      <Button
                        className="myRequestsContainer__tableContainer-table-body-cell-btn-cancel"
                        variant="contained"
                        onClick={() => {
                          dispatch(
                            updatePaseoAsync({
                              pasNum: paseo.id,
                              pasEst: "R",
                            })
                          );
                          dispatch(getPaseosByWalkerCodeAsync(userSession.id));
                        }}
                        sx={{
                          "&.Mui-disabled": {
                            background: "#f57171",
                          },
                        }}
                        disabled={paseo.estado !== "P"}
                      >
                        <CancelIcon className="myRequestsContainer__tableContainer-table-body-cell-btn-cancel-icon"></CancelIcon>
                        Rechazar
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Button className="myRequestsContainer__btn" variant="contained">
          Regresar a mi perfil
        </Button>
      </div>
    </>
  );
};
