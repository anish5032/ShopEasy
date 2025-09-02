import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useProductContext } from "../context/productcontext";

const Singleprod = () => {
  const { id } = useParams();
  const { prods, addToCart } = useProductContext(); // ✅ use helper instead of raw cartItems
  const [product, setProduct] = useState(null);
  const [image, setImage] = useState("");

  useEffect(() => {
    const foundProduct = prods.find((p) => p._id === id);
    setProduct(foundProduct);

    if (foundProduct?.image?.length > 0) {
      setImage(foundProduct.image[0]);
    }
  }, [id, prods]);

  // ✅ Handle invalid product ID
  if (!product && prods.length > 0) {
    return (
      <div className="p-10 text-center text-lg text-red-500">
        Product not found.
      </div>
    );
  }

  if (!product) {
    return <div className="p-10 text-center text-lg">Loading...</div>;
  }

  return (
    <div className="p-10 flex flex-col md:flex-row gap-10 items-start justify-center bg-white">
      {/* Thumbnails */}
      <div className="flex md:flex-col gap-4">
        {product.image.map((imgUrl) => (
          <img
            key={imgUrl}
            src={imgUrl}
            alt="thumbnail"
            onClick={() => setImage(imgUrl)}
            className={`w-16 h-16 object-cover rounded cursor-pointer border-2 ${
              image === imgUrl ? "border-red-600" : "border-gray-300"
            } hover:border-red-600 transition`}
          />
        ))}
      </div>

      {/* Main Image */}
      <div className="w-full md:w-[500px] max-w-full">
        <img
          src={image}
          alt={product.name}
          className="w-full rounded-lg shadow-md object-cover"
        />
      </div>

      {/* Product Info */}
      <div className="w-full md:w-1/2 flex flex-col gap-6">
        <h1 className="text-3xl font-semibold">{product.name}</h1>
        <p className="text-gray-700">{product.description}</p>

        {product.specifications?.length > 0 && (
          <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
            <p className="font-semibold mb-2">Specifications:</p>
            <ul className="list-disc list-inside text-sm text-gray-600">
              {product.specifications.map((spec, idx) => (
                <li key={idx}>{spec}</li>
              ))}
            </ul>
          </div>
        )}

        <p className="text-2xl font-bold text-red-600">
          ₹{product.price.toLocaleString()}
        </p>

        <button
          onClick={() => addToCart(product)} // ✅ just call context function
          className="bg-red-600 text-white py-2 px-6 rounded-full w-fit hover:bg-red-700 transition"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Singleprod;
