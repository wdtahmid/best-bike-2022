
import React from 'react';
import AREA_CHART from './Area_Chart/Area_Chart';
import BAR_CHART from './BAR_CHART/BAR_CHART';
import LINE_CHART from './Line_Chart/Line_Chart';
import PIE_CHART from './PIE_CHART/PIE_CHART';



const Dashboard = () => {
    return (
        <div className='w-full py-2 md:p-0 md:w-5/6 mx-auto flex flex-wrap justify-between gap-y-10 my-28'>
            <LINE_CHART></LINE_CHART>
            <AREA_CHART></AREA_CHART>
            <PIE_CHART></PIE_CHART>
            <BAR_CHART></BAR_CHART>
        </div>
    );
};

export default Dashboard;