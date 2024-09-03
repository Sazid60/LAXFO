import React from 'react';
import FeaturedCards from './FeaturedCards';

const FeaturedProducts = () => {
    const productData = [
        {
            name: "Omega-3 Essential",
            price: "BDT 200",
            description: "Get brighter brain energy from nourishing fats and key vitamins in this clever blend.",
            measurement: "100mg",
            imageUrl: "/card1.jpg",
        },
        {
            name: "Heart",
            price: "BDT 300",
            description: "Nourish your heart with clinically studied AlmegaPL® EPA for supporting healthy heart and cardiovascular function.",
            measurement: "200mg",
            imageUrl: "/card2.jpg",
        },
        {
            name: "Omega-3 Minis",
            price: "BDT 400",
            description: "Your favorite omega-3, now in an easier-to-swallow mini size.",
            measurement: "300mg",
            imageUrl: "/card3.jpg",
        },
        {
            name: "Vitamin D3 Boost",
            price: "BDT 250",
            description: "Support your immune system with this essential vitamin, optimized for better absorption.",
            measurement: "500IU",
            imageUrl: "/card4.jpg",
        },
        {
            name: "Calcium Plus",
            price: "BDT 350",
            description: "Fortify your bones and teeth with a potent blend of calcium and vitamin D.",
            measurement: "600mg",
            imageUrl: "/card5.jpg",
        },
        {
            name: "Probiotic Max",
            price: "BDT 450",
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
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 mb-6'>
                {productData.map((product, index) => (
                    <FeaturedCards key={index} product={product} />
                ))}
            </div>
        </div>
    );
};

export default FeaturedProducts;
