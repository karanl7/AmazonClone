import React from 'react';
import { Carousel, HomePageCard, CarouselCategory, CarouselProduct } from './';
import { useState } from 'react';

const HomePage = ({addToCart}) => {

  const [cartItems, setCartItems] = useState([]);

  return (
    <div className="bg-amazonclone-background">
      <div className="max-w-[1500px] m-auto pt-[95px] px-2 md:px-0">
          <Carousel/> 
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 -mt-40 md:-mt-80"> 
            <HomePageCard title={"We have a surprise for you"}
              img={"../images/home_grid_1.jpg"}
              link={"See terms and Conditions"}/>
            <HomePageCard title={"Watch The Rings of Power"}
              img={"../images/home_grid_2.jpg"}
              link={"Start Streaming Now"}/>
            <HomePageCard title={"Unlimited Streaming"}
              img={"../images/home_grid_3.jpg"}
              link={"Find out more"}/>
            <HomePageCard title={"More titles to explore"}
              img={"../images/home_grid_4.jpg"}
              link={"Browse Kindle Unlimited"}/>
            <HomePageCard title={"Shop Pet Supplies"}
              img={"../images/home_grid_5.jpg"}
              link={"See more"}/>
            <HomePageCard title={"Spring Sale"}
              img={"../images/home_grid_6.jpg"}
              link={"See the deals"}/>
            <HomePageCard title={"Echo Buds"}
              img={"../images/home_grid_7.jpg"}
              link={"See more"}/>
            <HomePageCard title={"Family Plan: 3 months free"}
              img={"../images/home_grid_8.jpg"}
              link={"Learn more"}/>  
            <div className="m-3 pt-8 col-span-1 sm:col-span-2 md:col-span-3 xl:col-span-1">
              <img className="xl:hidden " src={"/images/banner_image_2.jpg"}/>
            </div>

          </div>
          <CarouselProduct addToCart={addToCart} />  
          <CarouselCategory/>
          <div className='h-[200px]'>
            <img className="h-[100%] m-auto" src='/images/banner_image.jpg'/>
          </div>
      </div>
    </div>
    
  );
};

export default HomePage;