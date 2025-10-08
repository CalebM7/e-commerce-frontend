import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from './Title';
import ProductItem from './ProductItem';

const RelatedProducts = ({ category, subcategory, currentProductId }) => {
  const { products } = useContext(ShopContext);
  const [related, setRelated] = useState([]);

  useEffect(() => {
    if (products.length > 0) {
      const filtered = products.filter(
        (p) =>
          p.category === category &&
          p.subcategory === subcategory &&
          p._id !== currentProductId
      );
      setRelated(filtered.slice(0, 5));
    }
  }, [products, category, subcategory, currentProductId]);

  if (related.length === 0) {
    return null;
  }

  return (
    <div className="my-24">
      <div className="text-center">
        <Title text1="RELATED" text2="PRODUCTS" />
      </div>
      <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {related.map((item) => (
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

export default RelatedProducts;
