import React from "react";
import { useNavigate } from "react-router-dom";

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const navigate = useNavigate();

  return (
    <div
      className="bg-base-100 p-2 rounded-lg shadow-md flex flex-col items-center justify-center gap-2 hover:scale-105 cursor-pointer transition-transform relative"
      onClick={() => navigate(`/product/${product.id}`)}
    >

      <img
        className="w-40 h-40 object-contain"
        src={product.image}
        alt={product.title}
      />

      {/* Product Title */}
      <h2 className="text-sm truncate w-40 text-center font-bold">
        {product.title}
      </h2>

      {/* Price & Rating */}
      <div className="flex justify-between w-full text-sm items-center px-4">
        <div className="flex items-center justify-center gap-1 text-primary/90">
          <p>{product.rating?.rate ?? "N/A"}</p>
        </div>
        <div>
          <p className="text-primary/90 font-semibold">${product.price}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
