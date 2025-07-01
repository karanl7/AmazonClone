import React from 'react';
import { useEffect } from 'react';

const CartPanel = ({onClose, cartItems, onRemove}) => {
    useEffect(()=> {
        const handleClick = (e) =>{
            if (e.target.id === 'cart-overlay'){
                onClose();
            }
        };
        window.addEventListener('click', handleClick);
        return () => window.removeEventListener('click', handleClick);
    }, 
    [onClose]
);
  return (
    <div id="cart-overlay" className="fixed insert-0 bg-black bg-opacity-50 z-40 flex justify-end">
        <div className="w-[300px] bg-amazonclone-background h-full shadow-md z-50 animate-slideInRight p-4">
            <div className="flex justify-between items-center border-b pb-3">
                <h2 className="font-bold text-lg">
                    Your Cart
                </h2>
                <button onClick={onClose} className="text-2xl text-grey-600 hover:text-black">
                    x
                </button>
            </div>
            
            {cartItems.length === 0 ?(
                <p className="mt-6 text-grey-500">Your Cart is Empty</p>
            ): (
                <ul className="pt-4 space-y-3">
                    {cartItems.map((items, index)=> (
                        <li key={index} className="flex justify-between items-center border-b pb-2">
                            <span>{item.name}</span>
                            <button onClick={()=> onRemove(index)}
                                className="text-red-500 hover:text-red-700 text-sm">
                                Remove
                            </button>

                        </li>
                    ))}
                </ul>
            )}

        </div>

    </div>
  )
};

export default CartPanel;