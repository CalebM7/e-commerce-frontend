import React from 'react';

const Title = ({ text1, text2 }) => {
  return (
    <div className="inline-flex items-center gap-4">
      <p className="text-3xl font-plata text-gray-500">
        {text1} <span className="text-gray-800">{text2}</span>
      </p>
      <hr className="w-32 h-px bg-gray-800 border-none" />
    </div>
  );
};

export default Title;
