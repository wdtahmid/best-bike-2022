import React from 'react';
import { Pie, PieChart, Tooltip } from 'recharts';


const data1 = [
    {
        "Month": "Jan",
        "Revenue": 210
    },
    {
        "Month": "Feb",
        "Revenue": 124
    },
    {
        "Month": "Mar",
        "Revenue": 467
    },
    {
        "Month": "Apr",
        "Revenue": 200
    },
    {
        "Month": "May",
        "Revenue": 150
    },
    {
        "Month": "Jun",
        "Revenue": 361
    }
];
const data2 = [
    {
        "Month": "Jan",
        "Revenue": 2100
    },
    {
        "Month": "Feb",
        "Revenue": 8040
    },
    {
        "Month": "Mar",
        "Revenue": 4070
    },
    {
        "Month": "Apr",
        "Revenue": 900
    },
    {
        "Month": "May",
        "Revenue": 2500
    },
    {
        "Month": "Jun",
        "Revenue": 2610
    }
];

const PIE_CHART = () => {
    return (
        <div className='w-full md:w-1/2 flex flex-col items-center'>
            <h2 className='font-bold ml-8 mb-5 text-2xl text-blue-700'>Bike Sell Pie Chart</h2>
            <PieChart width={400} height={400}>
                <Pie
                    dataKey="Revenue"
                    isAnimationActive={true}
                    data={data1}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    fill="blue"
                    label
                />
                <Pie dataKey="Revenue" data={data2} cx={500} cy={200} innerRadius={40} outerRadius={80} fill="" />
                <Tooltip />
            </PieChart>
        </div>
    );
};

export default PIE_CHART;