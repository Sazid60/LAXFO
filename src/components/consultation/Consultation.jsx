// eslint-disable-next-line no-unused-vars
import React from 'react';

const Consultation = () => {
    return (
        <div className='flex flex-col lg:flex-row justify-center gap-0  xl:gap-56 items-center bg-[#F2E7CE] px-4 lg:px-0'>
            <div>
                <img src="/leaf.png" alt="" />
            </div>
            <div>
                <h3 className='mb-3'>Not Sure where to Start?</h3>
                <h1 className='max-w-[491px] text-3xl md:text-4xl font-bold mb-6'>Book a Free 25 Minute Consultation</h1>
                <button className='bg-[#164F49] px-12 py-3 text-white mb-10 lg:mb-0'>Book Consultation</button>
            </div>
        </div>
    );
};

export default Consultation;