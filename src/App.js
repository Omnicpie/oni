import "./App.css";
import Left from "./components/Left/Left";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Photosets from "./components/Photosets/Photosets";

function App() {
  return (
    <Router>
      <Left />
      <div>
        <Routes>
          <Route exact index path={"/"} element={<h1>home</h1>} />
          <Route exact path={"/photosets"} element={<Photosets />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
