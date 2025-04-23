import React from 'react';
import { useLoaderData, useNavigate, useParams } from 'react-router';
import { PiNewspaperClipping } from "react-icons/pi";
import { CiCircleAlert } from "react-icons/ci";
import { getStoredAppointment, setStoredAppointment } from '../LocalDb/LocalDb';
import { toast } from 'react-toastify';

const LawyerDetails = () => {

    const lawyerData = useLoaderData();
    const {lawyerId} = useParams();
    const navigate = useNavigate();
    const existLawyer = lawyerData.find(lawyer => lawyer.id === parseInt(lawyerId));
    
    const {name,experience,image,speciality,licenseNumber,fees,availableDays
    } = existLawyer;

    if (!existLawyer) {
        navigate('/notFound'); 
        return null; 
    }

    const handlerAppointment=(appointment)=>{

        const duplicateData = getStoredAppointment();
        const isDuplicate = duplicateData?.find(data => data.id === appointment.id)
        console.log(isDuplicate)
        if(!isDuplicate?.id)
        {
            setStoredAppointment(appointment);
            navigate('/booking');
            toast.success(`Appointment scheduled for ${appointment.name} successfully`, {
                position: "top-right",});
        }
        else{
            toast.error(`Appointment Already scheduled for Today`, {
                position: "top-right",});
        }
    }

    
    return (
        <div className='max-w-screen-xl mx-auto px-8 md:px-12 lg:px-16 xl:px-24 mb-10'>
            <div className='text-center py-15 px-5 bg-[#14141410] rounded-2xl border-1 border-gray-300 space-y-3 my-10'>
                <h2 className='text-2xl md:text-4xl font-semibold'>Lawyer’s Profile Details</h2>
                <p className='text-base text-[#14141470]'>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. Whether it's a routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.</p>
            </div>
            <div>

            <div className="card lg:card-side bg-base-100 shadow-sm p-1 md:p-4 border-1 border-gray-200">
            <figure className='mx-auto my-auto w-full md:w-[159px] md:h-[158px]'>
                <img
                src={image}
                className="w-full h-full object-cover"
                alt="Album" />
            </figure>
            <div className="card-body">
                <div className='flex w-fit space-x-5'>
                    <p className='px-3 py-1 bg-blue-200 rounded-2xl text-blue-800'>{experience} Experience</p>
                </div>
                <h2 className="card-title">{name}</h2>
                <ul className='flex space-x-4 text-base '>
                    <li>{speciality} Expart</li>
                    <li><PiNewspaperClipping className='inline mr-2' size={15}/>License No: {licenseNumber}</li> 
                </ul>  
                <ul className='flex items-center text-base  space-x-4'>
                    <span>Availability</span>
                    {
                        availableDays.map((day,index) => <li key={index} className='px-3 py-1 bg-yellow-100 rounded-2xl text-yellow-500'>{day}</li>)
                    }
                </ul>
                <p className='text-base '>Consultation Fee: <span className='text-green-500 font-semibold'>Taka {fees}</span></p>
            </div>
            </div>

            <div className='p-4 rounded-2xl border-1 border-gray-300 my-5'>
                <h1 className='text-xl md:text-2xl font-semibold text-center my-4'>Book an Appointment</h1>
                <hr className='border-dashed border-1 border-gray-300 my-2' />
                <div className='flex items-center justify-between'>
                    <span className='text-base font-semibold'>Availablity</span>
                    <span className='px-3 py-1 text-[#0EA106] rounded-2xl bg-[#0EA10650]'>Lawyer Available Today</span>
                </div>
                <hr className='border-dashed border-1 border-gray-300 my-2' />
                <p className='px-3 w-fit py-1 bg-yellow-100 rounded-2xl text-yellow-500 my-5'><CiCircleAlert className='inline mr-2' size={22} />Due to high patient volume, we are currently accepting appointments for today only. We appreciate your understanding and cooperation.</p>
                <button onClick={()=>handlerAppointment(existLawyer)} className='btn border-[#0EA106] border-1 hover:text-[#0EA106] bg-[#0EA106] hover:bg-white rounded-2xl py-1 px-3 w-full font-semibold text-white'>Book Appointment Now</button>
            </div>
            </div>
        </div>
    );
};

export default LawyerDetails;