import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";
import ProductCart from "../components/ProductCart";
const Products = () => {
  const { products, searchQuery } = useContext(AppContext);
  const [filterProducts, setFilterProducts] = useState([]);
  useEffect(() => {
    if (searchQuery > 0) {
      setFilterProducts(
        products.filter((products) => {
          products.name.toLoweCase().include(searchQuery.toLoweCase());
        }),
      );
    } else {
      setFilterProducts(products);
    }
  }, [searchQuery, products]);
  return (
    <div className="mt-16">
      <h1 className="text-3xl lg:text-4xl font-medium">All Products</h1>
      <div className="my-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 items-center justify-center">
        {filterProducts
          .filter((products) => products.inStock)
          .map((products, index) => (
            <ProductCart key={index} products={products}></ProductCart>
          ))}
      </div>
    </div>
  );
};

export default Products;
