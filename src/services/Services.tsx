// src/services/services.ts

const BASE_URL = "https://fakestoreapi.com";


// ---------- API Calls ----------

// Get all categories
export const getCategories = async (): Promise<string[]> => {
  const res = await fetch(`${BASE_URL}/products/categories`);
  if (!res.ok) throw new Error("Failed to fetch categories");
  return res.json();
};

// Get all products
export const getAllProducts = async (): Promise<Product[]> => {
  const res = await fetch(`${BASE_URL}/products`);
  if (!res.ok) throw new Error("Failed to fetch products");
  return res.json();
};

// Get products by category
export const getProductsByCategory = async (category: string): Promise<Product[]> => {
  const res = await fetch(`${BASE_URL}/products/category/${encodeURIComponent(category)}`);
  if (!res.ok) throw new Error(`Failed to fetch products for category: ${category}`);
  return res.json();
};

// Get single product
export const getProductById = async (id: number): Promise<Product> => {
  const res = await fetch(`${BASE_URL}/products/${id}`);
  if (!res.ok) throw new Error(`Failed to fetch product with id: ${id}`);
  return res.json();
};
