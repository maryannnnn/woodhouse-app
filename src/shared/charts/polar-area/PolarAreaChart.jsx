import React from 'react';
import {
    Chart as ChartJS,
    RadialLinearScale,
    ArcElement,
    Tooltip,
    Legend,
} from 'chart.js';
import { PolarArea } from 'react-chartjs-2';

ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);

export const PolarAreaChart = ({labels, dataList}) => {

    const data = {
        labels:labels,
        datasets: [
            {
                label: 'Price in $',
                data: dataList,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.5)',
                    'rgba(54, 162, 235, 0.5)',
                    'rgba(255, 206, 86, 0.5)',
                    'rgba(75, 192, 192, 0.5)',
                    'rgba(153, 102, 255, 0.5)',
                    'rgba(255, 159, 64, 0.5)',
                    'rgba(137,79,91,0.5)',
                    'rgba(66,235,54,0.5)',
                    'rgba(72,22,102,0.5)',
                    'rgba(75, 192, 192, 0.5)',
                    'rgba(175,0,0,0.4)',
                    'rgba(255, 159, 64, 0.5)',
                ],
                width: '300px'
            }
        ]
    }

    return  <PolarArea data={data} />
}


