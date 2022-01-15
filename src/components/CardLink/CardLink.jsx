import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

const CardLink = ({ link, image, text }) => {
  return (
    <Card sx={{ minWidth: 300, maxHeight: "200pt", margin: "10px" }}>
      <CardActionArea href={"/oni" + link} sx={{ height: "100%" }}>
        <CardMedia
          component="img"
          image={image}
          sx={{ objectFit: "contain", maxHeight: "160pt" }}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {text}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default CardLink;
