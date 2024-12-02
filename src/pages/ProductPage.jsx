import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import ProductContext from "../context/Context";
import Navbar from "../components/Navbar";

function ProductPage() {
  const { id } = useParams();
  const { products, addToCart } = useContext(ProductContext);
  const [isAdded, setIsAdded] = useState(false);

  const product = products.find((item) => item.id.toString() === id);

  if (!product) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-2xl font-bold text-red-500">Product Not Found</h1>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 3000);
  };

  return (
    <>
      <Navbar />
      <div className="max-w-6xl mx-20 p-6">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
          <img
            src={product.image || "https://via.placeholder.com/150"}
            alt={product.name}
            className="w-full md:w-1/2 border rounded-md"
          />
          <div className="w-full md:w-1/2 px-10">
            <h1 className="text-2xl font-semibold mb-4">{product.name}</h1>
            <p className="text-lg text-gray-600 mb-2">
              Price: <span className="text-green-600 font-medium">${product.price}</span>
            </p>
            <p className="text-base text-yellow-500 mb-2">
              Rating: <span>{product.rating || "*****"}</span>
            </p>
            <p className="text-sm text-gray-500 mb-4">
              Category: <span>{product.category || "No category available"}</span>
            </p>
            <p className="text-base text-gray-700 mb-6">
              {product.description || "No description available.No description available.No description available.No description available.No description available.No description available.No description available.No description available.No description available.No description available.No description available.No description available.No description available.No description available.No description available.No description available.No description available."}
            </p>
            <button
              onClick={handleAddToCart}
              className="bg-blue-500 text-white py-2 px-6 rounded-md hover:bg-blue-600 transition"
            >
              Add to Cart
            </button>
            {isAdded && (
              <div className="mt-4 text-green-600 italic">
                <p>Item added to cart successfully!</p>
              </div>
            )}
          </div>
        </div>
        <div className="mt-12">
          <h2 className="text-xl font-medium mb-4">Similar Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {products
              .filter((item) => item.category === product.category && item.id !== product.id)
              .slice(0, 5)
              .map((similarProduct) => (
                <div key={similarProduct.id} className="border p-4 rounded-md">
                  <img
                    src={similarProduct.image || "/placeholder.jpg"}
                    alt={similarProduct.name}
                    className="w-full h-32 object-cover mb-2 rounded-md"
                  />
                  <h3 className="text-sm font-medium">{similarProduct.name}</h3>
                  <p className="text-sm text-gray-600">Price: ${similarProduct.price}</p>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductPage;
