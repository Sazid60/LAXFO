import React, { useState, useEffect } from 'react';
import { FaTrashAlt } from 'react-icons/fa';

const CartDrawer = ({ isOpen, onClose }) => {
    const [cart, setCart] = useState([]);
    const [subtotal, setSubtotal] = useState(0);

    useEffect(() => {
        const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
        setCart(savedCart);
        calculateSubtotal(savedCart);
    }, [isOpen]);

    const updateCart = (updatedCart) => {
        setCart(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
        calculateSubtotal(updatedCart);
    };

    const handleQuantityChange = (name, size, action) => {
        const updatedCart = cart.map((item) => {
            if (item.name === name && item.size === size) {
                const newQuantity = action === 'increase' ? item.quantity + 1 : Math.max(1, item.quantity - 1);
                const updatedPrice = (item.price / item.quantity) * newQuantity;
                return { ...item, quantity: newQuantity, price: updatedPrice };
            }
            return item;
        }).filter(item => item.quantity > 0);

        updateCart(updatedCart);
    };

    const handleRemoveItem = (name, size) => {
        const updatedCart = cart.filter(item => item.name !== name || item.size !== size);
        updateCart(updatedCart);
    };

    const calculateSubtotal = (cartItems) => {
        const total = cartItems.reduce((acc, item) => acc + item.price, 0);
        setSubtotal(total);
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 z-50 overflow-y-auto flex justify-center">
            <div className="relative w-full md:w-1/3 lg:w-1/4 bg-[#FFFFF6] h-full md:h-auto">
                <button onClick={onClose} className="absolute top-4 right-4 text-2xl text-gray-600">
                    &times;
                </button>
                <div className="p-4 h-full overflow-y-auto">
                    <h1 className="text-xl font-bold mb-3">Shopping Cart</h1>
                    <p className="text-sm mb-3 text-gray-500">Add items worth Tk 30 for free shopping</p>
                    <div className="progress-bar bg-gray-200 rounded-full h-2 mb-5">
                        <div className="bg-[#164F49] h-2 rounded-full" style={{ width: '80%' }}></div>
                    </div>
                    <p className="text-gray-700 mb-5">Added items ({cart.length} Items)</p>
                    <div>
                        {cart.length > 0 ? (
                            cart.map((item, index) => (
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
                                                    aria-label={`Decrease quantity of ${item.name} (${item.size})`}
                                                >
                                                    -
                                                </button>
                                                <span className="mx-2 text-xs md:text-sm">{item.quantity}</span>
                                                <button
                                                    onClick={() => handleQuantityChange(item.name, item.size, 'increase')}
                                                    className="px-1 py-1 text-xs md:text-sm"
                                                    aria-label={`Increase quantity of ${item.name} (${item.size})`}
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
                                            aria-label={`Remove ${item.name} (${item.size}) from cart`}
                                        >
                                            <FaTrashAlt />
                                        </button>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p>Your cart is empty.</p>
                        )}
                    </div>
                    {/* Subtotal Section */}
                    <div className="mt-6">
                        <div className="flex justify-between text-lg font-semibold">
                            <span>Subtotal</span>
                            <span>{subtotal.toFixed(2)} Tk</span>
                        </div>
                        <button className="w-full bg-[#164F49] text-white py-2 rounded-md mt-4 text-lg">Checkout</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartDrawer;
