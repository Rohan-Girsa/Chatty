import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Chatpage from "./components/Chatpage";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Login />} />
      </Routes>
      <Routes>
        <Route exact path="/Chatpage" element={<Chatpage />} />
      </Routes>
    </Router>
  );
}

export default App;
