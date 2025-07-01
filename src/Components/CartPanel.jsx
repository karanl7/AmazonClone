import React from 'react'

const CartPanel = ({ cartItems, onClose, onRemove }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-40 flex justify-end">
      <div className="w-[300px] bg-white h-full shadow-md p-4 animate-slideInRight">
        <div className="flex justify-between items-center border-b pb-3">
          <h2 className="font-bold text-lg">Your Cart</h2>
          <button onClick={onClose} className="text-2xl text-gray-600 hover:text-black">×</button>
        </div>

        {cartItems.length === 0 ? (
          <p className="mt-6 text-gray-500">Your cart is empty.</p>
        ) : (
          <ul className="pt-4 space-y-3">
            {cartItems.map((item, index) => (
              <li key={index} className="flex justify-between items-center border-b pb-2">
                <span>{item.name}</span>
                <button
                  onClick={() => onRemove(index)}
                  className="text-red-500 hover:text-red-700 text-sm"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default CartPanel;