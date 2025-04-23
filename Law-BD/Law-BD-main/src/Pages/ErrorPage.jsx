import React from 'react';
import { Link } from 'react-router';

const ErrorPage = () => {
    return (
        <div className='min-h-screen flex items-center justify-center'>
            <div className='text-center space-y-2'>
                <h1 className='text-4xl font-semibold'>Not Found This Page</h1>
                <p className='text-4xl font-semibold'>404</p>
                <Link to={'/'}>
                    <button className='btn px-3 py-1 rounded-xl text-xl text-white bg-[#0EA106]'>Go to Home</button>
                </Link>
            </div>
        </div>
    );
};

export default ErrorPage;