import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import img1 from '../../../../src/pic/sliderimg1.jpeg';
import img2 from '../../../../src/pic/img2slider.jpg';
import img from '../../../../src/pic/imgslider.png';
import styles from '../home.module.css';
const Slider = () => {
    return (
        <div>
        <Carousel autoPlay  infiniteLoop showThumbs={false}>
        <div className='relative'>
            <img src={img1} className={'h-[395px] object-cover object-top' } alt=""/>
            <div className={`absolute w-full h-full ${styles.overlay} flex items-center `}>
            <div className="card w-96 glass ml-16">
  <div className="card-body">
    <h2 className="card-title text-start">This World Cup Enjoy With Bigger Screen.</h2>
    <p className='text-start'>Enjoy Clear Game Of WC With Our Tv -</p>
    <div className="card-actions justify-end">
      <button className="btn bg-perpal outline-none">Buy Now</button>
    </div>
  </div>
</div>
            </div>
        </div>
        <div className='relative'>
            <img src={img2} className={'h-[395px] object-contain object-right' } alt=""/>
            <div className={`absolute w-full h-full ${styles.overlay} flex items-center `}>
            <div className="card w-96 glass ml-16">
  <div className="card-body text-black">
    <h2 className="card-title text-start">Get 40% Off On Your Premium Products</h2>
    <p className='text-start'>Goo & Check It Up -</p>
    <div className="card-actions justify-end">
      <button className="btn bg-perpal outline-none text-white">40% Check</button>
    </div>
  </div>
</div>
            </div>
        </div>
        <div className='relative'>
            <img src={img} className={'h-[395px] object-contain object-right' } alt=""/>
            <div className={`absolute w-full h-full ${styles.overlay} flex items-center `}>
            <div className="card w-96 glass ml-16">
  <div className="card-body text-black">
    <h2 className="card-title text-start">Want To Resale Your Tv??So You Are In The RIght Place</h2>
    <p className='text-start text-black'>If You are Not A Seller PLease SIGNUP As A Seller  -</p>
    <div className="card-actions justify-end">
      <button className="btn  outline-none">Go To Sign Up</button>
    </div>
  </div>
</div>
            </div>
        </div>
    </Carousel>
        </div>
    );
};

export default Slider;