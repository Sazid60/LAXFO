import React, { useState, useEffect } from 'react';
import { FaTrashAlt } from 'react-icons/fa';

const CartPage = () => {
    const [cart, setCart] = useState([]);
    const [subtotal, setSubtotal] = useState(0);

    useEffect(() => {
        const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
        setCart(savedCart);
        calculateSubtotal(savedCart);
    }, []);

    const updateCart = (updatedCart) => {
        setCart(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
        calculateSubtotal(updatedCart);
    };

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

    const handleRemoveItem = (name, size) => {
        const updatedCart = cart.filter(item => item.name !== name || item.size !== size);
        updateCart(updatedCart);
    };

    const calculateSubtotal = (cartItems) => {
        const total = cartItems.reduce((acc, item) => acc + item.price, 0);
        setSubtotal(total);
    };

    return (
        <div className="cart-page bg-[#FFFFF6] p-4 w-full mx-auto shadow-md rounded-lg min-h-screen">
            <h1 className="text-xl font-bold mb-2">Shopping Cart</h1>
            <p className="text-sm mb-2 text-gray-500">Add items worth Tk 30 for free shopping</p>
            <div className="progress-bar bg-gray-200 rounded-full h-2 mb-4">
                <div className="bg-[#164F49] h-2 rounded-full" style={{ width: '80%' }}></div>
            </div>
            <p className="text-gray-700 mb-4">Added items ({cart.length} Items)</p>
            <div>
                {cart.map((item, index) => (
                    <div key={index} className="flex justify-between items-center mb-4 border-b pb-4">
                        <img src={item.imageUrl} alt={item.name} className="w-16 h-16 object-cover" />
                        <div className="flex-1 ml-4">
                            <h2 className="text-md font-medium">{item.name}</h2>
                            <p className="text-sm text-gray-600">({item.size})</p>
                        </div>
                        <div className="flex items-center rounded-full bg-[#F2EBE0]">
                            <button
                                onClick={() => handleQuantityChange(item.name, item.size, 'decrease')}
                                className="px-2 py-1"
                            >
                                -
                            </button>
                            <span className="mx-2">{item.quantity}</span>
                            <button
                                onClick={() => handleQuantityChange(item.name, item.size, 'increase')}
                                className="px-2 py-1"
                            >
                                +
                            </button>
                        </div>
                        <p className="text-md font-semibold ml-4">{item.price.toFixed(2)} Tk</p>
                        <button
                            onClick={() => handleRemoveItem(item.name, item.size)}
                            className="ml-4 text-red-500"
                        >
                            <FaTrashAlt />
                        </button>
                    </div>
                ))}
            </div>
            <div className="mt-6">
                <div className="flex justify-between text-lg font-semibold">
                    <span>Subtotal</span>
                    <span>{subtotal.toFixed(2)} Tk</span>
                </div>
                <button className="w-full bg-[#164F49] text-white py-2 rounded-md mt-4">Checkout</button>
            </div>
        </div>
    );
};

export default CartPage;
