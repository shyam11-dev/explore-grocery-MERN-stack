import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { assets } from "../assets/assets";

const ProductCart = ({ products }) => {
  const { navigate } = useContext(AppContext);
  return (
    products && (
      <div className="border border-gray-500/20 rounded:md md:px-4 px-3 py-2 bg-white min-w-56 max-w-56 w-full">
        <div className="group cursor-pointer flex items-center justify-center px-2">
          <img
            src={products.image}
            className="group-hover:scale-105 transition max-w-26 md:max-w-36"
            alt=""
          />
        </div>
        <div className="text-gray-500/60 text-sm">
          <p>{products.category}</p>
          <p className="text-gray-700 font-medium text-lg truncate w-full">
            {products.name}
          </p>
          <div className="flex items-center gap-0.5">
            {Array(5)
              .fill("")
              .map((_, i) => (
                <img
                  key={i}
                  src={i < 4 ? assets.star_icon : assets.star_dull_icon}
                  alt="rating"
                  className="w-3 md:3.5"
                />
              ))}
            <p>(4)</p>
          </div>
          <div className="flex items-end justify-between mt-3">
            <p className="md:text-xl text-base font-medium text-indigo-500">
              ${products.offerPrice}{" "}
              <span className="text-gray-500/60 md:text-sm text-xs line-through">
                ${products.price}
              </span>
            </p>
          </div>
        </div>
      </div>
    )
  );
};

export default ProductCart;
