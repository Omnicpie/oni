import { Divider, Typography } from "@mui/material";
import React from "react";
import CardHolder from "../CardHolder/CardHolder";
import { MY_PHOTOSETS, PHOTOSETS } from "../../__constants__/photosets";

const Photosets = () => {
  return (
    <>
      <Typography variant="h4" style={{ marginTop: "20px" }}>
        My Photosets
      </Typography>
      <Divider sx={{ marginBottom: 2 }} />
      <CardHolder items={MY_PHOTOSETS} base={"photosets"} />

      <Typography variant="h4" style={{ marginTop: "40px" }}>
        Popular Photosets
      </Typography>
      <Divider sx={{ marginBottom: 2 }} />
      <CardHolder items={PHOTOSETS} base={"photosets"} />
    </>
  );
};

export default Photosets;
