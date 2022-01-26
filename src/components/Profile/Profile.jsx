import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import { Container, Divider, Typography } from "@mui/material";

const Profile = ({ roles, setRoles }) => {
  return (
    <>
      <Typography variant="h3" sx={{ margin: "30px" }}>
        Profile
      </Typography>
      <Divider sx={{ margin: "10px 0 30px 0" }} />
      <Container>
        <List>
          <ListSubheader component="div" id="tags">
            Select User Type
          </ListSubheader>
          <ListItem
            button
            key={"roles-user"}
            onClick={() => setRoles(["user"])}
          >
            <ListItemText
              secondary={"User"}
              className={roles.includes("user") ? "ahhact" : "ahh"}
            />
          </ListItem>
          <ListItem
            button
            key={"roles-model"}
            onClick={() => setRoles(["model"])}
          >
            <ListItemText
              secondary={"Model"}
              className={
                !roles.includes("admin") && roles.includes("model")
                  ? "ahhact"
                  : "ahh"
              }
            />
          </ListItem>
          <ListItem
            button
            key={"roles-admin"}
            onClick={() => setRoles(["admin"])}
          >
            <ListItemText
              secondary={"Admin"}
              className={
                roles.includes("admin") && !roles.includes("model")
                  ? "ahhact"
                  : "ahh"
              }
            />
          </ListItem>
          <ListItem
            button
            key={"roles-admin-model"}
            onClick={() => setRoles(["admin", "model"])}
          >
            <ListItemText
              secondary={"Admin & Model"}
              className={
                roles.includes("admin") && roles.includes("model")
                  ? "ahhact"
                  : "ahh"
              }
            />
          </ListItem>
        </List>
      </Container>
    </>
  );
};

export default Profile;
