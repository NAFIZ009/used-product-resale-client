import React, { useContext } from 'react';
import { Context } from '../../../Context/AuthContext';
import { toast,ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const BookNowModal = ({productInfo}) => {
    const {user}=useContext(Context);
    const handleSubmit=e=>{
        e.preventDefault();
        const form =e.target;
        const orderInfo={
          buyersName:user.displayName,
          buyersEmail:user.email,
          productId:productInfo._id,
          meetingLocation:form.meetingLocation.value,
          buyersPhone:form.phoneNumber.value
        };
        fetch('http://localhost:5000/orders',{
          method:"POST",
          headers:{
            "content-type": "application/json"
          },
          body:JSON.stringify(orderInfo)
        })
        .then(res=>{
            if(res.ok){
              console.log(res)
              toast.success("Order Placed SuccessFully !", {
                position: toast.POSITION.TOP_CENTER
              });
              form.reset();
            }
        })
    }
    return (
        <div>
<input type="checkbox" id="my-modal-3" className="modal-toggle " />
<div className="modal">
  <div className="modal-box relative">
    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute left-[90%] top-2">✕</label>
    <form onSubmit={handleSubmit} className='flex flex-col gap-5 my-4'>
    <input type="text" disabled value={user.displayName} className="input input-bordered input-primary w-full " />
    <input type="text" disabled value={user.email} className="input input-bordered input-primary w-full " />
    <input type="text" disabled value={productInfo.productName} className="input input-bordered input-primary w-full " />
    <input type="text" disabled value={`$${productInfo.resalePrice}`} className="input input-bordered input-primary w-full " />
    <input type="text" placeholder="Meeting Location" name='meetingLocation' required className="input input-bordered input-primary w-full " />
    <input type="tel" placeholder="Phone Number" name='phoneNumber' required className="input input-bordered input-primary w-full " />
    <input type="submit" value="Submit" className='btn btn-primary' />
    </form>
  </div>
</div>
<ToastContainer />
        </div>
    );
};

export default BookNowModal;