"use client"
import React from "react";


const SearchBar: React.FC = () => {
  return (
    <div className="relative max-w-sm mx-auto">
      <input
        type="text"
        placeholder="Search..."
        className="w-full py-2 pl-10 pr-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500"
        viewBox="0 0 20 20"
        fill="currentColor"
        aria-hidden="true"
      >
        <path
          fillRule="evenodd"
          d="M8.5 3a5.5 5.5 0 11-.001 11.001A5.5 5.5 0 018.5 3zM0 8.5A8.5 8.5 0 1117 8.5 8.5 8.5 0 010 8.5z"
          clipRule="evenodd"
        />
      </svg>
    </div>
  );
};

export default SearchBar;
