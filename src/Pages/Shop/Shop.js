import React, { useEffect, useState } from 'react';
import Category from '../Category/Category';
import Products from './Component/Products';
import { useLocation } from 'react-router-dom';
const Shop = () => {
    const [products,setProducts]=useState([]);
    const location=useLocation();
    const url=location.search;
    let vars=``;
    url.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m, key, value) {
        key = decodeURIComponent(key);
        value = decodeURIComponent(value);
        vars=`${key}=${value}`;
   });

    useEffect(()=>{
        fetch(`http://localhost:5000/shop?${vars}`)
        .then(res=>res.json())
        .then(data=>setProducts(data));
    },[vars]);

    
    return (
        <div>
            <Category></Category>
            <Products products={products} vars={vars}></Products>
        </div>
    );
};

export default Shop;