import React, { useRef, useEffect } from 'react';
import Chart from 'chart.js/auto';
import { Doughnut } from 'react-chartjs-2';

const PieChart = () => {
    const data = {
        labels: [
          'Red',
          'Blue',
          'Yellow'
        ],
        datasets: [{
          label: 'My First Dataset',
          data: [300, 50, 100],
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)'
          ],
          hoverOffset: 4
        }]
      };
  

  return (
      <Doughnut 
      data={{labels: [
        'Red',
        'Blue',
        'Yellow'
      ],
      datasets: [{
        label: 'My First Dataset',
        data: [300, 50, 100],
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(54, 162, 235)',
          'rgb(255, 205, 86)'
        ],
        hoverOffset: 4
      }]}}

      options={{
        title: {
            display: true,
            text: 'Transactions',
            fontSize: 20
        },
        legend: {
            display: true,
            position: 'top'
        },
        responsive: true,
        maintainAspectRatio: false,
    }}
    width={100}
    height={100}
      />
        
    
  )
};

export default PieChart;
