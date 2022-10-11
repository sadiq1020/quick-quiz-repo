import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <nav className=' bg-blue-400 flex flex-col md:flex-row justify-around items-center p-5 text-white'>
            <div>
                <NavLink to='/'><h2 className='text-3xl font-semibold'>Quick <span className='text-blue-800'>Quiz</span></h2></NavLink>
            </div>
            <div>
                <NavLink to='/home' className={({ isActive }) => isActive ? 'mx-2 text-lg font-serif text-blue-800' : 'mx-2 text-lg font-serif'}>Home</NavLink>

                <NavLink to='/statistics' className={({ isActive }) => isActive ? 'mx-2 text-lg font-serif text-blue-800' : 'mx-2 text-lg font-serif'}>Statistics</NavLink>

                <NavLink className={({ isActive }) => isActive ? 'mx-2 text-lg font-serif text-blue-800' : 'mx-2 text-lg font-serif'} to='/blog'>Blog</NavLink>
            </div>
        </nav>
    );
};

export default Header;