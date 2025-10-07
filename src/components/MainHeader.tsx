import { NavLink } from "react-router-dom";
import { Dropdown } from "primereact/dropdown";
import { useState } from "react";

const categories = [
  { name: "Categories", path: "/" },
  { name: "Electronics", path: "/categories/electronics" },
  { name: "Jewelery", path: "/categories/jewelery" },
  { name: "Men's Clothing", path: "/categories/men's clothing" },
  { name: "Women's Clothing", path: "/categories/women's clothing" },
];

const MainHeader = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleDropdownChange = (e: any) => {
    setSelectedCategory(e.value);
   
    if (e.value?.path) {
      window.location.href = e.value.path; // simple navigation
    }
  };

  return (
    <div className="mt-2 p-3 rounded-r-full font-semibold">
  
      <div className="hidden sm:flex flex-wrap gap-4">
        {categories.map((category) => (
          <NavLink
            key={category.name}
            to={category.path}
            className={({ isActive }) =>
              `px-4 py-2 rounded hover:bg-blue-600 transition ${
                isActive
                  ? "bg-blue-400 text-white"
                  : "bg-gray-200 text-gray-800 hover:bg-gray-300"
              }`
            }
          >
            {category.name}
          </NavLink>
        ))}
      </div>

    
      <div className="sm:hidden">
        <Dropdown
          value={selectedCategory}
          onChange={handleDropdownChange}
          options={categories}
          optionLabel="name"
          placeholder="Select a Category"
          className="w-full"
        />
      </div>
    </div>
  );
};

export default MainHeader;
