"use client";

import React from 'react';

interface ProductCardProps {
  // Define any props needed; using placeholder for now
}

const ProductCard: React.FC<ProductCardProps> = () => {
  return (
    <div className="p-4 border rounded shadow">
      <h2 className="text-lg font-semibold">Product Card</h2>
      <p className="text-sm text-gray-600">Placeholder component</p>
    </div>
  );
};

export default ProductCard;
