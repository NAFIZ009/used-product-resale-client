import React, { useState } from 'react';
import Category from '../Category/Category';
import Products from './Component/Products';
import {
    useQuery
  } from '@tanstack/react-query';
import { useLocation } from 'react-router-dom';
const Shop = () => {
    const location=useLocation();
    const url=location.search;
    // const [vars,setVars]=useState(url);
    let vars=``
    url.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m, key, value) {
        key = decodeURIComponent(key);
        value = decodeURIComponent(value);
        vars=`${key}=${value}`;
   });
    const {data:products,refetch}=useQuery({
        queryKey:['products'],
        queryFn:()=>fetch(`http://localhost:5000/shop?${vars}`).then()
       })
    return (
        <div>
            <Category refetch={refetch}></Category>
            <Products></Products>
        </div>
    );
};

export default Shop;