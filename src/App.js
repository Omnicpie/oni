import "./App.css";
import Left from "./components/Left/Left";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Photosets from "./components/Photosets/Photosets";
import Home from "./components/Home/Home";
import Photoset from "./components/Photoset/Photoset";
import Models from "./components/Models/Models";
import Model from "./components/Model/Model";
import Merch from "./components/Merch/Merch";
import { useState } from "react";

function App() {
  const [role, setRole] = useState("admin");
  return (
    <Router basename="/">
      <Left role={role} setRole={setRole} />
      <div className="container">
        <Routes>
          <Route exact index path={"/"} element={<Home />} />
          <Route exact path={"/photosets"} element={<Photosets />} />
          <Route exact path={"/photosets/:id"} element={<Photoset />} />
          <Route exact path={"/models"} element={<Models />} />
          <Route exact path={"/models/:id"} element={<Model />} />
          <Route exact path={"/merch"} element={<Merch />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
