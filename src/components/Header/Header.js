import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <nav className='bg-blue-400 md:flex justify-around items-center p-5 text-white'>
            <div>
                <NavLink to='/'><h2 className='text-3xl font-semibold'>Quick <span className='text-blue-800'>Quiz</span></h2></NavLink>
            </div>
            <div className=''>
                <NavLink to='/'><span className='mx-2 text-lg font-serif'>Home</span></NavLink>
                <NavLink to='/statistics'><span className='mx-2 text-lg font-serif'>Statistics</span></NavLink>
                <NavLink to='/blog'><span className='mx-2 text-lg font-serif'>Blog</span></NavLink>
            </div>
        </nav>
    );
};

export default Header;