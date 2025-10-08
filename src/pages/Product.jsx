import React, { useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import RelatedProducts from '../components/RelatedProducts';
import { assets } from '../assets/frontend_assets/assets';

const Product = () => {
  const { products, addToCart } = useContext(ShopContext);
  const { productId } = useParams();
  const [productData, setProductData] = useState(null);
  const [selectedImg, setSelectedImg] = useState('');
  const [selectedSize, setSelectedSize] = useState('');
  const [showDescription, setShowDescription] = useState(true);

  useEffect(() => {
    if (products.length > 0) {
      const foundProduct = products.find((p) => p._id === productId);
      if (foundProduct) {
        setProductData(foundProduct);
        setSelectedImg(foundProduct.image[0]);
      }
    }
  }, [products, productId]);

  const handleAddToCart = () => {
    addToCart(productId, selectedSize);
  };

  if (!productData) {
    return <div className="text-center my-40">Loading...</div>;
  }

  return (
    <div className="my-24">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Image Gallery */}
        <div className="flex-1 flex flex-col-reverse md:flex-row gap-4">
          <div className="flex md:flex-col gap-4 overflow-x-auto">
            {productData.image.map((img, i) => (
              <img
                key={i}
                src={img}
                alt="thumbnail"
                className={`w-24 h-24 object-cover cursor-pointer ${
                  selectedImg === img ? 'ring-2 ring-orange-500' : ''
                }`}
                onClick={() => setSelectedImg(img)}
              />
            ))}
          </div>
          <div className="flex-1">
            <img
              src={selectedImg}
              alt="main product"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        {/* Product Info */}
        <div className="flex-1 flex flex-col">
          <h1 className="text-3xl font-plata font-bold">{productData.name}</h1>
          <div className="flex items-center gap-2 my-4 text-sm">
            <div className="flex">
              <img src={assets.star_icon} alt="" className="w-4" />
              <img src={assets.star_icon} alt="" className="w-4" />
              <img src={assets.star_icon} alt="" className="w-4" />
              <img src={assets.star_icon} alt="" className="w-4" />
              <img src={assets.star_dull_icon} alt="" className="w-4" />
            </div>
            <p>(122)</p>
          </div>
          <p className="text-2xl font-semibold my-4">${productData.price}</p>
          <p className="text-gray-600 mb-6 text-sm leading-relaxed">
            {productData.description}
          </p>
          <div className="mb-6">
            <p className="font-medium mb-2">Select Size:</p>
            <div className="flex gap-2 flex-wrap">
              {productData.sizes.map((size) => (
                <button
                  key={size}
                  className={`border px-4 py-2 text-sm ${
                    selectedSize === size
                      ? 'border-orange-500 bg-orange-50'
                      : 'border-gray-300 bg-white'
                  }`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
          <button
            onClick={handleAddToCart}
            className="bg-black text-white py-3 px-8 w-full md:w-auto hover:bg-gray-800 transition-colors"
          >
            ADD TO CART
          </button>
          <hr className="my-6" />
          <div className="text-xs text-gray-600 flex flex-col gap-2">
            <p>• 100% Original product.</p>
            <p>• Cash on delivery is available on this product.</p>
            <p>• Easy return and exchange policy within 7 days.</p>
          </div>
        </div>
      </div>

      {/* Description & Reviews */}
      <div className="my-16">
        <div className="flex border-b">
          <button
            className={`px-6 py-2 text-sm ${
              showDescription
                ? 'border-b-2 border-black font-semibold'
                : 'text-gray-500'
            }`}
            onClick={() => setShowDescription(true)}
          >
            Description
          </button>
          <button
            className={`px-6 py-2 text-sm ${
              !showDescription
                ? 'border-b-2 border-black font-semibold'
                : 'text-gray-500'
            }`}
            onClick={() => setShowDescription(false)}
          >
            Reviews (122)
          </button>
        </div>
        <div className="py-6 text-sm text-gray-600 leading-relaxed">
          {showDescription ? (
            <div>
              <p>
                An e-commerce website is an online platform that facilitates the
                buying and selling of products or services over the internet. It
                serves as a virtual marketplace where businesses and individuals
                can showcase their products, interact with customers, and
                conduct transactions without the need for a physical presence.
              </p>
              <p className="mt-4">
                E-commerce websites typically display products or services along
                with detailed descriptions, images, prices, and any available
                variations (e.g., sizes, colors). Each product usually has its
                own dedicated page with relevant information.
              </p>
            </div>
          ) : (
            <p>No reviews yet.</p>
          )}
        </div>
      </div>

      <RelatedProducts
        category={productData.category}
        subcategory={productData.subcategory}
        currentProductId={productData._id}
      />
    </div>
  );
};

export default Product;