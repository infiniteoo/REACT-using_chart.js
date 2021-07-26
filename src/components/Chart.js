import { Bar, Line, Pie } from "react-chartjs-2";
import { useState } from "react";

export const Chart = () => {
  const [data, setData] = useState({
    chartData: {
      labels: [
        "Boston",
        "Worcester",
        "Springfield",
        "Lowell",
        "Cambridge",
        "New Bedford",
      ],
      datasets: [
        {
          label: "Population",
          data: [617594, 181045, 153060, 106519, 105162, 95072],
          backgroundColor: [
            "rgba(255, 99, 132, 0.6)",
            "rgba(54, 162, 235, 0.6)",
            "rgba(255, 206, 86, 0.6)",
            "rgba(75, 192, 192, 0.6)",
            "rgba(153, 102, 255, 0.6)",
            "rgba(255, 159, 64, 0.6)",
            "rgba(255, 99, 132, 0.6)",
          ],
        },
      ],
    },
  });
  return (
    <div className="chart">
      <Bar
        options={{
          plugins: {
            title: {
              display: true,
              text: "Largest Cities in Massachusetts",
              font: {
                size: 25,
              },
            },
            legend: {
              display: true,
              position: "bottom",
            },
          },
        }}
        data={data.chartData}
      />

      <Line
        options={{
          plugins: {
            title: {
              display: true,
              text: "Largest Cities in Massachusetts",
              font: {
                size: 25,
              },
            },
            legend: {
              display: true,
              position: "bottom",
            },
          },
        }}
        data={data.chartData}
      />

      
    </div>
  );
};
