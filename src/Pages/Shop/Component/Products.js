import React from 'react';
import BookNowModal from './BookNowModal';
import ProductsCard from './ProductsCard';


  
const Products = ({products,vars}) => {
    const heading=vars.split("=")[1] || "All Products";
    console.log(heading);
    return (

        <div>
        <h1 className='text-4xl text-white text-center my-4 underline'>{heading}</h1>
        <div className='grid grid-cols-1 gap-y-8 sm:grid-cols-2 md:grid-cols-3 px-4 py-6'>
            {
                products.map(product=><ProductsCard product={product} key={product._id}></ProductsCard>)
            }
        </div>
           
        </div>
    );
};

export default Products;