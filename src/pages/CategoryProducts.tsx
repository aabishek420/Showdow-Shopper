import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductsByCategory } from "../services/Services";
import ProductCard from "../components/ProductCard";

const CategoryProducts: React.FC = () => {
  const { categoryName } = useParams<{ categoryName: string }>();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!categoryName) return;
    const fetchProducts = async () => {
      try {
        const data = await getProductsByCategory(categoryName);
        setProducts(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, [categoryName]);

  if (loading) return <p className="text-center mt-5"> <span className="loading loading-bars loading-xl"></span></p>;

  return (
    <div className="px-6 py-4">
      <h2 className="text-2xl font-semibold mb-4 uppercase text-primary">{categoryName}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default CategoryProducts;
