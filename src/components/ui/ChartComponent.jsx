import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const options = {
  responsive: true,

  plugins: {
    legend: {
      position: 'top',
    },
  },

  scales: {
    x: {
      grid: {
        display: false,
      },
      border: {
        display: false,
      },
    },

    y: {
      display: true,

      grid: {
        display: true,
      },

      border: {
        display: false,
      },

      ticks: {
        display: false,
      },
    },
  },
};
const ChartComponent = ({ data }) => {
  const monthlyArray = Object.values(data);
  const labels = monthlyArray.map((el) => el.month);
  const incomes = monthlyArray.map((el) => el.income);
  const expenses = monthlyArray.map((el) => el.expense);

  const graphData = {
    labels,
    datasets: [
      {
        label: 'Income',
        data: incomes,
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Expense',
        data: expenses,
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };

  return (
    <div className="h-auto min-w-[320px] flex-2">
      <Bar options={options} data={graphData} />
    </div>
  );
};

export default ChartComponent;
