import { Bar } from "react-chartjs-2";

const BarChart = () => {
  const data = {
    labels: [
      "Transportation",
      "Food",
      "Rent",
      "Groceries",
      "Miscellaneous",
      "Utility Bills",
    ],
    datasets: [
      {
        label: "Actual Budget",
        data: [12, 19, 3, 5, 2, 3, 13],
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
        order: 0,
      },
      {
        label: "Ideal Budget",
        data: [11, 9, 30, 15, 12, 13, 3],
        backgroundColor: "rgba(54, 162, 23, 0.2)",
        borderColor: "rgba(50, 162, 23, 1)",
        borderWidth: 1,
        order: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
        stacked: false,
      },
      x: {
        barPercentage: 0.6,
        categoryPercentage: 0.5,
        stacked: true,
      },
    },
  };

  return (
    <div className="flex m-auto mt-4 h-72 w-72">
      <Bar data={data} options={options} />
    </div>
  );
};

export default BarChart;
