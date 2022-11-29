import React from 'react';

const ReviewsCard = ({review}) => {

    const {user,comment}=review;
    const {img,name}=user;

    return (
        <div className='w-10/12 glass py-5 px-4 ml-6'>
            <div className="flex w-full">
             <div className='w-[10%]'>
                <img src={img} alt="" className='rounded-full w-20'/>
             </div>
             <div className='w-[90%] '>
                <h1 className='text-lg text-white'>{name}</h1>
                <p>{comment}</p>
             </div>
            </div>
        </div>
    );
};

export default ReviewsCard;