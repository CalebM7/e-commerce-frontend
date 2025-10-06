import React from 'react';

const NewsLetterBox = () => {
  const onSubmitHandler = (e) => {
    e.preventDefault();
    alert('Thank you for subscribing');
  };

  return (
        <div className="my-24 text-center">
      <p className="text-2xl font-medium text-gray-700">
        Subscribe now and get 20% off
      </p>
      <p className="text-gray-500 mt-2">
        Be the first to know about our new arrivals and exclusive offers.
      </p>
      <form
        onSubmit={onSubmitHandler}
        className="mt-6 mx-auto flex w-full max-w-lg border border-gray-300"
      >
        <input
          type="email"
          placeholder="Enter your email"
          className="flex-1 p-3 outline-none"
          required
        />
        <button type="submit" className="bg-black text-white px-6 py-3 text-sm">
          SUBSCRIBE
        </button>
      </form>
    </div>
  );
};

export default NewsLetterBox;
