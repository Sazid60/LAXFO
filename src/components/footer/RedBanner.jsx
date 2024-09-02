import React from 'react';

const RedBanner = () => {
    return (
        <div className='flex flex-col lg:flex-row justify-center gap-8 lg:gap-6 items-center text-center bg-[#FF6B6E] px-9 py-7 md:px-20 md:py-4 text-white text-xl md:text-2xl font-normal'>
            <div>
                <h1 className='mb-4 text-nowrap'>Free BD shopping Over <span className='font-medium italic'>BDT1500</span></h1>
                <a  className='text-xl' href="">Shop Now</a>
            </div>
            <div>
                <h1 className='mb-4 text-nowrap'><span className='font-medium italic'>3-5 Day</span> International Shipping</h1>
                <a className='text-xl' href="">Learn More</a>
            </div>
            <div>
                <h1 className='mb-4 text-nowrap'>Rated <span className='font-medium italic'>4.8 out of 5 </span> on Trustpilot</h1>
                <a className='text-xl' href="">Read our Reviews</a>
            </div>
        </div>
    );
};

export default RedBanner;