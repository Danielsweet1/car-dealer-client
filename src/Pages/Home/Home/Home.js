import React from 'react';
import UseTitle from '../../../hooks/UseTitle';
import Banner from '../Banner/Banner';
import Advertise from '../Categories/Advertise/Advertise';
import Categories from '../Categories/Categories';
import Testimonials from '../Testimonials/Testimonials';

const Home = () => {
    UseTitle('Home')
    return (
        <div >
        <Banner></Banner>
        <Categories></Categories>
        <Advertise></Advertise>
        <Testimonials></Testimonials>
        </div>
    );
};

export default Home;