import React from "react";
import { useProductContext } from "../context/productcontext";
import { NavLink } from "react-router-dom";

const Featured = () => {
  const { featured } = useProductContext();

  return (
    <div className="bg-gray-200 mt-10 p-5">
      <div className="flex flex-col gap-4 p-5 max-w-6xl m-auto">
        <p>Check Now</p>
        <h4 className="font-medium text-xl">Our Featured Services</h4>

        <div className="cards flex gap-8 justify-center flex-wrap">
          {featured.length > 0 ? (
            featured.map((product) => (
              <NavLink key={product.id} to={`/singleprod/${product.id}`}>
                <div className="card relative flex flex-col gap-1 w-[250px] cursor-pointer shadow-lg p-2 bg-white rounded">
                  <img
                    width="250"
                    height="150"
                    src={product.image}
                    alt={product.name}
                    className="rounded hover:scale-95 duration-500"
                  />

                  <p className="catagory absolute right-3 top-4 bg-white text-gray-500 text-md rounded-xl px-1">
                    {product.category}
                  </p>

                  <div className="flex justify-between">
                    <p>{product.name}</p>
                    <p>₹{product.price}</p>
                  </div>
                </div>
              </NavLink>
            ))
          ) : (
            <p>Loading featured products...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Featured;
