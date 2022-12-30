import React from 'react';
import { FaRegCalendarAlt, FaPhoneAlt, FaMapMarkerAlt,  } from "react-icons/fa";


const ContactTime = () => {
    return (
        <div className='flex max-w-screen-lg mx-auto  bg-slate-700 items-center md:justify-around flex-col md:flex-row  my-20 p-20 rounded-xl text-white'>
            <div className='flex items-center m-4'>
                <FaRegCalendarAlt className='text-3xl mr-3'></FaRegCalendarAlt>
                 <div>
                    <p className='text-sm'>We are open monday-friday</p>
                    <h3 className='text-2xl'>7:00 am - 9:00 pm</h3>
                 </div>
            </div>
            <div className='flex items-center m-4'>
                <FaPhoneAlt className='text-3xl mr-3'></FaPhoneAlt>
                 <div>
                    <p className='text-sm'>Have a question?</p>
                    <h3 className='text-2xl'>+2546 251 2658</h3>
                 </div>
            </div>
            <div className='flex items-center m-4'>
                <FaMapMarkerAlt className='text-3xl mr-3'></FaMapMarkerAlt>
                 <div>
                    <p className='text-sm'>Need a repair? our address</p>
                    <h3 className='text-2xl'>Liza Street, New York</h3>
                 </div>
            </div>
        </div>
    );
};

export default ContactTime;