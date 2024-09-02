// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <div >
        <div className='font-libre text-center text-[10px] lg:text-xs bg-[#DCD2BB] py-2'>
            <h1>Our new website is live! While we fine-tune, your patience is appreciated</h1>
        </div>
            <div>
                <Outlet />
            </div>
        </div>
    );
};

export default MainLayout;