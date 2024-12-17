
"use client";
import React, { useRef, useState } from "react";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi";

interface Product {
  id: number;
  image: string;
  name: string;
  price: string;
}

const ProductSlider: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null); // Modal state
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const products: Product[] = [
    {
      id: 1,
      image: "/images/arrowsilderlogo/Frame 1.png",
      name: "Nike clothes",
      price: "$20.00",
    },
    {
      id: 2,
      image: "/images/arrowsilderlogo/Frame 2.png",
      name: "Nike clothes",
      price: "$35.00",
    },
    {
      id: 3,
      image: "/images/arrowsilderlogo/Frame 3.png",
      name: "Nike clothes",
      price: "$50.00",
    },
    {
      id: 4,
      image: "/images/arrowsilderlogo/Frame 4.png",
      name: "Nike clothes",
      price: "$25.00",
    },
    {
      id: 5,
      image: "/images/arrowsilderlogo/image.png",
      name: "Nike clothes",
      price: "$45.00",
    },
    {
      id: 6,
      image: "/images/herologo/hero2.jpg",
      name: "Nike clothes",
      price: "$60.00",
    },
  ];

  // Function for previous slide
  const prevSlide = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: -scrollRef.current.offsetWidth,
        behavior: "smooth",
      });
    }
  };

  // Function for next slide
  const nextSlide = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: scrollRef.current.offsetWidth,
        behavior: "smooth",
      });
    }
  };

  // Open Modal
  const openModal = (product: Product) => {
    setSelectedProduct(product);
  };

  // Close Modal
  const closeModal = () => {
    setSelectedProduct(null);
  };

  return (
    <div className="relative w-full max-w-6xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
      {/* Left Arrow */}
      <button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 text-white bg-gray-700 p-2 rounded-full shadow-lg hover:bg-gray-800 focus:outline-none"
      >
        <HiArrowLeft size={30} />
      </button>

      {/* Scrollable Container */}
      <div
        ref={scrollRef}
        className="flex overflow-x-scroll space-x-4 p-4 snap-x snap-mandatory"
        style={{ scrollBehavior: "smooth" }}
      >
        {/* Product items */}
        {products.map((product) => (
          <div
            key={product.id}
            className="flex-none w-1/3 p-2 snap-center cursor-pointer"
            onClick={() => openModal(product)} // Open modal on click
          >
            <div className="bg-gray-100 rounded-lg overflow-hidden shadow-md">
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
          </div>
        ))}
      </div>

      {/* Right Arrow */}
      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 text-white bg-gray-700 p-2 rounded-full shadow-lg hover:bg-gray-800 focus:outline-none"
      >
        <HiArrowRight size={30} />
      </button>

      {/* Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg relative max-w-lg w-full">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-gray-700 hover:text-red-500 text-2xl"
            >
              &times;
            </button>

            {/* Image */}
            <div className="h-64 mb-4 flex justify-center items-center">
              <img
                src={selectedProduct.image}
                alt={selectedProduct.name}
                className="w-full h-full object-contain"
              />
            </div>

            {/* Details */}
            <h2 className="text-2xl font-bold text-gray-800">
              {selectedProduct.name}
            </h2>
            <p className="text-xl text-gray-700 mt-2">
              Price: {selectedProduct.price}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductSlider;
