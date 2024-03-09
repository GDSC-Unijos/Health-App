import React from 'react';
import { Bar } from 'react-chartjs-2';

import {
  Chart as ChartJs,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
} from 'chart.js';
ChartJs.register(
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
)




function Barchart() {
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July','August','September', 'October', 'November', 'December'],
    datasets: [
      {
        label: 'Medication',
        data: [10, 20, 30, 40, 50, 60, 70],
        backgroundColor: '#00F50A', // Red
      },
      {
        label: 'Appointment',
        data: [20, 30, 40, 50, 60, 70, 80],
        backgroundColor: '#263A5C', // Blu
      },
      {
        label: 'Treatment',
        data: [30, 40, 50, 60, 70, 80, 90],
        backgroundColor: '#FB640D', // Yellow
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className='w-[100%] md:w-[80%]'
      style={{
        margin: 'auto',
        borderStyle: 'solid',
        borderRadius: '10px',
        boxShadow: '3px 4px 2px rgba(161,164,170 ,0.5)',
      }}
    >
      <h1 className='text-center text-[#263A5C] my-[32px]'>Total Activity</h1>
      <Bar data={data} options={options} />
    </div>
  );
}


export default Barchart;