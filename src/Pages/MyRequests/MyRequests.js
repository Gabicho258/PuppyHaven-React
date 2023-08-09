import React from "react";
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

export const MyRequests = () => {
  const walkerWalks = [
    {
      UsuNom: "Edson Lopez",
      PasFecAno: 2023,
      PasFecMes: 8,
      PasFecDia: 9,
      PasHor: "12 pm",
      PasDis: "Jose Luis Bustamante y Rivero",
      PasDir: "Los Girasoles 300",
      mascotas: ["mascota1", "mascota2", "mascota3"],
    },
    {
      UsuNom: "Edson Lopez",
      PasFecAno: 2023,
      PasFecMes: 8,
      PasFecDia: 9,
      PasHor: "12 pm",
      PasDis: "Jose Luis Bustamante y Rivero",
      PasDir: "Los Girasoles 300",
      mascotas: ["mascota1", "mascota2", "mascota3"],
    },
    {
      UsuNom: "Edson Lopez",
      PasFecAno: 2023,
      PasFecMes: 8,
      PasFecDia: 9,
      PasHor: "12 pm",
      PasDis: "Jose Luis Bustamante y Rivero",
      PasDir: "Los Girasoles 300",
      mascotas: ["mascota1", "mascota2", "mascota3"],
    },
    {
      UsuNom: "Edson Lopez",
      PasFecAno: 2023,
      PasFecMes: 8,
      PasFecDia: 9,
      PasHor: "12 pm",
      PasDis: "Jose Luis Bustamante y Rivero",
      PasDir: "Los Girasoles 300",
      mascotas: ["mascota1", "mascota2", "mascota3"],
    },
    {
      UsuNom: "Edson Lopez",
      PasFecAno: 2023,
      PasFecMes: 8,
      PasFecDia: 9,
      PasHor: "12 pm",
      PasDis: "Jose Luis Bustamante y Rivero",
      PasDir: "Los Girasoles 300",
      mascotas: ["mascota1", "mascota2", "mascota3"],
    },
    {
      UsuNom: "Edson Lopez",
      PasFecAno: 2023,
      PasFecMes: 8,
      PasFecDia: 9,
      PasHor: "12 pm",
      PasDis: "Jose Luis Bustamante y Rivero",
      PasDir: "Los Girasoles 300",
      mascotas: ["mascota1", "mascota2", "mascota3"],
    },
  ];

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
              {walkerWalks.map((walk) => (
                <TableRow>
                  <TableCell
                    className="myRequestsContainer__tableContainer-table-body-cell"
                    align="left"
                  >
                    {walk.UsuNom}
                  </TableCell>
                  <TableCell
                    className="myRequestsContainer__tableContainer-table-body-cell"
                    align="left"
                  >
                    {walk.PasFecDia}/{walk.PasFecMes}/{walk.PasFecAno}
                  </TableCell>
                  <TableCell
                    className="myRequestsContainer__tableContainer-table-body-cell"
                    align="left"
                  >
                    {walk.PasHor}
                  </TableCell>
                  <TableCell
                    className="myRequestsContainer__tableContainer-table-body-cell"
                    align="left"
                  >
                    {walk.PasDis} - {walk.PasDir}
                  </TableCell>
                  <TableCell
                    className="myRequestsContainer__tableContainer-table-body-cell"
                    align="left"
                  >
                    <ul className="myRequestsContainer__tableContainer-table-body-cell-petList">
                      {walk.mascotas.map((pet) => {
                        return <li>{pet}</li>;
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
                      >
                        <CheckIcon className="myRequestsContainer__tableContainer-table-body-cell-btn-accept-icon"></CheckIcon>
                        Aceptar
                      </Button>
                      <Button
                        className="myRequestsContainer__tableContainer-table-body-cell-btn-cancel"
                        variant="contained"
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
