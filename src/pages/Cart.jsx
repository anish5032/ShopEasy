import React from "react";
import { useProductContext } from "../context/productcontext";
import CartItem from "../components/CartItem";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity } = useProductContext();
  const navigate = useNavigate();

  const safeCart = Array.isArray(cartItems) ? cartItems : [];

  const total = safeCart.reduce((sum, item) => {
    const price = Number(item.price) || 0;
    const quantity = Number(item.quantity) || 0;
    return sum + price * quantity;
  }, 0);

  return (
    <div>
      <div className="m-5 p-5 bg-[#F2D3CE] rounded-xl min-h-[300px] max-w-4xl mx-auto">
        {safeCart.length === 0 ? (
          <div className="text-center text-lg">
            <p>Your cart is empty.</p>
            <button
              onClick={() => navigate("/")}
              className="mt-4 bg-black text-white px-6 py-2 rounded-lg"
            >
              Continue Shopping
            </button>
          </div>
        ) : (
          <>
            {safeCart.map((item) => (
              <CartItem
                key={item._id}
                item={item}
                onQuantityChange={updateQuantity}
                onRemove={removeFromCart}
              />
            ))}
            <div className="text-right mt-4 text-xl font-bold">
              Total: ₹{total.toLocaleString()}
            </div>
          </>
        )}
      </div>

      {safeCart.length > 0 && (
        <div className="w-full text-center">
          <button
            onClick={() => navigate("/place-order")}
            className="bg-black text-white text-sm my-8 px-8 py-3 rounded-xl"
          >
            PROCEED TO CHECKOUT
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
