import React from 'react';

const LawyerBook = ({appointment,handlerRemoveAppointment}) => {

    const{id,name,speciality,fees}=appointment;
    return (
        <div>
            <div className='p-5 border-1 border-gray-300 rounded-2xl my-5'>
                <h3 className='text-lg font-semibold'>{name}</h3>
                <div className='text-base flex justify-between items-center'>
                    <p>{speciality} Expart</p>
                    <p>Appointment Fee: <span className='text-[#09982F] font-semibold'>{fees}</span></p>
                </div>
                <hr className='border-dashed border-1 border-gray-300 my-2' />
                <button onClick={()=>handlerRemoveAppointment(id)} className='btn border-[#FF0000] border-1 hover:text-white hover:bg-[#FF0000] bg-white rounded-2xl py-1 px-3 w-full font-semibold text-[#FF0000]'>Cancel Appointment</button>
            </div>
        </div>
    );
};

export default LawyerBook;