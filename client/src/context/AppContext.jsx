import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { dummyAddress, dummyProducts } from "../assets/assets";

export const AppContext = createContext(null);

const AppContextProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [isSeller, setIsSeller] = useState(null);
  const [showUserLogin, setShowUserLogin] = useState(false);
  const [products, setProducts] = useState([]);
  // fetch all products data
  const fetchProduct = async () => {
    setProducts(dummyProducts);
  };
  useEffect(() => {
    fetchProduct();
  }, []);
  const value = {
    navigate,
    user,
    setUser,
    isSeller,
    setIsSeller,
    showUserLogin,
    setShowUserLogin,
    products,
  };
  return <AppContext.Provider value={value}> {children}</AppContext.Provider>;
};
export default AppContextProvider;
