// eslint-disable-next-line no-unused-vars
import React from 'react';
import { RxCross2 } from 'react-icons/rx';

// eslint-disable-next-line react/prop-types
const SideNav = ({ toggleSidebar, isSidebarOpen, navLinks }) => {
    return (
        <>
            <div
                className={`fixed inset-y-0 left-0 z-50 w-full bg-[#F2EBE0] transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out lg:hidden`}
            >
                <div className='flex justify-between items-center px-6 py-3'>
                    <img src="/logo.png" className='' alt="" />
                    <RxCross2 onClick={toggleSidebar} />
                </div> <hr className='h-[1px] bg-slate-400 border-0' />
                <div className="flex flex-col items-center justify-center p-4 mt-16 ">
                    <ul className="menu flex flex-col items-center text-4xl space-y-4 font-medium">
                        {navLinks}
                    </ul>
                </div>
            </div>
            {/* Overlay */}
            {
                isSidebarOpen && (
                    <div
                        className="fixed inset-0 bg-black opacity-50 z-40 lg:hidden"
                        onClick={toggleSidebar}
                    ></div>
                )
            }
        </>
    );
};

export default SideNav;