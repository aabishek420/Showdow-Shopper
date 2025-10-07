import { useCart } from "../context/CartContext";
import { toast, ToastContainer} from "react-toastify";

const Cart = () => {
  const { cart, removeFromCart, clearCart, increaseQuantity, decreaseQuantity } = useCart();

  // Calculate total price
  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  if (cart.length === 0)
    return (
      <div className="p-6 text-center">
        <h2 className="text-2xl font-bold mb-4">Your cart is empty!</h2>
        <p>Add some products to see them here.</p>

      </div>
    );

  return (
    <>
     <ToastContainer position="top-right" theme="colored"  autoClose={2000}/>
 
    <div className="max-w-4xl mx-auto p-6">
       
      <h2 className="text-2xl font-bold mb-6">Your Cart</h2>

      {cart.map((item) => (
        <div
          key={item.id}
          className="flex items-center justify-between mb-4 p-4 border rounded"
        >
          <div className="flex items-center gap-4">
            <img src={item.image} alt={item.title} className="w-16 h-16 object-cover" />
            <div>
              <p className="font-semibold">{item.title}</p>
              <p>₹{item.price.toFixed(2)}</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              className="px-2 py-1 bg-gray-200 rounded"
              onClick={() => {
                decreaseQuantity(item.id);
                toast.info("Quantity decreased");
              }}
            >
              -
            </button>
            <span>{item.quantity}</span>
            <button
              className="px-2 py-1 bg-gray-200 rounded"
              onClick={() => {
                increaseQuantity(item.id);
                toast.success("Quantity increased");
              }}
            >
              +
            </button>
          </div>

          <button
            className="px-3 py-1 bg-red-500 text-white rounded"
            onClick={() => {
              removeFromCart(item.id);
              toast.error("Item removed from cart");
            }}
          >
            Remove
          </button>
        </div>
      ))}

      <div className="flex justify-between items-center mt-6">
        <p className="text-xl font-bold">Total: ₹{total.toFixed(2)}</p>
        <button
          className="px-4 py-2 bg-green-500 text-white rounded"
          onClick={() => {
            toast.success(`🎉 Purchased! Total: ₹${total.toFixed(2)}`);
            clearCart();
          }}
        >
          Buy Now
        </button>
      </div>
    </div>
       </>
  );
};

export default Cart;
