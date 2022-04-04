import React from 'react';

const Reveiw = (props) => {
    console.log(props);
    const { name, img, rating, reveiw } = props.reveiw;
    return (


        <div className='flex flex-col items-center justify-center mt-10'>
            <img className='rounded-full' src={img} alt="" />
            <h2 className='font-bold leading-loose text-xl'>{name}</h2>
            <p>"{reveiw}"</p>
            <p className='font-bold bg-orange-400 py-1 px-2 rounded-3xl'>{rating}</p>

        </div>
    );
};

export default Reveiw;