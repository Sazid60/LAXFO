import React from 'react';
import FeaturedCards from './FeaturedCards';
import 'animate.css';

const FeaturedProducts = () => {
    const productData = [
        {
            name: "Omega-3 Essential",
            price: "200",
            description: "Get brighter brain energy from nourishing fats and key vitamins in this clever blend.",
            measurement: "100mg",
            imageUrl: "/card1.jpg",
        },
        {
            name: "Heart",
            price: "300",
            description: "Nourish your heart with clinically studied AlmegaPL® EPA for supporting healthy heart and cardiovascular function.",
            measurement: "200mg",
            imageUrl: "/card2.jpg",
        },
        {
            name: "Omega-3 Minis",
            price: "400",
            description: "Your favorite omega-3, now in an easier-to-swallow mini size.",
            measurement: "300mg",
            imageUrl: "/card3.jpg",
        },
        {
            name: "Vitamin D3 Boost",
            price: "250",
            description: "Support your immune system with this essential vitamin, optimized for better absorption.",
            measurement: "500IU",
            imageUrl: "/card4.jpg",
        },
        {
            name: "Calcium Plus",
            price: "350",
            description: "Fortify your bones and teeth with a potent blend of calcium and vitamin D.",
            measurement: "600mg",
            imageUrl: "/card5.jpg",
        },
        {
            name: "Probiotic Max",
            price: "450",
            description: "Enhance your digestive health with this powerful probiotic formula.",
            measurement: "10B CFU",
            imageUrl: "/card6.jpg",
        },
    ];


    return (
        <div className='px-4 py-6 xl:px-20 mb-4 xl:mb-14 mt-4 xl:mt-10 border-t border-b'>
            <h1 className='text-[40px] font-semibold'>Frequently Bought Together</h1>
            <p className='font-normal italic text-xs lg:text-xl mt-4'>
                In the dynamic world of e-commerce, the "Frequently Bought Together" feature has become a cornerstone of the online shopping experience. This tool leverages the power of data analytics and consumer behavior insights to suggest complementary products that are often purchased in conjunction with the item a customer is viewing. By highlighting these related products, retailers aim to increase sales, improve customer satisfaction, and streamline the shopping process.
            </p>
            {/* warning */}
            <div className='flex justify-center items-center'>
            <div className="flex flex-row pl-4 gap-2 items-center overflow-hidden animate__animated animate__flash animate__infinite" style={{ animationDuration: '10s' }}>
                    <span className="flex-shrink-0 inline-flex item-center justify-center leading-none rounded-full text-red-500">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd"></path>
                        </svg>
                    </span>
                    <div className="flex-1 p-2">
                        <p className="text-xs md:text-sm text-red-600 font-medium underline">Please Click The + Icon in The Top Right Corner Of The Card to Add to Cart</p>
                    </div>
                </div>
            </div>
            {/*  */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6  mb-6'>
                {productData.map((product, index) => (
                    <FeaturedCards key={index} product={product} />
                ))}
            </div>
        </div>
    );
};

export default FeaturedProducts;
