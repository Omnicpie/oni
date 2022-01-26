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

export default function Left({ roles }) {
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
      {roles.includes("model") && (
        <>
          <List>
            <ListSubheader component="div" id="tags">
              Model
            </ListSubheader>
            <Link to={"/models/1"}>
              <ListItem button key={"model-acc"}>
                <ListItemText primary={"Public Page"} />
              </ListItem>
            </Link>
          </List>
          <Divider />
        </>
      )}
      {roles.includes("admin") && (
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
            <Link to={"/staff"}>
              <ListItem button key={"admin-staff"}>
                <ListItemText primary={"Staff"} />
              </ListItem>
            </Link>
          </List>
          <Divider />
        </>
      )}
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
      <Divider />
      <Link to={"/profile"}>
        <ListItem button key={"profile"}>
          <ListItemAvatar>
            <Avatar src={defaultCardImage} />
          </ListItemAvatar>
          <ListItemText primary="Mayumi Himura" />
        </ListItem>
      </Link>
      <Divider />
      <ListItem key={"logout"}>
        <ListItemText primary="Logout" sx={{ textAlign: "center" }} />
      </ListItem>
    </Drawer>
  );
}
