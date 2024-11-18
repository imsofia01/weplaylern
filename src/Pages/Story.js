
import React, { useState } from "react";
import Sidebar from "../components/Sidebar";

const Story = ({onSearch}) => {
    const [searchQuery, setSearchQuery] = useState("");

    const handleSearch = (e) => {
      e.preventDefault();
      if (onSearch) {
        onSearch(searchQuery); // Pass the query to a parent component or handle it here
      }
    };

    
  
    return(
        <div className="flex w-screen">
        <Sidebar/>
        {/* Search bar */}
        <div className="flex flex-col">
        <form onSubmit={handleSearch} className="flex w-full max-w-xl m-7 ml-32">
          <input
            type="text"
            className="flex-grow w-[600px] p-2 border text-center border-gray-300 rounded-[20px] focus:outline-none focus:ring focus:ring-indigo-300"
            placeholder="Search..."
            
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </form>

        {/* Story categories */}
        <aside class="w-full ml-20 rounded-lg border-2 border-purple-600 p-4 mt-1 max-w-3xl mx-auto">
    <h2 class="font-os text-lg font-bold">Categories</h2>
    <ul class="flex items-start flex-wrap mt-4">
        <li class="flex mx-1">
            <a class="p-2 px-3 border-purple-800 mb-4 rounded font-medium hover:bg-transparent hover:border-purple-800 border bg-purple-400/25 text-blue-gray-950"
                href="category/all">
                all
            </a>
        </li>
        <li class="flex mx-1">
            <a class="p-2 px-3 border-purple-800 mb-4 rounded font-medium hover:bg-transparent hover:border-purple-800 border bg-purple-400/25 text-blue-gray-950"
                href="category/react-js">
                fables
            </a>
        </li>
        <li class="flex mx-1">
            <a class="p-2 px-3 border-purple-800 mb-4 rounded font-medium hover:bg-transparent hover:border-purple-800 border bg-purple-400/25 text-blue-gray-950"
                href="category/redux">
                adventure
            </a>
        </li>
        <li class="flex mx-1">
            <a class="p-2 px-3 border-purple-800 mb-4 rounded font-medium hover:bg-transparent hover:border-purple-800 border bg-purple-400/25 text-blue-gray-950"
                href="category/ui-design">
                Bedtime Story
            </a>
        </li>
        <li class="flex mx-1">
            <a class="p-2 px-3 border-purple-800 mb-4 rounded font-medium hover:bg-transparent hover:border-purple-800 border bg-purple-400/25 text-blue-gray-950"
                href="category/user-experience">
               poems
            </a>
        </li>
        <li class="flex mx-1">
            <a class="p-2 px-3 border-purple-800 mb-4 rounded font-medium hover:bg-transparent hover:border-purple-800 border bg-purple-400/25 text-blue-gray-950"
                href="category/productivity">
                fantasy
            </a>
        </li>
        <li class="flex mx-1">
            <a class="p-2 px-3 border-purple-800 mb-4 rounded font-medium hover:bg-transparent hover:border-purple-800 border bg-purple-400/25 text-blue-gray-950"
                href="category/gamme">
                fairy
            </a>
        </li>

    </ul>
   </aside>   

    {/* Search Content */}

        <div className="flex  ml-20 m-5 w-[200px]">
            <div className="bg-neutral-300 h-[460px] absolute w-[730px] rounded-md">

            </div>
           
        </div>

        </div>


    {/* Favorite list */}
    <div className="flex flex-col m-24">
        <div className="absolute ml-5">
            <div className="flex gap-5">
          <h2 className="text-blue-gray-950 text-xl">Favorite</h2>
          <svg className="cursor-pointer" width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.5 8.75L17.5 26.25" stroke="#33363F" stroke-width="2" stroke-linecap="round"/>
<path d="M26.25 17.5L8.75 17.5" stroke="#33363F" stroke-width="2" stroke-linecap="round"/>
</svg>
</div>
    <aside class="w-full -ml-5 p-4 max-w-4xl mx-auto">
    <ul class="flex  flex-wrap">
        <li class="flex mx-1">
            <a class="p-2 px-3 border-purple-800 mb-4 rounded font-medium hover:bg-transparent hover:border-purple-800 border bg-purple-400/25 text-blue-gray-950"
                href="category/all">
                all
            </a>
        </li>
        <li class="flex mx-1">
            <a class="p-2 px-3 border-purple-800 mb-4 rounded font-medium hover:bg-transparent hover:border-purple-800 border bg-purple-400/25 text-blue-gray-950"
                href="category/react-js">
                fables
            </a>
        </li>
        <li class="flex mx-1">
            <a class="p-2 px-3 border-purple-800 mb-4 rounded font-medium hover:bg-transparent hover:border-purple-800 border bg-purple-400/25 text-blue-gray-950"
                href="category/redux">
                adventure
            </a>
        </li>
        <li class="flex mx-1">
            <a class="p-2 px-3 border-purple-800 mb-4 rounded font-medium hover:bg-transparent hover:border-purple-800 border bg-purple-400/25 text-blue-gray-950"
                href="category/ui-design">
                Bedtime Story
            </a>
        </li>
        <li class="flex mx-1">
            <a class="p-2 px-3 border-purple-800 mb-4 rounded font-medium hover:bg-transparent hover:border-purple-800 border bg-purple-400/25 text-blue-gray-950"
                href="category/user-experience">
               poems
            </a>
        </li>
        <li class="flex mx-1">
            <a class="p-2 px-3 border-purple-800 mb-4 rounded font-medium hover:bg-transparent hover:border-purple-800 border bg-purple-400/25 text-blue-gray-950"
                href="category/productivity">
                fantasy
            </a>
        </li>
        <li class="flex mx-1">
            <a class="p-2 px-3 border-purple-800 mb-4 rounded font-medium hover:bg-transparent hover:border-purple-800 border bg-purple-400/25 text-blue-gray-950"
                href="category/gamme">
                fairy
            </a>
        </li>

         </ul>
        </aside> 

    {/* Favorite add list */}
        <div className="bg-neutral-300 -mt-5 h-full absolute w-[370px] rounded-md">
          
        </div>

        </div>
        </div>
      </div>

    )
}

export default Story