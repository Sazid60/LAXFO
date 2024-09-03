// eslint-disable-next-line no-unused-vars
import React from 'react';
import { AiOutlinePlus } from 'react-icons/ai'; 

const FeaturedCards = ({ product }) => {
    return (
        <div className='relative w-full lg:w-[295px] mx-auto mt-4 xl:mt-10'>
            <img 
                className='relative w-[398px] h-[230px] md:w-[600px] md:h-[401px]' 
                src={product.imageUrl} 
                alt={product.name} 
            />
            <AiOutlinePlus 
                className='absolute top-3 right-3 text-xl text-white p-1 shadow-md bg-[#164F49]' 
            />
            <div className='flex items-center justify-between mt-2'>
                <h1 className='text-xl '>{product.name}</h1> 
                <p className='text-lg font-semibold italic'>{product.price}</p> 
            </div>
            <p className='mt-2 text-xs'>{product.description}</p> 
            <p className='mt-1 text-xs italic font-medium'>{product.measurement}</p> 
        </div>
    );
};

export default FeaturedCards;
