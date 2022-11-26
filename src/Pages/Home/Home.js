import React from 'react';
import styles from './home.module.css';
const Home = () => {
    return (
        <div>
            <section className={`${styles.bannerSec} relative min-h-[430px] max-w-screen-lg mx-auto bg-white`}>
                <span className='absolute top-0 left-2/4'>ANDROID TV</span>
            </section>
        </div>
    );
};

export default Home;