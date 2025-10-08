import React, { useContext, useState, useEffect } from 'react';
import { ShopContext } from '../context/ShopContext';
import ProductItem from '../components/ProductItem';
import Title from '../components/Title';
import { assets } from '../assets/frontend_assets/assets';

const Collection = () => {
  const { products, search } = useContext(ShopContext);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subcategory, setSubcategory] = useState([]);
  const [sortType, setSortType] = useState('relevant');
  const [showFilter, setShowFilter] = useState(false);

  const toggleCategory = (e) => {
    const value = e.target.value;
    setCategory((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };

  const toggleSubcategory = (e) => {
    const value = e.target.value;
    setSubcategory((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };

  useEffect(() => {
    let productsCopy = [...products];

    if (category.length > 0) {
      productsCopy = productsCopy.filter((p) => category.includes(p.category));
    }

    if (subcategory.length > 0) {
      productsCopy = productsCopy.filter((p) =>
        subcategory.includes(p.subCategory)
      );
    }

    if (search) {
      productsCopy = productsCopy.filter((p) =>
        p.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (sortType === 'low-high') {
      productsCopy.sort((a, b) => a.price - b.price);
    } else if (sortType === 'high-low') {
      productsCopy.sort((a, b) => b.price - a.price);
    }

    setFilteredProducts(productsCopy);
  }, [products, category, subcategory, search, sortType]);

  return (
    <div className="flex flex-col md:flex-row gap-8 my-24">
      <div className="w-full md:w-1/4">
        <div
          className="flex justify-between items-center md:hidden mb-4 cursor-pointer"
          onClick={() => setShowFilter(!showFilter)}
        >
          <h2 className="text-lg font-semibold">Filters</h2>
          <img
            src={assets.dropdown_icon}
            alt="toggle filters"
            className={`w-4 transition-transform ${
              showFilter ? 'rotate-180' : ''
            }`}
          />
        </div>
        <div className={`${showFilter ? 'block' : 'hidden'} md:block`}>
          <div className="mb-6">
            <h3 className="font-semibold mb-3 text-lg">Categories</h3>
            <div className="flex flex-col gap-2 text-gray-600">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  value="Men"
                  onChange={toggleCategory}
                  className="h-4 w-4"
                />{' '}
                Men
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  value="Women"
                  onChange={toggleCategory}
                  className="h-4 w-4"
                />{' '}
                Women
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  value="Kids"
                  onChange={toggleCategory}
                  className="h-4 w-4"
                />{' '}
                Kids
              </label>
            </div>
          </div>
          <div>
            <h3 className="font-semibold mb-3 text-lg">Type</h3>
            <div className="flex flex-col gap-2 text-gray-600">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  value="Topwear"
                  onChange={toggleSubcategory}
                  className="h-4 w-4"
                />{' '}
                Top Wear
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  value="Bottomwear"
                  onChange={toggleSubcategory}
                  className="h-4 w-4"
                />{' '}
                Bottom Wear
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  value="Winterwear"
                  onChange={toggleSubcategory}
                  className="h-4 w-4"
                />{' '}
                Winter Wear
              </label>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full md:w-3/4">
        <div className="flex justify-between items-center mb-6">
          <Title text1="ALL" text2="COLLECTIONS" />
          <select
            onChange={(e) => setSortType(e.target.value)}
            value={sortType}
            className="border p-2 rounded-md"
          >
            <option value="relevant">Sort by: Relevant</option>
            <option value="low-high">Price: Low to High</option>
            <option value="high-low">Price: High to Low</option>
          </select>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredProducts.map((item) => (
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
    </div>
  );
};

export default Collection;
