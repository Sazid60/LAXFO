import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';

const ProductInfo = () => {
    // Initialize state with the first item in the list
    const sizes = ['100 mg', '200 mg', '300 mg'];
    const flavours = ['Vanilla', 'Chocolate', 'Strawberry'];
    
    const [selectedSize, setSelectedSize] = useState(sizes[0]);
    const [selectedFlavour, setSelectedFlavour] = useState(flavours[0]);

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
            <h2 className="text-xl xl:text-3xl text-gray-700 mb-4"><span className='italic'>BDT</span> 4332.23</h2>

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
                            className={`py-1 px-2 flex items-center justify-center border-2 cursor-pointer text-xs xl:text-lg ${
                                selectedSize === size ? 'bg-[#164F49] text-white' : 'bg-white text-black border-gray-300'
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
        </div>
    );
};

export default ProductInfo;
