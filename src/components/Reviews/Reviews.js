import React from 'react';
import useReveiws from '../hooks/useReveiws';
import Reveiw from '../Reveiw/Reveiw';

const Reviews = () => {
    const [reveiws, setReveiws] = useReveiws();
    return (
        <div className='mb-10'>
            <h2 className='text-center text-5xl py-20 uppercase'>Reviews</h2>
            {
                reveiws.map(reveiw => <Reveiw
                    key={reveiw.id}
                    reveiw={reveiw}
                ></Reveiw>)
            }
        </div>
    );
};

export default Reviews;