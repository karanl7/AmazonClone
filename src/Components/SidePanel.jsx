import React from 'react';
import { useEffect } from 'react'

const SidePanel = ({onClose}) => {

    // Closes on outside Click
    useEffect(()=>{
        const handleClick = (e) => {
            if(e.target.id === 'overlay'){
                onClose();
            }
        };
        window.addEventListener('click', handleClick);
        return () => window,removeEventListener('click', handleClick);
        }, 
        [onClose]
    );

  return (

    <div 
        id='overlay'
        className="fixed inset-0  bg-opacity-50 z-40 flex">
        <div className="w-[300px] bg-amazonclone-background h-full shadow-md animate-slideIn p-4">
            <div className="flex justify-between items-center border-b pb-3">
                <h2 className="font-bold text-lg text-amazonclone">
                👤 Hello, Sign in
                </h2>
                    <button onClick={onClose} className="text-2xl text-gray-600 hover:text-black">
                        x
                    </button>
            </div>

            <div>
                <h3 className="pt-3 text-lg font-semibold">Trending</h3>
                <ul className="p-2 border-b">
                    <li className="p-2">Bestsellers</li>
                    <li className="p-2">New Releases</li>
                    <li className="p-2">Movers and Shakers</li>   
                </ul>
                <h3 className="pt-3 text-lg font-semibold">Shop by Category</h3>
                <ul className="p-2 border-b">
                    <li className="p-2">Mobiles, Computers</li>
                    <li className="p-2">TV, Appliances, Electronics</li>
                    <li className="p-2">Men's Fashion</li>
                    <li className="p-2">Women's Fashion</li>
                    <li className="p-2">See all</li>
                </ul>
                <h3 className="pt-3 text-lg font-semibold">Help & Settings</h3>
                <ul className="p-2">
                    <li className="p-2">Your Account</li>
                    <li className="p-2">Customer Service</li>
                    <li className="p-2">Sign in</li>
                </ul>
            </div>

        </div>
    </div>
  )
}

export default SidePanel;