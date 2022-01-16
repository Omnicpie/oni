import "./App.css";
import Left from "./components/Left/Left";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Photosets from "./components/Photosets/Photosets";
import Home from "./components/Home/Home";
import Photoset from "./components/Photoset/Photoset";

function App() {
  return (
    <Router basename={"oni"}>
      <Left />
      <div className="container">
        <Routes>
          <Route exact index path={"/"} element={<Home />} />
          <Route exact path={"/photosets"} element={<Photosets />} />
          <Route exact path={"/photosets/:id"} element={<Photoset />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
