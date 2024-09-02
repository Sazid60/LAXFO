import React, { useState } from 'react';
import { CiSearch } from 'react-icons/ci';
import { IoCartOutline } from 'react-icons/io5';
import { RxCross2, RxHamburgerMenu } from 'react-icons/rx';
import { NavLink } from 'react-router-dom';
import SideNav from './SideNav';

const Navbar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const navLinks = (
        <>
            <li>
                <NavLink
                    className={({ isActive }) => isActive ? 'underline' : 'font-normal'} to={"/"}>
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink
                    className={({ isActive }) => isActive ? 'underline ' : 'font-normal '} to={"/shop"}>
                    Shop
                </NavLink>
            </li>
            <li>
                <NavLink
                    className={({ isActive }) => isActive ? 'underline ' : 'font-normal '} to={"/prescription"}>
                    Prescription
                </NavLink>
            </li>
            <li>
                <NavLink
                    className={({ isActive }) => isActive ? 'underline ' : 'font-normal '} to={"/book"}>
                    Book Therapy
                </NavLink>
            </li>
            <li>
                <NavLink
                    className={({ isActive }) => isActive ? 'underline ' : 'font-normal '} to={"/blog"}>
                    Blog
                </NavLink>
            </li>
            <li>
                <NavLink
                    className={({ isActive }) => isActive ? 'underline ' : 'font-normal  lg:hidden'} to={"/blog"}>
                    sign In
                </NavLink>
            </li>
        </>
    );

    return (
        <>
            <div className="navbar">
                <div className="navbar-start">
                    <a className="text-xl">
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
                        <IoCartOutline className='w-6 h-6' />
                        <a className='text-[14px] hidden md:block lg:text-sm' href=''>Sign In</a>
                        <button onClick={toggleSidebar} className="lg:hidden ml-3">
                            <RxHamburgerMenu />
                        </button>
                    </div>
                </div>
            </div>

            {/* Side Navbar */}
            <SideNav toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} navLinks={navLinks} ></SideNav>

        </>
    );
};

export default Navbar;
