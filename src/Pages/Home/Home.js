import React from 'react';
import styles from './home.module.css';
import '../../UniversalCss.css';
import img1 from '../../pic/img1.png';
import Slider from './Component/Slider';
const Home = () => {
    return (
        <div>
            <section className={`${styles.bannerSec} relative h-[430px] max-w-screen-lg mx-auto bg-white`}>
                <span className={`absolute ${styles.tvLogo} text-white font-bold`}>ANDROID TV</span>
                <img src={img1} className={`w-48 absolute ${styles.tvStandLogo}`} alt=""/>
                <Slider></Slider>
            </section>
        </div>
    );
};

export default Home;