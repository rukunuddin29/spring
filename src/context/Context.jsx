import React, { createContext, useState } from 'react';

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
    const [products, setProducts] = useState([
        { id: 1, name: 'Product 1', price: 100, category: 'Category A' },
        { id: 2, name: 'Product 2', price: 200, category: 'Category B' },
        { id: 3, name: 'Product 3', price: 300, category: 'Category A' },
        { id: 4, name: 'Product 4', price: 400, category: 'Category C' },
        { id: 5, name: 'Product 5', price: 500, category: 'Category B' },
        { id: 6, name: 'Product 6', price: 600, category: 'Category C' },
        { id: 1, name: 'Product 1', price: 100, category: 'Category A' },
        { id: 2, name: 'Product 2', price: 200, category: 'Category B' },
        { id: 3, name: 'Product 3', price: 300, category: 'Category A' },
        { id: 4, name: 'Product 4', price: 400, category: 'Category C' },
        { id: 5, name: 'Product 5', price: 500, category: 'Category B' },
        { id: 6, name: 'Product 20', price: 600, category: 'Category C' },
      ]);
      
    
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        setCart((prevCart) => {
            const existingProductIndex = prevCart.findIndex((item) => item.id === product.id);
            if (existingProductIndex !== -1) {
                const updatedCart = [...prevCart];
                updatedCart[existingProductIndex].quantity += 1;
                return updatedCart;
            } else {
                return [...prevCart, { ...product, quantity: 1 }];
            }
        });
    };

    const value = {
        products,
        setProducts,
        cart,
        setCart,
        addToCart
    };

    return (
        <ProductContext.Provider value={value}>
            {children}
        </ProductContext.Provider>
    );
};

export default ProductContext;
