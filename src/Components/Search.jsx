import {MagnifyingGlassIcon} from '@heroicons/react/24/outline'

const Search = () => {
  return (
    <div className="w-[100%]">
        <div className="flex items-center h-9.5 bg-amazonclone-yellow border-amazonclone">
            <select className="p-2 bg-gray-300 text-black border-2  text-sm xl:text-m ">
                <option>All</option>
                <option>Deals</option>
                <option>Amazon</option>
                <option>Fashion</option>
                <option>Computers</option>
                <option>Home</option>
                <option>Mobiles</option>
            </select>
            <input className="flex grow  items-center h-[100%] text-black  bg-amazonclone-background " type='text'/>
            <button className="w-[45px] rounded-r border-amazonclone ">
                <MagnifyingGlassIcon className="h-[27px] m-auto stroke-slate-900"/>
            </button>

        </div>
    </div>
  )
};

export default Search;