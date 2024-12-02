import React, { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductContext from '../context/Context';
import Navbar from '../components/Navbar';

function ProductPage() {
    const { id } = useParams();
    const { products, addToCart } = useContext(ProductContext);
    const [isAdded, setIsAdded] = useState(false);

    const product = products.find((item) => item.id.toString() === id);

    if (!product) {
        return <h1>Product Not Found</h1>;
    }

    const handleAddToCart = () => {
        addToCart(product);
        setIsAdded(true);
        setTimeout(() => setIsAdded(false), 3000); // Hide after 3 seconds
    };

    return (
        <>
            <Navbar />
            <div>
                <h1>{product.name}</h1>
                <img src={product.image || '/placeholder.jpg'} alt={product.name} />
                <p>Price: ${product.price}</p>
                <p>{product.description || 'No description available.'}</p>
                <button onClick={handleAddToCart}>Add to Cart</button>
              
                {isAdded && (
                    <div className='text-green-700 italic ease-in-out '>
                        <p>item added to cart successfully !!</p>
                    </div>
                )}
            </div>
        </>
    );
}

export default ProductPage;
