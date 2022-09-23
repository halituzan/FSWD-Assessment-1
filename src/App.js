import { Routes, Route } from "react-router-dom";
import "./App.css";
import Candidate from "./components/candidates/Candidate";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import AboutUs from "./pages/AboutUs";
import Candidates from "./pages/Candidates";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App d-flex flex-column justify-content-between">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/candidates" element={<Candidates />} />
        <Route path="/candidates/:candidatesName" element={<Candidate />} />
        <Route path="/about-us" element={<AboutUs />} />
      </Routes>
      <Footer className="footer" />
    </div>
  );
}

export default App;
