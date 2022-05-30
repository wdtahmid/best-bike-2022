import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useReveiws from '../hooks/useReveiws';
import Reveiw from '../Reveiw/Reveiw';




const Home = () => {

    const [reveiws, setReveiws] = useReveiws();

    const naviagte = useNavigate();
    const seeAllReveiws = () => {
        const path = <Link to='/reviews'></Link>
        naviagte(path)
    };
    return (
        <div>
            <div className='w-full md:w-4/6 mx-auto text-center p-20 md:p-0'>
                <div className='flex-col-reverse flex md:flex-row items-center justify-center py-20'>
                    <div className='w-full md:w-3/6 text-center md:text-left'>
                        <h1 className='text-5xl font-bold font-mono'>2014 EBR 1190RX</h1>
                        <p className='mt-3 font-serif uppercase font-semibold tracking-[.5em]'>Born to win the race!!!</p>
                        <p className='my-10 font-serif font-semibold m-0 md:mr-20'>Best Bike in 2022. The Erik Buell Racing 1190RS is a sport bike that is manufactured by Erik Buell Racing in the United States. It was introduced in June 2011 for the 2012 model year. It is powered by a 1,190 cc (73 cu in), liquid-cooled V-twin engine that delivers 175 hp (130 kW) @ 9,750 rpm. Only 100 units were planned for 2011 production.</p>
                        <button className='bg-indigo-800 hover:bg-indigo-900 text-white font-serif uppercase font-bold px-3 py-2 rounded'>live demo</button>
                    </div>
                    <div className='w-full md:w-3/6'>
                        <img className='w-full' src="bike.png" alt="" />
                    </div>
                </div>
            </div>

            <div className='py-12 w-4/5 mx-auto text-center'>
                <h2 className='font-serif font-bold capitalize text-4xl'>customer reviews (3/{reveiws.length})</h2>
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-x-5'>
                    {
                        reveiws.slice(0, 3).map(reveiw => <Reveiw
                            key={reveiw.id}
                            reveiw={reveiw}
                        ></Reveiw>)
                    }
                </div>

                <Link to='/reviews'> <button onClick={seeAllReveiws} className='bg-indigo-800 hover:bg-indigo-900 text-white font-serif uppercase font-bold px-3 py-2 rounded mt-20'>See All Reveiws</button></Link>
            </div>
        </div>
    );
};

export default Home;