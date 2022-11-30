import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {Context} from '../../Context/AuthContext';
import styles from './signup.module.css';
import Toastify from 'toastify-js';
const Signup = () => {
    const [value1,setValue1]=useState();
    const [value2,setValue2]=useState();
    const [value3,setValue3]=useState();
    const {register,setName,google}=useContext(Context);
    const navigate=useNavigate();
    const onChange1=e=>{
        setValue1(e.target.value);
    }
    const onChange2=e=>{
        setValue2(e.target.value);
    }
    const onChange3=e=>{
        setValue3(e.target.value);
    }
    const signUpHandler=e=>{
        e.preventDefault();
        const form=e.target;
        const name=form.name.value;
        const email=form.email.value;
        const password=form.password.value;
        const role=form.role.value;
        register(email,password)
        .then(data=>{
            setName(name)
            .then(()=>{
                fetch('http://localhost:5000/user',{
                    method: 'POST',
                    headers:{
                        "content-type": "application/json",
                    },
                    body: JSON.stringify({
                        name,
                        email,
                        role
                    })
                })
                .then(res=>{
                    Toastify({
                        text: "SuccessFully Signup",
                        duration: 3000,
                        close: true,
                        gravity: "top",
                        position: "center",
                        stopOnFocus: true, // Prevents dismissing of toast on hover
                        style: {
                          background: "linear-gradient(to right, #00b09b, #96c93d)",
                        },
                      }).showToast();
                      form.reset();
                      navigate('/');
                })
                
            })
        })
        .catch(err=>Toastify({
            text: "ERROR!!!!Please Try Again",
            duration: 3000,
            close: true,
            gravity: "top",
            position: "center",
            stopOnFocus: true,
            style: {
              background: "red",
            },
          }).showToast())
    };

    const googleHandler=()=>{
        google()
        .then(()=>{
            Toastify({
                text: "SuccessFully Logged In With Google",
                duration: 3000,
                close: true,
                gravity: "top",
                position: "center",
                stopOnFocus: true, // Prevents dismissing of toast on hover
                style: {
                  background: "linear-gradient(to right, #00b09b, #96c93d)",
                },
              }).showToast();
              navigate('/');
        })
        .catch(()=>{
            Toastify({
                text: "ERROR!!!!Please Try Again",
                duration: 3000,
                close: true,
                gravity: "top",
                position: "center",
                stopOnFocus: true,
                style: {
                  background: "red",
                },
              }).showToast()
        })
    }


    return (
        <div className={`w-full min-h-[100vh] ${styles.bgCustom} grid grid-cols-[30%_70%]`}>
            <div className='h-full bg-black flex flex-col items-center gap-10'>
                <div className='w-[90%] flex flex-col gap-10 mb-10'>
                    <h1 className='text-5xl font-bold text-center p-3 '>SIGN UP</h1>
                    <p className='text-center '>
                        Join Us & Get Started With Biggest Tv Resale Market In The World.You Can Also Get Discount On Our All Products By Joining With Us.
                        If You Want To Sell Your Tv On Our Platform Then Please Sign Up With SELLER Option. 
                    </p>
                </div>
                <div className='flex flex-col gap-3'>
                <p className='text-sm text-gray-500'>Already Have An Account Please Login -</p>
                <Link to='/login' className='btn w-full bg-purple-700 text-lg'>LOG IN</Link>
                </div>
                <div className='flex flex-col gap-3'>
                <p className='text-sm text-gray-500'>Log In With Google -</p>
                <button className='btn w-full bg-orange-700 text-lg' onClick={googleHandler}>Google</button>
                </div>
            </div>
            <div className='h-full flex items-center'>
            <div className="card w-96 glass mx-auto shadow-2xl ">
            <div className="card-body">
              <form className='mx-auto flex flex-col gap-10 my-6' onSubmit={signUpHandler}>
                <div className='relative'>
                    <input type="text" required name='name' id='name' className={`bg-none pb-1 text-white `} onChange={onChange1}/>
                    <label htmlFor="name" className={`${value1&&styles.onValue}`}>Name</label>
                </div>
                <div className='relative'>
                    <input type="email" required name='email' id='email' className={`bg-none pb-1 text-white`} onChange={onChange2}/>
                    <label htmlFor="email" className={`${value2&&styles.onValue}`}>Email</label>
                </div>
                {
                //     <div className='relative'>
                //     <input type="text" name='name' id='name' className='bg-none pb-1 text-white'/>
                //     <label htmlFor="name">Name</label>
                // </div>
            }
                <div className='relative'>
                    <input type="password" required name='password' id='password' className={`bg-none pb-1 text-white`} onChange={onChange3}/>
                    <label htmlFor="password" className={`${value3&&styles.onValue}`}>Password</label>
                </div>
                <div className="relative">
                <p className='my-2 text-white text-sm'>What You Want To Be?</p>
                <select name='role' required className="select w-full max-w-xs">
                    <option value="buyer">Buyers</option>
                    <option value='seller'>Seller</option>
                </select>
            </div>
                <button type='submit' className='btn'>Sign Up</button>
              </form>
              
            </div>
          </div>
            </div>
        </div>
    );
};

export default Signup;