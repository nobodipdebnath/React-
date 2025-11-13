import React from 'react';
import { NavLink } from 'react-router';

const Navbar = () => {
    const links = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/about' >About</NavLink></li>
        <li><NavLink to='/contact'>Contact</NavLink></li>
        <li><NavLink to='/blog'>Blog</NavLink></li>
        <li><NavLink to='/services'>Services</NavLink></li>
    </>
    return (
        <nav className='flex justify-between items-center container mx-auto py-8  '>
            <div>
                <h1 className='text-5xl font-bold'>Logo</h1>
            </div>
            <ul className='flex items-center  font-semibold '>
                {links}
            </ul>
            <div  className='flex items-center gap-6'>
                <button className='common-button'>Login</button>
                <button className='common-button'>Register</button>
            </div>
        </nav>
    );
};

export default Navbar;