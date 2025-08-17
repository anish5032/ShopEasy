import React, { useContext, useEffect, useState } from "react";
import { useProductContext } from "../context/productcontext";
import ProductItem from "../components/ProductItem";

const Collection = () => {
  const { prods } = useProductContext();
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [sortType, setSortType] = useState();

  const togglecategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setCategory((prev) => [...prev, e.target.value]);
    }
  };

  const applyFilter = () => {
    let prodsCopy = prods.slice();

    if (category.length > 0) {
      prodsCopy = prodsCopy.filter((item) => category.includes(item.category));
    }
    setFilterProducts(prodsCopy);
  };

  const sortProduct = () => {
    let fpCopy = filterProducts.slice();
    switch (sortType) {
      case "low-high":
        setFilterProducts(fpCopy.sort((a, b) => a.price - b.price));
        break;

      case "high-low":
        setFilterProducts(fpCopy.sort((a, b) => b.price - a.price));

      default:
        
        break;
    }
  };

  useEffect(() => {
    setFilterProducts(prods);
  }, []);

  useEffect(() => {
    applyFilter();
  }, [category]);

  useEffect(() => {
    sortProduct();
  }, [sortType]);

  return (
    <div className="flex gap-10 pt-10 border-t">
      {/* Filter Options */}
      <div className="min-w-60 p-3 flex gap-3 flex-col border-r border-black">
        <div>
          <p className="my-2 text-xl flex items-center cursor-pointer gap-2">
            FILTERS
          </p>
          {/* category filter */}
          <div className="border border-gray-300 pl-5 py-3 mt-6 block">
            <p className="mb-3 text-sm font-medium">CATEGORIES</p>
            <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
              <p className="flex gap-2">
                <input
                  className="w-3 cursor-pointer"
                  type="checkbox"
                  name=""
                  id=""
                  value={"ELECTRONIC"}
                  onChange={togglecategory}
                />{" "}
                ELECTRONIC
              </p>

              <p className="flex gap-2">
                <input
                  className="w-3 cursor-pointer"
                  type="checkbox"
                  name=""
                  id=""
                  value={"FASHION"}
                  onChange={togglecategory}
                />{" "}
                FASHION
              </p>

              <p className="flex gap-2">
                <input
                  className="w-3 cursor-pointer"
                  type="checkbox"
                  name=""
                  id=""
                  value={"HOME"}
                  onChange={togglecategory}
                />{" "}
                HOME
              </p>
            </div>
          </div>
        </div>

        <div className="range">
          <p>Price Range</p>
          <input className="w-55" type="range" name="" id="" />
        </div>

        <div className="ratings">
          <p>Ratings</p>
          <p className="flex items-center gap-2">
            <input
              type="checkbox"
              className="w-3 cursor-pointer"
              name=""
              id=""
              value={"4nUp"}
            />{" "}
            4 Stars & Up
          </p>
          <p className="flex items-center gap-2">
            <input
              type="checkbox"
              className="w-3 cursor-pointer"
              name=""
              id=""
              value={"3nUp"}
            />{" "}
            3 Stars & Up
          </p>
          <p className="flex items-center gap-2">
            <input
              type="checkbox"
              className="w-3 cursor-pointer"
              name=""
              id=""
              value={"2nUp"}
            />{" "}
            2 Stars & Up
          </p>
        </div>

        <div className="sort flex flex-col gap-1">
          <p>Sort By</p>
          <button
            onClick={()=>setSortType("low-high")}
            className="rounded-full text-gray-600 border-gray-400 border p-1 cursor-pointer"
          >
            Price: Low to High
          </button>
          <button
            onClick={()=>setSortType("high-low")}
            className="rounded-full text-gray-600 border-gray-400 border p-1 cursor-pointer"
          >
            Price: High to Low
          </button>
          <button
            onClick={()=>setSortType("")}
            className="rounded-full text-gray-600 border-gray-400 border p-1 cursor-pointer"
          >
            Rating
          </button>
        </div>
      </div>

      {/* right side */}
      <div className="flex">
        <div className="flex justify-between mb-4">
          <div className="title flex gap-2">
            <p className="text-2xl font-normal text-gray-500">All</p>
            <p className="text-2xl font-normal text-black">Collections</p>
          </div>
        </div>

        {/* map product */}
        <div className="grid grid-cols-4 gap-3 h-fit mt-12">
          {filterProducts.map((prod, index) => {
            return (
              <ProductItem
                key={index}
                name={prod.name}
                img={prod.image[0]}
                desc={prod.short_desc}
                price={prod.price}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Collection;
