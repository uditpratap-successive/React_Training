// ProductDetails.js
import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';

const products = [
  { id: 1, name: 'Product 1', price: 100, description: 'Description for Product 1' },
  { id: 2, name: 'Product 2', price: 200, description: 'Description for Product 2' },
  // Add more products as needed
];

const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find(product => product.id === parseInt(id));
  const navigate = useNavigate();

  if (!product) {
    return <div>Product not found</div>;
  }
 
  const goBack = () => {
    navigate('/products');
  }

  return (
    <div>
      <h2>{product.name}</h2>
      <p>Price: ${product.price}</p>
      <p>Description: {product.description}</p>
      <button onClick={goBack}>Go Back</button>
    </div>
  );
};

export default ProductDetails;
