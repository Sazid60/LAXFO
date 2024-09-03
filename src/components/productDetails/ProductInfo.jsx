import React, { useState, useEffect } from 'react';
import { FaStar } from 'react-icons/fa';

const ProductInfo = () => {
    const sizes = ['100 mg', '200 mg', '300 mg'];
    const flavours = ['Vanilla', 'Chocolate', 'Strawberry'];

    const [selectedSize, setSelectedSize] = useState(sizes[0]);
    const [selectedFlavour, setSelectedFlavour] = useState(flavours[0]);
    const [quantity, setQuantity] = useState(0);

    // Unit price for the product
    const unitPrice = 4332.23;

    useEffect(() => {
        // Reset quantity to 0 when size or flavour changes
        setQuantity(0);
    }, [selectedSize, selectedFlavour]);

    const handleAddToCart = (action) => {
        let newQuantity = quantity;

        // Increase or decrease the quantity based on the action
        if (action === 'increase') {
            newQuantity += 1;
        } else if (action === 'decrease' && quantity > 0) {
            newQuantity -= 1;
        }

        // Updating the state
        setQuantity(newQuantity);

        // If increasing the quantity to be added to cart
        if (action === 'increase') {
            // Updates the total price with the new quantity
            const updatedTotalPrice = unitPrice * newQuantity;

            const cartItem = {
                name: 'Liposomal Vitamin C',
                price: updatedTotalPrice, // Updates totalPrice here
                size: selectedSize,
                flavour: selectedFlavour,
                quantity: newQuantity
            };

            // Retrieved existing cart items from local storage
            const cart = JSON.parse(localStorage.getItem('cart')) || [];

            // Finding the index of the item in the cart if it exists
            const itemIndex = cart.findIndex(
                item => item.name === cartItem.name && item.size === cartItem.size && item.flavour === cartItem.flavour
            );

            if (itemIndex > -1) {
                // Updating the quantity and total price of the existing item in the cart
                cart[itemIndex].quantity = newQuantity;
                cart[itemIndex].price = updatedTotalPrice;
            } else {
                // Adding the new item to the cart
                cart.push(cartItem);
            }

            // Saving the updated cart back to local storage
            localStorage.setItem('cart', JSON.stringify(cart));
        }
    };

    return (
        <div className="p-4">
            {/* Reviews Section */}
            <div className="flex items-center space-x-2 mb-4">
                <div className='flex items-center'>
                    <FaStar className="text-yellow-500" />
                    <FaStar className="text-yellow-500" />
                    <FaStar className="text-yellow-500" />
                    <FaStar className="text-yellow-500" />
                    <FaStar className="text-yellow-500" />
                </div>
                <a href="#" className="underline">See All Reviews</a>
            </div>

            {/* Product Title and Price */}
            <h1 className="text-2xl xl:text-4xl font-bold mb-2 italic">Liposomal Vitamin C</h1>
            <h2 className="text-xl xl:text-3xl text-gray-700 mb-4">
                <span className='italic'>BDT</span> {unitPrice.toFixed(2)}
            </h2>

            {/* Product Description */}
            <div className="mb-4 text-sm xl:text-base">
                <p className="mb-2">
                    Liposomal Vitamin C is an advanced form of Vitamin C encapsulated within liposomes, which are tiny fat-like particles that enhance its absorption and bioavailability in the body.
                </p>
                <p className="mb-2">
                    This delivery method allows for more efficient cellular uptake, ensuring that higher levels of Vitamin C reach the bloodstream and tissues.
                </p>
                <p>
                    It provides potent antioxidant support, boosts the immune system, promotes collagen production, and enhances skin health. Liposomal Vitamin C is ideal for those seeking maximum benefits from their Vitamin C supplementation.
                </p>
            </div>

            {/* Selecting Size */}
            <div className="mb-4 flex items-center">
                <h1 className="text-base font-semibold mb-2 mr-1 xl:mr-8">Select Size :</h1>
                <div className="flex space-x-2">
                    {sizes.map((size, index) => (
                        <div
                            key={index}
                            onClick={() => setSelectedSize(size)}
                            className={`py-1 px-2 flex items-center justify-center border-2 cursor-pointer text-xs xl:text-lg ${selectedSize === size ? 'bg-[#164F49] text-white' : 'bg-white text-black border-gray-300'
                                }`}
                        >
                            {size}
                        </div>
                    ))}
                </div>
            </div>

            {/* Selecting Flavour */}
            <div className='flex items-center'>
                <h1 className="text-sm xl:text-lg font-semibold mr-1 xl:mr-8">Flavour :</h1>
                <div className="space-x-2 flex items-center">
                    {flavours.map((flavour, index) => (
                        <label key={index} className="flex items-center space-x-1">
                            <input
                                type="radio"
                                name="flavour"
                                value={flavour}
                                checked={selectedFlavour === flavour}
                                onChange={() => setSelectedFlavour(flavour)}
                                className="form-radio text-green-500"
                            />
                            <span className='text-xs xl:text-lg'>{flavour}</span>
                        </label>
                    ))}
                </div>
            </div>

            {/* Cart Adding */}
            <div className="border-t border-b my-6 py-4">
                <div className="flex items-center justify-between mb-2 bg-[#164F49] text-white">
                    <button
                        onClick={() => handleAddToCart('decrease')}
                        className="px-4 py-1  text-white font-bold uppercase text-sm"
                    >
                        <span className="text-xl">-</span>
                    </button>
                    <span className="mx-4">Add to Cart ({quantity})</span>
                    <button
                        onClick={() => handleAddToCart('increase')}
                        className="px-4 py-1  text-white font-bold uppercase text-sm"
                    >
                        <span className="text-xl">+</span>
                    </button>
                </div>

                {/* Pickup Info */}
                <p className="text-sm">Pickup available at our <strong className='italic'>22 Bistro Place, Banani</strong></p>
                <p className="text-gray-500 text-sm mb-2 mt-2">Usually ready in 2-4 days</p>

                {/* Subscription Options */}
                <div className="border mt-6">
                    <div className="border-b p-2 lg:p-4 flex justify-between">
                        <div>
                            <p className="font-semibold text-xs lg:text-sm">Subscribe & Save 10%</p>
                            <p className="text-xs lg:text-xs">FREE SHIPPING + Cancel anytime</p>
                            <p className="text-xs underline font-medium">YOUR SUBSCRIPTION PERKS +</p>
                        </div>
                        <p className="font-semibold mt-2 text-sm xl:text-xl">BDT 800</p>
                    </div>

                    <div className="text-gray-300 p-2 lg:p-4 flex justify-between">
                        <div>
                            <p className="text-xs lg:text-sm">One Time Purchase</p>
                            <p className="text-xs">or four interest-free payments of <br /> BDT 20 with Sezzle</p>
                        </div>
                        <p className="font-semibold mt-2 text-sm xl:text-xl">BDT 200</p>
                    </div>
                </div>
            </div>

            {/* Product Features */}
            <div className="flex items-center justify-between text-[10px] xl:text-xs text-gray-600 space-x-2 text-center">
                <div className="flex flex-col items-center">
                    <img src="/ic1.png" alt="Icon 1" className="w-4 h-4 xl:w-5 xl:h-5" />
                    <p>Founded by Doctors</p>
                </div>
                <div className="flex flex-col items-center">
                    <img src="/ic2.png" alt="Icon 1" className="w-4 h-4 xl:w-5 xl:h-5" />
                    <p>Made in Bangladesh</p>
                </div>
                <div className="flex flex-col items-center">
                    <img src="/ic3.png" alt="Icon 1" className="w-4 h-4 xl:w-5 xl:h-5" />
                    <p>Clinically Verified</p>
                </div>
            </div>
        </div>
    );
};

export default ProductInfo;
