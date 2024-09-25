import React, { useState } from 'react';

const SideCategory = ({ setSelectedCategory }) => {
  const [isOpen, setIsOpen] = useState(false);
  const categories = ['Fantasy', 'Romantic', 'Mystery', 'Adventure', 'Horror'];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="lg:w-1/4 w-full">
      <div className="lg:hidden flex justify-between items-center bg-green-500 p-4 text-white">
        <h2 className="text-xl font-bold">Categories</h2>
        <button onClick={toggleMenu} className="focus:outline-none">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      <div className={`lg:block ${isOpen ? 'block' : 'hidden'} lg:bg-transparent bg-gray-100`}>
        <h2 className="lg:hidden text-xl font-bold p-4">Categories</h2>
        <ul className="flex flex-col lg:p-4 p-0">
          {categories.map((category, index) => (
            <li key={index} className="lg:my-2 my-1 border-b lg:border-none">
              <a href="#" onClick={() => handleCategoryClick(category)} className="block py-2 px-4 hover:bg-green-500 hover:text-white transition duration-300 lg:text-lg text-md">
                {category}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SideCategory;
