import React from 'react';
import products from './products';
import ProductCard from './components/ProductCard';

function App() {
  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {products.map(p => <ProductCard key={p.id} product={p} />)}
    </div>
  );
}

export default App;
