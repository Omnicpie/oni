import { Divider, Typography } from "@mui/material";
import React from "react";
import CardHolder from "../CardHolder/CardHolder";
import { MODELS } from "../../__constants__/models";
import { PHOTOSETS } from "../../__constants__/photosets";
const Home = () => {
  return (
    <>
      <Typography variant="h4" style={{ marginTop: "20px" }}>
        Popular Photosets
      </Typography>
      <Divider sx={{ marginBottom: 2 }} />
      <CardHolder items={PHOTOSETS} base={"photosets"} />

      <Typography variant="h4" style={{ marginTop: "40px" }}>
        Popular Models
      </Typography>
      <Divider sx={{ marginBottom: 2 }} />
      <CardHolder items={MODELS} base={"models"} />
    </>
  );
};

export default Home;
