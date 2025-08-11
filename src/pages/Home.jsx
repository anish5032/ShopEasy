import React from "react";
import HeroSection from "../components/HeroSection";
import { useProductContext } from "../context/productcontext";
import Featured from "../components/BestSellers";
import Catagories from "../components/Catagories";
import BestSellers from "../components/BestSellers";

const Home = () => {
  const data = {
    name: "ShopEasy"
  }

  const {name}=useProductContext()

  return (
    <div>
      {name}
      <HeroSection mydata={data}/>
      <Catagories/>
      <BestSellers/>
    </div>
  );
};

export default Home;
