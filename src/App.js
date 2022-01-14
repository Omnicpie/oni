import "./App.css";
import Left from "./components/Left/Left";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Photosets from "./components/Photosets/Photosets";
import Home from "./components/Home/Home";

function App() {
  return (
    <Router>
      <Left />
      <div className="container">
        <Routes>
          <Route exact index path={"/"} element={<Home />} />
          <Route exact path={"/photosets"} element={<Photosets />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
