import React from 'react';
import { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import { useState } from 'react';
import { useEffect } from 'react';
import ProductItem from './ProductItem';
import Title from './Title';

const LatestCollection = () => {
  const { products } = useContext(ShopContext);
  const [latestProducts, setLatestProducts] = useState([]);

  useEffect(() => {
    // Assuming the products are already sorted by date in the assets
    // We just take the first 10.
    setLatestProducts(products.slice(0, 10));
  }, [products]);

  return (
    <div id="collection" className="my-24">
      <div className="text-center mb-8">
        <Title text1="LATEST" text2="COLLECTION" />
        <p className="text-gray-500 mt-2">Discover our newest arrivals</p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {latestProducts.map((item) => (
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

export default LatestCollection;
