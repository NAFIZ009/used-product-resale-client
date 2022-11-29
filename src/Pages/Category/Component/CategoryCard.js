import React from 'react';

const CategoryCard = ({category}) => {
    const {name,src}=category;
    return (
        <div className='flex flex-col items-center glass cursor-pointer hover:scale-105 transition'>
            <div>
                <img src={src} alt="" />
            </div>
            <div>
                {name}
            </div>
        </div>
    );
};

export default CategoryCard;