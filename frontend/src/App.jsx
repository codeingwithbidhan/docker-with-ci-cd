import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Users from "./pages/Users";
import Products from "./pages/Products";
import About from "./pages/About";

export default function App() {
  return (
    <Router>
      <Navbar />
      <div className="p-4 md:p-8 max-w-screen-lg mx-auto">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<Users />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

