import { Route, Routes } from "react-router-dom";
import Categories from "./pages/Categories";
import CategoryProducts from "./pages/CategoryProducts";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Categories />} />
      <Route path="/categories/:categoryName" element={<CategoryProducts />} />
    </Routes>
  );
};

export default App;
