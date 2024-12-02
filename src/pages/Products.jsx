import React, { useContext, useState } from "react";
import ProductContext from "../context/Context";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { GoFilter } from "react-icons/go";
import Filter from "../components/Filter";

function Products() {
  const { products } = useContext(ProductContext);
  const [query, setQuery] = useState("");
  const [fill,setFill]=useState("");
  const [filter, setFilter] = useState(products);
  const [catFilter, setCatFilter] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");

  const [closeFilter, setCloseFilter] = useState(false);

  const handleFilter = () => {
    setCloseFilter(!closeFilter);
  };

  const handleCategory = () => {
    setCatFilter(!catFilter);
  };

  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setQuery(value);

    // Filter products based on search query and category filter
    const result = products.filter((product) => {
      const matchesQuery = product.name.toLowerCase().includes(value);
      const matchesCategory = !selectedCategory || product.category === selectedCategory;
      return matchesQuery && matchesCategory;
    });
    setFilter(result);
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setCatFilter(false); // Close category filter after selecting a category
  };

  // Get unique categories from the products
  const categories = [...new Set(products.map((product) => product.category))];

  return (
    <>
      <Navbar />
      {closeFilter && (
        <div className="bg-gray-100 w-1/5 h-screen fixed top-0 left-0 z-50 p-4  ">
        
          <span
            className="cursor-pointer text-red-600 ml-2"
            onClick={handleFilter}
          >
            Close
          </span> 
           <Filter></Filter>
        </div>
      )}

      {catFilter && (
        <div
          className="absolute right-20 top-52 bg-gray-100 z-60 w-40 p-4 "
       
        >
          {categories.map((category) => ( 
            <p
              key={category}
              className="cursor-pointer hover:text-blue-500"
              onClick={() => handleCategorySelect(category)}
            >
              {category}
            </p>
          ))}
        </div>
      )}

      <div className="product-section">
        <h1 className="text-3xl text-center my-6">Our Products</h1>

        <div className="flex justify-between items-center mx-20 mb-8">
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={handleFilter}
          >
            Filter <GoFilter className="mx-2" />
          </div>

          <div
            className="w-40 h-10 border rounded-3xl text-center pt-2 border-gray-500 cursor-pointer"
            onClick={handleCategory}
          >
            Categories
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-6 m-10">
          {filter.length > 0 ? (
            filter.map((product) => (
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
                  {/* <p className="text-sm text-gray-500">Category: {product.category}</p> */} 
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
