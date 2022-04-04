import React from 'react';
import { CartesianGrid, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

const data = [
    {
        "Month": "Mar",
        "Investment": 500000,
        "Sell": 55,
        "Revenue": 210401
    },
    {
        "Month": "Apr",
        "Investment": 200000,
        "Sell": 200,
        "Revenue": 124500
    },
    {
        "Month": "May",
        "Investment": 900000,
        "Sell": 101,
        "Revenue": 467010
    },
    {
        "Month": "Jun",
        "Investment": 590000,
        "Sell": 211,
        "Revenue": 200000
    },
    {
        "Month": "Jul",
        "Investment": 600000,
        "Sell": 92,
        "Revenue": 150900
    },
    {
        "Month": "Aug",
        "Investment": 700000,
        "Sell": 100,
        "Revenue": 361000
    }
];

const LINE_CHART = () => {
    return (
        <div className='w-full md:w-1/2 flex flex-col items-center'>
            <h2 className='font-bold ml-8 mb-5 text-2xl text-blue-700'>Bike Sell Per Month</h2>
            <LineChart width={500} height={300} data={data}>
                <XAxis dataKey="Month" />
                <YAxis />
                <Tooltip />
                <CartesianGrid stroke="gray" strokeDasharray="5 5" />
                <Line type="monotone" dataKey="Sell" stroke="blue" />
            </LineChart>
        </div>
    );
};

export default LINE_CHART;