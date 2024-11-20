// components/CategoryList.js
import React from "react";

const CategoryList = ({ categories, onCategoryClick }) => {
  return (
    <aside className="w-full ml-20 rounded-lg border-2 border-purple-600 p-4 mt-1 max-w-3xl mx-auto">
      <h2 className="font-os text-lg font-bold">Categories</h2>
      <ul className="flex items-start flex-wrap mt-4">
        {categories.map((category) => (
          <li key={category.name} className="flex mx-1">
            <a
              className="p-2 px-3 border-purple-800 mb-4 rounded font-medium hover:bg-transparent hover:border-purple-800 border bg-purple-400/25 text-blue-gray-950"
              href={category.href}   onClick={() => onCategoryClick(category.name)} 
            >
              {category.name}
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default CategoryList;
