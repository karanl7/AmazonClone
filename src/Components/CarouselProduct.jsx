import {Swiper , SwiperSlide} from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { Link } from 'react-router-dom';

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


    return (
    <div>
      <div className="bg-white m-3">
        <div className="text-2xl font-semibold p-3">BestSeller Books</div>
        <Swiper slidesPerView={7} spaceBetween={10} navigation modules={[Navigation]}>
          {bookProducts.map((product) => (
            <SwiperSlide key={product.id} className="flex flex-col items-center space-y-2">
              <Link to={`/product/${product.id}`}>
                <img src={product.img} alt={product.name} className="w-full max-h-[120px] object-contain"/>
              </Link>
              <p className="text-sm text-center">{product.name}</p>
              <button
                onClick={() => addToCart(product)}
                className="bg-yellow-400 hover:bg-yellow-500 text-sm text-black px-3 py-1 rounded"
              >
                + Add to Cart
              </button>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="bg-white m-3">
        <div className="text-2xl font-semibold p-3">Electronics & Accessories</div>
        <Swiper slidesPerView={7} spaceBetween={10} navigation modules={[Navigation]}>
          {electronics.map((product) => (
            <SwiperSlide key={product.id} className="flex flex-col items-center space-y-2">
              <Link to={`/product/${product.id}`}>
                <img src={product.img} alt={product.name} className="w-full max-h-[120px] object-contain"/>
              </Link>
              <p className="text-sm text-center">{product.name}</p>
              <button 
                onClick={() => addToCart(product)}
                className="bg-yellow-400 hover:bg-yellow-500 text-sm text-black px-3 py-1 rounded"
              >
                + Add to Cart
              </button>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
};

export default CarouselProduct;