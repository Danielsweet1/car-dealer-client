import React from 'react';
import UseTitle from '../../../hooks/UseTitle';
import Banner from '../Banner/Banner';
import Categories from '../Categories/Categories';
import Serve from '../serve/Serve';
import Testimonials from '../Testimonials/Testimonials';
import ContactMe from './ContactUs/ContactUs';

const Home = () => {
    UseTitle('Home')
    return (
        <div >
        <Banner></Banner>
        <Categories></Categories>
        <Serve/>
        <Testimonials></Testimonials>
        <ContactMe/>
        </div>
    );
};

export default Home;