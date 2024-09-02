// eslint-disable-next-line no-unused-vars
import React from 'react';

const Banner = () => {
    return (
        <div className='bg-[#677557] flex flex-col lg:flex-row items-center'>
            <div className='w-full xl:w-[50%]'>
                <img className='w-full' src="/BannerImage.png" alt="" />
            </div>
            <div className='text-xl md:text-2xl lg:text-3xl xl:text-4xl lg:ml-10 italic lg:w-[50%] px-4 py-14 xl:px-0 xl:py-0'>
                <h1 className='font-bold text-white'>As a certified organic,<br /> family-run <br /> pharmaceutical, our Laxfo <br /> goes directly from us to you <br />—with love.</h1>
            </div>
        </div>
    );
};

export default Banner;