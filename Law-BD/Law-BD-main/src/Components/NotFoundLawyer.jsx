import React from 'react';
import { Link, useLocation } from 'react-router';

const NotFoundLawyer = () => {
    const navigate = useLocation()
    return (
    <div className='min-h-screen flex items-center justify-center'>
        <div className='text-center space-y-4'>
            <h1 className='text-4xl font-semibold text-red-600'>No Lawyer Found </h1>
            <p className='text-4xl font-semibold'>404</p>
            <p className='text-xl font-semibold'>{navigate.pathname}</p>
            <Link to={'/'}>
                <button className='btn px-3 py-1 rounded-xl text-lg text-white bg-blue-500'>View All Lawyer</button>
            </Link>
        </div>
    </div>
    );
};

export default NotFoundLawyer;