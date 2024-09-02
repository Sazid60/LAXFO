// eslint-disable-next-line no-unused-vars
import React from 'react';
import RedBanner from '../../components/footer/RedBanner';
import Consultation from '../../components/consultation/Consultation';
import Banner from '../../components/banner/Banner';
import Accordion from '../../components/accordion/Accordion';
import Reviews from '../../components/reviews/Reviews';

const ProductPage = () => {
    return (
        <div className='bg-[#FFFFF6]'>
            <Accordion/>
            <Banner/>
            <Reviews/>
            <Consultation/>
            <RedBanner />
        </div>
    );
};

export default ProductPage;