import React, { useState } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';

const FeaturedCards = ({ product }) => {
    // Local state for quantity
    const [quantity, setQuantity] = useState(0);

    // Handle click event for the '+' icon
    const handleAddToCart = () => {
        // Increase the quantity
        const newQuantity = quantity + 1;
        setQuantity(newQuantity);

        // Calculate updated price based on new quantity
        const updatedPrice = product.price * newQuantity;

        // Prepare product data
        const cartItem = {
            name: product.name,
            price: updatedPrice, // Update price based on quantity
            imageUrl: product.imageUrl,
            size: product.measurement, // Include measurement as size
            quantity: newQuantity
        };

        // Get existing cart from local storage
        const cart = JSON.parse(localStorage.getItem('cart')) || [];

        // Find index of existing item in cart
        const itemIndex = cart.findIndex(
            item => item.name === cartItem.name &&
                    item.measurement === cartItem.measurement
        );

        if (itemIndex > -1) {
            // Update existing item in cart
            cart[itemIndex].quantity = newQuantity;
            cart[itemIndex].price = updatedPrice;
        } else {
            // Add new item to cart
            cart.push(cartItem);
        }

        // Save updated cart to local storage
        localStorage.setItem('cart', JSON.stringify(cart));
    };

    return (
        <div className='relative w-full lg:w-[295px] mx-auto mt-4 xl:mt-10'>
            <img 
                className='relative w-[398px] h-[230px] md:w-[600px] md:h-[401px]' 
                src={product.imageUrl} 
                alt={product.name} 
            />
            <AiOutlinePlus 
                className='absolute top-3 right-3 text-xl text-white p-1 shadow-md bg-[#164F49] cursor-pointer' 
                onClick={handleAddToCart}
            />
            <div className='flex items-center justify-between mt-2'>
                <h1 className='text-xl'>{product.name}</h1> 
                <p className='text-lg font-semibold italic'>{(product.price)} BDT</p> 
            </div>
            <p className='mt-2 text-xs'>{product.description}</p> 
            <p className='mt-1 text-xs italic font-medium'>{product.measurement}</p> 
        </div>
    );
};

export default FeaturedCards;
