import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import "./_PetCard.scss";
import { Avatar } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const PetCard = ({ type, petCod, petName, petImageURL, petBreed }) => {
  const navigate = useNavigate();
  return (
    <Card className="petCard">
      <Avatar className="petCard__img" src={petImageURL} alt="..."></Avatar>

      <Typography className="petCard__name">{petName}</Typography>

      <Typography className="petCard__breed">{petBreed}</Typography>
      <CardActions className="petCard__actions">
        {type === "edit" ? (
          <Button
            className="petCard__actions-btn"
            onClick={() => navigate(`/edit-pet/${petCod}`)}
          >
            Editar
          </Button>
        ) : (
          <Button
            className="petCard__actions-btn"
            onClick={() => navigate(`/adopt-pet-confirm/${petCod}`)}
          >
            Adoptar
          </Button>
        )}
      </CardActions>
    </Card>
  );
};
