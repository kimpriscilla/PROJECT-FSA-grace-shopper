import React from 'react';
import { useSelector } from "react-redux";
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
import faker from 'faker';

export default function Analytics() {
  const sales = useSelector((state) => state.analytics);
  console.log(sales)

  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Sales by Breed',
      },
    },
  };

  const labels = sales.map((breed) => breed.name);

  const data = {
    labels,
    datasets: [
      {
        label: 'Sales by Breed',
        data: sales.map((breed) => breed.sales),
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  };

  return <Bar options={options} data={data} />;
};
