import React, { createContext } from 'react';
import { products } from '../assets/frontend_assets/assets';

export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
  const currency = '$';
  const contextValue = {
    products,
    currency,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;