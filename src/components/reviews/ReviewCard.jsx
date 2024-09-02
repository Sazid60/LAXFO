// eslint-disable-next-line no-unused-vars
import React from 'react';
import { BiDislike, BiLike } from 'react-icons/bi';
import { FaRegStar, FaStar } from 'react-icons/fa';

// eslint-disable-next-line react/prop-types
const ReviewCard = ({review}) => {
    console.log(review)
    const {name,image,product,rating,details,date} = review || {}
    return (
        <div className='mt-3'>
            <div className='flex justify-between items-start'>
                <div>
                    <div className='flex items-center gap-2 mb-1'>
                        <div className='rounded-full bg-slate-300 p-1'>
                            <img src={image} alt="" />
                        </div>
                        <h1 className='font-semibold italic text-sm md:text-base'>{name}</h1>
                    </div>
                    <div className='flex items-center gap-2 mb-3 lg:mb-4'>
                        <div className='flex items-center gap-1'>
                            {/* Rendering stars based on rating */}
                            {rating >= 1 ? <FaStar color="gold" /> : <FaRegStar />}
                            {rating >= 2 ? <FaStar color="gold" /> : <FaRegStar />}
                            {rating >= 3 ? <FaStar color="gold" /> : <FaRegStar />}
                            {rating >= 4 ? <FaStar color="gold" /> : <FaRegStar />}
                            {rating >= 5 ? <FaStar color="gold" /> : <FaRegStar />}
                        </div>
                        <h1 className='text-sm md:text-base'>{product}</h1>
                    </div>
                </div>
                <div>
                    <h1 className='font-semibold italic text-sm md:text-base'>{date}</h1>
                </div>
            </div>
            <div className='flex flex-col lg:flex-row justify-between items-start space-y-3 lg:space-y-0 lg:items-center'>
                <h1 className='max-w-[758px]'>{details}</h1>
                <div className='flex items-center gap-2'>
                    <h1>Was this helpful?</h1> 
                    <BiLike /> 
                    <BiDislike />
                    </div>
            </div> <hr className='mt-2' />
        </div>
    );
};

export default ReviewCard;