import React from 'react';
import people1 from '../../../images/people1.webp'
import people2 from '../../../images/people2.jpg'
import people3 from '../../../images/people3.jpg'
import car1 from '../../../images/download.jpg'
import car2 from '../../../images/car2.jpg'
import car3 from '../../../images/car3.jpg'
import TestimonialCard from './TestimonialCard';

const Testimonials = () => {

    const data = [
        {
            name: 'Augestin',
            image: people1,
            role: 'Customer',
            carImage: car1,
            comment: "It's realy good dealing site. I bought a toyota car from them and it is realy good till now.I haven't face any problem"
        },
        {
            name: 'Elizabeth',
            image: people2,
            role: 'Customer',
            carImage: car3,
            comment: "It's realy good dealing site. I bought a toyota car from them and it is realy good till now.I haven't face any problem"
        },
        {
            name: 'James',
            image: people3,
            role: 'seller',
            carImage: car2,
            comment: "It's realy good dealing site. I bought a toyota car from them and it is realy good till now.I haven't face any problem"
        },
    ]
    return (
        <div className='my-20 max-w-screen-xl mx-auto'>
            <div className='text-center'>
                <h4 className='text-2xl text-red-500 font-semibold'>What Our Happy Clients say about us</h4>
                <h4 className='text-4xl font-bold'>Our Testimonials</h4>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    data.map((item, i)=><TestimonialCard
                    key={i}
                    item={item}
                    ></TestimonialCard>)
                }
            </div>
        </div>
    );
};

export default Testimonials;