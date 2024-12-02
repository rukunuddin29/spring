import React, { useContext } from 'react';
import ProductContext from '../context/Context';

function Cart() {
  const { cart } = useContext(ProductContext);

  return (
    <>
      <h2>Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        cart.map((item) => (
          <div key={item.id}>
            <p>{item.name}</p>
            <p>{item.price}</p>
            <p>{item.quantity}</p>
          </div>
        ))
      )}
    </>
  );
}

export default Cart;
