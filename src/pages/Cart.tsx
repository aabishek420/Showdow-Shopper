import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { toast } from "react-toastify";
const Cart = () => {
  const { cart, removeFromCart, clearCart, increaseQuantity, decreaseQuantity } = useCart();
   const navigate = useNavigate();

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  if (cart.length === 0)
    return (
      <div className="p-6 text-center">
        <h2 className="text-2xl font-bold mb-4">Your cart is empty!</h2>
        <p>Add some products to see them here.</p>
      </div>
    );
  return (
    <>
      <div className="flex flex-col lg:flex-row gap-5 lg:gap-10 p-5">
      
        <div className="flex-1 space-y-5">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex flex-col sm:flex-row items-center sm:justify-between bg-base-200 rounded shadow-lg p-4"
            >
              <div className="flex items-center gap-4">
                <img src={item.image} alt={item.title} className="w-24 h-24 object-cover rounded" />
                <div>
                  <p className="font-semibold">{item.title}</p>
                  <p>₹{item.price.toFixed(2)}</p>
                </div>
              </div>

              <div className="flex items-center gap-3 mt-3 sm:mt-0">
                <button
                  className="px-3 py-1 bg-gray-200 rounded"
                  onClick={() => {
                    decreaseQuantity(item.id);
                    toast.info("Quantity decreased");
                  }}
                >
                  -
                </button>
                <span className="font-semibold">{item.quantity}</span>
                <button
                  className="px-3 py-1 bg-gray-200 rounded"
                  onClick={() => {
                    increaseQuantity(item.id);
                    toast.success("Quantity increased");
                  }}
                >
                  +
                </button>
                <button
                  className="px-3 py-1 bg-red-500 text-white rounded"
                  onClick={() => {
                    toast.error("Item removed from cart");
                    setTimeout(() => removeFromCart(item.id), 100); 
                  }}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Cart Summary */}
        <div className="w-full sm:w-80 bg-base-200 p-5 rounded-lg shadow-lg flex flex-col items-center justify-center gap-5">
          <p className="text-xl">Total Items: {totalItems}</p>
          <p className="text-xl">Total: ₹{total.toFixed(2)}</p>
          <button
            className="px-4 py-2 bg-green-500 text-white rounded "
            onClick={() => {
              toast.success(`Purchased! Total: ₹${total.toFixed(2)}, Items: ${totalItems}`);
              clearCart();
            }}
          >
            Buy Now
          </button>
        </div>
      </div>
      <div className="flex flex-row justify-center items-center mt-7 ">
      <button className="px-4 py-2 bg-teal-500 text-white rounded hover:font-semibold shadow-lg"
            onClick={() => navigate(-1)}>Continue Purchase</button>
            </div>
    </>
  );
};

export default Cart;
