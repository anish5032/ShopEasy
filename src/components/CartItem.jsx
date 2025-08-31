import React from "react";

const CartItem = ({ item, onQuantityChange, onRemove }) => {
  const handleInputChange = (e) => {
    const value = parseInt(e.target.value);
    onQuantityChange(item._id, isNaN(value) || value < 1 ? 1 : value);
  };

  return (
    <div className="mb-4">
      <div className="w-full flex gap-4 p-4 bg-white rounded-xl shadow-md">
        {/* Product Image */}
        <div className="flex items-center">
          <img
            src={item.image[0]} // Assuming product has images
            alt={item.name}
            className="max-w-[100px] object-contain"
          />
        </div>

        {/* Product Info */}
        <div className="w-full sm:w-2/3 flex flex-col justify-between">
          <div>
            <p className="text-xl font-semibold mb-1">{item.name}</p>
            <p className="text-lg text-gray-700 mb-4">
              ₹{item.price.toLocaleString()}
            </p>
          </div>

          <div className="flex items-center gap-3">
            <input
              type="number"
              className="w-20 border border-gray-400 rounded px-2 py-1 text-center"
              value={item.quantity}
              onChange={handleInputChange}
              min={1}
            />
            <button
              className="bg-[#CC3014] text-white px-4 py-1 rounded hover:bg-red-700 transition"
              onClick={() => onRemove(item._id)}
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
