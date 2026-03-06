import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Exercises from "./pages/Exercises";
import BMI from "./pages/BMI";
import Calories from "./pages/Calories";
import Premium from "./pages/Premium";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exercises" element={<Exercises />} />
        <Route path="/bmi" element={<BMI />} />
        <Route path="/calories" element={<Calories />} />
        <Route path="/premium" element={<Premium />} />
      </Routes>
    </Router>
  );
}

export default App;
