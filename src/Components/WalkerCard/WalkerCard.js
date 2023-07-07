import React from "react";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router";

import "./_WalkerCard.scss";

export const WalkerCard = ({ userName, userDesc, image, id }) => {
  const navigate = useNavigate();

  return (
    <Card
      className="walkerCard"
      sx={{ display: "flex" }}
      onClick={() => navigate(`/walker-profile/${id}`)}
    >
      <CardMedia
        component="img"
        sx={{ width: 200 }}
        image={image}
        alt={userName}
      />
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography component="div" variant="h5">
            {userName}
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            {userDesc}
          </Typography>
        </CardContent>
      </Box>
    </Card>
  );
};
