import React, { PureComponent } from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import {
  BarChart,
  Bar,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";
import "./Chart.scss";

function Chart() {
    const [chartData, setChartData] = useState([]);

    useEffect(() => {
        const getData = async () => {
          try {
            const response = await axios.get("http://localhost:1080/");
            const weekTrain = response.data[4].weekTrain;

            const transformedData = weekTrain.map((item) => ({
              day: item.day.toUpperCase(),
              date: item.date,
              hours: item.hours,
            }));
            setChartData(transformedData);

          } catch (error) {
            console.error("Error fetching chart data:", error);
          }
        };
    
        getData();
      }, []);

  return (
    <div className="barChart">
      <BarChart  width={350} height={150} data={chartData}>
        <XAxis dataKey="day" />
        <YAxis dataKey="hours"/>
        <Tooltip />
        <Legend />
        <Bar dataKey="hours" fill="#82ca9d" />
        {/* Want to have a trend line */}
        {/* <Line
            type="monotone"
            dataKey="hours"
            stroke="#8884d8"
            strokeWidth={2}
            dot={false}
          /> */}
      </BarChart>
    </div>
  );
}

export default Chart;
