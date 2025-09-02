import React, { useState } from "react";
import { assets } from "../assets/assets";
import { useProductContext } from "../context/productcontext";
import { useNavigate } from "react-router-dom";

const PlaceOrder = () => {
  const [method, setMethod] = useState("cod");
  const { cartItems } = useProductContext(); // example: you can pull cart data
  const navigate = useNavigate(); // ✅ use directly here

  // (Optional) calculate subtotal from cart
  const subtotal = cartItems?.reduce(
    (sum, item) => sum + (Number(item.price) || 0) * (Number(item.quantity) || 0),
    0
  ) || 0;
  const shipping = subtotal > 0 ? 10 : 0;
  const total = subtotal + shipping;

  return (
    <div className="flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t">
      {/* LEFT SIDE */}
      <div className="flex flex-col gap-4 w-full sm:max-w-[480px]">
        <div className="text-xl my-3">
          <h1>DELIVERY INFORMATION</h1>
        </div>

        <div className="flex gap-3">
          <input type="text" placeholder="First name" className="border border-gray-300 rounded py-1.5 px-3.5 w-full" />
          <input type="text" placeholder="Last name" className="border border-gray-300 rounded py-1.5 px-3.5 w-full" />
        </div>

        <input type="email" placeholder="Email address" className="border border-gray-300 rounded py-1.5 px-3.5 w-full" />
        <input type="text" placeholder="Street address" className="border border-gray-300 rounded py-1.5 px-3.5 w-full" />

        <div className="flex gap-3">
          <input type="text" placeholder="City" className="border border-gray-300 rounded py-1.5 px-3.5 w-full" />
          <input type="text" placeholder="State" className="border border-gray-300 rounded py-1.5 px-3.5 w-full" />
        </div>

        <div className="flex gap-3">
          <input type="number" placeholder="Zipcode" className="border border-gray-300 rounded py-1.5 px-3.5 w-full" />
          <input type="text" placeholder="Country" className="border border-gray-300 rounded py-1.5 px-3.5 w-full" />
        </div>

        <input type="number" placeholder="Phone" className="border border-gray-300 rounded py-1.5 px-3.5 w-full" />
      </div>

      {/* RIGHT SIDE */}
      <div className="mt-8">
        <div className="mt-8 min-w-80">
          <h1 className="text-xl my-3 font-semibold">TOTAL AMOUNT</h1>
          <div className="flex justify-between">
            <p className="my-1">Subtotal</p>
            <p>${subtotal.toFixed(2)}</p>
          </div>
          <hr className="text-gray-300" />
          <div className="flex justify-between">
            <p className="my-1">Shipping fee</p>
            <p>${shipping.toFixed(2)}</p>
          </div>
          <hr className="text-gray-300" />
          <div className="flex font-semibold my-1 justify-between">
            <p>Total</p>
            <p>${total.toFixed(2)}</p>
          </div>
        </div>

        <div className="mt-12">
          <h1 className="text-xl">PAYMENT METHOD</h1>
          {/* PAYMENT METHOD SELECTION */}
          <div className="flex gap-3 flex-col lg:flex-row">
            <div onClick={() => setMethod("stripe")} className="flex items-center gap-3 border p-2 px-3 cursor-pointer">
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method === "stripe" ? "bg-green-400" : ""}`} />
              <img className="h-5 mx-4" src={assets.stripe_logo} alt="Stripe" />
            </div>

            <div onClick={() => setMethod("razorpay")} className="flex items-center gap-3 border p-2 px-3 cursor-pointer">
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method === "razorpay" ? "bg-green-400" : ""}`} />
              <img className="h-5 mx-4" src={assets.razorpay_logo} alt="Razorpay" />
            </div>

            <div onClick={() => setMethod("cod")} className="flex items-center gap-3 border p-2 px-3 cursor-pointer">
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method === "cod" ? "bg-green-400" : ""}`} />
              <p className="text-gray-500 text-sm font-medium mx-4">CASH ON DELIVERY</p>
            </div>
          </div>

          <div className="w-full text-end mt-8">
            <button onClick={() => navigate("/orders")} className="bg-black text-white px-16 py-3 text-sm">
              PLACE ORDER
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;
