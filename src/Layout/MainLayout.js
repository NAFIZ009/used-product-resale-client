import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../SharedComponent/Footer/Footer';
import Navbar from '../SharedComponent/Navbar/Navbar';

const MainLayout = () => {
    return (
        <div className=''>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;