import { Typography, Card, Stack, Chip } from "@mui/material";
import React from "react";

const User = ({ person }) => {
  return (
    <Card sx={{ margin: "30px", padding: "10px 30px" }}>
      <Typography variant="h5">{person.title}</Typography>
      <div style={{ paddingTop: "10px" }}>
        <p>{person.name}</p>
        <Stack direction={"row"} sx={{ margin: "10px 10px 10px 20px" }}>
          {person.isAdmin && (
            <Chip
              key={"admin"}
              color="secondary"
              label={"Admin"}
              component={"span"}
              sx={{ margin: "0 2px" }}
            />
          )}
          {person.isModel && (
            <Chip
              key={"model"}
              color="secondary"
              label={"Model"}
              component={"span"}
              sx={{ margin: "0 2px" }}
            />
          )}
        </Stack>
      </div>
    </Card>
  );
};

export default User;
