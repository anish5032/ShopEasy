import React, { useState, useEffect } from "react";
import { useProductContext } from "../context/productcontext";
import ProductItem from "../components/ProductItem";
import { Link } from "react-router-dom";

const Collection = () => {
  const { prods } = useProductContext();
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [sortType, setSortType] = useState("");

  const toggleCategory = (e) => {
    const value = e.target.value;
    setCategory((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };

  // Combined filtering and sorting
  useEffect(() => {
    let updatedProducts = [...prods];

    // Filter by category
    if (category.length > 0) {
      updatedProducts = updatedProducts.filter((item) =>
        category.includes(item.category)
      );
    }

    // Sort
    switch (sortType) {
      case "low-high":
        updatedProducts.sort((a, b) => a.price - b.price);
        break;
      case "high-low":
        updatedProducts.sort((a, b) => b.price - a.price);
        break;
      default:
        break;
    }

    setFilterProducts(updatedProducts);
  }, [prods, category, sortType]);

  return (
    <div className="flex gap-10 pt-10 border-t">
      {/* Filter Options */}
      <div className="min-w-60 p-3 flex gap-3 flex-col border-r border-black">
        <div>
          <p className="my-2 text-xl flex items-center cursor-pointer gap-2">
            FILTERS
          </p>

          {/* Category Filter */}
          <div className="border border-gray-300 pl-5 py-3 mt-6 block">
            <p className="mb-3 text-sm font-medium">CATEGORIES</p>
            <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
              {["ELECTRONIC", "FASHION", "HOME"].map((cat) => (
                <label key={cat} className="flex gap-2 cursor-pointer">
                  <input
                    className="w-3 cursor-pointer"
                    type="checkbox"
                    value={cat}
                    onChange={toggleCategory}
                    checked={category.includes(cat)}
                  />
                  {cat}
                </label>
              ))}
            </div>
          </div>
        </div>

        <div className="range">
          <p>Price Range</p>
          <input className="w-55" type="range" name="price" id="price-range" disabled />
        </div>

        <div className="ratings">
          <p>Ratings</p>
          {["4nUp", "3nUp", "2nUp"].map((rating) => (
            <label key={rating} className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                className="w-3 cursor-pointer"
                value={rating}
                disabled
              />
              {rating[0]} Stars & Up
            </label>
          ))}
        </div>

        <div className="sort flex flex-col gap-1">
          <p>Sort By</p>
          <button
            onClick={() => setSortType("low-high")}
            className="rounded-full text-gray-600 border-gray-400 border p-1 cursor-pointer"
          >
            Price: Low to High
          </button>
          <button
            onClick={() => setSortType("high-low")}
            className="rounded-full text-gray-600 border-gray-400 border p-1 cursor-pointer"
          >
            Price: High to Low
          </button>
          <button
            onClick={() => setSortType("")}
            className="rounded-full text-gray-600 border-gray-400 border p-1 cursor-pointer"
          >
            Rating
          </button>
        </div>
      </div>

      {/* Product Listing */}
      <div className="flex flex-col flex-1">
        <div className="flex justify-between mb-4">
          <div className="title flex gap-2">
            <p className="text-2xl font-normal text-gray-500">All</p>
            <p className="text-2xl font-normal text-black">Collections</p>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-12">
          {filterProducts.length > 0 ? (
            filterProducts.map((prod) => (
              <Link to={`/singleProd/${prod._id}`} key={prod._id}>
                <ProductItem
                  name={prod.name}
                  img={prod.image[0]}
                  desc={prod.short_desc}
                  price={prod.price}
                />
              </Link>
            ))
          ) : (
            <p className="text-gray-500 col-span-full">No products found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Collection;
