import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/frontend_assets/assets';

const Cart = () => {
  const { products, cartItems, removeFromCart, getCartTotal } = useContext(ShopContext);
  const navigate = useNavigate();

  return (
    <div className="my-24">
      <h1 className="text-3xl font-bold mb-8">Your Shopping Cart</h1>
      
      <div className="grid grid-cols-[1fr_3fr_1fr_1fr_1fr_0.5fr] items-center gap-4 font-semibold text-gray-700 mb-4 hidden md:grid">
        <p>Image</p>
        <p>Title</p>
        <p>Price</p>
        <p>Size</p>
        <p>Quantity</p>
        <p>Remove</p>
      </div>
      <hr className="hidden md:block mb-4"/>

      {Object.keys(cartItems).length === 0 ? (
        <p className="text-center my-16">Your cart is empty.</p>
      ) : (
        products.map(product => {
          if (cartItems[product._id]) {
            return Object.keys(cartItems[product._id]).map(size => (
              <div key={product._id + size}>
                <div className="grid grid-cols-2 md:grid-cols-[1fr_3fr_1fr_1fr_1fr_0.5fr] items-center gap-4 my-4">
                  <img src={product.image[0]} alt="product" className="w-20 h-20 object-cover" />
                  <p>{product.name}</p>
                  <p>${product.price}</p>
                  <p>{size}</p>
                  <p className="border w-12 text-center py-1">{cartItems[product._id][size]}</p>
                  <img 
                    src={assets.bin_icon} 
                    alt="remove" 
                    className="w-5 cursor-pointer mx-auto"
                    onClick={() => removeFromCart(product._id, size)}
                  />
                </div>
                <hr />
              </div>
            ));
          }
          return null;
        })
      )}

      <div className="mt-16 flex flex-col md:flex-row justify-between gap-16">
        <div className="flex-1">
          <h2 className="text-2xl font-bold mb-4">Cart Totals</h2>
          <div className="flex justify-between py-3 text-gray-600">
            <p>Subtotal</p>
            <p>${getCartTotal()}</p>
          </div>
          <hr />
          <div className="flex justify-between py-3 text-gray-600">
            <p>Shipping Fee</p>
            <p>${getCartTotal() > 0 ? 5 : 0}</p>
          </div>
          <hr />
          <div className="flex justify-between py-3 font-bold text-lg">
            <p>Total</p>
            <p>${getCartTotal() > 0 ? getCartTotal() + 5 : 0}</p>
          </div>
          <button onClick={() => navigate('/place-order')} className="bg-black text-white py-3 px-6 mt-4 w-full hover:bg-gray-800 transition-colors">PROCEED TO CHECKOUT</button>
        </div>
        <div className="flex-1">
          <p className="text-gray-600 mb-2">If you have a promo code, enter it here:</p>
          <div className="flex">
            <input type="text" placeholder="Promo code" className="flex-1 p-3 border border-gray-300 outline-none" />
            <button className="bg-gray-800 text-white px-8 hover:bg-gray-700 transition-colors">Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;