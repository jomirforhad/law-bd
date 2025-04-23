import React from 'react';
import bannerImg from '../assets/banner-img-1.png';
const Banner = () => {
    return (
        <div className='max-w-screen-xl mx-auto px-8 md:px-12 lg:px-16 xl:px-24 '>
            <div className='h-[550px] rounded-3xl flex justify-center items-center w-full bg-cover bg-center my-8' style={{backgroundImage:`url(${bannerImg})`}}>
                <div className='text-center space-y-4 md:space-y-10 px-1 md:px-0'>
                    <h2 className='text-2xl  md:text-5xl font-semibold text-white'>It avoids subjective claims or <br /> exaggeration that might raise red <br /> flags legally</h2>
                    <p className='text-xs md:text-base text-gray-300'>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. Whether it's a <br /> routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.</p>
                </div>
            </div>






            {/* <div className="w-full h-full rounded-3xl overflow-hidden">
            <img
                src={bannerImg}
                alt="Banner"
                className="w-full h-auto object-contain"
            />      
            </div> */}
        </div>
    );
};

export default Banner;