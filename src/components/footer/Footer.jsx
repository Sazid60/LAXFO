// eslint-disable-next-line no-unused-vars
import React from 'react';
import { GoArrowUpRight } from 'react-icons/go';

const Footer = () => {
    return (
        <div className='flex flex-col lg:flex-row lg:gap-6 lg:justify-around items-center bg-[#15322D] text-white py-14 px-4 md:px-16 md:py-6 lg:px-20 lg:py-11'>
            <div className='flex justify-start w-full lg:w-auto'>
                <img src="/logo2.png" alt="" />
            </div>
            <div className='max-w-[398px] md:max-w-[450px] text-center mt-14 lg:mt-0'>
                <h1>Subscribe to the newsletter and always stay updated on the 
                latest news and exclusive promotions.</h1>
                <div className='flex justify-between items-center mt-7'>
                    <input type="text" className='bg-[#15322D]' placeholder='Your Email Address' />
                    <h1 className='flex justify-center items-center gap-2'>Submit <span><GoArrowUpRight /></span></h1>
                </div><hr className='mt-2' />
            </div>
            <div className='mt-11 lg:mt-0'>
                <h1 className='text-center lg:text-left'>We are here to help</h1>
                <div className='flex justify-center items-center space-x-5 mt-3'>
                    <img src="icon1.png" alt="" />
                    <img src="icon2.png" alt="" />
                    <img src="icon3.png" alt="" />
                    <img src="icon4.png" alt="" />
                    <img src="icon5.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Footer;