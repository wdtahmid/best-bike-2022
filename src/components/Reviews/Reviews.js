import React from 'react';
import useReveiws from '../hooks/useReveiws';
import Reveiw from '../Reveiw/Reveiw';

const Reviews = () => {
    const [reveiws, setReveiws] = useReveiws();
    return (
        <div className='w-4/5 mx-auto mb-12'>
            <h2 className='text-center text-5xl py-20 uppercase'>Reviews</h2>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-10 text-center'>
                {
                    reveiws.map(reveiw => <Reveiw
                        key={reveiw.id}
                        reveiw={reveiw}
                    ></Reveiw>)
                }
            </div>

        </div>
    );
};

export default Reviews;