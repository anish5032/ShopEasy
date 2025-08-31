import React from "react";
import { useProductContext } from "../context/productcontext";
import { Link,NavLink } from "react-router-dom";
import ProductItem from "./ProductItem";

const BestSellers = () => {
  const { bestsellers } = useProductContext();

  return (
    <div className="bg-gray-200 mt-10 p-5">
      <h1 className="text-xl">Best Sellers</h1>

      <div className="cards flex flex-wrap gap-8 justify-center">
        {bestsellers.map((prod,index) => {
          return <Link  to={`/singleProd/${prod._id}`} key={prod._id}>
           <ProductItem key={index} name={prod.name} img={prod.image[0]} desc={prod.short_desc} price={prod.price}/>
           </Link>
        })}
      </div>
    </div>
  );
};

export default BestSellers;
