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
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const paseos = useSelector((state) => state.paseos.paseos);
  const role = userSession.rol;
  useEffect(() => {
    dispatch(getPaseosByWalkerCodeAsync(userSession.id));
  }, []);
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
              {paseos.map((paseo) => (
                <TableRow>
                  <TableCell
                    className="myRequestsContainer__tableContainer-table-body-cell"
                    align="left"
                  >
                    {paseo.UsuNom}
                  </TableCell>
                  <TableCell
                    className="myRequestsContainer__tableContainer-table-body-cell"
                    align="left"
                  >
                    {paseo.PasFecDia}/{paseo.PasFecMes}/{paseo.PasFecAno}
                  </TableCell>
                  <TableCell
                    className="myRequestsContainer__tableContainer-table-body-cell"
                    align="left"
                  >
                    {paseo.PasHor}
                  </TableCell>
                  <TableCell
                    className="myRequestsContainer__tableContainer-table-body-cell"
                    align="left"
                  >
                    {paseo.PasDis} - {paseo.PasDir}
                  </TableCell>
                  <TableCell
                    className="myRequestsContainer__tableContainer-table-body-cell"
                    align="left"
                  >
                    <ul className="myRequestsContainer__tableContainer-table-body-cell-petList">
                      {paseo.mascotas.map(({ MasNom }) => {
                        return <li>{MasNom}</li>;
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
                              pasNum: paseo.PasNum,
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
                        disabled={paseo.PasEst !== "P"}
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
                              pasNum: paseo.PasNum,
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
                        disabled={paseo.PasEst !== "P"}
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
