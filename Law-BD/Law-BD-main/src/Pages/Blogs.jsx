import React from 'react';
import { LuCalendarClock } from "react-icons/lu";
import { useLoaderData } from 'react-router';
const Blogs = () => {
    const blogs = useLoaderData();
    return (
        <div className='max-w-screen-xl mx-auto px-8 md:px-12 lg:px-16 xl:px-14 my-10 '>
            <div className='space-y-6'>
                {
                    blogs.map(blog => 
                        <div className='py-4 px-4 bg-gray-300/30 rounded-2xl'>
                            <h1 className='text-xl font-semibold'>{blog.question}</h1>
                            <hr className='border-dashed border-1 border-gray-300 my-3' />
                            <p className='text-blue-500 text-base'>Answer:</p>
                            <p className='text-base font-semibold'>{blog.answer}</p>
                            <hr className='border-dashed border-1 border-gray-300 my-3' />
                            <p className='text-gray-600 flex text-base'><LuCalendarClock className='inline mr-3' size={20}/>{blog.added_time}</p>
                        </div>
                    )
                }
            </div>
            
        </div>
    );
};

export default Blogs;