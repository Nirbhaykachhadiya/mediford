import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import ProductsPage from "./pages/ProductsPage";
import Contact from "./pages/Contact";
import Navbar from "./Elements/Navbar";
import Footer from "./Elements/Footer";
import Jackpot from "./pages/Jackpot";

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products/product/:id" element={<Jackpot/>}/>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
