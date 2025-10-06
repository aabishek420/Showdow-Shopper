import { NavLink } from "react-router-dom";

const MainHeader = () => {
  return (
    <div className="mt-2 p-3 rounded-r-full flex flex-wrap  gap-4 font-semibold">
      <NavLink
        to="/categories"
        className="px-4 py-2 bg-blue-400 text-white rounded hover:bg-blue-600"
      >
        Categories
      </NavLink>

      <NavLink
        to="/electronics"
        className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
      >
        Electronics
      </NavLink>

      <NavLink
        to="/jewelery"
        className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
      >
        Jewelery
      </NavLink>

      <NavLink
        to="/men's clothing"
        className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
      >
        Men's Clothing
      </NavLink>

      <NavLink
        to="/women's clothing"
        className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
      >
        Women's Clothing
      </NavLink>
    </div>
  );
};

export default MainHeader;
