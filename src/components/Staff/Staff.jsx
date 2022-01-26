import React from "react";
import { Container, Divider, Typography } from "@mui/material";
import { STAFF } from "../../__constants__/staff";
import User from "./subComponent/User/User";

const Staff = () => {
  return (
    <>
      <Typography variant="h3" sx={{ margin: "30px" }}>
        Staff
      </Typography>
      <Divider sx={{ margin: "10px 0 30px 0" }} />
      <Container>
        {STAFF.sort((a, b) => a.importance - b.importance).map((person) => (
          <User person={person} />
        ))}
      </Container>
    </>
  );
};

export default Staff;
