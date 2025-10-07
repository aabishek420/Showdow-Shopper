import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { getProductById } from "../services/Services";
import { toast, ToastContainer } from "react-toastify";

interface Product {
    id: number;
    title: string;
    description: string;
    price: number;
    image: string;
    category: string;
    rating?: {
        rate: number;
        count: number;
    };
}

const ProductDetail: React.FC = () => {
    const { productId } = useParams<{ productId: string }>();
    const [product, setProduct] = useState<Product | null>(null);
    const [loading, setLoading] = useState(true);
    const { addToCart, cart } = useCart();
    const navigate = useNavigate();

    useEffect(() => {
        if (!productId) return;
        const fetchProduct = async () => {
            try {
                const data = await getProductById(Number(productId));
                setProduct(data);
            } catch (err) {
                console.error(err);
            } finally {
                setLoading(false);
            }
        };
        fetchProduct();
    }, [productId]);

    if (loading)
        return (
            <p className="text-center mt-10">
                <span className="loading loading-bars loading-xl"></span>
            </p>
        );
    if (!product) return <p className="text-center mt-10">Product not found</p>;

    const isInCart = cart.some((item) => item.id === product.id);

    return (
        <>
          <ToastContainer position="top-right" theme="colored"  autoClose={2000}/>
        <div className="bg-base-200 m-4 p-4 rounded-lg shadow-lg grid grid-cols-1 md:grid-cols-2 gap-6">
       

            {/* Left - Product Image */}
            <div className="bg-base-100 p-5 flex justify-center items-center">
                <img
                    src={product.image}
                    alt={product.title}
                    className="w-80 h-80 object-contain rounded-lg shadow-lg"
                />
            </div>

            {/* Right - Product Details */}
            <div className="flex flex-col gap-4 p-4">
                <h1 className="text-3xl font-bold">{product.title}</h1>
                <p className="text-sm text-gray-500">{product.category}</p>
                <p className="text-gray-700 text-justify">{product.description}</p>

                {/* Rating */}
                <div className="flex items-center gap-1">
                    {Array(5)
                        .fill("")
                        .map((_, i) => (
                            <span
                                key={i}
                                className={
                                    i < (product.rating?.rate ?? 0)
                                        ? "text-yellow-500"
                                        : "text-gray-300"
                                }
                            >
                                ★
                            </span>
                        ))}
                    <span className="text-gray-500">({product.rating?.count ?? 0} reviews)</span>
                </div>

                {/* Price */}
                <p className="text-2xl md:text-3xl font-bold text-primary">
                    ₹{product.price}
                </p>

                {/* Buttons */}
                <div className="flex gap-3 mt-4">
                    <button
                        onClick={() => {
                            if (isInCart) {
                                navigate("/cart"); 
                            } else {
                                addToCart({ ...product, quantity: 1 }); 
                                toast.success(`Your product is Successfully Added to Cart..!!!`)// else, add item to cart with quantity 1
                            }
                        }}
                        className="px-6 py-2 bg-primary text-white rounded hover:bg-primary/90 transition"
                    >
                        {isInCart ? "Go to Cart" : "Add to Cart"}
                    </button>

                    <button
                        onClick={() => navigate(-1)}
                        className="px-6 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 transition"
                    >
                        Back
                    </button>
                </div>
            </div>
          
        </div>
        </>
    );
};

export default ProductDetail;
