import React, { useContext, useState, useEffect } from "react";
import ProductContext from "../context/Context";
import { Link } from "react-router-dom";

function SearchBox() {
  const { products } = useContext(ProductContext);
  const [query, setQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    setFilteredProducts(products); // Update filteredProducts when products change
  }, [products]);

  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setQuery(value);

    const result = products.filter((product) =>
      product.name.toLowerCase().includes(value)
    );
    setFilteredProducts(result);
  };

  return (
    <div className="fixed top-0 right-0 w-full h-screen bg-white p-5 z-50 overflow-y-auto">
      {/* Search Input */}
      <input
        type="text"
        placeholder="Search products..."
        className="border border-gray-700 w-full p-2 rounded mb-4"
        value={query}
        onChange={handleSearch}
      />

      {/* Product List */}
      <div>
        {filteredProducts.length > 0 ? (
          filteredProducts.slice(0, 7).map((product) => (
            <Link 
             to={`/product/${product.id}`}
              key={product.id}
              className="border-b pb-4 mb-4 flex items-center justify-between"
            >
              {/* Product Details */}
              <div>
                <p className="font-semibold">{product.name}</p>
                <p className="text-gray-600">${product.price}</p>
              </div>

              {/* Product Image */}
              <div className="w-12 h-12">
                <img
                  src={product.images || "https://via.placeholder.com/150"}
                  alt={product.name}
                  className="w-full h-full object-cover border rounded"
                />
              </div>
            </Link>
          ))
        ) : (
          <p className="text-center text-gray-500">No products found.</p>
        )}
      </div>
    </div>
  );
}

export default SearchBox;
