import React from 'react';
import PropTypes from 'prop-types';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import { scaleOrdinal } from 'd3-scale';
import { schemeCategory10 } from 'd3-scale-chromatic';



const getPath = (x, y, width, height) => `M${x},${y + height}
          C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3} ${x + width / 2}, ${y}
          C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
          Z`;

const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

TriangleBar.propTypes = {
    fill: PropTypes.string,
    x: PropTypes.number,
    y: PropTypes.number,
    width: PropTypes.number,
    height: PropTypes.number,
};

const colors = scaleOrdinal(schemeCategory10).range();

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

const BAR_CHART = () => {
    return (
        <div className='w-full md:w-1/2 flex flex-col items-center'>

            <h2 className='font-bold ml-8 mb-5 text-2xl text-blue-700'>Monthly Revenue In Custome Shape Chart</h2>
            <BarChart
                width={500}
                height={300}
                data={data}
                margin={{
                    top: 20,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="Month" />
                <YAxis />
                <Tooltip></Tooltip>
                <Bar dataKey="Revenue" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                    ))}
                </Bar>
            </BarChart>

        </div>
    );
};

export default BAR_CHART;