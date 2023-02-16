import Home from "./pages/home/Home";
import Login from "./pages/home/login/Login";
import Profile from "./pages/home/profile/Profile";
import Signup from "./pages/home/signup/Signup";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile/:username" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;
