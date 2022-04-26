import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

import { toСelsius } from '../../helpers';

interface IWeatherBarProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  temp: Array<any>;
}

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  scales: {
    x: {
      stacked: true,
    },
    y: {
      stacked: true,
    },
  },
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: true,
      text: 'Temperature',
    },
  },
};

const WeatherBar: React.FC<IWeatherBarProps> = ({ temp }) => {
  const temperature = temp && temp.map(item => toСelsius(item.main.temp));
  const labels = temp && temp.map(item => item.dt_txt.split(' ')[1]);
  const data = {
    labels,
    datasets: [
      {
        label: 'Сelsius°',
        data: temperature,
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  };
  return <Bar options={options} data={data} />;
}

export default WeatherBar;
