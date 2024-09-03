// eslint-disable-next-line no-unused-vars
import React from 'react';
import ProductCarousel from './ProductCarousel';
import ProductInfo from './ProductInfo';
import { CiHeart } from 'react-icons/ci';

const ProductDetails = () => {
    return (
        <div>
            <div className='flex justify-between items-center px-2 xl:px-20 py-4 xl:py-8 text-xs lg:text-base'>
                <h1>Home - Vitamin C Supplements</h1>
                <a className='italic underline'>
                    <span className='block sm:hidden'>
                    <CiHeart />
                    </span>
                    <span className='hidden sm:block'>
                        Add To Website
                    </span>
                </a>
            </div>
            <hr />
            <div className='flex flex-col lg:flex-row items-start lg:px-3 xl:px-20  border-t border-b'>
                <div className='w-[370px] md:w-auto lg:w-[600px] h-auto px-4'>
                    <ProductCarousel />
                </div>
                <div className=''>
                    <ProductInfo />
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;