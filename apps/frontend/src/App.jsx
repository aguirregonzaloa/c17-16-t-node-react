import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import AboutWe from "./components/AboutWe/AboutWe";
import Rates from "./components/Rates/Rates";
import Login from "./components/Login/Login";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-we" element={<AboutWe />} />
        <Route path="/rates" element={<Rates />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
