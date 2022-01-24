import React from "react";
import { MODELS } from "../../__constants__/models";
import defaultCardImage from "../../images/nopixel.png";
import CardLink from "../CardLink/CardLink";
import { Divider, Typography } from "@mui/material";

const Models = () => {
  return (
    <>
      <Typography variant="h3" sx={{ margin: "30px" }}>
        Models
      </Typography>
      <Divider />
      <div style={{ marginTop: "15px", marginLeft: "15pt" }}>
        {MODELS.map((model) => (
          <CardLink
            itemId={model.id}
            text={model.text}
            image={model.image ? model.image : defaultCardImage}
            link={`/models/${model.id}`}
            extra="float-left"
          />
        ))}
      </div>
    </>
  );
};

export default Models;
