import "./App.css";
import Left from "./components/Left/Left";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Photosets from "./components/Photosets/Photosets";
import Home from "./components/Home/Home";
import Photoset from "./components/Photoset/Photoset";
import Models from "./components/Models/Models";

function App() {
  return (
    <Router basename={"oni"}>
      <Left />
      <div className="container">
        <Routes>
          <Route exact index path={"/"} element={<Home />} />
          <Route exact path={"/photosets"} element={<Photosets />} />
          <Route exact path={"/photosets/:id"} element={<Photoset />} />
          <Route exact path={"/models"} element={<Models />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
