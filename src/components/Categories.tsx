import  { useEffect, useState } from "react";
import { getCategories } from "../services/Services"
import electronicsImg from "../assets/electronics.jpg" 
import jewelryImg from "../assets/jewellery.jpg";
import mensClothingImg from "../assets/mens clothing.jpg";
import womensClothingImg from "../assets/women.jpg";


function Categories() {
  const [categories, setCategories] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

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


  if (loading) return <p>Loading categories...</p>;

  return (
    <div>
      <h2>Categories</h2>
      <ul>
        {categories.map((cat) => (
          <li key={cat}>{cat}</li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
