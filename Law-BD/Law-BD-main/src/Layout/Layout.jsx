import React, { useEffect, useState } from 'react';
import Navbar from '../Components/Navbar';
import { Outlet, useLocation } from 'react-router';
import Footer from '../Components/Footer';
import LoadSpinner from '../Components/LoadSpinner';

const Layout = () => {

    const loccation = useLocation();
    const [loading,setLoading]= useState(false);
    
    useEffect(()=>{
        setLoading(true);
        const timeOut = setTimeout(()=>{
            setLoading(false)
        },100)
        return () => clearTimeout(timeOut);
    },[loccation])

    return (
        <div>
            <Navbar></Navbar>
            <div className='relative min-h-[calc(100vh-291px)]'>
                {loading && <LoadSpinner/> }
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Layout;