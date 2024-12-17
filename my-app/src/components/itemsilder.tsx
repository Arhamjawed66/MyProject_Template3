"use client";
import React, { useState } from "react";

interface Product {
  id: number;
  image: string;
  name: string;
  price: string;
}

const ProductSlider: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const products: Product[] = [
    {
      id: 1,
      image: "/images/herologo/hero7.jpg",
      name: "Nike Shoes",
      price: "$20.00",
    },
    {
      id: 2,
      image: "/images/herologo/hero6.jpg",
      name: "Nike Shoes",
      price: "$35.00",
    },
    {
      id: 3,
      image: "/images/herologo/hero5.jpg",
      name: "Nike Shoes",
      price: "$50.00",
    },
    {
      id: 4,
      image: "/images/herologo/hero4.jpg",
      name: "Nike Shoes",
      price: "$25.00",
    },
    {
      id: 5,
      image: "/images/herologo/hero3.jpg",
      name: "Nike Shoes",
      price: "$45.00",
    },
    {
      id: 6,
      image: "/images/herologo/hero2.jpg",
      name: "Nike Shoes",
      price: "$60.00",
    },
  ];

  const openModal = (product: Product) => {
    setSelectedProduct(product);
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };

  return (
    <div className="w-full max-w-6xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
      <div className="flex overflow-x-auto space-x-4 p-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-gray-100 rounded-lg overflow-hidden shadow-md w-1/3 min-w-[250px] cursor-pointer"
            onClick={() => openModal(product)}
          >
            <div className="h-48 overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4 text-center">
              <h3 className="text-lg font-semibold text-gray-800">
                {product.name}
              </h3>
              <p className="text-lg font-bold text-gray-900 mt-2">
                {product.price}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg relative max-w-md w-full">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-gray-700 hover:text-red-500 text-2xl"
            >
              &times;
            </button>

            {/* Image */}
            <div className="h-64 w-full mb-4">
              <img
                src={selectedProduct.image}
                alt={selectedProduct.name}
                className="w-full h-full object-contain"
              />
            </div>

            {/* Details */}
            <h2 className="text-xl font-bold text-gray-800">
              {selectedProduct.name}
            </h2>
            <p className="text-lg text-gray-700 mt-2">
              Price: {selectedProduct.price}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductSlider;

