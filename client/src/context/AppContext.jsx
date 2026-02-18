import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { dummyProducts } from "../assets/assets";
import toast from "react-hot-toast";
export const AppContext = createContext(null);

const AppContextProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [isSeller, setIsSeller] = useState(null);
  const [showUserLogin, setShowUserLogin] = useState(false);
  const [products, setProducts] = useState([]);
  const [cardItems, setCardItems] = useState({});

  // fetch all products data
  const fetchProduct = async () => {
    setProducts(dummyProducts);
  };
  // add product to cart
  const addToCart = (itemId) => {
    let cartData = structuredClone(cardItems);
    if (cartData[itemId]) {
      cartData[itemId] += 1;
    } else {
      cartData[itemId] = 1;
    }
    setCardItems(cartData);
    toast.success("add to cart");
  };
  //update cart item quantity
  const updateCartItem = (itemId, quantity) => {
    let cartData = structuredClone(cardItems);
    cartData[itemId] = quantity;
    setCardItems(cartData);
    toast.success("cart updated");
  };
  // total cart items
  const cartCount = () => {
    let totalCount = 0;
    for (const items in cardItems) {
      totalCount += cardItems[itemitemd];
    }
    return totalCount;
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
    addToCart,
    updateCartItem,
    cartCount,
  };
  return <AppContext.Provider value={value}> {children}</AppContext.Provider>;
};
export default AppContextProvider;
