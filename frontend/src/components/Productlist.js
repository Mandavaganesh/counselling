import React, { useState } from 'react';

const ProductList = ({ products }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div>
        <center>
      <h2>Product List</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <div><center>
              <strong>{product.name}</strong> - ${product.price}
              </center> </div>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </li>
        ))}
      </ul>
      </center>
      <div><center>
        <h2>Cart</h2>
        <ul>
          {cart.map((item, index) => (
            <li key={index}>
              <strong>{item.name}</strong> - ${item.price}
            </li>
          ))}
        </ul></center>
      </div>
    </div>
  );
};

export default ProductList;