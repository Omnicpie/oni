import "./App.css";
import Left from "./components/Left/Left";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Photosets from "./components/Photosets/Photosets";
import Home from "./components/Home/Home";
import Photoset from "./components/Photoset/Photoset";
import Models from "./components/Models/Models";
import Model from "./components/Model/Model";
import Merch from "./components/Merch/Merch";
import Profile from "./components/Profile/Profile";
import { useState } from "react";
import Staff from "./components/Staff/Staff";
import * as React from "react";
import Transactions from "./components/Transactions/Transations";
import useMediaQuery from "@mui/material/useMediaQuery";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const themes = {
  dark: createTheme({
    palette: {
      mode: "dark",
    },
    components: {
      MuiListItem: {
        styleOverrides: {
          button: {
            // apply theme's border-radius instead of component's default
            color: "white !important",
          },
        },
      },
      MuiListItemText: {
        styleOverrides: {
          secondary: {
            color: "white",
          },
        },
      },
      MuiSvgIcon: {
        styleOverrides: {
          root: {
            // apply theme's border-radius instead of component's default
            color: "white !important",
          },
        },
      },
    },
  }),
  light: createTheme({
    palette: { mode: "light" },
    components: {
      MuiListItem: {
        styleOverrides: {
          button: {
            // apply theme's border-radius instead of component's default
            color: "black !important",
          },
        },
      },
      MuiListItemText: {
        styleOverrides: {
          secondary: {
            color: "black",
          },
        },
      },
      MuiSvgIcon: {
        styleOverrides: {
          root: {
            // apply theme's border-radius instead of component's default
            color: "black !important",
          },
        },
      },
    },
  }),
};

function App() {
  const PREFER_DARK = useMediaQuery("(prefers-color-scheme: dark)", {
    noSsr: true,
  });
  const [roles, setRoles] = useState(["admin", "model"]);
  const [mode, setMode] = useState(PREFER_DARK ? "dark" : "light");
  const [allowScroll, setAllowScroll] = useState(true);

  return (
    <ThemeProvider theme={themes[mode]}>
      <CssBaseline />
      <Router basename="/">
        <Left roles={roles} mode={mode} />
        <div
          className="container"
          style={
            allowScroll
              ? {}
              : { height: "97vh", overflowY: "hidden", display: "block" }
          }
        >
          <Routes>
            <Route exact index path={"/"} element={<Home />} />
            <Route exact path={"/photosets"} element={<Photosets />} />
            <Route
              exact
              path={"/photosets/:id"}
              element={<Photoset setAllowScroll={setAllowScroll} />}
            />
            <Route exact path={"/models"} element={<Models />} />
            <Route exact path={"/models/:id"} element={<Model mode={mode} />} />
            <Route exact path={"/merch"} element={<Merch />} />
            <Route
              exact
              path={"/profile"}
              element={
                <Profile
                  roles={roles}
                  setRoles={setRoles}
                  setMode={setMode}
                  mode={mode}
                />
              }
            />
            <Route exact path={"/staff"} element={<Staff />} />
            <Route exact path={"/transactions"} element={<Transactions />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
