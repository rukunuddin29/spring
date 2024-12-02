import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { RiShoppingCartLine } from "react-icons/ri";
import { RiLoginBoxLine } from "react-icons/ri";
import { AiOutlineSearch } from "react-icons/ai";
import ProductContext from "../context/Context";
import SearchBox from "./SearchBox"; // Import the SearchBox component

function Navbar() {
  const { cart } = useContext(ProductContext);
  const [openSearch, setSearch] = useState(false);

  // Calculate total items in the cart
  const totalItems = cart.reduce((total, item) => total + (item.quantity || 0), 0);

  // Toggle search box visibility
  function toggleSearchBox() {
    setSearch((prevState) => !prevState); // Toggle the state
  }

  return (
    <>
      <nav className="w-full h-16 px-6 md:px-16 lg:px-32 flex items-center justify-between">
        {/* Left Section */}
        <div className="flex items-center space-x-12">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq-uJx6VhZtHhdU5FeLLE0jKFZAKZPEqdAdw&s"
            alt="Logo"
            className="w-28 h-auto"
          />
          <div className="hidden md:flex space-x-8 text-lg text-gray-800">
            <Link to="/" className="hover:text-red-600">Home</Link>
            <Link to="/about" className="hover:text-red-600">About</Link>
            <Link to="/products" className="hover:text-red-600">Products</Link>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-8 text-xl">
          <Link to="/cart" className="hover:text-red-600 relative">
            <RiShoppingCartLine />
            {totalItems > 0 && (
              <span className="absolute top-0 right-0 text-sm text-red-700">{totalItems}</span>
            )}
          </Link>
          <button className="hover:text-red-600" onClick={toggleSearchBox}>
            <AiOutlineSearch />
          </button>
          <Link to="/login" className="hover:text-red-600">
            <RiLoginBoxLine />
          </Link>
        </div>
      </nav>

      {/* Search Box Overlay */}
      {openSearch && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 z-40" onClick={toggleSearchBox}></div>
      )}

      {/* Sliding Search Box */}
      <div
        className={`fixed top-0 right-0 h-screen w-1/2 bg-white shadow-lg z-50 transform ${
          openSearch ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="p-4">
          <button
            className="text-red-600 text-2xl mb-4"
            onClick={toggleSearchBox}
          >
            Close
          </button>
          <SearchBox />
        </div>
      </div>
    </>
  );
}

export default Navbar;
