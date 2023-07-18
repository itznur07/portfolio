import Chart from "chart.js/auto";
import React, { useEffect, useRef } from "react";

const data = {
  labels: [
    "Javascript",
    "ReactJs",
    "Nextjs",
    "ExpressJs",
    "mongodb",
    "tailwindcss",
    "typescript",
    "firebase",
  ],
  datasets: [
    {
      label: "Skill Level",
      data: [70, 90, 70, 70, 60, 100, 60, 70],
      backgroundColor: [
        "rgba(75, 192, 192, 0.6)",
        "rgba(255, 99, 132, 0.6)",
        "rgba(54, 162, 235, 0.6)",
        "rgba(255, 206, 86, 0.6)",
        "rgba(153, 102, 255, 0.6)",
        "rgba(255, 159, 64, 0.6)",
        "rgba(201, 203, 207, 0.6)",
        "rgba(255, 99, 132, 0.6)",
      ],
      borderWidth: 1,
    },
  ],
};

const options = {
  scale: {
    ticks: { beginAtZero: true, max: 100, stepSize: 20 },
    gridLines: { color: "rgba(255, 255, 255, 0.3)" },
    pointLabels: { fontColor: "#ffffff" },
  },
};

const PolarAreaChart = () => {
  const chartContainer = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartContainer && chartContainer.current) {
      if (chartInstance.current) {
        chartInstance.current.destroy(); // Destroy the previous chart instance
      }

      const ctx = chartContainer.current.getContext("2d");
      chartInstance.current = new Chart(ctx, {
        type: "polarArea",
        data: data,
        options: options,
      });
    }
  }, []);

  return (
    <div className='h-96 bg-gradient-to-r from-[#262626] to-[#151515] flex justify-center items-center rounded-3xl'>
      <canvas ref={chartContainer} />
    </div>
  );
};

export default PolarAreaChart;
