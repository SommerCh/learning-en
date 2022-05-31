import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar.js";
import Home from "./pages/Home";
import ProductsPage from "./pages/ProductsPage.js";
import ArticlePage from "./pages/ArticlePage.js";
import "./App.css";
import Footer from './components/Footer'


function App() {
  const [mode, setMode] = useState("false");

  const toggleMode = () => {
    setMode(!mode);
  };

  return (
    <Router>
      <div className={mode ? "darkmode" : "lightmode"}>
        <Navbar />
        <div className="modes">
          <span onClick={toggleMode} className="dark">Dark</span>
          <span>|</span>
          <span onClick={toggleMode} className="light">Light</span>
        </div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/article/:productId" element={<ArticlePage />} />
        </Routes>
      </div>
      <Footer/>
    </Router>
  );
}

export default App;
