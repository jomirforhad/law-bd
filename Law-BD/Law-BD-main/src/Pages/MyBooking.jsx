import React, { useEffect, useState } from 'react';
import { getStoredAppointment, removeStoredAppointment } from '../LocalDb/LocalDb';
import LawyerBook from '../Components/LawyerBook';
import { Link } from 'react-router';
import { toast } from 'react-toastify';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';


const MyBooking = () => {

    const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];
    const [displayAppointment,setDisplayAppointment] = useState([]);
    useEffect(()=>{
        const allAppointmnet = getStoredAppointment();
        setDisplayAppointment(allAppointmnet);
    },[])

    const handlerRemoveAppointment = (id)=>{
        removeStoredAppointment(id);
        setDisplayAppointment(getStoredAppointment);
        toast.error(`Appointment Cancled`, {
        position: "top-right"});
    }

    const getPath = (x, y, width, height) => {
        return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
        ${x + width / 2}, ${y}
        C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
        Z`;
      };

    const TriangleBar = (props) => {
        const { fill, x, y, width, height } = props;
      
        return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
      };
    
    return (
        <div className='max-w-screen-xl mx-auto px-8 md:px-12 lg:px-16 xl:px-14 my-10 '>
           
            {displayAppointment.length !== 0 ?  
            <div>
                <div className='w-full h-[300px] my-10'>
                <ResponsiveContainer>
                <BarChart
                    data={displayAppointment}
                    margin={{
                        top: 20,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                    >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Bar dataKey="fees" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                        {displayAppointment.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                        ))}
                    </Bar>
                </BarChart>
                </ResponsiveContainer>
                </div>
                <div className='text-center space-y-4'>
                    <h1 className='text-2xl md:text-4xl font-semibold'>My Today Appointments</h1>
                    <p className='text-base text-[#0F0F0F]'>Our platform connects you with verified, experienced Lawyers across various specialties — all at your convenience.</p>
                </div>
                <div>
                    {
                        displayAppointment.map( appointment => <LawyerBook 
                            key={appointment.id} 
                            appointment={appointment}
                            handlerRemoveAppointment={handlerRemoveAppointment}
                            ></LawyerBook>)
                    }
                </div> 
            </div> 
            : 
            <div className='text-center space-y-4'>
                <h1 className='text-2xl md:text-4xl font-semibold'>You Have not Booked any appointment yet</h1>
                <p className='text-base text-[#0F0F0F]'>Our paltfrom connects with you verified , expreience Lawyer across various specialties - all at your convenience.</p>
                <Link to={'/'}><button className='btn bg-blue-600 text-white font-semibold rounded-lg px-3 py-1'>Book an Appointment</button></Link>
            </div>
            }
        </div>
    );
};

export default MyBooking;