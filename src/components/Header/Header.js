import React from 'react';
import CustomLink from '../hooks/CustomLink';

const Header = () => {
    return (
        <div className='py-10'>
            <nav className='text-xl font-semibold uppercase flex flex-wrap gap-4 md:gap-10 justify-center'>
                <CustomLink to='/'>Home</CustomLink>
                <CustomLink to='/reviews'>Reviews</CustomLink>
                <CustomLink to='/dashboard'>Dashboard</CustomLink>
                <CustomLink to='/blog'>Blog</CustomLink>
                <CustomLink to='/about'>About</CustomLink>
            </nav>
        </div>
    );
};

export default Header;