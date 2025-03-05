import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

function PriceGraph({ pricePoints }) {
  const gradientColors = {
    start: 'rgba(54, 162, 235, 1)',   // Blue
    mid: 'rgba(153, 102, 255, 1)',    // Purple
    end: 'rgba(255, 99, 132, 1)'      // Pink
  };

  const chartData = {
    labels: pricePoints.map(item => item.time),
    datasets: [
      {
        label: 'Price',
        data: pricePoints.map(item => item.price),
        borderWidth: 2,
        borderColor: function(context) {
          const chart = context.chart;
          const {ctx, chartArea} = chart;

          if (!chartArea) {
            return null;
          }

          const gradient = ctx.createLinearGradient(0, 0, chart.width, 0);
          gradient.addColorStop(0, gradientColors.start);
          gradient.addColorStop(0.5, gradientColors.mid);
          gradient.addColorStop(1, gradientColors.end);
          return gradient;
        },
        backgroundColor: function(context) {
          const chart = context.chart;
          const {ctx, chartArea} = chart;

          if (!chartArea) {
            return null;
          }

          const gradient = ctx.createLinearGradient(0, chartArea.bottom, 0, chartArea.top);
          gradient.addColorStop(0, 'rgba(54, 162, 235, 0)');
          gradient.addColorStop(1, 'rgba(54, 162, 235, 0.2)');
          return gradient;
        },
        fill: true,
        tension: 0.4,
        pointRadius: 4,
        pointBackgroundColor: '#fff',
        pointBorderColor: gradientColors.mid,
        pointHoverRadius: 6,
        pointHoverBackgroundColor: gradientColors.mid,
        pointHoverBorderColor: '#fff',
        pointHoverBorderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    animation: {
      duration: 750,
      easing: 'easeInOutQuart'
    },
    interaction: {
      mode: 'index',
      intersect: false,
    },
    plugins: {
      legend: {
        display: false
      },
      title: {
        display: true,
        text: 'Price History',
        color: '#ffffff',
        font: {
          size: 20,
          weight: 'bold',
          family: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif"
        },
        padding: 20
      },
      tooltip: {
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        titleFont: {
          size: 14,
          weight: 'bold'
        },
        bodyFont: {
          size: 13
        },
        padding: 12,
        displayColors: false,
        callbacks: {
          label: function(context) {
            return `Price: ${context.raw}`;
          }
        }
      }
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: 'rgba(255, 255, 255, 0.8)',
          font: {
            size: 12,
            family: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif"
          },
          maxRotation: 45,
          minRotation: 45
        },
        border: {
          display: false
        }
      },
      y: {
        grid: {
          color: 'rgba(255, 255, 255, 0.1)',
          drawBorder: false,
        },
        ticks: {
          color: 'rgba(255, 255, 255, 0.8)',
          font: {
            size: 12,
            family: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif"
          },
          padding: 10,
          callback: function(value) {
            return value;
          }
        },
        border: {
          display: false
        }
      },
    },
  };

  return (
    <div className="w-full mx-auto mt-8 bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl shadow-xl">
      <div style={{ height: '400px' }}>
        {pricePoints.length > 0 ? (
          <>
            <Line data={chartData} options={options} />
            {/* <div className="text-white text-center ">
          
              <span className="font-semibold">Latest Yes Share Price: </span>
              <span className="text-blue-300">{pricePoints[pricePoints.length - 1]?.price || 'N/A'}</span>
            </div> */}
          </>
        ) : (
          <div className="flex items-center justify-center h-full text-white text-lg font-semibold">
            Waiting for trade data...
          </div>
        )}
      </div>
    </div>
  );
}

export default PriceGraph;
