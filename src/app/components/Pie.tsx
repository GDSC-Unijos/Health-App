import React from 'react';
import { Pie } from 'react-chartjs-2';
import Chart from 'chart.js/auto';

import {
  Chart as ChartJs,
  ArcElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  PointElement,
  Legend,
} from 'chart.js';

// Define a custom DeepPartial type


ChartJs.register(
  ArcElement,
  CategoryScale,
  // LinearScale,
  Tooltip,
  Legend,
  PointElement
)


function Piechart() {
  const data = {
    labels: ['Schedules Attended', 'Schedules Missed'],
    datasets: [
      {
        data: [70, 30], // Percentage of schedules attended and missed
        backgroundColor: ['#00F50A', '#FB640D'], // Green for attended, Red for missed
      },
    ],
  };
  
  


  const options = { };
  
  
  
  
  return (
    <div className='w-full md:w-[60%]'
      style={{
        margin: 'auto',
        borderStyle: 'solid',
        borderRadius: '10px',
        boxShadow: '3px 4px 2px rgba(161, 164, 170, 0.5)',
      }}
    >
      <h1 className='text-center text-[#263A5C] mt-[80px] '>Schedules Graph</h1>
      <Pie data={data} options={options} />
    </div>
  );
}

export default Piechart;
