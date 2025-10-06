import { NavLink } from "react-router-dom";

const categories = [
  { name: "Categories", path: "/" },
  { name: "Electronics", path: "/categories/electronics" },
  { name: "Jewelery", path: "/categories/jewelery" },
  { name: "Men's Clothing", path: "/categories/men's clothing" },
  { name: "Women's Clothing", path: "/categories/women's clothing" },
];

const MainHeader = () => {
  return (
    <div className="mt-2 p-3 rounded-r-full flex flex-wrap gap-4 font-semibold">
      {categories.map((cat) => (
        <NavLink
          key={cat.name}
          to={cat.path}
          className={({ isActive }) =>
            `px-4 py-2 rounded hover:bg-blue-600 transition ${
              isActive
                ? "bg-blue-400 text-white"
                : "bg-gray-200 text-gray-800 hover:bg-gray-300"
            }`
          }
        >
          {cat.name}
        </NavLink>
      ))}
    </div>
  );
};

export default MainHeader;
