// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/navbar/navbar';
import Footer from '../components/footer/Footer';
import { Toaster } from 'react-hot-toast';

const MainLayout = () => {
    return (
        <div className='font-libre'>
            <div className=' text-center text-[8px] lg:text-xs bg-[#DCD2BB] py-2'>
                <h1>Our new website is live! While we fine-tune, your patience is appreciated</h1>
            </div>

            <div className=''>
                <div className='px-4 bg-[#F2EBE0]'>
                    <Navbar />
                </div>
                <div>
                    <Outlet />
                </div>
                <Footer />
            </div><Toaster
                position="top-center"
                reverseOrder={false}
            />
        </div>
    );
};

export default MainLayout;