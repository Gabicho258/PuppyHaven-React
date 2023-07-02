import React from "react";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

import "./_WalkerCard.scss";

export const WalkerCard = ({ userName, userDesc }) => {
  return (
    <Card className="walkerCard" sx={{ display: "flex" }}>
      <CardMedia
        component="img"
        sx={{ width: 200 }}
        image="https://www.adslzone.net/app/uploads-adslzone.net/2019/04/borrar-fondo-imagen-1200x675.jpg"
        alt="alt"
      />
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography component="div" variant="h5">
            Gabriel Antony
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            Soy un amante por los animales, disfruto el tiempo que paso con
            ellos y se me da bien cuidarlos
          </Typography>
        </CardContent>
      </Box>
    </Card>
  );
};
