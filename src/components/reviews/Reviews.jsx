// eslint-disable-next-line no-unused-vars
import React from 'react';
import { FaSearch } from 'react-icons/fa';
import ReviewCard from './ReviewCard';

const Reviews = () => {
    const reviews = [
        {
            name: "Beth E.",
            image: "/reviewer.png",
            product: "Great Vitamins",
            rating: "5",
            details: "I love my line up of IWI vitamins and they are by far the best brand I have found.",
            date: "5 june,2024"
        },
        {
            name: "Martina Decosta.",
            image: "/reviewer.png",
            product: "Great Vitamins",
            rating: "3",
            details: "Algae oil is one of the greatest nutrients on the planet. So grateful iwi makes it available in a pure, trustworthy, high quality, natural form! I can't believe I am already seeing/feeling a difference.",
            date: "1 june,2024"
        },
        {
            name: "Beth E.",
            image: "/reviewer.png",
            product: "Great Vitamins",
            rating: "1",
            details: "I love my line up of IWI vitamins and they are by far the best brand I have found.",
            date: "23 april,2024"
        },
    ]

    return (
        <div className='px-4 xl:px-20 mb-4 xl:mb-14 border-t border-b'>
            <h1 className='text-[40px] font-semibold'>Reviews</h1>
            <div className='flex flex-col md:flex-row justify-start  md:justify-between items-start space-y-3 md:space-y-0 md:items-center'>
                <button className='text-white bg-[#164F49] px-8 py-2'>Write a Review</button>
                <div className='flex justify-center items-center'>

                    <div className='relative w-full max-w-md'>
                        <input
                            type="text"
                            className='w-full py-2 pl-4 pr-10 bg-[#164F49] text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-[#4CAF50]'
                            placeholder='Search...'
                        />
                        <button className='absolute inset-y-0 right-0 flex items-center pr-4'>
                            <FaSearch className='text-white' />
                        </button>
                    </div>
                    <select
                        name="media"
                        id="media-select"
                        className='w-full p-2 bg-white border border-gray-300 ml-2 focus:outline-none focus:ring-2 focus:ring-green-500'
                    >
                        <option defaultValue={"Audio"}>Select Media Type</option>
                        <option value="images">Images</option>
                        <option value="videos">Videos</option>
                    </select>
                </div>
            </div>
            <div className='grid grid-cols-1 gap-4 mt-10 lg:mt-14'>
                {reviews.map((review, index) => (
                    <ReviewCard key={index} review={review} />
                ))}
            </div>
        </div>
    );
};

export default Reviews;