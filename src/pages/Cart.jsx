import React from "react";
import { useProductContext } from "../context/productcontext";
import CartItem from "../components/CartItem";

const Cart = () => {
  const { cartItems, setCartItems } = useProductContext();

  const updateQuantity = (id, newQuantity) => {
    const updated = cartItems.map((item) =>
      item._id === id ? { ...item, quantity: newQuantity } : item
    );
    setCartItems(updated);
  };

  const removeFromCart = (id) => {
    const updated = cartItems.filter((item) => item._id !== id);
    setCartItems(updated);
  };

  // ✅ Safe total calculation with type coercion and fallback
  const total = cartItems.reduce((sum, item) => {
    const price = Number(item.price) || 0;
    const quantity = Number(item.quantity) || 0;
    return sum + price * quantity;
  }, 0);

  return (
    <div className="m-5 p-5 bg-[#F2D3CE] rounded-xl min-h-[300px] max-w-4xl mx-auto">
      {cartItems.length === 0 ? (
        <p className="text-center text-lg">Your cart is empty.</p>
      ) : (
        <>
          {cartItems.map((item) => (
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
  );
};

export default Cart;
