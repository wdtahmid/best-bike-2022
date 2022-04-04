import React, { useEffect, useState } from 'react';
import Reveiw from '../Reveiw/Reveiw';

const Home = () => {

    const [reveiws, setReveiws] = useState([]);

    useEffect(() => {
        fetch('reveiws.json')
            .then(res => res.json())
            .then(data => setReveiws(data))
    }, [])
    return (
        <div className='w-5/6 mx-auto text-center'>
            <div className='flex flex-wrap items-center justify-between h-screen'>
                <div className='w-3/6 text-left'>
                    <h1 className='text-5xl font-bold font-mono'>2014 EBR 1190RX</h1>
                    <p className='mt-3 font-serif uppercase font-semibold tracking-[.5em]'>Born to win the race!!!</p>
                    <p className='my-10 font-serif font-semibold mr-20'>The Erik Buell Racing 1190RS is a sport bike that is manufactured by Erik Buell Racing in the United States. It was introduced in June 2011 for the 2012 model year. It is powered by a 1,190 cc (73 cu in), liquid-cooled V-twin engine that delivers 175 hp (130 kW) @ 9,750 rpm. Only 100 units were planned for 2011 production.</p>
                    <button className='bg-indigo-800 hover:bg-indigo-900 text-white font-serif uppercase font-bold px-3 py-2 rounded'>live demo</button>
                </div>
                <div className='w-3/6'>
                    <img className='w-full' src="bike.png" alt="" />
                </div>
            </div>
            <div className='py-32'>
                <h2 className='font-serif font-bold capitalize text-4xl'>customer reviews (3/{reveiws.length})</h2>
                {
                    reveiws.slice(0, 3).map(reveiw => <Reveiw
                        key={reveiw.id}
                        reveiw={reveiw}
                    ></Reveiw>)
                }

                <button className='bg-indigo-800 hover:bg-indigo-900 text-white font-serif uppercase font-bold px-3 py-2 rounded mt-20'>see all reviews</button>
            </div>
        </div>
    );
};

export default Home;