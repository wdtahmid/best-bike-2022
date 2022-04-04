import React from 'react';
import { Area, AreaChart, CartesianGrid, Tooltip, XAxis, YAxis } from 'recharts';
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

const gradientOffset = () => {
    const dataMax = Math.max(...data.map((i) => i.uv));
    const dataMin = Math.min(...data.map((i) => i.uv));

    if (dataMax <= 0) {
        return 0;
    }
    if (dataMin >= 0) {
        return 1;
    }

    return dataMax / (dataMax - dataMin);
};

const off = gradientOffset();
const AREA_CHART = () => {
    return (
        <div className='w-full md:w-1/2 flex flex-col items-center'>
            <h2 className='font-bold ml-0 md:ml-8 mb-5 text-2xl text-blue-700'>Revenue Against Investment</h2>
            <AreaChart
                width={500}
                height={300}
                data={data}
                margin={{
                    top: 10,
                    right: 30,
                    left: 0,
                    bottom: 0,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="Revenue" />
                <YAxis dataKey="Investment" />
                <Tooltip />
                <defs>
                    <linearGradient id="splitColor" x1="0" y1="0" x2="0" y2="1">
                        <stop offset={off} stopColor="sky" stopOpacity={1} />
                        <stop offset={off} stopColor="blue" stopOpacity={1} />
                    </linearGradient>
                </defs>
                <Area type="monotone" dataKey="Investment" stroke="#000" fill="url(#splitColor)" />
                <Area type="monotone" dataKey="Revenue" stroke="#000" fill="url(#splitColor)" />
            </AreaChart>

        </div>
    );
};

export default AREA_CHART;