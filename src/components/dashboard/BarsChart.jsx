import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

var paquetes = [12, 3, 2, 4, 2, 18, 22, 2, 3, 3, 1, 8];
var meses = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];

var misoptions = {
  responsive: true,
  animation: false,
  plugins: {
    legend: {
      display: false,
    },
  },
  scales: {
    y: {
      min: 0,
      max: 30,
    },
    x: {
      ticks: { color: "rgba(0, 220, 195)" },
    },
  },
};

var midata = {
  labels: meses,
  datasets: [
    {
      label: "paquetes",
      data: paquetes,
      backgroundColor: "rgba(0, 220, 195, 0.5)",
    },
  ],
};

export default function BarsChart() {
  return <Bar data={midata} options={misoptions} />;
}
