import { Route, Routes } from "react-router-dom";
import Categories from "./pages/Categories";
import CategoryProducts from "./pages/CategoryProducts";
import ProductDetail from "./pages/ProductDetail";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Categories />} />
      <Route path="/categories/:categoryName" element={<CategoryProducts />} />
      <Route path="/product/:productId" element={<ProductDetail />} />

    </Routes>
  );
};

export default App;
