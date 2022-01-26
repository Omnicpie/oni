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

function App() {
  const [roles, setRoles] = useState(["admin", "model"]);
  return (
    <Router basename="/">
      <Left roles={roles} />
      <div className="container">
        <Routes>
          <Route exact index path={"/"} element={<Home />} />
          <Route exact path={"/photosets"} element={<Photosets />} />
          <Route exact path={"/photosets/:id"} element={<Photoset />} />
          <Route exact path={"/models"} element={<Models />} />
          <Route exact path={"/models/:id"} element={<Model />} />
          <Route exact path={"/merch"} element={<Merch />} />
          <Route
            exact
            path={"/profile"}
            element={<Profile roles={roles} setRoles={setRoles} />}
          />
          <Route exact path={"/staff"} element={<Staff />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
