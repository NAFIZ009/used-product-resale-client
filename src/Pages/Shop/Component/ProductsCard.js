import React from 'react';
import BookNowModal from './BookNowModal';

const ProductsCard = ({product}) => {
    const {img,productName,productLocation,resalePrice,originalPrice,yearOfUse,postTime,sellerInfo} =product;
    const {name,img:sellerImg,varified}=sellerInfo;
    const blueTick="data:image/png;base64,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";
    return (
        <div>
        <div className="card w-96 bg-base-100 shadow-xl glass rounded-xl">
        <figure><img src={img} alt="Shoes" className='h-56 py-4'/></figure>
        <div className="card-body">
          <h2 className="card-title">{productName}</h2>
          <h2 className="text-sm ">Location : {productLocation}</h2>
          <h2 className="text-lg text-success ">Price: ${resalePrice}</h2>
          <h2 className="text-md text-error ">Price: ${originalPrice}</h2>
          <h2 className="text-sm ">Used: {yearOfUse}</h2>
          <h2 className="text-sm ">Posted: {postTime}</h2>
          <div className='flex flex-row gap-2 items-center justify-end'>
            {varified==="true"&&<img src={blueTick} alt="" className='w-6'/>}
            <p className='' style={{flexGrow:"0"}}>{name}</p>
            <img src={sellerImg} className='w-10 h-10 rounded-full' alt="varified"  />
            
          </div>
          <div className="card-actions justify-end mt-4">
            <label htmlFor="my-modal-3" className="btn btn-primary relative"  >open modal</label>
          </div>
        </div>
      </div>
      <BookNowModal productInfo={product}></BookNowModal>
        </div>
    );
};

export default ProductsCard;