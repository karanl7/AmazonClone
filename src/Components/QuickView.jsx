import React from 'react';
import {Link} from "react-router-dom";

const QuickView = ({product}) => {
  return (
    <div className="absolute top-0 right-0 left-28 -translate-x-4 ml-2 w-48 bg-white border shadow-md p-2 rounded z-50 ">
      <img src={product.img} alt={product.name}
       className="w-full h-24 object-contain"
      />
      <p className="text-sm font-semibold mt-1">
        {product.name}
      </p>
      <Link
       to={`/product/${product.id}`}
       className="text-sm text-blue-600 hover:underline mt-2 inline-block"
      >
        View Details
      </Link>
    </div>
  );
};

export default QuickView;