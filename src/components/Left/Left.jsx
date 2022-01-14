import * as React from "react";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import Typography from "@mui/material/Typography";
import ImageIcon from "@mui/icons-material/Image";
import ListSubheader from "@mui/material/ListSubheader";
import logo from "../../images/OniFans.png";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Link } from "react-router-dom";

const drawerWidth = 240;

export default function Left() {
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
      <Divider />
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
      <List>
        <ListSubheader component="div" id="tags">
          Admin
        </ListSubheader>
      </List>
      <a
        href="https://github.com/OmnicPie/oni"
        target={"_blank"}
        style={{
          margin: "auto auto 10px auto",
          display: "flex",
        }}
      >
        <GitHubIcon style={{ fontSize: "2rem" }} />
      </a>
    </Drawer>
  );
}
