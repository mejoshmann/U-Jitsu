import { useEffect, useState } from "react";
import axios from "axios";
import {
  Bar,
  Line,
  ComposedChart,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import "./Chart.scss";

function Chart() {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get("http://localhost:1080/training");
        const weekTrain = response.data[3].weekTrain;

        const trainingData = weekTrain.map((item) => ({
          day: item.day.toUpperCase(),
          date: item.date,
          hours: item.hours,
        }));
        setChartData(trainingData);
      } catch (error) {
        console.error("Error fetching chart data:", error);
      }
    };

    getData();
  }, []);

  return (
    <div className="barChart">
      <ResponsiveContainer className="responsive">
        <ComposedChart data={chartData}>
          <XAxis dataKey="day" />
          <YAxis dataKey="hours" />
          <Tooltip />
          <Legend />
          <Bar dataKey="hours" fill="#82ca9d" />
          <Line
            type="monotone"
            dataKey="hours"
            stroke="#8884d8"
            strokeWidth={2}
            dot={false}
          />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Chart;
