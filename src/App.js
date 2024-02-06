import { BrowserRouter as Router,  Routes, Route
} from "react-router-dom";
import Sub from "./routes/Sub";
import Home from "./routes/Home";
import style from "./style.css";

function App() {
  return <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movie/:id" element={<Sub />} />
    </Routes>
  </Router>
}

export default App;
