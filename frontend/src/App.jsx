import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Users from "./pages/Users";
import Products from "./pages/Products";
import About from "./pages/About";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        {/* Navbar always on top */}
        <Navbar />

        {/* Content center */}
        <div className="flex-grow flex items-center justify-center bg-gray-50">
          <div className="max-w-screen-lg w-full px-4 md:px-8">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/users" element={<Users />} />
              <Route path="/products" element={<Products />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
