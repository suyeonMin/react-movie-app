import { BrowserRouter as Router,  Routes, Route
} from "react-router-dom";
import Sub from "./routes/Sub";
import Home from "./routes/Home";
import style from "./style.css";

function App() {
  return <Router>
    <Routes>
      <Route path="{`${process.env.PUBLIC_URL}/`}" element={<Home />} />
      <Route path="{`${process.env.PUBLIC_URL}/movie/:id`}" element={<Sub />} />
    </Routes>
  </Router>
}

export default App;
