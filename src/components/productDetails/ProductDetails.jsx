// eslint-disable-next-line no-unused-vars
import React from 'react';
import ProductCarousel from './ProductCarousel';
import ProductInfo from './ProductInfo';

const ProductDetails = () => {
    return (
        <div className='flex flex-col lg:flex-row items-start lg:px-3 xl:px-20 pt-4 border-t border-b'>
            <div className='w-[370px] md:w-auto lg:w-[600px] h-auto px-4'>
                <ProductCarousel/>
            </div>
            <div className=''>
                <ProductInfo/>
            </div>
        </div>
    );
};

export default ProductDetails;