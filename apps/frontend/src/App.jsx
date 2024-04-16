import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Home from "./components/Home/Home";
import AboutWe from "./components/AboutWe/AboutWe";
import Rates from "./components/Rates/Rates";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Header from "./components/Header/Header";
import RatesHome from "./components/RatesHome/RatesHome";
import Review from "./components/Review/Review";
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
        <Route path="/register" element={<Register />} />
      </Routes>
      <Outlet />
      <RatesHome/>
      <Review/>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
