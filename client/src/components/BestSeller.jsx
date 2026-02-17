import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import ProductCart from "./ProductCart";

const BestSeller = () => {
  const { products } = useContext(AppContext);
  return (
    <div className="mt-16">
      <p className="text-2xl font-medium md:text-3xl">Best Sellers</p>
      <div>
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
