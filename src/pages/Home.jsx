import React from "react";
import HeroSection from "../components/HeroSection";
import { useProductContext } from "../context/productcontext";
import Featured from "../components/Featured";
import Catagories from "../components/Catagories";

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
    </div>
  );
};

export default Home;
