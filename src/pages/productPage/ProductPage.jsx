// eslint-disable-next-line no-unused-vars
import React from 'react';
import RedBanner from '../../components/footer/RedBanner';
import Consultation from '../../components/consultation/Consultation';
import Banner from '../../components/banner/Banner';
import Accordion from '../../components/accordion/Accordion';

const ProductPage = () => {
    return (
        <div>
            <h1>This is Product Page</h1>
            <Accordion/>
            <Banner/>
            <Consultation/>
            <RedBanner />
        </div>
    );
};

export default ProductPage;