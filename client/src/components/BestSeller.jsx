import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import ProductCart from "./ProductCart";

const BestSeller = () => {
  const { products } = useContext(AppContext);
  return (
    <div className="mt-16">
      <p className="text-2xl font-medium md:text-3xl">Best Sellers</p>
      <div className="my-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 items-center justify-center">
        {products
          .filter((products) => products.inStock)
          .slice(0, 5)
          .map((products, index) => (
            <ProductCart key={index} products={products}></ProductCart>
          ))}
      </div>
    </div>
  );
};

export default BestSeller;
