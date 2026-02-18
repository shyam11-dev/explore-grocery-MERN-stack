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
  const [searchQuery, setSearchQuery] = useState({});

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
    toast.success("Added to Cart");
  };
  //update cart item quantity
  const updateCartItem = (itemId, quantity) => {
    let cartData = structuredClone(cardItems);
    cartData[itemId] = quantity;
    setCardItems(cartData);
    toast.success("Cart Updated");
  };
  // total cart items
  const cartCount = () => {
    let totalCount = 0;
    for (const items in cardItems) {
      totalCount += cardItems[items];
    }
    return totalCount;
  };
  // total cart amount
  const totalCartAmount = () => {
    let totalAmount = 0;
    for (const items in cardItems) {
      let itemInfo = products.find((products) => products._id === items);
      if (cardItems[items] > 0) {
        totalAmount += cardItems[items] * itemInfo.offerPrice;
      }
    }
    return Math.floor(totalAmount * 1000) / 100;
  };
  // remove product from cart
  const removeFromCart = (itemId) => {
    let cartData = structuredClone(cardItems);

    if (cartData[itemId]) {
      cartData[itemId] -= 1; // ✅ Proper decrement

      if (cartData[itemId] === 0) {
        delete cartData[itemId];
      }

      toast.success("Remove From Cart");
      setCardItems(cartData);
    }
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
    totalCartAmount,
    removeFromCart,
    cardItems,
    searchQuery,
    setSearchQuery,
  };
  return <AppContext.Provider value={value}> {children}</AppContext.Provider>;
};
export default AppContextProvider;
