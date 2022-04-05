import React, { useState } from 'react';
import CustomLink from '../hooks/CustomLink';
import { MenuIcon, XIcon } from '@heroicons/react/solid'

const Header = () => {

    const [open, setOpen] = useState(false);
    return (
        <div className='py-10 w-4/6 mx-auto'>

            <div onClick={() => setOpen(!open)} className="mb-6 md:hidden flex justify-between">
                <div className='cursor-pointer'>{open ? <XIcon className='h-5 w-5'></XIcon> : <MenuIcon className='h-5 w-5'></MenuIcon>}</div>
                <div className='cursor-pointer'>MENU</div>
            </div>

            <nav className={`text-xl font-semibold uppercase md:flex flex-wrap gap-4 md:gap-10 justify-center ${open ? 'block' : 'hidden'}`}>
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