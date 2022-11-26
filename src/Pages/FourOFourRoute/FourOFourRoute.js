import React from 'react';
import { Link } from 'react-router-dom';

const FourOFourRoute = () => {
    return (
        <div className='flex text-center flex-col justify-center items-center h-96'>
            <h1 className='font-extrabold text-8xl '>404</h1>
            <p className='text-4xl font-bold'>Something went wrong</p>
            <p className='text-2xl font-semibold'>The page you are trying to enter not Found.</p>
            <Link to='/'>Go Home</Link>
        </div>
    );
};

export default FourOFourRoute;