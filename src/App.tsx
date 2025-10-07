import { Route, Routes, useLocation } from "react-router-dom";
import Categories from "./pages/Categories";
import CategoryProducts from "./pages/CategoryProducts";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import MainHeader from "./components/MainHeader";


const App = () => {
  const location = useLocation();
  const hideHeaderOnCart = location.pathname === "/cart";


  return (
    <> 
 { !hideHeaderOnCart && <MainHeader/>}
      <Routes>
        <Route path="/" element={<Categories />} />
        <Route path="/categories/:categoryName" element={<CategoryProducts />} />
        <Route path="/product/:productId" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
};

export default App;
