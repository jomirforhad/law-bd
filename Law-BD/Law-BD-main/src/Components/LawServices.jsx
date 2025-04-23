import React from 'react';
import CountUp from 'react-countup';
import img1 from '../assets/success-doctor.png'
import img2 from '../assets/success-patients.png'
import img3 from '../assets/success-review.png'
import img4 from '../assets/success-staffs.png'
const LawServices = () => {
    const services = [
        {
            img:img1,
            count:355,
            title:'Total Lawyer'
        },
        {
            img:img3,
            count:420,
            title:'Total Reviews'
        },
        {
            img:img2,
            count:1725,
            title:'Cases Initiated'
        },
        {
            img:img4,
            count:845,
            title:'Total Stuffs'
        },
        
    ]
    return (
        <div className='max-w-screen-xl mx-auto px-8 md:px-12 lg:px-16 xl:px-24 mb-10'>
            <h1 className='text-2xl md:text-4xl py-5 font-semibold text-center'>We Provide Best Law Services</h1>
            <p className='text-[#0F0F0F] text-center mb-5'>Our platform connects you with verified, experienced Lawyers across various specialities — all at your convenience.</p>
            <div className='flex flex-wrap gap-3 justify-center items-center'>
                {
                    services.map( (item,index) => 
                    <div key={index} className='p-5 w-[150px] md:w-[257px] space-y-2 border-1 border-gray-300 rounded-2xl bg-[#0F0F0F15]'>
                        <img src={item.img} alt="" />
                        <p className=' text-2xl md:text-5xl font-semibold'><CountUp duration={20} start={0}  suffix="+" end={item.count} /></p>
                        <p className='text-[#0F0F0F60]'>{item.title}</p>
                    </div>
                    )
                }
            </div>
        </div>
    );
};

export default LawServices;



