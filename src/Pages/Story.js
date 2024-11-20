import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import CategoryList from "../components/CategoryList";
import FablesCategory from "../components/Category/FablesCategory";

const Story = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(null); // Track selected category

  const categories = [
    { name: "all", href: "#" },
    { name: "fables", href: "#" },
    { name: "adventure", href: "#" },
    { name: "Bedtime Story", href: "#" },
    { name: "poems", href: "#" },
    { name: "fantasy", href: "#" },
    { name: "fairy", href: "#" },
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(searchQuery);
    }
  };

  const handleCategoryClick = (categoryName) => {
    console.log("Selected Category:", categoryName); // Debugging
    setSelectedCategory(categoryName); // Update state
  };

  const renderCategoryContent = () => {
    console.log("Rendering Content for:", selectedCategory); // Debugging
    switch (selectedCategory) {
      case "fables":
        return <FablesCategory />;
      case "adventure":
        return (
          <div className="p-5">
            <h2 className="text-xl font-bold">Adventure Stories</h2>
            <p>Here are some thrilling adventure stories.</p>
          </div>
        );
      case "Bedtime Story":
        return (
          <div className="p-5">
            <h2 className="text-xl font-bold">Bedtime Stories</h2>
            <p>Enjoy peaceful bedtime stories here.</p>
          </div>
        );
      case "poems":
        return (
          <div className="p-5">
            <h2 className="text-xl font-bold">Poems</h2>
            <p>Beautiful poems to inspire and soothe.</p>
          </div>
        );
      case "fantasy":
        return (
          <div className="p-5">
            <h2 className="text-xl font-bold">Fantasy Stories</h2>
            <p>Immerse yourself in magical fantasy tales.</p>
          </div>
        );
      case "fairy":
        return (
          <div className="p-5">
            <h2 className="text-xl font-bold">Fairy Tales</h2>
            <p>Classic fairy tales for children and adults.</p>
          </div>
        );
      default:
        return (
          <div className="p-5">
            <h2 className="text-xl font-bold">Welcome!</h2>
            <p>Select a category to explore stories.</p>
          </div>
        );
    }
  };

  return (
    <div className="flex w-screen">
      <Sidebar />
      <div className="flex flex-col">
        {/* Search bar */}
        <form
          onSubmit={handleSearch}
          className="flex w-full max-w-xl m-7 ml-32"
        >
          <input
            type="text"
            className="flex-grow w-[600px] p-2 border text-center border-gray-300 rounded-[20px] focus:outline-none focus:ring focus:ring-indigo-300"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </form>

        {/* Story categories */}
        <CategoryList categories={categories} onCategoryClick={handleCategoryClick} />

        {/* Search Content */}
        <div className="flex ml-20 m-5 w-[200px]">
          <div className="bg-neutral-300 h-[460px] absolute w-[730px] rounded-md">
            {/* Conditionally render content based on selected category */}
            {renderCategoryContent()}
          </div>
        </div>
      </div>

      {/* Favorite list */}
      <div className="flex flex-col m-24">
        <div className="absolute ml-5">
          <div className="flex gap-5">
            <h2 className="text-blue-gray-950 text-xl">Favorite</h2>
            <svg
              className="cursor-pointer"
              width="35"
              height="35"
              viewBox="0 0 35 35"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.5 8.75L17.5 26.25"
                stroke="#33363F"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M26.25 17.5L8.75 17.5"
                stroke="#33363F"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </div>
          <aside className="w-full -ml-5 p-4 max-w-4xl mx-auto">
            <ul className="flex flex-wrap">
              {categories.map((category) => (
                <li key={category.name} className="flex mx-1">
                  <a
                    className="p-2 px-3 border-purple-800 mb-4 rounded font-medium hover:bg-transparent hover:border-purple-800 border bg-purple-400/25 text-blue-gray-950"
                    href={category.href}
                    onClick={(e) => {
                      e.preventDefault(); // Prevent default behavior of link
                      handleCategoryClick(category.name);
                    }}
                  >
                    {category.name}
                  </a>
                </li>
              ))}
            </ul>
          </aside>

          {/* Favorite add list */}
          <div className="bg-neutral-300 -mt-5 h-full absolute w-[370px] rounded-md"></div>
        </div>
      </div>
    </div>
  );
};

export default Story;
