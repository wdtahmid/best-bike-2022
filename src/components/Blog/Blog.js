import React from 'react';

const Blog = () => {
    return (
        <div className='w-4/5 mx-auto my-20'>
            <h2 className='text-6xl uppercase font-bolder text-center'>Blogs</h2>

            <div>
                <h2>Q1.What is the context API? How it works?</h2>
                <p>
                    The context api is a way to pass data to the child component avoiding the props drilling. It works with the useCotext react hook.
                </p>
            </div>
            <div>
                <h2>Q2.What are the semantic tags?</h2>
                <p>
                    In the easiest way to understand the seamntic tags is "The seamntic tags are meaning full like a word that has a meaning." So, that we can understand which part it is of a website. Like.. header, footer, aside, article... etc.
                </p>
            </div>
            <div>
                <h2>Q3.What is the inline, block and inline-block element?</h2>
                <p>
                    Inline elements are the elements those are don't a new line. It display side by site in default.
                </p>
                <p>
                    Block elements are the elements those are create a new line.
                </p>
                <p>
                    Inline-Block is css display propertie's value. Imake the block elements in inline. Normaly block element create new line.
                </p>
            </div>
        </div>
    );
};

export default Blog;