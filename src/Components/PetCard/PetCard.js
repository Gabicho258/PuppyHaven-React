import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import "./_PetCard.scss";
import { Avatar } from "@mui/material";

export const PetCard = ({ petName, petImageURL, petBreed }) => {
  return (
    <Card className="petCard">
      <Avatar className="petCard__img" src={petImageURL} alt="..."></Avatar>

      <Typography className="petCard__name">{petName}</Typography>

      <Typography className="petCard__breed">{petBreed}</Typography>
      <CardActions className="petCard__actions">
        <Button className="petCard__actions-btn">Ver más</Button>
      </CardActions>
    </Card>
  );
};
