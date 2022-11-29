import React from 'react';
import styles from './Loader.module.css';
const Loader = () => {
    return (
        <div className='relative w-full h-20'>
            <div className={`${styles.spinningcoinfall} mx-auto w-full `}>
            </div>
        </div>
    );
};

export default Loader;