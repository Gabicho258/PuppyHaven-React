import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { NavBar } from "../../Components/NavBar/NavBar";
import Button from "@mui/material/Button";
import CheckIcon from "@mui/icons-material/Check";
import CancelIcon from "@mui/icons-material/Cancel";
import "./_MyWalks.scss";

export const MyWalks = () => {
  // const role = "user";
  const role = "paseador";
  const userWalks = [
    {
      PasNom: "Carlo Diaz",
      PasFecAno: 2023,
      PasFecMes: 8,
      PasFecDia: 9,
      PasHor: "12 pm",
      PasEst: "P",
    },
    {
      PasNom: "Carlo Diaz",
      PasFecAno: 2023,
      PasFecMes: 8,
      PasFecDia: 9,
      PasHor: "12 pm",
      PasEst: "R",
    },
    {
      PasNom: "Carlo Diaz",
      PasFecAno: 2023,
      PasFecMes: 8,
      PasFecDia: 9,
      PasHor: "12 pm",
      PasEst: "C",
    },
    {
      PasNom: "Carlo Diaz",
      PasFecAno: 2023,
      PasFecMes: 8,
      PasFecDia: 9,
      PasHor: "12 pm",
      PasEst: "O",
    },
  ];
  const walkerWalks = [
    {
      UsuNom: "Edson Lopez",
      PasFecAno: 2023,
      PasFecMes: 8,
      PasFecDia: 9,
      PasHor: "12 pm",
      PasDis: "Jose Luis Bustamante y Rivero",
      PasDir: "Los Girasoles 300",
    },
    {
      UsuNom: "Edson Lopez",
      PasFecAno: 2023,
      PasFecMes: 8,
      PasFecDia: 9,
      PasHor: "12 pm",
      PasDis: "Jose Luis Bustamante y Rivero",
      PasDir: "Los Girasoles 300",
    },
    {
      UsuNom: "Edson Lopez",
      PasFecAno: 2023,
      PasFecMes: 8,
      PasFecDia: 9,
      PasHor: "12 pm",
      PasDis: "Jose Luis Bustamante y Rivero",
      PasDir: "Los Girasoles 300",
    },
    {
      UsuNom: "Edson Lopez",
      PasFecAno: 2023,
      PasFecMes: 8,
      PasFecDia: 9,
      PasHor: "12 pm",
      PasDis: "Jose Luis Bustamante y Rivero",
      PasDir: "Los Girasoles 300",
    },
    {
      UsuNom: "Edson Lopez",
      PasFecAno: 2023,
      PasFecMes: 8,
      PasFecDia: 9,
      PasHor: "12 pm",
      PasDis: "Jose Luis Bustamante y Rivero",
      PasDir: "Los Girasoles 300",
    },
    {
      UsuNom: "Edson Lopez",
      PasFecAno: 2023,
      PasFecMes: 8,
      PasFecDia: 9,
      PasHor: "12 pm",
      PasDis: "Jose Luis Bustamante y Rivero",
      PasDir: "Los Girasoles 300",
    },
  ];

  return (
    <>
      <NavBar />
      <div className="myWalksContainer">
        {role === "user" ? (
          <>
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
                      Paseador
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
                      Estado
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody className="myWalksContainer__tableContainer-table-body">
                  {userWalks.map((walk) => (
                    <TableRow>
                      <TableCell
                        className="myWalksContainer__tableContainer-table-body-cell"
                        align="left"
                      >
                        {walk.PasNom}
                      </TableCell>
                      <TableCell
                        className="myWalksContainer__tableContainer-table-body-cell"
                        align="left"
                      >
                        {walk.PasFecDia}/{walk.PasFecMes}/{walk.PasFecAno}
                      </TableCell>
                      <TableCell
                        className="myWalksContainer__tableContainer-table-body-cell"
                        align="left"
                      >
                        {walk.PasHor}
                      </TableCell>
                      {walk.PasEst === "P" ? (
                        <TableCell
                          className="myWalksContainer__tableContainer-table-body-cell-p"
                          align="left"
                        >
                          Pendiente
                        </TableCell>
                      ) : (
                        <></>
                      )}
                      {walk.PasEst === "R" ? (
                        <TableCell
                          className="myWalksContainer__tableContainer-table-body-cell-r"
                          align="left"
                        >
                          Rechazado
                        </TableCell>
                      ) : (
                        <></>
                      )}
                      {walk.PasEst === "C" ? (
                        <TableCell
                          className="myWalksContainer__tableContainer-table-body-cell-c"
                          align="left"
                        >
                          Confirmado
                        </TableCell>
                      ) : (
                        <></>
                      )}
                      {walk.PasEst === "O" ? (
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
          </>
        ) : (
          <>
            <h1 className="myWalksContainer__title">Solicitudes</h1>
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
                      Cliente
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
                      colSpan={3}
                    >
                      Confirmación
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody className="myWalksContainer__tableContainer-table-body">
                  {walkerWalks.map((walk) => (
                    <TableRow>
                      <TableCell
                        className="myWalksContainer__tableContainer-table-body-cell"
                        align="left"
                      >
                        {walk.UsuNom}
                      </TableCell>
                      <TableCell
                        className="myWalksContainer__tableContainer-table-body-cell"
                        align="left"
                      >
                        {walk.PasFecDia}/{walk.PasFecMes}/{walk.PasFecAno}
                      </TableCell>
                      <TableCell
                        className="myWalksContainer__tableContainer-table-body-cell"
                        align="left"
                      >
                        {walk.PasHor}
                      </TableCell>
                      <TableCell
                        className="myWalksContainer__tableContainer-table-body-cell"
                        align="left"
                      >
                        {walk.PasDis} - {walk.PasDir}
                      </TableCell>
                      <TableCell
                        className="myWalksContainer__tableContainer-table-body-cell"
                        align="left"
                        colSpan={3}
                      >
                        <div className="myWalksContainer__tableContainer-table-body-cell-btn">
                          <Button
                            className="myWalksContainer__tableContainer-table-body-cell-btn-accept"
                            variant="contained"
                          >
                            <CheckIcon className="myWalksContainer__tableContainer-table-body-cell-btn-accept-icon"></CheckIcon>
                            Aceptar
                          </Button>
                          <Button
                            className="myWalksContainer__tableContainer-table-body-cell-btn-cancel"
                            variant="contained"
                          >
                            <CancelIcon className="myWalksContainer__tableContainer-table-body-cell-btn-cancel-icon"></CancelIcon>
                            Rechazar
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            <Button className="myWalksContainer__btn" variant="contained">
              Regresar a mi perfil
            </Button>
          </>
        )}
      </div>
    </>
  );
};
