import React from 'react';
import { Link, Links, NavLink } from 'react-router';
import logoImg from '../assets/logo-footer.png';
const Navbar = () => {
    return (
        <div className='bg-gray-700 text-white'>
            <div className="navbar p-0 max-w-screen-xl mx-auto px-8 md:px-12 lg:px-16 xl:px-24">
            <div className="navbar-start">
                <div className="dropdown">
                <div tabIndex={0} role="button" className="mr-2 lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 cursor-pointer w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                </div>
                <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content text-black bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                    <li><NavLink className={({isActive})=> isActive ? 'text-[#0EA106]' :''} to={'/'}>Home</NavLink></li>
                    <li><NavLink className={({isActive})=> isActive ? 'text-[#0EA106]' :''} to={'/booking'}>My-Bookings</NavLink></li>
                    <li><NavLink className={({isActive})=> isActive ? 'text-[#0EA106]' :''} to={'/blogs'}>Blogs</NavLink></li>
                    <li><NavLink className={({isActive})=> isActive ? 'text-[#0EA106]' :''} to={'/contact'}>Contact Us</NavLink></li>
                </ul>
                </div>
                <img className='w-8' src={logoImg} alt="logo" />
                <Link to={'/'} className='text-xl font-semibold'>Law.BD</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="flex space-x-5 text-white text-lg px-1">
                <li><NavLink className={({isActive})=> isActive ? 'border-b-1 text-blue-500 font-semibold border-blue-500' :''} to={'/'}>Home</NavLink></li>
                <li><NavLink className={({isActive})=> isActive ? 'border-b-1 text-blue-500 font-semibold border-blue-500' :''} to={'/booking'}>My-Bookings</NavLink></li>
                <li><NavLink className={({isActive})=> isActive ? 'border-b-1 text-blue-500 font-semibold border-blue-500' :''} to={'/blogs'}>Blogs</NavLink></li>
                <li><NavLink className={({isActive})=> isActive ? 'border-b-1 text-blue-500 font-semibold border-blue-500' :''} to={'/contact'}>Contact Us</NavLink></li>
                </ul>
            </div>
            <div className="navbar-end">
               <Link to={'/contact'} className='bg-[#0EA106] hover:bg-white hover:text-[#0EA106] hover:border hover:border-[#0EA106] text-white font-semibold py-3 px-4 rounded-full'>Contact Now</Link>
            </div>
            </div>
        </div>
    );
};

export default Navbar;