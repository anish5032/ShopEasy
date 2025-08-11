import React from "react";

const ProductItem = ({ img, name, desc, price }) => {
  return (
    <div className="card flex flex-col gap-2 p-3 shadow-2xl hover:scale-105 duration-500 cursor-pointer">
      <img className="w-[200px] h-[200px] " src={img} alt={name} />
      <p className="text-lg">{name}</p>
      <p>{desc}</p>
      <p>₹{price}</p>
    </div>
  );
};

export default ProductItem;
