import React, { useContext } from 'react';
import ProductContext from '../context/Context';

function Cart() {
  const { cart } = useContext(ProductContext);

  // Dummy numbers for total calculation
  const dummyTotal = 120; // Dummy total price
  const dummyItemsCount = 3; // Dummy number of items in cart

  return (
    <div className="max-w-6xl p-6 flex justify-between mx-20">
      {/* Cart Section */}
      <div className="w-full pr-6">
        <h2 className="text-2xl font-semibold mb-6">Your Cart</h2>
        {cart.length === 0 ? (
          <p className="text-lg text-center">Your cart is empty</p>
        ) : (
          <div className="space-y-4">
            {cart.map((item) => (
              <div
                key={item.id}
                className="border-b border-gray-300 py-4 flex items-center"
              >
                {/* Product Image */}
                <img
                  src={item.image || "https://via.placeholder.com/150"}
                  alt={item.name}
                  className="w-24 h-24 object-cover rounded-md mr-4"
                />
                
                {/* Product Info */}
                <div className="flex-1">
                  <p className="text-lg font-medium">{item.name}</p>
                  <p className="text-sm text-gray-600">Price: ${item.price}</p>
                </div>
                <div className="text-sm text-gray-500">
                  Quantity: {item.quantity}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Total Section */}
      <div className="w-1/3 pl-6 border-l border-gray-300">
        <div className="flex flex-col justify-between h-full">
          <h3 className="text-2xl font-semibold mb-6">Order Summary</h3>
          <div className="flex flex-col mb-6">
            <p className="text-lg font-semibold">Total:</p>
            <p className="text-xl font-bold">${dummyTotal}</p>
            <p className="text-sm text-gray-600">Items: {dummyItemsCount}</p>
          </div>
          <button className="bg-black text-white py-2 px-6 rounded-3xl hover:bg-gray-800 self-start">
            Proceed to Pay
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
