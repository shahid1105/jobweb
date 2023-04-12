import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
} from "recharts";

const Statistics = () => {
  const assignmentResult = [
    { id: 1, assignmentName: "A:M:-1", assignmentMark: 60 },
    { id: 2, assignmentName: "A:M:-2", assignmentMark: 59 },
    { id: 3, assignmentName: "A:M:-3", assignmentMark: 58 },
    { id: 4, assignmentName: "A:M:-4", assignmentMark: 54 },
    { id: 5, assignmentName: "A:M:-5", assignmentMark: 56 },
    { id: 6, assignmentName: "A:M:-6", assignmentMark: 60 },
    { id: 7, assignmentName: "A:M:-7", assignmentMark: 60 },
    { id: 8, assignmentName: "A:M:-8", assignmentMark: 58 },
  ];

  return (
    <div>
      <h1 className="banner">Statistics</h1>
      <div className="mx-48">
        <h1 className="text-center mt-10 text-[#9ca2ea] text-4xl">
          Assignment result Chart
        </h1>
        <div className="mt-14">
          <AreaChart width={900} height={300} data={assignmentResult}>
            <Area dataKey="assignmentMark" stroke="#0a0d12"></Area>
            <Area dataKey="id"></Area>
            <XAxis dataKey="assignmentName"></XAxis>
            <YAxis></YAxis>
            <Tooltip />
          </AreaChart>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
