import React, { useRef, useEffect } from "react";
import Chart from "chart.js/auto";
import { Doughnut } from "react-chartjs-2";

const PieChart = () => {
  const data = {
    labels: ["Red", "Blue", "Yellow"],
    datasets: [
      {
        label: "My First Dataset",
        data: [300, 50, 100],
        backgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(54, 162, 235)",
          "rgb(255, 205, 86)",
        ],
        hoverOffset: 4,
      },
    ],
  };

  return (
    <div className="flex m-auto mt-4 w-72 h-72">
      <Doughnut
        data={{
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
              label: "My First Dataset",
              data: [300, 50, 100, 120, 80, 75],
              backgroundColor: [
                "rgb(255, 99, 132)",
                "rgb(54, 162, 235)",
                "rgb(255, 205, 86)",
                "rgb(255, 25, 56)",
                "rgb(25, 5, 6)",
                "rgb(25, 205, 86)",
              ],
              hoverOffset: 4,
            },
          ],
        }}
        options={{
          title: {
            display: true,
            text: "Transactions",
            fontSize: 20,
          },
          legend: {
            display: true,
            position: "top",
          },
          responsive: true,
          maintainAspectRatio: true,
        }}
        width={10}
        height={10}
      />
    </div>
  );
};

export default PieChart;
