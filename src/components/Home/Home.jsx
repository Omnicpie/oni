import { Container, Divider, Typography } from "@mui/material";
import React from "react";
import CardLink from "../CardLink/CardLink";
import placeholderImage from "../../images/nopixel.png";

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

const Home = () => {
  return (
    <>
      <Typography variant="h4">Popular Photosets</Typography>
      <Divider />
      <div className="card-holder">
        {PHOTOSETS.map((set) => (
          <CardLink
            link={`/photosets/${set.id}`}
            text={set.text}
            image={set.image ? set.image : placeholderImage}
          />
        ))}
      </div>

      <Typography variant="h4">Popular Models</Typography>
      <Divider />
      <div className="card-holder"></div>
    </>
  );
};

export default Home;
