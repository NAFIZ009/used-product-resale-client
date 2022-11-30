import React from 'react';
import {
    useQuery,
  } from '@tanstack/react-query';
import CategoryCard from './Component/CategoryCard';
import Loader from '../../SharedComponent/Loader/Loader';
import { Link } from 'react-router-dom';


const Category = ({home=false}) => {
    const {data:categories,isLoading}=useQuery({queryKey:['category'],queryFn:()=>fetch("http://localhost:5000/category").then(res=>res.json())})

    return (
        <div className='my-28'>
        {home&&<h1 className='text-2xl underline underline-offset-8 py-8 pl-2 font-bold'>Top Categories For You:-</h1>}
        {!isLoading?<div className='grid grid-cols-2 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 gap-5  text-white px-6'>
        {
           categories.map(category=><Link key={category._id} to={`/shop?category=${category.name.replace(/\s/g, "")}`} ><CategoryCard category={category} ></CategoryCard></Link>)
        }
        </div>:<Loader></Loader>}
        </div>
    );
};

export default Category;