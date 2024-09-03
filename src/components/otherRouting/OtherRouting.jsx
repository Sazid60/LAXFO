import React from 'react';

const OtherRouting = ({page}) => {
    return (
        <div className='flex justify-center items-center min-h-screen flex-col text-center bg-[#FFFFF6]'>
            <h1><span className='font-bold text-4xl'>What’s up? </span><br />Design For <span className='text-red-600'>{page}</span> Page Was Not Given.</h1>
        </div>
    );
};

export default OtherRouting;