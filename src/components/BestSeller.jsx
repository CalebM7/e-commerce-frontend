import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from './Title';
import ProductItem from './ProductItem';

const BestSeller = () => {
  const { products } = useContext(ShopContext);
  const [bestSeller, setBestSeller] = useState([]);

  useEffect(() => {
    if (products) {
      const bestSellerProducts = products.filter(
        (item) => item.bestseller === true
      );
      setBestSeller(bestSellerProducts.slice(0, 5));
    }
  }, [products]);

  return (
    <div className="my-24">
      <div className="text-center mb-8">
        <Title text1="BEST" text2="SELLER" />
        <p className="text-gray-500 mt-2">Top picks from our collection</p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {bestSeller.map((item) => (
          <ProductItem
            key={item._id}
            id={item._id}
            image={item.image}
            name={item.name}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};

export default BestSeller;
