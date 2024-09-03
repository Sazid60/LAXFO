import React, { useState, useEffect } from 'react';
import { FaTrashAlt } from 'react-icons/fa';

const CartPage = () => {
    const [cart, setCart] = useState([]);
    const [subtotal, setSubtotal] = useState(0);

    // handles the side effects
    useEffect(() => {
        const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
        setCart(savedCart);
        calculateSubtotal(savedCart);
    }, []);

    // for any kind of updates in the cart tems
    const updateCart = (updatedCart) => {
        setCart(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
        calculateSubtotal(updatedCart);
    };

    // handles the quantity changes increase or decrease
    const handleQuantityChange = (name, size, action) => {
        const updatedCart = cart.map((item) => {
            if (item.name === name && item.size === size) {
                const newQuantity = action === 'increase' ? item.quantity + 1 : item.quantity - 1;
                const updatedPrice = newQuantity * item.price / item.quantity;
                return { ...item, quantity: newQuantity, price: updatedPrice };
            }
            return item;
        }).filter(item => item.quantity > 0);

        updateCart(updatedCart);
    };

    // Removes item by clicking
    const handleRemoveItem = (name, size) => {
        const updatedCart = cart.filter(item => item.name !== name || item.size !== size);
        updateCart(updatedCart);
    };

    // Calculates total purchase money
    const calculateSubtotal = (cartItems) => {
        const total = cartItems.reduce((acc, item) => acc + item.price, 0);
        setSubtotal(total);
    };

    return (
        <div className="cart-page bg-[#FFFFF6] p-4 w-full mx-auto shadow-md rounded-lg min-h-screen px-5 md:px-10 xl:px-20">
            <h1 className="text-xl font-bold mb-3">Shopping Cart</h1>
            <p className="text-sm mb-3 text-gray-500">Add items worth Tk 30 for free shopping</p>
            <div className="progress-bar bg-gray-200 rounded-full h-2 mb-5">
                <div className="bg-[#164F49] h-2 rounded-full" style={{ width: '80%' }}></div>
            </div>
            <p className="text-gray-700 mb-5">Added items ({cart.length} Items)</p>
            <div>
                {cart.map((item, index) => (
                    <div key={index} className="flex items-center justify-between mb-4 border-b pb-4">
                        <div className='flex items-center'>
                            <img src={item.imageUrl} alt={item.name} className="w-16 h-16 object-cover" />
                            <div className='ml-4 space-y-1 md:space-y-2'>
                                <h2 className="text-xs md:text-lg font-medium">{item.name}</h2>
                                <p className="text-xs md:text-sm text-gray-600">({item.size})</p>
                                <div className="flex justify-center items-center rounded-full bg-[#F2EBE0] w-[90px]">
                                    <button
                                        onClick={() => handleQuantityChange(item.name, item.size, 'decrease')}
                                        className="px-1 py-1 text-xs md:text-sm"
                                    >
                                        -
                                    </button>
                                    <span className="mx-2 text-xs md:text-sm">{item.quantity}</span>
                                    <button
                                        onClick={() => handleQuantityChange(item.name, item.size, 'increase')}
                                        className="px-1 py-1 text-xs md:text-sm"
                                    >
                                        +
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className='space-y-8 text-center'>
                            <p className="text-xs md:text-sm font-semibold ml-4">{item.price.toFixed(0)} Tk</p>
                            <button
                                onClick={() => handleRemoveItem(item.name, item.size)}
                                className="ml-4 text-red-500"
                            >
                                <FaTrashAlt />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            {/* Sub total Section */}
            <div className="mt-6">
                <div className="flex justify-between text-lg font-semibold">
                    <span>Subtotal</span>
                    <span>{subtotal.toFixed(2)} Tk</span>
                </div>
                <button className="w-full bg-[#164F49] text-white py-2 rounded-full mt-4 text-lg">Checkout</button>
            </div>
        </div>
    );
};

export default CartPage;
