import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import "./App.css";
import CareGivers from "./pages/CareGiver";
import UserProfile from "./pages/UserProfile";

// import { useGetUser } from "./utils/hooks/userQuery";
// const { isPending, error, data, isFetching } = useGetUser(1);

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cuidadores" element={<CareGivers />} />
        <Route path="/myprofile" element={<UserProfile />} />
      </Routes>
      <Outlet />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
