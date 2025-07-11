import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";

export const StoreContext = createContext(null);

export const StoreContextProvider = (props) => {
  const [cartItem, setCartItem] = useState({});

  // Add item to cart
  const addToCart = (itemId) => {
    setCartItem((prev) => ({
      ...prev,
      [itemId]: prev[itemId] ? prev[itemId] + 1 : 1,
    }));
  };

  // Remove item from cart
  const removeFromCart = (itemId) => {
    setCartItem((prev) => {
      const updatedCart = { ...prev };
      if (!updatedCart[itemId]) return updatedCart;

      if (updatedCart[itemId] === 1) {
        delete updatedCart[itemId];
      } else {
        updatedCart[itemId] -= 1;
      }

      return updatedCart;
    });
  };

  // Get total cart amount
  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const itemId in cartItem) {
      const quantity = cartItem[itemId];
      const item = food_list.find((product) => product._id === itemId);
      if (item) {
        totalAmount += item.price * quantity;
      }
    }
    return totalAmount;
  };

  useEffect(() => {
    console.log("Cart Items Updated:", cartItem);
  }, [cartItem]);

  const contextValue = {
    food_list,
    cartItem,
    setCartItem,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};
