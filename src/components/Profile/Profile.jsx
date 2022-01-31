import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import { Container, Divider, Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

const Profile = ({ mode, setMode, roles, setRoles }) => {
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
      <Divider sx={{ margin: "30px" }} />
      <Container>
        <ListSubheader component="div" id="tags">
          Select Color Theme
        </ListSubheader>
        <IconButton
          sx={{ ml: 1 }}
          onClick={() => {
            mode === "dark" ? setMode("light") : setMode("dark");
          }}
          color="inherit"
        >
          {mode === "dark" ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>
        Currently:{" "}
        {mode === "dark" ? <span>dark mode</span> : <span>light mode</span>}
      </Container>
      <span
        style={{
          fontSize: "9px",
          marginLeft: "30px",
          position: "absolute",
          bottom: "10px",
        }}
      >
        Version: 1.5.4
      </span>
    </>
  );
};

export default Profile;
