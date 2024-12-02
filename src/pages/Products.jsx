import React, { useContext } from "react";
import ProductContext from "../context/Context";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { GoFilter } from "react-icons/go";
import FilterDropdown from "../components/FilterDropdown";
import CategoryDropdown from "../components/CategoryDropdown";

function Products() {
  const { products } = useContext(ProductContext);

  return (
    <>
      <Navbar />

      <div className="product-section">
        <h1 className="text-3xl text-center my-6">Our Products</h1>

        <div className="flex justify-between items-center mx-20 mb-8">
          <div className="flex justify-between items-center cursor-pointer">
            Filter <GoFilter className="mx-2" />
            <FilterDropdown />
          </div>

          <div className="w-40 h-10 border rounded-3xl text-center pt-2 border-gray-500 cursor-pointer">
            Categories
            <CategoryDropdown /> {/* Placeholder for category dropdown */}
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-6 m-10">
          {products.length > 0 ? (
            products.map((product) => (
              <Link
                key={product.id}
                className="border w-64 border-gray-300 rounded-md overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                to={`/product/${product.id}`}
              >
                <img
                  src={product.image || "https://via.placeholder.com/150"}
                  alt={product.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-4">
                  <h1 className="text-lg font-semibold">{product.name}</h1>
                  <p className="text-gray-600">Price: ${product.price}</p>
                </div>
              </Link>
            ))
          ) : (
            <p className="text-center text-gray-500 text-xl">No products found.</p>
          )}
        </div>
      </div>
    </>
  );
}

export default Products;
