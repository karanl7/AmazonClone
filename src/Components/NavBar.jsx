import {ShoppingCartIcon} from '@heroicons/react/24/outline';
import { Search } from './';
import { SidePanel, CartPanel, LoginPage } from './';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const NavBar = ({cartItems, removeFromCart,}) => {
    
    const[openPanel, setOpenPanel]= useState(false);
    const [showCart, setShowCart] = useState(false);

  return (
    <header className='fixed top-0 left-0 w-full z-50 bg-amazonclone'>
        <div className="flex bg-amazonclone text-white h-[60px] ">
            {/* Left */}
            <div className="flex items-center m-2 md:m-4">
                <Link to={"/"}>
                <img className="h-[25px] md:h-[35px] w-[70px] md:w-[100px] m-1 md:m-2" src='/images/amazon.png'/>
                </Link>
                <div className="hidden md:block pr-4 pl-2">
                    <div className="text-xs xl:text-sm">Deliver to</div>
                    <div className="text-sm xl:text-base font-bold">India</div>
                </div>
            </div>
            {/* Middle */}
            <div className="flex grow relative items-center">
                <Search />
            </div>
            {/* Right */}
            <div className="flex items-center m-2 md:m-4">
                <div className="hidden lg:block pr-4 pl-2">
                    <Link to={`/login`} className="text-xs xl:text-sm text-white hover:underline font-bold">
                    Hello, Sign in</Link>
                    <div className="text-sm xl:text-base font-bold">Accounts & Lists</div>
                </div>
                <div className="hidden lg:block pr-4 pl-2">
                    <div className="text-xs xl:text-sm">Returns</div>
                    <div className="text-sm xl:text-base font-bold">& Orders</div>
                </div>
                <button className="flex items-center gap-1 bg-yellow-400 text-black font-bold px-2 md:px-3 py-1 rounded hover:bg-yellow-500 text-xs md:text-sm"
                        onClick={() => setShowCart(true)}
                >
                    <ShoppingCartIcon className="h-[18px] md:h-[24px]"/>
                    <span className="hidden sm:inline">Cart</span> ({cartItems.length})
                </button>

            </div>

        </div>
        <div className="flex bg-amazonclone-light-blue text-white space-x-2 md:space-x-3 text-xs md:text-sm xl:text-m p-2 pl-3 md:pl-6">
            <button onClick={()=> setOpenPanel(true)} className="font-bold">
                ☰ All
            </button>
            <div className="hidden sm:block">Today's Deals</div>
            <div className="hidden md:block">Customer Service</div>
            <div className="hidden lg:block">Registry</div>
            <div className="hidden lg:block">Gift Cards</div>
            <div className="hidden lg:block">Sell</div>
        </div>
        {openPanel && <SidePanel onClose={() => setOpenPanel(false)} />}
        {openPanel && <SidePanel onClose={()=> setOpenPanel(false)}/>}
            {showCart && (
                <CartPanel
                    cartItems={cartItems}
                    onClose={() => setShowCart(false)}
                    onRemove={removeFromCart}
                />
                )}
    </header>
  )
};

export default NavBar;