import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Context } from '../../Context/AuthContext';
import styles from './Login.module.css';
import Toastify from 'toastify-js';
const Login = () => {
    const [value1,setValue1]=useState();
    const [value2,setValue2]=useState();
    const {login,google}=useContext(Context);
    const navigate=useNavigate();
    const onChange1=e=>{
        setValue1(e.target.value);
    };
    const onChange2=e=>{
        setValue2(e.target.value);
    };
    const loginHandler=e=>{
        e.preventDefault();
        const form=e.target;
        const email=form.email.value;
        const password=form.password.value;
        login(email,password)
        .then(data=>{
            console.log(data)
                Toastify({
                    text: "SuccessFully Logged In",
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
        <div className={`w-full min-h-[100vh] bg-black grid grid-cols-[30%_70%]`}>
            <div className={`h-full ${styles.bgCustom} flex flex-col items-center gap-10 pt-5`}>
                <div className='w-[90%] flex flex-col gap-10 mb-10'>
                    <h1 className='text-5xl font-bold text-center p-3 text-white'>Login</h1>
                    <p className='text-center text-white'>
                        Log In And Get 100% Discount On Any Tv With Free Delivary.
                        If You Are A Seller You Can Add Product For Sell And Earn As Much YOu CAn.                    </p>
                </div>
                <div className='flex flex-col gap-3'>
                <p className='text-sm text-white'>Want To Join With Us? -</p>
                <Link to='/signup' className='btn w-full  text-lg text-white'>Sign Up</Link>
                </div>
                <div className='flex flex-col gap-3'>
                <p className='text-sm text-white'>Log In With Google -</p>
                <button onClick={googleHandler} className='btn w-full bg-orange-500 text-lg text-white'>Google</button>
                </div>
            </div>
            <div className='h-full flex items-center '>
            <div className="card w-96 glass mx-auto shadow-2xl">
            <div className="card-body">
              <form className='mx-auto flex flex-col gap-10 my-6' onSubmit={loginHandler}>
                <div className='relative'>
                    <input type="email" name='email' id='email' className='bg-none pb-1 text-white' onChange={onChange1}/>
                    <label htmlFor="email" className={`${value1&&styles.onValue}`}>Email</label>
                </div>
                <div className='relative'>
                    <input type="password" name='password' id='password' className='bg-none pb-1 text-white' onChange={onChange2}/>
                    <label htmlFor="password" className={`${value2&&styles.onValue}`}>Password</label>
                </div>
                <button type='submit' className='btn'>Log In</button>
              </form>
              <span className='block mt-3'>Forgot Password? <Link className='text-white underline'>Click Here</Link></span>
            </div>
          </div>
            </div>
        </div>
    );
};

export default Login;