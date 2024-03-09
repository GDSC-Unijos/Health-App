import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJs,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement
} from 'chart.js';
ChartJs.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement
)


function LineGraph() {
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [{
      label: 'Medication Intake',
      data: [10, 30, 50, 30, 56, 55, 45],
      backgroundColor: 'transparent',
      borderColor: '#263A5C',
      pointBorderColor: 'transparent',
      pointBorderWidth: 4,
      tension:0.4
    }]
  };

  const options = {}
  return (
    <div className='w-full md:w-[80%]'
      style={{
        margin: 'auto',
        borderStyle: 'solid',
        borderRadius: '10px',
        boxShadow:'3px 4px 2px rgba(161,164,170 ,0.5)',
      }}
    >
      <h1 className='text-center text-[#263A5C] mt-[40px]' >Medication intake Graph</h1>
      <Line data={data} options={options} />
    </div>
  );
};

export default LineGraph;