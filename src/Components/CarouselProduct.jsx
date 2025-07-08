import {Swiper , SwiperSlide} from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { Link } from 'react-router-dom';
import { QuickView } from './';
import { useState } from 'react';

import "swiper/css";
import "swiper/css/navigation";

  const CarouselProduct = ({addToCart}) => {

    const bookProducts = Array.from({length:9}, (_,i)=> ({
        id: i,
        name: `Book ${i + 1}`,
        img: `/images/product_${i}_small.jpg`,
    }))

    const electronics = Array.from({ length: 9 }, (_, i) => ({
        id: i + 100,
        name: `Gadget ${i + 1}`,
        img: `/images/productE_${i}_small.jpg`,
    }));

  const [hoveredProductId, setHoveredProductId] = useState(null);


    return (
    <div>
      <div className="bg-white m-3">
        <div className="text-2xl font-semibold p-3">BestSeller Books</div>
        <Swiper 
          slidesPerView={2}
          spaceBetween={10} 
          navigation 
          modules={[Navigation]}
          breakpoints={{
            640: {
              slidesPerView: 3,
            },
            768: {
              slidesPerView: 4,
            },
            1024: {
              slidesPerView: 5,
            },
            1280: {
              slidesPerView: 7,
            },
          }}
        >
          {bookProducts.map((product) => (
            <SwiperSlide key={product.id} className="flex flex-col items-center space-y-2 text-center p-2"
              onMouseEnter={()=> setHoveredProductId(product.id)}
              onMouseLeave={()=> setHoveredProductId(null)}
            >
              <Link to={`/product/${product.id}`}>
                <img src={product.img} alt={product.name} className="w-full max-h-[120px] object-contain"/>
              </Link>
              <p className="text-sm text-center">{product.name}</p>
              <button
                onClick={() => addToCart(product)}
                className="bg-yellow-400 hover:bg-yellow-500 text-xs md:text-sm text-black px-2 md:px-3 py-1 rounded"
              >
                + Add to Cart
              </button>
              
              {hoveredProductId === product.id && <QuickView product={product}/>}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="bg-white m-3">
        <div className="text-2xl font-semibold p-3">Electronics & Accessories</div>
        <Swiper 
          slidesPerView={2}
          spaceBetween={10} 
          navigation 
          modules={[Navigation]}
          breakpoints={{
            640: {
              slidesPerView: 3,
            },
            768: {
              slidesPerView: 4,
            },
            1024: {
              slidesPerView: 5,
            },
            1280: {
              slidesPerView: 7,
            },
          }}
        >
          {electronics.map((product) => (
            <SwiperSlide key={product.id} className="flex flex-col items-center space-y-2 text-center p-2"
              onMouseEnter={()=> setHoveredProductId(product.id)}
              onMouseLeave={()=> setHoveredProductId(null)}
            >
              <Link to={`/product/${product.id}`}>
                <img src={product.img} alt={product.name} className="relative w-full max-h-[120px] object-contain"/>
              </Link>
              <p className="text-sm text-center">{product.name}</p>
              <button 
                onClick={() => addToCart(product)}
                className="bg-yellow-400 hover:bg-yellow-500 text-xs md:text-sm text-black px-2 md:px-3 py-1 rounded"
              >
                + Add to Cart
              </button>

              {hoveredProductId === product.id && <QuickView product={product}/>}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
};

export default CarouselProduct;