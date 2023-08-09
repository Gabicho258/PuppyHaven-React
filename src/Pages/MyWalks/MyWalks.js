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
      mascotas: ["mascota1", "mascota2", "mascota3"],
    },
    {
      PasNom: "Carlo Diaz",
      PasFecAno: 2023,
      PasFecMes: 8,
      PasFecDia: 9,
      PasHor: "12 pm",
      PasEst: "R",
      mascotas: ["mascota1", "mascota2", "mascota3"],
    },
    {
      PasNom: "Carlo Diaz",
      PasFecAno: 2023,
      PasFecMes: 8,
      PasFecDia: 9,
      PasHor: "12 pm",
      PasEst: "C",
      mascotas: ["mascota1", "mascota2", "mascota3"],
    },
    {
      PasNom: "Carlo Diaz",
      PasFecAno: 2023,
      PasFecMes: 8,
      PasFecDia: 9,
      PasHor: "12 pm",
      PasEst: "O",
      mascotas: ["mascota1", "mascota2", "mascota3"],
    },
  ];

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
                  {role === "user" ? "Paseador" : "Cliente"}
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

                  <TableCell
                    className="myWalksContainer__tableContainer-table-body-cell"
                    align="left"
                  >
                    <ul className="myWalksContainer__tableContainer-table-body-cell-petList">
                      {walk.mascotas.map((pet) => {
                        return <li>{pet}</li>;
                      })}
                    </ul>
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
      </div>
    </>
  );
};
