import { useNavigate } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";
import { useCart } from "../context/CartContext";

const Navbar = () => {
  const navigate = useNavigate();
  const { cart } = useCart();

  return (
    <nav className="flex items-center justify-between p-4 bg-base-100 text-base-content">
      <h1 onClick={() => navigate("/")} className="text-xl font-bold text-primary cursor-pointer">
        Shadow-Shopper
      </h1>

      <div
        className="flex items-center gap-2 text-primary cursor-pointer hover:bg-base-200 p-2 rounded"
        onClick={() => navigate("/cart")}
      >
        <IoCartOutline className="text-lg" />
        Cart <span>({cart.length})</span>
      </div>
    </nav>
  );
};

export default Navbar;
