import React, { useEffect, useState } from 'react';
import { useLoaderData, } from 'react-router';
import LawyerCard from './LawyerCard';

const Lawyers = () => {

    const LaywarData = useLoaderData();
    const [lawyers,setLawyers] = useState([]);
    const [showAll,setShowAll] = useState(false)

    useEffect(()=>{
        if(showAll)
        {
            setLawyers(LaywarData);
        }
        else
        {
            setLawyers(LaywarData.slice(0,6));
        }
    },[showAll,LaywarData])

    return (
        <div className='max-w-screen-xl mx-auto px-8 md:px-12 lg:px-16 xl:px-24'>
            <div className='text-center space-y-3'>
                <h1 className=' text-3xl md:text-[40px] font-semibold'>Our Best Lawyers</h1>
            </div>
            <div className='grid gird-cols-1 md:grid-cols-2 gap-8 object-center my-10'>
                {
                    lawyers.map( lawyer => <LawyerCard 
                        key={lawyer.id}
                        lawyer={lawyer}
                        ></LawyerCard>)
                }
            </div>
            <div className='text-center my-5'>
                    <button 
                    onClick={()=>{setShowAll(!showAll)
                    if(showAll) window.scrollTo(0,580)
                    }} 
                    className='btn bg-[#09982F] hover:bg-white hover:text-[#09982F] px-6 py-2 rounded-xl border-1 border-[#09982F] text-white font-semibold'>{showAll  ? 'Show less Lawyers' : 'Show All Lawyers'}</button> 
            </div>
        </div>
    );
};

export default Lawyers;