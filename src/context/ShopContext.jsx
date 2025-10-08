import React, { createContext, useState } from 'react';
import { products } from '../assets/frontend_assets/assets';
import { toast } from 'react-toastify';

export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({});

  const addToCart = (itemId, size) => {
    if (!size) {
      toast.error('Please select a size');
      return;
    }

    setCartItems((prev) => {
      const newCart = { ...prev };
      if (!newCart[itemId]) {
        newCart[itemId] = {};
      }
      if (!newCart[itemId][size]) {
        newCart[itemId][size] = 0;
      }
      newCart[itemId][size] += 1;
      toast.success('Added to cart');
      return newCart;
    });
  };

  const removeFromCart = (itemId, size) => {
    setCartItems((prev) => {
      const newCart = { ...prev };
      if (newCart[itemId] && newCart[itemId][size]) {
        newCart[itemId][size] -= 1;
        if (newCart[itemId][size] <= 0) {
          delete newCart[itemId][size];
        }
        if (Object.keys(newCart[itemId]).length === 0) {
          delete newCart[itemId];
        }
      }
      return newCart;
    });
  };

  const getCartTotal = () => {
    let totalAmount = 0;
    for (const itemId in cartItems) {
      const product = products.find((p) => p._id === itemId);
      if (product) {
        for (const size in cartItems[itemId]) {
          totalAmount += product.price * cartItems[itemId][size];
        }
      }
    }
    return totalAmount;
  };
  
  const getCartCount = () => {
    let totalCount = 0;
    for (const itemId in cartItems) {
        for (const size in cartItems[itemId]) {
            totalCount += cartItems[itemId][size]
        }
    }
    return totalCount
  }

  const contextValue = {
    products,
    cartItems,
    addToCart,
    removeFromCart,
    getCartTotal,
    getCartCount,
    currency: '$',
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
