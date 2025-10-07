import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../services/Services";

const ProductDetail: React.FC = () => {
    const { productId } = useParams<{ productId: string }>();
    const [product, setProduct] = useState<Product | null>(null);
    const [loading, setLoading] = useState(true);

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

    if (loading) return <p className="text-center mt-10"><span className="loading loading-bars loading-xl"></span></p>;
    if (!product) return <p className="text-center mt-10">Product not found</p>;

    return (
        <div className="bg-base-200 m-4 p-4 rounded-lg shadow-lg grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* Left Side - Product Image */}
            <div className="bg-base-100 p-5 flex justify-center items-center">
                <img
                    src={product.image}
                    alt={product.title}
                    className="w-80 h-80 object-contain rounded-lg shadow-lg"
                />
            </div>

            {/* Right Side - Product Details */}
            <div className="flex flex-col gap-4 p-4">
                <h1 className="text-3xl font-bold">{product.title}</h1>
                <p className="text-lg text-gray-700 text-justify">{product.description}</p>
                <p className="text-2xl md:text-3xl font-bold text-primary">₹{product.price}</p>
                <div className="flex items-center gap-2">
                    <span className="text-yellow-500 font-bold">{product.rating?.rate ?? "N/A"}</span>
                    <span className="text-gray-500">({product.rating?.count} reviews)</span>
                </div>
                <button className="mt-4 px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
                    Add to Cart
                </button>
                <button
                    onClick={() => window.history.back()}
                    className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 transition"
                >
                     Back
                </button>
            </div>

        </div>


    );
};

export default ProductDetail;
