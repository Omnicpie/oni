import * as React from "react";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import ImageIcon from "@mui/icons-material/Image";
import ListSubheader from "@mui/material/ListSubheader";
import logo from "../../images/OniFans.png";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Link } from "react-router-dom";
import { Avatar, ListItemAvatar } from "@mui/material";
import defaultCardImage from "../../images/nopixel.png";

const drawerWidth = 240;

export default function Left({ role, setRole }) {
  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <img
        src={logo}
        alt="OniFans Logo"
        style={{ height: "50px", width: "auto", margin: "10px auto" }}
      ></img>
      <Divider style={{ zIndex: 1 }} />
      <List>
        <Link to={"/"}>
          <ListItem button key={1}>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary={"Home"} />
          </ListItem>
        </Link>
        <Link to={"/photosets"}>
          <ListItem button key={2}>
            <ListItemIcon>
              <ImageIcon />
            </ListItemIcon>
            <ListItemText primary={"Photosets"} />
          </ListItem>
        </Link>
      </List>
      <Divider />
      {role === "admin" && (
        <>
          <List>
            <ListSubheader component="div" id="tags">
              Admin
            </ListSubheader>
            <Link to={"/models"}>
              <ListItem button key={"admin-models"}>
                <ListItemText primary={"Models"} />
              </ListItem>
            </Link>
            <Link to={"/merch"}>
              <ListItem button key={"admin-merch"}>
                <ListItemText primary={"All Merch"} />
              </ListItem>
            </Link>
          </List>
          <Divider />
        </>
      )}
      <List>
        <ListSubheader component="div" id="tags">
          User Role
        </ListSubheader>
        <ListItem button key={"role-user"} onClick={() => setRole("user")}>
          <ListItemText
            secondary={"User"}
            className={role === "user" ? "ahhact" : "ahh"}
          />
        </ListItem>
        <ListItem button key={"role-model"} onClick={() => setRole("model")}>
          <ListItemText
            secondary={"Model"}
            className={role === "model" ? "ahhact" : "ahh"}
          />
        </ListItem>
        <ListItem button key={"role-admin"} onClick={() => setRole("admin")}>
          <ListItemText
            secondary={"Admin"}
            className={role === "admin" ? "ahhact" : "ahh"}
          />
        </ListItem>
      </List>
      <a
        href="https://github.com/OmnicPie/oni"
        target={"_blank"}
        rel="noreferrer"
        style={{
          margin: "auto auto 10px auto",
          display: "flex",
        }}
      >
        <GitHubIcon style={{ fontSize: "2rem" }} />
      </a>
      <ListItem button key={"role-admin"}>
        <ListItemAvatar>
          <Avatar src={defaultCardImage} />
        </ListItemAvatar>
        <ListItemText primary="Mayumi Himura" />
      </ListItem>
      <Divider />
      <ListItem button key={"role-admin"} onClick={() => setRole("admin")}>
        <ListItemText primary="Logout" sx={{ textAlign: "center" }} />
      </ListItem>
    </Drawer>
  );
}
