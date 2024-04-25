import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import RatesHome from "./components/RatesHome/RatesHome";
import Review from "./components/Review/Review";
import Footer from "./components/Footer/Footer";

import "./App.css";
import CareGivers from "./pages/CareGiver";
import UserProfile from "./pages/UserProfile";
import * as React from "react";
import { UserContext } from "./utils/context/UserContext";

// import { useGetUser } from "./utils/hooks/userQuery";
// const { isPending, error, data, isFetching } = useGetUser(1);

function App() {
  const { user, setUser } = React.useContext(UserContext);
  React.useEffect(() => {
    const localUser = JSON.parse(localStorage.getItem("user"));
    if (localUser) {
      const addUser = { ...user, ...localUser };
      setUser(addUser);
    }

    // console.log(localUser);
    // console.log(user);
  }, []);

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
