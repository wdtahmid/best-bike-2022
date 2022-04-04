import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='py-10'>
            <nav className='text-xl font-semibold uppercase flex flex-wrap gap-4 md:gap-10 justify-center'>
                <Link to='/'>Home</Link>
                <Link to='/reviews'>Reviews</Link>
                <Link to='/dashboard'>Dashboard</Link>
                <Link to='/blog'>Blog</Link>
                <Link to='/about'>About</Link>
            </nav>
        </div>
    );
};

export default Header;