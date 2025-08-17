import React from "react";
import { useProductContext } from "../context/productcontext";
import { NavLink } from "react-router-dom";
import ProductItem from "./ProductItem";

const BestSellers = () => {
  const { bestsellers } = useProductContext();
  console.log(bestsellers);
  

  return (
    <div className="bg-gray-200 mt-10 p-5">
      <h1 className="text-xl">Best Sellers</h1>

      <div className="cards flex flex-wrap gap-8 justify-center">
        {bestsellers.map((prod,index) => {
           return <ProductItem key={index} name={prod.name} img={prod.image[0]} desc={prod.short_desc} price={prod.price}/>
        })}
      </div>
    </div>
  );
};

export default BestSellers;
