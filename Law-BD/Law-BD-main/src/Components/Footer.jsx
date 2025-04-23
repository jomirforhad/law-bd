import React from 'react';
import footerLogo from "../assets/logo-footer.png";
import { Link } from 'react-router';
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <div className='bg-gray-800'>
            <footer className='max-w-screen-xl mx-auto px-8 md:px-12 lg:ps-16 xl:px-24 py-8 space-y-5'>
                <div className='flex justify-center items-center'>
                    <img src={footerLogo} alt="logo" />
                    <h2 className=' font-semibold text-white text-2xl'>Law.BD</h2>
                </div>
                <ul className='flex justify-center space-x-6 text-gray-400'>
                    <li><Link to={'/'}>Home</Link></li>
                    <li><Link to={'/booking'}>My-Bookings</Link></li>
                    <li><Link to={'/blogs'}>Blogs</Link></li>
                    <li><Link to={'/contact'}>Contact Us</Link></li>
                </ul>
                <hr className='border-dashed border-1' />
                <div className='flex justify-center space-x-6 text-white'>
                    <Link className='hover:text-blue-500' target='_blank' to={'https://www.facebook.com/heyiamsifatahamed/'}><FaFacebook size={30}/></Link>
                    <Link className='hover:text-red-500' target='_blank' to={'https://www.youtube.com/@mdsifatahamed6339'}><FaYoutube size={30}/></Link>
                    <Link className='hover:text-blue-500' target='_blank' to={'https://www.facebook.com/heyiamsifatahamed/'}><FaTwitter size={30}/></Link>
                    <Link className='hover:text-blue-500' target='_blank' to={'https://www.facebook.com/heyiamsifatahamed/'}><FaLinkedin size={30}/></Link>
                </div>
            </footer>
        </div>
    );
};

export default Footer;