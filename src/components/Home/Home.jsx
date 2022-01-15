import { Container, Divider, Typography } from "@mui/material";
import React from "react";
import CardLink from "../CardLink/CardLink";
import placeholderImage from "../../images/nopixel.png";
import CardHolder from "../CardHolder/CardHolder";

const PHOTOSETS = [
  { id: 1, text: "Police, Camera, Action" },
  { id: 2, text: "Dreaming of Kitty" },
  { id: 3, text: "Boss's Orders " },
  { id: 4, text: "Egg" },
  { id: 5, text: "example" },
  { id: 6, text: "exmaple" },
  { id: 7, text: "exmaple" },
  { id: 8, text: "exmaple" },
  { id: 9, text: "exmaple" },
  { id: 10, text: "exmaple" },
  { id: 11, text: "exmaple" },
  { id: 12, text: "exmaple" },
  { id: 13, text: "exmaple" },
  { id: 14, text: "exmaple" },
  { id: 15, text: "exmaple" },
];

const MODELS = [
  { id: 1, text: "Mayumi Himura" },
  { id: 2, text: "Ai Musori" },
  { id: 3, text: "Sam Baas" },
  { id: 4, text: "Kyle Pred" },
  { id: 5, text: "Alan Crane" },
  { id: 6, text: "Emma Gaine" },
  { id: 7, text: "Mary Mushkin" },
  { id: 8, text: "Eddie Marshal" },
  { id: 9, text: "Dominic Toretti" },
  { id: 10, text: "exmaple" },
  { id: 11, text: "exmaple" },
  { id: 12, text: "exmaple" },
  { id: 13, text: "exmaple" },
  { id: 14, text: "exmaple" },
  { id: 15, text: "exmaple" },
];

const Home = () => {
  return (
    <>
      <Typography variant="h4">Popular Photosets</Typography>
      <Divider sx={{ marginBottom: 2 }} />
      <CardHolder items={PHOTOSETS} base={"photosets"} />

      <Typography variant="h4">Popular Models</Typography>
      <Divider sx={{ marginBottom: 2 }} />
      <CardHolder items={MODELS} base={"models"} />
    </>
  );
};

export default Home;
