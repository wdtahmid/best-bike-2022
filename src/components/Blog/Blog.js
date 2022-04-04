import React from 'react';

const Blog = () => {
    return (
        <div className='w-3/5 mx-auto my-20 flex flex-col gap-y-10'>
            <h2 className='text-6xl uppercase font-bolder text-center mb-20'>Blogs</h2>

            <div>
                <h2 className='text-3xl mb-3'>Q1.What is the context API? How it works?</h2>
                <p className='font-semibold text-[18px]'>
                    The context api is a way to pass data to the child component avoiding the props drilling. It works with the useContext react hook.
                </p>
            </div>
            <div>
                <h2 className='text-3xl mb-3'>Q2.What are the semantic tags?</h2>
                <p className='font-semibold text-[18px]'>
                    In the easiest way to understand the seamntic tags is "The seamntic tags are meaning full like a word that has a meaning." So, that we can understand which part it is of a website. Like.. header, footer, aside, article... etc.
                </p>
            </div>
            <div className='flex flex-col gap-y-7'>
                <h2 className='text-3xl mb-3'>Q3.What is the inline, block and inline-block element?</h2>
                <p className='font-semibold text-[18px]'>
                    Inline elements are the elements those are don't a new line. It display side by site in default.
                </p>
                <p className='font-semibold text-[18px]'>
                    Block elements are the elements those are create a new line.
                </p>
                <p className='font-semibold text-[18px]'>
                    Inline-Block is css display propertie's value. Imake the block elements in inline. Normaly block element create new line.
                </p>
            </div>
        </div>
    );
};

export default Blog;