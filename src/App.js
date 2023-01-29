import Home from "./pages/Home";
import Tours from "./pages/Tours";
import TourDetail from "./pages/TourDetail";
import Login from "./pages/Login";
import Register from "./pages/Register";
import SearchResultList from "./pages/SearchResultList";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tours" element={<Tours />} />
        <Route path="/tour/:id" element={<TourDetail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/tour/search" element={<SearchResultList />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
