import { useState, useEffect } from 'react';
import { CiSearch } from 'react-icons/ci';
import { IoCartOutline } from 'react-icons/io5';
import { RxHamburgerMenu } from 'react-icons/rx';
import { NavLink } from 'react-router-dom';
import SideNav from './SideNav';
import CartDrawer from '../cartDrawer/CartDrawer';

const Navbar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isCartDrawerOpen, setIsCartDrawerOpen] = useState(false);
    const [cartItemCount, setCartItemCount] = useState(0);

    // Toggle sidebar visibility
    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    // Toggle cart drawer visibility
    const toggleCartDrawer = () => {
        setIsCartDrawerOpen(!isCartDrawerOpen);
    };

    // Effect to update the cart item count whenever the sidebar or cart drawer state changes
    useEffect(() => {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
        setCartItemCount(totalItems);
    }, [isCartDrawerOpen, isSidebarOpen]);

    // Navigation links with conditional styling based on active state
    const navLinks = (
        <>
            <li>
                <NavLink className={({ isActive }) => isActive ? 'underline' : 'font-normal'} to={"/"}>
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink className={({ isActive }) => isActive ? 'underline ' : 'font-normal '} to={"/shop"}>
                    Shop
                </NavLink>
            </li>
            <li>
                <NavLink className={({ isActive }) => isActive ? 'underline ' : 'font-normal '} to={"/prescription"}>
                    Prescription
                </NavLink>
            </li>
            <li>
                <NavLink className={({ isActive }) => isActive ? 'underline ' : 'font-normal '} to={"/book"}>
                    Book Therapy
                </NavLink>
            </li>
            <li>
                <NavLink className={({ isActive }) => isActive ? 'underline ' : 'font-normal '} to={"/blog"}>
                    Blog
                </NavLink>
            </li>
            <li>
                <NavLink className={({ isActive }) => isActive ? 'underline ' : 'font-normal  lg:hidden'} to={"/signin"}>
                    Sign In
                </NavLink>
            </li>
        </>
    );

    return (
        <>
            <div className="navbar">
                <div className="navbar-start">
                    {/* Logo and link to home */}
                    <a href='/' className="text-xl">
                        <img src="/logo.png" alt="Logo" />
                    </a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className='flex justify-between gap-1 lg:gap-3 items-center'>
                        <CiSearch className='w-6 h-6' />
                        <div className="relative">
                            <button onClick={toggleCartDrawer} className="relative">
                                <IoCartOutline className='w-6 h-6' />
                                {cartItemCount > 0 && (
                                    <span className="absolute -top-2 -right-2 w-5 h-5 text-xs flex items-center justify-center bg-red-600 text-white rounded-full">
                                        {cartItemCount}
                                    </span>
                                )}
                            </button>
                        </div>
                        <a className='text-[14px] hidden md:block lg:text-sm' href='/signin'>Sign In</a>
                        <button onClick={toggleSidebar} className="lg:hidden ml-3">
                            <RxHamburgerMenu />
                        </button>
                    </div>
                </div>
            </div>

            {/* Side Navbar component */}
            <SideNav toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} navLinks={navLinks} />

            {/* Cart Drawer component */}
            <CartDrawer isOpen={isCartDrawerOpen} onClose={toggleCartDrawer} />
        </>
    );
};

export default Navbar;
