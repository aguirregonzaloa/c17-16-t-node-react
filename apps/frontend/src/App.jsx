import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import RatesHome from "./components/RatesHome/RatesHome";
import Review from "./components/Review/Review";
import Footer from "./components/Footer/Footer";

import "./App.css";

// import { useGetUser } from "./utils/hooks/userQuery";
// const { isPending, error, data, isFetching } = useGetUser(1);

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Outlet />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
