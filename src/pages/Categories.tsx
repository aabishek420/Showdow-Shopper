import { useEffect, useState } from "react";
import { getCategories } from "../services/Services";
import electronicsImg from "../assets/electronics.jpg";
import jeweleryImg from "../assets/jewellery.jpg";
import mensClothingImg from "../assets/mens clothing.jpg";
import womensClothingImg from "../assets/women.jpg";
import { useNavigate } from "react-router-dom";

function Categories() {
  const navigate = useNavigate();
  const [categories, setCategories] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  const categoryImages: Record<string, string> = {
    "electronics": electronicsImg,
    "jewelery": jeweleryImg,
    "men's clothing": mensClothingImg,
    "women's clothing": womensClothingImg,
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getCategories();
        setCategories(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading)
    return <p className="text-center mt-8 text-gray-600">Loading categories...</p>;

  return (
    <div className="p-4 md:p-6">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center uppercase">
       <span className="text-primary">Categories</span> 
      </h2>

      <div className=" p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {categories.map((cat) => (
          <div
            key={cat}
            onClick={() => navigate(`/categories/${cat}`)}
            className="p-3 md:p-5 border rounded-lg overflow-hidden shadow hover:shadow-lg transition duration-300 cursor-pointer flex flex-col items-center"
          >
            <img
              src={categoryImages[cat.toLowerCase()]}
              alt={cat}
              className="w-full h-40 md:h-48 object-cover rounded-md mb-3"
            />
            <div className="text-center capitalize font-semibold text-lg md:text-xl">
              {cat}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Categories;
