import React from 'react';

const Reveiw = (props) => {
    console.log(props);
    const { name, img, rating, reveiw } = props.reveiw;
    return (


        <div className='flex flex-col items-center justify-center mt-10 w-full gap-3 bg-slate-300 p-10 rounded hover:bg-slate-200'>
            <img className='rounded-full h-20 w-20 border-2 border-violet-700' src={img} alt="" />
            <h2 className='font-bold leading-loose text-xl'>{name}</h2>
            <p>"{reveiw}"</p>
            <p className='font-bold bg-orange-400 py-1 px-2 rounded-3xl'>{rating}</p>

        </div>
    );
};

export default Reveiw;