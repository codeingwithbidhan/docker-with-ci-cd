import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white px-6 py-4">
      <ul className="flex space-x-6">
        <li><Link to="/" className="hover:text-gray-200">Home</Link></li>
        <li><Link to="/users" className="hover:text-gray-200">Users</Link></li>
        <li><Link to="/products" className="hover:text-gray-200">Products</Link></li>
        <li><Link to="/about" className="hover:text-gray-200">About</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;