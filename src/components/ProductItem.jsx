import React from 'react';
import { Link } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import { useContext } from 'react';

const ProductItem = ({ id, image, name, price }) => {
  const { currency } = useContext(ShopContext);

  return (
    <Link to={`/product/${id}`} className="text-gray-800 cursor-pointer group">
      <div className="overflow-hidden">
        <img
          src={image[0]}
          alt={name}
          className="w-full group-hover:scale-105 transition-transform duration-300 ease-in-out"
        />
      </div>
      <p className="mt-2 text-sm">{name}</p>
      <p className="text-sm font-medium">
        {currency}
        {price}
      </p>
    </Link>
  );
};

export default ProductItem;
