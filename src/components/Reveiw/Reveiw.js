import React from 'react';

const Reveiw = (props) => {
    console.log(props);
    const { name, img, rating, reveiw } = props.reveiw;
    return (


        <div className='flex flex-col items-center justify-center mt-10'>
            <img className='rounded' src={img} alt="" />
            <h2>{name}</h2>
            <p>{rating}</p>
            <p>{reveiw}</p>

        </div>
    );
};

export default Reveiw;