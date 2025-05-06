import React from 'react';

const ProductCard = ({ product }) => (
  <div style={{ border: "1px solid gray", margin: 10, padding: 10 }}>
    <img src={product.image} alt={product.name} width={150} />
    <h2>{product.name}</h2>
    <p>{product.description}</p>
    <strong>{product.price}</strong>
  </div>
);

export default ProductCard;

