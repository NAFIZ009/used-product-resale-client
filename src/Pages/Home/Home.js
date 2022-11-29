import React from 'react';
import styles from './home.module.css';
import '../../UniversalCss.css';
import img1 from '../../pic/img1.png';
import Slider from './Component/Slider';
import Category from '../Category/Category';
import Reviews from './Component/Reviews';
const Home = () => {
    return (
        <div className='py-5'>
            <section className={`${styles.bannerSec} relative h-[430px] max-w-screen-lg mx-auto bg-white mb-20`}>
                <span className={`absolute ${styles.tvLogo} text-white font-bold`}>ANDROID TV</span>
                <img src={img1} className={`w-48 absolute ${styles.tvStandLogo}`} alt=""/>
                <Slider></Slider>
            </section>
            <Category home></Category>
            {
                <Reviews></Reviews>
            }
            
        </div>
    );
};

export default Home;