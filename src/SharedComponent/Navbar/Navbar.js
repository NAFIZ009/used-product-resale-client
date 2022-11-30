import React, { useContext } from 'react';
import {Link, NavLink} from 'react-router-dom';
import styles from './Navbar.module.css';
import '../../UniversalCss.css';
import { Context } from '../../Context/AuthContext';
const Navbar = () => {
  const {user,loading,logOut}=useContext(Context);
    // const activeClass=styles.activeNav;

    return (
        <div className='max-w-6xl mx-auto py-6'>
        <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className={`dropdown ${styles.hiddenOnMobile}`}>
      <label tabIndex={0} className={`btn btn-ghost lg:hidden `}>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 gap-3">
      <li className={`font-bold  ${styles.hoverNav}`}><NavLink to='/' className={`bg-inherit`}>Home</NavLink></li>
      <li className={`font-bold  ${styles.hoverNav}`}><NavLink className={`bg-inherit`} to='/shop'>Shop</NavLink></li>
      {!loading&&user&&user.uid&&<li className={`font-bold  ${styles.hoverNav}`}><NavLink className={`bg-inherit`}>Dashboard</NavLink></li>}
      <li className={`font-bold  ${styles.hoverNav}`}><NavLink className={`bg-inherit`}>Blogs</NavLink></li>
      </ul>
    </div>
    <Link to='/' className={`btn btn-ghost normal-case text-3xl gap-2 ${styles.logo}`}><span className='text-perpal'>TV</span>BAZAR</Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal p-0 gap-4"> 
    <li className={`font-bold  ${styles.hoverNav}`}><NavLink to='/' className={`bg-inherit`}>Home</NavLink></li>
    <li className={`font-bold  ${styles.hoverNav}`}><NavLink to='/shop' className={`bg-inherit`}>Shop</NavLink></li>
    {!loading&&user&&user.uid&&<li className={`font-bold  ${styles.hoverNav}`}><NavLink className={`bg-inherit`}>Dashboard</NavLink></li>}
    <li className={`font-bold  ${styles.hoverNav}`}><NavLink className={`bg-inherit`}>Blogs</NavLink></li>
    </ul>
  </div>
  <div className="navbar-end">
    <div className={`flex gap-4 items-center ${styles.hiddenOnMobile}`}>
    {user&&user.uid?<>
      <div className='text-sm font-bold'>{user.displayName}</div>
      <Link className='hover:text-violet-500 bg-none ' onClick={logOut}>Log Out</Link>
      </>
    :
    <><Link to='/login' className='hover:text-violet-500 bg-none'>Log In</Link>
    <Link to='/signup' className='btn bg-violet-600' >Sign Up</Link></>
  }
    </div>
    <div className={`dropdown dropdown-end hidden ${styles.visibleOnMobile}`}>
      <label tabIndex={0} className="btn btn-ghost ">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 gap-3">
      <li className={`font-bold  ${styles.hoverNav}`}><NavLink  className={`bg-inherit`}>Home</NavLink></li>
      <li className={`font-bold  ${styles.hoverNav}`}><NavLink className={`bg-inherit`}>Categories</NavLink></li>
      {!loading&&user&&user.uid&&<li className={`font-bold  ${styles.hoverNav}`}><NavLink className={`bg-inherit`}>Dashboard</NavLink></li>}
      <li className={`font-bold  ${styles.hoverNav}`}><NavLink className={`bg-inherit`}>Blogs</NavLink></li>
      <li className='my-3 gap-1'>
      {user&&user.uid?<>
        <div className='text-sm font-bold'>{user.displayName}</div>
        <Link className='hover:text-violet-500 bg-none' onClick={logOut}>Log Out</Link>
        </>
      :
      <><Link to='/login' className='hover:text-violet-500 bg-none'>Log In</Link>
      <Link to='/signup' className='btn bg-violet-600' >Sign Up</Link></>
    }
      </li>
      </ul>
    </div>
  </div>
</div>
        </div>
    );
};

export default Navbar;